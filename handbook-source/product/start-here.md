# A living guide to Stickly

Help people understand unfamiliar language, keep the words that matter, and remember them through real reading. This handbook connects that product purpose to the decisions, tokens, and components we build with.

> **Canonical home:** product and design guidance lives in this private design-system repository. These Storybook pages render the same Markdown files that agents and reviewers read. Component examples demonstrate presentation and interaction, not deployment or learning efficacy.

## Begin with the learner

Read [Problem and audience](story:handbook-product--problem-and-audience) before designing a new surface. Then use [Design principles](story:handbook-product--principles) to choose what deserves the learner's attention.

The central promise is **Translate now. Save what matters. Remember it later.** Reading remains the activity; Stickly supplies a useful moment of understanding or recall within it.

## Navigate the system

| Your question | Start here |
| --- | --- |
| What problem are we solving, and for whom? | [Problem and audience](story:handbook-product--problem-and-audience) |
| What do we prioritize when choices compete? | [Design principles](story:handbook-product--principles) |
| What happens across translation, highlights, review, and Words? | [Learning experience](story:handbook-product--learning-experience) |
| How should reading sources, authorship, and privacy work? | [Source-respecting reading](story:handbook-product--source-respecting-reading) |
| Which visual roles and layout rules should I use? | [Design tokens](../design/design-tokens.md) and [Composition](../design/design-composition.md) |
| Which component should I use? | [Action](story:components-action--all-states), [Fields](story:components-fields--input-states), [Pickers](story:components-pickers--combobox-states), and the Components sidebar |
| What are the recurring mistakes to avoid? | [Do's and don'ts](story:handbook-product--dos-and-donts) |
| What is settled, proposed, or superseded? | [Decision register](story:handbook-product--decisions) |
| Where is the detailed evidence and decision history? | [Product reference](story:handbook-product--product-reference) and [Platform references](story:handbook-product-references--index) |

## What each status means

**Accepted policy** means a direction or constraint to follow. It does not prove that every consumer implements it already.

**Implementation reference** describes behavior recorded in inspected source or a dated product reference. A component story verifies only the component's demonstrated state.

**Proposed or exploratory** means a candidate to evaluate. It must not become a shipped claim or accepted requirement by being present in this handbook.

**Historical or superseded** preserves the reason a decision changed. Use the newer identified authority for implementation.

## Use the guide while building

1. Identify the learner's task and the existing surface that owns it.
2. Read the relevant product decision and its status. Resolve contradictory references before implementing.
3. Reuse semantic tokens and existing native components. Keep routing, persistence, analytics, and product logic in the consumer.
4. Add or update the relevant Storybook states before changing a shared visual contract.
5. Preserve desktop and mobile before/after evidence at handoff. Verify consumer behavior separately.
6. Update the canonical Markdown, affected stories, and decision record when the product direction changes.

The [Decision register](story:handbook-product--decisions) defines ownership and the change workflow. The repository's [AGENTS.md](../../AGENTS.md) and [TESTING.md](../../TESTING.md) define implementation and verification obligations.

## Provenance and scope

This guide consolidates the workspace's [Product experience reference](product-experience.md), [Apple product redesign](references/PRODUCT_REDESIGN.md), [Apple user journeys](references/USER_JOURNEYS.md), design tokens, and composition rules. The detailed references retain their evidence dates and caveats.

The handbook's purpose is shared product understanding. Runtime contracts, release approval, account data, private research exports, and production credentials remain in their owning repositories and systems.
