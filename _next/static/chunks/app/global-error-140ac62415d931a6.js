!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "1d3d9f7a-d5da-41ec-82dc-316fbee9eb93",
        e._sentryDebugIdIdentifier = "sentry-dbid-1d3d9f7a-d5da-41ec-82dc-316fbee9eb93")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[470], {
    7435: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 3874))
    },
    5327: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let r = n(6231)
          , o = n(7651)
          , l = r._(n(5874))
          , d = r._(n(5793))
          , i = {
            400: "Bad Request",
            404: "This page could not be found",
            405: "Method Not Allowed",
            500: "Internal Server Error"
        };
        function s(e) {
            let {res: t, err: n} = e;
            return {
                statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
            }
        }
        let a = {
            error: {
                fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
                height: "100vh",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            desc: {
                lineHeight: "48px"
            },
            h1: {
                display: "inline-block",
                margin: "0 20px 0 0",
                paddingRight: 23,
                fontSize: 24,
                fontWeight: 500,
                verticalAlign: "top"
            },
            h2: {
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "28px"
            },
            wrap: {
                display: "inline-block"
            }
        };
        class u extends l.default.Component {
            render() {
                let {statusCode: e, withDarkMode: t=!0} = this.props
                  , n = this.props.title || i[e] || "An unexpected error has occurred";
                return (0,
                o.jsxs)("div", {
                    style: a.error,
                    children: [(0,
                    o.jsx)(d.default, {
                        children: (0,
                        o.jsx)("title", {
                            children: e ? e + ": " + n : "Application error: a client-side exception has occurred"
                        })
                    }), (0,
                    o.jsxs)("div", {
                        style: a.desc,
                        children: [(0,
                        o.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (t ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
                            }
                        }), e ? (0,
                        o.jsx)("h1", {
                            className: "next-error-h1",
                            style: a.h1,
                            children: e
                        }) : null, (0,
                        o.jsx)("div", {
                            style: a.wrap,
                            children: (0,
                            o.jsxs)("h2", {
                                style: a.h2,
                                children: [this.props.title || e ? n : (0,
                                o.jsx)(o.Fragment, {
                                    children: "Application error: a client-side exception has occurred (see the browser console for more information)"
                                }), "."]
                            })
                        })]
                    })]
                })
            }
        }
        u.displayName = "ErrorPage",
        u.getInitialProps = s,
        u.origGetInitialProps = s,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8569: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = n(6231)._(n(5874)).default.createContext({})
    },
    4472: function(e, t) {
        "use strict";
        function n(e) {
            let {ampFirst: t=!1, hybrid: n=!1, hasQuery: r=!1} = void 0 === e ? {} : e;
            return t || n && r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    5793: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            defaultHead: function() {
                return c
            },
            default: function() {
                return y
            }
        });
        let r = n(6231)
          , o = n(9706)
          , l = n(7651)
          , d = o._(n(5874))
          , i = r._(n(110))
          , s = n(8569)
          , a = n(1852)
          , u = n(4472);
        function c(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            l.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            l.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function f(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === d.default.Fragment ? e.concat(d.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        n(2637);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function h(e, t) {
            let {inAmpMode: n} = t;
            return e.reduce(f, []).reverse().concat(c(n).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return o => {
                    let l = !0
                      , d = !1;
                    if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                        d = !0;
                        let t = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(t) ? l = !1 : e.add(t)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? l = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (let e = 0, t = p.length; e < t; e++) {
                            let t = p[e];
                            if (o.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    n.has(t) ? l = !1 : n.add(t);
                                else {
                                    let e = o.props[t]
                                      , n = r[t] || new Set;
                                    ("name" !== t || !d) && n.has(e) ? l = !1 : (n.add(e),
                                    r[t] = n)
                                }
                            }
                        }
                    }
                    return l
                }
            }()).reverse().map( (e, t) => {
                let r = e.key || t;
                if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    d.default.cloneElement(e, t)
                }
                return d.default.cloneElement(e, {
                    key: r
                })
            }
            )
        }
        let y = function(e) {
            let {children: t} = e
              , n = (0,
            d.useContext)(s.AmpStateContext)
              , r = (0,
            d.useContext)(a.HeadManagerContext);
            return (0,
            l.jsx)(i.default, {
                reduceComponentsToState: h,
                headManager: r,
                inAmpMode: (0,
                u.isInAmpMode)(n),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    110: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return d
            }
        });
        let r = n(5874)
          , o = r.useLayoutEffect
          , l = r.useEffect;
        function d(e) {
            let {headManager: t, reduceComponentsToState: n} = e;
            function d() {
                if (t && t.mountedInstances) {
                    let o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(o, e))
                }
            }
            return o( () => {
                var n;
                return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                () => {
                    var n;
                    null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                }
            }
            ),
            o( () => (t && (t._pendingUpdate = d),
            () => {
                t && (t._pendingUpdate = d)
            }
            )),
            l( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    5913: function(e, t, n) {
        "use strict";
        e.exports = n(5327)
    },
    3874: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return s
            }
        });
        var r = n(7651)
          , o = n(4447)
          , l = n(5913)
          , d = n.n(l)
          , i = n(5874);
        function s(e) {
            let {error: t} = e;
            return (0,
            i.useEffect)( () => {
                o.Tb(t)
            }
            , [t]),
            (0,
            r.jsx)("html", {
                "data-sentry-component": "GlobalError",
                "data-sentry-source-file": "global-error.tsx",
                children: (0,
                r.jsx)("body", {
                    children: (0,
                    r.jsx)(d(), {
                        statusCode: 0,
                        "data-sentry-element": "NextError",
                        "data-sentry-source-file": "global-error.tsx"
                    })
                })
            })
        }
    }
}, function(e) {
    e.O(0, [991, 971, 779, 744], function() {
        return e(e.s = 7435)
    }),
    _N_E = e.O()
}
]);
