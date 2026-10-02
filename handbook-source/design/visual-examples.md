# Do's and Don'ts: visual decisions

> Status: current design policy. Storybook examples are illustrative comparisons.

## Start with a clear task

**Do:** one eyebrow, one route title, one plain description and one dominant
page action. Continue directly into useful content with aligned edges.

**Don't:** put competing display headlines, a second primary action or a
decorative divider ahead of the learner's words. Let the page's content own the
space; ornament must not delay the task.

## Give each layer a purpose

**Do:** keep the atmospheric page behind the content. Use a visibly stronger
surface for a top-level card, with warm paper for intentional reading and field
surfaces. Use semantic tokens so related states stay related.

**Don't:** place a translucent canvas card on nearly the same canvas background,
hard-code arbitrary purple values, or use primary accent as ordinary paragraph
text on warm paper.

## Use an attached Long Shadow

**Do:** a modest two-to-four-pixel hard shadow in the same semantic family as the
surface. It reads as a connected base. Keep the control's outer layout stable
while a raised face presses into that base.

**Don't:** detach a large cast shadow, add soft gray halos to new controls or
stack a second edge on a connected shell. Existing compatibility shadows and
the WebKit-safe bubble construction have explicit exceptions recorded in
[the token reference](design-tokens.md#policy-and-existing-implementation).

## Make meaning visible beyond color

**Do:** purple remembered words, amber review-due cues and green correct feedback
with labels, indicators, underline or structure where needed. Use a real icon
for checked/indeterminate state and bold, consistent focus feedback.

**Don't:** make readiness, errors or selection depend on color alone, hide a
focus edge inside an overflow-clipped shell, or show accent-on-accent indicators.

## Keep feedback truthful and proportional

**Do:** say "Saved" after storage succeeds. Distinguish reading, assisted
practice and unaided recall. Offer one useful extra example only on request.
Respect reduced motion and keep continuation available during celebration.

**Don't:** label one answer "Mastered", give credit for opening an explanation,
show an empty enrichment promise or block translation on supplementary content.
Do not present source audits or generated concept images as deployed proof.

The [product handbook](../product/product-experience.md) carries the complete
learner flow and status boundary. The [motion policy](motion.md) carries exact
tile-game sequencing, duration and reduced-motion requirements.
