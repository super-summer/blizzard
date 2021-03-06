/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/6.
 */
function FastClick(a) {
  "use strict";
  function b(a, b) {
    return function() {
      return a.apply(b, arguments)
    }
  }

  var c;
  this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, FastClick.notNeeded(a) || (deviceIsAndroid && (a.addEventListener("mouseover", b(this.onMouse, this), !0), a.addEventListener("mousedown", b(this.onMouse, this), !0), a.addEventListener("mouseup", b(this.onMouse, this), !0)), a.addEventListener("click", b(this.onClick, this), !0), a.addEventListener("touchstart", b(this.onTouchStart, this), !1), a.addEventListener("touchmove", b(this.onTouchMove, this), !1), a.addEventListener("touchend", b(this.onTouchEnd, this), !1), a.addEventListener("touchcancel", b(this.onTouchCancel, this), !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
    var e = Node.prototype.removeEventListener;
    "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
  }, a.addEventListener = function(b, c, d) {
    var e = Node.prototype.addEventListener;
    "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
          a.propagationStopped || c(a)
        }), d) : e.call(a, b, c, d)
  }), "function" == typeof a.onclick && (c = a.onclick, a.addEventListener("click", function(a) {
    c(a)
  }, !1), a.onclick = null))
};
!function(a, b) {
  function c(a) {
    return J.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }

  function d(a) {
    if (!sb[a]) {
      var b = G.body, c = J("<" + a + ">").appendTo(b), d = c.css("display");
      c.remove(), ("none" === d || "" === d) && (ob || (ob = G.createElement("iframe"), ob.frameBorder = ob.width = ob.height = 0), b.appendChild(ob), pb && ob.createElement || (pb = (ob.contentWindow || ob.contentDocument).document, pb.write((J.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), pb.close()), c = pb.createElement(a), pb.body.appendChild(c), d = J.css(c, "display"), b.removeChild(ob)), sb[a] = d
    }
    return sb[a]
  }

  function e(a, b) {
    var c = {};
    return J.each(vb.concat.apply([], vb.slice(0, b)), function() {
      c[this] = a
    }), c
  }

  function f() {
    rb = b
  }

  function g() {
    return setTimeout(f, 0), rb = J.now()
  }

  function h() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {
    }
  }

  function i() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {
    }
  }

  function j(a, c) {
    a.dataFilter && (c = a.dataFilter(c, a.dataType));
    var d, e, f, g, h, i, j, k, l = a.dataTypes, m = {}, n = l.length, o = l[0];
    for (d = 1; n > d; d++) {
      if (1 === d)for (e in a.converters)"string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
      if (g = o, o = l[d], "*" === o)o = g; else if ("*" !== g && g !== o) {
        if (h = g + " " + o, i = m[h] || m["* " + o], !i) {
          k = b;
          for (j in m)if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
            j = m[j], j === !0 ? i = k : k === !0 && (i = j);
            break
          }
        }
        !i && !k && J.error("No conversion from " + h.replace(" ", " to ")), i !== !0 && (c = i ? i(c) : k(j(c)))
      }
    }
    return c
  }

  function k(a, c, d) {
    var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
    for (f in k)f in d && (c[k[f]] = d[f]);
    for (; "*" === j[0];)j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
    if (e)for (f in i)if (i[f] && i[f].test(e)) {
      j.unshift(f);
      break
    }
    if (j[0] in d)g = j[0]; else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break
        }
        h || (h = f)
      }
      g = g || h
    }
    return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
  }

  function l(a, b, c, d) {
    if (J.isArray(b))J.each(b, function(b, e) {
      c || Sa.test(a) ? d(a, e) : l(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    }); else if (c || "object" !== J.type(b))d(a, b); else for (var e in b)l(a + "[" + e + "]", b[e], c, d)
  }

  function m(a, c) {
    var d, e, f = J.ajaxSettings.flatOptions || {};
    for (d in c)c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
    e && J.extend(!0, a, e)
  }

  function n(a, c, d, e, f, g) {
    f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
    for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === fb; k > j && (l || !h); j++)h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = n(a, c, d, e, h, g)));
    return (l || !h) && !g["*"] && (h = n(a, c, d, e, "*", g)), h
  }

  function o(a) {
    return function(b, c) {
      if ("string" != typeof b && (c = b, b = "*"), J.isFunction(c))for (var d, e, f, g = b.toLowerCase().split(bb), h = 0, i = g.length; i > h; h++)d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
    }
  }

  function p(a, b, c) {
    var d = "width" === b ? a.offsetWidth : a.offsetHeight, e = "width" === b ? 1 : 0, f = 4;
    if (d > 0) {
      if ("border" !== c)for (; f > e; e += 2)c || (d -= parseFloat(J.css(a, "padding" + Oa[e])) || 0), "margin" === c ? d += parseFloat(J.css(a, c + Oa[e])) || 0 : d -= parseFloat(J.css(a, "border" + Oa[e] + "Width")) || 0;
      return d + "px"
    }
    if (d = Da(a, b), (0 > d || null == d) && (d = a.style[b]), Ka.test(d))return d;
    if (d = parseFloat(d) || 0, c)for (; f > e; e += 2)d += parseFloat(J.css(a, "padding" + Oa[e])) || 0, "padding" !== c && (d += parseFloat(J.css(a, "border" + Oa[e] + "Width")) || 0), "margin" === c && (d += parseFloat(J.css(a, c + Oa[e])) || 0);
    return d + "px"
  }

  function q(a) {
    var b = G.createElement("div");
    return Ca.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
  }

  function r(a) {
    var b = (a.nodeName || "").toLowerCase();
    "input" === b ? s(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), s)
  }

  function s(a) {
    ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
  }

  function t(a) {
    return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
  }

  function u(a, b) {
    var c;
    1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(J.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
  }

  function v(a, b) {
    if (1 === b.nodeType && J.hasData(a)) {
      var c, d, e, f = J._data(a), g = J._data(b, f), h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)for (d = 0, e = h[c].length; e > d; d++)J.event.add(b, c, h[c][d])
      }
      g.data && (g.data = J.extend({}, g.data))
    }
  }

  function w(a, b) {
    return J.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function x(a) {
    var b = oa.split("|"), c = a.createDocumentFragment();
    if (c.createElement)for (; b.length;)c.createElement(b.pop());
    return c
  }

  function y(a, b, c) {
    if (b = b || 0, J.isFunction(b))return J.grep(a, function(a, d) {
      var e = !!b.call(a, d, a);
      return e === c
    });
    if (b.nodeType)return J.grep(a, function(a, d) {
      return a === b === c
    });
    if ("string" == typeof b) {
      var d = J.grep(a, function(a) {
        return 1 === a.nodeType
      });
      if (ka.test(b))return J.filter(b, d, !c);
      b = J.filter(b, d)
    }
    return J.grep(a, function(a, d) {
      return J.inArray(a, b) >= 0 === c
    })
  }

  function z(a) {
    return !a || !a.parentNode || 11 === a.parentNode.nodeType
  }

  function A() {
    return !0
  }

  function B() {
    return !1
  }

  function C(a, b, c) {
    var d = b + "defer", e = b + "queue", f = b + "mark", g = J._data(a, d);
    !(!g || "queue" !== c && J._data(a, e) || "mark" !== c && J._data(a, f) || !setTimeout(function() {
      !J._data(a, e) && !J._data(a, f) && (J.removeData(a, d, !0), g.fire())
    }, 0))
  }

  function D(a) {
    for (var b in a)if (("data" !== b || !J.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
    return !0
  }

  function E(a, c, d) {
    if (d === b && 1 === a.nodeType) {
      var e = "data-" + c.replace(N, "-$1").toLowerCase();
      if (d = a.getAttribute(e), "string" == typeof d) {
        try {
          d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : J.isNumeric(d) ? +d : M.test(d) ? J.parseJSON(d) : d
        } catch (f) {
        }
        J.data(a, c, d)
      } else d = b
    }
    return d
  }

  function F(a) {
    var b, c, d = K[a] = {};
    for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++)d[a[b]] = !0;
    return d
  }

  var G = a.document, H = a.navigator, I = a.location,
  J = function() {
    function c() {
      if (!h.isReady) {
        try {
          G.documentElement.doScroll("left")
        } catch (a) {
          return void setTimeout(c, 1)
        }
        h.ready()
      }
    }

    var d, e, f, g, h = function(a, b) {
      return new h.fn.init(a, b, d)
    }, i = a.jQuery, j = a.$, k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, l = /\S/, m = /^\s+/, n = /\s+$/, o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, p = /^[\],:{}\s]*$/, q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, s = /(?:^|:|,)(?:\s*\[)+/g, t = /(webkit)[ \/]([\w.]+)/, u = /(opera)(?:.*version)?[ \/]([\w.]+)/, v = /(msie) ([\w.]+)/, w = /(mozilla)(?:.*? rv:([\w.]+))?/, x = /-([a-z]|[0-9])/gi, y = /^-ms-/, z = function(a, b) {
      return (b + "").toUpperCase()
    }, A = H.userAgent, B = Object.prototype.toString, C = Object.prototype.hasOwnProperty, D = Array.prototype.push, E = Array.prototype.slice, F = String.prototype.trim, I = Array.prototype.indexOf, J = {};
    return h.fn = h.prototype = {
      constructor: h, init: function(a, c, d) {
        var e, f, g, i;
        if (!a)return this;
        if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
        if ("body" === a && !c && G.body)return this.context = G, this[0] = G.body, this.selector = a, this.length = 1, this;
        if ("string" == typeof a) {
          if (e = "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [null, a, null], e && (e[1] || !c)) {
            if (e[1])return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : G, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [G.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
            if (f = G.getElementById(e[2]), f && f.parentNode) {
              if (f.id !== e[2])return d.find(a);
              this.length = 1, this[0] = f
            }
            return this.context = G, this.selector = a, this
          }
          return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
        }
        return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
      }, selector: "", jquery: "1.7.2", length: 0, size: function() {
        return this.length
      }, toArray: function() {
        return E.call(this, 0)
      }, get: function(a) {
        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
      }, pushStack: function(a, b, c) {
        var d = this.constructor();
        return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
      }, each: function(a, b) {
        return h.each(this, a, b)
      }, ready: function(a) {
        return h.bindReady(), f.add(a), this
      }, eq: function(a) {
        return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
      }, first: function() {
        return this.eq(0)
      }, last: function() {
        return this.eq(-1)
      }, slice: function() {
        return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
      }, map: function(a) {
        return this.pushStack(h.map(this, function(b, c) {
          return a.call(b, c, b)
        }))
      }, end: function() {
        return this.prevObject || this.constructor(null)
      }, push: D, sort: [].sort, splice: [].splice
    }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function() {
      var a, c, d, e, f, g, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
      for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); k > j; j++)if (null != (a = arguments[j]))for (c in a)d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
      return i
    }, h.extend({
      noConflict: function(b) {
        return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h
      }, isReady: !1, readyWait: 1, holdReady: function(a) {
        a ? h.readyWait++ : h.ready(!0)
      }, ready: function(a) {
        if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
          if (!G.body)return setTimeout(h.ready, 1);
          if (h.isReady = !0, a !== !0 && --h.readyWait > 0)return;
          f.fireWith(G, [h]), h.fn.trigger && h(G).trigger("ready").off("ready")
        }
      }, bindReady: function() {
        if (!f) {
          if (f = h.Callbacks("once memory"), "complete" === G.readyState)return setTimeout(h.ready, 1);
          if (G.addEventListener)G.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1); else if (G.attachEvent) {
            G.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
            var b = !1;
            try {
              b = null == a.frameElement
            } catch (d) {
            }
            G.documentElement.doScroll && b && c()
          }
        }
      }, isFunction: function(a) {
        return "function" === h.type(a)
      }, isArray: Array.isArray || function(a) {
        return "array" === h.type(a)
      }, isWindow: function(a) {
        return null != a && a == a.window
      }, isNumeric: function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
      }, type: function(a) {
        return null == a ? String(a) : J[B.call(a)] || "object"
      }, isPlainObject: function(a) {
        if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a))return !1;
        try {
          if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf"))return !1
        } catch (c) {
          return !1
        }
        var d;
        for (d in a);
        return d === b || C.call(a, d)
      }, isEmptyObject: function(a) {
        for (var b in a)return !1;
        return !0
      }, error: function(a) {
        throw new Error(a)
      }, parseJSON: function(b) {
        return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null
      }, parseXML: function(c) {
        if ("string" != typeof c || !c)return null;
        var d, e;
        try {
          a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
        } catch (f) {
          d = b
        }
        return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + c), d
      }, noop: function() {
      }, globalEval: function(b) {
        b && l.test(b) && (a.execScript || function(b) {
          a.eval.call(a, b)
        })(b)
      }, camelCase: function(a) {
        return a.replace(y, "ms-").replace(x, z)
      }, nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
      }, each: function(a, c, d) {
        var e, f = 0, g = a.length, i = g === b || h.isFunction(a);
        if (d)if (i) {
          for (e in a)if (c.apply(a[e], d) === !1)break
        } else for (; g > f && c.apply(a[f++], d) !== !1;); else if (i) {
          for (e in a)if (c.call(a[e], e, a[e]) === !1)break
        } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
        return a
      }, trim: F ? function(a) {
        return null == a ? "" : F.call(a)
      } : function(a) {
        return null == a ? "" : (a + "").replace(m, "").replace(n, "")
      }, makeArray: function(a, b) {
        var c = b || [];
        if (null != a) {
          var d = h.type(a);
          null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
        }
        return c
      }, inArray: function(a, b, c) {
        var d;
        if (b) {
          if (I)return I.call(b, a, c);
          for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
        }
        return -1
      }, merge: function(a, c) {
        var d = a.length, e = 0;
        if ("number" == typeof c.length)for (var f = c.length; f > e; e++)a[d++] = c[e]; else for (; c[e] !== b;)a[d++] = c[e++];
        return a.length = d, a
      }, grep: function(a, b, c) {
        var d, e = [];
        c = !!c;
        for (var f = 0, g = a.length; g > f; f++)d = !!b(a[f], f), c !== d && e.push(a[f]);
        return e
      }, map: function(a, c, d) {
        var e, f, g = [], i = 0, j = a.length, k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
        if (k)for (; j > i; i++)e = c(a[i], i, d), null != e && (g[g.length] = e); else for (f in a)e = c(a[f], f, d), null != e && (g[g.length] = e);
        return g.concat.apply([], g)
      }, guid: 1, proxy: function(a, c) {
        if ("string" == typeof c) {
          var d = a[c];
          c = a, a = d
        }
        if (!h.isFunction(a))return b;
        var e = E.call(arguments, 2), f = function() {
          return a.apply(c, e.concat(E.call(arguments)))
        };
        return f.guid = a.guid = a.guid || f.guid || h.guid++, f
      }, access: function(a, c, d, e, f, g, i) {
        var j, k = null == d, l = 0, m = a.length;
        if (d && "object" == typeof d) {
          for (l in d)h.access(a, c, l, d[l], 1, g, e);
          f = 1
        } else if (e !== b) {
          if (j = i === b && h.isFunction(e), k && (j ? (j = c, c = function(a, b, c) {
                return j.call(h(a), c)
              }) : (c.call(a, e), c = null)), c)for (; m > l; l++)c(a[l], d, j ? e.call(a[l], l, c(a[l], d)) : e, i);
          f = 1
        }
        return f ? a : k ? c.call(a) : m ? c(a[0], d) : g
      }, now: function() {
        return (new Date).getTime()
      }, uaMatch: function(a) {
        a = a.toLowerCase();
        var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
        return {browser: b[1] || "", version: b[2] || "0"}
      }, sub: function() {
        function a(b, c) {
          return new a.fn.init(b, c)
        }

        h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
          return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
        }, a.fn.init.prototype = a.fn;
        var b = a(G);
        return a
      }, browser: {}
    }), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
      J["[object " + b + "]"] = b.toLowerCase()
    }), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test("聽") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(G), G.addEventListener ? g = function() {
      G.removeEventListener("DOMContentLoaded", g, !1), h.ready()
    } : G.attachEvent && (g = function() {
      "complete" === G.readyState && (G.detachEvent("onreadystatechange", g), h.ready())
    }), h
  }(), K = {};
  J.Callbacks = function(a) {
    a = a ? K[a] || F(a) : {};
    var c, d, e, f, g, h, i = [], j = [], k = function(b) {
      var c, d, e, f;
      for (c = 0, d = b.length; d > c; c++)e = b[c], f = J.type(e), "array" === f ? k(e) : "function" === f && (!a.unique || !m.has(e)) && i.push(e)
    }, l = function(b, k) {
      for (k = k || [], c = !a.memory || [b, k], d = !0, e = !0, h = f || 0, f = 0, g = i.length; i && g > h; h++)if (i[h].apply(b, k) === !1 && a.stopOnFalse) {
        c = !0;
        break
      }
      e = !1, i && (a.once ? c === !0 ? m.disable() : i = [] : j && j.length && (c = j.shift(), m.fireWith(c[0], c[1])))
    }, m = {
      add: function() {
        if (i) {
          var a = i.length;
          k(arguments), e ? g = i.length : c && c !== !0 && (f = a, l(c[0], c[1]))
        }
        return this
      }, remove: function() {
        if (i)for (var b = arguments, c = 0, d = b.length; d > c; c++)for (var f = 0; f < i.length && (b[c] !== i[f] || (e && g >= f && (g--, h >= f && h--), i.splice(f--, 1), !a.unique)); f++);
        return this
      }, has: function(a) {
        if (i)for (var b = 0, c = i.length; c > b; b++)if (a === i[b])return !0;
        return !1
      }, empty: function() {
        return i = [], this
      }, disable: function() {
        return i = j = c = b, this
      }, disabled: function() {
        return !i
      }, lock: function() {
        return j = b, (!c || c === !0) && m.disable(), this
      }, locked: function() {
        return !j
      }, fireWith: function(b, d) {
        return j && (e ? a.once || j.push([b, d]) : (!a.once || !c) && l(b, d)), this
      }, fire: function() {
        return m.fireWith(this, arguments), this
      }, fired: function() {
        return !!d
      }
    };
    return m
  };
  var L = [].slice;
  J.extend({
    Deferred: function(a) {
      var b, c = J.Callbacks("once memory"), d = J.Callbacks("once memory"), e = J.Callbacks("memory"), f = "pending", g = {
        resolve: c,
        reject: d,
        notify: e
      }, h = {
        done: c.add, fail: d.add, progress: e.add, state: function() {
          return f
        }, isResolved: c.fired, isRejected: d.fired, then: function(a, b, c) {
          return i.done(a).fail(b).progress(c), this
        }, always: function() {
          return i.done.apply(i, arguments).fail.apply(i, arguments), this
        }, pipe: function(a, b, c) {
          return J.Deferred(function(d) {
            J.each({
              done: [a, "resolve"],
              fail: [b, "reject"],
              progress: [c, "notify"]
            }, function(a, b) {
              var c, e = b[0], f = b[1];
              J.isFunction(e) ? i[a](function() {
                c = e.apply(this, arguments), c && J.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c])
              }) : i[a](d[f])
            })
          }).promise()
        }, promise: function(a) {
          if (null == a)a = h; else for (var b in h)a[b] = h[b];
          return a
        }
      }, i = h.promise({});
      for (b in g)i[b] = g[b].fire, i[b + "With"] = g[b].fireWith;
      return i.done(function() {
        f = "resolved"
      }, d.disable, e.lock).fail(function() {
        f = "rejected"
      }, c.disable, e.lock), a && a.call(i, i), i
    }, when: function(a) {
      function b(a) {
        return function(b) {
          g[a] = arguments.length > 1 ? L.call(arguments, 0) : b, i.notifyWith(j, g)
        }
      }

      function c(a) {
        return function(b) {
          d[a] = arguments.length > 1 ? L.call(arguments, 0) : b, --h || i.resolveWith(i, d)
        }
      }

      var d = L.call(arguments, 0), e = 0, f = d.length, g = Array(f), h = f, i = 1 >= f && a && J.isFunction(a.promise) ? a : J.Deferred(), j = i.promise();
      if (f > 1) {
        for (; f > e; e++)d[e] && d[e].promise && J.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
        h || i.resolveWith(i, d)
      } else i !== a && i.resolveWith(i, f ? [a] : []);
      return j
    }
  }), J.support = function() {
    var b, c, d, e, f, g, h, i, j, k, l, m = G.createElement("div");
    G.documentElement;
    if (m.setAttribute("className", "t"), m.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !c.length || !d)return {};
    e = G.createElement("select"), f = e.appendChild(G.createElement("option")), g = m.getElementsByTagName("input")[0], b = {
      leadingWhitespace: 3 === m.firstChild.nodeType,
      tbody: !m.getElementsByTagName("tbody").length,
      htmlSerialize: !!m.getElementsByTagName("link").length,
      style: /top/.test(d.getAttribute("style")),
      hrefNormalized: "/a" === d.getAttribute("href"),
      opacity: /^0.55/.test(d.style.opacity),
      cssFloat: !!d.style.cssFloat,
      checkOn: "on" === g.value,
      optSelected: f.selected,
      getSetAttribute: "t" !== m.className,
      enctype: !!G.createElement("form").enctype,
      html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      pixelMargin: !0
    }, J.boxModel = b.boxModel = "CSS1Compat" === G.compatMode, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
    try {
      delete m.test
    } catch (n) {
      b.deleteExpando = !1
    }
    if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", function() {
          b.noCloneEvent = !1
        }), m.cloneNode(!0).fireEvent("onclick")), g = G.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = G.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)for (k in{
      submit: 1,
      change: 1,
      focusin: 1
    })j = "on" + k, l = j in m, l || (m.setAttribute(j, "return;"), l = "function" == typeof m[j]), b[k + "Bubbles"] = l;
    return h.removeChild(m), h = e = f = m = g = null, J(function() {
      var c, d, e, f, g, h, j, k, n, o, p, q, r = G.getElementsByTagName("body")[0];
      !r || (j = 1, q = "padding:0;margin:0;border:", o = "position:absolute;top:0;left:0;width:1px;height:1px;", p = q + "0;visibility:hidden;", k = "style='" + o + q + "5px solid #000;", n = "<div " + k + "display:block;'><div style='" + q + "0;display:block;overflow:hidden;'></div></div><table " + k + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", c = G.createElement("div"), c.style.cssText = p + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(c, r.firstChild), m = G.createElement("div"), c.appendChild(m), m.innerHTML = "<table><tr><td style='" + q + "0;display:none'></td><td>t</td></tr></table>", i = m.getElementsByTagName("td"), l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", b.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, a.getComputedStyle && (m.innerHTML = "", h = G.createElement("div"), h.style.width = "0", h.style.marginRight = "0", m.style.width = "2px", m.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || {marginRight: 0}).marginRight, 10) || 0)), "undefined" != typeof m.style.zoom && (m.innerHTML = "", m.style.width = m.style.padding = "1px", m.style.border = 0, m.style.overflow = "hidden", m.style.display = "inline", m.style.zoom = 1, b.inlineBlockNeedsLayout = 3 === m.offsetWidth, m.style.display = "block", m.style.overflow = "visible", m.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = 3 !== m.offsetWidth), m.style.cssText = o + p, m.innerHTML = n, d = m.firstChild, e = d.firstChild, f = d.nextSibling.firstChild.firstChild, g = {
        doesNotAddBorder: 5 !== e.offsetTop,
        doesAddBorderForTableAndCells: 5 === f.offsetTop
      }, e.style.position = "fixed", e.style.top = "20px", g.fixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", g.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop, g.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, a.getComputedStyle && (m.style.marginTop = "1%", b.pixelMargin = "1%" !== (a.getComputedStyle(m, null) || {marginTop: 0}).marginTop), "undefined" != typeof c.style.zoom && (c.style.zoom = 1), r.removeChild(c), h = m = c = null, J.extend(b, g))
    }), b
  }();
  var M = /^(?:\{.*\}|\[.*\])$/, N = /([A-Z])/g;
  J.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function(a) {
      return a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando], !!a && !D(a)
    },
    data: function(a, c, d, e) {
      if (J.acceptData(a)) {
        var f, g, h, i = J.expando, j = "string" == typeof c, k = a.nodeType, l = k ? J.cache : a, m = k ? a[i] : a[i] && i, n = "events" === c;
        if (!(m && l[m] && (n || e || l[m].data) || !j || d !== b))return;
        return m || (k ? a[i] = m = ++J.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = J.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m] = J.extend(l[m], c) : l[m].data = J.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[J.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], null == h && (h = g[J.camelCase(c)])) : h = g, h)
      }
    },
    removeData: function(a, b, c) {
      if (J.acceptData(a)) {
        var d, e, f, g = J.expando, h = a.nodeType, i = h ? J.cache : a, j = h ? a[g] : g;
        if (!i[j])return;
        if (b && (d = c ? i[j] : i[j].data)) {
          J.isArray(b) || (b in d ? b = [b] : (b = J.camelCase(b), b = b in d ? [b] : b.split(" ")));
          for (e = 0, f = b.length; f > e; e++)delete d[b[e]];
          if (!(c ? D : J.isEmptyObject)(d))return
        }
        if (!c && (delete i[j].data, !D(i[j])))return;
        J.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null, h && (J.support.deleteExpando ? delete a[g] : a.removeAttribute ? a.removeAttribute(g) : a[g] = null)
      }
    },
    _data: function(a, b, c) {
      return J.data(a, b, c, !0)
    },
    acceptData: function(a) {
      if (a.nodeName) {
        var b = J.noData[a.nodeName.toLowerCase()];
        if (b)return b !== !0 && a.getAttribute("classid") === b
      }
      return !0
    }
  }), J.fn.extend({
    data: function(a, c) {
      var d, e, f, g, h, i = this[0], j = 0, k = null;
      if (a === b) {
        if (this.length && (k = J.data(i), 1 === i.nodeType && !J._data(i, "parsedAttrs"))) {
          for (f = i.attributes, h = f.length; h > j; j++)g = f[j].name, 0 === g.indexOf("data-") && (g = J.camelCase(g.substring(5)), E(i, g, k[g]));
          J._data(i, "parsedAttrs", !0)
        }
        return k
      }
      return "object" == typeof a ? this.each(function() {
        J.data(this, a)
      }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", J.access(this, function(c) {
        return c === b ? (k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = J.data(i, a), k = E(i, a, k)), k === b && d[1] ? this.data(d[0]) : k) : (d[1] = c, void this.each(function() {
          var b = J(this);
          b.triggerHandler("setData" + e, d), J.data(this, a, c), b.triggerHandler("changeData" + e, d)
        }))
      }, null, c, arguments.length > 1, null, !1))
    }, removeData: function(a) {
      return this.each(function() {
        J.removeData(this, a)
      })
    }
  }), J.extend({
    _mark: function(a, b) {
      a && (b = (b || "fx") + "mark", J._data(a, b, (J._data(a, b) || 0) + 1))
    }, _unmark: function(a, b, c) {
      if (a !== !0 && (c = b, b = a, a = !1), b) {
        c = c || "fx";
        var d = c + "mark", e = a ? 0 : (J._data(b, d) || 1) - 1;
        e ? J._data(b, d, e) : (J.removeData(b, d, !0), C(b, c, "mark"))
      }
    }, queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = J._data(a, b), c && (!d || J.isArray(c) ? d = J._data(a, b, J.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function(a, b) {
      b = b || "fx";
      var c = J.queue(a, b), d = c.shift(), e = {};
      "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), J._data(a, b + ".run", e), d.call(a, function() {
        J.dequeue(a, b)
      }, e)), c.length || (J.removeData(a, b + "queue " + b + ".run", !0), C(a, b, "queue"))
    }
  }), J.fn.extend({
    queue: function(a, c) {
      var d = 2;
      return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? J.queue(this[0], a) : c === b ? this : this.each(function() {
        var b = J.queue(this, a, c);
        "fx" === a && "inprogress" !== b[0] && J.dequeue(this, a)
      })
    }, dequeue: function(a) {
      return this.each(function() {
        J.dequeue(this, a)
      })
    }, delay: function(a, b) {
      return a = J.fx ? J.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    }, clearQueue: function(a) {
      return this.queue(a || "fx", [])
    }, promise: function(a, c) {
      function d() {
        --i || f.resolveWith(g, [g])
      }

      "string" != typeof a && (c = a, a = b), a = a || "fx";
      for (var e, f = J.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = J.data(g[h], j, b, !0) || (J.data(g[h], k, b, !0) || J.data(g[h], l, b, !0)) && J.data(g[h], j, J.Callbacks("once memory"), !0)) && (i++, e.add(d));
      return d(), f.promise(c)
    }
  });
  var O, P, Q, R = /[\n\t\r]/g, S = /\s+/, T = /\r/g, U = /^(?:button|input)$/i, V = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea)?$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Y = J.support.getSetAttribute;
  J.fn.extend({
    attr: function(a, b) {
      return J.access(this, J.attr, a, b, arguments.length > 1)
    }, removeAttr: function(a) {
      return this.each(function() {
        J.removeAttr(this, a)
      })
    }, prop: function(a, b) {
      return J.access(this, J.prop, a, b, arguments.length > 1)
    }, removeProp: function(a) {
      return a = J.propFix[a] || a, this.each(function() {
        try {
          this[a] = b, delete this[a]
        } catch (c) {
        }
      })
    }, addClass: function(a) {
      var b, c, d, e, f, g, h;
      if (J.isFunction(a))return this.each(function(b) {
        J(this).addClass(a.call(this, b, this.className))
      });
      if (a && "string" == typeof a)for (b = a.split(S), c = 0, d = this.length; d > c; c++)if (e = this[c], 1 === e.nodeType)if (e.className || 1 !== b.length) {
        for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
        e.className = J.trim(f)
      } else e.className = a;
      return this
    }, removeClass: function(a) {
      var c, d, e, f, g, h, i;
      if (J.isFunction(a))return this.each(function(b) {
        J(this).removeClass(a.call(this, b, this.className))
      });
      if (a && "string" == typeof a || a === b)for (c = (a || "").split(S), d = 0, e = this.length; e > d; d++)if (f = this[d], 1 === f.nodeType && f.className)if (a) {
        for (g = (" " + f.className + " ").replace(R, " "), h = 0, i = c.length; i > h; h++)g = g.replace(" " + c[h] + " ", " ");
        f.className = J.trim(g)
      } else f.className = "";
      return this
    }, toggleClass: function(a, b) {
      var c = typeof a, d = "boolean" == typeof b;
      return J.isFunction(a) ? this.each(function(c) {
        J(this).toggleClass(a.call(this, c, this.className, b), b)
      }) : this.each(function() {
        if ("string" === c)for (var e, f = 0, g = J(this), h = b, i = a.split(S); e = i[f++];)h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e); else("undefined" === c || "boolean" === c) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : J._data(this, "__className__") || "")
      })
    }, hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(R, " ").indexOf(b) > -1)return !0;
      return !1
    }, val: function(a) {
      var c, d, e, f = this[0];
      return arguments.length ? (e = J.isFunction(a), this.each(function(d) {
        var f, g = J(this);
        1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : J.isArray(f) && (f = J.map(f, function(a) {
          return null == a ? "" : a + ""
        })), c = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
      })) : f ? (c = J.valHooks[f.type] || J.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(T, "") : null == d ? "" : d)) : void 0
    }
  }), J.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = a.attributes.value;
          return !b || b.specified ? a.value : a.text
        }
      }, select: {
        get: function(a) {
          var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = "select-one" === a.type;
          if (0 > f)return null;
          for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)if (e = h[c], !(!e.selected || (J.support.optDisabled ? e.disabled : null !== e.getAttribute("disabled")) || e.parentNode.disabled && J.nodeName(e.parentNode, "optgroup"))) {
            if (b = J(e).val(), i)return b;
            g.push(b)
          }
          return i && !g.length && h.length ? J(h[f]).val() : g
        }, set: function(a, b) {
          var c = J.makeArray(b);
          return J(a).find("option").each(function() {
            this.selected = J.inArray(J(this).val(), c) >= 0
          }), c.length || (a.selectedIndex = -1), c
        }
      }
    },
    attrFn: {
      val: !0,
      css: !0,
      html: !0,
      text: !0,
      data: !0,
      width: !0,
      height: !0,
      offset: !0
    },
    attr: function(a, c, d, e) {
      var f, g, h, i = a.nodeType;
      return a && 3 !== i && 8 !== i && 2 !== i ? e && c in J.attrFn ? J(a)[c](d) : "undefined" == typeof a.getAttribute ? J.prop(a, c, d) : (h = 1 !== i || !J.isXMLDoc(a), h && (c = c.toLowerCase(), g = J.attrHooks[c] || (X.test(c) ? P : O)), d !== b ? null === d ? void J.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f)) : void 0
    },
    removeAttr: function(a, b) {
      var c, d, e, f, g, h = 0;
      if (b && 1 === a.nodeType)for (d = b.toLowerCase().split(S), f = d.length; f > h; h++)e = d[h], e && (c = J.propFix[e] || e, g = X.test(e), g || J.attr(a, e, ""), a.removeAttribute(Y ? e : c), g && c in a && (a[c] = !1))
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (U.test(a.nodeName) && a.parentNode)J.error("type property can't be changed"); else if (!J.support.radioValue && "radio" === b && J.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }, value: {
        get: function(a, b) {
          return O && J.nodeName(a, "button") ? O.get(a, b) : b in a ? a.value : null
        }, set: function(a, b, c) {
          return O && J.nodeName(a, "button") ? O.set(a, b, c) : void(a.value = b)
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function(a, c, d) {
      var e, f, g, h = a.nodeType;
      return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !J.isXMLDoc(a), g && (c = J.propFix[c] || c, f = J.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var c = a.getAttributeNode("tabindex");
          return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : b
        }
      }
    }
  }), J.attrHooks.tabindex = J.propHooks.tabIndex, P = {
    get: function(a, c) {
      var d, e = J.prop(a, c);
      return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
    }, set: function(a, b, c) {
      var d;
      return b === !1 ? J.removeAttr(a, c) : (d = J.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
    }
  }, Y || (Q = {name: !0, id: !0, coords: !0}, O = J.valHooks.button = {
    get: function(a, c) {
      var d;
      return d = a.getAttributeNode(c), d && (Q[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b
    }, set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || (d = G.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + "";
    }
  }, J.attrHooks.tabindex.set = O.set, J.each(["width", "height"], function(a, b) {
    J.attrHooks[b] = J.extend(J.attrHooks[b], {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    })
  }), J.attrHooks.contenteditable = {
    get: O.get, set: function(a, b, c) {
      "" === b && (b = "false"), O.set(a, b, c)
    }
  }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(a, c) {
    J.attrHooks[c] = J.extend(J.attrHooks[c], {
      get: function(a) {
        var d = a.getAttribute(c, 2);
        return null === d ? b : d
      }
    })
  }), J.support.style || (J.attrHooks.style = {
    get: function(a) {
      return a.style.cssText.toLowerCase() || b
    }, set: function(a, b) {
      return a.style.cssText = "" + b
    }
  }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }
  })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
    J.valHooks[this] = {
      get: function(a) {
        return null === a.getAttribute("value") ? "on" : a.value
      }
    }
  }), J.each(["radio", "checkbox"], function() {
    J.valHooks[this] = J.extend(J.valHooks[this], {
      set: function(a, b) {
        return J.isArray(b) ? a.checked = J.inArray(J(a).val(), b) >= 0 : void 0
      }
    })
  });
  var Z = /^(?:textarea|input|select)$/i, $ = /^([^\.]*)?(?:\.(.+))?$/, _ = /(?:^|\s)hover(\.\S+)?\b/, aa = /^key/, ba = /^(?:mouse|contextmenu)|click/, ca = /^(?:focusinfocus|focusoutblur)$/, da = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, ea = function(a) {
    var b = da.exec(a);
    return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
  }, fa = function(a, b) {
    var c = a.attributes || {};
    return !(b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {}).value !== b[2] || b[3] && !b[3].test((c["class"] || {}).value))
  }, ga = function(a) {
    return J.event.special.hover ? a : a.replace(_, "mouseenter$1 mouseleave$1")
  };
  J.event = {
    add: function(a, c, d, e, f) {
      var g, h, i, j, k, l, m, n, o, p, q;
      if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = J._data(a))) {
        for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = J.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
          return "undefined" == typeof J || a && J.event.triggered === a.type ? b : J.event.dispatch.apply(h.elem, arguments)
        }, h.elem = a), c = J.trim(ga(c)).split(" "), j = 0; j < c.length; j++)k = $.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = J.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = J.event.special[l] || {}, n = J.extend({
          type: l,
          origType: k[1],
          data: e,
          handler: d,
          guid: d.guid,
          selector: f,
          quick: f && ea(f),
          namespace: m.join(".")
        }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), J.event.global[l] = !0;
        a = null
      }
    },
    global: {},
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q, r = J.hasData(a) && J._data(a);
      if (r && (m = r.events)) {
        for (b = J.trim(ga(b || "")).split(" "), f = 0; f < b.length; f++)if (g = $.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
          for (n = J.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++)q = p[l], !(!e && i !== q.origType || c && c.guid !== q.guid || j && !j.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (p.splice(l--, 1), q.selector && p.delegateCount--, !n.remove || !n.remove.call(a, q)));
          0 === p.length && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && J.removeEvent(a, h, r.handle), delete m[h])
        } else for (h in m)J.event.remove(a, h + b[f], c, d, !0);
        J.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), J.removeData(a, ["events", "handle"], !0))
      }
    },
    customEvent: {getData: !0, setData: !0, changeData: !0},
    trigger: function(c, d, e, f) {
      if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
        var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
        if (ca.test(q + J.event.triggered))return;
        if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || J.event.customEvent[q]) && !J.event.global[q])return;
        if (c = "object" == typeof c ? c[J.expando] ? c : new J.Event(q, c) : new J.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) {
          g = J.cache;
          for (i in g)g[i].events && g[i].events[q] && J.event.trigger(c, d, g[i].handle.elem, !0);
          return
        }
        if (c.result = b, c.target || (c.target = e), d = null != d ? J.makeArray(d) : [], d.unshift(c), m = J.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1)return;
        if (o = [[e, m.bindType || q]], !f && !m.noBubble && !J.isWindow(e)) {
          for (p = m.delegateType || q, j = ca.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode)o.push([j, p]), k = j;
          k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
        }
        for (i = 0; i < o.length && !c.isPropagationStopped(); i++)j = o[i][0], c.type = o[i][1], n = (J._data(j, "events") || {})[c.type] && J._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && J.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
        return c.type = q, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && J.nodeName(e, "a") || !J.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || J.isWindow(e) || (k = e[l], k && (e[l] = null), J.event.triggered = q, e[q](), J.event.triggered = b, !k || !(e[l] = k))), c.result
      }
    },
    dispatch: function(c) {
      c = J.event.fix(c || a.event);
      var d, e, f, g, h, i, j, k, l, m, n = (J._data(this, "events") || {})[c.type] || [], o = n.delegateCount, p = [].slice.call(arguments, 0), q = !c.exclusive && !c.namespace, r = J.event.special[c.type] || {}, s = [];
      if (p[0] = c, c.delegateTarget = this, !r.preDispatch || r.preDispatch.call(this, c) !== !1) {
        if (o && (!c.button || "click" !== c.type))for (g = J(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this)if (f.disabled !== !0) {
          for (i = {}, k = [], g[0] = f, d = 0; o > d; d++)l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? fa(f, l.quick) : g.is(m)), i[m] && k.push(l);
          k.length && s.push({elem: f, matches: k})
        }
        for (n.length > o && s.push({
          elem: this,
          matches: n.slice(o)
        }), d = 0; d < s.length && !c.isPropagationStopped(); d++)for (j = s[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++)l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((J.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
        return r.postDispatch && r.postDispatch.call(this, c), c.result
      }
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, c) {
        var d, e, f, g = c.button, h = c.fromElement;
        return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || G, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
      }
    },
    fix: function(a) {
      if (a[J.expando])return a;
      var c, d, e = a, f = J.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
      for (a = J.Event(e), c = g.length; c;)d = g[--c], a[d] = e[d];
      return a.target || (a.target = e.srcElement || G), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
    },
    special: {
      ready: {setup: J.bindReady},
      load: {noBubble: !0},
      focus: {delegateType: "focusin"},
      blur: {delegateType: "focusout"},
      beforeunload: {
        setup: function(a, b, c) {
          J.isWindow(this) && (this.onbeforeunload = c)
        }, teardown: function(a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = J.extend(new J.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? J.event.trigger(e, null, b) : J.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, J.event.handle = J.event.dispatch, J.removeEvent = G.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  } : function(a, b, c) {
    a.detachEvent && a.detachEvent("on" + b, c)
  }, J.Event = function(a, b) {
    return this instanceof J.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? A : B) : this.type = a, b && J.extend(this, b), this.timeStamp = a && a.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(a, b)
  }, J.Event.prototype = {
    preventDefault: function() {
      this.isDefaultPrevented = A;
      var a = this.originalEvent;
      !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      this.isPropagationStopped = A;
      var a = this.originalEvent;
      !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = A, this.stopPropagation()
    },
    isDefaultPrevented: B,
    isPropagationStopped: B,
    isImmediatePropagationStopped: B
  }, J.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function(a, b) {
    J.event.special[a] = {
      delegateType: b, bindType: b, handle: function(a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        f.selector;
        return (!e || e !== d && !J.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), J.support.submitBubbles || (J.event.special.submit = {
    setup: function() {
      return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(a) {
        var c = a.target, d = J.nodeName(c, "input") || J.nodeName(c, "button") ? c.form : b;
        d && !d._submit_attached && (J.event.add(d, "submit._submit", function(a) {
          a._submit_bubble = !0
        }), d._submit_attached = !0)
      })
    }, postDispatch: function(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && J.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function() {
      return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
    }
  }), J.support.changeBubbles || (J.event.special.change = {
    setup: function() {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
      }), J.event.add(this, "click._change", function(a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1, J.event.simulate("change", this, a, !0))
      })), !1) : void J.event.add(this, "beforeactivate._change", function(a) {
        var b = a.target;
        Z.test(b.nodeName) && !b._change_attached && (J.event.add(b, "change._change", function(a) {
          this.parentNode && !a.isSimulated && !a.isTrigger && J.event.simulate("change", this.parentNode, a, !0)
        }), b._change_attached = !0)
      })
    }, handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function() {
      return J.event.remove(this, "._change"), Z.test(this.nodeName)
    }
  }), J.support.focusinBubbles || J.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = 0, d = function(a) {
      J.event.simulate(b, a.target, J.event.fix(a), !0)
    };
    J.event.special[b] = {
      setup: function() {
        0 === c++ && G.addEventListener(a, d, !0)
      }, teardown: function() {
        0 === --c && G.removeEventListener(a, d, !0)
      }
    }
  }), J.fn.extend({
    on: function(a, c, d, e, f) {
      var g, h;
      if ("object" == typeof a) {
        "string" != typeof c && (d = d || c, c = b);
        for (h in a)this.on(h, c, d, a[h], f);
        return this
      }
      if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)e = B; else if (!e)return this;
      return 1 === f && (g = e, e = function(a) {
        return J().off(a), g.apply(this, arguments)
      }, e.guid = g.guid || (g.guid = J.guid++)), this.each(function() {
        J.event.add(this, a, e, d, c)
      })
    }, one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    }, off: function(a, c, d) {
      if (a && a.preventDefault && a.handleObj) {
        var e = a.handleObj;
        return J(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
      }
      if ("object" == typeof a) {
        for (var f in a)this.off(f, c, a[f]);
        return this
      }
      return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = B), this.each(function() {
        J.event.remove(this, a, d, c)
      })
    }, bind: function(a, b, c) {
      return this.on(a, null, b, c)
    }, unbind: function(a, b) {
      return this.off(a, null, b)
    }, live: function(a, b, c) {
      return J(this.context).on(a, this.selector, b, c), this
    }, die: function(a, b) {
      return J(this.context).off(a, this.selector || "**", b), this
    }, delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    }, undelegate: function(a, b, c) {
      return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
    }, trigger: function(a, b) {
      return this.each(function() {
        J.event.trigger(a, b, this)
      })
    }, triggerHandler: function(a, b) {
      return this[0] ? J.event.trigger(a, b, this[0], !0) : void 0
    }, toggle: function(a) {
      var b = arguments, c = a.guid || J.guid++, d = 0, e = function(c) {
        var e = (J._data(this, "lastToggle" + a.guid) || 0) % d;
        return J._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
      };
      for (e.guid = c; d < b.length;)b[d++].guid = c;
      return this.click(e)
    }, hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    J.fn[b] = function(a, c) {
      return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }, J.attrFn && (J.attrFn[b] = !0), aa.test(b) && (J.event.fixHooks[b] = J.event.keyHooks), ba.test(b) && (J.event.fixHooks[b] = J.event.mouseHooks)
  }), function() {
    function a(a, b, c, d, f, g) {
      for (var h = 0, i = d.length; i > h; h++) {
        var j = d[h];
        if (j) {
          var k = !1;
          for (j = j[a]; j;) {
            if (j[e] === c) {
              k = d[j.sizset];
              break
            }
            if (1 === j.nodeType)if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
              if (j === b) {
                k = !0;
                break
              }
            } else if (m.filter(b, [j]).length > 0) {
              k = j;
              break
            }
            j = j[a]
          }
          d[h] = k
        }
      }
    }

    function c(a, b, c, d, f, g) {
      for (var h = 0, i = d.length; i > h; h++) {
        var j = d[h];
        if (j) {
          var k = !1;
          for (j = j[a]; j;) {
            if (j[e] === c) {
              k = d[j.sizset];
              break
            }
            if (1 === j.nodeType && !g && (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
              k = j;
              break
            }
            j = j[a]
          }
          d[h] = k
        }
      }
    }

    var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = "sizcache" + (Math.random() + "").replace(".", ""), f = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
    [0, 0].sort(function() {
      return i = !1, 0
    });
    var m = function(a, b, c, e) {
      c = c || [], b = b || G;
      var f = b;
      if (1 !== b.nodeType && 9 !== b.nodeType)return [];
      if (!a || "string" != typeof a)return c;
      var h, i, j, k, l, n, q, r, t = !0, u = m.isXML(b), v = [], x = a;
      do {
        if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
          k = h[3];
          break
        }
      } while (h);
      if (v.length > 1 && p.exec(a))if (2 === v.length && o.relative[v[0]])i = w(v[0] + v[1], b, e); else for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;)a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e); else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)for (l = e ? {
        expr: v.pop(),
        set: s(e)
      } : m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;)n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = "", null == q && (q = b), o.relative[n](j, q, u); else j = v = [];
      if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j))if (t)if (b && 1 === b.nodeType)for (r = 0; null != j[r]; r++)j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]); else for (r = 0; null != j[r]; r++)j[r] && 1 === j[r].nodeType && c.push(i[r]); else c.push.apply(c, j); else s(j, c);
      return k && (m(k, f, c, e), m.uniqueSort(c)), c
    };
    m.uniqueSort = function(a) {
      if (u && (h = i, a.sort(u), h))for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1);
      return a
    }, m.matches = function(a, b) {
      return m(a, null, null, b)
    }, m.matchesSelector = function(a, b) {
      return m(b, null, null, [a]).length > 0
    }, m.find = function(a, b, c) {
      var d, e, f, g, h, i;
      if (!a)return [];
      for (e = 0, f = o.order.length; f > e; e++)if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) {
        a = a.replace(o.match[h], "");
        break
      }
      return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
        set: d,
        expr: a
      }
    }, m.filter = function(a, c, d, e) {
      for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
        for (h in o.filter)if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
          if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1))continue;
          if (s === r && (r = []), o.preFilter[h])if (f = o.preFilter[h](f, s, d, r, e, t)) {
            if (f === !0)continue
          } else g = i = !0;
          if (f)for (n = 0; null != (j = s[n]); n++)j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
          if (i !== b) {
            if (d || (s = r), a = a.replace(o.match[h], ""), !g)return [];
            break
          }
        }
        if (a === q) {
          if (null != g)break;
          m.error(a)
        }
        q = a
      }
      return s
    }, m.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    };
    var n = m.getText = function(a) {
      var b, c, d = a.nodeType, e = "";
      if (d) {
        if (1 === d || 9 === d || 11 === d) {
          if ("string" == typeof a.textContent)return a.textContent;
          if ("string" == typeof a.innerText)return a.innerText.replace(k, "");
          for (a = a.firstChild; a; a = a.nextSibling)e += n(a)
        } else if (3 === d || 4 === d)return a.nodeValue
      } else for (b = 0; c = a[b]; b++)8 !== c.nodeType && (e += n(c));
      return e
    }, o = m.selectors = {
      order: ["ID", "NAME", "TAG"],
      match: {
        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
      },
      leftMatch: {},
      attrMap: {"class": "className", "for": "htmlFor"},
      attrHandle: {
        href: function(a) {
          return a.getAttribute("href")
        }, type: function(a) {
          return a.getAttribute("type")
        }
      },
      relative: {
        "+": function(a, b) {
          var c = "string" == typeof b, d = c && !l.test(b), e = c && !d;
          d && (b = b.toLowerCase());
          for (var f, g = 0, h = a.length; h > g; g++)if (f = a[g]) {
            for (; (f = f.previousSibling) && 1 !== f.nodeType;);
            a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
          }
          e && m.filter(b, a, !0)
        }, ">": function(a, b) {
          var c, d = "string" == typeof b, e = 0, f = a.length;
          if (d && !l.test(b)) {
            for (b = b.toLowerCase(); f > e; e++)if (c = a[e]) {
              var g = c.parentNode;
              a[e] = g.nodeName.toLowerCase() === b ? g : !1
            }
          } else {
            for (; f > e; e++)c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
            d && m.filter(b, a, !0)
          }
        }, "": function(b, d, e) {
          var g, h = f++, i = a;
          "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("parentNode", d, h, b, g, e)
        }, "~": function(b, d, e) {
          var g, h = f++, i = a;
          "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("previousSibling", d, h, b, g, e)
        }
      },
      find: {
        ID: function(a, b, c) {
          if ("undefined" != typeof b.getElementById && !c) {
            var d = b.getElementById(a[1]);
            return d && d.parentNode ? [d] : []
          }
        }, NAME: function(a, b) {
          if ("undefined" != typeof b.getElementsByName) {
            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++)d[e].getAttribute("name") === a[1] && c.push(d[e]);
            return 0 === c.length ? null : c
          }
        }, TAG: function(a, b) {
          return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
        }
      },
      preFilter: {
        CLASS: function(a, b, c, d, e, f) {
          if (a = " " + a[1].replace(j, "") + " ", f)return a;
          for (var g, h = 0; null != (g = b[h]); h++)g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
          return !1
        }, ID: function(a) {
          return a[1].replace(j, "")
        }, TAG: function(a, b) {
          return a[1].replace(j, "").toLowerCase()
        }, CHILD: function(a) {
          if ("nth" === a[1]) {
            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
          } else a[2] && m.error(a[0]);
          return a[0] = f++, a
        }, ATTR: function(a, b, c, d, e, f) {
          var g = a[1] = a[1].replace(j, "");
          return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
        }, PSEUDO: function(a, b, c, e, f) {
          if ("not" === a[1]) {
            if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
              var g = m.filter(a[3], b, c, !0 ^ f);
              return c || e.push.apply(e, g), !1
            }
            a[3] = m(a[3], null, null, b)
          } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0]))return !0;
          return a
        }, POS: function(a) {
          return a.unshift(!0), a
        }
      },
      filters: {
        enabled: function(a) {
          return a.disabled === !1 && "hidden" !== a.type
        }, disabled: function(a) {
          return a.disabled === !0
        }, checked: function(a) {
          return a.checked === !0
        }, selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, parent: function(a) {
          return !!a.firstChild
        }, empty: function(a) {
          return !a.firstChild
        }, has: function(a, b, c) {
          return !!m(c[3], a).length
        }, header: function(a) {
          return /h\d/i.test(a.nodeName)
        }, text: function(a) {
          var b = a.getAttribute("type"), c = a.type;
          return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
        }, radio: function(a) {
          return "input" === a.nodeName.toLowerCase() && "radio" === a.type
        }, checkbox: function(a) {
          return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
        }, file: function(a) {
          return "input" === a.nodeName.toLowerCase() && "file" === a.type
        }, password: function(a) {
          return "input" === a.nodeName.toLowerCase() && "password" === a.type
        }, submit: function(a) {
          var b = a.nodeName.toLowerCase();
          return ("input" === b || "button" === b) && "submit" === a.type
        }, image: function(a) {
          return "input" === a.nodeName.toLowerCase() && "image" === a.type
        }, reset: function(a) {
          var b = a.nodeName.toLowerCase();
          return ("input" === b || "button" === b) && "reset" === a.type
        }, button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        }, input: function(a) {
          return /input|select|textarea|button/i.test(a.nodeName)
        }, focus: function(a) {
          return a === a.ownerDocument.activeElement
        }
      },
      setFilters: {
        first: function(a, b) {
          return 0 === b
        }, last: function(a, b, c, d) {
          return b === d.length - 1
        }, even: function(a, b) {
          return b % 2 === 0
        }, odd: function(a, b) {
          return b % 2 === 1
        }, lt: function(a, b, c) {
          return b < c[3] - 0
        }, gt: function(a, b, c) {
          return b > c[3] - 0
        }, nth: function(a, b, c) {
          return c[3] - 0 === b
        }, eq: function(a, b, c) {
          return c[3] - 0 === b
        }
      },
      filter: {
        PSEUDO: function(a, b, c, d) {
          var e = b[1], f = o.filters[e];
          if (f)return f(a, c, b, d);
          if ("contains" === e)return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
          if ("not" === e) {
            for (var g = b[3], h = 0, i = g.length; i > h; h++)if (g[h] === a)return !1;
            return !0
          }
          m.error(e)
        }, CHILD: function(a, b) {
          var c, d, f, g, h, i, j = b[1], k = a;
          switch (j) {
          case"only":
          case"first":
            for (; k = k.previousSibling;)if (1 === k.nodeType)return !1;
            if ("first" === j)return !0;
            k = a;
          case"last":
            for (; k = k.nextSibling;)if (1 === k.nodeType)return !1;
            return !0;
          case"nth":
            if (c = b[2], d = b[3], 1 === c && 0 === d)return !0;
            if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
              for (h = 0, k = g.firstChild; k; k = k.nextSibling)1 === k.nodeType && (k.nodeIndex = ++h);
              g[e] = f
            }
            return i = a.nodeIndex - d, 0 === c ? 0 === i : i % c === 0 && i / c >= 0
          }
        }, ID: function(a, b) {
          return 1 === a.nodeType && a.getAttribute("id") === b
        }, TAG: function(a, b) {
          return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
        }, CLASS: function(a, b) {
          return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
        }, ATTR: function(a, b) {
          var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4];
          return null == d ? "!=" === f : !f && m.attr ? null != d : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
        }, POS: function(a, b, c, d) {
          var e = b[2], f = o.setFilters[e];
          return f ? f(a, c, b, d) : void 0
        }
      }
    }, p = o.match.POS, q = function(a, b) {
      return "\\" + (b - 0 + 1)
    };
    for (var r in o.match)o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
    o.match.globalPOS = p;
    var s = function(a, b) {
      return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
    };
    try {
      Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType
    } catch (t) {
      s = function(a, b) {
        var c = 0, d = b || [];
        if ("[object Array]" === g.call(a))Array.prototype.push.apply(d, a); else if ("number" == typeof a.length)for (var e = a.length; e > c; c++)d.push(a[c]); else for (; a[c]; c++)d.push(a[c]);
        return d
      }
    }
    var u, v;
    G.documentElement.compareDocumentPosition ? u = function(a, b) {
      return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
    } : (u = function(a, b) {
      if (a === b)return h = !0, 0;
      if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
      var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
      if (g === i)return v(a, b);
      if (!g)return -1;
      if (!i)return 1;
      for (; j;)e.unshift(j), j = j.parentNode;
      for (j = i; j;)f.unshift(j), j = j.parentNode;
      c = e.length, d = f.length;
      for (var k = 0; c > k && d > k; k++)if (e[k] !== f[k])return v(e[k], f[k]);
      return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
    }, v = function(a, b, c) {
      if (a === b)return c;
      for (var d = a.nextSibling; d;) {
        if (d === b)return -1;
        d = d.nextSibling
      }
      return 1
    }), function() {
      var a = G.createElement("div"), c = "script" + (new Date).getTime(), d = G.documentElement;
      a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), G.getElementById(c) && (o.find.ID = function(a, c, d) {
        if ("undefined" != typeof c.getElementById && !d) {
          var e = c.getElementById(a[1]);
          return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
        }
      }, o.filter.ID = function(a, b) {
        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
        return 1 === a.nodeType && c && c.nodeValue === b
      }), d.removeChild(a), d = a = null
    }(), function() {
      var a = G.createElement("div");
      a.appendChild(G.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
        var c = b.getElementsByTagName(a[1]);
        if ("*" === a[1]) {
          for (var d = [], e = 0; c[e]; e++)1 === c[e].nodeType && d.push(c[e]);
          c = d
        }
        return c
      }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
        return a.getAttribute("href", 2)
      }), a = null
    }(), G.querySelectorAll && function() {
      var a = m, b = G.createElement("div"), c = "__sizzle__";
      if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
        m = function(b, d, e, f) {
          if (d = d || G, !f && !m.isXML(d)) {
            var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
            if (g && (1 === d.nodeType || 9 === d.nodeType)) {
              if (g[1])return s(d.getElementsByTagName(b), e);
              if (g[2] && o.find.CLASS && d.getElementsByClassName)return s(d.getElementsByClassName(g[2]), e)
            }
            if (9 === d.nodeType) {
              if ("body" === b && d.body)return s([d.body], e);
              if (g && g[3]) {
                var h = d.getElementById(g[3]);
                if (!h || !h.parentNode)return s([], e);
                if (h.id === g[3])return s([h], e)
              }
              try {
                return s(d.querySelectorAll(b), e)
              } catch (i) {
              }
            } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
              var j = d, k = d.getAttribute("id"), l = k || c, n = d.parentNode, p = /^\s*[+~]/.test(b);
              k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), p && n && (d = d.parentNode);
              try {
                if (!p || n)return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
              } catch (q) {
              } finally {
                k || j.removeAttribute("id")
              }
            }
          }
          return a(b, d, e, f)
        };
        for (var d in a)m[d] = a[d];
        b = null
      }
    }(), function() {
      var a = G.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
      if (b) {
        var c = !b.call(G.createElement("div"), "div"), d = !1;
        try {
          b.call(G.documentElement, "[test!='']:sizzle")
        } catch (e) {
          d = !0
        }
        m.matchesSelector = function(a, e) {
          if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a))try {
            if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
              var f = b.call(a, e);
              if (f || !c || a.document && 11 !== a.document.nodeType)return f
            }
          } catch (g) {
          }
          return m(e, null, null, [a]).length > 0
        }
      }
    }(), function() {
      var a = G.createElement("div");
      if (a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length) {
        if (a.lastChild.className = "e", 1 === a.getElementsByClassName("e").length)return;
        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
          return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
        }, a = null
      }
    }(), G.documentElement.contains ? m.contains = function(a, b) {
      return a !== b && (a.contains ? a.contains(b) : !0)
    } : G.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
      return !!(16 & a.compareDocumentPosition(b))
    } : m.contains = function() {
      return !1
    }, m.isXML = function(a) {
      var b = (a ? a.ownerDocument || a : 0).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    };
    var w = function(a, b, c) {
      for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);)f += d[0], a = a.replace(o.match.PSEUDO, "");
      a = o.relative[a] ? a + "*" : a;
      for (var h = 0, i = g.length; i > h; h++)m(a, g[h], e, c);
      return m.filter(f, e)
    };
    m.attr = J.attr, m.selectors.attrMap = {}, J.find = m, J.expr = m.selectors, J.expr[":"] = J.expr.filters, J.unique = m.uniqueSort, J.text = m.getText, J.isXMLDoc = m.isXML, J.contains = m.contains
  }();
  var ha = /Until$/, ia = /^(?:parents|prevUntil|prevAll)/, ja = /,/, ka = /^.[^:#\[\.,]*$/, la = Array.prototype.slice, ma = J.expr.match.globalPOS, na = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  J.fn.extend({
    find: function(a) {
      var b, c, d = this;
      if ("string" != typeof a)return J(a).filter(function() {
        for (b = 0, c = d.length; c > b; b++)if (J.contains(d[b], this))return !0
      });
      var e, f, g, h = this.pushStack("", "find", a);
      for (b = 0, c = this.length; c > b; b++)if (e = h.length, J.find(a, this[b], h), b > 0)for (f = e; f < h.length; f++)for (g = 0; e > g; g++)if (h[g] === h[f]) {
        h.splice(f--, 1);
        break
      }
      return h
    }, has: function(a) {
      var b = J(a);
      return this.filter(function() {
        for (var a = 0, c = b.length; c > a; a++)if (J.contains(this, b[a]))return !0
      })
    }, not: function(a) {
      return this.pushStack(y(this, a, !1), "not", a)
    }, filter: function(a) {
      return this.pushStack(y(this, a, !0), "filter", a)
    }, is: function(a) {
      return !!a && ("string" == typeof a ? ma.test(a) ? J(a, this.context).index(this[0]) >= 0 : J.filter(a, this).length > 0 : this.filter(a).length > 0)
    }, closest: function(a, b) {
      var c, d, e = [], f = this[0];
      if (J.isArray(a)) {
        for (var g = 1; f && f.ownerDocument && f !== b;) {
          for (c = 0; c < a.length; c++)J(f).is(a[c]) && e.push({
            selector: a[c],
            elem: f,
            level: g
          });
          f = f.parentNode, g++
        }
        return e
      }
      var h = ma.test(a) || "string" != typeof a ? J(a, b || this.context) : 0;
      for (c = 0, d = this.length; d > c; c++)for (f = this[c]; f;) {
        if (h ? h.index(f) > -1 : J.find.matchesSelector(f, a)) {
          e.push(f);
          break
        }
        if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType)break
      }
      return e = e.length > 1 ? J.unique(e) : e, this.pushStack(e, "closest", a)
    }, index: function(a) {
      return a ? "string" == typeof a ? J.inArray(this[0], J(a)) : J.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    }, add: function(a, b) {
      var c = "string" == typeof a ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a), d = J.merge(this.get(), c);
      return this.pushStack(z(c[0]) || z(d[0]) ? d : J.unique(d))
    }, andSelf: function() {
      return this.add(this.prevObject)
    }
  }), J.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    }, parents: function(a) {
      return J.dir(a, "parentNode")
    }, parentsUntil: function(a, b, c) {
      return J.dir(a, "parentNode", c)
    }, next: function(a) {
      return J.nth(a, 2, "nextSibling")
    }, prev: function(a) {
      return J.nth(a, 2, "previousSibling")
    }, nextAll: function(a) {
      return J.dir(a, "nextSibling")
    }, prevAll: function(a) {
      return J.dir(a, "previousSibling")
    }, nextUntil: function(a, b, c) {
      return J.dir(a, "nextSibling", c)
    }, prevUntil: function(a, b, c) {
      return J.dir(a, "previousSibling", c)
    }, siblings: function(a) {
      return J.sibling((a.parentNode || {}).firstChild, a)
    }, children: function(a) {
      return J.sibling(a.firstChild)
    }, contents: function(a) {
      return J.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : J.makeArray(a.childNodes)
    }
  }, function(a, b) {
    J.fn[a] = function(c, d) {
      var e = J.map(this, b, c);
      return ha.test(a) || (d = c), d && "string" == typeof d && (e = J.filter(d, e)), e = this.length > 1 && !na[a] ? J.unique(e) : e, (this.length > 1 || ja.test(d)) && ia.test(a) && (e = e.reverse()), this.pushStack(e, a, la.call(arguments).join(","))
    }
  }), J.extend({
    filter: function(a, b, c) {
      return c && (a = ":not(" + a + ")"), 1 === b.length ? J.find.matchesSelector(b[0], a) ? [b[0]] : [] : J.find.matches(a, b)
    }, dir: function(a, c, d) {
      for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !J(f).is(d));)1 === f.nodeType && e.push(f), f = f[c];
      return e
    }, nth: function(a, b, c, d) {
      b = b || 1;
      for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
      return a
    }, sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  });
  var oa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", pa = / jQuery\d+="(?:\d+|null)"/g, qa = /^\s+/, ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, sa = /<([\w:]+)/, ta = /<tbody/i, ua = /<|&#?\w+;/, va = /<(?:script|style)/i, wa = /<(?:script|object|embed|option|style)/i, xa = new RegExp("<(?:" + oa + ")[\\s/>]", "i"), ya = /checked\s*(?:[^=]|=\s*.checked.)/i, za = /\/(java|ecma)script/i, Aa = /^\s*<!(?:\[CDATA\[|\-\-)/, Ba = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    area: [1, "<map>", "</map>"],
    _default: [0, "", ""]
  }, Ca = x(G);
  Ba.optgroup = Ba.option, Ba.tbody = Ba.tfoot = Ba.colgroup = Ba.caption = Ba.thead, Ba.th = Ba.td, J.support.htmlSerialize || (Ba._default = [1, "div<div>", "</div>"]), J.fn.extend({
    text: function(a) {
      return J.access(this, function(a) {
        return a === b ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(a))
      }, null, a, arguments.length)
    }, wrapAll: function(a) {
      if (J.isFunction(a))return this.each(function(b) {
        J(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    }, wrapInner: function(a) {
      return J.isFunction(a) ? this.each(function(b) {
        J(this).wrapInner(a.call(this, b))
      }) : this.each(function() {
        var b = J(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    }, wrap: function(a) {
      var b = J.isFunction(a);
      return this.each(function(c) {
        J(this).wrapAll(b ? a.call(this, c) : a)
      })
    }, unwrap: function() {
      return this.parent().each(function() {
        J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
      }).end()
    }, append: function() {
      return this.domManip(arguments, !0, function(a) {
        1 === this.nodeType && this.appendChild(a)
      })
    }, prepend: function() {
      return this.domManip(arguments, !0, function(a) {
        1 === this.nodeType && this.insertBefore(a, this.firstChild)
      })
    }, before: function() {
      if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this)
      });
      if (arguments.length) {
        var a = J.clean(arguments);
        return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
      }
    }, after: function() {
      if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this.nextSibling)
      });
      if (arguments.length) {
        var a = this.pushStack(this, "after", arguments);
        return a.push.apply(a, J.clean(arguments)), a
      }
    }, remove: function(a, b) {
      for (var c, d = 0; null != (c = this[d]); d++)(!a || J.filter(a, [c]).length) && (!b && 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), J.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
      return this
    }, empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++)for (1 === a.nodeType && J.cleanData(a.getElementsByTagName("*")); a.firstChild;)a.removeChild(a.firstChild);
      return this
    }, clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return J.clone(this, a, b)
      })
    }, html: function(a) {
      return J.access(this, function(a) {
        var c = this[0] || {}, d = 0, e = this.length;
        if (a === b)return 1 === c.nodeType ? c.innerHTML.replace(pa, "") : null;
        if (!("string" != typeof a || va.test(a) || !J.support.leadingWhitespace && qa.test(a) || Ba[(sa.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ra, "<$1></$2>");
          try {
            for (; e > d; d++)c = this[d] || {}, 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
            c = 0
          } catch (f) {
          }
        }
        c && this.empty().append(a)
      }, null, a, arguments.length)
    }, replaceWith: function(a) {
      return this[0] && this[0].parentNode ? J.isFunction(a) ? this.each(function(b) {
        var c = J(this), d = c.html();
        c.replaceWith(a.call(this, b, d))
      }) : ("string" != typeof a && (a = J(a).detach()), this.each(function() {
        var b = this.nextSibling, c = this.parentNode;
        J(this).remove(), b ? J(b).before(a) : J(c).append(a)
      })) : this.length ? this.pushStack(J(J.isFunction(a) ? a() : a), "replaceWith", a) : this
    }, detach: function(a) {
      return this.remove(a, !0)
    }, domManip: function(a, c, d) {
      var e, f, g, h, i = a[0], j = [];
      if (!J.support.checkClone && 3 === arguments.length && "string" == typeof i && ya.test(i))return this.each(function() {
        J(this).domManip(a, c, d, !0)
      });
      if (J.isFunction(i))return this.each(function(e) {
        var f = J(this);
        a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
      });
      if (this[0]) {
        if (h = i && i.parentNode, e = J.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {fragment: h} : J.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild, f) {
          c = c && J.nodeName(f, "tr");
          for (var k = 0, l = this.length, m = l - 1; l > k; k++)d.call(c ? w(this[k], f) : this[k], e.cacheable || l > 1 && m > k ? J.clone(g, !0, !0) : g)
        }
        j.length && J.each(j, function(a, b) {
          b.src ? J.ajax({
            type: "GET",
            global: !1,
            url: b.src,
            async: !1,
            dataType: "script"
          }) : J.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Aa, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
        })
      }
      return this
    }
  }), J.buildFragment = function(a, b, c) {
    var d, e, f, g, h = a[0];
    return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = G), 1 === a.length && "string" == typeof h && h.length < 512 && g === G && "<" === h.charAt(0) && !wa.test(h) && (J.support.checkClone || !ya.test(h)) && (J.support.html5Clone || !xa.test(h)) && (e = !0, f = J.fragments[h], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), J.clean(a, g, d, c)), e && (J.fragments[h] = f ? d : 1), {
      fragment: d,
      cacheable: e
    }
  }, J.fragments = {}, J.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    J.fn[a] = function(c) {
      var d = [], e = J(c), f = 1 === this.length && this[0].parentNode;
      if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length)return e[b](this[0]), this;
      for (var g = 0, h = e.length; h > g; g++) {
        var i = (g > 0 ? this.clone(!0) : this).get();
        J(e[g])[b](i), d = d.concat(i)
      }
      return this.pushStack(d, a, e.selector)
    }
  }), J.extend({
    clone: function(a, b, c) {
      var d, e, f, g = J.support.html5Clone || J.isXMLDoc(a) || !xa.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : q(a);
      if (!(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || J.isXMLDoc(a)))for (u(a, g), d = t(a), e = t(g), f = 0; d[f]; ++f)e[f] && u(d[f], e[f]);
      if (b && (v(a, g), c))for (d = t(a), e = t(g), f = 0; d[f]; ++f)v(d[f], e[f]);
      return d = e = null, g
    }, clean: function(a, b, c, d) {
      var e, f, g, h = [];
      b = b || G, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || G);
      for (var i, j = 0; null != (i = a[j]); j++)if ("number" == typeof i && (i += ""), i) {
        if ("string" == typeof i)if (ua.test(i)) {
          i = i.replace(ra, "<$1></$2>");
          var k, l = (sa.exec(i) || ["", ""])[1].toLowerCase(), m = Ba[l] || Ba._default, n = m[0], o = b.createElement("div"), p = Ca.childNodes;
          for (b === G ? Ca.appendChild(o) : x(b).appendChild(o), o.innerHTML = m[1] + i + m[2]; n--;)o = o.lastChild;
          if (!J.support.tbody) {
            var q = ta.test(i), s = "table" !== l || q ? "<table>" !== m[1] || q ? [] : o.childNodes : o.firstChild && o.firstChild.childNodes;
            for (g = s.length - 1; g >= 0; --g)J.nodeName(s[g], "tbody") && !s[g].childNodes.length && s[g].parentNode.removeChild(s[g])
          }
          !J.support.leadingWhitespace && qa.test(i) && o.insertBefore(b.createTextNode(qa.exec(i)[0]), o.firstChild), i = o.childNodes, o && (o.parentNode.removeChild(o), p.length > 0 && (k = p[p.length - 1], k && k.parentNode && k.parentNode.removeChild(k)))
        } else i = b.createTextNode(i);
        var t;
        if (!J.support.appendChecked)if (i[0] && "number" == typeof(t = i.length))for (g = 0; t > g; g++)r(i[g]); else r(i);
        i.nodeType ? h.push(i) : h = J.merge(h, i)
      }
      if (c)for (e = function(a) {
        return !a.type || za.test(a.type)
      }, j = 0; h[j]; j++)if (f = h[j], d && J.nodeName(f, "script") && (!f.type || za.test(f.type)))d.push(f.parentNode ? f.parentNode.removeChild(f) : f); else {
        if (1 === f.nodeType) {
          var u = J.grep(f.getElementsByTagName("script"), e);
          h.splice.apply(h, [j + 1, 0].concat(u))
        }
        c.appendChild(f)
      }
      return h
    }, cleanData: function(a) {
      for (var b, c, d, e = J.cache, f = J.event.special, g = J.support.deleteExpando, h = 0; null != (d = a[h]); h++)if ((!d.nodeName || !J.noData[d.nodeName.toLowerCase()]) && (c = d[J.expando])) {
        if (b = e[c], b && b.events) {
          for (var i in b.events)f[i] ? J.event.remove(d, i) : J.removeEvent(d, i, b.handle);
          b.handle && (b.handle.elem = null)
        }
        g ? delete d[J.expando] : d.removeAttribute && d.removeAttribute(J.expando), delete e[c]
      }
    }
  });
  var Da, Ea, Fa, Ga = /alpha\([^)]*\)/i, Ha = /opacity=([^)]*)/, Ia = /([A-Z]|^ms)/g, Ja = /^[\-+]?(?:\d*\.)?\d+$/i, Ka = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, La = /^([\-+])=([\-+.\de]+)/, Ma = /^margin/, Na = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, Oa = ["Top", "Right", "Bottom", "Left"];
  J.fn.css = function(a, c) {
    return J.access(this, function(a, c, d) {
      return d !== b ? J.style(a, c, d) : J.css(a, c)
    }, a, c, arguments.length > 1)
  }, J.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Da(a, "opacity");
            return "" === c ? "1" : c
          }
          return a.style.opacity
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {"float": J.support.cssFloat ? "cssFloat" : "styleFloat"},
    style: function(a, c, d, e) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var f, g, h = J.camelCase(c), i = a.style, j = J.cssHooks[h];
        if (c = J.cssProps[h] || h, d === b)return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
        if (g = typeof d, "string" === g && (f = La.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(J.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d))return;
        if ("number" === g && !J.cssNumber[h] && (d += "px"), !(j && "set" in j && (d = j.set(a, d)) === b))try {
          i[c] = d
        } catch (k) {
        }
      }
    },
    css: function(a, c, d) {
      var e, f;
      return c = J.camelCase(c), f = J.cssHooks[c], c = J.cssProps[c] || c, "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Da ? Da(a, c) : void 0
    },
    swap: function(a, b, c) {
      var d, e, f = {};
      for (e in b)f[e] = a.style[e], a.style[e] = b[e];
      d = c.call(a);
      for (e in b)a.style[e] = f[e];
      return d
    }
  }), J.curCSS = J.css, G.defaultView && G.defaultView.getComputedStyle && (Ea = function(a, b) {
    var c, d, e, f, g = a.style;
    return b = b.replace(Ia, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), "" === c && !J.contains(a.ownerDocument.documentElement, a) && (c = J.style(a, b))), !J.support.pixelMargin && e && Ma.test(b) && Ka.test(c) && (f = g.width, g.width = c, c = e.width, g.width = f), c
  }), G.documentElement.currentStyle && (Fa = function(a, b) {
    var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
    return null == f && g && (e = g[b]) && (f = e), Ka.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), "" === f ? "auto" : f
  }), Da = Ea || Fa, J.each(["height", "width"], function(a, b) {
    J.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? 0 !== a.offsetWidth ? p(a, b, d) : J.swap(a, Na, function() {
          return p(a, b, d)
        }) : void 0
      }, set: function(a, b) {
        return Ja.test(b) ? b + "px" : b
      }
    }
  }), J.support.opacity || (J.cssHooks.opacity = {
    get: function(a, b) {
      return Ha.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
    }, set: function(a, b) {
      var c = a.style, d = a.currentStyle, e = J.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
      c.zoom = 1, b >= 1 && "" === J.trim(f.replace(Ga, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Ga.test(f) ? f.replace(Ga, e) : f + " " + e)
    }
  }), J(function() {
    J.support.reliableMarginRight || (J.cssHooks.marginRight = {
      get: function(a, b) {
        return J.swap(a, {display: "inline-block"}, function() {
          return b ? Da(a, "margin-right") : a.style.marginRight
        })
      }
    })
  }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(a) {
    var b = a.offsetWidth, c = a.offsetHeight;
    return 0 === b && 0 === c || !J.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || J.css(a, "display"))
  }, J.expr.filters.visible = function(a) {
    return !J.expr.filters.hidden(a)
  }), J.each({margin: "", padding: "", border: "Width"}, function(a, b) {
    J.cssHooks[a + b] = {
      expand: function(c) {
        var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
        for (d = 0; 4 > d; d++)f[a + Oa[d] + b] = e[d] || e[d - 2] || e[0];
        return f
      }
    }
  });
  var Pa, Qa, Ra = /%20/g, Sa = /\[\]$/, Ta = /\r?\n/g, Ua = /#.*$/, Va = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Wa = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Xa = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ya = /^(?:GET|HEAD)$/, Za = /^\/\//, $a = /\?/, _a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ab = /^(?:select|textarea)/i, bb = /\s+/, cb = /([?&])_=[^&]*/, db = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, eb = J.fn.load, fb = {}, gb = {}, hb = ["*/"] + ["*"];
  try {
    Pa = I.href
  } catch (ib) {
    Pa = G.createElement("a"), Pa.href = "", Pa = Pa.href
  }
  Qa = db.exec(Pa.toLowerCase()) || [], J.fn.extend({
    load: function(a, c, d) {
      if ("string" != typeof a && eb)return eb.apply(this, arguments);
      if (!this.length)return this;
      var e = a.indexOf(" ");
      if (e >= 0) {
        var f = a.slice(e, a.length);
        a = a.slice(0, e)
      }
      var g = "GET";
      c && (J.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = J.param(c, J.ajaxSettings.traditional), g = "POST"));
      var h = this;
      return J.ajax({
        url: a,
        type: g,
        dataType: "html",
        data: c,
        complete: function(a, b, c) {
          c = a.responseText, a.isResolved() && (a.done(function(a) {
            c = a
          }), h.html(f ? J("<div>").append(c.replace(_a, "")).find(f) : c)), d && h.each(d, [c, b, a])
        }
      }), this
    }, serialize: function() {
      return J.param(this.serializeArray())
    }, serializeArray: function() {
      return this.map(function() {
        return this.elements ? J.makeArray(this.elements) : this
      }).filter(function() {
        return this.name && !this.disabled && (this.checked || ab.test(this.nodeName) || Wa.test(this.type))
      }).map(function(a, b) {
        var c = J(this).val();
        return null == c ? null : J.isArray(c) ? J.map(c, function(a, c) {
          return {name: b.name, value: a.replace(Ta, "\r\n")}
        }) : {name: b.name, value: c.replace(Ta, "\r\n")}
      }).get()
    }
  }), J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
    J.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), J.each(["get", "post"], function(a, c) {
    J[c] = function(a, d, e, f) {
      return J.isFunction(d) && (f = f || e, e = d, d = b), J.ajax({
        type: c,
        url: a,
        data: d,
        success: e,
        dataType: f
      })
    }
  }), J.extend({
    getScript: function(a, c) {
      return J.get(a, b, c, "script")
    },
    getJSON: function(a, b, c) {
      return J.get(a, b, c, "json")
    },
    ajaxSetup: function(a, b) {
      return b ? m(a, J.ajaxSettings) : (b = a, a = J.ajaxSettings), m(a, b), a
    },
    ajaxSettings: {
      url: Pa,
      isLocal: Xa.test(Qa[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": hb
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText"},
      converters: {
        "* text": a.String,
        "text html": !0,
        "text json": J.parseJSON,
        "text xml": J.parseXML
      },
      flatOptions: {context: !0, url: !0}
    },
    ajaxPrefilter: o(fb),
    ajaxTransport: o(gb),
    ajax: function(a, c) {
      function d(a, c, d, g) {
        if (2 !== x) {
          x = 2, i && clearTimeout(i), h = b, f = g || "", y.readyState = a > 0 ? 4 : 0;
          var l, n, o, v, w, z = c, A = d ? k(p, y, d) : b;
          if (a >= 200 && 300 > a || 304 === a)if (p.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (J.lastModified[e] = v), (w = y.getResponseHeader("Etag")) && (J.etag[e] = w)), 304 === a)z = "notmodified", l = !0; else try {
            n = j(p, A), z = "success", l = !0
          } catch (B) {
            z = "parsererror", o = B
          } else o = z, (!z || a) && (z = "error", 0 > a && (a = 0));
          y.status = a, y.statusText = "" + (c || z), l ? s.resolveWith(q, [n, z, y]) : s.rejectWith(q, [y, z, o]), y.statusCode(u), u = b, m && r.trigger("ajax" + (l ? "Success" : "Error"), [y, p, l ? n : o]), t.fireWith(q, [y, z]), m && (r.trigger("ajaxComplete", [y, p]), --J.active || J.event.trigger("ajaxStop"))
        }
      }

      "object" == typeof a && (c = a, a = b), c = c || {};
      var e, f, g, h, i, l, m, o, p = J.ajaxSetup({}, c), q = p.context || p, r = q !== p && (q.nodeType || q instanceof J) ? J(q) : J.event, s = J.Deferred(), t = J.Callbacks("once memory"), u = p.statusCode || {}, v = {}, w = {}, x = 0, y = {
        readyState: 0,
        setRequestHeader: function(a, b) {
          if (!x) {
            var c = a.toLowerCase();
            a = w[c] = w[c] || a, v[a] = b
          }
          return this
        },
        getAllResponseHeaders: function() {
          return 2 === x ? f : null
        },
        getResponseHeader: function(a) {
          var c;
          if (2 === x) {
            if (!g)for (g = {}; c = Va.exec(f);)g[c[1].toLowerCase()] = c[2];
            c = g[a.toLowerCase()]
          }
          return c === b ? null : c
        },
        overrideMimeType: function(a) {
          return x || (p.mimeType = a), this
        },
        abort: function(a) {
          return a = a || "abort", h && h.abort(a), d(0, a), this
        }
      };
      if (s.promise(y), y.success = y.done, y.error = y.fail, y.complete = t.add, y.statusCode = function(a) {
            if (a) {
              var b;
              if (2 > x)for (b in a)u[b] = [u[b], a[b]]; else b = a[y.status], y.then(b, b)
            }
            return this
          }, p.url = ((a || p.url) + "").replace(Ua, "").replace(Za, Qa[1] + "//"), p.dataTypes = J.trim(p.dataType || "*").toLowerCase().split(bb), null == p.crossDomain && (l = db.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == Qa[1] && l[2] == Qa[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Qa[3] || ("http:" === Qa[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), n(fb, p, c, y), 2 === x)return !1;
      if (m = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Ya.test(p.type), m && 0 === J.active++ && J.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += ($a.test(p.url) ? "&" : "?") + p.data, delete p.data), e = p.url, p.cache === !1)) {
        var z = J.now(), A = p.url.replace(cb, "$1_=" + z);
        p.url = A + (A === p.url ? ($a.test(p.url) ? "&" : "?") + "_=" + z : "")
      }
      (p.data && p.hasContent && p.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", p.contentType), p.ifModified && (e = e || p.url, J.lastModified[e] && y.setRequestHeader("If-Modified-Since", J.lastModified[e]), J.etag[e] && y.setRequestHeader("If-None-Match", J.etag[e])), y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + hb + "; q=0.01" : "") : p.accepts["*"]);
      for (o in p.headers)y.setRequestHeader(o, p.headers[o]);
      if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x))return y.abort(), !1;
      for (o in{success: 1, error: 1, complete: 1})y[o](p[o]);
      if (h = n(gb, p, c, y)) {
        y.readyState = 1, m && r.trigger("ajaxSend", [y, p]), p.async && p.timeout > 0 && (i = setTimeout(function() {
          y.abort("timeout")
        }, p.timeout));
        try {
          x = 1, h.send(v, d)
        } catch (B) {
          if (!(2 > x))throw B;
          d(-1, B)
        }
      } else d(-1, "No Transport");
      return y
    },
    param: function(a, c) {
      var d = [], e = function(a, b) {
        b = J.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
      if (c === b && (c = J.ajaxSettings.traditional), J.isArray(a) || a.jquery && !J.isPlainObject(a))J.each(a, function() {
        e(this.name, this.value)
      }); else for (var f in a)l(f, a[f], c, e);
      return d.join("&").replace(Ra, "+")
    }
  }), J.extend({active: 0, lastModified: {}, etag: {}});
  var jb = J.now(), kb = /(\=)\?(&|$)|\?\?/i;
  J.ajaxSetup({
    jsonp: "callback", jsonpCallback: function() {
      return J.expando + "_" + jb++
    }
  }), J.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e = "string" == typeof b.data && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
    if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (kb.test(b.url) || e && kb.test(b.data))) {
      var f, g = b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h = a[g], i = b.url, j = b.data, k = "$1" + g + "$2";
      return b.jsonp !== !1 && (i = i.replace(kb, k), b.url === i && (e && (j = j.replace(kb, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function(a) {
        f = [a]
      }, d.always(function() {
        a[g] = h, f && J.isFunction(h) && a[g](f[0])
      }), b.converters["script json"] = function() {
        return f || J.error(g + " was not called"), f[0]
      }, b.dataTypes[0] = "json", "script"
    }
  }), J.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /javascript|ecmascript/},
    converters: {
      "text script": function(a) {
        return J.globalEval(a), a
      }
    }
  }), J.ajaxPrefilter("script", function(a) {
    a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), J.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var c, d = G.head || G.getElementsByTagName("head")[0] || G.documentElement;
      return {
        send: function(e, f) {
          c = G.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
            (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
          }, d.insertBefore(c, d.firstChild)
        }, abort: function() {
          c && c.onload(0, 1)
        }
      }
    }
  });
  var lb, mb = a.ActiveXObject ? function() {
    for (var a in lb)lb[a](0, 1)
  } : !1, nb = 0;
  J.ajaxSettings.xhr = a.ActiveXObject ? function() {
    return !this.isLocal && i() || h()
  } : i, function(a) {
    J.extend(J.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
  }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(c) {
    if (!c.crossDomain || J.support.cors) {
      var d;
      return {
        send: function(e, f) {
          var g, h, i = c.xhr();
          if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)for (h in c.xhrFields)i[h] = c.xhrFields[h];
          c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (h in e)i.setRequestHeader(h, e[h])
          } catch (j) {
          }
          i.send(c.hasContent && c.data || null), d = function(a, e) {
            var h, j, k, l, m;
            try {
              if (d && (e || 4 === i.readyState))if (d = b, g && (i.onreadystatechange = J.noop, mb && delete lb[g]), e)4 !== i.readyState && i.abort(); else {
                h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                try {
                  l.text = i.responseText
                } catch (a) {
                }
                try {
                  j = i.statusText
                } catch (n) {
                  j = ""
                }
                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
              }
            } catch (o) {
              e || f(-1, o)
            }
            l && f(h, j, l, k)
          }, c.async && 4 !== i.readyState ? (g = ++nb, mb && (lb || (lb = {}, J(a).unload(mb)), lb[g] = d), i.onreadystatechange = d) : d()
        }, abort: function() {
          d && d(0, 1)
        }
      }
    }
  });
  var ob, pb, qb, rb, sb = {}, tb = /^(?:toggle|show|hide)$/, ub = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, vb = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
  J.fn.extend({
    show: function(a, b, c) {
      var f, g;
      if (a || 0 === a)return this.animate(e("show", 3), a, b, c);
      for (var h = 0, i = this.length; i > h; h++)f = this[h], f.style && (g = f.style.display, !J._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), ("" === g && "none" === J.css(f, "display") || !J.contains(f.ownerDocument.documentElement, f)) && J._data(f, "olddisplay", d(f.nodeName)));
      for (h = 0; i > h; h++)f = this[h], f.style && (g = f.style.display, ("" === g || "none" === g) && (f.style.display = J._data(f, "olddisplay") || ""));
      return this
    }, hide: function(a, b, c) {
      if (a || 0 === a)return this.animate(e("hide", 3), a, b, c);
      for (var d, f, g = 0, h = this.length; h > g; g++)d = this[g], d.style && (f = J.css(d, "display"), "none" !== f && !J._data(d, "olddisplay") && J._data(d, "olddisplay", f));
      for (g = 0; h > g; g++)this[g].style && (this[g].style.display = "none");
      return this
    }, _toggle: J.fn.toggle, toggle: function(a, b, c) {
      var d = "boolean" == typeof a;
      return J.isFunction(a) && J.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
        var b = d ? a : J(this).is(":hidden");
        J(this)[b ? "show" : "hide"]()
      }) : this.animate(e("toggle", 3), a, b, c), this
    }, fadeTo: function(a, b, c, d) {
      return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function(a, b, c, e) {
      function f() {
        g.queue === !1 && J._mark(this);
        var b, c, e, f, h, i, j, k, l, m, n, o = J.extend({}, g), p = 1 === this.nodeType, q = p && J(this).is(":hidden");
        o.animatedProperties = {};
        for (e in a)if (b = J.camelCase(e), e !== b && (a[b] = a[e], delete a[e]), (h = J.cssHooks[b]) && "expand" in h) {
          i = h.expand(a[b]), delete a[b];
          for (e in i)e in a || (a[e] = i[e])
        }
        for (b in a) {
          if (c = a[b], J.isArray(c) ? (o.animatedProperties[b] = c[1], c = a[b] = c[0]) : o.animatedProperties[b] = o.specialEasing && o.specialEasing[b] || o.easing || "swing", "hide" === c && q || "show" === c && !q)return o.complete.call(this);
          p && ("height" === b || "width" === b) && (o.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === J.css(this, "display") && "none" === J.css(this, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
        }
        null != o.overflow && (this.style.overflow = "hidden");
        for (e in a)f = new J.fx(this, o, e), c = a[e], tb.test(c) ? (n = J._data(this, "toggle" + e) || ("toggle" === c ? q ? "show" : "hide" : 0), n ? (J._data(this, "toggle" + e, "show" === n ? "hide" : "show"), f[n]()) : f[c]()) : (j = ub.exec(c), k = f.cur(), j ? (l = parseFloat(j[2]), m = j[3] || (J.cssNumber[e] ? "" : "px"), "px" !== m && (J.style(this, e, (l || 1) + m), k = (l || 1) / f.cur() * k, J.style(this, e, k + m)), j[1] && (l = ("-=" === j[1] ? -1 : 1) * l + k), f.custom(k, l, m)) : f.custom(k, c, ""));
        return !0
      }

      var g = J.speed(b, c, e);
      return J.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = J.extend({}, a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f))
    }, stop: function(a, c, d) {
      return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
        function b(a, b, c) {
          var e = b[c];
          J.removeData(a, c, !0), e.stop(d)
        }

        var c, e = !1, f = J.timers, g = J._data(this);
        if (d || J._unmark(!0, this), null == a)for (c in g)g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c); else g[c = a + ".run"] && g[c].stop && b(this, g, c);
        for (c = f.length; c--;)f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
        (!d || !e) && J.dequeue(this, a)
      })
    }
  }), J.each({
    slideDown: e("show", 1),
    slideUp: e("hide", 1),
    slideToggle: e("toggle", 1),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(a, b) {
    J.fn[a] = function(a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), J.extend({
    speed: function(a, b, c) {
      var d = a && "object" == typeof a ? J.extend({}, a) : {
        complete: c || !c && b || J.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !J.isFunction(b) && b
      };
      return d.duration = J.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function(a) {
        J.isFunction(d.old) && d.old.call(this), d.queue ? J.dequeue(this, d.queue) : a !== !1 && J._unmark(this)
      }, d
    }, easing: {
      linear: function(a) {
        return a
      }, swing: function(a) {
        return -Math.cos(a * Math.PI) / 2 + .5
      }
    }, timers: [], fx: function(a, b, c) {
      this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
    }
  }), J.fx.prototype = {
    update: function() {
      this.options.step && this.options.step.call(this.elem, this.now, this), (J.fx.step[this.prop] || J.fx.step._default)(this)
    }, cur: function() {
      if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))return this.elem[this.prop];
      var a, b = J.css(this.elem, this.prop);
      return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
    }, custom: function(a, c, d) {
      function e(a) {
        return f.step(a)
      }

      var f = this, h = J.fx;
      this.startTime = rb || g(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (J.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() {
        J._data(f.elem, "fxshow" + f.prop) === b && (f.options.hide ? J._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && J._data(f.elem, "fxshow" + f.prop, f.end))
      }, e() && J.timers.push(e) && !qb && (qb = setInterval(h.tick, h.interval))
    }, show: function() {
      var a = J._data(this.elem, "fxshow" + this.prop);
      this.options.orig[this.prop] = a || J.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), J(this.elem).show()
    }, hide: function() {
      this.options.orig[this.prop] = J._data(this.elem, "fxshow" + this.prop) || J.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    }, step: function(a) {
      var b, c, d, e = rb || g(), f = !0, h = this.elem, i = this.options;
      if (a || e >= i.duration + this.startTime) {
        this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
        for (b in i.animatedProperties)i.animatedProperties[b] !== !0 && (f = !1);
        if (f) {
          if (null != i.overflow && !J.support.shrinkWrapBlocks && J.each(["", "X", "Y"], function(a, b) {
                h.style["overflow" + b] = i.overflow[a]
              }), i.hide && J(h).hide(), i.hide || i.show)for (b in i.animatedProperties)J.style(h, b, i.orig[b]), J.removeData(h, "fxshow" + b, !0), J.removeData(h, "toggle" + b, !0);
          d = i.complete, d && (i.complete = !1, d.call(h))
        }
        return !1
      }
      return i.duration == 1 / 0 ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = J.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
    }
  }, J.extend(J.fx, {
    tick: function() {
      for (var a, b = J.timers, c = 0; c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1);
      b.length || J.fx.stop()
    },
    interval: 13,
    stop: function() {
      clearInterval(qb), qb = null
    },
    speeds: {slow: 600, fast: 200, _default: 400},
    step: {
      opacity: function(a) {
        J.style(a.elem, "opacity", a.now)
      }, _default: function(a) {
        a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
      }
    }
  }), J.each(vb.concat.apply([], vb), function(a, b) {
    b.indexOf("margin") && (J.fx.step[b] = function(a) {
      J.style(a.elem, b, Math.max(0, a.now) + a.unit)
    })
  }), J.expr && J.expr.filters && (J.expr.filters.animated = function(a) {
    return J.grep(J.timers, function(b) {
      return a === b.elem
    }).length
  });
  var wb, xb = /^t(?:able|d|h)$/i, yb = /^(?:body|html)$/i;
  wb = "getBoundingClientRect" in G.documentElement ? function(a, b, d, e) {
    try {
      e = a.getBoundingClientRect()
    } catch (f) {
    }
    if (!e || !J.contains(d, a))return e ? {top: e.top, left: e.left} : {
      top: 0,
      left: 0
    };
    var g = b.body, h = c(b), i = d.clientTop || g.clientTop || 0, j = d.clientLeft || g.clientLeft || 0, k = h.pageYOffset || J.support.boxModel && d.scrollTop || g.scrollTop, l = h.pageXOffset || J.support.boxModel && d.scrollLeft || g.scrollLeft, m = e.top + k - i, n = e.left + l - j;
    return {top: m, left: n}
  } : function(a, b, c) {
    for (var d, e = a.offsetParent, f = a, g = b.body, h = b.defaultView, i = h ? h.getComputedStyle(a, null) : a.currentStyle, j = a.offsetTop, k = a.offsetLeft; (a = a.parentNode) && a !== g && a !== c && (!J.support.fixedPosition || "fixed" !== i.position);)d = h ? h.getComputedStyle(a, null) : a.currentStyle, j -= a.scrollTop, k -= a.scrollLeft, a === e && (j += a.offsetTop, k += a.offsetLeft, J.support.doesNotAddBorder && (!J.support.doesAddBorderForTableAndCells || !xb.test(a.nodeName)) && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), f = e, e = a.offsetParent), J.support.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), i = d;
    return ("relative" === i.position || "static" === i.position) && (j += g.offsetTop, k += g.offsetLeft), J.support.fixedPosition && "fixed" === i.position && (j += Math.max(c.scrollTop, g.scrollTop), k += Math.max(c.scrollLeft, g.scrollLeft)), {
      top: j,
      left: k
    }
  }, J.fn.offset = function(a) {
    if (arguments.length)return a === b ? this : this.each(function(b) {
      J.offset.setOffset(this, a, b)
    });
    var c = this[0], d = c && c.ownerDocument;
    return d ? c === d.body ? J.offset.bodyOffset(c) : wb(c, d, d.documentElement) : null
  }, J.offset = {
    bodyOffset: function(a) {
      var b = a.offsetTop, c = a.offsetLeft;
      return J.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(J.css(a, "marginTop")) || 0, c += parseFloat(J.css(a, "marginLeft")) || 0), {
        top: b,
        left: c
      }
    }, setOffset: function(a, b, c) {
      var d = J.css(a, "position");
      "static" === d && (a.style.position = "relative");
      var e, f, g = J(a), h = g.offset(), i = J.css(a, "top"), j = J.css(a, "left"), k = ("absolute" === d || "fixed" === d) && J.inArray("auto", [i, j]) > -1, l = {}, m = {};
      k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), J.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
    }
  }, J.fn.extend({
    position: function() {
      if (!this[0])return null;
      var a = this[0], b = this.offsetParent(), c = this.offset(), d = yb.test(b[0].nodeName) ? {
        top: 0,
        left: 0
      } : b.offset();
      return c.top -= parseFloat(J.css(a, "marginTop")) || 0, c.left -= parseFloat(J.css(a, "marginLeft")) || 0, d.top += parseFloat(J.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(J.css(b[0], "borderLeftWidth")) || 0, {
        top: c.top - d.top,
        left: c.left - d.left
      }
    }, offsetParent: function() {
      return this.map(function() {
        for (var a = this.offsetParent || G.body; a && !yb.test(a.nodeName) && "static" === J.css(a, "position");)a = a.offsetParent;
        return a
      })
    }
  }), J.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, d) {
    var e = /Y/.test(d);
    J.fn[a] = function(f) {
      return J.access(this, function(a, f, g) {
        var h = c(a);
        return g === b ? h ? d in h ? h[d] : J.support.boxModel && h.document.documentElement[f] || h.document.body[f] : a[f] : void(h ? h.scrollTo(e ? J(h).scrollLeft() : g, e ? g : J(h).scrollTop()) : a[f] = g)
      }, a, f, arguments.length, null)
    }
  }), J.each({Height: "height", Width: "width"}, function(a, c) {
    var d = "client" + a, e = "scroll" + a, f = "offset" + a;
    J.fn["inner" + a] = function() {
      var a = this[0];
      return a ? a.style ? parseFloat(J.css(a, c, "padding")) : this[c]() : null
    }, J.fn["outer" + a] = function(a) {
      var b = this[0];
      return b ? b.style ? parseFloat(J.css(b, c, a ? "margin" : "border")) : this[c]() : null
    }, J.fn[c] = function(a) {
      return J.access(this, function(a, c, g) {
        var h, i, j, k;
        return J.isWindow(a) ? (h = a.document, i = h.documentElement[d], J.support.boxModel && i || h.body && h.body[d] || i) : 9 === a.nodeType ? (h = a.documentElement, h[d] >= h[e] ? h[d] : Math.max(a.body[e], h[e], a.body[f], h[f])) : g === b ? (j = J.css(a, c), k = parseFloat(j), J.isNumeric(k) ? k : j) : void J(a).css(c, g)
      }, c, a, arguments.length, null)
    }
  }), a.jQuery = a.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return J
  })
}(window);

