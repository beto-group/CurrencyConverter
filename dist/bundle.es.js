(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;min-height:100vh;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 52px) 12px calc(env(safe-area-inset-bottom,0px) + 24px) 12px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.studio-card{background:#121215;border:1px solid #27272a;border-radius:20px;padding:16px;width:100%;max-width:100%;box-shadow:0 20px 40px #0009;display:flex;flex-direction:column;gap:14px;position:relative;box-sizing:border-box;margin:auto 0;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:24px}.studio-card{max-width:480px;padding:24px;gap:18px}}.studio-header{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box}.tab-switcher{display:flex;background:#09090b;padding:3px;border-radius:12px;border:1px solid #27272a;width:100%;gap:4px}.tab-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 12px;border:none;border-radius:9px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s ease;color:#71717a;background:transparent}.tab-btn.active{background:#27272a;color:#fff;box-shadow:0 2px 8px #0006}.calc-screen{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;box-shadow:inset 0 2px 6px #000c;width:100%;box-sizing:border-box}.calc-expr{font-size:clamp(.85rem,3.5vw,1.05rem);color:#71717a;font-family:JetBrains Mono,monospace;word-break:break-all;min-height:24px;width:100%;text-align:right}.calc-result{font-size:clamp(1.6rem,7vw,2.4rem);font-weight:800;color:#fff;font-family:JetBrains Mono,monospace;overflow-x:auto;white-space:nowrap;line-height:1.1;width:100%;text-align:right;scrollbar-width:none}.calc-result::-webkit-scrollbar{display:none}.calc-keypad{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%;box-sizing:border-box}.key-btn{padding:14px 10px;border-radius:10px;border:1px solid #27272a;background:#18181b;color:#fff;font-size:clamp(1.05rem,4vw,1.25rem);font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;-webkit-user-select:none;user-select:none;box-shadow:0 2px 6px #0000004d}.key-btn:active{transform:scale(.95);background:#27272a}.key-btn.op{background:#27272a;color:#fff;border-color:#3f3f46;font-weight:800}.key-btn.op:active{background:#3f3f46}.key-btn.action{background:#18181b;color:#a1a1aa;border-color:#27272a;font-size:.85rem;font-weight:700}.key-btn.equal{background:#3f3f46;color:#fff;border-color:#52525b;font-weight:800;box-shadow:0 4px 12px #0006}.key-btn.equal:active{background:#52525b}.pair-box{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:8px;width:100%;box-sizing:border-box}.swap-circle{background:#18181b;border:1px solid #27272a;color:#a1a1aa;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-6px 0;z-index:2;box-shadow:0 4px 12px #00000080}.swap-circle:hover{background:#27272a;color:#fff;transform:rotate(180deg)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var da = { exports: {} }, ml = {}, pa = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = Symbol.for("react.element"), Dc = Symbol.for("react.portal"), Lc = Symbol.for("react.fragment"), Mc = Symbol.for("react.strict_mode"), Ic = Symbol.for("react.profiler"), Fc = Symbol.for("react.provider"), Oc = Symbol.for("react.context"), Uc = Symbol.for("react.forward_ref"), Ac = Symbol.for("react.suspense"), $c = Symbol.for("react.memo"), Bc = Symbol.for("react.lazy"), nu = Symbol.iterator;
function Wc(e) {
  return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ma = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ya = Object.assign, ha = {};
function vt(e, n, t) {
  this.props = e, this.context = n, this.refs = ha, this.updater = t || ma;
}
vt.prototype.isReactComponent = {};
vt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
vt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ga() {
}
ga.prototype = vt.prototype;
function ri(e, n, t) {
  this.props = e, this.context = n, this.refs = ha, this.updater = t || ma;
}
var li = ri.prototype = new ga();
li.constructor = ri;
ya(li, vt.prototype);
li.isPureReactComponent = !0;
var tu = Array.isArray, va = Object.prototype.hasOwnProperty, oi = { current: null }, xa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sa(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) va.call(n, r) && !xa.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: sr, type: e, key: o, ref: i, props: l, _owner: oi.current };
}
function Hc(e, n) {
  return { $$typeof: sr, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function ii(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function Vc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var ru = /\/+/g;
function Ll(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Vc("" + e.key) : n.toString(36);
}
function Tr(e, n, t, r, l) {
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
        case sr:
        case Dc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Ll(i, 0) : r, tu(l) ? (t = "", e != null && (t = e.replace(ru, "$&/") + "/"), Tr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (ii(l) && (l = Hc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(ru, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", tu(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Ll(o, u);
    i += Tr(o, n, t, a, l);
  }
  else if (a = Wc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Ll(o, u++), i += Tr(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function mr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return Tr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Kc(e) {
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
var de = { current: null }, Dr = { transition: null }, Qc = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: Dr, ReactCurrentOwner: oi };
function ka() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: mr, forEach: function(e, n, t) {
  mr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return mr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return mr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!ii(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = vt;
I.Fragment = Lc;
I.Profiler = Ic;
I.PureComponent = ri;
I.StrictMode = Mc;
I.Suspense = Ac;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qc;
I.act = ka;
I.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ya({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = oi.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) va.call(n, a) && !xa.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function(e) {
  return e = { $$typeof: Oc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Fc, _context: e }, e.Consumer = e;
};
I.createElement = Sa;
I.createFactory = function(e) {
  var n = Sa.bind(null, e);
  return n.type = e, n;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: Uc, render: e };
};
I.isValidElement = ii;
I.lazy = function(e) {
  return { $$typeof: Bc, _payload: { _status: -1, _result: e }, _init: Kc };
};
I.memo = function(e, n) {
  return { $$typeof: $c, type: e, compare: n === void 0 ? null : n };
};
I.startTransition = function(e) {
  var n = Dr.transition;
  Dr.transition = {};
  try {
    e();
  } finally {
    Dr.transition = n;
  }
};
I.unstable_act = ka;
I.useCallback = function(e, n) {
  return de.current.useCallback(e, n);
};
I.useContext = function(e) {
  return de.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return de.current.useDeferredValue(e);
};
I.useEffect = function(e, n) {
  return de.current.useEffect(e, n);
};
I.useId = function() {
  return de.current.useId();
};
I.useImperativeHandle = function(e, n, t) {
  return de.current.useImperativeHandle(e, n, t);
};
I.useInsertionEffect = function(e, n) {
  return de.current.useInsertionEffect(e, n);
};
I.useLayoutEffect = function(e, n) {
  return de.current.useLayoutEffect(e, n);
};
I.useMemo = function(e, n) {
  return de.current.useMemo(e, n);
};
I.useReducer = function(e, n, t) {
  return de.current.useReducer(e, n, t);
};
I.useRef = function(e) {
  return de.current.useRef(e);
};
I.useState = function(e) {
  return de.current.useState(e);
};
I.useSyncExternalStore = function(e, n, t) {
  return de.current.useSyncExternalStore(e, n, t);
};
I.useTransition = function() {
  return de.current.useTransition();
};
I.version = "18.3.1";
pa.exports = I;
var M = pa.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gc = M, Yc = Symbol.for("react.element"), Xc = Symbol.for("react.fragment"), Zc = Object.prototype.hasOwnProperty, Jc = Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function wa(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Zc.call(n, r) && !qc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Yc, type: e, key: o, ref: i, props: l, _owner: Jc.current };
}
ml.Fragment = Xc;
ml.jsx = wa;
ml.jsxs = wa;
da.exports = ml;
var p = da.exports, so = {}, Ca = { exports: {} }, _e = {}, Ea = { exports: {} }, Na = {};
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
  function n(C, R) {
    var T = C.length;
    C.push(R);
    e: for (; 0 < T; ) {
      var A = T - 1 >>> 1, Z = C[A];
      if (0 < l(Z, R)) C[A] = R, C[T] = Z, T = A;
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var R = C[0], T = C.pop();
    if (T !== R) {
      C[0] = T;
      e: for (var A = 0, Z = C.length, kt = Z >>> 1; A < kt; ) {
        var Be = 2 * (A + 1) - 1, Hn = C[Be], ln = Be + 1, wt = C[ln];
        if (0 > l(Hn, T)) ln < Z && 0 > l(wt, Hn) ? (C[A] = wt, C[ln] = T, A = ln) : (C[A] = Hn, C[Be] = T, A = Be);
        else if (ln < Z && 0 > l(wt, T)) C[A] = wt, C[ln] = T, A = ln;
        else break e;
      }
    }
    return R;
  }
  function l(C, R) {
    var T = C.sortIndex - R.sortIndex;
    return T !== 0 ? T : C.id - R.id;
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
  var a = [], c = [], h = 1, y = null, m = 3, g = !1, k = !1, w = !1, j = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var R = t(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= C) r(c), R.sortIndex = R.expirationTime, n(a, R);
      else break;
      R = t(c);
    }
  }
  function v(C) {
    if (w = !1, d(C), !k) if (t(a) !== null) k = !0, Pn(E);
    else {
      var R = t(c);
      R !== null && zn(v, R.startTime - C);
    }
  }
  function E(C, R) {
    k = !1, w && (w = !1, f(z), z = -1), g = !0;
    var T = m;
    try {
      for (d(R), y = t(a); y !== null && (!(y.expirationTime > R) || C && !Se()); ) {
        var A = y.callback;
        if (typeof A == "function") {
          y.callback = null, m = y.priorityLevel;
          var Z = A(y.expirationTime <= R);
          R = e.unstable_now(), typeof Z == "function" ? y.callback = Z : y === t(a) && r(a), d(R);
        } else r(a);
        y = t(a);
      }
      if (y !== null) var kt = !0;
      else {
        var Be = t(c);
        Be !== null && zn(v, Be.startTime - R), kt = !1;
      }
      return kt;
    } finally {
      y = null, m = T, g = !1;
    }
  }
  var _ = !1, P = null, z = -1, H = 5, D = -1;
  function Se() {
    return !(e.unstable_now() - D < H);
  }
  function rn() {
    if (P !== null) {
      var C = e.unstable_now();
      D = C;
      var R = !0;
      try {
        R = P(!0, C);
      } finally {
        R ? _n() : (_ = !1, P = null);
      }
    } else _ = !1;
  }
  var _n;
  if (typeof s == "function") _n = function() {
    s(rn);
  };
  else if (typeof MessageChannel < "u") {
    var jl = new MessageChannel(), Tl = jl.port2;
    jl.port1.onmessage = rn, _n = function() {
      Tl.postMessage(null);
    };
  } else _n = function() {
    j(rn, 0);
  };
  function Pn(C) {
    P = C, _ || (_ = !0, _n());
  }
  function zn(C, R) {
    z = j(function() {
      C(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    k || g || (k = !0, Pn(E));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = m;
    }
    var T = m;
    m = R;
    try {
      return C();
    } finally {
      m = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, R) {
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
    var T = m;
    m = C;
    try {
      return R();
    } finally {
      m = T;
    }
  }, e.unstable_scheduleCallback = function(C, R, T) {
    var A = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? A + T : A) : T = A, C) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = T + Z, C = { id: h++, callback: R, priorityLevel: C, startTime: T, expirationTime: Z, sortIndex: -1 }, T > A ? (C.sortIndex = T, n(c, C), t(a) === null && C === t(c) && (w ? (f(z), z = -1) : w = !0, zn(v, T - A))) : (C.sortIndex = Z, n(a, C), k || g || (k = !0, Pn(E))), C;
  }, e.unstable_shouldYield = Se, e.unstable_wrapCallback = function(C) {
    var R = m;
    return function() {
      var T = m;
      m = R;
      try {
        return C.apply(this, arguments);
      } finally {
        m = T;
      }
    };
  };
})(Na);
Ea.exports = Na;
var bc = Ea.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = M, Ne = bc;
function x(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _a = /* @__PURE__ */ new Set(), Qt = {};
function Bn(e, n) {
  ft(e, n), ft(e + "Capture", n);
}
function ft(e, n) {
  for (Qt[e] = n, e = 0; e < n.length; e++) _a.add(n[e]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), co = Object.prototype.hasOwnProperty, nf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, lu = {}, ou = {};
function tf(e) {
  return co.call(ou, e) ? !0 : co.call(lu, e) ? !1 : nf.test(e) ? ou[e] = !0 : (lu[e] = !0, !1);
}
function rf(e, n, t, r) {
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
function lf(e, n, t, r) {
  if (n === null || typeof n > "u" || rf(e, n, t, r)) return !0;
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
function pe(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  oe[e] = new pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  oe[n] = new pe(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ui = /[\-:]([a-z])/g;
function ai(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    ui,
    ai
  );
  oe[n] = new pe(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(ui, ai);
  oe[n] = new pe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(ui, ai);
  oe[n] = new pe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function si(e, n, t, r) {
  var l = oe.hasOwnProperty(n) ? oe[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (lf(n, t, l, r) && (t = null), r || l === null ? tf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var tn = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yr = Symbol.for("react.element"), Gn = Symbol.for("react.portal"), Yn = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fo = Symbol.for("react.profiler"), Pa = Symbol.for("react.provider"), za = Symbol.for("react.context"), fi = Symbol.for("react.forward_ref"), po = Symbol.for("react.suspense"), mo = Symbol.for("react.suspense_list"), di = Symbol.for("react.memo"), un = Symbol.for("react.lazy"), Ra = Symbol.for("react.offscreen"), iu = Symbol.iterator;
function Nt(e) {
  return e === null || typeof e != "object" ? null : (e = iu && e[iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Ml;
function Lt(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Lt(e) : "";
}
function of(e) {
  switch (e.tag) {
    case 5:
      return Lt(e.type);
    case 16:
      return Lt("Lazy");
    case 13:
      return Lt("Suspense");
    case 19:
      return Lt("SuspenseList");
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
function yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yn:
      return "Fragment";
    case Gn:
      return "Portal";
    case fo:
      return "Profiler";
    case ci:
      return "StrictMode";
    case po:
      return "Suspense";
    case mo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case za:
      return (e.displayName || "Context") + ".Consumer";
    case Pa:
      return (e._context.displayName || "Context") + ".Provider";
    case fi:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case di:
      return n = e.displayName || null, n !== null ? n : yo(e.type) || "Memo";
    case un:
      n = e._payload, e = e._init;
      try {
        return yo(e(n));
      } catch {
      }
  }
  return null;
}
function uf(e) {
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
      return yo(n);
    case 8:
      return n === ci ? "StrictMode" : "Mode";
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
function ja(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function af(e) {
  var n = ja(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function hr(e) {
  e._valueTracker || (e._valueTracker = af(e));
}
function Ta(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = ja(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Vr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ho(e, n) {
  var t = n.checked;
  return G({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function uu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = kn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function Da(e, n) {
  n = n.checked, n != null && si(e, "checked", n, !1);
}
function go(e, n) {
  Da(e, n);
  var t = kn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? vo(e, n.type, t) : n.hasOwnProperty("defaultValue") && vo(e, n.type, kn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function au(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function vo(e, n, t) {
  (n !== "number" || Vr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Mt = Array.isArray;
function ot(e, n, t, r) {
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
function xo(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(x(91));
  return G({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function su(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(x(92));
      if (Mt(t)) {
        if (1 < t.length) throw Error(x(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: kn(t) };
}
function La(e, n) {
  var t = kn(n.value), r = kn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function cu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Ma(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function So(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ma(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gr, Ia = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (gr = gr || document.createElement("div"), gr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = gr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Gt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ot = {
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
}, sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ot).forEach(function(e) {
  sf.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Ot[n] = Ot[e];
  });
});
function Fa(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Ot.hasOwnProperty(e) && Ot[e] ? ("" + n).trim() : n + "px";
}
function Oa(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = Fa(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var cf = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ko(e, n) {
  if (n) {
    if (cf[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(x(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(x(62));
  }
}
function wo(e, n) {
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
var Co = null;
function pi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Eo = null, it = null, ut = null;
function fu(e) {
  if (e = dr(e)) {
    if (typeof Eo != "function") throw Error(x(280));
    var n = e.stateNode;
    n && (n = xl(n), Eo(e.stateNode, e.type, n));
  }
}
function Ua(e) {
  it ? ut ? ut.push(e) : ut = [e] : it = e;
}
function Aa() {
  if (it) {
    var e = it, n = ut;
    if (ut = it = null, fu(e), n) for (e = 0; e < n.length; e++) fu(n[e]);
  }
}
function $a(e, n) {
  return e(n);
}
function Ba() {
}
var Ol = !1;
function Wa(e, n, t) {
  if (Ol) return e(n, t);
  Ol = !0;
  try {
    return $a(e, n, t);
  } finally {
    Ol = !1, (it !== null || ut !== null) && (Ba(), Aa());
  }
}
function Yt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = xl(t);
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
  if (t && typeof t != "function") throw Error(x(231, n, typeof t));
  return t;
}
var No = !1;
if (qe) try {
  var _t = {};
  Object.defineProperty(_t, "passive", { get: function() {
    No = !0;
  } }), window.addEventListener("test", _t, _t), window.removeEventListener("test", _t, _t);
} catch {
  No = !1;
}
function ff(e, n, t, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var Ut = !1, Kr = null, Qr = !1, _o = null, df = { onError: function(e) {
  Ut = !0, Kr = e;
} };
function pf(e, n, t, r, l, o, i, u, a) {
  Ut = !1, Kr = null, ff.apply(df, arguments);
}
function mf(e, n, t, r, l, o, i, u, a) {
  if (pf.apply(this, arguments), Ut) {
    if (Ut) {
      var c = Kr;
      Ut = !1, Kr = null;
    } else throw Error(x(198));
    Qr || (Qr = !0, _o = c);
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
function Ha(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function du(e) {
  if (Wn(e) !== e) throw Error(x(188));
}
function yf(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Wn(e), n === null) throw Error(x(188));
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
        if (o === t) return du(l), e;
        if (o === r) return du(l), n;
        o = o.sibling;
      }
      throw Error(x(188));
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
        if (!i) throw Error(x(189));
      }
    }
    if (t.alternate !== r) throw Error(x(190));
  }
  if (t.tag !== 3) throw Error(x(188));
  return t.stateNode.current === t ? e : n;
}
function Va(e) {
  return e = yf(e), e !== null ? Ka(e) : null;
}
function Ka(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ka(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Qa = Ne.unstable_scheduleCallback, pu = Ne.unstable_cancelCallback, hf = Ne.unstable_shouldYield, gf = Ne.unstable_requestPaint, X = Ne.unstable_now, vf = Ne.unstable_getCurrentPriorityLevel, mi = Ne.unstable_ImmediatePriority, Ga = Ne.unstable_UserBlockingPriority, Gr = Ne.unstable_NormalPriority, xf = Ne.unstable_LowPriority, Ya = Ne.unstable_IdlePriority, yl = null, Ke = null;
function Sf(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function") try {
    Ke.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ue = Math.clz32 ? Math.clz32 : Cf, kf = Math.log, wf = Math.LN2;
function Cf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (kf(e) / wf | 0) | 0;
}
var vr = 64, xr = 4194304;
function It(e) {
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
function Yr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = It(u) : (o &= i, o !== 0 && (r = It(o)));
  } else i = t & ~l, i !== 0 ? r = It(i) : o !== 0 && (r = It(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Ue(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Ef(e, n) {
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
function Nf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ue(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = Ef(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function Po(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xa() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function Ul(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function cr(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ue(n), e[n] = t;
}
function _f(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Ue(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function yi(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Ue(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var O = 0;
function Za(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ja, hi, qa, ba, es, zo = !1, Sr = [], pn = null, mn = null, yn = null, Xt = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map(), sn = [], Pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function mu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      mn = null;
      break;
    case "mouseover":
    case "mouseout":
      yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Xt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zt.delete(n.pointerId);
  }
}
function Pt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = dr(n), n !== null && hi(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function zf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return pn = Pt(pn, e, n, t, r, l), !0;
    case "dragenter":
      return mn = Pt(mn, e, n, t, r, l), !0;
    case "mouseover":
      return yn = Pt(yn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Xt.set(o, Pt(Xt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Zt.set(o, Pt(Zt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function ns(e) {
  var n = Tn(e.target);
  if (n !== null) {
    var t = Wn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Ha(t), n !== null) {
          e.blockedOn = n, es(e.priority, function() {
            qa(t);
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
function Lr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = Ro(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      Co = r, t.target.dispatchEvent(r), Co = null;
    } else return n = dr(t), n !== null && hi(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function yu(e, n, t) {
  Lr(e) && t.delete(n);
}
function Rf() {
  zo = !1, pn !== null && Lr(pn) && (pn = null), mn !== null && Lr(mn) && (mn = null), yn !== null && Lr(yn) && (yn = null), Xt.forEach(yu), Zt.forEach(yu);
}
function zt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, zo || (zo = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Rf)));
}
function Jt(e) {
  function n(l) {
    return zt(l, e);
  }
  if (0 < Sr.length) {
    zt(Sr[0], e);
    for (var t = 1; t < Sr.length; t++) {
      var r = Sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (pn !== null && zt(pn, e), mn !== null && zt(mn, e), yn !== null && zt(yn, e), Xt.forEach(n), Zt.forEach(n), t = 0; t < sn.length; t++) r = sn[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && (t = sn[0], t.blockedOn === null); ) ns(t), t.blockedOn === null && sn.shift();
}
var at = tn.ReactCurrentBatchConfig, Xr = !0;
function jf(e, n, t, r) {
  var l = O, o = at.transition;
  at.transition = null;
  try {
    O = 1, gi(e, n, t, r);
  } finally {
    O = l, at.transition = o;
  }
}
function Tf(e, n, t, r) {
  var l = O, o = at.transition;
  at.transition = null;
  try {
    O = 4, gi(e, n, t, r);
  } finally {
    O = l, at.transition = o;
  }
}
function gi(e, n, t, r) {
  if (Xr) {
    var l = Ro(e, n, t, r);
    if (l === null) Yl(e, n, r, Zr, t), mu(e, r);
    else if (zf(l, e, n, t, r)) r.stopPropagation();
    else if (mu(e, r), n & 4 && -1 < Pf.indexOf(e)) {
      for (; l !== null; ) {
        var o = dr(l);
        if (o !== null && Ja(o), o = Ro(e, n, t, r), o === null && Yl(e, n, r, Zr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Yl(e, n, r, null, t);
  }
}
var Zr = null;
function Ro(e, n, t, r) {
  if (Zr = null, e = pi(r), e = Tn(e), e !== null) if (n = Wn(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Ha(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Zr = e, null;
}
function ts(e) {
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
      switch (vf()) {
        case mi:
          return 1;
        case Ga:
          return 4;
        case Gr:
        case xf:
          return 16;
        case Ya:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fn = null, vi = null, Mr = null;
function rs() {
  if (Mr) return Mr;
  var e, n = vi, t = n.length, r, l = "value" in fn ? fn.value : fn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ir(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function kr() {
  return !0;
}
function hu() {
  return !1;
}
function Pe(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? kr : hu, this.isPropagationStopped = hu, this;
  }
  return G(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = kr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = kr);
  }, persist: function() {
  }, isPersistent: kr }), n;
}
var xt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xi = Pe(xt), fr = G({}, xt, { view: 0, detail: 0 }), Df = Pe(fr), Al, $l, Rt, hl = G({}, fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Si, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Rt && (Rt && e.type === "mousemove" ? (Al = e.screenX - Rt.screenX, $l = e.screenY - Rt.screenY) : $l = Al = 0, Rt = e), Al);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $l;
} }), gu = Pe(hl), Lf = G({}, hl, { dataTransfer: 0 }), Mf = Pe(Lf), If = G({}, fr, { relatedTarget: 0 }), Bl = Pe(If), Ff = G({}, xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Of = Pe(Ff), Uf = G({}, xt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Af = Pe(Uf), $f = G({}, xt, { data: 0 }), vu = Pe($f), Bf = {
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
}, Wf = {
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
}, Hf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Vf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Hf[e]) ? !!n[e] : !1;
}
function Si() {
  return Vf;
}
var Kf = G({}, fr, { key: function(e) {
  if (e.key) {
    var n = Bf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Si, charCode: function(e) {
  return e.type === "keypress" ? Ir(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Qf = Pe(Kf), Gf = G({}, hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xu = Pe(Gf), Yf = G({}, fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Si }), Xf = Pe(Yf), Zf = G({}, xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = Pe(Zf), qf = G({}, hl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), bf = Pe(qf), ed = [9, 13, 27, 32], ki = qe && "CompositionEvent" in window, At = null;
qe && "documentMode" in document && (At = document.documentMode);
var nd = qe && "TextEvent" in window && !At, ls = qe && (!ki || At && 8 < At && 11 >= At), Su = " ", ku = !1;
function os(e, n) {
  switch (e) {
    case "keyup":
      return ed.indexOf(n.keyCode) !== -1;
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
function is(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xn = !1;
function td(e, n) {
  switch (e) {
    case "compositionend":
      return is(n);
    case "keypress":
      return n.which !== 32 ? null : (ku = !0, Su);
    case "textInput":
      return e = n.data, e === Su && ku ? null : e;
    default:
      return null;
  }
}
function rd(e, n) {
  if (Xn) return e === "compositionend" || !ki && os(e, n) ? (e = rs(), Mr = vi = fn = null, Xn = !1, e) : null;
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
      return ls && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var ld = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!ld[e.type] : n === "textarea";
}
function us(e, n, t, r) {
  Ua(r), n = Jr(n, "onChange"), 0 < n.length && (t = new xi("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var $t = null, qt = null;
function od(e) {
  vs(e, 0);
}
function gl(e) {
  var n = qn(e);
  if (Ta(n)) return e;
}
function id(e, n) {
  if (e === "change") return n;
}
var as = !1;
if (qe) {
  var Wl;
  if (qe) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Cu = document.createElement("div");
      Cu.setAttribute("oninput", "return;"), Hl = typeof Cu.oninput == "function";
    }
    Wl = Hl;
  } else Wl = !1;
  as = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  $t && ($t.detachEvent("onpropertychange", ss), qt = $t = null);
}
function ss(e) {
  if (e.propertyName === "value" && gl(qt)) {
    var n = [];
    us(n, qt, e, pi(e)), Wa(od, n);
  }
}
function ud(e, n, t) {
  e === "focusin" ? (Eu(), $t = n, qt = t, $t.attachEvent("onpropertychange", ss)) : e === "focusout" && Eu();
}
function ad(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return gl(qt);
}
function sd(e, n) {
  if (e === "click") return gl(n);
}
function cd(e, n) {
  if (e === "input" || e === "change") return gl(n);
}
function fd(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var $e = typeof Object.is == "function" ? Object.is : fd;
function bt(e, n) {
  if ($e(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!co.call(n, l) || !$e(e[l], n[l])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, n) {
  var t = Nu(e);
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
    t = Nu(t);
  }
}
function cs(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? cs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function fs() {
  for (var e = window, n = Vr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Vr(e.document);
  }
  return n;
}
function wi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function dd(e) {
  var n = fs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && cs(t.ownerDocument.documentElement, t)) {
    if (r !== null && wi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = _u(t, o);
        var i = _u(
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
var pd = qe && "documentMode" in document && 11 >= document.documentMode, Zn = null, jo = null, Bt = null, To = !1;
function Pu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  To || Zn == null || Zn !== Vr(r) || (r = Zn, "selectionStart" in r && wi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Bt && bt(Bt, r) || (Bt = r, r = Jr(jo, "onSelect"), 0 < r.length && (n = new xi("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Zn)));
}
function wr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Jn = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Vl = {}, ds = {};
qe && (ds = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
function vl(e) {
  if (Vl[e]) return Vl[e];
  if (!Jn[e]) return e;
  var n = Jn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in ds) return Vl[e] = n[t];
  return e;
}
var ps = vl("animationend"), ms = vl("animationiteration"), ys = vl("animationstart"), hs = vl("transitionend"), gs = /* @__PURE__ */ new Map(), zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Cn(e, n) {
  gs.set(e, n), Bn(n, [e]);
}
for (var Kl = 0; Kl < zu.length; Kl++) {
  var Ql = zu[Kl], md = Ql.toLowerCase(), yd = Ql[0].toUpperCase() + Ql.slice(1);
  Cn(md, "on" + yd);
}
Cn(ps, "onAnimationEnd");
Cn(ms, "onAnimationIteration");
Cn(ys, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(hs, "onTransitionEnd");
ft("onMouseEnter", ["mouseout", "mouseover"]);
ft("onMouseLeave", ["mouseout", "mouseover"]);
ft("onPointerEnter", ["pointerout", "pointerover"]);
ft("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ft = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ft));
function Ru(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, mf(r, n, void 0, e), e.currentTarget = null;
}
function vs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Ru(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Ru(l, u, c), o = a;
      }
    }
  }
  if (Qr) throw e = _o, Qr = !1, _o = null, e;
}
function $(e, n) {
  var t = n[Fo];
  t === void 0 && (t = n[Fo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (xs(n, e, 2, !1), t.add(r));
}
function Gl(e, n, t) {
  var r = 0;
  n && (r |= 4), xs(t, e, r, n);
}
var Cr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Cr]) {
    e[Cr] = !0, _a.forEach(function(t) {
      t !== "selectionchange" && (hd.has(t) || Gl(t, !1, e), Gl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Cr] || (n[Cr] = !0, Gl("selectionchange", !1, n));
  }
}
function xs(e, n, t, r) {
  switch (ts(n)) {
    case 1:
      var l = jf;
      break;
    case 4:
      l = Tf;
      break;
    default:
      l = gi;
  }
  t = l.bind(null, n, t, e), l = void 0, !No || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
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
  Wa(function() {
    var c = o, h = pi(t), y = [];
    e: {
      var m = gs.get(e);
      if (m !== void 0) {
        var g = xi, k = e;
        switch (e) {
          case "keypress":
            if (Ir(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Qf;
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
            g = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Xf;
            break;
          case ps:
          case ms:
          case ys:
            g = Of;
            break;
          case hs:
            g = Jf;
            break;
          case "scroll":
            g = Df;
            break;
          case "wheel":
            g = bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Af;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = xu;
        }
        var w = (n & 4) !== 0, j = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Yt(s, f), v != null && w.push(nr(s, v, d)))), j) break;
          s = s.return;
        }
        0 < w.length && (m = new g(m, k, null, t, h), y.push({ event: m, listeners: w }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && t !== Co && (k = t.relatedTarget || t.fromElement) && (Tn(k) || k[be])) break e;
        if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (k = t.relatedTarget || t.toElement, g = c, k = k ? Tn(k) : null, k !== null && (j = Wn(k), k !== j || k.tag !== 5 && k.tag !== 6) && (k = null)) : (g = null, k = c), g !== k)) {
          if (w = gu, v = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (w = xu, v = "onPointerLeave", f = "onPointerEnter", s = "pointer"), j = g == null ? m : qn(g), d = k == null ? m : qn(k), m = new w(v, s + "leave", g, t, h), m.target = j, m.relatedTarget = d, v = null, Tn(h) === c && (w = new w(f, s + "enter", k, t, h), w.target = d, w.relatedTarget = j, v = w), j = v, g && k) n: {
            for (w = g, f = k, s = 0, d = w; d; d = Qn(d)) s++;
            for (d = 0, v = f; v; v = Qn(v)) d++;
            for (; 0 < s - d; ) w = Qn(w), s--;
            for (; 0 < d - s; ) f = Qn(f), d--;
            for (; s--; ) {
              if (w === f || f !== null && w === f.alternate) break n;
              w = Qn(w), f = Qn(f);
            }
            w = null;
          }
          else w = null;
          g !== null && ju(y, m, g, w, !1), k !== null && j !== null && ju(y, j, k, w, !0);
        }
      }
      e: {
        if (m = c ? qn(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var E = id;
        else if (wu(m)) if (as) E = cd;
        else {
          E = ad;
          var _ = ud;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = sd);
        if (E && (E = E(e, c))) {
          us(y, E, t, h);
          break e;
        }
        _ && _(e, m, c), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && vo(m, "number", m.value);
      }
      switch (_ = c ? qn(c) : window, e) {
        case "focusin":
          (wu(_) || _.contentEditable === "true") && (Zn = _, jo = c, Bt = null);
          break;
        case "focusout":
          Bt = jo = Zn = null;
          break;
        case "mousedown":
          To = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          To = !1, Pu(y, t, h);
          break;
        case "selectionchange":
          if (pd) break;
        case "keydown":
        case "keyup":
          Pu(y, t, h);
      }
      var P;
      if (ki) e: {
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
      else Xn ? os(e, t) && (z = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (z = "onCompositionStart");
      z && (ls && t.locale !== "ko" && (Xn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Xn && (P = rs()) : (fn = h, vi = "value" in fn ? fn.value : fn.textContent, Xn = !0)), _ = Jr(c, z), 0 < _.length && (z = new vu(z, e, null, t, h), y.push({ event: z, listeners: _ }), P ? z.data = P : (P = is(t), P !== null && (z.data = P)))), (P = nd ? td(e, t) : rd(e, t)) && (c = Jr(c, "onBeforeInput"), 0 < c.length && (h = new vu("onBeforeInput", "beforeinput", null, t, h), y.push({ event: h, listeners: c }), h.data = P));
    }
    vs(y, n);
  });
}
function nr(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Jr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Yt(e, t), o != null && r.unshift(nr(e, o, l)), o = Yt(e, n), o != null && r.push(nr(e, o, l))), e = e.return;
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Yt(t, o), a != null && i.unshift(nr(t, a, u))) : l || (a = Yt(t, o), a != null && i.push(nr(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var gd = /\r\n?/g, vd = /\u0000|\uFFFD/g;
function Tu(e) {
  return (typeof e == "string" ? e : "" + e).replace(gd, `
`).replace(vd, "");
}
function Er(e, n, t) {
  if (n = Tu(n), Tu(e) !== n && t) throw Error(x(425));
}
function qr() {
}
var Do = null, Lo = null;
function Mo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Io = typeof setTimeout == "function" ? setTimeout : void 0, xd = typeof clearTimeout == "function" ? clearTimeout : void 0, Du = typeof Promise == "function" ? Promise : void 0, Sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Du < "u" ? function(e) {
  return Du.resolve(null).then(e).catch(kd);
} : Io;
function kd(e) {
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
        e.removeChild(l), Jt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Jt(n);
}
function hn(e) {
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
function Lu(e) {
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
var St = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + St, tr = "__reactProps$" + St, be = "__reactContainer$" + St, Fo = "__reactEvents$" + St, wd = "__reactListeners$" + St, Cd = "__reactHandles$" + St;
function Tn(e) {
  var n = e[Ve];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[be] || t[Ve]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Lu(e); e !== null; ) {
        if (t = e[Ve]) return t;
        e = Lu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function dr(e) {
  return e = e[Ve] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function xl(e) {
  return e[tr] || null;
}
var Oo = [], bn = -1;
function En(e) {
  return { current: e };
}
function B(e) {
  0 > bn || (e.current = Oo[bn], Oo[bn] = null, bn--);
}
function U(e, n) {
  bn++, Oo[bn] = e.current, e.current = n;
}
var wn = {}, se = En(wn), he = En(!1), Fn = wn;
function dt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function br() {
  B(he), B(se);
}
function Mu(e, n, t) {
  if (se.current !== wn) throw Error(x(168));
  U(se, n), U(he, t);
}
function Ss(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(x(108, uf(e) || "Unknown", l));
  return G({}, t, r);
}
function el(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, Fn = se.current, U(se, e), U(he, he.current), !0;
}
function Iu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  t ? (e = Ss(e, n, Fn), r.__reactInternalMemoizedMergedChildContext = e, B(he), B(se), U(se, e)) : B(he), U(he, t);
}
var Ye = null, Sl = !1, Zl = !1;
function ks(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
function Ed(e) {
  Sl = !0, ks(e);
}
function Nn() {
  if (!Zl && Ye !== null) {
    Zl = !0;
    var e = 0, n = O;
    try {
      var t = Ye;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ye = null, Sl = !1;
    } catch (l) {
      throw Ye !== null && (Ye = Ye.slice(e + 1)), Qa(mi, Nn), l;
    } finally {
      O = n, Zl = !1;
    }
  }
  return null;
}
var et = [], nt = 0, nl = null, tl = 0, ze = [], Re = 0, On = null, Xe = 1, Ze = "";
function Rn(e, n) {
  et[nt++] = tl, et[nt++] = nl, nl = e, tl = n;
}
function ws(e, n, t) {
  ze[Re++] = Xe, ze[Re++] = Ze, ze[Re++] = On, On = e;
  var r = Xe;
  e = Ze;
  var l = 32 - Ue(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Ue(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Xe = 1 << 32 - Ue(n) + l | t << l | r, Ze = o + e;
  } else Xe = 1 << o | t << l | r, Ze = e;
}
function Ci(e) {
  e.return !== null && (Rn(e, 1), ws(e, 1, 0));
}
function Ei(e) {
  for (; e === nl; ) nl = et[--nt], et[nt] = null, tl = et[--nt], et[nt] = null;
  for (; e === On; ) On = ze[--Re], ze[Re] = null, Ze = ze[--Re], ze[Re] = null, Xe = ze[--Re], ze[Re] = null;
}
var Ee = null, Ce = null, W = !1, Oe = null;
function Cs(e, n) {
  var t = je(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Fu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ee = e, Ce = hn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ee = e, Ce = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = On !== null ? { id: Xe, overflow: Ze } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = je(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ee = e, Ce = null, !0) : !1;
    default:
      return !1;
  }
}
function Uo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ao(e) {
  if (W) {
    var n = Ce;
    if (n) {
      var t = n;
      if (!Fu(e, n)) {
        if (Uo(e)) throw Error(x(418));
        n = hn(t.nextSibling);
        var r = Ee;
        n && Fu(e, n) ? Cs(r, t) : (e.flags = e.flags & -4097 | 2, W = !1, Ee = e);
      }
    } else {
      if (Uo(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, W = !1, Ee = e;
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ee = e;
}
function Nr(e) {
  if (e !== Ee) return !1;
  if (!W) return Ou(e), W = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Mo(e.type, e.memoizedProps)), n && (n = Ce)) {
    if (Uo(e)) throw Es(), Error(x(418));
    for (; n; ) Cs(e, n), n = hn(n.nextSibling);
  }
  if (Ou(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Ce = hn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ee ? hn(e.stateNode.nextSibling) : null;
  return !0;
}
function Es() {
  for (var e = Ce; e; ) e = hn(e.nextSibling);
}
function pt() {
  Ce = Ee = null, W = !1;
}
function Ni(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var Nd = tn.ReactCurrentBatchConfig;
function jt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(x(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!t._owner) throw Error(x(290, e));
  }
  return e;
}
function _r(e, n) {
  throw e = Object.prototype.toString.call(n), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Uu(e) {
  var n = e._init;
  return n(e._payload);
}
function Ns(e) {
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
    return s === null || s.tag !== 6 ? (s = ro(d, f.mode, v), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, v) {
    var E = d.type;
    return E === Yn ? h(f, s, d.props.children, v, d.key) : s !== null && (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === un && Uu(E) === s.type) ? (v = l(s, d.props), v.ref = jt(f, s, d), v.return = f, v) : (v = Wr(d.type, d.key, d.props, null, f.mode, v), v.ref = jt(f, s, d), v.return = f, v);
  }
  function c(f, s, d, v) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = lo(d, f.mode, v), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, v, E) {
    return s === null || s.tag !== 7 ? (s = In(d, f.mode, v, E), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function y(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = ro("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case yr:
          return d = Wr(s.type, s.key, s.props, null, f.mode, d), d.ref = jt(f, null, s), d.return = f, d;
        case Gn:
          return s = lo(s, f.mode, d), s.return = f, s;
        case un:
          var v = s._init;
          return y(f, v(s._payload), d);
      }
      if (Mt(s) || Nt(s)) return s = In(s, f.mode, d, null), s.return = f, s;
      _r(f, s);
    }
    return null;
  }
  function m(f, s, d, v) {
    var E = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, s, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case yr:
          return d.key === E ? a(f, s, d, v) : null;
        case Gn:
          return d.key === E ? c(f, s, d, v) : null;
        case un:
          return E = d._init, m(
            f,
            s,
            E(d._payload),
            v
          );
      }
      if (Mt(d) || Nt(d)) return E !== null ? null : h(f, s, d, v, null);
      _r(f, d);
    }
    return null;
  }
  function g(f, s, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(s, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case yr:
          return f = f.get(v.key === null ? d : v.key) || null, a(s, f, v, E);
        case Gn:
          return f = f.get(v.key === null ? d : v.key) || null, c(s, f, v, E);
        case un:
          var _ = v._init;
          return g(f, s, d, _(v._payload), E);
      }
      if (Mt(v) || Nt(v)) return f = f.get(d) || null, h(s, f, v, E, null);
      _r(s, v);
    }
    return null;
  }
  function k(f, s, d, v) {
    for (var E = null, _ = null, P = s, z = s = 0, H = null; P !== null && z < d.length; z++) {
      P.index > z ? (H = P, P = null) : H = P.sibling;
      var D = m(f, P, d[z], v);
      if (D === null) {
        P === null && (P = H);
        break;
      }
      e && P && D.alternate === null && n(f, P), s = o(D, s, z), _ === null ? E = D : _.sibling = D, _ = D, P = H;
    }
    if (z === d.length) return t(f, P), W && Rn(f, z), E;
    if (P === null) {
      for (; z < d.length; z++) P = y(f, d[z], v), P !== null && (s = o(P, s, z), _ === null ? E = P : _.sibling = P, _ = P);
      return W && Rn(f, z), E;
    }
    for (P = r(f, P); z < d.length; z++) H = g(P, f, z, d[z], v), H !== null && (e && H.alternate !== null && P.delete(H.key === null ? z : H.key), s = o(H, s, z), _ === null ? E = H : _.sibling = H, _ = H);
    return e && P.forEach(function(Se) {
      return n(f, Se);
    }), W && Rn(f, z), E;
  }
  function w(f, s, d, v) {
    var E = Nt(d);
    if (typeof E != "function") throw Error(x(150));
    if (d = E.call(d), d == null) throw Error(x(151));
    for (var _ = E = null, P = s, z = s = 0, H = null, D = d.next(); P !== null && !D.done; z++, D = d.next()) {
      P.index > z ? (H = P, P = null) : H = P.sibling;
      var Se = m(f, P, D.value, v);
      if (Se === null) {
        P === null && (P = H);
        break;
      }
      e && P && Se.alternate === null && n(f, P), s = o(Se, s, z), _ === null ? E = Se : _.sibling = Se, _ = Se, P = H;
    }
    if (D.done) return t(
      f,
      P
    ), W && Rn(f, z), E;
    if (P === null) {
      for (; !D.done; z++, D = d.next()) D = y(f, D.value, v), D !== null && (s = o(D, s, z), _ === null ? E = D : _.sibling = D, _ = D);
      return W && Rn(f, z), E;
    }
    for (P = r(f, P); !D.done; z++, D = d.next()) D = g(P, f, z, D.value, v), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? z : D.key), s = o(D, s, z), _ === null ? E = D : _.sibling = D, _ = D);
    return e && P.forEach(function(rn) {
      return n(f, rn);
    }), W && Rn(f, z), E;
  }
  function j(f, s, d, v) {
    if (typeof d == "object" && d !== null && d.type === Yn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case yr:
          e: {
            for (var E = d.key, _ = s; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Yn) {
                  if (_.tag === 7) {
                    t(f, _.sibling), s = l(_, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === un && Uu(E) === _.type) {
                  t(f, _.sibling), s = l(_, d.props), s.ref = jt(f, _, d), s.return = f, f = s;
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            d.type === Yn ? (s = In(d.props.children, f.mode, v, d.key), s.return = f, f = s) : (v = Wr(d.type, d.key, d.props, null, f.mode, v), v.ref = jt(f, s, d), v.return = f, f = v);
          }
          return i(f);
        case Gn:
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
            s = lo(d, f.mode, v), s.return = f, f = s;
          }
          return i(f);
        case un:
          return _ = d._init, j(f, s, _(d._payload), v);
      }
      if (Mt(d)) return k(f, s, d, v);
      if (Nt(d)) return w(f, s, d, v);
      _r(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(f, s.sibling), s = l(s, d), s.return = f, f = s) : (t(f, s), s = ro(d, f.mode, v), s.return = f, f = s), i(f)) : t(f, s);
  }
  return j;
}
var mt = Ns(!0), _s = Ns(!1), rl = En(null), ll = null, tt = null, _i = null;
function Pi() {
  _i = tt = ll = null;
}
function zi(e) {
  var n = rl.current;
  B(rl), e._currentValue = n;
}
function $o(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function st(e, n) {
  ll = e, _i = tt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ye = !0), e.firstContext = null);
}
function De(e) {
  var n = e._currentValue;
  if (_i !== e) if (e = { context: e, memoizedValue: n, next: null }, tt === null) {
    if (ll === null) throw Error(x(308));
    tt = e, ll.dependencies = { lanes: 0, firstContext: e };
  } else tt = tt.next = e;
  return n;
}
var Dn = null;
function Ri(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
function Ps(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, Ri(n)) : (t.next = l.next, l.next = t), n.interleaved = t, en(e, r);
}
function en(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var an = !1;
function ji(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function zs(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Je(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function gn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, en(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, Ri(r)) : (n.next = l.next, l.next = n), r.interleaved = n, en(e, t);
}
function Fr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, yi(e, t);
  }
}
function Au(e, n) {
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
function ol(e, n, t, r) {
  var l = e.updateQueue;
  an = !1;
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
              an = !0;
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
    An |= i, e.lanes = i, e.memoizedState = y;
  }
}
function $u(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(x(191, l));
      l.call(r);
    }
  }
}
var pr = {}, Qe = En(pr), rr = En(pr), lr = En(pr);
function Ln(e) {
  if (e === pr) throw Error(x(174));
  return e;
}
function Ti(e, n) {
  switch (U(lr, n), U(rr, e), U(Qe, pr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : So(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = So(n, e);
  }
  B(Qe), U(Qe, n);
}
function yt() {
  B(Qe), B(rr), B(lr);
}
function Rs(e) {
  Ln(lr.current);
  var n = Ln(Qe.current), t = So(n, e.type);
  n !== t && (U(rr, e), U(Qe, t));
}
function Di(e) {
  rr.current === e && (B(Qe), B(rr));
}
var K = En(0);
function il(e) {
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
function Li() {
  for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Or = tn.ReactCurrentDispatcher, ql = tn.ReactCurrentBatchConfig, Un = 0, Q = null, b = null, ne = null, ul = !1, Wt = !1, or = 0, _d = 0;
function ie() {
  throw Error(x(321));
}
function Mi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!$e(e[t], n[t])) return !1;
  return !0;
}
function Ii(e, n, t, r, l, o) {
  if (Un = o, Q = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Or.current = e === null || e.memoizedState === null ? jd : Td, e = t(r, l), Wt) {
    o = 0;
    do {
      if (Wt = !1, or = 0, 25 <= o) throw Error(x(301));
      o += 1, ne = b = null, n.updateQueue = null, Or.current = Dd, e = t(r, l);
    } while (Wt);
  }
  if (Or.current = al, n = b !== null && b.next !== null, Un = 0, ne = b = Q = null, ul = !1, n) throw Error(x(300));
  return e;
}
function Fi() {
  var e = or !== 0;
  return or = 0, e;
}
function He() {
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
    if (e === null) throw Error(x(310));
    b = e, e = { memoizedState: b.memoizedState, baseState: b.baseState, baseQueue: b.baseQueue, queue: b.queue, next: null }, ne === null ? Q.memoizedState = ne = e : ne = ne.next = e;
  }
  return ne;
}
function ir(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function bl(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(x(311));
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
      if ((Un & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var y = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = y, i = r) : a = a.next = y, Q.lanes |= h, An |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, $e(r, n.memoizedState) || (ye = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, An |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function eo(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(x(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    $e(o, n.memoizedState) || (ye = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function js() {
}
function Ts(e, n) {
  var t = Q, r = Le(), l = n(), o = !$e(r.memoizedState, l);
  if (o && (r.memoizedState = l, ye = !0), r = r.queue, Oi(Ms.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ne !== null && ne.memoizedState.tag & 1) {
    if (t.flags |= 2048, ur(9, Ls.bind(null, t, r, l, n), void 0, null), te === null) throw Error(x(349));
    Un & 30 || Ds(t, n, l);
  }
  return l;
}
function Ds(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Ls(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Is(n) && Fs(e);
}
function Ms(e, n, t) {
  return t(function() {
    Is(n) && Fs(e);
  });
}
function Is(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !$e(e, t);
  } catch {
    return !0;
  }
}
function Fs(e) {
  var n = en(e, 1);
  n !== null && Ae(n, e, 1, -1);
}
function Bu(e) {
  var n = He();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ir, lastRenderedState: e }, n.queue = e, e = e.dispatch = Rd.bind(null, Q, e), [n.memoizedState, e];
}
function ur(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Os() {
  return Le().memoizedState;
}
function Ur(e, n, t, r) {
  var l = He();
  Q.flags |= e, l.memoizedState = ur(1 | n, t, void 0, r === void 0 ? null : r);
}
function kl(e, n, t, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (o = i.destroy, r !== null && Mi(r, i.deps)) {
      l.memoizedState = ur(n, t, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = ur(1 | n, t, o, r);
}
function Wu(e, n) {
  return Ur(8390656, 8, e, n);
}
function Oi(e, n) {
  return kl(2048, 8, e, n);
}
function Us(e, n) {
  return kl(4, 2, e, n);
}
function As(e, n) {
  return kl(4, 4, e, n);
}
function $s(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Bs(e, n, t) {
  return t = t != null ? t.concat([e]) : null, kl(4, 4, $s.bind(null, n, e), t);
}
function Ui() {
}
function Ws(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Mi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Hs(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Mi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Vs(e, n, t) {
  return Un & 21 ? ($e(t, n) || (t = Xa(), Q.lanes |= t, An |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = t);
}
function Pd(e, n) {
  var t = O;
  O = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), n();
  } finally {
    O = t, ql.transition = r;
  }
}
function Ks() {
  return Le().memoizedState;
}
function zd(e, n, t) {
  var r = xn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Qs(e)) Gs(n, t);
  else if (t = Ps(e, n, t, r), t !== null) {
    var l = fe();
    Ae(t, e, r, l), Ys(t, n, r);
  }
}
function Rd(e, n, t) {
  var r = xn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Qs(e)) Gs(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, $e(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, Ri(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = Ps(e, n, l, r), t !== null && (l = fe(), Ae(t, e, r, l), Ys(t, n, r));
  }
}
function Qs(e) {
  var n = e.alternate;
  return e === Q || n !== null && n === Q;
}
function Gs(e, n) {
  Wt = ul = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Ys(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, yi(e, t);
  }
}
var al = { readContext: De, useCallback: ie, useContext: ie, useEffect: ie, useImperativeHandle: ie, useInsertionEffect: ie, useLayoutEffect: ie, useMemo: ie, useReducer: ie, useRef: ie, useState: ie, useDebugValue: ie, useDeferredValue: ie, useTransition: ie, useMutableSource: ie, useSyncExternalStore: ie, useId: ie, unstable_isNewReconciler: !1 }, jd = { readContext: De, useCallback: function(e, n) {
  return He().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: De, useEffect: Wu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Ur(
    4194308,
    4,
    $s.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Ur(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Ur(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = He();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = He();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = zd.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = He();
  return e = { current: e }, n.memoizedState = e;
}, useState: Bu, useDebugValue: Ui, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Bu(!1), n = e[0];
  return e = Pd.bind(null, e[1]), He().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = Q, l = He();
  if (W) {
    if (t === void 0) throw Error(x(407));
    t = t();
  } else {
    if (t = n(), te === null) throw Error(x(349));
    Un & 30 || Ds(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Wu(Ms.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, ur(9, Ls.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = He(), n = te.identifierPrefix;
  if (W) {
    var t = Ze, r = Xe;
    t = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = or++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = _d++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, Td = {
  readContext: De,
  useCallback: Ws,
  useContext: De,
  useEffect: Oi,
  useImperativeHandle: Bs,
  useInsertionEffect: Us,
  useLayoutEffect: As,
  useMemo: Hs,
  useReducer: bl,
  useRef: Os,
  useState: function() {
    return bl(ir);
  },
  useDebugValue: Ui,
  useDeferredValue: function(e) {
    var n = Le();
    return Vs(n, b.memoizedState, e);
  },
  useTransition: function() {
    var e = bl(ir)[0], n = Le().memoizedState;
    return [e, n];
  },
  useMutableSource: js,
  useSyncExternalStore: Ts,
  useId: Ks,
  unstable_isNewReconciler: !1
}, Dd = { readContext: De, useCallback: Ws, useContext: De, useEffect: Oi, useImperativeHandle: Bs, useInsertionEffect: Us, useLayoutEffect: As, useMemo: Hs, useReducer: eo, useRef: Os, useState: function() {
  return eo(ir);
}, useDebugValue: Ui, useDeferredValue: function(e) {
  var n = Le();
  return b === null ? n.memoizedState = e : Vs(n, b.memoizedState, e);
}, useTransition: function() {
  var e = eo(ir)[0], n = Le().memoizedState;
  return [e, n];
}, useMutableSource: js, useSyncExternalStore: Ts, useId: Ks, unstable_isNewReconciler: !1 };
function Ie(e, n) {
  if (e && e.defaultProps) {
    n = G({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Bo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : G({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var wl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = fe(), l = xn(e), o = Je(r, l);
  o.payload = n, t != null && (o.callback = t), n = gn(e, o, l), n !== null && (Ae(n, e, l, r), Fr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = fe(), l = xn(e), o = Je(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = gn(e, o, l), n !== null && (Ae(n, e, l, r), Fr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = fe(), r = xn(e), l = Je(t, r);
  l.tag = 2, n != null && (l.callback = n), n = gn(e, l, r), n !== null && (Ae(n, e, r, t), Fr(n, e, r));
} };
function Hu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !bt(t, r) || !bt(l, o) : !0;
}
function Xs(e, n, t) {
  var r = !1, l = wn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = De(o) : (l = ge(n) ? Fn : se.current, r = n.contextTypes, o = (r = r != null) ? dt(e, l) : wn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = wl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Vu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && wl.enqueueReplaceState(n, n.state, null);
}
function Wo(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, ji(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = De(o) : (o = ge(n) ? Fn : se.current, l.context = dt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Bo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && wl.enqueueReplaceState(l, l.state, null), ol(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ht(e, n) {
  try {
    var t = "", r = n;
    do
      t += of(r), r = r.return;
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
function Ho(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Ld = typeof WeakMap == "function" ? WeakMap : Map;
function Zs(e, n, t) {
  t = Je(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    cl || (cl = !0, bo = r), Ho(e, n);
  }, t;
}
function Js(e, n, t) {
  t = Je(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Ho(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Ho(e, n), typeof r != "function" && (vn === null ? vn = /* @__PURE__ */ new Set([this]) : vn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Ku(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ld();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Gd.bind(null, e, n, t), n.then(e, e));
}
function Qu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Je(-1, 1), n.tag = 2, gn(t, n, 1))), t.lanes |= 1), e);
}
var Md = tn.ReactCurrentOwner, ye = !1;
function ce(e, n, t, r) {
  n.child = e === null ? _s(n, null, t, r) : mt(n, e.child, t, r);
}
function Yu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return st(n, l), r = Ii(e, n, t, r, o, l), t = Fi(), e !== null && !ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, nn(e, n, l)) : (W && t && Ci(n), n.flags |= 1, ce(e, n, r, l), n.child);
}
function Xu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Qi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, qs(e, n, o, r, l)) : (e = Wr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : bt, t(i, r) && e.ref === n.ref) return nn(e, n, l);
  }
  return n.flags |= 1, e = Sn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function qs(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bt(o, r) && e.ref === n.ref) if (ye = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ye = !0);
    else return n.lanes = e.lanes, nn(e, n, l);
  }
  return Vo(e, n, t, r, l);
}
function bs(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(lt, we), we |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, U(lt, we), we |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, U(lt, we), we |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, U(lt, we), we |= r;
  return ce(e, n, l, t), n.child;
}
function ec(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Vo(e, n, t, r, l) {
  var o = ge(t) ? Fn : se.current;
  return o = dt(n, o), st(n, l), t = Ii(e, n, t, r, o, l), r = Fi(), e !== null && !ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, nn(e, n, l)) : (W && r && Ci(n), n.flags |= 1, ce(e, n, t, l), n.child);
}
function Zu(e, n, t, r, l) {
  if (ge(t)) {
    var o = !0;
    el(n);
  } else o = !1;
  if (st(n, l), n.stateNode === null) Ar(e, n), Xs(n, t, r), Wo(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = De(c) : (c = ge(t) ? Fn : se.current, c = dt(n, c));
    var h = t.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && Vu(n, i, r, c), an = !1;
    var m = n.memoizedState;
    i.state = m, ol(n, r, i, l), a = n.memoizedState, u !== r || m !== a || he.current || an ? (typeof h == "function" && (Bo(n, t, h, r), a = n.memoizedState), (u = an || Hu(n, t, u, r, m, a, c)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, zs(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Ie(n.type, u), i.props = c, y = n.pendingProps, m = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = De(a) : (a = ge(t) ? Fn : se.current, a = dt(n, a));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || m !== a) && Vu(n, i, r, a), an = !1, m = n.memoizedState, i.state = m, ol(n, r, i, l);
    var k = n.memoizedState;
    u !== y || m !== k || he.current || an ? (typeof g == "function" && (Bo(n, t, g, r), k = n.memoizedState), (c = an || Hu(n, t, c, r, m, k, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = k), i.props = r, i.state = k, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Ko(e, n, t, r, o, l);
}
function Ko(e, n, t, r, l, o) {
  ec(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Iu(n, t, !1), nn(e, n, o);
  r = n.stateNode, Md.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = mt(n, e.child, null, o), n.child = mt(n, null, u, o)) : ce(e, n, u, o), n.memoizedState = r.state, l && Iu(n, t, !0), n.child;
}
function nc(e) {
  var n = e.stateNode;
  n.pendingContext ? Mu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Mu(e, n.context, !1), Ti(e, n.containerInfo);
}
function Ju(e, n, t, r, l) {
  return pt(), Ni(l), n.flags |= 256, ce(e, n, t, r), n.child;
}
var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tc(e, n, t) {
  var r = n.pendingProps, l = K.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(K, l & 1), e === null)
    return Ao(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Nl(i, r, 0, null), e = In(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Go(t), n.memoizedState = Qo, e) : Ai(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Id(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = Sn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Sn(u, o) : (o = In(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Go(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Qo, r;
  }
  return o = e.child, e = o.sibling, r = Sn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Ai(e, n) {
  return n = Nl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function Pr(e, n, t, r) {
  return r !== null && Ni(r), mt(n, e.child, null, t), e = Ai(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function Id(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = no(Error(x(422))), Pr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), o = In(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && mt(n, e.child, null, i), n.child.memoizedState = Go(i), n.memoizedState = Qo, o);
  if (!(n.mode & 1)) return Pr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(x(419)), r = no(o, r, void 0), Pr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ye || u) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, en(e, l), Ae(r, e, l, -1));
    }
    return Ki(), r = no(Error(x(421))), Pr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Yd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Ce = hn(l.nextSibling), Ee = n, W = !0, Oe = null, e !== null && (ze[Re++] = Xe, ze[Re++] = Ze, ze[Re++] = On, Xe = e.id, Ze = e.overflow, On = n), n = Ai(n, r.children), n.flags |= 4096, n);
}
function qu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), $o(e.return, n, t);
}
function to(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function rc(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (ce(e, n, r.children, t), r = K.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && qu(e, t, n);
      else if (e.tag === 19) qu(e, t, n);
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
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && il(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), to(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && il(e) === null) {
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
function Ar(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function nn(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), An |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(x(153));
  if (n.child !== null) {
    for (e = n.child, t = Sn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Sn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function Fd(e, n, t) {
  switch (n.tag) {
    case 3:
      nc(n), pt();
      break;
    case 5:
      Rs(n);
      break;
    case 1:
      ge(n.type) && el(n);
      break;
    case 4:
      Ti(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      U(rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(K, K.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? tc(e, n, t) : (U(K, K.current & 1), e = nn(e, n, t), e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return rc(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, bs(e, n, t);
  }
  return nn(e, n, t);
}
var lc, Yo, oc, ic;
lc = function(e, n) {
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
Yo = function() {
};
oc = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Ln(Qe.current);
    var o = null;
    switch (t) {
      case "input":
        l = ho(e, l), r = ho(e, r), o = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = xo(e, l), r = xo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qr);
    }
    ko(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Qt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Qt.hasOwnProperty(c) ? (a != null && c === "onScroll" && $("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
ic = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Tt(e, n) {
  if (!W) switch (e.tailMode) {
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
function ue(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Od(e, n, t) {
  var r = n.pendingProps;
  switch (Ei(n), n.tag) {
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
      return ue(n), null;
    case 1:
      return ge(n.type) && br(), ue(n), null;
    case 3:
      return r = n.stateNode, yt(), B(he), B(se), Li(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Oe !== null && (ti(Oe), Oe = null))), Yo(e, n), ue(n), null;
    case 5:
      Di(n);
      var l = Ln(lr.current);
      if (t = n.type, e !== null && n.stateNode != null) oc(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(x(166));
          return ue(n), null;
        }
        if (e = Ln(Qe.current), Nr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ve] = n, r[tr] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ft.length; l++) $(Ft[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $(
                "error",
                r
              ), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              uu(r, o), $("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, $("invalid", r);
              break;
            case "textarea":
              su(r, o), $("invalid", r);
          }
          ko(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Er(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Er(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Qt.hasOwnProperty(i) && u != null && i === "onScroll" && $("scroll", r);
          }
          switch (t) {
            case "input":
              hr(r), au(r, o, !0);
              break;
            case "textarea":
              hr(r), cu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = qr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ma(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ve] = n, e[tr] = r, lc(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = wo(t, r), t) {
              case "dialog":
                $("cancel", e), $("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ft.length; l++) $(Ft[l], e);
                l = r;
                break;
              case "source":
                $("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                $(
                  "error",
                  e
                ), $("load", e), l = r;
                break;
              case "details":
                $("toggle", e), l = r;
                break;
              case "input":
                uu(e, r), l = ho(e, r), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), $("invalid", e);
                break;
              case "textarea":
                su(e, r), l = xo(e, r), $("invalid", e);
                break;
              default:
                l = r;
            }
            ko(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Oa(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ia(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Gt(e, a) : typeof a == "number" && Gt(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qt.hasOwnProperty(o) ? a != null && o === "onScroll" && $("scroll", e) : a != null && si(e, o, a, i));
            }
            switch (t) {
              case "input":
                hr(e), au(e, r, !1);
                break;
              case "textarea":
                hr(e), cu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? ot(e, !!r.multiple, o, !1) : r.defaultValue != null && ot(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = qr);
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
      return ue(n), null;
    case 6:
      if (e && n.stateNode != null) ic(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(x(166));
        if (t = Ln(lr.current), Ln(Qe.current), Nr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ve] = n, (o = r.nodeValue !== t) && (e = Ee, e !== null)) switch (e.tag) {
            case 3:
              Er(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Er(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ve] = n, n.stateNode = r;
      }
      return ue(n), null;
    case 13:
      if (B(K), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Ce !== null && n.mode & 1 && !(n.flags & 128)) Es(), pt(), n.flags |= 98560, o = !1;
        else if (o = Nr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[Ve] = n;
          } else pt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ue(n), o = !1;
        } else Oe !== null && (ti(Oe), Oe = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || K.current & 1 ? ee === 0 && (ee = 3) : Ki())), n.updateQueue !== null && (n.flags |= 4), ue(n), null);
    case 4:
      return yt(), Yo(e, n), e === null && er(n.stateNode.containerInfo), ue(n), null;
    case 10:
      return zi(n.type._context), ue(n), null;
    case 17:
      return ge(n.type) && br(), ue(n), null;
    case 19:
      if (B(K), o = n.memoizedState, o === null) return ue(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) Tt(o, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = il(e), i !== null) {
            for (n.flags |= 128, Tt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return U(K, K.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && X() > gt && (n.flags |= 128, r = !0, Tt(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = il(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Tt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W) return ue(n), null;
        } else 2 * X() - o.renderingStartTime > gt && t !== 1073741824 && (n.flags |= 128, r = !0, Tt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = X(), n.sibling = null, t = K.current, U(K, r ? t & 1 | 2 : t & 1), n) : (ue(n), null);
    case 22:
    case 23:
      return Vi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? we & 1073741824 && (ue(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ue(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, n.tag));
}
function Ud(e, n) {
  switch (Ei(n), n.tag) {
    case 1:
      return ge(n.type) && br(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return yt(), B(he), B(se), Li(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return Di(n), null;
    case 13:
      if (B(K), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(x(340));
        pt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return B(K), null;
    case 4:
      return yt(), null;
    case 10:
      return zi(n.type._context), null;
    case 22:
    case 23:
      return Vi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1, ae = !1, Ad = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function rt(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    Y(e, n, r);
  }
  else t.current = null;
}
function Xo(e, n, t) {
  try {
    t();
  } catch (r) {
    Y(e, n, r);
  }
}
var bu = !1;
function $d(e, n) {
  if (Do = Xr, e = fs(), wi(e)) {
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
  for (Lo = { focusedElem: e, selectionRange: t }, Xr = !1, N = n; N !== null; ) if (n = N, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, N = e;
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
            var w = k.memoizedProps, j = k.memoizedState, f = n.stateNode, s = f.getSnapshotBeforeUpdate(n.elementType === n.type ? w : Ie(n.type, w), j);
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
          throw Error(x(163));
      }
    } catch (v) {
      Y(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, N = e;
      break;
    }
    N = n.return;
  }
  return k = bu, bu = !1, k;
}
function Ht(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Xo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Cl(e, n) {
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
function Zo(e) {
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
function uc(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, uc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ve], delete n[tr], delete n[Fo], delete n[wd], delete n[Cd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ac(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ea(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ac(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = qr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Jo(e, n, t), e = e.sibling; e !== null; ) Jo(e, n, t), e = e.sibling;
}
function qo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (qo(e, n, t), e = e.sibling; e !== null; ) qo(e, n, t), e = e.sibling;
}
var re = null, Fe = !1;
function on(e, n, t) {
  for (t = t.child; t !== null; ) sc(e, n, t), t = t.sibling;
}
function sc(e, n, t) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function") try {
    Ke.onCommitFiberUnmount(yl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      ae || rt(t, n);
    case 6:
      var r = re, l = Fe;
      re = null, on(e, n, t), re = r, Fe = l, re !== null && (Fe ? (e = re, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : re.removeChild(t.stateNode));
      break;
    case 18:
      re !== null && (Fe ? (e = re, t = t.stateNode, e.nodeType === 8 ? Xl(e.parentNode, t) : e.nodeType === 1 && Xl(e, t), Jt(e)) : Xl(re, t.stateNode));
      break;
    case 4:
      r = re, l = Fe, re = t.stateNode.containerInfo, Fe = !0, on(e, n, t), re = r, Fe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ae && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Xo(t, n, i), l = l.next;
        } while (l !== r);
      }
      on(e, n, t);
      break;
    case 1:
      if (!ae && (rt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Y(t, n, u);
      }
      on(e, n, t);
      break;
    case 21:
      on(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (ae = (r = ae) || t.memoizedState !== null, on(e, n, t), ae = r) : on(e, n, t);
      break;
    default:
      on(e, n, t);
  }
}
function na(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Ad()), n.forEach(function(r) {
      var l = Xd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Me(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            re = u.stateNode, Fe = !1;
            break e;
          case 3:
            re = u.stateNode.containerInfo, Fe = !0;
            break e;
          case 4:
            re = u.stateNode.containerInfo, Fe = !0;
            break e;
        }
        u = u.return;
      }
      if (re === null) throw Error(x(160));
      sc(o, i, l), re = null, Fe = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      Y(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) cc(n, e), n = n.sibling;
}
function cc(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Me(n, e), We(e), r & 4) {
        try {
          Ht(3, e, e.return), Cl(3, e);
        } catch (w) {
          Y(e, e.return, w);
        }
        try {
          Ht(5, e, e.return);
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 1:
      Me(n, e), We(e), r & 512 && t !== null && rt(t, t.return);
      break;
    case 5:
      if (Me(n, e), We(e), r & 512 && t !== null && rt(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Gt(l, "");
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Da(l, o), wo(u, i);
          var c = wo(u, o);
          for (i = 0; i < a.length; i += 2) {
            var h = a[i], y = a[i + 1];
            h === "style" ? Oa(l, y) : h === "dangerouslySetInnerHTML" ? Ia(l, y) : h === "children" ? Gt(l, y) : si(l, h, y, c);
          }
          switch (u) {
            case "input":
              go(l, o);
              break;
            case "textarea":
              La(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? ot(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? ot(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : ot(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[tr] = o;
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Me(n, e), We(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Me(n, e), We(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Jt(n.containerInfo);
      } catch (w) {
        Y(e, e.return, w);
      }
      break;
    case 4:
      Me(n, e), We(e);
      break;
    case 13:
      Me(n, e), We(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Wi = X())), r & 4 && na(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (ae = (c = ae) || h, Me(n, e), ae = c) : Me(n, e), We(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (N = e, h = e.child; h !== null; ) {
          for (y = N = h; N !== null; ) {
            switch (m = N, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ht(4, m, m.return);
                break;
              case 1:
                rt(m, m.return);
                var k = m.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = m, t = m.return;
                  try {
                    n = r, k.props = n.memoizedProps, k.state = n.memoizedState, k.componentWillUnmount();
                  } catch (w) {
                    Y(r, t, w);
                  }
                }
                break;
              case 5:
                rt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  ra(y);
                  continue;
                }
            }
            g !== null ? (g.return = m, N = g) : ra(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, a = y.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Fa("display", i));
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
      Me(n, e), We(e), r & 4 && na(e);
      break;
    case 21:
      break;
    default:
      Me(
        n,
        e
      ), We(e);
  }
}
function We(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (ac(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gt(l, ""), r.flags &= -33);
          var o = ea(e);
          qo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ea(e);
          Jo(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Bd(e, n, t) {
  N = e, fc(e);
}
function fc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || ae;
        u = zr;
        var c = ae;
        if (zr = i, (ae = a) && !c) for (N = l; N !== null; ) i = N, a = i.child, i.tag === 22 && i.memoizedState !== null ? la(l) : a !== null ? (a.return = i, N = a) : la(l);
        for (; o !== null; ) N = o, fc(o), o = o.sibling;
        N = l, zr = u, ae = c;
      }
      ta(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : ta(e);
  }
}
function ta(e) {
  for (; N !== null; ) {
    var n = N;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ae || Cl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !ae) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Ie(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && $u(n, o, r);
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
              $u(n, i, t);
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
                  y !== null && Jt(y);
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
            throw Error(x(163));
        }
        ae || n.flags & 512 && Zo(n);
      } catch (m) {
        Y(n, n.return, m);
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
function ra(e) {
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
function la(e) {
  for (; N !== null; ) {
    var n = N;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            Cl(4, n);
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
            Zo(n);
          } catch (a) {
            Y(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Zo(n);
          } catch (a) {
            Y(n, i, a);
          }
      }
    } catch (a) {
      Y(n, n.return, a);
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
var Wd = Math.ceil, sl = tn.ReactCurrentDispatcher, $i = tn.ReactCurrentOwner, Te = tn.ReactCurrentBatchConfig, F = 0, te = null, q = null, le = 0, we = 0, lt = En(0), ee = 0, ar = null, An = 0, El = 0, Bi = 0, Vt = null, me = null, Wi = 0, gt = 1 / 0, Ge = null, cl = !1, bo = null, vn = null, Rr = !1, dn = null, fl = 0, Kt = 0, ei = null, $r = -1, Br = 0;
function fe() {
  return F & 6 ? X() : $r !== -1 ? $r : $r = X();
}
function xn(e) {
  return e.mode & 1 ? F & 2 && le !== 0 ? le & -le : Nd.transition !== null ? (Br === 0 && (Br = Xa()), Br) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ts(e.type)), e) : 1;
}
function Ae(e, n, t, r) {
  if (50 < Kt) throw Kt = 0, ei = null, Error(x(185));
  cr(e, t, r), (!(F & 2) || e !== te) && (e === te && (!(F & 2) && (El |= t), ee === 4 && cn(e, le)), ve(e, r), t === 1 && F === 0 && !(n.mode & 1) && (gt = X() + 500, Sl && Nn()));
}
function ve(e, n) {
  var t = e.callbackNode;
  Nf(e, n);
  var r = Yr(e, e === te ? le : 0);
  if (r === 0) t !== null && pu(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && pu(t), n === 1) e.tag === 0 ? Ed(oa.bind(null, e)) : ks(oa.bind(null, e)), Sd(function() {
      !(F & 6) && Nn();
    }), t = null;
    else {
      switch (Za(r)) {
        case 1:
          t = mi;
          break;
        case 4:
          t = Ga;
          break;
        case 16:
          t = Gr;
          break;
        case 536870912:
          t = Ya;
          break;
        default:
          t = Gr;
      }
      t = xc(t, dc.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function dc(e, n) {
  if ($r = -1, Br = 0, F & 6) throw Error(x(327));
  var t = e.callbackNode;
  if (ct() && e.callbackNode !== t) return null;
  var r = Yr(e, e === te ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = dl(e, r);
  else {
    n = r;
    var l = F;
    F |= 2;
    var o = mc();
    (te !== e || le !== n) && (Ge = null, gt = X() + 500, Mn(e, n));
    do
      try {
        Kd();
        break;
      } catch (u) {
        pc(e, u);
      }
    while (!0);
    Pi(), sl.current = o, F = l, q !== null ? n = 0 : (te = null, le = 0, n = ee);
  }
  if (n !== 0) {
    if (n === 2 && (l = Po(e), l !== 0 && (r = l, n = ni(e, l))), n === 1) throw t = ar, Mn(e, 0), cn(e, r), ve(e, X()), t;
    if (n === 6) cn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Hd(l) && (n = dl(e, r), n === 2 && (o = Po(e), o !== 0 && (r = o, n = ni(e, o))), n === 1)) throw t = ar, Mn(e, 0), cn(e, r), ve(e, X()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          jn(e, me, Ge);
          break;
        case 3:
          if (cn(e, r), (r & 130023424) === r && (n = Wi + 500 - X(), 10 < n)) {
            if (Yr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Io(jn.bind(null, e, me, Ge), n);
            break;
          }
          jn(e, me, Ge);
          break;
        case 4:
          if (cn(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Io(jn.bind(null, e, me, Ge), r);
            break;
          }
          jn(e, me, Ge);
          break;
        case 5:
          jn(e, me, Ge);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ve(e, X()), e.callbackNode === t ? dc.bind(null, e) : null;
}
function ni(e, n) {
  var t = Vt;
  return e.current.memoizedState.isDehydrated && (Mn(e, n).flags |= 256), e = dl(e, n), e !== 2 && (n = me, me = t, n !== null && ti(n)), e;
}
function ti(e) {
  me === null ? me = e : me.push.apply(me, e);
}
function Hd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!$e(o(), l)) return !1;
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
function cn(e, n) {
  for (n &= ~Bi, n &= ~El, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Ue(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function oa(e) {
  if (F & 6) throw Error(x(327));
  ct();
  var n = Yr(e, 0);
  if (!(n & 1)) return ve(e, X()), null;
  var t = dl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = Po(e);
    r !== 0 && (n = r, t = ni(e, r));
  }
  if (t === 1) throw t = ar, Mn(e, 0), cn(e, n), ve(e, X()), t;
  if (t === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, jn(e, me, Ge), ve(e, X()), null;
}
function Hi(e, n) {
  var t = F;
  F |= 1;
  try {
    return e(n);
  } finally {
    F = t, F === 0 && (gt = X() + 500, Sl && Nn());
  }
}
function $n(e) {
  dn !== null && dn.tag === 0 && !(F & 6) && ct();
  var n = F;
  F |= 1;
  var t = Te.transition, r = O;
  try {
    if (Te.transition = null, O = 1, e) return e();
  } finally {
    O = r, Te.transition = t, F = n, !(F & 6) && Nn();
  }
}
function Vi() {
  we = lt.current, B(lt);
}
function Mn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, xd(t)), q !== null) for (t = q.return; t !== null; ) {
    var r = t;
    switch (Ei(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && br();
        break;
      case 3:
        yt(), B(he), B(se), Li();
        break;
      case 5:
        Di(r);
        break;
      case 4:
        yt();
        break;
      case 13:
        B(K);
        break;
      case 19:
        B(K);
        break;
      case 10:
        zi(r.type._context);
        break;
      case 22:
      case 23:
        Vi();
    }
    t = t.return;
  }
  if (te = e, q = e = Sn(e.current, null), le = we = n, ee = 0, ar = null, Bi = El = An = 0, me = Vt = null, Dn !== null) {
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
function pc(e, n) {
  do {
    var t = q;
    try {
      if (Pi(), Or.current = al, ul) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ul = !1;
      }
      if (Un = 0, ne = b = Q = null, Wt = !1, or = 0, $i.current = null, t === null || t.return === null) {
        ee = 1, ar = n, q = null;
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
          var g = Qu(i);
          if (g !== null) {
            g.flags &= -257, Gu(g, i, u, o, n), g.mode & 1 && Ku(o, c, n), n = g, a = c;
            var k = n.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), n.updateQueue = w;
            } else k.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Ku(o, c, n), Ki();
              break e;
            }
            a = Error(x(426));
          }
        } else if (W && u.mode & 1) {
          var j = Qu(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Gu(j, i, u, o, n), Ni(ht(a, u));
            break e;
          }
        }
        o = a = ht(a, u), ee !== 4 && (ee = 2), Vt === null ? Vt = [o] : Vt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Zs(o, a, n);
              Au(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (vn === null || !vn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Js(o, u, n);
                Au(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hc(t);
    } catch (E) {
      n = E, q === t && t !== null && (q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function mc() {
  var e = sl.current;
  return sl.current = al, e === null ? al : e;
}
function Ki() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), te === null || !(An & 268435455) && !(El & 268435455) || cn(te, le);
}
function dl(e, n) {
  var t = F;
  F |= 2;
  var r = mc();
  (te !== e || le !== n) && (Ge = null, Mn(e, n));
  do
    try {
      Vd();
      break;
    } catch (l) {
      pc(e, l);
    }
  while (!0);
  if (Pi(), F = t, sl.current = r, q !== null) throw Error(x(261));
  return te = null, le = 0, ee;
}
function Vd() {
  for (; q !== null; ) yc(q);
}
function Kd() {
  for (; q !== null && !hf(); ) yc(q);
}
function yc(e) {
  var n = vc(e.alternate, e, we);
  e.memoizedProps = e.pendingProps, n === null ? hc(e) : q = n, $i.current = null;
}
function hc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = Ud(t, n), t !== null) {
        t.flags &= 32767, q = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ee = 6, q = null;
        return;
      }
    } else if (t = Od(t, n, we), t !== null) {
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
  var r = O, l = Te.transition;
  try {
    Te.transition = null, O = 1, Qd(e, n, t, r);
  } finally {
    Te.transition = l, O = r;
  }
  return null;
}
function Qd(e, n, t, r) {
  do
    ct();
  while (dn !== null);
  if (F & 6) throw Error(x(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (_f(e, o), e === te && (q = te = null, le = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Rr || (Rr = !0, xc(Gr, function() {
    return ct(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = O;
    O = 1;
    var u = F;
    F |= 4, $i.current = null, $d(e, t), cc(t, e), dd(Lo), Xr = !!Do, Lo = Do = null, e.current = t, Bd(t), gf(), F = u, O = i, Te.transition = o;
  } else e.current = t;
  if (Rr && (Rr = !1, dn = e, fl = l), o = e.pendingLanes, o === 0 && (vn = null), Sf(t.stateNode), ve(e, X()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (cl) throw cl = !1, e = bo, bo = null, e;
  return fl & 1 && e.tag !== 0 && ct(), o = e.pendingLanes, o & 1 ? e === ei ? Kt++ : (Kt = 0, ei = e) : Kt = 0, Nn(), null;
}
function ct() {
  if (dn !== null) {
    var e = Za(fl), n = Te.transition, t = O;
    try {
      if (Te.transition = null, O = 16 > e ? 16 : e, dn === null) var r = !1;
      else {
        if (e = dn, dn = null, fl = 0, F & 6) throw Error(x(331));
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
                      Ht(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, N = y;
                  else for (; N !== null; ) {
                    h = N;
                    var m = h.sibling, g = h.return;
                    if (uc(h), h === c) {
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
                    var j = w.sibling;
                    w.sibling = null, w = j;
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
                Ht(9, o, o.return);
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
                  Cl(9, u);
              }
            } catch (E) {
              Y(u, u.return, E);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, N = v;
              break e;
            }
            N = u.return;
          }
        }
        if (F = l, Nn(), Ke && typeof Ke.onPostCommitFiberRoot == "function") try {
          Ke.onPostCommitFiberRoot(yl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = t, Te.transition = n;
    }
  }
  return !1;
}
function ia(e, n, t) {
  n = ht(t, n), n = Zs(e, n, 1), e = gn(e, n, 1), n = fe(), e !== null && (cr(e, 1, n), ve(e, n));
}
function Y(e, n, t) {
  if (e.tag === 3) ia(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      ia(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vn === null || !vn.has(r))) {
        e = ht(t, e), e = Js(n, e, 1), n = gn(n, e, 1), e = fe(), n !== null && (cr(n, 1, e), ve(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Gd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = fe(), e.pingedLanes |= e.suspendedLanes & t, te === e && (le & t) === t && (ee === 4 || ee === 3 && (le & 130023424) === le && 500 > X() - Wi ? Mn(e, 0) : Bi |= t), ve(e, n);
}
function gc(e, n) {
  n === 0 && (e.mode & 1 ? (n = xr, xr <<= 1, !(xr & 130023424) && (xr = 4194304)) : n = 1);
  var t = fe();
  e = en(e, n), e !== null && (cr(e, n, t), ve(e, t));
}
function Yd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), gc(e, t);
}
function Xd(e, n) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(n), gc(e, t);
}
var vc;
vc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || he.current) ye = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return ye = !1, Fd(e, n, t);
    ye = !!(e.flags & 131072);
  }
  else ye = !1, W && n.flags & 1048576 && ws(n, tl, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Ar(e, n), e = n.pendingProps;
      var l = dt(n, se.current);
      st(n, t), l = Ii(null, n, r, e, l, t);
      var o = Fi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ge(r) ? (o = !0, el(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ji(n), l.updater = wl, n.stateNode = l, l._reactInternals = n, Wo(n, r, e, t), n = Ko(null, n, r, !0, o, t)) : (n.tag = 0, W && o && Ci(n), ce(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Ar(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Jd(r), e = Ie(r, e), l) {
          case 0:
            n = Vo(null, n, r, e, t);
            break e;
          case 1:
            n = Zu(null, n, r, e, t);
            break e;
          case 11:
            n = Yu(null, n, r, e, t);
            break e;
          case 14:
            n = Xu(null, n, r, Ie(r.type, e), t);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ie(r, l), Vo(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ie(r, l), Zu(e, n, r, l, t);
    case 3:
      e: {
        if (nc(n), e === null) throw Error(x(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, zs(e, n), ol(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = ht(Error(x(423)), n), n = Ju(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = ht(Error(x(424)), n), n = Ju(e, n, r, t, l);
          break e;
        } else for (Ce = hn(n.stateNode.containerInfo.firstChild), Ee = n, W = !0, Oe = null, t = _s(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (pt(), r === l) {
            n = nn(e, n, t);
            break e;
          }
          ce(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return Rs(n), e === null && Ao(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Mo(r, l) ? i = null : o !== null && Mo(r, o) && (n.flags |= 32), ec(e, n), ce(e, n, i, t), n.child;
    case 6:
      return e === null && Ao(n), null;
    case 13:
      return tc(e, n, t);
    case 4:
      return Ti(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = mt(n, null, r, t) : ce(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ie(r, l), Yu(e, n, r, l, t);
    case 7:
      return ce(e, n, n.pendingProps, t), n.child;
    case 8:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, U(rl, r._currentValue), r._currentValue = i, o !== null) if ($e(o.value, i)) {
          if (o.children === l.children && !he.current) {
            n = nn(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = Je(-1, t & -t), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), $o(
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
            if (i = o.return, i === null) throw Error(x(341));
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), $o(i, t, n), i = o.sibling;
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
        ce(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, st(n, t), l = De(l), r = r(l), n.flags |= 1, ce(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Ie(r, n.pendingProps), l = Ie(r.type, l), Xu(e, n, r, l, t);
    case 15:
      return qs(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Ie(r, l), Ar(e, n), n.tag = 1, ge(r) ? (e = !0, el(n)) : e = !1, st(n, t), Xs(n, r, l), Wo(n, r, l, t), Ko(null, n, r, !0, e, t);
    case 19:
      return rc(e, n, t);
    case 22:
      return bs(e, n, t);
  }
  throw Error(x(156, n.tag));
};
function xc(e, n) {
  return Qa(e, n);
}
function Zd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function je(e, n, t, r) {
  return new Zd(e, n, t, r);
}
function Qi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Jd(e) {
  if (typeof e == "function") return Qi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fi) return 11;
    if (e === di) return 14;
  }
  return 2;
}
function Sn(e, n) {
  var t = e.alternate;
  return t === null ? (t = je(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Wr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Qi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Yn:
      return In(t.children, l, o, n);
    case ci:
      i = 8, l |= 8;
      break;
    case fo:
      return e = je(12, t, n, l | 2), e.elementType = fo, e.lanes = o, e;
    case po:
      return e = je(13, t, n, l), e.elementType = po, e.lanes = o, e;
    case mo:
      return e = je(19, t, n, l), e.elementType = mo, e.lanes = o, e;
    case Ra:
      return Nl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Pa:
          i = 10;
          break e;
        case za:
          i = 9;
          break e;
        case fi:
          i = 11;
          break e;
        case di:
          i = 14;
          break e;
        case un:
          i = 16, r = null;
          break e;
      }
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return n = je(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function In(e, n, t, r) {
  return e = je(7, e, r, n), e.lanes = t, e;
}
function Nl(e, n, t, r) {
  return e = je(22, e, r, n), e.elementType = Ra, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function ro(e, n, t) {
  return e = je(6, e, null, n), e.lanes = t, e;
}
function lo(e, n, t) {
  return n = je(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function qd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Gi(e, n, t, r, l, o, i, u, a) {
  return e = new qd(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = je(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ji(o), e;
}
function bd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Gn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function Sc(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (Wn(e) !== e || e.tag !== 1) throw Error(x(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (ge(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (ge(t)) return Ss(e, t, n);
  }
  return n;
}
function kc(e, n, t, r, l, o, i, u, a) {
  return e = Gi(t, r, !0, e, l, o, i, u, a), e.context = Sc(null), t = e.current, r = fe(), l = xn(t), o = Je(r, l), o.callback = n ?? null, gn(t, o, l), e.current.lanes = l, cr(e, l, r), ve(e, r), e;
}
function _l(e, n, t, r) {
  var l = n.current, o = fe(), i = xn(l);
  return t = Sc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Je(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = gn(l, n, i), e !== null && (Ae(e, l, i, o), Fr(e, l, i)), i;
}
function pl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ua(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Yi(e, n) {
  ua(e, n), (e = e.alternate) && ua(e, n);
}
function ep() {
  return null;
}
var wc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xi(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Xi.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(x(409));
  _l(e, n, null, null);
};
Pl.prototype.unmount = Xi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    $n(function() {
      _l(null, e, null, null);
    }), n[be] = null;
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = ba();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < sn.length && n !== 0 && n < sn[t].priority; t++) ;
    sn.splice(t, 0, e), t === 0 && ns(e);
  }
};
function Zi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function aa() {
}
function np(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = pl(i);
        o.call(c);
      };
    }
    var i = kc(n, r, e, 0, null, !1, !1, "", aa);
    return e._reactRootContainer = i, e[be] = i.current, er(e.nodeType === 8 ? e.parentNode : e), $n(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = pl(a);
      u.call(c);
    };
  }
  var a = Gi(e, 0, !1, null, null, !1, !1, "", aa);
  return e._reactRootContainer = a, e[be] = a.current, er(e.nodeType === 8 ? e.parentNode : e), $n(function() {
    _l(n, a, t, r);
  }), a;
}
function Rl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = pl(i);
        u.call(a);
      };
    }
    _l(n, i, e, l);
  } else i = np(t, n, e, l, r);
  return pl(i);
}
Ja = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = It(n.pendingLanes);
        t !== 0 && (yi(n, t | 1), ve(n, X()), !(F & 6) && (gt = X() + 500, Nn()));
      }
      break;
    case 13:
      $n(function() {
        var r = en(e, 1);
        if (r !== null) {
          var l = fe();
          Ae(r, e, 1, l);
        }
      }), Yi(e, 1);
  }
};
hi = function(e) {
  if (e.tag === 13) {
    var n = en(e, 134217728);
    if (n !== null) {
      var t = fe();
      Ae(n, e, 134217728, t);
    }
    Yi(e, 134217728);
  }
};
qa = function(e) {
  if (e.tag === 13) {
    var n = xn(e), t = en(e, n);
    if (t !== null) {
      var r = fe();
      Ae(t, e, n, r);
    }
    Yi(e, n);
  }
};
ba = function() {
  return O;
};
es = function(e, n) {
  var t = O;
  try {
    return O = e, n();
  } finally {
    O = t;
  }
};
Eo = function(e, n, t) {
  switch (n) {
    case "input":
      if (go(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = xl(r);
            if (!l) throw Error(x(90));
            Ta(r), go(r, l);
          }
        }
      }
      break;
    case "textarea":
      La(e, t);
      break;
    case "select":
      n = t.value, n != null && ot(e, !!t.multiple, n, !1);
  }
};
$a = Hi;
Ba = $n;
var tp = { usingClientEntryPoint: !1, Events: [dr, qn, xl, Ua, Aa, Hi] }, Dt = { findFiberByHostInstance: Tn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rp = { bundleType: Dt.bundleType, version: Dt.version, rendererPackageName: Dt.rendererPackageName, rendererConfig: Dt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: tn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Va(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Dt.findFiberByHostInstance || ep, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber) try {
    yl = jr.inject(rp), Ke = jr;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
_e.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zi(n)) throw Error(x(200));
  return bd(e, n, null, t);
};
_e.createRoot = function(e, n) {
  if (!Zi(e)) throw Error(x(299));
  var t = !1, r = "", l = wc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Gi(e, 1, !1, null, null, t, !1, r, l), e[be] = n.current, er(e.nodeType === 8 ? e.parentNode : e), new Xi(n);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Va(n), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return $n(e);
};
_e.hydrate = function(e, n, t) {
  if (!zl(n)) throw Error(x(200));
  return Rl(null, e, n, !0, t);
};
_e.hydrateRoot = function(e, n, t) {
  if (!Zi(e)) throw Error(x(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = wc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = kc(n, null, e, 1, t ?? null, l, !1, o, i), e[be] = n.current, er(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new Pl(n);
};
_e.render = function(e, n, t) {
  if (!zl(n)) throw Error(x(200));
  return Rl(null, e, n, !1, t);
};
_e.unmountComponentAtNode = function(e) {
  if (!zl(e)) throw Error(x(40));
  return e._reactRootContainer ? ($n(function() {
    Rl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[be] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = Hi;
_e.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!zl(t)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Rl(e, n, t, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Cc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cc);
    } catch (e) {
      console.error(e);
    }
}
Cc(), Ca.exports = _e;
var lp = Ca.exports, sa = lp;
so.createRoot = sa.createRoot, so.hydrateRoot = sa.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = (e) => {
  const n = ip(e);
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
const up = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
}, ap = M.createContext({}), sp = () => M.useContext(ap), cp = M.forwardRef(
  ({ color: e, size: n, strokeWidth: t, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: y = !1,
      color: m = "currentColor",
      className: g = ""
    } = sp() ?? {}, k = r ?? y ? Number(t ?? h) * 24 / Number(n ?? c) : t ?? h;
    return M.createElement(
      "svg",
      {
        ref: a,
        ...oo,
        width: n ?? c ?? oo.width,
        height: n ?? c ?? oo.height,
        stroke: e ?? m,
        strokeWidth: k,
        className: Ec("lucide", g, l),
        ...!o && !up(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([w, j]) => M.createElement(w, j)),
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
const xe = (e, n) => {
  const t = M.forwardRef(
    ({ className: r, ...l }, o) => M.createElement(cp, {
      ref: o,
      iconNode: n,
      className: Ec(
        `lucide-${op(ca(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return t.displayName = ca(e), t;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], dp = xe("arrow-right", fp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], fa = xe("arrow-up-down", pp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [
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
], yp = xe("calculator", mp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], gp = xe("check", hp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], xp = xe("chevron-down", vp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], kp = xe("globe", Sp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Cp = xe("plus", wp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Np = xe("refresh-cw", Ep);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Pp = xe("rotate-ccw-clock", _p);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Rp = xe("search", zp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Tp = xe("settings-2", jp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = [
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
], Lp = xe("sparkles", Dp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Ip = xe("trash-2", Mp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Op = xe("x", Fp), Hr = {
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
  const [r, l] = M.useState(!1), [o, i] = M.useState(""), u = M.useRef(null), [a, c] = M.useState(!1);
  M.useEffect(() => {
    const g = (k) => {
      u.current && !u.current.contains(k.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), M.useEffect(() => {
    r && u.current && (u.current.getBoundingClientRect().right > window.innerWidth / 2 ? c(!0) : c(!1));
  }, [r]);
  const h = e.filter((g) => {
    const k = Hr[g] || { name: g }, w = o.toLowerCase();
    return g.toLowerCase().includes(w) || k.name.toLowerCase().includes(w);
  }), y = Hr[n] || { name: n, symbol: n }, m = n === "EUR" ? "EU" : n === "BTC" ? "⚡" : n.substring(0, 2);
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
              /* @__PURE__ */ p.jsx(xp, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
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
                /* @__PURE__ */ p.jsx(Rp, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
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
                const k = Hr[g] || { name: g, symbol: g }, w = g === "EUR" ? "EU" : g === "BTC" ? "⚡" : g.substring(0, 2), j = g === n;
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
                      background: j ? "rgba(168, 85, 247, 0.15)" : "transparent",
                      borderLeft: j ? "2px solid #a855f7" : "2px solid transparent",
                      transition: "all 0.15s ease"
                    },
                    onMouseEnter: (f) => !j && (f.currentTarget.style.background = "rgba(255, 255, 255, 0.04)"),
                    onMouseLeave: (f) => !j && (f.currentTarget.style.background = "transparent"),
                    children: [
                      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ p.jsx("div", { style: {
                          width: "22px",
                          height: "22px",
                          borderRadius: "5px",
                          background: j ? "#a855f7" : "#1c1c21",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          fontWeight: "800",
                          color: j ? "#ffffff" : "#9ca3af"
                        }, children: w }),
                        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                          /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 600, color: j ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: g }),
                          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: k.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: k.symbol }),
                        j && /* @__PURE__ */ p.jsx(gp, { size: 14, color: "#a855f7" })
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
}, uo = "datacore_currency_history_v2", ao = "datacore_currency_chips_v2", Up = {
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
}, Ap = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL"], $p = ({ children: e }) => /* @__PURE__ */ p.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function Bp() {
  const [e, n] = M.useState("calculator"), [t, r] = M.useState(Up), [l, o] = M.useState("USD"), [i, u] = M.useState("USD"), [a, c] = M.useState("EUR"), [h, y] = M.useState("100"), [m, g] = M.useState("100 + 50"), [k, w] = M.useState("50"), [j, f] = M.useState(Ap), [s, d] = M.useState(!1), [v, E] = M.useState("VND"), [_, P] = M.useState(!1), [z, H] = M.useState("50"), [D, Se] = M.useState("EUR"), [rn, _n] = M.useState("+"), [jl, Tl] = M.useState(null), [Pn, zn] = M.useState(!0), [C, R] = M.useState(!1), [T, A] = M.useState([]), Z = M.useRef(null);
  M.useEffect(() => {
    try {
      const S = localStorage.getItem(uo);
      S && A(JSON.parse(S));
      const L = localStorage.getItem(ao);
      L && f(JSON.parse(L));
    } catch {
    }
  }, []);
  const Be = ((S) => {
    try {
      if (!S || !S.trim()) return 0;
      const L = S.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!L) return 0;
      const V = Function(`"use strict"; return (${L})`)();
      return typeof V == "number" && !isNaN(V) && isFinite(V) ? V : 0;
    } catch {
      return 0;
    }
  })(m), Hn = Be.toFixed(2), Ji = (() => {
    const S = parseFloat(h) || 0, L = t[i] || 1, V = t[a] || 1;
    return S / L * V;
  })().toFixed(2), Nc = (S) => {
    const L = t[l] || 1, V = t[S] || 1;
    return (Be / L * V).toFixed(2);
  }, _c = (S) => {
    const L = parseFloat(h) || 0, V = t[i] || 1, ke = t[S] || 1;
    return (L / V * ke).toFixed(2);
  }, qi = async () => {
    R(!0);
    try {
      const S = await fetch(`https://api.exchangerate-api.com/v4/latest/${l}`);
      if (S.ok) {
        const L = await S.json();
        r(L.rates), Tl(/* @__PURE__ */ new Date()), zn(!0);
      } else
        zn(!1);
    } catch {
      zn(!1);
    } finally {
      R(!1);
    }
  };
  M.useEffect(() => {
    qi();
  }, [l]);
  const J = (S) => {
    if (S === "AC")
      g("");
    else if (S === "DEL")
      g((L) => L.length > 0 ? L.slice(0, -1) : "");
    else if (S === "=") {
      const L = Hn;
      g(L);
      const V = {
        id: Date.now().toString(),
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        from: l,
        expr: m,
        result: L
      };
      A((ke) => {
        const Vn = [V, ...ke.slice(0, 19)];
        try {
          localStorage.setItem(uo, JSON.stringify(Vn));
        } catch {
        }
        return Vn;
      });
    } else
      g((L) => L + S);
  }, bi = (S, L, V) => {
    const ke = parseFloat(L) || 0;
    if (ke <= 0) return;
    const Vn = t[V] || 1, Kn = t[l] || 1, Dl = (ke / Vn * Kn).toFixed(2);
    g((jc) => {
      const Et = jc.trim();
      return !Et || Et === "0" ? Dl : ["+", "-", "*", "/", "×", "÷"].some((Tc) => Et.endsWith(Tc)) ? `${Et.slice(0, -1).trim()} ${S} ${Dl}` : `${Et} ${S} ${Dl}`;
    }), P(!1);
  }, Pc = (S) => {
    if (!j.includes(S)) {
      const L = [...j, S];
      f(L);
      try {
        localStorage.setItem(ao, JSON.stringify(L));
      } catch {
      }
    }
    d(!1);
  }, zc = (S, L) => {
    S.stopPropagation();
    const V = j.filter((ke) => ke !== L);
    f(V);
    try {
      localStorage.setItem(ao, JSON.stringify(V));
    } catch {
    }
  }, Rc = () => {
    const S = parseFloat(h) || 0, L = t[l] || 1, ke = (S / (t[i] || 1) * L).toFixed(2);
    g((Vn) => {
      const Kn = Vn.trim();
      return !Kn || Kn === "0" ? ke : `${Kn} + ${ke}`;
    }), n("calculator");
  }, Ct = Object.keys(t).sort(), eu = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"];
  return /* @__PURE__ */ p.jsx($p, { children: /* @__PURE__ */ p.jsx("div", { className: "currency-app", ref: Z, style: { position: "relative" }, children: /* @__PURE__ */ p.jsxs("div", { className: "studio-card", children: [
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
        }, children: /* @__PURE__ */ p.jsx(Lp, { size: 14, color: "#fafafa" }) }),
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "1rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }, children: "Currency Studio" })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: Pn ? "#34d399" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: Pn ? "#10b981" : "#f59e0b"
        } }),
        /* @__PURE__ */ p.jsx("span", { children: Pn ? "Online" : "Offline" })
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
            /* @__PURE__ */ p.jsx(yp, { size: 14 }),
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
            /* @__PURE__ */ p.jsx(fa, { size: 14 }),
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
            options: Ct,
            value: l,
            onChange: o
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "calc-screen", children: [
        /* @__PURE__ */ p.jsx("div", { className: "calc-expr", children: m || "0" }),
        /* @__PURE__ */ p.jsxs("div", { className: "calc-result", children: [
          Hn,
          " ",
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.9rem", color: "#71717a", fontWeight: "600" }, children: l })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { style: {
          display: "flex",
          gap: "6px",
          overflowX: "auto",
          width: "100%",
          paddingTop: "8px",
          borderTop: "1px solid #1c1c21",
          scrollbarWidth: "none"
        }, children: [
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.6rem", color: "#71717a", fontWeight: "800", alignSelf: "center", whiteSpace: "nowrap", textTransform: "uppercase" }, children: "Equivalents:" }),
          eu.filter((S) => S !== l).map((S) => {
            const L = Nc(S);
            return /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => o(S),
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
                  gap: "4px"
                },
                title: `Click to set ${S} as primary base currency`,
                children: [
                  /* @__PURE__ */ p.jsx("span", { style: { color: "#ffffff", fontWeight: "700" }, children: S }),
                  /* @__PURE__ */ p.jsx("span", { style: { color: "#a1a1aa" }, children: L })
                ]
              },
              S
            );
          })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px", backgroundColor: "#09090b", padding: "10px 12px", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }, children: [
          /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "800", textTransform: "uppercase" }, children: "Variable Amount:" }),
            /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "3px" }, children: ["10", "50", "100", "500"].map((S) => /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => w(S),
                style: {
                  padding: "2px 6px",
                  borderRadius: "4px",
                  backgroundColor: k === S ? "#27272a" : "transparent",
                  color: k === S ? "#ffffff" : "#71717a",
                  border: "1px solid #27272a",
                  fontSize: "0.65rem",
                  fontWeight: "700",
                  cursor: "pointer"
                },
                children: S
              },
              S
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
                  /* @__PURE__ */ p.jsx(Cp, { size: 11 }),
                  " Add Currency"
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => P(!_),
                style: { fontSize: "0.65rem", color: "#a1a1aa", backgroundColor: "transparent", border: "1px solid #27272a", padding: "3px 8px", borderRadius: "6px", cursor: "pointer", fontWeight: "600", display: "flex", alignItems: "center", gap: "3px" },
                children: [
                  /* @__PURE__ */ p.jsx(Tp, { size: 11 }),
                  " Math Injector"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px", scrollbarWidth: "none" }, children: j.map((S) => /* @__PURE__ */ p.jsxs(
          "div",
          {
            onClick: () => bi("+", k, S),
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
                S
              ] }),
              j.length > 3 && /* @__PURE__ */ p.jsx(
                Op,
                {
                  size: 11,
                  style: { opacity: 0.5, cursor: "pointer" },
                  onClick: (L) => zc(L, S)
                }
              )
            ]
          },
          S
        )) }),
        s && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "600" }, children: "Select Currency:" }),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: v,
              onChange: (S) => E(S.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 8px", color: "#ffffff", fontSize: "0.75rem", outline: "none" },
              children: Ct.map((S) => /* @__PURE__ */ p.jsxs("option", { value: S, children: [
                S,
                " - ",
                (Hr[S] || {}).name || S
              ] }, S))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => Pc(v),
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
        _ && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p.jsxs(
            "select",
            {
              value: rn,
              onChange: (S) => _n(S.target.value),
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
              value: z,
              onChange: (S) => H(S.target.value),
              placeholder: "Amount",
              style: { width: "65px", background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" }
            }
          ),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: D,
              onChange: (S) => Se(S.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" },
              children: Ct.map((S) => /* @__PURE__ */ p.jsx("option", { value: S, children: S }, S))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => bi(rn, z, D),
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
              options: Ct,
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
              onChange: (S) => y(S.target.value),
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
            const S = i;
            u(a), c(S);
          },
          title: "Swap Pair",
          children: /* @__PURE__ */ p.jsx(fa, { size: 18 })
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Receive:" }),
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ p.jsx(
            io,
            {
              options: Ct,
              value: a,
              onChange: c
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: Ji,
              readOnly: !0,
              style: { color: "#ffffff", fontSize: "1.4rem", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { backgroundColor: "#09090b", padding: "12px", borderRadius: "12px", border: "1px solid #27272a", display: "flex", flexDirection: "column", gap: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "5px" }, children: [
          /* @__PURE__ */ p.jsx(kp, { size: 12 }),
          " Live Pair Equivalents (",
          h,
          " ",
          i,
          "):"
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }, children: eu.filter((S) => S !== i).map((S) => {
          const L = _c(S), V = S === a;
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              onClick: () => c(S),
              style: {
                backgroundColor: V ? "#27272a" : "#121215",
                border: V ? "1px solid #3f3f46" : "1px solid #1c1c21",
                borderRadius: "8px",
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.15s ease"
              },
              children: [
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: V ? "#ffffff" : "#a1a1aa", fontWeight: "800" }, children: S }),
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: "#ffffff", fontWeight: "700", fontFamily: "'JetBrains Mono', monospace" }, children: L })
              ]
            },
            S
          );
        }) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", width: "100%", marginTop: "2px" }, children: [
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: Rc,
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
              /* @__PURE__ */ p.jsx(dp, { size: 15 }),
              " Push Result (",
              Ji,
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
            onClick: qi,
            disabled: C,
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
              /* @__PURE__ */ p.jsx(Np, { size: 14, className: C ? "animate-spin" : "" }),
              C ? "Syncing..." : "Sync Rates"
            ]
          }
        )
      ] })
    ] }),
    T.length > 0 && /* @__PURE__ */ p.jsxs("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ p.jsx(Pp, { size: 13 }),
          "Calculation History Tape"
        ] }),
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              A([]), localStorage.removeItem(uo);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ p.jsx(Ip, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: T.map((S) => /* @__PURE__ */ p.jsxs(
        "div",
        {
          onClick: () => {
            g(S.expr), n("calculator");
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
              /* @__PURE__ */ p.jsx("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: S.expr }),
              " = ",
              /* @__PURE__ */ p.jsxs("span", { style: { color: "#ffffff", fontWeight: "700" }, children: [
                S.result,
                " ",
                S.from
              ] })
            ] }),
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: S.time })
          ]
        },
        S.id
      )) })
    ] })
  ] }) }) });
}
function Hp(e, n) {
  if (!e) return () => {
  };
  const t = so.createRoot(e);
  return t.render(/* @__PURE__ */ p.jsx(Bp, { platformAPI: n })), () => {
    try {
      t.unmount();
    } catch {
    }
  };
}
export {
  $p as SafeAgentLayer,
  Bp as default,
  Hp as mount_app
};
