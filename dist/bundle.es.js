(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;min-height:100vh;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 52px) 12px calc(env(safe-area-inset-bottom,0px) + 24px) 12px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.studio-card{background:#121215;border:1px solid #27272a;border-radius:20px;padding:16px;width:100%;max-width:100%;box-shadow:0 20px 40px #0009;display:flex;flex-direction:column;gap:14px;position:relative;box-sizing:border-box;margin:auto 0;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:24px}.studio-card{max-width:480px;padding:24px;gap:18px}}.studio-header{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box}.tab-switcher{display:flex;background:#09090b;padding:3px;border-radius:12px;border:1px solid #27272a;width:100%;gap:4px}.tab-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 12px;border:none;border-radius:9px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s ease;color:#71717a;background:transparent}.tab-btn.active{background:#27272a;color:#fff;box-shadow:0 2px 8px #0006}.calc-screen{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;box-shadow:inset 0 2px 6px #000c;width:100%;box-sizing:border-box}.calc-expr{font-size:clamp(.85rem,3.5vw,1.05rem);color:#71717a;font-family:JetBrains Mono,monospace;word-break:break-all;min-height:24px;width:100%;text-align:right}.calc-result{font-size:clamp(1.6rem,7vw,2.4rem);font-weight:800;color:#fff;font-family:JetBrains Mono,monospace;overflow-x:auto;white-space:nowrap;line-height:1.1;width:100%;text-align:right;scrollbar-width:none}.calc-result::-webkit-scrollbar{display:none}.calc-keypad{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%;box-sizing:border-box}.key-btn{padding:14px 10px;border-radius:10px;border:1px solid #27272a;background:#18181b;color:#fff;font-size:clamp(1.05rem,4vw,1.25rem);font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;-webkit-user-select:none;user-select:none;box-shadow:0 2px 6px #0000004d}.key-btn:active{transform:scale(.95);background:#27272a}.key-btn.op{background:#27272a;color:#fff;border-color:#3f3f46;font-weight:800}.key-btn.op:active{background:#3f3f46}.key-btn.action{background:#18181b;color:#a1a1aa;border-color:#27272a;font-size:.85rem;font-weight:700}.key-btn.equal{background:#3f3f46;color:#fff;border-color:#52525b;font-weight:800;box-shadow:0 4px 12px #0006}.key-btn.equal:active{background:#52525b}.pair-box{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:8px;width:100%;box-sizing:border-box}.swap-circle{background:#18181b;border:1px solid #27272a;color:#a1a1aa;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-6px 0;z-index:2;box-shadow:0 4px 12px #00000080}.swap-circle:hover{background:#27272a;color:#fff;transform:rotate(180deg)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var xa = { exports: {} }, gl = {}, Sa = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = Symbol.for("react.element"), Vc = Symbol.for("react.portal"), Kc = Symbol.for("react.fragment"), Qc = Symbol.for("react.strict_mode"), Gc = Symbol.for("react.profiler"), Yc = Symbol.for("react.provider"), Xc = Symbol.for("react.context"), Zc = Symbol.for("react.forward_ref"), Jc = Symbol.for("react.suspense"), qc = Symbol.for("react.memo"), bc = Symbol.for("react.lazy"), uu = Symbol.iterator;
function ef(e) {
  return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ka = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, wa = Object.assign, Ca = {};
function Sn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ca, this.updater = n || ka;
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ea() {
}
Ea.prototype = Sn.prototype;
function ii(e, t, n) {
  this.props = e, this.context = t, this.refs = Ca, this.updater = n || ka;
}
var ui = ii.prototype = new Ea();
ui.constructor = ii;
wa(ui, Sn.prototype);
ui.isPureReactComponent = !0;
var au = Array.isArray, Na = Object.prototype.hasOwnProperty, ai = { current: null }, _a = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pa(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Na.call(t, r) && !_a.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: fr, type: e, key: o, ref: i, props: l, _owner: ai.current };
}
function tf(e, t) {
  return { $$typeof: fr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function si(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function nf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var su = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? nf("" + e.key) : t.toString(36);
}
function Ir(e, t, n, r, l) {
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
        case fr:
        case Vc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Il(i, 0) : r, au(l) ? (n = "", e != null && (n = e.replace(su, "$&/") + "/"), Ir(l, t, n, "", function(c) {
    return c;
  })) : l != null && (si(l) && (l = tf(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(su, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", au(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Il(o, u);
    i += Ir(o, t, n, a, l);
  }
  else if (a = ef(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Il(o, u++), i += Ir(o, t, n, a, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ir(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function rf(e) {
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
var me = { current: null }, Fr = { transition: null }, lf = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: Fr, ReactCurrentOwner: ai };
function Ra() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: gr, forEach: function(e, t, n) {
  gr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return gr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return gr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!si(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = Sn;
I.Fragment = Kc;
I.Profiler = Gc;
I.PureComponent = ii;
I.StrictMode = Qc;
I.Suspense = Jc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lf;
I.act = Ra;
I.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = wa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ai.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) Na.call(t, a) && !_a.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: fr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function(e) {
  return e = { $$typeof: Xc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Yc, _context: e }, e.Consumer = e;
};
I.createElement = Pa;
I.createFactory = function(e) {
  var t = Pa.bind(null, e);
  return t.type = e, t;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: Zc, render: e };
};
I.isValidElement = si;
I.lazy = function(e) {
  return { $$typeof: bc, _payload: { _status: -1, _result: e }, _init: rf };
};
I.memo = function(e, t) {
  return { $$typeof: qc, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function(e) {
  var t = Fr.transition;
  Fr.transition = {};
  try {
    e();
  } finally {
    Fr.transition = t;
  }
};
I.unstable_act = Ra;
I.useCallback = function(e, t) {
  return me.current.useCallback(e, t);
};
I.useContext = function(e) {
  return me.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return me.current.useDeferredValue(e);
};
I.useEffect = function(e, t) {
  return me.current.useEffect(e, t);
};
I.useId = function() {
  return me.current.useId();
};
I.useImperativeHandle = function(e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function(e, t) {
  return me.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function(e, t) {
  return me.current.useLayoutEffect(e, t);
};
I.useMemo = function(e, t) {
  return me.current.useMemo(e, t);
};
I.useReducer = function(e, t, n) {
  return me.current.useReducer(e, t, n);
};
I.useRef = function(e) {
  return me.current.useRef(e);
};
I.useState = function(e) {
  return me.current.useState(e);
};
I.useSyncExternalStore = function(e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function() {
  return me.current.useTransition();
};
I.version = "18.3.1";
Sa.exports = I;
var L = Sa.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of = L, uf = Symbol.for("react.element"), af = Symbol.for("react.fragment"), sf = Object.prototype.hasOwnProperty, cf = of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function za(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) sf.call(t, r) && !ff.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: uf, type: e, key: o, ref: i, props: l, _owner: cf.current };
}
gl.Fragment = af;
gl.jsx = za;
gl.jsxs = za;
xa.exports = gl;
var p = xa.exports, po = {}, ja = { exports: {} }, Re = {}, Ta = { exports: {} }, Da = {};
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
  function t(E, j) {
    var D = E.length;
    E.push(j);
    e: for (; 0 < D; ) {
      var K = D - 1 >>> 1, b = E[K];
      if (0 < l(b, j)) E[K] = j, E[D] = b, D = K;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0], D = E.pop();
    if (D !== j) {
      E[0] = D;
      e: for (var K = 0, b = E.length, Kt = b >>> 1; K < Kt; ) {
        var Fe = 2 * (K + 1) - 1, Rt = E[Fe], Oe = Fe + 1, zt = E[Oe];
        if (0 > l(Rt, D)) Oe < b && 0 > l(zt, Rt) ? (E[K] = zt, E[Oe] = D, K = Oe) : (E[K] = Rt, E[Fe] = D, K = Fe);
        else if (Oe < b && 0 > l(zt, D)) E[K] = zt, E[Oe] = D, K = Oe;
        else break e;
      }
    }
    return j;
  }
  function l(E, j) {
    var D = E.sortIndex - j.sortIndex;
    return D !== 0 ? D : E.id - j.id;
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
  var a = [], c = [], h = 1, y = null, m = 3, g = !1, k = !1, w = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= E) r(c), j.sortIndex = j.expirationTime, t(a, j);
      else break;
      j = n(c);
    }
  }
  function x(E) {
    if (w = !1, d(E), !k) if (n(a) !== null) k = !0, Vt(N);
    else {
      var j = n(c);
      j !== null && En(x, j.startTime - E);
    }
  }
  function N(E, j) {
    k = !1, w && (w = !1, f(R), R = -1), g = !0;
    var D = m;
    try {
      for (d(j), y = n(a); y !== null && (!(y.expirationTime > j) || E && !we()); ) {
        var K = y.callback;
        if (typeof K == "function") {
          y.callback = null, m = y.priorityLevel;
          var b = K(y.expirationTime <= j);
          j = e.unstable_now(), typeof b == "function" ? y.callback = b : y === n(a) && r(a), d(j);
        } else r(a);
        y = n(a);
      }
      if (y !== null) var Kt = !0;
      else {
        var Fe = n(c);
        Fe !== null && En(x, Fe.startTime - j), Kt = !1;
      }
      return Kt;
    } finally {
      y = null, m = D, g = !1;
    }
  }
  var C = !1, P = null, R = -1, B = 5, M = -1;
  function we() {
    return !(e.unstable_now() - M < B);
  }
  function le() {
    if (P !== null) {
      var E = e.unstable_now();
      M = E;
      var j = !0;
      try {
        j = P(!0, E);
      } finally {
        j ? Pt() : (C = !1, P = null);
      }
    } else C = !1;
  }
  var Pt;
  if (typeof s == "function") Pt = function() {
    s(le);
  };
  else if (typeof MessageChannel < "u") {
    var Cn = new MessageChannel(), hr = Cn.port2;
    Cn.port1.onmessage = le, Pt = function() {
      hr.postMessage(null);
    };
  } else Pt = function() {
    T(le, 0);
  };
  function Vt(E) {
    P = E, C || (C = !0, Pt());
  }
  function En(E, j) {
    R = T(function() {
      E(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    k || g || (k = !0, Vt(N));
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
        var j = 3;
        break;
      default:
        j = m;
    }
    var D = m;
    m = j;
    try {
      return E();
    } finally {
      m = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, j) {
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
    var D = m;
    m = E;
    try {
      return j();
    } finally {
      m = D;
    }
  }, e.unstable_scheduleCallback = function(E, j, D) {
    var K = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? K + D : K) : D = K, E) {
      case 1:
        var b = -1;
        break;
      case 2:
        b = 250;
        break;
      case 5:
        b = 1073741823;
        break;
      case 4:
        b = 1e4;
        break;
      default:
        b = 5e3;
    }
    return b = D + b, E = { id: h++, callback: j, priorityLevel: E, startTime: D, expirationTime: b, sortIndex: -1 }, D > K ? (E.sortIndex = D, t(c, E), n(a) === null && E === n(c) && (w ? (f(R), R = -1) : w = !0, En(x, D - K))) : (E.sortIndex = b, t(a, E), k || g || (k = !0, Vt(N))), E;
  }, e.unstable_shouldYield = we, e.unstable_wrapCallback = function(E) {
    var j = m;
    return function() {
      var D = m;
      m = j;
      try {
        return E.apply(this, arguments);
      } finally {
        m = D;
      }
    };
  };
})(Da);
Ta.exports = Da;
var df = Ta.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pf = L, Pe = df;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var La = /* @__PURE__ */ new Set(), Yn = {};
function Wt(e, t) {
  pn(e, t), pn(e + "Capture", t);
}
function pn(e, t) {
  for (Yn[e] = t, e = 0; e < t.length; e++) La.add(t[e]);
}
var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mo = Object.prototype.hasOwnProperty, mf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, cu = {}, fu = {};
function yf(e) {
  return mo.call(fu, e) ? !0 : mo.call(cu, e) ? !1 : mf.test(e) ? fu[e] = !0 : (cu[e] = !0, !1);
}
function hf(e, t, n, r) {
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
function gf(e, t, n, r) {
  if (t === null || typeof t > "u" || hf(e, t, n, r)) return !0;
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
function ye(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new ye(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ci = /[\-:]([a-z])/g;
function fi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ci,
    fi
  );
  ue[t] = new ye(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ci, fi);
  ue[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ci, fi);
  ue[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function di(e, t, n, r) {
  var l = ue.hasOwnProperty(t) ? ue[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gf(t, n, l, r) && (n = null), r || l === null ? yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Yt = Symbol.for("react.portal"), Xt = Symbol.for("react.fragment"), pi = Symbol.for("react.strict_mode"), yo = Symbol.for("react.profiler"), Ma = Symbol.for("react.provider"), Ia = Symbol.for("react.context"), mi = Symbol.for("react.forward_ref"), ho = Symbol.for("react.suspense"), go = Symbol.for("react.suspense_list"), yi = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), Fa = Symbol.for("react.offscreen"), du = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != "object" ? null : (e = du && e[du] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Fl;
function Mn(e) {
  if (Fl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Fl = t && t[1] || "";
  }
  return `
` + Fl + e;
}
var Ol = !1;
function Al(e, t) {
  if (!e || Ol) return "";
  Ol = !0;
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
    Ol = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function vf(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Al(e.type, !1), e;
    case 11:
      return e = Al(e.type.render, !1), e;
    case 1:
      return e = Al(e.type, !0), e;
    default:
      return "";
  }
}
function vo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xt:
      return "Fragment";
    case Yt:
      return "Portal";
    case yo:
      return "Profiler";
    case pi:
      return "StrictMode";
    case ho:
      return "Suspense";
    case go:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ia:
      return (e.displayName || "Context") + ".Consumer";
    case Ma:
      return (e._context.displayName || "Context") + ".Provider";
    case mi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case yi:
      return t = e.displayName || null, t !== null ? t : vo(e.type) || "Memo";
    case at:
      t = e._payload, e = e._init;
      try {
        return vo(e(t));
      } catch {
      }
  }
  return null;
}
function xf(e) {
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
      return vo(t);
    case 8:
      return t === pi ? "StrictMode" : "Mode";
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
function wt(e) {
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
function Oa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Sf(e) {
  var t = Oa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function xr(e) {
  e._valueTracker || (e._valueTracker = Sf(e));
}
function Aa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Oa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Gr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xo(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ua(e, t) {
  t = t.checked, t != null && di(e, "checked", t, !1);
}
function So(e, t) {
  Ua(e, t);
  var n = wt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ko(e, t.type, n) : t.hasOwnProperty("defaultValue") && ko(e, t.type, wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ko(e, t, n) {
  (t !== "number" || Gr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function un(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function wo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function yu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (In(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wt(n) };
}
function $a(e, t) {
  var n = wt(t.value), r = wt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ba(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Co(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ba(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, Wa = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Xn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
}, kf = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function(e) {
  kf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), An[t] = An[e];
  });
});
function Ha(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || An.hasOwnProperty(e) && An[e] ? ("" + t).trim() : t + "px";
}
function Va(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ha(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var wf = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Eo(e, t) {
  if (t) {
    if (wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function No(e, t) {
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
var _o = null;
function hi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Po = null, an = null, sn = null;
function gu(e) {
  if (e = mr(e)) {
    if (typeof Po != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = wl(t), Po(e.stateNode, e.type, t));
  }
}
function Ka(e) {
  an ? sn ? sn.push(e) : sn = [e] : an = e;
}
function Qa() {
  if (an) {
    var e = an, t = sn;
    if (sn = an = null, gu(e), t) for (e = 0; e < t.length; e++) gu(t[e]);
  }
}
function Ga(e, t) {
  return e(t);
}
function Ya() {
}
var Ul = !1;
function Xa(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Ga(e, t, n);
  } finally {
    Ul = !1, (an !== null || sn !== null) && (Ya(), Qa());
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
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
var Ro = !1;
if (tt) try {
  var Pn = {};
  Object.defineProperty(Pn, "passive", { get: function() {
    Ro = !0;
  } }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
} catch {
  Ro = !1;
}
function Cf(e, t, n, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Un = !1, Yr = null, Xr = !1, zo = null, Ef = { onError: function(e) {
  Un = !0, Yr = e;
} };
function Nf(e, t, n, r, l, o, i, u, a) {
  Un = !1, Yr = null, Cf.apply(Ef, arguments);
}
function _f(e, t, n, r, l, o, i, u, a) {
  if (Nf.apply(this, arguments), Un) {
    if (Un) {
      var c = Yr;
      Un = !1, Yr = null;
    } else throw Error(S(198));
    Xr || (Xr = !0, zo = c);
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
function Za(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function vu(e) {
  if (Ht(e) !== e) throw Error(S(188));
}
function Pf(e) {
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
        if (o === n) return vu(l), e;
        if (o === r) return vu(l), t;
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
function Ja(e) {
  return e = Pf(e), e !== null ? qa(e) : null;
}
function qa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ba = Pe.unstable_scheduleCallback, xu = Pe.unstable_cancelCallback, Rf = Pe.unstable_shouldYield, zf = Pe.unstable_requestPaint, Z = Pe.unstable_now, jf = Pe.unstable_getCurrentPriorityLevel, gi = Pe.unstable_ImmediatePriority, es = Pe.unstable_UserBlockingPriority, Zr = Pe.unstable_NormalPriority, Tf = Pe.unstable_LowPriority, ts = Pe.unstable_IdlePriority, vl = null, Ye = null;
function Df(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : If, Lf = Math.log, Mf = Math.LN2;
function If(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Lf(e) / Mf | 0) | 0;
}
var kr = 64, wr = 4194304;
function Fn(e) {
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
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Fn(u) : (o &= i, o !== 0 && (r = Fn(o)));
  } else i = n & ~l, i !== 0 ? r = Fn(i) : o !== 0 && (r = Fn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Ff(e, t) {
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
function Of(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - We(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & n) || u & r) && (l[i] = Ff(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function jo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ns() {
  var e = kr;
  return kr <<= 1, !(kr & 4194240) && (kr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function vi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var A = 0;
function rs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ls, xi, os, is, us, To = !1, Cr = [], mt = null, yt = null, ht = null, Jn = /* @__PURE__ */ new Map(), qn = /* @__PURE__ */ new Map(), ct = [], Uf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qn.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = mr(t), t !== null && xi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function $f(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return mt = Rn(mt, e, t, n, r, l), !0;
    case "dragenter":
      return yt = Rn(yt, e, t, n, r, l), !0;
    case "mouseover":
      return ht = Rn(ht, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Jn.set(o, Rn(Jn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, qn.set(o, Rn(qn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function as(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = Ht(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Za(n), t !== null) {
          e.blockedOn = t, us(e.priority, function() {
            os(n);
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
function Or(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _o = r, n.target.dispatchEvent(r), _o = null;
    } else return t = mr(n), t !== null && xi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ku(e, t, n) {
  Or(e) && n.delete(t);
}
function Bf() {
  To = !1, mt !== null && Or(mt) && (mt = null), yt !== null && Or(yt) && (yt = null), ht !== null && Or(ht) && (ht = null), Jn.forEach(ku), qn.forEach(ku);
}
function zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, To || (To = !0, Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Bf)));
}
function bn(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < Cr.length) {
    zn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (mt !== null && zn(mt, e), yt !== null && zn(yt, e), ht !== null && zn(ht, e), Jn.forEach(t), qn.forEach(t), n = 0; n < ct.length; n++) r = ct[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && (n = ct[0], n.blockedOn === null); ) as(n), n.blockedOn === null && ct.shift();
}
var cn = ot.ReactCurrentBatchConfig, qr = !0;
function Wf(e, t, n, r) {
  var l = A, o = cn.transition;
  cn.transition = null;
  try {
    A = 1, Si(e, t, n, r);
  } finally {
    A = l, cn.transition = o;
  }
}
function Hf(e, t, n, r) {
  var l = A, o = cn.transition;
  cn.transition = null;
  try {
    A = 4, Si(e, t, n, r);
  } finally {
    A = l, cn.transition = o;
  }
}
function Si(e, t, n, r) {
  if (qr) {
    var l = Do(e, t, n, r);
    if (l === null) Zl(e, t, r, br, n), Su(e, r);
    else if ($f(l, e, t, n, r)) r.stopPropagation();
    else if (Su(e, r), t & 4 && -1 < Uf.indexOf(e)) {
      for (; l !== null; ) {
        var o = mr(l);
        if (o !== null && ls(o), o = Do(e, t, n, r), o === null && Zl(e, t, r, br, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var br = null;
function Do(e, t, n, r) {
  if (br = null, e = hi(r), e = Dt(e), e !== null) if (t = Ht(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Za(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return br = e, null;
}
function ss(e) {
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
      switch (jf()) {
        case gi:
          return 1;
        case es:
          return 4;
        case Zr:
        case Tf:
          return 16;
        case ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null, ki = null, Ar = null;
function cs() {
  if (Ar) return Ar;
  var e, t = ki, n = t.length, r, l = "value" in dt ? dt.value : dt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Ar = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ur(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Er() {
  return !0;
}
function wu() {
  return !1;
}
function ze(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Er : wu, this.isPropagationStopped = wu, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Er);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Er);
  }, persist: function() {
  }, isPersistent: Er }), t;
}
var kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, wi = ze(kn), pr = Y({}, kn, { view: 0, detail: 0 }), Vf = ze(pr), Bl, Wl, jn, xl = Y({}, pr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ci, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jn && (jn && e.type === "mousemove" ? (Bl = e.screenX - jn.screenX, Wl = e.screenY - jn.screenY) : Wl = Bl = 0, jn = e), Bl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wl;
} }), Cu = ze(xl), Kf = Y({}, xl, { dataTransfer: 0 }), Qf = ze(Kf), Gf = Y({}, pr, { relatedTarget: 0 }), Hl = ze(Gf), Yf = Y({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = ze(Yf), Zf = Y({}, kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Jf = ze(Zf), qf = Y({}, kn, { data: 0 }), Eu = ze(qf), bf = {
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
}, ed = {
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
}, td = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function nd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = td[e]) ? !!t[e] : !1;
}
function Ci() {
  return nd;
}
var rd = Y({}, pr, { key: function(e) {
  if (e.key) {
    var t = bf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ed[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ci, charCode: function(e) {
  return e.type === "keypress" ? Ur(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ld = ze(rd), od = Y({}, xl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nu = ze(od), id = Y({}, pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ci }), ud = ze(id), ad = Y({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sd = ze(ad), cd = Y({}, xl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fd = ze(cd), dd = [9, 13, 27, 32], Ei = tt && "CompositionEvent" in window, $n = null;
tt && "documentMode" in document && ($n = document.documentMode);
var pd = tt && "TextEvent" in window && !$n, fs = tt && (!Ei || $n && 8 < $n && 11 >= $n), _u = " ", Pu = !1;
function ds(e, t) {
  switch (e) {
    case "keyup":
      return dd.indexOf(t.keyCode) !== -1;
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
function ps(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Zt = !1;
function md(e, t) {
  switch (e) {
    case "compositionend":
      return ps(t);
    case "keypress":
      return t.which !== 32 ? null : (Pu = !0, _u);
    case "textInput":
      return e = t.data, e === _u && Pu ? null : e;
    default:
      return null;
  }
}
function yd(e, t) {
  if (Zt) return e === "compositionend" || !Ei && ds(e, t) ? (e = cs(), Ar = ki = dt = null, Zt = !1, e) : null;
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
      return fs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hd[e.type] : t === "textarea";
}
function ms(e, t, n, r) {
  Ka(r), t = el(t, "onChange"), 0 < t.length && (n = new wi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Bn = null, er = null;
function gd(e) {
  Ns(e, 0);
}
function Sl(e) {
  var t = bt(e);
  if (Aa(t)) return e;
}
function vd(e, t) {
  if (e === "change") return t;
}
var ys = !1;
if (tt) {
  var Vl;
  if (tt) {
    var Kl = "oninput" in document;
    if (!Kl) {
      var zu = document.createElement("div");
      zu.setAttribute("oninput", "return;"), Kl = typeof zu.oninput == "function";
    }
    Vl = Kl;
  } else Vl = !1;
  ys = Vl && (!document.documentMode || 9 < document.documentMode);
}
function ju() {
  Bn && (Bn.detachEvent("onpropertychange", hs), er = Bn = null);
}
function hs(e) {
  if (e.propertyName === "value" && Sl(er)) {
    var t = [];
    ms(t, er, e, hi(e)), Xa(gd, t);
  }
}
function xd(e, t, n) {
  e === "focusin" ? (ju(), Bn = t, er = n, Bn.attachEvent("onpropertychange", hs)) : e === "focusout" && ju();
}
function Sd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(er);
}
function kd(e, t) {
  if (e === "click") return Sl(t);
}
function wd(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function Cd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ve = typeof Object.is == "function" ? Object.is : Cd;
function tr(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!mo.call(t, l) || !Ve(e[l], t[l])) return !1;
  }
  return !0;
}
function Tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Du(e, t) {
  var n = Tu(e);
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
    n = Tu(n);
  }
}
function gs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function vs() {
  for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gr(e.document);
  }
  return t;
}
function Ni(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ed(e) {
  var t = vs(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gs(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ni(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Du(n, o);
        var i = Du(
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
var Nd = tt && "documentMode" in document && 11 >= document.documentMode, Jt = null, Lo = null, Wn = null, Mo = !1;
function Lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mo || Jt == null || Jt !== Gr(r) || (r = Jt, "selectionStart" in r && Ni(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wn && tr(Wn, r) || (Wn = r, r = el(Lo, "onSelect"), 0 < r.length && (t = new wi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Jt)));
}
function Nr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qt = { animationend: Nr("Animation", "AnimationEnd"), animationiteration: Nr("Animation", "AnimationIteration"), animationstart: Nr("Animation", "AnimationStart"), transitionend: Nr("Transition", "TransitionEnd") }, Ql = {}, xs = {};
tt && (xs = document.createElement("div").style, "AnimationEvent" in window || (delete qt.animationend.animation, delete qt.animationiteration.animation, delete qt.animationstart.animation), "TransitionEvent" in window || delete qt.transitionend.transition);
function kl(e) {
  if (Ql[e]) return Ql[e];
  if (!qt[e]) return e;
  var t = qt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in xs) return Ql[e] = t[n];
  return e;
}
var Ss = kl("animationend"), ks = kl("animationiteration"), ws = kl("animationstart"), Cs = kl("transitionend"), Es = /* @__PURE__ */ new Map(), Mu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Et(e, t) {
  Es.set(e, t), Wt(t, [e]);
}
for (var Gl = 0; Gl < Mu.length; Gl++) {
  var Yl = Mu[Gl], _d = Yl.toLowerCase(), Pd = Yl[0].toUpperCase() + Yl.slice(1);
  Et(_d, "on" + Pd);
}
Et(Ss, "onAnimationEnd");
Et(ks, "onAnimationIteration");
Et(ws, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Cs, "onTransitionEnd");
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
var On = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rd = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function Iu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _f(r, t, void 0, e), e.currentTarget = null;
}
function Ns(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Iu(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Iu(l, u, c), o = a;
      }
    }
  }
  if (Xr) throw e = zo, Xr = !1, zo = null, e;
}
function W(e, t) {
  var n = t[Uo];
  n === void 0 && (n = t[Uo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (_s(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), _s(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function nr(e) {
  if (!e[_r]) {
    e[_r] = !0, La.forEach(function(n) {
      n !== "selectionchange" && (Rd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Xl("selectionchange", !1, t));
  }
}
function _s(e, t, n, r) {
  switch (ss(t)) {
    case 1:
      var l = Wf;
      break;
    case 4:
      l = Hf;
      break;
    default:
      l = Si;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ro || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, l) {
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
        if (i = Dt(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Xa(function() {
    var c = o, h = hi(n), y = [];
    e: {
      var m = Es.get(e);
      if (m !== void 0) {
        var g = wi, k = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ld;
            break;
          case "focusin":
            k = "focus", g = Hl;
            break;
          case "focusout":
            k = "blur", g = Hl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Hl;
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
            g = Cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ud;
            break;
          case Ss:
          case ks:
          case ws:
            g = Xf;
            break;
          case Cs:
            g = sd;
            break;
          case "scroll":
            g = Vf;
            break;
          case "wheel":
            g = fd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Jf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Nu;
        }
        var w = (t & 4) !== 0, T = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var x = d.stateNode;
          if (d.tag === 5 && x !== null && (d = x, f !== null && (x = Zn(s, f), x != null && w.push(rr(s, x, d)))), T) break;
          s = s.return;
        }
        0 < w.length && (m = new g(m, k, null, n, h), y.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== _o && (k = n.relatedTarget || n.fromElement) && (Dt(k) || k[nt])) break e;
        if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (k = n.relatedTarget || n.toElement, g = c, k = k ? Dt(k) : null, k !== null && (T = Ht(k), k !== T || k.tag !== 5 && k.tag !== 6) && (k = null)) : (g = null, k = c), g !== k)) {
          if (w = Cu, x = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = Nu, x = "onPointerLeave", f = "onPointerEnter", s = "pointer"), T = g == null ? m : bt(g), d = k == null ? m : bt(k), m = new w(x, s + "leave", g, n, h), m.target = T, m.relatedTarget = d, x = null, Dt(h) === c && (w = new w(f, s + "enter", k, n, h), w.target = d, w.relatedTarget = T, x = w), T = x, g && k) t: {
            for (w = g, f = k, s = 0, d = w; d; d = Gt(d)) s++;
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
          g !== null && Fu(y, m, g, w, !1), k !== null && T !== null && Fu(y, T, k, w, !0);
        }
      }
      e: {
        if (m = c ? bt(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var N = vd;
        else if (Ru(m)) if (ys) N = wd;
        else {
          N = Sd;
          var C = xd;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = kd);
        if (N && (N = N(e, c))) {
          ms(y, N, n, h);
          break e;
        }
        C && C(e, m, c), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && ko(m, "number", m.value);
      }
      switch (C = c ? bt(c) : window, e) {
        case "focusin":
          (Ru(C) || C.contentEditable === "true") && (Jt = C, Lo = c, Wn = null);
          break;
        case "focusout":
          Wn = Lo = Jt = null;
          break;
        case "mousedown":
          Mo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Mo = !1, Lu(y, n, h);
          break;
        case "selectionchange":
          if (Nd) break;
        case "keydown":
        case "keyup":
          Lu(y, n, h);
      }
      var P;
      if (Ei) e: {
        switch (e) {
          case "compositionstart":
            var R = "onCompositionStart";
            break e;
          case "compositionend":
            R = "onCompositionEnd";
            break e;
          case "compositionupdate":
            R = "onCompositionUpdate";
            break e;
        }
        R = void 0;
      }
      else Zt ? ds(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (fs && n.locale !== "ko" && (Zt || R !== "onCompositionStart" ? R === "onCompositionEnd" && Zt && (P = cs()) : (dt = h, ki = "value" in dt ? dt.value : dt.textContent, Zt = !0)), C = el(c, R), 0 < C.length && (R = new Eu(R, e, null, n, h), y.push({ event: R, listeners: C }), P ? R.data = P : (P = ps(n), P !== null && (R.data = P)))), (P = pd ? md(e, n) : yd(e, n)) && (c = el(c, "onBeforeInput"), 0 < c.length && (h = new Eu("onBeforeInput", "beforeinput", null, n, h), y.push({ event: h, listeners: c }), h.data = P));
    }
    Ns(y, t);
  });
}
function rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Zn(e, n), o != null && r.unshift(rr(e, o, l)), o = Zn(e, t), o != null && r.push(rr(e, o, l))), e = e.return;
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
function Fu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Zn(n, o), a != null && i.unshift(rr(n, a, u))) : l || (a = Zn(n, o), a != null && i.push(rr(n, a, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var zd = /\r\n?/g, jd = /\u0000|\uFFFD/g;
function Ou(e) {
  return (typeof e == "string" ? e : "" + e).replace(zd, `
`).replace(jd, "");
}
function Pr(e, t, n) {
  if (t = Ou(t), Ou(e) !== t && n) throw Error(S(425));
}
function tl() {
}
var Io = null, Fo = null;
function Oo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ao = typeof setTimeout == "function" ? setTimeout : void 0, Td = typeof clearTimeout == "function" ? clearTimeout : void 0, Au = typeof Promise == "function" ? Promise : void 0, Dd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Au < "u" ? function(e) {
  return Au.resolve(null).then(e).catch(Ld);
} : Ao;
function Ld(e) {
  setTimeout(function() {
    throw e;
  });
}
function Jl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), bn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  bn(t);
}
function gt(e) {
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
function Uu(e) {
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
var wn = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + wn, lr = "__reactProps$" + wn, nt = "__reactContainer$" + wn, Uo = "__reactEvents$" + wn, Md = "__reactListeners$" + wn, Id = "__reactHandles$" + wn;
function Dt(e) {
  var t = e[Ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[nt] || n[Ge]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Uu(e); e !== null; ) {
        if (n = e[Ge]) return n;
        e = Uu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function mr(e) {
  return e = e[Ge] || e[nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function wl(e) {
  return e[lr] || null;
}
var $o = [], en = -1;
function Nt(e) {
  return { current: e };
}
function H(e) {
  0 > en || (e.current = $o[en], $o[en] = null, en--);
}
function $(e, t) {
  en++, $o[en] = e.current, e.current = t;
}
var Ct = {}, fe = Nt(Ct), ve = Nt(!1), Ot = Ct;
function mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function xe(e) {
  return e = e.childContextTypes, e != null;
}
function nl() {
  H(ve), H(fe);
}
function $u(e, t, n) {
  if (fe.current !== Ct) throw Error(S(168));
  $(fe, t), $(ve, n);
}
function Ps(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, xf(e) || "Unknown", l));
  return Y({}, n, r);
}
function rl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ct, Ot = fe.current, $(fe, e), $(ve, ve.current), !0;
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Ps(e, t, Ot), r.__reactInternalMemoizedMergedChildContext = e, H(ve), H(fe), $(fe, e)) : H(ve), $(ve, n);
}
var Je = null, Cl = !1, ql = !1;
function Rs(e) {
  Je === null ? Je = [e] : Je.push(e);
}
function Fd(e) {
  Cl = !0, Rs(e);
}
function _t() {
  if (!ql && Je !== null) {
    ql = !0;
    var e = 0, t = A;
    try {
      var n = Je;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Je = null, Cl = !1;
    } catch (l) {
      throw Je !== null && (Je = Je.slice(e + 1)), ba(gi, _t), l;
    } finally {
      A = t, ql = !1;
    }
  }
  return null;
}
var tn = [], nn = 0, ll = null, ol = 0, je = [], Te = 0, At = null, qe = 1, be = "";
function jt(e, t) {
  tn[nn++] = ol, tn[nn++] = ll, ll = e, ol = t;
}
function zs(e, t, n) {
  je[Te++] = qe, je[Te++] = be, je[Te++] = At, At = e;
  var r = qe;
  e = be;
  var l = 32 - We(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - We(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, qe = 1 << 32 - We(t) + l | n << l | r, be = o + e;
  } else qe = 1 << o | n << l | r, be = e;
}
function _i(e) {
  e.return !== null && (jt(e, 1), zs(e, 1, 0));
}
function Pi(e) {
  for (; e === ll; ) ll = tn[--nn], tn[nn] = null, ol = tn[--nn], tn[nn] = null;
  for (; e === At; ) At = je[--Te], je[Te] = null, be = je[--Te], je[Te] = null, qe = je[--Te], je[Te] = null;
}
var _e = null, Ne = null, V = !1, Be = null;
function js(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _e = e, Ne = gt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _e = e, Ne = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = At !== null ? { id: qe, overflow: be } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _e = e, Ne = null, !0) : !1;
    default:
      return !1;
  }
}
function Bo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wo(e) {
  if (V) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!Wu(e, t)) {
        if (Bo(e)) throw Error(S(418));
        t = gt(n.nextSibling);
        var r = _e;
        t && Wu(e, t) ? js(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, _e = e);
      }
    } else {
      if (Bo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, V = !1, _e = e;
    }
  }
}
function Hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  _e = e;
}
function Rr(e) {
  if (e !== _e) return !1;
  if (!V) return Hu(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps)), t && (t = Ne)) {
    if (Bo(e)) throw Ts(), Error(S(418));
    for (; t; ) js(e, t), t = gt(t.nextSibling);
  }
  if (Hu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = gt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = _e ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ts() {
  for (var e = Ne; e; ) e = gt(e.nextSibling);
}
function yn() {
  Ne = _e = null, V = !1;
}
function Ri(e) {
  Be === null ? Be = [e] : Be.push(e);
}
var Od = ot.ReactCurrentBatchConfig;
function Tn(e, t, n) {
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
function zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Vu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ds(e) {
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
    return f = kt(f, s), f.index = 0, f.sibling = null, f;
  }
  function o(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, x) {
    return s === null || s.tag !== 6 ? (s = oo(d, f.mode, x), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, x) {
    var N = d.type;
    return N === Xt ? h(f, s, d.props.children, x, d.key) : s !== null && (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === at && Vu(N) === s.type) ? (x = l(s, d.props), x.ref = Tn(f, s, d), x.return = f, x) : (x = Qr(d.type, d.key, d.props, null, f.mode, x), x.ref = Tn(f, s, d), x.return = f, x);
  }
  function c(f, s, d, x) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = io(d, f.mode, x), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, x, N) {
    return s === null || s.tag !== 7 ? (s = Ft(d, f.mode, x, N), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function y(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = oo("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case vr:
          return d = Qr(s.type, s.key, s.props, null, f.mode, d), d.ref = Tn(f, null, s), d.return = f, d;
        case Yt:
          return s = io(s, f.mode, d), s.return = f, s;
        case at:
          var x = s._init;
          return y(f, x(s._payload), d);
      }
      if (In(s) || _n(s)) return s = Ft(s, f.mode, d, null), s.return = f, s;
      zr(f, s);
    }
    return null;
  }
  function m(f, s, d, x) {
    var N = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return N !== null ? null : u(f, s, "" + d, x);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          return d.key === N ? a(f, s, d, x) : null;
        case Yt:
          return d.key === N ? c(f, s, d, x) : null;
        case at:
          return N = d._init, m(
            f,
            s,
            N(d._payload),
            x
          );
      }
      if (In(d) || _n(d)) return N !== null ? null : h(f, s, d, x, null);
      zr(f, d);
    }
    return null;
  }
  function g(f, s, d, x, N) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return f = f.get(d) || null, u(s, f, "" + x, N);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case vr:
          return f = f.get(x.key === null ? d : x.key) || null, a(s, f, x, N);
        case Yt:
          return f = f.get(x.key === null ? d : x.key) || null, c(s, f, x, N);
        case at:
          var C = x._init;
          return g(f, s, d, C(x._payload), N);
      }
      if (In(x) || _n(x)) return f = f.get(d) || null, h(s, f, x, N, null);
      zr(s, x);
    }
    return null;
  }
  function k(f, s, d, x) {
    for (var N = null, C = null, P = s, R = s = 0, B = null; P !== null && R < d.length; R++) {
      P.index > R ? (B = P, P = null) : B = P.sibling;
      var M = m(f, P, d[R], x);
      if (M === null) {
        P === null && (P = B);
        break;
      }
      e && P && M.alternate === null && t(f, P), s = o(M, s, R), C === null ? N = M : C.sibling = M, C = M, P = B;
    }
    if (R === d.length) return n(f, P), V && jt(f, R), N;
    if (P === null) {
      for (; R < d.length; R++) P = y(f, d[R], x), P !== null && (s = o(P, s, R), C === null ? N = P : C.sibling = P, C = P);
      return V && jt(f, R), N;
    }
    for (P = r(f, P); R < d.length; R++) B = g(P, f, R, d[R], x), B !== null && (e && B.alternate !== null && P.delete(B.key === null ? R : B.key), s = o(B, s, R), C === null ? N = B : C.sibling = B, C = B);
    return e && P.forEach(function(we) {
      return t(f, we);
    }), V && jt(f, R), N;
  }
  function w(f, s, d, x) {
    var N = _n(d);
    if (typeof N != "function") throw Error(S(150));
    if (d = N.call(d), d == null) throw Error(S(151));
    for (var C = N = null, P = s, R = s = 0, B = null, M = d.next(); P !== null && !M.done; R++, M = d.next()) {
      P.index > R ? (B = P, P = null) : B = P.sibling;
      var we = m(f, P, M.value, x);
      if (we === null) {
        P === null && (P = B);
        break;
      }
      e && P && we.alternate === null && t(f, P), s = o(we, s, R), C === null ? N = we : C.sibling = we, C = we, P = B;
    }
    if (M.done) return n(
      f,
      P
    ), V && jt(f, R), N;
    if (P === null) {
      for (; !M.done; R++, M = d.next()) M = y(f, M.value, x), M !== null && (s = o(M, s, R), C === null ? N = M : C.sibling = M, C = M);
      return V && jt(f, R), N;
    }
    for (P = r(f, P); !M.done; R++, M = d.next()) M = g(P, f, R, M.value, x), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? R : M.key), s = o(M, s, R), C === null ? N = M : C.sibling = M, C = M);
    return e && P.forEach(function(le) {
      return t(f, le);
    }), V && jt(f, R), N;
  }
  function T(f, s, d, x) {
    if (typeof d == "object" && d !== null && d.type === Xt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          e: {
            for (var N = d.key, C = s; C !== null; ) {
              if (C.key === N) {
                if (N = d.type, N === Xt) {
                  if (C.tag === 7) {
                    n(f, C.sibling), s = l(C, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === at && Vu(N) === C.type) {
                  n(f, C.sibling), s = l(C, d.props), s.ref = Tn(f, C, d), s.return = f, f = s;
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Xt ? (s = Ft(d.props.children, f.mode, x, d.key), s.return = f, f = s) : (x = Qr(d.type, d.key, d.props, null, f.mode, x), x.ref = Tn(f, s, d), x.return = f, f = x);
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
            s = io(d, f.mode, x), s.return = f, f = s;
          }
          return i(f);
        case at:
          return C = d._init, T(f, s, C(d._payload), x);
      }
      if (In(d)) return k(f, s, d, x);
      if (_n(d)) return w(f, s, d, x);
      zr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (n(f, s.sibling), s = l(s, d), s.return = f, f = s) : (n(f, s), s = oo(d, f.mode, x), s.return = f, f = s), i(f)) : n(f, s);
  }
  return T;
}
var hn = Ds(!0), Ls = Ds(!1), il = Nt(null), ul = null, rn = null, zi = null;
function ji() {
  zi = rn = ul = null;
}
function Ti(e) {
  var t = il.current;
  H(il), e._currentValue = t;
}
function Ho(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function fn(e, t) {
  ul = e, zi = rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0), e.firstContext = null);
}
function Me(e) {
  var t = e._currentValue;
  if (zi !== e) if (e = { context: e, memoizedValue: t, next: null }, rn === null) {
    if (ul === null) throw Error(S(308));
    rn = e, ul.dependencies = { lanes: 0, firstContext: e };
  } else rn = rn.next = e;
  return t;
}
var Lt = null;
function Di(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function Ms(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Di(t)) : (n.next = l.next, l.next = n), t.interleaved = n, rt(e, r);
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function Li(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Is(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, O & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, rt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Di(r)) : (t.next = l.next, l.next = t), r.interleaved = t, rt(e, n);
}
function $r(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
function Ku(e, t) {
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
function al(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
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
      var m = u.lane, g = u.eventTime;
      if ((r & m) === m) {
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
          switch (m = t, g = n, w.tag) {
            case 1:
              if (k = w.payload, typeof k == "function") {
                y = k.call(g, y, m);
                break e;
              }
              y = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = w.payload, m = typeof k == "function" ? k.call(g, y, m) : k, m == null) break e;
              y = Y({}, y, m);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = g, a = y) : h = h.next = g, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = y), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    $t |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Qu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var yr = {}, Xe = Nt(yr), or = Nt(yr), ir = Nt(yr);
function Mt(e) {
  if (e === yr) throw Error(S(174));
  return e;
}
function Mi(e, t) {
  switch ($(ir, t), $(or, e), $(Xe, yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Co(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Co(t, e);
  }
  H(Xe), $(Xe, t);
}
function gn() {
  H(Xe), H(or), H(ir);
}
function Fs(e) {
  Mt(ir.current);
  var t = Mt(Xe.current), n = Co(t, e.type);
  t !== n && ($(or, e), $(Xe, n));
}
function Ii(e) {
  or.current === e && (H(Xe), H(or));
}
var Q = Nt(0);
function sl(e) {
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
var bl = [];
function Fi() {
  for (var e = 0; e < bl.length; e++) bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var Br = ot.ReactCurrentDispatcher, eo = ot.ReactCurrentBatchConfig, Ut = 0, G = null, ee = null, ne = null, cl = !1, Hn = !1, ur = 0, Ad = 0;
function ae() {
  throw Error(S(321));
}
function Oi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ve(e[n], t[n])) return !1;
  return !0;
}
function Ai(e, t, n, r, l, o) {
  if (Ut = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Br.current = e === null || e.memoizedState === null ? Wd : Hd, e = n(r, l), Hn) {
    o = 0;
    do {
      if (Hn = !1, ur = 0, 25 <= o) throw Error(S(301));
      o += 1, ne = ee = null, t.updateQueue = null, Br.current = Vd, e = n(r, l);
    } while (Hn);
  }
  if (Br.current = fl, t = ee !== null && ee.next !== null, Ut = 0, ne = ee = G = null, cl = !1, t) throw Error(S(300));
  return e;
}
function Ui() {
  var e = ur !== 0;
  return ur = 0, e;
}
function Qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ne === null ? G.memoizedState = ne = e : ne = ne.next = e, ne;
}
function Ie() {
  if (ee === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ne === null ? G.memoizedState : ne.next;
  if (t !== null) ne = t, ee = e;
  else {
    if (e === null) throw Error(S(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, ne === null ? G.memoizedState = ne = e : ne = ne.next = e;
  }
  return ne;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function to(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ee, l = r.baseQueue, o = n.pending;
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
      var h = c.lane;
      if ((Ut & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var y = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = y, i = r) : a = a.next = y, G.lanes |= h, $t |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, Ve(r, t.memoizedState) || (ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, G.lanes |= o, $t |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function no(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ve(o, t.memoizedState) || (ge = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Os() {
}
function As(e, t) {
  var n = G, r = Ie(), l = t(), o = !Ve(r.memoizedState, l);
  if (o && (r.memoizedState = l, ge = !0), r = r.queue, $i(Bs.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
    if (n.flags |= 2048, sr(9, $s.bind(null, n, r, l, t), void 0, null), re === null) throw Error(S(349));
    Ut & 30 || Us(n, t, l);
  }
  return l;
}
function Us(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function $s(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ws(t) && Hs(e);
}
function Bs(e, t, n) {
  return n(function() {
    Ws(t) && Hs(e);
  });
}
function Ws(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function Hs(e) {
  var t = rt(e, 1);
  t !== null && He(t, e, 1, -1);
}
function Gu(e) {
  var t = Qe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, t.queue = e, e = e.dispatch = Bd.bind(null, G, e), [t.memoizedState, e];
}
function sr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Vs() {
  return Ie().memoizedState;
}
function Wr(e, t, n, r) {
  var l = Qe();
  G.flags |= e, l.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r);
}
function El(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (o = i.destroy, r !== null && Oi(r, i.deps)) {
      l.memoizedState = sr(t, n, o, r);
      return;
    }
  }
  G.flags |= e, l.memoizedState = sr(1 | t, n, o, r);
}
function Yu(e, t) {
  return Wr(8390656, 8, e, t);
}
function $i(e, t) {
  return El(2048, 8, e, t);
}
function Ks(e, t) {
  return El(4, 2, e, t);
}
function Qs(e, t) {
  return El(4, 4, e, t);
}
function Gs(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ys(e, t, n) {
  return n = n != null ? n.concat([e]) : null, El(4, 4, Gs.bind(null, t, e), n);
}
function Bi() {
}
function Xs(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Zs(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Js(e, t, n) {
  return Ut & 21 ? (Ve(n, t) || (n = ns(), G.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ge = !0), e.memoizedState = n);
}
function Ud(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = eo.transition;
  eo.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, eo.transition = r;
  }
}
function qs() {
  return Ie().memoizedState;
}
function $d(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, bs(e)) ec(t, n);
  else if (n = Ms(e, t, n, r), n !== null) {
    var l = pe();
    He(n, e, r, l), tc(n, t, r);
  }
}
function Bd(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bs(e)) ec(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ve(u, i)) {
        var a = t.interleaved;
        a === null ? (l.next = l, Di(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Ms(e, t, l, r), n !== null && (l = pe(), He(n, e, r, l), tc(n, t, r));
  }
}
function bs(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function ec(e, t) {
  Hn = cl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
var fl = { readContext: Me, useCallback: ae, useContext: ae, useEffect: ae, useImperativeHandle: ae, useInsertionEffect: ae, useLayoutEffect: ae, useMemo: ae, useReducer: ae, useRef: ae, useState: ae, useDebugValue: ae, useDeferredValue: ae, useTransition: ae, useMutableSource: ae, useSyncExternalStore: ae, useId: ae, unstable_isNewReconciler: !1 }, Wd = { readContext: Me, useCallback: function(e, t) {
  return Qe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Me, useEffect: Yu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wr(
    4194308,
    4,
    Gs.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Wr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Wr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = $d.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Qe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Gu, useDebugValue: Bi, useDeferredValue: function(e) {
  return Qe().memoizedState = e;
}, useTransition: function() {
  var e = Gu(!1), t = e[0];
  return e = Ud.bind(null, e[1]), Qe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, l = Qe();
  if (V) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), re === null) throw Error(S(349));
    Ut & 30 || Us(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Yu(Bs.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, sr(9, $s.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Qe(), t = re.identifierPrefix;
  if (V) {
    var n = be, r = qe;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ur++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ad++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Hd = {
  readContext: Me,
  useCallback: Xs,
  useContext: Me,
  useEffect: $i,
  useImperativeHandle: Ys,
  useInsertionEffect: Ks,
  useLayoutEffect: Qs,
  useMemo: Zs,
  useReducer: to,
  useRef: Vs,
  useState: function() {
    return to(ar);
  },
  useDebugValue: Bi,
  useDeferredValue: function(e) {
    var t = Ie();
    return Js(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = to(ar)[0], t = Ie().memoizedState;
    return [e, t];
  },
  useMutableSource: Os,
  useSyncExternalStore: As,
  useId: qs,
  unstable_isNewReconciler: !1
}, Vd = { readContext: Me, useCallback: Xs, useContext: Me, useEffect: $i, useImperativeHandle: Ys, useInsertionEffect: Ks, useLayoutEffect: Qs, useMemo: Zs, useReducer: no, useRef: Vs, useState: function() {
  return no(ar);
}, useDebugValue: Bi, useDeferredValue: function(e) {
  var t = Ie();
  return ee === null ? t.memoizedState = e : Js(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = no(ar)[0], t = Ie().memoizedState;
  return [e, t];
}, useMutableSource: Os, useSyncExternalStore: As, useId: qs, unstable_isNewReconciler: !1 };
function Ue(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ht(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = St(e), o = et(r, l);
  o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (He(t, e, l, r), $r(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = St(e), o = et(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = vt(e, o, l), t !== null && (He(t, e, l, r), $r(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pe(), r = St(e), l = et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = vt(e, l, r), t !== null && (He(t, e, r, n), $r(t, e, r));
} };
function Xu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !tr(n, r) || !tr(l, o) : !0;
}
function nc(e, t, n) {
  var r = !1, l = Ct, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Me(o) : (l = xe(t) ? Ot : fe.current, r = t.contextTypes, o = (r = r != null) ? mn(e, l) : Ct), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Zu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function Ko(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Li(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Me(o) : (o = xe(t) ? Ot : fe.current, l.context = mn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Vo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Nl.enqueueReplaceState(l, l.state, null), al(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += vf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Kd = typeof WeakMap == "function" ? WeakMap : Map;
function rc(e, t, n) {
  n = et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pl || (pl = !0, ni = r), Qo(e, t);
  }, n;
}
function lc(e, t, n) {
  n = et(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Qo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Qo(e, t), typeof r != "function" && (xt === null ? xt = /* @__PURE__ */ new Set([this]) : xt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = op.bind(null, e, t, n), t.then(e, e));
}
function qu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = et(-1, 1), t.tag = 2, vt(n, t, 1))), n.lanes |= 1), e);
}
var Qd = ot.ReactCurrentOwner, ge = !1;
function de(e, t, n, r) {
  t.child = e === null ? Ls(t, null, n, r) : hn(t, e.child, n, r);
}
function ea(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return fn(t, l), r = Ai(e, t, n, r, o, l), n = Ui(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (V && n && _i(t), t.flags |= 1, de(e, t, r, l), t.child);
}
function ta(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Xi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, oc(e, t, o, r, l)) : (e = Qr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : tr, n(i, r) && e.ref === t.ref) return lt(e, t, l);
  }
  return t.flags |= 1, e = kt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function oc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (tr(o, r) && e.ref === t.ref) if (ge = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ge = !0);
    else return t.lanes = e.lanes, lt(e, t, l);
  }
  return Go(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(on, Ee), Ee |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $(on, Ee), Ee |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, $(on, Ee), Ee |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(on, Ee), Ee |= r;
  return de(e, t, l, n), t.child;
}
function uc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Go(e, t, n, r, l) {
  var o = xe(n) ? Ot : fe.current;
  return o = mn(t, o), fn(t, l), n = Ai(e, t, n, r, o, l), r = Ui(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (V && r && _i(t), t.flags |= 1, de(e, t, n, l), t.child);
}
function na(e, t, n, r, l) {
  if (xe(n)) {
    var o = !0;
    rl(t);
  } else o = !1;
  if (fn(t, l), t.stateNode === null) Hr(e, t), nc(t, n, r), Ko(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var a = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Me(c) : (c = xe(n) ? Ot : fe.current, c = mn(t, c));
    var h = n.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && Zu(t, i, r, c), st = !1;
    var m = t.memoizedState;
    i.state = m, al(t, r, i, l), a = t.memoizedState, u !== r || m !== a || ve.current || st ? (typeof h == "function" && (Vo(t, n, h, r), a = t.memoizedState), (u = st || Xu(t, n, u, r, m, a, c)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Is(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Ue(t.type, u), i.props = c, y = t.pendingProps, m = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Me(a) : (a = xe(n) ? Ot : fe.current, a = mn(t, a));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || m !== a) && Zu(t, i, r, a), st = !1, m = t.memoizedState, i.state = m, al(t, r, i, l);
    var k = t.memoizedState;
    u !== y || m !== k || ve.current || st ? (typeof g == "function" && (Vo(t, n, g, r), k = t.memoizedState), (c = st || Xu(t, n, c, r, m, k, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Yo(e, t, n, r, o, l);
}
function Yo(e, t, n, r, l, o) {
  uc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Bu(t, n, !1), lt(e, t, o);
  r = t.stateNode, Qd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = hn(t, e.child, null, o), t.child = hn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && Bu(t, n, !0), t.child;
}
function ac(e) {
  var t = e.stateNode;
  t.pendingContext ? $u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $u(e, t.context, !1), Mi(e, t.containerInfo);
}
function ra(e, t, n, r, l) {
  return yn(), Ri(l), t.flags |= 256, de(e, t, n, r), t.child;
}
var Xo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sc(e, t, n) {
  var r = t.pendingProps, l = Q.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(Q, l & 1), e === null)
    return Wo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Rl(i, r, 0, null), e = Ft(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Zo(n), t.memoizedState = Xo, e) : Wi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Gd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = kt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = kt(u, o) : (o = Ft(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Zo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Xo, r;
  }
  return o = e.child, e = o.sibling, r = kt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wi(e, t) {
  return t = Rl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jr(e, t, n, r) {
  return r !== null && Ri(r), hn(t, e.child, null, n), e = Wi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Gd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ro(Error(S(422))), jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Rl({ mode: "visible", children: r.children }, l, 0, null), o = Ft(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && hn(t, e.child, null, i), t.child.memoizedState = Zo(i), t.memoizedState = Xo, o);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = ro(o, r, void 0), jr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ge || u) {
    if (r = re, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, rt(e, l), He(r, e, l, -1));
    }
    return Yi(), r = ro(Error(S(421))), jr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ip.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ne = gt(l.nextSibling), _e = t, V = !0, Be = null, e !== null && (je[Te++] = qe, je[Te++] = be, je[Te++] = At, qe = e.id, be = e.overflow, At = t), t = Wi(t, r.children), t.flags |= 4096, t);
}
function la(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ho(e.return, t, n);
}
function lo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function cc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (de(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && la(e, n, t);
      else if (e.tag === 19) la(e, n, t);
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
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && sl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), lo(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && sl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      lo(t, !0, n, null, o);
      break;
    case "together":
      lo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function lt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $t |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Yd(e, t, n) {
  switch (t.tag) {
    case 3:
      ac(t), yn();
      break;
    case 5:
      Fs(t);
      break;
    case 1:
      xe(t.type) && rl(t);
      break;
    case 4:
      Mi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      $(il, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sc(e, t, n) : ($(Q, Q.current & 1), e = lt(e, t, n), e !== null ? e.sibling : null);
      $(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return cc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(Q, Q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ic(e, t, n);
  }
  return lt(e, t, n);
}
var fc, Jo, dc, pc;
fc = function(e, t) {
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
Jo = function() {
};
dc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Mt(Xe.current);
    var o = null;
    switch (n) {
      case "input":
        l = xo(e, l), r = xo(e, r), o = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = wo(e, l), r = wo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tl);
    }
    Eo(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Yn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Yn.hasOwnProperty(c) ? (a != null && c === "onScroll" && W("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
pc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dn(e, t) {
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
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Xd(e, t, n) {
  var r = t.pendingProps;
  switch (Pi(t), t.tag) {
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
      return se(t), null;
    case 1:
      return xe(t.type) && nl(), se(t), null;
    case 3:
      return r = t.stateNode, gn(), H(ve), H(fe), Fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Be !== null && (oi(Be), Be = null))), Jo(e, t), se(t), null;
    case 5:
      Ii(t);
      var l = Mt(ir.current);
      if (n = t.type, e !== null && t.stateNode != null) dc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return se(t), null;
        }
        if (e = Mt(Xe.current), Rr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ge] = t, r[lr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < On.length; l++) W(On[l], r);
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
              pu(r, o), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, W("invalid", r);
              break;
            case "textarea":
              yu(r, o), W("invalid", r);
          }
          Eo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Pr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Pr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Yn.hasOwnProperty(i) && u != null && i === "onScroll" && W("scroll", r);
          }
          switch (n) {
            case "input":
              xr(r), mu(r, o, !0);
              break;
            case "textarea":
              xr(r), hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ba(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ge] = t, e[lr] = r, fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = No(n, r), n) {
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
                for (l = 0; l < On.length; l++) W(On[l], e);
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
                pu(e, r), l = xo(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                yu(e, r), l = wo(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            Eo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Va(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Wa(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Xn(e, a) : typeof a == "number" && Xn(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Yn.hasOwnProperty(o) ? a != null && o === "onScroll" && W("scroll", e) : a != null && di(e, o, a, i));
            }
            switch (n) {
              case "input":
                xr(e), mu(e, r, !1);
                break;
              case "textarea":
                xr(e), hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
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
                typeof l.onClick == "function" && (e.onclick = tl);
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
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Mt(ir.current), Mt(Xe.current), Rr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ge] = t, (o = r.nodeValue !== n) && (e = _e, e !== null)) switch (e.tag) {
            case 3:
              Pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ge] = t, t.stateNode = r;
      }
      return se(t), null;
    case 13:
      if (H(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && Ne !== null && t.mode & 1 && !(t.flags & 128)) Ts(), yn(), t.flags |= 98560, o = !1;
        else if (o = Rr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Ge] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          se(t), o = !1;
        } else Be !== null && (oi(Be), Be = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? te === 0 && (te = 3) : Yi())), t.updateQueue !== null && (t.flags |= 4), se(t), null);
    case 4:
      return gn(), Jo(e, t), e === null && nr(t.stateNode.containerInfo), se(t), null;
    case 10:
      return Ti(t.type._context), se(t), null;
    case 17:
      return xe(t.type) && nl(), se(t), null;
    case 19:
      if (H(Q), o = t.memoizedState, o === null) return se(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Dn(o, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = sl(e), i !== null) {
            for (t.flags |= 128, Dn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return $(Q, Q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Z() > xn && (t.flags |= 128, r = !0, Dn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = sl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return se(t), null;
        } else 2 * Z() - o.renderingStartTime > xn && n !== 1073741824 && (t.flags |= 128, r = !0, Dn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = Q.current, $(Q, r ? n & 1 | 2 : n & 1), t) : (se(t), null);
    case 22:
    case 23:
      return Gi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Zd(e, t) {
  switch (Pi(t), t.tag) {
    case 1:
      return xe(t.type) && nl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gn(), H(ve), H(fe), Fi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ii(t), null;
    case 13:
      if (H(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Q), null;
    case 4:
      return gn(), null;
    case 10:
      return Ti(t.type._context), null;
    case 22:
    case 23:
      return Gi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1, ce = !1, Jd = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function qo(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var oa = !1;
function qd(e, t) {
  if (Io = qr, e = vs(), Ni(e)) {
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
        var i = 0, u = -1, a = -1, c = 0, h = 0, y = e, m = null;
        t: for (; ; ) {
          for (var g; y !== n || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (a = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (g = y.firstChild) !== null; )
            m = y, y = g;
          for (; ; ) {
            if (y === e) break t;
            if (m === n && ++c === l && (u = i), m === o && ++h === r && (a = i), (g = y.nextSibling) !== null) break;
            y = m, m = y.parentNode;
          }
          y = g;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fo = { focusedElem: e, selectionRange: n }, qr = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
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
            var w = k.memoizedProps, T = k.memoizedState, f = t.stateNode, s = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ue(t.type, w), T);
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
  return k = oa, oa = !1, k;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && qo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
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
function bo(e) {
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
function mc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, mc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ge], delete t[lr], delete t[Uo], delete t[Md], delete t[Id])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function yc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ia(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || yc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (ei(e, t, n), e = e.sibling; e !== null; ) ei(e, t, n), e = e.sibling;
}
function ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ti(e, t, n), e = e.sibling; e !== null; ) ti(e, t, n), e = e.sibling;
}
var oe = null, $e = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) hc(e, t, n), n = n.sibling;
}
function hc(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(vl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ce || ln(n, t);
    case 6:
      var r = oe, l = $e;
      oe = null, ut(e, t, n), oe = r, $e = l, oe !== null && ($e ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && ($e ? (e = oe, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), bn(e)) : Jl(oe, n.stateNode));
      break;
    case 4:
      r = oe, l = $e, oe = n.stateNode.containerInfo, $e = !0, ut(e, t, n), oe = r, $e = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && qo(n, t, i), l = l.next;
        } while (l !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (!ce && (ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        X(n, t, u);
      }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null, ut(e, t, n), ce = r) : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function ua(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jd()), t.forEach(function(r) {
      var l = up.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            oe = u.stateNode, $e = !1;
            break e;
          case 3:
            oe = u.stateNode.containerInfo, $e = !0;
            break e;
          case 4:
            oe = u.stateNode.containerInfo, $e = !0;
            break e;
        }
        u = u.return;
      }
      if (oe === null) throw Error(S(160));
      hc(o, i, l), oe = null, $e = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      X(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) gc(t, e), t = t.sibling;
}
function gc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), Ke(e), r & 4) {
        try {
          Vn(3, e, e.return), _l(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          Vn(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      Ae(t, e), Ke(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if (Ae(t, e), Ke(e), r & 512 && n !== null && ln(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Xn(l, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Ua(l, o), No(u, i);
          var c = No(u, o);
          for (i = 0; i < a.length; i += 2) {
            var h = a[i], y = a[i + 1];
            h === "style" ? Va(l, y) : h === "dangerouslySetInnerHTML" ? Wa(l, y) : h === "children" ? Xn(l, y) : di(l, h, y, c);
          }
          switch (u) {
            case "input":
              So(l, o);
              break;
            case "textarea":
              $a(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? un(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? un(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : un(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[lr] = o;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Ae(t, e), Ke(e), r & 4) {
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
      if (Ae(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        bn(t.containerInfo);
      } catch (w) {
        X(e, e.return, w);
      }
      break;
    case 4:
      Ae(t, e), Ke(e);
      break;
    case 13:
      Ae(t, e), Ke(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ki = Z())), r & 4 && ua(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ce = (c = ce) || h, Ae(t, e), ce = c) : Ae(t, e), Ke(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (_ = e, h = e.child; h !== null; ) {
          for (y = _ = h; _ !== null; ) {
            switch (m = _, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Vn(4, m, m.return);
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
                  sa(y);
                  continue;
                }
            }
            g !== null ? (g.return = m, _ = g) : sa(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, a = y.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Ha("display", i));
              } catch (w) {
                X(e, e.return, w);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = c ? "" : y.memoizedProps;
            } catch (w) {
              X(e, e.return, w);
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
      Ae(t, e), Ke(e), r & 4 && ua(e);
      break;
    case 21:
      break;
    default:
      Ae(
        t,
        e
      ), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yc(n)) {
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
          r.flags & 32 && (Xn(l, ""), r.flags &= -33);
          var o = ia(e);
          ti(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ia(e);
          ei(e, u, i);
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
function bd(e, t, n) {
  _ = e, vc(e);
}
function vc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Tr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || ce;
        u = Tr;
        var c = ce;
        if (Tr = i, (ce = a) && !c) for (_ = l; _ !== null; ) i = _, a = i.child, i.tag === 22 && i.memoizedState !== null ? ca(l) : a !== null ? (a.return = i, _ = a) : ca(l);
        for (; o !== null; ) _ = o, vc(o), o = o.sibling;
        _ = l, Tr = u, ce = c;
      }
      aa(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : aa(e);
  }
}
function aa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ce || _l(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ce) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ue(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Qu(t, o, r);
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
              Qu(t, i, n);
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
                var h = c.memoizedState;
                if (h !== null) {
                  var y = h.dehydrated;
                  y !== null && bn(y);
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
        ce || t.flags & 512 && bo(t);
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
function sa(e) {
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
function ca(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
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
            bo(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            bo(t);
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
var ep = Math.ceil, dl = ot.ReactCurrentDispatcher, Hi = ot.ReactCurrentOwner, Le = ot.ReactCurrentBatchConfig, O = 0, re = null, q = null, ie = 0, Ee = 0, on = Nt(0), te = 0, cr = null, $t = 0, Pl = 0, Vi = 0, Kn = null, he = null, Ki = 0, xn = 1 / 0, Ze = null, pl = !1, ni = null, xt = null, Dr = !1, pt = null, ml = 0, Qn = 0, ri = null, Vr = -1, Kr = 0;
function pe() {
  return O & 6 ? Z() : Vr !== -1 ? Vr : Vr = Z();
}
function St(e) {
  return e.mode & 1 ? O & 2 && ie !== 0 ? ie & -ie : Od.transition !== null ? (Kr === 0 && (Kr = ns()), Kr) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ss(e.type)), e) : 1;
}
function He(e, t, n, r) {
  if (50 < Qn) throw Qn = 0, ri = null, Error(S(185));
  dr(e, n, r), (!(O & 2) || e !== re) && (e === re && (!(O & 2) && (Pl |= n), te === 4 && ft(e, ie)), Se(e, r), n === 1 && O === 0 && !(t.mode & 1) && (xn = Z() + 500, Cl && _t()));
}
function Se(e, t) {
  var n = e.callbackNode;
  Of(e, t);
  var r = Jr(e, e === re ? ie : 0);
  if (r === 0) n !== null && xu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xu(n), t === 1) e.tag === 0 ? Fd(fa.bind(null, e)) : Rs(fa.bind(null, e)), Dd(function() {
      !(O & 6) && _t();
    }), n = null;
    else {
      switch (rs(r)) {
        case 1:
          n = gi;
          break;
        case 4:
          n = es;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = ts;
          break;
        default:
          n = Zr;
      }
      n = _c(n, xc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function xc(e, t) {
  if (Vr = -1, Kr = 0, O & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = Jr(e, e === re ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var o = kc();
    (re !== e || ie !== t) && (Ze = null, xn = Z() + 500, It(e, t));
    do
      try {
        rp();
        break;
      } catch (u) {
        Sc(e, u);
      }
    while (!0);
    ji(), dl.current = o, O = l, q !== null ? t = 0 : (re = null, ie = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (l = jo(e), l !== 0 && (r = l, t = li(e, l))), t === 1) throw n = cr, It(e, 0), ft(e, r), Se(e, Z()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !tp(l) && (t = yl(e, r), t === 2 && (o = jo(e), o !== 0 && (r = o, t = li(e, o))), t === 1)) throw n = cr, It(e, 0), ft(e, r), Se(e, Z()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Tt(e, he, Ze);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = Ki + 500 - Z(), 10 < t)) {
            if (Jr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              pe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ao(Tt.bind(null, e, he, Ze), t);
            break;
          }
          Tt(e, he, Ze);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - We(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ep(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ao(Tt.bind(null, e, he, Ze), r);
            break;
          }
          Tt(e, he, Ze);
          break;
        case 5:
          Tt(e, he, Ze);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Se(e, Z()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function li(e, t) {
  var n = Kn;
  return e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = he, he = n, t !== null && oi(t)), e;
}
function oi(e) {
  he === null ? he = e : he.push.apply(he, e);
}
function tp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ve(o(), l)) return !1;
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
function ft(e, t) {
  for (t &= ~Vi, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fa(e) {
  if (O & 6) throw Error(S(327));
  dn();
  var t = Jr(e, 0);
  if (!(t & 1)) return Se(e, Z()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = jo(e);
    r !== 0 && (t = r, n = li(e, r));
  }
  if (n === 1) throw n = cr, It(e, 0), ft(e, t), Se(e, Z()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tt(e, he, Ze), Se(e, Z()), null;
}
function Qi(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    O = n, O === 0 && (xn = Z() + 500, Cl && _t());
  }
}
function Bt(e) {
  pt !== null && pt.tag === 0 && !(O & 6) && dn();
  var t = O;
  O |= 1;
  var n = Le.transition, r = A;
  try {
    if (Le.transition = null, A = 1, e) return e();
  } finally {
    A = r, Le.transition = n, O = t, !(O & 6) && _t();
  }
}
function Gi() {
  Ee = on.current, H(on);
}
function It(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Td(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (Pi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && nl();
        break;
      case 3:
        gn(), H(ve), H(fe), Fi();
        break;
      case 5:
        Ii(r);
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
        Ti(r.type._context);
        break;
      case 22:
      case 23:
        Gi();
    }
    n = n.return;
  }
  if (re = e, q = e = kt(e.current, null), ie = Ee = t, te = 0, cr = null, Vi = Pl = $t = 0, he = Kn = null, Lt !== null) {
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
function Sc(e, t) {
  do {
    var n = q;
    try {
      if (ji(), Br.current = fl, cl) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        cl = !1;
      }
      if (Ut = 0, ne = ee = G = null, Hn = !1, ur = 0, Hi.current = null, n === null || n.return === null) {
        te = 1, cr = t, q = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, a = t;
        if (t = ie, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, h = u, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = qu(i);
          if (g !== null) {
            g.flags &= -257, bu(g, i, u, o, t), g.mode & 1 && Ju(o, c, t), t = g, a = c;
            var k = t.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ju(o, c, t), Yi();
              break e;
            }
            a = Error(S(426));
          }
        } else if (V && u.mode & 1) {
          var T = qu(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), bu(T, i, u, o, t), Ri(vn(a, u));
            break e;
          }
        }
        o = a = vn(a, u), te !== 4 && (te = 2), Kn === null ? Kn = [o] : Kn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = rc(o, a, t);
              Ku(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (xt === null || !xt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var x = lc(o, u, t);
                Ku(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Cc(n);
    } catch (N) {
      t = N, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kc() {
  var e = dl.current;
  return dl.current = fl, e === null ? fl : e;
}
function Yi() {
  (te === 0 || te === 3 || te === 2) && (te = 4), re === null || !($t & 268435455) && !(Pl & 268435455) || ft(re, ie);
}
function yl(e, t) {
  var n = O;
  O |= 2;
  var r = kc();
  (re !== e || ie !== t) && (Ze = null, It(e, t));
  do
    try {
      np();
      break;
    } catch (l) {
      Sc(e, l);
    }
  while (!0);
  if (ji(), O = n, dl.current = r, q !== null) throw Error(S(261));
  return re = null, ie = 0, te;
}
function np() {
  for (; q !== null; ) wc(q);
}
function rp() {
  for (; q !== null && !Rf(); ) wc(q);
}
function wc(e) {
  var t = Nc(e.alternate, e, Ee);
  e.memoizedProps = e.pendingProps, t === null ? Cc(e) : q = t, Hi.current = null;
}
function Cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Zd(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, q = null;
        return;
      }
    } else if (n = Xd(n, t, Ee), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Tt(e, t, n) {
  var r = A, l = Le.transition;
  try {
    Le.transition = null, A = 1, lp(e, t, n, r);
  } finally {
    Le.transition = l, A = r;
  }
  return null;
}
function lp(e, t, n, r) {
  do
    dn();
  while (pt !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Af(e, o), e === re && (q = re = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dr || (Dr = !0, _c(Zr, function() {
    return dn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Le.transition, Le.transition = null;
    var i = A;
    A = 1;
    var u = O;
    O |= 4, Hi.current = null, qd(e, n), gc(n, e), Ed(Fo), qr = !!Io, Fo = Io = null, e.current = n, bd(n), zf(), O = u, A = i, Le.transition = o;
  } else e.current = n;
  if (Dr && (Dr = !1, pt = e, ml = l), o = e.pendingLanes, o === 0 && (xt = null), Df(n.stateNode), Se(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw pl = !1, e = ni, ni = null, e;
  return ml & 1 && e.tag !== 0 && dn(), o = e.pendingLanes, o & 1 ? e === ri ? Qn++ : (Qn = 0, ri = e) : Qn = 0, _t(), null;
}
function dn() {
  if (pt !== null) {
    var e = rs(ml), t = Le.transition, n = A;
    try {
      if (Le.transition = null, A = 16 > e ? 16 : e, pt === null) var r = !1;
      else {
        if (e = pt, pt = null, ml = 0, O & 6) throw Error(S(331));
        var l = O;
        for (O |= 4, _ = e.current; _ !== null; ) {
          var o = _, i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (_ = c; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, _ = y;
                  else for (; _ !== null; ) {
                    h = _;
                    var m = h.sibling, g = h.return;
                    if (mc(h), h === c) {
                      _ = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, _ = m;
                      break;
                    }
                    _ = g;
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
                Vn(9, o, o.return);
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
                  _l(9, u);
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
        if (O = l, _t(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
          Ye.onPostCommitFiberRoot(vl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = n, Le.transition = t;
    }
  }
  return !1;
}
function da(e, t, n) {
  t = vn(n, t), t = rc(e, t, 1), e = vt(e, t, 1), t = pe(), e !== null && (dr(e, 1, t), Se(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) da(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      da(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
        e = vn(n, e), e = lc(t, e, 1), t = vt(t, e, 1), e = pe(), t !== null && (dr(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function op(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (ie & n) === n && (te === 4 || te === 3 && (ie & 130023424) === ie && 500 > Z() - Ki ? It(e, 0) : Vi |= n), Se(e, t);
}
function Ec(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = pe();
  e = rt(e, t), e !== null && (dr(e, t, n), Se(e, n));
}
function ip(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ec(e, n);
}
function up(e, t) {
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
  r !== null && r.delete(t), Ec(e, n);
}
var Nc;
Nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ve.current) ge = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ge = !1, Yd(e, t, n);
    ge = !!(e.flags & 131072);
  }
  else ge = !1, V && t.flags & 1048576 && zs(t, ol, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hr(e, t), e = t.pendingProps;
      var l = mn(t, fe.current);
      fn(t, n), l = Ai(null, t, r, e, l, n);
      var o = Ui();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xe(r) ? (o = !0, rl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Li(t), l.updater = Nl, t.stateNode = l, l._reactInternals = t, Ko(t, r, e, n), t = Yo(null, t, r, !0, o, n)) : (t.tag = 0, V && o && _i(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = sp(r), e = Ue(r, e), l) {
          case 0:
            t = Go(null, t, r, e, n);
            break e;
          case 1:
            t = na(null, t, r, e, n);
            break e;
          case 11:
            t = ea(null, t, r, e, n);
            break e;
          case 14:
            t = ta(null, t, r, Ue(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Go(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), na(e, t, r, l, n);
    case 3:
      e: {
        if (ac(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Is(e, t), al(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = vn(Error(S(423)), t), t = ra(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = vn(Error(S(424)), t), t = ra(e, t, r, n, l);
          break e;
        } else for (Ne = gt(t.stateNode.containerInfo.firstChild), _e = t, V = !0, Be = null, n = Ls(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yn(), r === l) {
            t = lt(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Fs(t), e === null && Wo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Oo(r, l) ? i = null : o !== null && Oo(r, o) && (t.flags |= 32), uc(e, t), de(e, t, i, n), t.child;
    case 6:
      return e === null && Wo(t), null;
    case 13:
      return sc(e, t, n);
    case 4:
      return Mi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hn(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), ea(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(il, r._currentValue), r._currentValue = i, o !== null) if (Ve(o.value, i)) {
          if (o.children === l.children && !ve.current) {
            t = lt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = et(-1, n & -n), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ho(
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
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ho(i, n, t), i = o.sibling;
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
        de(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, fn(t, n), l = Me(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ue(r, t.pendingProps), l = Ue(r.type, l), ta(e, t, r, l, n);
    case 15:
      return oc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ue(r, l), Hr(e, t), t.tag = 1, xe(r) ? (e = !0, rl(t)) : e = !1, fn(t, n), nc(t, r, l), Ko(t, r, l, n), Yo(null, t, r, !0, e, n);
    case 19:
      return cc(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function _c(e, t) {
  return ba(e, t);
}
function ap(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new ap(e, t, n, r);
}
function Xi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function sp(e) {
  if (typeof e == "function") return Xi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === mi) return 11;
    if (e === yi) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Qr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Xi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Xt:
      return Ft(n.children, l, o, t);
    case pi:
      i = 8, l |= 8;
      break;
    case yo:
      return e = De(12, n, t, l | 2), e.elementType = yo, e.lanes = o, e;
    case ho:
      return e = De(13, n, t, l), e.elementType = ho, e.lanes = o, e;
    case go:
      return e = De(19, n, t, l), e.elementType = go, e.lanes = o, e;
    case Fa:
      return Rl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ma:
          i = 10;
          break e;
        case Ia:
          i = 9;
          break e;
        case mi:
          i = 11;
          break e;
        case yi:
          i = 14;
          break e;
        case at:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = De(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Ft(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Rl(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Fa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function oo(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function io(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function cp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Zi(e, t, n, r, l, o, i, u, a) {
  return e = new cp(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = De(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Li(o), e;
}
function fp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Pc(e) {
  if (!e) return Ct;
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
          if (xe(t.type)) {
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
    if (xe(n)) return Ps(e, n, t);
  }
  return t;
}
function Rc(e, t, n, r, l, o, i, u, a) {
  return e = Zi(n, r, !0, e, l, o, i, u, a), e.context = Pc(null), n = e.current, r = pe(), l = St(n), o = et(r, l), o.callback = t ?? null, vt(n, o, l), e.current.lanes = l, dr(e, l, r), Se(e, r), e;
}
function zl(e, t, n, r) {
  var l = t.current, o = pe(), i = St(l);
  return n = Pc(n), t.context === null ? t.context = n : t.pendingContext = n, t = et(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = vt(l, t, i), e !== null && (He(e, l, i, o), $r(e, l, i)), i;
}
function hl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pa(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ji(e, t) {
  pa(e, t), (e = e.alternate) && pa(e, t);
}
function dp() {
  return null;
}
var zc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qi(e) {
  this._internalRoot = e;
}
jl.prototype.render = qi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  zl(e, t, null, null);
};
jl.prototype.unmount = qi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function() {
      zl(null, e, null, null);
    }), t[nt] = null;
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = is();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++) ;
    ct.splice(n, 0, e), n === 0 && as(e);
  }
};
function bi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Tl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ma() {
}
function pp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = hl(i);
        o.call(c);
      };
    }
    var i = Rc(t, r, e, 0, null, !1, !1, "", ma);
    return e._reactRootContainer = i, e[nt] = i.current, nr(e.nodeType === 8 ? e.parentNode : e), Bt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = hl(a);
      u.call(c);
    };
  }
  var a = Zi(e, 0, !1, null, null, !1, !1, "", ma);
  return e._reactRootContainer = a, e[nt] = a.current, nr(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
    zl(t, a, n, r);
  }), a;
}
function Dl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = hl(i);
        u.call(a);
      };
    }
    zl(t, i, e, l);
  } else i = pp(n, t, e, l, r);
  return hl(i);
}
ls = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fn(t.pendingLanes);
        n !== 0 && (vi(t, n | 1), Se(t, Z()), !(O & 6) && (xn = Z() + 500, _t()));
      }
      break;
    case 13:
      Bt(function() {
        var r = rt(e, 1);
        if (r !== null) {
          var l = pe();
          He(r, e, 1, l);
        }
      }), Ji(e, 1);
  }
};
xi = function(e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = pe();
      He(t, e, 134217728, n);
    }
    Ji(e, 134217728);
  }
};
os = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = rt(e, t);
    if (n !== null) {
      var r = pe();
      He(n, e, t, r);
    }
    Ji(e, t);
  }
};
is = function() {
  return A;
};
us = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
Po = function(e, t, n) {
  switch (t) {
    case "input":
      if (So(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(S(90));
            Aa(r), So(r, l);
          }
        }
      }
      break;
    case "textarea":
      $a(e, n);
      break;
    case "select":
      t = n.value, t != null && un(e, !!n.multiple, t, !1);
  }
};
Ga = Qi;
Ya = Bt;
var mp = { usingClientEntryPoint: !1, Events: [mr, bt, wl, Ka, Qa, Qi] }, Ln = { findFiberByHostInstance: Dt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, yp = { bundleType: Ln.bundleType, version: Ln.version, rendererPackageName: Ln.rendererPackageName, rendererConfig: Ln.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ja(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ln.findFiberByHostInstance || dp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lr.isDisabled && Lr.supportsFiber) try {
    vl = Lr.inject(yp), Ye = Lr;
  } catch {
  }
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
Re.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bi(t)) throw Error(S(200));
  return fp(e, t, null, n);
};
Re.createRoot = function(e, t) {
  if (!bi(e)) throw Error(S(299));
  var n = !1, r = "", l = zc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zi(e, 1, !1, null, null, n, !1, r, l), e[nt] = t.current, nr(e.nodeType === 8 ? e.parentNode : e), new qi(t);
};
Re.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Ja(t), e = e === null ? null : e.stateNode, e;
};
Re.flushSync = function(e) {
  return Bt(e);
};
Re.hydrate = function(e, t, n) {
  if (!Tl(t)) throw Error(S(200));
  return Dl(null, e, t, !0, n);
};
Re.hydrateRoot = function(e, t, n) {
  if (!bi(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = zc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Rc(t, null, e, 1, n ?? null, l, !1, o, i), e[nt] = t.current, nr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new jl(t);
};
Re.render = function(e, t, n) {
  if (!Tl(t)) throw Error(S(200));
  return Dl(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function(e) {
  if (!Tl(e)) throw Error(S(40));
  return e._reactRootContainer ? (Bt(function() {
    Dl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nt] = null;
    });
  }), !0) : !1;
};
Re.unstable_batchedUpdates = Qi;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Tl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Dl(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function jc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc);
    } catch (e) {
      console.error(e);
    }
}
jc(), ja.exports = Re;
var hp = ja.exports, ya = hp;
po.createRoot = ya.createRoot, po.hydrateRoot = ya.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = (e) => {
  const t = vp(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var uo = {
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
const xp = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, Sp = L.createContext({}), kp = () => L.useContext(Sp), wp = L.forwardRef(
  ({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: y = !1,
      color: m = "currentColor",
      className: g = ""
    } = kp() ?? {}, k = r ?? y ? Number(n ?? h) * 24 / Number(t ?? c) : n ?? h;
    return L.createElement(
      "svg",
      {
        ref: a,
        ...uo,
        width: t ?? c ?? uo.width,
        height: t ?? c ?? uo.height,
        stroke: e ?? m,
        strokeWidth: k,
        className: Tc("lucide", g, l),
        ...!o && !xp(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([w, T]) => L.createElement(w, T)),
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
const ke = (e, t) => {
  const n = L.forwardRef(
    ({ className: r, ...l }, o) => L.createElement(wp, {
      ref: o,
      iconNode: t,
      className: Tc(
        `lucide-${gp(ha(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return n.displayName = ha(e), n;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ep = ke("arrow-right", Cp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], ao = ke("arrow-up-down", Np);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = [
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
], Pp = ke("calculator", _p);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], zp = ke("check", Rp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Tp = ke("chevron-down", jp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], Lp = ke("globe", Dp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ga = ke("plus", Mp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Fp = ke("refresh-cw", Ip);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Ap = ke("rotate-ccw-clock", Op);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], $p = ke("search", Up);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Wp = ke("settings-2", Bp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = [
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
], Vp = ke("sparkles", Hp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Qp = ke("trash-2", Kp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], va = ke("x", Gp), Gn = {
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
}, so = ({ options: e, value: t, onChange: n }) => {
  const [r, l] = L.useState(!1), [o, i] = L.useState(""), u = L.useRef(null), [a, c] = L.useState(!1);
  L.useEffect(() => {
    const g = (k) => {
      u.current && !u.current.contains(k.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), L.useEffect(() => {
    r && u.current && (u.current.getBoundingClientRect().right > window.innerWidth / 2 ? c(!0) : c(!1));
  }, [r]);
  const h = e.filter((g) => {
    const k = Gn[g] || { name: g }, w = o.toLowerCase();
    return g.toLowerCase().includes(w) || k.name.toLowerCase().includes(w);
  }), y = Gn[t] || { name: t, symbol: t }, m = t === "EUR" ? "EU" : t === "BTC" ? "⚡" : t.substring(0, 2);
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
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "65px", marginTop: "2px" }, children: y.name })
              ] }),
              /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: "#a1a1aa", fontWeight: "600", marginLeft: "2px" }, children: y.symbol }),
              /* @__PURE__ */ p.jsx(Tp, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
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
                /* @__PURE__ */ p.jsx($p, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
                /* @__PURE__ */ p.jsx(
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
              /* @__PURE__ */ p.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: "4px 0",
                maxHeight: "260px",
                overflowY: "auto"
              }, children: h.length > 0 ? h.map((g) => {
                const k = Gn[g] || { name: g, symbol: g }, w = g === "EUR" ? "EU" : g === "BTC" ? "⚡" : g.substring(0, 2), T = g === t;
                return /* @__PURE__ */ p.jsxs(
                  "li",
                  {
                    onClick: () => {
                      n(g), l(!1), i("");
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
                          /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 600, color: T ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: g }),
                          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: k.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: k.symbol }),
                        T && /* @__PURE__ */ p.jsx(zp, { size: 14, color: "#a855f7" })
                      ] })
                    ]
                  },
                  g
                );
              }) : /* @__PURE__ */ p.jsx("li", { style: { padding: "16px", textAlign: "center", color: "#71717a", fontSize: "0.8rem" }, children: "No matching currency" }) })
            ]
          }
        )
      ]
    }
  );
}, co = "datacore_currency_history_v2", fo = "datacore_currency_chips_v2", Mr = "datacore_equivalent_currencies_v1", Yp = {
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
}, Xp = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL"], Zp = ["EUR", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"], Jp = ({ children: e }) => /* @__PURE__ */ p.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function qp() {
  const [e, t] = L.useState("calculator"), [n, r] = L.useState(Yp), [l, o] = L.useState("USD"), [i, u] = L.useState("USD"), [a, c] = L.useState("EUR"), [h, y] = L.useState("100"), [m, g] = L.useState("100 + 50"), [k, w] = L.useState("50"), [T, f] = L.useState(Xp), [s, d] = L.useState(!1), [x, N] = L.useState("VND"), [C, P] = L.useState(Zp), [R, B] = L.useState(!1), [M, we] = L.useState("MYR"), [le, Pt] = L.useState(!1), [Cn, hr] = L.useState(!1), [Vt, En] = L.useState("50"), [E, j] = L.useState("EUR"), [D, K] = L.useState("+"), [b, Kt] = L.useState(null), [Fe, Rt] = L.useState(!0), [Oe, zt] = L.useState(!1), [eu, Ll] = L.useState([]), Dc = L.useRef(null);
  L.useEffect(() => {
    try {
      const v = localStorage.getItem(co);
      v && Ll(JSON.parse(v));
      const z = localStorage.getItem(fo);
      z && f(JSON.parse(z));
      const F = localStorage.getItem(Mr);
      F && P(JSON.parse(F));
    } catch {
    }
  }, []);
  const tu = ((v) => {
    try {
      if (!v || !v.trim()) return 0;
      const z = v.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!z) return 0;
      const F = Function(`"use strict"; return (${z})`)();
      return typeof F == "number" && !isNaN(F) && isFinite(F) ? F : 0;
    } catch {
      return 0;
    }
  })(m), nu = tu.toFixed(2), ru = (() => {
    const v = parseFloat(h) || 0, z = n[i] || 1, F = n[a] || 1;
    return v / z * F;
  })().toFixed(2), Lc = (v) => {
    const z = n[l] || 1, F = n[v] || 1;
    return (tu / z * F).toFixed(2);
  }, Mc = (v) => {
    const z = parseFloat(h) || 0, F = n[i] || 1, U = n[v] || 1;
    return (z / F * U).toFixed(2);
  }, lu = async () => {
    zt(!0);
    try {
      const v = await fetch(`https://api.exchangerate-api.com/v4/latest/${l}`);
      if (v.ok) {
        const z = await v.json();
        r(z.rates), Kt(/* @__PURE__ */ new Date()), Rt(!0);
      } else
        Rt(!1);
    } catch {
      Rt(!1);
    } finally {
      zt(!1);
    }
  };
  L.useEffect(() => {
    lu();
  }, [l]);
  const J = (v) => {
    if (v === "AC")
      g("");
    else if (v === "DEL")
      g((z) => z.length > 0 ? z.slice(0, -1) : "");
    else if (v === "=") {
      const z = nu;
      g(z);
      const F = {
        id: Date.now().toString(),
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        from: l,
        expr: m,
        result: z
      };
      Ll((U) => {
        const Ce = [F, ...U.slice(0, 19)];
        try {
          localStorage.setItem(co, JSON.stringify(Ce));
        } catch {
        }
        return Ce;
      });
    } else
      g((z) => z + v);
  }, ou = (v, z, F) => {
    const U = parseFloat(z) || 0;
    if (U <= 0) return;
    const Ce = n[F] || 1, it = n[l] || 1, Ml = (U / Ce * it).toFixed(2);
    g((Wc) => {
      const Nn = Wc.trim();
      return !Nn || Nn === "0" ? Ml : ["+", "-", "*", "/", "×", "÷"].some((Hc) => Nn.endsWith(Hc)) ? `${Nn.slice(0, -1).trim()} ${v} ${Ml}` : `${Nn} ${v} ${Ml}`;
    }), hr(!1);
  }, Ic = (v) => {
    if (!T.includes(v)) {
      const z = [...T, v];
      f(z);
      try {
        localStorage.setItem(fo, JSON.stringify(z));
      } catch {
      }
    }
    d(!1);
  }, Fc = (v, z) => {
    v.stopPropagation();
    const F = T.filter((U) => U !== z);
    f(F);
    try {
      localStorage.setItem(fo, JSON.stringify(F));
    } catch {
    }
  }, Oc = (v) => {
    if (!C.includes(v)) {
      const z = [...C, v];
      P(z);
      try {
        localStorage.setItem(Mr, JSON.stringify(z));
      } catch {
      }
    }
    B(!1);
  }, Ac = (v, z) => {
    v.stopPropagation();
    const F = C.filter((U) => U !== z);
    P(F);
    try {
      localStorage.setItem(Mr, JSON.stringify(F));
    } catch {
    }
  }, iu = (v, z, F) => {
    v.stopPropagation();
    const U = z + F;
    if (U < 0 || U >= C.length) return;
    const Ce = [...C], it = Ce[z];
    Ce[z] = Ce[U], Ce[U] = it, P(Ce);
    try {
      localStorage.setItem(Mr, JSON.stringify(Ce));
    } catch {
    }
  }, Uc = () => {
    const v = parseFloat(h) || 0, z = n[l] || 1, U = (v / (n[i] || 1) * z).toFixed(2);
    g((Ce) => {
      const it = Ce.trim();
      return !it || it === "0" ? U : `${it} + ${U}`;
    }), t("calculator");
  }, Qt = Object.keys(n).sort(), $c = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"];
  return /* @__PURE__ */ p.jsx(Jp, { children: /* @__PURE__ */ p.jsx("div", { className: "currency-app", ref: Dc, style: { position: "relative" }, children: /* @__PURE__ */ p.jsxs("div", { className: "studio-card", children: [
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
        }, children: /* @__PURE__ */ p.jsx(Vp, { size: 14, color: "#fafafa" }) }),
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "1rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }, children: "Currency Studio" })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: Fe ? "#34d399" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: Fe ? "#10b981" : "#f59e0b"
        } }),
        /* @__PURE__ */ p.jsx("span", { children: Fe ? "Online" : "Offline" })
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
            /* @__PURE__ */ p.jsx(Pp, { size: 14 }),
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
            /* @__PURE__ */ p.jsx(ao, { size: 14 }),
            " Currency Pair"
          ]
        }
      )
    ] }),
    e === "calculator" && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "100%" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 2px" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "Target Base Currency:" }),
        /* @__PURE__ */ p.jsx(
          so,
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
          nu,
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
            C.filter((v) => v !== l).map((v) => {
              const z = C.indexOf(v), F = Lc(v);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  onClick: () => !le && o(v),
                  style: {
                    padding: "3px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: le ? "1px dashed #52525b" : "1px solid #27272a",
                    color: "#a1a1aa",
                    fontSize: "0.68rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: le ? "default" : "pointer",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  },
                  title: le ? "Reorder mode active" : `Click to set ${v} as primary base currency`,
                  children: [
                    le && z > 0 && /* @__PURE__ */ p.jsx(
                      "span",
                      {
                        onClick: (U) => iu(U, z, -1),
                        style: { color: "#ffffff", fontWeight: "900", cursor: "pointer", padding: "0 3px", backgroundColor: "#27272a", borderRadius: "3px" },
                        title: "Move Left",
                        children: "‹"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("span", { style: { color: "#ffffff", fontWeight: "700" }, children: v }),
                    /* @__PURE__ */ p.jsx("span", { style: { color: "#a1a1aa" }, children: F }),
                    le && z < C.length - 1 && /* @__PURE__ */ p.jsx(
                      "span",
                      {
                        onClick: (U) => iu(U, z, 1),
                        style: { color: "#ffffff", fontWeight: "900", cursor: "pointer", padding: "0 3px", backgroundColor: "#27272a", borderRadius: "3px" },
                        title: "Move Right",
                        children: "›"
                      }
                    ),
                    !le && C.length > 2 && /* @__PURE__ */ p.jsx(
                      va,
                      {
                        size: 10,
                        style: { opacity: 0.5, cursor: "pointer", marginLeft: "2px" },
                        onClick: (U) => Ac(U, v)
                      }
                    )
                  ]
                },
                v
              );
            }),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => Pt(!le),
                style: {
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backgroundColor: le ? "#27272a" : "#18181b",
                  border: "1px solid #27272a",
                  color: le ? "#ffffff" : "#a1a1aa",
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
                  /* @__PURE__ */ p.jsx(ao, { size: 10 }),
                  " ",
                  le ? "Done" : "Reorder"
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => B(!R),
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
                  /* @__PURE__ */ p.jsx(ga, { size: 10 }),
                  " Add"
                ]
              }
            )
          ] }),
          R && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "6px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#a1a1aa", fontWeight: "600" }, children: "Add Equivalent:" }),
            /* @__PURE__ */ p.jsx(
              "select",
              {
                value: M,
                onChange: (v) => we(v.target.value),
                style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "3px 6px", color: "#ffffff", fontSize: "0.7rem", outline: "none" },
                children: Qt.map((v) => /* @__PURE__ */ p.jsxs("option", { value: v, children: [
                  v,
                  " - ",
                  (Gn[v] || {}).name || v
                ] }, v))
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => Oc(M),
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
            /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "3px" }, children: ["10", "50", "100", "500"].map((v) => /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => w(v),
                style: {
                  padding: "2px 6px",
                  borderRadius: "4px",
                  backgroundColor: k === v ? "#27272a" : "transparent",
                  color: k === v ? "#ffffff" : "#71717a",
                  border: "1px solid #27272a",
                  fontSize: "0.65rem",
                  fontWeight: "700",
                  cursor: "pointer"
                },
                children: v
              },
              v
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
                  /* @__PURE__ */ p.jsx(ga, { size: 11 }),
                  " Add Currency"
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => hr(!Cn),
                style: { fontSize: "0.65rem", color: "#a1a1aa", backgroundColor: "transparent", border: "1px solid #27272a", padding: "3px 8px", borderRadius: "6px", cursor: "pointer", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" },
                children: [
                  /* @__PURE__ */ p.jsx(Wp, { size: 11 }),
                  " Math Injector"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px", scrollbarWidth: "none" }, children: T.map((v) => /* @__PURE__ */ p.jsxs(
          "div",
          {
            onClick: () => ou("+", k, v),
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
                v
              ] }),
              T.length > 3 && /* @__PURE__ */ p.jsx(
                va,
                {
                  size: 11,
                  style: { opacity: 0.5, cursor: "pointer" },
                  onClick: (z) => Fc(z, v)
                }
              )
            ]
          },
          v
        )) }),
        s && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "600" }, children: "Select Currency:" }),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: x,
              onChange: (v) => N(v.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 8px", color: "#ffffff", fontSize: "0.75rem", outline: "none" },
              children: Qt.map((v) => /* @__PURE__ */ p.jsxs("option", { value: v, children: [
                v,
                " - ",
                (Gn[v] || {}).name || v
              ] }, v))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => Ic(x),
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
              value: D,
              onChange: (v) => K(v.target.value),
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
              onChange: (v) => En(v.target.value),
              placeholder: "Amount",
              style: { width: "65px", background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" }
            }
          ),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: E,
              onChange: (v) => j(v.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" },
              children: Qt.map((v) => /* @__PURE__ */ p.jsx("option", { value: v, children: v }, v))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => ou(D, Vt, E),
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
            so,
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
              value: h,
              onChange: (v) => y(v.target.value),
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
            const v = i;
            u(a), c(v);
          },
          title: "Swap Pair",
          children: /* @__PURE__ */ p.jsx(ao, { size: 18 })
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Receive:" }),
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ p.jsx(
            so,
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
              value: ru,
              readOnly: !0,
              style: { color: "#ffffff", fontSize: "1.4rem", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { backgroundColor: "#09090b", padding: "12px", borderRadius: "12px", border: "1px solid #27272a", display: "flex", flexDirection: "column", gap: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "5px" }, children: [
          /* @__PURE__ */ p.jsx(Lp, { size: 12 }),
          " Live Pair Equivalents (",
          h,
          " ",
          i,
          "):"
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }, children: $c.filter((v) => v !== i).map((v) => {
          const z = Mc(v), F = v === a;
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              onClick: () => c(v),
              style: {
                backgroundColor: F ? "#27272a" : "#121215",
                border: F ? "1px solid #3f3f46" : "1px solid #1c1c21",
                borderRadius: "8px",
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.15s ease"
              },
              children: [
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: F ? "#ffffff" : "#a1a1aa", fontWeight: "800" }, children: v }),
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: "#ffffff", fontWeight: "700", fontFamily: "'JetBrains Mono', monospace" }, children: z })
              ]
            },
            v
          );
        }) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", width: "100%", marginTop: "2px" }, children: [
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: Uc,
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
              /* @__PURE__ */ p.jsx(Ep, { size: 15 }),
              " Push Result (",
              ru,
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
            onClick: lu,
            disabled: Oe,
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
              /* @__PURE__ */ p.jsx(Fp, { size: 14, className: Oe ? "animate-spin" : "" }),
              Oe ? "Syncing..." : "Sync Rates"
            ]
          }
        )
      ] })
    ] }),
    eu.length > 0 && /* @__PURE__ */ p.jsxs("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ p.jsx(Ap, { size: 13 }),
          "Calculation History Tape"
        ] }),
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              Ll([]), localStorage.removeItem(co);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ p.jsx(Qp, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: eu.map((v) => /* @__PURE__ */ p.jsxs(
        "div",
        {
          onClick: () => {
            g(v.expr), t("calculator");
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
              /* @__PURE__ */ p.jsx("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: v.expr }),
              " = ",
              /* @__PURE__ */ p.jsxs("span", { style: { color: "#ffffff", fontWeight: "700" }, children: [
                v.result,
                " ",
                v.from
              ] })
            ] }),
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: v.time })
          ]
        },
        v.id
      )) })
    ] })
  ] }) }) });
}
function nm(e, t) {
  if (!e) return () => {
  };
  const n = po.createRoot(e);
  return n.render(/* @__PURE__ */ p.jsx(qp, { platformAPI: t })), () => {
    try {
      n.unmount();
    } catch {
    }
  };
}
export {
  Jp as SafeAgentLayer,
  qp as default,
  nm as mount_app
};
