import{s as t,m as c,q as p}from"./presentations-D8wb5jBW.js";import"./browser-D-D48LCx.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const f={title:"Components/Application surfaces",parameters:{layout:"fullscreen"}},r={render:()=>{const e=t();return e.append(p()),e}},o={render:()=>{const e=t();return e.append(p(!0)),e}},n={render:()=>{const e=t();return e.append(c()),e}},a={render:()=>{const e=t(),s=document.createElement("stickly-paginator");return s.presentation={length:137,pageIndex:1,pageSize:25,pageSizeOptions:[10,25,50,100],rowsLabel:"Rows per page:",previousLabel:"Previous page",nextLabel:"Next page",rangeLabel:"26–50 of 137"},e.append(s),e}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(quota());
    return root;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(quota(true));
    return root;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.append(mission());
    return root;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const S=["Quota","SafariQuota","Mission","Paginator"];export{n as Mission,a as Paginator,r as Quota,o as SafariQuota,S as __namedExportsOrder,f as default};
