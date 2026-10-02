import{a as v}from"./browser-xg2p1WRV.js";import"./icon-B1lV_IqI.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";customElements.get("stickly-context-recall-view")||customElements.define("stickly-context-recall-view",v);const E={title:"Components/Context recall",parameters:{layout:"fullscreen"}};function t(g){const r=document.createElement("main");r.dataset.contextRecallRoot="current",r.style.cssText="height:100vh;background:#191430;color:#fffaf1";const e=document.createElement("stickly-context-recall-view");return e.assets={logo:"./assets/icons/stickly-white.svg",close:"./assets/images/close.svg",caret:"./assets/images/caret-up.svg"},e.dataset.contextRecallState=g,r.append(e),r}const a=async({canvasElement:g})=>{const r=g.querySelector("[data-context-recall-state]"),e=r.dataset.contextRecallState;if(e==="hidden")return;const y=()=>new DOMRect(e==="left-edge"?0:e==="right-edge"?innerWidth-20:innerWidth/2-10,e==="above"?innerHeight-70:40,20,20);r.open({mode:e==="invitation"||e==="restored"?e:"challenge",anchorRect:y,learnedWord:"Haus",savedWhen:"4 days ago",reviewTiming:"due today"}),await r.updateComplete,e==="why"&&r.shadowRoot?.querySelector("button[aria-expanded]")?.click(),(e==="saving"||e==="error")&&r.setSubmissionState(e),await r.updateComplete,await new Promise(h=>requestAnimationFrame(()=>requestAnimationFrame(()=>h())))},s={render:()=>t("hidden"),play:a},o={render:()=>t("invitation"),play:a},n={render:()=>t("challenge"),play:a},c={render:()=>t("why"),play:a},d={render:()=>t("saving"),play:a},i={render:()=>t("error"),play:a},p={render:()=>t("restored"),play:a},l={render:()=>t("above"),play:a},m={render:()=>t("left-edge"),play:a},u={render:()=>t("right-edge"),play:a};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => render('hidden'),
  play: setup
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => render('invitation'),
  play: setup
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => render('challenge'),
  play: setup
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => render('why'),
  play: setup
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => render('saving'),
  play: setup
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => render('error'),
  play: setup
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => render('restored'),
  play: setup
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => render('above'),
  play: setup
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => render('left-edge'),
  play: setup
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => render('right-edge'),
  play: setup
}`,...u.parameters?.docs?.source}}};const b=["Hidden","Invitation","Challenge","Why","Saving","Error","Restored","Above","LeftEdge","RightEdge"];export{l as Above,n as Challenge,i as Error,s as Hidden,o as Invitation,m as LeftEdge,p as Restored,u as RightEdge,d as Saving,c as Why,b as __namedExportsOrder,E as default};
