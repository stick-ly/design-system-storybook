# Extension inventory for shared base components

Inspected 2026-10-01 in the current coordination checkout. This is a source audit, not runtime or visual parity proof. The extension was clean on `main` at inspection. No extension production files were changed by this inventory.

Implementation direction was subsequently clarified by the user: shared controls should use the current webapp branding, including its raised button face and connected darker base. The older flat extension buttons are retained as before references, not as the desired shared appearance. The APIs and states below describe the source at the time of inspection; frozen legacy fixtures preserve that evidence. Canonical webapp button comparisons and explicit extension behavior tests are the acceptance target for the extracted buttons.

## Scope and recommendation

Share the tokens and visual control primitives. Keep translation orchestration, Chrome/Safari messaging, authentication, dictionary lookup, word mutation, SRS grading, feedback policy, and positioning controllers in their existing applications. The current extension has four simple custom-element candidates, many controls embedded in domain compositions, and an Angular visual-demo family that independently redraws extension chrome.

Use native `HTMLElement` components with shadow DOM in the shared package and a small application adapter where existing event names or Angular forms must remain compatible. Do not put Chrome globals, Firebase, analytics, translation models, or audio fetching in the design-system package. Retain separate token profiles only where the user has not directed visual unification, such as extension overlay chrome. Shared buttons use the canonical webapp control styles with a fixed 16px unit in host pages, producing 40/48/56px controls independently of a website's root font size. The Angular app retains its existing responsive root sizing.

## Existing primitive contracts

| Source / tag | API and behavior to retain | Visual states to compare | Notes |
| --- | --- | --- | --- |
| `extension/src/components/button.ts`, `stickly-button` | `type: secondary / primary / ghost`; `disabled`, `loading`, `destructive`, `fullWidth`, `flatRight`, `flatLeft`; `size: small / medium`; default text/content slot; native click reaches consumers | Three variants, destructive secondary/ghost, enabled/disabled/loading, full width, joined-left/right/both, 32px small / 42px medium, hover/pressed/focus, long labels, nested icons | The current `type` means appearance, not native `button.type`. Booleans use untyped `@property()` declarations; property bindings are safer than treating every attribute as a native boolean. Loading overlays an 18px loader and hides slot content while retaining width. Loading alone does not disable the inner button. Existing host `[size]` selectors rely on attributes. New API must explicitly distinguish visual `variant` from native form action `type` and define property/attribute coercion. |
| `extension/src/components/checkbox.ts`, `stickly-checkbox` | Reflected boolean `checked`, `disabled`; reflected `theme: light / dark` (default dark); content slot; native change updates checked and emits host `change` with `detail: { checked }`, `bubbles: true`, `composed: true` | Both themes, checked/unchecked, disabled, focus-visible, pressed, multiline label, selected hard 3px edge | 24px control, 7px radius. Label text is outside the internal native `<label>` and not presently associated with the hidden input. There is no indeterminate API. This file has no rendered-tag or import usage found in the current extension source; do not infer it is the source of all existing checkboxes. |
| `extension/src/components/loader.ts`, `stickly-loader` | Empty-render custom element styled directly on host; `--stickly-loader-color` override | Default/accent, custom color, 18px size, centered in button / TTS, loading symbol, reduced-motion mode | 5px border with transparent top; one-second spin with scale midpoint. No live-region semantics. Use decorative loaders plus an accessible busy state owned by their control. |
| `extension/src/components/languageSelector.ts`, `language-selector` | Internal `selectedLanguage`; native `<select>` of 48 languages; localized placeholder and `Intl.DisplayNames`; `languageSelected` event with selected code as plain-string detail | Placeholder/selected, long localized labels, RTL/CJK labels, hover/focus, expanded native picker where supported | Hard dependency on `chrome.i18n` in constructor/render. Existing event has default false `bubbles` / `composed`. It is imported by popup, but no `<language-selector>` usage was found in current source. Language lists and localization belong in adapters; share generic select/combobox. |

Search evidence: imports of `./button` in `inlineQuiz.ts`, `quotaNotification.ts`, and `popup.ts`; `popup.ts` imports `./languageSelector`. `smartTranslation.ts` also renders `stickly-button`. Preserve explicit registration order rather than relying on another composition to register a tag as a side effect.

