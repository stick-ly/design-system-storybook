const e=`# Stickly Design Composition Rules

> Status: current composition policy. Existing compatibility rendering is called out explicitly.
> Canonical owner: \`stick-ly/design-system\`. Reviewed during migration on 2026-10-02.

This document defines reusable layout and hierarchy patterns that sit above the
token layer. Tokens answer "what values" (color, radius, spacing scale). These
rules answer "how pieces are composed" so pages feel consistently Stickly.

The canonical starter pattern is based on the Word Hub header in Storybook:
\`Word List/Word Hub -> Populated\`.

## 1) App Page Frame Pattern (Default)

Use this structure for authenticated webapp pages unless the route has a clear
reason to diverge (for example, full-bleed onboarding artwork or game canvas).

1. \`app-page-frame\` wrapper.
2. Single centered content section.
3. Intro header block.
4. Primary page content.

Layering is part of the pattern:

1. The global \`html\`/\`body\` background uses \`--color-page\` and
   \`--gradient-page\`.
2. The route content bed uses transparent or \`canvas\`, depending on whether the
   page should reveal the global atmosphere.
3. Cards, tables, and grouped panels use \`surface\` at 90% opacity or stronger,
   \`surface-raised\`, or an opaque \`canvas\` fill. Do not use \`bg-canvas/85\` or
   weaker as a top-level card on the app page background.
4. Large hero panels use \`--gradient-panel\` or \`surface-raised\`.
5. Light fields and article mockups use \`surface-subtle\`.

### Contrast Floor

Top-level content cards must read as separate objects from the global page
background at a glance:

1. Default to \`bg-surface/95 border-border/30\` with a modest hard connected Long Shadow when elevation is needed.
2. Use \`bg-canvas/*\` only for nested groups inside a \`surface\` card, or make it
   fully opaque with a strong border/elevation.
3. Avoid large translucent purple fills that differ from the page by only a few
   RGB points. Settings, dictionary, translator, and modal panels are reference
   surfaces for this rule.
4. If a page uses the global atmospheric background, its first primary card must
   use either \`surface\`, \`surface-raised\`, or \`--gradient-panel\`.

Reference geometry for the centered section:

- max width: \`1200px\`
- horizontal padding: \`16px\`
- top padding: \`40px\` desktop, \`24px\` mobile (\`<= 800px\`)
- bottom padding: \`96px\`

## 2) Intro Header Composition (Default)

The intro header is the default page opening for data and management routes.

Order is fixed:

1. Eyebrow label (uppercase context)
2. Page title
3. Supporting description
4. Optional primary action area

Desktop layout:

- two columns: intro copy on the left, actions on the right
- vertical alignment: bottom aligned
- gap: \`24px\`

Mobile layout (\`<= 800px\`):

- stacked layout
- action area stretches full width

Spacing rhythm:

- eyebrow to title: \`8px\`
- title to description: \`8px\`
- header to body content: \`28px\` desktop, \`16px\` mobile

## 3) Intro Header Typography Rules

Use semantic text roles with these baseline characteristics:

- Eyebrow:
  - uppercase, extra-bold
  - tracking around \`0.12em\` to \`0.16em\`
  - semantic muted/border text role
- Title:
  - bold display line
  - fluid scale near \`clamp(2.25rem, 5vw, 4rem)\`
  - tight line-height (\`1.0\` to \`1.1\`)
  - slight negative tracking allowed for display polish
- Description:
  - comfortable reading width (\`max ~680px\`)
  - muted text role
  - line-height around \`1.6\` to \`1.8\`

Do not introduce a second competing headline in the first viewport.

## 4) Action Slot Rules

The right-side action area is reserved for one primary task that belongs to the
current page context (for example, export, create, or invite).

Rules:

1. Keep one dominant button in the header action slot.
2. Secondary controls should live in a popover/panel, toolbar, or content area.
3. On mobile, primary action must be easy to tap and span available width.
4. If an action opens a panel, anchor it to the action area and preserve escape
   and outside-click dismissal behavior.

## 5) Content Handoff Rules

After the intro header, content should begin immediately with high-value
information (table, cards, queue, form, or status).

1. Do not insert decorative separators between intro header and primary content.
2. First content block should be visible without extra scrolling on common
   desktop heights.
3. Keep empty states inside the same frame pattern so route identity stays
   stable.

## 6) Accessibility And Semantics

1. Exactly one \`h1\` per page route.
2. Eyebrow is supportive text, not a heading.
3. Action controls expose state using ARIA attributes when they toggle content.
4. Intro description must remain plain-language and scannable.

## 7) Reuse Policy

For new authenticated webapp pages:

1. Start from this pattern first.
2. Only diverge when product intent clearly demands a different composition.
3. Document divergence in story notes or implementation PR summary.

## 8) Implementation Checklist

Before finalizing a new page intro:

1. Eyebrow, title, description, and action slot appear in the required order.
2. Desktop and mobile behavior match the stacking/alignment rules.
3. Semantic tokens are used for all color, spacing, typography, and elevation.
4. Storybook includes at least one populated state for visual regression.
5. The first content block aligns with the intro header edges.

## 9) Initial Reference

Current canonical implementation:

- \`webapp/src/app/modules/word-list/wordlist/wordlist.component.html\`
- Storybook: \`Word List/Word Hub\` (\`Populated\`)

Future composition patterns (for example, dashboard hero, settings split layout,
or detail route masthead) should be added here as new named patterns.

## 10) Control Family And Focus Language

Inputs, selects, checkboxes, and buttons should feel related without becoming
interchangeable.

### Shared control components (required)

Use Stickly control components in product UI instead of styling native HTML
controls directly:

- \`app-input\` for single-line text entry
- \`app-textarea\` for multi-line text entry
- \`app-select\` for short option pickers
- \`app-combobox\` for searchable option pickers with long lists
- \`app-checkbox\` for boolean toggles
- \`app-button\` for actions and links styled as actions

Shared native controls are owned by this repository under \`src/elements/\`.
Angular applications import bindings from \`@stick-ly/design-system/angular\`;
application services, data, routing, localization and product controllers remain
in the consumer. When a needed control does not exist, add it to the producer
and expose the appropriate binding rather than creating a second renderer in
webapp core or a one-off control in a feature template.

Practical exceptions:

1. Hidden form fields and other non-visible browser primitives.
2. Third-party embeds that require a native control.
3. Temporary scaffolding during an in-flight component extraction, which must
   not ship without a follow-up to the shared component.

Reference implementations in this repository:

- \`src/elements/input.ts\` and \`src/elements/textarea.ts\`
- \`src/elements/select.ts\` and \`src/elements/combobox.ts\`
- \`src/elements/native-control-renderer.ts\`
- The isolated \`@stick-ly/design-system/angular\` bindings export

Consumer reference compositions include the public translator word search and
webapp navigation. Their services and layout do not belong in the producer.

### Select versus combobox

Use \`COMBOBOX_OPTION_THRESHOLD\` (currently \`8\`) exported by
\`@stick-ly/design-system/angular\`, defined in this producer at
\`angular/controls/select/select-option.model.ts\`. The native picker does not
choose a component automatically:

1. \`app-combobox\` when the option count is at or above the threshold, or when
   typing would meaningfully speed selection (languages, locales, long
   enumerations).
2. \`app-select\` for short stable lists where every choice should remain visible
   without search.

Comboboxes reuse the select geometry, warm-paper shell, Long Shadow focus edge,
and top-layer listbox popover. When closed, a display overlay shows the
selected label. When opened, a top section shows query matches (or the current
selection before typing) and a lower section always lists every option.

1. Use one size scale across the family: \`40px\`, \`48px\`, and \`56px\` for standard
   \`field\` inputs. Use \`compact\` (\`32px\`) with \`inline\` or \`chrome\` in dense
   toolbars such as the app navbar.
2. \`variant="field"\` is the default form control at the standard 40/48/56px
   heights. \`variant="inline"\` keeps the opaque warm paper shell at compact
   heights. \`variant="chrome"\` is for dark app chrome such as the navbar: at rest
   it uses the same quiet overlay language as nav links (\`bg-white/5\`, thin edge);
   when focused or filled it promotes to the standard warm-paper field shell with
   accent focus.
3. Buttons are raised actions. Their colored surface may press into a connected
   Long Shadow, but the outer layout box must never change size or position.
   Exploratory pattern for Long Shadow buttons: when the base reads as a full
   down-right plate, the pressed face may translate diagonally onto that base
   and collapse the visible shadow while pressed. Keep this limited to raised
   variants; text and ghost actions stay flat. Treat the diagonal press as a
   feel test until product direction confirms it.
4. Form inputs and selects use the opaque warm paper \`surface-subtle\` shell.
   Chrome inputs start with nav-aligned overlay fills, then adopt that same shell
   when the user focuses or enters text.
5. Input, select, and combobox geometry must match within each variant: radius, border weight, height, label
   spacing, text scale, and focus behavior.
   Control primitives do not add external margins; their parent form, grid, or
   toolbar owns spacing.
6. Focus feedback is bold and graphic across the input family: use a solid
   accent border with a crisp Long Shadow in the **same** semantic ink
   (\`--long-shadow-accent\` for normal fields; \`--long-shadow-danger\` for
   invalid/error states). Do not pair \`border-accent\` with a second darker edge
   token or extra shell stroke. Chrome controls use the full field treatment
   only while focused or filled.
7. Focused field labels use the accent color. Error focus uses the same Long
   Shadow construction in the danger color.
8. Checkboxes use an explicit icon for checked and indeterminate states; do not
   rely on font glyphs or fragile border-only drawings.
9. Radio rows use a left accent rail, accent-tinted fill, and raised accent
   control when selected. Unselected rows stay quiet on inset panels.
10. With Tailwind preflight enabled, controls must declare explicit
    \`border-solid\` / stable \`border-2\` shells, \`appearance-none\` on hidden native
    inputs, and must not use \`overflow-hidden\` on field shells (it clips the
    offset focus edge).

### Light and dark control themes

Several shared form primitives expose \`theme="light" | "dark"\`:

- \`app-input\` (\`variant="field"\`)
- \`app-textarea\`
- \`app-combobox\`
- \`app-select\` (label/helper only; field shell stays warm paper)
- \`app-checkbox\`

**What changes by theme**

| Surface | Light (\`theme="light"\`) | Dark (\`theme="dark"\`) |
| --- | --- | --- |
| Field shell | Opaque warm paper (\`bg-white\` or \`bg-subtle\`), \`border-border/40\`, dark text (\`text-ink-on-light\`) | Translucent overlay (\`bg-white/5\`), \`border-white/10\`, light text (\`text-ink\`) |
| Shell hover | \`hover:border-border/65\` | \`hover:border-white/15 hover:bg-white/10\` |
| Focus ring | Solid \`border-accent\` + \`shadow-long\` in \`--long-shadow-accent\` | Same accent Long Shadow on the translucent shell |
| Focused label | \`text-accent\` | \`text-accent\` |
| Helper/error copy | Muted ink on parent surface | \`text-ink/70\` helpers on dark parents |

**Listbox / popover surfaces** (combobox, select) stay on elevated warm paper
(\`bg-white\`, \`text-ink-on-light\`) in both themes so long option lists remain
readable above dark app chrome.

**Selected and keyboard-active listbox rows** (combobox) use the same flat
full-row primary accent treatment in both themes: \`bg-accent border-accent
text-canvas\` without inset shadows or outer rings. Selected rows add a raised
ink-filled checkmark badge (\`bg-ink text-canvas\`) for contrast on the accent
fill. Keyboard-active rows reuse the full accent row; when the active row is
also selected, use \`font-extrabold\` for extra emphasis.

**Checkbox checked state** is theme-independent: accent surface
(\`bg-accent border-accent text-canvas\`) with a compact Long Shadow. Unchecked
boxes follow the theme: light uses \`bg-subtle border-border/55\`; dark uses
\`bg-white/10 border-white/30\`.

**Rules for new controls**

1. Add \`theme\` only when the control renders on both light cards and dark
   canvas/surface backgrounds.
2. Keep geometry, focus construction, and accent semantics identical across
   themes; only shell fill, border, and text/placeholder colors change.
3. Do not move focus Long Shadows, selected fills, or raised control edges
   inside \`overflow-hidden\` shells.
4. Popovers, menus, and listboxes that float above dark UI should default to
   the warm-paper elevated surface unless product intent requires a dim shell.
5. When a row uses full \`bg-accent\`, pair it with \`text-canvas\` and give any
   nested indicator (checkmark, icon) an inverted high-contrast treatment
   (\`bg-ink text-canvas\`), not accent-on-accent.

## 11) Modal Dialog Pattern

Use for focused tasks opened above dimmed page content (export, confirm,
feedback). The shell and native interaction contract are owned by
\`src/elements/dialog.ts\` and \`src/elements/overlay-styles.ts\`. Angular consumers
use the package dialog binding, opened by their application-owned \`AppModalService\`.

### Overlay

1. Full-viewport scrim at \`bg-page/78\` or stronger.
2. Optional light \`backdrop-blur\` so page content does not compete with the
   dialog.
3. Desktop keeps at least \`16px\` gutter around the panel. Mobile uses a
   bottom drawer anchored to the viewport edge.

### Shell separation (required)

Task modals float above the dark app page. Use the shared **surface shell** so
dialogs feel connected to the app while remaining clearly above the scrim.

1. Background: \`bg-surface\` on the dialog shell (opaque; avoid \`/98\` opacity
   modifiers that Tailwind may not emit), with nested sections using
   \`bg-canvas/70\` or deliberate \`surface-subtle\` fields.
2. Typography: \`text-ink\` on the shell and \`text-muted\` for supporting copy.
3. Radius: \`rounded-2xl\` (\`1rem\`) for task dialogs; mobile drawers use
   \`rounded-t-2xl\` only.
4. Elevation policy: a modest hard connected Long Shadow, directed down-right on desktop and upward on a drawer. Existing runtime still includes legacy ambient values; see the compatibility note below.

### Long Shadow shell edge (required)

Dialog shells use **one** accent Long Shadow with **one** ink. Do not stack a
thin border, padding ring, or inset stroke on top of it.

1. Desktop dialog: one hard accent offset aligned with the shell.
2. Mobile drawer: one hard upward accent offset aligned with the shell.
3. Mobile drag handle: solid accent fill, no secondary shadow treatment.
4. Extension bubbles: \`filter: var(--filter-bubble-elevated)\` only; no padding
   ring, \`border\`, or blurred ambient shadow on \`.bubble-chrome\`.

Interactive controls *inside* the dialog (buttons, radios, selected rows) may
still use their own Long Shadows. The shell itself should read as one connected
accent edge, not multiple competing strokes.

Runtime implementation: \`src/elements/dialog.ts\` and \`src/elements/overlay-styles.ts\`.
The compatibility implementation retains a shell border and ambient shadows.
Do not remove them as a documentation-only refactor; policy alignment needs
reviewed visual and focus/drag evidence.

### Extension overlay bubbles

Translation, quiz, and selection-affordance bubbles share one chrome frame
(\`.bubble-chrome\` + \`.bubble-shell\` + Stickly caret) in the content script.

**No blurred shadows.** Extension overlays use hard offsets only
(\`blur-radius: 0\`). Never pair a bubble with \`--shadow-medium\`,
\`--shadow-raised\`, or a large soft \`drop-shadow\` halo.

Stickly never uses fading or blurred shadows anywhere in the extension. Toasts,
overflow menus, feedback prompts, popup surfaces, and bubbles all use solid
stepped Long Shadows only.

1. Elevation: one hard accent offset via \`filter: var(--filter-bubble-elevated)\`
   on the outer bubble host.
2. Accent edge: **offset drop-shadow only** in \`--bubble-accent-ink\`
   (\`--color-accent\`). No separate 2px padding ring or \`border\` on the shell.
3. Caret: gradient fill only; the accent edge comes from the shared filter on
   the merged shape.
4. Selection affordance (\`only-symbol\`) keeps the compact Stickly diamond pin
   (\`::before\` on the bubble host) with a 1px accent ring. Loading keeps the
   legacy 18×18 footprint without the pin.
5. Menus, toasts, and quota warnings use \`--shadow-overlay-hard\`, not
   \`--shadow-medium\`.

Runtime reference: \`src/elements/bubble.ts\` and \`src/elements/bubble-styles.ts\`.
Current elevated bubbles deliberately use \`filter: none\`, a 1px accent border,
and a zero-blur stepped box-shadow with matching caret offsets for WebKit
compatibility. The filter-only rules above describe the design target. Do not
replace this verified rendering without an explicit compatibility migration.

### Mobile drawer

1. Bottom-anchored sheet, content-height up to \`96dvh\`.
2. Accent-edge shell per the rule above.
3. Drag handle centered in a \`44px\`-tall touch target; drag down to dismiss.
4. Bounce-up enter / slide-down exit; safe-area padding at the bottom.

### Desktop dialog

1. Centered panel with the same accent-edge shell rule.
2. Custom widths via \`AppModalService\` \`width\` config.
3. Hide the drawer handle.

### Interior grouping

Nest settings inside layered dark panels on the surface shell:

1. Panel fill: \`bg-canvas/70\`; use surface contrast and a hard edge when separation is needed.
2. Panel border: \`border-border/20\`.
3. Section headings: \`text-muted\` uppercase labels.
4. Keep section padding compact: \`12px\` (\`p-3\`) with \`8–12px\` vertical gaps.

### Choice selection inside modals

Selected radio or checkbox rows use **accent (amber)**, not purple:

1. Accent-tinted fill around \`bg-accent/10\`.
2. Accent border around \`border-accent/55\`.
3. Radio rows add a \`3px\` left accent rail. Use \`theme="dark"\` on radios in
   dim modals.
4. The control itself keeps the raised accent treatment from the control
   family.

Unselected rows stay transparent with \`hover:bg-white/6\` on dark shells.

### Color budget

The page layer stays behind the scrim. Surface carries the modal shell, canvas
carries nested groups, and amber carries selection and primary action. Avoid
weak white overlays for modal sections; they age poorly as the palette changes.

### Compact spacing rhythm

1. Header padding: \`16px\` vertical (\`py-4\`).
2. Eyebrow to title: \`4px\`.
3. Title to description: \`6px\`.
4. Body padding: \`16px\` vertical with \`12px\` section gaps.
5. Footer padding: \`12px\` vertical, pinned outside the scroll region.

### Canonical reference

- Producer: \`src/elements/dialog.ts\`, \`src/elements/overlay-styles.ts\`
- \`webapp/src/app/modules/word-list/anki-export-modal/\`
- Storybook: \`Core/Dialog\`, \`Word List/Anki Export Modal\`

## Policy versus compatibility rendering

This document preserves the established geometry, action hierarchy, theme, and
interaction guidance while moving shared control ownership into the standalone
producer. The [token policy and implementation note](design-tokens.md#policy-and-existing-implementation)
is required reading alongside the rules above. Current runtime rendering is
the authority for extraction parity; current design policy is the target for
new product decisions. Existing blurred webapp tokens, ambient overlay shadows,
and the WebKit-safe bubble border construction remain explicit migration debt.
Documentation migration does not authorize changing that rendering.

The Word Hub reference and app-only service examples are consumer witnesses.
The component catalog in this Storybook renders native producer controls and
is the source of truth for current component properties and states.
`;export{e as c};
