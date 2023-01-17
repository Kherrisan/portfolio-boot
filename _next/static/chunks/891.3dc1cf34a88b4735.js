"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{2891:function(t,e,i){i.r(e),i.d(e,{GiscusWidget:function(){return tU}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(s&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}let l=t=>new o("string"==typeof t?t:t+"",void 0,r),h=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,r)},a=(t,e)=>{s?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})},d=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return l(e)})(t):t,c=window.trustedTypes,u=c?c.emptyScript:"",p=window.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},$=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(d(s))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s,r;let n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){let o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:_.toAttribute)(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i,s;let r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){let o=r.getPropertyOptions(n),l=o.converter,h=null!==(s=null!==(i=null==l?void 0:l.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==s?s:_.fromAttribute;this._$El=n,this[n]=h(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(tm=globalThis.reactiveElementVersions)&&void 0!==tm?tm:globalThis.reactiveElementVersions=[]).push("1.3.4");let f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,y="?"+A,S=`<${y}>`,E=document,b=(t="")=>E.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,U=t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,O=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,M=/"/g,R=/^(?:script|style|textarea|title)$/i,H=(t,...e)=>({_$litType$:1,strings:t,values:e}),k=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),L=new WeakMap,z=(t,e,i)=>{var s,r;let n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,o=n._$litPart$;if(void 0===o){let l=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new W(e.insertBefore(b(),l),l,void 0,null!=i?i:{})}return o._$AI(t),o},D=E.createTreeWalker(E,129,null,!1),Y=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=P;for(let l=0;l<i;l++){let h=t[l],a,d,c=-1,u=0;for(;u<h.length&&(o.lastIndex=u,null!==(d=o.exec(h)));)u=o.lastIndex,o===P?"!--"===d[1]?o=T:void 0!==d[1]?o=N:void 0!==d[2]?(R.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=O):void 0!==d[3]&&(o=O):o===O?">"===d[0]?(o=null!=r?r:P,c=-1):void 0===d[1]?c=-2:(c=o.lastIndex-d[2].length,a=d[1],o=void 0===d[3]?O:'"'===d[3]?M:I):o===M||o===I?o=O:o===T||o===N?o=P:(o=O,r=void 0);let p=o===O&&t[l+1].startsWith("/>")?" ":"";n+=o===P?h+S:c>=0?(s.push(a),h.slice(0,c)+"$lit$"+h.slice(c)+A+p):h+A+(-2===c?(s.push(void 0),l):p)}let _=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(_):_,s]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,l=this.parts,[h,a]=Y(t,e);if(this.el=j.createElement(h,i),D.currentNode=this.el.content,2===e){let d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;null!==(s=D.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){let u=[];for(let p of s.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(A)){let _=a[n++];if(u.push(p),void 0!==_){let $=s.getAttribute(_.toLowerCase()+"$lit$").split(A),v=/([.?@])?(.*)/.exec(_);l.push({type:1,index:r,name:v[2],strings:$,ctor:"."===v[1]?V:"?"===v[1]?J:"@"===v[1]?F:K})}else l.push({type:6,index:r})}for(let g of u)s.removeAttribute(g)}if(R.test(s.tagName)){let m=s.textContent.split(A),S=m.length-1;if(S>0){s.textContent=f?f.emptyScript:"";for(let E=0;E<S;E++)s.append(m[E],b()),D.nextNode(),l.push({type:2,index:++r});s.append(m[S],b())}}}else if(8===s.nodeType){if(s.data===y)l.push({type:2,index:r});else{let w=-1;for(;-1!==(w=s.data.indexOf(A,w+1));)l.push({type:7,index:r}),w+=A.length-1}}r++}}static createElement(t,e){let i=E.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var r,n,o,l;if(e===k)return e;let h=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu,a=w(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t))._$AT(t,i,s),void 0!==s?(null!==(o=(l=i)._$Cl)&&void 0!==o?o:l._$Cl=[])[s]=h:i._$Cu=h),void 0!==h&&(e=B(t,h._$AS(t,e.values),h,s)),e}class G{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);D.currentNode=r;let n=D.nextNode(),o=0,l=0,h=s[0];for(;void 0!==h;){if(o===h.index){let a;2===h.type?a=new W(n,n.nextSibling,this,t):1===h.type?a=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(a=new Q(n,this,t)),this.v.push(a),h=s[++l]}o!==(null==h?void 0:h.index)&&(n=D.nextNode(),o++)}return r}m(t){let e=0;for(let i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,s){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){w(t=B(this,t,e))?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==k&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):U(t)?this.S(t):this.T(t)}j(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==x&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(E.createTextNode(t)),this._$AH=t}$(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=j.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{let n=new G(r,this),o=n.p(this.options);n.m(i),this.k(o),this._$AH=n}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new j(t)),e}S(t){C(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new W(this.j(b()),this.j(b()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,s,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!w(t=B(this,t,e,0))||t!==this._$AH&&t!==k)&&(this._$AH=t);else{let o,l;let h=t;for(t=r[0],o=0;o<r.length-1;o++)(l=B(this,h[i+o],e,o))===k&&(l=this._$AH[o]),n||(n=!w(l)||l!==this._$AH[o]),l===x?t=x:t!==x&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}n&&!s&&this.P(t)}P(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends K{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===x?void 0:t}}let q=f?f.emptyScript:"";class J extends K{constructor(){super(...arguments),this.type=4}P(t){t&&t!==x?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class F extends K{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:x)===k)return;let s=this._$AH,r=t===x&&s!==x||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}let Z=window.litHtmlPolyfillSupport;null==Z||Z(j,W),(null!==(tA=globalThis.litHtmlVersions)&&void 0!==tA?tA:globalThis.litHtmlVersions=[]).push("2.2.7");class X extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=z(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return k}}X.finalized=!0,X._$litElement$=!0,null===(ty=globalThis.litElementHydrateSupport)||void 0===ty||ty.call(globalThis,{LitElement:X});let tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(tS=globalThis.litElementVersions)&&void 0!==tS?tS:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let te=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}};function ti(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):te(t,e)}null===(tE=window.HTMLSlotElement)||void 0===tE||tE.prototype.assignedElements;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ts=t=>void 0===t.strings,tr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};class tn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let to=(t,e)=>{var i,s;let r=t._$AN;if(void 0===r)return!1;for(let n of r)null===(s=(i=n)._$AO)||void 0===s||s.call(i,e,!1),to(n,e);return!0},tl=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while((null==i?void 0:i.size)===0)},th=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),tc(e)}};function ta(t){void 0!==this._$AN?(tl(this),this._$AM=t,th(this)):this._$AM=t}function td(t,e=!1,i=0){let s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(s))for(let n=i;n<s.length;n++)to(s[n],!1),tl(s[n]);else null!=s&&(to(s,!1),tl(s))}else to(this,t)}}let tc=t=>{var e,i,s,r;t.type==tr.CHILD&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=td),null!==(i=(r=t)._$AQ)&&void 0!==i||(r._$AQ=ta))};class tu extends tn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),th(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(to(this,t),tl(this))}setValue(t){if(ts(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tp=()=>new t_;class t_{}let t$=new WeakMap,tv=(tf=class extends tu{render(t){return x}update(t,[e]){var i;let s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(i=t.options)||void 0===i?void 0:i.host,this.rt(this.ct=t.element)),x}rt(t){var e;if("function"==typeof this.Y){let i=null!==(e=this.dt)&&void 0!==e?e:globalThis,s=t$.get(i);void 0===s&&(s=new WeakMap,t$.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.dt,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,i;return"function"==typeof this.Y?null===(e=t$.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(i=this.Y)||void 0===i?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},(...t)=>({_$litDirective$:tf,values:t}));var tg,tf,tm,tA,ty,tS,tE,tb=Object.defineProperty,tw=Object.getOwnPropertyDescriptor,tC=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?tw(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&tb(e,i,n),n};let tU=class extends X{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=tp(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){return this._iframeRef.value}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){let t=location.href,e=new URL(t),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")||"";if(s){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),history.replaceState(void 0,document.title,e.toString());return}if(i)try{this.__session=JSON.parse(i||"")||""}catch(r){this.__session="",localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==r?void 0:r.message)} Session has been cleared.`)}}handleMessageEvent(t){if(t.origin!==this.host)return;let{data:e}=t;if(!("object"==typeof e&&e.giscus)||(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),!e.giscus.error))return;let i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY)){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn(`${this._formatError(i)} Session has been cleared.`),this.update(new Map);return}console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(i.includes("Discussion not found")){console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e,i;null==(i=null==(e=this.iframeRef)?void 0:e.contentWindow)||i.postMessage({giscus:t},this.host)}updateConfig(){let t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}requestUpdate(t,e,i){if(!this.hasUpdated||"host"===t){super.requestUpdate(t,e,i);return}this.updateConfig()}getMetaContent(t,e=!1){let i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){let t=new URL(location.href);return t.searchParams.delete("giscus"),t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){let t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s},n=this.lang?`/${this.lang}`:"",o=new URLSearchParams(r);return`${this.host}${n}/widget?${o}`}render(){return H`
      <iframe
        title="Comments"
        scrolling="no"
        ${tv(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        part="iframe"
      ></iframe>
    `}};tU.styles=h`
    :host,
    iframe {
      width: 100%;
      border: none;
      color-scheme: normal;
      min-height: 150px;
    }
  `,tC([ti({reflect:!0})],tU.prototype,"host",2),tC([ti({reflect:!0})],tU.prototype,"repo",2),tC([ti({reflect:!0})],tU.prototype,"repoId",2),tC([ti({reflect:!0})],tU.prototype,"category",2),tC([ti({reflect:!0})],tU.prototype,"categoryId",2),tC([ti({reflect:!0})],tU.prototype,"mapping",2),tC([ti({reflect:!0})],tU.prototype,"term",2),tC([ti({reflect:!0})],tU.prototype,"strict",2),tC([ti({reflect:!0})],tU.prototype,"reactionsEnabled",2),tC([ti({reflect:!0})],tU.prototype,"emitMetadata",2),tC([ti({reflect:!0})],tU.prototype,"inputPosition",2),tC([ti({reflect:!0})],tU.prototype,"theme",2),tC([ti({reflect:!0})],tU.prototype,"lang",2),tC([ti({reflect:!0})],tU.prototype,"loading",2),tU=tC([(tg="giscus-widget",t=>"function"==typeof t?(window.customElements.define(tg,t),t):((t,e)=>{let{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(tg,t))],tU)}}]);