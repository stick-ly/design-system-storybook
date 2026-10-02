import{b as A,r as z,c as j,e as it,f as F,g as ot,h as rt,j as at,k as nt,l as B,m as st,d as lt,a as ct}from"./icon-B1lV_IqI.js";import{t as f,c as D}from"./tokens-BqrQmc1Q.js";import{d as dt,a as ht}from"./accordion-DGF6Fpw0.js";function W(a){a.setAttribute("role","radiogroup"),A(a,"radio-group","stickly-radio-group{display:grid;gap:6px}stickly-radio-group>[data-stickly-projection]{display:contents}")}z("stickly-radio-group",W);function pt(a=customElements){a.get("stickly-radio-group")||a.define("stickly-radio-group",class extends HTMLElement{connectedCallback(){W(this)}})}const ut="stickly-paginator{display:block}stickly-paginator .stickly-pagination{display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid rgb(var(--color-border-rgb)/.2);padding:8px 16px;font-size:14px;color:var(--color-text-muted)}stickly-paginator .stickly-pagination-group{display:flex;align-items:center;gap:8px}stickly-paginator stickly-select{width:96px}stickly-paginator .stickly-pagination-actions{display:flex;gap:4px}@media(max-width:390px){stickly-paginator .stickly-pagination{flex-wrap:wrap}}";function P(a){const t=a.presentation;if(!t)return;A(a,"paginator",ut);let e=a.querySelector(".stickly-pagination");if(!e){e=a.ownerDocument.createElement("div"),e.className="stickly-pagination";const o=a.ownerDocument.createElement("div");o.className="stickly-pagination-group";const r=a.ownerDocument.createElement("span");r.setAttribute("data-page-size-label","");const l=a.ownerDocument.createElement("stickly-select");l.setAttribute("size","small"),l.setAttribute("theme","dark"),l.setAttribute("inherit-tokens",""),o.appendChild(r),o.appendChild(l);const n=a.ownerDocument.createElement("div");n.className="stickly-pagination-group";const c=a.ownerDocument.createElement("span");c.setAttribute("data-page-range","");const s=a.ownerDocument.createElement("div");s.className="stickly-pagination-actions";for(const[d,u]of[["previous","‹"],["next","›"]]){const h=a.ownerDocument.createElement("stickly-compact-action");h.setAttribute("profile","pagination"),h.setAttribute("inherit-tokens",""),h.setAttribute("data-page-action",d),h.textContent=u,s.appendChild(h)}n.appendChild(c),n.appendChild(s),e.appendChild(o),e.appendChild(n),a.appendChild(e)}e.querySelector("[data-page-size-label]").textContent=t.rowsLabel,e.querySelector("[data-page-range]").textContent=t.rangeLabel;const i=e.querySelector("stickly-select");i.options=t.pageSizeOptions.map(o=>({value:String(o),label:String(o)})),i.value=String(t.pageSize),i.setAttribute("aria-label",t.rowsLabel),j(i);for(const o of["previous","next"]){const r=e.querySelector(`[data-page-action="${o}"]`);r.setAttribute("aria-label",o==="previous"?t.previousLabel:t.nextLabel),(o==="previous"?t.pageIndex<=0:t.pageIndex>=Math.ceil(t.length/t.pageSize)-1)?r.setAttribute("disabled",""):r.removeAttribute("disabled"),j(r)}}z("stickly-paginator",P);class bt extends HTMLElement{current;bound=!1;get presentation(){return this.current}set presentation(t){this.current=t,this.isConnected&&P(this)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}queueMicrotask(()=>{this.isConnected&&(P(this),!this.bound&&(this.bound=!0,this.addEventListener("value-change",t=>{if(t.target.localName!=="stickly-select")return;const e=Number(t.detail.value);Number.isFinite(e)&&e>0&&this.emit(0,e)}),this.addEventListener("click",t=>{const e=t.target.closest("[data-page-action]");!e||e.hasAttribute("disabled")||!this.current||this.emit(this.current.pageIndex+(e.dataset.pageAction==="previous"?-1:1),this.current.pageSize)})))})}emit(t,e){this.current&&this.dispatchEvent(new CustomEvent("page-change",{detail:{pageIndex:t,pageSize:e,length:this.current.length},bubbles:!0,composed:!0}))}}const gt=`
            :host {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: var(--space-md);
                font-size: var(--font-size-body);
                font-family: var(--font-family-regular);
                color: var(--color-text);
                background: transparent;
                padding: 0;
                border-radius: 0;
                box-sizing: border-box;
                min-width: min(300px, calc(100vw - 56px),var(--stickly-inline-content-max-width,300px));
                max-width: min(calc(100vw - 56px),var(--stickly-inline-content-max-width,calc(100vw - 56px)));
            }

            .header {
                display: flex;
                width: 100%;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
                gap: var(--space-md);
            }

            .header-left {
                display: flex;
                flex-direction: column;
                gap: var(--space-xs);
            }

            .word-to-learn {
                font-family: var(--font-family-bold);
                font-size: var(--font-size-large);
                color: var(--warning);
                display: flex;
                gap: var(--space-xxs);
                align-items: center;
            }

            .instruction {
                font-family: var(--font-family-regular);
                font-size: var(--font-size-small);
                color: var(--color-text-muted);
            }

            .quiz-section {
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                align-items: center;
                padding: var(--space-md);
                background: var(--overlay-subtle);
                border-radius: var(--radius-small);
            }

            .quiz-section.resolving {
                /* Typing controls render only after occurrence resolution. */
                opacity: 1;
            }

            .resolution-state {
                display: flex;
                align-items: center;
                gap: var(--space-sm);
                width: 100%;
                box-sizing: border-box;
                border-radius: var(--radius-small);
                padding: var(--space-sm);
                color: var(--color-text-muted);
                font-size: var(--font-size-small);
                line-height: 1.4;
            }

            .resolution-state.loading {
                min-height: 24px;
                padding: 0 var(--space-xs);
                background: transparent;
            }

            .resolution-state.fallback {
                border: 1px solid var(--border-subtle);
                background: var(--overlay-soft);
            }

            .resolution-spinner {
                width: 12px;
                height: 12px;
                flex: 0 0 auto;
                box-sizing: border-box;
                border: 2px solid var(--border-subtle);
                border-top-color: var(--warning);
                border-radius: 50%;
                animation: resolution-spin 800ms linear infinite;
            }

            .resolution-copy {
                display: flex;
                flex-direction: column;
                gap: var(--space-xxs);
            }

            .resolution-title {
                color: var(--color-text);
                font-family: var(--font-family-bold);
            }

            .attempts-section {
                display: flex;
                flex-direction: column;
                gap: var(--space-xs);
                align-items: center;
            }

            .attempt-label {
                font-size: var(--font-size-small);
                color: var(--color-text-muted);
                align-self: flex-start;
            }

            .submit-hint {
                min-height: 18px;
                color: var(--color-text-muted);
                font-size: var(--font-size-small);
                text-align: center;
            }

            .answer-feedback-region {
                display: contents;
            }

            .attempt-feedback {
                width: 100%;
                box-sizing: border-box;
                margin: 0;
                padding: var(--space-xs) var(--space-sm);
                border-radius: var(--radius-small);
                background: rgb(var(--color-amber-500-rgb) / 0.14);
                color: var(--warning);
                font-family: var(--font-family-bold);
                font-size: var(--font-size-small);
                line-height: 1.4;
                text-align: center;
            }

            .userInput, .attempt {
                display: flex;
                flex-direction: row;
                gap: var(--space-xs);
                justify-content: center;
                width: 100%;
            }

            .answer-slot-field {
                position: relative;
                width: 100%;
                min-width: 0;
                min-height: 32px;
            }

            .answer-slot-field .userInput {
                min-height: 32px;
                pointer-events: none;
            }

            .touch-answer {
                display: block;
                position: absolute;
                inset: 0;
                z-index: 1;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                min-height: 32px;
                margin: 0;
                border: 0;
                border-radius: var(--radius-xs);
                padding: 0;
                appearance: none;
                background: transparent;
                color: transparent;
                caret-color: transparent;
                cursor: text;
                font-size: 16px;
                opacity: 0.02;
            }

            .touch-answer:focus {
                outline: 0;
            }

            .touch-answer.composing {
                opacity: 1;
                color: var(--color-text);
                caret-color: var(--color-text);
                background: var(--color-surface);
            }

            .answer-slot-field:focus-within .charBlock.is-active {
                outline: 2px solid rgb(var(--color-amber-500-rgb) / 0.6);
                outline-offset: 1px;
            }

            .mobile-practice-intro {
                display: flex;
                flex-direction: column;
                gap: var(--space-md);
                padding: var(--space-sm) 0 var(--space-xs);
            }

            .mobile-practice-copy {
                display: flex;
                flex-direction: column;
                gap: var(--space-xs);
            }

            .mobile-practice-eyebrow {
                color: var(--color-accent);
                font: 11px/1.2 var(--font-family-bold);
                letter-spacing: 0.08em;
                text-transform: uppercase;
            }

            .mobile-practice-title {
                color: var(--color-text);
                font: var(--font-size-large)/1.25 var(--font-family-bold);
            }

            .mobile-practice-note {
                color: var(--color-text-muted);
                font: var(--font-size-small)/1.45 var(--font-family-regular);
            }

            [hidden] {
                display: none !important;
            }

            .charBlock {
                height: 32px;
                width: 32px;
                border-radius: var(--radius-xs);
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--color-canvas);
                background-color: var(--color-surface-subtle);
                font-family: var(--font-family-bold);
                font-size: var(--font-size-body);
                transition: all 0.2s var(--transition-smooth);
            }

            .charBlock.isHint {
                color: var(--color-text-muted);
            }

            .charBlock.idle {
                width: 22px;
                height: 22px;
                align-self: center;
                border: 1px dashed rgb(var(--color-white-rgb) / 0.24);
                background: rgb(var(--color-white-rgb) / 0.025);
                opacity: 0.8;
                box-shadow: none;
            }

            .charBlock.idle::after {
                content: '';
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: var(--color-text-muted);
                opacity: 0.7;
            }

            .charBlock.idle-tail-start {
                margin-left: var(--space-xxs);
            }

            .charBlock.correct {
                background-color: var(--success);
                color: var(--color-text);
            }

            .charBlock.isInSolution {
                background-color: var(--warning);
                color: var(--color-text);
            }

            .charBlock.notInSolution {
                background-color: rgb(var(--color-danger-rgb) / 0.3);
                color: var(--color-text);
            }

            .blinking-cursor {
                animation: blink 1s infinite;
                content: '|';
            }

            .quiz-footer {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: var(--space-sm);
                margin-top: var(--space-xs);
                padding-top: var(--space-sm);
                border-top: 1px solid var(--border-subtle);
            }

            .give-up-link {
                border: 0;
                background: transparent;
                color: var(--color-text-muted);
                font-family: var(--font-family-regular);
                font-size: var(--font-size-small);
                line-height: 1.4;
                text-decoration: underline;
                text-underline-offset: 2px;
                cursor: pointer;
                padding: 0;
            }

            .give-up-link:hover {
                color: var(--color-text);
            }

            .give-up-link:focus-visible {
                outline: 2px solid rgb(var(--color-amber-500-rgb) / 0.45);
                outline-offset: 2px;
                border-radius: 2px;
            }

            .legend {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-sm);
                justify-content: center;
            }

            .legend-item {
                display: flex;
                align-items: center;
                gap: var(--space-xs);
                font-size: var(--font-size-small);
                color: var(--color-text-muted);
            }

            .legend-color {
                width: 12px;
                height: 12px;
                border-radius: 2px;
            }

            .legend-color.correct {
                background-color: var(--success);
            }

            .legend-color.partial {
                background-color: var(--warning);
            }

            .legend-color.wrong {
                background-color: rgb(var(--color-danger-rgb) / 0.3);
            }

            .legend-color.hint {
                background-color: var(--color-surface-subtle);
                opacity: 0.5;
            }

            .success-card {
                display: flex;
                flex-direction: column;
                gap: var(--space-md);
                width: 100%;
                min-width: 0;
                animation: success-in 180ms var(--transition-smooth);
            }

            .success-heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: var(--space-md);
            }

            .success-title {
                font-family: var(--font-family-bold);
                font-size: var(--font-size-large);
                color: var(--color-text);
            }

            .dismiss-button, .retry-button {
                border: 0;
                border-radius: var(--radius-small);
                font: inherit;
                cursor: pointer;
            }

            .dismiss-button {
                padding: var(--space-xs);
                color: var(--color-text-muted);
                background: transparent;
                font-size: var(--font-size-large);
                line-height: 1;
            }

            .meaning {
                color: var(--color-text);
                font-family: var(--font-family-bold);
                font-size: var(--font-size-body);
            }

            .insight {
                display: flex;
                flex-direction: column;
                gap: var(--space-xs);
            }

            .insight-label {
                color: var(--color-text-muted);
                font-size: 11px;
                font-family: var(--font-family-bold);
                text-transform: uppercase;
                letter-spacing: 0.04em;
            }

            .insight-value {
                color: var(--color-text);
                font-size: var(--font-size-small);
                line-height: 1.35;
                overflow-wrap: anywhere;
            }

            .learning-example {
                display: flex;
                flex-direction: column;
                gap: var(--space-xxs);
            }

            .learning-example-line {
                color: var(--color-text);
                font-size: var(--font-size-small);
                line-height: 1.45;
                overflow-wrap: anywhere;
                text-align: start;
            }

            .learning-example-line.target {
                color: var(--color-text-muted);
            }

            .learning-example-line .focus {
                color: var(--color-accent);
                font-family: var(--font-family-bold);
            }

            .principal-forms {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-xs);
                margin-top: var(--space-xxs);
            }

            .learning-facts {
                display: flex;
                flex-direction: column;
                gap: var(--space-xs);
            }

            .learning-fact-label {
                color: var(--color-text-muted);
                font-family: var(--font-family-bold);
            }

            .principal-form {
                min-width: 0;
                overflow-wrap: anywhere;
                padding: var(--space-xxs) var(--space-xs);
                border: 1px solid var(--border-subtle);
                border-radius: var(--radius-small);
                color: var(--color-text);
                font-size: 12px;
            }

            .progress-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-sm);
            }

            .progress-item {
                padding: var(--space-sm);
                border-radius: var(--radius-small);
                background: var(--overlay-soft);
            }

            .progress-label {
                color: var(--color-text-muted);
                font-size: 12px;
            }

            .progress-value {
                margin-top: var(--space-xxs);
                color: var(--color-text);
                font-family: var(--font-family-bold);
            }

            .save-status {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: var(--space-sm);
                flex-wrap: wrap;
                min-height: 28px;
                color: var(--color-text-muted);
                font-size: var(--font-size-small);
            }

            .save-status.error {
                color: rgb(var(--color-accent-rgb) / 0.75);
            }

            .confidence-panel {
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                padding: var(--space-sm);
                border-radius: var(--radius-small);
                background: var(--overlay-soft);
            }

            .confidence-title {
                color: var(--color-text-muted);
                font-size: 12px;
            }

            .confidence-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-xs);
            }

            .confidence-button {
                border: 2px solid var(--border-subtle);
                border-radius: var(--radius-small);
                background: var(--overlay-soft);
                color: var(--color-text);
                font-family: var(--font-family-bold);
                font-size: var(--font-size-small);
                padding: var(--space-xs) var(--space-sm);
                cursor: pointer;
                transition: background var(--motion-fast) var(--ease-standard),
                    border-color var(--motion-fast) var(--ease-standard),
                    transform var(--motion-fast) var(--ease-standard);
            }

            .confidence-button:hover:not(:disabled) {
                border-color: rgb(var(--color-accent-rgb) / 0.45);
            }

            .confidence-button:active:not(:disabled) {
                transform: translateY(1px);
            }

            .confidence-button:disabled {
                opacity: 0.55;
                cursor: not-allowed;
            }

            .confidence-button.selected.hard {
                background: rgb(var(--color-danger-rgb) / 0.22);
                border-color: var(--color-danger);
                color: var(--color-text);
            }

            .confidence-button.selected.good {
                background: rgb(var(--color-accent-rgb) / 0.22);
                border-color: var(--color-accent);
                color: var(--color-text);
            }

            .confidence-button.selected.easy {
                background: rgb(var(--color-success-rgb) / 0.22);
                border-color: var(--color-success);
                color: var(--color-text);
            }

            .insight-toggle {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                border: 0;
                border-radius: var(--radius-small);
                background: var(--overlay-soft);
                color: var(--color-text-muted);
                font-family: var(--font-family-bold);
                font-size: var(--font-size-small);
                padding: var(--space-sm);
                cursor: pointer;
            }

            .insight-toggle:hover {
                color: var(--color-text);
            }

            .insight-toggle-icon {
                font-size: var(--font-size-body);
                line-height: 1;
            }

            .insight-panel {
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                padding: var(--space-sm);
                border-radius: var(--radius-small);
                background: var(--overlay-soft);
            }

            .review-reason {
                color: var(--color-text-muted);
                font-size: var(--font-size-small);
                line-height: 1.4;
                margin: 0;
            }

            .retry-button {
                padding: var(--space-xs) var(--space-sm);
                color: var(--color-text);
                background: var(--overlay-soft);
                border: 1px solid var(--border-subtle);
                font-family: var(--font-family-bold);
                font-size: var(--font-size-small);
                flex-shrink: 0;
            }

            @keyframes blink {
                0%, 49% {opacity: 1;}
                50%, 100% {opacity: 0;}
            }

            @keyframes success-in {
                from { opacity: 0; transform: translateY(4px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes resolution-spin {
                to { transform: rotate(360deg); }
            }

            @media (prefers-reduced-motion: reduce) {
                .blinking-cursor, .success-card, .resolution-spinner {
                    animation: none;
                }

                .charBlock {
                    transition: none;
                }
            }

            @media (hover: none), (pointer: coarse) {
                :host {
                    min-width: min(280px, calc(100vw - 32px));
                    max-width: calc(100vw - 32px);
                    gap: var(--space-sm);
                }

                .quiz-section {
                    padding: var(--space-sm);
                }

                .touch-answer {
                    display: block;
                }

                .give-up-link,
                .dismiss-button,
                .retry-button,
                .confidence-button,
                .insight-toggle {
                    min-height: 44px;
                }
            }

            :host([mobile-presentation]) {
                min-width: 0;
                width: 100%;
                max-width: 100%;
                gap: var(--space-sm);
            }

            :host([mobile-presentation]) .touch-answer {
                display: block;
            }

            :host([mobile-presentation]) .quiz-section {
                padding: var(--space-sm);
            }

            :host([mobile-presentation]) .answer-feedback-region {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: var(--space-sm);
                width: 100%;
                scroll-margin-block: var(--space-sm);
            }

            :host([mobile-presentation]) .attempt {
                gap: var(--space-xxs);
            }

            :host([mobile-presentation]) .attempt .charBlock {
                flex: 1 1 0;
                width: auto;
                min-width: 0;
                max-width: 32px;
                height: auto;
                min-height: 24px;
                aspect-ratio: 1;
                font-size: var(--font-size-small);
            }
        `;class mt extends HTMLElement{data;currentPhase;signatures=new Map;get presentation(){return this.data}set presentation(t){this.data=t,this.draw()}get renderRoot(){return this.shadowRoot}connectedCallback(){if(this.shadowRoot||this.attachShadow({mode:"open"}),Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}this.draw()}disconnectedCallback(){}action(t,e,i){this.dispatchEvent(new CustomEvent("quiz-view-action",{detail:{action:t,event:e,value:i}}))}button(t,e){this.shadowRoot.querySelector(t)?.addEventListener("click",i=>this.action(e,i))}text(t,e){const i=this.shadowRoot.querySelector(t);i&&i.textContent!==e&&(i.textContent=e)}initialize(t){if(this.currentPhase===t)return;this.currentPhase=t,this.signatures.clear();const e=this.shadowRoot;if(e.innerHTML=`<style>${f("extension")}${gt}
[data-quiz-header],[data-quiz-insight]{display:contents}[hidden]{display:none!important}</style>`,t==="empty")return;if(t==="success"){e.innerHTML+='<div class="success-card"><div class="success-heading"><div class="success-title"></div><button class="dismiss-button" type="button">×</button></div><div class="meaning" role="status" aria-live="polite"></div><div class="progress-row"><div class="progress-item"><div class="progress-label" data-proficiency></div><div class="progress-value" data-level></div></div><div class="progress-item"><div class="progress-label" data-review-label></div><div class="progress-value" data-review></div></div></div><div class="confidence-panel"><div class="confidence-title"></div><div class="confidence-buttons"><button class="confidence-button hard" type="button" data-confidence="hard"></button><button class="confidence-button good" type="button" data-confidence="good"></button><button class="confidence-button easy" type="button" data-confidence="easy"></button></div><div class="review-reason"></div></div><div class="save-status" role="status" aria-live="polite" aria-atomic="true"><span></span><button class="retry-button" type="button"></button></div><div class="insight"><button class="insight-toggle" type="button" aria-controls="word-insight-panel"><span data-insight-label></span><span class="insight-toggle-icon"></span></button><div data-quiz-insight></div></div></div>',this.button(".dismiss-button","dismiss"),this.button(".retry-button","retry"),this.button(".insight-toggle","insight");for(const r of e.querySelectorAll("[data-confidence]"))r.addEventListener("click",l=>{l.stopPropagation(),this.action("rating",l,r.dataset.confidence)});const o=e.querySelector(".success-card");o.addEventListener("pointerenter",r=>this.action("hover-start",r)),o.addEventListener("pointerleave",r=>this.action("hover-end",r)),o.addEventListener("focusin",r=>this.action("focus",r)),o.addEventListener("focusout",r=>this.action("focus",r));return}if(e.innerHTML+='<div class="header"><div class="header-left"><div class="word-to-learn"><span data-word></span><span data-audio style="display:contents"></span></div><div class="instruction"></div></div><span data-menu style="display:contents"></span></div>',t==="resolution"){e.innerHTML+='<div class="resolution-state" role="status"><span class="resolution-spinner" aria-hidden="true"></span><span class="resolution-copy"><span class="resolution-title"></span><span data-resolution-message></span></span></div>';return}e.innerHTML+='<div class="mobile-practice-intro" data-mobile-practice-intro><div class="mobile-practice-copy"><span class="mobile-practice-eyebrow"></span><span class="mobile-practice-title"></span><span class="mobile-practice-note"></span></div><stickly-button data-mobile-practice type="primary" full-width></stickly-button></div><div class="quiz-section" data-mobile-quiz-stage aria-busy="false"><div class="attempts-section"><div class="attempt-label"></div><div data-attempt-rows style="display:contents"></div></div><div class="answer-feedback-region" data-mobile-answer-feedback><div class="answer-slot-field" data-mobile-answer-field><input class="touch-answer" type="text" dir="auto" autocomplete="off" autocapitalize="none" autocorrect="off" enterkeyhint="done" spellcheck="false"><div class="userInput" dir="auto" aria-hidden="true"></div></div><p class="attempt-feedback" data-mobile-quiz-feedback role="status" aria-live="polite"></p><div class="submit-hint" aria-live="polite"></div></div><div class="quiz-footer"><button class="give-up-link" type="button"></button><div data-revealed style="display:contents"><div role="status"></div><button class="retry-button" type="button"></button></div><div class="legend"><div class="legend-item"><div class="legend-color correct"></div><span data-correct></span></div><div class="legend-item"><div class="legend-color partial"></div><span data-partial></span></div><div class="legend-item"><div class="legend-color wrong"></div><span data-wrong></span></div></div></div></div>',this.button("[data-mobile-practice]","start"),this.button(".give-up-link","give-up"),this.button("[data-revealed] .retry-button","dismiss");const i=e.querySelector(".touch-answer");i.addEventListener("beforeinput",o=>this.action("before-input",o,i.value)),i.addEventListener("compositionstart",()=>i.classList.add("composing")),i.addEventListener("compositionend",o=>{i.classList.remove("composing"),this.action("composition-end",o,i.value)}),i.addEventListener("input",o=>{o.isComposing||this.action("input",o,i.value)}),i.addEventListener("keydown",o=>{o.stopPropagation(),!o.isComposing&&o.key==="Enter"&&(o.preventDefault(),this.action("submit",o,i.value))})}hide(t,e){const i=this.shadowRoot.querySelector(t);i&&(i.hidden=e)}attach(t,e){const i=this.shadowRoot.querySelector(t);if(i&&!(e&&i.firstChild===e&&i.childNodes.length===1)){for(;i.firstChild;)i.removeChild(i.firstChild);e&&i.appendChild(e)}}draw(){const t=this.data;if(!t||!this.shadowRoot||(this.initialize(t.phase),this.toggleAttribute("mobile-presentation",t.mobile),t.phase==="empty"))return;if(t.phase==="success"){this.drawSuccess(t);return}const e=this.shadowRoot,i=t.labels;if(this.text("[data-word]",t.word),this.text(".instruction",t.instruction),this.attach("[data-audio]",t.audio),this.attach("[data-menu]",t.mobile?void 0:t.menu),t.phase==="resolution"){const n=e.querySelector(".resolution-state");n.className="resolution-state "+t.resolution,t.resolution==="loading"?n.setAttribute("aria-live","polite"):n.removeAttribute("aria-live"),this.hide(".resolution-spinner",t.resolution!=="loading"),this.hide(".resolution-title",t.resolution!=="fallback"),this.text(".resolution-title",i.quiz_resolution_fallback_title||""),this.text("[data-resolution-message]",t.resolutionMessage);return}this.hide("[data-mobile-practice-intro]",!t.mobile||t.practiceStarted),this.hide("[data-mobile-quiz-stage]",t.mobile&&!t.practiceStarted),this.text(".mobile-practice-eyebrow",i.context_recall_name||""),this.text(".mobile-practice-title",t.word),this.text(".mobile-practice-note",t.instruction),this.text("[data-mobile-practice]",i.context_recall_try||""),this.hide(".attempts-section",!t.attempts.length),this.text(".attempt-label",i.quiz_previous_attempts||"");const o=e.querySelector("[data-attempt-rows]");for(;o.children.length>t.attempts.length;)o.lastElementChild.remove();t.attempts.forEach((n,c)=>{const s=o.children[c]||Object.assign(o.appendChild(document.createElement("div")),{className:"attempt"});s.lang=t.targetLanguage,s.dir="auto",this.tiles(s,n,!0)});const r=e.querySelector(".touch-answer");r.lang=t.targetLanguage,r.setAttribute("aria-label",i.quiz_answer_slots_aria||""),!r.classList.contains("composing")&&r.value!==t.input&&(r.value=t.input),this.hide(".answer-slot-field",!t.showInput);const l=e.querySelector(".userInput");l.lang=t.targetLanguage,this.tiles(l,t.inputTiles,!1),this.hide(".attempt-feedback",!t.mobile||!t.attempts.length||t.complete),this.text(".attempt-feedback",i.common_try_again||""),this.text(".submit-hint",t.awaitingSubmit&&i.quiz_submit_hint||""),this.hide(".quiz-footer",t.showFooter===!1),this.hide(".give-up-link",!t.showGiveUp),this.text(".give-up-link",i.quiz_cannot_recall||""),this.hide("[data-revealed]",!t.answerRevealed),this.text("[data-revealed] [role=status]",i.quiz_answer_revealed||""),this.text("[data-revealed] .retry-button",i.common_close||""),this.hide(".legend",t.answerRevealed),this.text("[data-correct]",i.quiz_legend_correct||""),this.text("[data-partial]",i.quiz_legend_partial||""),this.text("[data-wrong]",i.quiz_legend_wrong||"")}tiles(t,e,i){for(;t.children.length>e.length;)t.lastElementChild.remove();e.forEach((o,r)=>{const l=t.children[r]||t.appendChild(document.createElement(i?"span":"div"));if(l.className="charBlock"+(o.state==="plain"?"":o.state==="partial"?" isInSolution":o.state==="wrong"?" notInSolution":o.state==="hint"?" isHint":" "+o.state)+(o.cursor?" is-active":"")+(o.idleTail?" idle-tail-start":""),i)l.setAttribute("aria-label",o.ariaLabel||""),l.textContent!==o.text&&(l.textContent=o.text);else{l.setAttribute("aria-hidden",String(o.state==="idle"));let n=l.querySelector(".blinking-cursor");o.cursor&&!n?(n=document.createElement("span"),n.className="blinking-cursor",n.textContent="|",l.prepend(n)):o.cursor||n?.remove();const c=Array.from(l.childNodes).find(s=>s.nodeType===Node.TEXT_NODE);c?c.textContent=o.text:l.append(document.createTextNode(o.text))}})}drawSuccess(t){const e=t.success;if(!e)return;const i=this.shadowRoot,o=t.labels;this.text(".success-title",o.quiz_success_title||""),this.hide(".dismiss-button",t.mobile),i.querySelector(".dismiss-button").setAttribute("aria-label",o.common_dismiss||""),this.text(".meaning",e.meaning),this.hide(".progress-row",!e.showProgress),this.text("[data-proficiency]",o.quiz_proficiency||""),this.text("[data-level]",`${e.previousLevel} → ${e.currentLevel}`),this.text("[data-review-label]",o.quiz_next_review||""),this.text("[data-review]",e.nextReview),this.text(".confidence-title",o.quiz_recall_feeling||"");for(const s of i.querySelectorAll("[data-confidence]")){const d=s.dataset.confidence;s.classList.toggle("selected",d===e.selectedRating),s.disabled=e.ratingDisabled,s.textContent!==o["quiz_rating_"+d]&&(s.textContent=o["quiz_rating_"+d]||"")}this.hide(".review-reason",!e.reviewReason),this.text(".review-reason",e.reviewReason),i.querySelector(".save-status").classList.toggle("error",e.persistenceError),this.text(".save-status > span",e.saveStatus),this.hide(".save-status .retry-button",!e.persistenceError),this.text(".save-status .retry-button",o.common_try_again||""),this.hide(".insight",!e.hasInsight),i.querySelector(".insight-toggle").setAttribute("aria-expanded",String(e.insightOpen)),this.text("[data-insight-label]",o.word_insight||""),this.text(".insight-toggle-icon",e.insightOpen?"−":"+");const r=i.querySelector("[data-quiz-insight]");if(!e.insightOpen){r.replaceChildren(),this.signatures.delete("insight");return}const l=JSON.stringify([e.insight,o]);if(this.signatures.get("insight")===l)return;this.signatures.set("insight",l),r.replaceChildren();const n=this.node("div","insight-panel");n.id="word-insight-panel",r.append(n);const c=e.insight;if(c.definition?this.labeled(n,o.word_definition||"",c.definition,c.definitionLanguage):n.append(this.node("div","insight-value",o[c.loading?"word_insight_loading":"word_insight_unavailable"]||"")),c.partOfSpeech){const s=this.node("div","insight-value",c.partOfSpeech);s.lang=c.explanationLanguage,s.dir="auto",n.append(s)}if(c.grammar&&this.labeled(n,o.word_grammar||"",c.grammar),c.features.length||c.forms.length){const s=this.node("div","learning-facts");s.append(this.node("div","insight-label",o.morphology||""));for(const d of c.features){const u=this.node("div","insight-value");u.append(this.node("span","learning-fact-label",d.label+":"),document.createTextNode(" "+d.value)),s.append(u)}if(c.forms.length){const d=this.node("div","principal-forms");for(const u of c.forms){const h=this.node("span","principal-form"),p=this.node("bdi","",u.form);p.lang=c.sourceLanguage,p.dir="auto",h.append(p,document.createTextNode(u.tags?" · "+u.tags:"")),d.append(h)}s.append(d)}n.append(s)}if(c.usage.length){const s=this.node("div","learning-facts");s.append(this.node("div","insight-label",o.usage||""));for(const d of c.usage){const u=this.node("div","insight-value");d.label&&u.append(this.node("span","learning-fact-label",d.label+":"),document.createTextNode(" "));const h=this.node("bdi","",d.value);h.lang=d.language,h.dir="auto",u.append(h),s.append(u)}n.append(s)}if(c.example){const s=c.example,d=this.node("div","learning-example");d.setAttribute("data-learning-pack-example",s.id),d.append(this.node("div","insight-label",o.more_context||""));for(const[u,h]of[s.source,s.target].entries()){const p=this.node("div","learning-example-line"+(u===1?" target":""));p.lang=u===0?s.sourceLanguage:s.targetLanguage,p.dir="auto",p.append(document.createTextNode(h.before),this.node("span","focus",h.focus),document.createTextNode(h.after)),d.append(p)}n.append(d)}}node(t,e="",i){const o=document.createElement(t);return o.className=e,i!==void 0&&(o.textContent=i),o}labeled(t,e,i,o){const r=this.node("div");r.append(this.node("div","insight-label",e));const l=this.node("div","insight-value",i);o&&(l.lang=o,l.dir="auto"),r.append(l),t.append(r)}}const ft=`


        :host {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            font-family: var(--font-family-regular);
            font-size: var(--font-size-body);
            line-height: 1.4;
            background: var(--gradient-primary);
            min-height: 100vh;
            color: var(--color-text);
            min-width: 0;
        }

        *, *::before, *::after { box-sizing: border-box; }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-lg);
            border-bottom: 1px solid var(--border-subtle);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: var(--space-sm);
        }

        .logo h3 {
            color: var(--color-text);
            font-family: var(--font-family-bold);
            font-size: var(--font-size-large);
            margin: 0;
        }

        .main-content {
            display: flex;
            flex-direction: column;
            gap: var(--space-lg);
            flex: 1;
            padding: var(--space-lg);
        }

        .summary-card,
        .site-card {
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
            padding: var(--space-md);
            border-radius: var(--radius-small);
            background: var(--overlay-subtle);
            border: 1px solid var(--border-subtle);
        }

        .summary-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-md);
            color: var(--color-text);
            font-size: var(--font-size-small);
        }

        .summary-row span,
        .site-card p {
            opacity: 0.82;
            margin: 0;
        }

        .summary-row strong {
            font-family: var(--font-family-semibold);
            text-align: right;
            min-width: 0;
            overflow-wrap: anywhere;
        }

        .summary-row-shortcut {
            align-items: center;
            flex-wrap: wrap;
        }

        .summary-shortcut {
            min-width: 0;
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            flex: 1 1 180px;
            justify-content: flex-end;
        }

        .summary-shortcut > stickly-button { flex: none; }

        .site-card {
            gap: var(--space-md);
        }

        .article-mission-card {
            border-color: rgb(var(--color-purple-300-rgb) / 0.62);
            box-shadow: 3px 3px 0 rgb(var(--color-purple-500-rgb) / 0.45);
        }

        .article-mission-card .section-label {
            color: var(--warning);
        }

        .site-card-copy {
            display: flex;
            flex-direction: column;
            gap: var(--space-xxs);
        }

        .site-card-copy h4 {
            margin: 0;
            font-size: var(--font-size-body);
            font-family: var(--font-family-semibold);
            overflow-wrap: anywhere;
        }

        .site-card-actions {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: var(--space-sm);
        }

        .site-card-actions > stickly-button {
            flex: 1 1 0;
            min-width: max-content;
        }

        .section-label {
            color: var(--color-accent);
            font-size: var(--font-size-small);
            font-family: var(--font-family-semibold);
            letter-spacing: 0.02em;
            text-transform: uppercase;
        }

        .translation-section {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
        }

        .info-text {
            display: flex;
            align-items: center;
            gap: var(--space-xs);
            color: var(--color-text);
            opacity: 0.8;
            font-size: var(--font-size-small);
        }

        .info-text img {
            width: 16px;
            height: 16px;
            opacity: 0.8;
            flex: none;
        }

        .info-text p { margin: 0; }

        .translation-box {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
        }

        .sidebyside {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: var(--space-sm);
            height: 48px;
        }

        .sidebyside > stickly-button { align-self: start; }

        .inputContainer {
            position: relative;
            min-width: 0;
            flex: 1 1 0;
            height: 100%;
        }

        .detectedLanguage {
            display: flex;
            align-items: center;
            position: absolute;
            top: 1px;
            right: 1px;
            height: calc(100% - 2px);
            padding: 0 var(--space-sm);
            cursor: pointer;
            color: var(--color-text);
            opacity: 0.8;
            font-size: 16px;
            transition: opacity 0.3s var(--transition-smooth);
        }

        .detectedLanguage:hover {
            opacity: 1;
        }

        .editLanguages {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .status-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-sm) var(--space-md);
            background: var(--overlay-subtle);
            border-radius: var(--radius-small);
            margin-top: auto;
        }

        .status-bar p {
            margin: 0;
            color: var(--color-text);
            opacity: 0.8;
            font-size: var(--font-size-small);
        }

        .bottom-buttons {
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
            padding-top: var(--space-md);
            border-top: 1px solid var(--border-subtle);
        }

        .error-text {
            color: var(--warning);
            font-size: var(--font-size-small);
            font-family: var(--font-family-medium);
            display: flex;
            align-items: center;
            gap: var(--space-xs);
            padding: var(--space-sm) var(--space-md);
            background: var(--overlay-accent-soft);
            border-radius: var(--radius-small);
        }

        .inputContainer.loading stickly-input {
            background: var(--overlay-subtle);
            pointer-events: none;
            opacity: 0.5;
        }

        .language-management {
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
            padding: var(--space-sm);
            border-radius: var(--radius-small);
            transition: all 0.3s var(--transition-smooth);
        }

        .language-management.editing {
            background: var(--overlay-subtle);
        }

        .language-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-md);
        }

        .language-selector-wrapper {
            flex-grow: 1;
        }

        .edit-languages-button {
            width: 100%;
            justify-content: center;
        }

        :host { --stickly-field-unit:16px; } [hidden] { display:none!important; } slot { display:contents; } stickly-input { display:block; width:100%; min-width:0; height:100%; }
`;class vt extends HTMLElement{data=null;autofocusDone=!1;get presentation(){return this.data}set presentation(t){this.data=t,this.renderPresentation()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${ft}</style><div class="header"><div class="logo"><img alt="Stickly" width="26" height="26"><h3>Stickly</h3></div><stickly-button type="ghost" data-action="settings"></stickly-button></div><div class="main-content">
   <section class="site-card pdf-default"><div class="site-card-copy"><p class="section-label"></p><h4></h4></div><div class="site-card-actions" role="group"><stickly-button size="small" data-action="pdf-stickly"></stickly-button><stickly-button size="small" data-action="pdf-native"></stickly-button></div><div class="site-card-actions pdf-open"><stickly-button type="ghost" size="small" data-action="pdf-open"></stickly-button></div><p class="pdf-error" role="status"></p></section>
   <section class="site-card pdf-manual"><div class="site-card-copy"><p class="section-label"></p><h4></h4></div><div class="site-card-actions"><stickly-button type="primary" size="small" data-action="pdf-open"></stickly-button></div><p class="pdf-error" role="status"></p></section>
   <section class="site-card pdf-unsupported"><div class="site-card-copy"><p class="section-label"></p><p class="pdf-description"></p></div></section>
   <section class="summary-card"><div class="summary-row" data-summary="selection"><span></span><strong></strong></div><div class="summary-row" data-summary="highlights"><span></span><strong></strong></div><div class="summary-row" data-summary="site"><span></span><strong></strong></div><div class="summary-row summary-row-shortcut"><span></span><div class="summary-shortcut"><strong></strong><stickly-button type="ghost" size="small" data-action="shortcut"></stickly-button></div></div></section>
   <section class="site-card current-site"><div class="site-card-copy"><p class="section-label"></p><h4></h4><p class="site-description"></p></div><div class="site-card-actions"><stickly-button type="primary" size="small" data-action="site"></stickly-button><stickly-button type="secondary" size="small" data-action="tab"></stickly-button></div></section>
   <section class="site-card article-mission-card"><div class="site-card-copy"><p class="section-label"></p><h4></h4><p class="mission-description"></p></div><stickly-button type="primary" size="small" data-action="mission"></stickly-button></section>
   <section class="translation-section"><div class="info-text"><img><p></p></div><div class="translation-box"><div class="sidebyside"><div class="inputContainer"><stickly-input type="text" theme="dark" inherit-tokens></stickly-input><div class="detectedLanguage"></div></div><stickly-button type="primary" data-action="translate"></stickly-button></div><slot name="quota"></slot><p class="error-text"></p><slot name="results"></slot><div class="site-card-actions language-actions"><stickly-button type="ghost" size="small" data-action="edit-languages"></stickly-button><stickly-button type="secondary" size="small" data-action="learn"></stickly-button></div></div></section>
  </div>`;for(const i of t.querySelectorAll("[data-action]"))i.addEventListener("click",()=>this.dispatchEvent(new CustomEvent("popupAction",{detail:i.dataset.action})));const e=t.querySelector("stickly-input");e.addEventListener("keyup",i=>this.dispatchEvent(new CustomEvent("popupKeystroke",{detail:{key:i.key,value:e.value??""}})))}this.renderPresentation(),this.autofocusDone||(this.autofocusDone=!0,queueMicrotask(()=>{this.isConnected&&this.shadowRoot?.querySelector("stickly-input")?.focus()}))}renderPresentation(){const t=this.shadowRoot,e=this.data;if(!t||!e)return;const i=(s,d)=>{for(const u of t.querySelectorAll(s))u.textContent!==d&&(u.textContent=d)},o=(s,d)=>{for(const u of t.querySelectorAll(s))u.hidden=!d},r=(s,d)=>{const u=t.querySelector(s);u.type=d};t.querySelector(".logo img").src=e.logoUrl,i('[data-action="settings"]',e.settingsLabel),o(".pdf-default",e.pdf.defaultVisible),o(".pdf-manual",e.pdf.manualVisible),o(".pdf-unsupported",e.pdf.unsupportedVisible),t.querySelector(".pdf-default").setAttribute("aria-label",e.pdf.label),t.querySelector('.pdf-default [role="group"]').setAttribute("aria-label",e.pdf.defaultTitle),i(".pdf-default h4",e.pdf.defaultTitle),i(".pdf-manual h4",e.pdf.manualTitle),i(".pdf-unsupported .pdf-description",e.pdf.unsupportedDescription),i('[class^="site-card pdf-"] .section-label',e.pdf.label),i('[data-action="pdf-stickly"]',e.pdf.sticklyLabel),i('[data-action="pdf-native"]',e.pdf.browserLabel),i('[data-action="pdf-open"]',e.pdf.openLabel),o(".pdf-default .pdf-open",e.pdf.showOpen),o(".pdf-error",e.pdf.showError),i(".pdf-error",e.pdf.error);for(const s of["stickly","native"]){const d=`[data-action="pdf-${s}"]`;r(d,e.pdf.selected===s?"primary":"secondary"),t.querySelector(d).setAttribute("aria-pressed",String(e.pdf.selected===s))}for(const s of t.querySelectorAll("[data-summary]")){const d=e.summary.find(u=>u.id===s.dataset.summary);d&&(s.querySelector("span").textContent=d.label,s.querySelector("strong").textContent=d.value)}i(".summary-row-shortcut > span",e.shortcut.label),i(".summary-shortcut strong",e.shortcut.value),i('[data-action="shortcut"]',e.shortcut.editLabel),i(".current-site .section-label",e.site.label),i(".current-site h4",e.site.title),i(".site-description",e.site.description),o('[data-action="site"]',e.site.showSiteAction),i('[data-action="site"]',e.site.siteActionLabel),i('[data-action="tab"]',e.site.tabActionLabel),o(".article-mission-card",e.mission.visible),i(".article-mission-card .section-label",e.mission.label),i(".article-mission-card h4",e.mission.title),i(".mission-description",e.mission.description),i('[data-action="mission"]',e.mission.actionLabel);const l=t.querySelector(".info-text img");l.src=e.translation.iconUrl,l.alt=e.translation.iconAlt,i(".info-text p",e.translation.hint);const n=t.querySelector("stickly-input");n.setAttribute("placeholder",e.translation.placeholder),n.setAttribute("aria-label",e.translation.placeholder),n.value=e.translation.value,t.querySelector(".inputContainer").classList.toggle("loading",e.translation.loading);const c=t.querySelector('[data-action="translate"]');c.loading=e.translation.loading,i('[data-action="translate"]',e.translation.buttonLabel),o(".detectedLanguage",!e.translation.loading&&!!e.translation.detectedLanguage),i(".detectedLanguage",e.translation.detectedFlag),t.querySelector(".detectedLanguage").setAttribute("title",e.translation.detectedLanguage),o(".error-text",e.translation.showError),i(".error-text",e.translation.errorLabel),o('slot[name="quota"]',e.translation.showQuota),o('slot[name="results"],.language-actions',e.languages.visible),i('[data-action="edit-languages"]',e.languages.editLabel),i('[data-action="learn"]',e.languages.learnLabel)}}const yt=`


        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--space-md);
            padding: var(--space-sm);
            border-radius: var(--radius-small);
            transition: background 0.3s var(--transition-smooth);
        }

        :host(:hover) {
            background: var(--overlay-subtle);
        }

        .translation-info {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
        }

        .language {
            color: var(--color-text);
            font-size: var(--font-size-small);
            font-family: var(--font-family-medium);
        }

        .translation {
            color: var(--color-text);
            font-family: var(--font-family-medium);
            font-size: var(--font-size-body);
        }

        .actions {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--space-sm);
        }
    `,xt=`


    :host {
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-small);
      background: var(--overlay-subtle);
      padding: var(--space-md);
      outline: none;
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }
slot { display:contents; }`,wt=`
            :host {
                display: block;
                width: 100%;
                box-sizing: border-box;
                color: var(--color-text);
                font-family: var(--font-family-regular);
            }

            .bridge {
                display: flex;
                flex-direction: column;
                gap: var(--space-md);
                width: 100%;
                box-sizing: border-box;
                padding: var(--space-md) var(--space-sm) var(--space-lg);
                border-top: 1px solid var(--border-medium);
            }

            .message {
                margin: 0;
                color: var(--color-text);
                font-size: var(--font-size-body);
                line-height: 1.4;
                letter-spacing: 0.01em;
            }

            .message.complete {
                color: var(--color-text-muted);
                font-size: var(--font-size-small);
            }

            .actions {
                display: flex;
                align-items: center;
                gap: var(--space-sm);
            }

            .actions[hidden] { display:none; }
            @media(max-width:360px) { .actions { align-items:stretch;flex-direction:column; } stickly-button { width:100%; } }
