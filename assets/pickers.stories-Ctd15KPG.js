import"./browser-D-D48LCx.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const f={title:"Components/Pickers"},m=[{value:"en",label:"English",searchTerms:["eng"]},{value:"fr",label:"Français",searchTerms:["French"]},{value:"blocked",label:"Disabled option",disabled:!0},{value:"de",label:"Deutsch",searchTerms:["German"]},{value:"ja",label:"日本語",searchTerms:["Japanese"]},{value:"ar",label:"العربية",searchTerms:["Arabic"]}];function c(e,r,a="default"){const t=document.createElement(e);return t.dataset.pickerCase=a,t.setAttribute("name",r),t.setAttribute("label","Language"),t.setAttribute("placeholder",e==="stickly-select"?"Choose language":"Search language"),t.setAttribute("helper-text","Original language names and search aliases"),a==="disabled"&&t.setAttribute("disabled",""),a==="error"&&t.setAttribute("error-text","Choose a supported language"),t.options=m.map(i=>({...i})),t.value=a==="empty"?null:"de",t}function l(e){const r=document.createElement("main");r.style.cssText="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:24px;padding:24px;max-width:1100px;min-height:520px;background:#191430;color:#fffaf1";for(const a of["default","empty","disabled","error"])r.append(c(e,`${e}-${a}`,a));return r}const s={render:()=>l("stickly-select")},n={render:()=>l("stickly-combobox")},o={render(){const e=document.createElement("form");e.dataset.pickerForm="",e.style.cssText="display:grid;gap:24px;padding:24px;max-width:520px;min-height:560px;background:#191430;color:#fffaf1",e.append(c("stickly-select","selectedLanguage"),c("stickly-combobox","searchedLanguage"));const r=document.createElement("button");return r.type="reset",r.textContent="Reset languages",e.append(r),e.addEventListener("submit",a=>a.preventDefault()),e}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => states('stickly-select')
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => states('stickly-combobox')
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render() {
    const form = document.createElement('form');
    form.dataset.pickerForm = '';
    form.style.cssText = 'display:grid;gap:24px;padding:24px;max-width:520px;min-height:560px;background:#191430;color:#fffaf1';
    form.append(picker('stickly-select', 'selectedLanguage'), picker('stickly-combobox', 'searchedLanguage'));
    const reset = document.createElement('button');
    reset.type = 'reset';
    reset.textContent = 'Reset languages';
    form.append(reset);
    form.addEventListener('submit', event => event.preventDefault());
    return form;
  }
}`,...o.parameters?.docs?.source}}};const x=["SelectStates","ComboboxStates","NativeForm"];export{n as ComboboxStates,o as NativeForm,s as SelectStates,x as __namedExportsOrder,f as default};
