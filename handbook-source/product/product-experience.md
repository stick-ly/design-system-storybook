# Stickly Product Experience Reference

> **Reference status, 2 October 2026:** preserved full product reference from the coordination workspace. Its explicit selection action and per-word highlight modes are the concrete policy authority where older guide proposals conflict. Context Recall remains proposed and experimental; source/catalog presence is not production evidence. Research figures retain their original observation windows. Repository-relative implementation paths below refer to the named consumer repositories. This migration does not certify every described runtime or deployment.

This document describes the current user experience across the browser extension and webapp. It is intended to help product, design, analytics, and engineering agents reason about the same product behavior.

## Core Browsing Loop

1. The user encounters an unfamiliar word while browsing.
2. Selecting the text may show Stickly's translate action in action mode.
3. The translated word is stored in the user's shared Firebase vocabulary.
4. When that word appears on later pages, Stickly highlights it.
5. Hovering the highlight opens either a compact translation or an inline quiz, depending on the word's spaced-repetition state.

Normal remembered-word highlights are purple. A word due for review is orange. A successfully completed inline review changes matching highlights to green.

## Translation Bubble

The compact bubble contains pronunciation audio, the translated value, and an expandable menu. The current menu includes:

- Explain this
- Remove word
- Stop highlighting words
- Disable word practice
- Disable Stickly in this tab
- Disable Stickly on this website
- Edit Stickly settings
- Help center

The controls are important product behavior, not incidental settings. Survey feedback identifies unwanted page changes as the most common uninstall reason, while Amplitude data suggests users who discover per-site disabling can remain engaged.

Implementation references:

- `extension/src/components/translator.ts`
- `extension/src/components/translatorMenu.ts`
- `extension/src/components/translationContent.ts`
- `extension/src/components/TTS.ts`
- `extension/src/managers/highlightManager.ts`

## Inline Spaced-Repetition Quiz

When a word is due, the bubble becomes an inline typing challenge:

- The user types the translation directly while remaining on the page.
- Green characters are correct and in the correct position.
- Yellow characters are present but in the wrong position.
- Muted red/purple characters are not in the solution.
- The quiz allows three attempts.
- Hints reveal characters progressively, based on attempt similarity and word length.
- A correct answer updates the SRS state, turns matching highlights green, emits confetti, removes the quiz, and shows the translation.
- A failed or revealed answer updates the SRS state as a failure.

The intended emotional balance is useful challenge without forcing the user out of their reading flow. Current completion feedback is brief: confetti and a green highlight, with no durable explanation of progress or next review.

Implementation references:

- `extension/src/controllers/quizController.ts`
- `extension/src/components/inlineQuiz.ts`
- `extension/src/components/celebration.ts`
- `extension/src/scripts/srs.ts`

Tracked Amplitude events include:

- `View inline quiz`
- `Inline quiz wrong attempt`
- `Inline quiz completed`, with `Result` values such as `success`, `failure`, and `revealed`

## Webapp Word Hub

The Word Hub is the vocabulary learning and management center. It is organized around communicative ability rather than points or leaderboard framing.

### Motivation principles

- Show growing ability to understand, hear, and use words in context.
- Prefer intrinsic motivation over extrinsic rewards. Avoid points, streak pressure, badges, and shallow gamification.
- Use playful reflection visuals as orientation aids, not precision analytics.
- Treat listening as core learning. Learners should be able to hear their words in the hub.
- Treat AI-generated learning images as optional creative aids, not required decoration.
- Default to the configured learn language, while still exposing other collected language pairs.

### Current experience

The hub currently shows:

- a language focus scoped to the learner's main language, main pair, other pairs, or all words;
- words ready to hear again, with pronunciation playback;
- context-rich words and words that still need sentence context;
- playful SVG reflection visuals for vocabulary maturity, context coverage, language spread, and recent rhythm;
- a collection area for search, edit, delete, selection, and pagination;
- Anki export with language scope, visible-list, selected-word, and pair-aware options.