`,kt=`
        :host { position: fixed; z-index: 2147483000; top: 76px; right: 24px; display: block; width: min(392px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); color: var(--color-text); font-family: var(--font-family-regular); }
        :host([hidden]) { display: none; }
        .shell { overflow: hidden auto; max-height: inherit; border-radius: var(--radius-lg); background: var(--color-surface); box-shadow: var(--shadow-long-accent); }
        header { display: flex; align-items: center; gap: 10px; min-height: 64px; padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); }
        .brand-tile { display: grid; width: 32px; height: 32px; flex: none; place-items: center; border-radius: var(--radius-md); background: var(--color-brand); box-shadow: 0 3px 0 var(--color-page); }
        .brand-tile img { width: 21px; height: 21px; object-fit: contain; }
        .brand-name { color: var(--color-brand); font: 700 13px/1 var(--font-family-bold); letter-spacing: .08em; text-transform: uppercase; }
        h2 { margin: 3px 0 0; font: 700 20px/1.15 var(--font-family-bold); }
        .icon { display: block; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; }
        .privacy { width: 24px; height: 24px; margin-left: auto; color: var(--color-brand); }
        .body { padding: 16px 16px 0; }
        h3 { margin: 0 0 11px; font: 700 18px/1.3 var(--font-family-bold); }
        .local { display: flex; align-items: center; gap: 8px; margin: 0 0 13px; color: var(--color-brand); font: 700 15px/1.2 var(--font-family-semibold); }
        .local .icon { width: 20px; height: 20px; flex: none; }
        .count { display: inline-block; margin-bottom: 13px; padding: 6px 11px; border-radius: var(--radius-full); color: var(--color-brand); background: rgb(var(--color-purple-500-rgb) / .24); font: 700 15px/1 var(--font-family-bold); }
        ul { padding: 0; margin: 0; list-style: none; border-top: 1px solid var(--border-subtle); }
        li { position: relative; min-height: 56px; border-bottom: 1px solid var(--border-subtle); }
        li.selected { background: var(--overlay-accent-soft); box-shadow: inset 3px 0 0 var(--color-accent); }
        .choice { display:flex;min-height:56px;align-items:center;padding:8px 10px; }
        .word-label { flex: 1; overflow: hidden; font: 700 17px/1.2 var(--font-family-bold); text-overflow: ellipsis; white-space: nowrap; }
        .badge { flex: none; padding: 7px 9px; border-radius: 7px; color: var(--color-text-on-light); background: rgb(var(--color-purple-300-rgb) / .9); font: 700 12px/1 var(--font-family-semibold); }
        .badge.due { background: rgb(var(--color-amber-500-rgb) / .55); }.badge.context_rich { background: rgb(var(--color-green-500-rgb) / .2); }
        footer { display: grid; gap: 8px; padding: 16px; border-top: 1px solid var(--border-subtle); text-align: center; }
        .row-copy { display:flex;align-items:center;gap:12px;min-width:0; }
        .open { display:block;width:100%; }.open .icon { width:22px;height:22px; }
        .expiry { color:var(--color-brand);font-size:14px; }
        @media (max-width: 460px) { :host { top: 16px; right: 16px; width: calc(100vw - 32px); } }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition: none !important; } }

        [hidden] { display:none!important; }
`,St=`


        :host {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
            width: min(360px, calc(100vw - 32px));
            padding: var(--space-sm);
            border: 1px solid var(--border-medium);
            border-radius: var(--radius-lg);
            background: var(--gradient-panel);
            color: var(--color-text);
            box-shadow: var(--shadow-long-lg);
            cursor: default;
        }

        *, *::before, *::after {
            box-sizing: border-box;
        }

        .eyebrow {
            color: var(--color-accent);
            font-family: var(--font-family-bold);
            font-size: 11px;
            letter-spacing: 0.14em;
            line-height: 1.2;
            text-transform: uppercase;
        }

        .title-row {
            display: flex;
            align-items: flex-start;
            gap: var(--space-sm);
        }

        .title-mark {
            display: grid;
            flex: 0 0 28px;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid rgb(var(--color-amber-500-rgb) / 0.45);
            border-radius: var(--radius-full);
            background: var(--overlay-accent-soft);
            color: var(--color-accent);
            font-size: 16px;
            font-weight: 800;
        }

        .title-mark img {
            width: 16px;
            height: 16px;
            object-fit: contain;
        }

        .quota-progress {
            display: block;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
            padding: 6px;
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
            background: var(--overlay-soft);
            color: var(--color-text-muted);
            font-size: var(--font-size-small);
            line-height: 1.45;
        }
        .quota-progress-bar {
            display: block;
            box-sizing: border-box;
            max-width: 100%;
            height: 8px;
            border-radius: var(--radius-full);
            background: linear-gradient(90deg, var(--color-accent), var(--color-brand));
            width: 100%;
            margin-bottom: var(--space-xs);
        }

        h4 {
            margin: 0;
            color: var(--color-text);
            font-family: var(--font-family-bold);
            font-size: 18px;
            line-height: 1.12;
        }

        .benefits {
            display: grid;
            gap: var(--space-xs);
            margin: 0;
            padding: 0;
            color: var(--color-text);
            font-family: var(--font-family-semibold);
            font-size: 13px;
            line-height: 1.2;
            list-style: none;
        }

        .premium-benefits {
            margin: 0;
        }

        .benefits li {
            display: flex;
            align-items: flex-start;
            gap: var(--space-sm);
        }

        .benefits li::before {
            content: '✓';
            flex: 0 0 auto;
            color: var(--color-success);
            font-family: var(--font-family-bold);
        }

        .price-note {
            color: var(--color-text-muted);
            font-size: 11px;
            line-height: 1.25;
        }

        .buttons {
            width: 100%;
            display: block;
        }

        .referral {
            display: flex;
            justify-content: center;
            gap: 4px;
            padding-top: 2px;
            cursor: pointer;
        }

        .referral-title {
            color: var(--color-text-muted);
            font-family: var(--font-family-semibold);
            font-size: 11px;
        }

        .referral-cta {
            color: var(--color-accent);
            font-family: var(--font-family-semibold);
            font-size: 11px;
            white-space: nowrap;
        }


        [hidden] { display:none!important; } .referral { text-decoration:none; }