window.Modernizr = function(a, b, c) {
  function d(a) {
    t.cssText = a
  }

  function e(a, b) {
    return d(x.join(a + ";") + (b || ""))
  }

  function f(a, b) {
    return typeof a === b
  }

  function g(a, b) {
    return !!~("" + a).indexOf(b)
  }

  function h(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!g(e, "-") && t[e] !== c)return "pfx" == b ? e : !0
    }
    return !1
  }

  function i(a, b, d) {
    for (var e in a) {
      var g = b[a[e]];
      if (g !== c)return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
    }
    return !1
  }

  function j(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + z.join(d + " ") + d).split(" ");
    return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
  }

  function k() {
    o.input = function(c) {
      for (var d = 0, e = c.length; e > d; d++)E[c[d]] = c[d] in u;
      return E.list && (E.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), E
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        o.inputtypes = function(a) {
          for (var d, e, f, g = 0, h = a.length; h > g; g++)u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
          return D
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
  }

  var l, m, n = "2.8.3", o = {}, p = !0, q = b.documentElement, r = "modernizr", s = b.createElement(r), t = s.style, u = b.createElement("input"), v = ":)", w = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "), y = "Webkit Moz O ms", z = y.split(" "), A = y.toLowerCase().split(" "), B = {svg: "http://www.w3.org/2000/svg"}, C = {}, D = {}, E = {}, F = [], G = F.slice, H = function(a, c, d, e) {
    var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
    if (parseInt(d, 10))for (; d--;)h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
    return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
  }, I = function() {
    function a(a, e) {
      e = e || b.createElement(d[a] || "div"), a = "on" + a;
      var g = a in e;
      return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
    }

    var d = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img"
    };
    return a
  }(), J = {}.hasOwnProperty;
  m = f(J, "undefined") || f(J.call, "undefined") ? function(a, b) {
    return b in a && f(a.constructor.prototype[b], "undefined")
  } : function(a, b) {
    return J.call(a, b)
  }, Function.prototype.bind || (Function.prototype.bind = function(a) {
    var b = this;
    if ("function" != typeof b)throw new TypeError;
    var c = G.call(arguments, 1), d = function() {
      if (this instanceof d) {
        var e = function() {
        };
        e.prototype = b.prototype;
        var f = new e, g = b.apply(f, c.concat(G.call(arguments)));
        return Object(g) === g ? g : f
      }
      return b.apply(a, c.concat(G.call(arguments)))
    };
    return d
  }), C.flexbox = function() {
    return j("flexWrap")
  }, C.canvas = function() {
    var a = b.createElement("canvas");
    return !!a.getContext && !!a.getContext("2d")
  }, C.canvastext = function() {
    return !!o.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
  }, C.webgl = function() {
    return !!a.WebGLRenderingContext
  }, C.touch = function() {
    var c;
    return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
      c = 9 === a.offsetTop
    }), c
  }, C.geolocation = function() {
    return "geolocation" in navigator
  }, C.postmessage = function() {
    return !!a.postMessage
  }, C.websqldatabase = function() {
    return !!a.openDatabase
  }, C.indexedDB = function() {
    return !!j("indexedDB", a)
  }, C.hashchange = function() {
    return I("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
  }, C.history = function() {
    return !!a.history && !!history.pushState
  }, C.draganddrop = function() {
    var a = b.createElement("div");
    return "draggable" in a || "ondragstart" in a && "ondrop" in a
  }, C.websockets = function() {
    return "WebSocket" in a || "MozWebSocket" in a
  }, C.rgba = function() {
    return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
  }, C.hsla = function() {
    return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
  }, C.multiplebgs = function() {
    return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
  }, C.backgroundsize = function() {
    return j("backgroundSize")
  }, C.borderimage = function() {
    return j("borderImage")
  }, C.borderradius = function() {
    return j("borderRadius")
  }, C.boxshadow = function() {
    return j("boxShadow")
  }, C.textshadow = function() {
    return "" === b.createElement("div").style.textShadow
  }, C.opacity = function() {
    return e("opacity:.55"), /^0.55$/.test(t.opacity)
  }, C.cssanimations = function() {
    return j("animationName")
  }, C.csscolumns = function() {
    return j("columnCount")
  }, C.cssgradients = function() {
    var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
    return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
  }, C.cssreflections = function() {
    return j("boxReflect")
  }, C.csstransforms = function() {
    return !!j("transform")
  }, C.csstransforms3d = function() {
    var a = !!j("perspective");
    return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
      a = 9 === b.offsetLeft && 3 === b.offsetHeight
    }), a
  }, C.csstransitions = function() {
    return j("transition")
  }, C.fontface = function() {
    var a;
    return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
      var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
      a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
    }), a
  }, C.generatedcontent = function() {
    var a;
    return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
      a = b.offsetHeight >= 3
    }), a
  }, C.video = function() {
    var a = b.createElement("video"), c = !1;
    try {
      (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
    } catch (d) {
    }
    return c
  }, C.audio = function() {
    var a = b.createElement("audio"), c = !1;
    try {
      (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
    } catch (d) {
    }
    return c
  }, C.localstorage = function() {
    try {
      return localStorage.setItem(r, r), localStorage.removeItem(r), !0
    } catch (a) {
      return !1
    }
  }, C.sessionstorage = function() {
    try {
      return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
    } catch (a) {
      return !1
    }
  }, C.webworkers = function() {
    return !!a.Worker
  }, C.applicationcache = function() {
    return !!a.applicationCache
  }, C.svg = function() {
    return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
  }, C.inlinesvg = function() {
    var a = b.createElement("div");
    return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
  }, C.smil = function() {
    return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
  }, C.svgclippaths = function() {
    return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
  };
  for (var K in C)m(C, K) && (l = K.toLowerCase(), o[l] = C[K](), F.push((o[l] ? "" : "no-") + l));
  return o.input || k(), o.addTest = function(a, b) {
    if ("object" == typeof a)for (var d in a)m(a, d) && o.addTest(d, a[d]); else {
      if (a = a.toLowerCase(), o[a] !== c)return o;
      b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
    }
    return o
  }, d(""), s = u = null, function(a, b) {
    function c(a, b) {
      var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
      return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function d() {
      var a = s.elements;
      return "string" == typeof a ? a.split(" ") : a
    }

    function e(a) {
      var b = r[a[p]];
      return b || (b = {}, q++, a[p] = q, r[q] = b), b
    }

    function f(a, c, d) {
      if (c || (c = b), k)return c.createElement(a);
      d || (d = e(c));
      var f;
      return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
    }

    function g(a, c) {
      if (a || (a = b), k)return a.createDocumentFragment();
      c = c || e(a);
      for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)f.createElement(h[g]);
      return f
    }

    function h(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
        return s.shivMethods ? f(c, a, b) : b.createElem(c)
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(s, b.frag)
    }

    function i(a) {
      a || (a = b);
      var d = e(a);
      return s.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
    }

    var j, k, l = "3.7.0", m = a.html5 || {}, n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p = "_html5shiv", q = 0, r = {};
    !function() {
      try {
        var a = b.createElement("a");
        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
      } catch (c) {
        j = !0, k = !0
      }
    }();
    var s = {
      elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: l,
      shivCSS: m.shivCSS !== !1,
      supportsUnknownElements: k,
      shivMethods: m.shivMethods !== !1,
      type: "default",
      shivDocument: i,
      createElement: f,
      createDocumentFragment: g
    };
    a.html5 = s, i(b)
  }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.hasEvent = I, o.testProp = function(a) {
    return h([a])
  }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
    return b ? j(a, b, c) : j(a, "pfx")
  }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
}(this, this.document);
function(a, b, c) {
  function d(a) {
    return "[object Function]" == q.call(a)
  }

  function e(a) {
    return "string" == typeof a
  }

  function f() {
  }

  function g(a) {
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a
  }

  function h() {
    var a = r.shift();
    s = 1, a ? a.t ? o(function() {
      ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
    }, 0) : (a(), h()) : s = 0
  }

  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
        "img" != a && o(function() {
          v.removeChild(l)
        }, 50);
        for (var d in A[c])A[c].hasOwnProperty(d) && A[c][d].onload()
      }
    }

    var j = j || m.errorTimeout, l = b.createElement(a), n = 0, q = 0, t = {
      t: d,
      s: c,
      e: f,
      a: i,
      x: j
    };
    1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
      k.call(this, q)
    }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
  }

  function j(a, b, c, d, f) {
    return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
  }

  function k() {
    var a = m;
    return a.loader = {load: j, i: 0}, a
  }

  var l, m, n = b.documentElement, o = a.setTimeout, p = b.getElementsByTagName("script")[0], q = {}.toString, r = [], s = 0, t = "MozAppearance" in n.style, u = t && !!b.createRange().compareNode, v = u ? n : p.parentNode, n = a.opera && "[object Opera]" == q.call(a.opera), n = !!b.attachEvent && !n, w = t ? "object" : n ? "script" : "img", x = n ? "script" : w, y = Array.isArray || function(a) {
        return "[object Array]" == q.call(a)
      }, z = [], A = {}, B = {
    timeout: function(a, b) {
      return b.length && (a.timeout = b[0]), a
    }
  };
  m = function(a) {
    function b(a) {
      var b, c, d, a = a.split("!"), e = z.length, f = a.pop(), g = a.length, f = {
        url: f,
        origUrl: f,
        prefixes: a
      };
      for (c = 0; g > c; c++)d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
      for (c = 0; e > c; c++)f = z[c](f);
      return f
    }

    function g(a, e, f, g, h) {
      var i = b(a), j = i.autoCallback;
      i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
      })))
    }

    function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a))c || (l = function() {
            var a = [].slice.call(arguments);
            m.apply(this, a), n()
          }), g(a, l, b, 0, j); else if (Object(a) === a)for (i in h = function() {
            var b, c = 0;
            for (b in a)a.hasOwnProperty(b) && c++;
            return c
          }(), a)a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
            var a = [].slice.call(arguments);
            m.apply(this, a), n()
          } : l[i] = function(a) {
            return function() {
              var b = [].slice.call(arguments);
              a && a.apply(this, b), n()
            }
          }(m[i])), g(a[i], l, b, i, j))
        } else!c && n()
      }

      var h, i, j = !!a.test, k = a.load || a.both, l = a.callback || f, m = l, n = a.complete || f;
      c(j ? a.yep : a.nope, !!k), k && c(k)
    }

    var i, j, l = this.yepnope.loader;
    if (e(a))g(a, 0, l, 0); else if (y(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
  }, m.addPrefix = function(a, b) {
    B[a] = b
  }, m.addFilter = function(a) {
    z.push(a)
  }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
    b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
    var k, l, n = b.createElement("script"), e = e || m.errorTimeout;
    n.src = a;
    for (l in d)n.setAttribute(l, d[l]);
    c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
      !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
    }, o(function() {
      k || (k = 1, c(1))
    }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
  }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
    var j, e = b.createElement("link"), c = i ? h : c || f;
    e.href = a, e.rel = "stylesheet", e.type = "text/css";
    for (j in d)e.setAttribute(j, d[j]);
    g || (p.parentNode.insertBefore(e, p), o(c, 0))
  }
}(this, document);
Modernizr.load = function() {
  yepnope.apply(window, [].slice.call(arguments, 0))
};
var swfobject = function() {
  function a() {
    if (!R) {
      try {
        var a = K.getElementsByTagName("body")[0].appendChild(q("span"));
        a.parentNode.removeChild(a)
      } catch (b) {
        return
      }
      R = !0;
      for (var c = N.length, d = 0; c > d; d++)N[d]()
    }
  }

  function b(a) {
    R ? a() : N[N.length] = a
  }

  function c(a) {
    if (typeof J.addEventListener != C)J.addEventListener("load", a, !1); else if (typeof K.addEventListener != C)K.addEventListener("load", a, !1); else if (typeof J.attachEvent != C)r(J, "onload", a); else if ("function" == typeof J.onload) {
      var b = J.onload;
      J.onload = function() {
        b(), a()
      }
    } else J.onload = a
  }

  function d() {
    M ? e() : f()
  }

  function e() {
    var a = K.getElementsByTagName("body")[0], b = q(D);
    b.setAttribute("type", G);
    var c = a.appendChild(b);
    if (c) {
      var d = 0;
      !function() {
        if (typeof c.GetVariable != C) {
          var e = c.GetVariable("$version");
          e && (e = e.split(" ")[1].split(","), U.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)])
        } else if (10 > d)return d++, void setTimeout(arguments.callee, 10);
        a.removeChild(b), c = null, f()
      }()
    } else f()
  }

  function f() {
    var a = O.length;
    if (a > 0)for (var b = 0; a > b; b++) {
      var c = O[b].id, d = O[b].callbackFn, e = {success: !1, id: c};
      if (U.pv[0] > 0) {
        var f = p(c);
        if (f)if (!s(O[b].swfVersion) || U.wk && U.wk < 312)if (O[b].expressInstall && h()) {
          var k = {};
          k.data = O[b].expressInstall, k.width = f.getAttribute("width") || "0", k.height = f.getAttribute("height") || "0", f.getAttribute("class") && (k.styleclass = f.getAttribute("class")), f.getAttribute("align") && (k.align = f.getAttribute("align"));
          for (var l = {}, m = f.getElementsByTagName("param"), n = m.length, o = 0; n > o; o++)"movie" != m[o].getAttribute("name").toLowerCase() && (l[m[o].getAttribute("name")] = m[o].getAttribute("value"));
          i(k, l, c, d)
        } else j(f), d && d(e); else u(c, !0), d && (e.success = !0, e.ref = g(c), d(e))
      } else if (u(c, !0), d) {
        var q = g(c);
        q && typeof q.SetVariable != C && (e.success = !0, e.ref = q), d(e)
      }
    }
  }

  function g(a) {
    var b = null, c = p(a);
    if (c && "OBJECT" == c.nodeName.toUpperCase())if (typeof c.SetVariable != C)b = c; else {
      var d = c.getElementsByTagName(D)[0];
      d && (b = d)
    }
    return b
  }

  function h() {
    return !S && s("6.0.65") && (U.win || U.mac) && !(U.wk && U.wk < 312)
  }

  function i(a, b, c, d) {
    S = !0, y = d || null, z = {success: !1, id: c};
    var e = p(c);
    if (e) {
      "OBJECT" == e.nodeName.toUpperCase() ? (w = k(e), x = null) : (w = e, x = c), a.id = H, (typeof a.width == C || !/%$/.test(a.width) && parseInt(a.width, 10) < 310) && (a.width = "310"), (typeof a.height == C || !/%$/.test(a.height) && parseInt(a.height, 10) < 137) && (a.height = "137"), K.title = K.title.slice(0, 47) + " - Flash Player Installation";
      var f = U.ie && U.win ? "ActiveX" : "PlugIn", g = "MMredirectURL=" + J.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + K.title;
      if (typeof b.flashvars != C ? b.flashvars += "&" + g : b.flashvars = g, U.ie && U.win && 4 != e.readyState) {
        var h = q("div");
        c += "SWFObjectNew", h.setAttribute("id", c), e.parentNode.insertBefore(h, e), e.style.display = "none", function() {
          4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
        }()
      }
      l(a, b, c)
    }
  }

  function j(a) {
    if (U.ie && U.win && 4 != a.readyState) {
      var b = q("div");
      a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(k(a), b), a.style.display = "none", function() {
        4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
      }()
    } else a.parentNode.replaceChild(k(a), a)
  }

  function k(a) {
    var b = q("div");
    if (U.win && U.ie)b.innerHTML = a.innerHTML; else {
      var c = a.getElementsByTagName(D)[0];
      if (c) {
        var d = c.childNodes;
        if (d)for (var e = d.length, f = 0; e > f; f++)1 == d[f].nodeType && "PARAM" == d[f].nodeName || 8 == d[f].nodeType || b.appendChild(d[f].cloneNode(!0))
      }
    }
    return b
  }

  function l(a, b, c) {
    var d, e = p(c);
    if (U.wk && U.wk < 312)return d;
    if (e)if (typeof a.id == C && (a.id = c), U.ie && U.win) {
      var f = "";
      for (var g in a)a[g] != Object.prototype[g] && ("data" == g.toLowerCase() ? b.movie = a[g] : "styleclass" == g.toLowerCase() ? f += ' class="' + a[g] + '"' : "classid" != g.toLowerCase() && (f += " " + g + '="' + a[g] + '"'));
      var h = "";
      for (var i in b)b[i] != Object.prototype[i] && (h += '<param name="' + i + '" value="' + b[i] + '" />');
      e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h.replace(/&/g, "&amp;") + "</object>", P[P.length] = a.id, d = p(a.id)
    } else {
      var j = q(D);
      j.setAttribute("type", G);
      for (var k in a)a[k] != Object.prototype[k] && ("styleclass" == k.toLowerCase() ? j.setAttribute("class", a[k]) : "classid" != k.toLowerCase() && j.setAttribute(k, a[k]));
      for (var l in b)b[l] != Object.prototype[l] && "movie" != l.toLowerCase() && m(j, l, b[l]);
      e.parentNode.replaceChild(j, e), d = j
    }
    return d
  }

  function m(a, b, c) {
    var d = q("param");
    d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
  }

  function n(a) {
    var b = p(a);
    b && "OBJECT" == b.nodeName.toUpperCase() && (U.ie && U.win ? (b.style.display = "none", function() {
      4 == b.readyState ? o(a) : setTimeout(arguments.callee, 10)
    }()) : b.parentNode.removeChild(b))
  }

  function o(a) {
    var b = p(a);
    if (b) {
      for (var c in b)"function" == typeof b[c] && (b[c] = null);
      b.parentNode.removeChild(b)
    }
  }

  function p(a) {
    var b = null;
    try {
      b = K.getElementById(a)
    } catch (c) {
    }
    return b
  }

  function q(a) {
    return K.createElement(a)
  }

  function r(a, b, c) {
    a.attachEvent(b, c), Q[Q.length] = [a, b, c]
  }

  function s(a) {
    var b = U.pv, c = a.split(".");
    return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1
  }

  function t(a, b, c, d) {
    if (!U.ie || !U.mac) {
      var e = K.getElementsByTagName("head")[0];
      if (e) {
        var f = c && "string" == typeof c ? c : "screen";
        if (d && (A = null, B = null), !A || B != f) {
          var g = q("style");
          g.setAttribute("type", "text/css"), g.setAttribute("media", f), A = e.appendChild(g), U.ie && U.win && typeof K.styleSheets != C && K.styleSheets.length > 0 && (A = K.styleSheets[K.styleSheets.length - 1]), B = f
        }
        U.ie && U.win ? A && typeof A.addRule == D && A.addRule(a, b) : A && typeof K.createTextNode != C && A.appendChild(K.createTextNode(a + " {" + b + "}"))
      }
    }
  }

  function u(a, b) {
    if (T) {
      var c = b ? "visible" : "hidden";
      R && p(a) ? p(a).style.visibility = c : t("#" + a, "visibility:" + c)
    }
  }

  function v(a) {
    var b = /[\\\"<>\.;]/, c = null != b.exec(a);
    return c && typeof encodeURIComponent != C ? encodeURIComponent(a) : a
  }

  var w, x, y, z, A, B, C = "undefined", D = "object", E = "Shockwave Flash", F = "ShockwaveFlash.ShockwaveFlash", G = "application/x-shockwave-flash", H = "SWFObjectExprInst", I = "onreadystatechange", J = window, K = document, L = navigator, M = !1, N = [d], O = [], P = [], Q = [], R = !1, S = !1, T = !0, U = function() {
    var a = typeof K.getElementById != C && typeof K.getElementsByTagName != C && typeof K.createElement != C, b = L.userAgent.toLowerCase(), c = L.platform.toLowerCase(), d = c ? /win/.test(c) : /win/.test(b), e = c ? /mac/.test(c) : /mac/.test(b), f = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, g = !1, h = [0, 0, 0], i = null;
    if (typeof L.plugins != C && typeof L.plugins[E] == D)i = L.plugins[E].description, !i || typeof L.mimeTypes != C && L.mimeTypes[G] && !L.mimeTypes[G].enabledPlugin || (M = !0, g = !1, i = i.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), h[0] = parseInt(i.replace(/^(.*)\..*$/, "$1"), 10), h[1] = parseInt(i.replace(/^.*\.(.*)\s.*$/, "$1"), 10), h[2] = /[a-zA-Z]/.test(i) ? parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof J.ActiveXObject != C)try {
      var j = new ActiveXObject(F);
      j && (i = j.GetVariable("$version"), i && (g = !0, i = i.split(" ")[1].split(","), h = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]))
    } catch (k) {
    }
    return {w3: a, pv: h, wk: f, ie: g, win: d, mac: e}
  }();
  (function() {
    U.w3 && ((typeof K.readyState != C && "complete" == K.readyState || typeof K.readyState == C && (K.getElementsByTagName("body")[0] || K.body)) && a(), R || (typeof K.addEventListener != C && K.addEventListener("DOMContentLoaded", a, !1), U.ie && U.win && (K.attachEvent(I, function() {
      "complete" == K.readyState && (K.detachEvent(I, arguments.callee), a())
    }), J == top && !function() {
      if (!R) {
        try {
          K.documentElement.doScroll("left")
        } catch (b) {
          return void setTimeout(arguments.callee, 0)
        }
        a()
      }
    }()), U.wk && !function() {
      return R ? void 0 : /loaded|complete/.test(K.readyState) ? void a() : void setTimeout(arguments.callee, 0)
    }(), c(a)))
  })(), function() {
    U.ie && U.win && window.attachEvent("onunload", function() {
      for (var a = Q.length, b = 0; a > b; b++)Q[b][0].detachEvent(Q[b][1], Q[b][2]);
      for (var c = P.length, d = 0; c > d; d++)n(P[d]);
      for (var e in U)U[e] = null;
      U = null;
      for (var f in swfobject)swfobject[f] = null;
      swfobject = null
    })
  }();
  return {
    registerObject: function(a, b, c, d) {
      if (U.w3 && a && b) {
        var e = {};
        e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, O[O.length] = e, u(a, !1)
      } else d && d({success: !1, id: a})
    }, getObjectById: function(a) {
      return U.w3 ? g(a) : void 0
    }, embedSWF: function(a, c, d, e, f, g, j, k, m, n) {
      var o = {success: !1, id: c};
      U.w3 && !(U.wk && U.wk < 312) && a && c && d && e && f ? (u(c, !1), b(function() {
        d += "", e += "";
        var b = {};
        if (m && typeof m === D)for (var p in m)b[p] = m[p];
        b.data = a, b.width = d, b.height = e;
        var q = {};
        if (k && typeof k === D)for (var r in k)q[r] = k[r];
        if (j && typeof j === D)for (var t in j)typeof q.flashvars != C ? q.flashvars += "&" + t + "=" + j[t] : q.flashvars = t + "=" + j[t];
        if (s(f)) {
          var v = l(b, q, c);
          b.id == c && u(c, !0), o.success = !0, o.ref = v
        } else {
          if (g && h())return b.data = g, void i(b, q, c, n);
          u(c, !0)
        }
        n && n(o)
      })) : n && n(o)
    }, switchOffAutoHideShow: function() {
      T = !1
    }, ua: U, getFlashPlayerVersion: function() {
      return {major: U.pv[0], minor: U.pv[1], release: U.pv[2]}
    }, hasFlashPlayerVersion: s, createSWF: function(a, b, c) {
      return U.w3 ? l(a, b, c) : void 0
    }, showExpressInstall: function(a, b, c, d) {
      U.w3 && h() && i(a, b, c, d)
    }, removeSWF: function(a) {
      U.w3 && n(a)
    }, createCSS: function(a, b, c, d) {
      U.w3 && t(a, b, c, d)
    }, addDomLoadEvent: b, addLoadEvent: c, getQueryParamValue: function(a) {
      var b = K.location.search || K.location.hash;
      if (b) {
        if (/\?/.test(b) && (b = b.split("?")[1]), null == a)return v(b);
        for (var c = b.split("&"), d = 0; d < c.length; d++)if (c[d].substring(0, c[d].indexOf("=")) == a)return v(c[d].substring(c[d].indexOf("=") + 1))
      }
      return ""
    }, expressInstallCallback: function() {
      if (S) {
        var a = p(H);
        a && w && (a.parentNode.replaceChild(w, a), x && (u(x, !0), U.ie && U.win && (w.style.display = "block")), y && y(z)), S = !1
      }
    }
  }
}();
!function() {
  var a = function() {
    var b = [].slice.call(arguments);
    return b.push(a.options), b[0].match(/^\s*#([\w:\-\.]+)\s*$/gim) && b[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function(a, c) {
      var d = document, e = d && d.getElementById(c);
      b[0] = e ? e.value || e.innerHTML : a
    }), 1 == arguments.length ? a.compile.apply(a, b) : arguments.length >= 2 ? a.to_html.apply(a, b) : void 0
  }, b = {
    escapehash: {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2f;"
    }, escapereplace: function(a) {
      return b.escapehash[a]
    }, escaping: function(a) {
      return "string" != typeof a ? a : a.replace(/[&<>"]/gim, this.escapereplace)
    }, detection: function(a) {
      return "undefined" == typeof a ? "" : a
    }
  }, c = function(a) {
    if ("undefined" != typeof console) {
      if (console.warn)return void console.warn(a);
      if (console.log)return void console.log(a)
    }
    throw a
  }, d = function(a, b) {
    if (a = a !== Object(a) ? {} : a, a.__proto__)return a.__proto__ = b, a;
    var c = function() {
    }, d = Object.create ? Object.create(b) : new (c.prototype = b, c);
    for (var e in a)a.hasOwnProperty(e) && (d[e] = a[e]);
    return d
  };
  a.__cache = {}, a.version = "0.6.5-stable", a.settings = {}, a.tags = {
    operationOpen: "{@",
    operationClose: "}",
    interpolateOpen: "\\${",
    interpolateClose: "}",
    noneencodeOpen: "\\$\\${",
    noneencodeClose: "}",
    commentOpen: "\\{#",
    commentClose: "\\}"
  }, a.options = {
    cache: !0,
    strip: !0,
    errorhandling: !0,
    detection: !0,
    _method: d({__escapehtml: b, __throw: c, __juicer: a}, {})
  }, a.tagInit = function() {
    var b = a.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + a.tags.operationClose, c = a.tags.operationOpen + "\\/each" + a.tags.operationClose, d = a.tags.operationOpen + "if\\s*([^}]*?)" + a.tags.operationClose, e = a.tags.operationOpen + "\\/if" + a.tags.operationClose, f = a.tags.operationOpen + "else" + a.tags.operationClose, g = a.tags.operationOpen + "else if\\s*([^}]*?)" + a.tags.operationClose, h = a.tags.interpolateOpen + "([\\s\\S]+?)" + a.tags.interpolateClose, i = a.tags.noneencodeOpen + "([\\s\\S]+?)" + a.tags.noneencodeClose, j = a.tags.commentOpen + "[^}]*?" + a.tags.commentClose, k = a.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + a.tags.operationClose, l = a.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + a.tags.operationClose;
    a.settings.forstart = new RegExp(b, "igm"), a.settings.forend = new RegExp(c, "igm"), a.settings.ifstart = new RegExp(d, "igm"), a.settings.ifend = new RegExp(e, "igm"), a.settings.elsestart = new RegExp(f, "igm"), a.settings.elseifstart = new RegExp(g, "igm"), a.settings.interpolate = new RegExp(h, "igm"), a.settings.noneencode = new RegExp(i, "igm"), a.settings.inlinecomment = new RegExp(j, "igm"), a.settings.rangestart = new RegExp(k, "igm"), a.settings.include = new RegExp(l, "igm")
  }, a.tagInit(), a.set = function(a, b) {
    var c = this, d = function(a) {
      return a.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function(a) {
        return "\\" + a
      })
    }, e = function(a, b) {
      var e = a.match(/^tag::(.*)$/i);
      return e ? (c.tags[e[1]] = d(b), void c.tagInit()) : void(c.options[a] = b)
    };
    if (2 === arguments.length)return void e(a, b);
    if (a === Object(a))for (var f in a)a.hasOwnProperty(f) && e(f, a[f])
  }, a.register = function(a, b) {
    var c = this.options._method;
    return c.hasOwnProperty(a) ? !1 : c[a] = b
  }, a.unregister = function(a) {
    var b = this.options._method;
    return b.hasOwnProperty(a) ? delete b[a] : void 0
  }, a.template = function(b) {
    var c = this;
    this.options = b, this.__interpolate = function(a, b, c) {
      var d, e = a.split("|"), f = e[0] || "";
      return e.length > 1 && (a = e.shift(), d = e.shift().split(","), f = "_method." + d.shift() + ".call({}, " + [a].concat(d) + ")"), "<%= " + (b ? "_method.__escapehtml.escaping" : "") + "(" + (c && c.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + f + ")) %>"
    }, this.__removeShell = function(b, d) {
      var e = 0;
      return b = b.replace(a.settings.forstart, function(a, b, c, d) {
        var c = c || "value", d = d && d.substr(1), f = "i" + e++;
        return "<% ~function() {for(var " + f + " in " + b + ") {if(" + b + ".hasOwnProperty(" + f + ")) {var " + c + "=" + b + "[" + f + "];" + (d ? "var " + d + "=" + f + ";" : "") + " %>"
      }).replace(a.settings.forend, "<% }}}(); %>").replace(a.settings.ifstart, function(a, b) {
        return "<% if(" + b + ") { %>"
      }).replace(a.settings.ifend, "<% } %>").replace(a.settings.elsestart, function(a) {
        return "<% } else { %>"
      }).replace(a.settings.elseifstart, function(a, b) {
        return "<% } else if(" + b + ") { %>"
      }).replace(a.settings.noneencode, function(a, b) {
        return c.__interpolate(b, !1, d)
      }).replace(a.settings.interpolate, function(a, b) {
        return c.__interpolate(b, !0, d)
      }).replace(a.settings.inlinecomment, "").replace(a.settings.rangestart, function(a, b, c, d) {
        var f = "j" + e++;
        return "<% ~function() {for(var " + f + "=" + c + ";" + f + "<" + d + ";" + f + "++) {{var " + b + "=" + f + "; %>"
      }).replace(a.settings.include, function(a, b, c) {
        return "<%= _method.__juicer(" + b + ", " + c + "); %>"
      }), d && d.errorhandling === !1 || (b = "<% try { %>" + b, b += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), b
    }, this.__toNative = function(a, b) {
      return this.__convert(a, !b || b.strip)
    }, this.__lexicalAnalyze = function(b) {
      var c = [], d = [], e = "", f = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"], g = function(a, b) {
        if (Array.prototype.indexOf && a.indexOf === Array.prototype.indexOf)return a.indexOf(b);
        for (var c = 0; c < a.length; c++)if (a[c] === b)return c;
        return -1
      }, h = function(b, e) {
        if (e = e.match(/\w+/gim)[0], -1 === g(c, e) && -1 === g(f, e) && -1 === g(d, e)) {
          if ("undefined" != typeof window && "function" == typeof window[e] && window[e].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return b;
          if ("undefined" != typeof global && "function" == typeof global[e] && global[e].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return b;
          if ("function" == typeof a.options._method[e] || a.options._method.hasOwnProperty(e))return d.push(e), b;
          c.push(e)
        }
        return b
      };
      b.replace(a.settings.forstart, h).replace(a.settings.interpolate, h).replace(a.settings.ifstart, h).replace(a.settings.elseifstart, h).replace(a.settings.include, h).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/gim, h);
      for (var i = 0; i < c.length; i++)e += "var " + c[i] + "=_." + c[i] + ";";
      for (var i = 0; i < d.length; i++)e += "var " + d[i] + "=_method." + d[i] + ";";
      return "<% " + e + " %>"
    }, this.__convert = function(a, b) {
      var c = [].join("");
      return c += "'use strict';", c += "var _=_||{};", c += "var _out='';_out+='", c += b !== !1 ? a.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : a.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"
    }, this.parse = function(a, b) {
      var e = this;
      return b && b.loose === !1 || (a = this.__lexicalAnalyze(a) + a), a = this.__removeShell(a, b), a = this.__toNative(a, b), this._render = new Function("_, _method", a), this.render = function(a, b) {
        return b && b === c.options._method || (b = d(b, c.options._method)), e._render.call(this, a, b)
      }, this
    }
  }, a.compile = function(a, b) {
    b && b === this.options || (b = d(b, this.options));
    try {
      var e = this.__cache[a] ? this.__cache[a] : new this.template(this.options).parse(a, b);
      return b && b.cache === !1 || (this.__cache[a] = e), e
    } catch (f) {
      return c("Juicer Compile Exception: " + f.message), {
        render: function() {
        }
      }
    }
  }, a.to_html = function(a, b, c) {
    return c && c === this.options || (c = d(c, this.options)), this.compile(a, c).render(b, c._method)
  }, "undefined" != typeof module && module.exports ? module.exports = a : this.juicer = a
}();
function(a) {
  a.namespace = a.ns = function() {
    var b, c;
    return a.each(arguments, function(d, e) {
      c = e.split("."), b = window[c[0]] = window[c[0]] || {}, a.each(c.slice(1), function(a, c) {
        b = b[c] = b[c] || {}
      })
    }), b
  }
}(jQuery);
$.ns("JV");
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad", swing: function(a, b, c, d, e) {
    return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
  }, easeInQuad: function(a, b, c, d, e) {
    return d * (b /= e) * b + c
  }, easeOutQuad: function(a, b, c, d, e) {
    return -d * (b /= e) * (b - 2) + c
  }, easeInOutQuad: function(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
  }, easeInCubic: function(a, b, c, d, e) {
    return d * (b /= e) * b * b + c
  }, easeOutCubic: function(a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b + 1) + c
  }, easeInOutCubic: function(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
  }, easeInQuart: function(a, b, c, d, e) {
    return d * (b /= e) * b * b * b + c
  }, easeOutQuart: function(a, b, c, d, e) {
    return -d * ((b = b / e - 1) * b * b * b - 1) + c
  }, easeInOutQuart: function(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
  }, easeInQuint: function(a, b, c, d, e) {
    return d * (b /= e) * b * b * b * b + c
  }, easeOutQuint: function(a, b, c, d, e) {
    return d * ((b = b / e - 1) * b * b * b * b + 1) + c
  }, easeInOutQuint: function(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
  }, easeInSine: function(a, b, c, d, e) {
    return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
  }, easeOutSine: function(a, b, c, d, e) {
    return d * Math.sin(b / e * (Math.PI / 2)) + c
  }, easeInOutSine: function(a, b, c, d, e) {
    return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
  }, easeInExpo: function(a, b, c, d, e) {
    return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
  }, easeOutExpo: function(a, b, c, d, e) {
    return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
  }, easeInOutExpo: function(a, b, c, d, e) {
    return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
  }, easeInCirc: function(a, b, c, d, e) {
    return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
  }, easeOutCirc: function(a, b, c, d, e) {
    return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
  }, easeInOutCirc: function(a, b, c, d, e) {
    return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
  }, easeInElastic: function(a, b, c, d, e) {
    var f = 1.70158, g = 0, h = d;
    if (0 == b)return c;
    if (1 == (b /= e))return c + d;
    if (g || (g = .3 * e), h < Math.abs(d)) {
      h = d;
      var f = g / 4
    } else var f = g / (2 * Math.PI) * Math.asin(d / h);
    return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
  }, easeOutElastic: function(a, b, c, d, e) {
    var f = 1.70158, g = 0, h = d;
    if (0 == b)return c;
    if (1 == (b /= e))return c + d;
    if (g || (g = .3 * e), h < Math.abs(d)) {
      h = d;
      var f = g / 4
    } else var f = g / (2 * Math.PI) * Math.asin(d / h);
    return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
  }, easeInOutElastic: function(a, b, c, d, e) {
    var f = 1.70158, g = 0, h = d;
    if (0 == b)return c;
    if (2 == (b /= e / 2))return c + d;
    if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
      h = d;
      var f = g / 4
    } else var f = g / (2 * Math.PI) * Math.asin(d / h);
    return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
  }, easeInBack: function(a, b, c, d, e, f) {
    return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
  }, easeOutBack: function(a, b, c, d, e, f) {
    return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
  }, easeInOutBack: function(a, b, c, d, e, f) {
    return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
  }, easeInBounce: function(a, b, c, d, e) {
    return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
  }, easeOutBounce: function(a, b, c, d, e) {
    return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
  }, easeInOutBounce: function(a, b, c, d, e) {
    return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
  }
});
function(a) {
  function b(b) {
    var c = b || window.event, d = [].slice.call(arguments, 1), e = 0, f = 0, g = 0;
    return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), g = e, void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (g = 0, f = -1 * e), void 0 !== c.wheelDeltaY && (g = c.wheelDeltaY / 120), void 0 !== c.wheelDeltaX && (f = -1 * c.wheelDeltaX / 120), d.unshift(b, e, f, g), (a.event.dispatch || a.event.handle).apply(this, d)
  }

  var c = ["DOMMouseScroll", "mousewheel"];
  if (a.event.fixHooks)for (var d = c.length; d;)a.event.fixHooks[c[--d]] = a.event.mouseHooks;
  a.event.special.mousewheel = {
    setup: function() {
      if (this.addEventListener)for (var a = c.length; a;)this.addEventListener(c[--a], b, !1); else this.onmousewheel = b
    }, teardown: function() {
      if (this.removeEventListener)for (var a = c.length; a;)this.removeEventListener(c[--a], b, !1); else this.onmousewheel = null
    }
  }, a.fn.extend({
    mousewheel: function(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    }, unmousewheel: function(a) {
      return this.unbind("mousewheel", a)
    }
  })
}(jQuery);

