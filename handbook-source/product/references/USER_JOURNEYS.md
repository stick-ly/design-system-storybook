# Stickly Apple User Journeys

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
