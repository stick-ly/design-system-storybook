# Stickly Apple Product Redesign

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
2. A signed-in request detects the source automatically and translates into the saved `translationLanguages` set in one operation.
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
- the native clients use the same authenticated, quota-counted `smartTranslate` callable and response shape as the extension;
- every result row has its own explicit save state; translation never implies saving.

## Review

Review is a compact memory task, not a game lobby.

- Start with the most overdue item.
- Default commitment is three prompts, while allowing the user to continue or stop.
- Use a real input, immediate correctness feedback, and the existing idempotent `scheduleWordReview` callable.
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

- native/support language: `lang`;
- primary learning language: `learnLanguage`;
- Smart Translate targets: `translationLanguages`;
- deliberate selection behavior: `selectionMode`;
- remembered-word density: `highlightMode`;
- website access mode and domain lists;
- inline practice: `enableQuiz`;
- context storage: `saveContexts`.

Compatibility behavior:

- derive `highlight` from `highlightMode` and write both;
- preserve and edit the complete `translationLanguages` set, including region-specific targets such as `zh-CN` and `zh-TW`;
- changing `learnLanguage` does not add, replace, or discard Smart Translate targets; the two preferences remain independently editable;
- retain dormant fields without presenting them;
- treat `contextRecallEnabled` as advanced until its default mismatch and rollout status are resolved.

Account, billing, extension status, feedback workflow flags, current-tab disablement, shortcuts, scores, and review logs are not preferences.

## Decisions and tradeoffs

| Decision | Rationale | Confidence |
| --- | --- | --- |
| Four permanent destinations | Translate, Review, Game, and Words now have explicit native ownership; Review and Game remain separate jobs | High |
| Preserve Smart Translate parity over anonymous single-target translation | The existing authenticated flow owns detection, multi-target results, quota, and per-result saving; replacing it with `translatePublic` would be a product regression | High |
| No local guest Words store | No safe merge/migration contract exists today | High |
| Native RTDB preferences and vocabulary | Reuses the existing shared source of truth and avoids additive server wrappers | Medium-high |
| Shared Keychain for a throttled nonsecret heartbeat | Reuses the already-provisioned app/extension access group and avoids an unregistered App Group entitlement | Medium |
| Auto-detected source plus a saved multi-target set | Matches the polished extension behavior and avoids repeated language-pair management | High |
| Context Recall remains advanced | Source defaults conflict and deployed state is unverified | High |
| Native Tile Game parity | The native app reproduces the established web flow rather than substituting the short typed Review or an embedded web route | High |
| Mobile Safari uses a hybrid trigger + bottom surface | Preserves native selection, then moves unstable work off the selection anchor | High pending physical device |

## Implementation boundary

The release slice implements the complete primary loops, a native Tile Game, and their recovery states. It does not add a local guest-data migration, multiple-profile Safari diagnostics, or cross-origin iframe guarantees. Physical-device and TestFlight claims remain separate gates and must not be inferred from simulator or archive success.