"undefined" != typeof jQuery && !function(a) {
  a.imgpreload = function(b, c) {
    c = a.extend({}, a.fn.imgpreload.defaults, c instanceof Function ? {all: c} : c), "string" == typeof b && (b = new Array(b));
    var d = new Array;
    a.each(b, function(e, f) {
      var g = new Image, h = f, i = g;
      "string" != typeof f && (h = a(f).attr("src"), i = f), a(g).bind("load error", function(e) {
        d.push(i), a.data(i, "loaded", "error" == e.type ? !1 : !0), c.each instanceof Function && c.each.call(i), d.length >= b.length && c.all instanceof Function && c.all.call(d), a(this).unbind("load error")
      }), g.src = h
    })
  }, a.fn.imgpreload = function(b) {
    return a.imgpreload(this, b), this
  }, a.fn.imgpreload.defaults = {each: null, all: null}
}(jQuery);

function(a) {
  function b(b) {
    var c = this, d = a(b.trigger), e = b.speed, f = b.animateType;
    a(b.prev), a(b.next);
    a.extend(this, {
      triggerInit: function() {
        if (b.target) {
          b.offsetY;
          return void a("body,html").stop(!0, !1).animate({scrollTop: b.offsetY + "px"}, e, f)
        }
        d.each(function(b, c) {
          a(c).data("index", b)
        });
        var c = b.triggerIndex;
        this.triggerActive(c)
      }, triggerActive: function(a) {
        var b = d.eq(a);
        d.removeClass("active"), b.addClass("active")
      }, getIndex: function() {
        return d.filter(".active").data("index")
      }, triggerEvent: function() {
        d.click(function(b) {
          b.preventDefault();
          var d = a(this), e = d.data("index");
          c.triggerActive(e), c.panelScroll(e)
        })
      }, panelScroll: function(c) {
        var g = d.eq(c), h = g.attr("href"), i = a(h).offset().top;
        a("body,html").stop(!0, !1).animate({scrollTop: i - b.marginTop + "px"}, e, f, function() {
          b.scrollCallback()
        })
      }, init: function() {
        this.triggerInit(), this.triggerEvent()
      }
    }), c.init()
  }

  var c = {
    defaults: {
      trigger: "#scrollBar a",
      triggerIndex: 0,
      speed: 500,
      target: "",
      offsetY: 100,
      animateType: "easeInOutExpo",
      marginTop: 0,
      scrollCallback: function() {
      }
    }
  };
  a.sc2 = a.sc2 || {}, a.sc2.scrollTo = function(d) {
    d = a.extend({}, c.defaults, d), new b(d)
  }
}(jQuery);

