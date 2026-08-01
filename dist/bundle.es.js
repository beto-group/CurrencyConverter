(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;min-height:100vh;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,0px) + 52px) 12px calc(env(safe-area-inset-bottom,0px) + 24px) 12px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.studio-card{background:#121215;border:1px solid #27272a;border-radius:20px;padding:16px;width:100%;max-width:100%;box-shadow:0 20px 40px #0009;display:flex;flex-direction:column;gap:14px;position:relative;box-sizing:border-box;margin:auto 0;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:24px}.studio-card{max-width:500px;padding:24px;gap:18px}}.studio-header{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box}.tab-switcher{display:flex;background:#09090b;padding:3px;border-radius:12px;border:1px solid #27272a;width:100%;gap:4px}.tab-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 12px;border:none;border-radius:9px;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s ease;color:#71717a;background:transparent}.tab-btn.active{background:#27272a;color:#fff;box-shadow:0 2px 8px #0006}.calc-screen{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:flex-end;gap:6px;box-shadow:inset 0 2px 6px #000c;width:100%;box-sizing:border-box}.calc-expr{font-size:clamp(.85rem,3.5vw,1.05rem);color:#a1a1aa;font-family:JetBrains Mono,monospace;word-break:break-all;min-height:24px;width:100%;text-align:right}.calc-result{font-size:clamp(1.4rem,6vw,2.2rem);font-weight:800;color:#4ade80;font-family:JetBrains Mono,monospace;overflow-x:auto;white-space:nowrap;line-height:1.1;width:100%;text-align:right;scrollbar-width:none}.calc-result::-webkit-scrollbar{display:none}.calc-keypad{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;width:100%;box-sizing:border-box}.key-btn{padding:14px 10px;border-radius:10px;border:1px solid rgba(255,255,255,.05);background:#18181b;color:#fafafa;font-size:clamp(1rem,4vw,1.25rem);font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s ease;-webkit-user-select:none;user-select:none;box-shadow:0 2px 6px #0000004d}.key-btn:active{transform:scale(.95);background:#27272a}.key-btn.op{background:#a855f726;color:#c084fc;border-color:#a855f74d;font-weight:800}.key-btn.op:active{background:#a855f759}.key-btn.action{background:#ef444426;color:#f87171;font-size:.85rem;font-weight:700}.key-btn.equal{background:linear-gradient(135deg,#a855f7,#7e22ce);color:#fff;font-weight:800;box-shadow:0 4px 14px #a855f766}.pair-box{background:#09090b;border:1px solid #27272a;border-radius:14px;padding:14px;display:flex;flex-direction:column;gap:8px;width:100%;box-sizing:border-box}.swap-circle{background:#18181b;border:1px solid #27272a;color:#a1a1aa;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-6px 0;z-index:2;box-shadow:0 4px 12px #00000080}.swap-circle:hover{background:#27272a;color:#fff;transform:rotate(180deg)}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var ia = { exports: {} }, dl = {}, ua = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur = Symbol.for("react.element"), kc = Symbol.for("react.portal"), wc = Symbol.for("react.fragment"), Cc = Symbol.for("react.strict_mode"), Ec = Symbol.for("react.profiler"), Nc = Symbol.for("react.provider"), _c = Symbol.for("react.context"), Pc = Symbol.for("react.forward_ref"), zc = Symbol.for("react.suspense"), Rc = Symbol.for("react.memo"), jc = Symbol.for("react.lazy"), Zi = Symbol.iterator;
function Tc(e) {
  return e === null || typeof e != "object" ? null : (e = Zi && e[Zi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var aa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sa = Object.assign, ca = {};
function xt(e, n, t) {
  this.props = e, this.context = n, this.refs = ca, this.updater = t || aa;
}
xt.prototype.isReactComponent = {};
xt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
xt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fa() {
}
fa.prototype = xt.prototype;
function bo(e, n, t) {
  this.props = e, this.context = n, this.refs = ca, this.updater = t || aa;
}
var ei = bo.prototype = new fa();
ei.constructor = bo;
sa(ei, xt.prototype);
ei.isPureReactComponent = !0;
var Xi = Array.isArray, da = Object.prototype.hasOwnProperty, ni = { current: null }, pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ma(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) da.call(n, r) && !pa.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: ur, type: e, key: o, ref: i, props: l, _owner: ni.current };
}
function Dc(e, n) {
  return { $$typeof: ur, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function ti(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function Lc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Ji = /\/+/g;
function Rl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Lc("" + e.key) : n.toString(36);
}
function jr(e, n, t, r, l) {
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
        case ur:
        case kc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Rl(i, 0) : r, Xi(l) ? (t = "", e != null && (t = e.replace(Ji, "$&/") + "/"), jr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (ti(l) && (l = Dc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ji, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Xi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Rl(o, u);
    i += jr(o, n, t, a, l);
  }
  else if (a = Tc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Rl(o, u++), i += jr(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function pr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return jr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Mc(e) {
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
var de = { current: null }, Tr = { transition: null }, Fc = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: ni };
function ya() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: pr, forEach: function(e, n, t) {
  pr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return pr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return pr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!ti(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = xt;
L.Fragment = wc;
L.Profiler = Ec;
L.PureComponent = bo;
L.StrictMode = Cc;
L.Suspense = zc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc;
L.act = ya;
L.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sa({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = ni.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) da.call(n, a) && !pa.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: _c, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Nc, _context: e }, e.Consumer = e;
};
L.createElement = ma;
L.createFactory = function(e) {
  var n = ma.bind(null, e);
  return n.type = e, n;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Pc, render: e };
};
L.isValidElement = ti;
L.lazy = function(e) {
  return { $$typeof: jc, _payload: { _status: -1, _result: e }, _init: Mc };
};
L.memo = function(e, n) {
  return { $$typeof: Rc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function(e) {
  var n = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = n;
  }
};
L.unstable_act = ya;
L.useCallback = function(e, n) {
  return de.current.useCallback(e, n);
};
L.useContext = function(e) {
  return de.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return de.current.useDeferredValue(e);
};
L.useEffect = function(e, n) {
  return de.current.useEffect(e, n);
};
L.useId = function() {
  return de.current.useId();
};
L.useImperativeHandle = function(e, n, t) {
  return de.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function(e, n) {
  return de.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function(e, n) {
  return de.current.useLayoutEffect(e, n);
};
L.useMemo = function(e, n) {
  return de.current.useMemo(e, n);
};
L.useReducer = function(e, n, t) {
  return de.current.useReducer(e, n, t);
};
L.useRef = function(e) {
  return de.current.useRef(e);
};
L.useState = function(e) {
  return de.current.useState(e);
};
L.useSyncExternalStore = function(e, n, t) {
  return de.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function() {
  return de.current.useTransition();
};
L.version = "18.3.1";
ua.exports = L;
var M = ua.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic = M, Oc = Symbol.for("react.element"), $c = Symbol.for("react.fragment"), Uc = Object.prototype.hasOwnProperty, Ac = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ha(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Uc.call(n, r) && !Bc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Oc, type: e, key: o, ref: i, props: l, _owner: Ac.current };
}
dl.Fragment = $c;
dl.jsx = ha;
dl.jsxs = ha;
ia.exports = dl;
var p = ia.exports, oo = {}, ga = { exports: {} }, Ee = {}, va = { exports: {} }, xa = {};
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
  function n(N, R) {
    var j = N.length;
    N.push(R);
    e: for (; 0 < j; ) {
      var H = j - 1 >>> 1, X = N[H];
      if (0 < l(X, R)) N[H] = R, N[j] = X, j = H;
      else break e;
    }
  }
  function t(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var R = N[0], j = N.pop();
    if (j !== R) {
      N[0] = j;
      e: for (var H = 0, X = N.length, Pn = X >>> 1; H < Pn; ) {
        var O = 2 * (H + 1) - 1, Hn = N[O], Ge = O + 1, Ye = N[Ge];
        if (0 > l(Hn, j)) Ge < X && 0 > l(Ye, Hn) ? (N[H] = Ye, N[Ge] = j, H = Ge) : (N[H] = Hn, N[O] = j, H = O);
        else if (Ge < X && 0 > l(Ye, j)) N[H] = Ye, N[Ge] = j, H = Ge;
        else break e;
      }
    }
    return R;
  }
  function l(N, R) {
    var j = N.sortIndex - R.sortIndex;
    return j !== 0 ? j : N.id - R.id;
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
  var a = [], c = [], h = 1, y = null, m = 3, g = !1, S = !1, k = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var R = t(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= N) r(c), R.sortIndex = R.expirationTime, n(a, R);
      else break;
      R = t(c);
    }
  }
  function v(N) {
    if (k = !1, d(N), !S) if (t(a) !== null) S = !0, Wn(C);
    else {
      var R = t(c);
      R !== null && Vn(v, R.startTime - N);
    }
  }
  function C(N, R) {
    S = !1, k && (k = !1, f(z), z = -1), g = !0;
    var j = m;
    try {
      for (d(R), y = t(a); y !== null && (!(y.expirationTime > R) || N && !me()); ) {
        var H = y.callback;
        if (typeof H == "function") {
          y.callback = null, m = y.priorityLevel;
          var X = H(y.expirationTime <= R);
          R = e.unstable_now(), typeof X == "function" ? y.callback = X : y === t(a) && r(a), d(R);
        } else r(a);
        y = t(a);
      }
      if (y !== null) var Pn = !0;
      else {
        var O = t(c);
        O !== null && Vn(v, O.startTime - R), Pn = !1;
      }
      return Pn;
    } finally {
      y = null, m = j, g = !1;
    }
  }
  var P = !1, _ = null, z = -1, A = 5, T = -1;
  function me() {
    return !(e.unstable_now() - T < A);
  }
  function on() {
    if (_ !== null) {
      var N = e.unstable_now();
      T = N;
      var R = !0;
      try {
        R = _(!0, N);
      } finally {
        R ? Qe() : (P = !1, _ = null);
      }
    } else P = !1;
  }
  var Qe;
  if (typeof s == "function") Qe = function() {
    s(on);
  };
  else if (typeof MessageChannel < "u") {
    var dr = new MessageChannel(), Gi = dr.port2;
    dr.port1.onmessage = on, Qe = function() {
      Gi.postMessage(null);
    };
  } else Qe = function() {
    D(on, 0);
  };
  function Wn(N) {
    _ = N, P || (P = !0, Qe());
  }
  function Vn(N, R) {
    z = D(function() {
      N(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    S || g || (S = !0, Wn(C));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(N) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = m;
    }
    var j = m;
    m = R;
    try {
      return N();
    } finally {
      m = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, R) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var j = m;
    m = N;
    try {
      return R();
    } finally {
      m = j;
    }
  }, e.unstable_scheduleCallback = function(N, R, j) {
    var H = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? H + j : H) : j = H, N) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = j + X, N = { id: h++, callback: R, priorityLevel: N, startTime: j, expirationTime: X, sortIndex: -1 }, j > H ? (N.sortIndex = j, n(c, N), t(a) === null && N === t(c) && (k ? (f(z), z = -1) : k = !0, Vn(v, j - H))) : (N.sortIndex = X, n(a, N), S || g || (S = !0, Wn(C))), N;
  }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(N) {
    var R = m;
    return function() {
      var j = m;
      m = R;
      try {
        return N.apply(this, arguments);
      } finally {
        m = j;
      }
    };
  };
})(xa);
va.exports = xa;
var Wc = va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc = M, Ce = Wc;
function x(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Sa = /* @__PURE__ */ new Set(), Ht = {};
function An(e, n) {
  dt(e, n), dt(e + "Capture", n);
}
function dt(e, n) {
  for (Ht[e] = n, e = 0; e < n.length; e++) Sa.add(n[e]);
}
var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), io = Object.prototype.hasOwnProperty, Hc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qi = {}, bi = {};
function Kc(e) {
  return io.call(bi, e) ? !0 : io.call(qi, e) ? !1 : Hc.test(e) ? bi[e] = !0 : (qi[e] = !0, !1);
}
function Qc(e, n, t, r) {
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
function Gc(e, n, t, r) {
  if (n === null || typeof n > "u" || Qc(e, n, t, r)) return !0;
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
var ri = /[\-:]([a-z])/g;
function li(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    ri,
    li
  );
  oe[n] = new pe(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(ri, li);
  oe[n] = new pe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(ri, li);
  oe[n] = new pe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oi(e, n, t, r) {
  var l = oe.hasOwnProperty(n) ? oe[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Gc(n, t, l, r) && (t = null), r || l === null ? Kc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var ln = Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mr = Symbol.for("react.element"), Yn = Symbol.for("react.portal"), Zn = Symbol.for("react.fragment"), ii = Symbol.for("react.strict_mode"), uo = Symbol.for("react.profiler"), ka = Symbol.for("react.provider"), wa = Symbol.for("react.context"), ui = Symbol.for("react.forward_ref"), ao = Symbol.for("react.suspense"), so = Symbol.for("react.suspense_list"), ai = Symbol.for("react.memo"), an = Symbol.for("react.lazy"), Ca = Symbol.for("react.offscreen"), eu = Symbol.iterator;
function Ct(e) {
  return e === null || typeof e != "object" ? null : (e = eu && e[eu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, jl;
function Tt(e) {
  if (jl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    jl = n && n[1] || "";
  }
  return `
` + jl + e;
}
var Tl = !1;
function Dl(e, n) {
  if (!e || Tl) return "";
  Tl = !0;
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
    Tl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? Tt(e) : "";
}
function Yc(e) {
  switch (e.tag) {
    case 5:
      return Tt(e.type);
    case 16:
      return Tt("Lazy");
    case 13:
      return Tt("Suspense");
    case 19:
      return Tt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Dl(e.type, !1), e;
    case 11:
      return e = Dl(e.type.render, !1), e;
    case 1:
      return e = Dl(e.type, !0), e;
    default:
      return "";
  }
}
function co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zn:
      return "Fragment";
    case Yn:
      return "Portal";
    case uo:
      return "Profiler";
    case ii:
      return "StrictMode";
    case ao:
      return "Suspense";
    case so:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case wa:
      return (e.displayName || "Context") + ".Consumer";
    case ka:
      return (e._context.displayName || "Context") + ".Provider";
    case ui:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ai:
      return n = e.displayName || null, n !== null ? n : co(e.type) || "Memo";
    case an:
      n = e._payload, e = e._init;
      try {
        return co(e(n));
      } catch {
      }
  }
  return null;
}
function Zc(e) {
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
      return co(n);
    case 8:
      return n === ii ? "StrictMode" : "Mode";
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
function wn(e) {
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
function Ea(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Xc(e) {
  var n = Ea(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function yr(e) {
  e._valueTracker || (e._valueTracker = Xc(e));
}
function Na(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = Ea(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Wr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fo(e, n) {
  var t = n.checked;
  return G({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function nu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = wn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function _a(e, n) {
  n = n.checked, n != null && oi(e, "checked", n, !1);
}
function po(e, n) {
  _a(e, n);
  var t = wn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? mo(e, n.type, t) : n.hasOwnProperty("defaultValue") && mo(e, n.type, wn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function tu(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function mo(e, n, t) {
  (n !== "number" || Wr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Dt = Array.isArray;
function it(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + wn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function yo(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(x(91));
  return G({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ru(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(x(92));
      if (Dt(t)) {
        if (1 < t.length) throw Error(x(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: wn(t) };
}
function Pa(e, n) {
  var t = wn(n.value), r = wn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function lu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function za(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ho(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? za(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hr, Ra = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (hr = hr || document.createElement("div"), hr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = hr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Kt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ft = {
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
}, Jc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ft).forEach(function(e) {
  Jc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Ft[n] = Ft[e];
  });
});
function ja(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Ft.hasOwnProperty(e) && Ft[e] ? ("" + n).trim() : n + "px";
}
function Ta(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = ja(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var qc = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function go(e, n) {
  if (n) {
    if (qc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(x(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(x(62));
  }
}
function vo(e, n) {
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
var xo = null;
function si(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var So = null, ut = null, at = null;
function ou(e) {
  if (e = cr(e)) {
    if (typeof So != "function") throw Error(x(280));
    var n = e.stateNode;
    n && (n = gl(n), So(e.stateNode, e.type, n));
  }
}
function Da(e) {
  ut ? at ? at.push(e) : at = [e] : ut = e;
}
function La() {
  if (ut) {
    var e = ut, n = at;
    if (at = ut = null, ou(e), n) for (e = 0; e < n.length; e++) ou(n[e]);
  }
}
function Ma(e, n) {
  return e(n);
}
function Fa() {
}
var Ll = !1;
function Ia(e, n, t) {
  if (Ll) return e(n, t);
  Ll = !0;
  try {
    return Ma(e, n, t);
  } finally {
    Ll = !1, (ut !== null || at !== null) && (Fa(), La());
  }
}
function Qt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = gl(t);
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
var ko = !1;
if (en) try {
  var Et = {};
  Object.defineProperty(Et, "passive", { get: function() {
    ko = !0;
  } }), window.addEventListener("test", Et, Et), window.removeEventListener("test", Et, Et);
} catch {
  ko = !1;
}
function bc(e, n, t, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var It = !1, Vr = null, Hr = !1, wo = null, ef = { onError: function(e) {
  It = !0, Vr = e;
} };
function nf(e, n, t, r, l, o, i, u, a) {
  It = !1, Vr = null, bc.apply(ef, arguments);
}
function tf(e, n, t, r, l, o, i, u, a) {
  if (nf.apply(this, arguments), It) {
    if (It) {
      var c = Vr;
      It = !1, Vr = null;
    } else throw Error(x(198));
    Hr || (Hr = !0, wo = c);
  }
}
function Bn(e) {
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
function Oa(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function iu(e) {
  if (Bn(e) !== e) throw Error(x(188));
}
function rf(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Bn(e), n === null) throw Error(x(188));
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
        if (o === t) return iu(l), e;
        if (o === r) return iu(l), n;
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
function $a(e) {
  return e = rf(e), e !== null ? Ua(e) : null;
}
function Ua(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ua(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Aa = Ce.unstable_scheduleCallback, uu = Ce.unstable_cancelCallback, lf = Ce.unstable_shouldYield, of = Ce.unstable_requestPaint, Z = Ce.unstable_now, uf = Ce.unstable_getCurrentPriorityLevel, ci = Ce.unstable_ImmediatePriority, Ba = Ce.unstable_UserBlockingPriority, Kr = Ce.unstable_NormalPriority, af = Ce.unstable_LowPriority, Wa = Ce.unstable_IdlePriority, pl = null, He = null;
function sf(e) {
  if (He && typeof He.onCommitFiberRoot == "function") try {
    He.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : df, cf = Math.log, ff = Math.LN2;
function df(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (cf(e) / ff | 0) | 0;
}
var gr = 64, vr = 4194304;
function Lt(e) {
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
function Qr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Lt(u) : (o &= i, o !== 0 && (r = Lt(o)));
  } else i = t & ~l, i !== 0 ? r = Lt(i) : o !== 0 && (r = Lt(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Oe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function pf(e, n) {
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
function mf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Oe(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = pf(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function Co(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Va() {
  var e = gr;
  return gr <<= 1, !(gr & 4194240) && (gr = 64), e;
}
function Ml(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function ar(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Oe(n), e[n] = t;
}
function yf(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Oe(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function fi(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Oe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var I = 0;
function Ha(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ka, di, Qa, Ga, Ya, Eo = !1, xr = [], mn = null, yn = null, hn = null, Gt = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), cn = [], hf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function au(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      mn = null;
      break;
    case "dragenter":
    case "dragleave":
      yn = null;
      break;
    case "mouseover":
    case "mouseout":
      hn = null;
      break;
    case "pointerover":
    case "pointerout":
      Gt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yt.delete(n.pointerId);
  }
}
function Nt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = cr(n), n !== null && di(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function gf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return mn = Nt(mn, e, n, t, r, l), !0;
    case "dragenter":
      return yn = Nt(yn, e, n, t, r, l), !0;
    case "mouseover":
      return hn = Nt(hn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gt.set(o, Nt(Gt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Yt.set(o, Nt(Yt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Za(e) {
  var n = jn(e.target);
  if (n !== null) {
    var t = Bn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Oa(t), n !== null) {
          e.blockedOn = n, Ya(e.priority, function() {
            Qa(t);
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
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = No(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      xo = r, t.target.dispatchEvent(r), xo = null;
    } else return n = cr(t), n !== null && di(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function su(e, n, t) {
  Dr(e) && t.delete(n);
}
function vf() {
  Eo = !1, mn !== null && Dr(mn) && (mn = null), yn !== null && Dr(yn) && (yn = null), hn !== null && Dr(hn) && (hn = null), Gt.forEach(su), Yt.forEach(su);
}
function _t(e, n) {
  e.blockedOn === n && (e.blockedOn = null, Eo || (Eo = !0, Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, vf)));
}
function Zt(e) {
  function n(l) {
    return _t(l, e);
  }
  if (0 < xr.length) {
    _t(xr[0], e);
    for (var t = 1; t < xr.length; t++) {
      var r = xr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (mn !== null && _t(mn, e), yn !== null && _t(yn, e), hn !== null && _t(hn, e), Gt.forEach(n), Yt.forEach(n), t = 0; t < cn.length; t++) r = cn[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && (t = cn[0], t.blockedOn === null); ) Za(t), t.blockedOn === null && cn.shift();
}
var st = ln.ReactCurrentBatchConfig, Gr = !0;
function xf(e, n, t, r) {
  var l = I, o = st.transition;
  st.transition = null;
  try {
    I = 1, pi(e, n, t, r);
  } finally {
    I = l, st.transition = o;
  }
}
function Sf(e, n, t, r) {
  var l = I, o = st.transition;
  st.transition = null;
  try {
    I = 4, pi(e, n, t, r);
  } finally {
    I = l, st.transition = o;
  }
}
function pi(e, n, t, r) {
  if (Gr) {
    var l = No(e, n, t, r);
    if (l === null) Hl(e, n, r, Yr, t), au(e, r);
    else if (gf(l, e, n, t, r)) r.stopPropagation();
    else if (au(e, r), n & 4 && -1 < hf.indexOf(e)) {
      for (; l !== null; ) {
        var o = cr(l);
        if (o !== null && Ka(o), o = No(e, n, t, r), o === null && Hl(e, n, r, Yr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, n, r, null, t);
  }
}
var Yr = null;
function No(e, n, t, r) {
  if (Yr = null, e = si(r), e = jn(e), e !== null) if (n = Bn(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Oa(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Yr = e, null;
}
function Xa(e) {
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
      switch (uf()) {
        case ci:
          return 1;
        case Ba:
          return 4;
        case Kr:
        case af:
          return 16;
        case Wa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null, mi = null, Lr = null;
function Ja() {
  if (Lr) return Lr;
  var e, n = mi, t = n.length, r, l = "value" in dn ? dn.value : dn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Lr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Mr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sr() {
  return !0;
}
function cu() {
  return !1;
}
function Ne(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Sr : cu, this.isPropagationStopped = cu, this;
  }
  return G(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Sr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Sr);
  }, persist: function() {
  }, isPersistent: Sr }), n;
}
var St = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, yi = Ne(St), sr = G({}, St, { view: 0, detail: 0 }), kf = Ne(sr), Fl, Il, Pt, ml = G({}, sr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Pt && (Pt && e.type === "mousemove" ? (Fl = e.screenX - Pt.screenX, Il = e.screenY - Pt.screenY) : Il = Fl = 0, Pt = e), Fl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Il;
} }), fu = Ne(ml), wf = G({}, ml, { dataTransfer: 0 }), Cf = Ne(wf), Ef = G({}, sr, { relatedTarget: 0 }), Ol = Ne(Ef), Nf = G({}, St, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), _f = Ne(Nf), Pf = G({}, St, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), zf = Ne(Pf), Rf = G({}, St, { data: 0 }), du = Ne(Rf), jf = {
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
}, Tf = {
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
}, Df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Df[e]) ? !!n[e] : !1;
}
function hi() {
  return Lf;
}
var Mf = G({}, sr, { key: function(e) {
  if (e.key) {
    var n = jf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hi, charCode: function(e) {
  return e.type === "keypress" ? Mr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ff = Ne(Mf), If = G({}, ml, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pu = Ne(If), Of = G({}, sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hi }), $f = Ne(Of), Uf = G({}, St, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Af = Ne(Uf), Bf = G({}, ml, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Wf = Ne(Bf), Vf = [9, 13, 27, 32], gi = en && "CompositionEvent" in window, Ot = null;
en && "documentMode" in document && (Ot = document.documentMode);
var Hf = en && "TextEvent" in window && !Ot, qa = en && (!gi || Ot && 8 < Ot && 11 >= Ot), mu = " ", yu = !1;
function ba(e, n) {
  switch (e) {
    case "keyup":
      return Vf.indexOf(n.keyCode) !== -1;
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
function es(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xn = !1;
function Kf(e, n) {
  switch (e) {
    case "compositionend":
      return es(n);
    case "keypress":
      return n.which !== 32 ? null : (yu = !0, mu);
    case "textInput":
      return e = n.data, e === mu && yu ? null : e;
    default:
      return null;
  }
}
function Qf(e, n) {
  if (Xn) return e === "compositionend" || !gi && ba(e, n) ? (e = Ja(), Lr = mi = dn = null, Xn = !1, e) : null;
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
      return qa && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Gf[e.type] : n === "textarea";
}
function ns(e, n, t, r) {
  Da(r), n = Zr(n, "onChange"), 0 < n.length && (t = new yi("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var $t = null, Xt = null;
function Yf(e) {
  ds(e, 0);
}
function yl(e) {
  var n = bn(e);
  if (Na(n)) return e;
}
function Zf(e, n) {
  if (e === "change") return n;
}
var ts = !1;
if (en) {
  var $l;
  if (en) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var gu = document.createElement("div");
      gu.setAttribute("oninput", "return;"), Ul = typeof gu.oninput == "function";
    }
    $l = Ul;
  } else $l = !1;
  ts = $l && (!document.documentMode || 9 < document.documentMode);
}
function vu() {
  $t && ($t.detachEvent("onpropertychange", rs), Xt = $t = null);
}
function rs(e) {
  if (e.propertyName === "value" && yl(Xt)) {
    var n = [];
    ns(n, Xt, e, si(e)), Ia(Yf, n);
  }
}
function Xf(e, n, t) {
  e === "focusin" ? (vu(), $t = n, Xt = t, $t.attachEvent("onpropertychange", rs)) : e === "focusout" && vu();
}
function Jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return yl(Xt);
}
function qf(e, n) {
  if (e === "click") return yl(n);
}
function bf(e, n) {
  if (e === "input" || e === "change") return yl(n);
}
function ed(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Ue = typeof Object.is == "function" ? Object.is : ed;
function Jt(e, n) {
  if (Ue(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!io.call(n, l) || !Ue(e[l], n[l])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Su(e, n) {
  var t = xu(e);
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
    t = xu(t);
  }
}
function ls(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ls(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function os() {
  for (var e = window, n = Wr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Wr(e.document);
  }
  return n;
}
function vi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function nd(e) {
  var n = os(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && ls(t.ownerDocument.documentElement, t)) {
    if (r !== null && vi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Su(t, o);
        var i = Su(
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
var td = en && "documentMode" in document && 11 >= document.documentMode, Jn = null, _o = null, Ut = null, Po = !1;
function ku(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Po || Jn == null || Jn !== Wr(r) || (r = Jn, "selectionStart" in r && vi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ut && Jt(Ut, r) || (Ut = r, r = Zr(_o, "onSelect"), 0 < r.length && (n = new yi("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Jn)));
}
function kr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var qn = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, Al = {}, is = {};
en && (is = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
function hl(e) {
  if (Al[e]) return Al[e];
  if (!qn[e]) return e;
  var n = qn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in is) return Al[e] = n[t];
  return e;
}
var us = hl("animationend"), as = hl("animationiteration"), ss = hl("animationstart"), cs = hl("transitionend"), fs = /* @__PURE__ */ new Map(), wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function En(e, n) {
  fs.set(e, n), An(n, [e]);
}
for (var Bl = 0; Bl < wu.length; Bl++) {
  var Wl = wu[Bl], rd = Wl.toLowerCase(), ld = Wl[0].toUpperCase() + Wl.slice(1);
  En(rd, "on" + ld);
}
En(us, "onAnimationEnd");
En(as, "onAnimationIteration");
En(ss, "onAnimationStart");
En("dblclick", "onDoubleClick");
En("focusin", "onFocus");
En("focusout", "onBlur");
En(cs, "onTransitionEnd");
dt("onMouseEnter", ["mouseout", "mouseover"]);
dt("onMouseLeave", ["mouseout", "mouseover"]);
dt("onPointerEnter", ["pointerout", "pointerover"]);
dt("onPointerLeave", ["pointerout", "pointerover"]);
An("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
An("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
An("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), od = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mt));
function Cu(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, tf(r, n, void 0, e), e.currentTarget = null;
}
function ds(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Cu(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        Cu(l, u, c), o = a;
      }
    }
  }
  if (Hr) throw e = wo, Hr = !1, wo = null, e;
}
function B(e, n) {
  var t = n[Do];
  t === void 0 && (t = n[Do] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (ps(n, e, 2, !1), t.add(r));
}
function Vl(e, n, t) {
  var r = 0;
  n && (r |= 4), ps(t, e, r, n);
}
var wr = "_reactListening" + Math.random().toString(36).slice(2);
function qt(e) {
  if (!e[wr]) {
    e[wr] = !0, Sa.forEach(function(t) {
      t !== "selectionchange" && (od.has(t) || Vl(t, !1, e), Vl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[wr] || (n[wr] = !0, Vl("selectionchange", !1, n));
  }
}
function ps(e, n, t, r) {
  switch (Xa(n)) {
    case 1:
      var l = xf;
      break;
    case 4:
      l = Sf;
      break;
    default:
      l = pi;
  }
  t = l.bind(null, n, t, e), l = void 0, !ko || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Hl(e, n, t, r, l) {
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
        if (i = jn(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ia(function() {
    var c = o, h = si(t), y = [];
    e: {
      var m = fs.get(e);
      if (m !== void 0) {
        var g = yi, S = e;
        switch (e) {
          case "keypress":
            if (Mr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Ff;
            break;
          case "focusin":
            S = "focus", g = Ol;
            break;
          case "focusout":
            S = "blur", g = Ol;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ol;
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
            g = fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Cf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = $f;
            break;
          case us:
          case as:
          case ss:
            g = _f;
            break;
          case cs:
            g = Af;
            break;
          case "scroll":
            g = kf;
            break;
          case "wheel":
            g = Wf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = zf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = pu;
        }
        var k = (n & 4) !== 0, D = !k && e === "scroll", f = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Qt(s, f), v != null && k.push(bt(s, v, d)))), D) break;
          s = s.return;
        }
        0 < k.length && (m = new g(m, S, null, t, h), y.push({ event: m, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && t !== xo && (S = t.relatedTarget || t.fromElement) && (jn(S) || S[nn])) break e;
        if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (S = t.relatedTarget || t.toElement, g = c, S = S ? jn(S) : null, S !== null && (D = Bn(S), S !== D || S.tag !== 5 && S.tag !== 6) && (S = null)) : (g = null, S = c), g !== S)) {
          if (k = fu, v = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (k = pu, v = "onPointerLeave", f = "onPointerEnter", s = "pointer"), D = g == null ? m : bn(g), d = S == null ? m : bn(S), m = new k(v, s + "leave", g, t, h), m.target = D, m.relatedTarget = d, v = null, jn(h) === c && (k = new k(f, s + "enter", S, t, h), k.target = d, k.relatedTarget = D, v = k), D = v, g && S) n: {
            for (k = g, f = S, s = 0, d = k; d; d = Gn(d)) s++;
            for (d = 0, v = f; v; v = Gn(v)) d++;
            for (; 0 < s - d; ) k = Gn(k), s--;
            for (; 0 < d - s; ) f = Gn(f), d--;
            for (; s--; ) {
              if (k === f || f !== null && k === f.alternate) break n;
              k = Gn(k), f = Gn(f);
            }
            k = null;
          }
          else k = null;
          g !== null && Eu(y, m, g, k, !1), S !== null && D !== null && Eu(y, D, S, k, !0);
        }
      }
      e: {
        if (m = c ? bn(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var C = Zf;
        else if (hu(m)) if (ts) C = bf;
        else {
          C = Jf;
          var P = Xf;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = qf);
        if (C && (C = C(e, c))) {
          ns(y, C, t, h);
          break e;
        }
        P && P(e, m, c), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && mo(m, "number", m.value);
      }
      switch (P = c ? bn(c) : window, e) {
        case "focusin":
          (hu(P) || P.contentEditable === "true") && (Jn = P, _o = c, Ut = null);
          break;
        case "focusout":
          Ut = _o = Jn = null;
          break;
        case "mousedown":
          Po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Po = !1, ku(y, t, h);
          break;
        case "selectionchange":
          if (td) break;
        case "keydown":
        case "keyup":
          ku(y, t, h);
      }
      var _;
      if (gi) e: {
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
      else Xn ? ba(e, t) && (z = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (z = "onCompositionStart");
      z && (qa && t.locale !== "ko" && (Xn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Xn && (_ = Ja()) : (dn = h, mi = "value" in dn ? dn.value : dn.textContent, Xn = !0)), P = Zr(c, z), 0 < P.length && (z = new du(z, e, null, t, h), y.push({ event: z, listeners: P }), _ ? z.data = _ : (_ = es(t), _ !== null && (z.data = _)))), (_ = Hf ? Kf(e, t) : Qf(e, t)) && (c = Zr(c, "onBeforeInput"), 0 < c.length && (h = new du("onBeforeInput", "beforeinput", null, t, h), y.push({ event: h, listeners: c }), h.data = _));
    }
    ds(y, n);
  });
}
function bt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Zr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Qt(e, t), o != null && r.unshift(bt(e, o, l)), o = Qt(e, n), o != null && r.push(bt(e, o, l))), e = e.return;
  }
  return r;
}
function Gn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Eu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Qt(t, o), a != null && i.unshift(bt(t, a, u))) : l || (a = Qt(t, o), a != null && i.push(bt(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var id = /\r\n?/g, ud = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == "string" ? e : "" + e).replace(id, `
`).replace(ud, "");
}
function Cr(e, n, t) {
  if (n = Nu(n), Nu(e) !== n && t) throw Error(x(425));
}
function Xr() {
}
var zo = null, Ro = null;
function jo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var To = typeof setTimeout == "function" ? setTimeout : void 0, ad = typeof clearTimeout == "function" ? clearTimeout : void 0, _u = typeof Promise == "function" ? Promise : void 0, sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof _u < "u" ? function(e) {
  return _u.resolve(null).then(e).catch(cd);
} : To;
function cd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Kl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), Zt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Zt(n);
}
function gn(e) {
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
function Pu(e) {
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
var kt = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + kt, er = "__reactProps$" + kt, nn = "__reactContainer$" + kt, Do = "__reactEvents$" + kt, fd = "__reactListeners$" + kt, dd = "__reactHandles$" + kt;
function jn(e) {
  var n = e[Ve];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[nn] || t[Ve]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Pu(e); e !== null; ) {
        if (t = e[Ve]) return t;
        e = Pu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function cr(e) {
  return e = e[Ve] || e[nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function gl(e) {
  return e[er] || null;
}
var Lo = [], et = -1;
function Nn(e) {
  return { current: e };
}
function W(e) {
  0 > et || (e.current = Lo[et], Lo[et] = null, et--);
}
function U(e, n) {
  et++, Lo[et] = e.current, e.current = n;
}
var Cn = {}, se = Nn(Cn), ge = Nn(!1), Fn = Cn;
function pt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return Cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function Jr() {
  W(ge), W(se);
}
function zu(e, n, t) {
  if (se.current !== Cn) throw Error(x(168));
  U(se, n), U(ge, t);
}
function ms(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(x(108, Zc(e) || "Unknown", l));
  return G({}, t, r);
}
function qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Cn, Fn = se.current, U(se, e), U(ge, ge.current), !0;
}
function Ru(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  t ? (e = ms(e, n, Fn), r.__reactInternalMemoizedMergedChildContext = e, W(ge), W(se), U(se, e)) : W(ge), U(ge, t);
}
var Xe = null, vl = !1, Ql = !1;
function ys(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function pd(e) {
  vl = !0, ys(e);
}
function _n() {
  if (!Ql && Xe !== null) {
    Ql = !0;
    var e = 0, n = I;
    try {
      var t = Xe;
      for (I = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, vl = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), Aa(ci, _n), l;
    } finally {
      I = n, Ql = !1;
    }
  }
  return null;
}
var nt = [], tt = 0, br = null, el = 0, _e = [], Pe = 0, In = null, Je = 1, qe = "";
function zn(e, n) {
  nt[tt++] = el, nt[tt++] = br, br = e, el = n;
}
function hs(e, n, t) {
  _e[Pe++] = Je, _e[Pe++] = qe, _e[Pe++] = In, In = e;
  var r = Je;
  e = qe;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Oe(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Je = 1 << 32 - Oe(n) + l | t << l | r, qe = o + e;
  } else Je = 1 << o | t << l | r, qe = e;
}
function xi(e) {
  e.return !== null && (zn(e, 1), hs(e, 1, 0));
}
function Si(e) {
  for (; e === br; ) br = nt[--tt], nt[tt] = null, el = nt[--tt], nt[tt] = null;
  for (; e === In; ) In = _e[--Pe], _e[Pe] = null, qe = _e[--Pe], _e[Pe] = null, Je = _e[--Pe], _e[Pe] = null;
}
var we = null, ke = null, V = !1, Ie = null;
function gs(e, n) {
  var t = ze(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function ju(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, we = e, ke = gn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, we = e, ke = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = In !== null ? { id: Je, overflow: qe } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, we = e, ke = null, !0) : !1;
    default:
      return !1;
  }
}
function Mo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fo(e) {
  if (V) {
    var n = ke;
    if (n) {
      var t = n;
      if (!ju(e, n)) {
        if (Mo(e)) throw Error(x(418));
        n = gn(t.nextSibling);
        var r = we;
        n && ju(e, n) ? gs(r, t) : (e.flags = e.flags & -4097 | 2, V = !1, we = e);
      }
    } else {
      if (Mo(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, V = !1, we = e;
    }
  }
}
function Tu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function Er(e) {
  if (e !== we) return !1;
  if (!V) return Tu(e), V = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !jo(e.type, e.memoizedProps)), n && (n = ke)) {
    if (Mo(e)) throw vs(), Error(x(418));
    for (; n; ) gs(e, n), n = gn(n.nextSibling);
  }
  if (Tu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ke = gn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = we ? gn(e.stateNode.nextSibling) : null;
  return !0;
}
function vs() {
  for (var e = ke; e; ) e = gn(e.nextSibling);
}
function mt() {
  ke = we = null, V = !1;
}
function ki(e) {
  Ie === null ? Ie = [e] : Ie.push(e);
}
var md = ln.ReactCurrentBatchConfig;
function zt(e, n, t) {
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
function Nr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Du(e) {
  var n = e._init;
  return n(e._payload);
}
function xs(e) {
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
    return f = kn(f, s), f.index = 0, f.sibling = null, f;
  }
  function o(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, v) {
    return s === null || s.tag !== 6 ? (s = bl(d, f.mode, v), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, v) {
    var C = d.type;
    return C === Zn ? h(f, s, d.props.children, v, d.key) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === an && Du(C) === s.type) ? (v = l(s, d.props), v.ref = zt(f, s, d), v.return = f, v) : (v = Br(d.type, d.key, d.props, null, f.mode, v), v.ref = zt(f, s, d), v.return = f, v);
  }
  function c(f, s, d, v) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = eo(d, f.mode, v), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, v, C) {
    return s === null || s.tag !== 7 ? (s = Mn(d, f.mode, v, C), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function y(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = bl("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case mr:
          return d = Br(s.type, s.key, s.props, null, f.mode, d), d.ref = zt(f, null, s), d.return = f, d;
        case Yn:
          return s = eo(s, f.mode, d), s.return = f, s;
        case an:
          var v = s._init;
          return y(f, v(s._payload), d);
      }
      if (Dt(s) || Ct(s)) return s = Mn(s, f.mode, d, null), s.return = f, s;
      Nr(f, s);
    }
    return null;
  }
  function m(f, s, d, v) {
    var C = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return C !== null ? null : u(f, s, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          return d.key === C ? a(f, s, d, v) : null;
        case Yn:
          return d.key === C ? c(f, s, d, v) : null;
        case an:
          return C = d._init, m(
            f,
            s,
            C(d._payload),
            v
          );
      }
      if (Dt(d) || Ct(d)) return C !== null ? null : h(f, s, d, v, null);
      Nr(f, d);
    }
    return null;
  }
  function g(f, s, d, v, C) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(s, f, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case mr:
          return f = f.get(v.key === null ? d : v.key) || null, a(s, f, v, C);
        case Yn:
          return f = f.get(v.key === null ? d : v.key) || null, c(s, f, v, C);
        case an:
          var P = v._init;
          return g(f, s, d, P(v._payload), C);
      }
      if (Dt(v) || Ct(v)) return f = f.get(d) || null, h(s, f, v, C, null);
      Nr(s, v);
    }
    return null;
  }
  function S(f, s, d, v) {
    for (var C = null, P = null, _ = s, z = s = 0, A = null; _ !== null && z < d.length; z++) {
      _.index > z ? (A = _, _ = null) : A = _.sibling;
      var T = m(f, _, d[z], v);
      if (T === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && T.alternate === null && n(f, _), s = o(T, s, z), P === null ? C = T : P.sibling = T, P = T, _ = A;
    }
    if (z === d.length) return t(f, _), V && zn(f, z), C;
    if (_ === null) {
      for (; z < d.length; z++) _ = y(f, d[z], v), _ !== null && (s = o(_, s, z), P === null ? C = _ : P.sibling = _, P = _);
      return V && zn(f, z), C;
    }
    for (_ = r(f, _); z < d.length; z++) A = g(_, f, z, d[z], v), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? z : A.key), s = o(A, s, z), P === null ? C = A : P.sibling = A, P = A);
    return e && _.forEach(function(me) {
      return n(f, me);
    }), V && zn(f, z), C;
  }
  function k(f, s, d, v) {
    var C = Ct(d);
    if (typeof C != "function") throw Error(x(150));
    if (d = C.call(d), d == null) throw Error(x(151));
    for (var P = C = null, _ = s, z = s = 0, A = null, T = d.next(); _ !== null && !T.done; z++, T = d.next()) {
      _.index > z ? (A = _, _ = null) : A = _.sibling;
      var me = m(f, _, T.value, v);
      if (me === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && me.alternate === null && n(f, _), s = o(me, s, z), P === null ? C = me : P.sibling = me, P = me, _ = A;
    }
    if (T.done) return t(
      f,
      _
    ), V && zn(f, z), C;
    if (_ === null) {
      for (; !T.done; z++, T = d.next()) T = y(f, T.value, v), T !== null && (s = o(T, s, z), P === null ? C = T : P.sibling = T, P = T);
      return V && zn(f, z), C;
    }
    for (_ = r(f, _); !T.done; z++, T = d.next()) T = g(_, f, z, T.value, v), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? z : T.key), s = o(T, s, z), P === null ? C = T : P.sibling = T, P = T);
    return e && _.forEach(function(on) {
      return n(f, on);
    }), V && zn(f, z), C;
  }
  function D(f, s, d, v) {
    if (typeof d == "object" && d !== null && d.type === Zn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          e: {
            for (var C = d.key, P = s; P !== null; ) {
              if (P.key === C) {
                if (C = d.type, C === Zn) {
                  if (P.tag === 7) {
                    t(f, P.sibling), s = l(P, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === an && Du(C) === P.type) {
                  t(f, P.sibling), s = l(P, d.props), s.ref = zt(f, P, d), s.return = f, f = s;
                  break e;
                }
                t(f, P);
                break;
              } else n(f, P);
              P = P.sibling;
            }
            d.type === Zn ? (s = Mn(d.props.children, f.mode, v, d.key), s.return = f, f = s) : (v = Br(d.type, d.key, d.props, null, f.mode, v), v.ref = zt(f, s, d), v.return = f, f = v);
          }
          return i(f);
        case Yn:
          e: {
            for (P = d.key; s !== null; ) {
              if (s.key === P) if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                t(f, s.sibling), s = l(s, d.children || []), s.return = f, f = s;
                break e;
              } else {
                t(f, s);
                break;
              }
              else n(f, s);
              s = s.sibling;
            }
            s = eo(d, f.mode, v), s.return = f, f = s;
          }
          return i(f);
        case an:
          return P = d._init, D(f, s, P(d._payload), v);
      }
      if (Dt(d)) return S(f, s, d, v);
      if (Ct(d)) return k(f, s, d, v);
      Nr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(f, s.sibling), s = l(s, d), s.return = f, f = s) : (t(f, s), s = bl(d, f.mode, v), s.return = f, f = s), i(f)) : t(f, s);
  }
  return D;
}
var yt = xs(!0), Ss = xs(!1), nl = Nn(null), tl = null, rt = null, wi = null;
function Ci() {
  wi = rt = tl = null;
}
function Ei(e) {
  var n = nl.current;
  W(nl), e._currentValue = n;
}
function Io(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function ct(e, n) {
  tl = e, wi = rt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (he = !0), e.firstContext = null);
}
function je(e) {
  var n = e._currentValue;
  if (wi !== e) if (e = { context: e, memoizedValue: n, next: null }, rt === null) {
    if (tl === null) throw Error(x(308));
    rt = e, tl.dependencies = { lanes: 0, firstContext: e };
  } else rt = rt.next = e;
  return n;
}
var Tn = null;
function Ni(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
function ks(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, Ni(n)) : (t.next = l.next, l.next = t), n.interleaved = t, tn(e, r);
}
function tn(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var sn = !1;
function _i(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ws(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function be(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function vn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, tn(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, Ni(r)) : (n.next = l.next, l.next = n), r.interleaved = n, tn(e, t);
}
function Fr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, fi(e, t);
  }
}
function Lu(e, n) {
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
function rl(e, n, t, r) {
  var l = e.updateQueue;
  sn = !1;
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
          var S = e, k = u;
          switch (m = n, g = t, k.tag) {
            case 1:
              if (S = k.payload, typeof S == "function") {
                y = S.call(g, y, m);
                break e;
              }
              y = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = k.payload, m = typeof S == "function" ? S.call(g, y, m) : S, m == null) break e;
              y = G({}, y, m);
              break e;
            case 2:
              sn = !0;
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
    $n |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Mu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(x(191, l));
      l.call(r);
    }
  }
}
var fr = {}, Ke = Nn(fr), nr = Nn(fr), tr = Nn(fr);
function Dn(e) {
  if (e === fr) throw Error(x(174));
  return e;
}
function Pi(e, n) {
  switch (U(tr, n), U(nr, e), U(Ke, fr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ho(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = ho(n, e);
  }
  W(Ke), U(Ke, n);
}
function ht() {
  W(Ke), W(nr), W(tr);
}
function Cs(e) {
  Dn(tr.current);
  var n = Dn(Ke.current), t = ho(n, e.type);
  n !== t && (U(nr, e), U(Ke, t));
}
function zi(e) {
  nr.current === e && (W(Ke), W(nr));
}
var K = Nn(0);
function ll(e) {
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
var Gl = [];
function Ri() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Ir = ln.ReactCurrentDispatcher, Yl = ln.ReactCurrentBatchConfig, On = 0, Q = null, b = null, ne = null, ol = !1, At = !1, rr = 0, yd = 0;
function ie() {
  throw Error(x(321));
}
function ji(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Ue(e[t], n[t])) return !1;
  return !0;
}
function Ti(e, n, t, r, l, o) {
  if (On = o, Q = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Ir.current = e === null || e.memoizedState === null ? xd : Sd, e = t(r, l), At) {
    o = 0;
    do {
      if (At = !1, rr = 0, 25 <= o) throw Error(x(301));
      o += 1, ne = b = null, n.updateQueue = null, Ir.current = kd, e = t(r, l);
    } while (At);
  }
  if (Ir.current = il, n = b !== null && b.next !== null, On = 0, ne = b = Q = null, ol = !1, n) throw Error(x(300));
  return e;
}
function Di() {
  var e = rr !== 0;
  return rr = 0, e;
}
function We() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ne === null ? Q.memoizedState = ne = e : ne = ne.next = e, ne;
}
function Te() {
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
function lr(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Zl(e) {
  var n = Te(), t = n.queue;
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
      if ((On & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var y = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = y, i = r) : a = a.next = y, Q.lanes |= h, $n |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, Ue(r, n.memoizedState) || (he = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, $n |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Xl(e) {
  var n = Te(), t = n.queue;
  if (t === null) throw Error(x(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ue(o, n.memoizedState) || (he = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function Es() {
}
function Ns(e, n) {
  var t = Q, r = Te(), l = n(), o = !Ue(r.memoizedState, l);
  if (o && (r.memoizedState = l, he = !0), r = r.queue, Li(zs.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ne !== null && ne.memoizedState.tag & 1) {
    if (t.flags |= 2048, or(9, Ps.bind(null, t, r, l, n), void 0, null), te === null) throw Error(x(349));
    On & 30 || _s(t, n, l);
  }
  return l;
}
function _s(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Ps(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Rs(n) && js(e);
}
function zs(e, n, t) {
  return t(function() {
    Rs(n) && js(e);
  });
}
function Rs(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Ue(e, t);
  } catch {
    return !0;
  }
}
function js(e) {
  var n = tn(e, 1);
  n !== null && $e(n, e, 1, -1);
}
function Fu(e) {
  var n = We();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: lr, lastRenderedState: e }, n.queue = e, e = e.dispatch = vd.bind(null, Q, e), [n.memoizedState, e];
}
function or(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Ts() {
  return Te().memoizedState;
}
function Or(e, n, t, r) {
  var l = We();
  Q.flags |= e, l.memoizedState = or(1 | n, t, void 0, r === void 0 ? null : r);
}
function xl(e, n, t, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (o = i.destroy, r !== null && ji(r, i.deps)) {
      l.memoizedState = or(n, t, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = or(1 | n, t, o, r);
}
function Iu(e, n) {
  return Or(8390656, 8, e, n);
}
function Li(e, n) {
  return xl(2048, 8, e, n);
}
function Ds(e, n) {
  return xl(4, 2, e, n);
}
function Ls(e, n) {
  return xl(4, 4, e, n);
}
function Ms(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Fs(e, n, t) {
  return t = t != null ? t.concat([e]) : null, xl(4, 4, Ms.bind(null, n, e), t);
}
function Mi() {
}
function Is(e, n) {
  var t = Te();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ji(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Os(e, n) {
  var t = Te();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ji(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function $s(e, n, t) {
  return On & 21 ? (Ue(t, n) || (t = Va(), Q.lanes |= t, $n |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = t);
}
function hd(e, n) {
  var t = I;
  I = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), n();
  } finally {
    I = t, Yl.transition = r;
  }
}
function Us() {
  return Te().memoizedState;
}
function gd(e, n, t) {
  var r = Sn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, As(e)) Bs(n, t);
  else if (t = ks(e, n, t, r), t !== null) {
    var l = fe();
    $e(t, e, r, l), Ws(t, n, r);
  }
}
function vd(e, n, t) {
  var r = Sn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (As(e)) Bs(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Ue(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, Ni(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = ks(e, n, l, r), t !== null && (l = fe(), $e(t, e, r, l), Ws(t, n, r));
  }
}
function As(e) {
  var n = e.alternate;
  return e === Q || n !== null && n === Q;
}
function Bs(e, n) {
  At = ol = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Ws(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, fi(e, t);
  }
}
var il = { readContext: je, useCallback: ie, useContext: ie, useEffect: ie, useImperativeHandle: ie, useInsertionEffect: ie, useLayoutEffect: ie, useMemo: ie, useReducer: ie, useRef: ie, useState: ie, useDebugValue: ie, useDeferredValue: ie, useTransition: ie, useMutableSource: ie, useSyncExternalStore: ie, useId: ie, unstable_isNewReconciler: !1 }, xd = { readContext: je, useCallback: function(e, n) {
  return We().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: je, useEffect: Iu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Or(
    4194308,
    4,
    Ms.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Or(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Or(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = We();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = We();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = gd.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = We();
  return e = { current: e }, n.memoizedState = e;
}, useState: Fu, useDebugValue: Mi, useDeferredValue: function(e) {
  return We().memoizedState = e;
}, useTransition: function() {
  var e = Fu(!1), n = e[0];
  return e = hd.bind(null, e[1]), We().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = Q, l = We();
  if (V) {
    if (t === void 0) throw Error(x(407));
    t = t();
  } else {
    if (t = n(), te === null) throw Error(x(349));
    On & 30 || _s(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Iu(zs.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, or(9, Ps.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = We(), n = te.identifierPrefix;
  if (V) {
    var t = qe, r = Je;
    t = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = rr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = yd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, Sd = {
  readContext: je,
  useCallback: Is,
  useContext: je,
  useEffect: Li,
  useImperativeHandle: Fs,
  useInsertionEffect: Ds,
  useLayoutEffect: Ls,
  useMemo: Os,
  useReducer: Zl,
  useRef: Ts,
  useState: function() {
    return Zl(lr);
  },
  useDebugValue: Mi,
  useDeferredValue: function(e) {
    var n = Te();
    return $s(n, b.memoizedState, e);
  },
  useTransition: function() {
    var e = Zl(lr)[0], n = Te().memoizedState;
    return [e, n];
  },
  useMutableSource: Es,
  useSyncExternalStore: Ns,
  useId: Us,
  unstable_isNewReconciler: !1
}, kd = { readContext: je, useCallback: Is, useContext: je, useEffect: Li, useImperativeHandle: Fs, useInsertionEffect: Ds, useLayoutEffect: Ls, useMemo: Os, useReducer: Xl, useRef: Ts, useState: function() {
  return Xl(lr);
}, useDebugValue: Mi, useDeferredValue: function(e) {
  var n = Te();
  return b === null ? n.memoizedState = e : $s(n, b.memoizedState, e);
}, useTransition: function() {
  var e = Xl(lr)[0], n = Te().memoizedState;
  return [e, n];
}, useMutableSource: Es, useSyncExternalStore: Ns, useId: Us, unstable_isNewReconciler: !1 };
function Me(e, n) {
  if (e && e.defaultProps) {
    n = G({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Oo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : G({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var Sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Bn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = fe(), l = Sn(e), o = be(r, l);
  o.payload = n, t != null && (o.callback = t), n = vn(e, o, l), n !== null && ($e(n, e, l, r), Fr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = fe(), l = Sn(e), o = be(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = vn(e, o, l), n !== null && ($e(n, e, l, r), Fr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = fe(), r = Sn(e), l = be(t, r);
  l.tag = 2, n != null && (l.callback = n), n = vn(e, l, r), n !== null && ($e(n, e, r, t), Fr(n, e, r));
} };
function Ou(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Jt(t, r) || !Jt(l, o) : !0;
}
function Vs(e, n, t) {
  var r = !1, l = Cn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = je(o) : (l = ve(n) ? Fn : se.current, r = n.contextTypes, o = (r = r != null) ? pt(e, l) : Cn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function $u(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Sl.enqueueReplaceState(n, n.state, null);
}
function $o(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, _i(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = je(o) : (o = ve(n) ? Fn : se.current, l.context = pt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Oo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && Sl.enqueueReplaceState(l, l.state, null), rl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Yc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Jl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Uo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var wd = typeof WeakMap == "function" ? WeakMap : Map;
function Hs(e, n, t) {
  t = be(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    al || (al = !0, Zo = r), Uo(e, n);
  }, t;
}
function Ks(e, n, t) {
  t = be(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Uo(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Uo(e, n), typeof r != "function" && (xn === null ? xn = /* @__PURE__ */ new Set([this]) : xn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Uu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Id.bind(null, e, n, t), n.then(e, e));
}
function Au(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = be(-1, 1), n.tag = 2, vn(t, n, 1))), t.lanes |= 1), e);
}
var Cd = ln.ReactCurrentOwner, he = !1;
function ce(e, n, t, r) {
  n.child = e === null ? Ss(n, null, t, r) : yt(n, e.child, t, r);
}
function Wu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return ct(n, l), r = Ti(e, n, t, r, o, l), t = Di(), e !== null && !he ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, rn(e, n, l)) : (V && t && xi(n), n.flags |= 1, ce(e, n, r, l), n.child);
}
function Vu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Wi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Qs(e, n, o, r, l)) : (e = Br(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Jt, t(i, r) && e.ref === n.ref) return rn(e, n, l);
  }
  return n.flags |= 1, e = kn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Qs(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jt(o, r) && e.ref === n.ref) if (he = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
    else return n.lanes = e.lanes, rn(e, n, l);
  }
  return Ao(e, n, t, r, l);
}
function Gs(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(ot, Se), Se |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, U(ot, Se), Se |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, U(ot, Se), Se |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, U(ot, Se), Se |= r;
  return ce(e, n, l, t), n.child;
}
function Ys(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Ao(e, n, t, r, l) {
  var o = ve(t) ? Fn : se.current;
  return o = pt(n, o), ct(n, l), t = Ti(e, n, t, r, o, l), r = Di(), e !== null && !he ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, rn(e, n, l)) : (V && r && xi(n), n.flags |= 1, ce(e, n, t, l), n.child);
}
function Hu(e, n, t, r, l) {
  if (ve(t)) {
    var o = !0;
    qr(n);
  } else o = !1;
  if (ct(n, l), n.stateNode === null) $r(e, n), Vs(n, t, r), $o(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = je(c) : (c = ve(t) ? Fn : se.current, c = pt(n, c));
    var h = t.getDerivedStateFromProps, y = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && $u(n, i, r, c), sn = !1;
    var m = n.memoizedState;
    i.state = m, rl(n, r, i, l), a = n.memoizedState, u !== r || m !== a || ge.current || sn ? (typeof h == "function" && (Oo(n, t, h, r), a = n.memoizedState), (u = sn || Ou(n, t, u, r, m, a, c)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, ws(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Me(n.type, u), i.props = c, y = n.pendingProps, m = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = je(a) : (a = ve(t) ? Fn : se.current, a = pt(n, a));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || m !== a) && $u(n, i, r, a), sn = !1, m = n.memoizedState, i.state = m, rl(n, r, i, l);
    var S = n.memoizedState;
    u !== y || m !== S || ge.current || sn ? (typeof g == "function" && (Oo(n, t, g, r), S = n.memoizedState), (c = sn || Ou(n, t, c, r, m, S, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = S), i.props = r, i.state = S, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Bo(e, n, t, r, o, l);
}
function Bo(e, n, t, r, l, o) {
  Ys(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Ru(n, t, !1), rn(e, n, o);
  r = n.stateNode, Cd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = yt(n, e.child, null, o), n.child = yt(n, null, u, o)) : ce(e, n, u, o), n.memoizedState = r.state, l && Ru(n, t, !0), n.child;
}
function Zs(e) {
  var n = e.stateNode;
  n.pendingContext ? zu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && zu(e, n.context, !1), Pi(e, n.containerInfo);
}
function Ku(e, n, t, r, l) {
  return mt(), ki(l), n.flags |= 256, ce(e, n, t, r), n.child;
}
var Wo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xs(e, n, t) {
  var r = n.pendingProps, l = K.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(K, l & 1), e === null)
    return Fo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Cl(i, r, 0, null), e = Mn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Vo(t), n.memoizedState = Wo, e) : Fi(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Ed(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = kn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = kn(u, o) : (o = Mn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Vo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Wo, r;
  }
  return o = e.child, e = o.sibling, r = kn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Fi(e, n) {
  return n = Cl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function _r(e, n, t, r) {
  return r !== null && ki(r), yt(n, e.child, null, t), e = Fi(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function Ed(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Jl(Error(x(422))), _r(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), o = Mn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && yt(n, e.child, null, i), n.child.memoizedState = Vo(i), n.memoizedState = Wo, o);
  if (!(n.mode & 1)) return _r(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(x(419)), r = Jl(o, r, void 0), _r(e, n, i, r);
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, tn(e, l), $e(r, e, l, -1));
    }
    return Bi(), r = Jl(Error(x(421))), _r(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Od.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, ke = gn(l.nextSibling), we = n, V = !0, Ie = null, e !== null && (_e[Pe++] = Je, _e[Pe++] = qe, _e[Pe++] = In, Je = e.id, qe = e.overflow, In = n), n = Fi(n, r.children), n.flags |= 4096, n);
}
function Qu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Io(e.return, n, t);
}
function ql(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Js(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (ce(e, n, r.children, t), r = K.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Qu(e, t, n);
      else if (e.tag === 19) Qu(e, t, n);
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
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && ll(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), ql(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ll(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      ql(n, !0, t, null, o);
      break;
    case "together":
      ql(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function $r(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function rn(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), $n |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(x(153));
  if (n.child !== null) {
    for (e = n.child, t = kn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = kn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function Nd(e, n, t) {
  switch (n.tag) {
    case 3:
      Zs(n), mt();
      break;
    case 5:
      Cs(n);
      break;
    case 1:
      ve(n.type) && qr(n);
      break;
    case 4:
      Pi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      U(nl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(K, K.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Xs(e, n, t) : (U(K, K.current & 1), e = rn(e, n, t), e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return Js(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Gs(e, n, t);
  }
  return rn(e, n, t);
}
var qs, Ho, bs, ec;
qs = function(e, n) {
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
Ho = function() {
};
bs = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Dn(Ke.current);
    var o = null;
    switch (t) {
      case "input":
        l = fo(e, l), r = fo(e, r), o = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = yo(e, l), r = yo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xr);
    }
    go(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ht.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ht.hasOwnProperty(c) ? (a != null && c === "onScroll" && B("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
ec = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Rt(e, n) {
  if (!V) switch (e.tailMode) {
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
function _d(e, n, t) {
  var r = n.pendingProps;
  switch (Si(n), n.tag) {
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
      return ve(n.type) && Jr(), ue(n), null;
    case 3:
      return r = n.stateNode, ht(), W(ge), W(se), Ri(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Er(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Ie !== null && (qo(Ie), Ie = null))), Ho(e, n), ue(n), null;
    case 5:
      zi(n);
      var l = Dn(tr.current);
      if (t = n.type, e !== null && n.stateNode != null) bs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(x(166));
          return ue(n), null;
        }
        if (e = Dn(Ke.current), Er(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ve] = n, r[er] = o, e = (n.mode & 1) !== 0, t) {
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
              for (l = 0; l < Mt.length; l++) B(Mt[l], r);
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
              nu(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              ru(r, o), B("invalid", r);
          }
          go(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Cr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Cr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Ht.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
          }
          switch (t) {
            case "input":
              yr(r), tu(r, o, !0);
              break;
            case "textarea":
              yr(r), lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = za(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ve] = n, e[er] = r, qs(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = vo(t, r), t) {
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
                for (l = 0; l < Mt.length; l++) B(Mt[l], e);
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
                nu(e, r), l = fo(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                ru(e, r), l = yo(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            go(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Ta(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ra(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Kt(e, a) : typeof a == "number" && Kt(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ht.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && oi(e, o, a, i));
            }
            switch (t) {
              case "input":
                yr(e), tu(e, r, !1);
                break;
              case "textarea":
                yr(e), lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? it(e, !!r.multiple, o, !1) : r.defaultValue != null && it(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Xr);
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
      if (e && n.stateNode != null) ec(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(x(166));
        if (t = Dn(tr.current), Dn(Ke.current), Er(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ve] = n, (o = r.nodeValue !== t) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              Cr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Cr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ve] = n, n.stateNode = r;
      }
      return ue(n), null;
    case 13:
      if (W(K), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && ke !== null && n.mode & 1 && !(n.flags & 128)) vs(), mt(), n.flags |= 98560, o = !1;
        else if (o = Er(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[Ve] = n;
          } else mt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ue(n), o = !1;
        } else Ie !== null && (qo(Ie), Ie = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || K.current & 1 ? ee === 0 && (ee = 3) : Bi())), n.updateQueue !== null && (n.flags |= 4), ue(n), null);
    case 4:
      return ht(), Ho(e, n), e === null && qt(n.stateNode.containerInfo), ue(n), null;
    case 10:
      return Ei(n.type._context), ue(n), null;
    case 17:
      return ve(n.type) && Jr(), ue(n), null;
    case 19:
      if (W(K), o = n.memoizedState, o === null) return ue(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) Rt(o, !1);
      else {
        if (ee !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = ll(e), i !== null) {
            for (n.flags |= 128, Rt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return U(K, K.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Z() > vt && (n.flags |= 128, r = !0, Rt(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = ll(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Rt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return ue(n), null;
        } else 2 * Z() - o.renderingStartTime > vt && t !== 1073741824 && (n.flags |= 128, r = !0, Rt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Z(), n.sibling = null, t = K.current, U(K, r ? t & 1 | 2 : t & 1), n) : (ue(n), null);
    case 22:
    case 23:
      return Ai(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Se & 1073741824 && (ue(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ue(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, n.tag));
}
function Pd(e, n) {
  switch (Si(n), n.tag) {
    case 1:
      return ve(n.type) && Jr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return ht(), W(ge), W(se), Ri(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return zi(n), null;
    case 13:
      if (W(K), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(x(340));
        mt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return W(K), null;
    case 4:
      return ht(), null;
    case 10:
      return Ei(n.type._context), null;
    case 22:
    case 23:
      return Ai(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pr = !1, ae = !1, zd = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function lt(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    Y(e, n, r);
  }
  else t.current = null;
}
function Ko(e, n, t) {
  try {
    t();
  } catch (r) {
    Y(e, n, r);
  }
}
var Gu = !1;
function Rd(e, n) {
  if (zo = Gr, e = os(), vi(e)) {
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
  for (Ro = { focusedElem: e, selectionRange: t }, Gr = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
  else for (; E !== null; ) {
    n = E;
    try {
      var S = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var k = S.memoizedProps, D = S.memoizedState, f = n.stateNode, s = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Me(n.type, k), D);
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
      e.return = n.return, E = e;
      break;
    }
    E = n.return;
  }
  return S = Gu, Gu = !1, S;
}
function Bt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ko(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, n) {
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
function Qo(e) {
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
function nc(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, nc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ve], delete n[er], delete n[Do], delete n[fd], delete n[dd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function tc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || tc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Xr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Go(e, n, t), e = e.sibling; e !== null; ) Go(e, n, t), e = e.sibling;
}
function Yo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Yo(e, n, t), e = e.sibling; e !== null; ) Yo(e, n, t), e = e.sibling;
}
var re = null, Fe = !1;
function un(e, n, t) {
  for (t = t.child; t !== null; ) rc(e, n, t), t = t.sibling;
}
function rc(e, n, t) {
  if (He && typeof He.onCommitFiberUnmount == "function") try {
    He.onCommitFiberUnmount(pl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      ae || lt(t, n);
    case 6:
      var r = re, l = Fe;
      re = null, un(e, n, t), re = r, Fe = l, re !== null && (Fe ? (e = re, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : re.removeChild(t.stateNode));
      break;
    case 18:
      re !== null && (Fe ? (e = re, t = t.stateNode, e.nodeType === 8 ? Kl(e.parentNode, t) : e.nodeType === 1 && Kl(e, t), Zt(e)) : Kl(re, t.stateNode));
      break;
    case 4:
      r = re, l = Fe, re = t.stateNode.containerInfo, Fe = !0, un(e, n, t), re = r, Fe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ae && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ko(t, n, i), l = l.next;
        } while (l !== r);
      }
      un(e, n, t);
      break;
    case 1:
      if (!ae && (lt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Y(t, n, u);
      }
      un(e, n, t);
      break;
    case 21:
      un(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (ae = (r = ae) || t.memoizedState !== null, un(e, n, t), ae = r) : un(e, n, t);
      break;
    default:
      un(e, n, t);
  }
}
function Zu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new zd()), n.forEach(function(r) {
      var l = $d.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Le(e, n) {
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
      rc(o, i, l), re = null, Fe = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      Y(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) lc(n, e), n = n.sibling;
}
function lc(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(n, e), Be(e), r & 4) {
        try {
          Bt(3, e, e.return), kl(3, e);
        } catch (k) {
          Y(e, e.return, k);
        }
        try {
          Bt(5, e, e.return);
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 1:
      Le(n, e), Be(e), r & 512 && t !== null && lt(t, t.return);
      break;
    case 5:
      if (Le(n, e), Be(e), r & 512 && t !== null && lt(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Kt(l, "");
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && _a(l, o), vo(u, i);
          var c = vo(u, o);
          for (i = 0; i < a.length; i += 2) {
            var h = a[i], y = a[i + 1];
            h === "style" ? Ta(l, y) : h === "dangerouslySetInnerHTML" ? Ra(l, y) : h === "children" ? Kt(l, y) : oi(l, h, y, c);
          }
          switch (u) {
            case "input":
              po(l, o);
              break;
            case "textarea":
              Pa(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? it(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? it(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : it(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[er] = o;
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Le(n, e), Be(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Le(n, e), Be(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Zt(n.containerInfo);
      } catch (k) {
        Y(e, e.return, k);
      }
      break;
    case 4:
      Le(n, e), Be(e);
      break;
    case 13:
      Le(n, e), Be(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || ($i = Z())), r & 4 && Zu(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (ae = (c = ae) || h, Le(n, e), ae = c) : Le(n, e), Be(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (E = e, h = e.child; h !== null; ) {
          for (y = E = h; E !== null; ) {
            switch (m = E, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bt(4, m, m.return);
                break;
              case 1:
                lt(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, t = m.return;
                  try {
                    n = r, S.props = n.memoizedProps, S.state = n.memoizedState, S.componentWillUnmount();
                  } catch (k) {
                    Y(r, t, k);
                  }
                }
                break;
              case 5:
                lt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Ju(y);
                  continue;
                }
            }
            g !== null ? (g.return = m, E = g) : Ju(y);
          }
          h = h.sibling;
        }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                l = y.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, a = y.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = ja("display", i));
              } catch (k) {
                Y(e, e.return, k);
              }
            }
          } else if (y.tag === 6) {
            if (h === null) try {
              y.stateNode.nodeValue = c ? "" : y.memoizedProps;
            } catch (k) {
              Y(e, e.return, k);
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
      Le(n, e), Be(e), r & 4 && Zu(e);
      break;
    case 21:
      break;
    default:
      Le(
        n,
        e
      ), Be(e);
  }
}
function Be(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (tc(t)) {
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
          r.flags & 32 && (Kt(l, ""), r.flags &= -33);
          var o = Yu(e);
          Yo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Yu(e);
          Go(e, u, i);
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
function jd(e, n, t) {
  E = e, oc(e);
}
function oc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Pr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || ae;
        u = Pr;
        var c = ae;
        if (Pr = i, (ae = a) && !c) for (E = l; E !== null; ) i = E, a = i.child, i.tag === 22 && i.memoizedState !== null ? qu(l) : a !== null ? (a.return = i, E = a) : qu(l);
        for (; o !== null; ) E = o, oc(o), o = o.sibling;
        E = l, Pr = u, ae = c;
      }
      Xu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Xu(e);
  }
}
function Xu(e) {
  for (; E !== null; ) {
    var n = E;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ae || kl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !ae) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Me(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && Mu(n, o, r);
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
              Mu(n, i, t);
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
                  y !== null && Zt(y);
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
        ae || n.flags & 512 && Qo(n);
      } catch (m) {
        Y(n, n.return, m);
      }
    }
    if (n === e) {
      E = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, E = t;
      break;
    }
    E = n.return;
  }
}
function Ju(e) {
  for (; E !== null; ) {
    var n = E;
    if (n === e) {
      E = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, E = t;
      break;
    }
    E = n.return;
  }
}
function qu(e) {
  for (; E !== null; ) {
    var n = E;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            kl(4, n);
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
            Qo(n);
          } catch (a) {
            Y(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Qo(n);
          } catch (a) {
            Y(n, i, a);
          }
      }
    } catch (a) {
      Y(n, n.return, a);
    }
    if (n === e) {
      E = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, E = u;
      break;
    }
    E = n.return;
  }
}
var Td = Math.ceil, ul = ln.ReactCurrentDispatcher, Ii = ln.ReactCurrentOwner, Re = ln.ReactCurrentBatchConfig, F = 0, te = null, q = null, le = 0, Se = 0, ot = Nn(0), ee = 0, ir = null, $n = 0, wl = 0, Oi = 0, Wt = null, ye = null, $i = 0, vt = 1 / 0, Ze = null, al = !1, Zo = null, xn = null, zr = !1, pn = null, sl = 0, Vt = 0, Xo = null, Ur = -1, Ar = 0;
function fe() {
  return F & 6 ? Z() : Ur !== -1 ? Ur : Ur = Z();
}
function Sn(e) {
  return e.mode & 1 ? F & 2 && le !== 0 ? le & -le : md.transition !== null ? (Ar === 0 && (Ar = Va()), Ar) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Xa(e.type)), e) : 1;
}
function $e(e, n, t, r) {
  if (50 < Vt) throw Vt = 0, Xo = null, Error(x(185));
  ar(e, t, r), (!(F & 2) || e !== te) && (e === te && (!(F & 2) && (wl |= t), ee === 4 && fn(e, le)), xe(e, r), t === 1 && F === 0 && !(n.mode & 1) && (vt = Z() + 500, vl && _n()));
}
function xe(e, n) {
  var t = e.callbackNode;
  mf(e, n);
  var r = Qr(e, e === te ? le : 0);
  if (r === 0) t !== null && uu(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && uu(t), n === 1) e.tag === 0 ? pd(bu.bind(null, e)) : ys(bu.bind(null, e)), sd(function() {
      !(F & 6) && _n();
    }), t = null;
    else {
      switch (Ha(r)) {
        case 1:
          t = ci;
          break;
        case 4:
          t = Ba;
          break;
        case 16:
          t = Kr;
          break;
        case 536870912:
          t = Wa;
          break;
        default:
          t = Kr;
      }
      t = pc(t, ic.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function ic(e, n) {
  if (Ur = -1, Ar = 0, F & 6) throw Error(x(327));
  var t = e.callbackNode;
  if (ft() && e.callbackNode !== t) return null;
  var r = Qr(e, e === te ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = cl(e, r);
  else {
    n = r;
    var l = F;
    F |= 2;
    var o = ac();
    (te !== e || le !== n) && (Ze = null, vt = Z() + 500, Ln(e, n));
    do
      try {
        Md();
        break;
      } catch (u) {
        uc(e, u);
      }
    while (!0);
    Ci(), ul.current = o, F = l, q !== null ? n = 0 : (te = null, le = 0, n = ee);
  }
  if (n !== 0) {
    if (n === 2 && (l = Co(e), l !== 0 && (r = l, n = Jo(e, l))), n === 1) throw t = ir, Ln(e, 0), fn(e, r), xe(e, Z()), t;
    if (n === 6) fn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Dd(l) && (n = cl(e, r), n === 2 && (o = Co(e), o !== 0 && (r = o, n = Jo(e, o))), n === 1)) throw t = ir, Ln(e, 0), fn(e, r), xe(e, Z()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Rn(e, ye, Ze);
          break;
        case 3:
          if (fn(e, r), (r & 130023424) === r && (n = $i + 500 - Z(), 10 < n)) {
            if (Qr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = To(Rn.bind(null, e, ye, Ze), n);
            break;
          }
          Rn(e, ye, Ze);
          break;
        case 4:
          if (fn(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Td(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = To(Rn.bind(null, e, ye, Ze), r);
            break;
          }
          Rn(e, ye, Ze);
          break;
        case 5:
          Rn(e, ye, Ze);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return xe(e, Z()), e.callbackNode === t ? ic.bind(null, e) : null;
}
function Jo(e, n) {
  var t = Wt;
  return e.current.memoizedState.isDehydrated && (Ln(e, n).flags |= 256), e = cl(e, n), e !== 2 && (n = ye, ye = t, n !== null && qo(n)), e;
}
function qo(e) {
  ye === null ? ye = e : ye.push.apply(ye, e);
}
function Dd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ue(o(), l)) return !1;
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
function fn(e, n) {
  for (n &= ~Oi, n &= ~wl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Oe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function bu(e) {
  if (F & 6) throw Error(x(327));
  ft();
  var n = Qr(e, 0);
  if (!(n & 1)) return xe(e, Z()), null;
  var t = cl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = Co(e);
    r !== 0 && (n = r, t = Jo(e, r));
  }
  if (t === 1) throw t = ir, Ln(e, 0), fn(e, n), xe(e, Z()), t;
  if (t === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Rn(e, ye, Ze), xe(e, Z()), null;
}
function Ui(e, n) {
  var t = F;
  F |= 1;
  try {
    return e(n);
  } finally {
    F = t, F === 0 && (vt = Z() + 500, vl && _n());
  }
}
function Un(e) {
  pn !== null && pn.tag === 0 && !(F & 6) && ft();
  var n = F;
  F |= 1;
  var t = Re.transition, r = I;
  try {
    if (Re.transition = null, I = 1, e) return e();
  } finally {
    I = r, Re.transition = t, F = n, !(F & 6) && _n();
  }
}
function Ai() {
  Se = ot.current, W(ot);
}
function Ln(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, ad(t)), q !== null) for (t = q.return; t !== null; ) {
    var r = t;
    switch (Si(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jr();
        break;
      case 3:
        ht(), W(ge), W(se), Ri();
        break;
      case 5:
        zi(r);
        break;
      case 4:
        ht();
        break;
      case 13:
        W(K);
        break;
      case 19:
        W(K);
        break;
      case 10:
        Ei(r.type._context);
        break;
      case 22:
      case 23:
        Ai();
    }
    t = t.return;
  }
  if (te = e, q = e = kn(e.current, null), le = Se = n, ee = 0, ir = null, Oi = wl = $n = 0, ye = Wt = null, Tn !== null) {
    for (n = 0; n < Tn.length; n++) if (t = Tn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    Tn = null;
  }
  return e;
}
function uc(e, n) {
  do {
    var t = q;
    try {
      if (Ci(), Ir.current = il, ol) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ol = !1;
      }
      if (On = 0, ne = b = Q = null, At = !1, rr = 0, Ii.current = null, t === null || t.return === null) {
        ee = 1, ir = n, q = null;
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
          var g = Au(i);
          if (g !== null) {
            g.flags &= -257, Bu(g, i, u, o, n), g.mode & 1 && Uu(o, c, n), n = g, a = c;
            var S = n.updateQueue;
            if (S === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(a), n.updateQueue = k;
            } else S.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Uu(o, c, n), Bi();
              break e;
            }
            a = Error(x(426));
          }
        } else if (V && u.mode & 1) {
          var D = Au(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Bu(D, i, u, o, n), ki(gt(a, u));
            break e;
          }
        }
        o = a = gt(a, u), ee !== 4 && (ee = 2), Wt === null ? Wt = [o] : Wt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Hs(o, a, n);
              Lu(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (xn === null || !xn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Ks(o, u, n);
                Lu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      cc(t);
    } catch (C) {
      n = C, q === t && t !== null && (q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function ac() {
  var e = ul.current;
  return ul.current = il, e === null ? il : e;
}
function Bi() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), te === null || !($n & 268435455) && !(wl & 268435455) || fn(te, le);
}
function cl(e, n) {
  var t = F;
  F |= 2;
  var r = ac();
  (te !== e || le !== n) && (Ze = null, Ln(e, n));
  do
    try {
      Ld();
      break;
    } catch (l) {
      uc(e, l);
    }
  while (!0);
  if (Ci(), F = t, ul.current = r, q !== null) throw Error(x(261));
  return te = null, le = 0, ee;
}
function Ld() {
  for (; q !== null; ) sc(q);
}
function Md() {
  for (; q !== null && !lf(); ) sc(q);
}
function sc(e) {
  var n = dc(e.alternate, e, Se);
  e.memoizedProps = e.pendingProps, n === null ? cc(e) : q = n, Ii.current = null;
}
function cc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = Pd(t, n), t !== null) {
        t.flags &= 32767, q = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ee = 6, q = null;
        return;
      }
    } else if (t = _d(t, n, Se), t !== null) {
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
function Rn(e, n, t) {
  var r = I, l = Re.transition;
  try {
    Re.transition = null, I = 1, Fd(e, n, t, r);
  } finally {
    Re.transition = l, I = r;
  }
  return null;
}
function Fd(e, n, t, r) {
  do
    ft();
  while (pn !== null);
  if (F & 6) throw Error(x(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (yf(e, o), e === te && (q = te = null, le = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || zr || (zr = !0, pc(Kr, function() {
    return ft(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Re.transition, Re.transition = null;
    var i = I;
    I = 1;
    var u = F;
    F |= 4, Ii.current = null, Rd(e, t), lc(t, e), nd(Ro), Gr = !!zo, Ro = zo = null, e.current = t, jd(t), of(), F = u, I = i, Re.transition = o;
  } else e.current = t;
  if (zr && (zr = !1, pn = e, sl = l), o = e.pendingLanes, o === 0 && (xn = null), sf(t.stateNode), xe(e, Z()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw al = !1, e = Zo, Zo = null, e;
  return sl & 1 && e.tag !== 0 && ft(), o = e.pendingLanes, o & 1 ? e === Xo ? Vt++ : (Vt = 0, Xo = e) : Vt = 0, _n(), null;
}
function ft() {
  if (pn !== null) {
    var e = Ha(sl), n = Re.transition, t = I;
    try {
      if (Re.transition = null, I = 16 > e ? 16 : e, pn === null) var r = !1;
      else {
        if (e = pn, pn = null, sl = 0, F & 6) throw Error(x(331));
        var l = F;
        for (F |= 4, E = e.current; E !== null; ) {
          var o = E, i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (E = c; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bt(8, h, o);
                  }
                  var y = h.child;
                  if (y !== null) y.return = h, E = y;
                  else for (; E !== null; ) {
                    h = E;
                    var m = h.sibling, g = h.return;
                    if (nc(h), h === c) {
                      E = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, E = m;
                      break;
                    }
                    E = g;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var D = k.sibling;
                    k.sibling = null, k = D;
                  } while (k !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
          else e: for (; E !== null; ) {
            if (o = E, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Bt(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, E = f;
              break e;
            }
            E = o.return;
          }
        }
        var s = e.current;
        for (E = s; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, E = d;
          else e: for (i = s; E !== null; ) {
            if (u = E, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  kl(9, u);
              }
            } catch (C) {
              Y(u, u.return, C);
            }
            if (u === i) {
              E = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, E = v;
              break e;
            }
            E = u.return;
          }
        }
        if (F = l, _n(), He && typeof He.onPostCommitFiberRoot == "function") try {
          He.onPostCommitFiberRoot(pl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = t, Re.transition = n;
    }
  }
  return !1;
}
function ea(e, n, t) {
  n = gt(t, n), n = Hs(e, n, 1), e = vn(e, n, 1), n = fe(), e !== null && (ar(e, 1, n), xe(e, n));
}
function Y(e, n, t) {
  if (e.tag === 3) ea(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      ea(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xn === null || !xn.has(r))) {
        e = gt(t, e), e = Ks(n, e, 1), n = vn(n, e, 1), e = fe(), n !== null && (ar(n, 1, e), xe(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Id(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = fe(), e.pingedLanes |= e.suspendedLanes & t, te === e && (le & t) === t && (ee === 4 || ee === 3 && (le & 130023424) === le && 500 > Z() - $i ? Ln(e, 0) : Oi |= t), xe(e, n);
}
function fc(e, n) {
  n === 0 && (e.mode & 1 ? (n = vr, vr <<= 1, !(vr & 130023424) && (vr = 4194304)) : n = 1);
  var t = fe();
  e = tn(e, n), e !== null && (ar(e, n, t), xe(e, t));
}
function Od(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), fc(e, t);
}
function $d(e, n) {
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
  r !== null && r.delete(n), fc(e, t);
}
var dc;
dc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || ge.current) he = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return he = !1, Nd(e, n, t);
    he = !!(e.flags & 131072);
  }
  else he = !1, V && n.flags & 1048576 && hs(n, el, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      $r(e, n), e = n.pendingProps;
      var l = pt(n, se.current);
      ct(n, t), l = Ti(null, n, r, e, l, t);
      var o = Di();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ve(r) ? (o = !0, qr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _i(n), l.updater = Sl, n.stateNode = l, l._reactInternals = n, $o(n, r, e, t), n = Bo(null, n, r, !0, o, t)) : (n.tag = 0, V && o && xi(n), ce(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch ($r(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Ad(r), e = Me(r, e), l) {
          case 0:
            n = Ao(null, n, r, e, t);
            break e;
          case 1:
            n = Hu(null, n, r, e, t);
            break e;
          case 11:
            n = Wu(null, n, r, e, t);
            break e;
          case 14:
            n = Vu(null, n, r, Me(r.type, e), t);
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
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), Ao(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), Hu(e, n, r, l, t);
    case 3:
      e: {
        if (Zs(n), e === null) throw Error(x(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, ws(e, n), rl(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = gt(Error(x(423)), n), n = Ku(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = gt(Error(x(424)), n), n = Ku(e, n, r, t, l);
          break e;
        } else for (ke = gn(n.stateNode.containerInfo.firstChild), we = n, V = !0, Ie = null, t = Ss(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (mt(), r === l) {
            n = rn(e, n, t);
            break e;
          }
          ce(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return Cs(n), e === null && Fo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, jo(r, l) ? i = null : o !== null && jo(r, o) && (n.flags |= 32), Ys(e, n), ce(e, n, i, t), n.child;
    case 6:
      return e === null && Fo(n), null;
    case 13:
      return Xs(e, n, t);
    case 4:
      return Pi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = yt(n, null, r, t) : ce(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), Wu(e, n, r, l, t);
    case 7:
      return ce(e, n, n.pendingProps, t), n.child;
    case 8:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, U(nl, r._currentValue), r._currentValue = i, o !== null) if (Ue(o.value, i)) {
          if (o.children === l.children && !ge.current) {
            n = rn(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = be(-1, t & -t), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), Io(
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
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Io(i, t, n), i = o.sibling;
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
      return l = n.type, r = n.pendingProps.children, ct(n, t), l = je(l), r = r(l), n.flags |= 1, ce(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Me(r, n.pendingProps), l = Me(r.type, l), Vu(e, n, r, l, t);
    case 15:
      return Qs(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), $r(e, n), n.tag = 1, ve(r) ? (e = !0, qr(n)) : e = !1, ct(n, t), Vs(n, r, l), $o(n, r, l, t), Bo(null, n, r, !0, e, t);
    case 19:
      return Js(e, n, t);
    case 22:
      return Gs(e, n, t);
  }
  throw Error(x(156, n.tag));
};
function pc(e, n) {
  return Aa(e, n);
}
function Ud(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, n, t, r) {
  return new Ud(e, n, t, r);
}
function Wi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ad(e) {
  if (typeof e == "function") return Wi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ui) return 11;
    if (e === ai) return 14;
  }
  return 2;
}
function kn(e, n) {
  var t = e.alternate;
  return t === null ? (t = ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Br(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Wi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Zn:
      return Mn(t.children, l, o, n);
    case ii:
      i = 8, l |= 8;
      break;
    case uo:
      return e = ze(12, t, n, l | 2), e.elementType = uo, e.lanes = o, e;
    case ao:
      return e = ze(13, t, n, l), e.elementType = ao, e.lanes = o, e;
    case so:
      return e = ze(19, t, n, l), e.elementType = so, e.lanes = o, e;
    case Ca:
      return Cl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ka:
          i = 10;
          break e;
        case wa:
          i = 9;
          break e;
        case ui:
          i = 11;
          break e;
        case ai:
          i = 14;
          break e;
        case an:
          i = 16, r = null;
          break e;
      }
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return n = ze(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Mn(e, n, t, r) {
  return e = ze(7, e, r, n), e.lanes = t, e;
}
function Cl(e, n, t, r) {
  return e = ze(22, e, r, n), e.elementType = Ca, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function bl(e, n, t) {
  return e = ze(6, e, null, n), e.lanes = t, e;
}
function eo(e, n, t) {
  return n = ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Bd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ml(0), this.expirationTimes = Ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Vi(e, n, t, r, l, o, i, u, a) {
  return e = new Bd(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = ze(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _i(o), e;
}
function Wd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function mc(e) {
  if (!e) return Cn;
  e = e._reactInternals;
  e: {
    if (Bn(e) !== e || e.tag !== 1) throw Error(x(170));
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
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (ve(t)) return ms(e, t, n);
  }
  return n;
}
function yc(e, n, t, r, l, o, i, u, a) {
  return e = Vi(t, r, !0, e, l, o, i, u, a), e.context = mc(null), t = e.current, r = fe(), l = Sn(t), o = be(r, l), o.callback = n ?? null, vn(t, o, l), e.current.lanes = l, ar(e, l, r), xe(e, r), e;
}
function El(e, n, t, r) {
  var l = n.current, o = fe(), i = Sn(l);
  return t = mc(t), n.context === null ? n.context = t : n.pendingContext = t, n = be(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = vn(l, n, i), e !== null && ($e(e, l, i, o), Fr(e, l, i)), i;
}
function fl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function na(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Hi(e, n) {
  na(e, n), (e = e.alternate) && na(e, n);
}
function Vd() {
  return null;
}
var hc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ki(e) {
  this._internalRoot = e;
}
Nl.prototype.render = Ki.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(x(409));
  El(e, n, null, null);
};
Nl.prototype.unmount = Ki.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Un(function() {
      El(null, e, null, null);
    }), n[nn] = null;
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ga();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < cn.length && n !== 0 && n < cn[t].priority; t++) ;
    cn.splice(t, 0, e), t === 0 && Za(e);
  }
};
function Qi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function _l(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ta() {
}
function Hd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = fl(i);
        o.call(c);
      };
    }
    var i = yc(n, r, e, 0, null, !1, !1, "", ta);
    return e._reactRootContainer = i, e[nn] = i.current, qt(e.nodeType === 8 ? e.parentNode : e), Un(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = fl(a);
      u.call(c);
    };
  }
  var a = Vi(e, 0, !1, null, null, !1, !1, "", ta);
  return e._reactRootContainer = a, e[nn] = a.current, qt(e.nodeType === 8 ? e.parentNode : e), Un(function() {
    El(n, a, t, r);
  }), a;
}
function Pl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = fl(i);
        u.call(a);
      };
    }
    El(n, i, e, l);
  } else i = Hd(t, n, e, l, r);
  return fl(i);
}
Ka = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Lt(n.pendingLanes);
        t !== 0 && (fi(n, t | 1), xe(n, Z()), !(F & 6) && (vt = Z() + 500, _n()));
      }
      break;
    case 13:
      Un(function() {
        var r = tn(e, 1);
        if (r !== null) {
          var l = fe();
          $e(r, e, 1, l);
        }
      }), Hi(e, 1);
  }
};
di = function(e) {
  if (e.tag === 13) {
    var n = tn(e, 134217728);
    if (n !== null) {
      var t = fe();
      $e(n, e, 134217728, t);
    }
    Hi(e, 134217728);
  }
};
Qa = function(e) {
  if (e.tag === 13) {
    var n = Sn(e), t = tn(e, n);
    if (t !== null) {
      var r = fe();
      $e(t, e, n, r);
    }
    Hi(e, n);
  }
};
Ga = function() {
  return I;
};
Ya = function(e, n) {
  var t = I;
  try {
    return I = e, n();
  } finally {
    I = t;
  }
};
So = function(e, n, t) {
  switch (n) {
    case "input":
      if (po(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = gl(r);
            if (!l) throw Error(x(90));
            Na(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      Pa(e, t);
      break;
    case "select":
      n = t.value, n != null && it(e, !!t.multiple, n, !1);
  }
};
Ma = Ui;
Fa = Un;
var Kd = { usingClientEntryPoint: !1, Events: [cr, bn, gl, Da, La, Ui] }, jt = { findFiberByHostInstance: jn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Qd = { bundleType: jt.bundleType, version: jt.version, rendererPackageName: jt.rendererPackageName, rendererConfig: jt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ln.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $a(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: jt.findFiberByHostInstance || Vd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber) try {
    pl = Rr.inject(Qd), He = Rr;
  } catch {
  }
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kd;
Ee.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qi(n)) throw Error(x(200));
  return Wd(e, n, null, t);
};
Ee.createRoot = function(e, n) {
  if (!Qi(e)) throw Error(x(299));
  var t = !1, r = "", l = hc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Vi(e, 1, !1, null, null, t, !1, r, l), e[nn] = n.current, qt(e.nodeType === 8 ? e.parentNode : e), new Ki(n);
};
Ee.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = $a(n), e = e === null ? null : e.stateNode, e;
};
Ee.flushSync = function(e) {
  return Un(e);
};
Ee.hydrate = function(e, n, t) {
  if (!_l(n)) throw Error(x(200));
  return Pl(null, e, n, !0, t);
};
Ee.hydrateRoot = function(e, n, t) {
  if (!Qi(e)) throw Error(x(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = hc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = yc(n, null, e, 1, t ?? null, l, !1, o, i), e[nn] = n.current, qt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new Nl(n);
};
Ee.render = function(e, n, t) {
  if (!_l(n)) throw Error(x(200));
  return Pl(null, e, n, !1, t);
};
Ee.unmountComponentAtNode = function(e) {
  if (!_l(e)) throw Error(x(40));
  return e._reactRootContainer ? (Un(function() {
    Pl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nn] = null;
    });
  }), !0) : !1;
};
Ee.unstable_batchedUpdates = Ui;
Ee.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!_l(t)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Pl(e, n, t, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function gc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gc);
    } catch (e) {
      console.error(e);
    }
}
gc(), ga.exports = Ee;
var Gd = ga.exports, ra = Gd;
oo.createRoot = ra.createRoot, oo.hydrateRoot = ra.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = (e) => {
  const n = Zd(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var no = {
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
const Xd = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
}, Jd = M.createContext({}), qd = () => M.useContext(Jd), bd = M.forwardRef(
  ({ color: e, size: n, strokeWidth: t, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: y = !1,
      color: m = "currentColor",
      className: g = ""
    } = qd() ?? {}, S = r ?? y ? Number(t ?? h) * 24 / Number(n ?? c) : t ?? h;
    return M.createElement(
      "svg",
      {
        ref: a,
        ...no,
        width: n ?? c ?? no.width,
        height: n ?? c ?? no.height,
        stroke: e ?? m,
        strokeWidth: S,
        className: vc("lucide", g, l),
        ...!o && !Xd(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([k, D]) => M.createElement(k, D)),
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
const De = (e, n) => {
  const t = M.forwardRef(
    ({ className: r, ...l }, o) => M.createElement(bd, {
      ref: o,
      iconNode: n,
      className: vc(
        `lucide-${Yd(la(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return t.displayName = la(e), t;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], np = De("arrow-right", ep);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], oa = De("arrow-up-down", tp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [
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
], lp = De("calculator", rp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ip = De("check", op);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ap = De("chevron-down", up);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], cp = De("globe", sp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], dp = De("plus", fp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], mp = De("refresh-cw", pp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], hp = De("rotate-ccw-clock", yp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], vp = De("search", gp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [
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
], Sp = De("sparkles", xp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], wp = De("trash-2", kp), to = {
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
}, ro = ({ options: e, value: n, onChange: t }) => {
  const [r, l] = M.useState(!1), [o, i] = M.useState(""), u = M.useRef(null), [a, c] = M.useState(!1);
  M.useEffect(() => {
    const g = (S) => {
      u.current && !u.current.contains(S.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), M.useEffect(() => {
    r && u.current && (u.current.getBoundingClientRect().right > window.innerWidth / 2 ? c(!0) : c(!1));
  }, [r]);
  const h = e.filter((g) => {
    const S = to[g] || { name: g }, k = o.toLowerCase();
    return g.toLowerCase().includes(k) || S.name.toLowerCase().includes(k);
  }), y = to[n] || { name: n, symbol: n }, m = n === "EUR" ? "EU" : n === "BTC" ? "⚡" : n.substring(0, 2);
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
              /* @__PURE__ */ p.jsx(ap, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
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
                /* @__PURE__ */ p.jsx(vp, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
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
                const S = to[g] || { name: g, symbol: g }, k = g === "EUR" ? "EU" : g === "BTC" ? "⚡" : g.substring(0, 2), D = g === n;
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
                      background: D ? "rgba(168, 85, 247, 0.15)" : "transparent",
                      borderLeft: D ? "2px solid #a855f7" : "2px solid transparent",
                      transition: "all 0.15s ease"
                    },
                    onMouseEnter: (f) => !D && (f.currentTarget.style.background = "rgba(255, 255, 255, 0.04)"),
                    onMouseLeave: (f) => !D && (f.currentTarget.style.background = "transparent"),
                    children: [
                      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ p.jsx("div", { style: {
                          width: "22px",
                          height: "22px",
                          borderRadius: "5px",
                          background: D ? "#a855f7" : "#1c1c21",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          fontWeight: "800",
                          color: D ? "#ffffff" : "#9ca3af"
                        }, children: k }),
                        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                          /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 600, color: D ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: g }),
                          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: S.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ p.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: S.symbol }),
                        D && /* @__PURE__ */ p.jsx(ip, { size: 14, color: "#a855f7" })
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
}, lo = "datacore_currency_history", Cp = {
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
}, Ep = ({ children: e }) => /* @__PURE__ */ p.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function Np() {
  const [e, n] = M.useState("calculator"), [t, r] = M.useState(Cp), [l, o] = M.useState("USD"), [i, u] = M.useState("USD"), [a, c] = M.useState("EUR"), [h, y] = M.useState("100"), [m, g] = M.useState("100 + 50"), [S, k] = M.useState(!1), [D, f] = M.useState("50"), [s, d] = M.useState("EUR"), [v, C] = M.useState("+"), [P, _] = M.useState(null), [z, A] = M.useState(!0), [T, me] = M.useState(!1), [on, Qe] = M.useState([]), dr = M.useRef(null);
  M.useEffect(() => {
    try {
      const w = localStorage.getItem(lo);
      w && Qe(JSON.parse(w));
    } catch {
    }
  }, []);
  const Wn = ((w) => {
    try {
      if (!w || !w.trim()) return 0;
      const $ = w.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!$) return 0;
      const J = Function(`"use strict"; return (${$})`)();
      return typeof J == "number" && !isNaN(J) && isFinite(J) ? J : 0;
    } catch {
      return 0;
    }
  })(m), Vn = Wn.toFixed(2), j = (() => {
    const w = parseFloat(h) || 0, $ = t[i] || 1, J = t[a] || 1;
    return w / $ * J;
  })().toFixed(2), H = (w) => {
    const $ = t[l] || 1, J = t[w] || 1;
    return (Wn / $ * J).toFixed(2);
  }, X = (w) => {
    const $ = parseFloat(h) || 0, J = t[i] || 1, Ae = t[w] || 1;
    return ($ / J * Ae).toFixed(2);
  }, Pn = async () => {
    me(!0);
    try {
      const w = await fetch(`https://api.exchangerate-api.com/v4/latest/${l}`);
      if (w.ok) {
        const $ = await w.json();
        r($.rates), _(/* @__PURE__ */ new Date()), A(!0);
      } else
        A(!1);
    } catch {
      A(!1);
    } finally {
      me(!1);
    }
  };
  M.useEffect(() => {
    Pn();
  }, [l]);
  const O = (w) => {
    if (w === "AC")
      g("");
    else if (w === "DEL")
      g(($) => $.length > 0 ? $.slice(0, -1) : "");
    else if (w === "=") {
      const $ = Vn;
      g($);
      const J = {
        id: Date.now().toString(),
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        from: l,
        expr: m,
        result: $
      };
      Qe((Ae) => {
        const Kn = [J, ...Ae.slice(0, 19)];
        try {
          localStorage.setItem(lo, JSON.stringify(Kn));
        } catch {
        }
        return Kn;
      });
    } else
      g(($) => $ + w);
  }, Hn = (w, $, J) => {
    const Ae = parseFloat($) || 0;
    if (Ae <= 0) return;
    const Kn = t[J] || 1, Qn = t[l] || 1, zl = (Ae / Kn * Qn).toFixed(2);
    g((xc) => {
      const wt = xc.trim();
      return !wt || wt === "0" ? zl : ["+", "-", "*", "/", "×", "÷"].some((Sc) => wt.endsWith(Sc)) ? `${wt.slice(0, -1).trim()} ${w} ${zl}` : `${wt} ${w} ${zl}`;
    }), k(!1);
  }, Ge = () => {
    const w = parseFloat(h) || 0, $ = t[l] || 1, Ae = (w / (t[i] || 1) * $).toFixed(2);
    g((Kn) => {
      const Qn = Kn.trim();
      return !Qn || Qn === "0" ? Ae : `${Qn} + ${Ae}`;
    }), n("calculator");
  }, Ye = Object.keys(t).sort(), Yi = ["EUR", "USD", "GBP", "JPY", "CAD", "AUD", "CNY", "BRL", "INR", "VND"];
  return /* @__PURE__ */ p.jsx(Ep, { children: /* @__PURE__ */ p.jsx("div", { className: "currency-app", ref: dr, style: { position: "relative" }, children: /* @__PURE__ */ p.jsxs("div", { className: "studio-card", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "studio-header", children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ p.jsx("div", { style: {
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(168, 85, 247, 0.3)"
        }, children: /* @__PURE__ */ p.jsx(Sp, { size: 15, color: "#ffffff" }) }),
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "1rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }, children: "Currency Studio" })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: z ? "#4ade80" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: z ? "#22c55e" : "#f59e0b",
          boxShadow: z ? "0 0 8px #22c55e" : "none"
        } }),
        /* @__PURE__ */ p.jsx("span", { children: z ? "Online" : "Offline" })
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
            /* @__PURE__ */ p.jsx(lp, { size: 14 }),
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
            /* @__PURE__ */ p.jsx(oa, { size: 14 }),
            " Currency Pair"
          ]
        }
      )
    ] }),
    e === "calculator" && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "100%" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 2px" }, children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "Target Base Currency:" }),
        /* @__PURE__ */ p.jsx(
          ro,
          {
            options: Ye,
            value: l,
            onChange: o
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "calc-screen", children: [
        /* @__PURE__ */ p.jsx("div", { className: "calc-expr", children: m || "0" }),
        /* @__PURE__ */ p.jsxs("div", { className: "calc-result", children: [
          Vn,
          " ",
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "1rem", color: "#71717a", fontWeight: "600" }, children: l })
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
          Yi.filter((w) => w !== l).map((w) => {
            const $ = H(w);
            return /* @__PURE__ */ p.jsxs(
              "button",
              {
                type: "button",
                onClick: () => o(w),
                style: {
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#a1a1aa",
                  fontSize: "0.68rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                },
                title: `Click to set ${w} as primary base currency`,
                children: [
                  /* @__PURE__ */ p.jsx("span", { style: { color: "#38bdf8", fontWeight: "700" }, children: w }),
                  /* @__PURE__ */ p.jsx("span", { style: { color: "#e4e4e7" }, children: $ })
                ]
              },
              w
            );
          })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "6px", backgroundColor: "#09090b", padding: "10px", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase" }, children: "+ Currency Variables:" }),
          /* @__PURE__ */ p.jsxs(
            "button",
            {
              type: "button",
              onClick: () => k(!S),
              style: { fontSize: "0.65rem", color: "#c084fc", background: "transparent", border: "none", cursor: "pointer", fontWeight: "700", display: "flex", alignItems: "center", gap: "3px" },
              children: [
                /* @__PURE__ */ p.jsx(dp, { size: 11 }),
                " Custom Injector"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }, children: ["EUR", "USD", "JPY", "GBP", "CNY", "CAD"].map((w) => /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: () => Hn("+", 50, w),
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
              w
            ]
          },
          w
        )) }),
        S && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", paddingTop: "8px", borderTop: "1px solid #1c1c21", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ p.jsxs(
            "select",
            {
              value: v,
              onChange: (w) => C(w.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#c084fc", fontSize: "0.75rem", fontWeight: "800", outline: "none" },
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
              value: D,
              onChange: (w) => f(w.target.value),
              placeholder: "Amount",
              style: { width: "65px", background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" }
            }
          ),
          /* @__PURE__ */ p.jsx(
            "select",
            {
              value: s,
              onChange: (w) => d(w.target.value),
              style: { background: "#18181b", border: "1px solid #27272a", borderRadius: "6px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" },
              children: Ye.map((w) => /* @__PURE__ */ p.jsx("option", { value: w, children: w }, w))
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => Hn(v, D, s),
              style: { flex: 1, padding: "5px 10px", borderRadius: "6px", backgroundColor: "#a855f7", color: "#ffffff", border: "none", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" },
              children: "Inject into Formula"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "calc-keypad", children: [
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => O("AC"), children: "AC" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => O("("), children: "(" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => O(")"), children: ")" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn action", onClick: () => O("DEL"), children: "DEL" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("7"), children: "7" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("8"), children: "8" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("9"), children: "9" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => O(" / "), children: "÷" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("4"), children: "4" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("5"), children: "5" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("6"), children: "6" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => O(" * "), children: "×" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("1"), children: "1" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("2"), children: "2" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("3"), children: "3" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => O(" - "), children: "-" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("0"), children: "0" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn", onClick: () => O("."), children: "." }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn equal", onClick: () => O("="), children: "=" }),
        /* @__PURE__ */ p.jsx("button", { type: "button", className: "key-btn op", onClick: () => O(" + "), children: "+" })
      ] })
    ] }),
    e === "exchange" && /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "14px", width: "100%" }, children: [
      /* @__PURE__ */ p.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Send / Convert:" }),
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ p.jsx(
            ro,
            {
              options: Ye,
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
              onChange: (w) => y(w.target.value),
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
            const w = i;
            u(a), c(w);
          },
          title: "Swap Pair",
          children: /* @__PURE__ */ p.jsx(oa, { size: 18 })
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "pair-box", children: [
        /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "You Receive:" }),
        /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ p.jsx(
            ro,
            {
              options: Ye,
              value: a,
              onChange: c
            }
          ),
          /* @__PURE__ */ p.jsx(
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
      /* @__PURE__ */ p.jsxs("div", { style: { backgroundColor: "#09090b", padding: "12px", borderRadius: "12px", border: "1px solid #27272a", display: "flex", flexDirection: "column", gap: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "5px" }, children: [
          /* @__PURE__ */ p.jsx(cp, { size: 12 }),
          " Live Pair Equivalents (",
          h,
          " ",
          i,
          "):"
        ] }),
        /* @__PURE__ */ p.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }, children: Yi.filter((w) => w !== i).map((w) => {
          const $ = X(w), J = w === a;
          return /* @__PURE__ */ p.jsxs(
            "div",
            {
              onClick: () => c(w),
              style: {
                backgroundColor: J ? "rgba(168, 85, 247, 0.15)" : "#121215",
                border: J ? "1px solid #a855f7" : "1px solid #1c1c21",
                borderRadius: "8px",
                padding: "6px 8px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.15s ease"
              },
              children: [
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: J ? "#c084fc" : "#a1a1aa", fontWeight: "800" }, children: w }),
                /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.8rem", color: J ? "#4ade80" : "#ffffff", fontWeight: "700", fontFamily: "'JetBrains Mono', monospace" }, children: $ })
              ]
            },
            w
          );
        }) })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", width: "100%", marginTop: "2px" }, children: [
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: Ge,
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
              /* @__PURE__ */ p.jsx(np, { size: 15 }),
              " Push Result (",
              j,
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
            onClick: Pn,
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
              /* @__PURE__ */ p.jsx(mp, { size: 14, className: T ? "animate-spin" : "" }),
              T ? "Syncing..." : "Sync Rates"
            ]
          }
        )
      ] })
    ] }),
    on.length > 0 && /* @__PURE__ */ p.jsxs("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ p.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ p.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ p.jsx(hp, { size: 13 }),
          "Calculation History Tape"
        ] }),
        /* @__PURE__ */ p.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              Qe([]), localStorage.removeItem(lo);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ p.jsx(wp, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: on.map((w) => /* @__PURE__ */ p.jsxs(
        "div",
        {
          onClick: () => {
            g(w.expr), n("calculator");
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
              /* @__PURE__ */ p.jsx("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: w.expr }),
              " = ",
              /* @__PURE__ */ p.jsxs("span", { style: { color: "#4ade80", fontWeight: "700" }, children: [
                w.result,
                " ",
                w.from
              ] })
            ] }),
            /* @__PURE__ */ p.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: w.time })
          ]
        },
        w.id
      )) })
    ] })
  ] }) }) });
}
function Pp(e, n) {
  if (!e) return () => {
  };
  const t = oo.createRoot(e);
  return t.render(/* @__PURE__ */ p.jsx(Np, { platformAPI: n })), () => {
    try {
      t.unmount();
    } catch {
    }
  };
}
export {
  Ep as SafeAgentLayer,
  Np as default,
  Pp as mount_app
};
