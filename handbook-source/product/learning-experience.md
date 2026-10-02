# One connected learning loop

Translation answers an immediate question. Saved vocabulary carries that answer forward. Context, pronunciation, and spaced recall make it useful again, while keeping the learner in charge of when help appears.

## The browsing loop

**Encounter → Translate → Keep → Re-encounter → Recall → Continue reading.**

1. The learner encounters an unfamiliar expression.
2. An explicit translate action, shortcut, or context-menu command requests meaning.
3. The selection-translation flow stores vocabulary according to its product contract. Smart Translate uses independent explicit save actions per language result; do not assume every translation surface auto-saves.
4. An eligible saved learned-language word can be highlighted on a later page.
5. A deliberate hover or click opens its meaning or a due inline review.
6. A review result updates scheduling; a correct result can change matching highlights to green and show success feedback.

Purple marks an ordinary remembered word. Orange marks a due review. Green marks a completed successful review. Preserve the distinction between the prompt, answer correctness, and persistence.

Explore [Translation](story:components-translator--translation), [Inline recall](story:components-inline-quiz--typed), [Review history](story:components-inline-quiz--history), and [Saved success](story:components-inline-quiz--success-saved).

## Selection translation is its own system

The detailed product reference currently specifies **Show translate action** as the default: an eligible completed selection of 2–500 meaningful characters in readable content shows a small action. Clicking it starts translation.

**Shortcut/context menu only** suppresses selection-created UI. Those deliberate commands remain available in every selection mode. Editable, code, and interactive regions are excluded from the automatic affordance.

Do not silently remove otherwise eligible selection help because of inferred intent, language confidence, later copying, or scrolling. Escape and other documented dismissal events close visible UI; they do not retroactively change eligibility.

## Remembered words are a separate system

The detailed reference specifies three explicit modes: **All saved words**, **Due reviews only**, and **Off**. The default highlights up to the first fifteen eligible occurrences of each saved learned-language word, with documented ranking and mastered-word exclusions.

Highlight only the learned-language side, exclude interaction-heavy chrome and editable surfaces, and respect tab/site/practice controls promptly. A global numeric density limit would need a clear visible user setting, rather than silently stopping at an undisclosed budget.

Earlier workspace guidance proposed deliberate-intent suppression and a global page-density budget. Where those proposals contradict the more concrete product reference, treat them as superseded proposals. Keep their rationale in decision history; do not combine mutually incompatible rules.

## Review is a compact memory task

Inline quiz and the standalone Tile Game are distinct experiences. Review should offer an honest attempt, useful corrective feedback, and a way back to the page. On native Apple surfaces, the redesign specifies a small initial queue of three prompts with the freedom to stop or continue.

Do not expose an answer in supplemental content while asking the learner to recall it. Hints, reveal, and assisted reconstruction must remain distinguishable from unaided recall. A correct answer with a failed save is **correct, sync pending**, not falsely completed persistence.

## Words is the durable home

The Word Hub supports language scope, listening, context-rich collection, search, correction, removal, selection, pagination, and Anki export. It is the calm place to organize vocabulary and see useful learning orientation.

The native primary destinations are Translate, Review, Game, and Words. Settings, account, support, and Safari status remain contextual destinations. Safari enablement alone is insufficient evidence that page communication is ready.

## Experimental surfaces stay labeled

Context Recall is a **proposed experiment**, not an established shipped experience. Retained source and [catalog examples](story:components-context-recall--invitation) demonstrate candidate presentation. They do not prove production availability.

The historical proposal uses saved words only, is off by default, is page/session scoped, excludes sensitive and interactive surfaces, and requires reversible page restoration plus correctness, friction, and mature D7 survival gates. Passive exposure must not alter a canonical review result.

Do not confuse this experiment with the established inline quiz or with future source discovery. Refer to the source experiment contract before any implementation or release claim.

## Source and status

**Status:** current documented policy and implementation reference, with proposed/experimental features explicitly separated. This handbook migration does not perform a production or device audit.

Sources: [Product experience reference](product-experience.md), [Apple product redesign](references/PRODUCT_REDESIGN.md), [Apple user journeys](references/USER_JOURNEYS.md), and [Context Recall experiment](https://github.com/stick-ly/stickly-workspace/blob/main/docs/experiments/context-recall-experiment.md).