## Embedded controls and presentational migration units

| Unit and current source | Shared unit | Preserve in application | States / behaviors |
| --- | --- | --- | --- |
| TTS, `components/TTS.ts` | Icon button plus loader; optional static speaker icon | `MessageType.GetTTS`, fetched audio decoding, suspended `AudioContext` resume, gain `0.2`, analytics, browser speech alternative, retries | Idle, loading, failed/retry title, dark/light icon assets; 32px fine-pointer / 44px coarse-pointer targets; click prevents default and propagation; loading disables action; localized accessible name and busy state |
| Translation action trigger/menu, `translatorMenu.ts` | Icon button, generic menu / menu-item geometry | Word deletion, explanation, edit, reveal answer, highlight/quiz toggles, tab/site preferences, settings/help links | Closed/open, hovered item, destructive item, unavailable items; trigger `aria-expanded` / `aria-controls`; current non-composed custom events `wordRemoved`, `requestExplanation`, `revealSolution`, `requestEdit`, mouse-enter/leave; document enable/disable events remain application-owned |
| Dictionary language switch, meaning choices, edit form and sheet, `translationContent.ts` | Segmented control, choice/list row, input, buttons, skeleton, sheet shell | Meanings reconciliation, draft/value retention, save/retry, source/target direction, dictionary fetch lifecycle | Original/translation selected `aria-pressed`, active meaning, expanded forms/examples, pending/missing/late data, editing/save failure, dialog open/close, interaction-lock event and focus restoration |
| Toast, `toast.ts` | Presentational toast shell/action | Application scheduling initially; migrate scheduler only if both apps actually share its rules | Visible/hidden, with/without action, long copy, hover suspends dismissal, leave schedules five seconds, action runs once and hides; public `show`, `showWithAction`, `hide` |
| Feedback, `feedback.ts` | Nonmodal prompt shell, icon button, text/primary actions, status/error text | Invitation claim/release, milestone timing, durable snooze/dismissal, store review action | Open/dismissed, error/retry, close/later/never, focus and Escape behavior; `role=dialog`, `aria-modal=false` |
| Quota prompt, `quotaNotification.ts` | Card/prompt shell, button, progress/status visual | Quota reason, entitlement/referral/subscription routing | Loading, free quota reached, anonymous/signed-in differences, referral/premium labels, popup ten-translation state |
| Review bridge, `reviewBridgePrompt.ts` | Compact prompt shell and action buttons | Entry/accept/skip/completion orchestration | Prompt, reviewing, completed; avoid treating the grading flow as a base component |
| Article practice, `article-mission/panel.ts` | Checkbox row, badge, buttons, panel shell | Selected-word bounds, controller state, one-time link, local-text privacy policy | Invitation, choice list, minimum/maximum disabled selection, opening, failure; composed events `article-mission-selection-change`, `article-mission-open`, `article-mission-start`, `article-mission-cancel` |
| Popup, `popup.ts` | Buttons, input, select/combobox, toggles, panels | Host/PDF access, shortcuts, per-site and per-tab status, account/languages/subscription policy | Permission/native-PDF state, translated language management, quota, disabled tab/site, failures; existing button host styles and `aria-pressed` forwarding need explicit support |
| Inline quiz, `inlineQuiz.ts` | Quiz tile, decorative cursor, accessible answer-entry primitive, status/success chip, buttons | Controller, answer normalization, accepted alternatives, contextual check, IME strategy, grading, persistence and auto-dismiss | Blank/empty/hint/partial/correct/wrong tiles, previous attempts, resolving/fallback, reveal, saving/saved/save-error, expanded details, active reading, multilingual RTL/CJK/inflections/accents, coarse-pointer keyboard |

The answer field is not an ordinary single-line input replacement: it overlays custom character cells and manages keyboard/IME/selection behavior. Extract presentation only after its existing interaction recipes are represented. Do not move SRS or answer authority into the shared package.

## Bubble chrome and duplicated webapp demos

