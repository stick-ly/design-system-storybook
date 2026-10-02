# Shared components: testing and package delivery inventory

Initial source audit: 2026-10-01. The infrastructure audit was read-only. Later measured migration checkpoints and final authentic-original lane results are recorded below; they remain local evidence rather than remote CI, deployment or physical-device proof.

## Existing infrastructure

| Surface | Authoritative implementation | Current behavior |
| --- | --- | --- |
| Angular Storybook | `webapp/.storybook/main.ts`, `preview.ts`, `angular.json` | Storybook 9 Angular renderer; 97 source story files at audit time; assets mounted at `/assets`; live port 6006; explicit English/German catalogs; ready marker emitted after story play/afterEach finishes. |
| Angular component tests | `webapp/angular.json`, `src/test-setup.ts` | Angular build unit-test builder using Vitest; six control families implement `ControlValueAccessor`: input, textarea, checkbox, select, combobox, radio group. |
| Webapp visuals | `webapp/playwright.visual.config.ts`, `tests/visual/storybook.visual.spec.ts` | Chromium 1280×720 and touch Chromium 390×844; CSS pixels, fixed locale/timezone, font and image readiness; no implicit baseline creation; missing snapshots and browser errors fail; screenshots cover full pages. Existing global tolerance is 1%, which must not silently become the primitive parity threshold. |
| Visual selection | `webapp/scripts/testing/run-visual-tier.mjs`, `visual-plan.mjs`, `storybook-fingerprint.mjs` | Certified build reuse, source fingerprint before/after run, conservative broad fallback; coverage policy is currently `shadow`; affected lane still executes broad stories. A targeted lane is diagnostic and cannot certify handoff. |
| Webapp SSR | `webapp/scripts/verify-ssr-runtime.mjs`, `verify-hydration-runtime.mjs` | HTTP cache/runtime checks plus English, German and session-cookie landing hydration checks. These scripts do not yet prove custom-element SSR visibility, registration, form behavior, or nested-shadow focus. |
| Actual extension bridge | `webapp/tests/e2e/extension/*` | Persistent bundled Chromium with loaded development extension, checks external install identity/preferences messaging. Fixture supports `STICKLY_EXTENSION_DIST`; its default resolves to sibling `extension/dist`. The preparation command builds the playground, while fixture loads `dist`; neither is proof of a current installed extension unless runtime identity is separately verified. |
| Extension isolated rendering | `extension/webpack.playground.js`, `src/index.ts` | webpack playground on port 9000, separate `.playground-dist` output; scenarios include translation, dictionaries, quiz, loading/error, mobile placements, popup, review and feedback states. No extension Storybook configuration or general visual snapshot command exists. |
| Extension behavioral tests | `extension/scripts/run-policy-tests.cjs`, `tests/*` | One compiled TypeScript policy suite, runtime contract tests and source/bundle contract tests. A unique task-owned temporary output is cleaned in `finally`. These tests are valuable product safeguards but do not cover a shared control's browser event semantics or pixel parity. |
| Webapp CI | `webapp/.github/workflows/ci.yml`, `visual-audit.yml` | Routine typecheck/lint/unit tests and harness contracts; optional full locale/build gate. Daily changed-revision visual audit runs broad coverage and uploads evidence. Full visual suite is not a per-PR default. |
| Extension CI | `extension/.github/workflows/localization.yml` | Independent frozen install, TypeScript, localization, product policy and package gates. No shared primitive browser or visual gate yet. |

`webapp/README.md` still describes Angular 18/Material/Karma. The current package manifest and Angular configuration are authoritative: Angular 20, custom components and Vitest. Update those stale headings during documentation cleanup, without upgrading dependencies.

## Commands that already exist

Run commands in the named checkout, using its Node 22.23.1 and pnpm 11.17.0 toolchain. These are source-confirmed commands, not newly executed results.

