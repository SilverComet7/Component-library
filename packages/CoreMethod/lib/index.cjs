"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("lodash");function p(r,o={}){var n;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&(Array.isArray(o)?o.forEach(t=>{var l;const u=c.cloneDeep(r[e]);t[e]=(l=t[e])!=null?l:u}):o[e]=(n=o[e])!=null?n:c.cloneDeep(r[e]))}function a(r,o,n,e="jsx"){const t=o?r[o.property]:r;if(!n)return t;const u=n.find(f=>f[e==="value"?"label":"value"]===t);if(!u)throw new Error(`\u914D\u7F6E\u9519\u8BEF${t}`);const{color:l,label:i,value:s}=u;if(e==="jsx")return l?h("h1",{style:{color:l}},i):i;if(e==="label")return i;if(e==="value")return s}exports.CompatibleWithDefaultConfig=p;exports.formatOption=a;
