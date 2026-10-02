import{s as r,m as S,p as m,q as g}from"./presentations-BGommvQY.js";import"./browser-xg2p1WRV.js";import"./icon-B1lV_IqI.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const x={title:"Components/Application surfaces",parameters:{layout:"fullscreen"}},n={render:()=>{const e=r();return e.append(m()),e}},s={render:()=>{const e=r();return e.append(g()),e}},p={render:()=>{const e=r();return e.append(g(!0)),e}},c={render:()=>{const e=r();return e.append(S()),e}},i={render:()=>{const e=r();return e.append(m(!0)),e}},b=e=>{const o=r(),t=m();t.style.cssText=`display:block;width:${e}px;max-width:100%`;const a=t.presentation;return t.presentation={...a,shortcut:{label:"Shortcut",value:"Command+Shift+9",editLabel:"Edit"},site:{label:"Current site",title:"Enabled on www.norberthires.blog",description:"This host is active unless you opt it out.",showSiteAction:!0,siteActionLabel:"Disable site",tabActionLabel:"Disable tab"},mission:{...a.mission,visible:!1},translation:{...a.translation,placeholder:"What would you like to translate?",value:"",detectedLanguage:"",hint:"Select text, then use the symbol or shortcut."},languages:{...a.languages,visible:!1}},o.append(t),o},u={render:()=>b(420)},d={render:()=>b(320)},l={render:()=>{const e=r(),o=document.createElement("stickly-paginator");return o.presentation={length:137,pageIndex:1,pageSize:25,pageSizeOptions:[10,25,50,100],rowsLabel:"Rows per page:",previousLabel:"Previous page",nextLabel:"Next page",rangeLabel:"26–50 of 137"},e.append(o),e}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(popup());
    return root;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(quota());
    return root;
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(quota(true));
    return root;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(mission());
    return root;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(popup(true));
    return root;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => activePopup(420)
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => activePopup(320)
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface(),
      paginator = document.createElement('stickly-paginator') as HTMLElement & {
        presentation: unknown;
      };
    paginator.presentation = {
      length: 137,
      pageIndex: 1,
      pageSize: 25,
      pageSizeOptions: [10, 25, 50, 100],
      rowsLabel: 'Rows per page:',
      previousLabel: 'Previous page',
      nextLabel: 'Next page',
      rangeLabel: '26–50 of 137'
    };
    root.append(paginator);
    return root;
  }
}`,...l.parameters?.docs?.source}}};const y=["Popup","Quota","SafariQuota","Mission","SafariPopup","ActiveSitePopup","NarrowActiveSitePopup","Paginator"];export{u as ActiveSitePopup,c as Mission,d as NarrowActiveSitePopup,l as Paginator,n as Popup,s as Quota,i as SafariPopup,p as SafariQuota,y as __namedExportsOrder,x as default};