| Working directory | Command | Purpose |
| --- | --- | --- |
| `webapp` | `pnpm run storybook` | Hot reload during iteration. |
| `webapp` | `pnpm run typecheck` | Fast compilation check. |
| `webapp` | `pnpm run test:unit` | Angular/Vitest behavior tests. |
| `webapp` | `pnpm run test:visual:plan -- --base <review-base>` | Source-only conservative coverage report, no build. |
| `webapp` | `pnpm run test:visual:affected -- --base <review-base>` | Certified visual handoff, currently broad execution in shadow policy. |
| `webapp` | `pnpm run test:visual:broad -- --base <review-base>` | Explicit broad comparison. |
| `webapp` | `pnpm run test:visual:harness` | Selector/fingerprint fault cases. |
| `webapp` | `pnpm run build` | Production App Hosting build at handoff or after SSR/routing changes. |
| `webapp` | `SSR_VERIFY_ORIGIN=<local-ssr-origin> pnpm run verify:ssr-runtime` | Built server HTTP checks. |
| `webapp` | `SSR_VERIFY_ORIGIN=<local-ssr-origin> pnpm run verify:hydration-runtime` | Existing landing hydration audit. |
| `webapp` | `node tests/visual/generate-pixel-diff.mjs <before.png> <after.png> <diff.png>` | Explicit equally sized image difference artifact. |
| `extension` | `pnpm exec tsc -p tsconfig.json --noEmit` | Non-mutating TypeScript check. |
| `extension` | `pnpm run playground:no-open` | Production component composition hot reload. |
| `extension` | `pnpm run playground:build` | Isolated playground bundling, no release increment. |
| `extension` | `pnpm run test:policy` | Deterministic runtime policy suite. |
| workspace | `pnpm test:scenarios -- --json --repo webapp` | Discover authoritative test entrypoints; add `--probe` to check an existing managed stack. |

Do not run extension `pnpm run build` as an intermediate check: production packaging mutates the manifest patch version. Existing CI package gates remain useful for the eventual release handoff.

## Shared package delivery

Canonical source lives in `packages/design-system`. The user selected ownership by its own private repository, retaining this local nested path as an independent Git boundary. Keep it independently installable, with its own package manifest, lockfile, README, Storybook, CI and checks. The coordinator currently has no pnpm workspace manifest; introducing a workspace is unnecessary for this refactoring.

The working bootstrap is an identical immutable archive in both consumers at `vendor/stick-ly-design-system-0.1.0.tgz`. User steering supersedes permanent vendoring: final delivery is the private GitHub Packages release `@stick-ly/design-system`, exact version pins and frozen lock integrity, with focused update PRs for newer passing releases. Activate registry transport only after a real published version and secure read access exist. Independent consumer builds must never require a parent checkout, sibling install, `../packages` path or untracked symlink. See [distribution.md](distribution.md) for access and activation order.

Export plain ESM browser modules, declarations, token CSS and an explicit registration entrypoint. Keep Angular and Lit out of the package runtime dependency graph. The final user requirement also removes Lit from development dependencies and every executable comparison fixture. Only inert historical source references and authentic captured original images remain after the recorded comparisons pass. Browser registration belongs only in document contexts: MV3 service workers must not import DOM classes. Server entrypoints must never evaluate `HTMLElement`, `document` or `customElements` at module load. Give Angular adapters local responsibility for forms/routing/localization; these adapters contain no duplicated rendering or styles.

Archive delivery avoids publication during this authorized local refactor. Once publishing is separately authorized, a registry version with an exact pinned dependency replaces the vendored archive. Do not maintain divergent package copies as authoring source.

Package validation must unpack the built archive in a clean temporary project, typecheck its public imports, render each export in a browser, and install each consumer with a frozen lockfile in an independent checkout. Extend webapp Storybook fingerprints to include the package integrity digest and locked dependency identity. Existing fingerprints ignore `node_modules`; a local linked package edit otherwise risks reusing stale output. Shared token/archive changes must conservatively select all consumer stories until dependency impact is proven.

## Real legacy/new comparison

The expanded migration includes every extension Lit UI renderer and matching webapp controls, including composed translation, quiz, feedback and popup surfaces. Exact original snapshots for all 20 extension Lit renderers are retained under `packages/design-system/stories/legacy/extension/source` with immutable SHA256 provenance. This source inventory is distinct from executable paired fixture coverage: each composition still needs its real dependencies, reachable states and domain behavior wired into comparison stories. Canonical choices now target the actual frozen webapp checkbox/radio designs; old extension checkbox captures remain before/reference evidence.

