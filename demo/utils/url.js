!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/thema/",n(n.s=82)}({82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseQueries=e=>window.location.search.replace("?","").split("&").reduce((t,n)=>{const[r,o]=n.split("=");return e.includes(r)?{...t,[r]:decodeURIComponent(o)}:t},{});const r=e=>new RegExp(`(&?${e})=([^&]+)`);t.upsertQuery=(e,t)=>{const n=new URL(window.location.href),o=decodeURIComponent(n.search);if(o.includes(e))return n.search=o.replace(r(e),`$1=${t}`),history.replaceState(null,"none",n.toString()),n.toString();const c=o.startsWith("?")?`&${encodeURIComponent(e)}=${encodeURIComponent(t)}`:`?${encodeURIComponent(e)}=${encodeURIComponent(t)}`;return n.search=o+c,history.replaceState(null,"none",n.toString()),n.toString()},t.removeQuery=e=>{const t=window.location.href.replace(r(e),"");history.replaceState(null,"none",t)}}});