// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = M;
exports.hydrate = O;
exports.h = exports.createElement = v;
exports.Fragment = p;
exports.createRef = y;
exports.Component = d;
exports.cloneElement = S;
exports.createContext = q;
exports.toChildArray = b;
exports.__u = I;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return h(n, o, l && l.key, l && l.ref, null);
}

function h(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o
  };
  return null == o && (r.__v = r), n.vnode && n.vnode(r), r;
}

function y() {
  return {
    current: null
  };
}

function p(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function _(n, l) {
  if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? _(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}

function m() {
  for (var n; m.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r, f;
    n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = i, t = T(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == r ? _(o) : r), $(u, o), t != r && w(o)));
  });
}

function g(n, l, u, i, t, o, r, c, s, v) {
  var y,
      d,
      w,
      k,
      m,
      g,
      b,
      A = i && i.__k || e,
      P = A.length;

  for (s == f && (s = null != r ? r[0] : P ? _(i, 0) : null), u.__k = [], y = 0; y < l.length; y++) if (null != (k = u.__k[y] = null == (k = l[y]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? h(null, k, null, null, k) : Array.isArray(k) ? h(p, {
    children: k
  }, null, null, null) : null != k.__e || null != k.__c ? h(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (w = A[y]) || w && k.key == w.key && k.type === w.type) A[y] = void 0;else for (d = 0; d < P; d++) {
      if ((w = A[d]) && k.key == w.key && k.type === w.type) {
        A[d] = void 0;
        break;
      }

      w = null;
    }
    m = T(n, k, w = w || f, t, o, r, c, s, v), (d = k.ref) && w.ref != d && (b || (b = []), w.ref && b.push(w.ref, null, k), b.push(d, k.__c || m, k)), null != m ? (null == g && (g = m), s = x(n, k, w, A, r, m, s), v || "option" != u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && w.__e == s && s.parentNode != n && (s = _(w));
  }

  if (u.__e = g, null != r && "function" != typeof u.type) for (y = r.length; y--;) null != r[y] && a(r[y]);

  for (y = P; y--;) null != A[y] && I(A[y], A[y]);

  if (b) for (y = 0; y < b.length; y++) H(b[y], b[++y], b[++y]);
}

function b(n) {
  return null == n || "boolean" == typeof n ? [] : Array.isArray(n) ? e.concat.apply([], n.map(b)) : [n];
}

function x(n, l, u, i, t, o, r) {
  var f, e, c;
  if (void 0 !== l.__d) f = l.__d, l.__d = void 0;else if (t == u || o != r || null == o.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(o), f = null;else {
    for (e = r, c = 0; (e = e.nextSibling) && c < i.length; c += 2) if (e == o) break n;

    n.insertBefore(o, r), f = r;
  }
  return void 0 !== f ? f : o.nextSibling;
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function C(n, l, u, i, t) {
  var o, r, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (e in i) u && e in u || P(o, e, "");
      if (u) for (c in u) i && u[c] === i[c] || P(o, c, u[c]);
    }
  } else "o" === l[0] && "n" === l[1] ? (r = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, N, r), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, r)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && "download" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function z(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, t.__e && ("function" == typeof t.type && t.__k.length > 1 && z(t, l, u), l = x(u, t, t, n.__k, null, t.__e, l), "function" == typeof n.type && (n.__d = l)));
}

function T(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      y,
      _,
      w,
      k,
      m,
      b,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (m = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(m, x) : (u.__c = v = new d(m, x), v.constructor = P, v.render = L), b && b.sub(v), v.props = m, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(m, v.__s))), y = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && m !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(m, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(m, v.__s, x) || u.__v === i.__v) {
          v.props = m, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), z(u, e, l);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(m, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, _, w);
        });
      }
      v.context = x, v.props = m, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, _)), A = null != a && a.type == p && null == a.key ? a.props.children : a, g(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, i);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, c = !1;
  }

  if (null === l.type) p !== d && n.data !== d && (n.data = d);else {
    if (null != o && (o = e.slice.call(n.childNodes)), v = (p = u.props || f).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    A(n, d, p, t, c), h ? l.__k = [] : (s = l.props.children, g(n, Array.isArray(s) ? s : [s], l, u, i, "foreignObject" !== l.type && t, o, r, f, c)), c || ("value" in d && void 0 !== (s = d.value) && s !== n.value && C(n, "value", s, p.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && C(n, "checked", s, p.checked, !1));
  }
  return n;
}

function H(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function I(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || H(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && I(t[r], u, i);
  null != o && a(o);
}

function L(n, l, u) {
  return this.constructor(n, u);
}

function M(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(p, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : u.childNodes.length ? e.slice.call(u.childNodes) : null, c, i || f, t), $(c, l);
}

function O(n, l) {
  M(n, l, o);
}

function S(n, l) {
  var u, i;

  for (i in l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), u = {}, l) "key" !== i && "ref" !== i && (u[i] = l[i]);

  return h(n.type, u, l.key || n.key, l.ref || n.ref, null);
}

function q(n) {
  var l = {},
      u = {
    __c: "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (n) {
        t.props.value !== n.value && i.some(function (l) {
          l.context = n.value, k(l);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u.Provider.__ = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return k(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, o = f, r = 0;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/header/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/header/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _preact = require("preact");

require("./style.css");

function Header() {
  return (0, _preact.h)("div", {
    className: "header"
  }, (0, _preact.h)("h1", {
    className: "text-center"
  }, "jrrey"));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","./style.css":"components/header/style.css"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = m;
exports.useReducer = l;
exports.useEffect = p;
exports.useLayoutEffect = y;
exports.useRef = h;
exports.useImperativeHandle = s;
exports.useMemo = _;
exports.useCallback = d;
exports.useContext = A;
exports.useDebugValue = F;
exports.useErrorBoundary = T;

var _preact = require("preact");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = _preact.options.__r,
    f = _preact.options.diffed,
    e = _preact.options.__c,
    a = _preact.options.unmount;

function v(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function m(n) {
  return o = 1, l(k, n);
}

function l(n, r, o) {
  var i = v(t++, 2);
  return i.t = n, i.__c || (i.__c = u, i.__ = [o ? o(r) : k(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }]), i.__;
}

function p(r, o) {
  var i = v(t++, 3);
  !_preact.options.__s && j(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function y(r, o) {
  var i = v(t++, 4);
  !_preact.options.__s && j(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function h(n) {
  return o = 5, _(function () {
    return {
      current: void 0 === n ? null : n
    };
  }, []);
}

function s(n, t, u) {
  o = 6, y(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function _(n, u) {
  var r = v(t++, 7);
  return j(r.__H, u) ? (r.__H = u, r.__h = n, r.__ = n()) : r.__;
}

function d(n, t) {
  return o = 8, _(function () {
    return n;
  }, t);
}

function A(n) {
  var r = u.context[n.__c],
      o = v(t++, 9);
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function F(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function T(n) {
  var r = v(t++, 10),
      o = m();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function q() {
  i.some(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(b), t.__H.__h.forEach(g), t.__H.__h = [];
    } catch (u) {
      return t.__H.__h = [], _preact.options.__e(u, t.__v), !0;
    }
  }), i = [];
}

_preact.options.__r = function (n) {
  c && c(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(b), r.__h.forEach(g), r.__h = []);
}, _preact.options.diffed = function (t) {
  f && f(t);
  var u = t.__c;
  u && u.__H && u.__H.__h.length && (1 !== i.push(u) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), x && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    x && (t = requestAnimationFrame(u));
  })(q));
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(b), t.__h = t.__h.filter(function (n) {
        return !n.__ || g(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), e && e(t, u);
}, _preact.options.unmount = function (t) {
  a && a(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(b);
  } catch (t) {
    _preact.options.__e(t, u.__v);
  }
};
var x = "function" == typeof requestAnimationFrame;

function b(n) {
  "function" == typeof n.u && n.u();
}

function g(n) {
  n.u = n.__();
}

function j(n, t) {
  return !n || t.some(function (t, u) {
    return t !== n[u];
  });
}

function k(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/compat/dist/compat.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true,
  Children: true,
  render: true,
  hydrate: true,
  unmountComponentAtNode: true,
  createPortal: true,
  createFactory: true,
  cloneElement: true,
  isValidElement: true,
  findDOMNode: true,
  PureComponent: true,
  memo: true,
  forwardRef: true,
  unstable_batchedUpdates: true,
  StrictMode: true,
  Suspense: true,
  SuspenseList: true,
  lazy: true,
  createElement: true,
  createContext: true,
  createRef: true,
  Fragment: true,
  Component: true
};
exports.render = Z;
exports.hydrate = I;
exports.unmountComponentAtNode = Y;
exports.createPortal = H;
exports.createFactory = K;
exports.cloneElement = X;
exports.isValidElement = Q;
exports.findDOMNode = nn;
exports.memo = C;
exports.forwardRef = k;
exports.Suspense = j;
exports.SuspenseList = P;
exports.lazy = O;
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _preact.createElement;
  }
});
Object.defineProperty(exports, "createContext", {
  enumerable: true,
  get: function () {
    return _preact.createContext;
  }
});
Object.defineProperty(exports, "createRef", {
  enumerable: true,
  get: function () {
    return _preact.createRef;
  }
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _preact.Component;
  }
});
exports.StrictMode = exports.unstable_batchedUpdates = exports.PureComponent = exports.Children = exports.version = exports.default = void 0;

var _hooks = require("preact/hooks");

Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hooks[key];
    }
  });
});

var _preact = require("preact");

function w(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function x(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

  return !1;
}

var E = function (n) {
  var t, e;

  function r(t) {
    var e;
    return (e = n.call(this, t) || this).isPureReactComponent = !0, e;
  }

  return e = n, (t = r).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, r.prototype.shouldComponentUpdate = function (n, t) {
    return x(this.props, n) || x(this.state, t);
  }, r;
}(_preact.Component);

exports.PureComponent = E;

function C(n, t) {
  function e(n) {
    var e = this.props.ref,
        r = e == n.ref;
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : x(this.props, n);
  }

  function r(t) {
    return this.shouldComponentUpdate = e, (0, _preact.createElement)(n, t);
  }

  return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.t = !0, r;
}

var _ = _preact.options.__b;

_preact.options.__b = function (n) {
  n.type && n.type.t && n.ref && (n.props.ref = n.ref, n.ref = null), _ && _(n);
};

var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function k(n) {
  function t(t, e) {
    var r = w({}, t);
    return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
  }

  return t.$$typeof = A, t.render = t, t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}

var R = function (n, t) {
  return n ? (0, _preact.toChildArray)(n).reduce(function (n, e, r) {
    return n.concat(t(e, r));
  }, []) : null;
},
    F = {
  map: R,
  forEach: R,
  count: function (n) {
    return n ? (0, _preact.toChildArray)(n).length : 0;
  },
  only: function (n) {
    if (1 !== (n = (0, _preact.toChildArray)(n)).length) throw new Error("Children.only() expects only one child.");
    return n[0];
  },
  toArray: _preact.toChildArray
},
    N = _preact.options.__e;

exports.Children = F;

function U(n) {
  return n && ((n = w({}, n)).__c = null, n.__k = n.__k && n.__k.map(U)), n;
}

function M(n) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(M)), n;
}

function j() {
  this.__u = 0, this.o = null, this.__b = null;
}

function L(n) {
  var t = n.__.__c;
  return t && t.u && t.u(n);
}

function O(n) {
  var t, e, r;

  function o(o) {
    if (t || (t = n()).then(function (n) {
      e = n.default || n;
    }, function (n) {
      r = n;
    }), r) throw r;
    if (!e) throw t;
    return (0, _preact.createElement)(e, o);
  }

  return o.displayName = "Lazy", o.t = !0, o;
}

function P() {
  this.i = null, this.l = null;
}

_preact.options.__e = function (n, t, e) {
  if (n.then) for (var r, o = t; o = o.__;) if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t.__c);
  N(n, t, e);
}, (j.prototype = new _preact.Component()).__c = function (n, t) {
  var e = this;
  null == e.o && (e.o = []), e.o.push(t);

  var r = L(e.__v),
      o = !1,
      u = function () {
    o || (o = !0, t.componentWillUnmount = t.__c, r ? r(i) : i());
  };

  t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
    u(), t.__c && t.__c();
  };

  var i = function () {
    var n;
    if (! --e.__u) for (e.__v.__k[0] = M(e.state.u), e.setState({
      u: e.__b = null
    }); n = e.o.pop();) n.forceUpdate();
  };

  e.__u++ || e.setState({
    u: e.__b = e.__v.__k[0]
  }), n.then(u, u);
}, j.prototype.componentWillUnmount = function () {
  this.o = [];
}, j.prototype.render = function (n, t) {
  return this.__b && (this.__v.__k && (this.__v.__k[0] = U(this.__b)), this.__b = null), [(0, _preact.createElement)(_preact.Fragment, null, t.u ? null : n.children), t.u && n.fallback];
};

var W = function (n, t, e) {
  if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.i = e = e[2];
  }
};

(P.prototype = new _preact.Component()).u = function (n) {
  var t = this,
      e = L(t.__v),
      r = t.l.get(n);
  return r[0]++, function (o) {
    var u = function () {
      t.props.revealOrder ? (r.push(o), W(t, n, r)) : o();
    };

    e ? e(u) : u();
  };
}, P.prototype.render = function (n) {
  this.i = null, this.l = new Map();
  var t = (0, _preact.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.l.set(t[e], this.i = [1, 0, this.i]);

  return n.children;
}, P.prototype.componentDidUpdate = P.prototype.componentDidMount = function () {
  var n = this;
  n.l.forEach(function (t, e) {
    W(n, e, t);
  });
};

var z = function () {
  function n() {}

  var t = n.prototype;
  return t.getChildContext = function () {
    return this.props.context;
  }, t.render = function (n) {
    return n.children;
  }, n;
}();

function D(n) {
  var t = this,
      e = n.container,
      r = (0, _preact.createElement)(z, {
    context: t.context
  }, n.vnode);
  return t.s && t.s !== e && (t.h.parentNode && t.s.removeChild(t.h), (0, _preact.__u)(t.v), t.p = !1), n.vnode ? t.p ? (e.__k = t.__k, (0, _preact.render)(r, e), t.__k = e.__k) : (t.h = document.createTextNode(""), (0, _preact.hydrate)("", e), e.appendChild(t.h), t.p = !0, t.s = e, (0, _preact.render)(r, e, t.h), t.__k = t.h.__k) : t.p && (t.h.parentNode && t.s.removeChild(t.h), (0, _preact.__u)(t.v)), t.v = r, t.componentWillUnmount = function () {
    t.h.parentNode && t.s.removeChild(t.h), (0, _preact.__u)(t.v);
  }, null;
}

function H(n, t) {
  return (0, _preact.createElement)(D, {
    vnode: n,
    container: t
  });
}

var T = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
_preact.Component.prototype.isReactComponent = {};
var V = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

function Z(n, t, e) {
  if (null == t.__k) for (; t.firstChild;) t.removeChild(t.firstChild);
  return (0, _preact.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function I(n, t, e) {
  return (0, _preact.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

var $ = _preact.options.event;

function q(n, t) {
  n["UNSAFE_" + t] && !n[t] && Object.defineProperty(n, t, {
    configurable: !1,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (n) {
      this["UNSAFE_" + t] = n;
    }
  });
}

_preact.options.event = function (n) {
  $ && (n = $(n)), n.persist = function () {};
  var t = !1,
      e = !1,
      r = n.stopPropagation;

  n.stopPropagation = function () {
    r.call(n), t = !0;
  };

  var o = n.preventDefault;
  return n.preventDefault = function () {
    o.call(n), e = !0;
  }, n.isPropagationStopped = function () {
    return t;
  }, n.isDefaultPrevented = function () {
    return e;
  }, n.nativeEvent = n;
};

var B = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    G = _preact.options.vnode;

_preact.options.vnode = function (n) {
  n.$$typeof = V;
  var t = n.type,
      e = n.props;

  if (t) {
    if (e.class != e.className && (B.enumerable = "className" in e, null != e.className && (e.class = e.className), Object.defineProperty(e, "className", B)), "function" != typeof t) {
      var r, o, u;

      for (u in e.defaultValue && void 0 !== e.value && (e.value || 0 === e.value || (e.value = e.defaultValue), delete e.defaultValue), Array.isArray(e.value) && e.multiple && "select" === t && ((0, _preact.toChildArray)(e.children).forEach(function (n) {
        -1 != e.value.indexOf(n.props.value) && (n.props.selected = !0);
      }), delete e.value), !0 === e.download && (e.download = ""), e) if (r = T.test(u)) break;

      if (r) for (u in o = n.props = {}, e) o[T.test(u) ? u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u] = e[u];
    }

    !function (t) {
      var e = n.type,
          r = n.props;

      if (r && "string" == typeof e) {
        var o = {};

        for (var u in r) /^on(Ani|Tra|Tou)/.test(u) && (r[u.toLowerCase()] = r[u], delete r[u]), o[u.toLowerCase()] = u;

        if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
          var i = o.oninput || "oninput";
          r[i] || (r[i] = r[o.onchange], delete r[o.onchange]);
        }
      }
    }(), "function" == typeof t && !t.m && t.prototype && (q(t.prototype, "componentWillMount"), q(t.prototype, "componentWillReceiveProps"), q(t.prototype, "componentWillUpdate"), t.m = !0);
  }

  G && G(n);
};

var J = "16.8.0";
exports.version = J;

function K(n) {
  return _preact.createElement.bind(null, n);
}

function Q(n) {
  return !!n && n.$$typeof === V;
}

function X(n) {
  return Q(n) ? _preact.cloneElement.apply(null, arguments) : n;
}

function Y(n) {
  return !!n.__k && ((0, _preact.render)(null, n), !0);
}

function nn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}

var tn = function (n, t) {
  return n(t);
},
    en = _preact.Fragment;

exports.StrictMode = en;
exports.unstable_batchedUpdates = tn;
var _default = {
  useState: _hooks.useState,
  useReducer: _hooks.useReducer,
  useEffect: _hooks.useEffect,
  useLayoutEffect: _hooks.useLayoutEffect,
  useRef: _hooks.useRef,
  useImperativeHandle: _hooks.useImperativeHandle,
  useMemo: _hooks.useMemo,
  useCallback: _hooks.useCallback,
  useContext: _hooks.useContext,
  useDebugValue: _hooks.useDebugValue,
  version: "16.8.0",
  Children: F,
  render: Z,
  hydrate: I,
  unmountComponentAtNode: Y,
  createPortal: H,
  createElement: _preact.createElement,
  createContext: _preact.createContext,
  createFactory: K,
  cloneElement: X,
  createRef: _preact.createRef,
  Fragment: _preact.Fragment,
  isValidElement: Q,
  findDOMNode: nn,
  Component: _preact.Component,
  PureComponent: E,
  memo: C,
  forwardRef: k,
  unstable_batchedUpdates: tn,
  StrictMode: _preact.Fragment,
  Suspense: j,
  SuspenseList: P,
  lazy: O
};
exports.default = _default;
},{"preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","preact":"../node_modules/preact/dist/preact.module.js"}],"public/images/close.svg":[function(require,module,exports) {
module.exports = "/close.a2fa775a.svg";
},{}],"public/images/microphone.svg":[function(require,module,exports) {
module.exports = "/microphone.fad5cf5d.svg";
},{}],"components/float-menu/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/float-menu/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FloatMenu;

var _preact = require("preact");

var _compat = require("preact/compat");

var _close = _interopRequireDefault(require("../../public/images/close.svg"));

var _microphone = _interopRequireDefault(require("../../public/images/microphone.svg"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FloatMenu(_ref) {
  var onToggle = _ref.onToggle;

  var _useState = (0, _compat.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActivateMicrophone = _useState2[0],
      setisActivateMicrophone = _useState2[1];

  var toggleisActivateMicrophone = function toggleisActivateMicrophone() {
    return setisActivateMicrophone(!isActivateMicrophone);
  };

  (0, _compat.useEffect)(function () {
    if (typeof onToggle === 'function') {
      onToggle(isActivateMicrophone);
    }
  }, [isActivateMicrophone]);
  return (0, _preact.h)("div", {
    id: "float-menu-container"
  }, isActivateMicrophone ? (0, _preact.h)("img", {
    src: _close.default,
    alt: "close",
    width: "50",
    height: "50",
    onClick: toggleisActivateMicrophone
  }) : (0, _preact.h)("img", {
    src: _microphone.default,
    alt: "microphone",
    width: "50",
    height: "50",
    onClick: toggleisActivateMicrophone
  }));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/compat":"../node_modules/preact/compat/dist/compat.module.js","../../public/images/close.svg":"public/images/close.svg","../../public/images/microphone.svg":"public/images/microphone.svg","./style.css":"components/float-menu/style.css"}],"../dist/jrrey.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "B8pU": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if ("function" != typeof t) throw TypeError("callback must be a function");
    }

    function e(t) {
      if ("string" != typeof t) throw TypeError("event must be a string");
    }

    function r(t) {
      if ("string" != typeof t && !(t instanceof RegExp)) throw TypeError("command must be either string or regex");
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.assertFunction = t, exports.assertString = e, exports.assertStringOrRegExp = r;
  }, {}],
  "FTwz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.parseTranscripts = u, exports.parseCommands = s;

    var r = require("./assert");

    function t(r, t) {
      return i(r) || o(r, t) || n(r, t) || e();
    }

    function e() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function n(r, t) {
      if (r) {
        if ("string" == typeof r) return a(r, t);
        var e = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === e && r.constructor && (e = r.constructor.name), "Map" === e || "Set" === e ? Array.from(r) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(r, t) : void 0;
      }
    }

    function a(r, t) {
      (null == t || t > r.length) && (t = r.length);

      for (var e = 0, n = new Array(t); e < t; e++) {
        n[e] = r[e];
      }

      return n;
    }

    function o(r, t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) {
        var e = [],
            n = !0,
            a = !1,
            o = void 0;

        try {
          for (var i, u = r[Symbol.iterator](); !(n = (i = u.next()).done) && (e.push(i.value), !t || e.length !== t); n = !0) {
            ;
          }
        } catch (s) {
          a = !0, o = s;
        } finally {
          try {
            n || null == u.return || u.return();
          } finally {
            if (a) throw o;
          }
        }

        return e;
      }
    }

    function i(r) {
      if (Array.isArray(r)) return r;
    }

    function u(r) {
      return Array.from(r.results[r.resultIndex]).map(function (r) {
        return r.transcript;
      });
    }

    function s(e) {
      var n = [];
      return Array.isArray(e) ? (e.forEach(function (e) {
        if (!Array.isArray(e)) throw Error("commands should be a zipped array e.g [ [command, callback] ]");
        var a = t(e, 2),
            o = a[0],
            i = a[1];
        (0, r.assertStringOrRegExp)(o), (0, r.assertFunction)(i), n.push({
          phrase: o,
          callback: i
        });
      }), n) : n;
    }
  }, {
    "./assert": "B8pU"
  }],
  "zq8S": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var t = require("./parser");

    function e(t, e) {
      return o(t) || r(t, e) || a(t, e) || n();
    }

    function n() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function r(t, e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;

        try {
          for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {
            ;
          }
        } catch (s) {
          o = !0, i = s;
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (o) throw i;
          }
        }

        return n;
      }
    }

    function o(t) {
      if (Array.isArray(t)) return t;
    }

    function i(t, e) {
      var _n;

      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (_n = a(t)) || e && t && "number" == typeof t.length) {
          _n && (t = _n);

          var r = 0,
              o = function o() {};

          return {
            s: o,
            n: function n() {
              return r >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[r++]
              };
            },
            e: function e(t) {
              throw t;
            },
            f: o
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var i,
          u = !0,
          s = !1;
      return {
        s: function s() {
          _n = t[Symbol.iterator]();
        },
        n: function n() {
          var t = _n.next();

          return u = t.done, t;
        },
        e: function e(t) {
          s = !0, i = t;
        },
        f: function f() {
          try {
            u || null == _n.return || _n.return();
          } finally {
            if (s) throw i;
          }
        }
      };
    }

    function a(t, e) {
      if (t) {
        if ("string" == typeof t) return u(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
      }
    }

    function u(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, r = new Array(e); n < e; n++) {
        r[n] = t[n];
      }

      return r;
    }

    function s(t) {
      var e = this;
      if (this.keepAlive && "end" === t.type && this.listeningSince) Date.now() - Number(this.listeningSince) < 1e3 ? window.setTimeout(function () {
        return e.start();
      }, 1e3) : this.start();else switch (t.type) {
        case "result":
          return void l.call(this, t);

        default:
          var n = this.events[t.type];
          "function" == typeof n && n(t);
      }
    }

    function l(n) {
      var r = this,
          o = (0, t.parseTranscripts)(n);
      "cmd" === this.mode ? function () {
        for (var t = new Map(), n = function n(e) {
          var n = o[e].trim();
          r.commands.forEach(function (e, r) {
            var o = e.phrase instanceof RegExp ? e.phrase.exec(n) : e.phrase === n ? n : null;
            o && t.set(r, t.get(r) || []).get(r).push(o);
          });
        }, a = 0; a < o.length; a++) {
          n(a);
        }

        if (t.size) {
          var u,
              s = i(t.entries());

          try {
            for (s.s(); !(u = s.n()).done;) {
              var l = e(u.value, 2),
                  c = l[0],
                  f = l[1];
              r.commands[c].callback(f);
            }
          } catch (y) {
            s.e(y);
          } finally {
            s.f();
          }
        } else "function" == typeof r.events.fallback && r.events.fallback();
      }() : "function" == typeof this.events.dictate && this.events.dictate(o);
    }
  }, {
    "./parser": "FTwz"
  }],
  "vID4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = Object.freeze({
      lang: "en-US",
      continuous: !0,
      interimResults: !1,
      maxAlternatives: 3
    });
    exports.default = e;
  }, {}],
  "aI0n": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = o(require("../constants/speech-recognition-options"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;
    if (!i) throw Error("SpeechRecognition not supported in this browser");
    var n = new i();
    Object.assign(n, e.default);
    var t = n;
    exports.default = t;
  }, {
    "../constants/speech-recognition-options": "vID4"
  }],
  "zhXm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = ["start", "end", "audiostart", "audioend", "speechstart", "speechend", "result", "error", "nomatch"];
    exports.default = e;
  }, {}],
  "UXGH": [function (require, module, exports) {
    "use strict";

    var e = require("./utils/assert"),
        t = require("./utils/parser"),
        n = s(require("./utils/speech-event-handlers")),
        r = s(require("./utils/speech-recognition")),
        i = s(require("./constants/speech-events"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && u(e.prototype, t), n && u(e, n), e;
    }

    var l = Symbol(),
        c =
    /* */
    function () {
      function s() {
        a(this, s);
      }

      return o(s, [{
        key: "init",
        value: function value() {
          var e = this,
              s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (this.listeningSince) throw Error("an instance of jrrey is already running");
          return this.events = s.events || {}, this.commands = (0, t.parseCommands)(s.commands), this.mode = s.mode || "cmd", this.keepAlive = s.keepAlive || !0, this[l] = n.default.bind(this), i.default.forEach(function (t) {
            return r.default.addEventListener(t, e[l]);
          }), this;
        }
      }, {
        key: "start",
        value: function value() {
          return this.listeningSince = Date.now(), r.default.abort(), r.default.start(), this;
        }
      }, {
        key: "stop",
        value: function value() {
          return this.listeningSince = null, r.default.stop(), this;
        }
      }, {
        key: "onEvent",
        value: function value(t, n) {
          return (0, e.assertString)(t), (0, e.assertFunction)(n), this.events[t] = n, this;
        }
      }, {
        key: "offEvent",
        value: function value(t) {
          return t ? ((0, e.assertString)(t), delete this.events[t]) : this.events = {}, this;
        }
      }, {
        key: "onCommand",
        value: function value(t, n) {
          return (0, e.assertStringOrRegExp)(t), (0, e.assertFunction)(n), this.commands.push({
            phrase: t,
            callback: n
          }), this;
        }
      }, {
        key: "offCommand",
        value: function value(t) {
          return t ? ((0, e.assertStringOrRegExp)(t), this.commands = this.commands.filter(function (e) {
            return String(e.phrase) !== String(t);
          })) : this.commands = [], this;
        }
      }]), s;
    }();

    module.exports = new c();
  }, {
    "./utils/assert": "B8pU",
    "./utils/parser": "FTwz",
    "./utils/speech-event-handlers": "zq8S",
    "./utils/speech-recognition": "aI0n",
    "./constants/speech-events": "zhXm"
  }]
}, {}, ["UXGH"], "$j");
},{}],"utils/jrrey.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jrrey = _interopRequireDefault(require("../../dist/jrrey.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jrrey.default.init({});

