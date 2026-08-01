(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;height:100%;min-height:100%;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:12px;box-sizing:border-box;overflow-y:auto}.glass-card{background:#18181b;border:1px solid #27272a;border-radius:16px;padding:18px 16px;width:100%;max-width:100%;box-shadow:0 20px 40px #0006;display:flex;flex-direction:column;gap:16px;position:relative;box-sizing:border-box;margin:0 auto}@media (min-width: 600px){.currency-app{padding:24px}.glass-card{max-width:540px;padding:24px}}.currency-title{font-size:clamp(1.1rem,4vw,1.5rem);font-weight:700;margin:0;color:#fafafa;text-align:left;letter-spacing:-.02em}.status-badge{position:absolute;top:18px;right:18px;font-size:.65rem;text-transform:uppercase;letter-spacing:1px;font-weight:700;padding:4px 8px;border-radius:6px;background:#10b98126;color:#10b981}.status-badge.offline{background:#f59e0b26;color:#f59e0b}.input-group{display:flex;flex-direction:column;gap:6px;width:100%}.input-group label{font-size:.75rem;color:#a1a1aa;font-weight:500}.input-wrapper{display:flex;align-items:center;background:#09090b;border:1px solid #3f3f46;border-radius:10px;transition:all .2s ease;position:relative;width:100%;box-sizing:border-box}.input-wrapper:focus-within{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f626}.currency-input{background:transparent;color:#fafafa;border:none;padding:12px 14px;font-size:1.2rem;font-weight:600;width:100%;outline:none;text-align:right;font-variant-numeric:tabular-nums;flex:1;min-width:80px;box-sizing:border-box}.currency-input::placeholder{color:#52525b}.swap-btn{background:#27272a;border:1px solid #3f3f46;color:#a1a1aa;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-4px 0;z-index:2;flex-shrink:0}.swap-btn:hover{background:#3f3f46;color:#fafafa}.sync-btn{background:#fafafa;color:#09090b;border:none;padding:12px 14px;border-radius:10px;font-weight:700;font-size:.85rem;cursor:pointer;transition:all .2s ease;white-space:nowrap}.sync-btn:hover{background:#e4e4e7}.sync-btn:active{transform:scale(.98)}.last-updated{text-align:center;font-size:.75rem;color:#71717a;margin-top:4px}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var Yu = { exports: {} }, ol = {}, Xu = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt = Symbol.for("react.element"), ic = Symbol.for("react.portal"), uc = Symbol.for("react.fragment"), ac = Symbol.for("react.strict_mode"), sc = Symbol.for("react.profiler"), cc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), dc = Symbol.for("react.forward_ref"), pc = Symbol.for("react.suspense"), mc = Symbol.for("react.memo"), yc = Symbol.for("react.lazy"), Ui = Symbol.iterator;
function gc(e) {
  return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Zu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ju = Object.assign, qu = {};
function ct(e, n, t) {
  this.props = e, this.context = n, this.refs = qu, this.updater = t || Zu;
}
ct.prototype.isReactComponent = {};
ct.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
ct.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bu() {
}
bu.prototype = ct.prototype;
function Vo(e, n, t) {
  this.props = e, this.context = n, this.refs = qu, this.updater = t || Zu;
}
var Ho = Vo.prototype = new bu();
Ho.constructor = Vo;
Ju(Ho, ct.prototype);
Ho.isPureReactComponent = !0;
var Ai = Array.isArray, ea = Object.prototype.hasOwnProperty, Wo = { current: null }, na = { key: !0, ref: !0, __self: !0, __source: !0 };
function ta(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) ea.call(n, r) && !na.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), f = 0; f < u; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Jt, type: e, key: o, ref: i, props: l, _owner: Wo.current };
}
function hc(e, n) {
  return { $$typeof: Jt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jt;
}
function vc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Bi = /\/+/g;
function xl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? vc("" + e.key) : n.toString(36);
}
function Cr(e, n, t, r, l) {
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
        case Jt:
        case ic:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + xl(i, 0) : r, Ai(l) ? (t = "", e != null && (t = e.replace(Bi, "$&/") + "/"), Cr(l, n, t, "", function(f) {
    return f;
  })) : l != null && (Ko(l) && (l = hc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Bi, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ai(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + xl(o, u);
    i += Cr(o, n, t, a, l);
  }
  else if (a = gc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + xl(o, u++), i += Cr(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function or(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return Cr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Sc(e) {
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
var fe = { current: null }, Er = { transition: null }, wc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Er, ReactCurrentOwner: Wo };
function ra() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: or, forEach: function(e, n, t) {
  or(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return or(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return or(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Ko(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = ct;
T.Fragment = uc;
T.Profiler = sc;
T.PureComponent = Vo;
T.StrictMode = ac;
T.Suspense = pc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
T.act = ra;
T.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ju({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Wo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) ea.call(n, a) && !na.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var f = 0; f < a; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Jt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: fc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: cc, _context: e }, e.Consumer = e;
};
T.createElement = ta;
T.createFactory = function(e) {
  var n = ta.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: dc, render: e };
};
T.isValidElement = Ko;
T.lazy = function(e) {
  return { $$typeof: yc, _payload: { _status: -1, _result: e }, _init: Sc };
};
T.memo = function(e, n) {
  return { $$typeof: mc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function(e) {
  var n = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = n;
  }
};
T.unstable_act = ra;
T.useCallback = function(e, n) {
  return fe.current.useCallback(e, n);
};
T.useContext = function(e) {
  return fe.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return fe.current.useDeferredValue(e);
};
T.useEffect = function(e, n) {
  return fe.current.useEffect(e, n);
};
T.useId = function() {
  return fe.current.useId();
};
T.useImperativeHandle = function(e, n, t) {
  return fe.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function(e, n) {
  return fe.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function(e, n) {
  return fe.current.useLayoutEffect(e, n);
};
T.useMemo = function(e, n) {
  return fe.current.useMemo(e, n);
};
T.useReducer = function(e, n, t) {
  return fe.current.useReducer(e, n, t);
};
T.useRef = function(e) {
  return fe.current.useRef(e);
};
T.useState = function(e) {
  return fe.current.useState(e);
};
T.useSyncExternalStore = function(e, n, t) {
  return fe.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function() {
  return fe.current.useTransition();
};
T.version = "18.3.1";
Xu.exports = T;
var q = Xu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc = q, xc = Symbol.for("react.element"), Cc = Symbol.for("react.fragment"), Ec = Object.prototype.hasOwnProperty, Nc = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function la(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Ec.call(n, r) && !_c.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: xc, type: e, key: o, ref: i, props: l, _owner: Nc.current };
}
ol.Fragment = Cc;
ol.jsx = la;
ol.jsxs = la;
Yu.exports = ol;
var k = Yu.exports, oa = { exports: {} }, xe = {}, ia = { exports: {} }, ua = {};
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
  function n(v, L) {
    var z = v.length;
    v.push(L);
    e: for (; 0 < z; ) {
      var A = z - 1 >>> 1, Y = v[A];
      if (0 < l(Y, L)) v[A] = L, v[z] = Y, z = A;
      else break e;
    }
  }
  function t(v) {
    return v.length === 0 ? null : v[0];
  }
  function r(v) {
    if (v.length === 0) return null;
    var L = v[0], z = v.pop();
    if (z !== L) {
      v[0] = z;
      e: for (var A = 0, Y = v.length, Ue = Y >>> 1; A < Ue; ) {
        var We = 2 * (A + 1) - 1, kl = v[We], Cn = We + 1, lr = v[Cn];
        if (0 > l(kl, z)) Cn < Y && 0 > l(lr, kl) ? (v[A] = lr, v[Cn] = z, A = Cn) : (v[A] = kl, v[We] = z, A = We);
        else if (Cn < Y && 0 > l(lr, z)) v[A] = lr, v[Cn] = z, A = Cn;
        else break e;
      }
    }
    return L;
  }
  function l(v, L) {
    var z = v.sortIndex - L.sortIndex;
    return z !== 0 ? z : v.id - L.id;
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
  var a = [], f = [], m = 1, y = null, p = 3, S = !1, w = !1, C = !1, M = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(v) {
    for (var L = t(f); L !== null; ) {
      if (L.callback === null) r(f);
      else if (L.startTime <= v) r(f), L.sortIndex = L.expirationTime, n(a, L);
      else break;
      L = t(f);
    }
  }
  function g(v) {
    if (C = !1, d(v), !w) if (t(a) !== null) w = !0, x(E);
    else {
      var L = t(f);
      L !== null && I(g, L.startTime - v);
    }
  }
  function E(v, L) {
    w = !1, C && (C = !1, c(R), R = -1), S = !0;
    var z = p;
    try {
      for (d(L), y = t(a); y !== null && (!(y.expirationTime > L) || v && !ae()); ) {
        var A = y.callback;
        if (typeof A == "function") {
          y.callback = null, p = y.priorityLevel;
          var Y = A(y.expirationTime <= L);
          L = e.unstable_now(), typeof Y == "function" ? y.callback = Y : y === t(a) && r(a), d(L);
        } else r(a);
        y = t(a);
      }
      if (y !== null) var Ue = !0;
      else {
        var We = t(f);
        We !== null && I(g, We.startTime - L), Ue = !1;
      }
      return Ue;
    } finally {
      y = null, p = z, S = !1;
    }
  }
  var P = !1, _ = null, R = -1, O = 5, D = -1;
  function ae() {
    return !(e.unstable_now() - D < O);
  }
  function xn() {
    if (_ !== null) {
      var v = e.unstable_now();
      D = v;
      var L = !0;
      try {
        L = _(!0, v);
      } finally {
        L ? ze() : (P = !1, _ = null);
      }
    } else P = !1;
  }
  var ze;
  if (typeof s == "function") ze = function() {
    s(xn);
  };
  else if (typeof MessageChannel < "u") {
    var tr = new MessageChannel(), rr = tr.port2;
    tr.port1.onmessage = xn, ze = function() {
      rr.postMessage(null);
    };
  } else ze = function() {
    M(xn, 0);
  };
  function x(v) {
    _ = v, P || (P = !0, ze());
  }
  function I(v, L) {
    R = M(function() {
      v(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(v) {
    v.callback = null;
  }, e.unstable_continueExecution = function() {
    w || S || (w = !0, x(E));
  }, e.unstable_forceFrameRate = function(v) {
    0 > v || 125 < v ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < v ? Math.floor(1e3 / v) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(v) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = p;
    }
    var z = p;
    p = L;
    try {
      return v();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(v, L) {
    switch (v) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        v = 3;
    }
    var z = p;
    p = v;
    try {
      return L();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(v, L, z) {
    var A = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? A + z : A) : z = A, v) {
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
    return Y = z + Y, v = { id: m++, callback: L, priorityLevel: v, startTime: z, expirationTime: Y, sortIndex: -1 }, z > A ? (v.sortIndex = z, n(f, v), t(a) === null && v === t(f) && (C ? (c(R), R = -1) : C = !0, I(g, z - A))) : (v.sortIndex = Y, n(a, v), w || S || (w = !0, x(E))), v;
  }, e.unstable_shouldYield = ae, e.unstable_wrapCallback = function(v) {
    var L = p;
    return function() {
      var z = p;
      p = L;
      try {
        return v.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(ua);
ia.exports = ua;
var Pc = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = q, ke = Pc;
function h(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var aa = /* @__PURE__ */ new Set(), Mt = {};
function On(e, n) {
  rt(e, n), rt(e + "Capture", n);
}
function rt(e, n) {
  for (Mt[e] = n, e = 0; e < n.length; e++) aa.add(n[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xl = Object.prototype.hasOwnProperty, Lc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $i = {}, Vi = {};
function zc(e) {
  return Xl.call(Vi, e) ? !0 : Xl.call($i, e) ? !1 : Lc.test(e) ? Vi[e] = !0 : ($i[e] = !0, !1);
}
function Tc(e, n, t, r) {
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
function Dc(e, n, t, r) {
  if (n === null || typeof n > "u" || Tc(e, n, t, r)) return !0;
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
function de(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  re[n] = new de(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qo = /[\-:]([a-z])/g;
function Go(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Qo,
    Go
  );
  re[n] = new de(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Qo, Go);
  re[n] = new de(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Qo, Go);
  re[n] = new de(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yo(e, n, t, r) {
  var l = re.hasOwnProperty(n) ? re[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Dc(n, t, l, r) && (t = null), r || l === null ? zc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var en = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ir = Symbol.for("react.element"), An = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), Xo = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), sa = Symbol.for("react.provider"), ca = Symbol.for("react.context"), Zo = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ql = Symbol.for("react.suspense_list"), Jo = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), fa = Symbol.for("react.offscreen"), Hi = Symbol.iterator;
function pt(e) {
  return e === null || typeof e != "object" ? null : (e = Hi && e[Hi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var K = Object.assign, Cl;
function kt(e) {
  if (Cl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    Cl = n && n[1] || "";
  }
  return `
` + Cl + e;
}
var El = !1;
function Nl(e, n) {
  if (!e || El) return "";
  El = !0;
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
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], n);
    } else {
      try {
        n.call();
      } catch (f) {
        r = f;
      }
      e.call(n.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
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
    El = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? kt(e) : "";
}
function jc(e) {
  switch (e.tag) {
    case 5:
      return kt(e.type);
    case 16:
      return kt("Lazy");
    case 13:
      return kt("Suspense");
    case 19:
      return kt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Nl(e.type, !1), e;
    case 11:
      return e = Nl(e.type.render, !1), e;
    case 1:
      return e = Nl(e.type, !0), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case An:
      return "Portal";
    case Zl:
      return "Profiler";
    case Xo:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ca:
      return (e.displayName || "Context") + ".Consumer";
    case sa:
      return (e._context.displayName || "Context") + ".Provider";
    case Zo:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Jo:
      return n = e.displayName || null, n !== null ? n : bl(e.type) || "Memo";
    case tn:
      n = e._payload, e = e._init;
      try {
        return bl(e(n));
      } catch {
      }
  }
  return null;
}
function Mc(e) {
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
      return bl(n);
    case 8:
      return n === Xo ? "StrictMode" : "Mode";
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
function hn(e) {
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
function da(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Fc(e) {
  var n = da(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function ur(e) {
  e._valueTracker || (e._valueTracker = Fc(e));
}
function pa(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = da(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, n) {
  var t = n.checked;
  return K({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Wi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = hn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function ma(e, n) {
  n = n.checked, n != null && Yo(e, "checked", n, !1);
}
function no(e, n) {
  ma(e, n);
  var t = hn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? to(e, n.type, t) : n.hasOwnProperty("defaultValue") && to(e, n.type, hn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Ki(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function to(e, n, t) {
  (n !== "number" || Fr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var xt = Array.isArray;
function Jn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + hn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ro(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(h(91));
  return K({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Qi(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(h(92));
      if (xt(t)) {
        if (1 < t.length) throw Error(h(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: hn(t) };
}
function ya(e, n) {
  var t = hn(n.value), r = hn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Gi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ga(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ga(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ar, ha = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (ar = ar || document.createElement("div"), ar.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ar.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Ft(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Nt = {
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
}, Oc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nt).forEach(function(e) {
  Oc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Nt[n] = Nt[e];
  });
});
function va(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Nt.hasOwnProperty(e) && Nt[e] ? ("" + n).trim() : n + "px";
}
function Sa(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = va(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var Ic = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function oo(e, n) {
  if (n) {
    if (Ic[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(h(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(h(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(h(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(h(62));
  }
}
function io(e, n) {
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
var uo = null;
function qo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ao = null, qn = null, bn = null;
function Yi(e) {
  if (e = er(e)) {
    if (typeof ao != "function") throw Error(h(280));
    var n = e.stateNode;
    n && (n = cl(n), ao(e.stateNode, e.type, n));
  }
}
function wa(e) {
  qn ? bn ? bn.push(e) : bn = [e] : qn = e;
}
function ka() {
  if (qn) {
    var e = qn, n = bn;
    if (bn = qn = null, Yi(e), n) for (e = 0; e < n.length; e++) Yi(n[e]);
  }
}
function xa(e, n) {
  return e(n);
}
function Ca() {
}
var _l = !1;
function Ea(e, n, t) {
  if (_l) return e(n, t);
  _l = !0;
  try {
    return xa(e, n, t);
  } finally {
    _l = !1, (qn !== null || bn !== null) && (Ca(), ka());
  }
}
function Ot(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = cl(t);
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
  if (t && typeof t != "function") throw Error(h(231, n, typeof t));
  return t;
}
var so = !1;
if (Ze) try {
  var mt = {};
  Object.defineProperty(mt, "passive", { get: function() {
    so = !0;
  } }), window.addEventListener("test", mt, mt), window.removeEventListener("test", mt, mt);
} catch {
  so = !1;
}
function Uc(e, n, t, r, l, o, i, u, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, f);
  } catch (m) {
    this.onError(m);
  }
}
var _t = !1, Or = null, Ir = !1, co = null, Ac = { onError: function(e) {
  _t = !0, Or = e;
} };
function Bc(e, n, t, r, l, o, i, u, a) {
  _t = !1, Or = null, Uc.apply(Ac, arguments);
}
function $c(e, n, t, r, l, o, i, u, a) {
  if (Bc.apply(this, arguments), _t) {
    if (_t) {
      var f = Or;
      _t = !1, Or = null;
    } else throw Error(h(198));
    Ir || (Ir = !0, co = f);
  }
}
function In(e) {
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
function Na(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Xi(e) {
  if (In(e) !== e) throw Error(h(188));
}
function Vc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = In(e), n === null) throw Error(h(188));
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
        if (o === t) return Xi(l), e;
        if (o === r) return Xi(l), n;
        o = o.sibling;
      }
      throw Error(h(188));
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
        if (!i) throw Error(h(189));
      }
    }
    if (t.alternate !== r) throw Error(h(190));
  }
  if (t.tag !== 3) throw Error(h(188));
  return t.stateNode.current === t ? e : n;
}
function _a(e) {
  return e = Vc(e), e !== null ? Pa(e) : null;
}
function Pa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Pa(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ra = ke.unstable_scheduleCallback, Zi = ke.unstable_cancelCallback, Hc = ke.unstable_shouldYield, Wc = ke.unstable_requestPaint, G = ke.unstable_now, Kc = ke.unstable_getCurrentPriorityLevel, bo = ke.unstable_ImmediatePriority, La = ke.unstable_UserBlockingPriority, Ur = ke.unstable_NormalPriority, Qc = ke.unstable_LowPriority, za = ke.unstable_IdlePriority, il = null, Ve = null;
function Gc(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
    Ve.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : Zc, Yc = Math.log, Xc = Math.LN2;
function Zc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Yc(e) / Xc | 0) | 0;
}
var sr = 64, cr = 4194304;
function Ct(e) {
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
function Ar(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Ct(u) : (o &= i, o !== 0 && (r = Ct(o)));
  } else i = t & ~l, i !== 0 ? r = Ct(i) : o !== 0 && (r = Ct(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Fe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Jc(e, n) {
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
function qc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Fe(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = Jc(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function fo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ta() {
  var e = sr;
  return sr <<= 1, !(sr & 4194240) && (sr = 64), e;
}
function Pl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function qt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Fe(n), e[n] = t;
}
function bc(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Fe(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function ei(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Fe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var F = 0;
function Da(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ja, ni, Ma, Fa, Oa, po = !1, fr = [], sn = null, cn = null, fn = null, It = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), ln = [], ef = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ji(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      cn = null;
      break;
    case "mouseover":
    case "mouseout":
      fn = null;
      break;
    case "pointerover":
    case "pointerout":
      It.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ut.delete(n.pointerId);
  }
}
function yt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = er(n), n !== null && ni(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function nf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return sn = yt(sn, e, n, t, r, l), !0;
    case "dragenter":
      return cn = yt(cn, e, n, t, r, l), !0;
    case "mouseover":
      return fn = yt(fn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return It.set(o, yt(It.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Ut.set(o, yt(Ut.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Ia(e) {
  var n = _n(e.target);
  if (n !== null) {
    var t = In(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Na(t), n !== null) {
          e.blockedOn = n, Oa(e.priority, function() {
            Ma(t);
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
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = mo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      uo = r, t.target.dispatchEvent(r), uo = null;
    } else return n = er(t), n !== null && ni(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function qi(e, n, t) {
  Nr(e) && t.delete(n);
}
function tf() {
  po = !1, sn !== null && Nr(sn) && (sn = null), cn !== null && Nr(cn) && (cn = null), fn !== null && Nr(fn) && (fn = null), It.forEach(qi), Ut.forEach(qi);
}
function gt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, po || (po = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, tf)));
}
function At(e) {
  function n(l) {
    return gt(l, e);
  }
  if (0 < fr.length) {
    gt(fr[0], e);
    for (var t = 1; t < fr.length; t++) {
      var r = fr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (sn !== null && gt(sn, e), cn !== null && gt(cn, e), fn !== null && gt(fn, e), It.forEach(n), Ut.forEach(n), t = 0; t < ln.length; t++) r = ln[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && (t = ln[0], t.blockedOn === null); ) Ia(t), t.blockedOn === null && ln.shift();
}
var et = en.ReactCurrentBatchConfig, Br = !0;
function rf(e, n, t, r) {
  var l = F, o = et.transition;
  et.transition = null;
  try {
    F = 1, ti(e, n, t, r);
  } finally {
    F = l, et.transition = o;
  }
}
function lf(e, n, t, r) {
  var l = F, o = et.transition;
  et.transition = null;
  try {
    F = 4, ti(e, n, t, r);
  } finally {
    F = l, et.transition = o;
  }
}
function ti(e, n, t, r) {
  if (Br) {
    var l = mo(e, n, t, r);
    if (l === null) Il(e, n, r, $r, t), Ji(e, r);
    else if (nf(l, e, n, t, r)) r.stopPropagation();
    else if (Ji(e, r), n & 4 && -1 < ef.indexOf(e)) {
      for (; l !== null; ) {
        var o = er(l);
        if (o !== null && ja(o), o = mo(e, n, t, r), o === null && Il(e, n, r, $r, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Il(e, n, r, null, t);
  }
}
var $r = null;
function mo(e, n, t, r) {
  if ($r = null, e = qo(r), e = _n(e), e !== null) if (n = In(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Na(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return $r = e, null;
}
function Ua(e) {
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
      switch (Kc()) {
        case bo:
          return 1;
        case La:
          return 4;
        case Ur:
        case Qc:
          return 16;
        case za:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var un = null, ri = null, _r = null;
function Aa() {
  if (_r) return _r;
  var e, n = ri, t = n.length, r, l = "value" in un ? un.value : un.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return _r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function dr() {
  return !0;
}
function bi() {
  return !1;
}
function Ce(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? dr : bi, this.isPropagationStopped = bi, this;
  }
  return K(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = dr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = dr);
  }, persist: function() {
  }, isPersistent: dr }), n;
}
var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, li = Ce(ft), bt = K({}, ft, { view: 0, detail: 0 }), of = Ce(bt), Rl, Ll, ht, ul = K({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: oi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ht && (ht && e.type === "mousemove" ? (Rl = e.screenX - ht.screenX, Ll = e.screenY - ht.screenY) : Ll = Rl = 0, ht = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ll;
} }), eu = Ce(ul), uf = K({}, ul, { dataTransfer: 0 }), af = Ce(uf), sf = K({}, bt, { relatedTarget: 0 }), zl = Ce(sf), cf = K({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ff = Ce(cf), df = K({}, ft, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), pf = Ce(df), mf = K({}, ft, { data: 0 }), nu = Ce(mf), yf = {
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
}, gf = {
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
}, hf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = hf[e]) ? !!n[e] : !1;
}
function oi() {
  return vf;
}
var Sf = K({}, bt, { key: function(e) {
  if (e.key) {
    var n = yf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Pr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: oi, charCode: function(e) {
  return e.type === "keypress" ? Pr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), wf = Ce(Sf), kf = K({}, ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tu = Ce(kf), xf = K({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: oi }), Cf = Ce(xf), Ef = K({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nf = Ce(Ef), _f = K({}, ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Pf = Ce(_f), Rf = [9, 13, 27, 32], ii = Ze && "CompositionEvent" in window, Pt = null;
Ze && "documentMode" in document && (Pt = document.documentMode);
var Lf = Ze && "TextEvent" in window && !Pt, Ba = Ze && (!ii || Pt && 8 < Pt && 11 >= Pt), ru = " ", lu = !1;
function $a(e, n) {
  switch (e) {
    case "keyup":
      return Rf.indexOf(n.keyCode) !== -1;
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
function Va(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var $n = !1;
function zf(e, n) {
  switch (e) {
    case "compositionend":
      return Va(n);
    case "keypress":
      return n.which !== 32 ? null : (lu = !0, ru);
    case "textInput":
      return e = n.data, e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Tf(e, n) {
  if ($n) return e === "compositionend" || !ii && $a(e, n) ? (e = Aa(), _r = ri = un = null, $n = !1, e) : null;
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
      return Ba && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Df = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ou(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Df[e.type] : n === "textarea";
}
function Ha(e, n, t, r) {
  wa(r), n = Vr(n, "onChange"), 0 < n.length && (t = new li("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Rt = null, Bt = null;
function jf(e) {
  es(e, 0);
}
function al(e) {
  var n = Wn(e);
  if (pa(n)) return e;
}
function Mf(e, n) {
  if (e === "change") return n;
}
var Wa = !1;
if (Ze) {
  var Tl;
  if (Ze) {
    var Dl = "oninput" in document;
    if (!Dl) {
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"), Dl = typeof iu.oninput == "function";
    }
    Tl = Dl;
  } else Tl = !1;
  Wa = Tl && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  Rt && (Rt.detachEvent("onpropertychange", Ka), Bt = Rt = null);
}
function Ka(e) {
  if (e.propertyName === "value" && al(Bt)) {
    var n = [];
    Ha(n, Bt, e, qo(e)), Ea(jf, n);
  }
}
function Ff(e, n, t) {
  e === "focusin" ? (uu(), Rt = n, Bt = t, Rt.attachEvent("onpropertychange", Ka)) : e === "focusout" && uu();
}
function Of(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return al(Bt);
}
function If(e, n) {
  if (e === "click") return al(n);
}
function Uf(e, n) {
  if (e === "input" || e === "change") return al(n);
}
function Af(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Ie = typeof Object.is == "function" ? Object.is : Af;
function $t(e, n) {
  if (Ie(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Xl.call(n, l) || !Ie(e[l], n[l])) return !1;
  }
  return !0;
}
function au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, n) {
  var t = au(e);
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
    t = au(t);
  }
}
function Qa(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Qa(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Ga() {
  for (var e = window, n = Fr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Fr(e.document);
  }
  return n;
}
function ui(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Bf(e) {
  var n = Ga(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Qa(t.ownerDocument.documentElement, t)) {
    if (r !== null && ui(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = su(t, o);
        var i = su(
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
var $f = Ze && "documentMode" in document && 11 >= document.documentMode, Vn = null, yo = null, Lt = null, go = !1;
function cu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  go || Vn == null || Vn !== Fr(r) || (r = Vn, "selectionStart" in r && ui(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lt && $t(Lt, r) || (Lt = r, r = Vr(yo, "onSelect"), 0 < r.length && (n = new li("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Vn)));
}
function pr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Hn = { animationend: pr("Animation", "AnimationEnd"), animationiteration: pr("Animation", "AnimationIteration"), animationstart: pr("Animation", "AnimationStart"), transitionend: pr("Transition", "TransitionEnd") }, jl = {}, Ya = {};
Ze && (Ya = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
function sl(e) {
  if (jl[e]) return jl[e];
  if (!Hn[e]) return e;
  var n = Hn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ya) return jl[e] = n[t];
  return e;
}
var Xa = sl("animationend"), Za = sl("animationiteration"), Ja = sl("animationstart"), qa = sl("transitionend"), ba = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Sn(e, n) {
  ba.set(e, n), On(n, [e]);
}
for (var Ml = 0; Ml < fu.length; Ml++) {
  var Fl = fu[Ml], Vf = Fl.toLowerCase(), Hf = Fl[0].toUpperCase() + Fl.slice(1);
  Sn(Vf, "on" + Hf);
}
Sn(Xa, "onAnimationEnd");
Sn(Za, "onAnimationIteration");
Sn(Ja, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(qa, "onTransitionEnd");
rt("onMouseEnter", ["mouseout", "mouseover"]);
rt("onMouseLeave", ["mouseout", "mouseover"]);
rt("onPointerEnter", ["pointerout", "pointerover"]);
rt("onPointerLeave", ["pointerout", "pointerover"]);
On("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
On("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));
function du(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, $c(r, n, void 0, e), e.currentTarget = null;
}
function es(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, f = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        du(l, u, f), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, f = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        du(l, u, f), o = a;
      }
    }
  }
  if (Ir) throw e = co, Ir = !1, co = null, e;
}
function B(e, n) {
  var t = n[ko];
  t === void 0 && (t = n[ko] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (ns(n, e, 2, !1), t.add(r));
}
function Ol(e, n, t) {
  var r = 0;
  n && (r |= 4), ns(t, e, r, n);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Vt(e) {
  if (!e[mr]) {
    e[mr] = !0, aa.forEach(function(t) {
      t !== "selectionchange" && (Wf.has(t) || Ol(t, !1, e), Ol(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[mr] || (n[mr] = !0, Ol("selectionchange", !1, n));
  }
}
function ns(e, n, t, r) {
  switch (Ua(n)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = ti;
  }
  t = l.bind(null, n, t, e), l = void 0, !so || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Il(e, n, t, r, l) {
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
        if (i = _n(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Ea(function() {
    var f = o, m = qo(t), y = [];
    e: {
      var p = ba.get(e);
      if (p !== void 0) {
        var S = li, w = e;
        switch (e) {
          case "keypress":
            if (Pr(t) === 0) break e;
          case "keydown":
          case "keyup":
            S = wf;
            break;
          case "focusin":
            w = "focus", S = zl;
            break;
          case "focusout":
            w = "blur", S = zl;
            break;
          case "beforeblur":
          case "afterblur":
            S = zl;
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
            S = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Cf;
            break;
          case Xa:
          case Za:
          case Ja:
            S = ff;
            break;
          case qa:
            S = Nf;
            break;
          case "scroll":
            S = of;
            break;
          case "wheel":
            S = Pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = tu;
        }
        var C = (n & 4) !== 0, M = !C && e === "scroll", c = C ? p !== null ? p + "Capture" : null : p;
        C = [];
        for (var s = f, d; s !== null; ) {
          d = s;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, c !== null && (g = Ot(s, c), g != null && C.push(Ht(s, g, d)))), M) break;
          s = s.return;
        }
        0 < C.length && (p = new S(p, w, null, t, m), y.push({ event: p, listeners: C }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && t !== uo && (w = t.relatedTarget || t.fromElement) && (_n(w) || w[Je])) break e;
        if ((S || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (w = t.relatedTarget || t.toElement, S = f, w = w ? _n(w) : null, w !== null && (M = In(w), w !== M || w.tag !== 5 && w.tag !== 6) && (w = null)) : (S = null, w = f), S !== w)) {
          if (C = eu, g = "onMouseLeave", c = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (C = tu, g = "onPointerLeave", c = "onPointerEnter", s = "pointer"), M = S == null ? p : Wn(S), d = w == null ? p : Wn(w), p = new C(g, s + "leave", S, t, m), p.target = M, p.relatedTarget = d, g = null, _n(m) === f && (C = new C(c, s + "enter", w, t, m), C.target = d, C.relatedTarget = M, g = C), M = g, S && w) n: {
            for (C = S, c = w, s = 0, d = C; d; d = Un(d)) s++;
            for (d = 0, g = c; g; g = Un(g)) d++;
            for (; 0 < s - d; ) C = Un(C), s--;
            for (; 0 < d - s; ) c = Un(c), d--;
            for (; s--; ) {
              if (C === c || c !== null && C === c.alternate) break n;
              C = Un(C), c = Un(c);
            }
            C = null;
          }
          else C = null;
          S !== null && pu(y, p, S, C, !1), w !== null && M !== null && pu(y, M, w, C, !0);
        }
      }
      e: {
        if (p = f ? Wn(f) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var E = Mf;
        else if (ou(p)) if (Wa) E = Uf;
        else {
          E = Of;
          var P = Ff;
        }
        else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = If);
        if (E && (E = E(e, f))) {
          Ha(y, E, t, m);
          break e;
        }
        P && P(e, p, f), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && to(p, "number", p.value);
      }
      switch (P = f ? Wn(f) : window, e) {
        case "focusin":
          (ou(P) || P.contentEditable === "true") && (Vn = P, yo = f, Lt = null);
          break;
        case "focusout":
          Lt = yo = Vn = null;
          break;
        case "mousedown":
          go = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          go = !1, cu(y, t, m);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          cu(y, t, m);
      }
      var _;
      if (ii) e: {
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
      else $n ? $a(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
      R && (Ba && t.locale !== "ko" && ($n || R !== "onCompositionStart" ? R === "onCompositionEnd" && $n && (_ = Aa()) : (un = m, ri = "value" in un ? un.value : un.textContent, $n = !0)), P = Vr(f, R), 0 < P.length && (R = new nu(R, e, null, t, m), y.push({ event: R, listeners: P }), _ ? R.data = _ : (_ = Va(t), _ !== null && (R.data = _)))), (_ = Lf ? zf(e, t) : Tf(e, t)) && (f = Vr(f, "onBeforeInput"), 0 < f.length && (m = new nu("onBeforeInput", "beforeinput", null, t, m), y.push({ event: m, listeners: f }), m.data = _));
    }
    es(y, n);
  });
}
function Ht(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Vr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Ot(e, t), o != null && r.unshift(Ht(e, o, l)), o = Ot(e, n), o != null && r.push(Ht(e, o, l))), e = e.return;
  }
  return r;
}
function Un(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, f = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (a = Ot(t, o), a != null && i.unshift(Ht(t, a, u))) : l || (a = Ot(t, o), a != null && i.push(Ht(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Kf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Kf, `
`).replace(Qf, "");
}
function yr(e, n, t) {
  if (n = mu(n), mu(e) !== n && t) throw Error(h(425));
}
function Hr() {
}
var ho = null, vo = null;
function So(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var wo = typeof setTimeout == "function" ? setTimeout : void 0, Gf = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
  return yu.resolve(null).then(e).catch(Xf);
} : wo;
function Xf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), At(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  At(n);
}
function dn(e) {
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
function gu(e) {
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
var dt = Math.random().toString(36).slice(2), $e = "__reactFiber$" + dt, Wt = "__reactProps$" + dt, Je = "__reactContainer$" + dt, ko = "__reactEvents$" + dt, Zf = "__reactListeners$" + dt, Jf = "__reactHandles$" + dt;
function _n(e) {
  var n = e[$e];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Je] || t[$e]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = gu(e); e !== null; ) {
        if (t = e[$e]) return t;
        e = gu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function er(e) {
  return e = e[$e] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(h(33));
}
function cl(e) {
  return e[Wt] || null;
}
var xo = [], Kn = -1;
function wn(e) {
  return { current: e };
}
function $(e) {
  0 > Kn || (e.current = xo[Kn], xo[Kn] = null, Kn--);
}
function U(e, n) {
  Kn++, xo[Kn] = e.current, e.current = n;
}
var vn = {}, ue = wn(vn), ye = wn(!1), Tn = vn;
function lt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function Wr() {
  $(ye), $(ue);
}
function hu(e, n, t) {
  if (ue.current !== vn) throw Error(h(168));
  U(ue, n), U(ye, t);
}
function ts(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(h(108, Mc(e) || "Unknown", l));
  return K({}, t, r);
}
function Kr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, Tn = ue.current, U(ue, e), U(ye, ye.current), !0;
}
function vu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(h(169));
  t ? (e = ts(e, n, Tn), r.__reactInternalMemoizedMergedChildContext = e, $(ye), $(ue), U(ue, e)) : $(ye), U(ye, t);
}
var Qe = null, fl = !1, Al = !1;
function rs(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function qf(e) {
  fl = !0, rs(e);
}
function kn() {
  if (!Al && Qe !== null) {
    Al = !0;
    var e = 0, n = F;
    try {
      var t = Qe;
      for (F = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Qe = null, fl = !1;
    } catch (l) {
      throw Qe !== null && (Qe = Qe.slice(e + 1)), Ra(bo, kn), l;
    } finally {
      F = n, Al = !1;
    }
  }
  return null;
}
var Qn = [], Gn = 0, Qr = null, Gr = 0, Ee = [], Ne = 0, Dn = null, Ge = 1, Ye = "";
function En(e, n) {
  Qn[Gn++] = Gr, Qn[Gn++] = Qr, Qr = e, Gr = n;
}
function ls(e, n, t) {
  Ee[Ne++] = Ge, Ee[Ne++] = Ye, Ee[Ne++] = Dn, Dn = e;
  var r = Ge;
  e = Ye;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Fe(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ge = 1 << 32 - Fe(n) + l | t << l | r, Ye = o + e;
  } else Ge = 1 << o | t << l | r, Ye = e;
}
function ai(e) {
  e.return !== null && (En(e, 1), ls(e, 1, 0));
}
function si(e) {
  for (; e === Qr; ) Qr = Qn[--Gn], Qn[Gn] = null, Gr = Qn[--Gn], Qn[Gn] = null;
  for (; e === Dn; ) Dn = Ee[--Ne], Ee[Ne] = null, Ye = Ee[--Ne], Ee[Ne] = null, Ge = Ee[--Ne], Ee[Ne] = null;
}
var we = null, Se = null, V = !1, Me = null;
function os(e, n) {
  var t = _e(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Su(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, we = e, Se = dn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, we = e, Se = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Dn !== null ? { id: Ge, overflow: Ye } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = _e(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, we = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function Co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
  if (V) {
    var n = Se;
    if (n) {
      var t = n;
      if (!Su(e, n)) {
        if (Co(e)) throw Error(h(418));
        n = dn(t.nextSibling);
        var r = we;
        n && Su(e, n) ? os(r, t) : (e.flags = e.flags & -4097 | 2, V = !1, we = e);
      }
    } else {
      if (Co(e)) throw Error(h(418));
      e.flags = e.flags & -4097 | 2, V = !1, we = e;
    }
  }
}
function wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function gr(e) {
  if (e !== we) return !1;
  if (!V) return wu(e), V = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !So(e.type, e.memoizedProps)), n && (n = Se)) {
    if (Co(e)) throw is(), Error(h(418));
    for (; n; ) os(e, n), n = dn(n.nextSibling);
  }
  if (wu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Se = dn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = we ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function is() {
  for (var e = Se; e; ) e = dn(e.nextSibling);
}
function ot() {
  Se = we = null, V = !1;
}
function ci(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var bf = en.ReactCurrentBatchConfig;
function vt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(h(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(h(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string") throw Error(h(284));
    if (!t._owner) throw Error(h(290, e));
  }
  return e;
}
function hr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(h(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function ku(e) {
  var n = e._init;
  return n(e._payload);
}
function us(e) {
  function n(c, s) {
    if (e) {
      var d = c.deletions;
      d === null ? (c.deletions = [s], c.flags |= 16) : d.push(s);
    }
  }
  function t(c, s) {
    if (!e) return null;
    for (; s !== null; ) n(c, s), s = s.sibling;
    return null;
  }
  function r(c, s) {
    for (c = /* @__PURE__ */ new Map(); s !== null; ) s.key !== null ? c.set(s.key, s) : c.set(s.index, s), s = s.sibling;
    return c;
  }
  function l(c, s) {
    return c = gn(c, s), c.index = 0, c.sibling = null, c;
  }
  function o(c, s, d) {
    return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < s ? (c.flags |= 2, s) : d) : (c.flags |= 2, s)) : (c.flags |= 1048576, s);
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, s, d, g) {
    return s === null || s.tag !== 6 ? (s = Ql(d, c.mode, g), s.return = c, s) : (s = l(s, d), s.return = c, s);
  }
  function a(c, s, d, g) {
    var E = d.type;
    return E === Bn ? m(c, s, d.props.children, g, d.key) : s !== null && (s.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tn && ku(E) === s.type) ? (g = l(s, d.props), g.ref = vt(c, s, d), g.return = c, g) : (g = Mr(d.type, d.key, d.props, null, c.mode, g), g.ref = vt(c, s, d), g.return = c, g);
  }
  function f(c, s, d, g) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Gl(d, c.mode, g), s.return = c, s) : (s = l(s, d.children || []), s.return = c, s);
  }
  function m(c, s, d, g, E) {
    return s === null || s.tag !== 7 ? (s = zn(d, c.mode, g, E), s.return = c, s) : (s = l(s, d), s.return = c, s);
  }
  function y(c, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = Ql("" + s, c.mode, d), s.return = c, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case ir:
          return d = Mr(s.type, s.key, s.props, null, c.mode, d), d.ref = vt(c, null, s), d.return = c, d;
        case An:
          return s = Gl(s, c.mode, d), s.return = c, s;
        case tn:
          var g = s._init;
          return y(c, g(s._payload), d);
      }
      if (xt(s) || pt(s)) return s = zn(s, c.mode, d, null), s.return = c, s;
      hr(c, s);
    }
    return null;
  }
  function p(c, s, d, g) {
    var E = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(c, s, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === E ? a(c, s, d, g) : null;
        case An:
          return d.key === E ? f(c, s, d, g) : null;
        case tn:
          return E = d._init, p(
            c,
            s,
            E(d._payload),
            g
          );
      }
      if (xt(d) || pt(d)) return E !== null ? null : m(c, s, d, g, null);
      hr(c, d);
    }
    return null;
  }
  function S(c, s, d, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return c = c.get(d) || null, u(s, c, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ir:
          return c = c.get(g.key === null ? d : g.key) || null, a(s, c, g, E);
        case An:
          return c = c.get(g.key === null ? d : g.key) || null, f(s, c, g, E);
        case tn:
          var P = g._init;
          return S(c, s, d, P(g._payload), E);
      }
      if (xt(g) || pt(g)) return c = c.get(d) || null, m(s, c, g, E, null);
      hr(s, g);
    }
    return null;
  }
  function w(c, s, d, g) {
    for (var E = null, P = null, _ = s, R = s = 0, O = null; _ !== null && R < d.length; R++) {
      _.index > R ? (O = _, _ = null) : O = _.sibling;
      var D = p(c, _, d[R], g);
      if (D === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && D.alternate === null && n(c, _), s = o(D, s, R), P === null ? E = D : P.sibling = D, P = D, _ = O;
    }
    if (R === d.length) return t(c, _), V && En(c, R), E;
    if (_ === null) {
      for (; R < d.length; R++) _ = y(c, d[R], g), _ !== null && (s = o(_, s, R), P === null ? E = _ : P.sibling = _, P = _);
      return V && En(c, R), E;
    }
    for (_ = r(c, _); R < d.length; R++) O = S(_, c, R, d[R], g), O !== null && (e && O.alternate !== null && _.delete(O.key === null ? R : O.key), s = o(O, s, R), P === null ? E = O : P.sibling = O, P = O);
    return e && _.forEach(function(ae) {
      return n(c, ae);
    }), V && En(c, R), E;
  }
  function C(c, s, d, g) {
    var E = pt(d);
    if (typeof E != "function") throw Error(h(150));
    if (d = E.call(d), d == null) throw Error(h(151));
    for (var P = E = null, _ = s, R = s = 0, O = null, D = d.next(); _ !== null && !D.done; R++, D = d.next()) {
      _.index > R ? (O = _, _ = null) : O = _.sibling;
      var ae = p(c, _, D.value, g);
      if (ae === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && ae.alternate === null && n(c, _), s = o(ae, s, R), P === null ? E = ae : P.sibling = ae, P = ae, _ = O;
    }
    if (D.done) return t(
      c,
      _
    ), V && En(c, R), E;
    if (_ === null) {
      for (; !D.done; R++, D = d.next()) D = y(c, D.value, g), D !== null && (s = o(D, s, R), P === null ? E = D : P.sibling = D, P = D);
      return V && En(c, R), E;
    }
    for (_ = r(c, _); !D.done; R++, D = d.next()) D = S(_, c, R, D.value, g), D !== null && (e && D.alternate !== null && _.delete(D.key === null ? R : D.key), s = o(D, s, R), P === null ? E = D : P.sibling = D, P = D);
    return e && _.forEach(function(xn) {
      return n(c, xn);
    }), V && En(c, R), E;
  }
  function M(c, s, d, g) {
    if (typeof d == "object" && d !== null && d.type === Bn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var E = d.key, P = s; P !== null; ) {
              if (P.key === E) {
                if (E = d.type, E === Bn) {
                  if (P.tag === 7) {
                    t(c, P.sibling), s = l(P, d.props.children), s.return = c, c = s;
                    break e;
                  }
                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === tn && ku(E) === P.type) {
                  t(c, P.sibling), s = l(P, d.props), s.ref = vt(c, P, d), s.return = c, c = s;
                  break e;
                }
                t(c, P);
                break;
              } else n(c, P);
              P = P.sibling;
            }
            d.type === Bn ? (s = zn(d.props.children, c.mode, g, d.key), s.return = c, c = s) : (g = Mr(d.type, d.key, d.props, null, c.mode, g), g.ref = vt(c, s, d), g.return = c, c = g);
          }
          return i(c);
        case An:
          e: {
            for (P = d.key; s !== null; ) {
              if (s.key === P) if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                t(c, s.sibling), s = l(s, d.children || []), s.return = c, c = s;
                break e;
              } else {
                t(c, s);
                break;
              }
              else n(c, s);
              s = s.sibling;
            }
            s = Gl(d, c.mode, g), s.return = c, c = s;
          }
          return i(c);
        case tn:
          return P = d._init, M(c, s, P(d._payload), g);
      }
      if (xt(d)) return w(c, s, d, g);
      if (pt(d)) return C(c, s, d, g);
      hr(c, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(c, s.sibling), s = l(s, d), s.return = c, c = s) : (t(c, s), s = Ql(d, c.mode, g), s.return = c, c = s), i(c)) : t(c, s);
  }
  return M;
}
var it = us(!0), as = us(!1), Yr = wn(null), Xr = null, Yn = null, fi = null;
function di() {
  fi = Yn = Xr = null;
}
function pi(e) {
  var n = Yr.current;
  $(Yr), e._currentValue = n;
}
function No(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function nt(e, n) {
  Xr = e, fi = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (me = !0), e.firstContext = null);
}
function Re(e) {
  var n = e._currentValue;
  if (fi !== e) if (e = { context: e, memoizedValue: n, next: null }, Yn === null) {
    if (Xr === null) throw Error(h(308));
    Yn = e, Xr.dependencies = { lanes: 0, firstContext: e };
  } else Yn = Yn.next = e;
  return n;
}
var Pn = null;
function mi(e) {
  Pn === null ? Pn = [e] : Pn.push(e);
}
function ss(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, mi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, qe(e, r);
}
function qe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var rn = !1;
function yi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function cs(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xe(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function pn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, j & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, qe(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, mi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, qe(e, t);
}
function Rr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ei(e, t);
  }
}
function xu(e, n) {
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
function Zr(e, n, t, r) {
  var l = e.updateQueue;
  rn = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, f = a.next;
    a.next = null, i === null ? o = f : i.next = f, i = a;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== i && (u === null ? m.firstBaseUpdate = f : u.next = f, m.lastBaseUpdate = a));
  }
  if (o !== null) {
    var y = l.baseState;
    i = 0, m = f = a = null, u = o;
    do {
      var p = u.lane, S = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, C = u;
          switch (p = n, S = t, C.tag) {
            case 1:
              if (w = C.payload, typeof w == "function") {
                y = w.call(S, y, p);
                break e;
              }
              y = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = C.payload, p = typeof w == "function" ? w.call(S, y, p) : w, p == null) break e;
              y = K({}, y, p);
              break e;
            case 2:
              rn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else S = { eventTime: S, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (f = m = S, a = y) : m = m.next = S, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (a = y), l.baseState = a, l.firstBaseUpdate = f, l.lastBaseUpdate = m, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    Mn |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Cu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(h(191, l));
      l.call(r);
    }
  }
}
var nr = {}, He = wn(nr), Kt = wn(nr), Qt = wn(nr);
function Rn(e) {
  if (e === nr) throw Error(h(174));
  return e;
}
function gi(e, n) {
  switch (U(Qt, n), U(Kt, e), U(He, nr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : lo(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = lo(n, e);
  }
  $(He), U(He, n);
}
function ut() {
  $(He), $(Kt), $(Qt);
}
function fs(e) {
  Rn(Qt.current);
  var n = Rn(He.current), t = lo(n, e.type);
  n !== t && (U(Kt, e), U(He, t));
}
function hi(e) {
  Kt.current === e && ($(He), $(Kt));
}
var H = wn(0);
function Jr(e) {
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
var Bl = [];
function vi() {
  for (var e = 0; e < Bl.length; e++) Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Lr = en.ReactCurrentDispatcher, $l = en.ReactCurrentBatchConfig, jn = 0, W = null, Z = null, b = null, qr = !1, zt = !1, Gt = 0, ed = 0;
function le() {
  throw Error(h(321));
}
function Si(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Ie(e[t], n[t])) return !1;
  return !0;
}
function wi(e, n, t, r, l, o) {
  if (jn = o, W = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Lr.current = e === null || e.memoizedState === null ? ld : od, e = t(r, l), zt) {
    o = 0;
    do {
      if (zt = !1, Gt = 0, 25 <= o) throw Error(h(301));
      o += 1, b = Z = null, n.updateQueue = null, Lr.current = id, e = t(r, l);
    } while (zt);
  }
  if (Lr.current = br, n = Z !== null && Z.next !== null, jn = 0, b = Z = W = null, qr = !1, n) throw Error(h(300));
  return e;
}
function ki() {
  var e = Gt !== 0;
  return Gt = 0, e;
}
function Be() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return b === null ? W.memoizedState = b = e : b = b.next = e, b;
}
function Le() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var n = b === null ? W.memoizedState : b.next;
  if (n !== null) b = n, Z = e;
  else {
    if (e === null) throw Error(h(310));
    Z = e, e = { memoizedState: Z.memoizedState, baseState: Z.baseState, baseQueue: Z.baseQueue, queue: Z.queue, next: null }, b === null ? W.memoizedState = b = e : b = b.next = e;
  }
  return b;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Vl(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(h(311));
  t.lastRenderedReducer = e;
  var r = Z, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, a = null, f = o;
    do {
      var m = f.lane;
      if ((jn & m) === m) a !== null && (a = a.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var y = {
          lane: m,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        a === null ? (u = a = y, i = r) : a = a.next = y, W.lanes |= m, Mn |= m;
      }
      f = f.next;
    } while (f !== null && f !== o);
    a === null ? i = r : a.next = u, Ie(r, n.memoizedState) || (me = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, W.lanes |= o, Mn |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(h(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Ie(o, n.memoizedState) || (me = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ds() {
}
function ps(e, n) {
  var t = W, r = Le(), l = n(), o = !Ie(r.memoizedState, l);
  if (o && (r.memoizedState = l, me = !0), r = r.queue, xi(gs.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || b !== null && b.memoizedState.tag & 1) {
    if (t.flags |= 2048, Xt(9, ys.bind(null, t, r, l, n), void 0, null), ee === null) throw Error(h(349));
    jn & 30 || ms(t, n, l);
  }
  return l;
}
function ms(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = W.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, W.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function ys(e, n, t, r) {
  n.value = t, n.getSnapshot = r, hs(n) && vs(e);
}
function gs(e, n, t) {
  return t(function() {
    hs(n) && vs(e);
  });
}
function hs(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Ie(e, t);
  } catch {
    return !0;
  }
}
function vs(e) {
  var n = qe(e, 1);
  n !== null && Oe(n, e, 1, -1);
}
function Eu(e) {
  var n = Be();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: e }, n.queue = e, e = e.dispatch = rd.bind(null, W, e), [n.memoizedState, e];
}
function Xt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = W.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, W.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Ss() {
  return Le().memoizedState;
}
function zr(e, n, t, r) {
  var l = Be();
  W.flags |= e, l.memoizedState = Xt(1 | n, t, void 0, r === void 0 ? null : r);
}
function dl(e, n, t, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (o = i.destroy, r !== null && Si(r, i.deps)) {
      l.memoizedState = Xt(n, t, o, r);
      return;
    }
  }
  W.flags |= e, l.memoizedState = Xt(1 | n, t, o, r);
}
function Nu(e, n) {
  return zr(8390656, 8, e, n);
}
function xi(e, n) {
  return dl(2048, 8, e, n);
}
function ws(e, n) {
  return dl(4, 2, e, n);
}
function ks(e, n) {
  return dl(4, 4, e, n);
}
function xs(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Cs(e, n, t) {
  return t = t != null ? t.concat([e]) : null, dl(4, 4, xs.bind(null, n, e), t);
}
function Ci() {
}
function Es(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Si(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Ns(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Si(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function _s(e, n, t) {
  return jn & 21 ? (Ie(t, n) || (t = Ta(), W.lanes |= t, Mn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = t);
}
function nd(e, n) {
  var t = F;
  F = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), n();
  } finally {
    F = t, $l.transition = r;
  }
}
function Ps() {
  return Le().memoizedState;
}
function td(e, n, t) {
  var r = yn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Rs(e)) Ls(n, t);
  else if (t = ss(e, n, t, r), t !== null) {
    var l = ce();
    Oe(t, e, r, l), zs(t, n, r);
  }
}
function rd(e, n, t) {
  var r = yn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Rs(e)) Ls(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Ie(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, mi(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = ss(e, n, l, r), t !== null && (l = ce(), Oe(t, e, r, l), zs(t, n, r));
  }
}
function Rs(e) {
  var n = e.alternate;
  return e === W || n !== null && n === W;
}
function Ls(e, n) {
  zt = qr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function zs(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ei(e, t);
  }
}
var br = { readContext: Re, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, ld = { readContext: Re, useCallback: function(e, n) {
  return Be().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Re, useEffect: Nu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, zr(
    4194308,
    4,
    xs.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return zr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return zr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Be();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Be();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = td.bind(null, W, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Be();
  return e = { current: e }, n.memoizedState = e;
}, useState: Eu, useDebugValue: Ci, useDeferredValue: function(e) {
  return Be().memoizedState = e;
}, useTransition: function() {
  var e = Eu(!1), n = e[0];
  return e = nd.bind(null, e[1]), Be().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = W, l = Be();
  if (V) {
    if (t === void 0) throw Error(h(407));
    t = t();
  } else {
    if (t = n(), ee === null) throw Error(h(349));
    jn & 30 || ms(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Nu(gs.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Xt(9, ys.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = Be(), n = ee.identifierPrefix;
  if (V) {
    var t = Ye, r = Ge;
    t = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Gt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = ed++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, od = {
  readContext: Re,
  useCallback: Es,
  useContext: Re,
  useEffect: xi,
  useImperativeHandle: Cs,
  useInsertionEffect: ws,
  useLayoutEffect: ks,
  useMemo: Ns,
  useReducer: Vl,
  useRef: Ss,
  useState: function() {
    return Vl(Yt);
  },
  useDebugValue: Ci,
  useDeferredValue: function(e) {
    var n = Le();
    return _s(n, Z.memoizedState, e);
  },
  useTransition: function() {
    var e = Vl(Yt)[0], n = Le().memoizedState;
    return [e, n];
  },
  useMutableSource: ds,
  useSyncExternalStore: ps,
  useId: Ps,
  unstable_isNewReconciler: !1
}, id = { readContext: Re, useCallback: Es, useContext: Re, useEffect: xi, useImperativeHandle: Cs, useInsertionEffect: ws, useLayoutEffect: ks, useMemo: Ns, useReducer: Hl, useRef: Ss, useState: function() {
  return Hl(Yt);
}, useDebugValue: Ci, useDeferredValue: function(e) {
  var n = Le();
  return Z === null ? n.memoizedState = e : _s(n, Z.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Yt)[0], n = Le().memoizedState;
  return [e, n];
}, useMutableSource: ds, useSyncExternalStore: ps, useId: Ps, unstable_isNewReconciler: !1 };
function De(e, n) {
  if (e && e.defaultProps) {
    n = K({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function _o(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : K({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? In(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = ce(), l = yn(e), o = Xe(r, l);
  o.payload = n, t != null && (o.callback = t), n = pn(e, o, l), n !== null && (Oe(n, e, l, r), Rr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ce(), l = yn(e), o = Xe(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = pn(e, o, l), n !== null && (Oe(n, e, l, r), Rr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ce(), r = yn(e), l = Xe(t, r);
  l.tag = 2, n != null && (l.callback = n), n = pn(e, l, r), n !== null && (Oe(n, e, r, t), Rr(n, e, r));
} };
function _u(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !$t(t, r) || !$t(l, o) : !0;
}
function Ts(e, n, t) {
  var r = !1, l = vn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Re(o) : (l = ge(n) ? Tn : ue.current, r = n.contextTypes, o = (r = r != null) ? lt(e, l) : vn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = pl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Pu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && pl.enqueueReplaceState(n, n.state, null);
}
function Po(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, yi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Re(o) : (o = ge(n) ? Tn : ue.current, l.context = lt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (_o(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && pl.enqueueReplaceState(l, l.state, null), Zr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function at(e, n) {
  try {
    var t = "", r = n;
    do
      t += jc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Wl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Ro(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var ud = typeof WeakMap == "function" ? WeakMap : Map;
function Ds(e, n, t) {
  t = Xe(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    nl || (nl = !0, Uo = r), Ro(e, n);
  }, t;
}
function js(e, n, t) {
  t = Xe(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Ro(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Ro(e, n), typeof r != "function" && (mn === null ? mn = /* @__PURE__ */ new Set([this]) : mn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Ru(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ud();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = kd.bind(null, e, n, t), n.then(e, e));
}
function Lu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Xe(-1, 1), n.tag = 2, pn(t, n, 1))), t.lanes |= 1), e);
}
var ad = en.ReactCurrentOwner, me = !1;
function se(e, n, t, r) {
  n.child = e === null ? as(n, null, t, r) : it(n, e.child, t, r);
}
function Tu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return nt(n, l), r = wi(e, n, t, r, o, l), t = ki(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, be(e, n, l)) : (V && t && ai(n), n.flags |= 1, se(e, n, r, l), n.child);
}
function Du(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Ti(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ms(e, n, o, r, l)) : (e = Mr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : $t, t(i, r) && e.ref === n.ref) return be(e, n, l);
  }
  return n.flags |= 1, e = gn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Ms(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($t(o, r) && e.ref === n.ref) if (me = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return n.lanes = e.lanes, be(e, n, l);
  }
  return Lo(e, n, t, r, l);
}
function Fs(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(Zn, ve), ve |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, U(Zn, ve), ve |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, U(Zn, ve), ve |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, U(Zn, ve), ve |= r;
  return se(e, n, l, t), n.child;
}
function Os(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Lo(e, n, t, r, l) {
  var o = ge(t) ? Tn : ue.current;
  return o = lt(n, o), nt(n, l), t = wi(e, n, t, r, o, l), r = ki(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, be(e, n, l)) : (V && r && ai(n), n.flags |= 1, se(e, n, t, l), n.child);
}
function ju(e, n, t, r, l) {
  if (ge(t)) {
    var o = !0;
    Kr(n);
  } else o = !1;
  if (nt(n, l), n.stateNode === null) Tr(e, n), Ts(n, t, r), Po(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, f = t.contextType;
    typeof f == "object" && f !== null ? f = Re(f) : (f = ge(t) ? Tn : ue.current, f = lt(n, f));
    var m = t.getDerivedStateFromProps, y = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== f) && Pu(n, i, r, f), rn = !1;
    var p = n.memoizedState;
    i.state = p, Zr(n, r, i, l), a = n.memoizedState, u !== r || p !== a || ye.current || rn ? (typeof m == "function" && (_o(n, t, m, r), a = n.memoizedState), (u = rn || _u(n, t, u, r, p, a, f)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, cs(e, n), u = n.memoizedProps, f = n.type === n.elementType ? u : De(n.type, u), i.props = f, y = n.pendingProps, p = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = Re(a) : (a = ge(t) ? Tn : ue.current, a = lt(n, a));
    var S = t.getDerivedStateFromProps;
    (m = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || p !== a) && Pu(n, i, r, a), rn = !1, p = n.memoizedState, i.state = p, Zr(n, r, i, l);
    var w = n.memoizedState;
    u !== y || p !== w || ye.current || rn ? (typeof S == "function" && (_o(n, t, S, r), w = n.memoizedState), (f = rn || _u(n, t, f, r, p, w, a) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = a, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return zo(e, n, t, r, o, l);
}
function zo(e, n, t, r, l, o) {
  Os(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && vu(n, t, !1), be(e, n, o);
  r = n.stateNode, ad.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = it(n, e.child, null, o), n.child = it(n, null, u, o)) : se(e, n, u, o), n.memoizedState = r.state, l && vu(n, t, !0), n.child;
}
function Is(e) {
  var n = e.stateNode;
  n.pendingContext ? hu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && hu(e, n.context, !1), gi(e, n.containerInfo);
}
function Mu(e, n, t, r, l) {
  return ot(), ci(l), n.flags |= 256, se(e, n, t, r), n.child;
}
var To = { dehydrated: null, treeContext: null, retryLane: 0 };
function Do(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Us(e, n, t) {
  var r = n.pendingProps, l = H.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(H, l & 1), e === null)
    return Eo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = gl(i, r, 0, null), e = zn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Do(t), n.memoizedState = To, e) : Ei(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return sd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = gn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = gn(u, o) : (o = zn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Do(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = To, r;
  }
  return o = e.child, e = o.sibling, r = gn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Ei(e, n) {
  return n = gl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function vr(e, n, t, r) {
  return r !== null && ci(r), it(n, e.child, null, t), e = Ei(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function sd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Wl(Error(h(422))), vr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), o = zn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && it(n, e.child, null, i), n.child.memoizedState = Do(i), n.memoizedState = To, o);
  if (!(n.mode & 1)) return vr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(h(419)), r = Wl(o, r, void 0), vr(e, n, i, r);
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, qe(e, l), Oe(r, e, l, -1));
    }
    return zi(), r = Wl(Error(h(421))), vr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = xd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Se = dn(l.nextSibling), we = n, V = !0, Me = null, e !== null && (Ee[Ne++] = Ge, Ee[Ne++] = Ye, Ee[Ne++] = Dn, Ge = e.id, Ye = e.overflow, Dn = n), n = Ei(n, r.children), n.flags |= 4096, n);
}
function Fu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), No(e.return, n, t);
}
function Kl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function As(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (se(e, n, r.children, t), r = H.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Fu(e, t, n);
      else if (e.tag === 19) Fu(e, t, n);
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
  if (U(H, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && Jr(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Kl(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Jr(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Kl(n, !0, t, null, o);
      break;
    case "together":
      Kl(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Tr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function be(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Mn |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(h(153));
  if (n.child !== null) {
    for (e = n.child, t = gn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = gn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function cd(e, n, t) {
  switch (n.tag) {
    case 3:
      Is(n), ot();
      break;
    case 5:
      fs(n);
      break;
    case 1:
      ge(n.type) && Kr(n);
      break;
    case 4:
      gi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      U(Yr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(H, H.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Us(e, n, t) : (U(H, H.current & 1), e = be(e, n, t), e !== null ? e.sibling : null);
      U(H, H.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return As(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Fs(e, n, t);
  }
  return be(e, n, t);
}
var Bs, jo, $s, Vs;
Bs = function(e, n) {
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
jo = function() {
};
$s = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Rn(He.current);
    var o = null;
    switch (t) {
      case "input":
        l = eo(e, l), r = eo(e, r), o = [];
        break;
      case "select":
        l = K({}, l, { value: void 0 }), r = K({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    oo(t, r);
    var i;
    t = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Mt.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var a = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && a !== u && (a != null || u != null)) if (f === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        f,
        t
      )), t = a;
      else f === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(f, a)) : f === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(f, "" + a) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Mt.hasOwnProperty(f) ? (a != null && f === "onScroll" && B("scroll", e), o || u === a || (o = [])) : (o = o || []).push(f, a));
    }
    t && (o = o || []).push("style", t);
    var f = o;
    (n.updateQueue = f) && (n.flags |= 4);
  }
};
Vs = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function St(e, n) {
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
function oe(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function fd(e, n, t) {
  var r = n.pendingProps;
  switch (si(n), n.tag) {
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
      return ge(n.type) && Wr(), oe(n), null;
    case 3:
      return r = n.stateNode, ut(), $(ye), $(ue), vi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Me !== null && ($o(Me), Me = null))), jo(e, n), oe(n), null;
    case 5:
      hi(n);
      var l = Rn(Qt.current);
      if (t = n.type, e !== null && n.stateNode != null) $s(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(h(166));
          return oe(n), null;
        }
        if (e = Rn(He.current), gr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[$e] = n, r[Wt] = o, e = (n.mode & 1) !== 0, t) {
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
              for (l = 0; l < Et.length; l++) B(Et[l], r);
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
              Wi(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              Qi(r, o), B("invalid", r);
          }
          oo(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && yr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && yr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Mt.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
          }
          switch (t) {
            case "input":
              ur(r), Ki(r, o, !0);
              break;
            case "textarea":
              ur(r), Gi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ga(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[$e] = n, e[Wt] = r, Bs(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = io(t, r), t) {
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
                for (l = 0; l < Et.length; l++) B(Et[l], e);
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
                Wi(e, r), l = eo(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = K({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Qi(e, r), l = ro(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            oo(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Sa(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ha(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Ft(e, a) : typeof a == "number" && Ft(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mt.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Yo(e, o, a, i));
            }
            switch (t) {
              case "input":
                ur(e), Ki(e, r, !1);
                break;
              case "textarea":
                ur(e), Gi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Jn(e, !!r.multiple, o, !1) : r.defaultValue != null && Jn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
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
      if (e && n.stateNode != null) Vs(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(h(166));
        if (t = Rn(Qt.current), Rn(He.current), gr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[$e] = n, (o = r.nodeValue !== t) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              yr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && yr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[$e] = n, n.stateNode = r;
      }
      return oe(n), null;
    case 13:
      if ($(H), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && Se !== null && n.mode & 1 && !(n.flags & 128)) is(), ot(), n.flags |= 98560, o = !1;
        else if (o = gr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(h(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(h(317));
            o[$e] = n;
          } else ot(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          oe(n), o = !1;
        } else Me !== null && ($o(Me), Me = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || H.current & 1 ? J === 0 && (J = 3) : zi())), n.updateQueue !== null && (n.flags |= 4), oe(n), null);
    case 4:
      return ut(), jo(e, n), e === null && Vt(n.stateNode.containerInfo), oe(n), null;
    case 10:
      return pi(n.type._context), oe(n), null;
    case 17:
      return ge(n.type) && Wr(), oe(n), null;
    case 19:
      if ($(H), o = n.memoizedState, o === null) return oe(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) St(o, !1);
      else {
        if (J !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = Jr(e), i !== null) {
            for (n.flags |= 128, St(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return U(H, H.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && G() > st && (n.flags |= 128, r = !0, St(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jr(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), St(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return oe(n), null;
        } else 2 * G() - o.renderingStartTime > st && t !== 1073741824 && (n.flags |= 128, r = !0, St(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = G(), n.sibling = null, t = H.current, U(H, r ? t & 1 | 2 : t & 1), n) : (oe(n), null);
    case 22:
    case 23:
      return Li(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? ve & 1073741824 && (oe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : oe(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(h(156, n.tag));
}
function dd(e, n) {
  switch (si(n), n.tag) {
    case 1:
      return ge(n.type) && Wr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return ut(), $(ye), $(ue), vi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return hi(n), null;
    case 13:
      if ($(H), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(h(340));
        ot();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return $(H), null;
    case 4:
      return ut(), null;
    case 10:
      return pi(n.type._context), null;
    case 22:
    case 23:
      return Li(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sr = !1, ie = !1, pd = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Xn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    Q(e, n, r);
  }
  else t.current = null;
}
function Mo(e, n, t) {
  try {
    t();
  } catch (r) {
    Q(e, n, r);
  }
}
var Ou = !1;
function md(e, n) {
  if (ho = Br, e = Ga(), ui(e)) {
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
        var i = 0, u = -1, a = -1, f = 0, m = 0, y = e, p = null;
        n: for (; ; ) {
          for (var S; y !== t || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (a = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (S = y.firstChild) !== null; )
            p = y, y = S;
          for (; ; ) {
            if (y === e) break n;
            if (p === t && ++f === l && (u = i), p === o && ++m === r && (a = i), (S = y.nextSibling) !== null) break;
            y = p, p = y.parentNode;
          }
          y = S;
        }
        t = u === -1 || a === -1 ? null : { start: u, end: a };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (vo = { focusedElem: e, selectionRange: t }, Br = !1, N = n; N !== null; ) if (n = N, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, N = e;
  else for (; N !== null; ) {
    n = N;
    try {
      var w = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var C = w.memoizedProps, M = w.memoizedState, c = n.stateNode, s = c.getSnapshotBeforeUpdate(n.elementType === n.type ? C : De(n.type, C), M);
            c.__reactInternalSnapshotBeforeUpdate = s;
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
          throw Error(h(163));
      }
    } catch (g) {
      Q(n, n.return, g);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, N = e;
      break;
    }
    N = n.return;
  }
  return w = Ou, Ou = !1, w;
}
function Tt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Mo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ml(e, n) {
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
function Fo(e) {
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
function Hs(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Hs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[$e], delete n[Wt], delete n[ko], delete n[Zf], delete n[Jf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ws(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Iu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ws(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Oo(e, n, t), e = e.sibling; e !== null; ) Oo(e, n, t), e = e.sibling;
}
function Io(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Io(e, n, t), e = e.sibling; e !== null; ) Io(e, n, t), e = e.sibling;
}
var ne = null, je = !1;
function nn(e, n, t) {
  for (t = t.child; t !== null; ) Ks(e, n, t), t = t.sibling;
}
function Ks(e, n, t) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
    Ve.onCommitFiberUnmount(il, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      ie || Xn(t, n);
    case 6:
      var r = ne, l = je;
      ne = null, nn(e, n, t), ne = r, je = l, ne !== null && (je ? (e = ne, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ne.removeChild(t.stateNode));
      break;
    case 18:
      ne !== null && (je ? (e = ne, t = t.stateNode, e.nodeType === 8 ? Ul(e.parentNode, t) : e.nodeType === 1 && Ul(e, t), At(e)) : Ul(ne, t.stateNode));
      break;
    case 4:
      r = ne, l = je, ne = t.stateNode.containerInfo, je = !0, nn(e, n, t), ne = r, je = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Mo(t, n, i), l = l.next;
        } while (l !== r);
      }
      nn(e, n, t);
      break;
    case 1:
      if (!ie && (Xn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(t, n, u);
      }
      nn(e, n, t);
      break;
    case 21:
      nn(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (ie = (r = ie) || t.memoizedState !== null, nn(e, n, t), ie = r) : nn(e, n, t);
      break;
    default:
      nn(e, n, t);
  }
}
function Uu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new pd()), n.forEach(function(r) {
      var l = Cd.bind(null, e, r);
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
            ne = u.stateNode, je = !1;
            break e;
          case 3:
            ne = u.stateNode.containerInfo, je = !0;
            break e;
          case 4:
            ne = u.stateNode.containerInfo, je = !0;
            break e;
        }
        u = u.return;
      }
      if (ne === null) throw Error(h(160));
      Ks(o, i, l), ne = null, je = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (f) {
      Q(l, n, f);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Qs(n, e), n = n.sibling;
}
function Qs(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Te(n, e), Ae(e), r & 4) {
        try {
          Tt(3, e, e.return), ml(3, e);
        } catch (C) {
          Q(e, e.return, C);
        }
        try {
          Tt(5, e, e.return);
        } catch (C) {
          Q(e, e.return, C);
        }
      }
      break;
    case 1:
      Te(n, e), Ae(e), r & 512 && t !== null && Xn(t, t.return);
      break;
    case 5:
      if (Te(n, e), Ae(e), r & 512 && t !== null && Xn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Ft(l, "");
        } catch (C) {
          Q(e, e.return, C);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && ma(l, o), io(u, i);
          var f = io(u, o);
          for (i = 0; i < a.length; i += 2) {
            var m = a[i], y = a[i + 1];
            m === "style" ? Sa(l, y) : m === "dangerouslySetInnerHTML" ? ha(l, y) : m === "children" ? Ft(l, y) : Yo(l, m, y, f);
          }
          switch (u) {
            case "input":
              no(l, o);
              break;
            case "textarea":
              ya(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var S = o.value;
              S != null ? Jn(l, !!o.multiple, S, !1) : p !== !!o.multiple && (o.defaultValue != null ? Jn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Jn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Wt] = o;
        } catch (C) {
          Q(e, e.return, C);
        }
      }
      break;
    case 6:
      if (Te(n, e), Ae(e), r & 4) {
        if (e.stateNode === null) throw Error(h(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (C) {
          Q(e, e.return, C);
        }
      }
      break;
    case 3:
      if (Te(n, e), Ae(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        At(n.containerInfo);
      } catch (C) {
        Q(e, e.return, C);
      }
      break;
    case 4:
      Te(n, e), Ae(e);
      break;
    case 13:
      Te(n, e), Ae(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Pi = G())), r & 4 && Uu(e);
      break;
    case 22:
      if (m = t !== null && t.memoizedState !== null, e.mode & 1 ? (ie = (f = ie) || m, Te(n, e), ie = f) : Te(n, e), Ae(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !m && e.mode & 1) for (N = e, m = e.child; m !== null; ) {
          for (y = N = m; N !== null; ) {
            switch (p = N, S = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Tt(4, p, p.return);
                break;
              case 1:
                Xn(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, t = p.return;
                  try {
                    n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                  } catch (C) {
                    Q(r, t, C);
                  }
                }
                break;
              case 5:
                Xn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Bu(y);
                  continue;
                }
            }
            S !== null ? (S.return = p, N = S) : Bu(y);
          }
          m = m.sibling;
        }
        e: for (m = null, y = e; ; ) {
          if (y.tag === 5) {
            if (m === null) {
              m = y;
              try {
                l = y.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, a = y.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = va("display", i));
              } catch (C) {
                Q(e, e.return, C);
              }
            }
          } else if (y.tag === 6) {
            if (m === null) try {
              y.stateNode.nodeValue = f ? "" : y.memoizedProps;
            } catch (C) {
              Q(e, e.return, C);
            }
          } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
            y.child.return = y, y = y.child;
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            m === y && (m = null), y = y.return;
          }
          m === y && (m = null), y.sibling.return = y.return, y = y.sibling;
        }
      }
      break;
    case 19:
      Te(n, e), Ae(e), r & 4 && Uu(e);
      break;
    case 21:
      break;
    default:
      Te(
        n,
        e
      ), Ae(e);
  }
}
function Ae(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ws(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(h(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ft(l, ""), r.flags &= -33);
          var o = Iu(e);
          Io(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Iu(e);
          Oo(e, u, i);
          break;
        default:
          throw Error(h(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function yd(e, n, t) {
  N = e, Gs(e);
}
function Gs(e, n, t) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Sr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || ie;
        u = Sr;
        var f = ie;
        if (Sr = i, (ie = a) && !f) for (N = l; N !== null; ) i = N, a = i.child, i.tag === 22 && i.memoizedState !== null ? $u(l) : a !== null ? (a.return = i, N = a) : $u(l);
        for (; o !== null; ) N = o, Gs(o), o = o.sibling;
        N = l, Sr = u, ie = f;
      }
      Au(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : Au(e);
  }
}
function Au(e) {
  for (; N !== null; ) {
    var n = N;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ie || ml(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !ie) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : De(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && Cu(n, o, r);
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
              Cu(n, i, t);
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
              var f = n.alternate;
              if (f !== null) {
                var m = f.memoizedState;
                if (m !== null) {
                  var y = m.dehydrated;
                  y !== null && At(y);
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
            throw Error(h(163));
        }
        ie || n.flags & 512 && Fo(n);
      } catch (p) {
        Q(n, n.return, p);
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
function Bu(e) {
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
function $u(e) {
  for (; N !== null; ) {
    var n = N;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            ml(4, n);
          } catch (a) {
            Q(n, t, a);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(n, l, a);
            }
          }
          var o = n.return;
          try {
            Fo(n);
          } catch (a) {
            Q(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Fo(n);
          } catch (a) {
            Q(n, i, a);
          }
      }
    } catch (a) {
      Q(n, n.return, a);
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
var gd = Math.ceil, el = en.ReactCurrentDispatcher, Ni = en.ReactCurrentOwner, Pe = en.ReactCurrentBatchConfig, j = 0, ee = null, X = null, te = 0, ve = 0, Zn = wn(0), J = 0, Zt = null, Mn = 0, yl = 0, _i = 0, Dt = null, pe = null, Pi = 0, st = 1 / 0, Ke = null, nl = !1, Uo = null, mn = null, wr = !1, an = null, tl = 0, jt = 0, Ao = null, Dr = -1, jr = 0;
function ce() {
  return j & 6 ? G() : Dr !== -1 ? Dr : Dr = G();
}
function yn(e) {
  return e.mode & 1 ? j & 2 && te !== 0 ? te & -te : bf.transition !== null ? (jr === 0 && (jr = Ta()), jr) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ua(e.type)), e) : 1;
}
function Oe(e, n, t, r) {
  if (50 < jt) throw jt = 0, Ao = null, Error(h(185));
  qt(e, t, r), (!(j & 2) || e !== ee) && (e === ee && (!(j & 2) && (yl |= t), J === 4 && on(e, te)), he(e, r), t === 1 && j === 0 && !(n.mode & 1) && (st = G() + 500, fl && kn()));
}
function he(e, n) {
  var t = e.callbackNode;
  qc(e, n);
  var r = Ar(e, e === ee ? te : 0);
  if (r === 0) t !== null && Zi(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Zi(t), n === 1) e.tag === 0 ? qf(Vu.bind(null, e)) : rs(Vu.bind(null, e)), Yf(function() {
      !(j & 6) && kn();
    }), t = null;
    else {
      switch (Da(r)) {
        case 1:
          t = bo;
          break;
        case 4:
          t = La;
          break;
        case 16:
          t = Ur;
          break;
        case 536870912:
          t = za;
          break;
        default:
          t = Ur;
      }
      t = nc(t, Ys.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Ys(e, n) {
  if (Dr = -1, jr = 0, j & 6) throw Error(h(327));
  var t = e.callbackNode;
  if (tt() && e.callbackNode !== t) return null;
  var r = Ar(e, e === ee ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = rl(e, r);
  else {
    n = r;
    var l = j;
    j |= 2;
    var o = Zs();
    (ee !== e || te !== n) && (Ke = null, st = G() + 500, Ln(e, n));
    do
      try {
        Sd();
        break;
      } catch (u) {
        Xs(e, u);
      }
    while (!0);
    di(), el.current = o, j = l, X !== null ? n = 0 : (ee = null, te = 0, n = J);
  }
  if (n !== 0) {
    if (n === 2 && (l = fo(e), l !== 0 && (r = l, n = Bo(e, l))), n === 1) throw t = Zt, Ln(e, 0), on(e, r), he(e, G()), t;
    if (n === 6) on(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !hd(l) && (n = rl(e, r), n === 2 && (o = fo(e), o !== 0 && (r = o, n = Bo(e, o))), n === 1)) throw t = Zt, Ln(e, 0), on(e, r), he(e, G()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(h(345));
        case 2:
          Nn(e, pe, Ke);
          break;
        case 3:
          if (on(e, r), (r & 130023424) === r && (n = Pi + 500 - G(), 10 < n)) {
            if (Ar(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = wo(Nn.bind(null, e, pe, Ke), n);
            break;
          }
          Nn(e, pe, Ke);
          break;
        case 4:
          if (on(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = wo(Nn.bind(null, e, pe, Ke), r);
            break;
          }
          Nn(e, pe, Ke);
          break;
        case 5:
          Nn(e, pe, Ke);
          break;
        default:
          throw Error(h(329));
      }
    }
  }
  return he(e, G()), e.callbackNode === t ? Ys.bind(null, e) : null;
}
function Bo(e, n) {
  var t = Dt;
  return e.current.memoizedState.isDehydrated && (Ln(e, n).flags |= 256), e = rl(e, n), e !== 2 && (n = pe, pe = t, n !== null && $o(n)), e;
}
function $o(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function hd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ie(o(), l)) return !1;
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
function on(e, n) {
  for (n &= ~_i, n &= ~yl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Fe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Vu(e) {
  if (j & 6) throw Error(h(327));
  tt();
  var n = Ar(e, 0);
  if (!(n & 1)) return he(e, G()), null;
  var t = rl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fo(e);
    r !== 0 && (n = r, t = Bo(e, r));
  }
  if (t === 1) throw t = Zt, Ln(e, 0), on(e, n), he(e, G()), t;
  if (t === 6) throw Error(h(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Nn(e, pe, Ke), he(e, G()), null;
}
function Ri(e, n) {
  var t = j;
  j |= 1;
  try {
    return e(n);
  } finally {
    j = t, j === 0 && (st = G() + 500, fl && kn());
  }
}
function Fn(e) {
  an !== null && an.tag === 0 && !(j & 6) && tt();
  var n = j;
  j |= 1;
  var t = Pe.transition, r = F;
  try {
    if (Pe.transition = null, F = 1, e) return e();
  } finally {
    F = r, Pe.transition = t, j = n, !(j & 6) && kn();
  }
}
function Li() {
  ve = Zn.current, $(Zn);
}
function Ln(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Gf(t)), X !== null) for (t = X.return; t !== null; ) {
    var r = t;
    switch (si(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Wr();
        break;
      case 3:
        ut(), $(ye), $(ue), vi();
        break;
      case 5:
        hi(r);
        break;
      case 4:
        ut();
        break;
      case 13:
        $(H);
        break;
      case 19:
        $(H);
        break;
      case 10:
        pi(r.type._context);
        break;
      case 22:
      case 23:
        Li();
    }
    t = t.return;
  }
  if (ee = e, X = e = gn(e.current, null), te = ve = n, J = 0, Zt = null, _i = yl = Mn = 0, pe = Dt = null, Pn !== null) {
    for (n = 0; n < Pn.length; n++) if (t = Pn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    Pn = null;
  }
  return e;
}
function Xs(e, n) {
  do {
    var t = X;
    try {
      if (di(), Lr.current = br, qr) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        qr = !1;
      }
      if (jn = 0, b = Z = W = null, zt = !1, Gt = 0, Ni.current = null, t === null || t.return === null) {
        J = 1, Zt = n, X = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, a = n;
        if (n = te, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var f = a, m = u, y = m.tag;
          if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var S = Lu(i);
          if (S !== null) {
            S.flags &= -257, zu(S, i, u, o, n), S.mode & 1 && Ru(o, f, n), n = S, a = f;
            var w = n.updateQueue;
            if (w === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(a), n.updateQueue = C;
            } else w.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Ru(o, f, n), zi();
              break e;
            }
            a = Error(h(426));
          }
        } else if (V && u.mode & 1) {
          var M = Lu(i);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), zu(M, i, u, o, n), ci(at(a, u));
            break e;
          }
        }
        o = a = at(a, u), J !== 4 && (J = 2), Dt === null ? Dt = [o] : Dt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var c = Ds(o, a, n);
              xu(o, c);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (mn === null || !mn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var g = js(o, u, n);
                xu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qs(t);
    } catch (E) {
      n = E, X === t && t !== null && (X = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Zs() {
  var e = el.current;
  return el.current = br, e === null ? br : e;
}
function zi() {
  (J === 0 || J === 3 || J === 2) && (J = 4), ee === null || !(Mn & 268435455) && !(yl & 268435455) || on(ee, te);
}
function rl(e, n) {
  var t = j;
  j |= 2;
  var r = Zs();
  (ee !== e || te !== n) && (Ke = null, Ln(e, n));
  do
    try {
      vd();
      break;
    } catch (l) {
      Xs(e, l);
    }
  while (!0);
  if (di(), j = t, el.current = r, X !== null) throw Error(h(261));
  return ee = null, te = 0, J;
}
function vd() {
  for (; X !== null; ) Js(X);
}
function Sd() {
  for (; X !== null && !Hc(); ) Js(X);
}
function Js(e) {
  var n = ec(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, n === null ? qs(e) : X = n, Ni.current = null;
}
function qs(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = dd(t, n), t !== null) {
        t.flags &= 32767, X = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, X = null;
        return;
      }
    } else if (t = fd(t, n, ve), t !== null) {
      X = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      X = n;
      return;
    }
    X = n = e;
  } while (n !== null);
  J === 0 && (J = 5);
}
function Nn(e, n, t) {
  var r = F, l = Pe.transition;
  try {
    Pe.transition = null, F = 1, wd(e, n, t, r);
  } finally {
    Pe.transition = l, F = r;
  }
  return null;
}
function wd(e, n, t, r) {
  do
    tt();
  while (an !== null);
  if (j & 6) throw Error(h(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(h(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (bc(e, o), e === ee && (X = ee = null, te = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || wr || (wr = !0, nc(Ur, function() {
    return tt(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Pe.transition, Pe.transition = null;
    var i = F;
    F = 1;
    var u = j;
    j |= 4, Ni.current = null, md(e, t), Qs(t, e), Bf(vo), Br = !!ho, vo = ho = null, e.current = t, yd(t), Wc(), j = u, F = i, Pe.transition = o;
  } else e.current = t;
  if (wr && (wr = !1, an = e, tl = l), o = e.pendingLanes, o === 0 && (mn = null), Gc(t.stateNode), he(e, G()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw nl = !1, e = Uo, Uo = null, e;
  return tl & 1 && e.tag !== 0 && tt(), o = e.pendingLanes, o & 1 ? e === Ao ? jt++ : (jt = 0, Ao = e) : jt = 0, kn(), null;
}
function tt() {
  if (an !== null) {
    var e = Da(tl), n = Pe.transition, t = F;
    try {
      if (Pe.transition = null, F = 16 > e ? 16 : e, an === null) var r = !1;
      else {
        if (e = an, an = null, tl = 0, j & 6) throw Error(h(331));
        var l = j;
        for (j |= 4, N = e.current; N !== null; ) {
          var o = N, i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var f = u[a];
                for (N = f; N !== null; ) {
                  var m = N;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tt(8, m, o);
                  }
                  var y = m.child;
                  if (y !== null) y.return = m, N = y;
                  else for (; N !== null; ) {
                    m = N;
                    var p = m.sibling, S = m.return;
                    if (Hs(m), m === f) {
                      N = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = S, N = p;
                      break;
                    }
                    N = S;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var C = w.child;
                if (C !== null) {
                  w.child = null;
                  do {
                    var M = C.sibling;
                    C.sibling = null, C = M;
                  } while (C !== null);
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
                Tt(9, o, o.return);
            }
            var c = o.sibling;
            if (c !== null) {
              c.return = o.return, N = c;
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
                  ml(9, u);
              }
            } catch (E) {
              Q(u, u.return, E);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, N = g;
              break e;
            }
            N = u.return;
          }
        }
        if (j = l, kn(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
          Ve.onPostCommitFiberRoot(il, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      F = t, Pe.transition = n;
    }
  }
  return !1;
}
function Hu(e, n, t) {
  n = at(t, n), n = Ds(e, n, 1), e = pn(e, n, 1), n = ce(), e !== null && (qt(e, 1, n), he(e, n));
}
function Q(e, n, t) {
  if (e.tag === 3) Hu(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      Hu(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
        e = at(t, e), e = js(n, e, 1), n = pn(n, e, 1), e = ce(), n !== null && (qt(n, 1, e), he(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function kd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ce(), e.pingedLanes |= e.suspendedLanes & t, ee === e && (te & t) === t && (J === 4 || J === 3 && (te & 130023424) === te && 500 > G() - Pi ? Ln(e, 0) : _i |= t), he(e, n);
}
function bs(e, n) {
  n === 0 && (e.mode & 1 ? (n = cr, cr <<= 1, !(cr & 130023424) && (cr = 4194304)) : n = 1);
  var t = ce();
  e = qe(e, n), e !== null && (qt(e, n, t), he(e, t));
}
function xd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), bs(e, t);
}
function Cd(e, n) {
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
      throw Error(h(314));
  }
  r !== null && r.delete(n), bs(e, t);
}
var ec;
ec = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || ye.current) me = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return me = !1, cd(e, n, t);
    me = !!(e.flags & 131072);
  }
  else me = !1, V && n.flags & 1048576 && ls(n, Gr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Tr(e, n), e = n.pendingProps;
      var l = lt(n, ue.current);
      nt(n, t), l = wi(null, n, r, e, l, t);
      var o = ki();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ge(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, yi(n), l.updater = pl, n.stateNode = l, l._reactInternals = n, Po(n, r, e, t), n = zo(null, n, r, !0, o, t)) : (n.tag = 0, V && o && ai(n), se(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Tr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Nd(r), e = De(r, e), l) {
          case 0:
            n = Lo(null, n, r, e, t);
            break e;
          case 1:
            n = ju(null, n, r, e, t);
            break e;
          case 11:
            n = Tu(null, n, r, e, t);
            break e;
          case 14:
            n = Du(null, n, r, De(r.type, e), t);
            break e;
        }
        throw Error(h(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Lo(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), ju(e, n, r, l, t);
    case 3:
      e: {
        if (Is(n), e === null) throw Error(h(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, cs(e, n), Zr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = at(Error(h(423)), n), n = Mu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = at(Error(h(424)), n), n = Mu(e, n, r, t, l);
          break e;
        } else for (Se = dn(n.stateNode.containerInfo.firstChild), we = n, V = !0, Me = null, t = as(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (ot(), r === l) {
            n = be(e, n, t);
            break e;
          }
          se(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return fs(n), e === null && Eo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, So(r, l) ? i = null : o !== null && So(r, o) && (n.flags |= 32), Os(e, n), se(e, n, i, t), n.child;
    case 6:
      return e === null && Eo(n), null;
    case 13:
      return Us(e, n, t);
    case 4:
      return gi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = it(n, null, r, t) : se(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Tu(e, n, r, l, t);
    case 7:
      return se(e, n, n.pendingProps, t), n.child;
    case 8:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, U(Yr, r._currentValue), r._currentValue = i, o !== null) if (Ie(o.value, i)) {
          if (o.children === l.children && !ye.current) {
            n = be(e, n, t);
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
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var m = f.pending;
                    m === null ? a.next = a : (a.next = m.next, m.next = a), f.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), No(
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
            if (i = o.return, i === null) throw Error(h(341));
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), No(i, t, n), i = o.sibling;
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
        se(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, nt(n, t), l = Re(l), r = r(l), n.flags |= 1, se(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = De(r, n.pendingProps), l = De(r.type, l), Du(e, n, r, l, t);
    case 15:
      return Ms(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Tr(e, n), n.tag = 1, ge(r) ? (e = !0, Kr(n)) : e = !1, nt(n, t), Ts(n, r, l), Po(n, r, l, t), zo(null, n, r, !0, e, t);
    case 19:
      return As(e, n, t);
    case 22:
      return Fs(e, n, t);
  }
  throw Error(h(156, n.tag));
};
function nc(e, n) {
  return Ra(e, n);
}
function Ed(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, n, t, r) {
  return new Ed(e, n, t, r);
}
function Ti(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Nd(e) {
  if (typeof e == "function") return Ti(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zo) return 11;
    if (e === Jo) return 14;
  }
  return 2;
}
function gn(e, n) {
  var t = e.alternate;
  return t === null ? (t = _e(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Mr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Ti(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Bn:
      return zn(t.children, l, o, n);
    case Xo:
      i = 8, l |= 8;
      break;
    case Zl:
      return e = _e(12, t, n, l | 2), e.elementType = Zl, e.lanes = o, e;
    case Jl:
      return e = _e(13, t, n, l), e.elementType = Jl, e.lanes = o, e;
    case ql:
      return e = _e(19, t, n, l), e.elementType = ql, e.lanes = o, e;
    case fa:
      return gl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case sa:
          i = 10;
          break e;
        case ca:
          i = 9;
          break e;
        case Zo:
          i = 11;
          break e;
        case Jo:
          i = 14;
          break e;
        case tn:
          i = 16, r = null;
          break e;
      }
      throw Error(h(130, e == null ? e : typeof e, ""));
  }
  return n = _e(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function zn(e, n, t, r) {
  return e = _e(7, e, r, n), e.lanes = t, e;
}
function gl(e, n, t, r) {
  return e = _e(22, e, r, n), e.elementType = fa, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Ql(e, n, t) {
  return e = _e(6, e, null, n), e.lanes = t, e;
}
function Gl(e, n, t) {
  return n = _e(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function _d(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Di(e, n, t, r, l, o, i, u, a) {
  return e = new _d(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = _e(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yi(o), e;
}
function Pd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: An, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function tc(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(h(170));
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
    throw Error(h(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (ge(t)) return ts(e, t, n);
  }
  return n;
}
function rc(e, n, t, r, l, o, i, u, a) {
  return e = Di(t, r, !0, e, l, o, i, u, a), e.context = tc(null), t = e.current, r = ce(), l = yn(t), o = Xe(r, l), o.callback = n ?? null, pn(t, o, l), e.current.lanes = l, qt(e, l, r), he(e, r), e;
}
function hl(e, n, t, r) {
  var l = n.current, o = ce(), i = yn(l);
  return t = tc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Xe(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = pn(l, n, i), e !== null && (Oe(e, l, i, o), Rr(e, l, i)), i;
}
function ll(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function ji(e, n) {
  Wu(e, n), (e = e.alternate) && Wu(e, n);
}
function Rd() {
  return null;
}
var lc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Mi(e) {
  this._internalRoot = e;
}
vl.prototype.render = Mi.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(h(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Mi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Fn(function() {
      hl(null, e, null, null);
    }), n[Je] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Fa();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < ln.length && n !== 0 && n < ln[t].priority; t++) ;
    ln.splice(t, 0, e), t === 0 && Ia(e);
  }
};
function Fi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ku() {
}
function Ld(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = ll(i);
        o.call(f);
      };
    }
    var i = rc(n, r, e, 0, null, !1, !1, "", Ku);
    return e._reactRootContainer = i, e[Je] = i.current, Vt(e.nodeType === 8 ? e.parentNode : e), Fn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = ll(a);
      u.call(f);
    };
  }
  var a = Di(e, 0, !1, null, null, !1, !1, "", Ku);
  return e._reactRootContainer = a, e[Je] = a.current, Vt(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
    hl(n, a, t, r);
  }), a;
}
function wl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = ll(i);
        u.call(a);
      };
    }
    hl(n, i, e, l);
  } else i = Ld(t, n, e, l, r);
  return ll(i);
}
ja = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Ct(n.pendingLanes);
        t !== 0 && (ei(n, t | 1), he(n, G()), !(j & 6) && (st = G() + 500, kn()));
      }
      break;
    case 13:
      Fn(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ce();
          Oe(r, e, 1, l);
        }
      }), ji(e, 1);
  }
};
ni = function(e) {
  if (e.tag === 13) {
    var n = qe(e, 134217728);
    if (n !== null) {
      var t = ce();
      Oe(n, e, 134217728, t);
    }
    ji(e, 134217728);
  }
};
Ma = function(e) {
  if (e.tag === 13) {
    var n = yn(e), t = qe(e, n);
    if (t !== null) {
      var r = ce();
      Oe(t, e, n, r);
    }
    ji(e, n);
  }
};
Fa = function() {
  return F;
};
Oa = function(e, n) {
  var t = F;
  try {
    return F = e, n();
  } finally {
    F = t;
  }
};
ao = function(e, n, t) {
  switch (n) {
    case "input":
      if (no(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(h(90));
            pa(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      ya(e, t);
      break;
    case "select":
      n = t.value, n != null && Jn(e, !!t.multiple, n, !1);
  }
};
xa = Ri;
Ca = Fn;
var zd = { usingClientEntryPoint: !1, Events: [er, Wn, cl, wa, ka, Ri] }, wt = { findFiberByHostInstance: _n, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Td = { bundleType: wt.bundleType, version: wt.version, rendererPackageName: wt.rendererPackageName, rendererConfig: wt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: en.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _a(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wt.findFiberByHostInstance || Rd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber) try {
    il = kr.inject(Td), Ve = kr;
  } catch {
  }
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
xe.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fi(n)) throw Error(h(200));
  return Pd(e, n, null, t);
};
xe.createRoot = function(e, n) {
  if (!Fi(e)) throw Error(h(299));
  var t = !1, r = "", l = lc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Di(e, 1, !1, null, null, t, !1, r, l), e[Je] = n.current, Vt(e.nodeType === 8 ? e.parentNode : e), new Mi(n);
};
xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(h(188)) : (e = Object.keys(e).join(","), Error(h(268, e)));
  return e = _a(n), e = e === null ? null : e.stateNode, e;
};
xe.flushSync = function(e) {
  return Fn(e);
};
xe.hydrate = function(e, n, t) {
  if (!Sl(n)) throw Error(h(200));
  return wl(null, e, n, !0, t);
};
xe.hydrateRoot = function(e, n, t) {
  if (!Fi(e)) throw Error(h(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = lc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = rc(n, null, e, 1, t ?? null, l, !1, o, i), e[Je] = n.current, Vt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new vl(n);
};
xe.render = function(e, n, t) {
  if (!Sl(n)) throw Error(h(200));
  return wl(null, e, n, !1, t);
};
xe.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(h(40));
  return e._reactRootContainer ? (Fn(function() {
    wl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
xe.unstable_batchedUpdates = Ri;
xe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!Sl(t)) throw Error(h(200));
  if (e == null || e._reactInternals === void 0) throw Error(h(38));
  return wl(e, n, t, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function oc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc);
    } catch (e) {
      console.error(e);
    }
}
oc(), oa.exports = xe;
var Dd = oa.exports, Oi, Qu = Dd;
Oi = Qu.createRoot, Qu.hydrateRoot;
const Yl = {
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
}, Gu = ({ options: e, value: n, onChange: t }) => {
  const [r, l] = q.useState(!1), [o, i] = q.useState(""), u = q.useRef(null);
  q.useEffect(() => {
    const m = (y) => {
      u.current && !u.current.contains(y.target) && l(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const a = e.filter((m) => {
    const y = Yl[m] || { name: m }, p = o.toLowerCase();
    return m.toLowerCase().includes(p) || y.name.toLowerCase().includes(p);
  }), f = Yl[n] || { name: n, symbol: n, flag: "🌍" };
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: "custom-dropdown",
      ref: u,
      style: { position: "relative", width: "140px", flexShrink: 0 },
      children: [
        /* @__PURE__ */ k.jsxs(
          "div",
          {
            className: "dropdown-trigger",
            onClick: () => l(!r),
            style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", cursor: "pointer", height: "100%" },
            children: [
              /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ k.jsxs("span", { style: { fontWeight: 600, fontSize: "1.05rem", color: "#fafafa" }, children: [
                  f.flag,
                  " ",
                  n
                ] }),
                /* @__PURE__ */ k.jsx("span", { style: { fontSize: "0.65rem", color: "#a1a1aa", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "70px", marginTop: "2px" }, children: f.name })
              ] }),
              /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                /* @__PURE__ */ k.jsx("span", { style: { fontWeight: 500, color: "#71717a" }, children: f.symbol }),
                /* @__PURE__ */ k.jsx("svg", { style: { transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", color: "#52525b" }, width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ k.jsx("polyline", { points: "6 9 12 15 18 9" }) })
              ] })
            ]
          }
        ),
        r && /* @__PURE__ */ k.jsxs(
          "div",
          {
            className: "dropdown-menu-override",
            style: {
              position: "absolute",
              top: "100%",
              left: 0,
              width: "280px",
              background: "#18181b",
              // Zinc 900
              border: "1px solid #3f3f46",
              // Zinc 700
              borderRadius: "10px",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
              zIndex: 999999,
              marginTop: "8px",
              display: "block"
              // Fix Safari flex bugs!
            },
            children: [
              /* @__PURE__ */ k.jsx("div", { style: { padding: "8px", borderBottom: "1px solid #27272a" }, children: /* @__PURE__ */ k.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search currency...",
                  value: o,
                  onChange: (m) => i(m.target.value),
                  autoFocus: !0,
                  style: {
                    width: "100%",
                    background: "#09090b",
                    border: "1px solid #3f3f46",
                    borderRadius: "6px",
                    padding: "8px 10px",
                    color: "#fafafa",
                    outline: "none",
                    fontSize: "0.85rem",
                    boxSizing: "border-box"
                  }
                }
              ) }),
              /* @__PURE__ */ k.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: 0,
                maxHeight: "300px",
                overflowY: "auto",
                display: "block"
                // Bulletproof
              }, children: a.length > 0 ? a.map((m) => {
                const y = Yl[m] || { name: m, symbol: m, flag: "🌍" };
                return /* @__PURE__ */ k.jsxs(
                  "li",
                  {
                    onClick: () => {
                      t(m), l(!1), i("");
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      cursor: "pointer",
                      background: m === n ? "#27272a" : "transparent",
                      borderBottom: "1px solid #27272a"
                    },
                    onMouseEnter: (p) => p.currentTarget.style.background = "#27272a",
                    onMouseLeave: (p) => p.currentTarget.style.background = m === n ? "#27272a" : "transparent",
                    children: [
                      /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                        /* @__PURE__ */ k.jsxs("span", { style: { fontWeight: 600, color: "#fafafa", fontSize: "0.95rem" }, children: [
                          y.flag,
                          " ",
                          m
                        ] }),
                        /* @__PURE__ */ k.jsx("span", { style: { fontSize: "0.7rem", color: "#a1a1aa" }, children: y.name })
                      ] }),
                      /* @__PURE__ */ k.jsx("span", { style: { fontWeight: 500, color: "#a1a1aa", fontSize: "0.8rem", background: "#27272a", padding: "2px 6px", borderRadius: "4px" }, children: y.symbol })
                    ]
                  },
                  m
                );
              }) : /* @__PURE__ */ k.jsx("li", { style: { padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }, children: "No results found" }) })
            ]
          }
        )
      ]
    }
  );
}, jd = (e, n) => {
  if (!e) return null;
  let t = e.parentNode;
  for (; t; ) {
    if (t.classList && t.classList.contains(n)) return t;
    t = t.parentNode;
  }
  return null;
}, xr = (e, n) => {
  if (!e) return null;
  for (let t = 0; t < e.children.length; t++)
    if (e.children[t].classList.contains(n)) return e.children[t];
  return null;
};
function Md(e, n) {
  q.useLayoutEffect(() => {
    if (n !== "obsidian") return;
    const t = e.current;
    if (!t) return;
    const r = jd(t, "workspace-leaf");
    if (!r) return;
    const l = xr(r, "workspace-leaf-content");
    l && (l.style.padding = "0", l.style.margin = "0", l.style.overflow = "hidden", l.style.display = "flex", l.style.flexDirection = "column");
    const o = xr(l, "view-content");
    if (o) {
      o.style.padding = "0", o.style.margin = "0", o.style.overflow = "hidden";
      const u = xr(o, "markdown-reading-view");
      u && (u.style.display = "none"), o.appendChild(t);
    }
    const i = document.querySelector(".status-bar");
    return i && (i.style.display = "none"), () => {
      i && (i.style.display = ""), l && (l.style = "");
      const u = xr(o, "markdown-reading-view");
      u && (u.style.display = "");
    };
  }, [n]);
}
const Fd = ({ children: e }) => /* @__PURE__ */ k.jsx("div", { className: "agent-layer-safe-zone", style: { width: "100%", height: "100%" }, children: e }), Od = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 150.5,
  AUD: 1.53,
  CAD: 1.35,
  CHF: 0.88,
  CNY: 7.19,
  INR: 82.9
}, Id = (e) => {
  if (!e || typeof e != "string") return 0;
  try {
    const n = e.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9+\-*/.()% ]/g, "");
    if (!n.trim()) return 0;
    const r = new Function(`return (${n});`)();
    return isNaN(r) || !isFinite(r) ? 0 : r;
  } catch {
    return 0;
  }
}, Ii = ({ platform: e = "obsidian", dc: n, platformAPI: t = {} }) => {
  const r = q.useRef(null);
  Md(r, e);
  const [l, o] = q.useState(Od), [i, u] = q.useState(null), [a, f] = q.useState(!0), [m, y] = q.useState(!1), [p, S] = q.useState("USD"), [w, C] = q.useState("EUR"), [M, c] = q.useState("100"), [s, d] = q.useState(!1), [g, E] = q.useState([]);
  q.useEffect(() => {
    const x = localStorage.getItem("datacore_currency_rates");
    if (x)
      try {
        const L = JSON.parse(x);
        L.rates && o(L.rates), L.timestamp && u(new Date(L.timestamp));
      } catch (L) {
        console.error("Cache parsing error", L);
      }
    const I = localStorage.getItem("datacore_currency_history");
    if (I)
      try {
        E(JSON.parse(I));
      } catch {
      }
    P(), _();
    const v = () => f(navigator.onLine);
    return window.addEventListener("online", v), window.addEventListener("offline", v), f(navigator.onLine), () => {
      window.removeEventListener("online", v), window.removeEventListener("offline", v);
    };
  }, []);
  const P = async () => {
    var x;
    if (e === "obsidian" && ((x = n == null ? void 0 : n.io) != null && x.write))
      try {
        await n.io.write("_resources/data/mcp_state.json", JSON.stringify({
          component: "CurrencyConverter",
          status: "active",
          lastHeartbeat: (/* @__PURE__ */ new Date()).toISOString()
        }, null, 2));
      } catch (I) {
        console.error("MCP update failed", I);
      }
  }, _ = async () => {
    if (!navigator.onLine) {
      f(!1);
      return;
    }
    y(!0);
    try {
      let x = null;
      try {
        const I = await fetch("http://localhost:3457/api/rates");
        if (I.ok) {
          const v = await I.json();
          v && v.rates && (x = v.rates);
        }
      } catch {
        console.log("Sovereign sidecar unavailable, falling back to public API...");
      }
      if (!x) {
        const v = await (await fetch("https://open.er-api.com/v6/latest/USD")).json();
        v && v.rates && (x = v.rates);
      }
      if (x) {
        o(x);
        const I = Date.now();
        u(new Date(I)), localStorage.setItem("datacore_currency_rates", JSON.stringify({
          rates: x,
          timestamp: I
        }));
      }
    } catch (x) {
      console.error("Failed to sync rates", x);
    } finally {
      y(!1);
    }
  }, R = () => {
    S(w), C(p);
  }, O = Id(M), ae = (() => {
    const x = l[p] || 1, I = l[w] || 1;
    return (O / x * I).toFixed(2);
  })(), xn = () => {
    const x = ae;
    S(w), c(x);
    const v = [{
      id: Date.now(),
      expr: M,
      baseVal: O.toFixed(2),
      from: p,
      to: w,
      result: x,
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString()
    }, ...g.slice(0, 9)];
    E(v), localStorage.setItem("datacore_currency_history", JSON.stringify(v));
  }, ze = (x) => {
    c(x === "AC" ? "" : x === "DEL" ? (I) => I.length > 0 ? I.slice(0, -1) : "" : x === "=" ? O.toString() : (I) => I + x);
  }, tr = (x, I) => {
    const v = l[x] || 1, L = l[p] || 1, A = (I / v * L).toFixed(2);
    c((Y) => {
      const Ue = Y.trim();
      return !Ue || Ue === "0" ? A : ["+", "-", "*", "/", "×", "÷"].some((We) => Ue.endsWith(We)) ? `${Ue} ${A}` : `${Ue} + ${A}`;
    });
  }, rr = Object.keys(l).sort();
  return /* @__PURE__ */ k.jsx(Fd, { children: /* @__PURE__ */ k.jsx("div", { className: "currency-app", ref: r, style: { position: "relative" }, children: /* @__PURE__ */ k.jsxs("div", { className: "glass-card", children: [
    /* @__PURE__ */ k.jsx("div", { className: `status-badge ${a ? "online" : "offline"}`, children: a ? "ONLINE" : "OFFLINE MODE" }),
    /* @__PURE__ */ k.jsxs("h1", { className: "currency-title", style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }, children: [
      /* @__PURE__ */ k.jsx("span", { children: "CONVERT & CALC" }),
      /* @__PURE__ */ k.jsx("span", { style: { fontSize: "12px", padding: "2px 8px", borderRadius: "12px", backgroundColor: "rgba(168, 85, 247, 0.2)", color: "#c084fc", border: "1px solid rgba(168, 85, 247, 0.4)" }, children: "PRO MATH" })
    ] }),
    /* @__PURE__ */ k.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ k.jsx("label", { children: "From Expression" }),
        /* @__PURE__ */ k.jsxs(
          "button",
          {
            onClick: () => d(!s),
            style: {
              fontSize: "11px",
              fontWeight: "700",
              padding: "3px 8px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: s ? "rgba(168, 85, 247, 0.3)" : "rgba(255, 255, 255, 0.08)",
              color: s ? "#d8b4fe" : "#9ca3af",
              cursor: "pointer"
            },
            children: [
              "🧮 ",
              s ? "Hide Keypad" : "Math Keypad"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ k.jsxs("div", { className: "input-wrapper", style: { flexDirection: "column", gap: "6px", backgroundColor: "rgba(6, 7, 10, 0.7)", padding: "10px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.12)" }, children: [
        /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", gap: "8px", width: "100%" }, children: [
          /* @__PURE__ */ k.jsx(
            Gu,
            {
              options: rr,
              value: p,
              onChange: S
            }
          ),
          /* @__PURE__ */ k.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: M,
              onChange: (x) => c(x.target.value),
              placeholder: "e.g. 100 + 45 * 2",
              style: { fontFamily: "'JetBrains Mono', monospace", fontSize: "15px" }
            }
          )
        ] }),
        /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#a1a1aa", padding: "0 4px", fontFamily: "'JetBrains Mono', monospace" }, children: [
          /* @__PURE__ */ k.jsxs("span", { children: [
            "Evaluated = ",
            /* @__PURE__ */ k.jsxs("strong", { children: [
              O.toFixed(2),
              " ",
              p
            ] })
          ] }),
          M.match(/[+\-*/×÷]/) && /* @__PURE__ */ k.jsx("span", { style: { color: "#38bdf8" }, children: "Math Active" })
        ] })
      ] })
    ] }),
    s && /* @__PURE__ */ k.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      backgroundColor: "rgba(15, 23, 42, 0.9)",
      border: "1px solid rgba(168, 85, 247, 0.3)",
      borderRadius: "14px",
      padding: "12px",
      margin: "10px 0"
    }, children: [
      /* @__PURE__ */ k.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }, children: [
        ["AC", "(", ")", "DEL"].map((x) => /* @__PURE__ */ k.jsx("button", { onClick: () => ze(x), style: { padding: "10px", borderRadius: "8px", border: "none", backgroundColor: "rgba(239, 68, 68, 0.2)", color: "#f87171", fontWeight: "800", fontSize: "13px", cursor: "pointer" }, children: x }, x)),
        ["7", "8", "9", "÷"].map((x) => /* @__PURE__ */ k.jsx("button", { onClick: () => ze(x === "÷" ? "/" : x), style: { padding: "10px", borderRadius: "8px", border: "none", backgroundColor: ["÷"].includes(x) ? "rgba(6, 182, 212, 0.25)" : "rgba(255,255,255,0.06)", color: ["÷"].includes(x) ? "#38bdf8" : "#ffffff", fontWeight: "700", fontSize: "14px", cursor: "pointer" }, children: x }, x)),
        ["4", "5", "6", "×"].map((x) => /* @__PURE__ */ k.jsx("button", { onClick: () => ze(x === "×" ? "*" : x), style: { padding: "10px", borderRadius: "8px", border: "none", backgroundColor: ["×"].includes(x) ? "rgba(6, 182, 212, 0.25)" : "rgba(255,255,255,0.06)", color: ["×"].includes(x) ? "#38bdf8" : "#ffffff", fontWeight: "700", fontSize: "14px", cursor: "pointer" }, children: x }, x)),
        ["1", "2", "3", "-"].map((x) => /* @__PURE__ */ k.jsx("button", { onClick: () => ze(x), style: { padding: "10px", borderRadius: "8px", border: "none", backgroundColor: ["-"].includes(x) ? "rgba(6, 182, 212, 0.25)" : "rgba(255,255,255,0.06)", color: ["-"].includes(x) ? "#38bdf8" : "#ffffff", fontWeight: "700", fontSize: "14px", cursor: "pointer" }, children: x }, x)),
        ["0", ".", "=", "+"].map((x) => /* @__PURE__ */ k.jsx("button", { onClick: () => ze(x), style: { padding: "10px", borderRadius: "8px", border: "none", backgroundColor: x === "=" ? "rgba(168, 85, 247, 0.4)" : x === "+" ? "rgba(6, 182, 212, 0.25)" : "rgba(255,255,255,0.06)", color: x === "=" ? "#d8b4fe" : x === "+" ? "#38bdf8" : "#ffffff", fontWeight: "800", fontSize: "14px", cursor: "pointer" }, children: x }, x))
      ] }),
      /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px", borderTop: "1px solid rgba(255,255,255,0.08)" }, children: [
        /* @__PURE__ */ k.jsx("span", { style: { fontSize: "10px", color: "#9ca3af", fontWeight: "700", textTransform: "uppercase" }, children: "+ Add Foreign Amount to Expression:" }),
        /* @__PURE__ */ k.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto" }, children: ["EUR", "USD", "JPY", "GBP", "CNY"].map((x) => /* @__PURE__ */ k.jsxs(
          "button",
          {
            onClick: () => tr(x, 50),
            style: {
              padding: "4px 10px",
              borderRadius: "6px",
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              color: "#34d399",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              fontSize: "11px",
              fontWeight: "700",
              cursor: "pointer",
              whiteSpace: "nowrap"
            },
            children: [
              "+ 50 ",
              x
            ]
          },
          x
        )) })
      ] })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "swap-btn", onClick: R, children: /* @__PURE__ */ k.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ k.jsx("polyline", { points: "16 3 21 3 21 8" }),
      /* @__PURE__ */ k.jsx("line", { x1: "4", y1: "21", x2: "21", y2: "3" }),
      /* @__PURE__ */ k.jsx("polyline", { points: "21 16 21 21 16 21" }),
      /* @__PURE__ */ k.jsx("line", { x1: "15", y1: "15", x2: "21", y2: "21" }),
      /* @__PURE__ */ k.jsx("line", { x1: "4", y1: "4", x2: "9", y2: "9" })
    ] }) }),
    /* @__PURE__ */ k.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ k.jsx("label", { children: "To Converted Result" }),
      /* @__PURE__ */ k.jsxs("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ k.jsx(
          Gu,
          {
            options: rr,
            value: w,
            onChange: C
          }
        ),
        /* @__PURE__ */ k.jsx(
          "input",
          {
            className: "currency-input",
            type: "text",
            value: ae,
            readOnly: !0,
            style: { color: "#4ade80", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", gap: "8px", margin: "14px 0 6px 0" }, children: [
      /* @__PURE__ */ k.jsxs(
        "button",
        {
          onClick: xn,
          style: {
            flex: 1,
            padding: "10px",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            color: "#60a5fa",
            border: "1px solid rgba(59, 130, 246, 0.4)",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px"
          },
          title: "Use converted output as new input for chained math",
          children: [
            "⬇ Pipe Result (",
            ae,
            " ",
            w,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ k.jsx(
        "button",
        {
          className: "sync-btn",
          onClick: _,
          disabled: m,
          style: { flex: 1, margin: 0 },
          children: m ? "SYNCING..." : "SYNC RATES"
        }
      )
    ] }),
    i && /* @__PURE__ */ k.jsxs("div", { className: "last-updated", children: [
      "Last synced: ",
      i.toLocaleTimeString()
    ] }),
    g.length > 0 && /* @__PURE__ */ k.jsxs("div", { style: { marginTop: "16px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)" }, children: [
      /* @__PURE__ */ k.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ k.jsx("span", { style: { fontSize: "11px", color: "#9ca3af", fontWeight: "700", textTransform: "uppercase" }, children: "📋 CONVERSION LEDGER HISTORY" }),
        /* @__PURE__ */ k.jsx(
          "button",
          {
            onClick: () => {
              E([]), localStorage.removeItem("datacore_currency_history");
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "10px", cursor: "pointer" },
            children: "Clear History"
          }
        )
      ] }),
      /* @__PURE__ */ k.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px", maxHeight: "140px", overflowY: "auto" }, children: g.map((x) => /* @__PURE__ */ k.jsxs(
        "div",
        {
          onClick: () => {
            S(x.to), c(x.result);
          },
          style: {
            backgroundColor: "rgba(6, 7, 10, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "8px",
            padding: "8px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "11px",
            fontFamily: "'JetBrains Mono', monospace",
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ k.jsxs("span", { style: { color: "#a1a1aa" }, children: [
              x.baseVal,
              " ",
              x.from,
              " → ",
              /* @__PURE__ */ k.jsxs("strong", { style: { color: "#4ade80" }, children: [
                x.result,
                " ",
                x.to
              ] })
            ] }),
            /* @__PURE__ */ k.jsx("span", { style: { color: "#71717a", fontSize: "10px" }, children: x.time })
          ]
        },
        x.id
      )) })
    ] })
  ] }) }) });
};
async function Ud(e, n = {}) {
  const t = Oi(e);
  return t.render(/* @__PURE__ */ k.jsx(Ii, { platformAPI: n, platform: "obsidian" })), function() {
    t.unmount();
  };
}
function Ad(e) {
  return /* @__PURE__ */ k.jsx(Ii, { ...e });
}
typeof document < "u" && document.getElementById("root") && Oi(document.getElementById("root")).render(/* @__PURE__ */ k.jsx(Ii, {}));
export {
  Ad as View,
  Ii as default,
  Ud as mount_app
};
