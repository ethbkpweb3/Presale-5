!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "08810f89-9ece-4dbb-b51c-51f3be036b56",
        e._sentryDebugIdIdentifier = "sentry-dbid-08810f89-9ece-4dbb-b51c-51f3be036b56")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[930], {
    7960: function(e, t, n) {
        n.d(t, {
            default: function() {
                return i.a
            }
        });
        var r = n(8811)
          , i = n.n(r)
    },
    6163: function(e, t, n) {
        n.d(t, {
            default: function() {
                return i.a
            }
        });
        var r = n(679)
          , i = n.n(r)
    },
    413: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return y
            }
        });
        let r = n(6231)
          , i = n(9706)
          , o = n(7651)
          , l = i._(n(5874))
          , a = r._(n(8352))
          , u = r._(n(5793))
          , d = n(7929)
          , s = n(7727)
          , f = n(7327);
        n(2637);
        let c = n(6304)
          , p = r._(n(9950))
          , g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };
        function m(e, t, n, r, i, o) {
            let l = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && i(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , i = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => i,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                i = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }
            ))
        }
        function b(e) {
            let[t,n] = l.version.split(".", 2)
              , r = parseInt(t, 10)
              , i = parseInt(n, 10);
            return r > 18 || 18 === r && i >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        let h = (0,
        l.forwardRef)( (e, t) => {
            let {src: n, srcSet: r, sizes: i, height: a, width: u, decoding: d, className: s, style: f, fetchPriority: c, placeholder: p, loading: g, unoptimized: h, fill: _, onLoadRef: y, onLoadingCompleteRef: E, setBlurComplete: v, setShowAltText: I, onLoad: S, onError: T, ...j} = e;
            return (0,
            o.jsx)("img", {
                ...j,
                ...b(c),
                loading: g,
                width: u,
                height: a,
                decoding: d,
                "data-nimg": _ ? "fill" : "1",
                className: s,
                style: f,
                sizes: i,
                srcSet: r,
                src: n,
                ref: (0,
                l.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (T && (e.src = e.src),
                    e.complete && m(e, p, y, E, v, h))
                }
                , [n, p, y, E, v, T, h, t]),
                onLoad: e => {
                    m(e.currentTarget, p, y, E, v, h)
                }
                ,
                onError: e => {
                    I(!0),
                    "empty" !== p && v(!0),
                    T && T(e)
                }
            })
        }
        );
        function _(e) {
            let {isAppRouter: t, imgAttributes: n} = e
              , r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy,
                ...b(n.fetchPriority)
            };
            return t && a.default.preload ? (a.default.preload(n.src, r),
            null) : (0,
            o.jsx)(u.default, {
                children: (0,
                o.jsx)("link", {
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }, "__nimg-" + n.src + n.srcSet + n.sizes)
            })
        }
        let y = (0,
        l.forwardRef)( (e, t) => {
            let n = (0,
            l.useContext)(c.RouterContext)
              , r = (0,
            l.useContext)(f.ImageConfigContext)
              , i = (0,
            l.useMemo)( () => {
                let e = g || r || s.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , n = e.deviceSizes.sort( (e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: n
                }
            }
            , [r])
              , {onLoad: a, onLoadingComplete: u} = e
              , m = (0,
            l.useRef)(a);
            (0,
            l.useEffect)( () => {
                m.current = a
            }
            , [a]);
            let b = (0,
            l.useRef)(u);
            (0,
            l.useEffect)( () => {
                b.current = u
            }
            , [u]);
            let[y,E] = (0,
            l.useState)(!1)
              , [v,I] = (0,
            l.useState)(!1)
              , {props: S, meta: T} = (0,
            d.getImgProps)(e, {
                defaultLoader: p.default,
                imgConf: i,
                blurComplete: y,
                showAltText: v
            });
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(h, {
                    ...S,
                    unoptimized: T.unoptimized,
                    placeholder: T.placeholder,
                    fill: T.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: b,
                    setBlurComplete: E,
                    setShowAltText: I,
                    ref: t
                }), T.priority ? (0,
                o.jsx)(_, {
                    isAppRouter: !n,
                    imgAttributes: S
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    8569: function(e, t, n) {
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
    8811: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(6231);
        n(7651),
        n(5874);
        let i = r._(n(7075));
        function o(e, t) {
            let n = {
                loading: e => {
                    let {error: t, isLoading: n, pastDelay: r} = e;
                    return null
                }
            };
            return "function" == typeof e && (n.loader = e),
            (0,
            i.default)({
                ...n,
                ...t
            })
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    7929: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        n(2637);
        let r = n(1511)
          , i = n(7727);
        function o(e) {
            return void 0 !== e.default
        }
        function l(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function a(e, t) {
            var n;
            let a, u, d, {src: s, sizes: f, unoptimized: c=!1, priority: p=!1, loading: g, className: m, quality: b, width: h, height: _, fill: y=!1, style: E, onLoad: v, onLoadingComplete: I, placeholder: S="empty", blurDataURL: T, fetchPriority: j, layout: w, objectFit: x, objectPosition: C, lazyBoundary: P, lazyRoot: O, ...A} = e, {imgConf: M, showAltText: N, blurComplete: D, defaultLoader: z} = t, R = M || i.imageConfigDefault;
            if ("allSizes"in R)
                a = R;
            else {
                let e = [...R.deviceSizes, ...R.imageSizes].sort( (e, t) => e - t)
                  , t = R.deviceSizes.sort( (e, t) => e - t);
                a = {
                    ...R,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            let k = A.loader || z;
            delete A.loader,
            delete A.srcSet;
            let B = "__next_img_default"in k;
            if (B) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + s + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = k;
                k = t => {
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (w) {
                "fill" === w && (y = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[w];
                e && (E = {
                    ...E,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[w];
                t && !f && (f = t)
            }
            let V = ""
              , L = l(h)
              , U = l(_);
            if ("object" == typeof (n = s) && (o(n) || void 0 !== n.src)) {
                let e = o(s) ? s.default : s;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (u = e.blurWidth,
                d = e.blurHeight,
                T = T || e.blurDataURL,
                V = e.src,
                !y) {
                    if (L || U) {
                        if (L && !U) {
                            let t = L / e.width;
                            U = Math.round(e.height * t)
                        } else if (!L && U) {
                            let t = U / e.height;
                            L = Math.round(e.width * t)
                        }
                    } else
                        L = e.width,
                        U = e.height
                }
            }
            let F = !p && ("lazy" === g || void 0 === g);
            (!(s = "string" == typeof s ? s : V) || s.startsWith("data:") || s.startsWith("blob:")) && (c = !0,
            F = !1),
            a.unoptimized && (c = !0),
            B && s.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
            p && (j = "high");
            let G = l(b)
              , W = Object.assign(y ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: x,
                objectPosition: C
            } : {}, N ? {} : {
                color: "transparent"
            }, E)
              , H = D || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            r.getImageBlurSvg)({
                widthInt: L,
                heightInt: U,
                blurWidth: u,
                blurHeight: d,
                blurDataURL: T || "",
                objectFit: W.objectFit
            }) + '")' : 'url("' + S + '")'
              , Y = H ? {
                backgroundSize: W.objectFit || "cover",
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H
            } : {}
              , q = function(e) {
                let {config: t, src: n, unoptimized: r, width: i, quality: o, sizes: l, loader: a} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: u, kind: d} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: i} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: i.filter(t => t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(t, i, l)
                  , s = u.length - 1;
                return {
                    sizes: l || "w" !== d ? l : "100vw",
                    srcSet: u.map( (e, r) => a({
                        config: t,
                        src: n,
                        quality: o,
                        width: e
                    }) + " " + ("w" === d ? e : r + 1) + d).join(", "),
                    src: a({
                        config: t,
                        src: n,
                        quality: o,
                        width: u[s]
                    })
                }
            }({
                config: a,
                src: s,
                unoptimized: c,
                width: L,
                quality: G,
                sizes: f,
                loader: k
            });
            return {
                props: {
                    ...A,
                    loading: F ? "lazy" : g,
                    fetchPriority: j,
                    width: L,
                    height: U,
                    decoding: "async",
                    className: m,
                    style: {
                        ...W,
                        ...Y
                    },
                    sizes: q.sizes,
                    srcSet: q.srcSet,
                    src: q.src
                },
                meta: {
                    unoptimized: c,
                    priority: p,
                    placeholder: S,
                    fill: y
                }
            }
        }
    },
    5793: function(e, t, n) {
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
                return f
            },
            default: function() {
                return m
            }
        });
        let r = n(6231)
          , i = n(9706)
          , o = n(7651)
          , l = i._(n(5874))
          , a = r._(n(110))
          , u = n(8569)
          , d = n(1852)
          , s = n(4472);
        function f(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function c(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        n(2637);
        let p = ["name", "httpEquiv", "charSet", "itemProp"];
        function g(e, t) {
            let {inAmpMode: n} = t;
            return e.reduce(c, []).reverse().concat(f(n).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return i => {
                    let o = !0
                      , l = !1;
                    if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                        l = !0;
                        let t = i.key.slice(i.key.indexOf("$") + 1);
                        e.has(t) ? o = !1 : e.add(t)
                    }
                    switch (i.type) {
                    case "title":
                    case "base":
                        t.has(i.type) ? o = !1 : t.add(i.type);
                        break;
                    case "meta":
                        for (let e = 0, t = p.length; e < t; e++) {
                            let t = p[e];
                            if (i.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    n.has(t) ? o = !1 : n.add(t);
                                else {
                                    let e = i.props[t]
                                      , n = r[t] || new Set;
                                    ("name" !== t || !l) && n.has(e) ? o = !1 : (n.add(e),
                                    r[t] = n)
                                }
                            }
                        }
                    }
                    return o
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
                    l.default.cloneElement(e, t)
                }
                return l.default.cloneElement(e, {
                    key: r
                })
            }
            )
        }
        let m = function(e) {
            let {children: t} = e
              , n = (0,
            l.useContext)(u.AmpStateContext)
              , r = (0,
            l.useContext)(d.HeadManagerContext);
            return (0,
            o.jsx)(a.default, {
                reduceComponentsToState: g,
                headManager: r,
                inAmpMode: (0,
                s.isInAmpMode)(n),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1511: function(e, t) {
        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: i, blurDataURL: o, objectFit: l} = e
              , a = r ? 40 * r : t
              , u = i ? 40 * i : n
              , d = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + d + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (d ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    7327: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(6231)._(n(5874))
          , i = n(7727)
          , o = r.default.createContext(i.imageConfigDefault)
    },
    7727: function(e, t) {
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
            VALID_LOADERS: function() {
                return n
            },
            imageConfigDefault: function() {
                return r
            }
        });
        let n = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , r = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    679: function(e, t, n) {
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
            getImageProps: function() {
                return a
            },
            default: function() {
                return u
            }
        });
        let r = n(6231)
          , i = n(7929)
          , o = n(413)
          , l = r._(n(9950))
          , a = e => {
            let {props: t} = (0,
            i.getImgProps)(e, {
                defaultLoader: l.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
          , u = o.Image
    },
    9950: function(e, t) {
        function n(e) {
            let {config: t, src: n, width: r, quality: i} = e;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        let r = n
    },
    4524: function(e, t, n) {
        function r(e) {
            let {reason: t, children: n} = e;
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(6501)
    },
    7075: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let r = n(7651)
          , i = n(5874)
          , o = n(4524);
        function l(e) {
            var t;
            return {
                default: null != (t = null == e ? void 0 : e.default) ? t : e
            }
        }
        let a = {
            loader: () => Promise.resolve(l( () => null)),
            loading: null,
            ssr: !0
        }
          , u = function(e) {
            let t = {
                ...a,
                ...e
            }
              , n = (0,
            i.lazy)( () => t.loader().then(l))
              , u = t.loading;
            function d(e) {
                let l = u ? (0,
                r.jsx)(u, {
                    isLoading: !0,
                    pastDelay: !0,
                    error: null
                }) : null
                  , a = t.ssr ? (0,
                r.jsx)(n, {
                    ...e
                }) : (0,
                r.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0,
                    r.jsx)(n, {
                        ...e
                    })
                });
                return (0,
                r.jsx)(i.Suspense, {
                    fallback: l,
                    children: a
                })
            }
            return d.displayName = "LoadableComponent",
            d
        }
    },
    110: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(5874)
          , i = r.useLayoutEffect
          , o = r.useEffect;
        function l(e) {
            let {headManager: t, reduceComponentsToState: n} = e;
            function l() {
                if (t && t.mountedInstances) {
                    let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(i, e))
                }
            }
            return i( () => {
                var n;
                return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                () => {
                    var n;
                    null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                }
            }
            ),
            i( () => (t && (t._pendingUpdate = l),
            () => {
                t && (t._pendingUpdate = l)
            }
            )),
            o( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    3423: function(e, t, n) {
        n.d(t, {
            W: function() {
                return r
            }
        });
        let r = {

        }
    }
}]);