`;class $t extends HTMLElement{data={mode:"notice",title:"",errorMessage:"",eyebrow:"",starUrl:"",benefitsIntro:"",benefitsLabel:"",benefits:[],priceNote:"",referralTitle:"",referralLabel:"",premiumLabel:""};get presentation(){return this.data}set presentation(t){this.data=t,this.renderPresentation()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${St}</style><span class="eyebrow" data-offer></span><div class="title-row"><span class="title-mark" aria-hidden="true"><span>!</span><img alt=""></span><h4></h4></div><div class="quota-progress"><div class="quota-progress-bar"></div><span></span></div><p class="notice-error"></p><p class="premium-benefits" data-offer></p><ul class="benefits" data-offer></ul><span class="price-note" data-offer></span><a class="referral" href="#" data-offer><span class="referral-title"></span><span class="referral-cta"></span></a><div class="buttons" data-offer><stickly-button type="primary" full-width></stickly-button></div>`,t.querySelector("stickly-button").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("quotaAction",{detail:"premium"}))),t.querySelector(".referral").addEventListener("click",e=>{e.preventDefault(),this.dispatchEvent(new CustomEvent("quotaAction",{detail:"referral"}))})}this.renderPresentation()}renderPresentation(){const t=this.shadowRoot;if(!t)return;const e=this.data.mode==="offer";for(const l of t.querySelectorAll("[data-offer]"))l.hidden=!e;t.querySelector(".title-mark span").hidden=e;const i=t.querySelector("img");i.hidden=!e,this.data.starUrl?i.src=this.data.starUrl:i.removeAttribute("src"),t.querySelector("h4").textContent=this.data.title,t.querySelector(".eyebrow").textContent=this.data.eyebrow,t.querySelector(".quota-progress").hidden=this.data.quotaMessage===void 0,t.querySelector(".quota-progress > span").textContent=this.data.quotaMessage??"";const o=t.querySelector(".notice-error");o.hidden=e||this.data.quotaMessage!==void 0,o.textContent=this.data.errorMessage,t.querySelector(".premium-benefits").textContent=this.data.benefitsIntro,t.querySelector(".price-note").textContent=this.data.priceNote,t.querySelector(".referral-title").textContent=this.data.referralTitle,t.querySelector(".referral-cta").textContent=`${this.data.referralLabel} →`,t.querySelector("stickly-button").textContent=this.data.premiumLabel;const r=t.querySelector("ul");for(r.setAttribute("aria-label",this.data.benefitsLabel);r.children.length>this.data.benefits.length;)r.lastElementChild?.remove();this.data.benefits.forEach((l,n)=>{const c=r.children[n]??r.appendChild(this.ownerDocument.createElement("li"));c.textContent=l})}}const Ct=`
            :host {
                display: block;
                position: relative;
                width: max-content;
                max-width: min(400px, calc(100vw - 32px));
            }

            .surface {
                display: flex;
                flex-direction: column;
                width: 100%;
                min-width: 0;
            }

            .loading-state {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 26px;
                box-sizing: border-box;
            }

            .primary-row {
                display: flex;
                align-items: center;
                gap: var(--space-sm);
                min-height: 0;
            }

            .explanation-wrapper {
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                padding: var(--space-sm) var(--space-md);
                min-width: 200px;
                max-width: 350px;
            }

            em {
                font-style: normal;
                font-family: var(--font-family-bold);
                color: var(--color-text);
                font-size: var(--font-size-body);
                line-height: 1.4;
            }

            hr {
                border: none;
                border-top: 1px solid var(--border-medium);
                margin: var(--space-xs) 0;
                width: 100%;
            }

            p {
                margin: 0;
                line-height: 1.5;
                color: var(--color-text);
                font-family: var(--font-family-regular);
                font-size: var(--font-size-body);
                opacity: 0.9;
            }

            .error {
                color: var(--warning);
                font-family: var(--font-family-medium);
            }

            .translation-wrapper {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: var(--space-xs);
                min-width: 0;
                flex: 1;
            }

            .language-route {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: var(--space-xs);
                color: var(--color-text-muted);
                font-family: var(--font-family-medium);
                font-size: 11px;
                line-height: 1.2;
                white-space: normal;
            }

            .language-stop {
                display: inline-flex;
                align-items: baseline;
                gap: 4px;
            }

            .language-label {
                opacity: 0.7;
            }

            .language-name {
                color: var(--color-text);
                font-family: var(--font-family-bold);
            }

            .language-arrow {
                opacity: 0.55;
            }

            .translation-heading {
                display: flex;
                align-items: center;
                gap: var(--space-sm);
                min-width: 0;
            }

            .translation {
                color: var(--color-text);
                font-family: var(--font-family-bold);
                overflow-wrap: anywhere;
            }

            .mobile-save-row {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                gap: var(--space-sm);
                margin-top: var(--space-md);
                padding-top: var(--space-sm);
                border-top: 1px solid var(--border-subtle);
            }

            .mobile-save-status {
                display: inline-flex;
                align-items: center;
                gap: var(--space-xs);
                color: var(--color-text-muted);
                font: var(--font-size-small)/1.3 var(--font-family-medium);
            }

            .mobile-save-status::before {
                content: '';
                width: 8px;
                height: 8px;
                flex: 0 0 auto;
                border-radius: 50%;
                background: var(--color-success);
            }

            .mobile-remove-action {
                all: unset;
                min-height: 44px;
                padding: 0 var(--space-sm);
                border-radius: var(--radius-small);
                color: var(--color-text-muted);
                font: var(--font-size-small)/1 var(--font-family-bold);
                cursor: pointer;
            }

            .mobile-remove-action:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: -2px;
            }

            :host([mobile-presentation]) {
                width: 100%;
                max-width: 100%;
            }

            :host([mobile-presentation]) .primary-row {
                align-items: flex-start;
            }

            .edit-panel {
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                position: relative;
                z-index: 2;
                pointer-events: auto;
                width: 100%;
                box-sizing: border-box;
                margin-top: var(--space-xs);
                padding: var(--space-md) var(--space-xs) var(--space-sm);
                border-top: 1px solid var(--border-subtle);
            }

            .edit-input {
                width: 100%;
                box-sizing: border-box;
                border: 1px solid var(--border-strong);
                border-radius: var(--radius-small);
                padding: var(--space-sm);
                color: var(--color-canvas);
                background: var(--color-surface-subtle);
                font: inherit;
                font-family: var(--font-family-medium);
                outline: none;
            }

            .edit-input:focus {
                border-color: var(--warning);
                box-shadow: var(--focus-ring);
            }

            .edit-actions {
                display: flex;
                justify-content: flex-end;
                gap: var(--space-sm);
            }

            .edit-actions button {
                position: relative;
                z-index: 3;
                pointer-events: auto;
                border: 0;
                border-radius: var(--radius-small);
                padding: var(--space-xs) var(--space-sm);
                font: inherit;
                font-family: var(--font-family-bold);
                cursor: pointer;
            }

            .edit-cancel {
                color: var(--color-text-muted);
                background: transparent;
            }

            .edit-save {
                color: var(--color-canvas);
                background: var(--warning);
            }

            .edit-save:disabled {
                opacity: 0.55;
                cursor: default;
            }

            .edit-error {
                color: var(--warning);
                font-size: var(--font-size-small);
            }

            .insight-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                padding: 0;
                border: 0;
                border-radius: var(--radius-xs);
                color: var(--color-text-muted);
                background: var(--overlay-soft);
                cursor: pointer;
                transition: color 0.2s var(--transition-smooth),
                    background 0.2s var(--transition-smooth);
            }

            .learning-provenance, .dictionary-meta {
                color: var(--color-text-muted);
                font-size: var(--font-size-small);
                line-height: 1.5;
            }
            .dictionary-headword {
                color: var(--color-text);
                font: var(--font-size-body)/1.4 var(--font-family-bold);
            }
            .dictionary-article {
                color: var(--color-text-muted);
                font-family: var(--font-family-regular);
                margin-right: var(--space-xs);
            }
            .dictionary-facts {
                display: flex;
                flex-wrap: wrap;
                gap: var(--space-xs) var(--space-md);
            }
            .dictionary-forms {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: var(--space-sm);
            }
            .verb-person-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: var(--space-md);
            }
            .verb-person-column { display: grid; gap: var(--space-xs); align-content: start; }
            .dictionary-forms .verb-person-grid { grid-column: 1 / -1; }
            .dictionary-form {
                display: flex;
                flex-direction: column;
                gap: 2px;
                padding: var(--space-xs) 0;
            }
            .verb-person-grid .dictionary-form {
                display: grid;
                grid-template-columns: minmax(46px, auto) minmax(0, 1fr);
                column-gap: var(--space-xs);
                padding: 0;
            }
            .dictionary-pronoun,
            .dictionary-preposition { color: var(--color-text-muted); }
            .dictionary-form bdi {
                color: var(--color-text);
                font: 14px/1.45 var(--font-family-medium);
            }
            .dictionary-base-form .definition { margin-top: var(--space-xs); }
            .dictionary-base-form .dictionary-article { margin-right: 0; }
            .dictionary-base-form details { margin-top: var(--space-sm); }
            .dictionary-base-form summary {
                width: fit-content;
                cursor: pointer;
                color: var(--color-accent);
                font-size: var(--font-size-small);
            }
            .dictionary-base-form summary:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: 3px;
            }
            .dictionary-base-form details .dictionary-forms { margin-top: var(--space-sm); }
            .dictionary-example { display: flex; flex-direction: column; gap: var(--space-xs); }
            .dictionary-example p { margin: 0; font-size: var(--font-size-small); opacity: 1; }
            .dictionary-example .learning-target { color: var(--color-text-muted); }
            .dictionary-example strong { color: var(--color-accent); font-family: var(--font-family-bold); }
            .learning-provenance {
                font-size: 10px;
            }

            .meanings-list {
                display: flex;
                flex-direction: column;
                gap: 0;
                padding: 0;
                margin: 0;
                list-style: none;
            }
            .meaning-row {
                display: grid;
                grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
                gap: var(--space-md);
                align-items: baseline;
                padding: var(--space-sm) 0;
                border-top: 1px solid var(--overlay-soft);
            }
            .meaning-row:first-child { border-top: 0; }
            .meaning-row.selectable { display: block; padding: 0; }
            .meaning-button {
                display: grid;
                grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
                gap: var(--space-md);
                align-items: baseline;
                width: 100%;
                padding: var(--space-sm) var(--space-xs);
                border: 0;
                border-radius: var(--radius-xs);
                background: transparent;
                color: inherit;
                text-align: start;
                font: inherit;
                cursor: pointer;
            }
            .meaning-button:hover { background: var(--overlay-soft); }
            .meaning-button[aria-pressed="true"] {
                box-shadow: inset 2px 0 var(--color-accent);
            }
            .meaning-button:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: -2px;
            }
            .meaning-group-label {
                margin-top: var(--space-sm);
                color: var(--color-text-muted);
                font: var(--font-size-small)/1.4 var(--font-family-medium);
            }
            .meaning-selection {
                display: flex;
                flex-direction: column;
            }
            .meaning-selection .meaning-group-label {
                margin: var(--space-md) var(--space-xs) var(--space-xs);
            }
            .meaning-selection .meaning-group-label:first-child { margin-top: 0; }
            .meaning-selection .meaning-row + .meaning-row { border-top: 1px solid var(--border-subtle); }
            .meaning-translation {
                min-width: 0;
                color: var(--color-text);
                font: var(--font-size-body)/1.4 var(--font-family-bold);
                overflow-wrap: anywhere;
            }
            .meaning-label {
                min-width: 0;
                color: var(--color-text-muted);
                font: var(--font-size-small)/1.45 var(--font-family-regular);
                overflow-wrap: anywhere;
            }

            .insight-button:hover,
            .insight-button[aria-expanded="true"] {
                color: var(--color-text);
                background: var(--overlay-strong);
            }

            .insight-button svg {
                width: 14px;
                height: 14px;
            }

            .insight-button.loading svg {
                animation: insight-pulse 1.2s ease-in-out infinite;
            }

            .insight-panel {
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                width: 100%;
                box-sizing: border-box;
                height: 100%;
                padding: var(--space-lg);
            }

            .dictionary-sheet {
                position: fixed;
                inset: 0 0 0 auto;
                box-sizing: border-box;
                width: min(440px, 100vw);
                height: 100dvh;
                max-width: 100vw;
                max-height: 100dvh;
                margin: 0;
                padding: 0;
                border: 0;
                border-left: 2px solid var(--color-accent);
                border-radius: 0;
                background: var(--color-surface);
                color: var(--color-text);
                box-shadow: none;
                overflow: hidden;
                opacity: 0;
                transform: translateX(16px);
                pointer-events: none;
                transition:
                    transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1),
                    opacity 140ms ease-out,
                    display 180ms allow-discrete,
                    overlay 180ms allow-discrete;
            }

            .dictionary-sheet[open] {
                opacity: 1;
                transform: translateX(0);
                pointer-events: auto;
            }

            .dictionary-sheet::backdrop {
                background: rgb(13 10 27 / 0.52);
                opacity: 0;
                transition:
                    opacity 180ms ease-out,
                    display 180ms allow-discrete,
                    overlay 180ms allow-discrete;
            }

            .dictionary-sheet[open]::backdrop {
                opacity: 1;
            }

            @starting-style {
                .dictionary-sheet[open] {
                    opacity: 0;
                    transform: translateX(16px);
                }

                .dictionary-sheet[open]::backdrop {
                    opacity: 0;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .dictionary-sheet,
                .dictionary-sheet::backdrop {
                    transition: none;
                    transform: none;
                }
            }

            .insight-body {
                min-height: 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: var(--space-lg);
                overflow-y: auto;
                overscroll-behavior: contain;
                scrollbar-gutter: stable;
                padding: var(--space-xs) var(--space-xs) var(--space-lg) 0;
            }

            .dictionary-language-switch {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: var(--space-xs);
            }
            .dictionary-language-option {
                min-width: 0;
                padding: var(--space-sm);
                border: 1px solid var(--border-subtle);
                border-radius: var(--radius-xs);
                background: transparent;
                color: var(--color-text);
                text-align: start;
                font: inherit;
                cursor: pointer;
            }
            .dictionary-language-option[aria-pressed="true"] {
                border-color: var(--color-accent);
                background: var(--overlay-soft);
            }
            .dictionary-language-option:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: 2px;
            }
            .dictionary-language-option-label {
                display: block;
                color: var(--color-text-muted);
                font-size: 11px;
            }
            .dictionary-language-option-word {
                display: block;
                overflow-wrap: anywhere;
                font-family: var(--font-family-bold);
            }

            .insight-heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: var(--space-md);
                flex: none;
                min-height: 44px;
                padding-bottom: var(--space-sm);
                border-bottom: 1px solid var(--border-subtle);
            }

            .insight-title {
                color: var(--color-text);
                font-size: 20px;
                font-family: var(--font-family-bold);
            }

            .sheet-word {
                display: inline-flex;
                align-items: center;
                gap: var(--space-sm);
                min-width: 0;
                overflow-wrap: anywhere;
            }

            .sheet-logo {
                width: 24px;
                height: 24px;
                flex: none;
            }

            .dictionary-sheet .insight-section {
                gap: var(--space-xs);
            }

            .dictionary-sheet .insight-section + .insight-section {
                border-top: 1px solid var(--border-subtle);
                padding-top: var(--space-lg);
            }

            .dictionary-sheet .definition,
            .dictionary-sheet .grammar-note,
            .dictionary-sheet .meaning-label,
            .dictionary-sheet .dictionary-example p {
                font-size: 14px;
                line-height: 1.55;
            }

            .insight-close {
                border: 0;
                min-width: 44px;
                min-height: 44px;
                padding: var(--space-xs);
                border-radius: var(--radius-xs);
                color: var(--color-text-muted);
                background: transparent;
                font: inherit;
                font-size: var(--font-size-small);
                cursor: pointer;
            }

            .insight-close:hover {
                color: var(--color-text);
                background: var(--overlay-soft);
            }

            .insight-close:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: 2px;
            }

            .insight-section {
                display: flex;
                flex-direction: column;
                gap: var(--space-xxs);
            }

            .insight-label {
                color: var(--color-text-muted);
                font-size: 10px;
                font-family: var(--font-family-bold);
                letter-spacing: 0.05em;
                text-transform: uppercase;
            }

            .definition, .grammar-note, .enrichment-status {
                color: var(--color-text);
                font-size: var(--font-size-small);
                line-height: 1.45;
                overflow-wrap: anywhere;
            }

            .dictionary-skeleton {
                display: flex;
                flex-direction: column;
                gap: 9px;
                width: 100%;
                padding: 4px 0;
            }

            .dictionary-skeleton-line {
                display: block;
                height: 13px;
                width: 72%;
                border-radius: var(--radius-xs);
                background: var(--overlay-strong);
                animation: dictionary-pulse 1.2s ease-in-out infinite alternate;
            }

            .dictionary-skeleton-line:first-child { width: 90%; }
            .dictionary-skeleton-line:last-child { width: 58%; }

            .dictionary-sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                overflow: hidden;
                clip-path: inset(50%);
                white-space: nowrap;
            }

            @media (prefers-reduced-motion: reduce) {
                .dictionary-skeleton-line { animation: none; }
            }

            .grammar-note {
                color: var(--color-text-muted);
            }

            @keyframes insight-pulse {
                0%, 100% { opacity: 0.45; transform: scale(0.9); }
                50% { opacity: 1; transform: scale(1); }
            }

            @media (prefers-reduced-motion: reduce) {
                .insight-button.loading svg {
                    animation: none;
                }
            }
        `;class Et extends HTMLElement{value;renderedPhase;sectionSignatures=new Map;sectionSlots=new Map;get presentation(){return this.value}set presentation(t){this.value=t,this.draw()}get renderRoot(){return this.shadowRoot}connectedCallback(){if(this.shadowRoot||this.attachShadow({mode:"open"}),Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}this.draw()}disconnectedCallback(){this.shadowRoot?.querySelector(".dictionary-sheet")?.close()}signal(t,e,i){e?.preventDefault(),e?.stopPropagation(),this.dispatchEvent(new CustomEvent("translation-view-action",{detail:{action:t,value:i}}))}bind(t,e,i="click"){this.shadowRoot.querySelector(t)?.addEventListener(i,o=>this.signal(e,o))}initialize(t){if(t===this.renderedPhase)return;this.shadowRoot?.querySelector(".dictionary-sheet")?.close(),this.renderedPhase=t,this.sectionSignatures.clear(),this.sectionSlots.clear();const e=this.shadowRoot;if(e.innerHTML=`<style>${f("extension")}${Ct}
[data-save],[data-editor],[data-language],[data-meanings],[data-definition],[data-example],[data-grammar],[data-forms],[data-base],[data-tip],[data-collocations]{display:contents}[hidden]{display:none!important}</style>`,t==="loading"){e.innerHTML+='<div class="surface loading-state"><stickly-loader></stickly-loader></div>';return}if(t==="explanation"){e.innerHTML+='<div class="surface"><div class="primary-row"><span data-audio style="display:contents"></span><div class="explanation-wrapper"><em></em><hr><p></p></div><span data-menu style="display:contents"></span></div></div>';return}e.innerHTML+='<div class="surface"><div class="primary-row"><span data-audio style="display:contents"></span><div class="translation-wrapper"><div class="translation-heading"><div class="translation" dir="auto"></div><button class="insight-button" type="button"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5L9.2 5.3L13 6.5L9.2 7.7L8 11.5L6.8 7.7L3 6.5L6.8 5.3L8 1.5Z" fill="currentColor"/><path d="M12.5 10L13.1 11.9L15 12.5L13.1 13.1L12.5 15L11.9 13.1L10 12.5L11.9 11.9L12.5 10Z" fill="currentColor"/></svg></button></div></div><span data-menu style="display:contents"></span></div><div data-save></div><div data-editor></div><dialog class="dictionary-sheet" aria-labelledby="sheet-headword"><div class="insight-panel"><div class="insight-heading"><div class="sheet-word"><img class="sheet-logo" alt="" aria-hidden="true"><div class="insight-title" id="sheet-headword" dir="auto"></div></div><button class="insight-close" type="button"></button></div><div class="insight-body" tabindex="0"><span class="dictionary-sr-only" role="status"></span><div data-language></div><div data-meanings></div><div data-definition></div><div data-example></div><div data-grammar></div><div data-forms></div><div data-base></div><div data-tip></div><div data-collocations></div></div></div></dialog></div>',this.bind(".insight-button","toggle-insight"),this.bind(".insight-close","toggle-insight"),this.bind(".dictionary-sheet","close-insight","cancel"),e.querySelector(".dictionary-sheet").addEventListener("click",i=>{i.target===i.currentTarget&&this.signal("close-insight",i)})}text(t,e){const i=this.shadowRoot.querySelector(t);i&&i.textContent!==e&&(i.textContent=e)}attach(t,e){const i=this.shadowRoot.querySelector(t);if(i&&!(e&&i.firstChild===e&&i.childNodes.length===1)){for(;i.firstChild;)i.removeChild(i.firstChild);e&&i.appendChild(e)}}section(t,e,i){const o=JSON.stringify(e);if(o===this.sectionSignatures.get(t))return;let r=this.sectionSlots.get(t);if(!r){const n=this.shadowRoot.querySelector(`[data-${t}]`),c=this.ownerDocument.createComment(`dictionary-${t}`);n.replaceWith(c),r={anchor:c,nodes:[]},this.sectionSlots.set(t,r)}const l=this.ownerDocument.createElement("div");i(l);for(const n of r.nodes)n.parentNode?.removeChild(n);r.nodes=Array.from(l.childNodes);for(const n of r.nodes)r.anchor.parentNode.insertBefore(n,r.anchor);this.sectionSignatures.set(t,o)}element(t,e="",i){const o=document.createElement(t);return o.className=e,i!==void 0&&(o.textContent=i),o}setLanguage(t,e){t.lang=e,t.dir="auto"}skeleton(t,e=2){const i=this.element("div","dictionary-skeleton");i.setAttribute("aria-hidden","true");for(let o=0;o<e;o++)i.append(this.element("span","dictionary-skeleton-line"));t.append(i)}labeled(t,e,i="insight-section"){const o=this.element("section",i);return o.append(this.element("div","insight-label",e)),t.append(o),o}span(t,e){const i=new RegExp("\\p{Script=Latin}$","u").test(e.before)&&new RegExp("^\\p{Script=Latin}","u").test(e.focus)?" ":"",o=new RegExp("\\p{Script=Latin}$","u").test(e.focus)&&new RegExp("^\\p{Script=Latin}","u").test(e.after)?" ":"";t.append(document.createTextNode(e.before+i),this.element("strong","",e.focus),document.createTextNode(o+e.after))}draw(){const t=this.value;if(!t||!this.shadowRoot||(this.initialize(t.phase),this.toggleAttribute("mobile-presentation",t.mobile),t.phase==="loading"))return;if(this.attach("[data-audio]",t.audio),this.attach("[data-menu]",t.mobile&&t.phase==="translation"?void 0:t.menu),t.phase==="explanation"){this.text("em",t.translation),this.text("p",t.explanation);return}const e=this.shadowRoot,i=t.labels;this.text(".translation",t.translation),this.setLanguage(e.querySelector(".translation"),t.targetLanguage);const o=e.querySelector(".insight-button");o.hidden=t.showInsight===!1,o.classList.toggle("loading",t.triggerLoading),o.setAttribute("aria-expanded",String(t.insightOpen)),o.setAttribute("aria-label",i[t.insightOpen?"dictionary_close":"dictionary_open"]||""),this.text(".insight-title",t.title),this.setLanguage(e.querySelector(".insight-title"),t.sourceLanguage),e.querySelector(".sheet-logo").src=t.logoUrl,this.text(".insight-close",i.common_close||""),e.querySelector(".insight-close").setAttribute("aria-label",i.common_close||""),this.text(".dictionary-sr-only",t.insightLoading&&i.word_insight_loading||""),this.drawEditor(t),this.drawSave(t),this.section("language",[t.sourceName,t.targetName,t.sourceFlag,t.targetFlag,t.sourceLanguage,t.targetLanguage,i],l=>{if(!t.sourceName||!t.targetName)return;const n=this.element("div","dictionary-language-switch");n.setAttribute("role","group"),n.setAttribute("aria-label",i.dictionary_language_view||"");for(const c of["source","target"]){const s=c==="source",d=s?t.sourceName:t.targetName,u=s?t.sourceWord:t.selectedTranslation,h=this.element("button","dictionary-language-option");h.type="button",h.setAttribute("aria-pressed",String(t.direction===c)),h.setAttribute("aria-label",`${d}: ${u}`);const p=this.element("span","dictionary-language-option-label");p.append(document.createTextNode((i[s?"dictionary_original":"dictionary_translation"]||"")+" · "));const b=this.element("span","",s?t.sourceFlag:t.targetFlag);b.setAttribute("aria-hidden","true"),p.append(b,document.createTextNode(" "+d));const g=this.element("bdi","dictionary-language-option-word",u);this.setLanguage(g,s?t.sourceLanguage:t.targetLanguage),h.append(p,g),h.addEventListener("click",m=>this.signal("direction",m,c)),n.append(h)}l.append(n)});for(const[l,n]of Array.from(e.querySelectorAll(".dictionary-language-option")).entries()){const c=l===0,s=c?t.sourceWord:t.selectedTranslation;n.setAttribute("aria-pressed",String(t.direction===(c?"source":"target"))),n.setAttribute("aria-label",`${c?t.sourceName:t.targetName}: ${s}`),n.querySelector(".dictionary-language-option-word").textContent=s}this.drawMeanings(t),this.section("definition",[t.definition,t.definitionLoading,t.detailLanguage,i],l=>{if(t.definition||t.definitionLoading){const n=this.labeled(l,i.word_definition||"");if(t.definition){const c=this.element("div","definition",t.definition);this.setLanguage(c,t.detailLanguage),n.append(c)}else n.setAttribute("data-dictionary-definition-loading",""),this.skeleton(n)}else l.append(this.element("div","enrichment-status",i.dictionary_details_unavailable||""))}),this.drawExample(t),this.drawGrammar(t),this.section("forms",[t.grammar.forms,t.grammar.formsLoading,t.grammar.partOfSpeech,t.detailLanguage,i],l=>{if(!t.grammar.forms.length&&!t.grammar.formsLoading)return;const n=this.labeled(l,i.dictionary_forms||"");n.setAttribute("data-dictionary-forms",""),this.forms(n,t.grammar.forms,t.detailLanguage,t.grammar.partOfSpeech,t.grammar.formsLoading)}),this.section("base",[t.baseForm,t.detailLanguage,i],l=>{const n=t.baseForm;if(!n)return;const c=this.labeled(l,i.dictionary_base_form||"","insight-section dictionary-base-form");c.setAttribute("data-dictionary-base-form","");const s=this.element("div","dictionary-headword");this.setLanguage(s,t.detailLanguage),/^en(?:-|$)/iu.test(t.detailLanguage)&&/^verb\b/iu.test(n.partOfSpeech)&&s.append(this.element("span","dictionary-article","to ")),s.append(document.createTextNode(n.lemma+" "),this.element("span","dictionary-meta"," · "+n.partOfSpeech));const d=this.element("div","definition",n.definition);if(this.setLanguage(d,t.detailLanguage),c.append(s,d),n.forms.length){const u=this.element("details");u.append(this.element("summary","",i.dictionary_forms||"")),this.forms(u,n.forms,t.detailLanguage,n.partOfSpeech,!1),c.append(u)}});for(const[l,n,c]of[["tip",t.grammarTip,i.word_grammar],["collocations",t.collocations,i.collocations]])this.section(l,[n,c,t.detailLanguage],s=>{if(!n)return;const d=this.labeled(s,c||""),u=this.element("div","grammar-note",n);this.setLanguage(u,t.detailLanguage),d.append(u)});const r=e.querySelector(".dictionary-sheet");this.isConnected&&t.insightOpen&&!r.open?(r.showModal(),r.querySelector(".insight-close").focus()):r.open&&!t.insightOpen&&r.close()}drawEditor(t){const e=this.shadowRoot.querySelector("[data-editor]");if(!t.editing){e.replaceChildren();return}if(!e.firstChild){e.innerHTML='<form class="edit-panel"><input class="edit-input" maxlength="500"><div class="edit-error"></div><div class="edit-actions"><button class="edit-cancel" type="button"></button><button class="edit-save" type="submit"></button></div></form>';const r=e.querySelector("form");r.addEventListener("click",n=>n.stopPropagation()),r.addEventListener("submit",n=>this.signal("save-edit",n));const l=e.querySelector("input");l.addEventListener("input",n=>{n.stopPropagation(),this.signal("edit-input",void 0,l.value)}),l.addEventListener("keydown",n=>{n.key==="Escape"?this.signal("cancel-edit",n):n.key==="Enter"&&!n.shiftKey&&this.signal("save-edit",n)}),e.querySelector(".edit-cancel").addEventListener("click",n=>this.signal("cancel-edit",n))}const i=e.querySelector("input");i.value!==t.editValue&&(i.value=t.editValue),i.setAttribute("aria-label",t.labels.correct_translation||""),this.text(".edit-cancel",t.labels.common_cancel||""),this.text(".edit-save",t.labels[t.editSaving?"common_saving":"common_save"]||"");const o=e.querySelector(".edit-error");o.hidden=!t.editError,o.textContent=t.editError,e.querySelector(".edit-save").disabled=t.editSaving||!t.editValue.trim()}drawSave(t){const e=this.shadowRoot.querySelector("[data-save]");if(!t.mobile||!t.removable){e.replaceChildren();return}e.firstChild||(e.innerHTML='<div class="mobile-save-row" role="status" aria-live="polite"><span class="mobile-save-status"></span><button class="mobile-remove-action" type="button"></button></div>',e.querySelector("button").addEventListener("click",i=>this.signal(this.value?.removalPending?"undo-removal":"remove-word",i))),this.text(".mobile-save-status",t.labels[t.removalPending?"word_removed":"quiz_progress_saved"]||""),this.text(".mobile-remove-action",t.labels[t.removalPending?"undo":"remove_word"]||"")}drawMeanings(t){this.section("meanings",[t.meaningGroups.map(i=>({label:i.label,current:i.current,meanings:i.meanings.map(o=>({id:o.id,selectable:o.selectable}))})),t.meaningsLoading,t.labels.translation_meanings],i=>{if(!t.meaningGroups.length)return;const o=this.labeled(i,t.labels.translation_meanings||"");o.setAttribute("data-meanings-panel","");const r=this.element("div","meaning-selection");o.append(r);for(const l of t.meaningGroups){r.append(this.element("div","meaning-group-label",l.label));const n=this.element("ul","meanings-list");n.setAttribute("aria-label",l.label),l.current||n.setAttribute("data-other-meanings-panel","");for(const c of l.meanings){const s=this.element("li","meaning-row"+(c.selectable?" selectable":""));s.setAttribute("data-meaning-id",c.id);const d=this.element("bdi","meaning-translation",c.translations);this.setLanguage(d,t.targetLanguage);const u=this.element("span","meaning-label",c.label);if(this.setLanguage(u,c.labelLanguage),c.selectable){const h=this.element("button","meaning-button");h.type="button",h.setAttribute("aria-pressed",String(c.selected)),h.append(d,u),h.addEventListener("click",p=>this.signal("select-meaning",p,c.id)),s.append(h)}else s.append(d,u);n.append(s)}r.append(n)}t.meaningsLoading&&this.skeleton(r)});const e=Array.from(this.shadowRoot.querySelectorAll(".meaning-row"));for(const i of t.meaningGroups.flatMap(o=>[...o.meanings])){const o=e.find(n=>n.dataset.meaningId===i.id);if(!o)continue;o.querySelector("button")?.setAttribute("aria-pressed",String(i.selected));const r=o.querySelector(".meaning-translation");r.textContent!==i.translations&&(r.textContent=i.translations),this.setLanguage(r,t.targetLanguage);const l=o.querySelector(".meaning-label");l.textContent!==i.label&&(l.textContent=i.label),this.setLanguage(l,i.labelLanguage)}}drawExample(t){const e=t.example;this.section("example",[e,t.labels.learning_see_in_use],i=>{const o=this.labeled(i,t.labels.learning_see_in_use||"");if(o.setAttribute("data-learning-pack-example",e.id),e.primary&&e.secondary){const r=this.element("div","dictionary-example"),l=this.element("p");this.setLanguage(l,e.primaryLanguage),this.span(l,e.primary);const n=this.element("p","learning-target");this.setLanguage(n,e.secondaryLanguage),this.span(n,e.secondary),r.append(l,n,this.element("div","learning-provenance",e.provenance)),o.append(r)}else if(e.sentence){const r=this.element("p","definition",e.sentence);this.setLanguage(r,e.primaryLanguage),o.append(r,this.element("div","learning-provenance",e.provenance)),e.loading&&this.skeleton(o,1)}else e.loading?this.skeleton(o):o.append(this.element("div","enrichment-status",e.unavailable))})}drawGrammar(t){const e=t.grammar;this.section("grammar",[e.lemma,e.partOfSpeech,e.article,e.features,e.loading,t.detailLanguage,t.labels.word_grammar],i=>{if(!e.lemma&&!e.partOfSpeech&&!e.article&&!e.features.length&&!e.loading)return;const o=this.labeled(i,t.labels.word_grammar||"");o.setAttribute("data-dictionary-grammar","");const r=this.element("div","dictionary-headword");if(this.setLanguage(r,t.detailLanguage),e.article&&r.append(this.element("span","dictionary-article",e.article)),r.append(document.createTextNode(e.lemma+(e.partOfSpeech?" ":""))),e.partOfSpeech&&r.append(this.element("span","dictionary-meta"," · "+e.partOfSpeech)),o.append(r),e.features.length){const l=this.element("div","dictionary-facts");for(const n of e.features){const c=this.element("span","dictionary-meta"+(n.preposition?" dictionary-preposition":""));c.append(document.createTextNode(n.label+": "));const s=this.element("bdi","",n.value);s.lang=t.detailLanguage,c.append(s),l.append(c)}o.append(l)}e.loading&&!e.partOfSpeech&&this.skeleton(o,1)})}forms(t,e,i,o,r){const l=this.element("div","dictionary-forms"),n=/^(de|en)/iu.test(i)&&/^verb\b/iu.test(o),c=(p,b)=>e.find(g=>["present",p,b].every(m=>g.tags.includes(m))&&!g.tags.includes(b==="singular"?"plural":"singular")),s=n?[c("first_person","singular"),c("second_person","singular"),c("third_person","singular"),c("first_person","plural"),c("second_person","plural"),c("third_person","plural")]:[],d=s.filter(Boolean).length>=3,u=(p,b=!1)=>{const g=this.element("div","dictionary-form"),m=b?/^(he\/she\/it|er\/sie\/es|you|they|ich|du|wir|ihr|sie|he|she|it|we|I)\s+(.+)$/iu.exec(p.form):null;if(m){const w=this.element("span","dictionary-pronoun",m[1]);w.lang=i,g.append(w)}const v=this.element("bdi","",m?m[2]:p.form);return this.setLanguage(v,i),g.append(v),g};if(d){const p=this.element("div","verb-person-grid");for(const b of[s.slice(0,3),s.slice(3)]){const g=this.element("div","verb-person-column");for(const m of b)m&&g.append(u(m,!0));p.append(g)}l.append(p)}const h=d?e.filter(p=>!s.includes(p)&&(p.tags.includes("past")||p.tags.includes("past_participle"))&&/^(I|you|he|she|it|we|they|ich|du|er|sie|es|wir|ihr)\s+\S+/iu.test(p.form)).slice(0,4):e;for(const p of h)l.append(u(p));r&&e.length<6&&this.skeleton(l),t.append(l)}}const At=`
        :host {
            position: fixed; z-index: 9999;
            bottom: calc(var(--space-xl) + env(safe-area-inset-bottom, 0px));
            left: 50%; transform: translateX(-50%);
            box-sizing: border-box; display: block;
            width: min(380px, calc(100vw - 32px));
        }
        .panel {
            box-sizing: border-box; padding: var(--space-6);
            border: 1px solid var(--border-medium); border-radius: var(--radius-medium);
            background: var(--color-canvas); box-shadow: var(--shadow-long-accent);
            color: var(--color-text); font-family: var(--font-family-regular);
            font-size: 16px; line-height: 1.5; text-align: left;
        }
        *, *::before, *::after { box-sizing: border-box; }
        :host([status="hidden"]) { display: none; }
        .header { display: flex; align-items: flex-start; gap: var(--space-sm); }
        h4 { flex: 1; margin: 0; font-family: var(--font-family-semibold); font-size: 20px; line-height: 1.3; }
        p { margin: var(--space-4) 0 var(--space-6); line-height: 1.5; }
        .actions { display: grid; gap: var(--space-sm); }
        button {
            min-height: 44px; padding: var(--space-sm) var(--space-md);
            border: 1px solid var(--color-border); border-radius: var(--radius-small);
            background: var(--color-surface); color: var(--color-text); font: inherit; cursor: pointer;
        }
        button:hover { background: var(--color-surface-raised); }
        .actions button {
            border-color: var(--color-accent);
            background: var(--color-accent);
            color: var(--color-canvas);
            font-family: var(--font-family-semibold);
        }
        .actions button:hover { filter: brightness(1.08); background: var(--color-accent); }
        button:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
        button:disabled { opacity: 0.55; cursor: default; }
        .icon {
            flex: none; width: 44px; padding: 0; border: 0; background: transparent;
            min-height: 32px; width: 32px; font-size: 24px; line-height: 1;
        }
        .text-action {
            min-height: 36px; padding: var(--space-xs); border: 0; background: transparent;
            color: var(--color-text-muted); text-decoration: underline;
        }
        .text-action:hover, .icon:hover { background: var(--overlay-soft); }
        .secondary-actions { display: flex; flex-wrap: wrap; justify-content: space-between; gap: var(--space-sm); margin-top: var(--space-4); }
        .error { color: var(--color-danger); }
        @media (max-width: 420px) {
            :host { bottom: calc(var(--space-sm) + env(safe-area-inset-bottom, 0px)); }
            .panel { padding: var(--space-4); }
        }
    `,zt={question:"Has Stickly helped you understand a page?",invitation:"Your honest Chrome Web Store review helps others decide if Stickly is useful.",review:"Write a Chrome Web Store review",later:"Maybe later",never:"Don't ask again",close:"Close",reviewOpened:"Review page opened"};class Lt extends HTMLElement{static observedAttributes=["status"];currentStatus="hidden";currentError="";copy=zt;hideTimer;previousFocus=null;get status(){return this.currentStatus}set status(t){this.currentStatus=t,this.getAttribute("status")!==t&&this.setAttribute("status",t),this.render()}get error(){return this.currentError}set error(t){this.currentError=t,this.render()}get labels(){return this.copy}set labels(t){this.copy=t,this.render()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){for(const t of["status","error","labels"])if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${At}</style><div class="panel" role="dialog" aria-modal="false" aria-labelledby="feedback-title"><div class="header"><h4 id="feedback-title"></h4><button class="icon" type="button">×</button></div><div data-invitation><p data-copy="invitation"></p><div class="actions"><button type="button" data-action="review"></button></div><p class="error" role="alert"></p><div class="secondary-actions"><button class="text-action" type="button" data-action="later"></button><button class="text-action" type="button" data-action="never"></button></div></div></div>`,t.querySelector(".icon").addEventListener("click",()=>this.status==="reviewOpened"?this.hideCompleted():this.later()),t.querySelector('[data-action="review"]').addEventListener("click",()=>this.emit("feedback-review")),t.querySelector('[data-action="later"]').addEventListener("click",()=>this.later()),t.querySelector('[data-action="never"]').addEventListener("click",()=>{this.hideCompleted(),this.emit("feedback-never")}),t.querySelector(".panel").addEventListener("keydown",e=>{const i=e;i.key==="Escape"&&(i.stopPropagation(),this.status==="reviewOpened"?this.hideCompleted():this.later())})}this.hasAttribute("status")||this.setAttribute("status",this.currentStatus),this.render()}attributeChangedCallback(t,e,i){(i==="open"||i==="hidden"||i==="reviewOpened")&&(this.currentStatus=i,this.render())}disconnectedCallback(){this.clearHideTimer()}requestFeedback(){this.status==="hidden"&&(this.clearHideTimer(),this.error="",this.previousFocus=this.ownerDocument.activeElement instanceof HTMLElement?this.ownerDocument.activeElement:null,this.status="open",this.updateComplete.then(()=>this.shadowRoot?.querySelector(".actions button")?.focus()))}cancelFeedbackRequest(){this.hideCompleted()}reviewOpened(){this.clearHideTimer(),this.status="reviewOpened",this.hideTimer=this.ownerDocument.defaultView?.setTimeout(()=>{this.status="hidden",this.restoreFocus(),this.hideTimer=void 0},3e3)}clearHideTimer(){this.hideTimer!==void 0&&(this.ownerDocument.defaultView?.clearTimeout(this.hideTimer),this.hideTimer=void 0)}restoreFocus(){this.previousFocus?.isConnected&&this.previousFocus.focus({preventScroll:!0}),this.previousFocus=null}hideCompleted(){this.clearHideTimer(),this.status="hidden",this.restoreFocus()}later(){this.hideCompleted(),this.emit("feedback-later")}emit(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}render(){const t=this.shadowRoot;if(!t)return;t.querySelector("h4").textContent=this.status==="reviewOpened"?this.copy.reviewOpened:this.copy.question,t.querySelector(".icon").setAttribute("aria-label",this.copy.close),t.querySelector("[data-invitation]").hidden=this.status!=="open",t.querySelector('[data-copy="invitation"]').textContent=this.copy.invitation;for(const i of["review","later","never"])t.querySelector(`[data-action="${i}"]`).textContent=this.copy[i];const e=t.querySelector(".error");e.textContent=this.currentError,e.hidden=!this.currentError}}const _t=`
            :host {
                position: fixed;
                z-index: 2147483000;
                display: block;
                width: min(410px, calc(100vw - 24px));
                color: var(--color-text);
                font-family: var(--font-family-regular);
                pointer-events: auto;
            }

            :host([mode='hidden']) {
                display: none;
            }

            .shell {
                position: relative;
                border-radius: var(--radius-md);
                background: var(--color-canvas);
                box-shadow: var(--shadow-long-accent);
                overflow: visible;
            }

            .caret {
                position: absolute;
                top: -10px;
                left: var(--caret-left, 50%);
                width: 20px;
                height: 12px;
                transform: translateX(-50%);
                object-fit: contain;
            }

            :host([data-placement='above']) .caret {
                top: auto;
                bottom: -10px;
                transform: translateX(-50%) rotate(180deg);
            }

            .content {
                display: grid;
                gap: var(--space-3);
                padding: var(--space-4);
            }

            .header,
            .provenance,
            .actions,
            .footer-actions {
                display: flex;
                align-items: center;
            }

            .header {
                justify-content: space-between;
                gap: var(--space-3);
            }

            .identity {
                display: flex;
                align-items: center;
                gap: var(--space-2);
                min-width: 0;
            }

            .identity img {
                width: 18px;
                height: 18px;
                padding: 3px;
                border-radius: var(--radius-sm);
                background: var(--color-brand);
            }

            .identity strong {
                font-family: var(--font-family-bold);
                font-size: var(--font-size-body);
                line-height: 1.2;
            }

            .close {
                width: 32px;
                height: 32px;
                display: grid;
                place-items: center;
                padding: 0;
                border: 0;
                border-radius: var(--radius-sm);
                color: var(--color-text);
                background: transparent;
                box-shadow: none;
            }

            .close:hover,
            .close:focus-visible {
                background: var(--overlay-medium);
            }

            .close img {
                width: 14px;
                height: 14px;
                filter: brightness(0) invert(1);
            }

            h2 {
                margin: 0;
                color: var(--color-text);
                font-family: var(--font-family-bold);
                font-size: 18px;
                line-height: 1.35;
            }

            p {
                margin: 0;
                color: rgb(var(--color-text-rgb) / 0.76);
                font-size: var(--font-size-small);
                line-height: 1.5;
            }

            .provenance {
                flex-wrap: wrap;
                gap: var(--space-1);
                color: rgb(var(--color-text-rgb) / 0.68);
                font-size: var(--font-size-small);
            }

            .provenance strong {
                color: var(--color-accent);
                font-family: var(--font-family-semibold);
            }

            .scope {
                display: inline-flex;
                align-items: center;
                min-height: 28px;
                width: fit-content;
                padding: 0 var(--space-2);
                border-radius: var(--radius-sm);
                color: rgb(var(--color-text-rgb) / 0.72);
                background: var(--overlay-soft);
                font-size: 12px;
            }

            label {
                display: grid;
                gap: var(--space-2);
                color: var(--color-text);
                font-family: var(--font-family-semibold);
                font-size: var(--font-size-body);
            }

            input {
                box-sizing: border-box;
                width: 100%;
                min-height: 46px;
                padding: 0 var(--space-3);
                border: 2px solid var(--border-medium);
                border-radius: var(--radius-md);
                color: var(--color-text-on-light);
                background: var(--color-surface-subtle);
                font: 16px var(--font-family-regular);
                outline: none;
            }

            input::placeholder {
                color: rgb(var(--color-gray-700-rgb) / 0.7);
            }

            input:focus-visible {
                border-color: var(--color-accent);
                box-shadow: var(--shadow-long-accent);
            }

            button {
                min-height: 40px;
                border: 0;
                border-radius: var(--radius-md);
                font-family: var(--font-family-semibold);
                font-size: var(--font-size-small);
                cursor: pointer;
            }

            button:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: 3px;
            }

            .primary {
                padding: 0 var(--space-4);
                color: var(--color-text);
                background: var(--color-brand);
                box-shadow:
                    1px 1px 0 rgb(var(--color-purple-700-rgb)),
                    2px 2px 0 rgb(var(--color-purple-700-rgb)),
                    3px 3px 0 rgb(var(--color-purple-700-rgb));
            }

            .primary:hover {
                background: rgb(var(--color-purple-500-rgb) / 0.88);
            }

            .secondary,
            .text-action {
                padding: 0 var(--space-2);
                color: rgb(var(--color-text-rgb) / 0.8);
                background: transparent;
                box-shadow: none;
            }

            .secondary:hover,
            .text-action:hover {
                color: var(--color-text);
                background: var(--overlay-soft);
            }

            .actions {
                flex-wrap: wrap;
                gap: var(--space-2);
            }

            .footer-actions {
                justify-content: space-between;
                gap: var(--space-2);
                padding-top: var(--space-2);
                border-top: 1px solid var(--border-subtle);
            }

            .footer-actions button {
                min-height: 32px;
                font-size: 13px;
            }

            .restored {
                width: min(350px, calc(100vw - 24px));
            }

            .restored .content {
                grid-template-columns: 1fr auto;
                align-items: center;
            }

            .restored .copy {
                display: grid;
                gap: var(--space-1);
            }

            @media (max-width: 480px) {
                :host {
                    width: calc(100vw - 24px);
                }

                .content {
                    padding: var(--space-3);
                }

                .actions .primary {
                    flex: 1 1 100%;
                }

                .footer-actions {
                    align-items: stretch;
                    flex-direction: column;
                }

                .footer-actions button {
                    width: 100%;
                    justify-content: flex-start;
                }
            }

            @media (prefers-reduced-motion: no-preference) {
                :host {
                    transition:
                        top var(--motion-fast) var(--ease-standard),
                        left var(--motion-fast) var(--ease-standard);
                }
            }
        `,qt={context_recall_name:"Context Recall",common_close:"Close",context_recall_invitation:"Practice one saved word on this page?",context_recall_saved_word:"You saved $WORD$ $WHEN$",context_recall_try:"Try on this page",context_recall_not_now:"Not now",context_recall_scope:"This page only · 1 word",context_recall_question:"What did this replace?",context_recall_placeholder:"Type the original word",common_saving:"Saving…",common_submit:"Submit",context_recall_save_error:"The review was not saved. Submit again to retry.",context_recall_show_original:"Show original",context_recall_wrong_meaning:"Wrong meaning",context_recall_why:"Why this word?",context_recall_saved_when:"Saved $WHEN$",context_recall_explanation:"You chose to save this word, and it is ready for review.",context_recall_restore_page:"Restore this page",context_recall_restored:"Original restored",done:"Done"},Tt=(a,t)=>{const e=Array.isArray(t)?t:t?[t]:[];let i=0;return(qt[a]??a).replace(/\$[A-Z]+\$/g,()=>e[i++]??"")};class Dt extends HTMLElement{static observedAttributes=["mode"];currentMode="hidden";word="";when="4 days ago";timing="due today";restoredCopy="Original restored. Progress unchanged.";answer="";whyVisible=!1;submissionState="idle";anchorRectProvider=null;updateFrame=null;renderedMode=null;labelProvider=Tt;imageAssets={logo:"",close:"",caret:""};get mode(){return this.currentMode}set mode(t){this.currentMode=t,this.getAttribute("mode")!==t&&this.setAttribute("mode",t),this.render(),this.schedulePosition()}get learnedWord(){return this.word}set learnedWord(t){this.word=t,this.render()}get savedWhen(){return this.when}set savedWhen(t){this.when=t,this.render()}get reviewTiming(){return this.timing}set reviewTiming(t){this.timing=t,this.render()}get restorationMessage(){return this.restoredCopy}set restorationMessage(t){this.restoredCopy=t,this.render()}get labels(){return this.labelProvider}set labels(t){this.labelProvider=t,this.render()}get assets(){return this.imageAssets}set assets(t){this.imageAssets=t,this.render()}get updateComplete(){return Promise.resolve(!0)}get renderRoot(){return this.shadowRoot}connectedCallback(){for(const t of["mode","learnedWord","savedWhen","reviewTiming","restorationMessage","labels","assets"])if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}this.shadowRoot||(this.attachShadow({mode:"open"}).innerHTML=`<style>${f("extension")}${_t}</style><div data-view></div>`),this.hasAttribute("mode")||this.setAttribute("mode",this.mode),this.render(),this.ownerDocument.defaultView?.addEventListener("scroll",this.schedulePosition,!0),this.ownerDocument.defaultView?.addEventListener("resize",this.schedulePosition),this.schedulePosition()}disconnectedCallback(){const t=this.ownerDocument.defaultView;t?.removeEventListener("scroll",this.schedulePosition,!0),t?.removeEventListener("resize",this.schedulePosition),this.updateFrame!==null&&t?.cancelAnimationFrame(this.updateFrame),this.updateFrame=null}attributeChangedCallback(t,e,i){(i==="hidden"||i==="invitation"||i==="challenge"||i==="restored")&&(this.currentMode=i,this.render(),this.schedulePosition())}open(t){this.anchorRectProvider=t.anchorRect,this.word=t.learnedWord,this.when=t.savedWhen,this.timing=t.reviewTiming,this.restoredCopy=t.restorationMessage||"Original restored. Progress unchanged.",this.answer="",this.whyVisible=!1,this.submissionState="idle",this.mode=t.mode,this.updateComplete.then(()=>{this.updatePosition(),this.mode==="challenge"&&this.shadowRoot?.querySelector("input")?.focus()})}hide(){this.mode="hidden",this.anchorRectProvider=null,this.answer="",this.whyVisible=!1,this.submissionState="idle"}setSubmissionState(t){this.submissionState=t,this.render()}dispatch(t,e){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}schedulePosition=()=>{const t=this.ownerDocument.defaultView;!t||!this.isConnected||this.updateFrame!==null||this.mode==="hidden"||(this.updateFrame=t.requestAnimationFrame(()=>{this.updateFrame=null,this.updatePosition()}))};updatePosition(){const t=this.anchorRectProvider?.(),e=this.ownerDocument.defaultView;if(!t||!e||this.mode==="hidden"){this.style.visibility="hidden",this.style.pointerEvents="none";return}this.style.visibility="visible",this.style.pointerEvents="auto";const i=this.getBoundingClientRect(),o=12,r=14,l=i.width||Math.min(410,e.innerWidth-24),n=i.height||220,c=t.left+t.width/2,s=Math.min(Math.max(o,c-l/2),Math.max(o,e.innerWidth-l-o)),d=t.bottom+r+n<=e.innerHeight-o;this.style.left=`${Math.round(s)}px`,this.style.top=`${Math.round(d?t.bottom+r:Math.max(o,t.top-r-n))}px`,this.style.setProperty("--caret-left",`${Math.round(Math.min(Math.max(22,c-s),l-22))}px`),this.dataset.placement=d?"below":"above"}close(){this.mode==="invitation"?(this.dispatch("context-recall-dismissed"),this.hide()):this.restore("restore_page")}restore(t){this.dispatch("context-recall-restore",{reason:t})}submit(){if(this.submissionState==="saving")return;const t=this.answer.trim();t&&this.dispatch("context-recall-submit",{answer:t})}header(){return'<div class="header"><div class="identity"><img data-asset="logo" alt=""><strong data-label="context_recall_name"></strong></div><button class="close" type="button" data-action="close" aria-label=""><img data-asset="close" alt=""></button></div>'}render(){const t=this.shadowRoot,e=t?.querySelector("[data-view]");if(!t||!e)return;if(this.renderedMode!==this.mode){this.renderedMode=this.mode;const s='<img class="caret" data-asset="caret" alt="">';this.mode==="hidden"?e.innerHTML="":this.mode==="invitation"?e.innerHTML=`<div class="shell" role="dialog" aria-labelledby="context-recall-title">${s}<div class="content">${this.header()}<h2 id="context-recall-title" data-label="context_recall_invitation"></h2><div class="provenance"><span data-saved-word></span><span aria-hidden="true">·</span><strong data-timing></strong></div><div class="actions"><button class="primary" type="button" data-action="accepted" data-label="context_recall_try"></button><button class="secondary" type="button" data-action="dismissed" data-label="context_recall_not_now"></button></div><span class="scope" data-label="context_recall_scope"></span></div></div>`:this.mode==="challenge"?e.innerHTML=`<div class="shell" role="dialog" aria-labelledby="context-recall-title">${s}<div class="content">${this.header()}<label id="context-recall-title"><span data-label="context_recall_question"></span><input autocomplete="off" spellcheck="false" aria-describedby="context-recall-provenance"></label><div class="actions"><button class="primary" type="button" data-action="submit"></button></div><p role="alert" data-label="context_recall_save_error" hidden></p><div class="footer-actions"><div class="actions"><button class="text-action" type="button" data-action="show_original" data-label="context_recall_show_original"></button><button class="text-action" type="button" data-action="wrong_meaning" data-label="context_recall_wrong_meaning"></button></div><button class="text-action" type="button" data-action="why" data-label="context_recall_why" aria-expanded="false"></button></div><div id="context-recall-provenance" class="provenance"><span data-saved-when></span><span aria-hidden="true">·</span><strong data-timing></strong></div><p data-label="context_recall_explanation" hidden></p><button class="text-action" type="button" data-action="restore_page" data-label="context_recall_restore_page"></button></div></div>`:e.innerHTML=`<div class="shell restored" role="status">${s}<div class="content"><div class="copy"><strong data-label="context_recall_restored"></strong><p data-restored></p></div><button class="secondary" type="button" data-action="done" data-label="done"></button></div></div>`;for(const u of e.querySelectorAll("[data-action]"))u.addEventListener("click",()=>{const h=u.dataset.action;h==="close"?this.close():h==="accepted"||h==="dismissed"?this.dispatch(`context-recall-${h}`):h==="submit"?this.submit():h==="why"?(this.whyVisible=!this.whyVisible,this.render()):h==="done"?this.hide():h&&this.restore(h)});const d=e.querySelector("input");d?.addEventListener("input",()=>{this.answer=d.value}),d?.addEventListener("keydown",u=>{const h=u;h.key==="Enter"&&(h.isComposing||h.keyCode===229)||h.key==="Enter"&&(h.preventDefault(),this.submit())}),this.mode==="challenge"&&e.querySelector(".shell")?.addEventListener("keydown",u=>{const h=u;h.isComposing||h.keyCode===229||h.key==="Escape"&&(h.preventDefault(),this.restore("show_original"))})}for(const s of e.querySelectorAll("[data-label]"))s.textContent=this.labelProvider(s.dataset.label);for(const s of e.querySelectorAll("[data-asset]")){const d=this.imageAssets[s.dataset.asset];s.getAttribute("src")!==d&&s.setAttribute("src",d)}e.querySelector(".close")?.setAttribute("aria-label",this.labelProvider("common_close"));const i=(s,d)=>{const u=e.querySelector(s);u&&(u.textContent=d)};i("[data-saved-word]",this.labelProvider("context_recall_saved_word",[this.word,this.when])),i("[data-saved-when]",this.labelProvider("context_recall_saved_when",this.when)),i("[data-timing]",this.timing),i("[data-restored]",this.restoredCopy);const o=e.querySelector("input");o&&(o.disabled=this.submissionState==="saving",o.placeholder=this.labelProvider("context_recall_placeholder"),o.value!==this.answer&&(o.value=this.answer));const r=e.querySelector('[data-action="submit"]');r&&(r.disabled=this.submissionState==="saving",r.textContent=this.labelProvider(this.submissionState==="saving"?"common_saving":"common_submit"));const l=e.querySelector('[role="alert"]');l&&(l.hidden=this.submissionState!=="error"),e.querySelector('[data-action="why"]')?.setAttribute("aria-expanded",String(this.whyVisible));const c=e.querySelector('[data-label="context_recall_explanation"]');c&&(c.hidden=!this.whyVisible)}}const Mt=`
            .review-bridge-stack {
                display: flex;
                flex-direction: column;
                width: min(400px, calc(100vw - 32px));
                min-width: min(340px, calc(100vw - 32px));
                box-sizing: border-box;
            }

            .review-bridge-stack translation-content {
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
            }

            .mobile-translate-action {
                all: unset;
                position: relative;
                display: inline-flex;
                width: 44px;
                height: 44px;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                border-radius: var(--radius-md);
                background: transparent;
                cursor: pointer;
            }

            .mobile-translate-action::before {
                position: absolute;
                width: 32px;
                height: 32px;
                border-radius: var(--radius-md);
                background: var(--color-accent);
                box-shadow: var(--shadow-long-accent);
                content: '';
            }

            .mobile-translate-action img {
                position: relative;
                z-index: 1;
                width: 24px;
                height: 24px;
                object-fit: contain;
                pointer-events: none;
            }

            .mobile-translate-action:focus-visible {
                outline: 2px solid var(--color-text);
                outline-offset: 3px;
            }

            .mobile-loading-state {
                display: flex;
                min-height: 72px;
                align-items: center;
                justify-content: center;
                gap: var(--space-md);
                color: var(--color-text-muted);
                font-family: var(--font-family-medium);
            }
        `;class Pt extends HTMLElement{bubbleTag="stickly-bubble";bubbleElement;value;loading;action;reviewStack;get presentation(){return this.value}set presentation(t){this.value=t,this.drawSurface()}connectedCallback(){if(!this.shadowRoot){const t=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=f("extension")+Mt,t.append(e),this.bubbleElement=document.createElement(this.bubbleTag),t.append(this.bubbleElement)}if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}this.drawSurface()}disconnectedCallback(){}drawSurface(){const t=this.value,e=this.bubbleElement;if(!t||!e)return;let i;if(t.phase==="loading"){this.loading||(this.loading=document.createElement("div"),this.loading.append(document.createElement("stickly-loader"),document.createElement("span"))),this.loading.className=t.mobile?"mobile-loading-state":"",this.loading.toggleAttribute("role",t.mobile),t.mobile&&this.loading.setAttribute("role","status"),t.mobile?this.loading.setAttribute("aria-live","polite"):this.loading.removeAttribute("aria-live");const o=this.loading.querySelector("span");o.textContent=t.loadingLabel,o.hidden=!t.mobile,i=this.loading}else if(t.phase==="symbol"&&t.mobile){if(!this.action){this.action=document.createElement("button"),this.action.className="mobile-translate-action",this.action.type="button";const o=document.createElement("img");o.alt="",o.setAttribute("aria-hidden","true"),this.action.append(o)}this.action.setAttribute("aria-label",t.translateLabel),this.action.querySelector("img").src=t.translateIconUrl,i=this.action}else t.phase!=="symbol"&&(i=t.content,t.phase==="translation"&&t.content&&t.reviewPrompt&&(this.reviewStack??=Object.assign(document.createElement("div"),{className:"review-bridge-stack"}),this.reconcile(this.reviewStack,[t.content,t.reviewPrompt]),i=this.reviewStack));this.reconcile(e,i?[i]:[])}reconcile(t,e){for(const o of Array.from(t.children))e.includes(o)||o.remove();let i=t.firstChild;for(const o of e)o!==i&&t.insertBefore(o,i),i=o.nextSibling}}class Ot extends HTMLElement{data={flag:"🌐",translation:"",action:"save",actionLabel:""};get presentation(){return this.data}set presentation(t){this.data=t,this.renderPresentation()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${yt}</style><div class="translation-info"><div class="language"></div><div class="translation"></div></div><div class="actions"><slot name="audio"></slot><stickly-button type="secondary"></stickly-button></div>`,t.querySelector("stickly-button").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("cardAction",{detail:this.data.action})))}this.renderPresentation()}renderPresentation(){const t=this.shadowRoot;if(!t)return;t.querySelector(".language").textContent=this.data.flag,t.querySelector(".translation").textContent=this.data.translation;const e=t.querySelector("stickly-button");e.className=this.data.action==="save"?"learn":this.data.action==="remove"?"remove-word":"remove-language",e.toggleAttribute("destructive",this.data.action!=="save"),e.textContent!==this.data.actionLabel&&(e.textContent=this.data.actionLabel)}}class Rt extends HTMLElement{nodes=[];get cards(){return this.nodes}set cards(t){this.nodes=t,this.reconcile()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"cards")){const t=this.cards;delete this.cards,this.cards=t}this.shadowRoot||(this.attachShadow({mode:"open"}).innerHTML=`<style>${f("extension")}${xt}</style><slot></slot>`),this.reconcile()}reconcile(){const t=new Set(this.nodes);for(const i of Array.from(this.children))t.has(i)||i.remove();let e=this.firstChild;for(const i of this.nodes)i!==e&&this.insertBefore(i,e),e=i.nextSibling}}class Ht extends HTMLElement{data={status:"prompt",message:"",label:"",reviewLabel:"",laterLabel:""};get presentation(){return this.data}set presentation(t){this.data=t,this.renderPresentation()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${wt}</style><section class="bridge"><p class="message"></p><div class="actions"><stickly-button class="review" type="primary" size="small"></stickly-button><stickly-button class="later" type="ghost" size="small"></stickly-button></div></section>`;for(const[e,i]of[[".review","review-bridge-accepted"],[".later","review-bridge-dismissed"]])t.querySelector(e).addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),this.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0}))})}this.renderPresentation()}renderPresentation(){const t=this.shadowRoot;if(!t)return;const e=this.data.status==="complete",i=t.querySelector("section"),o=t.querySelector("p");i.setAttribute("role",e?"status":"region"),e?i.removeAttribute("aria-label"):i.setAttribute("aria-label",this.data.label),o.className=`message${e?" complete":""}`,o.textContent=this.data.message,t.querySelector(".actions").hidden=e,t.querySelector(".review").textContent=this.data.reviewLabel,t.querySelector(".later").textContent=this.data.laterLabel}}class Vt extends HTMLElement{data={visible:!1,phase:"suggested",logoUrl:"",title:"",subtitle:"",description:"",privacy:"",countLabel:"",options:[],actionLabel:"",cancelLabel:"",expiry:"",actionDisabled:!1};rows=new Map;get presentation(){return this.data}set presentation(t){this.data=t,this.renderPresentation()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${kt}</style><section class="shell" aria-labelledby="article-mission-title"><header><span class="brand-tile" aria-hidden="true"><img alt=""></span><div><span class="brand-name">Stickly</span><h2 id="article-mission-title"></h2></div><svg class="icon privacy" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"></path></svg></header><div class="body"><h3></h3><p id="article-mission-description"></p><p class="local"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6zM14 2v5h5M9 12h6M9 16h6"></path></svg><span></span></p><span class="count" role="status" aria-live="polite"></span><ul></ul></div><footer><stickly-button class="open" type="primary" full-width><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7M21 3l-9 9M19 13v6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"></path></svg><span></span></stickly-button><span class="expiry"></span><stickly-button class="cancel" type="ghost" size="small" full-width></stickly-button></footer></section>`,t.querySelector(".open").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("missionAction",{detail:this.data.phase==="suggested"?"start":"open"}))),t.querySelector(".cancel").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("missionAction",{detail:"cancel"})))}this.renderPresentation()}renderPresentation(){this.toggleAttribute("hidden",!this.data.visible);const t=this.shadowRoot;if(!t)return;const e=this.data.phase==="selection",i=t.querySelector("section");i.setAttribute("role",e?"dialog":"complementary"),e?(i.setAttribute("aria-modal","false"),i.removeAttribute("aria-describedby")):(i.removeAttribute("aria-modal"),i.setAttribute("aria-describedby","article-mission-description")),t.querySelector("h2").textContent=this.data.title,t.querySelector("h3").textContent=this.data.subtitle,t.querySelector("#article-mission-description").textContent=this.data.description,t.querySelector(".local span").textContent=this.data.privacy,t.querySelector(".count").textContent=this.data.countLabel;const o=t.querySelector("img");this.data.logoUrl?o.src=this.data.logoUrl:o.removeAttribute("src");for(const s of[".count","ul",".expiry",".open svg"])t.querySelector(s).style.display=e?"":"none";const r=t.querySelector(".open");r.disabled=this.data.actionDisabled,r.querySelector("span").textContent=this.data.actionLabel,t.querySelector(".cancel").textContent=this.data.cancelLabel,t.querySelector(".expiry").textContent=this.data.expiry;const l=t.querySelector("ul"),n=new Set(this.data.options.map(s=>s.id));for(const[s,d]of this.rows)n.has(s)||(d.remove(),this.rows.delete(s));let c=l.firstChild;for(const s of this.data.options){let d=this.rows.get(s.id);if(!d){d=this.ownerDocument.createElement("li");const p=this.ownerDocument.createElement("stickly-checkbox");p.className="choice",p.fullWidth=!0,p.theme="dark";const b=this.ownerDocument.createElement("span");b.className="row-copy";for(const g of["word-label","badge"]){const m=this.ownerDocument.createElement("span");m.className=g,b.append(m)}p.append(b),p.addEventListener("change",g=>{g.stopPropagation(),this.dispatchEvent(new CustomEvent("missionSelection",{detail:{id:s.id,checked:g.detail.checked}}))}),d.append(p),this.rows.set(s.id,d)}d.className=s.checked?"selected":"";const u=d.firstElementChild;u.checked=s.checked,u.disabled=s.disabled,d.querySelector(".word-label").textContent=s.label;const h=d.querySelector(".badge");h.className=`badge ${s.badgeKind}`,h.textContent=s.badge,d!==c&&l.insertBefore(d,c),c=d.nextSibling}}}function It(a="stickly-action",t="1rem"){const e=o=>`calc(${o} * ${t})`,i=(o="")=>a===":host"&&o?`:host(${o})`:a+o;return`
${i()} { display:inline-flex; min-width:0; vertical-align:top; }
${i("[full-width]")} { width:100%; }
${i()} *, ${i()} *::before, ${i()} *::after { box-sizing:border-box; }
${i()} > .stickly-action-control {
 position:relative; isolation:isolate; display:inline-flex; min-width:0; width:100%;
 cursor:pointer; user-select:none; appearance:none; border:0; padding:0 0 ${e(".25")};
 font:inherit; color:inherit; text-decoration:none; justify-content:center; overflow:hidden;
 text-align:left; vertical-align:middle; border-radius:10px; outline:none;
 height:${e("3")}; background:rgb(var(--color-action-primary-edge-rgb));
 box-shadow:0 12px 24px rgb(0 0 0 / .16);
 transition-property:transform,box-shadow,opacity; transition-duration:var(--motion-normal);
 transition-timing-function:var(--ease-bounce);
}
${i()} > .stickly-action-control:hover { text-decoration:none; transform:translateY(-1px); box-shadow:0 14px 28px rgb(0 0 0 / .18); }
${i()} > .stickly-action-control:active { box-shadow:0 8px 18px rgb(0 0 0 / .16); }
${i()} > .stickly-action-control:focus-visible { outline:2px solid rgb(var(--color-accent-rgb)); outline-offset:2px; }
${i()} > .stickly-action-control:disabled { cursor:not-allowed; opacity:1; }
${i("[disabled]")} > .stickly-action-control, ${i("[loading]")} > .stickly-action-control { pointer-events:none; }
${i()} .stickly-action-face {
 position:relative; display:flex; width:100%; align-items:center; justify-content:center; gap:${e(".5")};
 overflow:hidden; white-space:nowrap; border-radius:inherit; border:1px solid transparent;
 font-weight:600; line-height:1.25; height:${e("2.75")}; padding:0 ${e("1.5")}; font-size:${e("1")};
 background:rgb(var(--color-action-primary-rgb)); color:rgb(var(--color-canvas-rgb));
 transition-property:background-color,color,transform; transition-duration:var(--motion-normal);
 transition-timing-function:var(--ease-bounce);
}
${i()} > .stickly-action-control:active .stickly-action-face { transform:translateY(${e(".25")}); box-shadow:none; }
${i()} .stickly-action-content, ${i()} .stickly-action-loading { display:flex; min-width:0; align-items:center; justify-content:center; gap:${e(".5")}; }
${i()} .stickly-action-loading { display:none; }
${i("[loading]")} .stickly-action-content, ${i("[loading]")} .stickly-action-icon, ${i("[loading]")} .stickly-action-google { display:none; }
${i("[loading]")} .stickly-action-loading { display:flex; }
${i()} .stickly-action-loading-text { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
${i()} .stickly-action-spinner-host { flex-shrink:0; }
${i()} .stickly-action-spinner { display:inline-block; flex-shrink:0; width:20px; height:20px; border:2px solid currentColor; border-right-color:transparent; border-radius:9999px; animation:stickly-action-spin 1s linear infinite; }
${i()} .stickly-action-icon { display:block; width:${e("1.5")}; height:${e("1.5")}; max-width:100%; object-fit:contain; }
${i()} .stickly-action-google { display:block; position:absolute; left:${e("1")}; width:${e("1.5")}; height:${e("1.5")}; max-width:100%; object-fit:contain; pointer-events:none; }
${i("[google]")} .stickly-action-face { padding-left:${e("3")}; }
${i('[size="small"]')} > .stickly-action-control { height:${e("2.5")}; }
${i('[size="small"]')} .stickly-action-face { height:${e("2.25")}; padding-left:${e("1")}; padding-right:${e("1")}; font-size:${e(".875")}; }
${i('[size="large"]')} > .stickly-action-control { height:${e("3.5")}; }
${i('[size="large"]')} .stickly-action-face { height:auto; padding-left:${e("1.75")}; padding-right:${e("1.75")}; font-size:${e("1.125")}; }
/* Legacy h-13/size-13 are absent from the current Tailwind scale. Their natural sizing is preserved. */
${i('[variant="secondary"]')} > .stickly-action-control { background:rgb(var(--color-action-secondary-edge-rgb)); }
${i('[variant="secondary"]')} .stickly-action-face { background:rgb(var(--color-action-secondary-rgb)); color:rgb(var(--color-text-rgb)); }
${i('[variant="neutral"]')} > .stickly-action-control, ${i('[variant="subtle"]')} > .stickly-action-control { background:rgb(var(--color-action-neutral-edge-rgb)); }
${i('[variant="neutral"]')} .stickly-action-face { background:rgb(var(--color-action-neutral-rgb)); }
${i('[variant="subtle"]')} .stickly-action-face { background:rgb(var(--color-surface-subtle-rgb)); }
${i('[variant="danger"]')} > .stickly-action-control { background:rgb(var(--color-action-danger-edge-rgb)); }
${i('[variant="danger"]')} .stickly-action-face { background:rgb(var(--color-action-danger-rgb)); color:rgb(var(--color-text-rgb)); }
${i('[variant="success"]')} > .stickly-action-control { background:rgb(var(--color-action-success-edge-rgb)); }
${i('[variant="success"]')} .stickly-action-face { background:rgb(var(--color-action-success-rgb)); color:rgb(var(--color-text-rgb)); }
${i('[variant="text"]')} > .stickly-action-control, ${i('[variant="ghost"]')} > .stickly-action-control { background:transparent; padding-bottom:0; box-shadow:none; }
${i('[variant="text"]')} > .stickly-action-control:hover, ${i('[variant="ghost"]')} > .stickly-action-control:hover,
${i('[variant="text"]')} > .stickly-action-control:active, ${i('[variant="ghost"]')} > .stickly-action-control:active { box-shadow:none; }
${i('[variant="text"]')} .stickly-action-face, ${i('[variant="ghost"]')} .stickly-action-face { background:transparent; color:rgb(var(--color-brand-rgb)); }
${i('[variant="text"][theme="dark"]')} .stickly-action-face, ${i('[variant="ghost"][theme="dark"]')} .stickly-action-face { color:rgb(var(--color-text-rgb)); }
${i('[variant="text"]')} > .stickly-action-control:active .stickly-action-face, ${i('[variant="ghost"]')} > .stickly-action-control:active .stickly-action-face { transform:none; }
${i('[variant="special"]')} .stickly-action-face { height:auto; background:rgb(var(--color-surface-subtle-rgb)); padding:14px ${e("1.25")}; font-size:${e("1.5")}; line-height:1.25; font-weight:600; letter-spacing:-.01em; text-align:center; box-shadow:inset 0 1px 0 rgb(255 255 255 / .14); }
${i('[variant="circle"]')} > .stickly-action-control { flex-shrink:0; width:${e("3")}; height:${e("3")}; border-radius:9999px; }
${i('[variant="circle"]')} .stickly-action-face { flex-shrink:0; width:${e("2.75")}; height:${e("2.75")}; padding:0; border-radius:9999px; letter-spacing:-.01em; }
${i('[variant="circle"][size="small"]')} > .stickly-action-control { width:${e("2.5")}; height:${e("2.5")}; }
${i('[variant="circle"][size="small"]')} .stickly-action-face { width:${e("2.25")}; height:${e("2.25")}; }
${i('[variant="circle"][size="large"]')} > .stickly-action-control { width:${e("3.5")}; height:${e("3.5")}; }
${i('[variant="circle"][size="large"]')} .stickly-action-face { width:auto; height:auto; }
${i("[google]")} .stickly-action-face { padding-left:${e("3")}; }
${i("[blinking]")} > .stickly-action-control { transform:scale(1); }
${i("[blinking]")} > .stickly-action-control::before, ${i("[blinking]")} > .stickly-action-control::after { content:''; position:absolute; inset:0; z-index:-1; border-radius:inherit; background:rgb(var(--color-action-primary-rgb)); transform-origin:center; animation:stickly-action-blink 5s ease-out infinite; }
${i("[blinking]")} > .stickly-action-control::after { animation-delay:.4s; }
${i()} > .stickly-action-control:hover:not(:disabled) .stickly-action-icon { animation:stickly-action-spin-bounce .8s ease forwards; }
@keyframes stickly-action-spin { to { transform:rotate(360deg); } }
@keyframes stickly-action-blink { 0% { transform:scale(1); opacity:1; } 20%,100% { transform:scale(1.5); opacity:0; } }
@keyframes stickly-action-spin-bounce { 0% { transform:rotate(0); } 10% { transform:rotate(-10deg) scale(.9); } 90% { transform:rotate(365deg) scale(.9); } 100% { transform:rotate(360deg) scale(1); } }
@media (prefers-reduced-motion:reduce) {
 ${i()} > .stickly-action-control, ${i()} .stickly-action-face { transition:none; }
 ${i()} > .stickly-action-control:hover, ${i()} > .stickly-action-control:active { transform:none; }
 ${i("[blinking]")} > .stickly-action-control::before, ${i("[blinking]")} > .stickly-action-control::after,
 ${i()} > .stickly-action-control:hover:not(:disabled) .stickly-action-icon { animation:none; }
}
`}function U(a=!1){return class extends HTMLElement{static observedAttributes=["href","target","rel","native-type","disabled","loading","loading-label","loading-text","icon","icon-alt","google-src","google","control-id","control-role","control-tabindex","role","tabindex","aria-label","aria-labelledby","aria-describedby","aria-controls","aria-expanded","aria-selected","aria-pressed","aria-current","type","destructive","fullwidth","full-width","flatleft","flat-left","flatright","flat-right","size","theme"];ready=!1;boundControl=null;get control(){return(this.shadowRoot??this).querySelector(".stickly-action-control")}connectedCallback(){queueMicrotask(()=>{this.isConnected&&(this.ready=!0,this.sync())})}attributeChangedCallback(){this.isConnected&&this.ready&&this.sync()}focus(e){this.control?.focus(e)}click(){this.control?.click()}sync(){if(a&&!this.shadowRoot&&this.attachShadow({mode:"open"}),a){const o=this.getAttribute("type")??"secondary",r=o==="primary"?"highlight":o,l=this.hasAttribute("destructive")&&r!=="ghost"?"danger":r;this.getAttribute("variant")!==l&&this.setAttribute("variant",l),this.hasAttribute("theme")||this.setAttribute("theme","dark"),this.toggleAttribute("full-width",this.hasAttribute("fullwidth")||this.hasAttribute("full-width")),this.toggleAttribute("flat-left",this.hasAttribute("flatleft")||this.hasAttribute("flat-left")),this.toggleAttribute("flat-right",this.hasAttribute("flatright")||this.hasAttribute("flat-right")),this.setAttribute("loading-interactive","")}a&&!this.hasAttribute("loading-text")&&this.setAttribute("loading-text","");const e=a?"button":"action",i=a?":host":"stickly-action";A(this,e,f("webapp",a?":host":"stickly-action:not([inherit-tokens])")+It(i,a?"16px":"1rem")+`${a?":host{font-family:var(--font-sans);color:var(--color-text)}":""}${a?":host([flat-left])":"stickly-action[flat-left]"}>.stickly-action-control{border-top-left-radius:0;border-bottom-left-radius:0}${a?":host([flat-right])":"stickly-action[flat-right]"}>.stickly-action-control{border-top-right-radius:0;border-bottom-right-radius:0}${a?":host([loading-interactive][loading]:not([disabled]))":"stickly-action[loading-interactive][loading]:not([disabled])"}>.stickly-action-control{pointer-events:auto}${a?":host([loading-interactive][loading])":"stickly-action[loading-interactive][loading]"} .stickly-action-content{display:flex;opacity:0}${a?":host([loading-interactive])":"stickly-action[loading-interactive]"} .stickly-action-loading{position:absolute;inset:0}`),it(this),this.control!==this.boundControl&&(this.boundControl=this.control,this.boundControl?.addEventListener("click",o=>{(this.hasAttribute("disabled")||this.hasAttribute("loading")&&!this.hasAttribute("loading-interactive"))&&(o.preventDefault(),o.stopImmediatePropagation())}))}}}function Nt(a=customElements){a.get("stickly-action")||a.define("stickly-action",U())}class jt extends U(!0){get updateComplete(){return Promise.resolve(!0)}boolean(t,e){return this.hasAttribute(t)||!!(e&&this.hasAttribute(e))}setBoolean(t,e,i){this.toggleAttribute(t,!!e),i&&this.toggleAttribute(i,!!e)}get type(){return this.getAttribute("type")||"secondary"}set type(t){this.setAttribute("type",t)}get disabled(){return this.boolean("disabled")}set disabled(t){this.setBoolean("disabled",t)}get loading(){return this.boolean("loading")}set loading(t){this.setBoolean("loading",t)}get destructive(){return this.boolean("destructive")}set destructive(t){this.setBoolean("destructive",t)}get fullWidth(){return this.boolean("fullwidth","full-width")}set fullWidth(t){this.setBoolean("fullwidth",t,"full-width")}get flatRight(){return this.boolean("flatright","flat-right")}set flatRight(t){this.setBoolean("flatright",t,"flat-right")}get flatLeft(){return this.boolean("flatleft","flat-left")}set flatLeft(t){this.setBoolean("flatleft",t,"flat-left")}get size(){return this.getAttribute("size")||"medium"}set size(t){this.setAttribute("size",t)}get theme(){return this.getAttribute("theme")||"dark"}set theme(t){this.setAttribute("theme",t)}connectedCallback(){for(const t of["type","disabled","loading","destructive","fullWidth","flatRight","flatLeft","size","theme"]){if(!Object.prototype.hasOwnProperty.call(this,t))continue;const e=this[t];delete this[t],this[t]=e}super.connectedCallback()}}function Bt(a="stickly-checkbox",t="1rem"){const e=o=>`calc(${o} * ${t})`,i=(o="")=>a===":host"&&o?`:host(${o})`:a+o;return`
${i()} { display:inline-flex; vertical-align:top; min-width:0; }
${i("[full-width]")} { width:100%; }
${i()} *, ${i()} *::before, ${i()} *::after { box-sizing:border-box; }
${i()} .stickly-choice-label { display:inline-flex; min-height:${e("1.5")}; align-items:flex-start; gap:${e(".625")}; color:inherit; cursor:pointer; }
${i("[full-width]")} .stickly-choice-label { width:100%; }
${i('[label-position="before"]')} .stickly-choice-label { flex-direction:row-reverse; justify-content:space-between; }
${i("[disabled]")} .stickly-choice-label { cursor:not-allowed; opacity:.6; }
${i()} .stickly-choice-control { position:relative; margin-top:1px; display:inline-flex; width:${e("1.5")}; height:${e("1.5")}; flex-shrink:0; }
${i()} .stickly-choice-input { position:absolute; inset:0; z-index:10; margin:0; width:${e("1.5")}; height:${e("1.5")}; cursor:inherit; appearance:none; border:0; background:transparent; opacity:0; outline:none; padding:0; }
${i()} .stickly-choice-box { pointer-events:none; display:flex; width:${e("1.5")}; height:${e("1.5")}; align-items:center; justify-content:center; border-radius:7px; border:2px solid rgb(var(--color-border-rgb)/.55); background:rgb(var(--color-surface-subtle-rgb)); color:rgb(var(--color-canvas-rgb)); box-shadow:0 3px 0 rgb(var(--color-action-neutral-edge-rgb)); transition-property:transform,background-color,border-color,box-shadow; transition-duration:var(--motion-fast); transition-timing-function:var(--ease-standard); }
${i('[theme="dark"]')} .stickly-choice-box { background:rgb(var(--color-white-rgb)/.1); border-color:rgb(var(--color-white-rgb)/.3); color:rgb(var(--color-text-rgb)); box-shadow:0 3px 0 rgb(var(--color-ink-rgb)); }
${i("[checked]")} .stickly-choice-box, ${i("[indeterminate]")} .stickly-choice-box { background:rgb(var(--color-accent-rgb)); border-color:rgb(var(--color-accent-rgb)); color:rgb(var(--color-canvas-rgb)); box-shadow:0 3px 0 rgb(var(--color-action-primary-edge-rgb)); }
${i()} .stickly-choice-input:focus-visible + .stickly-choice-box { outline:2px solid rgb(var(--color-accent-rgb)); outline-offset:2px; }
${i()} .stickly-choice-input:active + .stickly-choice-box { transform:translateY(3px); box-shadow:none; }
${i()} .stickly-choice-check { width:${e("1")}; height:${e("1")}; opacity:0; }
${i("[checked]:not([indeterminate])")} .stickly-choice-check { opacity:1; }
${i()} .stickly-choice-mixed { position:absolute; height:${e(".125")}; width:${e(".75")}; border-radius:9999px; background:currentColor; opacity:0; }
${i("[indeterminate]")} .stickly-choice-mixed { opacity:1; }
${i()} .stickly-choice-copy { min-width:0; padding-top:${e(".125")}; line-height:${e("1.5")}; }
`}function Ft(a="stickly-radio",t="1rem"){const e=o=>`calc(${o} * ${t})`,i=(o="")=>a===":host"&&o?`:host(${o})`:a+o;return`
${i()} { display:block; min-width:0; }
${i()} *, ${i()} *::before, ${i()} *::after { box-sizing:border-box; }
${i()} .stickly-choice-label { display:flex; width:100%; cursor:pointer; align-items:flex-start; gap:${e(".75")}; border-radius:${e(".75")}; border:1px solid transparent; border-left:3px solid transparent; padding:${e(".5")} ${e(".75")}; text-align:left; transition-property:border-color,background-color,box-shadow; transition-duration:var(--motion-fast); transition-timing-function:var(--ease-standard); }
${i()} .stickly-choice-label:focus-within { outline:none; }
${i()} .stickly-choice-label:hover { border-color:rgb(0 0 0/.08); background:rgb(0 0 0/.05); }
${i('[theme="dark"]')} .stickly-choice-label:hover { border-color:rgb(var(--color-white-rgb)/.1); background:rgb(var(--color-white-rgb)/.06); }
${i("[disabled]")} .stickly-choice-label { cursor:not-allowed; opacity:.6; }
${i("[generous-touch-target]")} .stickly-choice-label { min-height:${e("3")}; }
/* In the canonical Tailwind output border-transparent wins over the selected
   border utilities. Preserve the measured result, including its reserved edge. */
${i("[checked]")} .stickly-choice-label { background:rgb(var(--color-accent-rgb)/.1); padding-left:calc(${e(".75")} - 3px); }
${i("[checked]")} .stickly-choice-label:hover { border-color:rgb(0 0 0/.08); background:rgb(0 0 0/.05); }
${i('[checked][theme="dark"]')} .stickly-choice-label:hover { border-color:rgb(var(--color-white-rgb)/.1); background:rgb(var(--color-white-rgb)/.06); }
${i()} .stickly-choice-control { position:relative; margin-top:${e(".125")}; display:inline-flex; width:${e("1.5")}; height:${e("1.5")}; flex-shrink:0; }
${i()} .stickly-choice-input { position:absolute; inset:0; z-index:10; margin:0; width:${e("1.5")}; height:${e("1.5")}; cursor:inherit; appearance:none; border:0; background:transparent; opacity:0; outline:none; padding:0; }
${i()} .stickly-choice-box { pointer-events:none; display:flex; width:${e("1.5")}; height:${e("1.5")}; align-items:center; justify-content:center; border-radius:9999px; border:2px solid rgb(var(--color-border-rgb)/.55); background:rgb(var(--color-surface-subtle-rgb)); box-shadow:0 3px 0 rgb(var(--color-action-neutral-edge-rgb)); transition-property:transform,background-color,border-color,box-shadow; transition-duration:var(--motion-fast); transition-timing-function:var(--ease-standard); }
${i('[theme="dark"]')} .stickly-choice-box { background:rgb(var(--color-white-rgb)/.1); border-color:rgb(var(--color-white-rgb)/.3); }
${i("[checked]")} .stickly-choice-box { background:rgb(var(--color-accent-rgb)); border-color:rgb(var(--color-accent-rgb)); box-shadow:0 3px 0 rgb(var(--color-action-primary-edge-rgb)); }
${i()} .stickly-choice-input:focus-visible + .stickly-choice-box { outline:2px solid rgb(var(--color-accent-rgb)); outline-offset:2px; }
${i()} .stickly-choice-input:active + .stickly-choice-box { transform:translateY(3px); box-shadow:none; }
${i()} .stickly-choice-dot { width:${e(".625")}; height:${e(".625")}; border-radius:9999px; background:rgb(var(--color-white-rgb)); opacity:0; transition:opacity var(--motion-fast) var(--ease-standard); }
${i("[checked]")} .stickly-choice-dot { opacity:1; }
${i()} .stickly-choice-copy { min-width:0; flex:1 1 0%; padding-top:${e(".125")}; line-height:${e("1.5")}; }
`}class X{constructor(t){this.host=t,this.internals=t.attachInternals()}internals;input=null;get form(){return this.host.shadowRoot?this.internals.form:this.input?.form??this.internals.form}get disabled(){return this.host.hasAttribute("disabled")||this.host.matches(":disabled")}sync(t){this.input=t;const e=this.host.getAttribute("form");!this.host.shadowRoot&&e!==null?t.setAttribute("form",e):t.removeAttribute("form"),t.disabled=this.disabled,this.internals.setFormValue(this.host.shadowRoot&&t.checked&&!t.disabled?t.value:null)}}class Wt extends HTMLElement{static formAssociated=!0;static observedAttributes=["checked","indeterminate","disabled","theme","full-width","label-position","name","value","form","control-id","aria-label","aria-describedby"];ready=!1;input=null;formAssociation=new X(this);get form(){return this.formAssociation.form}formAssociatedCallback(){this.ready&&this.isConnected&&this.sync()}formDisabledCallback(){this.ready&&this.isConnected&&this.sync()}formResetCallback(){const t=()=>{!this.isConnected||!this.input||(this.hasAttribute("model-controlled")?(this.input.checked=this.checked&&!this.indeterminate,this.input.indeterminate=this.indeterminate):(this.shadowRoot&&(this.input.checked=this.input.defaultChecked),this.checked=this.input.checked,this.indeterminate=this.input.indeterminate),this.formAssociation.sync(this.input))};this.shadowRoot&&!this.hasAttribute("model-controlled")?t():this.ownerDocument.defaultView?.setTimeout(t,0)}get control(){return(this.shadowRoot??this).querySelector(".stickly-choice-input")}connectedCallback(){for(const t of["checked","indeterminate","disabled","theme","fullWidth","labelPosition"]){if(!Object.prototype.hasOwnProperty.call(this,t))continue;const e=this[t];delete this[t],this[t]=e}queueMicrotask(()=>{this.isConnected&&(this.ready=!0,this.hasAttribute("theme")||(this.theme="dark"),this.sync())})}attributeChangedCallback(){this.isConnected&&this.ready&&this.sync()}get updateComplete(){return Promise.resolve(!0)}get checked(){return this.hasAttribute("checked")}set checked(t){this.toggleAttribute("checked",!!t)}get indeterminate(){return this.hasAttribute("indeterminate")}set indeterminate(t){this.toggleAttribute("indeterminate",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get theme(){return this.getAttribute("theme")||"dark"}set theme(t){this.setAttribute("theme",t)}get fullWidth(){return this.hasAttribute("full-width")}set fullWidth(t){this.toggleAttribute("full-width",!!t)}get labelPosition(){return this.getAttribute("label-position")||"after"}set labelPosition(t){this.setAttribute("label-position",t)}focus(t){this.control?.focus(t)}click(){this.control?.click()}sync(){!this.hasAttribute("inherit-tokens")&&!this.shadowRoot&&this.attachShadow({mode:"open"}),A(this,"checkbox",f("webapp",this.shadowRoot?":host":"stickly-checkbox:not([inherit-tokens])")+Bt(this.shadowRoot?":host":"stickly-checkbox",this.shadowRoot?"16px":"1rem")+(this.shadowRoot?':host{font-family:var(--font-sans);color:var(--color-text)}:host([theme="light"]){color:var(--color-text-on-light)}':'stickly-checkbox{font-family:var(--font-sans);color:var(--color-text)}stickly-checkbox[theme="light"]{color:var(--color-text-on-light)}')),F(this);const t=this.control;t&&t!==this.input&&(this.input=t,t.defaultChecked=this.checked,t.addEventListener("change",e=>{if(e.stopPropagation(),this.formAssociation.disabled)return;const i=t.checked;this.indeterminate=!1,this.checked=i,this.formAssociation.sync(t),this.dispatchEvent(new CustomEvent("change",{detail:{checked:i},bubbles:!0,composed:!0}))}),t.addEventListener("blur",()=>this.dispatchEvent(new CustomEvent("field-touched",{bubbles:!0,composed:!0})))),t&&this.formAssociation.sync(t)}}class Ut extends HTMLElement{static formAssociated=!0;static observedAttributes=["checked","disabled","theme","name","value","form","control-id","generous-touch-target","aria-label","aria-describedby"];ready=!1;input=null;groupRoot=null;groupForm=null;optionValue="";settingValue=!1;formAssociation=new X(this);get form(){return this.formAssociation.form}formAssociatedCallback(t){if(!this.ready||!this.isConnected)return;const e=this.groupForm;if(this.sync(),this.groupForm=t,e!==t)for(const i of this.groupRoot?.querySelectorAll("stickly-radio")??[])i!==this&&i.name===this.name&&i.form===e&&i.syncTabStops();this.checked?this.uncheckPeers():this.syncTabStops()}formDisabledCallback(){this.ready&&this.isConnected&&(this.sync(),this.syncTabStops())}formResetCallback(){const t=()=>{!this.isConnected||!this.input||(this.hasAttribute("model-controlled")?this.input.checked=this.checked:(this.shadowRoot&&(this.input.checked=this.input.defaultChecked),this.checked=this.input.checked),this.formAssociation.sync(this.input),this.syncTabStops())};this.shadowRoot&&!this.hasAttribute("model-controlled")?t():this.ownerDocument.defaultView?.setTimeout(t,0)}get control(){return(this.shadowRoot??this).querySelector(".stickly-choice-input")}connectedCallback(){for(const t of["checked","disabled","theme","name","value","generousTouchTarget"]){if(!Object.prototype.hasOwnProperty.call(this,t))continue;const e=this[t];delete this[t],this[t]=e}queueMicrotask(()=>{this.isConnected&&(this.ready=!0,this.groupRoot=this.getRootNode(),this.sync(),this.groupForm=this.form,this.checked?this.uncheckPeers():this.syncTabStops())})}disconnectedCallback(){this.syncTabStops()}attributeChangedCallback(t,e,i){t==="value"&&!this.settingValue&&(this.optionValue=i??""),!(!this.isConnected||!this.ready)&&(this.sync(),["checked","name","form"].includes(t)&&this.checked?this.uncheckPeers():this.syncTabStops())}get updateComplete(){return Promise.resolve(!0)}get checked(){return this.hasAttribute("checked")}set checked(t){this.toggleAttribute("checked",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get theme(){return this.getAttribute("theme")||"light"}set theme(t){this.setAttribute("theme",t)}get name(){return this.getAttribute("name")||""}set name(t){this.setAttribute("name",t)}get value(){return this.optionValue}set value(t){this.optionValue=t,this.settingValue=!0,this.setAttribute("value",String(t)),this.settingValue=!1,this.isConnected&&this.ready&&this.sync()}get generousTouchTarget(){return this.hasAttribute("generous-touch-target")}set generousTouchTarget(t){this.toggleAttribute("generous-touch-target",!!t)}focus(t){this.control?.focus(t)}click(){this.control?.click()}peers(){if(!this.name)return[this];const t=this.isConnected?this.getRootNode():this.groupRoot,e=this.isConnected?this.form:this.groupForm;return t?Array.from(t.querySelectorAll("stickly-radio")).filter(i=>i.name===this.name&&i.form===e):[this]}uncheckPeers(){for(const t of this.peers())t!==this&&t.checked&&(t.checked=!1);this.syncTabStops()}syncTabStops(){const t=this.peers(),e=t.filter(o=>!o.formAssociation.disabled),i=e.find(o=>o.checked)??e[0];for(const o of t)o.control&&(o.control.tabIndex=o===i?0:-1)}sync(){!this.hasAttribute("inherit-tokens")&&!this.shadowRoot&&this.attachShadow({mode:"open"}),A(this,"radio",f("webapp",this.shadowRoot?":host":"stickly-radio:not([inherit-tokens])")+Ft(this.shadowRoot?":host":"stickly-radio",this.shadowRoot?"16px":"1rem")+(this.shadowRoot?':host{font-family:var(--font-sans);color:var(--color-text-on-light)}:host([theme="dark"]){color:var(--color-text)}':'stickly-radio{font-family:var(--font-sans);color:var(--color-text-on-light)}stickly-radio[theme="dark"]{color:var(--color-text)}')),F(this);const t=this.control;t&&t!==this.input&&(this.input=t,t.defaultChecked=this.checked,t.addEventListener("change",e=>{e.stopPropagation(),!(this.formAssociation.disabled||!t.checked)&&(this.checked=!0,this.formAssociation.sync(t),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value,checked:!0},bubbles:!0,composed:!0})))}),t.addEventListener("blur",()=>this.dispatchEvent(new CustomEvent("field-touched",{bubbles:!0,composed:!0}))),t.addEventListener("keydown",e=>{const i=["ArrowRight","ArrowDown"].includes(e.key)?1:["ArrowLeft","ArrowUp"].includes(e.key)?-1:0;if(!i||!this.name||this.formAssociation.disabled)return;const o=this.peers().filter(l=>!l.formAssociation.disabled);if(o.length<2)return;e.preventDefault();const r=o[(o.indexOf(this)+i+o.length)%o.length];r.focus(),r.click()})),t&&this.formAssociation.sync(t)}}class Xt extends ot(!0){get updateComplete(){return Promise.resolve(!0)}}class Yt extends HTMLElement{static observedAttributes=["value","disabled","required","name","aria-label","aria-describedby"];select;optionData=[];constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}
      select {
        border: 1px solid var(--color-text-muted);
        border-radius: var(--radius-md);
        background: var(--color-surface-subtle);
        color: var(--color-text-on-light);
        padding: 11px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        line-height: 16px;
        cursor: pointer;
      }
    </style><select></select>`,this.select=t.querySelector("select");for(const e of["input","change"])this.select.addEventListener(e,i=>{i.stopPropagation(),this.value=this.select.value,this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))})}connectedCallback(){for(const t of["options","value","disabled","required","name"]){if(!Object.prototype.hasOwnProperty.call(this,t))continue;const e=this[t];delete this[t],this[t]=e}this.sync()}attributeChangedCallback(){this.select&&this.sync()}get updateComplete(){return Promise.resolve(!0)}get options(){return this.optionData}set options(t){this.optionData=t;const e=this.ownerDocument.createDocumentFragment();for(const i of t){const o=this.ownerDocument.createElement("option");o.value=i.value,o.textContent=i.label,o.disabled=i.disabled??!1,o.defaultSelected=i.selected??!1,e.append(o)}this.select.replaceChildren(e),this.sync()}get value(){return this.getAttribute("value")??this.select?.value??""}set value(t){this.setAttribute("value",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get required(){return this.hasAttribute("required")}set required(t){this.toggleAttribute("required",!!t)}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}focus(t){this.select.focus(t)}sync(){this.hasAttribute("value")&&(this.select.value=this.value),this.select.disabled=this.disabled,this.select.required=this.required,this.select.name=this.name;for(const t of["aria-label","aria-describedby"]){const e=this.getAttribute(t);e===null?this.select.removeAttribute(t):this.select.setAttribute(t,e)}}}function Y(a,t,e){if(e.get(a))return;class i extends HTMLElement{static observedAttributes=["value","label","placeholder","helper-text","error-text","control-id","name","disabled","readonly","required","invalid","type","autocomplete","rows","maxlength","aria-label","aria-describedby"];ready=!1;currentValue=null;resetForm=null;bound=null;onFormReset=r=>{this.ownerDocument.defaultView?.setTimeout(()=>{r.defaultPrevented||!this.isConnected||(this.hasAttribute("model-controlled")?this.control&&(this.control.value=this.currentValue??""):this.currentValue=this.control?.value??null,this.sync())},0)};get control(){return this.querySelector(".stickly-field-native")}get value(){return this.currentValue}set value(r){this.currentValue=r,this.isConnected&&this.ready&&this.sync()}focus(r){this.control?.focus(r)}blur(){this.control?.blur()}reset(){this.value=null,this.dispatchEvent(new CustomEvent("value-change",{detail:{value:null},bubbles:!0,composed:!0}))}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"value")){const r=this.value;delete this.value,this.currentValue=r}queueMicrotask(()=>{this.isConnected&&(this.ready=!0,this.sync(),this.resetForm=this.control?.form??null,this.resetForm?.addEventListener("reset",this.onFormReset))})}disconnectedCallback(){this.resetForm?.removeEventListener("reset",this.onFormReset),this.resetForm=null}attributeChangedCallback(r){r==="value"&&(this.currentValue=this.getAttribute("value")),this.isConnected&&this.ready&&this.sync()}sync(){A(this,"field",f("webapp",":is(stickly-input,stickly-textarea):not([inherit-tokens])")+rt),at(this);const r=this.control;r&&r!==this.bound&&(this.bound=r,r.addEventListener("input",()=>{this.currentValue=r.value,this.toggleAttribute("filled",!!r.value.trim()),this.dispatchEvent(new CustomEvent("value-change",{detail:{value:this.currentValue},bubbles:!0,composed:!0}))}),r.addEventListener("blur",()=>this.dispatchEvent(new CustomEvent("field-touched",{bubbles:!0,composed:!0}))))}}e.define(a,i)}function Kt(a=customElements){Y("stickly-input","input",a)}function Qt(a=customElements){Y("stickly-textarea","textarea",a)}class Gt extends HTMLElement{cleanupTimeout;colors=["var(--color-success)","var(--color-accent)","var(--color-brand)","var(--color-border)"];emojis=["🎉","✨","🌟","🎊","📚","🎯","🗣️","💭","🔤","📖"];get updateComplete(){return Promise.resolve(!0)}connectedCallback(){const t=this.ownerDocument.defaultView,e=this.shadowRoot??this.attachShadow({mode:"open"});e.replaceChildren();const i=this.ownerDocument.createElement("style");i.textContent=f("extension")+`
      :host { position:fixed;pointer-events:none;z-index:9999;will-change:transform; }
      .confetti { position:absolute;width:8px;height:8px;border-radius:var(--radius-sm);animation:confetti-firework 2.5s var(--transition-firework) forwards;will-change:transform,opacity; }
      .emoji { position:absolute;font-size:20px;animation:emoji-pop 2.5s var(--transition-firework) forwards;will-change:transform,opacity; }
      @keyframes confetti-firework { 0% {transform:translate3d(0,0,0) rotate(0deg);opacity:1;}100%{transform:translate3d(calc(var(--dx)*1.2),-280px,0) rotate(180deg);opacity:0;} }
      @keyframes emoji-pop {0%{transform:translate3d(0,0,0) scale(1) rotate(0deg);opacity:1;}100%{transform:translate3d(calc(var(--dx)*.8),-200px,0) scale(1.2) rotate(240deg);opacity:0;} }
      @media(prefers-reduced-motion:reduce) { .confetti,.emoji{display:none;animation:none;} }
    `,e.append(i,this.ownerDocument.createElement("slot")),t.matchMedia("(prefers-reduced-motion: reduce)").matches||this.createConfetti(e),this.cleanupTimeout=t.setTimeout(()=>this.remove(),t.matchMedia("(prefers-reduced-motion: reduce)").matches?0:2500)}disconnectedCallback(){this.cleanupTimeout!==void 0&&this.ownerDocument.defaultView?.clearTimeout(this.cleanupTimeout),this.cleanupTimeout=void 0,this.shadowRoot?.replaceChildren()}createConfetti(t){const e=this.ownerDocument.createDocumentFragment(),i=this.getBoundingClientRect(),o=i.width/2,r=i.height/2;for(let l=0;l<25;l++){const n=this.ownerDocument.createElement("div");n.className="confetti",n.style.left=`${o+(Math.random()*30-15)}px`,n.style.top=`${r+(Math.random()*30-15)}px`,n.style.setProperty("--dx",`${(Math.random()-.5)*160}px`),n.style.backgroundColor=this.colors[Math.floor(Math.random()*this.colors.length)],n.style.animationDelay=`${Math.random()*.3}s`,e.append(n)}for(let l=0;l<8;l++){const n=this.ownerDocument.createElement("div");n.className="emoji",n.textContent=this.emojis[Math.floor(Math.random()*this.emojis.length)],n.style.left=`${o+(Math.random()*40-20)}px`,n.style.top=`${r}px`,n.style.setProperty("--dx",`${(Math.random()-.5)*300}px`),n.style.animationDelay=`${Math.random()*.2}s`,e.append(n)}t.append(e)}}function Zt(a="stickly-audio-button"){const t=(e="")=>a===":host"&&e?`:host(${e})`:a+e;return`
