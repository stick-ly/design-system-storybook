import"./browser-D-D48LCx.js";import{f as p,e as u,n as t}from"./foundation-page-DpwKphpH.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";import"./render-handbook-BqPDaL2Y.js";const m=`# Choose a component by the learner's task

> Status: current component selection and ownership policy.
> Canonical owner: \`stick-ly/design-system\`. Reviewed 2026-10-02.

The component catalog is executable documentation of current native controls.
Use its states before adding another renderer. Choose the smallest control that
makes the intended action clear, then keep product data and decisions in the
consumer. Examples demonstrate presentation, not deployed product behavior.

## Selection map

| Learner's task | Shared primitive | Inspect the actual catalog |
| --- | --- | --- |
| Enter a word or short value | \`stickly-input\`, Angular \`app-input\` | [Input states](story:components-fields--input-states) |
| Write surrounding context or feedback | \`stickly-textarea\`, Angular \`app-textarea\` | [Textarea states](story:components-fields--textarea-states) |
| Pick from fewer than eight stable options | \`stickly-select\`, Angular \`app-select\` | [Select states](story:components-pickers--select-states) |
| Find a language or choose among eight or more options | \`stickly-combobox\`, Angular \`app-combobox\` | [Combobox states](story:components-pickers--combobox-states) |
| Set an independent yes/no preference | Checkbox | [Checkboxes](story:components-primitives--checkboxes) |
| Choose exactly one setting within a group | Radio / radio group | [Radio states](story:components-supporting-components--radios) |
| Perform a page action or follow an action link | \`stickly-action\` / \`stickly-button\` | [Actions](story:components-action--all-states), [extension buttons](story:components-primitives--buttons) |
| Switch a small set of local views | Tabs | [Tabs](story:components-navigation--tabs) |
| Read optional detail without changing route | Accordion | [Accordion](story:components-navigation--accordion) |
| Open a focused task over the page | Dialog shell | [Dialog](story:components-overlays--dialog) |
| Show contextual actions | Dropdown / menu | [Dropdown](story:components-overlays--dropdown), [translation menu](story:surfaces-translation-menu--trigger) |
| Read the selected word and its translation | Translator / dictionary presentation | [Translation](story:components-translator--translation), [dictionary](story:components-dictionary--translation) |
| Attempt vocabulary recall in the current page | Inline quiz presentation | [Typed quiz](story:surfaces-inline-review--typed) |
| Read a brief action result | Toast | [Toast](story:components-toast--message) |
| Listen or understand loading status | Audio / spinner | [Audio](story:components-audio-and-celebration--audio), [spinner](story:components-icons-and-spinner--spinner-sizes) |

The eight-option threshold is exported as \`COMBOBOX_OPTION_THRESHOLD\` by the
Angular bindings, defined in \`angular/controls/select/select-option.model.ts\`.
Use search for fewer options when typing materially improves selection. A native
select and a searchable listbox are distinct interaction choices, not responsive
variants of the same control.

## Producer and consumer boundary

| Producer owns | Consumer owns |
| --- | --- |
| HTMLElement controls, DOM presenters, pure SSR markup | Firebase, authentication, billing and persistence |
| Tokens, styles, portable icons and presentation data | Translation/audio fetching and dictionary enrichment |
| Native input, keyboard, focus, disabled and form behavior | Grading, accepted answers, SRS and recall authority |
| Documented properties, events and slots | Routing, localization strings, analytics and application services |
| Angular bindings through the isolated \`/angular\` export | Product composition, layout spacing and adapter data |

Add missing reusable controls under \`src/elements/\`. Use the same presenters for
browser and SSR rendering. Angular consumers import bindings directly from
\`@stick-ly/design-system/angular\`; creating consumer facades or parallel field,
picker, button or overlay renderers recreates the duplication this system removes.

## Contracts that visual polish must preserve

1. Keep the native input node, focus, selection and IME composition stable while
   values and labels change. Do not redraw the whole subtree on every update.
2. Document value types and event payloads. Programmatic writes do not become
   user changes. A user change and touched state propagate exactly once.
3. Match native form submission, grouping, required/disabled behavior and reset.
   Preserve real names, labels, descriptions and type semantics.
4. Distinguish appearance from behavior: button \`variant\` is visual, while
   \`native-type="submit" | "reset" | "button"\` controls form action. An \`href\`
   action renders a real link with appropriate target and rel.
5. Put accessible names and ARIA states on the interactive node. A custom host's
   \`aria-*\` attributes do not label its inner native control automatically.
6. Preserve Escape, outside dismissal, keyboard navigation, disabled option
   skipping, viewport placement and trigger focus restoration in overlays.
7. Make browser registration idempotent. Default package imports must be safe
   without \`window\`, \`document\`, \`HTMLElement\` or a custom-element registry.
   Register through the browser export only in document contexts.
8. Angular bindings bridge forms and projection and mark native-owned subtrees
   with \`ngSkipHydration\`. Verify real SSR/client behavior in the consumer;
   a server-safe import alone is not proof of successful hydration.
9. Content-script UI must survive hostile page resets, inherited typography,
   direction and CSS custom-property collisions. Inline highlights retain the
   article's text flow and selectable content.
10. Load portable assets locally. Product components do not rely on external
    script/font CDNs, dynamic evaluation or extension-only Chrome globals.

## Field focus stays inside the control

Inputs, textareas, selects and comboboxes keep the same outer dimensions when
resting, hovered, focused or showing a focused error. Use the action button's
internal bottom edge as the reference: focus changes the border color and adds
an inset bottom accent, or danger accent for an invalid field. Do not add an
external offset shadow that makes a focused control look taller or wider than
its neighbors. Preserve native padding, selection, resizing and keyboard focus.
See [Internal focus](story:components-fields--internal-focus) alongside the
existing field and picker states. This is implemented in shared source; consumer
package updates and release verification remain separate.

## Verification and current limits

During iteration, use live Storybook and \`pnpm run typecheck\`. At handoff, run the
package and native browser contracts documented in [TESTING.md](../../TESTING.md),
then the affected consumer checks. Keep matching desktop/mobile before, after
and diff images. Historical extraction evidence is under
[the engineering archive](../engineering/shared-components/README.md); its dated
results do not establish current package, production, WebKit or physical-device
correctness. Context Recall catalog states are retained presentation references,
not an instruction to restore the retired product feature.


## Compact reading controls

The popup exposes a selected All / Due / Off highlight group without duplicating its value in a summary row. Pending writes disable preference mutations while leaving translation available; errors retain the confirmed selection. A compact Enabled/Disabled on hostname status precedes reversible site access buttons and a quieter Pause/Resume tab action. The canonical popup includes PDF capability states, practice and translation results. The translation menu uses grouped commands and a reversible Highlights submenu, with no explanatory status block. See [popup](story:surfaces-popup--default) and [highlight choices](story:surfaces-translation-menu--highlight-choices).

Optional inline review places Reveal beside Keep reading and keeps its input legend visually quiet. Show the source language in muted text beside the word, and name the expected target language in the typing instruction. Hide an empty submit hint so it does not reserve space between answer tiles and the legend. The solved state offers the consumer-owned dictionary side sheet through an explicit action. Existing consumers opt into dismissal and dictionary controls so presentation changes never introduce actions without handlers. See [optional review](story:surfaces-inline-review--optional-review) and [solved dictionary](story:surfaces-inline-review--solved-dictionary).

The popup PDF default uses a single “Use Stickly for PDFs” switch when the browser supports choosing a default. It stays at the saved value while persistence is pending, and keeps “Open this PDF with Stickly” separate. Unsupported and manual-only capabilities retain their explanatory states.
`,k={title:"Handbook/Foundations/Component selection",parameters:{layout:"fullscreen"}},o={name:"Tasks, components and contracts",render:()=>{const s=p(m,{eyebrow:"Foundations / Components",status:"Current selection policy",sourcePath:"docs/design/components.md"}),i=u(s,"Choosing text entry, select or combobox");i.append(t("h2","Match the control to the decision"));const r=t("div",void 0,"foundation-grid"),c=[{title:"A word to find",description:"Single-line input for a short value.",tag:"stickly-input",label:"Word",value:"linger"},{title:"A short, stable choice",description:"Every option is easy to scan.",tag:"stickly-select",label:"Review mode",value:"inline"},{title:"A language to find",description:"Search helps with a long option list.",tag:"stickly-combobox",label:"Learning language",value:"de"}];for(const e of c){const a=t("section",void 0,"foundation-demo");a.append(t("h3",e.title),t("p",e.description,"foundation-demo-copy"));const n=document.createElement(e.tag);n.setAttribute("label",e.label),n.setAttribute("control-id",`handbook-${e.tag}`),n.setAttribute("theme","dark"),n.value=e.value,e.tag==="stickly-select"&&(n.options=[{value:"inline",label:"Inline review"},{value:"flashcards",label:"Flashcards"},{value:"character",label:"Character review"}]),e.tag==="stickly-combobox"&&(n.options=[["de","Deutsch"],["en","English"],["es","Español"],["fr","Français"],["it","Italiano"],["ja","日本語"],["ar","العربية"],["pt","Português"]].map(([l,d])=>({value:l,label:d}))),a.append(n),r.append(a)}return i.append(r),s}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Tasks, components and contracts',
  render: () => {
    const page = foundationPage(componentReference, {
      eyebrow: 'Foundations / Components',
      status: 'Current selection policy',
      sourcePath: 'docs/design/components.md'
    });
    const section = examples(page, 'Choosing text entry, select or combobox');
    section.append(node('h2', 'Match the control to the decision'));
    const grid = node('div', undefined, 'foundation-grid');
    const cases = [{
      title: 'A word to find',
      description: 'Single-line input for a short value.',
      tag: 'stickly-input',
      label: 'Word',
      value: 'linger'
    }, {
      title: 'A short, stable choice',
      description: 'Every option is easy to scan.',
      tag: 'stickly-select',
      label: 'Review mode',
      value: 'inline'
    }, {
      title: 'A language to find',
      description: 'Search helps with a long option list.',
      tag: 'stickly-combobox',
      label: 'Learning language',
      value: 'de'
    }];
    for (const item of cases) {
      const card = node('section', undefined, 'foundation-demo');
      card.append(node('h3', item.title), node('p', item.description, 'foundation-demo-copy'));
      const field = document.createElement(item.tag) as HTMLElement & {
        value: string;
        options: {
          value: string;
          label: string;
        }[];
      };
      field.setAttribute('label', item.label);
      field.setAttribute('control-id', \`handbook-\${item.tag}\`);
      field.setAttribute('theme', 'dark');
      field.value = item.value;
      if (item.tag === 'stickly-select') field.options = [{
        value: 'inline',
        label: 'Inline review'
      }, {
        value: 'flashcards',
        label: 'Flashcards'
      }, {
        value: 'character',
        label: 'Character review'
      }];
      if (item.tag === 'stickly-combobox') field.options = [['de', 'Deutsch'], ['en', 'English'], ['es', 'Español'], ['fr', 'Français'], ['it', 'Italiano'], ['ja', '日本語'], ['ar', 'العربية'], ['pt', 'Português']].map(([value, label]) => ({
        value,
        label
      }));
      card.append(field);
      grid.append(card);
    }
    section.append(grid);
    return page;
  }
}`,...o.parameters?.docs?.source}}};const x=["TasksAndContracts"];export{o as TasksAndContracts,x as __namedExportsOrder,k as default};
