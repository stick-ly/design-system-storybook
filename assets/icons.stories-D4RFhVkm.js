import{i as c,d as i,a as l}from"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";i();l();const u={title:"Components/Icons and spinner"},r={render:()=>{const e=document.createElement("main");e.style.cssText="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;padding:24px;font-size:24px";for(const t of[...Object.keys(c),"unknown"]){const n=document.createElement("div");n.style.cssText="display:grid;justify-items:center;gap:8px";const a=document.createElement("stickly-icon");a.setAttribute("name",t);const s=document.createElement("span");s.textContent=t,s.style.fontSize="14px",n.append(a,s),e.append(n)}return e}},o={render:()=>{const e=document.createElement("div");e.style.cssText="display:flex;gap:24px;align-items:center;padding:24px;color:var(--color-accent)";for(const t of[16,20,40,100]){const n=document.createElement("stickly-spinner");n.setAttribute("diameter",String(t)),n.setAttribute("aria-label","Loading"),e.append(n)}return e}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('main');
    root.style.cssText = 'display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;padding:24px;font-size:24px';
    for (const name of [...Object.keys(iconData), 'unknown']) {
      const cell = document.createElement('div');
      cell.style.cssText = 'display:grid;justify-items:center;gap:8px';
      const icon = document.createElement('stickly-icon');
      icon.setAttribute('name', name);
      const label = document.createElement('span');
      label.textContent = name;
      label.style.fontSize = '14px';
      cell.append(icon, label);
      root.append(cell);
    }
    return root;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    root.style.cssText = 'display:flex;gap:24px;align-items:center;padding:24px;color:var(--color-accent)';
    for (const size of [16, 20, 40, 100]) {
      const spinner = document.createElement('stickly-spinner');
      spinner.setAttribute('diameter', String(size));
      spinner.setAttribute('aria-label', 'Loading');
      root.append(spinner);
    }
    return root;
  }
}`,...o.parameters?.docs?.source}}};const x=["AllIcons","SpinnerSizes"];export{r as AllIcons,o as SpinnerSizes,x as __namedExportsOrder,u as default};
