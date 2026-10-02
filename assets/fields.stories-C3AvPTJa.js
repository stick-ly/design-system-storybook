import{d as S,c as F}from"./browser-xg2p1WRV.js";import"./icon-B1lV_IqI.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";S();F();const P={title:"Components/Fields",parameters:{docs:{description:{component:"Plain native web components using the same field skin as Angular adapters. "}}}};function y(o){const n=document.createElement("main");n.style.cssText="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:24px;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif";for(const a of["light","dark"])for(const t of["default","empty","disabled","readonly","error","helper","small","large"]){const e=document.createElement(`stickly-${o}`);e.setAttribute("theme",a),e.setAttribute("label",`${a} ${t}`),e.setAttribute("name",`${o}-${a}-${t}`),e.setAttribute("control-id",`${o}-${a}-${t}`),e.setAttribute("placeholder",o==="input"?"Translate…":"Add a surrounding sentence…"),t!=="empty"&&(e.value=o==="input"?"Vocabulary":`La casa está en la colina.
日本語 Français العربية`),(t==="disabled"||t==="readonly")&&e.setAttribute(t,""),(t==="small"||t==="large")&&e.setAttribute("size",t),t==="error"&&(e.setAttribute("invalid",""),e.setAttribute("error-text","Please try again")),t==="helper"&&e.setAttribute("helper-text","Helpful description"),n.append(e)}return n}const i={render:()=>y("input")},c={render:()=>y("textarea")},l={render:()=>{const o=document.createElement("main");o.style.cssText="display:grid;gap:24px;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif";for(const n of["shadow","light"]){const a=document.createElement("section");a.dataset.choiceMode=n;const t=document.createElement("h2");t.textContent=n==="shadow"?"Isolated native choices":"Inherited native choices";const e=document.createElement("form");e.id=`${n}-choice-form`,e.style.cssText="display:grid;gap:12px";const d=document.createElement("fieldset");d.id=`${n}-fieldset`,d.style.cssText="display:grid;gap:12px;border:1px solid #9388b6;padding:16px";const h=document.createElement("legend");h.textContent="Reading preferences",d.append(h);const s=(A,E,k,$,v,T=!1,C=!1)=>{const r=document.createElement(`stickly-${A}`);return r.id=`${n}-${E}`,n==="light"&&r.setAttribute("inherit-tokens",""),r.setAttribute("theme","dark"),r.setAttribute("name",k),r.setAttribute("value",$),r.setAttribute("aria-label",v),r.toggleAttribute("checked",T),r.toggleAttribute("disabled",C),r.textContent=v,r};d.append(s("checkbox","reading","reading","yes","Save reading preferences",!0),s("checkbox","disabled","disabled-choice","excluded","Unavailable preference",!0,!0),s("radio","beginner","level","beginner","Beginner",!0),s("radio","advanced","level","advanced","Advanced"),s("radio","locked","level","locked","Unavailable level",!1,!0));const m=document.createElement("button");m.type="reset",m.textContent="Reset preferences";const u=document.createElement("output");u.id=`${n}-form-data`;const p=()=>{u.textContent=JSON.stringify(Array.from(new FormData(e)))};e.addEventListener("change",p),e.addEventListener("reset",()=>setTimeout(p,0)),e.append(d,m,u);const f=document.createElement("div");f.style.cssText="display:grid;gap:12px;padding-top:12px";const g=s("checkbox","external-check","external","linked","Preference outside the form",!0),x=s("radio","external-radio","level","external","Level outside the form");g.setAttribute("form",e.id),x.setAttribute("form",e.id),f.append(g,x);const b=document.createElement("form");b.id=`${n}-other-form`,a.append(t,e,f,b),o.append(a),setTimeout(p,0)}return o}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => render('input')
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => render('textarea')
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('main');
    root.style.cssText = 'display:grid;gap:24px;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif';
    for (const mode of ['shadow', 'light']) {
      const section = document.createElement('section');
      section.dataset.choiceMode = mode;
      const heading = document.createElement('h2');
      heading.textContent = mode === 'shadow' ? 'Isolated native choices' : 'Inherited native choices';
      const form = document.createElement('form');
      form.id = \`\${mode}-choice-form\`;
      form.style.cssText = 'display:grid;gap:12px';
      const fieldset = document.createElement('fieldset');
      fieldset.id = \`\${mode}-fieldset\`;
      fieldset.style.cssText = 'display:grid;gap:12px;border:1px solid #9388b6;padding:16px';
      const legend = document.createElement('legend');
      legend.textContent = 'Reading preferences';
      fieldset.append(legend);
      const choice = (tag: 'checkbox' | 'radio', id: string, name: string, value: string, label: string, checked = false, disabled = false): HTMLElement => {
        const host = document.createElement(\`stickly-\${tag}\`);
        host.id = \`\${mode}-\${id}\`;
        if (mode === 'light') host.setAttribute('inherit-tokens', '');
        host.setAttribute('theme', 'dark');
        host.setAttribute('name', name);
        host.setAttribute('value', value);
        host.setAttribute('aria-label', label);
        host.toggleAttribute('checked', checked);
        host.toggleAttribute('disabled', disabled);
        host.textContent = label;
        return host;
      };
      fieldset.append(choice('checkbox', 'reading', 'reading', 'yes', 'Save reading preferences', true), choice('checkbox', 'disabled', 'disabled-choice', 'excluded', 'Unavailable preference', true, true), choice('radio', 'beginner', 'level', 'beginner', 'Beginner', true), choice('radio', 'advanced', 'level', 'advanced', 'Advanced'), choice('radio', 'locked', 'level', 'locked', 'Unavailable level', false, true));
      const reset = document.createElement('button');
      reset.type = 'reset';
      reset.textContent = 'Reset preferences';
      const output = document.createElement('output');
      output.id = \`\${mode}-form-data\`;
      const refresh = (): void => {
        output.textContent = JSON.stringify(Array.from(new FormData(form)));
      };
      form.addEventListener('change', refresh);
      form.addEventListener('reset', () => setTimeout(refresh, 0));
      form.append(fieldset, reset, output);
      const external = document.createElement('div');
      external.style.cssText = 'display:grid;gap:12px;padding-top:12px';
      const externalCheck = choice('checkbox', 'external-check', 'external', 'linked', 'Preference outside the form', true);
      const externalRadio = choice('radio', 'external-radio', 'level', 'external', 'Level outside the form');
      externalCheck.setAttribute('form', form.id);
      externalRadio.setAttribute('form', form.id);
      external.append(externalCheck, externalRadio);
      const otherForm = document.createElement('form');
      otherForm.id = \`\${mode}-other-form\`;
      section.append(heading, form, external, otherForm);
      root.append(section);
      setTimeout(refresh, 0);
    }
    return root;
  }
}`,...l.parameters?.docs?.source}}};const U=["InputStates","TextareaStates","ChoiceForms"];export{l as ChoiceForms,i as InputStates,c as TextareaStates,U as __namedExportsOrder,P as default};
