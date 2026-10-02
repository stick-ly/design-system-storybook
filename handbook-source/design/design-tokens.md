# Stickly Design Tokens

> Status: current design policy with an explicit implementation compatibility boundary.
> Canonical owner: `stick-ly/design-system`. Reviewed during migration on 2026-10-02.

The webapp and extension consume canonical runtime tokens from the independent
private [design-system repository](https://github.com/stick-ly/design-system),
packaged as `@stick-ly/design-system`. Explicit webapp and extension profiles
preserve existing font and elevation differences. Shared controls use the webapp
visuals, including Long Shadow.

## Contract

- Primitive palette: `--color-purple-*`, `--color-gray-*`,
  `--color-amber-*`, `--color-green-*`, and `--color-red-*`.
- Semantic color roles: `--color-page`, `--color-canvas`, `--color-surface*`,
  `--color-text*`, `--color-border`, `--color-accent`, `--color-brand`,
  `--color-success`, `--color-danger`, `--color-review-due`, and
  `--color-learned`.
- Supporting roles: `--radius-*`, `--shadow-*`, `--long-shadow-*`,
  `--font-*`, `--motion-*`, and `--ease-*`.
- Extension overlay elevation: `--bubble-accent-ink`, `--filter-bubble-elevated`
  (hard accent offset only; **no blurred shadows**), and `--shadow-overlay-hard`
  for other floating content-script surfaces.
- New product UI consumes semantic tokens. Primitive tokens are reserved for
  defining semantic roles and fixed-color illustrations.

The authoring sources in that repository are:

- `src/token-values.ts`
- `src/tokens.ts`

Publish versioned private GitHub Packages releases, pin an exact version in each
consumer, and review automated update PRs for newer passing releases. The current
migration uses an identical local archive in both consumers until the first
registry release and read access are configured. The webapp imports CSS exports;
native extension components use the shared CSS strings and popup packaging copies
the same CSS export. Tailwind mappings remain local to Angular. Reusable controls, including Angular bindings, are authored in the package.
Consumers import them directly. The [JSON document](design-tokens.json) is an archived, non-runtime design reference snapshot. It is preserved byte-for-byte during migration. It is not a generated runtime export and must not be edited to change product rendering.

Consumer profiles preserve established presentation where needed. Intentional
control changes follow the webapp visual authority and retain reviewed historical
before/after evidence.

### Long Shadow

**Long Shadow** is the canonical name for Stickly's connected base/surface
language: a bright surface sits directly on a modest stepped shadow in the same
semantic family, so the shadow reads as attached structure instead of a distant
halo.

The shared webapp contract is:

- Set the surface ink with `--long-shadow-color`.
- Prefer the semantic inks in this repository's `src/token-values.ts` webapp profile:
  `--long-shadow-action-primary`, `--long-shadow-action-secondary`,
  `--long-shadow-action-neutral`, `--long-shadow-action-success`,
  `--long-shadow-action-danger`, `--long-shadow-accent`,
  `--long-shadow-brand`, `--long-shadow-success`, `--long-shadow-danger`, and
  `--long-shadow-ink`.
- Use `shadow-long-sm`, `shadow-long`, or `shadow-long-lg` for diagonal stepped
  shadows.
- Use `shadow-long-bottom-sm` / `shadow-long-bottom` only when the geometry must
  read as a vertical lift instead of the default down-right offset.
- Use `drop-shadow-long-sm` / `drop-shadow-long` when the shadow must follow the
  rendered silhouette instead of the element box.

Stickly never uses fading or blurred shadows. Every Long Shadow token and
filter must keep `blur-radius: 0`; do not introduce gray ambient halos, soft
drop-shadows, or compatibility aliases that resolve to blurred values.

Choose the shadow primitive by shape:

- `box-shadow`: buttons, cards, fields, checkboxes, radios, dialog shells, and
  any rectangular DOM surface that should press into its own shadow.
- `drop-shadow`: merged shapes such as extension bubbles/carets or decorative
  silhouettes where a rectangular box shadow would break the contour.

Keep Long Shadows modest. Default to `2-4px` total travel; do not turn them into
large detached cast shadows.

### Extension bubble elevation

Extension content-script overlays use **hard shadows only** (`blur-radius: 0`).
Do not use soft halos such as `--shadow-medium`, `--shadow-raised`, or large
blurred `drop-shadow` values on translation, quiz, selection, menu, or toast
surfaces.

This rule also applies to popup, feedback, and other extension floating
surfaces: if a token name includes `shadow`, it must still resolve to a solid
stepped Long Shadow.

Elevated translation and quiz bubbles express the accent edge as a hard Long
Shadow in **one ink** (`--bubble-accent-ink`, mapped to `--color-accent`):

```css
--filter-bubble-elevated: drop-shadow(4px 4px 0 var(--bubble-accent-ink));
```

Other floating extension UI (menus, toasts, quota warnings) use a neutral hard
offset:

```css
--shadow-overlay-hard: 4px 4px 0 rgb(0 0 0 / 0.22);
```

Do not add a second edge via `border` or a padding ring on bubble shells.
Inline page highlights use a different, lighter pattern: soft fill plus
`box-shadow: 0 2px 0` bottom accent in the same semantic edge color
(`--color-brand-rgb`, `--color-accent-rgb`, etc.). That highlight underline is
not Long Shadow.

## Palette Moodboard

The current palette follows the marketing screenshots rather than the older
bright app gradients:

- **Midnight page**: a near-black violet (`#0d0a1b`) owns the global `html` and
  `body` background.
- **Deep plum canvas**: app content sits on `#191430`, a visible step above the
  page background.
- **Violet surfaces**: cards, navigation, and large panels use `#231d46` and
  `#302760` so they do not disappear into the page.
- **Soft lavender brand**: `#7b6be2` and `#b2a6ee` support highlights, borders,
  and remembered-word language without becoming the whole UI.
- **Warm amber action**: `#f6a934` is reserved for primary actions, due-review
  states, and small instructional emphasis.
- **Warm paper contrast**: light mock pages and form fields use `#faf7f1`, not
  stark white, so light cards feel intentional against the dark product shell.

## Page Layer Rules

Use the color roles by layer:

1. `page` is only for the global atmospheric background.
2. `canvas` is the route/content bed and the quietest dark card fill.
3. `surface` is the default card, navigation, popover, and section fill.
4. `surface-raised` is for hero panels, active states, and elevated artwork.
5. `surface-subtle` is for deliberate light fields, article mockups, and inputs.

Do not place a `canvas` card on a `canvas` page without either a stronger fill,
border, or elevation. This is the main contrast failure the new palette is meant
to avoid.

For top-level cards on the global app background, use `surface` at 90% opacity
or stronger. Reserve translucent `canvas` fills for nested groups inside those
cards.

## Composition Layer

Token consistency alone is not sufficient for product consistency. Reusable page
and section structure is defined in [design-composition.md](design-composition.md).

Use both documents together:

- `design-tokens.md` defines visual primitives and semantic roles.
- `design-composition.md` defines layout hierarchy and page-level structure.
- Section 10 of `design-composition.md` documents `theme="light" | "dark"`
  rules for shared form controls (shell, focus, listbox, selected rows).

## Policy and existing implementation

The no-blur, solid connected Long Shadow rules above are the current design
policy for new work. They are not a claim that every existing control already
implements that policy. The runtime source intentionally preserves pre-extraction
appearance until a separately reviewed visual migration:

- The webapp profile still defines blurred `--shadow-subtle` (2px),
  `--shadow-medium` (30px), and `--shadow-raised` (65px). Existing overlay
  and action style implementations can also contain ambient shadows.
- The extension profile uses zero-blur stepped offsets, but existing neutral
  and accent steps vary opacity. “Solid” is the design direction, not a
  description of those compatibility values.
- The published bubble filter token remains available. Current
  `src/elements/bubble-styles.ts` uses a WebKit-safe border and box-shadow
  construction with `filter: none` for elevated bubbles. The filter-only
  single-edge example above describes the intended visual language, not an
  instruction to replace verified bubble geometry.

Use `src/token-values.ts`, `src/tokens.ts`, and the actual component catalog as
the authority for values and shipped behavior. Do not silently change runtime
tokens, parity references, or consumer packaging to reconcile prose. Propose a
focused change, preserve historical evidence, and review matching desktop/mobile
before, after, and diff images first. The [migration record](../governance/migration.md)
explains the source boundaries.