${t()} { display:inline-flex;align-items:center;justify-content:center;position:relative;align-self:center;min-height:32px;min-width:32px;flex-shrink:0;padding:0;border-radius:var(--radius-xs);transition:all .2s var(--transition-smooth);cursor:pointer; }
${t(":hover")} { background:var(--overlay-medium); }
${t("[dark]:hover")} { background:var(--overlay-ink-subtle); }
${t()} .stickly-audio-image { height:16px;width:16px;transition:transform .2s var(--transition-smooth); }
${t()} .stickly-audio-control { display:grid;place-items:center;background:transparent;color:inherit;border:0;box-sizing:border-box;padding:var(--space-xs);width:100%;min-height:32px;cursor:pointer;border-radius:var(--radius-xs); }
${t()} .stickly-audio-control:focus-visible { outline:2px solid var(--color-accent);outline-offset:3px; }
${t(":active")} .stickly-audio-image { transform:scale(.9); }
${t()} .stickly-audio-control > .stickly-audio-image, ${t()} .stickly-audio-control > stickly-loader { grid-area:1/1; }
${t("[loading]")} .stickly-audio-image { opacity:0; }
${t()} .stickly-audio-control > stickly-loader[hidden] { display:none; }
@media(hover:none),(pointer:coarse) { ${t()} {box-sizing:border-box;height:44px;width:44px;} ${t()} .stickly-audio-control {min-height:44px;} }
`}class Jt extends HTMLElement{static observedAttributes=["loading","failed","dark","icon-light","icon-dark","label","retry-label"];darkValue=!0;button=null;image=null;loader=null;get updateComplete(){return Promise.resolve(!0)}get loading(){return this.hasAttribute("loading")}set loading(t){this.toggleAttribute("loading",!!t)}get failed(){return this.hasAttribute("failed")}set failed(t){this.toggleAttribute("failed",!!t)}get dark(){return this.darkValue}set dark(t){this.darkValue=!!t,this.sync()}get ttsIconUrlLight(){return this.getAttribute("icon-light")??""}set ttsIconUrlLight(t){this.setAttribute("icon-light",t)}get ttsIconUrlDark(){return this.getAttribute("icon-dark")??""}set ttsIconUrlDark(t){this.setAttribute("icon-dark",t)}get label(){return this.getAttribute("label")??"Play pronunciation"}set label(t){this.setAttribute("label",t)}get retryLabel(){return this.getAttribute("retry-label")??"Try again"}set retryLabel(t){this.setAttribute("retry-label",t)}connectedCallback(){for(const t of["loading","failed","dark","ttsIconUrlLight","ttsIconUrlDark","label","retryLabel"]){if(!Object.prototype.hasOwnProperty.call(this,t))continue;const e=this[t];delete this[t],this[t]=e}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"}),e=this.ownerDocument.createElement("style");e.textContent=f("extension")+Zt(":host"),this.button=this.ownerDocument.createElement("button"),this.button.type="button",this.button.className="stickly-audio-control",this.image=this.ownerDocument.createElement("img"),this.image.className="stickly-audio-image",this.image.alt="",this.loader=this.ownerDocument.createElement("stickly-loader"),this.button.append(this.image,this.loader),t.append(e,this.button),this.button.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),!this.loading&&this.dispatchEvent(new CustomEvent("audio-request",{bubbles:!0,composed:!0}))})}this.sync()}attributeChangedCallback(t,e,i){t==="dark"&&(this.darkValue=i!==null),this.sync()}focus(t){(this.button??this.querySelector("button"))?.focus(t)}sync(){if(!this.button)return;this.button.disabled=this.loading,this.button.setAttribute("aria-label",this.label),this.button.setAttribute("aria-busy",String(this.loading)),this.button.title=this.failed?this.retryLabel:this.label;const t=this.dark?this.ttsIconUrlDark:this.ttsIconUrlLight;t?this.image.src=t:this.image.removeAttribute("src"),this.loader.hidden=!this.loading}}function K(a="stickly-dropdown",t="1rem"){const e=o=>`calc(${o} * ${t})`,i=(o="")=>a===":host"&&o?`:host(${o})`:a+o;return`
${i()} { display:inline-flex; justify-content:flex-end; }
${i("[full-width]")} { width:100%; }
${i('[align="start"]')} { justify-content:flex-start; }
${i()} *,${i()} *::before,${i()} *::after { box-sizing:border-box; }
${i()} .stickly-dropdown-trigger { display:inline-flex; width:${e("2")};height:${e("2")};align-items:center;justify-content:center;border-radius:9999px;border:1px solid rgb(var(--color-border-rgb)/.25);background:rgb(var(--color-canvas-rgb)/.7);color:var(--color-text-muted);cursor:pointer;transition:all var(--motion-normal) var(--ease-standard);padding:0; }
${i()} .stickly-dropdown-trigger:hover { border-color:rgb(var(--color-accent-rgb)/.5);background:rgb(var(--color-accent-rgb)/.1);color:var(--color-accent); }
${i()} .stickly-dropdown-trigger:focus-visible { outline:2px solid var(--color-accent);outline-offset:2px; }
${i()} .stickly-dropdown-trigger:disabled { cursor:not-allowed;opacity:.6; }
${i()} .stickly-dropdown-panel { position:fixed;z-index:50;margin:0;overflow-y:auto;border-radius:${e(".75")};border:1px solid rgb(var(--color-border-rgb)/.3);padding:${e(".25")};box-shadow:0 20px 40px rgb(2 6 23/.28);outline:none;background:rgb(var(--color-white-rgb));color:var(--color-text-on-light); }
${i('[theme="dark"]')} .stickly-dropdown-panel { border-color:rgb(var(--color-white-rgb)/.15);background:rgb(var(--color-surface-rgb)/.95);color:var(--color-text);backdrop-filter:blur(40px); }
${i()} .stickly-dropdown-panel::backdrop { background:transparent; }