Use HTML/Vite Storybook for canonical vanilla `HTMLElement` stories. The HTML renderer accepts DOM returned by story render functions and avoids adding Lit to the new implementation. For the comparison harness only, retain real legacy Lit classes and theme source as provenance-recorded fixtures under separate tags. Keep the old source intact except for mechanically documented import/tag renaming needed to coexist with the new tags. Reconstructed markup or old screenshots alone cannot prove old behavior.

Angular legacy components cannot be faithfully rendered by an HTML renderer. Keep the existing Angular Storybook as its comparison authority and add paired old Angular/new element stories there, using the same fixture values and host layout. The canonical package Storybook links to those Angular pairs through its coverage manifest. This keeps actual Angular forms, projected content, router links and styles in the test, rather than creating another demo replica.

The user selected the current webapp branded Long Shadow design as the button authority after reviewing the initial extension comparison. Extension buttons therefore deliberately adopt that design while retaining their behavioral contracts. Capture the old flat extension buttons as before/reference images, and compare the new rendering to actual original Angular webapp buttons for visual acceptance. The migration is incomplete if those new controls merely preserve the old extension appearance. Other controls retain explicitly recorded visual authorities until their consolidation is implemented; the latest webapp design is the preferred target. Token profiles may bridge existing differences temporarily, but must not become divergent component implementations or an excuse to avoid the selected shared design.

Every pair has stable `legacy` and `shared` story IDs and a review story showing both versions. The automated parity test captures each implementation in separate, identical fixtures/iframes and compares equal crop rectangles. It runs both the same interaction path and the same assertions before screenshots. Produce `before.png`, `after.png`, `diff.png` and a result JSON containing package integrity, legacy source SHA/digest, story IDs, viewport, state and compared pixels. Compare each implementation against reviewed long-lived baselines as well: shared and legacy changing together must not hide regressions.

The current webapp snapshot tolerance permits up to 1% differing pixels. For small controls that could hide a meaningful defect. New paired primitive tests start at zero differing pixels within a fixed platform/browser; review any font rasterization tolerance explicitly. Dimension differences fail without resizing. Freeze only animation/clock/randomness, never layout or state that defines actual behavior. Keep dynamic animation behavior under a separate functional check.

## Coverage and retirement gates

Track a manifest for every primitive containing old implementations, public inputs/events/methods, visual states, behavioral cases, consumer stories and migration status. A manifest validator must fail if an inventoried state lacks both old/new stories, a claimed parity case is excluded, or a ready primitive still has unmigrated consumer call sites. Existing webapp source/index certification is the model; a hand-maintained count alone is insufficient.

| Control family | Required meaningful coverage |
| --- | --- |
| All controls | Current light/dark/profile variants; inherited and overridden tokens; default, hover, focus-visible, pressed, disabled; small/normal/large where supported; full width/compact contexts; empty and long localized labels; slot/icon alignment; RTL and Unicode where relevant; disconnected/reconnected instances; property set before registration. |
| Button/link | Primary/secondary/ghost/destructive variants; loading with stable width; flat left/right; native keyboard activation; submit/reset/button types; actual href/router link behavior; correct accessible name; disabled blocks action. Preserve existing loading click semantics until a separate product decision changes them. |
| Input/textarea | Empty/populated/read-only/disabled/invalid; leading/trailing content; label/hint/error association; required/pattern/type/min/max; controlled updates preserve caret and focus; composition input; paste; Enter behavior; native form reset and submission. |
| Checkbox/radio/toggle | Checked/unchecked/indeterminate where supported; long label; group/value semantics; disabled fieldset; label activation; Space and arrow navigation; custom event detail/bubbling/composed contract; no duplicate events. |
| Select/combobox | Closed/open; keyboard selection; populated/empty/filter/no-results; single/multiple only where currently supported; disabled options/groups; focus return; scroll/clipping/placement; blur/change timing; value identity and localized option labels. |
| Loader/progress | Existing colors/sizes; centered in loading button; accessible busy/status behavior; reduced motion; loader mounting/unmounting without leaking timers/listeners. |
| Overlays/help controls | Trigger-open-close keyboard/mouse/touch, Escape/outside click, nested scroll, mobile placement, focus return, clipping and stacking; accessible relationships through shadow boundaries. Product compositions remain in their consumer. |