function(a) {
  JV.lightBox = function(b, c) {
    var d = {
      model: !1,
      hasClose: !0,
      fixed: !1,
      opacity: "0.8",
      callback: function() {
      }
    };
    this.items = b, this.cfg = a.extend({}, d, c), this.callback = this.cfg.callback, this.init()
  }, JV.lightBox.prototype = {
    setModel: function() {
      var b = this, c = "<div id='boxModel'></div>", d = a(window).width(), e = a(document).height();
      a("body").append(c);
      var f = a("#boxModel");
      f.width(d).height(e).css("opacity", b.cfg.opacity).show(), f.live("click touchstart", function() {
        b.items.remove(), f.remove()
      })
    }, setPosition: function() {
      var b = this;
      if ("string" == typeof b.items) {
        0 != a("body").find("#popBox").length && a("#popBox").remove();
        var c = "<div id='popBox'>" + b.items + "</div>";
        a("body").append(c), b.items = a("#popBox")
      }
      b.setFresh()
    }, setFresh: function() {
      var b = this, c = a(window).width(), d = a(window).height(), e = a(window).scrollTop(), f = b.items.width(), g = b.items.height(), h = (c - f) / 2, i = (d - g) / 2 + e, j = (d - g) / 2, k = a.browser.msie && 6 == a.browser.version;
      b.cfg.fixed && !k && (b.items.css({position: "fixed"}), i = j), b.items.css({
        left: h + "px",
        top: i + "px"
      }).show("fast", function() {
        b.callback()
      })
    }, setClose: function() {
      var b = this, c = "<a class='closeBtn' href='javascript:;'>关闭</a>";
      b.items.find(".closeBtn").length || b.items.append(c), b.items.find(".closeBtn").live("click", function() {
        return b.items.remove(), b.cfg.model && a("#boxModel").remove(), !1
      })
    }, init: function() {
      var a = this;
      a.setPosition(), a.cfg.model ? a.setModel() : "", a.cfg.hasClose ? a.setClose() : ""
    }
  }
}(jQuery);

