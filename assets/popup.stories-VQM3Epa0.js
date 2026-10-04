import{s as U,p as k,d as B,q as G}from"./presentations-D8wb5jBW.js";import"./browser-D-D48LCx.js";import"./icon-DyfOqEUK.js";import"./tokens-BqrQmc1Q.js";import"./accordion-presentation-2DGsMdRP.js";import"./accordion-DGF6Fpw0.js";const I={title:"Surfaces/Popup",parameters:{layout:"fullscreen"}};function s(e,n=360,c){const i=U(),a=k();if(i.style.padding="16px",a.style.width=`${n}px`,e&&(a.presentation=e(a.presentation)),c){const l=c==="result"?B():G();l.slot=c==="result"?"results":"quota",a.append(l)}return a.addEventListener("popupAction",l=>{const o=l.detail,r=a.presentation;if(o.startsWith("highlights-")&&(a.presentation={...r,highlights:{...r.highlights,selected:o.slice(11),status:""}}),(o==="pdf-stickly"||o==="pdf-native")&&(a.presentation={...r,pdf:{...r.pdf,selected:o==="pdf-stickly"?"stickly":"native"}}),o==="site"&&!r.site.pending){const Q=!r.site.enabled;a.presentation={...r,site:{...r.site,enabled:Q,title:`${Q?"Enabled":"Disabled"} on www.norberthires.blog`,siteActionLabel:Q?"Disable site":"Enable site",error:""}}}o==="tab"&&!r.site.pending&&(a.presentation={...r,site:{...r.site,tabActionLabel:r.site.tabActionLabel==="Pause this tab"?"Resume this tab":"Pause this tab"}})}),i.append(a),i}const N=(e,n=!1,c="")=>s(i=>({...i,highlights:{...i.highlights,selected:e,pending:n,status:c}})),d=e=>s(n=>({...n,site:{...n.site,...e}})),t=e=>s(n=>({...n,pdf:{...n.pdf,...e}})),u={render:()=>s()},p={render:()=>N("due")},m={render:()=>N("off")},g={render:()=>N("all",!0,"Saving…")},f={render:()=>N("all",!1,"Could not save your highlight preference. Try again.")},h={render:()=>d({enabled:!1,title:"Disabled on www.norberthires.blog",siteActionLabel:"Enable site"})},b={render:()=>d({tabActionLabel:"Resume this tab"})},S={render:()=>d({pending:!0})},v={render:()=>d({error:"Could not save website access. Try again."})},w={render:()=>d({showSiteAction:!1,title:"Open a website to change its access."})},P={render:()=>d({title:"Enabled on language-learning.publications.example.org"})},E={render:()=>s(void 0,320)},y={render:()=>t({selected:"native"})},D={render:()=>t({pending:!0})},H={render:()=>t({selected:"native",showError:!0,error:"Could not update the PDF reader setting."})},L={render:()=>t({showOpen:!0})},T={render:()=>t({showOpen:!0,showError:!0})},O={render:()=>t({defaultVisible:!1,manualVisible:!0})},A={render:()=>t({defaultVisible:!1,unsupportedVisible:!0})},C={render:()=>t({defaultVisible:!1})},V={render:()=>s(e=>({...e,mission:{...e.mission,visible:!0}}))},x={render:()=>s(e=>({...e,translation:{...e.translation,value:"Haus",detectedFlag:"🇩🇪",detectedLanguage:"German"},languages:{...e.languages,visible:!0}}),360,"result")},q={render:()=>s(e=>({...e,translation:{...e.translation,value:"Haus",showError:!0}}))},R={render:()=>s(e=>({...e,translation:{...e.translation,showQuota:!0}}),360,"quota")},F={render:()=>s(e=>({...e,translation:{...e.translation,value:"Haus",loading:!0}}))};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => render()
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => highlights('due')
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => highlights('off')
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => highlights('all', true, 'Saving…')
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => highlights('all', false, 'Could not save your highlight preference. Try again.')
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => site({
    enabled: false,
    title: 'Disabled on www.norberthires.blog',
    siteActionLabel: 'Enable site'
  })
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => site({
    tabActionLabel: 'Resume this tab'
  })
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => site({
    pending: true
  })
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => site({
    error: 'Could not save website access. Try again.'
  })
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => site({
    showSiteAction: false,
    title: 'Open a website to change its access.'
  })
}`,...w.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => site({
    title: 'Enabled on language-learning.publications.example.org'
  })
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => render(undefined, 320)
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    selected: 'native'
  })
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    pending: true
  })
}`,...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    selected: 'native',
    showError: true,
    error: 'Could not update the PDF reader setting.'
  })
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    showOpen: true
  })
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    showOpen: true,
    showError: true
  })
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    defaultVisible: false,
    manualVisible: true
  })
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    defaultVisible: false,
    unsupportedVisible: true
  })
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => pdf({
    defaultVisible: false
  })
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => render(d => ({
    ...d,
    mission: {
      ...d.mission,
      visible: true
    }
  }))
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => render(d => ({
    ...d,
    translation: {
      ...d.translation,
      value: 'Haus',
      detectedFlag: '🇩🇪',
      detectedLanguage: 'German'
    },
    languages: {
      ...d.languages,
      visible: true
    }
  }), 360, 'result')
}`,...x.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => render(d => ({
    ...d,
    translation: {
      ...d.translation,
      value: 'Haus',
      showError: true
    }
  }))
}`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => render(d => ({
    ...d,
    translation: {
      ...d.translation,
      showQuota: true
    }
  }), 360, 'quota')
}`,...R.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => render(d => ({
    ...d,
    translation: {
      ...d.translation,
      value: 'Haus',
      loading: true
    }
  }))
}`,...F.parameters?.docs?.source}}};const J=["Default","DueOnly","HighlightsOff","HighlightSaving","HighlightError","SiteDisabled","TabPaused","SiteSaving","SiteError","UnavailablePage","LongHostname","Narrow","BrowserPdfDefault","PdfSaving","PdfSaveError","CurrentPdf","PdfOpenError","ManualPdf","UnsupportedPdf","NoPdfCapability","PracticeAvailable","TranslationResult","TranslationError","TranslationQuota","TranslationLoading"];export{y as BrowserPdfDefault,L as CurrentPdf,u as Default,p as DueOnly,f as HighlightError,g as HighlightSaving,m as HighlightsOff,P as LongHostname,O as ManualPdf,E as Narrow,C as NoPdfCapability,T as PdfOpenError,H as PdfSaveError,D as PdfSaving,V as PracticeAvailable,h as SiteDisabled,v as SiteError,S as SiteSaving,b as TabPaused,q as TranslationError,F as TranslationLoading,R as TranslationQuota,x as TranslationResult,w as UnavailablePage,A as UnsupportedPdf,J as __namedExportsOrder,I as default};
