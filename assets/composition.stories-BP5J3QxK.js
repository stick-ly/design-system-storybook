import"./browser-D-D48LCx.js";import{c as g}from"./design-composition-eAOOeXCb.js";import{f as w,e as h,n as o}from"./foundation-page-DpwKphpH.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";import"./render-handbook-BqPDaL2Y.js";const A={title:"Handbook/Foundations/Composition",parameters:{layout:"fullscreen"}},n={name:"Page frame and control language",render:()=>{const a=w(g,{eyebrow:"Foundations / Composition",status:"Current patterns",sourcePath:"docs/design/design-composition.md"}),i=h(a,"Word Hub composition example");i.append(o("h2","A page begins with its purpose"),o("p","Illustrative Word Hub composition: context, title, supporting copy, one page action, then the words. The preview title uses h2 because this handbook already owns the page h1."));const r=o("div",void 0,"foundation-page-preview"),s=o("div",void 0,"foundation-intro"),d=o("div");d.append(o("p","Your vocabulary","foundation-eyebrow"),o("h2","Words worth keeping"),o("p","Return to the words you have met, and choose what to practise next.","foundation-demo-copy"));const e=document.createElement("stickly-action");e.setAttribute("variant","primary"),e.textContent="Export words",e.addEventListener("click",()=>{t.textContent="Example action activated. Export orchestration belongs in the webapp."}),s.append(d,e);const p=o("div",void 0,"foundation-layer");for(const[u,m,l]of[["linger","verweilen","Due for review"],["curious","neugierig","Remembered"],["quiet","ruhig","Remembered"]]){const c=o("div",void 0,"foundation-list-row");c.append(o("strong",u),o("span",m),o("span",l,"foundation-status")),p.append(c)}const t=o("p","Example controls demonstrate presentation only.","foundation-demo-copy");return t.setAttribute("role","status"),r.append(s,p,t),i.append(r),a}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Page frame and control language',
  render: () => {
    const page = foundationPage(composition, {
      eyebrow: 'Foundations / Composition',
      status: 'Current patterns',
      sourcePath: 'docs/design/design-composition.md'
    });
    const section = examples(page, 'Word Hub composition example');
    section.append(node('h2', 'A page begins with its purpose'), node('p', 'Illustrative Word Hub composition: context, title, supporting copy, one page action, then the words. The preview title uses h2 because this handbook already owns the page h1.'));
    const preview = node('div', undefined, 'foundation-page-preview');
    const intro = node('div', undefined, 'foundation-intro');
    const copy = node('div');
    copy.append(node('p', 'Your vocabulary', 'foundation-eyebrow'), node('h2', 'Words worth keeping'), node('p', 'Return to the words you have met, and choose what to practise next.', 'foundation-demo-copy'));
    const action = document.createElement('stickly-action');
    action.setAttribute('variant', 'primary');
    action.textContent = 'Export words';
    action.addEventListener('click', () => {
      output.textContent = 'Example action activated. Export orchestration belongs in the webapp.';
    });
    intro.append(copy, action);
    const card = node('div', undefined, 'foundation-layer');
    for (const [word, translation, state] of [['linger', 'verweilen', 'Due for review'], ['curious', 'neugierig', 'Remembered'], ['quiet', 'ruhig', 'Remembered']]) {
      const row = node('div', undefined, 'foundation-list-row');
      row.append(node('strong', word), node('span', translation), node('span', state, 'foundation-status'));
      card.append(row);
    }
    const output = node('p', 'Example controls demonstrate presentation only.', 'foundation-demo-copy');
    output.setAttribute('role', 'status');
    preview.append(intro, card, output);
    section.append(preview);
    return page;
  }
}`,...n.parameters?.docs?.source}}};const P=["PageAndControls"];export{n as PageAndControls,P as __namedExportsOrder,A as default};
