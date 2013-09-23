/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
!function (t, e) {
    function i(t) {
        var e = t.length, i = he.type(t);
        return he.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t) {
        var e = ke[t] = {};
        return he.each(t.match(pe) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function o(t, i, n, o) {
        if (he.acceptData(t)) {
            var r, s, a = he.expando, l = t.nodeType, u = l ? he.cache : t, h = l ? t[a] : t[a] && a;
            if (h && u[h] && (o || u[h].data) || n !== e || "string" != typeof i)return h || (h = l ? t[a] = ee.pop() || he.guid++ : a), u[h] || (u[h] = l ? {} : {toJSON: he.noop}), ("object" == typeof i || "function" == typeof i) && (o ? u[h] = he.extend(u[h], i) : u[h].data = he.extend(u[h].data, i)), s = u[h], o || (s.data || (s.data = {}), s = s.data), n !== e && (s[he.camelCase(i)] = n), "string" == typeof i ? (r = s[i], null == r && (r = s[he.camelCase(i)])) : r = s, r
        }
    }

    function r(t, e, i) {
        if (he.acceptData(t)) {
            var n, o, r = t.nodeType, s = r ? he.cache : t, l = r ? t[he.expando] : he.expando;
            if (s[l]) {
                if (e && (n = i ? s[l] : s[l].data)) {
                    he.isArray(e) ? e = e.concat(he.map(e, he.camelCase)) : e in n ? e = [e] : (e = he.camelCase(e), e = e in n ? [e] : e.split(" ")), o = e.length;
                    for (; o--;)delete n[e[o]];
                    if (i ? !a(n) : !he.isEmptyObject(n))return
                }
                (i || (delete s[l].data, a(s[l]))) && (r ? he.cleanData([t], !0) : he.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function s(t, i, n) {
        if (n === e && 1 === t.nodeType) {
            var o = "data-" + i.replace(De, "-$1").toLowerCase();
            if (n = t.getAttribute(o), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Te.test(n) ? he.parseJSON(n) : n
                } catch (r) {
                }
                he.data(t, i, n)
            } else n = e
        }
        return n
    }

    function a(t) {
        var e;
        for (e in t)if (("data" !== e || !he.isEmptyObject(t[e])) && "toJSON" !== e)return!1;
        return!0
    }

    function l() {
        return!0
    }

    function u() {
        return!1
    }

    function h() {
        try {
            return G.activeElement
        } catch (t) {
        }
    }

    function c(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function p(t, e, i) {
        if (he.isFunction(e))return he.grep(t, function (t, n) {
            return!!e.call(t, n, t) !== i
        });
        if (e.nodeType)return he.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (je.test(e))return he.filter(e, t, i);
            e = he.filter(e, t)
        }
        return he.grep(t, function (t) {
            return he.inArray(t, e) >= 0 !== i
        })
    }

    function d(t) {
        var e = qe.split("|"), i = t.createDocumentFragment();
        if (i.createElement)for (; e.length;)i.createElement(e.pop());
        return i
    }

    function f(t, e) {
        return he.nodeName(t, "table") && he.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function g(t) {
        return t.type = (null !== he.find.attr(t, "type")) + "/" + t.type, t
    }

    function m(t) {
        var e = oi.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function v(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)he._data(i, "globalEval", !e || he._data(e[n], "globalEval"))
    }

    function y(t, e) {
        if (1 === e.nodeType && he.hasData(t)) {
            var i, n, o, r = he._data(t), s = he._data(e, r), a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (i in a)for (n = 0, o = a[i].length; o > n; n++)he.event.add(e, i, a[i][n])
            }
            s.data && (s.data = he.extend({}, s.data))
        }
    }

    function b(t, e) {
        var i, n, o;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !he.support.noCloneEvent && e[he.expando]) {
                o = he._data(e);
                for (n in o.events)he.removeEvent(e, n, o.handle);
                e.removeAttribute(he.expando)
            }
            "script" === i && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), he.support.html5Clone && t.innerHTML && !he.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ei.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function _(t, i) {
        var n, o, r = 0, s = typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== Y ? t.querySelectorAll(i || "*") : e;
        if (!s)for (s = [], n = t.childNodes || t; null != (o = n[r]); r++)!i || he.nodeName(o, i) ? s.push(o) : he.merge(s, _(o, i));
        return i === e || i && he.nodeName(t, i) ? he.merge([t], s) : s
    }

    function C(t) {
        ei.test(t.type) && (t.defaultChecked = t.checked)
    }

    function w(t, e) {
        if (e in t)return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = Si.length; o--;)if (e = Si[o] + i, e in t)return e;
        return n
    }

    function x(t, e) {
        return t = e || t, "none" === he.css(t, "display") || !he.contains(t.ownerDocument, t)
    }

    function S(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++)n = t[s], n.style && (r[s] = he._data(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && x(n) && (r[s] = he._data(n, "olddisplay", P(n.nodeName)))) : r[s] || (o = x(n), (i && "none" !== i || !o) && he._data(n, "olddisplay", o ? i : he.css(n, "display"))));
        for (s = 0; a > s; s++)n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function k(t, e, i) {
        var n = vi.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function T(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === i && (s += he.css(t, i + xi[r], !0, o)), n ? ("content" === i && (s -= he.css(t, "padding" + xi[r], !0, o)), "margin" !== i && (s -= he.css(t, "border" + xi[r] + "Width", !0, o))) : (s += he.css(t, "padding" + xi[r], !0, o), "padding" !== i && (s += he.css(t, "border" + xi[r] + "Width", !0, o)));
        return s
    }

    function D(t, e, i) {
        var n = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = hi(t), s = he.support.boxSizing && "border-box" === he.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = ci(t, e, r), (0 > o || null == o) && (o = t.style[e]), yi.test(o))return o;
            n = s && (he.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + T(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function P(t) {
        var e = G, i = _i[t];
        return i || (i = E(t, e), "none" !== i && i || (ui = (ui || he("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ui[0].contentWindow || ui[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = E(t, e), ui.detach()), _i[t] = i), i
    }

    function E(t, e) {
        var i = he(e.createElement(t)).appendTo(e.body), n = he.css(i[0], "display");
        return i.remove(), n
    }

    function M(t, e, i, n) {
        var o;
        if (he.isArray(e))he.each(e, function (e, o) {
            i || Ti.test(t) ? n(t, o) : M(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
        }); else if (i || "object" !== he.type(e))n(t, e); else for (o in e)M(t + "[" + o + "]", e[o], i, n)
    }

    function I(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0, r = e.toLowerCase().match(pe) || [];
            if (he.isFunction(i))for (; n = r[o++];)"+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function F(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, he.each(t[a] || [], function (t, a) {
                var u = a(e, i, n);
                return"string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }

        var r = {}, s = t === Bi;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function A(t, i) {
        var n, o, r = he.ajaxSettings.flatOptions || {};
        for (o in i)i[o] !== e && ((r[o] ? t : n || (n = {}))[o] = i[o]);
        return n && he.extend(!0, t, n), t
    }

    function $(t, i, n) {
        for (var o, r, s, a, l = t.contents, u = t.dataTypes; "*" === u[0];)u.shift(), r === e && (r = t.mimeType || i.getResponseHeader("Content-Type"));
        if (r)for (a in l)if (l[a] && l[a].test(r)) {
            u.unshift(a);
            break
        }
        if (u[0]in n)s = u[0]; else {
            for (a in n) {
                if (!u[0] || t.converters[a + " " + u[0]]) {
                    s = a;
                    break
                }
                o || (o = a)
            }
            s = s || o
        }
        return s ? (s !== u[0] && u.unshift(s), n[s]) : void 0
    }

    function L(t, e, i, n) {
        var o, r, s, a, l, u = {}, h = t.dataTypes.slice();
        if (h[1])for (s in t.converters)u[s.toLowerCase()] = t.converters[s];
        for (r = h.shift(); r;)if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)for (o in u)if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], h.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && t["throws"])e = s(e); else try {
                e = s(e)
            } catch (c) {
                return{state: "parsererror", error: s ? c : "No conversion from " + l + " to " + r}
            }
        }
        return{state: "success", data: e}
    }

    function N() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function O() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function V() {
        return setTimeout(function () {
            Ji = e
        }), Ji = he.now()
    }

    function R(t, e, i) {
        for (var n, o = (rn[e] || []).concat(rn["*"]), r = 0, s = o.length; s > r; r++)if (n = o[r].call(i, e, t))return n
    }

    function H(t, e, i) {
        var n, o, r = 0, s = on.length, a = he.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)return!1;
            for (var e = Ji || V(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(r);
            return a.notifyWith(t, [u, r, i]), 1 > r && l ? i : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({elem: t, props: he.extend({}, e), opts: he.extend(!0, {specialEasing: {}}, i), originalProperties: e, originalOptions: i, startTime: Ji || V(), duration: i.duration, tweens: [], createTween: function (e, i) {
            var n = he.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
            return u.tweens.push(n), n
        }, stop: function (e) {
            var i = 0, n = e ? u.tweens.length : 0;
            if (o)return this;
            for (o = !0; n > i; i++)u.tweens[i].run(1);
            return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
        }}), h = u.props;
        for (z(h, u.opts.specialEasing); s > r; r++)if (n = on[r].call(u, t, h, u.opts))return n;
        return he.map(h, R, u), he.isFunction(u.opts.start) && u.opts.start.call(t, u), he.fx.timer(he.extend(l, {elem: t, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(t, e) {
        var i, n, o, r, s;
        for (i in t)if (n = he.camelCase(i), o = e[n], r = t[i], he.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = he.cssHooks[n], s && "expand"in s) {
            r = s.expand(r), delete t[n];
            for (i in r)i in t || (t[i] = r[i], e[i] = o)
        } else e[n] = o
    }

    function j(t, e, i) {
        var n, o, r, s, a, l, u = this, h = {}, c = t.style, p = t.nodeType && x(t), d = he._data(t, "fxshow");
        i.queue || (a = he._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, u.always(function () {
            u.always(function () {
                a.unqueued--, he.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === he.css(t, "display") && "none" === he.css(t, "float") && (he.support.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? c.zoom = 1 : c.display = "inline-block")), i.overflow && (c.overflow = "hidden", he.support.shrinkWrapBlocks || u.always(function () {
            c.overflow = i.overflow[0], c.overflowX = i.overflow[1], c.overflowY = i.overflow[2]
        }));
        for (n in e)if (o = e[n], tn.exec(o)) {
            if (delete e[n], r = r || "toggle" === o, o === (p ? "hide" : "show"))continue;
            h[n] = d && d[n] || he.style(t, n)
        }
        if (!he.isEmptyObject(h)) {
            d ? "hidden"in d && (p = d.hidden) : d = he._data(t, "fxshow", {}), r && (d.hidden = !p), p ? he(t).show() : u.done(function () {
                he(t).hide()
            }), u.done(function () {
                var e;
                he._removeData(t, "fxshow");
                for (e in h)he.style(t, e, h[e])
            });
            for (n in h)s = R(p ? d[n] : 0, n, u), n in d || (d[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function B(t, e, i, n, o) {
        return new B.prototype.init(t, e, i, n, o)
    }

    function W(t, e) {
        var i, n = {height: t}, o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e)i = xi[o], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function U(t) {
        return he.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var q, K, Y = typeof e, X = t.location, G = t.document, Q = G.documentElement, J = t.jQuery, Z = t.$, te = {}, ee = [], ie = "1.10.2", ne = ee.concat, oe = ee.push, re = ee.slice, se = ee.indexOf, ae = te.toString, le = te.hasOwnProperty, ue = ie.trim, he = function (t, e) {
        return new he.fn.init(t, e, K)
    }, ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pe = /\S+/g, de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, me = /^[\],:{}\s]*$/, ve = /(?:^|:|,)(?:\s*\[)+/g, ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, _e = /^-ms-/, Ce = /-([\da-z])/gi, we = function (t, e) {
        return e.toUpperCase()
    }, xe = function (t) {
        (G.addEventListener || "load" === t.type || "complete" === G.readyState) && (Se(), he.ready())
    }, Se = function () {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", xe, !1), t.removeEventListener("load", xe, !1)) : (G.detachEvent("onreadystatechange", xe), t.detachEvent("onload", xe))
    };
    he.fn = he.prototype = {jquery: ie, constructor: he, init: function (t, i, n) {
        var o, r;
        if (!t)return this;
        if ("string" == typeof t) {
            if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : fe.exec(t), !o || !o[1] && i)return!i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
            if (o[1]) {
                if (i = i instanceof he ? i[0] : i, he.merge(this, he.parseHTML(o[1], i && i.nodeType ? i.ownerDocument || i : G, !0)), ge.test(o[1]) && he.isPlainObject(i))for (o in i)he.isFunction(this[o]) ? this[o](i[o]) : this.attr(o, i[o]);
                return this
            }
            if (r = G.getElementById(o[2]), r && r.parentNode) {
                if (r.id !== o[2])return n.find(t);
                this.length = 1, this[0] = r
            }
            return this.context = G, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : he.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), he.makeArray(t, this))
    }, selector: "", length: 0, toArray: function () {
        return re.call(this)
    }, get: function (t) {
        return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
    }, pushStack: function (t) {
        var e = he.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
    }, each: function (t, e) {
        return he.each(this, t, e)
    }, ready: function (t) {
        return he.ready.promise().done(t), this
    }, slice: function () {
        return this.pushStack(re.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (t) {
        var e = this.length, i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
    }, map: function (t) {
        return this.pushStack(he.map(this, function (e, i) {
            return t.call(e, i, e)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: oe, sort: [].sort, splice: [].splice}, he.fn.init.prototype = he.fn, he.extend = he.fn.extend = function () {
        var t, i, n, o, r, s, a = arguments[0] || {}, l = 1, u = arguments.length, h = !1;
        for ("boolean" == typeof a && (h = a, a = arguments[1] || {}, l = 2), "object" == typeof a || he.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)if (null != (r = arguments[l]))for (o in r)t = a[o], n = r[o], a !== n && (h && n && (he.isPlainObject(n) || (i = he.isArray(n))) ? (i ? (i = !1, s = t && he.isArray(t) ? t : []) : s = t && he.isPlainObject(t) ? t : {}, a[o] = he.extend(h, s, n)) : n !== e && (a[o] = n));
        return a
    }, he.extend({expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), noConflict: function (e) {
        return t.$ === he && (t.$ = Z), e && t.jQuery === he && (t.jQuery = J), he
    }, isReady: !1, readyWait: 1, holdReady: function (t) {
        t ? he.readyWait++ : he.ready(!0)
    }, ready: function (t) {
        if (t === !0 ? !--he.readyWait : !he.isReady) {
            if (!G.body)return setTimeout(he.ready);
            he.isReady = !0, t !== !0 && --he.readyWait > 0 || (q.resolveWith(G, [he]), he.fn.trigger && he(G).trigger("ready").off("ready"))
        }
    }, isFunction: function (t) {
        return"function" === he.type(t)
    }, isArray: Array.isArray || function (t) {
        return"array" === he.type(t)
    }, isWindow: function (t) {
        return null != t && t == t.window
    }, isNumeric: function (t) {
        return!isNaN(parseFloat(t)) && isFinite(t)
    }, type: function (t) {
        return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? te[ae.call(t)] || "object" : typeof t
    }, isPlainObject: function (t) {
        var i;
        if (!t || "object" !== he.type(t) || t.nodeType || he.isWindow(t))return!1;
        try {
            if (t.constructor && !le.call(t, "constructor") && !le.call(t.constructor.prototype, "isPrototypeOf"))return!1
        } catch (n) {
            return!1
        }
        if (he.support.ownLast)for (i in t)return le.call(t, i);
        for (i in t);
        return i === e || le.call(t, i)
    }, isEmptyObject: function (t) {
        var e;
        for (e in t)return!1;
        return!0
    }, error: function (t) {
        throw new Error(t)
    }, parseHTML: function (t, e, i) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || G;
        var n = ge.exec(t), o = !i && [];
        return n ? [e.createElement(n[1])] : (n = he.buildFragment([t], e, o), o && he(o).remove(), he.merge([], n.childNodes))
    }, parseJSON: function (e) {
        return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = he.trim(e), e && me.test(e.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? new Function("return " + e)() : (he.error("Invalid JSON: " + e), void 0)
    }, parseXML: function (i) {
        var n, o;
        if (!i || "string" != typeof i)return null;
        try {
            t.DOMParser ? (o = new DOMParser, n = o.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
        } catch (r) {
            n = e
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + i), n
    }, noop: function () {
    }, globalEval: function (e) {
        e && he.trim(e) && (t.execScript || function (e) {
            t.eval.call(t, e)
        })(e)
    }, camelCase: function (t) {
        return t.replace(_e, "ms-").replace(Ce, we)
    }, nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }, each: function (t, e, n) {
        var o, r = 0, s = t.length, a = i(t);
        if (n) {
            if (a)for (; s > r && (o = e.apply(t[r], n), o !== !1); r++); else for (r in t)if (o = e.apply(t[r], n), o === !1)break
        } else if (a)for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++); else for (r in t)if (o = e.call(t[r], r, t[r]), o === !1)break;
        return t
    }, trim: ue && !ue.call("﻿ ") ? function (t) {
        return null == t ? "" : ue.call(t)
    } : function (t) {
        return null == t ? "" : (t + "").replace(de, "")
    }, makeArray: function (t, e) {
        var n = e || [];
        return null != t && (i(Object(t)) ? he.merge(n, "string" == typeof t ? [t] : t) : oe.call(n, t)), n
    }, inArray: function (t, e, i) {
        var n;
        if (e) {
            if (se)return se.call(e, t, i);
            for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in e && e[i] === t)return i
        }
        return-1
    }, merge: function (t, i) {
        var n = i.length, o = t.length, r = 0;
        if ("number" == typeof n)for (; n > r; r++)t[o++] = i[r]; else for (; i[r] !== e;)t[o++] = i[r++];
        return t.length = o, t
    }, grep: function (t, e, i) {
        var n, o = [], r = 0, s = t.length;
        for (i = !!i; s > r; r++)n = !!e(t[r], r), i !== n && o.push(t[r]);
        return o
    }, map: function (t, e, n) {
        var o, r = 0, s = t.length, a = i(t), l = [];
        if (a)for (; s > r; r++)o = e(t[r], r, n), null != o && (l[l.length] = o); else for (r in t)o = e(t[r], r, n), null != o && (l[l.length] = o);
        return ne.apply([], l)
    }, guid: 1, proxy: function (t, i) {
        var n, o, r;
        return"string" == typeof i && (r = t[i], i = t, t = r), he.isFunction(t) ? (n = re.call(arguments, 2), o = function () {
            return t.apply(i || this, n.concat(re.call(arguments)))
        }, o.guid = t.guid = t.guid || he.guid++, o) : e
    }, access: function (t, i, n, o, r, s, a) {
        var l = 0, u = t.length, h = null == n;
        if ("object" === he.type(n)) {
            r = !0;
            for (l in n)he.access(t, i, l, n[l], !0, s, a)
        } else if (o !== e && (r = !0, he.isFunction(o) || (a = !0), h && (a ? (i.call(t, o), i = null) : (h = i, i = function (t, e, i) {
            return h.call(he(t), i)
        })), i))for (; u > l; l++)i(t[l], n, a ? o : o.call(t[l], l, i(t[l], n)));
        return r ? t : h ? i.call(t) : u ? i(t[0], n) : s
    }, now: function () {
        return(new Date).getTime()
    }, swap: function (t, e, i, n) {
        var o, r, s = {};
        for (r in e)s[r] = t.style[r], t.style[r] = e[r];
        o = i.apply(t, n || []);
        for (r in e)t.style[r] = s[r];
        return o
    }}), he.ready.promise = function (e) {
        if (!q)if (q = he.Deferred(), "complete" === G.readyState)setTimeout(he.ready); else if (G.addEventListener)G.addEventListener("DOMContentLoaded", xe, !1), t.addEventListener("load", xe, !1); else {
            G.attachEvent("onreadystatechange", xe), t.attachEvent("onload", xe);
            var i = !1;
            try {
                i = null == t.frameElement && G.documentElement
            } catch (n) {
            }
            i && i.doScroll && function o() {
                if (!he.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(o, 50)
                    }
                    Se(), he.ready()
                }
            }()
        }
        return q.promise(e)
    }, he.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        te["[object " + e + "]"] = e.toLowerCase()
    }), K = he(G), /*!
     * Sizzle CSS Selector Engine v1.10.2
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-07-03
     */
        function (t, e) {
            function i(t, e, i, n) {
                var o, r, s, a, l, u, h, c, f, g;
                if ((e ? e.ownerDocument || e : H) !== F && I(e), e = e || F, i = i || [], !t || "string" != typeof t)return i;
                if (1 !== (a = e.nodeType) && 9 !== a)return[];
                if ($ && !n) {
                    if (o = be.exec(t))if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode)return i;
                            if (r.id === s)return i.push(r), i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && V(e, r) && r.id === s)return i.push(r), i
                    } else {
                        if (o[2])return te.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = o[3]) && x.getElementsByClassName && e.getElementsByClassName)return te.apply(i, e.getElementsByClassName(s)), i
                    }
                    if (x.qsa && (!L || !L.test(t))) {
                        if (c = h = R, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = p(t), (h = e.getAttribute("id")) ? c = h.replace(we, "\\$&") : e.setAttribute("id", c), c = "[id='" + c + "'] ", l = u.length; l--;)u[l] = c + d(u[l]);
                            f = de.test(t) && e.parentNode || e, g = u.join(",")
                        }
                        if (g)try {
                            return te.apply(i, f.querySelectorAll(g)), i
                        } catch (m) {
                        } finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return C(t.replace(ue, "$1"), e, i, n)
            }

            function n() {
                function t(i, n) {
                    return e.push(i += " ") > k.cacheLength && delete t[e.shift()], t[i] = n
                }

                var e = [];
                return t
            }

            function o(t) {
                return t[R] = !0, t
            }

            function r(t) {
                var e = F.createElement("div");
                try {
                    return!!t(e)
                } catch (i) {
                    return!1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;)k.attrHandle[i[n]] = e
            }

            function a(t, e) {
                var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (n)return n;
                if (i)for (; i = i.nextSibling;)if (i === e)return-1;
                return t ? 1 : -1
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return"input" === i && e.type === t
                }
            }

            function u(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return o(function (e) {
                    return e = +e, o(function (i, n) {
                        for (var o, r = t([], i.length, e), s = r.length; s--;)i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function c() {
            }

            function p(t, e) {
                var n, o, r, s, a, l, u, h = W[t + " "];
                if (h)return e ? 0 : h.slice(0);
                for (a = t, l = [], u = k.preFilter; a;) {
                    (!n || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = pe.exec(a)) && (n = o.shift(), r.push({value: n, type: o[0].replace(ue, " ")}), a = a.slice(n.length));
                    for (s in k.filter)!(o = ve[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({value: n, type: s, matches: o}), a = a.slice(n.length));
                    if (!n)break
                }
                return e ? a.length : a ? i.error(t) : W(t, l).slice(0)
            }

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++)n += t[e].value;
                return n
            }

            function f(t, e, i) {
                var n = e.dir, o = i && "parentNode" === n, r = j++;
                return e.first ? function (e, i, r) {
                    for (; e = e[n];)if (1 === e.nodeType || o)return t(e, i, r)
                } : function (e, i, s) {
                    var a, l, u, h = z + " " + r;
                    if (s) {
                        for (; e = e[n];)if ((1 === e.nodeType || o) && t(e, i, s))return!0
                    } else for (; e = e[n];)if (1 === e.nodeType || o)if (u = e[R] || (e[R] = {}), (l = u[n]) && l[0] === h) {
                        if ((a = l[1]) === !0 || a === S)return a === !0
                    } else if (l = u[n] = [h], l[1] = t(e, i, s) || S, l[1] === !0)return!0
                }
            }

            function g(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var o = t.length; o--;)if (!t[o](e, i, n))return!1;
                    return!0
                } : t[0]
            }

            function m(t, e, i, n, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, o)) && (s.push(r), u && e.push(a));
                return s
            }

            function v(t, e, i, n, r, s) {
                return n && !n[R] && (n = v(n)), r && !r[R] && (r = v(r, s)), o(function (o, s, a, l) {
                    var u, h, c, p = [], d = [], f = s.length, g = o || _(e || "*", a.nodeType ? [a] : a, []), v = !t || !o && e ? g : m(g, p, t, a, l), y = i ? r || (o ? t : f || n) ? [] : s : v;
                    if (i && i(v, y, a, l), n)for (u = m(y, d), n(u, [], a, l), h = u.length; h--;)(c = u[h]) && (y[d[h]] = !(v[d[h]] = c));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [], h = y.length; h--;)(c = y[h]) && u.push(v[h] = c);
                                r(null, y = [], u, l)
                            }
                            for (h = y.length; h--;)(c = y[h]) && (u = r ? ie.call(o, c) : p[h]) > -1 && (o[u] = !(s[u] = c))
                        }
                    } else y = m(y === s ? y.splice(f, y.length) : y), r ? r(null, s, y, l) : te.apply(s, y)
                })
            }

            function y(t) {
                for (var e, i, n, o = t.length, r = k.relative[t[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = f(function (t) {
                    return t === e
                }, s, !0), u = f(function (t) {
                    return ie.call(e, t) > -1
                }, s, !0), h = [function (t, i, n) {
                    return!r && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
                }]; o > a; a++)if (i = k.relative[t[a].type])h = [f(g(h), i)]; else {
                    if (i = k.filter[t[a].type].apply(null, t[a].matches), i[R]) {
                        for (n = ++a; o > n && !k.relative[t[n].type]; n++);
                        return v(a > 1 && g(h), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(ue, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && d(t))
                    }
                    h.push(i)
                }
                return g(h)
            }

            function b(t, e) {
                var n = 0, r = e.length > 0, s = t.length > 0, a = function (o, a, l, u, h) {
                    var c, p, d, f = [], g = 0, v = "0", y = o && [], b = null != h, _ = E, C = o || s && k.find.TAG("*", h && a.parentNode || a), w = z += null == _ ? 1 : Math.random() || .1;
                    for (b && (E = a !== F && a, S = n); null != (c = C[v]); v++) {
                        if (s && c) {
                            for (p = 0; d = t[p++];)if (d(c, a, l)) {
                                u.push(c);
                                break
                            }
                            b && (z = w, S = ++n)
                        }
                        r && ((c = !d && c) && g--, o && y.push(c))
                    }
                    if (g += v, r && v !== g) {
                        for (p = 0; d = e[p++];)d(y, f, a, l);
                        if (o) {
                            if (g > 0)for (; v--;)y[v] || f[v] || (f[v] = J.call(u));
                            f = m(f)
                        }
                        te.apply(u, f), b && !o && f.length > 0 && g + e.length > 1 && i.uniqueSort(u)
                    }
                    return b && (z = w, E = _), y
                };
                return r ? o(a) : a
            }

            function _(t, e, n) {
                for (var o = 0, r = e.length; r > o; o++)i(t, e[o], n);
                return n
            }

            function C(t, e, i, n) {
                var o, r, s, a, l, u = p(t);
                if (!n && 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && $ && k.relative[r[1].type]) {
                        if (e = (k.find.ID(s.matches[0].replace(xe, Se), e) || [])[0], !e)return i;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = ve.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)if ((l = k.find[a]) && (n = l(s.matches[0].replace(xe, Se), de.test(r[0].type) && e.parentNode || e))) {
                        if (r.splice(o, 1), t = n.length && d(r), !t)return te.apply(i, n), i;
                        break
                    }
                }
                return P(t, u)(n, e, !$, i, de.test(t)), i
            }

            var w, x, S, k, T, D, P, E, M, I, F, A, $, L, N, O, V, R = "sizzle" + -new Date, H = t.document, z = 0, j = 0, B = n(), W = n(), U = n(), q = !1, K = function (t, e) {
                return t === e ? (q = !0, 0) : 0
            }, Y = typeof e, X = 1 << 31, G = {}.hasOwnProperty, Q = [], J = Q.pop, Z = Q.push, te = Q.push, ee = Q.slice, ie = Q.indexOf || function (t) {
                for (var e = 0, i = this.length; i > e; e++)if (this[e] === t)return e;
                return-1
            }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", oe = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", se = re.replace("w", "w#"), ae = "\\[" + oe + "*(" + re + ")" + oe + "*(?:([*^$|!~]?=)" + oe + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + se + ")|)|)" + oe + "*\\]", le = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)", ue = new RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"), ce = new RegExp("^" + oe + "*," + oe + "*"), pe = new RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"), de = new RegExp(oe + "*[+~]"), fe = new RegExp("=" + oe + "*([^\\]'\"]*)" + oe + "*\\]", "g"), ge = new RegExp(le), me = new RegExp("^" + se + "$"), ve = {ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + ae), PSEUDO: new RegExp("^" + le), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"), bool: new RegExp("^(?:" + ne + ")$", "i"), needsContext: new RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")}, ye = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _e = /^(?:input|select|textarea|button)$/i, Ce = /^h\d$/i, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"), Se = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
            try {
                te.apply(Q = ee.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
            } catch (ke) {
                te = {apply: Q.length ? function (t, e) {
                    Z.apply(t, ee.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }}
            }
            D = i.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, x = i.support = {}, I = i.setDocument = function (t) {
                var e = t ? t.ownerDocument || t : H, i = e.defaultView;
                return e !== F && 9 === e.nodeType && e.documentElement ? (F = e, A = e.documentElement, $ = !D(e), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                    I()
                }), x.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function (t) {
                    return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = r(function (t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), x.getById = r(function (t) {
                    return A.appendChild(t).id = R, !e.getElementsByName || !e.getElementsByName(R).length
                }), x.getById ? (k.find.ID = function (t, e) {
                    if (typeof e.getElementById !== Y && $) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, k.filter.ID = function (t) {
                    var e = t.replace(xe, Se);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete k.find.ID, k.filter.ID = function (t) {
                    var e = t.replace(xe, Se);
                    return function (t) {
                        var i = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), k.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0
                } : function (t, e) {
                    var i, n = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = r[o++];)1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, k.find.CLASS = x.getElementsByClassName && function (t, e) {
                    return typeof e.getElementsByClassName !== Y && $ ? e.getElementsByClassName(t) : void 0
                }, N = [], L = [], (x.qsa = ye.test(e.querySelectorAll)) && (r(function (t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || L.push("\\[" + oe + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || L.push(":checked")
                }), r(function (t) {
                    var i = e.createElement("input");
                    i.setAttribute("type", "hidden"), t.appendChild(i).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && L.push("[*^$]=" + oe + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = ye.test(O = A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function (t) {
                    x.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), N.push("!=", le)
                }), L = L.length && new RegExp(L.join("|")), N = N.length && new RegExp(N.join("|")), V = ye.test(A.contains) || A.compareDocumentPosition ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return!0;
                    return!1
                }, K = A.compareDocumentPosition ? function (t, i) {
                    if (t === i)return q = !0, 0;
                    var n = i.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(i);
                    return n ? 1 & n || !x.sortDetached && i.compareDocumentPosition(t) === n ? t === e || V(H, t) ? -1 : i === e || V(H, i) ? 1 : M ? ie.call(M, t) - ie.call(M, i) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function (t, i) {
                    var n, o = 0, r = t.parentNode, s = i.parentNode, l = [t], u = [i];
                    if (t === i)return q = !0, 0;
                    if (!r || !s)return t === e ? -1 : i === e ? 1 : r ? -1 : s ? 1 : M ? ie.call(M, t) - ie.call(M, i) : 0;
                    if (r === s)return a(t, i);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (n = i; n = n.parentNode;)u.unshift(n);
                    for (; l[o] === u[o];)o++;
                    return o ? a(l[o], u[o]) : l[o] === H ? -1 : u[o] === H ? 1 : 0
                }, e) : F
            }, i.matches = function (t, e) {
                return i(t, null, null, e)
            }, i.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== F && I(t), e = e.replace(fe, "='$1']"), !(!x.matchesSelector || !$ || N && N.test(e) || L && L.test(e)))try {
                    var n = O.call(t, e);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
                } catch (o) {
                }
                return i(e, F, null, [t]).length > 0
            }, i.contains = function (t, e) {
                return(t.ownerDocument || t) !== F && I(t), V(t, e)
            }, i.attr = function (t, i) {
                (t.ownerDocument || t) !== F && I(t);
                var n = k.attrHandle[i.toLowerCase()], o = n && G.call(k.attrHandle, i.toLowerCase()) ? n(t, i, !$) : e;
                return o === e ? x.attributes || !$ ? t.getAttribute(i) : (o = t.getAttributeNode(i)) && o.specified ? o.value : null : o
            }, i.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, i.uniqueSort = function (t) {
                var e, i = [], n = 0, o = 0;
                if (q = !x.detectDuplicates, M = !x.sortStable && t.slice(0), t.sort(K), q) {
                    for (; e = t[o++];)e === t[o] && (n = i.push(o));
                    for (; n--;)t.splice(i[n], 1)
                }
                return t
            }, T = i.getText = function (t) {
                var e, i = "", n = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)i += T(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[n]; n++)i += T(e);
                return i
            }, k = i.selectors = {cacheLength: 50, createPseudo: o, match: ve, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (t) {
                return t[1] = t[1].replace(xe, Se), t[3] = (t[4] || t[5] || "").replace(xe, Se), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
            }, CHILD: function (t) {
                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]), t
            }, PSEUDO: function (t) {
                var i, n = !t[5] && t[2];
                return ve.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && ge.test(n) && (i = p(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), t[2] = n.slice(0, i)), t.slice(0, 3))
            }}, filter: {TAG: function (t) {
                var e = t.replace(xe, Se).toLowerCase();
                return"*" === t ? function () {
                    return!0
                } : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e
                }
            }, CLASS: function (t) {
                var e = B[t + " "];
                return e || (e = new RegExp("(^|" + oe + ")" + t + "(" + oe + "|$)")) && B(t, function (t) {
                    return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                })
            }, ATTR: function (t, e, n) {
                return function (o) {
                    var r = i.attr(o, t);
                    return null == r ? "!=" === e : e ? (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r + " ").indexOf(n) > -1 : "|=" === e ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                }
            }, CHILD: function (t, e, i, n, o) {
                var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                return 1 === n && 0 === o ? function (t) {
                    return!!t.parentNode
                } : function (e, i, l) {
                    var u, h, c, p, d, f, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                    if (m) {
                        if (r) {
                            for (; g;) {
                                for (c = e; c = c[g];)if (a ? c.nodeName.toLowerCase() === v : 1 === c.nodeType)return!1;
                                f = g = "only" === t && !f && "nextSibling"
                            }
                            return!0
                        }
                        if (f = [s ? m.firstChild : m.lastChild], s && y) {
                            for (h = m[R] || (m[R] = {}), u = h[t] || [], d = u[0] === z && u[1], p = u[0] === z && u[2], c = d && m.childNodes[d]; c = ++d && c && c[g] || (p = d = 0) || f.pop();)if (1 === c.nodeType && ++p && c === e) {
                                h[t] = [z, d, p];
                                break
                            }
                        } else if (y && (u = (e[R] || (e[R] = {}))[t]) && u[0] === z)p = u[1]; else for (; (c = ++d && c && c[g] || (p = d = 0) || f.pop()) && ((a ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++p || (y && ((c[R] || (c[R] = {}))[t] = [z, p]), c !== e)););
                        return p -= o, p === n || 0 === p % n && p / n >= 0
                    }
                }
            }, PSEUDO: function (t, e) {
                var n, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                return r[R] ? r(e) : r.length > 1 ? (n = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function (t, i) {
                    for (var n, o = r(t, e), s = o.length; s--;)n = ie.call(t, o[s]), t[n] = !(i[n] = o[s])
                }) : function (t) {
                    return r(t, 0, n)
                }) : r
            }}, pseudos: {not: o(function (t) {
                var e = [], i = [], n = P(t.replace(ue, "$1"));
                return n[R] ? o(function (t, e, i, o) {
                    for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                }) : function (t, o, r) {
                    return e[0] = t, n(e, null, r, i), !i.pop()
                }
            }), has: o(function (t) {
                return function (e) {
                    return i(t, e).length > 0
                }
            }), contains: o(function (t) {
                return function (e) {
                    return(e.textContent || e.innerText || T(e)).indexOf(t) > -1
                }
            }), lang: o(function (t) {
                return me.test(t || "") || i.error("unsupported lang: " + t), t = t.replace(xe, Se).toLowerCase(), function (e) {
                    var i;
                    do if (i = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                    return!1
                }
            }), target: function (e) {
                var i = t.location && t.location.hash;
                return i && i.slice(1) === e.id
            }, root: function (t) {
                return t === A
            }, focus: function (t) {
                return t === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
            }, enabled: function (t) {
                return t.disabled === !1
            }, disabled: function (t) {
                return t.disabled === !0
            }, checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return"input" === e && !!t.checked || "option" === e && !!t.selected
            }, selected: function (t) {
                return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
            }, empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType)return!1;
                return!0
            }, parent: function (t) {
                return!k.pseudos.empty(t)
            }, header: function (t) {
                return Ce.test(t.nodeName)
            }, input: function (t) {
                return _e.test(t.nodeName)
            }, button: function (t) {
                var e = t.nodeName.toLowerCase();
                return"input" === e && "button" === t.type || "button" === e
            }, text: function (t) {
                var e;
                return"input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
            }, first: h(function () {
                return[0]
            }), last: h(function (t, e) {
                return[e - 1]
            }), eq: h(function (t, e, i) {
                return[0 > i ? i + e : i]
            }), even: h(function (t, e) {
                for (var i = 0; e > i; i += 2)t.push(i);
                return t
            }), odd: h(function (t, e) {
                for (var i = 1; e > i; i += 2)t.push(i);
                return t
            }), lt: h(function (t, e, i) {
                for (var n = 0 > i ? i + e : i; --n >= 0;)t.push(n);
                return t
            }), gt: h(function (t, e, i) {
                for (var n = 0 > i ? i + e : i; ++n < e;)t.push(n);
                return t
            })}}, k.pseudos.nth = k.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[w] = l(w);
            for (w in{submit: !0, reset: !0})k.pseudos[w] = u(w);
            c.prototype = k.filters = k.pseudos, k.setFilters = new c, P = i.compile = function (t, e) {
                var i, n = [], o = [], r = U[t + " "];
                if (!r) {
                    for (e || (e = p(t)), i = e.length; i--;)r = y(e[i]), r[R] ? n.push(r) : o.push(r);
                    r = U(t, b(o, n))
                }
                return r
            }, x.sortStable = R.split("").sort(K).join("") === R, x.detectDuplicates = q, I(), x.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(F.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(ne, function (t, e, i) {
                var n;
                return i ? void 0 : (n = t.getAttributeNode(e)) && n.specified ? n.value : t[e] === !0 ? e.toLowerCase() : null
            }), he.find = i, he.expr = i.selectors, he.expr[":"] = he.expr.pseudos, he.unique = i.uniqueSort, he.text = i.getText, he.isXMLDoc = i.isXML, he.contains = i.contains
        }(t);
    var ke = {};
    he.Callbacks = function (t) {
        t = "string" == typeof t ? ke[t] || n(t) : he.extend({}, t);
        var i, o, r, s, a, l, u = [], h = !t.once && [], c = function (e) {
            for (o = t.memory && e, r = !0, a = l || 0, l = 0, s = u.length, i = !0; u && s > a; a++)if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                o = !1;
                break
            }
            i = !1, u && (h ? h.length && c(h.shift()) : o ? u = [] : p.disable())
        }, p = {add: function () {
            if (u) {
                var e = u.length;
                !function n(e) {
                    he.each(e, function (e, i) {
                        var o = he.type(i);
                        "function" === o ? t.unique && p.has(i) || u.push(i) : i && i.length && "string" !== o && n(i)
                    })
                }(arguments), i ? s = u.length : o && (l = e, c(o))
            }
            return this
        }, remove: function () {
            return u && he.each(arguments, function (t, e) {
                for (var n; (n = he.inArray(e, u, n)) > -1;)u.splice(n, 1), i && (s >= n && s--, a >= n && a--)
            }), this
        }, has: function (t) {
            return t ? he.inArray(t, u) > -1 : !(!u || !u.length)
        }, empty: function () {
            return u = [], s = 0, this
        }, disable: function () {
            return u = h = o = e, this
        }, disabled: function () {
            return!u
        }, lock: function () {
            return h = e, o || p.disable(), this
        }, locked: function () {
            return!h
        }, fireWith: function (t, e) {
            return!u || r && !h || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? h.push(e) : c(e)), this
        }, fire: function () {
            return p.fireWith(this, arguments), this
        }, fired: function () {
            return!!r
        }};
        return p
    }, he.extend({Deferred: function (t) {
        var e = [
            ["resolve", "done", he.Callbacks("once memory"), "resolved"],
            ["reject", "fail", he.Callbacks("once memory"), "rejected"],
            ["notify", "progress", he.Callbacks("memory")]
        ], i = "pending", n = {state: function () {
            return i
        }, always: function () {
            return o.done(arguments).fail(arguments), this
        }, then: function () {
            var t = arguments;
            return he.Deferred(function (i) {
                he.each(e, function (e, r) {
                    var s = r[0], a = he.isFunction(t[e]) && t[e];
                    o[r[1]](function () {
                        var t = a && a.apply(this, arguments);
                        t && he.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                    })
                }), t = null
            }).promise()
        }, promise: function (t) {
            return null != t ? he.extend(t, n) : n
        }}, o = {};
        return n.pipe = n.then, he.each(e, function (t, r) {
            var s = r[2], a = r[3];
            n[r[1]] = s.add, a && s.add(function () {
                i = a
            }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                return o[r[0] + "With"](this === o ? n : this, arguments), this
            }, o[r[0] + "With"] = s.fireWith
        }), n.promise(o), t && t.call(o, o), o
    }, when: function (t) {
        var e, i, n, o = 0, r = re.call(arguments), s = r.length, a = 1 !== s || t && he.isFunction(t.promise) ? s : 0, l = 1 === a ? t : he.Deferred(), u = function (t, i, n) {
            return function (o) {
                i[t] = this, n[t] = arguments.length > 1 ? re.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
            }
        };
        if (s > 1)for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++)r[o] && he.isFunction(r[o].promise) ? r[o].promise().done(u(o, n, r)).fail(l.reject).progress(u(o, i, e)) : --a;
        return a || l.resolveWith(n, r), l.promise()
    }}), he.support = function (e) {
        var i, n, o, r, s, a, l, u, h, c = G.createElement("div");
        if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = c.getElementsByTagName("*") || [], n = c.getElementsByTagName("a")[0], !n || !n.style || !i.length)return e;
        r = G.createElement("select"), a = r.appendChild(G.createElement("option")), o = c.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== c.className, e.leadingWhitespace = 3 === c.firstChild.nodeType, e.tbody = !c.getElementsByTagName("tbody").length, e.htmlSerialize = !!c.getElementsByTagName("link").length, e.style = /top/.test(n.getAttribute("style")), e.hrefNormalized = "/a" === n.getAttribute("href"), e.opacity = /^0.5/.test(n.style.opacity), e.cssFloat = !!n.style.cssFloat, e.checkOn = !!o.value, e.optSelected = a.selected, e.enctype = !!G.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete c.test
        } catch (p) {
            e.deleteExpando = !1
        }
        o = G.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = G.createDocumentFragment(), s.appendChild(o), e.appendChecked = o.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function () {
            e.noCloneEvent = !1
        }), c.cloneNode(!0).click());
        for (h in{submit: !0, change: !0, focusin: !0})c.setAttribute(l = "on" + h, "t"), e[h + "Bubbles"] = l in t || c.attributes[l].expando === !1;
        c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === c.style.backgroundClip;
        for (h in he(e))break;
        return e.ownLast = "0" !== h, he(function () {
            var i, n, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = G.getElementsByTagName("body")[0];
            s && (i = G.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(i).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = c.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === o[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", he.swap(s, null != s.style.zoom ? {zoom: 1} : {}, function () {
                e.boxSizing = 4 === c.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(c, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(c, null) || {width: "4px"}).width, n = c.appendChild(G.createElement("div")), n.style.cssText = c.style.cssText = r, n.style.marginRight = n.style.width = "0", c.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof c.style.zoom !== Y && (c.innerHTML = "", c.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== c.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(i), i = c = o = n = null)
        }), i = r = s = a = n = o = null, e
    }({});
    var Te = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, De = /([A-Z])/g;
    he.extend({cache: {}, noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (t) {
        return t = t.nodeType ? he.cache[t[he.expando]] : t[he.expando], !!t && !a(t)
    }, data: function (t, e, i) {
        return o(t, e, i)
    }, removeData: function (t, e) {
        return r(t, e)
    }, _data: function (t, e, i) {
        return o(t, e, i, !0)
    }, _removeData: function (t, e) {
        return r(t, e, !0)
    }, acceptData: function (t) {
        if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType)return!1;
        var e = t.nodeName && he.noData[t.nodeName.toLowerCase()];
        return!e || e !== !0 && t.getAttribute("classid") === e
    }}), he.fn.extend({data: function (t, i) {
        var n, o, r = null, a = 0, l = this[0];
        if (t === e) {
            if (this.length && (r = he.data(l), 1 === l.nodeType && !he._data(l, "parsedAttrs"))) {
                for (n = l.attributes; a < n.length; a++)o = n[a].name, 0 === o.indexOf("data-") && (o = he.camelCase(o.slice(5)), s(l, o, r[o]));
                he._data(l, "parsedAttrs", !0)
            }
            return r
        }
        return"object" == typeof t ? this.each(function () {
            he.data(this, t)
        }) : arguments.length > 1 ? this.each(function () {
            he.data(this, t, i)
        }) : l ? s(l, t, he.data(l, t)) : null
    }, removeData: function (t) {
        return this.each(function () {
            he.removeData(this, t)
        })
    }}), he.extend({queue: function (t, e, i) {
        var n;
        return t ? (e = (e || "fx") + "queue", n = he._data(t, e), i && (!n || he.isArray(i) ? n = he._data(t, e, he.makeArray(i)) : n.push(i)), n || []) : void 0
    }, dequeue: function (t, e) {
        e = e || "fx";
        var i = he.queue(t, e), n = i.length, o = i.shift(), r = he._queueHooks(t, e), s = function () {
            he.dequeue(t, e)
        };
        "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
    }, _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return he._data(t, i) || he._data(t, i, {empty: he.Callbacks("once memory").add(function () {
            he._removeData(t, e + "queue"), he._removeData(t, i)
        })})
    }}), he.fn.extend({queue: function (t, i) {
        var n = 2;
        return"string" != typeof t && (i = t, t = "fx", n--), arguments.length < n ? he.queue(this[0], t) : i === e ? this : this.each(function () {
            var e = he.queue(this, t, i);
            he._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && he.dequeue(this, t)
        })
    }, dequeue: function (t) {
        return this.each(function () {
            he.dequeue(this, t)
        })
    }, delay: function (t, e) {
        return t = he.fx ? he.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, clearQueue: function (t) {
        return this.queue(t || "fx", [])
    }, promise: function (t, i) {
        var n, o = 1, r = he.Deferred(), s = this, a = this.length, l = function () {
            --o || r.resolveWith(s, [s])
        };
        for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;)n = he._data(s[a], t + "queueHooks"), n && n.empty && (o++, n.empty.add(l));
        return l(), r.promise(i)
    }});
    var Pe, Ee, Me = /[\t\r\n\f]/g, Ie = /\r/g, Fe = /^(?:input|select|textarea|button|object)$/i, Ae = /^(?:a|area)$/i, $e = /^(?:checked|selected)$/i, Le = he.support.getSetAttribute, Ne = he.support.input;
    he.fn.extend({attr: function (t, e) {
        return he.access(this, he.attr, t, e, arguments.length > 1)
    }, removeAttr: function (t) {
        return this.each(function () {
            he.removeAttr(this, t)
        })
    }, prop: function (t, e) {
        return he.access(this, he.prop, t, e, arguments.length > 1)
    }, removeProp: function (t) {
        return t = he.propFix[t] || t, this.each(function () {
            try {
                this[t] = e, delete this[t]
            } catch (i) {
            }
        })
    }, addClass: function (t) {
        var e, i, n, o, r, s = 0, a = this.length, l = "string" == typeof t && t;
        if (he.isFunction(t))return this.each(function (e) {
            he(this).addClass(t.call(this, e, this.className))
        });
        if (l)for (e = (t || "").match(pe) || []; a > s; s++)if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Me, " ") : " ")) {
            for (r = 0; o = e[r++];)n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            i.className = he.trim(n)
        }
        return this
    }, removeClass: function (t) {
        var e, i, n, o, r, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof t && t;
        if (he.isFunction(t))return this.each(function (e) {
            he(this).removeClass(t.call(this, e, this.className))
        });
        if (l)for (e = (t || "").match(pe) || []; a > s; s++)if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Me, " ") : "")) {
            for (r = 0; o = e[r++];)for (; n.indexOf(" " + o + " ") >= 0;)n = n.replace(" " + o + " ", " ");
            i.className = t ? he.trim(n) : ""
        }
        return this
    }, toggleClass: function (t, e) {
        var i = typeof t;
        return"boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : he.isFunction(t) ? this.each(function (i) {
            he(this).toggleClass(t.call(this, i, this.className, e), e)
        }) : this.each(function () {
            if ("string" === i)for (var e, n = 0, o = he(this), r = t.match(pe) || []; e = r[n++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else(i === Y || "boolean" === i) && (this.className && he._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : he._data(this, "__className__") || "")
        })
    }, hasClass: function (t) {
        for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Me, " ").indexOf(e) >= 0)return!0;
        return!1
    }, val: function (t) {
        var i, n, o, r = this[0];
        {
            if (arguments.length)return o = he.isFunction(t), this.each(function (i) {
                var r;
                1 === this.nodeType && (r = o ? t.call(this, i, he(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), n = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], n && "set"in n && n.set(this, r, "value") !== e || (this.value = r))
            });
            if (r)return n = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()], n && "get"in n && (i = n.get(r, "value")) !== e ? i : (i = r.value, "string" == typeof i ? i.replace(Ie, "") : null == i ? "" : i)
        }
    }}), he.extend({valHooks: {option: {get: function (t) {
        var e = he.find.attr(t, "value");
        return null != e ? e : t.text
    }}, select: {get: function (t) {
        for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (i = n[l], !(!i.selected && l !== o || (he.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && he.nodeName(i.parentNode, "optgroup"))) {
            if (e = he(i).val(), r)return e;
            s.push(e)
        }
        return s
    }, set: function (t, e) {
        for (var i, n, o = t.options, r = he.makeArray(e), s = o.length; s--;)n = o[s], (n.selected = he.inArray(he(n).val(), r) >= 0) && (i = !0);
        return i || (t.selectedIndex = -1), r
    }}}, attr: function (t, i, n) {
        var o, r, s = t.nodeType;
        if (t && 3 !== s && 8 !== s && 2 !== s)return typeof t.getAttribute === Y ? he.prop(t, i, n) : (1 === s && he.isXMLDoc(t) || (i = i.toLowerCase(), o = he.attrHooks[i] || (he.expr.match.bool.test(i) ? Ee : Pe)), n === e ? o && "get"in o && null !== (r = o.get(t, i)) ? r : (r = he.find.attr(t, i), null == r ? e : r) : null !== n ? o && "set"in o && (r = o.set(t, n, i)) !== e ? r : (t.setAttribute(i, n + ""), n) : (he.removeAttr(t, i), void 0))
    }, removeAttr: function (t, e) {
        var i, n, o = 0, r = e && e.match(pe);
        if (r && 1 === t.nodeType)for (; i = r[o++];)n = he.propFix[i] || i, he.expr.match.bool.test(i) ? Ne && Le || !$e.test(i) ? t[n] = !1 : t[he.camelCase("default-" + i)] = t[n] = !1 : he.attr(t, i, ""), t.removeAttribute(Le ? i : n)
    }, attrHooks: {type: {set: function (t, e) {
        if (!he.support.radioValue && "radio" === e && he.nodeName(t, "input")) {
            var i = t.value;
            return t.setAttribute("type", e), i && (t.value = i), e
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, i, n) {
        var o, r, s, a = t.nodeType;
        if (t && 3 !== a && 8 !== a && 2 !== a)return s = 1 !== a || !he.isXMLDoc(t), s && (i = he.propFix[i] || i, r = he.propHooks[i]), n !== e ? r && "set"in r && (o = r.set(t, n, i)) !== e ? o : t[i] = n : r && "get"in r && null !== (o = r.get(t, i)) ? o : t[i]
    }, propHooks: {tabIndex: {get: function (t) {
        var e = he.find.attr(t, "tabindex");
        return e ? parseInt(e, 10) : Fe.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
    }}}}), Ee = {set: function (t, e, i) {
        return e === !1 ? he.removeAttr(t, i) : Ne && Le || !$e.test(i) ? t.setAttribute(!Le && he.propFix[i] || i, i) : t[he.camelCase("default-" + i)] = t[i] = !0, i
    }}, he.each(he.expr.match.bool.source.match(/\w+/g), function (t, i) {
        var n = he.expr.attrHandle[i] || he.find.attr;
        he.expr.attrHandle[i] = Ne && Le || !$e.test(i) ? function (t, i, o) {
            var r = he.expr.attrHandle[i], s = o ? e : (he.expr.attrHandle[i] = e) != n(t, i, o) ? i.toLowerCase() : null;
            return he.expr.attrHandle[i] = r, s
        } : function (t, i, n) {
            return n ? e : t[he.camelCase("default-" + i)] ? i.toLowerCase() : null
        }
    }), Ne && Le || (he.attrHooks.value = {set: function (t, e, i) {
        return he.nodeName(t, "input") ? (t.defaultValue = e, void 0) : Pe && Pe.set(t, e, i)
    }}), Le || (Pe = {set: function (t, i, n) {
        var o = t.getAttributeNode(n);
        return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(n)), o.value = i += "", "value" === n || i === t.getAttribute(n) ? i : e
    }}, he.expr.attrHandle.id = he.expr.attrHandle.name = he.expr.attrHandle.coords = function (t, i, n) {
        var o;
        return n ? e : (o = t.getAttributeNode(i)) && "" !== o.value ? o.value : null
    }, he.valHooks.button = {get: function (t, i) {
        var n = t.getAttributeNode(i);
        return n && n.specified ? n.value : e
    }, set: Pe.set}, he.attrHooks.contenteditable = {set: function (t, e, i) {
        Pe.set(t, "" === e ? !1 : e, i)
    }}, he.each(["width", "height"], function (t, e) {
        he.attrHooks[e] = {set: function (t, i) {
            return"" === i ? (t.setAttribute(e, "auto"), i) : void 0
        }}
    })), he.support.hrefNormalized || he.each(["href", "src"], function (t, e) {
        he.propHooks[e] = {get: function (t) {
            return t.getAttribute(e, 4)
        }}
    }), he.support.style || (he.attrHooks.style = {get: function (t) {
        return t.style.cssText || e
    }, set: function (t, e) {
        return t.style.cssText = e + ""
    }}), he.support.optSelected || (he.propHooks.selected = {get: function (t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }}), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        he.propFix[this.toLowerCase()] = this
    }), he.support.enctype || (he.propFix.enctype = "encoding"), he.each(["radio", "checkbox"], function () {
        he.valHooks[this] = {set: function (t, e) {
            return he.isArray(e) ? t.checked = he.inArray(he(t).val(), e) >= 0 : void 0
        }}, he.support.checkOn || (he.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Oe = /^(?:input|select|textarea)$/i, Ve = /^key/, Re = /^(?:mouse|contextmenu)|click/, He = /^(?:focusinfocus|focusoutblur)$/, ze = /^([^.]*)(?:\.(.+)|)$/;
    he.event = {global: {}, add: function (t, i, n, o, r) {
        var s, a, l, u, h, c, p, d, f, g, m, v = he._data(t);
        if (v) {
            for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = he.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function (t) {
                return typeof he === Y || t && he.event.triggered === t.type ? e : he.event.dispatch.apply(c.elem, arguments)
            }, c.elem = t), i = (i || "").match(pe) || [""], l = i.length; l--;)s = ze.exec(i[l]) || [], f = m = s[1], g = (s[2] || "").split(".").sort(), f && (h = he.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = he.event.special[f] || {}, p = he.extend({type: f, origType: m, data: o, handler: n, guid: n.guid, selector: r, needsContext: r && he.expr.match.needsContext.test(r), namespace: g.join(".")}, u), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, o, g, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), h.add && (h.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), he.event.global[f] = !0);
            t = null
        }
    }, remove: function (t, e, i, n, o) {
        var r, s, a, l, u, h, c, p, d, f, g, m = he.hasData(t) && he._data(t);
        if (m && (h = m.events)) {
            for (e = (e || "").match(pe) || [""], u = e.length; u--;)if (a = ze.exec(e[u]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                for (c = he.event.special[d] || {}, d = (n ? c.delegateType : c.bindType) || d, p = h[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;)s = p[r], !o && g !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, c.remove && c.remove.call(t, s));
                l && !p.length && (c.teardown && c.teardown.call(t, f, m.handle) !== !1 || he.removeEvent(t, d, m.handle), delete h[d])
            } else for (d in h)he.event.remove(t, d + e[u], i, n, !0);
            he.isEmptyObject(h) && (delete m.handle, he._removeData(t, "events"))
        }
    }, trigger: function (i, n, o, r) {
        var s, a, l, u, h, c, p, d = [o || G], f = le.call(i, "type") ? i.type : i, g = le.call(i, "namespace") ? i.namespace.split(".") : [];
        if (l = c = o = o || G, 3 !== o.nodeType && 8 !== o.nodeType && !He.test(f + he.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, i = i[he.expando] ? i : new he.Event(f, "object" == typeof i && i), i.isTrigger = r ? 2 : 3, i.namespace = g.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = o), n = null == n ? [i] : he.makeArray(n, [i]), h = he.event.special[f] || {}, r || !h.trigger || h.trigger.apply(o, n) !== !1)) {
            if (!r && !h.noBubble && !he.isWindow(o)) {
                for (u = h.delegateType || f, He.test(u + f) || (l = l.parentNode); l; l = l.parentNode)d.push(l), c = l;
                c === (o.ownerDocument || G) && d.push(c.defaultView || c.parentWindow || t)
            }
            for (p = 0; (l = d[p++]) && !i.isPropagationStopped();)i.type = p > 1 ? u : h.bindType || f, s = (he._data(l, "events") || {})[i.type] && he._data(l, "handle"), s && s.apply(l, n), s = a && l[a], s && he.acceptData(l) && s.apply && s.apply(l, n) === !1 && i.preventDefault();
            if (i.type = f, !r && !i.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), n) === !1) && he.acceptData(o) && a && o[f] && !he.isWindow(o)) {
                c = o[a], c && (o[a] = null), he.event.triggered = f;
                try {
                    o[f]()
                } catch (m) {
                }
                he.event.triggered = e, c && (o[a] = c)
            }
            return i.result
        }
    }, dispatch: function (t) {
        t = he.event.fix(t);
        var i, n, o, r, s, a = [], l = re.call(arguments), u = (he._data(this, "events") || {})[t.type] || [], h = he.event.special[t.type] || {};
        if (l[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
            for (a = he.event.handlers.call(this, t, u), i = 0; (r = a[i++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, s = 0; (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, n = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
            return h.postDispatch && h.postDispatch.call(this, t), t.result
        }
    }, handlers: function (t, i) {
        var n, o, r, s, a = [], l = i.delegateCount, u = t.target;
        if (l && u.nodeType && (!t.button || "click" !== t.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
            for (r = [], s = 0; l > s; s++)o = i[s], n = o.selector + " ", r[n] === e && (r[n] = o.needsContext ? he(n, this).index(u) >= 0 : he.find(n, this, null, [u]).length), r[n] && r.push(o);
            r.length && a.push({elem: u, handlers: r})
        }
        return l < i.length && a.push({elem: this, handlers: i.slice(l)}), a
    }, fix: function (t) {
        if (t[he.expando])return t;
        var e, i, n, o = t.type, r = t, s = this.fixHooks[o];
        for (s || (this.fixHooks[o] = s = Re.test(o) ? this.mouseHooks : Ve.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new he.Event(r), e = n.length; e--;)i = n[e], t[i] = r[i];
        return t.target || (t.target = r.srcElement || G), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (t, i) {
        var n, o, r, s = i.button, a = i.fromElement;
        return null == t.pageX && null != i.clientX && (o = t.target.ownerDocument || G, r = o.documentElement, n = o.body, t.pageX = i.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== h() && this.focus)try {
            return this.focus(), !1
        } catch (t) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === h() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, click: {trigger: function () {
        return he.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }, _default: function (t) {
        return he.nodeName(t.target, "a")
    }}, beforeunload: {postDispatch: function (t) {
        t.result !== e && (t.originalEvent.returnValue = t.result)
    }}}, simulate: function (t, e, i, n) {
        var o = he.extend(new he.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
        n ? he.event.trigger(o, null, e) : he.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
    }}, he.removeEvent = G.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Y && (t[n] = null), t.detachEvent(n, i))
    }, he.Event = function (t, e) {
        return this instanceof he.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, e && he.extend(this, e), this.timeStamp = t && t.timeStamp || he.now(), this[he.expando] = !0, void 0) : new he.Event(t, e)
    }, he.Event.prototype = {isDefaultPrevented: u, isPropagationStopped: u, isImmediatePropagationStopped: u, preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    }, stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = l, this.stopPropagation()
    }}, he.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (t, e) {
        he.event.special[t] = {delegateType: e, bindType: e, handle: function (t) {
            var i, n = this, o = t.relatedTarget, r = t.handleObj;
            return(!o || o !== n && !he.contains(n, o)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
        }}
    }), he.support.submitBubbles || (he.event.special.submit = {setup: function () {
        return he.nodeName(this, "form") ? !1 : (he.event.add(this, "click._submit keypress._submit", function (t) {
            var i = t.target, n = he.nodeName(i, "input") || he.nodeName(i, "button") ? i.form : e;
            n && !he._data(n, "submitBubbles") && (he.event.add(n, "submit._submit", function (t) {
                t._submit_bubble = !0
            }), he._data(n, "submitBubbles", !0))
        }), void 0)
    }, postDispatch: function (t) {
        t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && he.event.simulate("submit", this.parentNode, t, !0))
    }, teardown: function () {
        return he.nodeName(this, "form") ? !1 : (he.event.remove(this, "._submit"), void 0)
    }}), he.support.changeBubbles || (he.event.special.change = {setup: function () {
        return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (he.event.add(this, "propertychange._change", function (t) {
            "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
        }), he.event.add(this, "click._change", function (t) {
            this._just_changed && !t.isTrigger && (this._just_changed = !1), he.event.simulate("change", this, t, !0)
        })), !1) : (he.event.add(this, "beforeactivate._change", function (t) {
            var e = t.target;
            Oe.test(e.nodeName) && !he._data(e, "changeBubbles") && (he.event.add(e, "change._change", function (t) {
                !this.parentNode || t.isSimulated || t.isTrigger || he.event.simulate("change", this.parentNode, t, !0)
            }), he._data(e, "changeBubbles", !0))
        }), void 0)
    }, handle: function (t) {
        var e = t.target;
        return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return he.event.remove(this, "._change"), !Oe.test(this.nodeName)
    }}), he.support.focusinBubbles || he.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = 0, n = function (t) {
            he.event.simulate(e, t.target, he.event.fix(t), !0)
        };
        he.event.special[e] = {setup: function () {
            0 === i++ && G.addEventListener(t, n, !0)
        }, teardown: function () {
            0 === --i && G.removeEventListener(t, n, !0)
        }}
    }), he.fn.extend({on: function (t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i, i = e);
            for (s in t)this.on(s, i, n, t[s], r);
            return this
        }
        if (null == n && null == o ? (o = i, n = i = e) : null == o && ("string" == typeof i ? (o = n, n = e) : (o = n, n = i, i = e)), o === !1)o = u; else if (!o)return this;
        return 1 === r && (a = o, o = function (t) {
            return he().off(t), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = he.guid++)), this.each(function () {
            he.event.add(this, t, o, n, i)
        })
    }, one: function (t, e, i, n) {
        return this.on(t, e, i, n, 1)
    }, off: function (t, i, n) {
        var o, r;
        if (t && t.preventDefault && t.handleObj)return o = t.handleObj, he(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
        if ("object" == typeof t) {
            for (r in t)this.off(r, i, t[r]);
            return this
        }
        return(i === !1 || "function" == typeof i) && (n = i, i = e), n === !1 && (n = u), this.each(function () {
            he.event.remove(this, t, n, i)
        })
    }, trigger: function (t, e) {
        return this.each(function () {
            he.event.trigger(t, e, this)
        })
    }, triggerHandler: function (t, e) {
        var i = this[0];
        return i ? he.event.trigger(t, e, i, !0) : void 0
    }});
    var je = /^.[^:#\[\.,]*$/, Be = /^(?:parents|prev(?:Until|All))/, We = he.expr.match.needsContext, Ue = {children: !0, contents: !0, next: !0, prev: !0};
    he.fn.extend({find: function (t) {
        var e, i = [], n = this, o = n.length;
        if ("string" != typeof t)return this.pushStack(he(t).filter(function () {
            for (e = 0; o > e; e++)if (he.contains(n[e], this))return!0
        }));
        for (e = 0; o > e; e++)he.find(t, n[e], i);
        return i = this.pushStack(o > 1 ? he.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
    }, has: function (t) {
        var e, i = he(t, this), n = i.length;
        return this.filter(function () {
            for (e = 0; n > e; e++)if (he.contains(this, i[e]))return!0
        })
    }, not: function (t) {
        return this.pushStack(p(this, t || [], !0))
    }, filter: function (t) {
        return this.pushStack(p(this, t || [], !1))
    }, is: function (t) {
        return!!p(this, "string" == typeof t && We.test(t) ? he(t) : t || [], !1).length
    }, closest: function (t, e) {
        for (var i, n = 0, o = this.length, r = [], s = We.test(t) || "string" != typeof t ? he(t, e || this.context) : 0; o > n; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && he.find.matchesSelector(i, t))) {
            i = r.push(i);
            break
        }
        return this.pushStack(r.length > 1 ? he.unique(r) : r)
    }, index: function (t) {
        return t ? "string" == typeof t ? he.inArray(this[0], he(t)) : he.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (t, e) {
        var i = "string" == typeof t ? he(t, e) : he.makeArray(t && t.nodeType ? [t] : t), n = he.merge(this.get(), i);
        return this.pushStack(he.unique(n))
    }, addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }}), he.each({parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
    }, parents: function (t) {
        return he.dir(t, "parentNode")
    }, parentsUntil: function (t, e, i) {
        return he.dir(t, "parentNode", i)
    }, next: function (t) {
        return c(t, "nextSibling")
    }, prev: function (t) {
        return c(t, "previousSibling")
    }, nextAll: function (t) {
        return he.dir(t, "nextSibling")
    }, prevAll: function (t) {
        return he.dir(t, "previousSibling")
    }, nextUntil: function (t, e, i) {
        return he.dir(t, "nextSibling", i)
    }, prevUntil: function (t, e, i) {
        return he.dir(t, "previousSibling", i)
    }, siblings: function (t) {
        return he.sibling((t.parentNode || {}).firstChild, t)
    }, children: function (t) {
        return he.sibling(t.firstChild)
    }, contents: function (t) {
        return he.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : he.merge([], t.childNodes)
    }}, function (t, e) {
        he.fn[t] = function (i, n) {
            var o = he.map(this, e, i);
            return"Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = he.filter(n, o)), this.length > 1 && (Ue[t] || (o = he.unique(o)), Be.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    }), he.extend({filter: function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? he.find.matchesSelector(n, t) ? [n] : [] : he.find.matches(t, he.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, dir: function (t, i, n) {
        for (var o = [], r = t[i]; r && 9 !== r.nodeType && (n === e || 1 !== r.nodeType || !he(r).is(n));)1 === r.nodeType && o.push(r), r = r[i];
        return o
    }, sibling: function (t, e) {
        for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
        return i
    }});
    var qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ke = / jQuery\d+="(?:null|\d+)"/g, Ye = new RegExp("<(?:" + qe + ")[\\s/>]", "i"), Xe = /^\s+/, Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qe = /<([\w:]+)/, Je = /<tbody/i, Ze = /<|&#?\w+;/, ti = /<(?:script|style|link)/i, ei = /^(?:checkbox|radio)$/i, ii = /checked\s*(?:[^=]|=\s*.checked.)/i, ni = /^$|\/(?:java|ecma)script/i, oi = /^true\/(.*)/, ri = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, si = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: he.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, ai = d(G), li = ai.appendChild(G.createElement("div"));
    si.optgroup = si.option, si.tbody = si.tfoot = si.colgroup = si.caption = si.thead, si.th = si.td, he.fn.extend({text: function (t) {
        return he.access(this, function (t) {
            return t === e ? he.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(t))
        }, null, t, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = f(this, t);
                e.appendChild(t)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = f(this, t);
                e.insertBefore(t, e.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
    }, remove: function (t, e) {
        for (var i, n = t ? he.filter(t, this) : this, o = 0; null != (i = n[o]); o++)e || 1 !== i.nodeType || he.cleanData(_(i)), i.parentNode && (e && he.contains(i.ownerDocument, i) && v(_(i, "script")), i.parentNode.removeChild(i));
        return this
    }, empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && he.cleanData(_(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
            t.options && he.nodeName(t, "select") && (t.options.length = 0)
        }
        return this
    }, clone: function (t, e) {
        return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
            return he.clone(this, t, e)
        })
    }, html: function (t) {
        return he.access(this, function (t) {
            var i = this[0] || {}, n = 0, o = this.length;
            if (t === e)return 1 === i.nodeType ? i.innerHTML.replace(Ke, "") : e;
            if (!("string" != typeof t || ti.test(t) || !he.support.htmlSerialize && Ye.test(t) || !he.support.leadingWhitespace && Xe.test(t) || si[(Qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                t = t.replace(Ge, "<$1></$2>");
                try {
                    for (; o > n; n++)i = this[n] || {}, 1 === i.nodeType && (he.cleanData(_(i, !1)), i.innerHTML = t);
                    i = 0
                } catch (r) {
                }
            }
            i && this.empty().append(t)
        }, null, t, arguments.length)
    }, replaceWith: function () {
        var t = he.map(this, function (t) {
            return[t.nextSibling, t.parentNode]
        }), e = 0;
        return this.domManip(arguments, function (i) {
            var n = t[e++], o = t[e++];
            o && (n && n.parentNode !== o && (n = this.nextSibling), he(this).remove(), o.insertBefore(i, n))
        }, !0), e ? this : this.remove()
    }, detach: function (t) {
        return this.remove(t, !0)
    }, domManip: function (t, e, i) {
        t = ne.apply([], t);
        var n, o, r, s, a, l, u = 0, h = this.length, c = this, p = h - 1, d = t[0], f = he.isFunction(d);
        if (f || !(1 >= h || "string" != typeof d || he.support.checkClone) && ii.test(d))return this.each(function (n) {
            var o = c.eq(n);
            f && (t[0] = d.call(this, n, o.html())), o.domManip(t, e, i)
        });
        if (h && (l = he.buildFragment(t, this[0].ownerDocument, !1, !i && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
            for (s = he.map(_(l, "script"), g), r = s.length; h > u; u++)o = l, u !== p && (o = he.clone(o, !0, !0), r && he.merge(s, _(o, "script"))), e.call(this[u], o, u);
            if (r)for (a = s[s.length - 1].ownerDocument, he.map(s, m), u = 0; r > u; u++)o = s[u], ni.test(o.type || "") && !he._data(o, "globalEval") && he.contains(a, o) && (o.src ? he._evalUrl(o.src) : he.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ri, "")));
            l = n = null
        }
        return this
    }}), he.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
        he.fn[t] = function (t) {
            for (var i, n = 0, o = [], r = he(t), s = r.length - 1; s >= n; n++)i = n === s ? this : this.clone(!0), he(r[n])[e](i), oe.apply(o, i.get());
            return this.pushStack(o)
        }
    }), he.extend({clone: function (t, e, i) {
        var n, o, r, s, a, l = he.contains(t.ownerDocument, t);
        if (he.support.html5Clone || he.isXMLDoc(t) || !Ye.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (li.innerHTML = t.outerHTML, li.removeChild(r = li.firstChild)), !(he.support.noCloneEvent && he.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || he.isXMLDoc(t)))for (n = _(r), a = _(t), s = 0; null != (o = a[s]); ++s)n[s] && b(o, n[s]);
        if (e)if (i)for (a = a || _(t), n = n || _(r), s = 0; null != (o = a[s]); s++)y(o, n[s]); else y(t, r);
        return n = _(r, "script"), n.length > 0 && v(n, !l && _(t, "script")), n = a = o = null, r
    }, buildFragment: function (t, e, i, n) {
        for (var o, r, s, a, l, u, h, c = t.length, p = d(e), f = [], g = 0; c > g; g++)if (r = t[g], r || 0 === r)if ("object" === he.type(r))he.merge(f, r.nodeType ? [r] : r); else if (Ze.test(r)) {
            for (a = a || p.appendChild(e.createElement("div")), l = (Qe.exec(r) || ["", ""])[1].toLowerCase(), h = si[l] || si._default, a.innerHTML = h[1] + r.replace(Ge, "<$1></$2>") + h[2], o = h[0]; o--;)a = a.lastChild;
            if (!he.support.leadingWhitespace && Xe.test(r) && f.push(e.createTextNode(Xe.exec(r)[0])), !he.support.tbody)for (r = "table" !== l || Je.test(r) ? "<table>" !== h[1] || Je.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;)he.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
            for (he.merge(f, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
            a = p.lastChild
        } else f.push(e.createTextNode(r));
        for (a && p.removeChild(a), he.support.appendChecked || he.grep(_(f, "input"), C), g = 0; r = f[g++];)if ((!n || -1 === he.inArray(r, n)) && (s = he.contains(r.ownerDocument, r), a = _(p.appendChild(r), "script"), s && v(a), i))for (o = 0; r = a[o++];)ni.test(r.type || "") && i.push(r);
        return a = null, p
    }, cleanData: function (t, e) {
        for (var i, n, o, r, s = 0, a = he.expando, l = he.cache, u = he.support.deleteExpando, h = he.event.special; null != (i = t[s]); s++)if ((e || he.acceptData(i)) && (o = i[a], r = o && l[o])) {
            if (r.events)for (n in r.events)h[n] ? he.event.remove(i, n) : he.removeEvent(i, n, r.handle);
            l[o] && (delete l[o], u ? delete i[a] : typeof i.removeAttribute !== Y ? i.removeAttribute(a) : i[a] = null, ee.push(o))
        }
    }, _evalUrl: function (t) {
        return he.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }}), he.fn.extend({wrapAll: function (t) {
        if (he.isFunction(t))return this.each(function (e) {
            he(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
            var e = he(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                return t
            }).append(this)
        }
        return this
    }, wrapInner: function (t) {
        return he.isFunction(t) ? this.each(function (e) {
            he(this).wrapInner(t.call(this, e))
        }) : this.each(function () {
            var e = he(this), i = e.contents();
            i.length ? i.wrapAll(t) : e.append(t)
        })
    }, wrap: function (t) {
        var e = he.isFunction(t);
        return this.each(function (i) {
            he(this).wrapAll(e ? t.call(this, i) : t)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            he.nodeName(this, "body") || he(this).replaceWith(this.childNodes)
        }).end()
    }});
    var ui, hi, ci, pi = /alpha\([^)]*\)/i, di = /opacity\s*=\s*([^)]*)/, fi = /^(top|right|bottom|left)$/, gi = /^(none|table(?!-c[ea]).+)/, mi = /^margin/, vi = new RegExp("^(" + ce + ")(.*)$", "i"), yi = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"), bi = new RegExp("^([+-])=(" + ce + ")", "i"), _i = {BODY: "block"}, Ci = {position: "absolute", visibility: "hidden", display: "block"}, wi = {letterSpacing: 0, fontWeight: 400}, xi = ["Top", "Right", "Bottom", "Left"], Si = ["Webkit", "O", "Moz", "ms"];
    he.fn.extend({css: function (t, i) {
        return he.access(this, function (t, i, n) {
            var o, r, s = {}, a = 0;
            if (he.isArray(i)) {
                for (r = hi(t), o = i.length; o > a; a++)s[i[a]] = he.css(t, i[a], !1, r);
                return s
            }
            return n !== e ? he.style(t, i, n) : he.css(t, i)
        }, t, i, arguments.length > 1)
    }, show: function () {
        return S(this, !0)
    }, hide: function () {
        return S(this)
    }, toggle: function (t) {
        return"boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
            x(this) ? he(this).show() : he(this).hide()
        })
    }}), he.extend({cssHooks: {opacity: {get: function (t, e) {
        if (e) {
            var i = ci(t, "opacity");
            return"" === i ? "1" : i
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": he.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (t, i, n, o) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r, s, a, l = he.camelCase(i), u = t.style;
            if (i = he.cssProps[l] || (he.cssProps[l] = w(u, l)), a = he.cssHooks[i] || he.cssHooks[l], n === e)return a && "get"in a && (r = a.get(t, !1, o)) !== e ? r : u[i];
            if (s = typeof n, "string" === s && (r = bi.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(he.css(t, i)), s = "number"), !(null == n || "number" === s && isNaN(n) || ("number" !== s || he.cssNumber[l] || (n += "px"), he.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (u[i] = "inherit"), a && "set"in a && (n = a.set(t, n, o)) === e)))try {
                u[i] = n
            } catch (h) {
            }
        }
    }, css: function (t, i, n, o) {
        var r, s, a, l = he.camelCase(i);
        return i = he.cssProps[l] || (he.cssProps[l] = w(t.style, l)), a = he.cssHooks[i] || he.cssHooks[l], a && "get"in a && (s = a.get(t, !0, n)), s === e && (s = ci(t, i, o)), "normal" === s && i in wi && (s = wi[i]), "" === n || n ? (r = parseFloat(s), n === !0 || he.isNumeric(r) ? r || 0 : s) : s
    }}), t.getComputedStyle ? (hi = function (e) {
        return t.getComputedStyle(e, null)
    }, ci = function (t, i, n) {
        var o, r, s, a = n || hi(t), l = a ? a.getPropertyValue(i) || a[i] : e, u = t.style;
        return a && ("" !== l || he.contains(t.ownerDocument, t) || (l = he.style(t, i)), yi.test(l) && mi.test(i) && (o = u.width, r = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = o, u.minWidth = r, u.maxWidth = s)), l
    }) : G.documentElement.currentStyle && (hi = function (t) {
        return t.currentStyle
    }, ci = function (t, i, n) {
        var o, r, s, a = n || hi(t), l = a ? a[i] : e, u = t.style;
        return null == l && u && u[i] && (l = u[i]), yi.test(l) && !fi.test(i) && (o = u.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), u.left = "fontSize" === i ? "1em" : l, l = u.pixelLeft + "px", u.left = o, s && (r.left = s)), "" === l ? "auto" : l
    }), he.each(["height", "width"], function (t, e) {
        he.cssHooks[e] = {get: function (t, i, n) {
            return i ? 0 === t.offsetWidth && gi.test(he.css(t, "display")) ? he.swap(t, Ci, function () {
                return D(t, e, n)
            }) : D(t, e, n) : void 0
        }, set: function (t, i, n) {
            var o = n && hi(t);
            return k(t, i, n ? T(t, e, n, he.support.boxSizing && "border-box" === he.css(t, "boxSizing", !1, o), o) : 0)
        }}
    }), he.support.opacity || (he.cssHooks.opacity = {get: function (t, e) {
        return di.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    }, set: function (t, e) {
        var i = t.style, n = t.currentStyle, o = he.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", r = n && n.filter || i.filter || "";
        i.zoom = 1, (e >= 1 || "" === e) && "" === he.trim(r.replace(pi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = pi.test(r) ? r.replace(pi, o) : r + " " + o)
    }}), he(function () {
        he.support.reliableMarginRight || (he.cssHooks.marginRight = {get: function (t, e) {
            return e ? he.swap(t, {display: "inline-block"}, ci, [t, "marginRight"]) : void 0
        }}), !he.support.pixelPosition && he.fn.position && he.each(["top", "left"], function (t, e) {
            he.cssHooks[e] = {get: function (t, i) {
                return i ? (i = ci(t, e), yi.test(i) ? he(t).position()[e] + "px" : i) : void 0
            }}
        })
    }), he.expr && he.expr.filters && (he.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !he.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || he.css(t, "display"))
    }, he.expr.filters.visible = function (t) {
        return!he.expr.filters.hidden(t)
    }), he.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        he.cssHooks[t + e] = {expand: function (i) {
            for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)o[t + xi[n] + e] = r[n] || r[n - 2] || r[0];
            return o
        }}, mi.test(t) || (he.cssHooks[t + e].set = k)
    });
    var ki = /%20/g, Ti = /\[\]$/, Di = /\r?\n/g, Pi = /^(?:submit|button|image|reset|file)$/i, Ei = /^(?:input|select|textarea|keygen)/i;
    he.fn.extend({serialize: function () {
        return he.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var t = he.prop(this, "elements");
            return t ? he.makeArray(t) : this
        }).filter(function () {
            var t = this.type;
            return this.name && !he(this).is(":disabled") && Ei.test(this.nodeName) && !Pi.test(t) && (this.checked || !ei.test(t))
        }).map(function (t, e) {
            var i = he(this).val();
            return null == i ? null : he.isArray(i) ? he.map(i, function (t) {
                return{name: e.name, value: t.replace(Di, "\r\n")}
            }) : {name: e.name, value: i.replace(Di, "\r\n")}
        }).get()
    }}), he.param = function (t, i) {
        var n, o = [], r = function (t, e) {
            e = he.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (i === e && (i = he.ajaxSettings && he.ajaxSettings.traditional), he.isArray(t) || t.jquery && !he.isPlainObject(t))he.each(t, function () {
            r(this.name, this.value)
        }); else for (n in t)M(n, t[n], i, r);
        return o.join("&").replace(ki, "+")
    }, he.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        he.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), he.fn.extend({hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    }, bind: function (t, e, i) {
        return this.on(t, null, e, i)
    }, unbind: function (t, e) {
        return this.off(t, null, e)
    }, delegate: function (t, e, i, n) {
        return this.on(e, t, i, n)
    }, undelegate: function (t, e, i) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
    }});
    var Mi, Ii, Fi = he.now(), Ai = /\?/, $i = /#.*$/, Li = /([?&])_=[^&]*/, Ni = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Oi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Vi = /^(?:GET|HEAD)$/, Ri = /^\/\//, Hi = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, zi = he.fn.load, ji = {}, Bi = {}, Wi = "*/".concat("*");
    try {
        Ii = X.href
    } catch (Ui) {
        Ii = G.createElement("a"), Ii.href = "", Ii = Ii.href
    }
    Mi = Hi.exec(Ii.toLowerCase()) || [], he.fn.load = function (t, i, n) {
        if ("string" != typeof t && zi)return zi.apply(this, arguments);
        var o, r, s, a = this, l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), he.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (s = "POST"), a.length > 0 && he.ajax({url: t, type: s, dataType: "html", data: i}).done(function (t) {
            r = arguments, a.html(o ? he("<div>").append(he.parseHTML(t)).find(o) : t)
        }).complete(n && function (t, e) {
            a.each(n, r || [t.responseText, e, t])
        }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        he.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), he.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Ii, type: "GET", isLocal: Oi.test(Mi[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Wi, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": he.parseJSON, "text xml": he.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (t, e) {
        return e ? A(A(t, he.ajaxSettings), e) : A(he.ajaxSettings, t)
    }, ajaxPrefilter: I(ji), ajaxTransport: I(Bi), ajax: function (t, i) {
        function n(t, i, n, o) {
            var r, c, y, b, C, x = i;
            2 !== _ && (_ = 2, l && clearTimeout(l), h = e, a = o || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (b = $(p, w, n)), b = L(p, b, w, r), r ? (p.ifModified && (C = w.getResponseHeader("Last-Modified"), C && (he.lastModified[s] = C), C = w.getResponseHeader("etag"), C && (he.etag[s] = C)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, c = b.data, y = b.error, r = !y)) : (y = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (i || x) + "", r ? g.resolveWith(d, [c, x, w]) : g.rejectWith(d, [w, x, y]), w.statusCode(v), v = e, u && f.trigger(r ? "ajaxSuccess" : "ajaxError", [w, p, r ? c : y]), m.fireWith(d, [w, x]), u && (f.trigger("ajaxComplete", [w, p]), --he.active || he.event.trigger("ajaxStop")))
        }

        "object" == typeof t && (i = t, t = e), i = i || {};
        var o, r, s, a, l, u, h, c, p = he.ajaxSetup({}, i), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? he(d) : he.event, g = he.Deferred(), m = he.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, _ = 0, C = "canceled", w = {readyState: 0, getResponseHeader: function (t) {
            var e;
            if (2 === _) {
                if (!c)for (c = {}; e = Ni.exec(a);)c[e[1].toLowerCase()] = e[2];
                e = c[t.toLowerCase()]
            }
            return null == e ? null : e
        }, getAllResponseHeaders: function () {
            return 2 === _ ? a : null
        }, setRequestHeader: function (t, e) {
            var i = t.toLowerCase();
            return _ || (t = b[i] = b[i] || t, y[t] = e), this
        }, overrideMimeType: function (t) {
            return _ || (p.mimeType = t), this
        }, statusCode: function (t) {
            var e;
            if (t)if (2 > _)for (e in t)v[e] = [v[e], t[e]]; else w.always(t[w.status]);
            return this
        }, abort: function (t) {
            var e = t || C;
            return h && h.abort(e), n(0, e), this
        }};
        if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((t || p.url || Ii) + "").replace($i, "").replace(Ri, Mi[1] + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = he.trim(p.dataType || "*").toLowerCase().match(pe) || [""], null == p.crossDomain && (o = Hi.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === Mi[1] && o[2] === Mi[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Mi[3] || ("http:" === Mi[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = he.param(p.data, p.traditional)), F(ji, p, i, w), 2 === _)return w;
        u = p.global, u && 0 === he.active++ && he.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Vi.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Ai.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Li.test(s) ? s.replace(Li, "$1_=" + Fi++) : s + (Ai.test(s) ? "&" : "?") + "_=" + Fi++)), p.ifModified && (he.lastModified[s] && w.setRequestHeader("If-Modified-Since", he.lastModified[s]), he.etag[s] && w.setRequestHeader("If-None-Match", he.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wi + "; q=0.01" : "") : p.accepts["*"]);
        for (r in p.headers)w.setRequestHeader(r, p.headers[r]);
        if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === _))return w.abort();
        C = "abort";
        for (r in{success: 1, error: 1, complete: 1})w[r](p[r]);
        if (h = F(Bi, p, i, w)) {
            w.readyState = 1, u && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (l = setTimeout(function () {
                w.abort("timeout")
            }, p.timeout));
            try {
                _ = 1, h.send(y, n)
            } catch (x) {
                if (!(2 > _))throw x;
                n(-1, x)
            }
        } else n(-1, "No Transport");
        return w
    }, getJSON: function (t, e, i) {
        return he.get(t, e, i, "json")
    }, getScript: function (t, i) {
        return he.get(t, e, i, "script")
    }}), he.each(["get", "post"], function (t, i) {
        he[i] = function (t, n, o, r) {
            return he.isFunction(n) && (r = r || o, o = n, n = e), he.ajax({url: t, type: i, dataType: r, data: n, success: o})
        }
    }), he.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (t) {
        return he.globalEval(t), t
    }}}), he.ajaxPrefilter("script", function (t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), he.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var i, n = G.head || he("head")[0] || G.documentElement;
            return{send: function (e, o) {
                i = G.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (t, e) {
                    (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || o(200, "success"))
                }, n.insertBefore(i, n.firstChild)
            }, abort: function () {
                i && i.onload(e, !0)
            }}
        }
    });
    var qi = [], Ki = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var t = qi.pop() || he.expando + "_" + Fi++;
        return this[t] = !0, t
    }}), he.ajaxPrefilter("json jsonp", function (i, n, o) {
        var r, s, a, l = i.jsonp !== !1 && (Ki.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ki.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = he.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ki, "$1" + r) : i.jsonp !== !1 && (i.url += (Ai.test(i.url) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function () {
            return a || he.error(r + " was not called"), a[0]
        }, i.dataTypes[0] = "json", s = t[r], t[r] = function () {
            a = arguments
        }, o.always(function () {
            t[r] = s, i[r] && (i.jsonpCallback = n.jsonpCallback, qi.push(r)), a && he.isFunction(s) && s(a[0]), a = s = e
        }), "script") : void 0
    });
    var Yi, Xi, Gi = 0, Qi = t.ActiveXObject && function () {
        var t;
        for (t in Yi)Yi[t](e, !0)
    };
    he.ajaxSettings.xhr = t.ActiveXObject ? function () {
        return!this.isLocal && N() || O()
    } : N, Xi = he.ajaxSettings.xhr(), he.support.cors = !!Xi && "withCredentials"in Xi, Xi = he.support.ajax = !!Xi, Xi && he.ajaxTransport(function (i) {
        if (!i.crossDomain || he.support.cors) {
            var n;
            return{send: function (o, r) {
                var s, a, l = i.xhr();
                if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)for (a in i.xhrFields)l[a] = i.xhrFields[a];
                i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (a in o)l.setRequestHeader(a, o[a])
                } catch (u) {
                }
                l.send(i.hasContent && i.data || null), n = function (t, o) {
                    var a, u, h, c;
                    try {
                        if (n && (o || 4 === l.readyState))if (n = e, s && (l.onreadystatechange = he.noop, Qi && delete Yi[s]), o)4 !== l.readyState && l.abort(); else {
                            c = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (c.text = l.responseText);
                            try {
                                h = l.statusText
                            } catch (p) {
                                h = ""
                            }
                            a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                        }
                    } catch (d) {
                        o || r(-1, d)
                    }
                    c && r(a, h, c, u)
                }, i.async ? 4 === l.readyState ? setTimeout(n) : (s = ++Gi, Qi && (Yi || (Yi = {}, he(t).unload(Qi)), Yi[s] = n), l.onreadystatechange = n) : n()
            }, abort: function () {
                n && n(e, !0)
            }}
        }
    });
    var Ji, Zi, tn = /^(?:toggle|show|hide)$/, en = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"), nn = /queueHooks$/, on = [j], rn = {"*": [function (t, e) {
        var i = this.createTween(t, e), n = i.cur(), o = en.exec(e), r = o && o[3] || (he.cssNumber[t] ? "" : "px"), s = (he.cssNumber[t] || "px" !== r && +n) && en.exec(he.css(i.elem, t)), a = 1, l = 20;
        if (s && s[3] !== r) {
            r = r || s[3], o = o || [], s = +n || 1;
            do a = a || ".5", s /= a, he.style(i.elem, t, s + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
        }
        return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
    }]};
    he.Animation = he.extend(H, {tweener: function (t, e) {
        he.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
        for (var i, n = 0, o = t.length; o > n; n++)i = t[n], rn[i] = rn[i] || [], rn[i].unshift(e)
    }, prefilter: function (t, e) {
        e ? on.unshift(t) : on.push(t)
    }}), he.Tween = B, B.prototype = {constructor: B, init: function (t, e, i, n, o, r) {
        this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (he.cssNumber[i] ? "" : "px")
    }, cur: function () {
        var t = B.propHooks[this.prop];
        return t && t.get ? t.get(this) : B.propHooks._default.get(this)
    }, run: function (t) {
        var e, i = B.propHooks[this.prop];
        return this.pos = e = this.options.duration ? he.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : B.propHooks._default.set(this), this
    }}, B.prototype.init.prototype = B.prototype, B.propHooks = {_default: {get: function (t) {
        var e;
        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = he.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
    }, set: function (t) {
        he.fx.step[t.prop] ? he.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[he.cssProps[t.prop]] || he.cssHooks[t.prop]) ? he.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
    }}}, B.propHooks.scrollTop = B.propHooks.scrollLeft = {set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }}, he.each(["toggle", "show", "hide"], function (t, e) {
        var i = he.fn[e];
        he.fn[e] = function (t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(W(e, !0), t, n, o)
        }
    }), he.fn.extend({fadeTo: function (t, e, i, n) {
        return this.filter(x).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
    }, animate: function (t, e, i, n) {
        var o = he.isEmptyObject(t), r = he.speed(e, i, n), s = function () {
            var e = H(this, he.extend({}, t), r);
            (o || he._data(this, "finish")) && e.stop(!0)
        };
        return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
    }, stop: function (t, i, n) {
        var o = function (t) {
            var e = t.stop;
            delete t.stop, e(n)
        };
        return"string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function () {
            var e = !0, i = null != t && t + "queueHooks", r = he.timers, s = he._data(this);
            if (i)s[i] && s[i].stop && o(s[i]); else for (i in s)s[i] && s[i].stop && nn.test(i) && o(s[i]);
            for (i = r.length; i--;)r[i].elem !== this || null != t && r[i].queue !== t || (r[i].anim.stop(n), e = !1, r.splice(i, 1));
            (e || !n) && he.dequeue(this, t)
        })
    }, finish: function (t) {
        return t !== !1 && (t = t || "fx"), this.each(function () {
            var e, i = he._data(this), n = i[t + "queue"], o = i[t + "queueHooks"], r = he.timers, s = n ? n.length : 0;
            for (i.finish = !0, he.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; s > e; e++)n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish
        })
    }}), he.each({slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
        he.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), he.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? he.extend({}, t) : {complete: i || !i && e || he.isFunction(t) && t, duration: t, easing: i && e || e && !he.isFunction(e) && e};
        return n.duration = he.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in he.fx.speeds ? he.fx.speeds[n.duration] : he.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            he.isFunction(n.old) && n.old.call(this), n.queue && he.dequeue(this, n.queue)
        }, n
    }, he.easing = {linear: function (t) {
        return t
    }, swing: function (t) {
        return.5 - Math.cos(t * Math.PI) / 2
    }}, he.timers = [], he.fx = B.prototype.init, he.fx.tick = function () {
        var t, i = he.timers, n = 0;
        for (Ji = he.now(); n < i.length; n++)t = i[n], t() || i[n] !== t || i.splice(n--, 1);
        i.length || he.fx.stop(), Ji = e
    }, he.fx.timer = function (t) {
        t() && he.timers.push(t) && he.fx.start()
    }, he.fx.interval = 13, he.fx.start = function () {
        Zi || (Zi = setInterval(he.fx.tick, he.fx.interval))
    }, he.fx.stop = function () {
        clearInterval(Zi), Zi = null
    }, he.fx.speeds = {slow: 600, fast: 200, _default: 400}, he.fx.step = {}, he.expr && he.expr.filters && (he.expr.filters.animated = function (t) {
        return he.grep(he.timers,function (e) {
            return t === e.elem
        }).length
    }), he.fn.offset = function (t) {
        if (arguments.length)return t === e ? this : this.each(function (e) {
            he.offset.setOffset(this, t, e)
        });
        var i, n, o = {top: 0, left: 0}, r = this[0], s = r && r.ownerDocument;
        if (s)return i = s.documentElement, he.contains(i, r) ? (typeof r.getBoundingClientRect !== Y && (o = r.getBoundingClientRect()), n = U(s), {top: o.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0), left: o.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)}) : o
    }, he.offset = {setOffset: function (t, e, i) {
        var n = he.css(t, "position");
        "static" === n && (t.style.position = "relative");
        var o, r, s = he(t), a = s.offset(), l = he.css(t, "top"), u = he.css(t, "left"), h = ("absolute" === n || "fixed" === n) && he.inArray("auto", [l, u]) > -1, c = {}, p = {};
        h ? (p = s.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(u) || 0), he.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (c.top = e.top - a.top + o), null != e.left && (c.left = e.left - a.left + r), "using"in e ? e.using.call(t, c) : s.css(c)
    }}, he.fn.extend({position: function () {
        if (this[0]) {
            var t, e, i = {top: 0, left: 0}, n = this[0];
            return"fixed" === he.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), he.nodeName(t[0], "html") || (i = t.offset()), i.top += he.css(t[0], "borderTopWidth", !0), i.left += he.css(t[0], "borderLeftWidth", !0)), {top: e.top - i.top - he.css(n, "marginTop", !0), left: e.left - i.left - he.css(n, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var t = this.offsetParent || Q; t && !he.nodeName(t, "html") && "static" === he.css(t, "position");)t = t.offsetParent;
            return t || Q
        })
    }}), he.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var n = /Y/.test(i);
        he.fn[t] = function (o) {
            return he.access(this, function (t, o, r) {
                var s = U(t);
                return r === e ? s ? i in s ? s[i] : s.document.documentElement[o] : t[o] : (s ? s.scrollTo(n ? he(s).scrollLeft() : r, n ? r : he(s).scrollTop()) : t[o] = r, void 0)
            }, t, o, arguments.length, null)
        }
    }), he.each({Height: "height", Width: "width"}, function (t, i) {
        he.each({padding: "inner" + t, content: i, "": "outer" + t}, function (n, o) {
            he.fn[o] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o), a = n || (o === !0 || r === !0 ? "margin" : "border");
                return he.access(this, function (i, n, o) {
                    var r;
                    return he.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + t], r["scroll" + t], i.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? he.css(i, n, a) : he.style(i, n, o, a)
                }, i, s ? o : e, s, null)
            }
        })
    }), he.fn.size = function () {
        return this.length
    }, he.fn.andSelf = he.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = he : (t.jQuery = t.$ = he, "function" == typeof define && define.amd && define("jquery", [], function () {
        return he
    }))
}(window), /*!
 * jQuery UI Core 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
    function (t, e) {
        function i(e, i) {
            var o, r, s, a = e.nodeName.toLowerCase();
            return"area" === a ? (o = e.parentNode, r = o.name, e.href && r && "map" === o.nodeName.toLowerCase() ? (s = t("img[usemap=#" + r + "]")[0], !!s && n(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
        }

        function n(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
                return"hidden" === t.css(this, "visibility")
            }).length
        }

        var o = 0, r = /^ui-id-\d+$/;
        t.ui = t.ui || {}, t.extend(t.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), t.fn.extend({focus: function (e) {
            return function (i, n) {
                return"number" == typeof i ? this.each(function () {
                    var e = this;
                    setTimeout(function () {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus), scrollParent: function () {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return/(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return/(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        }, zIndex: function (i) {
            if (i !== e)return this.css("zIndex", i);
            if (this.length)for (var n, o, r = t(this[0]); r.length && r[0] !== document;) {
                if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (o = parseInt(r.css("zIndex"), 10), !isNaN(o) && 0 !== o))return o;
                r = r.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++o)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                r.test(this.id) && t(this).removeAttr("id")
            })
        }}), t.extend(t.expr[":"], {data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (i) {
                return!!t.data(i, e)
            }
        }) : function (e, i, n) {
            return!!t.data(e, n[3])
        }, focusable: function (e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        }, tabbable: function (e) {
            var n = t.attr(e, "tabindex"), o = isNaN(n);
            return(o || n >= 0) && i(e, !o)
        }}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (i, n) {
            function o(e, i, n, o) {
                return t.each(r, function () {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }

            var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], s = n.toLowerCase(), a = {innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight};
            t.fn["inner" + n] = function (i) {
                return i === e ? a["inner" + n].call(this) : this.each(function () {
                    t(this).css(s, o(this, i) + "px")
                })
            }, t.fn["outer" + n] = function (e, i) {
                return"number" != typeof e ? a["outer" + n].call(this, e) : this.each(function () {
                    t(this).css(s, o(this, e, !0, i) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
            return function (i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart"in document.createElement("div"), t.fn.extend({disableSelection: function () {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }}), t.extend(t.ui, {plugin: {add: function (e, i, n) {
            var o, r = t.ui[e].prototype;
            for (o in n)r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([i, n[o]])
        }, call: function (t, e, i) {
            var n, o = t.plugins[e];
            if (o && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)for (n = 0; n < o.length; n++)t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }}, hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow"))return!1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", o = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, o = e[n] > 0, e[n] = 0, o)
        }})
    }(jQuery), /*!
 * jQuery UI Widget 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
    function (t, e) {
        var i = 0, n = Array.prototype.slice, o = t.cleanData;
        t.cleanData = function (e) {
            for (var i, n = 0; null != (i = e[n]); n++)try {
                t(i).triggerHandler("remove")
            } catch (r) {
            }
            o(e)
        }, t.widget = function (e, i, n) {
            var o, r, s, a, l = {}, u = e.split(".")[0];
            e = e.split(".")[1], o = u + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
                return!!t.data(e, o)
            }, t[u] = t[u] || {}, r = t[u][e], s = t[u][e] = function (t, e) {
                return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new s(t, e)
            }, t.extend(s, r, {version: n.version, _proto: t.extend({}, n), _childConstructors: []}), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, n) {
                return t.isFunction(n) ? (l[e] = function () {
                    var t = function () {
                        return i.prototype[e].apply(this, arguments)
                    }, o = function (t) {
                        return i.prototype[e].apply(this, t)
                    };
                    return function () {
                        var e, i = this._super, r = this._superApply;
                        return this._super = t, this._superApply = o, e = n.apply(this, arguments), this._super = i, this._superApply = r, e
                    }
                }(), void 0) : (l[e] = n, void 0)
            }), s.prototype = t.widget.extend(a, {widgetEventPrefix: r ? a.widgetEventPrefix : e}, l, {constructor: s, namespace: u, widgetName: e, widgetFullName: o}), r ? (t.each(r._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, s, i._proto)
            }), delete r._childConstructors) : i._childConstructors.push(s), t.widget.bridge(e, s)
        }, t.widget.extend = function (i) {
            for (var o, r, s = n.call(arguments, 1), a = 0, l = s.length; l > a; a++)for (o in s[a])r = s[a][o], s[a].hasOwnProperty(o) && r !== e && (i[o] = t.isPlainObject(r) ? t.isPlainObject(i[o]) ? t.widget.extend({}, i[o], r) : t.widget.extend({}, r) : r);
            return i
        }, t.widget.bridge = function (i, o) {
            var r = o.prototype.widgetFullName || i;
            t.fn[i] = function (s) {
                var a = "string" == typeof s, l = n.call(arguments, 1), u = this;
                return s = !a && l.length ? t.widget.extend.apply(null, [s].concat(l)) : s, a ? this.each(function () {
                    var n, o = t.data(this, r);
                    return o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (n = o[s].apply(o, l), n !== o && n !== e ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + s + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + s + "'")
                }) : this.each(function () {
                    var e = t.data(this, r);
                    e ? e.option(s || {})._init() : t.data(this, r, new o(s, this))
                }), u
            }
        }, t.Widget = function () {
        }, t.Widget._childConstructors = [], t.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {remove: function (t) {
                t.target === n && this.destroy()
            }}), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        }, _destroy: t.noop, widget: function () {
            return this.element
        }, option: function (i, n) {
            var o, r, s, a = i;
            if (0 === arguments.length)return t.widget.extend({}, this.options);
            if ("string" == typeof i)if (a = {}, o = i.split("."), i = o.shift(), o.length) {
                for (r = a[i] = t.widget.extend({}, this.options[i]), s = 0; s < o.length - 1; s++)r[o[s]] = r[o[s]] || {}, r = r[o[s]];
                if (i = o.pop(), n === e)return r[i] === e ? null : r[i];
                r[i] = n
            } else {
                if (n === e)return this.options[i] === e ? null : this.options[i];
                a[i] = n
            }
            return this._setOptions(a), this
        }, _setOptions: function (t) {
            var e;
            for (e in t)this._setOption(e, t[e]);
            return this
        }, _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        }, enable: function () {
            return this._setOption("disabled", !1)
        }, disable: function () {
            return this._setOption("disabled", !0)
        }, _on: function (e, i, n) {
            var o, r = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, function (n, s) {
                function a() {
                    return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : void 0
                }

                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, h = l[2];
                h ? o.delegate(h, u, a) : i.bind(u, a)
            })
        }, _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        }, _delay: function (t, e) {
            function i() {
                return("string" == typeof t ? n[t] : t).apply(n, arguments)
            }

            var n = this;
            return setTimeout(i, e || 0)
        }, _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function (e) {
                t(e.currentTarget).addClass("ui-state-hover")
            }, mouseleave: function (e) {
                t(e.currentTarget).removeClass("ui-state-hover")
            }})
        }, _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {focusin: function (e) {
                t(e.currentTarget).addClass("ui-state-focus")
            }, focusout: function (e) {
                t(e.currentTarget).removeClass("ui-state-focus")
            }})
        }, _trigger: function (e, i, n) {
            var o, r, s = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)for (o in r)o in i || (i[o] = r[o]);
            return this.element.trigger(i, n), !(t.isFunction(s) && s.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }}, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, o, r) {
                "string" == typeof o && (o = {effect: o});
                var s, a = o ? o === !0 || "number" == typeof o ? i : o.effect || i : e;
                o = o || {}, "number" == typeof o && (o = {duration: o}), s = !t.isEmptyObject(o), o.complete = r, o.delay && n.delay(o.delay), s && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, r) : n.queue(function (i) {
                    t(this)[e](), r && r.call(n[0]), i()
                })
            }
        })
    }(jQuery), /*!
 * jQuery UI Accordion 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
    function (t) {
        var e = 0, i = {}, n = {};
        i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show", t.widget("ui.accordion", {version: "1.10.3", options: {active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"}, activate: null, beforeActivate: null}, _create: function () {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
        }, _getCreateEventData: function () {
            return{header: this.active, panel: this.active.length ? this.active.next() : t(), content: this.active.length ? this.active.next() : t()}
        }, _createIcons: function () {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        }, _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        }, _destroy: function () {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        }, _setOption: function (t, e) {
            return"active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), void 0)
        }, _keydown: function (e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, n = this.headers.length, o = this.headers.index(e.target), r = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        r = this.headers[(o + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        r = this.headers[(o - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        r = this.headers[0];
                        break;
                    case i.END:
                        r = this.headers[n - 1]
                }
                r && (t(e.target).attr("tabIndex", -1), t(r).attr("tabIndex", 0), r.focus(), e.preventDefault())
            }
        }, _panelKeyDown: function (e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        }, refresh: function () {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        }, _processPanels: function () {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        }, _refresh: function () {
            var i, n = this.options, o = n.heightStyle, r = this.element.parent(), s = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
            this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (e) {
                var i = t(this), n = i.attr("id"), o = i.next(), r = o.attr("id");
                n || (n = s + "-header-" + e, i.attr("id", n)), r || (r = s + "-panel-" + e, o.attr("id", r)), i.attr("aria-controls", r), o.attr("aria-labelledby", n)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false", tabIndex: -1}).next().attr({"aria-expanded": "false", "aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true", tabIndex: 0}).next().attr({"aria-expanded": "true", "aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(n.event), "fill" === o ? (i = r.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.headers.each(function () {
                i -= t(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === o && (i = 0, this.headers.next().each(function () {
                i = Math.max(i, t(this).css("height", "").height())
            }).height(i))
        }, _activate: function (e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({target: i, currentTarget: i, preventDefault: t.noop}))
        }, _findActive: function (e) {
            return"number" == typeof e ? this.headers.eq(e) : t()
        }, _setupEvents: function (e) {
            var i = {keydown: "_keydown"};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        }, _eventHandler: function (e) {
            var i = this.options, n = this.active, o = t(e.currentTarget), r = o[0] === n[0], s = r && i.collapsible, a = s ? t() : o.next(), l = n.next(), u = {oldHeader: n, oldPanel: l, newHeader: s ? t() : o, newPanel: a};
            e.preventDefault(), r && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = s ? !1 : this.headers.index(o), this.active = r ? t() : o, this._toggle(u), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), r || (o.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && o.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), o.next().addClass("ui-accordion-content-active")))
        }, _toggle: function (e) {
            var i = e.newPanel, n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({"aria-expanded": "false", "aria-hidden": "true"}), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({"aria-expanded": "true", "aria-hidden": "false"}).prev().attr({"aria-selected": "true", tabIndex: 0})
        }, _animate: function (t, e, o) {
            var r, s, a, l = this, u = 0, h = t.length && (!e.length || t.index() < e.index()), c = this.options.animate || {}, p = h && c.down || c, d = function () {
                l._toggleComplete(o)
            };
            return"number" == typeof p && (a = p), "string" == typeof p && (s = p), s = s || p.easing || c.easing, a = a || p.duration || c.duration, e.length ? t.length ? (r = t.show().outerHeight(), e.animate(i, {duration: a, easing: s, step: function (t, e) {
                e.now = Math.round(t)
            }}), t.hide().animate(n, {duration: a, easing: s, complete: d, step: function (t, i) {
                i.now = Math.round(t), "height" !== i.prop ? u += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(r - e.outerHeight() - u), u = 0)
            }}), void 0) : e.animate(i, a, s, d) : t.animate(n, a, s, d)
        }, _toggleComplete: function (t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }})
    }(jQuery), /*!
 * jQuery UI Position 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
    function (t, e) {
        function i(t, e, i) {
            return[parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1)]
        }

        function n(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }

        function o(e) {
            var i = e[0];
            return 9 === i.nodeType ? {width: e.width(), height: e.height(), offset: {top: 0, left: 0}} : t.isWindow(i) ? {width: e.width(), height: e.height(), offset: {top: e.scrollTop(), left: e.scrollLeft()}} : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()}
        }

        t.ui = t.ui || {};
        var r, s = Math.max, a = Math.abs, l = Math.round, u = /left|center|right/, h = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, p = /^\w+/, d = /%$/, f = t.fn.position;
        t.position = {scrollbarWidth: function () {
            if (r !== e)return r;
            var i, n, o = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), s = o.children()[0];
            return t("body").append(o), i = s.offsetWidth, o.css("overflow", "scroll"), n = s.offsetWidth, i === n && (n = o[0].clientWidth), o.remove(), r = i - n
        }, getScrollInfo: function (e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"), n = e.isWindow ? "" : e.element.css("overflow-y"), o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
            return{width: r ? t.position.scrollbarWidth() : 0, height: o ? t.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (e) {
            var i = t(e || window), n = t.isWindow(i[0]);
            return{element: i, isWindow: n, offset: i.offset() || {left: 0, top: 0}, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: n ? i.width() : i.outerWidth(), height: n ? i.height() : i.outerHeight()}
        }}, t.fn.position = function (e) {
            if (!e || !e.of)return f.apply(this, arguments);
            e = t.extend({}, e);
            var r, d, g, m, v, y, b = t(e.of), _ = t.position.getWithinInfo(e.within), C = t.position.getScrollInfo(_), w = (e.collision || "flip").split(" "), x = {};
            return y = o(b), b[0].preventDefault && (e.at = "left top"), d = y.width, g = y.height, m = y.offset, v = t.extend({}, m), t.each(["my", "at"], function () {
                var t, i, n = (e[this] || "").split(" ");
                1 === n.length && (n = u.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = u.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", t = c.exec(n[0]), i = c.exec(n[1]), x[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [p.exec(n[0])[0], p.exec(n[1])[0]]
            }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += d : "center" === e.at[0] && (v.left += d / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), r = i(x.at, d, g), v.left += r[0], v.top += r[1], this.each(function () {
                var o, u, h = t(this), c = h.outerWidth(), p = h.outerHeight(), f = n(this, "marginLeft"), y = n(this, "marginTop"), S = c + f + n(this, "marginRight") + C.width, k = p + y + n(this, "marginBottom") + C.height, T = t.extend({}, v), D = i(x.my, h.outerWidth(), h.outerHeight());
                "right" === e.my[0] ? T.left -= c : "center" === e.my[0] && (T.left -= c / 2), "bottom" === e.my[1] ? T.top -= p : "center" === e.my[1] && (T.top -= p / 2), T.left += D[0], T.top += D[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), o = {marginLeft: f, marginTop: y}, t.each(["left", "top"], function (i, n) {
                    t.ui.position[w[i]] && t.ui.position[w[i]][n](T, {targetWidth: d, targetHeight: g, elemWidth: c, elemHeight: p, collisionPosition: o, collisionWidth: S, collisionHeight: k, offset: [r[0] + D[0], r[1] + D[1]], my: e.my, at: e.at, within: _, elem: h})
                }), e.using && (u = function (t) {
                    var i = m.left - T.left, n = i + d - c, o = m.top - T.top, r = o + g - p, l = {target: {element: b, left: m.left, top: m.top, width: d, height: g}, element: {element: h, left: T.left, top: T.top, width: c, height: p}, horizontal: 0 > n ? "left" : i > 0 ? "right" : "center", vertical: 0 > r ? "top" : o > 0 ? "bottom" : "middle"};
                    c > d && a(i + n) < d && (l.horizontal = "center"), p > g && a(o + r) < g && (l.vertical = "middle"), l.important = s(a(i), a(n)) > s(a(o), a(r)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                }), h.offset(t.extend(T, {using: u}))
            })
        }, t.ui.position = {fit: {left: function (t, e) {
            var i, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, r = n.width, a = t.left - e.collisionPosition.marginLeft, l = o - a, u = a + e.collisionWidth - r - o;
            e.collisionWidth > r ? l > 0 && 0 >= u ? (i = t.left + l + e.collisionWidth - r - o, t.left += l - i) : t.left = u > 0 && 0 >= l ? o : l > u ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = s(t.left - a, t.left)
        }, top: function (t, e) {
            var i, n = e.within, o = n.isWindow ? n.scrollTop : n.offset.top, r = e.within.height, a = t.top - e.collisionPosition.marginTop, l = o - a, u = a + e.collisionHeight - r - o;
            e.collisionHeight > r ? l > 0 && 0 >= u ? (i = t.top + l + e.collisionHeight - r - o, t.top += l - i) : t.top = u > 0 && 0 >= l ? o : l > u ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = s(t.top - a, t.top)
        }}, flip: {left: function (t, e) {
            var i, n, o = e.within, r = o.offset.left + o.scrollLeft, s = o.width, l = o.isWindow ? o.scrollLeft : o.offset.left, u = t.left - e.collisionPosition.marginLeft, h = u - l, c = u + e.collisionWidth - s - l, p = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
            0 > h ? (i = t.left + p + d + f + e.collisionWidth - s - r, (0 > i || i < a(h)) && (t.left += p + d + f)) : c > 0 && (n = t.left - e.collisionPosition.marginLeft + p + d + f - l, (n > 0 || a(n) < c) && (t.left += p + d + f))
        }, top: function (t, e) {
            var i, n, o = e.within, r = o.offset.top + o.scrollTop, s = o.height, l = o.isWindow ? o.scrollTop : o.offset.top, u = t.top - e.collisionPosition.marginTop, h = u - l, c = u + e.collisionHeight - s - l, p = "top" === e.my[1], d = p ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
            0 > h ? (n = t.top + d + f + g + e.collisionHeight - s - r, t.top + d + f + g > h && (0 > n || n < a(h)) && (t.top += d + f + g)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + d + f + g - l, t.top + d + f + g > c && (i > 0 || a(i) < c) && (t.top += d + f + g))
        }}, flipfit: {left: function () {
            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
        }, top: function () {
            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
        }}}, function () {
            var e, i, n, o, r, s = document.getElementsByTagName("body")[0], a = document.createElement("div");
            e = document.createElement(s ? "div" : "body"), n = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, s && t.extend(n, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (r in n)e.style[r] = n[r];
            e.appendChild(a), i = s || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", o = t(a).offset().left, t.support.offsetFractions = o > 10 && 11 > o, e.innerHTML = "", i.removeChild(e)
        }()
    }(jQuery), /*!
 * jQuery UI Menu 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
    function (t) {
        t.widget("ui.menu", {version: "1.10.3", defaultElement: "<ul>", delay: 300, options: {icons: {submenu: "ui-icon-carat-1-e"}, menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null}, _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role, tabIndex: 0}).bind("click" + this.eventNamespace, t.proxy(function (t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function (t) {
                t.preventDefault()
            }, "click .ui-state-disabled > a": function (t) {
                t.preventDefault()
            }, "click .ui-menu-item:has(a)": function (e) {
                var i = t(e.target).closest(".ui-menu-item");
                !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
            }, "mouseenter .ui-menu-item": function (e) {
                var i = t(e.currentTarget);
                i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
            }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                var i = this.active || this.element.children(".ui-menu-item").eq(0);
                e || this.focus(t, i)
            }, blur: function (e) {
                this._delay(function () {
                    t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                })
            }, keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function (e) {
                t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
            }})
        }, _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        }, _keydown: function (e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            var n, o, r, s, a, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, o = this.previousFilter || "", r = String.fromCharCode(e.keyCode), s = !1, clearTimeout(this.filterTimer), r === o ? s = !0 : r = o + r, a = new RegExp("^" + i(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return a.test(t(this).children("a").text())
                    }), n = s && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (r = String.fromCharCode(e.keyCode), a = new RegExp("^" + i(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return a.test(t(this).children("a").text())
                    })), n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        }, _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        }, refresh: function () {
            var e, i = this.options.icons.submenu, n = this.element.find(this.options.menus);
            n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role, "aria-hidden": "true", "aria-expanded": "false"}).each(function () {
                var e = t(this), n = e.prev("a"), o = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                n.attr("aria-haspopup", "true").prepend(o), e.attr("aria-labelledby", n.attr("id"))
            }), e = n.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1, role: this._itemRole()}), e.children(":not(.ui-menu-item)").each(function () {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        }, _itemRole: function () {
            return{menu: "menuitem", listbox: "option"}[this.options.role]
        }, _setOption: function (t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        }, focus: function (t, e) {
            var i, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        }, _scrollIntoView: function (e) {
            var i, n, o, r, s, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, o = e.offset().top - this.activeMenu.offset().top - i - n, r = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = e.height(), 0 > o ? this.activeMenu.scrollTop(r + o) : o + a > s && this.activeMenu.scrollTop(r + o - s + a))
        }, blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
        }, _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        }, _open: function (e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        }, collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
            }, this.delay)
        }, _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        }, collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        }, expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        }, next: function (t) {
            this._move("next", "first", t)
        }, previous: function (t) {
            this._move("prev", "last", t)
        }, isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        }, isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        }, _move: function (t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, n)
        }, nextPage: function (e) {
            var i, n, o;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, o = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - n - o < 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
        }, previousPage: function (e) {
            var i, n, o;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, o = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - n + o > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), void 0) : (this.next(e), void 0)
        }, _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        }, select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }})
    }(jQuery), /*!
 * jQuery UI Autocomplete 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 *	jquery.ui.menu.js
 */
    function (t) {
        var e = 0;
        t.widget("ui.autocomplete", {version: "1.10.3", defaultElement: "<input>", options: {appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null}, pending: 0, _create: function () {
            var e, i, n, o = this.element[0].nodeName.toLowerCase(), r = "textarea" === o, s = "input" === o;
            this.isMultiLine = r ? !0 : s ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[r || s ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function (o) {
                if (this.element.prop("readOnly"))return e = !0, n = !0, i = !0, void 0;
                e = !1, n = !1, i = !1;
                var r = t.ui.keyCode;
                switch (o.keyCode) {
                    case r.PAGE_UP:
                        e = !0, this._move("previousPage", o);
                        break;
                    case r.PAGE_DOWN:
                        e = !0, this._move("nextPage", o);
                        break;
                    case r.UP:
                        e = !0, this._keyEvent("previous", o);
                        break;
                    case r.DOWN:
                        e = !0, this._keyEvent("next", o);
                        break;
                    case r.ENTER:
                    case r.NUMPAD_ENTER:
                        this.menu.active && (e = !0, o.preventDefault(), this.menu.select(o));
                        break;
                    case r.TAB:
                        this.menu.active && this.menu.select(o);
                        break;
                    case r.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(o), o.preventDefault());
                        break;
                    default:
                        i = !0, this._searchTimeout(o)
                }
            }, keypress: function (n) {
                if (e)return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault(), void 0;
                if (!i) {
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            this._move("nextPage", n);
                            break;
                        case o.UP:
                            this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            this._keyEvent("next", n)
                    }
                }
            }, input: function (t) {
                return n ? (n = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
            }, focus: function () {
                this.selectedItem = null, this.previous = this._value()
            }, blur: function (t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
            }}), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {mousedown: function (e) {
                e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur
                });
                var i = this.menu.element[0];
                t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                    var e = this;
                    this.document.one("mousedown", function (n) {
                        n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                    })
                })
            }, menufocus: function (e, i) {
                if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)))return this.menu.blur(), this.document.one("mousemove", function () {
                    t(e.target).trigger(e.originalEvent)
                }), void 0;
                var n = i.item.data("ui-autocomplete-item");
                !1 !== this._trigger("focus", e, {item: n}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
            }, menuselect: function (t, e) {
                var i = e.item.data("ui-autocomplete-item"), n = this.previous;
                this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
                    this.previous = n, this.selectedItem = i
                })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
            }}), this.liveRegion = t("<span>", {role: "status", "aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {beforeunload: function () {
                this.element.removeAttr("autocomplete")
            }})
        }, _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        }, _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        }, _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        }, _initSource: function () {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, o) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({url: i, data: e, dataType: "json", success: function (t) {
                    o(t)
                }, error: function () {
                    o([])
                }})
            }) : this.source = this.options.source
        }, _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        }, search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        }, _search: function (t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        }, _response: function () {
            var t = this, i = ++e;
            return function (n) {
                i === e && t.__response(n), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        }, __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        }, close: function (t) {
            this.cancelSearch = !0, this._close(t)
        }, _close: function (t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        }, _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        }, _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return"string" == typeof e ? {label: e, value: e} : t.extend({label: e.label || e.value, value: e.value || e.label}, e)
            })
        }, _suggest: function (e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        }, _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        }, _renderMenu: function (e, i) {
            var n = this;
            t.each(i, function (t, i) {
                n._renderItemData(e, i)
            })
        }, _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        }, _renderItem: function (e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        }, _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
        }, widget: function () {
            return this.menu.element
        }, _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        }, _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }}), t.extend(t.ui.autocomplete, {escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (e, i) {
            var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return n.test(t.label || t.value || t)
            })
        }}), t.widget("ui.autocomplete", t.ui.autocomplete, {options: {messages: {noResults: "No search results.", results: function (t) {
            return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
        }}}, __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }})
    }(jQuery), /*!
 * jQuery UI Button 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
    function (t) {
        var e, i, n, o, r = "ui-button ui-widget ui-state-default ui-corner-all", s = "ui-state-hover ui-state-active ", a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", l = function () {
            var e = t(this);
            setTimeout(function () {
                e.find(":ui-button").button("refresh")
            }, 1)
        }, u = function (e) {
            var i = e.name, n = e.form, o = t([]);
            return i && (i = i.replace(/'/g, "\\'"), o = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
                return!this.form
            })), o
        };
        t.widget("ui.button", {version: "1.10.3", defaultElement: "<button>", options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}}, _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var s = this, a = this.options, h = "checkbox" === this.type || "radio" === this.type, c = h ? "" : "ui-state-active", p = "ui-state-focus";
            null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter" + this.eventNamespace,function () {
                a.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace,function () {
                a.disabled || t(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function (t) {
                a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace,function () {
                s.buttonElement.addClass(p)
            }).bind("blur" + this.eventNamespace, function () {
                s.buttonElement.removeClass(p)
            }), h && (this.element.bind("change" + this.eventNamespace, function () {
                o || s.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace,function (t) {
                a.disabled || (o = !1, i = t.pageX, n = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function (t) {
                a.disabled || (i !== t.pageX || n !== t.pageY) && (o = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return a.disabled || o ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (a.disabled || o)return!1;
                t(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", "true");
                var e = s.element[0];
                u(e).not(e).map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace,function () {
                return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, s.document.one("mouseup", function () {
                    e = null
                }), void 0)
            }).bind("mouseup" + this.eventNamespace,function () {
                return a.disabled ? !1 : (t(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace,function (e) {
                return a.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", a.disabled), this._resetButton()
        }, _determineButtonType: function () {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        }, widget: function () {
            return this.buttonElement
        }, _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(r + " " + s + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        }, _setOption: function (t, e) {
            return this._super(t, e), "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), void 0) : (this._resetButton(), void 0)
        }, refresh: function () {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? u(this.element[0]).each(function () {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        }, _resetButton: function () {
            if ("input" === this.type)return this.options.label && this.element.val(this.options.label), void 0;
            var e = this.buttonElement.removeClass(a), i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(), n = this.options.icons, o = n.primary && n.secondary, r = [];
            n.primary || n.secondary ? (this.options.text && r.push("ui-button-text-icon" + (o ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (r.push(o ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : r.push("ui-button-text-only"), e.addClass(r.join(" "))
        }}), t.widget("ui.buttonset", {version: "1.10.3", options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"}, _create: function () {
            this.element.addClass("ui-buttonset")
        }, _init: function () {
            this.refresh()
        }, _setOption: function (t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        }, refresh: function () {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        }, _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }})
    }(jQuery), /*!
 * jQuery UI Datepicker 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 *
 * Depends:
 *	jquery.ui.core.js
 */
    function (t, e) {
        function i() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1}, t.extend(this._defaults, this.regional[""]), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function n(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.delegate(i, "mouseout",function () {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", function () {
                t.datepicker._isDisabledDatepicker(r.inline ? e.parent()[0] : r.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function o(e, i) {
            t.extend(e, i);
            for (var n in i)null == i[n] && (e[n] = i[n]);
            return e
        }

        t.extend(t.ui, {datepicker: {version: "1.10.3"}});
        var r, s = "datepicker";
        t.extend(i.prototype, {markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {
            return this.dpDiv
        }, setDefaults: function (t) {
            return o(this._defaults, t || {}), this
        }, _attachDatepicker: function (e, i) {
            var n, o, r;
            n = e.nodeName.toLowerCase(), o = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), r = this._newInst(t(e), o), r.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, r) : o && this._inlineDatepicker(e, r)
        }, _newInst: function (e, i) {
            var o = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return{id: o, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv}
        }, _connectDatepicker: function (e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, s, i), i.settings.disabled && this._disableDatepicker(e))
        }, _attachments: function (e, i) {
            var n, o, r, s = this._get(i, "appendText"), a = this._get(i, "isRTL");
            i.append && i.append.remove(), s && (i.append = t("<span class='" + this._appendClass + "'>" + s + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (o = this._get(i, "buttonText"), r = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({src: r, alt: o, title: o}) : t("<button type='button'></button>").addClass(this._triggerClass).html(r ? t("<img/>").attr({src: r, alt: o, title: o}) : o)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        }, _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, o, r = new Date(2009, 11, 20), s = this._get(t, "dateFormat");
                s.match(/[DM]/) && (e = function (t) {
                    for (i = 0, n = 0, o = 0; o < t.length; o++)t[o].length > i && (i = t[o].length, n = o);
                    return n
                }, r.setMonth(e(this._get(t, s.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(e(this._get(t, s.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), t.input.attr("size", this._formatDate(t, r).length)
            }
        }, _inlineDatepicker: function (e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, s, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        }, _dialogDatepicker: function (e, i, n, r, a) {
            var l, u, h, c, p, d = this._dialogInst;
            return d || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], s, d)), o(d.settings, r || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (u = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, p = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [u / 2 - 100 + c, h / 2 - 150 + p]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], s, d), this
        }, _destroyDatepicker: function (e) {
            var i, n = t(e), o = t.data(e, s);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, s), "input" === i ? (o.append.remove(), o.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
        }, _enableDatepicker: function (e) {
            var i, n, o = t(e), r = t.data(e, s);
            o.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, r.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({opacity: "1.0", cursor: ""})) : ("div" === i || "span" === i) && (n = o.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        }, _disableDatepicker: function (e) {
            var i, n, o = t(e), r = t.data(e, s);
            o.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, r.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({opacity: "0.5", cursor: "default"})) : ("div" === i || "span" === i) && (n = o.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        }, _isDisabledDatepicker: function (t) {
            if (!t)return!1;
            for (var e = 0; e < this._disabledInputs.length; e++)if (this._disabledInputs[e] === t)return!0;
            return!1
        }, _getInst: function (e) {
            try {
                return t.data(e, s)
            } catch (i) {
                throw"Missing instance data for this datepicker"
            }
        }, _optionDatepicker: function (i, n, r) {
            var s, a, l, u, h = this._getInst(i);
            return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? t.extend({}, t.datepicker._defaults) : h ? "all" === n ? t.extend({}, h.settings) : this._get(h, n) : null : (s = n || {}, "string" == typeof n && (s = {}, s[n] = r), h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(h, "min"), u = this._getMinMaxDate(h, "max"), o(h.settings, s), null !== l && s.dateFormat !== e && s.minDate === e && (h.settings.minDate = this._formatDate(h, l)), null !== u && s.dateFormat !== e && s.maxDate === e && (h.settings.maxDate = this._formatDate(h, u)), "disabled"in s && (s.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h)), void 0)
        }, _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        }, _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        }, _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        }, _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        }, _doKeyDown: function (e) {
            var i, n, o, r = t.datepicker._getInst(e.target), s = !0, a = r.dpDiv.is(".ui-datepicker-rtl");
            if (r._keyEvent = !0, t.datepicker._datepickerShowing)switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), s = !1;
                    break;
                case 13:
                    return o = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", r.dpDiv), o[0] && t.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, o[0]), i = t.datepicker._get(r, "onSelect"), i ? (n = t.datepicker._formatDate(r), i.apply(r.input ? r.input[0] : null, [n, r])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                default:
                    s = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : s = !1;
            s && (e.preventDefault(), e.stopPropagation())
        }, _doKeyPress: function (e) {
            var i, n, o = t.datepicker._getInst(e.target);
            return t.datepicker._get(o, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
        }, _doKeyUp: function (e) {
            var i, n = t.datepicker._getInst(e.target);
            if (n.input.val() !== n.lastVal)try {
                i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
            } catch (o) {
            }
            return!0
        }, _showDatepicker: function (e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, n, r, s, a, l, u;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(i, "beforeShow"), r = n ? n.apply(e, [e, i]) : {}, r !== !1 && (o(i.settings, r), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), s = !1, t(e).parents().each(function () {
                    return s |= "fixed" === t(this).css("position"), !s
                }), a = {left: t.datepicker._pos[0], top: t.datepicker._pos[1]}, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, s), i.dpDiv.css({position: t.datepicker._inDialog && t.blockUI ? "static" : s ? "fixed" : "absolute", display: "none", left: a.left + "px", top: a.top + "px"}), i.inline || (l = t.datepicker._get(i, "showAnim"), u = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        }, _updateDatepicker: function (e) {
            this.maxRows = 4, r = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, n = this._getNumberOfMonths(e), o = n[1], s = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", s * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        }, _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        }, _checkOffset: function (e, i, n) {
            var o = e.dpDiv.outerWidth(), r = e.dpDiv.outerHeight(), s = e.input ? e.input.outerWidth() : 0, a = e.input ? e.input.outerHeight() : 0, l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()), u = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? o - s : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + o > l && l > o ? Math.abs(i.left + o - l) : 0), i.top -= Math.min(i.top, i.top + r > u && u > r ? Math.abs(r + a) : 0), i
        }, _findPos: function (e) {
            for (var i, n = this._getInst(e), o = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));)e = e[o ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        }, _hideDatepicker: function (e) {
            var i, n, o, r, a = this._curInst;
            !a || e && a !== t.data(e, s) || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), o = function () {
                t.datepicker._tidyDialog(a)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, o) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, o), i || o(), this._datepickerShowing = !1, r = this._get(a, "onClose"), r && r.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        }, _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        }, _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        }, _adjustDate: function (e, i, n) {
            var o = t(e), r = this._getInst(o[0]);
            this._isDisabledDatepicker(o[0]) || (this._adjustInstDate(r, i + ("M" === n ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
        }, _gotoToday: function (e) {
            var i, n = t(e), o = this._getInst(n[0]);
            this._get(o, "gotoCurrent") && o.currentDay ? (o.selectedDay = o.currentDay, o.drawMonth = o.selectedMonth = o.currentMonth, o.drawYear = o.selectedYear = o.currentYear) : (i = new Date, o.selectedDay = i.getDate(), o.drawMonth = o.selectedMonth = i.getMonth(), o.drawYear = o.selectedYear = i.getFullYear()), this._notifyChange(o), this._adjustDate(n)
        }, _selectMonthYear: function (e, i, n) {
            var o = t(e), r = this._getInst(o[0]);
            r["selected" + ("M" === n ? "Month" : "Year")] = r["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(o)
        }, _selectDay: function (e, i, n, o) {
            var r, s = t(e);
            t(o).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || (r = this._getInst(s[0]), r.selectedDay = r.currentDay = t("a", o).html(), r.selectedMonth = r.currentMonth = i, r.selectedYear = r.currentYear = n, this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
        }, _clearDate: function (e) {
            var i = t(e);
            this._selectDate(i, "")
        }, _selectDate: function (e, i) {
            var n, o = t(e), r = this._getInst(o[0]);
            i = null != i ? i : this._formatDate(r), r.input && r.input.val(i), this._updateAlternate(r), n = this._get(r, "onSelect"), n ? n.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
        }, _updateAlternate: function (e) {
            var i, n, o, r = this._get(e, "altField");
            r && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), o = this.formatDate(i, n, this._getFormatConfig(e)), t(r).each(function () {
                t(this).val(o)
            }))
        }, noWeekends: function (t) {
            var e = t.getDay();
            return[e > 0 && 6 > e, ""]
        }, iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        }, parseDate: function (e, i, n) {
            if (null == e || null == i)throw"Invalid arguments";
            if (i = "object" == typeof i ? i.toString() : i + "", "" === i)return null;
            var o, r, s, a, l = 0, u = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, h = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10), c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, p = (n ? n.dayNames : null) || this._defaults.dayNames, d = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, f = (n ? n.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, v = -1, y = -1, b = !1, _ = function (t) {
                var i = o + 1 < e.length && e.charAt(o + 1) === t;
                return i && o++, i
            }, C = function (t) {
                var e = _(t), n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, o = new RegExp("^\\d{1," + n + "}"), r = i.substring(l).match(o);
                if (!r)throw"Missing number at position " + l;
                return l += r[0].length, parseInt(r[0], 10)
            }, w = function (e, n, o) {
                var r = -1, s = t.map(_(e) ? o : n,function (t, e) {
                    return[
                        [e, t]
                    ]
                }).sort(function (t, e) {
                    return-(t[1].length - e[1].length)
                });
                if (t.each(s, function (t, e) {
                    var n = e[1];
                    return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = e[0], l += n.length, !1) : void 0
                }), -1 !== r)return r + 1;
                throw"Unknown name at position " + l
            }, x = function () {
                if (i.charAt(l) !== e.charAt(o))throw"Unexpected literal at position " + l;
                l++
            };
            for (o = 0; o < e.length; o++)if (b)"'" !== e.charAt(o) || _("'") ? x() : b = !1; else switch (e.charAt(o)) {
                case"d":
                    v = C("d");
                    break;
                case"D":
                    w("D", c, p);
                    break;
                case"o":
                    y = C("o");
                    break;
                case"m":
                    m = C("m");
                    break;
                case"M":
                    m = w("M", d, f);
                    break;
                case"y":
                    g = C("y");
                    break;
                case"@":
                    a = new Date(C("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                    break;
                case"!":
                    a = new Date((C("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                    break;
                case"'":
                    _("'") ? x() : b = !0;
                    break;
                default:
                    x()
            }
            if (l < i.length && (s = i.substr(l), !/^\s+/.test(s)))throw"Extra/unparsed characters found in date: " + s;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= g ? 0 : -100)), y > -1)for (m = 1, v = y; ;) {
                if (r = this._getDaysInMonth(g, m - 1), r >= v)break;
                m++, v -= r
            }
            if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v)throw"Invalid date";
            return a
        }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (t, e, i) {
            if (!e)return"";
            var n, o = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, r = (i ? i.dayNames : null) || this._defaults.dayNames, s = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (e) {
                var i = n + 1 < t.length && t.charAt(n + 1) === e;
                return i && n++, i
            }, u = function (t, e, i) {
                var n = "" + e;
                if (l(t))for (; n.length < i;)n = "0" + n;
                return n
            }, h = function (t, e, i, n) {
                return l(t) ? n[e] : i[e]
            }, c = "", p = !1;
            if (e)for (n = 0; n < t.length; n++)if (p)"'" !== t.charAt(n) || l("'") ? c += t.charAt(n) : p = !1; else switch (t.charAt(n)) {
                case"d":
                    c += u("d", e.getDate(), 2);
                    break;
                case"D":
                    c += h("D", e.getDay(), o, r);
                    break;
                case"o":
                    c += u("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    c += u("m", e.getMonth() + 1, 2);
                    break;
                case"M":
                    c += h("M", e.getMonth(), s, a);
                    break;
                case"y":
                    c += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                    break;
                case"@":
                    c += e.getTime();
                    break;
                case"!":
                    c += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    l("'") ? c += "'" : p = !0;
                    break;
                default:
                    c += t.charAt(n)
            }
            return c
        }, _possibleChars: function (t) {
            var e, i = "", n = !1, o = function (i) {
                var n = e + 1 < t.length && t.charAt(e + 1) === i;
                return n && e++, n
            };
            for (e = 0; e < t.length; e++)if (n)"'" !== t.charAt(e) || o("'") ? i += t.charAt(e) : n = !1; else switch (t.charAt(e)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    i += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    o("'") ? i += "'" : n = !0;
                    break;
                default:
                    i += t.charAt(e)
            }
            return i
        }, _get: function (t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        }, _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), n = t.lastVal = t.input ? t.input.val() : null, o = this._getDefaultDate(t), r = o, s = this._getFormatConfig(t);
                try {
                    r = this.parseDate(i, n, s) || o
                } catch (a) {
                    n = e ? "" : n
                }
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), t.currentDay = n ? r.getDate() : 0, t.currentMonth = n ? r.getMonth() : 0, t.currentYear = n ? r.getFullYear() : 0, this._adjustInstDate(t)
            }
        }, _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        }, _determineDate: function (e, i, n) {
            var o = function (t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }, r = function (i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (n) {
                }
                for (var o = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, r = o.getFullYear(), s = o.getMonth(), a = o.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = l.exec(i); u;) {
                    switch (u[2] || "d") {
                        case"d":
                        case"D":
                            a += parseInt(u[1], 10);
                            break;
                        case"w":
                        case"W":
                            a += 7 * parseInt(u[1], 10);
                            break;
                        case"m":
                        case"M":
                            s += parseInt(u[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(r, s));
                            break;
                        case"y":
                        case"Y":
                            r += parseInt(u[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(r, s))
                    }
                    u = l.exec(i)
                }
                return new Date(r, s, a)
            }, s = null == i || "" === i ? n : "string" == typeof i ? r(i) : "number" == typeof i ? isNaN(i) ? n : o(i) : new Date(i.getTime());
            return s = s && "Invalid Date" === s.toString() ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        }, _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        }, _setDate: function (t, e, i) {
            var n = !e, o = t.selectedMonth, r = t.selectedYear, s = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = s.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = s.getMonth(), t.drawYear = t.selectedYear = t.currentYear = s.getFullYear(), o === t.selectedMonth && r === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        }, _getDate: function (t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        }, _attachHandlers: function (e) {
            var i = this._get(e, "stepMonths"), n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {prev: function () {
                    t.datepicker._adjustDate(n, -i, "M")
                }, next: function () {
                    t.datepicker._adjustDate(n, +i, "M")
                }, hide: function () {
                    t.datepicker._hideDatepicker()
                }, today: function () {
                    t.datepicker._gotoToday(n)
                }, selectDay: function () {
                    return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                }, selectMonth: function () {
                    return t.datepicker._selectMonthYear(n, this, "M"), !1
                }, selectYear: function () {
                    return t.datepicker._selectMonthYear(n, this, "Y"), !1
                }};
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        }, _generateHTML: function (t) {
            var e, i, n, o, r, s, a, l, u, h, c, p, d, f, g, m, v, y, b, _, C, w, x, S, k, T, D, P, E, M, I, F, A, $, L, N, O, V, R, H = new Date, z = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())), j = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), W = this._get(t, "hideIfNoPrevNext"), U = this._get(t, "navigationAsDateFormat"), q = this._getNumberOfMonths(t), K = this._get(t, "showCurrentAtPos"), Y = this._get(t, "stepMonths"), X = 1 !== q[0] || 1 !== q[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), Q = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - K, te = t.drawYear;
            if (0 > Z && (Z += 12, te--), J)for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - q[0] * q[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;)Z--, 0 > Z && (Z = 11, te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - Y, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", o = this._get(t, "nextText"), o = U ? this.formatDate(o, this._daylightSavingAdjust(new Date(te, Z + Y, 1)), this._getFormatConfig(t)) : o, r = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + o + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + o + "</span></a>", s = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : z, s = U ? this.formatDate(s, a, this._getFormatConfig(t)) : s, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", u = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + s + "</button>" : "") + (j ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, c = this._get(t, "showWeek"), p = this._get(t, "dayNames"), d = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", w = 0; w < q[0]; w++) {
                for (x = "", this.maxRows = 4, S = 0; S < q[1]; S++) {
                    if (k = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", D = "", X) {
                        if (D += "<div class='ui-datepicker-group", q[1] > 1)switch (S) {
                            case 0:
                                D += " ui-datepicker-group-first", T = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case q[1] - 1:
                                D += " ui-datepicker-group-last", T = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", T = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === w ? j ? r : n : "") + (/all|right/.test(T) && 0 === w ? j ? n : r : "") + this._generateMonthYearHeader(t, Z, te, Q, J, w > 0 || S > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", C = 0; 7 > C; C++)E = (C + h) % 7, P += "<th" + ((C + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + p[E] + "'>" + d[E] + "</span></th>";
                    for (D += P + "</tr></thead><tbody>", M = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), I = (this._getFirstDayOfMonth(te, Z) - h + 7) % 7, F = Math.ceil((I + M) / 7), A = X ? this.maxRows > F ? this.maxRows : F : F, this.maxRows = A, $ = this._daylightSavingAdjust(new Date(te, Z, 1 - I)), L = 0; A > L; L++) {
                        for (D += "<tr>", N = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")($) + "</td>" : "", C = 0; 7 > C; C++)O = m ? m.apply(t.input ? t.input[0] : null, [$]) : [!0, ""], V = $.getMonth() !== Z, R = V && !y || !O[0] || Q && Q > $ || J && $ > J, N += "<td class='" + ((C + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (V ? " ui-datepicker-other-month" : "") + ($.getTime() === k.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === $.getTime() && b.getTime() === k.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (V && !v ? "" : " " + O[1] + ($.getTime() === G.getTime() ? " " + this._currentClass : "") + ($.getTime() === z.getTime() ? " ui-datepicker-today" : "")) + "'" + (V && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + $.getMonth() + "' data-year='" + $.getFullYear() + "'") + ">" + (V && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + $.getDate() + "</span>" : "<a class='ui-state-default" + ($.getTime() === z.getTime() ? " ui-state-highlight" : "") + ($.getTime() === G.getTime() ? " ui-state-active" : "") + (V ? " ui-priority-secondary" : "") + "' href='#'>" + $.getDate() + "</a>") + "</td>", $.setDate($.getDate() + 1), $ = this._daylightSavingAdjust($);
                        D += N + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, te++), D += "</tbody></table>" + (X ? "</div>" + (q[0] > 0 && S === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += D
                }
                _ += x
            }
            return _ += u, t._keyEvent = !1, _
        }, _generateMonthYearHeader: function (t, e, i, n, o, r, s, a) {
            var l, u, h, c, p, d, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), y = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
            if (r || !m)_ += "<span class='ui-datepicker-month'>" + s[e] + "</span>"; else {
                for (l = n && n.getFullYear() === i, u = o && o.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!l || h >= n.getMonth()) && (!u || h <= o.getMonth()) && (_ += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + a[h] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!r && m && v ? "" : "&#xa0;")), !t.yearshtml)if (t.yearshtml = "", r || !v)b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (c = this._get(t, "yearRange").split(":"), p = (new Date).getFullYear(), d = function (t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? p + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? p : e
                }, f = d(c[0]), g = Math.max(f, d(c[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = o ? Math.min(g, o.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++)t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
            }
            return b += this._get(t, "yearSuffix"), y && (b += (!r && m && v ? "" : "&#xa0;") + _), b += "</div>"
        }, _adjustInstDate: function (t, e, i) {
            var n = t.drawYear + ("Y" === i ? e : 0), o = t.drawMonth + ("M" === i ? e : 0), r = Math.min(t.selectedDay, this._getDaysInMonth(n, o)) + ("D" === i ? e : 0), s = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, o, r)));
            t.selectedDay = s.getDate(), t.drawMonth = t.selectedMonth = s.getMonth(), t.drawYear = t.selectedYear = s.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        }, _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), o = i && i > e ? i : e;
            return n && o > n ? n : o
        }, _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        }, _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        }, _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        }, _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        }, _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        }, _canAdjustMonth: function (t, e, i, n) {
            var o = this._getNumberOfMonths(t), r = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : o[0] * o[1]), 1));
            return 0 > e && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(t, r)
        }, _isInRange: function (t, e) {
            var i, n, o = this._getMinMaxDate(t, "min"), r = this._getMinMaxDate(t, "max"), s = null, a = null, l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), s = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (s += n), i[1].match(/[+\-].*/) && (a += n)), (!o || e.getTime() >= o.getTime()) && (!r || e.getTime() <= r.getTime()) && (!s || e.getFullYear() >= s) && (!a || e.getFullYear() <= a)
        }, _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames")}
        }, _formatDate: function (t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var o = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), o, this._getFormatConfig(t))
        }}), t.fn.datepicker = function (e) {
            if (!this.length)return this;
            t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return"string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
    }(jQuery), /*!
 * jQuery UI Mouse 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 *
 * Depends:
 *	jquery.ui.widget.js
 */
    function (t) {
        var e = !1;
        t(document).mouseup(function () {
            e = !1
        }), t.widget("ui.mouse", {version: "1.10.3", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName,function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return!0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        }, _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        }, _mouseDown: function (i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this, o = 1 === i.which, r = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return o && !r && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return n._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return n._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        }, _mouseMove: function (e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        }, _mouseUp: function (e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        }, _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        }, _mouseDelayMet: function () {
            return this.mouseDelayMet
        }, _mouseStart: function () {
        }, _mouseDrag: function () {
        }, _mouseStop: function () {
        }, _mouseCapture: function () {
            return!0
        }})
    }(jQuery), /*!
 * jQuery UI Draggable 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
    function (t) {
        t.widget("ui.draggable", t.ui.mouse, {version: "1.10.3", widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null}, _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        }, _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        }, _mouseCapture: function (e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3}).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        }, _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, this.offset.scroll = !1, t.extend(this.offset, {click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        }, _mouseDrag: function (e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", e, n) === !1)return this._mouseUp({}), !1;
                this.position = n.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        }, _mouseStop: function (e) {
            var i = this, n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        }, _mouseUp: function (e) {
            return t("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        }, cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        }, _getHandle: function (e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        }, _createHelper: function (e) {
            var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        }, _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left"in e && (this.offset.click.left = e.left + this.margins.left), "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top"in e && (this.offset.click.top = e.top + this.margins.top), "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        }, _getParentOffset: function () {
            var e = this.offsetParent.offset();
            return"absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        }, _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return{top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            }
            return{top: 0, left: 0}
        }, _cacheMargins: function () {
            this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
        }, _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        }, _setContainment: function () {
            var e, i, n, o = this.options;
            return o.containment ? "window" === o.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === o.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : o.containment.constructor === Array ? (this.containment = o.containment, void 0) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), i = t(o.containment), n = i[0], n && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), void 0) : (this.containment = null, void 0)
        }, _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {top: o.scrollTop(), left: o.scrollLeft()}), {top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * n}
        }, _generatePosition: function (e) {
            var i, n, o, r, s = this.options, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = e.pageX, u = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {top: a.scrollTop(), left: a.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)), s.grid && (o = s.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, u = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - s.grid[1] : o + s.grid[1] : o, r = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, l = i ? r - this.offset.click.left >= i[0] || r - this.offset.click.left > i[2] ? r : r - this.offset.click.left >= i[0] ? r - s.grid[0] : r + s.grid[0] : r)), {top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)}
        }, _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        }, _trigger: function (e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, n)
        }, plugins: {}, _uiHash: function () {
            return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
        }}), t.ui.plugin.add("draggable", "connectToSortable", {start: function (e, i) {
            var n = t(this).data("ui-draggable"), o = n.options, r = t.extend({}, i, {item: n.element});
            n.sortables = [], t(o.connectToSortable).each(function () {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (n.sortables.push({instance: i, shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", e, r))
            })
        }, stop: function (e, i) {
            var n = t(this).data("ui-draggable"), o = t.extend({}, i, {item: n.element});
            t.each(n.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, o))
            })
        }, drag: function (e, i) {
            var n = t(this).data("ui-draggable"), o = this;
            t.each(n.sortables, function () {
                var r = !1, s = this;
                this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (r = !0, t.each(n.sortables, function () {
                    return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this !== s && this.instance._intersectsWith(this.instance.containerCache) && t.contains(s.instance.element[0], this.instance.element[0]) && (r = !1), r
                })), r ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
            })
        }}), t.ui.plugin.add("draggable", "cursor", {start: function () {
            var e = t("body"), i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        }, stop: function () {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }}), t.ui.plugin.add("draggable", "opacity", {start: function (e, i) {
            var n = t(i.helper), o = t(this).data("ui-draggable").options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
        }, stop: function (e, i) {
            var n = t(this).data("ui-draggable").options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }}), t.ui.plugin.add("draggable", "scroll", {start: function () {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        }, drag: function (e) {
            var i = t(this).data("ui-draggable"), n = i.options, o = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = o = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = o = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? o = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (o = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? o = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (o = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }}), t.ui.plugin.add("draggable", "snap", {start: function () {
            var e = t(this).data("ui-draggable"), i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
                var i = t(this), n = i.offset();
                this !== e.element[0] && e.snapElements.push({item: this, width: i.outerWidth(), height: i.outerHeight(), top: n.top, left: n.left})
            })
        }, drag: function (e, i) {
            var n, o, r, s, a, l, u, h, c, p, d = t(this).data("ui-draggable"), f = d.options, g = f.snapTolerance, m = i.offset.left, v = m + d.helperProportions.width, y = i.offset.top, b = y + d.helperProportions.height;
            for (c = d.snapElements.length - 1; c >= 0; c--)a = d.snapElements[c].left, l = a + d.snapElements[c].width, u = d.snapElements[c].top, h = u + d.snapElements[c].height, a - g > v || m > l + g || u - g > b || y > h + g || !t.contains(d.snapElements[c].item.ownerDocument, d.snapElements[c].item) ? (d.snapElements[c].snapping && d.options.snap.release && d.options.snap.release.call(d.element, e, t.extend(d._uiHash(), {snapItem: d.snapElements[c].item})), d.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(u - b) <= g, o = Math.abs(h - y) <= g, r = Math.abs(a - v) <= g, s = Math.abs(l - m) <= g, n && (i.position.top = d._convertPositionTo("relative", {top: u - d.helperProportions.height, left: 0}).top - d.margins.top), o && (i.position.top = d._convertPositionTo("relative", {top: h, left: 0}).top - d.margins.top), r && (i.position.left = d._convertPositionTo("relative", {top: 0, left: a - d.helperProportions.width}).left - d.margins.left), s && (i.position.left = d._convertPositionTo("relative", {top: 0, left: l}).left - d.margins.left)), p = n || o || r || s, "outer" !== f.snapMode && (n = Math.abs(u - y) <= g, o = Math.abs(h - b) <= g, r = Math.abs(a - m) <= g, s = Math.abs(l - v) <= g, n && (i.position.top = d._convertPositionTo("relative", {top: u, left: 0}).top - d.margins.top), o && (i.position.top = d._convertPositionTo("relative", {top: h - d.helperProportions.height, left: 0}).top - d.margins.top), r && (i.position.left = d._convertPositionTo("relative", {top: 0, left: a}).left - d.margins.left), s && (i.position.left = d._convertPositionTo("relative", {top: 0, left: l - d.helperProportions.width}).left - d.margins.left)), !d.snapElements[c].snapping && (n || o || r || s || p) && d.options.snap.snap && d.options.snap.snap.call(d.element, e, t.extend(d._uiHash(), {snapItem: d.snapElements[c].item})), d.snapElements[c].snapping = n || o || r || s || p)
        }}), t.ui.plugin.add("draggable", "stack", {start: function () {
            var e, i = this.data("ui-draggable").options, n = t.makeArray(t(i.stack)).sort(function (e, i) {
                return(parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            n.length && (e = parseInt(t(n[0]).css("zIndex"), 10) || 0, t(n).each(function (i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + n.length))
        }}), t.ui.plugin.add("draggable", "zIndex", {start: function (e, i) {
            var n = t(i.helper), o = t(this).data("ui-draggable").options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
        }, stop: function (e, i) {
            var n = t(this).data("ui-draggable").options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }})
    }(jQuery), /*!
 * jQuery UI Resizable 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
    function (t) {
        function e(t) {
            return parseInt(t, 10) || 0
        }

        function i(t) {
            return!isNaN(parseInt(t, 10))
        }

        t.widget("ui.resizable", t.ui.mouse, {version: "1.10.3", widgetEventPrefix: "resize", options: {alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null}, _create: function () {
            var e, i, n, o, r, s = this, a = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {_aspectRatio: !!a.aspectRatio, aspectRatio: a.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++)n = t.trim(e[i]), r = "ui-resizable-" + n, o = t("<div class='ui-resizable-handle " + r + "'></div>"), o.css({zIndex: a.zIndex}), "se" === n && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(o);
            this._renderAxis = function (e) {
                var i, n, o, r;
                e = e || this.element;
                for (i in this.handles)this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), r = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(o, r), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                s.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), s.axis = o && o[1] ? o[1] : "se")
            }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"), s._handles.show())
            }).mouseleave(function () {
                a.disabled || s.resizing || (t(this).addClass("ui-resizable-autohide"), s._handles.hide())
            })), this._mouseInit()
        }, _destroy: function () {
            this._mouseDestroy();
            var e, i = function (e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left")}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        }, _mouseCapture: function (e) {
            var i, n, o = !1;
            for (i in this.handles)n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (o = !0);
            return!this.options.disabled && o
        }, _mouseStart: function (i) {
            var n, o, r, s = this.options, a = this.element.position(), l = this.element;
            return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({position: "absolute", top: l.css("top"), left: l.css("left")}) : l.is(".ui-draggable") && l.css({position: "absolute", top: a.top, left: a.left}), this._renderProxy(), n = e(this.helper.css("left")), o = e(this.helper.css("top")), s.containment && (n += t(s.containment).scrollLeft() || 0, o += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: n, top: o}, this.size = this._helper ? {width: l.outerWidth(), height: l.outerHeight()} : {width: l.width(), height: l.height()}, this.originalSize = this._helper ? {width: l.outerWidth(), height: l.outerHeight()} : {width: l.width(), height: l.height()}, this.originalPosition = {left: n, top: o}, this.sizeDiff = {width: l.outerWidth() - l.width(), height: l.outerHeight() - l.height()}, this.originalMousePosition = {left: i.pageX, top: i.pageY}, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, r = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === r ? this.axis + "-resize" : r), l.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        }, _mouseDrag: function (e) {
            var i, n = this.helper, o = {}, r = this.originalMousePosition, s = this.axis, a = this.position.top, l = this.position.left, u = this.size.width, h = this.size.height, c = e.pageX - r.left || 0, p = e.pageY - r.top || 0, d = this._change[s];
            return d ? (i = d.apply(this, [e, c, p]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== a && (o.top = this.position.top + "px"), this.position.left !== l && (o.left = this.position.left + "px"), this.size.width !== u && (o.width = this.size.width + "px"), this.size.height !== h && (o.height = this.size.height + "px"), n.css(o), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(o) || this._trigger("resize", e, this.ui()), !1) : !1
        }, _mouseStop: function (e) {
            this.resizing = !1;
            var i, n, o, r, s, a, l, u = this.options, h = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), o = n && t.ui.hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, r = n ? 0 : h.sizeDiff.width, s = {width: h.helper.width() - r, height: h.helper.height() - o}, a = parseInt(h.element.css("left"), 10) + (h.position.left - h.originalPosition.left) || null, l = parseInt(h.element.css("top"), 10) + (h.position.top - h.originalPosition.top) || null, u.animate || this.element.css(t.extend(s, {top: l, left: a})), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !u.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        }, _updateVirtualBoundaries: function (t) {
            var e, n, o, r, s, a = this.options;
            s = {minWidth: i(a.minWidth) ? a.minWidth : 0, maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0, minHeight: i(a.minHeight) ? a.minHeight : 0, maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0}, (this._aspectRatio || t) && (e = s.minHeight * this.aspectRatio, o = s.minWidth / this.aspectRatio, n = s.maxHeight * this.aspectRatio, r = s.maxWidth / this.aspectRatio, e > s.minWidth && (s.minWidth = e), o > s.minHeight && (s.minHeight = o), n < s.maxWidth && (s.maxWidth = n), r < s.maxHeight && (s.maxHeight = r)), this._vBoundaries = s
        }, _updateCache: function (t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        }, _updateRatio: function (t) {
            var e = this.position, n = this.size, o = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === o && (t.left = e.left + (n.width - t.width), t.top = null), "nw" === o && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)), t
        }, _respectSize: function (t) {
            var e = this._vBoundaries, n = this.axis, o = i(t.width) && e.maxWidth && e.maxWidth < t.width, r = i(t.height) && e.maxHeight && e.maxHeight < t.height, s = i(t.width) && e.minWidth && e.minWidth > t.width, a = i(t.height) && e.minHeight && e.minHeight > t.height, l = this.originalPosition.left + this.originalSize.width, u = this.position.top + this.size.height, h = /sw|nw|w/.test(n), c = /nw|ne|n/.test(n);
            return s && (t.width = e.minWidth), a && (t.height = e.minHeight), o && (t.width = e.maxWidth), r && (t.height = e.maxHeight), s && h && (t.left = l - e.minWidth), o && h && (t.left = l - e.maxWidth), a && c && (t.top = u - e.minHeight), r && c && (t.top = u - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        }, _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, n, o, r = this.helper || this.element;
                for (t = 0; t < this._proportionallyResizeElements.length; t++) {
                    if (o = this._proportionallyResizeElements[t], !this.borderDif)for (this.borderDif = [], i = [o.css("borderTopWidth"), o.css("borderRightWidth"), o.css("borderBottomWidth"), o.css("borderLeftWidth")], n = [o.css("paddingTop"), o.css("paddingRight"), o.css("paddingBottom"), o.css("paddingLeft")], e = 0; e < i.length; e++)this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(n[e], 10) || 0);
                    o.css({height: r.height() - this.borderDif[0] - this.borderDif[2] || 0, width: r.width() - this.borderDif[1] - this.borderDif[3] || 0})
                }
            }
        }, _renderProxy: function () {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        }, _change: {e: function (t, e) {
            return{width: this.originalSize.width + e}
        }, w: function (t, e) {
            var i = this.originalSize, n = this.originalPosition;
            return{left: n.left + e, width: i.width - e}
        }, n: function (t, e, i) {
            var n = this.originalSize, o = this.originalPosition;
            return{top: o.top + i, height: n.height - i}
        }, s: function (t, e, i) {
            return{height: this.originalSize.height + i}
        }, se: function (e, i, n) {
            return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
        }, sw: function (e, i, n) {
            return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
        }, ne: function (e, i, n) {
            return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
        }, nw: function (e, i, n) {
            return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
        }}, _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        }, plugins: {}, ui: function () {
            return{originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
        }}), t.ui.plugin.add("resizable", "animate", {stop: function (e) {
            var i = t(this).data("ui-resizable"), n = i.options, o = i._proportionallyResizeElements, r = o.length && /textarea/i.test(o[0].nodeName), s = r && t.ui.hasScroll(o[0], "left") ? 0 : i.sizeDiff.height, a = r ? 0 : i.sizeDiff.width, l = {width: i.size.width - a, height: i.size.height - s}, u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, h && u ? {top: h, left: u} : {}), {duration: n.animateDuration, easing: n.animateEasing, step: function () {
                var n = {width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10)};
                o && o.length && t(o[0]).css({width: n.width, height: n.height}), i._updateCache(n), i._propagate("resize", e)
            }})
        }}), t.ui.plugin.add("resizable", "containment", {start: function () {
            var i, n, o, r, s, a, l, u = t(this).data("ui-resizable"), h = u.options, c = u.element, p = h.containment, d = p instanceof t ? p.get(0) : /parent/.test(p) ? c.parent().get(0) : p;
            d && (u.containerElement = t(d), /document/.test(p) || p === document ? (u.containerOffset = {left: 0, top: 0}, u.containerPosition = {left: 0, top: 0}, u.parentData = {element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight}) : (i = t(d), n = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, o) {
                n[t] = e(i.css("padding" + o))
            }), u.containerOffset = i.offset(), u.containerPosition = i.position(), u.containerSize = {height: i.innerHeight() - n[3], width: i.innerWidth() - n[1]}, o = u.containerOffset, r = u.containerSize.height, s = u.containerSize.width, a = t.ui.hasScroll(d, "left") ? d.scrollWidth : s, l = t.ui.hasScroll(d) ? d.scrollHeight : r, u.parentData = {element: d, left: o.left, top: o.top, width: a, height: l}))
        }, resize: function (e) {
            var i, n, o, r, s = t(this).data("ui-resizable"), a = s.options, l = s.containerOffset, u = s.position, h = s._aspectRatio || e.shiftKey, c = {top: 0, left: 0}, p = s.containerElement;
            p[0] !== document && /static/.test(p.css("position")) && (c = l), u.left < (s._helper ? l.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - l.left : s.position.left - c.left), h && (s.size.height = s.size.width / s.aspectRatio), s.position.left = a.helper ? l.left : 0), u.top < (s._helper ? l.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - l.top : s.position.top), h && (s.size.width = s.size.height * s.aspectRatio), s.position.top = s._helper ? l.top : 0), s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top, i = Math.abs((s._helper ? s.offset.left - c.left : s.offset.left - c.left) + s.sizeDiff.width), n = Math.abs((s._helper ? s.offset.top - c.top : s.offset.top - l.top) + s.sizeDiff.height), o = s.containerElement.get(0) === s.element.parent().get(0), r = /relative|absolute/.test(s.containerElement.css("position")), o && r && (i -= s.parentData.left), i + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - i, h && (s.size.height = s.size.width / s.aspectRatio)), n + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - n, h && (s.size.width = s.size.height * s.aspectRatio))
        }, stop: function () {
            var e = t(this).data("ui-resizable"), i = e.options, n = e.containerOffset, o = e.containerPosition, r = e.containerElement, s = t(e.helper), a = s.offset(), l = s.outerWidth() - e.sizeDiff.width, u = s.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(r.css("position")) && t(this).css({left: a.left - o.left - n.left, width: l, height: u}), e._helper && !i.animate && /static/.test(r.css("position")) && t(this).css({left: a.left - o.left - n.left, width: l, height: u})
        }}), t.ui.plugin.add("resizable", "alsoResize", {start: function () {
            var e = t(this).data("ui-resizable"), i = e.options, n = function (e) {
                t(e).each(function () {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {width: parseInt(e.width(), 10), height: parseInt(e.height(), 10), left: parseInt(e.css("left"), 10), top: parseInt(e.css("top"), 10)})
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function (t) {
                n(t)
            })
        }, resize: function (e, i) {
            var n = t(this).data("ui-resizable"), o = n.options, r = n.originalSize, s = n.originalPosition, a = {height: n.size.height - r.height || 0, width: n.size.width - r.width || 0, top: n.position.top - s.top || 0, left: n.position.left - s.left || 0}, l = function (e, n) {
                t(e).each(function () {
                    var e = t(this), o = t(this).data("ui-resizable-alsoresize"), r = {}, s = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(s, function (t, e) {
                        var i = (o[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (r[e] = i || null)
                    }), e.css(r)
                })
            };
            "object" != typeof o.alsoResize || o.alsoResize.nodeType ? l(o.alsoResize) : t.each(o.alsoResize, function (t, e) {
                l(t, e)
            })
        }, stop: function () {
            t(this).removeData("resizable-alsoresize")
        }}), t.ui.plugin.add("resizable", "ghost", {start: function () {
            var e = t(this).data("ui-resizable"), i = e.options, n = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({opacity: .25, display: "block", position: "relative", height: n.height, width: n.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        }, resize: function () {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
        }, stop: function () {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }}), t.ui.plugin.add("resizable", "grid", {resize: function () {
            var e = t(this).data("ui-resizable"), i = e.options, n = e.size, o = e.originalSize, r = e.originalPosition, s = e.axis, a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, l = a[0] || 1, u = a[1] || 1, h = Math.round((n.width - o.width) / l) * l, c = Math.round((n.height - o.height) / u) * u, p = o.width + h, d = o.height + c, f = i.maxWidth && i.maxWidth < p, g = i.maxHeight && i.maxHeight < d, m = i.minWidth && i.minWidth > p, v = i.minHeight && i.minHeight > d;
            i.grid = a, m && (p += l), v && (d += u), f && (p -= l), g && (d -= u), /^(se|s|e)$/.test(s) ? (e.size.width = p, e.size.height = d) : /^(ne)$/.test(s) ? (e.size.width = p, e.size.height = d, e.position.top = r.top - c) : /^(sw)$/.test(s) ? (e.size.width = p, e.size.height = d, e.position.left = r.left - h) : (e.size.width = p, e.size.height = d, e.position.top = r.top - c, e.position.left = r.left - h)
        }})
    }(jQuery), /*!
 * jQuery UI Dialog 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
    function (t) {
        var e = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0}, i = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
        t.widget("ui.dialog", {version: "1.10.3", options: {appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: {my: "center", at: "center", of: window, collision: "fit", using: function (e) {
            var i = t(this).css(e).offset().top;
            0 > i && t(this).css("top", e.top - i)
        }}, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null}, _create: function () {
            this.originalCss = {display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height}, this.originalPosition = {parent: this.element.parent(), index: this.element.parent().children().index(this.element)}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
        }, _init: function () {
            this.options.autoOpen && this.open()
        }, _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        }, _destroy: function () {
            var t, e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        }, widget: function () {
            return this.uiDialog
        }, disable: t.noop, enable: t.noop, close: function (e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                i._trigger("close", e)
            }))
        }, isOpen: function () {
            return this._isOpen
        }, moveToTop: function () {
            this._moveToTop()
        }, _moveToTop: function (t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t), i
        }, open: function () {
            var e = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus")
            }), this._trigger("open"), void 0)
        }, _focusTabbable: function () {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        }, _keepFocus: function (e) {
            function i() {
                var e = this.document[0].activeElement, i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }

            e.preventDefault(), i.call(this), this._delay(i)
        }, _createWrapper: function () {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({tabIndex: -1, role: "dialog"}).appendTo(this._appendTo()), this._on(this.uiDialog, {keydown: function (e) {
                if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)return e.preventDefault(), this.close(e), void 0;
                if (e.keyCode === t.ui.keyCode.TAB) {
                    var i = this.uiDialog.find(":tabbable"), n = i.filter(":first"), o = i.filter(":last");
                    e.target !== o[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (o.focus(1), e.preventDefault()) : (n.focus(1), e.preventDefault())
                }
            }, mousedown: function (t) {
                this._moveToTop(t) && this._focusTabbable()
            }}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        }, _createTitlebar: function () {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {mousedown: function (e) {
                t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
            }}), this.uiDialogTitlebarClose = t("<button></button>").button({label: this.options.closeText, icons: {primary: "ui-icon-closethick"}, text: !1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {click: function (t) {
                t.preventDefault(), this.close(t)
            }}), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({"aria-labelledby": e.attr("id")})
        }, _title: function (t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        }, _createButtonPane: function () {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        }, _createButtons: function () {
            var e = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (t.each(i, function (i, n) {
                var o, r;
                n = t.isFunction(n) ? {click: n, text: i} : n, n = t.extend({type: "button"}, n), o = n.click, n.click = function () {
                    o.apply(e.element[0], arguments)
                }, r = {icons: n.icons, text: n.showText}, delete n.icons, delete n.showText, t("<button></button>", n).button(r).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        }, _makeDraggable: function () {
            function e(t) {
                return{position: t.position, offset: t.offset}
            }

            var i = this, n = this.options;
            this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (n, o) {
                t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(o))
            }, drag: function (t, n) {
                i._trigger("drag", t, e(n))
            }, stop: function (o, r) {
                n.position = [r.position.left - i.document.scrollLeft(), r.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", o, e(r))
            }})
        }, _makeResizable: function () {
            function e(t) {
                return{originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size}
            }

            var i = this, n = this.options, o = n.resizable, r = this.uiDialog.css("position"), s = "string" == typeof o ? o : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: n.maxWidth, maxHeight: n.maxHeight, minWidth: n.minWidth, minHeight: this._minHeight(), handles: s, start: function (n, o) {
                t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(o))
            }, resize: function (t, n) {
                i._trigger("resize", t, e(n))
            }, stop: function (o, r) {
                n.height = t(this).height(), n.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", o, e(r))
            }}).css("position", r)
        }, _minHeight: function () {
            var t = this.options;
            return"auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        }, _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        }, _setOptions: function (n) {
            var o = this, r = !1, s = {};
            t.each(n, function (t, n) {
                o._setOption(t, n), t in e && (r = !0), t in i && (s[t] = n)
            }), r && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        }, _setOption: function (t, e) {
            var i, n, o = this.uiDialog;
            "dialogClass" === t && o.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({label: "" + e}), "draggable" === t && (i = o.is(":data(ui-draggable)"), i && !e && o.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = o.is(":data(ui-resizable)"), n && !e && o.resizable("destroy"), n && "string" == typeof e && o.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        }, _size: function () {
            var t, e, i, n = this.options;
            this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0}), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({height: "auto", width: n.width}).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({minHeight: e, maxHeight: i, height: "auto"}) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }, _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var e = t(this);
                return t("<div>").css({position: "absolute", width: e.outerWidth(), height: e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]
            })
        }, _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        }, _allowInteraction: function (e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        }, _createOverlay: function () {
            if (this.options.modal) {
                var e = this, i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function () {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (n) {
                        e._allowInteraction(n) || (n.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), t.ui.dialog.overlayInstances++
            }
        }, _destroyOverlay: function () {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }}), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {_position: function () {
            var e, i = this.options.position, n = [], o = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0"in i) && (n = i.split ? i.split(" ") : [i[0], i[1]], 1 === n.length && (n[1] = n[0]), t.each(["left", "top"], function (t, e) {
                +n[t] === n[t] && (o[t] = n[t], n[t] = e)
            }), i = {my: n[0] + (o[0] < 0 ? o[0] : "+" + o[0]) + " " + n[1] + (o[1] < 0 ? o[1] : "+" + o[1]), at: n.join(" ")}), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
        }})
    }(jQuery), /*!
 * jQuery UI Droppable 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/droppable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
    function (t) {
        function e(t, e, i) {
            return t > e && e + i > t
        }

        t.widget("ui.droppable", {version: "1.10.3", widgetEventPrefix: "drop", options: {accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null}, _create: function () {
            var e = this.options, i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight}, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        }, _destroy: function () {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; e < i.length; e++)i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        }, _setOption: function (e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        }, _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        }, _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        }, _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        }, _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        }, _drop: function (e, i) {
            var n = i || t.ui.ddmanager.current, o = !1;
            return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var e = t.data(this, "ui-droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope === n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {offset: e.element.offset()}), e.options.tolerance) ? (o = !0, !1) : void 0
            }), o ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
        }, ui: function (t) {
            return{draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs}
        }}), t.ui.intersect = function (t, i, n) {
            if (!i.offset)return!1;
            var o, r, s = (t.positionAbs || t.position.absolute).left, a = s + t.helperProportions.width, l = (t.positionAbs || t.position.absolute).top, u = l + t.helperProportions.height, h = i.offset.left, c = h + i.proportions.width, p = i.offset.top, d = p + i.proportions.height;
            switch (n) {
                case"fit":
                    return s >= h && c >= a && l >= p && d >= u;
                case"intersect":
                    return h < s + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && p < l + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < d;
                case"pointer":
                    return o = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, r = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(r, p, i.proportions.height) && e(o, h, i.proportions.width);
                case"touch":
                    return(l >= p && d >= l || u >= p && d >= u || p > l && u > d) && (s >= h && c >= s || a >= h && c >= a || h > s && a > c);
                default:
                    return!1
            }
        }, t.ui.ddmanager = {current: null, droppables: {"default": []}, prepareOffsets: function (e, i) {
            var n, o, r = t.ui.ddmanager.droppables[e.options.scope] || [], s = i ? i.type : null, a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t:for (n = 0; n < r.length; n++)if (!(r[n].options.disabled || e && !r[n].accept.call(r[n].element[0], e.currentItem || e.element))) {
                for (o = 0; o < a.length; o++)if (a[o] === r[n].element[0]) {
                    r[n].proportions.height = 0;
                    continue t
                }
                r[n].visible = "none" !== r[n].element.css("display"), r[n].visible && ("mousedown" === s && r[n]._activate.call(r[n], i), r[n].offset = r[n].element.offset(), r[n].proportions = {width: r[n].element[0].offsetWidth, height: r[n].element[0].offsetHeight})
            }
        }, drop: function (e, i) {
            var n = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), n
        }, dragStart: function (e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        }, drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, o, r, s = t.ui.intersect(e, this, this.options.tolerance), a = !s && this.isover ? "isout" : s && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (o = this.options.scope, r = this.element.parents(":data(ui-droppable)").filter(function () {
                        return t.data(this, "ui-droppable").options.scope === o
                    }), r.length && (n = t.data(r[0], "ui-droppable"), n.greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        }, dragStop: function (e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }}
    }(jQuery), /*!
 * jQuery UI Effects 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
    function (t, e) {
        var i = "ui-effects-";
        t.effects = {effect: {}}, /*!
         * jQuery Color Animations v2.1.2
         * https://github.com/jquery/jquery-color
         *
         * Copyright 2013 jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * Date: Wed Jan 16 08:47:09 2013 -0600
         */
            function (t, e) {
                function i(t, e, i) {
                    var n = c[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                }

                function n(e) {
                    var i = u(), n = i._rgba = [];
                    return e = e.toLowerCase(), f(l, function (t, o) {
                        var r, s = o.re.exec(e), a = s && o.parse(s), l = o.space || "rgba";
                        return a ? (r = i[l](a), i[h[l].cache] = r[h[l].cache], n = i._rgba = r._rgba, !1) : void 0
                    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, r.transparent), i) : r[e]
                }

                function o(t, e, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }

                var r, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", a = /^([\-+])=\s*(\d+\.?\d*)/, l = [
                    {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                        return[t[1], t[2], t[3], t[4]]
                    }},
                    {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                        return[2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }},
                    {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                        return[parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }},
                    {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                        return[parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }},
                    {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) {
                        return[t[1], t[2] / 100, t[3] / 100, t[4]]
                    }}
                ], u = t.Color = function (e, i, n, o) {
                    return new t.Color.fn.parse(e, i, n, o)
                }, h = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, c = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, p = u.support = {}, d = t("<p>")[0], f = t.each;
                d.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = d.style.backgroundColor.indexOf("rgba") > -1, f(h, function (t, e) {
                    e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
                }), u.fn = t.extend(u.prototype, {parse: function (o, s, a, l) {
                    if (o === e)return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = t(o).css(s), s = e);
                    var c = this, p = t.type(o), d = this._rgba = [];
                    return s !== e && (o = [o, s, a, l], p = "array"), "string" === p ? this.parse(n(o) || r._default) : "array" === p ? (f(h.rgba.props, function (t, e) {
                        d[e.idx] = i(o[e.idx], e)
                    }), this) : "object" === p ? (o instanceof u ? f(h, function (t, e) {
                        o[e.cache] && (c[e.cache] = o[e.cache].slice())
                    }) : f(h, function (e, n) {
                        var r = n.cache;
                        f(n.props, function (t, e) {
                            if (!c[r] && n.to) {
                                if ("alpha" === t || null == o[t])return;
                                c[r] = n.to(c._rgba)
                            }
                            c[r][e.idx] = i(o[t], e, !0)
                        }), c[r] && t.inArray(null, c[r].slice(0, 3)) < 0 && (c[r][3] = 1, n.from && (c._rgba = n.from(c[r])))
                    }), this) : void 0
                }, is: function (t) {
                    var e = u(t), i = !0, n = this;
                    return f(h, function (t, o) {
                        var r, s = e[o.cache];
                        return s && (r = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, e) {
                            return null != s[e.idx] ? i = s[e.idx] === r[e.idx] : void 0
                        })), i
                    }), i
                }, _space: function () {
                    var t = [], e = this;
                    return f(h, function (i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                }, transition: function (t, e) {
                    var n = u(t), o = n._space(), r = h[o], s = 0 === this.alpha() ? u("transparent") : this, a = s[r.cache] || r.to(s._rgba), l = a.slice();
                    return n = n[r.cache], f(r.props, function (t, o) {
                        var r = o.idx, s = a[r], u = n[r], h = c[o.type] || {};
                        null !== u && (null === s ? l[r] = u : (h.mod && (u - s > h.mod / 2 ? s += h.mod : s - u > h.mod / 2 && (s -= h.mod)), l[r] = i((u - s) * e + s, o)))
                    }), this[o](l)
                }, blend: function (e) {
                    if (1 === this._rgba[3])return this;
                    var i = this._rgba.slice(), n = i.pop(), o = u(e)._rgba;
                    return u(t.map(i, function (t, e) {
                        return(1 - n) * o[e] + n * t
                    }))
                }, toRgbaString: function () {
                    var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                        return null == t ? e > 2 ? 1 : 0 : t
                    });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                }, toHslaString: function () {
                    var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                        return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                    });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                }, toHexString: function (e) {
                    var i = this._rgba.slice(), n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i,function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                }, toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }}), u.fn.parse.prototype = u.fn, h.hsla.to = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2])return[null, null, null, t[3]];
                    var e, i, n = t[0] / 255, o = t[1] / 255, r = t[2] / 255, s = t[3], a = Math.max(n, o, r), l = Math.min(n, o, r), u = a - l, h = a + l, c = .5 * h;
                    return e = l === a ? 0 : n === a ? 60 * (o - r) / u + 360 : o === a ? 60 * (r - n) / u + 120 : 60 * (n - o) / u + 240, i = 0 === u ? 0 : .5 >= c ? u / h : u / (2 - h), [Math.round(e) % 360, i, c, null == s ? 1 : s]
                }, h.hsla.from = function (t) {
                    if (null == t[0] || null == t[1] || null == t[2])return[null, null, null, t[3]];
                    var e = t[0] / 360, i = t[1], n = t[2], r = t[3], s = .5 >= n ? n * (1 + i) : n + i - n * i, a = 2 * n - s;
                    return[Math.round(255 * o(a, s, e + 1 / 3)), Math.round(255 * o(a, s, e)), Math.round(255 * o(a, s, e - 1 / 3)), r]
                }, f(h, function (n, o) {
                    var r = o.props, s = o.cache, l = o.to, h = o.from;
                    u.fn[n] = function (n) {
                        if (l && !this[s] && (this[s] = l(this._rgba)), n === e)return this[s].slice();
                        var o, a = t.type(n), c = "array" === a || "object" === a ? n : arguments, p = this[s].slice();
                        return f(r, function (t, e) {
                            var n = c["object" === a ? t : e.idx];
                            null == n && (n = p[e.idx]), p[e.idx] = i(n, e)
                        }), h ? (o = u(h(p)), o[s] = p, o) : u(p)
                    }, f(r, function (e, i) {
                        u.fn[e] || (u.fn[e] = function (o) {
                            var r, s = t.type(o), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n, u = this[l](), h = u[i.idx];
                            return"undefined" === s ? h : ("function" === s && (o = o.call(this, h), s = t.type(o)), null == o && i.empty ? this : ("string" === s && (r = a.exec(o), r && (o = h + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), u[i.idx] = o, this[l](u)))
                        })
                    })
                }), u.hook = function (e) {
                    var i = e.split(" ");
                    f(i, function (e, i) {
                        t.cssHooks[i] = {set: function (e, o) {
                            var r, s, a = "";
                            if ("transparent" !== o && ("string" !== t.type(o) || (r = n(o)))) {
                                if (o = u(r || o), !p.rgba && 1 !== o._rgba[3]) {
                                    for (s = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && s && s.style;)try {
                                        a = t.css(s, "backgroundColor"), s = s.parentNode
                                    } catch (l) {
                                    }
                                    o = o.blend(a && "transparent" !== a ? a : "_default")
                                }
                                o = o.toRgbaString()
                            }
                            try {
                                e.style[i] = o
                            } catch (l) {
                            }
                        }}, t.fx.step[i] = function (e) {
                            e.colorInit || (e.start = u(e.elem, i), e.end = u(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, u.hook(s), t.cssHooks.borderColor = {expand: function (t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }}, r = t.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
            }(jQuery), function () {
            function i(e) {
                var i, n, o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, r = {};
                if (o && o.length && o[0] && o[o[0]])for (n = o.length; n--;)i = o[n], "string" == typeof o[i] && (r[t.camelCase(i)] = o[i]); else for (i in o)"string" == typeof o[i] && (r[i] = o[i]);
                return r
            }

            function n(e, i) {
                var n, o, s = {};
                for (n in i)o = i[n], e[n] !== o && (r[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (s[n] = o));
                return s
            }

            var o = ["add", "remove", "toggle"], r = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                t.fx.step[i] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function (e, r, s, a) {
                var l = t.speed(r, s, a);
                return this.queue(function () {
                    var r, s = t(this), a = s.attr("class") || "", u = l.children ? s.find("*").addBack() : s;
                    u = u.map(function () {
                        var e = t(this);
                        return{el: e, start: i(this)}
                    }), r = function () {
                        t.each(o, function (t, i) {
                            e[i] && s[i + "Class"](e[i])
                        })
                    }, r(), u = u.map(function () {
                        return this.end = i(this.el[0]), this.diff = n(this.start, this.end), this
                    }), s.attr("class", a), u = u.map(function () {
                        var e = this, i = t.Deferred(), n = t.extend({}, l, {queue: !1, complete: function () {
                            i.resolve(e)
                        }});
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, u.get()).done(function () {
                        r(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(s[0])
                    })
                })
            }, t.fn.extend({addClass: function (e) {
                return function (i, n, o, r) {
                    return n ? t.effects.animateClass.call(this, {add: i}, n, o, r) : e.apply(this, arguments)
                }
            }(t.fn.addClass), removeClass: function (e) {
                return function (i, n, o, r) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, n, o, r) : e.apply(this, arguments)
                }
            }(t.fn.removeClass), toggleClass: function (i) {
                return function (n, o, r, s, a) {
                    return"boolean" == typeof o || o === e ? r ? t.effects.animateClass.call(this, o ? {add: n} : {remove: n}, r, s, a) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: n}, o, r, s)
                }
            }(t.fn.toggleClass), switchClass: function (e, i, n, o, r) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, n, o, r)
            }})
        }(), function () {
            function n(e, i, n, o) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (o = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (o = n, n = i, i = {}), t.isFunction(n) && (o = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = o || i.complete, e
            }

            function o(e) {
                return!e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }

            t.extend(t.effects, {version: "1.10.3", save: function (t, e) {
                for (var n = 0; n < e.length; n++)null !== e[n] && t.data(i + e[n], t[0].style[e[n]])
            }, restore: function (t, n) {
                var o, r;
                for (r = 0; r < n.length; r++)null !== n[r] && (o = t.data(i + n[r]), o === e && (o = ""), t.css(n[r], o))
            }, setMode: function (t, e) {
                return"toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, getBaseline: function (t, e) {
                var i, n;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        n = 0;
                        break;
                    case"center":
                        n = .5;
                        break;
                    case"right":
                        n = 1;
                        break;
                    default:
                        n = t[1] / e.width
                }
                return{x: n, y: i}
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper"))return e.parent();
                var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")}, n = t("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), o = {width: e.width(), height: e.height()}, r = document.activeElement;
                try {
                    r.id
                } catch (s) {
                    r = document.body
                }
                return e.wrap(n), (e[0] === r || t.contains(e[0], r)) && t(r).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {position: e.css("position"), zIndex: e.css("z-index")}), t.each(["top", "left", "bottom", "right"], function (t, n) {
                    i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(o), n.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
            }, setTransition: function (e, i, n, o) {
                return o = o || {}, t.each(i, function (t, i) {
                    var r = e.cssUnit(i);
                    r[0] > 0 && (o[i] = r[0] * n + r[1])
                }), o
            }}), t.fn.extend({effect: function () {
                function e(e) {
                    function n() {
                        t.isFunction(r) && r.call(o[0]), t.isFunction(e) && e()
                    }

                    var o = t(this), r = i.complete, a = i.mode;
                    (o.is(":hidden") ? "hide" === a : "show" === a) ? (o[a](), n()) : s.call(o[0], i, n)
                }

                var i = n.apply(this, arguments), o = i.mode, r = i.queue, s = t.effects.effect[i.effect];
                return t.fx.off || !s ? o ? this[o](i.duration, i.complete) : this.each(function () {
                    i.complete && i.complete.call(this)
                }) : r === !1 ? this.each(e) : this.queue(r || "fx", e)
            }, show: function (t) {
                return function (e) {
                    if (o(e))return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(t.fn.show), hide: function (t) {
                return function (e) {
                    if (o(e))return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(t.fn.hide), toggle: function (t) {
                return function (e) {
                    if (o(e) || "boolean" == typeof e)return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(t.fn.toggle), cssUnit: function (e) {
                var i = this.css(e), n = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                }), n
            }})
        }(), function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }}), t.each(e, function (e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
    }(jQuery), /*!
 * jQuery UI Effects Blind 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
        t.effects.effect.blind = function (n, o) {
            var r, s, a, l = t(this), u = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(l, n.mode || "hide"), c = n.direction || "up", p = e.test(c), d = p ? "height" : "width", f = p ? "top" : "left", g = i.test(c), m = {}, v = "show" === h;
            l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), u) : t.effects.save(l, u), l.show(), r = t.effects.createWrapper(l).css({overflow: "hidden"}), s = r[d](), a = parseFloat(r.css(f)) || 0, m[d] = v ? s : 0, g || (l.css(p ? "bottom" : "right", 0).css(p ? "top" : "left", "auto").css({position: "absolute"}), m[f] = v ? a : s + a), v && (r.css(d, 0), g || r.css(f, a + s)), r.animate(m, {duration: n.duration, easing: n.easing, queue: !1, complete: function () {
                "hide" === h && l.hide(), t.effects.restore(l, u), t.effects.removeWrapper(l), o()
            }})
        }
    }(jQuery), /*!
 * jQuery UI Effects Bounce 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.bounce = function (e, i) {
            var n, o, r, s = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(s, e.mode || "effect"), u = "hide" === l, h = "show" === l, c = e.direction || "up", p = e.distance, d = e.times || 5, f = 2 * d + (h || u ? 1 : 0), g = e.duration / f, m = e.easing, v = "up" === c || "down" === c ? "top" : "left", y = "up" === c || "left" === c, b = s.queue(), _ = b.length;
            for ((h || u) && a.push("opacity"), t.effects.save(s, a), s.show(), t.effects.createWrapper(s), p || (p = s["top" === v ? "outerHeight" : "outerWidth"]() / 3), h && (r = {opacity: 1}, r[v] = 0, s.css("opacity", 0).css(v, y ? 2 * -p : 2 * p).animate(r, g, m)), u && (p /= Math.pow(2, d - 1)), r = {}, r[v] = 0, n = 0; d > n; n++)o = {}, o[v] = (y ? "-=" : "+=") + p, s.animate(o, g, m).animate(r, g, m), p = u ? 2 * p : p / 2;
            u && (o = {opacity: 0}, o[v] = (y ? "-=" : "+=") + p, s.animate(o, g, m)), s.queue(function () {
                u && s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), i()
            }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), s.dequeue()
        }
    }(jQuery), /*!
 * jQuery UI Effects Clip 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.clip = function (e, i) {
            var n, o, r, s = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(s, e.mode || "hide"), u = "show" === l, h = e.direction || "vertical", c = "vertical" === h, p = c ? "height" : "width", d = c ? "top" : "left", f = {};
            t.effects.save(s, a), s.show(), n = t.effects.createWrapper(s).css({overflow: "hidden"}), o = "IMG" === s[0].tagName ? n : s, r = o[p](), u && (o.css(p, 0), o.css(d, r / 2)), f[p] = u ? r : 0, f[d] = u ? 0 : r / 2, o.animate(f, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                u || s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), i()
            }})
        }
    }(jQuery), /*!
 * jQuery UI Effects Drop 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.drop = function (e, i) {
            var n, o = t(this), r = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], s = t.effects.setMode(o, e.mode || "hide"), a = "show" === s, l = e.direction || "left", u = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l ? "pos" : "neg", c = {opacity: a ? 1 : 0};
            t.effects.save(o, r), o.show(), t.effects.createWrapper(o), n = e.distance || o["top" === u ? "outerHeight" : "outerWidth"](!0) / 2, a && o.css("opacity", 0).css(u, "pos" === h ? -n : n), c[u] = (a ? "pos" === h ? "+=" : "-=" : "pos" === h ? "-=" : "+=") + n, o.animate(c, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                "hide" === s && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }})
        }
    }(jQuery), /*!
 * jQuery UI Effects Explode 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.explode = function (e, i) {
            function n() {
                b.push(this), b.length === c * p && o()
            }

            function o() {
                d.css({visibility: "visible"}), t(b).remove(), g || d.hide(), i()
            }

            var r, s, a, l, u, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, p = c, d = t(this), f = t.effects.setMode(d, e.mode || "hide"), g = "show" === f, m = d.show().css("visibility", "hidden").offset(), v = Math.ceil(d.outerWidth() / p), y = Math.ceil(d.outerHeight() / c), b = [];
            for (r = 0; c > r; r++)for (l = m.top + r * y, h = r - (c - 1) / 2, s = 0; p > s; s++)a = m.left + s * v, u = s - (p - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -s * v, top: -r * y}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: v, height: y, left: a + (g ? u * v : 0), top: l + (g ? h * y : 0), opacity: g ? 0 : 1}).animate({left: a + (g ? 0 : u * v), top: l + (g ? 0 : h * y), opacity: g ? 1 : 0}, e.duration || 500, e.easing, n)
        }
    }(jQuery), /*!
 * jQuery UI Effects Fade 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.fade = function (e, i) {
            var n = t(this), o = t.effects.setMode(n, e.mode || "toggle");
            n.animate({opacity: o}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
        }
    }(jQuery), /*!
 * jQuery UI Effects Fold 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.fold = function (e, i) {
            var n, o, r = t(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], a = t.effects.setMode(r, e.mode || "hide"), l = "show" === a, u = "hide" === a, h = e.size || 15, c = /([0-9]+)%/.exec(h), p = !!e.horizFirst, d = l !== p, f = d ? ["width", "height"] : ["height", "width"], g = e.duration / 2, m = {}, v = {};
            t.effects.save(r, s), r.show(), n = t.effects.createWrapper(r).css({overflow: "hidden"}), o = d ? [n.width(), n.height()] : [n.height(), n.width()], c && (h = parseInt(c[1], 10) / 100 * o[u ? 0 : 1]), l && n.css(p ? {height: 0, width: h} : {height: h, width: 0}), m[f[0]] = l ? o[0] : h, v[f[1]] = l ? o[1] : 0, n.animate(m, g, e.easing).animate(v, g, e.easing, function () {
                u && r.hide(), t.effects.restore(r, s), t.effects.removeWrapper(r), i()
            })
        }
    }(jQuery), /*!
 * jQuery UI Effects Highlight 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.highlight = function (e, i) {
            var n = t(this), o = ["backgroundImage", "backgroundColor", "opacity"], r = t.effects.setMode(n, e.mode || "show"), s = {backgroundColor: n.css("backgroundColor")};
            "hide" === r && (s.opacity = 0), t.effects.save(n, o), n.show().css({backgroundImage: "none", backgroundColor: e.color || "#ffff99"}).animate(s, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                "hide" === r && n.hide(), t.effects.restore(n, o), i()
            }})
        }
    }(jQuery), /*!
 * jQuery UI Effects Pulsate 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.pulsate = function (e, i) {
            var n, o = t(this), r = t.effects.setMode(o, e.mode || "show"), s = "show" === r, a = "hide" === r, l = s || "hide" === r, u = 2 * (e.times || 5) + (l ? 1 : 0), h = e.duration / u, c = 0, p = o.queue(), d = p.length;
            for ((s || !o.is(":visible")) && (o.css("opacity", 0).show(), c = 1), n = 1; u > n; n++)o.animate({opacity: c}, h, e.easing), c = 1 - c;
            o.animate({opacity: c}, h, e.easing), o.queue(function () {
                a && o.hide(), i()
            }), d > 1 && p.splice.apply(p, [1, 0].concat(p.splice(d, u + 1))), o.dequeue()
        }
    }(jQuery), /*!
 * jQuery UI Effects Scale 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.puff = function (e, i) {
            var n = t(this), o = t.effects.setMode(n, e.mode || "hide"), r = "hide" === o, s = parseInt(e.percent, 10) || 150, a = s / 100, l = {height: n.height(), width: n.width(), outerHeight: n.outerHeight(), outerWidth: n.outerWidth()};
            t.extend(e, {effect: "scale", queue: !1, fade: !0, mode: o, complete: i, percent: r ? s : 100, from: r ? l : {height: l.height * a, width: l.width * a, outerHeight: l.outerHeight * a, outerWidth: l.outerWidth * a}}), n.effect(e)
        }, t.effects.effect.scale = function (e, i) {
            var n = t(this), o = t.extend(!0, {}, e), r = t.effects.setMode(n, e.mode || "effect"), s = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === r ? 0 : 100), a = e.direction || "both", l = e.origin, u = {height: n.height(), width: n.width(), outerHeight: n.outerHeight(), outerWidth: n.outerWidth()}, h = {y: "horizontal" !== a ? s / 100 : 1, x: "vertical" !== a ? s / 100 : 1};
            o.effect = "size", o.queue = !1, o.complete = i, "effect" !== r && (o.origin = l || ["middle", "center"], o.restore = !0), o.from = e.from || ("show" === r ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : u), o.to = {height: u.height * h.y, width: u.width * h.x, outerHeight: u.outerHeight * h.y, outerWidth: u.outerWidth * h.x}, o.fade && ("show" === r && (o.from.opacity = 0, o.to.opacity = 1), "hide" === r && (o.from.opacity = 1, o.to.opacity = 0)), n.effect(o)
        }, t.effects.effect.size = function (e, i) {
            var n, o, r, s = t(this), a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], u = ["width", "height", "overflow"], h = ["fontSize"], c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], p = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], d = t.effects.setMode(s, e.mode || "effect"), f = e.restore || "effect" !== d, g = e.scale || "both", m = e.origin || ["middle", "center"], v = s.css("position"), y = f ? a : l, b = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
            "show" === d && s.show(), n = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()}, "toggle" === e.mode && "show" === d ? (s.from = e.to || b, s.to = e.from || n) : (s.from = e.from || ("show" === d ? b : n), s.to = e.to || ("hide" === d ? b : n)), r = {from: {y: s.from.height / n.height, x: s.from.width / n.width}, to: {y: s.to.height / n.height, x: s.to.width / n.width}}, ("box" === g || "both" === g) && (r.from.y !== r.to.y && (y = y.concat(c), s.from = t.effects.setTransition(s, c, r.from.y, s.from), s.to = t.effects.setTransition(s, c, r.to.y, s.to)), r.from.x !== r.to.x && (y = y.concat(p), s.from = t.effects.setTransition(s, p, r.from.x, s.from), s.to = t.effects.setTransition(s, p, r.to.x, s.to))), ("content" === g || "both" === g) && r.from.y !== r.to.y && (y = y.concat(h).concat(u), s.from = t.effects.setTransition(s, h, r.from.y, s.from), s.to = t.effects.setTransition(s, h, r.to.y, s.to)), t.effects.save(s, y), s.show(), t.effects.createWrapper(s), s.css("overflow", "hidden").css(s.from), m && (o = t.effects.getBaseline(m, n), s.from.top = (n.outerHeight - s.outerHeight()) * o.y, s.from.left = (n.outerWidth - s.outerWidth()) * o.x, s.to.top = (n.outerHeight - s.to.outerHeight) * o.y, s.to.left = (n.outerWidth - s.to.outerWidth) * o.x), s.css(s.from), ("content" === g || "both" === g) && (c = c.concat(["marginTop", "marginBottom"]).concat(h), p = p.concat(["marginLeft", "marginRight"]), u = a.concat(c).concat(p), s.find("*[width]").each(function () {
                var i = t(this), n = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
                f && t.effects.save(i, u), i.from = {height: n.height * r.from.y, width: n.width * r.from.x, outerHeight: n.outerHeight * r.from.y, outerWidth: n.outerWidth * r.from.x}, i.to = {height: n.height * r.to.y, width: n.width * r.to.x, outerHeight: n.height * r.to.y, outerWidth: n.width * r.to.x}, r.from.y !== r.to.y && (i.from = t.effects.setTransition(i, c, r.from.y, i.from), i.to = t.effects.setTransition(i, c, r.to.y, i.to)), r.from.x !== r.to.x && (i.from = t.effects.setTransition(i, p, r.from.x, i.from), i.to = t.effects.setTransition(i, p, r.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
                    f && t.effects.restore(i, u)
                })
            })), s.animate(s.to, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                0 === s.to.opacity && s.css("opacity", s.from.opacity), "hide" === d && s.hide(), t.effects.restore(s, y), f || ("static" === v ? s.css({position: "relative", top: s.to.top, left: s.to.left}) : t.each(["top", "left"], function (t, e) {
                    s.css(e, function (e, i) {
                        var n = parseInt(i, 10), o = t ? s.to.left : s.to.top;
                        return"auto" === i ? o + "px" : n + o + "px"
                    })
                })), t.effects.removeWrapper(s), i()
            }})
        }
    }(jQuery), /*!
 * jQuery UI Effects Shake 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.shake = function (e, i) {
            var n, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], s = t.effects.setMode(o, e.mode || "effect"), a = e.direction || "left", l = e.distance || 20, u = e.times || 3, h = 2 * u + 1, c = Math.round(e.duration / h), p = "up" === a || "down" === a ? "top" : "left", d = "up" === a || "left" === a, f = {}, g = {}, m = {}, v = o.queue(), y = v.length;
            for (t.effects.save(o, r), o.show(), t.effects.createWrapper(o), f[p] = (d ? "-=" : "+=") + l, g[p] = (d ? "+=" : "-=") + 2 * l, m[p] = (d ? "-=" : "+=") + 2 * l, o.animate(f, c, e.easing), n = 1; u > n; n++)o.animate(g, c, e.easing).animate(m, c, e.easing);
            o.animate(g, c, e.easing).animate(f, c / 2, e.easing).queue(function () {
                "hide" === s && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, h + 1))), o.dequeue()
        }
    }(jQuery), /*!
 * jQuery UI Effects Slide 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.slide = function (e, i) {
            var n, o = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height"], s = t.effects.setMode(o, e.mode || "show"), a = "show" === s, l = e.direction || "left", u = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l, c = {};
            t.effects.save(o, r), o.show(), n = e.distance || o["top" === u ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(o).css({overflow: "hidden"}), a && o.css(u, h ? isNaN(n) ? "-" + n : -n : n), c[u] = (a ? h ? "+=" : "-=" : h ? "-=" : "+=") + n, o.animate(c, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                "hide" === s && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }})
        }
    }(jQuery), /*!
 * jQuery UI Effects Transfer 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
    function (t) {
        t.effects.effect.transfer = function (e, i) {
            var n = t(this), o = t(e.to), r = "fixed" === o.css("position"), s = t("body"), a = r ? s.scrollTop() : 0, l = r ? s.scrollLeft() : 0, u = o.offset(), h = {top: u.top - a, left: u.left - l, height: o.innerHeight(), width: o.innerWidth()}, c = n.offset(), p = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top: c.top - a, left: c.left - l, height: n.innerHeight(), width: n.innerWidth(), position: r ? "fixed" : "absolute"}).animate(h, e.duration, e.easing, function () {
                p.remove(), i()
            })
        }
    }(jQuery), /*!
 * jQuery UI Progressbar 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/progressbar/
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
    function (t, e) {
        t.widget("ui.progressbar", {version: "1.10.3", options: {max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar", "aria-valuemin": this.min}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        }, _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        }, value: function (t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
        }, _constrainedValue: function (t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        }, _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        }, _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        }, _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        }, _refreshValue: function () {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({"aria-valuemax": this.options.max, "aria-valuenow": e}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }})
    }(jQuery), /*!
 * jQuery UI Selectable 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/selectable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
    function (t) {
        t.widget("ui.selectable", t.ui.mouse, {version: "1.10.3", options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null}, _create: function () {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function () {
                    var e = t(this), i = e.offset();
                    t.data(this, "selectable-item", {element: this, $element: e, left: i.left, top: i.top, right: i.left + e.outerWidth(), bottom: i.top + e.outerHeight(), startselected: !1, selected: e.hasClass("ui-selected"), selecting: e.hasClass("ui-selecting"), unselecting: e.hasClass("ui-unselecting")})
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        }, _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        }, _mouseStart: function (e) {
            var i = this, n = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({left: e.pageX, top: e.pageY, width: 0, height: 0}), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {unselecting: n.element}))
            }), t(e.target).parents().addBack().each(function () {
                var n, o = t.data(this, "selectable-item");
                return o ? (n = !e.metaKey && !e.ctrlKey || !o.$element.hasClass("ui-selected"), o.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), o.unselecting = !n, o.selecting = n, o.selected = n, n ? i._trigger("selecting", e, {selecting: o.element}) : i._trigger("unselecting", e, {unselecting: o.element}), !1) : void 0
            }))
        }, _mouseDrag: function (e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this, o = this.options, r = this.opos[0], s = this.opos[1], a = e.pageX, l = e.pageY;
                return r > a && (i = a, a = r, r = i), s > l && (i = l, l = s, s = i), this.helper.css({left: r, top: s, width: a - r, height: l - s}), this.selectees.each(function () {
                    var i = t.data(this, "selectable-item"), u = !1;
                    i && i.element !== n.element[0] && ("touch" === o.tolerance ? u = !(i.left > a || i.right < r || i.top > l || i.bottom < s) : "fit" === o.tolerance && (u = i.left > r && i.right < a && i.top > s && i.bottom < l), u ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {unselecting: i.element})))))
                }), !1
            }
        }, _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {unselected: n.element})
            }), t(".ui-selecting", this.element[0]).each(function () {
                var n = t.data(this, "selectable-item");
                n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {selected: n.element})
            }), this._trigger("stop", e), this.helper.remove(), !1
        }})
    }(jQuery), /*!
 * jQuery UI Slider 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
    function (t) {
        var e = 5;
        t.widget("ui.slider", t.ui.mouse, {version: "1.10.3", widgetEventPrefix: "slide", options: {animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null}, _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        }, _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        }, _createHandles: function () {
            var e, i, n = this.options, o = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), r = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", s = [];
            for (i = n.values && n.values.length || 1, o.length > i && (o.slice(i).remove(), o = o.slice(0, i)), e = o.length; i > e; e++)s.push(r);
            this.handles = o.add(t(s.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e)
            })
        }, _createRange: function () {
            var e = this.options, i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "", bottom: ""}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        }, _setupEvents: function () {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        }, _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        }, _mouseCapture: function (e) {
            var i, n, o, r, s, a, l, u, h = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), i = {x: e.pageX, y: e.pageY}, n = this._normValueFromMouse(i), o = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(n - h.values(e));
                (o > i || o === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (o = i, r = t(this), s = e)
            }), a = this._start(e, s), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = s, r.addClass("ui-state-active").focus(), l = r.offset(), u = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {left: 0, top: 0} : {left: e.pageX - l.left - r.width() / 2, top: e.pageY - l.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(e, s, n), this._animateOff = !0, !0))
        }, _mouseStart: function () {
            return!0
        }, _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        }, _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        }, _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        }, _normValueFromMouse: function (t) {
            var e, i, n, o, r;
            return"horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), o = this._valueMax() - this._valueMin(), r = this._valueMin() + n * o, this._trimAlignValue(r)
        }, _start: function (t, e) {
            var i = {handle: this.handles[e], value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        }, _slide: function (t, e, i) {
            var n, o, r;
            this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (o = this.values(), o[e] = i, r = this._trigger("slide", t, {handle: this.handles[e], value: i, values: o}), n = this.values(e ? 0 : 1), r !== !1 && this.values(e, i, !0))) : i !== this.value() && (r = this._trigger("slide", t, {handle: this.handles[e], value: i}), r !== !1 && this.value(i))
        }, _stop: function (t, e) {
            var i = {handle: this.handles[e], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        }, _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[e], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        }, value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        }, values: function (e, i) {
            var n, o, r;
            if (arguments.length > 1)return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
            if (!arguments.length)return this._values();
            if (!t.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (n = this.options.values, o = arguments[0], r = 0; r < n.length; r += 1)n[r] = this._trimAlignValue(o[r]), this._change(null, r);
            this._refreshValue()
        }, _setOption: function (e, i) {
            var n, o = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (o = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), n = 0; o > n; n += 1)this._change(null, n);
                    this._animateOff = !1;
                    break;
                case"min":
                case"max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        }, _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        }, _values: function (t) {
            var e, i, n;
            if (arguments.length)return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), n = 0; n < i.length; n += 1)i[n] = this._trimAlignValue(i[n]);
                return i
            }
            return[]
        }, _trimAlignValue: function (t) {
            if (t <= this._valueMin())return this._valueMin();
            if (t >= this._valueMax())return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        }, _valueMin: function () {
            return this.options.min
        }, _valueMax: function () {
            return this.options.max
        }, _refreshValue: function () {
            var e, i, n, o, r, s = this.options.range, a = this.options, l = this, u = this._animateOff ? !1 : a.animate, h = {};
            this.options.values && this.options.values.length ? this.handles.each(function (n) {
                i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[u ? "animate" : "css"](h, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({left: i + "%"}, a.animate), 1 === n && l.range[u ? "animate" : "css"]({width: i - e + "%"}, {queue: !1, duration: a.animate})) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({bottom: i + "%"}, a.animate), 1 === n && l.range[u ? "animate" : "css"]({height: i - e + "%"}, {queue: !1, duration: a.animate}))), e = i
            }) : (n = this.value(), o = this._valueMin(), r = this._valueMax(), i = r !== o ? 100 * ((n - o) / (r - o)) : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](h, a.animate), "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({width: i + "%"}, a.animate), "max" === s && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({width: 100 - i + "%"}, {queue: !1, duration: a.animate}), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({height: i + "%"}, a.animate), "max" === s && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({height: 100 - i + "%"}, {queue: !1, duration: a.animate}))
        }, _handleEvents: {keydown: function (i) {
            var n, o, r, s, a = t(i.target).data("ui-slider-handle-index");
            switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, a), n === !1))return
            }
            switch (s = this.options.step, o = r = this.options.values && this.options.values.length ? this.values(a) : this.value(), i.keyCode) {
                case t.ui.keyCode.HOME:
                    r = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    r = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    r = this._trimAlignValue(o + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    r = this._trimAlignValue(o - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (o === this._valueMax())return;
                    r = this._trimAlignValue(o + s);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (o === this._valueMin())return;
                    r = this._trimAlignValue(o - s)
            }
            this._slide(i, a, r)
        }, click: function (t) {
            t.preventDefault()
        }, keyup: function (e) {
            var i = t(e.target).data("ui-slider-handle-index");
            this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
        }}})
    }(jQuery), /*!
 * jQuery UI Sortable 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
    function (t) {
        function e(t, e, i) {
            return t > e && e + i > t
        }

        function i(t) {
            return/left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        }

        t.widget("ui.sortable", t.ui.mouse, {version: "1.10.3", widgetEventPrefix: "sort", ready: !1, options: {appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null}, _create: function () {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        }, _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
            return this
        }, _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        }, _mouseCapture: function (e, i) {
            var n = null, o = !1, r = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, r.widgetName + "-item") === r ? (n = t(this), !1) : void 0
            }), t.data(e.target, r.widgetName + "-item") === r && (n = t(e.target)), n ? !this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function () {
                this === e.target && (o = !0)
            }), o) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1 : !1)
        }, _mouseStart: function (e, i, n) {
            var o, r, s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, t.extend(this.offset, {click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(r)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)for (o = this.containers.length - 1; o >= 0; o--)this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        }, _mouseDrag: function (e) {
            var i, n, o, r, s = this.options, a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed)), e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed))), a !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (n = this.items[i], o = n.item[0], r = this._intersectsWithPointer(n), r && n.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], o) : !0)) {
                if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n))break;
                this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                break
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        }, _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this, o = this.placeholder.offset(), r = this.options.axis, s = {};
                    r && "x" !== r || (s.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (s.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function () {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return!1
            }
        }, cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {helper: null, dragging: !1, reverting: !1, _noFinalSort: null}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        }, serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        }, toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, i.each(function () {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        }, _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top, o = n + this.helperProportions.height, r = t.left, s = r + t.width, a = t.top, l = a + t.height, u = this.offset.click.top, h = this.offset.click.left, c = "x" === this.options.axis || n + u > a && l > n + u, p = "y" === this.options.axis || e + h > r && s > e + h, d = c && p;
            return"pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? d : r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < s && a < n + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < l
        }, _intersectsWithPointer: function (t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = i && n, r = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
            return o ? this.floating ? s && "right" === s || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1) : !1
        }, _intersectsWithSides: function (t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), n = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), o = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : o && ("down" === o && i || "up" === o && !i)
        }, _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        }, _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        }, refresh: function (t) {
            return this._refreshItems(t), this.refreshPositions(), this
        }, _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        }, _getItemsAsjQuery: function (e) {
            var i, n, o, r, s = [], a = [], l = this._connectWith();
            if (l && e)for (i = l.length - 1; i >= 0; i--)for (o = t(l[i]), n = o.length - 1; n >= 0; n--)r = t.data(o[n], this.widgetFullName), r && r !== this && !r.options.disabled && a.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--)a[i][0].each(function () {
                s.push(this)
            });
            return t(s)
        }, _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; i < e.length; i++)if (e[i] === t.item[0])return!1;
                return!0
            })
        }, _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, n, o, r, s, a, l, u, h = this.items, c = [
                [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]
            ], p = this._connectWith();
            if (p && this.ready)for (i = p.length - 1; i >= 0; i--)for (o = t(p[i]), n = o.length - 1; n >= 0; n--)r = t.data(o[n], this.widgetFullName), r && r !== this && !r.options.disabled && (c.push([t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {item: this.currentItem}) : t(r.options.items, r.element), r]), this.containers.push(r));
            for (i = c.length - 1; i >= 0; i--)for (s = c[i][1], a = c[i][0], n = 0, u = a.length; u > n; n++)l = t(a[n]), l.data(this.widgetName + "-item", s), h.push({item: l, instance: s, width: 0, height: 0, left: 0, top: 0})
        }, refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, o, r;
            for (i = this.items.length - 1; i >= 0; i--)n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = o.outerWidth(), n.height = o.outerHeight()), r = o.offset(), n.left = r.left, n.top = r.top);
            if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)r = this.containers[i].element.offset(), this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        }, _createPlaceholder: function (e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {element: function () {
                var n = e.currentItem[0].nodeName.toLowerCase(), o = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                return"tr" === n ? e.currentItem.children().each(function () {
                    t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(o)
                }) : "img" === n && o.attr("src", e.currentItem.attr("src")), i || o.css("visibility", "hidden"), o
            }, update: function (t, o) {
                (!i || n.forcePlaceholderSize) && (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
            }}), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        }, _contactContainers: function (n) {
            var o, r, s, a, l, u, h, c, p, d, f = null, g = null;
            for (o = this.containers.length - 1; o >= 0; o--)if (!t.contains(this.currentItem[0], this.containers[o].element[0]))if (this._intersectsWith(this.containers[o].containerCache)) {
                if (f && t.contains(this.containers[o].element[0], f.element[0]))continue;
                f = this.containers[o], g = o
            } else this.containers[o].containerCache.over && (this.containers[o]._trigger("out", n, this._uiHash(this)), this.containers[o].containerCache.over = 0);
            if (f)if (1 === this.containers.length)this.containers[g].containerCache.over || (this.containers[g]._trigger("over", n, this._uiHash(this)), this.containers[g].containerCache.over = 1); else {
                for (s = 1e4, a = null, d = f.floating || i(this.currentItem), l = d ? "left" : "top", u = d ? "width" : "height", h = this.positionAbs[l] + this.offset.click[l], r = this.items.length - 1; r >= 0; r--)t.contains(this.containers[g].element[0], this.items[r].item[0]) && this.items[r].item[0] !== this.currentItem[0] && (!d || e(this.positionAbs.top + this.offset.click.top, this.items[r].top, this.items[r].height)) && (c = this.items[r].item.offset()[l], p = !1, Math.abs(c - h) > Math.abs(c + this.items[r][u] - h) && (p = !0, c += this.items[r][u]), Math.abs(c - h) < s && (s = Math.abs(c - h), a = this.items[r], this.direction = p ? "up" : "down"));
                if (!a && !this.options.dropOnEmpty)return;
                if (this.currentContainer === this.containers[g])return;
                a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[g].element, !0), this._trigger("change", n, this._uiHash()), this.containers[g]._trigger("change", n, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", n, this._uiHash(this)), this.containers[g].containerCache.over = 1
            }
        }, _createHelper: function (e) {
            var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        }, _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left"in e && (this.offset.click.left = e.left + this.margins.left), "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top"in e && (this.offset.click.top = e.top + this.margins.top), "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        }, _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return"absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        }, _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return{top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            }
            return{top: 0, left: 0}
        }, _cacheMargins: function () {
            this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
        }, _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        }, _setContainment: function () {
            var e, i, n, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === o.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === o.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], i = t(o.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        }, _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, r = /(html|body)/i.test(o[0].tagName);
            return{top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * n}
        }, _generatePosition: function (e) {
            var i, n, o = this.options, r = e.pageX, s = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
            return"relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), o.grid && (i = this.originalPageY + Math.round((s - this.originalPageY) / o.grid[1]) * o.grid[1], s = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, n = this.originalPageX + Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - o.grid[0] : n + o.grid[0] : n)), {top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()), left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())}
        }, _rearrange: function (t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var o = this.counter;
            this._delay(function () {
                o === this.counter && this.refreshPositions(!n)
            })
        }, _clear: function (t, e) {
            this.reverting = !1;
            var i, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (n.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), n.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)e || n.push(function (t) {
                return function (e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (n.push(function (t) {
                return function (e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; i < n.length; i++)n[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; i < n.length; i++)n[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        }, _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        }, _uiHash: function (e) {
            var i = e || this;
            return{helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null}
        }})
    }(jQuery), /*!
 * jQuery UI Spinner 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/spinner/
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.widget.js
 *  jquery.ui.button.js
 */
    function (t) {
        function e(t) {
            return function () {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }

        t.widget("ui.spinner", {version: "1.10.3", defaultElement: "<input>", widgetEventPrefix: "spin", options: {culture: null, icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"}, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null}, _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {beforeunload: function () {
                this.element.removeAttr("autocomplete")
            }})
        }, _getCreateOptions: function () {
            var e = {}, i = this.element;
            return t.each(["min", "max", "step"], function (t, n) {
                var o = i.attr(n);
                void 0 !== o && o.length && (e[n] = o)
            }), e
        }, _events: {keydown: function (t) {
            this._start(t) && this._keydown(t) && t.preventDefault()
        }, keyup: "_stop", focus: function () {
            this.previous = this.element.val()
        }, blur: function (t) {
            return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
        }, mousewheel: function (t, e) {
            if (e) {
                if (!this.spinning && !this._start(t))return!1;
                this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                    this.spinning && this._stop(t)
                }, 100), t.preventDefault()
            }
        }, "mousedown .ui-spinner-button": function (e) {
            function i() {
                var t = this.element[0] === this.document[0].activeElement;
                t || (this.element.focus(), this.previous = n, this._delay(function () {
                    this.previous = n
                }))
            }

            var n;
            n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                delete this.cancelBlur, i.call(this)
            }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
        }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
            return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
        }, "mouseleave .ui-spinner-button": "_stop"}, _draw: function () {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        }, _keydown: function (e) {
            var i = this.options, n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return!1
        }, _uiSpinnerHtml: function () {
            return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        }, _buttonHtml: function () {
            return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        }, _start: function (t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        }, _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        }, _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {value: i}) === !1 || (this._value(i), this.counter++)
        }, _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        }, _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        }, _precisionOf: function (t) {
            var e = t.toString(), i = e.indexOf(".");
            return-1 === i ? 0 : e.length - i - 1
        }, _adjustValue: function (t) {
            var e, i, n = this.options;
            return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
        }, _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        }, _setOption: function (t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, this.element.val(this._format(i)), void 0
            }
            ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        }, _setOptions: e(function (t) {
            this._super(t), this._value(this.element.val())
        }), _parse: function (t) {
            return"string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        }, _format: function (t) {
            return"" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        }, _refresh: function () {
            this.element.attr({"aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val())})
        }, _value: function (t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        }, _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        }, stepUp: e(function (t) {
            this._stepUp(t)
        }), _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        }, stepDown: e(function (t) {
            this._stepDown(t)
        }), _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        }, pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }), pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }), value: function (t) {
            return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
        }, widget: function () {
            return this.uiSpinner
        }})
    }(jQuery), /*!
 * jQuery UI Tabs 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
    function (t, e) {
        function i() {
            return++o
        }

        function n(t) {
            return t.hash.length > 1 && decodeURIComponent(t.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
        }

        var o = 0, r = /#.*$/;
        t.widget("ui.tabs", {version: "1.10.3", delay: 300, options: {active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null}, _create: function () {
            var e = this, i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace,function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        }, _initialActive: function () {
            var e = this.options.active, i = this.options.collapsible, n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function (i, o) {
                return t(o).attr("aria-controls") === n ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        }, _getCreateEventData: function () {
            return{tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        }, _tabKeydown: function (e) {
            var i = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(i), o = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        o = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(n), void 0;
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), void 0;
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        }, _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        }, _handlePageNav: function (e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        }, _findNextTab: function (e, i) {
            function n() {
                return e > o && (e = 0), 0 > e && (e = o), e
            }

            for (var o = this.tabs.length - 1; -1 !== t.inArray(n(), this.options.disabled);)e = i ? e + 1 : e - 1;
            return e
        }, _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        }, _setOption: function (t, e) {
            return"active" === t ? (this._activate(e), void 0) : "disabled" === t ? (this._setupDisabled(e), void 0) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
        }, _tabId: function (t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        }, _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        }, refresh: function () {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        }, _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false", tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false", "aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true", tabIndex: 0}), this._getPanelForTab(this.active).show().attr({"aria-expanded": "true", "aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        }, _processTabs: function () {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab", tabIndex: -1}), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1}), this.panels = t(), this.anchors.each(function (i, o) {
                var r, s, a, l = t(o).uniqueId().attr("id"), u = t(o).closest("li"), h = u.attr("aria-controls");
                n(o) ? (r = o.hash, s = e.element.find(e._sanitizeSelector(r))) : (a = e._tabId(u), r = "#" + a, s = e.element.find(r), s.length || (s = e._createPanel(a), s.insertAfter(e.panels[i - 1] || e.tablist)), s.attr("aria-live", "polite")), s.length && (e.panels = e.panels.add(s)), h && u.data("ui-tabs-aria-controls", h), u.attr({"aria-controls": r.substring(1), "aria-labelledby": l}), s.attr("aria-labelledby", l)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        }, _getList: function () {
            return this.element.find("ol,ul").eq(0)
        }, _createPanel: function (e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        }, _setupDisabled: function (e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, n = 0; i = this.tabs[n]; n++)e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        }, _setupEvents: function (e) {
            var i = {click: function (t) {
                t.preventDefault()
            }};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        }, _setupHeightStyle: function (e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        }, _eventHandler: function (e) {
            var i = this.options, n = this.active, o = t(e.currentTarget), r = o.closest("li"), s = r[0] === n[0], a = s && i.collapsible, l = a ? t() : this._getPanelForTab(r), u = n.length ? this._getPanelForTab(n) : t(), h = {oldTab: n, oldPanel: u, newTab: a ? t() : r, newPanel: l};
            e.preventDefault(), r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || s && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = a ? !1 : this.tabs.index(r), this.active = s ? t() : r, this.xhr && this.xhr.abort(), u.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), e), this._toggle(e, h))
        }, _toggle: function (e, i) {
            function n() {
                r.running = !1, r._trigger("activate", e, i)
            }

            function o() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), s.length && r.options.show ? r._show(s, r.options.show, n) : (s.show(), n())
            }

            var r = this, s = i.newPanel, a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), o()), a.attr({"aria-expanded": "false", "aria-hidden": "true"}), i.oldTab.attr("aria-selected", "false"), s.length && a.length ? i.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), s.attr({"aria-expanded": "true", "aria-hidden": "false"}), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
        }, _activate: function (e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({target: i, currentTarget: i, preventDefault: t.noop}))
        }, _findActive: function (e) {
            return e === !1 ? t() : this.tabs.eq(e)
        }, _getIndex: function (t) {
            return"string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        }, _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        }, enable: function (i) {
            var n = this.options.disabled;
            n !== !1 && (i === e ? n = !1 : (i = this._getIndex(i), n = t.isArray(n) ? t.map(n, function (t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(n))
        }, disable: function (i) {
            var n = this.options.disabled;
            if (n !== !0) {
                if (i === e)n = !0; else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, n))return;
                    n = t.isArray(n) ? t.merge([i], n).sort() : [i]
                }
                this._setupDisabled(n)
            }
        }, load: function (e, i) {
            e = this._getIndex(e);
            var o = this, r = this.tabs.eq(e), s = r.find(".ui-tabs-anchor"), a = this._getPanelForTab(r), l = {tab: r, panel: a};
            n(s[0]) || (this.xhr = t.ajax(this._ajaxSettings(s, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (r.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function (t) {
                setTimeout(function () {
                    a.html(t), o._trigger("load", i, l)
                }, 1)
            }).complete(function (t, e) {
                setTimeout(function () {
                    "abort" === e && o.panels.stop(!1, !0), r.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === o.xhr && delete o.xhr
                }, 1)
            })))
        }, _ajaxSettings: function (e, i, n) {
            var o = this;
            return{url: e.attr("href"), beforeSend: function (e, r) {
                return o._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: r}, n))
            }}
        }, _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }})
    }(jQuery), /*!
 * jQuery UI Tooltip 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
    function (t) {
        function e(e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
        }

        function i(e) {
            var i = e.data("ui-tooltip-id"), n = (e.attr("aria-describedby") || "").split(/\s+/), o = t.inArray(i, n);
            -1 !== o && n.splice(o, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
        }

        var n = 0;
        t.widget("ui.tooltip", {version: "1.10.3", options: {content: function () {
            var e = t(this).attr("title") || "";
            return t("<a>").text(e).html()
        }, hide: !0, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: !0, tooltipClass: null, track: !1, close: null, open: null}, _create: function () {
            this._on({mouseover: "open", focusin: "open"}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        }, _setOption: function (e, i) {
            var n = this;
            return"disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                n._updateContent(e)
            }), void 0)
        }, _disable: function () {
            var e = this;
            t.each(this.tooltips, function (i, n) {
                var o = t.Event("blur");
                o.target = o.currentTarget = n[0], e.close(o, !0)
            }), this.element.find(this.options.items).addBack().each(function () {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        }, _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        }, open: function (e) {
            var i = this, n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function () {
                var e, n = t(this);
                n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {element: this, title: n.attr("title")}, n.attr("title", ""))
            }), this._updateContent(n, e))
        }, _updateContent: function (t, e) {
            var i, n = this.options.content, o = this, r = e ? e.type : null;
            return"string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function (i) {
                t.data("ui-tooltip-open") && o._delay(function () {
                    e && (e.type = r), this._open(e, t, i)
                })
            }), i && this._open(e, t, i), void 0)
        }, _open: function (i, n, o) {
            function r(t) {
                u.of = t, s.is(":hidden") || s.position(u)
            }

            var s, a, l, u = t.extend({}, this.options.position);
            if (o) {
                if (s = this._find(n), s.length)return s.find(".ui-tooltip-content").html(o), void 0;
                n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")), s = this._tooltip(n), e(n, s.attr("id")), s.find(".ui-tooltip-content").html(o), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {mousemove: r}), r(i)) : s.position(t.extend({of: n}, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function () {
                    s.is(":visible") && (r(u.of), clearInterval(l))
                }, t.fx.interval)), this._trigger("open", i, {tooltip: s}), a = {keyup: function (e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var i = t.Event(e);
                        i.currentTarget = n[0], this.close(i, !0)
                    }
                }, remove: function () {
                    this._removeTooltip(s)
                }}, i && "mouseover" !== i.type || (a.mouseleave = "close"), i && "focusin" !== i.type || (a.focusout = "close"), this._on(!0, n, a)
            }
        }, close: function (e) {
            var n = this, o = t(e ? e.currentTarget : this.element), r = this._find(o);
            this.closing || (clearInterval(this.delayedShow), o.data("ui-tooltip-title") && o.attr("title", o.data("ui-tooltip-title")), i(o), r.stop(!0), this._hide(r, this.options.hide, function () {
                n._removeTooltip(t(this))
            }), o.removeData("ui-tooltip-open"), this._off(o, "mouseleave focusout keyup"), o[0] !== this.element[0] && this._off(o, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                t(i.element).attr("title", i.title), delete n.parents[e]
            }), this.closing = !0, this._trigger("close", e, {tooltip: r}), this.closing = !1)
        }, _tooltip: function (e) {
            var i = "ui-tooltip-" + n++, o = t("<div>").attr({id: i, role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(o), o.appendTo(this.document[0].body), this.tooltips[i] = e, o
        }, _find: function (e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _destroy: function () {
            var e = this;
            t.each(this.tooltips, function (i, n) {
                var o = t.Event("blur");
                o.target = o.currentTarget = n[0], e.close(o, !0), t("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
            })
        }})
    }(jQuery), /*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
    function (t) {
        t.cookie = function (e, i, n) {
            if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(i)) || null === i || void 0 === i)) {
                if (n = t.extend({}, n), (null === i || void 0 === i) && (n.expires = -1), "number" == typeof n.expires) {
                    var o = n.expires, r = n.expires = new Date;
                    r.setDate(r.getDate() + o)
                }
                return i = String(i), document.cookie = [encodeURIComponent(e), "=", n.raw ? i : encodeURIComponent(i), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
            }
            n = i || {};
            for (var s, a = n.raw ? function (t) {
                return t
            } : decodeURIComponent, l = document.cookie.split("; "), u = 0; s = l[u] && l[u].split("="); u++)if (a(s[0]) === e)return a(s[1] || "");
            return null
        }
    }(jQuery), function (t) {
    t.fn.dfilter = function (e, i) {
        return e = e.toLowerCase(), e = e.replace(/^data-/, ""), e = e.replace("_", "-"), e = e.replace(" ", "-"), "undefined" == typeof i || "" === i ? this.filter("[data-" + e + "]") : "boolean" == typeof i ? i ? this.filter("[data-" + e + "]") : this.not("[data-" + e + "]") : t.isArray(i) ? this.filter("[data-" + e + '="' + i.join('"],[data-' + e + '="') + '"]') : this.filter("[data-" + e + '="' + i + '"]')
    }
}(jQuery), function () {
    var t = this, e = t._, i = {}, n = Array.prototype, o = Object.prototype, r = Function.prototype, s = n.push, a = n.slice, l = n.concat, u = o.toString, h = o.hasOwnProperty, c = n.forEach, p = n.map, d = n.reduce, f = n.reduceRight, g = n.filter, m = n.every, v = n.some, y = n.indexOf, b = n.lastIndexOf, _ = Array.isArray, C = Object.keys, w = r.bind, x = function (t) {
        return t instanceof x ? t : this instanceof x ? (this._wrapped = t, void 0) : new x(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : t._ = x, x.VERSION = "1.5.1";
    var S = x.each = x.forEach = function (t, e, n) {
        if (null != t)if (c && t.forEach === c)t.forEach(e, n); else if (t.length === +t.length) {
            for (var o = 0, r = t.length; r > o; o++)if (e.call(n, t[o], o, t) === i)return
        } else for (var s in t)if (x.has(t, s) && e.call(n, t[s], s, t) === i)return
    };
    x.map = x.collect = function (t, e, i) {
        var n = [];
        return null == t ? n : p && t.map === p ? t.map(e, i) : (S(t, function (t, o, r) {
            n.push(e.call(i, t, o, r))
        }), n)
    };
    var k = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (t, e, i, n) {
        var o = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d)return n && (e = x.bind(e, n)), o ? t.reduce(e, i) : t.reduce(e);
        if (S(t, function (t, r, s) {
            o ? i = e.call(n, i, t, r, s) : (i = t, o = !0)
        }), !o)throw new TypeError(k);
        return i
    }, x.reduceRight = x.foldr = function (t, e, i, n) {
        var o = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f)return n && (e = x.bind(e, n)), o ? t.reduceRight(e, i) : t.reduceRight(e);
        var r = t.length;
        if (r !== +r) {
            var s = x.keys(t);
            r = s.length
        }
        if (S(t, function (a, l, u) {
            l = s ? s[--r] : --r, o ? i = e.call(n, i, t[l], l, u) : (i = t[l], o = !0)
        }), !o)throw new TypeError(k);
        return i
    }, x.find = x.detect = function (t, e, i) {
        var n;
        return T(t, function (t, o, r) {
            return e.call(i, t, o, r) ? (n = t, !0) : void 0
        }), n
    }, x.filter = x.select = function (t, e, i) {
        var n = [];
        return null == t ? n : g && t.filter === g ? t.filter(e, i) : (S(t, function (t, o, r) {
            e.call(i, t, o, r) && n.push(t)
        }), n)
    }, x.reject = function (t, e, i) {
        return x.filter(t, function (t, n, o) {
            return!e.call(i, t, n, o)
        }, i)
    }, x.every = x.all = function (t, e, n) {
        e || (e = x.identity);
        var o = !0;
        return null == t ? o : m && t.every === m ? t.every(e, n) : (S(t, function (t, r, s) {
            return(o = o && e.call(n, t, r, s)) ? void 0 : i
        }), !!o)
    };
    var T = x.some = x.any = function (t, e, n) {
        e || (e = x.identity);
        var o = !1;
        return null == t ? o : v && t.some === v ? t.some(e, n) : (S(t, function (t, r, s) {
            return o || (o = e.call(n, t, r, s)) ? i : void 0
        }), !!o)
    };
    x.contains = x.include = function (t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function (t) {
            return t === e
        })
    }, x.invoke = function (t, e) {
        var i = a.call(arguments, 2), n = x.isFunction(e);
        return x.map(t, function (t) {
            return(n ? e : t[e]).apply(t, i)
        })
    }, x.pluck = function (t, e) {
        return x.map(t, function (t) {
            return t[e]
        })
    }, x.where = function (t, e, i) {
        return x.isEmpty(e) ? i ? void 0 : [] : x[i ? "find" : "filter"](t, function (t) {
            for (var i in e)if (e[i] !== t[i])return!1;
            return!0
        })
    }, x.findWhere = function (t, e) {
        return x.where(t, e, !0)
    }, x.max = function (t, e, i) {
        if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535)return Math.max.apply(Math, t);
        if (!e && x.isEmpty(t))return-1 / 0;
        var n = {computed: -1 / 0, value: -1 / 0};
        return S(t, function (t, o, r) {
            var s = e ? e.call(i, t, o, r) : t;
            s > n.computed && (n = {value: t, computed: s})
        }), n.value
    }, x.min = function (t, e, i) {
        if (!e && x.isArray(t) && t[0] === +t[0] && t.length < 65535)return Math.min.apply(Math, t);
        if (!e && x.isEmpty(t))return 1 / 0;
        var n = {computed: 1 / 0, value: 1 / 0};
        return S(t, function (t, o, r) {
            var s = e ? e.call(i, t, o, r) : t;
            s < n.computed && (n = {value: t, computed: s})
        }), n.value
    }, x.shuffle = function (t) {
        var e, i = 0, n = [];
        return S(t, function (t) {
            e = x.random(i++), n[i - 1] = n[e], n[e] = t
        }), n
    };
    var D = function (t) {
        return x.isFunction(t) ? t : function (e) {
            return e[t]
        }
    };
    x.sortBy = function (t, e, i) {
        var n = D(e);
        return x.pluck(x.map(t,function (t, e, o) {
            return{value: t, index: e, criteria: n.call(i, t, e, o)}
        }).sort(function (t, e) {
            var i = t.criteria, n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i)return 1;
                if (n > i || void 0 === n)return-1
            }
            return t.index < e.index ? -1 : 1
        }), "value")
    };
    var P = function (t, e, i, n) {
        var o = {}, r = D(null == e ? x.identity : e);
        return S(t, function (e, s) {
            var a = r.call(i, e, s, t);
            n(o, a, e)
        }), o
    };
    x.groupBy = function (t, e, i) {
        return P(t, e, i, function (t, e, i) {
            (x.has(t, e) ? t[e] : t[e] = []).push(i)
        })
    }, x.countBy = function (t, e, i) {
        return P(t, e, i, function (t, e) {
            x.has(t, e) || (t[e] = 0), t[e]++
        })
    }, x.sortedIndex = function (t, e, i, n) {
        i = null == i ? x.identity : D(i);
        for (var o = i.call(n, e), r = 0, s = t.length; s > r;) {
            var a = r + s >>> 1;
            i.call(n, t[a]) < o ? r = a + 1 : s = a
        }
        return r
    }, x.toArray = function (t) {
        return t ? x.isArray(t) ? a.call(t) : t.length === +t.length ? x.map(t, x.identity) : x.values(t) : []
    }, x.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : x.keys(t).length
    }, x.first = x.head = x.take = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : a.call(t, 0, e)
    }, x.initial = function (t, e, i) {
        return a.call(t, 0, t.length - (null == e || i ? 1 : e))
    }, x.last = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, x.rest = x.tail = x.drop = function (t, e, i) {
        return a.call(t, null == e || i ? 1 : e)
    }, x.compact = function (t) {
        return x.filter(t, x.identity)
    };
    var E = function (t, e, i) {
        return e && x.every(t, x.isArray) ? l.apply(i, t) : (S(t, function (t) {
            x.isArray(t) || x.isArguments(t) ? e ? s.apply(i, t) : E(t, e, i) : i.push(t)
        }), i)
    };
    x.flatten = function (t, e) {
        return E(t, e, [])
    }, x.without = function (t) {
        return x.difference(t, a.call(arguments, 1))
    }, x.uniq = x.unique = function (t, e, i, n) {
        x.isFunction(e) && (n = i, i = e, e = !1);
        var o = i ? x.map(t, i, n) : t, r = [], s = [];
        return S(o, function (i, n) {
            (e ? n && s[s.length - 1] === i : x.contains(s, i)) || (s.push(i), r.push(t[n]))
        }), r
    }, x.union = function () {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function (t) {
        var e = a.call(arguments, 1);
        return x.filter(x.uniq(t), function (t) {
            return x.every(e, function (e) {
                return x.indexOf(e, t) >= 0
            })
        })
    }, x.difference = function (t) {
        var e = l.apply(n, a.call(arguments, 1));
        return x.filter(t, function (t) {
            return!x.contains(e, t)
        })
    }, x.zip = function () {
        for (var t = x.max(x.pluck(arguments, "length").concat(0)), e = new Array(t), i = 0; t > i; i++)e[i] = x.pluck(arguments, "" + i);
        return e
    }, x.object = function (t, e) {
        if (null == t)return{};
        for (var i = {}, n = 0, o = t.length; o > n; n++)e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, x.indexOf = function (t, e, i) {
        if (null == t)return-1;
        var n = 0, o = t.length;
        if (i) {
            if ("number" != typeof i)return n = x.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, o + i) : i
        }
        if (y && t.indexOf === y)return t.indexOf(e, i);
        for (; o > n; n++)if (t[n] === e)return n;
        return-1
    }, x.lastIndexOf = function (t, e, i) {
        if (null == t)return-1;
        var n = null != i;
        if (b && t.lastIndexOf === b)return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var o = n ? i : t.length; o--;)if (t[o] === e)return o;
        return-1
    }, x.range = function (t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), o = 0, r = new Array(n); n > o;)r[o++] = t, t += i;
        return r
    };
    var M = function () {
    };
    x.bind = function (t, e) {
        var i, n;
        if (w && t.bind === w)return w.apply(t, a.call(arguments, 1));
        if (!x.isFunction(t))throw new TypeError;
        return i = a.call(arguments, 2), n = function () {
            if (!(this instanceof n))return t.apply(e, i.concat(a.call(arguments)));
            M.prototype = t.prototype;
            var o = new M;
            M.prototype = null;
            var r = t.apply(o, i.concat(a.call(arguments)));
            return Object(r) === r ? r : o
        }
    }, x.partial = function (t) {
        var e = a.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(a.call(arguments)))
        }
    }, x.bindAll = function (t) {
        var e = a.call(arguments, 1);
        if (0 === e.length)throw new Error("bindAll must be passed function names");
        return S(e, function (e) {
            t[e] = x.bind(t[e], t)
        }), t
    }, x.memoize = function (t, e) {
        var i = {};
        return e || (e = x.identity), function () {
            var n = e.apply(this, arguments);
            return x.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
        }
    }, x.delay = function (t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, i)
        }, e)
    }, x.defer = function (t) {
        return x.delay.apply(x, [t, 1].concat(a.call(arguments, 1)))
    }, x.throttle = function (t, e, i) {
        var n, o, r, s = null, a = 0;
        i || (i = {});
        var l = function () {
            a = i.leading === !1 ? 0 : new Date, s = null, r = t.apply(n, o)
        };
        return function () {
            var u = new Date;
            a || i.leading !== !1 || (a = u);
            var h = e - (u - a);
            return n = this, o = arguments, 0 >= h ? (clearTimeout(s), s = null, a = u, r = t.apply(n, o)) : s || i.trailing === !1 || (s = setTimeout(l, h)), r
        }
    }, x.debounce = function (t, e, i) {
        var n, o = null;
        return function () {
            var r = this, s = arguments, a = function () {
                o = null, i || (n = t.apply(r, s))
            }, l = i && !o;
            return clearTimeout(o), o = setTimeout(a, e), l && (n = t.apply(r, s)), n
        }
    }, x.once = function (t) {
        var e, i = !1;
        return function () {
            return i ? e : (i = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, x.wrap = function (t, e) {
        return function () {
            var i = [t];
            return s.apply(i, arguments), e.apply(this, i)
        }
    }, x.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, i = t.length - 1; i >= 0; i--)e = [t[i].apply(this, e)];
            return e[0]
        }
    }, x.after = function (t, e) {
        return function () {
            return--t < 1 ? e.apply(this, arguments) : void 0
        }
    }, x.keys = C || function (t) {
        if (t !== Object(t))throw new TypeError("Invalid object");
        var e = [];
        for (var i in t)x.has(t, i) && e.push(i);
        return e
    }, x.values = function (t) {
        var e = [];
        for (var i in t)x.has(t, i) && e.push(t[i]);
        return e
    }, x.pairs = function (t) {
        var e = [];
        for (var i in t)x.has(t, i) && e.push([i, t[i]]);
        return e
    }, x.invert = function (t) {
        var e = {};
        for (var i in t)x.has(t, i) && (e[t[i]] = i);
        return e
    }, x.functions = x.methods = function (t) {
        var e = [];
        for (var i in t)x.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, x.extend = function (t) {
        return S(a.call(arguments, 1), function (e) {
            if (e)for (var i in e)t[i] = e[i]
        }), t
    }, x.pick = function (t) {
        var e = {}, i = l.apply(n, a.call(arguments, 1));
        return S(i, function (i) {
            i in t && (e[i] = t[i])
        }), e
    }, x.omit = function (t) {
        var e = {}, i = l.apply(n, a.call(arguments, 1));
        for (var o in t)x.contains(i, o) || (e[o] = t[o]);
        return e
    }, x.defaults = function (t) {
        return S(a.call(arguments, 1), function (e) {
            if (e)for (var i in e)void 0 === t[i] && (t[i] = e[i])
        }), t
    }, x.clone = function (t) {
        return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t
    }, x.tap = function (t, e) {
        return e(t), t
    };
    var I = function (t, e, i, n) {
        if (t === e)return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e)return t === e;
        t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped);
        var o = u.call(t);
        if (o != u.call(e))return!1;
        switch (o) {
            case"[object String]":
                return t == String(e);
            case"[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case"[object Date]":
            case"[object Boolean]":
                return+t == +e;
            case"[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e)return!1;
        for (var r = i.length; r--;)if (i[r] == t)return n[r] == e;
        var s = t.constructor, a = e.constructor;
        if (s !== a && !(x.isFunction(s) && s instanceof s && x.isFunction(a) && a instanceof a))return!1;
        i.push(t), n.push(e);
        var l = 0, h = !0;
        if ("[object Array]" == o) {
            if (l = t.length, h = l == e.length)for (; l-- && (h = I(t[l], e[l], i, n)););
        } else {
            for (var c in t)if (x.has(t, c) && (l++, !(h = x.has(e, c) && I(t[c], e[c], i, n))))break;
            if (h) {
                for (c in e)if (x.has(e, c) && !l--)break;
                h = !l
            }
        }
        return i.pop(), n.pop(), h
    };
    x.isEqual = function (t, e) {
        return I(t, e, [], [])
    }, x.isEmpty = function (t) {
        if (null == t)return!0;
        if (x.isArray(t) || x.isString(t))return 0 === t.length;
        for (var e in t)if (x.has(t, e))return!1;
        return!0
    }, x.isElement = function (t) {
        return!(!t || 1 !== t.nodeType)
    }, x.isArray = _ || function (t) {
        return"[object Array]" == u.call(t)
    }, x.isObject = function (t) {
        return t === Object(t)
    }, S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        x["is" + t] = function (e) {
            return u.call(e) == "[object " + t + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (t) {
        return!(!t || !x.has(t, "callee"))
    }), "function" != typeof/./ && (x.isFunction = function (t) {
        return"function" == typeof t
    }), x.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, x.isNaN = function (t) {
        return x.isNumber(t) && t != +t
    }, x.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
    }, x.isNull = function (t) {
        return null === t
    }, x.isUndefined = function (t) {
        return void 0 === t
    }, x.has = function (t, e) {
        return h.call(t, e)
    }, x.noConflict = function () {
        return t._ = e, this
    }, x.identity = function (t) {
        return t
    }, x.times = function (t, e, i) {
        for (var n = Array(Math.max(0, t)), o = 0; t > o; o++)n[o] = e.call(i, o);
        return n
    }, x.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var F = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
    F.unescape = x.invert(F.escape);
    var A = {escape: new RegExp("[" + x.keys(F.escape).join("") + "]", "g"), unescape: new RegExp("(" + x.keys(F.unescape).join("|") + ")", "g")};
    x.each(["escape", "unescape"], function (t) {
        x[t] = function (e) {
            return null == e ? "" : ("" + e).replace(A[t], function (e) {
                return F[t][e]
            })
        }
    }), x.result = function (t, e) {
        if (null == t)return void 0;
        var i = t[e];
        return x.isFunction(i) ? i.call(t) : i
    }, x.mixin = function (t) {
        S(x.functions(t), function (e) {
            var i = x[e] = t[e];
            x.prototype[e] = function () {
                var t = [this._wrapped];
                return s.apply(t, arguments), V.call(this, i.apply(x, t))
            }
        })
    };
    var $ = 0;
    x.uniqueId = function (t) {
        var e = ++$ + "";
        return t ? t + e : e
    }, x.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var L = /(.)^/, N = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029"}, O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (t, e, i) {
        var n;
        i = x.defaults({}, i, x.templateSettings);
        var o = new RegExp([(i.escape || L).source, (i.interpolate || L).source, (i.evaluate || L).source].join("|") + "|$", "g"), r = 0, s = "__p+='";
        t.replace(o, function (e, i, n, o, a) {
            return s += t.slice(r, a).replace(O, function (t) {
                return"\\" + N[t]
            }), i && (s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), o && (s += "';\n" + o + "\n__p+='"), r = a + e.length, e
        }), s += "';\n", i.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", s)
        } catch (a) {
            throw a.source = s, a
        }
        if (e)return n(e, x);
        var l = function (t) {
            return n.call(this, t, x)
        };
        return l.source = "function(" + (i.variable || "obj") + "){\n" + s + "}", l
    }, x.chain = function (t) {
        return x(t).chain()
    };
    var V = function (t) {
        return this._chain ? x(t).chain() : t
    };
    x.mixin(x), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = n[t];
        x.prototype[t] = function () {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], V.call(this, i)
        }
    }), S(["concat", "join", "slice"], function (t) {
        var e = n[t];
        x.prototype[t] = function () {
            return V.call(this, e.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {chain: function () {
        return this._chain = !0, this
    }, value: function () {
        return this._wrapped
    }})
}.call(this), function () {
    var LayerVault, __slice = [].slice;
    window.LayerVault = LayerVault = function () {
        function LayerVault() {
            var t;
            t = 1 <= arguments.length ? __slice.call(arguments, 0) : [], LayerVault.Keyboard.initialize(), this.setupZeroClipboard(), this.initialize.apply(this, t)
        }

        return LayerVault.prototype.listeners = {}, LayerVault.run = function (t) {
            re

            return $(document).ready(function () {
                return new LayerVault.Controller[t]
            })
        },
            LayerVault.Class = {
                namespace: function (name, value) {
                    var i, part, parts, _i, _ref;
                    for (parts = name.split("."), i = _i = 0, _ref = parts.length; _ref >= 0 ? _ref > _i : _i > _ref; i = _ref >= 0 ? ++_i : --_i)part = parts.slice(0, i + 1).join("."), eval("type = typeof(" + part + ");"), "undefined" === type && eval("" + part + " = {}");
                    return eval("" + name + " = value")
                }, create: function (t, e, i, n) {
                    var o, r, s;
                    this.namespace(t, i), e && e !== Object && e !== Function && (o = function () {
                    }, o.prototype = e.prototype, i.prototype = new o, i.prototype.constructor = i, i.prototype.baseConstructor = e, i.superClass = e.prototype);
                    for (r in n)s = n[r], i.prototype[r] = s;
                    return i
                }}, LayerVault.prototype.initialize = function () {
        }, LayerVault.prototype.addEventListener = function (t, e) {
            return this.listeners[t] ? this.listeners[t].push(e) : this.listeners[t] = [e]
        }, LayerVault.prototype.removeEventListeners = function (t) {
            return this.listeners[t] ? this.listeners[t] = [] : void 0
        }, LayerVault.prototype.fireEvent = function (t, e) {
            var i, n, o, r, s;
            if (n = this.listeners[t]) {
                for (s = [], o = 0, r = n.length; r > o; o++)i = n[o], s.push(i(e));
                return s
            }
        },
            LayerVault.prototype.setupZeroClipboard = function () {
                return ZeroClipboard.setDefaults({moviePath: "/assets/ZeroClipboard.swf"})
            },
            LayerVault
    }()
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    }, i = [].indexOf || function (t) {
        for (var e = 0, i = this.length; i > e; e++)if (e in this && this[e] === t)return e;
        return-1
    };
    LayerVault.Messenger = function (t) {
        function n() {
            var t = this;
            this.onGetConnectedUsers = function () {
                return n.prototype.onGetConnectedUsers.apply(t, arguments)
            }, this.onClientConnectedResponse = function () {
                return n.prototype.onClientConnectedResponse.apply(t, arguments)
            }, this.checkIfClientIsConnected = function () {
                return n.prototype.checkIfClientIsConnected.apply(t, arguments)
            }, this.onGetRoomProperty = function () {
                return n.prototype.onGetRoomProperty.apply(t, arguments)
            }, this.onPublishReceived = function () {
                return n.prototype.onPublishReceived.apply(t, arguments)
            }, this.socketDidConnect = function () {
                return n.prototype.socketDidConnect.apply(t, arguments)
            }, this.onPublishTo = function () {
                return n.prototype.onPublishTo.apply(t, arguments)
            }, this.onSubscribeTo = function () {
                return n.prototype.onSubscribeTo.apply(t, arguments)
            }, this.onSocketConnected = function () {
                return n.prototype.onSocketConnected.apply(t, arguments)
            }, $("body").hasClass("IFrame") || (this.initSocketIO(), this.addEventListeners())
        }

        return e(n, t), n.prototype.socketUrl = "//messenger.layervault.com", n.prototype.initSocketIO = function () {
            return"undefined" != typeof io ? (this.socket = io.connect(this.socketUrl), this.socket.on("did_connect", this.socketDidConnect), this.socket.on("publish", this.onPublishReceived)) : this.socket = {emit: function () {
            }}
        }, n.prototype.addEventListeners = function () {
            return this.addEventListener("socketConnected", this.onSocketConnected), this.addEventListener("subscribeTo", this.onSubscribeTo), this.addEventListener("publishTo", this.onPublishTo), this.addEventListener("getRoomProperty", this.onGetRoomProperty), this.addEventListener("desktopClientConnectedChanged", this.checkIfClientIsConnected), this.addEventListener("getConnectedUsers", this.onGetConnectedUsers)
        }, n.prototype.onSocketConnected = function () {
            return this.fireEvent("subscribeTo", "user/" + LayerVault.Utils.userId()), this.socket.emit("set", {room: "user/" + LayerVault.Utils.userId(), key: "webClientConnected"}), this.checkIfClientIsConnected()
        }, n.prototype.onSubscribeTo = function (t) {
            return this.socket.emit("subscribe", {room: t})
        }, n.prototype.onPublishTo = function (t) {
            return this.socket.emit("publish", t)
        }, n.prototype.socketDidConnect = function () {
            return this.fireEvent("socketConnected")
        }, n.prototype.onPublishReceived = function (t) {
            var e;
            if (e = t.name, !(i.call(LayerVault.Utils.eventMask, e) >= 0))return this.fireEvent(t.name, t.obj)
        }, n.prototype.onGetRoomProperty = function (t) {
            return this.socket.emit("get", {room: t.room, key: t.key}, t.cb)
        }, n.prototype.checkIfClientIsConnected = function () {
            return this.socket.emit("get", {room: "user/" + LayerVault.Utils.userId(), key: "desktopClientConnected"}, this.onClientConnectedResponse)
        }, n.prototype.onClientConnectedResponse = function (t) {
            return t ? $("body").addClass("Online") : $("body").removeClass("Online"), this.fireEvent("onlineStateChanged")
        }, n.prototype.onGetConnectedUsers = function (t) {
            return this.socket.emit("users", {}, t.cb)
        }, n
    }(LayerVault)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.RevisionMeta = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.factory = function (t) {
            return null != t.psd ? new LayerVault.RevisionMeta.PSD(t.psd) : null
        }, i
    }(LayerVault)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.RevisionMeta.PSD = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.initialize = function (t) {
            return this.data = t, this.text = null
        }, i.prototype.textData = function () {
            return null != this.text ? this.text : (this.text = _.reject(_.flatten(this.parseTextData()), function (t) {
                return null === t
            }), this.text)
        }, i.prototype.parseTextData = function (t) {
            var e = this;
            return null == t && (t = this.data), t.children.map(function (t) {
                return t.visible === !1 ? null : "group" === t.type ? e.parseTextData(t) : null != t.text ? {top: t.top, bottom: t.bottom, left: t.left, right: t.right, text: t.text.value, font: t.text.font} : null
            })
        }, i
    }(LayerVault)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    }, i = [].slice;
    LayerVault.Controller = function (n) {
        function o(t) {
            var e = this;
            this.config = null != t ? t : {}, this.$el = $(this.el), $(window).resize(_.throttle(function () {
                return e.fireEvent("windowDidResize")
            }, 33)), this.createThrottledFunctions(), this.bindConfiguredEvents(), this.bindConfiguredKeys(), this.initializeComponents(), this.initializeMessenger(), this.bubbleRealtimeEventsForUser(), this.initialize(), this.checkForIFrame()
        }

        return e(o, n), o.prototype.el = null, o.prototype._components = {}, o.prototype.bindEvents = {}, o.prototype.keyEvents = {}, o.prototype.throttledFunctions = {}, o.prototype.realtimeEnabled = !1, o.prototype.realtimeEvents = [], o.component = function (t, e) {
            return null == e && (e = {}), null == this.prototype._components[this.prototype.controllerName] && (this.prototype._components[this.prototype.controllerName] = []), this.prototype._components[this.prototype.controllerName].push({name: t, config: e})
        }, o.lateBind = function (t) {
            var e = this;
            return function () {
                var n;
                return n = 1 <= arguments.length ? i.call(arguments, 0) : [], e.prototype[t].apply(e.prototype, n)
            }
        }, o.prototype.initialize = function () {
        }, o.prototype.initializeComponents = function () {
            var t, e, i, n, o, r, s, a, l, u;
            if (null != this._components[this.controllerName]) {
                for (l = this._components[this.controllerName], u = [], o = 0, s = l.length; s > o; o++) {
                    for (e = l[o], n = e.name.split("."), t = LayerVault.Component, r = 0, a = n.length; a > r; r++)i = n[r], t = t[i];
                    (null == t.initializeIf || t.initializeIf()) && (new t(e.config, this), u.push(this.fireEvent("componentInitialized", e.name)))
                }
                return u
            }
        }, o.prototype.initializeMessenger = function () {
            return this.realtimeEnabled ? this.messenger = new LayerVault.Messenger : void 0
        }, o.prototype.checkForIFrame = function () {
            return window !== window.top && $("body").addClass("IFrame"), this.fireEvent("iframed")
        }, o.prototype.createThrottledFunctions = function () {
            var e, i, n, o, r, s, a;
            if (!$.isEmptyObject(this.throttledFunctions)) {
                s = this.throttledFunctions, a = [];
                for (o in s)t.call(s, o) && (n = s[o], a.push(function () {
                    var s;
                    s = [];
                    for (r in n)t.call(n, r) && (e = n[r], i = o + r.charAt(0).toUpperCase() + r.slice(1) + "d", s.push(this[i] = _[r](this[o], e)));
                    return s
                }.call(this)));
                return a
            }
        }, o.prototype.bindConfiguredEvents = function () {
            var e, i, n, o, r;
            o = this.bindEvents, r = [];
            for (e in o)t.call(o, e) && (n = o[e], _.isArray(n) || (n = [n]), r.push(function () {
                var t, o, r;
                for (r = [], t = 0, o = n.length; o > t; t++)i = n[t], (null !== i || (i = "on" + e.charAt(0).toUpperCase() + e.slice(1), null != this[i])) && r.push(this.addEventListener(e, this[i]));
                return r
            }.call(this)));
            return r
        }, o.prototype.bindConfiguredKeys = function () {
            return LayerVault.Keyboard.registerEvents(this.keyEvents)
        }, o.prototype.log = function () {
            if (!this.debug)return!1;
            if ("object" == typeof console && "undefined" != typeof console.log)try {
                return console.log.apply(this, arguments_)
            } catch (t) {
            }
        }, o.prototype.resize = function () {
        }, o.prototype.concatArgs = function (t, e) {
            return Array.prototype.slice.call(t).concat(e)
        }, o.prototype.delegate = function (t) {
            var e, i;
            return i = this, e = arguments, function () {
                return t.apply(i, i.concatArgs(arguments, e))
            }
        }, o.prototype.bubbleRealtimeEventsForUser = function () {
            var t, e, i, n, o, r = this;
            for (n = this.realtimeEvents, o = [], e = 0, i = n.length; i > e; e++)t = n[e], LayerVault.Utils.addToEventMask(t), o.push(this.addEventListener(t, function (e) {
                return r.fireEvent("publishTo", {room: "user/" + LayerVault.Utils.userId(), event: {name: t, obj: e}})
            }));
            return o
        }, o
    }(LayerVault)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    }, i = [].slice;
    LayerVault.Component = function (n) {
        function o(t, e) {
            if (this.config = null != t ? t : {}, this.controller = e, null != this.config.el && (this.el = this.config.el), null == this.el)throw"" + this.componentName + " is missing a root element";
            this.$body = $(document.body), this.createThrottledFunctions(), this.bindEvents(), this.bindKeys(), this.bubbleRealtimeEventsForUser(), this.initialize()
        }

        return e(o, n), o.prototype.componentName = null, o.prototype.events = {}, o.prototype.keyEvents = {}, o.prototype.throttledFunctions = {}, o.prototype.selectors = {}, o.prototype.realtimeEvents = [], o.prototype.el = null, o.prototype.initialize = function () {
        }, o.prototype.$el = function () {
            return $(this.el)
        }, o.prototype.$ = function (t) {
            return this.$el().find(t)
        }, o.prototype.$filter = function (t) {
            return this.$el().filter(t)
        }, o.prototype.$on = function () {
            var t, e;
            return e = 1 <= arguments.length ? i.call(arguments, 0) : [], t = this.$el(), t.on.apply(t, e)
        }, o.prototype.$off = function () {
            var t, e;
            return e = 1 <= arguments.length ? i.call(arguments, 0) : [], t = this.$el(), t.off.apply(t, e)
        }, o.prototype.createThrottledFunctions = function () {
            var e, i, n, o, r, s, a;
            if (!$.isEmptyObject(this.throttledFunctions)) {
                s = this.throttledFunctions, a = [];
                for (o in s)t.call(s, o) && (n = s[o], a.push(function () {
                    var s;
                    s = [];
                    for (r in n)t.call(n, r) && (e = n[r], i = o + r.charAt(0).toUpperCase() + r.slice(1) + "d", s.push(this[i] = _[r](this[o], e)));
                    return s
                }.call(this)));
                return a
            }
        }, o.prototype.bindEvents = function () {
            var e, i, n, o, r;
            o = this.events, r = [];
            for (e in o)t.call(o, e) && (n = o[e], _.isArray(n) || (n = [n]), r.push(function () {
                var t, o, r;
                for (r = [], t = 0, o = n.length; o > t; t++)i = n[t], (null !== i || (i = "on" + e.charAt(0).toUpperCase() + e.slice(1), null != this[i])) && r.push(this.addEventListener(e, this[i]));
                return r
            }.call(this)));
            return r
        }, o.prototype.bindKeys = function () {
            return LayerVault.Keyboard.registerEvents(this.keyEvents)
        }, o.prototype.bubbleRealtimeEventsForUser = function () {
            var t, e, i, n, o, r = this;
            for (n = this.realtimeEvents, o = [], e = 0, i = n.length; i > e; e++)t = n[e], LayerVault.Utils.addToEventMask(t), o.push(this.addEventListener(t, function (e) {
                return r.fireEvent("publishTo", {room: "user/" + LayerVault.Utils.userId(), event: {name: t, obj: e}})
            }));
            return o
        }, o
    }(LayerVault)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    }, i = [].slice;
    LayerVault.Keyboard = function (n) {
        function o() {
            var t = this;
            this.onKeyUp = function () {
                return o.prototype.onKeyUp.apply(t, arguments)
            }, this.onKeyDown = function () {
                return o.prototype.onKeyDown.apply(t, arguments)
            }, this.registerEvent = function () {
                return o.prototype.registerEvent.apply(t, arguments)
            }, this.startKeyboardEvents = function () {
                return o.prototype.startKeyboardEvents.apply(t, arguments)
            }, this.stopKeyboardEvents = function () {
                return o.prototype.stopKeyboardEvents.apply(t, arguments)
            }, this.addEventListener("registerEvent", this.registerEvent), this.addEventListener("stopListeningForKeyboardEvents", this.stopKeyboardEvents), this.addEventListener("startListeningForKeyboardEvents", this.startKeyboardEvents), this.registerKeys()
        }

        var r;
        return e(o, n), r = null, o.initialize = function () {
            return this.instance()
        }, o.instance = function () {
            return null == r && (r = new this), r
        }, o.run = function (t, e) {
            return this.instance()[t].apply(this.instance(), e)
        }, o.registerEvent = function () {
            var t;
            return t = 1 <= arguments.length ? i.call(arguments, 0) : [], this.run("registerEvent", t)
        }, o.registerEvents = function () {
            var t;
            return t = 1 <= arguments.length ? i.call(arguments, 0) : [], this.run("registerEvents", t)
        }, o.prototype.keys = {"shift+¿": "toggleKeyboardShortcutsHelp"}, o.prototype.stopListening = !1, o.prototype.stopKeyboardEvents = function () {
            return this.stopListening = !0
        }, o.prototype.startKeyboardEvents = function () {
            return this.stopListening = !1
        }, o.prototype.registerEvent = function (t) {
            return this.keys = $.extend(this.keys, t)
        }, o.prototype.registerEvents = function (e) {
            var i, n, o, r;
            null == e && (e = {}), r = [];
            for (i in e)t.call(e, i) && (n = e[i], o = {}, o[i] = n, r.push(this.registerEvent(o)));
            return r
        }, o.prototype.registerKeys = function () {
            return $(document.body).keydown(this.onKeyDown), $(document.body).keyup(this.onKeyUp)
        }, o.prototype.onKeyDown = function (t) {
            var e, i, n;
            return this.stopListening ? !0 : t.metaKey ? !0 : (i = parseInt(t.keyCode, 10), n = String.fromCharCode(i).toLowerCase(), e = "", 27 !== i && t.target !== document.body ? !0 : (t.shiftKey && (e += "shift+", this.fireEvent("shiftDown", t)), e += function () {
                switch (i) {
                    case 39:
                        return"rightArrow";
                    case 37:
                        return"leftArrow";
                    case 38:
                        return"upArrow";
                    case 40:
                        return"downArrow";
                    case 9:
                        return"tab";
                    case 27:
                        return"esc";
                    case 13:
                        return"enter";
                    case 187:
                        return"plus";
                    case 32:
                        return"space";
                    default:
                        return n
                }
            }(), "undefined" != typeof this.keys[e] ? (_.isFunction(this.keys[e]) ? this.keys[e]() : _.isString(this.keys[e]) && this.fireEvent(this.keys[e]), t.stopPropagation(), t.preventDefault(), !1) : !0))
        }, o.prototype.onKeyUp = function (t) {
            return 16 === t.keyCode ? this.fireEvent("shiftUp") : void 0
        }, o
    }(LayerVault)
}.call(this), function () {
    LayerVault.Utils = function () {
        function t() {
        }

        return t.greyPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAP7+/v///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", t.eventMask = [], t.zeropad = function (t) {
            return(10 > t ? "0" : "") + t
        }, t.uniqid = function () {
            var t;
            return t = 0, function () {
                return t++
            }
        }(), t.secondsToFullDate = function (t) {
            var e, i, n, o;
            return i = new Date(1e3 * t), o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], n = i.getHours(), e = "AM", n >= 12 && (n -= 12, e = "PM"), 0 === n && (n = 12), "" + o[i.getMonth()] + " " + i.getDate() + ", " + i.getFullYear() + " at " + n + ":" + this.zeropad(i.getMinutes()) + " " + e
        }, t.dateInSecondstoISOString = function (t) {
            var e;
            return e = new Date(1e3 * t), "" + e.getUTCFullYear() + "-" + this.zeropad(e.getUTCMonth() + 1) + "-" + this.zeropad(e.getUTCDate()) + "T" + this.zeropad(e.getUTCHours()) + ":" + this.zeropad(e.getUTCMinutes()) + ":" + this.zeropad(e.getUTCSeconds()) + "Z"
        }, t.getGravatarUrl = function (t, e) {
            var i, n = function (t) {
                function e(t, e) {
                    return t << e | t >>> 32 - e
                }

                function i(t, e) {
                    var i, n, o, r, s;
                    return o = 2147483648 & t, r = 2147483648 & e, i = 1073741824 & t, n = 1073741824 & e, s = (1073741823 & t) + (1073741823 & e), i & n ? 2147483648 ^ s ^ o ^ r : i | n ? 1073741824 & s ? 3221225472 ^ s ^ o ^ r : 1073741824 ^ s ^ o ^ r : s ^ o ^ r
                }

                function n(t, e, i) {
                    return t & e | ~t & i
                }

                function o(t, e, i) {
                    return t & i | e & ~i
                }

                function r(t, e, i) {
                    return t ^ e ^ i
                }

                function s(t, e, i) {
                    return e ^ (t | ~i)
                }

                function a(t, o, r, s, a, l, u) {
                    return t = i(t, i(i(n(o, r, s), a), u)), i(e(t, l), o)
                }

                function l(t, n, r, s, a, l, u) {
                    return t = i(t, i(i(o(n, r, s), a), u)), i(e(t, l), n)
                }

                function u(t, n, o, s, a, l, u) {
                    return t = i(t, i(i(r(n, o, s), a), u)), i(e(t, l), n)
                }

                function h(t, n, o, r, a, l, u) {
                    return t = i(t, i(i(s(n, o, r), a), u)), i(e(t, l), n)
                }

                function c(t) {
                    for (var e, i = t.length, n = i + 8, o = (n - n % 64) / 64, r = 16 * (o + 1), s = Array(r - 1), a = 0, l = 0; i > l;)e = (l - l % 4) / 4, a = 8 * (l % 4), s[e] = s[e] | t.charCodeAt(l) << a, l++;
                    return e = (l - l % 4) / 4, a = 8 * (l % 4), s[e] = s[e] | 128 << a, s[r - 2] = i << 3, s[r - 1] = i >>> 29, s
                }

                function p(t) {
                    var e, i, n = "", o = "";
                    for (i = 0; 3 >= i; i++)e = 255 & t >>> 8 * i, o = "0" + e.toString(16), n += o.substr(o.length - 2, 2);
                    return n
                }

                function d(t) {
                    t = t.replace(/rn/g, "n");
                    for (var e = "", i = 0; i < t.length; i++) {
                        var n = t.charCodeAt(i);
                        128 > n ? e += String.fromCharCode(n) : n > 127 && 2048 > n ? (e += String.fromCharCode(192 | n >> 6), e += String.fromCharCode(128 | 63 & n)) : (e += String.fromCharCode(224 | n >> 12), e += String.fromCharCode(128 | 63 & n >> 6), e += String.fromCharCode(128 | 63 & n))
                    }
                    return e
                }

                var f, g, m, v, y, b, _, C, w, x = Array(), S = 7, k = 12, T = 17, D = 22, P = 5, E = 9, M = 14, I = 20, F = 4, A = 11, $ = 16, L = 23, N = 6, O = 10, V = 15, R = 21;
                for (t = d(t), x = c(t), b = 1732584193, _ = 4023233417, C = 2562383102, w = 271733878, f = 0; f < x.length; f += 16)g = b, m = _, v = C, y = w, b = a(b, _, C, w, x[f + 0], S, 3614090360), w = a(w, b, _, C, x[f + 1], k, 3905402710), C = a(C, w, b, _, x[f + 2], T, 606105819), _ = a(_, C, w, b, x[f + 3], D, 3250441966), b = a(b, _, C, w, x[f + 4], S, 4118548399), w = a(w, b, _, C, x[f + 5], k, 1200080426), C = a(C, w, b, _, x[f + 6], T, 2821735955), _ = a(_, C, w, b, x[f + 7], D, 4249261313), b = a(b, _, C, w, x[f + 8], S, 1770035416), w = a(w, b, _, C, x[f + 9], k, 2336552879), C = a(C, w, b, _, x[f + 10], T, 4294925233), _ = a(_, C, w, b, x[f + 11], D, 2304563134), b = a(b, _, C, w, x[f + 12], S, 1804603682), w = a(w, b, _, C, x[f + 13], k, 4254626195), C = a(C, w, b, _, x[f + 14], T, 2792965006), _ = a(_, C, w, b, x[f + 15], D, 1236535329), b = l(b, _, C, w, x[f + 1], P, 4129170786), w = l(w, b, _, C, x[f + 6], E, 3225465664), C = l(C, w, b, _, x[f + 11], M, 643717713), _ = l(_, C, w, b, x[f + 0], I, 3921069994), b = l(b, _, C, w, x[f + 5], P, 3593408605), w = l(w, b, _, C, x[f + 10], E, 38016083), C = l(C, w, b, _, x[f + 15], M, 3634488961), _ = l(_, C, w, b, x[f + 4], I, 3889429448), b = l(b, _, C, w, x[f + 9], P, 568446438), w = l(w, b, _, C, x[f + 14], E, 3275163606), C = l(C, w, b, _, x[f + 3], M, 4107603335), _ = l(_, C, w, b, x[f + 8], I, 1163531501), b = l(b, _, C, w, x[f + 13], P, 2850285829), w = l(w, b, _, C, x[f + 2], E, 4243563512), C = l(C, w, b, _, x[f + 7], M, 1735328473), _ = l(_, C, w, b, x[f + 12], I, 2368359562), b = u(b, _, C, w, x[f + 5], F, 4294588738), w = u(w, b, _, C, x[f + 8], A, 2272392833), C = u(C, w, b, _, x[f + 11], $, 1839030562), _ = u(_, C, w, b, x[f + 14], L, 4259657740), b = u(b, _, C, w, x[f + 1], F, 2763975236), w = u(w, b, _, C, x[f + 4], A, 1272893353), C = u(C, w, b, _, x[f + 7], $, 4139469664), _ = u(_, C, w, b, x[f + 10], L, 3200236656), b = u(b, _, C, w, x[f + 13], F, 681279174), w = u(w, b, _, C, x[f + 0], A, 3936430074), C = u(C, w, b, _, x[f + 3], $, 3572445317), _ = u(_, C, w, b, x[f + 6], L, 76029189), b = u(b, _, C, w, x[f + 9], F, 3654602809), w = u(w, b, _, C, x[f + 12], A, 3873151461), C = u(C, w, b, _, x[f + 15], $, 530742520), _ = u(_, C, w, b, x[f + 2], L, 3299628645), b = h(b, _, C, w, x[f + 0], N, 4096336452), w = h(w, b, _, C, x[f + 7], O, 1126891415), C = h(C, w, b, _, x[f + 14], V, 2878612391), _ = h(_, C, w, b, x[f + 5], R, 4237533241), b = h(b, _, C, w, x[f + 12], N, 1700485571), w = h(w, b, _, C, x[f + 3], O, 2399980690), C = h(C, w, b, _, x[f + 10], V, 4293915773), _ = h(_, C, w, b, x[f + 1], R, 2240044497), b = h(b, _, C, w, x[f + 8], N, 1873313359), w = h(w, b, _, C, x[f + 15], O, 4264355552), C = h(C, w, b, _, x[f + 6], V, 2734768916), _ = h(_, C, w, b, x[f + 13], R, 1309151649), b = h(b, _, C, w, x[f + 4], N, 4149444226), w = h(w, b, _, C, x[f + 11], O, 3174756917), C = h(C, w, b, _, x[f + 2], V, 718787259), _ = h(_, C, w, b, x[f + 9], R, 3951481745), b = i(b, g), _ = i(_, m), C = i(C, v), w = i(w, y);
                var H = p(b) + p(_) + p(C) + p(w);
                return H.toLowerCase()
            };
            return e = e || 80, i = "https:" === location.protocol ? "https://secure.gravatar.com" : "http://www.gravatar.com", i + "/avatar/" + n(t) + ".jpg?s=" + e + "&d=" + location.protocol + "//s3.amazonaws.com/layervault/images/default_avatar_" + e + ".jpeg"
        }, t.getModalSmallGravatar = function (t) {
            var e;
            return e = document.createElement("div"), e.setAttribute("class", "SharedUserIcon"), e.innerHTML = "<img src='" + LayerVault.Utils.getGravatarUrl(t, 40) + "'>", e
        }, t.portraitSrc = function (t, e) {
            var i;
            return i = void 0, t ? (i = "/users/portrait?email=" + t, i = e ? i + "&size=" + e : i) : void 0
        }, t.getUrlVars = function () {
            var t, e, i, n, o, r;
            for (n = [], e = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = o = 0, r = e.length; r >= 0 ? r > o : o > r; i = r >= 0 ? ++o : --o)t = e[i].split("="), n.push(t[0]), n[t[0]] = t[1], i++;
            return n
        }, t.randomString = function () {
            var t, e, i, n, o, r;
            for (t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz", o = 8, i = "", e = r = 0; o >= 0 ? o > r : r > o; e = o >= 0 ? ++r : --r)n = Math.floor(Math.random() * t.length), i += t.substring(n, n + 1), e++;
            return i
        }, t.colorToHex = function (t) {
            var e, i, n;
            for (n = t[0].toString(16), i = t[1].toString(16), e = t[2].toString(16); n.length < 2;)n = "0" + n;
            for (; i.length < 2;)i = "0" + i;
            for (; e.length < 2;)e = "0" + e;
            return n + i + e
        }, t.userId = function () {
            return this.userIdVal ? this.userIdVal : 0 === $("#CurrentUserInfo").length ? null : (this.userIdVal = $("#CurrentUserInfo").attr("data-user-id") || 0, this.userIdVal)
        }, t.userEmail = function () {
            return 0 === $("#CurrentUserInfo").length ? null : $("#CurrentUserInfo").attr("data-user-email")
        }, t.currentUser = function () {
            return $("#CurrentUserInfo").data()
        }, t.isValidEmailAddress = function (t) {
            var e;
            return e = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i), e.test(t)
        }, t.projects = function () {
            return $(".Project")
        }, t.planCollaborators = function () {
            var t;
            return t = parseInt($("#CurrentUserInfo").attr("data-user-plan-collaborators"), 10), isNaN(t) && (t = 0), t
        }, t.addCommas = function (t) {
            var e, i, n;
            for (e = new String(t), n = "", e = e.split("").reverse(), i = 0; i <= e.length - 1;)n = e[i] + n, 0 === (i + 1) % 3 && e.length - 1 !== i && (n = "," + n), i++;
            return n
        }, t.currentFolderPathFromUrl = function () {
            var t;
            return t = /\/~\/([^.]*)(?:\/(.*\..*))?$/.exec(decodeURI(document.location.pathname.toString())), t && 0 !== t.length ? t[1] : null
        }, t.toISO8601 = function (t) {
            return t.getUTCFullYear() + "-" + LayerVault.Utils.pad(t.getUTCMonth() + 1) + "-" + LayerVault.Utils.pad(t.getUTCDate()) + "T" + LayerVault.Utils.pad(t.getUTCHours()) + ":" + LayerVault.Utils.pad(t.getUTCMinutes()) + ":" + LayerVault.Utils.pad(t.getUTCSeconds()) + "Z"
        }, t.pad = function (t) {
            return 10 > t ? "0" + t : t
        }, t.parentIsFirstResponder = function (t) {
            return t.parents(".FirstResponder").length > 0
        }, t.hasClientConnected = function () {
            return $("body").hasClass("Online")
        }, t.currentFolderId = function () {
            var t;
            return t = $("#CurrentFolderInfo"), t.length > 0 ? parseInt(t.attr("data-tree-folder-id"), 10) : null
        }, t.currentFolderPath = function () {
            var t;
            return t = $("#CurrentFolderInfo"), t.length > 0 ? t.attr("data-path") : null
        }, t.atRoot = function () {
            return"/~" === document.location.pathname || "/~/" === document.location.pathname || /^\/[A-Za-z0-9\-]+\/?$/.test(document.location.pathname)
        }, t.addToEventMask = function (t) {
            return this.eventMask.push(t)
        }, t.randomLinkNumber = function () {
            return Math.floor(9e3 * Math.random()) + 1e3
        }, t.randomId = function () {
            return"_LV" + (Math.floor(1e7 * Math.random()) + 1)
        }, t.iOS = function () {
            return/(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent)
        }, t.iPhone = function () {
            return/(iPhone|iPod).*AppleWebKit/i.test(navigator.userAgent)
        }, t.iPad = function () {
            return/(iPad).*AppleWebKit/i.test(navigator.userAgent)
        }, t.chromeIOS = function () {
            return this.iOS() && /CriOS/i.test(navigator.userAgent)
        }, t.firstParentId = function () {
            return parseInt($("#CurrentFileInfo").attr("data-first-parent-id"), 10)
        }, t.treeFileId = function () {
            return parseInt($("#CurrentFileInfo").attr("data-tree-file-id"), 10)
        }, t.currentTreeRevisionId = function () {
            return parseInt($("article.Active").attr("data-tree-revision-id"), 10)
        }, t.revisionNumberInUrl = function () {
            var t;
            return t = /\/(\d+)$/.exec(document.location.pathname), null != t && t.length > 0 ? parseInt(t[1], 10) : null
        }, t.pathWithoutRevisionNumber = function () {
            var t;
            return t = /^(.*)\/(\d+)$/.exec(document.location.pathname), null != t && t.length > 0 ? t[1] : null
        }, t.textWithNewLines = function (t) {
            var e;
            return e = $("<pre />").html(t.html()), $.browser.webkit && e.find("div").replaceWith(function () {
                return"\n" + this.innerHTML
            }), $.browser.msie && e.find("p").replaceWith(function () {
                return this.innerHTML + "<br>"
            }), ($.browser.mozilla || $.browser.opera || $.browser.msie) && e.find("br").replaceWith("\n"), e.text()
        }, t.offsetEventRelative = function (t, e) {
            return t.offsetX ? t : (t.offsetX = t.pageX - e.offsetLeft, t.offsetY = t.pageY - e.offsetTop, t)
        }, t.activeSignpostId = function () {
            return parseInt($(".Active").attr("data-signpost-id"), 10)
        }, t.currentUserIsBeta = function () {
            return 0 === $("#CurrentUserInfo").length ? null : !!$("#CurrentUserInfo").attr("data-is-beta")
        }, t.currentFileExtension = function () {
            return $("#CurrentFileInfo").attr("data-file-extension")
        }, t.currentFileRevisionCount = function () {
            return parseInt($("#CurrentFileInfo").attr("data-revisions"), 10)
        }, t.currentFileSignpostedRevisionCount = function () {
            return parseInt($("#CurrentFileInfo").attr("data-signposted-revisions"), 10)
        }, t.currentPageNumber = function () {
            return parseInt($(".ActivePage").attr("data-page-number"), 10)
        }, t.currentTreeOrganizationId = function () {
            return $("#CurrentOrganizationInfo").attr("data-tree-id")
        }, t.availableOutpostServices = function () {
            return this.currentUser().outpostServices
        }, t.configuredOutpostServices = function () {
            try {
                return JSON.parse($("#CurrentFileInfo").attr("data-configured-outpost-paths"))
            } catch (t) {
                return[]
            }
        }, t.updateConfiguredOutpostServices = function (t) {
            return t = JSON.stringify(t), $("#CurrentFileInfo").attr("data-configured-outpost-paths", t)
        }, t.onDirectoryPage = function () {
            return $("body").hasClass("DirectoryPage")
        }, t.onFilePage = function () {
            return $("body").hasClass("FilePage")
        }, t.initTooltips = function () {
            return $("[rel=tooltip]").tooltip()
        }, t.projectNameIsBlank = function (t) {
            return"" === $.trim(t)
        }, t.projectNameHasSlashes = function (t) {
            return t.match(/\//)
        }, t.projectNameIsLegal = function (t) {
            return t.match(/^[\sA-Za-z0-9_-]+$/)
        }, t.organizationUsesPerHeadBilling = function () {
            return-1 === LayerVault.Utils.organizationCollaborators()
        }, t.organizationCollaborators = function () {
            return parseInt($("#CurrentOrganizationInfo").attr("data-plan-collaborators"), 10)
        }, t.revisionToSignpostNumber = function (t) {
            return $("#RevisionThumbnailContents article").dfilter("revision", t).attr("data-signpost-number")
        }, t.signpostNumberToRevision = function (t) {
            return $("#RevisionThumbnailContents article").dfilter("signpost-number", t).attr("data-revision")
        }, t.ccIsValid = function (t) {
            return Stripe.validateCardNumber(t)
        }, t.cvvIsValid = function (t) {
            return Stripe.validateCVC(t)
        }, t.dateIsValid = function (t, e) {
            return Stripe.validateExpiry(t, e)
        }, t.refreshPage = function () {
            return window.location.href = window.location.href
        }, t.fireMixpanelEvent = function (t, e) {
            return null == e && (e = {}), "undefined" != typeof mixpanel && null !== mixpanel ? mixpanel.track(t, e) : void 0
        }, t.getURLParameter = function (t) {
            return decodeURI((RegExp(t + "=" + "(.+?)(&|$)").exec(location.search) || [0, null])[1])
        }, t
    }(), Array.max = function (t) {
        return Math.max.apply(Math, t)
    }, Array.min = function (t) {
        return Math.min.apply(Math, t)
    }, Math.randomRange = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }, String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }, window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame
    }()
}.call(this), /*!
 Video.js - HTML5 Video Player
 Version 3.2.0

 LGPL v3 LICENSE INFO
 This file is part of Video.js. Copyright 2011 Zencoder, Inc.

 Video.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Video.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with Video.js.  If not, see <http://www.gnu.org/licenses/>.
 */
    function (window, undefined) {
        function returnTrue() {
            return!0
        }

        function returnFalse() {
            return!1
        }

        var document = window.document;
        document.createElement("video"), document.createElement("audio");
        var VideoJS = function (t, e, i) {
            var n;
            if ("string" == typeof t) {
                if (0 === t.indexOf("#") && (t = t.slice(1)), _V_.players[t])return _V_.players[t];
                n = _V_.el(t)
            } else n = t;
            if (!n || !n.nodeName)throw new TypeError("The element or ID supplied is not valid. (VideoJS)");
            return n.player || new _V_.Player(n, e, i)
        }, _V_ = VideoJS, CDN_VERSION = "c";
        VideoJS.players = {}, VideoJS.options = {techOrder: ["html5", "flash"], html5: {}, flash: {swf: "http://vjs.zencdn.net/c/video-js.swf"},
            width: "auto", height: "auto", defaultVolume: 0, components: {posterImage: {}, textTrackDisplay: {}, loadingSpinner: {}, bigPlayButton: {}, controlBar: {}}}, "GENERATED_CDN_VSN" != CDN_VERSION && (_V_.options.flash.swf = "http://vjs.zencdn.net/" + CDN_VERSION + "/video-js.swf"), _V_.merge = function (t, e, i) {
            e || (e = {});
            for (var n in e)!e.hasOwnProperty(n) || i && t.hasOwnProperty(n) || (t[n] = e[n]);
            return t
        }, _V_.extend = function (t) {
            this.merge(this, t, !0)
        }, _V_.extend({tech: {}, controlSets: {}, isIE: function () {
            return!1
        }, isFF: function () {
            return!!_V_.ua.match("Firefox")
        }, isIPad: function () {
            return null !== navigator.userAgent.match(/iPad/i)
        }, isIPhone: function () {
            return null !== navigator.userAgent.match(/iPhone/i)
        }, isIOS: function () {
            return VideoJS.isIPhone() || VideoJS.isIPad()
        },
            iOSVersion: function () {
                var t = navigator.userAgent.match(/OS (\d+)_/i);
                return t && t[1] ? t[1] : void 0
            }, isAndroid: function () {
                return null !== navigator.userAgent.match(/Android.*AppleWebKit/i)
            }, androidVersion: function () {
                var t = navigator.userAgent.match(/Android (\d+)\./i);
                return t && t[1] ? t[1] : void 0
            }, testVid: document.createElement("video"), ua: navigator.userAgent, support: {}, each: function (t, e) {
                if (t && 0 !== t.length)for (var i = 0, n = t.length; n > i; i++)e.call(this, t[i], i)
            }, eachProp: function (t, e) {
                if (t)for (var i in t)t.hasOwnProperty(i) && e.call(this, i, t[i])
            }, el: function (t) {
                return document.getElementById(t)
            }, createElement: function (t, e) {
                var i, n = document.createElement(t);
                for (i in e)e.hasOwnProperty(i) && (-1 !== i.indexOf("-") ? n.setAttribute(i, e[i]) : n[i] = e[i]);
                return n
            }, insertFirst: function (t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            },
            addClass: function (t, e) {
                -1 == (" " + t.className + " ").indexOf(" " + e + " ") && (t.className = "" === t.className ? e : t.className + " " + e)
            }, removeClass: function (t, e) {
                if (-1 != t.className.indexOf(e)) {
                    var i = t.className.split(" ");
                    i.splice(i.indexOf(e), 1), t.className = i.join(" ")
                }
            },
            remove: function (t, e) {
                if (e) {
                    var i = e.indexOf(t);
                    return-1 != i ? e.splice(i, 1) : void 0
                }
            }, blockTextSelection: function () {
                document.body.focus(), document.onselectstart = function () {
                    return!1
                }
            }, unblockTextSelection: function () {
                document.onselectstart = function () {
                    return!0
                }
            }, formatTime: function (t, e) {
                e = e || t;
                var i = Math.floor(t % 60), n = Math.floor(t / 60 % 60), o = Math.floor(t / 3600), r = Math.floor(e / 60 % 60), s = Math.floor(e / 3600);
                return o = o > 0 || s > 0 ? o + ":" : "", n = ((o || r >= 10) && 10 > n ? "0" + n : n) + ":", i = 10 > i ? "0" + i : i, o + n + i
            }, uc: function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }, getRelativePosition: function (t, e) {
                return Math.max(0, Math.min(1, (t - _V_.findPosX(e)) / e.offsetWidth))
            }, getComputedStyleValue: function (t, e) {
                return window.getComputedStyle(t, null).getPropertyValue(e)
            }, trim: function (t) {
                return t.toString().replace(/^\s+/, "").replace(/\s+$/, "")
            }, round: function (t, e) {
                return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
            }, isEmpty: function (t) {
                for (var e in t)return!1;
                return!0
            }, createTimeRange: function (t, e) {
                return{length: 1, start: function () {
                    return t
                }, end: function () {
                    return e
                }}
            }, cache: {}, guid: 1, expando: "vdata" + (new Date).getTime(), getData: function (t) {
                var e = t[_V_.expando];
                return e || (e = t[_V_.expando] = _V_.guid++, _V_.cache[e] = {}), _V_.cache[e]
            }, removeData: function (t) {
                var e = t[_V_.expando];
                if (e) {
                    delete _V_.cache[e];
                    try {
                        delete t[_V_.expando]
                    } catch (i) {
                        t.removeAttribute ? t.removeAttribute(_V_.expando) : t[_V_.expando] = null
                    }
                }
            }, proxy: function (t, e, i) {
                e.guid || (e.guid = _V_.guid++);
                var n = function () {
                    return e.apply(t, arguments)
                };
                return n.guid = i ? i + "_" + e.guid : e.guid, n
            }, get: function (t, e, i) {
                var n = 0 == t.indexOf("file:") || 0 == window.location.href.indexOf("file:") && -1 == t.indexOf("http:");
                "undefined" == typeof XMLHttpRequest && (XMLHttpRequest = function () {
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (t) {
                    }
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (e) {
                    }
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (i) {
                    }
                    throw new Error("This browser does not support XMLHttpRequest.")
                });
                var o = new XMLHttpRequest;
                try {
                    o.open("GET", t)
                } catch (r) {
                    return _V_.log("VideoJS XMLHttpRequest (open)", r), !1
                }
                o.onreadystatechange = _V_.proxy(this, function () {
                    4 == o.readyState && (200 == o.status || n && 0 == o.status ? e(o.responseText) : i && i())
                });
                try {
                    o.send()
                } catch (r) {
                    _V_.log("VideoJS XMLHttpRequest (send)", r), i && i(r)
                }
            }, setLocalStorage: function (t, e) {
                var i = window.localStorage || !1;
                if (i)try {
                    i[t] = e
                } catch (n) {
                    22 == n.code || 1014 == n.code ? _V_.log("LocalStorage Full (VideoJS)", n) : _V_.log("LocalStorage Error (VideoJS)", n)
                }
            }, getAbsoluteURL: function (t) {
                return t.match(/^https?:\/\//) || (t = _V_.createElement("div", {innerHTML: '<a href="' + t + '">x</a>'}).firstChild.href), t
            }}), _V_.log = function () {
            if (_V_.log.history = _V_.log.history || [], _V_.log.history.push(arguments), window.console) {
                arguments.callee = arguments.callee.caller;
                var t = [].slice.call(arguments);
                "object" == typeof console.log ? _V_.log.apply.call(console.log, console, t) : console.log.apply(console, t)
            }
        }, function (t) {
            function e() {
            }

            for (var i, n = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","); i = n.pop();)t[i] = t[i] || e
        }(function () {
            try {
                return console.log(), window.console
            } catch (t) {
                return window.console = {}
            }
        }()), _V_.findPosX = "getBoundingClientRect"in document.documentElement ? function (t) {
            var e;
            try {
                e = t.getBoundingClientRect()
            } catch (i) {
            }
            if (!e)return 0;
            var n = document.documentElement, o = document.body, r = n.clientLeft || o.clientLeft || 0, s = window.pageXOffset || o.scrollLeft, a = e.left + s - r;
            return a
        } : function (t) {
            for (var e = t.offsetLeft; t = obj.offsetParent;)-1 == t.className.indexOf("video-js"), e += t.offsetLeft;
            return e
        }, function () {
            var t = !1, e = /xyz/.test(function () {
            }) ? /\b_super\b/ : /.*/;
            _V_.Class = function () {
            }, _V_.Class.extend = function (i) {
                function n() {
                    return!t && this.init ? this.init.apply(this, arguments) : t ? void 0 : arguments.callee.prototype.init()
                }

                var o = this.prototype;
                t = !0;
                var r = new this;
                t = !1;
                for (var s in i)r[s] = "function" == typeof i[s] && "function" == typeof o[s] && e.test(i[s]) ? function (t, e) {
                    return function () {
                        var i = this._super;
                        this._super = o[t];
                        var n = e.apply(this, arguments);
                        return this._super = i, n
                    }
                }(s, i[s]) : i[s];
                return n.prototype = r, n.constructor = n, n.extend = arguments.callee, n
            }
        }(), _V_.Component = _V_.Class.extend({init: function (t, e) {
            this.player = t, e = this.options = _V_.merge(this.options || {}, e), this.el = e.el ? e.el : this.createElement(), this.initComponents()
        }, destroy: function () {
        }, createElement: function (t, e) {
            return _V_.createElement(t || "div", e)
        }, buildCSSClass: function () {
            return""
        }, initComponents: function () {
            var t = this.options;
            t && t.components && this.eachProp(t.components, function (t, e) {
                var i = this.proxy(function () {
                    this[t] = this.addComponent(t, e)
                });
                e.loadEvent ? this.one(e.loadEvent, i) : i()
            })
        }, addComponent: function (t, e) {
            var i, n;
            return"string" == typeof t ? (e = e || {}, n = e.componentClass || _V_.uc(t), i = new _V_[n](this.player || this, e)) : i = t, this.el.appendChild(i.el), i
        },
            removeComponent: function (t) {
                this.el.removeChild(t.el)
            }, show: function () {
                this.el.style.display = "block"
            }, hide: function () {
                this.el.style.display = "none"
            }, fadeIn: function () {
                this.removeClass("vjs-fade-out"), this.addClass("vjs-fade-in")
            }, fadeOut: function () {
                this.removeClass("vjs-fade-in"), this.addClass("vjs-fade-out")
            }, lockShowing: function () {
                var t = this.el.style;
                t.display = "block", t.opacity = 1, t.visiblity = "visible"
            }, unlockShowing: function () {
                var t = this.el.style;
                t.display = "", t.opacity = "", t.visiblity = ""
            }, addClass: function (t) {
                _V_.addClass(this.el, t)
            }, removeClass: function (t) {
                _V_.removeClass(this.el, t)
            }, addEvent: function (t, e) {
                return _V_.addEvent(this.el, t, _V_.proxy(this, e))
            }, removeEvent: function (t, e) {
                return _V_.removeEvent(this.el, t, e)
            }, triggerEvent: function (t, e) {
                return _V_.triggerEvent(this.el, t, e)
            }, one: function (t, e) {
                _V_.one(this.el, t, _V_.proxy(this, e))
            },
            ready: function (t) {
                return t ? (this.isReady ? t.call(this) : (this.readyQueue === undefined && (this.readyQueue = []), this.readyQueue.push(t)), this) : this
            },
            triggerReady: function () {
                this.isReady = !0, this.readyQueue && this.readyQueue.length > 0 && (this.each(this.readyQueue, function (t) {
                    t.call(this)
                }), this.readyQueue = [], this.triggerEvent("ready"))
            }, each: function (t, e) {
                _V_.each.call(this, t, e)
            }, eachProp: function (t, e) {
                _V_.eachProp.call(this, t, e)
            }, extend: function (t) {
                _V_.merge(this, t)
            }, proxy: function (t, e) {
                return _V_.proxy(this, t, e)
            }}), _V_.Control = _V_.Component.extend({buildCSSClass: function () {
            return"vjs-control " + this._super()
        }}), _V_.ControlBar = _V_.Component.extend({options: {loadEvent: "play", components: {playToggle: {}, fullscreenToggle: {}, currentTimeDisplay: {}, timeDivider: {}, durationDisplay: {}, remainingTimeDisplay: {}, progressControl: {}, volumeControl: {}, muteToggle: {}}}, init: function (t, e) {
            this._super(t, e), t.addEvent("play", this.proxy(function () {
                this.fadeIn(), this.player.addEvent("mouseover", this.proxy(this.fadeIn)), this.player.addEvent("mouseout", this.proxy(this.fadeOut))
            }))
        }, createElement: function () {
            return _V_.createElement("div", {className: "vjs-controls"})
        }, fadeIn: function () {
            this._super(), this.player.triggerEvent("controlsvisible")
        }, fadeOut: function () {
            this._super(), this.player.triggerEvent("controlshidden")
        }, lockShowing: function () {
            this.el.style.opacity = "1"
        }}), _V_.Button = _V_.Control.extend({init: function (t, e) {
            this._super(t, e), this.addEvent("click", this.onClick), this.addEvent("focus", this.onFocus), this.addEvent("blur", this.onBlur)
        }, createElement: function (t, e) {
            return e = _V_.merge({className: this.buildCSSClass(), innerHTML: '<div><span class="vjs-control-text">' + (this.buttonText || "Need Text") + "</span></div>", role: "button", tabIndex: 0}, e), this._super(t, e)
        }, onClick: function () {
        }, onFocus: function () {
            _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        }, onKeyPress: function (t) {
            (32 == t.which || 13 == t.which) && (t.preventDefault(), this.onClick())
        }, onBlur: function () {
            _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        }}), _V_.PlayButton = _V_.Button.extend({buttonText: "Play", buildCSSClass: function () {
            return"vjs-play-button " + this._super()
        }, onClick: function () {
            this.player.play()
        }}), _V_.PauseButton = _V_.Button.extend({buttonText: "Pause", buildCSSClass: function () {
            return"vjs-pause-button " + this._super()
        },
            onClick: function () {
                this.player.pause()
            }}), _V_.PlayToggle = _V_.Button.extend({buttonText: "Play", init: function (t, e) {
            this._super(t, e), t.addEvent("play", _V_.proxy(this, this.onPlay)), t.addEvent("pause", _V_.proxy(this, this.onPause))
        }, buildCSSClass: function () {
            return"vjs-play-control " + this._super()
        }, onClick: function () {
            this.player.paused() ? this.player.play() : this.player.pause()
        }, onPlay: function () {
            _V_.removeClass(this.el, "vjs-paused"), _V_.addClass(this.el, "vjs-playing")
        }, onPause: function () {
            _V_.removeClass(this.el, "vjs-playing"), _V_.addClass(this.el, "vjs-paused")
        }}), _V_.FullscreenToggle = _V_.Button.extend({buttonText: "Fullscreen", buildCSSClass: function () {
            return"vjs-fullscreen-control " + this._super()
        }, onClick: function () {
            this.player.isFullScreen ? this.player.cancelFullScreen() : this.player.requestFullScreen()
        }}), _V_.BigPlayButton = _V_.Button.extend({init: function (t, e) {
            this._super(t, e), t.addEvent("play", _V_.proxy(this, this.hide)), t.addEvent("ended", _V_.proxy(this, this.show))
        }, createElement: function () {
            return this._super("div", {className: "vjs-big-play-button", innerHTML: "<span></span>"})
        }, onClick: function () {
            this.player.currentTime() && this.player.currentTime(0), this.player.play()
        }}), _V_.LoadingSpinner = _V_.Component.extend({init: function (t, e) {
            this._super(t, e), t.addEvent("canplay", _V_.proxy(this, this.hide)), t.addEvent("canplaythrough", _V_.proxy(this, this.hide)), t.addEvent("playing", _V_.proxy(this, this.hide)), t.addEvent("seeking", _V_.proxy(this, this.show)), t.addEvent("error", _V_.proxy(this, this.show)), t.addEvent("waiting", _V_.proxy(this, this.show))
        }, createElement: function () {
            var t, e;
            return"string" == typeof this.player.el.style.WebkitBorderRadius || "string" == typeof this.player.el.style.MozBorderRadius || "string" == typeof this.player.el.style.KhtmlBorderRadius || "string" == typeof this.player.el.style.borderRadius ? (t = "vjs-loading-spinner", e = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>") : (t = "vjs-loading-spinner-fallback", e = ""), this._super("div", {className: t, innerHTML: e})
        }}), _V_.CurrentTimeDisplay = _V_.Component.extend({init: function (t, e) {
            this._super(t, e), t.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
        }, createElement: function () {
            var t = this._super("div", {className: "vjs-current-time vjs-time-controls vjs-control"});
            return this.content = _V_.createElement("div", {className: "vjs-current-time-display", innerHTML: "0:00"}), t.appendChild(_V_.createElement("div").appendChild(this.content)), t
        }, updateContent: function () {
            var t = this.player.scrubbing ? this.player.values.currentTime : this.player.currentTime();
            this.content.innerHTML = _V_.formatTime(t, this.player.duration())
        }}), _V_.DurationDisplay = _V_.Component.extend({init: function (t, e) {
            this._super(t, e), t.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
        }, createElement: function () {
            var t = this._super("div", {className: "vjs-duration vjs-time-controls vjs-control"});
            return this.content = _V_.createElement("div", {className: "vjs-duration-display", innerHTML: "0:00"}), t.appendChild(_V_.createElement("div").appendChild(this.content)), t
        }, updateContent: function () {
            this.player.duration() && (this.content.innerHTML = _V_.formatTime(this.player.duration()))
        }}), _V_.TimeDivider = _V_.Component.extend({createElement: function () {
            return this._super("div", {className: "vjs-time-divider", innerHTML: "<div><span>/</span></div>"})
        }}), _V_.RemainingTimeDisplay = _V_.Component.extend({init: function (t, e) {
            this._super(t, e), t.addEvent("timeupdate", _V_.proxy(this, this.updateContent))
        }, createElement: function () {
            var t = this._super("div", {className: "vjs-remaining-time vjs-time-controls vjs-control"});
            return this.content = _V_.createElement("div", {className: "vjs-remaining-time-display", innerHTML: "-0:00"}), t.appendChild(_V_.createElement("div").appendChild(this.content)), t
        }, updateContent: function () {
            this.player.duration() && (this.content.innerHTML = "-" + _V_.formatTime(this.player.remainingTime()))
        }}), _V_.Slider = _V_.Component.extend({init: function (t, e) {
            this._super(t, e), t.addEvent(this.playerEvent, _V_.proxy(this, this.update)), this.addEvent("mousedown", this.onMouseDown), this.addEvent("focus", this.onFocus), this.addEvent("blur", this.onBlur), this.player.addEvent("controlsvisible", this.proxy(this.update)), this.update()
        }, createElement: function (t, e) {
            return e = _V_.merge({role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0}, e), this._super(t, e)
        }, onMouseDown: function (t) {
            t.preventDefault(), _V_.blockTextSelection(), _V_.addEvent(document, "mousemove", _V_.proxy(this, this.onMouseMove)), _V_.addEvent(document, "mouseup", _V_.proxy(this, this.onMouseUp)), this.onMouseMove(t)
        }, onMouseUp: function () {
            _V_.unblockTextSelection(), _V_.removeEvent(document, "mousemove", this.onMouseMove, !1), _V_.removeEvent(document, "mouseup", this.onMouseUp, !1), this.update()
        }, update: function () {
            var t, e = this.getPercent();
            if (handle = this.handle, bar = this.bar, isNaN(e) && (e = 0), t = e, handle) {
                var i = this.el, n = i.offsetWidth, o = handle.el.offsetWidth, r = o ? o / n : 0, s = 1 - r;
                adjustedProgress = e * s, t = adjustedProgress + r / 2, handle.el.style.left = _V_.round(100 * adjustedProgress, 2) + "%"
            }
            bar.el.style.width = _V_.round(100 * t, 2) + "%"
        }, calculateDistance: function (t) {
            var e = this.el, i = _V_.findPosX(e), n = e.offsetWidth, o = this.handle;
            if (o) {
                var r = o.el.offsetWidth;
                i += r / 2, n -= r
            }
            return Math.max(0, Math.min(1, (t.pageX - i) / n))
        }, onFocus: function () {
            _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        }, onKeyPress: function (t) {
            37 == t.which ? (t.preventDefault(), this.stepBack()) : 39 == t.which && (t.preventDefault(), this.stepForward())
        }, onBlur: function () {
            _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress))
        }}), _V_.ProgressControl = _V_.Component.extend({options: {components: {seekBar: {}}}, createElement: function () {
            return this._super("div", {className: "vjs-progress-control vjs-control"})
        }}), _V_.SeekBar = _V_.Slider.extend({options: {components: {loadProgressBar: {}, bar: {componentClass: "PlayProgressBar"}, handle: {componentClass: "SeekHandle"}}}, playerEvent: "timeupdate", init: function (t, e) {
            this._super(t, e)
        }, createElement: function () {
            return this._super("div", {className: "vjs-progress-holder"})
        }, getPercent: function () {
            return this.player.currentTime() / this.player.duration()
        }, onMouseDown: function (t) {
            this._super(t), this.player.scrubbing = !0, this.videoWasPlaying = !this.player.paused(), this.player.pause()
        }, onMouseMove: function (t) {
            var e = this.calculateDistance(t) * this.player.duration();
            e == this.player.duration() && (e -= .1), this.player.currentTime(e)
        }, onMouseUp: function (t) {
            this._super(t), this.player.scrubbing = !1, this.videoWasPlaying && this.player.play()
        }, stepForward: function () {
            this.player.currentTime(this.player.currentTime() + 1)
        }, stepBack: function () {
            this.player.currentTime(this.player.currentTime() - 1)
        }}), _V_.LoadProgressBar = _V_.Component.extend({init: function (t, e) {
            this._super(t, e), t.addEvent("progress", _V_.proxy(this, this.update))
        }, createElement: function () {
            return this._super("div", {className: "vjs-load-progress", innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'})
        }, update: function () {
            this.el.style && (this.el.style.width = _V_.round(100 * this.player.bufferedPercent(), 2) + "%")
        }}), _V_.PlayProgressBar = _V_.Component.extend({createElement: function () {
            return this._super("div", {className: "vjs-play-progress", innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'})
        }}), _V_.SeekHandle = _V_.Component.extend({createElement: function () {
            return this._super("div", {className: "vjs-seek-handle", innerHTML: '<span class="vjs-control-text">00:00</span>'})
        }}), _V_.VolumeControl = _V_.Component.extend({options: {components: {volumeBar: {}}}, createElement: function () {
            return this._super("div", {className: "vjs-volume-control vjs-control"})
        }}), _V_.VolumeBar = _V_.Slider.extend({options: {components: {bar: {componentClass: "VolumeLevel"}, handle: {componentClass: "VolumeHandle"}}}, playerEvent: "volumechange", createElement: function () {
            return this._super("div", {className: "vjs-volume-bar"})
        }, onMouseMove: function (t) {
            this.player.volume(this.calculateDistance(t))
        }, getPercent: function () {
            return this.player.volume()
        }, stepForward: function () {
            this.player.volume(this.player.volume() + .1)
        }, stepBack: function () {
            this.player.volume(this.player.volume() - .1)
        }}), _V_.VolumeLevel = _V_.Component.extend({createElement: function () {
            return this._super("div", {className: "vjs-volume-level", innerHTML: '<span class="vjs-control-text"></span>'})
        }}), _V_.VolumeHandle = _V_.Component.extend({createElement: function () {
            return this._super("div", {className: "vjs-volume-handle", innerHTML: '<span class="vjs-control-text"></span>'})
        }}), _V_.MuteToggle = _V_.Button.extend({init: function (t, e) {
            this._super(t, e), t.addEvent("volumechange", _V_.proxy(this, this.update))
        }, createElement: function () {
            return this._super("div", {className: "vjs-mute-control vjs-control", innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'})
        }, onClick: function () {
            this.player.muted(this.player.muted() ? !1 : !0)
        }, update: function () {
            var t = this.player.volume(), e = 3;
            0 == t || this.player.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2), _V_.each.call(this, [0, 1, 2, 3], function (t) {
                _V_.removeClass(this.el, "vjs-vol-" + t)
            }), _V_.addClass(this.el, "vjs-vol-" + e)
        }}), _V_.PosterImage = _V_.Button.extend({init: function (t, e) {
            this._super(t, e), this.player.options.poster || this.hide(), t.addEvent("play", _V_.proxy(this, this.hide))
        }, createElement: function () {
            return _V_.createElement("img", {className: "vjs-poster", src: this.player.options.poster, tabIndex: -1})
        }, onClick: function () {
            this.player.play()
        }}), _V_.Menu = _V_.Component.extend({init: function (t, e) {
            this._super(t, e)
        }, addItem: function (t) {
            this.addComponent(t), t.addEvent("click", this.proxy(function () {
                this.unlockShowing()
            }))
        }, createElement: function () {
            return this._super("ul", {className: "vjs-menu"})
        }}), _V_.MenuItem = _V_.Button.extend({init: function (t, e) {
            this._super(t, e), e.selected && this.addClass("vjs-selected")
        }, createElement: function (t, e) {
            return this._super("li", _V_.merge({className: "vjs-menu-item", innerHTML: this.options.label}, e))
        }, onClick: function () {
            this.selected(!0)
        }, selected: function (t) {
            t ? this.addClass("vjs-selected") : this.removeClass("vjs-selected")
        }}), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
            if (void 0 === this || null === this)throw new TypeError;
            var e = Object(this), i = e.length >>> 0;
            if (0 === i)return-1;
            var n = 0;
            if (arguments.length > 0 && (n = Number(arguments[1]), n !== n ? n = 0 : 0 !== n && n !== 1 / 0 && n !== -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= i)return-1;
            for (var o = n >= 0 ? n : Math.max(i - Math.abs(n), 0); i > o; o++)if (o in e && e[o] === t)return o;
            return-1
        }), _V_.extend({addEvent: function (t, e, i) {
            var n, o = _V_.getData(t);
            o && !o.handler && (o.handler = function (e) {
                e = _V_.fixEvent(e);
                var i = _V_.getData(t).events[e.type];
                if (i) {
                    var n = [];
                    _V_.each(i, function (t, e) {
                        n[e] = t
                    });
                    for (var o = 0, r = n.length; r > o; o++)n[o].call(t, e)
                }
            }), o.events || (o.events = {}), n = o.events[e], n || (n = o.events[e] = [], document.addEventListener ? t.addEventListener(e, o.handler, !1) : document.attachEvent && t.attachEvent("on" + e, o.handler)), i.guid || (i.guid = _V_.guid++), n.push(i)
        }, removeEvent: function (t, e, i) {
            var n, o = _V_.getData(t);
            if (o.events)if (e) {
                if (n = o.events[e]) {
                    if (i && i.guid)for (var r = 0; r < n.length; r++)n[r].guid === i.guid && n.splice(r--, 1);
                    _V_.cleanUpEvents(t, e)
                }
            } else for (e in o.events)_V_.cleanUpEvents(t, e)
        }, cleanUpEvents: function (t, e) {
            var i = _V_.getData(t);
            0 === i.events[e].length && (delete i.events[e], document.removeEventListener ? t.removeEventListener(e, i.handler, !1) : document.detachEvent && t.detachEvent("on" + e, i.handler)), _V_.isEmpty(i.events) && (delete i.events, delete i.handler), _V_.isEmpty(i) && _V_.removeData(t)
        }, fixEvent: function (t) {
            if (t[_V_.expando])return t;
            var e = t;
            t = new _V_.Event(e);
            for (var i, n = _V_.Event.props.length; n;)i = _V_.Event.props[--n], t[i] = e[i];
            if (t.target || (t.target = t.srcElement || document), 3 === t.target.nodeType && (t.target = t.target.parentNode), !t.relatedTarget && t.fromElement && (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), null == t.pageX && null != t.clientX) {
                var o = t.target.ownerDocument || document, r = o.documentElement, s = o.body;
                t.pageX = t.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)
            }
            return null != t.which || null == t.charCode && null == t.keyCode || (t.which = null != t.charCode ? t.charCode : t.keyCode), !t.metaKey && t.ctrlKey && (t.metaKey = t.ctrlKey), t.which || t.button === undefined || (t.which = 1 & t.button ? 1 : 2 & t.button ? 3 : 4 & t.button ? 2 : 0), t
        }, triggerEvent: function (t, e) {
            var i, n = _V_.getData(t), o = (t.parentNode || t.ownerDocument, e.type || e);
            n && (i = n.handler), e = "object" == typeof e ? e[_V_.expando] ? e : new _V_.Event(o, e) : new _V_.Event(o), e.type = o, i && i.call(t, e), e.result = undefined, e.target = t
        }, one: function (t, e, i) {
            _V_.addEvent(t, e, function () {
                _V_.removeEvent(t, e, arguments.callee), i.apply(this, arguments)
            })
        }}), _V_.Event = function (t, e) {
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? returnTrue : returnFalse) : this.type = t, e && _V_.merge(this, e), this.timeStamp = (new Date).getTime(), this[_V_.expando] = !0
        }, _V_.Event.prototype = {preventDefault: function () {
            this.isDefaultPrevented = returnTrue;
            var t = this.originalEvent;
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = returnTrue;
            var t = this.originalEvent;
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = returnTrue, this.stopPropagation()
        }, isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse}, _V_.Event.props = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
        var JSON;
        JSON || (JSON = {}), function () {
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                function walk(t, e) {
                    var i, n, o = t[e];
                    if (o && "object" == typeof o)for (i in o)Object.prototype.hasOwnProperty.call(o, i) && (n = walk(o, i), n !== undefined ? o[i] = n : delete o[i]);
                    return reviver.call(t, e, o)
                }

                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
                    return"\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }(), _V_.Player = _V_.Component.extend({init: function (t, e, i) {
            this.tag = t;
            var n = this.el = _V_.createElement("div"), o = this.options = {}, r = o.width = t.getAttribute("width"), s = o.height = t.getAttribute("height"), a = r || 300, l = s || 150;
            if (t.player = n.player = this, this.ready(i), t.parentNode.insertBefore(n, t), n.appendChild(t), n.id = this.id = t.id, n.className = t.className, t.id += "_html5_api", t.className = "vjs-tech", _V_.players[n.id] = this, n.setAttribute("width", a), n.setAttribute("height", l), n.style.width = a + "px", n.style.height = l + "px", t.removeAttribute("width"), t.removeAttribute("height"), _V_.merge(o, _V_.options), _V_.merge(o, this.getVideoTagSettings()), _V_.merge(o, e), t.removeAttribute("controls"), t.removeAttribute("poster"), t.hasChildNodes())for (var u = 0, h = t.childNodes; u < h.length; u++)("SOURCE" == h[u].nodeName || "TRACK" == h[u].nodeName) && t.removeChild(h[u]);
            if (this.values = {}, this.addClass("vjs-paused"), this.addEvent("ended", this.onEnded), this.addEvent("play", this.onPlay), this.addEvent("pause", this.onPause), this.addEvent("progress", this.onProgress), this.addEvent("error", this.onError), o.controls && this.ready(function () {
                this.initComponents()
            }), this.textTracks = [], o.tracks && o.tracks.length > 0 && this.addTextTracks(o.tracks), o.sources && 0 != o.sources.length)this.src(o.sources); else for (var u = 0, h = o.techOrder; u < h.length; u++) {
                var c = h[u], p = _V_[c];
                if (p.isSupported()) {
                    this.loadTech(c);
                    break
                }
            }
        }, values: {}, destroy: function () {
            this.stopTrackingProgress(), this.stopTrackingCurrentTime(), _V_.players[this.id] = null, delete _V_.players[this.id], this.tech.destroy(), this.el.parentNode.removeChild(this.el)
        }, createElement: function () {
        }, getVideoTagSettings: function () {
            var t = {sources: [], tracks: []};
            if (t.src = this.tag.getAttribute("src"), t.controls = null !== this.tag.getAttribute("controls"), t.poster = this.tag.getAttribute("poster"), t.preload = this.tag.getAttribute("preload"), t.autoplay = null !== this.tag.getAttribute("autoplay"), t.loop = null !== this.tag.getAttribute("loop"), t.muted = null !== this.tag.getAttribute("muted"), this.tag.hasChildNodes())for (var e, i = 0, n = this.tag.childNodes; i < n.length; i++)e = n[i], "SOURCE" == e.nodeName && t.sources.push({src: e.getAttribute("src"), type: e.getAttribute("type"), media: e.getAttribute("media"), title: e.getAttribute("title")}), "TRACK" == e.nodeName && t.tracks.push({src: e.getAttribute("src"), kind: e.getAttribute("kind"), srclang: e.getAttribute("srclang"), label: e.getAttribute("label"), "default": null !== e.getAttribute("default"), title: e.getAttribute("title")});
            return t
        }, loadTech: function (t, e) {
            this.tech ? this.unloadTech() : "html5" != t && this.tag && (this.el.removeChild(this.tag), this.tag = !1), this.techName = t, this.isReady = !1;
            var i = function () {
                this.player.triggerReady(), this.support.progressEvent || this.player.manualProgressOn(), this.support.timeupdateEvent || this.player.manualTimeUpdatesOn()
            }, n = _V_.merge({source: e, parentEl: this.el}, this.options[t]);
            e && (e.src == this.values.src && this.values.currentTime > 0 && (n.startTime = this.values.currentTime), this.values.src = e.src), this.tech = new _V_[t](this, n), this.tech.ready(i)
        }, unloadTech: function () {
            this.tech.destroy(), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), this.tech = !1
        }, manualProgressOn: function () {
            this.manualProgress = !0, this.trackProgress(), this.tech.addEvent("progress", function () {
                this.removeEvent("progress", arguments.callee), this.support.progressEvent = !0, this.player.manualProgressOff()
            })
        }, manualProgressOff: function () {
            this.manualProgress = !1, this.stopTrackingProgress()
        }, trackProgress: function () {
            this.progressInterval = setInterval(_V_.proxy(this, function () {
                this.values.bufferEnd < this.buffered().end(0) ? this.triggerEvent("progress") : 1 == this.bufferedPercent() && (this.stopTrackingProgress(), this.triggerEvent("progress"))
            }), 500)
        }, stopTrackingProgress: function () {
            clearInterval(this.progressInterval)
        }, manualTimeUpdatesOn: function () {
            this.manualTimeUpdates = !0, this.addEvent("play", this.trackCurrentTime), this.addEvent("pause", this.stopTrackingCurrentTime), this.tech.addEvent("timeupdate", function () {
                this.removeEvent("timeupdate", arguments.callee), this.support.timeupdateEvent = !0, this.player.manualTimeUpdatesOff()
            })
        }, manualTimeUpdatesOff: function () {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.removeEvent("play", this.trackCurrentTime), this.removeEvent("pause", this.stopTrackingCurrentTime)
        }, trackCurrentTime: function () {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(_V_.proxy(this, function () {
                this.triggerEvent("timeupdate")
            }), 250)
        }, stopTrackingCurrentTime: function () {
            clearInterval(this.currentTimeInterval)
        }, onEnded: function () {
            this.options.loop ? (this.currentTime(0), this.play()) : (this.pause(), this.currentTime(0), this.pause())
        }, onPlay: function () {
            _V_.removeClass(this.el, "vjs-paused"), _V_.addClass(this.el, "vjs-playing")
        }, onPause: function () {
            _V_.removeClass(this.el, "vjs-playing"), _V_.addClass(this.el, "vjs-paused")
        }, onProgress: function () {
            1 == this.bufferedPercent() && this.triggerEvent("loadedalldata")
        }, onError: function (t) {
            _V_.log("Video Error", t)
        }, techCall: function (t, e) {
            if (this.tech.isReady)try {
                this.tech[t](e)
            } catch (i) {
                _V_.log(i)
            } else this.tech.ready(function () {
                this[t](e)
            })
        }, techGet: function (t) {
            if (this.tech.isReady)try {
                return this.tech[t]()
            } catch (e) {
                this.tech[t] === undefined ? _V_.log("Video.js: " + t + " method not defined for " + this.techName + " playback technology.", e) : "TypeError" == e.name ? (_V_.log("Video.js: " + t + " unavailable on " + this.techName + " playback technology element.", e), this.tech.isReady = !1) : _V_.log(e)
            }
        }, play: function () {
            return this.techCall("play"), this
        }, pause: function () {
            return this.techCall("pause"), this
        }, paused: function () {
            return this.techGet("paused") === !1 ? !1 : !0
        }, currentTime: function (t) {
            return t !== undefined ? (this.values.lastSetCurrentTime = t, this.techCall("setCurrentTime", t), this.manualTimeUpdates && this.triggerEvent("timeupdate"), this) : this.values.currentTime = this.techGet("currentTime") || 0
        }, duration: function () {
            return parseFloat(this.techGet("duration"))
        }, remainingTime: function () {
            return this.duration() - this.currentTime()
        }, buffered: function () {
            var t = this.techGet("buffered"), e = 0, i = this.values.bufferEnd = this.values.bufferEnd || 0;
            return t && t.length > 0 && t.end(0) !== i && (i = t.end(0), this.values.bufferEnd = i), _V_.createTimeRange(e, i)
        }, bufferedPercent: function () {
            return this.duration() ? this.buffered().end(0) / this.duration() : 0
        }, volume: function (t) {
            var e;
            return t !== undefined ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.values.volume = e, this.techCall("setVolume", e), _V_.setLocalStorage("volume", e), this) : (e = parseFloat(this.techGet("volume")), isNaN(e) ? 1 : e)
        }, muted: function (t) {
            return t !== undefined ? (this.techCall("setMuted", t), this) : this.techGet("muted") || !1
        }, width: function (t, e) {
            return t !== undefined ? (this.el.width = t, this.el.style.width = t + "px", e || this.triggerEvent("resize"), this) : parseInt(this.el.getAttribute("width"))
        }, height: function (t) {
            return t !== undefined ? (this.el.height = t, this.el.style.height = t + "px", this.triggerEvent("resize"), this) : parseInt(this.el.getAttribute("height"))
        }, size: function (t, e) {
            return this.width(t, !0).height(e)
        }, supportsFullScreen: function () {
            return this.techGet("supportsFullScreen") || !1
        }, requestFullScreen: function () {
            var t = _V_.support.requestFullScreen;
            return this.isFullScreen = !0, t ? (_V_.addEvent(document, t.eventName, this.proxy(function () {
                this.isFullScreen = document[t.isFullScreen], 0 == this.isFullScreen && _V_.removeEvent(document, t.eventName, arguments.callee), this.triggerEvent("fullscreenchange")
            })), this.tech.support.fullscreenResize === !1 && 1 != this.options.flash.iFrameMode ? (this.pause(), this.unloadTech(), _V_.addEvent(document, t.eventName, this.proxy(function () {
                _V_.removeEvent(document, t.eventName, arguments.callee), this.loadTech(this.techName, {src: this.values.src})
            })), this.el[t.requestFn]()) : this.el[t.requestFn]()) : this.tech.supportsFullScreen() ? (this.triggerEvent("fullscreenchange"), this.techCall("enterFullScreen")) : (this.triggerEvent("fullscreenchange"), this.enterFullWindow()), this
        }, cancelFullScreen: function () {
            var t = _V_.support.requestFullScreen;
            return this.isFullScreen = !1, t ? this.tech.support.fullscreenResize === !1 && 1 != this.options.flash.iFrameMode ? (this.pause(), this.unloadTech(), _V_.addEvent(document, t.eventName, this.proxy(function () {
                _V_.removeEvent(document, t.eventName, arguments.callee), this.loadTech(this.techName, {src: this.values.src})
            })), document[t.cancelFn]()) : document[t.cancelFn]() : this.tech.supportsFullScreen() ? (this.techCall("exitFullScreen"), this.triggerEvent("fullscreenchange")) : (this.exitFullWindow(), this.triggerEvent("fullscreenchange")), this
        }, enterFullWindow: function () {
            this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, _V_.addEvent(document, "keydown", _V_.proxy(this, this.fullWindowOnEscKey)),
                document.documentElement.style.overflow = "hidden", _V_.addClass(document.body, "vjs-full-window"), _V_.addClass(this.el, "vjs-fullscreen"), this.triggerEvent("enterFullWindow")
        }, fullWindowOnEscKey: function (t) {
            27 == t.keyCode && (1 == this.isFullScreen ? this.cancelFullScreen() : this.exitFullWindow())
        }, exitFullWindow: function () {
            this.isFullWindow = !1, _V_.removeEvent(document, "keydown", this.fullWindowOnEscKey),
                document.documentElement.style.overflow = this.docOrigOverflow,
                _V_.removeClass(document.body, "vjs-full-window"), _V_.removeClass(this.el, "vjs-fullscreen"),
                this.triggerEvent("exitFullWindow")
        },
            selectSource: function (t) {
                for (var e = 0, i = this.options.techOrder; e < i.length; e++) {
                    var n = i[e], o = _V_[n];
                    if (o.isSupported())for (var r = 0, s = t; r < s.length; r++) {
                        var a = s[r];
                        if (o.canPlaySource.call(this, a))return{source: a, tech: n}
                    }
                }
                return!1
            }, src: function (t) {
                if (t instanceof Array) {
                    var t, e, i = this.selectSource(t);
                    i ? (t = i.source, e = i.tech, e == this.techName ? this.src(t) : this.loadTech(e, t)) : _V_.log("No compatible source and playback technology were found.")
                } else t instanceof Object ? _V_[this.techName].canPlaySource(t) ? this.src(t.src) : this.src([t]) : (this.values.src = t, this.isReady ? (this.techCall("src", t), "auto" == this.options.preload && this.load(), this.options.autoplay && this.play()) : this.ready(function () {
                    this.src(t)
                }));
                return this
            },
            load: function () {
                return this.techCall("load"), this
            },
            currentSrc: function () {
                return this.techGet("currentSrc") || this.values.src || ""
            },
            preload: function (t) {
                return t !== undefined ? (this.techCall("setPreload", t), this.options.preload = t, this) : this.techGet("preload")
            }, autoplay: function (t) {
                return t !== undefined ? (this.techCall("setAutoplay", t), this.options.autoplay = t, this) : this.techGet("autoplay", t)
            }, loop: function (t) {
                return t !== undefined ? (this.techCall("setLoop", t), this.options.loop = t, this) : this.techGet("loop")
            }, controls: function () {
                return this.options.controls
            }, poster: function () {
                return this.techGet("poster")
            }, error: function () {
                return this.techGet("error")
            }, ended: function () {
                return this.techGet("ended")
            }}), function () {
            var t, e, i, n;
            _V_.Player.prototype, document.cancelFullscreen !== undefined ? (t = "requestFullscreen", e = "exitFullscreen", i = "fullscreenchange", n = "fullScreen") : _V_.each(["moz", "webkit"], function (o) {
                "moz" == o && !document.mozFullScreenEnabled || document[o + "CancelFullScreen"] === undefined || (t = o + "RequestFullScreen", e = o + "CancelFullScreen", i = o + "fullscreenchange", n = "webkit" == o ? o + "IsFullScreen" : o + "FullScreen")
            }), t && (_V_.support.requestFullScreen = {requestFn: t, cancelFn: e, eventName: i, isFullScreen: n})
        }(), _V_.PlaybackTech = _V_.Component.extend({init: function () {
        }, onClick: function () {
            this.player.options.controls && _V_.PlayToggle.prototype.onClick.call(this)
        }}), _V_.apiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(","), _V_.each(_V_.apiMethods, function (t) {
            _V_.PlaybackTech.prototype[t] = function () {
                throw new Error("The '" + t + "' method is not available on the playback technology's API")
            }
        }), _V_.html5 = _V_.PlaybackTech.extend({init: function (t, e, i) {
            this.player = t, this.el = this.createElement(), this.ready(i), this.addEvent("click", this.proxy(this.onClick));
            var n = e.source;
            n && this.el.currentSrc == n.src ? t.triggerEvent("loadstart") : n && (this.el.src = n.src), t.ready(function () {
                this.options.autoplay && this.paused() && (this.tag.poster = null, this.play())
            }), this.setupTriggers(), this.triggerReady()
        }, destroy: function () {
            this.player.tag = !1, this.removeTriggers(), this.el.parentNode.removeChild(this.el)
        }, createElement: function () {
            var t, e = (_V_.html5, this.player), i = e.tag;
            return i && this.support.movingElementInDOM !== !1 || (i && e.el.removeChild(i), t = _V_.createElement("video", {id: i.id || e.el.id + "_html5_api", className: i.className || "vjs-tech"}), i = t, _V_.insertFirst(i, e.el)), _V_.each(["autoplay", "preload", "loop", "muted"], function (t) {
                null !== e.options[t] && (i[t] = e.options[t])
            }, this), i
        }, setupTriggers: function () {
            _V_.each.call(this, _V_.html5.events, function (t) {
                _V_.addEvent(this.el, t, _V_.proxy(this.player, this.eventHandler))
            })
        }, removeTriggers: function () {
            _V_.each.call(this, _V_.html5.events, function (t) {
                _V_.removeEvent(this.el, t, _V_.proxy(this.player, this.eventHandler))
            })
        }, eventHandler: function (t) {
            t.stopPropagation(), this.triggerEvent(t)
        }, play: function () {
            this.el.play()
        }, pause: function () {
            this.el.pause()
        }, paused: function () {
            return this.el.paused
        }, currentTime: function () {
            return this.el.currentTime
        }, setCurrentTime: function (t) {
            try {
                this.el.currentTime = t
            } catch (e) {
                _V_.log(e, "Video isn't ready. (VideoJS)")
            }
        }, duration: function () {
            return this.el.duration || 0
        }, buffered: function () {
            return this.el.buffered
        }, volume: function () {
            return this.el.volume
        }, setVolume: function (t) {
            this.el.volume = t
        }, muted: function () {
            return this.el.muted
        }, setMuted: function (t) {
            this.el.muted = t
        }, width: function () {
            return this.el.offsetWidth
        }, height: function () {
            return this.el.offsetHeight
        }, supportsFullScreen: function () {
            return"function" != typeof this.el.webkitEnterFullScreen || navigator.userAgent.match("Chrome") || navigator.userAgent.match("Mac OS X 10.5") ? !1 : !0
        }, enterFullScreen: function () {
            try {
                this.el.webkitEnterFullScreen()
            } catch (t) {
                11 == t.code && _V_.log("VideoJS: Video not ready.")
            }
        }, src: function (t) {
            this.el.src = t
        }, load: function () {
            this.el.load()
        }, currentSrc: function () {
            return this.el.currentSrc
        }, preload: function () {
            return this.el.preload
        }, setPreload: function (t) {
            this.el.preload = t
        }, autoplay: function () {
            return this.el.autoplay
        }, setAutoplay: function (t) {
            this.el.autoplay = t
        }, loop: function () {
            return this.el.loop
        }, setLoop: function (t) {
            this.el.loop = t
        }, error: function () {
            return this.el.error
        }, seeking: function () {
            return this.el.seeking
        }, ended: function () {
            return this.el.ended
        }, controls: function () {
            return this.player.options.controls
        }, defaultMuted: function () {
            return this.el.defaultMuted
        }}), _V_.html5.isSupported = function () {
            return!!document.createElement("video").canPlayType
        }, _V_.html5.canPlaySource = function (t) {
            return!!document.createElement("video").canPlayType(t.type)
        }, _V_.html5.events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), _V_.html5.prototype.support = {fullscreen: typeof _V_.testVid.webkitEnterFullScreen !== undefined ? _V_.ua.match("Chrome") || _V_.ua.match("Mac OS X 10.5") ? !1 : !0 : !1, movingElementInDOM: !_V_.isIOS()}, _V_.isAndroid() && _V_.androidVersion() < 3 && (document.createElement("video").constructor.prototype.canPlayType = function (t) {
            return t && -1 != t.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
        }), _V_.flash = _V_.PlaybackTech.extend({init: function (t, e) {
            this.player = t;
            var i = e.source, n = e.parentEl, o = this.el = _V_.createElement("div", {id: n.id + "_temp_flash"}), r = t.el.id + "_flash_api", s = t.options, a = _V_.merge({readyFunction: "_V_.flash.onReady", eventProxyFunction: "_V_.flash.onEvent", errorEventProxyFunction: "_V_.flash.onError", autoplay: s.autoplay, preload: s.preload, loop: s.loop, muted: s.muted}, e.flashVars), l = _V_.merge({wmode: "opaque", bgcolor: "#000000"}, e.params), u = _V_.merge({id: r, name: r, "class": "vjs-tech"}, e.attributes);
            if (i && (a.src = encodeURIComponent(_V_.getAbsoluteURL(i.src))), _V_.insertFirst(o, n), e.startTime && this.ready(function () {
                this.load(), this.play(), this.currentTime(e.startTime)
            }), 1 != e.iFrameMode || _V_.isFF)_V_.flash.embed(e.swf, o, a, l, u); else {
                var h = _V_.createElement("iframe", {id: r + "_iframe", name: r + "_iframe", className: "vjs-tech", scrolling: "no", marginWidth: 0, marginHeight: 0, frameBorder: 0});
                a.readyFunction = "ready", a.eventProxyFunction = "events", a.errorEventProxyFunction = "errors", _V_.addEvent(h, "load", _V_.proxy(this, function () {
                    var t, i = h.contentWindow;
                    t = h.contentDocument ? h.contentDocument : h.contentWindow.document, t.write(_V_.flash.getEmbedCode(e.swf, a, l, u)), i.player = this.player, i.ready = _V_.proxy(this.player, function (e) {
                        var i = t.getElementById(e), n = this, o = n.tech;
                        o.el = i, _V_.addEvent(i, "click", o.proxy(o.onClick)), _V_.flash.checkReady(o)
                    }), i.events = _V_.proxy(this.player, function (t, e) {
                        var i = this;
                        i && "flash" == i.techName && i.triggerEvent(e)
                    }), i.errors = _V_.proxy(this.player, function (t, e) {
                        _V_.log("Flash Error", e)
                    })
                })), o.parentNode.replaceChild(h, o)
            }
        }, destroy: function () {
            this.el.parentNode.removeChild(this.el)
        }, play: function () {
            this.el.vjs_play()
        }, pause: function () {
            this.el.vjs_pause()
        }, src: function (t) {
            if (t = _V_.getAbsoluteURL(t), this.el.vjs_src(t), this.player.autoplay()) {
                var e = this;
                setTimeout(function () {
                    e.play()
                }, 0)
            }
        }, load: function () {
            this.el.vjs_load()
        }, poster: function () {
            this.el.vjs_getProperty("poster")
        }, buffered: function () {
            return _V_.createTimeRange(0, this.el.vjs_getProperty("buffered"))
        }, supportsFullScreen: function () {
            return!1
        }, enterFullScreen: function () {
            return!1
        }}), function () {
            var t = _V_.flash.prototype, e = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), i = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(",");
            "load,play,pause".split(","), createSetter = function (e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                t["set" + i] = function (t) {
                    return this.el.vjs_setProperty(e, t)
                }
            }, createGetter = function (e) {
                t[e] = function () {
                    return this.el.vjs_getProperty(e)
                }
            }, _V_.each(e, function (t) {
                createGetter(t), createSetter(t)
            }), _V_.each(i, function (t) {
                createGetter(t)
            })
        }(), _V_.flash.isSupported = function () {
            return _V_.flash.version()[0] >= 10
        }, _V_.flash.canPlaySource = function (t) {
            return t.type in _V_.flash.prototype.support.formats ? "maybe" : void 0
        }, _V_.flash.prototype.support = {formats: {"video/flv": "FLV", "video/x-flv": "FLV", "video/mp4": "MP4", "video/m4v": "MP4"}, progressEvent: !1, timeupdateEvent: !1, fullscreenResize: !1, parentResize: !_V_.ua.match("Firefox")}, _V_.flash.onReady = function (t) {
            var e = _V_.el(t), i = e.player || e.parentNode.player, n = i.tech;
            e.player = i, n.el = e, n.addEvent("click", n.onClick), _V_.flash.checkReady(n)
        }, _V_.flash.checkReady = function (t) {
            t.el.vjs_getProperty ? t.triggerReady() : setTimeout(function () {
                _V_.flash.checkReady(t)
            }, 50)
        }, _V_.flash.onEvent = function (t, e) {
            var i = _V_.el(t).player;
            i.triggerEvent(e)
        }, _V_.flash.onError = function (t, e) {
            var i = _V_.el(t).player;
            i.triggerEvent("error"), _V_.log("Flash Error", e, t)
        }, _V_.flash.version = function () {
            var t = "0,0,0";
            try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
            } catch (e) {
                try {
                    navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                } catch (e) {
                }
            }
            return t.split(",")
        }, _V_.flash.embed = function (t, e, i, n, o) {
            var r = _V_.flash.getEmbedCode(t, i, n, o), s = _V_.createElement("div", {innerHTML: r}).childNodes[0], a = e.parentNode;
            if (e.parentNode.replaceChild(s, e), _V_.isIE()) {
                var l = a.childNodes[0];
                setTimeout(function () {
                    l.style.display = "block"
                }, 1e3)
            }
            return s
        }, _V_.flash.getEmbedCode = function (t, e, i, n) {
            var o = '<object type="application/x-shockwave-flash"', r = "", s = "";
            return attrsString = "", e && _V_.eachProp(e, function (t, e) {
                r += t + "=" + e + "&amp;"
            }), i = _V_.merge({movie: t, flashvars: r, allowScriptAccess: "always", allowNetworking: "all"}, i), _V_.eachProp(i, function (t, e) {
                s += '<param name="' + t + '" value="' + e + '" />'
            }), n = _V_.merge({data: t, width: "100%", height: "100%"}, n), _V_.eachProp(n, function (t, e) {
                attrsString += t + '="' + e + '" '
            }), o + attrsString + ">" + s + "</object>"
        }, _V_.merge(_V_.Player.prototype, {addTextTracks: function (t) {
            for (var e, i, n = this.textTracks = this.textTracks ? this.textTracks : [], o = 0, r = t.length; r > o; o++)i = _V_.uc(t[o].kind || "subtitles"), e = new _V_[i + "Track"](this, t[o]), n.push(e), e["default"] && this.ready(_V_.proxy(e, e.show));
            return this
        }, showTextTrack: function (t, e) {
            for (var i, n, o, r = this.textTracks, s = 0, a = r.length; a > s; s++)i = r[s], i.id === t ? (i.show(), n = i) : e && i.kind == e && i.mode > 0 && i.disable();
            return o = n ? n.kind : e ? e : !1, o && this.triggerEvent(o + "trackchange"), this
        }}), _V_.Track = _V_.Component.extend({init: function (t, e) {
            this._super(t, e), _V_.merge(this, {id: e.id || "vjs_" + e.kind + "_" + e.language + "_" + _V_.guid++, src: e.src, "default": e["default"], title: e.title, language: e.srclang, label: e.label, cues: [], activeCues: [], readyState: 0, mode: 0})
        }, createElement: function () {
            return this._super("div", {className: "vjs-" + this.kind + " vjs-text-track"})
        }, show: function () {
            this.activate(), this.mode = 2, this._super()
        }, hide: function () {
            this.activate(), this.mode = 1, this._super()
        }, disable: function () {
            2 == this.mode && this.hide(), this.deactivate(), this.mode = 0
        }, activate: function () {
            0 == this.readyState && this.load(), 0 == this.mode && (this.player.addEvent("timeupdate", this.proxy(this.update, this.id)), this.player.addEvent("ended", this.proxy(this.reset, this.id)), ("captions" == this.kind || "subtitles" == this.kind) && this.player.textTrackDisplay.addComponent(this))
        }, deactivate: function () {
            this.player.removeEvent("timeupdate", this.proxy(this.update, this.id)), this.player.removeEvent("ended", this.proxy(this.reset, this.id)), this.reset(), this.player.textTrackDisplay.removeComponent(this)
        }, load: function () {
            0 == this.readyState && (this.readyState = 1, _V_.get(this.src, this.proxy(this.parseCues), this.proxy(this.onError)))
        }, onError: function (t) {
            this.error = t, this.readyState = 3, this.triggerEvent("error")
        }, parseCues: function (t) {
            for (var e, i, n, o, r = t.split("\n"), s = "", a = 1, l = r.length; l > a; a++)if (s = _V_.trim(r[a])) {
                for (-1 == s.indexOf("-->") ? (o = s, s = _V_.trim(r[++a])) : o = this.cues.length, e = {id: o, index: this.cues.length}, i = s.split(" --> "), e.startTime = this.parseCueTime(i[0]), e.endTime = this.parseCueTime(i[1]), n = []; r[++a] && (s = _V_.trim(r[a]));)n.push(s);
                e.text = n.join("<br/>"), this.cues.push(e)
            }
            this.readyState = 2, this.triggerEvent("loaded")
        }, parseCueTime: function (t) {
            var e, i, n, o, r, s = t.split(":"), a = 0;
            return 3 == s.length ? (e = s[0], i = s[1], n = s[2]) : (e = 0, i = s[0], n = s[1]), n = n.split(/\s+/), o = n.splice(0, 1)[0], o = o.split(/\.|,/), r = parseFloat(o[1]), o = o[0], a += 3600 * parseFloat(e), a += 60 * parseFloat(i), a += parseFloat(o), r && (a += r / 1e3), a
        }, update: function () {
            if (this.cues.length > 0) {
                var t = this.player.currentTime();
                if (this.prevChange === undefined || t < this.prevChange || this.nextChange <= t) {
                    var e, i, n, o, r = this.cues, s = this.player.duration(), a = 0, l = !1, u = [];
                    for (t >= this.nextChange || this.nextChange === undefined ? o = this.firstActiveIndex !== undefined ? this.firstActiveIndex : 0 : (l = !0, o = this.lastActiveIndex !== undefined ? this.lastActiveIndex : r.length - 1); ;) {
                        if (n = r[o], n.endTime <= t)a = Math.max(a, n.endTime), n.active && (n.active = !1); else if (t < n.startTime) {
                            if (s = Math.min(s, n.startTime), n.active && (n.active = !1), !l)break
                        } else l ? (u.splice(0, 0, n), i === undefined && (i = o), e = o) : (u.push(n), e === undefined && (e = o), i = o), s = Math.min(s, n.endTime), a = Math.max(a, n.startTime), n.active = !0;
                        if (l) {
                            if (0 === o)break;
                            o--
                        } else {
                            if (o === r.length - 1)break;
                            o++
                        }
                    }
                    this.activeCues = u, this.nextChange = s, this.prevChange = a, this.firstActiveIndex = e, this.lastActiveIndex = i, this.updateDisplay(), this.triggerEvent("cuechange")
                }
            }
        }, updateDisplay: function () {
            for (var t = this.activeCues, e = "", i = 0, n = t.length; n > i; i++)e += "<span class='vjs-tt-cue'>" + t[i].text + "</span>";
            this.el.innerHTML = e
        }, reset: function () {
            this.nextChange = 0, this.prevChange = this.player.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0
        }}), _V_.CaptionsTrack = _V_.Track.extend({kind: "captions"}), _V_.SubtitlesTrack = _V_.Track.extend({kind: "subtitles"}), _V_.ChaptersTrack = _V_.Track.extend({kind: "chapters"}), _V_.TextTrackDisplay = _V_.Component.extend({createElement: function () {
            return this._super("div", {className: "vjs-text-track-display"})
        }}), _V_.TextTrackMenuItem = _V_.MenuItem.extend({init: function (t, e) {
            var i = this.track = e.track;
            e.label = i.label, e.selected = i["default"], this._super(t, e), this.player.addEvent(i.kind + "trackchange", _V_.proxy(this, this.update))
        }, onClick: function () {
            this._super(), this.player.showTextTrack(this.track.id, this.track.kind)
        }, update: function () {
            2 == this.track.mode ? this.selected(!0) : this.selected(!1)
        }}), _V_.OffTextTrackMenuItem = _V_.TextTrackMenuItem.extend({init: function (t, e) {
            e.track = {kind: e.kind, player: t, label: "Off"}, this._super(t, e)
        }, onClick: function () {
            this._super(), this.player.showTextTrack(this.track.id, this.track.kind)
        }, update: function () {
            for (var t, e = this.player.textTracks, i = 0, n = e.length, o = !0; n > i; i++)t = e[i], t.kind == this.track.kind && 2 == t.mode && (o = !1);
            o ? this.selected(!0) : this.selected(!1)
        }}), _V_.TextTrackButton = _V_.Button.extend({init: function (t, e) {
            this._super(t, e), this.menu = this.createMenu(), 0 === this.items.length && this.hide()
        }, createMenu: function () {
            var t = new _V_.Menu(this.player);
            return t.el.appendChild(_V_.createElement("li", {className: "vjs-menu-title", innerHTML: _V_.uc(this.kind)})), t.addItem(new _V_.OffTextTrackMenuItem(this.player, {kind: this.kind})), this.items = this.createItems(), this.each(this.items, function (e) {
                t.addItem(e)
            }), this.addComponent(t), t
        }, createItems: function () {
            var t = [];
            return this.each(this.player.textTracks, function (e) {
                e.kind === this.kind && t.push(new _V_.TextTrackMenuItem(this.player, {track: e}))
            }), t
        }, buildCSSClass: function () {
            return this.className + " vjs-menu-button " + this._super()
        }, onFocus: function () {
            this.menu.lockShowing(), _V_.one(this.menu.el.childNodes[this.menu.el.childNodes.length - 1], "blur", this.proxy(function () {
                this.menu.unlockShowing()
            }))
        }, onBlur: function () {
        }, onClick: function () {
            this.one("mouseout", this.proxy(function () {
                this.menu.unlockShowing(), this.el.blur()
            }))
        }}), _V_.CaptionsButton = _V_.TextTrackButton.extend({kind: "captions", buttonText: "Captions", className: "vjs-captions-button"}), _V_.SubtitlesButton = _V_.TextTrackButton.extend({kind: "subtitles", buttonText: "Subtitles", className: "vjs-subtitles-button"}), _V_.ChaptersButton = _V_.TextTrackButton.extend({kind: "chapters", buttonText: "Chapters", className: "vjs-chapters-button", createItems: function () {
            var t = [];
            return this.each(this.player.textTracks, function (e) {
                e.kind === this.kind && t.push(new _V_.TextTrackMenuItem(this.player, {track: e}))
            }), t
        }, createMenu: function () {
            for (var t, e, i = this.player.textTracks, n = 0, o = i.length, r = this.items = []; o > n; n++)if (t = i[n], t.kind == this.kind && t["default"]) {
                if (t.readyState < 2)return this.chaptersTrack = t, t.addEvent("loaded", this.proxy(this.createMenu)), void 0;
                e = t;
                break
            }
            var s = this.menu = new _V_.Menu(this.player);
            if (s.el.appendChild(_V_.createElement("li", {className: "vjs-menu-title", innerHTML: _V_.uc(this.kind)})), e)for (var a, l, u = e.cues, n = 0, o = u.length; o > n; n++)a = u[n], l = new _V_.ChaptersTrackMenuItem(this.player, {track: e, cue: a}), r.push(l), s.addComponent(l);
            return this.addComponent(s), this.items.length > 0 && this.show(), s
        }}), _V_.ChaptersTrackMenuItem = _V_.MenuItem.extend({init: function (t, e) {
            var i = this.track = e.track, n = this.cue = e.cue, o = t.currentTime();
            e.label = n.text, e.selected = n.startTime <= o && o < n.endTime, this._super(t, e), i.addEvent("cuechange", _V_.proxy(this, this.update))
        }, onClick: function () {
            this._super(), this.player.currentTime(this.cue.startTime), this.update(this.cue.startTime)
        }, update: function () {
            var t = this.cue, e = this.player.currentTime();
            t.startTime <= e && e < t.endTime ? this.selected(!0) : this.selected(!1)
        }}), _V_.merge(_V_.ControlBar.prototype.options.components, {subtitlesButton: {}, captionsButton: {}, chaptersButton: {}}), _V_.autoSetup = function () {
            var t, e, i, n = document.getElementsByTagName("video");
            if (n && n.length > 0)for (var o = 0, r = n.length; r > o; o++) {
                if (e = n[o], !e || !e.getAttribute) {
                    _V_.autoSetupTimeout(1);
                    break
                }
                e.player === undefined && (t = e.getAttribute("data-setup"), null !== t && (t = JSON.parse(t || "{}"), i = _V_(e, t)))
            } else _V_.windowLoaded || _V_.autoSetupTimeout(1)
        }, _V_.autoSetupTimeout = function (t) {
            setTimeout(_V_.autoSetup, t)
        }, _V_.addEvent(window, "load", function () {
            _V_.windowLoaded = !0
        }), _V_.autoSetup(), window.VideoJS = window._V_ = VideoJS
    }(window), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.SlideGallery = function (t) {
        function i() {
            var t = this;
            return this.prevSlide = function () {
                return i.prototype.prevSlide.apply(t, arguments)
            }, this.nextSlide = function () {
                return i.prototype.nextSlide.apply(t, arguments)
            }, i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.slideDuration = 1e4, i.prototype.$currentSlide = null, i.prototype.slideSel = ".GallerySlide", i.prototype.initialize = function () {
            return this.$el = $(this.config.el), this.$el.length ? (this.setCurrentSlide(this.firstSlide(), !1), this.bindArrows()) : void 0
        }, i.prototype.bindArrows = function () {
            return this.$el.on("click", ".LeftArrow", this.prevSlide), this.$el.on("click", ".RightArrow", this.nextSlide)
        }, i.prototype.setCurrentSlide = function (t, e) {
            return null == e && (e = !0), null != this.$currentSlide && this.$currentSlide.removeClass("Active"), this.$currentSlide = $(t), this.$currentSlide.addClass("Active"), e ? this.fireEvent("gallerySlideChanged") : void 0
        }, i.prototype.setSlideByIndex = function (t) {
            var e;
            return e = this.$el.find(this.slideSel).eq(t - 1), e.length ? this.setCurrentSlide(e) : void 0
        }, i.prototype.firstSlide = function () {
            return this.$el.find(this.slideSel).first()
        }, i.prototype.lastSlide = function () {
            return this.$el.find(this.slideSel).last()
        }, i.prototype.nextSlide = function () {
            var t;
            return t = this.$currentSlide.next(this.slideSel), this.setCurrentSlide(t.length ? t : this.firstSlide())
        }, i.prototype.prevSlide = function () {
            var t;
            return t = this.$currentSlide.prev(this.slideSel), this.setCurrentSlide(t.length ? t : this.lastSlide())
        }, i
    }(LayerVault.Controller)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.Animation = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.el = "body", i.prototype.containerSel = "body", i.prototype.isEnabled = !0, i.prototype.initialize = function () {
            return this.$container = $(this.el).parents(this.containerSel), this.$el = this.$container.find(this.el)
        }, i.prototype.isVisible = function () {
            var t, e, i, n, o;
            return t = $(this.el), o = $(window).scrollTop(), n = o + $(window).height(), i = t.offset().top, e = i + t.height(), n >= e && i >= o
        }, i.prototype.enabled = function () {
            return this.$container.hasClass("Active")
        }, i.prototype.play = function () {
            return this.isEnabled = !0
        }, i.prototype.pause = function () {
            return this.isEnabled = !1
        }, i
    }(LayerVault.Controller)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.BubblesAnimation = function (i) {
        function n(e, i) {
            var o, r, s, a, l, u, h, c, p, d = this;
            null == i && (i = {}), this.render = function () {
                return n.prototype.render.apply(d, arguments)
            }, this.onMouseMove = function () {
                return n.prototype.onMouseMove.apply(d, arguments)
            }, this.canvas = "string" == typeof e ? $(e).get(0) : e;
            for (a in i)t.call(i, a) && (p = i[a], this[a] = p);
            this.$container = $(this.containerSel), this.$slide = $(e).parents(".GallerySlide"), this.canvas.width = this.canvasWidth, this.canvas.height = this.canvasHeight, r = this.canvas.getContext("2d"), this.bubbleVector = (this.emitterLine[1].x - this.emitterLine[0].x) / (this.emitterLine[0].y - this.emitterLine[1].y), this.mouseRadiusSq = Math.pow(this.mouseRadius, 2), this.scope = new paper.PaperScope, this.scope.setup(this.canvas), s = window.devicePixelRatio || 1, o = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1, h = s / o, s !== o && (u = this.canvas.width, l = this.canvas.height, this.canvas.width = u * h, this.canvas.height = l * h, this.canvas.style.width = "" + u + "px", this.canvas.style.height = "" + l + "px", r.scale(h, h)), this.bubbles = new this.scope.Group, c = new this.scope.Tool, this.debug && this.drawEmitterLine(), this.drawClippingPlane(), c.onMouseMove = this.onMouseMove, this.scope.view.onFrame = this.render
        }

        return e(n, i), n.prototype.debug = !1, n.prototype.containerSel = "#HomeGallery", n.prototype.canvasWidth = 1280, n.prototype.canvasHeight = 520, n.prototype.emitterLine = [
            {x: 670, y: 170},
            {x: 735, y: 370}
        ], n.prototype.clippingMask = {width: 400, height: 100, x: 502, y: 300, rotation: 72.5}, n.prototype.speedFactor = .7, n.prototype.mousePos = null, n.prototype.mouseRadius = 50, n.prototype.mouseRadiusSq = null, n.prototype.mouseStrength = .6, n.prototype.colors = ["#DD4A38", "#DD4A38", "#DD4A38", "#DD4A38", "#DD4A38", "#DD4A38", "#DD4A38", "#DD4A38", "#DD4A38", "#E47600", "#E47600", "#26AE90", "#26AE90", "#26AE90", "#26AE90", "#1A7E68", "#932C1F"], n.prototype.bubbles = null, n.prototype.bubbleMinWidth = 2, n.prototype.bubbleMaxWidth = 14, n.prototype.bubbleModulo = 4, n.prototype.drawEmitterLine = function () {
            var t;
            return t = new this.scope.Path, t.strokeColor = "black", t.add(new this.scope.Point(this.emitterLine[0].x, this.emitterLine[0].y)), t.add(new this.scope.Point(this.emitterLine[1].x, this.emitterLine[1].y))
        }, n.prototype.drawClippingPlane = function () {
            var t, e, i, n;
            return n = new this.scope.Path.Rectangle([0, 0], [this.canvasWidth, this.canvasHeight]), i = new this.scope.Path.Rectangle([this.clippingMask.x, this.clippingMask.y], [this.clippingMask.width, this.clippingMask.height]), i.rotate(this.clippingMask.rotation), this.debug && (e = new this.scope.Path.Rectangle([this.clippingMask.x, this.clippingMask.y], [this.clippingMask.width, this.clippingMask.height]), e.fillColor = "black", e.rotate(this.clippingMask.rotation), e.opacity = .5), t = new this.scope.CompoundPath(n, i), this.bubbles.insertChild(0, t), this.bubbles.clipped = !0
        }, n.prototype.onMouseMove = function (t) {
            return this.mousePos = t.point
        }, n.prototype.render = function (t) {
            var e, i, n, o, r, s;
            if (this.isEnabled) {
                for (0 === t.count % this.bubbleModulo && this.createBubble(), n = [], s = this.bubbles.children, i = o = 0, r = s.length; r > o; i = ++o)e = s[i], 0 !== i ? (this.moveBubble(e), this.outOfBounds(e) || n.push(e)) : n.push(e);
                if (n.length !== this.bubbles.children.length)return this.bubbles.setChildren(n)
            }
        }, n.prototype.createBubble = function () {
            var t, e, i, n, o, r, s;
            return o = Math.random(), r = (1 - o) * this.emitterLine[0].x + o * this.emitterLine[1].x, s = (1 - o) * this.emitterLine[0].y + o * this.emitterLine[1].y, n = new this.scope.Point(r, s), i = this.randomRange(this.bubbleMinWidth, this.bubbleMaxWidth), e = this.colors[this.randomRange(0, this.colors.length - 1)], t = new this.scope.Path.Circle(n, i), t.style.fillColor = e, this.bubbles.addChild(t)
        }, n.prototype.moveBubble = function (t) {
            var e, i, n, o, r, s, a;
            return a = this.calculateDeltas(t), r = a[0], s = a[1], t.translate(new this.scope.Point(r, s)), n = t.position.getDistance(this.mousePos), n > this.mouseRadius || .001 > n ? void 0 : (o = this.mousePos.subtract(t.position), i = Math.sqrt(o.x * o.x + o.y * o.y), o.x /= i, o.y /= i, e = 1 - n / this.mouseRadiusSq, o.x *= -e, o.y *= -e, o.x *= this.mouseStrength, o.y *= this.mouseStrength, t.translate(o))
        }, n.prototype.calculateDeltas = function (t) {
            var e, i;
            return e = this.speedFactor, i = (this.bubbleVector + .9 * (this.bubbleVector * (t.position.x - this.emitterLine[0].x) / t.bounds.width)) * this.speedFactor, [e, i]
        }, n.prototype.outOfBounds = function (t) {
            var e, i, n, o, r, s;
            return r = t.position.x - t.bounds.width / 2, s = t.position.y - t.bounds.height / 2, n = -1 * t.bounds.width, e = this.canvasWidth + t.bounds.width, o = -1 * t.bounds.height, i = this.canvasHeight + t.bounds.height, n > r || o > s || r > e || s > i
        }, n.prototype.randomRange = function (t, e, i) {
            var n;
            return null == i && (i = !1), n = t + Math.random() * (e - t), i ? n.toFixed(i) : Math.round(n)
        }, n
    }(LayerVault.Controller.Animation)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.iOSBubblesAnimation = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.debug = !1, i.prototype.containerSel = "#HomeGallery", i.prototype.canvasWidth = 1280, i.prototype.canvasHeight = 520, i.prototype.emitterLine = [
            {x: 740, y: 430},
            {x: 980, y: 450}
        ], i.prototype.clippingMasks = [
            {width: 300, height: 200, x: 499, y: 271, rotation: 30, segment: {index: 3, x: 829, y: 500}},
            {width: 400, height: 200, x: 852, y: 246, rotation: 150, segment: {index: 3, x: 829, y: 500}}
        ], i.prototype.speedFactor = .06, i.prototype.bubbleMinWidth = 15, i.prototype.bubbleMaxWidth = 50, i.prototype.bubbleModulo = 7, i.prototype.colors = ["#9cd3c7", "#9cd3c7", "#ecb936", "#dd4a38", "#dd4a38", "#ffffff", "#ffffff"], i.prototype.drawClippingPlane = function () {
            var t, e, i, n, o, r, s, a, l, u;
            for (o = new this.scope.Path.Rectangle([0, 0], [this.canvasWidth, this.canvasHeight]), s = [o], u = this.clippingMasks, n = a = 0, l = u.length; l > a; n = ++a)r = u[n], i = new this.scope.Path.Rectangle([r.x, r.y], [r.width, r.height]), i.rotate(r.rotation), i.insertSegments(r.segment.index, [
                [r.segment.x, r.segment.y]
            ]), s.push(i), this.debug && (e = new this.scope.Path.Rectangle([r.x, r.y], [r.width, r.height]), e.fillColor = "black", e.rotate(r.rotation), e.insertSegments(r.segment.index, [
                [r.segment.x, r.segment.y]
            ]), e.opacity = .3);
            return t = new this.scope.CompoundPath(s), this.bubbles.insertChild(0, t), this.bubbles.clipped = !0
        }, i.prototype.calculateDeltas = function (t) {
            var e, i;
            return e = this.speedFactor, i = (this.bubbleVector + .3 * (this.bubbleVector * (this.emitterLine[0].y - t.position.y) / t.bounds.width)) * this.speedFactor, [e, i]
        }, i
    }(LayerVault.Controller.BubblesAnimation)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.DarkBubblesAnimation = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.debug = !1, i.prototype.containerSel = "#HomeGallery", i.prototype.emitterLine = [
            {x: 800, y: 280},
            {x: 920, y: 300}
        ], i.prototype.clippingMask = {width: 116, height: 46, x: 805, y: 215}, i.prototype.speedFactor = .2, i.prototype.bubbleMinWidth = 16, i.prototype.bubbleMaxWidth = 25, i.prototype.bubbleModulo = 3, i.prototype.colors = ["#e2761F", "#db4b3e", "#ecb936"], i.prototype.drawClippingPlane = function () {
            var t, e;
            return t = new this.scope.Path.Rectangle([this.clippingMask.x, this.clippingMask.y], [this.clippingMask.width, this.clippingMask.height]), this.debug && (e = new this.scope.Path.Rectangle([this.clippingMask.x, this.clippingMask.y], [this.clippingMask.width, this.clippingMask.height]), e.fillColor = "black", e.rotate(this.clippingMask.rotation), e.opacity = .5), this.bubbles.insertChild(0, t), this.bubbles.clipped = !0
        }, i.prototype.calculateDeltas = function (t) {
            var e, i;
            return e = this.speedFactor, i = (this.bubbleVector + .3 * (this.bubbleVector * (this.emitterLine[0].y - t.position.y) / t.bounds.width)) * this.speedFactor, [e, i]
        }, i
    }(LayerVault.Controller.BubblesAnimation)
}.call(this), function () {
    var t, e = {}.hasOwnProperty, i = function (t, i) {
        function n() {
            this.constructor = t
        }

        for (var o in i)e.call(i, o) && (t[o] = i[o]);
        return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
    };
    LayerVault.Controller.SparksAnimation = function (e) {
        function n() {
            var t, e, i, o, r, s, a, l = this;
            this.onMouseMove = function () {
                return n.prototype.onMouseMove.apply(l, arguments)
            }, this.render = function () {
                return n.prototype.render.apply(l, arguments)
            }, this.canvas = $("#Sparks").get(0),
                this.canvas.width = this.canvasWidth, this.canvas.height = this.canvasHeight, e = this.canvas.getContext("2d"), this.scope = new paper.PaperScope, this.scope.setup(this.canvas), i = window.devicePixelRatio || 1, t = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1, s = i / t, i !== t && (r = this.canvas.width, o = this.canvas.height, this.canvas.width = r * s, this.canvas.height = o * s, this.canvas.style.width = "" + r + "px", this.canvas.style.height = "" + o + "px", e.scale(s, s)), a = new this.scope.Tool, a.onMouseMove = this.onMouseMove, this.sparks = [], this.scope.view.onFrame = this.render
        }

        return i(n, e), n.prototype.debug = !0, n.prototype.containerSel = "#HomeGallery", n.prototype.canvasWidth = 1280, n.prototype.canvasHeight = 270, n.prototype.sparkFrequency = 40, n.prototype.render = function () {
            var t, e, i, n, o, r;
            if (this.isEnabled) {
                for (1 === Math.randomRange(1, this.sparkFrequency) && this.createSpark(), i = [], r = this.sparks, t = n = 0, o = r.length; o > n; t = ++n)e = r[t], e.move(), e.dead() ? e.remove() : i.push(e);
                return this.sparks = i
            }
        }, n.prototype.createSpark = function () {
            return this.sparks.push(new t(this.scope))
        }, n.prototype.onMouseMove = function (t) {
            var e;
            return e = t.point, e.x < 805 || e.x > 925 || e.y < 215 || e.y > 265 ? (this.normalFlames(), !0) : (this.inferno(), !0)
        }, n.prototype.normalFlames = function () {
            return this.sparkFrequency = 40, LayerVault.Controller.DarkBubblesAnimation.prototype.speedFactor = .2
        },
            n.prototype.inferno = function () {
                return this.sparkFrequency = 5,
                    LayerVault.Controller.DarkBubblesAnimation.prototype.speedFactor = .5
            }, n
    }(LayerVault.Controller.Animation), t = function () {
        function t(t) {
            this.scope = t, window.paper = this.scope, this.origin = new this.scope.Point(Math.randomRange(this.emitterLine.x, this.emitterLine.x + this.emitterLine.width), this.emitterLine.y), this.spark = new this.scope.Path.Circle(this.origin, this.radius), this.startColor = this.startColors[Math.randomRange(0, this.startColors.length - 1)], this.spark.style.fillColor = this.color(), this.count = 0, this.initialSpeed = Math.randomRange(5, 10),
                this.deathThreshold = Math.pow(this.initialSpeed, 2), this.shiftFactor = Math.PI / (3 * Math.random())
        }

        return t.prototype.startColors = [
            {hue: 27, saturation: .86, brightness: .89, alpha: 1},
            {hue: 5, saturation: .72, brightness: .86, alpha: 1},
            {hue: 43, saturation: .77, brightness: .93, alpha: 1}
        ], t.prototype.radius = 2, t.prototype.emitterLine = {width: 60, x: 870, y: 215}, t.prototype.move = function () {
            var t, e;
            return this.count++, t = 2 * Math.sin(this.count / 20 - this.shiftFactor), e = this.speed(), this.spark.translate(new this.scope.Point(t, e)), this.spark.fillColor = this.color()
        }, t.prototype.dead = function () {
            return this.count > this.deathThreshold
        }, t.prototype.percentDead = function () {
            return this.count / this.deathThreshold
        }, t.prototype.remove = function () {
            return this.spark.remove()
        }, t.prototype.time = function () {
            return this.count / 600
        }, t.prototype.speed = function () {
            return-this.initialSpeed / Math.sqrt(this.count)
        }, t.prototype.color = function () {
            return{hue: this.startColor.hue, saturation: this.startColor.saturation, brightness: this.startColor.brightness - this.startColor.brightness * this.percentDead(), alpha: 1 - this.percentDead()}
        }, t
    }()
}.call(this), function () {
    var t, e = {}.hasOwnProperty, i = function (t, i) {
        function n() {
            this.constructor = t
        }

        for (var o in i)e.call(i, o) && (t[o] = i[o]);
        return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
    };
    LayerVault.Controller.SanityAnimation = function (e) {
        function n() {
            var t = this;
            return this.render = function () {
                return n.prototype.render.apply(t, arguments)
            }, n.__super__.constructor.apply(this, arguments)
        }

        return i(n, e), n.prototype.el = "#SaneFileContainer", n.prototype.containerSel = ".HomepageSection", n.prototype.canvasEl = "#SaneFileContainer > canvas", n.prototype.width = 190, n.prototype.height = 150, n.prototype.images = ["assets/external-home-sane-file1.png", "assets/external-home-sane-file2.png", "assets/external-home-sane-file3.png", "assets/external-home-sane-file4.png", "assets/external-home-sane-file5.png"], n.prototype.instances = 14, n.prototype.imageObjs = [], n.prototype.imageRasters = [], n.prototype.initialize = function () {
            return n.__super__.initialize.apply(this, arguments), this.$el.length ? ($("<canvas>").attr({width: this.width, height: this.height}).appendTo(this.el), this.setupCanvas(), this.loadImages()) : void 0
        }, n.prototype.loadImages = function () {
            var t, e, i, n, o;
            for (o = [], t = i = 0, n = this.instances; n >= 0 ? n >= i : i >= n; t = n >= 0 ? ++i : --i)o.push(function () {
                var t, i, n, o, r = this;
                for (n = this.images, o = [], t = 0, i = n.length; i > t; t++)e = n[t], o.push(function (t) {
                    var e;
                    return e = document.createElement("img"), e.onload = function () {
                        return r.imageLoaded(e)
                    }, e.src = t
                }(e));
                return o
            }.call(this));
            return o
        }, n.prototype.imageLoaded = function (t) {
            return this.imageObjs.push(t), this.imageObjs.length === this.images.length * this.instances ? this.ready() : void 0
        }, n.prototype.setupCanvas = function () {
            var t, e, i, n, o, r;
            return this.canvas = $(this.canvasEl).get(0), e = this.canvas.getContext("2d"), this.scope = new paper.PaperScope, this.scope.setup(this.canvas), i = window.devicePixelRatio || 1, t = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1, r = i / t, i !== t ? (o = this.canvas.width, n = this.canvas.height, this.canvas.width = o * r, this.canvas.height = n * r, this.canvas.style.width = "" + o + "px", this.canvas.style.height = "" + n + "px", e.scale(r, r)) : void 0
        }, n.prototype.ready = function () {
            return this.createImageRasters(), this.scope.view.onFrame = this.render
        }, n.prototype.createImageRasters = function () {
            var e, i, n, o, r, s;
            for (r = this.imageObjs, s = [], n = 0, o = r.length; o > n; n++)e = r[n], i = new t(e, this.scope, {width: this.width, height: this.height}), s.push(this.imageRasters.push(i));
            return s
        }, n.prototype.render = function (t) {
            var e, i, n, o, r;
            if (this.enabled()) {
                for (o = this.imageRasters, r = [], i = 0, n = o.length; n > i; i++)e = o[i], r.push(e.move(t));
                return r
            }
        }, n
    }(LayerVault.Controller.Animation), t = function () {
        function t(t, e, i) {
            this.scope = e, this.bounds = i, window.paper = this.scope, this.raster = new this.scope.Raster(t), this.raster.scale(this.scale), this.randomStart(!0)
        }

        return t.prototype.mode = null, t.prototype.padding = 50, t.prototype.scale = .5, t.prototype.speedFactor = .3, t.prototype.wobbleAmplitude = 1.5, t.prototype.randomStart = function (t) {
            var e, i;
            switch (null == t && (t = !1), this.wobbleShift = Math.PI / (3 * Math.random()), e = Math.randomRange(0, this.bounds.width), i = Math.randomRange(0, this.bounds.height), this.mode = Math.randomRange(0, 3), this.mode) {
                case 0:
                    t || (i = -this.padding), this.rotation = Math.randomRange(100, 260);
                    break;
                case 1:
                    t || (e = this.bounds.width + this.padding), this.rotation = Math.randomRange(190, 350);
                    break;
                case 2:
                    t || (i = this.bounds.height + this.padding), this.rotation = Math.randomRange(280, 440) % 360;
                    break;
                case 3:
                    t || (e = -this.padding, i = -this.padding), this.rotation = Math.randomRange(10, 170)
            }
            return this.raster.position = new this.scope.Point(e, i), this.xFactor = Math.cos(this.rotation), this.yFactor = Math.sin(this.rotation)
        }, t.prototype.move = function (t) {
            var e, i, n;
            switch (this.visible() || this.randomStart(), n = Math.sin(t.time - this.wobbleShift), this.mode) {
                case 0:
                case 2:
                    e = (this.xFactor + n * this.wobbleAmplitude) * this.speedFactor, i = this.yFactor * this.speedFactor;
                    break;
                case 1:
                case 3:
                    e = this.xFactor * this.speedFactor, i = (this.yFactor + n * this.wobbleAmplitude) * this.speedFactor
            }
            return this.raster.translate(new this.scope.Point(e, i))
        }, t.prototype.visible = function () {
            var t, e;
            return-this.padding < (t = this.raster.position.x) && t < this.padding + this.bounds.width && -this.padding < (e = this.raster.position.y) && e < this.padding + this.bounds.height
        }, t
    }()
}.call(this), function () {
    var t = this, e = {}.hasOwnProperty, i = function (t, i) {
        function n() {
            this.constructor = t
        }

        for (var o in i)e.call(i, o) && (t[o] = i[o]);
        return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
    };
    LayerVault.Controller.HomeController = function (n) {
        function o() {
            var t = this;
            return this.checkVideoVisibility = function () {
                return o.prototype.checkVideoVisibility.apply(t, arguments)
            }, this.setActiveAnimations = function () {
                return o.prototype.setActiveAnimations.apply(t, arguments)
            }, o.__super__.constructor.apply(this, arguments)
        }

        return i(o, n), o.prototype.animations = {}, o.prototype.animationDivs = [".HomepageSection", ".TourSection", "#HomeGallery"], o.prototype.animationThreshold = 150, o.prototype.videoSel = "#JuliusVideo", o.prototype.bindEvents = {sectionVisibilityChange: "checkVideoVisibility", gallerySlideChanged: "checkVideoVisibility"}, o.prototype.throttledFunctions = {setActiveAnimations: {throttle: 500}}, o.prototype.initialize = function () {
            var t;
            return t = this.currentPage(), null != this["initialize" + t] && this["initialize" + t](), this.bindScroll(), this.setActiveAnimations(), this.bindIOSButtons()
        }, o.prototype.currentPage = function () {
            var t;
            return t = window.location.pathname.match(/^\/(.*?)\/?$/)[1], 0 === t.length && (t = "index"), t.charAt(0).toUpperCase() + t.slice(1)
        }, o.prototype.initializeIndex = function () {
            var t;
            return this.gallery = new LayerVault.Controller.SlideGallery({el: "#HomeGallery"}), this.sanity = new LayerVault.Controller.SanityAnimation, this.animations.bubbles = new LayerVault.Controller.BubblesAnimation("#JuliusBubbles"), this.animations.iOSBubbles = new LayerVault.Controller.iOSBubblesAnimation("#iOSBubbles"), this.animations.darkBubbles = new LayerVault.Controller.DarkBubblesAnimation("#DarkBubbles"), this.animations.sparks = new LayerVault.Controller.SparksAnimation, t = window.location.hash.match(/^#(\d)$/), t ? this.gallery.setSlideByIndex(parseInt(t[1], 10)) : void 0
        }, o.prototype.bindScroll = function () {
            return $(window).on("scroll", this.setActiveAnimationsThrottled)
        }, o.prototype.setActiveAnimations = function () {
            return t = this, $(this.animationDivs.join(", ")).each(function () {
                var e, i, n, o, r, s;
                return e = $(this), r = $(window).scrollTop() - t.animationThreshold, o = r + $(window).height() + t.animationThreshold, n = e.offset().top, i = n + e.height(), s = o >= i && n >= r, s ? (e.addClass("Active"), t.fireEvent("sectionVisibilityChange", {el: e, visible: !0})) : (e.removeClass("Active"), t.fireEvent("sectionVisibilityChange", {el: e, visible: !1}))
            })
        }, o.prototype.checkVideoVisibility = function () {
            var t, e, i;
            if ("Index" === this.currentPage()) {
                if (i = $("#JuliusVideo").get(0), e = $("#HomeGallery").hasClass("Active"), !e)return this.pauseAllAnimations(), i.pause(), void 0;
                switch (t = $("#HomeGallery").find(".Active").attr("id")) {
                    case"BetterGreat":
                        return this.pauseAllAnimations();
                    case"iOSSlide":
                        return this.soloPlayAnimation("iOSBubbles");
                    case"DarkAges":
                        return this.soloPlayAnimation("darkBubbles"), this.animations.sparks.play();
                    case"Julius":
                        return this.soloPlayAnimation("bubbles"), i.addEventListener("playing", function () {
                            return this.className = this.className
                        }), i.play()
                }
            }
        }, o.prototype.bindIOSButtons = function () {
            return $("#HomeLink").click(function () {
                return $("#Closeup").hide()
            }), $("#CloseupLink").click(function () {
                return document.location = "/closeup"
            })
        }, o.prototype.pauseAllAnimations = function () {
            var t, i, n, o;
            n = this.animations, o = [];
            for (i in n)e.call(n, i) && (t = n[i], o.push(t.pause()));
            return o
        }, o.prototype.soloPlayAnimation = function (t) {
            var i, n, o, r;
            o = this.animations, r = [];
            for (n in o)e.call(o, n) && (i = o[n], t === n ? r.push(i.play()) : r.push(i.pause()));
            return r
        }, o
    }(LayerVault.Controller)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.PricingController = function (t) {
        function i() {
            var t = this;
            this.checkForSalesOccupancy = function () {
                return i.prototype.checkForSalesOccupancy.apply(t, arguments)
            }, this.showOSXOnly(), this.checkForSalesOccupancy()
        }

        return e(i, t), i.prototype.checkForSalesOccupancy = function () {
            return $.getJSON("/sales_status.json", function (t) {
                return t.available ? $("body").addClass("SalesAvailable") : void 0
            })
        }, i.prototype.showOSXOnly = function () {
            return this.isMac() ? void 0 : $("#OSXWarning").show()
        }, i.prototype.isMac = function () {
            return-1 !== navigator.platform.toUpperCase().indexOf("MAC")
        }, i
    }(LayerVault.Controller)
}.call(this), function (t) {
    function e(t) {
        return t.replace(/(:|\.)/g, "\\$1")
    }

    var i = "@VERSION", n = {exclude: [], excludeWithin: [], offset: 0, direction: "top", scrollElement: null, scrollTarget: null, beforeScroll: function () {
    }, afterScroll: function () {
    }, easing: "swing", speed: 400, autoCoefficent: 2}, o = function (e) {
        var i = [], n = !1, o = e.dir && "left" == e.dir ? "scrollLeft" : "scrollTop";
        return this.each(function () {
            if (this != document && this != window) {
                var e = t(this);
                e[o]() > 0 ? i.push(this) : (e[o](1), n = e[o]() > 0, n && i.push(this), e[o](0))
            }
        }), i.length || this.each(function () {
            "BODY" === this.nodeName && (i = [this])
        }), "first" === e.el && i.length > 1 && (i = [i[0]]), i
    };
    t.fn.extend({scrollable: function (t) {
        var e = o.call(this, {dir: t});
        return this.pushStack(e)
    }, firstScrollable: function (t) {
        var e = o.call(this, {el: "first", dir: t});
        return this.pushStack(e)
    }, smoothScroll: function (i) {
        i = i || {};
        var n = t.extend({}, t.fn.smoothScroll.defaults, i), o = t.smoothScroll.filterPath(location.pathname);
        return this.unbind("click.smoothscroll").bind("click.smoothscroll", function (i) {
            var r = this, s = t(this), a = n.exclude, l = n.excludeWithin, u = 0, h = 0, c = !0, p = {}, d = location.hostname === r.hostname || !r.hostname, f = n.scrollTarget || (t.smoothScroll.filterPath(r.pathname) || o) === o, g = e(r.hash);
            if (n.scrollTarget || d && f && g) {
                for (; c && u < a.length;)s.is(e(a[u++])) && (c = !1);
                for (; c && h < l.length;)s.closest(l[h++]).length && (c = !1)
            } else c = !1;
            c && (i.preventDefault(), t.extend(p, n, {scrollTarget: n.scrollTarget || g, link: r}), t.smoothScroll(p))
        }), this
    }}), t.smoothScroll = function (e, i) {
        var n, o, r, s, a = 0, l = "offset", u = "scrollTop", h = {}, c = {};
        "number" == typeof e ? (n = t.fn.smoothScroll.defaults, r = e) : (n = t.extend({}, t.fn.smoothScroll.defaults, e || {}), n.scrollElement && (l = "position", "static" == n.scrollElement.css("position") && n.scrollElement.css("position", "relative")), r = i || t(n.scrollTarget)[l]() && t(n.scrollTarget)[l]()[n.direction] || 0), n = t.extend({link: null}, n), u = "left" == n.direction ? "scrollLeft" : u, n.scrollElement ? (o = n.scrollElement, a = o[u]()) : o = t("html, body").firstScrollable(), h[u] = r + a + n.offset, n.beforeScroll.call(o, n), s = n.speed, "auto" === s && (s = h[u] || o.scrollTop(), s /= n.autoCoefficent), c = {duration: s, easing: n.easing, complete: function () {
            n.afterScroll.call(n.link, n)
        }}, n.step && (c.step = n.step), o.length ? o.stop().animate(h, c) : n.afterScroll.call(n.link, n)
    }, t.smoothScroll.version = i, t.smoothScroll.filterPath = function (t) {
        return t.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }, t.fn.smoothScroll.defaults = n
}(jQuery), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.CouponController = function (t) {
        function i() {
            var t = this;
            this.couponCode = function () {
                return i.prototype.couponCode.apply(t, arguments)
            }, this.couponCodeInUrl = function () {
                return i.prototype.couponCodeInUrl.apply(t, arguments)
            }, this.couponApplied = function () {
                return i.prototype.couponApplied.apply(t, arguments)
            }, this.applyAnnualDiscount = function () {
                return i.prototype.applyAnnualDiscount.apply(t, arguments)
            }, this.applyMonthlyDiscount = function () {
                return i.prototype.applyMonthlyDiscount.apply(t, arguments)
            }, this.applyCouponDiscount = function () {
                return i.prototype.applyCouponDiscount.apply(t, arguments)
            }, this.onApplyCouponError = function () {
                return i.prototype.onApplyCouponError.apply(t, arguments)
            }, this.onApplyCouponSuccess = function () {
                return i.prototype.onApplyCouponSuccess.apply(t, arguments)
            }, this.couponLoading = function () {
                return i.prototype.couponLoading.apply(t, arguments)
            }, this.onCouponCodeChange = function () {
                return i.prototype.onCouponCodeChange.apply(t, arguments)
            }, this.originalPrice = $("#OrderTotal").text().replace("/month", ""), this.bindCoupons(), this.couponCodeInUrl()
        }

        return e(i, t), i.prototype.toggleCouponSel = "#ToggleCoupon", i.prototype.couponFormSel = "#CouponForm", i.prototype.couponCodeSel = "#LVCouponCode", i.prototype.couponEndpoint = "/coupons.json", i.prototype.bindCoupons = function () {
            return $("body").on("change", this.couponCodeSel, this.onCouponCodeChange)
        }, i.prototype.onCouponCodeChange = function () {
            return this.removeCouponDiscount(), this.couponLoading(), $.get(this.couponEndpoint, {coupon_code: $(this.couponCodeSel).val().toLowerCase()}).success(this.delegate(this.onApplyCouponSuccess)).error(this.delegate(this.onApplyCouponError))
        }, i.prototype.removeCouponDiscount = function () {
            return $("#OrderTotal").text(this.originalPrice + "/month")
        }, i.prototype.couponLoading = function () {
            return $(".CheckoutReview").removeClass("CouponApplied"), $(this.couponFormSel).addClass("Loading")
        }, i.prototype.onApplyCouponSuccess = function (t) {
            return $(this.couponFormSel).removeClass("Loading"), $("#LVCouponCode").prop("disabled", !1), t && t.attributes && t.attributes.discount_percent ? this.applyCouponDiscount(t.attributes.discount_percent) : void 0
        }, i.prototype.onApplyCouponError = function () {
            return $(this.couponFormSel).removeClass("Loading")
        }, i.prototype.applyCouponDiscount = function (t) {
            return t = parseFloat(t, 10), isNaN(t) || 0 > t || t > 100 ? void 0 : (this.applyMonthlyDiscount(t), this.applyAnnualDiscount(t))
        }, i.prototype.applyMonthlyDiscount = function (t) {
            var e, i;
            try {
                i = parseFloat($(".Monthly").find(".OldPrice").text().replace("$", ""), 10)
            } catch (n) {
                return
            }
            return e = (i - i * (t / 100)).toFixed(2), $(".Monthly").find(".NewPrice").html("$" + e), this.couponApplied()
        }, i.prototype.applyAnnualDiscount = function (t) {
            var e, i, n;
            try {
                e = $(".Annually").find(".OldPrice").clone(), e.find("del").remove(), n = parseFloat(e.text().replace("$", ""), 10)
            } catch (o) {
                return
            }
            return i = (n - n * (t / 100)).toFixed(2), $(".Annually").find(".NewPrice").html("$" + i), this.couponApplied()
        }, i.prototype.couponApplied = function () {
            return $(".CheckoutReview").addClass("CouponApplied")
        }, i.prototype.couponCodeInUrl = function () {
            return LayerVault.Utils.getUrlVars().coupon_code ? ($(this.toggleCouponSel).hide(), $(this.couponFormSel).slideDown(), $(this.couponCodeSel).val(LayerVault.Utils.getUrlVars().coupon_code), $(this.couponCodeSel).trigger("change")) : void 0
        }, i.prototype.couponCode = function () {
            return $(this.couponCodeSel).val().toLowerCase()
        }, i
    }(LayerVault.Controller)
}.call(this), LayerVault.Class.create("LayerVault.Controller.CheckoutController", LayerVault.Controller, function () {
    var t = this;
    $(function () {
        t.initialize()
    })
}, {emailSel: "#CheckoutEmail", cvvSel: "#CVVNumber", ccNumberSel: "#CCNumber", monthSel: "#CCMonth", yearSel: "#CCYear", orgSel: "#OrganizationName", errorPlaceholderSel: ".ErrorPlaceholder", radioButtonSel: ".Radio", createAccountButtonSel: ".SubscribeButton", ccErrorMessage: "Please enter a valid credit card number.", cvvErrorMessage: "Please enter a valid CVV number.", dateErrorMessage: "Please select a valid expiration date.", emailErrorMessage: "A valid email address is required.", stripeKey: "pk_live_xem8cLGTpKDjQFJ5XIqCV204", errorClassMessageMap: {first_name: "A first name is required to sign up.", last_name: "A last name is required to sign up.", email: "An email address is required for billing.", card_number: "A valid credit card number is required.", cvv: "A valid CVV is required.", any: "There was a problem processing your transaction. Please confirm your info."}, createCustomerEndpoint: "/users/create_user_from_checkout.json", createCustomerTokenEndpoint: "/users/create_customer_token.json", updateSubscriptionPlanEndpoint: "/users/update_subscription_plan.json", orgOkayEndpoint: "/organizations/name_okay.json", initialize: function () {
    this.couponController = new LayerVault.Controller.CouponController({}), this.configureStripe(), this.debouncedOrgNameCheck = _.debounce(this.delegate(this.onOrgChange), 500), this.bindValidators(), this.bindButtons(), this.bindBillingCycleButtons()
}, bindValidators: function () {
    var t = $("body");
    t.on("change", this.ccNumberSel, this.delegate(this.onCCNumberChange)), t.on("change", this.cvvSel, this.delegate(this.onCVVChange)), t.on("change", this.monthSel, this.delegate(this.onDateChange)), t.on("change", this.yearSel, this.delegate(this.onDateChange)), t.on("change", this.emailSel, this.delegate(this.onEmailChange)), t.on("change", [this.ccNumberSel, this.cvvSel, this.monthSel, this.yearSel, this.emailSel, this.orgSel].join(","), this.delegate(this.onInputChanged)), t.on("keyup", this.yearSel, this.delegate(this.onYearKeyUp)), t.on("keyup", this.orgSel, this.debouncedOrgNameCheck)
}, bindButtons: function () {
    var t = $("body");
    t.on("click", this.createAccountButtonSel, this.delegate(this.onSubscribeButtonClick))
}, bindBillingCycleButtons: function () {
    $("body").on("click", this.radioButtonSel, this.delegate(this.onRadioClick))
}, configureStripe: function () {
    Stripe.setPublishableKey(this.stripeKey)
}, plancode: function () {
    return LayerVault.Utils.getUrlVars().plancode || "per_head"
}, onRadioClick: function (t) {
    var e = $(t.target);
    e.hasClass("Radio") || (e = e.parents(".Radio")), $("body").removeClass("MonthlyBilling").removeClass("AnnualBilling"), "MonthlyBilling" === e.attr("id") ? $("body").addClass("MonthlyBilling") : "AnnualBilling" === e.attr("id") && $("body").addClass("AnnualBilling"), this.onBillingCycleChanged()
}, onBillingCycleChanged: function () {
}, onCreateUserSuccess: function (t) {
    t.error ? ($(".ErrorPlaceholder").html(t.error), $(".ErrorPlaceholder").fadeIn()) : document.location = "/~?payment_success=true&plan=" + this.plancode()
}, onStripeCreateTokenResponse: function (t, e) {
    200 === t && $.ajax({type: "POST", url: this.createCustomerEndpoint, data: {"user[email]": $("#CheckoutEmail").val(), "user[login]": $("#CheckoutEmail").val(), "user[password]": $("#CheckoutPassword").val(), "user[password_confirmation]": $("#CheckoutPassword").val(), "user[first_name]": $("#FirstName").val(), "user[last_name]": $("#LastName").val(), "organization[name]": $(this.orgSel).val(), plancode: this.plancode(), token: e.id, coupon_code: this.couponController.couponCode().toLowerCase(), billing_cycle: this.billingCycle()}, dataType: "json"}).success(this.delegate(this.onCreateUserSuccess)).error(this.delegate(this.onCreateUserError))
}, billingCycle: function () {
    return $("body.AnnualBilling").length > 0 ? "annual" : "monthly"
}, onCreateUserError: function (t) {
    var e = this;
    t = $.parseJSON(t.responseText), _.each(t.errors, function (t) {
        e.showError(t)
    }), t.errors || this.showError("Credit card was declined. Please contact your bank."), this.resetButton()
}, onSubscribeButtonClick: function (t) {
    return t.stopPropagation(), t.preventDefault(), this.formIsValid() ? ($(".ErrorPlaceholder").removeClass("ActiveError"), $(this.createAccountButtonSel).text("Please wait..."), Stripe.createToken({number: $(this.ccNumberSel).val(), cvc: $(this.cvvSel).val(), exp_month: $(this.monthSel).val(), exp_year: $(this.yearSel).val()}, this.delegate(this.onStripeCreateTokenResponse)), !1) : !1
}, resetButton: function () {
    $(this.createAccountButtonSel).text("Create my account")
}, onDOMNodeInserted: function (t) {
    var e = $(t.target);
    e.hasClass("error") && this.displayError(e)
}, displayError: function (t) {
    var e = t.parent().attr("class").split(/\s+/)[1];
    e && this.errorClassMessageMap[e] ? $(".ErrorPlaceholder").html(this.errorClassMessageMap[e]) : $(".ErrorPlaceholder").html("Please double-check the form and try again."), $(".ErrorPlaceholder").fadeIn(), this.resetButton()
}, ccIsValid: function () {
    return Stripe.validateCardNumber($(this.ccNumberSel).val())
}, cvvIsValid: function () {
    return Stripe.validateCVC($(this.cvvSel).val())
}, dateIsValid: function () {
    return Stripe.validateExpiry($(this.monthSel).val(), $(this.yearSel).val())
}, emailIsValid: function () {
    return LayerVault.Utils.isValidEmailAddress($(this.emailSel).val())
}, formIsValid: function () {
    return this.emailIsValid() && this.dateIsValid() && this.ccIsValid() && this.cvvIsValid() && this.orgIsValid()
}, onEmailChange: function () {
    return this.emailIsValid() ? (this.hideError(this.emailErrorMessage), $(this.emailSel).removeClass("Invalid"), void 0) : (this.showError(this.emailErrorMessage), $(this.emailSel).addClass("Invalid"), void 0)
}, onOrgChange: function () {
    return"" === $(this.orgSel).val() ? (this.onOrgOkayError(), void 0) : ($.get(this.orgOkayEndpoint, {name: $(this.orgSel).val()}).success(this.delegate(this.onOrgOkaySuccess)).error(this.delegate(this.onOrgOkayError)), void 0)
}, onOrgOkaySuccess: function () {
    this.hideError(this.orgErrorMessage), $(this.orgSel).removeClass("Invalid"), this.onInputChanged()
}, onOrgOkayError: function () {
    $(this.orgSel).addClass("Invalid"), this.onInputChanged()
}, orgIsValid: function () {
    return"" !== $(this.orgSel).val() && !$(this.orgSel).hasClass("Invalid")
}, onCVVChange: function () {
    return this.cvvIsValid() ? (this.hideError(this.cvvErrorMessage), $(this.cvvSel).removeClass("Invalid"), void 0) : (this.showError(this.cvvErrorMessage), $(this.cvvSel).addClass("Invalid"), void 0)
}, onCCNumberChange: function () {
    return this.ccIsValid() ? (this.hideError(this.ccErrorMessage), $(this.ccNumberSel).removeClass("Invalid"), void 0) : (this.showError(this.ccErrorMessage), $(this.ccNumberSel).addClass("Invalid"), void 0)
}, onDateChange: function () {
    return this.dateIsValid() ? (this.hideError(this.dateErrorMessage), $(this.monthSel).removeClass("Invalid"), $(this.yearSel).removeClass("Invalid"), void 0) : (this.dateComplete() && (this.showError(this.dateErrorMessage), $(this.monthSel).addClass("Invalid"), $(this.yearSel).addClass("Invalid")), void 0)
}, showError: function (t) {
    t && ($(this.errorPlaceholderSel).html(t), $(this.errorPlaceholderSel).addClass("ActiveError"))
}, hideError: function (t) {
    t && $(this.errorPlaceholderSel).html() === t && $(this.errorPlaceholderSel).removeClass("ActiveError")
}, hideAllErrors: function () {
    $(this.errorPlaceholderSel).html(""), $(this.errorPlaceholderSel).removeClass("ActiveError")
}, onInputChanged: function () {
    this.formIsValid() ? $(this.createAccountButtonSel).removeClass("Disabled") : $(this.createAccountButtonSel).addClass("Disabled")
}, onYearKeyUp: function () {
    4 === $(this.yearSel).val().length && $(this.yearSel).trigger("change")
}, dateComplete: function () {
    return 2 === $(this.monthSel).val().length && 4 === $(this.yearSel).val().length
}}), LayerVault.Class.create("LayerVault.Controller.SupportController", LayerVault.Controller, function (t) {
    this.config = t, this.initialize()
}, {initialize: function () {
    this.initQuestionLinks(), this.setupMixpanelLinks()
}, initQuestionLinks: function () {
    $("body").on("click", "article span", this.delegate(this.onQuestionClick))
}, onQuestionClick: function (t) {
    var e = $(t.target);
    return"article" !== e.get(0).nodeName.toLowerCase() && (e = e.parents("article")), e.toggleClass("ActiveAnswer"), !1
}, setupMixpanelLinks: function () {
    mixpanel && mixpanel.track_links(".MixpanelTrack", "Entered Support Chat", {referrer: document.referrer})
}}), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Component.InviteForm = function (t) {
        function i() {
            var t = this;
            return this.onFormSubmit = function () {
                return i.prototype.onFormSubmit.apply(t, arguments)
            }, i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.componentName = "InviteForm", i.prototype.el = "#Login", i.prototype.formSel = "form", i.prototype.passwordSel = "#user_password", i.prototype.firstNameSel = "#user_first_name", i.prototype.lastNameSel = "#user_last_name", i.prototype.errorSel = "#LoginError", i.prototype.initialize = function () {
            return this.$on("submit", this.formSel, this.onFormSubmit)
        }, i.prototype.onFormSubmit = function () {
            var t, e, i, n;
            for (n = [this.passwordSel, this.firstNameSel, this.lastNameSel], e = 0, i = n.length; i > e; e++)if (t = n[e], 0 === $.trim($(t).val()).length)return this.showError(), !1;
            return this.$(this.errorSel).hide(), !0
        }, i.prototype.showError = function () {
            return this.$(this.errorSel).slideDown()
        }, i
    }(LayerVault.Component)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.InviteController = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.controllerName = "InviteController", i.component("InviteForm"), i
    }(LayerVault.Controller)
}.call(this), function () {
    var t = {}.hasOwnProperty, e = function (e, i) {
        function n() {
            this.constructor = e
        }

        for (var o in i)t.call(i, o) && (e[o] = i[o]);
        return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
    };
    LayerVault.Controller.FreeSignupController = function (t) {
        function i() {
            var t = this;
            return this.hideError = function () {
                return i.prototype.hideError.apply(t, arguments)
            }, this.showError = function () {
                return i.prototype.showError.apply(t, arguments)
            }, this.onAccountCreateError = function () {
                return i.prototype.onAccountCreateError.apply(t, arguments)
            }, this.onAccountCreateSuccess = function () {
                return i.prototype.onAccountCreateSuccess.apply(t, arguments)
            }, this.onSubscribeButtonClick = function () {
                return i.prototype.onSubscribeButtonClick.apply(t, arguments)
            }, this.onInputChanged = function () {
                return i.prototype.onInputChanged.apply(t, arguments)
            }, this.onEmailChange = function () {
                return i.prototype.onEmailChange.apply(t, arguments)
            }, this.onOrgOkayError = function () {
                return i.prototype.onOrgOkayError.apply(t, arguments)
            }, this.onOrgOkaySuccess = function () {
                return i.prototype.onOrgOkaySuccess.apply(t, arguments)
            }, this.onOrgChange = function () {
                return i.prototype.onOrgChange.apply(t, arguments)
            }, this.bindButtons = function () {
                return i.prototype.bindButtons.apply(t, arguments)
            }, this.bindValidators = function () {
                return i.prototype.bindValidators.apply(t, arguments)
            }, i.__super__.constructor.apply(this, arguments)
        }

        return e(i, t), i.prototype.controllerName = "FreeSignupController", i.prototype.emailSel = "#CheckoutEmail", i.prototype.passwordSel = "#CheckoutPassword", i.prototype.firstNameSel = "#FirstName", i.prototype.lastNameSel = "#LastName", i.prototype.orgSel = "#OrganizationName", i.prototype.errorPlaceholderSel = ".ErrorPlaceholder", i.prototype.createAccountButtonSel = ".SubscribeButton", i.prototype.emailErrorMessage = "A valid email address is required.", i.prototype.orgErrorMessage = "That organization name is already in use.", i.prototype.createUserEndpoint = "/users/create_free_user.json", i.prototype.orgOkayEndpoint = "/organizations/name_okay.json", i.prototype.initialize = function () {
            return this.$body = $(document.body), this.debouncedOrgNameCheck = _.debounce(this.onOrgChange, 500), this.bindValidators(), this.bindButtons()
        }, i.prototype.bindValidators = function () {
            return this.$body.on("change", this.emailSel, this.onEmailChange), this.$body.on("keyup", [this.emailSel, this.orgSel, this.firstNameSel, this.lastNameSel, this.passwordSel], this.onInputChanged), this.$body.on("keyup", this.orgSel, this.debouncedOrgNameCheck)
        }, i.prototype.bindButtons = function () {
            return this.$body.on("click", this.createAccountButtonSel, this.onSubscribeButtonClick)
        }, i.prototype.emailIsValid = function () {
            return LayerVault.Utils.isValidEmailAddress($(this.emailSel).val())
        }, i.prototype.nameIsValid = function () {
            return"" !== $(this.firstNameSel).val() && "" !== $(this.lastNameSel).val()
        }, i.prototype.formIsValid = function () {
            return this.nameIsValid() && this.passwordIsValid() && this.orgIsValid() && this.emailIsValid()
        }, i.prototype.orgIsValid = function () {
            return"" !== $(this.orgSel).val() && !$(this.orgSel).hasClass("Invalid")
        }, i.prototype.passwordIsValid = function () {
            return"" !== $(this.passwordSel).val()
        }, i.prototype.onOrgChange = function () {
            return"" !== $(this.orgSel).val() ? $.get(this.orgOkayEndpoint, {name: $(this.orgSel).val()}).success(this.onOrgOkaySuccess).error(this.onOrgOkayError) : void 0
        }, i.prototype.onOrgOkaySuccess = function () {
            return this.hideError(this.orgErrorMessage), $(this.orgSel).removeClass("Invalid"), this.onInputChanged()
        }, i.prototype.onOrgOkayError = function () {
            return $(this.orgSel).addClass("Invalid"), this.onInputChanged()
        }, i.prototype.onEmailChange = function () {
            return this.emailIsValid() ? (this.hideError(this.emailErrorMessage), $(this.emailSel).removeClass("Invalid"), !1) : (this.showError(this.emailErrorMessage), $(this.emailSel).addClass("Invalid"))
        }, i.prototype.onInputChanged = function () {
            return this.formIsValid() ? $(this.createAccountButtonSel).removeClass("Disabled") : $(this.createAccountButtonSel).addClass("Disabled"), !0
        }, i.prototype.onSubscribeButtonClick = function () {
            return this.formIsValid() ? ($(this.createAccountButtonSel).text("Please wait..."), $.post(this.createUserEndpoint, {"user[email]": $(this.emailSel).val(), "user[login]": $(this.emailSel).val(), "user[password]": $(this.passwordSel).val(), "user[password_confirmation]": $(this.passwordSel).val(), "user[first_name]": $(this.firstNameSel).val(), "user[last_name]": $(this.lastNameSel).val(), "organization[name]": $(this.orgSel).val()}).success(this.onAccountCreateSuccess).error(this.onAccountCreateError), !1) : !1
        }, i.prototype.onAccountCreateSuccess = function () {
            return $(this.createAccountButtonSel).text("Booya!"), document.location = "/~?signup=true"
        }, i.prototype.onAccountCreateError = function (t) {
            return $(this.createAccountButtonSel).text("Create my account"), t = JSON.parse(t.responseText), this.showError(t.errors[0])
        }, i.prototype.showError = function (t) {
            return t ? ($(this.errorPlaceholderSel).html(t), $(this.errorPlaceholderSel).addClass("ActiveError")) : void 0
        }, i.prototype.hideError = function (t) {
            return t && $(this.errorPlaceholderSel).html() === t ? $(this.errorPlaceholderSel).removeClass("ActiveError") : void 0
        }, i
    }(LayerVault.Controller)
}.call(this);