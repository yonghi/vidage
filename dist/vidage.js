!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Vidage=e()}(this,function(){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function j(){return n.Date.now()}var t="object"==typeof global&&global&&global.Object===Object&&global,e="object"==typeof self&&self&&self.Object===Object&&self,n=t||e||Function("return this")(),o=n.Symbol,i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=o?o.toStringTag:void 0;var l=Object.prototype.toString;var f="[object Null]",s="[object Undefined]",v=o?o.toStringTag:void 0;function p(t){return null==t?void 0===t?s:f:v&&v in Object(t)?function(t){var e=a.call(t,c),n=t[c];try{var r=!(t[c]=void 0)}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}(t):function(t){return l.call(t)}(t)}function d(t){return null!=t&&"object"==typeof t}var y="[object Symbol]";var b=NaN,h=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,O=/^0o[0-7]+$/i,A=parseInt;function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||d(t)&&p(t)==y}(t))return b;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(h,"");var n=w.test(t);return n||O.test(t)?A(t.slice(2),n?2:8):g.test(t)?b:+t}var T=Math.max,E=Math.min;function S(r,n,t){var o,i,a,u,c,l,f=0,s=!1,v=!1,e=!0;if("function"!=typeof r)throw new TypeError("Expected a function");function p(t){var e=o,n=i;return o=i=void 0,f=t,u=r.apply(n,e)}function d(t){var e=t-l;return void 0===l||n<=e||e<0||v&&a<=t-f}function y(){var t=j();if(d(t))return b(t);c=setTimeout(y,function(t){var e=n-(t-l);return v?E(e,a-(t-f)):e}(t))}function b(t){return c=void 0,e&&o?p(t):(o=i=void 0,u)}function h(){var t=j(),e=d(t);if(o=arguments,i=this,l=t,e){if(void 0===c)return function(t){return f=t,c=setTimeout(y,n),s?p(t):u}(l);if(v)return clearTimeout(c),c=setTimeout(y,n),p(l)}return void 0===c&&(c=setTimeout(y,n)),u}return n=x(n)||0,m(t)&&(s=!!t.leading,a=(v="maxWait"in t)?T(x(t.maxWait)||0,n):a,e="trailing"in t?!!t.trailing:e),h.cancel=function(){void 0!==c&&clearTimeout(c),o=l=i=c=void(f=0)},h.flush=function(){return void 0===c?u:b(j())},h}var _="[object AsyncFunction]",P="[object Function]",$="[object GeneratorFunction]",F="[object Proxy]";function C(t){if(!m(t))return!1;var e=p(t);return e==P||e==$||e==_||e==F}var M,k=n["__core-js_shared__"],D=(M=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var I=Function.prototype.toString;var N=/^\[object .+?Constructor\]$/,R=Function.prototype,U=Object.prototype,L=R.toString,q=U.hasOwnProperty,B=RegExp("^"+L.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function V(t){return!(!m(t)||function(t){return!!D&&D in t}(t))&&(C(t)?B:N).test(function(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function W(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return V(n)?n:void 0}var G=function(){try{var t=W(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();function z(t,e,n){"__proto__"==e&&G?G(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function H(t,e){return t===e||t!=t&&e!=e}var Y=Object.prototype.hasOwnProperty;function J(t,e,n){var r=t[e];Y.call(t,e)&&H(r,n)&&(void 0!==n||e in t)||z(t,e,n)}function K(t){return t}var Q=Math.max;function X(i,a,u){return a=Q(void 0===a?i.length-1:a,0),function(){for(var t=arguments,e=-1,n=Q(t.length-a,0),r=Array(n);++e<n;)r[e]=t[a+e];e=-1;for(var o=Array(a+1);++e<a;)o[e]=t[e];return o[a]=u(r),function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(i,this,o)}}var Z=G?function(t,e){return G(t,"toString",{configurable:!0,enumerable:!1,value:function(t){return function(){return t}}(e),writable:!0})}:K,tt=Date.now;var et,nt,rt,ot=(et=Z,rt=nt=0,function(){var t=tt(),e=16-(t-rt);if(rt=t,0<e){if(800<=++nt)return arguments[0]}else nt=0;return et.apply(void 0,arguments)});var it=9007199254740991;function at(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=it}function ut(t){return null!=t&&at(t.length)&&!C(t)}var ct=9007199254740991,lt=/^(?:0|[1-9]\d*)$/;function ft(t,e){var n=typeof t;return!!(e=null==e?ct:e)&&("number"==n||"symbol"!=n&&lt.test(t))&&-1<t&&t%1==0&&t<e}var st=Object.prototype;function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||st)}function pt(t){return d(t)&&"[object Arguments]"==p(t)}var dt=Object.prototype,yt=dt.hasOwnProperty,bt=dt.propertyIsEnumerable,ht=pt(function(){return arguments}())?pt:function(t){return d(t)&&yt.call(t,"callee")&&!bt.call(t,"callee")},mt=Array.isArray;var jt="object"==typeof exports&&exports&&!exports.nodeType&&exports,gt=jt&&"object"==typeof module&&module&&!module.nodeType&&module,wt=gt&&gt.exports===jt?n.Buffer:void 0,Ot=(wt?wt.isBuffer:void 0)||function(){return!1},At={};At["[object Float32Array]"]=At["[object Float64Array]"]=At["[object Int8Array]"]=At["[object Int16Array]"]=At["[object Int32Array]"]=At["[object Uint8Array]"]=At["[object Uint8ClampedArray]"]=At["[object Uint16Array]"]=At["[object Uint32Array]"]=!0,At["[object Arguments]"]=At["[object Array]"]=At["[object ArrayBuffer]"]=At["[object Boolean]"]=At["[object DataView]"]=At["[object Date]"]=At["[object Error]"]=At["[object Function]"]=At["[object Map]"]=At["[object Number]"]=At["[object Object]"]=At["[object RegExp]"]=At["[object Set]"]=At["[object String]"]=At["[object WeakMap]"]=!1;var xt,Tt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Et=Tt&&"object"==typeof module&&module&&!module.nodeType&&module,St=Et&&Et.exports===Tt&&t.process,_t=function(){try{var t=Et&&Et.require&&Et.require("util").types;return t||St&&St.binding&&St.binding("util")}catch(t){}}(),Pt=_t&&_t.isTypedArray,$t=Pt?(xt=Pt,function(t){return xt(t)}):function(t){return d(t)&&at(t.length)&&!!At[p(t)]},Ft=Object.prototype.hasOwnProperty;function Ct(t,e){var n=mt(t),r=!n&&ht(t),o=!n&&!r&&Ot(t),i=!n&&!r&&!o&&$t(t),a=n||r||o||i,u=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=u.length;for(var l in t)!e&&!Ft.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ft(l,c))||u.push(l);return u}var Mt,kt,Dt=(Mt=Object.keys,kt=Object,function(t){return Mt(kt(t))}),It=Object.prototype.hasOwnProperty;function Nt(t){return ut(t)?Ct(t):function(t){if(!vt(t))return Dt(t);var e=[];for(var n in Object(t))It.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}var Rt,Ut,Lt,qt=Object.prototype.hasOwnProperty,Bt=(Lt=function(t,e){if(vt(e)||ut(e))!function(t,e,n,r){var o=!n;n=n||{};for(var i=-1,a=e.length;++i<a;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),o?z(n,u,c):J(n,u,c)}}(e,Nt(e),t);else for(var n in e)qt.call(e,n)&&J(t,n,e[n])},ot(X(Rt=function(t,e){var n=-1,r=e.length,o=1<r?e[r-1]:void 0,i=2<r?e[2]:void 0;for(o=3<Lt.length&&"function"==typeof o?(r--,o):void 0,i&&function(t,e,n){if(!m(n))return!1;var r=typeof e;return!!("number"==r?ut(n)&&ft(e,n.length):"string"==r&&e in n)&&H(n[e],t)}(e[0],e[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++n<r;){var a=e[n];a&&Lt(t,a,n,o)}return t},Ut,K),Rt+""));var Vt=null,Wt={helperClass:"vidage-ready",videoRemoval:!1};return function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.options=Bt(Wt,e),this._name=this.constructor.name,this.element=function(t,e){if(void 0===t)throw new Error("".concat(e," requires a video selector as first argument."));if("video"!==(t="string"==typeof t?document.querySelector(t):t).nodeName.toLowerCase())throw new Error("".concat(e," requires a valid video selector. You passed a <").concat(t.nodeName,">"));return t}(t,this._name),this.init()}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(n,[{key:"init",value:function(){var t=this;this.element.readyState>=this.element.HAVE_FUTURE_DATA?this.handler():this.element.addEventListener("canplay",function(){t.handler()}),window.addEventListener("resize",S(function(){t.handler()}))}},{key:"handler",value:function(){var t=document.body;!function(){var t={touch:!!("ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch),ie:0<window.navigator.userAgent.indexOf("MSIE")||!!window.navigator.userAgent.match(/Trident.*rv\:11\./),small:window.matchMedia("(max-width: 34em)").matches};return t.touch&&!t.ie||t.small}()?(this.options.videoRemoval&&function(t){document.body.contains(t)||Vt.insertAdjacentElement("afterbegin",t)}(this.element),this.element.play(),t.classList.add(this.options.helperClass)):(this.element.pause(),this.options.videoRemoval&&function(t){null===Vt&&(Vt=t.parentNode),document.body.contains(t)&&Vt.removeChild(t)}(this.element),t.classList.remove(this.options.helperClass))}}]),n}()});