Implementation references:

- `webapp/src/app/modules/word-list/wordlist/wordlist.component.html`
- `webapp/src/app/modules/word-list/wordlist/wordlist.component.ts`
- `webapp/src/app/modules/word-list/word-hub/`
- `webapp/src/app/services/words.service.ts`
- `webapp/src/app/services/tts.service.ts`
- `webapp/src/app/services/flashcard.service.ts`

## Product Evidence

The uninstall survey has 140 responses from April 6, 2024 through May 24, 2026.

Major reasons:

- website changes were annoying: 24;
- users rarely used another language: 23;
- translations were not good enough: 19;
- users did not understand how Stickly works: 14;
- users did not like the learning games: 14;
- users did not understand Stickly's purpose: 8.

Amplitude retention analysis used the production project and data available from July 1, 2025 through May 1, 2026. Rolling Week-4 retention after selected behaviors was:

| Behavior | Users | Week 1 | Week 4 |
| --- | ---: | ---: | ---: |
| Complete inline quiz | 153 | 68.0% | 51.0% |
| Disable Stickly on a website | 26 | 61.5% | 46.2% |
| Judge a flashcard | 32 | 53.1% | 37.5% |
| Play pronunciation audio | 240 | 53.8% | 36.7% |
| Request term explanation | 193 | 51.8% | 35.8% |
| View word list | 97 | 46.4% | 35.1% |
| Translate a word | 743 | 46.2% | 28.8% |
| Encounter translation error | 239 | 43.5% | 25.1% |
| Solve tile-game word | 196 | 17.9% | 10.7% |

These are behavioral correlations, not causal experiment results. Cohorts that reach deeper features are inherently more motivated.

## Analytics Caveat

The extension installation event is not reliably stitched to later feature events. A seven-day funnel found only 16 translations among 727 installers, even though the translation-retention cohort contained 743 users. `Store smart translation result` also returned zero users despite vocabulary storage clearly existing.

Before using install-to-feature conversion as a decision metric:

1. establish a durable anonymous installation identifier;
2. preserve it through sign-in and account creation;
3. emit first-success events from the same identity;
4. validate vocabulary-save instrumentation against Firebase writes;
5. document event ownership and expected properties.

## Product Direction

The strongest evidence supports a quiet, reliable translator that turns encountered words into contextual, audio-supported micro-reviews. It does not currently support further investment in the standalone tile game without a redesign and an experiment.

## Proposed Unobtrusiveness Policy

Survey feedback currently combines at least two different sources of interruption:

1. the selection affordance appearing when a user highlights text for copying, editing, or another non-translation purpose;
2. remembered words being automatically decorated throughout a page, sometimes at high density.

These are separate product systems. They must be measured, controlled, and configured independently.

### Proposed Context Recall experiment

Context Recall is a proposed third product system. It is not current
production behaviour and must not be described publicly as shipped until its
candidate extension version passes correctness, friction, and mature D7
survival gates.

The saved-word-only experiment may replace one exact native-language word on
an eligible reading page with the learned-language word the learner previously
translated and saved. Opening the visibly marked replacement asks what the
page originally said. Only an explicit review result may update the canonical
stored word; passive exposure does not.

Context Recall is:

- off by default and initially enabled for one page/session;
- limited to canonical saved words that are due, recently failed, or recently
  learned;
- strict about language direction, accepted sense, single-word matching,
  reader-like content, and interactive/editable exclusions;
- capped at one replacement per viewport, paragraph, and page, and three shown
  replacements per rolling 24 hours during beta;
- fully reversible through show-original, restore-page, word, feature, tab,
  and site controls;
- analysed without vocabulary, page text, URLs, hostnames, browsing history,
  or inferred sensitive interests.

Selection translation, remembered-word highlighting, inline practice, and
Context Recall remain independently controllable. Turning one off must not
disable the others.