var _default = _jrrey.default;
exports.default = _default;
},{"../../dist/jrrey.js":"../dist/jrrey.js"}],"components/notes/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Notes;

var _preact = require("preact");

var _compat = require("preact/compat");

var _jrrey = _interopRequireDefault(require("../../utils/jrrey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Notes(_ref) {
  var _this = this;

  var isJrreyListening = _ref.isJrreyListening;

  var _useState = (0, _compat.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTakingNotes = _useState2[0],
      setIsTakingNotes = _useState2[1];

  var _useState3 = (0, _compat.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      notes = _useState4[0],
      setNotes = _useState4[1];

  var prevNotes = (0, _compat.useRef)(notes);

  var dictateHandler = function dictateHandler(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        sentence = _ref3[0];

    var isStopTakingNotesCommand = sentence.trim() === 'stop taking notes';

    if (isStopTakingNotesCommand) {
      setIsTakingNotes(false);
    } else {
      prevNotes.current += sentence;
      setNotes(prevNotes.current.trim());
    }
  };

  (0, _compat.useEffect)(function () {
    _jrrey.default.onCommand(/take notes/, function () {
      return setIsTakingNotes(_this.props.isJrreyListening);
    });

    _jrrey.default.onEvent('dictate', dictateHandler);
  }, []);
  (0, _compat.useEffect)(function () {
    if (!isJrreyListening) {
      setIsTakingNotes(false);
    }
  }, [isJrreyListening]);
  (0, _compat.useEffect)(function () {
    _jrrey.default.mode = isTakingNotes ? 'dictate' : 'cmd';
  }, [isTakingNotes]);
  return (0, _preact.h)("div", {
    className: "col-12"
  }, (0, _preact.h)("p", {
    className: "".concat(isJrreyListening ? '' : 'strike')
  }, "Try saying ", (0, _preact.h)("span", {
    class: "font-weight-bold font-italic"
  }, isTakingNotes ? 'stop taking notes' : 'take notes')), (0, _preact.h)("textarea", {
    className: "form-control not-allowed",
    rows: "10",
    readonly: true,
    placeholder: isJrreyListening ? isTakingNotes ? 'Start speaking...' : 'Waiting for command...' : 'Turn on the mic...'
  }, notes));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/compat":"../node_modules/preact/compat/dist/compat.module.js","../../utils/jrrey":"utils/jrrey.js"}],"constants/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoCommands = exports.menuItems = void 0;
var menuItems = ['All', 'Active', 'Completed'];
exports.menuItems = menuItems;
var todoCommands = ['show all items', 'show active items', 'show completed items', 'new item :item_name', 'complete item :item_id'];
exports.todoCommands = todoCommands;
},{}],"components/todo/item/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;

var _preact = require("preact");

function Item(_ref) {
  var item = _ref.item;
  return (0, _preact.h)("li", {
    className: "".concat(item.isCompleted ? 'completed' : '')
  }, (0, _preact.h)("span", {
    className: "todo-id"
  }, item.id, "."), " ", (0, _preact.h)("input", {
    type: "checkbox",
    checked: item.isCompleted
  }), " ", (0, _preact.h)("span", {
    className: "".concat(item.isCompleted ? 'strike' : '')
  }, item.name));
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"constants/todos.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  id: 1,
  name: 'pay bills',
  isCompleted: false,
  createdAt: Date.now()
}, {
  id: 2,
  name: 'play llamas in Pyjamas',
  isCompleted: true,
  createdAt: Date.now()
}, {
  id: 3,
  name: 'work hard at gym',
  isCompleted: false,
  createdAt: Date.now()
}];
exports.default = _default;
},{}],"components/todo/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/todo/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Notes;

