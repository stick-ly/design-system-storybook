# Shared web components execution checkpoint

2026-10-01. Migration remains incomplete. The user authorized preparing Pull Requests, including the source commits/pushes needed for drafts. The temporary public preview is authorized. Package release, merge and deployment remain pending separate authorization.

## Scope and ownership

All extension Lit renderers and eight Angular extension-preview clones now use native HTMLElement presentation from the independent design system. Webapp controls, including Long Shadow, are the visual authority. Services, persistence, localization, routing and grading remain in the consumers. No executable Lit fixture, runtime dependency or legacy compiler/editor plugin remains; original source is preserved as inert .ts.txt evidence.

Private canonical repository: https://github.com/stick-ly/design-system . It is empty remotely. The local packages/design-system checkout has its own Git boundary and origin. Producer commands work without parent or sibling repositories. Producer CI/release configuration lives in its own .github/workflows/ci.yml.

Public Storybook: https://southwest-resume-bone-theorem.trycloudflare.com/ . Package Storybook listens on6007, session11645; cloudflared session21381. Angular Storybook6006 is owned by webapp_inventory. Keep the authorized preview alive. Browser verification is serial under current storage pressure.

## Runtime and distribution

Current canonical package: @stick-ly/design-system0.1.0. Both consumers install the corrected bootstrap SHA256981945e66391032f96d10d116c7674259dbb92aeab773865b6fd326a7a873f9d, source fingerprint5131c040d44113b27c0130a950b85a10a16c233fb431d12e9ed3263636f6617d. Prior archive2b0de5eb is preserved under artifacts/retirement/pre-drawer-fix-2b0de5eb.tgz; its earlier source/build evidence is not proof of the final correction. Default import is server safe; DOM registration is confined to the browser entry. Runtime and peer dependency sets are empty.

Central delivery supersedes permanent vendoring. Publish immutable versions to private GitHub Packages after passing producer CI. Consumers use exact versions and frozen-lock integrity, with focused Dependabot update PRs for newer passing releases. Give both consumer repositories package Read grants; their Actions can use GITHUB_TOKEN. External local/Docker/Firebase installs need a supported classic read:packages credential supplied securely. App Hosting uses a BUILD-only PNPM_CONFIG__AUTH structured JSON secret reference. pnpm11.17 ignores project credential environment placeholders, so Actions/local/Docker use trusted user-level configuration; no claim of current registry authentication readiness is implied. No credential value belongs in source, logs or chat.

Reviewable consumer activation proposals are under docs/migration/webapp-registry and extension-registry. They are not applied: no real registry release or authenticated lockfile exists yet. Do not fabricate lock integrity. Preserve functioning bootstrap transport until publication/access are verified. A coordination-workspace Docker install-auth proposal is being prepared separately. Source publication requires explicit user authorization under AGENTS.md.

## Completed evidence

- Authentic original/current source run52632:574/574 passed, no skips, flaky cases or runner errors. Authentic Angular run4827:138/138 passed. Original capture archive105e07e4f49ec971d7ea1c62c54391ba24c74b0b9bd2c4fc676b91cf1c493ede remains frozen.
- Certified562 visual comparisons exported with source/report/image hashes:438 source and124 Angular. Galleryartifacts/review/index.html links every actual before/after/diff triple. Reusable original images are in stories/assets/historical; all116 archived original source/provenance bytes match their certified hashes. Exporter13 guards passed.
- Shared canonical typecheck and live Node checks111/111 passed. Independent sibling-free frozen install, typecheck and fixture tests96passed/15explicit live-source exclusions passed. Independent Storybook production build35192 passed. Native-only source policy14 meaningful guards and mandatory package scan passed; six Lit packages removed from lock and installed graph.
- Canonical archive byte comparison proves all152 emitted JavaScript/CSS/type files identical to authentic pre-retirement archive. Only README, package identity and source-manifest name changed. Proofartifacts/retirement/runtime-byte-identity.json.
- Genuine Angular AOT SSR recapture90326 passed on current canonical archive. Angular source fingerprint529359307aedfe2c9973ae6c65c1ef1f70357520cc347262c4cb498aa3311106. Final affected unit rerun156/156 passed in42 files, with no unhandled errors. The earlier155/156 run had one stale footer assertion, corrected to verify current native link behavior.
- Webapp production66413 passed:18 prerendered routes, nine locales, SSR server syntax check passed. Evidencewebapp/tests/visual/artifacts/shared-canonical-final. Existing NG8113 unused import warning remains.
- Chrome production66917 passed, version1.2.0,348 ZIP entries, SHA2568f725c4ecd708f50dbfd20477f1e8306bfd130e2b0be58c2d98f6b56a2cc8f0f. Safari web compile/export48712 passed,346 files, digest14acb6b03581c4c11f26e13b74cda2be326fc65c0f74af43caf6da07dac1bd32. All exported checksums verified. Eight entry bundles contain no Lit markers;37-module worker graph has no UI/browser entry imports. Source/manifest/package/lock/vendor identities did not change. Evidenceartifacts/consumer-builds/extension. Pure Safari contracts28/28 and export checks3/3 also passed.

## Current verification and limits

Current-only run86050 stopped at275passed/3failed/262unrun, so it is not a full pass. The failures are two outline pixels in audio focus states. A narrowly guarded geometric-equivalence mechanism was reviewed for six audio focus references: exact authentic original colors at only coordinates11,19 and13,19, all other same-project pixels exact, matching source/browser/font/viewport/paint geometry. Mobile color admission is geometrically derived from an unchanged unscaled corner, not an empirical mobile-original observation. Four auxiliary original captures retain explicit provenance limits. Primary562 manifest and ten original controls per historical raster state remain unchanged. Preserve raw differences; no global screenshot tolerance or invented baseline. A fresh complete540 current-only run and genuine hydration6 remain required.

