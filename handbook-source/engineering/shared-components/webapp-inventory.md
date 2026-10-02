# Webapp shared component inventory

Source audit: 2026-10-01. Read-only inspection of the current checkout; no browser, build, or test execution. `webapp` was clean on `main` when inspected. Paths below are relative to `webapp/` unless prefixed with `docs/`.

## Boundary

Share visual primitives and their interaction behavior. Keep Angular routing, analytics, translation catalogs, Firebase, feature logic, page frames, and component creation in Angular. Existing `app-*` wrappers can become thin adapters with the same public API, avoiding a simultaneous rewrite of every feature template. The final adapters must contain no independent control styling or interaction implementation.

`src/app/modules/core/` includes both primitives and product compositions. Its directory name is not an extraction boundary. Pricing, cookie consent, feedback, learning-pack details, footer, score counter, browser mock, confirmation content, and anonymous-account nudge remain compositions; their base controls consume the shared package.

## Component and preservation matrix

| Primitive and authoritative source | Preserve in shared element | Preserve in Angular adapter |
| --- | --- | --- |
| `core/button/button.component.ts`, `.scss`; `models/buttonType.model.ts` | Primary/highlight alias, secondary, neutral, subtle, danger, success, text, ghost, circle, special; 40/48/56px sizes; theme; full width; disabled and loading; native button/submit/reset and semantic anchor; target/rel; image icon/alt and Google mark; default and loading-text projection; aria state forwarding; keyboard focus; press/hover/blink/icon motion; reduced motion | `routerLink`, `trackEvent`, `trackingParameters`, localized Loading/Working defaults, legacy `signalColor`, `isSubmit`, `small`, `noMargin`; existing host margin compatibility until composition spacing is migrated |
| `core/input/input.component.ts`, `.html` | Type, value, label/helper/error, placeholder, name/id, disabled/readonly/required, autocomplete/autofocus, theme, field/inline/chrome variants, compact/small/medium/large, active chrome fill, invalid state, accessible descriptions, focus/blur/reset methods | CVA; nullable `value`; `valueChange`, `onfocus`, `onblur`, keydown/keyup; existing `focusInput()`, `blurInput()`, `reset()` public methods |
| `core/textarea/textarea.component.ts`, `.html` | Input-family shell and labels, rows, maxlength, resize none/vertical/both, sizes, theme, required/readonly/disabled/autofocus, helper/error, accessible descriptions | CVA, nullable value/reset, value/focus/blur/key events |
| `core/checkbox/checkbox.component.ts`, `.html` | Checked/unchecked/indeterminate, explicit SVG indicators, disabled, theme, full width, projected label before/after, accessible name/description, native label activation and keyboard behavior | CVA, two-way checked/indeterminate/disabled, boolean `checkedChange`; null form writes become false; user change clears indeterminate |
| `core/radio/radio.component.ts`, `.html`; `radio-group.component.ts` | Native radio behavior, selected/unselected/disabled, theme, generous touch target, projected label, name grouping and accessible group label; amber rail/indicator geometry | Group CVA; standalone `select` event; original string/number/boolean value identity, including `false` and `0`; parent disabled state and dynamic children |
| `core/select/select.component.ts`; `select-option.model.ts` | String value and label options, disabled rows, placeholder, theme/size, field label/helper/error, required/invalid, native popover/listbox, selected and keyboard-active rows, arrow/Home/End/Enter/Space/Escape behavior, skip disabled, restore focus, viewport clamping and placement above/below | CVA, nullable value, `valueChange`; selection updates form exactly once; disable closes open list |
| `core/combobox/combobox.component.ts` | All select-family features plus closed selected-label display, pointer opening without opening on focus alone, query matching including diacritics/search aliases, no-match state, filtered keyboard navigation, Tab dismissal, IME composition, visual viewport/scroll repositioning, outside dismissal | CVA, nullable value, options updates, `valueChange`, localized all-options label; cleanup of browser listeners |
| `core/dropdown/dropdown.component.ts`, `dropdown-item.directive.ts`, `dropdown-position.util.ts` | Custom/default trigger, menu/item slots, danger items, dark/light theme, start/end alignment, width, disabled, top-layer positioning, keyboard first/last/wrap navigation, click/outside/Escape dismissal, restored trigger focus | Localized default label, `openedChange`; consumers still own menu action handlers |
| `core/tabs/tab.component.ts`, `tab-list.component.ts` | Underline/pill/inset geometry, horizontal overflow, projected and configured items, selected/disabled, tab/panel IDs and ARIA state | Routing and active-route state; `tabSelect`, data-to-tab composition |
| `core/accordion/accordion-item.component.ts` | Native details/summary, grouped exclusive name behavior, open state, accessible summary/region IDs, question and content slots, expansion geometry | Localized strings and sanitized legacy `answer` HTML. Do not move Angular's trusted/sanitized HTML handling into raw `innerHTML` assignments |
| `core/dialog/app-dialog.component.ts`, `.html` | Shell, scrim, desktop widths/mobile drawer, focus trap/restoration, Escape/outside dismissal, scroll lock, close timing, pointer capture and drag threshold/cancel/snap-back, safe-area and reduced-motion path | `AppModalService`, `AppModalRef`, data/result injection and Angular dynamic component creation; title discovery (`data-app-dialog-title`) |
| `core/icon/icon.component.ts`, `icon-map.ts`; `core/spinner/spinner.component.ts` | Icons as SVG; spinner size/stroke, progressbar semantics, accessible name; consumer-independent asset paths | Existing icon name aliases and localized spinner default label |
| `core/banner/banner.component.ts` | Warning/error/message surface and content slot | Page width/layout if the shared primitive is deliberately smaller |

