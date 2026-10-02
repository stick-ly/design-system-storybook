# Archived first-round exploration — superseded

This file preserves historical rationale only. The user rejected the broad surface scope in favor of existing bubbles, Smart Translate, and review UIs. Do not implement the directions, recommendations, or proposed iterations below. The current operative plan is [brief.md](brief.md).

## Superseded first-round displayed-image identity

The main agent confirmed this actual visible order for the **superseded first round**. It must not be used to resolve a later selection from the revised set:

1. **In the margin:** `/Users/alexander/.codex/generated_images/01a053c3-d70c-7fc1-81d3-89c5e4156402/exec-611bf6db-a248-40be-b619-1a571f1c2c85.png`
2. **Scene shift:** `/Users/alexander/.codex/generated_images/01a053c3-d70c-7fc1-81d3-89c5e4156402/exec-10284edd-a89b-4017-8120-ca95d228e72e.png`
3. **Your words:** `/Users/alexander/.codex/generated_images/01a053c3-d70c-7fc1-81d3-89c5e4156402/exec-bb2a583d-2b3e-47b3-9259-36dfca6716d0.png`

The lead directly opened and inspected all three generated images. These are visual proposals, not screenshots of working code. No additional generation or scaffolding was performed by the lead.

### Image review and proposed refinements

- **In the margin:** clearest hierarchy and strongest connection to current Stickly. The generated article is a synthetic demonstration, not permission to replace a user's page with a Stickly reader. The full-height margin must remain explicitly opened and reversible. Its final implementation should preserve existing page geometry by default. The image's no-hint and saved/due labels require real matching state; they are not static success copy. The cue “Don’t put it off” is useful for pronoun order but changes the article's emotional framing; “We can put it off” would keep the controlled postponement context more consistent.
- **Scene shift:** the focused task and primary action read clearly, but the oversized instruction strip risks a generic exam feel. A later selected-direction iteration could tighten the strip and prioritize the sentence rhythm. The shown phrase is learner-entered, not a prefilled answer. Valid synonyms can fit this blank; the prototype must never label a plausible alternative semantically wrong solely because it differs from the saved phrase. Use verified acceptance or neutral model comparison.
- **Your words:** the intentional writing task is clear. The generated textarea is too tall for one short utterance; the starter and change-situation controls are too prominent. A selected-direction iteration should reduce writing height and quiet secondary controls. Because “put off” remains visible as a reference, this state is scaffolded composition, not unaided lexical recall. The local-only footer is a binding implementation promise, not decorative copy.

These refinements are noted for discussion after selection; no hidden replacement of the selected visual target will occur.

## The brief

Make Stickly better at helping someone understand, remember, and eventually use a word—not better at displaying a larger dictionary entry. Preserve immediate translation and a calm return to reading. The learner controls whether an encounter becomes practice. The visual direction remains recognizably Stickly: midnight/plum, lavender, warm amber actions, warm paper, and modest hard Long Shadows.

The design lead coordinated an independent learning-mechanism review and interaction critique through the existing `architecture_critic` and `backend_plan_review` specialists. The main agent owns ImageGen and in-app browser work. Product Design's visual-selection gate applies: show three independent image results, obtain the user's choice, then build the selected direction.

## What the current screens reveal

- Native success spends its first half on stars and a streak before reaching the useful sentence. The expanded explanation repeats base form, word type, meaning, and definition without choosing what matters.
- Extension success gives proficiency, scheduling, confidence, and save state three separate groups before teaching one useful thing.
- The game centers speed/accuracy/reward even when the learning task is a simple translation. These values should not stand in for communicative ability.
- A complete pack should be an information source, not a template that renders every nonempty field.

Directly inspected valid references: extension `after-translation-context.png`, `after-japanese-saved-visible.png`, `before-highlights.png`, `after-quiz-reveal.png`; web `before-game-solved.png`; Apple `after-native-game-expanded.jpg`, `native-review-software-keyboard.jpg`, all under their current `learner-ux-audit` visual-artifact folders. The web `after-flashcards.png` capture has compositor corruption and is not an image-generation reference.

