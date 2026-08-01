(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;height:100%;min-height:100%;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:10px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.glass-card{background:#18181b;border:1px solid #27272a;border-radius:16px;padding:14px 12px;width:100%;max-width:100%;box-shadow:0 20px 40px #0006;display:flex;flex-direction:column;gap:12px;position:relative;box-sizing:border-box;margin:0 auto;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:20px}.glass-card{max-width:520px;padding:22px;gap:16px}}.currency-header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;width:100%;box-sizing:border-box}.currency-title{font-size:clamp(1rem,4vw,1.35rem);font-weight:700;margin:0;color:#fafafa;letter-spacing:-.02em;display:flex;align-items:center;gap:6px;flex-wrap:wrap}.status-badge{font-size:.6rem;text-transform:uppercase;letter-spacing:1px;font-weight:700;padding:3px 7px;border-radius:6px;background:#10b98126;color:#10b981;white-space:nowrap}.status-badge.offline{background:#f59e0b26;color:#f59e0b}.input-group{display:flex;flex-direction:column;gap:4px;width:100%;box-sizing:border-box}.input-group label{font-size:.75rem;color:#a1a1aa;font-weight:500}.input-wrapper{display:flex;align-items:center;background:#09090b;border:1px solid #3f3f46;border-radius:10px;transition:all .2s ease;position:relative;width:100%;box-sizing:border-box;overflow:hidden}.input-wrapper:focus-within{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f626}.currency-input{background:transparent;color:#fafafa;border:none;padding:10px 12px;font-size:clamp(1rem,3.8vw,1.25rem);font-weight:600;width:100%;outline:none;text-align:right;font-variant-numeric:tabular-nums;flex:1;min-width:0;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}.currency-input::placeholder{color:#52525b}.swap-btn{background:#27272a;border:1px solid #3f3f46;color:#a1a1aa;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-2px 0;z-index:2;flex-shrink:0}.swap-btn:hover{background:#3f3f46;color:#fafafa}.sync-btn{background:#fafafa;color:#09090b;border:none;padding:10px 12px;border-radius:8px;font-weight:700;font-size:.8rem;cursor:pointer;transition:all .2s ease;white-space:nowrap;flex:1;min-width:100px}.sync-btn:hover{background:#e4e4e7}.sync-btn:active{transform:scale(.98)}.last-updated{text-align:center;font-size:.7rem;color:#71717a;margin-top:2px}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var Xu = { exports: {} }, ol = {}, Ju = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt = Symbol.for("react.element"), sc = Symbol.for("react.portal"), cc = Symbol.for("react.fragment"), fc = Symbol.for("react.strict_mode"), dc = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), mc = Symbol.for("react.context"), yc = Symbol.for("react.forward_ref"), hc = Symbol.for("react.suspense"), gc = Symbol.for("react.memo"), vc = Symbol.for("react.lazy"), $i = Symbol.iterator;
function Sc(e) {
  return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bu = Object.assign, ea = {};
function dt(e, n, t) {
  this.props = e, this.context = n, this.refs = ea, this.updater = t || qu;
}
dt.prototype.isReactComponent = {};
dt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
dt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function na() {
}
na.prototype = dt.prototype;
function Ko(e, n, t) {
  this.props = e, this.context = n, this.refs = ea, this.updater = t || qu;
}
var Qo = Ko.prototype = new na();
Qo.constructor = Ko;
bu(Qo, dt.prototype);
Qo.isPureReactComponent = !0;
var Ai = Array.isArray, ta = Object.prototype.hasOwnProperty, Go = { current: null }, ra = { key: !0, ref: !0, __self: !0, __source: !0 };
function la(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) ta.call(n, r) && !ra.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: bt, type: e, key: o, ref: i, props: l, _owner: Go.current };
}
function wc(e, n) {
  return { $$typeof: bt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bt;
}
function kc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Bi = /\/+/g;
function xl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? kc("" + e.key) : n.toString(36);
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
        case bt:
        case sc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + xl(i, 0) : r, Ai(l) ? (t = "", e != null && (t = e.replace(Bi, "$&/") + "/"), Cr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (Yo(l) && (l = wc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Bi, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ai(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + xl(o, u);
    i += Cr(o, n, t, a, l);
  }
  else if (a = Sc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + xl(o, u++), i += Cr(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ir(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return Cr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function xc(e) {
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
var fe = { current: null }, Er = { transition: null }, Cc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Er, ReactCurrentOwner: Go };
function oa() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: ir, forEach: function(e, n, t) {
  ir(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return ir(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return ir(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Yo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = dt;
T.Fragment = cc;
T.Profiler = dc;
T.PureComponent = Ko;
T.StrictMode = fc;
T.Suspense = hc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cc;
T.act = oa;
T.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Go.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) ta.call(n, a) && !ra.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: bt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: mc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: pc, _context: e }, e.Consumer = e;
};
T.createElement = la;
T.createFactory = function(e) {
  var n = la.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: yc, render: e };
};
T.isValidElement = Yo;
T.lazy = function(e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: xc };
};
T.memo = function(e, n) {
  return { $$typeof: gc, type: e, compare: n === void 0 ? null : n };
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
T.unstable_act = oa;
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
Ju.exports = T;
var $ = Ju.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec = $, _c = Symbol.for("react.element"), Nc = Symbol.for("react.fragment"), Pc = Object.prototype.hasOwnProperty, zc = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ia(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Pc.call(n, r) && !Rc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: _c, type: e, key: o, ref: i, props: l, _owner: zc.current };
}
ol.Fragment = Nc;
ol.jsx = ia;
ol.jsxs = ia;
Xu.exports = ol;
var S = Xu.exports, Jl = {}, ua = { exports: {} }, Ce = {}, aa = { exports: {} }, sa = {};
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
    var D = C.length;
    C.push(R);
    e: for (; 0 < D; ) {
      var I = D - 1 >>> 1, Y = C[I];
      if (0 < l(Y, R)) C[I] = R, C[D] = Y, D = I;
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var R = C[0], D = C.pop();
    if (D !== R) {
      C[0] = D;
      e: for (var I = 0, Y = C.length, lr = Y >>> 1; I < lr; ) {
        var En = 2 * (I + 1) - 1, kl = C[En], _n = En + 1, or = C[_n];
        if (0 > l(kl, D)) _n < Y && 0 > l(or, kl) ? (C[I] = or, C[_n] = D, I = _n) : (C[I] = kl, C[En] = D, I = En);
        else if (_n < Y && 0 > l(or, D)) C[I] = or, C[_n] = D, I = _n;
        else break e;
      }
    }
    return R;
  }
  function l(C, R) {
    var D = C.sortIndex - R.sortIndex;
    return D !== 0 ? D : C.id - R.id;
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
  var a = [], c = [], y = 1, m = null, p = 3, w = !1, v = !1, k = !1, M = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var R = t(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= C) r(c), R.sortIndex = R.expirationTime, n(a, R);
      else break;
      R = t(c);
    }
  }
  function h(C) {
    if (k = !1, d(C), !v) if (t(a) !== null) v = !0, ve(_);
    else {
      var R = t(c);
      R !== null && Cn(h, R.startTime - C);
    }
  }
  function _(C, R) {
    v = !1, k && (k = !1, f(z), z = -1), w = !0;
    var D = p;
    try {
      for (d(R), m = t(a); m !== null && (!(m.expirationTime > R) || C && !ee()); ) {
        var I = m.callback;
        if (typeof I == "function") {
          m.callback = null, p = m.priorityLevel;
          var Y = I(m.expirationTime <= R);
          R = e.unstable_now(), typeof Y == "function" ? m.callback = Y : m === t(a) && r(a), d(R);
        } else r(a);
        m = t(a);
      }
      if (m !== null) var lr = !0;
      else {
        var En = t(c);
        En !== null && Cn(h, En.startTime - R), lr = !1;
      }
      return lr;
    } finally {
      m = null, p = D, w = !1;
    }
  }
  var P = !1, N = null, z = -1, W = 5, L = -1;
  function ee() {
    return !(e.unstable_now() - L < W);
  }
  function xn() {
    if (N !== null) {
      var C = e.unstable_now();
      L = C;
      var R = !0;
      try {
        R = N(!0, C);
      } finally {
        R ? en() : (P = !1, N = null);
      }
    } else P = !1;
  }
  var en;
  if (typeof s == "function") en = function() {
    s(xn);
  };
  else if (typeof MessageChannel < "u") {
    var x = new MessageChannel(), le = x.port2;
    x.port1.onmessage = xn, en = function() {
      le.postMessage(null);
    };
  } else en = function() {
    M(xn, 0);
  };
  function ve(C) {
    N = C, P || (P = !0, en());
  }
  function Cn(C, R) {
    z = M(function() {
      C(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    v || w || (v = !0, ve(_));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = p;
    }
    var D = p;
    p = R;
    try {
      return C();
    } finally {
      p = D;
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
    var D = p;
    p = C;
    try {
      return R();
    } finally {
      p = D;
    }
  }, e.unstable_scheduleCallback = function(C, R, D) {
    var I = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? I + D : I) : D = I, C) {
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
    return Y = D + Y, C = { id: y++, callback: R, priorityLevel: C, startTime: D, expirationTime: Y, sortIndex: -1 }, D > I ? (C.sortIndex = D, n(c, C), t(a) === null && C === t(c) && (k ? (f(z), z = -1) : k = !0, Cn(h, D - I))) : (C.sortIndex = Y, n(a, C), v || w || (v = !0, ve(_))), C;
  }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(C) {
    var R = p;
    return function() {
      var D = p;
      p = R;
      try {
        return C.apply(this, arguments);
      } finally {
        p = D;
      }
    };
  };
})(sa);
aa.exports = sa;
var Dc = aa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = $, xe = Dc;
function g(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ca = /* @__PURE__ */ new Set(), It = {};
function Un(e, n) {
  ot(e, n), ot(e + "Capture", n);
}
function ot(e, n) {
  for (It[e] = n, e = 0; e < n.length; e++) ca.add(n[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, Tc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wi = {}, Hi = {};
function jc(e) {
  return ql.call(Hi, e) ? !0 : ql.call(Wi, e) ? !1 : Tc.test(e) ? Hi[e] = !0 : (Wi[e] = !0, !1);
}
function Mc(e, n, t, r) {
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
function Fc(e, n, t, r) {
  if (n === null || typeof n > "u" || Mc(e, n, t, r)) return !0;
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
var Zo = /[\-:]([a-z])/g;
function Xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Zo,
    Xo
  );
  re[n] = new de(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Zo, Xo);
  re[n] = new de(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Zo, Xo);
  re[n] = new de(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, n, t, r) {
  var l = re.hasOwnProperty(n) ? re[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Fc(n, t, l, r) && (t = null), r || l === null ? jc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var be = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ur = Symbol.for("react.element"), Bn = Symbol.for("react.portal"), Wn = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"), bl = Symbol.for("react.profiler"), fa = Symbol.for("react.provider"), da = Symbol.for("react.context"), bo = Symbol.for("react.forward_ref"), eo = Symbol.for("react.suspense"), no = Symbol.for("react.suspense_list"), ei = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), pa = Symbol.for("react.offscreen"), Vi = Symbol.iterator;
function yt(e) {
  return e === null || typeof e != "object" ? null : (e = Vi && e[Vi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var K = Object.assign, Cl;
function Ct(e) {
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
function _l(e, n) {
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
    El = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? Ct(e) : "";
}
function Ic(e) {
  switch (e.tag) {
    case 5:
      return Ct(e.type);
    case 16:
      return Ct("Lazy");
    case 13:
      return Ct("Suspense");
    case 19:
      return Ct("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _l(e.type, !1), e;
    case 11:
      return e = _l(e.type.render, !1), e;
    case 1:
      return e = _l(e.type, !0), e;
    default:
      return "";
  }
}
function to(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case Bn:
      return "Portal";
    case bl:
      return "Profiler";
    case qo:
      return "StrictMode";
    case eo:
      return "Suspense";
    case no:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case da:
      return (e.displayName || "Context") + ".Consumer";
    case fa:
      return (e._context.displayName || "Context") + ".Provider";
    case bo:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ei:
      return n = e.displayName || null, n !== null ? n : to(e.type) || "Memo";
    case tn:
      n = e._payload, e = e._init;
      try {
        return to(e(n));
      } catch {
      }
  }
  return null;
}
function Oc(e) {
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
      return to(n);
    case 8:
      return n === qo ? "StrictMode" : "Mode";
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
function gn(e) {
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
function ma(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Uc(e) {
  var n = ma(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function ar(e) {
  e._valueTracker || (e._valueTracker = Uc(e));
}
function ya(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = ma(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ro(e, n) {
  var t = n.checked;
  return K({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Ki(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = gn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function ha(e, n) {
  n = n.checked, n != null && Jo(e, "checked", n, !1);
}
function lo(e, n) {
  ha(e, n);
  var t = gn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? oo(e, n.type, t) : n.hasOwnProperty("defaultValue") && oo(e, n.type, gn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Qi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function oo(e, n, t) {
  (n !== "number" || Fr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Et = Array.isArray;
function bn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + gn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function io(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return K({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gi(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(g(92));
      if (Et(t)) {
        if (1 < t.length) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: gn(t) };
}
function ga(e, n) {
  var t = gn(n.value), r = gn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Yi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function va(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uo(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? va(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var sr, Sa = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (sr = sr || document.createElement("div"), sr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Ot(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Pt = {
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
}, $c = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pt).forEach(function(e) {
  $c.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Pt[n] = Pt[e];
  });
});
function wa(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Pt.hasOwnProperty(e) && Pt[e] ? ("" + n).trim() : n + "px";
}
function ka(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = wa(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var Ac = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ao(e, n) {
  if (n) {
    if (Ac[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(g(62));
  }
}
function so(e, n) {
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
var co = null;
function ni(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fo = null, et = null, nt = null;
function Zi(e) {
  if (e = tr(e)) {
    if (typeof fo != "function") throw Error(g(280));
    var n = e.stateNode;
    n && (n = cl(n), fo(e.stateNode, e.type, n));
  }
}
function xa(e) {
  et ? nt ? nt.push(e) : nt = [e] : et = e;
}
function Ca() {
  if (et) {
    var e = et, n = nt;
    if (nt = et = null, Zi(e), n) for (e = 0; e < n.length; e++) Zi(n[e]);
  }
}
function Ea(e, n) {
  return e(n);
}
function _a() {
}
var Nl = !1;
function Na(e, n, t) {
  if (Nl) return e(n, t);
  Nl = !0;
  try {
    return Ea(e, n, t);
  } finally {
    Nl = !1, (et !== null || nt !== null) && (_a(), Ca());
  }
}
function Ut(e, n) {
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
  if (t && typeof t != "function") throw Error(g(231, n, typeof t));
  return t;
}
var po = !1;
if (Ze) try {
  var ht = {};
  Object.defineProperty(ht, "passive", { get: function() {
    po = !0;
  } }), window.addEventListener("test", ht, ht), window.removeEventListener("test", ht, ht);
} catch {
  po = !1;
}
function Bc(e, n, t, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (y) {
    this.onError(y);
  }
}
var zt = !1, Ir = null, Or = !1, mo = null, Wc = { onError: function(e) {
  zt = !0, Ir = e;
} };
function Hc(e, n, t, r, l, o, i, u, a) {
  zt = !1, Ir = null, Bc.apply(Wc, arguments);
}
function Vc(e, n, t, r, l, o, i, u, a) {
  if (Hc.apply(this, arguments), zt) {
    if (zt) {
      var c = Ir;
      zt = !1, Ir = null;
    } else throw Error(g(198));
    Or || (Or = !0, mo = c);
  }
}
function $n(e) {
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
function Pa(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Xi(e) {
  if ($n(e) !== e) throw Error(g(188));
}
function Kc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = $n(e), n === null) throw Error(g(188));
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
      throw Error(g(188));
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
        if (!i) throw Error(g(189));
      }
    }
    if (t.alternate !== r) throw Error(g(190));
  }
  if (t.tag !== 3) throw Error(g(188));
  return t.stateNode.current === t ? e : n;
}
function za(e) {
  return e = Kc(e), e !== null ? Ra(e) : null;
}
function Ra(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ra(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Da = xe.unstable_scheduleCallback, Ji = xe.unstable_cancelCallback, Qc = xe.unstable_shouldYield, Gc = xe.unstable_requestPaint, G = xe.unstable_now, Yc = xe.unstable_getCurrentPriorityLevel, ti = xe.unstable_ImmediatePriority, La = xe.unstable_UserBlockingPriority, Ur = xe.unstable_NormalPriority, Zc = xe.unstable_LowPriority, Ta = xe.unstable_IdlePriority, il = null, Be = null;
function Xc(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : bc, Jc = Math.log, qc = Math.LN2;
function bc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jc(e) / qc | 0) | 0;
}
var cr = 64, fr = 4194304;
function _t(e) {
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
function $r(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = _t(u) : (o &= i, o !== 0 && (r = _t(o)));
  } else i = t & ~l, i !== 0 ? r = _t(i) : o !== 0 && (r = _t(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Fe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function ef(e, n) {
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
function nf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Fe(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = ef(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function yo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ja() {
  var e = cr;
  return cr <<= 1, !(cr & 4194240) && (cr = 64), e;
}
function Pl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function er(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Fe(n), e[n] = t;
}
function tf(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Fe(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function ri(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Fe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var F = 0;
function Ma(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fa, li, Ia, Oa, Ua, ho = !1, dr = [], sn = null, cn = null, fn = null, $t = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), ln = [], rf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qi(e, n) {
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
      $t.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      At.delete(n.pointerId);
  }
}
function gt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && li(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function lf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return sn = gt(sn, e, n, t, r, l), !0;
    case "dragenter":
      return cn = gt(cn, e, n, t, r, l), !0;
    case "mouseover":
      return fn = gt(fn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return $t.set(o, gt($t.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, At.set(o, gt(At.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function $a(e) {
  var n = zn(e.target);
  if (n !== null) {
    var t = $n(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Pa(t), n !== null) {
          e.blockedOn = n, Ua(e.priority, function() {
            Ia(t);
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
function _r(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = go(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      co = r, t.target.dispatchEvent(r), co = null;
    } else return n = tr(t), n !== null && li(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function bi(e, n, t) {
  _r(e) && t.delete(n);
}
function of() {
  ho = !1, sn !== null && _r(sn) && (sn = null), cn !== null && _r(cn) && (cn = null), fn !== null && _r(fn) && (fn = null), $t.forEach(bi), At.forEach(bi);
}
function vt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, ho || (ho = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, of)));
}
function Bt(e) {
  function n(l) {
    return vt(l, e);
  }
  if (0 < dr.length) {
    vt(dr[0], e);
    for (var t = 1; t < dr.length; t++) {
      var r = dr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (sn !== null && vt(sn, e), cn !== null && vt(cn, e), fn !== null && vt(fn, e), $t.forEach(n), At.forEach(n), t = 0; t < ln.length; t++) r = ln[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && (t = ln[0], t.blockedOn === null); ) $a(t), t.blockedOn === null && ln.shift();
}
var tt = be.ReactCurrentBatchConfig, Ar = !0;
function uf(e, n, t, r) {
  var l = F, o = tt.transition;
  tt.transition = null;
  try {
    F = 1, oi(e, n, t, r);
  } finally {
    F = l, tt.transition = o;
  }
}
function af(e, n, t, r) {
  var l = F, o = tt.transition;
  tt.transition = null;
  try {
    F = 4, oi(e, n, t, r);
  } finally {
    F = l, tt.transition = o;
  }
}
function oi(e, n, t, r) {
  if (Ar) {
    var l = go(e, n, t, r);
    if (l === null) Ol(e, n, r, Br, t), qi(e, r);
    else if (lf(l, e, n, t, r)) r.stopPropagation();
    else if (qi(e, r), n & 4 && -1 < rf.indexOf(e)) {
      for (; l !== null; ) {
        var o = tr(l);
        if (o !== null && Fa(o), o = go(e, n, t, r), o === null && Ol(e, n, r, Br, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ol(e, n, r, null, t);
  }
}
var Br = null;
function go(e, n, t, r) {
  if (Br = null, e = ni(r), e = zn(e), e !== null) if (n = $n(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Pa(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Br = e, null;
}
function Aa(e) {
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
      switch (Yc()) {
        case ti:
          return 1;
        case La:
          return 4;
        case Ur:
        case Zc:
          return 16;
        case Ta:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var un = null, ii = null, Nr = null;
function Ba() {
  if (Nr) return Nr;
  var e, n = ii, t = n.length, r, l = "value" in un ? un.value : un.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Nr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function pr() {
  return !0;
}
function eu() {
  return !1;
}
function Ee(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? pr : eu, this.isPropagationStopped = eu, this;
  }
  return K(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = pr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = pr);
  }, persist: function() {
  }, isPersistent: pr }), n;
}
var pt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ui = Ee(pt), nr = K({}, pt, { view: 0, detail: 0 }), sf = Ee(nr), zl, Rl, St, ul = K({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ai, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== St && (St && e.type === "mousemove" ? (zl = e.screenX - St.screenX, Rl = e.screenY - St.screenY) : Rl = zl = 0, St = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Rl;
} }), nu = Ee(ul), cf = K({}, ul, { dataTransfer: 0 }), ff = Ee(cf), df = K({}, nr, { relatedTarget: 0 }), Dl = Ee(df), pf = K({}, pt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mf = Ee(pf), yf = K({}, pt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hf = Ee(yf), gf = K({}, pt, { data: 0 }), tu = Ee(gf), vf = {
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
}, Sf = {
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
}, wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = wf[e]) ? !!n[e] : !1;
}
function ai() {
  return kf;
}
var xf = K({}, nr, { key: function(e) {
  if (e.key) {
    var n = vf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Pr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ai, charCode: function(e) {
  return e.type === "keypress" ? Pr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Cf = Ee(xf), Ef = K({}, ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ru = Ee(Ef), _f = K({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ai }), Nf = Ee(_f), Pf = K({}, pt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zf = Ee(Pf), Rf = K({}, ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Df = Ee(Rf), Lf = [9, 13, 27, 32], si = Ze && "CompositionEvent" in window, Rt = null;
Ze && "documentMode" in document && (Rt = document.documentMode);
var Tf = Ze && "TextEvent" in window && !Rt, Wa = Ze && (!si || Rt && 8 < Rt && 11 >= Rt), lu = " ", ou = !1;
function Ha(e, n) {
  switch (e) {
    case "keyup":
      return Lf.indexOf(n.keyCode) !== -1;
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
var Hn = !1;
function jf(e, n) {
  switch (e) {
    case "compositionend":
      return Va(n);
    case "keypress":
      return n.which !== 32 ? null : (ou = !0, lu);
    case "textInput":
      return e = n.data, e === lu && ou ? null : e;
    default:
      return null;
  }
}
function Mf(e, n) {
  if (Hn) return e === "compositionend" || !si && Ha(e, n) ? (e = Ba(), Nr = ii = un = null, Hn = !1, e) : null;
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
      return Wa && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Ff = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function iu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Ff[e.type] : n === "textarea";
}
function Ka(e, n, t, r) {
  xa(r), n = Wr(n, "onChange"), 0 < n.length && (t = new ui("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Dt = null, Wt = null;
function If(e) {
  ts(e, 0);
}
function al(e) {
  var n = Qn(e);
  if (ya(n)) return e;
}
function Of(e, n) {
  if (e === "change") return n;
}
var Qa = !1;
if (Ze) {
  var Ll;
  if (Ze) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var uu = document.createElement("div");
      uu.setAttribute("oninput", "return;"), Tl = typeof uu.oninput == "function";
    }
    Ll = Tl;
  } else Ll = !1;
  Qa = Ll && (!document.documentMode || 9 < document.documentMode);
}
function au() {
  Dt && (Dt.detachEvent("onpropertychange", Ga), Wt = Dt = null);
}
function Ga(e) {
  if (e.propertyName === "value" && al(Wt)) {
    var n = [];
    Ka(n, Wt, e, ni(e)), Na(If, n);
  }
}
function Uf(e, n, t) {
  e === "focusin" ? (au(), Dt = n, Wt = t, Dt.attachEvent("onpropertychange", Ga)) : e === "focusout" && au();
}
function $f(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return al(Wt);
}
function Af(e, n) {
  if (e === "click") return al(n);
}
function Bf(e, n) {
  if (e === "input" || e === "change") return al(n);
}
function Wf(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Oe = typeof Object.is == "function" ? Object.is : Wf;
function Ht(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!ql.call(n, l) || !Oe(e[l], n[l])) return !1;
  }
  return !0;
}
function su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cu(e, n) {
  var t = su(e);
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
    t = su(t);
  }
}
function Ya(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ya(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Za() {
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
function ci(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Hf(e) {
  var n = Za(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Ya(t.ownerDocument.documentElement, t)) {
    if (r !== null && ci(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = cu(t, o);
        var i = cu(
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
var Vf = Ze && "documentMode" in document && 11 >= document.documentMode, Vn = null, vo = null, Lt = null, So = !1;
function fu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  So || Vn == null || Vn !== Fr(r) || (r = Vn, "selectionStart" in r && ci(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lt && Ht(Lt, r) || (Lt = r, r = Wr(vo, "onSelect"), 0 < r.length && (n = new ui("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Vn)));
}
function mr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Kn = { animationend: mr("Animation", "AnimationEnd"), animationiteration: mr("Animation", "AnimationIteration"), animationstart: mr("Animation", "AnimationStart"), transitionend: mr("Transition", "TransitionEnd") }, jl = {}, Xa = {};
Ze && (Xa = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
function sl(e) {
  if (jl[e]) return jl[e];
  if (!Kn[e]) return e;
  var n = Kn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in Xa) return jl[e] = n[t];
  return e;
}
var Ja = sl("animationend"), qa = sl("animationiteration"), ba = sl("animationstart"), es = sl("transitionend"), ns = /* @__PURE__ */ new Map(), du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Sn(e, n) {
  ns.set(e, n), Un(n, [e]);
}
for (var Ml = 0; Ml < du.length; Ml++) {
  var Fl = du[Ml], Kf = Fl.toLowerCase(), Qf = Fl[0].toUpperCase() + Fl.slice(1);
  Sn(Kf, "on" + Qf);
}
Sn(Ja, "onAnimationEnd");
Sn(qa, "onAnimationIteration");
Sn(ba, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(es, "onTransitionEnd");
ot("onMouseEnter", ["mouseout", "mouseover"]);
ot("onMouseLeave", ["mouseout", "mouseover"]);
ot("onPointerEnter", ["pointerout", "pointerover"]);
ot("onPointerLeave", ["pointerout", "pointerover"]);
Un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));
function pu(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, Vc(r, n, void 0, e), e.currentTarget = null;
}
function ts(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        pu(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        pu(l, u, c), o = a;
      }
    }
  }
  if (Or) throw e = mo, Or = !1, mo = null, e;
}
function U(e, n) {
  var t = n[Eo];
  t === void 0 && (t = n[Eo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (rs(n, e, 2, !1), t.add(r));
}
function Il(e, n, t) {
  var r = 0;
  n && (r |= 4), rs(t, e, r, n);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Vt(e) {
  if (!e[yr]) {
    e[yr] = !0, ca.forEach(function(t) {
      t !== "selectionchange" && (Gf.has(t) || Il(t, !1, e), Il(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[yr] || (n[yr] = !0, Il("selectionchange", !1, n));
  }
}
function rs(e, n, t, r) {
  switch (Aa(n)) {
    case 1:
      var l = uf;
      break;
    case 4:
      l = af;
      break;
    default:
      l = oi;
  }
  t = l.bind(null, n, t, e), l = void 0, !po || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Ol(e, n, t, r, l) {
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
        if (i = zn(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Na(function() {
    var c = o, y = ni(t), m = [];
    e: {
      var p = ns.get(e);
      if (p !== void 0) {
        var w = ui, v = e;
        switch (e) {
          case "keypress":
            if (Pr(t) === 0) break e;
          case "keydown":
          case "keyup":
            w = Cf;
            break;
          case "focusin":
            v = "focus", w = Dl;
            break;
          case "focusout":
            v = "blur", w = Dl;
            break;
          case "beforeblur":
          case "afterblur":
            w = Dl;
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
            w = nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = ff;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Nf;
            break;
          case Ja:
          case qa:
          case ba:
            w = mf;
            break;
          case es:
            w = zf;
            break;
          case "scroll":
            w = sf;
            break;
          case "wheel":
            w = Df;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = hf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ru;
        }
        var k = (n & 4) !== 0, M = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var h = d.stateNode;
          if (d.tag === 5 && h !== null && (d = h, f !== null && (h = Ut(s, f), h != null && k.push(Kt(s, h, d)))), M) break;
          s = s.return;
        }
        0 < k.length && (p = new w(p, v, null, t, y), m.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && t !== co && (v = t.relatedTarget || t.fromElement) && (zn(v) || v[Xe])) break e;
        if ((w || p) && (p = y.window === y ? y : (p = y.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (v = t.relatedTarget || t.toElement, w = c, v = v ? zn(v) : null, v !== null && (M = $n(v), v !== M || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = c), w !== v)) {
          if (k = nu, h = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (k = ru, h = "onPointerLeave", f = "onPointerEnter", s = "pointer"), M = w == null ? p : Qn(w), d = v == null ? p : Qn(v), p = new k(h, s + "leave", w, t, y), p.target = M, p.relatedTarget = d, h = null, zn(y) === c && (k = new k(f, s + "enter", v, t, y), k.target = d, k.relatedTarget = M, h = k), M = h, w && v) n: {
            for (k = w, f = v, s = 0, d = k; d; d = An(d)) s++;
            for (d = 0, h = f; h; h = An(h)) d++;
            for (; 0 < s - d; ) k = An(k), s--;
            for (; 0 < d - s; ) f = An(f), d--;
            for (; s--; ) {
              if (k === f || f !== null && k === f.alternate) break n;
              k = An(k), f = An(f);
            }
            k = null;
          }
          else k = null;
          w !== null && mu(m, p, w, k, !1), v !== null && M !== null && mu(m, M, v, k, !0);
        }
      }
      e: {
        if (p = c ? Qn(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var _ = Of;
        else if (iu(p)) if (Qa) _ = Bf;
        else {
          _ = $f;
          var P = Uf;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (_ = Af);
        if (_ && (_ = _(e, c))) {
          Ka(m, _, t, y);
          break e;
        }
        P && P(e, p, c), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && oo(p, "number", p.value);
      }
      switch (P = c ? Qn(c) : window, e) {
        case "focusin":
          (iu(P) || P.contentEditable === "true") && (Vn = P, vo = c, Lt = null);
          break;
        case "focusout":
          Lt = vo = Vn = null;
          break;
        case "mousedown":
          So = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          So = !1, fu(m, t, y);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          fu(m, t, y);
      }
      var N;
      if (si) e: {
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
      else Hn ? Ha(e, t) && (z = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (z = "onCompositionStart");
      z && (Wa && t.locale !== "ko" && (Hn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Hn && (N = Ba()) : (un = y, ii = "value" in un ? un.value : un.textContent, Hn = !0)), P = Wr(c, z), 0 < P.length && (z = new tu(z, e, null, t, y), m.push({ event: z, listeners: P }), N ? z.data = N : (N = Va(t), N !== null && (z.data = N)))), (N = Tf ? jf(e, t) : Mf(e, t)) && (c = Wr(c, "onBeforeInput"), 0 < c.length && (y = new tu("onBeforeInput", "beforeinput", null, t, y), m.push({ event: y, listeners: c }), y.data = N));
    }
    ts(m, n);
  });
}
function Kt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Wr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Ut(e, t), o != null && r.unshift(Kt(e, o, l)), o = Ut(e, n), o != null && r.push(Kt(e, o, l))), e = e.return;
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Ut(t, o), a != null && i.unshift(Kt(t, a, u))) : l || (a = Ut(t, o), a != null && i.push(Kt(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Yf = /\r\n?/g, Zf = /\u0000|\uFFFD/g;
function yu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Yf, `
`).replace(Zf, "");
}
function hr(e, n, t) {
  if (n = yu(n), yu(e) !== n && t) throw Error(g(425));
}
function Hr() {
}
var wo = null, ko = null;
function xo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Co = typeof setTimeout == "function" ? setTimeout : void 0, Xf = typeof clearTimeout == "function" ? clearTimeout : void 0, hu = typeof Promise == "function" ? Promise : void 0, Jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
  return hu.resolve(null).then(e).catch(qf);
} : Co;
function qf(e) {
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
        e.removeChild(l), Bt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Bt(n);
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
var mt = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + mt, Qt = "__reactProps$" + mt, Xe = "__reactContainer$" + mt, Eo = "__reactEvents$" + mt, bf = "__reactListeners$" + mt, ed = "__reactHandles$" + mt;
function zn(e) {
  var n = e[Ae];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Xe] || t[Ae]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = gu(e); e !== null; ) {
        if (t = e[Ae]) return t;
        e = gu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function tr(e) {
  return e = e[Ae] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function cl(e) {
  return e[Qt] || null;
}
var _o = [], Gn = -1;
function wn(e) {
  return { current: e };
}
function A(e) {
  0 > Gn || (e.current = _o[Gn], _o[Gn] = null, Gn--);
}
function O(e, n) {
  Gn++, _o[Gn] = e.current, e.current = n;
}
var vn = {}, ae = wn(vn), ye = wn(!1), jn = vn;
function it(e, n) {
  var t = e.type.contextTypes;
  if (!t) return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Vr() {
  A(ye), A(ae);
}
function vu(e, n, t) {
  if (ae.current !== vn) throw Error(g(168));
  O(ae, n), O(ye, t);
}
function ls(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(g(108, Oc(e) || "Unknown", l));
  return K({}, t, r);
}
function Kr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, jn = ae.current, O(ae, e), O(ye, ye.current), !0;
}
function Su(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t ? (e = ls(e, n, jn), r.__reactInternalMemoizedMergedChildContext = e, A(ye), A(ae), O(ae, e)) : A(ye), O(ye, t);
}
var Ke = null, fl = !1, $l = !1;
function os(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function nd(e) {
  fl = !0, os(e);
}
function kn() {
  if (!$l && Ke !== null) {
    $l = !0;
    var e = 0, n = F;
    try {
      var t = Ke;
      for (F = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, fl = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), Da(ti, kn), l;
    } finally {
      F = n, $l = !1;
    }
  }
  return null;
}
var Yn = [], Zn = 0, Qr = null, Gr = 0, _e = [], Ne = 0, Mn = null, Qe = 1, Ge = "";
function Nn(e, n) {
  Yn[Zn++] = Gr, Yn[Zn++] = Qr, Qr = e, Gr = n;
}
function is(e, n, t) {
  _e[Ne++] = Qe, _e[Ne++] = Ge, _e[Ne++] = Mn, Mn = e;
  var r = Qe;
  e = Ge;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Fe(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Qe = 1 << 32 - Fe(n) + l | t << l | r, Ge = o + e;
  } else Qe = 1 << o | t << l | r, Ge = e;
}
function fi(e) {
  e.return !== null && (Nn(e, 1), is(e, 1, 0));
}
function di(e) {
  for (; e === Qr; ) Qr = Yn[--Zn], Yn[Zn] = null, Gr = Yn[--Zn], Yn[Zn] = null;
  for (; e === Mn; ) Mn = _e[--Ne], _e[Ne] = null, Ge = _e[--Ne], _e[Ne] = null, Qe = _e[--Ne], _e[Ne] = null;
}
var ke = null, we = null, B = !1, Me = null;
function us(e, n) {
  var t = Pe(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function wu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ke = e, we = dn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ke = e, we = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Mn !== null ? { id: Qe, overflow: Ge } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Pe(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ke = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function No(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Po(e) {
  if (B) {
    var n = we;
    if (n) {
      var t = n;
      if (!wu(e, n)) {
        if (No(e)) throw Error(g(418));
        n = dn(t.nextSibling);
        var r = ke;
        n && wu(e, n) ? us(r, t) : (e.flags = e.flags & -4097 | 2, B = !1, ke = e);
      }
    } else {
      if (No(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, B = !1, ke = e;
    }
  }
}
function ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ke = e;
}
function gr(e) {
  if (e !== ke) return !1;
  if (!B) return ku(e), B = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !xo(e.type, e.memoizedProps)), n && (n = we)) {
    if (No(e)) throw as(), Error(g(418));
    for (; n; ) us(e, n), n = dn(n.nextSibling);
  }
  if (ku(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              we = dn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function as() {
  for (var e = we; e; ) e = dn(e.nextSibling);
}
function ut() {
  we = ke = null, B = !1;
}
function pi(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var td = be.ReactCurrentBatchConfig;
function wt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(g(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!t._owner) throw Error(g(290, e));
  }
  return e;
}
function vr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function xu(e) {
  var n = e._init;
  return n(e._payload);
}
function ss(e) {
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
    return f = hn(f, s), f.index = 0, f.sibling = null, f;
  }
  function o(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, h) {
    return s === null || s.tag !== 6 ? (s = Ql(d, f.mode, h), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, h) {
    var _ = d.type;
    return _ === Wn ? y(f, s, d.props.children, h, d.key) : s !== null && (s.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === tn && xu(_) === s.type) ? (h = l(s, d.props), h.ref = wt(f, s, d), h.return = f, h) : (h = Mr(d.type, d.key, d.props, null, f.mode, h), h.ref = wt(f, s, d), h.return = f, h);
  }
  function c(f, s, d, h) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Gl(d, f.mode, h), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function y(f, s, d, h, _) {
    return s === null || s.tag !== 7 ? (s = Tn(d, f.mode, h, _), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function m(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = Ql("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case ur:
          return d = Mr(s.type, s.key, s.props, null, f.mode, d), d.ref = wt(f, null, s), d.return = f, d;
        case Bn:
          return s = Gl(s, f.mode, d), s.return = f, s;
        case tn:
          var h = s._init;
          return m(f, h(s._payload), d);
      }
      if (Et(s) || yt(s)) return s = Tn(s, f.mode, d, null), s.return = f, s;
      vr(f, s);
    }
    return null;
  }
  function p(f, s, d, h) {
    var _ = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return _ !== null ? null : u(f, s, "" + d, h);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ur:
          return d.key === _ ? a(f, s, d, h) : null;
        case Bn:
          return d.key === _ ? c(f, s, d, h) : null;
        case tn:
          return _ = d._init, p(
            f,
            s,
            _(d._payload),
            h
          );
      }
      if (Et(d) || yt(d)) return _ !== null ? null : y(f, s, d, h, null);
      vr(f, d);
    }
    return null;
  }
  function w(f, s, d, h, _) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return f = f.get(d) || null, u(s, f, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ur:
          return f = f.get(h.key === null ? d : h.key) || null, a(s, f, h, _);
        case Bn:
          return f = f.get(h.key === null ? d : h.key) || null, c(s, f, h, _);
        case tn:
          var P = h._init;
          return w(f, s, d, P(h._payload), _);
      }
      if (Et(h) || yt(h)) return f = f.get(d) || null, y(s, f, h, _, null);
      vr(s, h);
    }
    return null;
  }
  function v(f, s, d, h) {
    for (var _ = null, P = null, N = s, z = s = 0, W = null; N !== null && z < d.length; z++) {
      N.index > z ? (W = N, N = null) : W = N.sibling;
      var L = p(f, N, d[z], h);
      if (L === null) {
        N === null && (N = W);
        break;
      }
      e && N && L.alternate === null && n(f, N), s = o(L, s, z), P === null ? _ = L : P.sibling = L, P = L, N = W;
    }
    if (z === d.length) return t(f, N), B && Nn(f, z), _;
    if (N === null) {
      for (; z < d.length; z++) N = m(f, d[z], h), N !== null && (s = o(N, s, z), P === null ? _ = N : P.sibling = N, P = N);
      return B && Nn(f, z), _;
    }
    for (N = r(f, N); z < d.length; z++) W = w(N, f, z, d[z], h), W !== null && (e && W.alternate !== null && N.delete(W.key === null ? z : W.key), s = o(W, s, z), P === null ? _ = W : P.sibling = W, P = W);
    return e && N.forEach(function(ee) {
      return n(f, ee);
    }), B && Nn(f, z), _;
  }
  function k(f, s, d, h) {
    var _ = yt(d);
    if (typeof _ != "function") throw Error(g(150));
    if (d = _.call(d), d == null) throw Error(g(151));
    for (var P = _ = null, N = s, z = s = 0, W = null, L = d.next(); N !== null && !L.done; z++, L = d.next()) {
      N.index > z ? (W = N, N = null) : W = N.sibling;
      var ee = p(f, N, L.value, h);
      if (ee === null) {
        N === null && (N = W);
        break;
      }
      e && N && ee.alternate === null && n(f, N), s = o(ee, s, z), P === null ? _ = ee : P.sibling = ee, P = ee, N = W;
    }
    if (L.done) return t(
      f,
      N
    ), B && Nn(f, z), _;
    if (N === null) {
      for (; !L.done; z++, L = d.next()) L = m(f, L.value, h), L !== null && (s = o(L, s, z), P === null ? _ = L : P.sibling = L, P = L);
      return B && Nn(f, z), _;
    }
    for (N = r(f, N); !L.done; z++, L = d.next()) L = w(N, f, z, L.value, h), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? z : L.key), s = o(L, s, z), P === null ? _ = L : P.sibling = L, P = L);
    return e && N.forEach(function(xn) {
      return n(f, xn);
    }), B && Nn(f, z), _;
  }
  function M(f, s, d, h) {
    if (typeof d == "object" && d !== null && d.type === Wn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ur:
          e: {
            for (var _ = d.key, P = s; P !== null; ) {
              if (P.key === _) {
                if (_ = d.type, _ === Wn) {
                  if (P.tag === 7) {
                    t(f, P.sibling), s = l(P, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (P.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === tn && xu(_) === P.type) {
                  t(f, P.sibling), s = l(P, d.props), s.ref = wt(f, P, d), s.return = f, f = s;
                  break e;
                }
                t(f, P);
                break;
              } else n(f, P);
              P = P.sibling;
            }
            d.type === Wn ? (s = Tn(d.props.children, f.mode, h, d.key), s.return = f, f = s) : (h = Mr(d.type, d.key, d.props, null, f.mode, h), h.ref = wt(f, s, d), h.return = f, f = h);
          }
          return i(f);
        case Bn:
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
            s = Gl(d, f.mode, h), s.return = f, f = s;
          }
          return i(f);
        case tn:
          return P = d._init, M(f, s, P(d._payload), h);
      }
      if (Et(d)) return v(f, s, d, h);
      if (yt(d)) return k(f, s, d, h);
      vr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(f, s.sibling), s = l(s, d), s.return = f, f = s) : (t(f, s), s = Ql(d, f.mode, h), s.return = f, f = s), i(f)) : t(f, s);
  }
  return M;
}
var at = ss(!0), cs = ss(!1), Yr = wn(null), Zr = null, Xn = null, mi = null;
function yi() {
  mi = Xn = Zr = null;
}
function hi(e) {
  var n = Yr.current;
  A(Yr), e._currentValue = n;
}
function zo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function rt(e, n) {
  Zr = e, mi = Xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (me = !0), e.firstContext = null);
}
function Re(e) {
  var n = e._currentValue;
  if (mi !== e) if (e = { context: e, memoizedValue: n, next: null }, Xn === null) {
    if (Zr === null) throw Error(g(308));
    Xn = e, Zr.dependencies = { lanes: 0, firstContext: e };
  } else Xn = Xn.next = e;
  return n;
}
var Rn = null;
function gi(e) {
  Rn === null ? Rn = [e] : Rn.push(e);
}
function fs(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, gi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Je(e, r);
}
function Je(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var rn = !1;
function vi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ds(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ye(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function pn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, j & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Je(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, gi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Je(e, t);
}
function zr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ri(e, t);
  }
}
function Cu(e, n) {
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
function Xr(e, n, t, r) {
  var l = e.updateQueue;
  rn = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, c = a.next;
    a.next = null, i === null ? o = c : i.next = c, i = a;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = c : u.next = c, y.lastBaseUpdate = a));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, y = c = a = null, u = o;
    do {
      var p = u.lane, w = u.eventTime;
      if ((r & p) === p) {
        y !== null && (y = y.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, k = u;
          switch (p = n, w = t, k.tag) {
            case 1:
              if (v = k.payload, typeof v == "function") {
                m = v.call(w, m, p);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = k.payload, p = typeof v == "function" ? v.call(w, m, p) : v, p == null) break e;
              m = K({}, m, p);
              break e;
            case 2:
              rn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (c = y = w, a = m) : y = y.next = w, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (a = m), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    In |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Eu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var rr = {}, We = wn(rr), Gt = wn(rr), Yt = wn(rr);
function Dn(e) {
  if (e === rr) throw Error(g(174));
  return e;
}
function Si(e, n) {
  switch (O(Yt, n), O(Gt, e), O(We, rr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : uo(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = uo(n, e);
  }
  A(We), O(We, n);
}
function st() {
  A(We), A(Gt), A(Yt);
}
function ps(e) {
  Dn(Yt.current);
  var n = Dn(We.current), t = uo(n, e.type);
  n !== t && (O(Gt, e), O(We, t));
}
function wi(e) {
  Gt.current === e && (A(We), A(Gt));
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
var Al = [];
function ki() {
  for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Rr = be.ReactCurrentDispatcher, Bl = be.ReactCurrentBatchConfig, Fn = 0, V = null, X = null, q = null, qr = !1, Tt = !1, Zt = 0, rd = 0;
function oe() {
  throw Error(g(321));
}
function xi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function Ci(e, n, t, r, l, o) {
  if (Fn = o, V = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Rr.current = e === null || e.memoizedState === null ? ud : ad, e = t(r, l), Tt) {
    o = 0;
    do {
      if (Tt = !1, Zt = 0, 25 <= o) throw Error(g(301));
      o += 1, q = X = null, n.updateQueue = null, Rr.current = sd, e = t(r, l);
    } while (Tt);
  }
  if (Rr.current = br, n = X !== null && X.next !== null, Fn = 0, q = X = V = null, qr = !1, n) throw Error(g(300));
  return e;
}
function Ei() {
  var e = Zt !== 0;
  return Zt = 0, e;
}
function $e() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? V.memoizedState = q = e : q = q.next = e, q;
}
function De() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var n = q === null ? V.memoizedState : q.next;
  if (n !== null) q = n, X = e;
  else {
    if (e === null) throw Error(g(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, q === null ? V.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function Xt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Wl(e) {
  var n = De(), t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, o = t.pending;
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
      var y = c.lane;
      if ((Fn & y) === y) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: y,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = m, i = r) : a = a.next = m, V.lanes |= y, In |= y;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, Oe(r, n.memoizedState) || (me = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, V.lanes |= o, In |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = De(), t = n.queue;
  if (t === null) throw Error(g(311));
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
function ms() {
}
function ys(e, n) {
  var t = V, r = De(), l = n(), o = !Oe(r.memoizedState, l);
  if (o && (r.memoizedState = l, me = !0), r = r.queue, _i(vs.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || q !== null && q.memoizedState.tag & 1) {
    if (t.flags |= 2048, Jt(9, gs.bind(null, t, r, l, n), void 0, null), b === null) throw Error(g(349));
    Fn & 30 || hs(t, n, l);
  }
  return l;
}
function hs(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = V.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, V.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function gs(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Ss(n) && ws(e);
}
function vs(e, n, t) {
  return t(function() {
    Ss(n) && ws(e);
  });
}
function Ss(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function ws(e) {
  var n = Je(e, 1);
  n !== null && Ie(n, e, 1, -1);
}
function _u(e) {
  var n = $e();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: e }, n.queue = e, e = e.dispatch = id.bind(null, V, e), [n.memoizedState, e];
}
function Jt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = V.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, V.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function ks() {
  return De().memoizedState;
}
function Dr(e, n, t, r) {
  var l = $e();
  V.flags |= e, l.memoizedState = Jt(1 | n, t, void 0, r === void 0 ? null : r);
}
function dl(e, n, t, r) {
  var l = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (o = i.destroy, r !== null && xi(r, i.deps)) {
      l.memoizedState = Jt(n, t, o, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = Jt(1 | n, t, o, r);
}
function Nu(e, n) {
  return Dr(8390656, 8, e, n);
}
function _i(e, n) {
  return dl(2048, 8, e, n);
}
function xs(e, n) {
  return dl(4, 2, e, n);
}
function Cs(e, n) {
  return dl(4, 4, e, n);
}
function Es(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function _s(e, n, t) {
  return t = t != null ? t.concat([e]) : null, dl(4, 4, Es.bind(null, n, e), t);
}
function Ni() {
}
function Ns(e, n) {
  var t = De();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Ps(e, n) {
  var t = De();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function zs(e, n, t) {
  return Fn & 21 ? (Oe(t, n) || (t = ja(), V.lanes |= t, In |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = t);
}
function ld(e, n) {
  var t = F;
  F = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), n();
  } finally {
    F = t, Bl.transition = r;
  }
}
function Rs() {
  return De().memoizedState;
}
function od(e, n, t) {
  var r = yn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ds(e)) Ls(n, t);
  else if (t = fs(e, n, t, r), t !== null) {
    var l = ce();
    Ie(t, e, r, l), Ts(t, n, r);
  }
}
function id(e, n, t) {
  var r = yn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ds(e)) Ls(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Oe(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, gi(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = fs(e, n, l, r), t !== null && (l = ce(), Ie(t, e, r, l), Ts(t, n, r));
  }
}
function Ds(e) {
  var n = e.alternate;
  return e === V || n !== null && n === V;
}
function Ls(e, n) {
  Tt = qr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Ts(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ri(e, t);
  }
}
var br = { readContext: Re, useCallback: oe, useContext: oe, useEffect: oe, useImperativeHandle: oe, useInsertionEffect: oe, useLayoutEffect: oe, useMemo: oe, useReducer: oe, useRef: oe, useState: oe, useDebugValue: oe, useDeferredValue: oe, useTransition: oe, useMutableSource: oe, useSyncExternalStore: oe, useId: oe, unstable_isNewReconciler: !1 }, ud = { readContext: Re, useCallback: function(e, n) {
  return $e().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Re, useEffect: Nu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Dr(
    4194308,
    4,
    Es.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Dr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Dr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = $e();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = $e();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = od.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = $e();
  return e = { current: e }, n.memoizedState = e;
}, useState: _u, useDebugValue: Ni, useDeferredValue: function(e) {
  return $e().memoizedState = e;
}, useTransition: function() {
  var e = _u(!1), n = e[0];
  return e = ld.bind(null, e[1]), $e().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = V, l = $e();
  if (B) {
    if (t === void 0) throw Error(g(407));
    t = t();
  } else {
    if (t = n(), b === null) throw Error(g(349));
    Fn & 30 || hs(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Nu(vs.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Jt(9, gs.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = $e(), n = b.identifierPrefix;
  if (B) {
    var t = Ge, r = Qe;
    t = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Zt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = rd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, ad = {
  readContext: Re,
  useCallback: Ns,
  useContext: Re,
  useEffect: _i,
  useImperativeHandle: _s,
  useInsertionEffect: xs,
  useLayoutEffect: Cs,
  useMemo: Ps,
  useReducer: Wl,
  useRef: ks,
  useState: function() {
    return Wl(Xt);
  },
  useDebugValue: Ni,
  useDeferredValue: function(e) {
    var n = De();
    return zs(n, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Wl(Xt)[0], n = De().memoizedState;
    return [e, n];
  },
  useMutableSource: ms,
  useSyncExternalStore: ys,
  useId: Rs,
  unstable_isNewReconciler: !1
}, sd = { readContext: Re, useCallback: Ns, useContext: Re, useEffect: _i, useImperativeHandle: _s, useInsertionEffect: xs, useLayoutEffect: Cs, useMemo: Ps, useReducer: Hl, useRef: ks, useState: function() {
  return Hl(Xt);
}, useDebugValue: Ni, useDeferredValue: function(e) {
  var n = De();
  return X === null ? n.memoizedState = e : zs(n, X.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Xt)[0], n = De().memoizedState;
  return [e, n];
}, useMutableSource: ms, useSyncExternalStore: ys, useId: Rs, unstable_isNewReconciler: !1 };
function Te(e, n) {
  if (e && e.defaultProps) {
    n = K({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Ro(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : K({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? $n(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = ce(), l = yn(e), o = Ye(r, l);
  o.payload = n, t != null && (o.callback = t), n = pn(e, o, l), n !== null && (Ie(n, e, l, r), zr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ce(), l = yn(e), o = Ye(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = pn(e, o, l), n !== null && (Ie(n, e, l, r), zr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ce(), r = yn(e), l = Ye(t, r);
  l.tag = 2, n != null && (l.callback = n), n = pn(e, l, r), n !== null && (Ie(n, e, r, t), zr(n, e, r));
} };
function Pu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Ht(t, r) || !Ht(l, o) : !0;
}
function js(e, n, t) {
  var r = !1, l = vn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Re(o) : (l = he(n) ? jn : ae.current, r = n.contextTypes, o = (r = r != null) ? it(e, l) : vn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = pl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function zu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && pl.enqueueReplaceState(n, n.state, null);
}
function Do(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, vi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Re(o) : (o = he(n) ? jn : ae.current, l.context = it(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Ro(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && pl.enqueueReplaceState(l, l.state, null), Xr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ct(e, n) {
  try {
    var t = "", r = n;
    do
      t += Ic(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Vl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Lo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var cd = typeof WeakMap == "function" ? WeakMap : Map;
function Ms(e, n, t) {
  t = Ye(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    nl || (nl = !0, Bo = r), Lo(e, n);
  }, t;
}
function Fs(e, n, t) {
  t = Ye(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Lo(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Lo(e, n), typeof r != "function" && (mn === null ? mn = /* @__PURE__ */ new Set([this]) : mn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Ru(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Ed.bind(null, e, n, t), n.then(e, e));
}
function Du(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Ye(-1, 1), n.tag = 2, pn(t, n, 1))), t.lanes |= 1), e);
}
var fd = be.ReactCurrentOwner, me = !1;
function se(e, n, t, r) {
  n.child = e === null ? cs(n, null, t, r) : at(n, e.child, t, r);
}
function Tu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return rt(n, l), r = Ci(e, n, t, r, o, l), t = Ei(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, qe(e, n, l)) : (B && t && fi(n), n.flags |= 1, se(e, n, r, l), n.child);
}
function ju(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Mi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Is(e, n, o, r, l)) : (e = Mr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Ht, t(i, r) && e.ref === n.ref) return qe(e, n, l);
  }
  return n.flags |= 1, e = hn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Is(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ht(o, r) && e.ref === n.ref) if (me = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return n.lanes = e.lanes, qe(e, n, l);
  }
  return To(e, n, t, r, l);
}
function Os(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(qn, Se), Se |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, O(qn, Se), Se |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, O(qn, Se), Se |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, O(qn, Se), Se |= r;
  return se(e, n, l, t), n.child;
}
function Us(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function To(e, n, t, r, l) {
  var o = he(t) ? jn : ae.current;
  return o = it(n, o), rt(n, l), t = Ci(e, n, t, r, o, l), r = Ei(), e !== null && !me ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, qe(e, n, l)) : (B && r && fi(n), n.flags |= 1, se(e, n, t, l), n.child);
}
function Mu(e, n, t, r, l) {
  if (he(t)) {
    var o = !0;
    Kr(n);
  } else o = !1;
  if (rt(n, l), n.stateNode === null) Lr(e, n), js(n, t, r), Do(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Re(c) : (c = he(t) ? jn : ae.current, c = it(n, c));
    var y = t.getDerivedStateFromProps, m = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && zu(n, i, r, c), rn = !1;
    var p = n.memoizedState;
    i.state = p, Xr(n, r, i, l), a = n.memoizedState, u !== r || p !== a || ye.current || rn ? (typeof y == "function" && (Ro(n, t, y, r), a = n.memoizedState), (u = rn || Pu(n, t, u, r, p, a, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, ds(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Te(n.type, u), i.props = c, m = n.pendingProps, p = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = Re(a) : (a = he(t) ? jn : ae.current, a = it(n, a));
    var w = t.getDerivedStateFromProps;
    (y = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== a) && zu(n, i, r, a), rn = !1, p = n.memoizedState, i.state = p, Xr(n, r, i, l);
    var v = n.memoizedState;
    u !== m || p !== v || ye.current || rn ? (typeof w == "function" && (Ro(n, t, w, r), v = n.memoizedState), (c = rn || Pu(n, t, c, r, p, v, a) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = v), i.props = r, i.state = v, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return jo(e, n, t, r, o, l);
}
function jo(e, n, t, r, l, o) {
  Us(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Su(n, t, !1), qe(e, n, o);
  r = n.stateNode, fd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = at(n, e.child, null, o), n.child = at(n, null, u, o)) : se(e, n, u, o), n.memoizedState = r.state, l && Su(n, t, !0), n.child;
}
function $s(e) {
  var n = e.stateNode;
  n.pendingContext ? vu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && vu(e, n.context, !1), Si(e, n.containerInfo);
}
function Fu(e, n, t, r, l) {
  return ut(), pi(l), n.flags |= 256, se(e, n, t, r), n.child;
}
var Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function As(e, n, t) {
  var r = n.pendingProps, l = H.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(H, l & 1), e === null)
    return Po(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = hl(i, r, 0, null), e = Tn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Fo(t), n.memoizedState = Mo, e) : Pi(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return dd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = hn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = hn(u, o) : (o = Tn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Fo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Mo, r;
  }
  return o = e.child, e = o.sibling, r = hn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Pi(e, n) {
  return n = hl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function Sr(e, n, t, r) {
  return r !== null && pi(r), at(n, e.child, null, t), e = Pi(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function dd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Vl(Error(g(422))), Sr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = hl({ mode: "visible", children: r.children }, l, 0, null), o = Tn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && at(n, e.child, null, i), n.child.memoizedState = Fo(i), n.memoizedState = Mo, o);
  if (!(n.mode & 1)) return Sr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(g(419)), r = Vl(o, r, void 0), Sr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, me || u) {
    if (r = b, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Je(e, l), Ie(r, e, l, -1));
    }
    return ji(), r = Vl(Error(g(421))), Sr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = _d.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, we = dn(l.nextSibling), ke = n, B = !0, Me = null, e !== null && (_e[Ne++] = Qe, _e[Ne++] = Ge, _e[Ne++] = Mn, Qe = e.id, Ge = e.overflow, Mn = n), n = Pi(n, r.children), n.flags |= 4096, n);
}
function Iu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), zo(e.return, n, t);
}
function Kl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Bs(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (se(e, n, r.children, t), r = H.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Iu(e, t, n);
      else if (e.tag === 19) Iu(e, t, n);
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
  if (O(H, r), !(n.mode & 1)) n.memoizedState = null;
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
function Lr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function qe(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), In |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(g(153));
  if (n.child !== null) {
    for (e = n.child, t = hn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = hn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function pd(e, n, t) {
  switch (n.tag) {
    case 3:
      $s(n), ut();
      break;
    case 5:
      ps(n);
      break;
    case 1:
      he(n.type) && Kr(n);
      break;
    case 4:
      Si(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      O(Yr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (O(H, H.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? As(e, n, t) : (O(H, H.current & 1), e = qe(e, n, t), e !== null ? e.sibling : null);
      O(H, H.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return Bs(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Os(e, n, t);
  }
  return qe(e, n, t);
}
var Ws, Io, Hs, Vs;
Ws = function(e, n) {
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
Io = function() {
};
Hs = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Dn(We.current);
    var o = null;
    switch (t) {
      case "input":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      case "select":
        l = K({}, l, { value: void 0 }), r = K({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = io(e, l), r = io(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    ao(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (It.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (It.hasOwnProperty(c) ? (a != null && c === "onScroll" && U("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Vs = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function kt(e, n) {
  if (!B) switch (e.tailMode) {
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
function ie(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function md(e, n, t) {
  var r = n.pendingProps;
  switch (di(n), n.tag) {
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
      return ie(n), null;
    case 1:
      return he(n.type) && Vr(), ie(n), null;
    case 3:
      return r = n.stateNode, st(), A(ye), A(ae), ki(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Me !== null && (Vo(Me), Me = null))), Io(e, n), ie(n), null;
    case 5:
      wi(n);
      var l = Dn(Yt.current);
      if (t = n.type, e !== null && n.stateNode != null) Hs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return ie(n), null;
        }
        if (e = Dn(We.current), gr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ae] = n, r[Qt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nt.length; l++) U(Nt[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Ki(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, U("invalid", r);
              break;
            case "textarea":
              Gi(r, o), U("invalid", r);
          }
          ao(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && hr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && hr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : It.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r);
          }
          switch (t) {
            case "input":
              ar(r), Qi(r, o, !0);
              break;
            case "textarea":
              ar(r), Yi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = va(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ae] = n, e[Qt] = r, Ws(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = so(t, r), t) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nt.length; l++) U(Nt[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                Ki(e, r), l = ro(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = K({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                Gi(e, r), l = io(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            ao(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? ka(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sa(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Ot(e, a) : typeof a == "number" && Ot(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (It.hasOwnProperty(o) ? a != null && o === "onScroll" && U("scroll", e) : a != null && Jo(e, o, a, i));
            }
            switch (t) {
              case "input":
                ar(e), Qi(e, r, !1);
                break;
              case "textarea":
                ar(e), Yi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? bn(e, !!r.multiple, o, !1) : r.defaultValue != null && bn(
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
      return ie(n), null;
    case 6:
      if (e && n.stateNode != null) Vs(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
        if (t = Dn(Yt.current), Dn(We.current), gr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ae] = n, (o = r.nodeValue !== t) && (e = ke, e !== null)) switch (e.tag) {
            case 3:
              hr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && hr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ae] = n, n.stateNode = r;
      }
      return ie(n), null;
    case 13:
      if (A(H), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (B && we !== null && n.mode & 1 && !(n.flags & 128)) as(), ut(), n.flags |= 98560, o = !1;
        else if (o = gr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(g(317));
            o[Ae] = n;
          } else ut(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ie(n), o = !1;
        } else Me !== null && (Vo(Me), Me = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || H.current & 1 ? J === 0 && (J = 3) : ji())), n.updateQueue !== null && (n.flags |= 4), ie(n), null);
    case 4:
      return st(), Io(e, n), e === null && Vt(n.stateNode.containerInfo), ie(n), null;
    case 10:
      return hi(n.type._context), ie(n), null;
    case 17:
      return he(n.type) && Vr(), ie(n), null;
    case 19:
      if (A(H), o = n.memoizedState, o === null) return ie(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) kt(o, !1);
      else {
        if (J !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = Jr(e), i !== null) {
            for (n.flags |= 128, kt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return O(H, H.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && G() > ft && (n.flags |= 128, r = !0, kt(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jr(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), kt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !B) return ie(n), null;
        } else 2 * G() - o.renderingStartTime > ft && t !== 1073741824 && (n.flags |= 128, r = !0, kt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = G(), n.sibling = null, t = H.current, O(H, r ? t & 1 | 2 : t & 1), n) : (ie(n), null);
    case 22:
    case 23:
      return Ti(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Se & 1073741824 && (ie(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ie(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, n.tag));
}
function yd(e, n) {
  switch (di(n), n.tag) {
    case 1:
      return he(n.type) && Vr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return st(), A(ye), A(ae), ki(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return wi(n), null;
    case 13:
      if (A(H), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(g(340));
        ut();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return A(H), null;
    case 4:
      return st(), null;
    case 10:
      return hi(n.type._context), null;
    case 22:
    case 23:
      return Ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1, ue = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Jn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    Q(e, n, r);
  }
  else t.current = null;
}
function Oo(e, n, t) {
  try {
    t();
  } catch (r) {
    Q(e, n, r);
  }
}
var Ou = !1;
function gd(e, n) {
  if (wo = Ar, e = Za(), ci(e)) {
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
        var i = 0, u = -1, a = -1, c = 0, y = 0, m = e, p = null;
        n: for (; ; ) {
          for (var w; m !== t || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (a = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (w = m.firstChild) !== null; )
            p = m, m = w;
          for (; ; ) {
            if (m === e) break n;
            if (p === t && ++c === l && (u = i), p === o && ++y === r && (a = i), (w = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = w;
        }
        t = u === -1 || a === -1 ? null : { start: u, end: a };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (ko = { focusedElem: e, selectionRange: t }, Ar = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
  else for (; E !== null; ) {
    n = E;
    try {
      var v = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var k = v.memoizedProps, M = v.memoizedState, f = n.stateNode, s = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Te(n.type, k), M);
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
          throw Error(g(163));
      }
    } catch (h) {
      Q(n, n.return, h);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, E = e;
      break;
    }
    E = n.return;
  }
  return v = Ou, Ou = !1, v;
}
function jt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Oo(n, t, o);
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
function Uo(e) {
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
function Ks(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Ks(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ae], delete n[Qt], delete n[Eo], delete n[bf], delete n[ed])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qs(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $o(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
  else if (r !== 4 && (e = e.child, e !== null)) for ($o(e, n, t), e = e.sibling; e !== null; ) $o(e, n, t), e = e.sibling;
}
function Ao(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ao(e, n, t), e = e.sibling; e !== null; ) Ao(e, n, t), e = e.sibling;
}
var ne = null, je = !1;
function nn(e, n, t) {
  for (t = t.child; t !== null; ) Gs(e, n, t), t = t.sibling;
}
function Gs(e, n, t) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(il, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      ue || Jn(t, n);
    case 6:
      var r = ne, l = je;
      ne = null, nn(e, n, t), ne = r, je = l, ne !== null && (je ? (e = ne, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ne.removeChild(t.stateNode));
      break;
    case 18:
      ne !== null && (je ? (e = ne, t = t.stateNode, e.nodeType === 8 ? Ul(e.parentNode, t) : e.nodeType === 1 && Ul(e, t), Bt(e)) : Ul(ne, t.stateNode));
      break;
    case 4:
      r = ne, l = je, ne = t.stateNode.containerInfo, je = !0, nn(e, n, t), ne = r, je = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Oo(t, n, i), l = l.next;
        } while (l !== r);
      }
      nn(e, n, t);
      break;
    case 1:
      if (!ue && (Jn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      t.mode & 1 ? (ue = (r = ue) || t.memoizedState !== null, nn(e, n, t), ue = r) : nn(e, n, t);
      break;
    default:
      nn(e, n, t);
  }
}
function $u(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new hd()), n.forEach(function(r) {
      var l = Nd.bind(null, e, r);
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
      if (ne === null) throw Error(g(160));
      Gs(o, i, l), ne = null, je = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      Q(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Ys(n, e), n = n.sibling;
}
function Ys(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(n, e), Ue(e), r & 4) {
        try {
          jt(3, e, e.return), ml(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          jt(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      Le(n, e), Ue(e), r & 512 && t !== null && Jn(t, t.return);
      break;
    case 5:
      if (Le(n, e), Ue(e), r & 512 && t !== null && Jn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Ot(l, "");
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && ha(l, o), so(u, i);
          var c = so(u, o);
          for (i = 0; i < a.length; i += 2) {
            var y = a[i], m = a[i + 1];
            y === "style" ? ka(l, m) : y === "dangerouslySetInnerHTML" ? Sa(l, m) : y === "children" ? Ot(l, m) : Jo(l, y, m, c);
          }
          switch (u) {
            case "input":
              lo(l, o);
              break;
            case "textarea":
              ga(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? bn(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? bn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : bn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Qt] = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Le(n, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Le(n, e), Ue(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Bt(n.containerInfo);
      } catch (k) {
        Q(e, e.return, k);
      }
      break;
    case 4:
      Le(n, e), Ue(e);
      break;
    case 13:
      Le(n, e), Ue(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Di = G())), r & 4 && $u(e);
      break;
    case 22:
      if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || y, Le(n, e), ue = c) : Le(n, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !y && e.mode & 1) for (E = e, y = e.child; y !== null; ) {
          for (m = E = y; E !== null; ) {
            switch (p = E, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jt(4, p, p.return);
                break;
              case 1:
                Jn(p, p.return);
                var v = p.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = p, t = p.return;
                  try {
                    n = r, v.props = n.memoizedProps, v.state = n.memoizedState, v.componentWillUnmount();
                  } catch (k) {
                    Q(r, t, k);
                  }
                }
                break;
              case 5:
                Jn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Bu(m);
                  continue;
                }
            }
            w !== null ? (w.return = p, E = w) : Bu(m);
          }
          y = y.sibling;
        }
        e: for (y = null, m = e; ; ) {
          if (m.tag === 5) {
            if (y === null) {
              y = m;
              try {
                l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = wa("display", i));
              } catch (k) {
                Q(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (y === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (k) {
              Q(e, e.return, k);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            y === m && (y = null), m = m.return;
          }
          y === m && (y = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Le(n, e), Ue(e), r & 4 && $u(e);
      break;
    case 21:
      break;
    default:
      Le(
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
          if (Qs(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ot(l, ""), r.flags &= -33);
          var o = Uu(e);
          Ao(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Uu(e);
          $o(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function vd(e, n, t) {
  E = e, Zs(e);
}
function Zs(e, n, t) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || wr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || ue;
        u = wr;
        var c = ue;
        if (wr = i, (ue = a) && !c) for (E = l; E !== null; ) i = E, a = i.child, i.tag === 22 && i.memoizedState !== null ? Wu(l) : a !== null ? (a.return = i, E = a) : Wu(l);
        for (; o !== null; ) E = o, Zs(o), o = o.sibling;
        E = l, wr = u, ue = c;
      }
      Au(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Au(e);
  }
}
function Au(e) {
  for (; E !== null; ) {
    var n = E;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ue || ml(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !ue) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Te(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && Eu(n, o, r);
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
              Eu(n, i, t);
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
                var y = c.memoizedState;
                if (y !== null) {
                  var m = y.dehydrated;
                  m !== null && Bt(m);
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
            throw Error(g(163));
        }
        ue || n.flags & 512 && Uo(n);
      } catch (p) {
        Q(n, n.return, p);
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
function Bu(e) {
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
function Wu(e) {
  for (; E !== null; ) {
    var n = E;
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
            Uo(n);
          } catch (a) {
            Q(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Uo(n);
          } catch (a) {
            Q(n, i, a);
          }
      }
    } catch (a) {
      Q(n, n.return, a);
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
var Sd = Math.ceil, el = be.ReactCurrentDispatcher, zi = be.ReactCurrentOwner, ze = be.ReactCurrentBatchConfig, j = 0, b = null, Z = null, te = 0, Se = 0, qn = wn(0), J = 0, qt = null, In = 0, yl = 0, Ri = 0, Mt = null, pe = null, Di = 0, ft = 1 / 0, Ve = null, nl = !1, Bo = null, mn = null, kr = !1, an = null, tl = 0, Ft = 0, Wo = null, Tr = -1, jr = 0;
function ce() {
  return j & 6 ? G() : Tr !== -1 ? Tr : Tr = G();
}
function yn(e) {
  return e.mode & 1 ? j & 2 && te !== 0 ? te & -te : td.transition !== null ? (jr === 0 && (jr = ja()), jr) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Aa(e.type)), e) : 1;
}
function Ie(e, n, t, r) {
  if (50 < Ft) throw Ft = 0, Wo = null, Error(g(185));
  er(e, t, r), (!(j & 2) || e !== b) && (e === b && (!(j & 2) && (yl |= t), J === 4 && on(e, te)), ge(e, r), t === 1 && j === 0 && !(n.mode & 1) && (ft = G() + 500, fl && kn()));
}
function ge(e, n) {
  var t = e.callbackNode;
  nf(e, n);
  var r = $r(e, e === b ? te : 0);
  if (r === 0) t !== null && Ji(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Ji(t), n === 1) e.tag === 0 ? nd(Hu.bind(null, e)) : os(Hu.bind(null, e)), Jf(function() {
      !(j & 6) && kn();
    }), t = null;
    else {
      switch (Ma(r)) {
        case 1:
          t = ti;
          break;
        case 4:
          t = La;
          break;
        case 16:
          t = Ur;
          break;
        case 536870912:
          t = Ta;
          break;
        default:
          t = Ur;
      }
      t = rc(t, Xs.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Xs(e, n) {
  if (Tr = -1, jr = 0, j & 6) throw Error(g(327));
  var t = e.callbackNode;
  if (lt() && e.callbackNode !== t) return null;
  var r = $r(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = rl(e, r);
  else {
    n = r;
    var l = j;
    j |= 2;
    var o = qs();
    (b !== e || te !== n) && (Ve = null, ft = G() + 500, Ln(e, n));
    do
      try {
        xd();
        break;
      } catch (u) {
        Js(e, u);
      }
    while (!0);
    yi(), el.current = o, j = l, Z !== null ? n = 0 : (b = null, te = 0, n = J);
  }
  if (n !== 0) {
    if (n === 2 && (l = yo(e), l !== 0 && (r = l, n = Ho(e, l))), n === 1) throw t = qt, Ln(e, 0), on(e, r), ge(e, G()), t;
    if (n === 6) on(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !wd(l) && (n = rl(e, r), n === 2 && (o = yo(e), o !== 0 && (r = o, n = Ho(e, o))), n === 1)) throw t = qt, Ln(e, 0), on(e, r), ge(e, G()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          Pn(e, pe, Ve);
          break;
        case 3:
          if (on(e, r), (r & 130023424) === r && (n = Di + 500 - G(), 10 < n)) {
            if ($r(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Co(Pn.bind(null, e, pe, Ve), n);
            break;
          }
          Pn(e, pe, Ve);
          break;
        case 4:
          if (on(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Sd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Co(Pn.bind(null, e, pe, Ve), r);
            break;
          }
          Pn(e, pe, Ve);
          break;
        case 5:
          Pn(e, pe, Ve);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return ge(e, G()), e.callbackNode === t ? Xs.bind(null, e) : null;
}
function Ho(e, n) {
  var t = Mt;
  return e.current.memoizedState.isDehydrated && (Ln(e, n).flags |= 256), e = rl(e, n), e !== 2 && (n = pe, pe = t, n !== null && Vo(n)), e;
}
function Vo(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function wd(e) {
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
function on(e, n) {
  for (n &= ~Ri, n &= ~yl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Fe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Hu(e) {
  if (j & 6) throw Error(g(327));
  lt();
  var n = $r(e, 0);
  if (!(n & 1)) return ge(e, G()), null;
  var t = rl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = yo(e);
    r !== 0 && (n = r, t = Ho(e, r));
  }
  if (t === 1) throw t = qt, Ln(e, 0), on(e, n), ge(e, G()), t;
  if (t === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Pn(e, pe, Ve), ge(e, G()), null;
}
function Li(e, n) {
  var t = j;
  j |= 1;
  try {
    return e(n);
  } finally {
    j = t, j === 0 && (ft = G() + 500, fl && kn());
  }
}
function On(e) {
  an !== null && an.tag === 0 && !(j & 6) && lt();
  var n = j;
  j |= 1;
  var t = ze.transition, r = F;
  try {
    if (ze.transition = null, F = 1, e) return e();
  } finally {
    F = r, ze.transition = t, j = n, !(j & 6) && kn();
  }
}
function Ti() {
  Se = qn.current, A(qn);
}
function Ln(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Xf(t)), Z !== null) for (t = Z.return; t !== null; ) {
    var r = t;
    switch (di(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Vr();
        break;
      case 3:
        st(), A(ye), A(ae), ki();
        break;
      case 5:
        wi(r);
        break;
      case 4:
        st();
        break;
      case 13:
        A(H);
        break;
      case 19:
        A(H);
        break;
      case 10:
        hi(r.type._context);
        break;
      case 22:
      case 23:
        Ti();
    }
    t = t.return;
  }
  if (b = e, Z = e = hn(e.current, null), te = Se = n, J = 0, qt = null, Ri = yl = In = 0, pe = Mt = null, Rn !== null) {
    for (n = 0; n < Rn.length; n++) if (t = Rn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    Rn = null;
  }
  return e;
}
function Js(e, n) {
  do {
    var t = Z;
    try {
      if (yi(), Rr.current = br, qr) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        qr = !1;
      }
      if (Fn = 0, q = X = V = null, Tt = !1, Zt = 0, zi.current = null, t === null || t.return === null) {
        J = 1, qt = n, Z = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, a = n;
        if (n = te, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, y = u, m = y.tag;
          if (!(y.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = y.alternate;
            p ? (y.updateQueue = p.updateQueue, y.memoizedState = p.memoizedState, y.lanes = p.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var w = Du(i);
          if (w !== null) {
            w.flags &= -257, Lu(w, i, u, o, n), w.mode & 1 && Ru(o, c, n), n = w, a = c;
            var v = n.updateQueue;
            if (v === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(a), n.updateQueue = k;
            } else v.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Ru(o, c, n), ji();
              break e;
            }
            a = Error(g(426));
          }
        } else if (B && u.mode & 1) {
          var M = Du(i);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Lu(M, i, u, o, n), pi(ct(a, u));
            break e;
          }
        }
        o = a = ct(a, u), J !== 4 && (J = 2), Mt === null ? Mt = [o] : Mt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Ms(o, a, n);
              Cu(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (mn === null || !mn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var h = Fs(o, u, n);
                Cu(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ec(t);
    } catch (_) {
      n = _, Z === t && t !== null && (Z = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function qs() {
  var e = el.current;
  return el.current = br, e === null ? br : e;
}
function ji() {
  (J === 0 || J === 3 || J === 2) && (J = 4), b === null || !(In & 268435455) && !(yl & 268435455) || on(b, te);
}
function rl(e, n) {
  var t = j;
  j |= 2;
  var r = qs();
  (b !== e || te !== n) && (Ve = null, Ln(e, n));
  do
    try {
      kd();
      break;
    } catch (l) {
      Js(e, l);
    }
  while (!0);
  if (yi(), j = t, el.current = r, Z !== null) throw Error(g(261));
  return b = null, te = 0, J;
}
function kd() {
  for (; Z !== null; ) bs(Z);
}
function xd() {
  for (; Z !== null && !Qc(); ) bs(Z);
}
function bs(e) {
  var n = tc(e.alternate, e, Se);
  e.memoizedProps = e.pendingProps, n === null ? ec(e) : Z = n, zi.current = null;
}
function ec(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = yd(t, n), t !== null) {
        t.flags &= 32767, Z = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, Z = null;
        return;
      }
    } else if (t = md(t, n, Se), t !== null) {
      Z = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Z = n;
      return;
    }
    Z = n = e;
  } while (n !== null);
  J === 0 && (J = 5);
}
function Pn(e, n, t) {
  var r = F, l = ze.transition;
  try {
    ze.transition = null, F = 1, Cd(e, n, t, r);
  } finally {
    ze.transition = l, F = r;
  }
  return null;
}
function Cd(e, n, t, r) {
  do
    lt();
  while (an !== null);
  if (j & 6) throw Error(g(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (tf(e, o), e === b && (Z = b = null, te = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || kr || (kr = !0, rc(Ur, function() {
    return lt(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = ze.transition, ze.transition = null;
    var i = F;
    F = 1;
    var u = j;
    j |= 4, zi.current = null, gd(e, t), Ys(t, e), Hf(ko), Ar = !!wo, ko = wo = null, e.current = t, vd(t), Gc(), j = u, F = i, ze.transition = o;
  } else e.current = t;
  if (kr && (kr = !1, an = e, tl = l), o = e.pendingLanes, o === 0 && (mn = null), Xc(t.stateNode), ge(e, G()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw nl = !1, e = Bo, Bo = null, e;
  return tl & 1 && e.tag !== 0 && lt(), o = e.pendingLanes, o & 1 ? e === Wo ? Ft++ : (Ft = 0, Wo = e) : Ft = 0, kn(), null;
}
function lt() {
  if (an !== null) {
    var e = Ma(tl), n = ze.transition, t = F;
    try {
      if (ze.transition = null, F = 16 > e ? 16 : e, an === null) var r = !1;
      else {
        if (e = an, an = null, tl = 0, j & 6) throw Error(g(331));
        var l = j;
        for (j |= 4, E = e.current; E !== null; ) {
          var o = E, i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (E = c; E !== null; ) {
                  var y = E;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jt(8, y, o);
                  }
                  var m = y.child;
                  if (m !== null) m.return = y, E = m;
                  else for (; E !== null; ) {
                    y = E;
                    var p = y.sibling, w = y.return;
                    if (Ks(y), y === c) {
                      E = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, E = p;
                      break;
                    }
                    E = w;
                  }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var k = v.child;
                if (k !== null) {
                  v.child = null;
                  do {
                    var M = k.sibling;
                    k.sibling = null, k = M;
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
                jt(9, o, o.return);
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
                  ml(9, u);
              }
            } catch (_) {
              Q(u, u.return, _);
            }
            if (u === i) {
              E = null;
              break e;
            }
            var h = u.sibling;
            if (h !== null) {
              h.return = u.return, E = h;
              break e;
            }
            E = u.return;
          }
        }
        if (j = l, kn(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(il, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      F = t, ze.transition = n;
    }
  }
  return !1;
}
function Vu(e, n, t) {
  n = ct(t, n), n = Ms(e, n, 1), e = pn(e, n, 1), n = ce(), e !== null && (er(e, 1, n), ge(e, n));
}
function Q(e, n, t) {
  if (e.tag === 3) Vu(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      Vu(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
        e = ct(t, e), e = Fs(n, e, 1), n = pn(n, e, 1), e = ce(), n !== null && (er(n, 1, e), ge(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Ed(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ce(), e.pingedLanes |= e.suspendedLanes & t, b === e && (te & t) === t && (J === 4 || J === 3 && (te & 130023424) === te && 500 > G() - Di ? Ln(e, 0) : Ri |= t), ge(e, n);
}
function nc(e, n) {
  n === 0 && (e.mode & 1 ? (n = fr, fr <<= 1, !(fr & 130023424) && (fr = 4194304)) : n = 1);
  var t = ce();
  e = Je(e, n), e !== null && (er(e, n, t), ge(e, t));
}
function _d(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), nc(e, t);
}
function Nd(e, n) {
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
      throw Error(g(314));
  }
  r !== null && r.delete(n), nc(e, t);
}
var tc;
tc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || ye.current) me = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return me = !1, pd(e, n, t);
    me = !!(e.flags & 131072);
  }
  else me = !1, B && n.flags & 1048576 && is(n, Gr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Lr(e, n), e = n.pendingProps;
      var l = it(n, ae.current);
      rt(n, t), l = Ci(null, n, r, e, l, t);
      var o = Ei();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, he(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, vi(n), l.updater = pl, n.stateNode = l, l._reactInternals = n, Do(n, r, e, t), n = jo(null, n, r, !0, o, t)) : (n.tag = 0, B && o && fi(n), se(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Lr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = zd(r), e = Te(r, e), l) {
          case 0:
            n = To(null, n, r, e, t);
            break e;
          case 1:
            n = Mu(null, n, r, e, t);
            break e;
          case 11:
            n = Tu(null, n, r, e, t);
            break e;
          case 14:
            n = ju(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(g(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), To(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), Mu(e, n, r, l, t);
    case 3:
      e: {
        if ($s(n), e === null) throw Error(g(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, ds(e, n), Xr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = ct(Error(g(423)), n), n = Fu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = ct(Error(g(424)), n), n = Fu(e, n, r, t, l);
          break e;
        } else for (we = dn(n.stateNode.containerInfo.firstChild), ke = n, B = !0, Me = null, t = cs(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (ut(), r === l) {
            n = qe(e, n, t);
            break e;
          }
          se(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ps(n), e === null && Po(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, xo(r, l) ? i = null : o !== null && xo(r, o) && (n.flags |= 32), Us(e, n), se(e, n, i, t), n.child;
    case 6:
      return e === null && Po(n), null;
    case 13:
      return As(e, n, t);
    case 4:
      return Si(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = at(n, null, r, t) : se(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), Tu(e, n, r, l, t);
    case 7:
      return se(e, n, n.pendingProps, t), n.child;
    case 8:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, O(Yr, r._currentValue), r._currentValue = i, o !== null) if (Oe(o.value, i)) {
          if (o.children === l.children && !ye.current) {
            n = qe(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = Ye(-1, t & -t), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var y = c.pending;
                    y === null ? a.next = a : (a.next = y.next, y.next = a), c.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), zo(
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
            if (i = o.return, i === null) throw Error(g(341));
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), zo(i, t, n), i = o.sibling;
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
      return l = n.type, r = n.pendingProps.children, rt(n, t), l = Re(l), r = r(l), n.flags |= 1, se(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Te(r, n.pendingProps), l = Te(r.type, l), ju(e, n, r, l, t);
    case 15:
      return Is(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), Lr(e, n), n.tag = 1, he(r) ? (e = !0, Kr(n)) : e = !1, rt(n, t), js(n, r, l), Do(n, r, l, t), jo(null, n, r, !0, e, t);
    case 19:
      return Bs(e, n, t);
    case 22:
      return Os(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function rc(e, n) {
  return Da(e, n);
}
function Pd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pe(e, n, t, r) {
  return new Pd(e, n, t, r);
}
function Mi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zd(e) {
  if (typeof e == "function") return Mi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bo) return 11;
    if (e === ei) return 14;
  }
  return 2;
}
function hn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Pe(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Mr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Mi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Wn:
      return Tn(t.children, l, o, n);
    case qo:
      i = 8, l |= 8;
      break;
    case bl:
      return e = Pe(12, t, n, l | 2), e.elementType = bl, e.lanes = o, e;
    case eo:
      return e = Pe(13, t, n, l), e.elementType = eo, e.lanes = o, e;
    case no:
      return e = Pe(19, t, n, l), e.elementType = no, e.lanes = o, e;
    case pa:
      return hl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case fa:
          i = 10;
          break e;
        case da:
          i = 9;
          break e;
        case bo:
          i = 11;
          break e;
        case ei:
          i = 14;
          break e;
        case tn:
          i = 16, r = null;
          break e;
      }
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return n = Pe(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Tn(e, n, t, r) {
  return e = Pe(7, e, r, n), e.lanes = t, e;
}
function hl(e, n, t, r) {
  return e = Pe(22, e, r, n), e.elementType = pa, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Ql(e, n, t) {
  return e = Pe(6, e, null, n), e.lanes = t, e;
}
function Gl(e, n, t) {
  return n = Pe(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Rd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Fi(e, n, t, r, l, o, i, u, a) {
  return e = new Rd(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Pe(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vi(o), e;
}
function Dd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Bn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function lc(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(g(170));
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
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (he(t)) return ls(e, t, n);
  }
  return n;
}
function oc(e, n, t, r, l, o, i, u, a) {
  return e = Fi(t, r, !0, e, l, o, i, u, a), e.context = lc(null), t = e.current, r = ce(), l = yn(t), o = Ye(r, l), o.callback = n ?? null, pn(t, o, l), e.current.lanes = l, er(e, l, r), ge(e, r), e;
}
function gl(e, n, t, r) {
  var l = n.current, o = ce(), i = yn(l);
  return t = lc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Ye(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = pn(l, n, i), e !== null && (Ie(e, l, i, o), zr(e, l, i)), i;
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
function Ku(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ii(e, n) {
  Ku(e, n), (e = e.alternate) && Ku(e, n);
}
function Ld() {
  return null;
}
var ic = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oi(e) {
  this._internalRoot = e;
}
vl.prototype.render = Oi.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(g(409));
  gl(e, n, null, null);
};
vl.prototype.unmount = Oi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    On(function() {
      gl(null, e, null, null);
    }), n[Xe] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Oa();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < ln.length && n !== 0 && n < ln[t].priority; t++) ;
    ln.splice(t, 0, e), t === 0 && $a(e);
  }
};
function Ui(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Qu() {
}
function Td(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = ll(i);
        o.call(c);
      };
    }
    var i = oc(n, r, e, 0, null, !1, !1, "", Qu);
    return e._reactRootContainer = i, e[Xe] = i.current, Vt(e.nodeType === 8 ? e.parentNode : e), On(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ll(a);
      u.call(c);
    };
  }
  var a = Fi(e, 0, !1, null, null, !1, !1, "", Qu);
  return e._reactRootContainer = a, e[Xe] = a.current, Vt(e.nodeType === 8 ? e.parentNode : e), On(function() {
    gl(n, a, t, r);
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
    gl(n, i, e, l);
  } else i = Td(t, n, e, l, r);
  return ll(i);
}
Fa = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = _t(n.pendingLanes);
        t !== 0 && (ri(n, t | 1), ge(n, G()), !(j & 6) && (ft = G() + 500, kn()));
      }
      break;
    case 13:
      On(function() {
        var r = Je(e, 1);
        if (r !== null) {
          var l = ce();
          Ie(r, e, 1, l);
        }
      }), Ii(e, 1);
  }
};
li = function(e) {
  if (e.tag === 13) {
    var n = Je(e, 134217728);
    if (n !== null) {
      var t = ce();
      Ie(n, e, 134217728, t);
    }
    Ii(e, 134217728);
  }
};
Ia = function(e) {
  if (e.tag === 13) {
    var n = yn(e), t = Je(e, n);
    if (t !== null) {
      var r = ce();
      Ie(t, e, n, r);
    }
    Ii(e, n);
  }
};
Oa = function() {
  return F;
};
Ua = function(e, n) {
  var t = F;
  try {
    return F = e, n();
  } finally {
    F = t;
  }
};
fo = function(e, n, t) {
  switch (n) {
    case "input":
      if (lo(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(g(90));
            ya(r), lo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ga(e, t);
      break;
    case "select":
      n = t.value, n != null && bn(e, !!t.multiple, n, !1);
  }
};
Ea = Li;
_a = On;
var jd = { usingClientEntryPoint: !1, Events: [tr, Qn, cl, xa, Ca, Li] }, xt = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Md = { bundleType: xt.bundleType, version: xt.version, rendererPackageName: xt.rendererPackageName, rendererConfig: xt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = za(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xt.findFiberByHostInstance || Ld, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xr.isDisabled && xr.supportsFiber) try {
    il = xr.inject(Md), Be = xr;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jd;
Ce.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ui(n)) throw Error(g(200));
  return Dd(e, n, null, t);
};
Ce.createRoot = function(e, n) {
  if (!Ui(e)) throw Error(g(299));
  var t = !1, r = "", l = ic;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Fi(e, 1, !1, null, null, t, !1, r, l), e[Xe] = n.current, Vt(e.nodeType === 8 ? e.parentNode : e), new Oi(n);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = za(n), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return On(e);
};
Ce.hydrate = function(e, n, t) {
  if (!Sl(n)) throw Error(g(200));
  return wl(null, e, n, !0, t);
};
Ce.hydrateRoot = function(e, n, t) {
  if (!Ui(e)) throw Error(g(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = ic;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = oc(n, null, e, 1, t ?? null, l, !1, o, i), e[Xe] = n.current, Vt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new vl(n);
};
Ce.render = function(e, n, t) {
  if (!Sl(n)) throw Error(g(200));
  return wl(null, e, n, !1, t);
};
Ce.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(g(40));
  return e._reactRootContainer ? (On(function() {
    wl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Li;
Ce.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!Sl(t)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return wl(e, n, t, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function uc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc);
    } catch (e) {
      console.error(e);
    }
}
uc(), ua.exports = Ce;
var Fd = ua.exports, Gu = Fd;
Jl.createRoot = Gu.createRoot, Jl.hydrateRoot = Gu.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = (e) => {
  const n = Od(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yl = {
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
const Ud = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
}, $d = $.createContext({}), Ad = () => $.useContext($d), Bd = $.forwardRef(
  ({ color: e, size: n, strokeWidth: t, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: y = 2,
      absoluteStrokeWidth: m = !1,
      color: p = "currentColor",
      className: w = ""
    } = Ad() ?? {}, v = r ?? m ? Number(t ?? y) * 24 / Number(n ?? c) : t ?? y;
    return $.createElement(
      "svg",
      {
        ref: a,
        ...Yl,
        width: n ?? c ?? Yl.width,
        height: n ?? c ?? Yl.height,
        stroke: e ?? p,
        strokeWidth: v,
        className: ac("lucide", w, l),
        ...!o && !Ud(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([k, M]) => $.createElement(k, M)),
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
const He = (e, n) => {
  const t = $.forwardRef(
    ({ className: r, ...l }, o) => $.createElement(Bd, {
      ref: o,
      iconNode: n,
      className: ac(
        `lucide-${Id(Yu(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return t.displayName = Yu(e), t;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Hd = He("arrow-down", Wd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vd = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Kd = He("arrow-up-down", Vd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = [
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
], Gd = He("calculator", Qd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Zd = He("check", Yd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Jd = He("chevron-down", Xd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], bd = He("refresh-cw", qd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], np = He("rotate-ccw-clock", ep);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], rp = He("search", tp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [
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
], op = He("sparkles", lp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], up = He("trash-2", ip), Zl = {
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
}, Zu = ({ options: e, value: n, onChange: t }) => {
  const [r, l] = $.useState(!1), [o, i] = $.useState(""), u = $.useRef(null);
  $.useEffect(() => {
    const m = (p) => {
      u.current && !u.current.contains(p.target) && l(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const a = e.filter((m) => {
    const p = Zl[m] || { name: m }, w = o.toLowerCase();
    return m.toLowerCase().includes(w) || p.name.toLowerCase().includes(w);
  }), c = Zl[n] || { name: n, symbol: n }, y = n === "EUR" ? "EU" : n === "BTC" ? "⚡" : n.substring(0, 2);
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: "custom-dropdown",
      ref: u,
      style: { position: "relative", width: "auto", flexShrink: 0 },
      children: [
        /* @__PURE__ */ S.jsxs(
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
              /* @__PURE__ */ S.jsx("div", { style: {
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
              }, children: y }),
              /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column", textAlign: "left", minWidth: "0" }, children: [
                /* @__PURE__ */ S.jsx("span", { style: { fontWeight: 700, fontSize: "0.9rem", color: "#fafafa", lineHeight: 1 }, children: n }),
                /* @__PURE__ */ S.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "65px", marginTop: "2px" }, children: c.name })
              ] }),
              /* @__PURE__ */ S.jsx("span", { style: { fontSize: "0.8rem", color: "#a1a1aa", fontWeight: "600", marginLeft: "2px" }, children: c.symbol }),
              /* @__PURE__ */ S.jsx(Jd, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
            ]
          }
        ),
        r && /* @__PURE__ */ S.jsxs(
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
              /* @__PURE__ */ S.jsxs("div", { style: { padding: "8px", borderBottom: "1px solid #1c1c21", position: "relative" }, children: [
                /* @__PURE__ */ S.jsx(rp, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
                /* @__PURE__ */ S.jsx(
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
              /* @__PURE__ */ S.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: "4px 0",
                maxHeight: "260px",
                overflowY: "auto"
              }, children: a.length > 0 ? a.map((m) => {
                const p = Zl[m] || { name: m, symbol: m }, w = m === "EUR" ? "EU" : m === "BTC" ? "⚡" : m.substring(0, 2), v = m === n;
                return /* @__PURE__ */ S.jsxs(
                  "li",
                  {
                    onClick: () => {
                      t(m), l(!1), i("");
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      cursor: "pointer",
                      background: v ? "rgba(168, 85, 247, 0.15)" : "transparent",
                      borderLeft: v ? "2px solid #a855f7" : "2px solid transparent",
                      transition: "all 0.15s ease"
                    },
                    onMouseEnter: (k) => !v && (k.currentTarget.style.background = "rgba(255, 255, 255, 0.04)"),
                    onMouseLeave: (k) => !v && (k.currentTarget.style.background = "transparent"),
                    children: [
                      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ S.jsx("div", { style: {
                          width: "22px",
                          height: "22px",
                          borderRadius: "5px",
                          background: v ? "#a855f7" : "#1c1c21",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          fontWeight: "800",
                          color: v ? "#ffffff" : "#9ca3af"
                        }, children: w }),
                        /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                          /* @__PURE__ */ S.jsx("span", { style: { fontWeight: 600, color: v ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: m }),
                          /* @__PURE__ */ S.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: p.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ S.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: p.symbol }),
                        v && /* @__PURE__ */ S.jsx(Zd, { size: 14, color: "#a855f7" })
                      ] })
                    ]
                  },
                  m
                );
              }) : /* @__PURE__ */ S.jsx("li", { style: { padding: "16px", textAlign: "center", color: "#71717a", fontSize: "0.8rem" }, children: "No matching currency" }) })
            ]
          }
        )
      ]
    }
  );
}, Xl = "datacore_currency_history", ap = {
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
}, sp = ({ children: e }) => /* @__PURE__ */ S.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function cp() {
  const [e, n] = $.useState(ap), [t, r] = $.useState("USD"), [l, o] = $.useState("EUR"), [i, u] = $.useState("100"), [a, c] = $.useState(!1), [y, m] = $.useState(null), [p, w] = $.useState(!0), [v, k] = $.useState(!1), [M, f] = $.useState([]), s = $.useRef(null);
  $.useEffect(() => {
    try {
      const x = localStorage.getItem(Xl);
      x && f(JSON.parse(x));
    } catch (x) {
      console.warn("Failed to load currency history", x);
    }
  }, []);
  const h = ((x) => {
    try {
      if (!x || !x.trim()) return 0;
      const le = x.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!le) return 0;
      const ve = Function(`"use strict"; return (${le})`)();
      return typeof ve == "number" && !isNaN(ve) && isFinite(ve) ? ve : 0;
    } catch {
      return 0;
    }
  })(i), N = (() => {
    const x = e[t] || 1, le = e[l] || 1;
    return h / x * le;
  })().toFixed(2), z = async () => {
    k(!0);
    try {
      const x = await fetch(`https://api.exchangerate-api.com/v4/latest/${t}`);
      if (x.ok) {
        const le = await x.json();
        n(le.rates), m(/* @__PURE__ */ new Date()), w(!0);
        const ve = {
          id: Date.now().toString(),
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          from: t,
          to: l,
          expr: i,
          result: N
        };
        f((Cn) => {
          const C = [ve, ...Cn.slice(0, 19)];
          try {
            localStorage.setItem(Xl, JSON.stringify(C));
          } catch {
          }
          return C;
        });
      } else
        w(!1);
    } catch (x) {
      console.warn("Using offline cached rates:", x), w(!1);
    } finally {
      k(!1);
    }
  };
  $.useEffect(() => {
    z();
  }, [t]);
  const W = () => {
    r(l), o(t);
  }, L = () => {
    r(l), u(N);
  }, ee = (x) => {
    u(x === "AC" ? "" : x === "DEL" ? (le) => le.length > 0 ? le.slice(0, -1) : "" : x === "=" ? h.toString() : (le) => le + x);
  }, xn = (x, le) => {
    const ve = e[x] || 1, Cn = e[t] || 1, R = (le / ve * Cn).toFixed(2);
    u((D) => {
      const I = D.trim();
      return !I || I === "0" ? R : ["+", "-", "*", "/", "×", "÷"].some((Y) => I.endsWith(Y)) ? `${I} ${R}` : `${I} + ${R}`;
    });
  }, en = Object.keys(e).sort();
  return /* @__PURE__ */ S.jsx(sp, { children: /* @__PURE__ */ S.jsx("div", { className: "currency-app", ref: s, style: { position: "relative" }, children: /* @__PURE__ */ S.jsxs("div", { className: "glass-card", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "currency-header", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ S.jsx("div", { style: {
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(168, 85, 247, 0.3)"
        }, children: /* @__PURE__ */ S.jsx(op, { size: 15, color: "#ffffff" }) }),
        /* @__PURE__ */ S.jsxs("div", { children: [
          /* @__PURE__ */ S.jsx("h1", { className: "currency-title", children: "Currency Converter" }),
          /* @__PURE__ */ S.jsx("div", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "500" }, children: "Pro Financial Math Engine" })
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: p ? "#4ade80" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ S.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: p ? "#22c55e" : "#f59e0b",
          boxShadow: p ? "0 0 8px #22c55e" : "none"
        } }),
        /* @__PURE__ */ S.jsx("span", { children: p ? "Online" : "Offline" })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }, children: [
        /* @__PURE__ */ S.jsx("label", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "From Expression" }),
        /* @__PURE__ */ S.jsxs(
          "button",
          {
            type: "button",
            onClick: () => c(!a),
            style: {
              fontSize: "0.7rem",
              fontWeight: "600",
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid rgba(168, 85, 247, 0.3)",
              backgroundColor: a ? "rgba(168, 85, 247, 0.2)" : "rgba(255, 255, 255, 0.04)",
              color: a ? "#c084fc" : "#a1a1aa",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            },
            children: [
              /* @__PURE__ */ S.jsx(Gd, { size: 13 }),
              a ? "Hide Keypad" : "Keypad"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "input-wrapper", style: { flexDirection: "column", gap: "8px", padding: "10px", backgroundColor: "#09090b", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", width: "100%" }, children: [
          /* @__PURE__ */ S.jsx(
            Zu,
            {
              options: en,
              value: t,
              onChange: r
            }
          ),
          /* @__PURE__ */ S.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: i,
              onChange: (x) => u(x.target.value),
              placeholder: "0.00"
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#71717a", padding: "0 4px", fontFamily: "'JetBrains Mono', monospace", width: "100%", boxSizing: "border-box" }, children: [
          /* @__PURE__ */ S.jsxs("span", { children: [
            "Evaluated = ",
            /* @__PURE__ */ S.jsxs("strong", { style: { color: "#e4e4e7" }, children: [
              h.toFixed(2),
              " ",
              t
            ] })
          ] }),
          i.match(/[+\-*/×÷]/) && /* @__PURE__ */ S.jsx("span", { style: { color: "#38bdf8", fontWeight: "700" }, children: "Math Active" })
        ] })
      ] })
    ] }),
    a && /* @__PURE__ */ S.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      backgroundColor: "#121215",
      border: "1px solid #27272a",
      borderRadius: "12px",
      padding: "10px",
      margin: "4px 0"
    }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }, children: [
        ["AC", "(", ")", "DEL"].map((x) => /* @__PURE__ */ S.jsx("button", { onClick: () => ee(x), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: "rgba(239, 68, 68, 0.15)", color: "#f87171", fontWeight: "700", fontSize: "0.75rem", cursor: "pointer" }, children: x }, x)),
        ["7", "8", "9", "÷"].map((x) => /* @__PURE__ */ S.jsx("button", { onClick: () => ee(x === "÷" ? "/" : x), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["÷"].includes(x) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["÷"].includes(x) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: x }, x)),
        ["4", "5", "6", "×"].map((x) => /* @__PURE__ */ S.jsx("button", { onClick: () => ee(x === "×" ? "*" : x), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["×"].includes(x) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["×"].includes(x) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: x }, x)),
        ["1", "2", "3", "-"].map((x) => /* @__PURE__ */ S.jsx("button", { onClick: () => ee(x), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["-"].includes(x) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["-"].includes(x) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: x }, x)),
        ["0", ".", "=", "+"].map((x) => /* @__PURE__ */ S.jsx("button", { onClick: () => ee(x), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: x === "=" ? "rgba(168, 85, 247, 0.3)" : x === "+" ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: x === "=" ? "#c084fc" : x === "+" ? "#38bdf8" : "#fafafa", fontWeight: "700", fontSize: "0.85rem", cursor: "pointer" }, children: x }, x))
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px", borderTop: "1px solid #1c1c21" }, children: [
        /* @__PURE__ */ S.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "600", textTransform: "uppercase" }, children: "Add Foreign Amount:" }),
        /* @__PURE__ */ S.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }, children: ["EUR", "USD", "JPY", "GBP", "CNY"].map((x) => /* @__PURE__ */ S.jsxs(
          "button",
          {
            type: "button",
            onClick: () => xn(x, 50),
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
              x
            ]
          },
          x
        )) })
      ] })
    ] }),
    /* @__PURE__ */ S.jsx(
      "div",
      {
        className: "swap-btn",
        onClick: W,
        title: "Swap currencies",
        style: { alignSelf: "center", margin: "-2px 0" },
        children: /* @__PURE__ */ S.jsx(Kd, { size: 16 })
      }
    ),
    /* @__PURE__ */ S.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ S.jsx("label", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "To Converted Result" }),
      /* @__PURE__ */ S.jsxs("div", { className: "input-wrapper", style: { padding: "4px 10px", backgroundColor: "#09090b", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ S.jsx(
          Zu,
          {
            options: en,
            value: l,
            onChange: o
          }
        ),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            className: "currency-input",
            type: "text",
            value: N,
            readOnly: !0,
            style: { color: "#4ade80", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px", width: "100%" }, children: [
      /* @__PURE__ */ S.jsxs(
        "button",
        {
          type: "button",
          onClick: L,
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
            /* @__PURE__ */ S.jsx(Hd, { size: 13 }),
            "Pipe Result (",
            N,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ S.jsxs(
        "button",
        {
          type: "button",
          className: "sync-btn",
          onClick: z,
          disabled: v,
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
            /* @__PURE__ */ S.jsx(bd, { size: 13, className: v ? "animate-spin" : "" }),
            v ? "Syncing..." : "Sync Rates"
          ]
        }
      )
    ] }),
    y && /* @__PURE__ */ S.jsxs("div", { className: "last-updated", children: [
      "Last synced: ",
      y.toLocaleTimeString()
    ] }),
    M.length > 0 && /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "12px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ S.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ S.jsx(np, { size: 13 }),
          "Conversion History"
        ] }),
        /* @__PURE__ */ S.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              f([]), localStorage.removeItem(Xl);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ S.jsx(up, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: M.map((x) => /* @__PURE__ */ S.jsxs(
        "div",
        {
          onClick: () => {
            r(x.to), u(x.result);
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
            /* @__PURE__ */ S.jsxs("div", { style: { color: "#a1a1aa" }, children: [
              /* @__PURE__ */ S.jsxs("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: [
                x.expr,
                " ",
                x.from
              ] }),
              " → ",
              /* @__PURE__ */ S.jsxs("span", { style: { color: "#4ade80", fontWeight: "700" }, children: [
                x.result,
                " ",
                x.to
              ] })
            ] }),
            /* @__PURE__ */ S.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: x.time })
          ]
        },
        x.id
      )) })
    ] })
  ] }) }) });
}
function fp(e, n) {
  if (!e) return () => {
  };
  const t = Jl.createRoot(e);
  return t.render(/* @__PURE__ */ S.jsx(cp, { platformAPI: n })), () => {
    try {
      t.unmount();
    } catch {
    }
  };
}
export {
  sp as SafeAgentLayer,
  cp as default,
  fp as mount_app
};
