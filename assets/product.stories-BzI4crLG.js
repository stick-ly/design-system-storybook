import{r as u}from"./render-handbook-BqPDaL2Y.js";const p=`# Learn vocabulary from the articles you already read.

Stickly helps a language learner cross the gap between encountering an unfamiliar word and being able to understand or use it later, without turning ordinary reading into a compulsory lesson.

## Category and distinctive mechanism

The primary category sentence for public marketing is **Learn vocabulary from
the articles you already read.** Its German counterpart is **Lerne Vokabeln aus
den Artikeln, die du ohnehin liest.** Articles are the clear opening example;
the same deliberate workflow also applies to supported blogs, coursework,
documentation and forums.

Explain the mechanism immediately: **look up a word → save it → meet it on
another website → recall it in place → update its next review.** A saved word
resurfaces when it actually occurs in eligible later reading. Review scheduling
does not guarantee that a website will contain the word, and passive exposure
does not count as a successful review. Focused practice remains an optional way
to review words that do not appear again soon.

Show one word on two clearly distinct pages before foregrounding optional
games, flashcards, exports or AI practice. Use a static textual explanation
alongside motion, preserve independent translation/highlight/practice controls,
and label demonstration content. Comparisons should explain learner fit with
dated official sources, including when a competing tool is the better choice.

**Status:** accepted positioning on 3 October 2026. Consumer implementation and
distribution are under review; this decision does not establish learning
outcomes, production availability or inclusion in search/AI recommendations.

## The problem to solve

An unfamiliar word can interrupt a useful article, message, or page. A translation repairs the immediate gap, but the meaning can disappear from memory. Separate study tools then ask the learner to collect, organize, and revisit material away from its original context.

Stickly connects those moments: deliberate translation, useful saved vocabulary, pronunciation, and short opportunities for recall. Every additional feature must justify its interruption and help the learner return to reading or meaningful learning.

## Audience and context

The supported audience definition is behavioral: **people who encounter a language they are learning during real browsing and want timely help remembering useful vocabulary.** The references do not establish an age range, demographic persona, CEFR distribution, profession, or market size. Do not invent those claims.

| Context | Learner's immediate job | Design implication |
| --- | --- | --- |
| A page in a learning language | Understand an unfamiliar expression and continue | Meaning first; fast translation; compact dismissible help |
| A saved word appears again | Recognize it or make one honest recall attempt | Distinguish normal reminders from due review; allow control |
| Typed or pasted text | Translate deliberately, possibly into several saved languages | Stable draft; explicit action; independent result-row saving |
| A short review session | Recall a few due words and stop freely | Clear prompt; truthful feedback; compact continuation |
| Word management | Find, correct, hear, export, or remove a word | Direct controls; useful context; reversible changes |
| iPhone, iPad, or Mac | Use native translation, review, Words, and the established Game | Respect platform interaction and observable capability |

Language direction and multi-language targets are real product requirements. The primary learning language and the saved Smart Translate target set are separate choices; changing one must not silently rewrite the other.

## Priorities in order

1. **Understand now:** deliver an accurate useful meaning after a deliberate action, and make dismissal easy.
2. **Keep what matters:** make save, remove, and correction state explicit and coherent across clients.
3. **Remember later:** support honest contextual recall, pronunciation, and manageable due review.
4. **Stay in control:** make selection translation, highlights, practice, tab, and website controls independently understandable.
5. **Explore deliberately:** evaluate additional source discovery or learning surfaces with clear evidence and consent.

The native Tile Game is an established separate destination by explicit Apple product direction. That does not make it the default replacement for contextual review.

## Evidence we have

The product reference records **140 uninstall responses from 6 April 2024 to 24 May 2026**. Annoying website changes, little foreign-language use, translation quality, and unclear purpose were recurring reasons. This supports attention to interruption, reliability, and explanation.

The historical production retention analysis covers **1 July 2025 to 1 May 2026**. Week-4 rolling retention was **51.0%** among 153 people who completed an inline quiz and **10.7%** among 196 who solved a tile-game word. These are behavioral correlations with motivated-user selection, not causal evidence that a particular interface improves learning.

Install-to-feature identity stitching was unreliable in that analysis. Do not use the reported install funnel as a trusted conversion metric until identity and event ownership are validated.

## What success means

The product direction favors useful understanding, appropriate later recall, and a quick return to reading. Translation latency, correction success, reading continuation, user control, delayed recall, and time spent on a meaningful task are candidate measures. Define thresholds and experiments before calling a new feature effective.

Do not substitute raw page decorations, generated content volume, points, or session length for demonstrated learner benefit.

## Source and status

**Status:** product synthesis from existing references; audience is task-based, with no demographic research claim. Evidence is a dated historical snapshot, not a live analytics refresh.

Sources: [Product experience reference](product-experience.md), [Apple product redesign](references/PRODUCT_REDESIGN.md), and [Apple user journeys](references/USER_JOURNEYS.md).
`,h=`# Design for the moment of understanding

Stickly should be useful at the point where language becomes difficult, then return attention to the learner's reading. Product meaning leads; visual consistency makes that help recognizable and dependable.

## Meaning before machinery

Show the translation and one clear pronunciation action before enrichment, metadata, or reference detail. Translation must remain useful when optional explanations are pending or unavailable.

The selected learning-detail direction is **One useful layer**: an explicit disclosure in the existing bubble, one sense-matched paired example, and at most one supported cue. Additional senses, forms, and exhaustive detail belong behind deliberate requests. Do not expand merely because data exists.

Explore [Translator](story:components-translator--translation), [Dictionary](story:components-dictionary--explanation), and [Audio](story:components-audio-and-celebration--audio). A catalog example illustrates a view contract; it does not establish that all consumers ship the same disclosure.

## Learner control is a core feature

Selection translation, remembered-word highlighting, inline practice, tab disablement, and website disablement are distinct controls. A learner may want one without another. Do not turn them into one broad all-or-nothing choice.

Use the current product reference's explicit selection and highlight modes. Quiet assistance is achieved through predictable choices and safe reading-surface eligibility. Earlier suppression and page-density proposals remain history where they conflict with those explicit rules.

## Honest learning feedback

An unrevealed recall attempt differs from opening a translation, listening, reading notes, or reconstructing an answer that was just shown. Passive exposure and supplemental content do not award SRS success.

Describe the actual outcome: correct, revealed, assisted, saved, sync pending, or retry needed. One successful word is not proof of mastery, speaking ability, or a knowledge percentage. Avoid inferring a linguistic diagnosis from character-level mistakes.

Explore [Inline quiz](story:surfaces-inline-review--typed) and [Success with pending save](story:surfaces-inline-review--success-saving).

## Progress through ability

Prefer meaningful language use, context, and listening over points, streak pressure, badges, and leaderboard framing. Reflection visuals orient the learner; they do not claim precise ability measurement.

This motivation policy comes from the Word Hub direction. The native Game preserves its established game contract and remains a separate task rather than redefining the entire product around scoring.

## Familiar structure, expressive emphasis

Use semantic visual roles, a clear reading order, and the shared control family. Authenticated management pages start with the established frame, eyebrow, one title, support copy, and one primary contextual action.

Midnight and plum surfaces establish the product shell. Warm paper creates deliberate reading contrast. Lavender expresses remembered words; amber expresses primary action and due review. Green confirms an actual success. Color meaning must be supported by labels, states, and accessible interaction.

Long Shadow is a connected solid offset in one semantic ink. Keep it modest and unblurred. Use geometry and hierarchy to communicate structure; avoid competing rings, halos, and decorative card nesting.

See [Design tokens](../design/design-tokens.md) and [Composition](../design/design-composition.md) for the complete authority.

## Respect sources and privacy

Real reading has authors, publishers, context, and rights. Reading discovery should lead to attributable canonical sources, with editorial trust and user choice. Private reading context must not become a passive interest profile.

These source-discovery principles are **product direction**, not a claim that a reading catalog is delivered. [Source-respecting reading](story:handbook-product--source-respecting-reading) defines the boundary.

## Source and status

**Status:** accepted guidance synthesized from the product reference, design authority, and selected learning-detail brief. Specific runtime and production coverage remains owned by consumer verification.

Sources: [Product experience reference](product-experience.md), [Apple product redesign](references/PRODUCT_REDESIGN.md), [Design tokens](../design/design-tokens.md), [Composition](../design/design-composition.md), and [Learning experience exploration: 8 September 2026](../design/learning-experience-exploration-2026-09-08/brief.md), whose current handoff is dated 28 September 2026.
`,m=`# One connected learning loop

Translation answers an immediate question. Saved vocabulary carries that answer forward. Context, pronunciation, and spaced recall make it useful again, while keeping the learner in charge of when help appears.

## The browsing loop

**Encounter → Translate → Keep → Re-encounter → Recall → Continue reading.**

1. The learner encounters an unfamiliar expression.
2. An explicit translate action, shortcut, or context-menu command requests meaning.
3. The selection-translation flow stores vocabulary according to its product contract. Smart Translate uses independent explicit save actions per language result; do not assume every translation surface auto-saves.
4. An eligible saved learned-language word can be highlighted on a later page.
5. A deliberate hover or click opens its meaning or a due inline review.
6. A review result updates scheduling; a correct result can change matching highlights to green and show success feedback.

Purple marks an ordinary remembered word. Orange marks a due review. Green marks a completed successful review. Preserve the distinction between the prompt, answer correctness, and persistence.

Explore [Translation](story:components-translator--translation), [Inline recall](story:surfaces-inline-review--typed), [Review history](story:surfaces-inline-review--history), and [Saved success](story:surfaces-inline-review--success-saved).

## Selection translation is its own system

The detailed product reference currently specifies **Show translate action** as the default: an eligible completed selection of 2–500 meaningful characters in readable content shows a small action. Clicking it starts translation.

**Shortcut/context menu only** suppresses selection-created UI. Those deliberate commands remain available in every selection mode. Editable, code, and interactive regions are excluded from the automatic affordance.

Do not silently remove otherwise eligible selection help because of inferred intent, language confidence, later copying, or scrolling. Escape and other documented dismissal events close visible UI; they do not retroactively change eligibility.

## Remembered words are a separate system

The detailed reference specifies three explicit modes: **All saved words**, **Due reviews only**, and **Off**. The default highlights up to the first fifteen eligible occurrences of each saved learned-language word, with documented ranking and mastered-word exclusions.

Highlight only the learned-language side, exclude interaction-heavy chrome and editable surfaces, and respect tab/site/practice controls promptly. A global numeric density limit would need a clear visible user setting, rather than silently stopping at an undisclosed budget.

Earlier workspace guidance proposed deliberate-intent suppression and a global page-density budget. Where those proposals contradict the more concrete product reference, treat them as superseded proposals. Keep their rationale in decision history; do not combine mutually incompatible rules.

## Review is a compact memory task

Inline quiz and the standalone Tile Game are distinct experiences. Review should offer an honest attempt, useful corrective feedback, and a way back to the page. On native Apple surfaces, the redesign specifies a small initial queue of three prompts with the freedom to stop or continue.

Do not expose an answer in supplemental content while asking the learner to recall it. Hints, reveal, and assisted reconstruction must remain distinguishable from unaided recall. A correct answer with a failed save is **correct, sync pending**, not falsely completed persistence.

## Words is the durable home

The Word Hub supports language scope, listening, context-rich collection, search, correction, removal, selection, pagination, and Anki export. It is the calm place to organize vocabulary and see useful learning orientation.

The native primary destinations are Translate, Review, Game, and Words. Settings, account, support, and Safari status remain contextual destinations. Safari enablement alone is insufficient evidence that page communication is ready.

## Experimental surfaces stay labeled

Context Recall is a **proposed experiment**, not an established shipped experience. Retained source and [catalog examples](story:components-context-recall--invitation) demonstrate candidate presentation. They do not prove production availability.

The historical proposal uses saved words only, is off by default, is page/session scoped, excludes sensitive and interactive surfaces, and requires reversible page restoration plus correctness, friction, and mature D7 survival gates. Passive exposure must not alter a canonical review result.

Do not confuse this experiment with the established inline quiz or with future source discovery. Refer to the source experiment contract before any implementation or release claim.

## Source and status

**Status:** current documented policy and implementation reference, with proposed/experimental features explicitly separated. This handbook migration does not perform a production or device audit.

Sources: [Product experience reference](product-experience.md), [Apple product redesign](references/PRODUCT_REDESIGN.md), [Apple user journeys](references/USER_JOURNEYS.md), and [Context Recall experiment](https://github.com/stick-ly/stickly-workspace/blob/main/docs/experiments/context-recall-experiment.md).
`,g=`# Reading with authors, context, and trust

Stickly begins in material the learner has a reason to read. Product direction for any future reading discovery should preserve that reason, the real author, and the source's authority.

> **Accepted onboarding slice, production unverified:** the [2 October engagement decision](decisions.md#engagement-improvements-2-october-2026) authorizes a small topic-selected sample catalog after the first saved word. Broader reading discovery and personalization remain product direction. A component story does not establish shipment.

## Real authorship and canonical sources

Recommend or reference identifiable material with real authorship and a canonical source link. Keep title, author or publisher, language, provenance, and applicable rights visible enough for a learner to judge the source.

Link to the original work. Do not replace an author's article with an unattributed synthetic rewrite or treat generated pages as an editorial reading collection. Attribution and licensing are product requirements, not footer decoration.

Source discovery should help learners reach sustainable reading they choose to return to. A polished recommendation card alone is not evidence of quality, suitability, or rights to redistribute an article.

## Suitability without invented certainty

Language-learning suitability depends on the learner, the text, and the situation. Offer supported signals and let the learner correct them. Do not infer a CEFR level, comprehension percentage, interests, or sensitive attributes from browsing behavior without a defined basis and explicit product agreement.

Label editorial judgment, source metadata, learner feedback, and automated suggestions according to their actual origin. A useful guess must not masquerade as measured ability or authoritative frequency data.

## Explicit feedback over passive profiling

Ask for deliberate preferences and feedback when personalization needs them. Explain the purpose and let the learner change or remove them. Do not silently turn page visits, selected text, saved contexts, or vocabulary into a browsing-history interest profile.

For selection and highlighting analytics, the product reference prohibits selected text, surrounding page text, and full URLs. Use counts, timing, language codes, surface categories, and documented reasons instead. The Context Recall proposal sets additional exclusions, including vocabulary, hostnames, and inferred sensitive interests.

This is an analytics boundary. Translation and optional context storage have separate functional data contracts; do not make an unsupported claim that page content is never processed anywhere.

## AI as optional assistance

Supplemental generated explanations and examples must be clearly attributed, sense matched, and optional. Translation remains useful while enrichment is pending, unsupported, or failed.

Opening a learning disclosure should show validated available content, not initiate an unannounced generation, rewrite, or second translation. Render explanations in their declared language. Identify which word or phrase a usage or form cue describes; omit an ambiguous cue.

Use a working private reporting flow before presenting Report as an actionable control. Do not ship a decorative report link or claim linguistic quality from a generated visual concept.

## What a future source feature must answer

1. What reading need is it solving, and why is a new surface necessary?
2. Who created the material, and where is its canonical home?
3. Which metadata, license, and source-quality checks support inclusion?
4. What comes from learner choice, editorial judgment, or automation?
5. What personal data is used, for which purpose, and with which controls?
6. How will sustainable reading, comprehension, and appropriate later use be evaluated?

The onboarding sample catalog has the accepted decision above. Additional source features still need their own decision record and verification; avoid public delivery claims without release evidence.

## Source and status

**Status:** the bounded onboarding catalog is accepted for implementation; broader source discovery remains product direction. Consumer PRs carry source verification and runtime evidence. No production delivery or reading-suitability claim is made.

Sources: [Product experience reference](product-experience.md), [Learning experience exploration: 8 September 2026](../design/learning-experience-exploration-2026-09-08/brief.md), and [Context Recall experiment](https://github.com/stick-ly/stickly-workspace/blob/main/docs/experiments/context-recall-experiment.md). The bounded onboarding catalog is governed by the 2 October engagement decision.
`,b=`# Do's and don'ts

Use these pairs when designing a surface, reviewing an implementation, or choosing the next product experiment. Each pair connects a learner need to a concrete rule.

## Product and learning

| Do | Don't |
| --- | --- |
| Show useful meaning quickly; put one relevant learning layer behind a deliberate disclosure. | Block translation on enrichment or expand every dictionary field by default. |
| Preserve reading context and let the learner dismiss or stop. | Force a review queue, new destination, or long drill into every translation. |
| Keep selection translation, highlights, practice, tab, and website controls independent. | Make one disable action secretly switch off unrelated systems. |
| Follow explicit eligibility and user-selected modes in the current product reference. | Blend older suppression or density proposals into the current contract without a decision. |
| Distinguish unaided recall, assisted attempts, reveal, listening, and persistence. | Award SRS success for passive exposure or describe one success as mastery. |
| Preserve the established native Game as a separate job. | Treat historical retention correlation as proof that a feature caused learning, or substitute the game for quiet review. |

## Visual structure and interaction

| Do | Don't |
| --- | --- |
| Use semantic color, typography, spacing, motion, and elevation roles. | Hardcode feature-specific color values or use palette primitives as arbitrary UI decisions. |
| Give authenticated management pages one title, readable support copy, and one primary contextual action. | Put competing headlines or an unrelated action inventory in the first viewport. |
| Separate top-level cards from the page with the prescribed surface contrast. | Put barely distinct translucent canvas cards on the same canvas background. |
| Use a modest connected solid Long Shadow in one semantic ink. | Add blurred halos, disconnected cast shadows, or multiple competing shell edges. |
| Reuse the shared field, action, choice, picker, and overlay family. | Style one-off native controls that drift in geometry, focus, and keyboard behavior. |
| Choose a searchable combobox when typing helps with a long list. | Make learners scan a large unsorted select for language or locale choices. |
| Preserve focus, native node identity, input selection, and keyboard dismissal. | Rebuild interactive DOM on every state change or hide essential controls behind pointer-only interaction. |

Explore [Fields](story:components-fields--input-states), [Pickers](story:components-pickers--combobox-states), [Dialog](story:components-overlays--dialog), and [Highlights](story:components-supporting-components--highlights).

## Sources, data, and truth

| Do | Don't |
| --- | --- |
| Attribute authors and link canonical material when exploring reading discovery. | Present a synthetic unattributed content feed as an editorial source catalog. |
| Use deliberate learner preferences and supported suitability signals. | Infer a level or a passive browsing-history interest profile as though it were established fact. |
| Respect the documented analytics exclusions for text and URLs. | Capture page content or private vocabulary in feature-event payloads. |
| Keep readiness, save state, and failed persistence truthful. | Show Saved, Ready, or sync completion based only on an optimistic visual state. |
| Label accepted, proposed, experimental, and historical references. | Turn a mockup, source file, or component story into a production claim. |
| Preserve dated evidence and state what was actually verified. | Generalize Chromium or simulator checks to physical Safari, live providers, or a deployed release. |

## Review and maintenance

Update the [Decision register](story:handbook-product--decisions) when a rule changes. Update the canonical Markdown first; Storybook renders it directly. Keep component interaction states and consumer integration evidence separate, and preserve before/after comparisons for visible changes.

Sources: [Product experience reference](product-experience.md), [Design tokens](../design/design-tokens.md), [Composition](../design/design-composition.md), [Apple product redesign](references/PRODUCT_REDESIGN.md), and [Learning experience exploration](../design/learning-experience-exploration-2026-09-08/brief.md).
`,f=`# Decisions that remain reviewable

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

\`\`\`md
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
\`\`\`

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
`,v=`# Stickly Product Experience Reference

> **Reference status, 2 October 2026:** preserved full product reference from the coordination workspace. Its explicit selection action and per-word highlight modes are the concrete policy authority where older guide proposals conflict. Context Recall remains proposed and experimental; source/catalog presence is not production evidence. Research figures retain their original observation windows. Repository-relative implementation paths below refer to the named consumer repositories. This migration does not certify every described runtime or deployment.

This document describes the current user experience across the browser extension and webapp. It is intended to help product, design, analytics, and engineering agents reason about the same product behavior.

## Accepted engagement changes under review

The [2 October 2026 decision](decisions.md#engagement-improvements-2-october-2026) adds a confirmed-save onboarding bridge to real reading, explicit Reveal and Keep reading actions with persistence feedback, and a Less highlighting shortcut to due reviews only. These changes are accepted for implementation and PR review, not verified as deployed. Existing selection, highlighting and practice contracts remain independent. The [3 October interface refinement](decisions.md#engagement-interface-refinement-3-october-2026) makes highlight choices reversible, condenses the popup and menu, pairs review actions, and opens the existing dictionary sheet after solving a word.

## Core Browsing Loop

1. The user encounters an unfamiliar word while browsing.
2. Selecting the text may show Stickly's translate action in action mode.
3. The translated word is stored in the user's shared Firebase vocabulary.
4. When that word appears on later pages, Stickly highlights it.
5. Hovering the highlight opens either a compact translation or an inline quiz, depending on the word's spaced-repetition state.

Normal remembered-word highlights are purple. A word due for review is orange. A successfully completed inline review changes matching highlights to green.

## Translation Bubble

The compact bubble contains pronunciation audio, the translated value, and an expandable menu. The current menu includes:

- Explain this
- Remove word
- Stop highlighting words
- Disable word practice
- Disable Stickly in this tab
- Disable Stickly on this website
- Edit Stickly settings
- Help center

The controls are important product behavior, not incidental settings. Survey feedback identifies unwanted page changes as the most common uninstall reason, while Amplitude data suggests users who discover per-site disabling can remain engaged.

Implementation references:

- \`extension/src/components/translator.ts\`
- \`extension/src/components/translatorMenu.ts\`
- \`extension/src/components/translationContent.ts\`
- \`extension/src/components/TTS.ts\`
- \`extension/src/managers/highlightManager.ts\`

## Inline Spaced-Repetition Quiz

When a word is due, the bubble becomes an inline typing challenge:

- The user types the translation directly while remaining on the page.
- Green characters are correct and in the correct position.
- Yellow characters are present but in the wrong position.
- Muted red/purple characters are not in the solution.
- The quiz allows three attempts.
- Hints reveal characters progressively, based on attempt similarity and word length.
- A correct answer updates the SRS state, turns matching highlights green, emits confetti, removes the quiz, and shows the translation.
- A failed or revealed answer updates the SRS state as a failure.

The intended emotional balance is useful challenge without forcing the user out of their reading flow. Current completion feedback is brief: confetti and a green highlight, with no durable explanation of progress or next review.

Implementation references:

- \`extension/src/controllers/quizController.ts\`
- \`extension/src/components/inlineQuiz.ts\`
- \`extension/src/components/celebration.ts\`
- \`extension/src/scripts/srs.ts\`

Tracked Amplitude events include:

- \`View inline quiz\`
- \`Inline quiz wrong attempt\`
- \`Inline quiz completed\`, with \`Result\` values such as \`success\`, \`failure\`, and \`revealed\`

## Webapp Word Hub

The Word Hub is the vocabulary learning and management center. It is organized around communicative ability rather than points or leaderboard framing.

### Motivation principles

- Show growing ability to understand, hear, and use words in context.
- Prefer intrinsic motivation over extrinsic rewards. Avoid points, streak pressure, badges, and shallow gamification.
- Use playful reflection visuals as orientation aids, not precision analytics.
- Treat listening as core learning. Learners should be able to hear their words in the hub.
- Treat AI-generated learning images as optional creative aids, not required decoration.
- Default to the configured learn language, while still exposing other collected language pairs.

### Current experience

The hub currently shows:

- a language focus scoped to the learner's main language, main pair, other pairs, or all words;
- words ready to hear again, with pronunciation playback;
- context-rich words and words that still need sentence context;
- playful SVG reflection visuals for vocabulary maturity, context coverage, language spread, and recent rhythm;
- a collection area for search, edit, delete, selection, and pagination;
- Anki export with language scope, visible-list, selected-word, and pair-aware options.

Implementation references:

- \`webapp/src/app/modules/word-list/wordlist/wordlist.component.html\`
- \`webapp/src/app/modules/word-list/wordlist/wordlist.component.ts\`
- \`webapp/src/app/modules/word-list/word-hub/\`
- \`webapp/src/app/services/words.service.ts\`
- \`webapp/src/app/services/tts.service.ts\`
- \`webapp/src/app/services/flashcard.service.ts\`

## Product Evidence

The uninstall survey has 140 responses from April 6, 2024 through May 24, 2026.

Major reasons:

- website changes were annoying: 24;
- users rarely used another language: 23;
- translations were not good enough: 19;
- users did not understand how Stickly works: 14;
- users did not like the learning games: 14;
- users did not understand Stickly's purpose: 8.

Amplitude retention analysis used the production project and data available from July 1, 2025 through May 1, 2026. Rolling Week-4 retention after selected behaviors was:

| Behavior | Users | Week 1 | Week 4 |
| --- | ---: | ---: | ---: |
| Complete inline quiz | 153 | 68.0% | 51.0% |
| Disable Stickly on a website | 26 | 61.5% | 46.2% |
| Judge a flashcard | 32 | 53.1% | 37.5% |
| Play pronunciation audio | 240 | 53.8% | 36.7% |
| Request term explanation | 193 | 51.8% | 35.8% |
| View word list | 97 | 46.4% | 35.1% |
| Translate a word | 743 | 46.2% | 28.8% |
| Encounter translation error | 239 | 43.5% | 25.1% |
| Solve tile-game word | 196 | 17.9% | 10.7% |

These are behavioral correlations, not causal experiment results. Cohorts that reach deeper features are inherently more motivated.

## Analytics Caveat

The extension installation event is not reliably stitched to later feature events. A seven-day funnel found only 16 translations among 727 installers, even though the translation-retention cohort contained 743 users. \`Store smart translation result\` also returned zero users despite vocabulary storage clearly existing.

Before using install-to-feature conversion as a decision metric:

1. establish a durable anonymous installation identifier;
2. preserve it through sign-in and account creation;
3. emit first-success events from the same identity;
4. validate vocabulary-save instrumentation against Firebase writes;
5. document event ownership and expected properties.

## Product Direction

The strongest evidence supports a quiet, reliable translator that turns encountered words into contextual, audio-supported micro-reviews. It does not currently support further investment in the standalone tile game without a redesign and an experiment.

## Proposed Unobtrusiveness Policy

Survey feedback currently combines at least two different sources of interruption:

1. the selection affordance appearing when a user highlights text for copying, editing, or another non-translation purpose;
2. remembered words being automatically decorated throughout a page, sometimes at high density.

These are separate product systems. They must be measured, controlled, and configured independently.

### Proposed Context Recall experiment

Context Recall is a proposed third product system. It is not current
production behaviour and must not be described publicly as shipped until its
candidate extension version passes correctness, friction, and mature D7
survival gates.

The saved-word-only experiment may replace one exact native-language word on
an eligible reading page with the learned-language word the learner previously
translated and saved. Opening the visibly marked replacement asks what the
page originally said. Only an explicit review result may update the canonical
stored word; passive exposure does not.

Context Recall is:

- off by default and initially enabled for one page/session;
- limited to canonical saved words that are due, recently failed, or recently
  learned;
- strict about language direction, accepted sense, single-word matching,
  reader-like content, and interactive/editable exclusions;
- capped at one replacement per viewport, paragraph, and page, and three shown
  replacements per rolling 24 hours during beta;
- fully reversible through show-original, restore-page, word, feature, tab,
  and site controls;
- analysed without vocabulary, page text, URLs, hostnames, browsing history,
  or inferred sensitive interests.

Selection translation, remembered-word highlighting, inline practice, and
Context Recall remain independently controllable. Turning one off must not
disable the others.

The first beta does not introduce unsaved vocabulary, infer a CEFR level, build
an interest profile, replace phrases, or run on sensitive/application
surfaces. See
[\`context-recall-experiment.md\`](https://github.com/stick-ly/stickly-workspace/blob/main/docs/experiments/context-recall-experiment.md) for the complete
eligibility, interaction, analytics, and rollout contract.

### Rule Summary

- Translation behavior is chosen explicitly in settings: show a small action after selection, or translate only through shortcut/context menu.
- The default is **Show translate action** because a deliberate click keeps selection-based translation predictable.
- Legacy persisted \`immediate\` is migration-only and normalizes to \`action\` for compatibility; it is never presented as an available behavior.
- Highlight behavior is chosen explicitly in settings: all saved words, due reviews only, or off.
- The default is **All saved words**: highlight up to the first fifteen eligible occurrences of every saved learned-language word on the page.
- Selection translation and remembered-word highlighting can be enabled, disabled, and measured independently.

### When the Selection Action Appears

In the default **Show translate action** mode, the selection action appears whenever:

- the selection is between 2 and 500 meaningful characters;
- pointer or keyboard selection has completed;
- the selected text is readable page content, not an input, textarea, contenteditable region, editor, code block, or interactive control;
- Stickly selection translation is enabled for the current tab and website.

Do not silently suppress an otherwise eligible selection because of language confidence, page language, later copying, scrolling, or an inferred reason for selecting. Those heuristics are not predictable to users. Escape, selection collapse, pointer-down elsewhere, and navigation dismiss visible UI but do not redefine whether the original selection was eligible.

Users who do not want selection UI can choose **Shortcut/context menu only**. The shortcut and context-menu command must work in every selection mode, including mixed-language pages and short ambiguous selections. The popup remains available for typed or pasted text.

### When Words Highlight

In the default **All saved words** mode, highlighting follows one deterministic rule:

- highlight up to the first fifteen eligible occurrences of every saved learned-language word in document reading order;
- highlight only the learned-language side of a stored word, not both the learned term and native-language translation;
- use purple for a normal saved word and orange when that same word is due for review;
- retain the existing due/new/proficiency/recency ranking and mastered-word exclusion, but do not remove eligible words merely because the page reached a global cap;
- avoid navigation, buttons, forms, editors, code, menus, and other interaction-dense application chrome;
- require a short intentional hover or click before opening a translation or quiz;
- respect page, tab, global highlight, and practice controls immediately.

If density still causes complaints, test a clearly labelled user setting such as a numeric per-page limit. Any enabled limit must display its value in settings rather than silently stopping after a fixed number of words.

### User Modes

Expose independent choices rather than one broad enable switch:

- **Show translate action (default):** selecting eligible readable text shows the small action; clicking it starts translation.
- **Shortcut/context menu only:** selection alone creates no Stickly UI.
- **All saved words (default):** highlight up to the first fifteen eligible occurrences of each saved learned-language word.
- **Due reviews only:** highlight up to the first fifteen eligible occurrences only when the word is due.
- **Off:** do not add remembered-word highlights.

Inline practice remains a separate setting. Turning off highlights must not turn off selection translation, and turning off selection translation must not turn off highlights, shortcut translation, or the context-menu command.

### Measurement

Instrument the two interruption classes separately:

- translation mode, eligible selection, action shown, translation started, dismissed, and manual shortcut/context-menu use;
- highlight mode, eligible saved words found, occurrences displayed per word, excluded-surface count, hover/open, quiz shown, and highlight disablement;
- per-control changes for selection translation, highlights, practice, tab disablement, and website disablement;
- immediate continuation signals such as copying, typing, scrolling, translation, and page exit.

Do not capture selected text, surrounding page text, or full URLs in analytics. Report counts, timing, language codes, surface categories, and suppression reasons.

See \`../archive/research/engagement-roadmap.html\` for the historical executable plan.
`,w={title:"Handbook/Product",parameters:{layout:"fullscreen",controls:{disable:!0},a11y:{test:"todo"}}},e=(c,l,d)=>({render:()=>u(c,{sourcePath:`docs/product/${l}.md`,status:d})}),n=e(p,"problem-and-audience","Product purpose"),t=e(h,"principles","Design guidance"),a=e(m,"learning-experience","Policy and experience"),i=e(g,"source-respecting-reading","Direction · exploratory catalog"),r={...e(b,"dos-and-donts","Review guide"),name:"Do's and don'ts"},o=e(f,"decisions","Decision register"),s=e(v,"product-experience","Full dated reference");n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"page(problem, 'problem-and-audience', 'Product purpose')",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"page(principles, 'principles', 'Design guidance')",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"page(learning, 'learning-experience', 'Policy and experience')",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"page(sources, 'source-respecting-reading', 'Direction · exploratory catalog')",...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...page(dos, 'dos-and-donts', 'Review guide'),
  name: "Do's and don'ts"
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"page(decisions, 'decisions', 'Decision register')",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"page(reference, 'product-experience', 'Full dated reference')",...s.parameters?.docs?.source}}};const x=["ProblemAndAudience","Principles","LearningExperience","SourceRespectingReading","DosAndDonts","Decisions","ProductReference"];export{o as Decisions,r as DosAndDonts,a as LearningExperience,t as Principles,n as ProblemAndAudience,s as ProductReference,i as SourceRespectingReading,x as __namedExportsOrder,w as default};
