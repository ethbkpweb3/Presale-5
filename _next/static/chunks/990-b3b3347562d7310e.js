!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "a83e0aa6-0494-43eb-8998-976fa1311c4f",
        e._sentryDebugIdIdentifier = "sentry-dbid-a83e0aa6-0494-43eb-8998-976fa1311c4f")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[990], {
    8610: function(e, t, n) {
        n.r(t),
        n.d(t, {
            Balance: function() {
                return p
            },
            BlastFormRouter: function() {
                return d
            },
            ConnectButton: function() {
                return c
            },
            DisconnectButton: function() {
                return f
            },
            FormEnvUpdate: function() {
                return r
            },
            NetworkSwitcher: function() {
                return m
            },
            PresaleForm: function() {
                return x
            },
            ReferralBlock: function() {
                return u
            },
            UpdateFormLang: function() {
                return i
            }
        });
        var s = n(7960)
          , a = n(3423)
          , l = n(5874)
          , o = n(6346);
        let r = e => {
            let {children: t} = e
              , [n,s] = (0,
            l.useState)(!1)
              , o = () => {
                var e, t, n, l, o, r, i, d, c, x, m, p, f, u, b, h, k, y, T;
                e = "https://presale-api.cybro.io",
                a.W.VITE_API_URL = void 0 !== e ? e : "",
                t = "0x916Efc697ccdE234a381BaCd1b28c5ceed638197",
                a.W.VITE_BNB_MAINNET = void 0 !== t ? t : "",
                n = "0x674bb682B15B847c42E0d8c7b2791D5Ca64C8287",
                a.W.VITE_BNB_TESTNET = void 0 !== n ? n : "",
                l = "0x0215C6869097bE1f814d7DeCaFD3201E147Bc3D4",
                a.W.VITE_ETHEREUM_MAINNET = void 0 !== l ? l : "",
                o = "0x674bb682B15B847c42E0d8c7b2791D5Ca64C8287",
                a.W.VITE_ETHEREUM_TESTNET = void 0 !== o ? o : "",
                r = "0x0215C6869097bE1f814d7DeCaFD3201E147Bc3D4",
                a.W.VITE_POLYGON_MAINNET = void 0 !== r ? r : "",
                i = "0x674bb682B15B847c42E0d8c7b2791D5Ca64C8287",
                a.W.VITE_POLYGON_TESTNET = void 0 !== i ? i : "",
                d = "0x674bb682B15B847c42E0d8c7b2791D5Ca64C8287",
                a.W.VITE_BLAST_TESTNET = void 0 !== d ? d : "",
                c = "0xf2B8d3E81B44E81162dC7FC1484BD42A9A8C6b3F",
                a.W.VITE_BLAST_MAINNET = void 0 !== c ? c : "",
                x = "mainnet",
                a.W.VITE_NETWORK_TYPE = void 0 !== x ? x : "",
                m = "8d631da983562afb7f952516045bd2ae",
                a.W.VITE_WALLET_CONNECT_PROJECT_ID = void 0 !== m ? m : "",
                p = "Cybro",
                a.W.VITE_WAGMI_METADATA_NAME = void 0 !== p ? p : "",
                f = "Cybro",
                a.W.VITE_WAGMI_METADATA_DESCRIPTION = void 0 !== f ? f : "",
                u = "https://cybro.io",
                a.W.VITE_WAGMI_METADATA_URL = void 0 !== u ? u : "",
                b = '["https://avatars.githubusercontent.com/u/37784886"]',
                a.W.VITE_WAGMI_METADATA_ICONS = void 0 !== b ? b : "",
                h = "eb318fa345644b70a09029b14b133740d1cb7d4c1b61085933e9e6de447c83f7",
                a.W.VITE_ANKR_ID = void 0 !== h ? h : "",
                a.W.VITE_CURRENT_STAGE = null !== (k = Number("1")) && void 0 !== k ? k : "",
                y = "TCCAVTZD",
                a.W.VITE_FATHOM_SITE_ID = void 0 !== y ? y : "",
                T = "c2981df2111f2cc9046befb2b336602b",
                a.W.VITE_MIXPANEL_ID = void 0 !== T ? T : "",
                s(!0)
            }
            ;
            return ((0,
            l.useEffect)( () => {
                o()
            }
            , []),
            n) ? t : null
        }
          , i = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.UpdateFormLang), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1
        })
          , d = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.BlastFormRouter), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1
        })
          , c = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.ConnectButton), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1
        })
          , x = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.PresaleForm), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1,
            loading: o.Z
        })
          , m = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.NetworkSwitcher), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1,
            loading: o.Z
        })
          , p = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.Balance), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1
        })
          , f = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.DisconnectButton), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1
        })
          , u = (0,
        s.default)( () => Promise.all([n.e(290), n.e(609), n.e(673)]).then(n.bind(n, 3181)).then(e => e.ReferralBlock), {
            loadableGenerated: {
                webpack: () => [3181]
            },
            ssr: !1
        })
    },
    6346: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var s = n(7651)
          , a = n(6163)
          , l = () => (0,
        s.jsx)("span", {
            className: "w-24 h-3 inline-block bg-white opacity-30 rounded-2xl mx-2",
            "data-sentry-component": "SkeletonText",
            "data-sentry-source-file": "SkeletonText.tsx"
        })
          , o = n(2072)
          , r = () => (0,
        s.jsxs)("div", {
            className: "",
            "data-sentry-component": "ClientFormSkeleton",
            "data-sentry-source-file": "ClientFormSkeleton.tsx",
            children: [(0,
            s.jsx)("h2", {
                className: "text-2xl font-bold mb-5 uppercase sm:text-xl",
                children: "Buy CYBRO token"
            }), (0,
            s.jsxs)("div", {
                className: "bg-baseBg rounded-2xl p-6 sm:p-0 sm:bg-black",
                children: [(0,
                s.jsx)("h4", {
                    className: "opacity-70 text-sm font-semibold mb-2 font-poppins sm:text-[12px]",
                    children: "Total USD raised:"
                }), (0,
                s.jsxs)("div", {
                    className: "flex gap-2 items-end flex-wrap",
                    children: [(0,
                    s.jsxs)("h3", {
                        className: " text-accent font-bold text-[28px] leading-[32px] sm:text-[24px] sm:leading-[28px]",
                        children: ["$", (0,
                        s.jsx)(l, {
                            "data-sentry-element": "SkeletonText",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        })]
                    }), (0,
                    s.jsxs)("p", {
                        className: "text-base text-text-secondary font-thin sm:text-[14px]",
                        children: ["/ $", (0,
                        s.jsx)(l, {
                            "data-sentry-element": "SkeletonText",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        })]
                    })]
                }), (0,
                s.jsxs)("p", {
                    className: "text-text-tertiary opacity-60 mt-4 mb-6 font-poppins text-sm sm:text-[12px]",
                    children: [(0,
                    s.jsx)(l, {
                        "data-sentry-element": "SkeletonText",
                        "data-sentry-source-file": "ClientFormSkeleton.tsx"
                    }), " of ", (0,
                    s.jsx)(l, {
                        "data-sentry-element": "SkeletonText",
                        "data-sentry-source-file": "ClientFormSkeleton.tsx"
                    }), " tokens"]
                }), (0,
                s.jsx)("div", {}), (0,
                s.jsxs)("div", {
                    className: "flex justify-between text-[13px] text-white mb-3 sm:text-[11px] flex-wrap gap-2",
                    children: [(0,
                    s.jsxs)("p", {
                        className: "upprecase font-poppins",
                        children: ["Stage ", (0,
                        s.jsx)(l, {
                            "data-sentry-element": "SkeletonText",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        }), " / ", (0,
                        s.jsx)(l, {
                            "data-sentry-element": "SkeletonText",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "flex gap-2",
                        children: (0,
                        s.jsxs)("p", {
                            className: "font-poppins",
                            children: ["$", (0,
                            s.jsx)(l, {
                                "data-sentry-element": "SkeletonText",
                                "data-sentry-source-file": "ClientFormSkeleton.tsx"
                            }), " / $", (0,
                            s.jsx)(l, {
                                "data-sentry-element": "SkeletonText",
                                "data-sentry-source-file": "ClientFormSkeleton.tsx"
                            })]
                        })
                    })]
                })]
            }), (0,
            s.jsx)("div", {
                className: "mt-5",
                children: (0,
                s.jsxs)("div", {
                    children: [(0,
                    s.jsx)("p", {
                        className: "text-[13px] opacity-50 font-poppins",
                        children: "You have:"
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex items-end gap-2 mt-3",
                        children: [(0,
                        s.jsx)(a.default, {
                            src: o.Z,
                            alt: "cybro",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        }), (0,
                        s.jsx)("h3", {
                            className: "text-[22px] text-white",
                            children: (0,
                            s.jsx)(l, {
                                "data-sentry-element": "SkeletonText",
                                "data-sentry-source-file": "ClientFormSkeleton.tsx"
                            })
                        }), (0,
                        s.jsx)("p", {
                            className: "text-[14px] opacity-40 ",
                            children: (0,
                            s.jsx)(l, {
                                "data-sentry-element": "SkeletonText",
                                "data-sentry-source-file": "ClientFormSkeleton.tsx"
                            })
                        })]
                    })]
                })
            }), (0,
            s.jsx)("div", {
                className: "border border-[#3A3B45] pr-[0.24rem] rounded-[calc(0.87rem)] mt-5",
                children: (0,
                s.jsxs)("button", {
                    className: "cursor-pointer p-[10px] rounded-xl bg-[#24252E] m-[0.12rem] flex w-full text-white justify-between items-center",
                    children: [(0,
                    s.jsx)("div", {
                        className: "flex gap-4 items-center",
                        children: (0,
                        s.jsx)(a.default, {
                            src: o.Z,
                            alt: "cybro",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        })
                    }), (0,
                    s.jsx)("svg", {
                        className: "w-4 h-4 inline-block ml-1",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "data-sentry-element": "svg",
                        "data-sentry-source-file": "ClientFormSkeleton.tsx",
                        children: (0,
                        s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "3",
                            d: "M9 5l7 7-7 7",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        })
                    })]
                })
            }), (0,
            s.jsxs)("div", {
                className: "flex flex-col gap-[10px] mt-[20px]",
                children: [(0,
                s.jsxs)("div", {
                    className: "grid grid-cols-[minmax(0,_1.5fr),minmax(0,_1fr)] opacity-50 text-xs sm:hidden",
                    children: [(0,
                    s.jsx)("div", {
                        className: "font-poppins",
                        children: "You pay:"
                    }), (0,
                    s.jsx)("div", {
                        className: "font-poppins",
                        children: "You Receive:"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "grid grid-cols-[minmax(0,_1.5fr),minmax(0,_1fr)] border border-[#3A3B45] rounded-[1.25rem] items-center relative group sm:grid-cols-1",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex gap-3 items-center border-r border-[#3A3B45] p-1 pr-0 sm:border-r-0 sm:border-b sm:flex-row-reverse sm:pl-5",
                        children: [(0,
                        s.jsxs)("button", {
                            className: "bg-[#24252E] rounded-2xl p-3 flex items-center gap-1 sm:mr-1",
                            children: [(0,
                            s.jsx)(a.default, {
                                src: o.Z,
                                alt: "cybro",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "ClientFormSkeleton.tsx"
                            }), (0,
                            s.jsx)("svg", {
                                className: "w-4 h-4 inline-block ml-1",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                "data-sentry-element": "svg",
                                "data-sentry-source-file": "ClientFormSkeleton.tsx",
                                children: (0,
                                s.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "3",
                                    d: "M9 5l7 7-7 7",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "ClientFormSkeleton.tsx"
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            children: [(0,
                            s.jsx)("span", {
                                className: "hidden opacity-50 text-[12px] font-poppins font-semibold mb-1 sm:flex",
                                children: "You pay:"
                            }), (0,
                            s.jsx)("input", {
                                id: "pay-amount",
                                placeholder: "0",
                                autoComplete: "off",
                                style: {
                                    backgroundColor: "transparent"
                                },
                                className: "text-xl font-light outline-none w-full"
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex gap-3 items-center p-1 sm:flex-row-reverse sm:p-2 sm:pl-5 sm:justify-between",
                        children: [(0,
                        s.jsx)(a.default, {
                            src: o.Z,
                            alt: "cybro",
                            className: "ml-1 sm:mr-4",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        }), (0,
                        s.jsxs)("div", {
                            children: [(0,
                            s.jsx)("span", {
                                className: "hidden opacity-50 text-[12px] font-poppins font-semibold mb-1 sm:flex",
                                children: "You receive:"
                            }), (0,
                            s.jsx)("input", {
                                autoComplete: "off",
                                placeholder: "0",
                                style: {
                                    backgroundColor: "transparent"
                                },
                                className: " text-xl font-light outline-none w-full"
                            })]
                        })]
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "flex gap-2 text-[15px] items-center sm:flex-col sm:items-start",
                    children: [(0,
                    s.jsx)("p", {
                        className: "font-poppins",
                        children: (0,
                        s.jsx)(l, {
                            "data-sentry-element": "SkeletonText",
                            "data-sentry-source-file": "ClientFormSkeleton.tsx"
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "w-1 h-1 bg-[#3A3B45] rounded-full m-1 sm:hidden"
                    }), (0,
                    s.jsx)("div", {
                        className: "flex gap-2 items-center",
                        children: (0,
                        s.jsx)("p", {
                            className: "font-poppins",
                            children: (0,
                            s.jsx)(l, {
                                "data-sentry-element": "SkeletonText",
                                "data-sentry-source-file": "ClientFormSkeleton.tsx"
                            })
                        })
                    })]
                }), (0,
                s.jsx)("button", {
                    className: "p-7 text-base text-black uppercase font-bold rounded-2xl mt-3 bg-[#F9E727] transition-all hover:transform hover:scale-[101%] hover:brightness-110",
                    children: (0,
                    s.jsx)(l, {
                        "data-sentry-element": "SkeletonText",
                        "data-sentry-source-file": "ClientFormSkeleton.tsx"
                    })
                }), (0,
                s.jsx)("a", {
                    href: "https://docs.cybro.io/cybro/usdcybro-token/how-to-buy",
                    target: "_blank",
                    className: "opacity-50 text-center font-poppins text-base transition-all hover:transform hover:scale-105",
                    children: "How to buy?"
                })]
            })]
        })
    },
    750: function(e, t, n) {
        n.d(t, {
            c: function() {
                return d
            }
        });
        var s, a, l = n(5151), o = n.n(l);
        o().init("c2981df2111f2cc9046befb2b336602b", {
            api_host: "https://hiddenninja.cybro.io"
        });
        let r = {
            track: (e, t) => {
                o().track(e, t)
            }
        };
        (s = a || (a = {})).JoinWaitlistClicked = "join_waitlist_clicked",
        s.CookieAccepted = "cookie_accepter",
        s.CookieDeclined = "cookie_declined",
        s.PageLoad = "page_load";
        let i = {
            join_waitlist_clicked: "waitlist",
            cookie_accepter: "cookie",
            cookie_declined: "cookie",
            page_load: "page"
        }
          , d = function(e, t) {
            let n = n => function() {
                let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t && console.debug("[ANALYTICS]: track", n, s),
                e(n, s)
            }
            ;
            return {
                trackJoinWaitClick: n(a.JoinWaitlistClicked),
                trackCookieAccepted: n(a.CookieAccepted),
                trackCookieDeclined: n(a.CookieDeclined),
                trackPageLoad: n(a.PageLoad)
            }
        }( (e, t) => {
            var n, s;
            n = e,
            s = t,
            window.gtag && window.gtag("event", n, s),
            r.track(e, t),
            (e => {
                if (window.safary) {
                    var t, n;
                    null === (t = (n = window.safary).track) || void 0 === t || t.call(n, e)
                }
            }
            )({
                eventType: i[e],
                eventName: e,
                parameters: t
            })
        }
        , !1)
    },
    2072: function(e, t) {
        t.Z = {
            src: "/_next/static/media/cybro.f65c5acd.svg",
            height: 25,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}]);