`core/paginator/paginator.component.ts` is a small composition over select and previous/next buttons. Preserve page event `{ pageIndex, pageSize, length }`, empty/range labels, boundary disabling, and page reset on size change in Angular. Extract its visible action primitives so native one-off buttons do not remain a design-system escape hatch.

## Storybook evidence and missing states

Stories already exist adjacent to button, input, textarea, checkbox, radio, select, combobox, dropdown, tabs, accordion, dialog, and icon. `core/control-family/control-family.stories.ts` supplies mixed light/dark form layouts and should remain a composition-level parity fixture.

Existing exported reference states:

| Story group | Existing exports |
| --- | --- |
| Core/Button | Primary, NeutralLoadingFallback, AllVariants |
| Core/Input | Light, Dark, InvalidDark, DisabledAndReadOnly, FormStack, ChromeCompactNavbar, ChromeCompactNavbarActive, DarkFocused |
| Core/Textarea | Light, Dark, DarkReadOnly |
| Core/Checkbox | States, Dark, ThemeAlignment |
| Core/Radio | States, Dark |
| Core/Select | Light, Dark, Sizes, PlaceholderAndHelper, Invalid, DisabledDark, OpenPopover |
| Core/Combobox | DarkLarge, LightMedium, DarkOpenWithSelection, LightOpenWithSelection, DarkKeyboardNavigation, LightKeyboardNavigation, FilteredOpen, NoMatches, NearViewportBottom, SettingsPair |
| Core/Dropdown | Default, NearViewportEdge, ManyItems |
| Core/Tabs | Underline, Pill |
| Core/Accordion | AllCollapsed, SecondItemOpen |
| Core/Dialog | ConfirmationDesktop, ConfirmationMobileDrawer, AnkiExportMobileDrawer, AnkiExportDesktop |
| Core/Icon | Default, IconGrid |

These stories do not prove all API combinations. Add explicit side-by-side legacy/new states before implementation: every button variant at every size, href/router/submit/reset, disabled/loading/custom loading text, focused/pressed/icon/blink/reduced motion; field invalid+focused, readonly/disabled, nullable reset, autocomplete/IME, all variant sizes; indeterminate and label placement; typed radio values and disabled groups; empty and all-disabled lists, updated options, required/invalid, keyboard and pointer dismissal; menu custom trigger/danger/disabled; dialog focus cycle and drag cancel/close; accordion projected versus sanitized HTML; narrow/mobile layouts and localized labels. At the initial audit, banner, paginator, and spinner had no adjacent stories. Frozen original banner/paginator/pronunciation adapters and shared-package parity stories are now authored alongside the icon/spinner comparisons.

Do not rename or repoint the old `Core/*` stories at new elements and call them legacy comparisons. Keep an immutable legacy fixture until each primitive passes old/new visual and behavioral comparisons, then retire it deliberately.

`.storybook/main.ts` uses `@storybook/angular` 9.1.20 and scans `src/**/*.stories.*`. `.storybook/preview.ts` loads Angular English/German catalogs, provides animations, defines 1280x720 and 390x844 viewports, and exposes story completion status in `html` data attributes. Shared-package Web Component Storybook needs its own renderer; render legacy Angular controls in their existing iframe and compare corresponding cropped regions or matched full frames. Do not assume Angular component functions can be mounted by the Web Component renderer.

Existing source-certified handoff tooling: `scripts/testing/visual-plan.mjs`, `storybook-fingerprint.mjs`, `run-visual-tier.mjs`; `tests/visual/storybook.visual.spec.ts` checks completed stories, fonts/stability, missing baselines and unexpected page errors. Baselines live in `tests/visual/storybook.visual.spec.ts-snapshots/`. Actual runs were not inspected or executed in this audit. Reuse the workflow and add the shared package and adapters to its source fingerprint/impact map; a dependency outside `webapp/` must invalidate reuse.