`+O(o=>`${i()} .stickly-dropdown-item${o}`,e)+(a===":host"?O(o=>`::slotted(button[role="menuitem"]${o})`,e):"")}function O(a,t){return`
${a("")} { display:flex;width:100%;align-items:center;border-radius:var(--radius-lg);padding:${t(".75")};text-align:left;font-family:inherit;font-size:${t(".875")};line-height:${t("1.25")};font-weight:600;transition:all var(--motion-normal) var(--ease-standard);color:var(--color-text);border:0;background:transparent;cursor:pointer; }
${a(":hover")},${a(":focus-visible")} { background:rgb(var(--color-white-rgb)/.1);outline:none; }
${a('[data-variant="danger"]')} { color:var(--color-danger); }
${a('[data-variant="danger"]:hover')},${a('[data-variant="danger"]:focus-visible')} { background:rgb(var(--color-danger-rgb)/.1); }
`}function Q(a="stickly-dialog",t="1rem"){const e=o=>`calc(${o} * ${t})`,i=(o="")=>a===":host"&&o?`:host(${o})`:a+o;return`
${i()} { position:fixed;inset:0;z-index:120;display:flex;align-items:flex-end;justify-content:center;background:transparent;padding:0;backdrop-filter:blur(3px);animation:stickly-dialog-overlay-in var(--motion-normal) var(--ease-standard) both; }
${i()} *,${i()} *::before,${i()} *::after { box-sizing:border-box; }
${i("[closing]")} { animation:stickly-dialog-overlay-in var(--motion-fast) var(--ease-standard) reverse forwards; }
${i()} .stickly-dialog-panel { position:relative;display:flex;height:auto;width:100%;min-height:0;max-height:min(96dvh,96vh);flex-direction:column;overflow:hidden;border-radius:${e("1")} ${e("1")} 0 0;border:2px solid var(--color-accent);border-bottom-width:0;background:var(--color-surface);padding-bottom:env(safe-area-inset-bottom);color:var(--color-text);touch-action:pan-y;box-shadow:0 -4px 0 var(--color-accent),0 -22px 52px rgb(0 0 0/.38);animation:stickly-dialog-drawer-in var(--motion-normal) var(--ease-bounce) both; }
${i("[closing]")} .stickly-dialog-panel { animation:stickly-dialog-drawer-out var(--motion-fast) var(--ease-standard) forwards; }
${i("[dragging]")} .stickly-dialog-panel { animation:none!important;transition:none; }
${i("[snapping]")} .stickly-dialog-panel { transition:transform var(--motion-fast) var(--ease-bounce); }
${i()} .stickly-dialog-handle { display:flex;min-height:${e("2.75")};flex-shrink:0;cursor:grab;touch-action:none;user-select:none;align-items:center;justify-content:center;padding:${e(".625")} ${e("1")} ${e(".375")}; }
${i()} .stickly-dialog-handle:active { cursor:grabbing; }
${i()} .stickly-dialog-grip { display:block;height:${e(".32")};width:${e("3")};border-radius:9999px;background:var(--color-accent); }
${i()} .stickly-dialog-content { display:flex;min-height:0;flex:1 1 0%;flex-direction:column;overflow:hidden; }
@media(min-width:576px) {
 ${i()} { align-items:center;padding:${e("1")}; }
 ${i()} .stickly-dialog-panel { width:92vw;max-width:95vw;max-height:min(92vh,calc(100vh - ${e("2")}));border-radius:${e("1")};border-bottom-width:2px;padding-bottom:0;box-shadow:0 24px 65px rgb(0 0 0/.38),4px 4px 0 var(--color-accent);animation:stickly-dialog-modal-in var(--motion-normal) var(--ease-bounce) both; }
 ${i("[width]")} .stickly-dialog-panel { width:var(--app-dialog-width);max-width:min(95vw,var(--app-dialog-width)); }
 ${i("[closing]")} .stickly-dialog-panel { animation:stickly-dialog-modal-out var(--motion-fast) var(--ease-standard) forwards; }
 ${i()} .stickly-dialog-handle { display:none; }
}
@media(prefers-reduced-motion:reduce) { ${i()},${i()} .stickly-dialog-panel { animation:none; } }
@keyframes stickly-dialog-overlay-in { from{opacity:0}to{opacity:1} }
@keyframes stickly-dialog-drawer-in { from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)} }
@keyframes stickly-dialog-drawer-out { from{transform:translate3d(0,var(--app-dialog-drag-y,0px),0)}to{transform:translate3d(0,100%,0)} }
@keyframes stickly-dialog-modal-in { from{opacity:0;transform:translate3d(0,14px,0) scale(.985)}to{opacity:1;transform:translate3d(0,0,0) scale(1)} }
@keyframes stickly-dialog-modal-out { from{opacity:1;transform:translate3d(0,0,0) scale(1)}to{opacity:0;transform:translate3d(0,10px,0) scale(.985)} }
`}const Re=K()+O(a=>`.stickly-dropdown-item${a}`,a=>`calc(${a} * 1rem)`)+Q();function G(a,t,e){const i=typeof a.getRootNode=="function"?a.getRootNode():a.ownerDocument;if(("host"in i?i:a.ownerDocument).querySelector(`style[data-stickly-${t}]`))return;const r=a.ownerDocument.createElement("style");r.setAttribute(`data-stickly-${t}`,""),r.textContent=f("webapp",`${a.localName}:not([inherit-tokens])`)+e+"[data-stickly-projection]{display:contents}",("host"in i?i:a.ownerDocument.head).appendChild(r)}function M(a,t){const e=a.querySelector("[data-stickly-projection]");if(e){e.parentElement!==t&&t.appendChild(e);return}for(const i of Array.from(a.childNodes))i!==t&&!(i.nodeType===1&&i.classList.contains("stickly-dialog-panel"))&&!(i.nodeType===1&&i.classList.contains("stickly-dropdown-trigger"))&&t.appendChild(i)}function te(a,t,e){e===null?a.removeAttribute(t):a.setAttribute(t,e)}function R(a){G(a,"dialog-shell",Q());let t=a.querySelector(".stickly-dialog-panel");if(t)M(a,t.querySelector(".stickly-dialog-content"));else{t=a.ownerDocument.createElement("div"),t.className="stickly-dialog-panel";const e=a.ownerDocument.createElement("div");e.className="stickly-dialog-handle";const i=a.ownerDocument.createElement("span");i.className="stickly-dialog-grip",e.appendChild(i);const o=a.ownerDocument.createElement("div");o.className="stickly-dialog-content",M(a,o),t.appendChild(e),t.appendChild(o),a.appendChild(t)}t.className=`stickly-dialog-panel ${a.getAttribute("panel-class")||""}`.trim(),t.setAttribute("role","dialog"),t.tabIndex=-1,t.setAttribute("aria-modal","true");for(const e of["aria-label","aria-labelledby"])te(t,e,a.getAttribute(e));a.style.setProperty("--app-dialog-width",a.getAttribute("width")||"")}function H(a){G(a,"dropdown-shell",K());let t=a.querySelector(".stickly-dropdown-trigger"),e=a.querySelector(".stickly-dropdown-panel");!t||!e?(t=a.ownerDocument.createElement("button"),t.type="button",t.className="stickly-dropdown-trigger",e=a.ownerDocument.createElement("div"),e.className="stickly-dropdown-panel",e.setAttribute("popover","manual"),e.setAttribute("role","menu"),M(a,e),a.appendChild(t),a.appendChild(e)):M(a,e);const i=a.getAttribute("icon")||"more_horiz";if(t.getAttribute("data-icon")!==i){const o=a.ownerDocument.createElement("div");for(o.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${nt(i)}</svg>`;t.firstChild;)t.removeChild(t.firstChild);for(const r of Array.from(o.childNodes))t.appendChild(r);t.setAttribute("data-icon",i)}t.disabled=a.hasAttribute("disabled"),t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded",String(!!a.open));for(const o of[t,e])o.setAttribute("aria-label",a.getAttribute("aria-label")||"Open menu")}z("stickly-dialog",R);z("stickly-dropdown",H);function ee(a){const{triggerRect:t,menuWidth:e,menuHeight:i,viewportWidth:o,viewportHeight:r,align:l="end",viewportPadding:n=8,gap:c=8,maxMenuHeight:s=288}=a,d=Math.max(0,o-n*2),u=Math.min(e,d);let h=l==="end"?t.right-u:t.left;h=Math.min(Math.max(n,h),Math.max(n,o-u-n));const p=r-t.bottom-n,b=t.top-n,g=p>=i+c,m=b>=i+c;let v;g&&m?v=p>=b:g?v=!0:m?v=!1:v=p>=b;const w=Math.max(120,(v?p:b)-c),x=Math.min(s,w,i),L=Math.min(x,i);let y;if(v){y=t.bottom+c;const S=y+L-(r-n);S>0&&(y=Math.max(t.bottom+c,y-S))}else y=t.top-c-L,y=Math.max(n,y);return{top:y,left:h,maxHeight:x,placeBelow:v}}let ie=0;class oe extends HTMLElement{static observedAttributes=["disabled","theme","align","min-width","aria-label","icon"];trigger=null;panel=null;frame=0;abort=null;opened=!1;get open(){return this.opened}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get theme(){return this.getAttribute("theme")||"dark"}set theme(t){this.setAttribute("theme",t)}get align(){return this.getAttribute("align")==="start"?"start":"end"}set align(t){this.setAttribute("align",t)}get minWidth(){return Number(this.getAttribute("min-width")??152)}set minWidth(t){this.setAttribute("min-width",String(t))}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){for(const t of["disabled","theme","align","minWidth"])if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}queueMicrotask(()=>{this.isConnected&&this.initialize()})}initialize(){this.hasAttribute("theme")||(this.theme="dark"),H(this);const t=this;if(this.trigger=t.querySelector(".stickly-dropdown-trigger"),this.panel=t.querySelector(".stickly-dropdown-panel"),!this.trigger||!this.panel)return;this.panel.id||(this.panel.id=`stickly-dropdown-menu-${++ie}`),this.trigger.setAttribute("aria-haspopup","menu"),this.trigger.setAttribute("aria-controls",this.panel.id),this.abort?.abort(),this.abort=new AbortController;const e={signal:this.abort.signal};this.trigger.addEventListener("click",this.toggleMenu,e),this.panel.addEventListener("keydown",this.onKeydown,e),this.panel.addEventListener("click",this.onMenuClick,e),this.ownerDocument.addEventListener("pointerdown",this.outside,e),this.ownerDocument.defaultView?.addEventListener("resize",this.reposition,e),this.ownerDocument.defaultView?.addEventListener("scroll",this.reposition,e),this.sync()}disconnectedCallback(){this.abort?.abort(),this.ownerDocument.defaultView?.cancelAnimationFrame(this.frame),this.closeMenu()}attributeChangedCallback(){this.trigger&&H(this),this.sync(),this.disabled&&this.closeMenu(),this.open&&this.position()}focus(t){this.trigger?.focus(t)}toggleMenu=t=>{t?.stopPropagation(),this.open?this.closeMenu():this.openMenu()};openMenu(){this.disabled||this.open||!this.panel||(this.panel.showPopover(),this.opened=!0,this.sync(),this.emit(!0),this.position(),this.frame=this.ownerDocument.defaultView?.requestAnimationFrame(()=>{this.open&&(this.position(),this.items()[0]?.focus())})??0)}closeMenu(t=!1){this.open&&(this.panel?.matches(":popover-open")&&this.panel.hidePopover(),this.opened=!1,this.sync(),this.emit(!1),t&&this.trigger?.focus())}emit(t){this.dispatchEvent(new CustomEvent("openedChange",{detail:t,bubbles:!0,composed:!0}))}sync(){if(!this.trigger||!this.panel)return;this.trigger.disabled=this.disabled,this.trigger.setAttribute("aria-expanded",String(this.open));const t=this.getAttribute("aria-label")||"Open menu";this.trigger.setAttribute("aria-label",t),this.panel.setAttribute("aria-label",t)}items(){return Array.from(this.querySelectorAll('button[role="menuitem"]:not([disabled])'))}onMenuClick=t=>{t.composedPath().some(e=>e instanceof Element&&e.matches('[role="menuitem"]:not([disabled])'))&&this.closeMenu(!0)};outside=t=>{this.open&&!t.composedPath().includes(this)&&this.closeMenu()};reposition=()=>{this.open&&this.position()};onKeydown=t=>{if(t.key==="Escape"){t.preventDefault(),this.closeMenu(!0);return}const e=this.items();if(!e.length)return;const i=e.findIndex(r=>r===this.ownerDocument.activeElement||r===this.getRootNode().activeElement);let o;t.key==="ArrowDown"&&(o=i<0?0:(i+1)%e.length),t.key==="ArrowUp"&&(o=i<=0?e.length-1:i-1),t.key==="Home"&&(o=0),t.key==="End"&&(o=e.length-1),o!==void 0&&(t.preventDefault(),e[o].focus())};position(){const t=this.ownerDocument.defaultView;if(!t||!this.trigger||!this.panel)return;const e=Math.max(this.minWidth,this.panel.offsetWidth||this.minWidth),i=ee({triggerRect:this.trigger.getBoundingClientRect(),menuWidth:e,menuHeight:this.panel.scrollHeight||88,viewportWidth:t.innerWidth,viewportHeight:t.innerHeight,align:this.align});Object.assign(this.panel.style,{top:`${i.top}px`,left:`${i.left}px`,minWidth:`${e}px`,maxHeight:`${i.maxHeight}px`})}}const q=new WeakMap;class re extends HTMLElement{static observedAttributes=["width","aria-labelledby","aria-label","panel-class"];panel=null;handle=null;abort=null;closeTimer;snapTimer;previousFocus=null;dragStart=0;dragOffset=0;pointer=null;locked=!1;get closing(){return this.hasAttribute("closing")}get width(){return this.getAttribute("width")||""}set width(t){t?this.setAttribute("width",t):this.removeAttribute("width")}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"width")){const t=this.width;delete this.width,this.width=t}queueMicrotask(()=>{this.isConnected&&this.initialize()})}initialize(){R(this);const t=this;if(this.panel=t.querySelector(".stickly-dialog-panel"),this.handle=t.querySelector(".stickly-dialog-handle"),!this.panel)return;this.abort?.abort(),this.abort=new AbortController;const e={signal:this.abort.signal};this.addEventListener("click",this.overlayClick,e),this.ownerDocument.addEventListener("keydown",this.keydown,e),this.handle?.addEventListener("pointerdown",this.pointerDown,e),this.handle?.addEventListener("pointermove",this.pointerMove,e),this.handle?.addEventListener("pointerup",this.pointerUp,e),this.handle?.addEventListener("pointercancel",this.pointerCancel,e),this.sync();const i=this.deepActive();if(this.previousFocus=i instanceof HTMLElement?i:null,!this.locked){const o=q.get(this.ownerDocument)??{count:0,hadClass:this.ownerDocument.body.classList.contains("overflow-hidden"),overflow:this.ownerDocument.body.style.overflow,dialogs:[]};o.count++,o.dialogs.push(this),q.set(this.ownerDocument,o),this.ownerDocument.body.classList.add("overflow-hidden"),this.ownerDocument.body.style.overflow="hidden",this.locked=!0}this.panel.focus()}disconnectedCallback(){this.abort?.abort();const t=this.ownerDocument.defaultView;if(t?.clearTimeout(this.closeTimer),t?.clearTimeout(this.snapTimer),this.locked){const e=q.get(this.ownerDocument);e&&(e.dialogs=e.dialogs.filter(i=>i!==this)),e&&--e.count===0&&(e.hadClass||this.ownerDocument.body.classList.remove("overflow-hidden"),this.ownerDocument.body.style.overflow=e.overflow,q.delete(this.ownerDocument)),this.locked=!1}this.previousFocus?.focus()}attributeChangedCallback(){this.panel&&R(this),this.sync()}focus(t){this.panel?.focus(t)}requestClose(t){if(this.closing)return;this.setAttribute("closing",""),this.removeAttribute("dragging"),this.pointer=null,this.setDrag(0);const e=this.ownerDocument.defaultView,i=()=>this.dispatchEvent(new CustomEvent("closed",{detail:t,bubbles:!0,composed:!0}));if(e?.matchMedia("(prefers-reduced-motion: reduce)").matches){i();return}this.closeTimer=e?.setTimeout(i,260)}sync(){if(this.panel){this.style.setProperty("--app-dialog-width",this.width);for(const t of["aria-labelledby","aria-label"]){const e=this.getAttribute(t);e?this.panel.setAttribute(t,e):this.panel.removeAttribute(t)}}}overlayClick=t=>{t.composedPath().includes(this.panel)||this.requestClose()};keydown=t=>{const e=q.get(this.ownerDocument)?.dialogs;if(e?.[e.length-1]!==this||t.defaultPrevented)return;if(t.key==="Escape"){t.preventDefault(),this.requestClose();return}if(t.key!=="Tab")return;const i=this.focusableItems(),o=this.deepActive();if(!i.length){t.preventDefault(),this.panel?.focus();return}const r=i.indexOf(o);(r<0||!t.shiftKey&&r===i.length-1||t.shiftKey&&r===0)&&(t.preventDefault(),i[t.shiftKey?i.length-1:0].focus())};deepActive(){let t=this.ownerDocument.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}focusableItems(){const t=[],e=i=>{i instanceof HTMLElement&&i.matches("button,input,select,textarea,a[href],[tabindex]")&&i.tabIndex>=0&&!i.matches(":disabled,[hidden]")&&i.getClientRects().length&&this.ownerDocument.defaultView?.getComputedStyle(i).visibility!=="hidden"&&t.push(i);const o=i instanceof HTMLSlotElement?i.assignedElements({flatten:!0}):Array.from((i.shadowRoot??i).children);for(const r of o)e(r)};return this.panel&&e(this.panel),t}pointerDown=t=>{this.closing||!this.ownerDocument.defaultView?.matchMedia("(max-width: 575px)").matches||(this.pointer=t.pointerId,this.dragStart=t.clientY,this.dragOffset=0,this.setAttribute("dragging",""),this.handle?.setPointerCapture(t.pointerId))};pointerMove=t=>{this.pointer!==t.pointerId||!this.hasAttribute("dragging")||(this.dragOffset=Math.max(0,t.clientY-this.dragStart),this.setDrag(this.dragOffset))};pointerUp=t=>{this.pointer!==t.pointerId||!this.hasAttribute("dragging")||(this.handle?.hasPointerCapture(t.pointerId)&&this.handle.releasePointerCapture(t.pointerId),this.dragOffset>=Math.max(120,(this.panel?.offsetHeight??0)*.24)?this.requestClose():this.resetDrag())};pointerCancel=t=>{this.pointer===t.pointerId&&this.resetDrag()};resetDrag(){this.pointer=null,this.dragOffset=0,this.removeAttribute("dragging"),this.setAttribute("snapping",""),this.setDrag(0);const t=this.ownerDocument.defaultView;t?.clearTimeout(this.snapTimer),this.snapTimer=t?.setTimeout(()=>this.removeAttribute("snapping"),180)}setDrag(t){this.panel&&(this.panel.style.transform=t?`translate3d(0, ${t}px, 0)`:"",this.panel.style.setProperty("--app-dialog-drag-y",`${t}px`))}}const ae=`
:is(stickly-select,stickly-combobox) { display:block; min-width:0; }
:is(stickly-select,stickly-combobox) *, :is(stickly-select,stickly-combobox) *::before, :is(stickly-select,stickly-combobox) *::after { box-sizing:border-box; }
:is(stickly-select,stickly-combobox) .stickly-picker-grid { display:grid; gap:.5rem; }
:is(stickly-select,stickly-combobox) .stickly-picker-label { font-size:1rem; line-height:1.5rem; font-weight:700; color:rgb(var(--color-text-on-light-rgb)/.7); transition:color 150ms cubic-bezier(.4,0,.2,1); }
:is(stickly-select,stickly-combobox)[theme="dark"] .stickly-picker-label { color:rgb(var(--color-text-rgb)); }
:is(stickly-select,stickly-combobox):is([focused],[open]) .stickly-picker-label { color:rgb(var(--color-accent-rgb)); }
:is(stickly-select,stickly-combobox) .stickly-picker-shell { position:relative; isolation:isolate; min-width:0; height:3rem; border-radius:10px; border:2px solid rgb(var(--color-border-rgb)/.4); background:rgb(var(--color-white-rgb)); transition-property:border-color,box-shadow,background-color; transition-duration:var(--motion-fast); transition-timing-function:var(--ease-bounce); }
stickly-select .stickly-picker-shell { overflow:hidden; }
stickly-combobox .stickly-picker-shell { display:flex; align-items:stretch; }
:is(stickly-select,stickly-combobox)[size="small"] .stickly-picker-shell { height:2.5rem; }
:is(stickly-select,stickly-combobox)[size="large"] .stickly-picker-shell { height:3.5rem; }
:is(stickly-select,stickly-combobox) .stickly-picker-shell:hover { border-color:rgb(var(--color-border-rgb)/.65); }
:is(stickly-select,stickly-combobox)[disabled] .stickly-picker-shell { opacity:.7; }
:is(stickly-select,stickly-combobox)[disabled]:not([theme="dark"]) .stickly-picker-shell { background:rgb(var(--color-white-rgb)/.85); }
:is(stickly-select,stickly-combobox):is([invalid],[data-error]) .stickly-picker-shell { border-color:rgb(var(--color-danger-rgb)); }
:is(stickly-select,stickly-combobox)[theme="dark"] .stickly-picker-shell { border-color:rgb(var(--color-white-rgb)/.1); background:rgb(var(--color-white-rgb)/.05); }
:is(stickly-select,stickly-combobox)[theme="dark"] .stickly-picker-shell:hover { border-color:rgb(var(--color-white-rgb)/.15); background:rgb(var(--color-white-rgb)/.1); }
:is(stickly-select,stickly-combobox) .stickly-picker-shell:focus-within, :is(stickly-select,stickly-combobox) .stickly-picker-shell:focus-within:hover { border-color:rgb(var(--color-accent-rgb)); box-shadow:0 0 #0000,0 0 #0000,3px 3px 0 rgb(var(--color-accent-rgb)); }
:is(stickly-select,stickly-combobox):is([invalid],[data-error]) .stickly-picker-shell:focus-within, :is(stickly-select,stickly-combobox):is([invalid],[data-error]) .stickly-picker-shell:focus-within:hover { border-color:rgb(var(--color-danger-rgb)); box-shadow:0 0 #0000,0 0 #0000,3px 3px 0 rgb(var(--color-danger-rgb)); }
:is(stickly-select,stickly-combobox) .stickly-picker-native { height:100%; width:100%; min-width:0; appearance:none; border:0 solid #e5e7eb; background:transparent; padding:0 0 0 1rem; outline:2px solid transparent; outline-offset:2px; margin:0; font:inherit; font-size:1rem; line-height:1.5rem; color:rgb(var(--color-text-on-light-rgb)); cursor:pointer; transition-property:background-color,color; transition-duration:var(--motion-normal); transition-timing-function:cubic-bezier(.4,0,.2,1); }
stickly-select .stickly-picker-native { display:flex; align-items:center; overflow:hidden; border-radius:inherit; }
stickly-combobox .stickly-picker-native { display:block; }
:is(stickly-select,stickly-combobox)[size="small"] .stickly-picker-native { padding-left:.875rem; font-size:.875rem; line-height:1.25rem; }
:is(stickly-select,stickly-combobox)[size="large"] .stickly-picker-native { padding-left:1.25rem; font-size:1.125rem; line-height:1.75rem; }
:is(stickly-select,stickly-combobox)[theme="dark"] .stickly-picker-native { color:rgb(var(--color-text-rgb)); }
:is(stickly-select,stickly-combobox)[disabled] .stickly-picker-native { cursor:not-allowed; }
stickly-combobox[open]:not([disabled]) .stickly-picker-native { cursor:text; }
stickly-combobox .stickly-picker-native::placeholder { opacity:1; color:rgb(var(--color-text-on-light-rgb)/.45); }
stickly-combobox[theme="dark"] .stickly-picker-native::placeholder { color:rgb(var(--color-text-muted-rgb)); }
:is(stickly-select,stickly-combobox) .stickly-picker-content { display:flex; min-width:0; flex:1 1 0%; align-items:stretch; overflow:hidden; border-radius:inherit; }
:is(stickly-select,stickly-combobox) .stickly-picker-input-wrap { position:relative; min-width:0; flex:1 1 0%; }
:is(stickly-select,stickly-combobox) .stickly-picker-value { display:flex; min-width:0; flex:1 1 0%; align-items:center; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; text-align:left; }
stickly-select:not([filled]) .stickly-picker-value { color:rgb(var(--color-text-on-light-rgb)/.45); }
stickly-select[theme="dark"]:not([filled]) .stickly-picker-value { color:rgb(var(--color-text-muted-rgb)); }
:is(stickly-select,stickly-combobox) .stickly-picker-chevron { display:flex; flex-shrink:0; align-self:stretch; align-items:center; justify-content:center; width:2.75rem; padding:0; border:0 solid #e5e7eb; border-left-width:1px; border-left-color:rgb(var(--color-border-rgb)/.3); border-radius:0 8px 8px 0; background:rgb(var(--color-action-neutral-rgb)/.7); color:rgb(var(--color-text-on-light-rgb)); transition:color var(--motion-normal) cubic-bezier(.4,0,.2,1),background-color var(--motion-normal) cubic-bezier(.4,0,.2,1),border-color var(--motion-normal) cubic-bezier(.4,0,.2,1); }
stickly-select .stickly-picker-chevron { pointer-events:none; margin-left:1rem; }
stickly-combobox .stickly-picker-chevron { pointer-events:auto; }
:is(stickly-select,stickly-combobox)[size="small"] .stickly-picker-chevron { width:2.5rem; }
:is(stickly-select,stickly-combobox)[size="large"] .stickly-picker-chevron { width:3rem; }
stickly-select[size="small"] .stickly-picker-chevron { margin-left:.875rem; }
stickly-select[size="large"] .stickly-picker-chevron { margin-left:1.25rem; }
:is(stickly-select,stickly-combobox)[theme="dark"] .stickly-picker-chevron { border-left-color:rgb(var(--color-white-rgb)/.1); background:rgb(var(--color-white-rgb)/.1); color:rgb(var(--color-text-rgb)); }
stickly-combobox[theme="dark"] .stickly-picker-chevron { border-left-color:rgb(var(--color-white-rgb)/.15); }
:is(stickly-select,stickly-combobox):is([invalid],[data-error]) .stickly-picker-chevron { border-left-color:rgb(var(--color-danger-rgb)/.2); background:rgb(var(--color-danger-rgb)/.1); color:rgb(var(--color-danger-rgb)); }
stickly-select[theme="dark"]:is([invalid],[data-error]) .stickly-picker-chevron { border-left-color:rgb(var(--color-danger-rgb)/.3); background:rgb(var(--color-danger-rgb)/.15); }
/* Existing dark utility colors win the conflicting error modifiers. */
:is(stickly-select,stickly-combobox)[theme="dark"]:is([invalid],[data-error]) .stickly-picker-chevron { border-left-color:rgb(var(--color-white-rgb)/.1); background:rgb(var(--color-white-rgb)/.1); color:rgb(var(--color-text-rgb)); }
stickly-combobox[theme="dark"]:is([invalid],[data-error]) .stickly-picker-chevron { border-left-color:rgb(var(--color-white-rgb)/.15); }
:is(stickly-select,stickly-combobox) .stickly-picker-chevron svg { width:1rem; height:1rem; transition:transform var(--motion-normal) cubic-bezier(.4,0,.2,1); }
:is(stickly-select,stickly-combobox)[open] .stickly-picker-chevron svg { transform:rotate(180deg); }
:is(stickly-select,stickly-combobox) .stickly-picker-popover { position:fixed; margin:0; border-radius:.75rem; border:1px solid rgb(var(--color-border-rgb)/.3); background:rgb(var(--color-white-rgb)); color:rgb(var(--color-text-on-light-rgb)); box-shadow:0 0 #0000,0 0 #0000,0 18px 48px rgb(0 0 0/.28); outline:2px solid transparent; outline-offset:2px; }
:is(stickly-select,stickly-combobox) .stickly-picker-popover::backdrop { background:transparent; }
stickly-select .stickly-picker-popover { max-height:18rem; overflow-y:auto; padding:.375rem; }
stickly-select[theme="dark"] .stickly-picker-popover { border-color:rgb(var(--color-white-rgb)/.15); background:rgb(var(--color-surface-rgb)/.95); color:rgb(var(--color-text-rgb)); box-shadow:0 0 #0000,0 0 #0000,0 18px 48px rgb(2 6 23/.35); backdrop-filter:blur(40px); }
stickly-combobox .stickly-picker-popover { overflow:hidden; padding:0; }
stickly-combobox .stickly-picker-popover-content { display:flex; max-height:inherit; flex-direction:column; }
stickly-combobox .stickly-picker-listbox { min-height:0; overscroll-behavior:contain; overflow-y:auto; padding:.25rem .5rem .5rem; }
stickly-combobox .stickly-picker-section { flex-shrink:0; padding:.75rem .75rem .25rem; font-size:11px; font-weight:800; line-height:1.6; text-transform:uppercase; letter-spacing:.08em; color:rgb(var(--color-text-on-light-rgb)/.55); }
stickly-combobox .stickly-picker-empty { padding:.75rem; font-size:.875rem; line-height:1.25rem; font-weight:600; color:rgb(var(--color-text-on-light-rgb)/.55); }
:is(stickly-select,stickly-combobox) .stickly-picker-option { display:flex; min-height:2.5rem; width:100%; align-items:center; gap:.75rem; border-radius:var(--radius-lg); border:0 solid #e5e7eb; background:transparent; padding:.5rem .75rem; text-align:left; font:inherit; font-size:.875rem; line-height:1.25rem; font-weight:600; outline:2px solid transparent; outline-offset:2px; transition:background-color var(--motion-fast) cubic-bezier(.4,0,.2,1); }
:is(stickly-select,stickly-combobox) .stickly-picker-option:disabled { cursor:not-allowed; opacity:.4; }
stickly-select .stickly-picker-option:not([data-active]):is(:hover,:focus-visible) { background:rgb(var(--color-action-neutral-rgb)/.65); }
stickly-select[theme="dark"] .stickly-picker-option:is(:hover,:focus-visible) { background:rgb(var(--color-white-rgb)/.1); }
stickly-select[theme="dark"] .stickly-picker-option[data-active] { background:rgb(var(--color-white-rgb)/.15); }
stickly-combobox .stickly-picker-option { position:relative; min-height:2.75rem; border:2px solid transparent; transition-property:background-color,border-color,box-shadow; }
stickly-combobox .stickly-picker-option:hover { background:rgb(var(--color-action-neutral-rgb)/.65); }
stickly-combobox .stickly-picker-option:is([data-active],[aria-selected="true"]) { border-color:transparent; background:rgb(var(--color-accent-rgb)); font-weight:600; color:rgb(var(--color-canvas-rgb)); }
stickly-combobox .stickly-picker-option[data-active] { font-weight:600; }
stickly-combobox .stickly-picker-option:is([data-active],[aria-selected="true"]):hover { background:rgb(var(--color-accent-rgb)); }
:is(stickly-select,stickly-combobox) .stickly-picker-option-label { min-width:0; flex:1 1 0%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
:is(stickly-select,stickly-combobox) .stickly-picker-badge { display:flex; width:1.25rem; height:1.25rem; flex-shrink:0; align-items:center; justify-content:center; border-radius:9999px; background:rgb(var(--color-brand-rgb)); font-size:.75rem; line-height:1rem; font-weight:900; color:rgb(var(--color-white-rgb)); opacity:0; transition:opacity 150ms cubic-bezier(.4,0,.2,1); }
:is(stickly-select,stickly-combobox) .stickly-picker-option[aria-selected="true"] .stickly-picker-badge { opacity:1; }
stickly-combobox .stickly-picker-badge { width:1.5rem; height:1.5rem; border:2px solid transparent; background:transparent; transition-property:opacity,background-color,border-color,box-shadow; transition-duration:var(--motion-fast); }
stickly-combobox .stickly-picker-option[aria-selected="true"] .stickly-picker-badge { border-color:rgb(var(--color-canvas-rgb)); background:rgb(var(--color-text-rgb)); color:rgb(var(--color-canvas-rgb)); box-shadow:0 0 #0000,0 0 #0000,0 2px 0 rgb(0 0 0/.28); }
:is(stickly-select,stickly-combobox) .stickly-picker-helper, :is(stickly-select,stickly-combobox) .stickly-picker-error { padding-left:.875rem; font-size:13px; line-height:18px; font-weight:400; color:rgb(var(--color-text-on-light-rgb)/.7); }
:is(stickly-select,stickly-combobox)[theme="dark"] .stickly-picker-helper { color:rgb(var(--color-text-rgb)/.7); }
:is(stickly-select,stickly-combobox) .stickly-picker-error { font-weight:600; color:rgb(var(--color-danger-rgb)); }
@media(prefers-reduced-motion:reduce) { :is(stickly-select,stickly-combobox) .stickly-picker-shell, :is(stickly-select,stickly-combobox) .stickly-picker-native { transition:none; } }
`;class ne{constructor(t){this.ports=t}get options(){return this.ports.options}get value(){return this.ports.value}get disabled(){return this.ports.disabled}get resolvedId(){return this.ports.id()}get triggerRef(){return{nativeElement:this.ports.trigger()}}get inputRef(){return{nativeElement:this.ports.input()}}get shellRef(){return{nativeElement:this.ports.shell()}}get popoverRef(){return{nativeElement:this.ports.popover()}}onChange=t=>this.ports.changed(t);onTouched=()=>this.ports.touched();get selectedOption(){return this.options().find(t=>t.value===this.value())}focused=!1;open=!1;activeIndex=-1;popoverTop=0;popoverLeft=0;popoverWidth=0;writeValue(t){this.value.set(t)}setDisabledState(t){this.disabled.set(t),t&&this.closeDropdown()}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onTouched()}toggleDropdown(){this.disabled()||(this.open?this.closeDropdown():this.openDropdown())}openDropdown(){this.disabled()||this.open||(this.positionPopover(),this.activeIndex=this.selectedOption?this.options().findIndex(t=>t.value===this.value()):this.findEnabledIndex(0,1),this.popoverRef.nativeElement.showPopover(),this.open=!0)}closeDropdown(t=!1){if(!this.open)return;const e=this.popoverRef.nativeElement;e.matches(":popover-open")&&e.hidePopover(),this.open=!1,this.activeIndex=-1,t&&this.triggerRef.nativeElement.focus()}selectOption(t,e){if(t.disabled)return;this.value.set(t.value),this.activeIndex=e;const i=this.value();this.onChange(i),this.closeDropdown(!0)}setActiveIndex(t){this.options()[t]?.disabled||(this.activeIndex=t)}onTriggerKeydown(t){if(!this.disabled()){if(t.key==="Escape"&&this.open){t.preventDefault(),this.closeDropdown(!0);return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){t.preventDefault(),this.open?this.moveActiveIndex(t.key==="ArrowDown"?1:-1):this.openDropdown();return}if((t.key==="Enter"||t.key===" ")&&this.open){t.preventDefault();const e=this.options()[this.activeIndex];e&&this.selectOption(e,this.activeIndex);return}if(t.key==="Home"&&this.open){t.preventDefault(),this.activeIndex=this.findEnabledIndex(0,1);return}t.key==="End"&&this.open&&(t.preventDefault(),this.activeIndex=this.findEnabledIndex(this.options().length-1,-1))}}optionId(t){return`${this.resolvedId}-option-${t}`}trackByValue(t,e){return e.value}onPopoverToggle(){this.popoverRef.nativeElement.matches(":popover-open")||(this.open=!1,this.activeIndex=-1)}onViewportChange(){this.closeDropdown()}positionPopover(){const t=this.triggerRef.nativeElement.getBoundingClientRect(),e=8,i=Math.max(0,window.innerWidth-e*2);this.popoverWidth=Math.min(t.width,i),this.popoverLeft=Math.min(Math.max(e,t.left),Math.max(e,window.innerWidth-this.popoverWidth-e));const o=Math.min(288,this.options().length*44+12),r=window.innerHeight-t.bottom-e;this.popoverTop=r>=Math.min(o,160)?t.bottom+8:Math.max(e,t.top-o-8)}moveActiveIndex(t){const e=this.options();if(!e.length){this.activeIndex=-1;return}const i=this.activeIndex<0?t===1?0:e.length-1:(this.activeIndex+t+e.length)%e.length;this.activeIndex=this.findEnabledIndex(i,t)}findEnabledIndex(t,e){const i=this.options();if(!i.length)return-1;for(let o=0;o<i.length;o++){const r=(t+o*e+i.length)%i.length;if(!i[r].disabled)return r}return-1}}class ${constructor(t){this.ports=t}get options(){return this.ports.options}get value(){return this.ports.value}get disabled(){return this.ports.disabled}get resolvedId(){return this.ports.id()}get triggerRef(){return{nativeElement:this.ports.trigger()}}get inputRef(){return{nativeElement:this.ports.input()}}get shellRef(){return{nativeElement:this.ports.shell()}}get popoverRef(){return{nativeElement:this.ports.popover()}}onChange=t=>this.ports.changed(t);onTouched=()=>this.ports.touched();get selectedOption(){return this.options().find(t=>t.value===this.value())}focused=!1;open=!1;activeIndex=-1;searchQuery="";popoverTop=0;popoverLeft=0;popoverWidth=0;popoverMaxHeight=288;get matchOptions(){const t=this.normalizeSearchText(this.searchQuery);return t?this.options().map((e,i)=>({option:e,index:i,score:this.matchScore(e,t)})).filter(e=>e.score!==null).sort((e,i)=>e.score-i.score||e.index-i.index).map(e=>e.option):[]}get allOptions(){return this.options()}get displayedOptions(){return this.searchQuery.trim()?this.matchOptions:this.allOptions}get navigableOptions(){return this.displayedOptions}writeValue(t){this.value.set(t),this.open||this.syncClosedDisplayValue()}setDisabledState(t){this.disabled.set(t),t&&this.closeDropdown()}mount(){this.syncClosedDisplayValue(),window.visualViewport?.addEventListener("resize",this.onVisualViewportChange),window.visualViewport?.addEventListener("scroll",this.onVisualViewportChange)}destroy(){window.visualViewport?.removeEventListener("resize",this.onVisualViewportChange),window.visualViewport?.removeEventListener("scroll",this.onVisualViewportChange)}onVisualViewportChange=()=>{this.open&&(this.positionPopover(),this.ports.stateChanged?.())};onShellPointerDown(t){this.disabled()||t.target.closest("button")||this.open||(this.inputRef.nativeElement.focus({preventScroll:!0}),this.openMenu())}onInputFocus(){this.focused=!0}onChevronClick(t){t.stopPropagation(),this.toggleDropdown()}onInputBlur(){this.focused=!1,window.setTimeout(()=>{this.open||this.onTouched()},0)}onQueryInput(t){const e=t.target;if(!this.open){if(this.disabled())return;const i=e.value,o=e.selectionStart,r=e.selectionEnd,l=e.selectionDirection;this.openMenu(),this.applySearchText(i),o!==null&&r!==null&&e.setSelectionRange(o,r,l??void 0);return}this.applySearchText(e.value)}onCompositionStart(){this.open||this.openMenu()}toggleDropdown(){this.disabled()||(this.open?this.closeDropdown(!0):this.openMenu(!0))}openMenu(t=!1){this.disabled()||this.open||(this.searchQuery="",this.inputRef.nativeElement.value="",this.open=!0,this.activeIndex=this.findSelectedIndex()??this.findEnabledIndex(0,1),this.popoverRef.nativeElement.showPopover(),this.positionPopover(),window.requestAnimationFrame(()=>{this.positionPopover(),this.scrollActiveOptionIntoView("center"),this.ports.stateChanged?.()}),t&&this.inputRef.nativeElement.focus())}closeDropdown(t=!1){if(!this.open){this.searchQuery="",this.syncClosedDisplayValue();return}const e=this.popoverRef.nativeElement;e.matches(":popover-open")&&e.hidePopover(),this.open=!1,this.activeIndex=-1,this.searchQuery="",this.syncClosedDisplayValue(),t&&this.inputRef.nativeElement.focus()}selectOption(t,e){if(t.disabled)return;this.value.set(t.value),this.activeIndex=e;const i=this.value();this.onChange(i),this.closeDropdown(),this.onTouched()}setActiveIndex(t){this.navigableOptions[t]?.disabled||(this.activeIndex=t,this.scrollActiveOptionIntoView())}onInputKeydown(t){if(!this.disabled()&&!(t.isComposing||t.keyCode===229)){if(t.key==="Escape"&&this.open){t.preventDefault(),this.closeDropdown(!0);return}if(t.key==="Tab"&&this.open){this.closeDropdown();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){t.preventDefault(),this.open?this.moveActiveIndex(t.key==="ArrowDown"?1:-1):this.openMenu();return}if(!this.open&&this.isPrintableKey(t)){t.preventDefault(),this.openMenu(),this.applySearchText(t.key);return}if(this.open){if(t.key==="Enter"){t.preventDefault();const e=this.navigableOptions[this.activeIndex];e&&this.selectOption(e,this.activeIndex);return}if(t.key==="Home"){t.preventDefault(),this.activeIndex=this.findEnabledIndex(0,1),this.scrollActiveOptionIntoView();return}t.key==="End"&&(t.preventDefault(),this.activeIndex=this.findEnabledIndex(this.navigableOptions.length-1,-1),this.scrollActiveOptionIntoView())}}}optionId(t){return`${this.resolvedId}-option-${t}`}trackByValue(t,e){return e.value}onPopoverToggle(){}onDocumentPointerDown(t){if(!this.open)return;const e=t.composedPath()[0]??t.target;!this.shellRef.nativeElement.contains(e)&&!this.popoverRef.nativeElement.contains(e)&&this.closeDropdown()}onViewportResize(){this.open&&this.positionPopover()}onViewportScroll(){this.open&&this.positionPopover()}applySearchText(t){this.searchQuery=t,this.inputRef.nativeElement.value!==t&&(this.inputRef.nativeElement.value=t),this.activeIndex=this.findEnabledIndex(0,1),this.positionPopover(),this.scrollActiveOptionIntoView()}syncClosedDisplayValue(){const t=this.inputRef?.nativeElement;if(t){const e=this.selectedOption?.label??"";t.value!==e&&(t.value=e)}}isPrintableKey(t){return t.key.length===1&&!t.ctrlKey&&!t.metaKey&&!t.altKey}normalizeSearchText(t){return t.normalize("NFKD").replace(new RegExp("\\p{M}","gu"),"").trim().toLocaleLowerCase()}matchScore(t,e){const i=[t.label,t.value,...t.searchTerms??[]].map(o=>this.normalizeSearchText(o));return i.some(o=>o===e)?0:i.some(o=>o.startsWith(e))?1:i.some(o=>o.split(/\s+/).some(r=>r.startsWith(e)))?2:i.some(o=>o.includes(e))?3:null}positionPopover(){const t=this.shellRef.nativeElement,e=this.popoverRef.nativeElement,i=t.getBoundingClientRect(),o=8,r=10,l=288,n=window.visualViewport,c=n?.offsetTop??0,s=n?.offsetLeft??0,d=n?.width??window.innerWidth,u=n?.height??window.innerHeight,h=s+d,p=c+u;this.popoverWidth=Math.min(i.width,d-o*2),this.popoverLeft=Math.min(Math.max(s+o,i.left),Math.max(s+o,h-this.popoverWidth-o));const b=this.estimatePopoverHeight(),g=p-i.bottom-o,m=i.top-c-o,v=g>=b+r,w=m>=b+r;let x;v&&w?x=g>=m:v?x=!0:w?x=!1:x=g>=m;const L=Math.max(120,(x?g:m)-r);this.popoverMaxHeight=Math.min(l,L);const y=Math.min(this.popoverMaxHeight,e.scrollHeight||b);if(x){this.popoverTop=i.bottom+r;const S=this.popoverTop+y-(p-o);S>0&&(this.popoverTop=Math.max(i.bottom+r,this.popoverTop-S));return}this.popoverTop=i.top-r-y,this.popoverTop+y>i.top-r&&(this.popoverTop=i.top-r-y),this.popoverTop=Math.max(c+o,this.popoverTop)}estimatePopoverHeight(){const e=Math.max(this.navigableOptions.length,1);return Math.min(288,e*44+28+16)}moveActiveIndex(t){if(!this.navigableOptions.length){this.activeIndex=-1;return}const e=this.activeIndex<0?t===1?0:this.navigableOptions.length-1:(this.activeIndex+t+this.navigableOptions.length)%this.navigableOptions.length;this.activeIndex=this.findEnabledIndex(e,t),this.scrollActiveOptionIntoView()}scrollActiveOptionIntoView(t="nearest"){if(this.activeIndex<0||!this.open)return;const e=this.activeIndex;window.requestAnimationFrame(()=>{this.popoverRef.nativeElement.querySelector(`#${this.optionId(e)}`)?.scrollIntoView({block:t})})}findSelectedIndex(){if(!this.value())return null;const t=this.navigableOptions.findIndex(e=>e.value===this.value());return t>=0?t:null}findEnabledIndex(t,e){if(!this.navigableOptions.length)return-1;for(let i=0;i<this.navigableOptions.length;i++){const o=(t+i*e+this.navigableOptions.length)%this.navigableOptions.length;if(!this.navigableOptions[o].disabled)return o}return-1}}let se=0;function Z(a,t,e){if(e.get(a))return;class i extends HTMLElement{static observedAttributes=["value","label","placeholder","control-id","name","helper-text","error-text","disabled","required","invalid","aria-label","aria-labelledby","aria-describedby","all-options-label","matches-label","no-matches-label","open-label","close-label"];optionList=[];currentValue=null;generatedId=`stickly-picker-${se++}`;controller=null;form=null;initialValue=null;get options(){return this.optionList}set options(r){this.optionList=r,this.refresh()}get value(){return this.currentValue}set value(r){this.currentValue=r,this.controller instanceof $&&!this.controller.open&&this.controller.syncClosedDisplayValue(),this.refresh()}get resolvedId(){return this.getAttribute("control-id")||this.getAttribute("name")||this.generatedId}get native(){return this.querySelector(".stickly-picker-native")}get popoverNode(){return this.querySelector(".stickly-picker-popover")}get shell(){return this.querySelector(".stickly-picker-shell")}get listbox(){return t?this.querySelector(".stickly-picker-listbox"):this.popoverNode}onViewportChange=()=>{this.controller instanceof $?this.controller.onViewportResize():this.controller?.onViewportChange(),this.refresh()};onDocumentPointerDown=r=>{this.controller instanceof $&&(this.controller.onDocumentPointerDown(r),this.refresh())};onFormReset=r=>{this.ownerDocument.defaultView?.setTimeout(()=>{r.defaultPrevented||!this.isConnected||(this.closeMenu(),this.hasAttribute("model-controlled")?this.refresh():this.value=this.initialValue)},0)};openMenu(){this.controller instanceof $?this.controller.openMenu(!0):this.controller?.openDropdown(),this.refresh()}closeMenu(){this.controller?.closeDropdown(),this.refresh()}focus(r){this.native?.focus(r)}blur(){this.native?.blur()}connectedCallback(){this.upgradeProperty("options"),this.upgradeProperty("value");const r=this.getRootNode(),l=r instanceof ShadowRoot?r:this.ownerDocument;if(!l.querySelector("style[data-stickly-picker-styles]")){const n=this.ownerDocument.createElement("style");n.dataset.sticklyPickerStyles="",n.textContent=f("webapp",":is(stickly-select,stickly-combobox):not([inherit-tokens])")+ae,(l instanceof ShadowRoot?l:this.ownerDocument.head).append(n)}this.controller||this.build(),this.refresh(),this.controller instanceof $&&this.controller.mount(),this.form=this.native.closest("form"),this.form?.addEventListener("reset",this.onFormReset),this.ownerDocument.addEventListener("pointerdown",this.onDocumentPointerDown),this.ownerDocument.defaultView?.addEventListener("resize",this.onViewportChange),this.ownerDocument.defaultView?.addEventListener("scroll",this.onViewportChange)}disconnectedCallback(){this.controller instanceof $&&this.controller.destroy(),this.form?.removeEventListener("reset",this.onFormReset),this.form=null,this.ownerDocument.removeEventListener("pointerdown",this.onDocumentPointerDown),this.ownerDocument.defaultView?.removeEventListener("resize",this.onViewportChange),this.ownerDocument.defaultView?.removeEventListener("scroll",this.onViewportChange)}attributeChangedCallback(r){r==="value"&&(this.value=this.getAttribute("value")),r==="disabled"&&this.hasAttribute("disabled")&&this.closeMenu(),this.isConnected&&this.refresh()}upgradeProperty(r){if(!Object.prototype.hasOwnProperty.call(this,r))return;const l=this[r];delete this[r],r==="options"?this.options=l:this.value=l}build(){!this.hasAttribute("control-id")&&!this.hasAttribute("name")&&this.setAttribute("control-id",this.generatedId),B(this,t);const r=this.native,l=this.shell,n=this.popoverNode,c=this.querySelector(".stickly-picker-chevron"),s=(()=>this.currentValue);s.set=p=>{this.currentValue=p};const d=(()=>this.hasAttribute("disabled"));d.set=p=>this.toggleAttribute("disabled",p);const u={options:()=>this.options,value:s,disabled:d,id:()=>this.resolvedId,trigger:()=>r,input:()=>r,shell:()=>l,popover:()=>n,changed:p=>{this.currentValue=p,this.dispatchEvent(new CustomEvent("value-change",{detail:{value:p},bubbles:!0,composed:!0}))},touched:()=>this.dispatchEvent(new CustomEvent("field-touched",{bubbles:!0,composed:!0})),stateChanged:()=>this.refresh()};this.controller=t?new $(u):new ne(u),this.initialValue=this.currentValue;const h=p=>{p(),this.refresh()};if(n.addEventListener("mouseover",p=>{const b=p.target?.closest(".stickly-picker-option");b&&(this.controller?.setActiveIndex(Number(b.dataset.index)),this.refresh())}),n.addEventListener("click",p=>{const b=p.target?.closest(".stickly-picker-option");if(!b||b.disabled)return;const g=Number(b.dataset.index),m=this.controller instanceof $?this.controller.displayedOptions:this.options;this.controller?.selectOption(m[g],g),this.refresh()}),t&&n.addEventListener("mousedown",p=>{p.target?.closest(".stickly-picker-option")&&p.preventDefault()}),this.controller instanceof $){const p=this.controller;l.addEventListener("pointerdown",b=>h(()=>p.onShellPointerDown(b))),r.addEventListener("input",b=>h(()=>p.onQueryInput(b))),r.addEventListener("compositionstart",()=>h(()=>p.onCompositionStart())),r.addEventListener("focus",()=>h(()=>p.onInputFocus())),r.addEventListener("blur",()=>h(()=>p.onInputBlur())),r.addEventListener("keydown",b=>h(()=>p.onInputKeydown(b))),c.addEventListener("pointerdown",b=>b.stopPropagation()),c.addEventListener("mousedown",b=>b.preventDefault()),c.addEventListener("click",b=>h(()=>p.onChevronClick(b)))}else{const p=this.controller;r.addEventListener("click",()=>h(()=>p.toggleDropdown())),r.addEventListener("focus",()=>h(()=>p.onFocus())),r.addEventListener("blur",()=>h(()=>p.onBlur())),r.addEventListener("keydown",b=>h(()=>p.onTriggerKeydown(b))),n.addEventListener("toggle",()=>h(()=>p.onPopoverToggle()))}}refresh(){this.isConnected&&this.controller&&B(this,t)}}e.define(a,i)}function le(a=customElements){Z("stickly-select",!1,a)}function ce(a=customElements){Z("stickly-combobox",!0,a)}const de=`
stickly-highlight {--color-brand-rgb:${D["--color-purple-500-rgb"]};--color-accent-rgb:${D["--color-amber-500-rgb"]};--color-success-rgb:${D["--color-green-500-rgb"]};--color-danger-rgb:${D["--color-red-500-rgb"]};--highlight-learned-fill:rgb(var(--color-brand-rgb)/.28);--highlight-learned-edge:rgb(var(--color-brand-rgb));--highlight-review-fill:rgb(var(--color-accent-rgb)/.35);--highlight-review-edge:rgb(var(--color-accent-rgb));--highlight-success-fill:rgb(var(--color-success-rgb)/.35);--highlight-success-edge:rgb(var(--color-success-rgb));--highlight-danger-fill:rgb(var(--color-danger-rgb)/.3);--highlight-danger-edge:rgb(var(--color-danger-rgb));--radius-highlight:4px;--motion-normal:300ms;--ease-standard:cubic-bezier(.4,0,.2,1);display:inline;position:relative;z-index:0;border-radius:var(--radius-highlight);padding:0 4px;box-decoration-break:clone;-webkit-box-decoration-break:clone;background:var(--highlight-learned-fill);box-shadow:0 2px 0 var(--highlight-learned-edge);transition:background var(--motion-normal) var(--ease-standard),box-shadow var(--motion-normal) var(--ease-standard);}
stickly-highlight.quiz-ready,stickly-highlight[variant="due"] {cursor:pointer;background:var(--highlight-review-fill);box-shadow:0 2px 0 var(--highlight-review-edge);text-decoration:underline dotted currentColor;text-decoration-thickness:1px;text-underline-offset:3px;}
stickly-highlight.solved,stickly-highlight[variant="success"] {text-decoration:none;background:var(--highlight-success-fill);box-shadow:0 2px 0 var(--highlight-success-edge);}
stickly-highlight.failed,stickly-highlight[variant="danger"] {text-decoration:none;background:var(--highlight-danger-fill);box-shadow:0 2px 0 var(--highlight-danger-edge);}
stickly-highlight:focus-visible {outline:2px solid #8056d9;outline-offset:3px;border-radius:2px;}
`;function he(a=customElements){a.get("stickly-highlight")||a.define("stickly-highlight",class extends HTMLElement{connectedCallback(){const t=this.getRootNode(),e=t instanceof ShadowRoot?t:this.ownerDocument;if(e.querySelector("style[data-stickly-highlights]"))return;const i=this.ownerDocument.createElement("style");i.dataset.sticklyHighlights="",i.textContent=de,(e instanceof ShadowRoot?e:this.ownerDocument.head).append(i)}})}function pe(a=""){const t=a?a+" ":"";return`


    ${t}.stickly-translator {
        all: unset;
        color: var(--color-text);
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: var(--space-xs);
        line-height: 1.4;
        font-size: var(--font-size-body);
        font-family: var(--font-family-regular);
        padding: 0;
        width: 18px;
        height: 18px;
        max-width: 350px;
        transition-property: opacity, filter, width, padding, box-shadow;
        transition-duration: 400ms;
        transition-timing-function: var(--transition-bounce);
        position: absolute;
        z-index: 99998 !important;
        border-radius: var(--radius-medium);
        background: var(--gradient-primary);
        opacity: var(--bubble-opacity);
        margin: 0;
        cursor: pointer;
        animation-name: none;
        box-shadow: var(--shadow-overlay-hard);
        transform-origin: center bottom;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    ${t}.stickly-translator.below {
        transform-origin: center top;
    }
    ${t}.stickly-translator > * {
        position: relative;
        z-index: 1;
    }

    /* Unified bubble chrome. Use real borders/shadows because WebKit can drop
       the connected multi-filter edge when the bubble is composited. */
    ${t}.stickly-translator.bubble-elevated {
        background: transparent;
        border: none;
        box-shadow: none;
        filter: none;
        width: auto;
        height: auto;
        opacity: 1;
        padding: 0;
    }

    ${t}.stickly-translator.only-symbol {
        background: transparent;
        box-shadow: none;
        border-radius: 0;
        transition: none;
    }

    ${t}.stickly-translator.only-symbol:before {
        z-index: 0;
        box-shadow: 0 0 0 1px var(--bubble-accent-ink);
        background: var(--surface-symbol);
        transition: background .3s var(--transition-bounce), box-shadow .3s var(--transition-bounce), transform .3s var(--transition-bounce);
        transform: translate(-50%, -90%) rotate(-45deg) scale(0.8);
    }

    ${t}.stickly-translator.only-symbol:hover:before {
        background: var(--color-surface);
        box-shadow: 0 0 0 1px var(--bubble-accent-ink);
        transform: translate(-50%, -90%) rotate(-45deg) scale(1);
    }

    @media (hover: none), (pointer: coarse) {
        ${t}.stickly-translator.only-symbol {
            width: 32px;
            height: 32px;
        }

        ${t}.stickly-translator.only-symbol:before {
            width: 32px;
            height: 32px;
            background: var(--color-surface);
            box-shadow: 0 0 0 2px var(--bubble-accent-ink);
        }
    }

    ${t}.stickly-translator.bubble-elevated:before {
        content: none;
        display: none;
    }

    ${t}.stickly-translator:before {
        z-index: -1;
        content: '';
        pointer-events: none;
        display: block;
        width: 22px;
        height: 22px;
        position: absolute;
        top: 100%;
        left: var(--stickly-arrow-left, 50%);
        background: var(--gradient-primary);
        transform: translate(-50%, -90%) rotate(-45deg);
        border-radius: 50% 50% 50% 3px;
    }

    ${t}.stickly-translator.below:before {
        top: auto;
        bottom: 100%;
        transform: translate(-50%, 90%) rotate(135deg);
    }

    ${t}.stickly-translator.below.only-symbol:before {
        transform: translate(-50%, 90%) rotate(135deg) scale(0.8);
    }

    ${t}.stickly-translator.below.only-symbol:hover:before {
        transform: translate(-50%, 90%) rotate(135deg) scale(1);
    }

    /* Reveal the measured chrome only after the bubble has its final layout.
       Clipping the chrome keeps slotted content inside the expanding shape. */
    ${t}.stickly-translator.translated.bubble-elevated.layout-ready:not(.loading) .bubble-chrome {
        animation: translation-bubble-expand 300ms var(--transition-bounce) backwards;
    }

    @keyframes translation-bubble-expand {
        from { clip-path: inset(-24px 50% -24px 50%); opacity: 0; }
        to { clip-path: inset(-24px -24px -24px -24px); opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
        ${t}.stickly-translator.translated.bubble-elevated.layout-ready:not(.loading) .bubble-chrome {
            animation: none;
        }
    }

    ${t}.stickly-translator.translated {
        max-width: min(416px, calc(100vw - 16px));
    }

    ${t}.stickly-translator.quiz {
        max-width: none;
    }

    ${t}.bubble-chrome {
        position: relative;
        max-width: 100%;
    }

    ${t}.stickly-translator.bubble-elevated .bubble-chrome {
        border: 1px solid var(--bubble-accent-ink);
        box-shadow: var(--shadow-long-accent);
    }

    ${t}.stickly-translator.translated .bubble-chrome {
        border-radius: var(--radius-medium);
    }

    ${t}.stickly-translator.quiz .bubble-chrome {
        border-radius: var(--radius-small);
    }

    ${t}.stickly-translator.translated .bubble-shell,
    ${t}.stickly-translator.quiz .bubble-shell {
        background: var(--gradient-primary);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${t}.stickly-translator.translated .bubble-shell {
        border-radius: calc(var(--radius-medium) - 2px);
        padding: var(--space-xxs) var(--space-sm);
        min-height: 22px;
        justify-content: flex-start;
    }

    ${t}.stickly-translator.quiz .bubble-shell {
        border-radius: calc(var(--radius-small) - 2px);
        padding: var(--space-md);
        align-items: stretch;
        justify-content: flex-start;
    }

    ${t}.stickly-translator.only-symbol stickly-loader {
        width: 18px;
        height: 18px;
    }

    /* The caret keeps its own WebKit-safe accent edge. */
    ${t}.bubble-chrome::before {
        content: '';
        position: absolute;
        width: 22px;
        height: 22px;
        top: 100%;
        left: var(--stickly-arrow-left, 50%);
        transform: translate(-50%, -90%) rotate(-45deg);
        border-radius: 50% 50% 50% 3px;
        background: var(--gradient-primary);
        border: 1px solid var(--bubble-accent-ink);
        box-shadow:
            1px 1px 0 rgb(var(--color-accent-rgb) / 0.96),
            2px 2px 0 rgb(var(--color-accent-rgb) / 0.88);
        z-index: 0;
        pointer-events: none;
    }

    ${t}.stickly-translator.below .bubble-chrome::before {
        top: auto;
        bottom: 100%;
        transform: translate(-50%, 90%) rotate(135deg);
    }

    ${t}.stickly-translator.quota-warning:before {
        background: var(--color-surface-subtle);
    }

    ${t}.stickly-translator.quota-warning {
        padding: 0;
        background: var(--color-surface-subtle);
        width: auto;
        height: auto;
        opacity: 1;
        box-shadow: var(--shadow-overlay-hard);
        filter: none;
    }
    ${t}.stickly-translator .explanation-wrapper {
        display: flex;
        flex-direction: column;
        padding: var(--space-sm) var(--space-md);
        min-width: 200px;
        max-width: 350px;
        gap: var(--space-sm);
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    ${t}.stickly-translator .explanation-wrapper em {
        font-style: normal;
        font-family: var(--font-family-bold);
        color: var(--color-text);
        font-size: var(--font-size-body);
        line-height: 1.4;
    }
    ${t}.stickly-translator .explanation-wrapper hr {
        border: none;
        border-top: 1px solid var(--border-medium);
        margin: var(--space-xs) 0;
        width: 100%;
    }
    ${t}.stickly-translator .explanation-wrapper p {
        margin: 0;
        line-height: 1.5;
        color: var(--color-text);
        font-family: var(--font-family-regular);
        font-size: var(--font-size-body);
        opacity: 0.9;
    }
    ${t}.stickly-translator.layout-ready {
        animation-name: appear;
        animation-duration: .2s;
        animation-timing-function: var(--transition-bounce);
    }

    ${t}.stickly-translator.translated.bubble-elevated.layout-ready:not(.loading) {
        animation: none;
    }

    ${t}.stickly-translator.only-symbol.layout-ready {
        animation-name: appear-from-below;
        animation-duration: .16s;
        animation-timing-function: var(--transition-smooth);
        transform-origin: center bottom;
    }

    ${t}.stickly-translator.only-symbol.below.layout-ready {
        animation-name: appear-from-above;
        transform-origin: center top;
    }

    @keyframes appear-from-below {
        from {
            opacity: 0;
            transform: translate3d(0, 6px, 0);
        }
        to {
            opacity: var(--bubble-opacity);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes appear-from-above {
        from {
            opacity: 0;
            transform: translate3d(0, -6px, 0);
        }
        to {
            opacity: var(--bubble-opacity);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes appear-fade {
        from { opacity: 0; }
        to { opacity: var(--bubble-opacity); }
    }

    @keyframes appear {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: var(--bubble-opacity);
            transform: scale(1);
        }
    }
    ${t}.error-shake {
        animation: stickly-bubble-shake 0.4s 1 linear;
    }
    @keyframes stickly-bubble-shake {
        0% { transform: translateX(16px); }
        20% { transform: translateX(-12px); }
        40% { transform: translateX(8px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(2px); }
        100% { transform: translateX(0); }
    }
    ${t}.stickly-translator .menu-list {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
    `}function ue(a=""){const t=a?a+" ":"",e=(i="")=>a?a+i:i?`:host(${i})`:":host";return pe(a)+`
            ${e()} {
                display: contents;
            }

            ${t}.bubble-hover-target {
                position: fixed;
                z-index: 999999;
                pointer-events: auto;
            }

            ${t}.stickly-translator {
                position: absolute;
                top: 0;
                left: 0;
                transition: opacity 0.2s var(--transition-smooth);
                transition-property: opacity;
                opacity: var(--bubble-opacity);
                border-radius: var(--radius-medium);
                box-sizing: border-box;
                max-width: calc(100vw - 16px);
                max-height: calc(100vh - 16px);
                overflow: visible;
            }

            ${t}.stickly-translator.translated .bubble-chrome {
                min-width: min(140px, calc(100vw - 16px));
            }

            ${t}.stickly-translator.mobile-surface {
                width: calc(100% - 36px);
                height: auto;
                max-width: 440px;
                overflow: visible;
                cursor: default;
                animation-name: stickly-mobile-surface-in;
                animation-duration: var(--motion-normal);
                animation-timing-function: var(--transition-bounce);
                transform-origin: center bottom;
            }

            ${t}.stickly-translator.mobile-surface .bubble-chrome {
                width: 100%;
                border-radius: var(--radius-medium);
            }

            ${t}.stickly-translator.mobile-surface .bubble-chrome::before {
                content: none;
                display: none;
            }

            ${t}.stickly-translator.mobile-surface .bubble-shell {
                width: 100%;
                max-height: inherit;
                overflow: auto;
                overscroll-behavior: contain;
                box-sizing: border-box;
                padding: var(--space-md) var(--space-lg)
                    calc(var(--space-lg) + env(safe-area-inset-bottom, 0px));
                border-radius: calc(var(--radius-medium) - 2px);
                background: var(--gradient-primary);
            }

            ${t}.mobile-surface-header {
                display: grid;
                grid-template-columns: 44px minmax(0, 1fr) 44px;
                min-height: 44px;
                align-items: center;
                gap: var(--space-md);
                margin: calc(var(--space-md) * -1) calc(var(--space-lg) * -1) var(--space-sm);
                padding: 0 var(--space-sm) 0 var(--space-lg);
                border-bottom: 1px solid var(--border-subtle);
                position: sticky;
                top: calc(var(--space-md) * -1);
                z-index: 2;
                background: var(--gradient-primary);
            }

            ${t}.mobile-surface-handle {
                grid-column: 2;
                justify-self: center;
                width: 36px;
                height: 4px;
                border-radius: var(--radius-full);
                background: var(--color-accent);
            }

            ${t}.mobile-surface-close {
                all: unset;
                display: grid;
                width: 44px;
                height: 44px;
                place-items: center;
                border-radius: var(--radius-full);
                color: var(--color-text-muted);
                cursor: pointer;
                grid-column: 3;
            }

            ${t}.mobile-surface-close img {
                display: block;
                width: 18px;
                height: 18px;
                opacity: 0.72;
            }

            ${t}.mobile-surface-close:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: -4px;
            }

            @keyframes stickly-mobile-surface-in {
                from { opacity: 0; transform: translate3d(0, 18px, 0); }
                to { opacity: 1; transform: translate3d(0, 0, 0); }
            }

            @media (prefers-reduced-motion: reduce) {
                ${t}.stickly-translator.mobile-surface {
                    animation: none;
                }
            }

            ${t}.bubble-shell {
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;
                max-width: 100%;
                max-height: inherit;
            }

            ${t}.bubble-chrome {
                position: relative;
                max-width: 100%;
                max-height: inherit;
            }

            ${t}.bubble-chrome::before,
            ${t}.bubble-chrome::after {
                pointer-events: none;
            }

            ${t}.bubble-shell > slot {
                position: relative;
            }

            ${t}.stickly-translator.quiz,
            ${t}.stickly-translator.quota-warning {
                max-width: calc(100vw - 16px);
                overflow: visible;
            }

            ${t}.stickly-translator.quiz .bubble-shell,
            ${t}.stickly-translator.quota-warning .bubble-shell {
                overflow: auto;
                overscroll-behavior: contain;
            }

            ${t}.stickly-translator.only-symbol {
                opacity: var(--bubble-opacity);
                cursor: pointer;
                background: transparent;
                box-shadow: none;
                border-radius: 0;
            }

            ${t}.stickly-translator.translated,
            ${t}.stickly-translator.quiz,
            ${t}.stickly-translator.only-symbol,
            ${t}.stickly-translator.quota-warning {
                opacity: 1;
            }

            ${t}.stickly-translator.hidden {
                opacity: 0;
                pointer-events: none;
            }

            ${t}.stickly-translator.error-shake {
                animation: stickly-bubble-shake 0.82s var(--transition-smooth) both;
            }

            @keyframes stickly-bubble-shake {
                10%, 90% { transform: translate3d(-1px, 0, 0); }
                20%, 80% { transform: translate3d(2px, 0, 0); }
                30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                40%, 60% { transform: translate3d(4px, 0, 0); }
            }

${e("[inline]")} { display:block;position:relative;box-sizing:border-box;width:max-content;max-width:min(416px,var(--stickly-anchor-max-width,calc(100vw - 16px))); --stickly-inline-content-max-width:calc(var(--stickly-anchor-max-width,100vw - 16px) - 2 * var(--space-md) - 2px); }
${e("[inline]")} .stickly-translator.quiz .bubble-shell { display:flex;flex-direction:column;align-items:center;min-width:min(300px,calc(100vw - 4rem),var(--stickly-inline-content-max-width,300px));max-width:min(34rem,var(--stickly-anchor-max-width,calc(100vw - 16px))); }
${e("[inline]")} .bubble-hover-target { position:relative;top:0!important;left:0!important;width:auto!important;height:auto!important; }
${e("[inline]")} .stickly-translator { display:block;box-sizing:border-box;animation:none;position:relative;top:0!important;left:0!important;width:auto;height:auto;max-width:min(416px,var(--stickly-anchor-max-width,calc(100vw - 16px)));max-height:none!important; }
${e("[inline]")} .bubble-shell { box-sizing:border-box;max-height:var(--stickly-anchor-content-max-height,none);overflow-y:auto;overflow-x:hidden; }
${e("[inline]")} .bubble-shell > slot { flex-shrink:0; }
`}const be=ue(),ge={visible:!1,style:{onlySymbol:!0,isLoading:!1,hasTranslation:!1,hasError:!1,isQuiz:!1,showQuotaWarning:!1},layout:{top:0,left:0,width:0,height:0,maxHeight:0,arrowLeft:0,placement:"above",ready:!1},mobileSurface:!1,useChrome:!1,compactReady:!1,hitSlop:18,closeLabel:"Close",closeUrl:""};class me extends HTMLElement{static observedAttributes=["inline","anchor-placement"];attributeChangedCallback(){this.renderPresentation()}data=ge;hover=null;chrome=null;header=null;close=null;image=null;get presentation(){return this.data}set presentation(t){this.data=t,this.renderPresentation()}get updateComplete(){return Promise.resolve(!0)}get bubbleElement(){return(this.shadowRoot??this).querySelector(".stickly-translator")??void 0}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${be}</style><div class="bubble-hover-target"><div class="stickly-translator"><div data-bubble-chrome><div class="bubble-shell"><div class="mobile-surface-header"><span aria-hidden="true"></span><span class="mobile-surface-handle" aria-hidden="true"></span><button class="mobile-surface-close" type="button"><img alt=""></button></div><slot></slot></div></div></div></div>`}this.initializeNodes()}initializeNodes(){const t=this.shadowRoot??this;if(this.hover){this.renderPresentation();return}this.hover=t.querySelector(".bubble-hover-target"),this.chrome=t.querySelector("[data-bubble-chrome]"),this.header=t.querySelector(".mobile-surface-header"),this.close=t.querySelector(".mobile-surface-close"),this.image=t.querySelector(".mobile-surface-close img"),this.hover?.addEventListener("mouseenter",()=>this.dispatchEvent(new CustomEvent("bubble-hover-enter",{bubbles:!0,composed:!0}))),this.hover?.addEventListener("mouseleave",()=>this.dispatchEvent(new CustomEvent("bubble-hover-leave",{bubbles:!0,composed:!0}))),this.close?.addEventListener("pointerup",e=>e.stopPropagation()),this.close?.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("mobile-surface-close",{bubbles:!0,composed:!0}))}),this.renderPresentation()}renderPresentation(){const t=this.bubbleElement;if(!t||!this.hover||!this.chrome)return;const{style:e,layout:i,mobileSurface:o,useChrome:r,hitSlop:l}=this.data,n=this.getAttribute("anchor-placement"),s=["stickly-translator",n==="above"||n==="below"?n:i.placement];i.ready&&s.push("layout-ready"),e.isLoading&&s.push("loading"),e.onlySymbol&&!o&&s.push("only-symbol"),o&&s.push("mobile-surface"),r&&s.push("bubble-elevated"),e.hasTranslation&&s.push("translated"),e.hasError&&s.push("error-shake"),e.isQuiz&&s.push("quiz"),e.showQuotaWarning&&s.push("quota-warning"),t.className=s.join(" "),Object.assign(this.hover.style,{display:this.data.visible&&this.data.compactReady?"":"none",top:`${i.top-l}px`,left:`${i.left-l}px`,width:`${i.width+l*2}px`,height:`${i.height+l*2}px`,visibility:i.ready?"visible":"hidden"}),Object.assign(t.style,{top:`${l}px`,left:`${l}px`,maxHeight:`${i.maxHeight}px`,visibility:i.ready?"visible":"hidden"}),this.hasAttribute("inline")?t.style.removeProperty("--stickly-arrow-left"):t.style.setProperty("--stickly-arrow-left",`${i.arrowLeft}px`),this.chrome.className=r?"bubble-chrome":"",this.chrome.style.display=r?"":"contents",this.header&&(this.header.style.display=o?"":"none"),this.close?.setAttribute("aria-label",this.data.closeLabel),this.data.closeUrl?this.image?.setAttribute("src",this.data.closeUrl):this.image?.removeAttribute("src")}}const fe=`
            .menu {
                position: relative;
                display: inline-flex;
                align-items: center;
                margin-right: calc(var(--space-xs) * -1);
            }

            .menu-caret {
                box-sizing: content-box;
                border: 0;
                color: inherit;
                background: transparent;
                vertical-align: middle;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                cursor: pointer;
                padding: var(--space-xs);
                border-radius: var(--radius-xs);
                transition: all 0.2s var(--transition-smooth);
            }

            @media (hover: none), (pointer: coarse) {
                .menu-caret {
                    box-sizing: border-box;
                    width: 44px;
                    height: 44px;
                }

                .menu-action {
                    display: flex;
                    align-items: center;
                    min-height: 44px;
                    box-sizing: border-box;
                }
            }

            .menu-caret:hover {
                background: var(--overlay-medium);
            }

            .menu-caret svg {
                width: 10px;
                height: 10px;
                transition: transform 0.3s var(--transition-bounce);
                stroke: currentColor;
                stroke-width: 1.5;
                fill: none;
            }

            .menu-open .menu-caret {
                background: var(--overlay-medium);
            }

            .menu-open .menu-caret svg {
                transform: rotate(180deg);
            }

            .menu-open .menu-list {
                display: flex;
            }

            .menu-open .menu-list.positioned {
                animation: menuAppear 0.16s var(--transition-smooth);
                transform-origin: var(--menu-transform-origin, top right);
            }

            .menu-list {
                display: none;
                flex-direction: column;
                text-align: left;
                font-family: var(--font-family-regular);
                position: fixed;
                padding: var(--space-sm);
                border-radius: var(--radius-small);
                background: var(--color-surface-subtle);
                box-shadow: var(--shadow-overlay-hard);
                font-size: var(--font-size-small);
                color: var(--color-text-on-light);
                font-weight: 600;
                line-height: 26px;
                min-width: 180px;
                max-width: calc(100vw - 16px);
                overflow: auto;
                overscroll-behavior: contain;
                box-sizing: border-box;
                margin: 0;
                border: 0;
                inset: auto;
                z-index: 1000000;
                visibility: hidden;
            }

            .menu-list.positioned {
                visibility: visible;
            }

            .menu-actions {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }

            .menu-action {
                box-sizing: border-box;
                border: 0;
                background: transparent;
                color: inherit;
                font: inherit;
                text-align: start;
                width: 100%;
                display: block;
                white-space: nowrap;
                padding: var(--space-xs) var(--space-sm);
                border-radius: var(--radius-small);
                cursor: pointer;
                transition:
                    background-color 0.14s var(--transition-smooth),
                    color 0.14s var(--transition-smooth);
            }

            .menu-action:hover {
                background: rgb(var(--color-purple-500-rgb) / 0.16);
                color: var(--color-text-on-light);
            }

            button:focus-visible {
                outline: 2px solid var(--color-accent);
                outline-offset: 2px;
            }

            @keyframes menuAppear {
                from {
                    opacity: 0;
                    transform: translateY(var(--menu-entry-offset, -12px));
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .menu-open .menu-list.positioned {
                    animation: none;
                }
            }
        `,ve='<path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>',ye={open:!1,label:"Translation actions",items:[],layout:{top:0,left:0,maxHeight:0,placement:"below",ready:!1}};class xe extends HTMLElement{data=ye;menu=null;list=null;nodes=new Map;get caretElement(){return this.shadowRoot?.querySelector(".menu-caret")??void 0}get menuListElement(){return this.shadowRoot?.querySelector(".menu-list")??void 0}get presentation(){return this.data}set presentation(t){this.data=t,this.renderPresentation()}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){if(Object.prototype.hasOwnProperty.call(this,"presentation")){const t=this.presentation;delete this.presentation,this.presentation=t}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"});t.innerHTML=`<style>${f("extension")}${fe}</style><div class="menu menu-closed"><button type="button" class="menu-caret" aria-controls="translation-actions"><svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${ve}</svg></button><div id="translation-actions" class="menu-list" popover="manual"><ul class="menu-actions"></ul></div></div>`,this.menu=t.querySelector(".menu"),this.list=t.querySelector("ul"),this.menu?.addEventListener("mouseenter",()=>this.dispatchEvent(new CustomEvent("menuMouseEnter"))),this.menu?.addEventListener("mouseleave",()=>this.dispatchEvent(new CustomEvent("menuMouseLeave"))),this.caretElement?.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("menuToggle",{detail:{open:!this.data.open,restoreFocus:!1}}))}),this.menu?.addEventListener("keydown",e=>{e.key!=="Escape"||!this.data.open||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("menuToggle",{detail:{open:!1,restoreFocus:!0}})))}),this.list?.addEventListener("click",e=>{const i=e.target.closest("button[data-action]");i&&this.dispatchEvent(new CustomEvent("menuAction",{detail:i.dataset.action}))})}this.renderPresentation()}renderPresentation(){const t=this.menuListElement;if(!this.menu||!this.list||!t)return;this.menu.className=`menu ${this.data.open?"menu-open":"menu-closed"}`,t.className=`menu-list ${this.data.layout.ready?"positioned":""}`,this.caretElement?.setAttribute("aria-label",this.data.label),this.caretElement?.setAttribute("aria-expanded",String(this.data.open));const{top:e,left:i,maxHeight:o,placement:r}=this.data.layout;Object.assign(t.style,{top:`${e}px`,left:`${i}px`,maxHeight:`${o}px`}),t.style.setProperty("--menu-transform-origin",r==="above"?"bottom right":"top right"),t.style.setProperty("--menu-entry-offset",r==="above"?"12px":"-12px");const l=new Set(this.data.items.map(c=>c.id));for(const[c,s]of this.nodes)l.has(c)||(s.remove(),this.nodes.delete(c));let n=this.list.firstChild;for(const c of this.data.items){let s=this.nodes.get(c.id);if(!s){s=this.ownerDocument.createElement("li");const u=this.ownerDocument.createElement("button");u.type="button",u.className="menu-action",u.dataset.action=c.id,s.append(u),this.nodes.set(c.id,s)}const d=s.firstElementChild;d.textContent!==c.label&&(d.textContent=c.label),s!==n&&this.list.insertBefore(s,n),n=s.nextSibling}}}const we=`
        
        
        :host {
            position: fixed;
            z-index: 9999;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%) translateY(calc(100% + 24px));
            display: flex;
            padding: var(--space-md) var(--space-lg);
            justify-content: flex-start;
            align-items: center;
            gap: var(--space-md);
            border-radius: var(--radius-small);
            background: var(--gradient-primary);
            box-shadow: var(--shadow-overlay-hard);
            color: var(--color-text);
            transition: all 0.3s var(--transition-bounce);
            opacity: 0;
            pointer-events: none;
        }

        :host([visible]) {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
            pointer-events: all;
        }

        .logo {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }

        .message {
            font-family: var(--font-family-regular);
            font-size: var(--font-size-body);
            margin: 0;
        }

        button {
            all: unset;
            font-family: var(--font-family-medium);
            font-size: var(--font-size-body);
            color: var(--warning);
            cursor: pointer;
            transition: color 0.3s var(--transition-smooth);
        }

        button:hover {
            color: rgb(var(--color-accent-rgb) / 0.45);
        }
    `;class ke extends HTMLElement{static observedAttributes=["message","action-label","visible","logo-url"];paragraph=null;action=null;logo=null;timeout;callback;hovering=!1;get message(){return this.getAttribute("message")??""}set message(t){this.setAttribute("message",t)}get actionLabel(){return this.getAttribute("action-label")??""}set actionLabel(t){this.setAttribute("action-label",t)}get visible(){return this.hasAttribute("visible")}set visible(t){this.toggleAttribute("visible",!!t)}get logoUrl(){return this.getAttribute("logo-url")??""}set logoUrl(t){this.setAttribute("logo-url",t)}get updateComplete(){return Promise.resolve(!0)}connectedCallback(){for(const t of["message","actionLabel","visible","logoUrl"]){if(!Object.prototype.hasOwnProperty.call(this,t))continue;const e=this[t];delete this[t],this[t]=e}if(!this.shadowRoot){const t=this.attachShadow({mode:"open"}),e=this.ownerDocument.createElement("style");e.textContent=f("extension")+we+`
button[hidden]{display:none}`,this.logo=this.ownerDocument.createElement("img"),this.logo.className="logo",this.logo.alt="Stickly",this.paragraph=this.ownerDocument.createElement("p"),this.paragraph.className="message",this.action=this.ownerDocument.createElement("button"),this.action.type="button",this.action.addEventListener("click",()=>{const i=this.callback;this.callback=void 0;try{i?.()}finally{this.hide()}}),t.append(e,this.logo,this.paragraph,this.action)}this.addEventListener("mouseenter",this.onEnter),this.addEventListener("mouseleave",this.onLeave),this.sync()}disconnectedCallback(){this.removeEventListener("mouseenter",this.onEnter),this.removeEventListener("mouseleave",this.onLeave),this.hovering=!1,this.hide()}attributeChangedCallback(){this.sync()}show(t,e="",i=5e3){this.callback=void 0,this.message=t,this.actionLabel=e,this.visible=!0,this.clearTimer(),this.hovering||this.schedule(i)}showWithAction(t,e,i,o=5e3){this.show(t,e,o),this.callback=i}hide(){this.visible=!1,this.callback=void 0,this.clearTimer()}onEnter=()=>{this.hovering=!0,this.clearTimer()};onLeave=()=>{this.hovering=!1,this.visible&&this.schedule(5e3)};clearTimer(){this.timeout!==void 0&&this.ownerDocument.defaultView?.clearTimeout(this.timeout),this.timeout=void 0}schedule(t){this.clearTimer(),this.timeout=this.ownerDocument.defaultView?.setTimeout(()=>this.hide(),t)}sync(){if(!this.paragraph||!this.action||!this.logo)return;this.paragraph.textContent=this.message,this.action.textContent=this.actionLabel,this.action.hidden=!this.actionLabel,this.action.disabled=!this.visible||!this.actionLabel;const t=this.logoUrl;t?this.logo.src=t:this.logo.removeAttribute("src")}}const Se=f("extension","stickly-highlight-anchor")+`
stickly-highlight-anchor { --ext-canvas:var(--color-canvas); --ext-surface:var(--color-surface); --ext-text:var(--color-text); --ext-text-muted:var(--color-text-muted); --ext-accent:var(--color-accent); --ext-learned:var(--color-brand); --ext-success:var(--color-success); --ext-danger:rgb(var(--color-danger-rgb)/.3); --ext-surface-subtle:var(--color-surface-subtle); --ext-overlay-soft:var(--overlay-soft); --ext-overlay-medium:var(--overlay-medium); --ext-overlay-strong:var(--overlay-strong); --ext-gradient:var(--gradient-primary); --ext-radius-md:8px; --ext-radius-lg:16px; --ext-radius-xs:4px; --ext-space-xs:4px; --ext-space-sm:8px; --ext-space-md:12px; }
stickly-highlight-anchor { display:inline; position:relative; color:inherit; font-family:inherit; }
stickly-highlight-anchor .stickly-anchor { position:relative; display:inline; color:inherit; font-family:inherit; }
stickly-highlight-anchor .bubble-slot { position:absolute; left:50%; bottom:calc(100% + 8px); transform:translateX(calc(-50% + var(--stickly-preview-shift-x,0px))); z-index:3; pointer-events:auto; display:block; width:max-content; max-width:min(28rem,var(--stickly-anchor-max-width,calc(100vw - 2rem))); overflow:visible; }
stickly-highlight-anchor .bubble-slot[data-placement="below"] { top:calc(100% + 8px); bottom:auto; }
`;class $e{constructor(t,e){this.anchor=t,this.bubble=e}resizeObserver;ancestorObserver;positionTimer;get view(){return this.anchor.ownerDocument.defaultView}schedulePositionUpdate=t=>{if(t?.type==="scroll"&&t.target instanceof Node&&this.bubble.contains(t.target))return;const e=this.view;e&&(this.positionTimer!==void 0&&e.clearTimeout(this.positionTimer),this.positionTimer=e.setTimeout(()=>{this.positionTimer=void 0,this.update()},0))};ancestorMotionEnded=t=>{t.target instanceof Element&&t.target.contains(this.anchor)&&this.schedulePositionUpdate()};mount(){this.schedulePositionUpdate(),this.view?.addEventListener("resize",this.schedulePositionUpdate),this.view?.addEventListener("scroll",this.schedulePositionUpdate,!0),this.anchor.ownerDocument.addEventListener("transitionend",this.ancestorMotionEnded,!0),this.anchor.ownerDocument.addEventListener("animationend",this.ancestorMotionEnded,!0);const t=this.view?.MutationObserver;if(t){this.ancestorObserver=new t(()=>this.schedulePositionUpdate());for(let i=this.anchor.parentElement;i;i=i.parentElement)this.ancestorObserver.observe(i,{attributes:!0,attributeFilter:["style","class","hidden"]})}const e=this.view?.ResizeObserver;if(e){this.resizeObserver=new e(()=>this.schedulePositionUpdate()),this.resizeObserver.observe(this.bubble);for(let i=this.anchor.parentElement;i;i=i.parentElement){const o=this.view.getComputedStyle(i);[o.overflowX,o.overflowY].some(r=>/^(hidden|clip|auto|scroll)$/.test(r))&&this.resizeObserver.observe(i)}}}destroy(){this.view?.removeEventListener("resize",this.schedulePositionUpdate),this.view?.removeEventListener("scroll",this.schedulePositionUpdate,!0),this.anchor.ownerDocument.removeEventListener("transitionend",this.ancestorMotionEnded,!0),this.anchor.ownerDocument.removeEventListener("animationend",this.ancestorMotionEnded,!0),this.positionTimer!==void 0&&this.view?.clearTimeout(this.positionTimer),this.positionTimer=void 0,this.resizeObserver?.disconnect(),this.resizeObserver=void 0,this.ancestorObserver?.disconnect(),this.ancestorObserver=void 0}update(){const t=this.view;if(!t)return;let e=t.visualViewport?.offsetLeft??0,i=e+(t.visualViewport?.width??this.anchor.ownerDocument.documentElement.clientWidth),o=t.visualViewport?.offsetTop??0,r=o+(t.visualViewport?.height??this.anchor.ownerDocument.documentElement.clientHeight);for(let k=this.anchor.parentElement;k;k=k.parentElement){const C=t.getComputedStyle(k);if(/^(hidden|clip|auto|scroll)$/.test(C.overflowX)){const E=k.getBoundingClientRect();E.width&&(e=Math.max(e,E.left),i=Math.min(i,E.right))}if(/^(hidden|clip|auto|scroll)$/.test(C.overflowY)){const E=k.getBoundingClientRect();E.height&&(o=Math.max(o,E.top),r=Math.min(r,E.bottom))}}const l=this.bubble.getBoundingClientRect(),n=t.getComputedStyle(this.bubble),c=parseFloat(n.width),s=n.boxSizing==="border-box"?c:c+parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),d=s>0?l.width/s:1,u=d>0?d:1;this.bubble.style.setProperty("--stickly-anchor-max-width",`${Math.max(1,(i-e-16)/u)}px`),this.bubble.style.setProperty("--stickly-preview-shift-x","0px");const h=[...this.bubble.querySelectorAll("stickly-bubble")],p=h.flatMap(k=>{const C=k.shadowRoot?.querySelector(".bubble-shell");return C?[{shell:C,previousScroll:C.scrollTop}]:[]}),b=this.bubble.dataset.placement;this.bubble.style.removeProperty("--stickly-anchor-content-max-height");const g=this.anchor.getBoundingClientRect(),m=this.bubble.getBoundingClientRect().height,v=Math.max(0,g.top-o-8-8*u),w=Math.max(0,r-g.bottom-8-8*u),x=this.anchor.closest("stickly-highlight-anchor")?.getAttribute("placement")==="below"?"below":"above",L=x==="above"?v:w,y=x==="above"?w:v,S=L>=m?x:y>=m?x==="above"?"below":"above":v>=w?"above":"below";this.bubble.dataset.placement=S;for(const k of h)k.setAttribute("anchor-placement",S);const N=S==="above"?v:w;N<m&&this.bubble.style.setProperty("--stickly-anchor-content-max-height",`${Math.max(1,N/u-2)}px`);for(const{shell:k,previousScroll:C}of p)k.scrollTop=b===S?C:0;const _=this.bubble.getBoundingClientRect();let T=0;_.left<e+8?T=e+8-_.left:_.right>i-8&&(T=i-8-_.right),this.bubble.style.setProperty("--stickly-preview-shift-x",`${T/u}px`);const tt=g.left+g.width/2,et=Math.min(Math.max((tt-(_.left+T))/u,16),Math.max(_.width/u-16,16));this.bubble.style.setProperty("--stickly-arrow-left",`${Math.round(et)}px`)}}function J(a){let t=a.querySelector(".stickly-anchor"),e=a.querySelector(".bubble-slot");if(!t||!e){t=a.ownerDocument.createElement("span"),t.className="stickly-anchor",e=a.ownerDocument.createElement("span"),e.className="bubble-slot";for(const i of Array.from(a.childNodes))i.nodeType===1&&i.getAttribute("slot")==="bubble"?e.appendChild(i):t.appendChild(i);t.appendChild(e),a.appendChild(t)}e.setAttribute("data-placement",a.getAttribute("placement")==="below"?"below":"above");for(const i of a.querySelectorAll("[data-highlight-projection],[data-bubble-projection]"))i.style.display="contents"}z("stickly-highlight-anchor",J);function Ce(a=customElements){if(a.get("stickly-highlight-anchor"))return;class t extends HTMLElement{static observedAttributes=["placement"];controller;attributeChangedCallback(){this.controller?.update()}connectedCallback(){queueMicrotask(()=>{if(!this.isConnected)return;const i=this.getRootNode(),o=i instanceof ShadowRoot?i:this.ownerDocument;if(!o.querySelector("style[data-stickly-highlight-anchor]")){const r=this.ownerDocument.createElement("style");r.dataset.sticklyHighlightAnchor="",r.textContent=Se,(o instanceof ShadowRoot?o:this.ownerDocument.head).appendChild(r)}J(this),this.controller?.destroy(),this.controller=new $e(this.querySelector(".stickly-anchor"),this.querySelector(".bubble-slot")),this.controller.mount()})}disconnectedCallback(){this.controller?.destroy(),this.controller=void 0}}a.define("stickly-highlight-anchor",t)}const Ee=`
stickly-banner { display:block;width:100%;color:rgb(var(--color-text-rgb));background:rgb(var(--color-success-rgb)); }
stickly-banner[type="warning"] { background:rgb(var(--color-accent-rgb)); }
stickly-banner[type="error"] { background:rgb(var(--color-danger-rgb)); }
stickly-banner > .stickly-banner-content { box-sizing:border-box;margin-left:auto;margin-right:auto;display:flex;width:100%;max-width:960px;align-items:center;justify-content:space-between;padding:.5rem .75rem;font-weight:600; }
`;function Ae(a=customElements){if(a.get("stickly-banner"))return;class t extends HTMLElement{connectedCallback(){queueMicrotask(()=>{this.isConnected&&(A(this,"banner",f("webapp","stickly-banner:not([inherit-tokens])")+Ee),st(this))})}}a.define("stickly-banner",t)}const ze=`
stickly-compact-action { display:inline-flex; }
stickly-compact-action > .stickly-compact-control { font:inherit;border:0;background:transparent;padding:0; }
stickly-compact-action > .stickly-compact-control { display:flex;box-sizing:border-box;align-items:center;justify-content:center;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:150ms;transition-timing-function:cubic-bezier(.4,0,.2,1);color:rgb(var(--color-text-muted-rgb)); }
stickly-compact-action[profile="pagination"] > .stickly-compact-control { height:1.75rem;width:1.75rem;border-radius:.25rem; }
stickly-compact-action[profile="pagination"] > .stickly-compact-control:hover { color:rgb(var(--color-text-rgb)); }
stickly-compact-action[profile="pagination"] > .stickly-compact-control:disabled { cursor:not-allowed;opacity:.3; }
stickly-compact-action[profile="pronunciation"] > .stickly-compact-control { display:inline-flex;flex-shrink:0;height:2.25rem;width:2.25rem;border-radius:9999px;border:1px solid rgb(var(--color-border-rgb)/.25);background:rgb(var(--color-canvas-rgb)/.7); }
stickly-compact-action[profile="pronunciation"] > .stickly-compact-control:hover { border-color:rgb(var(--color-accent-rgb)/.5);background:rgb(var(--color-accent-rgb)/.1);color:rgb(var(--color-accent-rgb)); }
stickly-compact-action[profile="pronunciation"] > .stickly-compact-control:focus-visible { outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:rgb(var(--color-accent-rgb)); }
stickly-compact-action[profile="pronunciation"] > .stickly-compact-control:disabled { cursor:not-allowed;opacity:.6; }

stickly-compact-action[profile="close"] > .stickly-compact-control { display:inline-flex;flex-shrink:0;height:2.25rem;width:2.25rem;border-radius:9999px;border:1px solid rgb(var(--color-border-rgb)/.2);background:rgb(var(--color-canvas-rgb)/.7); }
stickly-compact-action[profile="close"] > .stickly-compact-control:hover { border-color:rgb(var(--color-border-rgb)/.4);background:rgb(var(--color-canvas-rgb));color:rgb(var(--color-text-rgb)); }
stickly-compact-action[profile="close"] > .stickly-compact-control:focus-visible { outline-style:solid;outline-width:2px;outline-offset:2px;outline-color:rgb(var(--color-accent-rgb)); }
stickly-compact-action[profile="footer-link"] { display:contents; }
stickly-compact-action[profile="footer-link"] > .stickly-compact-control { display:revert;cursor:pointer;border:0;background:transparent;padding:0;text-align:left;color:rgb(var(--color-text-rgb));text-decoration-line:none;text-decoration-thickness:2px;text-decoration-color:transparent;text-underline-offset:4px;transition-duration:200ms; }
stickly-compact-action[profile="footer-link"][layout="inline-icon"] > .stickly-compact-control { display:inline-flex;align-items:center;gap:.5rem; }
stickly-compact-action[profile="footer-link"] > .stickly-compact-control:is(:hover,:focus) { text-decoration-line:underline;text-decoration-color:rgb(var(--color-accent-rgb));color:rgb(var(--color-accent-rgb)); }
stickly-compact-action[profile="footer-link"] > .stickly-compact-control:focus { outline:none;box-shadow:0 0 #0000,0 0 #0000,0 0 #0000; }
`;function V(a){let t=Array.from(a.children).find(i=>i.classList.contains("stickly-compact-control"));if(!t){t=a.ownerDocument.createElement("button"),t.type="button",t.className="stickly-compact-control",t.setAttribute("data-stickly-generated-control","");for(const i of Array.from(a.childNodes))t.appendChild(i);a.appendChild(t)}t.localName==="button"&&(t.hasAttribute("data-stickly-generated-control")||a.hasAttribute("disabled"))&&(t.disabled=a.hasAttribute("disabled"));const e=a.getAttribute("aria-label");e!==null&&t.setAttribute("aria-label",e)}z("stickly-compact-action",V);function Le(a=customElements){if(a.get("stickly-compact-action"))return;class t extends HTMLElement{static observedAttributes=["disabled","aria-label"];connectedCallback(){queueMicrotask(()=>{if(!this.isConnected)return;const i=this.getRootNode(),o=i instanceof ShadowRoot?i:this.ownerDocument;if(!o.querySelector("style[data-stickly-compact-styles]")){const r=this.ownerDocument.createElement("style");r.dataset.sticklyCompactStyles="",r.textContent=f("webapp","stickly-compact-action:not([inherit-tokens])")+ze,(o instanceof ShadowRoot?o:this.ownerDocument.head).append(r)}V(this)})}attributeChangedCallback(){this.isConnected&&V(this)}}a.define("stickly-compact-action",t)}const _e=`
__HOST__ > .stickly-one-off-control {
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  background-color: transparent;
  padding: 0;
  text-decoration: inherit;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / .5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
}

__HOST__ > button.stickly-one-off-control:not(:disabled) {
  cursor: pointer;
}

__HOST__ > button.stickly-one-off-control:disabled {
  cursor: not-allowed;
}

__HOST__ {
  display: contents;
}

__HOST__:where([profile="column-toggle"]) > .stickly-one-off-control {
  display: inline-flex;
  width: 1.75rem;
  height: 1.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 1px;
  border-color: rgb(var(--color-border-rgb) / 0.25);
  background-color: rgb(var(--color-canvas-rgb) / 0.7);
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-muted-rgb) / var(--tw-text-opacity, 1));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="column-toggle"]) > .stickly-one-off-control:hover {
  border-color: rgb(var(--color-accent-rgb) / 0.5);
  background-color: rgb(var(--color-accent-rgb) / 0.1);
  --tw-text-opacity: 1;
  color: rgb(var(--color-accent-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="column-toggle"]) > .stickly-one-off-control:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: rgb(var(--color-accent-rgb) / 1);
}

__HOST__:where([profile="contact-close"]) > .stickly-one-off-control {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 2px;
  border-color: rgb(var(--color-text-on-light-rgb) / 0.15);
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-white-rgb) / var(--tw-bg-opacity, 1));
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 900;
}

__HOST__:where([profile="contact-close"]) > .stickly-one-off-control:hover {
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-brand-rgb) / var(--tw-border-opacity, 1));
}

__HOST__:where([profile="intro-close"]) > .stickly-one-off-control {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 0px;
  background-color: rgb(var(--color-canvas-rgb) / 0.6);
  color: rgb(var(--color-text-rgb) / 0.55);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="intro-close"]) > .stickly-one-off-control:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-canvas-rgb) / var(--tw-bg-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="category"]) > .stickly-one-off-control {
  flex-shrink: 0;
  border-radius: var(--radius-lg);
  border-width: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="category"]) > .stickly-one-off-control:hover {
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-accent-rgb) / var(--tw-border-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-accent-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="category"]) > .stickly-one-off-control:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(var(--color-accent-rgb) / var(--tw-ring-opacity, 1));
}