var _preact = require("preact");

var _constants = require("../../constants");

var _compat = require("preact/compat");

var _item = _interopRequireDefault(require("./item"));

var _jrrey = _interopRequireDefault(require("../../utils/jrrey"));

var _todos = _interopRequireDefault(require("../../constants/todos"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Notes(_ref) {
  var isJrreyListening = _ref.isJrreyListening;

  var _useState = (0, _compat.useState)({
    name: 'All',
    options: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useState3 = (0, _compat.useState)(_todos.default),
      _useState4 = _slicedToArray(_useState3, 2),
      todos = _useState4[0],
      setTodos = _useState4[1];

  var isValidTodoIndex = function isValidTodoIndex(index, length) {
    return index > 0 && index <= length;
  };

  var filterTodos = function filterTodos(todos) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return todos.filter(function (todo) {
      for (var _i2 = 0, _Object$entries = Object.entries(option); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (todo[key] !== value || todo[key] === undefined) {
          return false;
        }
      }

      return true;
    });
  };

  var createTodo = function createTodo(id, name) {
    return {
      id: id,
      name: name,
      isCompleted: false,
      createdAt: Date.now()
    };
  };

  var addItem = function addItem(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        phrase = _ref3[0];

    return setTodos(function (currentTodos) {
      return [].concat(_toConsumableArray(currentTodos), [createTodo(currentTodos.length + 1, phrase[1])]);
    });
  };

  var completeItem = function completeItem(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 1),
        phrase = _ref5[0];

    return setTodos(function (currentTodos) {
      if (isValidTodoIndex(phrase[1], currentTodos.length)) {
        currentTodos[phrase[1] - 1].isCompleted = true;
      } else {
        alert('Invalid todo item ID');
      }

      return _toConsumableArray(currentTodos);
    });
  };

  var filteredTodos = filterTodos(todos, filter.options);
  (0, _compat.useEffect)(function () {
    _jrrey.default.onCommand(/new item (.*)/, addItem);

    _jrrey.default.onCommand(/complete item (\d)/, completeItem);

    _jrrey.default.onCommand(/show all items/, function () {
      return setFilter({
        name: 'All',
        options: {}
      });
    });

    _jrrey.default.onCommand(/show active items/, function () {
      return setFilter({
        name: 'Active',
        options: {
          isCompleted: false
        }
      });
    });

    _jrrey.default.onCommand(/show completed items/, function () {
      return setFilter({
        name: 'Completed',
        options: {
          isCompleted: true
        }
      });
    });
  }, []);
  return (0, _preact.h)("div", {
    className: "col-12 mt-3 todos-container"
  }, (0, _preact.h)("div", null, "Todo Commands"), (0, _preact.h)("ul", null, (0, _preact.h)("li", {
    className: "font-weight-bold ".concat(isJrreyListening ? '' : 'strike')
  }, _constants.todoCommands.map(function (todoCommand) {
    return (0, _preact.h)("li", null, todoCommand);
  }))), (0, _preact.h)("div", {
    className: "card mt-3"
  }, (0, _preact.h)("div", {
    className: "card-header"
  }, (0, _preact.h)("ul", {
    className: "nav nav-tabs card-header-tabs"
  }, _constants.menuItems.map(function (menuItem) {
    return (0, _preact.h)("li", {
      className: "nav-item"
    }, (0, _preact.h)("a", {
      className: "nav-link ".concat(menuItem === filter.name ? 'active' : ''),
      href: "#"
    }, menuItem));
  }))), (0, _preact.h)("div", {
    className: "card-body"
  }, filteredTodos.length ? (0, _preact.h)("ul", {
    className: "todos"
  }, filteredTodos.map(function (todo, index) {
    return (0, _preact.h)(_item.default, {
      key: index,
      item: todo
    });
  })) : 'No Todos here yet!')));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","../../constants":"constants/index.js","preact/compat":"../node_modules/preact/compat/dist/compat.module.js","./item":"components/todo/item/index.jsx","../../utils/jrrey":"utils/jrrey.js","../../constants/todos":"constants/todos.js","./style.css":"components/todo/style.css"}],"components/home/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _preact = require("preact");

var _compat = require("preact/compat");

var _floatMenu = _interopRequireDefault(require("../float-menu"));

var _notes = _interopRequireDefault(require("../notes"));

var _todo = _interopRequireDefault(require("../todo"));

var _jrrey = _interopRequireDefault(require("../../utils/jrrey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Home() {
  var _useState = (0, _compat.useState)({
    isJrreyListening: false,
    isBlocked: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isBlocked = state.isBlocked,
      isJrreyListening = state.isJrreyListening;

  var toggleHandler = function toggleHandler(isActivateMicrophone) {
    if (isActivateMicrophone) {
      _jrrey.default.start();
    } else {
      _jrrey.default.stop();
    }
  };

  (0, _compat.useEffect)(function () {
    _jrrey.default.onEvent('fallback', function () {
      return alert('Whoop\'s, wasn\'t expecting that! Please try again.');
    });

    _jrrey.default.onEvent('error', function (e) {
      return setState({
        isJrreyListening: false,
        isBlocked: e.error === 'not-allowed'
      });
    });

    _jrrey.default.onEvent('start', function () {
      return setState({
        isJrreyListening: true,
        isBlocked: false
      });
    });

    _jrrey.default.onEvent('end', function () {
      return setState({
        isJrreyListening: false,
        isBlocked: false
      });
    });
  }, []);
  return (0, _preact.h)("div", {
    className: "row mt-3"
  }, (0, _preact.h)("div", {
    className: "col-12"
  }, (0, _preact.h)("p", {
    className: "text-center lead"
  }, "A JS SpeechRecognition library"), (0, _preact.h)("p", {
    className: "text-center font-weight-bold lead"
  }, "Mic is\xA0", (0, _preact.h)("span", {
    className: "text-".concat(isBlocked ? 'danger' : isJrreyListening ? 'success' : 'warning')
  }, isBlocked ? 'Blocked' : isJrreyListening ? 'On' : 'Off')), (0, _preact.h)("div", {
    className: "alert alert-warning text-center",
    role: "alert"
  }, "Even though MS Edge claims to support SpeechRecognition, events are not fired, more info at ", (0, _preact.h)("a", {
    href: "https://caniuse.com/#feat=speech-recognition",
    target: "_blank"
  }, "caniuse"), ".")), (0, _preact.h)(_notes.default, {
    isJrreyListening: isJrreyListening
  }), (0, _preact.h)(_todo.default, {
    isJrreyListening: isJrreyListening
  }), (0, _preact.h)(_floatMenu.default, {
    onToggle: toggleHandler
  }));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/compat":"../node_modules/preact/compat/dist/compat.module.js","../float-menu":"components/float-menu/index.jsx","../notes":"components/notes/index.jsx","../todo":"components/todo/index.jsx","../../utils/jrrey":"utils/jrrey.js"}],"public/images/icecream-love.svg":[function(require,module,exports) {
module.exports = "/icecream-love.e4ebd913.svg";
},{}],"components/footer/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _preact = require("preact");

var _icecreamLove = _interopRequireDefault(require("../../public/images/icecream-love.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer() {
  return (0, _preact.h)("div", {
    className: "row mt-5"
  }, (0, _preact.h)("div", {
    className: "col-12"
  }, (0, _preact.h)("footer", null, (0, _preact.h)("p", {
    className: "text-center"
  }, "made with much", (0, _preact.h)("img", {
    alt: "logo",
    src: _icecreamLove.default,
    width: "50",
    height: "50"
  })))));
}
},{"preact":"../node_modules/preact/dist/preact.module.js","../../public/images/icecream-love.svg":"public/images/icecream-love.svg"}],"../node_modules/bootstrap/dist/css/bootstrap.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app.jsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _header = _interopRequireDefault(require("./components/header"));

var _home = _interopRequireDefault(require("./components/home"));

var _footer = _interopRequireDefault(require("./components/footer"));

require("bootstrap/dist/css/bootstrap.min.css");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return (0, _preact.h)("div", null, (0, _preact.h)(_header.default, null), (0, _preact.h)("div", {
    className: "container"
  }, (0, _preact.h)(_home.default, null), (0, _preact.h)(_footer.default, null)));
};

(0, _preact.render)((0, _preact.h)(App, null), document.getElementById('main'));
},{"preact":"../node_modules/preact/dist/preact.module.js","./components/header":"components/header/index.jsx","./components/home":"components/home/index.jsx","./components/footer":"components/footer/index.jsx","bootstrap/dist/css/bootstrap.min.css":"../node_modules/bootstrap/dist/css/bootstrap.min.css","./style.css":"style.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58841" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.jsx"], null)
//# sourceMappingURL=/app.bb735868.js.map