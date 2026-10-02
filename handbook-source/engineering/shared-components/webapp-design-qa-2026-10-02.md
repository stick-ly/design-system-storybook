# Design QA

## Vocabulary garden semantic SVG motion

### Evidence

- Source visual truth:
  `src/assets/images/vocabulary-garden-stages.png` (`1258 x 326`).
- Browser-rendered implementation:
  `tests/visual/artifacts/dashboard-vocabulary-garden/after-garden-desktop.png` (`1280 x 720`).
- Source-to-implementation comparison:
  `tests/visual/artifacts/dashboard-vocabulary-garden/qa-comparison.png` (`1280 x 1076`).
- Independent-part motion capture:
  `tests/visual/artifacts/dashboard-vocabulary-garden/after-garden-familiar-rustle-desktop.png` (`1280 x 720`).
- First-load growth sequence:
  `tests/visual/artifacts/dashboard-vocabulary-garden/after-garden-growth-sequence-desktop.png` (`1280 x 720`).
- Native iOS Safari repair proof:
  `tests/visual/artifacts/dashboard-vocabulary-garden/after-garden-ios-safari.png` (`942 x 645`).
- Storybook states: `Populated`, `Alternate Garden`, `Familiar Pinned`, `Sparse`, and `Empty`.
- Browser viewports: desktop `1280 x 720` and mobile `390 x 844`, device scale factor `1`.

### Full-view comparison

The implementation keeps the source composition and maturity hierarchy: a seed, a young gold sprout, a familiar purple plant, and a mature green fruiting plant share one ground line in four evenly spaced stages. The replacement artwork deliberately increases local dimensionality through layered gradients, edge contours, leaf veins, highlights, and selective shadows while preserving Stickly's established purple, gold, and green progression.

The explicit product request for purpose-built, animatable semantic SVGs is the governing asset decision for this surface. The four former per-stage PNGs have been replaced by standalone transparent SVG assets whose branch, leaf, trunk, root, seed, and fruit groups can be addressed independently.

The user-supplied authenticated iPhone capture exposed a P0 that Chromium could not reproduce: external `<use href="asset.svg#part">` geometry survived selectively, but the gradients and filters stored in the external SVG document did not. The resulting garden showed only a faint seed and isolated trunk outlines. The rendering architecture now compiles each complete SVG—its local `<defs>` and semantic groups—into the stage that animates it. There is no external fragment dependency, no Safari user-agent branch, and no static-image fallback.

### Focused motion comparison

The Familiar motion capture verifies that the plant is no longer a sliced image. Five branch-leaf assemblies rotate around their illustrated junctions with staggered timing while the trunk has a smaller counterweighted sway. The Ready plant uses eight branch-leaf groups and three fruit groups with lower-frequency fruit lag. Pointer position sets gust direction and resting bend; click, keyboard focus, and touch trigger the same one-shot response. Reduced-motion preference removes decorative transforms and animations.

The initial entrance now reads chronologically across the authored SVG topology: the seed settles first, roots spread and the gold stem rises, Familiar leaves unfold from their illustrated joints, then the mature trunk, lower-to-upper canopy, and fruit arrive. The stages overlap slightly so the progression feels organic rather than like four slides. Hovering, focusing, or tapping during the entrance completes only that plant before handing control to the gust animation; later count updates do not replay the intro.

The lightweight generative engine changes arrangement rather than illustration quality. A deterministic, versioned hash of stable vocabulary identities produces tightly bounded frame offset, scale, resting angle, per-part position, sway amplitude, and timing values. These values are stable across server rendering and hydration, change when the underlying vocabulary collection changes, and remain fixed through review-level count updates. The alternate-seed Storybook state demonstrates this variation without relying on `Math.random`, time, network calls, or runtime AI generation.

### Required fidelity surfaces