The real extension surface is nested: `stickly-translator` > `translator-bubble` > slotted `translation-content` / `stickly-inline-quiz` and their nested controls. `translatorBubble.ts` owns layout measurement (`ResizeObserver`), placement locking, 8px viewport/anchor margins, invisible 18px pointer hit slop, mobile presentation, and events. Share a dumb bubble shell with caret and size/profile inputs; keep its positioning and lifecycle controller separate.

`webapp/src/app/modules/extension-preview/` independently implements eight Angular components:

| Angular copy | Shared presentation target |
| --- | --- |
| `stickly-bubble-chrome` | Bubble shell, caret, `placement: above / below`, translation/quiz geometry |
| `stickly-highlight` | Inline highlight skin: learned / due / success |
| `stickly-highlight-anchor` | Keep demo composition/anchoring local unless a real shared geometry contract emerges |
| `stickly-menu-caret` | Static caret icon or generic icon trigger |
| `stickly-tts-icon` | Static icon; application audio behavior remains separate |
| `stickly-quiz-tile` | Character tile with blank / empty / hint / partial / correct / wrong; cursor / compact / tight |
| `stickly-translator-bubble` | Demo Angular composition using shared bubble shell, icon, label, menu trigger |
| `stickly-quiz-bubble` | Demo Angular composition using shared shell, quiz tiles, status, and controls |

The copies have their own hardcoded SCSS token mixin in `extension-preview.tokens.scss`, including colors, overlays, gradient, hard edge, spacing, and radii. Current consumers include onboarding mock-browser, landing browser mock, and extension preview stories. Do not import the real extension translator into the webapp: doing so would pull extension messages, Chrome globals, domain logic, and data authority into a decorative demo. Replace their common drawing primitives and keep demo progression in Angular.

Existing `Extension Preview` Storybook entries include learned/due highlights, translator, quiz, attempt override, previous-attempt typing, result saving/saved, German saved result, static TTS, translation/quiz anchors, and both highlights. Retain them as integration witnesses as shared primitives replace the duplicated drawing code.

### Current source versus design prose

`docs/design/design-composition.md` says extension bubbles should use `filter: var(--filter-bubble-elevated)` without borders. Current `extension/src/components/translatorStyles.ts` explicitly changed to WebKit-safe border/box-shadow chrome: `.bubble-elevated` has `filter: none`, `.bubble-chrome` has a 1px accent border and hard long shadow, and the caret has its own 1px border/two hard offsets. The Angular preview matches that construction. Capture the current implementation as the parity authority before extraction, and reconcile the guide deliberately. Applying the older prose would introduce a visual change and may reintroduce a WebKit compositing defect.

## Token and asset duplication

| Location | Current role | Target |
| --- | --- | --- |
| `docs/design/design-tokens.json` | Documented canonical primitive/semantic data | Package-owned token source with a documented migration of canonical ownership |
| `extension/src/styles/theme.ts` | Original Lit `CSSResult` used in component shadow roots | Native CSS string / stylesheet export from the package. No Lit wrapper or `unsafeCSS` remains in the replacement. |
| `extension/src/style/popup.css` | Global duplicate token declarations for extension-owned popup page | Import package token CSS, scoped to owned extension documents |
| `extension/src/style/style.css` | Host-page light-DOM highlight skin and a separate small token set | Package highlight skin/host-isolated export or extension adapter referencing package token values |
| `webapp/.../extension-preview.tokens.scss` | Independent Angular extension-demo token mixin | Shared extension appearance profile |
| `extension/src/fonts/nunito/`, manifest resources, content font loader | Four separate named Nunito TTF families | Package font metadata/assets with app-specific asset URL loading; retain exact family/weight mapping during initial parity |

The extension uses `--color-text` / `--color-text-on-light`; webapp semantic naming also includes ink roles. It retains `--purple-*`, `--gray-*`, `--warning`, `--success`, `--error`, radius/space/font aliases. Keep compatibility aliases until consumers have moved. Extension elevation aliases deliberately map to hard stepped offsets, while the webapp allows ambient shadows. A single scalar shadow alias cannot silently replace both profiles.

