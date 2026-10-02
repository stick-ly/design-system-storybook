import{f as n}from"./foundation-page-DpwKphpH.js";import"./render-handbook-BqPDaL2Y.js";import"./tokens-BqrQmc1Q.js";const o=`# Design handbook migration and authority

> Decision date: 2026-10-02. Owner: \`stick-ly/design-system\`.

The standalone design-system repository owns design foundations, product design
decisions, shared presentation contracts, and the living Storybook handbook.
The coordinator and consumer repositories link to it. They retain application
code, cross-repository runtime instructions and app-local verification records.

## Sources moved into the producer

| Original source | Canonical destination | Treatment |
| --- | --- | --- |
| Workspace \`docs/design/design-tokens.md\` | \`docs/design/design-tokens.md\` | Preserve detailed palette/layer/elevation guidance; clarify runtime versus current policy |
| Workspace \`docs/design/design-composition.md\` | \`docs/design/design-composition.md\` | Preserve all eleven pattern sections; update shared component ownership and explicitly label compatibility debt |
| Workspace \`docs/design/design-tokens.json\` | \`docs/design/design-tokens.json\` | Byte-for-byte non-runtime reference snapshot |
| Workspace \`docs/design/shared-components/*\` | \`docs/engineering/shared-components/*\` | Byte-for-byte historical source/evidence archive, wrapped with dated archive guidance |
| Workspace \`docs/design/store-media-moodboard/*\` | \`docs/design/store-media-moodboard/*\` | Preserve four authored images and marketing review unchanged; historical design exploration |
| Workspace \`docs/design/learning-experience-exploration-2026-09-08/*\` | \`docs/design/learning-experience-exploration-2026-09-08/*\` | Preserve brief, HTML plan and superseded concepts unchanged; separate their historical authorization/status from current policy |
| Webapp \`AGENTS.md\`, Tile Game Animation Direction | \`docs/design/motion.md\` | Preserve complete sequencing, timing, reaction and construction guidance; consumer guide links to it |
| Consumer \`design-qa.md\` files | \`docs/engineering/shared-components/*-design-qa-2026-10-02.md\` | Unchanged dated snapshots; app-local verification paths stay with their consumer |

The product handbook also consolidates the coordination workspace's product
experience, redesign and learning-science decision sources. Its pages label
current behavior, selected design direction, roadmap, experiments and historical
records separately. A planned appearance criterion is not a shipped feature.

## Resolve authority without changing runtime

1. \`src/token-values.ts\` and \`src/tokens.ts\` define actual runtime token values.
   The JSON reference is neither a generator input nor a runtime export.
2. Executable component stories render producer source and describe current
   presentation. Controllers, data and production interactions need consumer
   verification separately.
3. Current documentation defines design intent. Existing blurred webapp
   tokens/overlay styles, variable-opacity extension offsets and WebKit-safe
   bubble borders remain compatibility implementation, not silent policy changes.
4. Historical audits preserve the exact state and claims of their source dates.
   They must not be used to infer current consent, available temporary services,
   successful current tests or a deployed release.
5. Future updates change canonical Markdown and the matching examples together.
   Stories render Markdown via the handbook helper rather than copying a second
   version of the prose. Record the decision's reason, status, owner, affected
   surfaces, alternatives and actual evidence before presenting it as policy.

This migration changes documentation ownership and Storybook presentation. It
does not change component behavior, consumer contracts, token values, package
release identity, visual baselines or production data.
`,i={title:"Handbook/Governance/Migration",parameters:{layout:"fullscreen"}},e={name:"Sources and canonical authority",render:()=>n(o,{eyebrow:"Governance / Source ownership",status:"Decision record, 2026-10-02",sourcePath:"docs/governance/migration.md"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Sources and canonical authority',
  render: () => foundationPage(migration, {
    eyebrow: 'Governance / Source ownership',
    status: 'Decision record, 2026-10-02',
    sourcePath: 'docs/governance/migration.md'
  })
}`,...e.parameters?.docs?.source}}};const a=["SourcesAndAuthority"];export{e as SourcesAndAuthority,a as __namedExportsOrder,i as default};
