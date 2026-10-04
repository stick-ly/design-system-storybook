import{s as c}from"./presentations-D8wb5jBW.js";import"./browser-D-D48LCx.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const g={title:"Components/Toast",parameters:{layout:"fullscreen"}};function n(t){const a=c(),e=document.createElement("stickly-toast-view");return e.message=t==="unicode"?"日本語 Français العربية":"Word saved",e.actionLabel=t==="action"?"Undo":"",e.visible=!0,e.logoUrl="./assets/icons/stickly-white.svg",a.append(e),a}const r={render:()=>n("message")},s={render:()=>n("action")},o={render:()=>n("unicode")};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return render('message');
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return render('action');
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return render('unicode');
  }
}`,...o.parameters?.docs?.source}}};const f=["Message","Action","Unicode"];export{s as Action,r as Message,o as Unicode,f as __namedExportsOrder,g as default};
