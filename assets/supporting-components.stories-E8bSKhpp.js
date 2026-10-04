import"./browser-D-D48LCx.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const v={title:"Components/Supporting components",parameters:{layout:"fullscreen"}};function a(){const e=document.createElement("main");return e.style.cssText="display:grid;gap:24px;box-sizing:border-box;padding:24px;min-height:100vh;background:#191430;color:#fffaf1;font:16px Nunito,sans-serif",e}const i={render:()=>{const e=a();e.setAttribute("role","radiogroup"),e.setAttribute("aria-label","Review timing");for(const[t,o,r]of[["Review now",!0,!1],["Review tomorrow",!1,!1],["Review later",!1,!0]]){const n=document.createElement("stickly-radio");n.setAttribute("name","review-timing"),n.setAttribute("theme","dark"),n.setAttribute("value",t),n.toggleAttribute("checked",o),n.toggleAttribute("disabled",r),n.textContent=t,e.append(n)}return e}},c={render:()=>{const e=a();for(const[t,o]of[["success","Your words are saved."],["warning","Your review is due."],["error","We could not save your changes. Try again."]]){const r=document.createElement("stickly-banner");r.setAttribute("type",t),r.textContent=o,e.append(r)}return e}},l={render:()=>{const e=a();for(const[t,o,r]of[["pagination","Previous page","←"],["pagination","Next page","→"],["pronunciation","Play pronunciation","♪"],["close","Close","×"],["footer-link","Privacy policy","Privacy policy"]]){const n=document.createElement("stickly-compact-action");n.setAttribute("profile",t),n.setAttribute("aria-label",o),n.textContent=r,e.append(n)}return e}},d={render:()=>{const e=a();for(const[t,o]of[["column-toggle","＋"],["contact-close","×"],["intro-close","×"],["category-all","All articles"],["category","Learning tips"],["blog-reset","Reset filters"],["segment","Weekly"],["text-filter","Clear filters"],["text-restart","Restart practice"],["text-retry","Try again"],["premium-link","Discover Premium"],["resource-link","Help center"],["related-link","Related words"],["synonym-link","home"],["pair-link","house → Haus"]]){const r=document.createElement("section");r.style.cssText="position:relative;display:flex;align-items:center;min-height:56px;gap:20px";const n=document.createElement("span");n.textContent=t,n.style.cssText="width:160px";const s=document.createElement("stickly-one-off-action");s.setAttribute("profile",t),s.setAttribute("aria-label",o),s.textContent=o,r.append(n,s),e.append(r)}return e}},p={render:()=>{const e=a(),t=document.createElement("p");t.append("Saved words: ");for(const o of["learned","due","success"]){const r=document.createElement("stickly-highlight");r.setAttribute("variant",o),r.textContent=o,t.append(r," ")}return e.append(t),e}},u={render:()=>{const e=a(),t=document.createElement("stickly-smart-translation-list");return t.style.cssText="max-width:520px",t.cards=[["🇬🇧","house"],["🇫🇷","maison"]].map(([o,r])=>{const n=document.createElement("stickly-smart-translation-card");return n.presentation={flag:o,translation:r,action:"save",actionLabel:"Learn word"},n.addEventListener("cardAction",()=>{n.presentation={flag:o,translation:r,action:"remove",actionLabel:"Remove word"}}),n}),e.append(t),e}},m={render:()=>{const e=a();e.style.paddingTop="180px";const t=document.createElement("p");t.textContent="A remembered word appears in context: ";const o=document.createElement("stickly-highlight-anchor"),r=document.createElement("stickly-highlight");r.textContent="Haus";const n=document.createElement("section");return n.slot="bubble",n.style.cssText="padding:16px;border-radius:16px;background:#392d56;color:#fffaf1;font:16px Nunito,sans-serif",n.textContent="Haus means house.",o.append(r,n),t.append(o),e.append(t),e}},g={render:()=>{const e=a(),t=document.createElement("stickly-review-bridge-view");t.style.maxWidth="520px",t.presentation={status:"prompt",message:"You remembered this word. Ready for the next review?",label:"Continue reviewing",reviewLabel:"Review words",laterLabel:"Later"};for(const o of["review-bridge-accepted","review-bridge-dismissed"])t.addEventListener(o,()=>{t.presentation={...t.presentation,status:"complete",message:o==="review-bridge-accepted"?"Your review is ready.":"You can continue later."}});return e.append(t),e}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.setAttribute('role', 'radiogroup');
    root.setAttribute('aria-label', 'Review timing');
    for (const [label, checked, disabled] of [['Review now', true, false], ['Review tomorrow', false, false], ['Review later', false, true]] as const) {
      const radio = document.createElement('stickly-radio');
      radio.setAttribute('name', 'review-timing');
      radio.setAttribute('theme', 'dark');
      radio.setAttribute('value', label);
      radio.toggleAttribute('checked', checked);
      radio.toggleAttribute('disabled', disabled);
      radio.textContent = label;
      root.append(radio);
    }
    return root;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    for (const [type, label] of [['success', 'Your words are saved.'], ['warning', 'Your review is due.'], ['error', 'We could not save your changes. Try again.']]) {
      const banner = document.createElement('stickly-banner');
      banner.setAttribute('type', type);
      banner.textContent = label;
      root.append(banner);
    }
    return root;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    for (const [profile, label, symbol] of [['pagination', 'Previous page', '←'], ['pagination', 'Next page', '→'], ['pronunciation', 'Play pronunciation', '♪'], ['close', 'Close', '×'], ['footer-link', 'Privacy policy', 'Privacy policy']]) {
      const control = document.createElement('stickly-compact-action');
      control.setAttribute('profile', profile);
      control.setAttribute('aria-label', label);
      control.textContent = symbol;
      root.append(control);
    }
    return root;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    for (const [profile, label] of [['column-toggle', '＋'], ['contact-close', '×'], ['intro-close', '×'], ['category-all', 'All articles'], ['category', 'Learning tips'], ['blog-reset', 'Reset filters'], ['segment', 'Weekly'], ['text-filter', 'Clear filters'], ['text-restart', 'Restart practice'], ['text-retry', 'Try again'], ['premium-link', 'Discover Premium'], ['resource-link', 'Help center'], ['related-link', 'Related words'], ['synonym-link', 'home'], ['pair-link', 'house → Haus']]) {
      const row = document.createElement('section');
      row.style.cssText = 'position:relative;display:flex;align-items:center;min-height:56px;gap:20px';
      const name = document.createElement('span');
      name.textContent = profile;
      name.style.cssText = 'width:160px';
      const control = document.createElement('stickly-one-off-action');
      control.setAttribute('profile', profile);
      control.setAttribute('aria-label', label);
      control.textContent = label;
      row.append(name, control);
      root.append(row);
    }
    return root;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface(),
      text = document.createElement('p');
    text.append('Saved words: ');
    for (const variant of ['learned', 'due', 'success']) {
      const highlight = document.createElement('stickly-highlight');
      highlight.setAttribute('variant', variant);
      highlight.textContent = variant;
      text.append(highlight, ' ');
    }
    root.append(text);
    return root;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface(),
      list = document.createElement('stickly-smart-translation-list') as SticklySmartTranslationList;
    list.style.cssText = 'max-width:520px';
    list.cards = [['🇬🇧', 'house'], ['🇫🇷', 'maison']].map(([flag, translation]) => {
      const card = document.createElement('stickly-smart-translation-card') as SticklySmartTranslationCard;
      card.presentation = {
        flag,
        translation,
        action: 'save',
        actionLabel: 'Learn word'
      };
      card.addEventListener('cardAction', () => {
        card.presentation = {
          flag,
          translation,
          action: 'remove',
          actionLabel: 'Remove word'
        };
      });
      return card;
    });
    root.append(list);
    return root;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface();
    root.style.paddingTop = '180px';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'A remembered word appears in context: ';
    const anchor = document.createElement('stickly-highlight-anchor');
    const word = document.createElement('stickly-highlight');
    word.textContent = 'Haus';
    const bubble = document.createElement('section');
    bubble.slot = 'bubble';
    bubble.style.cssText = 'padding:16px;border-radius:16px;background:#392d56;color:#fffaf1;font:16px Nunito,sans-serif';
    bubble.textContent = 'Haus means house.';
    anchor.append(word, bubble);
    paragraph.append(anchor);
    root.append(paragraph);
    return root;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = surface(),
      bridge = document.createElement('stickly-review-bridge-view') as any;
    bridge.style.maxWidth = '520px';
    bridge.presentation = {
      status: 'prompt',
      message: 'You remembered this word. Ready for the next review?',
      label: 'Continue reviewing',
      reviewLabel: 'Review words',
      laterLabel: 'Later'
    };
    for (const type of ['review-bridge-accepted', 'review-bridge-dismissed']) bridge.addEventListener(type, () => {
      bridge.presentation = {
        ...bridge.presentation,
        status: 'complete',
        message: type === 'review-bridge-accepted' ? 'Your review is ready.' : 'You can continue later.'
      };
    });
    root.append(bridge);
    return root;
  }
}`,...g.parameters?.docs?.source}}};const w=["Radios","Banners","CompactActions","NativeActionProfiles","Highlights","SmartTranslations","HighlightAnchor","ReviewBridge"];export{c as Banners,l as CompactActions,m as HighlightAnchor,p as Highlights,d as NativeActionProfiles,i as Radios,g as ReviewBridge,u as SmartTranslations,w as __namedExportsOrder,v as default};
