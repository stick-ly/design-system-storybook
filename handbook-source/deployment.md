# Storybook hosting

The product and design handbook is published as a public GitHub Pages site in the
site-only `stick-ly/design-system-storybook` repository. The user requested public
hosting on 2 October 2026 after the private Pages plan requirement was verified.
The canonical design-system source and private npm package remain in
`stick-ly/design-system`.

Open [the hosted handbook](https://stick-ly.github.io/design-system-storybook/?path=/story/handbook-start-here--overview).

Private Pages requires GitHub Enterprise Cloud. GitHub Free supports Pages from
public repositories, so the deployment repository contains the generated website.
See [GitHub's Pages availability](https://docs.github.com/en/pages/getting-started-with-github-pages)
and [access-control requirements](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).

## Preview and verify

1. Run `pnpm run storybook` and open [Handbook / Start here](http://127.0.0.1:6007/?path=/story/handbook-start-here--overview).
2. Run `pnpm run docs:check` and `pnpm run test:handbook` for canonical coverage, links, responsive rendering and screenshots.
3. Run the existing package and browser contract checks when changing Storybook infrastructure.
4. Run `pnpm run build-storybook`. Fonts, fixture assets, authored design images and downloadable Markdown are bundled; relative asset URLs work under a project-path prefix.
5. Verify the built site under a project prefix before publication. Do not infer deployed success from a local build.

## Publish an authorized update

Run `pnpm run deploy-storybook` only when publication is authorized. It uses the
operator's existing authenticated GitHub CLI session, checks the destination is
the exact public export repository, commits the verified static build to its
`gh-pages` branch, and configures Pages to serve that branch. It never changes
source-repository visibility and stores no registry or GitHub credentials.

The publisher reuses one ignored checkout under `artifacts/pages-publish` and
replaces only that task-owned site's export. The public export includes
`site-build.json`, recording source commit, source dirty status, and story-index
SHA-256. Preserve and publish the canonical source commit before publishing the
site. The Pages API reports the actual deployed URL. Confirm the Pages build is
successful and inspect the hosted handbook, fonts, assets, navigation, and source
links in an anonymous browser before reporting completion.

## Keeping the document live

Canonical Markdown under `docs/` is imported directly by stories. Component
examples import current native source. Edit a decision, its status/evidence, and
its example together. The **Living Storybook** Actions workflow checks references
and creates a seven-day static preview artifact on source changes and pull
requests. Reviewed public publication uses the authenticated publisher command;
no broad personal token is copied into repository secrets for cross-repository
automation.

The website includes downloadable canonical source at `handbook-source/`.
Source-edit links point to the private source repository and require contributor
access. Runtime application state, services and release proof remain in their
respective repositories.