Use an explicit list of meaningful state combinations rather than the full Cartesian product. Every existing public feature and relevant cross-feature interaction still needs a named case. Chrome and WebKit browser behavior must cover native controls, focus, forms and shadow DOM; Chromium desktop/mobile image snapshots alone cannot prove Safari behavior. Playwright WebKit is software-browser evidence, not physical Safari-extension evidence.

## Angular forms, SSR and actual extension integration

Preserve each existing `ControlValueAccessor` contract through thin adapters: `writeValue`, change/touched registration and `setDisabledState`. Explicitly test `ngModel`, reactive `FormControl`, `formControlName`, programmatic patch/reset, pristine/dirty/touched, validation, `updateOn: 'blur'`, disabled re-enabling and teardown. `CUSTOM_ELEMENTS_SCHEMA` only accepts element names; it does not provide forms integration. Native `ElementInternals` form association also does not replace Angular's value accessor bridge. See the official [Angular value accessor API](https://angular.dev/api/forms/ControlValueAccessor).

Where controls use native form association, test `FormData`, requestSubmit/reset, validity and disabled-fieldset behavior in real browsers. Keep the form model outside DOM rendering. WebKit describes the form-associated lifecycle and browser behavior in its [ElementInternals documentation](https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/).

Extend SSR verification with an affected public route and a forms route. Import server-safe package metadata/tokens with no DOM globals; assert useful labels/links/text before JavaScript; register custom elements after browser startup; verify hydration has no duplicate nodes or mismatch errors, no blank-control interval and no first-interaction loss. Do not blanket-skip hydration to hide structural mismatches. Existing landing audit checks one intentional skip already present; add focused checks for every changed control family.

Extend actual-extension verification with a current packaged bundle, service-worker identity, nested shadow DOM and hostile host-page styles. Verify click/key events reach the native presentation adapters and local controllers once; properties survive presentation updates; native keyboard focus; popup and content-script entrypoints; no new remote code, eval or CDN requirement under MV3 CSP. Production extension and the final shared package, including Storybook/tests, must contain no Lit imports, classes, wrappers or dependencies. Authentic original renderers execute only during the measured migration phase and are then archived as inert text references. Test shared tokens/fonts in hostile pages without leaking global styles. Scope cleanup to owned browser contexts and profiles in `finally`.

Retire each legacy implementation only after paired visual/functional evidence, its Angular or Lit integration cases, relevant whole-composition stories and migration search all pass. Preserve provenance fixtures while the migration is active; remove them only when the recorded gate is satisfied. No baseline acceptance, commits, registry publication or release is implied by this inventory.

## Acceptance evidence

During iteration use live Storybook and narrow typechecks. At handoff run canonical package checks and paired comparisons, the certified webapp affected lane, actual extension/browser integration, and SSR/form gates for affected consumers. Preserve final evidence outside disposable test output, under ignored local artifact folders. Keep approved regression baselines and reusable source fixtures tracked; generated screenshots/reports stay ignored.

A package's green primitive matrix is not proof of all consumer compositions. A build is not visual or functional proof. Report unrun checks and failing/missing states explicitly; the refactoring remains incomplete until all scoped call sites and behavior have been verified.

## Measured migration checkpoints

These are narrow local checkpoints, not a final broad acceptance claim. All browser runs use one existing installed Chromium worker across desktop/mobile profiles; temporary browsers close at terminal while the public Storybook remains running.

