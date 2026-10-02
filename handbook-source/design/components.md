# Choose a component by the learner's task

> Status: current component selection and ownership policy.
> Canonical owner: `stick-ly/design-system`. Reviewed 2026-10-02.

The component catalog is executable documentation of current native controls.
Use its states before adding another renderer. Choose the smallest control that
makes the intended action clear, then keep product data and decisions in the
consumer. Examples demonstrate presentation, not deployed product behavior.

## Selection map

| Learner's task | Shared primitive | Inspect the actual catalog |
| --- | --- | --- |
| Enter a word or short value | `stickly-input`, Angular `app-input` | [Input states](story:components-fields--input-states) |
| Write surrounding context or feedback | `stickly-textarea`, Angular `app-textarea` | [Textarea states](story:components-fields--textarea-states) |
| Pick from fewer than eight stable options | `stickly-select`, Angular `app-select` | [Select states](story:components-pickers--select-states) |
| Find a language or choose among eight or more options | `stickly-combobox`, Angular `app-combobox` | [Combobox states](story:components-pickers--combobox-states) |
| Set an independent yes/no preference | Checkbox | [Checkboxes](story:components-primitives--checkboxes) |
| Choose exactly one setting within a group | Radio / radio group | [Radio states](story:components-supporting-components--radios) |
| Perform a page action or follow an action link | `stickly-action` / `stickly-button` | [Actions](story:components-action--all-states), [extension buttons](story:components-primitives--buttons) |
| Switch a small set of local views | Tabs | [Tabs](story:components-navigation--tabs) |
| Read optional detail without changing route | Accordion | [Accordion](story:components-navigation--accordion) |
| Open a focused task over the page | Dialog shell | [Dialog](story:components-overlays--dialog) |
| Show contextual actions | Dropdown / menu | [Dropdown](story:components-overlays--dropdown), [translation menu](story:components-supporting-components--translation-menu) |
| Read the selected word and its translation | Translator / dictionary presentation | [Translation](story:components-translator--translation), [dictionary](story:components-dictionary--translation) |
| Attempt vocabulary recall in the current page | Inline quiz presentation | [Typed quiz](story:components-inline-quiz--typed) |
| Read a brief action result | Toast | [Toast](story:components-toast--message) |
| Listen or understand loading status | Audio / spinner | [Audio](story:components-audio-and-celebration--audio), [spinner](story:components-icons-and-spinner--spinner-sizes) |

The eight-option threshold is exported as `COMBOBOX_OPTION_THRESHOLD` by the
Angular bindings, defined in `angular/controls/select/select-option.model.ts`.
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
| Angular bindings through the isolated `/angular` export | Product composition, layout spacing and adapter data |

Add missing reusable controls under `src/elements/`. Use the same presenters for
browser and SSR rendering. Angular consumers import bindings directly from
`@stick-ly/design-system/angular`; creating consumer facades or parallel field,
picker, button or overlay renderers recreates the duplication this system removes.

## Contracts that visual polish must preserve

1. Keep the native input node, focus, selection and IME composition stable while
   values and labels change. Do not redraw the whole subtree on every update.
2. Document value types and event payloads. Programmatic writes do not become
   user changes. A user change and touched state propagate exactly once.
3. Match native form submission, grouping, required/disabled behavior and reset.
   Preserve real names, labels, descriptions and type semantics.
4. Distinguish appearance from behavior: button `variant` is visual, while
   `native-type="submit" | "reset" | "button"` controls form action. An `href`
   action renders a real link with appropriate target and rel.
5. Put accessible names and ARIA states on the interactive node. A custom host's
   `aria-*` attributes do not label its inner native control automatically.
6. Preserve Escape, outside dismissal, keyboard navigation, disabled option
   skipping, viewport placement and trigger focus restoration in overlays.
7. Make browser registration idempotent. Default package imports must be safe
   without `window`, `document`, `HTMLElement` or a custom-element registry.
   Register through the browser export only in document contexts.
8. Angular bindings bridge forms and projection and mark native-owned subtrees
   with `ngSkipHydration`. Verify real SSR/client behavior in the consumer;
   a server-safe import alone is not proof of successful hydration.
9. Content-script UI must survive hostile page resets, inherited typography,
   direction and CSS custom-property collisions. Inline highlights retain the
   article's text flow and selectable content.
10. Load portable assets locally. Product components do not rely on external
    script/font CDNs, dynamic evaluation or extension-only Chrome globals.

## Verification and current limits

During iteration, use live Storybook and `pnpm run typecheck`. At handoff, run the
package and native browser contracts documented in [TESTING.md](../../TESTING.md),
then the affected consumer checks. Keep matching desktop/mobile before, after
and diff images. Historical extraction evidence is under
[the engineering archive](../engineering/shared-components/README.md); its dated
results do not establish current package, production, WebKit or physical-device
correctness. Context Recall catalog states are retained presentation references,
not an instruction to restore the retired product feature.
