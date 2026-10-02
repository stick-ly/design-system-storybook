import"./browser-xg2p1WRV.js";import{c as h}from"./design-composition-eAOOeXCb.js";import{f as b,e as g,n as o}from"./foundation-page-DpwKphpH.js";import"./icon-B1lV_IqI.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";import"./render-handbook-BqPDaL2Y.js";const $={title:"Handbook/Foundations/Light and dark",parameters:{layout:"fullscreen"}},i={name:"The same controls, two contexts",render:()=>{const p=h.split("### Light and dark control themes")[1].split("## 11) Modal Dialog Pattern")[0],d=b(`# Light and dark control themes

Geometry and focus carry the same meaning in either context. This page renders real native fields, choices and actions.

${p}`,{eyebrow:"Foundations / Theme",status:"Current theme contract",sourcePath:"docs/design/design-composition.md"}),m=g(d,"Live native components on light and dark surfaces");m.append(o("h2","Try the controls with a keyboard"));const u=o("div",void 0,"foundation-grid");for(const e of["light","dark"]){const c=o("section",void 0,`foundation-demo${e==="light"?" foundation-demo-light":""}`);c.append(o("p",`${e} context`,"foundation-eyebrow"),o("h3","Keep the meaning consistent"));const l=o("div",void 0,"foundation-control-stack"),t=document.createElement("stickly-input");t.setAttribute("theme",e),t.setAttribute("label","Learning goal"),t.setAttribute("name",`goal-${e}`),t.setAttribute("control-id",`goal-${e}`),t.setAttribute("helper-text","Notice the label and hard accent focus."),t.value="Read a little every day";const n=document.createElement("stickly-input");n.setAttribute("theme",e),n.setAttribute("label","Required word"),n.setAttribute("name",`word-${e}`),n.setAttribute("control-id",`word-${e}`),n.setAttribute("invalid",""),n.setAttribute("error-text","Enter a word to continue.");const r=document.createElement("stickly-checkbox");r.setAttribute("theme",e),r.setAttribute("checked",""),r.setAttribute("name",`practice-${e}`),r.setAttribute("aria-label","Practise remembered words"),r.textContent="Practise remembered words";const a=document.createElement("stickly-action");a.setAttribute("theme",e),a.setAttribute("variant","primary"),a.textContent="Save goal";const s=o("p","Interactive example. No preferences are stored.","foundation-demo-copy");s.setAttribute("role","status"),a.addEventListener("click",()=>{s.textContent="Example action activated. Saving belongs in the consumer."}),l.append(t,n,r,a,s),c.append(l),u.append(c)}return m.append(u),d}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'The same controls, two contexts',
  render: () => {
    const themeSection = composition.split('### Light and dark control themes')[1].split('## 11) Modal Dialog Pattern')[0];
    const page = foundationPage(\`# Light and dark control themes\\n\\nGeometry and focus carry the same meaning in either context. This page renders real native fields, choices and actions.\\n\\n\${themeSection}\`, {
      eyebrow: 'Foundations / Theme',
      status: 'Current theme contract',
      sourcePath: 'docs/design/design-composition.md'
    });
    const section = examples(page, 'Live native components on light and dark surfaces');
    section.append(node('h2', 'Try the controls with a keyboard'));
    const grid = node('div', undefined, 'foundation-grid');
    for (const theme of ['light', 'dark']) {
      const card = node('section', undefined, \`foundation-demo\${theme === 'light' ? ' foundation-demo-light' : ''}\`);
      card.append(node('p', \`\${theme} context\`, 'foundation-eyebrow'), node('h3', 'Keep the meaning consistent'));
      const stack = node('div', undefined, 'foundation-control-stack');
      const input = document.createElement('stickly-input') as HTMLElement & {
        value: string;
      };
      input.setAttribute('theme', theme);
      input.setAttribute('label', 'Learning goal');
      input.setAttribute('name', \`goal-\${theme}\`);
      input.setAttribute('control-id', \`goal-\${theme}\`);
      input.setAttribute('helper-text', 'Notice the label and hard accent focus.');
      input.value = 'Read a little every day';
      const error = document.createElement('stickly-input');
      error.setAttribute('theme', theme);
      error.setAttribute('label', 'Required word');
      error.setAttribute('name', \`word-\${theme}\`);
      error.setAttribute('control-id', \`word-\${theme}\`);
      error.setAttribute('invalid', '');
      error.setAttribute('error-text', 'Enter a word to continue.');
      const check = document.createElement('stickly-checkbox');
      check.setAttribute('theme', theme);
      check.setAttribute('checked', '');
      check.setAttribute('name', \`practice-\${theme}\`);
      check.setAttribute('aria-label', 'Practise remembered words');
      check.textContent = 'Practise remembered words';
      const action = document.createElement('stickly-action');
      action.setAttribute('theme', theme);
      action.setAttribute('variant', 'primary');
      action.textContent = 'Save goal';
      const result = node('p', 'Interactive example. No preferences are stored.', 'foundation-demo-copy');
      result.setAttribute('role', 'status');
      action.addEventListener('click', () => {
        result.textContent = 'Example action activated. Saving belongs in the consumer.';
      });
      stack.append(input, error, check, action, result);
      card.append(stack);
      grid.append(card);
    }
    section.append(grid);
    return page;
  }
}`,...i.parameters?.docs?.source}}};const L=["ControlThemes"];export{i as ControlThemes,L as __namedExportsOrder,$ as default};