The first beta does not introduce unsaved vocabulary, infer a CEFR level, build
an interest profile, replace phrases, or run on sensitive/application
surfaces. See
[`context-recall-experiment.md`](https://github.com/stick-ly/stickly-workspace/blob/main/docs/experiments/context-recall-experiment.md) for the complete
eligibility, interaction, analytics, and rollout contract.

### Rule Summary

- Translation behavior is chosen explicitly in settings: show a small action after selection, or translate only through shortcut/context menu.
- The default is **Show translate action** because a deliberate click keeps selection-based translation predictable.
- Legacy persisted `immediate` is migration-only and normalizes to `action` for compatibility; it is never presented as an available behavior.
- Highlight behavior is chosen explicitly in settings: all saved words, due reviews only, or off.
- The default is **All saved words**: highlight up to the first fifteen eligible occurrences of every saved learned-language word on the page.
- Selection translation and remembered-word highlighting can be enabled, disabled, and measured independently.

### When the Selection Action Appears

In the default **Show translate action** mode, the selection action appears whenever:

- the selection is between 2 and 500 meaningful characters;
- pointer or keyboard selection has completed;
- the selected text is readable page content, not an input, textarea, contenteditable region, editor, code block, or interactive control;
- Stickly selection translation is enabled for the current tab and website.

Do not silently suppress an otherwise eligible selection because of language confidence, page language, later copying, scrolling, or an inferred reason for selecting. Those heuristics are not predictable to users. Escape, selection collapse, pointer-down elsewhere, and navigation dismiss visible UI but do not redefine whether the original selection was eligible.

Users who do not want selection UI can choose **Shortcut/context menu only**. The shortcut and context-menu command must work in every selection mode, including mixed-language pages and short ambiguous selections. The popup remains available for typed or pasted text.

### When Words Highlight

In the default **All saved words** mode, highlighting follows one deterministic rule:

- highlight up to the first fifteen eligible occurrences of every saved learned-language word in document reading order;
- highlight only the learned-language side of a stored word, not both the learned term and native-language translation;
- use purple for a normal saved word and orange when that same word is due for review;
- retain the existing due/new/proficiency/recency ranking and mastered-word exclusion, but do not remove eligible words merely because the page reached a global cap;
- avoid navigation, buttons, forms, editors, code, menus, and other interaction-dense application chrome;
- require a short intentional hover or click before opening a translation or quiz;
- respect page, tab, global highlight, and practice controls immediately.

If density still causes complaints, test a clearly labelled user setting such as a numeric per-page limit. Any enabled limit must display its value in settings rather than silently stopping after a fixed number of words.

### User Modes

Expose independent choices rather than one broad enable switch:

- **Show translate action (default):** selecting eligible readable text shows the small action; clicking it starts translation.
- **Shortcut/context menu only:** selection alone creates no Stickly UI.
- **All saved words (default):** highlight up to the first fifteen eligible occurrences of each saved learned-language word.
- **Due reviews only:** highlight up to the first fifteen eligible occurrences only when the word is due.
- **Off:** do not add remembered-word highlights.

Inline practice remains a separate setting. Turning off highlights must not turn off selection translation, and turning off selection translation must not turn off highlights, shortcut translation, or the context-menu command.

### Measurement

Instrument the two interruption classes separately:

- translation mode, eligible selection, action shown, translation started, dismissed, and manual shortcut/context-menu use;
- highlight mode, eligible saved words found, occurrences displayed per word, excluded-surface count, hover/open, quiz shown, and highlight disablement;
- per-control changes for selection translation, highlights, practice, tab disablement, and website disablement;
- immediate continuation signals such as copying, typing, scrolling, translation, and page exit.

Do not capture selected text, surrounding page text, or full URLs in analytics. Report counts, timing, language codes, surface categories, and suppression reasons.

See `../archive/research/engagement-roadmap.html` for the historical executable plan.
