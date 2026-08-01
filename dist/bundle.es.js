(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;min-height:100vh;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 52px) 12px calc(env(safe-area-inset-bottom,0px) + 24px) 12px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.studio-card{background:#121215;border:1px solid #27272a;border-radius:20px;padding:16px;width:100%;max-width:100%;box-shadow:0 20px 40px #0009;display:flex;flex-direction:column;gap:14px;position:relative;box-sizing:border-box;margin:auto 0;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:24px}.studio-card{max-width:480px;padding:24px;gap:18px}}.studio-header{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box}.tab-switcher{display:flex;background:#09090b;padding:3px;border-radius:12px;border:1px solid #27272a;width:100%;gap:4px}.tab-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 12px;border:none;border-radius:9px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s ease;color:#71717a;background:transparent}.tab-btn.active{background:#27272a;color:#fff;box-shadow:0 2px 8px #0006}.calc-screen{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;box-shadow:inset 0 2px 6px #000c;width:100%;box-sizing:border-box}.calc-expr{font-size:clamp(.85rem,3.5vw,1.05rem);color:#71717a;font-family:JetBrains Mono,monospace;word-break:break-all;min-height:24px;width:100%;text-align:right}.calc-result{font-size:clamp(1.6rem,7vw,2.4rem);font-weight:800;color:#fff;font-family:JetBrains Mono,monospace;overflow-x:auto;white-space:nowrap;line-height:1.1;width:100%;text-align:right;scrollbar-width:none}.calc-result::-webkit-scrollbar{display:none}.calc-keypad{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%;box-sizing:border-box}.key-btn{padding:14px 10px;border-radius:10px;border:1px solid #27272a;background:#18181b;color:#fff;font-size:clamp(1.05rem,4vw,1.25rem);font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;-webkit-user-select:none;user-select:none;box-shadow:0 2px 6px #0000004d}.key-btn:active{transform:scale(.95);background:#27272a}.key-btn.op{background:#27272a;color:#fff;border-color:#3f3f46;font-weight:800}.key-btn.op:active{background:#3f3f46}.key-btn.action{background:#18181b;color:#a1a1aa;border-color:#27272a;font-size:.85rem;font-weight:700}.key-btn.equal{background:#3f3f46;color:#fff;border-color:#52525b;font-weight:800;box-shadow:0 4px 12px #0006}.key-btn.equal:active{background:#52525b}.pair-box{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:8px;width:100%;box-sizing:border-box}.swap-circle{background:#18181b;border:1px solid #27272a;color:#a1a1aa;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-6px 0;z-index:2;box-shadow:0 4px 12px #00000080}.swap-circle:hover{background:#27272a;color:#fff;transform:rotate(180deg)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Ea = { exports: {} }, xl = {}, Na = { exports: {} }, F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr = Symbol.for("react.element"), tf = Symbol.for("react.portal"), nf = Symbol.for("react.fragment"), rf = Symbol.for("react.strict_mode"), lf = Symbol.for("react.profiler"), of = Symbol.for("react.provider"), uf = Symbol.for("react.context"), af = Symbol.for("react.forward_ref"), sf = Symbol.for("react.suspense"), cf = Symbol.for("react.memo"), ff = Symbol.for("react.lazy"), du = Symbol.iterator;
function df(e) {
  return e === null || typeof e != "object" ? null : (e = du && e[du] || e["@@iterator"], typeof e == "function" ? e : null);
}
var _a = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Pa = Object.assign, Ra = {};
function Sn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ra, this.updater = n || _a;
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function za() {
}
za.prototype = Sn.prototype;
function ci(e, t, n) {
  this.props = e, this.context = t, this.refs = Ra, this.updater = n || _a;
}
var fi = ci.prototype = new za();
fi.constructor = ci;
Pa(fi, Sn.prototype);
fi.isPureReactComponent = !0;
var pu = Array.isArray, ja = Object.prototype.hasOwnProperty, di = { current: null }, Da = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ta(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ja.call(t, r) && !Da.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: dr, type: e, key: o, ref: i, props: l, _owner: di.current };
}
function pf(e, t) {
  return { $$typeof: dr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function pi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dr;
}
function mf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var mu = /\/+/g;
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? mf("" + e.key) : t.toString(36);
}
function Or(e, t, n, r, l) {
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
        case dr:
        case tf:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Ul(i, 0) : r, pu(l) ? (n = "", e != null && (n = e.replace(mu, "$&/") + "/"), Or(l, t, n, "", function(c) {
    return c;
  })) : l != null && (pi(l) && (l = pf(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(mu, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", pu(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Ul(o, u);
    i += Or(o, t, n, a, l);
  }
  else if (a = df(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Ul(o, u++), i += Or(o, t, n, a, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Or(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function hf(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null }, Ar = { transition: null }, yf = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: Ar, ReactCurrentOwner: di };
function La() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = { map: Sr, forEach: function(e, t, n) {
  Sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!pi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
F.Component = Sn;
F.Fragment = nf;
F.Profiler = lf;
F.PureComponent = ci;
F.StrictMode = rf;
F.Suspense = sf;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yf;
F.act = La;
F.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Pa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = di.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) ja.call(t, a) && !Da.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: dr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
F.createContext = function(e) {
  return e = { $$typeof: uf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: of, _context: e }, e.Consumer = e;
};
F.createElement = Ta;
F.createFactory = function(e) {
  var t = Ta.bind(null, e);
  return t.type = e, t;
};
F.createRef = function() {
  return { current: null };
};
F.forwardRef = function(e) {
  return { $$typeof: af, render: e };
};
F.isValidElement = pi;
F.lazy = function(e) {
  return { $$typeof: ff, _payload: { _status: -1, _result: e }, _init: hf };
};
F.memo = function(e, t) {
  return { $$typeof: cf, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function(e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
F.unstable_act = La;
F.useCallback = function(e, t) {
  return ye.current.useCallback(e, t);
};
F.useContext = function(e) {
  return ye.current.useContext(e);
};
F.useDebugValue = function() {
};
F.useDeferredValue = function(e) {
  return ye.current.useDeferredValue(e);
};
F.useEffect = function(e, t) {
  return ye.current.useEffect(e, t);
};
F.useId = function() {
  return ye.current.useId();
};
F.useImperativeHandle = function(e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function(e, t) {
  return ye.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function(e, t) {
  return ye.current.useLayoutEffect(e, t);
};
F.useMemo = function(e, t) {
  return ye.current.useMemo(e, t);
};
F.useReducer = function(e, t, n) {
  return ye.current.useReducer(e, t, n);
};
F.useRef = function(e) {
  return ye.current.useRef(e);
};
F.useState = function(e) {
  return ye.current.useState(e);
};
F.useSyncExternalStore = function(e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function() {
  return ye.current.useTransition();
};
F.version = "18.3.1";
Na.exports = F;
var j = Na.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf = j, vf = Symbol.for("react.element"), xf = Symbol.for("react.fragment"), Sf = Object.prototype.hasOwnProperty, kf = gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ma(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Sf.call(t, r) && !wf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: vf, type: e, key: o, ref: i, props: l, _owner: kf.current };
}
xl.Fragment = xf;
xl.jsx = Ma;
xl.jsxs = Ma;
Ea.exports = xl;
var p = Ea.exports, go = {}, Ia = { exports: {} }, ze = {}, Fa = { exports: {} }, Oa = {};
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
  function t(E, D) {
    var L = E.length;
    E.push(D);
    e: for (; 0 < L; ) {
      var K = L - 1 >>> 1, ee = E[K];
      if (0 < l(ee, D)) E[K] = D, E[L] = ee, L = K;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var D = E[0], L = E.pop();
    if (L !== D) {
      E[0] = L;
      e: for (var K = 0, ee = E.length, Kt = ee >>> 1; K < Kt; ) {
        var Oe = 2 * (K + 1) - 1, Rt = E[Oe], Ae = Oe + 1, zt = E[Ae];
        if (0 > l(Rt, L)) Ae < ee && 0 > l(zt, Rt) ? (E[K] = zt, E[Ae] = L, K = Ae) : (E[K] = Rt, E[Oe] = L, K = Oe);
        else if (Ae < ee && 0 > l(zt, L)) E[K] = zt, E[Ae] = L, K = Ae;
        else break e;
      }
    }
    return D;
  }
  function l(E, D) {
    var L = E.sortIndex - D.sortIndex;
    return L !== 0 ? L : E.id - D.id;
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
  var a = [], c = [], y = 1, h = null, m = 3, v = !1, k = !1, w = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= E) r(c), D.sortIndex = D.expirationTime, t(a, D);
      else break;
      D = n(c);
    }
  }
  function x(E) {
    if (w = !1, d(E), !k) if (n(a) !== null) k = !0, Vt(N);
    else {
      var D = n(c);
      D !== null && En(x, D.startTime - E);
    }
  }
  function N(E, D) {
    k = !1, w && (w = !1, f(z), z = -1), v = !0;
    var L = m;
    try {
      for (d(D), h = n(a); h !== null && (!(h.expirationTime > D) || E && !Ee()); ) {
        var K = h.callback;
        if (typeof K == "function") {
          h.callback = null, m = h.priorityLevel;
          var ee = K(h.expirationTime <= D);
          D = e.unstable_now(), typeof ee == "function" ? h.callback = ee : h === n(a) && r(a), d(D);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Kt = !0;
      else {
        var Oe = n(c);
        Oe !== null && En(x, Oe.startTime - D), Kt = !1;
      }
      return Kt;
    } finally {
      h = null, m = L, v = !1;
    }
  }
  var C = !1, P = null, z = -1, B = 5, I = -1;
  function Ee() {
    return !(e.unstable_now() - I < B);
  }
  function oe() {
    if (P !== null) {
      var E = e.unstable_now();
      I = E;
      var D = !0;
      try {
        D = P(!0, E);
      } finally {
        D ? ut() : (C = !1, P = null);
      }
    } else C = !1;
  }
  var ut;
  if (typeof s == "function") ut = function() {
    s(oe);
  };
  else if (typeof MessageChannel < "u") {
    var Cn = new MessageChannel(), gr = Cn.port2;
    Cn.port1.onmessage = oe, ut = function() {
      gr.postMessage(null);
    };
  } else ut = function() {
    T(oe, 0);
  };
  function Vt(E) {
    P = E, C || (C = !0, ut());
  }
  function En(E, D) {
    z = T(function() {
      E(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    k || v || (k = !0, Vt(N));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(E) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = m;
    }
    var L = m;
    m = D;
    try {
      return E();
    } finally {
      m = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, D) {
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
    var L = m;
    m = E;
    try {
      return D();
    } finally {
      m = L;
    }
  }, e.unstable_scheduleCallback = function(E, D, L) {
    var K = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? K + L : K) : L = K, E) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = L + ee, E = { id: y++, callback: D, priorityLevel: E, startTime: L, expirationTime: ee, sortIndex: -1 }, L > K ? (E.sortIndex = L, t(c, E), n(a) === null && E === n(c) && (w ? (f(z), z = -1) : w = !0, En(x, L - K))) : (E.sortIndex = ee, t(a, E), k || v || (k = !0, Vt(N))), E;
  }, e.unstable_shouldYield = Ee, e.unstable_wrapCallback = function(E) {
    var D = m;
    return function() {
      var L = m;
      m = D;
      try {
        return E.apply(this, arguments);
      } finally {
        m = L;
      }
    };
  };
})(Oa);
Fa.exports = Oa;
var Cf = Fa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef = j, Re = Cf;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Aa = /* @__PURE__ */ new Set(), Xn = {};
function Wt(e, t) {
  pn(e, t), pn(e + "Capture", t);
}
function pn(e, t) {
  for (Xn[e] = t, e = 0; e < t.length; e++) Aa.add(t[e]);
}
var nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vo = Object.prototype.hasOwnProperty, Nf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, hu = {}, yu = {};
function _f(e) {
  return vo.call(yu, e) ? !0 : vo.call(hu, e) ? !1 : Nf.test(e) ? yu[e] = !0 : (hu[e] = !0, !1);
}
function Pf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rf(e, t, n, r) {
  if (t === null || typeof t > "u" || Pf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ge(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ae[e] = new ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ae[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ae[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ae[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ae[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ae[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ae[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ae[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ae[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mi = /[\-:]([a-z])/g;
function hi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    mi,
    hi
  );
  ae[t] = new ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(mi, hi);
  ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(mi, hi);
  ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yi(e, t, n, r) {
  var l = ae.hasOwnProperty(t) ? ae[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rf(t, n, l, r) && (n = null), r || l === null ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var it = Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kr = Symbol.for("react.element"), Yt = Symbol.for("react.portal"), Xt = Symbol.for("react.fragment"), gi = Symbol.for("react.strict_mode"), xo = Symbol.for("react.profiler"), Ua = Symbol.for("react.provider"), $a = Symbol.for("react.context"), vi = Symbol.for("react.forward_ref"), So = Symbol.for("react.suspense"), ko = Symbol.for("react.suspense_list"), xi = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Ba = Symbol.for("react.offscreen"), gu = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != "object" ? null : (e = gu && e[gu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, $l;
function In(e) {
  if ($l === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    $l = t && t[1] || "";
  }
  return `
` + $l + e;
}
var Bl = !1;
function Wl(e, t) {
  if (!e || Bl) return "";
  Bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
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
    Bl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? In(e) : "";
}
function zf(e) {
  switch (e.tag) {
    case 5:
      return In(e.type);
    case 16:
      return In("Lazy");
    case 13:
      return In("Suspense");
    case 19:
      return In("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Wl(e.type, !1), e;
    case 11:
      return e = Wl(e.type.render, !1), e;
    case 1:
      return e = Wl(e.type, !0), e;
    default:
      return "";
  }
}
function wo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xt:
      return "Fragment";
    case Yt:
      return "Portal";
    case xo:
      return "Profiler";
    case gi:
      return "StrictMode";
    case So:
      return "Suspense";
    case ko:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case $a:
      return (e.displayName || "Context") + ".Consumer";
    case Ua:
      return (e._context.displayName || "Context") + ".Provider";
    case vi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case xi:
      return t = e.displayName || null, t !== null ? t : wo(e.type) || "Memo";
    case st:
      t = e._payload, e = e._init;
      try {
        return wo(e(t));
      } catch {
      }
  }
  return null;
}
function jf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wo(t);
    case 8:
      return t === gi ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ct(e) {
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
function Wa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Df(e) {
  var t = Wa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function wr(e) {
  e._valueTracker || (e._valueTracker = Df(e));
}
function Ha(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Wa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Co(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ct(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Va(e, t) {
  t = t.checked, t != null && yi(e, "checked", t, !1);
}
function Eo(e, t) {
  Va(e, t);
  var n = Ct(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? No(e, t.type, n) : t.hasOwnProperty("defaultValue") && No(e, t.type, Ct(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function xu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function No(e, t, n) {
  (t !== "number" || Xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
function un(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Su(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ct(n) };
}
function Ka(e, t) {
  var n = Ct(t.value), r = Ct(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ku(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Qa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cr, Ga = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Cr = Cr || document.createElement("div"), Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Zn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Un = {
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
}, Tf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Un).forEach(function(e) {
  Tf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Un[t] = Un[e];
  });
});
function Ya(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px";
}
function Xa(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ya(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Lf = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ro(e, t) {
  if (t) {
    if (Lf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function zo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var jo = null;
function Si(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Do = null, an = null, sn = null;
function wu(e) {
  if (e = hr(e)) {
    if (typeof Do != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = El(t), Do(e.stateNode, e.type, t));
  }
}
function Za(e) {
  an ? sn ? sn.push(e) : sn = [e] : an = e;
}
function Ja() {
  if (an) {
    var e = an, t = sn;
    if (sn = an = null, wu(e), t) for (e = 0; e < t.length; e++) wu(t[e]);
  }
}
function qa(e, t) {
  return e(t);
}
function ba() {
}
var Hl = !1;
function es(e, t, n) {
  if (Hl) return e(t, n);
  Hl = !0;
  try {
    return qa(e, t, n);
  } finally {
    Hl = !1, (an !== null || sn !== null) && (ba(), Ja());
  }
}
function Jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = El(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var To = !1;
if (nt) try {
  var Pn = {};
  Object.defineProperty(Pn, "passive", { get: function() {
    To = !0;
  } }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
} catch {
  To = !1;
}
function Mf(e, t, n, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (y) {
    this.onError(y);
  }
}
var $n = !1, Zr = null, Jr = !1, Lo = null, If = { onError: function(e) {
  $n = !0, Zr = e;
} };
function Ff(e, t, n, r, l, o, i, u, a) {
  $n = !1, Zr = null, Mf.apply(If, arguments);
}
function Of(e, t, n, r, l, o, i, u, a) {
  if (Ff.apply(this, arguments), $n) {
    if ($n) {
      var c = Zr;
      $n = !1, Zr = null;
    } else throw Error(S(198));
    Jr || (Jr = !0, Lo = c);
  }
}
function Ht(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ts(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cu(e) {
  if (Ht(e) !== e) throw Error(S(188));
}
function Af(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ht(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Cu(l), e;
        if (o === r) return Cu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function ns(e) {
  return e = Af(e), e !== null ? rs(e) : null;
}
function rs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = rs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ls = Re.unstable_scheduleCallback, Eu = Re.unstable_cancelCallback, Uf = Re.unstable_shouldYield, $f = Re.unstable_requestPaint, Z = Re.unstable_now, Bf = Re.unstable_getCurrentPriorityLevel, ki = Re.unstable_ImmediatePriority, os = Re.unstable_UserBlockingPriority, qr = Re.unstable_NormalPriority, Wf = Re.unstable_LowPriority, is = Re.unstable_IdlePriority, Sl = null, Xe = null;
function Hf(e) {
  if (Xe && typeof Xe.onCommitFiberRoot == "function") try {
    Xe.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var He = Math.clz32 ? Math.clz32 : Qf, Vf = Math.log, Kf = Math.LN2;
function Qf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Vf(e) / Kf | 0) | 0;
}
var Er = 64, Nr = 4194304;
function On(e) {
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
function br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = On(u) : (o &= i, o !== 0 && (r = On(o)));
  } else i = n & ~l, i !== 0 ? r = On(i) : o !== 0 && (r = On(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - He(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Gf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Yf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - He(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & n) || u & r) && (l[i] = Gf(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Mo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function us() {
  var e = Er;
  return Er <<= 1, !(Er & 4194240) && (Er = 64), e;
}
function Vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - He(t), e[t] = n;
}
function Xf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - He(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function wi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - He(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var A = 0;
function as(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ss, Ci, cs, fs, ds, Io = !1, _r = [], ht = null, yt = null, gt = null, qn = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), ft = [], Zf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Nu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bn.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = hr(t), t !== null && Ci(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Jf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = Rn(ht, e, t, n, r, l), !0;
    case "dragenter":
      return yt = Rn(yt, e, t, n, r, l), !0;
    case "mouseover":
      return gt = Rn(gt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return qn.set(o, Rn(qn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, bn.set(o, Rn(bn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ps(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ts(n), t !== null) {
          e.blockedOn = t, ds(e.priority, function() {
            cs(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ur(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      jo = r, n.target.dispatchEvent(r), jo = null;
    } else return t = hr(n), t !== null && Ci(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function _u(e, t, n) {
  Ur(e) && n.delete(t);
}
function qf() {
  Io = !1, ht !== null && Ur(ht) && (ht = null), yt !== null && Ur(yt) && (yt = null), gt !== null && Ur(gt) && (gt = null), qn.forEach(_u), bn.forEach(_u);
}
function zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Io || (Io = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, qf)));
}
function er(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < _r.length) {
    zn(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ht !== null && zn(ht, e), yt !== null && zn(yt, e), gt !== null && zn(gt, e), qn.forEach(t), bn.forEach(t), n = 0; n < ft.length; n++) r = ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && (n = ft[0], n.blockedOn === null); ) ps(n), n.blockedOn === null && ft.shift();
}
var cn = it.ReactCurrentBatchConfig, el = !0;
function bf(e, t, n, r) {
  var l = A, o = cn.transition;
  cn.transition = null;
  try {
    A = 1, Ei(e, t, n, r);
  } finally {
    A = l, cn.transition = o;
  }
}
function ed(e, t, n, r) {
  var l = A, o = cn.transition;
  cn.transition = null;
  try {
    A = 4, Ei(e, t, n, r);
  } finally {
    A = l, cn.transition = o;
  }
}
function Ei(e, t, n, r) {
  if (el) {
    var l = Fo(e, t, n, r);
    if (l === null) eo(e, t, r, tl, n), Nu(e, r);
    else if (Jf(l, e, t, n, r)) r.stopPropagation();
    else if (Nu(e, r), t & 4 && -1 < Zf.indexOf(e)) {
      for (; l !== null; ) {
        var o = hr(l);
        if (o !== null && ss(o), o = Fo(e, t, n, r), o === null && eo(e, t, r, tl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else eo(e, t, r, null, n);
  }
}
var tl = null;
function Fo(e, t, n, r) {
  if (tl = null, e = Si(r), e = Tt(e), e !== null) if (t = Ht(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = ts(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return tl = e, null;
}
function ms(e) {
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
      switch (Bf()) {
        case ki:
          return 1;
        case os:
          return 4;
        case qr:
        case Wf:
          return 16;
        case is:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null, Ni = null, $r = null;
function hs() {
  if ($r) return $r;
  var e, t = Ni, n = t.length, r, l = "value" in pt ? pt.value : pt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return $r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Br(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Pr() {
  return !0;
}
function Pu() {
  return !1;
}
function je(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pr : Pu, this.isPropagationStopped = Pu, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pr);
  }, persist: function() {
  }, isPersistent: Pr }), t;
}
var kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _i = je(kn), mr = Y({}, kn, { view: 0, detail: 0 }), td = je(mr), Kl, Ql, jn, kl = Y({}, mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (Kl = e.screenX - jn.screenX, Ql = e.screenY - jn.screenY) : Ql = Kl = 0, jn = e), Kl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ql;
} }), Ru = je(kl), nd = Y({}, kl, { dataTransfer: 0 }), rd = je(nd), ld = Y({}, mr, { relatedTarget: 0 }), Gl = je(ld), od = Y({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), id = je(od), ud = Y({}, kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ad = je(ud), sd = Y({}, kn, { data: 0 }), zu = je(sd), cd = {
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
}, fd = {
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
}, dd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function pd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dd[e]) ? !!t[e] : !1;
}
function Pi() {
  return pd;
}
var md = Y({}, mr, { key: function(e) {
  if (e.key) {
    var t = cd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Br(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pi, charCode: function(e) {
  return e.type === "keypress" ? Br(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hd = je(md), yd = Y({}, kl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ju = je(yd), gd = Y({}, mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pi }), vd = je(gd), xd = Y({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sd = je(xd), kd = Y({}, kl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), wd = je(kd), Cd = [9, 13, 27, 32], Ri = nt && "CompositionEvent" in window, Bn = null;
nt && "documentMode" in document && (Bn = document.documentMode);
var Ed = nt && "TextEvent" in window && !Bn, ys = nt && (!Ri || Bn && 8 < Bn && 11 >= Bn), Du = " ", Tu = !1;
function gs(e, t) {
  switch (e) {
    case "keyup":
      return Cd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function vs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function Nd(e, t) {
  switch (e) {
    case "compositionend":
      return vs(t);
    case "keypress":
      return t.which !== 32 ? null : (Tu = !0, Du);
    case "textInput":
      return e = t.data, e === Du && Tu ? null : e;
    default:
      return null;
  }
}
function _d(e, t) {
  if (Zt) return e === "compositionend" || !Ri && gs(e, t) ? (e = hs(), $r = Ni = pt = null, Zt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ys && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pd[e.type] : t === "textarea";
}
function xs(e, t, n, r) {
  Za(r), t = nl(t, "onChange"), 0 < t.length && (n = new _i("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Wn = null, tr = null;
function Rd(e) {
  js(e, 0);
}
function wl(e) {
  var t = bt(e);
  if (Ha(t)) return e;
}
function zd(e, t) {
  if (e === "change") return t;
}
var Ss = !1;
if (nt) {
  var Yl;
  if (nt) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var Mu = document.createElement("div");
      Mu.setAttribute("oninput", "return;"), Xl = typeof Mu.oninput == "function";
    }
    Yl = Xl;
  } else Yl = !1;
  Ss = Yl && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  Wn && (Wn.detachEvent("onpropertychange", ks), tr = Wn = null);
}
function ks(e) {
  if (e.propertyName === "value" && wl(tr)) {
    var t = [];
    xs(t, tr, e, Si(e)), es(Rd, t);
  }
}
function jd(e, t, n) {
  e === "focusin" ? (Iu(), Wn = t, tr = n, Wn.attachEvent("onpropertychange", ks)) : e === "focusout" && Iu();
}
function Dd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return wl(tr);
}
function Td(e, t) {
  if (e === "click") return wl(t);
}
function Ld(e, t) {
  if (e === "input" || e === "change") return wl(t);
}
function Md(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ke = typeof Object.is == "function" ? Object.is : Md;
function nr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vo.call(t, l) || !Ke(e[l], t[l])) return !1;
  }
  return !0;
}
function Fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ou(e, t) {
  var n = Fu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fu(n);
  }
}
function ws(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ws(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Cs() {
  for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xr(e.document);
  }
  return t;
}
function zi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Id(e) {
  var t = Cs(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ws(n.ownerDocument.documentElement, n)) {
    if (r !== null && zi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ou(n, o);
        var i = Ou(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Fd = nt && "documentMode" in document && 11 >= document.documentMode, Jt = null, Oo = null, Hn = null, Ao = !1;
function Au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao || Jt == null || Jt !== Xr(r) || (r = Jt, "selectionStart" in r && zi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hn && nr(Hn, r) || (Hn = r, r = nl(Oo, "onSelect"), 0 < r.length && (t = new _i("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jt)));
}
function Rr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qt = { animationend: Rr("Animation", "AnimationEnd"), animationiteration: Rr("Animation", "AnimationIteration"), animationstart: Rr("Animation", "AnimationStart"), transitionend: Rr("Transition", "TransitionEnd") }, Zl = {}, Es = {};
nt && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete qt.animationend.animation, delete qt.animationiteration.animation, delete qt.animationstart.animation), "TransitionEvent" in window || delete qt.transitionend.transition);
function Cl(e) {
  if (Zl[e]) return Zl[e];
  if (!qt[e]) return e;
  var t = qt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Es) return Zl[e] = t[n];
  return e;
}
var Ns = Cl("animationend"), _s = Cl("animationiteration"), Ps = Cl("animationstart"), Rs = Cl("transitionend"), zs = /* @__PURE__ */ new Map(), Uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Nt(e, t) {
  zs.set(e, t), Wt(t, [e]);
}
for (var Jl = 0; Jl < Uu.length; Jl++) {
  var ql = Uu[Jl], Od = ql.toLowerCase(), Ad = ql[0].toUpperCase() + ql.slice(1);
  Nt(Od, "on" + Ad);
}
Nt(Ns, "onAnimationEnd");
Nt(_s, "onAnimationIteration");
Nt(Ps, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(Rs, "onTransitionEnd");
pn("onMouseEnter", ["mouseout", "mouseover"]);
pn("onMouseLeave", ["mouseout", "mouseover"]);
pn("onPointerEnter", ["pointerout", "pointerover"]);
pn("onPointerLeave", ["pointerout", "pointerover"]);
Wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ud = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Of(r, t, void 0, e), e.currentTarget = null;
}
function js(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        $u(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        $u(l, u, c), o = a;
      }
    }
  }
  if (Jr) throw e = Lo, Jr = !1, Lo = null, e;
}
function W(e, t) {
  var n = t[Ho];
  n === void 0 && (n = t[Ho] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ds(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ds(n, e, r, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
  if (!e[zr]) {
    e[zr] = !0, Aa.forEach(function(n) {
      n !== "selectionchange" && (Ud.has(n) || bl(n, !1, e), bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || (t[zr] = !0, bl("selectionchange", !1, t));
  }
}
function Ds(e, t, n, r) {
  switch (ms(t)) {
    case 1:
      var l = bf;
      break;
    case 4:
      l = ed;
      break;
    default:
      l = Ei;
  }
  n = l.bind(null, t, n, e), l = void 0, !To || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function eo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
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
        if (i = Tt(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  es(function() {
    var c = o, y = Si(n), h = [];
    e: {
      var m = zs.get(e);
      if (m !== void 0) {
        var v = _i, k = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = hd;
            break;
          case "focusin":
            k = "focus", v = Gl;
            break;
          case "focusout":
            k = "blur", v = Gl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Gl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ru;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = rd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = vd;
            break;
          case Ns:
          case _s:
          case Ps:
            v = id;
            break;
          case Rs:
            v = Sd;
            break;
          case "scroll":
            v = td;
            break;
          case "wheel":
            v = wd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ad;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ju;
        }
        var w = (t & 4) !== 0, T = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var x = d.stateNode;
          if (d.tag === 5 && x !== null && (d = x, f !== null && (x = Jn(s, f), x != null && w.push(lr(s, x, d)))), T) break;
          s = s.return;
        }
        0 < w.length && (m = new v(m, k, null, n, y), h.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== jo && (k = n.relatedTarget || n.fromElement) && (Tt(k) || k[rt])) break e;
        if ((v || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (k = n.relatedTarget || n.toElement, v = c, k = k ? Tt(k) : null, k !== null && (T = Ht(k), k !== T || k.tag !== 5 && k.tag !== 6) && (k = null)) : (v = null, k = c), v !== k)) {
          if (w = Ru, x = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = ju, x = "onPointerLeave", f = "onPointerEnter", s = "pointer"), T = v == null ? m : bt(v), d = k == null ? m : bt(k), m = new w(x, s + "leave", v, n, y), m.target = T, m.relatedTarget = d, x = null, Tt(y) === c && (w = new w(f, s + "enter", k, n, y), w.target = d, w.relatedTarget = T, x = w), T = x, v && k) t: {
            for (w = v, f = k, s = 0, d = w; d; d = Gt(d)) s++;
            for (d = 0, x = f; x; x = Gt(x)) d++;
            for (; 0 < s - d; ) w = Gt(w), s--;
            for (; 0 < d - s; ) f = Gt(f), d--;
            for (; s--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = Gt(w), f = Gt(f);
            }
            w = null;
          }
          else w = null;
          v !== null && Bu(h, m, v, w, !1), k !== null && T !== null && Bu(h, T, k, w, !0);
        }
      }
      e: {
        if (m = c ? bt(c) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var N = zd;
        else if (Lu(m)) if (Ss) N = Ld;
        else {
          N = Dd;
          var C = jd;
        }
        else (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Td);
        if (N && (N = N(e, c))) {
          xs(h, N, n, y);
          break e;
        }
        C && C(e, m, c), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && No(m, "number", m.value);
      }
      switch (C = c ? bt(c) : window, e) {
        case "focusin":
          (Lu(C) || C.contentEditable === "true") && (Jt = C, Oo = c, Hn = null);
          break;
        case "focusout":
          Hn = Oo = Jt = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ao = !1, Au(h, n, y);
          break;
        case "selectionchange":
          if (Fd) break;
        case "keydown":
        case "keyup":
          Au(h, n, y);
      }
      var P;
      if (Ri) e: {
        switch (e) {
          case "compositionstart":
            var z = "onCompositionStart";
            break e;
          case "compositionend":
            z = "onCompositionEnd";
            break e;
          case "compositionupdate":
            z = "onCompositionUpdate";
            break e;
        }
        z = void 0;
      }
      else Zt ? gs(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (ys && n.locale !== "ko" && (Zt || z !== "onCompositionStart" ? z === "onCompositionEnd" && Zt && (P = hs()) : (pt = y, Ni = "value" in pt ? pt.value : pt.textContent, Zt = !0)), C = nl(c, z), 0 < C.length && (z = new zu(z, e, null, n, y), h.push({ event: z, listeners: C }), P ? z.data = P : (P = vs(n), P !== null && (z.data = P)))), (P = Ed ? Nd(e, n) : _d(e, n)) && (c = nl(c, "onBeforeInput"), 0 < c.length && (y = new zu("onBeforeInput", "beforeinput", null, n, y), h.push({ event: y, listeners: c }), y.data = P));
    }
    js(h, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Jn(e, n), o != null && r.unshift(lr(e, o, l)), o = Jn(e, t), o != null && r.push(lr(e, o, l))), e = e.return;
  }
  return r;
}
function Gt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Jn(n, o), a != null && i.unshift(lr(n, a, u))) : l || (a = Jn(n, o), a != null && i.push(lr(n, a, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var $d = /\r\n?/g, Bd = /\u0000|\uFFFD/g;
function Wu(e) {
  return (typeof e == "string" ? e : "" + e).replace($d, `
`).replace(Bd, "");
}
function jr(e, t, n) {
  if (t = Wu(t), Wu(e) !== t && n) throw Error(S(425));
}
function rl() {
}
var Uo = null, $o = null;
function Bo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Wo = typeof setTimeout == "function" ? setTimeout : void 0, Wd = typeof clearTimeout == "function" ? clearTimeout : void 0, Hu = typeof Promise == "function" ? Promise : void 0, Hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hu < "u" ? function(e) {
  return Hu.resolve(null).then(e).catch(Vd);
} : Wo;
function Vd(e) {
  setTimeout(function() {
    throw e;
  });
}
function to(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), er(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  er(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wn = Math.random().toString(36).slice(2), Ye = "__reactFiber$" + wn, or = "__reactProps$" + wn, rt = "__reactContainer$" + wn, Ho = "__reactEvents$" + wn, Kd = "__reactListeners$" + wn, Qd = "__reactHandles$" + wn;
function Tt(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[rt] || n[Ye]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Vu(e); e !== null; ) {
        if (n = e[Ye]) return n;
        e = Vu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function hr(e) {
  return e = e[Ye] || e[rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function El(e) {
  return e[or] || null;
}
var Vo = [], en = -1;
function _t(e) {
  return { current: e };
}
function H(e) {
  0 > en || (e.current = Vo[en], Vo[en] = null, en--);
}
function $(e, t) {
  en++, Vo[en] = e.current, e.current = t;
}
var Et = {}, pe = _t(Et), Se = _t(!1), Ot = Et;
function mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Et;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function ll() {
  H(Se), H(pe);
}
function Ku(e, t, n) {
  if (pe.current !== Et) throw Error(S(168));
  $(pe, t), $(Se, n);
}
function Ts(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, jf(e) || "Unknown", l));
  return Y({}, n, r);
}
function ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Et, Ot = pe.current, $(pe, e), $(Se, Se.current), !0;
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Ts(e, t, Ot), r.__reactInternalMemoizedMergedChildContext = e, H(Se), H(pe), $(pe, e)) : H(Se), $(Se, n);
}
var qe = null, Nl = !1, no = !1;
function Ls(e) {
  qe === null ? qe = [e] : qe.push(e);
}
function Gd(e) {
  Nl = !0, Ls(e);
}
function Pt() {
  if (!no && qe !== null) {
    no = !0;
    var e = 0, t = A;
    try {
      var n = qe;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qe = null, Nl = !1;
    } catch (l) {
      throw qe !== null && (qe = qe.slice(e + 1)), ls(ki, Pt), l;
    } finally {
      A = t, no = !1;
    }
  }
  return null;
}
var tn = [], nn = 0, il = null, ul = 0, De = [], Te = 0, At = null, be = 1, et = "";
function jt(e, t) {
  tn[nn++] = ul, tn[nn++] = il, il = e, ul = t;
}
function Ms(e, t, n) {
  De[Te++] = be, De[Te++] = et, De[Te++] = At, At = e;
  var r = be;
  e = et;
  var l = 32 - He(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - He(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, be = 1 << 32 - He(t) + l | n << l | r, et = o + e;
  } else be = 1 << o | n << l | r, et = e;
}
function ji(e) {
  e.return !== null && (jt(e, 1), Ms(e, 1, 0));
}
function Di(e) {
  for (; e === il; ) il = tn[--nn], tn[nn] = null, ul = tn[--nn], tn[nn] = null;
  for (; e === At; ) At = De[--Te], De[Te] = null, et = De[--Te], De[Te] = null, be = De[--Te], De[Te] = null;
}
var Pe = null, _e = null, V = !1, We = null;
function Is(e, t) {
  var n = Le(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Gu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pe = e, _e = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pe = e, _e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: be, overflow: et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Le(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pe = e, _e = null, !0) : !1;
    default:
      return !1;
  }
}
function Ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qo(e) {
  if (V) {
    var t = _e;
    if (t) {
      var n = t;
      if (!Gu(e, t)) {
        if (Ko(e)) throw Error(S(418));
        t = vt(n.nextSibling);
        var r = Pe;
        t && Gu(e, t) ? Is(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, Pe = e);
      }
    } else {
      if (Ko(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, V = !1, Pe = e;
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Pe = e;
}
function Dr(e) {
  if (e !== Pe) return !1;
  if (!V) return Yu(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps)), t && (t = _e)) {
    if (Ko(e)) throw Fs(), Error(S(418));
    for (; t; ) Is(e, t), t = vt(t.nextSibling);
  }
  if (Yu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = vt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Pe ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Fs() {
  for (var e = _e; e; ) e = vt(e.nextSibling);
}
function hn() {
  _e = Pe = null, V = !1;
}
function Ti(e) {
  We === null ? We = [e] : We.push(e);
}
var Yd = it.ReactCurrentBatchConfig;
function Dn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Tr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Xu(e) {
  var t = e._init;
  return t(e._payload);
}
function Os(e) {
  function t(f, s) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [s], f.flags |= 16) : d.push(s);
    }
  }
  function n(f, s) {
    if (!e) return null;
    for (; s !== null; ) t(f, s), s = s.sibling;
    return null;
  }
  function r(f, s) {
    for (f = /* @__PURE__ */ new Map(); s !== null; ) s.key !== null ? f.set(s.key, s) : f.set(s.index, s), s = s.sibling;
    return f;
  }
  function l(f, s) {
    return f = wt(f, s), f.index = 0, f.sibling = null, f;
  }
  function o(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, x) {
    return s === null || s.tag !== 6 ? (s = so(d, f.mode, x), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, x) {
    var N = d.type;
    return N === Xt ? y(f, s, d.props.children, x, d.key) : s !== null && (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === st && Xu(N) === s.type) ? (x = l(s, d.props), x.ref = Dn(f, s, d), x.return = f, x) : (x = Yr(d.type, d.key, d.props, null, f.mode, x), x.ref = Dn(f, s, d), x.return = f, x);
  }
  function c(f, s, d, x) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = co(d, f.mode, x), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function y(f, s, d, x, N) {
    return s === null || s.tag !== 7 ? (s = Ft(d, f.mode, x, N), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function h(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = so("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case kr:
          return d = Yr(s.type, s.key, s.props, null, f.mode, d), d.ref = Dn(f, null, s), d.return = f, d;
        case Yt:
          return s = co(s, f.mode, d), s.return = f, s;
        case st:
          var x = s._init;
          return h(f, x(s._payload), d);
      }
      if (Fn(s) || _n(s)) return s = Ft(s, f.mode, d, null), s.return = f, s;
      Tr(f, s);
    }
    return null;
  }
  function m(f, s, d, x) {
    var N = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return N !== null ? null : u(f, s, "" + d, x);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case kr:
          return d.key === N ? a(f, s, d, x) : null;
        case Yt:
          return d.key === N ? c(f, s, d, x) : null;
        case st:
          return N = d._init, m(
            f,
            s,
            N(d._payload),
            x
          );
      }
      if (Fn(d) || _n(d)) return N !== null ? null : y(f, s, d, x, null);
      Tr(f, d);
    }
    return null;
  }
  function v(f, s, d, x, N) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return f = f.get(d) || null, u(s, f, "" + x, N);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case kr:
          return f = f.get(x.key === null ? d : x.key) || null, a(s, f, x, N);
        case Yt:
          return f = f.get(x.key === null ? d : x.key) || null, c(s, f, x, N);
        case st:
          var C = x._init;
          return v(f, s, d, C(x._payload), N);
      }
      if (Fn(x) || _n(x)) return f = f.get(d) || null, y(s, f, x, N, null);
      Tr(s, x);
    }
    return null;
  }
  function k(f, s, d, x) {
    for (var N = null, C = null, P = s, z = s = 0, B = null; P !== null && z < d.length; z++) {
      P.index > z ? (B = P, P = null) : B = P.sibling;
      var I = m(f, P, d[z], x);
      if (I === null) {
        P === null && (P = B);
        break;
      }
      e && P && I.alternate === null && t(f, P), s = o(I, s, z), C === null ? N = I : C.sibling = I, C = I, P = B;
    }
    if (z === d.length) return n(f, P), V && jt(f, z), N;
    if (P === null) {
      for (; z < d.length; z++) P = h(f, d[z], x), P !== null && (s = o(P, s, z), C === null ? N = P : C.sibling = P, C = P);
      return V && jt(f, z), N;
    }
    for (P = r(f, P); z < d.length; z++) B = v(P, f, z, d[z], x), B !== null && (e && B.alternate !== null && P.delete(B.key === null ? z : B.key), s = o(B, s, z), C === null ? N = B : C.sibling = B, C = B);
    return e && P.forEach(function(Ee) {
      return t(f, Ee);
    }), V && jt(f, z), N;
  }
  function w(f, s, d, x) {
    var N = _n(d);
    if (typeof N != "function") throw Error(S(150));
    if (d = N.call(d), d == null) throw Error(S(151));
    for (var C = N = null, P = s, z = s = 0, B = null, I = d.next(); P !== null && !I.done; z++, I = d.next()) {
      P.index > z ? (B = P, P = null) : B = P.sibling;
      var Ee = m(f, P, I.value, x);
      if (Ee === null) {
        P === null && (P = B);
        break;
      }
      e && P && Ee.alternate === null && t(f, P), s = o(Ee, s, z), C === null ? N = Ee : C.sibling = Ee, C = Ee, P = B;
    }
    if (I.done) return n(
      f,
      P
    ), V && jt(f, z), N;
    if (P === null) {
      for (; !I.done; z++, I = d.next()) I = h(f, I.value, x), I !== null && (s = o(I, s, z), C === null ? N = I : C.sibling = I, C = I);
      return V && jt(f, z), N;
    }
    for (P = r(f, P); !I.done; z++, I = d.next()) I = v(P, f, z, I.value, x), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? z : I.key), s = o(I, s, z), C === null ? N = I : C.sibling = I, C = I);
    return e && P.forEach(function(oe) {
      return t(f, oe);
    }), V && jt(f, z), N;
  }
  function T(f, s, d, x) {
    if (typeof d == "object" && d !== null && d.type === Xt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case kr:
          e: {
            for (var N = d.key, C = s; C !== null; ) {
              if (C.key === N) {
                if (N = d.type, N === Xt) {
                  if (C.tag === 7) {
                    n(f, C.sibling), s = l(C, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === st && Xu(N) === C.type) {
                  n(f, C.sibling), s = l(C, d.props), s.ref = Dn(f, C, d), s.return = f, f = s;
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Xt ? (s = Ft(d.props.children, f.mode, x, d.key), s.return = f, f = s) : (x = Yr(d.type, d.key, d.props, null, f.mode, x), x.ref = Dn(f, s, d), x.return = f, f = x);
          }
          return i(f);
        case Yt:
          e: {
            for (C = d.key; s !== null; ) {
              if (s.key === C) if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                n(f, s.sibling), s = l(s, d.children || []), s.return = f, f = s;
                break e;
              } else {
                n(f, s);
                break;
              }
              else t(f, s);
              s = s.sibling;
            }
            s = co(d, f.mode, x), s.return = f, f = s;
          }
          return i(f);
        case st:
          return C = d._init, T(f, s, C(d._payload), x);
      }
      if (Fn(d)) return k(f, s, d, x);
      if (_n(d)) return w(f, s, d, x);
      Tr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (n(f, s.sibling), s = l(s, d), s.return = f, f = s) : (n(f, s), s = so(d, f.mode, x), s.return = f, f = s), i(f)) : n(f, s);
  }
  return T;
}
var yn = Os(!0), As = Os(!1), al = _t(null), sl = null, rn = null, Li = null;
function Mi() {
  Li = rn = sl = null;
}
function Ii(e) {
  var t = al.current;
  H(al), e._currentValue = t;
}
function Go(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function fn(e, t) {
  sl = e, Li = rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), e.firstContext = null);
}
function Ie(e) {
  var t = e._currentValue;
  if (Li !== e) if (e = { context: e, memoizedValue: t, next: null }, rn === null) {
    if (sl === null) throw Error(S(308));
    rn = e, sl.dependencies = { lanes: 0, firstContext: e };
  } else rn = rn.next = e;
  return t;
}
var Lt = null;
function Fi(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function Us(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Fi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, lt(e, r);
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function Oi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function $s(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, O & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, lt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Fi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, lt(e, n);
}
function Wr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wi(e, n);
  }
}
function Zu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function cl(e, t, n, r) {
  var l = e.updateQueue;
  ct = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, c = a.next;
    a.next = null, i === null ? o = c : i.next = c, i = a;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = c : u.next = c, y.lastBaseUpdate = a));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, y = c = a = null, u = o;
    do {
      var m = u.lane, v = u.eventTime;
      if ((r & m) === m) {
        y !== null && (y = y.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var k = e, w = u;
          switch (m = t, v = n, w.tag) {
            case 1:
              if (k = w.payload, typeof k == "function") {
                h = k.call(v, h, m);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = w.payload, m = typeof k == "function" ? k.call(v, h, m) : k, m == null) break e;
              h = Y({}, h, m);
              break e;
            case 2:
              ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else v = { eventTime: v, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (c = y = v, a = h) : y = y.next = v, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (a = h), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    $t |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Ju(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var yr = {}, Ze = _t(yr), ir = _t(yr), ur = _t(yr);
function Mt(e) {
  if (e === yr) throw Error(S(174));
  return e;
}
function Ai(e, t) {
  switch ($(ur, t), $(ir, e), $(Ze, yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Po(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Po(t, e);
  }
  H(Ze), $(Ze, t);
}
function gn() {
  H(Ze), H(ir), H(ur);
}
function Bs(e) {
  Mt(ur.current);
  var t = Mt(Ze.current), n = Po(t, e.type);
  t !== n && ($(ir, e), $(Ze, n));
}
function Ui(e) {
  ir.current === e && (H(Ze), H(ir));
}
var Q = _t(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ro = [];
function $i() {
  for (var e = 0; e < ro.length; e++) ro[e]._workInProgressVersionPrimary = null;
  ro.length = 0;
}
var Hr = it.ReactCurrentDispatcher, lo = it.ReactCurrentBatchConfig, Ut = 0, G = null, te = null, re = null, dl = !1, Vn = !1, ar = 0, Xd = 0;
function ce() {
  throw Error(S(321));
}
function Bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function Wi(e, t, n, r, l, o) {
  if (Ut = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hr.current = e === null || e.memoizedState === null ? bd : ep, e = n(r, l), Vn) {
    o = 0;
    do {
      if (Vn = !1, ar = 0, 25 <= o) throw Error(S(301));
      o += 1, re = te = null, t.updateQueue = null, Hr.current = tp, e = n(r, l);
    } while (Vn);
  }
  if (Hr.current = pl, t = te !== null && te.next !== null, Ut = 0, re = te = G = null, dl = !1, t) throw Error(S(300));
  return e;
}
function Hi() {
  var e = ar !== 0;
  return ar = 0, e;
}
function Ge() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? G.memoizedState = re = e : re = re.next = e, re;
}
function Fe() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? G.memoizedState : re.next;
  if (t !== null) re = t, te = e;
  else {
    if (e === null) throw Error(S(310));
    te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, re === null ? G.memoizedState = re = e : re = re.next = e;
  }
  return re;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oo(e) {
  var t = Fe(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = te, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, a = null, c = o;
    do {
      var y = c.lane;
      if ((Ut & y) === y) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: y,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = h, i = r) : a = a.next = h, G.lanes |= y, $t |= y;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, Ke(r, t.memoizedState) || (xe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, G.lanes |= o, $t |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function io(e) {
  var t = Fe(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ke(o, t.memoizedState) || (xe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ws() {
}
function Hs(e, t) {
  var n = G, r = Fe(), l = t(), o = !Ke(r.memoizedState, l);
  if (o && (r.memoizedState = l, xe = !0), r = r.queue, Vi(Qs.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || re !== null && re.memoizedState.tag & 1) {
    if (n.flags |= 2048, cr(9, Ks.bind(null, n, r, l, t), void 0, null), le === null) throw Error(S(349));
    Ut & 30 || Vs(n, t, l);
  }
  return l;
}
function Vs(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ks(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Gs(t) && Ys(e);
}
function Qs(e, t, n) {
  return n(function() {
    Gs(t) && Ys(e);
  });
}
function Gs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function Ys(e) {
  var t = lt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function qu(e) {
  var t = Ge();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = qd.bind(null, G, e), [t.memoizedState, e];
}
function cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Xs() {
  return Fe().memoizedState;
}
function Vr(e, t, n, r) {
  var l = Ge();
  G.flags |= e, l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function _l(e, t, n, r) {
  var l = Fe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var i = te.memoizedState;
    if (o = i.destroy, r !== null && Bi(r, i.deps)) {
      l.memoizedState = cr(t, n, o, r);
      return;
    }
  }
  G.flags |= e, l.memoizedState = cr(1 | t, n, o, r);
}
function bu(e, t) {
  return Vr(8390656, 8, e, t);
}
function Vi(e, t) {
  return _l(2048, 8, e, t);
}
function Zs(e, t) {
  return _l(4, 2, e, t);
}
function Js(e, t) {
  return _l(4, 4, e, t);
}
function qs(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function bs(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _l(4, 4, qs.bind(null, t, e), n);
}
function Ki() {
}
function ec(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function tc(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function nc(e, t, n) {
  return Ut & 21 ? (Ke(n, t) || (n = us(), G.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xe = !0), e.memoizedState = n);
}
function Zd(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = lo.transition;
  lo.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, lo.transition = r;
  }
}
function rc() {
  return Fe().memoizedState;
}
function Jd(e, t, n) {
  var r = kt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, lc(e)) oc(t, n);
  else if (n = Us(e, t, n, r), n !== null) {
    var l = he();
    Ve(n, e, r, l), ic(n, t, r);
  }
}
function qd(e, t, n) {
  var r = kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lc(e)) oc(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ke(u, i)) {
        var a = t.interleaved;
        a === null ? (l.next = l, Fi(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Us(e, t, l, r), n !== null && (l = he(), Ve(n, e, r, l), ic(n, t, r));
  }
}
function lc(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function oc(e, t) {
  Vn = dl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wi(e, n);
  }
}
var pl = { readContext: Ie, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useInsertionEffect: ce, useLayoutEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useMutableSource: ce, useSyncExternalStore: ce, useId: ce, unstable_isNewReconciler: !1 }, bd = { readContext: Ie, useCallback: function(e, t) {
  return Ge().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ie, useEffect: bu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vr(
    4194308,
    4,
    qs.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Vr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ge();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ge();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Jd.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ge();
  return e = { current: e }, t.memoizedState = e;
}, useState: qu, useDebugValue: Ki, useDeferredValue: function(e) {
  return Ge().memoizedState = e;
}, useTransition: function() {
  var e = qu(!1), t = e[0];
  return e = Zd.bind(null, e[1]), Ge().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, l = Ge();
  if (V) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(S(349));
    Ut & 30 || Vs(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, bu(Qs.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, cr(9, Ks.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ge(), t = le.identifierPrefix;
  if (V) {
    var n = et, r = be;
    n = (r & ~(1 << 32 - He(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Xd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ep = {
  readContext: Ie,
  useCallback: ec,
  useContext: Ie,
  useEffect: Vi,
  useImperativeHandle: bs,
  useInsertionEffect: Zs,
  useLayoutEffect: Js,
  useMemo: tc,
  useReducer: oo,
  useRef: Xs,
  useState: function() {
    return oo(sr);
  },
  useDebugValue: Ki,
  useDeferredValue: function(e) {
    var t = Fe();
    return nc(t, te.memoizedState, e);
  },
  useTransition: function() {
    var e = oo(sr)[0], t = Fe().memoizedState;
    return [e, t];
  },
  useMutableSource: Ws,
  useSyncExternalStore: Hs,
  useId: rc,
  unstable_isNewReconciler: !1
}, tp = { readContext: Ie, useCallback: ec, useContext: Ie, useEffect: Vi, useImperativeHandle: bs, useInsertionEffect: Zs, useLayoutEffect: Js, useMemo: tc, useReducer: io, useRef: Xs, useState: function() {
  return io(sr);
}, useDebugValue: Ki, useDeferredValue: function(e) {
  var t = Fe();
  return te === null ? t.memoizedState = e : nc(t, te.memoizedState, e);
}, useTransition: function() {
  var e = io(sr)[0], t = Fe().memoizedState;
  return [e, t];
}, useMutableSource: Ws, useSyncExternalStore: Hs, useId: rc, unstable_isNewReconciler: !1 };
function $e(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ht(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = he(), l = kt(e), o = tt(r, l);
  o.payload = t, n != null && (o.callback = n), t = xt(e, o, l), t !== null && (Ve(t, e, l, r), Wr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = he(), l = kt(e), o = tt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = xt(e, o, l), t !== null && (Ve(t, e, l, r), Wr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = he(), r = kt(e), l = tt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = xt(e, l, r), t !== null && (Ve(t, e, r, n), Wr(t, e, r));
} };
function ea(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !nr(n, r) || !nr(l, o) : !0;
}
function uc(e, t, n) {
  var r = !1, l = Et, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ie(o) : (l = ke(t) ? Ot : pe.current, r = t.contextTypes, o = (r = r != null) ? mn(e, l) : Et), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ta(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function Xo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Oi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ie(o) : (o = ke(t) ? Ot : pe.current, l.context = mn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Yo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Pl.enqueueReplaceState(l, l.state, null), cl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += zf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var np = typeof WeakMap == "function" ? WeakMap : Map;
function ac(e, t, n) {
  n = tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    hl || (hl = !0, ii = r), Zo(e, t);
  }, n;
}
function sc(e, t, n) {
  n = tt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Zo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Zo(e, t), typeof r != "function" && (St === null ? St = /* @__PURE__ */ new Set([this]) : St.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function na(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new np();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = yp.bind(null, e, t, n), t.then(e, e));
}
function ra(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function la(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = tt(-1, 1), t.tag = 2, xt(n, t, 1))), n.lanes |= 1), e);
}
var rp = it.ReactCurrentOwner, xe = !1;
function me(e, t, n, r) {
  t.child = e === null ? As(t, null, n, r) : yn(t, e.child, n, r);
}
function oa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return fn(t, l), r = Wi(e, t, n, r, o, l), n = Hi(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (V && n && ji(t), t.flags |= 1, me(e, t, r, l), t.child);
}
function ia(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !bi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, cc(e, t, o, r, l)) : (e = Yr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : nr, n(i, r) && e.ref === t.ref) return ot(e, t, l);
  }
  return t.flags |= 1, e = wt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function cc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (nr(o, r) && e.ref === t.ref) if (xe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (xe = !0);
    else return t.lanes = e.lanes, ot(e, t, l);
  }
  return Jo(e, t, n, r, l);
}
function fc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(on, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $(on, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, $(on, Ne), Ne |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(on, Ne), Ne |= r;
  return me(e, t, l, n), t.child;
}
function dc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Jo(e, t, n, r, l) {
  var o = ke(n) ? Ot : pe.current;
  return o = mn(t, o), fn(t, l), n = Wi(e, t, n, r, o, l), r = Hi(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ot(e, t, l)) : (V && r && ji(t), t.flags |= 1, me(e, t, n, l), t.child);
}
function ua(e, t, n, r, l) {
  if (ke(n)) {
    var o = !0;
    ol(t);
  } else o = !1;
  if (fn(t, l), t.stateNode === null) Kr(e, t), uc(t, n, r), Xo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var a = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ie(c) : (c = ke(n) ? Ot : pe.current, c = mn(t, c));
    var y = n.getDerivedStateFromProps, h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && ta(t, i, r, c), ct = !1;
    var m = t.memoizedState;
    i.state = m, cl(t, r, i, l), a = t.memoizedState, u !== r || m !== a || Se.current || ct ? (typeof y == "function" && (Yo(t, n, y, r), a = t.memoizedState), (u = ct || ea(t, n, u, r, m, a, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, $s(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : $e(t.type, u), i.props = c, h = t.pendingProps, m = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ie(a) : (a = ke(n) ? Ot : pe.current, a = mn(t, a));
    var v = n.getDerivedStateFromProps;
    (y = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== a) && ta(t, i, r, a), ct = !1, m = t.memoizedState, i.state = m, cl(t, r, i, l);
    var k = t.memoizedState;
    u !== h || m !== k || Se.current || ct ? (typeof v == "function" && (Yo(t, n, v, r), k = t.memoizedState), (c = ct || ea(t, n, c, r, m, k, a) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return qo(e, t, n, r, o, l);
}
function qo(e, t, n, r, l, o) {
  dc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Qu(t, n, !1), ot(e, t, o);
  r = t.stateNode, rp.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = yn(t, e.child, null, o), t.child = yn(t, null, u, o)) : me(e, t, u, o), t.memoizedState = r.state, l && Qu(t, n, !0), t.child;
}
function pc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ku(e, t.context, !1), Ai(e, t.containerInfo);
}
function aa(e, t, n, r, l) {
  return hn(), Ti(l), t.flags |= 256, me(e, t, n, r), t.child;
}
var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ei(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mc(e, t, n) {
  var r = t.pendingProps, l = Q.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(Q, l & 1), e === null)
    return Qo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = jl(i, r, 0, null), e = Ft(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ei(n), t.memoizedState = bo, e) : Qi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return lp(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = wt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = wt(u, o) : (o = Ft(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ei(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = bo, r;
  }
  return o = e.child, e = o.sibling, r = wt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qi(e, t) {
  return t = jl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Lr(e, t, n, r) {
  return r !== null && Ti(r), yn(t, e.child, null, n), e = Qi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function lp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = uo(Error(S(422))), Lr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = jl({ mode: "visible", children: r.children }, l, 0, null), o = Ft(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && yn(t, e.child, null, i), t.child.memoizedState = ei(i), t.memoizedState = bo, o);
  if (!(t.mode & 1)) return Lr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = uo(o, r, void 0), Lr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, xe || u) {
    if (r = le, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, lt(e, l), Ve(r, e, l, -1));
    }
    return qi(), r = uo(Error(S(421))), Lr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, _e = vt(l.nextSibling), Pe = t, V = !0, We = null, e !== null && (De[Te++] = be, De[Te++] = et, De[Te++] = At, be = e.id, et = e.overflow, At = t), t = Qi(t, r.children), t.flags |= 4096, t);
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Go(e.return, t, n);
}
function ao(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function hc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (me(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
      else if (e.tag === 19) sa(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if ($(Q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && fl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ao(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && fl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ao(t, !0, n, null, o);
      break;
    case "together":
      ao(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Kr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $t |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = wt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function op(e, t, n) {
  switch (t.tag) {
    case 3:
      pc(t), hn();
      break;
    case 5:
      Bs(t);
      break;
    case 1:
      ke(t.type) && ol(t);
      break;
    case 4:
      Ai(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      $(al, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mc(e, t, n) : ($(Q, Q.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
      $(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return hc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(Q, Q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fc(e, t, n);
  }
  return ot(e, t, n);
}
var yc, ti, gc, vc;
yc = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
ti = function() {
};
gc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Mt(Ze.current);
    var o = null;
    switch (n) {
      case "input":
        l = Co(e, l), r = Co(e, r), o = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = _o(e, l), r = _o(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rl);
    }
    Ro(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Xn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Xn.hasOwnProperty(c) ? (a != null && c === "onScroll" && W("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
vc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!V) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ip(e, t, n) {
  var r = t.pendingProps;
  switch (Di(t), t.tag) {
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
      return fe(t), null;
    case 1:
      return ke(t.type) && ll(), fe(t), null;
    case 3:
      return r = t.stateNode, gn(), H(Se), H(pe), $i(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Dr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, We !== null && (si(We), We = null))), ti(e, t), fe(t), null;
    case 5:
      Ui(t);
      var l = Mt(ur.current);
      if (n = t.type, e !== null && t.stateNode != null) gc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return fe(t), null;
        }
        if (e = Mt(Ze.current), Dr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ye] = t, r[or] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) W(An[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W(
                "error",
                r
              ), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              vu(r, o), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, W("invalid", r);
              break;
            case "textarea":
              Su(r, o), W("invalid", r);
          }
          Ro(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && jr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && jr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Xn.hasOwnProperty(i) && u != null && i === "onScroll" && W("scroll", r);
          }
          switch (n) {
            case "input":
              wr(r), xu(r, o, !0);
              break;
            case "textarea":
              wr(r), ku(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = rl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ye] = t, e[or] = r, yc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = zo(n, r), n) {
              case "dialog":
                W("cancel", e), W("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) W(An[l], e);
                l = r;
                break;
              case "source":
                W("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                W(
                  "error",
                  e
                ), W("load", e), l = r;
                break;
              case "details":
                W("toggle", e), l = r;
                break;
              case "input":
                vu(e, r), l = Co(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                Su(e, r), l = _o(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            Ro(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Xa(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ga(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Zn(e, a) : typeof a == "number" && Zn(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Xn.hasOwnProperty(o) ? a != null && o === "onScroll" && W("scroll", e) : a != null && yi(e, o, a, i));
            }
            switch (n) {
              case "input":
                wr(e), xu(e, r, !1);
                break;
              case "textarea":
                wr(e), ku(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ct(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? un(e, !!r.multiple, o, !1) : r.defaultValue != null && un(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = rl);
            }
            switch (n) {
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
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Mt(ur.current), Mt(Ze.current), Dr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ye] = t, (o = r.nodeValue !== n) && (e = Pe, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ye] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (H(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && _e !== null && t.mode & 1 && !(t.flags & 128)) Fs(), hn(), t.flags |= 98560, o = !1;
        else if (o = Dr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Ye] = t;
          } else hn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), o = !1;
        } else We !== null && (si(We), We = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? ne === 0 && (ne = 3) : qi())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return gn(), ti(e, t), e === null && rr(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return Ii(t.type._context), fe(t), null;
    case 17:
      return ke(t.type) && ll(), fe(t), null;
    case 19:
      if (H(Q), o = t.memoizedState, o === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Tn(o, !1);
      else {
        if (ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = fl(e), i !== null) {
            for (t.flags |= 128, Tn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return $(Q, Q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Z() > xn && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return fe(t), null;
        } else 2 * Z() - o.renderingStartTime > xn && n !== 1073741824 && (t.flags |= 128, r = !0, Tn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = Q.current, $(Q, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Ji(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function up(e, t) {
  switch (Di(t), t.tag) {
    case 1:
      return ke(t.type) && ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gn(), H(Se), H(pe), $i(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ui(t), null;
    case 13:
      if (H(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        hn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Q), null;
    case 4:
      return gn(), null;
    case 10:
      return Ii(t.type._context), null;
    case 22:
    case 23:
      return Ji(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1, de = !1, ap = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function ni(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ca = !1;
function sp(e, t) {
  if (Uo = el, e = Cs(), zi(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, a = -1, c = 0, y = 0, h = e, m = null;
        t: for (; ; ) {
          for (var v; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (a = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (v = h.firstChild) !== null; )
            m = h, h = v;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++c === l && (u = i), m === o && ++y === r && (a = i), (v = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = v;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($o = { focusedElem: e, selectionRange: n }, el = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
  else for (; _ !== null; ) {
    t = _;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var w = k.memoizedProps, T = k.memoizedState, f = t.stateNode, s = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : $e(t.type, w), T);
            f.__reactInternalSnapshotBeforeUpdate = s;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
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
    } catch (x) {
      X(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, _ = e;
      break;
    }
    _ = t.return;
  }
  return k = ca, ca = !1, k;
}
function Kn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && ni(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Rl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ri(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function xc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ye], delete t[or], delete t[Ho], delete t[Kd], delete t[Qd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fa(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && (e = e.child, e !== null)) for (li(e, t, n), e = e.sibling; e !== null; ) li(e, t, n), e = e.sibling;
}
function oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), e = e.sibling;
}
var ie = null, Be = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) kc(e, t, n), n = n.sibling;
}
function kc(e, t, n) {
  if (Xe && typeof Xe.onCommitFiberUnmount == "function") try {
    Xe.onCommitFiberUnmount(Sl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      de || ln(n, t);
    case 6:
      var r = ie, l = Be;
      ie = null, at(e, t, n), ie = r, Be = l, ie !== null && (Be ? (e = ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null && (Be ? (e = ie, n = n.stateNode, e.nodeType === 8 ? to(e.parentNode, n) : e.nodeType === 1 && to(e, n), er(e)) : to(ie, n.stateNode));
      break;
    case 4:
      r = ie, l = Be, ie = n.stateNode.containerInfo, Be = !0, at(e, t, n), ie = r, Be = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && ni(n, t, i), l = l.next;
        } while (l !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (!de && (ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        X(n, t, u);
      }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, at(e, t, n), de = r) : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function da(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ap()), t.forEach(function(r) {
      var l = vp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ie = u.stateNode, Be = !1;
            break e;
          case 3:
            ie = u.stateNode.containerInfo, Be = !0;
            break e;
          case 4:
            ie = u.stateNode.containerInfo, Be = !0;
            break e;
        }
        u = u.return;
      }
      if (ie === null) throw Error(S(160));
      kc(o, i, l), ie = null, Be = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      X(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) wc(t, e), t = t.sibling;
}
function wc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ue(t, e), Qe(e), r & 4) {
        try {
          Kn(3, e, e.return), Rl(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          Kn(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      Ue(t, e), Qe(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if (Ue(t, e), Qe(e), r & 512 && n !== null && ln(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Zn(l, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Va(l, o), zo(u, i);
          var c = zo(u, o);
          for (i = 0; i < a.length; i += 2) {
            var y = a[i], h = a[i + 1];
            y === "style" ? Xa(l, h) : y === "dangerouslySetInnerHTML" ? Ga(l, h) : y === "children" ? Zn(l, h) : yi(l, y, h, c);
          }
          switch (u) {
            case "input":
              Eo(l, o);
              break;
            case "textarea":
              Ka(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var v = o.value;
              v != null ? un(l, !!o.multiple, v, !1) : m !== !!o.multiple && (o.defaultValue != null ? un(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : un(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[or] = o;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Ue(t, e), Qe(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Ue(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        er(t.containerInfo);
      } catch (w) {
        X(e, e.return, w);
      }
      break;
    case 4:
      Ue(t, e), Qe(e);
      break;
    case 13:
      Ue(t, e), Qe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Xi = Z())), r & 4 && da(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (c = de) || y, Ue(t, e), de = c) : Ue(t, e), Qe(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !y && e.mode & 1) for (_ = e, y = e.child; y !== null; ) {
          for (h = _ = y; _ !== null; ) {
            switch (m = _, v = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Kn(4, m, m.return);
                break;
              case 1:
                ln(m, m.return);
                var k = m.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (w) {
                    X(r, n, w);
                  }
                }
                break;
              case 5:
                ln(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  ma(h);
                  continue;
                }
            }
            v !== null ? (v.return = m, _ = v) : ma(h);
          }
          y = y.sibling;
        }
        e: for (y = null, h = e; ; ) {
          if (h.tag === 5) {
            if (y === null) {
              y = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, a = h.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Ya("display", i));
              } catch (w) {
                X(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (y === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (w) {
              X(e, e.return, w);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            y === h && (y = null), h = h.return;
          }
          y === h && (y = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Ue(t, e), Qe(e), r & 4 && da(e);
      break;
    case 21:
      break;
    default:
      Ue(
        t,
        e
      ), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Zn(l, ""), r.flags &= -33);
          var o = fa(e);
          oi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = fa(e);
          li(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cp(e, t, n) {
  _ = e, Cc(e);
}
function Cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Mr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || de;
        u = Mr;
        var c = de;
        if (Mr = i, (de = a) && !c) for (_ = l; _ !== null; ) i = _, a = i.child, i.tag === 22 && i.memoizedState !== null ? ha(l) : a !== null ? (a.return = i, _ = a) : ha(l);
        for (; o !== null; ) _ = o, Cc(o), o = o.sibling;
        _ = l, Mr = u, de = c;
      }
      pa(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : pa(e);
  }
}
function pa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            de || Rl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !de) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : $e(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ju(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Ju(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var y = c.memoizedState;
                if (y !== null) {
                  var h = y.dehydrated;
                  h !== null && er(h);
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
        de || t.flags & 512 && ri(t);
      } catch (m) {
        X(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function ma(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function ha(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rl(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, l, a);
            }
          }
          var o = t.return;
          try {
            ri(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ri(t);
          } catch (a) {
            X(t, i, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, _ = u;
      break;
    }
    _ = t.return;
  }
}
var fp = Math.ceil, ml = it.ReactCurrentDispatcher, Gi = it.ReactCurrentOwner, Me = it.ReactCurrentBatchConfig, O = 0, le = null, b = null, ue = 0, Ne = 0, on = _t(0), ne = 0, fr = null, $t = 0, zl = 0, Yi = 0, Qn = null, ve = null, Xi = 0, xn = 1 / 0, Je = null, hl = !1, ii = null, St = null, Ir = !1, mt = null, yl = 0, Gn = 0, ui = null, Qr = -1, Gr = 0;
function he() {
  return O & 6 ? Z() : Qr !== -1 ? Qr : Qr = Z();
}
function kt(e) {
  return e.mode & 1 ? O & 2 && ue !== 0 ? ue & -ue : Yd.transition !== null ? (Gr === 0 && (Gr = us()), Gr) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ms(e.type)), e) : 1;
}
function Ve(e, t, n, r) {
  if (50 < Gn) throw Gn = 0, ui = null, Error(S(185));
  pr(e, n, r), (!(O & 2) || e !== le) && (e === le && (!(O & 2) && (zl |= n), ne === 4 && dt(e, ue)), we(e, r), n === 1 && O === 0 && !(t.mode & 1) && (xn = Z() + 500, Nl && Pt()));
}
function we(e, t) {
  var n = e.callbackNode;
  Yf(e, t);
  var r = br(e, e === le ? ue : 0);
  if (r === 0) n !== null && Eu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Eu(n), t === 1) e.tag === 0 ? Gd(ya.bind(null, e)) : Ls(ya.bind(null, e)), Hd(function() {
      !(O & 6) && Pt();
    }), n = null;
    else {
      switch (as(r)) {
        case 1:
          n = ki;
          break;
        case 4:
          n = os;
          break;
        case 16:
          n = qr;
          break;
        case 536870912:
          n = is;
          break;
        default:
          n = qr;
      }
      n = Dc(n, Ec.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ec(e, t) {
  if (Qr = -1, Gr = 0, O & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = br(e, e === le ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var o = _c();
    (le !== e || ue !== t) && (Je = null, xn = Z() + 500, It(e, t));
    do
      try {
        mp();
        break;
      } catch (u) {
        Nc(e, u);
      }
    while (!0);
    Mi(), ml.current = o, O = l, b !== null ? t = 0 : (le = null, ue = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (l = Mo(e), l !== 0 && (r = l, t = ai(e, l))), t === 1) throw n = fr, It(e, 0), dt(e, r), we(e, Z()), n;
    if (t === 6) dt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !dp(l) && (t = gl(e, r), t === 2 && (o = Mo(e), o !== 0 && (r = o, t = ai(e, o))), t === 1)) throw n = fr, It(e, 0), dt(e, r), we(e, Z()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Dt(e, ve, Je);
          break;
        case 3:
          if (dt(e, r), (r & 130023424) === r && (t = Xi + 500 - Z(), 10 < t)) {
            if (br(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              he(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Wo(Dt.bind(null, e, ve, Je), t);
            break;
          }
          Dt(e, ve, Je);
          break;
        case 4:
          if (dt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - He(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Wo(Dt.bind(null, e, ve, Je), r);
            break;
          }
          Dt(e, ve, Je);
          break;
        case 5:
          Dt(e, ve, Je);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return we(e, Z()), e.callbackNode === n ? Ec.bind(null, e) : null;
}
function ai(e, t) {
  var n = Qn;
  return e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256), e = gl(e, t), e !== 2 && (t = ve, ve = n, t !== null && si(t)), e;
}
function si(e) {
  ve === null ? ve = e : ve.push.apply(ve, e);
}
function dp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ke(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function dt(e, t) {
  for (t &= ~Yi, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - He(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ya(e) {
  if (O & 6) throw Error(S(327));
  dn();
  var t = br(e, 0);
  if (!(t & 1)) return we(e, Z()), null;
  var n = gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mo(e);
    r !== 0 && (t = r, n = ai(e, r));
  }
  if (n === 1) throw n = fr, It(e, 0), dt(e, t), we(e, Z()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, ve, Je), we(e, Z()), null;
}
function Zi(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    O = n, O === 0 && (xn = Z() + 500, Nl && Pt());
  }
}
function Bt(e) {
  mt !== null && mt.tag === 0 && !(O & 6) && dn();
  var t = O;
  O |= 1;
  var n = Me.transition, r = A;
  try {
    if (Me.transition = null, A = 1, e) return e();
  } finally {
    A = r, Me.transition = n, O = t, !(O & 6) && Pt();
  }
}
function Ji() {
  Ne = on.current, H(on);
}
function It(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Wd(n)), b !== null) for (n = b.return; n !== null; ) {
    var r = n;
    switch (Di(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ll();
        break;
      case 3:
        gn(), H(Se), H(pe), $i();
        break;
      case 5:
        Ui(r);
        break;
      case 4:
        gn();
        break;
      case 13:
        H(Q);
        break;
      case 19:
        H(Q);
        break;
      case 10:
        Ii(r.type._context);
        break;
      case 22:
      case 23:
        Ji();
    }
    n = n.return;
  }
  if (le = e, b = e = wt(e.current, null), ue = Ne = t, ne = 0, fr = null, Yi = zl = $t = 0, ve = Qn = null, Lt !== null) {
    for (t = 0; t < Lt.length; t++) if (n = Lt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Lt = null;
  }
  return e;
}
function Nc(e, t) {
  do {
    var n = b;
    try {
      if (Mi(), Hr.current = pl, dl) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        dl = !1;
      }
      if (Ut = 0, re = te = G = null, Vn = !1, ar = 0, Gi.current = null, n === null || n.return === null) {
        ne = 1, fr = t, b = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, a = t;
        if (t = ue, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, y = u, h = y.tag;
          if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = y.alternate;
            m ? (y.updateQueue = m.updateQueue, y.memoizedState = m.memoizedState, y.lanes = m.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var v = ra(i);
          if (v !== null) {
            v.flags &= -257, la(v, i, u, o, t), v.mode & 1 && na(o, c, t), t = v, a = c;
            var k = t.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              na(o, c, t), qi();
              break e;
            }
            a = Error(S(426));
          }
        } else if (V && u.mode & 1) {
          var T = ra(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), la(T, i, u, o, t), Ti(vn(a, u));
            break e;
          }
        }
        o = a = vn(a, u), ne !== 4 && (ne = 2), Qn === null ? Qn = [o] : Qn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = ac(o, a, t);
              Zu(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (St === null || !St.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var x = sc(o, u, t);
                Zu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Rc(n);
    } catch (N) {
      t = N, b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _c() {
  var e = ml.current;
  return ml.current = pl, e === null ? pl : e;
}
function qi() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), le === null || !($t & 268435455) && !(zl & 268435455) || dt(le, ue);
}
function gl(e, t) {
  var n = O;
  O |= 2;
  var r = _c();
  (le !== e || ue !== t) && (Je = null, It(e, t));
  do
    try {
      pp();
      break;
    } catch (l) {
      Nc(e, l);
    }
  while (!0);
  if (Mi(), O = n, ml.current = r, b !== null) throw Error(S(261));
  return le = null, ue = 0, ne;
}
function pp() {
  for (; b !== null; ) Pc(b);
}
function mp() {
  for (; b !== null && !Uf(); ) Pc(b);
}
function Pc(e) {
  var t = jc(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? Rc(e) : b = t, Gi.current = null;
}
function Rc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = up(n, t), n !== null) {
        n.flags &= 32767, b = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, b = null;
        return;
      }
    } else if (n = ip(n, t, Ne), n !== null) {
      b = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Dt(e, t, n) {
  var r = A, l = Me.transition;
  try {
    Me.transition = null, A = 1, hp(e, t, n, r);
  } finally {
    Me.transition = l, A = r;
  }
  return null;
}
function hp(e, t, n, r) {
  do
    dn();
  while (mt !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Xf(e, o), e === le && (b = le = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ir || (Ir = !0, Dc(qr, function() {
    return dn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Me.transition, Me.transition = null;
    var i = A;
    A = 1;
    var u = O;
    O |= 4, Gi.current = null, sp(e, n), wc(n, e), Id($o), el = !!Uo, $o = Uo = null, e.current = n, cp(n), $f(), O = u, A = i, Me.transition = o;
  } else e.current = n;
  if (Ir && (Ir = !1, mt = e, yl = l), o = e.pendingLanes, o === 0 && (St = null), Hf(n.stateNode), we(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (hl) throw hl = !1, e = ii, ii = null, e;
  return yl & 1 && e.tag !== 0 && dn(), o = e.pendingLanes, o & 1 ? e === ui ? Gn++ : (Gn = 0, ui = e) : Gn = 0, Pt(), null;
}
function dn() {
  if (mt !== null) {
    var e = as(yl), t = Me.transition, n = A;
    try {
      if (Me.transition = null, A = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, yl = 0, O & 6) throw Error(S(331));
        var l = O;
        for (O |= 4, _ = e.current; _ !== null; ) {
          var o = _, i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (_ = c; _ !== null; ) {
                  var y = _;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kn(8, y, o);
                  }
                  var h = y.child;
                  if (h !== null) h.return = y, _ = h;
                  else for (; _ !== null; ) {
                    y = _;
                    var m = y.sibling, v = y.return;
                    if (xc(y), y === c) {
                      _ = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = v, _ = m;
                      break;
                    }
                    _ = v;
                  }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var T = w.sibling;
                    w.sibling = null, w = T;
                  } while (w !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, _ = i;
          else e: for (; _ !== null; ) {
            if (o = _, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Kn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, _ = f;
              break e;
            }
            _ = o.return;
          }
        }
        var s = e.current;
        for (_ = s; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, _ = d;
          else e: for (i = s; _ !== null; ) {
            if (u = _, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Rl(9, u);
              }
            } catch (N) {
              X(u, u.return, N);
            }
            if (u === i) {
              _ = null;
              break e;
            }
            var x = u.sibling;
            if (x !== null) {
              x.return = u.return, _ = x;
              break e;
            }
            _ = u.return;
          }
        }
        if (O = l, Pt(), Xe && typeof Xe.onPostCommitFiberRoot == "function") try {
          Xe.onPostCommitFiberRoot(Sl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = n, Me.transition = t;
    }
  }
  return !1;
}
function ga(e, t, n) {
  t = vn(n, t), t = ac(e, t, 1), e = xt(e, t, 1), t = he(), e !== null && (pr(e, 1, t), we(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) ga(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ga(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (St === null || !St.has(r))) {
        e = vn(n, e), e = sc(t, e, 1), t = xt(t, e, 1), e = he(), t !== null && (pr(t, 1, e), we(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function yp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = he(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ue & n) === n && (ne === 4 || ne === 3 && (ue & 130023424) === ue && 500 > Z() - Xi ? It(e, 0) : Yi |= n), we(e, t);
}
function zc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
  var n = he();
  e = lt(e, t), e !== null && (pr(e, t, n), we(e, n));
}
function gp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function vp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), zc(e, n);
}
var jc;
jc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Se.current) xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return xe = !1, op(e, t, n);
    xe = !!(e.flags & 131072);
  }
  else xe = !1, V && t.flags & 1048576 && Ms(t, ul, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Kr(e, t), e = t.pendingProps;
      var l = mn(t, pe.current);
      fn(t, n), l = Wi(null, t, r, e, l, n);
      var o = Hi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = !0, ol(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oi(t), l.updater = Pl, t.stateNode = l, l._reactInternals = t, Xo(t, r, e, n), t = qo(null, t, r, !0, o, n)) : (t.tag = 0, V && o && ji(t), me(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Kr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Sp(r), e = $e(r, e), l) {
          case 0:
            t = Jo(null, t, r, e, n);
            break e;
          case 1:
            t = ua(null, t, r, e, n);
            break e;
          case 11:
            t = oa(null, t, r, e, n);
            break e;
          case 14:
            t = ia(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Jo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), ua(e, t, r, l, n);
    case 3:
      e: {
        if (pc(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, $s(e, t), cl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = vn(Error(S(423)), t), t = aa(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = vn(Error(S(424)), t), t = aa(e, t, r, n, l);
          break e;
        } else for (_e = vt(t.stateNode.containerInfo.firstChild), Pe = t, V = !0, We = null, n = As(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hn(), r === l) {
            t = ot(e, t, n);
            break e;
          }
          me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Bs(t), e === null && Qo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Bo(r, l) ? i = null : o !== null && Bo(r, o) && (t.flags |= 32), dc(e, t), me(e, t, i, n), t.child;
    case 6:
      return e === null && Qo(t), null;
    case 13:
      return mc(e, t, n);
    case 4:
      return Ai(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = yn(t, null, r, n) : me(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), oa(e, t, r, l, n);
    case 7:
      return me(e, t, t.pendingProps, n), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(al, r._currentValue), r._currentValue = i, o !== null) if (Ke(o.value, i)) {
          if (o.children === l.children && !Se.current) {
            t = ot(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = tt(-1, n & -n), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var y = c.pending;
                    y === null ? a.next = a : (a.next = y.next, y.next = a), c.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Go(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(S(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Go(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
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
        me(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, fn(t, n), l = Ie(l), r = r(l), t.flags |= 1, me(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = $e(r, t.pendingProps), l = $e(r.type, l), ia(e, t, r, l, n);
    case 15:
      return cc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : $e(r, l), Kr(e, t), t.tag = 1, ke(r) ? (e = !0, ol(t)) : e = !1, fn(t, n), uc(t, r, l), Xo(t, r, l, n), qo(null, t, r, !0, e, n);
    case 19:
      return hc(e, t, n);
    case 22:
      return fc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Dc(e, t) {
  return ls(e, t);
}
function xp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Le(e, t, n, r) {
  return new xp(e, t, n, r);
}
function bi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Sp(e) {
  if (typeof e == "function") return bi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === vi) return 11;
    if (e === xi) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Le(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Yr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") bi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Xt:
      return Ft(n.children, l, o, t);
    case gi:
      i = 8, l |= 8;
      break;
    case xo:
      return e = Le(12, n, t, l | 2), e.elementType = xo, e.lanes = o, e;
    case So:
      return e = Le(13, n, t, l), e.elementType = So, e.lanes = o, e;
    case ko:
      return e = Le(19, n, t, l), e.elementType = ko, e.lanes = o, e;
    case Ba:
      return jl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ua:
          i = 10;
          break e;
        case $a:
          i = 9;
          break e;
        case vi:
          i = 11;
          break e;
        case xi:
          i = 14;
          break e;
        case st:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Le(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ft(e, t, n, r) {
  return e = Le(7, e, r, t), e.lanes = n, e;
}
function jl(e, t, n, r) {
  return e = Le(22, e, r, t), e.elementType = Ba, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function so(e, t, n) {
  return e = Le(6, e, null, t), e.lanes = n, e;
}
function co(e, t, n) {
  return t = Le(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function kp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function eu(e, t, n, r, l, o, i, u, a) {
  return e = new kp(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Le(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oi(o), e;
}
function wp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Tc(e) {
  if (!e) return Et;
  e = e._reactInternals;
  e: {
    if (Ht(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return Ts(e, n, t);
  }
  return t;
}
function Lc(e, t, n, r, l, o, i, u, a) {
  return e = eu(n, r, !0, e, l, o, i, u, a), e.context = Tc(null), n = e.current, r = he(), l = kt(n), o = tt(r, l), o.callback = t ?? null, xt(n, o, l), e.current.lanes = l, pr(e, l, r), we(e, r), e;
}
function Dl(e, t, n, r) {
  var l = t.current, o = he(), i = kt(l);
  return n = Tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = tt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = xt(l, t, i), e !== null && (Ve(e, l, i, o), Wr(e, l, i)), i;
}
function vl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function va(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tu(e, t) {
  va(e, t), (e = e.alternate) && va(e, t);
}
function Cp() {
  return null;
}
var Mc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function nu(e) {
  this._internalRoot = e;
}
Tl.prototype.render = nu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Dl(e, t, null, null);
};
Tl.prototype.unmount = nu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function() {
      Dl(null, e, null, null);
    }), t[rt] = null;
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = fs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ft.length && t !== 0 && t < ft[n].priority; n++) ;
    ft.splice(n, 0, e), n === 0 && ps(e);
  }
};
function ru(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ll(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function xa() {
}
function Ep(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = vl(i);
        o.call(c);
      };
    }
    var i = Lc(t, r, e, 0, null, !1, !1, "", xa);
    return e._reactRootContainer = i, e[rt] = i.current, rr(e.nodeType === 8 ? e.parentNode : e), Bt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = vl(a);
      u.call(c);
    };
  }
  var a = eu(e, 0, !1, null, null, !1, !1, "", xa);
  return e._reactRootContainer = a, e[rt] = a.current, rr(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
    Dl(t, a, n, r);
  }), a;
}
function Ml(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = vl(i);
        u.call(a);
      };
    }
    Dl(t, i, e, l);
  } else i = Ep(n, t, e, l, r);
  return vl(i);
}
ss = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = On(t.pendingLanes);
        n !== 0 && (wi(t, n | 1), we(t, Z()), !(O & 6) && (xn = Z() + 500, Pt()));
      }
      break;
    case 13:
      Bt(function() {
        var r = lt(e, 1);
        if (r !== null) {
          var l = he();
          Ve(r, e, 1, l);
        }
      }), tu(e, 1);
  }
};
Ci = function(e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = he();
      Ve(t, e, 134217728, n);
    }
    tu(e, 134217728);
  }
};
cs = function(e) {
  if (e.tag === 13) {
    var t = kt(e), n = lt(e, t);
    if (n !== null) {
      var r = he();
      Ve(n, e, t, r);
    }
    tu(e, t);
  }
};
fs = function() {
  return A;
};
ds = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
Do = function(e, t, n) {
  switch (t) {
    case "input":
      if (Eo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = El(r);
            if (!l) throw Error(S(90));
            Ha(r), Eo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ka(e, n);
      break;
    case "select":
      t = n.value, t != null && un(e, !!n.multiple, t, !1);
  }
};
qa = Zi;
ba = Bt;
var Np = { usingClientEntryPoint: !1, Events: [hr, bt, El, Za, Ja, Zi] }, Ln = { findFiberByHostInstance: Tt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _p = { bundleType: Ln.bundleType, version: Ln.version, rendererPackageName: Ln.rendererPackageName, rendererConfig: Ln.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: it.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ns(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ln.findFiberByHostInstance || Cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber) try {
    Sl = Fr.inject(_p), Xe = Fr;
  } catch {
  }
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ru(t)) throw Error(S(200));
  return wp(e, t, null, n);
};
ze.createRoot = function(e, t) {
  if (!ru(e)) throw Error(S(299));
  var n = !1, r = "", l = Mc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = eu(e, 1, !1, null, null, n, !1, r, l), e[rt] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new nu(t);
};
ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = ns(t), e = e === null ? null : e.stateNode, e;
};
ze.flushSync = function(e) {
  return Bt(e);
};
ze.hydrate = function(e, t, n) {
  if (!Ll(t)) throw Error(S(200));
  return Ml(null, e, t, !0, n);
};
ze.hydrateRoot = function(e, t, n) {
  if (!ru(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Mc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Lc(t, null, e, 1, n ?? null, l, !1, o, i), e[rt] = t.current, rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Tl(t);
};
ze.render = function(e, t, n) {
  if (!Ll(t)) throw Error(S(200));
  return Ml(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function(e) {
  if (!Ll(e)) throw Error(S(40));
  return e._reactRootContainer ? (Bt(function() {
    Ml(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rt] = null;
    });
  }), !0) : !1;
};
ze.unstable_batchedUpdates = Zi;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ll(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ml(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function Ic() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), Ia.exports = ze;
var Pp = Ia.exports, Sa = Pp;
go.createRoot = Sa.createRoot, go.hydrateRoot = Sa.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ka = (e) => {
  const t = zp(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fo = {
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
const jp = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, Dp = j.createContext({}), Tp = () => j.useContext(Dp), Lp = j.forwardRef(
  ({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: h = !1,
      color: m = "currentColor",
      className: v = ""
    } = Tp() ?? {}, k = r ?? h ? Number(n ?? y) * 24 / Number(t ?? c) : n ?? y;
    return j.createElement(
      "svg",
      {
        ref: a,
        ...fo,
        width: t ?? c ?? fo.width,
        height: t ?? c ?? fo.height,
        stroke: e ?? m,
        strokeWidth: k,
        className: Fc("lucide", v, l),
        ...!o && !jp(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([w, T]) => j.createElement(w, T)),
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
const Ce = (e, t) => {
  const n = j.forwardRef(
    ({ className: r, ...l }, o) => j.createElement(Lp, {
      ref: o,
      iconNode: t,
      className: Fc(
        `lucide-${Rp(ka(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return n.displayName = ka(e), n;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ip = Ce("arrow-right", Mp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], po = Ce("arrow-up-down", Fp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = [
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
], Ap = Ce("calculator", Op);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], $p = Ce("check", Up);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Wp = Ce("chevron-down", Bp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Vp = Ce("globe", Hp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], wa = Ce("plus", Kp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Gp = Ce("refresh-cw", Qp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Xp = Ce("rotate-ccw-clock", Yp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Jp = Ce("search", Zp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], bp = Ce("settings-2", qp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = [
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
], tm = Ce("sparkles", em);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], rm = Ce("trash-2", nm);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ca = Ce("x", lm), Yn = {
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
}, mo = ({ options: e, value: t, onChange: n }) => {
  const [r, l] = j.useState(!1), [o, i] = j.useState(""), u = j.useRef(null), [a, c] = j.useState(!1);
  j.useEffect(() => {
    const v = (k) => {
      u.current && !u.current.contains(k.target) && l(!1);
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, []), j.useEffect(() => {
    r && u.current && (u.current.getBoundingClientRect().right > window.innerWidth / 2 ? c(!0) : c(!1));
  }, [r]);
  const y = e.filter((v) => {
    const k = Yn[v] || { name: v }, w = o.toLowerCase();
    return v.toLowerCase().includes(w) || k.name.toLowerCase().includes(w);
  }), h = Yn[t] || { name: t, symbol: t }, m = t === "EUR" ? "EU" : t === "BTC" ? "⚡" : t.substring(0, 2);
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "custom-dropdown",
      ref: u,
      style: { position: "relative", width: "auto", flexShrink: 0 },
      children: [
        /* @__PURE__ */ p.jsxs(
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
              /* @__PURE__ */ p.jsx("div", { style: {
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
              }, children: m }),
              /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", textAlign: "left", minWidth: "0" }, children: [
                /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 700, fontSize: "0.9rem", color: "#fafafa", lineHeight: 1 }, children: t }),
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "65px", marginTop: "2px" }, children: h.name })
              ] }),
              /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: "#a1a1aa", fontWeight: "600", marginLeft: "2px" }, children: h.symbol }),
              /* @__PURE__ */ p.jsx(Wp, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
            ]
          }
        ),
        r && /* @__PURE__ */ p.jsxs(
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
              /* @__PURE__ */ p.jsxs("div", { style: { padding: "8px", borderBottom: "1px solid #1c1c21", position: "relative" }, children: [
                /* @__PURE__ */ p.jsx(Jp, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search currency...",
                    value: o,
                    onChange: (v) => i(v.target.value),
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
              /* @__PURE__ */ p.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: "4px 0",
                maxHeight: "260px",
                overflowY: "auto"
              }, children: y.length > 0 ? y.map((v) => {
                const k = Yn[v] || { name: v, symbol: v }, w = v === "EUR" ? "EU" : v === "BTC" ? "⚡" : v.substring(0, 2), T = v === t;
                return /* @__PURE__ */ p.jsxs(
                  "li",
                  {
                    onClick: () => {
                      n(v), l(!1), i("");
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      cursor: "pointer",
                      background: T ? "rgba(168, 85, 247, 0.15)" : "transparent",
                      borderLeft: T ? "2px solid #a855f7" : "2px solid transparent",
                      transition: "all 0.15s ease"
                    },
                    onMouseEnter: (f) => !T && (f.currentTarget.style.background = "rgba(255, 255, 255, 0.04)"),
                    onMouseLeave: (f) => !T && (f.currentTarget.style.background = "transparent"),
                    children: [
                      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ p.jsx("div", { style: {
                          width: "22px",
                          height: "22px",
                          borderRadius: "5px",
                          background: T ? "#a855f7" : "#1c1c21",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          fontWeight: "800",
                          color: T ? "#ffffff" : "#9ca3af"
                        }, children: w }),
                        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                          /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 600, color: T ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: v }),
                          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: k.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: k.symbol }),
                        T && /* @__PURE__ */ p.jsx($p, { size: 14, color: "#a855f7" })
                      ] })
                    ]
                  },
                  v
                );
              }) : /* @__PURE__ */ p.jsx("li", { style: { padding: "16px", textAlign: "center", color: "#71717a", fontSize: "0.8rem" }, children: "No matching currency" }) })
            ]
          }
        )
      ]
    }
  );
}, ho = "datacore_currency_history_v2", yo = "datacore_currency_chips_v2", Mn = "datacore_equivalent_currencies_v1", om = {
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
  MYR: 4.72,
  TRY: 32.5,
  KRW: 1375,
  MXN: 16.8,
  RUB: 91.5
}, im = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL"], um = ["EUR", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"], am = ({ children: e }) => /* @__PURE__ */ p.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function sm() {
  const [e, t] = j.useState("calculator"), [n, r] = j.useState(om), [l, o] = j.useState("USD"), [i, u] = j.useState("USD"), [a, c] = j.useState("EUR"), [y, h] = j.useState("100"), [m, v] = j.useState("100 + 50"), [k, w] = j.useState("50"), [T, f] = j.useState(im), [s, d] = j.useState(!1), [x, N] = j.useState("VND"), [C, P] = j.useState(um), [z, B] = j.useState(!1), [I, Ee] = j.useState("MYR"), [oe, ut] = j.useState(!1), [Cn, gr] = j.useState(!1), [Vt, En] = j.useState("50"), [E, D] = j.useState("EUR"), [L, K] = j.useState("+"), [ee, Kt] = j.useState(null), [Oe, Rt] = j.useState(!0), [Ae, zt] = j.useState(!1), [lu, Il] = j.useState([]), Oc = j.useRef(null);
  j.useEffect(() => {
    try {
      const g = localStorage.getItem(ho);
      g && Il(JSON.parse(g));
      const R = localStorage.getItem(yo);
      R && f(JSON.parse(R));
      const M = localStorage.getItem(Mn);
      M && P(JSON.parse(M));
    } catch {
    }
  }, []);
  const ou = ((g) => {
    try {
      if (!g || !g.trim()) return 0;
      const R = g.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!R) return 0;
      const M = Function(`"use strict"; return (${R})`)();
      return typeof M == "number" && !isNaN(M) && isFinite(M) ? M : 0;
    } catch {
      return 0;
    }
  })(m), iu = ou.toFixed(2), uu = (() => {
    const g = parseFloat(y) || 0, R = n[i] || 1, M = n[a] || 1;
    return g / R * M;
  })().toFixed(2), Ac = (g) => {
    const R = n[l] || 1, M = n[g] || 1;
    return (ou / R * M).toFixed(2);
  }, Uc = (g) => {
    const R = parseFloat(y) || 0, M = n[i] || 1, U = n[g] || 1;
    return (R / M * U).toFixed(2);
  }, au = async () => {
    zt(!0);
    try {
      const g = await fetch(`https://api.exchangerate-api.com/v4/latest/${l}`);
      if (g.ok) {
        const R = await g.json();
        r(R.rates), Kt(/* @__PURE__ */ new Date()), Rt(!0);
      } else
        Rt(!1);
    } catch {
      Rt(!1);
    } finally {
      zt(!1);
    }
  };
  j.useEffect(() => {
    au();
  }, [l]);
  const J = (g) => {
    if (g === "AC")
      v("");
    else if (g === "DEL")
      v((R) => R.length > 0 ? R.slice(0, -1) : "");
    else if (g === "=") {
      const R = iu;
      v(R);
      const M = {
        id: Date.now().toString(),
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        from: l,
        expr: m,
        result: R
      };
      Il((U) => {
        const se = [M, ...U.slice(0, 19)];
        try {
          localStorage.setItem(ho, JSON.stringify(se));
        } catch {
        }
        return se;
      });
    } else
      v((R) => R + g);
  }, su = (g, R, M) => {
    const U = parseFloat(R) || 0;
    if (U <= 0) return;
    const se = n[M] || 1, q = n[l] || 1, Al = (U / se * q).toFixed(2);
    v((bc) => {
      const Nn = bc.trim();
      return !Nn || Nn === "0" ? Al : ["+", "-", "*", "/", "×", "÷"].some((ef) => Nn.endsWith(ef)) ? `${Nn.slice(0, -1).trim()} ${g} ${Al}` : `${Nn} ${g} ${Al}`;
    }), gr(!1);
  }, $c = (g) => {
    if (!T.includes(g)) {
      const R = [...T, g];
      f(R);
      try {
        localStorage.setItem(yo, JSON.stringify(R));
      } catch {
      }
    }
    d(!1);
  }, Bc = (g, R) => {
    g.stopPropagation();
    const M = T.filter((U) => U !== R);
    f(M);
    try {
      localStorage.setItem(yo, JSON.stringify(M));
    } catch {
    }
  }, Wc = (g) => {
    if (!C.includes(g)) {
      const R = [...C, g];
      P(R);
      try {
        localStorage.setItem(Mn, JSON.stringify(R));
      } catch {
      }
    }
    B(!1);
  }, Hc = (g, R) => {
    g.stopPropagation();
    const M = C.filter((U) => U !== R);
    P(M);
    try {
      localStorage.setItem(Mn, JSON.stringify(M));
    } catch {
    }
  }, cu = (g, R, M) => {
    g.stopPropagation();
    const U = R + M;
    if (U < 0 || U >= C.length) return;
    const se = [...C], q = se[R];
    se[R] = se[U], se[U] = q, P(se);
    try {
      localStorage.setItem(Mn, JSON.stringify(se));
    } catch {
    }
  }, [vr, xr] = j.useState(null), [fu, Fl] = j.useState(null), Ol = j.useRef(null), Vc = (g, R) => {
    xr(R), g.dataTransfer.effectAllowed = "move";
  }, Kc = (g, R) => {
    g.preventDefault(), g.dataTransfer.dropEffect = "move", fu !== R && Fl(R);
  }, Qc = (g, R) => {
    if (g.preventDefault(), vr === null || vr === R) return;
    const M = [...C], [U] = M.splice(vr, 1);
    M.splice(R, 0, U), P(M);
    try {
      localStorage.setItem(Mn, JSON.stringify(M));
    } catch {
    }
    xr(null), Fl(null);
  }, Gc = () => {
    xr(null), Fl(null);
  }, Yc = (g) => {
    Ol.current = setTimeout(() => {
      ut(!0), xr(g);
    }, 400);
  }, Xc = () => {
    Ol.current && clearTimeout(Ol.current);
  }, Zc = () => {
    const g = parseFloat(y) || 0, R = n[l] || 1, U = (g / (n[i] || 1) * R).toFixed(2);
    v((se) => {
      const q = se.trim();
      return !q || q === "0" ? U : `${q} + ${U}`;
    }), t("calculator");
  }, Qt = Object.keys(n).sort(), Jc = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"];
  return /* @__PURE__ */ p.jsx(am, { children: /* @__PURE__ */ p.jsx("div", { className: "currency-app", ref: Oc, style: { position: "relative" }, children: /* @__PURE__ */ p.jsxs("div", { className: "studio-card", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "studio-header", children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ p.jsx("div", { style: {
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: "#27272a",
          border: "1px solid #3f3f46",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: /* @__PURE__ */ p.jsx(tm, { size: 14, color: "#fafafa" }) }),
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "1rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }, children: "Currency Studio" })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: Oe ? "#34d399" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: Oe ? "#10b981" : "#f59e0b"
        } }),
        /* @__PURE__ */ p.jsx("span", { children: Oe ? "Online" : "Offline" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "tab-switcher", children: [
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "button",
          className: `tab-btn ${e === "calculator" ? "active" : ""}`,
          onClick: () => t("calculator"),
          children: [
            /* @__PURE__ */ p.jsx(Ap, { size: 14 }),
            " Calculator"
          ]
        }
      ),
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "button",
          className: `tab-btn ${e === "exchange" ? "active" : ""}`,
          onClick: () => t("exchange"),
          children: [
            /* @__PURE__ */ p.jsx(po, { size: 14 }),
            " Currency Pair"
          ]
        }
      )
    ] }),
    e === "calculator" && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "100%" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 2px" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "Target Base Currency:" }),
        /* @__PURE__ */ p.jsx(
          mo,
          {
            options: Qt,
            value: l,
            onChange: o
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "calc-screen", children: [
        /* @__PURE__ */ p.jsx("div", { className: "calc-expr", children: m || "0" }),
        /* @__PURE__ */ p.jsxs("div", { className: "calc-result", children: [
          iu,
          " ",
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.9rem", color: "#71717a", fontWeight: "600" }, children: l })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { style: {
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          width: "100%",
          paddingTop: "8px",
          borderTop: "1px solid #1c1c21"
        }, children: [
          /* @__PURE__ */ p.jsxs("div", { style: {
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            width: "100%",
            scrollbarWidth: "none",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.6rem", color: "#71717a", fontWeight: "800", alignSelf: "center", whiteSpace: "nowrap", textTransform: "uppercase" }, children: "Equivalents:" }),
            C.filter((g) => g !== l).map((g) => {
              const R = C.indexOf(g), M = Ac(g), U = vr === R, se = fu === R;
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  draggable: !0,
                  onDragStart: (q) => Vc(q, R),
                  onDragOver: (q) => Kc(q, R),
                  onDrop: (q) => Qc(q, R),
                  onDragEnd: Gc,
                  onTouchStart: () => Yc(R),
                  onTouchEnd: Xc,
                  onClick: () => !oe && o(g),
                  style: {
                    padding: "3px 8px",
                    borderRadius: "6px",
                    backgroundColor: U ? "#3f3f46" : se ? "#27272a" : "rgba(255, 255, 255, 0.04)",
                    border: U ? "1px dashed #ffffff" : oe ? "1px dashed #71717a" : "1px solid #27272a",
                    color: "#a1a1aa",
                    fontSize: "0.68rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: oe ? "grab" : "pointer",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    opacity: U ? 0.5 : 1,
                    transform: U ? "scale(1.05)" : "none",
                    transition: "all 0.15s ease"
                  },
                  title: oe ? "Drag to reorder" : `Click to set ${g} as base currency (Drag or Long-Press to reorder)`,
                  children: [
                    oe && R > 0 && /* @__PURE__ */ p.jsx(
                      "span",
                      {
                        onClick: (q) => cu(q, R, -1),
                        style: { color: "#ffffff", fontWeight: "900", cursor: "pointer", padding: "0 3px", backgroundColor: "#27272a", borderRadius: "3px" },
                        title: "Move Left",
                        children: "‹"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("span", { style: { color: "#ffffff", fontWeight: "700" }, children: g }),
                    /* @__PURE__ */ p.jsx("span", { style: { color: "#a1a1aa" }, children: M }),
                    oe && R < C.length - 1 && /* @__PURE__ */ p.jsx(
                      "span",
                      {
                        onClick: (q) => cu(q, R, 1),
                        style: { color: "#ffffff", fontWeight: "900", cursor: "pointer", padding: "0 3px", backgroundColor: "#27272a", borderRadius: "3px" },
                        title: "Move Right",
                        children: "›"
                      }
                    ),
                    !oe && C.length > 2 && /* @__PURE__ */ p.jsx(
                      Ca,
                      {
                        size: 10,
                        style: { opacity: 0.5, cursor: "pointer", marginLeft: "2px" },
                        onClick: (q) => Hc(q, g)
                      }
                    )
                  ]
                },
                g
              );
            }),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => ut(!oe),
                style: {
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backgroundColor: oe ? "#27272a" : "#18181b",
                  border: "1px solid #27272a",
                  color: oe ? "#ffffff" : "#a1a1aa",
                  fontSize: "0.68rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px"
                },
                title: "Toggle Reorder Mode",
                children: [
                  /* @__PURE__ */ p.jsx(po, { size: 10 }),
                  " ",
                  oe ? "Done" : "Reorder"
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => B(!z),
                style: {
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  color: "#ffffff",
                  fontSize: "0.68rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px"
                },
                children: [
                  /* @__PURE__ */ p.jsx(wa, { size: 10 }),
                  " Add"
                ]
              }
            )
          ] }),
          z && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "6px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#a1a1aa", fontWeight: "600" }, children: "Add Equivalent:" }),
            /* @__PURE__ */ p.jsx(
              "select",
              {
                value: I,
                onChange: (g) => Ee(g.target.value),
                style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "3px 6px", color: "#ffffff", fontSize: "0.7rem", outline: "none" },
                children: Qt.map((g) => /* @__PURE__ */ p.jsxs("option", { value: g, children: [
                  g,
                  " - ",
                  (Yn[g] || {}).name || g
                ] }, g))
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => Wc(I),
                style: { padding: "3px 8px", borderRadius: "6px", backgroundColor: "#27272a", color: "#ffffff", border: "1px solid #3f3f46", fontSize: "0.65rem", fontWeight: "700", cursor: "pointer" },
                children: "+ Add"
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => B(!1),
                style: { padding: "3px 6px", borderRadius: "6px", backgroundColor: "transparent", color: "#71717a", border: "none", fontSize: "0.65rem", cursor: "pointer" },
                children: "Cancel"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px", backgroundColor: "#09090b", padding: "10px 12px", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }, children: [
          /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "800", textTransform: "uppercase" }, children: "Variable Amount:" }),
            /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "3px" }, children: ["10", "50", "100", "500"].map((g) => /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => w(g),
                style: {
                  padding: "2px 6px",
                  borderRadius: "4px",
                  backgroundColor: k === g ? "#27272a" : "transparent",
                  color: k === g ? "#ffffff" : "#71717a",
                  border: "1px solid #27272a",
                  fontSize: "0.65rem",
                  fontWeight: "700",
                  cursor: "pointer"
                },
                children: g
              },
              g
            )) })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", gap: "6px" }, children: [
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => d(!0),
                style: { fontSize: "0.65rem", color: "#ffffff", backgroundColor: "#18181b", border: "1px solid #27272a", padding: "3px 8px", borderRadius: "6px", cursor: "pointer", fontWeight: "700", display: "flex", alignItems: "center", gap: "3px" },
                children: [
                  /* @__PURE__ */ p.jsx(wa, { size: 11 }),
                  " Add Currency"
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => gr(!Cn),
                style: { fontSize: "0.65rem", color: "#a1a1aa", backgroundColor: "transparent", border: "1px solid #27272a", padding: "3px 8px", borderRadius: "6px", cursor: "pointer", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" },
                children: [
                  /* @__PURE__ */ p.jsx(bp, { size: 11 }),
                  " Math Injector"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px", scrollbarWidth: "none" }, children: T.map((g) => /* @__PURE__ */ p.jsxs(
          "div",
          {
            onClick: () => su("+", k, g),
            style: {
              padding: "4px 8px",
              borderRadius: "6px",
              backgroundColor: "#18181b",
              color: "#ffffff",
              border: "1px solid #27272a",
              fontSize: "0.7rem",
              fontWeight: "700",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            },
            children: [
              /* @__PURE__ */ p.jsxs("span", { children: [
                "+ ",
                k,
                " ",
                g
              ] }),
              T.length > 3 && /* @__PURE__ */ p.jsx(
                Ca,
                {
                  size: 11,
                  style: { opacity: 0.5, cursor: "pointer" },
                  onClick: (R) => Bc(R, g)
                }
              )
            ]
          },
          g
        )) }),
        s && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "600" }, children: "Select Currency:" }),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: x,
              onChange: (g) => N(g.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 8px", color: "#ffffff", fontSize: "0.75rem", outline: "none" },
              children: Qt.map((g) => /* @__PURE__ */ p.jsxs("option", { value: g, children: [
                g,
                " - ",
                (Yn[g] || {}).name || g
              ] }, g))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => $c(x),
              style: { padding: "5px 10px", borderRadius: "6px", backgroundColor: "#27272a", color: "#ffffff", border: "1px solid #3f3f46", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer" },
              children: "+ Add Chip"
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => d(!1),
              style: { padding: "5px 8px", borderRadius: "6px", backgroundColor: "transparent", color: "#71717a", border: "none", fontSize: "0.7rem", cursor: "pointer" },
              children: "Cancel"
            }
          )
        ] }),
        Cn && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p.jsxs(
            "select",
            {
              value: L,
              onChange: (g) => K(g.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#ffffff", fontSize: "0.75rem", fontWeight: "800", outline: "none" },
              children: [
                /* @__PURE__ */ p.jsx("option", { value: "+", children: "+" }),
                /* @__PURE__ */ p.jsx("option", { value: "-", children: "-" }),
                /* @__PURE__ */ p.jsx("option", { value: "*", children: "×" }),
                /* @__PURE__ */ p.jsx("option", { value: "/", children: "÷" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "number",
              value: Vt,
              onChange: (g) => En(g.target.value),
              placeholder: "Amount",
              style: { width: "65px", background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" }
            }
          ),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: E,
              onChange: (g) => D(g.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" },
              children: Qt.map((g) => /* @__PURE__ */ p.jsx("option", { value: g, children: g }, g))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => su(L, Vt, E),
              style: { flex: 1, padding: "5px 10px", borderRadius: "6px", backgroundColor: "#27272a", color: "#ffffff", border: "1px solid #3f3f46", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" },
              children: "Inject into Formula"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "calc-keypad", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => J("AC"), children: "AC" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => J("("), children: "(" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => J(")"), children: ")" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => J("DEL"), children: "DEL" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("7"), children: "7" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("8"), children: "8" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("9"), children: "9" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => J(" / "), children: "÷" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("4"), children: "4" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("5"), children: "5" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("6"), children: "6" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => J(" * "), children: "×" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("1"), children: "1" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("2"), children: "2" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("3"), children: "3" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => J(" - "), children: "-" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("0"), children: "0" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => J("."), children: "." }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn equal", onClick: () => J("="), children: "=" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => J(" + "), children: "+" })
      ] })
    ] }),
    e === "exchange" && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "14px", width: "100%" }, children: [
      /* @__PURE__ */ p.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Send / Convert:" }),
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ p.jsx(
            mo,
            {
              options: Qt,
              value: i,
              onChange: u
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              className: "currency-input",
              type: "number",
              value: y,
              onChange: (g) => h(g.target.value),
              placeholder: "0.00",
              style: { fontSize: "1.4rem", fontWeight: "700" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsx(
        "div",
        {
          className: "swap-circle",
          onClick: () => {
            const g = i;
            u(a), c(g);
          },
          title: "Swap Pair",
          children: /* @__PURE__ */ p.jsx(po, { size: 18 })
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Receive:" }),
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ p.jsx(
            mo,
            {
              options: Qt,
              value: a,
              onChange: c
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: uu,
              readOnly: !0,
              style: { color: "#ffffff", fontSize: "1.4rem", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { backgroundColor: "#09090b", padding: "12px", borderRadius: "12px", border: "1px solid #27272a", display: "flex", flexDirection: "column", gap: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "5px" }, children: [
          /* @__PURE__ */ p.jsx(Vp, { size: 12 }),
          " Live Pair Equivalents (",
          y,
          " ",
          i,
          "):"
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }, children: Jc.filter((g) => g !== i).map((g) => {
          const R = Uc(g), M = g === a;
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              onClick: () => c(g),
              style: {
                backgroundColor: M ? "#27272a" : "#121215",
                border: M ? "1px solid #3f3f46" : "1px solid #1c1c21",
                borderRadius: "8px",
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.15s ease"
              },
              children: [
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: M ? "#ffffff" : "#a1a1aa", fontWeight: "800" }, children: g }),
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: "#ffffff", fontWeight: "700", fontFamily: "'JetBrains Mono', monospace" }, children: R })
              ]
            },
            g
          );
        }) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", width: "100%", marginTop: "2px" }, children: [
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: Zc,
            style: {
              flex: 1,
              padding: "12px",
              backgroundColor: "#27272a",
              color: "#ffffff",
              border: "1px solid #3f3f46",
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
              /* @__PURE__ */ p.jsx(Ip, { size: 15 }),
              " Push Result (",
              uu,
              " ",
              a,
              ") to Calc"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            className: "sync-btn",
            onClick: au,
            disabled: Ae,
            style: {
              padding: "12px 16px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              backgroundColor: "#18181b",
              color: "#ffffff",
              border: "1px solid #27272a"
            },
            children: [
              /* @__PURE__ */ p.jsx(Gp, { size: 14, className: Ae ? "animate-spin" : "" }),
              Ae ? "Syncing..." : "Sync Rates"
            ]
          }
        )
      ] })
    ] }),
    lu.length > 0 && /* @__PURE__ */ p.jsxs("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ p.jsx(Xp, { size: 13 }),
          "Calculation History Tape"
        ] }),
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              Il([]), localStorage.removeItem(ho);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ p.jsx(rm, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: lu.map((g) => /* @__PURE__ */ p.jsxs(
        "div",
        {
          onClick: () => {
            v(g.expr), t("calculator");
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
            /* @__PURE__ */ p.jsxs("div", { style: { color: "#a1a1aa" }, children: [
              /* @__PURE__ */ p.jsx("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: g.expr }),
              " = ",
              /* @__PURE__ */ p.jsxs("span", { style: { color: "#ffffff", fontWeight: "700" }, children: [
                g.result,
                " ",
                g.from
              ] })
            ] }),
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: g.time })
          ]
        },
        g.id
      )) })
    ] })
  ] }) }) });
}
function pm(e, t) {
  if (!e) return () => {
  };
  const n = go.createRoot(e);
  return n.render(/* @__PURE__ */ p.jsx(sm, { platformAPI: t })), () => {
    try {
      n.unmount();
    } catch {
    }
  };
}
export {
  am as SafeAgentLayer,
  sm as default,
  pm as mount_app
};