function() {
  function a(a) {
    function b(b, c, d, e, f, g) {
      for (; f >= 0 && g > f; f += a) {
        var h = e ? e[f] : f;
        d = c(d, b[h], h, b)
      }
      return d
    }

    return function(c, d, e, f) {
      d = t(d, f, 4);
      var g = !A(c) && s.keys(c), h = (g || c).length, i = a > 0 ? 0 : h - 1;
      return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
    }
  }

  function b(a) {
    return function(b, c, d) {
      c = u(c, d);
      for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)if (c(b[f], f, b))return f;
      return -1
    }
  }

  function c(a, b, c) {
    return function(d, e, f) {
      var g = 0, h = z(d);
      if ("number" == typeof f)a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1; else if (c && f && h)return f = c(d, e), d[f] === e ? f : -1;
      if (e !== e)return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
      for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a)if (d[f] === e)return f;
      return -1
    }
  }

  function d(a, b) {
    var c = F.length, d = a.constructor, e = s.isFunction(d) && d.prototype || h, f = "constructor";
    for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--;)f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f)
  }

  var e = this, f = e._, g = Array.prototype, h = Object.prototype, i = Function.prototype, j = g.push, k = g.slice, l = h.toString, m = h.hasOwnProperty, n = Array.isArray, o = Object.keys, p = i.bind, q = Object.create, r = function() {
  }, s = function(a) {
    return a instanceof s ? a : this instanceof s ? void(this._wrapped = a) : new s(a)
  };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports._ = s) : e._ = s, s.VERSION = "1.8.3";
  var t = function(a, b, c) {
    if (void 0 === b)return a;
    switch (null == c ? 3 : c) {
    case 1:
      return function(c) {
        return a.call(b, c)
      };
    case 2:
      return function(c, d) {
        return a.call(b, c, d)
      };
    case 3:
      return function(c, d, e) {
        return a.call(b, c, d, e)
      };
    case 4:
      return function(c, d, e, f) {
        return a.call(b, c, d, e, f)
      }
    }
    return function() {
      return a.apply(b, arguments)
    }
  }, u = function(a, b, c) {
    return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a)
  };
  s.iteratee = function(a, b) {
    return u(a, b, 1 / 0)
  };
  var v = function(a, b) {
    return function(c) {
      var d = arguments.length;
      if (2 > d || null == c)return c;
      for (var e = 1; d > e; e++)for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
        var j = g[i];
        b && void 0 !== c[j] || (c[j] = f[j])
      }
      return c
    }
  }, w = function(a) {
    if (!s.isObject(a))return {};
    if (q)return q(a);
    r.prototype = a;
    var b = new r;
    return r.prototype = null, b
  }, x = function(a) {
    return function(b) {
      return null == b ? void 0 : b[a]
    }
  }, y = Math.pow(2, 53) - 1, z = x("length"), A = function(a) {
    var b = z(a);
    return "number" == typeof b && b >= 0 && y >= b
  };
  s.each = s.forEach = function(a, b, c) {
    b = t(b, c);
    var d, e;
    if (A(a))for (d = 0, e = a.length; e > d; d++)b(a[d], d, a); else {
      var f = s.keys(a);
      for (d = 0, e = f.length; e > d; d++)b(a[f[d]], f[d], a)
    }
    return a
  }, s.map = s.collect = function(a, b, c) {
    b = u(b, c);
    for (var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
      var h = d ? d[g] : g;
      f[g] = b(a[h], h, a)
    }
    return f
  }, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function(a, b, c) {
    var d;
    return d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
  }, s.filter = s.select = function(a, b, c) {
    var d = [];
    return b = u(b, c), s.each(a, function(a, c, e) {
      b(a, c, e) && d.push(a)
    }), d
  }, s.reject = function(a, b, c) {
    return s.filter(a, s.negate(u(b)), c)
  }, s.every = s.all = function(a, b, c) {
    b = u(b, c);
    for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
      var g = d ? d[f] : f;
      if (!b(a[g], g, a))return !1
    }
    return !0
  }, s.some = s.any = function(a, b, c) {
    b = u(b, c);
    for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
      var g = d ? d[f] : f;
      if (b(a[g], g, a))return !0
    }
    return !1
  }, s.contains = s.includes = s.include = function(a, b, c, d) {
    return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0
  }, s.invoke = function(a, b) {
    var c = k.call(arguments, 2), d = s.isFunction(b);
    return s.map(a, function(a) {
      var e = d ? b : a[b];
      return null == e ? e : e.apply(a, c)
    })
  }, s.pluck = function(a, b) {
    return s.map(a, s.property(b))
  }, s.where = function(a, b) {
    return s.filter(a, s.matcher(b))
  }, s.findWhere = function(a, b) {
    return s.find(a, s.matcher(b))
  }, s.max = function(a, b, c) {
    var d, e, f = -(1 / 0), g = -(1 / 0);
    if (null == b && null != a) {
      a = A(a) ? a : s.values(a);
      for (var h = 0, i = a.length; i > h; h++)d = a[h], d > f && (f = d)
    } else b = u(b, c), s.each(a, function(a, c, d) {
      e = b(a, c, d), (e > g || e === -(1 / 0) && f === -(1 / 0)) && (f = a, g = e)
    });
    return f
  }, s.min = function(a, b, c) {
    var d, e, f = 1 / 0, g = 1 / 0;
    if (null == b && null != a) {
      a = A(a) ? a : s.values(a);
      for (var h = 0, i = a.length; i > h; h++)d = a[h], f > d && (f = d)
    } else b = u(b, c), s.each(a, function(a, c, d) {
      e = b(a, c, d), (g > e || e === 1 / 0 && f === 1 / 0) && (f = a, g = e)
    });
    return f
  }, s.shuffle = function(a) {
    for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; d > f; f++)b = s.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
    return e
  }, s.sample = function(a, b, c) {
    return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a).slice(0, Math.max(0, b))
  }, s.sortBy = function(a, b, c) {
    return b = u(b, c), s.pluck(s.map(a, function(a, c, d) {
      return {value: a, index: c, criteria: b(a, c, d)}
    }).sort(function(a, b) {
      var c = a.criteria, d = b.criteria;
      if (c !== d) {
        if (c > d || void 0 === c)return 1;
        if (d > c || void 0 === d)return -1
      }
      return a.index - b.index
    }), "value")
  };
  var B = function(a) {
    return function(b, c, d) {
      var e = {};
      return c = u(c, d), s.each(b, function(d, f) {
        var g = c(d, f, b);
        a(e, d, g)
      }), e
    }
  };
  s.groupBy = B(function(a, b, c) {
    s.has(a, c) ? a[c].push(b) : a[c] = [b]
  }), s.indexBy = B(function(a, b, c) {
    a[c] = b
  }), s.countBy = B(function(a, b, c) {
    s.has(a, c) ? a[c]++ : a[c] = 1
  }), s.toArray = function(a) {
    return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : []
  }, s.size = function(a) {
    return null == a ? 0 : A(a) ? a.length : s.keys(a).length
  }, s.partition = function(a, b, c) {
    b = u(b, c);
    var d = [], e = [];
    return s.each(a, function(a, c, f) {
      (b(a, c, f) ? d : e).push(a)
    }), [d, e]
  }, s.first = s.head = s.take = function(a, b, c) {
    return null == a ? void 0 : null == b || c ? a[0] : s.initial(a, a.length - b)
  }, s.initial = function(a, b, c) {
    return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
  }, s.last = function(a, b, c) {
    return null == a ? void 0 : null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b))
  }, s.rest = s.tail = s.drop = function(a, b, c) {
    return k.call(a, null == b || c ? 1 : b)
  }, s.compact = function(a) {
    return s.filter(a, s.identity)
  };
  var C = function(a, b, c, d) {
    for (var e = [], f = 0, g = d || 0, h = z(a); h > g; g++) {
      var i = a[g];
      if (A(i) && (s.isArray(i) || s.isArguments(i))) {
        b || (i = C(i, b, c));
        var j = 0, k = i.length;
        for (e.length += k; k > j;)e[f++] = i[j++]
      } else c || (e[f++] = i)
    }
    return e
  };
  s.flatten = function(a, b) {
    return C(a, b, !1)
  }, s.without = function(a) {
    return s.difference(a, k.call(arguments, 1))
  }, s.uniq = s.unique = function(a, b, c, d) {
    s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
    for (var e = [], f = [], g = 0, h = z(a); h > g; g++) {
      var i = a[g], j = c ? c(i, g, a) : i;
      b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i)
    }
    return e
  }, s.union = function() {
    return s.uniq(C(arguments, !0, !0))
  }, s.intersection = function(a) {
    for (var b = [], c = arguments.length, d = 0, e = z(a); e > d; d++) {
      var f = a[d];
      if (!s.contains(b, f)) {
        for (var g = 1; c > g && s.contains(arguments[g], f); g++);
        g === c && b.push(f)
      }
    }
    return b
  }, s.difference = function(a) {
    var b = C(arguments, !0, !0, 1);
    return s.filter(a, function(a) {
      return !s.contains(b, a)
    })
  }, s.zip = function() {
    return s.unzip(arguments)
  }, s.unzip = function(a) {
    for (var b = a && s.max(a, z).length || 0, c = Array(b), d = 0; b > d; d++)c[d] = s.pluck(a, d);
    return c
  }, s.object = function(a, b) {
    for (var c = {}, d = 0, e = z(a); e > d; d++)b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
    return c
  }, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function(a, b, c, d) {
    c = u(c, d, 1);
    for (var e = c(b), f = 0, g = z(a); g > f;) {
      var h = Math.floor((f + g) / 2);
      c(a[h]) < e ? f = h + 1 : g = h
    }
    return f
  }, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), s.range = function(a, b, c) {
    null == b && (b = a || 0, a = 0), c = c || 1;
    for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c)e[f] = a;
    return e
  };
  var D = function(a, b, c, d, e) {
    if (!(d instanceof b))return a.apply(c, e);
    var f = w(a.prototype), g = a.apply(f, e);
    return s.isObject(g) ? g : f
  };
  s.bind = function(a, b) {
    if (p && a.bind === p)return p.apply(a, k.call(arguments, 1));
    if (!s.isFunction(a))throw new TypeError("Bind must be called on a function");
    var c = k.call(arguments, 2), d = function() {
      return D(a, d, b, this, c.concat(k.call(arguments)))
    };
    return d
  }, s.partial = function(a) {
    var b = k.call(arguments, 1), c = function() {
      for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++)f[g] = b[g] === s ? arguments[d++] : b[g];
      for (; d < arguments.length;)f.push(arguments[d++]);
      return D(a, c, this, this, f)
    };
    return c
  }, s.bindAll = function(a) {
    var b, c, d = arguments.length;
    if (1 >= d)throw new Error("bindAll must be passed function names");
    for (b = 1; d > b; b++)c = arguments[b], a[c] = s.bind(a[c], a);
    return a
  }, s.memoize = function(a, b) {
    var c = function(d) {
      var e = c.cache, f = "" + (b ? b.apply(this, arguments) : d);
      return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
    };
    return c.cache = {}, c
  }, s.delay = function(a, b) {
    var c = k.call(arguments, 2);
    return setTimeout(function() {
      return a.apply(null, c)
    }, b)
  }, s.defer = s.partial(s.delay, s, 1), s.throttle = function(a, b, c) {
    var d, e, f, g = null, h = 0;
    c || (c = {});
    var i = function() {
      h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null)
    };
    return function() {
      var j = s.now();
      h || c.leading !== !1 || (h = j);
      var k = b - (j - h);
      return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
    }
  }, s.debounce = function(a, b, c) {
    var d, e, f, g, h, i = function() {
      var j = s.now() - g;
      b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
    };
    return function() {
      f = this, e = arguments, g = s.now();
      var j = c && !d;
      return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
    }
  }, s.wrap = function(a, b) {
    return s.partial(b, a)
  }, s.negate = function(a) {
    return function() {
      return !a.apply(this, arguments)
    }
  }, s.compose = function() {
    var a = arguments, b = a.length - 1;
    return function() {
      for (var c = b, d = a[b].apply(this, arguments); c--;)d = a[c].call(this, d);
      return d
    }
  }, s.after = function(a, b) {
    return function() {
      return --a < 1 ? b.apply(this, arguments) : void 0
    }
  }, s.before = function(a, b) {
    var c;
    return function() {
      return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
    }
  }, s.once = s.partial(s.before, 2);
  var E = !{toString: null}.propertyIsEnumerable("toString"), F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  s.keys = function(a) {
    if (!s.isObject(a))return [];
    if (o)return o(a);
    var b = [];
    for (var c in a)s.has(a, c) && b.push(c);
    return E && d(a, b), b
  }, s.allKeys = function(a) {
    if (!s.isObject(a))return [];
    var b = [];
    for (var c in a)b.push(c);
    return E && d(a, b), b
  }, s.values = function(a) {
    for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++)d[e] = a[b[e]];
    return d
  }, s.mapObject = function(a, b, c) {
    b = u(b, c);
    for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; f > h; h++)d = e[h], g[d] = b(a[d], d, a);
    return g
  }, s.pairs = function(a) {
    for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++)d[e] = [b[e], a[b[e]]];
    return d
  }, s.invert = function(a) {
    for (var b = {}, c = s.keys(a), d = 0, e = c.length; e > d; d++)b[a[c[d]]] = c[d];
    return b
  }, s.functions = s.methods = function(a) {
    var b = [];
    for (var c in a)s.isFunction(a[c]) && b.push(c);
    return b.sort()
  }, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function(a, b, c) {
    b = u(b, c);
    for (var d, e = s.keys(a), f = 0, g = e.length; g > f; f++)if (d = e[f], b(a[d], d, a))return d
  }, s.pick = function(a, b, c) {
    var d, e, f = {}, g = a;
    if (null == g)return f;
    s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), d = function(a, b, c) {
      return b in c
    }, g = Object(g));
    for (var h = 0, i = e.length; i > h; h++) {
      var j = e[h], k = g[j];
      d(k, j, g) && (f[j] = k)
    }
    return f
  }, s.omit = function(a, b, c) {
    if (s.isFunction(b))b = s.negate(b); else {
      var d = s.map(C(arguments, !1, !1, 1), String);
      b = function(a, b) {
        return !s.contains(d, b)
      }
    }
    return s.pick(a, b, c)
  }, s.defaults = v(s.allKeys, !0), s.create = function(a, b) {
    var c = w(a);
    return b && s.extendOwn(c, b), c
  }, s.clone = function(a) {
    return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a
  }, s.tap = function(a, b) {
    return b(a), a
  }, s.isMatch = function(a, b) {
    var c = s.keys(b), d = c.length;
    if (null == a)return !d;
    for (var e = Object(a), f = 0; d > f; f++) {
      var g = c[f];
      if (b[g] !== e[g] || !(g in e))return !1
    }
    return !0
  };
  var G = function(a, b, c, d) {
    if (a === b)return 0 !== a || 1 / a === 1 / b;
    if (null == a || null == b)return a === b;
    a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
    var e = l.call(a);
    if (e !== l.call(b))return !1;
    switch (e) {
    case"[object RegExp]":
    case"[object String]":
      return "" + a == "" + b;
    case"[object Number]":
      return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
    case"[object Date]":
    case"[object Boolean]":
      return +a === +b
    }
    var f = "[object Array]" === e;
    if (!f) {
      if ("object" != typeof a || "object" != typeof b)return !1;
      var g = a.constructor, h = b.constructor;
      if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b)return !1
    }
    c = c || [], d = d || [];
    for (var i = c.length; i--;)if (c[i] === a)return d[i] === b;
    if (c.push(a), d.push(b), f) {
      if (i = a.length, i !== b.length)return !1;
      for (; i--;)if (!G(a[i], b[i], c, d))return !1
    } else {
      var j, k = s.keys(a);
      if (i = k.length, s.keys(b).length !== i)return !1;
      for (; i--;)if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d))return !1
    }
    return c.pop(), d.pop(), !0
  };
  s.isEqual = function(a, b) {
    return G(a, b)
  }, s.isEmpty = function(a) {
    return null == a ? !0 : A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a).length
  }, s.isElement = function(a) {
    return !(!a || 1 !== a.nodeType)
  }, s.isArray = n || function(a) {
        return "[object Array]" === l.call(a)
      }, s.isObject = function(a) {
    var b = typeof a;
    return "function" === b || "object" === b && !!a
  }, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
    s["is" + a] = function(b) {
      return l.call(b) === "[object " + a + "]"
    }
  }), s.isArguments(arguments) || (s.isArguments = function(a) {
    return s.has(a, "callee")
  }), "function" != typeof/./ && "object" != typeof Int8Array && (s.isFunction = function(a) {
    return "function" == typeof a || !1
  }), s.isFinite = function(a) {
    return isFinite(a) && !isNaN(parseFloat(a))
  }, s.isNaN = function(a) {
    return s.isNumber(a) && a !== +a
  }, s.isBoolean = function(a) {
    return a === !0 || a === !1 || "[object Boolean]" === l.call(a)
  }, s.isNull = function(a) {
    return null === a
  }, s.isUndefined = function(a) {
    return void 0 === a
  }, s.has = function(a, b) {
    return null != a && m.call(a, b)
  }, s.noConflict = function() {
    return e._ = f, this
  }, s.identity = function(a) {
    return a
  }, s.constant = function(a) {
    return function() {
      return a
    }
  }, s.noop = function() {
  }, s.property = x, s.propertyOf = function(a) {
    return null == a ? function() {
    } : function(b) {
      return a[b]
    }
  }, s.matcher = s.matches = function(a) {
    return a = s.extendOwn({}, a), function(b) {
      return s.isMatch(b, a)
    }
  }, s.times = function(a, b, c) {
    var d = Array(Math.max(0, a));
    b = t(b, c, 1);
    for (var e = 0; a > e; e++)d[e] = b(e);
    return d
  }, s.random = function(a, b) {
    return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
  }, s.now = Date.now || function() {
        return (new Date).getTime()
      };
  var H = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  }, I = s.invert(H), J = function(a) {
    var b = function(b) {
      return a[b]
    }, c = "(?:" + s.keys(a).join("|") + ")", d = RegExp(c), e = RegExp(c, "g");
    return function(a) {
      return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
    }
  };
  s.escape = J(H), s.unescape = J(I), s.result = function(a, b, c) {
    var d = null == a ? void 0 : a[b];
    return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d
  };
  var K = 0;
  s.uniqueId = function(a) {
    var b = ++K + "";
    return a ? a + b : b
  }, s.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var L = /(.)^/, M = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "\u2028": "u2028",
    "\u2029": "u2029"
  }, N = /\\|'|\r|\n|\u2028|\u2029/g, O = function(a) {
    return "\\" + M[a]
  };
  s.template = function(a, b, c) {
    !b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
    var d = RegExp([(b.escape || L).source, (b.interpolate || L).source, (b.evaluate || L).source].join("|") + "|$", "g"), e = 0, f = "__p+='";
    a.replace(d, function(b, c, d, g, h) {
      return f += a.slice(e, h).replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
    }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
    try {
      var g = new Function(b.variable || "obj", "_", f)
    } catch (h) {
      throw h.source = f, h
    }
    var i = function(a) {
      return g.call(this, a, s)
    }, j = b.variable || "obj";
    return i.source = "function(" + j + "){\n" + f + "}", i
  }, s.chain = function(a) {
    var b = s(a);
    return b._chain = !0, b
  };
  var P = function(a, b) {
    return a._chain ? s(b).chain() : b
  };
  s.mixin = function(a) {
    s.each(s.functions(a), function(b) {
      var c = s[b] = a[b];
      s.prototype[b] = function() {
        var a = [this._wrapped];
        return j.apply(a, arguments), P(this, c.apply(s, a))
      }
    })
  }, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
    var b = g[a];
    s.prototype[a] = function() {
      var c = this._wrapped;
      return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], P(this, c)
    }
  }), s.each(["concat", "join", "slice"], function(a) {
    var b = g[a];
    s.prototype[a] = function() {
      return P(this, b.apply(this._wrapped, arguments))
    }
  }), s.prototype.value = function() {
    return this._wrapped
  }, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function() {
    return "" + this._wrapped
  }, "function" == typeof define && define.amd && define("underscore", [], function() {
    return s
  })
}.call(this);
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(a) {
  "use strict";
  switch (a.nodeName.toLowerCase()) {
  case"button":
  case"select":
  case"textarea":
    if (a.disabled)return !0;
    break;
  case"input":
    if (deviceIsIOS && "file" === a.type || a.disabled)return !0;
    break;
  case"label":
  case"video":
    return !0
  }
  return /\bneedsclick\b/.test(a.className)
};
FastClick.prototype.needsFocus = function(a) {
  "use strict";
  switch (a.nodeName.toLowerCase()) {
  case"textarea":
    return !0;
  case"select":
    return !deviceIsAndroid;
  case"input":
    switch (a.type) {
    case"button":
    case"checkbox":
    case"file":
    case"image":
    case"radio":
    case"submit":
      return !1
    }
    return !a.disabled && !a.readOnly;
  default:
    return /\bneedsfocus\b/.test(a.className)
  }
};