Current `themeStyles` declares values on every `:host` as well as `:root`, so each nested Lit component resets token values rather than inheriting arbitrary host-page colors. Removing those declarations or switching all defaults to page `:root` changes both override semantics and isolation. Define which package tokens are safe customization points and explicitly set protected defaults at the extension overlay root.

## Host isolation and runtime contracts

1. Content script appends translator, feedback, and toast hosts directly to `document.body`. The inner shadow DOM protects internals, but host elements, inherited properties, custom properties, slot content, transforms, and layout remain exposed to page styling. Shared components need explicit box sizing, typography, display, direction, disabled-state and focus rules; test hostile page resets and custom-property collisions.
2. Highlights are intentionally light-DOM inline tags inserted by `HighlightManager` and styled by manifest `style/style.css`. They should continue inheriting article typography, wrapping correctly (`box-decoration-break: clone`), and keeping textual selection intact. Due review includes a dotted underline so readiness is not conveyed only by color. Do not blindly replace the manager's wrapper with a shadow component without testing node identity and selections.
3. `translator.ts` recognizes interactive paths via `event.composedPath()` including native buttons, inputs, labels, anchors, selects, textareas, and `stickly-checkbox`. New shared tags and shadow retargeting can affect click suppression and bubble dismissal. Retain correct composition or update those selectors and test real interaction.
4. Nested shadow roots are queried for `.primary-row` geometry, and components depend on Lit `updateComplete` for readiness/focus. Replacing internals can break measurements even if screenshots pass. Prefer a public readiness/measurement method rather than exposing every private node as a shared API. Adapter readiness must be covered by behavior tests.
5. Many events currently use default non-bubbling/non-composed `CustomEvent`; others are explicitly composed. Do not casually make all events composed: doing so can duplicate callbacks or leak domain events to host pages. Shared base-control events should be documented and adapters should translate old contracts deliberately.
6. Native `aria-*` on a custom host does not automatically label or set pressed/expanded state on an internal button. Current popup passes `aria-pressed` to `stickly-button`. The new package must define and test accessible-name/state forwarding, focus delegation, disabled click suppression, and form submission/reset/validity semantics.
7. Custom-element registry is global within each relevant execution context. Existing tags already include `stickly-button`, `stickly-checkbox`, and `stickly-loader`. Give package elements unambiguous new names or isolate old/new comparisons in separate frames; never register two constructors under one tag. Support safe repeated import/registration.
8. Register from browser entrypoints only. The background service worker must not import modules that instantiate `HTMLElement`, touch `document`, register custom elements, or read fonts. Shared style/data exports must remain independently importable.
9. Assets currently resolve through `xBrowser.getURL`, and manifest lists web-accessible font/images explicitly. Shared elements accept asset URLs or use self-contained SVG. No remote script/font CDN, dynamic eval, or inline executable handler dependency belongs in packaged MV3 pages (`script-src 'self'`). Verify webpack inclusion for Chrome and Safari outputs.
10. Current font loader adds four `FontFace` definitions to `document.fonts`. Storybook must load matching fonts and wait for readiness before comparing. The webapp demo uses its own `Nunito` family and may render differently from the extension's named TTF families; fix source ownership without silently changing glyph metrics.

## Comparison and interaction coverage

Create shared-package Storybook groups for old extension primitives, old Angular primitives, new primitives, and paired visual states. Keep legacy rendering independent enough that modifying shared CSS cannot also modify its comparator. The package must work without Chrome globals; legacy extension stories should use a deterministic mock only in the story environment.

The extension already provides a real-component offline playground through `pnpm run playground:no-open`, `PLAYGROUND.md`, `src/index.ts`, and `src/playground/chromeMock.ts`. Reuse it for complete compositions after the package migration. It exercises real shadow DOM and controller paths while mocking Chrome/background services; it does not prove loaded-extension behavior or production correctness.

Required composition gates after each affected migration:

