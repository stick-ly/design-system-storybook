import{o as v}from"./browser-D-D48LCx.js";import{t as E}from"./tokens-BqrQmc1Q.js";import"./icon-DyfOqEUK.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const S={title:"Components/Overlays",parameters:{layout:"fullscreen"}};function f(){const e=document.createElement("main");e.dataset.catalogSurface="overlays",e.style.cssText="box-sizing:border-box;min-height:100vh;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif";const a=document.createElement("style");return a.textContent=E("webapp",'[data-catalog-surface="overlays"]')+v,e.append(a),e}function p(e,a="primary"){const n=document.createElement("stickly-button");return n.setAttribute("type",a),n.textContent=e,n}function h(){const e=f(),a=p("Edit saved word"),n=document.createElement("p");n.setAttribute("role","status");const r=()=>{if(e.querySelector("stickly-dialog"))return;const t=document.createElement("stickly-dialog");t.width="520px",t.setAttribute("aria-label","Edit saved word"),t.dataset.catalogDialog="";const s=document.createElement("section");s.style.cssText="display:grid;gap:20px;padding:24px;box-sizing:border-box";const c=document.createElement("h1");c.textContent="Edit saved word",c.style.cssText="font-size:24px;line-height:1.2;margin:0";const o=document.createElement("p");o.textContent="Keep the translation and context that help you remember Haus.",o.style.cssText="margin:0;line-height:1.5;color:rgb(var(--color-text-muted-rgb))";const g=document.createElement("stickly-input");for(const[i,u]of Object.entries({theme:"dark",label:"Translation",value:"house",name:"translation","control-id":"saved-translation",required:""}))g.setAttribute(i,u);const b=document.createElement("stickly-textarea");for(const[i,u]of Object.entries({theme:"dark",label:"Context",value:"Das Haus ist alt.",name:"context","control-id":"saved-context",rows:"3"}))b.setAttribute(i,u);const m=document.createElement("div");m.style.cssText="display:flex;flex-wrap:wrap;justify-content:flex-end;gap:16px;padding-bottom:8px";const x=p("Cancel","secondary"),y=p("Save word");x.addEventListener("click",()=>t.requestClose("cancel")),y.addEventListener("click",()=>t.requestClose("saved")),m.append(x,y),s.append(c,o,g,b,m),t.append(s),t.addEventListener("closed",i=>{n.textContent=i.detail==="saved"?"Word saved.":"",t.remove()}),e.append(t)};return a.addEventListener("click",r),e.append(a,n),queueMicrotask(r),e}const d={render:h},l={render:()=>{const e=f(),a=document.createElement("h1");a.textContent="Word actions",e.append(a);const n=document.createElement("stickly-dropdown");n.setAttribute("aria-label","Word actions");const r=document.createElement("span");r.slot="trigger",r.textContent="Actions",n.append(r);const t=document.createElement("p");t.setAttribute("role","status");for(const[s,c]of[["Play pronunciation",!1],["Edit translation",!1],["Remove saved word",!1],["Already reviewed",!0]]){const o=document.createElement("button");o.type="button",o.className="stickly-dropdown-item",o.setAttribute("role","menuitem"),o.textContent=s,o.disabled=c,o.addEventListener("click",()=>{t.textContent=s}),n.append(o)}return e.append(n,t),e}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: renderDialog
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    const heading = document.createElement('h1');
    heading.textContent = 'Word actions';
    root.append(heading);
    const menu = document.createElement('stickly-dropdown');
    menu.setAttribute('aria-label', 'Word actions');
    const trigger = document.createElement('span');
    trigger.slot = 'trigger';
    trigger.textContent = 'Actions';
    menu.append(trigger);
    const status = document.createElement('p');
    status.setAttribute('role', 'status');
    for (const [label, disabled] of [['Play pronunciation', false], ['Edit translation', false], ['Remove saved word', false], ['Already reviewed', true]] as const) {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'stickly-dropdown-item';
      item.setAttribute('role', 'menuitem');
      item.textContent = label;
      item.disabled = disabled;
      item.addEventListener('click', () => {
        status.textContent = label;
      });
      menu.append(item);
    }
    root.append(menu, status);
    return root;
  }
}`,...l.parameters?.docs?.source}}};const L=["Dialog","Dropdown"];export{d as Dialog,l as Dropdown,L as __namedExportsOrder,S as default};
