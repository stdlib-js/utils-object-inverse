"use strict";var m=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var f=m(function(k,p){
var q=require('@stdlib/utils-keys/dist'),w=require('@stdlib/assert-is-array/dist'),g=require('@stdlib/assert-is-plain-object/dist'),h=require('@stdlib/assert-is-object-like/dist'),y=require('@stdlib/assert-is-boolean/dist').isPrimitive,c=require('@stdlib/assert-has-own-property/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function d(t,e){var u=!0,s,v,r,n,i,o,a;if(!h(t))throw new TypeError(l('1WLES',t));if(arguments.length>1){if(!g(e))throw new TypeError(l('1WL2V',e));if(c(e,"duplicates")&&(u=e.duplicates,!y(u)))throw new TypeError(l('1WL2o',"duplicates",u))}if(s=q(t),v=s.length,i={},u)for(a=0;a<v;a++){if(r=s[a],n=t[r],!c(i,n)){i[n]=r;continue}o=i[n],w(o)?i[n].push(r):i[n]=[o,r]}else for(a=0;a<v;a++)r=s[a],i[t[r]]=r;return i}p.exports=d
});var b=f();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
