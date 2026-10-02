# Decisions that remain reviewable

Keep the reason, status, scope, and evidence beside a product decision. A living system records changes instead of letting old plans silently become current requirements.

## Decision register

| Decision | Status | Authority and consequence |
| --- | --- | --- |
| Translate now, save what matters, remember later | Accepted product direction | Existing product reference and Apple redesign; preserve the return to reading. |
| Selection translation and remembered-word highlighting are separate systems | Accepted policy | Product reference; keep controls and measurements independent. |
| Explicit selection action and documented per-word highlight modes | Current documented policy | Detailed product reference; conflicting root-guide intent suppression and global density budget are superseded proposals. |
| One useful layer in the existing bubble | Selected direction with dated implementation handoff | Learning exploration's 28 September handoff; optional sense-matched content, no new reading destination in that slice. |
| Intrinsic ability and listening before reward pressure | Accepted Word Hub direction | Product reference; reflection visuals do not establish precision analytics. |
| Translate, Review, Game, and Words as native destinations | Accepted Apple product direction | Apple redesign; native Game parity supersedes the older embedded-web beta recommendation. |
| Semantic tokens and shared native component authority | Accepted architecture/design contract | Token/composition references; consumer services and product controllers remain separate. |
| Context Recall | Proposed experiment; production unverified | Historical experiment contract and product reference; retained source/catalog is not release proof. |
| Source-respecting reading discovery | Direction requiring a specific implementation decision | Real authorship, canonical provenance, editorial trust, explicit learner input, and defined privacy boundaries. No delivered catalog claim. |

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