| Checkpoint | Measured result | Evidence |
| --- | --- | --- |
| Complete original/current popup, quota, mission and smart-card controller contracts | 28 passed across desktop/mobile. Additional language selector property/ignored-attribute/local-event cases: 4 passed. Smart-card/list String converters and quota attribute removal: 4 passed. | `packages/design-system/artifacts/domain-adapters/` and Playwright reports. |
| Raw original/current rich compositions | 14 captures passed source/error guards. Pixel differences are retained and explicitly labeled as references for approved canonical buttons/choices and the 48px popup field. | `packages/design-system/artifacts/domain-reference/{chromium,chromium-mobile}/`: popup, result, loading, quota error, quota notification, Safari quota and mission. Each directory contains before, after, diff and source-certified JSON. |
| Actual TTS consumer adapter attributes | 4 passed: original word/language attributes, empty/nonempty String dark conversion, native button/focus identity, exact service request and reconnect event count. | `audio-adapter.spec.ts`. |
| Dictionary insight selectors and spacing | 8 exact zero-pixel captures after preserving original section sibling structure and headword whitespace. | `packages/design-system/artifacts/dictionary/` insight-loading, insight-ready, target-language and alternate-meaning. |
| Actual InlineQuiz controller | 8 native IME/NFC/grapheme/persistence contracts passed. Initial 28 paired captures: 27 passed, one desktop mobile-typed state differs by 2 pixels at the focused tile outline and remains open. | `packages/design-system/artifacts/inline-quiz/`, including original/current outline metrics. |
| Angular fields, full quiz, bare bubble and compact controls | Latest installed 238 archive: 18 exact captures passed, covering 8 field states/focus, 2 full quizzes, 2 bubble compositions and 6 banner/pagination/pronunciation cases. Two compact-result comparisons remain open. | `packages/design-system/artifacts/angular-parity/`. |
| Actual Angular hydration | Real AOT SSR metadata and original native/rich node retention passed the readiness probe. That probe then exposed missing native input names in FormData; the consumer fix is pending browser revalidation. | `packages/design-system/artifacts/angular-hydration/` and actual server snapshots under webapp visual artifacts. |

The complete package and both consumers still require a stable-source final run, existing affected/broad visual lanes, actual extension bundle verification and browser-specific compatibility checks. Authentic frozen source snapshots for all 20 original renderers are provenance inputs; they do not certify that every composition has executed.

## Final authentic-original evidence before retirement

The stable-source source lane `52632` passed all 574 tests across Chromium desktop and touch-mobile with zero skipped/flaky outcomes or runner errors. The complete Angular lane `4827` passed all 138 tests: 124 exact image comparisons, six genuine AOT SSR/client-hydration contracts, four native submit/reset contracts and four GridStretch geometry contracts. Both used the coherent `105e07e4f49ec971d7ea1c62c54391ba24c74b0b9bd2c4fc676b91cf1c493ede` archive and source-certified consumer inputs.

Authoritative reports are preserved under `packages/design-system/artifacts/certified-originals/source-52632.json` and `angular-4827.json`. The reporter-derived `catalog.json` lists exactly 562 captured visual keys and their actual successful titles/projects, result hashes and source identity. It rejects stale or overwritten results instead of discovering old artifact directories. `artifacts/capture-environment.json` records Chromium 149.0.7827.55, Playwright 1.61.0, Darwin arm64, device scale 1 and production font hashes.

The complete Angular captures changed zero pixels. Raw extension composition differences remain explicitly approved references for canonical controls and popup field geometry. Five narrow original raster controls retain ten fixed original captures each: desktop quiz mobile-typed, desktop audio default/light/failed focus, and touch-mobile quiz long. Only their explicitly measured one or two coordinates permit a color observed at that exact original position; all surrounding RGBA values remain exact. Raw counts and repeat/paint proof are retained, including the one changed mobile-long pixel. This is not a broad tolerance or a zero-pixel claim.

The final requirement retires executable original framework fixtures and all Lit dependencies after the authenticated export is verified. Preserve original source/provenance bytes as `.ts.txt`/`.json.txt`, reusable original PNG inputs and required original-repeat PNGs under tracked Storybook assets. Preserve full before/after/diff/reports/paint proof under ignored historical evidence. Current native states and contracts remain executable; clearly labeled historical image references remain reviewable. A new current-only full lane is required after retirement and final packaging, because the Storybook decorator override is also removed.

Standalone package CI verifies input integrity and current native behavior without claiming live consumer certification. A dedicated require-live lane fails if the actual consumer sources are absent or stale. A different browser/platform may certify reference hashes and current contracts, but cannot claim exact historical pixel parity. Independent consumer GitHub Actions must install their own exact vendored tar and run their local gates; no sibling checkout dependency is introduced. Remote CI, registry publication, WebKit and physical Safari-extension proof remain separate outcomes.
