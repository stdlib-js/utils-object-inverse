// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).invert=e()}(this,(function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f,l=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[c]=t:delete r[c],n}:function(r){return o.call(r)};function s(r){return"[object Arguments]"===l(r)}f=function(){return s(arguments)}();var p=f,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function b(r){return"number"==typeof r}function d(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function h(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+d(o):d(o)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!b(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=h(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=h(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,O=String.prototype.toLowerCase,E=String.prototype.toUpperCase,S=String.prototype.replace,_=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,x=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!b(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":j(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=S.call(t,V,"$1e"),t=S.call(t,P,"e"),t=S.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=S.call(t,_,"e+0$1"),t=S.call(t,T,"e-0$1"),r.alternate&&(t=S.call(t,k,"$1."),t=S.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):O.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var L=String.fromCharCode,N=isNaN,C=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function W(r){var e,t,n,o,i,a,u,c,f,l,s,p,g;if(!C(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(i)?String(n.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+F(g):F(g)+l)),a+=n.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,o;for(t=[],o=0,n=B.exec(r);n;)(e=r.slice(o,B.lastIndex-n[0].length)).length&&t.push(e),t.push(R(n)),o=B.lastIndex,n=B.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function X(r){var e,t;if("string"!=typeof r)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[G(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return W.apply(null,e)}var Z,M=Object.prototype,U=M.toString,Y=M.__defineGetter__,H=M.__defineSetter__,z=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?y:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(z.call(r,e)||D.call(r,e)?(n=r.__proto__,r.__proto__=M,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Y&&Y.call(r,e,t.get),a&&H&&H.call(r,e,t.set),r};var q=Z;function J(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(r){return"string"==typeof r}var Q=String.prototype.valueOf;var rr=n();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function tr(r){return K(r)||er(r)}function nr(r){return"number"==typeof r}J(tr,"isPrimitive",K),J(tr,"isObject",er);var or=Number,ir=or.prototype.toString;var ar=n();function ur(r){return"object"==typeof r&&(r instanceof or||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function cr(r){return nr(r)||ur(r)}function fr(r){return r!=r}function lr(r){return nr(r)&&fr(r)}function sr(r){return ur(r)&&fr(r.valueOf())}function pr(r){return lr(r)||sr(r)}J(cr,"isPrimitive",nr),J(cr,"isObject",ur),J(pr,"isPrimitive",lr),J(pr,"isObject",sr);var gr=Number.POSITIVE_INFINITY,yr=or.NEGATIVE_INFINITY,br=Math.floor;function dr(r){return br(r)===r}function hr(r){return r<gr&&r>yr&&dr(r)}function vr(r){return nr(r)&&hr(r)}function wr(r){return ur(r)&&hr(r.valueOf())}function mr(r){return vr(r)||wr(r)}J(mr,"isPrimitive",vr),J(mr,"isObject",wr);var jr=Object.prototype.propertyIsEnumerable;var Or=!jr.call("beep","0");var Er,Sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};Er=p?s:function(r){return null!==r&&"object"==typeof r&&!Sr(r)&&"number"==typeof r.length&&dr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=jr.call(r,e))&&Or&&tr(r)?!lr(e=+e)&&vr(e)&&e>=0&&e<r.length:t)}(r,"callee")};var _r=Er,Tr=Array.prototype.slice;function kr(r){return null!==r&&"object"==typeof r}function Ir(r){return r!=r}function xr(r){return nr(r)&&Ir(r)}function Pr(r){return ur(r)&&Ir(r.valueOf())}function Vr(r){return xr(r)||Pr(r)}J(kr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(kr)),J(Vr,"isPrimitive",xr),J(Vr,"isObject",Pr);var Ar=Object.prototype.propertyIsEnumerable;var Fr=!Ar.call("beep","0");function Lr(r,e){var t;return null!=r&&(!(t=Ar.call(r,e))&&Fr&&tr(r)?!xr(e=+e)&&vr(e)&&e>=0&&e<r.length:t)}var Nr=Lr((function(){}),"prototype"),Cr=!Lr({toString:null},"toString");function $r(r){return r!=r}function Wr(r){return nr(r)&&$r(r)}function Br(r){return ur(r)&&$r(r.valueOf())}function Rr(r){return Wr(r)||Br(r)}J(Rr,"isPrimitive",Wr),J(Rr,"isObject",Br);var Gr=9007199254740991;function Xr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&dr(i.length)&&i.length>=0&&i.length<=Gr||K(r)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!vr(t))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Rr(e)){for(;o<n;o++)if(Rr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Zr=/./;function Mr(r){return"boolean"==typeof r}var Ur=Boolean,Yr=Boolean.prototype.toString;var Hr=n();function zr(r){return"object"==typeof r&&(r instanceof Ur||(Hr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function Dr(r){return Mr(r)||zr(r)}J(Dr,"isPrimitive",Mr),J(Dr,"isObject",zr);var qr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="object"==typeof global?global:null,Qr="object"==typeof globalThis?globalThis:null;var re=function(r){if(arguments.length){if(!Mr(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Qr)return Qr;if(qr)return qr;if(Jr)return Jr;if(Kr)return Kr;throw new Error("unexpected error. Unable to resolve global object.")}(),ee=re.document&&re.document.childNodes,te=Int8Array;function ne(){return/^\s*function\s*([^(]*)/i}var oe=/^\s*function\s*([^(]*)/i;function ie(r){var e,t,n,o;if(("Object"===(t=l(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=oe.exec(n.toString()))return e[1]}return kr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}J(ne,"REGEXP",oe);var ae="function"==typeof Zr||"object"==typeof te||"function"==typeof ee?function(r){return ie(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ie(r).toLowerCase():e};function ue(r){return r.constructor&&r.constructor.prototype===r}var ce=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],fe="undefined"==typeof window?void 0:window;var le=function(){var r;if("undefined"===ae(fe))return!1;for(r in fe)try{-1===Xr(ce,r)&&a(fe,r)&&null!==fe[r]&&"object"===ae(fe[r])&&ue(fe[r])}catch(r){return!0}return!1}(),se="undefined"!=typeof window;var pe,ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];pe=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return _r(e)?r(Tr.call(e)):r(e)}:r:function(r){var e,t,n,o,i,u,c;if(o=[],_r(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!kr(r))return o;t=Nr&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(Cr)for(e=function(r){if(!1===se&&!le)return ue(r);try{return ue(r)}catch(r){return!1}}(r),c=0;c<ge.length;c++)u=ge[c],e&&"constructor"===u||!a(r,u)||o.push(String(u));return o};var ye=pe;function be(r){return"function"===ae(r)}var de,he=Object,ve=Object.getPrototypeOf;de=be(Object.getPrototypeOf)?ve:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===l(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var we=de;var me=Object.prototype;function je(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Sr(r)}(r)&&(e=function(r){return null==r?null:(r=he(r),we(r))}(r),!e||!a(r,"constructor")&&a(e,"constructor")&&be(e.constructor)&&"[object Function]"===l(e.constructor)&&a(e,"isPrototypeOf")&&be(e.isPrototypeOf)&&(e===me||function(r){var e;for(e in r)if(!a(r,e))return!1;return!0}(r)))}function Oe(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return function(r,e){var t,n,o,i,u,c,f,l=!0;if(!kr(r))throw new TypeError(Oe("1WLES",r));if(arguments.length>1){if(!je(e))throw new TypeError(Oe("1WL2V",e));if(a(e,"duplicates")&&!Mr(l=e.duplicates))throw new TypeError(Oe("1WL2o","duplicates",l))}if(n=(t=ye(r)).length,u={},l)for(f=0;f<n;f++)a(u,i=r[o=t[f]])?(c=u[i],Sr(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(f=0;f<n;f++)u[r[o=t[f]]]=o;return u}}));
//# sourceMappingURL=index.js.map
