import { cloneDeep as i } from "lodash";
function b(r, n = {}) {
  var t;
  for (const e in r)
    Object.prototype.hasOwnProperty.call(r, e) && (Array.isArray(n) ? n.forEach((o) => {
      var l;
      const u = i(r[e]);
      o[e] = (l = o[e]) != null ? l : u;
    }) : n[e] = (t = n[e]) != null ? t : i(r[e]));
}
function v(r, n, t, e = "jsx") {
  const o = n ? r[n.property] : r;
  if (!t)
    return o;
  const u = t.find((p) => p[e === "value" ? "label" : "value"] === o);
  if (!u)
    throw new Error(`\u914D\u7F6E\u9519\u8BEF${o}`);
  const { color: l, label: c, value: f } = u;
  if (e === "jsx")
    return l ? /* @__PURE__ */ h("h1", {
      style: { color: l }
    }, c) : c;
  if (e === "label")
    return c;
  if (e === "value")
    return f;
}
export {
  b as CompatibleWithDefaultConfig,
  v as formatOption
};
