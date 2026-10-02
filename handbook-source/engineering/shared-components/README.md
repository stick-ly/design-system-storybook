# Shared component migration evidence archive

> Status: historical engineering evidence, primarily inspected 2026-10-01.
> Archived in the standalone design system on 2026-10-02.

The files below were copied unchanged from the coordination workspace's
`docs/design/shared-components/`, including its previously untracked checkpoint
files. They preserve source inspections, authorizations, temporary endpoints,
exact evidence identities and unresolved gates at the time they were written.
Those values and permission statements are historical, not current instructions.

| Preserved file | Source coverage |
| --- | --- |
| [extension-inventory.md](extension-inventory.md) | Primitive APIs, domain presentation, host isolation, bubble discrepancy, assets and verification gates |
| [webapp-inventory.md](webapp-inventory.md) | Angular controls, SSR/hydration, ownership, accessibility, shared presentation and migration order |
| [testing-inventory.md](testing-inventory.md) | Original/current and Angular comparison lanes, evidence provenance, exact limits and retirement strategy |
| [distribution.md](distribution.md) | Private package delivery, authentication, consumer pinning and activation order |
| [current-execution.md](current-execution.md) | Dated execution checkpoint, successful and failed checks, follow-ups and publication limits |
| [plan.html](plan.html) | Original shared-component HTML execution plan |
| [webapp-design-qa-2026-10-02.md](webapp-design-qa-2026-10-02.md) | Snapshot of app-local vocabulary garden, landing motion and Premium QA records |
| [extension-design-qa-2026-10-02.md](extension-design-qa-2026-10-02.md) | Snapshot of app-local translation learning layer QA and stated evidence limitations |

Paths inside unchanged files retain their original repository context. A path
starting `webapp/` or `extension/` belongs to that consumer; producer evidence
formerly under `packages/design-system/` belongs to this repository. Unqualified
`tests/visual/artifacts/` references in the app QA snapshots belong to the named
consumer and are not bundled into this archive. Machine-local generated-image
paths and temporary preview URLs are provenance only and may be unavailable.

Storybook resolves links to copied Markdown records into their readable archive
stories. Downloadable source files keep their original bytes. The preserved HTML
plan contains its own CSS and links only to the copied sibling inventories, so
its local references remain usable from the hosted `handbook-source/` directory.
Code-formatted application paths are source references, not downloadable assets;
follow them in the owning private consumer repository when investigating an old
claim. No original evidence capture is recreated or inferred by this migration.

Use [component selection and contracts](../../design/components.md), the current
catalog and [TESTING.md](../../../TESTING.md) for new implementation work. Preserve
historical raw differences; do not accept baselines or claim current rendering,
deployment, registry access or Safari proof from an old checkpoint.