__HOST__:where([profile="category"]):where([selected]) > .stickly-one-off-control {
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-accent-rgb) / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-accent-rgb) / var(--tw-bg-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-on-light-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="category"]):where(:not([selected])) > .stickly-one-off-control {
  border-color: rgb(var(--color-border-rgb) / 0.3);
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-muted-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="category-all"]) > .stickly-one-off-control {
  flex-shrink: 0;
  border-radius: var(--radius-lg);
  border-width: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="category-all"]) > .stickly-one-off-control:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(var(--color-accent-rgb) / var(--tw-ring-opacity, 1));
}

__HOST__:where([profile="category-all"]):where([selected]) > .stickly-one-off-control {
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-accent-rgb) / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-accent-rgb) / var(--tw-bg-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-on-light-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="category-all"]):where(:not([selected])) > .stickly-one-off-control {
  border-color: rgb(var(--color-border-rgb) / 0.3);
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-muted-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="blog-reset"]) > .stickly-one-off-control {
  border-radius: var(--radius-lg);
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-action-primary-rgb) / var(--tw-bg-opacity, 1));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-on-light-rgb) / var(--tw-text-opacity, 1));
  --tw-shadow: 3px 3px 0 rgb(var(--color-action-primary-edge-rgb));
  --tw-shadow-colored: 3px 3px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="blog-reset"]) > .stickly-one-off-control:hover {
  --tw-translate-y: -0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

__HOST__:where([profile="segment"]) > .stickly-one-off-control {
  display: inline-flex;
  min-height: 2.5rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="segment"]) > .stickly-one-off-control:focus-within {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: rgb(var(--color-accent-rgb) / 1);
}

