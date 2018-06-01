!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var o=(r=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),i=s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var r;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(s[i]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(e,t,n){var s=n(8);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){var s=n(9);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){var s=n(10);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){var s=n(11);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){var s=n(12);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){var s=n(17);e.exports="string"==typeof s?s:s.toString()},function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=(e=>e()==e())(()=>e=>e``),o=new Map,i=(new Map,(e,...t)=>r(e,t,o,!1));function r(e,t,n,o){const i=s?e:e.join("{{--uniqueness-workaround--}}");let r=n.get(i);return void 0===r&&(r=new f(e,o),n.set(i,r)),new a(r,t)}class a{constructor(e,t){this.template=e,this.values=t}}const l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,p=new RegExp(`${l}|${c}`),h=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function u(e){const t=e.lastIndexOf(">");return e.indexOf("<",t+1)>-1?e.length:t}class d{constructor(e,t,n,s,o){this.type=e,this.index=t,this.name=n,this.rawName=s,this.strings=o}}class f{constructor(e,t=!1){this.parts=[];const n=this.element=document.createElement("template");n.innerHTML=this._getHtml(e,t);const s=n.content;if(t){const e=s.firstChild;s.removeChild(e),w(s,e.firstChild)}const o=document.createTreeWalker(s,133,null,!1);let i=-1,r=0;const a=[];let c,u;for(;o.nextNode();){i++,c=u;const t=u=o.currentNode;if(1===t.nodeType){if(!t.hasAttributes())continue;const n=t.attributes;let s=0;for(let e=0;e<n.length;e++)n[e].value.indexOf(l)>=0&&s++;for(;s-- >0;){const s=e[r],o=h.exec(s)[1],a=n.getNamedItem(o),l=a.value.split(p);this.parts.push(new d("attribute",i,a.name,o,l)),t.removeAttribute(a.name),r+=l.length-1}}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(l)<0)continue;const n=t.parentNode,s=e.split(p),o=s.length-1;r+=o,t.textContent=s[o];for(let e=0;e<o;e++)n.insertBefore(document.createTextNode(s[e]),t),this.parts.push(new d("node",i++))}else if(8===t.nodeType&&t.nodeValue===l){const e=t.parentNode,n=t.previousSibling;null===n||n!==c||n.nodeType!==Node.TEXT_NODE?e.insertBefore(document.createTextNode(""),t):i--,this.parts.push(new d("node",i++)),a.push(t),null===t.nextSibling?e.insertBefore(document.createTextNode(""),t):i--,u=c,r++}}for(const e of a)e.parentNode.removeChild(e)}_getHtml(e,t){const n=e.length-1;let s="",o=!0;for(let t=0;t<n;t++){const n=e[t];s+=n;const i=u(n);s+=(o=i>-1?i<n.length:o)?c:l}return s+=e[n],t?`<svg>${s}</svg>`:s}}const m=(e,t)=>g(t)?(t=t(e),b):null===t?void 0:t,g=e=>"function"==typeof e&&!0===e.__litDirective,b={};class v{constructor(e,t,n,s){this.instance=e,this.element=t,this.name=n,this.strings=s,this.size=s.length-1}_interpolate(e,t){const n=this.strings,s=n.length-1;let o="";for(let i=0;i<s;i++){o+=n[i];const s=m(this,e[t+i]);if(s&&s!==b&&(Array.isArray(s)||"string"!=typeof s&&s[Symbol.iterator]))for(const e of s)o+=e;else o+=s}return o+n[s]}setValue(e,t){const n=this._interpolate(e,t);this.element.setAttribute(this.name,n)}}class x{constructor(e,t,n){this.instance=e,this.startNode=t,this.endNode=n,this._previousValue=void 0}setValue(e){if((e=m(this,e))!==b)if(null===e||"object"!=typeof e&&"function"!=typeof e){if(e===this._previousValue)return;this._setText(e)}else e instanceof a?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_setNode(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}_setText(e){const t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}_setTemplateResult(e){let t;this._previousValue&&this._previousValue.template===e.template?t=this._previousValue:(t=new _(e.template,this.instance._partCallback),this._setNode(t._clone()),this._previousValue=t),t.update(e.values)}_setIterable(e){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const t=this._previousValue;let n=0;for(const s of e){let e=t[n];if(void 0===e){let s=this.startNode;if(n>0){s=t[n-1].endNode=document.createTextNode(""),this._insert(s)}e=new x(this.instance,s,this.endNode),t.push(e)}e.setValue(s),n++}if(0===n)this.clear(),this._previousValue=void 0;else if(n<t.length){const e=t[n-1];t.length=n,this.clear(e.endNode.previousSibling),e.endNode=this.endNode}}_setPromise(e){this._previousValue=e,e.then(t=>{this._previousValue===e&&this.setValue(t)})}clear(e=this.startNode){k(this.startNode.parentNode,e.nextSibling,this.endNode)}}const y=(e,t,n)=>{if("attribute"===t.type)return new v(e,n,t.name,t.strings);if("node"===t.type)return new x(e,n,n.nextSibling);throw new Error(`Unknown part type ${t.type}`)};class _{constructor(e,t=y){this._parts=[],this.template=e,this._partCallback=t}update(e){let t=0;for(const n of this._parts)void 0===n.size?(n.setValue(e[t]),t++):(n.setValue(e,t),t+=n.size)}_clone(){const e=document.importNode(this.template.element.content,!0),t=this.template.parts;if(t.length>0){const n=document.createTreeWalker(e,133,null,!1);let s=-1;for(let e=0;e<t.length;e++){const o=t[e];for(;s<o.index;)s++,n.nextNode();this._parts.push(this._partCallback(this,o,n.currentNode))}}return e}}const w=(e,t,n=null,s=null)=>{let o=t;for(;o!==n;){const t=o.nextSibling;e.insertBefore(o,s),o=t}},k=(e,t,n=null)=>{let s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function N(e,t){!function(e,t,n=y){let s=t.__templateInstance;if(void 0!==s&&s.template===e.template&&s._partCallback===n)return void s.update(e.values);s=new _(e.template,n),t.__templateInstance=s;const o=s._clone();s.update(e.values),k(t,t.firstChild),t.appendChild(o)}(e,t,j)}const j=(e,t,n)=>{if("attribute"===t.type){if(t.rawName.startsWith("on-")){return new class{constructor(e,t,n){this.instance=e,this.element=t,this.eventName=n}setValue(e){const t=m(this,e),n=this._listener;t!==n&&(this._listener=t,null!=n&&this.element.removeEventListener(this.eventName,n),null!=t&&this.element.addEventListener(this.eventName,t))}}(e,n,t.rawName.slice(3))}if(t.name.endsWith("$")){const s=t.name.slice(0,-1);return new v(e,n,s,t.strings)}return new class extends v{setValue(e,t){const n=this.strings;let s;s=2===n.length&&""===n[0]&&""===n[1]?m(this,e[t]):this._interpolate(e,t),this.element[this.name]=s}}(e,n,t.rawName,t.strings)}return y(e,t,n)};function V(e,t,n){const{type:s,attrName:o}=n;function i(){return this.__values__[t]}Object.defineProperty(e,t,n.computed?{get:i}:{get:i,set:function(e){let n=null===e||void 0===e?e:s===Array?e:s(e);this._setPropertyValue(t,n),o&&this._setAttributeValue(o,n,s),this.invalidate()}})}class T extends HTMLElement{constructor(){super(),this._needsRender=!1,this._lookupCache={},this._attrMap={},this._deps={},this.__values__={},this.attachShadow({mode:"open"});for(const e in this.constructor.properties){const t=this.constructor.properties[e],{value:n,attrName:s,computed:o}=t;"string"==typeof s&&s.length&&(this._attrMap[s]=e),s||void 0===n||this._setPropertyValue(e,n);const i=/(\w+)\((.+)\)/.exec(o);if(i){const t=i[1],n=i[2].split(/,\s*/),s=()=>{const s=n.map(e=>this[e]);if(this[t]&&s.every(e=>void 0!==e)){const n=this[t].apply(this,s);this._setPropertyValue(e,n)}};for(const e of n)this._deps[e]?this._deps[e].push(s):this._deps[e]=[s];s()}}}_setPropertyValue(e,t){this.__values__[e]=t,this._deps[e]&&this._deps[e].map(e=>e())}_setPropertyValueFromAttributeValue(e,t){const n=this._attrMap[e],{type:s}=this.constructor.properties[n];let o;o="Boolean"===s.name?""===t||!!t&&t===e.toLowerCase():null!==t?s(t):void 0,this._setPropertyValue(n,o)}_setAttributeValue(e,t,n){"Boolean"===n.name?t?this.setAttribute(e,""):this.removeAttribute(e):this.setAttribute(e,t)}static get properties(){return{}}static get listeners(){return[]}static get observedAttributes(){return Object.keys(this.properties).map(e=>this.properties[e].attrName).filter(e=>e)}static withProperties(){for(const e in this.properties)V(this.prototype,e,this.properties[e]);return this}renderCallback(){N(this.render(this),this.shadowRoot)}render(e){return i``}attributeChangedCallback(e,t,n){this._setPropertyValueFromAttributeValue(e,n),this.invalidate()}connectedCallback(){for(const e of this.constructor.observedAttributes)this._setPropertyValueFromAttributeValue(e,this.getAttribute(e));this.invalidate().then(()=>{for(const e of this.constructor.listeners){("string"==typeof e.target?this.$(e.target):e.target).addEventListener(e.eventName,e.handler.bind(this))}})}async invalidate(){this._needsRender||(this._needsRender=!0,this._needsRender=await!1,this.renderCallback())}$(e){let t=this._lookupCache[e];if(!t&&this.shadowRoot){const n=this.shadowRoot.getElementById(e);n&&(t=n,this._lookupCache[e]=n)}return t}}var C=n(6),$=n.n(C);customElements.define("pe-social-links-bar",class extends T{render(){return i`
      <style>
        ${$.a}
      </style>
      
      <div>        

        <ul>
          <li class="github"><a href="https://github.com/ProjectEvergreen" class="github" target="_blank" rel="noopener"></a></li>
          <li class="twitter"><a href="https://twitter.com/PrjEvergreen" target="_blank" rel="noopener"></a></li>
          <li class="slack">
            <a href="https://join.slack.com/t/thegreenhouseio/shared_invite/enQtMzcyMzE2Mjk1MjgwLTFkNzY2NDQwOTg0MjRiYmY1ZDYyOGE1YzM0ZmQwNTgxZWI0NWU0YmYxZDhkNDQ3Y2Q3ODhjZTdiMTEwNzY5MTk" 
              target="_blank" rel="noopener"></a>
          </li>
        </ul>

      </div>
    `}});var E=n(5),P=n.n(E);customElements.define("pe-header",class extends T{render(){return i`
      <style>
        ${P.a}
      </style>
      
      <header>        

        <h2 class="header-text">
          <a href="https://github.com/ProjectEvergreen/project-evergreen/" target="_blank" rel="noopener">Project Evergreen</a>
        </h2>
        <pe-social-links-bar></pe-social-links-bar>
    
      </header>
    `}});var S=n(4),A=n.n(S);customElements.define("pe-footer",class extends T{render(){return i`
      <style>
        ${A.a}
      </style>
      
      <footer>     

        <pe-social-links-bar></pe-social-links-bar>
        <a href="https://projectevergreen.github.io/">&copy; Project Evergreen 2018</a>
        
      </footer>
    `}});const R={home:[{title:"Reduce",template:i`
      <p>By leveraging more of the the web's native capabilities, application's can become more consistent, portable, and maintainable.  Reducing external dependencies
      and being more "vanilla" can also provide passive improvements to performance and security.</p>
      <br/>
      <p><i>Favor polyfills over frameworks, but don't re-invent the wheel if you don't need to.</i></p>
    `},{title:"Reuse",template:i`
      <p>Component based development has become a widely adopted and pragmatic approach for modern web application development.</p>
      <br/>
      <p>Reuse as a principal encourages the use of native "Web" components that look a lot like the components you may already be used to seeing and writing.</p>
      <br/>
      <a href="https://jsfiddle.net/thegreenhouseio/qjj9hvv9/1/" target="_blank" rel="noopener">
        <img class="screenshot" src="https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/simple-component-example.jpg"/>
      </a>
    `},{title:"Recycle",template:i`<p>It should be clear, the JavaScript community and ecosystem is amazing and inspiring! There are so many wonderful tools and options out there, and that's what
      makes it so great. You pick and choose what you need when you need it.  In fact, this project wouldn't be possible without the amazing work of projects like
      <b>Polymer</b>, <b>Babel</b>, <b>postCSS</b>, and <b>webpack</b>. ❤️</p>
      <br/>
      <p>We don't believe in sacrificing developer experience at the expense of writing sustainable, modern web applications. ✌️</p>
    `}]};var I=class{static getContent(e){return R[e]?R[e]:[]}},M=n(3),O=n.n(M);customElements.define("pe-carousel",class extends T{constructor(){super(),this.slots=0,this.activeIndex=0}static get properties(){return{activeIndex:{type:Number,attrName:"activeIndex"},slots:{type:Number,attrName:"slots"}}}generateCarouselContent(){return new Array(this.slots).fill(null).map((e,t)=>i`
        <div class$="${t===this.activeIndex?"active-slot":"slot"}"><slot name$="slide${t+1}"></slot>
      `)}generateCarouselNavigation(){return new Array(this.slots).fill(null).map((e,t)=>i`
        <li class$="${t===this.activeIndex?"active-slot":"slot"}" onclick=${()=>this.setActiveIndex(t)}>o</li>
      `)}setActiveIndex(e){this.activeIndex=e}render(){return i`
      <style>
        ${O.a}
      </style>

      <div>
        ${this.generateCarouselContent()}

        <ul>
          ${this.generateCarouselNavigation()}
        </ul>
      </div>
    `}}.withProperties());var z=n(2),B=n.n(z);customElements.define("pe-home",class extends T{constructor(){super(),this.content=I.getContent("home")}generateSlotTemplate(e,t){return i`<div slot="slide${t+1}"><h3>${e.title}</h3> ${e.template}</div>`}render(){return i`
      <style>
        ${B.a}
      </style>

      <div id="view">
        <div class="content-banner">
          <p>The goal of <b class="project-name">Project Evergreen</b> is to provide detailed, accessible, and practical resources to those looking to build 
          modern, dynamic, performant, and <b><i>evergreen</i></b> web applications.</p>
          
          <br/>
          <br/>

          <span><i>With the rise of evergreen browsers, we see an opportunity for evergreen web applications, and we think that’s pretty cool!</i></span> 🤓
        </div>
       
        <div class="content-body">
          <pe-carousel slots$=${this.content.length}>
            ${this.content.map(this.generateSlotTemplate)}
          </pe-carousel>
        </div>

        <div class="content-banner">
          <p>The project's motivations are rooted in the fundamental belief that when applications are written with standards compliance in mind, we can maximize the <i>experience</i> for 
          users, developers, and businesses.</p>
        </div>

        <div class="content-footer">
          <h4><u>For more information:</u></h4>
          <p>Read <a href="https://github.com/ProjectEvergreen/project-evergreen/wiki" target="_blank" rel="noopener">our docs and how you can get started!</a><p>
          
          <p>Review our <a href="https://github.com/ProjectEvergreen/project-evergreen/milestones" target="_blank" rel="noopener">roadmap</a> and help contribute</a> to our project!</p>
          
          <p>For code and starter apps, checkout our <a href="https://github.com/ProjectEvergreen" target="_blank" rel="noopener">GitHub repos</a> which you can read, 
          tinker with, and try out yourself!</p>
        </div>
      <div>
    `}});var F=n(1),Y=n.n(F);customElements.define("pe-app",class extends T{render(){return i`
      <style>
        ${Y.a}
      </style>

      <div id="app-wrapper">

        <section>
          <pe-header></pe-header>
        </section>
        
        <section>
          <pe-home></pe-home>
        </section>

        <section>
          <pe-footer></pe-footer>
        </section>

      </div>
    `}})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"*{font-family:Raleway,sans-serif;font-size:1.2em;margin:0;padding:0}#app-wrapper{margin:0 auto;width:100%}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:0 auto}:host p{margin:0}:host .content-banner{margin:20px 0;padding:10px 20%;color:#efefef;background:-webkit-gradient(linear,left top,right bottom,from(#1d337a),to(#53585e));background:linear-gradient(to bottom right,#1d337a,#53585e)}:host .content-body{padding:10px 0 0;margin:0 auto;width:60%}:host .content-footer{width:60%;margin:20px auto;padding:10px 0 0}:host .content-footer p{margin:15px 0}:host img.screenshot{display:inline-block;width:100%}:host h4{margin:0}@media (max-width:420px){:host .content-body{width:90%}:host .content-banner{margin:5px;padding:5px}:host .content-footer{width:100%;padding:10px}}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{display:block;border:3px solid #1d337a;border-radius:10px;padding:20px;min-height:475px}:host ul{padding:0}:host li{cursor:pointer;list-style:none;display:inline-block;padding:10px;color:#020202;font-size:1.5em}:host li.active-slot{color:#168c37}:host li:hover{color:#168c37;font-weight:700;-webkit-transition:all .25s ease;transition:all .25s ease}:host div.slot{display:none}:host div.active-slot{display:block;-webkit-transition:all 3s ease;transition:all 3s ease}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin-bottom:20px;cursor:pointer}:host .header-text,:host a{margin:0 auto 10px;color:#168c37;text-decoration:underline}",""])},function(e,t,n){e.exports=n.p+"e743a220703942451eb04676f959b327.png"},function(e,t,n){e.exports=n.p+"3d74e8bfd4ef7985f7529bb9f7650eca.png"},function(e,t,n){e.exports=n.p+"812560560e98482df068cfc10f35c351.jpg"},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){var s=n(16);(e.exports=n(0)(!1)).push([e.i,":host ul{margin:0;padding:0}:host li{margin:0 10px;display:inline-block;list-style:none;background-size:cover}:host a{width:50px;height:50px;text-decoration:none;display:block}:host li.github{background-image:url("+s(n(15))+")}:host li.twitter{background-image:url("+s(n(14))+")}:host li.slack{background-image:url("+s(n(13))+")}",""])}]);