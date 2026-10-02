import{f as c,e as l,n as e}from"./foundation-page-DpwKphpH.js";import"./render-handbook-BqPDaL2Y.js";import"./tokens-BqrQmc1Q.js";const p=`# Do's and Don'ts: visual decisions

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
`,f={title:"Handbook/Foundations/Do's and Don'ts",parameters:{layout:"fullscreen"}},a={name:"Visual decisions side by side",render:()=>{const s=c(p,{eyebrow:"Foundations / Good judgment",status:"Current policy examples",sourcePath:"docs/design/visual-examples.md"}),r=l(s,"Recommended and discouraged visual treatments");r.append(e("h2","Make hierarchy and structure visible"),e("p","The discouraged treatments are intentionally shown for comparison. These illustrative cards do not redefine current component styles."));for(const d of["layers","shadows","feedback"]){const t=e("div",void 0,"foundation-grid");t.style.marginBottom="24px";for(const n of[!0,!1]){const o=e("section",void 0,`foundation-demo${n?"":" foundation-dont"}`);if(o.append(e("span",n?"DO":"DON'T","foundation-comparison-title")),d==="layers"){o.append(e("h3",n?"Separate the content surface":"Lose the card in the page"));const i=e("div",void 0,"foundation-layer");i.append(e("strong","Your words"),e("p","Three words ready for review.")),o.append(i)}else d==="shadows"?o.append(e("h3",n?"Keep the base attached":"Float on a distant halo"),e("span","Continue","foundation-shadow-example")):o.append(e("h3",n?"Describe actual progress":"Overclaim one answer"),e("p",n?"Correct. You recalled this word.":"Mastered! You know this word forever."));t.append(o)}r.append(t)}return s}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Visual decisions side by side',
  render: () => {
    const page = foundationPage(visualReference, {
      eyebrow: 'Foundations / Good judgment',
      status: 'Current policy examples',
      sourcePath: 'docs/design/visual-examples.md'
    });
    const section = examples(page, 'Recommended and discouraged visual treatments');
    section.append(node('h2', 'Make hierarchy and structure visible'), node('p', 'The discouraged treatments are intentionally shown for comparison. These illustrative cards do not redefine current component styles.'));
    for (const kind of ['layers', 'shadows', 'feedback']) {
      const grid = node('div', undefined, 'foundation-grid');
      grid.style.marginBottom = '24px';
      for (const isDo of [true, false]) {
        const card = node('section', undefined, \`foundation-demo\${isDo ? '' : ' foundation-dont'}\`);
        card.append(node('span', isDo ? 'DO' : "DON'T", 'foundation-comparison-title'));
        if (kind === 'layers') {
          card.append(node('h3', isDo ? 'Separate the content surface' : 'Lose the card in the page'));
          const layer = node('div', undefined, 'foundation-layer');
          layer.append(node('strong', 'Your words'), node('p', 'Three words ready for review.'));
          card.append(layer);
        } else if (kind === 'shadows') {
          card.append(node('h3', isDo ? 'Keep the base attached' : 'Float on a distant halo'), node('span', 'Continue', 'foundation-shadow-example'));
        } else {
          card.append(node('h3', isDo ? 'Describe actual progress' : 'Overclaim one answer'), node('p', isDo ? 'Correct. You recalled this word.' : 'Mastered! You know this word forever.'));
        }
        grid.append(card);
      }
      section.append(grid);
    }
    return page;
  }
}`,...a.parameters?.docs?.source}}};const g=["VisualDecisions"];export{a as VisualDecisions,g as __namedExportsOrder,f as default};
