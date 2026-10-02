import{a as w,c as k}from"./tokens-BqrQmc1Q.js";import{f as p,e as $,n as e}from"./foundation-page-DpwKphpH.js";import"./render-handbook-BqPDaL2Y.js";const y='# Stickly Design Tokens\n\n> Status: current design policy with an explicit implementation compatibility boundary.\n> Canonical owner: `stick-ly/design-system`. Reviewed during migration on 2026-10-02.\n\nThe webapp and extension consume canonical runtime tokens from the independent\nprivate [design-system repository](https://github.com/stick-ly/design-system),\npackaged as `@stick-ly/design-system`. Explicit webapp and extension profiles\npreserve existing font and elevation differences. Shared controls use the webapp\nvisuals, including Long Shadow.\n\n## Contract\n\n- Primitive palette: `--color-purple-*`, `--color-gray-*`,\n  `--color-amber-*`, `--color-green-*`, and `--color-red-*`.\n- Semantic color roles: `--color-page`, `--color-canvas`, `--color-surface*`,\n  `--color-text*`, `--color-border`, `--color-accent`, `--color-brand`,\n  `--color-success`, `--color-danger`, `--color-review-due`, and\n  `--color-learned`.\n- Supporting roles: `--radius-*`, `--shadow-*`, `--long-shadow-*`,\n  `--font-*`, `--motion-*`, and `--ease-*`.\n- Extension overlay elevation: `--bubble-accent-ink`, `--filter-bubble-elevated`\n  (hard accent offset only; **no blurred shadows**), and `--shadow-overlay-hard`\n  for other floating content-script surfaces.\n- New product UI consumes semantic tokens. Primitive tokens are reserved for\n  defining semantic roles and fixed-color illustrations.\n\nThe authoring sources in that repository are:\n\n- `src/token-values.ts`\n- `src/tokens.ts`\n\nPublish versioned private GitHub Packages releases, pin an exact version in each\nconsumer, and review automated update PRs for newer passing releases. The current\nmigration uses an identical local archive in both consumers until the first\nregistry release and read access are configured. The webapp imports CSS exports;\nnative extension components use the shared CSS strings and popup packaging copies\nthe same CSS export. Tailwind mappings remain local to Angular. Reusable controls, including Angular bindings, are authored in the package.\nConsumers import them directly. The [JSON document](design-tokens.json) is an archived, non-runtime design reference snapshot. It is preserved byte-for-byte during migration. It is not a generated runtime export and must not be edited to change product rendering.\n\nConsumer profiles preserve established presentation where needed. Intentional\ncontrol changes follow the webapp visual authority and retain reviewed historical\nbefore/after evidence.\n\n### Long Shadow\n\n**Long Shadow** is the canonical name for Stickly\'s connected base/surface\nlanguage: a bright surface sits directly on a modest stepped shadow in the same\nsemantic family, so the shadow reads as attached structure instead of a distant\nhalo.\n\nThe shared webapp contract is:\n\n- Set the surface ink with `--long-shadow-color`.\n- Prefer the semantic inks in this repository\'s `src/token-values.ts` webapp profile:\n  `--long-shadow-action-primary`, `--long-shadow-action-secondary`,\n  `--long-shadow-action-neutral`, `--long-shadow-action-success`,\n  `--long-shadow-action-danger`, `--long-shadow-accent`,\n  `--long-shadow-brand`, `--long-shadow-success`, `--long-shadow-danger`, and\n  `--long-shadow-ink`.\n- Use `shadow-long-sm`, `shadow-long`, or `shadow-long-lg` for diagonal stepped\n  shadows.\n- Use `shadow-long-bottom-sm` / `shadow-long-bottom` only when the geometry must\n  read as a vertical lift instead of the default down-right offset.\n- Use `drop-shadow-long-sm` / `drop-shadow-long` when the shadow must follow the\n  rendered silhouette instead of the element box.\n\nStickly never uses fading or blurred shadows. Every Long Shadow token and\nfilter must keep `blur-radius: 0`; do not introduce gray ambient halos, soft\ndrop-shadows, or compatibility aliases that resolve to blurred values.\n\nChoose the shadow primitive by shape:\n\n- `box-shadow`: buttons, cards, fields, checkboxes, radios, dialog shells, and\n  any rectangular DOM surface that should press into its own shadow.\n- `drop-shadow`: merged shapes such as extension bubbles/carets or decorative\n  silhouettes where a rectangular box shadow would break the contour.\n\nKeep Long Shadows modest. Default to `2-4px` total travel; do not turn them into\nlarge detached cast shadows.\n\n### Extension bubble elevation\n\nExtension content-script overlays use **hard shadows only** (`blur-radius: 0`).\nDo not use soft halos such as `--shadow-medium`, `--shadow-raised`, or large\nblurred `drop-shadow` values on translation, quiz, selection, menu, or toast\nsurfaces.\n\nThis rule also applies to popup, feedback, and other extension floating\nsurfaces: if a token name includes `shadow`, it must still resolve to a solid\nstepped Long Shadow.\n\nElevated translation and quiz bubbles express the accent edge as a hard Long\nShadow in **one ink** (`--bubble-accent-ink`, mapped to `--color-accent`):\n\n```css\n--filter-bubble-elevated: drop-shadow(4px 4px 0 var(--bubble-accent-ink));\n```\n\nOther floating extension UI (menus, toasts, quota warnings) use a neutral hard\noffset:\n\n```css\n--shadow-overlay-hard: 4px 4px 0 rgb(0 0 0 / 0.22);\n```\n\nDo not add a second edge via `border` or a padding ring on bubble shells.\nInline page highlights use a different, lighter pattern: soft fill plus\n`box-shadow: 0 2px 0` bottom accent in the same semantic edge color\n(`--color-brand-rgb`, `--color-accent-rgb`, etc.). That highlight underline is\nnot Long Shadow.\n\n## Palette Moodboard\n\nThe current palette follows the marketing screenshots rather than the older\nbright app gradients:\n\n- **Midnight page**: a near-black violet (`#0d0a1b`) owns the global `html` and\n  `body` background.\n- **Deep plum canvas**: app content sits on `#191430`, a visible step above the\n  page background.\n- **Violet surfaces**: cards, navigation, and large panels use `#231d46` and\n  `#302760` so they do not disappear into the page.\n- **Soft lavender brand**: `#7b6be2` and `#b2a6ee` support highlights, borders,\n  and remembered-word language without becoming the whole UI.\n- **Warm amber action**: `#f6a934` is reserved for primary actions, due-review\n  states, and small instructional emphasis.\n- **Warm paper contrast**: light mock pages and form fields use `#faf7f1`, not\n  stark white, so light cards feel intentional against the dark product shell.\n\n## Page Layer Rules\n\nUse the color roles by layer:\n\n1. `page` is only for the global atmospheric background.\n2. `canvas` is the route/content bed and the quietest dark card fill.\n3. `surface` is the default card, navigation, popover, and section fill.\n4. `surface-raised` is for hero panels, active states, and elevated artwork.\n5. `surface-subtle` is for deliberate light fields, article mockups, and inputs.\n\nDo not place a `canvas` card on a `canvas` page without either a stronger fill,\nborder, or elevation. This is the main contrast failure the new palette is meant\nto avoid.\n\nFor top-level cards on the global app background, use `surface` at 90% opacity\nor stronger. Reserve translucent `canvas` fills for nested groups inside those\ncards.\n\n## Composition Layer\n\nToken consistency alone is not sufficient for product consistency. Reusable page\nand section structure is defined in [design-composition.md](design-composition.md).\n\nUse both documents together:\n\n- `design-tokens.md` defines visual primitives and semantic roles.\n- `design-composition.md` defines layout hierarchy and page-level structure.\n- Section 10 of `design-composition.md` documents `theme="light" | "dark"`\n  rules for shared form controls (shell, focus, listbox, selected rows).\n\n## Policy and existing implementation\n\nThe no-blur, solid connected Long Shadow rules above are the current design\npolicy for new work. They are not a claim that every existing control already\nimplements that policy. The runtime source intentionally preserves pre-extraction\nappearance until a separately reviewed visual migration:\n\n- The webapp profile still defines blurred `--shadow-subtle` (2px),\n  `--shadow-medium` (30px), and `--shadow-raised` (65px). Existing overlay\n  and action style implementations can also contain ambient shadows.\n- The extension profile uses zero-blur stepped offsets, but existing neutral\n  and accent steps vary opacity. “Solid” is the design direction, not a\n  description of those compatibility values.\n- The published bubble filter token remains available. Current\n  `src/elements/bubble-styles.ts` uses a WebKit-safe border and box-shadow\n  construction with `filter: none` for elevated bubbles. The filter-only\n  single-edge example above describes the intended visual language, not an\n  instruction to replace verified bubble geometry.\n\nUse `src/token-values.ts`, `src/tokens.ts`, and the actual component catalog as\nthe authority for values and shipped behavior. Do not silently change runtime\ntokens, parity references, or consumer packaging to reconcile prose. Propose a\nfocused change, preserve historical evidence, and review matching desktop/mobile\nbefore, after, and diff images first. The [migration record](../governance/migration.md)\nexplains the source boundaries.\n',x=`{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "primitive": {
      "white": { "$value": "#ffffff", "$type": "color" },
      "ink": { "$value": "#131022", "$type": "color" },
      "purple": {
        "950": { "$value": "#0d0a1b", "$type": "color" },
        "900": { "$value": "#191430", "$type": "color" },
        "800": { "$value": "#231d46", "$type": "color" },
        "700": { "$value": "#302760", "$type": "color" },
        "500": { "$value": "#7b6be2", "$type": "color" },
        "300": { "$value": "#b2a6ee", "$type": "color" },
        "100": { "$value": "#ede8ff", "$type": "color" }
      },
      "gray": {
        "900": { "$value": "#2a2639", "$type": "color" },
        "700": { "$value": "#67607c", "$type": "color" },
        "400": { "$value": "#c4bcdb", "$type": "color" },
        "200": { "$value": "#e8e4f0", "$type": "color" },
        "100": { "$value": "#faf7f1", "$type": "color" }
      },
      "amber": {
        "600": { "$value": "#ca7e1e", "$type": "color" },
        "500": { "$value": "#f6a934", "$type": "color" }
      },
      "green": { "500": { "$value": "#3fb66b", "$type": "color" } },
      "red": { "500": { "$value": "#be5165", "$type": "color" } }
    },
    "semantic": {
      "page": { "$value": "{color.primitive.purple.950}", "$type": "color" },
      "canvas": { "$value": "{color.primitive.purple.900}", "$type": "color" },
      "surface": { "$value": "{color.primitive.purple.800}", "$type": "color" },
      "surface-raised": { "$value": "{color.primitive.purple.700}", "$type": "color" },
      "surface-subtle": { "$value": "{color.primitive.gray.100}", "$type": "color" },
      "text": { "$value": "{color.primitive.white}", "$type": "color" },
      "text-on-light": { "$value": "{color.primitive.gray.900}", "$type": "color" },
      "text-muted": { "$value": "{color.primitive.gray.400}", "$type": "color" },
      "border": { "$value": "{color.primitive.purple.300}", "$type": "color" },
      "accent": { "$value": "{color.primitive.amber.500}", "$type": "color" },
      "brand": { "$value": "{color.primitive.purple.500}", "$type": "color" },
      "success": { "$value": "{color.primitive.green.500}", "$type": "color" },
      "danger": { "$value": "{color.primitive.red.500}", "$type": "color" },
      "review-due": { "$value": "{color.primitive.amber.500}", "$type": "color" },
      "learned": { "$value": "{color.primitive.purple.500}", "$type": "color" }
    },
    "action": {
      "primary": { "$value": "{color.primitive.amber.500}", "$type": "color" },
      "primary-edge": { "$value": "{color.primitive.amber.600}", "$type": "color" },
      "secondary": { "$value": "{color.primitive.purple.500}", "$type": "color" },
      "secondary-edge": { "$value": "{color.primitive.purple.700}", "$type": "color" }
    }
  },
  "radius": {
    "sm": { "$value": "4px", "$type": "dimension" },
    "md": { "$value": "8px", "$type": "dimension" },
    "lg": { "$value": "16px", "$type": "dimension" },
    "full": { "$value": "9999px", "$type": "dimension" }
  },
  "motion": {
    "fast": { "$value": "150ms", "$type": "duration" },
    "normal": { "$value": "300ms", "$type": "duration" }
  }
}
`,R={title:"Handbook/Foundations/Tokens",parameters:{layout:"fullscreen"}},r={name:"Runtime tokens and palette",args:{profile:"webapp"},argTypes:{profile:{control:"radio",options:["webapp","extension"]}},render:({profile:l})=>{const u=p(y,{eyebrow:"Foundations / Tokens",status:`Runtime profile: ${l}`,sourcePath:"docs/design/design-tokens.md"},l),a=$(u,"Actual runtime palette and values");a.append(e("h2","The palette, from the runtime source")),a.append(e("p","These swatches and values import src/token-values.ts through src/tokens.ts. Switch the profile in Controls to inspect the actual webapp and extension compatibility values."));const h={...k,...w[l]},m=e("div",void 0,"foundation-token-grid");for(const[s,c]of Object.entries(h).filter(([n])=>n.startsWith("--color-")&&!n.endsWith("-rgb"))){const n=e("div",void 0,"foundation-swatch"),o=e("div",void 0,"foundation-swatch-paint");o.style.background=`var(${s})`;const t=e("div",void 0,"foundation-swatch-copy");t.append(e("code",s),e("div",c,"foundation-swatch-value")),n.append(o,t),m.append(n)}a.append(m,e("h3","Full current profile"));const g=e("table",void 0,"foundation-values"),f=e("thead"),v=e("tr");v.append(e("th","Token"),e("th","Runtime definition")),f.append(v);const b=e("tbody");for(const[s,c]of Object.entries(h)){const n=e("tr"),o=e("td"),t=e("td");o.append(e("code",s)),t.append(e("code",c)),n.append(o,t),b.append(n)}return g.append(f,b),a.append(g),u}},i={name:"Token policy and compatibility",render:()=>p(y,{eyebrow:"Foundations / Tokens",status:"Current policy + compatibility notes",sourcePath:"docs/design/design-tokens.md"})},d={name:"Archived JSON reference",render:()=>p(`# Archived design token JSON

> Non-runtime snapshot preserved unchanged on 2026-10-02. Actual values are owned by src/token-values.ts and src/tokens.ts. Editing this reference does not change product rendering.

\`\`\`json
${x}
\`\`\``,{eyebrow:"Historical reference",status:"Archived, not runtime",sourcePath:"docs/design/design-tokens.json"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Runtime tokens and palette',
  args: {
    profile: 'webapp'
  },
  argTypes: {
    profile: {
      control: 'radio',
      options: ['webapp', 'extension']
    }
  },
  render: ({
    profile
  }: {
    profile: TokenProfile;
  }) => {
    const page = foundationPage(tokenReference, {
      eyebrow: 'Foundations / Tokens',
      status: \`Runtime profile: \${profile}\`,
      sourcePath: 'docs/design/design-tokens.md'
    }, profile);
    const section = examples(page, 'Actual runtime palette and values');
    section.append(node('h2', 'The palette, from the runtime source'));
    section.append(node('p', 'These swatches and values import src/token-values.ts through src/tokens.ts. Switch the profile in Controls to inspect the actual webapp and extension compatibility values.'));
    const values = {
      ...commonTokens,
      ...tokenProfiles[profile]
    };
    const colors = node('div', undefined, 'foundation-token-grid');
    for (const [name, value] of Object.entries(values).filter(([name]) => name.startsWith('--color-') && !name.endsWith('-rgb'))) {
      const card = node('div', undefined, 'foundation-swatch');
      const paint = node('div', undefined, 'foundation-swatch-paint');
      paint.style.background = \`var(\${name})\`;
      const copy = node('div', undefined, 'foundation-swatch-copy');
      copy.append(node('code', name), node('div', value, 'foundation-swatch-value'));
      card.append(paint, copy);
      colors.append(card);
    }
    section.append(colors, node('h3', 'Full current profile'));
    const table = node('table', undefined, 'foundation-values');
    const head = node('thead');
    const heading = node('tr');
    heading.append(node('th', 'Token'), node('th', 'Runtime definition'));
    head.append(heading);
    const body = node('tbody');
    for (const [name, value] of Object.entries(values)) {
      const row = node('tr');
      const key = node('td');
      const definition = node('td');
      key.append(node('code', name));
      definition.append(node('code', value));
      row.append(key, definition);
      body.append(row);
    }
    table.append(head, body);
    section.append(table);
    return page;
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Token policy and compatibility',
  render: () => foundationPage(tokenReference, {
    eyebrow: 'Foundations / Tokens',
    status: 'Current policy + compatibility notes',
    sourcePath: 'docs/design/design-tokens.md'
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{\n  name: 'Archived JSON reference',\n  render: () => foundationPage(`# Archived design token JSON\\n\\n> Non-runtime snapshot preserved unchanged on 2026-10-02. Actual values are owned by src/token-values.ts and src/tokens.ts. Editing this reference does not change product rendering.\\n\\n\\`\\`\\`json\\n${jsonReference}\\n\\`\\`\\``, {\n    eyebrow: 'Historical reference',\n    status: 'Archived, not runtime',\n    sourcePath: 'docs/design/design-tokens.json'\n  })\n}",...d.parameters?.docs?.source}}};const C=["RuntimeTokens","Policy","ReferenceSnapshot"];export{i as Policy,d as ReferenceSnapshot,r as RuntimeTokens,C as __namedExportsOrder,R as default};
