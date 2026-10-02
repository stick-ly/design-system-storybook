# Apple Apps Improvements

> **Improvement brief:** preserved requested Apple changes and original working notes. Items here are requirements or proposals; inclusion does not establish completion. Use the current [Apple redesign](PRODUCT_REDESIGN.md) and consumer evidence to resolve conflicts.

We need to improve some parts of the apple applications (iOS & macOS). Use a high-intelligence agent as the orchestrator, planner and reviewer, setting a high quality standard. Use cheaper models for the implementation. Paralellize work where possible. Do a good balance for testing, screenshot tests vs unit tests. We need to make sure the changes still look appropriate and flows work end to end at the finish.

## Native iOS translation extension
Use the iOS `TranslationUIProvider` to offer stickly as the native iOS Translate option. A sheet like this should open when users highlight any text and select Translate:

> [en] counterintuitive
> [de] kontraintuitiv
>
> Contrary to what you'd naturally expect.
>
> ☆ Added to Stickly
>
> [TTS Icon] · [Delete]

During onboarding, users should be prompted to define Stickly as their default Translator. This cannot be done automatically, but display a primary button to open this setting along a "Not now" ghost button.

## Smart Translate & Menu Bar Popover
When opening the smart translate feature, the text input should be focused, so users can start typing imediately. It should not trap them though, it should be easy to get rid of again.
Users can currently save words from the Smart Translator, but not remove them. Allow that as well.
TTS should be available for the original word AND the translations.
The Menu Bar Popup should offer not only copy, but save/delete and TTS as well. The Menu Bar Popup should only have the vertical space it needs if possible, expanding when more space is needed for the translations etc.

On iOS, put the History button on the left in the header bar, left of "Translate". Use a native iOS Button for it, applying the same style type as the other button in that row, the account button.

Remove the "Auto detect • 1 language" row below the input field. Instead, display the language pairs in the empty state. SOmething like this:
> Detects the source automatically and translates into [nativelang], [lang1], [lang2]. {Edit languages}.

When the translation is done, add a action to {edit the languages} at the bottom as well. Also add an action to change the automatically detected language where it says [Detected English].

### History
The History should allow users to Hear, Copy and Save / unsave words.
Expand all translations in the history by default.

## Review
The Review needs material improvement. Currently, the character boxes are very large, taking a lot of space and often not fitting inside the horizontally available space. THey are also not square. Make this more dense and squared.
Like in the webapp, add some subdued hints, randomly spread across the word, based on how well the user is supposed to know the word and how wrong they were in the previous attempt. If the word is already on a high level, show no hints.

## Game
The Popup is only visible when few characters are left in the desktop app. It should have a fixed position at a high z-index rendering.
The success-screen elements for knowledge, accuracy and time are still using the broken styling instead of the stickly brand face&base / shadow style we use in buttons. Fix that.

When no more words are available ("empty-state"), it should clearly state that no words are due for review now. Display how many words the user collected, and how many of them are currently strong in memory. Encourage them to read and translate more. Use that same UI for the "Nothing is due" view in the Review section.

### Motion Design
1. The Challenge element should transition down from the top instead of just appearing.
2. When using the popup, the tiles should disappear in a staggered transition, just like inside the webapp. Copy its animation.

## Words
Task a main subagent to completely redesign the Words section. Orient on the Webapp version of it, which should serve as strong inspiration and aspiration, since it's already well-polished.

# User Authentication
The auth often gives me issues like double auth or something. Fix that. I think we originally made the auth process unnecessarily complicated because I wanted the webapp & the native app to always share auth. I think it's fair and common for users to just sign into the web app if they visit stick.ly on their phones themselves. We just need to make sure the app and all its extensions are authenticated.
