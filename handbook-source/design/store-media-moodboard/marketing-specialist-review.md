# Direction A marketing review

Review date: 2026-08-31

## Verdict

Direction A is the strongest foundation. The warm paper field separates the
store artwork from Stickly's violet product surfaces, while the connected dark
trail gives the set a recognizable campaign device. The visual system feels
ownable without fighting the app UI.

The first draft had a strong concept but mixed product truth with development
evidence. Several Apple panels exposed localhost URLs, test labels, legacy
branding, and weak fixture data. That would materially reduce trust in an App
Store listing.

## Highest-impact recommendations

1. Lead with the outcome in every headline and keep the supporting line to one
   concrete proof point. At thumbnail size, the headline and one visible action
   must communicate the panel without relying on fine UI text.
2. Tell a platform-specific story rather than reusing one generic order:
   Chrome moves from translate to highlights, inline review, game, then Anki.
   iOS moves from system-wide translation to Safari learning and native review.
   macOS moves from the menu bar to Safari learning before the review modes.
3. Use one coherent language-learning moment across the translator and Safari
   panels. `Sehnsucht -> longing` is distinctive, emotionally resonant, and
   demonstrates why context matters.
4. Remove all development artifacts and legacy `Stick.ly` branding from store
   media. Store images should show a credible production domain and current
   product vocabulary.
5. Make the macOS menu-bar promise literal: show the system menu bar, the status
   item location, and an anchored popover rather than a generic app window.
6. Keep highlights and inline review visually distinct. The highlight panel
   should show passive resurfacing; the next panel should introduce the active
   spaced-repetition prompt.
7. Increase amber's role as the action/progress signal without putting amber
   body text on the warm paper. A crisp underline, hard shadow, and due-state
   highlight preserve contrast and connect the campaign.
8. Reject fixture screenshots whose visible data contradicts the interaction.
   In particular, the first iOS tile capture paired `hola` with a full-sentence
   translation. A truthful success-state capture is more persuasive.

## Implemented response

- Rewrote all platform copy around specific customer outcomes.
- Reordered the macOS panels to menu bar, Safari translate, Safari review,
  Safari highlights, tile game, and character review.
- Replaced localhost/test Safari captures with reusable production-like scenes
  built from the current extension preview components.
- Added a current native translation composition and a literal anchored macOS
  menu-bar popover.
- Standardized the Apple translation story on `Sehnsucht -> longing`.
- Added crisp amber headline markers and retained the connected panorama trail.
- Separated the Chrome highlight state from the inline-review state.
- Replaced the contradictory iOS tile fixture with a real successful-game
  capture and aligned the copy to the visible streak/result.
- Updated export contracts, split filenames, upload manifests, and stale-output
  cleanup so CI receives the same order shown in Storybook.

## Later polish opportunities

- Capture a release-build iOS character-review screen with a more familiar word
  than the current long fixture, while keeping the actual native UI.
- Replace the macOS game fixtures with release-build captures using the same
  `Sehnsucht` journey if deterministic marketing fixtures are added to the app.
- Run copy experiments on the first two images per storefront; those receive
  the most impressions and should carry the clearest acquisition promise.
