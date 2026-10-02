import{t as e,s as T,d as E,a as k,b as H}from"./presentations-BGommvQY.js";import"./browser-xg2p1WRV.js";import"./icon-B1lV_IqI.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const G={title:"Components/Translator",parameters:{layout:"fullscreen"}},n={render:()=>e("hidden")},o={render:()=>e("symbol")},a={render:()=>e("mobile-symbol")},t={render:()=>e("loading")},c={render:()=>e("mobile-loading")},i={render:()=>e("precedence-loading")},d={render:()=>e("translation")},l={render:()=>e("mobile-translation")},u={render:()=>e("quiz")},p={render:()=>e("quota")},m={render:()=>e("bridge-prompt")},g={render:()=>e("bridge-complete")};function h(s){const v=T();v.style.cssText="min-height:440px;padding:96px 32px;background:#f7f4ed;color:#191430;font:20px Georgia,serif";const P=document.createElement("p");P.append("A saved word in its original article: ");const f=document.createElement("stickly-highlight-anchor"),z=document.createElement("stickly-highlight");z.textContent="Haus",z.setAttribute("variant",s==="translation"?"learned":s==="success-saved"?"success":"due");const B=s==="translation"?E():k(s),x=document.createElement("stickly-audio-button");x.setAttribute("icon-dark","./assets/images/tts.png");const Q=document.createElement("stickly-translation-menu");Q.presentation={open:!1,label:"Translation actions",items:[{id:"explain",label:"Explain this word"}],layout:{top:160,left:32,maxHeight:250,placement:"below",ready:!0}},B.presentation={...B.presentation,audio:x,menu:Q};const r=H("translation-above",B);return r.setAttribute("inline",""),r.slot="bubble",r.presentation={...r.presentation,useChrome:!0,hitSlop:0,style:{...r.presentation.style,isQuiz:s!=="translation"}},f.append(z,r),P.append(f),v.append(P),v}const b={render:()=>h("translation")},w={render:()=>h("typed")},y={render:()=>h("history")},S={render:()=>h("success-saved")};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('hidden');
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('symbol');
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('mobile-symbol');
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('loading');
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('mobile-loading');
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('precedence-loading');
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('translation');
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('mobile-translation');
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('quiz');
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('quota');
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('bridge-prompt');
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return translator('bridge-complete');
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => browserPreview('translation')
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => browserPreview('typed')
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => browserPreview('history')
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => browserPreview('success-saved')
}`,...S.parameters?.docs?.source}}};const O=["Hidden","Symbol","MobileSymbol","Loading","MobileLoading","PrecedenceLoading","Translation","MobileTranslation","Quiz","Quota","BridgePrompt","BridgeComplete","BrowserPreviewTranslation","BrowserPreviewTypedQuiz","BrowserPreviewQuizHistory","BrowserPreviewQuizSuccess"];export{g as BridgeComplete,m as BridgePrompt,y as BrowserPreviewQuizHistory,S as BrowserPreviewQuizSuccess,b as BrowserPreviewTranslation,w as BrowserPreviewTypedQuiz,n as Hidden,t as Loading,c as MobileLoading,a as MobileSymbol,l as MobileTranslation,i as PrecedenceLoading,u as Quiz,p as Quota,o as Symbol,d as Translation,O as __namedExportsOrder,G as default};