FastClick.prototype.sendClick = function(a, b) {
  "use strict";
  var c, d;
  document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
};

FastClick.prototype.determineEventType = function(a) {
  "use strict";
  return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
};

FastClick.prototype.focus = function(a) {
  "use strict";
  var b;
  deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
};

FastClick.prototype.updateScrollParent = function(a) {
  "use strict";
  var b, c;
  if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
    c = a;
    do {
      if (c.scrollHeight > c.offsetHeight) {
        b = c, a.fastClickScrollParent = c;
        break
      }
      c = c.parentElement
    } while (c)
  }
  b && (b.fastClickLastScrollTop = b.scrollTop)
};

FastClick.prototype.getTargetElementFromEventTarget = function(a) {
  "use strict";
  return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
};

FastClick.prototype.onTouchStart = function(a) {
  "use strict";
  var b, c, d;
  if (a.targetTouches.length > 1)return !0;
  if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], deviceIsIOS) {
    if (d = window.getSelection(), d.rangeCount && !d.isCollapsed)return !0;
    if (!deviceIsIOS4) {
      if (c.identifier === this.lastTouchIdentifier)return a.preventDefault(), !1;
      this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
    }
  }
  return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
};
FastClick.prototype.touchHasMoved = function(a) {
  "use strict";
  var b = a.changedTouches[0], c = this.touchBoundary;
  return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
};
FastClick.prototype.onTouchMove = function(a) {
  "use strict";
  return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
};
FastClick.prototype.findControl = function(a) {
  "use strict";
  return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(a) {
  "use strict";
  var b, c, d, e, f, g = this.targetElement;
  if (!this.trackingClick)return !0;
  if (a.timeStamp - this.lastClickTime < 200)return this.cancelNextClick = !0, !0;
  if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
    if (b = this.findControl(g)) {
      if (this.focus(g), deviceIsAndroid)return !1;
      g = b
    }
  } else if (this.needsFocus(g))return a.timeStamp - c > 100 || deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.sendClick(g, a), deviceIsIOS4 && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
  return deviceIsIOS && !deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
};
FastClick.prototype.onTouchCancel = function() {
  "use strict";
  this.trackingClick = !1, this.targetElement = null
};
FastClick.prototype.onMouse = function(a) {
  "use strict";
  return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
};
FastClick.prototype.onClick = function(a) {
  "use strict";
  var b;
  return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
};
FastClick.prototype.destroy = function() {
  "use strict";
  var a = this.layer;
  deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
};
FastClick.notNeeded = function(a) {
  "use strict";
  var b, c;
  if ("undefined" == typeof window.ontouchstart)return !0;
  if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
    if (!deviceIsAndroid)return !0;
    if (b = document.querySelector("meta[name=viewport]")) {
      if (-1 !== b.content.indexOf("user-scalable=no"))return !0;
      if (c > 31 && window.innerWidth <= window.screen.width)return !0
    }
  }
  return "none" === a.style.msTouchAction ? !0 : !1
};
FastClick.attach = function(a) {
  "use strict";
  return new FastClick(a)
};

