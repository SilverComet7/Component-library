(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("lodash")):typeof define=="function"&&define.amd?define(["exports","lodash"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n.method={},n.lodash))})(this,function(n,i){"use strict";function c(o,t){var u;for(const e in o)Object.prototype.hasOwnProperty.call(o,e)&&(Array.isArray(t)?t.forEach(r=>{var f;const l=i.cloneDeep(o[e]);r[e]=(f=r[e])!=null?f:l}):t[e]=(u=t[e])!=null?u:i.cloneDeep(o[e]))}function p(o,t,u,e="jsx"){const r=t?o[t.property]:o;if(!u)return r;const l=u.find(b=>b[e==="value"?"label":"value"]===r);if(!l)throw new Error(`\u914D\u7F6E\u9519\u8BEF${r}`);const{color:f,label:s,value:d}=l;if(e==="jsx")return f?h("h1",{style:{color:f}},s):s;if(e==="label")return s;if(e==="value")return d}n.CompatibleWithDefaultConfig=c,n.formatOption=p,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
