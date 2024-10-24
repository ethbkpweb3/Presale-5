!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[s] = "fe795ce7-6c68-4ec7-94f0-0903b8e2bd05",
        e._sentryDebugIdIdentifier = "sentry-dbid-fe795ce7-6c68-4ec7-94f0-0903b8e2bd05")
    } catch (e) {}
}(),
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[953], {
    134: function(e, s, a) {
        "use strict";
        a.r(s),
        a.d(s, {
            default: function() {
                return j
            }
        });
        var t = a(7651)
          , l = a(6163)
          , i = {
            src: "/_next/static/media/medium-2.fb881e49.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0
        }
          , n = {
            src: "/_next/static/media/twitter-2.01cbf297.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0
        }
          , c = {
            src: "/_next/static/media/discord-2.365eb190.svg",
            height: 17,
            width: 21,
            blurWidth: 0,
            blurHeight: 0
        }
          , r = {
            src: "/_next/static/media/tg-2.5d2dbe3a.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0
        }
          , o = a(463)
          , d = {
            src: "/_next/static/media/cookies.72944211.png",
            height: 45,
            width: 58,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAaVBMVEVMaXGdZwzQvkbIqie+nSvOtDTi4qqxiyXX0Xfd1YDh1GThzT7SuSzZy1rl2GPDrUHVyG3b15Hd1HPb25OkZwDFrEyxghOXcBGjeBtjOAi6nkOqgBmMWQyHWwp5QALZw0vf0Fro2GD053SDoopgAAAAH3RSTlMA/uD9+mg5/irw39j+zoP9/K37wjvY/eX9WubPFJPpUQXKtgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwFwQkCgBAUQMGn8GkT7avq/odsBlz0fnBA96U+G7BtDrLulupt9Kxkon5KdR9yYQq9bIznD0KWAqLskZIUAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 6
        }
          , m = a(5874);
        a(5609);
        var u = a(3010)
          , h = a(9376)
          , _ = a(4079);
        function x(e) {
            let {translations: s} = e
              , [a,l] = (0,
            m.useState)("")
              , [i,n] = (0,
            m.useState)(!1)
              , c = (0,
            m.createRef)()
              , r = !a || !i
              , o = async () => {
                var e;
                if (r)
                    return;
                let s = await (null === (e = c.current) || void 0 === e ? void 0 : e.executeAsync());
                try {
                    if ((await fetch("".concat(u._, "/waitlist/signup"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            captcha_answer: s,
                            email: a
                        })
                    })).ok) {
                        (0,
                        _.j4)(),
                        l(""),
                        n(!1);
                        let e = document.querySelector(".success");
                        (0,
                        _.U)(e)
                    }
                } catch (e) {
                    console.error(e)
                }
            }
            ;
            return (0,
            t.jsx)(t.Fragment, {
                children: (0,
                t.jsx)("div", {
                    className: "overlay visually-hidden",
                    children: (0,
                    t.jsxs)("div", {
                        className: "overlay__container",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "popup waitlist visually-hidden",
                            children: [(0,
                            t.jsx)("button", {
                                className: "popup__close",
                                onClick: _.j4
                            }), (0,
                            t.jsxs)("div", {
                                className: "popup__content",
                                children: [(0,
                                t.jsx)("h4", {
                                    className: "title title--h4 popup__title waitlist__title",
                                    children: s.header
                                }), (0,
                                t.jsx)("span", {
                                    className: "waitlist__text",
                                    children: s.comment
                                }), (0,
                                t.jsxs)("div", {
                                    className: "waitlist__form",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "waitlist__btns",
                                        children: [(0,
                                        t.jsx)("input", {
                                            type: "email",
                                            value: a,
                                            onChange: e => l(e.target.value),
                                            className: "waitlist__input",
                                            placeholder: "Enter your email"
                                        }), (0,
                                        t.jsx)(h.Z, {
                                            ref: c,
                                            size: "invisible",
                                            sitekey: "6Lfz2K8pAAAAAM2itpliUi-DHXaFNa12OUyoL54x",
                                            "data-sentry-element": "ReCAPTCHA",
                                            "data-sentry-source-file": "index.tsx"
                                        }), (0,
                                        t.jsx)("button", {
                                            className: "button button--yellow button--arrow waitlist__btn",
                                            style: {
                                                backgroundColor: r ? "#d3d3d3" : "",
                                                cursor: r ? "not-allowed" : "",
                                                transition: "background-color 0.5s"
                                            },
                                            disabled: r,
                                            onClick: o,
                                            children: "GET NOTIFIED"
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        children: [(0,
                                        t.jsx)("input", {
                                            type: "checkbox",
                                            checked: i,
                                            onChange: () => n(!i),
                                            className: "waitlist__checkbox",
                                            id: "terms"
                                        }), (0,
                                        t.jsxs)("label", {
                                            className: "waitlist__terms",
                                            htmlFor: "terms",
                                            children: ["I agree to the", " ", (0,
                                            t.jsx)("a", {
                                                href: "/pdf/terms.pdf",
                                                download: !0,
                                                target: "_blank",
                                                children: "Terms of Service"
                                            }), " ", "and", " ", (0,
                                            t.jsx)("a", {
                                                href: "/pdf/privacy.pdf",
                                                download: !0,
                                                target: "_blank",
                                                children: "Privacy Policy"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "popup success visually-hidden",
                            children: [(0,
                            t.jsx)("button", {
                                className: "popup__close",
                                onClick: _.j4
                            }), (0,
                            t.jsxs)("div", {
                                className: "popup__content success__content",
                                children: [(0,
                                t.jsx)("span", {
                                    className: "success__label",
                                    children: "You’re added in the list!"
                                }), (0,
                                t.jsxs)("h4", {
                                    className: "title title--h4 popup__title success__title",
                                    children: ["STAY TUNED IN ", (0,
                                    t.jsx)("b", {
                                        children: "SOCIAL"
                                    })]
                                }), (0,
                                t.jsxs)("ul", {
                                    className: "success__socials",
                                    children: [(0,
                                    t.jsx)("li", {
                                        className: "success__social",
                                        children: (0,
                                        t.jsx)("a", {
                                            href: "https://twitter.com/Cybro_io",
                                            className: "success__social-link success__social-link--twitter",
                                            children: "Twitter"
                                        })
                                    }), (0,
                                    t.jsx)("li", {
                                        className: "success__social",
                                        children: (0,
                                        t.jsx)("a", {
                                            href: "https://discord.gg/xFMGDQPhrB",
                                            className: "success__social-link success__social-link--discord",
                                            children: "Discord"
                                        })
                                    }), (0,
                                    t.jsx)("li", {
                                        className: "success__social",
                                        children: (0,
                                        t.jsx)("a", {
                                            href: "https://t.me/cybro_io",
                                            className: "success__social-link success__social-link--telegram",
                                            children: "Telegram"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            })
        }
        a(7694);
        var f = a(6055);
        function b() {
            var e;
            f.c.trackCookieAccepted(),
            null === (e = document.querySelector(".cookies")) || void 0 === e || e.classList.remove("cookies--active"),
            document.cookie = "cybroCookies=true; max-age=2592000; path=/"
        }
        function g() {
            var e;
            f.c.trackCookieDeclined(),
            null === (e = document.querySelector(".cookies")) || void 0 === e || e.classList.remove("cookies--active"),
            document.cookie = "cybroCookies=false; max-age=2592000; path=/"
        }
        function j(e) {
            let {translations: s} = e;
            return (0,
            m.useEffect)( () => {
                let e = document.querySelector(".cookies");
                -1 === document.cookie.indexOf("cybroCookies") && (null == e || e.classList.add("cookies--active"))
            }
            ),
            (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("div", {
                    className: "cookies",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "cookies__content",
                        children: [(0,
                        t.jsx)(l.default, {
                            src: d,
                            alt: "cookies",
                            className: "cookies__image",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "index.tsx"
                        }), (0,
                        t.jsxs)("p", {
                            className: "cookies__text",
                            children: [(0,
                            t.jsx)("b", {
                                children: s.commentFirst
                            }), " ", s.commentSecond]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "cookies__btns",
                        children: [(0,
                        t.jsx)("button", {
                            className: "cookies__btn cookies__btn--reverted cookies__apply",
                            onClick: b,
                            children: s.btnAccept
                        }), (0,
                        t.jsx)("button", {
                            className: "cookies__btn cookies__cancel",
                            onClick: g,
                            children: s.btnReject
                        })]
                    })]
                }), (0,
                t.jsx)("footer", {
                    className: "footer",
                    children: (0,
                    t.jsxs)("div", {
                        className: "container_main footer__container",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "footer__block",
                            children: [(0,
                            t.jsx)("div", {
                                className: "logo footer__logo",
                                children: (0,
                                t.jsx)("a", {
                                    href: "/",
                                    className: "logo__link",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        src: o.Z,
                                        alt: "cybro logo",
                                        className: "logo__img",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            }), (0,
                            t.jsx)("span", {
                                className: "footer__info",
                                children: null == s ? void 0 : s.info
                            }), (0,
                            t.jsx)("p", {
                                className: "footer__disclaimer",
                                children: (0,
                                t.jsx)("small", {
                                    children: "* - Expected profit at the exchange rate of $0.06. The exchange rate is subject of change during trading. Use at your own risk."
                                })
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "footer__block",
                            children: [(0,
                            t.jsx)("span", {
                                className: "footer__block-name",
                                children: s.follow
                            }), (0,
                            t.jsxs)("ul", {
                                className: "footer__socials",
                                children: [(0,
                                t.jsx)("li", {
                                    className: "footer__social",
                                    children: (0,
                                    t.jsxs)("a", {
                                        href: "https://twitter.com/Cybro_io",
                                        className: "footer__social-link",
                                        target: "_blank",
                                        children: [(0,
                                        t.jsx)(l.default, {
                                            className: "footer__social-img",
                                            src: n,
                                            alt: "x",
                                            "data-sentry-element": "Image",
                                            "data-sentry-source-file": "index.tsx"
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "footer__social-name",
                                            children: "Twitter"
                                        })]
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "footer__social",
                                    children: (0,
                                    t.jsxs)("a", {
                                        href: "https://discord.gg/xFMGDQPhrB",
                                        className: "footer__social-link",
                                        target: "_blank",
                                        children: [(0,
                                        t.jsx)(l.default, {
                                            className: "footer__social-img",
                                            src: c,
                                            alt: "discord",
                                            "data-sentry-element": "Image",
                                            "data-sentry-source-file": "index.tsx"
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "footer__social-name",
                                            children: "Discord"
                                        })]
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "footer__social",
                                    children: (0,
                                    t.jsxs)("a", {
                                        href: "https://t.me/cybro_io",
                                        className: "footer__social-link",
                                        target: "_blank",
                                        children: [(0,
                                        t.jsx)(l.default, {
                                            className: "footer__social-img",
                                            src: r,
                                            alt: "telegram",
                                            "data-sentry-element": "Image",
                                            "data-sentry-source-file": "index.tsx"
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "footer__social-name",
                                            children: "Telegram Channel"
                                        })]
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "footer__social",
                                    children: (0,
                                    t.jsxs)("a", {
                                        href: "https://t.me/cybro_io_chat",
                                        className: "footer__social-link",
                                        target: "_blank",
                                        children: [(0,
                                        t.jsx)(l.default, {
                                            className: "footer__social-img",
                                            src: r,
                                            alt: "telegram",
                                            "data-sentry-element": "Image",
                                            "data-sentry-source-file": "index.tsx"
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "footer__social-name",
                                            children: "Telegram Community Chat"
                                        })]
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "footer__social",
                                    children: (0,
                                    t.jsxs)("a", {
                                        href: "https://cybro.medium.com/",
                                        className: "footer__social-link",
                                        target: "_blank",
                                        children: [(0,
                                        t.jsx)(l.default, {
                                            className: "footer__social-img !h-6",
                                            src: i,
                                            alt: "medium",
                                            "data-sentry-element": "Image",
                                            "data-sentry-source-file": "index.tsx"
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "footer__social-name",
                                            children: "Medium"
                                        })]
                                    })
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "footer__block",
                            children: [(0,
                            t.jsx)("span", {
                                className: "footer__block-name",
                                children: s.label
                            }), (0,
                            t.jsxs)("ul", {
                                className: "footer__terms",
                                children: [(0,
                                t.jsx)("li", {
                                    className: "footer__term",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "/pdf/terms.pdf",
                                        className: "footer__term-link",
                                        download: !0,
                                        target: "_blank",
                                        children: s.terms
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "footer__term",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "/pdf/privacy.pdf",
                                        className: "footer__term-link",
                                        download: !0,
                                        target: "_blank",
                                        children: s.policy
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "footer__term",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "https://docs.cybro.io",
                                        className: "footer__term-link",
                                        target: "_blank",
                                        children: s.doc
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "footer__term",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "/pdf/referral-program.pdf",
                                        className: "footer__term-link",
                                        target: "_blank",
                                        children: s.referralProgram
                                    })
                                })]
                            })]
                        })]
                    })
                }), (0,
                t.jsx)(x, {
                    translations: s.waitList,
                    "data-sentry-element": "Waitlist",
                    "data-sentry-source-file": "index.tsx"
                })]
            })
        }
    },
    2147: function(e, s, a) {
        "use strict";
        a.r(s),
        a.d(s, {
            default: function() {
                return I
            }
        });
        var t = a(7651)
          , l = a(6163)
          , i = a(463)
          , n = a(6598)
          , c = a(5911)
          , r = a(5573)
          , o = a(3448)
          , d = {
            src: "/_next/static/media/small-arrow.5e573dae.svg",
            height: 10,
            width: 6,
            blurWidth: 0,
            blurHeight: 0
        };
        a(4070);
        var m = a(5874)
          , u = a(8610)
          , h = a(7957);
        a(2299);
        var _ = {
            src: "/_next/static/media/profile.6014b587.png",
            height: 60,
            width: 60,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUdHBtJRUA0HgAqJSIBAQELCwtMaXEHBwcBAQEmJiYoKC5IRD4GBQQdFgwPCwc0MC1QNwsH5jixAAAADHRSTlP9+/7s9fAAsi38LLT/n0NOAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAOUlEQVR4nAXBhwGAMAzAMBcyIYP/r0XCwhMPI5TJo4GTV+c6ktvfriCVPSB4MSPlxD1Fa2CP63nDfkTNAfK7H185AAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
          , x = {
            src: "/_next/static/media/logo-mini.e64bb953.svg",
            height: 16,
            width: 17,
            blurWidth: 0,
            blurHeight: 0
        };
        a(7367);
        var f = {
            src: "/_next/static/media/eth.9c609f95.svg",
            height: 40,
            width: 40,
            blurWidth: 0,
            blurHeight: 0
        }
          , b = {
            src: "/_next/static/media/usdb.50c08219.svg",
            height: 40,
            width: 40,
            blurWidth: 0,
            blurHeight: 0
        }
          , g = {
            src: "/_next/static/media/tether.4c9bbc89.svg",
            height: 40,
            width: 40,
            blurWidth: 0,
            blurHeight: 0
        }
          , j = a(6348)
          , N = a(4079);
        function v(e) {
            var s, a;
            let {profileData: i, earnedYield: n, onDisconnect: c, address: r} = e
              , o = (0,
            m.useMemo)( () => ({
                list: [{
                    label: "CYBRO Tokens",
                    value: (0,
                    N.lb)(i.balance),
                    leftIcon: x,
                    isNativeYieldInfo: !1
                }, {
                    label: "CYBRO Points",
                    value: "".concat(i.points, " pts"),
                    isNativeYieldInfo: !1
                }, {
                    label: "Referral rewards",
                    leftIcon: g,
                    value: "".concat((0,
                    N.lb)(i.affiliate_balance))
                }, {
                    label: "Total Earned",
                    leftIcon: f,
                    value: "".concat((0,
                    N.lb)(n.ETH.total)),
                    isNativeYieldInfo: !0
                }, {
                    label: "Due Last Week",
                    leftIcon: f,
                    value: "".concat((0,
                    N.lb)(n.ETH.last)),
                    isNativeYieldInfo: !0
                }, {
                    label: null,
                    leftIcon: b,
                    value: "".concat((0,
                    N.lb)(n.USDB.total)),
                    isNativeYieldInfo: !0
                }, {
                    label: null,
                    leftIcon: b,
                    value: "".concat((0,
                    N.lb)(n.USDB.last)),
                    isNativeYieldInfo: !0
                }],
                desc: "You are a participant in the Pre-Alpha Yield Program and earn <b>additional income</b> from your Cybro Token Balance."
            }), [i, n])
              , d = /<b>(.*)<\/b>/
              , u = o.desc.split(d)
              , h = {
                firstPart: u[0],
                boldText: (null == o ? void 0 : null === (a = o.desc) || void 0 === a ? void 0 : null === (s = a.match(d)) || void 0 === s ? void 0 : s[1]) || "",
                secondPart: u[1]
            }
              , v = (0,
            m.useMemo)( () => i.balance_usd && Number(i.balance_usd) ? Number(i.balance_usd) : 0, [i.balance_usd]);
            return (0,
            t.jsxs)("div", {
                className: "user-menu z-50 relative",
                "data-sentry-component": "UserMenu",
                "data-sentry-source-file": "index.tsx",
                children: [(0,
                t.jsxs)("div", {
                    className: "user-menu__header",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "user-menu__header-block",
                        children: [(0,
                        t.jsx)("span", {
                            className: "user-menu__header-label",
                            children: "Your Cybro Profile"
                        }), (0,
                        t.jsx)("button", {
                            onClick: c,
                            className: "user-menu__logout",
                            children: "Log out"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "user-menu__copy",
                        children: [(0,
                        t.jsx)(l.default, {
                            src: _,
                            alt: "profile",
                            className: "user-menu__logo",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "index.tsx"
                        }), (0,
                        t.jsx)("span", {
                            className: "user-menu__copy-text",
                            children: (0,
                            N.v8)(r)
                        }), (0,
                        t.jsxs)("div", {
                            className: "user-menu__copy-box",
                            children: [(0,
                            t.jsx)("button", {
                                className: "user-menu__copy-btn",
                                onClick: () => {
                                    navigator.clipboard.writeText("".concat(r))
                                }
                                ,
                                children: (0,
                                t.jsx)(l.default, {
                                    src: j.Z,
                                    alt: "copy",
                                    className: "user-menu__copy-icon",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "index.tsx"
                                })
                            }), (0,
                            t.jsx)("span", {
                                className: "user-menu__copy-label",
                                children: "Copied!"
                            })]
                        })]
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "user-menu__content",
                    children: [(0,
                    t.jsx)("ul", {
                        className: "user-menu__list",
                        children: o.list.map( (e, s) => (!e.isNativeYieldInfo || e.isNativeYieldInfo && i.claimable_yield_enrolled) && (0,
                        t.jsxs)("div", {
                            className: "user-menu__item".concat(null === e.label ? " user-menu__item-compact" : ""),
                            children: [null !== e.label && (0,
                            t.jsx)("span", {
                                className: "user-menu__item-label",
                                children: e.label
                            }), (0,
                            t.jsxs)("div", {
                                className: "user-menu__item-content",
                                children: [e.leftIcon ? (0,
                                t.jsx)(l.default, {
                                    src: e.leftIcon,
                                    alt: "logo",
                                    className: "user-menu__item-currency-left"
                                }) : null, (0,
                                t.jsx)("span", {
                                    className: "user-menu__item-value",
                                    children: e.value
                                })]
                            })]
                        }, "userMenuItem" + s))
                    }), !!v && i.claimable_yield_enrolled && (0,
                    t.jsxs)("p", {
                        className: "user-menu__desc",
                        children: [(0,
                        t.jsx)("span", {
                            children: h.firstPart
                        }), h.boldText ? (0,
                        t.jsx)("b", {
                            children: h.boldText
                        }) : null, h.secondPart ? (0,
                        t.jsxs)("span", {
                            children: ["\xa0", h.secondPart]
                        }) : null]
                    }), !i.claimable_yield_enrolled && (0,
                    t.jsxs)("div", {
                        className: "user-menu__offer",
                        children: [(0,
                        t.jsx)("span", {
                            className: "user-menu__offer-title",
                            children: "Boost your Yield Now"
                        }), (0,
                        t.jsx)("p", {
                            className: "user-menu__offer-desc",
                            children: "Deposit in total $1000 or more and unlock a higher yield!"
                        }), (0,
                        t.jsx)("a", {
                            href: "#form",
                            className: "button button--yellow button--arrow user-menu__offer-btn",
                            children: "Buy CYBRO token"
                        })]
                    })]
                })]
            })
        }
        var y = a(3010)
          , p = a(435);
        function k(e) {
            let {onDisconnect: s, address: a, className: i} = e
              , [n,c] = (0,
            m.useState)(!1)
              , [r,o] = (0,
            m.useState)()
              , [d,u] = (0,
            m.useState)();
            return (0,
            m.useEffect)( () => {
                let e = async () => {
                    let e = await fetch("".concat(y._, "/users/profile/").concat(a))
                      , {data: s} = await e.json();
                    o(s)
                }
                ;
                (async () => {
                    let e = await fetch("".concat(y._, "/users/profile/").concat(a, "/earned-yield"))
                      , {data: s} = await e.json();
                    u(s)
                }
                )(),
                e()
            }
            , []),
            (0,
            t.jsxs)("div", {
                className: (0,
                p.Z)("user-toggle__wrapper", i),
                "data-sentry-component": "UserToggle",
                "data-sentry-source-file": "index.tsx",
                children: [(0,
                t.jsxs)("button", {
                    className: "user-toggle ".concat(n ? "active" : ""),
                    onClick: () => c(!n),
                    children: [(0,
                    t.jsx)("div", {
                        className: "user-toggle__profile",
                        children: (0,
                        t.jsx)(l.default, {
                            src: _,
                            alt: "profile",
                            className: "user-toggle__profile-icon",
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "index.tsx"
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "user-toggle__content",
                        children: [(0,
                        t.jsx)("div", {
                            className: "user-toggle__inner",
                            children: (0,
                            t.jsx)("span", {
                                className: "user-toggle__name",
                                children: (0,
                                N.v8)(a)
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "user-toggle__inner landscape",
                            children: [(0,
                            t.jsx)("span", {
                                className: "user-toggle__money",
                                children: r ? (0,
                                N.lb)(r.balance) : ""
                            }), (0,
                            t.jsx)(l.default, {
                                src: x,
                                alt: "logo",
                                className: "user-toggle__currency",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx"
                            })]
                        })]
                    })]
                }), n && r && d ? (0,
                t.jsx)("div", {
                    className: "user-toggle__menu",
                    children: (0,
                    t.jsx)(v, {
                        onDisconnect: s,
                        address: a,
                        profileData: r,
                        earnedYield: d
                    })
                }) : null]
            })
        }
        var A = a(677);
        function w() {
            var e, s;
            document.body.classList.add("no-scroll"),
            null === (e = document.querySelector(".lang-menu--active")) || void 0 === e || e.classList.remove("lang-menu--active"),
            null === (s = document.querySelector(".mobile-menu")) || void 0 === s || s.classList.remove("visually-hidden")
        }
        function C(e) {
            var s, a;
            e.preventDefault(),
            null === (a = e.currentTarget.parentElement) || void 0 === a || null === (s = a.querySelector(".lang-menu")) || void 0 === s || s.classList.toggle("lang-menu--active")
        }
        function I(e) {
            let {translations: s} = e;
            return (0,
            m.useEffect)( () => {
                let e = document.querySelector(".header");
                window.onscroll = function() {
                    window.scrollY > 10 ? null == e || e.classList.add("header--sticky") : null == e || e.classList.remove("header--sticky")
                }
                ,
                window.scrollY > 10 && (null == e || e.classList.add("header--sticky")),
                Array.from(document.querySelectorAll(".lang-toggle__btn")).forEach(e => {
                    e.removeEventListener("click", C),
                    e.addEventListener("click", C)
                }
                )
            }
            ),
            (0,
            t.jsx)("header", {
                className: "header",
                "data-sentry-component": "Header",
                "data-sentry-source-file": "index.tsx",
                children: (0,
                t.jsxs)("div", {
                    className: "container_main header__container",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "header__column",
                        children: [(0,
                        t.jsx)("button", {
                            className: "mobile-menu__open mobile-desktop",
                            onClick: w
                        }), (0,
                        t.jsx)("div", {
                            className: "logo header__logo",
                            children: (0,
                            t.jsx)("a", {
                                href: "/",
                                className: "logo__link",
                                children: (0,
                                t.jsx)(l.default, {
                                    src: i.Z,
                                    alt: "cybro logo",
                                    className: "logo__img",
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "index.tsx"
                                })
                            })
                        }), (0,
                        t.jsx)("nav", {
                            className: "header__menu desktop",
                            children: (0,
                            t.jsxs)("ul", {
                                className: "header__menu-list",
                                children: [(0,
                                t.jsx)("li", {
                                    className: "header__menu-item",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "#sale",
                                        className: "header__menu-link",
                                        children: s.sale
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "header__menu-item",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "#invest",
                                        className: "header__menu-link",
                                        children: s.about
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "header__menu-item",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "#roadmap",
                                        className: "header__menu-link",
                                        children: s.roadmap
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "header__menu-item",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "#token",
                                        className: "header__menu-link",
                                        children: s.token
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "header__menu-item",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "#faq",
                                        className: "header__menu-link",
                                        children: s.faq
                                    })
                                }), (0,
                                t.jsx)("li", {
                                    className: "header__menu-item",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "https://docs.cybro.io",
                                        className: "header__menu-link",
                                        target: "_black",
                                        children: "DOCS"
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "header__column header__btns",
                        children: [(0,
                        t.jsx)("div", {
                            className: "tablet",
                            children: (0,
                            t.jsx)(h.Z, {
                                "data-sentry-element": "LangToggle",
                                "data-sentry-source-file": "index.tsx"
                            })
                        }), (0,
                        t.jsxs)("ul", {
                            className: "socials desktop",
                            children: [(0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://twitter.com/Cybro_io",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img",
                                        src: c.Z,
                                        alt: "x",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            }), (0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://discord.gg/xFMGDQPhrB",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img",
                                        src: r.Z,
                                        alt: "discord",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            }), (0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://t.me/cybro_io",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img",
                                        src: o.Z,
                                        alt: "telegram",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            }), (0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://cybro.medium.com/",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img !h-[22px]",
                                        src: n.Z,
                                        alt: "medium",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            })]
                        }), (0,
                        t.jsxs)(A.default, {
                            href: "https://app.cybro.io/",
                            className: (0,
                            p.Z)("header__launchButton"),
                            target: "_blank",
                            "data-sentry-element": "Link",
                            "data-sentry-source-file": "index.tsx",
                            children: [(0,
                            t.jsx)(l.default, {
                                src: d,
                                alt: "",
                                className: "header__launchButton-icon",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx"
                            }), "Launch app"]
                        }), (0,
                        t.jsx)(u.ConnectButton, {
                            "data-sentry-element": "ConnectButton",
                            "data-sentry-source-file": "index.tsx",
                            children: (e, a, l) => (0,
                            t.jsx)(u.DisconnectButton, {
                                children: i => l ? (0,
                                t.jsx)(k, {
                                    className: "header__userToggle",
                                    onDisconnect: i,
                                    address: a || ""
                                }) : (0,
                                t.jsxs)(t.Fragment, {
                                    children: [(0,
                                    t.jsx)("button", {
                                        className: "button button--black bg-black h-[44px] text-white border-0 header__connectButton",
                                        onClick: e,
                                        children: (0,
                                        t.jsxs)("span", {
                                            children: ["+\xa0\xa0\xa0", s.connectBtn]
                                        })
                                    }), (0,
                                    t.jsx)("a", {
                                        href: "#sale",
                                        className: (0,
                                        p.Z)("header__buyButton header__buyButton--initial"),
                                        children: "Buy Cybro"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })
        }
    },
    7957: function(e, s, a) {
        "use strict";
        a.d(s, {
            Z: function() {
                return f
            }
        });
        var t = a(7651)
          , l = a(6163);
        a(8398);
        var i = {
            src: "/_next/static/media/de.00c4c535.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , n = {
            src: "/_next/static/media/en.9b077080.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , c = {
            src: "/_next/static/media/es.ac255e10.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , r = {
            src: "/_next/static/media/fr.598ec581.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , o = {
            src: "/_next/static/media/hu.0f63c55e.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , d = {
            src: "/_next/static/media/pl.319667bc.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , m = {
            src: "/_next/static/media/ru.bd9c05c4.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , u = {
            src: "/_next/static/media/tr.94442717.svg",
            height: 24,
            width: 25,
            blurWidth: 0,
            blurHeight: 0
        }
          , h = {
            src: "/_next/static/media/ua.a1a04424.svg",
            height: 750,
            width: 750,
            blurWidth: 0,
            blurHeight: 0
        }
          , _ = {
            src: "/_next/static/media/br.c941af01.svg",
            height: 100,
            width: 100,
            blurWidth: 0,
            blurHeight: 0
        }
          , x = a(5874);
        function f(e) {
            let {view: s} = e
              , a = [{
                name: "de",
                icon: i
            }, {
                name: "en",
                icon: n
            }, {
                name: "es",
                icon: c
            }, {
                name: "fr",
                icon: r
            }, {
                name: "hu",
                icon: o
            }, {
                name: "pl",
                icon: d
            }, {
                name: "pt",
                icon: _
            }, {
                name: "ru",
                icon: m
            }, {
                name: "tr",
                icon: u
            }, {
                name: "ua",
                icon: h
            }]
              , [f,b] = (0,
            x.useState)("en");
            return (0,
            x.useEffect)( () => {
                b(window.location.pathname.replace("/", ""))
            }
            , []),
            (0,
            t.jsxs)("div", {
                className: "lang-toggle",
                "data-sentry-component": "LangToggle",
                "data-sentry-source-file": "index.tsx",
                children: [(0,
                t.jsx)("button", {
                    className: "header__btn lang-toggle__btn ".concat("desktop" === s ? "desktop" : ""),
                    children: a.map(e => e.name).includes(f) ? f : "en"
                }), (0,
                t.jsx)("ul", {
                    className: "lang-menu",
                    children: a.map( (e, s) => (0,
                    t.jsx)("li", {
                        className: "lang-menu__item",
                        children: (0,
                        t.jsxs)("a", {
                            href: "/".concat("en" === e.name ? "" : e.name),
                            className: "lang-menu__link",
                            children: [(0,
                            t.jsx)(l.default, {
                                className: "lang-menu__flag",
                                src: e.icon,
                                alt: e.name
                            }), (0,
                            t.jsx)("span", {
                                className: "lang-menu__name",
                                children: e.name
                            })]
                        })
                    }, "lang" + s))
                })]
            })
        }
    },
    6661: function(e, s, a) {
        "use strict";
        a.r(s),
        a.d(s, {
            default: function() {
                return h
            }
        });
        var t = a(7651)
          , l = a(6163)
          , i = a(463);
        a(7667);
        var n = a(6598)
          , c = a(5911)
          , r = a(5573)
          , o = a(3448)
          , d = a(4079)
          , m = a(8610)
          , u = a(7957);
        function h(e) {
            let {translations: s} = e;
            return (0,
            t.jsxs)("div", {
                className: "mobile-menu visually-hidden",
                "data-sentry-component": "MobileMenu",
                "data-sentry-source-file": "index.tsx",
                children: [(0,
                t.jsxs)("div", {
                    className: "mobile-menu__content",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0,
                        t.jsx)("a", {
                            href: "/",
                            className: "mobile-menu__logo-link",
                            children: (0,
                            t.jsx)(l.default, {
                                src: i.Z,
                                alt: "cybro logo",
                                className: "mobile-menu__logo-img",
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "index.tsx"
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "mobile-menu__btns",
                            children: [(0,
                            t.jsx)(u.Z, {
                                "data-sentry-element": "LangToggle",
                                "data-sentry-source-file": "index.tsx"
                            }), (0,
                            t.jsx)("button", {
                                className: "mobile-menu__close",
                                onClick: d.Wj
                            })]
                        })]
                    }), (0,
                    t.jsxs)("ul", {
                        className: "mobile-menu__list",
                        children: [(0,
                        t.jsx)("li", {
                            className: "mobile-menu__item",
                            children: (0,
                            t.jsx)("a", {
                                href: "#sale",
                                className: "mobile-menu__link",
                                onClick: d.Wj,
                                children: s.sale
                            })
                        }), (0,
                        t.jsx)("li", {
                            className: "mobile-menu__item",
                            children: (0,
                            t.jsx)("a", {
                                href: "#invest",
                                className: "mobile-menu__link",
                                onClick: d.Wj,
                                children: s.about
                            })
                        }), (0,
                        t.jsx)("li", {
                            className: "mobile-menu__item",
                            children: (0,
                            t.jsx)("a", {
                                href: "#roadmap",
                                className: "mobile-menu__link",
                                onClick: d.Wj,
                                children: s.roadmap
                            })
                        }), (0,
                        t.jsx)("li", {
                            className: "mobile-menu__item",
                            children: (0,
                            t.jsx)("a", {
                                href: "#token",
                                className: "mobile-menu__link",
                                onClick: d.Wj,
                                children: s.token
                            })
                        }), (0,
                        t.jsx)("li", {
                            className: "mobile-menu__item",
                            children: (0,
                            t.jsx)("a", {
                                href: "#faq",
                                className: "mobile-menu__link",
                                onClick: d.Wj,
                                children: s.faq
                            })
                        }), (0,
                        t.jsx)("li", {
                            className: "mobile-menu__item",
                            children: (0,
                            t.jsx)("a", {
                                href: "https://docs.cybro.io",
                                className: "mobile-menu__link",
                                onClick: d.Wj,
                                target: "_black",
                                children: "DOCS"
                            })
                        }), (0,
                        t.jsx)("li", {
                            className: "mobile-menu__item text-accent",
                            children: (0,
                            t.jsx)("a", {
                                href: "https://app.cybro.io",
                                className: "mobile-menu__link",
                                onClick: d.Wj,
                                target: "_black",
                                children: "LAUNCH APP"
                            })
                        })]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "mobile-menu__footer",
                    children: (0,
                    t.jsxs)("div", {
                        className: "header__btns",
                        children: [(0,
                        t.jsxs)("ul", {
                            className: "socials",
                            children: [(0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://twitter.com/Cybro_io",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img",
                                        src: c.Z,
                                        alt: "x",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            }), (0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://discord.gg/xFMGDQPhrB",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img",
                                        src: r.Z,
                                        alt: "discord",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            }), (0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://t.me/cybro_io",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img",
                                        src: o.Z,
                                        alt: "telegram",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            }), (0,
                            t.jsx)("li", {
                                className: "social",
                                children: (0,
                                t.jsx)("a", {
                                    href: "https://cybro.medium.com/",
                                    className: "header__btn social__link",
                                    target: "_blank",
                                    children: (0,
                                    t.jsx)(l.default, {
                                        className: "social__img !h-6",
                                        src: n.Z,
                                        alt: "medium",
                                        "data-sentry-element": "Image",
                                        "data-sentry-source-file": "index.tsx"
                                    })
                                })
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "mobile-menu__footer-btns",
                            children: (0,
                            t.jsx)(m.ConnectButton, {
                                "data-sentry-element": "ConnectButton",
                                "data-sentry-source-file": "index.tsx",
                                children: (e, a, l) => (0,
                                t.jsx)(m.DisconnectButton, {
                                    children: a => l ? (0,
                                    t.jsx)(t.Fragment, {}) : (0,
                                    t.jsx)("button", {
                                        className: "button button--black bg-accent h-[53px] w-full text-black border-0 font-black max-w-[450px] m-auto",
                                        onClick: e,
                                        children: (0,
                                        t.jsxs)("span", {
                                            children: ["+\xa0\xa0\xa0", s.connectBtn]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })]
            })
        }
    },
    6055: function(e, s, a) {
        "use strict";
        a.d(s, {
            c: function() {
                return t.c
            }
        });
        var t = a(750)
    },
    3010: function(e, s, a) {
        "use strict";
        a.d(s, {
            _: function() {
                return t
            }
        });
        let t = "https://presale-api.cybro.io"
    },
    4079: function(e, s, a) {
        "use strict";
        a.d(s, {
            N3: function() {
                return o
            },
            U: function() {
                return i
            },
            WY: function() {
                return r
            },
            Wj: function() {
                return c
            },
            j4: function() {
                return n
            },
            lb: function() {
                return m
            },
            v8: function() {
                return d
            }
        }),
        a(6055);
        var t = a(9991)
          , l = a.n(t);
        function i(e) {
            var s;
            document.body.classList.add("no-scroll"),
            e.classList.remove("visually-hidden"),
            null === (s = document.querySelector(".overlay")) || void 0 === s || s.classList.remove("visually-hidden")
        }
        function n() {
            var e;
            Array.from(document.querySelectorAll(".popup")).forEach(e => {
                e.classList.add("visually-hidden")
            }
            ),
            null === (e = document.querySelector(".overlay")) || void 0 === e || e.classList.add("visually-hidden"),
            document.body.classList.remove("no-scroll")
        }
        function c() {
            var e, s;
            null === (e = document.querySelector(".lang-menu--active")) || void 0 === e || e.classList.remove("lang-menu--active"),
            null === (s = document.querySelector(".mobile-menu")) || void 0 === s || s.classList.add("visually-hidden"),
            document.body.classList.remove("no-scroll")
        }
        function r(e) {
            if ("A" !== e.target.tagName) {
                e.preventDefault();
                let a = e.currentTarget;
                if (!a.classList.contains("accordion-active")) {
                    var s;
                    null === (s = document.querySelector(".accordion__item.accordion-active")) || void 0 === s || s.classList.remove("accordion-active")
                }
                a.classList.toggle("accordion-active")
            }
        }
        let o = (e, s) => Object.values(s).includes(e)
          , d = e => {
            if (!e)
                return;
            let s = e.slice(0, 3)
              , a = e.slice(-3);
            return "".concat(s, "...").concat(a)
        }
          , m = e => void 0 === e ? "" : l()(e).format("0,0.0[00000]")
    },
    8633: function() {},
    9110: function() {},
    7694: function() {},
    4070: function() {},
    8398: function() {},
    7667: function() {},
    7367: function() {},
    2299: function() {},
    5609: function() {},
    6348: function(e, s) {
        "use strict";
        s.Z = {
            src: "/_next/static/media/copy.c2b44696.svg",
            height: 19,
            width: 19,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    463: function(e, s) {
        "use strict";
        s.Z = {
            src: "/_next/static/media/logo.2ce64b94.svg",
            height: 19,
            width: 151,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5573: function(e, s) {
        "use strict";
        s.Z = {
            src: "/_next/static/media/discord-1.6246673f.svg",
            height: 14,
            width: 18,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    6598: function(e, s) {
        "use strict";
        s.Z = {
            src: "/_next/static/media/medium.ed2f4f80.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    3448: function(e, s) {
        "use strict";
        s.Z = {
            src: "/_next/static/media/tg-1.74019191.svg",
            height: 18,
            width: 18,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    5911: function(e, s) {
        "use strict";
        s.Z = {
            src: "/_next/static/media/twitter-1.48e759d1.svg",
            height: 14,
            width: 14,
            blurWidth: 0,
            blurHeight: 0
        }
    }
}]);