- Typography and layout: the existing summary, stage labels, counts, progress markers, and below-art stage insight are unchanged in hierarchy and remain unclipped at both verified viewports.
- Spacing and composition: each silhouette fits its original maturity slot and ground line; the wider mature canopy stays inside its quarter without colliding with neighboring stages.
- Colors and depth: the source stage colors are preserved with richer tonal ramps, veins, edge highlights, and local shadowing. No spotlight, hover wash, or unrelated card treatment remains.
- Image fidelity: the browser render was compared directly with the original composite. Shapes are intentionally redrawn at higher fidelity rather than raster-traced or sliced.
- Interaction and accessibility: each non-empty stage is a real button with an accessible label, pressed state, keyboard focus, and persistent insight. The empty state disables interaction while retaining a subdued vector garden preview.
- Motion lifecycle: the seed-to-mature sequence plays once for the first non-empty data load, finishes in about 1.8 seconds, and resolves to the ordinary interactive base state without timers or animation-end state dependencies.
- Responsive behavior: desktop and mobile baselines pass for all five isolated stories and the four dashboard stories.
- Runtime quality: browser console inspection found no relevant warnings or errors; XML validation passes for all four SVGs; deterministic seed and lifecycle tests cover hydration-safe variation, one-shot introduction, reduced motion, local paint servers, and the absence of external asset fragments. Native iOS 26.5 Safari now renders the complete final garden at the phone viewport that previously failed.

### Comparison history

1. P1: the rejected implementation moved rectangular raster slices, creating disconnected, jittery motion. Fixed by replacing all four stage PNGs with semantic SVGs and real joint-level transforms.
2. P2: external SVG fragment reuse initially exposed unintended black fills on stroke-only paths because root-level `fill="none"` did not inherit into referenced fragments. Fixed by declaring `fill="none"` on each affected path, then rebuilding and rechecking all Storybook states.
3. P2: the first seed fragment had a dark wedge under external `<use>` rendering. Fixed by rebuilding it as a clean, dimensional ellipse-based seed with a separate highlight group.
4. P2: the first growth draft left faint future-stage stem slivers visible before their turn. Fixed by making all stem wrappers fully transparent at the start of their delayed rise; the first captured state now contains only the seed.
5. P2: the unrelated `Account/Login -> Error State` baselines contained stale fallback-font rasterization. Refreshed only those two deterministic desktop/mobile baselines and verified the focused story passes.
6. P0: authenticated iPhone Safari dropped almost every gradient- and filter-backed plant group because semantic parts were referenced across an external SVG document boundary. Fixed by compiling the complete SVG source into same-document stage components, preserving all 26 independent motion layers. Post-fix proof is the native iOS Safari capture and an explicit browser regression asserting zero external asset fragments plus local Familiar and Ready paint servers/parts.

No actionable P0, P1, or P2 visual issues remain in the desktop or mobile garden states.

final result: passed

---

## Landing page scroll-driven vocabulary garden

### Evidence

- Illustration reference: the authenticated garden capture at
  `tests/visual/artifacts/dashboard-vocabulary-garden/after-garden-desktop.png`.
- Landing implementation: the `Reduced Motion`, `Populated`,
  `Mobile Populated`, and `Scroll Driven` Storybook states.
- Deterministic desktop and mobile baselines under
  `tests/visual/storybook.visual.spec.ts-snapshots/public-home-landing-progress-showcase--*.png`.
- Browser behavior coverage at progress `0`, `0.56`, and `1`, followed by a
  reverse scroll to `0.56`.

### Full-view comparison

The landing card now renders the same four complete inline SVG illustrations
as the authenticated dashboard rather than the old raster sprite. The seed,
gold sprout, purple Familiar plant, and green fruiting plant preserve their
illustrated gradients, contours, local highlights, veins, and semantic parts
at both desktop and phone widths. The surrounding landing composition, copy,
counts, labels, rhythm visualization, and maturity timing ranges remain
unchanged.

### Scroll motion comparison

The landing's existing normalized scroll progress is now the sole animation
clock. Each stage maps its assigned range to the authored plant topology:
roots spread, stems rise, leaves unfold around their real junctions, and the
mature fruit settles last. Because every visible value is derived directly
from progress, scrolling backward reconstructs the same prior frame instead
of playing a time-based exit animation. Reduced-motion mode bypasses the
sequence and shows the complete garden immediately.

### Required fidelity surfaces

- Shared source: dashboard and landing use the same Safari-safe inline SVG
  renderers and deterministic stage factory; there are no sliced plant PNGs.