Official Linux webapp visual:affected --base HEAD run60411 is in progress:687 stories across desktop/mobile,1374 screenshot states, unchanged standard exclusions. No snapshot updates permitted. It found236 missing baselines for118 new migration/hydration stories. Both existing NearViewportBottom combobox comparisons fail because the story's obsolete .relative.isolate selector never opens the migrated dropdown. Production renderer bytes are unchanged. A test-only semantic click/assertion fix is staged until the current run is terminal. Preserve all actuals, existing expected/actual/diff triples and all eight fresh reports. Seek explicit baseline approval after the complete review gallery is available, then perform the official final run.

Remote producer/consumer Actions, actual registry install/integrity, package Read grants, real Dependabot update and App Hosting credential/build readiness remain unverified. Loaded extension runtime, Safari native host and physical phone behavior are also not proven by compilation. Backend and Apple repositories are clean and untouched. Keep unrelated dirty work and protected outputs.

## Handoff and storage

Final handoff must include real image evidence, repositories/contracts changed, checks performed and omitted, compatibility concerns and untouched dirty files. No automatic new-baseline acceptance. Goal remains active until the required work is completed or a repeated external blocker is explicitly recorded.

Latest storage readings fluctuate around10–11GiB free. Pressure was reported; approved narrow retention already ran without meaningful recovery. Reuse one browser, configured build outputs and installed toolchains. Do not delete protected outputs, sources or worktrees, prune Docker images/volumes, or launch additional heavy browser instances.

## Drawer correction and verification order

Full official run60411 is terminal: all1374 screenshot states and12 behavioral checks ran,1134 existing images passed,236 new baseline actuals and4 existing mismatch triples were preserved. Gallerywebapp/tests/visual/artifacts/shared-official-final/attempt-1/review.html. Existing mismatches: combobox NearViewportBottom in both profiles (obsolete story selector), anonymous navbar menu on mobile (story readiness), anonymous account drawer on mobile (real standalone menu-item styling regression). The two story files were corrected to semantic interactions with open-state assertions.

Root restored canonical .stickly-dropdown-item styles outside dropdown hosts, using the same existing style function and retaining scoped rules. New archive981945e6 installed in both consumers. Actual tar comparison allows only overlay-styles.js, styles/overlay.css and source-manifest.json changes; all153 other package files remain byte-identical to2b. Proofartifacts/retirement/drawer-fix-byte-delta.json. No assertion of all152 runtime/type/CSS files being unchanged after this correction.

Current-only28199 was deliberately cancelled after59 passing cases before the shared correction. Exit130; owned browser closed. No current report was flushed; stale86050 was explicitly rejected. Diagnosticsartifacts/current-only-attempt-28199. Final source fixtures/SSR, audio-equivalence identity (unchanged audio graph), current540/hydration6 and consumer builds must be recertified on981945e6. First narrowly prove the corrected three stories against existing desktop/mobile baselines, then run full package/browser and final official coverage after new-baseline approval. No missing or failed baseline has been accepted.

## User correction: retire migration stories from the normal catalog

The user reviewed shared-dialog and correctly identified its bare native input/button as test fixtures, not finished design-system controls. Root independently inspected the screenshot and template. Root also audited all118 missing story IDs: every one is migration-specific,116 parity/target stories and2 actual-server-DOM hydration fixtures. None is an ordinary product story. These do not require new production baselines. Earlier proposed236-baseline approval is superseded.

Twenty exact source CSF files are being isolated behind explicit verification catalog mode. Normal webapp Storybook must remove exactly those118 IDs, retain581 total ordinary IDs (569 standard screenshot IDs after unchanged12 exclusions), and run final official coverage without adding snapshots. Required original-input and actual hydration fixtures remain privately testable; their historical markup/evidence stays unchanged. The design-system public catalog also needs native component names/examples, with historical comparisons in verification mode and preserved review artifacts. Source fingerprinting and planner catalogs must distinguish normal/verification mode.

## PR preparation authorized

The user requested Prepare Pull Requests. Prepare independent draft PRs for the producer, webapp and extension, plus a coordination documentation PR without incidental child gitlinks. The empty private producer needs an empty main base commit before its source feature branch can be reviewed. This initializes repository history, not a package release. Commits preserve source/archive bytes while tests run; no autofix, version bump or source generation from hooks.

Final native run96483 executed all540:536 passed,4 mobile native-select unicode screenshots failed strict comparison by12 pixels each; all102 behavior contracts and6 bounded audio focus checks passed. The complete report is retained. Genuine hydration84819 failed its four identity checks because the spec still hardcoded the obsolete stickly-design-system archive filename. Root verified actual canonical stick-ly archives in both consumers still match981 and metadata; no vendor drift occurred. The harness is being corrected to resolve canonical metadata before rerunning. Do not claim these gates complete yet.

Focused Linux consumer gate90767 passed8/8 against existing snapshot thresholds, not strict zero pixels. Recomputed saved-image differences meet the existing0.2 color/0.01 ratio comparator; retain raw counts and do not call them exact. Final981 Chrome/Safari and webapp production builds pass. Normal catalog excludes all118 migration IDs; no baseline additions or updates. Draft descriptions must disclose pending native strict screenshot, hydration and final official1138 results, and registry activation remains staged.
