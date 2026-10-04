import{b as i}from"./browser-D-D48LCx.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";customElements.get("stickly-feedback-view")||customElements.define("stickly-feedback-view",i);const k={title:"Components/Feedback",parameters:{layout:"fullscreen"}};function s(d){const e=document.createElement("main");e.dataset.feedbackRoot="current",e.style.cssText="height:100vh;background:#191430;color:#fffaf1";const r=document.createElement("button");r.textContent="Original focused page action",e.append(r);const p=document.createElement("stickly-feedback-view");return p.dataset.feedbackState=d,e.append(p),e}const c=async({canvasElement:d})=>{const e=d.querySelector("[data-feedback-state]"),r=e.dataset.feedbackState;r!=="hidden"&&e.requestFeedback(),r==="error"&&(e.error="The review page could not be opened. Try again."),r==="reviewOpened"&&(e.status="reviewOpened"),await e.updateComplete},t={render:()=>s("hidden"),play:c},a={render:()=>s("open"),play:c},n={render:()=>s("error"),play:c},o={render:()=>s("reviewOpened"),play:c};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => render('hidden'),
  play: setup
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => render('open'),
  play: setup
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => render('error'),
  play: setup
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => render('reviewOpened'),
  play: setup
}`,...o.parameters?.docs?.source}}};const b=["Hidden","Open","Error","ReviewOpened"];export{n as Error,t as Hidden,a as Open,o as ReviewOpened,b as __namedExportsOrder,k as default};
