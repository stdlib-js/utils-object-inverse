// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var f=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[u],e=a(r,u);try{r[u]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[u]=t:delete r[u],n}:function(r){return o.call(r)};function l(r){return"[object Arguments]"===f(r)}var s=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function d(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function h(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(o):y(o)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=h(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=h(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var m=Math.abs,j=String.prototype.toLowerCase,O=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,x=/\.0*e/,P=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":m(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=S.call(t,P,"$1e"),t=S.call(t,x,"e"),t=S.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=S.call(t,E,"e+0$1"),t=S.call(t,_,"e-0$1"),r.alternate&&(t=S.call(t,T,"$1."),t=S.call(t,k,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===O.call(r.specifier)?O.call(t):j.call(t)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var F=String.fromCharCode,L=Array.isArray;function C(r){return r!=r}function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,o,i,a,c,u,f,l,s,p,g;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,C(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):F(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+A(g):A(g)+l)),a+=n.arg||"",c+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,o;for(t=[],o=0,n=W.exec(r);n;)(e=r.slice(o,W.lastIndex-n[0].length)).length&&t.push(e),t.push(B(n)),o=W.lastIndex,n=W.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function G(r){var e,t;if("string"!=typeof r)throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[R(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var X,Z=Object.prototype,M=Z.toString,U=Z.__defineGetter__,Y=Z.__defineSetter__,H=Z.__lookupGetter__,z=Z.__lookupSetter__;X=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=Z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&U&&U.call(r,e,t.get),a&&Y&&Y.call(r,e,t.set),r};var D=X;function q(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(r){return"string"==typeof r}var K=String.prototype.valueOf;var Q=n();function rr(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function er(r){return J(r)||rr(r)}function tr(r){return"number"==typeof r}q(er,"isPrimitive",J),q(er,"isObject",rr);var nr=Number,or=nr.prototype.toString;var ir=n();function ar(r){return"object"==typeof r&&(r instanceof nr||(ir?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function cr(r){return tr(r)||ar(r)}function ur(r){return r!=r}function fr(r){return tr(r)&&ur(r)}function lr(r){return ar(r)&&ur(r.valueOf())}function sr(r){return fr(r)||lr(r)}q(cr,"isPrimitive",tr),q(cr,"isObject",ar),q(sr,"isPrimitive",fr),q(sr,"isObject",lr);var pr=Number.POSITIVE_INFINITY,gr=nr.NEGATIVE_INFINITY,dr=Math.floor;function yr(r){return dr(r)===r}function hr(r){return r<pr&&r>gr&&yr(r)}function br(r){return tr(r)&&hr(r)}function vr(r){return ar(r)&&hr(r.valueOf())}function wr(r){return br(r)||vr(r)}q(wr,"isPrimitive",br),q(wr,"isObject",vr);var mr=Object.prototype.propertyIsEnumerable;var jr=!mr.call("beep","0");function Or(r,e){var t;return null!=r&&(!(t=mr.call(r,e))&&jr&&er(r)?!fr(e=+e)&&br(e)&&e>=0&&e<r.length:t)}var Sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};var Er=s?l:function(r){return null!==r&&"object"==typeof r&&!Sr(r)&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Or(r,"callee")},_r=Array.prototype.slice;function Tr(r){return null!==r&&"object"==typeof r}q(Tr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tr));var kr=Or((function(){}),"prototype"),Ir=!Or({toString:null},"toString"),xr=9007199254740991;function Pr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&yr(i.length)&&i.length>=0&&i.length<=xr||J(r)))throw new TypeError(G("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!br(t))throw new TypeError(G("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(sr(e)){for(;o<n;o++)if(sr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Vr=/./;function Ar(r){return"boolean"==typeof r}var Fr=Boolean,Lr=Boolean.prototype.toString;var Cr=n();function $r(r){return"object"==typeof r&&(r instanceof Fr||(Cr?function(r){try{return Lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function Nr(r){return Ar(r)||$r(r)}q(Nr,"isPrimitive",Ar),q(Nr,"isObject",$r);var Wr="object"==typeof self?self:null,Br="object"==typeof window?window:null,Rr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Gr="object"==typeof Rr?Rr:null,Xr="object"==typeof globalThis?globalThis:null;var Zr=function(r){if(arguments.length){if(!Ar(r))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Xr)return Xr;if(Wr)return Wr;if(Br)return Br;if(Gr)return Gr;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Zr.document&&Zr.document.childNodes,Ur=Int8Array;function Yr(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function zr(r){var e,t,n,o;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Hr.exec(n.toString()))return e[1]}return Tr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}q(Yr,"REGEXP",Hr);var Dr="function"==typeof Vr||"object"==typeof Ur||"function"==typeof Mr?function(r){return zr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?zr(r).toLowerCase():e};function qr(r){return r.constructor&&r.constructor.prototype===r}var Jr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kr="undefined"==typeof window?void 0:window;var Qr=function(){var r;if("undefined"===Dr(Kr))return!1;for(r in Kr)try{-1===Pr(Jr,r)&&a(Kr,r)&&null!==Kr[r]&&"object"===Dr(Kr[r])&&qr(Kr[r])}catch(r){return!0}return!1}(),re="undefined"!=typeof window;var ee=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var te=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return Er(e)?r(_r.call(e)):r(e)}:r:function(r){var e,t,n,o,i,c,u;if(o=[],Er(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Tr(r))return o;t=kr&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(Ir)for(e=function(r){if(!1===re&&!Qr)return qr(r);try{return qr(r)}catch(r){return!1}}(r),u=0;u<ee.length;u++)c=ee[u],e&&"constructor"===c||!a(r,c)||o.push(String(c));return o};function ne(r){return"function"===Dr(r)}var oe,ie=Object,ae=Object.getPrototypeOf;oe=ne(Object.getPrototypeOf)?ae:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===f(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ce=oe;var ue=Object.prototype;function fe(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Sr(r)}(r)&&(e=function(r){return null==r?null:(r=ie(r),ce(r))}(r),!e||!a(r,"constructor")&&a(e,"constructor")&&ne(e.constructor)&&"[object Function]"===f(e.constructor)&&a(e,"isPrototypeOf")&&ne(e.isPrototypeOf)&&(e===ue||function(r){var e;for(e in r)if(!a(r,e))return!1;return!0}(r)))}function le(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function se(r,e){var t,n,o,i,c,u,f,l=!0;if(!Tr(r))throw new TypeError(le("1WLES",r));if(arguments.length>1){if(!fe(e))throw new TypeError(le("1WL2V",e));if(a(e,"duplicates")&&!Ar(l=e.duplicates))throw new TypeError(le("1WL2o","duplicates",l))}if(n=(t=te(r)).length,c={},l)for(f=0;f<n;f++)a(c,i=r[o=t[f]])?(u=c[i],Sr(u)?c[i].push(o):c[i]=[u,o]):c[i]=o;else for(f=0;f<n;f++)c[r[o=t[f]]]=o;return c}export{se as default};
//# sourceMappingURL=mod.js.map