## Archived first-round directions — not active implementation scope

Each direction changes the default learning unit and journey. They are alternatives for the initial implementation, not three screens that must all ship. Each image uses the same English expression, **put off** in the sense **postpone / verschieben**, to make the comparison fair.

| Direction | Default learning unit | Translation → practice → useful feedback | Main trade-off |
| --- | --- | --- | --- |
| **In the margin** | One encountered word plus one memorable cue | Instant meaning; voluntary due-word retrieval; one usage chunk; return to reading | Broadest fit and least friction, but little production practice |
| **Scene shift** | One meaning across a familiar and one varied situation | Instant meaning with one example; short opt-in context retrieval; exact phrase plus one distinction | Stronger contextual practice, but prompt difficulty must be controlled |
| **Your words** | One thing the learner wants to communicate | Instant meaning; learner chooses a situation; writes a short version; reveals a model and self-compares | Stronger agency and production, but more effort and no automatic semantic correctness claim |

### In the margin

The article remains the main experience. A learner deliberately opens a due word, attempts recall, and sees a concise receipt: the correct meaning, one useful chunk, and honest save status. The primary action returns to reading. An expanded, user-opened margin is an exploration of the existing bubble—not a sidebar automatically attached to every page.

Hero: after recall, “put off · verschieben,” then “Don’t put it off.” / “Schieb es nicht auf.” and “With it or them, the pronoun goes in the middle.” No conjugation table, alternatives wall, or proficiency score. “Back to reading” is primary; “Try a new context” is secondary.

Journey states: compact translation → optional one-cue expansion → due recall → success with one cue / reveal with neutral explanation / save error with retry → reading restored. The useful cue never becomes required reading and never blocks translation or saving.

### Scene shift

The dedicated practice surface is a small contextual sequence, not an isolated translation card or tile puzzle. First a familiar example supports retrieval. Only after a viable attempt does one situation change while sense, vocabulary load, and syntax remain controlled. “Different” is not automatically “better.”

Hero: “The meeting is still happening—just later.” Then complete “Let’s ___ the meeting until Friday.” The learner's typed “put off” is visible; the model translation remains hidden until checking. Feedback gives the full phrase, its meaning, optional audio, and at most one relevant distinction. A hint is visibly assisted; a shown answer is not recalled.

Journey states: instant translation → optional first scene → same-sense varied scene at later practice → correct / assisted / reveal / ambiguous-answer self-check → choice to finish or attempt another scene. Do not rotate randomly through three examples on every encounter.

### Your words

Practice starts with a user-selected communicative intention. It is a focused phrase workshop, not an endless chatbot. A learner writes one short utterance, requests a starter only when useful, then reveals a natural model. Multiple sentences may work; comparison is a learning act, not a fabricated AI verdict.

Hero: “Move the plan. Keep the promise.” Prompt: tell a teammate you want Friday instead of today. The learner writes “Can we put off the meeting until Friday?” and selects “Compare an example.” The example is hidden initially. On reveal, the learner compares meaning, target expression, and one useful structural detail, with neutral choices “I got my meaning across” / “I’d change my version.” These are explicitly self-reports, not tests of fluency.

Journey states: instant translation → optional learner-chosen intent → write / starter / skip → reveal model → self-comparison → optional revision → finish. Personal sentences remain local and are discarded unless the learner explicitly elects to keep one. No inferred interests, microphone, or cloud grading is implicit.

## Recommendation

**In the margin** is the strongest general product default: it preserves the existing useful behavior and replaces low-value reward/metadata with high-value teaching. **Scene shift** is the strongest candidate for a measured improvement to dedicated practice. **Your words** is the ambitious production-oriented alternative for learners who actively want to express themselves. The user's visual selection—not this recommendation—determines which direction the prototype implements first.
