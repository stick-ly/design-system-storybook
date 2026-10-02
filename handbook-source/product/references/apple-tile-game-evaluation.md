# Tile game inside the Stickly Apple apps

> **Historical, superseded recommendation:** the embedded-web beta direction in this 26 August 2026 evaluation was replaced by the later [Apple redesign](PRODUCT_REDESIGN.md), which requires native Tile Game parity. Preserve these options, estimates, and tradeoffs as decision history; do not implement them as current product authority.

Date: 2026-08-26

## Recommendation

Do not begin with a full SwiftUI rewrite. The implemented first slice embeds
the authenticated Stickly web application in a restricted `WKWebView`, with
native destinations for Dashboard, Word Hub, Flashcards, and Tile Game. Keep
that shared experience for the first iPhone and Mac beta, harden it on signed
builds, and only split the tile game into a bundled hybrid or SwiftUI surface
if measured platform limitations justify the extra implementation.

This is the shortest path to a seamless Apple experience without creating a
second spaced-repetition implementation. It also keeps investment proportional
to the product evidence: the observed rolling Week-4 retention cohort is 51.0%
after inline-quiz completion and 10.7% after solving a tile-game word. That is
correlation, not causation, but it argues for proving demand before funding a
native rewrite.

## Options

| Option | Estimated first usable release | Strengths | Main risks | Decision |
| --- | ---: | --- | --- | --- |
| Hosted authenticated webapp in `WKWebView` | Implemented first slice | Maximum code reuse; Dashboard, Word Hub, Flashcards, and Tile Game stay behaviorally aligned | Requires network; signed auth and external-navigation policy still need device validation; can feel web-like | Current beta direction |
| Bundled web game plus native bridge | 5-7 weeks | Offline-capable shell; stable assets; native data, audio, and persistence; one game UI across Mac/iPhone | Bridge and asset-version lifecycle add complexity | Preferred production direction if beta succeeds |
| Full SwiftUI game | 7-10 weeks | Best native accessibility, haptics, animation, keyboard, and platform integration | Highest cost; duplicates mature game logic; behavior can drift from web | Reconsider only after the beta proves value |

Estimates assume one experienced Apple engineer, existing backend contracts,
and focused QA. App Review, analytics observation windows, and redesign scope
are outside those implementation estimates.

## Implemented beta architecture

```text
SwiftUI Learn destination
  -> selects Dashboard / Word Hub / Flashcards / Tile Game
  -> opens /native-app?returnUrl=<allowlisted route>
  -> presents an exact-origin WKWebView
  <-> sticklyNativeSession v1 bridge
  -> reconciles Firebase Auth with the native signed-in user
  -> keeps Account and Premium in native SwiftUI
```

The webapp requests session reconciliation through a versioned JavaScript
message. Native compares the reported web UID with the authoritative native
user and returns either `signedOut`, `synchronized`, or a Firebase custom token.
No token is put in a URL, navigation history, analytics property, JavaScript
log, or crash report. Main-frame destinations are restricted to the production
origin and the four approved product routes; Account and Premium route back to
native SwiftUI.

If the beta advances, bundle the compiled game assets in the app and load them
from an application-owned URL scheme or read-only local server. At that point
the page does not authenticate to Firebase directly. Swift owns the user and
review session; JavaScript receives only a minimal deck and sends typed user
actions back.

## Versioned bridge

The first bridge is intentionally narrow. The handler name is
`sticklyNativeSession`; the request is
`{schemaVersion: 1, action: "reconcileSession", webUserId}`. Native replies with
one of three typed outcomes:

- `signedOut` when the native app has no authenticated user;
- `synchronized` when native and web already agree;
- `token` with a short-lived Firebase custom token when the web session must be
  repaired.

The existing webapp continues to own the game interaction and its established
review persistence. A later bundled-hybrid experiment would need a second,
separately versioned deck/review bridge with idempotent `reviewAttemptId`
acknowledgements; that broader bridge has not been implemented.

## Apple experience requirements

- Present the game as a native destination in the iPhone tab/navigation model
  and as a normal resizable Mac window or navigation destination.
- Respect safe areas, Dynamic Type around the game chrome, reduced motion,
  VoiceOver ordering, hardware keyboards, pointer input on Mac/iPad, and
  portrait/landscape rotation rules.
- Keep native open-in-Safari, retry, loading, offline, and
  authentication-expired states outside the web canvas so the user is never
  trapped in an empty WebView.
- Make the inline quiz remain the default contextual review. The tile game is
  an intentional practice destination, not a replacement for in-page review.

## Go or no-go gate after the beta

Compare the beta with the current web experience using started session,
completed session, completed words, authoritative persisted reviews, retry and
failure rate, next-day return, Week-4 retention, and qualitative reports of
web-like friction. Move to the bundled hybrid only if review completion or
repeat practice improves without degrading persistence reliability. Consider
SwiftUI only if the remaining limitations are demonstrably caused by WebView
accessibility, interaction latency, or platform integration rather than the
game proposition itself.

## Required validation

1. Signed iPhone and Mac builds: authenticated entry, expiry, logout, and
   account switching.
2. Online, slow, interrupted, and offline starts with recoverable native UI.
3. Process termination, WebKit reload, expired custom token, native logout, and
   account switching cannot leave a mismatched web session.
4. VoiceOver, Dynamic Type, reduced motion, rotation, external keyboard, Mac
   pointer/keyboard, audio interruption, and background/foreground cycles.
5. A backend assertion that each visible completed word has the expected
   authoritative review result after both inline and tile-game practice.
