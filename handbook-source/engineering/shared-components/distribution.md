# Central private design-system distribution

User steering on 2026-10-01 supersedes the permanent vendored-archive proposal.

## Ownership

- Private canonical repository: https://github.com/stick-ly/design-system . Created and verified private; currently empty remotely.
- Existing local package directory now has its own Git boundary and origin. Its location may remain packages/design-system inside the coordinating checkout, just as other nested repositories retain independent ownership.
- Move the design-system workflow into that repository. Its install, build, typecheck, native-only Storybook and fixture contracts must work from a standalone clone.
- Keep source publication separate from creating the empty repository. No source commit, push, tag, package release or deployment has happened.

## Package identity

GitHub npm scope must match the organization. Publish and consume @stick-ly/design-system directly from the private design-system repository:

```json
{"dependencies":{"@stick-ly/design-system":"0.1.0"}}
```

Use the same canonical namespace in source imports and CSS exports. This avoids alias-specific updater behavior. Original comparison evidence retains the package/source identity actually captured before this distribution rename. Registry publication needs package.json repository metadata, publishConfig.registry=https://npm.pkg.github.com and removal of private:true. The package's first visibility defaults private; verify it after publication rather than assuming repository visibility proves package visibility.

## Latest successful release

Publish versioned packages only after producer type, build, native runtime, original-input integrity and Storybook gates pass. Consumers pin a specific release with pnpm lockfile integrity. Dependabot opens focused update PRs for the newest published release; each consumer runs its own compilation and contracts before an update is merged. No mutable latest lookup during a production build and no implicit merge/deployment authority.

The consumer verifier checks the exact version pin, installed upstream name/version, source-manifest identity, framework-free dependencies and server-safe import. It must not require a separately hand-edited per-release source-fingerprint manifest, which ordinary Dependabot updates would leave stale.

## Authentication

- Producer publishing workflow: repository GITHUB_TOKEN with packages:write, only in the release job. Standard check jobs remain read-only.
- Consumer GitHub Actions: each repository must have Read under the package's Manage Actions access. Workflows require packages:read and scoped .npmrc authentication via NODE_AUTH_TOKEN=${{ github.token }}.
- Firebase App Hosting: BUILD-only PNPM_CONFIG__AUTH from Secret Manager secret stickly-design-system-registry-auth. With pnpm11.17, use the supported structured JSON auth value binding the reader credential to https://npm.pkg.github.com and @stick-ly, available before dependency installation. Preserve existing framework adapter and run configuration; do not introduce a custom buildCommand just to install the package.
- App Hosting/local npm/external npm registry reads require a supported classic personal access token with read:packages. Current gh OAuth credential lacks read:packages and is not the documented external npm authentication method. Never request the value in chat, print it, or write it into source.
- pnpm11.17 does not expand credential placeholders in a repository-controlled .npmrc. Actions setup-node supplies a trusted user config. Local npm/pnpm reads need trusted user config; the staged Docker entrypoint creates an install-only trusted placeholder config and removes it before build/runtime. App Hosting uses the structured trusted environment setting described above. Project .npmrc routes the scope and contains no credential value.
- The same package Manage Actions Read grants allow Dependabot to pull GitHub-hosted packages automatically without a separate PAT or registry secret. Configure only focused version updates for this package. Verify the first actual update run before claiming it works.

## Activation order

1. Complete original574 and Angular138 gates and export certified original inputs.
2. Retire every executable Lit fixture, library dependency and legacy tooling; run the native-only gates.
3. Prepare the standalone source repository, producer CI/release workflow and consumer registry/install configs. Preserve the functioning local archive only as a temporary development bootstrap while the first registry release is unavailable.
4. Complete reviewable source/build evidence before any required publication permission. Existing AGENTS.md requires explicit commit/push/publish authorization; creating the requested private repository did not publish source.
5. Publish the first private version through the approved producer release, confirm immutable version/integrity and private visibility, grant both consumer repositories package read access, and provision the external read token securely.
6. Replace temporary file dependencies with exact registry versions and regenerate frozen locks using the actual registry response. Do not fabricate registry lockfile integrity before a package exists.
7. Verify fresh standalone webapp and Chrome/Safari installs/builds, actual GitHub Actions and App Hosting credential readiness. Report local and remote results separately.

## Primary references

- https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
- https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility
- https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries
- https://firebase.google.com/docs/app-hosting/configure#store-and-access-secret-parameters

- pnpm11 authentication settings: https://pnpm.io/11.x/npmrc
