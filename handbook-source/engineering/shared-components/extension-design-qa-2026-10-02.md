# Translation learning layers, QA record, 2026-09-21

## Other meanings inside existing context, latest revision

The standalone row is removed. Other meanings now lives inside the existing
stars-button More context panel. Comparison evidence is recorded in
`tests/visual/artifacts/meanings-in-context/README.md`.

## Earlier standalone Other meanings checkpoint (superseded)

Local component QA passed for the new Other meanings disclosure. It uses the
canonical backend date fixture and does not change the saved translation or
review accepted answers. Evidence and viewport details are in
`tests/visual/artifacts/word-meanings-v1/README.md`, with an explicit matching
`before-unavailable.png` / `after-expanded.png` comparison pair.

Keyboard close/reopen, mutual exclusion with See it in use and legacy context,
missing/pending fallback, desktop, narrow and short-window states were checked
in the real Lit playground. No application console errors appeared, only Lit's
expected development warning. Native Safari and live paid-provider quality were
not exercised. This does not certify a production release or accept baselines.

## Earlier See it in use checkpoint

The historical focused crop below remains unsuitable for pixel-fidelity
certification. It is not used as evidence for the new Other meanings UI.

## Source and implementation

- Source visual truth: `docs/design/translation-bubble-reference.png` (1402 × 1122).
- Implementation: `http://localhost:9000/?scenario=translation-learning-expanded&placement=center`.
- Desktop screenshot: `tests/visual/artifacts/one-useful-layer/after-expanded.png`; intended CSS viewport 1280 × 720, device scale factor 2.
- Full-view and focused comparison: `tests/visual/artifacts/one-useful-layer/comparison.html` and `comparison.png`.
- **The current focused implementation crop has incorrect density normalization. It is not valid visual-fidelity certification. Recapture using verified current viewport geometry before handoff.**
- `before-legacy-fallback.png` is the same word with no pack in the current code, not a historical commit baseline.

## Comparison history and checks

- Initial implementation had insufficient expanded typography hierarchy. Expanded translation is now 18px and learning copy 16px; collapsed translation size remains unchanged.
- Source-focus text now uses the lighter existing purple token, matching the selected direction more closely.
- Independent review identified hidden-open interaction locks after data invalidation and overflow on short windows. The lifecycle now closes invalidated/replaced packs and removal states; content is a focusable bounded scroll region.
- 35 learning-pack tests passed. An independent 12-test harness executes the actual lifecycle method and passed; it is not a DOM integration test.
- Typecheck, playground build, localization metadata policy, and diff whitespace checks passed before the final focus-color edit. Recheck final source at handoff.
- Live keyboard Escape/Enter toggled the learning layer; opening legacy context closed it. Missing/pending fixtures offered no empty disclosure.
- At 900 × 400, End scrolled the content to 323/323px while its bottom remained at 319px. At 390 × 844, the component stayed within horizontal bounds (47–373px).
- Browser logs include earlier transient compilation errors during concurrent editing and Lit's development warning. A clean final-session console check remains pending.

## Fidelity surfaces and remaining gates

- Typography: existing Stickly font and improved hierarchy; final normalized comparison pending.
- Spacing/layout: existing adaptive placement and shell retained; no page/sidebar redesign. Narrow component verified, surrounding playground controls have pre-existing horizontal overflow.
- Colors/tokens: existing purple/amber palette; final light-purple focus needs post-change comparison.
- Assets: existing audio/menu/caret assets retained; no rasterized product UI or custom replacement imagery.
- Copy: German explanation intentionally describes the English expression. No nonfunctional Report action. Nine locale fallbacks and German native review remain release gates.
- User has now requested explicit other word meanings and a storage diagram. The sense-index design is under discussion; no new dictionary or grading schema has been implemented for that addition.

Do not claim this iteration is production-ready or update visual baselines automatically. Preserve previous dirty work and complete the source comparison and broader integration gates before release handoff.
