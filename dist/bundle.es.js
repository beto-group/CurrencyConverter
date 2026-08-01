(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;max-width:100%;height:100%;min-height:100%;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:10px;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}.glass-card{background:#18181b;border:1px solid #27272a;border-radius:16px;padding:14px 12px;width:100%;max-width:100%;box-shadow:0 20px 40px #0006;display:flex;flex-direction:column;gap:12px;position:relative;box-sizing:border-box;margin:0 auto;overflow-x:hidden}@media (min-width: 600px){.currency-app{padding:20px}.glass-card{max-width:520px;padding:22px;gap:16px}}.currency-header{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;width:100%;box-sizing:border-box}.currency-title{font-size:clamp(1rem,4vw,1.35rem);font-weight:700;margin:0;color:#fafafa;letter-spacing:-.02em;display:flex;align-items:center;gap:6px;flex-wrap:wrap}.status-badge{font-size:.6rem;text-transform:uppercase;letter-spacing:1px;font-weight:700;padding:3px 7px;border-radius:6px;background:#10b98126;color:#10b981;white-space:nowrap}.status-badge.offline{background:#f59e0b26;color:#f59e0b}.input-group{display:flex;flex-direction:column;gap:4px;width:100%;box-sizing:border-box}.input-group label{font-size:.75rem;color:#a1a1aa;font-weight:500}.input-wrapper{display:flex;align-items:center;background:#09090b;border:1px solid #3f3f46;border-radius:10px;transition:all .2s ease;position:relative;width:100%;box-sizing:border-box;overflow:hidden}.input-wrapper:focus-within{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f626}.currency-input{background:transparent;color:#fafafa;border:none;padding:10px 12px;font-size:clamp(1rem,3.8vw,1.25rem);font-weight:600;width:100%;outline:none;text-align:right;font-variant-numeric:tabular-nums;flex:1;min-width:0;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}.currency-input::placeholder{color:#52525b}.swap-btn{background:#27272a;border:1px solid #3f3f46;color:#a1a1aa;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-2px 0;z-index:2;flex-shrink:0}.swap-btn:hover{background:#3f3f46;color:#fafafa}.sync-btn{background:#fafafa;color:#09090b;border:none;padding:10px 12px;border-radius:8px;font-weight:700;font-size:.8rem;cursor:pointer;transition:all .2s ease;white-space:nowrap;flex:1;min-width:100px}.sync-btn:hover{background:#e4e4e7}.sync-btn:active{transform:scale(.98)}.last-updated{text-align:center;font-size:.7rem;color:#71717a;margin-top:2px}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var Ju = { exports: {} }, il = {}, qu = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), dc = Symbol.for("react.portal"), pc = Symbol.for("react.fragment"), mc = Symbol.for("react.strict_mode"), yc = Symbol.for("react.profiler"), hc = Symbol.for("react.provider"), gc = Symbol.for("react.context"), vc = Symbol.for("react.forward_ref"), xc = Symbol.for("react.suspense"), Sc = Symbol.for("react.memo"), wc = Symbol.for("react.lazy"), Ai = Symbol.iterator;
function kc(e) {
  return e === null || typeof e != "object" ? null : (e = Ai && e[Ai] || e["@@iterator"], typeof e == "function" ? e : null);
}
var bu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ea = Object.assign, na = {};
function dt(e, n, t) {
  this.props = e, this.context = n, this.refs = na, this.updater = t || bu;
}
dt.prototype.isReactComponent = {};
dt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
dt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ta() {
}
ta.prototype = dt.prototype;
function Qo(e, n, t) {
  this.props = e, this.context = n, this.refs = na, this.updater = t || bu;
}
var Go = Qo.prototype = new ta();
Go.constructor = Qo;
ea(Go, dt.prototype);
Go.isPureReactComponent = !0;
var Bi = Array.isArray, ra = Object.prototype.hasOwnProperty, Yo = { current: null }, la = { key: !0, ref: !0, __self: !0, __source: !0 };
function oa(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) ra.call(n, r) && !la.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: tr, type: e, key: o, ref: i, props: l, _owner: Yo.current };
}
function Cc(e, n) {
  return { $$typeof: tr, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function Ec(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Wi = /\/+/g;
function Cl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Ec("" + e.key) : n.toString(36);
}
function Er(e, n, t, r, l) {
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
        case tr:
        case dc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Cl(i, 0) : r, Bi(l) ? (t = "", e != null && (t = e.replace(Wi, "$&/") + "/"), Er(l, n, t, "", function(c) {
    return c;
  })) : l != null && (Zo(l) && (l = Cc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Wi, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Bi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Cl(o, u);
    i += Er(o, n, t, a, l);
  }
  else if (a = kc(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Cl(o, u++), i += Er(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ur(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return Er(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function _c(e) {
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
var ae = { current: null }, _r = { transition: null }, Nc = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: _r, ReactCurrentOwner: Yo };
function ia() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: ur, forEach: function(e, n, t) {
  ur(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return ur(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return ur(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Zo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = dt;
L.Fragment = pc;
L.Profiler = yc;
L.PureComponent = Qo;
L.StrictMode = mc;
L.Suspense = xc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc;
L.act = ia;
L.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ea({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Yo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) ra.call(n, a) && !la.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: gc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hc, _context: e }, e.Consumer = e;
};
L.createElement = oa;
L.createFactory = function(e) {
  var n = oa.bind(null, e);
  return n.type = e, n;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: vc, render: e };
};
L.isValidElement = Zo;
L.lazy = function(e) {
  return { $$typeof: wc, _payload: { _status: -1, _result: e }, _init: _c };
};
L.memo = function(e, n) {
  return { $$typeof: Sc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function(e) {
  var n = _r.transition;
  _r.transition = {};
  try {
    e();
  } finally {
    _r.transition = n;
  }
};
L.unstable_act = ia;
L.useCallback = function(e, n) {
  return ae.current.useCallback(e, n);
};
L.useContext = function(e) {
  return ae.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ae.current.useDeferredValue(e);
};
L.useEffect = function(e, n) {
  return ae.current.useEffect(e, n);
};
L.useId = function() {
  return ae.current.useId();
};
L.useImperativeHandle = function(e, n, t) {
  return ae.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function(e, n) {
  return ae.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function(e, n) {
  return ae.current.useLayoutEffect(e, n);
};
L.useMemo = function(e, n) {
  return ae.current.useMemo(e, n);
};
L.useReducer = function(e, n, t) {
  return ae.current.useReducer(e, n, t);
};
L.useRef = function(e) {
  return ae.current.useRef(e);
};
L.useState = function(e) {
  return ae.current.useState(e);
};
L.useSyncExternalStore = function(e, n, t) {
  return ae.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function() {
  return ae.current.useTransition();
};
L.version = "18.3.1";
qu.exports = L;
var O = qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc = O, zc = Symbol.for("react.element"), Rc = Symbol.for("react.fragment"), Tc = Object.prototype.hasOwnProperty, Dc = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ua(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Tc.call(n, r) && !Lc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: zc, type: e, key: o, ref: i, props: l, _owner: Dc.current };
}
il.Fragment = Rc;
il.jsx = ua;
il.jsxs = ua;
Ju.exports = il;
var g = Ju.exports, ql = {}, aa = { exports: {} }, xe = {}, sa = { exports: {} }, ca = {};
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
    var y = E.length;
    E.push(R);
    e: for (; 0 < y; ) {
      var D = y - 1 >>> 1, I = E[D];
      if (0 < l(I, R)) E[D] = R, E[y] = I, y = D;
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var R = E[0], y = E.pop();
    if (y !== R) {
      E[0] = y;
      e: for (var D = 0, I = E.length, Ve = I >>> 1; D < Ve; ) {
        var ke = 2 * (D + 1) - 1, $n = E[ke], nn = ke + 1, tn = E[nn];
        if (0 > l($n, y)) nn < I && 0 > l(tn, $n) ? (E[D] = tn, E[nn] = y, D = nn) : (E[D] = $n, E[ke] = y, D = ke);
        else if (nn < I && 0 > l(tn, y)) E[D] = tn, E[nn] = y, D = nn;
        else break e;
      }
    }
    return R;
  }
  function l(E, R) {
    var y = E.sortIndex - R.sortIndex;
    return y !== 0 ? y : E.id - R.id;
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
  var a = [], c = [], h = 1, p = null, m = 3, w = !1, S = !1, k = !1, M = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
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
    if (k = !1, d(E), !S) if (t(a) !== null) S = !0, ht(C);
    else {
      var R = t(c);
      R !== null && He(v, R.startTime - E);
    }
  }
  function C(E, R) {
    S = !1, k && (k = !1, f(z), z = -1), w = !0;
    var y = m;
    try {
      for (d(R), p = t(a); p !== null && (!(p.expirationTime > R) || E && !we()); ) {
        var D = p.callback;
        if (typeof D == "function") {
          p.callback = null, m = p.priorityLevel;
          var I = D(p.expirationTime <= R);
          R = e.unstable_now(), typeof I == "function" ? p.callback = I : p === t(a) && r(a), d(R);
        } else r(a);
        p = t(a);
      }
      if (p !== null) var Ve = !0;
      else {
        var ke = t(c);
        ke !== null && He(v, ke.startTime - R), Ve = !1;
      }
      return Ve;
    } finally {
      p = null, m = y, w = !1;
    }
  }
  var P = !1, N = null, z = -1, K = 5, T = -1;
  function we() {
    return !(e.unstable_now() - T < K);
  }
  function Un() {
    if (N !== null) {
      var E = e.unstable_now();
      T = E;
      var R = !0;
      try {
        R = N(!0, E);
      } finally {
        R ? Oe() : (P = !1, N = null);
      }
    } else P = !1;
  }
  var Oe;
  if (typeof s == "function") Oe = function() {
    s(Un);
  };
  else if (typeof MessageChannel < "u") {
    var yt = new MessageChannel(), kl = yt.port2;
    yt.port1.onmessage = Un, Oe = function() {
      kl.postMessage(null);
    };
  } else Oe = function() {
    M(Un, 0);
  };
  function ht(E) {
    N = E, P || (P = !0, Oe());
  }
  function He(E, R) {
    z = M(function() {
      E(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    S || w || (S = !0, ht(C));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(E) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = m;
    }
    var y = m;
    m = R;
    try {
      return E();
    } finally {
      m = y;
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
    var y = m;
    m = E;
    try {
      return R();
    } finally {
      m = y;
    }
  }, e.unstable_scheduleCallback = function(E, R, y) {
    var D = e.unstable_now();
    switch (typeof y == "object" && y !== null ? (y = y.delay, y = typeof y == "number" && 0 < y ? D + y : D) : y = D, E) {
      case 1:
        var I = -1;
        break;
      case 2:
        I = 250;
        break;
      case 5:
        I = 1073741823;
        break;
      case 4:
        I = 1e4;
        break;
      default:
        I = 5e3;
    }
    return I = y + I, E = { id: h++, callback: R, priorityLevel: E, startTime: y, expirationTime: I, sortIndex: -1 }, y > D ? (E.sortIndex = y, n(c, E), t(a) === null && E === t(c) && (k ? (f(z), z = -1) : k = !0, He(v, y - D))) : (E.sortIndex = I, n(a, E), S || w || (S = !0, ht(C))), E;
  }, e.unstable_shouldYield = we, e.unstable_wrapCallback = function(E) {
    var R = m;
    return function() {
      var y = m;
      m = R;
      try {
        return E.apply(this, arguments);
      } finally {
        m = y;
      }
    };
  };
})(ca);
sa.exports = ca;
var jc = sa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mc = O, ve = jc;
function x(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fa = /* @__PURE__ */ new Set(), $t = {};
function In(e, n) {
  ot(e, n), ot(e + "Capture", n);
}
function ot(e, n) {
  for ($t[e] = n, e = 0; e < n.length; e++) fa.add(n[e]);
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bl = Object.prototype.hasOwnProperty, Fc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Hi = {}, Vi = {};
function Ic(e) {
  return bl.call(Vi, e) ? !0 : bl.call(Hi, e) ? !1 : Fc.test(e) ? Vi[e] = !0 : (Hi[e] = !0, !1);
}
function Oc(e, n, t, r) {
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
function Uc(e, n, t, r) {
  if (n === null || typeof n > "u" || Oc(e, n, t, r)) return !0;
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
function se(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  ne[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xo = /[\-:]([a-z])/g;
function Jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Xo,
    Jo
  );
  ne[n] = new se(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Xo, Jo);
  ne[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Xo, Jo);
  ne[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qo(e, n, t, r) {
  var l = ne.hasOwnProperty(n) ? ne[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Uc(n, t, l, r) && (t = null), r || l === null ? Ic(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var en = Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Bn = Symbol.for("react.portal"), Wn = Symbol.for("react.fragment"), bo = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), da = Symbol.for("react.provider"), pa = Symbol.for("react.context"), ei = Symbol.for("react.forward_ref"), no = Symbol.for("react.suspense"), to = Symbol.for("react.suspense_list"), ni = Symbol.for("react.memo"), ln = Symbol.for("react.lazy"), ma = Symbol.for("react.offscreen"), Ki = Symbol.iterator;
function vt(e) {
  return e === null || typeof e != "object" ? null : (e = Ki && e[Ki] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, El;
function Nt(e) {
  if (El === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    El = n && n[1] || "";
  }
  return `
` + El + e;
}
var _l = !1;
function Nl(e, n) {
  if (!e || _l) return "";
  _l = !0;
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
    _l = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? Nt(e) : "";
}
function $c(e) {
  switch (e.tag) {
    case 5:
      return Nt(e.type);
    case 16:
      return Nt("Lazy");
    case 13:
      return Nt("Suspense");
    case 19:
      return Nt("SuspenseList");
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
function ro(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case Bn:
      return "Portal";
    case eo:
      return "Profiler";
    case bo:
      return "StrictMode";
    case no:
      return "Suspense";
    case to:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case pa:
      return (e.displayName || "Context") + ".Consumer";
    case da:
      return (e._context.displayName || "Context") + ".Provider";
    case ei:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ni:
      return n = e.displayName || null, n !== null ? n : ro(e.type) || "Memo";
    case ln:
      n = e._payload, e = e._init;
      try {
        return ro(e(n));
      } catch {
      }
  }
  return null;
}
function Ac(e) {
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
      return ro(n);
    case 8:
      return n === bo ? "StrictMode" : "Mode";
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
function xn(e) {
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
function ya(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Bc(e) {
  var n = ya(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function sr(e) {
  e._valueTracker || (e._valueTracker = Bc(e));
}
function ha(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = ya(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Ir(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lo(e, n) {
  var t = n.checked;
  return V({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Qi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = xn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function ga(e, n) {
  n = n.checked, n != null && qo(e, "checked", n, !1);
}
function oo(e, n) {
  ga(e, n);
  var t = xn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? io(e, n.type, t) : n.hasOwnProperty("defaultValue") && io(e, n.type, xn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Gi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function io(e, n, t) {
  (n !== "number" || Ir(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Pt = Array.isArray;
function bn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + xn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function uo(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(x(91));
  return V({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yi(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(x(92));
      if (Pt(t)) {
        if (1 < t.length) throw Error(x(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: xn(t) };
}
function va(e, n) {
  var t = xn(n.value), r = xn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Zi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function xa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ao(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xa(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cr, Sa = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function At(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Tt = {
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
}, Wc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tt).forEach(function(e) {
  Wc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Tt[n] = Tt[e];
  });
});
function wa(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Tt.hasOwnProperty(e) && Tt[e] ? ("" + n).trim() : n + "px";
}
function ka(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = wa(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var Hc = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function so(e, n) {
  if (n) {
    if (Hc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(x(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(x(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(x(62));
  }
}
function co(e, n) {
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
var fo = null;
function ti(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var po = null, et = null, nt = null;
function Xi(e) {
  if (e = or(e)) {
    if (typeof po != "function") throw Error(x(280));
    var n = e.stateNode;
    n && (n = fl(n), po(e.stateNode, e.type, n));
  }
}
function Ca(e) {
  et ? nt ? nt.push(e) : nt = [e] : et = e;
}
function Ea() {
  if (et) {
    var e = et, n = nt;
    if (nt = et = null, Xi(e), n) for (e = 0; e < n.length; e++) Xi(n[e]);
  }
}
function _a(e, n) {
  return e(n);
}
function Na() {
}
var Pl = !1;
function Pa(e, n, t) {
  if (Pl) return e(n, t);
  Pl = !0;
  try {
    return _a(e, n, t);
  } finally {
    Pl = !1, (et !== null || nt !== null) && (Na(), Ea());
  }
}
function Bt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = fl(t);
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
var mo = !1;
if (Xe) try {
  var xt = {};
  Object.defineProperty(xt, "passive", { get: function() {
    mo = !0;
  } }), window.addEventListener("test", xt, xt), window.removeEventListener("test", xt, xt);
} catch {
  mo = !1;
}
function Vc(e, n, t, r, l, o, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var Dt = !1, Or = null, Ur = !1, yo = null, Kc = { onError: function(e) {
  Dt = !0, Or = e;
} };
function Qc(e, n, t, r, l, o, i, u, a) {
  Dt = !1, Or = null, Vc.apply(Kc, arguments);
}
function Gc(e, n, t, r, l, o, i, u, a) {
  if (Qc.apply(this, arguments), Dt) {
    if (Dt) {
      var c = Or;
      Dt = !1, Or = null;
    } else throw Error(x(198));
    Ur || (Ur = !0, yo = c);
  }
}
function On(e) {
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
function za(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Ji(e) {
  if (On(e) !== e) throw Error(x(188));
}
function Yc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = On(e), n === null) throw Error(x(188));
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
        if (o === t) return Ji(l), e;
        if (o === r) return Ji(l), n;
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
function Ra(e) {
  return e = Yc(e), e !== null ? Ta(e) : null;
}
function Ta(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ta(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Da = ve.unstable_scheduleCallback, qi = ve.unstable_cancelCallback, Zc = ve.unstable_shouldYield, Xc = ve.unstable_requestPaint, G = ve.unstable_now, Jc = ve.unstable_getCurrentPriorityLevel, ri = ve.unstable_ImmediatePriority, La = ve.unstable_UserBlockingPriority, $r = ve.unstable_NormalPriority, qc = ve.unstable_LowPriority, ja = ve.unstable_IdlePriority, ul = null, Be = null;
function bc(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var je = Math.clz32 ? Math.clz32 : tf, ef = Math.log, nf = Math.LN2;
function tf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ef(e) / nf | 0) | 0;
}
var fr = 64, dr = 4194304;
function zt(e) {
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
    u !== 0 ? r = zt(u) : (o &= i, o !== 0 && (r = zt(o)));
  } else i = t & ~l, i !== 0 ? r = zt(i) : o !== 0 && (r = zt(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - je(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function rf(e, n) {
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
function lf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - je(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = rf(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function ho(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ma() {
  var e = fr;
  return fr <<= 1, !(fr & 4194240) && (fr = 64), e;
}
function zl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function rr(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - je(n), e[n] = t;
}
function of(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - je(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function li(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - je(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var F = 0;
function Fa(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ia, oi, Oa, Ua, $a, go = !1, pr = [], fn = null, dn = null, pn = null, Wt = /* @__PURE__ */ new Map(), Ht = /* @__PURE__ */ new Map(), un = [], uf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      fn = null;
      break;
    case "dragenter":
    case "dragleave":
      dn = null;
      break;
    case "mouseover":
    case "mouseout":
      pn = null;
      break;
    case "pointerover":
    case "pointerout":
      Wt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ht.delete(n.pointerId);
  }
}
function St(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = or(n), n !== null && oi(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function af(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return fn = St(fn, e, n, t, r, l), !0;
    case "dragenter":
      return dn = St(dn, e, n, t, r, l), !0;
    case "mouseover":
      return pn = St(pn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Wt.set(o, St(Wt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Ht.set(o, St(Ht.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Aa(e) {
  var n = Nn(e.target);
  if (n !== null) {
    var t = On(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = za(t), n !== null) {
          e.blockedOn = n, $a(e.priority, function() {
            Oa(t);
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
    var t = vo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      fo = r, t.target.dispatchEvent(r), fo = null;
    } else return n = or(t), n !== null && oi(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function eu(e, n, t) {
  Nr(e) && t.delete(n);
}
function sf() {
  go = !1, fn !== null && Nr(fn) && (fn = null), dn !== null && Nr(dn) && (dn = null), pn !== null && Nr(pn) && (pn = null), Wt.forEach(eu), Ht.forEach(eu);
}
function wt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, go || (go = !0, ve.unstable_scheduleCallback(ve.unstable_NormalPriority, sf)));
}
function Vt(e) {
  function n(l) {
    return wt(l, e);
  }
  if (0 < pr.length) {
    wt(pr[0], e);
    for (var t = 1; t < pr.length; t++) {
      var r = pr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (fn !== null && wt(fn, e), dn !== null && wt(dn, e), pn !== null && wt(pn, e), Wt.forEach(n), Ht.forEach(n), t = 0; t < un.length; t++) r = un[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < un.length && (t = un[0], t.blockedOn === null); ) Aa(t), t.blockedOn === null && un.shift();
}
var tt = en.ReactCurrentBatchConfig, Br = !0;
function cf(e, n, t, r) {
  var l = F, o = tt.transition;
  tt.transition = null;
  try {
    F = 1, ii(e, n, t, r);
  } finally {
    F = l, tt.transition = o;
  }
}
function ff(e, n, t, r) {
  var l = F, o = tt.transition;
  tt.transition = null;
  try {
    F = 4, ii(e, n, t, r);
  } finally {
    F = l, tt.transition = o;
  }
}
function ii(e, n, t, r) {
  if (Br) {
    var l = vo(e, n, t, r);
    if (l === null) Ul(e, n, r, Wr, t), bi(e, r);
    else if (af(l, e, n, t, r)) r.stopPropagation();
    else if (bi(e, r), n & 4 && -1 < uf.indexOf(e)) {
      for (; l !== null; ) {
        var o = or(l);
        if (o !== null && Ia(o), o = vo(e, n, t, r), o === null && Ul(e, n, r, Wr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, n, r, null, t);
  }
}
var Wr = null;
function vo(e, n, t, r) {
  if (Wr = null, e = ti(r), e = Nn(e), e !== null) if (n = On(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = za(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Wr = e, null;
}
function Ba(e) {
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
      switch (Jc()) {
        case ri:
          return 1;
        case La:
          return 4;
        case $r:
        case qc:
          return 16;
        case ja:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null, ui = null, Pr = null;
function Wa() {
  if (Pr) return Pr;
  var e, n = ui, t = n.length, r, l = "value" in sn ? sn.value : sn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Pr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function zr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mr() {
  return !0;
}
function nu() {
  return !1;
}
function Se(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? mr : nu, this.isPropagationStopped = nu, this;
  }
  return V(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = mr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = mr);
  }, persist: function() {
  }, isPersistent: mr }), n;
}
var pt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ai = Se(pt), lr = V({}, pt, { view: 0, detail: 0 }), df = Se(lr), Rl, Tl, kt, al = V({}, lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: si, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== kt && (kt && e.type === "mousemove" ? (Rl = e.screenX - kt.screenX, Tl = e.screenY - kt.screenY) : Tl = Rl = 0, kt = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Tl;
} }), tu = Se(al), pf = V({}, al, { dataTransfer: 0 }), mf = Se(pf), yf = V({}, lr, { relatedTarget: 0 }), Dl = Se(yf), hf = V({}, pt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gf = Se(hf), vf = V({}, pt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), xf = Se(vf), Sf = V({}, pt, { data: 0 }), ru = Se(Sf), wf = {
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
}, kf = {
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
}, Cf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ef(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Cf[e]) ? !!n[e] : !1;
}
function si() {
  return Ef;
}
var _f = V({}, lr, { key: function(e) {
  if (e.key) {
    var n = wf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: si, charCode: function(e) {
  return e.type === "keypress" ? zr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nf = Se(_f), Pf = V({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), lu = Se(Pf), zf = V({}, lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: si }), Rf = Se(zf), Tf = V({}, pt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Df = Se(Tf), Lf = V({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), jf = Se(Lf), Mf = [9, 13, 27, 32], ci = Xe && "CompositionEvent" in window, Lt = null;
Xe && "documentMode" in document && (Lt = document.documentMode);
var Ff = Xe && "TextEvent" in window && !Lt, Ha = Xe && (!ci || Lt && 8 < Lt && 11 >= Lt), ou = " ", iu = !1;
function Va(e, n) {
  switch (e) {
    case "keyup":
      return Mf.indexOf(n.keyCode) !== -1;
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
function Ka(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function If(e, n) {
  switch (e) {
    case "compositionend":
      return Ka(n);
    case "keypress":
      return n.which !== 32 ? null : (iu = !0, ou);
    case "textInput":
      return e = n.data, e === ou && iu ? null : e;
    default:
      return null;
  }
}
function Of(e, n) {
  if (Hn) return e === "compositionend" || !ci && Va(e, n) ? (e = Wa(), Pr = ui = sn = null, Hn = !1, e) : null;
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
      return Ha && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Uf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function uu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Uf[e.type] : n === "textarea";
}
function Qa(e, n, t, r) {
  Ca(r), n = Hr(n, "onChange"), 0 < n.length && (t = new ai("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var jt = null, Kt = null;
function $f(e) {
  rs(e, 0);
}
function sl(e) {
  var n = Qn(e);
  if (ha(n)) return e;
}
function Af(e, n) {
  if (e === "change") return n;
}
var Ga = !1;
if (Xe) {
  var Ll;
  if (Xe) {
    var jl = "oninput" in document;
    if (!jl) {
      var au = document.createElement("div");
      au.setAttribute("oninput", "return;"), jl = typeof au.oninput == "function";
    }
    Ll = jl;
  } else Ll = !1;
  Ga = Ll && (!document.documentMode || 9 < document.documentMode);
}
function su() {
  jt && (jt.detachEvent("onpropertychange", Ya), Kt = jt = null);
}
function Ya(e) {
  if (e.propertyName === "value" && sl(Kt)) {
    var n = [];
    Qa(n, Kt, e, ti(e)), Pa($f, n);
  }
}
function Bf(e, n, t) {
  e === "focusin" ? (su(), jt = n, Kt = t, jt.attachEvent("onpropertychange", Ya)) : e === "focusout" && su();
}
function Wf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return sl(Kt);
}
function Hf(e, n) {
  if (e === "click") return sl(n);
}
function Vf(e, n) {
  if (e === "input" || e === "change") return sl(n);
}
function Kf(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Fe = typeof Object.is == "function" ? Object.is : Kf;
function Qt(e, n) {
  if (Fe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!bl.call(n, l) || !Fe(e[l], n[l])) return !1;
  }
  return !0;
}
function cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fu(e, n) {
  var t = cu(e);
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
    t = cu(t);
  }
}
function Za(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Za(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Xa() {
  for (var e = window, n = Ir(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ir(e.document);
  }
  return n;
}
function fi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Qf(e) {
  var n = Xa(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Za(t.ownerDocument.documentElement, t)) {
    if (r !== null && fi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = fu(t, o);
        var i = fu(
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
var Gf = Xe && "documentMode" in document && 11 >= document.documentMode, Vn = null, xo = null, Mt = null, So = !1;
function du(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  So || Vn == null || Vn !== Ir(r) || (r = Vn, "selectionStart" in r && fi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mt && Qt(Mt, r) || (Mt = r, r = Hr(xo, "onSelect"), 0 < r.length && (n = new ai("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Vn)));
}
function yr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Kn = { animationend: yr("Animation", "AnimationEnd"), animationiteration: yr("Animation", "AnimationIteration"), animationstart: yr("Animation", "AnimationStart"), transitionend: yr("Transition", "TransitionEnd") }, Ml = {}, Ja = {};
Xe && (Ja = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
function cl(e) {
  if (Ml[e]) return Ml[e];
  if (!Kn[e]) return e;
  var n = Kn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ja) return Ml[e] = n[t];
  return e;
}
var qa = cl("animationend"), ba = cl("animationiteration"), es = cl("animationstart"), ns = cl("transitionend"), ts = /* @__PURE__ */ new Map(), pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wn(e, n) {
  ts.set(e, n), In(n, [e]);
}
for (var Fl = 0; Fl < pu.length; Fl++) {
  var Il = pu[Fl], Yf = Il.toLowerCase(), Zf = Il[0].toUpperCase() + Il.slice(1);
  wn(Yf, "on" + Zf);
}
wn(qa, "onAnimationEnd");
wn(ba, "onAnimationIteration");
wn(es, "onAnimationStart");
wn("dblclick", "onDoubleClick");
wn("focusin", "onFocus");
wn("focusout", "onBlur");
wn(ns, "onTransitionEnd");
ot("onMouseEnter", ["mouseout", "mouseover"]);
ot("onMouseLeave", ["mouseout", "mouseover"]);
ot("onPointerEnter", ["pointerout", "pointerover"]);
ot("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));
function mu(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, Gc(r, n, void 0, e), e.currentTarget = null;
}
function rs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        mu(l, u, c), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, c = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        mu(l, u, c), o = a;
      }
    }
  }
  if (Ur) throw e = yo, Ur = !1, yo = null, e;
}
function $(e, n) {
  var t = n[_o];
  t === void 0 && (t = n[_o] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (ls(n, e, 2, !1), t.add(r));
}
function Ol(e, n, t) {
  var r = 0;
  n && (r |= 4), ls(t, e, r, n);
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);
function Gt(e) {
  if (!e[hr]) {
    e[hr] = !0, fa.forEach(function(t) {
      t !== "selectionchange" && (Xf.has(t) || Ol(t, !1, e), Ol(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[hr] || (n[hr] = !0, Ol("selectionchange", !1, n));
  }
}
function ls(e, n, t, r) {
  switch (Ba(n)) {
    case 1:
      var l = cf;
      break;
    case 4:
      l = ff;
      break;
    default:
      l = ii;
  }
  t = l.bind(null, n, t, e), l = void 0, !mo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Ul(e, n, t, r, l) {
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
        if (i = Nn(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Pa(function() {
    var c = o, h = ti(t), p = [];
    e: {
      var m = ts.get(e);
      if (m !== void 0) {
        var w = ai, S = e;
        switch (e) {
          case "keypress":
            if (zr(t) === 0) break e;
          case "keydown":
          case "keyup":
            w = Nf;
            break;
          case "focusin":
            S = "focus", w = Dl;
            break;
          case "focusout":
            S = "blur", w = Dl;
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
            w = tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Rf;
            break;
          case qa:
          case ba:
          case es:
            w = gf;
            break;
          case ns:
            w = Df;
            break;
          case "scroll":
            w = df;
            break;
          case "wheel":
            w = jf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = xf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = lu;
        }
        var k = (n & 4) !== 0, M = !k && e === "scroll", f = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Bt(s, f), v != null && k.push(Yt(s, v, d)))), M) break;
          s = s.return;
        }
        0 < k.length && (m = new w(m, S, null, t, h), p.push({ event: m, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", m && t !== fo && (S = t.relatedTarget || t.fromElement) && (Nn(S) || S[Je])) break e;
        if ((w || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, w ? (S = t.relatedTarget || t.toElement, w = c, S = S ? Nn(S) : null, S !== null && (M = On(S), S !== M || S.tag !== 5 && S.tag !== 6) && (S = null)) : (w = null, S = c), w !== S)) {
          if (k = tu, v = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (k = lu, v = "onPointerLeave", f = "onPointerEnter", s = "pointer"), M = w == null ? m : Qn(w), d = S == null ? m : Qn(S), m = new k(v, s + "leave", w, t, h), m.target = M, m.relatedTarget = d, v = null, Nn(h) === c && (k = new k(f, s + "enter", S, t, h), k.target = d, k.relatedTarget = M, v = k), M = v, w && S) n: {
            for (k = w, f = S, s = 0, d = k; d; d = An(d)) s++;
            for (d = 0, v = f; v; v = An(v)) d++;
            for (; 0 < s - d; ) k = An(k), s--;
            for (; 0 < d - s; ) f = An(f), d--;
            for (; s--; ) {
              if (k === f || f !== null && k === f.alternate) break n;
              k = An(k), f = An(f);
            }
            k = null;
          }
          else k = null;
          w !== null && yu(p, m, w, k, !1), S !== null && M !== null && yu(p, M, S, k, !0);
        }
      }
      e: {
        if (m = c ? Qn(c) : window, w = m.nodeName && m.nodeName.toLowerCase(), w === "select" || w === "input" && m.type === "file") var C = Af;
        else if (uu(m)) if (Ga) C = Vf;
        else {
          C = Wf;
          var P = Bf;
        }
        else (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Hf);
        if (C && (C = C(e, c))) {
          Qa(p, C, t, h);
          break e;
        }
        P && P(e, m, c), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && io(m, "number", m.value);
      }
      switch (P = c ? Qn(c) : window, e) {
        case "focusin":
          (uu(P) || P.contentEditable === "true") && (Vn = P, xo = c, Mt = null);
          break;
        case "focusout":
          Mt = xo = Vn = null;
          break;
        case "mousedown":
          So = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          So = !1, du(p, t, h);
          break;
        case "selectionchange":
          if (Gf) break;
        case "keydown":
        case "keyup":
          du(p, t, h);
      }
      var N;
      if (ci) e: {
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
      else Hn ? Va(e, t) && (z = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (z = "onCompositionStart");
      z && (Ha && t.locale !== "ko" && (Hn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Hn && (N = Wa()) : (sn = h, ui = "value" in sn ? sn.value : sn.textContent, Hn = !0)), P = Hr(c, z), 0 < P.length && (z = new ru(z, e, null, t, h), p.push({ event: z, listeners: P }), N ? z.data = N : (N = Ka(t), N !== null && (z.data = N)))), (N = Ff ? If(e, t) : Of(e, t)) && (c = Hr(c, "onBeforeInput"), 0 < c.length && (h = new ru("onBeforeInput", "beforeinput", null, t, h), p.push({ event: h, listeners: c }), h.data = N));
    }
    rs(p, n);
  });
}
function Yt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Hr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Bt(e, t), o != null && r.unshift(Yt(e, o, l)), o = Bt(e, n), o != null && r.push(Yt(e, o, l))), e = e.return;
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
function yu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = Bt(t, o), a != null && i.unshift(Yt(t, a, u))) : l || (a = Bt(t, o), a != null && i.push(Yt(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Jf = /\r\n?/g, qf = /\u0000|\uFFFD/g;
function hu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Jf, `
`).replace(qf, "");
}
function gr(e, n, t) {
  if (n = hu(n), hu(e) !== n && t) throw Error(x(425));
}
function Vr() {
}
var wo = null, ko = null;
function Co(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Eo = typeof setTimeout == "function" ? setTimeout : void 0, bf = typeof clearTimeout == "function" ? clearTimeout : void 0, gu = typeof Promise == "function" ? Promise : void 0, ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof gu < "u" ? function(e) {
  return gu.resolve(null).then(e).catch(nd);
} : Eo;
function nd(e) {
  setTimeout(function() {
    throw e;
  });
}
function $l(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), Vt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Vt(n);
}
function mn(e) {
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
function vu(e) {
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
var mt = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + mt, Zt = "__reactProps$" + mt, Je = "__reactContainer$" + mt, _o = "__reactEvents$" + mt, td = "__reactListeners$" + mt, rd = "__reactHandles$" + mt;
function Nn(e) {
  var n = e[Ae];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Je] || t[Ae]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = vu(e); e !== null; ) {
        if (t = e[Ae]) return t;
        e = vu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function or(e) {
  return e = e[Ae] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function fl(e) {
  return e[Zt] || null;
}
var No = [], Gn = -1;
function kn(e) {
  return { current: e };
}
function A(e) {
  0 > Gn || (e.current = No[Gn], No[Gn] = null, Gn--);
}
function U(e, n) {
  Gn++, No[Gn] = e.current, e.current = n;
}
var Sn = {}, oe = kn(Sn), de = kn(!1), Dn = Sn;
function it(e, n) {
  var t = e.type.contextTypes;
  if (!t) return Sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Kr() {
  A(de), A(oe);
}
function xu(e, n, t) {
  if (oe.current !== Sn) throw Error(x(168));
  U(oe, n), U(de, t);
}
function os(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(x(108, Ac(e) || "Unknown", l));
  return V({}, t, r);
}
function Qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sn, Dn = oe.current, U(oe, e), U(de, de.current), !0;
}
function Su(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  t ? (e = os(e, n, Dn), r.__reactInternalMemoizedMergedChildContext = e, A(de), A(oe), U(oe, e)) : A(de), U(de, t);
}
var Qe = null, dl = !1, Al = !1;
function is(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
function ld(e) {
  dl = !0, is(e);
}
function Cn() {
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
      Qe = null, dl = !1;
    } catch (l) {
      throw Qe !== null && (Qe = Qe.slice(e + 1)), Da(ri, Cn), l;
    } finally {
      F = n, Al = !1;
    }
  }
  return null;
}
var Yn = [], Zn = 0, Gr = null, Yr = 0, Ce = [], Ee = 0, Ln = null, Ge = 1, Ye = "";
function En(e, n) {
  Yn[Zn++] = Yr, Yn[Zn++] = Gr, Gr = e, Yr = n;
}
function us(e, n, t) {
  Ce[Ee++] = Ge, Ce[Ee++] = Ye, Ce[Ee++] = Ln, Ln = e;
  var r = Ge;
  e = Ye;
  var l = 32 - je(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - je(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ge = 1 << 32 - je(n) + l | t << l | r, Ye = o + e;
  } else Ge = 1 << o | t << l | r, Ye = e;
}
function di(e) {
  e.return !== null && (En(e, 1), us(e, 1, 0));
}
function pi(e) {
  for (; e === Gr; ) Gr = Yn[--Zn], Yn[Zn] = null, Yr = Yn[--Zn], Yn[Zn] = null;
  for (; e === Ln; ) Ln = Ce[--Ee], Ce[Ee] = null, Ye = Ce[--Ee], Ce[Ee] = null, Ge = Ce[--Ee], Ce[Ee] = null;
}
var ge = null, he = null, B = !1, Le = null;
function as(e, n) {
  var t = _e(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function wu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ge = e, he = mn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ge = e, he = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Ln !== null ? { id: Ge, overflow: Ye } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = _e(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ge = e, he = null, !0) : !1;
    default:
      return !1;
  }
}
function Po(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
  if (B) {
    var n = he;
    if (n) {
      var t = n;
      if (!wu(e, n)) {
        if (Po(e)) throw Error(x(418));
        n = mn(t.nextSibling);
        var r = ge;
        n && wu(e, n) ? as(r, t) : (e.flags = e.flags & -4097 | 2, B = !1, ge = e);
      }
    } else {
      if (Po(e)) throw Error(x(418));
      e.flags = e.flags & -4097 | 2, B = !1, ge = e;
    }
  }
}
function ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ge = e;
}
function vr(e) {
  if (e !== ge) return !1;
  if (!B) return ku(e), B = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Co(e.type, e.memoizedProps)), n && (n = he)) {
    if (Po(e)) throw ss(), Error(x(418));
    for (; n; ) as(e, n), n = mn(n.nextSibling);
  }
  if (ku(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = mn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ge ? mn(e.stateNode.nextSibling) : null;
  return !0;
}
function ss() {
  for (var e = he; e; ) e = mn(e.nextSibling);
}
function ut() {
  he = ge = null, B = !1;
}
function mi(e) {
  Le === null ? Le = [e] : Le.push(e);
}
var od = en.ReactCurrentBatchConfig;
function Ct(e, n, t) {
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
function xr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Cu(e) {
  var n = e._init;
  return n(e._payload);
}
function cs(e) {
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
    return f = vn(f, s), f.index = 0, f.sibling = null, f;
  }
  function o(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, v) {
    return s === null || s.tag !== 6 ? (s = Gl(d, f.mode, v), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, v) {
    var C = d.type;
    return C === Wn ? h(f, s, d.props.children, v, d.key) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ln && Cu(C) === s.type) ? (v = l(s, d.props), v.ref = Ct(f, s, d), v.return = f, v) : (v = Fr(d.type, d.key, d.props, null, f.mode, v), v.ref = Ct(f, s, d), v.return = f, v);
  }
  function c(f, s, d, v) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Yl(d, f.mode, v), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, v, C) {
    return s === null || s.tag !== 7 ? (s = Tn(d, f.mode, v, C), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function p(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = Gl("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case ar:
          return d = Fr(s.type, s.key, s.props, null, f.mode, d), d.ref = Ct(f, null, s), d.return = f, d;
        case Bn:
          return s = Yl(s, f.mode, d), s.return = f, s;
        case ln:
          var v = s._init;
          return p(f, v(s._payload), d);
      }
      if (Pt(s) || vt(s)) return s = Tn(s, f.mode, d, null), s.return = f, s;
      xr(f, s);
    }
    return null;
  }
  function m(f, s, d, v) {
    var C = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return C !== null ? null : u(f, s, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === C ? a(f, s, d, v) : null;
        case Bn:
          return d.key === C ? c(f, s, d, v) : null;
        case ln:
          return C = d._init, m(
            f,
            s,
            C(d._payload),
            v
          );
      }
      if (Pt(d) || vt(d)) return C !== null ? null : h(f, s, d, v, null);
      xr(f, d);
    }
    return null;
  }
  function w(f, s, d, v, C) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(s, f, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return f = f.get(v.key === null ? d : v.key) || null, a(s, f, v, C);
        case Bn:
          return f = f.get(v.key === null ? d : v.key) || null, c(s, f, v, C);
        case ln:
          var P = v._init;
          return w(f, s, d, P(v._payload), C);
      }
      if (Pt(v) || vt(v)) return f = f.get(d) || null, h(s, f, v, C, null);
      xr(s, v);
    }
    return null;
  }
  function S(f, s, d, v) {
    for (var C = null, P = null, N = s, z = s = 0, K = null; N !== null && z < d.length; z++) {
      N.index > z ? (K = N, N = null) : K = N.sibling;
      var T = m(f, N, d[z], v);
      if (T === null) {
        N === null && (N = K);
        break;
      }
      e && N && T.alternate === null && n(f, N), s = o(T, s, z), P === null ? C = T : P.sibling = T, P = T, N = K;
    }
    if (z === d.length) return t(f, N), B && En(f, z), C;
    if (N === null) {
      for (; z < d.length; z++) N = p(f, d[z], v), N !== null && (s = o(N, s, z), P === null ? C = N : P.sibling = N, P = N);
      return B && En(f, z), C;
    }
    for (N = r(f, N); z < d.length; z++) K = w(N, f, z, d[z], v), K !== null && (e && K.alternate !== null && N.delete(K.key === null ? z : K.key), s = o(K, s, z), P === null ? C = K : P.sibling = K, P = K);
    return e && N.forEach(function(we) {
      return n(f, we);
    }), B && En(f, z), C;
  }
  function k(f, s, d, v) {
    var C = vt(d);
    if (typeof C != "function") throw Error(x(150));
    if (d = C.call(d), d == null) throw Error(x(151));
    for (var P = C = null, N = s, z = s = 0, K = null, T = d.next(); N !== null && !T.done; z++, T = d.next()) {
      N.index > z ? (K = N, N = null) : K = N.sibling;
      var we = m(f, N, T.value, v);
      if (we === null) {
        N === null && (N = K);
        break;
      }
      e && N && we.alternate === null && n(f, N), s = o(we, s, z), P === null ? C = we : P.sibling = we, P = we, N = K;
    }
    if (T.done) return t(
      f,
      N
    ), B && En(f, z), C;
    if (N === null) {
      for (; !T.done; z++, T = d.next()) T = p(f, T.value, v), T !== null && (s = o(T, s, z), P === null ? C = T : P.sibling = T, P = T);
      return B && En(f, z), C;
    }
    for (N = r(f, N); !T.done; z++, T = d.next()) T = w(N, f, z, T.value, v), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? z : T.key), s = o(T, s, z), P === null ? C = T : P.sibling = T, P = T);
    return e && N.forEach(function(Un) {
      return n(f, Un);
    }), B && En(f, z), C;
  }
  function M(f, s, d, v) {
    if (typeof d == "object" && d !== null && d.type === Wn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var C = d.key, P = s; P !== null; ) {
              if (P.key === C) {
                if (C = d.type, C === Wn) {
                  if (P.tag === 7) {
                    t(f, P.sibling), s = l(P, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ln && Cu(C) === P.type) {
                  t(f, P.sibling), s = l(P, d.props), s.ref = Ct(f, P, d), s.return = f, f = s;
                  break e;
                }
                t(f, P);
                break;
              } else n(f, P);
              P = P.sibling;
            }
            d.type === Wn ? (s = Tn(d.props.children, f.mode, v, d.key), s.return = f, f = s) : (v = Fr(d.type, d.key, d.props, null, f.mode, v), v.ref = Ct(f, s, d), v.return = f, f = v);
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
            s = Yl(d, f.mode, v), s.return = f, f = s;
          }
          return i(f);
        case ln:
          return P = d._init, M(f, s, P(d._payload), v);
      }
      if (Pt(d)) return S(f, s, d, v);
      if (vt(d)) return k(f, s, d, v);
      xr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(f, s.sibling), s = l(s, d), s.return = f, f = s) : (t(f, s), s = Gl(d, f.mode, v), s.return = f, f = s), i(f)) : t(f, s);
  }
  return M;
}
var at = cs(!0), fs = cs(!1), Zr = kn(null), Xr = null, Xn = null, yi = null;
function hi() {
  yi = Xn = Xr = null;
}
function gi(e) {
  var n = Zr.current;
  A(Zr), e._currentValue = n;
}
function Ro(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function rt(e, n) {
  Xr = e, yi = Xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (fe = !0), e.firstContext = null);
}
function Pe(e) {
  var n = e._currentValue;
  if (yi !== e) if (e = { context: e, memoizedValue: n, next: null }, Xn === null) {
    if (Xr === null) throw Error(x(308));
    Xn = e, Xr.dependencies = { lanes: 0, firstContext: e };
  } else Xn = Xn.next = e;
  return n;
}
var Pn = null;
function vi(e) {
  Pn === null ? Pn = [e] : Pn.push(e);
}
function ds(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, vi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, qe(e, r);
}
function qe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var on = !1;
function xi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ps(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ze(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function yn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, j & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, qe(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, vi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, qe(e, t);
}
function Rr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, li(e, t);
  }
}
function Eu(e, n) {
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
function Jr(e, n, t, r) {
  var l = e.updateQueue;
  on = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, c = a.next;
    a.next = null, i === null ? o = c : i.next = c, i = a;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = a));
  }
  if (o !== null) {
    var p = l.baseState;
    i = 0, h = c = a = null, u = o;
    do {
      var m = u.lane, w = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, k = u;
          switch (m = n, w = t, k.tag) {
            case 1:
              if (S = k.payload, typeof S == "function") {
                p = S.call(w, p, m);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = k.payload, m = typeof S == "function" ? S.call(w, p, m) : S, m == null) break e;
              p = V({}, p, m);
              break e;
            case 2:
              on = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else w = { eventTime: w, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = w, a = p) : h = h.next = w, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = p), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    Mn |= i, e.lanes = i, e.memoizedState = p;
  }
}
function _u(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(x(191, l));
      l.call(r);
    }
  }
}
var ir = {}, We = kn(ir), Xt = kn(ir), Jt = kn(ir);
function zn(e) {
  if (e === ir) throw Error(x(174));
  return e;
}
function Si(e, n) {
  switch (U(Jt, n), U(Xt, e), U(We, ir), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ao(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = ao(n, e);
  }
  A(We), U(We, n);
}
function st() {
  A(We), A(Xt), A(Jt);
}
function ms(e) {
  zn(Jt.current);
  var n = zn(We.current), t = ao(n, e.type);
  n !== t && (U(Xt, e), U(We, t));
}
function wi(e) {
  Xt.current === e && (A(We), A(Xt));
}
var W = kn(0);
function qr(e) {
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
function ki() {
  for (var e = 0; e < Bl.length; e++) Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Tr = en.ReactCurrentDispatcher, Wl = en.ReactCurrentBatchConfig, jn = 0, H = null, Z = null, J = null, br = !1, Ft = !1, qt = 0, id = 0;
function te() {
  throw Error(x(321));
}
function Ci(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Fe(e[t], n[t])) return !1;
  return !0;
}
function Ei(e, n, t, r, l, o) {
  if (jn = o, H = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Tr.current = e === null || e.memoizedState === null ? cd : fd, e = t(r, l), Ft) {
    o = 0;
    do {
      if (Ft = !1, qt = 0, 25 <= o) throw Error(x(301));
      o += 1, J = Z = null, n.updateQueue = null, Tr.current = dd, e = t(r, l);
    } while (Ft);
  }
  if (Tr.current = el, n = Z !== null && Z.next !== null, jn = 0, J = Z = H = null, br = !1, n) throw Error(x(300));
  return e;
}
function _i() {
  var e = qt !== 0;
  return qt = 0, e;
}
function $e() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? H.memoizedState = J = e : J = J.next = e, J;
}
function ze() {
  if (Z === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var n = J === null ? H.memoizedState : J.next;
  if (n !== null) J = n, Z = e;
  else {
    if (e === null) throw Error(x(310));
    Z = e, e = { memoizedState: Z.memoizedState, baseState: Z.baseState, baseQueue: Z.baseQueue, queue: Z.queue, next: null }, J === null ? H.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function bt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Hl(e) {
  var n = ze(), t = n.queue;
  if (t === null) throw Error(x(311));
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
    var u = i = null, a = null, c = o;
    do {
      var h = c.lane;
      if ((jn & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = p, i = r) : a = a.next = p, H.lanes |= h, Mn |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? i = r : a.next = u, Fe(r, n.memoizedState) || (fe = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, H.lanes |= o, Mn |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Vl(e) {
  var n = ze(), t = n.queue;
  if (t === null) throw Error(x(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Fe(o, n.memoizedState) || (fe = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ys() {
}
function hs(e, n) {
  var t = H, r = ze(), l = n(), o = !Fe(r.memoizedState, l);
  if (o && (r.memoizedState = l, fe = !0), r = r.queue, Ni(xs.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || J !== null && J.memoizedState.tag & 1) {
    if (t.flags |= 2048, er(9, vs.bind(null, t, r, l, n), void 0, null), q === null) throw Error(x(349));
    jn & 30 || gs(t, n, l);
  }
  return l;
}
function gs(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = H.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, H.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function vs(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Ss(n) && ws(e);
}
function xs(e, n, t) {
  return t(function() {
    Ss(n) && ws(e);
  });
}
function Ss(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Fe(e, t);
  } catch {
    return !0;
  }
}
function ws(e) {
  var n = qe(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function Nu(e) {
  var n = $e();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bt, lastRenderedState: e }, n.queue = e, e = e.dispatch = sd.bind(null, H, e), [n.memoizedState, e];
}
function er(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = H.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, H.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function ks() {
  return ze().memoizedState;
}
function Dr(e, n, t, r) {
  var l = $e();
  H.flags |= e, l.memoizedState = er(1 | n, t, void 0, r === void 0 ? null : r);
}
function pl(e, n, t, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (o = i.destroy, r !== null && Ci(r, i.deps)) {
      l.memoizedState = er(n, t, o, r);
      return;
    }
  }
  H.flags |= e, l.memoizedState = er(1 | n, t, o, r);
}
function Pu(e, n) {
  return Dr(8390656, 8, e, n);
}
function Ni(e, n) {
  return pl(2048, 8, e, n);
}
function Cs(e, n) {
  return pl(4, 2, e, n);
}
function Es(e, n) {
  return pl(4, 4, e, n);
}
function _s(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Ns(e, n, t) {
  return t = t != null ? t.concat([e]) : null, pl(4, 4, _s.bind(null, n, e), t);
}
function Pi() {
}
function Ps(e, n) {
  var t = ze();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ci(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function zs(e, n) {
  var t = ze();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ci(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Rs(e, n, t) {
  return jn & 21 ? (Fe(t, n) || (t = Ma(), H.lanes |= t, Mn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = t);
}
function ud(e, n) {
  var t = F;
  F = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), n();
  } finally {
    F = t, Wl.transition = r;
  }
}
function Ts() {
  return ze().memoizedState;
}
function ad(e, n, t) {
  var r = gn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ds(e)) Ls(n, t);
  else if (t = ds(e, n, t, r), t !== null) {
    var l = ue();
    Me(t, e, r, l), js(t, n, r);
  }
}
function sd(e, n, t) {
  var r = gn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ds(e)) Ls(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, vi(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = ds(e, n, l, r), t !== null && (l = ue(), Me(t, e, r, l), js(t, n, r));
  }
}
function Ds(e) {
  var n = e.alternate;
  return e === H || n !== null && n === H;
}
function Ls(e, n) {
  Ft = br = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function js(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, li(e, t);
  }
}
var el = { readContext: Pe, useCallback: te, useContext: te, useEffect: te, useImperativeHandle: te, useInsertionEffect: te, useLayoutEffect: te, useMemo: te, useReducer: te, useRef: te, useState: te, useDebugValue: te, useDeferredValue: te, useTransition: te, useMutableSource: te, useSyncExternalStore: te, useId: te, unstable_isNewReconciler: !1 }, cd = { readContext: Pe, useCallback: function(e, n) {
  return $e().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Pe, useEffect: Pu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Dr(
    4194308,
    4,
    _s.bind(null, n, e),
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
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = ad.bind(null, H, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = $e();
  return e = { current: e }, n.memoizedState = e;
}, useState: Nu, useDebugValue: Pi, useDeferredValue: function(e) {
  return $e().memoizedState = e;
}, useTransition: function() {
  var e = Nu(!1), n = e[0];
  return e = ud.bind(null, e[1]), $e().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = H, l = $e();
  if (B) {
    if (t === void 0) throw Error(x(407));
    t = t();
  } else {
    if (t = n(), q === null) throw Error(x(349));
    jn & 30 || gs(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Pu(xs.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, er(9, vs.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = $e(), n = q.identifierPrefix;
  if (B) {
    var t = Ye, r = Ge;
    t = (r & ~(1 << 32 - je(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = qt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = id++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, fd = {
  readContext: Pe,
  useCallback: Ps,
  useContext: Pe,
  useEffect: Ni,
  useImperativeHandle: Ns,
  useInsertionEffect: Cs,
  useLayoutEffect: Es,
  useMemo: zs,
  useReducer: Hl,
  useRef: ks,
  useState: function() {
    return Hl(bt);
  },
  useDebugValue: Pi,
  useDeferredValue: function(e) {
    var n = ze();
    return Rs(n, Z.memoizedState, e);
  },
  useTransition: function() {
    var e = Hl(bt)[0], n = ze().memoizedState;
    return [e, n];
  },
  useMutableSource: ys,
  useSyncExternalStore: hs,
  useId: Ts,
  unstable_isNewReconciler: !1
}, dd = { readContext: Pe, useCallback: Ps, useContext: Pe, useEffect: Ni, useImperativeHandle: Ns, useInsertionEffect: Cs, useLayoutEffect: Es, useMemo: zs, useReducer: Vl, useRef: ks, useState: function() {
  return Vl(bt);
}, useDebugValue: Pi, useDeferredValue: function(e) {
  var n = ze();
  return Z === null ? n.memoizedState = e : Rs(n, Z.memoizedState, e);
}, useTransition: function() {
  var e = Vl(bt)[0], n = ze().memoizedState;
  return [e, n];
}, useMutableSource: ys, useSyncExternalStore: hs, useId: Ts, unstable_isNewReconciler: !1 };
function Te(e, n) {
  if (e && e.defaultProps) {
    n = V({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function To(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : V({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ml = { isMounted: function(e) {
  return (e = e._reactInternals) ? On(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = ue(), l = gn(e), o = Ze(r, l);
  o.payload = n, t != null && (o.callback = t), n = yn(e, o, l), n !== null && (Me(n, e, l, r), Rr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ue(), l = gn(e), o = Ze(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = yn(e, o, l), n !== null && (Me(n, e, l, r), Rr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ue(), r = gn(e), l = Ze(t, r);
  l.tag = 2, n != null && (l.callback = n), n = yn(e, l, r), n !== null && (Me(n, e, r, t), Rr(n, e, r));
} };
function zu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Qt(t, r) || !Qt(l, o) : !0;
}
function Ms(e, n, t) {
  var r = !1, l = Sn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Pe(o) : (l = pe(n) ? Dn : oe.current, r = n.contextTypes, o = (r = r != null) ? it(e, l) : Sn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ml, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Ru(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && ml.enqueueReplaceState(n, n.state, null);
}
function Do(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, xi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Pe(o) : (o = pe(n) ? Dn : oe.current, l.context = it(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (To(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && ml.enqueueReplaceState(l, l.state, null), Jr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ct(e, n) {
  try {
    var t = "", r = n;
    do
      t += $c(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Kl(e, n, t) {
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
var pd = typeof WeakMap == "function" ? WeakMap : Map;
function Fs(e, n, t) {
  t = Ze(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    tl || (tl = !0, Wo = r), Lo(e, n);
  }, t;
}
function Is(e, n, t) {
  t = Ze(-1, t), t.tag = 3;
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
    Lo(e, n), typeof r != "function" && (hn === null ? hn = /* @__PURE__ */ new Set([this]) : hn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Tu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Pd.bind(null, e, n, t), n.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Ze(-1, 1), n.tag = 2, yn(t, n, 1))), t.lanes |= 1), e);
}
var md = en.ReactCurrentOwner, fe = !1;
function ie(e, n, t, r) {
  n.child = e === null ? fs(n, null, t, r) : at(n, e.child, t, r);
}
function ju(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return rt(n, l), r = Ei(e, n, t, r, o, l), t = _i(), e !== null && !fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, be(e, n, l)) : (B && t && di(n), n.flags |= 1, ie(e, n, r, l), n.child);
}
function Mu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Fi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Os(e, n, o, r, l)) : (e = Fr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Qt, t(i, r) && e.ref === n.ref) return be(e, n, l);
  }
  return n.flags |= 1, e = vn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Os(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qt(o, r) && e.ref === n.ref) if (fe = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return n.lanes = e.lanes, be(e, n, l);
  }
  return jo(e, n, t, r, l);
}
function Us(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(qn, ye), ye |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, U(qn, ye), ye |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, U(qn, ye), ye |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, U(qn, ye), ye |= r;
  return ie(e, n, l, t), n.child;
}
function $s(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function jo(e, n, t, r, l) {
  var o = pe(t) ? Dn : oe.current;
  return o = it(n, o), rt(n, l), t = Ei(e, n, t, r, o, l), r = _i(), e !== null && !fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, be(e, n, l)) : (B && r && di(n), n.flags |= 1, ie(e, n, t, l), n.child);
}
function Fu(e, n, t, r, l) {
  if (pe(t)) {
    var o = !0;
    Qr(n);
  } else o = !1;
  if (rt(n, l), n.stateNode === null) Lr(e, n), Ms(n, t, r), Do(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Pe(c) : (c = pe(t) ? Dn : oe.current, c = it(n, c));
    var h = t.getDerivedStateFromProps, p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== c) && Ru(n, i, r, c), on = !1;
    var m = n.memoizedState;
    i.state = m, Jr(n, r, i, l), a = n.memoizedState, u !== r || m !== a || de.current || on ? (typeof h == "function" && (To(n, t, h, r), a = n.memoizedState), (u = on || zu(n, t, u, r, m, a, c)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, ps(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Te(n.type, u), i.props = c, p = n.pendingProps, m = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = Pe(a) : (a = pe(t) ? Dn : oe.current, a = it(n, a));
    var w = t.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || m !== a) && Ru(n, i, r, a), on = !1, m = n.memoizedState, i.state = m, Jr(n, r, i, l);
    var S = n.memoizedState;
    u !== p || m !== S || de.current || on ? (typeof w == "function" && (To(n, t, w, r), S = n.memoizedState), (c = on || zu(n, t, c, r, m, S, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = S), i.props = r, i.state = S, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Mo(e, n, t, r, o, l);
}
function Mo(e, n, t, r, l, o) {
  $s(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Su(n, t, !1), be(e, n, o);
  r = n.stateNode, md.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = at(n, e.child, null, o), n.child = at(n, null, u, o)) : ie(e, n, u, o), n.memoizedState = r.state, l && Su(n, t, !0), n.child;
}
function As(e) {
  var n = e.stateNode;
  n.pendingContext ? xu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && xu(e, n.context, !1), Si(e, n.containerInfo);
}
function Iu(e, n, t, r, l) {
  return ut(), mi(l), n.flags |= 256, ie(e, n, t, r), n.child;
}
var Fo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Io(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bs(e, n, t) {
  var r = n.pendingProps, l = W.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(W, l & 1), e === null)
    return zo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = gl(i, r, 0, null), e = Tn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Io(t), n.memoizedState = Fo, e) : zi(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return yd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = vn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = vn(u, o) : (o = Tn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Io(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Fo, r;
  }
  return o = e.child, e = o.sibling, r = vn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function zi(e, n) {
  return n = gl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function Sr(e, n, t, r) {
  return r !== null && mi(r), at(n, e.child, null, t), e = zi(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function yd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Kl(Error(x(422))), Sr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), o = Tn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && at(n, e.child, null, i), n.child.memoizedState = Io(i), n.memoizedState = Fo, o);
  if (!(n.mode & 1)) return Sr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(x(419)), r = Kl(o, r, void 0), Sr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, fe || u) {
    if (r = q, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, qe(e, l), Me(r, e, l, -1));
    }
    return Mi(), r = Kl(Error(x(421))), Sr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = zd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, he = mn(l.nextSibling), ge = n, B = !0, Le = null, e !== null && (Ce[Ee++] = Ge, Ce[Ee++] = Ye, Ce[Ee++] = Ln, Ge = e.id, Ye = e.overflow, Ln = n), n = zi(n, r.children), n.flags |= 4096, n);
}
function Ou(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Ro(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Ws(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (ie(e, n, r.children, t), r = W.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ou(e, t, n);
      else if (e.tag === 19) Ou(e, t, n);
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
  if (U(W, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && qr(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Ql(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && qr(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Ql(n, !0, t, null, o);
      break;
    case "together":
      Ql(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Lr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function be(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Mn |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(x(153));
  if (n.child !== null) {
    for (e = n.child, t = vn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = vn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function hd(e, n, t) {
  switch (n.tag) {
    case 3:
      As(n), ut();
      break;
    case 5:
      ms(n);
      break;
    case 1:
      pe(n.type) && Qr(n);
      break;
    case 4:
      Si(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      U(Zr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(W, W.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Bs(e, n, t) : (U(W, W.current & 1), e = be(e, n, t), e !== null ? e.sibling : null);
      U(W, W.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return Ws(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Us(e, n, t);
  }
  return be(e, n, t);
}
var Hs, Oo, Vs, Ks;
Hs = function(e, n) {
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
Oo = function() {
};
Vs = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, zn(We.current);
    var o = null;
    switch (t) {
      case "input":
        l = lo(e, l), r = lo(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = uo(e, l), r = uo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr);
    }
    so(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && ($t.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && ($t.hasOwnProperty(c) ? (a != null && c === "onScroll" && $("scroll", e), o || u === a || (o = [])) : (o = o || []).push(c, a));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ks = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Et(e, n) {
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
function re(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function gd(e, n, t) {
  var r = n.pendingProps;
  switch (pi(n), n.tag) {
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
      return re(n), null;
    case 1:
      return pe(n.type) && Kr(), re(n), null;
    case 3:
      return r = n.stateNode, st(), A(de), A(oe), ki(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Le !== null && (Ko(Le), Le = null))), Oo(e, n), re(n), null;
    case 5:
      wi(n);
      var l = zn(Jt.current);
      if (t = n.type, e !== null && n.stateNode != null) Vs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(x(166));
          return re(n), null;
        }
        if (e = zn(We.current), vr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ae] = n, r[Zt] = o, e = (n.mode & 1) !== 0, t) {
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
              for (l = 0; l < Rt.length; l++) $(Rt[l], r);
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
              Qi(r, o), $("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, $("invalid", r);
              break;
            case "textarea":
              Yi(r, o), $("invalid", r);
          }
          so(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && gr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : $t.hasOwnProperty(i) && u != null && i === "onScroll" && $("scroll", r);
          }
          switch (t) {
            case "input":
              sr(r), Gi(r, o, !0);
              break;
            case "textarea":
              sr(r), Zi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xa(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ae] = n, e[Zt] = r, Hs(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = co(t, r), t) {
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
                for (l = 0; l < Rt.length; l++) $(Rt[l], e);
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
                Qi(e, r), l = lo(e, r), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), $("invalid", e);
                break;
              case "textarea":
                Yi(e, r), l = uo(e, r), $("invalid", e);
                break;
              default:
                l = r;
            }
            so(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? ka(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sa(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && At(e, a) : typeof a == "number" && At(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && ($t.hasOwnProperty(o) ? a != null && o === "onScroll" && $("scroll", e) : a != null && qo(e, o, a, i));
            }
            switch (t) {
              case "input":
                sr(e), Gi(e, r, !1);
                break;
              case "textarea":
                sr(e), Zi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xn(r.value));
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
                typeof l.onClick == "function" && (e.onclick = Vr);
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
      return re(n), null;
    case 6:
      if (e && n.stateNode != null) Ks(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(x(166));
        if (t = zn(Jt.current), zn(We.current), vr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ae] = n, (o = r.nodeValue !== t) && (e = ge, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ae] = n, n.stateNode = r;
      }
      return re(n), null;
    case 13:
      if (A(W), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (B && he !== null && n.mode & 1 && !(n.flags & 128)) ss(), ut(), n.flags |= 98560, o = !1;
        else if (o = vr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
            o[Ae] = n;
          } else ut(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          re(n), o = !1;
        } else Le !== null && (Ko(Le), Le = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || W.current & 1 ? X === 0 && (X = 3) : Mi())), n.updateQueue !== null && (n.flags |= 4), re(n), null);
    case 4:
      return st(), Oo(e, n), e === null && Gt(n.stateNode.containerInfo), re(n), null;
    case 10:
      return gi(n.type._context), re(n), null;
    case 17:
      return pe(n.type) && Kr(), re(n), null;
    case 19:
      if (A(W), o = n.memoizedState, o === null) return re(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) Et(o, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = qr(e), i !== null) {
            for (n.flags |= 128, Et(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return U(W, W.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && G() > ft && (n.flags |= 128, r = !0, Et(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = qr(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Et(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !B) return re(n), null;
        } else 2 * G() - o.renderingStartTime > ft && t !== 1073741824 && (n.flags |= 128, r = !0, Et(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = G(), n.sibling = null, t = W.current, U(W, r ? t & 1 | 2 : t & 1), n) : (re(n), null);
    case 22:
    case 23:
      return ji(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? ye & 1073741824 && (re(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : re(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, n.tag));
}
function vd(e, n) {
  switch (pi(n), n.tag) {
    case 1:
      return pe(n.type) && Kr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return st(), A(de), A(oe), ki(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return wi(n), null;
    case 13:
      if (A(W), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(x(340));
        ut();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return A(W), null;
    case 4:
      return st(), null;
    case 10:
      return gi(n.type._context), null;
    case 22:
    case 23:
      return ji(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1, le = !1, xd = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function Jn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    Q(e, n, r);
  }
  else t.current = null;
}
function Uo(e, n, t) {
  try {
    t();
  } catch (r) {
    Q(e, n, r);
  }
}
var Uu = !1;
function Sd(e, n) {
  if (wo = Br, e = Xa(), fi(e)) {
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
        var i = 0, u = -1, a = -1, c = 0, h = 0, p = e, m = null;
        n: for (; ; ) {
          for (var w; p !== t || l !== 0 && p.nodeType !== 3 || (u = i + l), p !== o || r !== 0 && p.nodeType !== 3 || (a = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (w = p.firstChild) !== null; )
            m = p, p = w;
          for (; ; ) {
            if (p === e) break n;
            if (m === t && ++c === l && (u = i), m === o && ++h === r && (a = i), (w = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = w;
        }
        t = u === -1 || a === -1 ? null : { start: u, end: a };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (ko = { focusedElem: e, selectionRange: t }, Br = !1, _ = n; _ !== null; ) if (n = _, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, _ = e;
  else for (; _ !== null; ) {
    n = _;
    try {
      var S = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var k = S.memoizedProps, M = S.memoizedState, f = n.stateNode, s = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Te(n.type, k), M);
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
      Q(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, _ = e;
      break;
    }
    _ = n.return;
  }
  return S = Uu, Uu = !1, S;
}
function It(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Uo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yl(e, n) {
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
function $o(e) {
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
function Qs(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Qs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ae], delete n[Zt], delete n[_o], delete n[td], delete n[rd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $u(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gs(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ao(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Vr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ao(e, n, t), e = e.sibling; e !== null; ) Ao(e, n, t), e = e.sibling;
}
function Bo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Bo(e, n, t), e = e.sibling; e !== null; ) Bo(e, n, t), e = e.sibling;
}
var b = null, De = !1;
function rn(e, n, t) {
  for (t = t.child; t !== null; ) Ys(e, n, t), t = t.sibling;
}
function Ys(e, n, t) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(ul, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      le || Jn(t, n);
    case 6:
      var r = b, l = De;
      b = null, rn(e, n, t), b = r, De = l, b !== null && (De ? (e = b, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : b.removeChild(t.stateNode));
      break;
    case 18:
      b !== null && (De ? (e = b, t = t.stateNode, e.nodeType === 8 ? $l(e.parentNode, t) : e.nodeType === 1 && $l(e, t), Vt(e)) : $l(b, t.stateNode));
      break;
    case 4:
      r = b, l = De, b = t.stateNode.containerInfo, De = !0, rn(e, n, t), b = r, De = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Uo(t, n, i), l = l.next;
        } while (l !== r);
      }
      rn(e, n, t);
      break;
    case 1:
      if (!le && (Jn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(t, n, u);
      }
      rn(e, n, t);
      break;
    case 21:
      rn(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (le = (r = le) || t.memoizedState !== null, rn(e, n, t), le = r) : rn(e, n, t);
      break;
    default:
      rn(e, n, t);
  }
}
function Au(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new xd()), n.forEach(function(r) {
      var l = Rd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Re(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            b = u.stateNode, De = !1;
            break e;
          case 3:
            b = u.stateNode.containerInfo, De = !0;
            break e;
          case 4:
            b = u.stateNode.containerInfo, De = !0;
            break e;
        }
        u = u.return;
      }
      if (b === null) throw Error(x(160));
      Ys(o, i, l), b = null, De = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      Q(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Zs(n, e), n = n.sibling;
}
function Zs(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Re(n, e), Ue(e), r & 4) {
        try {
          It(3, e, e.return), yl(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          It(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      Re(n, e), Ue(e), r & 512 && t !== null && Jn(t, t.return);
      break;
    case 5:
      if (Re(n, e), Ue(e), r & 512 && t !== null && Jn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          At(l, "");
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && ga(l, o), co(u, i);
          var c = co(u, o);
          for (i = 0; i < a.length; i += 2) {
            var h = a[i], p = a[i + 1];
            h === "style" ? ka(l, p) : h === "dangerouslySetInnerHTML" ? Sa(l, p) : h === "children" ? At(l, p) : qo(l, h, p, c);
          }
          switch (u) {
            case "input":
              oo(l, o);
              break;
            case "textarea":
              va(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? bn(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? bn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : bn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Zt] = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Re(n, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Re(n, e), Ue(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Vt(n.containerInfo);
      } catch (k) {
        Q(e, e.return, k);
      }
      break;
    case 4:
      Re(n, e), Ue(e);
      break;
    case 13:
      Re(n, e), Ue(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Di = G())), r & 4 && Au(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (le = (c = le) || h, Re(n, e), le = c) : Re(n, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (_ = e, h = e.child; h !== null; ) {
          for (p = _ = h; _ !== null; ) {
            switch (m = _, w = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                It(4, m, m.return);
                break;
              case 1:
                Jn(m, m.return);
                var S = m.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = m, t = m.return;
                  try {
                    n = r, S.props = n.memoizedProps, S.state = n.memoizedState, S.componentWillUnmount();
                  } catch (k) {
                    Q(r, t, k);
                  }
                }
                break;
              case 5:
                Jn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Wu(p);
                  continue;
                }
            }
            w !== null ? (w.return = m, _ = w) : Wu(p);
          }
          h = h.sibling;
        }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                l = p.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, a = p.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = wa("display", i));
              } catch (k) {
                Q(e, e.return, k);
              }
            }
          } else if (p.tag === 6) {
            if (h === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (k) {
              Q(e, e.return, k);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), p = p.return;
          }
          h === p && (h = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Re(n, e), Ue(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      Re(
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
          if (Gs(t)) {
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
          r.flags & 32 && (At(l, ""), r.flags &= -33);
          var o = $u(e);
          Bo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = $u(e);
          Ao(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function wd(e, n, t) {
  _ = e, Xs(e);
}
function Xs(e, n, t) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || wr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || le;
        u = wr;
        var c = le;
        if (wr = i, (le = a) && !c) for (_ = l; _ !== null; ) i = _, a = i.child, i.tag === 22 && i.memoizedState !== null ? Hu(l) : a !== null ? (a.return = i, _ = a) : Hu(l);
        for (; o !== null; ) _ = o, Xs(o), o = o.sibling;
        _ = l, wr = u, le = c;
      }
      Bu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : Bu(e);
  }
}
function Bu(e) {
  for (; _ !== null; ) {
    var n = _;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            le || yl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !le) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Te(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && _u(n, o, r);
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
              _u(n, i, t);
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
                  var p = h.dehydrated;
                  p !== null && Vt(p);
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
        le || n.flags & 512 && $o(n);
      } catch (m) {
        Q(n, n.return, m);
      }
    }
    if (n === e) {
      _ = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, _ = t;
      break;
    }
    _ = n.return;
  }
}
function Wu(e) {
  for (; _ !== null; ) {
    var n = _;
    if (n === e) {
      _ = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, _ = t;
      break;
    }
    _ = n.return;
  }
}
function Hu(e) {
  for (; _ !== null; ) {
    var n = _;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            yl(4, n);
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
            $o(n);
          } catch (a) {
            Q(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            $o(n);
          } catch (a) {
            Q(n, i, a);
          }
      }
    } catch (a) {
      Q(n, n.return, a);
    }
    if (n === e) {
      _ = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, _ = u;
      break;
    }
    _ = n.return;
  }
}
var kd = Math.ceil, nl = en.ReactCurrentDispatcher, Ri = en.ReactCurrentOwner, Ne = en.ReactCurrentBatchConfig, j = 0, q = null, Y = null, ee = 0, ye = 0, qn = kn(0), X = 0, nr = null, Mn = 0, hl = 0, Ti = 0, Ot = null, ce = null, Di = 0, ft = 1 / 0, Ke = null, tl = !1, Wo = null, hn = null, kr = !1, cn = null, rl = 0, Ut = 0, Ho = null, jr = -1, Mr = 0;
function ue() {
  return j & 6 ? G() : jr !== -1 ? jr : jr = G();
}
function gn(e) {
  return e.mode & 1 ? j & 2 && ee !== 0 ? ee & -ee : od.transition !== null ? (Mr === 0 && (Mr = Ma()), Mr) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ba(e.type)), e) : 1;
}
function Me(e, n, t, r) {
  if (50 < Ut) throw Ut = 0, Ho = null, Error(x(185));
  rr(e, t, r), (!(j & 2) || e !== q) && (e === q && (!(j & 2) && (hl |= t), X === 4 && an(e, ee)), me(e, r), t === 1 && j === 0 && !(n.mode & 1) && (ft = G() + 500, dl && Cn()));
}
function me(e, n) {
  var t = e.callbackNode;
  lf(e, n);
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0) t !== null && qi(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && qi(t), n === 1) e.tag === 0 ? ld(Vu.bind(null, e)) : is(Vu.bind(null, e)), ed(function() {
      !(j & 6) && Cn();
    }), t = null;
    else {
      switch (Fa(r)) {
        case 1:
          t = ri;
          break;
        case 4:
          t = La;
          break;
        case 16:
          t = $r;
          break;
        case 536870912:
          t = ja;
          break;
        default:
          t = $r;
      }
      t = lc(t, Js.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Js(e, n) {
  if (jr = -1, Mr = 0, j & 6) throw Error(x(327));
  var t = e.callbackNode;
  if (lt() && e.callbackNode !== t) return null;
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = ll(e, r);
  else {
    n = r;
    var l = j;
    j |= 2;
    var o = bs();
    (q !== e || ee !== n) && (Ke = null, ft = G() + 500, Rn(e, n));
    do
      try {
        _d();
        break;
      } catch (u) {
        qs(e, u);
      }
    while (!0);
    hi(), nl.current = o, j = l, Y !== null ? n = 0 : (q = null, ee = 0, n = X);
  }
  if (n !== 0) {
    if (n === 2 && (l = ho(e), l !== 0 && (r = l, n = Vo(e, l))), n === 1) throw t = nr, Rn(e, 0), an(e, r), me(e, G()), t;
    if (n === 6) an(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Cd(l) && (n = ll(e, r), n === 2 && (o = ho(e), o !== 0 && (r = o, n = Vo(e, o))), n === 1)) throw t = nr, Rn(e, 0), an(e, r), me(e, G()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          _n(e, ce, Ke);
          break;
        case 3:
          if (an(e, r), (r & 130023424) === r && (n = Di + 500 - G(), 10 < n)) {
            if (Ar(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Eo(_n.bind(null, e, ce, Ke), n);
            break;
          }
          _n(e, ce, Ke);
          break;
        case 4:
          if (an(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - je(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Eo(_n.bind(null, e, ce, Ke), r);
            break;
          }
          _n(e, ce, Ke);
          break;
        case 5:
          _n(e, ce, Ke);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return me(e, G()), e.callbackNode === t ? Js.bind(null, e) : null;
}
function Vo(e, n) {
  var t = Ot;
  return e.current.memoizedState.isDehydrated && (Rn(e, n).flags |= 256), e = ll(e, n), e !== 2 && (n = ce, ce = t, n !== null && Ko(n)), e;
}
function Ko(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Cd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Fe(o(), l)) return !1;
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
function an(e, n) {
  for (n &= ~Ti, n &= ~hl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - je(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Vu(e) {
  if (j & 6) throw Error(x(327));
  lt();
  var n = Ar(e, 0);
  if (!(n & 1)) return me(e, G()), null;
  var t = ll(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = ho(e);
    r !== 0 && (n = r, t = Vo(e, r));
  }
  if (t === 1) throw t = nr, Rn(e, 0), an(e, n), me(e, G()), t;
  if (t === 6) throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, _n(e, ce, Ke), me(e, G()), null;
}
function Li(e, n) {
  var t = j;
  j |= 1;
  try {
    return e(n);
  } finally {
    j = t, j === 0 && (ft = G() + 500, dl && Cn());
  }
}
function Fn(e) {
  cn !== null && cn.tag === 0 && !(j & 6) && lt();
  var n = j;
  j |= 1;
  var t = Ne.transition, r = F;
  try {
    if (Ne.transition = null, F = 1, e) return e();
  } finally {
    F = r, Ne.transition = t, j = n, !(j & 6) && Cn();
  }
}
function ji() {
  ye = qn.current, A(qn);
}
function Rn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, bf(t)), Y !== null) for (t = Y.return; t !== null; ) {
    var r = t;
    switch (pi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Kr();
        break;
      case 3:
        st(), A(de), A(oe), ki();
        break;
      case 5:
        wi(r);
        break;
      case 4:
        st();
        break;
      case 13:
        A(W);
        break;
      case 19:
        A(W);
        break;
      case 10:
        gi(r.type._context);
        break;
      case 22:
      case 23:
        ji();
    }
    t = t.return;
  }
  if (q = e, Y = e = vn(e.current, null), ee = ye = n, X = 0, nr = null, Ti = hl = Mn = 0, ce = Ot = null, Pn !== null) {
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
function qs(e, n) {
  do {
    var t = Y;
    try {
      if (hi(), Tr.current = el, br) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        br = !1;
      }
      if (jn = 0, J = Z = H = null, Ft = !1, qt = 0, Ri.current = null, t === null || t.return === null) {
        X = 1, nr = n, Y = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, a = n;
        if (n = ee, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, h = u, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = Du(i);
          if (w !== null) {
            w.flags &= -257, Lu(w, i, u, o, n), w.mode & 1 && Tu(o, c, n), n = w, a = c;
            var S = n.updateQueue;
            if (S === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(a), n.updateQueue = k;
            } else S.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Tu(o, c, n), Mi();
              break e;
            }
            a = Error(x(426));
          }
        } else if (B && u.mode & 1) {
          var M = Du(i);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Lu(M, i, u, o, n), mi(ct(a, u));
            break e;
          }
        }
        o = a = ct(a, u), X !== 4 && (X = 2), Ot === null ? Ot = [o] : Ot.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Fs(o, a, n);
              Eu(o, f);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (hn === null || !hn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Is(o, u, n);
                Eu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nc(t);
    } catch (C) {
      n = C, Y === t && t !== null && (Y = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function bs() {
  var e = nl.current;
  return nl.current = el, e === null ? el : e;
}
function Mi() {
  (X === 0 || X === 3 || X === 2) && (X = 4), q === null || !(Mn & 268435455) && !(hl & 268435455) || an(q, ee);
}
function ll(e, n) {
  var t = j;
  j |= 2;
  var r = bs();
  (q !== e || ee !== n) && (Ke = null, Rn(e, n));
  do
    try {
      Ed();
      break;
    } catch (l) {
      qs(e, l);
    }
  while (!0);
  if (hi(), j = t, nl.current = r, Y !== null) throw Error(x(261));
  return q = null, ee = 0, X;
}
function Ed() {
  for (; Y !== null; ) ec(Y);
}
function _d() {
  for (; Y !== null && !Zc(); ) ec(Y);
}
function ec(e) {
  var n = rc(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, n === null ? nc(e) : Y = n, Ri.current = null;
}
function nc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = vd(t, n), t !== null) {
        t.flags &= 32767, Y = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, Y = null;
        return;
      }
    } else if (t = gd(t, n, ye), t !== null) {
      Y = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Y = n;
      return;
    }
    Y = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function _n(e, n, t) {
  var r = F, l = Ne.transition;
  try {
    Ne.transition = null, F = 1, Nd(e, n, t, r);
  } finally {
    Ne.transition = l, F = r;
  }
  return null;
}
function Nd(e, n, t, r) {
  do
    lt();
  while (cn !== null);
  if (j & 6) throw Error(x(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (of(e, o), e === q && (Y = q = null, ee = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || kr || (kr = !0, lc($r, function() {
    return lt(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Ne.transition, Ne.transition = null;
    var i = F;
    F = 1;
    var u = j;
    j |= 4, Ri.current = null, Sd(e, t), Zs(t, e), Qf(ko), Br = !!wo, ko = wo = null, e.current = t, wd(t), Xc(), j = u, F = i, Ne.transition = o;
  } else e.current = t;
  if (kr && (kr = !1, cn = e, rl = l), o = e.pendingLanes, o === 0 && (hn = null), bc(t.stateNode), me(e, G()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw tl = !1, e = Wo, Wo = null, e;
  return rl & 1 && e.tag !== 0 && lt(), o = e.pendingLanes, o & 1 ? e === Ho ? Ut++ : (Ut = 0, Ho = e) : Ut = 0, Cn(), null;
}
function lt() {
  if (cn !== null) {
    var e = Fa(rl), n = Ne.transition, t = F;
    try {
      if (Ne.transition = null, F = 16 > e ? 16 : e, cn === null) var r = !1;
      else {
        if (e = cn, cn = null, rl = 0, j & 6) throw Error(x(331));
        var l = j;
        for (j |= 4, _ = e.current; _ !== null; ) {
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
                      It(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) p.return = h, _ = p;
                  else for (; _ !== null; ) {
                    h = _;
                    var m = h.sibling, w = h.return;
                    if (Qs(h), h === c) {
                      _ = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = w, _ = m;
                      break;
                    }
                    _ = w;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var M = k.sibling;
                    k.sibling = null, k = M;
                  } while (k !== null);
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
                It(9, o, o.return);
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
                  yl(9, u);
              }
            } catch (C) {
              Q(u, u.return, C);
            }
            if (u === i) {
              _ = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, _ = v;
              break e;
            }
            _ = u.return;
          }
        }
        if (j = l, Cn(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(ul, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      F = t, Ne.transition = n;
    }
  }
  return !1;
}
function Ku(e, n, t) {
  n = ct(t, n), n = Fs(e, n, 1), e = yn(e, n, 1), n = ue(), e !== null && (rr(e, 1, n), me(e, n));
}
function Q(e, n, t) {
  if (e.tag === 3) Ku(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      Ku(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hn === null || !hn.has(r))) {
        e = ct(t, e), e = Is(n, e, 1), n = yn(n, e, 1), e = ue(), n !== null && (rr(n, 1, e), me(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Pd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ue(), e.pingedLanes |= e.suspendedLanes & t, q === e && (ee & t) === t && (X === 4 || X === 3 && (ee & 130023424) === ee && 500 > G() - Di ? Rn(e, 0) : Ti |= t), me(e, n);
}
function tc(e, n) {
  n === 0 && (e.mode & 1 ? (n = dr, dr <<= 1, !(dr & 130023424) && (dr = 4194304)) : n = 1);
  var t = ue();
  e = qe(e, n), e !== null && (rr(e, n, t), me(e, t));
}
function zd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), tc(e, t);
}
function Rd(e, n) {
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
  r !== null && r.delete(n), tc(e, t);
}
var rc;
rc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return fe = !1, hd(e, n, t);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, B && n.flags & 1048576 && us(n, Yr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Lr(e, n), e = n.pendingProps;
      var l = it(n, oe.current);
      rt(n, t), l = Ei(null, n, r, e, l, t);
      var o = _i();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, pe(r) ? (o = !0, Qr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xi(n), l.updater = ml, n.stateNode = l, l._reactInternals = n, Do(n, r, e, t), n = Mo(null, n, r, !0, o, t)) : (n.tag = 0, B && o && di(n), ie(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Lr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Dd(r), e = Te(r, e), l) {
          case 0:
            n = jo(null, n, r, e, t);
            break e;
          case 1:
            n = Fu(null, n, r, e, t);
            break e;
          case 11:
            n = ju(null, n, r, e, t);
            break e;
          case 14:
            n = Mu(null, n, r, Te(r.type, e), t);
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
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), jo(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), Fu(e, n, r, l, t);
    case 3:
      e: {
        if (As(n), e === null) throw Error(x(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, ps(e, n), Jr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = ct(Error(x(423)), n), n = Iu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = ct(Error(x(424)), n), n = Iu(e, n, r, t, l);
          break e;
        } else for (he = mn(n.stateNode.containerInfo.firstChild), ge = n, B = !0, Le = null, t = fs(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (ut(), r === l) {
            n = be(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ms(n), e === null && zo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Co(r, l) ? i = null : o !== null && Co(r, o) && (n.flags |= 32), $s(e, n), ie(e, n, i, t), n.child;
    case 6:
      return e === null && zo(n), null;
    case 13:
      return Bs(e, n, t);
    case 4:
      return Si(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = at(n, null, r, t) : ie(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), ju(e, n, r, l, t);
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, U(Zr, r._currentValue), r._currentValue = i, o !== null) if (Fe(o.value, i)) {
          if (o.children === l.children && !de.current) {
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
                  a = Ze(-1, t & -t), a.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), Ro(
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
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Ro(i, t, n), i = o.sibling;
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
        ie(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, rt(n, t), l = Pe(l), r = r(l), n.flags |= 1, ie(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Te(r, n.pendingProps), l = Te(r.type, l), Mu(e, n, r, l, t);
    case 15:
      return Os(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Te(r, l), Lr(e, n), n.tag = 1, pe(r) ? (e = !0, Qr(n)) : e = !1, rt(n, t), Ms(n, r, l), Do(n, r, l, t), Mo(null, n, r, !0, e, t);
    case 19:
      return Ws(e, n, t);
    case 22:
      return Us(e, n, t);
  }
  throw Error(x(156, n.tag));
};
function lc(e, n) {
  return Da(e, n);
}
function Td(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, n, t, r) {
  return new Td(e, n, t, r);
}
function Fi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Dd(e) {
  if (typeof e == "function") return Fi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ei) return 11;
    if (e === ni) return 14;
  }
  return 2;
}
function vn(e, n) {
  var t = e.alternate;
  return t === null ? (t = _e(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Fr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Fi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Wn:
      return Tn(t.children, l, o, n);
    case bo:
      i = 8, l |= 8;
      break;
    case eo:
      return e = _e(12, t, n, l | 2), e.elementType = eo, e.lanes = o, e;
    case no:
      return e = _e(13, t, n, l), e.elementType = no, e.lanes = o, e;
    case to:
      return e = _e(19, t, n, l), e.elementType = to, e.lanes = o, e;
    case ma:
      return gl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case da:
          i = 10;
          break e;
        case pa:
          i = 9;
          break e;
        case ei:
          i = 11;
          break e;
        case ni:
          i = 14;
          break e;
        case ln:
          i = 16, r = null;
          break e;
      }
      throw Error(x(130, e == null ? e : typeof e, ""));
  }
  return n = _e(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Tn(e, n, t, r) {
  return e = _e(7, e, r, n), e.lanes = t, e;
}
function gl(e, n, t, r) {
  return e = _e(22, e, r, n), e.elementType = ma, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Gl(e, n, t) {
  return e = _e(6, e, null, n), e.lanes = t, e;
}
function Yl(e, n, t) {
  return n = _e(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Ld(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ii(e, n, t, r, l, o, i, u, a) {
  return e = new Ld(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = _e(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xi(o), e;
}
function jd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Bn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function oc(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(x(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
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
    if (pe(t)) return os(e, t, n);
  }
  return n;
}
function ic(e, n, t, r, l, o, i, u, a) {
  return e = Ii(t, r, !0, e, l, o, i, u, a), e.context = oc(null), t = e.current, r = ue(), l = gn(t), o = Ze(r, l), o.callback = n ?? null, yn(t, o, l), e.current.lanes = l, rr(e, l, r), me(e, r), e;
}
function vl(e, n, t, r) {
  var l = n.current, o = ue(), i = gn(l);
  return t = oc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Ze(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = yn(l, n, i), e !== null && (Me(e, l, i, o), Rr(e, l, i)), i;
}
function ol(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Oi(e, n) {
  Qu(e, n), (e = e.alternate) && Qu(e, n);
}
function Md() {
  return null;
}
var uc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ui(e) {
  this._internalRoot = e;
}
xl.prototype.render = Ui.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(x(409));
  vl(e, n, null, null);
};
xl.prototype.unmount = Ui.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Fn(function() {
      vl(null, e, null, null);
    }), n[Je] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ua();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < un.length && n !== 0 && n < un[t].priority; t++) ;
    un.splice(t, 0, e), t === 0 && Aa(e);
  }
};
function $i(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Gu() {
}
function Fd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = ol(i);
        o.call(c);
      };
    }
    var i = ic(n, r, e, 0, null, !1, !1, "", Gu);
    return e._reactRootContainer = i, e[Je] = i.current, Gt(e.nodeType === 8 ? e.parentNode : e), Fn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ol(a);
      u.call(c);
    };
  }
  var a = Ii(e, 0, !1, null, null, !1, !1, "", Gu);
  return e._reactRootContainer = a, e[Je] = a.current, Gt(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
    vl(n, a, t, r);
  }), a;
}
function wl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = ol(i);
        u.call(a);
      };
    }
    vl(n, i, e, l);
  } else i = Fd(t, n, e, l, r);
  return ol(i);
}
Ia = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = zt(n.pendingLanes);
        t !== 0 && (li(n, t | 1), me(n, G()), !(j & 6) && (ft = G() + 500, Cn()));
      }
      break;
    case 13:
      Fn(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ue();
          Me(r, e, 1, l);
        }
      }), Oi(e, 1);
  }
};
oi = function(e) {
  if (e.tag === 13) {
    var n = qe(e, 134217728);
    if (n !== null) {
      var t = ue();
      Me(n, e, 134217728, t);
    }
    Oi(e, 134217728);
  }
};
Oa = function(e) {
  if (e.tag === 13) {
    var n = gn(e), t = qe(e, n);
    if (t !== null) {
      var r = ue();
      Me(t, e, n, r);
    }
    Oi(e, n);
  }
};
Ua = function() {
  return F;
};
$a = function(e, n) {
  var t = F;
  try {
    return F = e, n();
  } finally {
    F = t;
  }
};
po = function(e, n, t) {
  switch (n) {
    case "input":
      if (oo(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = fl(r);
            if (!l) throw Error(x(90));
            ha(r), oo(r, l);
          }
        }
      }
      break;
    case "textarea":
      va(e, t);
      break;
    case "select":
      n = t.value, n != null && bn(e, !!t.multiple, n, !1);
  }
};
_a = Li;
Na = Fn;
var Id = { usingClientEntryPoint: !1, Events: [or, Qn, fl, Ca, Ea, Li] }, _t = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Od = { bundleType: _t.bundleType, version: _t.version, rendererPackageName: _t.rendererPackageName, rendererConfig: _t.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: en.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ra(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: _t.findFiberByHostInstance || Md, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber) try {
    ul = Cr.inject(Od), Be = Cr;
  } catch {
  }
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
xe.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$i(n)) throw Error(x(200));
  return jd(e, n, null, t);
};
xe.createRoot = function(e, n) {
  if (!$i(e)) throw Error(x(299));
  var t = !1, r = "", l = uc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ii(e, 1, !1, null, null, t, !1, r, l), e[Je] = n.current, Gt(e.nodeType === 8 ? e.parentNode : e), new Ui(n);
};
xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Ra(n), e = e === null ? null : e.stateNode, e;
};
xe.flushSync = function(e) {
  return Fn(e);
};
xe.hydrate = function(e, n, t) {
  if (!Sl(n)) throw Error(x(200));
  return wl(null, e, n, !0, t);
};
xe.hydrateRoot = function(e, n, t) {
  if (!$i(e)) throw Error(x(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = uc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ic(n, null, e, 1, t ?? null, l, !1, o, i), e[Je] = n.current, Gt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new xl(n);
};
xe.render = function(e, n, t) {
  if (!Sl(n)) throw Error(x(200));
  return wl(null, e, n, !1, t);
};
xe.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(x(40));
  return e._reactRootContainer ? (Fn(function() {
    wl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
xe.unstable_batchedUpdates = Li;
xe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!Sl(t)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return wl(e, n, t, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function ac() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), aa.exports = xe;
var Ud = aa.exports, Yu = Ud;
ql.createRoot = Yu.createRoot, ql.hydrateRoot = Yu.hydrateRoot;
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $d = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ad = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = (e) => {
  const n = Ad(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zl = {
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
const Bd = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
  return !1;
}, Wd = O.createContext({}), Hd = () => O.useContext(Wd), Vd = O.forwardRef(
  ({ color: e, size: n, strokeWidth: t, absoluteStrokeWidth: r, className: l = "", children: o, iconNode: i, ...u }, a) => {
    const {
      size: c = 24,
      strokeWidth: h = 2,
      absoluteStrokeWidth: p = !1,
      color: m = "currentColor",
      className: w = ""
    } = Hd() ?? {}, S = r ?? p ? Number(t ?? h) * 24 / Number(n ?? c) : t ?? h;
    return O.createElement(
      "svg",
      {
        ref: a,
        ...Zl,
        width: n ?? c ?? Zl.width,
        height: n ?? c ?? Zl.height,
        stroke: e ?? m,
        strokeWidth: S,
        className: sc("lucide", w, l),
        ...!o && !Bd(u) && { "aria-hidden": "true" },
        ...u
      },
      [
        ...i.map(([k, M]) => O.createElement(k, M)),
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
const Ie = (e, n) => {
  const t = O.forwardRef(
    ({ className: r, ...l }, o) => O.createElement(Vd, {
      ref: o,
      iconNode: n,
      className: sc(
        `lucide-${$d(Zu(e))}`,
        `lucide-${e}`,
        r
      ),
      ...l
    })
  );
  return t.displayName = Zu(e), t;
};
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], Qd = Ie("arrow-down", Kd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gd = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], Yd = Ie("arrow-up-down", Gd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = [
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
], Xd = Ie("calculator", Zd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], qd = Ie("check", Jd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ep = Ie("chevron-down", bd);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
], tp = Ie("circle-plus", np);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], lp = Ie("refresh-cw", rp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], ip = Ie("rotate-ccw-clock", op);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ap = Ie("search", up);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = [
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
], cp = Ie("sparkles", sp);
/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], dp = Ie("trash-2", fp), Xl = {
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
}, Xu = ({ options: e, value: n, onChange: t }) => {
  const [r, l] = O.useState(!1), [o, i] = O.useState(""), u = O.useRef(null);
  O.useEffect(() => {
    const p = (m) => {
      u.current && !u.current.contains(m.target) && l(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []);
  const a = e.filter((p) => {
    const m = Xl[p] || { name: p }, w = o.toLowerCase();
    return p.toLowerCase().includes(w) || m.name.toLowerCase().includes(w);
  }), c = Xl[n] || { name: n, symbol: n }, h = n === "EUR" ? "EU" : n === "BTC" ? "⚡" : n.substring(0, 2);
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: "custom-dropdown",
      ref: u,
      style: { position: "relative", width: "auto", flexShrink: 0 },
      children: [
        /* @__PURE__ */ g.jsxs(
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
              /* @__PURE__ */ g.jsx("div", { style: {
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
              }, children: h }),
              /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", flexDirection: "column", textAlign: "left", minWidth: "0" }, children: [
                /* @__PURE__ */ g.jsx("span", { style: { fontWeight: 700, fontSize: "0.9rem", color: "#fafafa", lineHeight: 1 }, children: n }),
                /* @__PURE__ */ g.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "65px", marginTop: "2px" }, children: c.name })
              ] }),
              /* @__PURE__ */ g.jsx("span", { style: { fontSize: "0.8rem", color: "#a1a1aa", fontWeight: "600", marginLeft: "2px" }, children: c.symbol }),
              /* @__PURE__ */ g.jsx(ep, { size: 14, style: { color: "#71717a", transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", marginLeft: "2px", flexShrink: 0 } })
            ]
          }
        ),
        r && /* @__PURE__ */ g.jsxs(
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
              /* @__PURE__ */ g.jsxs("div", { style: { padding: "8px", borderBottom: "1px solid #1c1c21", position: "relative" }, children: [
                /* @__PURE__ */ g.jsx(ap, { size: 14, style: { position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#71717a" } }),
                /* @__PURE__ */ g.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search currency...",
                    value: o,
                    onChange: (p) => i(p.target.value),
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
              /* @__PURE__ */ g.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: "4px 0",
                maxHeight: "260px",
                overflowY: "auto"
              }, children: a.length > 0 ? a.map((p) => {
                const m = Xl[p] || { name: p, symbol: p }, w = p === "EUR" ? "EU" : p === "BTC" ? "⚡" : p.substring(0, 2), S = p === n;
                return /* @__PURE__ */ g.jsxs(
                  "li",
                  {
                    onClick: () => {
                      t(p), l(!1), i("");
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      cursor: "pointer",
                      background: S ? "rgba(168, 85, 247, 0.15)" : "transparent",
                      borderLeft: S ? "2px solid #a855f7" : "2px solid transparent",
                      transition: "all 0.15s ease"
                    },
                    onMouseEnter: (k) => !S && (k.currentTarget.style.background = "rgba(255, 255, 255, 0.04)"),
                    onMouseLeave: (k) => !S && (k.currentTarget.style.background = "transparent"),
                    children: [
                      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
                        /* @__PURE__ */ g.jsx("div", { style: {
                          width: "22px",
                          height: "22px",
                          borderRadius: "5px",
                          background: S ? "#a855f7" : "#1c1c21",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "9px",
                          fontWeight: "800",
                          color: S ? "#ffffff" : "#9ca3af"
                        }, children: w }),
                        /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                          /* @__PURE__ */ g.jsx("span", { style: { fontWeight: 600, color: S ? "#ffffff" : "#e4e4e7", fontSize: "0.85rem" }, children: p }),
                          /* @__PURE__ */ g.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a" }, children: m.name })
                        ] })
                      ] }),
                      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                        /* @__PURE__ */ g.jsx("span", { style: { fontWeight: 500, color: "#71717a", fontSize: "0.75rem", background: "#18181b", padding: "2px 5px", borderRadius: "4px" }, children: m.symbol }),
                        S && /* @__PURE__ */ g.jsx(qd, { size: 14, color: "#a855f7" })
                      ] })
                    ]
                  },
                  p
                );
              }) : /* @__PURE__ */ g.jsx("li", { style: { padding: "16px", textAlign: "center", color: "#71717a", fontSize: "0.8rem" }, children: "No matching currency" }) })
            ]
          }
        )
      ]
    }
  );
}, Jl = "datacore_currency_history", pp = {
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
}, mp = ({ children: e }) => /* @__PURE__ */ g.jsx("div", { className: "safe-agent-layer", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: e });
function yp() {
  const [e, n] = O.useState(pp), [t, r] = O.useState("USD"), [l, o] = O.useState("EUR"), [i, u] = O.useState("100"), [a, c] = O.useState(!1), [h, p] = O.useState("+"), [m, w] = O.useState("50"), [S, k] = O.useState("EUR"), [M, f] = O.useState(null), [s, d] = O.useState(!0), [v, C] = O.useState(!1), [P, N] = O.useState([]), z = O.useRef(null);
  O.useEffect(() => {
    try {
      const y = localStorage.getItem(Jl);
      y && N(JSON.parse(y));
    } catch (y) {
      console.warn("Failed to load currency history", y);
    }
  }, []);
  const T = ((y) => {
    try {
      if (!y || !y.trim()) return 0;
      const D = y.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
      if (!D) return 0;
      const I = Function(`"use strict"; return (${D})`)();
      return typeof I == "number" && !isNaN(I) && isFinite(I) ? I : 0;
    } catch {
      return 0;
    }
  })(i), Oe = (() => {
    const y = e[t] || 1, D = e[l] || 1;
    return T / y * D;
  })().toFixed(2), yt = async () => {
    C(!0);
    try {
      const y = await fetch(`https://api.exchangerate-api.com/v4/latest/${t}`);
      if (y.ok) {
        const D = await y.json();
        n(D.rates), f(/* @__PURE__ */ new Date()), d(!0);
        const I = {
          id: Date.now().toString(),
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          from: t,
          to: l,
          expr: i,
          result: Oe
        };
        N((Ve) => {
          const ke = [I, ...Ve.slice(0, 19)];
          try {
            localStorage.setItem(Jl, JSON.stringify(ke));
          } catch {
          }
          return ke;
        });
      } else
        d(!1);
    } catch (y) {
      console.warn("Using offline cached rates:", y), d(!1);
    } finally {
      C(!1);
    }
  };
  O.useEffect(() => {
    yt();
  }, [t]);
  const kl = () => {
    r(l), o(t);
  }, ht = () => {
    r(l), u(Oe);
  }, He = (y) => {
    u(y === "AC" ? "" : y === "DEL" ? (D) => D.length > 0 ? D.slice(0, -1) : "" : y === "=" ? T.toString() : (D) => D + y);
  }, E = (y, D, I) => {
    const Ve = parseFloat(I) || 0;
    if (Ve <= 0) return;
    const ke = e[D] || 1, $n = e[t] || 1, tn = (Ve / ke * $n).toFixed(2);
    u((cc) => {
      const gt = cc.trim();
      return !gt || gt === "0" ? tn : ["+", "-", "*", "/", "×", "÷"].some((fc) => gt.endsWith(fc)) ? `${gt.slice(0, -1).trim()} ${y} ${tn}` : `${gt} ${y} ${tn}`;
    });
  }, R = Object.keys(e).sort();
  return /* @__PURE__ */ g.jsx(mp, { children: /* @__PURE__ */ g.jsx("div", { className: "currency-app", ref: z, style: { position: "relative" }, children: /* @__PURE__ */ g.jsxs("div", { className: "glass-card", children: [
    /* @__PURE__ */ g.jsxs("div", { className: "currency-header", children: [
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ g.jsx("div", { style: {
          width: "28px",
          height: "28px",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(168, 85, 247, 0.3)"
        }, children: /* @__PURE__ */ g.jsx(cp, { size: 15, color: "#ffffff" }) }),
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h1", { className: "currency-title", children: "Currency Converter" }),
          /* @__PURE__ */ g.jsx("div", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "500" }, children: "Pro Multi-Math Engine" })
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: s ? "#4ade80" : "#f59e0b", fontWeight: "600" }, children: [
        /* @__PURE__ */ g.jsx("span", { style: {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: s ? "#22c55e" : "#f59e0b",
          boxShadow: s ? "0 0 8px #22c55e" : "none"
        } }),
        /* @__PURE__ */ g.jsx("span", { children: s ? "Online" : "Offline" })
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }, children: [
        /* @__PURE__ */ g.jsx("label", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "From Expression / Formula" }),
        /* @__PURE__ */ g.jsxs(
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
              /* @__PURE__ */ g.jsx(Xd, { size: 13 }),
              a ? "Hide Keypad" : "Keypad"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "input-wrapper", style: { flexDirection: "column", gap: "8px", padding: "10px", backgroundColor: "#09090b", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", width: "100%" }, children: [
          /* @__PURE__ */ g.jsx(
            Xu,
            {
              options: R,
              value: t,
              onChange: r
            }
          ),
          /* @__PURE__ */ g.jsx(
            "input",
            {
              className: "currency-input",
              type: "text",
              value: i,
              onChange: (y) => u(y.target.value),
              placeholder: "e.g. 100 + 45.5 * 2"
            }
          )
        ] }),
        /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4px", width: "100%", borderTop: "1px solid #1c1c21", paddingTop: "6px" }, children: [
          /* @__PURE__ */ g.jsx("div", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "600" }, children: "Math Shortcuts:" }),
          /* @__PURE__ */ g.jsx("div", { style: { display: "flex", gap: "4px" }, children: [
            { label: "+", op: " + " },
            { label: "-", op: " - " },
            { label: "×", op: " * " },
            { label: "÷", op: " / " },
            { label: "(", op: "(" },
            { label: ")", op: ")" }
          ].map((y) => /* @__PURE__ */ g.jsx(
            "button",
            {
              type: "button",
              onClick: () => u((D) => D + y.op),
              style: {
                padding: "2px 8px",
                borderRadius: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e4e4e7",
                fontSize: "0.75rem",
                fontWeight: "700",
                cursor: "pointer"
              },
              children: y.label
            },
            y.label
          )) })
        ] }),
        /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#71717a", padding: "0 4px", fontFamily: "'JetBrains Mono', monospace", width: "100%", boxSizing: "border-box" }, children: [
          /* @__PURE__ */ g.jsxs("span", { children: [
            "Evaluated = ",
            /* @__PURE__ */ g.jsxs("strong", { style: { color: "#e4e4e7" }, children: [
              T.toFixed(2),
              " ",
              t
            ] })
          ] }),
          i.match(/[+\-*/×÷]/) && /* @__PURE__ */ g.jsx("span", { style: { color: "#38bdf8", fontWeight: "700" }, children: "Math Active" })
        ] })
      ] })
    ] }),
    a && /* @__PURE__ */ g.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      backgroundColor: "#121215",
      border: "1px solid #27272a",
      borderRadius: "12px",
      padding: "10px",
      margin: "4px 0"
    }, children: [
      /* @__PURE__ */ g.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }, children: [
        ["AC", "(", ")", "DEL"].map((y) => /* @__PURE__ */ g.jsx("button", { onClick: () => He(y), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: "rgba(239, 68, 68, 0.15)", color: "#f87171", fontWeight: "700", fontSize: "0.75rem", cursor: "pointer" }, children: y }, y)),
        ["7", "8", "9", "÷"].map((y) => /* @__PURE__ */ g.jsx("button", { onClick: () => He(y === "÷" ? "/" : y), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["÷"].includes(y) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["÷"].includes(y) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: y }, y)),
        ["4", "5", "6", "×"].map((y) => /* @__PURE__ */ g.jsx("button", { onClick: () => He(y === "×" ? "*" : y), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["×"].includes(y) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["×"].includes(y) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: y }, y)),
        ["1", "2", "3", "-"].map((y) => /* @__PURE__ */ g.jsx("button", { onClick: () => He(y), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: ["-"].includes(y) ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: ["-"].includes(y) ? "#38bdf8" : "#fafafa", fontWeight: "600", fontSize: "0.85rem", cursor: "pointer" }, children: y }, y)),
        ["0", ".", "=", "+"].map((y) => /* @__PURE__ */ g.jsx("button", { onClick: () => He(y), style: { padding: "8px", borderRadius: "6px", border: "none", backgroundColor: y === "=" ? "rgba(168, 85, 247, 0.3)" : y === "+" ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.04)", color: y === "=" ? "#c084fc" : y === "+" ? "#38bdf8" : "#fafafa", fontWeight: "700", fontSize: "0.85rem", cursor: "pointer" }, children: y }, y))
      ] }),
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px", paddingTop: "8px", borderTop: "1px solid #1c1c21" }, children: [
        /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }, children: [
          /* @__PURE__ */ g.jsx("span", { style: { fontSize: "0.65rem", color: "#71717a", fontWeight: "700", textTransform: "uppercase" }, children: "Foreign Currency Math Operator:" }),
          /* @__PURE__ */ g.jsx("div", { style: { display: "flex", gap: "4px" }, children: [
            { op: "+", label: "+" },
            { op: "-", label: "-" },
            { op: "*", label: "×" },
            { op: "/", label: "÷" }
          ].map((y) => /* @__PURE__ */ g.jsx(
            "button",
            {
              type: "button",
              onClick: () => p(y.op),
              style: {
                padding: "2px 10px",
                borderRadius: "4px",
                backgroundColor: h === y.op ? "#a855f7" : "rgba(255, 255, 255, 0.05)",
                color: h === y.op ? "#ffffff" : "#9ca3af",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "0.75rem",
                fontWeight: "800",
                cursor: "pointer"
              },
              children: y.label
            },
            y.op
          )) })
        ] }),
        /* @__PURE__ */ g.jsx("div", { style: { display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "2px" }, children: ["EUR", "USD", "JPY", "GBP", "CNY"].map((y) => /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            onClick: () => E(h, y, 50),
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
              h === "*" ? "×" : h === "/" ? "÷" : h,
              " 50 ",
              y
            ]
          },
          y
        )) }),
        /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#09090b", padding: "6px", borderRadius: "8px", border: "1px solid #27272a", marginTop: "4px", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ g.jsx("span", { style: { fontSize: "0.75rem", fontWeight: "800", color: "#c084fc", padding: "0 4px" }, children: h === "*" ? "×" : h === "/" ? "÷" : h }),
          /* @__PURE__ */ g.jsx(
            "input",
            {
              type: "number",
              value: m,
              onChange: (y) => w(y.target.value),
              placeholder: "Amount",
              style: { width: "60px", background: "#121215", border: "1px solid #27272a", borderRadius: "4px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" }
            }
          ),
          /* @__PURE__ */ g.jsx(
            "select",
            {
              value: S,
              onChange: (y) => k(y.target.value),
              style: { background: "#121215", border: "1px solid #27272a", borderRadius: "4px", padding: "4px 6px", color: "#fafafa", fontSize: "0.75rem", outline: "none" },
              children: R.map((y) => /* @__PURE__ */ g.jsx("option", { value: y, children: y }, y))
            }
          ),
          /* @__PURE__ */ g.jsxs(
            "button",
            {
              type: "button",
              onClick: () => E(h, S, m),
              style: { flex: 1, padding: "4px 8px", borderRadius: "4px", backgroundColor: "#a855f7", color: "#ffffff", border: "none", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", whiteSpace: "nowrap" },
              children: [
                /* @__PURE__ */ g.jsx(tp, { size: 12 }),
                " Inject into Formula"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ g.jsx(
      "div",
      {
        className: "swap-btn",
        onClick: kl,
        title: "Swap currencies",
        style: { alignSelf: "center", margin: "-2px 0" },
        children: /* @__PURE__ */ g.jsx(Yd, { size: 16 })
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ g.jsx("label", { style: { fontSize: "0.75rem", color: "#a1a1aa", fontWeight: "600" }, children: "To Converted Result" }),
      /* @__PURE__ */ g.jsxs("div", { className: "input-wrapper", style: { padding: "4px 10px", backgroundColor: "#09090b", borderRadius: "12px", border: "1px solid #27272a" }, children: [
        /* @__PURE__ */ g.jsx(
          Xu,
          {
            options: R,
            value: l,
            onChange: o
          }
        ),
        /* @__PURE__ */ g.jsx(
          "input",
          {
            className: "currency-input",
            type: "text",
            value: Oe,
            readOnly: !0,
            style: { color: "#4ade80", fontWeight: "800", fontFamily: "'JetBrains Mono', monospace" }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px", width: "100%" }, children: [
      /* @__PURE__ */ g.jsxs(
        "button",
        {
          type: "button",
          onClick: ht,
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
            /* @__PURE__ */ g.jsx(Qd, { size: 13 }),
            "Pipe Result (",
            Oe,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ g.jsxs(
        "button",
        {
          type: "button",
          className: "sync-btn",
          onClick: yt,
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
            /* @__PURE__ */ g.jsx(lp, { size: 13, className: v ? "animate-spin" : "" }),
            v ? "Syncing..." : "Sync Rates"
          ]
        }
      )
    ] }),
    M && /* @__PURE__ */ g.jsxs("div", { className: "last-updated", children: [
      "Last synced: ",
      M.toLocaleTimeString()
    ] }),
    P.length > 0 && /* @__PURE__ */ g.jsxs("div", { style: { marginTop: "12px", paddingTop: "10px", borderTop: "1px solid #27272a" }, children: [
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }, children: [
        /* @__PURE__ */ g.jsxs("span", { style: { fontSize: "0.7rem", color: "#a1a1aa", fontWeight: "700", display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ g.jsx(ip, { size: 13 }),
          "Conversion History"
        ] }),
        /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              N([]), localStorage.removeItem(Jl);
            },
            style: { backgroundColor: "transparent", border: "none", color: "#71717a", fontSize: "0.65rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "3px" },
            children: [
              /* @__PURE__ */ g.jsx(dp, { size: 11 }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px", maxHeight: "120px", overflowY: "auto" }, children: P.map((y) => /* @__PURE__ */ g.jsxs(
        "div",
        {
          onClick: () => {
            r(y.to), u(y.result);
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
            /* @__PURE__ */ g.jsxs("div", { style: { color: "#a1a1aa" }, children: [
              /* @__PURE__ */ g.jsxs("span", { style: { color: "#e4e4e7", fontWeight: "600" }, children: [
                y.expr,
                " ",
                y.from
              ] }),
              " → ",
              /* @__PURE__ */ g.jsxs("span", { style: { color: "#4ade80", fontWeight: "700" }, children: [
                y.result,
                " ",
                y.to
              ] })
            ] }),
            /* @__PURE__ */ g.jsx("span", { style: { fontSize: "0.65rem", color: "#52525b" }, children: y.time })
          ]
        },
        y.id
      )) })
    ] })
  ] }) }) });
}
function hp(e, n) {
  if (!e) return () => {
  };
  const t = ql.createRoot(e);
  return t.render(/* @__PURE__ */ g.jsx(yp, { platformAPI: n })), () => {
    try {
      t.unmount();
    } catch {
    }
  };
}
export {
  mp as SafeAgentLayer,
  yp as default,
  hp as mount_app
};
