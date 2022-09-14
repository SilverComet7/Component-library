import { cloneDeep as Q0 } from "lodash";
import { ref as bn } from "vue-demi";
function y2(e, t = {}) {
  var r;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && (Array.isArray(t) ? t.forEach((a) => {
      var s;
      const i = Q0(e[n]);
      a[n] = (s = a[n]) != null ? s : i;
    }) : t[n] = (r = t[n]) != null ? r : Q0(e[n]));
  return t;
}
function C2(e, t, r, n = "jsx") {
  const a = t ? e[t.property] : e;
  if (!r)
    return a;
  const i = r.find(
    (o) => o[n === "value" ? "label" : "value"] === a
  );
  if (!i)
    throw new Error(`\u914D\u7F6E\u9519\u8BEF${a}`);
  const { color: s, label: f, value: l } = i;
  if (n === "jsx")
    return s ? /* @__PURE__ */ h("h1", {
      style: { color: s }
    }, f) : f;
  if (n === "label")
    return f;
  if (n === "value")
    return l;
}
function Sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var li = { exports: {} }, d0 = { exports: {} }, ci = function(t, r) {
  return function() {
    for (var a = new Array(arguments.length), i = 0; i < a.length; i++)
      a[i] = arguments[i];
    return t.apply(r, a);
  };
}, Af = ci, p0 = Object.prototype.toString, v0 = function(e) {
  return function(t) {
    var r = p0.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Qr(e) {
  return e = e.toLowerCase(), function(r) {
    return v0(r) === e;
  };
}
function m0(e) {
  return Array.isArray(e);
}
function fn(e) {
  return typeof e > "u";
}
function Ff(e) {
  return e !== null && !fn(e) && e.constructor !== null && !fn(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var hi = Qr("ArrayBuffer");
function yf(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && hi(e.buffer), t;
}
function Cf(e) {
  return typeof e == "string";
}
function Of(e) {
  return typeof e == "number";
}
function ui(e) {
  return e !== null && typeof e == "object";
}
function an(e) {
  if (v0(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Rf = Qr("Date"), Df = Qr("File"), Nf = Qr("Blob"), If = Qr("FileList");
function g0(e) {
  return p0.call(e) === "[object Function]";
}
function kf(e) {
  return ui(e) && g0(e.pipe);
}
function Pf(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || p0.call(e) === t || g0(e.toString) && e.toString() === t);
}
var Lf = Qr("URLSearchParams");
function Bf(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Mf() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function _0(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), m0(e))
      for (var r = 0, n = e.length; r < n; r++)
        t.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e);
}
function l0() {
  var e = {};
  function t(a, i) {
    an(e[i]) && an(a) ? e[i] = l0(e[i], a) : an(a) ? e[i] = l0({}, a) : m0(a) ? e[i] = a.slice() : e[i] = a;
  }
  for (var r = 0, n = arguments.length; r < n; r++)
    _0(arguments[r], t);
  return e;
}
function Uf(e, t, r) {
  return _0(t, function(a, i) {
    r && typeof a == "function" ? e[i] = Af(a, r) : e[i] = a;
  }), e;
}
function bf(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Wf(e, t, r, n) {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function Hf(e, t, r) {
  var n, a, i, s = {};
  t = t || {};
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      i = n[a], s[i] || (t[i] = e[i], s[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function Vf(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var n = e.indexOf(t, r);
  return n !== -1 && n === r;
}
function Gf(e) {
  if (!e)
    return null;
  var t = e.length;
  if (fn(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var Xf = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), $e = {
  isArray: m0,
  isArrayBuffer: hi,
  isBuffer: Ff,
  isFormData: Pf,
  isArrayBufferView: yf,
  isString: Cf,
  isNumber: Of,
  isObject: ui,
  isPlainObject: an,
  isUndefined: fn,
  isDate: Rf,
  isFile: Df,
  isBlob: Nf,
  isFunction: g0,
  isStream: kf,
  isURLSearchParams: Lf,
  isStandardBrowserEnv: Mf,
  forEach: _0,
  merge: l0,
  extend: Uf,
  trim: Bf,
  stripBOM: bf,
  inherits: Wf,
  toFlatObject: Hf,
  kindOf: v0,
  kindOfTest: Qr,
  endsWith: Vf,
  toArray: Gf,
  isTypedArray: Xf,
  isFileList: If
}, st = $e;
function ea(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var xi = function(t, r, n) {
  if (!r)
    return t;
  var a;
  if (n)
    a = n(r);
  else if (st.isURLSearchParams(r))
    a = r.toString();
  else {
    var i = [];
    st.forEach(r, function(l, o) {
      l === null || typeof l > "u" || (st.isArray(l) ? o = o + "[]" : l = [l], st.forEach(l, function(p) {
        st.isDate(p) ? p = p.toISOString() : st.isObject(p) && (p = JSON.stringify(p)), i.push(ea(o) + "=" + ea(p));
      }));
    }), a = i.join("&");
  }
  if (a) {
    var s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}, $f = $e;
function wn() {
  this.handlers = [];
}
wn.prototype.use = function(t, r, n) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: n ? n.synchronous : !1,
    runWhen: n ? n.runWhen : null
  }), this.handlers.length - 1;
};
wn.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
wn.prototype.forEach = function(t) {
  $f.forEach(this.handlers, function(n) {
    n !== null && t(n);
  });
};
var jf = wn, zf = $e, Kf = function(t, r) {
  zf.forEach(t, function(a, i) {
    i !== r && i.toUpperCase() === r.toUpperCase() && (t[r] = a, delete t[i]);
  });
}, di = $e;
function mt(e, t, r, n, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a);
}
di.inherits(mt, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var pi = mt.prototype, vi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(e) {
  vi[e] = { value: e };
});
Object.defineProperties(mt, vi);
Object.defineProperty(pi, "isAxiosError", { value: !0 });
mt.from = function(e, t, r, n, a, i) {
  var s = Object.create(pi);
  return di.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }), mt.call(s, e.message, t, r, n, a), s.name = e.name, i && Object.assign(s, i), s;
};
var Et = mt, mi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, vr = $e;
function Yf(e, t) {
  t = t || new FormData();
  var r = [];
  function n(i) {
    return i === null ? "" : vr.isDate(i) ? i.toISOString() : vr.isArrayBuffer(i) || vr.isTypedArray(i) ? typeof Blob == "function" ? new Blob([i]) : Buffer.from(i) : i;
  }
  function a(i, s) {
    if (vr.isPlainObject(i) || vr.isArray(i)) {
      if (r.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + s);
      r.push(i), vr.forEach(i, function(l, o) {
        if (!vr.isUndefined(l)) {
          var c = s ? s + "." + o : o, p;
          if (l && !s && typeof l == "object") {
            if (vr.endsWith(o, "{}"))
              l = JSON.stringify(l);
            else if (vr.endsWith(o, "[]") && (p = vr.toArray(l))) {
              p.forEach(function(u) {
                !vr.isUndefined(u) && t.append(c, n(u));
              });
              return;
            }
          }
          a(l, c);
        }
      }), r.pop();
    } else
      t.append(s, n(i));
  }
  return a(e), t;
}
var gi = Yf, Wn, ra;
function qf() {
  if (ra)
    return Wn;
  ra = 1;
  var e = Et;
  return Wn = function(r, n, a) {
    var i = a.config.validateStatus;
    !a.status || !i || i(a.status) ? r(a) : n(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Wn;
}
var Hn, ta;
function Jf() {
  if (ta)
    return Hn;
  ta = 1;
  var e = $e;
  return Hn = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(n, a, i, s, f, l) {
        var o = [];
        o.push(n + "=" + encodeURIComponent(a)), e.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()), e.isString(s) && o.push("path=" + s), e.isString(f) && o.push("domain=" + f), l === !0 && o.push("secure"), document.cookie = o.join("; ");
      },
      read: function(n) {
        var a = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return a ? decodeURIComponent(a[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), Hn;
}
var Zf = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, Qf = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, eo = Zf, ro = Qf, _i = function(t, r) {
  return t && !eo(r) ? ro(t, r) : r;
}, Vn, na;
function to() {
  if (na)
    return Vn;
  na = 1;
  var e = $e, t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Vn = function(n) {
    var a = {}, i, s, f;
    return n && e.forEach(n.split(`
`), function(o) {
      if (f = o.indexOf(":"), i = e.trim(o.substr(0, f)).toLowerCase(), s = e.trim(o.substr(f + 1)), i) {
        if (a[i] && t.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? a[i] = (a[i] ? a[i] : []).concat([s]) : a[i] = a[i] ? a[i] + ", " + s : s;
      }
    }), a;
  }, Vn;
}
var Gn, aa;
function no() {
  if (aa)
    return Gn;
  aa = 1;
  var e = $e;
  return Gn = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), a;
    function i(s) {
      var f = s;
      return r && (n.setAttribute("href", f), f = n.href), n.setAttribute("href", f), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return a = i(window.location.href), function(f) {
      var l = e.isString(f) ? i(f) : f;
      return l.protocol === a.protocol && l.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Gn;
}
var Xn, ia;
function Sn() {
  if (ia)
    return Xn;
  ia = 1;
  var e = Et, t = $e;
  function r(n) {
    e.call(this, n == null ? "canceled" : n, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), Xn = r, Xn;
}
var $n, sa;
function ao() {
  return sa || (sa = 1, $n = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), $n;
}
var jn, fa;
function oa() {
  if (fa)
    return jn;
  fa = 1;
  var e = $e, t = qf(), r = Jf(), n = xi, a = _i, i = to(), s = no(), f = mi, l = Et, o = Sn(), c = ao();
  return jn = function(u) {
    return new Promise(function(E, x) {
      var _ = u.data, O = u.headers, R = u.responseType, y;
      function M() {
        u.cancelToken && u.cancelToken.unsubscribe(y), u.signal && u.signal.removeEventListener("abort", y);
      }
      e.isFormData(_) && e.isStandardBrowserEnv() && delete O["Content-Type"];
      var b = new XMLHttpRequest();
      if (u.auth) {
        var re = u.auth.username || "", D = u.auth.password ? unescape(encodeURIComponent(u.auth.password)) : "";
        O.Authorization = "Basic " + btoa(re + ":" + D);
      }
      var H = a(u.baseURL, u.url);
      b.open(u.method.toUpperCase(), n(H, u.params, u.paramsSerializer), !0), b.timeout = u.timeout;
      function L() {
        if (!!b) {
          var j = "getAllResponseHeaders" in b ? i(b.getAllResponseHeaders()) : null, Q = !R || R === "text" || R === "json" ? b.responseText : b.response, he = {
            data: Q,
            status: b.status,
            statusText: b.statusText,
            headers: j,
            config: u,
            request: b
          };
          t(function(Oe) {
            E(Oe), M();
          }, function(Oe) {
            x(Oe), M();
          }, he), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = L : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(L);
      }, b.onabort = function() {
        !b || (x(new l("Request aborted", l.ECONNABORTED, u, b)), b = null);
      }, b.onerror = function() {
        x(new l("Network Error", l.ERR_NETWORK, u, b, b)), b = null;
      }, b.ontimeout = function() {
        var Q = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded", he = u.transitional || f;
        u.timeoutErrorMessage && (Q = u.timeoutErrorMessage), x(new l(
          Q,
          he.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED,
          u,
          b
        )), b = null;
      }, e.isStandardBrowserEnv()) {
        var G = (u.withCredentials || s(H)) && u.xsrfCookieName ? r.read(u.xsrfCookieName) : void 0;
        G && (O[u.xsrfHeaderName] = G);
      }
      "setRequestHeader" in b && e.forEach(O, function(Q, he) {
        typeof _ > "u" && he.toLowerCase() === "content-type" ? delete O[he] : b.setRequestHeader(he, Q);
      }), e.isUndefined(u.withCredentials) || (b.withCredentials = !!u.withCredentials), R && R !== "json" && (b.responseType = u.responseType), typeof u.onDownloadProgress == "function" && b.addEventListener("progress", u.onDownloadProgress), typeof u.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", u.onUploadProgress), (u.cancelToken || u.signal) && (y = function(j) {
        !b || (x(!j || j && j.type ? new o() : j), b.abort(), b = null);
      }, u.cancelToken && u.cancelToken.subscribe(y), u.signal && (u.signal.aborted ? y() : u.signal.addEventListener("abort", y))), _ || (_ = null);
      var z = c(H);
      if (z && ["http", "https", "file"].indexOf(z) === -1) {
        x(new l("Unsupported protocol " + z + ":", l.ERR_BAD_REQUEST, u));
        return;
      }
      b.send(_);
    });
  }, jn;
}
var zn, la;
function io() {
  return la || (la = 1, zn = null), zn;
}
var Le = $e, ca = Kf, ha = Et, so = mi, fo = gi, oo = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function ua(e, t) {
  !Le.isUndefined(e) && Le.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function lo() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = oa()), e;
}
function co(e, t, r) {
  if (Le.isString(e))
    try {
      return (t || JSON.parse)(e), Le.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
var An = {
  transitional: so,
  adapter: lo(),
  transformRequest: [function(t, r) {
    if (ca(r, "Accept"), ca(r, "Content-Type"), Le.isFormData(t) || Le.isArrayBuffer(t) || Le.isBuffer(t) || Le.isStream(t) || Le.isFile(t) || Le.isBlob(t))
      return t;
    if (Le.isArrayBufferView(t))
      return t.buffer;
    if (Le.isURLSearchParams(t))
      return ua(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var n = Le.isObject(t), a = r && r["Content-Type"], i;
    if ((i = Le.isFileList(t)) || n && a === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return fo(i ? { "files[]": t } : t, s && new s());
    } else if (n || a === "application/json")
      return ua(r, "application/json"), co(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || An.transitional, n = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, i = !n && this.responseType === "json";
    if (i || a && Le.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? ha.from(s, ha.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: io()
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Le.forEach(["delete", "get", "head"], function(t) {
  An.headers[t] = {};
});
Le.forEach(["post", "put", "patch"], function(t) {
  An.headers[t] = Le.merge(oo);
});
var E0 = An, ho = $e, uo = E0, xo = function(t, r, n) {
  var a = this || uo;
  return ho.forEach(n, function(s) {
    t = s.call(a, t, r);
  }), t;
}, Kn, xa;
function Ei() {
  return xa || (xa = 1, Kn = function(t) {
    return !!(t && t.__CANCEL__);
  }), Kn;
}
var da = $e, Yn = xo, po = Ei(), vo = E0, mo = Sn();
function qn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new mo();
}
var go = function(t) {
  qn(t), t.headers = t.headers || {}, t.data = Yn.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = da.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), da.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete t.headers[a];
    }
  );
  var r = t.adapter || vo.adapter;
  return r(t).then(function(a) {
    return qn(t), a.data = Yn.call(
      t,
      a.data,
      a.headers,
      t.transformResponse
    ), a;
  }, function(a) {
    return po(a) || (qn(t), a && a.response && (a.response.data = Yn.call(
      t,
      a.response.data,
      a.response.headers,
      t.transformResponse
    ))), Promise.reject(a);
  });
}, ar = $e, Ti = function(t, r) {
  r = r || {};
  var n = {};
  function a(c, p) {
    return ar.isPlainObject(c) && ar.isPlainObject(p) ? ar.merge(c, p) : ar.isPlainObject(p) ? ar.merge({}, p) : ar.isArray(p) ? p.slice() : p;
  }
  function i(c) {
    if (ar.isUndefined(r[c])) {
      if (!ar.isUndefined(t[c]))
        return a(void 0, t[c]);
    } else
      return a(t[c], r[c]);
  }
  function s(c) {
    if (!ar.isUndefined(r[c]))
      return a(void 0, r[c]);
  }
  function f(c) {
    if (ar.isUndefined(r[c])) {
      if (!ar.isUndefined(t[c]))
        return a(void 0, t[c]);
    } else
      return a(void 0, r[c]);
  }
  function l(c) {
    if (c in r)
      return a(t[c], r[c]);
    if (c in t)
      return a(void 0, t[c]);
  }
  var o = {
    url: s,
    method: s,
    data: s,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: l
  };
  return ar.forEach(Object.keys(t).concat(Object.keys(r)), function(p) {
    var u = o[p] || i, v = u(p);
    ar.isUndefined(v) && u !== l || (n[p] = v);
  }), n;
}, Jn, pa;
function wi() {
  return pa || (pa = 1, Jn = {
    version: "0.27.2"
  }), Jn;
}
var _o = wi().version, Mr = Et, T0 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  T0[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var va = {};
T0.transitional = function(t, r, n) {
  function a(i, s) {
    return "[Axios v" + _o + "] Transitional option '" + i + "'" + s + (n ? ". " + n : "");
  }
  return function(i, s, f) {
    if (t === !1)
      throw new Mr(
        a(s, " has been removed" + (r ? " in " + r : "")),
        Mr.ERR_DEPRECATED
      );
    return r && !va[s] && (va[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, s, f) : !0;
  };
};
function Eo(e, t, r) {
  if (typeof e != "object")
    throw new Mr("options must be an object", Mr.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(e), a = n.length; a-- > 0; ) {
    var i = n[a], s = t[i];
    if (s) {
      var f = e[i], l = f === void 0 || s(f, i, e);
      if (l !== !0)
        throw new Mr("option " + i + " must be " + l, Mr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Mr("Unknown option " + i, Mr.ERR_BAD_OPTION);
  }
}
var To = {
  assertOptions: Eo,
  validators: T0
}, Si = $e, wo = xi, ma = jf, ga = go, Fn = Ti, So = _i, Ai = To, ft = Ai.validators;
function gt(e) {
  this.defaults = e, this.interceptors = {
    request: new ma(),
    response: new ma()
  };
}
gt.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Fn(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var n = r.transitional;
  n !== void 0 && Ai.assertOptions(n, {
    silentJSONParsing: ft.transitional(ft.boolean),
    forcedJSONParsing: ft.transitional(ft.boolean),
    clarifyTimeoutError: ft.transitional(ft.boolean)
  }, !1);
  var a = [], i = !0;
  this.interceptors.request.forEach(function(v) {
    typeof v.runWhen == "function" && v.runWhen(r) === !1 || (i = i && v.synchronous, a.unshift(v.fulfilled, v.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(v) {
    s.push(v.fulfilled, v.rejected);
  });
  var f;
  if (!i) {
    var l = [ga, void 0];
    for (Array.prototype.unshift.apply(l, a), l = l.concat(s), f = Promise.resolve(r); l.length; )
      f = f.then(l.shift(), l.shift());
    return f;
  }
  for (var o = r; a.length; ) {
    var c = a.shift(), p = a.shift();
    try {
      o = c(o);
    } catch (u) {
      p(u);
      break;
    }
  }
  try {
    f = ga(o);
  } catch (u) {
    return Promise.reject(u);
  }
  for (; s.length; )
    f = f.then(s.shift(), s.shift());
  return f;
};
gt.prototype.getUri = function(t) {
  t = Fn(this.defaults, t);
  var r = So(t.baseURL, t.url);
  return wo(r, t.params, t.paramsSerializer);
};
Si.forEach(["delete", "get", "head", "options"], function(t) {
  gt.prototype[t] = function(r, n) {
    return this.request(Fn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
Si.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, s, f) {
      return this.request(Fn(f || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  gt.prototype[t] = r(), gt.prototype[t + "Form"] = r(!0);
});
var Ao = gt, Zn, _a;
function Fo() {
  if (_a)
    return Zn;
  _a = 1;
  var e = Sn();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    var a = this;
    this.promise.then(function(i) {
      if (!!a._listeners) {
        var s, f = a._listeners.length;
        for (s = 0; s < f; s++)
          a._listeners[s](i);
        a._listeners = null;
      }
    }), this.promise.then = function(i) {
      var s, f = new Promise(function(l) {
        a.subscribe(l), s = l;
      }).then(i);
      return f.cancel = function() {
        a.unsubscribe(s);
      }, f;
    }, r(function(s) {
      a.reason || (a.reason = new e(s), n(a.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }, t.prototype.unsubscribe = function(n) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(n);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, t.source = function() {
    var n, a = new t(function(s) {
      n = s;
    });
    return {
      token: a,
      cancel: n
    };
  }, Zn = t, Zn;
}
var Qn, Ea;
function yo() {
  return Ea || (Ea = 1, Qn = function(t) {
    return function(n) {
      return t.apply(null, n);
    };
  }), Qn;
}
var e0, Ta;
function Co() {
  if (Ta)
    return e0;
  Ta = 1;
  var e = $e;
  return e0 = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, e0;
}
var wa = $e, Oo = ci, sn = Ao, Ro = Ti, Do = E0;
function Fi(e) {
  var t = new sn(e), r = Oo(sn.prototype.request, t);
  return wa.extend(r, sn.prototype, t), wa.extend(r, t), r.create = function(a) {
    return Fi(Ro(e, a));
  }, r;
}
var er = Fi(Do);
er.Axios = sn;
er.CanceledError = Sn();
er.CancelToken = Fo();
er.isCancel = Ei();
er.VERSION = wi().version;
er.toFormData = gi;
er.AxiosError = Et;
er.Cancel = er.CanceledError;
er.all = function(t) {
  return Promise.all(t);
};
er.spread = yo();
er.isAxiosError = Co();
d0.exports = er;
d0.exports.default = er;
(function(e) {
  e.exports = d0.exports;
})(li);
const No = /* @__PURE__ */ Sf(li.exports);
class Io {
  constructor(t, r) {
    this.routePath = "", this.axiosInstance = {}, this.routePath = t, this.axiosInstance = r;
  }
  getAxiosInstance() {
    return this.axiosInstance || (this.axiosInstance = No.create({
      baseURL: "https://some-domain.com/api/",
      timeout: 3e3
    })), this.axiosInstance;
  }
  getList(t) {
    return this.getAxiosInstance().get(`/${this.routePath}`, {
      params: t
    });
  }
  post(t) {
    return this.getAxiosInstance().post(`/${this.routePath}`, {
      data: t
    });
  }
  delete(t) {
    return this.getAxiosInstance().delete(`/${this.routePath}/${t}`);
  }
  put(t, r) {
    return this.getAxiosInstance().put(`/${this.routePath}/${t}`, {
      data: r
    });
  }
  get(t) {
    return this.getAxiosInstance().get(`/${this.routePath}/${t}`);
  }
}
function O2(e, t, r) {
  const n = new Io(e, t), a = bn([]), i = bn({}), s = bn(0), f = async (u) => {
    var E;
    const [v] = await n.getList(
      u
    );
    s.value = (E = v.total) != null ? E : 0, a.value = v.data;
  };
  return f(r), {
    tableList: a,
    totalNumber: s,
    editRow: i,
    getList: f,
    getMethod: async (u) => {
      const [v] = await n.get(u._id);
      return v;
    },
    postMethod: async (u) => {
      await n.post(u), await f();
    },
    deleteMethod: async (u) => {
      await n.delete(u._id), await f();
    },
    putMethod: async (u) => {
      await n.put(u._id, u), await f();
    }
  };
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var on = {};
on.version = "0.18.5";
var yi = 1252, ko = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], Ci = function(e) {
  ko.indexOf(e) != -1 && (yi = e);
};
function Po() {
  Ci(1252);
}
var Bt = function(e) {
  Ci(e);
};
function Lo() {
  Bt(1200), Po();
}
function Bo(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return t.join("");
}
var qt = function(t) {
  return String.fromCharCode(t);
}, Sa = function(t) {
  return String.fromCharCode(t);
}, zr, Ur = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Mt(e) {
  for (var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, f = 0, l = 0, o = 0; o < e.length; )
    r = e.charCodeAt(o++), i = r >> 2, n = e.charCodeAt(o++), s = (r & 3) << 4 | n >> 4, a = e.charCodeAt(o++), f = (n & 15) << 2 | a >> 6, l = a & 63, isNaN(n) ? f = l = 64 : isNaN(a) && (l = 64), t += Ur.charAt(i) + Ur.charAt(s) + Ur.charAt(f) + Ur.charAt(l);
  return t;
}
function kr(e) {
  var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, f = 0, l = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var o = 0; o < e.length; )
    i = Ur.indexOf(e.charAt(o++)), s = Ur.indexOf(e.charAt(o++)), r = i << 2 | s >> 4, t += String.fromCharCode(r), f = Ur.indexOf(e.charAt(o++)), n = (s & 15) << 4 | f >> 2, f !== 64 && (t += String.fromCharCode(n)), l = Ur.indexOf(e.charAt(o++)), a = (f & 3) << 6 | l, l !== 64 && (t += String.fromCharCode(a));
  return t;
}
var de = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), Lr = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function qr(e) {
  return de ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function Aa(e) {
  return de ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var _r = function(t) {
  return de ? Lr(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function yn(e) {
  if (typeof ArrayBuffer > "u")
    return _r(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n)
    r[n] = e.charCodeAt(n) & 255;
  return t;
}
function Vt(e) {
  if (Array.isArray(e))
    return e.map(function(n) {
      return String.fromCharCode(n);
    }).join("");
  for (var t = [], r = 0; r < e.length; ++r)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function Mo(e) {
  if (typeof Uint8Array > "u")
    throw new Error("Unsupported");
  return new Uint8Array(e);
}
var He = de ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : Lr(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t)
      r += e[t].length;
    var n = new Uint8Array(r), a = 0;
    for (t = 0, r = 0; t < e.length; r += a, ++t)
      if (a = e[t].length, e[t] instanceof Uint8Array)
        n.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        n.set(new Uint8Array(e[t]), r);
      }
    return n;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function Uo(e) {
  for (var t = [], r = 0, n = e.length + 250, a = qr(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128)
      a[r++] = s;
    else if (s < 2048)
      a[r++] = 192 | s >> 6 & 31, a[r++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      a[r++] = 240 | s >> 8 & 7, a[r++] = 128 | s >> 2 & 63, a[r++] = 128 | f >> 6 & 15 | (s & 3) << 4, a[r++] = 128 | f & 63;
    } else
      a[r++] = 224 | s >> 12 & 15, a[r++] = 128 | s >> 6 & 63, a[r++] = 128 | s & 63;
    r > n && (t.push(a.slice(0, r)), r = 0, a = qr(65535), n = 65530);
  }
  return t.push(a.slice(0, r)), He(t);
}
var Dt = /\u0000/g, Jt = /[\u0001-\u0006]/g;
function xt(e) {
  for (var t = "", r = e.length - 1; r >= 0; )
    t += e.charAt(r--);
  return t;
}
function Er(e, t) {
  var r = "" + e;
  return r.length >= t ? r : ye("0", t - r.length) + r;
}
function w0(e, t) {
  var r = "" + e;
  return r.length >= t ? r : ye(" ", t - r.length) + r;
}
function ln(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + ye(" ", t - r.length);
}
function bo(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : ye("0", t - r.length) + r;
}
function Wo(e, t) {
  var r = "" + e;
  return r.length >= t ? r : ye("0", t - r.length) + r;
}
var Fa = /* @__PURE__ */ Math.pow(2, 32);
function ot(e, t) {
  if (e > Fa || e < -Fa)
    return bo(e, t);
  var r = Math.round(e);
  return Wo(r, t);
}
function cn(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var ya = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], r0 = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Ho(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "', e;
}
var Ce = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "'
}, Ca = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  67: 9,
  68: 10,
  69: 12,
  70: 13,
  71: 14,
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  76: 20,
  77: 21,
  78: 22,
  79: 45,
  80: 46,
  81: 47,
  82: 0
}, Vo = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function hn(e, t, r) {
  for (var n = e < 0 ? -1 : 1, a = e * n, i = 0, s = 1, f = 0, l = 1, o = 0, c = 0, p = Math.floor(a); o < t && (p = Math.floor(a), f = p * s + i, c = p * o + l, !(a - p < 5e-8)); )
    a = 1 / (a - p), i = s, s = f, l = o, o = c;
  if (c > t && (o > t ? (c = l, f = i) : (c = o, f = s)), !r)
    return [0, n * f, c];
  var u = Math.floor(n * f / c);
  return [u, n * f - u * c, c];
}
function Zt(e, t, r) {
  if (e > 2958465 || e < 0)
    return null;
  var n = e | 0, a = Math.floor(86400 * (e - n)), i = 0, s = [], f = { D: n, T: a, u: 86400 * (e - n) - a, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), t && t.date1904 && (n += 1462), f.u > 0.9999 && (f.u = 0, ++a == 86400 && (f.T = a = 0, ++n, ++f.D)), n === 60)
    s = r ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (n === 0)
    s = r ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1), s = [l.getFullYear(), l.getMonth() + 1, l.getDate()], i = l.getDay(), n < 60 && (i = (i + 6) % 7), r && (i = Yo(l, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = a % 60, a = Math.floor(a / 60), f.M = a % 60, a = Math.floor(a / 60), f.H = a, f.q = i, f;
}
var Oi = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), Go = /* @__PURE__ */ Oi.getTime(), Xo = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function Ri(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= Xo && (r += 24 * 60 * 60 * 1e3), (r - (Go + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Oi.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function S0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function $o(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function jo(e) {
  var t = e < 0 ? 12 : 11, r = S0(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function zo(e) {
  var t = S0(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function Ko(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = jo(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = zo(e), S0($o(r.toUpperCase()));
}
function c0(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Ko(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return Wr(14, Ri(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Yo(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function qo(e, t, r, n) {
  var a = "", i = 0, s = 0, f = r.y, l, o = 0;
  switch (e) {
    case 98:
      f = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          l = f % 100, o = 2;
          break;
        default:
          l = f % 1e4, o = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          l = r.m, o = t.length;
          break;
        case 3:
          return r0[r.m - 1][1];
        case 5:
          return r0[r.m - 1][0];
        default:
          return r0[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          l = r.d, o = t.length;
          break;
        case 3:
          return ya[r.q][0];
        default:
          return ya[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          l = 1 + (r.H + 11) % 12, o = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          l = r.H, o = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          l = r.M, o = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? Er(r.S, t.length) : (n >= 2 ? s = n === 3 ? 1e3 : 100 : s = n === 1 ? 10 : 1, i = Math.round(s * (r.S + r.u)), i >= 60 * s && (i = 0), t === "s" ? i === 0 ? "0" : "" + i / s : (a = Er(i, 2 + n), t === "ss" ? a.substr(0, 2) : "." + a.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          l = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          l = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          l = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      o = t.length === 3 ? 1 : 2;
      break;
    case 101:
      l = f, o = 1;
      break;
  }
  var c = o > 0 ? Er(l, o) : "";
  return c;
}
function br(e) {
  var t = 3;
  if (e.length <= t)
    return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? "," : "") + e.substr(r, t);
  return n;
}
var Di = /%/g;
function Jo(e, t, r) {
  var n = t.replace(Di, ""), a = t.length - n.length;
  return Dr(e, n, r * Math.pow(10, 2 * a)) + ye("%", a);
}
function Zo(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; )
    --n;
  return Dr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function Ni(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + Ni(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (i < 0 && (i += a), r = (t / Math.pow(10, i)).toPrecision(n + 1 + (a + i) % a), r.indexOf("e") === -1) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, a) + "." + r.substr(2 + a), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, l, o, c) {
      return l + o + c.substr(0, (a + i) % a) + "." + c.substr(i) + "E";
    });
  } else
    r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var Ii = /# (\?+)( ?)\/( ?)(\d+)/;
function Qo(e, t, r) {
  var n = parseInt(e[4], 10), a = Math.round(t * n), i = Math.floor(a / n), s = a - i * n, f = n;
  return r + (i === 0 ? "" : "" + i) + " " + (s === 0 ? ye(" ", e[1].length + 1 + e[4].length) : w0(s, e[1].length) + e[2] + "/" + e[3] + Er(f, e[4].length));
}
function el(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + ye(" ", e[1].length + 2 + e[4].length);
}
var ki = /^#*0*\.([0#]+)/, Pi = /\).*[0#]/, Li = /\(###\) ###\\?-####/;
function qe(e) {
  for (var t = "", r, n = 0; n != e.length; ++n)
    switch (r = e.charCodeAt(n)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function Oa(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function Ra(e, t) {
  var r = e - Math.floor(e), n = Math.pow(10, t);
  return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function rl(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function tl(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function ur(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Pi)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? ur("n", n, r) : "(" + ur("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return Zo(e, t, r);
  if (t.indexOf("%") !== -1)
    return Jo(e, t, r);
  if (t.indexOf("E") !== -1)
    return Ni(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + ur(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a, i, s, f, l = Math.abs(r), o = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return o + ot(l, t.length);
  if (t.match(/^[#?]+$/))
    return a = ot(r, 0), a === "0" && (a = ""), a.length > t.length ? a : qe(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(Ii))
    return Qo(i, l, o);
  if (t.match(/^#+0+$/))
    return o + ot(l, t.length - t.indexOf("0"));
  if (i = t.match(ki))
    return a = Oa(r, i[1].length).replace(/^([^\.]+)$/, "$1." + qe(i[1])).replace(/\.$/, "." + qe(i[1])).replace(/\.(\d*)$/, function(E, x) {
      return "." + x + ye("0", qe(i[1]).length - x.length);
    }), t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return o + Oa(l, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return o + br(ot(l, 0));
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + ur(e, t, -r) : br("" + (Math.floor(r) + rl(r, i[1].length))) + "." + Er(Ra(r, i[1].length), i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return ur(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return a = xt(ur(e, t.replace(/[\\-]/g, ""), r)), s = 0, xt(xt(t.replace(/\\/g, "")).replace(/[0#]/g, function(E) {
      return s < a.length ? a.charAt(s++) : E === "0" ? "0" : "";
    }));
  if (t.match(Li))
    return a = ur(e, "##########", r), "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
  var c = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(i[4].length, 7), f = hn(l, Math.pow(10, s) - 1, !1), a = "" + o, c = Dr("n", i[1], f[1]), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), a += c + i[2] + "/" + i[3], c = ln(f[2], s), c.length < i[4].length && (c = qe(i[4].substr(i[4].length - c.length)) + c), a += c, a;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = hn(l, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? w0(f[1], s) + i[2] + "/" + i[3] + ln(f[2], s) : ye(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return a = ot(r, 0), t.length <= a.length ? a : qe(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(/^([#0?]+)\.([#0]+)$/)) {
    a = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = a.indexOf(".");
    var p = t.indexOf(".") - s, u = t.length - a.length - p;
    return qe(t.substr(0, p) + a + t.substr(t.length - u));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return s = Ra(r, i[1].length), r < 0 ? "-" + ur(e, t, -r) : br(tl(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(E) {
      return "00," + (E.length < 3 ? Er(0, 3 - E.length) : "") + E;
    }) + "." + Er(s, i[1].length);
  switch (t) {
    case "###,##0.00":
      return ur(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var v = br(ot(l, 0));
      return v !== "0" ? o + v : "";
    case "###,###.00":
      return ur(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return ur(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function nl(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; )
    --n;
  return Dr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function al(e, t, r) {
  var n = t.replace(Di, ""), a = t.length - n.length;
  return Dr(e, n, r * Math.pow(10, 2 * a)) + ye("%", a);
}
function Bi(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + Bi(e, -t);
    var a = e.indexOf(".");
    a === -1 && (a = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % a;
    if (i < 0 && (i += a), r = (t / Math.pow(10, i)).toPrecision(n + 1 + (a + i) % a), !r.match(/[Ee]/)) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, l, o, c) {
      return l + o + c.substr(0, (a + i) % a) + "." + c.substr(i) + "E";
    });
  } else
    r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Sr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Pi)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Sr("n", n, r) : "(" + Sr("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return nl(e, t, r);
  if (t.indexOf("%") !== -1)
    return al(e, t, r);
  if (t.indexOf("E") !== -1)
    return Bi(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + Sr(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var a, i, s, f, l = Math.abs(r), o = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return o + Er(l, t.length);
  if (t.match(/^[#?]+$/))
    return a = "" + r, r === 0 && (a = ""), a.length > t.length ? a : qe(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(Ii))
    return el(i, l, o);
  if (t.match(/^#+0+$/))
    return o + Er(l, t.length - t.indexOf("0"));
  if (i = t.match(ki))
    return a = ("" + r).replace(/^([^\.]+)$/, "$1." + qe(i[1])).replace(/\.$/, "." + qe(i[1])), a = a.replace(/\.(\d*)$/, function(E, x) {
      return "." + x + ye("0", qe(i[1]).length - x.length);
    }), t.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return o + ("" + l).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return o + br("" + l);
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Sr(e, t, -r) : br("" + r) + "." + ye("0", i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return Sr(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return a = xt(Sr(e, t.replace(/[\\-]/g, ""), r)), s = 0, xt(xt(t.replace(/\\/g, "")).replace(/[0#]/g, function(E) {
      return s < a.length ? a.charAt(s++) : E === "0" ? "0" : "";
    }));
  if (t.match(Li))
    return a = Sr(e, "##########", r), "(" + a.substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
  var c = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(i[4].length, 7), f = hn(l, Math.pow(10, s) - 1, !1), a = "" + o, c = Dr("n", i[1], f[1]), c.charAt(c.length - 1) == " " && (c = c.substr(0, c.length - 1) + "0"), a += c + i[2] + "/" + i[3], c = ln(f[2], s), c.length < i[4].length && (c = qe(i[4].substr(i[4].length - c.length)) + c), a += c, a;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = hn(l, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? w0(f[1], s) + i[2] + "/" + i[3] + ln(f[2], s) : ye(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return a = "" + r, t.length <= a.length ? a : qe(t.substr(0, t.length - a.length)) + a;
  if (i = t.match(/^([#0]+)\.([#0]+)$/)) {
    a = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = a.indexOf(".");
    var p = t.indexOf(".") - s, u = t.length - a.length - p;
    return qe(t.substr(0, p) + a + t.substr(t.length - u));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + Sr(e, t, -r) : br("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(E) {
      return "00," + (E.length < 3 ? Er(0, 3 - E.length) : "") + E;
    }) + "." + Er(0, i[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var v = br("" + l);
      return v !== "0" ? o + v : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return Sr(e, t.slice(0, t.lastIndexOf(".")), r) + qe(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function Dr(e, t, r) {
  return (r | 0) === r ? Sr(e, t, r) : ur(e, t, r);
}
function il(e) {
  for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n)
    switch (e.charCodeAt(n)) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        t[t.length] = e.substr(a, n - a), a = n + 1;
    }
  if (t[t.length] = e.substr(a), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var Mi = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Ui(e) {
  for (var t = 0, r = "", n = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        cn(e, t) && (t += 6), t++;
        break;
      case '"':
        for (; e.charCodeAt(++t) !== 34 && t < e.length; )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "\u4E0A":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348")
          return !0;
        ++t;
        break;
      case "[":
        for (n = r; e.charAt(t++) !== "]" && t < e.length; )
          n += e.charAt(t);
        if (n.match(Mi))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function sl(e, t, r, n) {
  for (var a = [], i = "", s = 0, f = "", l = "t", o, c, p, u = "H"; s < e.length; )
    switch (f = e.charAt(s)) {
      case "G":
        if (!cn(e, s))
          throw new Error("unrecognized character " + f + " in " + e);
        a[a.length] = { t: "G", v: "General" }, s += 7;
        break;
      case '"':
        for (i = ""; (p = e.charCodeAt(++s)) !== 34 && s < e.length; )
          i += String.fromCharCode(p);
        a[a.length] = { t: "t", v: i }, ++s;
        break;
      case "\\":
        var v = e.charAt(++s), E = v === "(" || v === ")" ? v : "t";
        a[a.length] = { t: E, v }, ++s;
        break;
      case "_":
        a[a.length] = { t: "t", v: " " }, s += 2;
        break;
      case "@":
        a[a.length] = { t: "T", v: t }, ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (o == null && (o = Zt(t, r, e.charAt(s + 1) === "2"), o == null))
            return "";
          a[a.length] = { t: "X", v: e.substr(s, 2) }, l = f, s += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        f = f.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || o == null && (o = Zt(t, r), o == null))
          return "";
        for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; )
          i += f;
        f === "m" && l.toLowerCase() === "h" && (f = "M"), f === "h" && (f = u), a[a.length] = { t: f, v: i }, l = f;
        break;
      case "A":
      case "a":
      case "\u4E0A":
        var x = { t: f, v: f };
        if (o == null && (o = Zt(t, r)), e.substr(s, 3).toUpperCase() === "A/P" ? (o != null && (x.v = o.H >= 12 ? "P" : "A"), x.t = "T", u = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (o != null && (x.v = o.H >= 12 ? "PM" : "AM"), x.t = "T", s += 5, u = "h") : e.substr(s, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348" ? (o != null && (x.v = o.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"), x.t = "T", s += 5, u = "h") : (x.t = "t", ++s), o == null && x.t === "T")
          return "";
        a[a.length] = x, l = f;
        break;
      case "[":
        for (i = f; e.charAt(s++) !== "]" && s < e.length; )
          i += e.charAt(s);
        if (i.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + i + "|";
        if (i.match(Mi)) {
          if (o == null && (o = Zt(t, r), o == null))
            return "";
          a[a.length] = { t: "Z", v: i.toLowerCase() }, l = i.charAt(1);
        } else
          i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", Ui(e) || (a[a.length] = { t: "t", v: i }));
        break;
      case ".":
        if (o != null) {
          for (i = f; ++s < e.length && (f = e.charAt(s)) === "0"; )
            i += f;
          a[a.length] = { t: "s", v: i };
          break;
        }
      case "0":
      case "#":
        for (i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1; )
          i += f;
        a[a.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = f; e.charAt(++s) === f; )
          i += f;
        a[a.length] = { t: f, v: i }, l = f;
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        a[a.length] = { t: n === 1 ? "t" : f, v: f }, ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; )
          i += e.charAt(s);
        a[a.length] = { t: "D", v: i };
        break;
      case " ":
        a[a.length] = { t: f, v: f }, ++s;
        break;
      case "$":
        a[a.length] = { t: "t", v: "$" }, ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(f) === -1)
          throw new Error("unrecognized character " + f + " in " + e);
        a[a.length] = { t: "t", v: f }, ++s;
        break;
    }
  var _ = 0, O = 0, R;
  for (s = a.length - 1, l = "t"; s >= 0; --s)
    switch (a[s].t) {
      case "h":
      case "H":
        a[s].t = u, l = "h", _ < 1 && (_ = 1);
        break;
      case "s":
        (R = a[s].v.match(/\.0+$/)) && (O = Math.max(O, R[0].length - 1)), _ < 3 && (_ = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        l = a[s].t;
        break;
      case "m":
        l === "s" && (a[s].t = "M", _ < 2 && (_ = 2));
        break;
      case "X":
        break;
      case "Z":
        _ < 1 && a[s].v.match(/[Hh]/) && (_ = 1), _ < 2 && a[s].v.match(/[Mm]/) && (_ = 2), _ < 3 && a[s].v.match(/[Ss]/) && (_ = 3);
    }
  switch (_) {
    case 0:
      break;
    case 1:
      o.u >= 0.5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M), o.M >= 60 && (o.M = 0, ++o.H);
      break;
    case 2:
      o.u >= 0.5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M);
      break;
  }
  var y = "", M;
  for (s = 0; s < a.length; ++s)
    switch (a[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        a[s].v = "", a[s].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        a[s].v = qo(a[s].t.charCodeAt(0), a[s].v, o, O), a[s].t = "t";
        break;
      case "n":
      case "?":
        for (M = s + 1; a[M] != null && ((f = a[M].t) === "?" || f === "D" || (f === " " || f === "t") && a[M + 1] != null && (a[M + 1].t === "?" || a[M + 1].t === "t" && a[M + 1].v === "/") || a[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (a[M].v === "/" || a[M].v === " " && a[M + 1] != null && a[M + 1].t == "?")); )
          a[s].v += a[M].v, a[M] = { v: "", t: ";" }, ++M;
        y += a[s].v, s = M - 1;
        break;
      case "G":
        a[s].t = "t", a[s].v = c0(t, r);
        break;
    }
  var b = "", re, D;
  if (y.length > 0) {
    y.charCodeAt(0) == 40 ? (re = t < 0 && y.charCodeAt(0) === 45 ? -t : t, D = Dr("n", y, re)) : (re = t < 0 && n > 1 ? -t : t, D = Dr("n", y, re), re < 0 && a[0] && a[0].t == "t" && (D = D.substr(1), a[0].v = "-" + a[0].v)), M = D.length - 1;
    var H = a.length;
    for (s = 0; s < a.length; ++s)
      if (a[s] != null && a[s].t != "t" && a[s].v.indexOf(".") > -1) {
        H = s;
        break;
      }
    var L = a.length;
    if (H === a.length && D.indexOf("E") === -1) {
      for (s = a.length - 1; s >= 0; --s)
        a[s] == null || "n?".indexOf(a[s].t) === -1 || (M >= a[s].v.length - 1 ? (M -= a[s].v.length, a[s].v = D.substr(M + 1, a[s].v.length)) : M < 0 ? a[s].v = "" : (a[s].v = D.substr(0, M + 1), M = -1), a[s].t = "t", L = s);
      M >= 0 && L < a.length && (a[L].v = D.substr(0, M + 1) + a[L].v);
    } else if (H !== a.length && D.indexOf("E") === -1) {
      for (M = D.indexOf(".") - 1, s = H; s >= 0; --s)
        if (!(a[s] == null || "n?".indexOf(a[s].t) === -1)) {
          for (c = a[s].v.indexOf(".") > -1 && s === H ? a[s].v.indexOf(".") - 1 : a[s].v.length - 1, b = a[s].v.substr(c + 1); c >= 0; --c)
            M >= 0 && (a[s].v.charAt(c) === "0" || a[s].v.charAt(c) === "#") && (b = D.charAt(M--) + b);
          a[s].v = b, a[s].t = "t", L = s;
        }
      for (M >= 0 && L < a.length && (a[L].v = D.substr(0, M + 1) + a[L].v), M = D.indexOf(".") + 1, s = H; s < a.length; ++s)
        if (!(a[s] == null || "n?(".indexOf(a[s].t) === -1 && s !== H)) {
          for (c = a[s].v.indexOf(".") > -1 && s === H ? a[s].v.indexOf(".") + 1 : 0, b = a[s].v.substr(0, c); c < a[s].v.length; ++c)
            M < D.length && (b += D.charAt(M++));
          a[s].v = b, a[s].t = "t", L = s;
        }
    }
  }
  for (s = 0; s < a.length; ++s)
    a[s] != null && "n?".indexOf(a[s].t) > -1 && (re = n > 1 && t < 0 && s > 0 && a[s - 1].v === "-" ? -t : t, a[s].v = Dr(a[s].t, a[s].v, re), a[s].t = "t");
  var G = "";
  for (s = 0; s !== a.length; ++s)
    a[s] != null && (G += a[s].v);
  return G;
}
var Da = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Na(e, t) {
  if (t == null)
    return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function fl(e, t) {
  var r = il(e), n = r.length, a = r[n - 1].indexOf("@");
  if (n < 4 && a > -1 && --n, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || a > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = a > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [n, i];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(Da), f = r[1].match(Da);
    return Na(t, s) ? [n, r[0]] : Na(t, f) ? [n, r[1]] : [n, r[s != null && f != null ? 2 : 1]];
  }
  return [n, i];
}
function Wr(e, t, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : Ce)[e], n == null && (n = r.table && r.table[Ca[e]] || Ce[Ca[e]]), n == null && (n = Vo[e] || "General");
      break;
  }
  if (cn(n, 0))
    return c0(t, r);
  t instanceof Date && (t = Ri(t, r.date1904));
  var a = fl(n, t);
  if (cn(a[1]))
    return c0(t, r);
  if (t === !0)
    t = "TRUE";
  else if (t === !1)
    t = "FALSE";
  else if (t === "" || t == null)
    return "";
  return sl(a[1], t, r, a[0]);
}
function bi(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (Ce[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (Ce[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return Ce[t] = e, t;
}
function Cn(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && bi(e[t], t);
}
function On() {
  Ce = Ho();
}
var Wi = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function ol(e) {
  var t = typeof e == "number" ? Ce[e] : e;
  return t = t.replace(Wi, "(\\d+)"), new RegExp("^" + t + "$");
}
function ll(e, t, r) {
  var n = -1, a = -1, i = -1, s = -1, f = -1, l = -1;
  (t.match(Wi) || []).forEach(function(p, u) {
    var v = parseInt(r[u + 1], 10);
    switch (p.toLowerCase().charAt(0)) {
      case "y":
        n = v;
        break;
      case "d":
        i = v;
        break;
      case "h":
        s = v;
        break;
      case "s":
        l = v;
        break;
      case "m":
        s >= 0 ? f = v : a = v;
        break;
    }
  }), l >= 0 && f == -1 && a >= 0 && (f = a, a = -1);
  var o = ("" + (n >= 0 ? n : new Date().getFullYear())).slice(-4) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  o.length == 7 && (o = "0" + o), o.length == 8 && (o = "20" + o);
  var c = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (l >= 0 ? l : 0)).slice(-2);
  return s == -1 && f == -1 && l == -1 ? o : n == -1 && a == -1 && i == -1 ? c : o + "T" + c;
}
var cl = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var D = 0, H = new Array(256), L = 0; L != 256; ++L)
      D = L, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, D = D & 1 ? -306674912 ^ D >>> 1 : D >>> 1, H[L] = D;
    return typeof Int32Array < "u" ? new Int32Array(H) : H;
  }
  var r = t();
  function n(D) {
    var H = 0, L = 0, G = 0, z = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (G = 0; G != 256; ++G)
      z[G] = D[G];
    for (G = 0; G != 256; ++G)
      for (L = D[G], H = 256 + G; H < 4096; H += 256)
        L = z[H] = L >>> 8 ^ D[L & 255];
    var j = [];
    for (G = 1; G != 16; ++G)
      j[G - 1] = typeof Int32Array < "u" ? z.subarray(G * 256, G * 256 + 256) : z.slice(G * 256, G * 256 + 256);
    return j;
  }
  var a = n(r), i = a[0], s = a[1], f = a[2], l = a[3], o = a[4], c = a[5], p = a[6], u = a[7], v = a[8], E = a[9], x = a[10], _ = a[11], O = a[12], R = a[13], y = a[14];
  function M(D, H) {
    for (var L = H ^ -1, G = 0, z = D.length; G < z; )
      L = L >>> 8 ^ r[(L ^ D.charCodeAt(G++)) & 255];
    return ~L;
  }
  function b(D, H) {
    for (var L = H ^ -1, G = D.length - 15, z = 0; z < G; )
      L = y[D[z++] ^ L & 255] ^ R[D[z++] ^ L >> 8 & 255] ^ O[D[z++] ^ L >> 16 & 255] ^ _[D[z++] ^ L >>> 24] ^ x[D[z++]] ^ E[D[z++]] ^ v[D[z++]] ^ u[D[z++]] ^ p[D[z++]] ^ c[D[z++]] ^ o[D[z++]] ^ l[D[z++]] ^ f[D[z++]] ^ s[D[z++]] ^ i[D[z++]] ^ r[D[z++]];
    for (G += 15; z < G; )
      L = L >>> 8 ^ r[(L ^ D[z++]) & 255];
    return ~L;
  }
  function re(D, H) {
    for (var L = H ^ -1, G = 0, z = D.length, j = 0, Q = 0; G < z; )
      j = D.charCodeAt(G++), j < 128 ? L = L >>> 8 ^ r[(L ^ j) & 255] : j < 2048 ? (L = L >>> 8 ^ r[(L ^ (192 | j >> 6 & 31)) & 255], L = L >>> 8 ^ r[(L ^ (128 | j & 63)) & 255]) : j >= 55296 && j < 57344 ? (j = (j & 1023) + 64, Q = D.charCodeAt(G++) & 1023, L = L >>> 8 ^ r[(L ^ (240 | j >> 8 & 7)) & 255], L = L >>> 8 ^ r[(L ^ (128 | j >> 2 & 63)) & 255], L = L >>> 8 ^ r[(L ^ (128 | Q >> 6 & 15 | (j & 3) << 4)) & 255], L = L >>> 8 ^ r[(L ^ (128 | Q & 63)) & 255]) : (L = L >>> 8 ^ r[(L ^ (224 | j >> 12 & 15)) & 255], L = L >>> 8 ^ r[(L ^ (128 | j >> 6 & 63)) & 255], L = L >>> 8 ^ r[(L ^ (128 | j & 63)) & 255]);
    return ~L;
  }
  return e.table = r, e.bstr = M, e.buf = b, e.str = re, e;
}(), Ee = /* @__PURE__ */ function() {
  var t = {};
  t.version = "1.2.1";
  function r(d, T) {
    for (var m = d.split("/"), g = T.split("/"), w = 0, S = 0, I = Math.min(m.length, g.length); w < I; ++w) {
      if (S = m[w].length - g[w].length)
        return S;
      if (m[w] != g[w])
        return m[w] < g[w] ? -1 : 1;
    }
    return m.length - g.length;
  }
  function n(d) {
    if (d.charAt(d.length - 1) == "/")
      return d.slice(0, -1).indexOf("/") === -1 ? d : n(d.slice(0, -1));
    var T = d.lastIndexOf("/");
    return T === -1 ? d : d.slice(0, T + 1);
  }
  function a(d) {
    if (d.charAt(d.length - 1) == "/")
      return a(d.slice(0, -1));
    var T = d.lastIndexOf("/");
    return T === -1 ? d : d.slice(T + 1);
  }
  function i(d, T) {
    typeof T == "string" && (T = new Date(T));
    var m = T.getHours();
    m = m << 6 | T.getMinutes(), m = m << 5 | T.getSeconds() >>> 1, d.write_shift(2, m);
    var g = T.getFullYear() - 1980;
    g = g << 4 | T.getMonth() + 1, g = g << 5 | T.getDate(), d.write_shift(2, g);
  }
  function s(d) {
    var T = d.read_shift(2) & 65535, m = d.read_shift(2) & 65535, g = new Date(), w = m & 31;
    m >>>= 5;
    var S = m & 15;
    m >>>= 4, g.setMilliseconds(0), g.setFullYear(m + 1980), g.setMonth(S - 1), g.setDate(w);
    var I = T & 31;
    T >>>= 5;
    var W = T & 63;
    return T >>>= 6, g.setHours(T), g.setMinutes(W), g.setSeconds(I << 1), g;
  }
  function f(d) {
    sr(d, 0);
    for (var T = {}, m = 0; d.l <= d.length - 4; ) {
      var g = d.read_shift(2), w = d.read_shift(2), S = d.l + w, I = {};
      switch (g) {
        case 21589:
          m = d.read_shift(1), m & 1 && (I.mtime = d.read_shift(4)), w > 5 && (m & 2 && (I.atime = d.read_shift(4)), m & 4 && (I.ctime = d.read_shift(4))), I.mtime && (I.mt = new Date(I.mtime * 1e3));
          break;
      }
      d.l = S, T[g] = I;
    }
    return T;
  }
  var l;
  function o() {
    return l || (l = {});
  }
  function c(d, T) {
    if (d[0] == 80 && d[1] == 75)
      return Z0(d, T);
    if ((d[0] | 32) == 109 && (d[1] | 32) == 105)
      return mf(d, T);
    if (d.length < 512)
      throw new Error("CFB file size " + d.length + " < 512");
    var m = 3, g = 512, w = 0, S = 0, I = 0, W = 0, N = 0, k = [], P = d.slice(0, 512);
    sr(P, 0);
    var K = p(P);
    switch (m = K[0], m) {
      case 3:
        g = 512;
        break;
      case 4:
        g = 4096;
        break;
      case 0:
        if (K[1] == 0)
          return Z0(d, T);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + m);
    }
    g !== 512 && (P = d.slice(0, g), sr(P, 28));
    var Z = d.slice(0, g);
    u(P, m);
    var ne = P.read_shift(4, "i");
    if (m === 3 && ne !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + ne);
    P.l += 4, I = P.read_shift(4, "i"), P.l += 4, P.chk("00100000", "Mini Stream Cutoff Size: "), W = P.read_shift(4, "i"), w = P.read_shift(4, "i"), N = P.read_shift(4, "i"), S = P.read_shift(4, "i");
    for (var Y = -1, te = 0; te < 109 && (Y = P.read_shift(4, "i"), !(Y < 0)); ++te)
      k[te] = Y;
    var le = v(d, g);
    _(N, S, le, g, k);
    var Se = R(le, I, k, g);
    Se[I].name = "!Directory", w > 0 && W !== Q && (Se[W].name = "!MiniFAT"), Se[k[0]].name = "!FAT", Se.fat_addrs = k, Se.ssz = g;
    var Ae = {}, je = [], Ft = [], yt = [];
    y(I, Se, le, je, w, Ae, Ft, W), E(Ft, yt, je), je.shift();
    var Ct = {
      FileIndex: Ft,
      FullPaths: yt
    };
    return T && T.raw && (Ct.raw = { header: Z, sectors: le }), Ct;
  }
  function p(d) {
    if (d[d.l] == 80 && d[d.l + 1] == 75)
      return [0, 0];
    d.chk(he, "Header Signature: "), d.l += 16;
    var T = d.read_shift(2, "u");
    return [d.read_shift(2, "u"), T];
  }
  function u(d, T) {
    var m = 9;
    switch (d.l += 2, m = d.read_shift(2)) {
      case 9:
        if (T != 3)
          throw new Error("Sector Shift: Expected 9 saw " + m);
        break;
      case 12:
        if (T != 4)
          throw new Error("Sector Shift: Expected 12 saw " + m);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + m);
    }
    d.chk("0600", "Mini Sector Shift: "), d.chk("000000000000", "Reserved: ");
  }
  function v(d, T) {
    for (var m = Math.ceil(d.length / T) - 1, g = [], w = 1; w < m; ++w)
      g[w - 1] = d.slice(w * T, (w + 1) * T);
    return g[m - 1] = d.slice(m * T), g;
  }
  function E(d, T, m) {
    for (var g = 0, w = 0, S = 0, I = 0, W = 0, N = m.length, k = [], P = []; g < N; ++g)
      k[g] = P[g] = g, T[g] = m[g];
    for (; W < P.length; ++W)
      g = P[W], w = d[g].L, S = d[g].R, I = d[g].C, k[g] === g && (w !== -1 && k[w] !== w && (k[g] = k[w]), S !== -1 && k[S] !== S && (k[g] = k[S])), I !== -1 && (k[I] = g), w !== -1 && g != k[g] && (k[w] = k[g], P.lastIndexOf(w) < W && P.push(w)), S !== -1 && g != k[g] && (k[S] = k[g], P.lastIndexOf(S) < W && P.push(S));
    for (g = 1; g < N; ++g)
      k[g] === g && (S !== -1 && k[S] !== S ? k[g] = k[S] : w !== -1 && k[w] !== w && (k[g] = k[w]));
    for (g = 1; g < N; ++g)
      if (d[g].type !== 0) {
        if (W = g, W != k[W])
          do
            W = k[W], T[g] = T[W] + "/" + T[g];
          while (W !== 0 && k[W] !== -1 && W != k[W]);
        k[g] = -1;
      }
    for (T[0] += "/", g = 1; g < N; ++g)
      d[g].type !== 2 && (T[g] += "/");
  }
  function x(d, T, m) {
    for (var g = d.start, w = d.size, S = [], I = g; m && w > 0 && I >= 0; )
      S.push(T.slice(I * j, I * j + j)), w -= j, I = Kr(m, I * 4);
    return S.length === 0 ? U(0) : He(S).slice(0, d.size);
  }
  function _(d, T, m, g, w) {
    var S = Q;
    if (d === Q) {
      if (T !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (d !== -1) {
      var I = m[d], W = (g >>> 2) - 1;
      if (!I)
        return;
      for (var N = 0; N < W && (S = Kr(I, N * 4)) !== Q; ++N)
        w.push(S);
      _(Kr(I, g - 4), T - 1, m, g, w);
    }
  }
  function O(d, T, m, g, w) {
    var S = [], I = [];
    w || (w = []);
    var W = g - 1, N = 0, k = 0;
    for (N = T; N >= 0; ) {
      w[N] = !0, S[S.length] = N, I.push(d[N]);
      var P = m[Math.floor(N * 4 / g)];
      if (k = N * 4 & W, g < 4 + k)
        throw new Error("FAT boundary crossed: " + N + " 4 " + g);
      if (!d[P])
        break;
      N = Kr(d[P], k);
    }
    return { nodes: S, data: ba([I]) };
  }
  function R(d, T, m, g) {
    var w = d.length, S = [], I = [], W = [], N = [], k = g - 1, P = 0, K = 0, Z = 0, ne = 0;
    for (P = 0; P < w; ++P)
      if (W = [], Z = P + T, Z >= w && (Z -= w), !I[Z]) {
        N = [];
        var Y = [];
        for (K = Z; K >= 0; ) {
          Y[K] = !0, I[K] = !0, W[W.length] = K, N.push(d[K]);
          var te = m[Math.floor(K * 4 / g)];
          if (ne = K * 4 & k, g < 4 + ne)
            throw new Error("FAT boundary crossed: " + K + " 4 " + g);
          if (!d[te] || (K = Kr(d[te], ne), Y[K]))
            break;
        }
        S[Z] = { nodes: W, data: ba([N]) };
      }
    return S;
  }
  function y(d, T, m, g, w, S, I, W) {
    for (var N = 0, k = g.length ? 2 : 0, P = T[d].data, K = 0, Z = 0, ne; K < P.length; K += 128) {
      var Y = P.slice(K, K + 128);
      sr(Y, 64), Z = Y.read_shift(2), ne = O0(Y, 0, Z - k), g.push(ne);
      var te = {
        name: ne,
        type: Y.read_shift(1),
        color: Y.read_shift(1),
        L: Y.read_shift(4, "i"),
        R: Y.read_shift(4, "i"),
        C: Y.read_shift(4, "i"),
        clsid: Y.read_shift(16),
        state: Y.read_shift(4, "i"),
        start: 0,
        size: 0
      }, le = Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2);
      le !== 0 && (te.ct = M(Y, Y.l - 8));
      var Se = Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2);
      Se !== 0 && (te.mt = M(Y, Y.l - 8)), te.start = Y.read_shift(4, "i"), te.size = Y.read_shift(4, "i"), te.size < 0 && te.start < 0 && (te.size = te.type = 0, te.start = Q, te.name = ""), te.type === 5 ? (N = te.start, w > 0 && N !== Q && (T[N].name = "!StreamData")) : te.size >= 4096 ? (te.storage = "fat", T[te.start] === void 0 && (T[te.start] = O(m, te.start, T.fat_addrs, T.ssz)), T[te.start].name = te.name, te.content = T[te.start].data.slice(0, te.size)) : (te.storage = "minifat", te.size < 0 ? te.size = 0 : N !== Q && te.start !== Q && T[N] && (te.content = x(te, T[N].data, (T[W] || {}).data))), te.content && sr(te.content, 0), S[ne] = te, I.push(te);
    }
  }
  function M(d, T) {
    return new Date((or(d, T + 4) / 1e7 * Math.pow(2, 32) + or(d, T) / 1e7 - 11644473600) * 1e3);
  }
  function b(d, T) {
    return o(), c(l.readFileSync(d), T);
  }
  function re(d, T) {
    var m = T && T.type;
    switch (m || de && Buffer.isBuffer(d) && (m = "buffer"), m || "base64") {
      case "file":
        return b(d, T);
      case "base64":
        return c(_r(kr(d)), T);
      case "binary":
        return c(_r(d), T);
    }
    return c(d, T);
  }
  function D(d, T) {
    var m = T || {}, g = m.root || "Root Entry";
    if (d.FullPaths || (d.FullPaths = []), d.FileIndex || (d.FileIndex = []), d.FullPaths.length !== d.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    d.FullPaths.length === 0 && (d.FullPaths[0] = g + "/", d.FileIndex[0] = { name: g, type: 5 }), m.CLSID && (d.FileIndex[0].clsid = m.CLSID), H(d);
  }
  function H(d) {
    var T = "Sh33tJ5";
    if (!Ee.find(d, "/" + T)) {
      var m = U(4);
      m[0] = 55, m[1] = m[3] = 50, m[2] = 54, d.FileIndex.push({ name: T, type: 2, content: m, size: 4, L: 69, R: 69, C: 69 }), d.FullPaths.push(d.FullPaths[0] + T), L(d);
    }
  }
  function L(d, T) {
    D(d);
    for (var m = !1, g = !1, w = d.FullPaths.length - 1; w >= 0; --w) {
      var S = d.FileIndex[w];
      switch (S.type) {
        case 0:
          g ? m = !0 : (d.FileIndex.pop(), d.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          g = !0, isNaN(S.R * S.L * S.C) && (m = !0), S.R > -1 && S.L > -1 && S.R == S.L && (m = !0);
          break;
        default:
          m = !0;
          break;
      }
    }
    if (!(!m && !T)) {
      var I = new Date(1987, 1, 19), W = 0, N = Object.create ? /* @__PURE__ */ Object.create(null) : {}, k = [];
      for (w = 0; w < d.FullPaths.length; ++w)
        N[d.FullPaths[w]] = !0, d.FileIndex[w].type !== 0 && k.push([d.FullPaths[w], d.FileIndex[w]]);
      for (w = 0; w < k.length; ++w) {
        var P = n(k[w][0]);
        g = N[P], g || (k.push([P, {
          name: a(P).replace("/", ""),
          type: 1,
          clsid: Oe,
          ct: I,
          mt: I,
          content: null
        }]), N[P] = !0);
      }
      for (k.sort(function(ne, Y) {
        return r(ne[0], Y[0]);
      }), d.FullPaths = [], d.FileIndex = [], w = 0; w < k.length; ++w)
        d.FullPaths[w] = k[w][0], d.FileIndex[w] = k[w][1];
      for (w = 0; w < k.length; ++w) {
        var K = d.FileIndex[w], Z = d.FullPaths[w];
        if (K.name = a(Z).replace("/", ""), K.L = K.R = K.C = -(K.color = 1), K.size = K.content ? K.content.length : 0, K.start = 0, K.clsid = K.clsid || Oe, w === 0)
          K.C = k.length > 1 ? 1 : -1, K.size = 0, K.type = 5;
        else if (Z.slice(-1) == "/") {
          for (W = w + 1; W < k.length && n(d.FullPaths[W]) != Z; ++W)
            ;
          for (K.C = W >= k.length ? -1 : W, W = w + 1; W < k.length && n(d.FullPaths[W]) != n(Z); ++W)
            ;
          K.R = W >= k.length ? -1 : W, K.type = 1;
        } else
          n(d.FullPaths[w + 1] || "") == n(Z) && (K.R = w + 1), K.type = 2;
      }
    }
  }
  function G(d, T) {
    var m = T || {};
    if (m.fileType == "mad")
      return gf(d, m);
    switch (L(d), m.fileType) {
      case "zip":
        return hf(d, m);
    }
    var g = function(ne) {
      for (var Y = 0, te = 0, le = 0; le < ne.FileIndex.length; ++le) {
        var Se = ne.FileIndex[le];
        if (!!Se.content) {
          var Ae = Se.content.length;
          Ae > 0 && (Ae < 4096 ? Y += Ae + 63 >> 6 : te += Ae + 511 >> 9);
        }
      }
      for (var je = ne.FullPaths.length + 3 >> 2, Ft = Y + 7 >> 3, yt = Y + 127 >> 7, Ct = Ft + te + je + yt, jr = Ct + 127 >> 7, Un = jr <= 109 ? 0 : Math.ceil((jr - 109) / 127); Ct + jr + Un + 127 >> 7 > jr; )
        Un = ++jr <= 109 ? 0 : Math.ceil((jr - 109) / 127);
      var Or = [1, Un, jr, yt, je, te, Y, 0];
      return ne.FileIndex[0].size = Y << 6, Or[7] = (ne.FileIndex[0].start = Or[0] + Or[1] + Or[2] + Or[3] + Or[4] + Or[5]) + (Or[6] + 7 >> 3), Or;
    }(d), w = U(g[7] << 9), S = 0, I = 0;
    {
      for (S = 0; S < 8; ++S)
        w.write_shift(1, oe[S]);
      for (S = 0; S < 8; ++S)
        w.write_shift(2, 0);
      for (w.write_shift(2, 62), w.write_shift(2, 3), w.write_shift(2, 65534), w.write_shift(2, 9), w.write_shift(2, 6), S = 0; S < 3; ++S)
        w.write_shift(2, 0);
      for (w.write_shift(4, 0), w.write_shift(4, g[2]), w.write_shift(4, g[0] + g[1] + g[2] + g[3] - 1), w.write_shift(4, 0), w.write_shift(4, 1 << 12), w.write_shift(4, g[3] ? g[0] + g[1] + g[2] - 1 : Q), w.write_shift(4, g[3]), w.write_shift(-4, g[1] ? g[0] - 1 : Q), w.write_shift(4, g[1]), S = 0; S < 109; ++S)
        w.write_shift(-4, S < g[2] ? g[1] + S : -1);
    }
    if (g[1])
      for (I = 0; I < g[1]; ++I) {
        for (; S < 236 + I * 127; ++S)
          w.write_shift(-4, S < g[2] ? g[1] + S : -1);
        w.write_shift(-4, I === g[1] - 1 ? Q : I + 1);
      }
    var W = function(ne) {
      for (I += ne; S < I - 1; ++S)
        w.write_shift(-4, S + 1);
      ne && (++S, w.write_shift(-4, Q));
    };
    for (I = S = 0, I += g[1]; S < I; ++S)
      w.write_shift(-4, Re.DIFSECT);
    for (I += g[2]; S < I; ++S)
      w.write_shift(-4, Re.FATSECT);
    W(g[3]), W(g[4]);
    for (var N = 0, k = 0, P = d.FileIndex[0]; N < d.FileIndex.length; ++N)
      P = d.FileIndex[N], P.content && (k = P.content.length, !(k < 4096) && (P.start = I, W(k + 511 >> 9)));
    for (W(g[6] + 7 >> 3); w.l & 511; )
      w.write_shift(-4, Re.ENDOFCHAIN);
    for (I = S = 0, N = 0; N < d.FileIndex.length; ++N)
      P = d.FileIndex[N], P.content && (k = P.content.length, !(!k || k >= 4096) && (P.start = I, W(k + 63 >> 6)));
    for (; w.l & 511; )
      w.write_shift(-4, Re.ENDOFCHAIN);
    for (S = 0; S < g[4] << 2; ++S) {
      var K = d.FullPaths[S];
      if (!K || K.length === 0) {
        for (N = 0; N < 17; ++N)
          w.write_shift(4, 0);
        for (N = 0; N < 3; ++N)
          w.write_shift(4, -1);
        for (N = 0; N < 12; ++N)
          w.write_shift(4, 0);
        continue;
      }
      P = d.FileIndex[S], S === 0 && (P.start = P.size ? P.start - 1 : Q);
      var Z = S === 0 && m.root || P.name;
      if (k = 2 * (Z.length + 1), w.write_shift(64, Z, "utf16le"), w.write_shift(2, k), w.write_shift(1, P.type), w.write_shift(1, P.color), w.write_shift(-4, P.L), w.write_shift(-4, P.R), w.write_shift(-4, P.C), P.clsid)
        w.write_shift(16, P.clsid, "hex");
      else
        for (N = 0; N < 4; ++N)
          w.write_shift(4, 0);
      w.write_shift(4, P.state || 0), w.write_shift(4, 0), w.write_shift(4, 0), w.write_shift(4, 0), w.write_shift(4, 0), w.write_shift(4, P.start), w.write_shift(4, P.size), w.write_shift(4, 0);
    }
    for (S = 1; S < d.FileIndex.length; ++S)
      if (P = d.FileIndex[S], P.size >= 4096)
        if (w.l = P.start + 1 << 9, de && Buffer.isBuffer(P.content))
          P.content.copy(w, w.l, 0, P.size), w.l += P.size + 511 & -512;
        else {
          for (N = 0; N < P.size; ++N)
            w.write_shift(1, P.content[N]);
          for (; N & 511; ++N)
            w.write_shift(1, 0);
        }
    for (S = 1; S < d.FileIndex.length; ++S)
      if (P = d.FileIndex[S], P.size > 0 && P.size < 4096)
        if (de && Buffer.isBuffer(P.content))
          P.content.copy(w, w.l, 0, P.size), w.l += P.size + 63 & -64;
        else {
          for (N = 0; N < P.size; ++N)
            w.write_shift(1, P.content[N]);
          for (; N & 63; ++N)
            w.write_shift(1, 0);
        }
    if (de)
      w.l = w.length;
    else
      for (; w.l < w.length; )
        w.write_shift(1, 0);
    return w;
  }
  function z(d, T) {
    var m = d.FullPaths.map(function(N) {
      return N.toUpperCase();
    }), g = m.map(function(N) {
      var k = N.split("/");
      return k[k.length - (N.slice(-1) == "/" ? 2 : 1)];
    }), w = !1;
    T.charCodeAt(0) === 47 ? (w = !0, T = m[0].slice(0, -1) + T) : w = T.indexOf("/") !== -1;
    var S = T.toUpperCase(), I = w === !0 ? m.indexOf(S) : g.indexOf(S);
    if (I !== -1)
      return d.FileIndex[I];
    var W = !S.match(Jt);
    for (S = S.replace(Dt, ""), W && (S = S.replace(Jt, "!")), I = 0; I < m.length; ++I)
      if ((W ? m[I].replace(Jt, "!") : m[I]).replace(Dt, "") == S || (W ? g[I].replace(Jt, "!") : g[I]).replace(Dt, "") == S)
        return d.FileIndex[I];
    return null;
  }
  var j = 64, Q = -2, he = "d0cf11e0a1b11ae1", oe = [208, 207, 17, 224, 161, 177, 26, 225], Oe = "00000000000000000000000000000000", Re = {
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: Q,
    FREESECT: -1,
    HEADER_SIGNATURE: he,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: Oe,
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function pr(d, T, m) {
    o();
    var g = G(d, m);
    l.writeFileSync(T, g);
  }
  function Pe(d) {
    for (var T = new Array(d.length), m = 0; m < d.length; ++m)
      T[m] = String.fromCharCode(d[m]);
    return T.join("");
  }
  function cr(d, T) {
    var m = G(d, T);
    switch (T && T.type || "buffer") {
      case "file":
        return o(), l.writeFileSync(T.filename, m), m;
      case "binary":
        return typeof m == "string" ? m : Pe(m);
      case "base64":
        return Mt(typeof m == "string" ? m : Pe(m));
      case "buffer":
        if (de)
          return Buffer.isBuffer(m) ? m : Lr(m);
      case "array":
        return typeof m == "string" ? _r(m) : m;
    }
    return m;
  }
  var nr;
  function A(d) {
    try {
      var T = d.InflateRaw, m = new T();
      if (m._processChunk(new Uint8Array([3, 0]), m._finishFlushFlag), m.bytesRead)
        nr = d;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (g) {
      console.error("cannot use native zlib: " + (g.message || g));
    }
  }
  function B(d, T) {
    if (!nr)
      return q0(d, T);
    var m = nr.InflateRaw, g = new m(), w = g._processChunk(d.slice(d.l), g._finishFlushFlag);
    return d.l += g.bytesRead, w;
  }
  function C(d) {
    return nr ? nr.deflateRawSync(d) : X0(d);
  }
  var F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], X = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], se = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function fe(d) {
    var T = (d << 1 | d << 11) & 139536 | (d << 5 | d << 15) & 558144;
    return (T >> 16 | T >> 8 | T) & 255;
  }
  for (var ie = typeof Uint8Array < "u", ee = ie ? new Uint8Array(1 << 8) : [], Te = 0; Te < 1 << 8; ++Te)
    ee[Te] = fe(Te);
  function ue(d, T) {
    var m = ee[d & 255];
    return T <= 8 ? m >>> 8 - T : (m = m << 8 | ee[d >> 8 & 255], T <= 16 ? m >>> 16 - T : (m = m << 8 | ee[d >> 16 & 255], m >>> 24 - T));
  }
  function Ye(d, T) {
    var m = T & 7, g = T >>> 3;
    return (d[g] | (m <= 6 ? 0 : d[g + 1] << 8)) >>> m & 3;
  }
  function pe(d, T) {
    var m = T & 7, g = T >>> 3;
    return (d[g] | (m <= 5 ? 0 : d[g + 1] << 8)) >>> m & 7;
  }
  function yr(d, T) {
    var m = T & 7, g = T >>> 3;
    return (d[g] | (m <= 4 ? 0 : d[g + 1] << 8)) >>> m & 15;
  }
  function Fe(d, T) {
    var m = T & 7, g = T >>> 3;
    return (d[g] | (m <= 3 ? 0 : d[g + 1] << 8)) >>> m & 31;
  }
  function ae(d, T) {
    var m = T & 7, g = T >>> 3;
    return (d[g] | (m <= 1 ? 0 : d[g + 1] << 8)) >>> m & 127;
  }
  function hr(d, T, m) {
    var g = T & 7, w = T >>> 3, S = (1 << m) - 1, I = d[w] >>> g;
    return m < 8 - g || (I |= d[w + 1] << 8 - g, m < 16 - g) || (I |= d[w + 2] << 16 - g, m < 24 - g) || (I |= d[w + 3] << 24 - g), I & S;
  }
  function Cr(d, T, m) {
    var g = T & 7, w = T >>> 3;
    return g <= 5 ? d[w] |= (m & 7) << g : (d[w] |= m << g & 255, d[w + 1] = (m & 7) >> 8 - g), T + 3;
  }
  function Xr(d, T, m) {
    var g = T & 7, w = T >>> 3;
    return m = (m & 1) << g, d[w] |= m, T + 1;
  }
  function it(d, T, m) {
    var g = T & 7, w = T >>> 3;
    return m <<= g, d[w] |= m & 255, m >>>= 8, d[w + 1] = m, T + 8;
  }
  function G0(d, T, m) {
    var g = T & 7, w = T >>> 3;
    return m <<= g, d[w] |= m & 255, m >>>= 8, d[w + 1] = m & 255, d[w + 2] = m >>> 8, T + 16;
  }
  function Pn(d, T) {
    var m = d.length, g = 2 * m > T ? 2 * m : T + 5, w = 0;
    if (m >= T)
      return d;
    if (de) {
      var S = Aa(g);
      if (d.copy)
        d.copy(S);
      else
        for (; w < d.length; ++w)
          S[w] = d[w];
      return S;
    } else if (ie) {
      var I = new Uint8Array(g);
      if (I.set)
        I.set(d);
      else
        for (; w < m; ++w)
          I[w] = d[w];
      return I;
    }
    return d.length = g, d;
  }
  function wr(d) {
    for (var T = new Array(d), m = 0; m < d; ++m)
      T[m] = 0;
    return T;
  }
  function Kt(d, T, m) {
    var g = 1, w = 0, S = 0, I = 0, W = 0, N = d.length, k = ie ? new Uint16Array(32) : wr(32);
    for (S = 0; S < 32; ++S)
      k[S] = 0;
    for (S = N; S < m; ++S)
      d[S] = 0;
    N = d.length;
    var P = ie ? new Uint16Array(N) : wr(N);
    for (S = 0; S < N; ++S)
      k[w = d[S]]++, g < w && (g = w), P[S] = 0;
    for (k[0] = 0, S = 1; S <= g; ++S)
      k[S + 16] = W = W + k[S - 1] << 1;
    for (S = 0; S < N; ++S)
      W = d[S], W != 0 && (P[S] = k[W + 16]++);
    var K = 0;
    for (S = 0; S < N; ++S)
      if (K = d[S], K != 0)
        for (W = ue(P[S], g) >> g - K, I = (1 << g + 4 - K) - 1; I >= 0; --I)
          T[W | I << K] = K & 15 | S << 4;
    return g;
  }
  var Ln = ie ? new Uint16Array(512) : wr(512), Bn = ie ? new Uint16Array(32) : wr(32);
  if (!ie) {
    for (var $r = 0; $r < 512; ++$r)
      Ln[$r] = 0;
    for ($r = 0; $r < 32; ++$r)
      Bn[$r] = 0;
  }
  (function() {
    for (var d = [], T = 0; T < 32; T++)
      d.push(5);
    Kt(d, Bn, 32);
    var m = [];
    for (T = 0; T <= 143; T++)
      m.push(8);
    for (; T <= 255; T++)
      m.push(9);
    for (; T <= 279; T++)
      m.push(7);
    for (; T <= 287; T++)
      m.push(8);
    Kt(m, Ln, 288);
  })();
  var ff = /* @__PURE__ */ function() {
    for (var T = ie ? new Uint8Array(32768) : [], m = 0, g = 0; m < se.length - 1; ++m)
      for (; g < se[m + 1]; ++g)
        T[g] = m;
    for (; g < 32768; ++g)
      T[g] = 29;
    var w = ie ? new Uint8Array(259) : [];
    for (m = 0, g = 0; m < X.length - 1; ++m)
      for (; g < X[m + 1]; ++g)
        w[g] = m;
    function S(W, N) {
      for (var k = 0; k < W.length; ) {
        var P = Math.min(65535, W.length - k), K = k + P == W.length;
        for (N.write_shift(1, +K), N.write_shift(2, P), N.write_shift(2, ~P & 65535); P-- > 0; )
          N[N.l++] = W[k++];
      }
      return N.l;
    }
    function I(W, N) {
      for (var k = 0, P = 0, K = ie ? new Uint16Array(32768) : []; P < W.length; ) {
        var Z = Math.min(65535, W.length - P);
        if (Z < 10) {
          for (k = Cr(N, k, +(P + Z == W.length)), k & 7 && (k += 8 - (k & 7)), N.l = k / 8 | 0, N.write_shift(2, Z), N.write_shift(2, ~Z & 65535); Z-- > 0; )
            N[N.l++] = W[P++];
          k = N.l * 8;
          continue;
        }
        k = Cr(N, k, +(P + Z == W.length) + 2);
        for (var ne = 0; Z-- > 0; ) {
          var Y = W[P];
          ne = (ne << 5 ^ Y) & 32767;
          var te = -1, le = 0;
          if ((te = K[ne]) && (te |= P & -32768, te > P && (te -= 32768), te < P))
            for (; W[te + le] == W[P + le] && le < 250; )
              ++le;
          if (le > 2) {
            Y = w[le], Y <= 22 ? k = it(N, k, ee[Y + 1] >> 1) - 1 : (it(N, k, 3), k += 5, it(N, k, ee[Y - 23] >> 5), k += 3);
            var Se = Y < 8 ? 0 : Y - 4 >> 2;
            Se > 0 && (G0(N, k, le - X[Y]), k += Se), Y = T[P - te], k = it(N, k, ee[Y] >> 3), k -= 3;
            var Ae = Y < 4 ? 0 : Y - 2 >> 1;
            Ae > 0 && (G0(N, k, P - te - se[Y]), k += Ae);
            for (var je = 0; je < le; ++je)
              K[ne] = P & 32767, ne = (ne << 5 ^ W[P]) & 32767, ++P;
            Z -= le - 1;
          } else
            Y <= 143 ? Y = Y + 48 : k = Xr(N, k, 1), k = it(N, k, ee[Y]), K[ne] = P & 32767, ++P;
        }
        k = it(N, k, 0) - 1;
      }
      return N.l = (k + 7) / 8 | 0, N.l;
    }
    return function(N, k) {
      return N.length < 8 ? S(N, k) : I(N, k);
    };
  }();
  function X0(d) {
    var T = U(50 + Math.floor(d.length * 1.1)), m = ff(d, T);
    return T.slice(0, m);
  }
  var $0 = ie ? new Uint16Array(32768) : wr(32768), j0 = ie ? new Uint16Array(32768) : wr(32768), z0 = ie ? new Uint16Array(128) : wr(128), K0 = 1, Y0 = 1;
  function of(d, T) {
    var m = Fe(d, T) + 257;
    T += 5;
    var g = Fe(d, T) + 1;
    T += 5;
    var w = yr(d, T) + 4;
    T += 4;
    for (var S = 0, I = ie ? new Uint8Array(19) : wr(19), W = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], N = 1, k = ie ? new Uint8Array(8) : wr(8), P = ie ? new Uint8Array(8) : wr(8), K = I.length, Z = 0; Z < w; ++Z)
      I[F[Z]] = S = pe(d, T), N < S && (N = S), k[S]++, T += 3;
    var ne = 0;
    for (k[0] = 0, Z = 1; Z <= N; ++Z)
      P[Z] = ne = ne + k[Z - 1] << 1;
    for (Z = 0; Z < K; ++Z)
      (ne = I[Z]) != 0 && (W[Z] = P[ne]++);
    var Y = 0;
    for (Z = 0; Z < K; ++Z)
      if (Y = I[Z], Y != 0) {
        ne = ee[W[Z]] >> 8 - Y;
        for (var te = (1 << 7 - Y) - 1; te >= 0; --te)
          z0[ne | te << Y] = Y & 7 | Z << 3;
      }
    var le = [];
    for (N = 1; le.length < m + g; )
      switch (ne = z0[ae(d, T)], T += ne & 7, ne >>>= 3) {
        case 16:
          for (S = 3 + Ye(d, T), T += 2, ne = le[le.length - 1]; S-- > 0; )
            le.push(ne);
          break;
        case 17:
          for (S = 3 + pe(d, T), T += 3; S-- > 0; )
            le.push(0);
          break;
        case 18:
          for (S = 11 + ae(d, T), T += 7; S-- > 0; )
            le.push(0);
          break;
        default:
          le.push(ne), N < ne && (N = ne);
          break;
      }
    var Se = le.slice(0, m), Ae = le.slice(m);
    for (Z = m; Z < 286; ++Z)
      Se[Z] = 0;
    for (Z = g; Z < 30; ++Z)
      Ae[Z] = 0;
    return K0 = Kt(Se, $0, 286), Y0 = Kt(Ae, j0, 30), T;
  }
  function lf(d, T) {
    if (d[0] == 3 && !(d[1] & 3))
      return [qr(T), 2];
    for (var m = 0, g = 0, w = Aa(T || 1 << 18), S = 0, I = w.length >>> 0, W = 0, N = 0; (g & 1) == 0; ) {
      if (g = pe(d, m), m += 3, g >>> 1 == 0) {
        m & 7 && (m += 8 - (m & 7));
        var k = d[m >>> 3] | d[(m >>> 3) + 1] << 8;
        if (m += 32, k > 0)
          for (!T && I < S + k && (w = Pn(w, S + k), I = w.length); k-- > 0; )
            w[S++] = d[m >>> 3], m += 8;
        continue;
      } else
        g >> 1 == 1 ? (W = 9, N = 5) : (m = of(d, m), W = K0, N = Y0);
      for (; ; ) {
        !T && I < S + 32767 && (w = Pn(w, S + 32767), I = w.length);
        var P = hr(d, m, W), K = g >>> 1 == 1 ? Ln[P] : $0[P];
        if (m += K & 15, K >>>= 4, (K >>> 8 & 255) === 0)
          w[S++] = K;
        else {
          if (K == 256)
            break;
          K -= 257;
          var Z = K < 8 ? 0 : K - 4 >> 2;
          Z > 5 && (Z = 0);
          var ne = S + X[K];
          Z > 0 && (ne += hr(d, m, Z), m += Z), P = hr(d, m, N), K = g >>> 1 == 1 ? Bn[P] : j0[P], m += K & 15, K >>>= 4;
          var Y = K < 4 ? 0 : K - 2 >> 1, te = se[K];
          for (Y > 0 && (te += hr(d, m, Y), m += Y), !T && I < ne && (w = Pn(w, ne + 100), I = w.length); S < ne; )
            w[S] = w[S - te], ++S;
        }
      }
    }
    return T ? [w, m + 7 >>> 3] : [w.slice(0, S), m + 7 >>> 3];
  }
  function q0(d, T) {
    var m = d.slice(d.l || 0), g = lf(m, T);
    return d.l += g[1], g[0];
  }
  function J0(d, T) {
    if (d)
      typeof console < "u" && console.error(T);
    else
      throw new Error(T);
  }
  function Z0(d, T) {
    var m = d;
    sr(m, 0);
    var g = [], w = [], S = {
      FileIndex: g,
      FullPaths: w
    };
    D(S, { root: T.root });
    for (var I = m.length - 4; (m[I] != 80 || m[I + 1] != 75 || m[I + 2] != 5 || m[I + 3] != 6) && I >= 0; )
      --I;
    m.l = I + 4, m.l += 4;
    var W = m.read_shift(2);
    m.l += 6;
    var N = m.read_shift(4);
    for (m.l = N, I = 0; I < W; ++I) {
      m.l += 20;
      var k = m.read_shift(4), P = m.read_shift(4), K = m.read_shift(2), Z = m.read_shift(2), ne = m.read_shift(2);
      m.l += 8;
      var Y = m.read_shift(4), te = f(m.slice(m.l + K, m.l + K + Z));
      m.l += K + Z + ne;
      var le = m.l;
      m.l = Y + 4, cf(m, k, P, S, te), m.l = le;
    }
    return S;
  }
  function cf(d, T, m, g, w) {
    d.l += 2;
    var S = d.read_shift(2), I = d.read_shift(2), W = s(d);
    if (S & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var N = d.read_shift(4), k = d.read_shift(4), P = d.read_shift(4), K = d.read_shift(2), Z = d.read_shift(2), ne = "", Y = 0; Y < K; ++Y)
      ne += String.fromCharCode(d[d.l++]);
    if (Z) {
      var te = f(d.slice(d.l, d.l + Z));
      (te[21589] || {}).mt && (W = te[21589].mt), ((w || {})[21589] || {}).mt && (W = w[21589].mt);
    }
    d.l += Z;
    var le = d.slice(d.l, d.l + k);
    switch (I) {
      case 8:
        le = B(d, P);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + I);
    }
    var Se = !1;
    S & 8 && (N = d.read_shift(4), N == 134695760 && (N = d.read_shift(4), Se = !0), k = d.read_shift(4), P = d.read_shift(4)), k != T && J0(Se, "Bad compressed size: " + T + " != " + k), P != m && J0(Se, "Bad uncompressed size: " + m + " != " + P), Mn(g, ne, le, { unsafe: !0, mt: W });
  }
  function hf(d, T) {
    var m = T || {}, g = [], w = [], S = U(1), I = m.compression ? 8 : 0, W = 0, N = 0, k = 0, P = 0, K = 0, Z = d.FullPaths[0], ne = Z, Y = d.FileIndex[0], te = [], le = 0;
    for (N = 1; N < d.FullPaths.length; ++N)
      if (ne = d.FullPaths[N].slice(Z.length), Y = d.FileIndex[N], !(!Y.size || !Y.content || ne == "Sh33tJ5")) {
        var Se = P, Ae = U(ne.length);
        for (k = 0; k < ne.length; ++k)
          Ae.write_shift(1, ne.charCodeAt(k) & 127);
        Ae = Ae.slice(0, Ae.l), te[K] = cl.buf(Y.content, 0);
        var je = Y.content;
        I == 8 && (je = C(je)), S = U(30), S.write_shift(4, 67324752), S.write_shift(2, 20), S.write_shift(2, W), S.write_shift(2, I), Y.mt ? i(S, Y.mt) : S.write_shift(4, 0), S.write_shift(-4, te[K]), S.write_shift(4, je.length), S.write_shift(4, Y.content.length), S.write_shift(2, Ae.length), S.write_shift(2, 0), P += S.length, g.push(S), P += Ae.length, g.push(Ae), P += je.length, g.push(je), S = U(46), S.write_shift(4, 33639248), S.write_shift(2, 0), S.write_shift(2, 20), S.write_shift(2, W), S.write_shift(2, I), S.write_shift(4, 0), S.write_shift(-4, te[K]), S.write_shift(4, je.length), S.write_shift(4, Y.content.length), S.write_shift(2, Ae.length), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(4, 0), S.write_shift(4, Se), le += S.l, w.push(S), le += Ae.length, w.push(Ae), ++K;
      }
    return S = U(22), S.write_shift(4, 101010256), S.write_shift(2, 0), S.write_shift(2, 0), S.write_shift(2, K), S.write_shift(2, K), S.write_shift(4, le), S.write_shift(4, P), S.write_shift(2, 0), He([He(g), He(w), S]);
  }
  var Yt = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function uf(d, T) {
    if (d.ctype)
      return d.ctype;
    var m = d.name || "", g = m.match(/\.([^\.]+)$/);
    return g && Yt[g[1]] || T && (g = (m = T).match(/[\.\\]([^\.\\])+$/), g && Yt[g[1]]) ? Yt[g[1]] : "application/octet-stream";
  }
  function xf(d) {
    for (var T = Mt(d), m = [], g = 0; g < T.length; g += 76)
      m.push(T.slice(g, g + 76));
    return m.join(`\r
`) + `\r
`;
  }
  function df(d) {
    var T = d.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(k) {
      var P = k.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (P.length == 1 ? "0" + P : P);
    });
    T = T.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), T.charAt(0) == `
` && (T = "=0D" + T.slice(1)), T = T.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var m = [], g = T.split(`\r
`), w = 0; w < g.length; ++w) {
      var S = g[w];
      if (S.length == 0) {
        m.push("");
        continue;
      }
      for (var I = 0; I < S.length; ) {
        var W = 76, N = S.slice(I, I + W);
        N.charAt(W - 1) == "=" ? W-- : N.charAt(W - 2) == "=" ? W -= 2 : N.charAt(W - 3) == "=" && (W -= 3), N = S.slice(I, I + W), I += W, I < S.length && (N += "="), m.push(N);
      }
    }
    return m.join(`\r
`);
  }
  function pf(d) {
    for (var T = [], m = 0; m < d.length; ++m) {
      for (var g = d[m]; m <= d.length && g.charAt(g.length - 1) == "="; )
        g = g.slice(0, g.length - 1) + d[++m];
      T.push(g);
    }
    for (var w = 0; w < T.length; ++w)
      T[w] = T[w].replace(/[=][0-9A-Fa-f]{2}/g, function(S) {
        return String.fromCharCode(parseInt(S.slice(1), 16));
      });
    return _r(T.join(`\r
`));
  }
  function vf(d, T, m) {
    for (var g = "", w = "", S = "", I, W = 0; W < 10; ++W) {
      var N = T[W];
      if (!N || N.match(/^\s*$/))
        break;
      var k = N.match(/^(.*?):\s*([^\s].*)$/);
      if (k)
        switch (k[1].toLowerCase()) {
          case "content-location":
            g = k[2].trim();
            break;
          case "content-type":
            S = k[2].trim();
            break;
          case "content-transfer-encoding":
            w = k[2].trim();
            break;
        }
    }
    switch (++W, w.toLowerCase()) {
      case "base64":
        I = _r(kr(T.slice(W).join("")));
        break;
      case "quoted-printable":
        I = pf(T.slice(W));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + w);
    }
    var P = Mn(d, g.slice(m.length), I, { unsafe: !0 });
    S && (P.ctype = S);
  }
  function mf(d, T) {
    if (Pe(d.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var m = T && T.root || "", g = (de && Buffer.isBuffer(d) ? d.toString("binary") : Pe(d)).split(`\r
`), w = 0, S = "";
    for (w = 0; w < g.length; ++w)
      if (S = g[w], !!/^Content-Location:/i.test(S) && (S = S.slice(S.indexOf("file")), m || (m = S.slice(0, S.lastIndexOf("/") + 1)), S.slice(0, m.length) != m))
        for (; m.length > 0 && (m = m.slice(0, m.length - 1), m = m.slice(0, m.lastIndexOf("/") + 1), S.slice(0, m.length) != m); )
          ;
    var I = (g[1] || "").match(/boundary="(.*?)"/);
    if (!I)
      throw new Error("MAD cannot find boundary");
    var W = "--" + (I[1] || ""), N = [], k = [], P = {
      FileIndex: N,
      FullPaths: k
    };
    D(P);
    var K, Z = 0;
    for (w = 0; w < g.length; ++w) {
      var ne = g[w];
      ne !== W && ne !== W + "--" || (Z++ && vf(P, g.slice(K, w), m), K = w);
    }
    return P;
  }
  function gf(d, T) {
    var m = T || {}, g = m.boundary || "SheetJS";
    g = "------=" + g;
    for (var w = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + g.slice(2) + '"',
      "",
      "",
      ""
    ], S = d.FullPaths[0], I = S, W = d.FileIndex[0], N = 1; N < d.FullPaths.length; ++N)
      if (I = d.FullPaths[N].slice(S.length), W = d.FileIndex[N], !(!W.size || !W.content || I == "Sh33tJ5")) {
        I = I.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(le) {
          return "_x" + le.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(le) {
          return "_u" + le.charCodeAt(0).toString(16) + "_";
        });
        for (var k = W.content, P = de && Buffer.isBuffer(k) ? k.toString("binary") : Pe(k), K = 0, Z = Math.min(1024, P.length), ne = 0, Y = 0; Y <= Z; ++Y)
          (ne = P.charCodeAt(Y)) >= 32 && ne < 128 && ++K;
        var te = K >= Z * 4 / 5;
        w.push(g), w.push("Content-Location: " + (m.root || "file:///C:/SheetJS/") + I), w.push("Content-Transfer-Encoding: " + (te ? "quoted-printable" : "base64")), w.push("Content-Type: " + uf(W, I)), w.push(""), w.push(te ? df(P) : xf(P));
      }
    return w.push(g + `--\r
`), w.join(`\r
`);
  }
  function _f(d) {
    var T = {};
    return D(T, d), T;
  }
  function Mn(d, T, m, g) {
    var w = g && g.unsafe;
    w || D(d);
    var S = !w && Ee.find(d, T);
    if (!S) {
      var I = d.FullPaths[0];
      T.slice(0, I.length) == I ? I = T : (I.slice(-1) != "/" && (I += "/"), I = (I + T).replace("//", "/")), S = { name: a(T), type: 2 }, d.FileIndex.push(S), d.FullPaths.push(I), w || Ee.utils.cfb_gc(d);
    }
    return S.content = m, S.size = m ? m.length : 0, g && (g.CLSID && (S.clsid = g.CLSID), g.mt && (S.mt = g.mt), g.ct && (S.ct = g.ct)), S;
  }
  function Ef(d, T) {
    D(d);
    var m = Ee.find(d, T);
    if (m) {
      for (var g = 0; g < d.FileIndex.length; ++g)
        if (d.FileIndex[g] == m)
          return d.FileIndex.splice(g, 1), d.FullPaths.splice(g, 1), !0;
    }
    return !1;
  }
  function Tf(d, T, m) {
    D(d);
    var g = Ee.find(d, T);
    if (g) {
      for (var w = 0; w < d.FileIndex.length; ++w)
        if (d.FileIndex[w] == g)
          return d.FileIndex[w].name = a(m), d.FullPaths[w] = m, !0;
    }
    return !1;
  }
  function wf(d) {
    L(d, !0);
  }
  return t.find = z, t.read = re, t.parse = c, t.write = cr, t.writeFile = pr, t.utils = {
    cfb_new: _f,
    cfb_add: Mn,
    cfb_del: Ef,
    cfb_mov: Tf,
    cfb_gc: wf,
    ReadShift: It,
    CheckField: as,
    prep_blob: sr,
    bconcat: He,
    use_zlib: A,
    _deflateRaw: X0,
    _inflateRaw: q0,
    consts: Re
  }, t;
}();
function hl(e) {
  return typeof e == "string" ? yn(e) : Array.isArray(e) ? Mo(e) : e;
}
function Gt(e, t, r) {
  if (typeof Deno < "u") {
    if (r && typeof t == "string")
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = yn(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var n = r == "utf8" ? Rr(t) : t;
  if (typeof IE_SaveFile < "u")
    return IE_SaveFile(n, e);
  if (typeof Blob < "u") {
    var a = new Blob([hl(n)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob)
      return navigator.msSaveBlob(a, e);
    if (typeof saveAs < "u")
      return saveAs(a, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var i = URL.createObjectURL(a);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), chrome.downloads.download({ url: i, filename: e, saveAs: !0 });
      var s = document.createElement("a");
      if (s.download != null)
        return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), i;
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var f = File(e);
      return f.open("w"), f.encoding = "binary", Array.isArray(t) && (t = Vt(t)), f.write(t), f.close(), t;
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/))
        throw l;
    }
  throw new Error("cannot save file " + e);
}
function Xe(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function Ia(e, t) {
  for (var r = [], n = Xe(e), a = 0; a !== n.length; ++a)
    r[e[n[a]][t]] == null && (r[e[n[a]][t]] = n[a]);
  return r;
}
function A0(e) {
  for (var t = [], r = Xe(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = r[n];
  return t;
}
function Rn(e) {
  for (var t = [], r = Xe(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function ul(e) {
  for (var t = [], r = Xe(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var un = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function rr(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  t && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var n = /* @__PURE__ */ un.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ un.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var Hi = /* @__PURE__ */ new Date(), xl = /* @__PURE__ */ un.getTime() + (/* @__PURE__ */ Hi.getTimezoneOffset() - /* @__PURE__ */ un.getTimezoneOffset()) * 6e4, ka = /* @__PURE__ */ Hi.getTimezoneOffset();
function Vi(e) {
  var t = new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + xl), t.getTimezoneOffset() !== ka && t.setTime(t.getTime() + (t.getTimezoneOffset() - ka) * 6e4), t;
}
var Pa = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), Gi = /* @__PURE__ */ isNaN(/* @__PURE__ */ Pa.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : Pa, dl = /* @__PURE__ */ Gi.getFullYear() == 2017;
function Ze(e, t) {
  var r = new Date(e);
  if (dl)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (Gi.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var a = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
  return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i;
}
function Dn(e, t) {
  if (de && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254)
        return Rr(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return Rr(Bo(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254)
          return Rr(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return Rr(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "\u20AC": "\x80",
        "\u201A": "\x82",
        \u0192: "\x83",
        "\u201E": "\x84",
        "\u2026": "\x85",
        "\u2020": "\x86",
        "\u2021": "\x87",
        "\u02C6": "\x88",
        "\u2030": "\x89",
        \u0160: "\x8A",
        "\u2039": "\x8B",
        \u0152: "\x8C",
        \u017D: "\x8E",
        "\u2018": "\x91",
        "\u2019": "\x92",
        "\u201C": "\x93",
        "\u201D": "\x94",
        "\u2022": "\x95",
        "\u2013": "\x96",
        "\u2014": "\x97",
        "\u02DC": "\x98",
        "\u2122": "\x99",
        \u0161: "\x9A",
        "\u203A": "\x9B",
        \u0153: "\x9C",
        \u017E: "\x9E",
        \u0178: "\x9F"
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(i) {
        return r[i] || i;
      });
    } catch {
    }
  for (var n = [], a = 0; a != e.length; ++a)
    n.push(String.fromCharCode(e[a]));
  return n.join("");
}
function tr(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = tr(e[r]));
  return t;
}
function ye(e, t) {
  for (var r = ""; r.length < t; )
    r += e;
  return r;
}
function Nr(e) {
  var t = Number(e);
  if (!isNaN(t))
    return isFinite(t) ? t : NaN;
  if (!/\d/.test(e))
    return t;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(n)) || (n = n.replace(/[(](.*)[)]/, function(a, i) {
    return r = -r, i;
  }), !isNaN(t = Number(n))) ? t / r : t;
}
var pl = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function Ut(e) {
  var t = new Date(e), r = new Date(NaN), n = t.getYear(), a = t.getMonth(), i = t.getDate();
  if (isNaN(i))
    return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), s.length > 3 && pl.indexOf(s) == -1)
      return r;
  } else if (s.match(/[a-z]/))
    return r;
  return n < 0 || n > 8099 ? r : (a > 0 || i > 1) && n != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
function ce(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return de ? n = Lr(r) : n = Uo(r), Ee.utils.cfb_add(e, t, n);
    }
    Ee.utils.cfb_add(e, t, r);
  } else
    e.file(t, r);
}
function F0() {
  return Ee.utils.cfb_new();
}
var Ie = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, vl = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, y0 = /* @__PURE__ */ A0(vl), C0 = /[&<>'"]/g, ml = /[\u0000-\u0008\u000b-\u001f]/g;
function ge(e) {
  var t = e + "";
  return t.replace(C0, function(r) {
    return y0[r];
  }).replace(ml, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function La(e) {
  return ge(e).replace(/ /g, "_x0020_");
}
var Xi = /[\u0000-\u001f]/g;
function gl(e) {
  var t = e + "";
  return t.replace(C0, function(r) {
    return y0[r];
  }).replace(/\n/g, "<br/>").replace(Xi, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function _l(e) {
  var t = e + "";
  return t.replace(C0, function(r) {
    return y0[r];
  }).replace(Xi, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function El(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function Tl(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function t0(e) {
  for (var t = "", r = 0, n = 0, a = 0, i = 0, s = 0, f = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      t += String.fromCharCode(n);
      continue;
    }
    if (a = e.charCodeAt(r++), n > 191 && n < 224) {
      s = (n & 31) << 6, s |= a & 63, t += String.fromCharCode(s);
      continue;
    }
    if (i = e.charCodeAt(r++), n < 240) {
      t += String.fromCharCode((n & 15) << 12 | (a & 63) << 6 | i & 63);
      continue;
    }
    s = e.charCodeAt(r++), f = ((n & 7) << 18 | (a & 63) << 12 | (i & 63) << 6 | s & 63) - 65536, t += String.fromCharCode(55296 + (f >>> 10 & 1023)), t += String.fromCharCode(56320 + (f & 1023));
  }
  return t;
}
function Ba(e) {
  var t = qr(2 * e.length), r, n, a = 1, i = 0, s = 0, f;
  for (n = 0; n < e.length; n += a)
    a = 1, (f = e.charCodeAt(n)) < 128 ? r = f : f < 224 ? (r = (f & 31) * 64 + (e.charCodeAt(n + 1) & 63), a = 2) : f < 240 ? (r = (f & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), a = 3) : (a = 4, r = (f & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, s = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), s !== 0 && (t[i++] = s & 255, t[i++] = s >>> 8, s = 0), t[i++] = r % 256, t[i++] = r >>> 8;
  return t.slice(0, i).toString("ucs2");
}
function Ma(e) {
  return Lr(e, "binary").toString("utf8");
}
var Qt = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3", Nt = de && (/* @__PURE__ */ Ma(Qt) == /* @__PURE__ */ t0(Qt) && Ma || /* @__PURE__ */ Ba(Qt) == /* @__PURE__ */ t0(Qt) && Ba) || t0, Rr = de ? function(e) {
  return Lr(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        t.push(String.fromCharCode(n));
        break;
      case n < 2048:
        t.push(String.fromCharCode(192 + (n >> 6))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, a = e.charCodeAt(r++) - 56320 + (n << 10), t.push(String.fromCharCode(240 + (a >> 18 & 7))), t.push(String.fromCharCode(144 + (a >> 12 & 63))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (a & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (n >> 12))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
    }
  return t.join("");
}, wl = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "\xB7"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var n = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), a = 0; a < e.length; ++a)
      n = n.replace(e[a][0], e[a][1]);
    return n;
  };
}(), $i = /(^\s|\s$|\n)/;
function Ve(e, t) {
  return "<" + e + (t.match($i) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function bt(e) {
  return Xe(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function q(e, t, r) {
  return "<" + e + (r != null ? bt(r) : "") + (t != null ? (t.match($i) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function h0(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t)
      throw r;
  }
  return "";
}
function Sl(e, t) {
  switch (typeof e) {
    case "string":
      var r = q("vt:lpwstr", ge(e));
      return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
    case "number":
      return q((e | 0) == e ? "vt:i4" : "vt:r8", ge(String(e)));
    case "boolean":
      return q("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date)
    return q("vt:filetime", h0(e));
  throw new Error("Unable to serialize " + e);
}
var Be = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Tt = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], fr = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function Al(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), n = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), a = e[t + 6] & 15, i = 5; i >= 0; --i)
    a = a * 256 + e[t + i];
  return n == 2047 ? a == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, a += Math.pow(2, 52)), r * Math.pow(2, n - 52) * a);
}
function Fl(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, a = 0, i = 0, s = n ? -t : t;
  isFinite(s) ? s == 0 ? a = i = 0 : (a = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - a), a <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? a = -1022 : (i -= Math.pow(2, 52), a += 1023)) : (a = 2047, i = isNaN(t) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256)
    e[r + f] = i & 255;
  e[r + 6] = (a & 15) << 4 | i & 15, e[r + 7] = a >> 4 | n;
}
var Ua = function(e) {
  for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
    if (e[0][n])
      for (var a = 0, i = e[0][n].length; a < i; a += r)
        t.push.apply(t, e[0][n].slice(a, a + r));
  return t;
}, ba = de ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : Lr(t);
  })) : Ua(e);
} : Ua, Wa = function(e, t, r) {
  for (var n = [], a = t; a < r; a += 2)
    n.push(String.fromCharCode(Rt(e, a)));
  return n.join("").replace(Dt, "");
}, O0 = de ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(Dt, "") : Wa(e, t, r);
} : Wa, Ha = function(e, t, r) {
  for (var n = [], a = t; a < t + r; ++a)
    n.push(("0" + e[a].toString(16)).slice(-2));
  return n.join("");
}, ji = de ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Ha(e, t, r);
} : Ha, Va = function(e, t, r) {
  for (var n = [], a = t; a < r; a++)
    n.push(String.fromCharCode(ht(e, a)));
  return n.join("");
}, Xt = de ? function(t, r, n) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, n) : Va(t, r, n);
} : Va, zi = function(e, t) {
  var r = or(e, t);
  return r > 0 ? Xt(e, t + 4, t + 4 + r - 1) : "";
}, Ki = zi, Yi = function(e, t) {
  var r = or(e, t);
  return r > 0 ? Xt(e, t + 4, t + 4 + r - 1) : "";
}, qi = Yi, Ji = function(e, t) {
  var r = 2 * or(e, t);
  return r > 0 ? Xt(e, t + 4, t + 4 + r - 1) : "";
}, Zi = Ji, Qi = function(t, r) {
  var n = or(t, r);
  return n > 0 ? O0(t, r + 4, r + 4 + n) : "";
}, es = Qi, rs = function(e, t) {
  var r = or(e, t);
  return r > 0 ? Xt(e, t + 4, t + 4 + r) : "";
}, ts = rs, ns = function(e, t) {
  return Al(e, t);
}, xn = ns, R0 = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
de && (Ki = function(t, r) {
  if (!Buffer.isBuffer(t))
    return zi(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, qi = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Yi(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, Zi = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Ji(t, r);
  var n = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n - 1);
}, es = function(t, r) {
  if (!Buffer.isBuffer(t))
    return Qi(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n);
}, ts = function(t, r) {
  if (!Buffer.isBuffer(t))
    return rs(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + n);
}, xn = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : ns(t, r);
}, R0 = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
var ht = function(e, t) {
  return e[t];
}, Rt = function(e, t) {
  return e[t + 1] * (1 << 8) + e[t];
}, yl = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, or = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, Kr = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, Cl = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function It(e, t) {
  var r = "", n, a, i = [], s, f, l, o;
  switch (t) {
    case "dbcs":
      if (o = this.l, de && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (l = 0; l < e; ++l)
          r += String.fromCharCode(Rt(this, o)), o += 2;
      e *= 2;
      break;
    case "utf8":
      r = Xt(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = O0(this, this.l, this.l + e);
      break;
    case "wstr":
      return It.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = Ki(this, this.l), e = 4 + or(this, this.l);
      break;
    case "lpstr-cp":
      r = qi(this, this.l), e = 4 + or(this, this.l);
      break;
    case "lpwstr":
      r = Zi(this, this.l), e = 4 + 2 * or(this, this.l);
      break;
    case "lpp4":
      e = 4 + or(this, this.l), r = es(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + or(this, this.l), r = ts(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = ht(this, this.l + e++)) !== 0; )
        i.push(qt(s));
      r = i.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = Rt(this, this.l + e)) !== 0; )
        i.push(qt(s)), e += 2;
      e += 2, r = i.join("");
      break;
    case "dbcs-cont":
      for (r = "", o = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = ht(this, o), this.l = o + 1, f = It.call(this, e - l, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(qt(Rt(this, o))), o += 2;
      }
      r = i.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", o = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = ht(this, o), this.l = o + 1, f = It.call(this, e - l, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(qt(ht(this, o))), o += 1;
      }
      r = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = ht(this, this.l), this.l++, n;
        case 2:
          return n = (t === "i" ? yl : Rt)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return t === "i" || (this[this.l + 3] & 128) === 0 ? (n = (e > 0 ? Kr : Cl)(this, this.l), this.l += 4, n) : (a = or(this, this.l), this.l += 4, a);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? a = xn(this, this.l) : a = xn([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, a;
          e = 8;
        case 16:
          r = ji(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Ol = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, Rl = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, Dl = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function Nl(e, t, r) {
  var n = 0, a = 0;
  if (r === "dbcs") {
    for (a = 0; a != t.length; ++a)
      Dl(this, t.charCodeAt(a), this.l + 2 * a);
    n = 2 * t.length;
  } else if (r === "sbcs") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), a = 0; a != t.length; ++a)
      this[this.l + a] = t.charCodeAt(a) & 255;
    n = t.length;
  } else if (r === "hex") {
    for (; a < e; ++a)
      this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var i = Math.min(this.l + e, this.length);
    for (a = 0; a < Math.min(t.length, e); ++a) {
      var s = t.charCodeAt(a);
      this[this.l++] = s & 255, this[this.l++] = s >> 8;
    }
    for (; this.l < i; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        n = 1, this[this.l] = t & 255;
        break;
      case 2:
        n = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
        break;
      case 3:
        n = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
        break;
      case 4:
        n = 4, Ol(this, t, this.l);
        break;
      case 8:
        if (n = 8, r === "f") {
          Fl(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        n = 4, Rl(this, t, this.l);
        break;
    }
  return this.l += n, this;
}
function as(e, t) {
  var r = ji(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function sr(e, t) {
  e.l = t, e.read_shift = It, e.chk = as, e.write_shift = Nl;
}
function Fr(e, t) {
  e.l += t;
}
function U(e) {
  var t = qr(e);
  return sr(t, 0), t;
}
function Qe() {
  var e = [], t = de ? 256 : 2048, r = function(o) {
    var c = U(o);
    return sr(c, 0), c;
  }, n = r(t), a = function() {
    !n || (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n), n = null);
  }, i = function(o) {
    return n && o < n.length - n.l ? n : (a(), n = r(Math.max(o + 1, t)));
  }, s = function() {
    return a(), He(e);
  }, f = function(o) {
    a(), n = o, n.l == null && (n.l = n.length), i(t);
  };
  return { next: i, push: f, end: s, _bufs: e };
}
function V(e, t, r, n) {
  var a = +t, i;
  if (!isNaN(a)) {
    n || (n = Ad[a].p || (r || []).length || 0), i = 1 + (a >= 128 ? 1 : 0) + 1, n >= 128 && ++i, n >= 16384 && ++i, n >= 2097152 && ++i;
    var s = e.next(i);
    a <= 127 ? s.write_shift(1, a) : (s.write_shift(1, (a & 127) + 128), s.write_shift(1, a >> 7));
    for (var f = 0; f != 4; ++f)
      if (n >= 128)
        s.write_shift(1, (n & 127) + 128), n >>= 7;
      else {
        s.write_shift(1, n);
        break;
      }
    n > 0 && R0(r) && e.push(r);
  }
}
function kt(e, t, r) {
  var n = tr(e);
  if (t.s ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r)) : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)), !r || r.biff < 12) {
    for (; n.c >= 256; )
      n.c -= 256;
    for (; n.r >= 65536; )
      n.r -= 65536;
  }
  return n;
}
function Ga(e, t, r) {
  var n = tr(e);
  return n.s = kt(n.s, t.s, r), n.e = kt(n.e, t.s, r), n;
}
function Pt(e, t) {
  if (e.cRel && e.c < 0)
    for (e = tr(e); e.c < 0; )
      e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = tr(e); e.r < 0; )
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = _e(e);
  return !e.cRel && e.cRel != null && (r = Pl(r)), !e.rRel && e.rRel != null && (r = Il(r)), r;
}
function n0(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + ze(e.s.c) + ":" + (e.e.cRel ? "" : "$") + ze(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Ge(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Ge(e.e.r) : Pt(e.s, t.biff) + ":" + Pt(e.e, t.biff);
}
function D0(e) {
  return parseInt(kl(e), 10) - 1;
}
function Ge(e) {
  return "" + (e + 1);
}
function Il(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function kl(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function N0(e) {
  for (var t = Ll(e), r = 0, n = 0; n !== t.length; ++n)
    r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function ze(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function Pl(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Ll(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Bl(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function Me(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var a = e.charCodeAt(n);
    a >= 48 && a <= 57 ? t = 10 * t + (a - 48) : a >= 65 && a <= 90 && (r = 26 * r + (a - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function _e(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0)
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function lr(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: Me(e), e: Me(e) } : { s: Me(e.slice(0, t)), e: Me(e.slice(t + 1)) };
}
function Ne(e, t) {
  return typeof t > "u" || typeof t == "number" ? Ne(e.s, e.e) : (typeof e != "string" && (e = _e(e)), typeof t != "string" && (t = _e(t)), e == t ? e : e + ":" + t);
}
function we(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, a = 0, i = e.length;
  for (r = 0; n < i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (t.s.c = --r, r = 0; n < i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
    r = 10 * r + a;
  if (t.s.r = --r, n === i || a != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++n, r = 0; n != i && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    r = 26 * r + a;
  for (t.e.c = --r, r = 0; n != i && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n)
    r = 10 * r + a;
  return t.e.r = --r, t;
}
function Xa(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return e.w = Wr(e.z, r ? rr(t) : t);
    } catch {
    }
  try {
    return e.w = Wr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? rr(t) : t);
  } catch {
    return "" + t;
  }
}
function Pr(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? $t[e.v] || e.v : t == null ? Xa(e, e.v) : Xa(e, t));
}
function et(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function is(e, t, r) {
  var n = r || {}, a = e ? Array.isArray(e) : n.dense, i = e || (a ? [] : {}), s = 0, f = 0;
  if (i && n.origin != null) {
    if (typeof n.origin == "number")
      s = n.origin;
    else {
      var l = typeof n.origin == "string" ? Me(n.origin) : n.origin;
      s = l.r, f = l.c;
    }
    i["!ref"] || (i["!ref"] = "A1:A1");
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var c = we(i["!ref"]);
    o.s.c = c.s.c, o.s.r = c.s.r, o.e.c = Math.max(o.e.c, c.e.c), o.e.r = Math.max(o.e.r, c.e.r), s == -1 && (o.e.r = s = c.e.r + 1);
  }
  for (var p = 0; p != t.length; ++p)
    if (!!t[p]) {
      if (!Array.isArray(t[p]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var u = 0; u != t[p].length; ++u)
        if (!(typeof t[p][u] > "u")) {
          var v = { v: t[p][u] }, E = s + p, x = f + u;
          if (o.s.r > E && (o.s.r = E), o.s.c > x && (o.s.c = x), o.e.r < E && (o.e.r = E), o.e.c < x && (o.e.c = x), t[p][u] && typeof t[p][u] == "object" && !Array.isArray(t[p][u]) && !(t[p][u] instanceof Date))
            v = t[p][u];
          else if (Array.isArray(v.v) && (v.f = t[p][u][1], v.v = v.v[0]), v.v === null)
            if (v.f)
              v.t = "n";
            else if (n.nullError)
              v.t = "e", v.v = 0;
            else if (n.sheetStubs)
              v.t = "z";
            else
              continue;
          else
            typeof v.v == "number" ? v.t = "n" : typeof v.v == "boolean" ? v.t = "b" : v.v instanceof Date ? (v.z = n.dateNF || Ce[14], n.cellDates ? (v.t = "d", v.w = Wr(v.z, rr(v.v))) : (v.t = "n", v.v = rr(v.v), v.w = Wr(v.z, v.v))) : v.t = "s";
          if (a)
            i[E] || (i[E] = []), i[E][x] && i[E][x].z && (v.z = i[E][x].z), i[E][x] = v;
          else {
            var _ = _e({ c: x, r: E });
            i[_] && i[_].z && (v.z = i[_].z), i[_] = v;
          }
        }
    }
  return o.s.c < 1e7 && (i["!ref"] = Ne(o)), i;
}
function wt(e, t) {
  return is(null, e, t);
}
function Ml(e) {
  return e.read_shift(4, "i");
}
function Tr(e, t) {
  return t || (t = U(4)), t.write_shift(4, e), t;
}
function Ke(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function Ue(e, t) {
  var r = !1;
  return t == null && (r = !0, t = U(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function Ul(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function bl(e, t) {
  return t || (t = U(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t;
}
function I0(e, t) {
  var r = e.l, n = e.read_shift(1), a = Ke(e), i = [], s = { t: a, h: a };
  if ((n & 1) !== 0) {
    for (var f = e.read_shift(4), l = 0; l != f; ++l)
      i.push(Ul(e));
    s.r = i;
  } else
    s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, s;
}
function Wl(e, t) {
  var r = !1;
  return t == null && (r = !0, t = U(15 + 4 * e.t.length)), t.write_shift(1, 0), Ue(e.t, t), r ? t.slice(0, t.l) : t;
}
var Hl = I0;
function Vl(e, t) {
  var r = !1;
  return t == null && (r = !0, t = U(23 + 4 * e.t.length)), t.write_shift(1, 1), Ue(e.t, t), t.write_shift(4, 1), bl({ ich: 0, ifnt: 0 }, t), r ? t.slice(0, t.l) : t;
}
function dr(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function rt(e, t) {
  return t == null && (t = U(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function tt(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function nt(e, t) {
  return t == null && (t = U(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var Gl = Ke, ss = Ue;
function k0(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function dn(e, t) {
  var r = !1;
  return t == null && (r = !0, t = U(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var Xl = Ke, u0 = k0, P0 = dn;
function fs(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, n = t[0] & 2;
  e.l += 4;
  var a = n === 0 ? xn([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Kr(t, 0) >> 2;
  return r ? a / 100 : a;
}
function os(e, t) {
  t == null && (t = U(4));
  var r = 0, n = 0, a = e * 100;
  if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29 ? n = 1 : a == (a | 0) && a >= -(1 << 29) && a < 1 << 29 && (n = 1, r = 1), n)
    t.write_shift(-4, ((r ? a : e) << 2) + (r + 2));
  else
    throw new Error("unsupported RkNumber " + e);
}
function ls(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function $l(e, t) {
  return t || (t = U(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var at = ls, St = $l;
function At(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Jr(e, t) {
  return (t || U(8)).write_shift(8, e, "f");
}
function jl(e) {
  var t = {}, r = e.read_shift(1), n = r >>> 1, a = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), l = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = a;
      var o = rc[a];
      o && (t.rgb = ri(o));
      break;
    case 2:
      t.rgb = ri([s, f, l]);
      break;
    case 3:
      t.theme = a;
      break;
  }
  return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t;
}
function pn(e, t) {
  if (t || (t = U(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var n = e.rgb || "FFFFFF";
    typeof n == "number" && (n = ("000000" + n.toString(16)).slice(-6)), t.write_shift(1, parseInt(n.slice(0, 2), 16)), t.write_shift(1, parseInt(n.slice(2, 4), 16)), t.write_shift(1, parseInt(n.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function zl(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function Kl(e, t) {
  t || (t = U(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var cs = 2, ir = 3, en = 11, vn = 19, rn = 64, Yl = 65, ql = 71, Jl = 4108, Zl = 4126, We = 80, $a = {
  1: { n: "CodePage", t: cs },
  2: { n: "Category", t: We },
  3: { n: "PresentationFormat", t: We },
  4: { n: "ByteCount", t: ir },
  5: { n: "LineCount", t: ir },
  6: { n: "ParagraphCount", t: ir },
  7: { n: "SlideCount", t: ir },
  8: { n: "NoteCount", t: ir },
  9: { n: "HiddenCount", t: ir },
  10: { n: "MultimediaClipCount", t: ir },
  11: { n: "ScaleCrop", t: en },
  12: { n: "HeadingPairs", t: Jl },
  13: { n: "TitlesOfParts", t: Zl },
  14: { n: "Manager", t: We },
  15: { n: "Company", t: We },
  16: { n: "LinksUpToDate", t: en },
  17: { n: "CharacterCount", t: ir },
  19: { n: "SharedDoc", t: en },
  22: { n: "HyperlinksChanged", t: en },
  23: { n: "AppVersion", t: ir, p: "version" },
  24: { n: "DigSig", t: Yl },
  26: { n: "ContentType", t: We },
  27: { n: "ContentStatus", t: We },
  28: { n: "Language", t: We },
  29: { n: "Version", t: We },
  255: {},
  2147483648: { n: "Locale", t: vn },
  2147483651: { n: "Behavior", t: vn },
  1919054434: {}
}, ja = {
  1: { n: "CodePage", t: cs },
  2: { n: "Title", t: We },
  3: { n: "Subject", t: We },
  4: { n: "Author", t: We },
  5: { n: "Keywords", t: We },
  6: { n: "Comments", t: We },
  7: { n: "Template", t: We },
  8: { n: "LastAuthor", t: We },
  9: { n: "RevNumber", t: We },
  10: { n: "EditTime", t: rn },
  11: { n: "LastPrinted", t: rn },
  12: { n: "CreatedDate", t: rn },
  13: { n: "ModifiedDate", t: rn },
  14: { n: "PageCount", t: ir },
  15: { n: "WordCount", t: ir },
  16: { n: "CharCount", t: ir },
  17: { n: "Thumbnail", t: ql },
  18: { n: "Application", t: We },
  19: { n: "DocSecurity", t: ir },
  255: {},
  2147483648: { n: "Locale", t: vn },
  2147483651: { n: "Behavior", t: vn },
  1919054434: {}
};
function Ql(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var ec = /* @__PURE__ */ Ql([
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  16777215,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), rc = /* @__PURE__ */ tr(ec), $t = {
  0: "#NULL!",
  7: "#DIV/0!",
  15: "#VALUE!",
  23: "#REF!",
  29: "#NAME?",
  36: "#NUM!",
  42: "#N/A",
  43: "#GETTING_DATA",
  255: "#WTF?"
}, tc = {
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  "application/vnd.ms-office.chartex+xml": "TODO",
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  "application/vnd.ms-excel.wsSortMap": "TODO",
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  "application/vnd.ms-excel.Survey+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  "image/png": "TODO",
  sheet: "js"
}, tn = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function hs() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function us(e, t) {
  var r = ul(tc), n = [], a;
  n[n.length] = Ie, n[n.length] = q("Types", null, {
    xmlns: Be.CT,
    "xmlns:xsd": Be.xsd,
    "xmlns:xsi": Be.xsi
  }), n = n.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(l) {
    return q("Default", null, { Extension: l[0], ContentType: l[1] });
  }));
  var i = function(l) {
    e[l] && e[l].length > 0 && (a = e[l][0], n[n.length] = q("Override", null, {
      PartName: (a[0] == "/" ? "" : "/") + a,
      ContentType: tn[l][t.bookType] || tn[l].xlsx
    }));
  }, s = function(l) {
    (e[l] || []).forEach(function(o) {
      n[n.length] = q("Override", null, {
        PartName: (o[0] == "/" ? "" : "/") + o,
        ContentType: tn[l][t.bookType] || tn[l].xlsx
      });
    });
  }, f = function(l) {
    (e[l] || []).forEach(function(o) {
      n[n.length] = q("Override", null, {
        PartName: (o[0] == "/" ? "" : "/") + o,
        ContentType: r[l][0]
      });
    });
  };
  return i("workbooks"), s("sheets"), s("charts"), f("themes"), ["strs", "styles"].forEach(i), ["coreprops", "extprops", "custprops"].forEach(f), f("vba"), f("comments"), f("threadedcomments"), f("drawings"), s("metadata"), f("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var xe = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function xs(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function dt(e) {
  var t = [Ie, q("Relationships", null, {
    xmlns: Be.RELS
  })];
  return Xe(e["!id"]).forEach(function(r) {
    t[t.length] = q("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function me(e, t, r, n, a, i) {
  if (a || (a = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
      ;
  if (e["!idx"] = t + 1, a.Id = "rId" + t, a.Type = n, a.Target = r, i ? a.TargetMode = i : [xe.HLINK, xe.XPATH, xe.XMISS].indexOf(a.Type) > -1 && (a.TargetMode = "External"), e["!id"][a.Id])
    throw new Error("Cannot rewrite rId " + t);
  return e["!id"][a.Id] = a, e[("/" + a.Target).replace("//", "/")] = a, t;
}
function nc(e) {
  var t = [Ie];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function za(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function ac(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function ic(e) {
  var t = [Ie];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(za(e[r][0], e[r][1])), t.push(ac("", e[r][0]));
  return t.push(za("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function ds() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + on.version + "</meta:generator></office:meta></office:document-meta>";
}
var Yr = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function a0(e, t, r, n, a) {
  a[e] != null || t == null || t === "" || (a[e] = t, t = ge(t), n[n.length] = r ? q(e, t, r) : Ve(e, t));
}
function ps(e, t) {
  var r = t || {}, n = [Ie, q("cp:coreProperties", null, {
    "xmlns:cp": Be.CORE_PROPS,
    "xmlns:dc": Be.dc,
    "xmlns:dcterms": Be.dcterms,
    "xmlns:dcmitype": Be.dcmitype,
    "xmlns:xsi": Be.xsi
  })], a = {};
  if (!e && !r.Props)
    return n.join("");
  e && (e.CreatedDate != null && a0("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : h0(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, a), e.ModifiedDate != null && a0("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : h0(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, a));
  for (var i = 0; i != Yr.length; ++i) {
    var s = Yr[i], f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    f === !0 ? f = "1" : f === !1 ? f = "0" : typeof f == "number" && (f = String(f)), f != null && a0(s[0], f, null, n, a);
  }
  return n.length > 2 && (n[n.length] = "</cp:coreProperties>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var pt = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], vs = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function ms(e) {
  var t = [], r = q;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = Ie, t[t.length] = q("Properties", null, {
    xmlns: Be.EXT_PROPS,
    "xmlns:vt": Be.vt
  }), pt.forEach(function(n) {
    if (e[n[1]] !== void 0) {
      var a;
      switch (n[2]) {
        case "string":
          a = ge(String(e[n[1]]));
          break;
        case "bool":
          a = e[n[1]] ? "true" : "false";
          break;
      }
      a !== void 0 && (t[t.length] = r(n[0], a));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(n) {
    return "<vt:lpstr>" + ge(n) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function gs(e) {
  var t = [Ie, q("Properties", null, {
    xmlns: Be.CUST_PROPS,
    "xmlns:vt": Be.vt
  })];
  if (!e)
    return t.join("");
  var r = 1;
  return Xe(e).forEach(function(a) {
    ++r, t[t.length] = q("property", Sl(e[a], !0), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: ge(a)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var Ka = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  Category: "Category",
  Manager: "Manager",
  Company: "Company",
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  Identifier: "Identifier",
  Language: "Language"
};
function sc(e, t) {
  var r = [];
  return Xe(Ka).map(function(n) {
    for (var a = 0; a < Yr.length; ++a)
      if (Yr[a][1] == n)
        return Yr[a];
    for (a = 0; a < pt.length; ++a)
      if (pt[a][1] == n)
        return pt[a];
    throw n;
  }).forEach(function(n) {
    if (e[n[1]] != null) {
      var a = t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]];
      switch (n[2]) {
        case "date":
          a = new Date(a).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof a == "number" ? a = String(a) : a === !0 || a === !1 ? a = a ? "1" : "0" : a instanceof Date && (a = new Date(a).toISOString().replace(/\.\d*Z/, "")), r.push(Ve(Ka[n[1]] || n[1], a));
    }
  }), q("DocumentProperties", r.join(""), { xmlns: fr.o });
}
function fc(e, t) {
  var r = ["Worksheets", "SheetNames"], n = "CustomDocumentProperties", a = [];
  return e && Xe(e).forEach(function(i) {
    if (!!Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < Yr.length; ++s)
        if (i == Yr[s][1])
          return;
      for (s = 0; s < pt.length; ++s)
        if (i == pt[s][1])
          return;
      for (s = 0; s < r.length; ++s)
        if (i == r[s])
          return;
      var f = e[i], l = "string";
      typeof f == "number" ? (l = "float", f = String(f)) : f === !0 || f === !1 ? (l = "boolean", f = f ? "1" : "0") : f = String(f), a.push(q(La(i), f, { "dt:dt": l }));
    }
  }), t && Xe(t).forEach(function(i) {
    if (!!Object.prototype.hasOwnProperty.call(t, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = t[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === !0 || s === !1 ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), a.push(q(La(i), s, { "dt:dt": f }));
    }
  }), "<" + n + ' xmlns="' + fr.o + '">' + a.join("") + "</" + n + ">";
}
function oc(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, n = r % Math.pow(2, 32), a = (r - n) / Math.pow(2, 32);
  n *= 1e7, a *= 1e7;
  var i = n / Math.pow(2, 32) | 0;
  i > 0 && (n = n % Math.pow(2, 32), a += i);
  var s = U(8);
  return s.write_shift(4, n), s.write_shift(4, a), s;
}
function Ya(e, t) {
  var r = U(4), n = U(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      n = U(8), n.write_shift(8, t, "f");
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = oc(t);
      break;
    case 31:
    case 80:
      for (n = U(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), n.write_shift(4, t.length + 1), n.write_shift(0, t, "dbcs"); n.l != n.length; )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return He([r, n]);
}
var _s = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function lc(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date)
        return 64;
      break;
  }
  return -1;
}
function qa(e, t, r) {
  var n = U(8), a = [], i = [], s = 8, f = 0, l = U(8), o = U(8);
  if (l.write_shift(4, 2), l.write_shift(4, 1200), o.write_shift(4, 1), i.push(l), a.push(o), s += 8 + l.length, !t) {
    o = U(8), o.write_shift(4, 0), a.unshift(o);
    var c = [U(4)];
    for (c[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var p = e[f][0];
      for (l = U(4 + 4 + 2 * (p.length + 1) + (p.length % 2 ? 0 : 2)), l.write_shift(4, f + 2), l.write_shift(4, p.length + 1), l.write_shift(0, p, "dbcs"); l.l != l.length; )
        l.write_shift(1, 0);
      c.push(l);
    }
    l = He(c), i.unshift(l), s += 8 + l.length;
  }
  for (f = 0; f < e.length; ++f)
    if (!(t && !t[e[f][0]]) && !(_s.indexOf(e[f][0]) > -1 || vs.indexOf(e[f][0]) > -1) && e[f][1] != null) {
      var u = e[f][1], v = 0;
      if (t) {
        v = +t[e[f][0]];
        var E = r[v];
        if (E.p == "version" && typeof u == "string") {
          var x = u.split(".");
          u = (+x[0] << 16) + (+x[1] || 0);
        }
        l = Ya(E.t, u);
      } else {
        var _ = lc(u);
        _ == -1 && (_ = 31, u = String(u)), l = Ya(_, u);
      }
      i.push(l), o = U(8), o.write_shift(4, t ? v : 2 + f), a.push(o), s += 8 + l.length;
    }
  var O = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f)
    a[f].write_shift(4, O), O += i[f].length;
  return n.write_shift(4, s), n.write_shift(4, i.length), He([n].concat(a).concat(i));
}
function Ja(e, t, r, n, a, i) {
  var s = U(a ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, Ee.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, a ? 2 : 1), s.write_shift(16, t, "hex"), s.write_shift(4, a ? 68 : 48);
  var l = qa(e, r, n);
  if (f.push(l), a) {
    var o = qa(a, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + l.length), f.push(o);
  }
  return He(f);
}
function cc(e, t) {
  t || (t = U(e));
  for (var r = 0; r < e; ++r)
    t.write_shift(1, 0);
  return t;
}
function hc(e, t) {
  return e.read_shift(t) === 1;
}
function Je(e, t) {
  return t || (t = U(2)), t.write_shift(2, +!!e), t;
}
function Es(e) {
  return e.read_shift(2, "u");
}
function xr(e, t) {
  return t || (t = U(2)), t.write_shift(2, e), t;
}
function Ts(e, t, r) {
  return r || (r = U(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function ws(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), a = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var i = e.read_shift(1);
    i && (a = "dbcs-cont");
  } else
    r.biff == 12 && (a = "wstr");
  r.biff >= 2 && r.biff <= 5 && (a = "cpstr");
  var s = n ? e.read_shift(n, a) : "";
  return s;
}
function uc(e) {
  var t = e.t || "", r = U(3 + 0);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = U(2 * t.length);
  n.write_shift(2 * t.length, t, "utf16le");
  var a = [r, n];
  return He(a);
}
function xc(e, t, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(t, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(t, "dbcs-cont");
  }
  var a = e.read_shift(1);
  return a === 0 ? n = e.read_shift(t, "sbcs-cont") : n = e.read_shift(t, "dbcs-cont"), n;
}
function dc(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : xc(e, n, r);
}
function pc(e, t, r) {
  if (r.biff > 5)
    return dc(e, t, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Ss(e, t, r) {
  return r || (r = U(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function Za(e, t) {
  t || (t = U(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function vc(e) {
  var t = U(512), r = 0, n = e.Target;
  n.slice(0, 7) == "file://" && (n = n.slice(7));
  var a = n.indexOf("#"), i = a > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case "#":
      i = 28;
      break;
    case ".":
      i &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < s.length; ++r)
    t.write_shift(4, s[r]);
  if (i == 28)
    n = n.slice(1), Za(n, t);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    var f = a > -1 ? n.slice(0, a) : n;
    for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r)
      t.write_shift(2, f.charCodeAt(r));
    t.write_shift(2, 0), i & 8 && Za(a > -1 ? n.slice(a + 1) : "", t);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    for (var l = 0; n.slice(l * 3, l * 3 + 3) == "../" || n.slice(l * 3, l * 3 + 3) == "..\\"; )
      ++l;
    for (t.write_shift(2, l), t.write_shift(4, n.length - 3 * l + 1), r = 0; r < n.length - 3 * l; ++r)
      t.write_shift(1, n.charCodeAt(r + 3 * l) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function Zr(e, t, r, n) {
  return n || (n = U(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n;
}
function mc(e, t, r) {
  var n = r.biff > 8 ? 4 : 2, a = e.read_shift(n), i = e.read_shift(n, "i"), s = e.read_shift(n, "i");
  return [a, i, s];
}
function gc(e) {
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), a = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: a, r } };
}
function As(e, t) {
  return t || (t = U(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function L0(e, t, r) {
  var n = 1536, a = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      n = 1280, a = 8;
      break;
    case "biff4":
      n = 4, a = 6;
      break;
    case "biff3":
      n = 3, a = 6;
      break;
    case "biff2":
      n = 2, a = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var i = U(a);
  return i.write_shift(2, n), i.write_shift(2, t), a > 4 && i.write_shift(2, 29282), a > 6 && i.write_shift(2, 1997), a > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i;
}
function _c(e, t) {
  var r = !t || t.biff == 8, n = U(r ? 112 : 54);
  for (n.write_shift(t.biff == 8 ? 2 : 1, 7), r && n.write_shift(1, 0), n.write_shift(4, 859007059), n.write_shift(4, 5458548 | (r ? 0 : 536870912)); n.l < n.length; )
    n.write_shift(1, r ? 0 : 32);
  return n;
}
function Ec(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, n = U(8 + r * e.name.length);
  n.write_shift(4, e.pos), n.write_shift(1, e.hs || 0), n.write_shift(1, e.dt), n.write_shift(1, e.name.length), t.biff >= 8 && n.write_shift(1, 1), n.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var a = n.slice(0, n.l);
  return a.l = n.l, a;
}
function Tc(e, t) {
  var r = U(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], a = 0; a < e.length; ++a)
    n[a] = uc(e[a]);
  var i = He([r].concat(n));
  return i.parts = [r.length].concat(n.map(function(s) {
    return s.length;
  })), i;
}
function wc() {
  var e = U(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Sc(e) {
  var t = U(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function Ac(e, t) {
  var r = e.name || "Arial", n = t && t.biff == 5, a = n ? 15 + r.length : 16 + 2 * r.length, i = U(a);
  return i.write_shift(2, (e.sz || 12) * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, r.length), n || i.write_shift(1, 1), i.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"), i;
}
function Fc(e, t, r, n) {
  var a = U(10);
  return Zr(e, t, n, a), a.write_shift(4, r), a;
}
function yc(e, t, r, n, a) {
  var i = !a || a.biff == 8, s = U(6 + 2 + +i + (1 + i) * r.length);
  return Zr(e, t, n, s), s.write_shift(2, r.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs"), s;
}
function Cc(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = U(a ? 3 + t.length : 5 + 2 * t.length)), n.write_shift(2, e), n.write_shift(a ? 1 : 2, t.length), a || n.write_shift(1, 1), n.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le");
  var i = n.length > n.l ? n.slice(0, n.l) : n;
  return i.l == null && (i.l = i.length), i;
}
function Oc(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, n = U(2 * r + 6);
  return n.write_shift(r, e.s.r), n.write_shift(r, e.e.r + 1), n.write_shift(2, e.s.c), n.write_shift(2, e.e.c + 1), n.write_shift(2, 0), n;
}
function Qa(e, t, r, n) {
  var a = r && r.biff == 5;
  n || (n = U(a ? 16 : 20)), n.write_shift(2, 0), e.style ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524)) : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
  var i = 0;
  return e.numFmtId > 0 && a && (i |= 1024), n.write_shift(4, i), n.write_shift(4, 0), a || n.write_shift(4, 0), n.write_shift(2, 0), n;
}
function Rc(e) {
  var t = U(8);
  return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t;
}
function Dc(e, t, r, n, a, i) {
  var s = U(8);
  return Zr(e, t, n, s), Ts(r, i, s), s;
}
function Nc(e, t, r, n) {
  var a = U(14);
  return Zr(e, t, n, a), Jr(r, a), a;
}
function Ic(e, t, r) {
  if (r.biff < 8)
    return kc(e, t, r);
  for (var n = [], a = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; )
    n.push(mc(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != a)
    throw new Error("Bad ExternSheet: " + e.l + " != " + a);
  return n;
}
function kc(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = ws(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Pc(e) {
  var t = U(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r)
    As(e[r], t);
  return t;
}
function Lc(e) {
  var t = U(24), r = Me(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), a = 0; a < 16; ++a)
    t.write_shift(1, parseInt(n[a], 16));
  return He([t, vc(e[1])]);
}
function Bc(e) {
  var t = e[1].Tooltip, r = U(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = Me(e[0]);
  r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c);
  for (var a = 0; a < t.length; ++a)
    r.write_shift(2, t.charCodeAt(a));
  return r.write_shift(2, 0), r;
}
function Mc(e) {
  return e || (e = U(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Uc(e, t, r) {
  if (!r.cellStyles)
    return Fr(e, t);
  var n = r && r.biff >= 12 ? 4 : 2, a = e.read_shift(n), i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(n), l = e.read_shift(2);
  n == 2 && (e.l += 2);
  var o = { s: a, e: i, w: s, ixfe: f, flags: l };
  return (r.biff >= 5 || !r.biff) && (o.level = l >> 8 & 7), o;
}
function bc(e, t) {
  var r = U(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var n = 0;
  return e.hidden && (n |= 1), r.write_shift(1, n), n = e.level || 0, r.write_shift(1, n), r.write_shift(2, 0), r;
}
function Wc(e) {
  for (var t = U(2 * e), r = 0; r < e; ++r)
    t.write_shift(2, r + 1);
  return t;
}
function Hc(e, t, r) {
  var n = U(15);
  return zt(n, e, t), n.write_shift(8, r, "f"), n;
}
function Vc(e, t, r) {
  var n = U(9);
  return zt(n, e, t), n.write_shift(2, r), n;
}
var Gc = /* @__PURE__ */ function() {
  var e = {
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127,
    8: 865,
    9: 437,
    10: 850,
    11: 437,
    13: 437,
    14: 850,
    15: 437,
    16: 850,
    17: 437,
    18: 850,
    19: 932,
    20: 850,
    21: 437,
    22: 850,
    23: 865,
    24: 437,
    25: 437,
    26: 850,
    27: 437,
    28: 863,
    29: 850,
    31: 852,
    34: 852,
    35: 852,
    36: 860,
    37: 850,
    38: 866,
    55: 850,
    64: 852,
    77: 936,
    78: 949,
    79: 950,
    80: 874,
    87: 1252,
    88: 1252,
    89: 1252,
    108: 863,
    134: 737,
    135: 852,
    136: 857,
    204: 1257,
    255: 16969
  }, t = A0({
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127
  });
  function r(f, l) {
    var o = [], c = qr(1);
    switch (l.type) {
      case "base64":
        c = _r(kr(f));
        break;
      case "binary":
        c = _r(f);
        break;
      case "buffer":
      case "array":
        c = f;
        break;
    }
    sr(c, 0);
    var p = c.read_shift(1), u = !!(p & 136), v = !1, E = !1;
    switch (p) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        v = !0, u = !0;
        break;
      case 49:
        v = !0, u = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        E = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + p.toString(16));
    }
    var x = 0, _ = 521;
    p == 2 && (x = c.read_shift(2)), c.l += 3, p != 2 && (x = c.read_shift(4)), x > 1048576 && (x = 1e6), p != 2 && (_ = c.read_shift(2));
    var O = c.read_shift(2), R = l.codepage || 1252;
    p != 2 && (c.l += 16, c.read_shift(1), c[c.l] !== 0 && (R = e[c[c.l]]), c.l += 1, c.l += 2), E && (c.l += 36);
    for (var y = [], M = {}, b = Math.min(c.length, p == 2 ? 521 : _ - 10 - (v ? 264 : 0)), re = E ? 32 : 11; c.l < b && c[c.l] != 13; )
      switch (M = {}, M.name = zr.utils.decode(R, c.slice(c.l, c.l + re)).replace(/[\u0000\r\n].*$/g, ""), c.l += re, M.type = String.fromCharCode(c.read_shift(1)), p != 2 && !E && (M.offset = c.read_shift(4)), M.len = c.read_shift(1), p == 2 && (M.offset = c.read_shift(2)), M.dec = c.read_shift(1), M.name.length && y.push(M), p != 2 && (c.l += E ? 13 : 14), M.type) {
        case "B":
          (!v || M.len != 8) && l.WTF && console.log("Skipping " + M.name + ":" + M.type);
          break;
        case "G":
        case "P":
          l.WTF && console.log("Skipping " + M.name + ":" + M.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + M.type);
      }
    if (c[c.l] !== 13 && (c.l = _ - 1), c.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + c.l + " " + c[c.l]);
    c.l = _;
    var D = 0, H = 0;
    for (o[0] = [], H = 0; H != y.length; ++H)
      o[0][H] = y[H].name;
    for (; x-- > 0; ) {
      if (c[c.l] === 42) {
        c.l += O;
        continue;
      }
      for (++c.l, o[++D] = [], H = 0, H = 0; H != y.length; ++H) {
        var L = c.slice(c.l, c.l + y[H].len);
        c.l += y[H].len, sr(L, 0);
        var G = zr.utils.decode(R, L);
        switch (y[H].type) {
          case "C":
            G.trim().length && (o[D][H] = G.replace(/\s+$/, ""));
            break;
          case "D":
            G.length === 8 ? o[D][H] = new Date(+G.slice(0, 4), +G.slice(4, 6) - 1, +G.slice(6, 8)) : o[D][H] = G;
            break;
          case "F":
            o[D][H] = parseFloat(G.trim());
            break;
          case "+":
          case "I":
            o[D][H] = E ? L.read_shift(-4, "i") ^ 2147483648 : L.read_shift(4, "i");
            break;
          case "L":
            switch (G.trim().toUpperCase()) {
              case "Y":
              case "T":
                o[D][H] = !0;
                break;
              case "N":
              case "F":
                o[D][H] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + G + "|");
            }
            break;
          case "M":
            if (!u)
              throw new Error("DBF Unexpected MEMO for type " + p.toString(16));
            o[D][H] = "##MEMO##" + (E ? parseInt(G.trim(), 10) : L.read_shift(4));
            break;
          case "N":
            G = G.replace(/\u0000/g, "").trim(), G && G != "." && (o[D][H] = +G || 0);
            break;
          case "@":
            o[D][H] = new Date(L.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            o[D][H] = new Date((L.read_shift(4) - 2440588) * 864e5 + L.read_shift(4));
            break;
          case "Y":
            o[D][H] = L.read_shift(4, "i") / 1e4 + L.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            o[D][H] = -L.read_shift(-8, "f");
            break;
          case "B":
            if (v && y[H].len == 8) {
              o[D][H] = L.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            L.l += y[H].len;
            break;
          case "0":
            if (y[H].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + y[H].type);
        }
      }
    }
    if (p != 2 && c.l < c.length && c[c.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (c.l - 1) + " of " + c.length + " " + c[c.l - 1].toString(16));
    return l && l.sheetRows && (o = o.slice(0, l.sheetRows)), l.DBF = y, o;
  }
  function n(f, l) {
    var o = l || {};
    o.dateNF || (o.dateNF = "yyyymmdd");
    var c = wt(r(f, o), o);
    return c["!cols"] = o.DBF.map(function(p) {
      return {
        wch: p.len,
        DBF: p
      };
    }), delete o.DBF, c;
  }
  function a(f, l) {
    try {
      return et(n(f, l), l);
    } catch (o) {
      if (l && l.WTF)
        throw o;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, l) {
    var o = l || {};
    if (+o.codepage >= 0 && Bt(+o.codepage), o.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var c = Qe(), p = Tn(f, { header: 1, raw: !0, cellDates: !0 }), u = p[0], v = p.slice(1), E = f["!cols"] || [], x = 0, _ = 0, O = 0, R = 1;
    for (x = 0; x < u.length; ++x) {
      if (((E[x] || {}).DBF || {}).name) {
        u[x] = E[x].DBF.name, ++O;
        continue;
      }
      if (u[x] != null) {
        if (++O, typeof u[x] == "number" && (u[x] = u[x].toString(10)), typeof u[x] != "string")
          throw new Error("DBF Invalid column name " + u[x] + " |" + typeof u[x] + "|");
        if (u.indexOf(u[x]) !== x) {
          for (_ = 0; _ < 1024; ++_)
            if (u.indexOf(u[x] + "_" + _) == -1) {
              u[x] += "_" + _;
              break;
            }
        }
      }
    }
    var y = we(f["!ref"]), M = [], b = [], re = [];
    for (x = 0; x <= y.e.c - y.s.c; ++x) {
      var D = "", H = "", L = 0, G = [];
      for (_ = 0; _ < v.length; ++_)
        v[_][x] != null && G.push(v[_][x]);
      if (G.length == 0 || u[x] == null) {
        M[x] = "?";
        continue;
      }
      for (_ = 0; _ < G.length; ++_) {
        switch (typeof G[_]) {
          case "number":
            H = "B";
            break;
          case "string":
            H = "C";
            break;
          case "boolean":
            H = "L";
            break;
          case "object":
            H = G[_] instanceof Date ? "D" : "C";
            break;
          default:
            H = "C";
        }
        L = Math.max(L, String(G[_]).length), D = D && D != H ? "C" : H;
      }
      L > 250 && (L = 250), H = ((E[x] || {}).DBF || {}).type, H == "C" && E[x].DBF.len > L && (L = E[x].DBF.len), D == "B" && H == "N" && (D = "N", re[x] = E[x].DBF.dec, L = E[x].DBF.len), b[x] = D == "C" || H == "N" ? L : i[D] || 0, R += b[x], M[x] = D;
    }
    var z = c.next(32);
    for (z.write_shift(4, 318902576), z.write_shift(4, v.length), z.write_shift(2, 296 + 32 * O), z.write_shift(2, R), x = 0; x < 4; ++x)
      z.write_shift(4, 0);
    for (z.write_shift(4, 0 | (+t[yi] || 3) << 8), x = 0, _ = 0; x < u.length; ++x)
      if (u[x] != null) {
        var j = c.next(32), Q = (u[x].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        j.write_shift(1, Q, "sbcs"), j.write_shift(1, M[x] == "?" ? "C" : M[x], "sbcs"), j.write_shift(4, _), j.write_shift(1, b[x] || i[M[x]] || 0), j.write_shift(1, re[x] || 0), j.write_shift(1, 2), j.write_shift(4, 0), j.write_shift(1, 0), j.write_shift(4, 0), j.write_shift(4, 0), _ += b[x] || i[M[x]] || 0;
      }
    var he = c.next(264);
    for (he.write_shift(4, 13), x = 0; x < 65; ++x)
      he.write_shift(4, 0);
    for (x = 0; x < v.length; ++x) {
      var oe = c.next(R);
      for (oe.write_shift(1, 0), _ = 0; _ < u.length; ++_)
        if (u[_] != null)
          switch (M[_]) {
            case "L":
              oe.write_shift(1, v[x][_] == null ? 63 : v[x][_] ? 84 : 70);
              break;
            case "B":
              oe.write_shift(8, v[x][_] || 0, "f");
              break;
            case "N":
              var Oe = "0";
              for (typeof v[x][_] == "number" && (Oe = v[x][_].toFixed(re[_] || 0)), O = 0; O < b[_] - Oe.length; ++O)
                oe.write_shift(1, 32);
              oe.write_shift(1, Oe, "sbcs");
              break;
            case "D":
              v[x][_] ? (oe.write_shift(4, ("0000" + v[x][_].getFullYear()).slice(-4), "sbcs"), oe.write_shift(2, ("00" + (v[x][_].getMonth() + 1)).slice(-2), "sbcs"), oe.write_shift(2, ("00" + v[x][_].getDate()).slice(-2), "sbcs")) : oe.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var Re = String(v[x][_] != null ? v[x][_] : "").slice(0, b[_]);
              for (oe.write_shift(1, Re, "sbcs"), O = 0; O < b[_] - Re.length; ++O)
                oe.write_shift(1, 32);
              break;
          }
    }
    return c.next(1).write_shift(1, 26), c.end();
  }
  return {
    to_workbook: a,
    to_sheet: n,
    from_sheet: s
  };
}(), Xc = /* @__PURE__ */ function() {
  var e = {
    AA: "\xC0",
    BA: "\xC1",
    CA: "\xC2",
    DA: 195,
    HA: "\xC4",
    JA: 197,
    AE: "\xC8",
    BE: "\xC9",
    CE: "\xCA",
    HE: "\xCB",
    AI: "\xCC",
    BI: "\xCD",
    CI: "\xCE",
    HI: "\xCF",
    AO: "\xD2",
    BO: "\xD3",
    CO: "\xD4",
    DO: 213,
    HO: "\xD6",
    AU: "\xD9",
    BU: "\xDA",
    CU: "\xDB",
    HU: "\xDC",
    Aa: "\xE0",
    Ba: "\xE1",
    Ca: "\xE2",
    Da: 227,
    Ha: "\xE4",
    Ja: 229,
    Ae: "\xE8",
    Be: "\xE9",
    Ce: "\xEA",
    He: "\xEB",
    Ai: "\xEC",
    Bi: "\xED",
    Ci: "\xEE",
    Hi: "\xEF",
    Ao: "\xF2",
    Bo: "\xF3",
    Co: "\xF4",
    Do: 245,
    Ho: "\xF6",
    Au: "\xF9",
    Bu: "\xFA",
    Cu: "\xFB",
    Hu: "\xFC",
    KC: "\xC7",
    Kc: "\xE7",
    q: "\xE6",
    z: "\u0153",
    a: "\xC6",
    j: "\u0152",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    0: 176,
    1: 177,
    2: 178,
    3: 179,
    5: 181,
    6: 182,
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + Xe(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(u, v) {
    var E = e[v];
    return typeof E == "number" ? Sa(E) : E;
  }, n = function(u, v, E) {
    var x = v.charCodeAt(0) - 32 << 4 | E.charCodeAt(0) - 48;
    return x == 59 ? u : Sa(x);
  };
  e["|"] = 254;
  function a(u, v) {
    switch (v.type) {
      case "base64":
        return i(kr(u), v);
      case "binary":
        return i(u, v);
      case "buffer":
        return i(de && Buffer.isBuffer(u) ? u.toString("binary") : Vt(u), v);
      case "array":
        return i(Dn(u), v);
    }
    throw new Error("Unrecognized type " + v.type);
  }
  function i(u, v) {
    var E = u.split(/[\n\r]+/), x = -1, _ = -1, O = 0, R = 0, y = [], M = [], b = null, re = {}, D = [], H = [], L = [], G = 0, z;
    for (+v.codepage >= 0 && Bt(+v.codepage); O !== E.length; ++O) {
      G = 0;
      var j = E[O].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(t, r), Q = j.replace(/;;/g, "\0").split(";").map(function(F) {
        return F.replace(/\u0000/g, ";");
      }), he = Q[0], oe;
      if (j.length > 0)
        switch (he) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            Q[1].charAt(0) == "P" && M.push(j.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var Oe = !1, Re = !1, pr = !1, Pe = !1, cr = -1, nr = -1;
            for (R = 1; R < Q.length; ++R)
              switch (Q[R].charAt(0)) {
                case "A":
                  break;
                case "X":
                  _ = parseInt(Q[R].slice(1)) - 1, Re = !0;
                  break;
                case "Y":
                  for (x = parseInt(Q[R].slice(1)) - 1, Re || (_ = 0), z = y.length; z <= x; ++z)
                    y[z] = [];
                  break;
                case "K":
                  oe = Q[R].slice(1), oe.charAt(0) === '"' ? oe = oe.slice(1, oe.length - 1) : oe === "TRUE" ? oe = !0 : oe === "FALSE" ? oe = !1 : isNaN(Nr(oe)) ? isNaN(Ut(oe).getDate()) || (oe = Ze(oe)) : (oe = Nr(oe), b !== null && Ui(b) && (oe = Vi(oe))), Oe = !0;
                  break;
                case "E":
                  Pe = !0;
                  var A = Vh(Q[R].slice(1), { r: x, c: _ });
                  y[x][_] = [y[x][_], A];
                  break;
                case "S":
                  pr = !0, y[x][_] = [y[x][_], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  cr = parseInt(Q[R].slice(1)) - 1;
                  break;
                case "C":
                  nr = parseInt(Q[R].slice(1)) - 1;
                  break;
                default:
                  if (v && v.WTF)
                    throw new Error("SYLK bad record " + j);
              }
            if (Oe && (y[x][_] && y[x][_].length == 2 ? y[x][_][0] = oe : y[x][_] = oe, b = null), pr) {
              if (Pe)
                throw new Error("SYLK shared formula cannot have own formula");
              var B = cr > -1 && y[cr][nr];
              if (!B || !B[1])
                throw new Error("SYLK shared formula cannot find base");
              y[x][_][1] = Gh(B[1], { r: x - cr, c: _ - nr });
            }
            break;
          case "F":
            var C = 0;
            for (R = 1; R < Q.length; ++R)
              switch (Q[R].charAt(0)) {
                case "X":
                  _ = parseInt(Q[R].slice(1)) - 1, ++C;
                  break;
                case "Y":
                  for (x = parseInt(Q[R].slice(1)) - 1, z = y.length; z <= x; ++z)
                    y[z] = [];
                  break;
                case "M":
                  G = parseInt(Q[R].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  b = M[parseInt(Q[R].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (L = Q[R].slice(1).split(" "), z = parseInt(L[0], 10); z <= parseInt(L[1], 10); ++z)
                    G = parseInt(L[2], 10), H[z - 1] = G === 0 ? { hidden: !0 } : { wch: G }, B0(H[z - 1]);
                  break;
                case "C":
                  _ = parseInt(Q[R].slice(1)) - 1, H[_] || (H[_] = {});
                  break;
                case "R":
                  x = parseInt(Q[R].slice(1)) - 1, D[x] || (D[x] = {}), G > 0 ? (D[x].hpt = G, D[x].hpx = Rs(G)) : G === 0 && (D[x].hidden = !0);
                  break;
                default:
                  if (v && v.WTF)
                    throw new Error("SYLK bad record " + j);
              }
            C < 1 && (b = null);
            break;
          default:
            if (v && v.WTF)
              throw new Error("SYLK bad record " + j);
        }
    }
    return D.length > 0 && (re["!rows"] = D), H.length > 0 && (re["!cols"] = H), v && v.sheetRows && (y = y.slice(0, v.sheetRows)), [y, re];
  }
  function s(u, v) {
    var E = a(u, v), x = E[0], _ = E[1], O = wt(x, v);
    return Xe(_).forEach(function(R) {
      O[R] = _[R];
    }), O;
  }
  function f(u, v) {
    return et(s(u, v), v);
  }
  function l(u, v, E, x) {
    var _ = "C;Y" + (E + 1) + ";X" + (x + 1) + ";K";
    switch (u.t) {
      case "n":
        _ += u.v || 0, u.f && !u.F && (_ += ";E" + U0(u.f, { r: E, c: x }));
        break;
      case "b":
        _ += u.v ? "TRUE" : "FALSE";
        break;
      case "e":
        _ += u.w || u.v;
        break;
      case "d":
        _ += '"' + (u.w || u.v) + '"';
        break;
      case "s":
        _ += '"' + u.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return _;
  }
  function o(u, v) {
    v.forEach(function(E, x) {
      var _ = "F;W" + (x + 1) + " " + (x + 1) + " ";
      E.hidden ? _ += "0" : (typeof E.width == "number" && !E.wpx && (E.wpx = mn(E.width)), typeof E.wpx == "number" && !E.wch && (E.wch = gn(E.wpx)), typeof E.wch == "number" && (_ += Math.round(E.wch))), _.charAt(_.length - 1) != " " && u.push(_);
    });
  }
  function c(u, v) {
    v.forEach(function(E, x) {
      var _ = "F;";
      E.hidden ? _ += "M0;" : E.hpt ? _ += "M" + 20 * E.hpt + ";" : E.hpx && (_ += "M" + 20 * _n(E.hpx) + ";"), _.length > 2 && u.push(_ + "R" + (x + 1));
    });
  }
  function p(u, v) {
    var E = ["ID;PWXL;N;E"], x = [], _ = we(u["!ref"]), O, R = Array.isArray(u), y = `\r
`;
    E.push("P;PGeneral"), E.push("F;P0;DG0G8;M255"), u["!cols"] && o(E, u["!cols"]), u["!rows"] && c(E, u["!rows"]), E.push("B;Y" + (_.e.r - _.s.r + 1) + ";X" + (_.e.c - _.s.c + 1) + ";D" + [_.s.c, _.s.r, _.e.c, _.e.r].join(" "));
    for (var M = _.s.r; M <= _.e.r; ++M)
      for (var b = _.s.c; b <= _.e.c; ++b) {
        var re = _e({ r: M, c: b });
        O = R ? (u[M] || [])[b] : u[re], !(!O || O.v == null && (!O.f || O.F)) && x.push(l(O, u, M, b));
      }
    return E.join(y) + y + x.join(y) + y + "E" + y;
  }
  return {
    to_workbook: f,
    to_sheet: s,
    from_sheet: p
  };
}(), $c = /* @__PURE__ */ function() {
  function e(i, s) {
    switch (s.type) {
      case "base64":
        return t(kr(i), s);
      case "binary":
        return t(i, s);
      case "buffer":
        return t(de && Buffer.isBuffer(i) ? i.toString("binary") : Vt(i), s);
      case "array":
        return t(Dn(i), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function t(i, s) {
    for (var f = i.split(`
`), l = -1, o = -1, c = 0, p = []; c !== f.length; ++c) {
      if (f[c].trim() === "BOT") {
        p[++l] = [], o = 0;
        continue;
      }
      if (!(l < 0)) {
        var u = f[c].trim().split(","), v = u[0], E = u[1];
        ++c;
        for (var x = f[c] || ""; (x.match(/["]/g) || []).length & 1 && c < f.length - 1; )
          x += `
` + f[++c];
        switch (x = x.trim(), +v) {
          case -1:
            if (x === "BOT") {
              p[++l] = [], o = 0;
              continue;
            } else if (x !== "EOD")
              throw new Error("Unrecognized DIF special command " + x);
            break;
          case 0:
            x === "TRUE" ? p[l][o] = !0 : x === "FALSE" ? p[l][o] = !1 : isNaN(Nr(E)) ? isNaN(Ut(E).getDate()) ? p[l][o] = E : p[l][o] = Ze(E) : p[l][o] = Nr(E), ++o;
            break;
          case 1:
            x = x.slice(1, x.length - 1), x = x.replace(/""/g, '"'), x && x.match(/^=".*"$/) && (x = x.slice(2, -1)), p[l][o++] = x !== "" ? x : null;
            break;
        }
        if (x === "EOD")
          break;
      }
    }
    return s && s.sheetRows && (p = p.slice(0, s.sheetRows)), p;
  }
  function r(i, s) {
    return wt(e(i, s), s);
  }
  function n(i, s) {
    return et(r(i, s), s);
  }
  var a = /* @__PURE__ */ function() {
    var i = function(l, o, c, p, u) {
      l.push(o), l.push(c + "," + p), l.push('"' + u.replace(/"/g, '""') + '"');
    }, s = function(l, o, c, p) {
      l.push(o + "," + c), l.push(o == 1 ? '"' + p.replace(/"/g, '""') + '"' : p);
    };
    return function(l) {
      var o = [], c = we(l["!ref"]), p, u = Array.isArray(l);
      i(o, "TABLE", 0, 1, "sheetjs"), i(o, "VECTORS", 0, c.e.r - c.s.r + 1, ""), i(o, "TUPLES", 0, c.e.c - c.s.c + 1, ""), i(o, "DATA", 0, 0, "");
      for (var v = c.s.r; v <= c.e.r; ++v) {
        s(o, -1, 0, "BOT");
        for (var E = c.s.c; E <= c.e.c; ++E) {
          var x = _e({ r: v, c: E });
          if (p = u ? (l[v] || [])[E] : l[x], !p) {
            s(o, 1, 0, "");
            continue;
          }
          switch (p.t) {
            case "n":
              var _ = p.w;
              !_ && p.v != null && (_ = p.v), _ == null ? p.f && !p.F ? s(o, 1, 0, "=" + p.f) : s(o, 1, 0, "") : s(o, 0, _, "V");
              break;
            case "b":
              s(o, 0, p.v ? 1 : 0, p.v ? "TRUE" : "FALSE");
              break;
            case "s":
              s(o, 1, 0, isNaN(p.v) ? p.v : '="' + p.v + '"');
              break;
            case "d":
              p.w || (p.w = Wr(p.z || Ce[14], rr(Ze(p.v)))), s(o, 0, p.w, "V");
              break;
            default:
              s(o, 1, 0, "");
          }
        }
      }
      s(o, -1, 0, "EOD");
      var O = `\r
`, R = o.join(O);
      return R;
    };
  }();
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: a
  };
}(), Fs = /* @__PURE__ */ function() {
  function e(p) {
    return p.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(p) {
    return p.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(p, u) {
    for (var v = p.split(`
`), E = -1, x = -1, _ = 0, O = []; _ !== v.length; ++_) {
      var R = v[_].trim().split(":");
      if (R[0] === "cell") {
        var y = Me(R[1]);
        if (O.length <= y.r)
          for (E = O.length; E <= y.r; ++E)
            O[E] || (O[E] = []);
        switch (E = y.r, x = y.c, R[2]) {
          case "t":
            O[E][x] = e(R[3]);
            break;
          case "v":
            O[E][x] = +R[3];
            break;
          case "vtf":
            var M = R[R.length - 1];
          case "vtc":
            switch (R[3]) {
              case "nl":
                O[E][x] = !!+R[4];
                break;
              default:
                O[E][x] = +R[4];
                break;
            }
            R[2] == "vtf" && (O[E][x] = [O[E][x], M]);
        }
      }
    }
    return u && u.sheetRows && (O = O.slice(0, u.sheetRows)), O;
  }
  function n(p, u) {
    return wt(r(p, u), u);
  }
  function a(p, u) {
    return et(n(p, u), u);
  }
  var i = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), s = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, f = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), l = "--SocialCalcSpreadsheetControlSave--";
  function o(p) {
    if (!p || !p["!ref"])
      return "";
    for (var u = [], v = [], E, x = "", _ = lr(p["!ref"]), O = Array.isArray(p), R = _.s.r; R <= _.e.r; ++R)
      for (var y = _.s.c; y <= _.e.c; ++y)
        if (x = _e({ r: R, c: y }), E = O ? (p[R] || [])[y] : p[x], !(!E || E.v == null || E.t === "z")) {
          switch (v = ["cell", x, "t"], E.t) {
            case "s":
            case "str":
              v.push(t(E.v));
              break;
            case "n":
              E.f ? (v[2] = "vtf", v[3] = "n", v[4] = E.v, v[5] = t(E.f)) : (v[2] = "v", v[3] = E.v);
              break;
            case "b":
              v[2] = "vt" + (E.f ? "f" : "c"), v[3] = "nl", v[4] = E.v ? "1" : "0", v[5] = t(E.f || (E.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var M = rr(Ze(E.v));
              v[2] = "vtc", v[3] = "nd", v[4] = "" + M, v[5] = E.w || Wr(E.z || Ce[14], M);
              break;
            case "e":
              continue;
          }
          u.push(v.join(":"));
        }
    return u.push("sheet:c:" + (_.e.c - _.s.c + 1) + ":r:" + (_.e.r - _.s.r + 1) + ":tvf:1"), u.push("valueformat:1:text-wiki"), u.join(`
`);
  }
  function c(p) {
    return [i, s, f, s, o(p), l].join(`
`);
  }
  return {
    to_workbook: a,
    to_sheet: n,
    from_sheet: c
  };
}(), jc = /* @__PURE__ */ function() {
  function e(c, p, u, v, E) {
    E.raw ? p[u][v] = c : c === "" || (c === "TRUE" ? p[u][v] = !0 : c === "FALSE" ? p[u][v] = !1 : isNaN(Nr(c)) ? isNaN(Ut(c).getDate()) ? p[u][v] = c : p[u][v] = Ze(c) : p[u][v] = Nr(c));
  }
  function t(c, p) {
    var u = p || {}, v = [];
    if (!c || c.length === 0)
      return v;
    for (var E = c.split(/[\r\n]/), x = E.length - 1; x >= 0 && E[x].length === 0; )
      --x;
    for (var _ = 10, O = 0, R = 0; R <= x; ++R)
      O = E[R].indexOf(" "), O == -1 ? O = E[R].length : O++, _ = Math.max(_, O);
    for (R = 0; R <= x; ++R) {
      v[R] = [];
      var y = 0;
      for (e(E[R].slice(0, _).trim(), v, R, y, u), y = 1; y <= (E[R].length - _) / 10 + 1; ++y)
        e(E[R].slice(_ + (y - 1) * 10, _ + y * 10).trim(), v, R, y, u);
    }
    return u.sheetRows && (v = v.slice(0, u.sheetRows)), v;
  }
  var r = {
    44: ",",
    9: "	",
    59: ";",
    124: "|"
  }, n = {
    44: 3,
    9: 2,
    59: 1,
    124: 0
  };
  function a(c) {
    for (var p = {}, u = !1, v = 0, E = 0; v < c.length; ++v)
      (E = c.charCodeAt(v)) == 34 ? u = !u : !u && E in r && (p[E] = (p[E] || 0) + 1);
    E = [];
    for (v in p)
      Object.prototype.hasOwnProperty.call(p, v) && E.push([p[v], v]);
    if (!E.length) {
      p = n;
      for (v in p)
        Object.prototype.hasOwnProperty.call(p, v) && E.push([p[v], v]);
    }
    return E.sort(function(x, _) {
      return x[0] - _[0] || n[x[1]] - n[_[1]];
    }), r[E.pop()[1]] || 44;
  }
  function i(c, p) {
    var u = p || {}, v = "", E = u.dense ? [] : {}, x = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    c.slice(0, 4) == "sep=" ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10 ? (v = c.charAt(4), c = c.slice(7)) : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10 ? (v = c.charAt(4), c = c.slice(6)) : v = a(c.slice(0, 1024)) : u && u.FS ? v = u.FS : v = a(c.slice(0, 1024));
    var _ = 0, O = 0, R = 0, y = 0, M = 0, b = v.charCodeAt(0), re = !1, D = 0, H = c.charCodeAt(0);
    c = c.replace(/\r\n/mg, `
`);
    var L = u.dateNF != null ? ol(u.dateNF) : null;
    function G() {
      var z = c.slice(y, M), j = {};
      if (z.charAt(0) == '"' && z.charAt(z.length - 1) == '"' && (z = z.slice(1, -1).replace(/""/g, '"')), z.length === 0)
        j.t = "z";
      else if (u.raw)
        j.t = "s", j.v = z;
      else if (z.trim().length === 0)
        j.t = "s", j.v = z;
      else if (z.charCodeAt(0) == 61)
        z.charCodeAt(1) == 34 && z.charCodeAt(z.length - 1) == 34 ? (j.t = "s", j.v = z.slice(2, -1).replace(/""/g, '"')) : Xh(z) ? (j.t = "n", j.f = z.slice(1)) : (j.t = "s", j.v = z);
      else if (z == "TRUE")
        j.t = "b", j.v = !0;
      else if (z == "FALSE")
        j.t = "b", j.v = !1;
      else if (!isNaN(R = Nr(z)))
        j.t = "n", u.cellText !== !1 && (j.w = z), j.v = R;
      else if (!isNaN(Ut(z).getDate()) || L && z.match(L)) {
        j.z = u.dateNF || Ce[14];
        var Q = 0;
        L && z.match(L) && (z = ll(z, u.dateNF, z.match(L) || []), Q = 1), u.cellDates ? (j.t = "d", j.v = Ze(z, Q)) : (j.t = "n", j.v = rr(Ze(z, Q))), u.cellText !== !1 && (j.w = Wr(j.z, j.v instanceof Date ? rr(j.v) : j.v)), u.cellNF || delete j.z;
      } else
        j.t = "s", j.v = z;
      if (j.t == "z" || (u.dense ? (E[_] || (E[_] = []), E[_][O] = j) : E[_e({ c: O, r: _ })] = j), y = M + 1, H = c.charCodeAt(y), x.e.c < O && (x.e.c = O), x.e.r < _ && (x.e.r = _), D == b)
        ++O;
      else if (O = 0, ++_, u.sheetRows && u.sheetRows <= _)
        return !0;
    }
    e:
      for (; M < c.length; ++M)
        switch (D = c.charCodeAt(M)) {
          case 34:
            H === 34 && (re = !re);
            break;
          case b:
          case 10:
          case 13:
            if (!re && G())
              break e;
            break;
        }
    return M - y > 0 && G(), E["!ref"] = Ne(x), E;
  }
  function s(c, p) {
    return !(p && p.PRN) || p.FS || c.slice(0, 4) == "sep=" || c.indexOf("	") >= 0 || c.indexOf(",") >= 0 || c.indexOf(";") >= 0 ? i(c, p) : wt(t(c, p), p);
  }
  function f(c, p) {
    var u = "", v = p.type == "string" ? [0, 0, 0, 0] : a2(c, p);
    switch (p.type) {
      case "base64":
        u = kr(c);
        break;
      case "binary":
        u = c;
        break;
      case "buffer":
        p.codepage == 65001 ? u = c.toString("utf8") : p.codepage && typeof zr < "u" ? u = zr.utils.decode(p.codepage, c) : u = de && Buffer.isBuffer(c) ? c.toString("binary") : Vt(c);
        break;
      case "array":
        u = Dn(c);
        break;
      case "string":
        u = c;
        break;
      default:
        throw new Error("Unrecognized type " + p.type);
    }
    return v[0] == 239 && v[1] == 187 && v[2] == 191 ? u = Nt(u.slice(3)) : p.type != "string" && p.type != "buffer" && p.codepage == 65001 ? u = Nt(u) : p.type == "binary" && typeof zr < "u" && p.codepage && (u = zr.utils.decode(p.codepage, zr.utils.encode(28591, u))), u.slice(0, 19) == "socialcalc:version:" ? Fs.to_sheet(p.type == "string" ? u : Nt(u), p) : s(u, p);
  }
  function l(c, p) {
    return et(f(c, p), p);
  }
  function o(c) {
    for (var p = [], u = we(c["!ref"]), v, E = Array.isArray(c), x = u.s.r; x <= u.e.r; ++x) {
      for (var _ = [], O = u.s.c; O <= u.e.c; ++O) {
        var R = _e({ r: x, c: O });
        if (v = E ? (c[x] || [])[O] : c[R], !v || v.v == null) {
          _.push("          ");
          continue;
        }
        for (var y = (v.w || (Pr(v), v.w) || "").slice(0, 10); y.length < 10; )
          y += " ";
        _.push(y + (O === 0 ? " " : ""));
      }
      p.push(_.join(""));
    }
    return p.join(`
`);
  }
  return {
    to_workbook: l,
    to_sheet: f,
    from_sheet: o
  };
}(), ei = /* @__PURE__ */ function() {
  function e(A, B, C) {
    if (!!A) {
      sr(A, A.l || 0);
      for (var F = C.Enum || cr; A.l < A.length; ) {
        var X = A.read_shift(2), se = F[X] || F[65535], fe = A.read_shift(2), ie = A.l + fe, ee = se.f && se.f(A, fe, C);
        if (A.l = ie, B(ee, se, X))
          return;
      }
    }
  }
  function t(A, B) {
    switch (B.type) {
      case "base64":
        return r(_r(kr(A)), B);
      case "binary":
        return r(_r(A), B);
      case "buffer":
      case "array":
        return r(A, B);
    }
    throw "Unsupported type " + B.type;
  }
  function r(A, B) {
    if (!A)
      return A;
    var C = B || {}, F = C.dense ? [] : {}, X = "Sheet1", se = "", fe = 0, ie = {}, ee = [], Te = [], ue = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ye = C.sheetRows || 0;
    if (A[2] == 0 && (A[3] == 8 || A[3] == 9) && A.length >= 16 && A[14] == 5 && A[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (A[2] == 2)
      C.Enum = cr, e(A, function(ae, hr, Cr) {
        switch (Cr) {
          case 0:
            C.vers = ae, ae >= 4096 && (C.qpro = !0);
            break;
          case 6:
            ue = ae;
            break;
          case 204:
            ae && (se = ae);
            break;
          case 222:
            se = ae;
            break;
          case 15:
          case 51:
            C.qpro || (ae[1].v = ae[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            Cr == 14 && (ae[2] & 112) == 112 && (ae[2] & 15) > 1 && (ae[2] & 15) < 15 && (ae[1].z = C.dateNF || Ce[14], C.cellDates && (ae[1].t = "d", ae[1].v = Vi(ae[1].v))), C.qpro && ae[3] > fe && (F["!ref"] = Ne(ue), ie[X] = F, ee.push(X), F = C.dense ? [] : {}, ue = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, fe = ae[3], X = se || "Sheet" + (fe + 1), se = "");
            var Xr = C.dense ? (F[ae[0].r] || [])[ae[0].c] : F[_e(ae[0])];
            if (Xr) {
              Xr.t = ae[1].t, Xr.v = ae[1].v, ae[1].z != null && (Xr.z = ae[1].z), ae[1].f != null && (Xr.f = ae[1].f);
              break;
            }
            C.dense ? (F[ae[0].r] || (F[ae[0].r] = []), F[ae[0].r][ae[0].c] = ae[1]) : F[_e(ae[0])] = ae[1];
            break;
        }
      }, C);
    else if (A[2] == 26 || A[2] == 14)
      C.Enum = nr, A[2] == 14 && (C.qpro = !0, A.l = 0), e(A, function(ae, hr, Cr) {
        switch (Cr) {
          case 204:
            X = ae;
            break;
          case 22:
            ae[1].v = ae[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (ae[3] > fe && (F["!ref"] = Ne(ue), ie[X] = F, ee.push(X), F = C.dense ? [] : {}, ue = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, fe = ae[3], X = "Sheet" + (fe + 1)), Ye > 0 && ae[0].r >= Ye)
              break;
            C.dense ? (F[ae[0].r] || (F[ae[0].r] = []), F[ae[0].r][ae[0].c] = ae[1]) : F[_e(ae[0])] = ae[1], ue.e.c < ae[0].c && (ue.e.c = ae[0].c), ue.e.r < ae[0].r && (ue.e.r = ae[0].r);
            break;
          case 27:
            ae[14e3] && (Te[ae[14e3][0]] = ae[14e3][1]);
            break;
          case 1537:
            Te[ae[0]] = ae[1], ae[0] == fe && (X = ae[1]);
            break;
        }
      }, C);
    else
      throw new Error("Unrecognized LOTUS BOF " + A[2]);
    if (F["!ref"] = Ne(ue), ie[se || X] = F, ee.push(se || X), !Te.length)
      return { SheetNames: ee, Sheets: ie };
    for (var pe = {}, yr = [], Fe = 0; Fe < Te.length; ++Fe)
      ie[ee[Fe]] ? (yr.push(Te[Fe] || ee[Fe]), pe[Te[Fe]] = ie[Te[Fe]] || ie[ee[Fe]]) : (yr.push(Te[Fe]), pe[Te[Fe]] = { "!ref": "A1" });
    return { SheetNames: yr, Sheets: pe };
  }
  function n(A, B) {
    var C = B || {};
    if (+C.codepage >= 0 && Bt(+C.codepage), C.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var F = Qe(), X = we(A["!ref"]), se = Array.isArray(A), fe = [];
    J(F, 0, i(1030)), J(F, 6, l(X));
    for (var ie = Math.min(X.e.r, 8191), ee = X.s.r; ee <= ie; ++ee)
      for (var Te = Ge(ee), ue = X.s.c; ue <= X.e.c; ++ue) {
        ee === X.s.r && (fe[ue] = ze(ue));
        var Ye = fe[ue] + Te, pe = se ? (A[ee] || [])[ue] : A[Ye];
        if (!(!pe || pe.t == "z"))
          if (pe.t == "n")
            (pe.v | 0) == pe.v && pe.v >= -32768 && pe.v <= 32767 ? J(F, 13, v(ee, ue, pe.v)) : J(F, 14, x(ee, ue, pe.v));
          else {
            var yr = Pr(pe);
            J(F, 15, p(ee, ue, yr.slice(0, 239)));
          }
      }
    return J(F, 1), F.end();
  }
  function a(A, B) {
    var C = B || {};
    if (+C.codepage >= 0 && Bt(+C.codepage), C.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var F = Qe();
    J(F, 0, s(A));
    for (var X = 0, se = 0; X < A.SheetNames.length; ++X)
      (A.Sheets[A.SheetNames[X]] || {})["!ref"] && J(F, 27, Pe(A.SheetNames[X], se++));
    var fe = 0;
    for (X = 0; X < A.SheetNames.length; ++X) {
      var ie = A.Sheets[A.SheetNames[X]];
      if (!(!ie || !ie["!ref"])) {
        for (var ee = we(ie["!ref"]), Te = Array.isArray(ie), ue = [], Ye = Math.min(ee.e.r, 8191), pe = ee.s.r; pe <= Ye; ++pe)
          for (var yr = Ge(pe), Fe = ee.s.c; Fe <= ee.e.c; ++Fe) {
            pe === ee.s.r && (ue[Fe] = ze(Fe));
            var ae = ue[Fe] + yr, hr = Te ? (ie[pe] || [])[Fe] : ie[ae];
            if (!(!hr || hr.t == "z"))
              if (hr.t == "n")
                J(F, 23, G(pe, Fe, fe, hr.v));
              else {
                var Cr = Pr(hr);
                J(F, 22, D(pe, Fe, fe, Cr.slice(0, 239)));
              }
          }
        ++fe;
      }
    }
    return J(F, 1), F.end();
  }
  function i(A) {
    var B = U(2);
    return B.write_shift(2, A), B;
  }
  function s(A) {
    var B = U(26);
    B.write_shift(2, 4096), B.write_shift(2, 4), B.write_shift(4, 0);
    for (var C = 0, F = 0, X = 0, se = 0; se < A.SheetNames.length; ++se) {
      var fe = A.SheetNames[se], ie = A.Sheets[fe];
      if (!(!ie || !ie["!ref"])) {
        ++X;
        var ee = lr(ie["!ref"]);
        C < ee.e.r && (C = ee.e.r), F < ee.e.c && (F = ee.e.c);
      }
    }
    return C > 8191 && (C = 8191), B.write_shift(2, C), B.write_shift(1, X), B.write_shift(1, F), B.write_shift(2, 0), B.write_shift(2, 0), B.write_shift(1, 1), B.write_shift(1, 2), B.write_shift(4, 0), B.write_shift(4, 0), B;
  }
  function f(A, B, C) {
    var F = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return B == 8 && C.qpro ? (F.s.c = A.read_shift(1), A.l++, F.s.r = A.read_shift(2), F.e.c = A.read_shift(1), A.l++, F.e.r = A.read_shift(2), F) : (F.s.c = A.read_shift(2), F.s.r = A.read_shift(2), B == 12 && C.qpro && (A.l += 2), F.e.c = A.read_shift(2), F.e.r = A.read_shift(2), B == 12 && C.qpro && (A.l += 2), F.s.c == 65535 && (F.s.c = F.e.c = F.s.r = F.e.r = 0), F);
  }
  function l(A) {
    var B = U(8);
    return B.write_shift(2, A.s.c), B.write_shift(2, A.s.r), B.write_shift(2, A.e.c), B.write_shift(2, A.e.r), B;
  }
  function o(A, B, C) {
    var F = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return C.qpro && C.vers != 20768 ? (F[0].c = A.read_shift(1), F[3] = A.read_shift(1), F[0].r = A.read_shift(2), A.l += 2) : (F[2] = A.read_shift(1), F[0].c = A.read_shift(2), F[0].r = A.read_shift(2)), F;
  }
  function c(A, B, C) {
    var F = A.l + B, X = o(A, B, C);
    if (X[1].t = "s", C.vers == 20768) {
      A.l++;
      var se = A.read_shift(1);
      return X[1].v = A.read_shift(se, "utf8"), X;
    }
    return C.qpro && A.l++, X[1].v = A.read_shift(F - A.l, "cstr"), X;
  }
  function p(A, B, C) {
    var F = U(7 + C.length);
    F.write_shift(1, 255), F.write_shift(2, B), F.write_shift(2, A), F.write_shift(1, 39);
    for (var X = 0; X < F.length; ++X) {
      var se = C.charCodeAt(X);
      F.write_shift(1, se >= 128 ? 95 : se);
    }
    return F.write_shift(1, 0), F;
  }
  function u(A, B, C) {
    var F = o(A, B, C);
    return F[1].v = A.read_shift(2, "i"), F;
  }
  function v(A, B, C) {
    var F = U(7);
    return F.write_shift(1, 255), F.write_shift(2, B), F.write_shift(2, A), F.write_shift(2, C, "i"), F;
  }
  function E(A, B, C) {
    var F = o(A, B, C);
    return F[1].v = A.read_shift(8, "f"), F;
  }
  function x(A, B, C) {
    var F = U(13);
    return F.write_shift(1, 255), F.write_shift(2, B), F.write_shift(2, A), F.write_shift(8, C, "f"), F;
  }
  function _(A, B, C) {
    var F = A.l + B, X = o(A, B, C);
    if (X[1].v = A.read_shift(8, "f"), C.qpro)
      A.l = F;
    else {
      var se = A.read_shift(2);
      M(A.slice(A.l, A.l + se), X), A.l += se;
    }
    return X;
  }
  function O(A, B, C) {
    var F = B & 32768;
    return B &= -32769, B = (F ? A : 0) + (B >= 8192 ? B - 16384 : B), (F ? "" : "$") + (C ? ze(B) : Ge(B));
  }
  var R = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, y = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  function M(A, B) {
    sr(A, 0);
    for (var C = [], F = 0, X = "", se = "", fe = "", ie = ""; A.l < A.length; ) {
      var ee = A[A.l++];
      switch (ee) {
        case 0:
          C.push(A.read_shift(8, "f"));
          break;
        case 1:
          se = O(B[0].c, A.read_shift(2), !0), X = O(B[0].r, A.read_shift(2), !1), C.push(se + X);
          break;
        case 2:
          {
            var Te = O(B[0].c, A.read_shift(2), !0), ue = O(B[0].r, A.read_shift(2), !1);
            se = O(B[0].c, A.read_shift(2), !0), X = O(B[0].r, A.read_shift(2), !1), C.push(Te + ue + ":" + se + X);
          }
          break;
        case 3:
          if (A.l < A.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          C.push("(" + C.pop() + ")");
          break;
        case 5:
          C.push(A.read_shift(2));
          break;
        case 6:
          {
            for (var Ye = ""; ee = A[A.l++]; )
              Ye += String.fromCharCode(ee);
            C.push('"' + Ye.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          C.push("-" + C.pop());
          break;
        case 23:
          C.push("+" + C.pop());
          break;
        case 22:
          C.push("NOT(" + C.pop() + ")");
          break;
        case 20:
        case 21:
          ie = C.pop(), fe = C.pop(), C.push(["AND", "OR"][ee - 20] + "(" + fe + "," + ie + ")");
          break;
        default:
          if (ee < 32 && y[ee])
            ie = C.pop(), fe = C.pop(), C.push(fe + y[ee] + ie);
          else if (R[ee]) {
            if (F = R[ee][1], F == 69 && (F = A[A.l++]), F > C.length) {
              console.error("WK1 bad formula parse 0x" + ee.toString(16) + ":|" + C.join("|") + "|");
              return;
            }
            var pe = C.slice(-F);
            C.length -= F, C.push(R[ee][0] + "(" + pe.join(",") + ")");
          } else
            return ee <= 7 ? console.error("WK1 invalid opcode " + ee.toString(16)) : ee <= 24 ? console.error("WK1 unsupported op " + ee.toString(16)) : ee <= 30 ? console.error("WK1 invalid opcode " + ee.toString(16)) : ee <= 115 ? console.error("WK1 unsupported function opcode " + ee.toString(16)) : console.error("WK1 unrecognized opcode " + ee.toString(16));
      }
    }
    C.length == 1 ? B[1].f = "" + C[0] : console.error("WK1 bad formula parse |" + C.join("|") + "|");
  }
  function b(A) {
    var B = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return B[0].r = A.read_shift(2), B[3] = A[A.l++], B[0].c = A[A.l++], B;
  }
  function re(A, B) {
    var C = b(A);
    return C[1].t = "s", C[1].v = A.read_shift(B - 4, "cstr"), C;
  }
  function D(A, B, C, F) {
    var X = U(6 + F.length);
    X.write_shift(2, A), X.write_shift(1, C), X.write_shift(1, B), X.write_shift(1, 39);
    for (var se = 0; se < F.length; ++se) {
      var fe = F.charCodeAt(se);
      X.write_shift(1, fe >= 128 ? 95 : fe);
    }
    return X.write_shift(1, 0), X;
  }
  function H(A, B) {
    var C = b(A);
    C[1].v = A.read_shift(2);
    var F = C[1].v >> 1;
    if (C[1].v & 1)
      switch (F & 7) {
        case 0:
          F = (F >> 3) * 5e3;
          break;
        case 1:
          F = (F >> 3) * 500;
          break;
        case 2:
          F = (F >> 3) / 20;
          break;
        case 3:
          F = (F >> 3) / 200;
          break;
        case 4:
          F = (F >> 3) / 2e3;
          break;
        case 5:
          F = (F >> 3) / 2e4;
          break;
        case 6:
          F = (F >> 3) / 16;
          break;
        case 7:
          F = (F >> 3) / 64;
          break;
      }
    return C[1].v = F, C;
  }
  function L(A, B) {
    var C = b(A), F = A.read_shift(4), X = A.read_shift(4), se = A.read_shift(2);
    if (se == 65535)
      return F === 0 && X === 3221225472 ? (C[1].t = "e", C[1].v = 15) : F === 0 && X === 3489660928 ? (C[1].t = "e", C[1].v = 42) : C[1].v = 0, C;
    var fe = se & 32768;
    return se = (se & 32767) - 16446, C[1].v = (1 - fe * 2) * (X * Math.pow(2, se + 32) + F * Math.pow(2, se)), C;
  }
  function G(A, B, C, F) {
    var X = U(14);
    if (X.write_shift(2, A), X.write_shift(1, C), X.write_shift(1, B), F == 0)
      return X.write_shift(4, 0), X.write_shift(4, 0), X.write_shift(2, 65535), X;
    var se = 0, fe = 0, ie = 0, ee = 0;
    return F < 0 && (se = 1, F = -F), fe = Math.log2(F) | 0, F /= Math.pow(2, fe - 31), ee = F >>> 0, (ee & 2147483648) == 0 && (F /= 2, ++fe, ee = F >>> 0), F -= ee, ee |= 2147483648, ee >>>= 0, F *= Math.pow(2, 32), ie = F >>> 0, X.write_shift(4, ie), X.write_shift(4, ee), fe += 16383 + (se ? 32768 : 0), X.write_shift(2, fe), X;
  }
  function z(A, B) {
    var C = L(A);
    return A.l += B - 14, C;
  }
  function j(A, B) {
    var C = b(A), F = A.read_shift(4);
    return C[1].v = F >> 6, C;
  }
  function Q(A, B) {
    var C = b(A), F = A.read_shift(8, "f");
    return C[1].v = F, C;
  }
  function he(A, B) {
    var C = Q(A);
    return A.l += B - 10, C;
  }
  function oe(A, B) {
    return A[A.l + B - 1] == 0 ? A.read_shift(B, "cstr") : "";
  }
  function Oe(A, B) {
    var C = A[A.l++];
    C > B - 1 && (C = B - 1);
    for (var F = ""; F.length < C; )
      F += String.fromCharCode(A[A.l++]);
    return F;
  }
  function Re(A, B, C) {
    if (!(!C.qpro || B < 21)) {
      var F = A.read_shift(1);
      A.l += 17, A.l += 1, A.l += 2;
      var X = A.read_shift(B - 21, "cstr");
      return [F, X];
    }
  }
  function pr(A, B) {
    for (var C = {}, F = A.l + B; A.l < F; ) {
      var X = A.read_shift(2);
      if (X == 14e3) {
        for (C[X] = [0, ""], C[X][0] = A.read_shift(2); A[A.l]; )
          C[X][1] += String.fromCharCode(A[A.l]), A.l++;
        A.l++;
      }
    }
    return C;
  }
  function Pe(A, B) {
    var C = U(5 + A.length);
    C.write_shift(2, 14e3), C.write_shift(2, B);
    for (var F = 0; F < A.length; ++F) {
      var X = A.charCodeAt(F);
      C[C.l++] = X > 127 ? 95 : X;
    }
    return C[C.l++] = 0, C;
  }
  var cr = {
    0: { n: "BOF", f: Es },
    1: { n: "EOF" },
    2: { n: "CALCMODE" },
    3: { n: "CALCORDER" },
    4: { n: "SPLIT" },
    5: { n: "SYNC" },
    6: { n: "RANGE", f },
    7: { n: "WINDOW1" },
    8: { n: "COLW1" },
    9: { n: "WINTWO" },
    10: { n: "COLW2" },
    11: { n: "NAME" },
    12: { n: "BLANK" },
    13: { n: "INTEGER", f: u },
    14: { n: "NUMBER", f: E },
    15: { n: "LABEL", f: c },
    16: { n: "FORMULA", f: _ },
    24: { n: "TABLE" },
    25: { n: "ORANGE" },
    26: { n: "PRANGE" },
    27: { n: "SRANGE" },
    28: { n: "FRANGE" },
    29: { n: "KRANGE1" },
    32: { n: "HRANGE" },
    35: { n: "KRANGE2" },
    36: { n: "PROTEC" },
    37: { n: "FOOTER" },
    38: { n: "HEADER" },
    39: { n: "SETUP" },
    40: { n: "MARGINS" },
    41: { n: "LABELFMT" },
    42: { n: "TITLES" },
    43: { n: "SHEETJS" },
    45: { n: "GRAPH" },
    46: { n: "NGRAPH" },
    47: { n: "CALCCOUNT" },
    48: { n: "UNFORMATTED" },
    49: { n: "CURSORW12" },
    50: { n: "WINDOW" },
    51: { n: "STRING", f: c },
    55: { n: "PASSWORD" },
    56: { n: "LOCKED" },
    60: { n: "QUERY" },
    61: { n: "QUERYNAME" },
    62: { n: "PRINT" },
    63: { n: "PRINTNAME" },
    64: { n: "GRAPH2" },
    65: { n: "GRAPHNAME" },
    66: { n: "ZOOM" },
    67: { n: "SYMSPLIT" },
    68: { n: "NSROWS" },
    69: { n: "NSCOLS" },
    70: { n: "RULER" },
    71: { n: "NNAME" },
    72: { n: "ACOMM" },
    73: { n: "AMACRO" },
    74: { n: "PARSE" },
    102: { n: "PRANGES??" },
    103: { n: "RRANGES??" },
    104: { n: "FNAME??" },
    105: { n: "MRANGES??" },
    204: { n: "SHEETNAMECS", f: oe },
    222: { n: "SHEETNAMELP", f: Oe },
    65535: { n: "" }
  }, nr = {
    0: { n: "BOF" },
    1: { n: "EOF" },
    2: { n: "PASSWORD" },
    3: { n: "CALCSET" },
    4: { n: "WINDOWSET" },
    5: { n: "SHEETCELLPTR" },
    6: { n: "SHEETLAYOUT" },
    7: { n: "COLUMNWIDTH" },
    8: { n: "HIDDENCOLUMN" },
    9: { n: "USERRANGE" },
    10: { n: "SYSTEMRANGE" },
    11: { n: "ZEROFORCE" },
    12: { n: "SORTKEYDIR" },
    13: { n: "FILESEAL" },
    14: { n: "DATAFILLNUMS" },
    15: { n: "PRINTMAIN" },
    16: { n: "PRINTSTRING" },
    17: { n: "GRAPHMAIN" },
    18: { n: "GRAPHSTRING" },
    19: { n: "??" },
    20: { n: "ERRCELL" },
    21: { n: "NACELL" },
    22: { n: "LABEL16", f: re },
    23: { n: "NUMBER17", f: L },
    24: { n: "NUMBER18", f: H },
    25: { n: "FORMULA19", f: z },
    26: { n: "FORMULA1A" },
    27: { n: "XFORMAT", f: pr },
    28: { n: "DTLABELMISC" },
    29: { n: "DTLABELCELL" },
    30: { n: "GRAPHWINDOW" },
    31: { n: "CPA" },
    32: { n: "LPLAUTO" },
    33: { n: "QUERY" },
    34: { n: "HIDDENSHEET" },
    35: { n: "??" },
    37: { n: "NUMBER25", f: j },
    38: { n: "??" },
    39: { n: "NUMBER27", f: Q },
    40: { n: "FORMULA28", f: he },
    142: { n: "??" },
    147: { n: "??" },
    150: { n: "??" },
    151: { n: "??" },
    152: { n: "??" },
    153: { n: "??" },
    154: { n: "??" },
    155: { n: "??" },
    156: { n: "??" },
    163: { n: "??" },
    174: { n: "??" },
    175: { n: "??" },
    176: { n: "??" },
    177: { n: "??" },
    184: { n: "??" },
    185: { n: "??" },
    186: { n: "??" },
    187: { n: "??" },
    188: { n: "??" },
    195: { n: "??" },
    201: { n: "??" },
    204: { n: "SHEETNAMECS", f: oe },
    205: { n: "??" },
    206: { n: "??" },
    207: { n: "??" },
    208: { n: "??" },
    256: { n: "??" },
    259: { n: "??" },
    260: { n: "??" },
    261: { n: "??" },
    262: { n: "??" },
    263: { n: "??" },
    265: { n: "??" },
    266: { n: "??" },
    267: { n: "??" },
    268: { n: "??" },
    270: { n: "??" },
    271: { n: "??" },
    384: { n: "??" },
    389: { n: "??" },
    390: { n: "??" },
    393: { n: "??" },
    396: { n: "??" },
    512: { n: "??" },
    514: { n: "??" },
    513: { n: "??" },
    516: { n: "??" },
    517: { n: "??" },
    640: { n: "??" },
    641: { n: "??" },
    642: { n: "??" },
    643: { n: "??" },
    644: { n: "??" },
    645: { n: "??" },
    646: { n: "??" },
    647: { n: "??" },
    648: { n: "??" },
    658: { n: "??" },
    659: { n: "??" },
    660: { n: "??" },
    661: { n: "??" },
    662: { n: "??" },
    665: { n: "??" },
    666: { n: "??" },
    768: { n: "??" },
    772: { n: "??" },
    1537: { n: "SHEETINFOQP", f: Re },
    1600: { n: "??" },
    1602: { n: "??" },
    1793: { n: "??" },
    1794: { n: "??" },
    1795: { n: "??" },
    1796: { n: "??" },
    1920: { n: "??" },
    2048: { n: "??" },
    2049: { n: "??" },
    2052: { n: "??" },
    2688: { n: "??" },
    10998: { n: "??" },
    12849: { n: "??" },
    28233: { n: "??" },
    28484: { n: "??" },
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: n,
    book_to_wk3: a,
    to_workbook: t
  };
}(), zc = /^\s|\s$|[\t\n\r]/;
function ys(e, t) {
  if (!t.bookSST)
    return "";
  var r = [Ie];
  r[r.length] = q("sst", null, {
    xmlns: Tt[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var a = e[n], i = "<si>";
      a.r ? i += a.r : (i += "<t", a.t || (a.t = ""), a.t.match(zc) && (i += ' xml:space="preserve"'), i += ">" + ge(a.t) + "</t>"), i += "</si>", r[r.length] = i;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Kc(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Yc(e, t) {
  return t || (t = U(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var qc = Wl;
function Jc(e) {
  var t = Qe();
  V(t, 159, Yc(e));
  for (var r = 0; r < e.length; ++r)
    V(t, 19, qc(e[r]));
  return V(t, 160), t.end();
}
function Zc(e) {
  for (var t = [], r = e.split(""), n = 0; n < r.length; ++n)
    t[n] = r[n].charCodeAt(0);
  return t;
}
function Cs(e) {
  var t = 0, r, n = Zc(e), a = n.length + 1, i, s, f, l, o;
  for (r = qr(a), r[0] = n.length, i = 1; i != a; ++i)
    r[i] = n[i - 1];
  for (i = a - 1; i >= 0; --i)
    s = r[i], f = (t & 16384) === 0 ? 0 : 1, l = t << 1 & 32767, o = f | l, t = o ^ s;
  return t ^ 52811;
}
var Qc = /* @__PURE__ */ function() {
  function e(a, i) {
    switch (i.type) {
      case "base64":
        return t(kr(a), i);
      case "binary":
        return t(a, i);
      case "buffer":
        return t(de && Buffer.isBuffer(a) ? a.toString("binary") : Vt(a), i);
      case "array":
        return t(Dn(a), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function t(a, i) {
    var s = i || {}, f = s.dense ? [] : {}, l = a.match(/\\trowd.*?\\row\b/g);
    if (!l.length)
      throw new Error("RTF missing table");
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return l.forEach(function(c, p) {
      Array.isArray(f) && (f[p] = []);
      for (var u = /\\\w+\b/g, v = 0, E, x = -1; E = u.exec(c); ) {
        switch (E[0]) {
          case "\\cell":
            var _ = c.slice(v, u.lastIndex - E[0].length);
            if (_[0] == " " && (_ = _.slice(1)), ++x, _.length) {
              var O = { v: _, t: "s" };
              Array.isArray(f) ? f[p][x] = O : f[_e({ r: p, c: x })] = O;
            }
            break;
        }
        v = u.lastIndex;
      }
      x > o.e.c && (o.e.c = x);
    }), f["!ref"] = Ne(o), f;
  }
  function r(a, i) {
    return et(e(a, i), i);
  }
  function n(a) {
    for (var i = ["{\\rtf1\\ansi"], s = we(a["!ref"]), f, l = Array.isArray(a), o = s.s.r; o <= s.e.r; ++o) {
      i.push("\\trowd\\trautofit1");
      for (var c = s.s.c; c <= s.e.c; ++c)
        i.push("\\cellx" + (c + 1));
      for (i.push("\\pard\\intbl"), c = s.s.c; c <= s.e.c; ++c) {
        var p = _e({ r: o, c });
        f = l ? (a[o] || [])[c] : a[p], !(!f || f.v == null && (!f.f || f.F)) && (i.push(" " + (f.w || (Pr(f), f.w))), i.push("\\cell"));
      }
      i.push("\\pard\\intbl\\row");
    }
    return i.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  };
}();
function ri(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var eh = 6, Ir = eh;
function mn(e) {
  return Math.floor((e + Math.round(128 / Ir) / 256) * Ir);
}
function gn(e) {
  return Math.floor((e - 5) / Ir * 100 + 0.5) / 100;
}
function x0(e) {
  return Math.round((e * Ir + 5) / Ir * 256) / 256;
}
function B0(e) {
  e.width ? (e.wpx = mn(e.width), e.wch = gn(e.wpx), e.MDW = Ir) : e.wpx ? (e.wch = gn(e.wpx), e.width = x0(e.wch), e.MDW = Ir) : typeof e.wch == "number" && (e.width = x0(e.wch), e.wpx = mn(e.width), e.MDW = Ir), e.customWidth && delete e.customWidth;
}
var rh = 96, Os = rh;
function _n(e) {
  return e * 96 / Os;
}
function Rs(e) {
  return e * Os / 96;
}
function th(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(r) {
    for (var n = r[0]; n <= r[1]; ++n)
      e[n] != null && (t[t.length] = q("numFmt", null, { numFmtId: n, formatCode: ge(e[n]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = q("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function nh(e) {
  var t = [];
  return t[t.length] = q("cellXfs", null), e.forEach(function(r) {
    t[t.length] = q("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = q("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function Ds(e, t) {
  var r = [Ie, q("styleSheet", null, {
    xmlns: Tt[0],
    "xmlns:vt": Be.vt
  })], n;
  return e.SSF && (n = th(e.SSF)) != null && (r[r.length] = n), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (n = nh(t.cellXfs)) && (r[r.length] = n), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function ah(e, t) {
  var r = e.read_shift(2), n = Ke(e);
  return [r, n];
}
function ih(e, t, r) {
  r || (r = U(6 + 4 * t.length)), r.write_shift(2, e), Ue(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function sh(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var a = zl(e);
  a.fItalic && (n.italic = 1), a.fCondense && (n.condense = 1), a.fExtend && (n.extend = 1), a.fShadow && (n.shadow = 1), a.fOutline && (n.outline = 1), a.fStrikeout && (n.strike = 1);
  var i = e.read_shift(2);
  switch (i === 700 && (n.bold = 1), e.read_shift(2)) {
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (n.underline = s);
  var f = e.read_shift(1);
  f > 0 && (n.family = f);
  var l = e.read_shift(1);
  switch (l > 0 && (n.charset = l), e.l++, n.color = jl(e), e.read_shift(1)) {
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = Ke(e), n;
}
function fh(e, t) {
  t || (t = U(25 + 4 * 32)), t.write_shift(2, e.sz * 20), Kl(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), pn(e.color, t);
  var n = 0;
  return e.scheme == "major" && (n = 1), e.scheme == "minor" && (n = 2), t.write_shift(1, n), Ue(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var oh = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], i0, lh = Fr;
function ti(e, t) {
  t || (t = U(4 * 3 + 8 * 7 + 16 * 1)), i0 || (i0 = A0(oh));
  var r = i0[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (pn({ auto: 1 }, t), pn({ auto: 1 }, t); n < 12; ++n)
      t.write_shift(4, 0);
  else {
    for (; n < 4; ++n)
      t.write_shift(4, 0);
    for (; n < 12; ++n)
      t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function ch(e, t) {
  var r = e.l + t, n = e.read_shift(2), a = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: a };
}
function Ns(e, t, r) {
  r || (r = U(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var n = 0;
  return r.write_shift(1, n), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function Ot(e, t) {
  return t || (t = U(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var hh = Fr;
function uh(e, t) {
  return t || (t = U(51)), t.write_shift(1, 0), Ot(null, t), Ot(null, t), Ot(null, t), Ot(null, t), Ot(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function xh(e, t) {
  return t || (t = U(12 + 4 * 10)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), dn(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function dh(e, t, r) {
  var n = U(2052);
  return n.write_shift(4, e), dn(t, n), dn(r, n), n.length > n.l ? n.slice(0, n.l) : n;
}
function ph(e, t) {
  if (!!t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(n) {
      for (var a = n[0]; a <= n[1]; ++a)
        t[a] != null && ++r;
    }), r != 0 && (V(e, 615, Tr(r)), [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(n) {
      for (var a = n[0]; a <= n[1]; ++a)
        t[a] != null && V(e, 44, ih(a, t[a]));
    }), V(e, 616));
  }
}
function vh(e) {
  var t = 1;
  V(e, 611, Tr(t)), V(e, 43, fh({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2,
    scheme: "minor"
  })), V(e, 612);
}
function mh(e) {
  var t = 2;
  V(e, 603, Tr(t)), V(e, 45, ti({ patternType: "none" })), V(e, 45, ti({ patternType: "gray125" })), V(e, 604);
}
function gh(e) {
  var t = 1;
  V(e, 613, Tr(t)), V(e, 46, uh()), V(e, 614);
}
function _h(e) {
  var t = 1;
  V(e, 626, Tr(t)), V(e, 47, Ns({
    numFmtId: 0,
    fontId: 0,
    fillId: 0,
    borderId: 0
  }, 65535)), V(e, 627);
}
function Eh(e, t) {
  V(e, 617, Tr(t.length)), t.forEach(function(r) {
    V(e, 47, Ns(r, 0));
  }), V(e, 618);
}
function Th(e) {
  var t = 1;
  V(e, 619, Tr(t)), V(e, 48, xh({
    xfId: 0,
    builtinId: 0,
    name: "Normal"
  })), V(e, 620);
}
function wh(e) {
  var t = 0;
  V(e, 505, Tr(t)), V(e, 506);
}
function Sh(e) {
  var t = 0;
  V(e, 508, dh(t, "TableStyleMedium9", "PivotStyleMedium4")), V(e, 509);
}
function Ah(e, t) {
  var r = Qe();
  return V(r, 278), ph(r, e.SSF), vh(r), mh(r), gh(r), _h(r), Eh(r, t.cellXfs), Th(r), wh(r), Sh(r), V(r, 279), r.end();
}
function Is(e, t) {
  if (t && t.themeXLSX)
    return t.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [Ie];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>', r[r.length] = '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>', r[r.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>', r[r.length] = '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function Fh(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: Ke(e)
  };
}
function yh(e) {
  var t = U(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), Ue(e.name, t), t.slice(0, t.l);
}
function Ch(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function Oh(e) {
  var t = U(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function Rh(e, t) {
  var r = U(8 + 2 * t.length);
  return r.write_shift(4, e), Ue(t, r), r.slice(0, r.l);
}
function Dh(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function Nh(e, t) {
  var r = U(8);
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r;
}
function Ih() {
  var e = Qe();
  return V(e, 332), V(e, 334, Tr(1)), V(e, 335, yh({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), V(e, 336), V(e, 339, Rh(1, "XLDAPR")), V(e, 52), V(e, 35, Tr(514)), V(e, 4096, Tr(0)), V(e, 4097, xr(1)), V(e, 36), V(e, 53), V(e, 340), V(e, 337, Nh(1, !0)), V(e, 51, Oh([[1, 0]])), V(e, 338), V(e, 333), e.end();
}
function ks() {
  var e = [Ie];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function kh(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = _e(r);
  var n = e.read_shift(1);
  return n & 2 && (t.l = "1"), n & 8 && (t.a = "1"), t;
}
var ut = 1024;
function Ps(e, t) {
  for (var r = [21600, 21600], n = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), a = [
    q("xml", null, { "xmlns:v": fr.v, "xmlns:o": fr.o, "xmlns:x": fr.x, "xmlns:mv": fr.mv }).replace(/\/>/, ">"),
    q("o:shapelayout", q("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }),
    q("v:shapetype", [
      q("v:stroke", null, { joinstyle: "miter" }),
      q("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: n })
  ]; ut < e * 1e3; )
    ut += 1e3;
  return t.forEach(function(i) {
    var s = Me(i[0]), f = { color2: "#BEFF82", type: "gradient" };
    f.type == "gradient" && (f.angle = "-180");
    var l = f.type == "gradient" ? q("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, o = q("v:fill", l, f), c = { on: "t", obscured: "t" };
    ++ut, a = a.concat([
      "<v:shape" + bt({
        id: "_x0000_s" + ut,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (i[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      o,
      q("v:shadow", null, c),
      q("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      Ve("x:Anchor", [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(",")),
      Ve("x:AutoFill", "False"),
      Ve("x:Row", String(s.r)),
      Ve("x:Column", String(s.c)),
      i[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  }), a.push("</xml>"), a.join("");
}
function Ls(e) {
  var t = [Ie, q("comments", null, { xmlns: Tt[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(n) {
    n[1].forEach(function(a) {
      var i = ge(a.a);
      r.indexOf(i) == -1 && (r.push(i), t.push("<author>" + i + "</author>")), a.T && a.ID && r.indexOf("tc=" + a.ID) == -1 && (r.push("tc=" + a.ID), t.push("<author>tc=" + a.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(n) {
    var a = 0, i = [];
    if (n[1][0] && n[1][0].T && n[1][0].ID ? a = r.indexOf("tc=" + n[1][0].ID) : n[1].forEach(function(l) {
      l.a && (a = r.indexOf(ge(l.a))), i.push(l.t || "");
    }), t.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'), i.length <= 1)
      t.push(Ve("t", ge(i[0] || "")));
    else {
      for (var s = `Comment:
    ` + i[0] + `
`, f = 1; f < i.length; ++f)
        s += `Reply:
    ` + i[f] + `
`;
      t.push(Ve("t", ge(s)));
    }
    t.push("</text></comment>");
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Ph(e, t, r) {
  var n = [Ie, q("ThreadedComments", null, { xmlns: Be.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(a) {
    var i = "";
    (a[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && t.indexOf(s.a) == -1 && t.push(s.a);
      var l = {
        ref: a[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      f == 0 ? i = l.id : l.parentId = i, s.ID = l.id, s.a && (l.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(s.a)).slice(-12) + "}"), n.push(q("threadedComment", Ve("text", s.t || ""), l));
    });
  }), n.push("</ThreadedComments>"), n.join("");
}
function Lh(e) {
  var t = [Ie, q("personList", null, {
    xmlns: Be.TCMNT,
    "xmlns:x": Tt[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, n) {
    t.push(q("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + n).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function Bh(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = at(e);
  return t.rfx = r.s, t.ref = _e(r.s), e.l += 16, t;
}
function Mh(e, t) {
  return t == null && (t = U(36)), t.write_shift(4, e[1].iauthor), St(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var Uh = Ke;
function bh(e) {
  return Ue(e.slice(0, 54));
}
function Wh(e) {
  var t = Qe(), r = [];
  return V(t, 628), V(t, 630), e.forEach(function(n) {
    n[1].forEach(function(a) {
      r.indexOf(a.a) > -1 || (r.push(a.a.slice(0, 54)), V(t, 632, bh(a.a)));
    });
  }), V(t, 631), V(t, 633), e.forEach(function(n) {
    n[1].forEach(function(a) {
      a.iauthor = r.indexOf(a.a);
      var i = { s: Me(n[0]), e: Me(n[0]) };
      V(t, 635, Mh([i, a])), a.t && a.t.length > 0 && V(t, 637, Vl(a)), V(t, 636), delete a.iauthor;
    });
  }), V(t, 634), V(t, 629), t.end();
}
function Hh(e, t) {
  t.FullPaths.forEach(function(r, n) {
    if (n != 0) {
      var a = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      a.slice(-1) !== "/" && Ee.utils.cfb_add(e, a, t.FileIndex[n].content);
    }
  });
}
var Bs = ["xlsb", "xlsm", "xlam", "biff8", "xla"], Vh = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(n, a, i, s) {
    var f = !1, l = !1;
    i.length == 0 ? l = !0 : i.charAt(0) == "[" && (l = !0, i = i.slice(1, -1)), s.length == 0 ? f = !0 : s.charAt(0) == "[" && (f = !0, s = s.slice(1, -1));
    var o = i.length > 0 ? parseInt(i, 10) | 0 : 0, c = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? c += t.c : --c, l ? o += t.r : --o, a + (f ? "" : "$") + ze(c) + (l ? "" : "$") + Ge(o);
  }
  return function(a, i) {
    return t = i, a.replace(e, r);
  };
}(), M0 = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, U0 = /* @__PURE__ */ function() {
  return function(t, r) {
    return t.replace(M0, function(n, a, i, s, f, l) {
      var o = N0(s) - (i ? 0 : r.c), c = D0(l) - (f ? 0 : r.r), p = c == 0 ? "" : f ? c + 1 : "[" + c + "]", u = o == 0 ? "" : i ? o + 1 : "[" + o + "]";
      return a + "R" + p + "C" + u;
    });
  };
}();
function Gh(e, t) {
  return e.replace(M0, function(r, n, a, i, s, f) {
    return n + (a == "$" ? a + i : ze(N0(i) + t.c)) + (s == "$" ? s + f : Ge(D0(f) + t.r));
  });
}
function Xh(e) {
  return e.length != 1;
}
function De(e) {
  e.l += 1;
}
function Hr(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function Ms(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return Us(e);
    r.biff == 12 && (n = 4);
  }
  var a = e.read_shift(n), i = e.read_shift(n), s = Hr(e, 2), f = Hr(e, 2);
  return { s: { r: a, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function Us(e) {
  var t = Hr(e, 2), r = Hr(e, 2), n = e.read_shift(1), a = e.read_shift(1);
  return { s: { r: t[0], c: n, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: a, cRel: r[1], rRel: r[2] } };
}
function $h(e, t, r) {
  if (r.biff < 8)
    return Us(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), a = e.read_shift(r.biff == 12 ? 4 : 2), i = Hr(e, 2), s = Hr(e, 2);
  return { s: { r: n, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: a, c: s[0], cRel: s[1], rRel: s[2] } };
}
function bs(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return jh(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), a = Hr(e, 2);
  return { r: n, c: a[0], cRel: a[1], rRel: a[2] };
}
function jh(e) {
  var t = Hr(e, 2), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function zh(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function Kh(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5)
    return Yh(e);
  var a = e.read_shift(n >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1)
    for (; a > 524287; )
      a -= 1048576;
  if (s == 1)
    for (; i > 8191; )
      i = i - 16384;
  return { r: a, c: i, cRel: s, rRel: f };
}
function Yh(e) {
  var t = e.read_shift(2), r = e.read_shift(1), n = (t & 32768) >> 15, a = (t & 16384) >> 14;
  return t &= 16383, n == 1 && t >= 8192 && (t = t - 16384), a == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: a, rRel: n };
}
function qh(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = Ms(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, a];
}
function Jh(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2, "i"), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  var s = Ms(e, i, r);
  return [n, a, s];
}
function Zh(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function Qh(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  return e.l += i, [n, a];
}
function eu(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = $h(e, t - 1, r);
  return [n, a];
}
function ru(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function ni(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function tu(e, t, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), a = [], i = 0; i <= n; ++i)
    a.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return a;
}
function nu(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function au(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function iu(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function su(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function Ws(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function fu(e) {
  return e.read_shift(2), Ws(e);
}
function ou(e) {
  return e.read_shift(2), Ws(e);
}
function lu(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = bs(e, 0, r);
  return [n, a];
}
function cu(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = Kh(e, 0, r);
  return [n, a];
}
function hu(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var i = bs(e, 0, r);
  return [n, a, i];
}
function uu(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var a = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [u1[a], Gs[a], n];
}
function xu(e, t, r) {
  var n = e[e.l++], a = e.read_shift(1), i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : du(e);
  return [a, (i[0] === 0 ? Gs : h1)[i[1]]];
}
function du(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function pu(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function vu(e, t, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function mu(e) {
  return e.l++, $t[e.read_shift(1)];
}
function gu(e) {
  return e.l++, e.read_shift(2);
}
function _u(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Eu(e) {
  return e.l++, At(e);
}
function Tu(e, t, r) {
  return e.l++, ws(e, t - 1, r);
}
function wu(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = hc(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = $t[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = At(e);
      break;
    case 2:
      r[1] = pc(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Su(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), a = [], i = 0; i != n; ++i)
    a.push((r.biff == 12 ? at : gc)(e));
  return a;
}
function Au(e, t, r) {
  var n = 0, a = 0;
  r.biff == 12 ? (n = e.read_shift(4), a = e.read_shift(4)) : (a = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --a == 0 && (a = 256));
  for (var i = 0, s = []; i != n && (s[i] = []); ++i)
    for (var f = 0; f != a; ++f)
      s[i][f] = wu(e, r.biff);
  return s;
}
function Fu(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, a = !r || r.biff >= 8 ? 4 : 2, i = e.read_shift(a);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, i];
}
function yu(e, t, r) {
  if (r.biff == 5)
    return Cu(e);
  var n = e.read_shift(1) >>> 5 & 3, a = e.read_shift(2), i = e.read_shift(4);
  return [n, a, i];
}
function Cu(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [t, r, n];
}
function Ou(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function Ru(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, a];
}
function Du(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Nu(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, a = e.read_shift(2), i = 4;
  if (r)
    switch (r.biff) {
      case 5:
        i = 15;
        break;
      case 12:
        i = 6;
        break;
    }
  return e.l += i, [n, a];
}
var Iu = Fr, ku = Fr, Pu = Fr;
function jt(e, t, r) {
  return e.l += 2, [zh(e)];
}
function b0(e) {
  return e.l += 6, [];
}
var Lu = jt, Bu = b0, Mu = b0, Uu = jt;
function Hs(e) {
  return e.l += 2, [Es(e), e.read_shift(2) & 1];
}
var bu = jt, Wu = Hs, Hu = b0, Vu = jt, Gu = jt, Xu = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function $u(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), a = e.read_shift(2), i = e.read_shift(2), s = Xu[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: a, C: i };
}
function ju(e) {
  return e.l += 2, [e.read_shift(4)];
}
function zu(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Ku(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function Yu(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function qu(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function Ju(e) {
  return e.l += 4, [0, 0];
}
var ai = {
  1: { n: "PtgExp", f: vu },
  2: { n: "PtgTbl", f: Pu },
  3: { n: "PtgAdd", f: De },
  4: { n: "PtgSub", f: De },
  5: { n: "PtgMul", f: De },
  6: { n: "PtgDiv", f: De },
  7: { n: "PtgPower", f: De },
  8: { n: "PtgConcat", f: De },
  9: { n: "PtgLt", f: De },
  10: { n: "PtgLe", f: De },
  11: { n: "PtgEq", f: De },
  12: { n: "PtgGe", f: De },
  13: { n: "PtgGt", f: De },
  14: { n: "PtgNe", f: De },
  15: { n: "PtgIsect", f: De },
  16: { n: "PtgUnion", f: De },
  17: { n: "PtgRange", f: De },
  18: { n: "PtgUplus", f: De },
  19: { n: "PtgUminus", f: De },
  20: { n: "PtgPercent", f: De },
  21: { n: "PtgParen", f: De },
  22: { n: "PtgMissArg", f: De },
  23: { n: "PtgStr", f: Tu },
  26: { n: "PtgSheet", f: zu },
  27: { n: "PtgEndSheet", f: Ku },
  28: { n: "PtgErr", f: mu },
  29: { n: "PtgBool", f: _u },
  30: { n: "PtgInt", f: gu },
  31: { n: "PtgNum", f: Eu },
  32: { n: "PtgArray", f: ru },
  33: { n: "PtgFunc", f: uu },
  34: { n: "PtgFuncVar", f: xu },
  35: { n: "PtgName", f: Fu },
  36: { n: "PtgRef", f: lu },
  37: { n: "PtgArea", f: qh },
  38: { n: "PtgMemArea", f: Ou },
  39: { n: "PtgMemErr", f: Iu },
  40: { n: "PtgMemNoMem", f: ku },
  41: { n: "PtgMemFunc", f: Ru },
  42: { n: "PtgRefErr", f: Du },
  43: { n: "PtgAreaErr", f: Zh },
  44: { n: "PtgRefN", f: cu },
  45: { n: "PtgAreaN", f: eu },
  46: { n: "PtgMemAreaN", f: Yu },
  47: { n: "PtgMemNoMemN", f: qu },
  57: { n: "PtgNameX", f: yu },
  58: { n: "PtgRef3d", f: hu },
  59: { n: "PtgArea3d", f: Jh },
  60: { n: "PtgRefErr3d", f: Nu },
  61: { n: "PtgAreaErr3d", f: Qh },
  255: {}
}, Zu = {
  64: 32,
  96: 32,
  65: 33,
  97: 33,
  66: 34,
  98: 34,
  67: 35,
  99: 35,
  68: 36,
  100: 36,
  69: 37,
  101: 37,
  70: 38,
  102: 38,
  71: 39,
  103: 39,
  72: 40,
  104: 40,
  73: 41,
  105: 41,
  74: 42,
  106: 42,
  75: 43,
  107: 43,
  76: 44,
  108: 44,
  77: 45,
  109: 45,
  78: 46,
  110: 46,
  79: 47,
  111: 47,
  88: 34,
  120: 34,
  89: 57,
  121: 57,
  90: 58,
  122: 58,
  91: 59,
  123: 59,
  92: 60,
  124: 60,
  93: 61,
  125: 61
}, Qu = {
  1: { n: "PtgElfLel", f: Hs },
  2: { n: "PtgElfRw", f: Vu },
  3: { n: "PtgElfCol", f: Lu },
  6: { n: "PtgElfRwV", f: Gu },
  7: { n: "PtgElfColV", f: Uu },
  10: { n: "PtgElfRadical", f: bu },
  11: { n: "PtgElfRadicalS", f: Hu },
  13: { n: "PtgElfColS", f: Bu },
  15: { n: "PtgElfColSV", f: Mu },
  16: { n: "PtgElfRadicalLel", f: Wu },
  25: { n: "PtgList", f: $u },
  29: { n: "PtgSxName", f: ju },
  255: {}
}, e1 = {
  0: { n: "PtgAttrNoop", f: Ju },
  1: { n: "PtgAttrSemi", f: su },
  2: { n: "PtgAttrIf", f: au },
  4: { n: "PtgAttrChoose", f: tu },
  8: { n: "PtgAttrGoto", f: nu },
  16: { n: "PtgAttrSum", f: pu },
  32: { n: "PtgAttrBaxcel", f: ni },
  33: { n: "PtgAttrBaxcel", f: ni },
  64: { n: "PtgAttrSpace", f: fu },
  65: { n: "PtgAttrSpaceSemi", f: ou },
  128: { n: "PtgAttrIfError", f: iu },
  255: {}
};
function r1(e, t, r, n) {
  if (n.biff < 8)
    return Fr(e, t);
  for (var a = e.l + t, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        r[s][1] = Au(e, 0, n), i.push(r[s][1]);
        break;
      case "PtgMemArea":
        r[s][2] = Su(e, r[s][1], n), i.push(r[s][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[s][1][1] = e.read_shift(4), i.push(r[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return t = a - e.l, t !== 0 && i.push(Fr(e, t)), i;
}
function t1(e, t, r) {
  for (var n = e.l + t, a, i, s = []; n != e.l; )
    t = n - e.l, i = e[e.l], a = ai[i] || ai[Zu[i]], (i === 24 || i === 25) && (a = (i === 24 ? Qu : e1)[e[e.l + 1]]), !a || !a.f ? Fr(e, t) : s.push([a.n, a.f(e, t, r)]);
  return s;
}
function n1(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], a = [], i = 0; i < n.length; ++i) {
      var s = n[i];
      if (s)
        switch (s[0]) {
          case 2:
            a.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            a.push(s[1]);
        }
      else
        a.push("");
    }
    t.push(a.join(","));
  }
  return t.join(";");
}
var a1 = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function i1(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Vs(e, t, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t]))
    return e.SheetNames[t];
  if (!e.XTI)
    return "SH33TJSERR6";
  var n = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!n)
    return "SH33TJSERR1";
  var a = "";
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[n[0]][0];
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(i) {
        return i.Name;
      }).join(";;");
    default:
      return e[n[0]][0][3] ? (a = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? a : a + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function ii(e, t, r) {
  var n = Vs(e, t, r);
  return n == "#REF" ? n : i1(n, r);
}
function _t(e, t, r, n, a) {
  var i = a && a.biff || 8, s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, f = [], l, o, c, p = 0, u = 0, v, E = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var x = -1, _ = "", O = 0, R = e[0].length; O < R; ++O) {
    var y = e[0][O];
    switch (y[0]) {
      case "PtgUminus":
        f.push("-" + f.pop());
        break;
      case "PtgUplus":
        f.push("+" + f.pop());
        break;
      case "PtgPercent":
        f.push(f.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (l = f.pop(), o = f.pop(), x >= 0) {
          switch (e[0][x][1][0]) {
            case 0:
              _ = ye(" ", e[0][x][1][1]);
              break;
            case 1:
              _ = ye("\r", e[0][x][1][1]);
              break;
            default:
              if (_ = "", a.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          o = o + _, x = -1;
        }
        f.push(o + a1[y[0]] + l);
        break;
      case "PtgIsect":
        l = f.pop(), o = f.pop(), f.push(o + " " + l);
        break;
      case "PtgUnion":
        l = f.pop(), o = f.pop(), f.push(o + "," + l);
        break;
      case "PtgRange":
        l = f.pop(), o = f.pop(), f.push(o + ":" + l);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        c = kt(y[1][1], s, a), f.push(Pt(c, i));
        break;
      case "PtgRefN":
        c = r ? kt(y[1][1], r, a) : y[1][1], f.push(Pt(c, i));
        break;
      case "PtgRef3d":
        p = y[1][1], c = kt(y[1][2], s, a), E = ii(n, p, a), f.push(E + "!" + Pt(c, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var M = y[1][0], b = y[1][1];
        M || (M = 0), M &= 127;
        var re = M == 0 ? [] : f.slice(-M);
        f.length -= M, b === "User" && (b = re.shift()), f.push(b + "(" + re.join(",") + ")");
        break;
      case "PtgBool":
        f.push(y[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        f.push(y[1]);
        break;
      case "PtgNum":
        f.push(String(y[1]));
        break;
      case "PtgStr":
        f.push('"' + y[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        f.push(y[1]);
        break;
      case "PtgAreaN":
        v = Ga(y[1][1], r ? { s: r } : s, a), f.push(n0(v, a));
        break;
      case "PtgArea":
        v = Ga(y[1][1], s, a), f.push(n0(v, a));
        break;
      case "PtgArea3d":
        p = y[1][1], v = y[1][2], E = ii(n, p, a), f.push(E + "!" + n0(v, a));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        u = y[1][2];
        var D = (n.names || [])[u - 1] || (n[0] || [])[u], H = D ? D.Name : "SH33TJSNAME" + String(u);
        H && H.slice(0, 6) == "_xlfn." && !a.xlfn && (H = H.slice(6)), f.push(H);
        break;
      case "PtgNameX":
        var L = y[1][1];
        u = y[1][2];
        var G;
        if (a.biff <= 5)
          L < 0 && (L = -L), n[L] && (G = n[L][u]);
        else {
          var z = "";
          if (((n[L] || [])[0] || [])[0] == 14849 || (((n[L] || [])[0] || [])[0] == 1025 ? n[L][u] && n[L][u].itab > 0 && (z = n.SheetNames[n[L][u].itab - 1] + "!") : z = n.SheetNames[u - 1] + "!"), n[L] && n[L][u])
            z += n[L][u].Name;
          else if (n[0] && n[0][u])
            z += n[0][u].Name;
          else {
            var j = (Vs(n, L, a) || "").split(";;");
            j[u - 1] ? z = j[u - 1] : z += "SH33TJSERRX";
          }
          f.push(z);
          break;
        }
        G || (G = { Name: "SH33TJSERRY" }), f.push(G.Name);
        break;
      case "PtgParen":
        var Q = "(", he = ")";
        if (x >= 0) {
          switch (_ = "", e[0][x][1][0]) {
            case 2:
              Q = ye(" ", e[0][x][1][1]) + Q;
              break;
            case 3:
              Q = ye("\r", e[0][x][1][1]) + Q;
              break;
            case 4:
              he = ye(" ", e[0][x][1][1]) + he;
              break;
            case 5:
              he = ye("\r", e[0][x][1][1]) + he;
              break;
            default:
              if (a.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          x = -1;
        }
        f.push(Q + f.pop() + he);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        c = { c: y[1][1], r: y[1][0] };
        var oe = { c: r.c, r: r.r };
        if (n.sharedf[_e(c)]) {
          var Oe = n.sharedf[_e(c)];
          f.push(_t(Oe, s, oe, n, a));
        } else {
          var Re = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (o = n.arrayf[l], !(c.c < o[0].s.c || c.c > o[0].e.c) && !(c.r < o[0].s.r || c.r > o[0].e.r)) {
              f.push(_t(o[1], s, oe, n, a)), Re = !0;
              break;
            }
          Re || f.push(y[1]);
        }
        break;
      case "PtgArray":
        f.push("{" + n1(y[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        x = O;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        f.push("");
        break;
      case "PtgAreaErr":
        f.push("#REF!");
        break;
      case "PtgAreaErr3d":
        f.push("#REF!");
        break;
      case "PtgList":
        f.push("Table" + y[1].idx + "[#" + y[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(y));
      default:
        throw new Error("Unrecognized Formula Token: " + String(y));
    }
    var pr = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (a.biff != 3 && x >= 0 && pr.indexOf(e[0][O][0]) == -1) {
      y = e[0][x];
      var Pe = !0;
      switch (y[1][0]) {
        case 4:
          Pe = !1;
        case 0:
          _ = ye(" ", y[1][1]);
          break;
        case 5:
          Pe = !1;
        case 1:
          _ = ye("\r", y[1][1]);
          break;
        default:
          if (_ = "", a.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + y[1][0]);
      }
      f.push((Pe ? _ : "") + f.pop() + (Pe ? "" : _)), x = -1;
    }
  }
  if (f.length > 1 && a.WTF)
    throw new Error("bad formula stack");
  return f[0];
}
function s1(e) {
  if (e == null) {
    var t = U(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number")
    return Jr(e);
  return Jr(0);
}
function f1(e, t, r, n, a) {
  var i = Zr(t, r, a), s = s1(e.v), f = U(6), l = 33;
  f.write_shift(2, l), f.write_shift(4, 0);
  for (var o = U(e.bf.length), c = 0; c < e.bf.length; ++c)
    o[c] = e.bf[c];
  var p = He([i, s, f, o]);
  return p;
}
function Nn(e, t, r) {
  var n = e.read_shift(4), a = t1(e, n, r), i = e.read_shift(4), s = i > 0 ? r1(e, i, a, r) : null;
  return [a, s];
}
var o1 = Nn, In = Nn, l1 = Nn, c1 = Nn, h1 = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Gs = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, u1 = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function x1(e) {
  var t = "of:=" + e.replace(M0, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function d1(e) {
  return e.replace(/\./, "!");
}
var Lt = typeof Map < "u";
function W0(e, t, r) {
  var n = 0, a = e.length;
  if (r) {
    if (Lt ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var i = Lt ? r.get(t) : r[t]; n < i.length; ++n)
        if (e[i[n]].t === t)
          return e.Count++, i[n];
    }
  } else
    for (; n < a; ++n)
      if (e[n].t === t)
        return e.Count++, n;
  return e[a] = { t }, e.Count++, e.Unique++, r && (Lt ? (r.has(t) || r.set(t, []), r.get(t).push(a)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(a))), a;
}
function kn(e, t) {
  var r = { min: e + 1, max: e + 1 }, n = -1;
  return t.MDW && (Ir = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? n = gn(t.wpx) : t.wch != null && (n = t.wch), n > -1 ? (r.width = x0(n), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function Xs(e, t) {
  if (!!e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function Gr(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : "General"], a = 60, i = e.length;
  if (n == null && r.ssf) {
    for (; a < 392; ++a)
      if (r.ssf[a] == null) {
        bi(t.z, a), r.ssf[a] = t.z, r.revssf[t.z] = n = a;
        break;
      }
  }
  for (a = 0; a != i; ++a)
    if (e[a].numFmtId === n)
      return a;
  return e[i] = {
    numFmtId: n,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, i;
}
function p1(e, t, r) {
  if (e && e["!ref"]) {
    var n = we(e["!ref"]);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function v1(e) {
  if (e.length === 0)
    return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + Ne(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function m1(e, t, r, n, a) {
  var i = !1, s = {}, f = null;
  if (n.bookType !== "xlsx" && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {
    }
    i = !0, s.codeName = Rr(ge(l));
  }
  if (e && e["!outline"]) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (o.summaryBelow = 0), e["!outline"].left && (o.summaryRight = 0), f = (f || "") + q("outlinePr", null, o);
  }
  !i && !f || (a[a.length] = q("sheetPr", f, s));
}
var g1 = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], _1 = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function E1(e) {
  var t = { sheet: 1 };
  return g1.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), _1.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = Cs(e.password).toString(16).toUpperCase()), q("sheetProtection", null, t);
}
function T1(e) {
  return Xs(e), q("pageMargins", null, e);
}
function w1(e, t) {
  for (var r = ["<cols>"], n, a = 0; a != t.length; ++a)
    !(n = t[a]) || (r[r.length] = q("col", null, kn(a, n)));
  return r[r.length] = "</cols>", r.join("");
}
function S1(e, t, r, n) {
  var a = typeof e.ref == "string" ? e.ref : Ne(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var i = r.Workbook.Names, s = lr(a);
  s.s.r == s.e.r && (s.e.r = lr(t["!ref"]).e.r, a = Ne(s));
  for (var f = 0; f < i.length; ++f) {
    var l = i[f];
    if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == n) {
      l.Ref = "'" + r.SheetNames[n] + "'!" + a;
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + a }), q("autoFilter", null, { ref: a });
}
function A1(e, t, r, n) {
  var a = { workbookViewId: "0" };
  return (((n || {}).Workbook || {}).Views || [])[0] && (a.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"), q("sheetViews", q("sheetView", null, a), {});
}
function F1(e, t, r, n) {
  if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f)
    return "";
  var a = "", i = e.t, s = e.v;
  if (e.t !== "z")
    switch (e.t) {
      case "b":
        a = e.v ? "1" : "0";
        break;
      case "n":
        a = "" + e.v;
        break;
      case "e":
        a = $t[e.v];
        break;
      case "d":
        n && n.cellDates ? a = Ze(e.v, -1).toISOString() : (e = tr(e), e.t = "n", a = "" + (e.v = rr(Ze(e.v)))), typeof e.z > "u" && (e.z = Ce[14]);
        break;
      default:
        a = e.v;
        break;
    }
  var f = Ve("v", ge(a)), l = { r: t }, o = Gr(n.cellXfs, e, n);
  switch (o !== 0 && (l.s = o), e.t) {
    case "n":
      break;
    case "d":
      l.t = "d";
      break;
    case "b":
      l.t = "b";
      break;
    case "e":
      l.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error("Text length must not exceed 32767 characters");
      if (n && n.bookSST) {
        f = Ve("v", "" + W0(n.Strings, e.v, n.revStrings)), l.t = "s";
        break;
      }
      l.t = "str";
      break;
  }
  if (e.t != i && (e.t = i, e.v = s), typeof e.f == "string" && e.f) {
    var c = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    f = q("f", ge(e.f), c) + (e.v != null ? f : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (l.cm = 1), q("c", f, l);
}
function y1(e, t, r, n) {
  var a = [], i = [], s = we(e["!ref"]), f = "", l, o = "", c = [], p = 0, u = 0, v = e["!rows"], E = Array.isArray(e), x = { r: o }, _, O = -1;
  for (u = s.s.c; u <= s.e.c; ++u)
    c[u] = ze(u);
  for (p = s.s.r; p <= s.e.r; ++p) {
    for (i = [], o = Ge(p), u = s.s.c; u <= s.e.c; ++u) {
      l = c[u] + o;
      var R = E ? (e[p] || [])[u] : e[l];
      R !== void 0 && (f = F1(R, l, e, t)) != null && i.push(f);
    }
    (i.length > 0 || v && v[p]) && (x = { r: o }, v && v[p] && (_ = v[p], _.hidden && (x.hidden = 1), O = -1, _.hpx ? O = _n(_.hpx) : _.hpt && (O = _.hpt), O > -1 && (x.ht = O, x.customHeight = 1), _.level && (x.outlineLevel = _.level)), a[a.length] = q("row", i.join(""), x));
  }
  if (v)
    for (; p < v.length; ++p)
      v && v[p] && (x = { r: p + 1 }, _ = v[p], _.hidden && (x.hidden = 1), O = -1, _.hpx ? O = _n(_.hpx) : _.hpt && (O = _.hpt), O > -1 && (x.ht = O, x.customHeight = 1), _.level && (x.outlineLevel = _.level), a[a.length] = q("row", "", x));
  return a.join("");
}
function $s(e, t, r, n) {
  var a = [Ie, q("worksheet", null, {
    xmlns: Tt[0],
    "xmlns:r": Be.r
  })], i = r.SheetNames[e], s = 0, f = "", l = r.Sheets[i];
  l == null && (l = {});
  var o = l["!ref"] || "A1", c = we(o);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + o + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575), o = Ne(c);
  }
  n || (n = {}), l["!comments"] = [];
  var p = [];
  m1(l, r, e, t, a), a[a.length] = q("dimension", null, { ref: o }), a[a.length] = A1(l, t, e, r), t.sheetFormat && (a[a.length] = q("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), l["!cols"] != null && l["!cols"].length > 0 && (a[a.length] = w1(l, l["!cols"])), a[s = a.length] = "<sheetData/>", l["!links"] = [], l["!ref"] != null && (f = y1(l, t), f.length > 0 && (a[a.length] = f)), a.length > s + 1 && (a[a.length] = "</sheetData>", a[s] = a[s].replace("/>", ">")), l["!protect"] && (a[a.length] = E1(l["!protect"])), l["!autofilter"] != null && (a[a.length] = S1(l["!autofilter"], l, r, e)), l["!merges"] != null && l["!merges"].length > 0 && (a[a.length] = v1(l["!merges"]));
  var u = -1, v, E = -1;
  return l["!links"].length > 0 && (a[a.length] = "<hyperlinks>", l["!links"].forEach(function(x) {
    !x[1].Target || (v = { ref: x[0] }, x[1].Target.charAt(0) != "#" && (E = me(n, -1, ge(x[1].Target).replace(/#.*$/, ""), xe.HLINK), v["r:id"] = "rId" + E), (u = x[1].Target.indexOf("#")) > -1 && (v.location = ge(x[1].Target.slice(u + 1))), x[1].Tooltip && (v.tooltip = ge(x[1].Tooltip)), a[a.length] = q("hyperlink", null, v));
  }), a[a.length] = "</hyperlinks>"), delete l["!links"], l["!margins"] != null && (a[a.length] = T1(l["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (a[a.length] = Ve("ignoredErrors", q("ignoredError", null, { numberStoredAsText: 1, sqref: o }))), p.length > 0 && (E = me(n, -1, "../drawings/drawing" + (e + 1) + ".xml", xe.DRAW), a[a.length] = q("drawing", null, { "r:id": "rId" + E }), l["!drawing"] = p), l["!comments"].length > 0 && (E = me(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", xe.VML), a[a.length] = q("legacyDrawing", null, { "r:id": "rId" + E }), l["!legacy"] = E), a.length > 1 && (a[a.length] = "</worksheet>", a[1] = a[1].replace("/>", ">")), a.join("");
}
function C1(e, t) {
  var r = {}, n = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var a = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = n, i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = a / 20), r;
}
function O1(e, t, r) {
  var n = U(145), a = (r["!rows"] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var i = 320;
  a.hpx ? i = _n(a.hpx) * 20 : a.hpt && (i = a.hpt * 20), n.write_shift(2, i), n.write_shift(1, 0);
  var s = 0;
  a.level && (s |= a.level), a.hidden && (s |= 16), (a.hpx || a.hpt) && (s |= 32), n.write_shift(1, s), n.write_shift(1, 0);
  var f = 0, l = n.l;
  n.l += 4;
  for (var o = { r: e, c: 0 }, c = 0; c < 16; ++c)
    if (!(t.s.c > c + 1 << 10 || t.e.c < c << 10)) {
      for (var p = -1, u = -1, v = c << 10; v < c + 1 << 10; ++v) {
        o.c = v;
        var E = Array.isArray(r) ? (r[o.r] || [])[o.c] : r[_e(o)];
        E && (p < 0 && (p = v), u = v);
      }
      p < 0 || (++f, n.write_shift(4, p), n.write_shift(4, u));
    }
  var x = n.l;
  return n.l = l, n.write_shift(4, f), n.l = x, n.length > n.l ? n.slice(0, n.l) : n;
}
function R1(e, t, r, n) {
  var a = O1(n, r, t);
  (a.length > 17 || (t["!rows"] || [])[n]) && V(e, 0, a);
}
var D1 = at, N1 = St;
function I1() {
}
function k1(e, t) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = Gl(e), r;
}
function P1(e, t, r) {
  r == null && (r = U(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var a = 1; a < 3; ++a)
    r.write_shift(1, 0);
  return pn({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), ss(e, r), r.slice(0, r.l);
}
function L1(e) {
  var t = dr(e);
  return [t];
}
function B1(e, t, r) {
  return r == null && (r = U(8)), rt(t, r);
}
function M1(e) {
  var t = tt(e);
  return [t];
}
function U1(e, t, r) {
  return r == null && (r = U(4)), nt(t, r);
}
function b1(e) {
  var t = dr(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function W1(e, t, r) {
  return r == null && (r = U(9)), rt(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function H1(e) {
  var t = tt(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function V1(e, t, r) {
  return r == null && (r = U(5)), nt(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function G1(e) {
  var t = dr(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function X1(e, t, r) {
  return r == null && (r = U(9)), rt(t, r), r.write_shift(1, e.v), r;
}
function $1(e) {
  var t = tt(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function j1(e, t, r) {
  return r == null && (r = U(8)), nt(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function z1(e) {
  var t = dr(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function K1(e, t, r) {
  return r == null && (r = U(12)), rt(t, r), r.write_shift(4, t.v), r;
}
function Y1(e) {
  var t = tt(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function q1(e, t, r) {
  return r == null && (r = U(8)), nt(t, r), r.write_shift(4, t.v), r;
}
function J1(e) {
  var t = dr(e), r = At(e);
  return [t, r, "n"];
}
function Z1(e, t, r) {
  return r == null && (r = U(16)), rt(t, r), Jr(e.v, r), r;
}
function Q1(e) {
  var t = tt(e), r = At(e);
  return [t, r, "n"];
}
function ex(e, t, r) {
  return r == null && (r = U(12)), nt(t, r), Jr(e.v, r), r;
}
function rx(e) {
  var t = dr(e), r = fs(e);
  return [t, r, "n"];
}
function tx(e, t, r) {
  return r == null && (r = U(12)), rt(t, r), os(e.v, r), r;
}
function nx(e) {
  var t = tt(e), r = fs(e);
  return [t, r, "n"];
}
function ax(e, t, r) {
  return r == null && (r = U(8)), nt(t, r), os(e.v, r), r;
}
function ix(e) {
  var t = dr(e), r = I0(e);
  return [t, r, "is"];
}
function sx(e) {
  var t = dr(e), r = Ke(e);
  return [t, r, "str"];
}
function fx(e, t, r) {
  return r == null && (r = U(12 + 4 * e.v.length)), rt(t, r), Ue(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function ox(e) {
  var t = tt(e), r = Ke(e);
  return [t, r, "str"];
}
function lx(e, t, r) {
  return r == null && (r = U(8 + 4 * e.v.length)), nt(t, r), Ue(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function cx(e, t, r) {
  var n = e.l + t, a = dr(e);
  a.r = r["!row"];
  var i = e.read_shift(1), s = [a, i, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var f = In(e, n - e.l, r);
    s[3] = _t(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function hx(e, t, r) {
  var n = e.l + t, a = dr(e);
  a.r = r["!row"];
  var i = e.read_shift(1), s = [a, i, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var f = In(e, n - e.l, r);
    s[3] = _t(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function ux(e, t, r) {
  var n = e.l + t, a = dr(e);
  a.r = r["!row"];
  var i = At(e), s = [a, i, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var f = In(e, n - e.l, r);
    s[3] = _t(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
function xx(e, t, r) {
  var n = e.l + t, a = dr(e);
  a.r = r["!row"];
  var i = Ke(e), s = [a, i, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var f = In(e, n - e.l, r);
    s[3] = _t(f, null, a, r.supbooks, r);
  } else
    e.l = n;
  return s;
}
var dx = at, px = St;
function vx(e, t) {
  return t == null && (t = U(4)), t.write_shift(4, e), t;
}
function mx(e, t) {
  var r = e.l + t, n = at(e), a = k0(e), i = Ke(e), s = Ke(e), f = Ke(e);
  e.l = r;
  var l = { rfx: n, relId: a, loc: i, display: f };
  return s && (l.Tooltip = s), l;
}
function gx(e, t) {
  var r = U(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  St({ s: Me(e[0]), e: Me(e[0]) }, r), P0("rId" + t, r);
  var n = e[1].Target.indexOf("#"), a = n == -1 ? "" : e[1].Target.slice(n + 1);
  return Ue(a || "", r), Ue(e[1].Tooltip || "", r), Ue("", r), r.slice(0, r.l);
}
function _x() {
}
function Ex(e, t, r) {
  var n = e.l + t, a = ls(e), i = e.read_shift(1), s = [a];
  if (s[2] = i, r.cellFormula) {
    var f = o1(e, n - e.l, r);
    s[1] = f;
  } else
    e.l = n;
  return s;
}
function Tx(e, t, r) {
  var n = e.l + t, a = at(e), i = [a];
  if (r.cellFormula) {
    var s = c1(e, n - e.l, r);
    i[1] = s, e.l = n;
  } else
    e.l = n;
  return i;
}
function wx(e, t, r) {
  r == null && (r = U(18));
  var n = kn(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (n.width || 10) * 256), r.write_shift(4, 0);
  var a = 0;
  return t.hidden && (a |= 1), typeof n.width == "number" && (a |= 2), t.level && (a |= t.level << 8), r.write_shift(2, a), r;
}
var js = ["left", "right", "top", "bottom", "header", "footer"];
function Sx(e) {
  var t = {};
  return js.forEach(function(r) {
    t[r] = At(e);
  }), t;
}
function Ax(e, t) {
  return t == null && (t = U(6 * 8)), Xs(e), js.forEach(function(r) {
    Jr(e[r], t);
  }), t;
}
function Fx(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function yx(e, t, r) {
  r == null && (r = U(30));
  var n = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (n |= 32), r.write_shift(2, n), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function Cx(e) {
  var t = U(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), St(e, t), t;
}
function Ox(e, t) {
  return t == null && (t = U(16 * 4 + 2)), t.write_shift(2, e.password ? Cs(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    ["scenarios", !1],
    ["formatCells", !0],
    ["formatColumns", !0],
    ["formatRows", !0],
    ["insertColumns", !0],
    ["insertRows", !0],
    ["insertHyperlinks", !0],
    ["deleteColumns", !0],
    ["deleteRows", !0],
    ["selectLockedCells", !1],
    ["sort", !0],
    ["autoFilter", !0],
    ["pivotTables", !0],
    ["selectUnlockedCells", !1]
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function Rx() {
}
function Dx() {
}
function Nx(e, t, r, n, a, i, s) {
  if (t.v === void 0)
    return !1;
  var f = "";
  switch (t.t) {
    case "b":
      f = t.v ? "1" : "0";
      break;
    case "d":
      t = tr(t), t.z = t.z || Ce[14], t.v = rr(Ze(t.v)), t.t = "n";
      break;
    case "n":
    case "e":
      f = "" + t.v;
      break;
    default:
      f = t.v;
      break;
  }
  var l = { r, c: n };
  switch (l.s = Gr(a.cellXfs, t, a), t.l && i["!links"].push([_e(l), t.l]), t.c && i["!comments"].push([_e(l), t.c]), t.t) {
    case "s":
    case "str":
      return a.bookSST ? (f = W0(a.Strings, t.v, a.revStrings), l.t = "s", l.v = f, s ? V(e, 18, q1(t, l)) : V(e, 7, K1(t, l))) : (l.t = "str", s ? V(e, 17, lx(t, l)) : V(e, 6, fx(t, l))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? s ? V(e, 13, ax(t, l)) : V(e, 2, tx(t, l)) : s ? V(e, 16, ex(t, l)) : V(e, 5, Z1(t, l)), !0;
    case "b":
      return l.t = "b", s ? V(e, 15, V1(t, l)) : V(e, 4, W1(t, l)), !0;
    case "e":
      return l.t = "e", s ? V(e, 14, j1(t, l)) : V(e, 3, X1(t, l)), !0;
  }
  return s ? V(e, 12, U1(t, l)) : V(e, 1, B1(t, l)), !0;
}
function Ix(e, t, r, n) {
  var a = we(t["!ref"] || "A1"), i, s = "", f = [];
  V(e, 145);
  var l = Array.isArray(t), o = a.e.r;
  t["!rows"] && (o = Math.max(a.e.r, t["!rows"].length - 1));
  for (var c = a.s.r; c <= o; ++c) {
    s = Ge(c), R1(e, t, a, c);
    var p = !1;
    if (c <= a.e.r)
      for (var u = a.s.c; u <= a.e.c; ++u) {
        c === a.s.r && (f[u] = ze(u)), i = f[u] + s;
        var v = l ? (t[c] || [])[u] : t[i];
        if (!v) {
          p = !1;
          continue;
        }
        p = Nx(e, v, c, u, n, t, p);
      }
  }
  V(e, 146);
}
function kx(e, t) {
  !t || !t["!merges"] || (V(e, 177, vx(t["!merges"].length)), t["!merges"].forEach(function(r) {
    V(e, 176, px(r));
  }), V(e, 178));
}
function Px(e, t) {
  !t || !t["!cols"] || (V(e, 390), t["!cols"].forEach(function(r, n) {
    r && V(e, 60, wx(n, r));
  }), V(e, 391));
}
function Lx(e, t) {
  !t || !t["!ref"] || (V(e, 648), V(e, 649, Cx(we(t["!ref"]))), V(e, 650));
}
function Bx(e, t, r) {
  t["!links"].forEach(function(n) {
    if (!!n[1].Target) {
      var a = me(r, -1, n[1].Target.replace(/#.*$/, ""), xe.HLINK);
      V(e, 494, gx(n, a));
    }
  }), delete t["!links"];
}
function Mx(e, t, r, n) {
  if (t["!comments"].length > 0) {
    var a = me(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", xe.VML);
    V(e, 551, P0("rId" + a)), t["!legacy"] = a;
  }
}
function Ux(e, t, r, n) {
  if (!!t["!autofilter"]) {
    var a = t["!autofilter"], i = typeof a.ref == "string" ? a.ref : Ne(a.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names, f = lr(i);
    f.s.r == f.e.r && (f.e.r = lr(t["!ref"]).e.r, i = Ne(f));
    for (var l = 0; l < s.length; ++l) {
      var o = s[l];
      if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == n) {
        o.Ref = "'" + r.SheetNames[n] + "'!" + i;
        break;
      }
    }
    l == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + i }), V(e, 161, St(we(i))), V(e, 162);
  }
}
function bx(e, t, r) {
  V(e, 133), V(e, 137, yx(t, r)), V(e, 138), V(e, 134);
}
function Wx(e, t) {
  !t["!protect"] || V(e, 535, Ox(t["!protect"]));
}
function Hx(e, t, r, n) {
  var a = Qe(), i = r.SheetNames[e], s = r.Sheets[i] || {}, f = i;
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var l = we(s["!ref"] || "A1");
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], V(a, 129), (r.vbaraw || s["!outline"]) && V(a, 147, P1(f, s["!outline"])), V(a, 148, N1(l)), bx(a, s, r.Workbook), Px(a, s), Ix(a, s, e, t), Wx(a, s), Ux(a, s, r, e), kx(a, s), Bx(a, s, n), s["!margins"] && V(a, 476, Ax(s["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && Lx(a, s), Mx(a, s, e, n), V(a, 130), a.end();
}
function Vx(e, t) {
  e.l += 10;
  var r = Ke(e);
  return { name: r };
}
var Gx = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
];
function Xx(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Tl(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var $x = /* @__PURE__ */ "][*?/\\".split("");
function zs(e, t) {
  if (e.length > 31) {
    if (t)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return $x.forEach(function(n) {
    if (e.indexOf(n) != -1) {
      if (!t)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
function jx(e, t, r) {
  e.forEach(function(n, a) {
    zs(n);
    for (var i = 0; i < a; ++i)
      if (n == e[i])
        throw new Error("Duplicate Sheet Name: " + n);
    if (r) {
      var s = t && t[a] && t[a].CodeName || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function zx(e) {
  if (!e || !e.SheetNames || !e.Sheets)
    throw new Error("Invalid Workbook");
  if (!e.SheetNames.length)
    throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  jx(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    p1(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function Ks(e) {
  var t = [Ie];
  t[t.length] = q("workbook", null, {
    xmlns: Tt[0],
    "xmlns:r": Be.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, n = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (Gx.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (n[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (n.codeName = e.Workbook.WBProps.CodeName, delete n.CodeName)), t[t.length] = q("workbookPr", null, n);
  var a = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (a && a[0] && !!a[0].Hidden) {
    for (t[t.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!a[i] || !a[i].Hidden); ++i)
      ;
    i == e.SheetNames.length && (i = 0), t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: ge(e.SheetNames[i].slice(0, 31)) };
    if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), a[i])
      switch (a[i].Hidden) {
        case 1:
          s.state = "hidden";
          break;
        case 2:
          s.state = "veryHidden";
          break;
      }
    t[t.length] = q("sheet", null, s);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) {
    var l = { name: f.Name };
    f.Comment && (l.comment = f.Comment), f.Sheet != null && (l.localSheetId = "" + f.Sheet), f.Hidden && (l.hidden = "1"), f.Ref && (t[t.length] = q("definedName", ge(f.Ref), l));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Kx(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = u0(e), r.name = Ke(e), r;
}
function Yx(e, t) {
  return t || (t = U(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), P0(e.strRelID, t), Ue(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function qx(e, t) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var a = t > 8 ? Ke(e) : "";
  return a.length > 0 && (r.CodeName = a), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function Jx(e, t) {
  t || (t = U(72));
  var r = 0;
  return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), ss(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function Zx(e, t, r) {
  var n = e.l + t;
  e.l += 4, e.l += 1;
  var a = e.read_shift(4), i = Xl(e), s = l1(e, 0, r), f = k0(e);
  e.l = n;
  var l = { Name: i, Ptg: s };
  return a < 268435455 && (l.Sheet = a), f && (l.Comment = f), l;
}
function Qx(e, t) {
  V(e, 143);
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, a = { Hidden: n, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    V(e, 156, Yx(a));
  }
  V(e, 144);
}
function ed(e, t) {
  t || (t = U(127));
  for (var r = 0; r != 4; ++r)
    t.write_shift(4, 0);
  return Ue("SheetJS", t), Ue(on.version, t), Ue(on.version, t), Ue("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function rd(e, t) {
  t || (t = U(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function td(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, a = -1, i = -1; n < r.length; ++n)
      !r[n] || !r[n].Hidden && a == -1 ? a = n : r[n].Hidden == 1 && i == -1 && (i = n);
    i > a || (V(e, 135), V(e, 158, rd(a)), V(e, 136));
  }
}
function nd(e, t) {
  var r = Qe();
  return V(r, 131), V(r, 128, ed()), V(r, 153, Jx(e.Workbook && e.Workbook.WBProps || null)), td(r, e), Qx(r, e), V(r, 132), r.end();
}
function ad(e, t, r) {
  return (t.slice(-4) === ".bin" ? nd : Ks)(e);
}
function id(e, t, r, n, a) {
  return (t.slice(-4) === ".bin" ? Hx : $s)(e, r, n, a);
}
function sd(e, t, r) {
  return (t.slice(-4) === ".bin" ? Ah : Ds)(e, r);
}
function fd(e, t, r) {
  return (t.slice(-4) === ".bin" ? Jc : ys)(e, r);
}
function od(e, t, r) {
  return (t.slice(-4) === ".bin" ? Wh : Ls)(e);
}
function ld(e) {
  return (e.slice(-4) === ".bin" ? Ih : ks)();
}
function cd(e, t) {
  var r = [];
  return e.Props && r.push(sc(e.Props, t)), e.Custprops && r.push(fc(e.Props, e.Custprops)), r.join("");
}
function hd() {
  return "";
}
function ud(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(n, a) {
    var i = [];
    i.push(q("NumberFormat", null, { "ss:Format": ge(Ce[n.numFmtId]) }));
    var s = { "ss:ID": "s" + (21 + a) };
    r.push(q("Style", i.join(""), s));
  }), q("Styles", r.join(""));
}
function Ys(e) {
  return q("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + U0(e.Ref, { r: 0, c: 0 }) });
}
function xd(e) {
  if (!((e || {}).Workbook || {}).Names)
    return "";
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var a = t[n];
    a.Sheet == null && (a.Name.match(/^_xlfn\./) || r.push(Ys(a)));
  }
  return q("Names", r.join(""));
}
function dd(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names)
    return "";
  for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
    var f = a[s];
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || i.push(Ys(f)));
  }
  return i.join("");
}
function pd(e, t, r, n) {
  if (!e)
    return "";
  var a = [];
  if (e["!margins"] && (a.push("<PageSetup>"), e["!margins"].header && a.push(q("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && a.push(q("Footer", null, { "x:Margin": e["!margins"].footer })), a.push(q("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), a.push("</PageSetup>")), n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
    if (n.Workbook.Sheets[r].Hidden)
      a.push(q("Visible", n.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var i = 0; i < r && !(n.Workbook.Sheets[i] && !n.Workbook.Sheets[i].Hidden); ++i)
        ;
      i == r && a.push("<Selected/>");
    }
  return ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && a.push("<DisplayRightToLeft/>"), e["!protect"] && (a.push(Ve("ProtectContents", "True")), e["!protect"].objects && a.push(Ve("ProtectObjects", "True")), e["!protect"].scenarios && a.push(Ve("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? a.push(Ve("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && a.push(Ve("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(s) {
    e["!protect"][s[0]] && a.push("<" + s[1] + "/>");
  })), a.length == 0 ? "" : q("WorksheetOptions", a.join(""), { xmlns: fr.x });
}
function vd(e) {
  return e.map(function(t) {
    var r = El(t.t || ""), n = q("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
    return q("Comment", n, { "ss:Author": t.a });
  }).join("");
}
function md(e, t, r, n, a, i, s) {
  if (!e || e.v == null && e.f == null)
    return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + ge(U0(e.f, s))), e.F && e.F.slice(0, t.length) == t) {
    var l = Me(e.F.slice(t.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (l.r == s.r ? "" : "[" + (l.r - s.r) + "]") + "C" + (l.c == s.c ? "" : "[" + (l.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = ge(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = ge(e.l.Tooltip))), r["!merges"])
    for (var o = r["!merges"], c = 0; c != o.length; ++c)
      o[c].s.c != s.c || o[c].s.r != s.r || (o[c].e.c > o[c].s.c && (f["ss:MergeAcross"] = o[c].e.c - o[c].s.c), o[c].e.r > o[c].s.r && (f["ss:MergeDown"] = o[c].e.r - o[c].s.r));
  var p = "", u = "";
  switch (e.t) {
    case "z":
      if (!n.sheetStubs)
        return "";
      break;
    case "n":
      p = "Number", u = String(e.v);
      break;
    case "b":
      p = "Boolean", u = e.v ? "1" : "0";
      break;
    case "e":
      p = "Error", u = $t[e.v];
      break;
    case "d":
      p = "DateTime", u = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || Ce[14]);
      break;
    case "s":
      p = "String", u = _l(e.v || "");
      break;
  }
  var v = Gr(n.cellXfs, e, n);
  f["ss:StyleID"] = "s" + (21 + v), f["ss:Index"] = s.c + 1;
  var E = e.v != null ? u : "", x = e.t == "z" ? "" : '<Data ss:Type="' + p + '">' + E + "</Data>";
  return (e.c || []).length > 0 && (x += vd(e.c)), q("Cell", x, f);
}
function gd(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = Rs(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function _d(e, t, r, n) {
  if (!e["!ref"])
    return "";
  var a = we(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(_, O) {
    B0(_);
    var R = !!_.width, y = kn(O, _), M = { "ss:Index": O + 1 };
    R && (M["ss:Width"] = mn(y.width)), _.hidden && (M["ss:Hidden"] = "1"), f.push(q("Column", null, M));
  });
  for (var l = Array.isArray(e), o = a.s.r; o <= a.e.r; ++o) {
    for (var c = [gd(o, (e["!rows"] || [])[o])], p = a.s.c; p <= a.e.c; ++p) {
      var u = !1;
      for (s = 0; s != i.length; ++s)
        if (!(i[s].s.c > p) && !(i[s].s.r > o) && !(i[s].e.c < p) && !(i[s].e.r < o)) {
          (i[s].s.c != p || i[s].s.r != o) && (u = !0);
          break;
        }
      if (!u) {
        var v = { r: o, c: p }, E = _e(v), x = l ? (e[o] || [])[p] : e[E];
        c.push(md(x, E, e, t, r, n, v));
      }
    }
    c.push("</Row>"), c.length > 2 && f.push(c.join(""));
  }
  return f.join("");
}
function Ed(e, t, r) {
  var n = [], a = r.SheetNames[e], i = r.Sheets[a], s = i ? dd(i, t, e, r) : "";
  return s.length > 0 && n.push("<Names>" + s + "</Names>"), s = i ? _d(i, t, e, r) : "", s.length > 0 && n.push("<Table>" + s + "</Table>"), n.push(pd(i, t, e, r)), n.join("");
}
function Td(e, t) {
  t || (t = {}), e.SSF || (e.SSF = tr(Ce)), e.SSF && (On(), Cn(e.SSF), t.revssf = Rn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], Gr(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(cd(e, t)), r.push(hd()), r.push(""), r.push("");
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(q("Worksheet", Ed(n, t, e), { "ss:Name": ge(e.SheetNames[n]) }));
  return r[2] = ud(e, t), r[3] = xd(e), Ie + q("Workbook", r.join(""), {
    xmlns: fr.ss,
    "xmlns:o": fr.o,
    "xmlns:x": fr.x,
    "xmlns:ss": fr.ss,
    "xmlns:dt": fr.dt,
    "xmlns:html": fr.html
  });
}
var s0 = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function wd(e, t) {
  var r = [], n = [], a = [], i = 0, s, f = Ia($a, "n"), l = Ia(ja, "n");
  if (e.Props)
    for (s = Xe(e.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(l, s[i]) ? n : a).push([s[i], e.Props[s[i]]]);
  if (e.Custprops)
    for (s = Xe(e.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(l, s[i]) ? n : a).push([s[i], e.Custprops[s[i]]]);
  var o = [];
  for (i = 0; i < a.length; ++i)
    _s.indexOf(a[i][0]) > -1 || vs.indexOf(a[i][0]) > -1 || a[i][1] != null && o.push(a[i]);
  n.length && Ee.utils.cfb_add(t, "/SummaryInformation", Ja(n, s0.SI, l, ja)), (r.length || o.length) && Ee.utils.cfb_add(t, "/DocumentSummaryInformation", Ja(r, s0.DSI, f, $a, o.length ? o : null, s0.UDI));
}
function Sd(e, t) {
  var r = t || {}, n = Ee.utils.cfb_new({ root: "R" }), a = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType || (r.bookType = "xla");
    case "biff8":
      a = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      a = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return Ee.utils.cfb_add(n, a, qs(e, r)), r.biff == 8 && (e.Props || e.Custprops) && wd(e, n), r.biff == 8 && e.vbaraw && Hh(n, Ee.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), n;
}
var Ad = {
  0: { f: C1 },
  1: { f: L1 },
  2: { f: rx },
  3: { f: G1 },
  4: { f: b1 },
  5: { f: J1 },
  6: { f: sx },
  7: { f: z1 },
  8: { f: xx },
  9: { f: ux },
  10: { f: cx },
  11: { f: hx },
  12: { f: M1 },
  13: { f: nx },
  14: { f: $1 },
  15: { f: H1 },
  16: { f: Q1 },
  17: { f: ox },
  18: { f: Y1 },
  19: { f: I0 },
  20: {},
  21: {},
  22: {},
  23: {},
  24: {},
  25: {},
  26: {},
  27: {},
  28: {},
  29: {},
  30: {},
  31: {},
  32: {},
  33: {},
  34: {},
  35: { T: 1 },
  36: { T: -1 },
  37: { T: 1 },
  38: { T: -1 },
  39: { f: Zx },
  40: {},
  42: {},
  43: { f: sh },
  44: { f: ah },
  45: { f: lh },
  46: { f: hh },
  47: { f: ch },
  48: {},
  49: { f: Ml },
  50: {},
  51: { f: Ch },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: Uc },
  62: { f: ix },
  63: { f: kh },
  64: { f: Rx },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: Fr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: Fx },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: k1 },
  148: { f: D1, p: 16 },
  151: { f: _x },
  152: {},
  153: { f: qx },
  154: {},
  155: {},
  156: { f: Kx },
  157: {},
  158: {},
  159: { T: 1, f: Kc },
  160: { T: -1 },
  161: { T: 1, f: at },
  162: { T: -1 },
  163: { T: 1 },
  164: { T: -1 },
  165: { T: 1 },
  166: { T: -1 },
  167: {},
  168: {},
  169: {},
  170: {},
  171: {},
  172: { T: 1 },
  173: { T: -1 },
  174: {},
  175: {},
  176: { f: dx },
  177: { T: 1 },
  178: { T: -1 },
  179: { T: 1 },
  180: { T: -1 },
  181: { T: 1 },
  182: { T: -1 },
  183: { T: 1 },
  184: { T: -1 },
  185: { T: 1 },
  186: { T: -1 },
  187: { T: 1 },
  188: { T: -1 },
  189: { T: 1 },
  190: { T: -1 },
  191: { T: 1 },
  192: { T: -1 },
  193: { T: 1 },
  194: { T: -1 },
  195: { T: 1 },
  196: { T: -1 },
  197: { T: 1 },
  198: { T: -1 },
  199: { T: 1 },
  200: { T: -1 },
  201: { T: 1 },
  202: { T: -1 },
  203: { T: 1 },
  204: { T: -1 },
  205: { T: 1 },
  206: { T: -1 },
  207: { T: 1 },
  208: { T: -1 },
  209: { T: 1 },
  210: { T: -1 },
  211: { T: 1 },
  212: { T: -1 },
  213: { T: 1 },
  214: { T: -1 },
  215: { T: 1 },
  216: { T: -1 },
  217: { T: 1 },
  218: { T: -1 },
  219: { T: 1 },
  220: { T: -1 },
  221: { T: 1 },
  222: { T: -1 },
  223: { T: 1 },
  224: { T: -1 },
  225: { T: 1 },
  226: { T: -1 },
  227: { T: 1 },
  228: { T: -1 },
  229: { T: 1 },
  230: { T: -1 },
  231: { T: 1 },
  232: { T: -1 },
  233: { T: 1 },
  234: { T: -1 },
  235: { T: 1 },
  236: { T: -1 },
  237: { T: 1 },
  238: { T: -1 },
  239: { T: 1 },
  240: { T: -1 },
  241: { T: 1 },
  242: { T: -1 },
  243: { T: 1 },
  244: { T: -1 },
  245: { T: 1 },
  246: { T: -1 },
  247: { T: 1 },
  248: { T: -1 },
  249: { T: 1 },
  250: { T: -1 },
  251: { T: 1 },
  252: { T: -1 },
  253: { T: 1 },
  254: { T: -1 },
  255: { T: 1 },
  256: { T: -1 },
  257: { T: 1 },
  258: { T: -1 },
  259: { T: 1 },
  260: { T: -1 },
  261: { T: 1 },
  262: { T: -1 },
  263: { T: 1 },
  264: { T: -1 },
  265: { T: 1 },
  266: { T: -1 },
  267: { T: 1 },
  268: { T: -1 },
  269: { T: 1 },
  270: { T: -1 },
  271: { T: 1 },
  272: { T: -1 },
  273: { T: 1 },
  274: { T: -1 },
  275: { T: 1 },
  276: { T: -1 },
  277: {},
  278: { T: 1 },
  279: { T: -1 },
  280: { T: 1 },
  281: { T: -1 },
  282: { T: 1 },
  283: { T: 1 },
  284: { T: -1 },
  285: { T: 1 },
  286: { T: -1 },
  287: { T: 1 },
  288: { T: -1 },
  289: { T: 1 },
  290: { T: -1 },
  291: { T: 1 },
  292: { T: -1 },
  293: { T: 1 },
  294: { T: -1 },
  295: { T: 1 },
  296: { T: -1 },
  297: { T: 1 },
  298: { T: -1 },
  299: { T: 1 },
  300: { T: -1 },
  301: { T: 1 },
  302: { T: -1 },
  303: { T: 1 },
  304: { T: -1 },
  305: { T: 1 },
  306: { T: -1 },
  307: { T: 1 },
  308: { T: -1 },
  309: { T: 1 },
  310: { T: -1 },
  311: { T: 1 },
  312: { T: -1 },
  313: { T: -1 },
  314: { T: 1 },
  315: { T: -1 },
  316: { T: 1 },
  317: { T: -1 },
  318: { T: 1 },
  319: { T: -1 },
  320: { T: 1 },
  321: { T: -1 },
  322: { T: 1 },
  323: { T: -1 },
  324: { T: 1 },
  325: { T: -1 },
  326: { T: 1 },
  327: { T: -1 },
  328: { T: 1 },
  329: { T: -1 },
  330: { T: 1 },
  331: { T: -1 },
  332: { T: 1 },
  333: { T: -1 },
  334: { T: 1 },
  335: { f: Fh },
  336: { T: -1 },
  337: { f: Dh, T: 1 },
  338: { T: -1 },
  339: { T: 1 },
  340: { T: -1 },
  341: { T: 1 },
  342: { T: -1 },
  343: { T: 1 },
  344: { T: -1 },
  345: { T: 1 },
  346: { T: -1 },
  347: { T: 1 },
  348: { T: -1 },
  349: { T: 1 },
  350: { T: -1 },
  351: {},
  352: {},
  353: { T: 1 },
  354: { T: -1 },
  355: { f: u0 },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: Ic },
  363: {},
  364: {},
  366: {},
  367: {},
  368: {},
  369: {},
  370: {},
  371: {},
  372: { T: 1 },
  373: { T: -1 },
  374: { T: 1 },
  375: { T: -1 },
  376: { T: 1 },
  377: { T: -1 },
  378: { T: 1 },
  379: { T: -1 },
  380: { T: 1 },
  381: { T: -1 },
  382: { T: 1 },
  383: { T: -1 },
  384: { T: 1 },
  385: { T: -1 },
  386: { T: 1 },
  387: { T: -1 },
  388: { T: 1 },
  389: { T: -1 },
  390: { T: 1 },
  391: { T: -1 },
  392: { T: 1 },
  393: { T: -1 },
  394: { T: 1 },
  395: { T: -1 },
  396: {},
  397: {},
  398: {},
  399: {},
  400: {},
  401: { T: 1 },
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  409: {},
  410: {},
  411: {},
  412: {},
  413: {},
  414: {},
  415: {},
  416: {},
  417: {},
  418: {},
  419: {},
  420: {},
  421: {},
  422: { T: 1 },
  423: { T: 1 },
  424: { T: -1 },
  425: { T: -1 },
  426: { f: Ex },
  427: { f: Tx },
  428: {},
  429: { T: 1 },
  430: { T: -1 },
  431: { T: 1 },
  432: { T: -1 },
  433: { T: 1 },
  434: { T: -1 },
  435: { T: 1 },
  436: { T: -1 },
  437: { T: 1 },
  438: { T: -1 },
  439: { T: 1 },
  440: { T: -1 },
  441: { T: 1 },
  442: { T: -1 },
  443: { T: 1 },
  444: { T: -1 },
  445: { T: 1 },
  446: { T: -1 },
  447: { T: 1 },
  448: { T: -1 },
  449: { T: 1 },
  450: { T: -1 },
  451: { T: 1 },
  452: { T: -1 },
  453: { T: 1 },
  454: { T: -1 },
  455: { T: 1 },
  456: { T: -1 },
  457: { T: 1 },
  458: { T: -1 },
  459: { T: 1 },
  460: { T: -1 },
  461: { T: 1 },
  462: { T: -1 },
  463: { T: 1 },
  464: { T: -1 },
  465: { T: 1 },
  466: { T: -1 },
  467: { T: 1 },
  468: { T: -1 },
  469: { T: 1 },
  470: { T: -1 },
  471: {},
  472: {},
  473: { T: 1 },
  474: { T: -1 },
  475: {},
  476: { f: Sx },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: I1 },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: mx },
  495: { T: 1 },
  496: { T: -1 },
  497: { T: 1 },
  498: { T: -1 },
  499: {},
  500: { T: 1 },
  501: { T: -1 },
  502: { T: 1 },
  503: { T: -1 },
  504: {},
  505: { T: 1 },
  506: { T: -1 },
  507: {},
  508: { T: 1 },
  509: { T: -1 },
  510: { T: 1 },
  511: { T: -1 },
  512: {},
  513: {},
  514: { T: 1 },
  515: { T: -1 },
  516: { T: 1 },
  517: { T: -1 },
  518: { T: 1 },
  519: { T: -1 },
  520: { T: 1 },
  521: { T: -1 },
  522: {},
  523: {},
  524: {},
  525: {},
  526: {},
  527: {},
  528: { T: 1 },
  529: { T: -1 },
  530: { T: 1 },
  531: { T: -1 },
  532: { T: 1 },
  533: { T: -1 },
  534: {},
  535: {},
  536: {},
  537: {},
  538: { T: 1 },
  539: { T: -1 },
  540: { T: 1 },
  541: { T: -1 },
  542: { T: 1 },
  548: {},
  549: {},
  550: { f: u0 },
  551: {},
  552: {},
  553: {},
  554: { T: 1 },
  555: { T: -1 },
  556: { T: 1 },
  557: { T: -1 },
  558: { T: 1 },
  559: { T: -1 },
  560: { T: 1 },
  561: { T: -1 },
  562: {},
  564: {},
  565: { T: 1 },
  566: { T: -1 },
  569: { T: 1 },
  570: { T: -1 },
  572: {},
  573: { T: 1 },
  574: { T: -1 },
  577: {},
  578: {},
  579: {},
  580: {},
  581: {},
  582: {},
  583: {},
  584: {},
  585: {},
  586: {},
  587: {},
  588: { T: -1 },
  589: {},
  590: { T: 1 },
  591: { T: -1 },
  592: { T: 1 },
  593: { T: -1 },
  594: { T: 1 },
  595: { T: -1 },
  596: {},
  597: { T: 1 },
  598: { T: -1 },
  599: { T: 1 },
  600: { T: -1 },
  601: { T: 1 },
  602: { T: -1 },
  603: { T: 1 },
  604: { T: -1 },
  605: { T: 1 },
  606: { T: -1 },
  607: {},
  608: { T: 1 },
  609: { T: -1 },
  610: {},
  611: { T: 1 },
  612: { T: -1 },
  613: { T: 1 },
  614: { T: -1 },
  615: { T: 1 },
  616: { T: -1 },
  617: { T: 1 },
  618: { T: -1 },
  619: { T: 1 },
  620: { T: -1 },
  625: {},
  626: { T: 1 },
  627: { T: -1 },
  628: { T: 1 },
  629: { T: -1 },
  630: { T: 1 },
  631: { T: -1 },
  632: { f: Uh },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: Bh },
  636: { T: -1 },
  637: { f: Hl },
  638: { T: 1 },
  639: {},
  640: { T: -1 },
  641: { T: 1 },
  642: { T: -1 },
  643: { T: 1 },
  644: {},
  645: { T: -1 },
  646: { T: 1 },
  648: { T: 1 },
  649: {},
  650: { T: -1 },
  651: { f: Vx },
  652: {},
  653: { T: 1 },
  654: { T: -1 },
  655: { T: 1 },
  656: { T: -1 },
  657: { T: 1 },
  658: { T: -1 },
  659: {},
  660: { T: 1 },
  661: {},
  662: { T: -1 },
  663: {},
  664: { T: 1 },
  665: {},
  666: { T: -1 },
  667: {},
  668: {},
  669: {},
  671: { T: 1 },
  672: { T: -1 },
  673: { T: 1 },
  674: { T: -1 },
  675: {},
  676: {},
  677: {},
  678: {},
  679: {},
  680: {},
  681: {},
  1024: {},
  1025: {},
  1026: { T: 1 },
  1027: { T: -1 },
  1028: { T: 1 },
  1029: { T: -1 },
  1030: {},
  1031: { T: 1 },
  1032: { T: -1 },
  1033: { T: 1 },
  1034: { T: -1 },
  1035: {},
  1036: {},
  1037: {},
  1038: { T: 1 },
  1039: { T: -1 },
  1040: {},
  1041: { T: 1 },
  1042: { T: -1 },
  1043: {},
  1044: {},
  1045: {},
  1046: { T: 1 },
  1047: { T: -1 },
  1048: { T: 1 },
  1049: { T: -1 },
  1050: {},
  1051: { T: 1 },
  1052: { T: 1 },
  1053: { f: Dx },
  1054: { T: 1 },
  1055: {},
  1056: { T: 1 },
  1057: { T: -1 },
  1058: { T: 1 },
  1059: { T: -1 },
  1061: {},
  1062: { T: 1 },
  1063: { T: -1 },
  1064: { T: 1 },
  1065: { T: -1 },
  1066: { T: 1 },
  1067: { T: -1 },
  1068: { T: 1 },
  1069: { T: -1 },
  1070: { T: 1 },
  1071: { T: -1 },
  1072: { T: 1 },
  1073: { T: -1 },
  1075: { T: 1 },
  1076: { T: -1 },
  1077: { T: 1 },
  1078: { T: -1 },
  1079: { T: 1 },
  1080: { T: -1 },
  1081: { T: 1 },
  1082: { T: -1 },
  1083: { T: 1 },
  1084: { T: -1 },
  1085: {},
  1086: { T: 1 },
  1087: { T: -1 },
  1088: { T: 1 },
  1089: { T: -1 },
  1090: { T: 1 },
  1091: { T: -1 },
  1092: { T: 1 },
  1093: { T: -1 },
  1094: { T: 1 },
  1095: { T: -1 },
  1096: {},
  1097: { T: 1 },
  1098: {},
  1099: { T: -1 },
  1100: { T: 1 },
  1101: { T: -1 },
  1102: {},
  1103: {},
  1104: {},
  1105: {},
  1111: {},
  1112: {},
  1113: { T: 1 },
  1114: { T: -1 },
  1115: { T: 1 },
  1116: { T: -1 },
  1117: {},
  1118: { T: 1 },
  1119: { T: -1 },
  1120: { T: 1 },
  1121: { T: -1 },
  1122: { T: 1 },
  1123: { T: -1 },
  1124: { T: 1 },
  1125: { T: -1 },
  1126: {},
  1128: { T: 1 },
  1129: { T: -1 },
  1130: {},
  1131: { T: 1 },
  1132: { T: -1 },
  1133: { T: 1 },
  1134: { T: -1 },
  1135: { T: 1 },
  1136: { T: -1 },
  1137: { T: 1 },
  1138: { T: -1 },
  1139: { T: 1 },
  1140: { T: -1 },
  1141: {},
  1142: { T: 1 },
  1143: { T: -1 },
  1144: { T: 1 },
  1145: { T: -1 },
  1146: {},
  1147: { T: 1 },
  1148: { T: -1 },
  1149: { T: 1 },
  1150: { T: -1 },
  1152: { T: 1 },
  1153: { T: -1 },
  1154: { T: -1 },
  1155: { T: -1 },
  1156: { T: -1 },
  1157: { T: 1 },
  1158: { T: -1 },
  1159: { T: 1 },
  1160: { T: -1 },
  1161: { T: 1 },
  1162: { T: -1 },
  1163: { T: 1 },
  1164: { T: -1 },
  1165: { T: 1 },
  1166: { T: -1 },
  1167: { T: 1 },
  1168: { T: -1 },
  1169: { T: 1 },
  1170: { T: -1 },
  1171: {},
  1172: { T: 1 },
  1173: { T: -1 },
  1177: {},
  1178: { T: 1 },
  1180: {},
  1181: {},
  1182: {},
  2048: { T: 1 },
  2049: { T: -1 },
  2050: {},
  2051: { T: 1 },
  2052: { T: -1 },
  2053: {},
  2054: {},
  2055: { T: 1 },
  2056: { T: -1 },
  2057: { T: 1 },
  2058: { T: -1 },
  2060: {},
  2067: {},
  2068: { T: 1 },
  2069: { T: -1 },
  2070: {},
  2071: {},
  2072: { T: 1 },
  2073: { T: -1 },
  2075: {},
  2076: {},
  2077: { T: 1 },
  2078: { T: -1 },
  2079: {},
  2080: { T: 1 },
  2081: { T: -1 },
  2082: {},
  2083: { T: 1 },
  2084: { T: -1 },
  2085: { T: 1 },
  2086: { T: -1 },
  2087: { T: 1 },
  2088: { T: -1 },
  2089: { T: 1 },
  2090: { T: -1 },
  2091: {},
  2092: {},
  2093: { T: 1 },
  2094: { T: -1 },
  2095: {},
  2096: { T: 1 },
  2097: { T: -1 },
  2098: { T: 1 },
  2099: { T: -1 },
  2100: { T: 1 },
  2101: { T: -1 },
  2102: {},
  2103: { T: 1 },
  2104: { T: -1 },
  2105: {},
  2106: { T: 1 },
  2107: { T: -1 },
  2108: {},
  2109: { T: 1 },
  2110: { T: -1 },
  2111: { T: 1 },
  2112: { T: -1 },
  2113: { T: 1 },
  2114: { T: -1 },
  2115: {},
  2116: {},
  2117: {},
  2118: { T: 1 },
  2119: { T: -1 },
  2120: {},
  2121: { T: 1 },
  2122: { T: -1 },
  2123: { T: 1 },
  2124: { T: -1 },
  2125: {},
  2126: { T: 1 },
  2127: { T: -1 },
  2128: {},
  2129: { T: 1 },
  2130: { T: -1 },
  2131: { T: 1 },
  2132: { T: -1 },
  2133: { T: 1 },
  2134: {},
  2135: {},
  2136: {},
  2137: { T: 1 },
  2138: { T: -1 },
  2139: { T: 1 },
  2140: { T: -1 },
  2141: {},
  3072: {},
  3073: {},
  4096: { T: 1 },
  4097: { T: -1 },
  5002: { T: 1 },
  5003: { T: -1 },
  5081: { T: 1 },
  5082: { T: -1 },
  5083: {},
  5084: { T: 1 },
  5085: { T: -1 },
  5086: { T: 1 },
  5087: { T: -1 },
  5088: {},
  5089: {},
  5090: {},
  5092: { T: 1 },
  5093: { T: -1 },
  5094: {},
  5095: { T: 1 },
  5096: { T: -1 },
  5097: {},
  5099: {},
  65535: { n: "" }
};
function J(e, t, r, n) {
  var a = t;
  if (!isNaN(a)) {
    var i = n || (r || []).length || 0, s = e.next(4);
    s.write_shift(2, a), s.write_shift(2, i), i > 0 && R0(r) && e.push(r);
  }
}
function Fd(e, t, r, n) {
  var a = n || (r || []).length || 0;
  if (a <= 8224)
    return J(e, t, r, a);
  var i = t;
  if (!isNaN(i)) {
    for (var s = r.parts || [], f = 0, l = 0, o = 0; o + (s[f] || 8224) <= 8224; )
      o += s[f] || 8224, f++;
    var c = e.next(4);
    for (c.write_shift(2, i), c.write_shift(2, o), e.push(r.slice(l, l + o)), l += o; l < a; ) {
      for (c = e.next(4), c.write_shift(2, 60), o = 0; o + (s[f] || 8224) <= 8224; )
        o += s[f] || 8224, f++;
      c.write_shift(2, o), e.push(r.slice(l, l + o)), l += o;
    }
  }
}
function zt(e, t, r) {
  return e || (e = U(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e;
}
function yd(e, t, r, n) {
  var a = U(9);
  return zt(a, e, t), Ts(r, n || "b", a), a;
}
function Cd(e, t, r) {
  var n = U(8 + 2 * r.length);
  return zt(n, e, t), n.write_shift(1, r.length), n.write_shift(r.length, r, "sbcs"), n.l < n.length ? n.slice(0, n.l) : n;
}
function Od(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case "d":
      case "n":
        var a = t.t == "d" ? rr(Ze(t.v)) : t.v;
        a == (a | 0) && a >= 0 && a < 65536 ? J(e, 2, Vc(r, n, a)) : J(e, 3, Hc(r, n, a));
        return;
      case "b":
      case "e":
        J(e, 5, yd(r, n, t.v, t.t));
        return;
      case "s":
      case "str":
        J(e, 4, Cd(r, n, (t.v || "").slice(0, 255)));
        return;
    }
  J(e, 1, zt(null, r, n));
}
function Rd(e, t, r, n) {
  var a = Array.isArray(t), i = we(t["!ref"] || "A1"), s, f = "", l = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (n.WTF)
      throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    i.e.c = Math.min(i.e.c, 255), i.e.r = Math.min(i.e.c, 16383), s = Ne(i);
  }
  for (var o = i.s.r; o <= i.e.r; ++o) {
    f = Ge(o);
    for (var c = i.s.c; c <= i.e.c; ++c) {
      o === i.s.r && (l[c] = ze(c)), s = l[c] + f;
      var p = a ? (t[o] || [])[c] : t[s];
      !p || Od(e, p, o, c);
    }
  }
}
function Dd(e, t) {
  for (var r = t || {}, n = Qe(), a = 0, i = 0; i < e.SheetNames.length; ++i)
    e.SheetNames[i] == r.sheet && (a = i);
  if (a == 0 && !!r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error("Sheet not found: " + r.sheet);
  return J(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, L0(e, 16, r)), Rd(n, e.Sheets[e.SheetNames[a]], a, r), J(n, 10), n.end();
}
function Nd(e, t, r) {
  J(e, 49, Ac({
    sz: 12,
    color: { theme: 1 },
    name: "Arial",
    family: 2,
    scheme: "minor"
  }, r));
}
function Id(e, t, r) {
  !t || [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function(n) {
    for (var a = n[0]; a <= n[1]; ++a)
      t[a] != null && J(e, 1054, Cc(a, t[a], r));
  });
}
function kd(e, t) {
  var r = U(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), J(e, 2151, r), r = U(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), As(we(t["!ref"] || "A1"), r), r.write_shift(4, 4), J(e, 2152, r);
}
function Pd(e, t) {
  for (var r = 0; r < 16; ++r)
    J(e, 224, Qa({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(n) {
    J(e, 224, Qa(n, 0, t));
  });
}
function Ld(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var n = t["!links"][r];
    J(e, 440, Lc(n)), n[1].Tooltip && J(e, 2048, Bc(n));
  }
  delete t["!links"];
}
function Bd(e, t) {
  if (!!t) {
    var r = 0;
    t.forEach(function(n, a) {
      ++r <= 256 && n && J(e, 125, bc(kn(a, n), a));
    });
  }
}
function Md(e, t, r, n, a) {
  var i = 16 + Gr(a.cellXfs, t, a);
  if (t.v == null && !t.bf) {
    J(e, 513, Zr(r, n, i));
    return;
  }
  if (t.bf)
    J(e, 6, f1(t, r, n, a, i));
  else
    switch (t.t) {
      case "d":
      case "n":
        var s = t.t == "d" ? rr(Ze(t.v)) : t.v;
        J(e, 515, Nc(r, n, s, i));
        break;
      case "b":
      case "e":
        J(e, 517, Dc(r, n, t.v, i, a, t.t));
        break;
      case "s":
      case "str":
        if (a.bookSST) {
          var f = W0(a.Strings, t.v, a.revStrings);
          J(e, 253, Fc(r, n, f, i));
        } else
          J(e, 516, yc(r, n, (t.v || "").slice(0, 255), i, a));
        break;
      default:
        J(e, 513, Zr(r, n, i));
    }
}
function Ud(e, t, r) {
  var n = Qe(), a = r.SheetNames[e], i = r.Sheets[a] || {}, s = (r || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, l = Array.isArray(i), o = t.biff == 8, c, p = "", u = [], v = we(i["!ref"] || "A1"), E = o ? 65536 : 16384;
  if (v.e.c > 255 || v.e.r >= E) {
    if (t.WTF)
      throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    v.e.c = Math.min(v.e.c, 255), v.e.r = Math.min(v.e.c, E - 1);
  }
  J(n, 2057, L0(r, 16, t)), J(n, 13, xr(1)), J(n, 12, xr(100)), J(n, 15, Je(!0)), J(n, 17, Je(!1)), J(n, 16, Jr(1e-3)), J(n, 95, Je(!0)), J(n, 42, Je(!1)), J(n, 43, Je(!1)), J(n, 130, xr(1)), J(n, 128, Rc([0, 0])), J(n, 131, Je(!1)), J(n, 132, Je(!1)), o && Bd(n, i["!cols"]), J(n, 512, Oc(v, t)), o && (i["!links"] = []);
  for (var x = v.s.r; x <= v.e.r; ++x) {
    p = Ge(x);
    for (var _ = v.s.c; _ <= v.e.c; ++_) {
      x === v.s.r && (u[_] = ze(_)), c = u[_] + p;
      var O = l ? (i[x] || [])[_] : i[c];
      !O || (Md(n, O, x, _, t), o && O.l && i["!links"].push([c, O.l]));
    }
  }
  var R = f.CodeName || f.name || a;
  return o && J(n, 574, Sc((s.Views || [])[0])), o && (i["!merges"] || []).length && J(n, 229, Pc(i["!merges"])), o && Ld(n, i), J(n, 442, Ss(R)), o && kd(n, i), J(n, 10), n.end();
}
function bd(e, t, r) {
  var n = Qe(), a = (e || {}).Workbook || {}, i = a.Sheets || [], s = a.WBProps || {}, f = r.biff == 8, l = r.biff == 5;
  if (J(n, 2057, L0(e, 5, r)), r.bookType == "xla" && J(n, 135), J(n, 225, f ? xr(1200) : null), J(n, 193, cc(2)), l && J(n, 191), l && J(n, 192), J(n, 226), J(n, 92, _c("SheetJS", r)), J(n, 66, xr(f ? 1200 : 1252)), f && J(n, 353, xr(0)), f && J(n, 448), J(n, 317, Wc(e.SheetNames.length)), f && e.vbaraw && J(n, 211), f && e.vbaraw) {
    var o = s.CodeName || "ThisWorkbook";
    J(n, 442, Ss(o));
  }
  J(n, 156, xr(17)), J(n, 25, Je(!1)), J(n, 18, Je(!1)), J(n, 19, xr(0)), f && J(n, 431, Je(!1)), f && J(n, 444, xr(0)), J(n, 61, wc()), J(n, 64, Je(!1)), J(n, 141, xr(0)), J(n, 34, Je(Xx(e) == "true")), J(n, 14, Je(!0)), f && J(n, 439, Je(!1)), J(n, 218, xr(0)), Nd(n, e, r), Id(n, e.SSF, r), Pd(n, r), f && J(n, 352, Je(!1));
  var c = n.end(), p = Qe();
  f && J(p, 140, Mc()), f && r.Strings && Fd(p, 252, Tc(r.Strings)), J(p, 10);
  var u = p.end(), v = Qe(), E = 0, x = 0;
  for (x = 0; x < e.SheetNames.length; ++x)
    E += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[x].length;
  var _ = c.length + E + u.length;
  for (x = 0; x < e.SheetNames.length; ++x) {
    var O = i[x] || {};
    J(v, 133, Ec({ pos: _, hs: O.Hidden || 0, dt: 0, name: e.SheetNames[x] }, r)), _ += t[x].length;
  }
  var R = v.end();
  if (E != R.length)
    throw new Error("BS8 " + E + " != " + R.length);
  var y = [];
  return c.length && y.push(c), R.length && y.push(R), u.length && y.push(u), He(y);
}
function Wd(e, t) {
  var r = t || {}, n = [];
  e && !e.SSF && (e.SSF = tr(Ce)), e && e.SSF && (On(), Cn(e.SSF), r.revssf = Rn(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = [], r.Strings.Count = 0, r.Strings.Unique = 0, H0(r), r.cellXfs = [], Gr(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var a = 0; a < e.SheetNames.length; ++a)
    n[n.length] = Ud(a, r, e);
  return n.unshift(bd(e, n, r)), He(n);
}
function qs(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n["!ref"])) {
      var a = lr(n["!ref"]);
      a.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var i = t || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return Wd(e, t);
    case 4:
    case 3:
    case 2:
      return Dd(e, t);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function Hd(e, t, r, n) {
  for (var a = e["!merges"] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var f = 0, l = 0, o = 0; o < a.length; ++o)
      if (!(a[o].s.r > r || a[o].s.c > s) && !(a[o].e.r < r || a[o].e.c < s)) {
        if (a[o].s.r < r || a[o].s.c < s) {
          f = -1;
          break;
        }
        f = a[o].e.r - a[o].s.r + 1, l = a[o].e.c - a[o].s.c + 1;
        break;
      }
    if (!(f < 0)) {
      var c = _e({ r, c: s }), p = n.dense ? (e[r] || [])[s] : e[c], u = p && p.v != null && (p.h || gl(p.w || (Pr(p), p.w) || "")) || "", v = {};
      f > 1 && (v.rowspan = f), l > 1 && (v.colspan = l), n.editable ? u = '<span contenteditable="true">' + u + "</span>" : p && (v["data-t"] = p && p.t || "z", p.v != null && (v["data-v"] = p.v), p.z != null && (v["data-z"] = p.z), p.l && (p.l.Target || "#").charAt(0) != "#" && (u = '<a href="' + p.l.Target + '">' + u + "</a>")), v.id = (n.id || "sjs") + "-" + c, i.push(q("td", u, v));
    }
  }
  var E = "<tr>";
  return E + i.join("") + "</tr>";
}
var Vd = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', Gd = "</body></html>";
function Xd(e, t, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Js(e, t) {
  var r = t || {}, n = r.header != null ? r.header : Vd, a = r.footer != null ? r.footer : Gd, i = [n], s = lr(e["!ref"]);
  r.dense = Array.isArray(e), i.push(Xd(e, s, r));
  for (var f = s.s.r; f <= s.e.r; ++f)
    i.push(Hd(e, s, f, r));
  return i.push("</table>" + a), i.join("");
}
function Zs(e, t, r) {
  var n = r || {}, a = 0, i = 0;
  if (n.origin != null)
    if (typeof n.origin == "number")
      a = n.origin;
    else {
      var s = typeof n.origin == "string" ? Me(n.origin) : n.origin;
      a = s.r, i = s.c;
    }
  var f = t.getElementsByTagName("tr"), l = Math.min(n.sheetRows || 1e7, f.length), o = { s: { r: 0, c: 0 }, e: { r: a, c: i } };
  if (e["!ref"]) {
    var c = lr(e["!ref"]);
    o.s.r = Math.min(o.s.r, c.s.r), o.s.c = Math.min(o.s.c, c.s.c), o.e.r = Math.max(o.e.r, c.e.r), o.e.c = Math.max(o.e.c, c.e.c), a == -1 && (o.e.r = a = c.e.r + 1);
  }
  var p = [], u = 0, v = e["!rows"] || (e["!rows"] = []), E = 0, x = 0, _ = 0, O = 0, R = 0, y = 0;
  for (e["!cols"] || (e["!cols"] = []); E < f.length && x < l; ++E) {
    var M = f[E];
    if (si(M)) {
      if (n.display)
        continue;
      v[x] = { hidden: !0 };
    }
    var b = M.children;
    for (_ = O = 0; _ < b.length; ++_) {
      var re = b[_];
      if (!(n.display && si(re))) {
        var D = re.hasAttribute("data-v") ? re.getAttribute("data-v") : re.hasAttribute("v") ? re.getAttribute("v") : wl(re.innerHTML), H = re.getAttribute("data-z") || re.getAttribute("z");
        for (u = 0; u < p.length; ++u) {
          var L = p[u];
          L.s.c == O + i && L.s.r < x + a && x + a <= L.e.r && (O = L.e.c + 1 - i, u = -1);
        }
        y = +re.getAttribute("colspan") || 1, ((R = +re.getAttribute("rowspan") || 1) > 1 || y > 1) && p.push({ s: { r: x + a, c: O + i }, e: { r: x + a + (R || 1) - 1, c: O + i + (y || 1) - 1 } });
        var G = { t: "s", v: D }, z = re.getAttribute("data-t") || re.getAttribute("t") || "";
        D != null && (D.length == 0 ? G.t = z || "z" : n.raw || D.trim().length == 0 || z == "s" || (D === "TRUE" ? G = { t: "b", v: !0 } : D === "FALSE" ? G = { t: "b", v: !1 } : isNaN(Nr(D)) ? isNaN(Ut(D).getDate()) || (G = { t: "d", v: Ze(D) }, n.cellDates || (G = { t: "n", v: rr(G.v) }), G.z = n.dateNF || Ce[14]) : G = { t: "n", v: Nr(D) })), G.z === void 0 && H != null && (G.z = H);
        var j = "", Q = re.getElementsByTagName("A");
        if (Q && Q.length)
          for (var he = 0; he < Q.length && !(Q[he].hasAttribute("href") && (j = Q[he].getAttribute("href"), j.charAt(0) != "#")); ++he)
            ;
        j && j.charAt(0) != "#" && (G.l = { Target: j }), n.dense ? (e[x + a] || (e[x + a] = []), e[x + a][O + i] = G) : e[_e({ c: O + i, r: x + a })] = G, o.e.c < O + i && (o.e.c = O + i), O += y;
      }
    }
    ++x;
  }
  return p.length && (e["!merges"] = (e["!merges"] || []).concat(p)), o.e.r = Math.max(o.e.r, x - 1 + a), e["!ref"] = Ne(o), x >= l && (e["!fullref"] = Ne((o.e.r = f.length - E + x - 1 + a, o))), e;
}
function Qs(e, t) {
  var r = t || {}, n = r.dense ? [] : {};
  return Zs(n, e, t);
}
function $d(e, t) {
  return et(Qs(e, t), t);
}
function si(e) {
  var t = "", r = jd(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function jd(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
var zd = /* @__PURE__ */ function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + bt({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return Ie + t;
  };
}(), fi = /* @__PURE__ */ function() {
  var e = function(i) {
    return ge(i).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = `          <table:covered-table-cell/>
`, n = function(i, s, f) {
    var l = [];
    l.push('      <table:table table:name="' + ge(s.SheetNames[f]) + `" table:style-name="ta1">
`);
    var o = 0, c = 0, p = lr(i["!ref"] || "A1"), u = i["!merges"] || [], v = 0, E = Array.isArray(i);
    if (i["!cols"])
      for (c = 0; c <= p.e.c; ++c)
        l.push("        <table:table-column" + (i["!cols"][c] ? ' table:style-name="co' + i["!cols"][c].ods + '"' : "") + `></table:table-column>
`);
    var x = "", _ = i["!rows"] || [];
    for (o = 0; o < p.s.r; ++o)
      x = _[o] ? ' table:style-name="ro' + _[o].ods + '"' : "", l.push("        <table:table-row" + x + `></table:table-row>
`);
    for (; o <= p.e.r; ++o) {
      for (x = _[o] ? ' table:style-name="ro' + _[o].ods + '"' : "", l.push("        <table:table-row" + x + `>
`), c = 0; c < p.s.c; ++c)
        l.push(t);
      for (; c <= p.e.c; ++c) {
        var O = !1, R = {}, y = "";
        for (v = 0; v != u.length; ++v)
          if (!(u[v].s.c > c) && !(u[v].s.r > o) && !(u[v].e.c < c) && !(u[v].e.r < o)) {
            (u[v].s.c != c || u[v].s.r != o) && (O = !0), R["table:number-columns-spanned"] = u[v].e.c - u[v].s.c + 1, R["table:number-rows-spanned"] = u[v].e.r - u[v].s.r + 1;
            break;
          }
        if (O) {
          l.push(r);
          continue;
        }
        var M = _e({ r: o, c }), b = E ? (i[o] || [])[c] : i[M];
        if (b && b.f && (R["table:formula"] = ge(x1(b.f)), b.F && b.F.slice(0, M.length) == M)) {
          var re = lr(b.F);
          R["table:number-matrix-columns-spanned"] = re.e.c - re.s.c + 1, R["table:number-matrix-rows-spanned"] = re.e.r - re.s.r + 1;
        }
        if (!b) {
          l.push(t);
          continue;
        }
        switch (b.t) {
          case "b":
            y = b.v ? "TRUE" : "FALSE", R["office:value-type"] = "boolean", R["office:boolean-value"] = b.v ? "true" : "false";
            break;
          case "n":
            y = b.w || String(b.v || 0), R["office:value-type"] = "float", R["office:value"] = b.v || 0;
            break;
          case "s":
          case "str":
            y = b.v == null ? "" : b.v, R["office:value-type"] = "string";
            break;
          case "d":
            y = b.w || Ze(b.v).toISOString(), R["office:value-type"] = "date", R["office:date-value"] = Ze(b.v).toISOString(), R["table:style-name"] = "ce1";
            break;
          default:
            l.push(t);
            continue;
        }
        var D = e(y);
        if (b.l && b.l.Target) {
          var H = b.l.Target;
          H = H.charAt(0) == "#" ? "#" + d1(H.slice(1)) : H, H.charAt(0) != "#" && !H.match(/^\w+:/) && (H = "../" + H), D = q("text:a", D, { "xlink:href": H.replace(/&/g, "&amp;") });
        }
        l.push("          " + q("table:table-cell", q("text:p", D, {}), R) + `
`);
      }
      l.push(`        </table:table-row>
`);
    }
    return l.push(`      </table:table>
`), l.join("");
  }, a = function(i, s) {
    i.push(` <office:automatic-styles>
`), i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), i.push(`   <number:month number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:day number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:year/>
`), i.push(`  </number:date-style>
`);
    var f = 0;
    s.SheetNames.map(function(o) {
      return s.Sheets[o];
    }).forEach(function(o) {
      if (!!o && o["!cols"]) {
        for (var c = 0; c < o["!cols"].length; ++c)
          if (o["!cols"][c]) {
            var p = o["!cols"][c];
            if (p.width == null && p.wpx == null && p.wch == null)
              continue;
            B0(p), p.ods = f;
            var u = o["!cols"][c].wpx + "px";
            i.push('  <style:style style:name="co' + f + `" style:family="table-column">
`), i.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + u + `"/>
`), i.push(`  </style:style>
`), ++f;
          }
      }
    });
    var l = 0;
    s.SheetNames.map(function(o) {
      return s.Sheets[o];
    }).forEach(function(o) {
      if (!!o && o["!rows"]) {
        for (var c = 0; c < o["!rows"].length; ++c)
          if (o["!rows"][c]) {
            o["!rows"][c].ods = l;
            var p = o["!rows"][c].hpx + "px";
            i.push('  <style:style style:name="ro' + l + `" style:family="table-row">
`), i.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + p + `"/>
`), i.push(`  </style:style>
`), ++l;
          }
      }
    }), i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), i.push(`  </style:style>
`), i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), i.push(` </office:automatic-styles>
`);
  };
  return function(s, f) {
    var l = [Ie], o = bt({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), c = bt({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    f.bookType == "fods" ? (l.push("<office:document" + o + c + `>
`), l.push(ds().replace(/office:document-meta/g, "office:meta"))) : l.push("<office:document-content" + o + `>
`), a(l, s), l.push(`  <office:body>
`), l.push(`    <office:spreadsheet>
`);
    for (var p = 0; p != s.SheetNames.length; ++p)
      l.push(n(s.Sheets[s.SheetNames[p]], s, p));
    return l.push(`    </office:spreadsheet>
`), l.push(`  </office:body>
`), f.bookType == "fods" ? l.push("</office:document>") : l.push("</office:document-content>"), l.join("");
  };
}();
function ef(e, t) {
  if (t.bookType == "fods")
    return fi(e, t);
  var r = F0(), n = "", a = [], i = [];
  return n = "mimetype", ce(r, n, "application/vnd.oasis.opendocument.spreadsheet"), n = "content.xml", ce(r, n, fi(e, t)), a.push([n, "text/xml"]), i.push([n, "ContentFile"]), n = "styles.xml", ce(r, n, zd(e, t)), a.push([n, "text/xml"]), i.push([n, "StylesFile"]), n = "meta.xml", ce(r, n, Ie + ds()), a.push([n, "text/xml"]), i.push([n, "MetadataFile"]), n = "manifest.rdf", ce(r, n, ic(i)), a.push([n, "application/rdf+xml"]), n = "META-INF/manifest.xml", ce(r, n, nc(a)), r;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function En(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Kd(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : _r(Rr(e));
}
function Yd(e, t) {
  e:
    for (var r = 0; r <= e.length - t.length; ++r) {
      for (var n = 0; n < t.length; ++n)
        if (e[r + n] != t[n])
          continue e;
      return !0;
    }
  return !1;
}
function Vr(e) {
  var t = e.reduce(function(a, i) {
    return a + i.length;
  }, 0), r = new Uint8Array(t), n = 0;
  return e.forEach(function(a) {
    r.set(a, n), n += a.length;
  }), r;
}
function qd(e, t, r) {
  var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20, a = r / Math.pow(10, n - 6176);
  e[t + 15] |= n >> 7, e[t + 14] |= (n & 127) << 1;
  for (var i = 0; a >= 1; ++i, a /= 256)
    e[t + i] = a & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function Wt(e, t) {
  var r = t ? t[0] : 0, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), n;
}
function ve(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t.slice(0, r);
}
function vt(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function ke(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0], a = Wt(e, r), i = a & 7;
    a = Math.floor(a / 8);
    var s = 0, f;
    if (a == 0)
      break;
    switch (i) {
      case 0:
        {
          for (var l = r[0]; e[r[0]++] >= 128; )
            ;
          f = e.slice(l, r[0]);
        }
        break;
      case 5:
        s = 4, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 1:
        s = 8, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 2:
        s = Wt(e, r), f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(a, " at offset ").concat(n));
    }
    var o = { data: f, type: i };
    t[a] == null ? t[a] = [o] : t[a].push(o);
  }
  return t;
}
function be(e) {
  var t = [];
  return e.forEach(function(r, n) {
    r.forEach(function(a) {
      !a.data || (t.push(ve(n * 8 + a.type)), a.type == 2 && t.push(ve(a.data.length)), t.push(a.data));
    });
  }), Vr(t);
}
function mr(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var a = Wt(e, n), i = ke(e.slice(n[0], n[0] + a));
    n[0] += a;
    var s = {
      id: vt(i[1][0].data),
      messages: []
    };
    i[2].forEach(function(f) {
      var l = ke(f.data), o = vt(l[3][0].data);
      s.messages.push({
        meta: l,
        data: e.slice(n[0], n[0] + o)
      }), n[0] += o;
    }), (t = i[3]) != null && t[0] && (s.merge = vt(i[3][0].data) >>> 0 > 0), r.push(s);
  }
  return r;
}
function lt(e) {
  var t = [];
  return e.forEach(function(r) {
    var n = [];
    n[1] = [{ data: ve(r.id), type: 0 }], n[2] = [], r.merge != null && (n[3] = [{ data: ve(+!!r.merge), type: 0 }]);
    var a = [];
    r.messages.forEach(function(s) {
      a.push(s.data), s.meta[3] = [{ type: 0, data: ve(s.data.length) }], n[2].push({ data: be(s.meta), type: 2 });
    });
    var i = be(n);
    t.push(ve(i.length)), t.push(i), a.forEach(function(s) {
      return t.push(s);
    });
  }), Vr(t);
}
function Jd(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = Wt(t, r), a = []; r[0] < t.length; ) {
    var i = t[r[0]] & 3;
    if (i == 0) {
      var s = t[r[0]++] >> 2;
      if (s < 60)
        ++s;
      else {
        var f = s - 59;
        s = t[r[0]], f > 1 && (s |= t[r[0] + 1] << 8), f > 2 && (s |= t[r[0] + 2] << 16), f > 3 && (s |= t[r[0] + 3] << 24), s >>>= 0, s++, r[0] += f;
      }
      a.push(t.slice(r[0], r[0] + s)), r[0] += s;
      continue;
    } else {
      var l = 0, o = 0;
      if (i == 1 ? (o = (t[r[0]] >> 2 & 7) + 4, l = (t[r[0]++] & 224) << 3, l |= t[r[0]++]) : (o = (t[r[0]++] >> 2) + 1, i == 2 ? (l = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (l = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), a = [Vr(a)], l == 0)
        throw new Error("Invalid offset 0");
      if (l > a[0].length)
        throw new Error("Invalid offset beyond length");
      if (o >= l)
        for (a.push(a[0].slice(-l)), o -= l; o >= a[a.length - 1].length; )
          a.push(a[a.length - 1]), o -= a[a.length - 1].length;
      a.push(a[0].slice(-l, -l + o));
    }
  }
  var c = Vr(a);
  if (c.length != n)
    throw new Error("Unexpected length: ".concat(c.length, " != ").concat(n));
  return c;
}
function gr(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++], a = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(Jd(n, e.slice(r, r + a))), r += a;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return Vr(t);
}
function ct(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455), a = new Uint8Array(4);
    t.push(a);
    var i = ve(n), s = i.length;
    t.push(i), n <= 60 ? (s++, t.push(new Uint8Array([n - 1 << 2]))) : n <= 256 ? (s += 2, t.push(new Uint8Array([240, n - 1 & 255]))) : n <= 65536 ? (s += 3, t.push(new Uint8Array([244, n - 1 & 255, n - 1 >> 8 & 255]))) : n <= 16777216 ? (s += 4, t.push(new Uint8Array([248, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255]))) : n <= 4294967296 && (s += 5, t.push(new Uint8Array([252, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255, n - 1 >>> 24 & 255]))), t.push(e.slice(r, r + n)), s += n, a[0] = 0, a[1] = s & 255, a[2] = s >> 8 & 255, a[3] = s >> 16 & 255, r += n;
  }
  return Vr(t);
}
function f0(e, t) {
  var r = new Uint8Array(32), n = En(r), a = 12, i = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      r[1] = 2, qd(r, a, e.v), i |= 1, a += 16;
      break;
    case "b":
      r[1] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), i |= 2, a += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[1] = 3, n.setUint32(a, t.indexOf(e.v), !0), i |= 8, a += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(8, i, !0), r.slice(0, a);
}
function o0(e, t) {
  var r = new Uint8Array(32), n = En(r), a = 12, i = 0;
  switch (r[0] = 3, e.t) {
    case "n":
      r[2] = 2, n.setFloat64(a, e.v, !0), i |= 32, a += 8;
      break;
    case "b":
      r[2] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), i |= 32, a += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[2] = 3, n.setUint32(a, t.indexOf(e.v), !0), i |= 16, a += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(4, i, !0), r.slice(0, a);
}
function Br(e) {
  var t = ke(e);
  return Wt(t[1][0].data);
}
function Zd(e, t, r) {
  var n, a, i, s;
  if (!((n = e[6]) != null && n[0]) || !((a = e[7]) != null && a[0]))
    throw "Mutation only works on post-BNC storages!";
  var f = ((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) && vt(e[8][0].data) > 0 || !1;
  if (f)
    throw "Math only works with normal offsets";
  for (var l = 0, o = En(e[7][0].data), c = 0, p = [], u = En(e[4][0].data), v = 0, E = [], x = 0; x < t.length; ++x) {
    if (t[x] == null) {
      o.setUint16(x * 2, 65535, !0), u.setUint16(x * 2, 65535);
      continue;
    }
    o.setUint16(x * 2, c, !0), u.setUint16(x * 2, v, !0);
    var _, O;
    switch (typeof t[x]) {
      case "string":
        _ = f0({ t: "s", v: t[x] }, r), O = o0({ t: "s", v: t[x] }, r);
        break;
      case "number":
        _ = f0({ t: "n", v: t[x] }, r), O = o0({ t: "n", v: t[x] }, r);
        break;
      case "boolean":
        _ = f0({ t: "b", v: t[x] }, r), O = o0({ t: "b", v: t[x] }, r);
        break;
      default:
        throw new Error("Unsupported value " + t[x]);
    }
    p.push(_), c += _.length, E.push(O), v += O.length, ++l;
  }
  for (e[2][0].data = ve(l); x < e[7][0].data.length / 2; ++x)
    o.setUint16(x * 2, 65535, !0), u.setUint16(x * 2, 65535, !0);
  return e[6][0].data = Vr(p), e[3][0].data = Vr(E), l;
}
function Qd(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
  var n = lr(r["!ref"]);
  n.s.r = n.s.c = 0;
  var a = !1;
  n.e.c > 9 && (a = !0, n.e.c = 9), n.e.r > 49 && (a = !0, n.e.r = 49), a && console.error("The Numbers writer is currently limited to ".concat(Ne(n)));
  var i = Tn(r, { range: n, header: 1 }), s = ["~Sh33tJ5~"];
  i.forEach(function(B) {
    return B.forEach(function(C) {
      typeof C == "string" && s.push(C);
    });
  });
  var f = {}, l = [], o = Ee.read(t.numbers, { type: "base64" });
  o.FileIndex.map(function(B, C) {
    return [B, o.FullPaths[C]];
  }).forEach(function(B) {
    var C = B[0], F = B[1];
    if (C.type == 2 && !!C.name.match(/\.iwa/)) {
      var X = C.content, se = gr(X), fe = mr(se);
      fe.forEach(function(ie) {
        l.push(ie.id), f[ie.id] = { deps: [], location: F, type: vt(ie.messages[0].meta[1][0].data) };
      });
    }
  }), l.sort(function(B, C) {
    return B - C;
  });
  var c = l.filter(function(B) {
    return B > 1;
  }).map(function(B) {
    return [B, ve(B)];
  });
  o.FileIndex.map(function(B, C) {
    return [B, o.FullPaths[C]];
  }).forEach(function(B) {
    var C = B[0];
    if (B[1], !!C.name.match(/\.iwa/)) {
      var F = mr(gr(C.content));
      F.forEach(function(X) {
        X.messages.forEach(function(se) {
          c.forEach(function(fe) {
            X.messages.some(function(ie) {
              return vt(ie.meta[1][0].data) != 11006 && Yd(ie.data, fe[1]);
            }) && f[fe[0]].deps.push(X.id);
          });
        });
      });
    }
  });
  for (var p = Ee.find(o, f[1].location), u = mr(gr(p.content)), v, E = 0; E < u.length; ++E) {
    var x = u[E];
    x.id == 1 && (v = x);
  }
  var _ = Br(ke(v.messages[0].data)[1][0].data);
  for (p = Ee.find(o, f[_].location), u = mr(gr(p.content)), E = 0; E < u.length; ++E)
    x = u[E], x.id == _ && (v = x);
  for (_ = Br(ke(v.messages[0].data)[2][0].data), p = Ee.find(o, f[_].location), u = mr(gr(p.content)), E = 0; E < u.length; ++E)
    x = u[E], x.id == _ && (v = x);
  for (_ = Br(ke(v.messages[0].data)[2][0].data), p = Ee.find(o, f[_].location), u = mr(gr(p.content)), E = 0; E < u.length; ++E)
    x = u[E], x.id == _ && (v = x);
  var O = ke(v.messages[0].data);
  {
    O[6][0].data = ve(n.e.r + 1), O[7][0].data = ve(n.e.c + 1);
    var R = Br(O[46][0].data), y = Ee.find(o, f[R].location), M = mr(gr(y.content));
    {
      for (var b = 0; b < M.length && M[b].id != R; ++b)
        ;
      if (M[b].id != R)
        throw "Bad ColumnRowUIDMapArchive";
      var re = ke(M[b].messages[0].data);
      re[1] = [], re[2] = [], re[3] = [];
      for (var D = 0; D <= n.e.c; ++D) {
        var H = [];
        H[1] = H[2] = [{ type: 0, data: ve(D + 420690) }], re[1].push({ type: 2, data: be(H) }), re[2].push({ type: 0, data: ve(D) }), re[3].push({ type: 0, data: ve(D) });
      }
      re[4] = [], re[5] = [], re[6] = [];
      for (var L = 0; L <= n.e.r; ++L)
        H = [], H[1] = H[2] = [{ type: 0, data: ve(L + 726270) }], re[4].push({ type: 2, data: be(H) }), re[5].push({ type: 0, data: ve(L) }), re[6].push({ type: 0, data: ve(L) });
      M[b].messages[0].data = be(re);
    }
    y.content = ct(lt(M)), y.size = y.content.length, delete O[46];
    var G = ke(O[4][0].data);
    {
      G[7][0].data = ve(n.e.r + 1);
      var z = ke(G[1][0].data), j = Br(z[2][0].data);
      y = Ee.find(o, f[j].location), M = mr(gr(y.content));
      {
        if (M[0].id != j)
          throw "Bad HeaderStorageBucket";
        var Q = ke(M[0].messages[0].data);
        for (L = 0; L < i.length; ++L) {
          var he = ke(Q[2][0].data);
          he[1][0].data = ve(L), he[4][0].data = ve(i[L].length), Q[2][L] = { type: Q[2][0].type, data: be(he) };
        }
        M[0].messages[0].data = be(Q);
      }
      y.content = ct(lt(M)), y.size = y.content.length;
      var oe = Br(G[2][0].data);
      y = Ee.find(o, f[oe].location), M = mr(gr(y.content));
      {
        if (M[0].id != oe)
          throw "Bad HeaderStorageBucket";
        for (Q = ke(M[0].messages[0].data), D = 0; D <= n.e.c; ++D)
          he = ke(Q[2][0].data), he[1][0].data = ve(D), he[4][0].data = ve(n.e.r + 1), Q[2][D] = { type: Q[2][0].type, data: be(he) };
        M[0].messages[0].data = be(Q);
      }
      y.content = ct(lt(M)), y.size = y.content.length;
      var Oe = Br(G[4][0].data);
      (function() {
        for (var B = Ee.find(o, f[Oe].location), C = mr(gr(B.content)), F, X = 0; X < C.length; ++X) {
          var se = C[X];
          se.id == Oe && (F = se);
        }
        var fe = ke(F.messages[0].data);
        {
          fe[3] = [];
          var ie = [];
          s.forEach(function(ue, Ye) {
            ie[1] = [{ type: 0, data: ve(Ye) }], ie[2] = [{ type: 0, data: ve(1) }], ie[3] = [{ type: 2, data: Kd(ue) }], fe[3].push({ type: 2, data: be(ie) });
          });
        }
        F.messages[0].data = be(fe);
        var ee = lt(C), Te = ct(ee);
        B.content = Te, B.size = B.content.length;
      })();
      var Re = ke(G[3][0].data);
      {
        var pr = Re[1][0];
        delete Re[2];
        var Pe = ke(pr.data);
        {
          var cr = Br(Pe[2][0].data);
          (function() {
            for (var B = Ee.find(o, f[cr].location), C = mr(gr(B.content)), F, X = 0; X < C.length; ++X) {
              var se = C[X];
              se.id == cr && (F = se);
            }
            var fe = ke(F.messages[0].data);
            {
              delete fe[6], delete Re[7];
              var ie = new Uint8Array(fe[5][0].data);
              fe[5] = [];
              for (var ee = 0, Te = 0; Te <= n.e.r; ++Te) {
                var ue = ke(ie);
                ee += Zd(ue, i[Te], s), ue[1][0].data = ve(Te), fe[5].push({ data: be(ue), type: 2 });
              }
              fe[1] = [{ type: 0, data: ve(n.e.c + 1) }], fe[2] = [{ type: 0, data: ve(n.e.r + 1) }], fe[3] = [{ type: 0, data: ve(ee) }], fe[4] = [{ type: 0, data: ve(n.e.r + 1) }];
            }
            F.messages[0].data = be(fe);
            var Ye = lt(C), pe = ct(Ye);
            B.content = pe, B.size = B.content.length;
          })();
        }
        pr.data = be(Pe);
      }
      G[3][0].data = be(Re);
    }
    O[4][0].data = be(G);
  }
  v.messages[0].data = be(O);
  var nr = lt(u), A = ct(nr);
  return p.content = A, p.size = p.content.length, o;
}
function e2(e) {
  return function(r) {
    for (var n = 0; n != e.length; ++n) {
      var a = e[n];
      r[a[0]] === void 0 && (r[a[0]] = a[1]), a[2] === "n" && (r[a[0]] = Number(r[a[0]]));
    }
  };
}
function H0(e) {
  e2([
    ["cellDates", !1],
    ["bookSST", !1],
    ["bookType", "xlsx"],
    ["compression", !1],
    ["WTF", !1]
  ])(e);
}
function r2(e, t) {
  return t.bookType == "ods" ? ef(e, t) : t.bookType == "numbers" ? Qd(e, t) : t.bookType == "xlsb" ? t2(e, t) : n2(e, t);
}
function t2(e, t) {
  ut = 1024, e && !e.SSF && (e.SSF = tr(Ce)), e && e.SSF && (On(), Cn(e.SSF), t.revssf = Rn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Lt ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml", n = Bs.indexOf(t.bookType) > -1, a = hs();
  H0(t = t || {});
  var i = F0(), s = "", f = 0;
  if (t.cellXfs = [], Gr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ce(i, s, ps(e.Props, t)), a.coreprops.push(s), me(t.rels, 2, s, xe.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && l.push(e.SheetNames[o]);
      e.Props.SheetNames = l;
    }
  for (e.Props.Worksheets = e.Props.SheetNames.length, ce(i, s, ms(e.Props)), a.extprops.push(s), me(t.rels, 3, s, xe.EXT_PROPS), e.Custprops !== e.Props && Xe(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ce(i, s, gs(e.Custprops)), a.custprops.push(s), me(t.rels, 4, s, xe.CUST_PROPS)), f = 1; f <= e.SheetNames.length; ++f) {
    var c = { "!id": {} }, p = e.Sheets[e.SheetNames[f - 1]], u = (p || {})["!type"] || "sheet";
    switch (u) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ce(i, s, id(f - 1, s, t, e, c)), a.sheets.push(s), me(t.wbrels, -1, "worksheets/sheet" + f + "." + r, xe.WS[0]);
    }
    if (p) {
      var v = p["!comments"], E = !1, x = "";
      v && v.length > 0 && (x = "xl/comments" + f + "." + r, ce(i, x, od(v, x)), a.comments.push(x), me(c, -1, "../comments" + f + "." + r, xe.CMNT), E = !0), p["!legacy"] && E && ce(i, "xl/drawings/vmlDrawing" + f + ".vml", Ps(f, p["!comments"])), delete p["!comments"], delete p["!legacy"];
    }
    c["!id"].rId1 && ce(i, xs(s), dt(c));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ce(i, s, fd(t.Strings, s, t)), a.strs.push(s), me(t.wbrels, -1, "sharedStrings." + r, xe.SST)), s = "xl/workbook." + r, ce(i, s, ad(e, s)), a.workbooks.push(s), me(t.rels, 1, s, xe.WB), s = "xl/theme/theme1.xml", ce(i, s, Is(e.Themes, t)), a.themes.push(s), me(t.wbrels, -1, "theme/theme1.xml", xe.THEME), s = "xl/styles." + r, ce(i, s, sd(e, s, t)), a.styles.push(s), me(t.wbrels, -1, "styles." + r, xe.STY), e.vbaraw && n && (s = "xl/vbaProject.bin", ce(i, s, e.vbaraw), a.vba.push(s), me(t.wbrels, -1, "vbaProject.bin", xe.VBA)), s = "xl/metadata." + r, ce(i, s, ld(s)), a.metadata.push(s), me(t.wbrels, -1, "metadata." + r, xe.XLMETA), ce(i, "[Content_Types].xml", us(a, t)), ce(i, "_rels/.rels", dt(t.rels)), ce(i, "xl/_rels/workbook." + r + ".rels", dt(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function n2(e, t) {
  ut = 1024, e && !e.SSF && (e.SSF = tr(Ce)), e && e.SSF && (On(), Cn(e.SSF), t.revssf = Rn(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = [], t.Strings.Count = 0, t.Strings.Unique = 0, Lt ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", n = Bs.indexOf(t.bookType) > -1, a = hs();
  H0(t = t || {});
  var i = F0(), s = "", f = 0;
  if (t.cellXfs = [], Gr(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ce(i, s, ps(e.Props, t)), a.coreprops.push(s), me(t.rels, 2, s, xe.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && l.push(e.SheetNames[o]);
      e.Props.SheetNames = l;
    }
  e.Props.Worksheets = e.Props.SheetNames.length, ce(i, s, ms(e.Props)), a.extprops.push(s), me(t.rels, 3, s, xe.EXT_PROPS), e.Custprops !== e.Props && Xe(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ce(i, s, gs(e.Custprops)), a.custprops.push(s), me(t.rels, 4, s, xe.CUST_PROPS));
  var c = ["SheetJ5"];
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var p = { "!id": {} }, u = e.Sheets[e.SheetNames[f - 1]], v = (u || {})["!type"] || "sheet";
    switch (v) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ce(i, s, $s(f - 1, t, e, p)), a.sheets.push(s), me(t.wbrels, -1, "worksheets/sheet" + f + "." + r, xe.WS[0]);
    }
    if (u) {
      var E = u["!comments"], x = !1, _ = "";
      if (E && E.length > 0) {
        var O = !1;
        E.forEach(function(R) {
          R[1].forEach(function(y) {
            y.T == !0 && (O = !0);
          });
        }), O && (_ = "xl/threadedComments/threadedComment" + f + "." + r, ce(i, _, Ph(E, c, t)), a.threadedcomments.push(_), me(p, -1, "../threadedComments/threadedComment" + f + "." + r, xe.TCMNT)), _ = "xl/comments" + f + "." + r, ce(i, _, Ls(E)), a.comments.push(_), me(p, -1, "../comments" + f + "." + r, xe.CMNT), x = !0;
      }
      u["!legacy"] && x && ce(i, "xl/drawings/vmlDrawing" + f + ".vml", Ps(f, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    p["!id"].rId1 && ce(i, xs(s), dt(p));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ce(i, s, ys(t.Strings, t)), a.strs.push(s), me(t.wbrels, -1, "sharedStrings." + r, xe.SST)), s = "xl/workbook." + r, ce(i, s, Ks(e)), a.workbooks.push(s), me(t.rels, 1, s, xe.WB), s = "xl/theme/theme1.xml", ce(i, s, Is(e.Themes, t)), a.themes.push(s), me(t.wbrels, -1, "theme/theme1.xml", xe.THEME), s = "xl/styles." + r, ce(i, s, Ds(e, t)), a.styles.push(s), me(t.wbrels, -1, "styles." + r, xe.STY), e.vbaraw && n && (s = "xl/vbaProject.bin", ce(i, s, e.vbaraw), a.vba.push(s), me(t.wbrels, -1, "vbaProject.bin", xe.VBA)), s = "xl/metadata." + r, ce(i, s, ks()), a.metadata.push(s), me(t.wbrels, -1, "metadata." + r, xe.XLMETA), c.length > 1 && (s = "xl/persons/person.xml", ce(i, s, Lh(c)), a.people.push(s), me(t.wbrels, -1, "persons/person.xml", xe.PEOPLE)), ce(i, "[Content_Types].xml", us(a, t)), ce(i, "_rels/.rels", dt(t.rels)), ce(i, "xl/_rels/workbook." + r + ".rels", dt(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function a2(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = kr(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function rf(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return Gt(t.file, Ee.write(e, { type: de ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return Ee.write(e, t);
}
function i2(e, t) {
  var r = tr(t || {}), n = r2(e, r);
  return s2(n, r);
}
function s2(e, t) {
  var r = {}, n = de ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password)
    r.type = n;
  else
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
      case "buffer":
      case "file":
        r.type = n;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  var a = e.FullPaths ? Ee.write(e, { fileType: "zip", type: { nodebuffer: "buffer", string: "binary" }[r.type] || r.type, compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof a == "string") {
    if (t.type == "binary" || t.type == "base64")
      return a;
    a = new Uint8Array(yn(a));
  }
  return t.password && typeof encrypt_agile < "u" ? rf(encrypt_agile(a, t.password), t) : t.type === "file" ? Gt(t.file, a) : t.type == "string" ? Nt(a) : a;
}
function f2(e, t) {
  var r = t || {}, n = Sd(e, r);
  return rf(n, r);
}
function Ar(e, t, r) {
  r || (r = "");
  var n = r + e;
  switch (t.type) {
    case "base64":
      return Mt(Rr(n));
    case "binary":
      return Rr(n);
    case "string":
      return e;
    case "file":
      return Gt(t.file, n, "utf8");
    case "buffer":
      return de ? Lr(n, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(n) : Ar(n, { type: "binary" }).split("").map(function(a) {
        return a.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function o2(e, t) {
  switch (t.type) {
    case "base64":
      return Mt(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return Gt(t.file, e, "binary");
    case "buffer":
      return de ? Lr(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function nn(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", n = 0; n < e.length; ++n)
        r += String.fromCharCode(e[n]);
      return t.type == "base64" ? Mt(r) : t.type == "string" ? Nt(r) : r;
    case "file":
      return Gt(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function tf(e, t) {
  Lo(), zx(e);
  var r = tr(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var n = tf(e, r);
    return r.type = "array", yn(n);
  }
  var a = 0;
  if (r.sheet && (typeof r.sheet == "number" ? a = r.sheet : a = e.SheetNames.indexOf(r.sheet), !e.SheetNames[a]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return Ar(Td(e, r), r);
    case "slk":
    case "sylk":
      return Ar(Xc.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "htm":
    case "html":
      return Ar(Js(e.Sheets[e.SheetNames[a]], r), r);
    case "txt":
      return o2(nf(e.Sheets[e.SheetNames[a]], r), r);
    case "csv":
      return Ar(V0(e.Sheets[e.SheetNames[a]], r), r, "\uFEFF");
    case "dif":
      return Ar($c.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "dbf":
      return nn(Gc.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "prn":
      return Ar(jc.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "rtf":
      return Ar(Qc.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "eth":
      return Ar(Fs.from_sheet(e.Sheets[e.SheetNames[a]], r), r);
    case "fods":
      return Ar(ef(e, r), r);
    case "wk1":
      return nn(ei.sheet_to_wk1(e.Sheets[e.SheetNames[a]], r), r);
    case "wk3":
      return nn(ei.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    case "biff3":
      r.biff || (r.biff = 3);
    case "biff4":
      return r.biff || (r.biff = 4), nn(qs(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), f2(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return i2(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function l2(e) {
  if (!e.bookType) {
    var t = {
      xls: "biff8",
      htm: "html",
      slk: "sylk",
      socialcalc: "eth",
      Sh33tJS: "WTF"
    }, r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), e.bookType = t[e.bookType] || e.bookType;
  }
}
function c2(e, t, r) {
  var n = r || {};
  return n.type = "file", n.file = t, l2(n), tf(e, n);
}
function h2(e, t, r, n, a, i, s, f) {
  var l = Ge(r), o = f.defval, c = f.raw || !Object.prototype.hasOwnProperty.call(f, "raw"), p = !0, u = a === 1 ? [] : {};
  if (a !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(u, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        u.__rowNum__ = r;
      }
    else
      u.__rowNum__ = r;
  if (!s || e[r])
    for (var v = t.s.c; v <= t.e.c; ++v) {
      var E = s ? e[r][v] : e[n[v] + l];
      if (E === void 0 || E.t === void 0) {
        if (o === void 0)
          continue;
        i[v] != null && (u[i[v]] = o);
        continue;
      }
      var x = E.v;
      switch (E.t) {
        case "z":
          if (x == null)
            break;
          continue;
        case "e":
          x = x == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + E.t);
      }
      if (i[v] != null) {
        if (x == null)
          if (E.t == "e" && x === null)
            u[i[v]] = null;
          else if (o !== void 0)
            u[i[v]] = o;
          else if (c && x === null)
            u[i[v]] = null;
          else
            continue;
        else
          u[i[v]] = c && (E.t !== "n" || E.t === "n" && f.rawNumbers !== !1) ? x : Pr(E, x, f);
        x != null && (p = !1);
      }
    }
  return { row: u, isempty: p };
}
function Tn(e, t) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, n = 0, a = 1, i = [], s = 0, f = "", l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, o = t || {}, c = o.range != null ? o.range : e["!ref"];
  switch (o.header === 1 ? n = 1 : o.header === "A" ? n = 2 : Array.isArray(o.header) ? n = 3 : o.header == null && (n = 0), typeof c) {
    case "string":
      l = we(c);
      break;
    case "number":
      l = we(e["!ref"]), l.s.r = c;
      break;
    default:
      l = c;
  }
  n > 0 && (a = 0);
  var p = Ge(l.s.r), u = [], v = [], E = 0, x = 0, _ = Array.isArray(e), O = l.s.r, R = 0, y = {};
  _ && !e[O] && (e[O] = []);
  var M = o.skipHidden && e["!cols"] || [], b = o.skipHidden && e["!rows"] || [];
  for (R = l.s.c; R <= l.e.c; ++R)
    if (!(M[R] || {}).hidden)
      switch (u[R] = ze(R), r = _ ? e[O][R] : e[u[R] + p], n) {
        case 1:
          i[R] = R - l.s.c;
          break;
        case 2:
          i[R] = u[R];
          break;
        case 3:
          i[R] = o.header[R - l.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), f = s = Pr(r, null, o), x = y[s] || 0, !x)
            y[s] = 1;
          else {
            do
              f = s + "_" + x++;
            while (y[f]);
            y[s] = x, y[f] = 1;
          }
          i[R] = f;
      }
  for (O = l.s.r + a; O <= l.e.r; ++O)
    if (!(b[O] || {}).hidden) {
      var re = h2(e, l, O, u, n, i, _, o);
      (re.isempty === !1 || (n === 1 ? o.blankrows !== !1 : !!o.blankrows)) && (v[E++] = re.row);
    }
  return v.length = E, v;
}
var oi = /"/g;
function u2(e, t, r, n, a, i, s, f) {
  for (var l = !0, o = [], c = "", p = Ge(r), u = t.s.c; u <= t.e.c; ++u)
    if (!!n[u]) {
      var v = f.dense ? (e[r] || [])[u] : e[n[u] + p];
      if (v == null)
        c = "";
      else if (v.v != null) {
        l = !1, c = "" + (f.rawNumbers && v.t == "n" ? v.v : Pr(v, null, f));
        for (var E = 0, x = 0; E !== c.length; ++E)
          if ((x = c.charCodeAt(E)) === a || x === i || x === 34 || f.forceQuotes) {
            c = '"' + c.replace(oi, '""') + '"';
            break;
          }
        c == "ID" && (c = '"ID"');
      } else
        v.f != null && !v.F ? (l = !1, c = "=" + v.f, c.indexOf(",") >= 0 && (c = '"' + c.replace(oi, '""') + '"')) : c = "";
      o.push(c);
    }
  return f.blankrows === !1 && l ? null : o.join(s);
}
function V0(e, t) {
  var r = [], n = t == null ? {} : t;
  if (e == null || e["!ref"] == null)
    return "";
  var a = we(e["!ref"]), i = n.FS !== void 0 ? n.FS : ",", s = i.charCodeAt(0), f = n.RS !== void 0 ? n.RS : `
`, l = f.charCodeAt(0), o = new RegExp((i == "|" ? "\\|" : i) + "+$"), c = "", p = [];
  n.dense = Array.isArray(e);
  for (var u = n.skipHidden && e["!cols"] || [], v = n.skipHidden && e["!rows"] || [], E = a.s.c; E <= a.e.c; ++E)
    (u[E] || {}).hidden || (p[E] = ze(E));
  for (var x = 0, _ = a.s.r; _ <= a.e.r; ++_)
    (v[_] || {}).hidden || (c = u2(e, a, _, p, s, l, i, n), c != null && (n.strip && (c = c.replace(o, "")), (c || n.blankrows !== !1) && r.push((x++ ? f : "") + c)));
  return delete n.dense, r.join("");
}
function nf(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = V0(e, t);
  return r;
}
function x2(e) {
  var t = "", r, n = "";
  if (e == null || e["!ref"] == null)
    return [];
  var a = we(e["!ref"]), i = "", s = [], f, l = [], o = Array.isArray(e);
  for (f = a.s.c; f <= a.e.c; ++f)
    s[f] = ze(f);
  for (var c = a.s.r; c <= a.e.r; ++c)
    for (i = Ge(c), f = a.s.c; f <= a.e.c; ++f)
      if (t = s[f] + i, r = o ? (e[c] || [])[f] : e[t], n = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f)
            continue;
          n = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null)
          n = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            n = "" + r.v;
          else if (r.t == "b")
            n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            n = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? n = "'" + r.v : n = "" + r.v;
          }
        }
        l[l.length] = t + "=" + n;
      }
  return l;
}
function af(e, t, r) {
  var n = r || {}, a = +!n.skipHeader, i = e || {}, s = 0, f = 0;
  if (i && n.origin != null)
    if (typeof n.origin == "number")
      s = n.origin;
    else {
      var l = typeof n.origin == "string" ? Me(n.origin) : n.origin;
      s = l.r, f = l.c;
    }
  var o, c = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + a } };
  if (i["!ref"]) {
    var p = we(i["!ref"]);
    c.e.c = Math.max(c.e.c, p.e.c), c.e.r = Math.max(c.e.r, p.e.r), s == -1 && (s = p.e.r + 1, c.e.r = s + t.length - 1 + a);
  } else
    s == -1 && (s = 0, c.e.r = t.length - 1 + a);
  var u = n.header || [], v = 0;
  t.forEach(function(x, _) {
    Xe(x).forEach(function(O) {
      (v = u.indexOf(O)) == -1 && (u[v = u.length] = O);
      var R = x[O], y = "z", M = "", b = _e({ c: f + v, r: s + _ + a });
      o = Ht(i, b), R && typeof R == "object" && !(R instanceof Date) ? i[b] = R : (typeof R == "number" ? y = "n" : typeof R == "boolean" ? y = "b" : typeof R == "string" ? y = "s" : R instanceof Date ? (y = "d", n.cellDates || (y = "n", R = rr(R)), M = n.dateNF || Ce[14]) : R === null && n.nullError && (y = "e", R = 0), o ? (o.t = y, o.v = R, delete o.w, delete o.R, M && (o.z = M)) : i[b] = o = { t: y, v: R }, M && (o.z = M));
    });
  }), c.e.c = Math.max(c.e.c, f + u.length - 1);
  var E = Ge(s);
  if (a)
    for (v = 0; v < u.length; ++v)
      i[ze(v + f) + E] = { t: "s", v: u[v] };
  return i["!ref"] = Ne(c), i;
}
function d2(e, t) {
  return af(null, e, t);
}
function Ht(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var n = Me(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? Ht(e, _e(t)) : Ht(e, _e({ r: t, c: r || 0 }));
}
function p2(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t)
      return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else
    throw new Error("Cannot find sheet |" + t + "|");
}
function v2() {
  return { SheetNames: [], Sheets: {} };
}
function m2(e, t, r, n) {
  var a = 1;
  if (!r)
    for (; a <= 65535 && e.SheetNames.indexOf(r = "Sheet" + a) != -1; ++a, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/);
    a = i && +i[2] || 0;
    var s = i && i[1] || r;
    for (++a; a <= 65535 && e.SheetNames.indexOf(r = s + a) != -1; ++a)
      ;
  }
  if (zs(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function g2(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = p2(e, t);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function _2(e, t) {
  return e.z = t, e;
}
function sf(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function E2(e, t, r) {
  return sf(e, "#" + t, r);
}
function T2(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function w2(e, t, r, n) {
  for (var a = typeof t != "string" ? t : we(t), i = typeof t == "string" ? t : Ne(t), s = a.s.r; s <= a.e.r; ++s)
    for (var f = a.s.c; f <= a.e.c; ++f) {
      var l = Ht(e, s, f);
      l.t = "n", l.F = i, delete l.v, s == a.s.r && f == a.s.c && (l.f = r, n && (l.D = !0));
    }
  return e;
}
var S2 = {
  encode_col: ze,
  encode_row: Ge,
  encode_cell: _e,
  encode_range: Ne,
  decode_col: N0,
  decode_row: D0,
  split_cell: Bl,
  decode_cell: Me,
  decode_range: lr,
  format_cell: Pr,
  sheet_add_aoa: is,
  sheet_add_json: af,
  sheet_add_dom: Zs,
  aoa_to_sheet: wt,
  json_to_sheet: d2,
  table_to_sheet: Qs,
  table_to_book: $d,
  sheet_to_csv: V0,
  sheet_to_txt: nf,
  sheet_to_json: Tn,
  sheet_to_html: Js,
  sheet_to_formulae: x2,
  sheet_to_row_object_array: Tn,
  sheet_get_cell: Ht,
  book_new: v2,
  book_append_sheet: m2,
  book_set_sheet_visibility: g2,
  cell_set_number_format: _2,
  cell_set_hyperlink: sf,
  cell_set_internal_link: E2,
  cell_add_comment: T2,
  sheet_set_array_formula: w2,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
function R2({
  data: e,
  header: t,
  filename: r = `${new Date()}.xlsx`,
  json2sheetOpts: n = {},
  write2excelOpts: a = { bookType: "xlsx" }
}) {
  const i = [...e];
  t && (i.unshift(t), n.skipHeader = !0);
  const s = S2.json_to_sheet(i, n), f = {
    SheetNames: [r],
    Sheets: {
      [r]: s
    }
  };
  c2(f, r, a);
}
export {
  Io as BaseCRUD,
  y2 as CompatibleWithDefaultConfig,
  C2 as formatOption,
  R2 as jsonToSheetXlsx,
  O2 as useBaseCRUD
};