__HOST__:where([profile="segment"]):where([selected]) > .stickly-one-off-control {
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-brand-rgb) / var(--tw-bg-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-rgb) / var(--tw-text-opacity, 1));
  --tw-shadow: var(--shadow-subtle);
  --tw-shadow-colored: var(--shadow-subtle);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow-color: rgb(var(--color-surface-subtle-rgb) / 1);
  --tw-shadow: var(--tw-shadow-colored);
}

__HOST__:where([profile="segment"]):where(:not([selected])) > .stickly-one-off-control {
  color: rgb(var(--color-text-rgb) / 0.7);
}

__HOST__:where([profile="segment"]):where(:not([selected])) > .stickly-one-off-control:hover {
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="text-retry"]) > .stickly-one-off-control {
  cursor: pointer;
  border-width: 0px;
  background-color: transparent;
  padding: 0px;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(var(--color-accent-rgb) / var(--tw-text-opacity, 1));
  text-decoration-line: underline;
}

__HOST__:where([profile="text-filter"]) > .stickly-one-off-control {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-muted-rgb) / var(--tw-text-opacity, 1));
  text-decoration-line: underline;
  text-decoration-color: rgb(var(--color-white-rgb) / 0.3);
  text-underline-offset: 4px;
}

__HOST__:where([profile="text-filter"]) > .stickly-one-off-control:hover {
  --tw-text-opacity: 1;
  color: rgb(var(--color-white-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="text-restart"]) > .stickly-one-off-control {
  border-width: 0px;
  background-color: transparent;
  padding: 0px;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(var(--color-border-rgb) / var(--tw-text-opacity, 1));
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

__HOST__:where([profile="premium-link"]) > .stickly-one-off-control {
  display: inline-flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-action-primary-rgb) / var(--tw-bg-opacity, 1));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 800;
  --tw-text-opacity: 1;
  color: rgb(var(--color-canvas-rgb) / var(--tw-text-opacity, 1));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="premium-link"]) > .stickly-one-off-control:hover {
  --tw-translate-y: -1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-shadow: var(--shadow-raised);
  --tw-shadow-colored: var(--shadow-raised);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow-color: rgb(var(--color-surface-raised-rgb) / 1);
  --tw-shadow: var(--tw-shadow-colored);
}