- Translation, fresh/loading, ranked alternatives, explanation, edit/retry, meanings pending/missing/overlap/combined/late, dictionary direction and sheet.
- Menu, toast/action, quota, feedback open/dismissed/pending, review bridge prompt/review/complete, popup quota/site/PDF controls, article-mission selection.
- Quiz, resolving/fallback, multi-answer, typing/previous attempt, saving/saved/failure/retry, success expanded details and reading dwell, RTL Arabic and CJK Japanese input, accents/inflections.
- Above/below, all viewport edges, nested scroll, narrow/short viewport, resize, zoom, coarse/fine pointers, reduced motion, localized long labels (English/German chrome), focus/keyboard/IME.
- Host pages with aggressive native-control CSS, inherited typography/direction, generic CSS custom properties, overflow/transform containers; normal article text selection and highlight keyboard focus.
- Chrome packaged content script/popup and Safari web-bundle smoke checks after package wiring. Offline component parity is insufficient for asset URLs, isolated execution, MV3 packaging, or WebKit layout.

Visual acceptance requires unchanged legacy versus updated composition screenshots for the same viewport/state, plus diff images. Pairwise Storybook similarity alone does not prove the application consumed the new component or retained its event behavior.

## Practical sequence

1. Establish independent old-component fixtures and the token/appearance contract. Resolve source-versus-prose discrepancy before agreeing on baseline acceptance.
2. Extract loader and icons, then move extension buttons to the canonical webapp action appearance as requested. Keep extension button event and loading-width behavior through the adapter. Compare the new drawing with the actual legacy webapp button, retain old extension before images, and test popup/quota/bridge compositions.
3. Share checkbox, input, textarea, radio, select/combobox, segmented choices from the full consumer inventory. Replace embedded extension controls where they truly fit, preserving variant geometry and events. Treat native select platform behavior as a separate fixture from custom listboxes.
4. Extract bubble shell/caret and quiz tiles, then replace Angular extension-demo drawing primitives. Keep extension positioning and Angular marketing/onboarding progression local.
5. Share menu, toast and dialog/prompt shells only where consumer contracts agree. Keep timers, policy and data ownership out of base controls.
6. Retire legacy controls, duplicated tokens and presentation only after primitive and composition visual/behavior gates pass. Remove only proven obsolete imports/classes. All extension Lit rendering is now in scope under the user's expanded instruction below.

Candidate improvements exposed by this audit: explicit boolean attributes, button `type` separation, accessible-name/state forwarding, associated checkbox label/indeterminate support, keyboard-visible focus for old buttons, timer/listener cleanup in toast (current `bind(this)` creates different function objects during removal), explicit tag registration and theme ownership. Record each as an intentional functional improvement with tests; do not hide unrelated redesign behind extraction.

## Expanded scope: every Lit component and Angular clone

The user subsequently requested migration of **all extension Lit components and their webapp clones**. The initial base-component scope above is superseded. Census after the button, checkbox, loader, and native-select extraction: **17 live `LitElement` classes, 9,292 source lines**, including the article-mission panel outside `src/components`. Three former primitive classes already consume the shared browser package. `stickly-context-recall-anchor` is already a native element registered in `services/contextRecallReplacement.ts`; light-DOM highlight tags are also outside the Lit census, but their common drawing remains in scope for clone unification.

