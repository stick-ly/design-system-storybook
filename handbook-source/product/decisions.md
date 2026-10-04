# Decisions that remain reviewable

Keep the reason, status, scope, and evidence beside a product decision. A living system records changes instead of letting old plans silently become current requirements.

## Decision register

| Decision | Status | Authority and consequence |
| --- | --- | --- |
| Translate now, save what matters, remember later | Accepted product direction | Existing product reference and Apple redesign; preserve the return to reading. |
| Vocabulary from the articles you already read | Accepted on 3 October 2026; implementation under review | [Category and mechanism](problem-and-audience.md#category-and-distinctive-mechanism): show the same saved word on another website and honest inline recall before optional features. |
| Selection translation and remembered-word highlighting are separate systems | Accepted policy | Product reference; keep controls and measurements independent. |
| Explicit selection action and documented per-word highlight modes | Current documented policy | Detailed product reference; conflicting root-guide intent suppression and global density budget are superseded proposals. |
| One useful layer in the existing bubble | Selected direction with dated implementation handoff | Learning exploration's 28 September handoff; optional sense-matched content, no new reading destination in that slice. |
| Intrinsic ability and listening before reward pressure | Accepted Word Hub direction | Product reference; reflection visuals do not establish precision analytics. |
| Translate, Review, Game, and Words as native destinations | Accepted Apple product direction | Apple redesign; native Game parity supersedes the older embedded-web beta recommendation. |
| Semantic tokens and shared native component authority | Accepted architecture/design contract | Token/composition references; consumer services and product controllers remain separate. |
| Context Recall | Proposed experiment; production unverified | Historical experiment contract and product reference; retained source/catalog is not release proof. |
| First saved word to real reading | Accepted on 2 October 2026; implementation under review | Onboarding offers own reading or a bounded topic-selected source sample. See the [engagement decision](#engagement-improvements-2-october-2026). |
| Optional brief review and quieter highlights | Accepted on 2 October 2026; implementation under review | Reveal persists an unsuccessful review with honest save state; Keep reading dismisses; Less highlighting selects due-only mode. |
| Stable field dimensions across interaction states | Implemented locally, 2026-10-03 | [Component guide](../design/components.md#field-focus-stays-inside-the-control); inset focus and error accents follow the button bottom edge. Consumer releases remain separate. |

## Status vocabulary

**Accepted:** the product owner has selected the direction or the existing authority already defines it. Acceptance does not certify implementation coverage.

**Implemented locally:** source and local checks cover the stated slice. Preserve the exact checks and remaining limitations.

**Released and verified:** the specific consumer, revision, environment, and user flow have release evidence. Do not infer this status from a component story.

**Proposed or exploratory:** a candidate with questions or acceptance gates still open. An experiment requires its own eligibility, consent, measurement, and rollout record.

**Superseded or historical:** a preserved earlier recommendation with a link to the newer authority. It remains accessible for rationale but no longer instructs implementation.

## Ownership

These are responsibilities rather than invented assignments to individual people:

| Role | Owns |
| --- | --- |
| Product decision owner | The problem, priority, accepted behavior, evidence threshold, and rollout decision |
| Design-system maintainer | Canonical handbook, tokens, component API, visual/interaction contract, and reusable stories |
| Consumer maintainer | Application state, routing, persistence, analytics, adaptation, and end-to-end verification |
| Reviewer | Evidence quality, accessibility, compatibility, and fidelity to the selected decision |

The person implementing a change records the actual named owner or team in its decision record or PR. Agents must not claim authority to release, publish, or process additional data because a role appears here.

## Change workflow

1. Identify the current authority and scope. Read the related canonical file and component stories before editing.
2. State the problem, learner context, options, chosen direction, and tradeoff. Link supporting evidence with its date and limits.
3. Mark status explicitly. Separate product acceptance from local source checks, deployment, device behavior, and learning outcomes.
4. Edit the canonical Markdown in this repository. Its Storybook story imports the same source; avoid a second prose copy in a story.
5. Update affected tokens or component states and consumer adaptations together when public contracts change.
6. Run appropriate compilation, interaction, accessibility, and desktop/mobile visual checks. Keep generated evidence out of source control.
7. Link the review and evidence. Mark replaced guidance as superseded and link forward to the new decision.
8. Publish or deploy only within the user's authorization, preserving independent consumer release boundaries.

## Decision record template

```md
# Decision: concise title
Status: proposed | accepted | implemented locally | released and verified | superseded
Owner: named person or team
Date: YYYY-MM-DD
Scope: affected surfaces and repositories
Problem and learner context:
Options and selected direction:
Tradeoffs and compatibility:
Evidence, dates, and limitations:
Acceptance criteria and verification:
Rollout and privacy boundaries:
Supersedes / superseded by:
```

## Preserve the source trail

The [Product reference](story:handbook-product--product-reference) retains the original behavior, survey, retention, and analytics caveats. [Platform references](story:handbook-product-references--index) preserve native redesign, journeys, improvements, earlier Game evaluation, and the historical translation-options roadmap.

Private source references require access. Missing access must not be replaced by invented summaries or by copying credentials or sensitive research into the public bundle.

## Engagement improvements, 2 October 2026

**Owner:** Alexander Oemisch (product acceptance); implementation agents prepare source and evidence for review.
**Status:** accepted direction, implementation under review. No deployment or retention improvement is established.

The learner needs a clear connection between the first saved word and their own reading, with optional review and accessible control over page decoration. The selected behavior is:

- After confirmed storage, say “Saved. Stickly can help you remember this word when you encounter it again.” Offer “Try it on something you read,” with own-reading guidance or an optional topic choice. Account creation remains available.
- Topics are Science and nature, Culture and history, and Everyday life. A static sample catalog covers English, German, Spanish, French, Italian, Japanese, Ukrainian, Brazilian Portuguese, and Vietnamese. Each link identifies its publisher or author, title, and language and opens the canonical original in a new tab. Unknown languages or unavailable samples retain the own-reading path. Topic choices are session-local, with no interest profile.
- A due inline review offers Reveal and Keep reading. Reveal shows the meaning immediately and saves an unsuccessful review. Scheduling appears only after authoritative persistence. Failed saves retain meaning and provide retry using the same attempt ID. Keep reading dismisses without an additional review write. Existing successful-answer and confidence behavior remains.
- Less highlighting changes All saved words to Due reviews only; it preserves selection translation and practice preferences. Highlights off remains a separate choice. Undo restores the exact previous mode.

This bounded source list was chosen over a recommendation system because interests and reading ability are unknown. Samples are topic choices, not personalized suitability or level claims. Source accessibility is checked without login at inclusion time and can change later.

Review, selection translation, highlighting, and practice remain separate systems. New analytics are explicit categorical actions only, with no page text, vocabulary, URLs, hostnames, or selection-exposure stream. Existing consent and identity handling applies.

Acceptance requires consumer persistence and dismissal tests, preference synchronization and exact Undo, desktop/mobile visual evidence, shared component contracts, and emulator integration. Source tests, browser fixtures, physical Safari behavior, and production retention remain distinct evidence. Merging and release require separate authorization.


## Engagement interface refinement, 3 October 2026

**Status:** accepted direction; source implementation and visual review in progress. No deployment claim.

The first review exposed excessive onboarding copy, a popup that only reduced highlights, and a menu mixing commands with explanatory status. Keep each surface focused on its immediate task:

- Onboarding presents one next step at a time. After a confirmed stored word, the reading exercise and its actual translation remain visible until the learner explicitly chooses Continue; only then does the compact reading bridge replace them. There is no automatic transition timer. Its interface chrome is excluded from remembered-word decoration while the reading exercise remains available for manual translation.
- The popup has one clearly selected All / Due / Off highlight control. Every mode, site access, and tab access can be restored directly, without depending on Undo. Persistent website access uses compact Enable/Disable site buttons beside the actual hostname status; Pause this tab and Resume this tab remain separate temporary actions. The controls retain confirmed state while saving and show a local failure rather than success. Translation remains within the compact initial popup view. Longer explanations of independent preferences belong in settings.
- The translation menu contains compact grouped commands. A Highlights submenu exposes all three modes and marks the current selection. Less highlighting is an additional shortcut only while All is active. It never becomes a disabled informational row. Submenus support keyboard entry, return, and Escape.
- Reveal and Keep reading sit beside each other as equally accessible actions. The input legend has no divider. A solved word offers Open dictionary, which opens the existing side sheet for that stored word instead of another inline expansion. Review persistence, confidence, and authoritative scheduling retain their existing behavior.

Verify reversibility, failure and pending states, keyboard access, actual dictionary opening, narrow layouts, and desktop/mobile before/after evidence. These interface corrections do not establish a retention effect.