__HOST__:where([profile="premium-link"]) > .stickly-one-off-control:focus-visible {
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: rgb(var(--color-accent-rgb) / 1);
}

__HOST__:where([profile="resource-link"]) > .stickly-one-off-control {
  border-radius: var(--radius-lg);
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-brand-rgb) / var(--tw-border-opacity, 1));
  background-color: rgb(var(--color-brand-rgb) / 0.2);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 900;
  --tw-text-opacity: 1;
  color: rgb(var(--color-white-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="resource-link"]) > .stickly-one-off-control:hover {
  background-color: rgb(var(--color-brand-rgb) / 0.35);
}

__HOST__:where([profile="related-link"]) > .stickly-one-off-control {
  border-radius: var(--radius-lg);
  border-width: 1px;
  border-color: rgb(var(--color-border-rgb) / 0.15);
  background-color: rgb(var(--color-canvas-rgb) / 0.7);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-rgb) / var(--tw-text-opacity, 1));
  text-decoration-line: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="related-link"]) > .stickly-one-off-control:hover {
  border-color: rgb(var(--color-accent-rgb) / 0.3);
  --tw-text-opacity: 1;
  color: rgb(var(--color-accent-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="synonym-link"]) > .stickly-one-off-control {
  border-radius: 9999px;
  border-width: 1px;
  border-color: rgb(var(--color-border-rgb) / 0.15);
  background-color: rgb(var(--color-surface-rgb) / 0.8);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-rgb) / var(--tw-text-opacity, 1));
  text-decoration-line: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="synonym-link"]) > .stickly-one-off-control:hover {
  border-color: rgb(var(--color-accent-rgb) / 0.3);
  --tw-text-opacity: 1;
  color: rgb(var(--color-accent-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="pair-link"]) > .stickly-one-off-control {
  border-radius: var(--radius-lg);
  border-width: 1px;
  border-color: rgb(var(--color-border-rgb) / 0.3);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  text-decoration-line: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

__HOST__:where([profile="pair-link"]) > .stickly-one-off-control:hover {
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-accent-rgb) / var(--tw-border-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-accent-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="pair-link"]) > .stickly-one-off-control:focus {
  --tw-border-opacity: 1;
  border-color: rgb(var(--color-accent-rgb) / var(--tw-border-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-accent-rgb) / var(--tw-text-opacity, 1));
  outline: none;
}

__HOST__:where([profile="pair-link"]):where([selected]) > .stickly-one-off-control {
  --tw-bg-opacity: 1;
  background-color: rgb(var(--color-canvas-rgb) / var(--tw-bg-opacity, 1));
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-rgb) / var(--tw-text-opacity, 1));
}

__HOST__:where([profile="pair-link"]):where(:not([selected])) > .stickly-one-off-control {
  --tw-text-opacity: 1;
  color: rgb(var(--color-text-muted-rgb) / var(--tw-text-opacity, 1));
}
`;function qe(a="stickly-one-off-action"){return _e.replaceAll("__HOST__",a)}function I(a){let t=Array.from(a.children).find(i=>i.classList.contains("stickly-one-off-control")||i.localName==="label");if(!t){t=a.ownerDocument.createElement("button"),t.type="button",t.className="stickly-one-off-control",t.setAttribute("data-stickly-generated-control","");for(const i of Array.from(a.childNodes))t.appendChild(i);a.appendChild(t)}t.localName==="button"&&(t.hasAttribute("data-stickly-generated-control")||a.hasAttribute("disabled"))&&(t.disabled=a.hasAttribute("disabled"));const e=a.getAttribute("aria-label");e!==null&&t.setAttribute("aria-label",e)}z("stickly-one-off-action",I);function Te(a=customElements){if(a.get("stickly-one-off-action"))return;class t extends HTMLElement{static observedAttributes=["disabled","aria-label"];connectedCallback(){queueMicrotask(()=>{if(!this.isConnected)return;const i=this.getRootNode(),o=i instanceof ShadowRoot?i:this.ownerDocument;if(!o.querySelector("style[data-stickly-one-off-styles]")){const r=this.ownerDocument.createElement("style");r.dataset.sticklyOneOffStyles="",r.textContent=f("webapp","stickly-one-off-action:not([inherit-tokens])")+qe(),(o instanceof ShadowRoot?o:this.ownerDocument.head).append(r)}I(this)})}attributeChangedCallback(){this.isConnected&&I(this)}}a.define("stickly-one-off-action",t)}pt();Nt();Kt();Qt();lt();ct();dt();ht();le();ce();he();Ce();for(const[a,t]of[["stickly-translator-surface",Pt],["stickly-smart-translation-card",Ot],["stickly-smart-translation-list",Rt],["stickly-review-bridge-view",Ht],["stickly-article-mission-view",Vt],["stickly-translation-content-view",Et],["stickly-feedback-view",Lt],["stickly-context-recall-view",Dt],["stickly-quota-notice-view",$t],["stickly-inline-quiz-view",mt],["stickly-popup-view",vt],["stickly-paginator",bt],["stickly-loader",Xt],["stickly-button",jt],["stickly-checkbox",Wt],["stickly-radio",Ut],["stickly-celebration",Gt],["stickly-audio-button",Jt],["stickly-dropdown",oe],["stickly-dialog",re],["stickly-bubble",me],["stickly-translation-menu",xe],["stickly-toast-view",ke],["stickly-native-select",Yt]])customElements.get(a)||customElements.define(a,t);Ae();Le();Te();export{Gt as S,Dt as a,Lt as b,Qt as c,Kt as d,Re as o};