| Remaining source / tag | Plain shared rendering unit | Application-owned input and controller |
| --- | --- | --- |
| `translator.ts` / `stickly-translator` (1,673 lines) | Translator composition coordinating shared bubble, translation, quiz, recall and prompts | Selection/highlight lifecycle, answer resolution, preferences, window/document positioning and event integration |
| `inlineQuiz.ts` / `stickly-inline-quiz` (1,580) | Quiz panel, character tiles, previous attempt, result and saving/retry presentation | `QuizController`, answer sets, grading, key/IME policy, persistence and feedback policy |
| `translationContent.ts` / `translation-content` (1,496) | Translation heading, alternatives, edit controls, dictionary content/sheet | Word/meaning reconciliation, asynchronous retrieval, save/retry, edit drafts and audio callbacks |
| `popup.ts` / `stickly-popup` (1,012) | Settings, site/PDF controls, quota/account states and smart-result composition | Browser tabs/navigation, preference subscription, authentication, referral entitlement and messaging |
| `translatorBubble.ts` / `translator-bubble` (758) | Bubble chrome, caret, pointer hit slop, mobile shell and projected content | Current `ResizeObserver`, viewport/anchor placement, readiness and lock policy |
| `contextRecall.ts` / `stickly-context-recall` (605) | Recall prompt, answer/result states and action composition | Context/answer callbacks, attempt state and lifecycle |
| `translatorMenu.ts` / `stickly-translator-menu` (598) | Canonical shared menu trigger, item/list geometry and optional sections | Delete/edit/explain/reveal, preference/site/tab mutations, links and toast callbacks |
| `quotaNotification.ts` / `stickly-quota-notification` (327) | Quota card and actions | Quota reason, subscription/referral routing and browser-target policy |
| `feedback.ts` / `stickly-feedback` (203) | Nonmodal feedback prompt and status | Invitation claim/release, milestone policy, durable snooze/dismiss and review routing |
| `toast.ts` / `stickly-toast` (185) | Toast text/action shell | App scheduling and action callback; preserve public `show`, `showWithAction`, `hide` |
| `TTS.ts` / `stickly-tts` (176) | Speaker button, loading/failure states | Fetch/decode/play/resume audio and analytics |
| `smartTranslation.ts` / `smart-translation` (174) | Translation card / save action | Save request, Word construction and audio callbacks |
| `reviewBridgePrompt.ts` / `stickly-review-bridge-prompt` (169) | Prompt/review/completion panel and actions | Entry, accept, skip and completion orchestration |
| `celebration.ts` / `stickly-celebration` (139) | Decorative burst/particles | Trigger timing and product success authority |
| `article-mission/panel.ts` / `stickly-article-mission` (79) | Mission panel/suggestions/selected count | Selection model, min/max policy, suggestion and submit callbacks |
| `languageSelector.ts` / `language-selector` (70) | Plain locale adapter over shared native select | 48-language option data, `Intl.DisplayNames`, `chrome.i18n`, legacy `languageSelected` event |
| `smartTranslations.ts` / `smart-translations` (48) | Reconciled card list | Translation collection passed from popup |

Migration should remove Lit imports and decorators from these production adapters, not merely replace some children while retaining a Lit host. Each shared composition accepts plain data and action callbacks/events; browser services and product models are mapped at the application boundary. Stable native nodes, explicit property setters and focused reconciliation are sufficient. A generic replacement template engine is outside this plan.

All eight Angular extension-preview components listed above must become thin wrappers over the same shared primitives/compositions. Preserve Angular demo progression, anchoring and inputs while removing duplicated SCSS renderers. Public inline-quiz marketing/demo composition is an additional integration consumer to inspect, rather than assuming every similarly named quiz has the same interaction contract.

Readiness dependencies are substantive: playground `index.ts` awaits translator, popup, feedback, menu, quiz and article-mission `updateComplete`; production `scripts/content.ts` awaits feedback readiness; bubble awaits projected content readiness; feedback, recall, dictionary/edit and quiz schedule focus after their own readiness. `QuizController` calls `host.requestUpdate()` across state transitions. Replace these with explicit update/focus contracts or compatible promise shims in thin adapters, with tests. A resolved promise is insufficient when rendering is deferred or async projected content is measured.

Suggested parallel ownership is translator/quiz orchestration separation, bubble/menu/dialog plus standalone extension presentations, and Angular clone/common tile/highlight/audio presentations. Freeze source fixtures before each unit changes; use existing offline extension playground scenarios as composition witnesses. Completion requires the remaining Lit census to reach zero and every clone drawing to consume shared implementations, followed by behavioral and image evidence. Counts are source evidence only, not a claim that the expanded migration is complete.

The canonical webapp dialog source provided Escape closing and focus restoration, but no Tab trap. The shared shell adds an explicitly requested accessibility improvement: Tab/Shift+Tab cycles through visible native controls, including controls inside projected shared shadow elements; Escape affects the top dialog only; nested overlays share a counted body-scroll lock that preserves the original inline overflow and class state. This is additional behavior, not legacy parity. Focus cycling, nested close order and restoration have dedicated browser contracts.

## Expanded migration implementation boundary (2026-10-01)

