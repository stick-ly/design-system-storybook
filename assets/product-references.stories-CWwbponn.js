import{r as l}from"./render-handbook-BqPDaL2Y.js";const c=`# Platform decisions and product history

The detailed references preserve important product choices, the options considered, and their evidence limits. Read their status before treating a historical recommendation as a current instruction.

## Current platform direction

| Reference | What it owns | Status |
| --- | --- | --- |
| [Apple product redesign](story:handbook-product-references--apple-redesign) | Native primary destinations, first run, Smart Translate, compact Review, Game parity, capability truth, and preferences | Platform direction with dated implementation and release caveats |
| [Apple user journeys](story:handbook-product-references--apple-journeys) | Translation, saved vocabulary, review, recovery, and perceived learner momentum | Journey requirements; scores are design judgments |
| [Apple improvements](story:handbook-product-references--apple-improvements) | Native translation provider, menu bar, history, language controls, and other requested refinements | Preserved improvement brief; completion not inferred |

These references support cross-platform understanding. Native source and device evidence remain in the Apple repository, and the native system is not mechanically constrained to the web component implementation.

## Historical choices and roadmaps

The [Tile Game evaluation](story:handbook-product-references--historical-game-evaluation) records an embedded-web beta recommendation from 26 August 2026. The later native Apple redesign supersedes that delivery direction with native Game parity. Its comparisons and estimates remain useful history, with their original assumptions.

The [Context-ranked translation-options roadmap](translation-options-roadmap.html) preserves the complete historical HTML plan. It records context/sense ranking, fallback, staged implementation, tests, and review criteria. Open it as a source artifact; do not infer completion or production configuration from checklists in a plan.

## Product evidence

The [Product experience reference](story:handbook-product--product-reference) retains the browser loop, Word Hub direction, original survey counts, retention table, analytics identity caveat, and detailed independent selection/highlight settings.

The selected learning-detail slice is documented in [Learning experience exploration](../../design/learning-experience-exploration-2026-09-08/brief.md). Its dated handoff supersedes older exploration prose where explicitly stated. Other image concepts remain unselected exploration.

## How to use a preserved brief

1. Read the reference's status and date.
2. Follow any link to its newer authority before implementing a changed recommendation.
3. Keep estimates, mockups, local tests, and verified deployments distinct.
4. Record the decision's owner and consumer scope when changing it.
5. Update the canonical handbook and preserve the superseded reason for later reviewers.

The original material came from the private [Stickly coordination workspace](https://github.com/stick-ly/stickly-workspace/tree/main/docs/product). It is preserved here so this design system is a standalone home for product and design decisions.
`,u=`# Stickly Apple Product Redesign

> **Platform decision reference:** preserved Apple redesign, including the 27 August 2026 native Game direction. This is the later authority over the embedded-web beta recommendation in the historical [Tile Game evaluation](apple-tile-game-evaluation.md). Its Context Recall advanced-control discussion is unresolved historical platform guidance, not proof of a delivered experiment. Release and physical-device gates remain separate.

Status: implementation reopened for native Tile Game parity and release validation on 27 August 2026.

## Product thesis

**Translate now. Save what matters. Remember it later.**

Stickly is a vocabulary memory product that begins inside real reading. The Apple apps are not installers or web launchers. They own four durable user outcomes:

1. **Translate** an unfamiliar word or short phrase deliberately.
2. **Review** a small due queue without entering a game or long session.
3. **Words**: find, inspect, and repair saved vocabulary.
4. **Game**: complete the established character-tile recall round without leaving the native app.

Safari is the highest-context capture surface. The iPhone and Mac apps are the calm place to translate directly, manage memory, and recover browser capability.

## Prioritized jobs to be done

| Priority | Job | Success condition | Primary surface |
| --- | --- | --- | --- |
| 1 | Understand a word or phrase without losing reading momentum | Result appears after one deliberate action and can be dismissed in one action | Safari, Translate |
| 2 | Keep a useful word for later | Save state is explicit, reversible, and synchronized | Safari, Translate |
| 3 | Recall a few due words in under two minutes | A short queue starts quickly, gives immediate feedback, and can stop at any time | Review, Safari |
| 4 | Find or correct something already learned | Search, edit, and delete are direct and native | Words |
| 5 | Run the familiar Tile Game on iPhone, iPad, or Mac | The native game preserves the web game’s deck, answers, motion, sound, scoring, persistence, and results | Game |
| 6 | Choose translation targets and browsing behavior | Smart Translate reuses a saved target-language set instead of asking for a pair on every request | Settings |
| 7 | Activate or recover Safari capability | The app states what is known, unknown, and actionable | Contextual Safari status |
| 8 | Keep account and entitlement state coherent | Sign-in, subscription, and deletion never masquerade as preferences | Account |

## Product hierarchy

The permanent product hierarchy is:

- Translate
- Review
- Game
- Words

Account, Settings, Premium, Support, and Safari setup are contextual destinations or secondary scenes. They are not peers of the learning loop.

The redesign removes these top-level structures:

- Start as a permanent tab;
- Learn as a hub that merely links elsewhere;
- Dashboard as a native destination;
- Tile Game and Flashcards as embedded-web navigation; the Tile Game is native;
- Premium and Support as permanent iPhone tabs;
- Safari setup as the default first screen after it is no longer relevant.

The standalone Tile Game remains distinct from contextual Review. Earlier retention evidence still argues against replacing the quiet three-prompt Review with the game, but the established Game is now a first-class native surface by explicit product direction.

## First-run contract

The app opens on Translate, not a questionnaire or extension checklist.

1. The input is usable immediately and remains intact through sign-in or an error.
2. A signed-in request detects the source automatically and translates into the saved \`translationLanguages\` set in one operation.
3. Source override is available as a secondary control; it is never a required language-pair form.
4. Each returned language can be saved independently without changing the other results.
5. A signed-out user sees the preserved draft and a direct sign-in action before the authenticated, quota-counted request.
6. Safari setup is offered after value, or earlier only when the user explicitly opens Safari status.
7. Completion requires a real extension heartbeat or a clearly labeled “enabled, awaiting first page” state. Enablement alone never becomes “ready.”

There is no local guest vocabulary store in this slice. Smart Translate, durable Words, and Review use the shared Stickly account. The app does not substitute the single-target public endpoint because doing so would change the established Smart Translate result model or introduce a silent local-to-cloud merge contract.

## Returning-use contract

- Restore the last deliberate primary destination.
- Never force-navigate to Review because items are due; show a restrained count and invitation.
- Preserve unfinished Translate input across backgrounding and sign-in.
- Preserve a Review draft through a transient network failure, but never trap the user behind a discard confirmation.
- Surface Safari status only when it is actionable, stale, or explicitly requested.

## Smart Translate

Smart Translate is input-first and intentional:

- source text is editable;
- source language is detected automatically and shown with an optional override;
- one request returns the saved multi-language target set;
- target languages are managed once in Settings, not repeatedly before each request;
- translation starts only from an explicit action;
- the native clients use the same authenticated, quota-counted \`smartTranslate\` callable and response shape as the extension;
- every result row has its own explicit save state; translation never implies saving.

## Review

Review is a compact memory task, not a game lobby.

- Start with the most overdue item.
- Default commitment is three prompts, while allowing the user to continue or stop.
- Use a real input, immediate correctness feedback, and the existing idempotent \`scheduleWordReview\` callable.
- A correct answer and persistence are separate outcomes. If persistence fails, say “Correct — sync pending” and allow retry with the same attempt ID.
- Empty, loading, offline, deleted-word, and signed-out states remain useful and recoverable.

## Capability truth

Safari health is a vector, not a boolean:

- package state: installed by virtue of the containing app, or unknown;
- platform enablement: enabled, disabled, unknown, or unavailable;
- page communication: never observed, recent, stale, or unavailable;
- website access: reported by extension, denied/limited, or unknown;
- authentication convergence: signed out, converged, changing, or inconsistent;
- backend operation: last success, transient failure, auth failure, or unknown.

Only explicit, observable evidence may advance a dimension. Unknown is a valid state, especially on iOS 17–26.1 where the public enablement query is unavailable.

## Preference contract

Canonical native controls:

- native/support language: \`lang\`;
- primary learning language: \`learnLanguage\`;
- Smart Translate targets: \`translationLanguages\`;
- deliberate selection behavior: \`selectionMode\`;
- remembered-word density: \`highlightMode\`;
- website access mode and domain lists;
- inline practice: \`enableQuiz\`;
- context storage: \`saveContexts\`.

Compatibility behavior:

- derive \`highlight\` from \`highlightMode\` and write both;
- preserve and edit the complete \`translationLanguages\` set, including region-specific targets such as \`zh-CN\` and \`zh-TW\`;
- changing \`learnLanguage\` does not add, replace, or discard Smart Translate targets; the two preferences remain independently editable;
- retain dormant fields without presenting them;
- treat \`contextRecallEnabled\` as advanced until its default mismatch and rollout status are resolved.

Account, billing, extension status, feedback workflow flags, current-tab disablement, shortcuts, scores, and review logs are not preferences.

## Decisions and tradeoffs

| Decision | Rationale | Confidence |
| --- | --- | --- |
| Four permanent destinations | Translate, Review, Game, and Words now have explicit native ownership; Review and Game remain separate jobs | High |
| Preserve Smart Translate parity over anonymous single-target translation | The existing authenticated flow owns detection, multi-target results, quota, and per-result saving; replacing it with \`translatePublic\` would be a product regression | High |
| No local guest Words store | No safe merge/migration contract exists today | High |
| Native RTDB preferences and vocabulary | Reuses the existing shared source of truth and avoids additive server wrappers | Medium-high |
| Shared Keychain for a throttled nonsecret heartbeat | Reuses the already-provisioned app/extension access group and avoids an unregistered App Group entitlement | Medium |
| Auto-detected source plus a saved multi-target set | Matches the polished extension behavior and avoids repeated language-pair management | High |
| Context Recall remains advanced | Source defaults conflict and deployed state is unverified | High |
| Native Tile Game parity | The native app reproduces the established web flow rather than substituting the short typed Review or an embedded web route | High |
| Mobile Safari uses a hybrid trigger + bottom surface | Preserves native selection, then moves unstable work off the selection anchor | High pending physical device |

## Implementation boundary

The release slice implements the complete primary loops, a native Tile Game, and their recovery states. It does not add a local guest-data migration, multiple-profile Safari diagnostics, or cross-origin iframe guarantees. Physical-device and TestFlight claims remain separate gates and must not be inferred from simulator or archive success.
`,p=`# Stickly Apple User Journeys

> **Journey reference:** preserved native Apple interaction requirements. Momentum scores are design judgments, not measured analytics or evidence of learning effectiveness. Deployment and physical-device verification are owned by the Apple repository.

Momentum is the user’s perceived progress toward returning to useful reading or learning, scored from 0 to 5.

## First useful translation

1. Launch into Translate with the input focused or immediately reachable.
2. Enter or paste text.
3. Leave source language on Auto or optionally choose an override.
4. If signed out, sign in and return to the unchanged draft.
5. Tap Smart Translate.
6. Read the detected source and parallel results for the saved target-language set.
7. Save any useful result row independently, then continue or open Words.

| Beat | Momentum | Requirement |
| --- | ---: | --- |
| App opens | 4 | No setup wall |
| Text entered | 4.5 | Input stays stable |
| Translate tapped | 5 | Immediate progress state |
| Result | 5 | Result is dominant, not surrounded by navigation |
| Sign in, if needed | 3.5 | Draft and source choice survive the round trip |
| Per-language Save | 4.5 | Other translation rows remain unchanged |
| Saved | 5 | Clear, reversible success on that row |

Failure: request 4 → error 2.5 → Retry 4, or edit text 4. The draft, source mode, and target set never disappear.

## Returning Review

1. Open Review from the tab/sidebar or due-count invitation.
2. See the most overdue prompt.
3. Type the remembered translation.
4. Submit and receive immediate correctness feedback.
5. Persist using one idempotent review-attempt ID.
6. Continue for up to three prompts or stop.

| Beat | Momentum | Requirement |
| --- | ---: | --- |
| Due invitation | 4.5 | Invitation, never forced routing |
| Prompt | 4 | One task, no game lobby |
| Typing | 3.5 | Real input, multilingual keyboard support |
| Incorrect | 3 | Input remains editable and focused |
| Correct | 5 | Compact, confident feedback |
| Queue summary | 5 | Stop and continue are equally safe |

## Words management

1. Open Words.
2. Search locally across the synchronized collection.
3. Select a word.
4. Inspect translation, context, proficiency, and next review.
5. Edit translation/context or delete with confirmation.
6. Return to the same filtered position.

Empty Words points to Translate. Offline Words shows the last synchronized content when available and names the sync state.

## Safari activation

1. Open Safari status from Settings or an actionable card.
2. Read the separate enablement and communication dimensions.
3. Open the most precise available system settings surface.
4. Enable the extension and website access.
5. Open a normal webpage and perform the first deliberate selection action.
6. Return to the app or refresh status; a recent heartbeat confirms page communication.

On iOS 17–26.1, platform enablement remains Unknown. The app never replaces that with a guess; a recent page heartbeat may still prove that the extension has executed.

## Safari selection translation

1. Select text with Safari’s native handles/menu.
2. After selection stabilizes, see a 44×44 Translate action that avoids the selected text.
3. Copy, adjust, scroll, or tap elsewhere without a translation request.
4. Tap Translate to commit.
5. Stickly snapshots the text, clears native selection, and opens a stable bottom surface in loading state.
6. Read the result and explicit Saved state; Undo is available when automatic storage occurred.
7. Close, tap outside, scroll, or start a new selection to return to browsing.

| Beat | Momentum | Requirement |
| --- | ---: | --- |
| Reading | 5 | No competing UI |
| Native selection | 4 | Safari remains familiar |
| Translate action | 4 | Optional and collision-aware |
| Translate tap | 5 | Immediate bottom-surface feedback |
| Result | 5 | Answer and save state are legible |
| Dismiss | 5 | One action; the underlying page event proceeds naturally |

## Safari known-word recall

1. Tap a safe, noninteractive due-word highlight.
2. See a bottom peek with translation and due state. No keyboard opens.
3. Tap Practice.
4. The existing real input becomes visible and receives focus synchronously in the same user event.
5. Type and submit.
6. Incorrect keeps the keyboard open; correct blurs, updates the page, and returns to reading.
7. Persistence failure becomes Correct — sync pending, not an incorrect answer.

## Recovery journeys

| Failure | User-facing state | Recovery |
| --- | --- | --- |
| Offline translation | Draft + plain-language error | Retry or edit |
| Auth expired while saving | Translation remains visible | Reauthenticate, then retry Save |
| Word deleted elsewhere | Review item becomes unavailable | Skip and refresh queue |
| Review persistence timeout | Correct — sync pending | Retry same attempt ID |
| Extension disabled | Enablement problem | Open extension settings |
| Extension enabled but never observed | Awaiting first page | Open a normal page and use Stickly |
| Heartbeat stale | Last seen time, not “broken” | Refresh page/use Stickly/check permissions |
| Website access denied | Limited site access | Open Safari extension permissions |
| Physical keyboard connected in Simulator | Keyboard result inconclusive | Repeat on physical iPhone without hardware keyboard |

## Required onboarding scenarios

The redesign must exercise: fresh signed-out, fresh signed-in, returning with due words, returning with none due, extension disabled, enablement unknown, extension heartbeat never seen, and stale heartbeat. No scenario may land in a permanent checklist or blank dashboard.
`,h=`# Apple Apps Improvements

> **Improvement brief:** preserved requested Apple changes and original working notes. Items here are requirements or proposals; inclusion does not establish completion. Use the current [Apple redesign](PRODUCT_REDESIGN.md) and consumer evidence to resolve conflicts.

We need to improve some parts of the apple applications (iOS & macOS). Use a high-intelligence agent as the orchestrator, planner and reviewer, setting a high quality standard. Use cheaper models for the implementation. Paralellize work where possible. Do a good balance for testing, screenshot tests vs unit tests. We need to make sure the changes still look appropriate and flows work end to end at the finish.

## Native iOS translation extension
Use the iOS \`TranslationUIProvider\` to offer stickly as the native iOS Translate option. A sheet like this should open when users highlight any text and select Translate:

> [en] counterintuitive
> [de] kontraintuitiv
>
> Contrary to what you'd naturally expect.
>
> ☆ Added to Stickly
>
> [TTS Icon] · [Delete]

During onboarding, users should be prompted to define Stickly as their default Translator. This cannot be done automatically, but display a primary button to open this setting along a "Not now" ghost button.

## Smart Translate & Menu Bar Popover
When opening the smart translate feature, the text input should be focused, so users can start typing imediately. It should not trap them though, it should be easy to get rid of again.
Users can currently save words from the Smart Translator, but not remove them. Allow that as well.
TTS should be available for the original word AND the translations.
The Menu Bar Popup should offer not only copy, but save/delete and TTS as well. The Menu Bar Popup should only have the vertical space it needs if possible, expanding when more space is needed for the translations etc.

On iOS, put the History button on the left in the header bar, left of "Translate". Use a native iOS Button for it, applying the same style type as the other button in that row, the account button.

Remove the "Auto detect • 1 language" row below the input field. Instead, display the language pairs in the empty state. SOmething like this:
> Detects the source automatically and translates into [nativelang], [lang1], [lang2]. {Edit languages}.

When the translation is done, add a action to {edit the languages} at the bottom as well. Also add an action to change the automatically detected language where it says [Detected English].

### History
The History should allow users to Hear, Copy and Save / unsave words.
Expand all translations in the history by default.

## Review
The Review needs material improvement. Currently, the character boxes are very large, taking a lot of space and often not fitting inside the horizontally available space. THey are also not square. Make this more dense and squared.
Like in the webapp, add some subdued hints, randomly spread across the word, based on how well the user is supposed to know the word and how wrong they were in the previous attempt. If the word is already on a high level, show no hints.

## Game
The Popup is only visible when few characters are left in the desktop app. It should have a fixed position at a high z-index rendering.
The success-screen elements for knowledge, accuracy and time are still using the broken styling instead of the stickly brand face&base / shadow style we use in buttons. Fix that.

When no more words are available ("empty-state"), it should clearly state that no words are due for review now. Display how many words the user collected, and how many of them are currently strong in memory. Encourage them to read and translate more. Use that same UI for the "Nothing is due" view in the Review section.

### Motion Design
1. The Challenge element should transition down from the top instead of just appearing.
2. When using the popup, the tiles should disappear in a staggered transition, just like inside the webapp. Copy its animation.

## Words
Task a main subagent to completely redesign the Words section. Orient on the Webapp version of it, which should serve as strong inspiration and aspiration, since it's already well-polished.

# User Authentication
The auth often gives me issues like double auth or something. Fix that. I think we originally made the auth process unnecessarily complicated because I wanted the webapp & the native app to always share auth. I think it's fair and common for users to just sign into the web app if they visit stick.ly on their phones themselves. We just need to make sure the app and all its extensions are authenticated.
`,m=`# Tile game inside the Stickly Apple apps

> **Historical, superseded recommendation:** the embedded-web beta direction in this 26 August 2026 evaluation was replaced by the later [Apple redesign](PRODUCT_REDESIGN.md), which requires native Tile Game parity. Preserve these options, estimates, and tradeoffs as decision history; do not implement them as current product authority.

Date: 2026-08-26

## Recommendation

Do not begin with a full SwiftUI rewrite. The implemented first slice embeds
the authenticated Stickly web application in a restricted \`WKWebView\`, with
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
| Hosted authenticated webapp in \`WKWebView\` | Implemented first slice | Maximum code reuse; Dashboard, Word Hub, Flashcards, and Tile Game stay behaviorally aligned | Requires network; signed auth and external-navigation policy still need device validation; can feel web-like | Current beta direction |
| Bundled web game plus native bridge | 5-7 weeks | Offline-capable shell; stable assets; native data, audio, and persistence; one game UI across Mac/iPhone | Bridge and asset-version lifecycle add complexity | Preferred production direction if beta succeeds |
| Full SwiftUI game | 7-10 weeks | Best native accessibility, haptics, animation, keyboard, and platform integration | Highest cost; duplicates mature game logic; behavior can drift from web | Reconsider only after the beta proves value |

Estimates assume one experienced Apple engineer, existing backend contracts,
and focused QA. App Review, analytics observation windows, and redesign scope
are outside those implementation estimates.

## Implemented beta architecture

\`\`\`text
SwiftUI Learn destination
  -> selects Dashboard / Word Hub / Flashcards / Tile Game
  -> opens /native-app?returnUrl=<allowlisted route>
  -> presents an exact-origin WKWebView
  <-> sticklyNativeSession v1 bridge
  -> reconciles Firebase Auth with the native signed-in user
  -> keeps Account and Premium in native SwiftUI
\`\`\`

The webapp requests session reconciliation through a versioned JavaScript
message. Native compares the reported web UID with the authoritative native
user and returns either \`signedOut\`, \`synchronized\`, or a Firebase custom token.
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
\`sticklyNativeSession\`; the request is
\`{schemaVersion: 1, action: "reconcileSession", webUserId}\`. Native replies with
one of three typed outcomes:

- \`signedOut\` when the native app has no authenticated user;
- \`synchronized\` when native and web already agree;
- \`token\` with a short-lived Firebase custom token when the web session must be
  repaired.

The existing webapp continues to own the game interaction and its established
review persistence. A later bundled-hybrid experiment would need a second,
separately versioned deck/review bridge with idempotent \`reviewAttemptId\`
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
`,v={title:"Handbook/Product references",parameters:{layout:"fullscreen",controls:{disable:!0},a11y:{test:"todo"}}},e=(s,o,d)=>({render:()=>l(s,{sourcePath:`docs/product/references/${o}`,eyebrow:"Product · platform · provenance",status:d})}),n=e(c,"index.md","Reference directory"),t=e(u,"PRODUCT_REDESIGN.md","Native platform direction"),a=e(p,"USER_JOURNEYS.md","Journey requirements"),i=e(h,"apple-improvements.md","Improvement brief"),r=e(m,"apple-tile-game-evaluation.md","Historical · superseded");n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"page(index, 'index.md', 'Reference directory')",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"page(redesign, 'PRODUCT_REDESIGN.md', 'Native platform direction')",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"page(journeys, 'USER_JOURNEYS.md', 'Journey requirements')",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"page(improvements, 'apple-improvements.md', 'Improvement brief')",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"page(game, 'apple-tile-game-evaluation.md', 'Historical · superseded')",...r.parameters?.docs?.source}}};const b=["Index","AppleRedesign","AppleJourneys","AppleImprovements","HistoricalGameEvaluation"];export{i as AppleImprovements,a as AppleJourneys,t as AppleRedesign,r as HistoricalGameEvaluation,n as Index,b as __namedExportsOrder,v as default};
