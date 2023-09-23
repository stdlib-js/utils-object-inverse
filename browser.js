// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(r){return Object.keys(Object(r))}var t=void 0!==Object.keys,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,i=Object.prototype.hasOwnProperty;function u(r,t){return null!=r&&i.call(r,t)}var a,c="function"==typeof Symbol?Symbol:void 0,f="function"==typeof c?c.toStringTag:"",l=n()?function(r){var t,e,n;if(null==r)return o.call(r);e=r[f],t=u(r,f);try{r[f]=void 0}catch(t){return o.call(r)}return n=o.call(r),t?r[f]=e:delete r[f],n}:function(r){return o.call(r)};function s(r){return"[object Arguments]"===l(r)}a=function(){return s(arguments)}();var p=a,g="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty;function b(r){return"number"==typeof r}function h(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function d(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+h(o):h(o)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!b(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=d(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=d(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===w.call(r.specifier)?w.call(e):v.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function j(r){return"string"==typeof r}var O=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,I=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,P=/^(\d+)e/,x=/\.0$/,V=/\.0*e/,A=/(\..*[^0])0*e/;function N(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!b(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":O(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=_.call(e,A,"$1e"),e=_.call(e,V,"e"),e=_.call(e,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=_.call(e,I,"e+0$1"),e=_.call(e,T,"e-0$1"),r.alternate&&(e=_.call(e,k,"$1."),e=_.call(e,P,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===E.call(r.specifier)?E.call(e):S.call(e)}function F(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function L(r,t,e){var n=t-r.length;return n<0?r:r=e?r+F(n):F(n)+r}var C=String.fromCharCode,$=isNaN,W=Array.isArray;function B(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function G(r){var t,e,n,o,i,u,a,c,f;if(!W(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",a=1,c=0;c<r.length;c++)if(j(n=r[c]))u+=n;else{if(t=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(a=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[a],10),a+=1,$(n.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[a],10),a+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[a],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!$(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(i)?String(n.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),u+=n.arg||"",a+=1}return u}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Y(r){var t,e,n,o;for(e=[],o=0,n=R.exec(r);n;)(t=r.slice(o,R.lastIndex-n[0].length)).length&&e.push(t),e.push(M(n)),o=R.lastIndex,n=R.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function X(r){return"string"==typeof r}function Z(r){var t,e,n;if(!X(r))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=Y(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return G.apply(null,e)}var U,D=Object.prototype,H=D.toString,z=D.__defineGetter__,q=D.__defineSetter__,J=D.__lookupGetter__,K=D.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?y:function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===H.call(e))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(J.call(r,t)||K.call(r,t)?(n=r.__proto__,r.__proto__=D,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(r,t,e.get),u&&q&&q.call(r,t,e.set),r};var Q=U;function rr(r,t,e){Q(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function tr(r){return"string"==typeof r}var er=String.prototype.valueOf,nr=n();function or(r){return"object"==typeof r&&(r instanceof String||(nr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function ir(r){return tr(r)||or(r)}function ur(r){return"number"==typeof r}rr(ir,"isPrimitive",tr),rr(ir,"isObject",or);var ar=Number,cr=ar.prototype.toString,fr=n();function lr(r){return"object"==typeof r&&(r instanceof ar||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function sr(r){return ur(r)||lr(r)}function pr(r){return r!=r}function gr(r){return ur(r)&&pr(r)}function yr(r){return lr(r)&&pr(r.valueOf())}function br(r){return gr(r)||yr(r)}rr(sr,"isPrimitive",ur),rr(sr,"isObject",lr),rr(br,"isPrimitive",gr),rr(br,"isObject",yr);var hr=Number.POSITIVE_INFINITY,dr=ar.NEGATIVE_INFINITY,vr=Math.floor;function wr(r){return r<hr&&r>dr&&vr(t=r)===t;var t}function mr(r){return ur(r)&&wr(r)}function jr(r){return lr(r)&&wr(r.valueOf())}function Or(r){return mr(r)||jr(r)}rr(Or,"isPrimitive",mr),rr(Or,"isObject",jr);var Sr=Object.prototype.propertyIsEnumerable,Er=!Sr.call("beep","0");function _r(r,t){var e;return null!=r&&(!(e=Sr.call(r,t))&&Er&&ir(r)?!gr(t=+t)&&mr(t)&&t>=0&&t<r.length:e)}var Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)},Tr=Math.floor,kr=p?s:function(r){return null!==r&&"object"==typeof r&&!Ir(r)&&"number"==typeof r.length&&(t=r.length,Tr(t)===t)&&r.length>=0&&r.length<=4294967295&&u(r,"callee")&&!_r(r,"callee");var t},Pr=Array.prototype.slice;function xr(r){return null!==r&&"object"==typeof r}rr(xr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Ir(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(xr));var Vr=_r((function(){}),"prototype"),Ar=!_r({toString:null},"toString");function Nr(r){return"number"==typeof r}var Fr=Number,Lr=Fr.prototype.toString,Cr=n();function $r(r){return"object"==typeof r&&(r instanceof Fr||(Cr?function(r){try{return Lr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function Wr(r){return Nr(r)||$r(r)}function Br(r){return r!=r}function Gr(r){return Nr(r)&&Br(r)}function Rr(r){return $r(r)&&Br(r.valueOf())}function Mr(r){return Gr(r)||Rr(r)}rr(Wr,"isPrimitive",Nr),rr(Wr,"isObject",$r),rr(Mr,"isPrimitive",Gr),rr(Mr,"isObject",Rr);var Yr=Math.floor;function Xr(r){return Yr(r)===r}function Zr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Xr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Ur(r){return"string"==typeof r}var Dr=String.prototype.valueOf,Hr=n();function zr(r){return"object"==typeof r&&(r instanceof String||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function qr(r){return Ur(r)||zr(r)}rr(qr,"isPrimitive",Ur),rr(qr,"isObject",zr);var Jr=Number.POSITIVE_INFINITY,Kr=Fr.NEGATIVE_INFINITY;function Qr(r){return r<Jr&&r>Kr&&Xr(r)}function rt(r){return Nr(r)&&Qr(r)}function tt(r){return $r(r)&&Qr(r.valueOf())}function et(r){return rt(r)||tt(r)}function nt(r,t,e){var n,o;if(!Zr(r)&&!Ur(r))throw new TypeError(Z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!rt(e))throw new TypeError(Z("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Mr(t)){for(;o<n;o++)if(Mr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}rr(et,"isPrimitive",rt),rr(et,"isObject",tt);var ot=/./;function it(r){return"boolean"==typeof r}var ut=Boolean,at=Boolean.prototype.toString,ct=n();function ft(r){return"object"==typeof r&&(r instanceof ut||(ct?function(r){try{return at.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function lt(r){return it(r)||ft(r)}function st(){return new Function("return this;")()}rr(lt,"isPrimitive",it),rr(lt,"isObject",ft);var pt="object"==typeof self?self:null,gt="object"==typeof window?window:null,yt="object"==typeof globalThis?globalThis:null,bt=function(r){if(arguments.length){if(!it(r))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return st()}if(yt)return yt;if(pt)return pt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),ht=bt.document&&bt.document.childNodes,dt=Int8Array;function vt(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function mt(r){var t,e,n,o;if(("Object"===(e=l(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=wt.exec(n.toString()))return t[1]}return xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}rr(vt,"REGEXP",wt);var jt="function"==typeof ot||"object"==typeof dt||"function"==typeof ht?function(r){return mt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?mt(r).toLowerCase():t};function Ot(r){return r.constructor&&r.constructor.prototype===r}var St,Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window,It=function(){var r;if("undefined"===jt(_t))return!1;for(r in _t)try{-1===nt(Et,r)&&u(_t,r)&&null!==_t[r]&&"object"===jt(_t[r])&&Ot(_t[r])}catch(r){return!0}return!1}(),Tt="undefined"!=typeof window,kt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];St=t?function(){return 2!==(r(arguments)||"").length}(1,2)?function(t){return kr(t)?r(Pr.call(t)):r(t)}:r:function(r){var t,e,n,o,i,a,c;if(o=[],kr(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!u(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(0==(n="function"==typeof r)&&!xr(r))return o;e=Vr&&n}for(i in r)e&&"prototype"===i||!u(r,i)||o.push(String(i));if(Ar)for(t=function(r){if(!1===Tt&&!It)return Ot(r);try{return Ot(r)}catch(r){return!1}}(r),c=0;c<kt.length;c++)a=kt[c],t&&"constructor"===a||!u(r,a)||o.push(String(a));return o};var Pt=St;function xt(r){return"function"===jt(r)}var Vt,At=Object,Nt=Object.getPrototypeOf;Vt=xt(Object.getPrototypeOf)?Nt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===l(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ft=Vt,Lt=Object.prototype;function Ct(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Ir(r)}(r)&&(t=function(r){return null==r?null:(r=At(r),Ft(r))}(r),!t||!u(r,"constructor")&&u(t,"constructor")&&xt(t.constructor)&&"[object Function]"===l(t.constructor)&&u(t,"isPrototypeOf")&&xt(t.isPrototypeOf)&&(t===Lt||function(r){var t;for(t in r)if(!u(r,t))return!1;return!0}(r)))}function $t(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}return function(r,t){var e,n,o,i,a,c,f,l=!0;if(!xr(r))throw new TypeError($t("1WLOm",r));if(arguments.length>1){if(!Ct(t))throw new TypeError($t("1WL2V,FD",t));if(u(t,"duplicates")&&!it(l=t.duplicates))throw new TypeError($t("1WL2o,GE","duplicates",l))}if(n=(e=Pt(r)).length,a={},l)for(f=0;f<n;f++)u(a,i=r[o=e[f]])?(c=a[i],Ir(c)?a[i].push(o):a[i]=[c,o]):a[i]=o;else for(f=0;f<n;f++)a[r[o=e[f]]]=o;return a}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).invert=t();
//# sourceMappingURL=browser.js.map