The production smart-card/list, review bridge, article mission, menu, bubble and quota components now extend plain shared views. The popup controller now extends the exported shared popup view. Domain state, translation messaging, preferences, PDF routing, subscriptions, article eligibility, analytics and localized copy remain in the extension. The package accepts plain presentation data and asset URLs, exposes specific action events, and owns stable native DOM and drawing. Dynamic labels and translations use text nodes/DOM attributes, never interpolated HTML.

Canonical webapp controls intentionally replace extension-specific flat buttons and custom article selection boxes. The popup translation row uses the canonical 48px field/button geometry instead of its original independent 42px textbox. These are before/after branding changes, not exact legacy visual parity claims. Quota referral is now a native link with delegated application routing, adding keyboard Enter activation to the original click-only role element. Modal focus cycling and topmost-only Escape are separately documented accessibility improvements.

Shared views keep projected controllers stable while their conditional surface remains visible. Removing an absent translation result or quota section removes its controller, preserving the original lifetime boundary for later reappearance. Quota exposure events remain batched and keyed by issue reason/amount; the package has no analytics dependency. Popup PDF sections remain independent, including the original combination where a default-reader section and unsupported-manual-reader notice both appear.

Source parity must compare rendered output. The legacy dialog's `bg-page/78` utility has no generated Tailwind rule, so its actual backdrop is transparent; the extracted canonical shell preserves that output. Dropdown white uses the canonical RGB token instead of an undefined shorthand. The inline webapp quiz bubble inherits centered alignment from the translated shell; extension absolute quiz layout remains stretched. These source-specific cases are covered by separate profiles and measured comparison gates.

Verified evidence so far: all twelve checkbox/radio actual legacy/shared desktop/mobile comparisons have zero changed pixels. Focused Angular checkbox/radio/dropdown/dialog/position tests pass (19 checks), and extension no-emit typechecks pass through the popup adapter. A live source census now finds zero Lit imports or component classes in extension/src. Overlay, popup and composed extension behavior/image gates are still being resolved and must not be presented as complete based on source extraction or typechecks alone.


Real application-controller fixtures now preserve the complete frozen/current popup, smart-card/list, quota and article-mission sources. Their only transformations redirect browser/service imports and namespace custom tags; 58 source/fixture integrity checks pass. The original/current controller contracts passed 28 desktop/mobile cases covering Enter translation payloads, loading/result/quota transitions, save retry identity, PDF browser policy, preference/navigation delegates, exposure batching, entitlement-specific routes and mission selection/event limits. Evidence is `packages/design-system/artifacts/domain-adapters/contracts-desktop-mobile.json`; these functional results are separate from the pending composition image gates.

The controller checks caught two extraction bugs that are now fixed: inherited `HTMLElement.title` cannot be assigned during custom-element construction, so quota copy has private backing storage; and popup must retain an explicit smart-result side-effect registration import because a type-only use is erased by TypeScript. An added selector check also corrected an audit assumption: the frozen `selectedLanguage` member uses `@state()`, so `selectedlanguage` attributes are ignored, while property updates are supported and do not dispatch `languageSelected`. The adapter preserves this distinction.

Obsolete Lit-specific TypeScript/Babel plugins and decorator/class-field transformation dev dependencies have been removed from the extension. Production sources and configuration no longer import Lit or name its TypeScript plugin. Frozen comparison fixtures temporarily retain test-only Lit dependencies in the shared package; packaged runtime exports have no Lit dependency. At completion, retire the executable Lit comparisons and remove these temporary dependencies too, preserving historical source references and the captured original/replacement evidence.


## Remaining webapp one-off controls, read-only audit

This audit excludes stories/tests and recognizes managed native inputs/buttons already wrapped by shared controls. Native nodes alone are not evidence of duplicated drawing: hidden form values in select/combobox and autocomplete fields are integration plumbing. Cookie preferences already use shared checkbox rendering; Word Hub delete/save/edit and row menu actions already use the shared action/menu controls.

