!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "a8f262ae-38eb-4930-96f2-79a87e84f2e8",
        e._sentryDebugIdIdentifier = "sentry-dbid-a8f262ae-38eb-4930-96f2-79a87e84f2e8")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[609], {
    677: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return o.a
            }
        });
        var r = n(8326)
          , o = n.n(r)
          , l = {};
        for (var u in r)
            "default" !== u && (l[u] = (function(e) {
                return r[e]
            }
            ).bind(0, u));
        n.d(t, l)
    },
    4549: function(e, t, n) {
        function r(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(3997),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8326: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return C
            }
        });
        let r = n(6231)
          , o = n(7651)
          , l = r._(n(5874))
          , u = n(9121)
          , f = n(8664)
          , a = n(8130)
          , i = n(6681)
          , c = n(9524)
          , s = n(6304)
          , d = n(6313)
          , p = n(4993)
          , b = n(4549)
          , y = n(9872)
          , h = n(3814)
          , v = new Set;
        function g(e, t, n, r, o, l) {
            if (l || (0,
            f.isLocalURL)(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0);
                    if (v.has(o))
                        return;
                    v.add(o)
                }
                Promise.resolve(l ? e.prefetch(t, o) : e.prefetch(t, n, r)).catch(e => {}
                )
            }
        }
        function _(e) {
            return "string" == typeof e ? e : (0,
            a.formatUrl)(e)
        }
        let C = l.default.forwardRef(function(e, t) {
            let n, r;
            let {href: a, as: v, children: C, prefetch: j=null, passHref: k, replace: m, shallow: M, scroll: P, locale: O, onClick: I, onMouseEnter: w, onTouchStart: x, legacyBehavior: E=!1, ...L} = e;
            n = C,
            E && ("string" == typeof n || "number" == typeof n) && (n = (0,
            o.jsx)("a", {
                children: n
            }));
            let R = l.default.useContext(s.RouterContext)
              , D = l.default.useContext(d.AppRouterContext)
              , T = null != R ? R : D
              , S = !R
              , U = !1 !== j
              , K = null === j ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL
              , {href: A, as: N} = l.default.useMemo( () => {
                if (!R) {
                    let e = _(a);
                    return {
                        href: e,
                        as: v ? _(v) : e
                    }
                }
                let[e,t] = (0,
                u.resolveHref)(R, a, !0);
                return {
                    href: e,
                    as: v ? (0,
                    u.resolveHref)(R, v) : t || e
                }
            }
            , [R, a, v])
              , H = l.default.useRef(A)
              , q = l.default.useRef(N);
            E && (r = l.default.Children.only(n));
            let z = E ? r && "object" == typeof r && r.ref : t
              , [B,F,G] = (0,
            p.useIntersection)({
                rootMargin: "200px"
            })
              , J = l.default.useCallback(e => {
                (q.current !== N || H.current !== A) && (G(),
                q.current = N,
                H.current = A),
                B(e),
                z && ("function" == typeof z ? z(e) : "object" == typeof z && (z.current = e))
            }
            , [N, z, A, G, B]);
            l.default.useEffect( () => {
                T && F && U && g(T, A, N, {
                    locale: O
                }, {
                    kind: K
                }, S)
            }
            , [N, A, F, O, U, null == R ? void 0 : R.locale, T, S, K]);
            let Q = {
                ref: J,
                onClick(e) {
                    E || "function" != typeof I || I(e),
                    E && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    T && !e.defaultPrevented && function(e, t, n, r, o, u, a, i, c) {
                        let {nodeName: s} = e.currentTarget;
                        if ("A" === s.toUpperCase() && (function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        f.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let d = () => {
                            let e = null == a || a;
                            "beforePopState"in t ? t[o ? "replace" : "push"](n, r, {
                                shallow: u,
                                locale: i,
                                scroll: e
                            }) : t[o ? "replace" : "push"](r || n, {
                                scroll: e
                            })
                        }
                        ;
                        c ? l.default.startTransition(d) : d()
                    }(e, T, A, N, m, M, P, O, S)
                },
                onMouseEnter(e) {
                    E || "function" != typeof w || w(e),
                    E && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    T && (U || !S) && g(T, A, N, {
                        locale: O,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: K
                    }, S)
                },
                onTouchStart(e) {
                    E || "function" != typeof x || x(e),
                    E && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    T && (U || !S) && g(T, A, N, {
                        locale: O,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: K
                    }, S)
                }
            };
            if ((0,
            i.isAbsoluteUrl)(N))
                Q.href = N;
            else if (!E || k || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== O ? O : null == R ? void 0 : R.locale
                  , t = (null == R ? void 0 : R.isLocaleDomain) && (0,
                b.getDomainLocale)(N, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                Q.href = t || (0,
                y.addBasePath)((0,
                c.addLocale)(N, e, null == R ? void 0 : R.defaultLocale))
            }
            return E ? l.default.cloneElement(r, Q) : (0,
            o.jsx)("a", {
                ...L,
                ...Q,
                children: n
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    4993: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let r = n(5874)
          , o = n(2389)
          , l = "function" == typeof IntersectionObserver
          , u = new Map
          , f = [];
        function a(e) {
            let {rootRef: t, rootMargin: n, disabled: a} = e
              , i = a || !l
              , [c,s] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , p = (0,
            r.useCallback)(e => {
                d.current = e
            }
            , []);
            return (0,
            r.useEffect)( () => {
                if (l) {
                    if (i || c)
                        return;
                    let e = d.current;
                    if (e && e.tagName)
                        return function(e, t, n) {
                            let {id: r, observer: o, elements: l} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = u.get(r)))
                                    return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target)
                                              , n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        }
                                        )
                                    }
                                    ,e),
                                    elements: o
                                },
                                f.push(n),
                                u.set(n, t),
                                t
                            }(n);
                            return l.set(e, t),
                            o.observe(e),
                            function() {
                                if (l.delete(e),
                                o.unobserve(e),
                                0 === l.size) {
                                    o.disconnect(),
                                    u.delete(r);
                                    let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                    e > -1 && f.splice(e, 1)
                                }
                            }
                        }(e, e => e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                } else if (!c) {
                    let e = (0,
                    o.requestIdleCallback)( () => s(!0));
                    return () => (0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [i, n, t, c, d.current]),
            [p, c, (0,
            r.useCallback)( () => {
                s(!1)
            }
            , [])]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8957: function(e, t, n) {
        var r = n(5874).createContext(void 0);
        t.IntlContext = r
    }
}]);
