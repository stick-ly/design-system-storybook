import{d as c,a as l}from"./accordion-DGF6Fpw0.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";c();l();const u={title:"Components/Navigation"},o={render:()=>{const n=document.createElement("main");n.style.cssText="display:grid;gap:24px;padding:24px";for(const s of["underline","pill"]){const e=document.createElement("stickly-tab-list");e.setAttribute("variant",s),e.setAttribute("aria-label","Vocabulary filters");for(const[t,r]of["All","Due","Recent","Disabled"].entries()){const i=document.createElement("stickly-tab");i.setAttribute("label",r),t||i.setAttribute("selected",""),t===3&&i.setAttribute("disabled",""),e.append(i)}e.addEventListener("tab-select",t=>{const r=t.target;for(const i of e.querySelectorAll("stickly-tab"))i.toggleAttribute("selected",i===r)}),n.append(e)}return n}},a={render:()=>{const n=document.createElement("main");n.style.cssText="display:grid;gap:16px;padding:24px";for(const[s,e]of["Why read authentic articles?","How does spaced repetition work?","日本語 العربية"].entries()){const t=document.createElement("stickly-accordion-item");t.setAttribute("question",e),t.setAttribute("item-id",`item-${s}`),t.setAttribute("group-name","shared-example"),s===1&&t.setAttribute("open","");const r=document.createElement("p");r.style.margin="0",r.textContent="Find words in their original context and review them when it helps.",t.append(r),n.append(t)}return n}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('main');
    root.style.cssText = 'display:grid;gap:24px;padding:24px';
    for (const variant of ['underline', 'pill']) {
      const list = document.createElement('stickly-tab-list');
      list.setAttribute('variant', variant);
      list.setAttribute('aria-label', 'Vocabulary filters');
      for (const [i, label] of ['All', 'Due', 'Recent', 'Disabled'].entries()) {
        const tab = document.createElement('stickly-tab');
        tab.setAttribute('label', label);
        if (!i) tab.setAttribute('selected', '');
        if (i === 3) tab.setAttribute('disabled', '');
        list.append(tab);
      }
      list.addEventListener('tab-select', event => {
        const selected = event.target as HTMLElement;
        for (const tab of list.querySelectorAll('stickly-tab')) tab.toggleAttribute('selected', tab === selected);
      });
      root.append(list);
    }
    return root;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('main');
    root.style.cssText = 'display:grid;gap:16px;padding:24px';
    for (const [i, question] of ['Why read authentic articles?', 'How does spaced repetition work?', '日本語 العربية'].entries()) {
      const item = document.createElement('stickly-accordion-item');
      item.setAttribute('question', question);
      item.setAttribute('item-id', \`item-\${i}\`);
      item.setAttribute('group-name', 'shared-example');
      if (i === 1) item.setAttribute('open', '');
      const content = document.createElement('p');
      content.style.margin = '0';
      content.textContent = 'Find words in their original context and review them when it helps.';
      item.append(content);
      root.append(item);
    }
    return root;
  }
}`,...a.parameters?.docs?.source}}};const b=["Tabs","Accordion"];export{a as Accordion,o as Tabs,b as __namedExportsOrder,u as default};