"undefined" != typeof define && define.amd ? define(function() {
  "use strict";
  return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, function(a) {
  a.cookie = function(b, c, d) {
    if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(c)) || null === c || void 0 === c)) {
      if (d = a.extend({}, d), (null === c || void 0 === c) && (d.expires = -1), "number" == typeof d.expires) {
        var e = d.expires, f = d.expires = new Date;
        f.setDate(f.getDate() + e)
      }
      return c = String(c), document.cookie = [encodeURIComponent(b), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")
    }
    d = c || {};
    for (var g, h = d.raw ? function(a) {
      return a
    } : decodeURIComponent, i = document.cookie.split("; "), j = 0; g = i[j] && i[j].split("="); j++)if (h(g[0]) === b)return h(g[1] || "");
    return null
  }
}(jQuery);


var Common = {
  init: function() {
    this.setFastClick(), this.setMenu(), this.setMobileMenu(), this.setShare(), this.setWeixinPic(), this.setVideoForMobile(), this.setBuyBtn()
  }, project: "ow", setBuyBtn: function() {
    var a = $(".pure-menu-item.buy");
    $("body").scrollTop() > 50 && a.css("position", "fixed"), $(window).scroll(function() {
      var b = $(this).scrollTop();
      b >= 50 ? a.css("position", "fixed") : a.css("position", "absolute")
    })
  }, setWeixinPic: function() {
    var a = '<div id="m-weixin_img" style="height:0px;width:0px;overflow:hidden;"><img id="weixin_share_png" src="http://overwatch.nos.netease.com/1/images/common/weichat-share.png" /><img id="weixin_share_jpg" src="http://overwatch.nos.netease.com/1/images/common/wechat-share.jpg" /></div>';
    $("body").prepend(a)
  }, setVideoForMobile: function() {
    var a = $("video");
    Common.isMobile() && a.removeAttr("autoplay")
  }, video: {
    setVideoPop: function(a, b, c) {
      var d = this;
      a.on("click", function() {
        var a = $(this).attr("data-flv"), e = $(this).attr("data-video"), f = d.showVideoHtml([a, e], b, c);
        new JV.lightBox(f, {model: !0})
      })
    }, showVideoHtml: function(a, b, c) {
      var d, e = this;
      return d = Modernizr.video ? e.showIosVideo(a[1], b, c) : e.showFlvVideo("http://v.163.com/swf/video/NetEaseFlvPlayerV3.swf", b, c, a[0])
    }, showFlvVideo: function(a, b, c, d) {
      var e = '<div class="hos_lightbox" style="width:' + b + "px; height:" + c + 'px;"><div class="lightBox_bg"><object width="' + b + '" height="' + c + '" id="FPlayer" data="' + a + '" type="application/x-shockwave-flash"><param value="transparent" name="wmode" /><param value="true" name="allowFullScreen" /><param value="always" name="allowscriptaccess" /><param value="' + a + '" allownetworking="all" name="movie" /><param value="' + d + '" name="flashvars" /></object></div></div>';
      return e
    }, showIosVideo: function(a, b, c) {
      var d = '<video width="' + b + '" height="' + c + '" controls="controls" autoplay="false" preload="auto"><source src="' + a + '" type="video/mp4"> 您的浏览器暂时无法播放此视频.</video>';
      return d
    }
  }, validate: {
    digits: function(a) {
      var b = /^[0-9]+$/;
      return b.test(a)
    }, mobile: function(a) {
      var b = /^[1][3-8]\d{9}$/;
      return b.test(a)
    }, email: function(a) {
      var b = /^[0-9a-zA-Z+_.-]+@[0-9a-zA-Z_-]+\.[0-9a-zA-Z_.-]+$/;
      return b.test(a)
    }, p_code: function(a) {
      var b = /^\d{6}$/;
      return b.test(a)
    }
  }, libs: {
    baseSlide: function() {
      var a = $(".ui-slider");
      a.each(function(a, b) {
        var c = $(".ui-slider-pic", $(b)), d = c.children(), e = $(".ui-slider-txt", $(b)), f = e.children(), g = $(".prev", $(b)), h = $(".next", $(b)), i = $(".ui-slider-active", $(b)), j = d.index(i);
        g.click(function() {
          return j--, 0 > j && (j = d.length - 1), d.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(), f.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(), !1
        }), h.click(function() {
          return j++, j == d.length && (j = 0),
              d.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(), f.eq(j).siblings().hide().stop(!0, !0).end().fadeIn(), !1
        })
      })
    }, baseTabs: function(a, b, c) {
      a.live(c, function() {
        var c = $(this), d = a.index(c);
        c.addClass("active").siblings().removeClass("active"), b.eq(d).show().siblings().hide()
      })
    }, baseLightBox: function(a, b, c) {
      var d = '<div style="width:' + b + "px; height:" + c + 'px;" class="hos_lightbox">' + a + "</div>";
      $.hos.lightBox(d, {model: !0})
    }, lightBox: function(a, b, c) {
      var d = Common.getBoxwrap(b, c);
      d[3] = a, $.hos.lightBox(d.join(""), {model: !0, hasClose: !1})
    }, lightImg: function(a, b, c) {
      var d = "", e = "";
      "undefined" != typeof b && (d = "width:" + b + "px;"), "undefined" != typeof c && (e = "height:" + c + "px");
      var f = '<div style="' + d + e + '" class="hos_lightbox"><img style="' + d + e + '" alt="" src="' + a + '"></div>';
      $.hos.lightBox(f, {model: !0})
    }
  }, isObjectNull: function(a) {
    var b = 0;
    for (var c in a)b++;
    return 0 == b ? !0 : !1
  }, isMobile: function() {
    var a = /(android|iPhone|iPad|iPod|mobile)/gi;
    return a.test(navigator.userAgent)
  }, getData: function(a, b, c, d) {
    if (Common.isObjectNull(b))var b = {t: (new Date).getTime()}; else b.t = (new Date).getTime();
    var e;
    e = "undefined" == typeof d ? "html" : "json", $.get(a, b, function(a) {
      c(a)
    }, e)
  }, addFlash: function(a, b, c, d) {
    var e = {
      menu: "false",
      allowFullScreen: "false",
      allowScriptAccess: "true",
      bgcolor: "#12110f",
      quality: "high",
      wmode: "transparent",
      base: "."
    };
    "music" == arguments[4] && (e.wmode = "window"), swfobject.embedSWF(a, b, c, d, "9.0.0", "", "", e)
  }, formatDate: function(a) {
    var b = new Date(a), c = b.getFullYear(), d = b.getMonth() + 1, e = b.getDate();
    b.getHours(), b.getMinutes(), b.getSeconds();
    return 10 > d && (d = "0" + d), 10 > e && (e = "0" + e), c + "-" + d + "-" + e
  }, setFastClick: function() {
    FastClick.attach(document.body)
  }, setMenu: function() {
    var a = $(".pure-menu"), b = $(".menu-main-pin"), c = "menu-hidden", d = $(".nav-btn"), e = 44, f = 0;
    $(window).on("scroll", function() {
      var b = $(window).scrollTop();
      if (b !== f) {
        var g = b > e;
        g ? a.css("position", "fixed") : a.css("position", "absolute"), d.toggleClass("sticky", g), g = g && b > f, a.toggleClass(c, g), f = b
      }
    }), b.on("mouseenter", function() {
      a.removeClass(c)
    })
  }, setMobileMenu: function() {
    var a = $(".burger-nav"), b = $(".exit"), c = $(".wrapper"), d = $(".nav-burger-content-wrap"), e = "<div id='boxModel'></div>", f = "nav-burger-content-wrap-out", g = $(window).scrollTop();
    $(window).on("scroll", function() {
      g = $(window).scrollTop()
    }), a.click(function() {
      var a = $(window).width(), b = $(document).height();
      d.css("padding-top", g), c.addClass(f), $(".wrapper").append(e);
      var h = $("#boxModel");
      h.width(a).height(b).show()
    }), b.click(function() {
      c.removeClass(f);
      var a = $("#boxModel");
      a.remove()
    }), $("#boxModel").live("click touchstart", function() {
      $(this).remove(), c.removeClass(f)
    })
  }, setShare: function() {
    window.jiathis_config = {
      data_track_clickback: !0,
      summary: "《守望先锋™》是暴雪出品的首款团队射击游戏，现已正式来到中国。游戏以近未来地球为背景，来自全球的超级英雄们将使用自己独特的能力在战场上厮杀，带给玩家顶尖的射击体验。",
      pic: "http://overwatch.nos.netease.com/1/images/home/header-bg.jpg",
      title: "",
      hideMore: !1
    }, $("body").append('<script src="http://v3.jiathis.com/code/jia.js?uid=1803378"></script>')
  }
};