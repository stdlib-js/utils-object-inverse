// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[c]=t:delete r[c],n}:function(r){return o.call(r)};function l(r){return"[object Arguments]"===f(r)}var s=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(r){return"number"==typeof r}function d(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function b(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+d(o):d(o)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=b(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=b(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(r){return"string"==typeof r}var j=Math.abs,O=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,x=/\.0$/,P=/\.0*e/,A=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":j(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,A,"$1e"),t=E.call(t,P,"e"),t=E.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,_,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,k,"$1."),t=E.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===S.call(r.specifier)?S.call(t):O.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function L(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var N=String.fromCharCode,C=isNaN,$=Array.isArray;function W(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B(r){var e,t,n,o,i,a,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(m(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=W(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):N(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function X(r){var e,t,n,o;for(t=[],o=0,n=R.exec(r);n;)(e=r.slice(o,R.lastIndex-n[0].length)).length&&t.push(e),t.push(G(n)),o=R.lastIndex,n=R.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Z(r){return"string"==typeof r}function M(r){var e,t,n;if(!Z(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=X(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return B.apply(null,t)}var U,Y=Object.prototype,D=Y.toString,H=Y.__defineGetter__,z=Y.__defineSetter__,q=Y.__lookupGetter__,J=Y.__lookupSetter__;U=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(q.call(r,e)||J.call(r,e)?(n=r.__proto__,r.__proto__=Y,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,e,t.get),a&&z&&z.call(r,e,t.set),r};var K=U;function Q(r,e,t){K(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function rr(r){return"string"==typeof r}var er=String.prototype.valueOf;var tr=n();function nr(r){return"object"==typeof r&&(r instanceof String||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function or(r){return rr(r)||nr(r)}function ir(r){return"number"==typeof r}Q(or,"isPrimitive",rr),Q(or,"isObject",nr);var ar=Number,ur=ar.prototype.toString;var cr=n();function fr(r){return"object"==typeof r&&(r instanceof ar||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function lr(r){return ir(r)||fr(r)}function sr(r){return r!=r}function pr(r){return ir(r)&&sr(r)}function gr(r){return fr(r)&&sr(r.valueOf())}function yr(r){return pr(r)||gr(r)}Q(lr,"isPrimitive",ir),Q(lr,"isObject",fr),Q(yr,"isPrimitive",pr),Q(yr,"isObject",gr);var dr=Number.POSITIVE_INFINITY,br=ar.NEGATIVE_INFINITY,hr=Math.floor;function vr(r){return hr(r)===r}function wr(r){return r<dr&&r>br&&vr(r)}function mr(r){return ir(r)&&wr(r)}function jr(r){return fr(r)&&wr(r.valueOf())}function Or(r){return mr(r)||jr(r)}Q(Or,"isPrimitive",mr),Q(Or,"isObject",jr);var Sr=Object.prototype.propertyIsEnumerable;var Er=!Sr.call("beep","0");function _r(r,e){var t;return null!=r&&(!(t=Sr.call(r,e))&&Er&&or(r)?!pr(e=+e)&&mr(e)&&e>=0&&e<r.length:t)}var Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};var kr=s?l:function(r){return null!==r&&"object"==typeof r&&!Tr(r)&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!_r(r,"callee")},Ir=Array.prototype.slice;function xr(r){return null!==r&&"object"==typeof r}Q(xr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(xr));var Pr=_r((function(){}),"prototype"),Ar=!_r({toString:null},"toString");function Vr(r){return r!=r}function Fr(r){return ir(r)&&Vr(r)}function Lr(r){return fr(r)&&Vr(r.valueOf())}function Nr(r){return Fr(r)||Lr(r)}Q(Nr,"isPrimitive",Fr),Q(Nr,"isObject",Lr);function Cr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=9007199254740991}function $r(r){return"string"==typeof r}var Wr=String.prototype.valueOf;var Br=n();function Rr(r){return"object"==typeof r&&(r instanceof String||(Br?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function Gr(r){return $r(r)||Rr(r)}function Xr(r,e,t){var n,o;if(!Cr(r)&&!$r(r))throw new TypeError(M("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!mr(t))throw new TypeError(M("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Nr(e)){for(;o<n;o++)if(Nr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}Q(Gr,"isPrimitive",$r),Q(Gr,"isObject",Rr);var Zr=/./;function Mr(r){return"boolean"==typeof r}var Ur=Boolean,Yr=Boolean.prototype.toString;var Dr=n();function Hr(r){return"object"==typeof r&&(r instanceof Ur||(Dr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function zr(r){return Mr(r)||Hr(r)}function qr(){return new Function("return this;")()}Q(zr,"isPrimitive",Mr),Q(zr,"isObject",Hr);var Jr="object"==typeof self?self:null,Kr="object"==typeof window?window:null,Qr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},re="object"==typeof Qr?Qr:null,ee="object"==typeof globalThis?globalThis:null;var te=function(r){if(arguments.length){if(!Mr(r))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return qr()}if(ee)return ee;if(Jr)return Jr;if(Kr)return Kr;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,oe=Int8Array;function ie(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;function ue(r){var e,t,n,o;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ae.exec(n.toString()))return e[1]}return xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Q(ie,"REGEXP",ae);var ce="function"==typeof Zr||"object"==typeof oe||"function"==typeof ne?function(r){return ue(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ue(r).toLowerCase():e};function fe(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],se="undefined"==typeof window?void 0:window;var pe=function(){var r;if("undefined"===ce(se))return!1;for(r in se)try{-1===Xr(le,r)&&a(se,r)&&null!==se[r]&&"object"===ce(se[r])&&fe(se[r])}catch(r){return!0}return!1}(),ge="undefined"!=typeof window;var ye=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var de=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return kr(e)?r(Ir.call(e)):r(e)}:r:function(r){var e,t,n,o,i,u,c;if(o=[],kr(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!xr(r))return o;t=Pr&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(Ar)for(e=function(r){if(!1===ge&&!pe)return fe(r);try{return fe(r)}catch(r){return!1}}(r),c=0;c<ye.length;c++)u=ye[c],e&&"constructor"===u||!a(r,u)||o.push(String(u));return o};function be(r){return"function"===ce(r)}var he,ve=Object,we=Object.getPrototypeOf;he=be(Object.getPrototypeOf)?we:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===f(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var me=he;var je=Object.prototype;function Oe(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Tr(r)}(r)&&(e=function(r){return null==r?null:(r=ve(r),me(r))}(r),!e||!a(r,"constructor")&&a(e,"constructor")&&be(e.constructor)&&"[object Function]"===f(e.constructor)&&a(e,"isPrototypeOf")&&be(e.isPrototypeOf)&&(e===je||function(r){var e;for(e in r)if(!a(r,e))return!1;return!0}(r)))}function Se(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Ee(r,e){var t,n,o,i,u,c,f,l=!0;if(!xr(r))throw new TypeError(Se("1WLOm",r));if(arguments.length>1){if(!Oe(e))throw new TypeError(Se("1WL2V,FD",e));if(a(e,"duplicates")&&!Mr(l=e.duplicates))throw new TypeError(Se("1WL2o,GE","duplicates",l))}if(n=(t=de(r)).length,u={},l)for(f=0;f<n;f++)a(u,i=r[o=t[f]])?(c=u[i],Tr(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(f=0;f<n;f++)u[r[o=t[f]]]=o;return u}export{Ee as default};
//# sourceMappingURL=mod.js.map