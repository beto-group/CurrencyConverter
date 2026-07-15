(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".currency-app{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:100%;height:100%;min-height:100vh;background:#09090b;color:#fafafa;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:clamp(1rem,5vw,3rem);box-sizing:border-box;overflow:hidden}.glass-card{background:#18181b;border:1px solid #27272a;border-radius:16px;padding:clamp(1.5rem,4vw,2.5rem);width:100%;max-width:400px;box-shadow:0 20px 40px #0006;display:flex;flex-direction:column;gap:24px;position:relative}.currency-title{font-size:clamp(1.25rem,4vw,1.75rem);font-weight:600;margin:0;color:#fafafa;text-align:left;letter-spacing:-.02em}.status-badge{position:absolute;top:24px;right:24px;font-size:.65rem;text-transform:uppercase;letter-spacing:1px;font-weight:600;padding:4px 8px;border-radius:6px;background:#10b9811a;color:#10b981}.status-badge.offline{background:#f59e0b1a;color:#f59e0b}.input-group{display:flex;flex-direction:column;gap:8px}.input-group label{font-size:.75rem;color:#a1a1aa;font-weight:500}.input-wrapper{display:flex;align-items:center;background:#09090b;border:1px solid #3f3f46;border-radius:10px;transition:all .2s ease;position:relative}.input-wrapper:focus-within{border-color:#3b82f6;box-shadow:0 0 0 3px #3b82f626}.currency-input{background:transparent;color:#fafafa;border:none;padding:16px;font-size:1.25rem;font-weight:500;width:100%;outline:none;text-align:right;font-variant-numeric:tabular-nums;flex:1}.currency-input::placeholder{color:#52525b}.swap-btn{background:#27272a;border:1px solid #3f3f46;color:#a1a1aa;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;align-self:center;transition:all .2s ease;margin:-8px 0;z-index:2}.swap-btn:hover{background:#3f3f46;color:#fafafa}.sync-btn{background:#fafafa;color:#09090b;border:none;padding:14px;border-radius:10px;font-weight:600;font-size:.9rem;cursor:pointer;transition:all .2s ease;margin-top:8px}.sync-btn:hover{background:#e4e4e7}.sync-btn:active{transform:scale(.98)}.last-updated{text-align:center;font-size:.75rem;color:#71717a;margin-top:4px}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var Ku = { exports: {} }, nl = {}, Qu = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt = Symbol.for("react.element"), of = Symbol.for("react.portal"), uf = Symbol.for("react.fragment"), af = Symbol.for("react.strict_mode"), sf = Symbol.for("react.profiler"), ff = Symbol.for("react.provider"), cf = Symbol.for("react.context"), df = Symbol.for("react.forward_ref"), pf = Symbol.for("react.suspense"), mf = Symbol.for("react.memo"), yf = Symbol.for("react.lazy"), Oi = Symbol.iterator;
function hf(e) {
  return e === null || typeof e != "object" ? null : (e = Oi && e[Oi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Gu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Yu = Object.assign, Zu = {};
function ot(e, n, t) {
  this.props = e, this.context = n, this.refs = Zu, this.updater = t || Gu;
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xu() {
}
Xu.prototype = ot.prototype;
function Ao(e, n, t) {
  this.props = e, this.context = n, this.refs = Zu, this.updater = t || Gu;
}
var Bo = Ao.prototype = new Xu();
Bo.constructor = Ao;
Yu(Bo, ot.prototype);
Bo.isPureReactComponent = !0;
var ji = Array.isArray, Ju = Object.prototype.hasOwnProperty, Vo = { current: null }, qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) Ju.call(n, r) && !qu.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), f = 0; f < u; f++) a[f] = arguments[f + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Yt, type: e, key: o, ref: i, props: l, _owner: Vo.current };
}
function gf(e, n) {
  return { $$typeof: Yt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yt;
}
function vf(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Ii = /\/+/g;
function Sl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? vf("" + e.key) : n.toString(36);
}
function wr(e, n, t, r, l) {
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
        case Yt:
        case of:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Sl(i, 0) : r, ji(l) ? (t = "", e != null && (t = e.replace(Ii, "$&/") + "/"), wr(l, n, t, "", function(f) {
    return f;
  })) : l != null && (Ho(l) && (l = gf(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ii, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ji(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Sl(o, u);
    i += wr(o, n, t, a, l);
  }
  else if (a = hf(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Sl(o, u++), i += wr(o, n, t, a, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function nr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return wr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function wf(e) {
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
var ae = { current: null }, Sr = { transition: null }, Sf = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Vo };
function ea() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: nr, forEach: function(e, n, t) {
  nr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return nr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return nr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = ot;
T.Fragment = uf;
T.Profiler = sf;
T.PureComponent = Ao;
T.StrictMode = af;
T.Suspense = pf;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sf;
T.act = ea;
T.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Vo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in n) Ju.call(n, a) && !qu.hasOwnProperty(a) && (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var f = 0; f < a; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Yt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: cf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ff, _context: e }, e.Consumer = e;
};
T.createElement = bu;
T.createFactory = function(e) {
  var n = bu.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: df, render: e };
};
T.isValidElement = Ho;
T.lazy = function(e) {
  return { $$typeof: yf, _payload: { _status: -1, _result: e }, _init: wf };
};
T.memo = function(e, n) {
  return { $$typeof: mf, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function(e) {
  var n = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = n;
  }
};
T.unstable_act = ea;
T.useCallback = function(e, n) {
  return ae.current.useCallback(e, n);
};
T.useContext = function(e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function(e, n) {
  return ae.current.useEffect(e, n);
};
T.useId = function() {
  return ae.current.useId();
};
T.useImperativeHandle = function(e, n, t) {
  return ae.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function(e, n) {
  return ae.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function(e, n) {
  return ae.current.useLayoutEffect(e, n);
};
T.useMemo = function(e, n) {
  return ae.current.useMemo(e, n);
};
T.useReducer = function(e, n, t) {
  return ae.current.useReducer(e, n, t);
};
T.useRef = function(e) {
  return ae.current.useRef(e);
};
T.useState = function(e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function(e, n, t) {
  return ae.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function() {
  return ae.current.useTransition();
};
T.version = "18.3.1";
Qu.exports = T;
var re = Qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kf = re, Ef = Symbol.for("react.element"), xf = Symbol.for("react.fragment"), Cf = Object.prototype.hasOwnProperty, Nf = kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _f = { key: !0, ref: !0, __self: !0, __source: !0 };
function na(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Cf.call(n, r) && !_f.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Ef, type: e, key: o, ref: i, props: l, _owner: Nf.current };
}
nl.Fragment = xf;
nl.jsx = na;
nl.jsxs = na;
Ku.exports = nl;
var P = Ku.exports, ta = { exports: {} }, we = {}, ra = { exports: {} }, la = {};
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
  function n(_, L) {
    var D = _.length;
    _.push(L);
    e: for (; 0 < D; ) {
      var W = D - 1 >>> 1, Z = _[W];
      if (0 < l(Z, L)) _[W] = L, _[D] = Z, D = W;
      else break e;
    }
  }
  function t(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0], D = _.pop();
    if (D !== L) {
      _[0] = D;
      e: for (var W = 0, Z = _.length, bt = Z >>> 1; W < bt; ) {
        var gn = 2 * (W + 1) - 1, wl = _[gn], vn = gn + 1, er = _[vn];
        if (0 > l(wl, D)) vn < Z && 0 > l(er, wl) ? (_[W] = er, _[vn] = D, W = vn) : (_[W] = wl, _[gn] = D, W = gn);
        else if (vn < Z && 0 > l(er, D)) _[W] = er, _[vn] = D, W = vn;
        else break e;
      }
    }
    return L;
  }
  function l(_, L) {
    var D = _.sortIndex - L.sortIndex;
    return D !== 0 ? D : _.id - L.id;
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
  var a = [], f = [], m = 1, y = null, p = 3, v = !1, S = !1, E = !1, F = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var L = t(f); L !== null; ) {
      if (L.callback === null) r(f);
      else if (L.startTime <= _) r(f), L.sortIndex = L.expirationTime, n(a, L);
      else break;
      L = t(f);
    }
  }
  function h(_) {
    if (E = !1, d(_), !S) if (t(a) !== null) S = !0, gl(C);
    else {
      var L = t(f);
      L !== null && vl(h, L.startTime - _);
    }
  }
  function C(_, L) {
    S = !1, E && (E = !1, c(x), x = -1), v = !0;
    var D = p;
    try {
      for (d(L), y = t(a); y !== null && (!(y.expirationTime > L) || _ && !Pe()); ) {
        var W = y.callback;
        if (typeof W == "function") {
          y.callback = null, p = y.priorityLevel;
          var Z = W(y.expirationTime <= L);
          L = e.unstable_now(), typeof Z == "function" ? y.callback = Z : y === t(a) && r(a), d(L);
        } else r(a);
        y = t(a);
      }
      if (y !== null) var bt = !0;
      else {
        var gn = t(f);
        gn !== null && vl(h, gn.startTime - L), bt = !1;
      }
      return bt;
    } finally {
      y = null, p = D, v = !1;
    }
  }
  var w = !1, k = null, x = -1, V = 5, z = -1;
  function Pe() {
    return !(e.unstable_now() - z < V);
  }
  function at() {
    if (k !== null) {
      var _ = e.unstable_now();
      z = _;
      var L = !0;
      try {
        L = k(!0, _);
      } finally {
        L ? st() : (w = !1, k = null);
      }
    } else w = !1;
  }
  var st;
  if (typeof s == "function") st = function() {
    s(at);
  };
  else if (typeof MessageChannel < "u") {
    var Fi = new MessageChannel(), lf = Fi.port2;
    Fi.port1.onmessage = at, st = function() {
      lf.postMessage(null);
    };
  } else st = function() {
    F(at, 0);
  };
  function gl(_) {
    k = _, w || (w = !0, st());
  }
  function vl(_, L) {
    x = F(function() {
      _(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    S || v || (S = !0, gl(C));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(a);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = p;
    }
    var D = p;
    p = L;
    try {
      return _();
    } finally {
      p = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, L) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var D = p;
    p = _;
    try {
      return L();
    } finally {
      p = D;
    }
  }, e.unstable_scheduleCallback = function(_, L, D) {
    var W = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? W + D : W) : D = W, _) {
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
    return Z = D + Z, _ = { id: m++, callback: L, priorityLevel: _, startTime: D, expirationTime: Z, sortIndex: -1 }, D > W ? (_.sortIndex = D, n(f, _), t(a) === null && _ === t(f) && (E ? (c(x), x = -1) : E = !0, vl(h, D - W))) : (_.sortIndex = Z, n(a, _), S || v || (S = !0, gl(C))), _;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(_) {
    var L = p;
    return function() {
      var D = p;
      p = L;
      try {
        return _.apply(this, arguments);
      } finally {
        p = D;
      }
    };
  };
})(la);
ra.exports = la;
var Pf = ra.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lf = re, ve = Pf;
function g(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var oa = /* @__PURE__ */ new Set(), zt = {};
function zn(e, n) {
  qn(e, n), qn(e + "Capture", n);
}
function qn(e, n) {
  for (zt[e] = n, e = 0; e < n.length; e++) oa.add(n[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, Df = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ui = {}, $i = {};
function Tf(e) {
  return Gl.call($i, e) ? !0 : Gl.call(Ui, e) ? !1 : Df.test(e) ? $i[e] = !0 : (Ui[e] = !0, !1);
}
function zf(e, n, t, r) {
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
function Rf(e, n, t, r) {
  if (n === null || typeof n > "u" || zf(e, n, t, r)) return !0;
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
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wo = /[\-:]([a-z])/g;
function Ko(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Wo,
    Ko
  );
  ee[n] = new se(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Wo, Ko);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Wo, Ko);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qo(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Rf(n, t, l, r) && (t = null), r || l === null ? Tf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ze = Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tr = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), On = Symbol.for("react.fragment"), Go = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), ia = Symbol.for("react.provider"), ua = Symbol.for("react.context"), Yo = Symbol.for("react.forward_ref"), Zl = Symbol.for("react.suspense"), Xl = Symbol.for("react.suspense_list"), Zo = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), aa = Symbol.for("react.offscreen"), Ai = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object" ? null : (e = Ai && e[Ai] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, kl;
function vt(e) {
  if (kl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    kl = n && n[1] || "";
  }
  return `
` + kl + e;
}
var El = !1;
function xl(e, n) {
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
  return (e = e ? e.displayName || e.name : "") ? vt(e) : "";
}
function Mf(e) {
  switch (e.tag) {
    case 5:
      return vt(e.type);
    case 16:
      return vt("Lazy");
    case 13:
      return vt("Suspense");
    case 19:
      return vt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = xl(e.type, !1), e;
    case 11:
      return e = xl(e.type.render, !1), e;
    case 1:
      return e = xl(e.type, !0), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case Fn:
      return "Portal";
    case Yl:
      return "Profiler";
    case Go:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ua:
      return (e.displayName || "Context") + ".Consumer";
    case ia:
      return (e._context.displayName || "Context") + ".Provider";
    case Yo:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Zo:
      return n = e.displayName || null, n !== null ? n : Jl(e.type) || "Memo";
    case Je:
      n = e._payload, e = e._init;
      try {
        return Jl(e(n));
      } catch {
      }
  }
  return null;
}
function Ff(e) {
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
      return Jl(n);
    case 8:
      return n === Go ? "StrictMode" : "Mode";
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
function dn(e) {
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
function sa(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Of(e) {
  var n = sa(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function rr(e) {
  e._valueTracker || (e._valueTracker = Of(e));
}
function fa(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = sa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function zr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, n) {
  var t = n.checked;
  return B({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Bi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = dn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function ca(e, n) {
  n = n.checked, n != null && Qo(e, "checked", n, !1);
}
function bl(e, n) {
  ca(e, n);
  var t = dn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? eo(e, n.type, t) : n.hasOwnProperty("defaultValue") && eo(e, n.type, dn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Vi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function eo(e, n, t) {
  (n !== "number" || zr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var wt = Array.isArray;
function Qn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function no(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return B({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hi(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(g(92));
      if (wt(t)) {
        if (1 < t.length) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: dn(t) };
}
function da(e, n) {
  var t = dn(n.value), r = dn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Wi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function pa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function to(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? pa(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var lr, ma = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (lr = lr || document.createElement("div"), lr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = lr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Rt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Et = {
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
}, jf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function(e) {
  jf.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Et[n] = Et[e];
  });
});
function ya(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Et.hasOwnProperty(e) && Et[e] ? ("" + n).trim() : n + "px";
}
function ha(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = ya(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var If = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ro(e, n) {
  if (n) {
    if (If[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(g(62));
  }
}
function lo(e, n) {
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
var oo = null;
function Xo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var io = null, Gn = null, Yn = null;
function Ki(e) {
  if (e = Jt(e)) {
    if (typeof io != "function") throw Error(g(280));
    var n = e.stateNode;
    n && (n = il(n), io(e.stateNode, e.type, n));
  }
}
function ga(e) {
  Gn ? Yn ? Yn.push(e) : Yn = [e] : Gn = e;
}
function va() {
  if (Gn) {
    var e = Gn, n = Yn;
    if (Yn = Gn = null, Ki(e), n) for (e = 0; e < n.length; e++) Ki(n[e]);
  }
}
function wa(e, n) {
  return e(n);
}
function Sa() {
}
var Cl = !1;
function ka(e, n, t) {
  if (Cl) return e(n, t);
  Cl = !0;
  try {
    return wa(e, n, t);
  } finally {
    Cl = !1, (Gn !== null || Yn !== null) && (Sa(), va());
  }
}
function Mt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = il(t);
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
var uo = !1;
if (Ke) try {
  var ct = {};
  Object.defineProperty(ct, "passive", { get: function() {
    uo = !0;
  } }), window.addEventListener("test", ct, ct), window.removeEventListener("test", ct, ct);
} catch {
  uo = !1;
}
function Uf(e, n, t, r, l, o, i, u, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, f);
  } catch (m) {
    this.onError(m);
  }
}
var xt = !1, Rr = null, Mr = !1, ao = null, $f = { onError: function(e) {
  xt = !0, Rr = e;
} };
function Af(e, n, t, r, l, o, i, u, a) {
  xt = !1, Rr = null, Uf.apply($f, arguments);
}
function Bf(e, n, t, r, l, o, i, u, a) {
  if (Af.apply(this, arguments), xt) {
    if (xt) {
      var f = Rr;
      xt = !1, Rr = null;
    } else throw Error(g(198));
    Mr || (Mr = !0, ao = f);
  }
}
function Rn(e) {
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
function Ea(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Qi(e) {
  if (Rn(e) !== e) throw Error(g(188));
}
function Vf(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Rn(e), n === null) throw Error(g(188));
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
        if (o === t) return Qi(l), e;
        if (o === r) return Qi(l), n;
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
function xa(e) {
  return e = Vf(e), e !== null ? Ca(e) : null;
}
function Ca(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Ca(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Na = ve.unstable_scheduleCallback, Gi = ve.unstable_cancelCallback, Hf = ve.unstable_shouldYield, Wf = ve.unstable_requestPaint, K = ve.unstable_now, Kf = ve.unstable_getCurrentPriorityLevel, Jo = ve.unstable_ImmediatePriority, _a = ve.unstable_UserBlockingPriority, Fr = ve.unstable_NormalPriority, Qf = ve.unstable_LowPriority, Pa = ve.unstable_IdlePriority, tl = null, Ue = null;
function Gf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function") try {
    Ue.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Re = Math.clz32 ? Math.clz32 : Xf, Yf = Math.log, Zf = Math.LN2;
function Xf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Yf(e) / Zf | 0) | 0;
}
var or = 64, ir = 4194304;
function St(e) {
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
function Or(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = St(u) : (o &= i, o !== 0 && (r = St(o)));
  } else i = t & ~l, i !== 0 ? r = St(i) : o !== 0 && (r = St(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Re(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Jf(e, n) {
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
function qf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Re(o), u = 1 << i, a = l[i];
    a === -1 ? (!(u & t) || u & r) && (l[i] = Jf(u, n)) : a <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function so(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function La() {
  var e = or;
  return or <<= 1, !(or & 4194240) && (or = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Re(n), e[n] = t;
}
function bf(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function qo(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var M = 0;
function Da(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ta, bo, za, Ra, Ma, fo = !1, ur = [], rn = null, ln = null, on = null, Ft = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), be = [], ec = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Yi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Ft.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ot.delete(n.pointerId);
  }
}
function dt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = Jt(n), n !== null && bo(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function nc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return rn = dt(rn, e, n, t, r, l), !0;
    case "dragenter":
      return ln = dt(ln, e, n, t, r, l), !0;
    case "mouseover":
      return on = dt(on, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Ft.set(o, dt(Ft.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Ot.set(o, dt(Ot.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Fa(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = Rn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Ea(t), n !== null) {
          e.blockedOn = n, Ma(e.priority, function() {
            za(t);
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
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = co(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      oo = r, t.target.dispatchEvent(r), oo = null;
    } else return n = Jt(t), n !== null && bo(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function Zi(e, n, t) {
  kr(e) && t.delete(n);
}
function tc() {
  fo = !1, rn !== null && kr(rn) && (rn = null), ln !== null && kr(ln) && (ln = null), on !== null && kr(on) && (on = null), Ft.forEach(Zi), Ot.forEach(Zi);
}
function pt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, fo || (fo = !0, ve.unstable_scheduleCallback(ve.unstable_NormalPriority, tc)));
}
function jt(e) {
  function n(l) {
    return pt(l, e);
  }
  if (0 < ur.length) {
    pt(ur[0], e);
    for (var t = 1; t < ur.length; t++) {
      var r = ur[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rn !== null && pt(rn, e), ln !== null && pt(ln, e), on !== null && pt(on, e), Ft.forEach(n), Ot.forEach(n), t = 0; t < be.length; t++) r = be[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && (t = be[0], t.blockedOn === null); ) Fa(t), t.blockedOn === null && be.shift();
}
var Zn = Ze.ReactCurrentBatchConfig, jr = !0;
function rc(e, n, t, r) {
  var l = M, o = Zn.transition;
  Zn.transition = null;
  try {
    M = 1, ei(e, n, t, r);
  } finally {
    M = l, Zn.transition = o;
  }
}
function lc(e, n, t, r) {
  var l = M, o = Zn.transition;
  Zn.transition = null;
  try {
    M = 4, ei(e, n, t, r);
  } finally {
    M = l, Zn.transition = o;
  }
}
function ei(e, n, t, r) {
  if (jr) {
    var l = co(e, n, t, r);
    if (l === null) Ol(e, n, r, Ir, t), Yi(e, r);
    else if (nc(l, e, n, t, r)) r.stopPropagation();
    else if (Yi(e, r), n & 4 && -1 < ec.indexOf(e)) {
      for (; l !== null; ) {
        var o = Jt(l);
        if (o !== null && Ta(o), o = co(e, n, t, r), o === null && Ol(e, n, r, Ir, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ol(e, n, r, null, t);
  }
}
var Ir = null;
function co(e, n, t, r) {
  if (Ir = null, e = Xo(r), e = kn(e), e !== null) if (n = Rn(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Ea(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Ir = e, null;
}
function Oa(e) {
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
      switch (Kf()) {
        case Jo:
          return 1;
        case _a:
          return 4;
        case Fr:
        case Qf:
          return 16;
        case Pa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null, ni = null, Er = null;
function ja() {
  if (Er) return Er;
  var e, n = ni, t = n.length, r, l = "value" in nn ? nn.value : nn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Er = l.slice(e, 1 < r ? 1 - r : void 0);
}
function xr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ar() {
  return !0;
}
function Xi() {
  return !1;
}
function Se(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : Xi, this.isPropagationStopped = Xi, this;
  }
  return B(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = ar);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = ar);
  }, persist: function() {
  }, isPersistent: ar }), n;
}
var it = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ti = Se(it), Xt = B({}, it, { view: 0, detail: 0 }), oc = Se(Xt), _l, Pl, mt, rl = B({}, Xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ri, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mt && (mt && e.type === "mousemove" ? (_l = e.screenX - mt.screenX, Pl = e.screenY - mt.screenY) : Pl = _l = 0, mt = e), _l);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Pl;
} }), Ji = Se(rl), ic = B({}, rl, { dataTransfer: 0 }), uc = Se(ic), ac = B({}, Xt, { relatedTarget: 0 }), Ll = Se(ac), sc = B({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fc = Se(sc), cc = B({}, it, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), dc = Se(cc), pc = B({}, it, { data: 0 }), qi = Se(pc), mc = {
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
}, yc = {
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
}, hc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gc(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = hc[e]) ? !!n[e] : !1;
}
function ri() {
  return gc;
}
var vc = B({}, Xt, { key: function(e) {
  if (e.key) {
    var n = mc[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yc[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ri, charCode: function(e) {
  return e.type === "keypress" ? xr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), wc = Se(vc), Sc = B({}, rl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bi = Se(Sc), kc = B({}, Xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ri }), Ec = Se(kc), xc = B({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = Se(xc), Nc = B({}, rl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _c = Se(Nc), Pc = [9, 13, 27, 32], li = Ke && "CompositionEvent" in window, Ct = null;
Ke && "documentMode" in document && (Ct = document.documentMode);
var Lc = Ke && "TextEvent" in window && !Ct, Ia = Ke && (!li || Ct && 8 < Ct && 11 >= Ct), eu = " ", nu = !1;
function Ua(e, n) {
  switch (e) {
    case "keyup":
      return Pc.indexOf(n.keyCode) !== -1;
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
function $a(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function Dc(e, n) {
  switch (e) {
    case "compositionend":
      return $a(n);
    case "keypress":
      return n.which !== 32 ? null : (nu = !0, eu);
    case "textInput":
      return e = n.data, e === eu && nu ? null : e;
    default:
      return null;
  }
}
function Tc(e, n) {
  if (jn) return e === "compositionend" || !li && Ua(e, n) ? (e = ja(), Er = ni = nn = null, jn = !1, e) : null;
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
      return Ia && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var zc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function tu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!zc[e.type] : n === "textarea";
}
function Aa(e, n, t, r) {
  ga(r), n = Ur(n, "onChange"), 0 < n.length && (t = new ti("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Nt = null, It = null;
function Rc(e) {
  Ja(e, 0);
}
function ll(e) {
  var n = $n(e);
  if (fa(n)) return e;
}
function Mc(e, n) {
  if (e === "change") return n;
}
var Ba = !1;
if (Ke) {
  var Dl;
  if (Ke) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var ru = document.createElement("div");
      ru.setAttribute("oninput", "return;"), Tl = typeof ru.oninput == "function";
    }
    Dl = Tl;
  } else Dl = !1;
  Ba = Dl && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  Nt && (Nt.detachEvent("onpropertychange", Va), It = Nt = null);
}
function Va(e) {
  if (e.propertyName === "value" && ll(It)) {
    var n = [];
    Aa(n, It, e, Xo(e)), ka(Rc, n);
  }
}
function Fc(e, n, t) {
  e === "focusin" ? (lu(), Nt = n, It = t, Nt.attachEvent("onpropertychange", Va)) : e === "focusout" && lu();
}
function Oc(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ll(It);
}
function jc(e, n) {
  if (e === "click") return ll(n);
}
function Ic(e, n) {
  if (e === "input" || e === "change") return ll(n);
}
function Uc(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Fe = typeof Object.is == "function" ? Object.is : Uc;
function Ut(e, n) {
  if (Fe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !Fe(e[l], n[l])) return !1;
  }
  return !0;
}
function ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iu(e, n) {
  var t = ou(e);
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
    t = ou(t);
  }
}
function Ha(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ha(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Wa() {
  for (var e = window, n = zr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = zr(e.document);
  }
  return n;
}
function oi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function $c(e) {
  var n = Wa(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Ha(t.ownerDocument.documentElement, t)) {
    if (r !== null && oi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = iu(t, o);
        var i = iu(
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
var Ac = Ke && "documentMode" in document && 11 >= document.documentMode, In = null, po = null, _t = null, mo = !1;
function uu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  mo || In == null || In !== zr(r) || (r = In, "selectionStart" in r && oi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _t && Ut(_t, r) || (_t = r, r = Ur(po, "onSelect"), 0 < r.length && (n = new ti("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = In)));
}
function sr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Un = { animationend: sr("Animation", "AnimationEnd"), animationiteration: sr("Animation", "AnimationIteration"), animationstart: sr("Animation", "AnimationStart"), transitionend: sr("Transition", "TransitionEnd") }, zl = {}, Ka = {};
Ke && (Ka = document.createElement("div").style, "AnimationEvent" in window || (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation), "TransitionEvent" in window || delete Un.transitionend.transition);
function ol(e) {
  if (zl[e]) return zl[e];
  if (!Un[e]) return e;
  var n = Un[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ka) return zl[e] = n[t];
  return e;
}
var Qa = ol("animationend"), Ga = ol("animationiteration"), Ya = ol("animationstart"), Za = ol("transitionend"), Xa = /* @__PURE__ */ new Map(), au = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mn(e, n) {
  Xa.set(e, n), zn(n, [e]);
}
for (var Rl = 0; Rl < au.length; Rl++) {
  var Ml = au[Rl], Bc = Ml.toLowerCase(), Vc = Ml[0].toUpperCase() + Ml.slice(1);
  mn(Bc, "on" + Vc);
}
mn(Qa, "onAnimationEnd");
mn(Ga, "onAnimationIteration");
mn(Ya, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Za, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hc = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));
function su(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, Bf(r, n, void 0, e), e.currentTarget = null;
}
function Ja(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], a = u.instance, f = u.currentTarget;
        if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
        su(l, u, f), o = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], a = u.instance, f = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
        su(l, u, f), o = a;
      }
    }
  }
  if (Mr) throw e = ao, Mr = !1, ao = null, e;
}
function j(e, n) {
  var t = n[wo];
  t === void 0 && (t = n[wo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (qa(n, e, 2, !1), t.add(r));
}
function Fl(e, n, t) {
  var r = 0;
  n && (r |= 4), qa(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function $t(e) {
  if (!e[fr]) {
    e[fr] = !0, oa.forEach(function(t) {
      t !== "selectionchange" && (Hc.has(t) || Fl(t, !1, e), Fl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || (n[fr] = !0, Fl("selectionchange", !1, n));
  }
}
function qa(e, n, t, r) {
  switch (Oa(n)) {
    case 1:
      var l = rc;
      break;
    case 4:
      l = lc;
      break;
    default:
      l = ei;
  }
  t = l.bind(null, n, t, e), l = void 0, !uo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
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
        if (i = kn(u), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  ka(function() {
    var f = o, m = Xo(t), y = [];
    e: {
      var p = Xa.get(e);
      if (p !== void 0) {
        var v = ti, S = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0) break e;
          case "keydown":
          case "keyup":
            v = wc;
            break;
          case "focusin":
            S = "focus", v = Ll;
            break;
          case "focusout":
            S = "blur", v = Ll;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ll;
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
            v = Ji;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = uc;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ec;
            break;
          case Qa:
          case Ga:
          case Ya:
            v = fc;
            break;
          case Za:
            v = Cc;
            break;
          case "scroll":
            v = oc;
            break;
          case "wheel":
            v = _c;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = dc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = bi;
        }
        var E = (n & 4) !== 0, F = !E && e === "scroll", c = E ? p !== null ? p + "Capture" : null : p;
        E = [];
        for (var s = f, d; s !== null; ) {
          d = s;
          var h = d.stateNode;
          if (d.tag === 5 && h !== null && (d = h, c !== null && (h = Mt(s, c), h != null && E.push(At(s, h, d)))), F) break;
          s = s.return;
        }
        0 < E.length && (p = new v(p, S, null, t, m), y.push({ event: p, listeners: E }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && t !== oo && (S = t.relatedTarget || t.fromElement) && (kn(S) || S[Qe])) break e;
        if ((v || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (S = t.relatedTarget || t.toElement, v = f, S = S ? kn(S) : null, S !== null && (F = Rn(S), S !== F || S.tag !== 5 && S.tag !== 6) && (S = null)) : (v = null, S = f), v !== S)) {
          if (E = Ji, h = "onMouseLeave", c = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (E = bi, h = "onPointerLeave", c = "onPointerEnter", s = "pointer"), F = v == null ? p : $n(v), d = S == null ? p : $n(S), p = new E(h, s + "leave", v, t, m), p.target = F, p.relatedTarget = d, h = null, kn(m) === f && (E = new E(c, s + "enter", S, t, m), E.target = d, E.relatedTarget = F, h = E), F = h, v && S) n: {
            for (E = v, c = S, s = 0, d = E; d; d = Mn(d)) s++;
            for (d = 0, h = c; h; h = Mn(h)) d++;
            for (; 0 < s - d; ) E = Mn(E), s--;
            for (; 0 < d - s; ) c = Mn(c), d--;
            for (; s--; ) {
              if (E === c || c !== null && E === c.alternate) break n;
              E = Mn(E), c = Mn(c);
            }
            E = null;
          }
          else E = null;
          v !== null && fu(y, p, v, E, !1), S !== null && F !== null && fu(y, F, S, E, !0);
        }
      }
      e: {
        if (p = f ? $n(f) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file") var C = Mc;
        else if (tu(p)) if (Ba) C = Ic;
        else {
          C = Oc;
          var w = Fc;
        }
        else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = jc);
        if (C && (C = C(e, f))) {
          Aa(y, C, t, m);
          break e;
        }
        w && w(e, p, f), e === "focusout" && (w = p._wrapperState) && w.controlled && p.type === "number" && eo(p, "number", p.value);
      }
      switch (w = f ? $n(f) : window, e) {
        case "focusin":
          (tu(w) || w.contentEditable === "true") && (In = w, po = f, _t = null);
          break;
        case "focusout":
          _t = po = In = null;
          break;
        case "mousedown":
          mo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mo = !1, uu(y, t, m);
          break;
        case "selectionchange":
          if (Ac) break;
        case "keydown":
        case "keyup":
          uu(y, t, m);
      }
      var k;
      if (li) e: {
        switch (e) {
          case "compositionstart":
            var x = "onCompositionStart";
            break e;
          case "compositionend":
            x = "onCompositionEnd";
            break e;
          case "compositionupdate":
            x = "onCompositionUpdate";
            break e;
        }
        x = void 0;
      }
      else jn ? Ua(e, t) && (x = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (x = "onCompositionStart");
      x && (Ia && t.locale !== "ko" && (jn || x !== "onCompositionStart" ? x === "onCompositionEnd" && jn && (k = ja()) : (nn = m, ni = "value" in nn ? nn.value : nn.textContent, jn = !0)), w = Ur(f, x), 0 < w.length && (x = new qi(x, e, null, t, m), y.push({ event: x, listeners: w }), k ? x.data = k : (k = $a(t), k !== null && (x.data = k)))), (k = Lc ? Dc(e, t) : Tc(e, t)) && (f = Ur(f, "onBeforeInput"), 0 < f.length && (m = new qi("onBeforeInput", "beforeinput", null, t, m), y.push({ event: m, listeners: f }), m.data = k));
    }
    Ja(y, n);
  });
}
function At(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Mt(e, t), o != null && r.unshift(At(e, o, l)), o = Mt(e, n), o != null && r.push(At(e, o, l))), e = e.return;
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, a = u.alternate, f = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (a = Mt(t, o), a != null && i.unshift(At(t, a, u))) : l || (a = Mt(t, o), a != null && i.push(At(t, a, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Wc = /\r\n?/g, Kc = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Wc, `
`).replace(Kc, "");
}
function cr(e, n, t) {
  if (n = cu(n), cu(e) !== n && t) throw Error(g(425));
}
function $r() {
}
var yo = null, ho = null;
function go(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var vo = typeof setTimeout == "function" ? setTimeout : void 0, Qc = typeof clearTimeout == "function" ? clearTimeout : void 0, du = typeof Promise == "function" ? Promise : void 0, Gc = typeof queueMicrotask == "function" ? queueMicrotask : typeof du < "u" ? function(e) {
  return du.resolve(null).then(e).catch(Yc);
} : vo;
function Yc(e) {
  setTimeout(function() {
    throw e;
  });
}
function jl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), jt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  jt(n);
}
function un(e) {
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
function pu(e) {
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
var ut = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + ut, Bt = "__reactProps$" + ut, Qe = "__reactContainer$" + ut, wo = "__reactEvents$" + ut, Zc = "__reactListeners$" + ut, Xc = "__reactHandles$" + ut;
function kn(e) {
  var n = e[Ie];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Qe] || t[Ie]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = pu(e); e !== null; ) {
        if (t = e[Ie]) return t;
        e = pu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function Jt(e) {
  return e = e[Ie] || e[Qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function il(e) {
  return e[Bt] || null;
}
var So = [], An = -1;
function yn(e) {
  return { current: e };
}
function I(e) {
  0 > An || (e.current = So[An], So[An] = null, An--);
}
function O(e, n) {
  An++, So[An] = e.current, e.current = n;
}
var pn = {}, oe = yn(pn), de = yn(!1), _n = pn;
function bn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Ar() {
  I(de), I(oe);
}
function mu(e, n, t) {
  if (oe.current !== pn) throw Error(g(168));
  O(oe, n), O(de, t);
}
function ba(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(g(108, Ff(e) || "Unknown", l));
  return B({}, t, r);
}
function Br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, _n = oe.current, O(oe, e), O(de, de.current), !0;
}
function yu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t ? (e = ba(e, n, _n), r.__reactInternalMemoizedMergedChildContext = e, I(de), I(oe), O(oe, e)) : I(de), O(de, t);
}
var Be = null, ul = !1, Il = !1;
function es(e) {
  Be === null ? Be = [e] : Be.push(e);
}
function Jc(e) {
  ul = !0, es(e);
}
function hn() {
  if (!Il && Be !== null) {
    Il = !0;
    var e = 0, n = M;
    try {
      var t = Be;
      for (M = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Be = null, ul = !1;
    } catch (l) {
      throw Be !== null && (Be = Be.slice(e + 1)), Na(Jo, hn), l;
    } finally {
      M = n, Il = !1;
    }
  }
  return null;
}
var Bn = [], Vn = 0, Vr = null, Hr = 0, ke = [], Ee = 0, Pn = null, Ve = 1, He = "";
function wn(e, n) {
  Bn[Vn++] = Hr, Bn[Vn++] = Vr, Vr = e, Hr = n;
}
function ns(e, n, t) {
  ke[Ee++] = Ve, ke[Ee++] = He, ke[Ee++] = Pn, Pn = e;
  var r = Ve;
  e = He;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Re(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Re(n) + l | t << l | r, He = o + e;
  } else Ve = 1 << o | t << l | r, He = e;
}
function ii(e) {
  e.return !== null && (wn(e, 1), ns(e, 1, 0));
}
function ui(e) {
  for (; e === Vr; ) Vr = Bn[--Vn], Bn[Vn] = null, Hr = Bn[--Vn], Bn[Vn] = null;
  for (; e === Pn; ) Pn = ke[--Ee], ke[Ee] = null, He = ke[--Ee], ke[Ee] = null, Ve = ke[--Ee], ke[Ee] = null;
}
var ge = null, he = null, U = !1, ze = null;
function ts(e, n) {
  var t = xe(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function hu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ge = e, he = un(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ge = e, he = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Pn !== null ? { id: Ve, overflow: He } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = xe(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ge = e, he = null, !0) : !1;
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
  if (U) {
    var n = he;
    if (n) {
      var t = n;
      if (!hu(e, n)) {
        if (ko(e)) throw Error(g(418));
        n = un(t.nextSibling);
        var r = ge;
        n && hu(e, n) ? ts(r, t) : (e.flags = e.flags & -4097 | 2, U = !1, ge = e);
      }
    } else {
      if (ko(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, U = !1, ge = e;
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ge = e;
}
function dr(e) {
  if (e !== ge) return !1;
  if (!U) return gu(e), U = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !go(e.type, e.memoizedProps)), n && (n = he)) {
    if (ko(e)) throw rs(), Error(g(418));
    for (; n; ) ts(e, n), n = un(n.nextSibling);
  }
  if (gu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = un(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ge ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function rs() {
  for (var e = he; e; ) e = un(e.nextSibling);
}
function et() {
  he = ge = null, U = !1;
}
function ai(e) {
  ze === null ? ze = [e] : ze.push(e);
}
var qc = Ze.ReactCurrentBatchConfig;
function yt(e, n, t) {
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
function pr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function vu(e) {
  var n = e._init;
  return n(e._payload);
}
function ls(e) {
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
    return c = cn(c, s), c.index = 0, c.sibling = null, c;
  }
  function o(c, s, d) {
    return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < s ? (c.flags |= 2, s) : d) : (c.flags |= 2, s)) : (c.flags |= 1048576, s);
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, s, d, h) {
    return s === null || s.tag !== 6 ? (s = Wl(d, c.mode, h), s.return = c, s) : (s = l(s, d), s.return = c, s);
  }
  function a(c, s, d, h) {
    var C = d.type;
    return C === On ? m(c, s, d.props.children, h, d.key) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Je && vu(C) === s.type) ? (h = l(s, d.props), h.ref = yt(c, s, d), h.return = c, h) : (h = Tr(d.type, d.key, d.props, null, c.mode, h), h.ref = yt(c, s, d), h.return = c, h);
  }
  function f(c, s, d, h) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Kl(d, c.mode, h), s.return = c, s) : (s = l(s, d.children || []), s.return = c, s);
  }
  function m(c, s, d, h, C) {
    return s === null || s.tag !== 7 ? (s = Nn(d, c.mode, h, C), s.return = c, s) : (s = l(s, d), s.return = c, s);
  }
  function y(c, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = Wl("" + s, c.mode, d), s.return = c, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case tr:
          return d = Tr(s.type, s.key, s.props, null, c.mode, d), d.ref = yt(c, null, s), d.return = c, d;
        case Fn:
          return s = Kl(s, c.mode, d), s.return = c, s;
        case Je:
          var h = s._init;
          return y(c, h(s._payload), d);
      }
      if (wt(s) || ft(s)) return s = Nn(s, c.mode, d, null), s.return = c, s;
      pr(c, s);
    }
    return null;
  }
  function p(c, s, d, h) {
    var C = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return C !== null ? null : u(c, s, "" + d, h);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case tr:
          return d.key === C ? a(c, s, d, h) : null;
        case Fn:
          return d.key === C ? f(c, s, d, h) : null;
        case Je:
          return C = d._init, p(
            c,
            s,
            C(d._payload),
            h
          );
      }
      if (wt(d) || ft(d)) return C !== null ? null : m(c, s, d, h, null);
      pr(c, d);
    }
    return null;
  }
  function v(c, s, d, h, C) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return c = c.get(d) || null, u(s, c, "" + h, C);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case tr:
          return c = c.get(h.key === null ? d : h.key) || null, a(s, c, h, C);
        case Fn:
          return c = c.get(h.key === null ? d : h.key) || null, f(s, c, h, C);
        case Je:
          var w = h._init;
          return v(c, s, d, w(h._payload), C);
      }
      if (wt(h) || ft(h)) return c = c.get(d) || null, m(s, c, h, C, null);
      pr(s, h);
    }
    return null;
  }
  function S(c, s, d, h) {
    for (var C = null, w = null, k = s, x = s = 0, V = null; k !== null && x < d.length; x++) {
      k.index > x ? (V = k, k = null) : V = k.sibling;
      var z = p(c, k, d[x], h);
      if (z === null) {
        k === null && (k = V);
        break;
      }
      e && k && z.alternate === null && n(c, k), s = o(z, s, x), w === null ? C = z : w.sibling = z, w = z, k = V;
    }
    if (x === d.length) return t(c, k), U && wn(c, x), C;
    if (k === null) {
      for (; x < d.length; x++) k = y(c, d[x], h), k !== null && (s = o(k, s, x), w === null ? C = k : w.sibling = k, w = k);
      return U && wn(c, x), C;
    }
    for (k = r(c, k); x < d.length; x++) V = v(k, c, x, d[x], h), V !== null && (e && V.alternate !== null && k.delete(V.key === null ? x : V.key), s = o(V, s, x), w === null ? C = V : w.sibling = V, w = V);
    return e && k.forEach(function(Pe) {
      return n(c, Pe);
    }), U && wn(c, x), C;
  }
  function E(c, s, d, h) {
    var C = ft(d);
    if (typeof C != "function") throw Error(g(150));
    if (d = C.call(d), d == null) throw Error(g(151));
    for (var w = C = null, k = s, x = s = 0, V = null, z = d.next(); k !== null && !z.done; x++, z = d.next()) {
      k.index > x ? (V = k, k = null) : V = k.sibling;
      var Pe = p(c, k, z.value, h);
      if (Pe === null) {
        k === null && (k = V);
        break;
      }
      e && k && Pe.alternate === null && n(c, k), s = o(Pe, s, x), w === null ? C = Pe : w.sibling = Pe, w = Pe, k = V;
    }
    if (z.done) return t(
      c,
      k
    ), U && wn(c, x), C;
    if (k === null) {
      for (; !z.done; x++, z = d.next()) z = y(c, z.value, h), z !== null && (s = o(z, s, x), w === null ? C = z : w.sibling = z, w = z);
      return U && wn(c, x), C;
    }
    for (k = r(c, k); !z.done; x++, z = d.next()) z = v(k, c, x, z.value, h), z !== null && (e && z.alternate !== null && k.delete(z.key === null ? x : z.key), s = o(z, s, x), w === null ? C = z : w.sibling = z, w = z);
    return e && k.forEach(function(at) {
      return n(c, at);
    }), U && wn(c, x), C;
  }
  function F(c, s, d, h) {
    if (typeof d == "object" && d !== null && d.type === On && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case tr:
          e: {
            for (var C = d.key, w = s; w !== null; ) {
              if (w.key === C) {
                if (C = d.type, C === On) {
                  if (w.tag === 7) {
                    t(c, w.sibling), s = l(w, d.props.children), s.return = c, c = s;
                    break e;
                  }
                } else if (w.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Je && vu(C) === w.type) {
                  t(c, w.sibling), s = l(w, d.props), s.ref = yt(c, w, d), s.return = c, c = s;
                  break e;
                }
                t(c, w);
                break;
              } else n(c, w);
              w = w.sibling;
            }
            d.type === On ? (s = Nn(d.props.children, c.mode, h, d.key), s.return = c, c = s) : (h = Tr(d.type, d.key, d.props, null, c.mode, h), h.ref = yt(c, s, d), h.return = c, c = h);
          }
          return i(c);
        case Fn:
          e: {
            for (w = d.key; s !== null; ) {
              if (s.key === w) if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                t(c, s.sibling), s = l(s, d.children || []), s.return = c, c = s;
                break e;
              } else {
                t(c, s);
                break;
              }
              else n(c, s);
              s = s.sibling;
            }
            s = Kl(d, c.mode, h), s.return = c, c = s;
          }
          return i(c);
        case Je:
          return w = d._init, F(c, s, w(d._payload), h);
      }
      if (wt(d)) return S(c, s, d, h);
      if (ft(d)) return E(c, s, d, h);
      pr(c, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (t(c, s.sibling), s = l(s, d), s.return = c, c = s) : (t(c, s), s = Wl(d, c.mode, h), s.return = c, c = s), i(c)) : t(c, s);
  }
  return F;
}
var nt = ls(!0), os = ls(!1), Wr = yn(null), Kr = null, Hn = null, si = null;
function fi() {
  si = Hn = Kr = null;
}
function ci(e) {
  var n = Wr.current;
  I(Wr), e._currentValue = n;
}
function xo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function Xn(e, n) {
  Kr = e, si = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), e.firstContext = null);
}
function Ne(e) {
  var n = e._currentValue;
  if (si !== e) if (e = { context: e, memoizedValue: n, next: null }, Hn === null) {
    if (Kr === null) throw Error(g(308));
    Hn = e, Kr.dependencies = { lanes: 0, firstContext: e };
  } else Hn = Hn.next = e;
  return n;
}
var En = null;
function di(e) {
  En === null ? En = [e] : En.push(e);
}
function is(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, di(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ge(e, r);
}
function Ge(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function pi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function us(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function We(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function an(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ge(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, di(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ge(e, t);
}
function Cr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qo(e, t);
  }
}
function wu(e, n) {
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
function Qr(e, n, t, r) {
  var l = e.updateQueue;
  qe = !1;
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
      var p = u.lane, v = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, E = u;
          switch (p = n, v = t, E.tag) {
            case 1:
              if (S = E.payload, typeof S == "function") {
                y = S.call(v, y, p);
                break e;
              }
              y = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = E.payload, p = typeof S == "function" ? S.call(v, y, p) : S, p == null) break e;
              y = B({}, y, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else v = { eventTime: v, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (f = m = v, a = y) : m = m.next = v, i |= p;
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
    Dn |= i, e.lanes = i, e.memoizedState = y;
  }
}
function Su(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var qt = {}, $e = yn(qt), Vt = yn(qt), Ht = yn(qt);
function xn(e) {
  if (e === qt) throw Error(g(174));
  return e;
}
function mi(e, n) {
  switch (O(Ht, n), O(Vt, e), O($e, qt), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : to(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = to(n, e);
  }
  I($e), O($e, n);
}
function tt() {
  I($e), I(Vt), I(Ht);
}
function as(e) {
  xn(Ht.current);
  var n = xn($e.current), t = to(n, e.type);
  n !== t && (O(Vt, e), O($e, t));
}
function yi(e) {
  Vt.current === e && (I($e), I(Vt));
}
var $ = yn(0);
function Gr(e) {
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
var Ul = [];
function hi() {
  for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Nr = Ze.ReactCurrentDispatcher, $l = Ze.ReactCurrentBatchConfig, Ln = 0, A = null, G = null, X = null, Yr = !1, Pt = !1, Wt = 0, bc = 0;
function ne() {
  throw Error(g(321));
}
function gi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Fe(e[t], n[t])) return !1;
  return !0;
}
function vi(e, n, t, r, l, o) {
  if (Ln = o, A = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Nr.current = e === null || e.memoizedState === null ? rd : ld, e = t(r, l), Pt) {
    o = 0;
    do {
      if (Pt = !1, Wt = 0, 25 <= o) throw Error(g(301));
      o += 1, X = G = null, n.updateQueue = null, Nr.current = od, e = t(r, l);
    } while (Pt);
  }
  if (Nr.current = Zr, n = G !== null && G.next !== null, Ln = 0, X = G = A = null, Yr = !1, n) throw Error(g(300));
  return e;
}
function wi() {
  var e = Wt !== 0;
  return Wt = 0, e;
}
function je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return X === null ? A.memoizedState = X = e : X = X.next = e, X;
}
function _e() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var n = X === null ? A.memoizedState : X.next;
  if (n !== null) X = n, G = e;
  else {
    if (e === null) throw Error(g(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, X === null ? A.memoizedState = X = e : X = X.next = e;
  }
  return X;
}
function Kt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Al(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, o = t.pending;
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
      if ((Ln & m) === m) a !== null && (a = a.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var y = {
          lane: m,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        a === null ? (u = a = y, i = r) : a = a.next = y, A.lanes |= m, Dn |= m;
      }
      f = f.next;
    } while (f !== null && f !== o);
    a === null ? i = r : a.next = u, Fe(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = a, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, A.lanes |= o, Dn |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Bl(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Fe(o, n.memoizedState) || (ce = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ss() {
}
function fs(e, n) {
  var t = A, r = _e(), l = n(), o = !Fe(r.memoizedState, l);
  if (o && (r.memoizedState = l, ce = !0), r = r.queue, Si(ps.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || X !== null && X.memoizedState.tag & 1) {
    if (t.flags |= 2048, Qt(9, ds.bind(null, t, r, l, n), void 0, null), J === null) throw Error(g(349));
    Ln & 30 || cs(t, n, l);
  }
  return l;
}
function cs(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = A.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, A.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function ds(e, n, t, r) {
  n.value = t, n.getSnapshot = r, ms(n) && ys(e);
}
function ps(e, n, t) {
  return t(function() {
    ms(n) && ys(e);
  });
}
function ms(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Fe(e, t);
  } catch {
    return !0;
  }
}
function ys(e) {
  var n = Ge(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function ku(e) {
  var n = je();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kt, lastRenderedState: e }, n.queue = e, e = e.dispatch = td.bind(null, A, e), [n.memoizedState, e];
}
function Qt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = A.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, A.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function hs() {
  return _e().memoizedState;
}
function _r(e, n, t, r) {
  var l = je();
  A.flags |= e, l.memoizedState = Qt(1 | n, t, void 0, r === void 0 ? null : r);
}
function al(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (o = i.destroy, r !== null && gi(r, i.deps)) {
      l.memoizedState = Qt(n, t, o, r);
      return;
    }
  }
  A.flags |= e, l.memoizedState = Qt(1 | n, t, o, r);
}
function Eu(e, n) {
  return _r(8390656, 8, e, n);
}
function Si(e, n) {
  return al(2048, 8, e, n);
}
function gs(e, n) {
  return al(4, 2, e, n);
}
function vs(e, n) {
  return al(4, 4, e, n);
}
function ws(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Ss(e, n, t) {
  return t = t != null ? t.concat([e]) : null, al(4, 4, ws.bind(null, n, e), t);
}
function ki() {
}
function ks(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && gi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Es(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && gi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function xs(e, n, t) {
  return Ln & 21 ? (Fe(t, n) || (t = La(), A.lanes |= t, Dn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t);
}
function ed(e, n) {
  var t = M;
  M = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), n();
  } finally {
    M = t, $l.transition = r;
  }
}
function Cs() {
  return _e().memoizedState;
}
function nd(e, n, t) {
  var r = fn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ns(e)) _s(n, t);
  else if (t = is(e, n, t, r), t !== null) {
    var l = ue();
    Me(t, e, r, l), Ps(t, n, r);
  }
}
function td(e, n, t) {
  var r = fn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ns(e)) _s(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
        var a = n.interleaved;
        a === null ? (l.next = l, di(n)) : (l.next = a.next, a.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = is(e, n, l, r), t !== null && (l = ue(), Me(t, e, r, l), Ps(t, n, r));
  }
}
function Ns(e) {
  var n = e.alternate;
  return e === A || n !== null && n === A;
}
function _s(e, n) {
  Pt = Yr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Ps(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qo(e, t);
  }
}
var Zr = { readContext: Ne, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, rd = { readContext: Ne, useCallback: function(e, n) {
  return je().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Ne, useEffect: Eu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, _r(
    4194308,
    4,
    ws.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return _r(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return _r(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = je();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = je();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = nd.bind(null, A, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = je();
  return e = { current: e }, n.memoizedState = e;
}, useState: ku, useDebugValue: ki, useDeferredValue: function(e) {
  return je().memoizedState = e;
}, useTransition: function() {
  var e = ku(!1), n = e[0];
  return e = ed.bind(null, e[1]), je().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = A, l = je();
  if (U) {
    if (t === void 0) throw Error(g(407));
    t = t();
  } else {
    if (t = n(), J === null) throw Error(g(349));
    Ln & 30 || cs(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Eu(ps.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Qt(9, ds.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = je(), n = J.identifierPrefix;
  if (U) {
    var t = He, r = Ve;
    t = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Wt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = bc++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, ld = {
  readContext: Ne,
  useCallback: ks,
  useContext: Ne,
  useEffect: Si,
  useImperativeHandle: Ss,
  useInsertionEffect: gs,
  useLayoutEffect: vs,
  useMemo: Es,
  useReducer: Al,
  useRef: hs,
  useState: function() {
    return Al(Kt);
  },
  useDebugValue: ki,
  useDeferredValue: function(e) {
    var n = _e();
    return xs(n, G.memoizedState, e);
  },
  useTransition: function() {
    var e = Al(Kt)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: ss,
  useSyncExternalStore: fs,
  useId: Cs,
  unstable_isNewReconciler: !1
}, od = { readContext: Ne, useCallback: ks, useContext: Ne, useEffect: Si, useImperativeHandle: Ss, useInsertionEffect: gs, useLayoutEffect: vs, useMemo: Es, useReducer: Bl, useRef: hs, useState: function() {
  return Bl(Kt);
}, useDebugValue: ki, useDeferredValue: function(e) {
  var n = _e();
  return G === null ? n.memoizedState = e : xs(n, G.memoizedState, e);
}, useTransition: function() {
  var e = Bl(Kt)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: ss, useSyncExternalStore: fs, useId: Cs, unstable_isNewReconciler: !1 };
function De(e, n) {
  if (e && e.defaultProps) {
    n = B({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Co(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : B({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Rn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = ue(), l = fn(e), o = We(r, l);
  o.payload = n, t != null && (o.callback = t), n = an(e, o, l), n !== null && (Me(n, e, l, r), Cr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ue(), l = fn(e), o = We(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = an(e, o, l), n !== null && (Me(n, e, l, r), Cr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ue(), r = fn(e), l = We(t, r);
  l.tag = 2, n != null && (l.callback = n), n = an(e, l, r), n !== null && (Me(n, e, r, t), Cr(n, e, r));
} };
function xu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Ut(t, r) || !Ut(l, o) : !0;
}
function Ls(e, n, t) {
  var r = !1, l = pn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Ne(o) : (l = pe(n) ? _n : oe.current, r = n.contextTypes, o = (r = r != null) ? bn(e, l) : pn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Cu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
}
function No(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, pi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Ne(o) : (o = pe(n) ? _n : oe.current, l.context = bn(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Co(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), Qr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Mf(r), r = r.return;
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
function _o(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var id = typeof WeakMap == "function" ? WeakMap : Map;
function Ds(e, n, t) {
  t = We(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    Jr || (Jr = !0, jo = r), _o(e, n);
  }, t;
}
function Ts(e, n, t) {
  t = We(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      _o(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    _o(e, n), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Nu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new id();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Sd.bind(null, e, n, t), n.then(e, e));
}
function _u(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = We(-1, 1), n.tag = 2, an(t, n, 1))), t.lanes |= 1), e);
}
var ud = Ze.ReactCurrentOwner, ce = !1;
function ie(e, n, t, r) {
  n.child = e === null ? os(n, null, t, r) : nt(n, e.child, t, r);
}
function Lu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Xn(n, l), r = vi(e, n, t, r, o, l), t = wi(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (U && t && ii(n), n.flags |= 1, ie(e, n, r, l), n.child);
}
function Du(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Di(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, zs(e, n, o, r, l)) : (e = Tr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Ut, t(i, r) && e.ref === n.ref) return Ye(e, n, l);
  }
  return n.flags |= 1, e = cn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function zs(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ut(o, r) && e.ref === n.ref) if (ce = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ce = !0);
    else return n.lanes = e.lanes, Ye(e, n, l);
  }
  return Po(e, n, t, r, l);
}
function Rs(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(Kn, ye), ye |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, O(Kn, ye), ye |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, O(Kn, ye), ye |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, O(Kn, ye), ye |= r;
  return ie(e, n, l, t), n.child;
}
function Ms(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Po(e, n, t, r, l) {
  var o = pe(t) ? _n : oe.current;
  return o = bn(n, o), Xn(n, l), t = vi(e, n, t, r, o, l), r = wi(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (U && r && ii(n), n.flags |= 1, ie(e, n, t, l), n.child);
}
function Tu(e, n, t, r, l) {
  if (pe(t)) {
    var o = !0;
    Br(n);
  } else o = !1;
  if (Xn(n, l), n.stateNode === null) Pr(e, n), Ls(n, t, r), No(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var a = i.context, f = t.contextType;
    typeof f == "object" && f !== null ? f = Ne(f) : (f = pe(t) ? _n : oe.current, f = bn(n, f));
    var m = t.getDerivedStateFromProps, y = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== f) && Cu(n, i, r, f), qe = !1;
    var p = n.memoizedState;
    i.state = p, Qr(n, r, i, l), a = n.memoizedState, u !== r || p !== a || de.current || qe ? (typeof m == "function" && (Co(n, t, m, r), a = n.memoizedState), (u = qe || xu(n, t, u, r, p, a, f)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = a), i.props = r, i.state = a, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, us(e, n), u = n.memoizedProps, f = n.type === n.elementType ? u : De(n.type, u), i.props = f, y = n.pendingProps, p = i.context, a = t.contextType, typeof a == "object" && a !== null ? a = Ne(a) : (a = pe(t) ? _n : oe.current, a = bn(n, a));
    var v = t.getDerivedStateFromProps;
    (m = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== y || p !== a) && Cu(n, i, r, a), qe = !1, p = n.memoizedState, i.state = p, Qr(n, r, i, l);
    var S = n.memoizedState;
    u !== y || p !== S || de.current || qe ? (typeof v == "function" && (Co(n, t, v, r), S = n.memoizedState), (f = qe || xu(n, t, f, r, p, S, a) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, a)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = S), i.props = r, i.state = S, i.context = a, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Lo(e, n, t, r, o, l);
}
function Lo(e, n, t, r, l, o) {
  Ms(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && yu(n, t, !1), Ye(e, n, o);
  r = n.stateNode, ud.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = nt(n, e.child, null, o), n.child = nt(n, null, u, o)) : ie(e, n, u, o), n.memoizedState = r.state, l && yu(n, t, !0), n.child;
}
function Fs(e) {
  var n = e.stateNode;
  n.pendingContext ? mu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && mu(e, n.context, !1), mi(e, n.containerInfo);
}
function zu(e, n, t, r, l) {
  return et(), ai(l), n.flags |= 256, ie(e, n, t, r), n.child;
}
var Do = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Os(e, n, t) {
  var r = n.pendingProps, l = $.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O($, l & 1), e === null)
    return Eo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = dl(i, r, 0, null), e = Nn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = To(t), n.memoizedState = Do, e) : Ei(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return ad(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = a, n.deletions = null) : (r = cn(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = cn(u, o) : (o = Nn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? To(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Do, r;
  }
  return o = e.child, e = o.sibling, r = cn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Ei(e, n) {
  return n = dl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function mr(e, n, t, r) {
  return r !== null && ai(r), nt(n, e.child, null, t), e = Ei(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function ad(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Vl(Error(g(422))), mr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = dl({ mode: "visible", children: r.children }, l, 0, null), o = Nn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && nt(n, e.child, null, i), n.child.memoizedState = To(i), n.memoizedState = Do, o);
  if (!(n.mode & 1)) return mr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(g(419)), r = Vl(o, r, void 0), mr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ce || u) {
    if (r = J, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ge(e, l), Me(r, e, l, -1));
    }
    return Li(), r = Vl(Error(g(421))), mr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = kd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, he = un(l.nextSibling), ge = n, U = !0, ze = null, e !== null && (ke[Ee++] = Ve, ke[Ee++] = He, ke[Ee++] = Pn, Ve = e.id, He = e.overflow, Pn = n), n = Ei(n, r.children), n.flags |= 4096, n);
}
function Ru(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), xo(e.return, n, t);
}
function Hl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function js(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (ie(e, n, r.children, t), r = $.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ru(e, t, n);
      else if (e.tag === 19) Ru(e, t, n);
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
  if (O($, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && Gr(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Hl(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Gr(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Hl(n, !0, t, null, o);
      break;
    case "together":
      Hl(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Pr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Ye(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Dn |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(g(153));
  if (n.child !== null) {
    for (e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = cn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function sd(e, n, t) {
  switch (n.tag) {
    case 3:
      Fs(n), et();
      break;
    case 5:
      as(n);
      break;
    case 1:
      pe(n.type) && Br(n);
      break;
    case 4:
      mi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      O(Wr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (O($, $.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Os(e, n, t) : (O($, $.current & 1), e = Ye(e, n, t), e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return js(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Rs(e, n, t);
  }
  return Ye(e, n, t);
}
var Is, zo, Us, $s;
Is = function(e, n) {
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
zo = function() {
};
Us = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, xn($e.current);
    var o = null;
    switch (t) {
      case "input":
        l = ql(e, l), r = ql(e, r), o = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = no(e, l), r = no(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
    }
    ro(t, r);
    var i;
    t = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (zt.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var a = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && a !== u && (a != null || u != null)) if (f === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (t || (t = {}), t[i] = a[i]);
      } else t || (o || (o = []), o.push(
        f,
        t
      )), t = a;
      else f === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(f, a)) : f === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(f, "" + a) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (zt.hasOwnProperty(f) ? (a != null && f === "onScroll" && j("scroll", e), o || u === a || (o = [])) : (o = o || []).push(f, a));
    }
    t && (o = o || []).push("style", t);
    var f = o;
    (n.updateQueue = f) && (n.flags |= 4);
  }
};
$s = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function ht(e, n) {
  if (!U) switch (e.tailMode) {
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
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function fd(e, n, t) {
  var r = n.pendingProps;
  switch (ui(n), n.tag) {
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
      return te(n), null;
    case 1:
      return pe(n.type) && Ar(), te(n), null;
    case 3:
      return r = n.stateNode, tt(), I(de), I(oe), hi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (dr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, ze !== null && ($o(ze), ze = null))), zo(e, n), te(n), null;
    case 5:
      yi(n);
      var l = xn(Ht.current);
      if (t = n.type, e !== null && n.stateNode != null) Us(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return te(n), null;
        }
        if (e = xn($e.current), dr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ie] = n, r[Bt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kt.length; l++) j(kt[l], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j(
                "error",
                r
              ), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              Bi(r, o), j("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, j("invalid", r);
              break;
            case "textarea":
              Hi(r, o), j("invalid", r);
          }
          ro(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && cr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && cr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : zt.hasOwnProperty(i) && u != null && i === "onScroll" && j("scroll", r);
          }
          switch (t) {
            case "input":
              rr(r), Vi(r, o, !0);
              break;
            case "textarea":
              rr(r), Wi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $r);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pa(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ie] = n, e[Bt] = r, Is(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = lo(t, r), t) {
              case "dialog":
                j("cancel", e), j("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kt.length; l++) j(kt[l], e);
                l = r;
                break;
              case "source":
                j("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                j(
                  "error",
                  e
                ), j("load", e), l = r;
                break;
              case "details":
                j("toggle", e), l = r;
                break;
              case "input":
                Bi(e, r), l = ql(e, r), j("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), j("invalid", e);
                break;
              case "textarea":
                Hi(e, r), l = no(e, r), j("invalid", e);
                break;
              default:
                l = r;
            }
            ro(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? ha(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ma(e, a)) : o === "children" ? typeof a == "string" ? (t !== "textarea" || a !== "") && Rt(e, a) : typeof a == "number" && Rt(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (zt.hasOwnProperty(o) ? a != null && o === "onScroll" && j("scroll", e) : a != null && Qo(e, o, a, i));
            }
            switch (t) {
              case "input":
                rr(e), Vi(e, r, !1);
                break;
              case "textarea":
                rr(e), Wi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Qn(e, !!r.multiple, o, !1) : r.defaultValue != null && Qn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
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
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) $s(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
        if (t = xn(Ht.current), xn($e.current), dr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ie] = n, (o = r.nodeValue !== t) && (e = ge, e !== null)) switch (e.tag) {
            case 3:
              cr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && cr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ie] = n, n.stateNode = r;
      }
      return te(n), null;
    case 13:
      if (I($), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && he !== null && n.mode & 1 && !(n.flags & 128)) rs(), et(), n.flags |= 98560, o = !1;
        else if (o = dr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(g(317));
            o[Ie] = n;
          } else et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          te(n), o = !1;
        } else ze !== null && ($o(ze), ze = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || $.current & 1 ? Y === 0 && (Y = 3) : Li())), n.updateQueue !== null && (n.flags |= 4), te(n), null);
    case 4:
      return tt(), zo(e, n), e === null && $t(n.stateNode.containerInfo), te(n), null;
    case 10:
      return ci(n.type._context), te(n), null;
    case 17:
      return pe(n.type) && Ar(), te(n), null;
    case 19:
      if (I($), o = n.memoizedState, o === null) return te(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) ht(o, !1);
      else {
        if (Y !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = Gr(e), i !== null) {
            for (n.flags |= 128, ht(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return O($, $.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && K() > lt && (n.flags |= 128, r = !0, ht(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = Gr(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ht(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !U) return te(n), null;
        } else 2 * K() - o.renderingStartTime > lt && t !== 1073741824 && (n.flags |= 128, r = !0, ht(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = K(), n.sibling = null, t = $.current, O($, r ? t & 1 | 2 : t & 1), n) : (te(n), null);
    case 22:
    case 23:
      return Pi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? ye & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : te(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, n.tag));
}
function cd(e, n) {
  switch (ui(n), n.tag) {
    case 1:
      return pe(n.type) && Ar(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return tt(), I(de), I(oe), hi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return yi(n), null;
    case 13:
      if (I($), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(g(340));
        et();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return I($), null;
    case 4:
      return tt(), null;
    case 10:
      return ci(n.type._context), null;
    case 22:
    case 23:
      return Pi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1, le = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Wn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    H(e, n, r);
  }
  else t.current = null;
}
function Ro(e, n, t) {
  try {
    t();
  } catch (r) {
    H(e, n, r);
  }
}
var Mu = !1;
function pd(e, n) {
  if (yo = jr, e = Wa(), oi(e)) {
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
          for (var v; y !== t || l !== 0 && y.nodeType !== 3 || (u = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (a = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (v = y.firstChild) !== null; )
            p = y, y = v;
          for (; ; ) {
            if (y === e) break n;
            if (p === t && ++f === l && (u = i), p === o && ++m === r && (a = i), (v = y.nextSibling) !== null) break;
            y = p, p = y.parentNode;
          }
          y = v;
        }
        t = u === -1 || a === -1 ? null : { start: u, end: a };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (ho = { focusedElem: e, selectionRange: t }, jr = !1, N = n; N !== null; ) if (n = N, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, N = e;
  else for (; N !== null; ) {
    n = N;
    try {
      var S = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var E = S.memoizedProps, F = S.memoizedState, c = n.stateNode, s = c.getSnapshotBeforeUpdate(n.elementType === n.type ? E : De(n.type, E), F);
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
          throw Error(g(163));
      }
    } catch (h) {
      H(n, n.return, h);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, N = e;
      break;
    }
    N = n.return;
  }
  return S = Mu, Mu = !1, S;
}
function Lt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ro(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, n) {
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
function Mo(e) {
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
function As(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, As(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ie], delete n[Bt], delete n[wo], delete n[Zc], delete n[Xc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Bs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bs(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = $r));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fo(e, n, t), e = e.sibling; e !== null; ) Fo(e, n, t), e = e.sibling;
}
function Oo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Oo(e, n, t), e = e.sibling; e !== null; ) Oo(e, n, t), e = e.sibling;
}
var q = null, Te = !1;
function Xe(e, n, t) {
  for (t = t.child; t !== null; ) Vs(e, n, t), t = t.sibling;
}
function Vs(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
    Ue.onCommitFiberUnmount(tl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      le || Wn(t, n);
    case 6:
      var r = q, l = Te;
      q = null, Xe(e, n, t), q = r, Te = l, q !== null && (Te ? (e = q, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null && (Te ? (e = q, t = t.stateNode, e.nodeType === 8 ? jl(e.parentNode, t) : e.nodeType === 1 && jl(e, t), jt(e)) : jl(q, t.stateNode));
      break;
    case 4:
      r = q, l = Te, q = t.stateNode.containerInfo, Te = !0, Xe(e, n, t), q = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ro(t, n, i), l = l.next;
        } while (l !== r);
      }
      Xe(e, n, t);
      break;
    case 1:
      if (!le && (Wn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        H(t, n, u);
      }
      Xe(e, n, t);
      break;
    case 21:
      Xe(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (le = (r = le) || t.memoizedState !== null, Xe(e, n, t), le = r) : Xe(e, n, t);
      break;
    default:
      Xe(e, n, t);
  }
}
function Ou(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new dd()), n.forEach(function(r) {
      var l = Ed.bind(null, e, r);
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
            q = u.stateNode, Te = !1;
            break e;
          case 3:
            q = u.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            q = u.stateNode.containerInfo, Te = !0;
            break e;
        }
        u = u.return;
      }
      if (q === null) throw Error(g(160));
      Vs(o, i, l), q = null, Te = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (f) {
      H(l, n, f);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Hs(n, e), n = n.sibling;
}
function Hs(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(n, e), Oe(e), r & 4) {
        try {
          Lt(3, e, e.return), fl(3, e);
        } catch (E) {
          H(e, e.return, E);
        }
        try {
          Lt(5, e, e.return);
        } catch (E) {
          H(e, e.return, E);
        }
      }
      break;
    case 1:
      Le(n, e), Oe(e), r & 512 && t !== null && Wn(t, t.return);
      break;
    case 5:
      if (Le(n, e), Oe(e), r & 512 && t !== null && Wn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Rt(l, "");
        } catch (E) {
          H(e, e.return, E);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && ca(l, o), lo(u, i);
          var f = lo(u, o);
          for (i = 0; i < a.length; i += 2) {
            var m = a[i], y = a[i + 1];
            m === "style" ? ha(l, y) : m === "dangerouslySetInnerHTML" ? ma(l, y) : m === "children" ? Rt(l, y) : Qo(l, m, y, f);
          }
          switch (u) {
            case "input":
              bl(l, o);
              break;
            case "textarea":
              da(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var v = o.value;
              v != null ? Qn(l, !!o.multiple, v, !1) : p !== !!o.multiple && (o.defaultValue != null ? Qn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Qn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Bt] = o;
        } catch (E) {
          H(e, e.return, E);
        }
      }
      break;
    case 6:
      if (Le(n, e), Oe(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (E) {
          H(e, e.return, E);
        }
      }
      break;
    case 3:
      if (Le(n, e), Oe(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        jt(n.containerInfo);
      } catch (E) {
        H(e, e.return, E);
      }
      break;
    case 4:
      Le(n, e), Oe(e);
      break;
    case 13:
      Le(n, e), Oe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ni = K())), r & 4 && Ou(e);
      break;
    case 22:
      if (m = t !== null && t.memoizedState !== null, e.mode & 1 ? (le = (f = le) || m, Le(n, e), le = f) : Le(n, e), Oe(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !m && e.mode & 1) for (N = e, m = e.child; m !== null; ) {
          for (y = N = m; N !== null; ) {
            switch (p = N, v = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Lt(4, p, p.return);
                break;
              case 1:
                Wn(p, p.return);
                var S = p.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = p, t = p.return;
                  try {
                    n = r, S.props = n.memoizedProps, S.state = n.memoizedState, S.componentWillUnmount();
                  } catch (E) {
                    H(r, t, E);
                  }
                }
                break;
              case 5:
                Wn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Iu(y);
                  continue;
                }
            }
            v !== null ? (v.return = p, N = v) : Iu(y);
          }
          m = m.sibling;
        }
        e: for (m = null, y = e; ; ) {
          if (y.tag === 5) {
            if (m === null) {
              m = y;
              try {
                l = y.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = y.stateNode, a = y.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = ya("display", i));
              } catch (E) {
                H(e, e.return, E);
              }
            }
          } else if (y.tag === 6) {
            if (m === null) try {
              y.stateNode.nodeValue = f ? "" : y.memoizedProps;
            } catch (E) {
              H(e, e.return, E);
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
      Le(n, e), Oe(e), r & 4 && Ou(e);
      break;
    case 21:
      break;
    default:
      Le(
        n,
        e
      ), Oe(e);
  }
}
function Oe(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Bs(t)) {
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
          r.flags & 32 && (Rt(l, ""), r.flags &= -33);
          var o = Fu(e);
          Oo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Fu(e);
          Fo(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (a) {
      H(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function md(e, n, t) {
  N = e, Ws(e);
}
function Ws(e, n, t) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || yr;
      if (!i) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || le;
        u = yr;
        var f = le;
        if (yr = i, (le = a) && !f) for (N = l; N !== null; ) i = N, a = i.child, i.tag === 22 && i.memoizedState !== null ? Uu(l) : a !== null ? (a.return = i, N = a) : Uu(l);
        for (; o !== null; ) N = o, Ws(o), o = o.sibling;
        N = l, yr = u, le = f;
      }
      ju(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : ju(e);
  }
}
function ju(e) {
  for (; N !== null; ) {
    var n = N;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            le || fl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !le) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : De(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && Su(n, o, r);
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
              Su(n, i, t);
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
                  y !== null && jt(y);
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
        le || n.flags & 512 && Mo(n);
      } catch (p) {
        H(n, n.return, p);
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
function Iu(e) {
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
function Uu(e) {
  for (; N !== null; ) {
    var n = N;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            fl(4, n);
          } catch (a) {
            H(n, t, a);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (a) {
              H(n, l, a);
            }
          }
          var o = n.return;
          try {
            Mo(n);
          } catch (a) {
            H(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Mo(n);
          } catch (a) {
            H(n, i, a);
          }
      }
    } catch (a) {
      H(n, n.return, a);
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
var yd = Math.ceil, Xr = Ze.ReactCurrentDispatcher, xi = Ze.ReactCurrentOwner, Ce = Ze.ReactCurrentBatchConfig, R = 0, J = null, Q = null, b = 0, ye = 0, Kn = yn(0), Y = 0, Gt = null, Dn = 0, cl = 0, Ci = 0, Dt = null, fe = null, Ni = 0, lt = 1 / 0, Ae = null, Jr = !1, jo = null, sn = null, hr = !1, tn = null, qr = 0, Tt = 0, Io = null, Lr = -1, Dr = 0;
function ue() {
  return R & 6 ? K() : Lr !== -1 ? Lr : Lr = K();
}
function fn(e) {
  return e.mode & 1 ? R & 2 && b !== 0 ? b & -b : qc.transition !== null ? (Dr === 0 && (Dr = La()), Dr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Oa(e.type)), e) : 1;
}
function Me(e, n, t, r) {
  if (50 < Tt) throw Tt = 0, Io = null, Error(g(185));
  Zt(e, t, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (cl |= t), Y === 4 && en(e, b)), me(e, r), t === 1 && R === 0 && !(n.mode & 1) && (lt = K() + 500, ul && hn()));
}
function me(e, n) {
  var t = e.callbackNode;
  qf(e, n);
  var r = Or(e, e === J ? b : 0);
  if (r === 0) t !== null && Gi(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Gi(t), n === 1) e.tag === 0 ? Jc($u.bind(null, e)) : es($u.bind(null, e)), Gc(function() {
      !(R & 6) && hn();
    }), t = null;
    else {
      switch (Da(r)) {
        case 1:
          t = Jo;
          break;
        case 4:
          t = _a;
          break;
        case 16:
          t = Fr;
          break;
        case 536870912:
          t = Pa;
          break;
        default:
          t = Fr;
      }
      t = qs(t, Ks.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Ks(e, n) {
  if (Lr = -1, Dr = 0, R & 6) throw Error(g(327));
  var t = e.callbackNode;
  if (Jn() && e.callbackNode !== t) return null;
  var r = Or(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = br(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var o = Gs();
    (J !== e || b !== n) && (Ae = null, lt = K() + 500, Cn(e, n));
    do
      try {
        vd();
        break;
      } catch (u) {
        Qs(e, u);
      }
    while (!0);
    fi(), Xr.current = o, R = l, Q !== null ? n = 0 : (J = null, b = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = so(e), l !== 0 && (r = l, n = Uo(e, l))), n === 1) throw t = Gt, Cn(e, 0), en(e, r), me(e, K()), t;
    if (n === 6) en(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !hd(l) && (n = br(e, r), n === 2 && (o = so(e), o !== 0 && (r = o, n = Uo(e, o))), n === 1)) throw t = Gt, Cn(e, 0), en(e, r), me(e, K()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          Sn(e, fe, Ae);
          break;
        case 3:
          if (en(e, r), (r & 130023424) === r && (n = Ni + 500 - K(), 10 < n)) {
            if (Or(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = vo(Sn.bind(null, e, fe, Ae), n);
            break;
          }
          Sn(e, fe, Ae);
          break;
        case 4:
          if (en(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = vo(Sn.bind(null, e, fe, Ae), r);
            break;
          }
          Sn(e, fe, Ae);
          break;
        case 5:
          Sn(e, fe, Ae);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === t ? Ks.bind(null, e) : null;
}
function Uo(e, n) {
  var t = Dt;
  return e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256), e = br(e, n), e !== 2 && (n = fe, fe = t, n !== null && $o(n)), e;
}
function $o(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function hd(e) {
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
function en(e, n) {
  for (n &= ~Ci, n &= ~cl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Re(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function $u(e) {
  if (R & 6) throw Error(g(327));
  Jn();
  var n = Or(e, 0);
  if (!(n & 1)) return me(e, K()), null;
  var t = br(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = so(e);
    r !== 0 && (n = r, t = Uo(e, r));
  }
  if (t === 1) throw t = Gt, Cn(e, 0), en(e, n), me(e, K()), t;
  if (t === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Sn(e, fe, Ae), me(e, K()), null;
}
function _i(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    R = t, R === 0 && (lt = K() + 500, ul && hn());
  }
}
function Tn(e) {
  tn !== null && tn.tag === 0 && !(R & 6) && Jn();
  var n = R;
  R |= 1;
  var t = Ce.transition, r = M;
  try {
    if (Ce.transition = null, M = 1, e) return e();
  } finally {
    M = r, Ce.transition = t, R = n, !(R & 6) && hn();
  }
}
function Pi() {
  ye = Kn.current, I(Kn);
}
function Cn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Qc(t)), Q !== null) for (t = Q.return; t !== null; ) {
    var r = t;
    switch (ui(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ar();
        break;
      case 3:
        tt(), I(de), I(oe), hi();
        break;
      case 5:
        yi(r);
        break;
      case 4:
        tt();
        break;
      case 13:
        I($);
        break;
      case 19:
        I($);
        break;
      case 10:
        ci(r.type._context);
        break;
      case 22:
      case 23:
        Pi();
    }
    t = t.return;
  }
  if (J = e, Q = e = cn(e.current, null), b = ye = n, Y = 0, Gt = null, Ci = cl = Dn = 0, fe = Dt = null, En !== null) {
    for (n = 0; n < En.length; n++) if (t = En[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    En = null;
  }
  return e;
}
function Qs(e, n) {
  do {
    var t = Q;
    try {
      if (fi(), Nr.current = Zr, Yr) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Yr = !1;
      }
      if (Ln = 0, X = G = A = null, Pt = !1, Wt = 0, xi.current = null, t === null || t.return === null) {
        Y = 1, Gt = n, Q = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, a = n;
        if (n = b, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var f = a, m = u, y = m.tag;
          if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var v = _u(i);
          if (v !== null) {
            v.flags &= -257, Pu(v, i, u, o, n), v.mode & 1 && Nu(o, f, n), n = v, a = f;
            var S = n.updateQueue;
            if (S === null) {
              var E = /* @__PURE__ */ new Set();
              E.add(a), n.updateQueue = E;
            } else S.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Nu(o, f, n), Li();
              break e;
            }
            a = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var F = _u(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Pu(F, i, u, o, n), ai(rt(a, u));
            break e;
          }
        }
        o = a = rt(a, u), Y !== 4 && (Y = 2), Dt === null ? Dt = [o] : Dt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var c = Ds(o, a, n);
              wu(o, c);
              break e;
            case 1:
              u = a;
              var s = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (sn === null || !sn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var h = Ts(o, u, n);
                wu(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Zs(t);
    } catch (C) {
      n = C, Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Gs() {
  var e = Xr.current;
  return Xr.current = Zr, e === null ? Zr : e;
}
function Li() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), J === null || !(Dn & 268435455) && !(cl & 268435455) || en(J, b);
}
function br(e, n) {
  var t = R;
  R |= 2;
  var r = Gs();
  (J !== e || b !== n) && (Ae = null, Cn(e, n));
  do
    try {
      gd();
      break;
    } catch (l) {
      Qs(e, l);
    }
  while (!0);
  if (fi(), R = t, Xr.current = r, Q !== null) throw Error(g(261));
  return J = null, b = 0, Y;
}
function gd() {
  for (; Q !== null; ) Ys(Q);
}
function vd() {
  for (; Q !== null && !Hf(); ) Ys(Q);
}
function Ys(e) {
  var n = Js(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, n === null ? Zs(e) : Q = n, xi.current = null;
}
function Zs(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = cd(t, n), t !== null) {
        t.flags &= 32767, Q = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, Q = null;
        return;
      }
    } else if (t = fd(t, n, ye), t !== null) {
      Q = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function Sn(e, n, t) {
  var r = M, l = Ce.transition;
  try {
    Ce.transition = null, M = 1, wd(e, n, t, r);
  } finally {
    Ce.transition = l, M = r;
  }
  return null;
}
function wd(e, n, t, r) {
  do
    Jn();
  while (tn !== null);
  if (R & 6) throw Error(g(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (bf(e, o), e === J && (Q = J = null, b = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || hr || (hr = !0, qs(Fr, function() {
    return Jn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Ce.transition, Ce.transition = null;
    var i = M;
    M = 1;
    var u = R;
    R |= 4, xi.current = null, pd(e, t), Hs(t, e), $c(ho), jr = !!yo, ho = yo = null, e.current = t, md(t), Wf(), R = u, M = i, Ce.transition = o;
  } else e.current = t;
  if (hr && (hr = !1, tn = e, qr = l), o = e.pendingLanes, o === 0 && (sn = null), Gf(t.stateNode), me(e, K()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw Jr = !1, e = jo, jo = null, e;
  return qr & 1 && e.tag !== 0 && Jn(), o = e.pendingLanes, o & 1 ? e === Io ? Tt++ : (Tt = 0, Io = e) : Tt = 0, hn(), null;
}
function Jn() {
  if (tn !== null) {
    var e = Da(qr), n = Ce.transition, t = M;
    try {
      if (Ce.transition = null, M = 16 > e ? 16 : e, tn === null) var r = !1;
      else {
        if (e = tn, tn = null, qr = 0, R & 6) throw Error(g(331));
        var l = R;
        for (R |= 4, N = e.current; N !== null; ) {
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
                      Lt(8, m, o);
                  }
                  var y = m.child;
                  if (y !== null) y.return = m, N = y;
                  else for (; N !== null; ) {
                    m = N;
                    var p = m.sibling, v = m.return;
                    if (As(m), m === f) {
                      N = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = v, N = p;
                      break;
                    }
                    N = v;
                  }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var E = S.child;
                if (E !== null) {
                  S.child = null;
                  do {
                    var F = E.sibling;
                    E.sibling = null, E = F;
                  } while (E !== null);
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
                Lt(9, o, o.return);
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
                  fl(9, u);
              }
            } catch (C) {
              H(u, u.return, C);
            }
            if (u === i) {
              N = null;
              break e;
            }
            var h = u.sibling;
            if (h !== null) {
              h.return = u.return, N = h;
              break e;
            }
            N = u.return;
          }
        }
        if (R = l, hn(), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
          Ue.onPostCommitFiberRoot(tl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      M = t, Ce.transition = n;
    }
  }
  return !1;
}
function Au(e, n, t) {
  n = rt(t, n), n = Ds(e, n, 1), e = an(e, n, 1), n = ue(), e !== null && (Zt(e, 1, n), me(e, n));
}
function H(e, n, t) {
  if (e.tag === 3) Au(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      Au(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
        e = rt(t, e), e = Ts(n, e, 1), n = an(n, e, 1), e = ue(), n !== null && (Zt(n, 1, e), me(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Sd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ue(), e.pingedLanes |= e.suspendedLanes & t, J === e && (b & t) === t && (Y === 4 || Y === 3 && (b & 130023424) === b && 500 > K() - Ni ? Cn(e, 0) : Ci |= t), me(e, n);
}
function Xs(e, n) {
  n === 0 && (e.mode & 1 ? (n = ir, ir <<= 1, !(ir & 130023424) && (ir = 4194304)) : n = 1);
  var t = ue();
  e = Ge(e, n), e !== null && (Zt(e, n, t), me(e, t));
}
function kd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), Xs(e, t);
}
function Ed(e, n) {
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
  r !== null && r.delete(n), Xs(e, t);
}
var Js;
Js = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || de.current) ce = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return ce = !1, sd(e, n, t);
    ce = !!(e.flags & 131072);
  }
  else ce = !1, U && n.flags & 1048576 && ns(n, Hr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Pr(e, n), e = n.pendingProps;
      var l = bn(n, oe.current);
      Xn(n, t), l = vi(null, n, r, e, l, t);
      var o = wi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, pe(r) ? (o = !0, Br(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, pi(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, No(n, r, e, t), n = Lo(null, n, r, !0, o, t)) : (n.tag = 0, U && o && ii(n), ie(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Pr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Cd(r), e = De(r, e), l) {
          case 0:
            n = Po(null, n, r, e, t);
            break e;
          case 1:
            n = Tu(null, n, r, e, t);
            break e;
          case 11:
            n = Lu(null, n, r, e, t);
            break e;
          case 14:
            n = Du(null, n, r, De(r.type, e), t);
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
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Po(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Tu(e, n, r, l, t);
    case 3:
      e: {
        if (Fs(n), e === null) throw Error(g(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, us(e, n), Qr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = rt(Error(g(423)), n), n = zu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = rt(Error(g(424)), n), n = zu(e, n, r, t, l);
          break e;
        } else for (he = un(n.stateNode.containerInfo.firstChild), ge = n, U = !0, ze = null, t = os(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (et(), r === l) {
            n = Ye(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return as(n), e === null && Eo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, go(r, l) ? i = null : o !== null && go(r, o) && (n.flags |= 32), Ms(e, n), ie(e, n, i, t), n.child;
    case 6:
      return e === null && Eo(n), null;
    case 13:
      return Os(e, n, t);
    case 4:
      return mi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = nt(n, null, r, t) : ie(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Lu(e, n, r, l, t);
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, O(Wr, r._currentValue), r._currentValue = i, o !== null) if (Fe(o.value, i)) {
          if (o.children === l.children && !de.current) {
            n = Ye(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = We(-1, t & -t), a.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var m = f.pending;
                    m === null ? a.next = a : (a.next = m.next, m.next = a), f.pending = a;
                  }
                }
                o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), xo(
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
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), xo(i, t, n), i = o.sibling;
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
      return l = n.type, r = n.pendingProps.children, Xn(n, t), l = Ne(l), r = r(l), n.flags |= 1, ie(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = De(r, n.pendingProps), l = De(r.type, l), Du(e, n, r, l, t);
    case 15:
      return zs(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : De(r, l), Pr(e, n), n.tag = 1, pe(r) ? (e = !0, Br(n)) : e = !1, Xn(n, t), Ls(n, r, l), No(n, r, l, t), Lo(null, n, r, !0, e, t);
    case 19:
      return js(e, n, t);
    case 22:
      return Rs(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function qs(e, n) {
  return Na(e, n);
}
function xd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function xe(e, n, t, r) {
  return new xd(e, n, t, r);
}
function Di(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Cd(e) {
  if (typeof e == "function") return Di(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yo) return 11;
    if (e === Zo) return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return t === null ? (t = xe(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Tr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Di(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case On:
      return Nn(t.children, l, o, n);
    case Go:
      i = 8, l |= 8;
      break;
    case Yl:
      return e = xe(12, t, n, l | 2), e.elementType = Yl, e.lanes = o, e;
    case Zl:
      return e = xe(13, t, n, l), e.elementType = Zl, e.lanes = o, e;
    case Xl:
      return e = xe(19, t, n, l), e.elementType = Xl, e.lanes = o, e;
    case aa:
      return dl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ia:
          i = 10;
          break e;
        case ua:
          i = 9;
          break e;
        case Yo:
          i = 11;
          break e;
        case Zo:
          i = 14;
          break e;
        case Je:
          i = 16, r = null;
          break e;
      }
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return n = xe(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Nn(e, n, t, r) {
  return e = xe(7, e, r, n), e.lanes = t, e;
}
function dl(e, n, t, r) {
  return e = xe(22, e, r, n), e.elementType = aa, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Wl(e, n, t) {
  return e = xe(6, e, null, n), e.lanes = t, e;
}
function Kl(e, n, t) {
  return n = xe(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Nd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Nl(0), this.expirationTimes = Nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ti(e, n, t, r, l, o, i, u, a) {
  return e = new Nd(e, n, t, u, a), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = xe(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pi(o), e;
}
function _d(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function bs(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(g(170));
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
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return ba(e, t, n);
  }
  return n;
}
function ef(e, n, t, r, l, o, i, u, a) {
  return e = Ti(t, r, !0, e, l, o, i, u, a), e.context = bs(null), t = e.current, r = ue(), l = fn(t), o = We(r, l), o.callback = n ?? null, an(t, o, l), e.current.lanes = l, Zt(e, l, r), me(e, r), e;
}
function pl(e, n, t, r) {
  var l = n.current, o = ue(), i = fn(l);
  return t = bs(t), n.context === null ? n.context = t : n.pendingContext = t, n = We(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = an(l, n, i), e !== null && (Me(e, l, i, o), Cr(e, l, i)), i;
}
function el(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function zi(e, n) {
  Bu(e, n), (e = e.alternate) && Bu(e, n);
}
function Pd() {
  return null;
}
var nf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ri(e) {
  this._internalRoot = e;
}
ml.prototype.render = Ri.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(g(409));
  pl(e, n, null, null);
};
ml.prototype.unmount = Ri.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Tn(function() {
      pl(null, e, null, null);
    }), n[Qe] = null;
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ra();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++) ;
    be.splice(t, 0, e), t === 0 && Fa(e);
  }
};
function Mi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vu() {
}
function Ld(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = el(i);
        o.call(f);
      };
    }
    var i = ef(n, r, e, 0, null, !1, !1, "", Vu);
    return e._reactRootContainer = i, e[Qe] = i.current, $t(e.nodeType === 8 ? e.parentNode : e), Tn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = el(a);
      u.call(f);
    };
  }
  var a = Ti(e, 0, !1, null, null, !1, !1, "", Vu);
  return e._reactRootContainer = a, e[Qe] = a.current, $t(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    pl(n, a, t, r);
  }), a;
}
function hl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = el(i);
        u.call(a);
      };
    }
    pl(n, i, e, l);
  } else i = Ld(t, n, e, l, r);
  return el(i);
}
Ta = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = St(n.pendingLanes);
        t !== 0 && (qo(n, t | 1), me(n, K()), !(R & 6) && (lt = K() + 500, hn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ue();
          Me(r, e, 1, l);
        }
      }), zi(e, 1);
  }
};
bo = function(e) {
  if (e.tag === 13) {
    var n = Ge(e, 134217728);
    if (n !== null) {
      var t = ue();
      Me(n, e, 134217728, t);
    }
    zi(e, 134217728);
  }
};
za = function(e) {
  if (e.tag === 13) {
    var n = fn(e), t = Ge(e, n);
    if (t !== null) {
      var r = ue();
      Me(t, e, n, r);
    }
    zi(e, n);
  }
};
Ra = function() {
  return M;
};
Ma = function(e, n) {
  var t = M;
  try {
    return M = e, n();
  } finally {
    M = t;
  }
};
io = function(e, n, t) {
  switch (n) {
    case "input":
      if (bl(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(g(90));
            fa(r), bl(r, l);
          }
        }
      }
      break;
    case "textarea":
      da(e, t);
      break;
    case "select":
      n = t.value, n != null && Qn(e, !!t.multiple, n, !1);
  }
};
wa = _i;
Sa = Tn;
var Dd = { usingClientEntryPoint: !1, Events: [Jt, $n, il, ga, va, _i] }, gt = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Td = { bundleType: gt.bundleType, version: gt.version, rendererPackageName: gt.rendererPackageName, rendererConfig: gt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = xa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gt.findFiberByHostInstance || Pd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber) try {
    tl = gr.inject(Td), Ue = gr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd;
we.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(n)) throw Error(g(200));
  return _d(e, n, null, t);
};
we.createRoot = function(e, n) {
  if (!Mi(e)) throw Error(g(299));
  var t = !1, r = "", l = nf;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ti(e, 1, !1, null, null, t, !1, r, l), e[Qe] = n.current, $t(e.nodeType === 8 ? e.parentNode : e), new Ri(n);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = xa(n), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Tn(e);
};
we.hydrate = function(e, n, t) {
  if (!yl(n)) throw Error(g(200));
  return hl(null, e, n, !0, t);
};
we.hydrateRoot = function(e, n, t) {
  if (!Mi(e)) throw Error(g(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = nf;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ef(n, null, e, 1, t ?? null, l, !1, o, i), e[Qe] = n.current, $t(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new ml(n);
};
we.render = function(e, n, t) {
  if (!yl(n)) throw Error(g(200));
  return hl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function(e) {
  if (!yl(e)) throw Error(g(40));
  return e._reactRootContainer ? (Tn(function() {
    hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Qe] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = _i;
we.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!yl(t)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return hl(e, n, t, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function tf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf);
    } catch (e) {
      console.error(e);
    }
}
tf(), ta.exports = we;
var zd = ta.exports, rf, Hu = zd;
rf = Hu.createRoot, Hu.hydrateRoot;
const Ql = {
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
}, Wu = ({ options: e, value: n, onChange: t }) => {
  const [r, l] = re.useState(!1), [o, i] = re.useState(""), u = re.useRef(null);
  re.useEffect(() => {
    const m = (y) => {
      u.current && !u.current.contains(y.target) && l(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const a = e.filter((m) => {
    const y = Ql[m] || { name: m }, p = o.toLowerCase();
    return m.toLowerCase().includes(p) || y.name.toLowerCase().includes(p);
  }), f = Ql[n] || { name: n, symbol: n, flag: "🌍" };
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: "custom-dropdown",
      ref: u,
      style: { position: "relative", width: "140px", flexShrink: 0 },
      children: [
        /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: "dropdown-trigger",
            onClick: () => l(!r),
            style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", cursor: "pointer", height: "100%" },
            children: [
              /* @__PURE__ */ P.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ P.jsxs("span", { style: { fontWeight: 600, fontSize: "1.05rem", color: "#fafafa" }, children: [
                  f.flag,
                  " ",
                  n
                ] }),
                /* @__PURE__ */ P.jsx("span", { style: { fontSize: "0.65rem", color: "#a1a1aa", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "70px", marginTop: "2px" }, children: f.name })
              ] }),
              /* @__PURE__ */ P.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                /* @__PURE__ */ P.jsx("span", { style: { fontWeight: 500, color: "#71717a" }, children: f.symbol }),
                /* @__PURE__ */ P.jsx("svg", { style: { transition: "transform 0.2s", transform: r ? "rotate(180deg)" : "none", color: "#52525b" }, width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ P.jsx("polyline", { points: "6 9 12 15 18 9" }) })
              ] })
            ]
          }
        ),
        r && /* @__PURE__ */ P.jsxs(
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
              /* @__PURE__ */ P.jsx("div", { style: { padding: "8px", borderBottom: "1px solid #27272a" }, children: /* @__PURE__ */ P.jsx(
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
              /* @__PURE__ */ P.jsx("ul", { style: {
                listStyle: "none",
                margin: 0,
                padding: 0,
                maxHeight: "300px",
                overflowY: "auto",
                display: "block"
                // Bulletproof
              }, children: a.length > 0 ? a.map((m) => {
                const y = Ql[m] || { name: m, symbol: m, flag: "🌍" };
                return /* @__PURE__ */ P.jsxs(
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
                      /* @__PURE__ */ P.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                        /* @__PURE__ */ P.jsxs("span", { style: { fontWeight: 600, color: "#fafafa", fontSize: "0.95rem" }, children: [
                          y.flag,
                          " ",
                          m
                        ] }),
                        /* @__PURE__ */ P.jsx("span", { style: { fontSize: "0.7rem", color: "#a1a1aa" }, children: y.name })
                      ] }),
                      /* @__PURE__ */ P.jsx("span", { style: { fontWeight: 500, color: "#a1a1aa", fontSize: "0.8rem", background: "#27272a", padding: "2px 6px", borderRadius: "4px" }, children: y.symbol })
                    ]
                  },
                  m
                );
              }) : /* @__PURE__ */ P.jsx("li", { style: { padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }, children: "No results found" }) })
            ]
          }
        )
      ]
    }
  );
}, Rd = (e, n) => {
  if (!e) return null;
  let t = e.parentNode;
  for (; t; ) {
    if (t.classList && t.classList.contains(n)) return t;
    t = t.parentNode;
  }
  return null;
}, vr = (e, n) => {
  if (!e) return null;
  for (let t = 0; t < e.children.length; t++)
    if (e.children[t].classList.contains(n)) return e.children[t];
  return null;
};
function Md(e, n) {
  re.useLayoutEffect(() => {
    if (n !== "obsidian") return;
    const t = e.current;
    if (!t) return;
    const r = Rd(t, "workspace-leaf");
    if (!r) return;
    const l = vr(r, "workspace-leaf-content");
    l && (l.style.padding = "0", l.style.margin = "0", l.style.overflow = "hidden", l.style.display = "flex", l.style.flexDirection = "column");
    const o = vr(l, "view-content");
    if (o) {
      o.style.padding = "0", o.style.margin = "0", o.style.overflow = "hidden";
      const u = vr(o, "markdown-reading-view");
      u && (u.style.display = "none"), o.appendChild(t);
    }
    const i = document.querySelector(".status-bar");
    return i && (i.style.display = "none"), () => {
      i && (i.style.display = ""), l && (l.style = "");
      const u = vr(o, "markdown-reading-view");
      u && (u.style.display = "");
    };
  }, [n]);
}
const Fd = ({ children: e }) => /* @__PURE__ */ P.jsx("div", { className: "agent-layer-safe-zone", style: { width: "100%", height: "100%" }, children: e }), Od = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 150.5,
  AUD: 1.53,
  CAD: 1.35,
  CHF: 0.88,
  CNY: 7.19,
  INR: 82.9
}, jd = ({ platform: e = "obsidian", dc: n }) => {
  const t = re.useRef(null);
  Md(t, e);
  const [r, l] = re.useState(Od), [o, i] = re.useState(null), [u, a] = re.useState(!0), [f, m] = re.useState(!1), [y, p] = re.useState("USD"), [v, S] = re.useState("EUR"), [E, F] = re.useState("1.00");
  re.useEffect(() => {
    const w = localStorage.getItem("datacore_currency_rates");
    if (w)
      try {
        const x = JSON.parse(w);
        x.rates && l(x.rates), x.timestamp && i(new Date(x.timestamp));
      } catch (x) {
        console.error("Cache parsing error", x);
      }
    c(), s();
    const k = () => a(navigator.onLine);
    return window.addEventListener("online", k), window.addEventListener("offline", k), a(navigator.onLine), () => {
      window.removeEventListener("online", k), window.removeEventListener("offline", k);
    };
  }, []);
  const c = async () => {
    var w;
    if (e === "obsidian" && ((w = n == null ? void 0 : n.io) != null && w.write))
      try {
        await n.io.write("_resources/data/mcp_state.json", JSON.stringify({
          component: "CurrencyConverter",
          status: "active",
          lastHeartbeat: (/* @__PURE__ */ new Date()).toISOString()
        }, null, 2));
      } catch (k) {
        console.error("MCP update failed", k);
      }
  }, s = async () => {
    if (!navigator.onLine) {
      a(!1);
      return;
    }
    m(!0);
    try {
      let w = null;
      try {
        const k = await fetch("http://localhost:3457/api/rates");
        if (k.ok) {
          const x = await k.json();
          x && x.rates && (w = x.rates);
        }
      } catch {
        console.log("Sovereign sidecar unavailable, falling back to public API...");
      }
      if (!w) {
        const x = await (await fetch("https://open.er-api.com/v6/latest/USD")).json();
        x && x.rates && (w = x.rates);
      }
      if (w) {
        l(w);
        const k = Date.now();
        i(new Date(k)), localStorage.setItem("datacore_currency_rates", JSON.stringify({
          rates: w,
          timestamp: k
        }));
      }
    } catch (w) {
      console.error("Failed to sync rates", w);
    } finally {
      m(!1);
    }
  }, d = () => {
    p(v), S(y);
  }, h = () => {
    const w = parseFloat(E);
    if (isNaN(w)) return "0.00";
    const k = r[y] || 1, x = r[v] || 1;
    return (w / k * x).toFixed(2);
  }, C = Object.keys(r).sort();
  return /* @__PURE__ */ P.jsx(Fd, { children: /* @__PURE__ */ P.jsx("div", { className: "currency-app", ref: t, children: /* @__PURE__ */ P.jsxs("div", { className: "glass-card", children: [
    /* @__PURE__ */ P.jsx("div", { className: `status-badge ${u ? "online" : "offline"}`, children: u ? "ONLINE" : "OFFLINE MODE" }),
    /* @__PURE__ */ P.jsx("h1", { className: "currency-title", children: "CONVERT" }),
    /* @__PURE__ */ P.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ P.jsx("label", { children: "From" }),
      /* @__PURE__ */ P.jsxs("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ P.jsx(
          Wu,
          {
            options: C,
            value: y,
            onChange: p
          }
        ),
        /* @__PURE__ */ P.jsx(
          "input",
          {
            className: "currency-input",
            type: "number",
            value: E,
            onChange: (w) => F(w.target.value),
            placeholder: "0.00"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "swap-btn", onClick: d, children: /* @__PURE__ */ P.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ P.jsx("polyline", { points: "16 3 21 3 21 8" }),
      /* @__PURE__ */ P.jsx("line", { x1: "4", y1: "21", x2: "21", y2: "3" }),
      /* @__PURE__ */ P.jsx("polyline", { points: "21 16 21 21 16 21" }),
      /* @__PURE__ */ P.jsx("line", { x1: "15", y1: "15", x2: "21", y2: "21" }),
      /* @__PURE__ */ P.jsx("line", { x1: "4", y1: "4", x2: "9", y2: "9" })
    ] }) }),
    /* @__PURE__ */ P.jsxs("div", { className: "input-group", children: [
      /* @__PURE__ */ P.jsx("label", { children: "To" }),
      /* @__PURE__ */ P.jsxs("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ P.jsx(
          Wu,
          {
            options: C,
            value: v,
            onChange: S
          }
        ),
        /* @__PURE__ */ P.jsx(
          "input",
          {
            className: "currency-input",
            type: "text",
            value: h(),
            readOnly: !0,
            style: { color: "#fafafa" }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("button", { className: "sync-btn", onClick: s, disabled: f, children: f ? "SYNCING..." : "SYNC RATES" }),
    o && /* @__PURE__ */ P.jsxs("div", { className: "last-updated", children: [
      "Last synced: ",
      o.toLocaleTimeString()
    ] })
  ] }) }) });
};
async function Id(e, n) {
  const t = rf(e);
  return t.render(/* @__PURE__ */ P.jsx(jd, { dc: n, platform: "obsidian" })), function() {
    t.unmount();
  };
}
export {
  Id as mount_app
};
