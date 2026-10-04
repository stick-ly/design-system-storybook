import{d as F,c as S}from"./browser-D-D48LCx.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";F();S();const H={title:"Components/Fields",parameters:{docs:{description:{component:"Plain native web components using the same field skin as Angular adapters. "}}}};function A(r){const n=document.createElement("main");n.style.cssText="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:24px;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif";for(const o of["light","dark"])for(const t of["default","empty","disabled","readonly","error","helper","small","large"]){const e=document.createElement(`stickly-${r}`);e.setAttribute("theme",o),e.setAttribute("label",`${o} ${t}`),e.setAttribute("name",`${r}-${o}-${t}`),e.setAttribute("control-id",`${r}-${o}-${t}`),e.setAttribute("placeholder",r==="input"?"Translate…":"Add a surrounding sentence…"),t!=="empty"&&(e.value=r==="input"?"Vocabulary":`La casa está en la colina.
日本語 Français العربية`),(t==="disabled"||t==="readonly")&&e.setAttribute(t,""),(t==="small"||t==="large")&&e.setAttribute("size",t),t==="error"&&(e.setAttribute("invalid",""),e.setAttribute("error-text","Please try again")),t==="helper"&&e.setAttribute("helper-text","Helpful description"),n.append(e)}return n}const l={render:()=>A("input")},m={render:()=>A("textarea")},u={render:()=>{const r=document.createElement("main");r.style.cssText="display:grid;gap:24px;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif";for(const n of["shadow","light"]){const o=document.createElement("section");o.dataset.choiceMode=n;const t=document.createElement("h2");t.textContent=n==="shadow"?"Isolated native choices":"Inherited native choices";const e=document.createElement("form");e.id=`${n}-choice-form`,e.style.cssText="display:grid;gap:12px";const i=document.createElement("fieldset");i.id=`${n}-fieldset`,i.style.cssText="display:grid;gap:12px;border:1px solid #9388b6;padding:16px";const a=document.createElement("legend");a.textContent="Reading preferences",i.append(a);const d=(E,k,$,T,v,w=!1,C=!1)=>{const s=document.createElement(`stickly-${E}`);return s.id=`${n}-${k}`,n==="light"&&s.setAttribute("inherit-tokens",""),s.setAttribute("theme","dark"),s.setAttribute("name",$),s.setAttribute("value",T),s.setAttribute("aria-label",v),s.toggleAttribute("checked",w),s.toggleAttribute("disabled",C),s.textContent=v,s};i.append(d("checkbox","reading","reading","yes","Save reading preferences",!0),d("checkbox","disabled","disabled-choice","excluded","Unavailable preference",!0,!0),d("radio","beginner","level","beginner","Beginner",!0),d("radio","advanced","level","advanced","Advanced"),d("radio","locked","level","locked","Unavailable level",!1,!0));const p=document.createElement("button");p.type="reset",p.textContent="Reset preferences";const f=document.createElement("output");f.id=`${n}-form-data`;const h=()=>{f.textContent=JSON.stringify(Array.from(new FormData(e)))};e.addEventListener("change",h),e.addEventListener("reset",()=>setTimeout(h,0)),e.append(i,p,f);const g=document.createElement("div");g.style.cssText="display:grid;gap:12px;padding-top:12px";const x=d("checkbox","external-check","external","linked","Preference outside the form",!0),b=d("radio","external-radio","level","external","Level outside the form");x.setAttribute("form",e.id),b.setAttribute("form",e.id),g.append(x,b);const y=document.createElement("form");y.id=`${n}-other-form`,o.append(t,e,g,y),r.append(o),setTimeout(h,0)}return r}},c={render:()=>{const r=document.createElement("main");r.style.cssText="display:grid;gap:24px;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif";for(const n of["light","dark"])for(const o of["small","medium","large"]){const t=document.createElement("section");t.dataset.focusRow=`${n}-${o}`,t.style.cssText="display:flex;align-items:start;gap:12px;flex-wrap:wrap";for(const i of["default","error"]){const a=document.createElement("stickly-input");a.setAttribute("theme",n),a.setAttribute("size",o),a.setAttribute("aria-label",`${n} ${o} ${i}`),a.style.cssText="flex:1;min-width:120px",a.value="Haus",i==="error"&&a.setAttribute("invalid",""),t.append(a)}const e=document.createElement("stickly-action");e.setAttribute("size",o),e.textContent="Translate",t.append(e),r.append(t)}return r}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => render('input')
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => render('textarea')
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('main');
    root.style.cssText = 'display:grid;gap:24px;padding:24px;background:#191430;color:#fffaf1;font-family:Nunito,sans-serif';
    for (const theme of ['light', 'dark']) {
      for (const size of ['small', 'medium', 'large']) {
        const row = document.createElement('section');
        row.dataset.focusRow = \`\${theme}-\${size}\`;
        row.style.cssText = 'display:flex;align-items:start;gap:12px;flex-wrap:wrap';
        for (const state of ['default', 'error']) {
          const input = document.createElement('stickly-input') as any;
          input.setAttribute('theme', theme);
          input.setAttribute('size', size);
          input.setAttribute('aria-label', \`\${theme} \${size} \${state}\`);
          input.style.cssText = 'flex:1;min-width:120px';
          input.value = 'Haus';
          if (state === 'error') input.setAttribute('invalid', '');
          row.append(input);
        }
        const button = document.createElement('stickly-action');
        button.setAttribute('size', size);
        button.textContent = 'Translate';
        row.append(button);
        root.append(row);
      }
    }
    return root;
  }
}`,...c.parameters?.docs?.source},description:{story:"Tab through equal-height controls to inspect focus paint without layout changes.",...c.parameters?.docs?.description}}};const P=["InputStates","TextareaStates","ChoiceForms","InternalFocus"];export{u as ChoiceForms,l as InputStates,c as InternalFocus,m as TextareaStates,P as __namedExportsOrder,H as default};
