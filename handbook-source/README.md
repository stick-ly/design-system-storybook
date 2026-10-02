# Stickly product and design handbook

This is the canonical living document for Stickly's product intent, design system,
and important decisions. People and agents use the same Markdown source. Storybook
renders that source directly alongside the current native component examples.

The current [reviewable source branch](https://github.com/stick-ly/design-system/tree/codex/living-product-handbook/docs)
owns the handbook's GitHub edit links. Publication builds can set
`VITE_STICKLY_HANDBOOK_SOURCE_REF` to another reviewed Git ref when the source moves.

Run `pnpm run storybook` and open [Handbook / Start here](http://127.0.0.1:6007/?path=/story/handbook-start-here--overview).
Read the [public hosted handbook](https://stick-ly.github.io/design-system-storybook/?path=/story/handbook-start-here--overview).
For public Pages hosting and authorized updates, see [hosting and publication](deployment.md).

## Read in this order

1. **Product:** [problem and audience](product/problem-and-audience.md), [principles](product/principles.md), [learning experience](product/learning-experience.md), [source-respecting reading](product/source-respecting-reading.md), [do's and don'ts](product/dos-and-donts.md).
2. **Decisions:** [decision register](product/decisions.md) and [detailed product reference](product/product-experience.md). Read each status and evidence boundary before treating a proposal as delivered behavior.
3. **Foundations:** [tokens](design/design-tokens.md), [composition](design/design-composition.md), [component guide](design/components.md), and [motion](design/motion.md).
4. **Source records:** [migration map](governance/migration.md), preserved design explorations and engineering records. Historical assets explain how decisions evolved; they do not supersede current policy.

## Canonical ownership

| Material | Authority |
| --- | --- |
| Product problem, principles, audience, and design priorities | `docs/product/` |
| Decision status, rationale, and review requirements | `docs/product/decisions.md` |
| Visual and interaction policy | `docs/design/` |
| Runtime tokens | `src/token-values.ts` and `src/tokens.ts`, visualized from source in Foundations |
| Components and their public behavior | `src/elements/`, `angular/`, and `stories/catalog/` |
| Historical design explorations | Dated source records indexed by the migration map |
| Application controllers, API contracts, experiments, analytics, and release proof | Respective application repositories and the coordination workspace |

The workspace and consumer guides link here and keep only local engineering
instructions. Consumer services, persistence, routing, analytics, release records,
and private operational evidence remain with their owners.

## Updating a decision

Edit the relevant canonical document and its entry in the decision register
together. Record the problem, chosen behavior, rationale, status, affected surfaces,
source/evidence, alternatives, and verification still required. Add or update a
component story when a visual or interaction rule changes. Run `pnpm run docs:check`,
review in live Storybook, and capture desktop/mobile evidence at handoff.

Use **accepted direction**, **implemented in source**, **proposed**, **experimental**,
or **historical** precisely. A passing source check, a browser contract, and a live
production or physical-device check establish different facts. Avoid demographic,
learning-outcome, or rollout claims without supporting evidence.
