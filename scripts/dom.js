!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1);let o=[],i=!1,l=!1;function c(){l||(l=!0,o.forEach(e=>e()),o=[],document.removeEventListener("DOMContentLoaded",c))}function u(...e){const[t,n]=1===e.length?[document,e[0]]:e.slice(0,2);return Array.from(t.querySelectorAll(r.semanticToAttributeSelectors(n)))}function a(e="div",...t){var n,r,o,i,l;if(/^\s*</.test(e)){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}const c=null!=(r=null===(n=/^[a-z0-9]+/i.exec(e))||void 0===n?void 0:n[0])?r:"div",u=null!=(o=e.match(/#([a-z]+[a-z0-9-]*)/gi))?o:[],a=null!=(i=e.match(/\.([a-z]+[a-z0-9-]*)/gi))?i:[],s=null!=(l=e.match(/\[([a-z][a-z-]+)(=['|"]?([^\]]*)['|"]?)?\]/gi))?l:[],f=document.createElement(c);return 1===u.length?f.id=u[0].slice(1):u.length>1&&console.warn("Got more than one id; ignoring all but first"),a.length>0&&f.setAttribute("class",a.map(e=>e.slice(1)).join(" ")),s.forEach(e=>{let[t,n]=e.slice(1,-1).split("=");void 0!==n&&(n=n.replace(/^['"](.*)['"]$/,"$1")),f.setAttribute(t,null!=n?n:"")}),t.forEach(e=>f.appendChild(e instanceof Element?e:document.createTextNode(`${e}`))),f}t.ready=function(e){l?setTimeout(e,1):(o.push(e),"complete"!==document.readyState?setTimeout(c,1):i||(document.addEventListener("DOMContentLoaded",c),i=!0))},t.select=u,t.create=a,t.before=function(e,t){const n=e.parentNode;null!==n&&n.insertBefore(t,e)},t.after=function(e,...t){const n=e.parentNode;null!==n&&t.reverse().forEach(t=>n.insertBefore(t,e.nextSibling))},t.replace=function(e,t){"string"==typeof e&&(e=u(e)[0]),"string"==typeof t&&(t=a(t));const n=e.parentNode;null!==n&&n.replaceChild(t,e)},t.wrap=function(...e){var t,n;const r=null!=(t=e.pop())?t:"div",o=e.pop();if(void 0===o)throw new Error("Required argument `target` is missing");const i=null!=(n=e.pop())?n:"body";u(document,i).forEach(e=>{const t=u(e,o);let n;if(r instanceof Element)n=r.cloneNode();else if("string"==typeof r)n=a(r);else{if("function"!=typeof r)throw new Error(`Unhandled wrapper type: ${typeof r}`);n=r(Array.from(t))}if(t.length>0){const e=t[0].parentNode;null!==e&&e.insertBefore(n,t[0])}t.forEach(e=>n.appendChild(e))})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.semanticToAttributeSelectors=function(e){return e.replace(/:--(\w+)/g,(e,t)=>`[${/^[A-Z]/.test(t)?"itemtype":"itemprop"}~='http://schema.org/${t}']`)}}]);