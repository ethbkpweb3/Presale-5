!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "70d8cbc6-39f9-4601-925e-d6c85d89e3c4",
        e._sentryDebugIdIdentifier = "sentry-dbid-70d8cbc6-39f9-4601-925e-d6c85d89e3c4")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[547], {
    7340: function(e, t) {
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
        t.parse = function(e, t) {
            if ("string" != typeof e)
                throw TypeError("argument str must be a string");
            for (var i = {}, s = (t || {}).decode || r, a = 0; a < e.length; ) {
                var n = e.indexOf("=", a);
                if (-1 === n)
                    break;
                var l = e.indexOf(";", a);
                if (-1 === l)
                    l = e.length;
                else if (l < n) {
                    a = e.lastIndexOf(";", n - 1) + 1;
                    continue
                }
                var o = e.slice(a, n).trim();
                if (void 0 === i[o]) {
                    var d = e.slice(n + 1, l).trim();
                    34 === d.charCodeAt(0) && (d = d.slice(1, -1)),
                    i[o] = function(e, t) {
                        try {
                            return t(e)
                        } catch (t) {
                            return e
                        }
                    }(d, s)
                }
                a = l + 1
            }
            return i
        }
        ,
        t.serialize = function(e, t, r) {
            var n = r || {}
              , l = n.encode || a;
            if ("function" != typeof l)
                throw TypeError("option encode is invalid");
            if (!s.test(e))
                throw TypeError("argument name is invalid");
            var o = l(t);
            if (o && !s.test(o))
                throw TypeError("argument val is invalid");
            var d = e + "=" + o;
            if (null != n.maxAge) {
                var c = n.maxAge - 0;
                if (isNaN(c) || !isFinite(c))
                    throw TypeError("option maxAge is invalid");
                d += "; Max-Age=" + Math.floor(c)
            }
            if (n.domain) {
                if (!s.test(n.domain))
                    throw TypeError("option domain is invalid");
                d += "; Domain=" + n.domain
            }
            if (n.path) {
                if (!s.test(n.path))
                    throw TypeError("option path is invalid");
                d += "; Path=" + n.path
            }
            if (n.expires) {
                var u = n.expires;
                if ("[object Date]" !== i.call(u) && !(u instanceof Date) || isNaN(u.valueOf()))
                    throw TypeError("option expires is invalid");
                d += "; Expires=" + u.toUTCString()
            }
            if (n.httpOnly && (d += "; HttpOnly"),
            n.secure && (d += "; Secure"),
            n.partitioned && (d += "; Partitioned"),
            n.priority)
                switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
                case "low":
                    d += "; Priority=Low";
                    break;
                case "medium":
                    d += "; Priority=Medium";
                    break;
                case "high":
                    d += "; Priority=High";
                    break;
                default:
                    throw TypeError("option priority is invalid")
                }
            if (n.sameSite)
                switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                case !0:
                case "strict":
                    d += "; SameSite=Strict";
                    break;
                case "lax":
                    d += "; SameSite=Lax";
                    break;
                case "none":
                    d += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid")
                }
            return d
        }
        ;
        var i = Object.prototype.toString
          , s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function r(e) {
            return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
        }
        function a(e) {
            return encodeURIComponent(e)
        }
    },
    7457: function(e, t, i) {
        var s = function() {
            return (s = Object.assign || function(e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                    for (var r in t = arguments[i])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = function(e, t) {
            var i = {};
            for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && 0 > t.indexOf(s) && (i[s] = e[s]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var r = 0, s = Object.getOwnPropertySymbols(e); r < s.length; r++)
                    0 > t.indexOf(s[r]) && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (i[s[r]] = e[s[r]]);
            return i
        };
        t.d8 = t.ej = t.$1 = void 0;
        var a = i(7340)
          , n = function() {
            return !0
        }
          , l = function(e) {
            return !!e && "getAll"in e && "set"in e && "function" == typeof e.getAll && "function" == typeof e.set
        }
          , o = function(e) {
            return !!(null == e ? void 0 : e.req) && "cookies"in e.req && l(null == e ? void 0 : e.req.cookies) || !!(null == e ? void 0 : e.res) && "cookies"in e.res && l(null == e ? void 0 : e.res.cookies) || !!(null == e ? void 0 : e.cookies) && l(e.cookies())
        }
          , d = function(e) {
            var t = {};
            return e.getAll().forEach(function(e) {
                var i = e.name
                  , s = e.value;
                t[i] = s
            }),
            t
        }
          , c = function(e) {
            void 0 === e && (e = "");
            try {
                var t = JSON.stringify(e);
                return /^[\{\[]/.test(t) ? t : e
            } catch (t) {
                return e
            }
        };
        t.$1 = function(e) {
            if (o(e)) {
                if (null == e ? void 0 : e.req)
                    return d(e.req.cookies);
                if (null == e ? void 0 : e.cookies)
                    return d(e.cookies())
            }
            if (e && (t = e.req),
            !n())
                return t && t.cookies ? t.cookies : t && t.headers.cookie ? (0,
                a.parse)(t.headers.cookie) : {};
            for (var t, i = {}, s = document.cookie ? document.cookie.split("; ") : [], r = 0, l = s.length; r < l; r++) {
                var c = s[r].split("=")
                  , u = c.slice(1).join("=");
                i[c[0]] = u
            }
            return i
        }
        ,
        t.ej = function(e, i) {
            var s = (0,
            t.$1)(i)[e];
            if (void 0 !== s)
                return s ? s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : s
        }
        ,
        t.d8 = function(e, t, i) {
            if (o(i)) {
                var l, d, u, p = i.req, h = i.res, f = i.cookies, m = r(i, ["req", "res", "cookies"]), v = s({
                    name: e,
                    value: t
                }, m);
                p && p.cookies.set(v),
                h && h.cookies.set(v),
                f && f().set(v);
                return
            }
            if (i) {
                var p = i.req
                  , h = i.res
                  , g = r(i, ["req", "res"]);
                d = p,
                u = h,
                l = g
            }
            var w = (0,
            a.serialize)(e, c(t), s({
                path: "/"
            }, l));
            if (n())
                document.cookie = w;
            else if (u && d) {
                var S = u.getHeader("Set-Cookie");
                if (Array.isArray(S) || (S = S ? [String(S)] : []),
                u.setHeader("Set-Cookie", S.concat(w)),
                d && d.cookies) {
                    var b = d.cookies;
                    "" === t ? delete b[e] : b[e] = c(t)
                }
                if (d && d.headers && d.headers.cookie) {
                    var b = (0,
                    a.parse)(d.headers.cookie);
                    "" === t ? delete b[e] : b[e] = c(t),
                    d.headers.cookie = Object.entries(b).reduce(function(e, t) {
                        return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                    }, "")
                }
            }
        }
    },
    5272: function(e, t) {
        var i;
        !/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
        function() {
            "use strict";
            var s = {}.hasOwnProperty;
            function r() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var i = arguments[t];
                    i && (e = a(e, function(e) {
                        if ("string" == typeof e || "number" == typeof e)
                            return e;
                        if ("object" != typeof e)
                            return "";
                        if (Array.isArray(e))
                            return r.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                            return e.toString();
                        var t = "";
                        for (var i in e)
                            s.call(e, i) && e[i] && (t = a(t, i));
                        return t
                    }(i)))
                }
                return e
            }
            function a(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (r.default = r,
            e.exports = r) : void 0 !== (i = (function() {
                return r
            }
            ).apply(t, [])) && (e.exports = i)
        }()
    },
    2874: function(e, t, i) {
        i.d(t, {
            W_: function() {
                return r
            }
        }),
        i(9612);
        var s = i(2314);
        function r(e) {
            let {swiper: t, extendParams: i, on: r, emit: a} = e;
            function n(e) {
                let i;
                return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e)) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements && "string" == typeof e && i && i.length > 1 && 1 === t.el.querySelectorAll(e).length ? i = t.el.querySelector(e) : i && 1 === i.length && (i = i[0])),
                e && !i) ? e : i
            }
            function l(e, i) {
                let r = t.params.navigation;
                (e = (0,
                s.m)(e)).forEach(e => {
                    e && (e.classList[i ? "add" : "remove"](...r.disabledClass.split(" ")),
                    "BUTTON" === e.tagName && (e.disabled = i),
                    t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass))
                }
                )
            }
            function o() {
                let {nextEl: e, prevEl: i} = t.navigation;
                if (t.params.loop) {
                    l(i, !1),
                    l(e, !1);
                    return
                }
                l(i, t.isBeginning && !t.params.rewind),
                l(e, t.isEnd && !t.params.rewind)
            }
            function d(e) {
                e.preventDefault(),
                (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(),
                a("navigationPrev"))
            }
            function c(e) {
                e.preventDefault(),
                (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(),
                a("navigationNext"))
            }
            function u() {
                var e, i, r;
                let a = t.params.navigation;
                if (t.params.navigation = (e = t.originalParams.navigation,
                i = t.params.navigation,
                r = {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                },
                t.params.createElements && Object.keys(r).forEach(a => {
                    if (!i[a] && !0 === i.auto) {
                        let n = (0,
                        s.e)(t.el, ".".concat(r[a]))[0];
                        n || ((n = (0,
                        s.c)("div", r[a])).className = r[a],
                        t.el.append(n)),
                        i[a] = n,
                        e[a] = n
                    }
                }
                ),
                i),
                !(a.nextEl || a.prevEl))
                    return;
                let l = n(a.nextEl)
                  , o = n(a.prevEl);
                Object.assign(t.navigation, {
                    nextEl: l,
                    prevEl: o
                }),
                l = (0,
                s.m)(l),
                o = (0,
                s.m)(o);
                let u = (e, i) => {
                    e && e.addEventListener("click", "next" === i ? c : d),
                    !t.enabled && e && e.classList.add(...a.lockClass.split(" "))
                }
                ;
                l.forEach(e => u(e, "next")),
                o.forEach(e => u(e, "prev"))
            }
            function p() {
                let {nextEl: e, prevEl: i} = t.navigation;
                e = (0,
                s.m)(e),
                i = (0,
                s.m)(i);
                let r = (e, i) => {
                    e.removeEventListener("click", "next" === i ? c : d),
                    e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                }
                ;
                e.forEach(e => r(e, "next")),
                i.forEach(e => r(e, "prev"))
            }
            i({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }),
            t.navigation = {
                nextEl: null,
                prevEl: null
            },
            r("init", () => {
                !1 === t.params.navigation.enabled ? h() : (u(),
                o())
            }
            ),
            r("toEdge fromEdge lock unlock", () => {
                o()
            }
            ),
            r("destroy", () => {
                p()
            }
            ),
            r("enable disable", () => {
                let {nextEl: e, prevEl: i} = t.navigation;
                if (e = (0,
                s.m)(e),
                i = (0,
                s.m)(i),
                t.enabled) {
                    o();
                    return
                }
                [...e, ...i].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass))
            }
            ),
            r("click", (e, i) => {
                let {nextEl: r, prevEl: n} = t.navigation;
                r = (0,
                s.m)(r),
                n = (0,
                s.m)(n);
                let l = i.target;
                if (t.params.navigation.hideOnClick && !n.includes(l) && !r.includes(l)) {
                    let e;
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l)))
                        return;
                    r.length ? e = r[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
                    !0 === e ? a("navigationShow") : a("navigationHide"),
                    [...r, ...n].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
                }
            }
            );
            let h = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),
                p()
            }
            ;
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
                    u(),
                    o()
                }
                ,
                disable: h,
                update: o,
                init: u,
                destroy: p
            })
        }
    },
    9612: function(e, t, i) {
        function s(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }
        function r(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(i => {
                void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i])
            }
            )
        }
        i.d(t, {
            a: function() {
                return o
            },
            g: function() {
                return n
            }
        });
        let a = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function n() {
            let e = "undefined" != typeof document ? document : {};
            return r(e, a),
            e
        }
        let l = {
            document: a,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };
        function o() {
            let e = window;
            return r(e, l),
            e
        }
    },
    2314: function(e, t, i) {
        i.d(t, {
            a: function() {
                return w
            },
            c: function() {
                return h
            },
            d: function() {
                return n
            },
            e: function() {
                return u
            },
            f: function() {
                return S
            },
            h: function() {
                return g
            },
            j: function() {
                return l
            },
            m: function() {
                return b
            },
            n: function() {
                return a
            },
            o: function() {
                return v
            },
            p: function() {
                return m
            },
            q: function() {
                return f
            },
            r: function() {
                return c
            },
            s: function() {
                return d
            },
            t: function() {
                return p
            },
            u: function() {
                return function e() {
                    let t = Object(arguments.length <= 0 ? void 0 : arguments[0])
                      , i = ["__proto__", "constructor", "prototype"];
                    for (let s = 1; s < arguments.length; s += 1) {
                        let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                        if (null != r && (void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                            let s = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                            for (let i = 0, a = s.length; i < a; i += 1) {
                                let a = s[i]
                                  , n = Object.getOwnPropertyDescriptor(r, a);
                                void 0 !== n && n.enumerable && (o(t[a]) && o(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a]) : !o(t[a]) && o(r[a]) ? (t[a] = {},
                                r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a])) : t[a] = r[a])
                            }
                        }
                    }
                    return t
                }
            },
            v: function() {
                return r
            }
        });
        var s = i(9612);
        function r(e) {
            Object.keys(e).forEach(t => {
                try {
                    e[t] = null
                } catch (e) {}
                try {
                    delete e[t]
                } catch (e) {}
            }
            )
        }
        function a(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        }
        function n() {
            return Date.now()
        }
        function l(e, t) {
            let i, r, a;
            void 0 === t && (t = "x");
            let n = (0,
            s.a)()
              , l = function(e) {
                let t;
                let i = (0,
                s.a)();
                return i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                !t && e.currentStyle && (t = e.currentStyle),
                t || (t = e.style),
                t
            }(e);
            return n.WebKitCSSMatrix ? ((r = l.transform || l.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")),
            a = new n.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (r = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
            "y" === t && (r = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
            r || 0
        }
        function o(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function d(e, t, i) {
            e.style.setProperty(t, i)
        }
        function c(e) {
            let t, {swiper: i, targetPosition: r, side: a} = e, n = (0,
            s.a)(), l = -i.translate, o = null, d = i.params.speed;
            i.wrapperEl.style.scrollSnapType = "none",
            n.cancelAnimationFrame(i.cssModeFrameID);
            let c = r > l ? "next" : "prev"
              , u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t
              , p = () => {
                t = new Date().getTime(),
                null === o && (o = t);
                let e = l + (.5 - Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) * (r - l);
                if (u(e, r) && (e = r),
                i.wrapperEl.scrollTo({
                    [a]: e
                }),
                u(e, r)) {
                    i.wrapperEl.style.overflow = "hidden",
                    i.wrapperEl.style.scrollSnapType = "",
                    setTimeout( () => {
                        i.wrapperEl.style.overflow = "",
                        i.wrapperEl.scrollTo({
                            [a]: e
                        })
                    }
                    ),
                    n.cancelAnimationFrame(i.cssModeFrameID);
                    return
                }
                i.cssModeFrameID = n.requestAnimationFrame(p)
            }
            ;
            p()
        }
        function u(e, t) {
            return void 0 === t && (t = ""),
            [...e.children].filter(e => e.matches(t))
        }
        function p(e) {
            try {
                console.warn(e);
                return
            } catch (e) {}
        }
        function h(e, t) {
            var i;
            void 0 === t && (t = []);
            let s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""),
            i.trim().split(" ").filter(e => !!e.trim()))),
            s
        }
        function f(e, t) {
            let i = [];
            for (; e.previousElementSibling; ) {
                let s = e.previousElementSibling;
                t ? s.matches(t) && i.push(s) : i.push(s),
                e = s
            }
            return i
        }
        function m(e, t) {
            let i = [];
            for (; e.nextElementSibling; ) {
                let s = e.nextElementSibling;
                t ? s.matches(t) && i.push(s) : i.push(s),
                e = s
            }
            return i
        }
        function v(e, t) {
            return (0,
            s.a)().getComputedStyle(e, null).getPropertyValue(t)
        }
        function g(e) {
            let t, i = e;
            if (i) {
                for (t = 0; null !== (i = i.previousSibling); )
                    1 === i.nodeType && (t += 1);
                return t
            }
        }
        function w(e, t) {
            let i = []
              , s = e.parentElement;
            for (; s; )
                t ? s.matches(t) && i.push(s) : i.push(s),
                s = s.parentElement;
            return i
        }
        function S(e, t, i) {
            let r = (0,
            s.a)();
            return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
        function b(e) {
            return (Array.isArray(e) ? e : [e]).filter(e => !!e)
        }
    },
    2043: function(e, t, i) {
        let s, r, a;
        i.d(t, {
            Z: function() {
                return O
            }
        });
        var n = i(9612)
          , l = i(2314);
        function o() {
            return s || (s = function() {
                let e = (0,
                n.a)()
                  , t = (0,
                n.g)();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                    touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()),
            s
        }
        function d(e) {
            return void 0 === e && (e = {}),
            r || (r = function(e) {
                let {userAgent: t} = void 0 === e ? {} : e
                  , i = o()
                  , s = (0,
                n.a)()
                  , r = s.navigator.platform
                  , a = t || s.navigator.userAgent
                  , l = {
                    ios: !1,
                    android: !1
                }
                  , d = s.screen.width
                  , c = s.screen.height
                  , u = a.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , p = a.match(/(iPad).*OS\s([\d_]+)/)
                  , h = a.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , f = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                  , m = "MacIntel" === r;
                return !p && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(d, "x").concat(c)) >= 0 && ((p = a.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]),
                m = !1),
                u && "Win32" !== r && (l.os = "android",
                l.android = !0),
                (p || f || h) && (l.os = "ios",
                l.ios = !0),
                l
            }(e)),
            r
        }
        let c = (e, t, i) => {
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        }
          , u = (e, t) => {
            if (!e || e.destroyed || !e.params)
                return;
            let i = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
            if (i) {
                let t = i.querySelector(".".concat(e.params.lazyPreloaderClass));
                !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)) : requestAnimationFrame( () => {
                    i.shadowRoot && (t = i.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass))) && t.remove()
                }
                )),
                t && t.remove()
            }
        }
          , p = (e, t) => {
            if (!e.slides[t])
                return;
            let i = e.slides[t].querySelector('[loading="lazy"]');
            i && i.removeAttribute("loading")
        }
          , h = e => {
            if (!e || e.destroyed || !e.params)
                return;
            let t = e.params.lazyPreloadPrevNext
              , i = e.slides.length;
            if (!i || !t || t < 0)
                return;
            t = Math.min(t, i);
            let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
              , r = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                let i = [r - t];
                i.push(...Array.from({
                    length: t
                }).map( (e, t) => r + s + t)),
                e.slides.forEach( (t, s) => {
                    i.includes(t.column) && p(e, s)
                }
                );
                return
            }
            let a = r + s - 1;
            if (e.params.rewind || e.params.loop)
                for (let s = r - t; s <= a + t; s += 1) {
                    let t = (s % i + i) % i;
                    (t < r || t > a) && p(e, t)
                }
            else
                for (let s = Math.max(r - t, 0); s <= Math.min(a + t, i - 1); s += 1)
                    s !== r && (s > a || s < r) && p(e, s)
        }
        ;
        function f(e) {
            let {swiper: t, runCallbacks: i, direction: s, step: r} = e
              , {activeIndex: a, previousIndex: n} = t
              , l = s;
            if (l || (l = a > n ? "next" : a < n ? "prev" : "reset"),
            t.emit("transition".concat(r)),
            i && a !== n) {
                if ("reset" === l) {
                    t.emit("slideResetTransition".concat(r));
                    return
                }
                t.emit("slideChangeTransition".concat(r)),
                "next" === l ? t.emit("slideNextTransition".concat(r)) : t.emit("slidePrevTransition".concat(r))
            }
        }
        function m(e, t, i) {
            let s = (0,
            n.a)()
              , {params: r} = e
              , a = r.edgeSwipeDetection
              , l = r.edgeSwipeThreshold;
            return !a || !(i <= l) && !(i >= s.innerWidth - l) || "prevent" === a && (t.preventDefault(),
            !0)
        }
        function v(e) {
            let t = (0,
            n.g)()
              , i = e;
            i.originalEvent && (i = i.originalEvent);
            let s = this.touchEventsData;
            if ("pointerdown" === i.type) {
                if (null !== s.pointerId && s.pointerId !== i.pointerId)
                    return;
                s.pointerId = i.pointerId
            } else
                "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
            if ("touchstart" === i.type) {
                m(this, i, i.targetTouches[0].pageX);
                return
            }
            let {params: r, touches: a, enabled: o} = this;
            if (!o || !r.simulateTouch && "mouse" === i.pointerType || this.animating && r.preventInteractionOnTransition)
                return;
            !this.animating && r.cssMode && r.loop && this.loopFix();
            let d = i.target;
            if ("wrapper" === r.touchEventsTarget && !this.wrapperEl.contains(d) || "which"in i && 3 === i.which || "button"in i && i.button > 0 || s.isTouched && s.isMoved)
                return;
            let c = !!r.noSwipingClass && "" !== r.noSwipingClass
              , u = i.composedPath ? i.composedPath() : i.path;
            c && i.target && i.target.shadowRoot && u && (d = u[0]);
            let p = r.noSwipingSelector ? r.noSwipingSelector : ".".concat(r.noSwipingClass)
              , h = !!(i.target && i.target.shadowRoot);
            if (r.noSwiping && (h ? function(e, t) {
                return void 0 === t && (t = this),
                function t(i) {
                    if (!i || i === (0,
                    n.g)() || i === (0,
                    n.a)())
                        return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                }(t)
            }(p, d) : d.closest(p))) {
                this.allowClick = !0;
                return
            }
            if (r.swipeHandler && !d.closest(r.swipeHandler))
                return;
            a.currentX = i.pageX,
            a.currentY = i.pageY;
            let f = a.currentX
              , v = a.currentY;
            if (!m(this, i, f))
                return;
            Object.assign(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            a.startX = f,
            a.startY = v,
            s.touchStartTime = (0,
            l.d)(),
            this.allowClick = !0,
            this.updateSize(),
            this.swipeDirection = void 0,
            r.threshold > 0 && (s.allowThresholdMove = !1);
            let g = !0;
            d.matches(s.focusableElements) && (g = !1,
            "SELECT" === d.nodeName && (s.isTouched = !1)),
            t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== d && t.activeElement.blur();
            let w = g && this.allowTouchMove && r.touchStartPreventDefault;
            (r.touchStartForcePreventDefault || w) && !d.isContentEditable && i.preventDefault(),
            r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(),
            this.emit("touchStart", i)
        }
        function g(e) {
            let t, i;
            let s = (0,
            n.g)()
              , r = this.touchEventsData
              , {params: a, touches: o, rtlTranslate: d, enabled: c} = this;
            if (!c || !a.simulateTouch && "mouse" === e.pointerType)
                return;
            let u = e;
            if (u.originalEvent && (u = u.originalEvent),
            "pointermove" === u.type && (null !== r.touchId || u.pointerId !== r.pointerId))
                return;
            if ("touchmove" === u.type) {
                if (!(t = [...u.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId)
                    return
            } else
                t = u;
            if (!r.isTouched) {
                r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", u);
                return
            }
            let p = t.pageX
              , h = t.pageY;
            if (u.preventedByNestedSwiper) {
                o.startX = p,
                o.startY = h;
                return
            }
            if (!this.allowTouchMove) {
                u.target.matches(r.focusableElements) || (this.allowClick = !1),
                r.isTouched && (Object.assign(o, {
                    startX: p,
                    startY: h,
                    currentX: p,
                    currentY: h
                }),
                r.touchStartTime = (0,
                l.d)());
                return
            }
            if (a.touchReleaseOnEdges && !a.loop) {
                if (this.isVertical()) {
                    if (h < o.startY && this.translate <= this.maxTranslate() || h > o.startY && this.translate >= this.minTranslate()) {
                        r.isTouched = !1,
                        r.isMoved = !1;
                        return
                    }
                } else if (p < o.startX && this.translate <= this.maxTranslate() || p > o.startX && this.translate >= this.minTranslate())
                    return
            }
            if (s.activeElement && u.target === s.activeElement && u.target.matches(r.focusableElements)) {
                r.isMoved = !0,
                this.allowClick = !1;
                return
            }
            r.allowTouchCallbacks && this.emit("touchMove", u),
            o.previousX = o.currentX,
            o.previousY = o.currentY,
            o.currentX = p,
            o.currentY = h;
            let f = o.currentX - o.startX
              , m = o.currentY - o.startY;
            if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold)
                return;
            if (void 0 === r.isScrolling) {
                let e;
                this.isHorizontal() && o.currentY === o.startY || this.isVertical() && o.currentX === o.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI,
                r.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
            }
            if (r.isScrolling && this.emit("touchMoveOpposite", u),
            void 0 === r.startMoving && (o.currentX !== o.startX || o.currentY !== o.startY) && (r.startMoving = !0),
            r.isScrolling) {
                r.isTouched = !1;
                return
            }
            if (!r.startMoving)
                return;
            this.allowClick = !1,
            !a.cssMode && u.cancelable && u.preventDefault(),
            a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
            let v = this.isHorizontal() ? f : m
              , g = this.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
            a.oneWayMovement && (v = Math.abs(v) * (d ? 1 : -1),
            g = Math.abs(g) * (d ? 1 : -1)),
            o.diff = v,
            v *= a.touchRatio,
            d && (v = -v,
            g = -g);
            let w = this.touchesDirection;
            this.swipeDirection = v > 0 ? "prev" : "next",
            this.touchesDirection = g > 0 ? "prev" : "next";
            let S = this.params.loop && !a.cssMode
              , b = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
            if (!r.isMoved) {
                if (S && b && this.loopFix({
                    direction: this.swipeDirection
                }),
                r.startTranslate = this.getTranslate(),
                this.setTransition(0),
                this.animating) {
                    let e = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    this.wrapperEl.dispatchEvent(e)
                }
                r.allowMomentumBounce = !1,
                a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0),
                this.emit("sliderFirstMove", u)
            }
            if (new Date().getTime(),
            r.isMoved && r.allowThresholdMove && w !== this.touchesDirection && S && b && Math.abs(v) >= 1) {
                Object.assign(o, {
                    startX: p,
                    startY: h,
                    currentX: p,
                    currentY: h,
                    startTranslate: r.currentTranslate
                }),
                r.loopSwapReset = !0,
                r.startTranslate = r.currentTranslate;
                return
            }
            this.emit("sliderMove", u),
            r.isMoved = !0,
            r.currentTranslate = v + r.startTranslate;
            let T = !0
              , y = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (y = 0),
            v > 0 ? (S && b && !i && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] : this.minTranslate()) && this.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }),
            r.currentTranslate > this.minTranslate() && (T = !1,
            a.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + v) ** y))) : v < 0 && (S && b && !i && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] : this.maxTranslate()) && this.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: this.slides.length - ("auto" === a.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }),
            r.currentTranslate < this.maxTranslate() && (T = !1,
            a.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - v) ** y))),
            T && (u.preventedByNestedSwiper = !0),
            !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
            !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
            this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate),
            a.threshold > 0) {
                if (Math.abs(v) > a.threshold || r.allowThresholdMove) {
                    if (!r.allowThresholdMove) {
                        r.allowThresholdMove = !0,
                        o.startX = o.currentX,
                        o.startY = o.currentY,
                        r.currentTranslate = r.startTranslate,
                        o.diff = this.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
                        return
                    }
                } else {
                    r.currentTranslate = r.startTranslate;
                    return
                }
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(),
            this.updateSlidesClasses()),
            a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(),
            this.updateProgress(r.currentTranslate),
            this.setTranslate(r.currentTranslate))
        }
        function w(e) {
            let t, i;
            let s = this
              , r = s.touchEventsData
              , a = e;
            if (a.originalEvent && (a = a.originalEvent),
            "touchend" === a.type || "touchcancel" === a.type) {
                if (!(t = [...a.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId)
                    return
            } else {
                if (null !== r.touchId || a.pointerId !== r.pointerId)
                    return;
                t = a
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (s.browser.isSafari || s.browser.isWebView)))
                return;
            r.pointerId = null,
            r.touchId = null;
            let {params: n, touches: o, rtlTranslate: d, slidesGrid: c, enabled: u} = s;
            if (!u || !n.simulateTouch && "mouse" === a.pointerType)
                return;
            if (r.allowTouchCallbacks && s.emit("touchEnd", a),
            r.allowTouchCallbacks = !1,
            !r.isTouched) {
                r.isMoved && n.grabCursor && s.setGrabCursor(!1),
                r.isMoved = !1,
                r.startMoving = !1;
                return
            }
            n.grabCursor && r.isMoved && r.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
            let p = (0,
            l.d)()
              , h = p - r.touchStartTime;
            if (s.allowClick) {
                let e = a.path || a.composedPath && a.composedPath();
                s.updateClickedSlide(e && e[0] || a.target, e),
                s.emit("tap click", a),
                h < 300 && p - r.lastClickTime < 300 && s.emit("doubleTap doubleClick", a)
            }
            if (r.lastClickTime = (0,
            l.d)(),
            (0,
            l.n)( () => {
                s.destroyed || (s.allowClick = !0)
            }
            ),
            !r.isTouched || !r.isMoved || !s.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
                r.isTouched = !1,
                r.isMoved = !1,
                r.startMoving = !1;
                return
            }
            if (r.isTouched = !1,
            r.isMoved = !1,
            r.startMoving = !1,
            i = n.followFinger ? d ? s.translate : -s.translate : -r.currentTranslate,
            n.cssMode)
                return;
            if (n.freeMode && n.freeMode.enabled) {
                s.freeMode.onTouchEnd({
                    currentPos: i
                });
                return
            }
            let f = i >= -s.maxTranslate() && !s.params.loop
              , m = 0
              , v = s.slidesSizesGrid[0];
            for (let e = 0; e < c.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                let t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                void 0 !== c[e + t] ? (f || i >= c[e] && i < c[e + t]) && (m = e,
                v = c[e + t] - c[e]) : (f || i >= c[e]) && (m = e,
                v = c[c.length - 1] - c[c.length - 2])
            }
            let g = null
              , w = null;
            n.rewind && (s.isBeginning ? w = n.virtual && n.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (g = 0));
            let S = (i - c[m]) / v
              , b = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
            if (h > n.longSwipesMs) {
                if (!n.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return
                }
                "next" === s.swipeDirection && (S >= n.longSwipesRatio ? s.slideTo(n.rewind && s.isEnd ? g : m + b) : s.slideTo(m)),
                "prev" === s.swipeDirection && (S > 1 - n.longSwipesRatio ? s.slideTo(m + b) : null !== w && S < 0 && Math.abs(S) > n.longSwipesRatio ? s.slideTo(w) : s.slideTo(m))
            } else {
                if (!n.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return
                }
                s.navigation && (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl) ? a.target === s.navigation.nextEl ? s.slideTo(m + b) : s.slideTo(m) : ("next" === s.swipeDirection && s.slideTo(null !== g ? g : m + b),
                "prev" === s.swipeDirection && s.slideTo(null !== w ? w : m))
            }
        }
        function S() {
            let e = this
              , {params: t, el: i} = e;
            if (i && 0 === i.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            let {allowSlideNext: s, allowSlidePrev: r, snapGrid: a} = e
              , n = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses();
            let l = n && t.loop;
            "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout( () => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
            , 500)),
            e.allowSlidePrev = r,
            e.allowSlideNext = s,
            e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }
        function b(e) {
            this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
        function T() {
            let {wrapperEl: e, rtlTranslate: t, enabled: i} = this;
            if (!i)
                return;
            this.previousTranslate = this.translate,
            this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop,
            0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
            let s = this.maxTranslate() - this.minTranslate();
            (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate),
            this.emit("setTranslate", this.translate, !1)
        }
        function y(e) {
            u(this, e.target),
            !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
        }
        function x() {
            !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0,
            this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
        }
        let E = (e, t) => {
            let i = (0,
            n.g)()
              , {params: s, el: r, wrapperEl: a, device: l} = e
              , o = !!s.nested
              , d = "on" === t ? "addEventListener" : "removeEventListener";
            i[d]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: o
            }),
            r[d]("touchstart", e.onTouchStart, {
                passive: !1
            }),
            r[d]("pointerdown", e.onTouchStart, {
                passive: !1
            }),
            i[d]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            i[d]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            i[d]("touchend", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointerup", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointercancel", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("touchcancel", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointerout", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("pointerleave", e.onTouchEnd, {
                passive: !0
            }),
            i[d]("contextmenu", e.onTouchEnd, {
                passive: !0
            }),
            (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0),
            s.cssMode && a[d]("scroll", e.onScroll),
            s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S, !0) : e[t]("observerUpdate", S, !0),
            r[d]("load", e.onLoad, {
                capture: !0
            })
        }
          , M = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var C = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let P = {
            eventsEmitter: {
                on(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    let r = i ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []),
                        s.eventsListeners[e][r](t)
                    }
                    ),
                    s
                },
                once(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    function r() {
                        s.off(e, r),
                        r.__emitterProxy && delete r.__emitterProxy;
                        for (var i = arguments.length, a = Array(i), n = 0; n < i; n++)
                            a[n] = arguments[n];
                        t.apply(s, a)
                    }
                    return r.__emitterProxy = t,
                    s.on(e, r, i)
                },
                onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e),
                    this
                },
                offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners)
                        return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1),
                    this
                },
                off(e, t) {
                    let i = this;
                    return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach( (s, r) => {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                        }
                        )
                    }
                    ),
                    i
                },
                emit() {
                    let e, t, i;
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
                        return s;
                    for (var r = arguments.length, a = Array(r), n = 0; n < r; n++)
                        a[n] = arguments[n];
                    return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0],
                    t = a.slice(1, a.length),
                    i = s) : (e = a[0].events,
                    t = a[0].data,
                    i = a[0].context || s),
                    t.unshift(i),
                    (Array.isArray(e) ? e : e.split(" ")).forEach(e => {
                        s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                            s.apply(i, [e, ...t])
                        }
                        ),
                        s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                            e.apply(i, t)
                        }
                        )
                    }
                    ),
                    s
                }
            },
            update: {
                updateSize: function() {
                    let e, t;
                    let i = this.el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth,
                    t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight,
                    0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0,
                    l.o)(i, "padding-left") || 0, 10) - parseInt((0,
                    l.o)(i, "padding-right") || 0, 10),
                    t = t - parseInt((0,
                    l.o)(i, "padding-top") || 0, 10) - parseInt((0,
                    l.o)(i, "padding-bottom") || 0, 10),
                    Number.isNaN(e) && (e = 0),
                    Number.isNaN(t) && (t = 0),
                    Object.assign(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    let e;
                    let t = this;
                    function i(e, i) {
                        return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                    }
                    let s = t.params
                      , {wrapperEl: r, slidesEl: a, size: n, rtlTranslate: o, wrongRTL: d} = t
                      , c = t.virtual && s.virtual.enabled
                      , u = c ? t.virtual.slides.length : t.slides.length
                      , p = (0,
                    l.e)(a, ".".concat(t.params.slideClass, ", swiper-slide"))
                      , h = c ? t.virtual.slides.length : p.length
                      , f = []
                      , m = []
                      , v = []
                      , g = s.slidesOffsetBefore;
                    "function" == typeof g && (g = s.slidesOffsetBefore.call(t));
                    let w = s.slidesOffsetAfter;
                    "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
                    let S = t.snapGrid.length
                      , b = t.slidesGrid.length
                      , T = s.spaceBetween
                      , y = -g
                      , x = 0
                      , E = 0;
                    if (void 0 === n)
                        return;
                    "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * n : "string" == typeof T && (T = parseFloat(T)),
                    t.virtualSize = -T,
                    p.forEach(e => {
                        o ? e.style.marginLeft = "" : e.style.marginRight = "",
                        e.style.marginBottom = "",
                        e.style.marginTop = ""
                    }
                    ),
                    s.centeredSlides && s.cssMode && ((0,
                    l.s)(r, "--swiper-centered-offset-before", ""),
                    (0,
                    l.s)(r, "--swiper-centered-offset-after", ""));
                    let M = s.grid && s.grid.rows > 1 && t.grid;
                    M ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
                    let C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                    for (let r = 0; r < h; r += 1) {
                        let a;
                        if (e = 0,
                        p[r] && (a = p[r]),
                        M && t.grid.updateSlide(r, a, p),
                        !p[r] || "none" !== (0,
                        l.o)(a, "display")) {
                            if ("auto" === s.slidesPerView) {
                                C && (p[r].style[t.getDirectionLabel("width")] = "");
                                let n = getComputedStyle(a)
                                  , o = a.style.transform
                                  , d = a.style.webkitTransform;
                                if (o && (a.style.transform = "none"),
                                d && (a.style.webkitTransform = "none"),
                                s.roundLengths)
                                    e = t.isHorizontal() ? (0,
                                    l.f)(a, "width", !0) : (0,
                                    l.f)(a, "height", !0);
                                else {
                                    let t = i(n, "width")
                                      , s = i(n, "padding-left")
                                      , r = i(n, "padding-right")
                                      , l = i(n, "margin-left")
                                      , o = i(n, "margin-right")
                                      , d = n.getPropertyValue("box-sizing");
                                    if (d && "border-box" === d)
                                        e = t + l + o;
                                    else {
                                        let {clientWidth: i, offsetWidth: n} = a;
                                        e = t + s + r + l + o + (n - i)
                                    }
                                }
                                o && (a.style.transform = o),
                                d && (a.style.webkitTransform = d),
                                s.roundLengths && (e = Math.floor(e))
                            } else
                                e = (n - (s.slidesPerView - 1) * T) / s.slidesPerView,
                                s.roundLengths && (e = Math.floor(e)),
                                p[r] && (p[r].style[t.getDirectionLabel("width")] = "".concat(e, "px"));
                            p[r] && (p[r].swiperSlideSize = e),
                            v.push(e),
                            s.centeredSlides ? (y = y + e / 2 + x / 2 + T,
                            0 === x && 0 !== r && (y = y - n / 2 - T),
                            0 === r && (y = y - n / 2 - T),
                            .001 > Math.abs(y) && (y = 0),
                            s.roundLengths && (y = Math.floor(y)),
                            E % s.slidesPerGroup == 0 && f.push(y),
                            m.push(y)) : (s.roundLengths && (y = Math.floor(y)),
                            (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && f.push(y),
                            m.push(y),
                            y = y + e + T),
                            t.virtualSize += e + T,
                            x = e,
                            E += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, n) + w,
                    o && d && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = "".concat(t.virtualSize + T, "px")),
                    s.setWrapperSize && (r.style[t.getDirectionLabel("width")] = "".concat(t.virtualSize + T, "px")),
                    M && t.grid.updateWrapperSize(e, f),
                    !s.centeredSlides) {
                        let e = [];
                        for (let i = 0; i < f.length; i += 1) {
                            let r = f[i];
                            s.roundLengths && (r = Math.floor(r)),
                            f[i] <= t.virtualSize - n && e.push(r)
                        }
                        f = e,
                        Math.floor(t.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - n)
                    }
                    if (c && s.loop) {
                        let e = v[0] + T;
                        if (s.slidesPerGroup > 1) {
                            let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup)
                              , r = e * s.slidesPerGroup;
                            for (let e = 0; e < i; e += 1)
                                f.push(f[f.length - 1] + r)
                        }
                        for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1)
                            1 === s.slidesPerGroup && f.push(f[f.length - 1] + e),
                            m.push(m[m.length - 1] + e),
                            t.virtualSize += e
                    }
                    if (0 === f.length && (f = [0]),
                    0 !== T) {
                        let e = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
                        p.filter( (e, t) => !s.cssMode || !!s.loop || t !== p.length - 1).forEach(t => {
                            t.style[e] = "".concat(T, "px")
                        }
                        )
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        v.forEach(t => {
                            e += t + (T || 0)
                        }
                        );
                        let t = (e -= T) - n;
                        f = f.map(e => e <= 0 ? -g : e > t ? t + w : e)
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        if (v.forEach(t => {
                            e += t + (T || 0)
                        }
                        ),
                        (e -= T) < n) {
                            let t = (n - e) / 2;
                            f.forEach( (e, i) => {
                                f[i] = e - t
                            }
                            ),
                            m.forEach( (e, i) => {
                                m[i] = e + t
                            }
                            )
                        }
                    }
                    if (Object.assign(t, {
                        slides: p,
                        snapGrid: f,
                        slidesGrid: m,
                        slidesSizesGrid: v
                    }),
                    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        (0,
                        l.s)(r, "--swiper-centered-offset-before", "".concat(-f[0], "px")),
                        (0,
                        l.s)(r, "--swiper-centered-offset-after", "".concat(t.size / 2 - v[v.length - 1] / 2, "px"));
                        let e = -t.snapGrid[0]
                          , i = -t.slidesGrid[0];
                        t.snapGrid = t.snapGrid.map(t => t + e),
                        t.slidesGrid = t.slidesGrid.map(e => e + i)
                    }
                    if (h !== u && t.emit("slidesLengthChange"),
                    f.length !== S && (t.params.watchOverflow && t.checkOverflow(),
                    t.emit("snapGridLengthChange")),
                    m.length !== b && t.emit("slidesGridLengthChange"),
                    s.watchSlidesProgress && t.updateSlidesOffset(),
                    t.emit("slidesUpdated"),
                    !c && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                        let e = "".concat(s.containerModifierClass, "backface-hidden")
                          , i = t.el.classList.contains(e);
                        h <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                    }
                },
                updateAutoHeight: function(e) {
                    let t;
                    let i = this
                      , s = []
                      , r = i.virtual && i.params.virtual.enabled
                      , a = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    let n = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                        if (i.params.centeredSlides)
                            (i.visibleSlides || []).forEach(e => {
                                s.push(e)
                            }
                            );
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                let e = i.activeIndex + t;
                                if (e > i.slides.length && !r)
                                    break;
                                s.push(n(e))
                            }
                    } else
                        s.push(n(i.activeIndex));
                    for (t = 0; t < s.length; t += 1)
                        if (void 0 !== s[t]) {
                            let e = s[t].offsetHeight;
                            a = e > a ? e : a
                        }
                    (a || 0 === a) && (i.wrapperEl.style.height = "".concat(a, "px"))
                },
                updateSlidesOffset: function() {
                    let e = this.slides
                      , t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                    for (let i = 0; i < e.length; i += 1)
                        e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    let t = this.params
                      , {slides: i, rtlTranslate: s, snapGrid: r} = this;
                    if (0 === i.length)
                        return;
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    let a = -e;
                    s && (a = e),
                    i.forEach(e => {
                        e.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
                    }
                    ),
                    this.visibleSlidesIndexes = [],
                    this.visibleSlides = [];
                    let n = t.spaceBetween;
                    "string" == typeof n && n.indexOf("%") >= 0 ? n = parseFloat(n.replace("%", "")) / 100 * this.size : "string" == typeof n && (n = parseFloat(n));
                    for (let e = 0; e < i.length; e += 1) {
                        let l = i[e]
                          , o = l.swiperSlideOffset;
                        t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                        let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (l.swiperSlideSize + n)
                          , c = (a - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (l.swiperSlideSize + n)
                          , u = -(a - o)
                          , p = u + this.slidesSizesGrid[e]
                          , h = u >= 0 && u <= this.size - this.slidesSizesGrid[e];
                        (u >= 0 && u < this.size - 1 || p > 1 && p <= this.size || u <= 0 && p >= this.size) && (this.visibleSlides.push(l),
                        this.visibleSlidesIndexes.push(e),
                        i[e].classList.add(t.slideVisibleClass)),
                        h && i[e].classList.add(t.slideFullyVisibleClass),
                        l.progress = s ? -d : d,
                        l.originalProgress = s ? -c : c
                    }
                },
                updateProgress: function(e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    let t = this.params
                      , i = this.maxTranslate() - this.minTranslate()
                      , {progress: s, isBeginning: r, isEnd: a, progressLoop: n} = this
                      , l = r
                      , o = a;
                    if (0 === i)
                        s = 0,
                        r = !0,
                        a = !0;
                    else {
                        s = (e - this.minTranslate()) / i;
                        let t = 1 > Math.abs(e - this.minTranslate())
                          , n = 1 > Math.abs(e - this.maxTranslate());
                        r = t || s <= 0,
                        a = n || s >= 1,
                        t && (s = 0),
                        n && (s = 1)
                    }
                    if (t.loop) {
                        let t = this.getSlideIndexByData(0)
                          , i = this.getSlideIndexByData(this.slides.length - 1)
                          , s = this.slidesGrid[t]
                          , r = this.slidesGrid[i]
                          , a = this.slidesGrid[this.slidesGrid.length - 1]
                          , l = Math.abs(e);
                        (n = l >= s ? (l - s) / a : (l + a - r) / a) > 1 && (n -= 1)
                    }
                    Object.assign(this, {
                        progress: s,
                        progressLoop: n,
                        isBeginning: r,
                        isEnd: a
                    }),
                    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e),
                    r && !l && this.emit("reachBeginning toEdge"),
                    a && !o && this.emit("reachEnd toEdge"),
                    (l && !r || o && !a) && this.emit("fromEdge"),
                    this.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    let e, t, i;
                    let {slides: s, params: r, slidesEl: a, activeIndex: n} = this
                      , o = this.virtual && r.virtual.enabled
                      , d = this.grid && r.grid && r.grid.rows > 1
                      , u = e => (0,
                    l.e)(a, ".".concat(r.slideClass).concat(e, ", swiper-slide").concat(e))[0];
                    if (o) {
                        if (r.loop) {
                            let t = n - this.virtual.slidesBefore;
                            t < 0 && (t = this.virtual.slides.length + t),
                            t >= this.virtual.slides.length && (t -= this.virtual.slides.length),
                            e = u('[data-swiper-slide-index="'.concat(t, '"]'))
                        } else
                            e = u('[data-swiper-slide-index="'.concat(n, '"]'))
                    } else
                        d ? (e = s.filter(e => e.column === n)[0],
                        i = s.filter(e => e.column === n + 1)[0],
                        t = s.filter(e => e.column === n - 1)[0]) : e = s[n];
                    e && !d && (i = (0,
                    l.p)(e, ".".concat(r.slideClass, ", swiper-slide"))[0],
                    r.loop && !i && (i = s[0]),
                    t = (0,
                    l.q)(e, ".".concat(r.slideClass, ", swiper-slide"))[0],
                    r.loop),
                    s.forEach(s => {
                        c(s, s === e, r.slideActiveClass),
                        c(s, s === i, r.slideNextClass),
                        c(s, s === t, r.slidePrevClass)
                    }
                    ),
                    this.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    let t, i;
                    let s = this
                      , r = s.rtlTranslate ? s.translate : -s.translate
                      , {snapGrid: a, params: n, activeIndex: l, realIndex: o, snapIndex: d} = s
                      , c = e
                      , u = e => {
                        let t = e - s.virtual.slidesBefore;
                        return t < 0 && (t = s.virtual.slides.length + t),
                        t >= s.virtual.slides.length && (t -= s.virtual.slides.length),
                        t
                    }
                    ;
                    if (void 0 === c && (c = function(e) {
                        let t;
                        let {slidesGrid: i, params: s} = e
                          , r = e.rtlTranslate ? e.translate : -e.translate;
                        for (let e = 0; e < i.length; e += 1)
                            void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                        return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0),
                        t
                    }(s)),
                    a.indexOf(r) >= 0)
                        t = a.indexOf(r);
                    else {
                        let e = Math.min(n.slidesPerGroupSkip, c);
                        t = e + Math.floor((c - e) / n.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1),
                    c === l && !s.params.loop) {
                        t !== d && (s.snapIndex = t,
                        s.emit("snapIndexChange"));
                        return
                    }
                    if (c === l && s.params.loop && s.virtual && s.params.virtual.enabled) {
                        s.realIndex = u(c);
                        return
                    }
                    let p = s.grid && n.grid && n.grid.rows > 1;
                    if (s.virtual && n.virtual.enabled && n.loop)
                        i = u(c);
                    else if (p) {
                        let e = s.slides.filter(e => e.column === c)[0]
                          , t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)),
                        i = Math.floor(t / n.grid.rows)
                    } else if (s.slides[c]) {
                        let e = s.slides[c].getAttribute("data-swiper-slide-index");
                        i = e ? parseInt(e, 10) : c
                    } else
                        i = c;
                    Object.assign(s, {
                        previousSnapIndex: d,
                        snapIndex: t,
                        previousRealIndex: o,
                        realIndex: i,
                        previousIndex: l,
                        activeIndex: c
                    }),
                    s.initialized && h(s),
                    s.emit("activeIndexChange"),
                    s.emit("snapIndexChange"),
                    (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"),
                    s.emit("slideChange"))
                },
                updateClickedSlide: function(e, t) {
                    let i;
                    let s = this.params
                      , r = e.closest(".".concat(s.slideClass, ", swiper-slide"));
                    !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                        !r && e.matches && e.matches(".".concat(s.slideClass, ", swiper-slide")) && (r = e)
                    }
                    );
                    let a = !1;
                    if (r) {
                        for (let e = 0; e < this.slides.length; e += 1)
                            if (this.slides[e] === r) {
                                a = !0,
                                i = e;
                                break
                            }
                    }
                    if (r && a)
                        this.clickedSlide = r,
                        this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                    else {
                        this.clickedSlide = void 0,
                        this.clickedIndex = void 0;
                        return
                    }
                    s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    let {params: t, rtlTranslate: i, translate: s, wrapperEl: r} = this;
                    if (t.virtualTranslate)
                        return i ? -s : s;
                    if (t.cssMode)
                        return s;
                    let a = (0,
                    l.j)(r, e);
                    return a += this.cssOverflowAdjustment(),
                    i && (a = -a),
                    a || 0
                },
                setTranslate: function(e, t) {
                    let {rtlTranslate: i, params: s, wrapperEl: r, progress: a} = this
                      , n = 0
                      , l = 0;
                    this.isHorizontal() ? n = i ? -e : e : l = e,
                    s.roundLengths && (n = Math.floor(n),
                    l = Math.floor(l)),
                    this.previousTranslate = this.translate,
                    this.translate = this.isHorizontal() ? n : l,
                    s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -n : -l : s.virtualTranslate || (this.isHorizontal() ? n -= this.cssOverflowAdjustment() : l -= this.cssOverflowAdjustment(),
                    r.style.transform = "translate3d(".concat(n, "px, ").concat(l, "px, ").concat(0, "px)"));
                    let o = this.maxTranslate() - this.minTranslate();
                    (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e),
                    this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, i, s, r) {
                    let a;
                    void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === i && (i = !0),
                    void 0 === s && (s = !0);
                    let n = this
                      , {params: o, wrapperEl: d} = n;
                    if (n.animating && o.preventInteractionOnTransition)
                        return !1;
                    let c = n.minTranslate()
                      , u = n.maxTranslate();
                    if (a = s && e > c ? c : s && e < u ? u : e,
                    n.updateProgress(a),
                    o.cssMode) {
                        let e = n.isHorizontal();
                        if (0 === t)
                            d[e ? "scrollLeft" : "scrollTop"] = -a;
                        else {
                            if (!n.support.smoothScroll)
                                return (0,
                                l.r)({
                                    swiper: n,
                                    targetPosition: -a,
                                    side: e ? "left" : "top"
                                }),
                                !0;
                            d.scrollTo({
                                [e ? "left" : "top"]: -a,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0),
                    n.setTranslate(a),
                    i && (n.emit("beforeTransitionStart", t, r),
                    n.emit("transitionEnd"))) : (n.setTransition(t),
                    n.setTranslate(a),
                    i && (n.emit("beforeTransitionStart", t, r),
                    n.emit("transitionStart")),
                    n.animating || (n.animating = !0,
                    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                        n.onTranslateToWrapperTransitionEnd = null,
                        delete n.onTranslateToWrapperTransitionEnd,
                        n.animating = !1,
                        i && n.emit("transitionEnd"))
                    }
                    ),
                    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
                    !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || (this.wrapperEl.style.transitionDuration = "".concat(e, "ms"),
                    this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
                    this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    let {params: i} = this;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(),
                    f({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    let {params: i} = this;
                    this.animating = !1,
                    i.cssMode || (this.setTransition(0),
                    f({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e, t, i, s, r) {
                    let a;
                    void 0 === e && (e = 0),
                    void 0 === i && (i = !0),
                    "string" == typeof e && (e = parseInt(e, 10));
                    let n = this
                      , o = e;
                    o < 0 && (o = 0);
                    let {params: d, snapGrid: c, slidesGrid: u, previousIndex: p, activeIndex: h, rtlTranslate: f, wrapperEl: m, enabled: v} = n;
                    if (!v && !s && !r || n.destroyed || n.animating && d.preventInteractionOnTransition)
                        return !1;
                    void 0 === t && (t = n.params.speed);
                    let g = Math.min(n.params.slidesPerGroupSkip, o)
                      , w = g + Math.floor((o - g) / n.params.slidesPerGroup);
                    w >= c.length && (w = c.length - 1);
                    let S = -c[w];
                    if (d.normalizeSlideIndex)
                        for (let e = 0; e < u.length; e += 1) {
                            let t = -Math.floor(100 * S)
                              , i = Math.floor(100 * u[e])
                              , s = Math.floor(100 * u[e + 1]);
                            void 0 !== u[e + 1] ? t >= i && t < s - (s - i) / 2 ? o = e : t >= i && t < s && (o = e + 1) : t >= i && (o = e)
                        }
                    if (n.initialized && o !== h && (!n.allowSlideNext && (f ? S > n.translate && S > n.minTranslate() : S < n.translate && S < n.minTranslate()) || !n.allowSlidePrev && S > n.translate && S > n.maxTranslate() && (h || 0) !== o))
                        return !1;
                    if (o !== (p || 0) && i && n.emit("beforeSlideChangeStart"),
                    n.updateProgress(S),
                    a = o > h ? "next" : o < h ? "prev" : "reset",
                    f && -S === n.translate || !f && S === n.translate)
                        return n.updateActiveIndex(o),
                        d.autoHeight && n.updateAutoHeight(),
                        n.updateSlidesClasses(),
                        "slide" !== d.effect && n.setTranslate(S),
                        "reset" !== a && (n.transitionStart(i, a),
                        n.transitionEnd(i, a)),
                        !1;
                    if (d.cssMode) {
                        let e = n.isHorizontal()
                          , i = f ? S : -S;
                        if (0 === t) {
                            let t = n.virtual && n.params.virtual.enabled;
                            t && (n.wrapperEl.style.scrollSnapType = "none",
                            n._immediateVirtual = !0),
                            t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
                            requestAnimationFrame( () => {
                                m[e ? "scrollLeft" : "scrollTop"] = i
                            }
                            )) : m[e ? "scrollLeft" : "scrollTop"] = i,
                            t && requestAnimationFrame( () => {
                                n.wrapperEl.style.scrollSnapType = "",
                                n._immediateVirtual = !1
                            }
                            )
                        } else {
                            if (!n.support.smoothScroll)
                                return (0,
                                l.r)({
                                    swiper: n,
                                    targetPosition: i,
                                    side: e ? "left" : "top"
                                }),
                                !0;
                            m.scrollTo({
                                [e ? "left" : "top"]: i,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return n.setTransition(t),
                    n.setTranslate(S),
                    n.updateActiveIndex(o),
                    n.updateSlidesClasses(),
                    n.emit("beforeTransitionStart", t, s),
                    n.transitionStart(i, a),
                    0 === t ? n.transitionEnd(i, a) : n.animating || (n.animating = !0,
                    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                        n.onSlideToWrapperTransitionEnd = null,
                        delete n.onSlideToWrapperTransitionEnd,
                        n.transitionEnd(i, a))
                    }
                    ),
                    n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
                    !0
                },
                slideToLoop: function(e, t, i, s) {
                    void 0 === e && (e = 0),
                    void 0 === i && (i = !0),
                    "string" == typeof e && (e = parseInt(e, 10));
                    let r = this;
                    if (r.destroyed)
                        return;
                    void 0 === t && (t = r.params.speed);
                    let a = r.grid && r.params.grid && r.params.grid.rows > 1
                      , n = e;
                    if (r.params.loop) {
                        if (r.virtual && r.params.virtual.enabled)
                            n += r.virtual.slidesBefore;
                        else {
                            let e;
                            if (a) {
                                let t = n * r.params.grid.rows;
                                e = r.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column
                            } else
                                e = r.getSlideIndexByData(n);
                            let t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
                              , {centeredSlides: i} = r.params
                              , l = r.params.slidesPerView;
                            "auto" === l ? l = r.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
                            i && l % 2 == 0 && (l += 1));
                            let o = t - e < l;
                            if (i && (o = o || e < Math.ceil(l / 2)),
                            s && i && "auto" !== r.params.slidesPerView && !a && (o = !1),
                            o) {
                                let s = i ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                r.loopFix({
                                    direction: s,
                                    slideTo: !0,
                                    activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                                    slideRealIndex: "next" === s ? r.realIndex : void 0
                                })
                            }
                            if (a) {
                                let e = n * r.params.grid.rows;
                                n = r.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column
                            } else
                                n = r.getSlideIndexByData(n)
                        }
                    }
                    return requestAnimationFrame( () => {
                        r.slideTo(n, t, i, s)
                    }
                    ),
                    r
                },
                slideNext: function(e, t, i) {
                    void 0 === t && (t = !0);
                    let s = this
                      , {enabled: r, params: a, animating: n} = s;
                    if (!r || s.destroyed)
                        return s;
                    void 0 === e && (e = s.params.speed);
                    let l = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : l
                      , d = s.virtual && a.virtual.enabled;
                    if (a.loop) {
                        if (n && !d && a.loopPreventsSliding)
                            return !1;
                        if (s.loopFix({
                            direction: "next"
                        }),
                        s._clientLeft = s.wrapperEl.clientLeft,
                        s.activeIndex === s.slides.length - 1 && a.cssMode)
                            return requestAnimationFrame( () => {
                                s.slideTo(s.activeIndex + o, e, t, i)
                            }
                            ),
                            !0
                    }
                    return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                },
                slidePrev: function(e, t, i) {
                    void 0 === t && (t = !0);
                    let s = this
                      , {params: r, snapGrid: a, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d} = s;
                    if (!o || s.destroyed)
                        return s;
                    void 0 === e && (e = s.params.speed);
                    let c = s.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (d && !c && r.loopPreventsSliding)
                            return !1;
                        s.loopFix({
                            direction: "prev"
                        }),
                        s._clientLeft = s.wrapperEl.clientLeft
                    }
                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    let p = u(l ? s.translate : -s.translate)
                      , h = a.map(e => u(e))
                      , f = a[h.indexOf(p) - 1];
                    if (void 0 === f && r.cssMode) {
                        let e;
                        a.forEach( (t, i) => {
                            p >= t && (e = i)
                        }
                        ),
                        void 0 !== e && (f = a[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    if (void 0 !== f && ((m = n.indexOf(f)) < 0 && (m = s.activeIndex - 1),
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = Math.max(m = m - s.slidesPerViewDynamic("previous", !0) + 1, 0))),
                    r.rewind && s.isBeginning) {
                        let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                        return s.slideTo(r, e, t, i)
                    }
                    return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame( () => {
                        s.slideTo(m, e, t, i)
                    }
                    ),
                    !0) : s.slideTo(m, e, t, i)
                },
                slideReset: function(e, t, i) {
                    if (void 0 === t && (t = !0),
                    !this.destroyed)
                        return void 0 === e && (e = this.params.speed),
                        this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e, t, i, s) {
                    if (void 0 === t && (t = !0),
                    void 0 === s && (s = .5),
                    this.destroyed)
                        return;
                    void 0 === e && (e = this.params.speed);
                    let r = this.activeIndex
                      , a = Math.min(this.params.slidesPerGroupSkip, r)
                      , n = a + Math.floor((r - a) / this.params.slidesPerGroup)
                      , l = this.rtlTranslate ? this.translate : -this.translate;
                    if (l >= this.snapGrid[n]) {
                        let e = this.snapGrid[n];
                        l - e > (this.snapGrid[n + 1] - e) * s && (r += this.params.slidesPerGroup)
                    } else {
                        let e = this.snapGrid[n - 1];
                        l - e <= (this.snapGrid[n] - e) * s && (r -= this.params.slidesPerGroup)
                    }
                    return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1),
                    this.slideTo(r, e, t, i)
                },
                slideToClickedSlide: function() {
                    let e;
                    let t = this;
                    if (t.destroyed)
                        return;
                    let {params: i, slidesEl: s} = t
                      , r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView
                      , a = t.clickedIndex
                      , n = t.isElement ? "swiper-slide" : ".".concat(i.slideClass);
                    if (i.loop) {
                        if (t.animating)
                            return;
                        e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                        i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                        a = t.getSlideIndex((0,
                        l.e)(s, "".concat(n, '[data-swiper-slide-index="').concat(e, '"]'))[0]),
                        (0,
                        l.n)( () => {
                            t.slideTo(a)
                        }
                        )) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(),
                        a = t.getSlideIndex((0,
                        l.e)(s, "".concat(n, '[data-swiper-slide-index="').concat(e, '"]'))[0]),
                        (0,
                        l.n)( () => {
                            t.slideTo(a)
                        }
                        )) : t.slideTo(a)
                    } else
                        t.slideTo(a)
                }
            },
            loop: {
                loopCreate: function(e) {
                    let t = this
                      , {params: i, slidesEl: s} = t;
                    if (!i.loop || t.virtual && t.params.virtual.enabled)
                        return;
                    let r = t.grid && i.grid && i.grid.rows > 1
                      , a = i.slidesPerGroup * (r ? i.grid.rows : 1)
                      , n = t.slides.length % a != 0
                      , o = r && t.slides.length % i.grid.rows != 0
                      , d = e => {
                        for (let s = 0; s < e; s += 1) {
                            let e = t.isElement ? (0,
                            l.c)("swiper-slide", [i.slideBlankClass]) : (0,
                            l.c)("div", [i.slideClass, i.slideBlankClass]);
                            t.slidesEl.append(e)
                        }
                    }
                    ;
                    n ? i.loopAddBlankSlides ? (d(a - t.slides.length % a),
                    t.recalcSlides(),
                    t.updateSlides()) : (0,
                    l.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : o && (i.loopAddBlankSlides ? (d(i.grid.rows - t.slides.length % i.grid.rows),
                    t.recalcSlides(),
                    t.updateSlides()) : (0,
                    l.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")),
                    (0,
                    l.e)(s, ".".concat(i.slideClass, ", swiper-slide")).forEach( (e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }
                    ),
                    t.loopFix({
                        slideRealIndex: e,
                        direction: i.centeredSlides ? void 0 : "next"
                    })
                },
                loopFix: function(e) {
                    let {slideRealIndex: t, slideTo: i=!0, direction: s, setTranslate: r, activeSlideIndex: a, byController: n, byMousewheel: o} = void 0 === e ? {} : e
                      , d = this;
                    if (!d.params.loop)
                        return;
                    d.emit("beforeLoopFix");
                    let {slides: c, allowSlidePrev: u, allowSlideNext: p, slidesEl: h, params: f} = d
                      , {centeredSlides: m} = f;
                    if (d.allowSlidePrev = !0,
                    d.allowSlideNext = !0,
                    d.virtual && f.virtual.enabled) {
                        i && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                        d.allowSlidePrev = u,
                        d.allowSlideNext = p,
                        d.emit("loopFix");
                        return
                    }
                    let v = f.slidesPerView;
                    "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(f.slidesPerView, 10)),
                    m && v % 2 == 0 && (v += 1));
                    let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup
                      , w = g;
                    w % g != 0 && (w += g - w % g),
                    w += f.loopAdditionalSlides,
                    d.loopedSlides = w;
                    let S = d.grid && f.grid && f.grid.rows > 1;
                    c.length < v + w ? (0,
                    l.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === f.grid.fill && (0,
                    l.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                    let b = []
                      , T = []
                      , y = d.activeIndex;
                    void 0 === a ? a = d.getSlideIndex(c.filter(e => e.classList.contains(f.slideActiveClass))[0]) : y = a;
                    let x = "next" === s || !s
                      , E = "prev" === s || !s
                      , M = 0
                      , C = 0
                      , P = S ? Math.ceil(c.length / f.grid.rows) : c.length
                      , k = (S ? c[a].column : a) + (m && void 0 === r ? -v / 2 + .5 : 0);
                    if (k < w) {
                        M = Math.max(w - k, g);
                        for (let e = 0; e < w - k; e += 1) {
                            let t = e - Math.floor(e / P) * P;
                            if (S) {
                                let e = P - t - 1;
                                for (let t = c.length - 1; t >= 0; t -= 1)
                                    c[t].column === e && b.push(t)
                            } else
                                b.push(P - t - 1)
                        }
                    } else if (k + v > P - w) {
                        C = Math.max(k - (P - 2 * w), g);
                        for (let e = 0; e < C; e += 1) {
                            let t = e - Math.floor(e / P) * P;
                            S ? c.forEach( (e, i) => {
                                e.column === t && T.push(i)
                            }
                            ) : T.push(t)
                        }
                    }
                    if (d.__preventObserver__ = !0,
                    requestAnimationFrame( () => {
                        d.__preventObserver__ = !1
                    }
                    ),
                    E && b.forEach(e => {
                        c[e].swiperLoopMoveDOM = !0,
                        h.prepend(c[e]),
                        c[e].swiperLoopMoveDOM = !1
                    }
                    ),
                    x && T.forEach(e => {
                        c[e].swiperLoopMoveDOM = !0,
                        h.append(c[e]),
                        c[e].swiperLoopMoveDOM = !1
                    }
                    ),
                    d.recalcSlides(),
                    "auto" === f.slidesPerView ? d.updateSlides() : S && (b.length > 0 && E || T.length > 0 && x) && d.slides.forEach( (e, t) => {
                        d.grid.updateSlide(t, e, d.slides)
                    }
                    ),
                    f.watchSlidesProgress && d.updateSlidesOffset(),
                    i) {
                        if (b.length > 0 && E) {
                            if (void 0 === t) {
                                let e = d.slidesGrid[y]
                                  , t = d.slidesGrid[y + M] - e;
                                o ? d.setTranslate(d.translate - t) : (d.slideTo(y + Math.ceil(M), 0, !1, !0),
                                r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t,
                                d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                            } else if (r) {
                                let e = S ? b.length / f.grid.rows : b.length;
                                d.slideTo(d.activeIndex + e, 0, !1, !0),
                                d.touchEventsData.currentTranslate = d.translate
                            }
                        } else if (T.length > 0 && x) {
                            if (void 0 === t) {
                                let e = d.slidesGrid[y]
                                  , t = d.slidesGrid[y - C] - e;
                                o ? d.setTranslate(d.translate - t) : (d.slideTo(y - C, 0, !1, !0),
                                r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t,
                                d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                            } else {
                                let e = S ? T.length / f.grid.rows : T.length;
                                d.slideTo(d.activeIndex - e, 0, !1, !0)
                            }
                        }
                    }
                    if (d.allowSlidePrev = u,
                    d.allowSlideNext = p,
                    d.controller && d.controller.control && !n) {
                        let e = {
                            slideRealIndex: t,
                            direction: s,
                            setTranslate: r,
                            activeSlideIndex: a,
                            byController: !0
                        };
                        Array.isArray(d.controller.control) ? d.controller.control.forEach(t => {
                            !t.destroyed && t.params.loop && t.loopFix({
                                ...e,
                                slideTo: t.params.slidesPerView === f.slidesPerView && i
                            })
                        }
                        ) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                            ...e,
                            slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && i
                        })
                    }
                    d.emit("loopFix")
                },
                loopDestroy: function() {
                    let {params: e, slidesEl: t} = this;
                    if (!e.loop || this.virtual && this.params.virtual.enabled)
                        return;
                    this.recalcSlides();
                    let i = [];
                    this.slides.forEach(e => {
                        i[void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                    }
                    ),
                    this.slides.forEach(e => {
                        e.removeAttribute("data-swiper-slide-index")
                    }
                    ),
                    i.forEach(e => {
                        t.append(e)
                    }
                    ),
                    this.recalcSlides(),
                    this.slideTo(this.realIndex, 0)
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    let t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0),
                    i.style.cursor = "move",
                    i.style.cursor = e ? "grabbing" : "grab",
                    t.isElement && requestAnimationFrame( () => {
                        t.__preventObserver__ = !1
                    }
                    )
                },
                unsetGrabCursor: function() {
                    let e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                    e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                    e.isElement && requestAnimationFrame( () => {
                        e.__preventObserver__ = !1
                    }
                    ))
                }
            },
            events: {
                attachEvents: function() {
                    let {params: e} = this;
                    this.onTouchStart = v.bind(this),
                    this.onTouchMove = g.bind(this),
                    this.onTouchEnd = w.bind(this),
                    this.onDocumentTouchStart = x.bind(this),
                    e.cssMode && (this.onScroll = T.bind(this)),
                    this.onClick = b.bind(this),
                    this.onLoad = y.bind(this),
                    E(this, "on")
                },
                detachEvents: function() {
                    E(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    let e = this
                      , {realIndex: t, initialized: i, params: s, el: r} = e
                      , a = s.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length)
                        return;
                    let n = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n)
                        return;
                    let o = (n in a ? a[n] : void 0) || e.originalParams
                      , d = M(e, s)
                      , c = M(e, o)
                      , u = e.params.grabCursor
                      , p = o.grabCursor
                      , h = s.enabled;
                    d && !c ? (r.classList.remove("".concat(s.containerModifierClass, "grid"), "".concat(s.containerModifierClass, "grid-column")),
                    e.emitContainerClasses()) : !d && c && (r.classList.add("".concat(s.containerModifierClass, "grid")),
                    (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add("".concat(s.containerModifierClass, "grid-column")),
                    e.emitContainerClasses()),
                    u && !p ? e.unsetGrabCursor() : !u && p && e.setGrabCursor(),
                    ["navigation", "pagination", "scrollbar"].forEach(t => {
                        if (void 0 === o[t])
                            return;
                        let i = s[t] && s[t].enabled
                          , r = o[t] && o[t].enabled;
                        i && !r && e[t].disable(),
                        !i && r && e[t].enable()
                    }
                    );
                    let f = o.direction && o.direction !== s.direction
                      , m = s.loop && (o.slidesPerView !== s.slidesPerView || f)
                      , v = s.loop;
                    f && i && e.changeDirection(),
                    (0,
                    l.u)(e.params, o);
                    let g = e.params.enabled
                      , w = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    h && !g ? e.disable() : !h && g && e.enable(),
                    e.currentBreakpoint = n,
                    e.emit("_beforeBreakpoint", o),
                    i && (m ? (e.loopDestroy(),
                    e.loopCreate(t),
                    e.updateSlides()) : !v && w ? (e.loopCreate(t),
                    e.updateSlides()) : v && !w && e.loopDestroy()),
                    e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t, i) {
                    if (void 0 === t && (t = "window"),
                    !e || "container" === t && !i)
                        return;
                    let s = !1
                      , r = (0,
                    n.a)()
                      , a = "window" === t ? r.innerHeight : i.clientHeight
                      , l = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                        value: a * parseFloat(e.substr(1)),
                        point: e
                    } : {
                        value: e,
                        point: e
                    });
                    l.sort( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < l.length; e += 1) {
                        let {point: a, value: n} = l[e];
                        "window" === t ? r.matchMedia("(min-width: ".concat(n, "px)")).matches && (s = a) : n <= i.clientWidth && (s = a)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    let {isLocked: e, params: t} = this
                      , {slidesOffsetBefore: i} = t;
                    if (i) {
                        let e = this.slides.length - 1
                          , t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                        this.isLocked = this.size > t
                    } else
                        this.isLocked = 1 === this.snapGrid.length;
                    !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                    !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked),
                    e && e !== this.isLocked && (this.isEnd = !1),
                    e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    let {classNames: e, params: t, rtl: i, el: s, device: r} = this
                      , a = function(e, t) {
                        let i = [];
                        return e.forEach(e => {
                            "object" == typeof e ? Object.keys(e).forEach(s => {
                                e[s] && i.push(t + s)
                            }
                            ) : "string" == typeof e && i.push(t + e)
                        }
                        ),
                        i
                    }(["initialized", t.direction, {
                        "free-mode": this.params.freeMode && t.freeMode.enabled
                    }, {
                        autoheight: t.autoHeight
                    }, {
                        rtl: i
                    }, {
                        grid: t.grid && t.grid.rows > 1
                    }, {
                        "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                    }, {
                        android: r.android
                    }, {
                        ios: r.ios
                    }, {
                        "css-mode": t.cssMode
                    }, {
                        centered: t.cssMode && t.centeredSlides
                    }, {
                        "watch-progress": t.watchSlidesProgress
                    }], t.containerModifierClass);
                    e.push(...a),
                    s.classList.add(...e),
                    this.emitContainerClasses()
                },
                removeClasses: function() {
                    let {el: e, classNames: t} = this;
                    e.classList.remove(...t),
                    this.emitContainerClasses()
                }
            }
        }
          , k = {};
        class O {
            getDirectionLabel(e) {
                return this.isHorizontal() ? e : ({
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                })[e]
            }
            getSlideIndex(e) {
                let {slidesEl: t, params: i} = this
                  , s = (0,
                l.e)(t, ".".concat(i.slideClass, ", swiper-slide"))
                  , r = (0,
                l.h)(s[0]);
                return (0,
                l.h)(e) - r
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
            }
            recalcSlides() {
                let {slidesEl: e, params: t} = this;
                this.slides = (0,
                l.e)(e, ".".concat(t.slideClass, ", swiper-slide"))
            }
            enable() {
                this.enabled || (this.enabled = !0,
                this.params.grabCursor && this.setGrabCursor(),
                this.emit("enable"))
            }
            disable() {
                this.enabled && (this.enabled = !1,
                this.params.grabCursor && this.unsetGrabCursor(),
                this.emit("disable"))
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate()
                  , s = (this.maxTranslate() - i) * e + i;
                this.translateTo(s, void 0 === t ? 0 : t),
                this.updateActiveIndex(),
                this.updateSlidesClasses()
            }
            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                let t = this;
                return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
            }
            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = [];
                e.slides.forEach(i => {
                    let s = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: s
                    }),
                    e.emit("_slideClass", i, s)
                }
                ),
                e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"),
                void 0 === t && (t = !1);
                let {params: i, slides: s, slidesGrid: r, slidesSizesGrid: a, size: n, activeIndex: l} = this
                  , o = 1;
                if ("number" == typeof i.slidesPerView)
                    return i.slidesPerView;
                if (i.centeredSlides) {
                    let e, t = s[l] ? Math.ceil(s[l].swiperSlideSize) : 0;
                    for (let i = l + 1; i < s.length; i += 1)
                        s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize),
                        o += 1,
                        t > n && (e = !0));
                    for (let i = l - 1; i >= 0; i -= 1)
                        s[i] && !e && (t += s[i].swiperSlideSize,
                        o += 1,
                        t > n && (e = !0))
                } else if ("current" === e)
                    for (let e = l + 1; e < s.length; e += 1)
                        (t ? r[e] + a[e] - r[l] < n : r[e] - r[l] < n) && (o += 1);
                else
                    for (let e = l - 1; e >= 0; e -= 1)
                        r[l] - r[e] < n && (o += 1);
                return o
            }
            update() {
                let e;
                let t = this;
                if (!t || t.destroyed)
                    return;
                let {snapGrid: i, params: s} = t;
                function r() {
                    let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(e),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                if (s.breakpoints && t.setBreakpoint(),
                [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                    e.complete && u(t, e)
                }
                ),
                t.updateSize(),
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                s.freeMode && s.freeMode.enabled && !s.cssMode)
                    r(),
                    s.autoHeight && t.updateAutoHeight();
                else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                        let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                        e = t.slideTo(i.length - 1, 0, !1, !0)
                    } else
                        e = t.slideTo(t.activeIndex, 0, !1, !0);
                    e || r()
                }
                s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
                t.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                let i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove("".concat(this.params.containerModifierClass).concat(i)),
                this.el.classList.add("".concat(this.params.containerModifierClass).concat(e)),
                this.emitContainerClasses(),
                this.params.direction = e,
                this.slides.forEach(t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }
                ),
                this.emit("changeDirection"),
                t && this.update()),
                this
            }
            changeLanguageDirection(e) {
                (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e,
                this.rtlTranslate = "horizontal" === this.params.direction && this.rtl,
                this.rtl ? (this.el.classList.add("".concat(this.params.containerModifierClass, "rtl")),
                this.el.dir = "rtl") : (this.el.classList.remove("".concat(this.params.containerModifierClass, "rtl")),
                this.el.dir = "ltr"),
                this.update())
            }
            mount(e) {
                let t = this;
                if (t.mounted)
                    return !0;
                let i = e || t.params.el;
                if ("string" == typeof i && (i = document.querySelector(i)),
                !i)
                    return !1;
                i.swiper = t,
                i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                let s = () => ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."))
                  , r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : (0,
                l.e)(i, s())[0];
                return !r && t.params.createElements && (r = (0,
                l.c)("div", t.params.wrapperClass),
                i.append(r),
                (0,
                l.e)(i, ".".concat(t.params.slideClass)).forEach(e => {
                    r.append(e)
                }
                )),
                Object.assign(t, {
                    el: i,
                    wrapperEl: r,
                    slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                    hostEl: t.isElement ? i.parentNode.host : i,
                    mounted: !0,
                    rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0,
                    l.o)(i, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0,
                    l.o)(i, "direction")),
                    wrongRTL: "-webkit-box" === (0,
                    l.o)(r, "display")
                }),
                !0
            }
            init(e) {
                let t = this;
                if (t.initialized || !1 === t.mount(e))
                    return t;
                t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                t.params.loop && t.loopCreate(),
                t.attachEvents();
                let i = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
                i.forEach(e => {
                    e.complete ? u(t, e) : e.addEventListener("load", e => {
                        u(t, e.target)
                    }
                    )
                }
                ),
                h(t),
                t.initialized = !0,
                h(t),
                t.emit("init"),
                t.emit("afterInit"),
                t
            }
            destroy(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                let i = this
                  , {params: s, el: r, wrapperEl: a, slides: n} = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
                i.initialized = !1,
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                t && (i.removeClasses(),
                r.removeAttribute("style"),
                a.removeAttribute("style"),
                n && n.length && n.forEach(e => {
                    e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index")
                }
                )),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(e => {
                    i.off(e)
                }
                ),
                !1 !== e && (i.el.swiper = null,
                (0,
                l.v)(i)),
                i.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                (0,
                l.u)(k, e)
            }
            static get extendedDefaults() {
                return k
            }
            static get defaults() {
                return C
            }
            static installModule(e) {
                O.prototype.__modules__ || (O.prototype.__modules__ = []);
                let t = O.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? e.forEach(e => O.installModule(e)) : O.installModule(e),
                O
            }
            constructor() {
                let e, t;
                for (var i = arguments.length, s = Array(i), r = 0; r < i; r++)
                    s[r] = arguments[r];
                1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e,t] = s,
                t || (t = {}),
                t = (0,
                l.u)({}, t),
                e && !t.el && (t.el = e);
                let c = (0,
                n.g)();
                if (t.el && "string" == typeof t.el && c.querySelectorAll(t.el).length > 1) {
                    let e = [];
                    return c.querySelectorAll(t.el).forEach(i => {
                        let s = (0,
                        l.u)({}, t, {
                            el: i
                        });
                        e.push(new O(s))
                    }
                    ),
                    e
                }
                let u = this;
                u.__swiper__ = !0,
                u.support = o(),
                u.device = d({
                    userAgent: t.userAgent
                }),
                u.browser = (a || (a = function() {
                    let e = (0,
                    n.a)()
                      , t = d()
                      , i = !1;
                    function s() {
                        let t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                    }
                    if (s()) {
                        let t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            let[e,s] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                            i = e < 16 || 16 === e && s < 2
                        }
                    }
                    let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                      , a = s()
                      , l = a || r && t.ios;
                    return {
                        isSafari: i || a,
                        needPerspectiveFix: i,
                        need3dFix: l,
                        isWebView: r
                    }
                }()),
                a),
                u.eventsListeners = {},
                u.eventsAnyListeners = [],
                u.modules = [...u.__modules__],
                t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
                let p = {};
                u.modules.forEach(e => {
                    var i;
                    e({
                        params: t,
                        swiper: u,
                        extendParams: (i = t,
                        function(e) {
                            void 0 === e && (e = {});
                            let t = Object.keys(e)[0]
                              , s = e[t];
                            if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                enabled: !0
                            }),
                            "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0),
                            ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0),
                            !(t in i && "enabled"in s))) {
                                (0,
                                l.u)(p, e);
                                return
                            }
                            "object" != typeof i[t] || "enabled"in i[t] || (i[t].enabled = !0),
                            i[t] || (i[t] = {
                                enabled: !1
                            }),
                            (0,
                            l.u)(p, e)
                        }
                        ),
                        on: u.on.bind(u),
                        once: u.once.bind(u),
                        off: u.off.bind(u),
                        emit: u.emit.bind(u)
                    })
                }
                );
                let h = (0,
                l.u)({}, C, p);
                return u.params = (0,
                l.u)({}, h, k, t),
                u.originalParams = (0,
                l.u)({}, u.params),
                u.passedParams = (0,
                l.u)({}, t),
                u.params && u.params.on && Object.keys(u.params.on).forEach(e => {
                    u.on(e, u.params.on[e])
                }
                ),
                u.params && u.params.onAny && u.onAny(u.params.onAny),
                Object.assign(u, {
                    enabled: u.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === u.params.direction,
                    isVertical: () => "vertical" === u.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return 8388608 * Math.trunc(this.translate / 8388608)
                    },
                    allowSlideNext: u.params.allowSlideNext,
                    allowSlidePrev: u.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: u.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: u.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                u.emit("_swiper"),
                u.params.init && u.init(),
                u
            }
        }
        Object.keys(P).forEach(e => {
            Object.keys(P[e]).forEach(t => {
                O.prototype[t] = P[e][t]
            }
            )
        }
        ),
        O.use([function(e) {
            let {swiper: t, on: i, emit: s} = e
              , r = (0,
            n.a)()
              , a = null
              , l = null
              , o = () => {
                t && !t.destroyed && t.initialized && (s("beforeResize"),
                s("resize"))
            }
              , d = () => {
                t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                    l = r.requestAnimationFrame( () => {
                        let {width: i, height: s} = t
                          , r = i
                          , a = s;
                        e.forEach(e => {
                            let {contentBoxSize: i, contentRect: s, target: n} = e;
                            n && n !== t.el || (r = s ? s.width : (i[0] || i).inlineSize,
                            a = s ? s.height : (i[0] || i).blockSize)
                        }
                        ),
                        (r !== i || a !== s) && o()
                    }
                    )
                }
                )).observe(t.el)
            }
              , c = () => {
                l && r.cancelAnimationFrame(l),
                a && a.unobserve && t.el && (a.unobserve(t.el),
                a = null)
            }
              , u = () => {
                t && !t.destroyed && t.initialized && s("orientationchange")
            }
            ;
            i("init", () => {
                if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                    d();
                    return
                }
                r.addEventListener("resize", o),
                r.addEventListener("orientationchange", u)
            }
            ),
            i("destroy", () => {
                c(),
                r.removeEventListener("resize", o),
                r.removeEventListener("orientationchange", u)
            }
            )
        }
        , function(e) {
            let {swiper: t, extendParams: i, on: s, emit: r} = e
              , a = []
              , o = (0,
            n.a)()
              , d = function(e, i) {
                void 0 === i && (i = {});
                let s = new (o.MutationObserver || o.WebkitMutationObserver)(e => {
                    if (t.__preventObserver__)
                        return;
                    if (1 === e.length) {
                        r("observerUpdate", e[0]);
                        return
                    }
                    let i = function() {
                        r("observerUpdate", e[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(i) : o.setTimeout(i, 0)
                }
                );
                s.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }),
                a.push(s)
            };
            i({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }),
            s("init", () => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        let e = (0,
                        l.a)(t.hostEl);
                        for (let t = 0; t < e.length; t += 1)
                            d(e[t])
                    }
                    d(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }),
                    d(t.wrapperEl, {
                        attributes: !1
                    })
                }
            }
            ),
            s("destroy", () => {
                a.forEach(e => {
                    e.disconnect()
                }
                ),
                a.splice(0, a.length)
            }
            )
        }
        ])
    }
}]);