## Extension demo duplication

`src/app/modules/extension-preview/index.ts` exports bubble chrome, highlight anchor, highlight, menu caret, quiz bubble, quiz tile, translator bubble, and TTS icon. `extension-preview.model.ts` defines learned/due/success highlights, above/below placement, translation/quiz shell size, and blank/empty/hint/partial/correct/wrong quiz tile states.

`extension-preview.stories.ts` already covers highlights, translation, quiz, previous attempt plus typing, saving/saved results, German saved result, TTS icon, and anchored compositions. Public landing/browser journey, onboarding mock browser and store-media scenes consume these Angular previews.

Share the bubble frame/caret, icon action, highlight presentation, and character feedback atom when comparing them against the extension source proves common geometry. Keep translation content, quiz behavior, persistence feedback, highlight anchoring and demo timeline as product compositions. The user subsequently expanded the scope to ALL extension Lit renderers and ALL eight webapp clones, including translation and quiz presentation. Their pure UI is shared; consumer services and quiz grading remain local. Replacing only generic buttons would leave real duplicate base primitives behind.

## Tokens, CSS, and assets

Current webapp source is `src/styles/tokens.css`, imported from `src/styles.scss`; `tailwind.config.cjs` maps variables to utility names. Root docs name the independent extension counterpart `extension/src/styles/theme.ts`. Preserve palette and RGB aliases, semantic page/canvas/surface/text/border/action/review roles, all legacy aliases, Long Shadow families, fonts, typography, radius, motion/ease and gradients. Controls also hard-code 10px/7px radii and some elevation values, so a token list alone does not preserve rendering.

Material documentation discrepancy: `docs/design/design-tokens.md` says shadows never blur, but the current webapp declares blurred `--shadow-subtle`, `--shadow-medium`, `--shadow-raised`, while button and dropdown add hard-coded ambient shadows. Preserve actual captured legacy webapp appearance during extraction; do not silently resolve this discrepancy as a refactor side effect. Extension-specific hard-shadow rules must remain intact.

`src/styles.scss` sets Nunito, line-height 1.6 and root font size 18px, falling to 15px below 480px. Existing Tailwind `rem` sizes inherit these roots. Shared Shadow DOM needs explicit box sizing, font/color inheritance, control reset and intentional sizing; imposing 16px everywhere changes geometry. Host roots must remain `stickly-blocked` as required by `webapp/AGENTS.md`.

`src/styles/fonts.css` loads self-hosted Nunito/Caveat subsets with absolute `/assets/fonts/` URLs. The Google button uses `assets/images/google.png`; icons use `@lucide/angular` via `icon-map.ts`. Package elements need portable asset references or icon slots, not hard-coded webapp asset URLs or Angular icon dependencies. Font asset licensing/packaging and load readiness must be part of comparison fixtures.

## Integration gates and migration order

1. Capture legacy states first and normalize only test harness viewport/font/readiness, without changing product rendering.
2. Publish no package yet. Build shared token and element sources, typed properties and composed DOM events with documented value types. Keep browser registration idempotent and explicit.
3. Add thin Angular adapters retaining selectors, CVA, legacy aliases, localized labels, analytics and routing. CVA programmatic writes must not emit user changes; changes and touched state must fire exactly once. Check plain bindings, `ngModel`, reactive forms, disable/reset and form submission. `ElementInternals` alone does not provide Angular CVA.
4. Prove SSR/hydration before migrating route-wide. `app.config.browser.ts` and `.server.ts` both enable `withI18nSupport()` and `withIncrementalHydration()`. Server imports cannot eagerly evaluate `HTMLElement`/`customElements`/`window`. Test meaningful server-rendered content and client upgrade without DOM mismatch, duplicate action, focus loss, blank control or new layout shift. A Node import test alone is insufficient.
5. Migrate atoms, then form controls, then menus/dialog shells and preview atoms. Preserve `navigation.component.ts` focus/blur and nullable reset callers. Retain parent-owned spacing, and migrate button's legacy host margin separately when parity is demonstrated.
6. Run primitive browser behavior/a11y checks and Angular integration specs; use existing `*.component.spec.ts` as semantic requirements rather than copying class assertions. Combobox already tests IME, diacritics, disabled skipping, reactive forms and server listener suppression.
7. Run source-certified full webapp handoff comparison after migration, including navigation, account forms/settings, Word Hub/Anki, public translator, onboarding and landing demos. Preserve before/after/diff artifacts locally. Retire old rendering only after every required state and feature gate is evidenced.

Scope remains UI-local: this extraction should not change Firebase shapes, preferences, external extension messages, callable APIs, or language-selection semantics. No deployment or release behavior was verified here.