- Paint fidelity: every plant keeps its local SVG definitions in the rendered
  document, with zero external fragment references.
- Responsive composition: the four silhouettes remain legible and grounded
  inside the compact card at `1280 x 720` and `390 x 844`.
- Determinism: pinned Storybook states and scroll behavior tests verify exact
  progress values independently of timing, viewport scroll inertia, or random
  data.
- Reversibility: desktop and mobile behavior tests cover midpoint, completion,
  and reverse-scroll restoration.
- Accessibility: the landing illustration stays decorative beside real copy;
  reduced-motion users receive the complete static state.

No actionable P0, P1, or P2 visual issues remain in the landing garden states.

final result: passed

---

## Prior record: Premium core-loop design QA

## Evidence

- Source visual truth:
  `tests/visual/artifacts/premium-core-loop/reference.png`
- Browser-rendered implementation:
  `tests/visual/artifacts/premium-core-loop/after.jpg`
- Normalized source-to-implementation comparison:
  `tests/visual/artifacts/premium-core-loop/qa-comparison.jpg`
- Before/after review:
  `tests/visual/artifacts/premium-core-loop/before.png` and
  `tests/visual/artifacts/premium-core-loop/after.jpg`
- Storybook state:
  `Account/Premium -> Core Loop Decision`
- Browser viewport: `1440 x 1024` CSS pixels, device scale factor `1`.
- Source pixels: `1487 x 1058`.
- Implementation pixels: `1440 x 1024`.
- Normalization: both images were rendered with `object-fit: contain` into
  equal `684 x 930` comparison regions.

## Full-view comparison

The implementation preserves the selected concept's hierarchy: one core-loop
headline, four ordered learning stages, an independent-control trust strip,
and the Free/Premium decision immediately following the product explanation.
The first plan heading is visible at the bottom of the 1024px viewport.

The source uses four article mockups and interactive-looking toggles. The
production implementation intentionally uses compact real-word examples and
factual control summaries. This avoids presenting page-specific settings or a
mock interaction as controls on the billing route while retaining the same
product story.

## Focused region comparison

The loop and control regions are large and readable in the normalized
side-by-side artifact, so no additional crop was needed. Pricing was also
inspected independently in Storybook through
`Core/Pricing Plans -> Compact Decision With Referral`.

## Required fidelity surfaces

- Fonts and typography: existing Stickly display and body families are used;
  the headline, stage labels, supporting copy, and plan handoff have a clear
  optical hierarchy with no clipping or truncation.
- Spacing and layout rhythm: the initial implementation placed pricing fully
  below the 1024px viewport. Header, stage, and control spacing were tightened;
  the final capture preserves whitespace while revealing the plan handoff.
- Colors and tokens: the implementation uses semantic page, surface, brand,
  accent, success, border, ink, and muted tokens. Elevation uses crisp Long
  Shadows only; no blurred shadow or gradient was introduced.
- Image and icon fidelity: this surface needs no raster illustration. Shared
  `app-icon`/Lucide icons are used for interface symbols; no custom SVG, emoji,
  placeholder art, or CSS illustration was added.
- Copy and content: the learning stages now share the concrete `linger`
  example. Pricing remains truthful at 10 translations per week after the
  first-review activation grace, $49/year or $4.99/month, and no weekly
  Premium translation limit.

## Comparison history

1. P1: the buying decision was entirely below the first desktop viewport.
   Fixed by reducing hero and control-strip vertical spacing. Post-fix evidence
   shows the plan section beginning inside the 1024px capture.
2. P2: the four learning stages read as abstract marketing cards.
   Fixed by carrying one word through selected, translated, due, and remembered
   states. Post-fix evidence is in `after.jpg` and `qa-comparison.jpg`.

## Residual checks

- The full visual suite was attempted. It stopped at an unrelated pre-existing
  `Account/Login -> Error State` baseline mismatch before reaching Premium.
  That baseline was not accepted or modified.
- Storybook production build, webapp typecheck, and the focused Premium tests
  pass.

No actionable P0, P1, or P2 visual issues remain for the selected desktop
state. Mobile behavior is covered by the responsive grid and existing mobile
Premium stories, but a new mobile baseline was not accepted in this change.

final result: passed
