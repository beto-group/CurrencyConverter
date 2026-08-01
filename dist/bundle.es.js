(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;height:100%;min-height:100%;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:12px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.studio-card{background:#121215;border:1px solid #27272a;border-radius:20px;padding:16px;width:100%;max-width:100%;box-shadow:0 20px 40px #0009;display:flex;flex-direction:column;gap:14px;position:relative;box-sizing:border-box;margin:0 auto;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:24px}.studio-card{max-width:500px;padding:24px;gap:18px}}.studio-header{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box}.tab-switcher{display:flex;background:#09090b;padding:3px;border-radius:12px;border:1px solid #27272a;width:100%;gap:4px}.tab-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 12px;border:none;border-radius:9px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s ease;color:#71717a;background:transparent}.tab-btn.active{background:#27272a;color:#fff;box-shadow:0 2px 8px #0006}.calc-screen{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;box-shadow:inset 0 2px 6px #000c;width:100%;box-sizing:border-box}.calc-expr{font-size:clamp(.85rem,3.5vw,1.05rem);color:#a1a1aa;font-family:JetBrains Mono,monospace;word-break:break-all;min-height:24px;width:100%;text-align:right}.calc-result{font-size:clamp(1.4rem,6vw,2.2rem);font-weight:800;color:#4ade80;font-family:JetBrains Mono,monospace;overflow-x:auto;white-space:nowrap;line-height:1.1;width:100%;text-align:right;scrollbar-width:none}.calc-result::-webkit-scrollbar{display:none}.calc-keypad{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%;box-sizing:border-box}.key-btn{padding:14px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.05);background:#18181b;color:#fafafa;font-size:clamp(1rem,4vw,1.25rem);font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;-webkit-user-select:none;user-select:none;box-shadow:0 2px 6px #0000004d}.key-btn:active{transform:scale(.95);background:#27272a}.key-btn.op{background:#a855f726;color:#c084fc;border-color:#a855f74d;font-weight:800}.key-btn.op:active{background:#a855f759}.key-btn.action{background:#ef444426;color:#f87171;font-size:.85rem;font-weight:700}.key-btn.equal{background:linear-gradient(135deg,#a855f7,#7e22ce);color:#fff;font-weight:800;box-shadow:0 4px 14px #a855f766}.pair-box{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:8px;width:100%;box-sizing:border-box}.swap-circle{background:#18181b;border:1px solid #27272a;color:#a1a1aa;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-6px 0;z-index:2;box-shadow:0 4px 12px #00000080}.swap-circle:hover{background:#27272a;color:#fff;transform:rotate(180deg)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var ra = { exports: {} }, cl = {}, la = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = Symbol.for("react.element"), vc = Symbol.for("react.portal"), Sc = Symbol.for("react.fragment"), kc = Symbol.for("react.strict_mode"), wc = Symbol.for("react.profiler"), xc = Symbol.for("react.provider"), Cc = Symbol.for("react.context"), Ec = Symbol.for("react.forward_ref"), Nc = Symbol.for("react.suspense"), _c = Symbol.for("react.memo"), Pc = Symbol.for("react.lazy"), Qi = Symbol.iterator;
function zc(e) {
  return e === null || typeof e != "object" ? null : (e = Qi && e[Qi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ia = Object.assign, ua = {};
function ht(e, n, t) {
  this.props = e, this.context = n, this.refs = ua, this.updater = t || oa;
}
ht.prototype.isReactComponent = {};
ht.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
ht.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function aa() {
}
aa.prototype = ht.prototype;
function Jo(e, n, t) {
  this.props = e, this.context = n, this.refs = ua, this.updater = t || oa;
}
var qo = Jo.prototype = new aa();
qo.constructor = Jo;
ia(qo, ht.prototype);
qo.isPureReactComponent = !0;
var Gi = Array.isArray, sa = Object.prototype.hasOwnProperty, bo = { current: null }, ca = { key: !0, ref: !0, __self: !0, __source: !0 };
function fa(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) sa.call(n, r) && !ca.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: lr, type: e, key: o, ref: i, props: l, _owner: bo.current };
}
function Rc(e, n) {
  return { $$typeof: lr, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function ei(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function jc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Yi = /\/+/g;
function Pl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? jc("" + e.key) : n.toString(36);
}
function zr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case lr:
        case vc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Pl(i, 0) : r, Gi(l) ? (t = "", e != null && (t = e.replace(Yi, "$&/") + "/"), zr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (ei(l) && (l = Rc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Yi, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Gi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Pl(o, u);
    i += zr(o, n, t, a, l);
  }
  else if (a = zc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Pl(o, u++), i += zr(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function fr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return zr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Tc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null }, Rr = { transition: null }, Dc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Rr, ReactCurrentOwner: bo };
function da() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: fr, forEach: function(e, n, t) {
  fr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return fr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return fr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!ei(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = ht;
M.Fragment = Sc;
M.Profiler = wc;
M.PureComponent = Jo;
M.StrictMode = kc;
M.Suspense = Nc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dc;
M.act = da;
M.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ia({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = bo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) sa.call(n, a) && !ca.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
M.createContext = function(e) {
  return e = { $$typeof: Cc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: xc, _context: e }, e.Consumer = e;
};
M.createElement = fa;
M.createFactory = function(e) {
  var n = fa.bind(null, e);
  return n.type = e, n;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: Ec, render: e };
};
M.isValidElement = ei;
M.lazy = function(e) {
  return { $$typeof: Pc, _payload: { _status: -1, _result: e }, _init: Tc };
};
M.memo = function(e, n) {
  return { $$typeof: _c, type: e, compare: n === void 0 ? null : n };
};
M.startTransition = function(e) {
  var n = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = n;
  }
};
M.unstable_act = da;
M.useCallback = function(e, n) {
  return ce.current.useCallback(e, n);
};
M.useContext = function(e) {
  return ce.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
M.useEffect = function(e, n) {
  return ce.current.useEffect(e, n);
};
M.useId = function() {
  return ce.current.useId();
};
M.useImperativeHandle = function(e, n, t) {
  return ce.current.useImperativeHandle(e, n, t);
};
M.useInsertionEffect = function(e, n) {
  return ce.current.useInsertionEffect(e, n);
};
M.useLayoutEffect = function(e, n) {
  return ce.current.useLayoutEffect(e, n);
};
M.useMemo = function(e, n) {
  return ce.current.useMemo(e, n);
};
M.useReducer = function(e, n, t) {
  return ce.current.useReducer(e, n, t);
};
M.useRef = function(e) {
  return ce.current.useRef(e);
};
M.useState = function(e) {
  return ce.current.useState(e);
};
M.useSyncExternalStore = function(e, n, t) {
  return ce.current.useSyncExternalStore(e, n, t);
};
M.useTransition = function() {
  return ce.current.useTransition();
};
M.version = "18.3.1";
la.exports = M;
var F = la.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = F, Mc = Symbol.for("react.element"), Fc = Symbol.for("react.fragment"), Ic = Object.prototype.hasOwnProperty, Oc = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $c = { key: !0, ref: !0, __self: !0, __source: !0 };
function pa(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Ic.call(n, r) && !$c.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Mc, type: e, key: o, ref: i, props: l, _owner: Oc.current };
}
cl.Fragment = Fc;
cl.jsx = pa;
cl.jsxs = pa;
ra.exports = cl;
var m = ra.exports, ro = {}, ma = { exports: {} }, xe = {}, ya = { exports: {} }, ha = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(E, R) {
    var j = E.length;
    E.push(R);
    e: for (; 0 < j; ) {
      var W = j - 1 >>> 1, D = E[W];
      if (0 < l(D, R)) E[W] = R, E[j] = D, j = W;
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var R = E[0], j = E.pop();
    if (j !== R) {
      E[0] = j;
      e: for (var W = 0, D = E.length, Nn = D >>> 1; W < Nn; ) {
        var Ke = 2 * (W + 1) - 1, rn = E[Ke], z = Ke + 1, V = E[z];
        if (0 > l(rn, j)) z < D && 0 > l(V, rn) ? (E[W] = V, E[z] = j, W = z) : (E[W] = rn, E[Ke] = j, W = Ke);
        else if (z < D && 0 > l(V, j)) E[W] = V, E[z] = j, W = z;
        else break e;
      }
    }
    return R;
  }
  function l(E, R) {
    var j = E.sortIndex - R.sortIndex;
    return j !== 0 ? j : E.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var a = [], c = [], h = 1, y = null, p = 3, g = !1, k = !1, w = !1, L = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var R = t(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= E) r(c), R.sortIndex = R.expirationTime, n(a, R);
      else break;
      R = t(c);
    }
  }
  function v(E) {
    if (w = !1, d(E), !k) if (t(a) !== null) k = !0, cr(x);
    else {
      var R = t(c);
      R !== null && Bn(v, R.startTime - E);
    }
  }
  function x(E, R) {
    k = !1, w && (w = !1, f(P), P = -1), g = !0;
    var j = p;
    try {
      for (d(R), y = t(a); y !== null && (!(y.expirationTime > R) || E && !de()); ) {
        var W = y.callback;
        if (typeof W == "function") {
          y.callback = null, p = y.priorityLevel;
          var D = W(y.expirationTime <= R);
          R = e.unstable_now(), typeof D == "function" ? y.callback = D : y === t(a) && r(a), d(R);
        } else r(a);
        y = t(a);
      }
      if (y !== null) var Nn = !0;
      else {
        var Ke = t(c);
        Ke !== null && Bn(v, Ke.startTime - R), Nn = !1;
      }
      return Nn;
    } finally {
      y = null, p = j, g = !1;
    }
  }
  var _ = !1, N = null, P = -1, U = 5, T = -1;
  function de() {
    return !(e.unstable_now() - T < U);
  }
  function tn() {
    if (N !== null) {
      var E = e.unstable_now();
      T = E;
      var R = !0;
      try {
        R = N(!0, E);
      } finally {
        R ? He() : (_ = !1, N = null);
      }
    } else _ = !1;
  }
  var He;
  if (typeof s == "function") He = function() {
    s(tn);
  };
  else if (typeof MessageChannel < "u") {
    var sr = new MessageChannel(), Ki = sr.port2;
    sr.port1.onmessage = tn, He = function() {
      Ki.postMessage(null);
    };
  } else He = function() {
    L(tn, 0);
  };
  function cr(E) {
    N = E, _ || (_ = !0, He());
  }
  function Bn(E, R) {
    P = L(function() {
      E(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    k || g || (k = !0, cr(x));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = p;
    }
    var j = p;
    p = R;
    try {
      return E();
    } finally {
      p = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, R) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var j = p;
    p = E;
    try {
      return R();
    } finally {
      p = j;
    }
  }, e.unstable_scheduleCallback = function(E, R, j) {
    var W = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? W + j : W) : j = W, E) {
      case 1:
        var D = -1;
        break;
      case 2:
        D = 250;
        break;
      case 5:
        D = 1073741823;
        break;
      case 4:
        D = 1e4;
        break;
      default:
        D = 5e3;
    }
    return D = j + D, E = { id: h++, callback: R, priorityLevel: E, startTime: j, expirationTime: D, sortIndex: -1 }, j > W ? (E.sortIndex = j, n(c, E), t(a) === null && E === t(c) && (w ? (f(P), P = -1) : w = !0, Bn(v, j - W))) : (E.sortIndex = D, n(a, E), k || g || (k = !0, cr(x))), E;
  }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function(E) {
    var R = p;
    return function() {
      var j = p;
      p = R;
      try {
        return E.apply(this, arguments);
      } finally {
        p = j;
      }
    };
  };
})(ha);
ya.exports = ha;
var Uc = ya.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ac = F, we = Uc;
function S(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ga = /* @__PURE__ */ new Set(), Bt = {};
function Un(e, n) {
  st(e, n), st(e + "Capture", n);
}
function st(e, n) {
  for (Bt[e] = n, e = 0; e < n.length; e++) ga.add(n[e]);
}
var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lo = Object.prototype.hasOwnProperty, Bc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zi = {}, Xi = {};
function Wc(e) {
  return lo.call(Xi, e) ? !0 : lo.call(Zi, e) ? !1 : Bc.test(e) ? Xi[e] = !0 : (Zi[e] = !0, !1);
}
function Vc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hc(e, n, t, r) {
  if (n === null || typeof n > "u" || Vc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !n;
    case 4:
      return n === !1;
    case 5:
      return isNaN(n);
    case 6:
      return isNaN(n) || 1 > n;
  }
  return !1;
}
function fe(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new fe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  re[n] = new fe(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ni = /[\-:]([a-z])/g;
function ti(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    ni,
    ti
  );
  re[n] = new fe(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(ni, ti);
  re[n] = new fe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(ni, ti);
  re[n] = new fe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ri(e, n, t, r) {
  var l = re.hasOwnProperty(n) ? re[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Hc(n, t, l, r) && (t = null), r || l === null ? Wc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var nn = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dr = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Qn = Symbol.for("react.fragment"), li = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), va = Symbol.for("react.provider"), Sa = Symbol.for("react.context"), oi = Symbol.for("react.forward_ref"), io = Symbol.for("react.suspense"), uo = Symbol.for("react.suspense_list"), ii = Symbol.for("react.memo"), on = Symbol.for("react.lazy"), ka = Symbol.for("react.offscreen"), Ji = Symbol.iterator;
function kt(e) {
  return e === null || typeof e != "object" ? null : (e = Ji && e[Ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, zl;
function zt(e) {
  if (zl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    zl = n && n[1] || "";
  }
  return `
` + zl + e;
}
var Rl = !1;
function jl(e, n) {
  if (!e || Rl) return "";
  Rl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n) if (n = function() {
      throw Error();
    }, Object.defineProperty(n.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(n, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], n);
    } else {
      try {
        n.call();
      } catch (c) {
        r = c;
      }
      e.call(n.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var a = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Rl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? zt(e) : "";
}
function Kc(e) {
  switch (e.tag) {
    case 5:
      return zt(e.type);
    case 16:
      return zt("Lazy");
    case 13:
      return zt("Suspense");
    case 19:
      return zt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = jl(e.type, !1), e;
    case 11:
      return e = jl(e.type.render, !1), e;
    case 1:
      return e = jl(e.type, !0), e;
    default:
      return "";
  }
}
function ao(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qn:
      return "Fragment";
    case Kn:
      return "Portal";
    case oo:
      return "Profiler";
    case li:
      return "StrictMode";
    case io:
      return "Suspense";
    case uo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Sa:
      return (e.displayName || "Context") + ".Consumer";
    case va:
      return (e._context.displayName || "Context") + ".Provider";
    case oi:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ii:
      return n = e.displayName || null, n !== null ? n : ao(e.type) || "Memo";
    case on:
      n = e._payload, e = e._init;
      try {
        return ao(e(n));
      } catch {
      }
  }
  return null;
}
function Qc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ao(n);
    case 8:
      return n === li ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function kn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function wa(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Gc(e) {
  var n = wa(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function pr(e) {
  e._valueTracker || (e._valueTracker = Gc(e));
}
function xa(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = wa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Ar(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function so(e, n) {
  var t = n.checked;
  return G({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function qi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = kn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function Ca(e, n) {
  n = n.checked, n != null && ri(e, "checked", n, !1);
}
function co(e, n) {
  Ca(e, n);
  var t = kn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? fo(e, n.type, t) : n.hasOwnProperty("defaultValue") && fo(e, n.type, kn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function bi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function fo(e, n, t) {
  (n !== "number" || Ar(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Rt = Array.isArray;
function rt(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + kn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function po(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(S(91));
  return G({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function eu(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(S(92));
      if (Rt(t)) {
        if (1 < t.length) throw Error(S(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: kn(t) };
}
function Ea(e, n) {
  var t = kn(n.value), r = kn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function nu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Na(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mo(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Na(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mr, _a = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (mr = mr || document.createElement("div"), mr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = mr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Wt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Dt = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Yc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dt).forEach(function(e) {
  Yc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Dt[n] = Dt[e];
  });
});
function Pa(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + n).trim() : n + "px";
}
function za(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = Pa(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var Zc = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yo(e, n) {
  if (n) {
    if (Zc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(S(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(S(62));
  }
}
function ho(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var go = null;
function ui(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var vo = null, lt = null, ot = null;
function tu(e) {
  if (e = ur(e)) {
    if (typeof vo != "function") throw Error(S(280));
    var n = e.stateNode;
    n && (n = yl(n), vo(e.stateNode, e.type, n));
  }
}
function Ra(e) {
  lt ? ot ? ot.push(e) : ot = [e] : lt = e;
}
function ja() {
  if (lt) {
    var e = lt, n = ot;
    if (ot = lt = null, tu(e), n) for (e = 0; e < n.length; e++) tu(n[e]);
  }
}
function Ta(e, n) {
  return e(n);
}
function Da() {
}
var Tl = !1;
function La(e, n, t) {
  if (Tl) return e(n, t);
  Tl = !0;
  try {
    return Ta(e, n, t);
  } finally {
    Tl = !1, (lt !== null || ot !== null) && (Da(), ja());
  }
}
function Vt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = yl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(S(231, n, typeof t));
  return t;
}
var So = !1;
if (Je) try {
  var wt = {};
  Object.defineProperty(wt, "passive", { get: function() {
    So = !0;
  } }), window.addEventListener("test", wt, wt), window.removeEventListener("test", wt, wt);
} catch {
  So = !1;
}
function Xc(e, n, t, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var Lt = !1, Br = null, Wr = !1, ko = null, Jc = { onError: function(e) {
  Lt = !0, Br = e;
} };
function qc(e, n, t, r, l, o, i, u, a) {
  Lt = !1, Br = null, Xc.apply(Jc, arguments);
}
function bc(e, n, t, r, l, o, i, u, a) {
  if (qc.apply(this, arguments), Lt) {
    if (Lt) {
      var c = Br;
      Lt = !1, Br = null;
    } else throw Error(S(198));
    Wr || (Wr = !0, ko = c);
  }
}
function An(e) {
  var n = e, t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Ma(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function ru(e) {
  if (An(e) !== e) throw Error(S(188));
}
function ef(e) {
  var n = e.alternate;
  if (!n) {
    if (n = An(e), n === null) throw Error(S(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return ru(l), e;
        if (o === r) return ru(l), n;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (t.return !== r.return) t = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          i = !0, t = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, t = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            i = !0, t = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (t.alternate !== r) throw Error(S(190));
  }
  if (t.tag !== 3) throw Error(S(188));
  return t.stateNode.current === t ? e : n;
}
function Fa(e) {
  return e = ef(e), e !== null ? Ia(e) : null;
}
function Ia(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ia(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Oa = we.unstable_scheduleCallback, lu = we.unstable_cancelCallback, nf = we.unstable_shouldYield, tf = we.unstable_requestPaint, Z = we.unstable_now, rf = we.unstable_getCurrentPriorityLevel, ai = we.unstable_ImmediatePriority, $a = we.unstable_UserBlockingPriority, Vr = we.unstable_NormalPriority, lf = we.unstable_LowPriority, Ua = we.unstable_IdlePriority, fl = null, We = null;
function of(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : sf, uf = Math.log, af = Math.LN2;
function sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (uf(e) / af | 0) | 0;
}
var yr = 64, hr = 4194304;
function jt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = jt(u) : (o &= i, o !== 0 && (r = jt(o)));
  } else i = t & ~l, i !== 0 ? r = jt(i) : o !== 0 && (r = jt(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Fe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function cf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ff(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Fe(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = cf(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function wo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Aa() {
  var e = yr;
  return yr <<= 1, !(yr & 4194240) && (yr = 64), e;
}
function Dl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function or(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Fe(n), e[n] = t;
}
function df(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Fe(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function si(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Fe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var O = 0;
function Ba(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Wa, ci, Va, Ha, Ka, xo = !1, gr = [], dn = null, pn = null, mn = null, Ht = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), an = [], pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ou(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      dn = null;
      break;
    case "dragenter":
    case "dragleave":
      pn = null;
      break;
    case "mouseover":
    case "mouseout":
      mn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ht.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kt.delete(n.pointerId);
  }
}
function xt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = ur(n), n !== null && ci(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function mf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return dn = xt(dn, e, n, t, r, l), !0;
    case "dragenter":
      return pn = xt(pn, e, n, t, r, l), !0;
    case "mouseover":
      return mn = xt(mn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Ht.set(o, xt(Ht.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Kt.set(o, xt(Kt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Qa(e) {
  var n = Rn(e.target);
  if (n !== null) {
    var t = An(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Ma(t), n !== null) {
          e.blockedOn = n, Ka(e.priority, function() {
            Va(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = Co(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      go = r, t.target.dispatchEvent(r), go = null;
    } else return n = ur(t), n !== null && ci(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function iu(e, n, t) {
  jr(e) && t.delete(n);
}
function yf() {
  xo = !1, dn !== null && jr(dn) && (dn = null), pn !== null && jr(pn) && (pn = null), mn !== null && jr(mn) && (mn = null), Ht.forEach(iu), Kt.forEach(iu);
}
function Ct(e, n) {
  e.blockedOn === n && (e.blockedOn = null, xo || (xo = !0, we.unstable_scheduleCallback(we.unstable_NormalPriority, yf)));
}
function Qt(e) {
  function n(l) {
    return Ct(l, e);
  }
  if (0 < gr.length) {
    Ct(gr[0], e);
    for (var t = 1; t < gr.length; t++) {
      var r = gr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (dn !== null && Ct(dn, e), pn !== null && Ct(pn, e), mn !== null && Ct(mn, e), Ht.forEach(n), Kt.forEach(n), t = 0; t < an.length; t++) r = an[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < an.length && (t = an[0], t.blockedOn === null); ) Qa(t), t.blockedOn === null && an.shift();
}
var it = nn.ReactCurrentBatchConfig, Kr = !0;
function hf(e, n, t, r) {
  var l = O, o = it.transition;
  it.transition = null;
  try {
    O = 1, fi(e, n, t, r);
  } finally {
    O = l, it.transition = o;
  }
}
function gf(e, n, t, r) {
  var l = O, o = it.transition;
  it.transition = null;
  try {
    O = 4, fi(e, n, t, r);
  } finally {
    O = l, it.transition = o;
  }
}
function fi(e, n, t, r) {
  if (Kr) {
    var l = Co(e, n, t, r);
    if (l === null) Wl(e, n, r, Qr, t), ou(e, r);
    else if (mf(l, e, n, t, r)) r.stopPropagation();
    else if (ou(e, r), n & 4 && -1 < pf.indexOf(e)) {
      for (; l !== null; ) {
        var o = ur(l);
        if (o !== null && Wa(o), o = Co(e, n, t, r), o === null && Wl(e, n, r, Qr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, n, r, null, t);
  }
}
var Qr = null;
function Co(e, n, t, r) {
  if (Qr = null, e = ui(r), e = Rn(e), e !== null) if (n = An(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Ma(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Qr = e, null;
}
function Ga(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (rf()) {
        case ai:
          return 1;
        case $a:
          return 4;
        case Vr:
        case lf:
          return 16;
        case Ua:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null, di = null, Tr = null;
function Ya() {
  if (Tr) return Tr;
  var e, n = di, t = n.length, r, l = "value" in cn ? cn.value : cn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Tr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Dr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vr() {
  return !0;
}
function uu() {
  return !1;
}
function Ce(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? vr : uu, this.isPropagationStopped = uu, this;
  }
  return G(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = vr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = vr);
  }, persist: function() {
  }, isPersistent: vr }), n;
}
var gt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, pi = Ce(gt), ir = G({}, gt, { view: 0, detail: 0 }), vf = Ce(ir), Ll, Ml, Et, dl = G({}, ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Et && (Et && e.type === "mousemove" ? (Ll = e.screenX - Et.screenX, Ml = e.screenY - Et.screenY) : Ml = Ll = 0, Et = e), Ll);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ml;
} }), au = Ce(dl), Sf = G({}, dl, { dataTransfer: 0 }), kf = Ce(Sf), wf = G({}, ir, { relatedTarget: 0 }), Fl = Ce(wf), xf = G({}, gt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cf = Ce(xf), Ef = G({}, gt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Nf = Ce(Ef), _f = G({}, gt, { data: 0 }), su = Ce(_f), Pf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, zf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Rf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Rf[e]) ? !!n[e] : !1;
}
function mi() {
  return jf;
}
var Tf = G({}, ir, { key: function(e) {
  if (e.key) {
    var n = Pf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mi, charCode: function(e) {
  return e.type === "keypress" ? Dr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Df = Ce(Tf), Lf = G({}, dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cu = Ce(Lf), Mf = G({}, ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mi }), Ff = Ce(Mf), If = G({}, gt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Of = Ce(If), $f = G({}, dl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uf = Ce($f), Af = [9, 13, 27, 32], yi = Je && "CompositionEvent" in window, Mt = null;
Je && "documentMode" in document && (Mt = document.documentMode);
var Bf = Je && "TextEvent" in window && !Mt, Za = Je && (!yi || Mt && 8 < Mt && 11 >= Mt), fu = " ", du = !1;
function Xa(e, n) {
  switch (e) {
    case "keyup":
      return Af.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ja(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Wf(e, n) {
  switch (e) {
    case "compositionend":
      return Ja(n);
    case "keypress":
      return n.which !== 32 ? null : (du = !0, fu);
    case "textInput":
      return e = n.data, e === fu && du ? null : e;
    default:
      return null;
  }
}
function Vf(e, n) {
  if (Gn) return e === "compositionend" || !yi && Xa(e, n) ? (e = Ya(), Tr = di = cn = null, Gn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Za && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Hf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Hf[e.type] : n === "textarea";
}
function qa(e, n, t, r) {
  Ra(r), n = Gr(n, "onChange"), 0 < n.length && (t = new pi("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Ft = null, Gt = null;
function Kf(e) {
  ss(e, 0);
}
function pl(e) {
  var n = Xn(e);
  if (xa(n)) return e;
}
function Qf(e, n) {
  if (e === "change") return n;
}
var ba = !1;
if (Je) {
  var Il;
  if (Je) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var mu = document.createElement("div");
      mu.setAttribute("oninput", "return;"), Ol = typeof mu.oninput == "function";
    }
    Il = Ol;
  } else Il = !1;
  ba = Il && (!document.documentMode || 9 < document.documentMode);
}
function yu() {
  Ft && (Ft.detachEvent("onpropertychange", es), Gt = Ft = null);
}
function es(e) {
  if (e.propertyName === "value" && pl(Gt)) {
    var n = [];
    qa(n, Gt, e, ui(e)), La(Kf, n);
  }
}
function Gf(e, n, t) {
  e === "focusin" ? (yu(), Ft = n, Gt = t, Ft.attachEvent("onpropertychange", es)) : e === "focusout" && yu();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return pl(Gt);
}
function Zf(e, n) {
  if (e === "click") return pl(n);
}
function Xf(e, n) {
  if (e === "input" || e === "change") return pl(n);
}
function Jf(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Oe = typeof Object.is == "function" ? Object.is : Jf;
function Yt(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!lo.call(n, l) || !Oe(e[l], n[l])) return !1;
  }
  return !0;
}
function hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gu(e, n) {
  var t = hu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = hu(t);
  }
}
function ns(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ns(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function ts() {
  for (var e = window, n = Ar(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ar(e.document);
  }
  return n;
}
function hi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function qf(e) {
  var n = ts(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && ns(t.ownerDocument.documentElement, t)) {
    if (r !== null && hi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = gu(t, o);
        var i = gu(
          t,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var bf = Je && "documentMode" in document && 11 >= document.documentMode, Yn = null, Eo = null, It = null, No = !1;
function vu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  No || Yn == null || Yn !== Ar(r) || (r = Yn, "selectionStart" in r && hi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), It && Yt(It, r) || (It = r, r = Gr(Eo, "onSelect"), 0 < r.length && (n = new pi("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Yn)));
}
function Sr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Zn = { animationend: Sr("Animation", "AnimationEnd"), animationiteration: Sr("Animation", "AnimationIteration"), animationstart: Sr("Animation", "AnimationStart"), transitionend: Sr("Transition", "TransitionEnd") }, $l = {}, rs = {};
Je && (rs = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
function ml(e) {
  if ($l[e]) return $l[e];
  if (!Zn[e]) return e;
  var n = Zn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in rs) return $l[e] = n[t];
  return e;
}
var ls = ml("animationend"), os = ml("animationiteration"), is = ml("animationstart"), us = ml("transitionend"), as = /* @__PURE__ */ new Map(), Su = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xn(e, n) {
  as.set(e, n), Un(n, [e]);
}
for (var Ul = 0; Ul < Su.length; Ul++) {
  var Al = Su[Ul], ed = Al.toLowerCase(), nd = Al[0].toUpperCase() + Al.slice(1);
  xn(ed, "on" + nd);
}
xn(ls, "onAnimationEnd");
xn(os, "onAnimationIteration");
xn(is, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(us, "onTransitionEnd");
st("onMouseEnter", ["mouseout", "mouseover"]);
st("onMouseLeave", ["mouseout", "mouseover"]);
st("onPointerEnter", ["pointerout", "pointerover"]);
st("onPointerLeave", ["pointerout", "pointerover"]);
Un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), td = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tt));
function ku(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, bc(r, n, void 0, e), e.currentTarget = null;
}
function ss(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        ku(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        ku(l, u, c), o = a;
      }
    }
  }
  if (Wr) throw e = ko, Wr = !1, ko = null, e;
}
function A(e, n) {
  var t = n[jo];
  t === void 0 && (t = n[jo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (cs(n, e, 2, !1), t.add(r));
}
function Bl(e, n, t) {
  var r = 0;
  n && (r |= 4), cs(t, e, r, n);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Zt(e) {
  if (!e[kr]) {
    e[kr] = !0, ga.forEach(function(t) {
      t !== "selectionchange" && (td.has(t) || Bl(t, !1, e), Bl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[kr] || (n[kr] = !0, Bl("selectionchange", !1, n));
  }
}
function cs(e, n, t, r) {
  switch (Ga(n)) {
    case 1:
      var l = hf;
      break;
    case 4:
      l = gf;
      break;
    default:
      l = fi;
  }
  t = l.bind(null, n, t, e), l = void 0, !So || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Wl(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var a = i.tag;
        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Rn(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  La(function() {
    var c = o, h = ui(t), y = [];
    e: {
      var p = as.get(e);
      if (p !== void 0) {
        var g = pi, k = e;
        switch (e) {
          case "keypress":
            if (Dr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Df;
            break;
          case "focusin":
            k = "focus", g = Fl;
            break;
          case "focusout":
            k = "blur", g = Fl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Fl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = au;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = kf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ff;
            break;
          case ls:
          case os:
          case is:
            g = Cf;
            break;
          case us:
            g = Of;
            break;
          case "scroll":
            g = vf;
            break;
          case "wheel":
            g = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Nf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = cu;
        }
        var w = (n & 4) !== 0, L = !w && e === "scroll", f = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Vt(s, f), v != null && w.push(Xt(s, v, d)))), L) break;
          s = s.return;
        }
        0 < w.length && (p = new g(p, k, null, t, h), y.push({ event: p, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== go && (k = t.relatedTarget || t.fromElement) && (Rn(k) || k[qe])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (k = t.relatedTarget || t.toElement, g = c, k = k ? Rn(k) : null, k !== null && (L = An(k), k !== L || k.tag !== 5 && k.tag !== 6) && (k = null)) : (g = null, k = c), g !== k)) {
          if (w = au, v = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = cu, v = "onPointerLeave", f = "onPointerEnter", s = "pointer"), L = g == null ? p : Xn(g), d = k == null ? p : Xn(k), p = new w(v, s + "leave", g, t, h), p.target = L, p.relatedTarget = d, v = null, Rn(h) === c && (w = new w(f, s + "enter", k, t, h), w.target = d, w.relatedTarget = L, v = w), L = v, g && k) n: {
            for (w = g, f = k, s = 0, d = w; d; d = Hn(d)) s++;
            for (d = 0, v = f; v; v = Hn(v)) d++;
            for (; 0 < s - d; ) w = Hn(w), s--;
            for (; 0 < d - s; ) f = Hn(f), d--;
            for (; s--; ) {
              if (w === f || f !== null && w === f.alternate) break n;
              w = Hn(w), f = Hn(f);
            }
            w = null;
          }
          else w = null;
          g !== null && wu(y, p, g, w, !1), k !== null && L !== null && wu(y, L, k, w, !0);
        }
      }
      e: {
        if (p = c ? Xn(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var x = Qf;
        else if (pu(p)) if (ba) x = Xf;
        else {
          x = Yf;
          var _ = Gf;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = Zf);
        if (x && (x = x(e, c))) {
          qa(y, x, t, h);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && fo(p, "number", p.value);
      }
      switch (_ = c ? Xn(c) : window, e) {
        case "focusin":
          (pu(_) || _.contentEditable === "true") && (Yn = _, Eo = c, It = null);
          break;
        case "focusout":
          It = Eo = Yn = null;
          break;
        case "mousedown":
          No = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          No = !1, vu(y, t, h);
          break;
        case "selectionchange":
          if (bf) break;
        case "keydown":
        case "keyup":
          vu(y, t, h);
      }
      var N;
      if (yi) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Gn ? Xa(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (Za && t.locale !== "ko" && (Gn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Gn && (N = Ya()) : (cn = h, di = "value" in cn ? cn.value : cn.textContent, Gn = !0)), _ = Gr(c, P), 0 < _.length && (P = new su(P, e, null, t, h), y.push({ event: P, listeners: _ }), N ? P.data = N : (N = Ja(t), N !== null && (P.data = N)))), (N = Bf ? Wf(e, t) : Vf(e, t)) && (c = Gr(c, "onBeforeInput"), 0 < c.length && (h = new su("onBeforeInput", "beforeinput", null, t, h), y.push({ event: h, listeners: c }), h.data = N));
    }
    ss(y, n);
  });
}
function Xt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Gr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Vt(e, t), o != null && r.unshift(Xt(e, o, l)), o = Vt(e, n), o != null && r.push(Xt(e, o, l))), e = e.return;
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Vt(t, o), a != null && i.unshift(Xt(t, a, u))) : l || (a = Vt(t, o), a != null && i.push(Xt(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var rd = /\r\n?/g, ld = /\u0000|\uFFFD/g;
function xu(e) {
  return (typeof e == "string" ? e : "" + e).replace(rd, `
`).replace(ld, "");
}
function wr(e, n, t) {
  if (n = xu(n), xu(e) !== n && t) throw Error(S(425));
}
function Yr() {
}
var _o = null, Po = null;
function zo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Ro = typeof setTimeout == "function" ? setTimeout : void 0, od = typeof clearTimeout == "function" ? clearTimeout : void 0, Cu = typeof Promise == "function" ? Promise : void 0, id = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cu < "u" ? function(e) {
  return Cu.resolve(null).then(e).catch(ud);
} : Ro;
function ud(e) {
  setTimeout(function() {
    throw e;
  });
}
function Vl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), Qt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Qt(n);
}
function yn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function Eu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vt = Math.random().toString(36).slice(2), Be = "__reactFiber$" + vt, Jt = "__reactProps$" + vt, qe = "__reactContainer$" + vt, jo = "__reactEvents$" + vt, ad = "__reactListeners$" + vt, sd = "__reactHandles$" + vt;
function Rn(e) {
  var n = e[Be];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[qe] || t[Be]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Eu(e); e !== null; ) {
        if (t = e[Be]) return t;
        e = Eu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function ur(e) {
  return e = e[Be] || e[qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function yl(e) {
  return e[Jt] || null;
}
var To = [], Jn = -1;
function Cn(e) {
  return { current: e };
}
function B(e) {
  0 > Jn || (e.current = To[Jn], To[Jn] = null, Jn--);
}
function $(e, n) {
  Jn++, To[Jn] = e.current, e.current = n;
}
var wn = {}, ue = Cn(wn), ye = Cn(!1), Mn = wn;
function ct(e, n) {
  var t = e.type.contextTypes;
  if (!t) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Zr() {
  B(ye), B(ue);
}
function Nu(e, n, t) {
  if (ue.current !== wn) throw Error(S(168));
  $(ue, n), $(ye, t);
}
function fs(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(S(108, Qc(e) || "Unknown", l));
  return G({}, t, r);
}
function Xr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, Mn = ue.current, $(ue, e), $(ye, ye.current), !0;
}
function _u(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  t ? (e = fs(e, n, Mn), r.__reactInternalMemoizedMergedChildContext = e, B(ye), B(ue), $(ue, e)) : B(ye), $(ye, t);
}
var Ge = null, hl = !1, Hl = !1;
function ds(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
function cd(e) {
  hl = !0, ds(e);
}
function En() {
  if (!Hl && Ge !== null) {
    Hl = !0;
    var e = 0, n = O;
    try {
      var t = Ge;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ge = null, hl = !1;
    } catch (l) {
      throw Ge !== null && (Ge = Ge.slice(e + 1)), Oa(ai, En), l;
    } finally {
      O = n, Hl = !1;
    }
  }
  return null;
}
var qn = [], bn = 0, Jr = null, qr = 0, Ee = [], Ne = 0, Fn = null, Ye = 1, Ze = "";
function Pn(e, n) {
  qn[bn++] = qr, qn[bn++] = Jr, Jr = e, qr = n;
}
function ps(e, n, t) {
  Ee[Ne++] = Ye, Ee[Ne++] = Ze, Ee[Ne++] = Fn, Fn = e;
  var r = Ye;
  e = Ze;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Fe(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ye = 1 << 32 - Fe(n) + l | t << l | r, Ze = o + e;
  } else Ye = 1 << o | t << l | r, Ze = e;
}
function gi(e) {
  e.return !== null && (Pn(e, 1), ps(e, 1, 0));
}
function vi(e) {
  for (; e === Jr; ) Jr = qn[--bn], qn[bn] = null, qr = qn[--bn], qn[bn] = null;
  for (; e === Fn; ) Fn = Ee[--Ne], Ee[Ne] = null, Ze = Ee[--Ne], Ee[Ne] = null, Ye = Ee[--Ne], Ee[Ne] = null;
}
var ke = null, Se = null, H = !1, Me = null;
function ms(e, n) {
  var t = _e(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Pu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ke = e, Se = yn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ke = e, Se = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Fn !== null ? { id: Ye, overflow: Ze } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = _e(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ke = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lo(e) {
  if (H) {
    var n = Se;
    if (n) {
      var t = n;
      if (!Pu(e, n)) {
        if (Do(e)) throw Error(S(418));
        n = yn(t.nextSibling);
        var r = ke;
        n && Pu(e, n) ? ms(r, t) : (e.flags = e.flags & -4097 | 2, H = !1, ke = e);
      }
    } else {
      if (Do(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, H = !1, ke = e;
    }
  }
}
function zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ke = e;
}
function xr(e) {
  if (e !== ke) return !1;
  if (!H) return zu(e), H = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !zo(e.type, e.memoizedProps)), n && (n = Se)) {
    if (Do(e)) throw ys(), Error(S(418));
    for (; n; ) ms(e, n), n = yn(n.nextSibling);
  }
  if (zu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Se = yn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = ke ? yn(e.stateNode.nextSibling) : null;
  return !0;
}
function ys() {
  for (var e = Se; e; ) e = yn(e.nextSibling);
}
function ft() {
  Se = ke = null, H = !1;
}
function Si(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var fd = nn.ReactCurrentBatchConfig;
function Nt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(S(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!t._owner) throw Error(S(290, e));
  }
  return e;
}
function Cr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Ru(e) {
  var n = e._init;
  return n(e._payload);
}
function hs(e) {
  function n(f, s) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [s], f.flags |= 16) : d.push(s);
    }
  }
  function t(f, s) {
    if (!e) return null;
    for (; s !== null; ) n(f, s), s = s.sibling;
    return null;
  }
  function r(f, s) {
    for (f = /* @__PURE__ */ new Map(); s !== null; ) s.key !== null ? f.set(s.key, s) : f.set(s.index, s), s = s.sibling;
    return f;
  }
  function l(f, s) {
    return f = Sn(f, s), f.index = 0, f.sibling = null, f;
  }
  function o(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, v) {
    return s === null || s.tag !== 6 ? (s = Jl(d, f.mode, v), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, v) {
    var x = d.type;
    return x === Qn ? h(f, s, d.props.children, v, d.key) : s !== null && (s.elementType === x || typeof x == "object" && x !== null && x.$$typeof === on && Ru(x) === s.type) ? (v = l(s, d.props), v.ref = Nt(f, s, d), v.return = f, v) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = Nt(f, s, d), v.return = f, v);
  }
  function c(f, s, d, v) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = ql(d, f.mode, v), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, v, x) {
    return s === null || s.tag !== 7 ? (s = Ln(d, f.mode, v, x), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function y(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = Jl("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case dr:
          return d = Ur(s.type, s.key, s.props, null, f.mode, d), d.ref = Nt(f, null, s), d.return = f, d;
        case Kn:
          return s = ql(s, f.mode, d), s.return = f, s;
        case on:
          var v = s._init;
          return y(f, v(s._payload), d);
      }
      if (Rt(s) || kt(s)) return s = Ln(s, f.mode, d, null), s.return = f, s;
      Cr(f, s);
    }
    return null;
  }
  function p(f, s, d, v) {
    var x = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return x !== null ? null : u(f, s, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          return d.key === x ? a(f, s, d, v) : null;
        case Kn:
          return d.key === x ? c(f, s, d, v) : null;
        case on:
          return x = d._init, p(
            f,
            s,
            x(d._payload),
            v
          );
      }
      if (Rt(d) || kt(d)) return x !== null ? null : h(f, s, d, v, null);
      Cr(f, d);
    }
    return null;
  }
  function g(f, s, d, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(s, f, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case dr:
          return f = f.get(v.key === null ? d : v.key) || null, a(s, f, v, x);
        case Kn:
          return f = f.get(v.key === null ? d : v.key) || null, c(s, f, v, x);
        case on:
          var _ = v._init;
          return g(f, s, d, _(v._payload), x);
      }
      if (Rt(v) || kt(v)) return f = f.get(d) || null, h(s, f, v, x, null);
      Cr(s, v);
    }
    return null;
  }
  function k(f, s, d, v) {
    for (var x = null, _ = null, N = s, P = s = 0, U = null; N !== null && P < d.length; P++) {
      N.index > P ? (U = N, N = null) : U = N.sibling;
      var T = p(f, N, d[P], v);
      if (T === null) {
        N === null && (N = U);
        break;
      }
      e && N && T.alternate === null && n(f, N), s = o(T, s, P), _ === null ? x = T : _.sibling = T, _ = T, N = U;
    }
    if (P === d.length) return t(f, N), H && Pn(f, P), x;
    if (N === null) {
      for (; P < d.length; P++) N = y(f, d[P], v), N !== null && (s = o(N, s, P), _ === null ? x = N : _.sibling = N, _ = N);
      return H && Pn(f, P), x;
    }
    for (N = r(f, N); P < d.length; P++) U = g(N, f, P, d[P], v), U !== null && (e && U.alternate !== null && N.delete(U.key === null ? P : U.key), s = o(U, s, P), _ === null ? x = U : _.sibling = U, _ = U);
    return e && N.forEach(function(de) {
      return n(f, de);
    }), H && Pn(f, P), x;
  }
  function w(f, s, d, v) {
    var x = kt(d);
    if (typeof x != "function") throw Error(S(150));
    if (d = x.call(d), d == null) throw Error(S(151));
    for (var _ = x = null, N = s, P = s = 0, U = null, T = d.next(); N !== null && !T.done; P++, T = d.next()) {
      N.index > P ? (U = N, N = null) : U = N.sibling;
      var de = p(f, N, T.value, v);
      if (de === null) {
        N === null && (N = U);
        break;
      }
      e && N && de.alternate === null && n(f, N), s = o(de, s, P), _ === null ? x = de : _.sibling = de, _ = de, N = U;
    }
    if (T.done) return t(
      f,
      N
    ), H && Pn(f, P), x;
    if (N === null) {
      for (; !T.done; P++, T = d.next()) T = y(f, T.value, v), T !== null && (s = o(T, s, P), _ === null ? x = T : _.sibling = T, _ = T);
      return H && Pn(f, P), x;
    }
    for (N = r(f, N); !T.done; P++, T = d.next()) T = g(N, f, P, T.value, v), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? P : T.key), s = o(T, s, P), _ === null ? x = T : _.sibling = T, _ = T);
    return e && N.forEach(function(tn) {
      return n(f, tn);
    }), H && Pn(f, P), x;
  }
  function L(f, s, d, v) {
    if (typeof d == "object" && d !== null && d.type === Qn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          e: {
            for (var x = d.key, _ = s; _ !== null; ) {
              if (_.key === x) {
                if (x = d.type, x === Qn) {
                  if (_.tag === 7) {
                    t(f, _.sibling), s = l(_, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === on && Ru(x) === _.type) {
                  t(f, _.sibling), s = l(_, d.props), s.ref = Nt(f, _, d), s.return = f, f = s;
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            d.type === Qn ? (s = Ln(d.props.children, f.mode, v, d.key), s.return = f, f = s) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = Nt(f, s, d), v.return = f, f = v);
          }
          return i(f);
        case Kn:
          e: {
            for (_ = d.key; s !== null; ) {
              if (s.key === _) if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                t(f, s.sibling), s = l(s, d.children || []), s.return = f, f = s;
                break e;
              } else {
                t(f, s);
                break;
              }
              else n(f, s);
              s = s.sibling;
            }
            s = ql(d, f.mode, v), s.return = f, f = s;
          }
          return i(f);
        case on:
          return _ = d._init, L(f, s, _(d._payload), v);
      }
      if (Rt(d)) return k(f, s, d, v);
      if (kt(d)) return w(f, s, d, v);
      Cr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(f, s.sibling), s = l(s, d), s.return = f, f = s) : (t(f, s), s = Jl(d, f.mode, v), s.return = f, f = s), i(f)) : t(f, s);
  }
  return L;
}
var dt = hs(!0), gs = hs(!1), br = Cn(null), el = null, et = null, ki = null;
function wi() {
  ki = et = el = null;
}
function xi(e) {
  var n = br.current;
  B(br), e._currentValue = n;
}
function Mo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function ut(e, n) {
  el = e, ki = et = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (me = !0), e.firstContext = null);
}
function ze(e) {
  var n = e._currentValue;
  if (ki !== e) if (e = { context: e, memoizedValue: n, next: null }, et === null) {
    if (el === null) throw Error(S(308));
    et = e, el.dependencies = { lanes: 0, firstContext: e };
  } else et = et.next = e;
  return n;
}
var jn = null;
function Ci(e) {
  jn === null ? jn = [e] : jn.push(e);
}
function vs(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, Ci(n)) : (t.next = l.next, l.next = t), n.interleaved = t, be(e, r);
}
function be(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var un = !1;
function Ei(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ss(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xe(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function hn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, be(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, Ci(r)) : (n.next = l.next, l.next = n), r.interleaved = n, be(e, t);
}
function Lr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, si(e, t);
  }
}
function ju(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function nl(e, n, t, r) {
  var l = e.updateQueue;
  un = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, c = a.next;
    a.next = null, i === null ? o = c : i.next = c, i = a;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = a));
  }
  if (o !== null) {
    var y = l.baseState;
    i = 0, h = c = a = null, u = o;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var k = e, w = u;
          switch (p = n, g = t, w.tag) {
            case 1:
              if (k = w.payload, typeof k == "function") {
                y = k.call(g, y, p);
                break e;
              }
              y = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = w.payload, p = typeof k == "function" ? k.call(g, y, p) : k, p == null) break e;
              y = G({}, y, p);
              break e;
            case 2:
              un = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = g, a = y) : h = h.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = y), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    On |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Tu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var ar = {}, Ve = Cn(ar), qt = Cn(ar), bt = Cn(ar);
function Tn(e) {
  if (e === ar) throw Error(S(174));
  return e;
}
function Ni(e, n) {
  switch ($(bt, n), $(qt, e), $(Ve, ar), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : mo(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = mo(n, e);
  }
  B(Ve), $(Ve, n);
}
function pt() {
  B(Ve), B(qt), B(bt);
}
function ks(e) {
  Tn(bt.current);
  var n = Tn(Ve.current), t = mo(n, e.type);
  n !== t && ($(qt, e), $(Ve, t));
}
function _i(e) {
  qt.current === e && (B(Ve), B(qt));
}
var K = Cn(0);
function tl(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Kl = [];
function Pi() {
  for (var e = 0; e < Kl.length; e++) Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Mr = nn.ReactCurrentDispatcher, Ql = nn.ReactCurrentBatchConfig, In = 0, Q = null, J = null, b = null, rl = !1, Ot = !1, er = 0, dd = 0;
function le() {
  throw Error(S(321));
}
function zi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function Ri(e, n, t, r, l, o) {
  if (In = o, Q = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Mr.current = e === null || e.memoizedState === null ? hd : gd, e = t(r, l), Ot) {
    o = 0;
    do {
      if (Ot = !1, er = 0, 25 <= o) throw Error(S(301));
      o += 1, b = J = null, n.updateQueue = null, Mr.current = vd, e = t(r, l);
    } while (Ot);
  }
  if (Mr.current = ll, n = J !== null && J.next !== null, In = 0, b = J = Q = null, rl = !1, n) throw Error(S(300));
  return e;
}
function ji() {
  var e = er !== 0;
  return er = 0, e;
}
function Ae() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return b === null ? Q.memoizedState = b = e : b = b.next = e, b;
}
function Re() {
  if (J === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var n = b === null ? Q.memoizedState : b.next;
  if (n !== null) b = n, J = e;
  else {
    if (e === null) throw Error(S(310));
    J = e, e = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, b === null ? Q.memoizedState = b = e : b = b.next = e;
  }
  return b;
}
function nr(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Gl(e) {
  var n = Re(), t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = J, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, a = null, c = o;
    do {
      var h = c.lane;
      if ((In & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var y = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = y, i = r) : a = a.next = y, Q.lanes |= h, On |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, Oe(r, n.memoizedState) || (me = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, On |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Yl(e) {
  var n = Re(), t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Oe(o, n.memoizedState) || (me = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ws() {
}
function xs(e, n) {
  var t = Q, r = Re(), l = n(), o = !Oe(r.memoizedState, l);
  if (o && (r.memoizedState = l, me = !0), r = r.queue, Ti(Ns.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || b !== null && b.memoizedState.tag & 1) {
    if (t.flags |= 2048, tr(9, Es.bind(null, t, r, l, n), void 0, null), ee === null) throw Error(S(349));
    In & 30 || Cs(t, n, l);
  }
  return l;
}
function Cs(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Es(e, n, t, r) {
  n.value = t, n.getSnapshot = r, _s(n) && Ps(e);
}
function Ns(e, n, t) {
  return t(function() {
    _s(n) && Ps(e);
  });
}
function _s(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function Ps(e) {
  var n = be(e, 1);
  n !== null && Ie(n, e, 1, -1);
}
function Du(e) {
  var n = Ae();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nr, lastRenderedState: e }, n.queue = e, e = e.dispatch = yd.bind(null, Q, e), [n.memoizedState, e];
}
function tr(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function zs() {
  return Re().memoizedState;
}
function Fr(e, n, t, r) {
  var l = Ae();
  Q.flags |= e, l.memoizedState = tr(1 | n, t, void 0, r === void 0 ? null : r);
}
function gl(e, n, t, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (o = i.destroy, r !== null && zi(r, i.deps)) {
      l.memoizedState = tr(n, t, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = tr(1 | n, t, o, r);
}
function Lu(e, n) {
  return Fr(8390656, 8, e, n);
}
function Ti(e, n) {
  return gl(2048, 8, e, n);
}
function Rs(e, n) {
  return gl(4, 2, e, n);
}
function js(e, n) {
  return gl(4, 4, e, n);
}
function Ts(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Ds(e, n, t) {
  return t = t != null ? t.concat([e]) : null, gl(4, 4, Ts.bind(null, n, e), t);
}
function Di() {
}
function Ls(e, n) {
  var t = Re();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && zi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Ms(e, n) {
  var t = Re();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && zi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Fs(e, n, t) {
  return In & 21 ? (Oe(t, n) || (t = Aa(), Q.lanes |= t, On |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = t);
}
function pd(e, n) {
  var t = O;
  O = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Ql.transition;
  Ql.transition = {};
  try {
    e(!1), n();
  } finally {
    O = t, Ql.transition = r;
  }
}
function Is() {
  return Re().memoizedState;
}
function md(e, n, t) {
  var r = vn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Os(e)) $s(n, t);
  else if (t = vs(e, n, t, r), t !== null) {
    var l = se();
    Ie(t, e, r, l), Us(t, n, r);
  }
}
function yd(e, n, t) {
  var r = vn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Os(e)) $s(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Oe(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, Ci(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = vs(e, n, l, r), t !== null && (l = se(), Ie(t, e, r, l), Us(t, n, r));
  }
}
function Os(e) {
  var n = e.alternate;
  return e === Q || n !== null && n === Q;
}
function $s(e, n) {
  Ot = rl = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Us(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, si(e, t);
  }
}
var ll = { readContext: ze, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, hd = { readContext: ze, useCallback: function(e, n) {
  return Ae().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: ze, useEffect: Lu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Fr(
    4194308,
    4,
    Ts.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Fr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Fr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Ae();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Ae();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = md.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Ae();
  return e = { current: e }, n.memoizedState = e;
}, useState: Du, useDebugValue: Di, useDeferredValue: function(e) {
  return Ae().memoizedState = e;
}, useTransition: function() {
  var e = Du(!1), n = e[0];
  return e = pd.bind(null, e[1]), Ae().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = Q, l = Ae();
  if (H) {
    if (t === void 0) throw Error(S(407));
    t = t();
  } else {
    if (t = n(), ee === null) throw Error(S(349));
    In & 30 || Cs(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Lu(Ns.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, tr(9, Es.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = Ae(), n = ee.identifierPrefix;
  if (H) {
    var t = Ze, r = Ye;
    t = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = er++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = dd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, gd = {
  readContext: ze,
  useCallback: Ls,
  useContext: ze,
  useEffect: Ti,
  useImperativeHandle: Ds,
  useInsertionEffect: Rs,
  useLayoutEffect: js,
  useMemo: Ms,
  useReducer: Gl,
  useRef: zs,
  useState: function() {
    return Gl(nr);
  },
  useDebugValue: Di,
  useDeferredValue: function(e) {
    var n = Re();
    return Fs(n, J.memoizedState, e);
  },
  useTransition: function() {
    var e = Gl(nr)[0], n = Re().memoizedState;
    return [e, n];
  },
  useMutableSource: ws,
  useSyncExternalStore: xs,
  useId: Is,
  unstable_isNewReconciler: !1
}, vd = { readContext: ze, useCallback: Ls, useContext: ze, useEffect: Ti, useImperativeHandle: Ds, useInsertionEffect: Rs, useLayoutEffect: js, useMemo: Ms, useReducer: Yl, useRef: zs, useState: function() {
  return Yl(nr);
}, useDebugValue: Di, useDeferredValue: function(e) {
  var n = Re();
  return J === null ? n.memoizedState = e : Fs(n, J.memoizedState, e);
}, useTransition: function() {
  var e = Yl(nr)[0], n = Re().memoizedState;
  return [e, n];
}, useMutableSource: ws, useSyncExternalStore: xs, useId: Is, unstable_isNewReconciler: !1 };
function De(e, n) {
  if (e && e.defaultProps) {
    n = G({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Fo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : G({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var vl = { isMounted: function(e) {
  return (e = e._reactInternals) ? An(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = se(), l = vn(e), o = Xe(r, l);
  o.payload = n, t != null && (o.callback = t), n = hn(e, o, l), n !== null && (Ie(n, e, l, r), Lr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = se(), l = vn(e), o = Xe(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = hn(e, o, l), n !== null && (Ie(n, e, l, r), Lr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = se(), r = vn(e), l = Xe(t, r);
  l.tag = 2, n != null && (l.callback = n), n = hn(e, l, r), n !== null && (Ie(n, e, r, t), Lr(n, e, r));
} };
function Mu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Yt(t, r) || !Yt(l, o) : !0;
}
function As(e, n, t) {
  var r = !1, l = wn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = ze(o) : (l = he(n) ? Mn : ue.current, r = n.contextTypes, o = (r = r != null) ? ct(e, l) : wn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = vl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Fu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && vl.enqueueReplaceState(n, n.state, null);
}
function Io(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, Ei(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = ze(o) : (o = he(n) ? Mn : ue.current, l.context = ct(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Fo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && vl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Kc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Zl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Oo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Sd = typeof WeakMap == "function" ? WeakMap : Map;
function Bs(e, n, t) {
  t = Xe(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    il || (il = !0, Go = r), Oo(e, n);
  }, t;
}
function Ws(e, n, t) {
  t = Xe(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Oo(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Oo(e, n), typeof r != "function" && (gn === null ? gn = /* @__PURE__ */ new Set([this]) : gn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Iu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Ld.bind(null, e, n, t), n.then(e, e));
}
function Ou(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $u(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Xe(-1, 1), n.tag = 2, hn(t, n, 1))), t.lanes |= 1), e);
}
var kd = nn.ReactCurrentOwner, me = !1;
function ae(e, n, t, r) {
  n.child = e === null ? gs(n, null, t, r) : dt(n, e.child, t, r);
}
function Uu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return ut(n, l), r = Ri(e, n, t, r, o, l), t = ji(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, en(e, n, l)) : (H && t && gi(n), n.flags |= 1, ae(e, n, r, l), n.child);
}
function Au(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Ai(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Vs(e, n, o, r, l)) : (e = Ur(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Yt, t(i, r) && e.ref === n.ref) return en(e, n, l);
  }
  return n.flags |= 1, e = Sn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Vs(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yt(o, r) && e.ref === n.ref) if (me = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return n.lanes = e.lanes, en(e, n, l);
  }
  return $o(e, n, t, r, l);
}
function Hs(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(tt, ve), ve |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, $(tt, ve), ve |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, $(tt, ve), ve |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, $(tt, ve), ve |= r;
  return ae(e, n, l, t), n.child;
}
function Ks(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function $o(e, n, t, r, l) {
  var o = he(t) ? Mn : ue.current;
  return o = ct(n, o), ut(n, l), t = Ri(e, n, t, r, o, l), r = ji(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, en(e, n, l)) : (H && r && gi(n), n.flags |= 1, ae(e, n, t, l), n.child);
}
function Bu(e, n, t, r, l) {
  if (he(t)) {
    var o = !0;
    Xr(n);
  } else o = !1;
  if (ut(n, l), n.stateNode === null) Ir(e, n), As(n, t, r), Io(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = ze(c) : (c = he(t) ? Mn : ue.current, c = ct(n, c));
    var h = t.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && Fu(n, i, r, c), un = !1;
    var p = n.memoizedState;
    i.state = p, nl(n, r, i, l), a = n.memoizedState, u !== r || p !== a || ye.current || un ? (typeof h == "function" && (Fo(n, t, h, r), a = n.memoizedState), (u = un || Mu(n, t, u, r, p, a, c)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, Ss(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : De(n.type, u), i.props = c, y = n.pendingProps, p = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = ze(a) : (a = he(t) ? Mn : ue.current, a = ct(n, a));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || p !== a) && Fu(n, i, r, a), un = !1, p = n.memoizedState, i.state = p, nl(n, r, i, l);
    var k = n.memoizedState;
    u !== y || p !== k || ye.current || un ? (typeof g == "function" && (Fo(n, t, g, r), k = n.memoizedState), (c = un || Mu(n, t, c, r, p, k, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = k), i.props = r, i.state = k, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Uo(e, n, t, r, o, l);
}
function Uo(e, n, t, r, l, o) {
  Ks(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && _u(n, t, !1), en(e, n, o);
  r = n.stateNode, kd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = dt(n, e.child, null, o), n.child = dt(n, null, u, o)) : ae(e, n, u, o), n.memoizedState = r.state, l && _u(n, t, !0), n.child;
}
function Qs(e) {
  var n = e.stateNode;
  n.pendingContext ? Nu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Nu(e, n.context, !1), Ni(e, n.containerInfo);
}
function Wu(e, n, t, r, l) {
  return ft(), Si(l), n.flags |= 256, ae(e, n, t, r), n.child;
}
var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gs(e, n, t) {
  var r = n.pendingProps, l = K.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(K, l & 1), e === null)
    return Lo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = wl(i, r, 0, null), e = Ln(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Bo(t), n.memoizedState = Ao, e) : Li(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return wd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = Sn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Sn(u, o) : (o = Ln(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Bo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Ao, r;
  }
  return o = e.child, e = o.sibling, r = Sn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Li(e, n) {
  return n = wl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function Er(e, n, t, r) {
  return r !== null && Si(r), dt(n, e.child, null, t), e = Li(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function wd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Zl(Error(S(422))), Er(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = wl({ mode: "visible", children: r.children }, l, 0, null), o = Ln(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && dt(n, e.child, null, i), n.child.memoizedState = Bo(i), n.memoizedState = Ao, o);
  if (!(n.mode & 1)) return Er(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = Zl(o, r, void 0), Er(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, me || u) {
    if (r = ee, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, be(e, l), Ie(r, e, l, -1));
    }
    return Ui(), r = Zl(Error(S(421))), Er(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Md.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Se = yn(l.nextSibling), ke = n, H = !0, Me = null, e !== null && (Ee[Ne++] = Ye, Ee[Ne++] = Ze, Ee[Ne++] = Fn, Ye = e.id, Ze = e.overflow, Fn = n), n = Li(n, r.children), n.flags |= 4096, n);
}
function Vu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Mo(e.return, n, t);
}
function Xl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Ys(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (ae(e, n, r.children, t), r = K.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Vu(e, t, n);
      else if (e.tag === 19) Vu(e, t, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if ($(K, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Xl(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && tl(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Xl(n, !0, t, null, o);
      break;
    case "together":
      Xl(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Ir(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function en(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), On |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(S(153));
  if (n.child !== null) {
    for (e = n.child, t = Sn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Sn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function xd(e, n, t) {
  switch (n.tag) {
    case 3:
      Qs(n), ft();
      break;
    case 5:
      ks(n);
      break;
    case 1:
      he(n.type) && Xr(n);
      break;
    case 4:
      Ni(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      $(br, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? ($(K, K.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Gs(e, n, t) : ($(K, K.current & 1), e = en(e, n, t), e !== null ? e.sibling : null);
      $(K, K.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return Ys(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Hs(e, n, t);
  }
  return en(e, n, t);
}
var Zs, Wo, Xs, Js;
Zs = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Wo = function() {
};
Xs = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Tn(Ve.current);
    var o = null;
    switch (t) {
      case "input":
        l = so(e, l), r = so(e, r), o = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = po(e, l), r = po(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
    }
    yo(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Bt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Bt.hasOwnProperty(c) ? (a != null && c === "onScroll" && A("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Js = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function _t(e, n) {
  if (!H) switch (e.tailMode) {
    case "hidden":
      n = e.tail;
      for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
      t === null ? e.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function oe(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Cd(e, n, t) {
  var r = n.pendingProps;
  switch (vi(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(n), null;
    case 1:
      return he(n.type) && Zr(), oe(n), null;
    case 3:
      return r = n.stateNode, pt(), B(ye), B(ue), Pi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Me !== null && (Xo(Me), Me = null))), Wo(e, n), oe(n), null;
    case 5:
      _i(n);
      var l = Tn(bt.current);
      if (t = n.type, e !== null && n.stateNode != null) Xs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(S(166));
          return oe(n), null;
        }
        if (e = Tn(Ve.current), xr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Be] = n, r[Jt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tt.length; l++) A(Tt[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A(
                "error",
                r
              ), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              qi(r, o), A("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, A("invalid", r);
              break;
            case "textarea":
              eu(r, o), A("invalid", r);
          }
          yo(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && wr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && wr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Bt.hasOwnProperty(i) && u != null && i === "onScroll" && A("scroll", r);
          }
          switch (t) {
            case "input":
              pr(r), bi(r, o, !0);
              break;
            case "textarea":
              pr(r), nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Na(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Be] = n, e[Jt] = r, Zs(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = ho(t, r), t) {
              case "dialog":
                A("cancel", e), A("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tt.length; l++) A(Tt[l], e);
                l = r;
                break;
              case "source":
                A("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                A(
                  "error",
                  e
                ), A("load", e), l = r;
                break;
              case "details":
                A("toggle", e), l = r;
                break;
              case "input":
                qi(e, r), l = so(e, r), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), A("invalid", e);
                break;
              case "textarea":
                eu(e, r), l = po(e, r), A("invalid", e);
                break;
              default:
                l = r;
            }
            yo(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? za(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && _a(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Wt(e, a) : typeof a == "number" && Wt(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Bt.hasOwnProperty(o) ? a != null && o === "onScroll" && A("scroll", e) : a != null && ri(e, o, a, i));
            }
            switch (t) {
              case "input":
                pr(e), bi(e, r, !1);
                break;
              case "textarea":
                pr(e), nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? rt(e, !!r.multiple, o, !1) : r.defaultValue != null && rt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return oe(n), null;
    case 6:
      if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(S(166));
        if (t = Tn(bt.current), Tn(Ve.current), xr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Be] = n, (o = r.nodeValue !== t) && (e = ke, e !== null)) switch (e.tag) {
            case 3:
              wr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && wr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Be] = n, n.stateNode = r;
      }
      return oe(n), null;
    case 13:
      if (B(K), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (H && Se !== null && n.mode & 1 && !(n.flags & 128)) ys(), ft(), n.flags |= 98560, o = !1;
        else if (o = xr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Be] = n;
          } else ft(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          oe(n), o = !1;
        } else Me !== null && (Xo(Me), Me = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || K.current & 1 ? q === 0 && (q = 3) : Ui())), n.updateQueue !== null && (n.flags |= 4), oe(n), null);
    case 4:
      return pt(), Wo(e, n), e === null && Zt(n.stateNode.containerInfo), oe(n), null;
    case 10:
      return xi(n.type._context), oe(n), null;
    case 17:
      return he(n.type) && Zr(), oe(n), null;
    case 19:
      if (B(K), o = n.memoizedState, o === null) return oe(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) _t(o, !1);
      else {
        if (q !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = tl(e), i !== null) {
            for (n.flags |= 128, _t(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return $(K, K.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Z() > yt && (n.flags |= 128, r = !0, _t(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = tl(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), _t(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !H) return oe(n), null;
        } else 2 * Z() - o.renderingStartTime > yt && t !== 1073741824 && (n.flags |= 128, r = !0, _t(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Z(), n.sibling = null, t = K.current, $(K, r ? t & 1 | 2 : t & 1), n) : (oe(n), null);
    case 22:
    case 23:
      return $i(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? ve & 1073741824 && (oe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : oe(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, n.tag));
}
function Ed(e, n) {
  switch (vi(n), n.tag) {
    case 1:
      return he(n.type) && Zr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return pt(), B(ye), B(ue), Pi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return _i(n), null;
    case 13:
      if (B(K), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(S(340));
        ft();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return B(K), null;
    case 4:
      return pt(), null;
    case 10:
      return xi(n.type._context), null;
    case 22:
    case 23:
      return $i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1, ie = !1, Nd = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function nt(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    Y(e, n, r);
  }
  else t.current = null;
}
function Vo(e, n, t) {
  try {
    t();
  } catch (r) {
    Y(e, n, r);
  }
}
var Hu = !1;
function _d(e, n) {
  if (_o = Kr, e = ts(), hi(e)) {
    if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      t = (t = e.ownerDocument) && t.defaultView || window;
      var r = t.getSelection && t.getSelection();
      if (r && r.rangeCount !== 0) {
        t = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          t.nodeType, o.nodeType;
        } catch {
          t = null;
          break e;
        }
        var i = 0, u = -1, a = -1, c = 0, h = 0, y = e, p = null;
        n: for (; ; ) {
          for (var g; y !== t || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (a = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (g = y.firstChild) !== null; )
            p = y, y = g;
          for (; ; ) {
            if (y === e) break n;
            if (p === t && ++c === l && (u = i), p === o && ++h === r && (a = i), (g = y.nextSibling) !== null) break;
            y = p, p = y.parentNode;
          }
          y = g;
        }
        t = u === -1 || a === -1 ? null : { start: u, end: a };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Po = { focusedElem: e, selectionRange: t }, Kr = !1, C = n; C !== null; ) if (n = C, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, C = e;
  else for (; C !== null; ) {
    n = C;
    try {
      var k = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var w = k.memoizedProps, L = k.memoizedState, f = n.stateNode, s = f.getSnapshotBeforeUpdate(n.elementType === n.type ? w : De(n.type, w), L);
            f.__reactInternalSnapshotBeforeUpdate = s;
          }
          break;
        case 3:
          var d = n.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (v) {
      Y(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, C = e;
      break;
    }
    C = n.return;
  }
  return k = Hu, Hu = !1, k;
}
function $t(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Vo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Sl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ho(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function qs(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, qs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Be], delete n[Jt], delete n[jo], delete n[ad], delete n[sd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ku(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || bs(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ko(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Yr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ko(e, n, t), e = e.sibling; e !== null; ) Ko(e, n, t), e = e.sibling;
}
function Qo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Qo(e, n, t), e = e.sibling; e !== null; ) Qo(e, n, t), e = e.sibling;
}
var ne = null, Le = !1;
function ln(e, n, t) {
  for (t = t.child; t !== null; ) ec(e, n, t), t = t.sibling;
}
function ec(e, n, t) {
  if (We && typeof We.onCommitFiberUnmount == "function") try {
    We.onCommitFiberUnmount(fl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      ie || nt(t, n);
    case 6:
      var r = ne, l = Le;
      ne = null, ln(e, n, t), ne = r, Le = l, ne !== null && (Le ? (e = ne, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ne.removeChild(t.stateNode));
      break;
    case 18:
      ne !== null && (Le ? (e = ne, t = t.stateNode, e.nodeType === 8 ? Vl(e.parentNode, t) : e.nodeType === 1 && Vl(e, t), Qt(e)) : Vl(ne, t.stateNode));
      break;
    case 4:
      r = ne, l = Le, ne = t.stateNode.containerInfo, Le = !0, ln(e, n, t), ne = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Vo(t, n, i), l = l.next;
        } while (l !== r);
      }
      ln(e, n, t);
      break;
    case 1:
      if (!ie && (nt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Y(t, n, u);
      }
      ln(e, n, t);
      break;
    case 21:
      ln(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (ie = (r = ie) || t.memoizedState !== null, ln(e, n, t), ie = r) : ln(e, n, t);
      break;
    default:
      ln(e, n, t);
  }
}
function Qu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Nd()), n.forEach(function(r) {
      var l = Fd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Te(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ne = u.stateNode, Le = !1;
            break e;
          case 3:
            ne = u.stateNode.containerInfo, Le = !0;
            break e;
          case 4:
            ne = u.stateNode.containerInfo, Le = !0;
            break e;
        }
        u = u.return;
      }
      if (ne === null) throw Error(S(160));
      ec(o, i, l), ne = null, Le = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      Y(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) nc(n, e), n = n.sibling;
}
function nc(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Te(n, e), Ue(e), r & 4) {
        try {
          $t(3, e, e.return), Sl(3, e);
        } catch (w) {
          Y(e, e.return, w);
        }
        try {
          $t(5, e, e.return);
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 1:
      Te(n, e), Ue(e), r & 512 && t !== null && nt(t, t.return);
      break;
    case 5:
      if (Te(n, e), Ue(e), r & 512 && t !== null && nt(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Wt(l, "");
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Ca(l, o), ho(u, i);
          var c = ho(u, o);
          for (i = 0; i < a.length; i += 2) {
            var h = a[i], y = a[i + 1];
            h === "style" ? za(l, y) : h === "dangerouslySetInnerHTML" ? _a(l, y) : h === "children" ? Wt(l, y) : ri(l, h, y, c);
          }
          switch (u) {
            case "input":
              co(l, o);
              break;
            case "textarea":
              Ea(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? rt(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? rt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : rt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Jt] = o;
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Te(n, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Te(n, e), Ue(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Qt(n.containerInfo);
      } catch (w) {
        Y(e, e.return, w);
      }
      break;
    case 4:
      Te(n, e), Ue(e);
      break;
    case 13:
      Te(n, e), Ue(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ii = Z())), r & 4 && Qu(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (ie = (c = ie) || h, Te(n, e), ie = c) : Te(n, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (C = e, h = e.child; h !== null; ) {
          for (y = C = h; C !== null; ) {
            switch (p = C, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                $t(4, p, p.return);
                break;
              case 1:
                nt(p, p.return);
                var k = p.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = p, t = p.return;
                  try {
                    n = r, k.props = n.memoizedProps, k.state = n.memoizedState, k.componentWillUnmount();
                  } catch (w) {
                    Y(r, t, w);
                  }
                }
                break;
              case 5:
                nt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Yu(y);
                  continue;
                }
            }
            g !== null ? (g.return = p, C = g) : Yu(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, a = y.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Pa("display", i));
              } catch (w) {
                Y(e, e.return, w);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = c ? "" : y.memoizedProps;
            } catch (w) {
              Y(e, e.return, w);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            h === y && (h = null), y = y.return;
          }
          h === y && (h = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Te(n, e), Ue(e), r & 4 && Qu(e);
      break;
    case 21:
      break;
    default:
      Te(
        n,
        e
      ), Ue(e);
  }
}
function Ue(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (bs(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wt(l, ""), r.flags &= -33);
          var o = Ku(e);
          Qo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ku(e);
          Ko(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Pd(e, n, t) {
  C = e, tc(e);
}
function tc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Nr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || ie;
        u = Nr;
        var c = ie;
        if (Nr = i, (ie = a) && !c) for (C = l; C !== null; ) i = C, a = i.child, i.tag === 22 && i.memoizedState !== null ? Zu(l) : a !== null ? (a.return = i, C = a) : Zu(l);
        for (; o !== null; ) C = o, tc(o), o = o.sibling;
        C = l, Nr = u, ie = c;
      }
      Gu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Gu(e);
  }
}
function Gu(e) {
  for (; C !== null; ) {
    var n = C;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ie || Sl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !ie) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : De(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && Tu(n, o, r);
            break;
          case 3:
            var i = n.updateQueue;
            if (i !== null) {
              if (t = null, n.child !== null) switch (n.child.tag) {
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
              Tu(n, i, t);
            }
            break;
          case 5:
            var u = n.stateNode;
            if (t === null && n.flags & 4) {
              t = u;
              var a = n.memoizedProps;
              switch (n.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && t.focus();
                  break;
                case "img":
                  a.src && (t.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (n.memoizedState === null) {
              var c = n.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var y = h.dehydrated;
                  y !== null && Qt(y);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(S(163));
        }
        ie || n.flags & 512 && Ho(n);
      } catch (p) {
        Y(n, n.return, p);
      }
    }
    if (n === e) {
      C = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, C = t;
      break;
    }
    C = n.return;
  }
}
function Yu(e) {
  for (; C !== null; ) {
    var n = C;
    if (n === e) {
      C = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, C = t;
      break;
    }
    C = n.return;
  }
}
function Zu(e) {
  for (; C !== null; ) {
    var n = C;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            Sl(4, n);
          } catch (a) {
            Y(n, t, a);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Y(n, l, a);
            }
          }
          var o = n.return;
          try {
            Ho(n);
          } catch (a) {
            Y(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Ho(n);
          } catch (a) {
            Y(n, i, a);
          }
      }
    } catch (a) {
      Y(n, n.return, a);
    }
    if (n === e) {
      C = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, C = u;
      break;
    }
    C = n.return;
  }
}
var zd = Math.ceil, ol = nn.ReactCurrentDispatcher, Mi = nn.ReactCurrentOwner, Pe = nn.ReactCurrentBatchConfig, I = 0, ee = null, X = null, te = 0, ve = 0, tt = Cn(0), q = 0, rr = null, On = 0, kl = 0, Fi = 0, Ut = null, pe = null, Ii = 0, yt = 1 / 0, Qe = null, il = !1, Go = null, gn = null, _r = !1, fn = null, ul = 0, At = 0, Yo = null, Or = -1, $r = 0;
function se() {
  return I & 6 ? Z() : Or !== -1 ? Or : Or = Z();
}
function vn(e) {
  return e.mode & 1 ? I & 2 && te !== 0 ? te & -te : fd.transition !== null ? ($r === 0 && ($r = Aa()), $r) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ga(e.type)), e) : 1;
}
function Ie(e, n, t, r) {
  if (50 < At) throw At = 0, Yo = null, Error(S(185));
  or(e, t, r), (!(I & 2) || e !== ee) && (e === ee && (!(I & 2) && (kl |= t), q === 4 && sn(e, te)), ge(e, r), t === 1 && I === 0 && !(n.mode & 1) && (yt = Z() + 500, hl && En()));
}
function ge(e, n) {
  var t = e.callbackNode;
  ff(e, n);
  var r = Hr(e, e === ee ? te : 0);
  if (r === 0) t !== null && lu(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && lu(t), n === 1) e.tag === 0 ? cd(Xu.bind(null, e)) : ds(Xu.bind(null, e)), id(function() {
      !(I & 6) && En();
    }), t = null;
    else {
      switch (Ba(r)) {
        case 1:
          t = ai;
          break;
        case 4:
          t = $a;
          break;
        case 16:
          t = Vr;
          break;
        case 536870912:
          t = Ua;
          break;
        default:
          t = Vr;
      }
      t = cc(t, rc.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function rc(e, n) {
  if (Or = -1, $r = 0, I & 6) throw Error(S(327));
  var t = e.callbackNode;
  if (at() && e.callbackNode !== t) return null;
  var r = Hr(e, e === ee ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = al(e, r);
  else {
    n = r;
    var l = I;
    I |= 2;
    var o = oc();
    (ee !== e || te !== n) && (Qe = null, yt = Z() + 500, Dn(e, n));
    do
      try {
        Td();
        break;
      } catch (u) {
        lc(e, u);
      }
    while (!0);
    wi(), ol.current = o, I = l, X !== null ? n = 0 : (ee = null, te = 0, n = q);
  }
  if (n !== 0) {
    if (n === 2 && (l = wo(e), l !== 0 && (r = l, n = Zo(e, l))), n === 1) throw t = rr, Dn(e, 0), sn(e, r), ge(e, Z()), t;
    if (n === 6) sn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Rd(l) && (n = al(e, r), n === 2 && (o = wo(e), o !== 0 && (r = o, n = Zo(e, o))), n === 1)) throw t = rr, Dn(e, 0), sn(e, r), ge(e, Z()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          zn(e, pe, Qe);
          break;
        case 3:
          if (sn(e, r), (r & 130023424) === r && (n = Ii + 500 - Z(), 10 < n)) {
            if (Hr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ro(zn.bind(null, e, pe, Qe), n);
            break;
          }
          zn(e, pe, Qe);
          break;
        case 4:
          if (sn(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ro(zn.bind(null, e, pe, Qe), r);
            break;
          }
          zn(e, pe, Qe);
          break;
        case 5:
          zn(e, pe, Qe);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ge(e, Z()), e.callbackNode === t ? rc.bind(null, e) : null;
}
function Zo(e, n) {
  var t = Ut;
  return e.current.memoizedState.isDehydrated && (Dn(e, n).flags |= 256), e = al(e, n), e !== 2 && (n = pe, pe = t, n !== null && Xo(n)), e;
}
function Xo(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function Rd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Oe(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function sn(e, n) {
  for (n &= ~Fi, n &= ~kl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Fe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Xu(e) {
  if (I & 6) throw Error(S(327));
  at();
  var n = Hr(e, 0);
  if (!(n & 1)) return ge(e, Z()), null;
  var t = al(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = wo(e);
    r !== 0 && (n = r, t = Zo(e, r));
  }
  if (t === 1) throw t = rr, Dn(e, 0), sn(e, n), ge(e, Z()), t;
  if (t === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, zn(e, pe, Qe), ge(e, Z()), null;
}
function Oi(e, n) {
  var t = I;
  I |= 1;
  try {
    return e(n);
  } finally {
    I = t, I === 0 && (yt = Z() + 500, hl && En());
  }
}
function $n(e) {
  fn !== null && fn.tag === 0 && !(I & 6) && at();
  var n = I;
  I |= 1;
  var t = Pe.transition, r = O;
  try {
    if (Pe.transition = null, O = 1, e) return e();
  } finally {
    O = r, Pe.transition = t, I = n, !(I & 6) && En();
  }
}
function $i() {
  ve = tt.current, B(tt);
}
function Dn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, od(t)), X !== null) for (t = X.return; t !== null; ) {
    var r = t;
    switch (vi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Zr();
        break;
      case 3:
        pt(), B(ye), B(ue), Pi();
        break;
      case 5:
        _i(r);
        break;
      case 4:
        pt();
        break;
      case 13:
        B(K);
        break;
      case 19:
        B(K);
        break;
      case 10:
        xi(r.type._context);
        break;
      case 22:
      case 23:
        $i();
    }
    t = t.return;
  }
  if (ee = e, X = e = Sn(e.current, null), te = ve = n, q = 0, rr = null, Fi = kl = On = 0, pe = Ut = null, jn !== null) {
    for (n = 0; n < jn.length; n++) if (t = jn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    jn = null;
  }
  return e;
}
function lc(e, n) {
  do {
    var t = X;
    try {
      if (wi(), Mr.current = ll, rl) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        rl = !1;
      }
      if (In = 0, b = J = Q = null, Ot = !1, er = 0, Mi.current = null, t === null || t.return === null) {
        q = 1, rr = n, X = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, a = n;
        if (n = te, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, h = u, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Ou(i);
          if (g !== null) {
            g.flags &= -257, $u(g, i, u, o, n), g.mode & 1 && Iu(o, c, n), n = g, a = c;
            var k = n.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), n.updateQueue = w;
            } else k.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Iu(o, c, n), Ui();
              break e;
            }
            a = Error(S(426));
          }
        } else if (H && u.mode & 1) {
          var L = Ou(i);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), $u(L, i, u, o, n), Si(mt(a, u));
            break e;
          }
        }
        o = a = mt(a, u), q !== 4 && (q = 2), Ut === null ? Ut = [o] : Ut.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Bs(o, a, n);
              ju(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (gn === null || !gn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Ws(o, u, n);
                ju(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      uc(t);
    } catch (x) {
      n = x, X === t && t !== null && (X = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function oc() {
  var e = ol.current;
  return ol.current = ll, e === null ? ll : e;
}
function Ui() {
  (q === 0 || q === 3 || q === 2) && (q = 4), ee === null || !(On & 268435455) && !(kl & 268435455) || sn(ee, te);
}
function al(e, n) {
  var t = I;
  I |= 2;
  var r = oc();
  (ee !== e || te !== n) && (Qe = null, Dn(e, n));
  do
    try {
      jd();
      break;
    } catch (l) {
      lc(e, l);
    }
  while (!0);
  if (wi(), I = t, ol.current = r, X !== null) throw Error(S(261));
  return ee = null, te = 0, q;
}
function jd() {
  for (; X !== null; ) ic(X);
}
function Td() {
  for (; X !== null && !nf(); ) ic(X);
}
function ic(e) {
  var n = sc(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, n === null ? uc(e) : X = n, Mi.current = null;
}
function uc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = Ed(t, n), t !== null) {
        t.flags &= 32767, X = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        q = 6, X = null;
        return;
      }
    } else if (t = Cd(t, n, ve), t !== null) {
      X = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      X = n;
      return;
    }
    X = n = e;
  } while (n !== null);
  q === 0 && (q = 5);
}
function zn(e, n, t) {
  var r = O, l = Pe.transition;
  try {
    Pe.transition = null, O = 1, Dd(e, n, t, r);
  } finally {
    Pe.transition = l, O = r;
  }
  return null;
}
function Dd(e, n, t, r) {
  do
    at();
  while (fn !== null);
  if (I & 6) throw Error(S(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (df(e, o), e === ee && (X = ee = null, te = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || _r || (_r = !0, cc(Vr, function() {
    return at(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Pe.transition, Pe.transition = null;
    var i = O;
    O = 1;
    var u = I;
    I |= 4, Mi.current = null, _d(e, t), nc(t, e), qf(Po), Kr = !!_o, Po = _o = null, e.current = t, Pd(t), tf(), I = u, O = i, Pe.transition = o;
  } else e.current = t;
  if (_r && (_r = !1, fn = e, ul = l), o = e.pendingLanes, o === 0 && (gn = null), of(t.stateNode), ge(e, Z()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il) throw il = !1, e = Go, Go = null, e;
  return ul & 1 && e.tag !== 0 && at(), o = e.pendingLanes, o & 1 ? e === Yo ? At++ : (At = 0, Yo = e) : At = 0, En(), null;
}
function at() {
  if (fn !== null) {
    var e = Ba(ul), n = Pe.transition, t = O;
    try {
      if (Pe.transition = null, O = 16 > e ? 16 : e, fn === null) var r = !1;
      else {
        if (e = fn, fn = null, ul = 0, I & 6) throw Error(S(331));
        var l = I;
        for (I |= 4, C = e.current; C !== null; ) {
          var o = C, i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (C = c; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $t(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, C = y;
                  else for (; C !== null; ) {
                    h = C;
                    var p = h.sibling, g = h.return;
                    if (qs(h), h === c) {
                      C = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, C = p;
                      break;
                    }
                    C = g;
                  }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var L = w.sibling;
                    w.sibling = null, w = L;
                  } while (w !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                $t(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, C = f;
              break e;
            }
            C = o.return;
          }
        }
        var s = e.current;
        for (C = s; C !== null; ) {
          i = C;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, C = d;
          else e: for (i = s; C !== null; ) {
            if (u = C, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Sl(9, u);
              }
            } catch (x) {
              Y(u, u.return, x);
            }
            if (u === i) {
              C = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, C = v;
              break e;
            }
            C = u.return;
          }
        }
        if (I = l, En(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(fl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = t, Pe.transition = n;
    }
  }
  return !1;
}
function Ju(e, n, t) {
  n = mt(t, n), n = Bs(e, n, 1), e = hn(e, n, 1), n = se(), e !== null && (or(e, 1, n), ge(e, n));
}
function Y(e, n, t) {
  if (e.tag === 3) Ju(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      Ju(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gn === null || !gn.has(r))) {
        e = mt(t, e), e = Ws(n, e, 1), n = hn(n, e, 1), e = se(), n !== null && (or(n, 1, e), ge(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Ld(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = se(), e.pingedLanes |= e.suspendedLanes & t, ee === e && (te & t) === t && (q === 4 || q === 3 && (te & 130023424) === te && 500 > Z() - Ii ? Dn(e, 0) : Fi |= t), ge(e, n);
}
function ac(e, n) {
  n === 0 && (e.mode & 1 ? (n = hr, hr <<= 1, !(hr & 130023424) && (hr = 4194304)) : n = 1);
  var t = se();
  e = be(e, n), e !== null && (or(e, n, t), ge(e, t));
}
function Md(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), ac(e, t);
}
function Fd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(n), ac(e, t);
}
var sc;
sc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || ye.current) me = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return me = !1, xd(e, n, t);
    me = !!(e.flags & 131072);
  }
  else me = !1, H && n.flags & 1048576 && ps(n, qr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Ir(e, n), e = n.pendingProps;
      var l = ct(n, ue.current);
      ut(n, t), l = Ri(null, n, r, e, l, t);
      var o = ji();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, he(r) ? (o = !0, Xr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ei(n), l.updater = vl, n.stateNode = l, l._reactInternals = n, Io(n, r, e, t), n = Uo(null, n, r, !0, o, t)) : (n.tag = 0, H && o && gi(n), ae(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Ir(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Od(r), e = De(r, e), l) {
          case 0:
            n = $o(null, n, r, e, t);
            break e;
          case 1:
            n = Bu(null, n, r, e, t);
            break e;
          case 11:
            n = Uu(null, n, r, e, t);
            break e;
          case 14:
            n = Au(null, n, r, De(r.type, e), t);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), $o(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Bu(e, n, r, l, t);
    case 3:
      e: {
        if (Qs(n), e === null) throw Error(S(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, Ss(e, n), nl(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = mt(Error(S(423)), n), n = Wu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = mt(Error(S(424)), n), n = Wu(e, n, r, t, l);
          break e;
        } else for (Se = yn(n.stateNode.containerInfo.firstChild), ke = n, H = !0, Me = null, t = gs(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (ft(), r === l) {
            n = en(e, n, t);
            break e;
          }
          ae(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ks(n), e === null && Lo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, zo(r, l) ? i = null : o !== null && zo(r, o) && (n.flags |= 32), Ks(e, n), ae(e, n, i, t), n.child;
    case 6:
      return e === null && Lo(n), null;
    case 13:
      return Gs(e, n, t);
    case 4:
      return Ni(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = dt(n, null, r, t) : ae(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Uu(e, n, r, l, t);
    case 7:
      return ae(e, n, n.pendingProps, t), n.child;
    case 8:
      return ae(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ae(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, $(br, r._currentValue), r._currentValue = i, o !== null) if (Oe(o.value, i)) {
          if (o.children === l.children && !ye.current) {
            n = en(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = Xe(-1, t & -t), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), Mo(
                  o.return,
                  t,
                  n
                ), u.lanes |= t;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(S(341));
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Mo(i, t, n), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === n) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        ae(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, ut(n, t), l = ze(l), r = r(l), n.flags |= 1, ae(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = De(r, n.pendingProps), l = De(r.type, l), Au(e, n, r, l, t);
    case 15:
      return Vs(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Ir(e, n), n.tag = 1, he(r) ? (e = !0, Xr(n)) : e = !1, ut(n, t), As(n, r, l), Io(n, r, l, t), Uo(null, n, r, !0, e, t);
    case 19:
      return Ys(e, n, t);
    case 22:
      return Hs(e, n, t);
  }
  throw Error(S(156, n.tag));
};
function cc(e, n) {
  return Oa(e, n);
}
function Id(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, n, t, r) {
  return new Id(e, n, t, r);
}
function Ai(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Od(e) {
  if (typeof e == "function") return Ai(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === oi) return 11;
    if (e === ii) return 14;
  }
  return 2;
}
function Sn(e, n) {
  var t = e.alternate;
  return t === null ? (t = _e(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Ur(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Ai(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Qn:
      return Ln(t.children, l, o, n);
    case li:
      i = 8, l |= 8;
      break;
    case oo:
      return e = _e(12, t, n, l | 2), e.elementType = oo, e.lanes = o, e;
    case io:
      return e = _e(13, t, n, l), e.elementType = io, e.lanes = o, e;
    case uo:
      return e = _e(19, t, n, l), e.elementType = uo, e.lanes = o, e;
    case ka:
      return wl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case va:
          i = 10;
          break e;
        case Sa:
          i = 9;
          break e;
        case oi:
          i = 11;
          break e;
        case ii:
          i = 14;
          break e;
        case on:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return n = _e(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Ln(e, n, t, r) {
  return e = _e(7, e, r, n), e.lanes = t, e;
}
function wl(e, n, t, r) {
  return e = _e(22, e, r, n), e.elementType = ka, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Jl(e, n, t) {
  return e = _e(6, e, null, n), e.lanes = t, e;
}
function ql(e, n, t) {
  return n = _e(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function $d(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Dl(0), this.expirationTimes = Dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Bi(e, n, t, r, l, o, i, u, a) {
  return e = new $d(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = _e(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ei(o), e;
}
function Ud(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function fc(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (An(e) !== e || e.tag !== 1) throw Error(S(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (he(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (he(t)) return fs(e, t, n);
  }
  return n;
}
function dc(e, n, t, r, l, o, i, u, a) {
  return e = Bi(t, r, !0, e, l, o, i, u, a), e.context = fc(null), t = e.current, r = se(), l = vn(t), o = Xe(r, l), o.callback = n ?? null, hn(t, o, l), e.current.lanes = l, or(e, l, r), ge(e, r), e;
}
function xl(e, n, t, r) {
  var l = n.current, o = se(), i = vn(l);
  return t = fc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Xe(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = hn(l, n, i), e !== null && (Ie(e, l, i, o), Lr(e, l, i)), i;
}
function sl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Wi(e, n) {
  qu(e, n), (e = e.alternate) && qu(e, n);
}
function Ad() {
  return null;
}
var pc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vi(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Vi.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(S(409));
  xl(e, n, null, null);
};
Cl.prototype.unmount = Vi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    $n(function() {
      xl(null, e, null, null);
    }), n[qe] = null;
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ha();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < an.length && n !== 0 && n < an[t].priority; t++) ;
    an.splice(t, 0, e), t === 0 && Qa(e);
  }
};
function Hi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bu() {
}
function Bd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = sl(i);
        o.call(c);
      };
    }
    var i = dc(n, r, e, 0, null, !1, !1, "", bu);
    return e._reactRootContainer = i, e[qe] = i.current, Zt(e.nodeType === 8 ? e.parentNode : e), $n(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = sl(a);
      u.call(c);
    };
  }
  var a = Bi(e, 0, !1, null, null, !1, !1, "", bu);
  return e._reactRootContainer = a, e[qe] = a.current, Zt(e.nodeType === 8 ? e.parentNode : e), $n(function() {
    xl(n, a, t, r);
  }), a;
}
function Nl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = sl(i);
        u.call(a);
      };
    }
    xl(n, i, e, l);
  } else i = Bd(t, n, e, l, r);
  return sl(i);
}
Wa = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = jt(n.pendingLanes);
        t !== 0 && (si(n, t | 1), ge(n, Z()), !(I & 6) && (yt = Z() + 500, En()));
      }
      break;
    case 13:
      $n(function() {
        var r = be(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }), Wi(e, 1);
  }
};
ci = function(e) {
  if (e.tag === 13) {
    var n = be(e, 134217728);
    if (n !== null) {
      var t = se();
      Ie(n, e, 134217728, t);
    }
    Wi(e, 134217728);
  }
};
Va = function(e) {
  if (e.tag === 13) {
    var n = vn(e), t = be(e, n);
    if (t !== null) {
      var r = se();
      Ie(t, e, n, r);
    }
    Wi(e, n);
  }
};
Ha = function() {
  return O;
};
Ka = function(e, n) {
  var t = O;
  try {
    return O = e, n();
  } finally {
    O = t;
  }
};
vo = function(e, n, t) {
  switch (n) {
    case "input":
      if (co(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(S(90));
            xa(r), co(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ea(e, t);
      break;
    case "select":
      n = t.value, n != null && rt(e, !!t.multiple, n, !1);
  }
};
Ta = Oi;
Da = $n;
var Wd = { usingClientEntryPoint: !1, Events: [ur, Xn, yl, Ra, ja, Oi] }, Pt = { findFiberByHostInstance: Rn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vd = { bundleType: Pt.bundleType, version: Pt.version, rendererPackageName: Pt.rendererPackageName, rendererConfig: Pt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: nn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Fa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Pt.findFiberByHostInstance || Ad, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber) try {
    fl = Pr.inject(Vd), We = Pr;
  } catch {
  }
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd;
xe.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hi(n)) throw Error(S(200));
  return Ud(e, n, null, t);
};
xe.createRoot = function(e, n) {
  if (!Hi(e)) throw Error(S(299));
  var t = !1, r = "", l = pc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Bi(e, 1, !1, null, null, t, !1, r, l), e[qe] = n.current, Zt(e.nodeType === 8 ? e.parentNode : e), new Vi(n);
};
xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Fa(n), e = e === null ? null : e.stateNode, e;
};
xe.flushSync = function(e) {
  return $n(e);
};
xe.hydrate = function(e, n, t) {
  if (!El(n)) throw Error(S(200));
  return Nl(null, e, n, !0, t);
};
xe.hydrateRoot = function(e, n, t) {
  if (!Hi(e)) throw Error(S(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = pc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = dc(n, null, e, 1, t ?? null, l, !1, o, i), e[qe] = n.current, Zt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new Cl(n);
};
xe.render = function(e, n, t) {
  if (!El(n)) throw Error(S(200));
  return Nl(null, e, n, !1, t);
};
xe.unmountComponentAtNode = function(e) {
  if (!El(e)) throw Error(S(40));
  return e._reactRootContainer ? ($n(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[qe] = null;
    });
  }), !0) : !1;
};
xe.unstable_batchedUpdates = Oi;
xe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!El(t)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Nl(e, n, t, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function mc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mc);
    } catch (e) {
      console.error(e);
    }
}
mc(), ma.exports = xe;
var Hd = ma.exports, ea = Hd;
ro.createRoot = ea.createRoot, ro.hydrateRoot = ea.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = (e) => {
  const n = Qd(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bl = {
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
const Gd = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
}, Yd = F.createContext({}), Zd = () => F.useContext(Yd), Xd = F.forwardRef(
  ({ color: e, size: n, strokeWidth: t, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: y = !1,
      color: p = "currentColor",
      className: g = ""
    } = Zd() ?? {}, k = r ?? y ? Number(t ?? h) * 24 / Number(n ?? c) : t ?? h;
    return F.createElement(
      "svg",
      {
        ref: a,
        ...bl,
        width: n ?? c ?? bl.width,
        height: n ?? c ?? bl.height,
        stroke: e ?? p,
        strokeWidth: k,
        className: yc("lucide", g, l),
        ...!o && !Gd(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([w, L]) => F.createElement(w, L)),
        ...Array.isArray(o) ? o : [o]
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
const $e = (e, n) => {
  const t = F.forwardRef(
    ({ className: r, ...l }, o) => F.createElement(Xd, {
      ref: o,
      iconNode: n,
      className: yc(
        `lucide-${Kd(na(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return t.displayName = na(e), t;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], qd = $e("arrow-right", Jd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], ta = $e("arrow-up-down", bd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [
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
], np = $e("calculator", ep);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], rp = $e("check", tp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], op = $e("chevron-down", lp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], up = $e("plus", ip);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], sp = $e("refresh-cw", ap);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], fp = $e("rotate-ccw-clock", cp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], pp = $e("search", dp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [
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
], yp = $e("sparkles", mp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], gp = $e("trash-2", hp), eo = {
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
}, no = ({ options: e, value: n, onChange: t }) => {
  const [r, l] = F.useState(!1), [o, i] = F.useState(""), u = F.useRef(null), [a, c] = F.useState(!1);
  F.useEffect(() => {
    const g = (k) => {
      u.current && !u.current.contains(k.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), F.useEffect(() => {
    r && u.current && (u.current.getBoundingClientRect().right > window.innerWidth / 2 ? c(!0) : c(!1));
  }, [r]);
  const h = e.filter((g) => {
    const k = eo[g] || { name: g }, w = o.toLowerCase();
    return g.toLowerCase().includes(w) || k.name.toLowerCase().includes(w);
  }), y = eo[n] || { name: n, symbol: n }, p = n === "EUR" ? "EU" : n === "BTC" ? "⚡" : n.substring(0, 2);
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: "custom-dropdown",
      ref: u,
      style: { position: "relative", width: "auto", flexShrink: 0 },
      children: [
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            type: "button",
            className: "dropdown-trigger",
            onClick: () => l(!r),
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
              /* @__PURE__ */ m.jsx("div", { style: {
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
              }, children: p }),
              /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", textAlign: "left", minWidth: "0" }, children: [
                /* @__PURE__ */ m.jsx("span", { style: { fontWeight: 700, fontSize: "0.9rem", color: "#fafafa", lineHeight: 1 }, children: n }),
                /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "65px", marginTop: "2px" }, children: y.name })
              ] }),
              /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.8rem", color: "#a1a1aa", fontWeight: "600", marginLeft: "2px" }, children: y.symbol }),
              /* @__PURE__ */ m.jsx(op, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
            ]
          }
        ),
        r && /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: "dropdown-menu-override",
            style: {
              position: "absolute",
              top: "calc(100% + 6px)",
              right: a ? 0 : "auto",
              left: a ? "auto" : 0,
              width: "clamp(220px, 80vw, 260px)",
              maxWidth: "calc(100vw - 32px)",
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
              /* @__PURE__ */ m.jsxs("div", { style: { padding: "8px", borderBottom: "1px solid #1c1c21", position: "relative" }, children: [
                /* @__PURE__ */ m.jsx(pp, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
                /* @__PURE__ */ m.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search currency...",
                    value: o,
                    onChange: (g) => i(g.target.value),
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
              /* @__PURE__ */ m.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: "4px 0",
                maxHeight: "260px",
                overflowY: "auto"
              }, children: h.length > 0 ? h.map((g) => {
                const k = eo[g] || { name: g, symbol: g }, w = g === "EUR" ? "EU" : g === "BTC" ? "⚡" : g.substring(0, 2), L = g === n;
                return /* @__PURE__ */ m.jsxs(
                  "li",
                  {
                    onClick: () => {
                      t(g), l(!1), i("");
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      cursor: "pointer",
                      background: L ? "rgba(168, 85, 247, 0.15)" : "transparent",
                      borderLeft: L ? "2px solid #a855f7" : "2px solid transparent",
                      transition: "all 0.15s ease"
                    },
                    onMouseEnter: (f) => !L && (f.currentTarget.style.background = "rgba(255, 255, 255, 0.04)"),
                    onMouseLeave: (f) => !L && (f.currentTarget.style.background = "transparent"),
                    children: [
                      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ m.jsx("div", { style: {
                          width: "22px",
                          height: "22px",
                          borderRadius: "5px",
                          background: L ? "#a855f7" : "#1c1c21",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          fontWeight: "800",
                          color: L ? "#ffffff" : "#9ca3af"
                        }, children: w }),
                        /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                          /* @__PURE__ */ m.jsx("span", { style: { fontWeight: 600, color: L ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: g }),
                          /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: k.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ m.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: k.symbol }),
                        L && /* @__PURE__ */ m.jsx(rp, { size: 14, color: "#a855f7" })
                      ] })
                    ]
                  },
                  g
                );
              }) : /* @__PURE__ */ m.jsx("li", { style: { padding: "16px", textAlign: "center", color: "#71717a", fontSize: "0.8rem" }, children: "No matching currency" }) })
            ]
          }
        )
      ]
    }
  );
}, to = "datacore_currency_history", vp = {
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
}, Sp = ({ children: e }) => /* @__PURE__ */ m.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function kp() {
  const [e, n] = F.useState("calculator"), [t, r] = F.useState(vp), [l, o] = F.useState("USD"), [i, u] = F.useState("USD"), [a, c] = F.useState("EUR"), [h, y] = F.useState("100"), [p, g] = F.useState("100 + 50"), [k, w] = F.useState(!1), [L, f] = F.useState("50"), [s, d] = F.useState("EUR"), [v, x] = F.useState("+"), [_, N] = F.useState(null), [P, U] = F.useState(!0), [T, de] = F.useState(!1), [tn, He] = F.useState([]), sr = F.useRef(null);
  F.useEffect(() => {
    try {
      const z = localStorage.getItem(to);
      z && He(JSON.parse(z));
    } catch {
    }
  }, []);
  const Bn = ((z) => {
    try {
      if (!z || !z.trim()) return 0;
      const V = z.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!V) return 0;
      const je = Function(`"use strict"; return (${V})`)();
      return typeof je == "number" && !isNaN(je) && isFinite(je) ? je : 0;
    } catch {
      return 0;
    }
  })(p).toFixed(2), j = (() => {
    const z = parseFloat(h) || 0, V = t[i] || 1, je = t[a] || 1;
    return z / V * je;
  })().toFixed(2), W = async () => {
    de(!0);
    try {
      const z = await fetch(`https://api.exchangerate-api.com/v4/latest/${l}`);
      if (z.ok) {
        const V = await z.json();
        r(V.rates), N(/* @__PURE__ */ new Date()), U(!0);
      } else
        U(!1);
    } catch {
      U(!1);
    } finally {
      de(!1);
    }
  };
  F.useEffect(() => {
    W();
  }, [l]);
  const D = (z) => {
    if (z === "AC")
      g("");
    else if (z === "DEL")
      g((V) => V.length > 0 ? V.slice(0, -1) : "");
    else if (z === "=") {
      const V = Bn;
      g(V);
      const je = {
        id: Date.now().toString(),
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        from: l,
        expr: p,
        result: V
      };
      He((_n) => {
        const Wn = [je, ..._n.slice(0, 19)];
        try {
          localStorage.setItem(to, JSON.stringify(Wn));
        } catch {
        }
        return Wn;
      });
    } else
      g((V) => V + z);
  }, Nn = (z, V, je) => {
    const _n = parseFloat(V) || 0;
    if (_n <= 0) return;
    const Wn = t[je] || 1, Vn = t[l] || 1, _l = (_n / Wn * Vn).toFixed(2);
    g((hc) => {
      const St = hc.trim();
      return !St || St === "0" ? _l : ["+", "-", "*", "/", "×", "÷"].some((gc) => St.endsWith(gc)) ? `${St.slice(0, -1).trim()} ${z} ${_l}` : `${St} ${z} ${_l}`;
    }), w(!1);
  }, Ke = () => {
    const z = parseFloat(h) || 0;
    t[a];
    const V = t[l] || 1, _n = (z / (t[i] || 1) * V).toFixed(2);
    g((Wn) => {
      const Vn = Wn.trim();
      return !Vn || Vn === "0" ? _n : `${Vn} + ${_n}`;
    }), n("calculator");
  }, rn = Object.keys(t).sort();
  return /* @__PURE__ */ m.jsx(Sp, { children: /* @__PURE__ */ m.jsx("div", { className: "currency-app", ref: sr, style: { position: "relative" }, children: /* @__PURE__ */ m.jsxs("div", { className: "studio-card", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "studio-header", children: [
      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ m.jsx("div", { style: {
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(168, 85, 247, 0.3)"
        }, children: /* @__PURE__ */ m.jsx(yp, { size: 15, color: "#ffffff" }) }),
        /* @__PURE__ */ m.jsx("span", { style: { fontSize: "1rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }, children: "Currency Studio" })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: P ? "#4ade80" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ m.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: P ? "#22c55e" : "#f59e0b",
          boxShadow: P ? "0 0 8px #22c55e" : "none"
        } }),
        /* @__PURE__ */ m.jsx("span", { children: P ? "Online" : "Offline" })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "tab-switcher", children: [
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `tab-btn ${e === "calculator" ? "active" : ""}`,
          onClick: () => n("calculator"),
          children: [
            /* @__PURE__ */ m.jsx(np, { size: 14 }),
            " Calculator"
          ]
        }
      ),
      /* @__PURE__ */ m.jsxs(
        "button",
        {
          type: "button",
          className: `tab-btn ${e === "exchange" ? "active" : ""}`,
          onClick: () => n("exchange"),
          children: [
            /* @__PURE__ */ m.jsx(ta, { size: 14 }),
            " Currency Pair"
          ]
        }
      )
    ] }),
    e === "calculator" && /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "100%" }, children: [
      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 2px" }, children: [
        /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "Target Base Currency:" }),
        /* @__PURE__ */ m.jsx(
          no,
          {
            options: rn,
            value: l,
            onChange: o
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "calc-screen", children: [
        /* @__PURE__ */ m.jsx("div", { className: "calc-expr", children: p || "0" }),
        /* @__PURE__ */ m.jsxs("div", { className: "calc-result", children: [
          Bn,
          " ",
          /* @__PURE__ */ m.jsx("span", { style: { fontSize: "1rem", color: "#71717a", fontWeight: "600" }, children: l })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "6px", backgroundColor: "#09090b", padding: "10px", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase" }, children: "+ Currency Variables:" }),
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              type: "button",
              onClick: () => w(!k),
              style: { fontSize: "0.65rem", color: "#c084fc", background: "transparent", border: "none", cursor: "pointer", fontWeight: "700", display: "flex", alignItems: "center", gap: "3px" },
              children: [
                /* @__PURE__ */ m.jsx(up, { size: 11 }),
                " Custom Injector"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ m.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }, children: ["EUR", "USD", "JPY", "GBP", "CNY", "CAD"].map((z) => /* @__PURE__ */ m.jsxs(
          "button",
          {
            type: "button",
            onClick: () => Nn("+", 50, z),
            style: {
              padding: "4px 10px",
              borderRadius: "6px",
              backgroundColor: "rgba(34, 197, 94, 0.12)",
              color: "#4ade80",
              border: "1px solid rgba(34, 197, 94, 0.25)",
              fontSize: "0.7rem",
              fontWeight: "700",
              cursor: "pointer",
              whiteSpace: "nowrap"
            },
            children: [
              "+ 50 ",
              z
            ]
          },
          z
        )) }),
        k && /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ m.jsxs(
            "select",
            {
              value: v,
              onChange: (z) => x(z.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#c084fc", fontSize: "0.75rem", fontWeight: "800", outline: "none" },
              children: [
                /* @__PURE__ */ m.jsx("option", { value: "+", children: "+" }),
                /* @__PURE__ */ m.jsx("option", { value: "-", children: "-" }),
                /* @__PURE__ */ m.jsx("option", { value: "*", children: "×" }),
                /* @__PURE__ */ m.jsx("option", { value: "/", children: "÷" })
              ]
            }
          ),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "number",
              value: L,
              onChange: (z) => f(z.target.value),
              placeholder: "Amount",
              style: { width: "65px", background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" }
            }
          ),
          /* @__PURE__ */ m.jsx(
            "select",
            {
              value: s,
              onChange: (z) => d(z.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" },
              children: rn.map((z) => /* @__PURE__ */ m.jsx("option", { value: z, children: z }, z))
            }
          ),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              type: "button",
              onClick: () => Nn(v, L, s),
              style: { flex: 1, padding: "5px 10px", borderRadius: "6px", backgroundColor: "#a855f7", color: "#ffffff", border: "none", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" },
              children: "Inject into Formula"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "calc-keypad", children: [
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn action", onClick: () => D("AC"), children: "AC" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn action", onClick: () => D("("), children: "(" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn action", onClick: () => D(")"), children: ")" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn action", onClick: () => D("DEL"), children: "DEL" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("7"), children: "7" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("8"), children: "8" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("9"), children: "9" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn op", onClick: () => D(" / "), children: "÷" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("4"), children: "4" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("5"), children: "5" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("6"), children: "6" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn op", onClick: () => D(" * "), children: "×" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("1"), children: "1" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("2"), children: "2" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("3"), children: "3" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn op", onClick: () => D(" - "), children: "-" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("0"), children: "0" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn", onClick: () => D("."), children: "." }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn equal", onClick: () => D("="), children: "=" }),
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "key-btn op", onClick: () => D(" + "), children: "+" })
      ] })
    ] }),
    e === "exchange" && /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "14px", width: "100%" }, children: [
      /* @__PURE__ */ m.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Send / Convert:" }),
        /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ m.jsx(
            no,
            {
              options: rn,
              value: i,
              onChange: u
            }
          ),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              className: "currency-input",
              type: "number",
              value: h,
              onChange: (z) => y(z.target.value),
              placeholder: "0.00",
              style: { fontSize: "1.4rem", fontWeight: "700" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "swap-circle",
          onClick: () => {
            const z = i;
            u(a), c(z);
          },
          title: "Swap Pair",
          children: /* @__PURE__ */ m.jsx(ta, { size: 18 })
        }
      ),
      /* @__PURE__ */ m.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Receive:" }),
        /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ m.jsx(
            no,
            {
              options: rn,
              value: a,
              onChange: c
            }
          ),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: j,
              readOnly: !0,
              style: { color: "#4ade80", fontSize: "1.4rem", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", width: "100%", marginTop: "4px" }, children: [
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            type: "button",
            onClick: Ke,
            style: {
              flex: 1,
              padding: "12px",
              backgroundColor: "rgba(168, 85, 247, 0.2)",
              color: "#c084fc",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              borderRadius: "10px",
              fontWeight: "800",
              fontSize: "0.8rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            },
            children: [
              /* @__PURE__ */ m.jsx(qd, { size: 15 }),
              " Push Result (",
              j,
              " ",
              a,
              ") to Calc"
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            type: "button",
            className: "sync-btn",
            onClick: W,
            disabled: T,
            style: {
              padding: "12px 16px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            },
            children: [
              /* @__PURE__ */ m.jsx(sp, { size: 14, className: T ? "animate-spin" : "" }),
              T ? "Syncing..." : "Sync Rates"
            ]
          }
        )
      ] })
    ] }),
    tn.length > 0 && /* @__PURE__ */ m.jsxs("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ m.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ m.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ m.jsx(fp, { size: 13 }),
          "Calculation History Tape"
        ] }),
        /* @__PURE__ */ m.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              He([]), localStorage.removeItem(to);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ m.jsx(gp, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ m.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: tn.map((z) => /* @__PURE__ */ m.jsxs(
        "div",
        {
          onClick: () => {
            g(z.expr), n("calculator");
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
          title: "Click to restore into Calculator",
          children: [
            /* @__PURE__ */ m.jsxs("div", { style: { color: "#a1a1aa" }, children: [
              /* @__PURE__ */ m.jsx("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: z.expr }),
              " = ",
              /* @__PURE__ */ m.jsxs("span", { style: { color: "#4ade80", fontWeight: "700" }, children: [
                z.result,
                " ",
                z.from
              ] })
            ] }),
            /* @__PURE__ */ m.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: z.time })
          ]
        },
        z.id
      )) })
    ] })
  ] }) }) });
}
function xp(e, n) {
  if (!e) return () => {
  };
  const t = ro.createRoot(e);
  return t.render(/* @__PURE__ */ m.jsx(kp, { platformAPI: n })), () => {
    try {
      t.unmount();
    } catch {
    }
  };
}
export {
  Sp as SafeAgentLayer,
  kp as default,
  xp as mount_app
};
