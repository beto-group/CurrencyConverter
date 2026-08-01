(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;height:100%;min-height:100%;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:10px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.glass-card{background:#18181b;border:1px solid #27272a;border-radius:16px;padding:14px 12px;width:100%;max-width:100%;box-shadow:0 20px 40px #0006;display:flex;flex-direction:column;gap:12px;position:relative;box-sizing:border-box;margin:0 auto;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:20px}.glass-card{max-width:520px;padding:22px;gap:16px}}.currency-header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;width:100%;box-sizing:border-box}.currency-title{font-size:clamp(1rem,4vw,1.35rem);font-weight:700;margin:0;color:#fafafa;letter-spacing:-.02em;display:flex;align-items:center;gap:6px;flex-wrap:wrap}.status-badge{font-size:.6rem;text-transform:uppercase;letter-spacing:1px;font-weight:700;padding:3px 7px;border-radius:6px;background:#10b98126;color:#10b981;white-space:nowrap}.status-badge.offline{background:#f59e0b26;color:#f59e0b}.input-group{display:flex;flex-direction:column;gap:4px;width:100%;box-sizing:border-box}.input-group label{font-size:.75rem;color:#a1a1aa;font-weight:500}.input-wrapper{display:flex;align-items:center;background:#09090b;border:1px solid #3f3f46;border-radius:10px;transition:all .2s ease;position:relative;width:100%;box-sizing:border-box;overflow:hidden}.input-wrapper:focus-within{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f626}.currency-input{background:transparent;color:#fafafa;border:none;padding:10px 12px;font-size:clamp(1rem,3.8vw,1.25rem);font-weight:600;width:100%;outline:none;text-align:right;font-variant-numeric:tabular-nums;flex:1;min-width:0;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}.currency-input::placeholder{color:#52525b}.swap-btn{background:#27272a;border:1px solid #3f3f46;color:#a1a1aa;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-2px 0;z-index:2;flex-shrink:0}.swap-btn:hover{background:#3f3f46;color:#fafafa}.sync-btn{background:#fafafa;color:#09090b;border:none;padding:10px 12px;border-radius:8px;font-weight:700;font-size:.8rem;cursor:pointer;transition:all .2s ease;white-space:nowrap;flex:1;min-width:100px}.sync-btn:hover{background:#e4e4e7}.sync-btn:active{transform:scale(.98)}.last-updated{text-align:center;font-size:.7rem;color:#71717a;margin-top:2px}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var ee = { exports: {} }, L = {}, ne = { exports: {} }, i = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D = Symbol.for("react.element"), he = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), Se = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), ke = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), je = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), Z = Symbol.iterator;
function Ne(e) {
  return e === null || typeof e != "object" ? null : (e = Z && e[Z] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ae = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, te = Object.assign, re = {};
function R(e, n, r) {
  this.props = e, this.context = n, this.refs = re, this.updater = r || ae;
}
R.prototype.isReactComponent = {};
R.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
R.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function oe() {
}
oe.prototype = R.prototype;
function U(e, n, r) {
  this.props = e, this.context = n, this.refs = re, this.updater = r || ae;
}
var W = U.prototype = new oe();
W.constructor = U;
te(W, R.prototype);
W.isPureReactComponent = !0;
var J = Array.isArray, le = Object.prototype.hasOwnProperty, G = { current: null }, se = { key: !0, ref: !0, __self: !0, __source: !0 };
function ie(e, n, r) {
  var o, l = {}, s = null, u = null;
  if (n != null) for (o in n.ref !== void 0 && (u = n.ref), n.key !== void 0 && (s = "" + n.key), n) le.call(n, o) && !se.hasOwnProperty(o) && (l[o] = n[o]);
  var c = arguments.length - 2;
  if (c === 1) l.children = r;
  else if (1 < c) {
    for (var d = Array(c), p = 0; p < c; p++) d[p] = arguments[p + 2];
    l.children = d;
  }
  if (e && e.defaultProps) for (o in c = e.defaultProps, c) l[o] === void 0 && (l[o] = c[o]);
  return { $$typeof: D, type: e, key: s, ref: u, props: l, _owner: G.current };
}
function _e(e, n) {
  return { $$typeof: D, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function H(e) {
  return typeof e == "object" && e !== null && e.$$typeof === D;
}
function Me(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return n[r];
  });
}
var q = /\/+/g;
function I(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Me("" + e.key) : n.toString(36);
}
function E(e, n, r, o, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else switch (s) {
    case "string":
    case "number":
      u = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case D:
        case he:
          u = !0;
      }
  }
  if (u) return u = e, l = l(u), e = o === "" ? "." + I(u, 0) : o, J(l) ? (r = "", e != null && (r = e.replace(q, "$&/") + "/"), E(l, n, r, "", function(p) {
    return p;
  })) : l != null && (H(l) && (l = _e(l, r + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(q, "$&/") + "/") + e)), n.push(l)), 1;
  if (u = 0, o = o === "" ? "." : o + ":", J(e)) for (var c = 0; c < e.length; c++) {
    s = e[c];
    var d = o + I(s, c);
    u += E(s, n, r, d, l);
  }
  else if (d = Ne(e), typeof d == "function") for (e = d.call(e), c = 0; !(s = e.next()).done; ) s = s.value, d = o + I(s, c++), u += E(s, n, r, d, l);
  else if (s === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function P(e, n, r) {
  if (e == null) return e;
  var o = [], l = 0;
  return E(e, o, "", "", function(s) {
    return n.call(r, s, l++);
  }), o;
}
function Pe(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var y = { current: null }, $ = { transition: null }, Ee = { ReactCurrentDispatcher: y, ReactCurrentBatchConfig: $, ReactCurrentOwner: G };
function ce() {
  throw Error("act(...) is not supported in production builds of React.");
}
i.Children = { map: P, forEach: function(e, n, r) {
  P(e, function() {
    n.apply(this, arguments);
  }, r);
}, count: function(e) {
  var n = 0;
  return P(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return P(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!H(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
i.Component = R;
i.Fragment = xe;
i.Profiler = ve;
i.PureComponent = U;
i.StrictMode = Se;
i.Suspense = we;
i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee;
i.act = ce;
i.cloneElement = function(e, n, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var o = te({}, e.props), l = e.key, s = e.ref, u = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (s = n.ref, u = G.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
    for (d in n) le.call(n, d) && !se.hasOwnProperty(d) && (o[d] = n[d] === void 0 && c !== void 0 ? c[d] : n[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) o.children = r;
  else if (1 < d) {
    c = Array(d);
    for (var p = 0; p < d; p++) c[p] = arguments[p + 2];
    o.children = c;
  }
  return { $$typeof: D, type: e.type, key: l, ref: s, props: o, _owner: u };
};
i.createContext = function(e) {
  return e = { $$typeof: ke, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ce, _context: e }, e.Consumer = e;
};
i.createElement = ie;
i.createFactory = function(e) {
  var n = ie.bind(null, e);
  return n.type = e, n;
};
i.createRef = function() {
  return { current: null };
};
i.forwardRef = function(e) {
  return { $$typeof: Re, render: e };
};
i.isValidElement = H;
i.lazy = function(e) {
  return { $$typeof: De, _payload: { _status: -1, _result: e }, _init: Pe };
};
i.memo = function(e, n) {
  return { $$typeof: je, type: e, compare: n === void 0 ? null : n };
};
i.startTransition = function(e) {
  var n = $.transition;
  $.transition = {};
  try {
    e();
  } finally {
    $.transition = n;
  }
};
i.unstable_act = ce;
i.useCallback = function(e, n) {
  return y.current.useCallback(e, n);
};
i.useContext = function(e) {
  return y.current.useContext(e);
};
i.useDebugValue = function() {
};
i.useDeferredValue = function(e) {
  return y.current.useDeferredValue(e);
};
i.useEffect = function(e, n) {
  return y.current.useEffect(e, n);
};
i.useId = function() {
  return y.current.useId();
};
i.useImperativeHandle = function(e, n, r) {
  return y.current.useImperativeHandle(e, n, r);
};
i.useInsertionEffect = function(e, n) {
  return y.current.useInsertionEffect(e, n);
};
i.useLayoutEffect = function(e, n) {
  return y.current.useLayoutEffect(e, n);
};
i.useMemo = function(e, n) {
  return y.current.useMemo(e, n);
};
i.useReducer = function(e, n, r) {
  return y.current.useReducer(e, n, r);
};
i.useRef = function(e) {
  return y.current.useRef(e);
};
i.useState = function(e) {
  return y.current.useState(e);
};
i.useSyncExternalStore = function(e, n, r) {
  return y.current.useSyncExternalStore(e, n, r);
};
i.useTransition = function() {
  return y.current.useTransition();
};
i.version = "18.3.1";
ne.exports = i;
var f = ne.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e = f, Le = Symbol.for("react.element"), Te = Symbol.for("react.fragment"), Ae = Object.prototype.hasOwnProperty, Be = $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
function ue(e, n, r) {
  var o, l = {}, s = null, u = null;
  r !== void 0 && (s = "" + r), n.key !== void 0 && (s = "" + n.key), n.ref !== void 0 && (u = n.ref);
  for (o in n) Ae.call(n, o) && !Fe.hasOwnProperty(o) && (l[o] = n[o]);
  if (e && e.defaultProps) for (o in n = e.defaultProps, n) l[o] === void 0 && (l[o] = n[o]);
  return { $$typeof: Le, type: e, key: s, ref: u, props: l, _owner: Be.current };
}
L.Fragment = Te;
L.jsx = ue;
L.jsxs = ue;
ee.exports = L;
var a = ee.exports;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (...e) => e.filter((n, r, o) => !!n && n.trim() !== "" && o.indexOf(n) === r).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, r, o) => o ? o.toUpperCase() : r.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = (e) => {
  const n = Ke(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
}, Oe = f.createContext({}), Ue = () => f.useContext(Oe), We = f.forwardRef(
  ({ color: e, size: n, strokeWidth: r, absoluteStrokeWidth: o, className: l = "", children: s, iconNode: u, ...c }, d) => {
    const {
      size: p = 24,
      strokeWidth: k = 2,
      absoluteStrokeWidth: m = !1,
      color: h = "currentColor",
      className: x = ""
    } = Ue() ?? {}, g = o ?? m ? Number(r ?? k) * 24 / Number(n ?? p) : r ?? k;
    return f.createElement(
      "svg",
      {
        ref: d,
        ...K,
        width: n ?? p ?? K.width,
        height: n ?? p ?? K.height,
        stroke: e ?? h,
        strokeWidth: g,
        className: de("lucide", x, l),
        ...!s && !ze(c) && { "aria-hidden": "true" },
        ...c
      },
      [
        ...u.map(([C, N]) => f.createElement(C, N)),
        ...Array.isArray(s) ? s : [s]
      ]
    );
  }
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S = (e, n) => {
  const r = f.forwardRef(
    ({ className: o, ...l }, s) => f.createElement(We, {
      ref: s,
      iconNode: n,
      className: de(
        `lucide-${Ie(X(e))}`,
        `lucide-${e}`,
        o
      ),
      ...l
    })
  );
  return r.displayName = X(e), r;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], He = S("arrow-down", Ge);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Ve = S("arrow-up-down", Ye);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
], Je = S("calculator", Ze);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Xe = S("check", qe);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], en = S("chevron-down", Qe);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], an = S("refresh-cw", nn);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], rn = S("rotate-ccw-clock", tn);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ln = S("search", on);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], cn = S("sparkles", sn);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], dn = S("trash-2", un), z = {
  AED: { name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪" },
  AFN: { name: "Afghan Afghani", symbol: "؋", flag: "🇦🇫" },
  ALL: { name: "Albanian Lek", symbol: "L", flag: "🇦🇱" },
  AMD: { name: "Armenian Dram", symbol: "֏", flag: "🇦🇲" },
  ANG: { name: "Netherlands Antillean Guilder", symbol: "ƒ", flag: "🇨🇼" },
  AOA: { name: "Angolan Kwanza", symbol: "Kz", flag: "🇦🇴" },
  ARS: { name: "Argentine Peso", symbol: "$", flag: "🇦🇷" },
  AUD: { name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
  AWG: { name: "Aruban Florin", symbol: "ƒ", flag: "🇦🇼" },
  AZN: { name: "Azerbaijani Manat", symbol: "₼", flag: "🇦🇿" },
  BAM: { name: "Bosnia-Herzegovina Convertible Mark", symbol: "KM", flag: "🇧🇦" },
  BBD: { name: "Barbadian Dollar", symbol: "$", flag: "🇧🇧" },
  BDT: { name: "Bangladeshi Taka", symbol: "৳", flag: "🇧🇩" },
  BGN: { name: "Bulgarian Lev", symbol: "лв", flag: "🇧🇬" },
  BHD: { name: "Bahraini Dinar", symbol: ".د.ب", flag: "🇧🇭" },
  BIF: { name: "Burundian Franc", symbol: "FBu", flag: "🇧🇮" },
  BMD: { name: "Bermudan Dollar", symbol: "$", flag: "🇧🇲" },
  BND: { name: "Brunei Dollar", symbol: "$", flag: "🇧🇳" },
  BOB: { name: "Bolivian Boliviano", symbol: "Bs.", flag: "🇧🇴" },
  BRL: { name: "Brazilian Real", symbol: "R$", flag: "🇧🇷" },
  BSD: { name: "Bahamian Dollar", symbol: "$", flag: "🇧🇸" },
  BTN: { name: "Bhutanese Ngultrum", symbol: "Nu.", flag: "🇧🇹" },
  BWP: { name: "Botswanan Pula", symbol: "P", flag: "🇧🇼" },
  BYN: { name: "Belarusian Ruble", symbol: "Br", flag: "🇧🇾" },
  BZD: { name: "Belize Dollar", symbol: "BZ$", flag: "🇧🇿" },
  CAD: { name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
  CDF: { name: "Congolese Franc", symbol: "FC", flag: "🇨🇩" },
  CHF: { name: "Swiss Franc", symbol: "CHF", flag: "🇨🇭" },
  CLP: { name: "Chilean Peso", symbol: "$", flag: "🇨🇱" },
  CNY: { name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳" },
  COP: { name: "Colombian Peso", symbol: "$", flag: "🇨🇴" },
  CRC: { name: "Costa Rican Colón", symbol: "₡", flag: "🇨🇷" },
  CUP: { name: "Cuban Peso", symbol: "₱", flag: "🇨🇺" },
  CVE: { name: "Cape Verdean Escudo", symbol: "$", flag: "🇨🇻" },
  CZK: { name: "Czech Koruna", symbol: "Kč", flag: "🇨🇿" },
  DJF: { name: "Djiboutian Franc", symbol: "Fdj", flag: "🇩🇯" },
  DKK: { name: "Danish Krone", symbol: "kr", flag: "🇩🇰" },
  DOP: { name: "Dominican Peso", symbol: "RD$", flag: "🇩🇴" },
  DZD: { name: "Algerian Dinar", symbol: "د.ج", flag: "🇩🇿" },
  EGP: { name: "Egyptian Pound", symbol: "£", flag: "🇪🇬" },
  ERN: { name: "Eritrean Nakfa", symbol: "Nfk", flag: "🇪🇷" },
  ETB: { name: "Ethiopian Birr", symbol: "Br", flag: "🇪🇹" },
  EUR: { name: "Euro", symbol: "€", flag: "🇪🇺" },
  FJD: { name: "Fijian Dollar", symbol: "$", flag: "🇫🇯" },
  FKP: { name: "Falkland Islands Pound", symbol: "£", flag: "🇫🇰" },
  FOK: { name: "Faroese Króna", symbol: "kr", flag: "🇫🇴" },
  GBP: { name: "British Pound", symbol: "£", flag: "🇬🇧" },
  GEL: { name: "Georgian Lari", symbol: "₾", flag: "🇬🇪" },
  GGP: { name: "Guernsey Pound", symbol: "£", flag: "🇬🇬" },
  GHS: { name: "Ghanaian Cedi", symbol: "GH₵", flag: "🇬🇭" },
  GIP: { name: "Gibraltar Pound", symbol: "£", flag: "🇬🇮" },
  GMD: { name: "Gambian Dalasi", symbol: "D", flag: "🇬🇲" },
  GNF: { name: "Guinean Franc", symbol: "FG", flag: "🇬🇳" },
  GTQ: { name: "Guatemalan Quetzal", symbol: "Q", flag: "🇬🇹" },
  GYD: { name: "Guyanaese Dollar", symbol: "$", flag: "🇬🇾" },
  HKD: { name: "Hong Kong Dollar", symbol: "HK$", flag: "🇭🇰" },
  HNL: { name: "Honduran Lempira", symbol: "L", flag: "🇭🇳" },
  HRK: { name: "Croatian Kuna", symbol: "kn", flag: "🇭🇷" },
  HTG: { name: "Haitian Gourde", symbol: "G", flag: "🇭🇹" },
  HUF: { name: "Hungarian Forint", symbol: "Ft", flag: "🇭🇺" },
  IDR: { name: "Indonesian Rupiah", symbol: "Rp", flag: "🇮🇩" },
  ILS: { name: "Israeli New Shekel", symbol: "₪", flag: "🇮🇱" },
  IMP: { name: "Isle of Man Pound", symbol: "£", flag: "🇮🇲" },
  INR: { name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
  IQD: { name: "Iraqi Dinar", symbol: "ع.د", flag: "🇮🇶" },
  IRR: { name: "Iranian Rial", symbol: "﷼", flag: "🇮🇷" },
  ISK: { name: "Icelandic Króna", symbol: "kr", flag: "🇮🇸" },
  JEP: { name: "Jersey Pound", symbol: "£", flag: "🇯🇪" },
  JMD: { name: "Jamaican Dollar", symbol: "J$", flag: "🇯🇲" },
  JOD: { name: "Jordanian Dinar", symbol: "د.ا", flag: "🇯🇴" },
  JPY: { name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
  KES: { name: "Kenyan Shilling", symbol: "KSh", flag: "🇰🇪" },
  KGS: { name: "Kyrgystani Som", symbol: "с", flag: "🇰🇬" },
  KHR: { name: "Cambodian Riel", symbol: "៛", flag: "🇰🇭" },
  KID: { name: "Kiribati Dollar", symbol: "$", flag: "🇰🇮" },
  KMF: { name: "Comorian Franc", symbol: "CF", flag: "🇰🇲" },
  KRW: { name: "South Korean Won", symbol: "₩", flag: "🇰🇷" },
  KWD: { name: "Kuwaiti Dinar", symbol: "د.ك", flag: "🇰🇼" },
  KYD: { name: "Cayman Islands Dollar", symbol: "$", flag: "🇰🇾" },
  KZT: { name: "Kazakhstani Tenge", symbol: "₸", flag: "🇰🇿" },
  LAK: { name: "Laotian Kip", symbol: "₭", flag: "🇱🇦" },
  LBP: { name: "Lebanese Pound", symbol: "ل.ل", flag: "🇱🇧" },
  LKR: { name: "Sri Lankan Rupee", symbol: "Rs", flag: "🇱🇰" },
  LRD: { name: "Liberian Dollar", symbol: "$", flag: "🇱🇷" },
  LSL: { name: "Lesotho Loti", symbol: "L", flag: "🇱🇸" },
  LYD: { name: "Libyan Dinar", symbol: "ل.د", flag: "🇱🇾" },
  MAD: { name: "Moroccan Dirham", symbol: "د.م.", flag: "🇲🇦" },
  MDL: { name: "Moldovan Leu", symbol: "L", flag: "🇲🇩" },
  MGA: { name: "Malagasy Ariary", symbol: "Ar", flag: "🇲🇬" },
  MKD: { name: "Macedonian Denar", symbol: "ден", flag: "🇲🇰" },
  MMK: { name: "Myanmar Kyat", symbol: "K", flag: "🇲🇲" },
  MNT: { name: "Mongolian Tugrik", symbol: "₮", flag: "🇲🇳" },
  MOP: { name: "Macanese Pataca", symbol: "MOP$", flag: "🇲🇴" },
  MRU: { name: "Mauritanian Ouguiya", symbol: "UM", flag: "🇲🇷" },
  MUR: { name: "Mauritian Rupee", symbol: "₨", flag: "🇲🇺" },
  MVR: { name: "Maldivian Rufiyaa", symbol: "Rf", flag: "🇲🇻" },
  MWK: { name: "Malawian Kwacha", symbol: "MK", flag: "🇲🇼" },
  MXN: { name: "Mexican Peso", symbol: "$", flag: "🇲🇽" },
  MYR: { name: "Malaysian Ringgit RM", symbol: "RM", flag: "🇲🇾" },
  MZN: { name: "Mozambican Metical", symbol: "MT", flag: "🇲🇿" },
  NAD: { name: "Namibian Dollar", symbol: "$", flag: "🇳🇦" },
  NGN: { name: "Nigerian Naira", symbol: "₦", flag: "🇳🇬" },
  NIO: { name: "Nicaraguan Córdoba", symbol: "C$", flag: "🇳🇮" },
  NOK: { name: "Norwegian Krone", symbol: "kr", flag: "🇳🇴" },
  NPR: { name: "Nepalese Rupee", symbol: "₨", flag: "🇳🇵" },
  NZD: { name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿" },
  OMR: { name: "Omani Rial", symbol: "ر.ع.", flag: "🇴🇲" },
  PAB: { name: "Panamanian Balboa", symbol: "B/.", flag: "🇵🇦" },
  PEN: { name: "Peruvian Sol", symbol: "S/", flag: "🇵🇪" },
  PGK: { name: "Papua New Guinean Kina", symbol: "K", flag: "🇵🇬" },
  PHP: { name: "Philippine Peso", symbol: "₱", flag: "🇵🇭" },
  PKR: { name: "Pakistani Rupee", symbol: "₨", flag: "🇵🇰" },
  PLN: { name: "Polish Zloty", symbol: "zł", flag: "🇵🇱" },
  PYG: { name: "Paraguayan Guarani", symbol: "₲", flag: "🇵🇾" },
  QAR: { name: "Qatari Rial", symbol: "ر.ق", flag: "🇶🇦" },
  RON: { name: "Romanian Leu", symbol: "lei", flag: "🇷🇴" },
  RSD: { name: "Serbian Dinar", symbol: "дин.", flag: "🇷🇸" },
  RUB: { name: "Russian Ruble", symbol: "₽", flag: "🇷🇺" },
  RWF: { name: "Rwandan Franc", symbol: "FRw", flag: "🇷🇼" },
  SAR: { name: "Saudi Riyal", symbol: "ر.س", flag: "🇸🇦" },
  SBD: { name: "Solomon Islands Dollar", symbol: "$", flag: "🇸🇧" },
  SCR: { name: "Seychellois Rupee", symbol: "₨", flag: "🇸🇨" },
  SDG: { name: "Sudanese Pound", symbol: "ج.س.", flag: "🇸🇩" },
  SEK: { name: "Swedish Krona", symbol: "kr", flag: "🇸🇪" },
  SGD: { name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬" },
  SHP: { name: "Saint Helena Pound", symbol: "£", flag: "🇸🇭" },
  SLE: { name: "Sierra Leonean Leone", symbol: "Le", flag: "🇸🇱" },
  SOS: { name: "Somali Shilling", symbol: "Sh", flag: "🇸🇴" },
  SRD: { name: "Surinamese Dollar", symbol: "$", flag: "🇸🇷" },
  SSP: { name: "South Sudanese Pound", symbol: "£", flag: "🇸🇸" },
  STN: { name: "São Tomé & Príncipe Dobra", symbol: "Db", flag: "🇸🇹" },
  SYP: { name: "Syrian Pound", symbol: "£", flag: "🇸🇾" },
  SZL: { name: "Swazi Lilangeni", symbol: "L", flag: "🇸🇿" },
  THB: { name: "Thai Baht", symbol: "฿", flag: "🇹🇭" },
  TJS: { name: "Tajikistani Somoni", symbol: "SM", flag: "🇹🇯" },
  TMT: { name: "Turkmenistani Manat", symbol: "T", flag: "🇹🇲" },
  TND: { name: "Tunisian Dinar", symbol: "د.ت", flag: "🇹🇳" },
  TOP: { name: "Tongan Paʻanga", symbol: "T$", flag: "🇹🇴" },
  TRY: { name: "Turkish Lira", symbol: "₺", flag: "🇹🇷" },
  TTD: { name: "Trinidad & Tobago Dollar", symbol: "$", flag: "🇹🇹" },
  TVD: { name: "Tuvaluan Dollar", symbol: "$", flag: "🇹🇻" },
  TWD: { name: "New Taiwan Dollar", symbol: "NT$", flag: "🇹🇼" },
  TZS: { name: "Tanzanian Shilling", symbol: "Sh", flag: "🇹🇿" },
  UAH: { name: "Ukrainian Hryvnia", symbol: "₴", flag: "🇺🇦" },
  UGX: { name: "Ugandan Shilling", symbol: "USh", flag: "🇺🇬" },
  USD: { name: "US Dollar", symbol: "$", flag: "🇺🇸" },
  UYU: { name: "Uruguayan Peso", symbol: "$U", flag: "🇺🇾" },
  UZS: { name: "Uzbekistani Som", symbol: "so'm", flag: "🇺🇿" },
  VES: { name: "Venezuelan Bolívar", symbol: "Bs.S.", flag: "🇻🇪" },
  VND: { name: "Vietnamese Dong", symbol: "₫", flag: "🇻🇳" },
  VUV: { name: "Vanuatu Vatu", symbol: "VT", flag: "🇻🇺" },
  WST: { name: "Samoan Tala", symbol: "T", flag: "🇼🇸" },
  XAF: { name: "Central African CFA Franc", symbol: "Fr", flag: "🇨🇲" },
  XCD: { name: "East Caribbean Dollar", symbol: "$", flag: "🇦🇬" },
  XOF: { name: "West African CFA Franc", symbol: "Fr", flag: "🇸🇳" },
  XPF: { name: "CFP Franc", symbol: "₣", flag: "🇵🇫" },
  YER: { name: "Yemeni Rial", symbol: "﷼", flag: "🇾🇪" },
  ZAR: { name: "South African Rand", symbol: "R", flag: "🇿🇦" },
  ZMW: { name: "Zambian Kwacha", symbol: "ZK", flag: "🇿🇲" },
  ZWL: { name: "Zimbabwean Dollar", symbol: "$", flag: "🇿🇼" }
}, Q = ({ options: e, value: n, onChange: r }) => {
  const [o, l] = f.useState(!1), [s, u] = f.useState(""), c = f.useRef(null);
  f.useEffect(() => {
    const m = (h) => {
      c.current && !c.current.contains(h.target) && l(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const d = e.filter((m) => {
    const h = z[m] || { name: m }, x = s.toLowerCase();
    return m.toLowerCase().includes(x) || h.name.toLowerCase().includes(x);
  }), p = z[n] || { name: n, symbol: n }, k = n === "EUR" ? "EU" : n === "BTC" ? "⚡" : n.substring(0, 2);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "custom-dropdown",
      ref: c,
      style: { position: "relative", width: "auto", flexShrink: 0 },
      children: [
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            className: "dropdown-trigger",
            onClick: () => l(!o),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 10px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#fafafa",
              outline: "none",
              transition: "all 0.2s ease",
              margin: 0
            },
            children: [
              /* @__PURE__ */ a.jsx("div", { style: {
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                background: "linear-gradient(135deg, #27272a 0%, #18181b 100%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "800",
                color: "#a1a1aa",
                letterSpacing: "0.5px",
                flexShrink: 0
              }, children: k }),
              /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexDirection: "column", textAlign: "left", minWidth: "0" }, children: [
                /* @__PURE__ */ a.jsx("span", { style: { fontWeight: 700, fontSize: "0.9rem", color: "#fafafa", lineHeight: 1 }, children: n }),
                /* @__PURE__ */ a.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "65px", marginTop: "2px" }, children: p.name })
              ] }),
              /* @__PURE__ */ a.jsx("span", { style: { fontSize: "0.8rem", color: "#a1a1aa", fontWeight: "600", marginLeft: "2px" }, children: p.symbol }),
              /* @__PURE__ */ a.jsx(en, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: o ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
            ]
          }
        ),
        o && /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: "dropdown-menu-override",
            style: {
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              width: "260px",
              background: "#121215",
              border: "1px solid #27272a",
              borderRadius: "10px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              zIndex: 999999,
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ a.jsxs("div", { style: { padding: "8px", borderBottom: "1px solid #1c1c21", position: "relative" }, children: [
                /* @__PURE__ */ a.jsx(ln, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search currency...",
                    value: s,
                    onChange: (m) => u(m.target.value),
                    autoFocus: !0,
                    style: {
                      width: "100%",
                      background: "#09090b",
                      border: "1px solid #27272a",
                      borderRadius: "6px",
                      padding: "6px 8px 6px 30px",
                      color: "#fafafa",
                      outline: "none",
                      fontSize: "0.8rem",
                      boxSizing: "border-box"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ a.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: "4px 0",
                maxHeight: "260px",
                overflowY: "auto"
              }, children: d.length > 0 ? d.map((m) => {
                const h = z[m] || { name: m, symbol: m }, x = m === "EUR" ? "EU" : m === "BTC" ? "⚡" : m.substring(0, 2), g = m === n;
                return /* @__PURE__ */ a.jsxs(
                  "li",
                  {
                    onClick: () => {
                      r(m), l(!1), u("");
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      cursor: "pointer",
                      background: g ? "rgba(168, 85, 247, 0.15)" : "transparent",
                      borderLeft: g ? "2px solid #a855f7" : "2px solid transparent",
                      transition: "all 0.15s ease"
                    },
                    onMouseEnter: (C) => !g && (C.currentTarget.style.background = "rgba(255, 255, 255, 0.04)"),
                    onMouseLeave: (C) => !g && (C.currentTarget.style.background = "transparent"),
                    children: [
                      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ a.jsx("div", { style: {
                          width: "22px",
                          height: "22px",
                          borderRadius: "5px",
                          background: g ? "#a855f7" : "#1c1c21",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          fontWeight: "800",
                          color: g ? "#ffffff" : "#9ca3af"
                        }, children: x }),
                        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                          /* @__PURE__ */ a.jsx("span", { style: { fontWeight: 600, color: g ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: m }),
                          /* @__PURE__ */ a.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: h.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ a.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: h.symbol }),
                        g && /* @__PURE__ */ a.jsx(Xe, { size: 14, color: "#a855f7" })
                      ] })
                    ]
                  },
                  m
                );
              }) : /* @__PURE__ */ a.jsx("li", { style: { padding: "16px", textAlign: "center", color: "#71717a", fontSize: "0.8rem" }, children: "No matching currency" }) })
            ]
          }
        )
      ]
    }
  );
}, O = "datacore_currency_history", fn = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 155.2,
  CAD: 1.37,
  AUD: 1.51,
  CHF: 0.91,
  CNY: 7.23,
  INR: 83.4,
  BRL: 5.15,
  SGD: 1.35,
  HKD: 7.82,
  IDR: 16100,
  VND: 25450,
  THB: 36.7,
  MYR: 4.72
}, mn = ({ children: e }) => /* @__PURE__ */ a.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function bn() {
  const [e, n] = f.useState(fn), [r, o] = f.useState("USD"), [l, s] = f.useState("EUR"), [u, c] = f.useState("100"), [d, p] = f.useState(!1), [k, m] = f.useState(null), [h, x] = f.useState(!0), [g, C] = f.useState(!1), [N, T] = f.useState([]), fe = f.useRef(null);
  f.useEffect(() => {
    try {
      const t = localStorage.getItem(O);
      t && T(JSON.parse(t));
    } catch (t) {
      console.warn("Failed to load currency history", t);
    }
  }, []);
  const A = ((t) => {
    try {
      if (!t || !t.trim()) return 0;
      const b = t.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!b) return 0;
      const v = Function(`"use strict"; return (${b})`)();
      return typeof v == "number" && !isNaN(v) && isFinite(v) ? v : 0;
    } catch {
      return 0;
    }
  })(u), _ = (() => {
    const t = e[r] || 1, b = e[l] || 1;
    return A / t * b;
  })().toFixed(2), Y = async () => {
    C(!0);
    try {
      const t = await fetch(`https://api.exchangerate-api.com/v4/latest/${r}`);
      if (t.ok) {
        const b = await t.json();
        n(b.rates), m(/* @__PURE__ */ new Date()), x(!0);
        const v = {
          id: Date.now().toString(),
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          from: r,
          to: l,
          expr: u,
          result: _
        };
        T((B) => {
          const F = [v, ...B.slice(0, 19)];
          try {
            localStorage.setItem(O, JSON.stringify(F));
          } catch {
          }
          return F;
        });
      } else
        x(!1);
    } catch (t) {
      console.warn("Using offline cached rates:", t), x(!1);
    } finally {
      C(!1);
    }
  };
  f.useEffect(() => {
    Y();
  }, [r]);
  const me = () => {
    o(l), s(r);
  }, pe = () => {
    o(l), c(_);
  }, w = (t) => {
    c(t === "AC" ? "" : t === "DEL" ? (b) => b.length > 0 ? b.slice(0, -1) : "" : t === "=" ? A.toString() : (b) => b + t);
  }, ye = (t, b) => {
    const v = e[t] || 1, B = e[r] || 1, M = (b / v * B).toFixed(2);
    c((ge) => {
      const j = ge.trim();
      return !j || j === "0" ? M : ["+", "-", "*", "/", "×", "÷"].some((be) => j.endsWith(be)) ? `${j} ${M}` : `${j} + ${M}`;
    });
  }, V = Object.keys(e).sort();
  return /* @__PURE__ */ a.jsx(mn, { children: /* @__PURE__ */ a.jsx("div", { className: "currency-app", ref: fe, style: { position: "relative" }, children: /* @__PURE__ */ a.jsxs("div", { className: "glass-card", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "currency-header", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ a.jsx("div", { style: {
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(168, 85, 247, 0.3)"
        }, children: /* @__PURE__ */ a.jsx(cn, { size: 15, color: "#ffffff" }) }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx("h1", { className: "currency-title", children: "Currency Converter" }),
          /* @__PURE__ */ a.jsx("div", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "500" }, children: "Pro Financial Math Engine" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: h ? "#4ade80" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ a.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: h ? "#22c55e" : "#f59e0b",
          boxShadow: h ? "0 0 8px #22c55e" : "none"
        } }),
        /* @__PURE__ */ a.jsx("span", { children: h ? "Online" : "Offline" })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }, children: [
        /* @__PURE__ */ a.jsx("label", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "From Expression" }),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            onClick: () => p(!d),
            style: {
              fontSize: "0.7rem",
              fontWeight: "600",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              backgroundColor: d ? "rgba(168, 85, 247, 0.2)" : "rgba(255, 255, 255, 0.04)",
              color: d ? "#c084fc" : "#a1a1aa",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            },
            children: [
              /* @__PURE__ */ a.jsx(Je, { size: 13 }),
              d ? "Hide Keypad" : "Keypad"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "input-wrapper", style: { flexDirection: "column", gap: "8px", padding: "10px", backgroundColor: "#09090b", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", width: "100%" }, children: [
          /* @__PURE__ */ a.jsx(
            Q,
            {
              options: V,
              value: r,
              onChange: o
            }
          ),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: u,
              onChange: (t) => c(t.target.value),
              placeholder: "0.00"
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#71717a", padding: "0 4px", fontFamily: "'JetBrains Mono', monospace", width: "100%", boxSizing: "border-box" }, children: [
          /* @__PURE__ */ a.jsxs("span", { children: [
            "Evaluated = ",
            /* @__PURE__ */ a.jsxs("strong", { style: { color: "#e4e4e7" }, children: [
              A.toFixed(2),
              " ",
              r
            ] })
          ] }),
          u.match(/[+\-*/×÷]/) && /* @__PURE__ */ a.jsx("span", { style: { color: "#38bdf8", fontWeight: "700" }, children: "Math Active" })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ a.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      backgroundColor: "#121215",
      border: "1px solid #27272a",
      borderRadius: "12px",
      padding: "10px",
      margin: "4px 0"
    }, children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }, children: [
        ["AC", "(", ")", "DEL"].map((t) => /* @__PURE__ */ a.jsx("button", { onClick: () => w(t), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: "rgba(239, 68, 68, 0.15)", color: "#f87171", fontWeight: "700", fontSize: "0.75rem", cursor: "pointer" }, children: t }, t)),
        ["7", "8", "9", "÷"].map((t) => /* @__PURE__ */ a.jsx("button", { onClick: () => w(t === "÷" ? "/" : t), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["÷"].includes(t) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["÷"].includes(t) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: t }, t)),
        ["4", "5", "6", "×"].map((t) => /* @__PURE__ */ a.jsx("button", { onClick: () => w(t === "×" ? "*" : t), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["×"].includes(t) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["×"].includes(t) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: t }, t)),
        ["1", "2", "3", "-"].map((t) => /* @__PURE__ */ a.jsx("button", { onClick: () => w(t), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["-"].includes(t) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["-"].includes(t) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: t }, t)),
        ["0", ".", "=", "+"].map((t) => /* @__PURE__ */ a.jsx("button", { onClick: () => w(t), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: t === "=" ? "rgba(168, 85, 247, 0.3)" : t === "+" ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: t === "=" ? "#c084fc" : t === "+" ? "#38bdf8" : "#fafafa", fontWeight: "700", fontSize: "0.85rem", cursor: "pointer" }, children: t }, t))
      ] }),
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px", borderTop: "1px solid #1c1c21" }, children: [
        /* @__PURE__ */ a.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "600", textTransform: "uppercase" }, children: "Add Foreign Amount:" }),
        /* @__PURE__ */ a.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }, children: ["EUR", "USD", "JPY", "GBP", "CNY"].map((t) => /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            onClick: () => ye(t, 50),
            style: {
              padding: "3px 8px",
              borderRadius: "5px",
              backgroundColor: "rgba(34, 197, 94, 0.12)",
              color: "#4ade80",
              border: "1px solid rgba(34, 197, 94, 0.25)",
              fontSize: "0.7rem",
              fontWeight: "600",
              cursor: "pointer",
              whiteSpace: "nowrap"
            },
            children: [
              "+ 50 ",
              t
            ]
          },
          t
        )) })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "swap-btn",
        onClick: me,
        title: "Swap currencies",
        style: { alignSelf: "center", margin: "-2px 0" },
        children: /* @__PURE__ */ a.jsx(Ve, { size: 16 })
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ a.jsx("label", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "To Converted Result" }),
      /* @__PURE__ */ a.jsxs("div", { className: "input-wrapper", style: { padding: "4px 10px", backgroundColor: "#09090b", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ a.jsx(
          Q,
          {
            options: V,
            value: l,
            onChange: s
          }
        ),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: "currency-input",
            type: "text",
            value: _,
            readOnly: !0,
            style: { color: "#4ade80", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px", width: "100%" }, children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          onClick: pe,
          style: {
            flex: 1,
            minWidth: "120px",
            padding: "10px 12px",
            backgroundColor: "rgba(59, 130, 246, 0.15)",
            color: "#60a5fa",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "0.75rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          title: "Use converted output as new input for chained math",
          children: [
            /* @__PURE__ */ a.jsx(He, { size: 13 }),
            "Pipe Result (",
            _,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          type: "button",
          className: "sync-btn",
          onClick: Y,
          disabled: g,
          style: {
            flex: 1,
            minWidth: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            margin: 0
          },
          children: [
            /* @__PURE__ */ a.jsx(an, { size: 13, className: g ? "animate-spin" : "" }),
            g ? "Syncing..." : "Sync Rates"
          ]
        }
      )
    ] }),
    k && /* @__PURE__ */ a.jsxs("div", { className: "last-updated", children: [
      "Last synced: ",
      k.toLocaleTimeString()
    ] }),
    N.length > 0 && /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "12px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ a.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ a.jsx(rn, { size: 13 }),
          "Conversion History"
        ] }),
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              T([]), localStorage.removeItem(O);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ a.jsx(dn, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: N.map((t) => /* @__PURE__ */ a.jsxs(
        "div",
        {
          onClick: () => {
            o(t.to), c(t.result);
          },
          style: {
            backgroundColor: "#09090b",
            border: "1px solid #1c1c21",
            borderRadius: "6px",
            padding: "6px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.7rem",
            fontFamily: "'JetBrains Mono', monospace",
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ a.jsxs("div", { style: { color: "#a1a1aa" }, children: [
              /* @__PURE__ */ a.jsxs("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: [
                t.expr,
                " ",
                t.from
              ] }),
              " → ",
              /* @__PURE__ */ a.jsxs("span", { style: { color: "#4ade80", fontWeight: "700" }, children: [
                t.result,
                " ",
                t.to
              ] })
            ] }),
            /* @__PURE__ */ a.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: t.time })
          ]
        },
        t.id
      )) })
    ] })
  ] }) }) });
}
export {
  mn as SafeAgentLayer,
  bn as default
};
