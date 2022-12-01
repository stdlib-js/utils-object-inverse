// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).invert=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&u.call(t,r)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var f,l=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[c],r=i(t,c);try{t[c]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[c]=e:delete t[c],n}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}f=function(){return a(arguments)}();var p=f,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,b=Object.defineProperty,v=Object.prototype,g=v.toString,d=v.__defineGetter__,h=v.__defineSetter__,j=v.__lookupGetter__,m=v.__lookupSetter__;y=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?b:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(j.call(t,r)||m.call(t,r)?(n=t.__proto__,t.__proto__=v,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&d&&d.call(t,r,e.get),i&&h&&h.call(t,r,e.set),t};var w=y;function O(t,r,e){w(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var S=String.prototype.valueOf;var E=n();function P(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function T(t){return _(t)||P(t)}function I(t){return"number"==typeof t}O(T,"isPrimitive",_),O(T,"isObject",P);var A=Number,x=A.prototype.toString;var N=n();function V(t){return"object"==typeof t&&(t instanceof A||(N?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function k(t){return I(t)||V(t)}function B(t){return t!=t}function F(t){return I(t)&&B(t)}function L(t){return V(t)&&B(t.valueOf())}function C(t){return F(t)||L(t)}O(k,"isPrimitive",I),O(k,"isObject",V),O(C,"isPrimitive",F),O(C,"isObject",L);var G=Number.POSITIVE_INFINITY,Y=A.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<G&&t>Y&&X(t)}function R(t){return I(t)&&H(t)}function U(t){return V(t)&&H(t.valueOf())}function W(t){return R(t)||U(t)}O(W,"isPrimitive",R),O(W,"isObject",U);var D=Object.prototype.propertyIsEnumerable;var q=!D.call("beep","0");function z(t,r){var e;return null!=t&&(!(e=D.call(t,r))&&q&&T(t)?!F(r=+r)&&R(r)&&r>=0&&r<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&i(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}O(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!J(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,r,e){var n,o;if(!rt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!R(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(C(r)){for(;o<n;o++)if(C(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var nt=/./;function ot(t){return"boolean"==typeof t}var ut=Boolean.prototype.toString;var it=n();function ct(t){return"object"==typeof t&&(t instanceof Boolean||(it?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ft(t){return ot(t)||ct(t)}function lt(){return new Function("return this;")()}O(ft,"isPrimitive",ot),O(ft,"isObject",ct);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="object"==typeof global?global:null;var yt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=yt.document&&yt.document.childNodes,vt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function ht(t){var r,e,n,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}O(gt,"REGEXP",dt);var jt="function"==typeof nt||"object"==typeof vt||"function"==typeof bt?function(t){return ht(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ht(t).toLowerCase():r};function mt(t){return t.constructor&&t.constructor.prototype===t}var wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ot="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===jt(Ot))return!1;for(t in Ot)try{-1===et(wt,t)&&i(Ot,t)&&null!==Ot[t]&&"object"===jt(Ot[t])&&mt(Ot[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Et,Pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Et=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return K(r)?t(Q.call(r)):t(r)}:t:function(t){var r,e,n,o,u,c,f;if(o=[],K(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!i(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!Z(t))return o;e=$&&n}for(u in t)e&&"prototype"===u||!i(t,u)||o.push(String(u));if(tt)for(r=function(t){if(!1===St&&!_t)return mt(t);try{return mt(t)}catch(t){return!1}}(t),f=0;f<Pt.length;f++)c=Pt[f],r&&"constructor"===c||!i(t,c)||o.push(String(c));return o};var Tt=Et;function It(t){return"function"===jt(t)}var At,xt=Object.getPrototypeOf;At=It(Object.getPrototypeOf)?xt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Nt=At;var Vt=Object.prototype;function kt(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Nt(t))}(t),!r||!i(t,"constructor")&&i(r,"constructor")&&It(r.constructor)&&"[object Function]"===l(r.constructor)&&i(r,"isPrototypeOf")&&It(r.isPrototypeOf)&&(r===Vt||function(t){var r;for(r in t)if(!i(t,r))return!1;return!0}(t)))}function Bt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r){var e,n,o,u,c,f,l,a=!0;if(!Z(t))throw new TypeError(Bt("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!kt(r))throw new TypeError(Bt("0l12h",r));if(i(r,"duplicates")&&!ot(a=r.duplicates))throw new TypeError(Bt("0l130","duplicates",a))}if(n=(e=Tt(t)).length,c={},a)for(l=0;l<n;l++)i(c,u=t[o=e[l]])?(f=c[u],J(f)?c[u].push(o):c[u]=[f,o]):c[u]=o;else for(l=0;l<n;l++)c[t[o=e[l]]]=o;return c}}));
//# sourceMappingURL=index.js.map