| Source | Required shared control/profile | Public view contract and local controller |
| --- | --- | --- |
| `word-list/wordlist/wordlist.component.html:85,96` | Compact circular column-toggle, 28px profile | Native button, accessible label, pressed state, disabled/focus/hover; column blur remains Angular state |
| `core/cookie-consent/cookie-preferences-dialog.component.ts:55` and `word-list/anki-export-modal/anki-export-modal.component.html:18` | Same 36px circular close profile | Project icon; native close click and accessible label; dialog/export state stays local |
| `help/contact/help-contact-panel.component.html:3`, `public-translator/dict-word-intro/dict-word-intro.component.ts:30` | 40px light and 32px dark close profiles | Native close/dismiss, label and disabled/focus behavior; form/intro visibility stays local |
| `core/footer/footer.component.html:7–14,33,36` | Shared quiet link/text-action profile | Preserve real href/RouterLink/mailto and Cookie settings native button callback; footer layout/copy stays local |
| `blog/list/list.component.html:30,40,118` | Compact category-choice chips and primary empty-state action | Selected/pressed, disabled and keyboard/focus; category/search filtering stays local |
| `account/settings/settings.component.html:94,114,132` and `settings.component.ts:761` | Shared segmented radio profile | Typed values, group name, selected/disabled state, native radio keyboard interaction; preference persistence/saving remains Angular |
| `admin/vocabulary-admin/vocabulary-admin.component.html:107`, `help/home/help-home.component.html:42`, `public/ai-language-practice/ai-language-practice.component.html:331` | Shared text-action profiles | Native button callback/focus/disabled; reload/filter/reset service policy stays local |
| `account/premium/premium.component.ts:122`, `help/article/help-article.component.html:80` | Shared action-link profiles | Native anchor href/target/rel/RouterLink; billing/resource navigation stays local |
| `public-translator/dict-related-words/dict-related-words.component.ts:34`, `game/word-details/word-details.component.html:40`, `vocab-test/vocab-test.component.html:118` | Shared compact link/selected-chip profiles | Native link, active state and keyboard/focus; dictionary URL, synonym and pair selection stay local |

Mobile navigation tabs, Language Constellation cards, Vocabulary Garden plant interaction and flashcard flipping are product compositions with layout/data/gesture meaning beyond generic actions. Keep their controllers and native semantics local rather than replacing them with generic raised buttons. Their reusable base drawing may consume explicit shared profiles without migrating routing, statistics, plant motion or card game state into the package. The feedback modal's five interactive stars are a separate rating-control candidate: a shared renderer could accept rating/preview/disabled and emit a number; invitation/submission/review services must remain Angular. That candidate is distinct from extension feedback prompt extraction, so the existing prompt migration does not certify it.


The escaped native drawing audit is now implemented through fifteen package-owned `oneOffActionStyles` profiles and a native envelope factory. Managed mode uses `display:contents` and retains the exact native button/anchor/radio DOM and Angular binding. Ten feature components consume eleven certified actual native fragments; a parallel owner migrated blog categories/reset, help contact close and settings segments. Cookie/Anki/footer profiles remain a separate owner. Complete original feature sources are frozen with hashes under `webapp/src/testing/legacy/one-off-actions`, and paired stories use verbatim original/current fragments rather than recreated legacy CSS. Profiles preserve actual generated utility output, including missing legacy `shadow-long` and `hover:bg-white/8` rules; their absence is not silently redesigned during extraction.

Managed checkbox/radio controls also reconcile current host checked/indeterminate state after the native form-reset default restores server defaults. The reconciliation changes native properties only, with no synthetic input/change events or ARIA mutation, and cancels pending work/listeners on disconnect or canceled reset. This fixes the observed hydrated form reset path; standalone choice behavior is unchanged. Direct defaultChecked, reconnect, cancel and cleanup contracts plus actual Angular SSR hydration remain the proof gates.

Real domain before/after/diff images now exist for popup idle/loading/result/quota, Chrome/Safari quota and article mission across desktop/mobile at `packages/design-system/artifacts/domain-reference/{chromium,chromium-mobile}/`. The four language-selector cases and four original/current smart/list/quota attribute-converter cases passed. A stricter follow-up preserves raw original String values (`''`, `'false'`, and `null` on removal), not merely their truthiness. The controller fixture guards expose a clear portable fixture-only lane and a separate required live-consumer lane; unavailable sibling sources cannot be presented as live certification in the latter.
