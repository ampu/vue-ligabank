import{_ as re}from"./nuxt-link.3a7e6303.js";import{h as D,j as K,q as $,o as b,a as m,Q as He,e as u,c as W,w as L,u as v,l as ee,m as M,F as ve,r as Ee,b as A,f as Ce,t as Ve,y as Fe,M as ie,R as se,k as je,S as ze,H as Ge,U as Ye,z as qe,s as he,A as We,V as Qe,B as Xe,p as Je}from"./entry.893c1e7d.js";import{_ as Ze}from"./_plugin-vue_export-helper.c27b6911.js";const et=["alt"],tt=D({__name:"APicture",props:{src:{},alt:{}},setup(n){const e=n,t=K();return $(()=>{t.value&&(t.value.src=e.src)}),(a,o)=>(b(),m("picture",null,[He(a.$slots,"default"),u("img",{ref_key:"imageRef",ref:t,alt:a.alt},null,8,et)]))}});var k=(n=>(n.INDEX="/",n.CURRENCY="/currency",n.SERVICES="/#services",n.CREDIT_CALCULATOR="/#credit-calculator",n.CONTACTS="/#contacts",n.SIGN_IN="/sign-in",n.FORGOTTEN_PASSWORD="/forgotten-password",n.ASK_QUESTION="/ask-question",n.DEPOSITS="/deposits",n.INSURANCE="/insurance",n.ONLINE_SERVICES="/online-services",n.CREDIT_REQUEST="/credit-request",n.CURRENCY_TO_RATE="/api/currency-to-rate",n))(k||{}),Y=(n=>(n.FACEBOOK="https://facebook.com/",n.INSTAGRAM="https://instagram.com/",n.TWITTER="https://twitter.com/",n.YOUTUBE="https://youtube.com/",n))(Y||{}),Ie=(n=>(n[n.TABLET=768]="TABLET",n[n.MIN_DESKTOP=1024]="MIN_DESKTOP",n))(Ie||{}),fe=(n=>(n.TABLET="(min-width: 768px) and (max-width: 1023px)",n.MOBILE="(max-width: 767px)",n))(fe||{});const nt=""+new URL("logo--desktop.2dc163f0.svg",import.meta.url).href,at=""+new URL("logo--tablet.4b7095ab.svg",import.meta.url).href,ot=""+new URL("logo--mobile.127ed6b3.svg",import.meta.url).href,rt=""+new URL("logo--extended-desktop.740eb6d1.svg",import.meta.url).href,it=["src"],st=["media","srcSet"],ct=["media","srcSet"],be=D({__name:"AppLogo",props:{isExtended:{type:Boolean},class:{}},setup(n){const e=n;return(t,a)=>{const o=tt,s=re;return b(),W(s,{to:("LocalPath"in t?t.LocalPath:v(k)).INDEX,class:M(["AppLogo",t.isExtended&&"AppLogo--extended",e.class]),activeClass:"AppLogo--active"},{default:L(()=>[t.isExtended?(b(),m("img",{key:0,src:v(rt),alt:"Логотип «ЛИГА Банк».",width:"150",height:"31"},null,8,it)):ee("",!0),t.isExtended?ee("",!0):(b(),W(o,{key:1,src:v(nt),alt:"Логотип «ЛИГА Банк»."},{default:L(()=>[u("source",{media:("MediaQuery"in t?t.MediaQuery:v(fe)).MOBILE,srcSet:v(ot)},null,8,st),u("source",{media:("MediaQuery"in t?t.MediaQuery:v(fe)).TABLET,srcSet:v(at)},null,8,ct)]),_:1},8,["src"]))]),_:1},8,["to","class"])}}});const ke=D({__name:"SiteNavigation",props:{isHeader:{type:Boolean},isFooter:{type:Boolean},listClassName:{},itemClassName:{}},setup(n){const e=[{path:k.SERVICES,title:"Услуги",isHeader:!0,isFooter:!0},{path:k.CREDIT_CALCULATOR,title:"Рассчитать кредит",isHeader:!0,isFooter:!0},{path:k.CURRENCY,title:"Конвертер валют",isHeader:!0,isFooter:!1},{path:k.CONTACTS,title:"Контакты",isHeader:!0,isFooter:!0},{path:k.ASK_QUESTION,title:"Задать вопрос",isHeader:!1,isFooter:!0}];return(t,a)=>{const o=re;return b(),m("ul",{class:M(["SiteNavigation",t.listClassName])},[(b(),m(ve,null,Ee(e,s=>(b(),m(ve,null,[t.isHeader&&s.isHeader||t.isFooter&&s.isFooter?(b(),m("li",{key:s.path,class:M(["SiteNavigation__item",t.itemClassName])},[A(o,{to:s.path,class:"SiteNavigation__link",activeClassName:"SiteNavigation__link--active"},{default:L(()=>[Ce(Ve(s.title),1)]),_:2},1032,["to"])],2)):ee("",!0)],64))),64))],2)}}});const lt={width:"20",height:"22",viewBox:"0 0 20 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ut=u("path",{d:"M2.222 14.3h2.222v5.5h13.334V2.2H4.444v5.5H2.222V1.1c0-.292.117-.572.326-.778.208-.206.49-.322.785-.322H18.89c.295 0 .577.116.786.322.208.206.325.486.325.778v19.8c0 .292-.117.572-.325.778a1.117 1.117 0 01-.786.322H3.333c-.294 0-.577-.116-.785-.322a1.095 1.095 0 01-.326-.778v-6.6zM8.89 9.9V6.6l5.555 4.4-5.555 4.4v-3.3H0V9.9h8.889z",fill:"#1f1e25"},null,-1),dt=[ut];function vt(n,e){return b(),m("svg",lt,dt)}const ft={render:vt},pt=u("span",null,"Войти в Интернет-банк",-1),bt=D({__name:"UserNavigation",props:{isActive:{type:Boolean},listClassName:{},itemClassName:{}},setup(n,{emit:e}){const t=()=>{e("signIn")};return(a,o)=>{const s=re;return b(),m("ul",{class:M(["UserNavigation",a.isActive&&"active",a.listClassName])},[u("li",{class:M(["UserNavigation__item",a.itemClassName])},[A(s,{to:("LocalPath"in a?a.LocalPath:v(k)).SIGN_IN,class:"UserNavigation__link UserNavigation__link--sign-in",activeClass:"UserNavigation__link--active",onClickCapture:o[0]||(o[0]=Fe(()=>{},["prevent"])),onClick:t},{default:L(()=>[A(v(ft)),pt]),_:1},8,["to"])],2)],2)}}});const U=n=>{const e=K(n);return[e,()=>{e.value=!0},()=>{e.value=!1},()=>{e.value=!e.value}]},_t=600,ht=()=>{const[n,e,t,a]=U(!0);return $(o=>{const s=setTimeout(t,_t);o(()=>{clearTimeout(s)})}),[n,e,t,a]},Re={ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",SHIFT:"Shift",ALT:"Alt",CTRL:"Control",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",NUM0:"0",NUM1:"1",NUM2:"2",NUM3:"3",NUM4:"4",NUM5:"5",NUM6:"6",NUM7:"7",NUM8:"8",NUM9:"9",PLUS:"+",MINUS:"-",E:"e"},gt=()=>{ie(()=>{document.body.classList.add("page-body--modal")}),se(()=>{document.body.classList.remove("page-body--modal")})},B=[],ge=n=>{const e=B[B.length-1];e(n)},mt=n=>{ie(()=>{B.push(n),B.length===1&&document.addEventListener("keydown",ge)}),se(()=>{B.pop(),B.length===0&&document.removeEventListener("keydown",ge)})};var _e=(n=>(n[n.PRIMARY=0]="PRIMARY",n))(_e||{});const wt=n=>{const e=K(),t=o=>{o.button===_e.PRIMARY&&(e.value.contains(o.target)||n())},a=o=>{o.key===Re.ESCAPE&&(o.preventDefault(),o.stopPropagation(),n())};return gt(),mt(a),[e,t,n]};/*!
* tabbable 6.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Oe=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],te=Oe.join(","),De=typeof Element>"u",x=De?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ne=!De&&Element.prototype.getRootNode?function(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}:function(n){return n==null?void 0:n.ownerDocument},ae=function n(e,t){var a;t===void 0&&(t=!0);var o=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),s=o===""||o==="true",r=s||t&&e&&n(e.parentNode);return r},yt=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},Le=function(e,t,a){if(ae(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(te));return t&&x.call(e,te)&&o.unshift(e),o=o.filter(a),o},Me=function n(e,t,a){for(var o=[],s=Array.from(e);s.length;){var r=s.shift();if(!ae(r,!1))if(r.tagName==="SLOT"){var d=r.assignedElements(),f=d.length?d:r.children,_=n(f,!0,a);a.flatten?o.push.apply(o,_):o.push({scopeParent:r,candidates:_})}else{var S=x.call(r,te);S&&a.filter(r)&&(t||!e.includes(r))&&o.push(r);var w=r.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(r),F=!ae(w,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(r));if(w&&F){var y=n(w===!0?r.children:w.children,!0,a);a.flatten?o.push.apply(o,y):o.push({scopeParent:r,candidates:y})}else s.unshift.apply(s,r.children)}}return o},xe=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||yt(e))&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Nt=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Pe=function(e){return e.tagName==="INPUT"},St=function(e){return Pe(e)&&e.type==="hidden"},At=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},Tt=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},Et=function(e){if(!e.name)return!0;var t=e.form||ne(e),a=function(d){return t.querySelectorAll('input[type="radio"][name="'+d+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=a(window.CSS.escape(e.name));else try{o=a(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var s=Tt(o,e.form);return!s||s===e},Ct=function(e){return Pe(e)&&e.type==="radio"},Ft=function(e){return Ct(e)&&!Et(e)},It=function(e){var t,a=e&&ne(e),o=(t=a)===null||t===void 0?void 0:t.host,s=!1;if(a&&a!==e){var r,d,f;for(s=!!((r=o)!==null&&r!==void 0&&(d=r.ownerDocument)!==null&&d!==void 0&&d.contains(o)||e!=null&&(f=e.ownerDocument)!==null&&f!==void 0&&f.contains(e));!s&&o;){var _,S,w;a=ne(o),o=(_=a)===null||_===void 0?void 0:_.host,s=!!((S=o)!==null&&S!==void 0&&(w=S.ownerDocument)!==null&&w!==void 0&&w.contains(o))}}return s},me=function(e){var t=e.getBoundingClientRect(),a=t.width,o=t.height;return a===0&&o===0},kt=function(e,t){var a=t.displayCheck,o=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=x.call(e,"details>summary:first-of-type"),r=s?e.parentElement:e;if(x.call(r,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof o=="function"){for(var d=e;e;){var f=e.parentElement,_=ne(e);if(f&&!f.shadowRoot&&o(f)===!0)return me(e);e.assignedSlot?e=e.assignedSlot:!f&&_!==e.ownerDocument?e=_.host:e=f}e=d}if(It(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return me(e);return!1},Rt=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var o=t.children.item(a);if(o.tagName==="LEGEND")return x.call(t,"fieldset[disabled] *")?!0:!o.contains(e)}return!0}t=t.parentElement}return!1},oe=function(e,t){return!(t.disabled||ae(t)||St(t)||kt(t,e)||At(t)||Rt(t))},pe=function(e,t){return!(Ft(t)||xe(t)<0||!oe(e,t))},Ot=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Dt=function n(e){var t=[],a=[];return e.forEach(function(o,s){var r=!!o.scopeParent,d=r?o.scopeParent:o,f=xe(d,r),_=r?n(o.candidates):d;f===0?r?t.push.apply(t,_):t.push(d):a.push({documentOrder:s,tabIndex:f,item:o,isScope:r,content:_})}),a.sort(Nt).reduce(function(o,s){return s.isScope?o.push.apply(o,s.content):o.push(s.content),o},[]).concat(t)},Lt=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Me([e],t.includeContainer,{filter:pe.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ot}):a=Le(e,t.includeContainer,pe.bind(null,t)),Dt(a)},Mt=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Me([e],t.includeContainer,{filter:oe.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=Le(e,t.includeContainer,oe.bind(null,t)),a},J=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return x.call(e,te)===!1?!1:pe(t,e)},xt=Oe.concat("iframe").join(","),de=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return x.call(e,xt)===!1?!1:oe(t,e)};/*!
* focus-trap 7.4.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function we(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function ye(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?we(Object(t),!0).forEach(function(a){Pt(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Pt(n,e,t){return e=$t(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Bt(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function $t(n){var e=Bt(n,"string");return typeof e=="symbol"?e:String(e)}var Ne={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var o=e.indexOf(t);o===-1||e.splice(o,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},Ut=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Kt=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},q=function(e){return e.key==="Tab"||e.keyCode===9},Ht=function(e){return q(e)&&!e.shiftKey},Vt=function(e){return q(e)&&e.shiftKey},Se=function(e){return setTimeout(e,0)},Ae=function(e,t){var a=-1;return e.every(function(o,s){return t(o)?(a=s,!1):!0}),a},G=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];return typeof e=="function"?e.apply(void 0,a):e},Z=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},jt=[],zt=function(e,t){var a=(t==null?void 0:t.document)||document,o=(t==null?void 0:t.trapStack)||jt,s=ye({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:Ht,isKeyBackward:Vt},t),r={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},d,f=function(i,c,l){return i&&i[c]!==void 0?i[c]:s[l||c]},_=function(i,c){var l=typeof(c==null?void 0:c.composedPath)=="function"?c.composedPath():void 0;return r.containerGroups.findIndex(function(p){var h=p.container,N=p.tabbableNodes;return h.contains(i)||(l==null?void 0:l.includes(h))||N.find(function(E){return E===i})})},S=function(i){var c=s[i];if(typeof c=="function"){for(var l=arguments.length,p=new Array(l>1?l-1:0),h=1;h<l;h++)p[h-1]=arguments[h];c=c.apply(void 0,p)}if(c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var N=c;if(typeof c=="string"&&(N=a.querySelector(c),!N))throw new Error("`".concat(i,"` as selector refers to no known node"));return N},w=function(){var i=S("initialFocus");if(i===!1)return!1;if(i===void 0||!de(i,s.tabbableOptions))if(_(a.activeElement)>=0)i=a.activeElement;else{var c=r.tabbableGroups[0],l=c&&c.firstTabbableNode;i=l||S("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},F=function(){if(r.containerGroups=r.containers.map(function(i){var c=Lt(i,s.tabbableOptions),l=Mt(i,s.tabbableOptions);return{container:i,tabbableNodes:c,focusableNodes:l,firstTabbableNode:c.length>0?c[0]:null,lastTabbableNode:c.length>0?c[c.length-1]:null,nextTabbableNode:function(h){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,E=l.findIndex(function(O){return O===h});if(!(E<0))return N?l.slice(E+1).find(function(O){return J(O,s.tabbableOptions)}):l.slice(0,E).reverse().find(function(O){return J(O,s.tabbableOptions)})}}}),r.tabbableGroups=r.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!S("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},y=function g(i){if(i!==!1&&i!==a.activeElement){if(!i||!i.focus){g(w());return}i.focus({preventScroll:!!s.preventScroll}),r.mostRecentlyFocusedNode=i,Ut(i)&&i.select()}},P=function(i){var c=S("setReturnFocus",i);return c||(c===!1?!1:i)},R=function(i){var c=Z(i);if(!(_(c,i)>=0)){if(G(s.clickOutsideDeactivates,i)){d.deactivate({returnFocus:s.returnFocusOnDeactivate});return}G(s.allowOutsideClick,i)||i.preventDefault()}},H=function(i){var c=Z(i),l=_(c,i)>=0;l||c instanceof Document?l&&(r.mostRecentlyFocusedNode=c):(i.stopImmediatePropagation(),y(r.mostRecentlyFocusedNode||w()))},ce=function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=Z(i);F();var p=null;if(r.tabbableGroups.length>0){var h=_(l,i),N=h>=0?r.containerGroups[h]:void 0;if(h<0)c?p=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:p=r.tabbableGroups[0].firstTabbableNode;else if(c){var E=Ae(r.tabbableGroups,function(le){var ue=le.firstTabbableNode;return l===ue});if(E<0&&(N.container===l||de(l,s.tabbableOptions)&&!J(l,s.tabbableOptions)&&!N.nextTabbableNode(l,!1))&&(E=h),E>=0){var O=E===0?r.tabbableGroups.length-1:E-1,$e=r.tabbableGroups[O];p=$e.lastTabbableNode}else q(i)||(p=N.nextTabbableNode(l,!1))}else{var z=Ae(r.tabbableGroups,function(le){var ue=le.lastTabbableNode;return l===ue});if(z<0&&(N.container===l||de(l,s.tabbableOptions)&&!J(l,s.tabbableOptions)&&!N.nextTabbableNode(l))&&(z=h),z>=0){var Ue=z===r.tabbableGroups.length-1?0:z+1,Ke=r.tabbableGroups[Ue];p=Ke.firstTabbableNode}else q(i)||(p=N.nextTabbableNode(l))}}else p=S("fallbackFocus");p&&(q(i)&&i.preventDefault(),y(p))},Q=function(i){if(Kt(i)&&G(s.escapeDeactivates,i)!==!1){i.preventDefault(),d.deactivate();return}(s.isKeyForward(i)||s.isKeyBackward(i))&&ce(i,s.isKeyBackward(i))},V=function(i){var c=Z(i);_(c,i)>=0||G(s.clickOutsideDeactivates,i)||G(s.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},X=function(){if(r.active)return Ne.activateTrap(o,d),r.delayInitialFocusTimer=s.delayInitialFocus?Se(function(){y(w())}):y(w()),a.addEventListener("focusin",H,!0),a.addEventListener("mousedown",R,{capture:!0,passive:!1}),a.addEventListener("touchstart",R,{capture:!0,passive:!1}),a.addEventListener("click",V,{capture:!0,passive:!1}),a.addEventListener("keydown",Q,{capture:!0,passive:!1}),d},j=function(){if(r.active)return a.removeEventListener("focusin",H,!0),a.removeEventListener("mousedown",R,!0),a.removeEventListener("touchstart",R,!0),a.removeEventListener("click",V,!0),a.removeEventListener("keydown",Q,!0),d},C=function(i){var c=i.some(function(l){var p=Array.from(l.removedNodes);return p.some(function(h){return h===r.mostRecentlyFocusedNode})});c&&y(w())},T=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(C):void 0,I=function(){T&&(T.disconnect(),r.active&&!r.paused&&r.containers.map(function(i){T.observe(i,{subtree:!0,childList:!0})}))};return d={get active(){return r.active},get paused(){return r.paused},activate:function(i){if(r.active)return this;var c=f(i,"onActivate"),l=f(i,"onPostActivate"),p=f(i,"checkCanFocusTrap");p||F(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=a.activeElement,c==null||c();var h=function(){p&&F(),X(),I(),l==null||l()};return p?(p(r.containers.concat()).then(h,h),this):(h(),this)},deactivate:function(i){if(!r.active)return this;var c=ye({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},i);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,j(),r.active=!1,r.paused=!1,I(),Ne.deactivateTrap(o,d);var l=f(c,"onDeactivate"),p=f(c,"onPostDeactivate"),h=f(c,"checkCanReturnFocus"),N=f(c,"returnFocus","returnFocusOnDeactivate");l==null||l();var E=function(){Se(function(){N&&y(P(r.nodeFocusedBeforeActivation)),p==null||p()})};return N&&h?(h(P(r.nodeFocusedBeforeActivation)).then(E,E),this):(E(),this)},pause:function(i){if(r.paused||!r.active)return this;var c=f(i,"onPause"),l=f(i,"onPostPause");return r.paused=!0,c==null||c(),j(),I(),l==null||l(),this},unpause:function(i){if(!r.paused||!r.active)return this;var c=f(i,"onUnpause"),l=f(i,"onPostUnpause");return r.paused=!1,c==null||c(),F(),X(),I(),l==null||l(),this},updateContainerElements:function(i){var c=[].concat(i).filter(Boolean);return r.containers=c.map(function(l){return typeof l=="string"?a.querySelector(l):l}),r.active&&F(),I(),this}},d.updateContainerElements(e),d};/*!
  * focus-trap-vue v4.0.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gt={escapeDeactivates:{type:Boolean,default:!0},returnFocusOnDeactivate:{type:Boolean,default:!0},allowOutsideClick:{type:[Boolean,Function],default:!0},clickOutsideDeactivates:[Boolean,Function],initialFocus:[String,Function,Boolean],fallbackFocus:[String,Function],checkCanFocusTrap:Function,checkCanReturnFocus:Function,delayInitialFocus:{type:Boolean,default:!0},document:Object,preventScroll:Boolean,setReturnFocus:[Object,String,Boolean,Function],tabbableOptions:Object},Be=D({props:Object.assign({active:{type:Boolean,default:!0}},Gt),emits:["update:active","activate","postActivate","deactivate","postDeactivate"],render(){return this.renderImpl()},setup(n,{slots:e,emit:t}){let a;const o=K(null),s=je(()=>{const d=o.value;return d&&(d instanceof HTMLElement?d:d.$el)});function r(){return a||(a=zt(s.value,{escapeDeactivates:n.escapeDeactivates,allowOutsideClick:n.allowOutsideClick,returnFocusOnDeactivate:n.returnFocusOnDeactivate,clickOutsideDeactivates:n.clickOutsideDeactivates,onActivate:()=>{t("update:active",!0),t("activate")},onDeactivate:()=>{t("update:active",!1),t("deactivate")},onPostActivate:()=>t("postActivate"),onPostDeactivate:()=>t("postDeactivate"),initialFocus:n.initialFocus,fallbackFocus:n.fallbackFocus,tabbableOptions:n.tabbableOptions,delayInitialFocus:n.delayInitialFocus}))}return ie(()=>{ze(()=>n.active,d=>{d&&s.value?r().activate():a&&(a.deactivate(),(!s.value||s.value.nodeType===Node.COMMENT_NODE)&&(a=null))},{immediate:!0,flush:"post"})}),se(()=>{a&&a.deactivate(),a=null}),{activate(){r().activate()},deactivate(){a&&a.deactivate()},renderImpl(){if(!e.default)return null;const d=e.default().filter(_=>_.type!==Ge);return!d||!d.length||d.length>1?(console.error("[focus-trap-vue]: FocusTrap requires exactly one child."),d):Ye(d[0],{ref:o})}}}}),Yt={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},qt=u("path",{d:"M1 1l16 16m0-16L1 17",stroke:"#1F1E25","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Wt=[qt];function Qt(n,e){return b(),m("svg",Yt,Wt)}const Xt={render:Qt},Jt={width:"22",height:"12",viewBox:"0 0 22 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Zt=u("path",{d:"M8.299 12l-1.963-.51.8-2.898a11.254 11.254 0 01-3.29-1.846L1.66 8.87.22 7.475l2.19-2.123A10.663 10.663 0 010 .354L2 0c.771 4.143 4.507 7.286 9 7.286 4.492 0 8.229-3.143 9-7.286l2 .353a10.662 10.662 0 01-2.409 5l2.188 2.122-1.438 1.395-2.188-2.124a11.254 11.254 0 01-3.29 1.846l.8 2.898-1.962.51-.8-2.898a11.6 11.6 0 01-3.801 0L8.299 12z",fill:"#1F1E25"},null,-1),en=[Zt];function tn(n,e){return b(),m("svg",Jt,en)}const nn={render:tn},an="akimutin-ligabank__sign-in";class on{constructor(e,t){this._storage=e,this._mapKey=t}getMap(e={}){try{const t=this._storage.getItem(this._mapKey)??"";return JSON.parse(t)||e}catch{return e}}patchMap(e){try{const t={...this.getMap(),...e};return this._storage.setItem(this._mapKey,JSON.stringify(t)),!0}catch{return!1}}}const Te=new on(localStorage,an),rn={class:"SignIn__field SignIn__field--login"},sn=u("label",{for:"SignIn-login"},"Логин",-1),cn={class:"SignIn__field SignIn__field--password"},ln=u("label",{for:"SignIn-password"},"Пароль",-1),un=["type"],dn=u("span",null,"Показать пароль",-1),vn=u("span",null,"Закрыть",-1),fn=D({__name:"SignIn",setup(n,{emit:e}){const t=()=>{e("close")},[a]=ht(),[o,s,r]=U(!1),[d,f,_]=U(!1),[S,w,F]=U(!1),y=K(Te.getMap()),P=K(),[R,H]=wt(t);$(()=>{P.value&&(R.value=P.value.querySelector("form"))});const ce=C=>{C.preventDefault(),r(),Xe(()=>{if(!R.value.reportValidity()){s();return}const T=new FormData(R.value),I={login:T.get("login"),password:T.get("password")};Te.patchMap(I),t()})},Q=C=>{C.button===_e.PRIMARY&&f()},V=()=>{_()};$(C=>{d.value&&(document.addEventListener("mouseup",V),C(()=>{document.removeEventListener("mouseup",V)}))});const X=C=>{C.key===Re.SPACE&&w()},j=()=>{F()};return $(C=>{S.value&&(document.addEventListener("keyup",j),C(()=>{document.removeEventListener("keyup",j)}))}),(C,T)=>{const I=be,g=re,i=qe("focus");return b(),m("div",{ref_key:"containerRef",ref:P,class:"SignIn",onMousedown:T[3]||(T[3]=(...c)=>v(H)&&v(H)(...c))},[A(v(Be),null,{default:L(()=>[u("form",{class:M([v(a)&&"bounce",v(o)&&"shake"]),onSubmit:T[2]||(T[2]=Fe(()=>{},["prevent"]))},[A(I,{isExtended:"",class:"SignIn__logo"}),u("div",rn,[sn,he(u("input",{id:"SignIn-login",type:"text",name:"login",autoComplete:"username",required:"","onUpdate:modelValue":T[0]||(T[0]=c=>v(y).login=c)},null,512),[[i],[We,v(y).login]])]),u("div",cn,[ln,he(u("input",{id:"SignIn-password",class:"SignIn__password-input",type:v(d)||v(S)?"text":"password",name:"password",autoComplete:"current-password",required:"","onUpdate:modelValue":T[1]||(T[1]=c=>v(y).password=c)},null,8,un),[[Qe,v(y).password]]),u("button",{type:"button",class:"SignIn__password-toggle-button",onMousedown:Q,onKeydown:X},[A(v(nn)),dn],32)]),u("button",{type:"submit",onClick:ce},"Войти"),A(g,{class:"SignIn__forgotten-password",to:("LocalPath"in C?C.LocalPath:v(k)).FORGOTTEN_PASSWORD,onClick:t},{default:L(()=>[Ce(" Забыли пароль? ")]),_:1},8,["to"]),u("button",{class:"SignIn__close-button",type:"button",onClick:t},[A(v(Xt)),vn])],34)]),_:1})],544)}}});const pn=()=>{const[n,e,t,a]=U(!1),o=()=>{window.innerWidth>=Ie.TABLET&&t()};return ie(()=>{window.addEventListener("resize",o)}),se(()=>{window.removeEventListener("resize",o)}),$(s=>{n.value&&(document.body.classList.add("page-body--mobile-modal"),s(()=>{document.body.classList.remove("page-body--mobile-modal")}))}),[n,e,t,a]},bn={width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_n=u("path",{d:"M0 1h16M0 6h16M0 11h16",stroke:"#1F1E25","stroke-linejoin":"round"},null,-1),hn=[_n];function gn(n,e){return b(),m("svg",bn,hn)}const mn={render:gn},wn={width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},yn=u("path",{d:"M1 1l6.5 6.5M14 14L7.5 7.5m0 0L14 1 1 14",stroke:"#011C40","stroke-width":"2"},null,-1),Nn=[yn];function Sn(n,e){return b(),m("svg",wn,Nn)}const An={render:Sn},Tn={class:"AppHeader__navigation"},En=u("span",{class:"visually-hidden"},"Открыть меню",-1),Cn=u("span",{class:"visually-hidden"},"Закрыть меню",-1),ua=D({__name:"AppHeader",setup(n){const[e,,t,a]=pn(),[o,s,r]=U(!1);return(d,f)=>{const _=be,S=ke,w=bt,F=fn;return b(),W(v(Be),{active:v(e)},{default:L(()=>[u("header",{class:M(["AppHeader",v(e)&&"active"])},[u("nav",Tn,[u("button",{class:"AppHeader__toggle-button",type:"button",onClick:f[0]||(f[0]=(...y)=>v(a)&&v(a)(...y))},[A(v(mn)),En]),A(_,{class:"AppHeader__logo"}),A(S,{isHeader:"",listClassName:"AppHeader__site-navigation-list",itemClassName:"AppHeader__site-navigation-item"}),A(w,{isActive:v(e),listClassName:"AppHeader__user-navigation-list",itemClassName:"AppHeader__user-navigation-item",onSignIn:v(s)},null,8,["isActive","onSignIn"]),u("button",{class:"AppHeader__close-button",type:"button",onClick:f[1]||(f[1]=(...y)=>v(t)&&v(t)(...y))},[A(v(An)),Cn])]),v(o)?(b(),W(F,{key:0,onClose:v(r)},null,8,["onClose"])):ee("",!0)],2)]),_:1},8,["active"])}}});const Fn={width:"9",height:"16",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},In=u("path",{d:"M6 9.2h2.143L9 6H6V4.4c0-.824 0-1.6 1.714-1.6H9V.112A25.85 25.85 0 006.551 0c-2.327 0-3.98 1.326-3.98 3.76V6H0v3.2h2.571V16H6V9.2z",fill:"#1F1E25"},null,-1),kn=[In];function Rn(n,e){return b(),m("svg",Fn,kn)}const On={render:Rn},Dn={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ln=u("path",{d:"M8 0c2.174 0 2.445.008 3.298.048.852.04 1.432.174 1.942.372a3.9 3.9 0 011.418.922c.406.4.721.884.922 1.418.198.51.332 1.09.372 1.942C15.99 5.555 16 5.826 16 8s-.008 2.445-.048 3.298c-.04.852-.174 1.432-.372 1.942a3.907 3.907 0 01-.922 1.418 3.94 3.94 0 01-1.418.922c-.51.198-1.09.332-1.942.372C10.445 15.99 10.174 16 8 16s-2.445-.008-3.298-.048c-.852-.04-1.432-.174-1.942-.372a3.911 3.911 0 01-1.418-.922A3.923 3.923 0 01.42 13.24c-.198-.51-.332-1.09-.372-1.942C.01 10.445 0 10.174 0 8s.008-2.445.048-3.298C.088 3.85.222 3.27.42 2.76c.2-.534.515-1.018.922-1.418.4-.407.884-.721 1.418-.922C3.27.222 3.85.088 4.702.048 5.555.01 5.826 0 8 0zm0 4a4 4 0 100 8 4 4 0 000-8zm5.2-.2a1 1 0 10-2 0 1 1 0 002 0zM8 5.6a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z",fill:"#1F1E25"},null,-1),Mn=[Ln];function xn(n,e){return b(),m("svg",Dn,Mn)}const Pn={render:xn},Bn={width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$n=u("path",{d:"M16 1.543c-.6.265-1.236.44-1.886.516A3.292 3.292 0 0015.558.244a6.564 6.564 0 01-2.085.796A3.283 3.283 0 007.88 4.032 9.325 9.325 0 011.114.604a3.28 3.28 0 001.016 4.38 3.273 3.273 0 01-1.487-.41v.04a3.281 3.281 0 002.633 3.218c-.484.13-.99.15-1.483.056a3.283 3.283 0 003.066 2.279A6.59 6.59 0 010 11.525 9.29 9.29 0 005.031 13c6.039 0 9.341-4.999 9.341-9.334 0-.141-.004-.284-.01-.424A6.667 6.667 0 0016 1.544z",fill:"#1F1E25"},null,-1),Un=[$n];function Kn(n,e){return b(),m("svg",Bn,Un)}const Hn={render:Kn},Vn={width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},jn=u("path",{d:"M15.634 2.03C16 3.478 16 6.5 16 6.5s0 3.023-.366 4.47c-.203.8-.797 1.43-1.55 1.643C12.717 13 8 13 8 13s-4.714 0-6.084-.387c-.756-.216-1.35-.845-1.55-1.643C0 9.523 0 6.5 0 6.5s0-3.022.366-4.47c.203-.8.797-1.43 1.55-1.643C3.286 0 8 0 8 0s4.717 0 6.084.387c.756.216 1.35.845 1.55 1.643zM6.4 9.344L11.2 6.5 6.4 3.656v5.688z",fill:"#1F1E25"},null,-1),zn=[jn];function Gn(n,e){return b(),m("svg",Vn,zn)}const Yn={render:Gn},qn={class:"SocialNavigation"},Wn=["href","aria-label"],Qn=D({__name:"SocialNavigation",setup(n){const e=[{ariaLabel:"Группа в Facebook.",iconComponent:On,externalLink:Y.FACEBOOK},{ariaLabel:"Аккаунт в Instagram.",iconComponent:Pn,externalLink:Y.INSTAGRAM},{ariaLabel:"Лента в Twitter.",iconComponent:Hn,externalLink:Y.TWITTER},{ariaLabel:"Канал на YouTube.",iconComponent:Yn,externalLink:Y.YOUTUBE}];return(t,a)=>(b(),m("ul",qn,[(b(),m(ve,null,Ee(e,o=>u("li",{key:o.externalLink,class:"SocialNavigation__item"},[u("a",{class:"SocialNavigation__link",href:o.externalLink,"aria-label":o.ariaLabel},[(b(),W(Je(o.iconComponent)))],8,Wn)])),64))]))}});const Xn={},Jn={class:"AppFooter"},Zn={class:"AppFooter__container"},ea={class:"AppFooter__left-column"},ta={class:"AppFooter__logo-container"},na=u("ul",{class:"AppFooter__information"},[u("li",null,"150015, г. Москва, ул. Московская, д. 32"),u("li",null,"Генеральная лицензия Банка России №1050"),u("li",null,"Ⓒ Лига Банк, 2019")],-1),aa={class:"AppFooter__right-column"},oa=u("a",{class:"AppFooter__phone AppFooter__phone--short-number",href:"tel:*0904"},[u("strong",null,"*0904"),u("span",null,"Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2")],-1),ra=u("a",{class:"AppFooter__phone AppFooter__phone--mobile-number AppFooter__phone--last",href:"tel:+78001112233"},[u("strong",null,"8 800 111 22 33"),u("span",null,"Бесплатный для всех городов России")],-1);function ia(n,e){const t=be,a=ke,o=Qn;return b(),m("footer",Jn,[u("div",Zn,[u("div",ea,[u("div",ta,[A(t,{class:"AppFooter__logo"}),na]),A(a,{isFooter:"",listClassName:"AppFooter__site-navigation-list",itemClassName:"AppFooter__site-navigation-item"})]),u("div",aa,[oa,ra,A(o)])])])}const da=Ze(Xn,[["render",ia]]);export{Be as F,Re as K,k as L,fe as M,Xt as P,ua as _,da as a,tt as b,_e as c,wt as d,U as u};
