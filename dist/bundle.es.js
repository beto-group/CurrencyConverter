(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;min-height:100vh;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 52px) 12px calc(env(safe-area-inset-bottom,0px) + 24px) 12px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.studio-card{background:#121215;border:1px solid #27272a;border-radius:20px;padding:16px;width:100%;max-width:100%;box-shadow:0 20px 40px #0009;display:flex;flex-direction:column;gap:14px;position:relative;box-sizing:border-box;margin:auto 0;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:24px}.studio-card{max-width:480px;padding:24px;gap:18px}}.studio-header{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box}.tab-switcher{display:flex;background:#09090b;padding:3px;border-radius:12px;border:1px solid #27272a;width:100%;gap:4px}.tab-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 12px;border:none;border-radius:9px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s ease;color:#71717a;background:transparent}.tab-btn.active{background:#27272a;color:#fff;box-shadow:0 2px 8px #0006}.calc-screen{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;box-shadow:inset 0 2px 6px #000c;width:100%;box-sizing:border-box}.calc-expr{font-size:clamp(.85rem,3.5vw,1.05rem);color:#71717a;font-family:JetBrains Mono,monospace;word-break:break-all;min-height:24px;width:100%;text-align:right}.calc-result{font-size:clamp(1.6rem,7vw,2.4rem);font-weight:800;color:#fff;font-family:JetBrains Mono,monospace;overflow-x:auto;white-space:nowrap;line-height:1.1;width:100%;text-align:right;scrollbar-width:none}.calc-result::-webkit-scrollbar{display:none}.calc-keypad{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%;box-sizing:border-box}.key-btn{padding:14px 10px;border-radius:10px;border:1px solid #27272a;background:#18181b;color:#fff;font-size:clamp(1.05rem,4vw,1.25rem);font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;-webkit-user-select:none;user-select:none;box-shadow:0 2px 6px #0000004d}.key-btn:active{transform:scale(.95);background:#27272a}.key-btn.op{background:#27272a;color:#fff;border-color:#3f3f46;font-weight:800}.key-btn.op:active{background:#3f3f46}.key-btn.action{background:#18181b;color:#a1a1aa;border-color:#27272a;font-size:.85rem;font-weight:700}.key-btn.equal{background:#3f3f46;color:#fff;border-color:#52525b;font-weight:800;box-shadow:0 4px 12px #0006}.key-btn.equal:active{background:#52525b}.pair-box{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:8px;width:100%;box-sizing:border-box}.swap-circle{background:#18181b;border:1px solid #27272a;color:#a1a1aa;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-6px 0;z-index:2;box-shadow:0 4px 12px #00000080}.swap-circle:hover{background:#27272a;color:#fff;transform:rotate(180deg)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var ha = { exports: {} }, yl = {}, ga = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = Symbol.for("react.element"), $c = Symbol.for("react.portal"), Bc = Symbol.for("react.fragment"), Wc = Symbol.for("react.strict_mode"), Hc = Symbol.for("react.profiler"), Vc = Symbol.for("react.provider"), Kc = Symbol.for("react.context"), Qc = Symbol.for("react.forward_ref"), Gc = Symbol.for("react.suspense"), Yc = Symbol.for("react.memo"), Xc = Symbol.for("react.lazy"), ru = Symbol.iterator;
function Zc(e) {
  return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var va = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, xa = Object.assign, Sa = {};
function St(e, n, t) {
  this.props = e, this.context = n, this.refs = Sa, this.updater = t || va;
}
St.prototype.isReactComponent = {};
St.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
St.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ka() {
}
ka.prototype = St.prototype;
function li(e, n, t) {
  this.props = e, this.context = n, this.refs = Sa, this.updater = t || va;
}
var oi = li.prototype = new ka();
oi.constructor = li;
xa(oi, St.prototype);
oi.isPureReactComponent = !0;
var lu = Array.isArray, wa = Object.prototype.hasOwnProperty, ii = { current: null }, Ca = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ea(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) wa.call(n, r) && !Ca.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: fr, type: e, key: o, ref: i, props: l, _owner: ii.current };
}
function Jc(e, n) {
  return { $$typeof: fr, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function qc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var ou = /\/+/g;
function Ll(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? qc("" + e.key) : n.toString(36);
}
function Lr(e, n, t, r, l) {
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
        case $c:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Ll(i, 0) : r, lu(l) ? (t = "", e != null && (t = e.replace(ou, "$&/") + "/"), Lr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (ui(l) && (l = Jc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(ou, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", lu(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Ll(o, u);
    i += Lr(o, n, t, a, l);
  }
  else if (a = Zc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Ll(o, u++), i += Lr(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function hr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return Lr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function bc(e) {
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
var pe = { current: null }, Mr = { transition: null }, ef = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: Mr, ReactCurrentOwner: ii };
function Na() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: hr, forEach: function(e, n, t) {
  hr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return hr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return hr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!ui(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = St;
I.Fragment = Bc;
I.Profiler = Hc;
I.PureComponent = li;
I.StrictMode = Wc;
I.Suspense = Gc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ef;
I.act = Na;
I.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = xa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = ii.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) wa.call(n, a) && !Ca.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: fr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function(e) {
  return e = { $$typeof: Kc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vc, _context: e }, e.Consumer = e;
};
I.createElement = Ea;
I.createFactory = function(e) {
  var n = Ea.bind(null, e);
  return n.type = e, n;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: Qc, render: e };
};
I.isValidElement = ui;
I.lazy = function(e) {
  return { $$typeof: Xc, _payload: { _status: -1, _result: e }, _init: bc };
};
I.memo = function(e, n) {
  return { $$typeof: Yc, type: e, compare: n === void 0 ? null : n };
};
I.startTransition = function(e) {
  var n = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = n;
  }
};
I.unstable_act = Na;
I.useCallback = function(e, n) {
  return pe.current.useCallback(e, n);
};
I.useContext = function(e) {
  return pe.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return pe.current.useDeferredValue(e);
};
I.useEffect = function(e, n) {
  return pe.current.useEffect(e, n);
};
I.useId = function() {
  return pe.current.useId();
};
I.useImperativeHandle = function(e, n, t) {
  return pe.current.useImperativeHandle(e, n, t);
};
I.useInsertionEffect = function(e, n) {
  return pe.current.useInsertionEffect(e, n);
};
I.useLayoutEffect = function(e, n) {
  return pe.current.useLayoutEffect(e, n);
};
I.useMemo = function(e, n) {
  return pe.current.useMemo(e, n);
};
I.useReducer = function(e, n, t) {
  return pe.current.useReducer(e, n, t);
};
I.useRef = function(e) {
  return pe.current.useRef(e);
};
I.useState = function(e) {
  return pe.current.useState(e);
};
I.useSyncExternalStore = function(e, n, t) {
  return pe.current.useSyncExternalStore(e, n, t);
};
I.useTransition = function() {
  return pe.current.useTransition();
};
I.version = "18.3.1";
ga.exports = I;
var D = ga.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf = D, tf = Symbol.for("react.element"), rf = Symbol.for("react.fragment"), lf = Object.prototype.hasOwnProperty, of = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function _a(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) lf.call(n, r) && !uf.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: tf, type: e, key: o, ref: i, props: l, _owner: of.current };
}
yl.Fragment = rf;
yl.jsx = _a;
yl.jsxs = _a;
ha.exports = yl;
var p = ha.exports, co = {}, Pa = { exports: {} }, _e = {}, Ra = { exports: {} }, za = {};
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
  function n(C, z) {
    var L = C.length;
    C.push(z);
    e: for (; 0 < L; ) {
      var V = L - 1 >>> 1, Y = C[V];
      if (0 < l(Y, z)) C[V] = z, C[L] = Y, L = V;
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0], L = C.pop();
    if (L !== z) {
      C[0] = L;
      e: for (var V = 0, Y = C.length, un = Y >>> 1; V < un; ) {
        var Me = 2 * (V + 1) - 1, Vn = C[Me], We = Me + 1, an = C[We];
        if (0 > l(Vn, L)) We < Y && 0 > l(an, Vn) ? (C[V] = an, C[We] = L, V = We) : (C[V] = Vn, C[Me] = L, V = Me);
        else if (We < Y && 0 > l(an, L)) C[V] = an, C[We] = L, V = We;
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var L = C.sortIndex - z.sortIndex;
    return L !== 0 ? L : C.id - z.id;
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
  function d(C) {
    for (var z = t(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C) r(c), z.sortIndex = z.expirationTime, n(a, z);
      else break;
      z = t(c);
    }
  }
  function x(C) {
    if (w = !1, d(C), !k) if (t(a) !== null) k = !0, Hn(E);
    else {
      var z = t(c);
      z !== null && Et(x, z.startTime - C);
    }
  }
  function E(C, z) {
    k = !1, w && (w = !1, f(R), R = -1), g = !0;
    var L = m;
    try {
      for (d(z), y = t(a); y !== null && (!(y.expirationTime > z) || C && !ke()); ) {
        var V = y.callback;
        if (typeof V == "function") {
          y.callback = null, m = y.priorityLevel;
          var Y = V(y.expirationTime <= z);
          z = e.unstable_now(), typeof Y == "function" ? y.callback = Y : y === t(a) && r(a), d(z);
        } else r(a);
        y = t(a);
      }
      if (y !== null) var un = !0;
      else {
        var Me = t(c);
        Me !== null && Et(x, Me.startTime - z), un = !1;
      }
      return un;
    } finally {
      y = null, m = L, g = !1;
    }
  }
  var _ = !1, P = null, R = -1, $ = 5, M = -1;
  function ke() {
    return !(e.unstable_now() - M < $);
  }
  function ln() {
    if (P !== null) {
      var C = e.unstable_now();
      M = C;
      var z = !0;
      try {
        z = P(!0, C);
      } finally {
        z ? on() : (_ = !1, P = null);
      }
    } else _ = !1;
  }
  var on;
  if (typeof s == "function") on = function() {
    s(ln);
  };
  else if (typeof MessageChannel < "u") {
    var Ct = new MessageChannel(), Tl = Ct.port2;
    Ct.port1.onmessage = ln, on = function() {
      Tl.postMessage(null);
    };
  } else on = function() {
    T(ln, 0);
  };
  function Hn(C) {
    P = C, _ || (_ = !0, on());
  }
  function Et(C, z) {
    R = T(function() {
      C(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    k || g || (k = !0, Hn(E));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var L = m;
    m = z;
    try {
      return C();
    } finally {
      m = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, z) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var L = m;
    m = C;
    try {
      return z();
    } finally {
      m = L;
    }
  }, e.unstable_scheduleCallback = function(C, z, L) {
    var V = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? V + L : V) : L = V, C) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = L + Y, C = { id: h++, callback: z, priorityLevel: C, startTime: L, expirationTime: Y, sortIndex: -1 }, L > V ? (C.sortIndex = L, n(c, C), t(a) === null && C === t(c) && (w ? (f(R), R = -1) : w = !0, Et(x, L - V))) : (C.sortIndex = Y, n(a, C), k || g || (k = !0, Hn(E))), C;
  }, e.unstable_shouldYield = ke, e.unstable_wrapCallback = function(C) {
    var z = m;
    return function() {
      var L = m;
      m = z;
      try {
        return C.apply(this, arguments);
      } finally {
        m = L;
      }
    };
  };
})(za);
Ra.exports = za;
var af = Ra.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf = D, Ne = af;
function S(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ja = /* @__PURE__ */ new Set(), Yt = {};
function Bn(e, n) {
  pt(e, n), pt(e + "Capture", n);
}
function pt(e, n) {
  for (Yt[e] = n, e = 0; e < n.length; e++) ja.add(n[e]);
}
var be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fo = Object.prototype.hasOwnProperty, cf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, iu = {}, uu = {};
function ff(e) {
  return fo.call(uu, e) ? !0 : fo.call(iu, e) ? !1 : cf.test(e) ? uu[e] = !0 : (iu[e] = !0, !1);
}
function df(e, n, t, r) {
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
function pf(e, n, t, r) {
  if (n === null || typeof n > "u" || df(e, n, t, r)) return !0;
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
function me(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  oe[e] = new me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  oe[n] = new me(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  oe[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  oe[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  oe[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  oe[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  oe[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  oe[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  oe[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ai = /[\-:]([a-z])/g;
function si(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    ai,
    si
  );
  oe[n] = new me(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(ai, si);
  oe[n] = new me(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(ai, si);
  oe[n] = new me(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ci(e, n, t, r) {
  var l = oe.hasOwnProperty(n) ? oe[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (pf(n, t, l, r) && (t = null), r || l === null ? ff(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var rn = sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gr = Symbol.for("react.element"), Xn = Symbol.for("react.portal"), Zn = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), po = Symbol.for("react.profiler"), Ta = Symbol.for("react.provider"), Da = Symbol.for("react.context"), di = Symbol.for("react.forward_ref"), mo = Symbol.for("react.suspense"), yo = Symbol.for("react.suspense_list"), pi = Symbol.for("react.memo"), cn = Symbol.for("react.lazy"), La = Symbol.for("react.offscreen"), au = Symbol.iterator;
function _t(e) {
  return e === null || typeof e != "object" ? null : (e = au && e[au] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Ml;
function Mt(e) {
  if (Ml === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    Ml = n && n[1] || "";
  }
  return `
` + Ml + e;
}
var Il = !1;
function Fl(e, n) {
  if (!e || Il) return "";
  Il = !0;
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
    Il = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? Mt(e) : "";
}
function mf(e) {
  switch (e.tag) {
    case 5:
      return Mt(e.type);
    case 16:
      return Mt("Lazy");
    case 13:
      return Mt("Suspense");
    case 19:
      return Mt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Fl(e.type, !1), e;
    case 11:
      return e = Fl(e.type.render, !1), e;
    case 1:
      return e = Fl(e.type, !0), e;
    default:
      return "";
  }
}
function ho(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zn:
      return "Fragment";
    case Xn:
      return "Portal";
    case po:
      return "Profiler";
    case fi:
      return "StrictMode";
    case mo:
      return "Suspense";
    case yo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Da:
      return (e.displayName || "Context") + ".Consumer";
    case Ta:
      return (e._context.displayName || "Context") + ".Provider";
    case di:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case pi:
      return n = e.displayName || null, n !== null ? n : ho(e.type) || "Memo";
    case cn:
      n = e._payload, e = e._init;
      try {
        return ho(e(n));
      } catch {
      }
  }
  return null;
}
function yf(e) {
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
      return ho(n);
    case 8:
      return n === fi ? "StrictMode" : "Mode";
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
function En(e) {
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
function Ma(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function hf(e) {
  var n = Ma(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function vr(e) {
  e._valueTracker || (e._valueTracker = hf(e));
}
function Ia(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = Ma(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Kr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function go(e, n) {
  var t = n.checked;
  return G({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function su(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = En(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function Fa(e, n) {
  n = n.checked, n != null && ci(e, "checked", n, !1);
}
function vo(e, n) {
  Fa(e, n);
  var t = En(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? xo(e, n.type, t) : n.hasOwnProperty("defaultValue") && xo(e, n.type, En(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function cu(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function xo(e, n, t) {
  (n !== "number" || Kr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var It = Array.isArray;
function ut(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + En(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function So(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(S(91));
  return G({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fu(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(S(92));
      if (It(t)) {
        if (1 < t.length) throw Error(S(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: En(t) };
}
function Oa(e, n) {
  var t = En(n.value), r = En(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function du(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Aa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ko(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Aa(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr, Ua = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Xt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var At = {
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
}, gf = ["Webkit", "ms", "Moz", "O"];
Object.keys(At).forEach(function(e) {
  gf.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), At[n] = At[e];
  });
});
function $a(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || At.hasOwnProperty(e) && At[e] ? ("" + n).trim() : n + "px";
}
function Ba(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = $a(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var vf = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wo(e, n) {
  if (n) {
    if (vf[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(S(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(S(62));
  }
}
function Co(e, n) {
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
var Eo = null;
function mi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var No = null, at = null, st = null;
function pu(e) {
  if (e = mr(e)) {
    if (typeof No != "function") throw Error(S(280));
    var n = e.stateNode;
    n && (n = Sl(n), No(e.stateNode, e.type, n));
  }
}
function Wa(e) {
  at ? st ? st.push(e) : st = [e] : at = e;
}
function Ha() {
  if (at) {
    var e = at, n = st;
    if (st = at = null, pu(e), n) for (e = 0; e < n.length; e++) pu(n[e]);
  }
}
function Va(e, n) {
  return e(n);
}
function Ka() {
}
var Ol = !1;
function Qa(e, n, t) {
  if (Ol) return e(n, t);
  Ol = !0;
  try {
    return Va(e, n, t);
  } finally {
    Ol = !1, (at !== null || st !== null) && (Ka(), Ha());
  }
}
function Zt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = Sl(t);
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
var _o = !1;
if (be) try {
  var Pt = {};
  Object.defineProperty(Pt, "passive", { get: function() {
    _o = !0;
  } }), window.addEventListener("test", Pt, Pt), window.removeEventListener("test", Pt, Pt);
} catch {
  _o = !1;
}
function xf(e, n, t, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var Ut = !1, Qr = null, Gr = !1, Po = null, Sf = { onError: function(e) {
  Ut = !0, Qr = e;
} };
function kf(e, n, t, r, l, o, i, u, a) {
  Ut = !1, Qr = null, xf.apply(Sf, arguments);
}
function wf(e, n, t, r, l, o, i, u, a) {
  if (kf.apply(this, arguments), Ut) {
    if (Ut) {
      var c = Qr;
      Ut = !1, Qr = null;
    } else throw Error(S(198));
    Gr || (Gr = !0, Po = c);
  }
}
function Wn(e) {
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
function Ga(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function mu(e) {
  if (Wn(e) !== e) throw Error(S(188));
}
function Cf(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Wn(e), n === null) throw Error(S(188));
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
        if (o === t) return mu(l), e;
        if (o === r) return mu(l), n;
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
function Ya(e) {
  return e = Cf(e), e !== null ? Xa(e) : null;
}
function Xa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Xa(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Za = Ne.unstable_scheduleCallback, yu = Ne.unstable_cancelCallback, Ef = Ne.unstable_shouldYield, Nf = Ne.unstable_requestPaint, Z = Ne.unstable_now, _f = Ne.unstable_getCurrentPriorityLevel, yi = Ne.unstable_ImmediatePriority, Ja = Ne.unstable_UserBlockingPriority, Yr = Ne.unstable_NormalPriority, Pf = Ne.unstable_LowPriority, qa = Ne.unstable_IdlePriority, hl = null, Qe = null;
function Rf(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
    Qe.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ue = Math.clz32 ? Math.clz32 : Tf, zf = Math.log, jf = Math.LN2;
function Tf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zf(e) / jf | 0) | 0;
}
var Sr = 64, kr = 4194304;
function Ft(e) {
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
function Xr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Ft(u) : (o &= i, o !== 0 && (r = Ft(o)));
  } else i = t & ~l, i !== 0 ? r = Ft(i) : o !== 0 && (r = Ft(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Ue(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Df(e, n) {
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
function Lf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ue(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = Df(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ro(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ba() {
  var e = Sr;
  return Sr <<= 1, !(Sr & 4194240) && (Sr = 64), e;
}
function Al(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function dr(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ue(n), e[n] = t;
}
function Mf(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Ue(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function hi(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Ue(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var A = 0;
function es(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ns, gi, ts, rs, ls, zo = !1, wr = [], hn = null, gn = null, vn = null, Jt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), dn = [], If = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      hn = null;
      break;
    case "dragenter":
    case "dragleave":
      gn = null;
      break;
    case "mouseover":
    case "mouseout":
      vn = null;
      break;
    case "pointerover":
    case "pointerout":
      Jt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qt.delete(n.pointerId);
  }
}
function Rt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = mr(n), n !== null && gi(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function Ff(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return hn = Rt(hn, e, n, t, r, l), !0;
    case "dragenter":
      return gn = Rt(gn, e, n, t, r, l), !0;
    case "mouseover":
      return vn = Rt(vn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Jt.set(o, Rt(Jt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, qt.set(o, Rt(qt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function os(e) {
  var n = Tn(e.target);
  if (n !== null) {
    var t = Wn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Ga(t), n !== null) {
          e.blockedOn = n, ls(e.priority, function() {
            ts(t);
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
function Ir(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = jo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      Eo = r, t.target.dispatchEvent(r), Eo = null;
    } else return n = mr(t), n !== null && gi(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function gu(e, n, t) {
  Ir(e) && t.delete(n);
}
function Of() {
  zo = !1, hn !== null && Ir(hn) && (hn = null), gn !== null && Ir(gn) && (gn = null), vn !== null && Ir(vn) && (vn = null), Jt.forEach(gu), qt.forEach(gu);
}
function zt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, zo || (zo = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Of)));
}
function bt(e) {
  function n(l) {
    return zt(l, e);
  }
  if (0 < wr.length) {
    zt(wr[0], e);
    for (var t = 1; t < wr.length; t++) {
      var r = wr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (hn !== null && zt(hn, e), gn !== null && zt(gn, e), vn !== null && zt(vn, e), Jt.forEach(n), qt.forEach(n), t = 0; t < dn.length; t++) r = dn[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && (t = dn[0], t.blockedOn === null); ) os(t), t.blockedOn === null && dn.shift();
}
var ct = rn.ReactCurrentBatchConfig, Zr = !0;
function Af(e, n, t, r) {
  var l = A, o = ct.transition;
  ct.transition = null;
  try {
    A = 1, vi(e, n, t, r);
  } finally {
    A = l, ct.transition = o;
  }
}
function Uf(e, n, t, r) {
  var l = A, o = ct.transition;
  ct.transition = null;
  try {
    A = 4, vi(e, n, t, r);
  } finally {
    A = l, ct.transition = o;
  }
}
function vi(e, n, t, r) {
  if (Zr) {
    var l = jo(e, n, t, r);
    if (l === null) Yl(e, n, r, Jr, t), hu(e, r);
    else if (Ff(l, e, n, t, r)) r.stopPropagation();
    else if (hu(e, r), n & 4 && -1 < If.indexOf(e)) {
      for (; l !== null; ) {
        var o = mr(l);
        if (o !== null && ns(o), o = jo(e, n, t, r), o === null && Yl(e, n, r, Jr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Yl(e, n, r, null, t);
  }
}
var Jr = null;
function jo(e, n, t, r) {
  if (Jr = null, e = mi(r), e = Tn(e), e !== null) if (n = Wn(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Ga(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Jr = e, null;
}
function is(e) {
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
      switch (_f()) {
        case yi:
          return 1;
        case Ja:
          return 4;
        case Yr:
        case Pf:
          return 16;
        case qa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null, xi = null, Fr = null;
function us() {
  if (Fr) return Fr;
  var e, n = xi, t = n.length, r, l = "value" in mn ? mn.value : mn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Fr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Or(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Cr() {
  return !0;
}
function vu() {
  return !1;
}
function Pe(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Cr : vu, this.isPropagationStopped = vu, this;
  }
  return G(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Cr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Cr);
  }, persist: function() {
  }, isPersistent: Cr }), n;
}
var kt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Si = Pe(kt), pr = G({}, kt, { view: 0, detail: 0 }), $f = Pe(pr), Ul, $l, jt, gl = G({}, pr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ki, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== jt && (jt && e.type === "mousemove" ? (Ul = e.screenX - jt.screenX, $l = e.screenY - jt.screenY) : $l = Ul = 0, jt = e), Ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $l;
} }), xu = Pe(gl), Bf = G({}, gl, { dataTransfer: 0 }), Wf = Pe(Bf), Hf = G({}, pr, { relatedTarget: 0 }), Bl = Pe(Hf), Vf = G({}, kt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Pe(Vf), Qf = G({}, kt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Gf = Pe(Qf), Yf = G({}, kt, { data: 0 }), Su = Pe(Yf), Xf = {
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
}, Zf = {
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
}, Jf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Jf[e]) ? !!n[e] : !1;
}
function ki() {
  return qf;
}
var bf = G({}, pr, { key: function(e) {
  if (e.key) {
    var n = Xf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ki, charCode: function(e) {
  return e.type === "keypress" ? Or(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ed = Pe(bf), nd = G({}, gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ku = Pe(nd), td = G({}, pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ki }), rd = Pe(td), ld = G({}, kt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), od = Pe(ld), id = G({}, gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ud = Pe(id), ad = [9, 13, 27, 32], wi = be && "CompositionEvent" in window, $t = null;
be && "documentMode" in document && ($t = document.documentMode);
var sd = be && "TextEvent" in window && !$t, as = be && (!wi || $t && 8 < $t && 11 >= $t), wu = " ", Cu = !1;
function ss(e, n) {
  switch (e) {
    case "keyup":
      return ad.indexOf(n.keyCode) !== -1;
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
function cs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Jn = !1;
function cd(e, n) {
  switch (e) {
    case "compositionend":
      return cs(n);
    case "keypress":
      return n.which !== 32 ? null : (Cu = !0, wu);
    case "textInput":
      return e = n.data, e === wu && Cu ? null : e;
    default:
      return null;
  }
}
function fd(e, n) {
  if (Jn) return e === "compositionend" || !wi && ss(e, n) ? (e = us(), Fr = xi = mn = null, Jn = !1, e) : null;
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
      return as && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var dd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Eu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!dd[e.type] : n === "textarea";
}
function fs(e, n, t, r) {
  Wa(r), n = qr(n, "onChange"), 0 < n.length && (t = new Si("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Bt = null, er = null;
function pd(e) {
  ws(e, 0);
}
function vl(e) {
  var n = et(e);
  if (Ia(n)) return e;
}
function md(e, n) {
  if (e === "change") return n;
}
var ds = !1;
if (be) {
  var Wl;
  if (be) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Nu = document.createElement("div");
      Nu.setAttribute("oninput", "return;"), Hl = typeof Nu.oninput == "function";
    }
    Wl = Hl;
  } else Wl = !1;
  ds = Wl && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Bt && (Bt.detachEvent("onpropertychange", ps), er = Bt = null);
}
function ps(e) {
  if (e.propertyName === "value" && vl(er)) {
    var n = [];
    fs(n, er, e, mi(e)), Qa(pd, n);
  }
}
function yd(e, n, t) {
  e === "focusin" ? (_u(), Bt = n, er = t, Bt.attachEvent("onpropertychange", ps)) : e === "focusout" && _u();
}
function hd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vl(er);
}
function gd(e, n) {
  if (e === "click") return vl(n);
}
function vd(e, n) {
  if (e === "input" || e === "change") return vl(n);
}
function xd(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Be = typeof Object.is == "function" ? Object.is : xd;
function nr(e, n) {
  if (Be(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!fo.call(n, l) || !Be(e[l], n[l])) return !1;
  }
  return !0;
}
function Pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ru(e, n) {
  var t = Pu(e);
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
    t = Pu(t);
  }
}
function ms(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ms(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function ys() {
  for (var e = window, n = Kr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Kr(e.document);
  }
  return n;
}
function Ci(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Sd(e) {
  var n = ys(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && ms(t.ownerDocument.documentElement, t)) {
    if (r !== null && Ci(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ru(t, o);
        var i = Ru(
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
var kd = be && "documentMode" in document && 11 >= document.documentMode, qn = null, To = null, Wt = null, Do = !1;
function zu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Do || qn == null || qn !== Kr(r) || (r = qn, "selectionStart" in r && Ci(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wt && nr(Wt, r) || (Wt = r, r = qr(To, "onSelect"), 0 < r.length && (n = new Si("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = qn)));
}
function Er(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var bn = { animationend: Er("Animation", "AnimationEnd"), animationiteration: Er("Animation", "AnimationIteration"), animationstart: Er("Animation", "AnimationStart"), transitionend: Er("Transition", "TransitionEnd") }, Vl = {}, hs = {};
be && (hs = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
function xl(e) {
  if (Vl[e]) return Vl[e];
  if (!bn[e]) return e;
  var n = bn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in hs) return Vl[e] = n[t];
  return e;
}
var gs = xl("animationend"), vs = xl("animationiteration"), xs = xl("animationstart"), Ss = xl("transitionend"), ks = /* @__PURE__ */ new Map(), ju = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function _n(e, n) {
  ks.set(e, n), Bn(n, [e]);
}
for (var Kl = 0; Kl < ju.length; Kl++) {
  var Ql = ju[Kl], wd = Ql.toLowerCase(), Cd = Ql[0].toUpperCase() + Ql.slice(1);
  _n(wd, "on" + Cd);
}
_n(gs, "onAnimationEnd");
_n(vs, "onAnimationIteration");
_n(xs, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(Ss, "onTransitionEnd");
pt("onMouseEnter", ["mouseout", "mouseover"]);
pt("onMouseLeave", ["mouseout", "mouseover"]);
pt("onPointerEnter", ["pointerout", "pointerover"]);
pt("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ot = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ed = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ot));
function Tu(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, wf(r, n, void 0, e), e.currentTarget = null;
}
function ws(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Tu(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Tu(l, u, c), o = a;
      }
    }
  }
  if (Gr) throw e = Po, Gr = !1, Po = null, e;
}
function B(e, n) {
  var t = n[Oo];
  t === void 0 && (t = n[Oo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (Cs(n, e, 2, !1), t.add(r));
}
function Gl(e, n, t) {
  var r = 0;
  n && (r |= 4), Cs(t, e, r, n);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Nr]) {
    e[Nr] = !0, ja.forEach(function(t) {
      t !== "selectionchange" && (Ed.has(t) || Gl(t, !1, e), Gl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Nr] || (n[Nr] = !0, Gl("selectionchange", !1, n));
  }
}
function Cs(e, n, t, r) {
  switch (is(n)) {
    case 1:
      var l = Af;
      break;
    case 4:
      l = Uf;
      break;
    default:
      l = vi;
  }
  t = l.bind(null, n, t, e), l = void 0, !_o || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Yl(e, n, t, r, l) {
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
        if (i = Tn(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Qa(function() {
    var c = o, h = mi(t), y = [];
    e: {
      var m = ks.get(e);
      if (m !== void 0) {
        var g = Si, k = e;
        switch (e) {
          case "keypress":
            if (Or(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = ed;
            break;
          case "focusin":
            k = "focus", g = Bl;
            break;
          case "focusout":
            k = "blur", g = Bl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Bl;
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
            g = xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Wf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = rd;
            break;
          case gs:
          case vs:
          case xs:
            g = Kf;
            break;
          case Ss:
            g = od;
            break;
          case "scroll":
            g = $f;
            break;
          case "wheel":
            g = ud;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Gf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ku;
        }
        var w = (n & 4) !== 0, T = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var x = d.stateNode;
          if (d.tag === 5 && x !== null && (d = x, f !== null && (x = Zt(s, f), x != null && w.push(rr(s, x, d)))), T) break;
          s = s.return;
        }
        0 < w.length && (m = new g(m, k, null, t, h), y.push({ event: m, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && t !== Eo && (k = t.relatedTarget || t.fromElement) && (Tn(k) || k[en])) break e;
        if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (k = t.relatedTarget || t.toElement, g = c, k = k ? Tn(k) : null, k !== null && (T = Wn(k), k !== T || k.tag !== 5 && k.tag !== 6) && (k = null)) : (g = null, k = c), g !== k)) {
          if (w = xu, x = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = ku, x = "onPointerLeave", f = "onPointerEnter", s = "pointer"), T = g == null ? m : et(g), d = k == null ? m : et(k), m = new w(x, s + "leave", g, t, h), m.target = T, m.relatedTarget = d, x = null, Tn(h) === c && (w = new w(f, s + "enter", k, t, h), w.target = d, w.relatedTarget = T, x = w), T = x, g && k) n: {
            for (w = g, f = k, s = 0, d = w; d; d = Yn(d)) s++;
            for (d = 0, x = f; x; x = Yn(x)) d++;
            for (; 0 < s - d; ) w = Yn(w), s--;
            for (; 0 < d - s; ) f = Yn(f), d--;
            for (; s--; ) {
              if (w === f || f !== null && w === f.alternate) break n;
              w = Yn(w), f = Yn(f);
            }
            w = null;
          }
          else w = null;
          g !== null && Du(y, m, g, w, !1), k !== null && T !== null && Du(y, T, k, w, !0);
        }
      }
      e: {
        if (m = c ? et(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var E = md;
        else if (Eu(m)) if (ds) E = vd;
        else {
          E = hd;
          var _ = yd;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = gd);
        if (E && (E = E(e, c))) {
          fs(y, E, t, h);
          break e;
        }
        _ && _(e, m, c), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && xo(m, "number", m.value);
      }
      switch (_ = c ? et(c) : window, e) {
        case "focusin":
          (Eu(_) || _.contentEditable === "true") && (qn = _, To = c, Wt = null);
          break;
        case "focusout":
          Wt = To = qn = null;
          break;
        case "mousedown":
          Do = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Do = !1, zu(y, t, h);
          break;
        case "selectionchange":
          if (kd) break;
        case "keydown":
        case "keyup":
          zu(y, t, h);
      }
      var P;
      if (wi) e: {
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
      else Jn ? ss(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
      R && (as && t.locale !== "ko" && (Jn || R !== "onCompositionStart" ? R === "onCompositionEnd" && Jn && (P = us()) : (mn = h, xi = "value" in mn ? mn.value : mn.textContent, Jn = !0)), _ = qr(c, R), 0 < _.length && (R = new Su(R, e, null, t, h), y.push({ event: R, listeners: _ }), P ? R.data = P : (P = cs(t), P !== null && (R.data = P)))), (P = sd ? cd(e, t) : fd(e, t)) && (c = qr(c, "onBeforeInput"), 0 < c.length && (h = new Su("onBeforeInput", "beforeinput", null, t, h), y.push({ event: h, listeners: c }), h.data = P));
    }
    ws(y, n);
  });
}
function rr(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function qr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Zt(e, t), o != null && r.unshift(rr(e, o, l)), o = Zt(e, n), o != null && r.push(rr(e, o, l))), e = e.return;
  }
  return r;
}
function Yn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Du(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Zt(t, o), a != null && i.unshift(rr(t, a, u))) : l || (a = Zt(t, o), a != null && i.push(rr(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Nd = /\r\n?/g, _d = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Nd, `
`).replace(_d, "");
}
function _r(e, n, t) {
  if (n = Lu(n), Lu(e) !== n && t) throw Error(S(425));
}
function br() {
}
var Lo = null, Mo = null;
function Io(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Fo = typeof setTimeout == "function" ? setTimeout : void 0, Pd = typeof clearTimeout == "function" ? clearTimeout : void 0, Mu = typeof Promise == "function" ? Promise : void 0, Rd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mu < "u" ? function(e) {
  return Mu.resolve(null).then(e).catch(zd);
} : Fo;
function zd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), bt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  bt(n);
}
function xn(e) {
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
function Iu(e) {
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
var wt = Math.random().toString(36).slice(2), Ke = "__reactFiber$" + wt, lr = "__reactProps$" + wt, en = "__reactContainer$" + wt, Oo = "__reactEvents$" + wt, jd = "__reactListeners$" + wt, Td = "__reactHandles$" + wt;
function Tn(e) {
  var n = e[Ke];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[en] || t[Ke]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Iu(e); e !== null; ) {
        if (t = e[Ke]) return t;
        e = Iu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function mr(e) {
  return e = e[Ke] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function et(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Sl(e) {
  return e[lr] || null;
}
var Ao = [], nt = -1;
function Pn(e) {
  return { current: e };
}
function W(e) {
  0 > nt || (e.current = Ao[nt], Ao[nt] = null, nt--);
}
function U(e, n) {
  nt++, Ao[nt] = e.current, e.current = n;
}
var Nn = {}, ce = Pn(Nn), ge = Pn(!1), Fn = Nn;
function mt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return Nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function el() {
  W(ge), W(ce);
}
function Fu(e, n, t) {
  if (ce.current !== Nn) throw Error(S(168));
  U(ce, n), U(ge, t);
}
function Es(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(S(108, yf(e) || "Unknown", l));
  return G({}, t, r);
}
function nl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nn, Fn = ce.current, U(ce, e), U(ge, ge.current), !0;
}
function Ou(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  t ? (e = Es(e, n, Fn), r.__reactInternalMemoizedMergedChildContext = e, W(ge), W(ce), U(ce, e)) : W(ge), U(ge, t);
}
var Xe = null, kl = !1, Zl = !1;
function Ns(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function Dd(e) {
  kl = !0, Ns(e);
}
function Rn() {
  if (!Zl && Xe !== null) {
    Zl = !0;
    var e = 0, n = A;
    try {
      var t = Xe;
      for (A = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, kl = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), Za(yi, Rn), l;
    } finally {
      A = n, Zl = !1;
    }
  }
  return null;
}
var tt = [], rt = 0, tl = null, rl = 0, Re = [], ze = 0, On = null, Ze = 1, Je = "";
function zn(e, n) {
  tt[rt++] = rl, tt[rt++] = tl, tl = e, rl = n;
}
function _s(e, n, t) {
  Re[ze++] = Ze, Re[ze++] = Je, Re[ze++] = On, On = e;
  var r = Ze;
  e = Je;
  var l = 32 - Ue(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Ue(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ze = 1 << 32 - Ue(n) + l | t << l | r, Je = o + e;
  } else Ze = 1 << o | t << l | r, Je = e;
}
function Ei(e) {
  e.return !== null && (zn(e, 1), _s(e, 1, 0));
}
function Ni(e) {
  for (; e === tl; ) tl = tt[--rt], tt[rt] = null, rl = tt[--rt], tt[rt] = null;
  for (; e === On; ) On = Re[--ze], Re[ze] = null, Je = Re[--ze], Re[ze] = null, Ze = Re[--ze], Re[ze] = null;
}
var Ee = null, Ce = null, H = !1, Ae = null;
function Ps(e, n) {
  var t = je(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Au(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ee = e, Ce = xn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ee = e, Ce = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = On !== null ? { id: Ze, overflow: Je } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = je(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ee = e, Ce = null, !0) : !1;
    default:
      return !1;
  }
}
function Uo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $o(e) {
  if (H) {
    var n = Ce;
    if (n) {
      var t = n;
      if (!Au(e, n)) {
        if (Uo(e)) throw Error(S(418));
        n = xn(t.nextSibling);
        var r = Ee;
        n && Au(e, n) ? Ps(r, t) : (e.flags = e.flags & -4097 | 2, H = !1, Ee = e);
      }
    } else {
      if (Uo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, H = !1, Ee = e;
    }
  }
}
function Uu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ee = e;
}
function Pr(e) {
  if (e !== Ee) return !1;
  if (!H) return Uu(e), H = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Io(e.type, e.memoizedProps)), n && (n = Ce)) {
    if (Uo(e)) throw Rs(), Error(S(418));
    for (; n; ) Ps(e, n), n = xn(n.nextSibling);
  }
  if (Uu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Ce = xn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ee ? xn(e.stateNode.nextSibling) : null;
  return !0;
}
function Rs() {
  for (var e = Ce; e; ) e = xn(e.nextSibling);
}
function yt() {
  Ce = Ee = null, H = !1;
}
function _i(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
var Ld = rn.ReactCurrentBatchConfig;
function Tt(e, n, t) {
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
function Rr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function $u(e) {
  var n = e._init;
  return n(e._payload);
}
function zs(e) {
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
    return f = Cn(f, s), f.index = 0, f.sibling = null, f;
  }
  function o(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, x) {
    return s === null || s.tag !== 6 ? (s = ro(d, f.mode, x), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, x) {
    var E = d.type;
    return E === Zn ? h(f, s, d.props.children, x, d.key) : s !== null && (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === cn && $u(E) === s.type) ? (x = l(s, d.props), x.ref = Tt(f, s, d), x.return = f, x) : (x = Vr(d.type, d.key, d.props, null, f.mode, x), x.ref = Tt(f, s, d), x.return = f, x);
  }
  function c(f, s, d, x) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = lo(d, f.mode, x), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, x, E) {
    return s === null || s.tag !== 7 ? (s = In(d, f.mode, x, E), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function y(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = ro("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case gr:
          return d = Vr(s.type, s.key, s.props, null, f.mode, d), d.ref = Tt(f, null, s), d.return = f, d;
        case Xn:
          return s = lo(s, f.mode, d), s.return = f, s;
        case cn:
          var x = s._init;
          return y(f, x(s._payload), d);
      }
      if (It(s) || _t(s)) return s = In(s, f.mode, d, null), s.return = f, s;
      Rr(f, s);
    }
    return null;
  }
  function m(f, s, d, x) {
    var E = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, s, "" + d, x);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case gr:
          return d.key === E ? a(f, s, d, x) : null;
        case Xn:
          return d.key === E ? c(f, s, d, x) : null;
        case cn:
          return E = d._init, m(
            f,
            s,
            E(d._payload),
            x
          );
      }
      if (It(d) || _t(d)) return E !== null ? null : h(f, s, d, x, null);
      Rr(f, d);
    }
    return null;
  }
  function g(f, s, d, x, E) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return f = f.get(d) || null, u(s, f, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case gr:
          return f = f.get(x.key === null ? d : x.key) || null, a(s, f, x, E);
        case Xn:
          return f = f.get(x.key === null ? d : x.key) || null, c(s, f, x, E);
        case cn:
          var _ = x._init;
          return g(f, s, d, _(x._payload), E);
      }
      if (It(x) || _t(x)) return f = f.get(d) || null, h(s, f, x, E, null);
      Rr(s, x);
    }
    return null;
  }
  function k(f, s, d, x) {
    for (var E = null, _ = null, P = s, R = s = 0, $ = null; P !== null && R < d.length; R++) {
      P.index > R ? ($ = P, P = null) : $ = P.sibling;
      var M = m(f, P, d[R], x);
      if (M === null) {
        P === null && (P = $);
        break;
      }
      e && P && M.alternate === null && n(f, P), s = o(M, s, R), _ === null ? E = M : _.sibling = M, _ = M, P = $;
    }
    if (R === d.length) return t(f, P), H && zn(f, R), E;
    if (P === null) {
      for (; R < d.length; R++) P = y(f, d[R], x), P !== null && (s = o(P, s, R), _ === null ? E = P : _.sibling = P, _ = P);
      return H && zn(f, R), E;
    }
    for (P = r(f, P); R < d.length; R++) $ = g(P, f, R, d[R], x), $ !== null && (e && $.alternate !== null && P.delete($.key === null ? R : $.key), s = o($, s, R), _ === null ? E = $ : _.sibling = $, _ = $);
    return e && P.forEach(function(ke) {
      return n(f, ke);
    }), H && zn(f, R), E;
  }
  function w(f, s, d, x) {
    var E = _t(d);
    if (typeof E != "function") throw Error(S(150));
    if (d = E.call(d), d == null) throw Error(S(151));
    for (var _ = E = null, P = s, R = s = 0, $ = null, M = d.next(); P !== null && !M.done; R++, M = d.next()) {
      P.index > R ? ($ = P, P = null) : $ = P.sibling;
      var ke = m(f, P, M.value, x);
      if (ke === null) {
        P === null && (P = $);
        break;
      }
      e && P && ke.alternate === null && n(f, P), s = o(ke, s, R), _ === null ? E = ke : _.sibling = ke, _ = ke, P = $;
    }
    if (M.done) return t(
      f,
      P
    ), H && zn(f, R), E;
    if (P === null) {
      for (; !M.done; R++, M = d.next()) M = y(f, M.value, x), M !== null && (s = o(M, s, R), _ === null ? E = M : _.sibling = M, _ = M);
      return H && zn(f, R), E;
    }
    for (P = r(f, P); !M.done; R++, M = d.next()) M = g(P, f, R, M.value, x), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? R : M.key), s = o(M, s, R), _ === null ? E = M : _.sibling = M, _ = M);
    return e && P.forEach(function(ln) {
      return n(f, ln);
    }), H && zn(f, R), E;
  }
  function T(f, s, d, x) {
    if (typeof d == "object" && d !== null && d.type === Zn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case gr:
          e: {
            for (var E = d.key, _ = s; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Zn) {
                  if (_.tag === 7) {
                    t(f, _.sibling), s = l(_, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === cn && $u(E) === _.type) {
                  t(f, _.sibling), s = l(_, d.props), s.ref = Tt(f, _, d), s.return = f, f = s;
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            d.type === Zn ? (s = In(d.props.children, f.mode, x, d.key), s.return = f, f = s) : (x = Vr(d.type, d.key, d.props, null, f.mode, x), x.ref = Tt(f, s, d), x.return = f, f = x);
          }
          return i(f);
        case Xn:
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
            s = lo(d, f.mode, x), s.return = f, f = s;
          }
          return i(f);
        case cn:
          return _ = d._init, T(f, s, _(d._payload), x);
      }
      if (It(d)) return k(f, s, d, x);
      if (_t(d)) return w(f, s, d, x);
      Rr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(f, s.sibling), s = l(s, d), s.return = f, f = s) : (t(f, s), s = ro(d, f.mode, x), s.return = f, f = s), i(f)) : t(f, s);
  }
  return T;
}
var ht = zs(!0), js = zs(!1), ll = Pn(null), ol = null, lt = null, Pi = null;
function Ri() {
  Pi = lt = ol = null;
}
function zi(e) {
  var n = ll.current;
  W(ll), e._currentValue = n;
}
function Bo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function ft(e, n) {
  ol = e, Pi = lt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (he = !0), e.firstContext = null);
}
function De(e) {
  var n = e._currentValue;
  if (Pi !== e) if (e = { context: e, memoizedValue: n, next: null }, lt === null) {
    if (ol === null) throw Error(S(308));
    lt = e, ol.dependencies = { lanes: 0, firstContext: e };
  } else lt = lt.next = e;
  return n;
}
var Dn = null;
function ji(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function Ts(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, ji(n)) : (t.next = l.next, l.next = t), n.interleaved = t, nn(e, r);
}
function nn(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var fn = !1;
function Ti(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ds(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function qe(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function Sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, nn(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, ji(r)) : (n.next = l.next, l.next = n), r.interleaved = n, nn(e, t);
}
function Ar(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, hi(e, t);
  }
}
function Bu(e, n) {
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
function il(e, n, t, r) {
  var l = e.updateQueue;
  fn = !1;
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
          switch (m = n, g = t, w.tag) {
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
              y = G({}, y, m);
              break e;
            case 2:
              fn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = g, a = y) : h = h.next = g, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = y), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    Un |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Wu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var yr = {}, Ge = Pn(yr), or = Pn(yr), ir = Pn(yr);
function Ln(e) {
  if (e === yr) throw Error(S(174));
  return e;
}
function Di(e, n) {
  switch (U(ir, n), U(or, e), U(Ge, yr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ko(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = ko(n, e);
  }
  W(Ge), U(Ge, n);
}
function gt() {
  W(Ge), W(or), W(ir);
}
function Ls(e) {
  Ln(ir.current);
  var n = Ln(Ge.current), t = ko(n, e.type);
  n !== t && (U(or, e), U(Ge, t));
}
function Li(e) {
  or.current === e && (W(Ge), W(or));
}
var K = Pn(0);
function ul(e) {
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
var Jl = [];
function Mi() {
  for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Ur = rn.ReactCurrentDispatcher, ql = rn.ReactCurrentBatchConfig, An = 0, Q = null, b = null, ne = null, al = !1, Ht = !1, ur = 0, Md = 0;
function ue() {
  throw Error(S(321));
}
function Ii(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Be(e[t], n[t])) return !1;
  return !0;
}
function Fi(e, n, t, r, l, o) {
  if (An = o, Q = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Ad : Ud, e = t(r, l), Ht) {
    o = 0;
    do {
      if (Ht = !1, ur = 0, 25 <= o) throw Error(S(301));
      o += 1, ne = b = null, n.updateQueue = null, Ur.current = $d, e = t(r, l);
    } while (Ht);
  }
  if (Ur.current = sl, n = b !== null && b.next !== null, An = 0, ne = b = Q = null, al = !1, n) throw Error(S(300));
  return e;
}
function Oi() {
  var e = ur !== 0;
  return ur = 0, e;
}
function Ve() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ne === null ? Q.memoizedState = ne = e : ne = ne.next = e, ne;
}
function Le() {
  if (b === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var n = ne === null ? Q.memoizedState : ne.next;
  if (n !== null) ne = n, b = e;
  else {
    if (e === null) throw Error(S(310));
    b = e, e = { memoizedState: b.memoizedState, baseState: b.baseState, baseQueue: b.baseQueue, queue: b.queue, next: null }, ne === null ? Q.memoizedState = ne = e : ne = ne.next = e;
  }
  return ne;
}
function ar(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function bl(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = b, l = r.baseQueue, o = t.pending;
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
      if ((An & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var y = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = y, i = r) : a = a.next = y, Q.lanes |= h, Un |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, Be(r, n.memoizedState) || (he = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, Un |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function eo(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(S(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Be(o, n.memoizedState) || (he = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function Ms() {
}
function Is(e, n) {
  var t = Q, r = Le(), l = n(), o = !Be(r.memoizedState, l);
  if (o && (r.memoizedState = l, he = !0), r = r.queue, Ai(As.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ne !== null && ne.memoizedState.tag & 1) {
    if (t.flags |= 2048, sr(9, Os.bind(null, t, r, l, n), void 0, null), te === null) throw Error(S(349));
    An & 30 || Fs(t, n, l);
  }
  return l;
}
function Fs(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Os(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Us(n) && $s(e);
}
function As(e, n, t) {
  return t(function() {
    Us(n) && $s(e);
  });
}
function Us(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Be(e, t);
  } catch {
    return !0;
  }
}
function $s(e) {
  var n = nn(e, 1);
  n !== null && $e(n, e, 1, -1);
}
function Hu(e) {
  var n = Ve();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = Od.bind(null, Q, e), [n.memoizedState, e];
}
function sr(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Bs() {
  return Le().memoizedState;
}
function $r(e, n, t, r) {
  var l = Ve();
  Q.flags |= e, l.memoizedState = sr(1 | n, t, void 0, r === void 0 ? null : r);
}
function wl(e, n, t, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (o = i.destroy, r !== null && Ii(r, i.deps)) {
      l.memoizedState = sr(n, t, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = sr(1 | n, t, o, r);
}
function Vu(e, n) {
  return $r(8390656, 8, e, n);
}
function Ai(e, n) {
  return wl(2048, 8, e, n);
}
function Ws(e, n) {
  return wl(4, 2, e, n);
}
function Hs(e, n) {
  return wl(4, 4, e, n);
}
function Vs(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Ks(e, n, t) {
  return t = t != null ? t.concat([e]) : null, wl(4, 4, Vs.bind(null, n, e), t);
}
function Ui() {
}
function Qs(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ii(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Gs(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ii(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Ys(e, n, t) {
  return An & 21 ? (Be(t, n) || (t = ba(), Q.lanes |= t, Un |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = t);
}
function Id(e, n) {
  var t = A;
  A = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), n();
  } finally {
    A = t, ql.transition = r;
  }
}
function Xs() {
  return Le().memoizedState;
}
function Fd(e, n, t) {
  var r = wn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Zs(e)) Js(n, t);
  else if (t = Ts(e, n, t, r), t !== null) {
    var l = de();
    $e(t, e, r, l), qs(t, n, r);
  }
}
function Od(e, n, t) {
  var r = wn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Zs(e)) Js(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Be(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, ji(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = Ts(e, n, l, r), t !== null && (l = de(), $e(t, e, r, l), qs(t, n, r));
  }
}
function Zs(e) {
  var n = e.alternate;
  return e === Q || n !== null && n === Q;
}
function Js(e, n) {
  Ht = al = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function qs(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, hi(e, t);
  }
}
var sl = { readContext: De, useCallback: ue, useContext: ue, useEffect: ue, useImperativeHandle: ue, useInsertionEffect: ue, useLayoutEffect: ue, useMemo: ue, useReducer: ue, useRef: ue, useState: ue, useDebugValue: ue, useDeferredValue: ue, useTransition: ue, useMutableSource: ue, useSyncExternalStore: ue, useId: ue, unstable_isNewReconciler: !1 }, Ad = { readContext: De, useCallback: function(e, n) {
  return Ve().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: De, useEffect: Vu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, $r(
    4194308,
    4,
    Vs.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return $r(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return $r(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Ve();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Ve();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Fd.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Ve();
  return e = { current: e }, n.memoizedState = e;
}, useState: Hu, useDebugValue: Ui, useDeferredValue: function(e) {
  return Ve().memoizedState = e;
}, useTransition: function() {
  var e = Hu(!1), n = e[0];
  return e = Id.bind(null, e[1]), Ve().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = Q, l = Ve();
  if (H) {
    if (t === void 0) throw Error(S(407));
    t = t();
  } else {
    if (t = n(), te === null) throw Error(S(349));
    An & 30 || Fs(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Vu(As.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, sr(9, Os.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = Ve(), n = te.identifierPrefix;
  if (H) {
    var t = Je, r = Ze;
    t = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ur++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = Md++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, Ud = {
  readContext: De,
  useCallback: Qs,
  useContext: De,
  useEffect: Ai,
  useImperativeHandle: Ks,
  useInsertionEffect: Ws,
  useLayoutEffect: Hs,
  useMemo: Gs,
  useReducer: bl,
  useRef: Bs,
  useState: function() {
    return bl(ar);
  },
  useDebugValue: Ui,
  useDeferredValue: function(e) {
    var n = Le();
    return Ys(n, b.memoizedState, e);
  },
  useTransition: function() {
    var e = bl(ar)[0], n = Le().memoizedState;
    return [e, n];
  },
  useMutableSource: Ms,
  useSyncExternalStore: Is,
  useId: Xs,
  unstable_isNewReconciler: !1
}, $d = { readContext: De, useCallback: Qs, useContext: De, useEffect: Ai, useImperativeHandle: Ks, useInsertionEffect: Ws, useLayoutEffect: Hs, useMemo: Gs, useReducer: eo, useRef: Bs, useState: function() {
  return eo(ar);
}, useDebugValue: Ui, useDeferredValue: function(e) {
  var n = Le();
  return b === null ? n.memoizedState = e : Ys(n, b.memoizedState, e);
}, useTransition: function() {
  var e = eo(ar)[0], n = Le().memoizedState;
  return [e, n];
}, useMutableSource: Ms, useSyncExternalStore: Is, useId: Xs, unstable_isNewReconciler: !1 };
function Fe(e, n) {
  if (e && e.defaultProps) {
    n = G({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Wo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : G({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var Cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = de(), l = wn(e), o = qe(r, l);
  o.payload = n, t != null && (o.callback = t), n = Sn(e, o, l), n !== null && ($e(n, e, l, r), Ar(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = de(), l = wn(e), o = qe(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = Sn(e, o, l), n !== null && ($e(n, e, l, r), Ar(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = de(), r = wn(e), l = qe(t, r);
  l.tag = 2, n != null && (l.callback = n), n = Sn(e, l, r), n !== null && ($e(n, e, r, t), Ar(n, e, r));
} };
function Ku(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !nr(t, r) || !nr(l, o) : !0;
}
function bs(e, n, t) {
  var r = !1, l = Nn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = De(o) : (l = ve(n) ? Fn : ce.current, r = n.contextTypes, o = (r = r != null) ? mt(e, l) : Nn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Cl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Qu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Cl.enqueueReplaceState(n, n.state, null);
}
function Ho(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, Ti(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = De(o) : (o = ve(n) ? Fn : ce.current, l.context = mt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Wo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && Cl.enqueueReplaceState(l, l.state, null), il(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vt(e, n) {
  try {
    var t = "", r = n;
    do
      t += mf(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function no(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Vo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Bd = typeof WeakMap == "function" ? WeakMap : Map;
function ec(e, n, t) {
  t = qe(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    fl || (fl = !0, ei = r), Vo(e, n);
  }, t;
}
function nc(e, n, t) {
  t = qe(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Vo(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Vo(e, n), typeof r != "function" && (kn === null ? kn = /* @__PURE__ */ new Set([this]) : kn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Gu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = np.bind(null, e, n, t), n.then(e, e));
}
function Yu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = qe(-1, 1), n.tag = 2, Sn(t, n, 1))), t.lanes |= 1), e);
}
var Wd = rn.ReactCurrentOwner, he = !1;
function fe(e, n, t, r) {
  n.child = e === null ? js(n, null, t, r) : ht(n, e.child, t, r);
}
function Zu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return ft(n, l), r = Fi(e, n, t, r, o, l), t = Oi(), e !== null && !he ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, tn(e, n, l)) : (H && t && Ei(n), n.flags |= 1, fe(e, n, r, l), n.child);
}
function Ju(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Gi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, tc(e, n, o, r, l)) : (e = Vr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : nr, t(i, r) && e.ref === n.ref) return tn(e, n, l);
  }
  return n.flags |= 1, e = Cn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function tc(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (nr(o, r) && e.ref === n.ref) if (he = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
    else return n.lanes = e.lanes, tn(e, n, l);
  }
  return Ko(e, n, t, r, l);
}
function rc(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(it, we), we |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, U(it, we), we |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, U(it, we), we |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, U(it, we), we |= r;
  return fe(e, n, l, t), n.child;
}
function lc(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Ko(e, n, t, r, l) {
  var o = ve(t) ? Fn : ce.current;
  return o = mt(n, o), ft(n, l), t = Fi(e, n, t, r, o, l), r = Oi(), e !== null && !he ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, tn(e, n, l)) : (H && r && Ei(n), n.flags |= 1, fe(e, n, t, l), n.child);
}
function qu(e, n, t, r, l) {
  if (ve(t)) {
    var o = !0;
    nl(n);
  } else o = !1;
  if (ft(n, l), n.stateNode === null) Br(e, n), bs(n, t, r), Ho(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = De(c) : (c = ve(t) ? Fn : ce.current, c = mt(n, c));
    var h = t.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && Qu(n, i, r, c), fn = !1;
    var m = n.memoizedState;
    i.state = m, il(n, r, i, l), a = n.memoizedState, u !== r || m !== a || ge.current || fn ? (typeof h == "function" && (Wo(n, t, h, r), a = n.memoizedState), (u = fn || Ku(n, t, u, r, m, a, c)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, Ds(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Fe(n.type, u), i.props = c, y = n.pendingProps, m = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = De(a) : (a = ve(t) ? Fn : ce.current, a = mt(n, a));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || m !== a) && Qu(n, i, r, a), fn = !1, m = n.memoizedState, i.state = m, il(n, r, i, l);
    var k = n.memoizedState;
    u !== y || m !== k || ge.current || fn ? (typeof g == "function" && (Wo(n, t, g, r), k = n.memoizedState), (c = fn || Ku(n, t, c, r, m, k, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = k), i.props = r, i.state = k, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Qo(e, n, t, r, o, l);
}
function Qo(e, n, t, r, l, o) {
  lc(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Ou(n, t, !1), tn(e, n, o);
  r = n.stateNode, Wd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = ht(n, e.child, null, o), n.child = ht(n, null, u, o)) : fe(e, n, u, o), n.memoizedState = r.state, l && Ou(n, t, !0), n.child;
}
function oc(e) {
  var n = e.stateNode;
  n.pendingContext ? Fu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Fu(e, n.context, !1), Di(e, n.containerInfo);
}
function bu(e, n, t, r, l) {
  return yt(), _i(l), n.flags |= 256, fe(e, n, t, r), n.child;
}
var Go = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ic(e, n, t) {
  var r = n.pendingProps, l = K.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(K, l & 1), e === null)
    return $o(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = _l(i, r, 0, null), e = In(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Yo(t), n.memoizedState = Go, e) : $i(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Hd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = Cn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Cn(u, o) : (o = In(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Yo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Go, r;
  }
  return o = e.child, e = o.sibling, r = Cn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function $i(e, n) {
  return n = _l({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function zr(e, n, t, r) {
  return r !== null && _i(r), ht(n, e.child, null, t), e = $i(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function Hd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = no(Error(S(422))), zr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = _l({ mode: "visible", children: r.children }, l, 0, null), o = In(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && ht(n, e.child, null, i), n.child.memoizedState = Yo(i), n.memoizedState = Go, o);
  if (!(n.mode & 1)) return zr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = no(o, r, void 0), zr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, he || u) {
    if (r = te, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, nn(e, l), $e(r, e, l, -1));
    }
    return Qi(), r = no(Error(S(421))), zr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = tp.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Ce = xn(l.nextSibling), Ee = n, H = !0, Ae = null, e !== null && (Re[ze++] = Ze, Re[ze++] = Je, Re[ze++] = On, Ze = e.id, Je = e.overflow, On = n), n = $i(n, r.children), n.flags |= 4096, n);
}
function ea(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Bo(e.return, n, t);
}
function to(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function uc(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (fe(e, n, r.children, t), r = K.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ea(e, t, n);
      else if (e.tag === 19) ea(e, t, n);
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
  if (U(K, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && ul(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), to(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ul(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      to(n, !0, t, null, o);
      break;
    case "together":
      to(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Br(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function tn(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Un |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(S(153));
  if (n.child !== null) {
    for (e = n.child, t = Cn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Cn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function Vd(e, n, t) {
  switch (n.tag) {
    case 3:
      oc(n), yt();
      break;
    case 5:
      Ls(n);
      break;
    case 1:
      ve(n.type) && nl(n);
      break;
    case 4:
      Di(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      U(ll, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(K, K.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? ic(e, n, t) : (U(K, K.current & 1), e = tn(e, n, t), e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return uc(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, rc(e, n, t);
  }
  return tn(e, n, t);
}
var ac, Xo, sc, cc;
ac = function(e, n) {
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
Xo = function() {
};
sc = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Ln(Ge.current);
    var o = null;
    switch (t) {
      case "input":
        l = go(e, l), r = go(e, r), o = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = So(e, l), r = So(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = br);
    }
    wo(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Yt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Yt.hasOwnProperty(c) ? (a != null && c === "onScroll" && B("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
cc = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Dt(e, n) {
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
function ae(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Kd(e, n, t) {
  var r = n.pendingProps;
  switch (Ni(n), n.tag) {
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
      return ae(n), null;
    case 1:
      return ve(n.type) && el(), ae(n), null;
    case 3:
      return r = n.stateNode, gt(), W(ge), W(ce), Mi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Ae !== null && (ri(Ae), Ae = null))), Xo(e, n), ae(n), null;
    case 5:
      Li(n);
      var l = Ln(ir.current);
      if (t = n.type, e !== null && n.stateNode != null) sc(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(S(166));
          return ae(n), null;
        }
        if (e = Ln(Ge.current), Pr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ke] = n, r[lr] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ot.length; l++) B(Ot[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              su(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              fu(r, o), B("invalid", r);
          }
          wo(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && _r(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && _r(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Yt.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
          }
          switch (t) {
            case "input":
              vr(r), cu(r, o, !0);
              break;
            case "textarea":
              vr(r), du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Aa(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ke] = n, e[lr] = r, ac(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = Co(t, r), t) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ot.length; l++) B(Ot[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                su(e, r), l = go(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                fu(e, r), l = So(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            wo(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Ba(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ua(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Xt(e, a) : typeof a == "number" && Xt(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Yt.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && ci(e, o, a, i));
            }
            switch (t) {
              case "input":
                vr(e), cu(e, r, !1);
                break;
              case "textarea":
                vr(e), du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + En(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? ut(e, !!r.multiple, o, !1) : r.defaultValue != null && ut(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
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
      return ae(n), null;
    case 6:
      if (e && n.stateNode != null) cc(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(S(166));
        if (t = Ln(ir.current), Ln(Ge.current), Pr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ke] = n, (o = r.nodeValue !== t) && (e = Ee, e !== null)) switch (e.tag) {
            case 3:
              _r(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && _r(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ke] = n, n.stateNode = r;
      }
      return ae(n), null;
    case 13:
      if (W(K), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (H && Ce !== null && n.mode & 1 && !(n.flags & 128)) Rs(), yt(), n.flags |= 98560, o = !1;
        else if (o = Pr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Ke] = n;
          } else yt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ae(n), o = !1;
        } else Ae !== null && (ri(Ae), Ae = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || K.current & 1 ? ee === 0 && (ee = 3) : Qi())), n.updateQueue !== null && (n.flags |= 4), ae(n), null);
    case 4:
      return gt(), Xo(e, n), e === null && tr(n.stateNode.containerInfo), ae(n), null;
    case 10:
      return zi(n.type._context), ae(n), null;
    case 17:
      return ve(n.type) && el(), ae(n), null;
    case 19:
      if (W(K), o = n.memoizedState, o === null) return ae(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) Dt(o, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = ul(e), i !== null) {
            for (n.flags |= 128, Dt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return U(K, K.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Z() > xt && (n.flags |= 128, r = !0, Dt(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Dt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !H) return ae(n), null;
        } else 2 * Z() - o.renderingStartTime > xt && t !== 1073741824 && (n.flags |= 128, r = !0, Dt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Z(), n.sibling = null, t = K.current, U(K, r ? t & 1 | 2 : t & 1), n) : (ae(n), null);
    case 22:
    case 23:
      return Ki(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? we & 1073741824 && (ae(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ae(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, n.tag));
}
function Qd(e, n) {
  switch (Ni(n), n.tag) {
    case 1:
      return ve(n.type) && el(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return gt(), W(ge), W(ce), Mi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return Li(n), null;
    case 13:
      if (W(K), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(S(340));
        yt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return W(K), null;
    case 4:
      return gt(), null;
    case 10:
      return zi(n.type._context), null;
    case 22:
    case 23:
      return Ki(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1, se = !1, Gd = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function ot(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    X(e, n, r);
  }
  else t.current = null;
}
function Zo(e, n, t) {
  try {
    t();
  } catch (r) {
    X(e, n, r);
  }
}
var na = !1;
function Yd(e, n) {
  if (Lo = Zr, e = ys(), Ci(e)) {
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
        var i = 0, u = -1, a = -1, c = 0, h = 0, y = e, m = null;
        n: for (; ; ) {
          for (var g; y !== t || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (a = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (g = y.firstChild) !== null; )
            m = y, y = g;
          for (; ; ) {
            if (y === e) break n;
            if (m === t && ++c === l && (u = i), m === o && ++h === r && (a = i), (g = y.nextSibling) !== null) break;
            y = m, m = y.parentNode;
          }
          y = g;
        }
        t = u === -1 || a === -1 ? null : { start: u, end: a };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Mo = { focusedElem: e, selectionRange: t }, Zr = !1, N = n; N !== null; ) if (n = N, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, N = e;
  else for (; N !== null; ) {
    n = N;
    try {
      var k = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var w = k.memoizedProps, T = k.memoizedState, f = n.stateNode, s = f.getSnapshotBeforeUpdate(n.elementType === n.type ? w : Fe(n.type, w), T);
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
    } catch (x) {
      X(n, n.return, x);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, N = e;
      break;
    }
    N = n.return;
  }
  return k = na, na = !1, k;
}
function Vt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Zo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function El(e, n) {
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
function Jo(e) {
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
function fc(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, fc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ke], delete n[lr], delete n[Oo], delete n[jd], delete n[Td])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function dc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ta(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || dc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function qo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = br));
  else if (r !== 4 && (e = e.child, e !== null)) for (qo(e, n, t), e = e.sibling; e !== null; ) qo(e, n, t), e = e.sibling;
}
function bo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (bo(e, n, t), e = e.sibling; e !== null; ) bo(e, n, t), e = e.sibling;
}
var re = null, Oe = !1;
function sn(e, n, t) {
  for (t = t.child; t !== null; ) pc(e, n, t), t = t.sibling;
}
function pc(e, n, t) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
    Qe.onCommitFiberUnmount(hl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      se || ot(t, n);
    case 6:
      var r = re, l = Oe;
      re = null, sn(e, n, t), re = r, Oe = l, re !== null && (Oe ? (e = re, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : re.removeChild(t.stateNode));
      break;
    case 18:
      re !== null && (Oe ? (e = re, t = t.stateNode, e.nodeType === 8 ? Xl(e.parentNode, t) : e.nodeType === 1 && Xl(e, t), bt(e)) : Xl(re, t.stateNode));
      break;
    case 4:
      r = re, l = Oe, re = t.stateNode.containerInfo, Oe = !0, sn(e, n, t), re = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!se && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Zo(t, n, i), l = l.next;
        } while (l !== r);
      }
      sn(e, n, t);
      break;
    case 1:
      if (!se && (ot(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        X(t, n, u);
      }
      sn(e, n, t);
      break;
    case 21:
      sn(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (se = (r = se) || t.memoizedState !== null, sn(e, n, t), se = r) : sn(e, n, t);
      break;
    default:
      sn(e, n, t);
  }
}
function ra(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Gd()), n.forEach(function(r) {
      var l = rp.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ie(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            re = u.stateNode, Oe = !1;
            break e;
          case 3:
            re = u.stateNode.containerInfo, Oe = !0;
            break e;
          case 4:
            re = u.stateNode.containerInfo, Oe = !0;
            break e;
        }
        u = u.return;
      }
      if (re === null) throw Error(S(160));
      pc(o, i, l), re = null, Oe = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      X(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) mc(n, e), n = n.sibling;
}
function mc(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ie(n, e), He(e), r & 4) {
        try {
          Vt(3, e, e.return), El(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          Vt(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      Ie(n, e), He(e), r & 512 && t !== null && ot(t, t.return);
      break;
    case 5:
      if (Ie(n, e), He(e), r & 512 && t !== null && ot(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Xt(l, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Fa(l, o), Co(u, i);
          var c = Co(u, o);
          for (i = 0; i < a.length; i += 2) {
            var h = a[i], y = a[i + 1];
            h === "style" ? Ba(l, y) : h === "dangerouslySetInnerHTML" ? Ua(l, y) : h === "children" ? Xt(l, y) : ci(l, h, y, c);
          }
          switch (u) {
            case "input":
              vo(l, o);
              break;
            case "textarea":
              Oa(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? ut(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? ut(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : ut(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[lr] = o;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Ie(n, e), He(e), r & 4) {
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
      if (Ie(n, e), He(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        bt(n.containerInfo);
      } catch (w) {
        X(e, e.return, w);
      }
      break;
    case 4:
      Ie(n, e), He(e);
      break;
    case 13:
      Ie(n, e), He(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Hi = Z())), r & 4 && ra(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (se = (c = se) || h, Ie(n, e), se = c) : Ie(n, e), He(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (N = e, h = e.child; h !== null; ) {
          for (y = N = h; N !== null; ) {
            switch (m = N, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Vt(4, m, m.return);
                break;
              case 1:
                ot(m, m.return);
                var k = m.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = m, t = m.return;
                  try {
                    n = r, k.props = n.memoizedProps, k.state = n.memoizedState, k.componentWillUnmount();
                  } catch (w) {
                    X(r, t, w);
                  }
                }
                break;
              case 5:
                ot(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  oa(y);
                  continue;
                }
            }
            g !== null ? (g.return = m, N = g) : oa(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, a = y.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = $a("display", i));
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
      Ie(n, e), He(e), r & 4 && ra(e);
      break;
    case 21:
      break;
    default:
      Ie(
        n,
        e
      ), He(e);
  }
}
function He(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (dc(t)) {
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
          r.flags & 32 && (Xt(l, ""), r.flags &= -33);
          var o = ta(e);
          bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ta(e);
          qo(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Xd(e, n, t) {
  N = e, yc(e);
}
function yc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || jr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || se;
        u = jr;
        var c = se;
        if (jr = i, (se = a) && !c) for (N = l; N !== null; ) i = N, a = i.child, i.tag === 22 && i.memoizedState !== null ? ia(l) : a !== null ? (a.return = i, N = a) : ia(l);
        for (; o !== null; ) N = o, yc(o), o = o.sibling;
        N = l, jr = u, se = c;
      }
      la(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : la(e);
  }
}
function la(e) {
  for (; N !== null; ) {
    var n = N;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            se || El(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !se) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Fe(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && Wu(n, o, r);
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
              Wu(n, i, t);
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
                  y !== null && bt(y);
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
        se || n.flags & 512 && Jo(n);
      } catch (m) {
        X(n, n.return, m);
      }
    }
    if (n === e) {
      N = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, N = t;
      break;
    }
    N = n.return;
  }
}
function oa(e) {
  for (; N !== null; ) {
    var n = N;
    if (n === e) {
      N = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, N = t;
      break;
    }
    N = n.return;
  }
}
function ia(e) {
  for (; N !== null; ) {
    var n = N;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            El(4, n);
          } catch (a) {
            X(n, t, a);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(n, l, a);
            }
          }
          var o = n.return;
          try {
            Jo(n);
          } catch (a) {
            X(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Jo(n);
          } catch (a) {
            X(n, i, a);
          }
      }
    } catch (a) {
      X(n, n.return, a);
    }
    if (n === e) {
      N = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, N = u;
      break;
    }
    N = n.return;
  }
}
var Zd = Math.ceil, cl = rn.ReactCurrentDispatcher, Bi = rn.ReactCurrentOwner, Te = rn.ReactCurrentBatchConfig, F = 0, te = null, q = null, le = 0, we = 0, it = Pn(0), ee = 0, cr = null, Un = 0, Nl = 0, Wi = 0, Kt = null, ye = null, Hi = 0, xt = 1 / 0, Ye = null, fl = !1, ei = null, kn = null, Tr = !1, yn = null, dl = 0, Qt = 0, ni = null, Wr = -1, Hr = 0;
function de() {
  return F & 6 ? Z() : Wr !== -1 ? Wr : Wr = Z();
}
function wn(e) {
  return e.mode & 1 ? F & 2 && le !== 0 ? le & -le : Ld.transition !== null ? (Hr === 0 && (Hr = ba()), Hr) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : is(e.type)), e) : 1;
}
function $e(e, n, t, r) {
  if (50 < Qt) throw Qt = 0, ni = null, Error(S(185));
  dr(e, t, r), (!(F & 2) || e !== te) && (e === te && (!(F & 2) && (Nl |= t), ee === 4 && pn(e, le)), xe(e, r), t === 1 && F === 0 && !(n.mode & 1) && (xt = Z() + 500, kl && Rn()));
}
function xe(e, n) {
  var t = e.callbackNode;
  Lf(e, n);
  var r = Xr(e, e === te ? le : 0);
  if (r === 0) t !== null && yu(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && yu(t), n === 1) e.tag === 0 ? Dd(ua.bind(null, e)) : Ns(ua.bind(null, e)), Rd(function() {
      !(F & 6) && Rn();
    }), t = null;
    else {
      switch (es(r)) {
        case 1:
          t = yi;
          break;
        case 4:
          t = Ja;
          break;
        case 16:
          t = Yr;
          break;
        case 536870912:
          t = qa;
          break;
        default:
          t = Yr;
      }
      t = Cc(t, hc.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function hc(e, n) {
  if (Wr = -1, Hr = 0, F & 6) throw Error(S(327));
  var t = e.callbackNode;
  if (dt() && e.callbackNode !== t) return null;
  var r = Xr(e, e === te ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = pl(e, r);
  else {
    n = r;
    var l = F;
    F |= 2;
    var o = vc();
    (te !== e || le !== n) && (Ye = null, xt = Z() + 500, Mn(e, n));
    do
      try {
        bd();
        break;
      } catch (u) {
        gc(e, u);
      }
    while (!0);
    Ri(), cl.current = o, F = l, q !== null ? n = 0 : (te = null, le = 0, n = ee);
  }
  if (n !== 0) {
    if (n === 2 && (l = Ro(e), l !== 0 && (r = l, n = ti(e, l))), n === 1) throw t = cr, Mn(e, 0), pn(e, r), xe(e, Z()), t;
    if (n === 6) pn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Jd(l) && (n = pl(e, r), n === 2 && (o = Ro(e), o !== 0 && (r = o, n = ti(e, o))), n === 1)) throw t = cr, Mn(e, 0), pn(e, r), xe(e, Z()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          jn(e, ye, Ye);
          break;
        case 3:
          if (pn(e, r), (r & 130023424) === r && (n = Hi + 500 - Z(), 10 < n)) {
            if (Xr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              de(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Fo(jn.bind(null, e, ye, Ye), n);
            break;
          }
          jn(e, ye, Ye);
          break;
        case 4:
          if (pn(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Fo(jn.bind(null, e, ye, Ye), r);
            break;
          }
          jn(e, ye, Ye);
          break;
        case 5:
          jn(e, ye, Ye);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return xe(e, Z()), e.callbackNode === t ? hc.bind(null, e) : null;
}
function ti(e, n) {
  var t = Kt;
  return e.current.memoizedState.isDehydrated && (Mn(e, n).flags |= 256), e = pl(e, n), e !== 2 && (n = ye, ye = t, n !== null && ri(n)), e;
}
function ri(e) {
  ye === null ? ye = e : ye.push.apply(ye, e);
}
function Jd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Be(o(), l)) return !1;
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
function pn(e, n) {
  for (n &= ~Wi, n &= ~Nl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Ue(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function ua(e) {
  if (F & 6) throw Error(S(327));
  dt();
  var n = Xr(e, 0);
  if (!(n & 1)) return xe(e, Z()), null;
  var t = pl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = Ro(e);
    r !== 0 && (n = r, t = ti(e, r));
  }
  if (t === 1) throw t = cr, Mn(e, 0), pn(e, n), xe(e, Z()), t;
  if (t === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, jn(e, ye, Ye), xe(e, Z()), null;
}
function Vi(e, n) {
  var t = F;
  F |= 1;
  try {
    return e(n);
  } finally {
    F = t, F === 0 && (xt = Z() + 500, kl && Rn());
  }
}
function $n(e) {
  yn !== null && yn.tag === 0 && !(F & 6) && dt();
  var n = F;
  F |= 1;
  var t = Te.transition, r = A;
  try {
    if (Te.transition = null, A = 1, e) return e();
  } finally {
    A = r, Te.transition = t, F = n, !(F & 6) && Rn();
  }
}
function Ki() {
  we = it.current, W(it);
}
function Mn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Pd(t)), q !== null) for (t = q.return; t !== null; ) {
    var r = t;
    switch (Ni(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && el();
        break;
      case 3:
        gt(), W(ge), W(ce), Mi();
        break;
      case 5:
        Li(r);
        break;
      case 4:
        gt();
        break;
      case 13:
        W(K);
        break;
      case 19:
        W(K);
        break;
      case 10:
        zi(r.type._context);
        break;
      case 22:
      case 23:
        Ki();
    }
    t = t.return;
  }
  if (te = e, q = e = Cn(e.current, null), le = we = n, ee = 0, cr = null, Wi = Nl = Un = 0, ye = Kt = null, Dn !== null) {
    for (n = 0; n < Dn.length; n++) if (t = Dn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    Dn = null;
  }
  return e;
}
function gc(e, n) {
  do {
    var t = q;
    try {
      if (Ri(), Ur.current = sl, al) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        al = !1;
      }
      if (An = 0, ne = b = Q = null, Ht = !1, ur = 0, Bi.current = null, t === null || t.return === null) {
        ee = 1, cr = n, q = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, a = n;
        if (n = le, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, h = u, y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Yu(i);
          if (g !== null) {
            g.flags &= -257, Xu(g, i, u, o, n), g.mode & 1 && Gu(o, c, n), n = g, a = c;
            var k = n.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), n.updateQueue = w;
            } else k.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Gu(o, c, n), Qi();
              break e;
            }
            a = Error(S(426));
          }
        } else if (H && u.mode & 1) {
          var T = Yu(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Xu(T, i, u, o, n), _i(vt(a, u));
            break e;
          }
        }
        o = a = vt(a, u), ee !== 4 && (ee = 2), Kt === null ? Kt = [o] : Kt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = ec(o, a, n);
              Bu(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (kn === null || !kn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var x = nc(o, u, n);
                Bu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Sc(t);
    } catch (E) {
      n = E, q === t && t !== null && (q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function vc() {
  var e = cl.current;
  return cl.current = sl, e === null ? sl : e;
}
function Qi() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), te === null || !(Un & 268435455) && !(Nl & 268435455) || pn(te, le);
}
function pl(e, n) {
  var t = F;
  F |= 2;
  var r = vc();
  (te !== e || le !== n) && (Ye = null, Mn(e, n));
  do
    try {
      qd();
      break;
    } catch (l) {
      gc(e, l);
    }
  while (!0);
  if (Ri(), F = t, cl.current = r, q !== null) throw Error(S(261));
  return te = null, le = 0, ee;
}
function qd() {
  for (; q !== null; ) xc(q);
}
function bd() {
  for (; q !== null && !Ef(); ) xc(q);
}
function xc(e) {
  var n = wc(e.alternate, e, we);
  e.memoizedProps = e.pendingProps, n === null ? Sc(e) : q = n, Bi.current = null;
}
function Sc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = Qd(t, n), t !== null) {
        t.flags &= 32767, q = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ee = 6, q = null;
        return;
      }
    } else if (t = Kd(t, n, we), t !== null) {
      q = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      q = n;
      return;
    }
    q = n = e;
  } while (n !== null);
  ee === 0 && (ee = 5);
}
function jn(e, n, t) {
  var r = A, l = Te.transition;
  try {
    Te.transition = null, A = 1, ep(e, n, t, r);
  } finally {
    Te.transition = l, A = r;
  }
  return null;
}
function ep(e, n, t, r) {
  do
    dt();
  while (yn !== null);
  if (F & 6) throw Error(S(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (Mf(e, o), e === te && (q = te = null, le = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Tr || (Tr = !0, Cc(Yr, function() {
    return dt(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = A;
    A = 1;
    var u = F;
    F |= 4, Bi.current = null, Yd(e, t), mc(t, e), Sd(Mo), Zr = !!Lo, Mo = Lo = null, e.current = t, Xd(t), Nf(), F = u, A = i, Te.transition = o;
  } else e.current = t;
  if (Tr && (Tr = !1, yn = e, dl = l), o = e.pendingLanes, o === 0 && (kn = null), Rf(t.stateNode), xe(e, Z()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw fl = !1, e = ei, ei = null, e;
  return dl & 1 && e.tag !== 0 && dt(), o = e.pendingLanes, o & 1 ? e === ni ? Qt++ : (Qt = 0, ni = e) : Qt = 0, Rn(), null;
}
function dt() {
  if (yn !== null) {
    var e = es(dl), n = Te.transition, t = A;
    try {
      if (Te.transition = null, A = 16 > e ? 16 : e, yn === null) var r = !1;
      else {
        if (e = yn, yn = null, dl = 0, F & 6) throw Error(S(331));
        var l = F;
        for (F |= 4, N = e.current; N !== null; ) {
          var o = N, i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (N = c; N !== null; ) {
                  var h = N;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vt(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, N = y;
                  else for (; N !== null; ) {
                    h = N;
                    var m = h.sibling, g = h.return;
                    if (fc(h), h === c) {
                      N = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, N = m;
                      break;
                    }
                    N = g;
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
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, N = i;
          else e: for (; N !== null; ) {
            if (o = N, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Vt(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, N = f;
              break e;
            }
            N = o.return;
          }
        }
        var s = e.current;
        for (N = s; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, N = d;
          else e: for (i = s; N !== null; ) {
            if (u = N, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  El(9, u);
              }
            } catch (E) {
              X(u, u.return, E);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var x = u.sibling;
            if (x !== null) {
              x.return = u.return, N = x;
              break e;
            }
            N = u.return;
          }
        }
        if (F = l, Rn(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
          Qe.onPostCommitFiberRoot(hl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = t, Te.transition = n;
    }
  }
  return !1;
}
function aa(e, n, t) {
  n = vt(t, n), n = ec(e, n, 1), e = Sn(e, n, 1), n = de(), e !== null && (dr(e, 1, n), xe(e, n));
}
function X(e, n, t) {
  if (e.tag === 3) aa(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      aa(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
        e = vt(t, e), e = nc(n, e, 1), n = Sn(n, e, 1), e = de(), n !== null && (dr(n, 1, e), xe(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function np(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = de(), e.pingedLanes |= e.suspendedLanes & t, te === e && (le & t) === t && (ee === 4 || ee === 3 && (le & 130023424) === le && 500 > Z() - Hi ? Mn(e, 0) : Wi |= t), xe(e, n);
}
function kc(e, n) {
  n === 0 && (e.mode & 1 ? (n = kr, kr <<= 1, !(kr & 130023424) && (kr = 4194304)) : n = 1);
  var t = de();
  e = nn(e, n), e !== null && (dr(e, n, t), xe(e, t));
}
function tp(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), kc(e, t);
}
function rp(e, n) {
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
  r !== null && r.delete(n), kc(e, t);
}
var wc;
wc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || ge.current) he = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return he = !1, Vd(e, n, t);
    he = !!(e.flags & 131072);
  }
  else he = !1, H && n.flags & 1048576 && _s(n, rl, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Br(e, n), e = n.pendingProps;
      var l = mt(n, ce.current);
      ft(n, t), l = Fi(null, n, r, e, l, t);
      var o = Oi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ve(r) ? (o = !0, nl(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ti(n), l.updater = Cl, n.stateNode = l, l._reactInternals = n, Ho(n, r, e, t), n = Qo(null, n, r, !0, o, t)) : (n.tag = 0, H && o && Ei(n), fe(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Br(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = op(r), e = Fe(r, e), l) {
          case 0:
            n = Ko(null, n, r, e, t);
            break e;
          case 1:
            n = qu(null, n, r, e, t);
            break e;
          case 11:
            n = Zu(null, n, r, e, t);
            break e;
          case 14:
            n = Ju(null, n, r, Fe(r.type, e), t);
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
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), Ko(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), qu(e, n, r, l, t);
    case 3:
      e: {
        if (oc(n), e === null) throw Error(S(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, Ds(e, n), il(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = vt(Error(S(423)), n), n = bu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = vt(Error(S(424)), n), n = bu(e, n, r, t, l);
          break e;
        } else for (Ce = xn(n.stateNode.containerInfo.firstChild), Ee = n, H = !0, Ae = null, t = js(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (yt(), r === l) {
            n = tn(e, n, t);
            break e;
          }
          fe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return Ls(n), e === null && $o(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Io(r, l) ? i = null : o !== null && Io(r, o) && (n.flags |= 32), lc(e, n), fe(e, n, i, t), n.child;
    case 6:
      return e === null && $o(n), null;
    case 13:
      return ic(e, n, t);
    case 4:
      return Di(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = ht(n, null, r, t) : fe(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), Zu(e, n, r, l, t);
    case 7:
      return fe(e, n, n.pendingProps, t), n.child;
    case 8:
      return fe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return fe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, U(ll, r._currentValue), r._currentValue = i, o !== null) if (Be(o.value, i)) {
          if (o.children === l.children && !ge.current) {
            n = tn(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = qe(-1, t & -t), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), Bo(
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
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Bo(i, t, n), i = o.sibling;
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
        fe(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, ft(n, t), l = De(l), r = r(l), n.flags |= 1, fe(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Fe(r, n.pendingProps), l = Fe(r.type, l), Ju(e, n, r, l, t);
    case 15:
      return tc(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Fe(r, l), Br(e, n), n.tag = 1, ve(r) ? (e = !0, nl(n)) : e = !1, ft(n, t), bs(n, r, l), Ho(n, r, l, t), Qo(null, n, r, !0, e, t);
    case 19:
      return uc(e, n, t);
    case 22:
      return rc(e, n, t);
  }
  throw Error(S(156, n.tag));
};
function Cc(e, n) {
  return Za(e, n);
}
function lp(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function je(e, n, t, r) {
  return new lp(e, n, t, r);
}
function Gi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function op(e) {
  if (typeof e == "function") return Gi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === di) return 11;
    if (e === pi) return 14;
  }
  return 2;
}
function Cn(e, n) {
  var t = e.alternate;
  return t === null ? (t = je(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Vr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Gi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Zn:
      return In(t.children, l, o, n);
    case fi:
      i = 8, l |= 8;
      break;
    case po:
      return e = je(12, t, n, l | 2), e.elementType = po, e.lanes = o, e;
    case mo:
      return e = je(13, t, n, l), e.elementType = mo, e.lanes = o, e;
    case yo:
      return e = je(19, t, n, l), e.elementType = yo, e.lanes = o, e;
    case La:
      return _l(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ta:
          i = 10;
          break e;
        case Da:
          i = 9;
          break e;
        case di:
          i = 11;
          break e;
        case pi:
          i = 14;
          break e;
        case cn:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return n = je(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function In(e, n, t, r) {
  return e = je(7, e, r, n), e.lanes = t, e;
}
function _l(e, n, t, r) {
  return e = je(22, e, r, n), e.elementType = La, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function ro(e, n, t) {
  return e = je(6, e, null, n), e.lanes = t, e;
}
function lo(e, n, t) {
  return n = je(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function ip(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Al(0), this.expirationTimes = Al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Al(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Yi(e, n, t, r, l, o, i, u, a) {
  return e = new ip(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = je(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ti(o), e;
}
function up(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Xn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function Ec(e) {
  if (!e) return Nn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(S(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (ve(n.type)) {
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
    if (ve(t)) return Es(e, t, n);
  }
  return n;
}
function Nc(e, n, t, r, l, o, i, u, a) {
  return e = Yi(t, r, !0, e, l, o, i, u, a), e.context = Ec(null), t = e.current, r = de(), l = wn(t), o = qe(r, l), o.callback = n ?? null, Sn(t, o, l), e.current.lanes = l, dr(e, l, r), xe(e, r), e;
}
function Pl(e, n, t, r) {
  var l = n.current, o = de(), i = wn(l);
  return t = Ec(t), n.context === null ? n.context = t : n.pendingContext = t, n = qe(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Sn(l, n, i), e !== null && ($e(e, l, i, o), Ar(e, l, i)), i;
}
function ml(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sa(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Xi(e, n) {
  sa(e, n), (e = e.alternate) && sa(e, n);
}
function ap() {
  return null;
}
var _c = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zi(e) {
  this._internalRoot = e;
}
Rl.prototype.render = Zi.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(S(409));
  Pl(e, n, null, null);
};
Rl.prototype.unmount = Zi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    $n(function() {
      Pl(null, e, null, null);
    }), n[en] = null;
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = rs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < dn.length && n !== 0 && n < dn[t].priority; t++) ;
    dn.splice(t, 0, e), t === 0 && os(e);
  }
};
function Ji(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ca() {
}
function sp(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = ml(i);
        o.call(c);
      };
    }
    var i = Nc(n, r, e, 0, null, !1, !1, "", ca);
    return e._reactRootContainer = i, e[en] = i.current, tr(e.nodeType === 8 ? e.parentNode : e), $n(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ml(a);
      u.call(c);
    };
  }
  var a = Yi(e, 0, !1, null, null, !1, !1, "", ca);
  return e._reactRootContainer = a, e[en] = a.current, tr(e.nodeType === 8 ? e.parentNode : e), $n(function() {
    Pl(n, a, t, r);
  }), a;
}
function jl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = ml(i);
        u.call(a);
      };
    }
    Pl(n, i, e, l);
  } else i = sp(t, n, e, l, r);
  return ml(i);
}
ns = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Ft(n.pendingLanes);
        t !== 0 && (hi(n, t | 1), xe(n, Z()), !(F & 6) && (xt = Z() + 500, Rn()));
      }
      break;
    case 13:
      $n(function() {
        var r = nn(e, 1);
        if (r !== null) {
          var l = de();
          $e(r, e, 1, l);
        }
      }), Xi(e, 1);
  }
};
gi = function(e) {
  if (e.tag === 13) {
    var n = nn(e, 134217728);
    if (n !== null) {
      var t = de();
      $e(n, e, 134217728, t);
    }
    Xi(e, 134217728);
  }
};
ts = function(e) {
  if (e.tag === 13) {
    var n = wn(e), t = nn(e, n);
    if (t !== null) {
      var r = de();
      $e(t, e, n, r);
    }
    Xi(e, n);
  }
};
rs = function() {
  return A;
};
ls = function(e, n) {
  var t = A;
  try {
    return A = e, n();
  } finally {
    A = t;
  }
};
No = function(e, n, t) {
  switch (n) {
    case "input":
      if (vo(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l) throw Error(S(90));
            Ia(r), vo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Oa(e, t);
      break;
    case "select":
      n = t.value, n != null && ut(e, !!t.multiple, n, !1);
  }
};
Va = Vi;
Ka = $n;
var cp = { usingClientEntryPoint: !1, Events: [mr, et, Sl, Wa, Ha, Vi] }, Lt = { findFiberByHostInstance: Tn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fp = { bundleType: Lt.bundleType, version: Lt.version, rendererPackageName: Lt.rendererPackageName, rendererConfig: Lt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ya(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Lt.findFiberByHostInstance || ap, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber) try {
    hl = Dr.inject(fp), Qe = Dr;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp;
_e.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ji(n)) throw Error(S(200));
  return up(e, n, null, t);
};
_e.createRoot = function(e, n) {
  if (!Ji(e)) throw Error(S(299));
  var t = !1, r = "", l = _c;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Yi(e, 1, !1, null, null, t, !1, r, l), e[en] = n.current, tr(e.nodeType === 8 ? e.parentNode : e), new Zi(n);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Ya(n), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return $n(e);
};
_e.hydrate = function(e, n, t) {
  if (!zl(n)) throw Error(S(200));
  return jl(null, e, n, !0, t);
};
_e.hydrateRoot = function(e, n, t) {
  if (!Ji(e)) throw Error(S(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = _c;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = Nc(n, null, e, 1, t ?? null, l, !1, o, i), e[en] = n.current, tr(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new Rl(n);
};
_e.render = function(e, n, t) {
  if (!zl(n)) throw Error(S(200));
  return jl(null, e, n, !1, t);
};
_e.unmountComponentAtNode = function(e) {
  if (!zl(e)) throw Error(S(40));
  return e._reactRootContainer ? ($n(function() {
    jl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[en] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = Vi;
_e.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!zl(t)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return jl(e, n, t, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Pc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc);
    } catch (e) {
      console.error(e);
    }
}
Pc(), Pa.exports = _e;
var dp = Pa.exports, fa = dp;
co.createRoot = fa.createRoot, co.hydrateRoot = fa.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = (e) => {
  const n = mp(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oo = {
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
const yp = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
}, hp = D.createContext({}), gp = () => D.useContext(hp), vp = D.forwardRef(
  ({ color: e, size: n, strokeWidth: t, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: y = !1,
      color: m = "currentColor",
      className: g = ""
    } = gp() ?? {}, k = r ?? y ? Number(t ?? h) * 24 / Number(n ?? c) : t ?? h;
    return D.createElement(
      "svg",
      {
        ref: a,
        ...oo,
        width: n ?? c ?? oo.width,
        height: n ?? c ?? oo.height,
        stroke: e ?? m,
        strokeWidth: k,
        className: Rc("lucide", g, l),
        ...!o && !yp(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([w, T]) => D.createElement(w, T)),
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
const Se = (e, n) => {
  const t = D.forwardRef(
    ({ className: r, ...l }, o) => D.createElement(vp, {
      ref: o,
      iconNode: n,
      className: Rc(
        `lucide-${pp(da(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return t.displayName = da(e), t;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Sp = Se("arrow-right", xp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], pa = Se("arrow-up-down", kp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = [
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
], Cp = Se("calculator", wp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Np = Se("check", Ep);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Pp = Se("chevron-down", _p);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], zp = Se("globe", Rp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ma = Se("plus", jp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Dp = Se("refresh-cw", Tp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Mp = Se("rotate-ccw-clock", Lp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Fp = Se("search", Ip);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Ap = Se("settings-2", Op);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = [
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
], $p = Se("sparkles", Up);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Wp = Se("trash-2", Bp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ya = Se("x", Hp), Gt = {
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
}, io = ({ options: e, value: n, onChange: t }) => {
  const [r, l] = D.useState(!1), [o, i] = D.useState(""), u = D.useRef(null), [a, c] = D.useState(!1);
  D.useEffect(() => {
    const g = (k) => {
      u.current && !u.current.contains(k.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), D.useEffect(() => {
    r && u.current && (u.current.getBoundingClientRect().right > window.innerWidth / 2 ? c(!0) : c(!1));
  }, [r]);
  const h = e.filter((g) => {
    const k = Gt[g] || { name: g }, w = o.toLowerCase();
    return g.toLowerCase().includes(w) || k.name.toLowerCase().includes(w);
  }), y = Gt[n] || { name: n, symbol: n }, m = n === "EUR" ? "EU" : n === "BTC" ? "⚡" : n.substring(0, 2);
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
                /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 700, fontSize: "0.9rem", color: "#fafafa", lineHeight: 1 }, children: n }),
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "65px", marginTop: "2px" }, children: y.name })
              ] }),
              /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: "#a1a1aa", fontWeight: "600", marginLeft: "2px" }, children: y.symbol }),
              /* @__PURE__ */ p.jsx(Pp, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
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
                /* @__PURE__ */ p.jsx(Fp, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
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
                const k = Gt[g] || { name: g, symbol: g }, w = g === "EUR" ? "EU" : g === "BTC" ? "⚡" : g.substring(0, 2), T = g === n;
                return /* @__PURE__ */ p.jsxs(
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
                        T && /* @__PURE__ */ p.jsx(Np, { size: 14, color: "#a855f7" })
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
}, uo = "datacore_currency_history_v2", ao = "datacore_currency_chips_v2", so = "datacore_equivalent_currencies_v1", Vp = {
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
}, Kp = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL"], Qp = ["EUR", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"], Gp = ({ children: e }) => /* @__PURE__ */ p.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function Yp() {
  const [e, n] = D.useState("calculator"), [t, r] = D.useState(Vp), [l, o] = D.useState("USD"), [i, u] = D.useState("USD"), [a, c] = D.useState("EUR"), [h, y] = D.useState("100"), [m, g] = D.useState("100 + 50"), [k, w] = D.useState("50"), [T, f] = D.useState(Kp), [s, d] = D.useState(!1), [x, E] = D.useState("VND"), [_, P] = D.useState(Qp), [R, $] = D.useState(!1), [M, ke] = D.useState("MYR"), [ln, on] = D.useState(!1), [Ct, Tl] = D.useState("50"), [Hn, Et] = D.useState("EUR"), [C, z] = D.useState("+"), [L, V] = D.useState(null), [Y, un] = D.useState(!0), [Me, Vn] = D.useState(!1), [We, an] = D.useState([]), zc = D.useRef(null);
  D.useEffect(() => {
    try {
      const v = localStorage.getItem(uo);
      v && an(JSON.parse(v));
      const j = localStorage.getItem(ao);
      j && f(JSON.parse(j));
      const O = localStorage.getItem(so);
      O && P(JSON.parse(O));
    } catch {
    }
  }, []);
  const qi = ((v) => {
    try {
      if (!v || !v.trim()) return 0;
      const j = v.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!j) return 0;
      const O = Function(`"use strict"; return (${j})`)();
      return typeof O == "number" && !isNaN(O) && isFinite(O) ? O : 0;
    } catch {
      return 0;
    }
  })(m), bi = qi.toFixed(2), eu = (() => {
    const v = parseFloat(h) || 0, j = t[i] || 1, O = t[a] || 1;
    return v / j * O;
  })().toFixed(2), jc = (v) => {
    const j = t[l] || 1, O = t[v] || 1;
    return (qi / j * O).toFixed(2);
  }, Tc = (v) => {
    const j = parseFloat(h) || 0, O = t[i] || 1, ie = t[v] || 1;
    return (j / O * ie).toFixed(2);
  }, nu = async () => {
    Vn(!0);
    try {
      const v = await fetch(`https://api.exchangerate-api.com/v4/latest/${l}`);
      if (v.ok) {
        const j = await v.json();
        r(j.rates), V(/* @__PURE__ */ new Date()), un(!0);
      } else
        un(!1);
    } catch {
      un(!1);
    } finally {
      Vn(!1);
    }
  };
  D.useEffect(() => {
    nu();
  }, [l]);
  const J = (v) => {
    if (v === "AC")
      g("");
    else if (v === "DEL")
      g((j) => j.length > 0 ? j.slice(0, -1) : "");
    else if (v === "=") {
      const j = bi;
      g(j);
      const O = {
        id: Date.now().toString(),
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        from: l,
        expr: m,
        result: j
      };
      an((ie) => {
        const Qn = [O, ...ie.slice(0, 19)];
        try {
          localStorage.setItem(uo, JSON.stringify(Qn));
        } catch {
        }
        return Qn;
      });
    } else
      g((j) => j + v);
  }, tu = (v, j, O) => {
    const ie = parseFloat(j) || 0;
    if (ie <= 0) return;
    const Qn = t[O] || 1, Gn = t[l] || 1, Dl = (ie / Qn * Gn).toFixed(2);
    g((Ac) => {
      const Nt = Ac.trim();
      return !Nt || Nt === "0" ? Dl : ["+", "-", "*", "/", "×", "÷"].some((Uc) => Nt.endsWith(Uc)) ? `${Nt.slice(0, -1).trim()} ${v} ${Dl}` : `${Nt} ${v} ${Dl}`;
    }), on(!1);
  }, Dc = (v) => {
    if (!T.includes(v)) {
      const j = [...T, v];
      f(j);
      try {
        localStorage.setItem(ao, JSON.stringify(j));
      } catch {
      }
    }
    d(!1);
  }, Lc = (v, j) => {
    v.stopPropagation();
    const O = T.filter((ie) => ie !== j);
    f(O);
    try {
      localStorage.setItem(ao, JSON.stringify(O));
    } catch {
    }
  }, Mc = (v) => {
    if (!_.includes(v)) {
      const j = [..._, v];
      P(j);
      try {
        localStorage.setItem(so, JSON.stringify(j));
      } catch {
      }
    }
    $(!1);
  }, Ic = (v, j) => {
    v.stopPropagation();
    const O = _.filter((ie) => ie !== j);
    P(O);
    try {
      localStorage.setItem(so, JSON.stringify(O));
    } catch {
    }
  }, Fc = () => {
    const v = parseFloat(h) || 0, j = t[l] || 1, ie = (v / (t[i] || 1) * j).toFixed(2);
    g((Qn) => {
      const Gn = Qn.trim();
      return !Gn || Gn === "0" ? ie : `${Gn} + ${ie}`;
    }), n("calculator");
  }, Kn = Object.keys(t).sort(), Oc = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"];
  return /* @__PURE__ */ p.jsx(Gp, { children: /* @__PURE__ */ p.jsx("div", { className: "currency-app", ref: zc, style: { position: "relative" }, children: /* @__PURE__ */ p.jsxs("div", { className: "studio-card", children: [
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
        }, children: /* @__PURE__ */ p.jsx($p, { size: 14, color: "#fafafa" }) }),
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "1rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }, children: "Currency Studio" })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: Y ? "#34d399" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: Y ? "#10b981" : "#f59e0b"
        } }),
        /* @__PURE__ */ p.jsx("span", { children: Y ? "Online" : "Offline" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "tab-switcher", children: [
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "button",
          className: `tab-btn ${e === "calculator" ? "active" : ""}`,
          onClick: () => n("calculator"),
          children: [
            /* @__PURE__ */ p.jsx(Cp, { size: 14 }),
            " Calculator"
          ]
        }
      ),
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "button",
          className: `tab-btn ${e === "exchange" ? "active" : ""}`,
          onClick: () => n("exchange"),
          children: [
            /* @__PURE__ */ p.jsx(pa, { size: 14 }),
            " Currency Pair"
          ]
        }
      )
    ] }),
    e === "calculator" && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "100%" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 2px" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "Target Base Currency:" }),
        /* @__PURE__ */ p.jsx(
          io,
          {
            options: Kn,
            value: l,
            onChange: o
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "calc-screen", children: [
        /* @__PURE__ */ p.jsx("div", { className: "calc-expr", children: m || "0" }),
        /* @__PURE__ */ p.jsxs("div", { className: "calc-result", children: [
          bi,
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
            _.filter((v) => v !== l).map((v) => {
              const j = jc(v);
              return /* @__PURE__ */ p.jsxs(
                "div",
                {
                  onClick: () => o(v),
                  style: {
                    padding: "3px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid #27272a",
                    color: "#a1a1aa",
                    fontSize: "0.68rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  },
                  title: `Click to set ${v} as primary base currency`,
                  children: [
                    /* @__PURE__ */ p.jsx("span", { style: { color: "#ffffff", fontWeight: "700" }, children: v }),
                    /* @__PURE__ */ p.jsx("span", { style: { color: "#a1a1aa" }, children: j }),
                    _.length > 2 && /* @__PURE__ */ p.jsx(
                      ya,
                      {
                        size: 10,
                        style: { opacity: 0.5, cursor: "pointer", marginLeft: "2px" },
                        onClick: (O) => Ic(O, v)
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
                onClick: () => $(!R),
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
                  /* @__PURE__ */ p.jsx(ma, { size: 10 }),
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
                onChange: (v) => ke(v.target.value),
                style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "3px 6px", color: "#ffffff", fontSize: "0.7rem", outline: "none" },
                children: Kn.map((v) => /* @__PURE__ */ p.jsxs("option", { value: v, children: [
                  v,
                  " - ",
                  (Gt[v] || {}).name || v
                ] }, v))
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => Mc(M),
                style: { padding: "3px 8px", borderRadius: "6px", backgroundColor: "#27272a", color: "#ffffff", border: "1px solid #3f3f46", fontSize: "0.65rem", fontWeight: "700", cursor: "pointer" },
                children: "+ Add"
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => $(!1),
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
                  /* @__PURE__ */ p.jsx(ma, { size: 11 }),
                  " Add Currency"
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => on(!ln),
                style: { fontSize: "0.65rem", color: "#a1a1aa", backgroundColor: "transparent", border: "1px solid #27272a", padding: "3px 8px", borderRadius: "6px", cursor: "pointer", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" },
                children: [
                  /* @__PURE__ */ p.jsx(Ap, { size: 11 }),
                  " Math Injector"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px", scrollbarWidth: "none" }, children: T.map((v) => /* @__PURE__ */ p.jsxs(
          "div",
          {
            onClick: () => tu("+", k, v),
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
                ya,
                {
                  size: 11,
                  style: { opacity: 0.5, cursor: "pointer" },
                  onClick: (j) => Lc(j, v)
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
              onChange: (v) => E(v.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 8px", color: "#ffffff", fontSize: "0.75rem", outline: "none" },
              children: Kn.map((v) => /* @__PURE__ */ p.jsxs("option", { value: v, children: [
                v,
                " - ",
                (Gt[v] || {}).name || v
              ] }, v))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => Dc(x),
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
        ln && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p.jsxs(
            "select",
            {
              value: C,
              onChange: (v) => z(v.target.value),
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
              value: Ct,
              onChange: (v) => Tl(v.target.value),
              placeholder: "Amount",
              style: { width: "65px", background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" }
            }
          ),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: Hn,
              onChange: (v) => Et(v.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" },
              children: Kn.map((v) => /* @__PURE__ */ p.jsx("option", { value: v, children: v }, v))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => tu(C, Ct, Hn),
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
            io,
            {
              options: Kn,
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
          children: /* @__PURE__ */ p.jsx(pa, { size: 18 })
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Receive:" }),
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ p.jsx(
            io,
            {
              options: Kn,
              value: a,
              onChange: c
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: eu,
              readOnly: !0,
              style: { color: "#ffffff", fontSize: "1.4rem", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { backgroundColor: "#09090b", padding: "12px", borderRadius: "12px", border: "1px solid #27272a", display: "flex", flexDirection: "column", gap: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "5px" }, children: [
          /* @__PURE__ */ p.jsx(zp, { size: 12 }),
          " Live Pair Equivalents (",
          h,
          " ",
          i,
          "):"
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }, children: Oc.filter((v) => v !== i).map((v) => {
          const j = Tc(v), O = v === a;
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              onClick: () => c(v),
              style: {
                backgroundColor: O ? "#27272a" : "#121215",
                border: O ? "1px solid #3f3f46" : "1px solid #1c1c21",
                borderRadius: "8px",
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.15s ease"
              },
              children: [
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: O ? "#ffffff" : "#a1a1aa", fontWeight: "800" }, children: v }),
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: "#ffffff", fontWeight: "700", fontFamily: "'JetBrains Mono', monospace" }, children: j })
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
            onClick: Fc,
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
              /* @__PURE__ */ p.jsx(Sp, { size: 15 }),
              " Push Result (",
              eu,
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
            onClick: nu,
            disabled: Me,
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
              /* @__PURE__ */ p.jsx(Dp, { size: 14, className: Me ? "animate-spin" : "" }),
              Me ? "Syncing..." : "Sync Rates"
            ]
          }
        )
      ] })
    ] }),
    We.length > 0 && /* @__PURE__ */ p.jsxs("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ p.jsx(Mp, { size: 13 }),
          "Calculation History Tape"
        ] }),
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              an([]), localStorage.removeItem(uo);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ p.jsx(Wp, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: We.map((v) => /* @__PURE__ */ p.jsxs(
        "div",
        {
          onClick: () => {
            g(v.expr), n("calculator");
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
function bp(e, n) {
  if (!e) return () => {
  };
  const t = co.createRoot(e);
  return t.render(/* @__PURE__ */ p.jsx(Yp, { platformAPI: n })), () => {
    try {
      t.unmount();
    } catch {
    }
  };
}
export {
  Gp as SafeAgentLayer,
  Yp as default,
  bp as mount_app
};
