!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "6013a7c2-e5a9-4231-844f-81b41499a6e2",
        e._sentryDebugIdIdentifier = "sentry-dbid-6013a7c2-e5a9-4231-844f-81b41499a6e2")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[991], {
    9600: function(e, t, r) {
        let n, i, s, o, a, l;
        r.d(t, {
            G: function() {
                return rU
            }
        });
        var c, u, d, h, p, f, m, y, g = r(349), v = r(6345), S = (r(9118),
        r(1610)), _ = r(6255), w = r(7886), b = r(3882), E = r(2679), k = r(3907), M = r(5235), I = r(3853), C = r(2249), R = r(6138), x = (r(206),
        r(4511)), T = r(1831), A = r(6246), D = r(160), O = r(8160), N = r(5864), L = r(5226), P = r(8086), B = r(98), F = r(851), U = r(4824), W = r(7039), z = r(4122), j = r(2704), H = r(7569);
        let q = C.GLOBAL_OBJ
          , V = "sentryReplaySession"
          , K = "Unable to send Replay";
        function J(e, t) {
            return null != e ? e : t()
        }
        function G(e) {
            let t;
            let r = e[0]
              , n = 1;
            for (; n < e.length; ) {
                let i = e[n]
                  , s = e[n + 1];
                if (n += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == r)
                    return;
                "access" === i || "optionalAccess" === i ? (t = r,
                r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s(function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    return r.call(t, ...n)
                }),
                t = void 0)
            }
            return r
        }
        function Y(e) {
            let t = G([e, "optionalAccess", e => e.host]);
            return G([t, "optionalAccess", e => e.shadowRoot]) === e
        }
        function X(e) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(e)
        }
        function $(e) {
            try {
                var t;
                let r = e.rules || e.cssRules;
                return r ? ((t = Array.from(r, Q).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")),
                t) : null
            } catch (e) {
                return null
            }
        }
        function Q(e) {
            let t;
            if ("styleSheet"in e)
                try {
                    t = $(e.styleSheet) || function(e) {
                        let {cssText: t} = e;
                        if (t.split('"').length < 3)
                            return t;
                        let r = ["@import", "url(".concat(JSON.stringify(e.href), ")")];
                        return "" === e.layerName ? r.push("layer") : e.layerName && r.push("layer(".concat(e.layerName, ")")),
                        e.supportsText && r.push("supports(".concat(e.supportsText, ")")),
                        e.media.length && r.push(e.media.mediaText),
                        r.join(" ") + ";"
                    }(e)
                } catch (e) {}
            else if ("selectorText"in e && e.selectorText.includes(":"))
                return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
            return t || e.cssText
        }
        (c = m || (m = {}))[c.Document = 0] = "Document",
        c[c.DocumentType = 1] = "DocumentType",
        c[c.Element = 2] = "Element",
        c[c.Text = 3] = "Text",
        c[c.CDATA = 4] = "CDATA",
        c[c.Comment = 5] = "Comment";
        class Z {
            getId(e) {
                return e ? J(G([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id]), () => -1) : -1
            }
            getNode(e) {
                return this.idNodeMap.get(e) || null
            }
            getIds() {
                return Array.from(this.idNodeMap.keys())
            }
            getMeta(e) {
                return this.nodeMetaMap.get(e) || null
            }
            removeNodeFromMap(e) {
                let t = this.getId(e);
                this.idNodeMap.delete(t),
                e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
            }
            has(e) {
                return this.idNodeMap.has(e)
            }
            hasNode(e) {
                return this.nodeMetaMap.has(e)
            }
            add(e, t) {
                let r = t.id;
                this.idNodeMap.set(r, e),
                this.nodeMetaMap.set(e, t)
            }
            replace(e, t) {
                let r = this.getNode(e);
                if (r) {
                    let e = this.nodeMetaMap.get(r);
                    e && this.nodeMetaMap.set(t, e)
                }
                this.idNodeMap.set(e, t)
            }
            reset() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
            constructor() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
        }
        function ee(e) {
            let {maskInputOptions: t, tagName: r, type: n} = e;
            return "OPTION" === r && (r = "SELECT"),
            !!(t[r.toLowerCase()] || n && t[n] || "password" === n || "INPUT" === r && !n && t.text)
        }
        function et(e) {
            let {isMasked: t, element: r, value: n, maskInputFn: i} = e
              , s = n || "";
            return t ? (i && (s = i(s, r)),
            "*".repeat(s.length)) : s
        }
        function er(e) {
            return e.toLowerCase()
        }
        function en(e) {
            return e.toUpperCase()
        }
        let ei = "__rrweb_original__";
        function es(e) {
            let t = e.type;
            return e.hasAttribute("data-rr-is-password") ? "password" : t ? er(t) : null
        }
        function eo(e, t, r) {
            return "INPUT" === t && ("radio" === r || "checkbox" === r) ? e.getAttribute("value") || "" : e.value
        }
        function ea(e, t) {
            let r;
            try {
                r = new URL(e,J(t, () => window.location.href))
            } catch (e) {
                return null
            }
            return J(G([r.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", e => e[1]]), () => null)
        }
        let el = {};
        function ec(e) {
            let t = el[e];
            if (t)
                return t;
            let r = window.document
              , n = window[e];
            if (r && "function" == typeof r.createElement)
                try {
                    let t = r.createElement("iframe");
                    t.hidden = !0,
                    r.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (n = i[e]),
                    r.head.removeChild(t)
                } catch (e) {}
            return el[e] = n.bind(window)
        }
        function eu() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return ec("setTimeout")(...t)
        }
        function ed() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return ec("clearTimeout")(...t)
        }
        let eh = 1
          , ep = RegExp("[^a-z0-9-_:]");
        function ef() {
            return eh++
        }
        let em = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm
          , ey = /^(?:[a-z+]+:)?\/\//i
          , eg = /^www\..*/i
          , ev = /^(data:)([^,]*),(.*)/i;
        function eS(e, t) {
            return (e || "").replace(em, (e, r, n, i, s, o) => {
                let a = n || s || o
                  , l = r || i || "";
                if (!a)
                    return e;
                if (ey.test(a) || eg.test(a) || ev.test(a))
                    return "url(".concat(l).concat(a).concat(l, ")");
                if ("/" === a[0])
                    return "url(".concat(l).concat((t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0]).split("?")[0] + a).concat(l, ")");
                let c = t.split("/")
                  , u = a.split("/");
                for (let e of (c.pop(),
                u))
                    "." !== e && (".." === e ? c.pop() : c.push(e));
                return "url(".concat(l).concat(c.join("/")).concat(l, ")")
            }
            )
        }
        let e_ = /^[^ \t\n\r\u000c]+/
          , ew = /^[, \t\n\r\u000c]+/
          , eb = new WeakMap;
        function eE(e, t) {
            return t && "" !== t.trim() ? ek(e, t) : t
        }
        function ek(e, t) {
            let r = eb.get(e);
            if (r || (r = e.createElement("a"),
            eb.set(e, r)),
            t) {
                if (t.startsWith("blob:") || t.startsWith("data:"))
                    return t
            } else
                t = "";
            return r.setAttribute("href", t),
            r.href
        }
        function eM(e, t, r, n, i, s) {
            return n ? "src" !== r && ("href" !== r || "use" === t && "#" === n[0]) && ("xlink:href" !== r || "#" === n[0]) && ("background" !== r || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === r ? function(e, t) {
                if ("" === t.trim())
                    return t;
                let r = 0;
                function n(e) {
                    let n;
                    let i = e.exec(t.substring(r));
                    return i ? (n = i[0],
                    r += n.length,
                    n) : ""
                }
                let i = [];
                for (; n(ew),
                !(r >= t.length); ) {
                    let s = n(e_);
                    if ("," === s.slice(-1))
                        s = eE(e, s.substring(0, s.length - 1)),
                        i.push(s);
                    else {
                        let n = "";
                        s = eE(e, s);
                        let o = !1;
                        for (; ; ) {
                            let e = t.charAt(r);
                            if ("" === e) {
                                i.push((s + n).trim());
                                break
                            }
                            if (o)
                                ")" === e && (o = !1);
                            else {
                                if ("," === e) {
                                    r += 1,
                                    i.push((s + n).trim());
                                    break
                                }
                                "(" === e && (o = !0)
                            }
                            n += e,
                            r += 1
                        }
                    }
                }
                return i.join(", ")
            }(e, n) : "style" === r ? eS(n, ek(e)) : "object" === t && "data" === r ? eE(e, n) : "function" == typeof s ? s(r, n, i) : n : eE(e, n) : n
        }
        function eI(e, t, r) {
            return ("video" === e || "audio" === e) && "autoplay" === t
        }
        function eC(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0
              , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : eC(e.parentNode, t, r, n + 1)
        }
        function eR(e, t) {
            return r => {
                if (null === r)
                    return !1;
                try {
                    if (e) {
                        if ("string" == typeof e) {
                            if (r.matches(".".concat(e)))
                                return !0
                        } else if (function(e, t) {
                            for (let r = e.classList.length; r--; ) {
                                let n = e.classList[r];
                                if (t.test(n))
                                    return !0
                            }
                            return !1
                        }(r, e))
                            return !0
                    }
                    if (t && r.matches(t))
                        return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            }
        }
        function ex(e, t, r, n, i, s) {
            try {
                let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                if (null === o)
                    return !1;
                if ("INPUT" === o.tagName) {
                    let e = o.getAttribute("autocomplete");
                    if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e))
                        return !0
                }
                let a = -1
                  , l = -1;
                if (s) {
                    if ((l = eC(o, eR(n, i))) < 0)
                        return !0;
                    a = eC(o, eR(t, r), l >= 0 ? l : 1 / 0)
                } else {
                    if ((a = eC(o, eR(t, r))) < 0)
                        return !1;
                    l = eC(o, eR(n, i), a >= 0 ? a : 1 / 0)
                }
                return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s
            } catch (e) {}
            return !!s
        }
        function eT(e) {
            return null == e ? "" : e.toLowerCase()
        }
        function eA(e, t) {
            let r;
            let {doc: s, mirror: o, blockClass: a, blockSelector: l, unblockSelector: c, maskAllText: u, maskTextClass: d, unmaskTextClass: h, maskTextSelector: p, unmaskTextSelector: f, skipChild: y=!1, inlineStylesheet: g=!0, maskInputOptions: v={}, maskAttributeFn: S, maskTextFn: _, maskInputFn: w, slimDOMOptions: b, dataURLOptions: E={}, inlineImages: k=!1, recordCanvas: M=!1, onSerialize: I, onIframeLoad: C, iframeLoadTimeout: R=5e3, onStylesheetLoad: x, stylesheetLoadTimeout: T=5e3, keepIframeSrcFn: A= () => !1, newlyAddedElement: D=!1} = t
              , {preserveWhiteSpace: O=!0} = t
              , N = function(e, t) {
                let {doc: r, mirror: s, blockClass: o, blockSelector: a, unblockSelector: l, maskAllText: c, maskAttributeFn: u, maskTextClass: d, unmaskTextClass: h, maskTextSelector: p, unmaskTextSelector: f, inlineStylesheet: y, maskInputOptions: g={}, maskTextFn: v, maskInputFn: S, dataURLOptions: _={}, inlineImages: w, recordCanvas: b, keepIframeSrcFn: E, newlyAddedElement: k=!1} = t
                  , M = function(e, t) {
                    if (!t.hasNode(e))
                        return;
                    let r = t.getId(e);
                    return 1 === r ? void 0 : r
                }(r, s);
                switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ("CSS1Compat" !== e.compatMode)
                        return {
                            type: m.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                    return {
                        type: m.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: m.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: M
                    };
                case e.ELEMENT_NODE:
                    return function(e, t) {
                        let r;
                        let {doc: s, blockClass: o, blockSelector: a, unblockSelector: l, inlineStylesheet: c, maskInputOptions: u={}, maskAttributeFn: d, maskInputFn: h, dataURLOptions: p={}, inlineImages: f, recordCanvas: y, keepIframeSrcFn: g, newlyAddedElement: v=!1, rootId: S, maskAllText: _, maskTextClass: w, unmaskTextClass: b, maskTextSelector: E, unmaskTextSelector: k} = t
                          , M = function(e, t, r, n) {
                            try {
                                if (n && e.matches(n))
                                    return !1;
                                if ("string" == typeof t) {
                                    if (e.classList.contains(t))
                                        return !0
                                } else
                                    for (let r = e.classList.length; r--; ) {
                                        let n = e.classList[r];
                                        if (t.test(n))
                                            return !0
                                    }
                                if (r)
                                    return e.matches(r)
                            } catch (e) {}
                            return !1
                        }(e, o, a, l)
                          , I = function(e) {
                            if (e instanceof HTMLFormElement)
                                return "form";
                            let t = er(e.tagName);
                            return ep.test(t) ? "div" : t
                        }(e)
                          , C = {}
                          , R = e.attributes.length;
                        for (let t = 0; t < R; t++) {
                            let r = e.attributes[t];
                            r.name && !eI(I, r.name, r.value) && (C[r.name] = eM(s, I, er(r.name), r.value, e, d))
                        }
                        if ("link" === I && c) {
                            let t = Array.from(s.styleSheets).find(t => t.href === e.href)
                              , r = null;
                            t && (r = $(t)),
                            r && (delete C.rel,
                            delete C.href,
                            C._cssText = eS(r, t.href))
                        }
                        if ("style" === I && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = $(e.sheet);
                            t && (C._cssText = eS(t, ek(s)))
                        }
                        if ("input" === I || "textarea" === I || "select" === I || "option" === I) {
                            let t = es(e)
                              , r = eo(e, en(I), t)
                              , n = e.checked;
                            if ("submit" !== t && "button" !== t && r) {
                                let n = ex(e, w, E, b, k, ee({
                                    type: t,
                                    tagName: en(I),
                                    maskInputOptions: u
                                }));
                                C.value = et({
                                    isMasked: n,
                                    element: e,
                                    value: r,
                                    maskInputFn: h
                                })
                            }
                            n && (C.checked = n)
                        }
                        if ("option" === I && (e.selected && !u.select ? C.selected = !0 : delete C.selected),
                        "canvas" === I && y) {
                            if ("2d" === e.__context)
                                !function(e) {
                                    let t = e.getContext("2d");
                                    if (!t)
                                        return !0;
                                    for (let r = 0; r < e.width; r += 50)
                                        for (let n = 0; n < e.height; n += 50) {
                                            let i = t.getImageData
                                              , s = ei in i ? i[ei] : i;
                                            if (new Uint32Array(s.call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer).some(e => 0 !== e))
                                                return !1
                                        }
                                    return !0
                                }(e) && (C.rr_dataURL = e.toDataURL(p.type, p.quality));
                            else if (!("__context"in e)) {
                                let t = e.toDataURL(p.type, p.quality)
                                  , r = s.createElement("canvas");
                                r.width = e.width,
                                r.height = e.height,
                                t !== r.toDataURL(p.type, p.quality) && (C.rr_dataURL = t)
                            }
                        }
                        if ("img" === I && f) {
                            n || (i = (n = s.createElement("canvas")).getContext("2d"));
                            let t = e.currentSrc || e.getAttribute("src") || "<unknown-src>"
                              , r = e.crossOrigin
                              , o = () => {
                                e.removeEventListener("load", o);
                                try {
                                    n.width = e.naturalWidth,
                                    n.height = e.naturalHeight,
                                    i.drawImage(e, 0, 0),
                                    C.rr_dataURL = n.toDataURL(p.type, p.quality)
                                } catch (r) {
                                    if ("anonymous" !== e.crossOrigin) {
                                        e.crossOrigin = "anonymous",
                                        e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o);
                                        return
                                    }
                                    console.warn("Cannot inline img src=".concat(t, "! Error: ").concat(r))
                                }
                                "anonymous" === e.crossOrigin && (r ? C.crossOrigin = r : e.removeAttribute("crossorigin"))
                            }
                            ;
                            e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o)
                        }
                        if (("audio" === I || "video" === I) && (C.rr_mediaState = e.paused ? "paused" : "played",
                        C.rr_mediaCurrentTime = e.currentTime),
                        !v && (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft),
                        e.scrollTop && (C.rr_scrollTop = e.scrollTop)),
                        M) {
                            let {width: t, height: r} = e.getBoundingClientRect();
                            C = {
                                class: C.class,
                                rr_width: "".concat(t, "px"),
                                rr_height: "".concat(r, "px")
                            }
                        }
                        "iframe" !== I || g(C.src) || (M || e.contentDocument || (C.rr_src = C.src),
                        delete C.src);
                        try {
                            customElements.get(I) && (r = !0)
                        } catch (e) {}
                        return {
                            type: m.Element,
                            tagName: I,
                            attributes: C,
                            childNodes: [],
                            isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                            needBlock: M,
                            rootId: S,
                            isCustom: r
                        }
                    }(e, {
                        doc: r,
                        blockClass: o,
                        blockSelector: a,
                        unblockSelector: l,
                        inlineStylesheet: y,
                        maskAttributeFn: u,
                        maskInputOptions: g,
                        maskInputFn: S,
                        dataURLOptions: _,
                        inlineImages: w,
                        recordCanvas: b,
                        keepIframeSrcFn: E,
                        newlyAddedElement: k,
                        rootId: M,
                        maskAllText: c,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: f
                    });
                case e.TEXT_NODE:
                    return function(e, t) {
                        let {maskAllText: r, maskTextClass: n, unmaskTextClass: i, maskTextSelector: s, unmaskTextSelector: o, maskTextFn: a, maskInputOptions: l, maskInputFn: c, rootId: u} = t
                          , d = e.parentNode && e.parentNode.tagName
                          , h = e.textContent
                          , p = "STYLE" === d || void 0
                          , f = "SCRIPT" === d || void 0
                          , y = "TEXTAREA" === d || void 0;
                        if (p && h) {
                            try {
                                e.nextSibling || e.previousSibling || G([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (h = $(e.parentNode.sheet))
                            } catch (t) {
                                console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(t), e)
                            }
                            h = eS(h, ek(t.doc))
                        }
                        f && (h = "SCRIPT_PLACEHOLDER");
                        let g = ex(e, n, s, i, o, r);
                        return p || f || y || !h || !g || (h = a ? a(h, e.parentElement) : h.replace(/[\S]/g, "*")),
                        y && h && (l.textarea || g) && (h = c ? c(h, e.parentNode) : h.replace(/[\S]/g, "*")),
                        "OPTION" === d && h && (h = et({
                            isMasked: ex(e, n, s, i, o, ee({
                                type: null,
                                tagName: d,
                                maskInputOptions: l
                            })),
                            element: e,
                            value: h,
                            maskInputFn: c
                        })),
                        {
                            type: m.Text,
                            textContent: h || "",
                            isStyle: p,
                            rootId: u
                        }
                    }(e, {
                        doc: r,
                        maskAllText: c,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: f,
                        maskTextFn: v,
                        maskInputOptions: g,
                        maskInputFn: S,
                        rootId: M
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: m.CDATA,
                        textContent: "",
                        rootId: M
                    };
                case e.COMMENT_NODE:
                    return {
                        type: m.Comment,
                        textContent: e.textContent || "",
                        rootId: M
                    };
                default:
                    return !1
                }
            }(e, {
                doc: s,
                mirror: o,
                blockClass: a,
                blockSelector: l,
                maskAllText: u,
                unblockSelector: c,
                maskTextClass: d,
                unmaskTextClass: h,
                maskTextSelector: p,
                unmaskTextSelector: f,
                inlineStylesheet: g,
                maskInputOptions: v,
                maskAttributeFn: S,
                maskTextFn: _,
                maskInputFn: w,
                dataURLOptions: E,
                inlineImages: k,
                recordCanvas: M,
                keepIframeSrcFn: A,
                newlyAddedElement: D
            });
            if (!N)
                return console.warn(e, "not serialized"),
                null;
            r = o.hasNode(e) ? o.getId(e) : !function(e, t) {
                if (t.comment && e.type === m.Comment)
                    return !0;
                if (e.type === m.Element) {
                    if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === ea(e.attributes.href)) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (eT(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === eT(e.attributes.name) || "icon" === eT(e.attributes.rel) || "apple-touch-icon" === eT(e.attributes.rel) || "shortcut icon" === eT(e.attributes.rel))))
                        return !0;
                    if ("meta" === e.tagName) {
                        if (t.headMetaDescKeywords && eT(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (eT(e.attributes.property).match(/^(og|twitter|fb):/) || eT(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === eT(e.attributes.name)))
                            return !0;
                        if (t.headMetaRobots && ("robots" === eT(e.attributes.name) || "googlebot" === eT(e.attributes.name) || "bingbot" === eT(e.attributes.name)))
                            return !0;
                        if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                            return !0;
                        else if (t.headMetaAuthorship && ("author" === eT(e.attributes.name) || "generator" === eT(e.attributes.name) || "framework" === eT(e.attributes.name) || "publisher" === eT(e.attributes.name) || "progid" === eT(e.attributes.name) || eT(e.attributes.property).match(/^article:/) || eT(e.attributes.property).match(/^product:/)))
                            return !0;
                        else if (t.headMetaVerification && ("google-site-verification" === eT(e.attributes.name) || "yandex-verification" === eT(e.attributes.name) || "csrf-token" === eT(e.attributes.name) || "p:domain_verify" === eT(e.attributes.name) || "verify-v1" === eT(e.attributes.name) || "verification" === eT(e.attributes.name) || "shopify-checkout-api-token" === eT(e.attributes.name)))
                            return !0
                    }
                }
                return !1
            }(N, b) && (O || N.type !== m.Text || N.isStyle || N.textContent.replace(/^\s+|\s+$/gm, "").length) ? ef() : -2;
            let L = Object.assign(N, {
                id: r
            });
            if (o.add(e, L),
            -2 === r)
                return null;
            I && I(e);
            let P = !y;
            if (L.type === m.Element) {
                P = P && !L.needBlock,
                delete L.needBlock;
                let t = e.shadowRoot;
                t && X(t) && (L.isShadowHost = !0)
            }
            if ((L.type === m.Document || L.type === m.Element) && P) {
                b.headWhitespace && L.type === m.Element && "head" === L.tagName && (O = !1);
                let t = {
                    doc: s,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    maskAllText: u,
                    unblockSelector: c,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: f,
                    skipChild: y,
                    inlineStylesheet: g,
                    maskInputOptions: v,
                    maskAttributeFn: S,
                    maskTextFn: _,
                    maskInputFn: w,
                    slimDOMOptions: b,
                    dataURLOptions: E,
                    inlineImages: k,
                    recordCanvas: M,
                    preserveWhiteSpace: O,
                    onSerialize: I,
                    onIframeLoad: C,
                    iframeLoadTimeout: R,
                    onStylesheetLoad: x,
                    stylesheetLoadTimeout: T,
                    keepIframeSrcFn: A
                };
                for (let r of Array.from(e.childNodes)) {
                    let e = eA(r, t);
                    e && L.childNodes.push(e)
                }
                if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                    for (let r of Array.from(e.shadowRoot.childNodes)) {
                        let n = eA(r, t);
                        n && (X(e.shadowRoot) && (n.isShadow = !0),
                        L.childNodes.push(n))
                    }
            }
            return e.parentNode && Y(e.parentNode) && X(e.parentNode) && (L.isShadow = !0),
            L.type === m.Element && "iframe" === L.tagName && function(e, t, r) {
                let n;
                let i = e.contentWindow;
                if (!i)
                    return;
                let s = !1;
                try {
                    n = i.document.readyState
                } catch (e) {
                    return
                }
                if ("complete" !== n) {
                    let n = eu( () => {
                        s || (t(),
                        s = !0)
                    }
                    , r);
                    e.addEventListener("load", () => {
                        ed(n),
                        s = !0,
                        t()
                    }
                    );
                    return
                }
                let o = "about:blank";
                if (i.location.href !== o || e.src === o || "" === e.src)
                    return eu(t, 0),
                    e.addEventListener("load", t);
                e.addEventListener("load", t)
            }(e, () => {
                let t = e.contentDocument;
                if (t && C) {
                    let r = eA(t, {
                        doc: t,
                        mirror: o,
                        blockClass: a,
                        blockSelector: l,
                        unblockSelector: c,
                        maskAllText: u,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: f,
                        skipChild: !1,
                        inlineStylesheet: g,
                        maskInputOptions: v,
                        maskAttributeFn: S,
                        maskTextFn: _,
                        maskInputFn: w,
                        slimDOMOptions: b,
                        dataURLOptions: E,
                        inlineImages: k,
                        recordCanvas: M,
                        preserveWhiteSpace: O,
                        onSerialize: I,
                        onIframeLoad: C,
                        iframeLoadTimeout: R,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: T,
                        keepIframeSrcFn: A
                    });
                    r && C(e, r)
                }
            }
            , R),
            L.type === m.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === ea(L.attributes.href)) && function(e, t, r) {
                let n, i = !1;
                try {
                    n = e.sheet
                } catch (e) {
                    return
                }
                if (n)
                    return;
                let s = eu( () => {
                    i || (t(),
                    i = !0)
                }
                , r);
                e.addEventListener("load", () => {
                    ed(s),
                    i = !0,
                    t()
                }
                )
            }(e, () => {
                if (x) {
                    let t = eA(e, {
                        doc: s,
                        mirror: o,
                        blockClass: a,
                        blockSelector: l,
                        unblockSelector: c,
                        maskAllText: u,
                        maskTextClass: d,
                        unmaskTextClass: h,
                        maskTextSelector: p,
                        unmaskTextSelector: f,
                        skipChild: !1,
                        inlineStylesheet: g,
                        maskInputOptions: v,
                        maskAttributeFn: S,
                        maskTextFn: _,
                        maskInputFn: w,
                        slimDOMOptions: b,
                        dataURLOptions: E,
                        inlineImages: k,
                        recordCanvas: M,
                        preserveWhiteSpace: O,
                        onSerialize: I,
                        onIframeLoad: C,
                        iframeLoadTimeout: R,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: T,
                        keepIframeSrcFn: A
                    });
                    t && x(e, t)
                }
            }
            , T),
            L
        }
        function eD(e) {
            let t;
            let r = e[0]
              , n = 1;
            for (; n < e.length; ) {
                let i = e[n]
                  , s = e[n + 1];
                if (n += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == r)
                    return;
                "access" === i || "optionalAccess" === i ? (t = r,
                r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s(function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    return r.call(t, ...n)
                }),
                t = void 0)
            }
            return r
        }
        function eO(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document
              , n = {
                capture: !0,
                passive: !0
            };
            return r.addEventListener(e, t, n),
            () => r.removeEventListener(e, t, n)
        }
        let eN = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording."
          , eL = {
            map: {},
            getId: () => (console.error(eN),
            -1),
            getNode: () => (console.error(eN),
            null),
            removeNodeFromMap() {
                console.error(eN)
            },
            has: () => (console.error(eN),
            !1),
            reset() {
                console.error(eN)
            }
        };
        function eP(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = null
              , i = 0;
            return function() {
                for (var s = arguments.length, o = Array(s), a = 0; a < s; a++)
                    o[a] = arguments[a];
                let l = Date.now();
                i || !1 !== r.leading || (i = l);
                let c = t - (l - i)
                  , u = this;
                c <= 0 || c > t ? (n && (function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    eZ("clearTimeout")(...t)
                }(n),
                n = null),
                i = l,
                e.apply(u, o)) : n || !1 === r.trailing || (n = e0( () => {
                    i = !1 === r.leading ? 0 : Date.now(),
                    n = null,
                    e.apply(u, o)
                }
                , c))
            }
        }
        function eB(e, t, r) {
            try {
                if (!(t in e))
                    return () => {}
                    ;
                let n = e[t]
                  , i = r(n);
                return "function" == typeof i && (i.prototype = i.prototype || {},
                Object.defineProperties(i, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: n
                    }
                })),
                e[t] = i,
                () => {
                    e[t] = n
                }
            } catch (e) {
                return () => {}
            }
        }
        window.Proxy && window.Reflect && (eL = new Proxy(eL,{
            get: (e, t, r) => ("map" === t && console.error(eN),
            Reflect.get(e, t, r))
        }));
        let eF = Date.now;
        function eU(e) {
            let t = e.document;
            return {
                left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : eD([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || eD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || eD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : eD([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || eD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || eD([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
            }
        }
        function eW() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        }
        function ez() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        }
        function ej(e) {
            return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
        }
        function eH(e, t, r, n, i) {
            if (!e)
                return !1;
            let s = ej(e);
            if (!s)
                return !1;
            let o = eR(t, r);
            if (!i) {
                let e = n && s.matches(n);
                return o(s) && !e
            }
            let a = eC(s, o)
              , l = -1;
            return !(a < 0) && (n && (l = eC(s, eR(null, n))),
            a > -1 && l < 0 || a < l)
        }
        function eq(e, t) {
            return -2 === t.getId(e)
        }
        function eV(e) {
            return !!e.changedTouches
        }
        function eK(e, t) {
            return !!("IFRAME" === e.nodeName && t.getMeta(e))
        }
        function eJ(e, t) {
            return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
        }
        function eG(e) {
            return !!eD([e, "optionalAccess", e => e.shadowRoot])
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) || (eF = () => new Date().getTime());
        class eY {
            getId(e) {
                return (0,
                g.h)(this.styleIDMap.get(e), () => -1)
            }
            has(e) {
                return this.styleIDMap.has(e)
            }
            add(e, t) {
                let r;
                return this.has(e) ? this.getId(e) : (r = void 0 === t ? this.id++ : t,
                this.styleIDMap.set(e, r),
                this.idStyleMap.set(r, e),
                r)
            }
            getStyle(e) {
                return this.idStyleMap.get(e) || null
            }
            reset() {
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map,
                this.id = 1
            }
            generateId() {
                return this.id++
            }
            constructor() {
                this.id = 1,
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map
            }
        }
        function eX(e) {
            let t = null;
            return eD([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
            t
        }
        function e$(e) {
            let t = e.ownerDocument;
            return !!t && (t.contains(e) || function(e) {
                let t = e.ownerDocument;
                if (!t)
                    return !1;
                let r = function(e) {
                    let t, r = e;
                    for (; t = eX(r); )
                        r = t;
                    return r
                }(e);
                return t.contains(r)
            }(e))
        }
        let eQ = {};
        function eZ(e) {
            let t = eQ[e];
            if (t)
                return t;
            let r = window.document
              , n = window[e];
            if (r && "function" == typeof r.createElement)
                try {
                    let t = r.createElement("iframe");
                    t.hidden = !0,
                    r.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (n = i[e]),
                    r.head.removeChild(t)
                } catch (e) {}
            return eQ[e] = n.bind(window)
        }
        function e0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return eZ("setTimeout")(...t)
        }
        var e1 = ((u = e1 || {})[u.DomContentLoaded = 0] = "DomContentLoaded",
        u[u.Load = 1] = "Load",
        u[u.FullSnapshot = 2] = "FullSnapshot",
        u[u.IncrementalSnapshot = 3] = "IncrementalSnapshot",
        u[u.Meta = 4] = "Meta",
        u[u.Custom = 5] = "Custom",
        u[u.Plugin = 6] = "Plugin",
        u)
          , e2 = ((d = e2 || {})[d.Mutation = 0] = "Mutation",
        d[d.MouseMove = 1] = "MouseMove",
        d[d.MouseInteraction = 2] = "MouseInteraction",
        d[d.Scroll = 3] = "Scroll",
        d[d.ViewportResize = 4] = "ViewportResize",
        d[d.Input = 5] = "Input",
        d[d.TouchMove = 6] = "TouchMove",
        d[d.MediaInteraction = 7] = "MediaInteraction",
        d[d.StyleSheetRule = 8] = "StyleSheetRule",
        d[d.CanvasMutation = 9] = "CanvasMutation",
        d[d.Font = 10] = "Font",
        d[d.Log = 11] = "Log",
        d[d.Drag = 12] = "Drag",
        d[d.StyleDeclaration = 13] = "StyleDeclaration",
        d[d.Selection = 14] = "Selection",
        d[d.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
        d[d.CustomElement = 16] = "CustomElement",
        d)
          , e3 = ((h = e3 || {})[h.MouseUp = 0] = "MouseUp",
        h[h.MouseDown = 1] = "MouseDown",
        h[h.Click = 2] = "Click",
        h[h.ContextMenu = 3] = "ContextMenu",
        h[h.DblClick = 4] = "DblClick",
        h[h.Focus = 5] = "Focus",
        h[h.Blur = 6] = "Blur",
        h[h.TouchStart = 7] = "TouchStart",
        h[h.TouchMove_Departed = 8] = "TouchMove_Departed",
        h[h.TouchEnd = 9] = "TouchEnd",
        h[h.TouchCancel = 10] = "TouchCancel",
        h)
          , e5 = ((p = e5 || {})[p.Mouse = 0] = "Mouse",
        p[p.Pen = 1] = "Pen",
        p[p.Touch = 2] = "Touch",
        p);
        class e8 {
            get(e) {
                if (e >= this.length)
                    throw Error("Position outside of list range");
                let t = this.head;
                for (let r = 0; r < e; r++)
                    t = function(e) {
                        let t;
                        let r = e[0]
                          , n = 1;
                        for (; n < e.length; ) {
                            let i = e[n]
                              , s = e[n + 1];
                            if (n += 2,
                            ("optionalAccess" === i || "optionalCall" === i) && null == r)
                                return;
                            "access" === i || "optionalAccess" === i ? (t = r,
                            r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s(function() {
                                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                                    n[i] = arguments[i];
                                return r.call(t, ...n)
                            }),
                            t = void 0)
                        }
                        return r
                    }([t, "optionalAccess", e => e.next]) || null;
                return t
            }
            addNode(e) {
                let t = {
                    value: e,
                    previous: null,
                    next: null
                };
                if (e.__ln = t,
                e.previousSibling && "__ln"in e.previousSibling) {
                    let r = e.previousSibling.__ln.next;
                    t.next = r,
                    t.previous = e.previousSibling.__ln,
                    e.previousSibling.__ln.next = t,
                    r && (r.previous = t)
                } else if (e.nextSibling && "__ln"in e.nextSibling && e.nextSibling.__ln.previous) {
                    let r = e.nextSibling.__ln.previous;
                    t.previous = r,
                    t.next = e.nextSibling.__ln,
                    e.nextSibling.__ln.previous = t,
                    r && (r.next = t)
                } else
                    this.head && (this.head.previous = t),
                    t.next = this.head,
                    this.head = t;
                null === t.next && (this.tail = t),
                this.length++
            }
            removeNode(e) {
                let t = e.__ln;
                this.head && (t.previous ? (t.previous.next = t.next,
                t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next,
                this.head ? this.head.previous = null : this.tail = null),
                e.__ln && delete e.__ln,
                this.length--)
            }
            constructor() {
                this.length = 0,
                this.head = null,
                this.tail = null
            }
        }
        let e6 = (e, t) => "".concat(e, "@").concat(t);
        class e4 {
            init(e) {
                ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                    this[t] = e[t]
                }
                )
            }
            freeze() {
                this.frozen = !0,
                this.canvasManager.freeze()
            }
            unfreeze() {
                this.frozen = !1,
                this.canvasManager.unfreeze(),
                this.emit()
            }
            isFrozen() {
                return this.frozen
            }
            lock() {
                this.locked = !0,
                this.canvasManager.lock()
            }
            unlock() {
                this.locked = !1,
                this.canvasManager.unlock(),
                this.emit()
            }
            reset() {
                this.shadowDomManager.reset(),
                this.canvasManager.reset()
            }
            constructor() {
                this.frozen = !1,
                this.locked = !1,
                this.texts = [],
                this.attributes = [],
                this.attributeMap = new WeakMap,
                this.removes = [],
                this.mapRemoves = [],
                this.movedMap = {},
                this.addedSet = new Set,
                this.movedSet = new Set,
                this.droppedSet = new Set,
                this.processMutations = e => {
                    e.forEach(this.processMutation),
                    this.emit()
                }
                ,
                this.emit = () => {
                    if (this.frozen || this.locked)
                        return;
                    let e = []
                      , t = new Set
                      , r = new e8
                      , n = e => {
                        let t = e
                          , r = -2;
                        for (; -2 === r; )
                            r = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return r
                    }
                      , i = i => {
                        if (!i.parentNode || !e$(i))
                            return;
                        let s = Y(i.parentNode) ? this.mirror.getId(eX(i)) : this.mirror.getId(i.parentNode)
                          , o = n(i);
                        if (-1 === s || -1 === o)
                            return r.addNode(i);
                        let a = eA(i, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                eK(e, this.mirror) && !eH(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e),
                                eJ(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                eG(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                            }
                            ,
                            onIframeLoad: (e, t) => {
                                eH(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(e, t),
                                e.contentWindow && this.canvasManager.addWindow(e.contentWindow),
                                this.shadowDomManager.observeAttachShadow(e))
                            }
                            ,
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            }
                        });
                        a && (e.push({
                            parentId: s,
                            nextId: o,
                            node: a
                        }),
                        t.add(a.id))
                    }
                    ;
                    for (; this.mapRemoves.length; )
                        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (let e of this.movedSet)
                        (!e9(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                    for (let e of this.addedSet)
                        te(this.droppedSet, e) || e9(this.removes, e, this.mirror) ? te(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                    let s = null;
                    for (; r.length; ) {
                        let e = null;
                        if (s) {
                            let t = this.mirror.getId(s.value.parentNode)
                              , r = n(s.value);
                            -1 !== t && -1 !== r && (e = s)
                        }
                        if (!e) {
                            let t = r.tail;
                            for (; t; ) {
                                let r = t;
                                if (t = t.previous,
                                r) {
                                    let t = this.mirror.getId(r.value.parentNode);
                                    if (-1 === n(r.value))
                                        continue;
                                    if (-1 !== t) {
                                        e = r;
                                        break
                                    }
                                    {
                                        let t = r.value;
                                        if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            let n = t.parentNode.host;
                                            if (-1 !== this.mirror.getId(n)) {
                                                e = r;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!e) {
                            for (; r.head; )
                                r.removeNode(r.head.value);
                            break
                        }
                        s = e.previous,
                        r.removeNode(e.value),
                        i(e.value)
                    }
                    let o = {
                        texts: this.texts.map(e => ({
                            id: this.mirror.getId(e.node),
                            value: e.value
                        })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        attributes: this.attributes.map(e => {
                            let {attributes: t} = e;
                            if ("string" == typeof t.style) {
                                let r = JSON.stringify(e.styleDiff)
                                  , n = JSON.stringify(e._unchangedStyles);
                                r.length < t.style.length && (r + n).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            }
                        }
                        ).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        removes: this.removes,
                        adds: e
                    };
                    (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [],
                    this.attributes = [],
                    this.attributeMap = new WeakMap,
                    this.removes = [],
                    this.addedSet = new Set,
                    this.movedSet = new Set,
                    this.droppedSet = new Set,
                    this.movedMap = {},
                    this.mutationCb(o))
                }
                ,
                this.processMutation = e => {
                    if (!eq(e.target, this.mirror))
                        switch (e.type) {
                        case "characterData":
                            {
                                let t = e.target.textContent;
                                eH(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                    value: ex(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, ej(e.target)) : t.replace(/[\S]/g, "*") : t,
                                    node: e.target
                                });
                                break
                            }
                        case "attributes":
                            {
                                let t = e.target
                                  , r = e.attributeName
                                  , n = e.target.getAttribute(r);
                                if ("value" === r) {
                                    let r = es(t)
                                      , i = t.tagName;
                                    n = eo(t, i, r);
                                    let s = ee({
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: i,
                                        type: r
                                    });
                                    n = et({
                                        isMasked: ex(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                        element: t,
                                        value: n,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (eH(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || n === e.oldValue)
                                    return;
                                let i = this.attributeMap.get(e.target);
                                if ("IFRAME" === t.tagName && "src" === r && !this.keepIframeSrcFn(n)) {
                                    if (t.contentDocument)
                                        return;
                                    r = "rr_src"
                                }
                                if (i || (i = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                },
                                this.attributes.push(i),
                                this.attributeMap.set(e.target, i)),
                                "type" === r && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"),
                                !eI(t.tagName, r) && (i.attributes[r] = eM(this.doc, er(t.tagName), er(r), n, t, this.maskAttributeFn),
                                "style" === r)) {
                                    if (!this.unattachedDoc)
                                        try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (e) {
                                            this.unattachedDoc = this.doc
                                        }
                                    let r = this.unattachedDoc.createElement("span");
                                    for (let n of (e.oldValue && r.setAttribute("style", e.oldValue),
                                    Array.from(t.style))) {
                                        let e = t.style.getPropertyValue(n)
                                          , s = t.style.getPropertyPriority(n);
                                        e !== r.style.getPropertyValue(n) || s !== r.style.getPropertyPriority(n) ? "" === s ? i.styleDiff[n] = e : i.styleDiff[n] = [e, s] : i._unchangedStyles[n] = [e, s]
                                    }
                                    for (let e of Array.from(r.style))
                                        "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                                }
                                break
                            }
                        case "childList":
                            if (eH(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                                return;
                            e.addedNodes.forEach(t => this.genAdds(t, e.target)),
                            e.removedNodes.forEach(t => {
                                let r = this.mirror.getId(t)
                                  , n = Y(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                eH(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || eq(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (e7(this.addedSet, t),
                                this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === r || function e(t, r) {
                                    if (Y(t))
                                        return !1;
                                    let n = r.getId(t);
                                    return !r.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, r))
                                }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[e6(r, n)] ? e7(this.movedSet, t) : this.removes.push({
                                    parentId: n,
                                    id: r,
                                    isShadow: !!(Y(e.target) && X(e.target)) || void 0
                                })),
                                this.mapRemoves.push(t))
                            }
                            )
                        }
                }
                ,
                this.genAdds = (e, t) => {
                    if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                        if (this.mirror.hasNode(e)) {
                            if (eq(e, this.mirror))
                                return;
                            this.movedSet.add(e);
                            let r = null;
                            t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)),
                            r && -1 !== r && (this.movedMap[e6(this.mirror.getId(e), r)] = !0)
                        } else
                            this.addedSet.add(e),
                            this.droppedSet.delete(e);
                        !eH(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)),
                        eG(e) && e.shadowRoot.childNodes.forEach(t => {
                            this.processedNodeManager.add(t, this),
                            this.genAdds(t, e)
                        }
                        ))
                    }
                }
            }
        }
        function e7(e, t) {
            e.delete(t),
            t.childNodes.forEach(t => e7(e, t))
        }
        function e9(e, t, r) {
            return 0 !== e.length && function(e, t, r) {
                let n = t.parentNode;
                for (; n; ) {
                    let t = r.getId(n);
                    if (e.some(e => e.id === t))
                        return !0;
                    n = n.parentNode
                }
                return !1
            }(e, t, r)
        }
        function te(e, t) {
            return 0 !== e.size && function e(t, r) {
                let {parentNode: n} = r;
                return !!n && (!!t.has(n) || e(t, n))
            }(e, t)
        }
        let tt = e => s ? function() {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
            try {
                return e(...r)
            } catch (e) {
                if (s && !0 === s(e))
                    return () => {}
                    ;
                throw e
            }
        }
        : e;
        function tr(e) {
            let t;
            let r = e[0]
              , n = 1;
            for (; n < e.length; ) {
                let i = e[n]
                  , s = e[n + 1];
                if (n += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == r)
                    return;
                "access" === i || "optionalAccess" === i ? (t = r,
                r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s(function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    return r.call(t, ...n)
                }),
                t = void 0)
            }
            return r
        }
        let tn = [];
        function ti(e) {
            try {
                if ("composedPath"in e) {
                    let t = e.composedPath();
                    if (t.length)
                        return t[0]
                } else if ("path"in e && e.path.length)
                    return e.path[0]
            } catch (e) {}
            return e && e.target
        }
        function ts(e, t) {
            let r = new e4;
            tn.push(r),
            r.init(e);
            let n = window.MutationObserver || window.__rrMutationObserver
              , i = tr([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
            i && window[i] && (n = window[i]);
            let s = new n(tt(t => {
                e.onMutation && !1 === e.onMutation(t) || r.processMutations.bind(r)(t)
            }
            ));
            return s.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }),
            s
        }
        function to(e) {
            let {scrollCb: t, doc: r, mirror: n, blockClass: i, blockSelector: s, unblockSelector: o, sampling: a} = e;
            return eO("scroll", tt(eP(tt(e => {
                let a = ti(e);
                if (!a || eH(a, i, s, o, !0))
                    return;
                let l = n.getId(a);
                if (a === r && r.defaultView) {
                    let e = eU(r.defaultView);
                    t({
                        id: l,
                        x: e.left,
                        y: e.top
                    })
                } else
                    t({
                        id: l,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
            }
            ), a.scroll || 100)), r)
        }
        let ta = ["INPUT", "TEXTAREA", "SELECT"]
          , tl = new WeakMap;
        function tc(e) {
            var t;
            return t = [],
            tp("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || tp("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || tp("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || tp("CSSConditionRule") && e.parentRule instanceof CSSConditionRule ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e)) : e.parentStyleSheet && t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)),
            t
        }
        function tu(e, t, r) {
            let n, i;
            return e ? (e.ownerNode ? n = t.getId(e.ownerNode) : i = r.getId(e),
            {
                styleId: i,
                id: n
            }) : {}
        }
        function td(e, t) {
            let {mirror: r, stylesheetManager: n} = e
              , i = null;
            i = "#document" === t.nodeName ? r.getId(t) : r.getId(t.host);
            let s = "#document" === t.nodeName ? tr([t, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : tr([t, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot])
              , o = tr([s, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(tr([s, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
            return null !== i && -1 !== i && s && o ? (Object.defineProperty(t, "adoptedStyleSheets", {
                configurable: o.configurable,
                enumerable: o.enumerable,
                get() {
                    return tr([o, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                },
                set(e) {
                    let t = tr([o, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                    if (null !== i && -1 !== i)
                        try {
                            n.adoptStyleSheets(e, i)
                        } catch (e) {}
                    return t
                }
            }),
            tt( () => {
                Object.defineProperty(t, "adoptedStyleSheets", {
                    configurable: o.configurable,
                    enumerable: o.enumerable,
                    get: o.get,
                    set: o.set
                })
            }
            )) : () => {}
        }
        function th(e) {
            let t;
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            let r = e.doc.defaultView;
            if (!r)
                return () => {}
                ;
            e.recordDOM && (t = ts(e, e.doc));
            let n = function(e) {
                let t, {mousemoveCb: r, sampling: n, doc: i, mirror: s} = e;
                if (!1 === n.mousemove)
                    return () => {}
                    ;
                let o = "number" == typeof n.mousemove ? n.mousemove : 50
                  , a = "number" == typeof n.mousemoveCallback ? n.mousemoveCallback : 500
                  , l = []
                  , c = eP(tt(e => {
                    let n = Date.now() - t;
                    r(l.map(e => (e.timeOffset -= n,
                    e)), e),
                    l = [],
                    t = null
                }
                ), a)
                  , u = tt(eP(tt(e => {
                    let r = ti(e)
                      , {clientX: n, clientY: i} = eV(e) ? e.changedTouches[0] : e;
                    t || (t = eF()),
                    l.push({
                        x: n,
                        y: i,
                        id: s.getId(r),
                        timeOffset: eF() - t
                    }),
                    c("undefined" != typeof DragEvent && e instanceof DragEvent ? e2.Drag : e instanceof MouseEvent ? e2.MouseMove : e2.TouchMove)
                }
                ), o, {
                    trailing: !1
                }))
                  , d = [eO("mousemove", u, i), eO("touchmove", u, i), eO("drag", u, i)];
                return tt( () => {
                    d.forEach(e => e())
                }
                )
            }(e)
              , i = function(e) {
                let {mouseInteractionCb: t, doc: r, mirror: n, blockClass: i, blockSelector: s, unblockSelector: o, sampling: a} = e;
                if (!1 === a.mouseInteraction)
                    return () => {}
                    ;
                let l = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction
                  , c = []
                  , u = null
                  , d = e => r => {
                    let a = ti(r);
                    if (eH(a, i, s, o, !0))
                        return;
                    let l = null
                      , c = e;
                    if ("pointerType"in r) {
                        switch (r.pointerType) {
                        case "mouse":
                            l = e5.Mouse;
                            break;
                        case "touch":
                            l = e5.Touch;
                            break;
                        case "pen":
                            l = e5.Pen
                        }
                        l === e5.Touch ? e3[e] === e3.MouseDown ? c = "TouchStart" : e3[e] === e3.MouseUp && (c = "TouchEnd") : e5.Pen
                    } else
                        eV(r) && (l = e5.Touch);
                    null !== l ? (u = l,
                    (c.startsWith("Touch") && l === e5.Touch || c.startsWith("Mouse") && l === e5.Mouse) && (l = null)) : e3[e] === e3.Click && (l = u,
                    u = null);
                    let d = eV(r) ? r.changedTouches[0] : r;
                    if (!d)
                        return;
                    let h = n.getId(a)
                      , {clientX: p, clientY: f} = d;
                    tt(t)({
                        type: e3[c],
                        id: h,
                        x: p,
                        y: f,
                        ...null !== l && {
                            pointerType: l
                        }
                    })
                }
                ;
                return Object.keys(e3).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== l[e]).forEach(e => {
                    let t = er(e)
                      , n = d(e);
                    if (window.PointerEvent)
                        switch (e3[e]) {
                        case e3.MouseDown:
                        case e3.MouseUp:
                            t = t.replace("mouse", "pointer");
                            break;
                        case e3.TouchStart:
                        case e3.TouchEnd:
                            return
                        }
                    c.push(eO(t, n, r))
                }
                ),
                tt( () => {
                    c.forEach(e => e())
                }
                )
            }(e)
              , s = to(e)
              , o = function(e, t) {
                let {viewportResizeCb: r} = e
                  , {win: n} = t
                  , i = -1
                  , s = -1;
                return eO("resize", tt(eP(tt( () => {
                    let e = eW()
                      , t = ez();
                    (i !== e || s !== t) && (r({
                        width: Number(t),
                        height: Number(e)
                    }),
                    i = e,
                    s = t)
                }
                ), 200)), n)
            }(e, {
                win: r
            })
              , a = function(e) {
                let {inputCb: t, doc: r, mirror: n, blockClass: i, blockSelector: s, unblockSelector: o, ignoreClass: a, ignoreSelector: l, maskInputOptions: c, maskInputFn: u, sampling: d, userTriggeredOnInput: h, maskTextClass: p, unmaskTextClass: f, maskTextSelector: m, unmaskTextSelector: y} = e;
                function g(e) {
                    let t = ti(e)
                      , n = e.isTrusted
                      , d = t && en(t.tagName);
                    if ("OPTION" === d && (t = t.parentElement),
                    !t || !d || 0 > ta.indexOf(d) || eH(t, i, s, o, !0))
                        return;
                    let g = t;
                    if (g.classList.contains(a) || l && g.matches(l))
                        return;
                    let S = es(t)
                      , _ = eo(g, d, S)
                      , w = !1
                      , b = ee({
                        maskInputOptions: c,
                        tagName: d,
                        type: S
                    })
                      , E = ex(t, p, m, f, y, b);
                    ("radio" === S || "checkbox" === S) && (w = t.checked),
                    _ = et({
                        isMasked: E,
                        element: t,
                        value: _,
                        maskInputFn: u
                    }),
                    v(t, h ? {
                        text: _,
                        isChecked: w,
                        userTriggered: n
                    } : {
                        text: _,
                        isChecked: w
                    });
                    let k = t.name;
                    "radio" === S && k && w && r.querySelectorAll('input[type="radio"][name="'.concat(k, '"]')).forEach(e => {
                        if (e !== t) {
                            let t = et({
                                isMasked: E,
                                element: e,
                                value: eo(e, d, S),
                                maskInputFn: u
                            });
                            v(e, h ? {
                                text: t,
                                isChecked: !w,
                                userTriggered: !1
                            } : {
                                text: t,
                                isChecked: !w
                            })
                        }
                    }
                    )
                }
                function v(e, r) {
                    let i = tl.get(e);
                    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                        tl.set(e, r);
                        let i = n.getId(e);
                        tt(t)({
                            ...r,
                            id: i
                        })
                    }
                }
                let S = ("last" === d.input ? ["change"] : ["input", "change"]).map(e => eO(e, tt(g), r))
                  , _ = r.defaultView;
                if (!_)
                    return () => {
                        S.forEach(e => e())
                    }
                    ;
                let w = _.Object.getOwnPropertyDescriptor(_.HTMLInputElement.prototype, "value")
                  , b = [[_.HTMLInputElement.prototype, "value"], [_.HTMLInputElement.prototype, "checked"], [_.HTMLSelectElement.prototype, "value"], [_.HTMLTextAreaElement.prototype, "value"], [_.HTMLSelectElement.prototype, "selectedIndex"], [_.HTMLOptionElement.prototype, "selected"]];
                return w && w.set && S.push(...b.map(e => (function e(t, r, n, i) {
                    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window
                      , o = s.Object.getOwnPropertyDescriptor(t, r);
                    return s.Object.defineProperty(t, r, i ? n : {
                        set(e) {
                            e0( () => {
                                n.set.call(this, e)
                            }
                            , 0),
                            o && o.set && o.set.call(this, e)
                        }
                    }),
                    () => e(t, r, o || {}, !0)
                }
                )(e[0], e[1], {
                    set() {
                        tt(g)({
                            target: this,
                            isTrusted: !1
                        })
                    }
                }, !1, _))),
                tt( () => {
                    S.forEach(e => e())
                }
                )
            }(e)
              , l = function(e) {
                let {mediaInteractionCb: t, blockClass: r, blockSelector: n, unblockSelector: i, mirror: s, sampling: o, doc: a} = e
                  , l = tt(e => eP(tt(o => {
                    let a = ti(o);
                    if (!a || eH(a, r, n, i, !0))
                        return;
                    let {currentTime: l, volume: c, muted: u, playbackRate: d} = a;
                    t({
                        type: e,
                        id: s.getId(a),
                        currentTime: l,
                        volume: c,
                        muted: u,
                        playbackRate: d
                    })
                }
                ), o.media || 500))
                  , c = [eO("play", l(0), a), eO("pause", l(1), a), eO("seeked", l(2), a), eO("volumechange", l(3), a), eO("ratechange", l(4), a)];
                return tt( () => {
                    c.forEach(e => e())
                }
                )
            }(e)
              , c = () => {}
              , u = () => {}
              , d = () => {}
              , h = () => {}
            ;
            e.recordDOM && (c = function(e, t) {
                let r, n, {styleSheetRuleCb: i, mirror: s, stylesheetManager: o} = e, {win: a} = t;
                if (!a.CSSStyleSheet || !a.CSSStyleSheet.prototype)
                    return () => {}
                    ;
                let l = a.CSSStyleSheet.prototype.insertRule;
                a.CSSStyleSheet.prototype.insertRule = new Proxy(l,{
                    apply: tt( (e, t, r) => {
                        let[n,a] = r
                          , {id: l, styleId: c} = tu(t, s, o.styleMirror);
                        return (l && -1 !== l || c && -1 !== c) && i({
                            id: l,
                            styleId: c,
                            adds: [{
                                rule: n,
                                index: a
                            }]
                        }),
                        e.apply(t, r)
                    }
                    )
                });
                let c = a.CSSStyleSheet.prototype.deleteRule;
                a.CSSStyleSheet.prototype.deleteRule = new Proxy(c,{
                    apply: tt( (e, t, r) => {
                        let[n] = r
                          , {id: a, styleId: l} = tu(t, s, o.styleMirror);
                        return (a && -1 !== a || l && -1 !== l) && i({
                            id: a,
                            styleId: l,
                            removes: [{
                                index: n
                            }]
                        }),
                        e.apply(t, r)
                    }
                    )
                }),
                a.CSSStyleSheet.prototype.replace && (r = a.CSSStyleSheet.prototype.replace,
                a.CSSStyleSheet.prototype.replace = new Proxy(r,{
                    apply: tt( (e, t, r) => {
                        let[n] = r
                          , {id: a, styleId: l} = tu(t, s, o.styleMirror);
                        return (a && -1 !== a || l && -1 !== l) && i({
                            id: a,
                            styleId: l,
                            replace: n
                        }),
                        e.apply(t, r)
                    }
                    )
                })),
                a.CSSStyleSheet.prototype.replaceSync && (n = a.CSSStyleSheet.prototype.replaceSync,
                a.CSSStyleSheet.prototype.replaceSync = new Proxy(n,{
                    apply: tt( (e, t, r) => {
                        let[n] = r
                          , {id: a, styleId: l} = tu(t, s, o.styleMirror);
                        return (a && -1 !== a || l && -1 !== l) && i({
                            id: a,
                            styleId: l,
                            replaceSync: n
                        }),
                        e.apply(t, r)
                    }
                    )
                }));
                let u = {};
                tf("CSSGroupingRule") ? u.CSSGroupingRule = a.CSSGroupingRule : (tf("CSSMediaRule") && (u.CSSMediaRule = a.CSSMediaRule),
                tf("CSSConditionRule") && (u.CSSConditionRule = a.CSSConditionRule),
                tf("CSSSupportsRule") && (u.CSSSupportsRule = a.CSSSupportsRule));
                let d = {};
                return Object.entries(u).forEach(e => {
                    let[t,r] = e;
                    d[t] = {
                        insertRule: r.prototype.insertRule,
                        deleteRule: r.prototype.deleteRule
                    },
                    r.prototype.insertRule = new Proxy(d[t].insertRule,{
                        apply: tt( (e, t, r) => {
                            let[n,a] = r
                              , {id: l, styleId: c} = tu(t.parentStyleSheet, s, o.styleMirror);
                            return (l && -1 !== l || c && -1 !== c) && i({
                                id: l,
                                styleId: c,
                                adds: [{
                                    rule: n,
                                    index: [...tc(t), a || 0]
                                }]
                            }),
                            e.apply(t, r)
                        }
                        )
                    }),
                    r.prototype.deleteRule = new Proxy(d[t].deleteRule,{
                        apply: tt( (e, t, r) => {
                            let[n] = r
                              , {id: a, styleId: l} = tu(t.parentStyleSheet, s, o.styleMirror);
                            return (a && -1 !== a || l && -1 !== l) && i({
                                id: a,
                                styleId: l,
                                removes: [{
                                    index: [...tc(t), n]
                                }]
                            }),
                            e.apply(t, r)
                        }
                        )
                    })
                }
                ),
                tt( () => {
                    a.CSSStyleSheet.prototype.insertRule = l,
                    a.CSSStyleSheet.prototype.deleteRule = c,
                    r && (a.CSSStyleSheet.prototype.replace = r),
                    n && (a.CSSStyleSheet.prototype.replaceSync = n),
                    Object.entries(u).forEach(e => {
                        let[t,r] = e;
                        r.prototype.insertRule = d[t].insertRule,
                        r.prototype.deleteRule = d[t].deleteRule
                    }
                    )
                }
                )
            }(e, {
                win: r
            }),
            u = td(e, e.doc),
            d = function(e, t) {
                let {styleDeclarationCb: r, mirror: n, ignoreCSSAttributes: i, stylesheetManager: s} = e
                  , {win: o} = t
                  , a = o.CSSStyleDeclaration.prototype.setProperty;
                o.CSSStyleDeclaration.prototype.setProperty = new Proxy(a,{
                    apply: tt( (e, t, o) => {
                        let[l,c,u] = o;
                        if (i.has(l))
                            return a.apply(t, [l, c, u]);
                        let {id: d, styleId: h} = tu(tr([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), n, s.styleMirror);
                        return (d && -1 !== d || h && -1 !== h) && r({
                            id: d,
                            styleId: h,
                            set: {
                                property: l,
                                value: c,
                                priority: u
                            },
                            index: tc(t.parentRule)
                        }),
                        e.apply(t, o)
                    }
                    )
                });
                let l = o.CSSStyleDeclaration.prototype.removeProperty;
                return o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(l,{
                    apply: tt( (e, t, o) => {
                        let[a] = o;
                        if (i.has(a))
                            return l.apply(t, [a]);
                        let {id: c, styleId: u} = tu(tr([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), n, s.styleMirror);
                        return (c && -1 !== c || u && -1 !== u) && r({
                            id: c,
                            styleId: u,
                            remove: {
                                property: a
                            },
                            index: tc(t.parentRule)
                        }),
                        e.apply(t, o)
                    }
                    )
                }),
                tt( () => {
                    o.CSSStyleDeclaration.prototype.setProperty = a,
                    o.CSSStyleDeclaration.prototype.removeProperty = l
                }
                )
            }(e, {
                win: r
            }),
            e.collectFonts && (h = function(e) {
                let {fontCb: t, doc: r} = e
                  , n = r.defaultView;
                if (!n)
                    return () => {}
                    ;
                let i = []
                  , s = new WeakMap
                  , o = n.FontFace;
                n.FontFace = function(e, t, r) {
                    let n = new o(e,t,r);
                    return s.set(n, {
                        family: e,
                        buffer: "string" != typeof t,
                        descriptors: r,
                        fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                    }),
                    n
                }
                ;
                let a = eB(r.fonts, "add", function(e) {
                    return function(r) {
                        return e0(tt( () => {
                            let e = s.get(r);
                            e && (t(e),
                            s.delete(r))
                        }
                        ), 0),
                        e.apply(this, [r])
                    }
                });
                return i.push( () => {
                    n.FontFace = o
                }
                ),
                i.push(a),
                tt( () => {
                    i.forEach(e => e())
                }
                )
            }(e)));
            let p = function(e) {
                let {doc: t, mirror: r, blockClass: n, blockSelector: i, unblockSelector: s, selectionCb: o} = e
                  , a = !0
                  , l = tt( () => {
                    let e = t.getSelection();
                    if (!e || a && tr([e, "optionalAccess", e => e.isCollapsed]))
                        return;
                    a = e.isCollapsed || !1;
                    let l = []
                      , c = e.rangeCount || 0;
                    for (let t = 0; t < c; t++) {
                        let {startContainer: o, startOffset: a, endContainer: c, endOffset: u} = e.getRangeAt(t);
                        eH(o, n, i, s, !0) || eH(c, n, i, s, !0) || l.push({
                            start: r.getId(o),
                            startOffset: a,
                            end: r.getId(c),
                            endOffset: u
                        })
                    }
                    o({
                        ranges: l
                    })
                }
                );
                return l(),
                eO("selectionchange", l)
            }(e)
              , f = function(e) {
                let {doc: t, customElementCb: r} = e
                  , n = t.defaultView;
                return n && n.customElements ? eB(n.customElements, "define", function(e) {
                    return function(t, n, i) {
                        try {
                            r({
                                define: {
                                    name: t
                                }
                            })
                        } catch (e) {}
                        return e.apply(this, [t, n, i])
                    }
                }) : () => {}
            }(e)
              , m = [];
            for (let t of e.plugins)
                m.push(t.observer(t.callback, r, t.options));
            return tt( () => {
                tn.forEach(e => e.reset()),
                tr([t, "optionalAccess", e => e.disconnect, "call", e => e()]),
                n(),
                i(),
                s(),
                o(),
                a(),
                l(),
                c(),
                u(),
                d(),
                h(),
                p(),
                f(),
                m.forEach(e => e())
            }
            )
        }
        function tp(e) {
            return void 0 !== window[e]
        }
        function tf(e) {
            return !!(void 0 !== window[e] && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
        }
        class tm {
            getId(e, t, r, n) {
                let i = r || this.getIdToRemoteIdMap(e)
                  , s = n || this.getRemoteIdToIdMap(e)
                  , o = i.get(t);
                return o || (o = this.generateIdFn(),
                i.set(t, o),
                s.set(o, t)),
                o
            }
            getIds(e, t) {
                let r = this.getIdToRemoteIdMap(e)
                  , n = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getId(e, t, r, n))
            }
            getRemoteId(e, t, r) {
                let n = r || this.getRemoteIdToIdMap(e);
                return "number" != typeof t ? t : n.get(t) || -1
            }
            getRemoteIds(e, t) {
                let r = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getRemoteId(e, t, r))
            }
            reset(e) {
                if (!e) {
                    this.iframeIdToRemoteIdMap = new WeakMap,
                    this.iframeRemoteIdToIdMap = new WeakMap;
                    return
                }
                this.iframeIdToRemoteIdMap.delete(e),
                this.iframeRemoteIdToIdMap.delete(e)
            }
            getIdToRemoteIdMap(e) {
                let t = this.iframeIdToRemoteIdMap.get(e);
                return t || (t = new Map,
                this.iframeIdToRemoteIdMap.set(e, t)),
                t
            }
            getRemoteIdToIdMap(e) {
                let t = this.iframeRemoteIdToIdMap.get(e);
                return t || (t = new Map,
                this.iframeRemoteIdToIdMap.set(e, t)),
                t
            }
            constructor(e) {
                this.generateIdFn = e,
                this.iframeIdToRemoteIdMap = new WeakMap,
                this.iframeRemoteIdToIdMap = new WeakMap
            }
        }
        function ty(e) {
            let t;
            let r = e[0]
              , n = 1;
            for (; n < e.length; ) {
                let i = e[n]
                  , s = e[n + 1];
                if (n += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == r)
                    return;
                "access" === i || "optionalAccess" === i ? (t = r,
                r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s(function() {
                    for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    return r.call(t, ...n)
                }),
                t = void 0)
            }
            return r
        }
        class tg {
            addIframe() {}
            addLoadListener() {}
            attachIframe() {}
            constructor() {
                this.crossOriginIframeMirror = new tm(ef),
                this.crossOriginIframeRootIdMap = new WeakMap
            }
        }
        class tv {
            addIframe(e) {
                this.iframes.set(e, !0),
                e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
            }
            addLoadListener(e) {
                this.loadListener = e
            }
            attachIframe(e, t) {
                this.mutationCb({
                    adds: [{
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }),
                ty([this, "access", e => e.loadListener, "optionalCall", t => t(e)]),
                e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
            }
            handleMessage(e) {
                if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source)
                    return;
                let t = this.crossOriginIframeMap.get(e.source);
                if (!t)
                    return;
                let r = this.transformCrossOriginEvent(t, e.data.event);
                r && this.wrappedEmit(r, e.data.isCheckout)
            }
            transformCrossOriginEvent(e, t) {
                switch (t.type) {
                case e1.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        let r = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, r),
                        this.patchRootIdOnNode(t.data.node, r),
                        {
                            timestamp: t.timestamp,
                            type: e1.IncrementalSnapshot,
                            data: {
                                source: e2.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case e1.Meta:
                case e1.Load:
                case e1.DomContentLoaded:
                    break;
                case e1.Plugin:
                    return t;
                case e1.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]),
                    t;
                case e1.IncrementalSnapshot:
                    switch (t.data.source) {
                    case e2.Mutation:
                        return t.data.adds.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                            this.replaceIdOnNode(t.node, e);
                            let r = this.crossOriginIframeRootIdMap.get(e);
                            r && this.patchRootIdOnNode(t.node, r)
                        }
                        ),
                        t.data.removes.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "id"])
                        }
                        ),
                        t.data.attributes.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t.data.texts.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t;
                    case e2.Drag:
                    case e2.TouchMove:
                    case e2.MouseMove:
                        return t.data.positions.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t;
                    case e2.ViewportResize:
                        return !1;
                    case e2.MediaInteraction:
                    case e2.MouseInteraction:
                    case e2.Scroll:
                    case e2.CanvasMutation:
                    case e2.Input:
                        return this.replaceIds(t.data, e, ["id"]),
                        t;
                    case e2.StyleSheetRule:
                    case e2.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleId"]),
                        t;
                    case e2.Font:
                        return t;
                    case e2.Selection:
                        return t.data.ranges.forEach(t => {
                            this.replaceIds(t, e, ["start", "end"])
                        }
                        ),
                        t;
                    case e2.AdoptedStyleSheet:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleIds"]),
                        ty([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t(t => {
                            this.replaceStyleIds(t, e, ["styleId"])
                        }
                        )]),
                        t
                    }
                }
                return !1
            }
            replace(e, t, r, n) {
                for (let i of n)
                    (Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(r, t[i]) : t[i] = e.getId(r, t[i]));
                return t
            }
            replaceIds(e, t, r) {
                return this.replace(this.crossOriginIframeMirror, e, t, r)
            }
            replaceStyleIds(e, t, r) {
                return this.replace(this.crossOriginIframeStyleMirror, e, t, r)
            }
            replaceIdOnNode(e, t) {
                this.replaceIds(e, t, ["id", "rootId"]),
                "childNodes"in e && e.childNodes.forEach(e => {
                    this.replaceIdOnNode(e, t)
                }
                )
            }
            patchRootIdOnNode(e, t) {
                e.type === m.Document || e.rootId || (e.rootId = t),
                "childNodes"in e && e.childNodes.forEach(e => {
                    this.patchRootIdOnNode(e, t)
                }
                )
            }
            constructor(e) {
                this.iframes = new WeakMap,
                this.crossOriginIframeMap = new WeakMap,
                this.crossOriginIframeMirror = new tm(ef),
                this.crossOriginIframeRootIdMap = new WeakMap,
                this.mutationCb = e.mutationCb,
                this.wrappedEmit = e.wrappedEmit,
                this.stylesheetManager = e.stylesheetManager,
                this.recordCrossOriginIframes = e.recordCrossOriginIframes,
                this.crossOriginIframeStyleMirror = new tm(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
                this.mirror = e.mirror,
                this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
            }
        }
        class tS {
            init() {}
            addShadowRoot() {}
            observeAttachShadow() {}
            reset() {}
        }
        class t_ {
            init() {
                this.reset(),
                this.patchAttachShadow(Element, document)
            }
            addShadowRoot(e, t) {
                if (!X(e) || this.shadowDoms.has(e))
                    return;
                this.shadowDoms.add(e),
                this.bypassOptions.canvasManager.addShadowRoot(e);
                let r = ts({
                    ...this.bypassOptions,
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, e);
                this.restoreHandlers.push( () => r.disconnect()),
                this.restoreHandlers.push(to({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })),
                e0( () => {
                    e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)),
                    this.restoreHandlers.push(td({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e))
                }
                , 0)
            }
            observeAttachShadow(e) {
                e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
            }
            patchAttachShadow(e, t) {
                let r = this;
                this.restoreHandlers.push(eB(e.prototype, "attachShadow", function(e) {
                    return function(n) {
                        let i = e.call(this, n);
                        return this.shadowRoot && e$(this) && r.addShadowRoot(this.shadowRoot, t),
                        i
                    }
                }))
            }
            reset() {
                this.restoreHandlers.forEach(e => {
                    try {
                        e()
                    } catch (e) {}
                }
                ),
                this.restoreHandlers = [],
                this.shadowDoms = new WeakSet,
                this.bypassOptions.canvasManager.resetShadowRoots()
            }
            constructor(e) {
                this.shadowDoms = new WeakSet,
                this.restoreHandlers = [],
                this.mutationCb = e.mutationCb,
                this.scrollCb = e.scrollCb,
                this.bypassOptions = e.bypassOptions,
                this.mirror = e.mirror,
                this.init()
            }
        }
        class tw {
            reset() {}
            freeze() {}
            unfreeze() {}
            lock() {}
            unlock() {}
            snapshot() {}
            addWindow() {}
            addShadowRoot() {}
            resetShadowRoots() {}
        }
        class tb {
            attachLinkElement(e, t) {
                "_cssText"in t.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{
                        id: t.id,
                        attributes: t.attributes
                    }]
                }),
                this.trackLinkElement(e)
            }
            trackLinkElement(e) {
                this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e),
                this.trackStylesheetInLinkElement(e))
            }
            adoptStyleSheets(e, t) {
                if (0 === e.length)
                    return;
                let r = {
                    id: t,
                    styleIds: []
                }
                  , n = [];
                for (let t of e) {
                    let e;
                    this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t),
                    n.push({
                        styleId: e,
                        rules: Array.from(t.rules || CSSRule, (e, t) => ({
                            rule: Q(e),
                            index: t
                        }))
                    })),
                    r.styleIds.push(e)
                }
                n.length > 0 && (r.styles = n),
                this.adoptedStyleSheetCb(r)
            }
            reset() {
                this.styleMirror.reset(),
                this.trackedLinkElements = new WeakSet
            }
            trackStylesheetInLinkElement(e) {}
            constructor(e) {
                this.trackedLinkElements = new WeakSet,
                this.styleMirror = new eY,
                this.mutationCb = e.mutationCb,
                this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
            }
        }
        class tE {
            inOtherBuffer(e, t) {
                let r = this.nodeMap.get(e);
                return r && Array.from(r).some(e => e !== t)
            }
            add(e, t) {
                this.active || (this.active = !0,
                function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    eZ("requestAnimationFrame")(...t)
                }( () => {
                    this.nodeMap = new WeakMap,
                    this.active = !1
                }
                )),
                this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
            }
            destroy() {}
            constructor() {
                this.nodeMap = new WeakMap,
                this.active = !1
            }
        }
        try {
            if (2 !== Array.from([1], e => 2 * e)[0]) {
                let e = document.createElement("iframe");
                document.body.appendChild(e),
                Array.from = (0,
                v.x)([e, "access", e => e.contentWindow, "optionalAccess", e => e.Array, "access", e => e.from]) || Array.from,
                document.body.removeChild(e)
            }
        } catch (e) {
            console.debug("Unable to override Array.from", e)
        }
        let tk = new Z;
        function tM() {
            let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {emit: r, checkoutEveryNms: n, checkoutEveryNth: i, blockClass: l="rr-block", blockSelector: c=null, unblockSelector: u=null, ignoreClass: d="rr-ignore", ignoreSelector: h=null, maskAllText: p=!1, maskTextClass: f="rr-mask", unmaskTextClass: m=null, maskTextSelector: y=null, unmaskTextSelector: g=null, inlineStylesheet: S=!0, maskAllInputs: _, maskInputOptions: w, slimDOMOptions: b, maskAttributeFn: E, maskInputFn: k, maskTextFn: M, maxCanvasSize: I=null, packFn: C, sampling: R={}, dataURLOptions: x={}, mousemoveWait: T, recordDOM: A=!0, recordCanvas: D=!1, recordCrossOriginIframes: O=!1, recordAfter: N="DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load", userTriggeredOnInput: L=!1, collectFonts: P=!1, inlineImages: B=!1, plugins: F, keepIframeSrcFn: U= () => !1, ignoreCSSAttributes: W=new Set([]), errorHandler: z, onMutation: j, getCanvasManager: H} = t;
            s = z;
            let q = !O || window.parent === window
              , V = !1;
            if (!q)
                try {
                    window.parent.document && (V = !1)
                } catch (e) {
                    V = !0
                }
            if (q && !r)
                throw Error("emit function is required");
            if (!q && !V)
                return () => {}
                ;
            void 0 !== T && void 0 === R.mousemove && (R.mousemove = T),
            tk.reset();
            let K = !0 === _ ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== w ? w : {}
              , J = !0 === b || "all" === b ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === b,
                headMetaDescKeywords: "all" === b
            } : b || {};
            !function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if ("NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
                "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                !Node.prototype.contains) {
                    var t = this;
                    Node.prototype.contains = function() {
                        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                            r[n] = arguments[n];
                        let i = r[0];
                        if (!(0 in r))
                            throw TypeError("1 argument is required");
                        do
                            if (t === i)
                                return !0;
                        while (i = i && i.parentNode);
                        return !1
                    }
                }
            }();
            let G = 0
              , Y = e => {
                for (let t of F || [])
                    t.eventProcessor && (e = t.eventProcessor(e));
                return C && !V && (e = C(e)),
                e
            }
            ;
            o = (t, s) => {
                if (t.timestamp = eF(),
                (0,
                v.x)([tn, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) && t.type !== e1.FullSnapshot && !(t.type === e1.IncrementalSnapshot && t.data.source === e2.Mutation) && tn.forEach(e => e.unfreeze()),
                q)
                    (0,
                    v.x)([r, "optionalCall", e => e(Y(t), s)]);
                else if (V) {
                    let e = {
                        type: "rrweb",
                        event: Y(t),
                        origin: window.location.origin,
                        isCheckout: s
                    };
                    window.parent.postMessage(e, "*")
                }
                if (t.type === e1.FullSnapshot)
                    e = t,
                    G = 0;
                else if (t.type === e1.IncrementalSnapshot) {
                    if (t.data.source === e2.Mutation && t.data.isAttachIframe)
                        return;
                    G++;
                    let r = i && G >= i
                      , s = n && e && t.timestamp - e.timestamp > n;
                    (r || s) && es(!0)
                }
            }
            ;
            let X = e => {
                o({
                    type: e1.IncrementalSnapshot,
                    data: {
                        source: e2.Mutation,
                        ...e
                    }
                })
            }
              , $ = e => o({
                type: e1.IncrementalSnapshot,
                data: {
                    source: e2.Scroll,
                    ...e
                }
            })
              , Q = e => o({
                type: e1.IncrementalSnapshot,
                data: {
                    source: e2.CanvasMutation,
                    ...e
                }
            })
              , ee = new tb({
                mutationCb: X,
                adoptedStyleSheetCb: e => o({
                    type: e1.IncrementalSnapshot,
                    data: {
                        source: e2.AdoptedStyleSheet,
                        ...e
                    }
                })
            })
              , et = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new tg : new tv({
                mirror: tk,
                mutationCb: X,
                stylesheetManager: ee,
                recordCrossOriginIframes: O,
                wrappedEmit: o
            });
            for (let e of F || [])
                e.getMirror && e.getMirror({
                    nodeMirror: tk,
                    crossOriginIframeMirror: et.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: et.crossOriginIframeStyleMirror
                });
            let er = new tE
              , en = function(e, t) {
                try {
                    return e ? e(t) : new tw
                } catch (e) {
                    return console.warn("Unable to initialize CanvasManager"),
                    new tw
                }
            }(H, {
                mirror: tk,
                win: window,
                mutationCb: e => o({
                    type: e1.IncrementalSnapshot,
                    data: {
                        source: e2.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: D,
                blockClass: l,
                blockSelector: c,
                unblockSelector: u,
                maxCanvasSize: I,
                sampling: R.canvas,
                dataURLOptions: x,
                errorHandler: z
            })
              , ei = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new tS : new t_({
                mutationCb: X,
                scrollCb: $,
                bypassOptions: {
                    onMutation: j,
                    blockClass: l,
                    blockSelector: c,
                    unblockSelector: u,
                    maskAllText: p,
                    maskTextClass: f,
                    unmaskTextClass: m,
                    maskTextSelector: y,
                    unmaskTextSelector: g,
                    inlineStylesheet: S,
                    maskInputOptions: K,
                    dataURLOptions: x,
                    maskAttributeFn: E,
                    maskTextFn: M,
                    maskInputFn: k,
                    recordCanvas: D,
                    inlineImages: B,
                    sampling: R,
                    slimDOMOptions: J,
                    iframeManager: et,
                    stylesheetManager: ee,
                    canvasManager: en,
                    keepIframeSrcFn: U,
                    processedNodeManager: er
                },
                mirror: tk
            })
              , es = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!A)
                    return;
                o({
                    type: e1.Meta,
                    data: {
                        href: window.location.href,
                        width: ez(),
                        height: eW()
                    }
                }, e),
                ee.reset(),
                ei.init(),
                tn.forEach(e => e.lock());
                let t = function(e, t) {
                    let {mirror: r=new Z, blockClass: n="rr-block", blockSelector: i=null, unblockSelector: s=null, maskAllText: o=!1, maskTextClass: a="rr-mask", unmaskTextClass: l=null, maskTextSelector: c=null, unmaskTextSelector: u=null, inlineStylesheet: d=!0, inlineImages: h=!1, recordCanvas: p=!1, maskAllInputs: f=!1, maskAttributeFn: m, maskTextFn: y, maskInputFn: g, slimDOM: v=!1, dataURLOptions: S, preserveWhiteSpace: _, onSerialize: w, onIframeLoad: b, iframeLoadTimeout: E, onStylesheetLoad: k, stylesheetLoadTimeout: M, keepIframeSrcFn: I= () => !1} = t || {};
                    return eA(e, {
                        doc: e,
                        mirror: r,
                        blockClass: n,
                        blockSelector: i,
                        unblockSelector: s,
                        maskAllText: o,
                        maskTextClass: a,
                        unmaskTextClass: l,
                        maskTextSelector: c,
                        unmaskTextSelector: u,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === f ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === f ? {} : f,
                        maskAttributeFn: m,
                        maskTextFn: y,
                        maskInputFn: g,
                        slimDOMOptions: !0 === v || "all" === v ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === v,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === v ? {} : v,
                        dataURLOptions: S,
                        inlineImages: h,
                        recordCanvas: p,
                        preserveWhiteSpace: _,
                        onSerialize: w,
                        onIframeLoad: b,
                        iframeLoadTimeout: E,
                        onStylesheetLoad: k,
                        stylesheetLoadTimeout: M,
                        keepIframeSrcFn: I,
                        newlyAddedElement: !1
                    })
                }(document, {
                    mirror: tk,
                    blockClass: l,
                    blockSelector: c,
                    unblockSelector: u,
                    maskAllText: p,
                    maskTextClass: f,
                    unmaskTextClass: m,
                    maskTextSelector: y,
                    unmaskTextSelector: g,
                    inlineStylesheet: S,
                    maskAllInputs: K,
                    maskAttributeFn: E,
                    maskInputFn: k,
                    maskTextFn: M,
                    slimDOM: J,
                    dataURLOptions: x,
                    recordCanvas: D,
                    inlineImages: B,
                    onSerialize: e => {
                        eK(e, tk) && et.addIframe(e),
                        eJ(e, tk) && ee.trackLinkElement(e),
                        eG(e) && ei.addShadowRoot(e.shadowRoot, document)
                    }
                    ,
                    onIframeLoad: (e, t) => {
                        et.attachIframe(e, t),
                        e.contentWindow && en.addWindow(e.contentWindow),
                        ei.observeAttachShadow(e)
                    }
                    ,
                    onStylesheetLoad: (e, t) => {
                        ee.attachLinkElement(e, t)
                    }
                    ,
                    keepIframeSrcFn: U
                });
                if (!t)
                    return console.warn("Failed to snapshot the document");
                o({
                    type: e1.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: eU(window)
                    }
                }),
                tn.forEach(e => e.unlock()),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ee.adoptStyleSheets(document.adoptedStyleSheets, tk.getId(document))
            };
            a = es;
            try {
                let e = []
                  , t = e => tt(th)({
                    onMutation: j,
                    mutationCb: X,
                    mousemoveCb: (e, t) => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: $,
                    viewportResizeCb: e => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: Q,
                    fontCb: e => o({
                        type: e1.IncrementalSnapshot,
                        data: {
                            source: e2.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        o({
                            type: e1.IncrementalSnapshot,
                            data: {
                                source: e2.Selection,
                                ...e
                            }
                        })
                    }
                    ,
                    customElementCb: e => {
                        o({
                            type: e1.IncrementalSnapshot,
                            data: {
                                source: e2.CustomElement,
                                ...e
                            }
                        })
                    }
                    ,
                    blockClass: l,
                    ignoreClass: d,
                    ignoreSelector: h,
                    maskAllText: p,
                    maskTextClass: f,
                    unmaskTextClass: m,
                    maskTextSelector: y,
                    unmaskTextSelector: g,
                    maskInputOptions: K,
                    inlineStylesheet: S,
                    sampling: R,
                    recordDOM: A,
                    recordCanvas: D,
                    inlineImages: B,
                    userTriggeredOnInput: L,
                    collectFonts: P,
                    doc: e,
                    maskAttributeFn: E,
                    maskInputFn: k,
                    maskTextFn: M,
                    keepIframeSrcFn: U,
                    blockSelector: c,
                    unblockSelector: u,
                    slimDOMOptions: J,
                    dataURLOptions: x,
                    mirror: tk,
                    iframeManager: et,
                    stylesheetManager: ee,
                    shadowDomManager: ei,
                    processedNodeManager: er,
                    canvasManager: en,
                    ignoreCSSAttributes: W,
                    plugins: (0,
                    v.x)([F, "optionalAccess", e => e.filter, "call", e => e(e => e.observer), "optionalAccess", e => e.map, "call", e => e(e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => o({
                            type: e1.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    }))]) || []
                }, {});
                et.addLoadListener(r => {
                    try {
                        e.push(t(r.contentDocument))
                    } catch (e) {
                        console.warn(e)
                    }
                }
                );
                let r = () => {
                    es(),
                    e.push(t(document))
                }
                ;
                return "interactive" === document.readyState || "complete" === document.readyState ? r() : (e.push(eO("DOMContentLoaded", () => {
                    o({
                        type: e1.DomContentLoaded,
                        data: {}
                    }),
                    "DOMContentLoaded" === N && r()
                }
                )),
                e.push(eO("load", () => {
                    o({
                        type: e1.Load,
                        data: {}
                    }),
                    "load" === N && r()
                }
                , window))),
                () => {
                    e.forEach(e => e()),
                    er.destroy(),
                    a = void 0,
                    s = void 0
                }
            } catch (e) {
                console.warn(e)
            }
        }
        tM.mirror = tk,
        tM.takeFullSnapshot = function(e) {
            if (!a)
                throw Error("please take full snapshot after start recording");
            a(e)
        }
        ;
        let tI = ["info", "warn", "error", "log"];
        function tC(e) {
            return e > 9999999999 ? e : 1e3 * e
        }
        function tR(e) {
            return e > 9999999999 ? e / 1e3 : e
        }
        function tx(e, t) {
            "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
            e.addUpdate( () => (e.throttledAddEvent({
                type: e1.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: {
                    tag: "breadcrumb",
                    payload: (0,
                    x.Fv)(t, 10, 1e3)
                }
            }),
            "console" === t.category)))
        }
        function tT(e) {
            return e.closest("button,a") || e
        }
        function tA(e) {
            let t = tD(e);
            return t && t instanceof Element ? tT(t) : t
        }
        function tD(e) {
            return "object" == typeof e && e && "target"in e ? e.target : e
        }
        !function() {
            let e = {
                exception: () => void 0,
                infoTick: () => void 0,
                setConfig: e => {
                    e.captureExceptions,
                    e.traceInternals
                }
            };
            tI.forEach(t => {
                e[t] = () => void 0
            }
            )
        }();
        let tO = new Set([e2.Mutation, e2.StyleSheetRule, e2.StyleDeclaration, e2.AdoptedStyleSheet, e2.CanvasMutation, e2.Selection, e2.MediaInteraction]);
        class tN {
            addListeners() {
                var e;
                let t = (e = () => {
                    this._lastMutation = tP()
                }
                ,
                l || (l = [],
                (0,
                T.hl)(q, "open", function(e) {
                    return function() {
                        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                            r[n] = arguments[n];
                        if (l)
                            try {
                                l.forEach(e => e())
                            } catch (e) {}
                        return e.apply(q, r)
                    }
                })),
                l.push(e),
                () => {
                    let t = l ? l.indexOf(e) : -1;
                    t > -1 && l.splice(t, 1)
                }
                );
                this._teardown = () => {
                    t(),
                    this._clicks = [],
                    this._lastMutation = 0,
                    this._lastScroll = 0
                }
            }
            removeListeners() {
                this._teardown && this._teardown(),
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
            }
            handleClick(e, t) {
                var r;
                if (r = this._ignoreSelector,
                !tL.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || r && t.matches(r) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp))
                    return;
                let n = {
                    timestamp: tR(e.timestamp),
                    clickBreadcrumb: e,
                    clickCount: 0,
                    node: t
                };
                this._clicks.some(e => e.node === n.node && 1 > Math.abs(e.timestamp - n.timestamp)) || (this._clicks.push(n),
                1 === this._clicks.length && this._scheduleCheckClicks())
            }
            registerMutation() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this._lastMutation = tR(e)
            }
            registerScroll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this._lastScroll = tR(e)
            }
            registerClick(e) {
                let t = tT(e);
                this._handleMultiClick(t)
            }
            _handleMultiClick(e) {
                this._getClicks(e).forEach(e => {
                    e.clickCount++
                }
                )
            }
            _getClicks(e) {
                return this._clicks.filter(t => t.node === e)
            }
            _checkClicks() {
                let e = []
                  , t = tP();
                for (let r of (this._clicks.forEach(r => {
                    !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0),
                    !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0),
                    r.timestamp + this._timeout <= t && e.push(r)
                }
                ),
                e)) {
                    let e = this._clicks.indexOf(r);
                    e > -1 && (this._generateBreadcrumbs(r),
                    this._clicks.splice(e, 1))
                }
                this._clicks.length && this._scheduleCheckClicks()
            }
            _generateBreadcrumbs(e) {
                let t = this._replay
                  , r = e.scrollAfter && e.scrollAfter <= this._scollTimeout
                  , n = e.mutationAfter && e.mutationAfter <= this._threshold
                  , {clickCount: i, clickBreadcrumb: s} = e;
                if (!r && !n) {
                    let r = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout)
                      , n = r < 1e3 * this._timeout ? "mutation" : "timeout"
                      , o = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.slowClickDetected",
                        data: {
                            ...s.data,
                            url: q.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: r,
                            endReason: n,
                            clickCount: i || 1
                        }
                    };
                    this._addBreadcrumbEvent(t, o);
                    return
                }
                if (i > 1) {
                    let e = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.multiClick",
                        data: {
                            ...s.data,
                            url: q.location.href,
                            route: t.getCurrentRoute(),
                            clickCount: i,
                            metric: !0
                        }
                    };
                    this._addBreadcrumbEvent(t, e)
                }
            }
            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
                this._checkClickTimeout = (0,
                U.iK)( () => this._checkClicks(), 1e3)
            }
            constructor(e, t, r=tx) {
                this._lastMutation = 0,
                this._lastScroll = 0,
                this._clicks = [],
                this._timeout = t.timeout / 1e3,
                this._threshold = t.threshold / 1e3,
                this._scollTimeout = t.scrollTimeout / 1e3,
                this._replay = e,
                this._ignoreSelector = t.ignoreSelector,
                this._addBreadcrumbEvent = r
            }
        }
        let tL = ["A", "BUTTON", "INPUT"];
        function tP() {
            return Date.now() / 1e3
        }
        function tB(e) {
            return {
                timestamp: Date.now() / 1e3,
                type: "default",
                ...e
            }
        }
        (f = y || (y = {}))[f.Document = 0] = "Document",
        f[f.DocumentType = 1] = "DocumentType",
        f[f.Element = 2] = "Element",
        f[f.Text = 3] = "Text",
        f[f.CDATA = 4] = "CDATA",
        f[f.Comment = 5] = "Comment";
        let tF = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"])
          , tU = e => t => {
            if (!e.isEnabled())
                return;
            let r = function(e) {
                let {target: t, message: r} = function(e) {
                    let t;
                    let r = "click" === e.name
                      , n = null;
                    try {
                        n = r ? tA(e.event) : tD(e.event),
                        t = (0,
                        A.Rt)(n, {
                            maxStringLength: 200
                        }) || "<unknown>"
                    } catch (e) {
                        t = "<unknown>"
                    }
                    return {
                        target: n,
                        message: t
                    }
                }(e);
                return tB({
                    category: "ui.".concat(e.name),
                    ...tW(t, r)
                })
            }(t);
            if (!r)
                return;
            let n = "click" === t.name
              , i = n ? t.event : void 0;
            n && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && function(e, t, r) {
                e.handleClick(t, r)
            }(e.clickDetector, r, tA(t.event)),
            tx(e, r)
        }
        ;
        function tW(e, t) {
            let r = tM.mirror.getId(e)
              , n = r && tM.mirror.getNode(r)
              , i = n && tM.mirror.getMeta(n)
              , s = i && i.type === y.Element ? i : null;
            return {
                message: t,
                data: s ? {
                    nodeId: r,
                    node: {
                        id: r,
                        tagName: s.tagName,
                        textContent: Array.from(s.childNodes).map(e => e.type === y.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                        attributes: function(e) {
                            let t = {};
                            for (let r in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]),
                            e)
                                if (tF.has(r)) {
                                    let n = r;
                                    ("data-testid" === r || "data-test-id" === r) && (n = "testId"),
                                    t[n] = e[r]
                                }
                            return t
                        }(s.attributes)
                    }
                } : {}
            }
        }
        let tz = {
            resource: function(e) {
                let {entryType: t, initiatorType: r, name: n, responseEnd: i, startTime: s, decodedBodySize: o, encodedBodySize: a, responseStatus: l, transferSize: c} = e;
                return ["fetch", "xmlhttprequest"].includes(r) ? null : {
                    type: "".concat(t, ".").concat(r),
                    start: tq(s),
                    end: tq(i),
                    name: n,
                    data: {
                        size: c,
                        statusCode: l,
                        decodedBodySize: o,
                        encodedBodySize: a
                    }
                }
            },
            paint: function(e) {
                let {duration: t, entryType: r, name: n, startTime: i} = e
                  , s = tq(i);
                return {
                    type: r,
                    name: n,
                    start: s,
                    end: s + t,
                    data: void 0
                }
            },
            navigation: function(e) {
                let {entryType: t, name: r, decodedBodySize: n, duration: i, domComplete: s, encodedBodySize: o, domContentLoadedEventStart: a, domContentLoadedEventEnd: l, domInteractive: c, loadEventStart: u, loadEventEnd: d, redirectCount: h, startTime: p, transferSize: f, type: m} = e;
                return 0 === i ? null : {
                    type: "".concat(t, ".").concat(m),
                    start: tq(p),
                    end: tq(s),
                    name: r,
                    data: {
                        size: f,
                        decodedBodySize: n,
                        encodedBodySize: o,
                        duration: i,
                        domInteractive: c,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: l,
                        loadEventStart: u,
                        loadEventEnd: d,
                        domComplete: s,
                        redirectCount: h
                    }
                }
            }
        };
        function tj(e, t) {
            return r => {
                let {metric: n} = r;
                t.replayPerformanceEntries.push(e(n))
            }
        }
        function tH(e) {
            let t = tz[e.entryType];
            return t ? t(e) : null
        }
        function tq(e) {
            return ((D.Z1 || q.performance.timeOrigin) + e) / 1e3
        }
        function tV(e) {
            let t = e.entries[e.entries.length - 1];
            return tY(e, "largest-contentful-paint", t && t.element ? [t.element] : void 0)
        }
        function tK(e) {
            let t = []
              , r = [];
            for (let n of e.entries)
                if (void 0 !== n.sources) {
                    let e = [];
                    for (let t of n.sources)
                        if (t.node) {
                            r.push(t.node);
                            let n = tM.mirror.getId(t.node);
                            n && e.push(n)
                        }
                    t.push({
                        value: n.value,
                        nodeIds: e.length ? e : void 0
                    })
                }
            return tY(e, "cumulative-layout-shift", r, t)
        }
        function tJ(e) {
            let t = e.entries[e.entries.length - 1];
            return tY(e, "first-input-delay", t && t.target ? [t.target] : void 0)
        }
        function tG(e) {
            let t = e.entries[e.entries.length - 1];
            return tY(e, "interaction-to-next-paint", t && t.target ? [t.target] : void 0)
        }
        function tY(e, t, r, n) {
            let i = e.value
              , s = e.rating
              , o = tq(i);
            return {
                type: "web-vital",
                name: t,
                start: o,
                end: o,
                data: {
                    value: i,
                    size: i,
                    rating: s,
                    nodeIds: r ? r.map(e => tM.mirror.getId(e)) : void 0,
                    attributions: n
                }
            }
        }
        class tX extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of ".concat(2e7, "."))
            }
        }
        class t$ {
            get hasEvents() {
                return this.events.length > 0
            }
            get type() {
                return "sync"
            }
            destroy() {
                this.events = []
            }
            async addEvent(e) {
                let t = JSON.stringify(e).length;
                if (this._totalSize += t,
                this._totalSize > 2e7)
                    throw new tX;
                this.events.push(e)
            }
            finish() {
                return new Promise(e => {
                    let t = this.events;
                    this.clear(),
                    e(JSON.stringify(t))
                }
                )
            }
            clear() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            getEarliestTimestamp() {
                let e = this.events.map(e => e.timestamp).sort()[0];
                return e ? tC(e) : null
            }
            constructor() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1
            }
        }
        class tQ {
            ensureReady() {
                return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise( (e, t) => {
                    this._worker.addEventListener("message", r => {
                        let {data: n} = r;
                        n.success ? e() : t()
                    }
                    , {
                        once: !0
                    }),
                    this._worker.addEventListener("error", e => {
                        t(e)
                    }
                    , {
                        once: !0
                    })
                }
                )),
                this._ensureReadyPromise
            }
            destroy() {
                this._worker.terminate()
            }
            postMessage(e, t) {
                let r = this._getAndIncrementId();
                return new Promise( (n, i) => {
                    let s = t => {
                        let {data: o} = t;
                        if (o.method === e && o.id === r) {
                            if (this._worker.removeEventListener("message", s),
                            !o.success) {
                                i(Error("Error in compression worker"));
                                return
                            }
                            n(o.response)
                        }
                    }
                    ;
                    this._worker.addEventListener("message", s),
                    this._worker.postMessage({
                        id: r,
                        method: e,
                        arg: t
                    })
                }
                )
            }
            _getAndIncrementId() {
                return this._id++
            }
            constructor(e) {
                this._worker = e,
                this._id = 0
            }
        }
        class tZ {
            get hasEvents() {
                return !!this._earliestTimestamp
            }
            get type() {
                return "worker"
            }
            ensureReady() {
                return this._worker.ensureReady()
            }
            destroy() {
                this._worker.destroy()
            }
            addEvent(e) {
                let t = tC(e.timestamp);
                (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                let r = JSON.stringify(e);
                return (this._totalSize += r.length,
                this._totalSize > 2e7) ? Promise.reject(new tX) : this._sendEventToWorker(r)
            }
            finish() {
                return this._finishRequest()
            }
            clear() {
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1,
                this._worker.postMessage("clear").then(null, e => {}
                )
            }
            getEarliestTimestamp() {
                return this._earliestTimestamp
            }
            _sendEventToWorker(e) {
                return this._worker.postMessage("addEvent", e)
            }
            async _finishRequest() {
                let e = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null,
                this._totalSize = 0,
                e
            }
            constructor(e) {
                this._worker = new tQ(e),
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1
            }
        }
        class t0 {
            get type() {
                return this._used.type
            }
            get hasEvents() {
                return this._used.hasEvents
            }
            get hasCheckout() {
                return this._used.hasCheckout
            }
            set hasCheckout(e) {
                this._used.hasCheckout = e
            }
            destroy() {
                this._fallback.destroy(),
                this._compression.destroy()
            }
            clear() {
                return this._used.clear()
            }
            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp()
            }
            addEvent(e) {
                return this._used.addEvent(e)
            }
            async finish() {
                return await this.ensureWorkerIsLoaded(),
                this._used.finish()
            }
            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise
            }
            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady()
                } catch (e) {
                    return
                }
                await this._switchToCompressionWorker()
            }
            async _switchToCompressionWorker() {
                let {events: e, hasCheckout: t} = this._fallback
                  , r = [];
                for (let t of e)
                    r.push(this._compression.addEvent(t));
                this._compression.hasCheckout = t,
                this._used = this._compression;
                try {
                    await Promise.all(r),
                    this._fallback.clear()
                } catch (e) {}
            }
            constructor(e) {
                this._fallback = new t$,
                this._compression = new tZ(e),
                this._used = this._fallback,
                this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
            }
        }
        function t1() {
            try {
                return "sessionStorage"in q && !!q.sessionStorage
            } catch (e) {
                return !1
            }
        }
        function t2(e) {
            return void 0 !== e && Math.random() < e
        }
        function t3(e) {
            let t = Date.now()
              , r = e.id || (0,
            O.DM)()
              , n = e.started || t
              , i = e.lastActivity || t;
            return {
                id: r,
                started: n,
                lastActivity: i,
                segmentId: e.segmentId || 0,
                sampled: e.sampled,
                previousSessionId: e.previousSessionId
            }
        }
        function t5(e) {
            if (t1())
                try {
                    q.sessionStorage.setItem(V, JSON.stringify(e))
                } catch (e) {}
        }
        function t8(e) {
            let {sessionSampleRate: t, allowBuffering: r, stickySession: n=!1} = e
              , {previousSessionId: i} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , s = t3({
                sampled: t2(t) ? "session" : !!r && "buffer",
                previousSessionId: i
            });
            return n && t5(s),
            s
        }
        function t6(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
            return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= r
        }
        function t4(e, t) {
            let {maxReplayDuration: r, sessionIdleExpire: n, targetTime: i=Date.now()} = t;
            return t6(e.started, r, i) || t6(e.lastActivity, n, i)
        }
        function t7(e, t) {
            let {sessionIdleExpire: r, maxReplayDuration: n} = t;
            return !!t4(e, {
                sessionIdleExpire: r,
                maxReplayDuration: n
            }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
        }
        function t9(e, t) {
            let {sessionIdleExpire: r, maxReplayDuration: n, previousSessionId: i} = e
              , s = t.stickySession && function() {
                if (!t1())
                    return null;
                try {
                    let e = q.sessionStorage.getItem(V);
                    if (!e)
                        return null;
                    let t = JSON.parse(e);
                    return t3(t)
                } catch (e) {
                    return null
                }
            }();
            return s ? t7(s, {
                sessionIdleExpire: r,
                maxReplayDuration: n
            }) ? t8(t, {
                previousSessionId: s.id
            }) : s : t8(t, {
                previousSessionId: i
            })
        }
        function re(e, t, r) {
            return !!rr(e, t) && (rt(e, t, r),
            !0)
        }
        async function rt(e, t, r) {
            if (!e.eventBuffer)
                return null;
            try {
                r && "buffer" === e.recordingMode && e.eventBuffer.clear(),
                r && (e.eventBuffer.hasCheckout = !0);
                let n = e.getOptions()
                  , i = function(e, t) {
                    try {
                        if ("function" == typeof t && e.type === e1.Custom)
                            return t(e)
                    } catch (e) {
                        return null
                    }
                    return e
                }(t, n.beforeAddRecordingEvent);
                if (!i)
                    return;
                return await e.eventBuffer.addEvent(i)
            } catch (n) {
                let t = n && n instanceof tX ? "addEventSizeExceeded" : "addEvent";
                e.handleException(n),
                await e.stop({
                    reason: t
                });
                let r = (0,
                _.s3)();
                r && r.recordDroppedEvent("internal_sdk_error", "replay")
            }
        }
        function rr(e, t) {
            if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
                return !1;
            let r = tC(t.timestamp);
            return !(r + e.timeouts.sessionIdlePause < Date.now()) && !(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration)
        }
        function rn(e) {
            return "transaction" === e.type
        }
        function ri(e) {
            return "feedback" === e.type
        }
        function rs(e) {
            return !!e.category
        }
        function ro(e, t) {
            return t.map(t => {
                let {type: r, start: n, end: i, name: s, data: o} = t
                  , a = e.throttledAddEvent({
                    type: e1.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {
                            op: r,
                            description: s,
                            startTimestamp: n,
                            endTimestamp: i,
                            data: o
                        }
                    }
                });
                return "string" == typeof a ? Promise.resolve(null) : a
            }
            )
        }
        function ra(e, t) {
            var r;
            e.isEnabled() && null !== t && (r = t.name,
            (0,
            w.W)(r, (0,
            _.s3)()) || e.addUpdate( () => (ro(e, [t]),
            !0)))
        }
        function rl(e) {
            if (!e)
                return;
            let t = new TextEncoder;
            try {
                if ("string" == typeof e)
                    return t.encode(e).length;
                if (e instanceof URLSearchParams)
                    return t.encode(e.toString()).length;
                if (e instanceof FormData) {
                    let r = ry(e);
                    return t.encode(r).length
                }
                if (e instanceof Blob)
                    return e.size;
                if (e instanceof ArrayBuffer)
                    return e.byteLength
            } catch (e) {}
        }
        function rc(e) {
            if (!e)
                return;
            let t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t
        }
        function ru(e) {
            try {
                if ("string" == typeof e)
                    return [e];
                if (e instanceof URLSearchParams)
                    return [e.toString()];
                if (e instanceof FormData)
                    return [ry(e)];
                if (!e)
                    return [void 0]
            } catch (e) {
                return [void 0, "BODY_PARSE_ERROR"]
            }
            return [void 0, "UNPARSEABLE_BODY_TYPE"]
        }
        function rd(e, t) {
            if (!e)
                return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
            let r = {
                ...e._meta
            }
              , n = r.warnings || [];
            return r.warnings = [...n, t],
            e._meta = r,
            e
        }
        function rh(e, t) {
            if (!t)
                return null;
            let {startTimestamp: r, endTimestamp: n, url: i, method: s, statusCode: o, request: a, response: l} = t;
            return {
                type: e,
                start: r / 1e3,
                end: n / 1e3,
                name: i,
                data: (0,
                T.Jr)({
                    method: s,
                    statusCode: o,
                    request: a,
                    response: l
                })
            }
        }
        function rp(e) {
            return {
                headers: {},
                size: e,
                _meta: {
                    warnings: ["URL_SKIPPED"]
                }
            }
        }
        function rf(e, t, r) {
            if (!t && 0 === Object.keys(e).length)
                return;
            if (!t)
                return {
                    headers: e
                };
            if (!r)
                return {
                    headers: e,
                    size: t
                };
            let n = {
                headers: e,
                size: t
            }
              , {body: i, warnings: s} = function(e) {
                if (!e || "string" != typeof e)
                    return {
                        body: e
                    };
                let t = e.length > 15e4
                  , r = function(e) {
                    let t = e[0]
                      , r = e[e.length - 1];
                    return "[" === t && "]" === r || "{" === t && "}" === r
                }(e);
                if (t) {
                    let t = e.slice(0, 15e4);
                    return r ? {
                        body: t,
                        warnings: ["MAYBE_JSON_TRUNCATED"]
                    } : {
                        body: "".concat(t, "…"),
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (r)
                    try {
                        return {
                            body: JSON.parse(e)
                        }
                    } catch (e) {}
                return {
                    body: e
                }
            }(r);
            return n.body = i,
            s && s.length > 0 && (n._meta = {
                warnings: s
            }),
            n
        }
        function rm(e, t) {
            return Object.entries(e).reduce( (r, n) => {
                let[i,s] = n
                  , o = i.toLowerCase();
                return t.includes(o) && e[i] && (r[o] = s),
                r
            }
            , {})
        }
        function ry(e) {
            return new URLSearchParams(e).toString()
        }
        function rg(e, t) {
            let r = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q.document.baseURI;
                if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(q.location.origin))
                    return e;
                let r = new URL(e,t);
                if (r.origin !== new URL(t).origin)
                    return e;
                let n = r.href;
                return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n
            }(e);
            return (0,
            N.U0)(r, t)
        }
        async function rv(e, t, r) {
            try {
                let n = await rS(e, t, r)
                  , i = rh("resource.fetch", n);
                ra(r.replay, i)
            } catch (e) {}
        }
        async function rS(e, t, r) {
            let n = Date.now()
              , {startTimestamp: i=n, endTimestamp: s=n} = t
              , {url: o, method: a, status_code: l=0, request_body_size: c, response_body_size: u} = e.data
              , d = rg(o, r.networkDetailAllowUrls) && !rg(o, r.networkDetailDenyUrls);
            return {
                startTimestamp: i,
                endTimestamp: s,
                url: o,
                method: a,
                statusCode: l,
                request: d ? function(e, t, r) {
                    let {networkCaptureBodies: n, networkRequestHeaders: i} = e
                      , s = t ? 1 === t.length && "string" != typeof t[0] ? rk(t[0], i) : 2 === t.length ? rk(t[1], i) : {} : {};
                    if (!n)
                        return rf(s, r, void 0);
                    let[o,a] = ru(rb(t))
                      , l = rf(s, r, o);
                    return a ? rd(l, a) : l
                }(r, t.input, c) : rp(c),
                response: await r_(d, r, t.response, u)
            }
        }
        async function r_(e, t, r, n) {
            let {networkCaptureBodies: i, networkResponseHeaders: s} = t;
            if (!e && void 0 !== n)
                return rp(n);
            let o = r ? rE(r.headers, s) : {};
            if (!r || !i && void 0 !== n)
                return rf(o, n, void 0);
            let[a,l] = await rw(r)
              , c = function(e, t) {
                let {networkCaptureBodies: r, responseBodySize: n, captureDetails: i, headers: s} = t;
                try {
                    let t = e && e.length && void 0 === n ? rl(e) : n;
                    if (!i)
                        return rp(t);
                    if (r)
                        return rf(s, t, e);
                    return rf(s, t, void 0)
                } catch (e) {
                    return rf(s, n, void 0)
                }
            }(a, {
                networkCaptureBodies: i,
                responseBodySize: n,
                captureDetails: e,
                headers: o
            });
            return l ? rd(c, l) : c
        }
        async function rw(e) {
            let t = function(e) {
                try {
                    return e.clone()
                } catch (e) {}
            }(e);
            if (!t)
                return [void 0, "BODY_PARSE_ERROR"];
            try {
                return [await new Promise( (e, r) => {
                    let n = (0,
                    U.iK)( () => r(Error("Timeout while trying to read response body")), 500);
                    rM(t).then(t => e(t), e => r(e)).finally( () => clearTimeout(n))
                }
                )]
            } catch (e) {
                if (e instanceof Error && e.message.indexOf("Timeout") > -1)
                    return [void 0, "BODY_PARSE_TIMEOUT"];
                return [void 0, "BODY_PARSE_ERROR"]
            }
        }
        function rb() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (2 === e.length && "object" == typeof e[1])
                return e[1].body
        }
        function rE(e, t) {
            let r = {};
            return t.forEach(t => {
                e.get(t) && (r[t] = e.get(t))
            }
            ),
            r
        }
        function rk(e, t) {
            if (!e)
                return {};
            let r = e.headers;
            return r ? r instanceof Headers ? rE(r, t) : Array.isArray(r) ? {} : rm(r, t) : {}
        }
        async function rM(e) {
            return await e.text()
        }
        async function rI(e, t, r) {
            try {
                let n = function(e, t, r) {
                    let n = Date.now()
                      , {startTimestamp: i=n, endTimestamp: s=n, input: o, xhr: a} = t
                      , {url: l, method: c, status_code: u=0, request_body_size: d, response_body_size: h} = e.data;
                    if (!l)
                        return null;
                    if (!a || !rg(l, r.networkDetailAllowUrls) || rg(l, r.networkDetailDenyUrls)) {
                        let e = rp(d);
                        return {
                            startTimestamp: i,
                            endTimestamp: s,
                            url: l,
                            method: c,
                            statusCode: u,
                            request: e,
                            response: rp(h)
                        }
                    }
                    let p = a[z.xU]
                      , f = p ? rm(p.request_headers, r.networkRequestHeaders) : {}
                      , m = rm(function(e) {
                        let t = e.getAllResponseHeaders();
                        return t ? t.split("\r\n").reduce( (e, t) => {
                            let[r,n] = t.split(": ");
                            return n && (e[r.toLowerCase()] = n),
                            e
                        }
                        , {}) : {}
                    }(a), r.networkResponseHeaders)
                      , [y,g] = r.networkCaptureBodies ? ru(o) : [void 0]
                      , [v,S] = r.networkCaptureBodies ? function(e) {
                        let t = [];
                        try {
                            return [e.responseText]
                        } catch (e) {
                            t.push(e)
                        }
                        try {
                            return function(e, t) {
                                try {
                                    if ("string" == typeof e)
                                        return [e];
                                    if (e instanceof Document)
                                        return [e.body.outerHTML];
                                    if ("json" === t && e && "object" == typeof e)
                                        return [JSON.stringify(e)];
                                    if (!e)
                                        return [void 0]
                                } catch (e) {
                                    return [void 0, "BODY_PARSE_ERROR"]
                                }
                                return [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(e.response, e.responseType)
                        } catch (e) {
                            t.push(e)
                        }
                        return [void 0]
                    }(a) : [void 0]
                      , _ = rf(f, d, y)
                      , w = rf(m, h, v);
                    return {
                        startTimestamp: i,
                        endTimestamp: s,
                        url: l,
                        method: c,
                        statusCode: u,
                        request: g ? rd(_, g) : _,
                        response: S ? rd(w, S) : w
                    }
                }(e, t, r)
                  , i = rh("resource.xhr", n);
                ra(r.replay, i)
            } catch (e) {}
        }
        async function rC(e) {
            try {
                return Promise.all(ro(e, [function(e) {
                    let {jsHeapSizeLimit: t, totalJSHeapSize: r, usedJSHeapSize: n} = e
                      , i = Date.now() / 1e3;
                    return {
                        type: "memory",
                        name: "memory",
                        start: i,
                        end: i,
                        data: {
                            memory: {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: r,
                                usedJSHeapSize: n
                            }
                        }
                    }
                }(q.performance.memory)]))
            } catch (e) {
                return []
            }
        }
        async function rR(e) {
            let {client: t, scope: r, replayId: n, event: i} = e
              , s = {
                event_id: n,
                integrations: "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
            };
            t.emit("preprocessEvent", i, s);
            let o = await (0,
            k.R)(t.getOptions(), i, s, r, t, (0,
            _.aF)());
            if (!o)
                return null;
            o.platform = o.platform || "javascript";
            let a = t.getSdkMetadata()
              , {name: l, version: c} = a && a.sdk || {};
            return o.sdk = {
                ...o.sdk,
                name: l || "sentry.javascript.unknown",
                version: c || "0.0.0"
            },
            o
        }
        async function rx(e) {
            var t;
            let r, {recordingData: n, replayId: i, segmentId: s, eventContext: o, timestamp: a, session: l} = e, c = function(e) {
                let t, {recordingData: r, headers: n} = e, i = "".concat(JSON.stringify(n), "\n");
                if ("string" == typeof r)
                    t = "".concat(i).concat(r);
                else {
                    let e = new TextEncoder().encode(i);
                    (t = new Uint8Array(e.length + r.length)).set(e),
                    t.set(r, e.length)
                }
                return t
            }({
                recordingData: n,
                headers: {
                    segment_id: s
                }
            }), {urls: u, errorIds: d, traceIds: h, initialTimestamp: p} = o, f = (0,
            _.s3)(), m = (0,
            _.nZ)(), y = f && f.getTransport(), g = f && f.getDsn();
            if (!f || !y || !g || !l.sampled)
                return (0,
                P.WD)({});
            let v = {
                type: "replay_event",
                replay_start_timestamp: p / 1e3,
                timestamp: a / 1e3,
                error_ids: d,
                trace_ids: h,
                urls: u,
                replay_id: i,
                segment_id: s,
                replay_type: l.sampled
            }
              , S = await rR({
                scope: m,
                client: f,
                replayId: i,
                event: v
            });
            if (!S)
                return f.recordDroppedEvent("event_processor", "replay", v),
                (0,
                P.WD)({});
            delete S.sdkProcessingMetadata;
            let w = (t = f.getOptions().tunnel,
            (0,
            L.Jd)((0,
            L.Cd)(S, (0,
            L.HY)(S), t, g), [[{
                type: "replay_event"
            }, S], [{
                type: "replay_recording",
                length: "string" == typeof c ? new TextEncoder().encode(c).length : c.length
            }, c]]));
            try {
                r = await y.send(w)
            } catch (t) {
                let e = Error(K);
                try {
                    e.cause = t
                } catch (e) {}
                throw e
            }
            if ("number" == typeof r.statusCode && (r.statusCode < 200 || r.statusCode >= 300))
                throw new rT(r.statusCode);
            let b = (0,
            B.WG)({}, r);
            if ((0,
            B.Q)(b, "replay"))
                throw new rA(b);
            return r
        }
        class rT extends Error {
            constructor(e) {
                super("Transport returned status code ".concat(e))
            }
        }
        class rA extends Error {
            constructor(e) {
                super("Rate limit hit"),
                this.rateLimits = e
            }
        }
        async function rD(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                count: 0,
                interval: 5e3
            }
              , {recordingData: r, onError: n} = e;
            if (r.length)
                try {
                    return await rx(e),
                    !0
                } catch (r) {
                    if (r instanceof rT || r instanceof rA)
                        throw r;
                    if ((0,
                    S.v)("Replays", {
                        _retryCount: t.count
                    }),
                    n && n(r),
                    t.count >= 3) {
                        let e = Error("".concat(K, " - max retries exceeded"));
                        try {
                            e.cause = r
                        } catch (e) {}
                        throw e
                    }
                    return t.interval *= ++t.count,
                    new Promise( (r, n) => {
                        (0,
                        U.iK)(async () => {
                            try {
                                await rD(e, t),
                                r(!0)
                            } catch (e) {
                                n(e)
                            }
                        }
                        , t.interval)
                    }
                    )
                }
        }
        let rO = "__THROTTLED";
        class rN {
            getContext() {
                return this._context
            }
            isEnabled() {
                return this._isEnabled
            }
            isPaused() {
                return this._isPaused
            }
            isRecordingCanvas() {
                return !!this._canvas
            }
            getOptions() {
                return this._options
            }
            handleException(e) {
                this._options.onError && this._options.onError(e)
            }
            initializeSampling(e) {
                let {errorSampleRate: t, sessionSampleRate: r} = this._options
                  , n = t <= 0 && r <= 0;
                this._requiresManualStart = n,
                !n && (this._initializeSessionForSampling(e),
                this.session) && !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session",
                this._initializeRecording())
            }
            start() {
                if (this._isEnabled && "session" === this.recordingMode || this._isEnabled && "buffer" === this.recordingMode)
                    return;
                this._updateUserActivity();
                let e = t9({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 1,
                    allowBuffering: !1
                });
                this.session = e,
                this._initializeRecording()
            }
            startBuffering() {
                if (this._isEnabled)
                    return;
                let e = t9({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 0,
                    allowBuffering: !0
                });
                this.session = e,
                this.recordingMode = "buffer",
                this._initializeRecording()
            }
            startRecording() {
                try {
                    var e;
                    let t;
                    let r = this._canvas;
                    this._stopRecording = tM({
                        ...this._recordingOptions,
                        ..."buffer" === this.recordingMode ? {
                            checkoutEveryNms: 6e4
                        } : this._options._experiments.continuousCheckout && {
                            checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                        },
                        emit: (e = this,
                        t = !1,
                        (r, n) => {
                            if (!e.checkAndHandleExpiredSession())
                                return;
                            let i = n || !t;
                            t = !0,
                            e.clickDetector && function(e, t) {
                                try {
                                    if (3 !== t.type)
                                        return;
                                    let {source: r} = t.data;
                                    if (tO.has(r) && e.registerMutation(t.timestamp),
                                    r === e2.Scroll && e.registerScroll(t.timestamp),
                                    t.data.source === e2.MouseInteraction) {
                                        let {type: r, id: n} = t.data
                                          , i = tM.mirror.getNode(n);
                                        i instanceof HTMLElement && r === e3.Click && e.registerClick(i)
                                    }
                                } catch (e) {}
                            }(e.clickDetector, r),
                            e.addUpdate( () => {
                                if ("buffer" === e.recordingMode && i && e.setInitialState(),
                                !re(e, r, i))
                                    return !0;
                                if (!i)
                                    return !1;
                                let t = e.session;
                                if (i && e.session && 0 === e.session.segmentId && re(e, function(e) {
                                    let t = e.getOptions();
                                    return {
                                        type: e1.Custom,
                                        timestamp: Date.now(),
                                        data: {
                                            tag: "options",
                                            payload: {
                                                shouldRecordCanvas: e.isRecordingCanvas(),
                                                sessionSampleRate: t.sessionSampleRate,
                                                errorSampleRate: t.errorSampleRate,
                                                useCompressionOption: t.useCompression,
                                                blockAllMedia: t.blockAllMedia,
                                                maskAllText: t.maskAllText,
                                                maskAllInputs: t.maskAllInputs,
                                                useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                networkCaptureBodies: t.networkCaptureBodies,
                                                networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                            }
                                        }
                                    }
                                }(e), !1),
                                "buffer" === e.recordingMode && t && e.eventBuffer) {
                                    let r = e.eventBuffer.getEarliestTimestamp();
                                    r && (t.started = r,
                                    e.getOptions().stickySession && t5(t))
                                }
                                return !!t && !!t.previousSessionId || ("session" === e.recordingMode && e.flush(),
                                !0)
                            }
                            )
                        }
                        ),
                        onMutation: this._onMutationHandler,
                        ...r ? {
                            recordCanvas: r.recordCanvas,
                            getCanvasManager: r.getCanvasManager,
                            sampling: r.sampling,
                            dataURLOptions: r.dataURLOptions
                        } : {}
                    })
                } catch (e) {
                    this.handleException(e)
                }
            }
            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(),
                    this._stopRecording = void 0),
                    !0
                } catch (e) {
                    return this.handleException(e),
                    !1
                }
            }
            async stop() {
                let {forceFlush: e=!1, reason: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        !function() {
                            let e = (0,
                            _.nZ)().getPropagationContext().dsc;
                            e && delete e.replay_id;
                            let t = (0,
                            b.HN)();
                            if (t) {
                                let e = (0,
                                E.jC)(t);
                                delete e.replay_id
                            }
                        }(),
                        this._removeListeners(),
                        this.stopRecording(),
                        this._debouncedFlush.cancel(),
                        e && await this._flush({
                            force: !0
                        }),
                        this.eventBuffer && this.eventBuffer.destroy(),
                        this.eventBuffer = null,
                        function() {
                            if (t1())
                                try {
                                    q.sessionStorage.removeItem(V)
                                } catch (e) {}
                        }(),
                        this.session = void 0
                    } catch (e) {
                        this.handleException(e)
                    }
                }
            }
            pause() {
                this._isPaused || (this._isPaused = !0,
                this.stopRecording())
            }
            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1,
                this.startRecording())
            }
            async sendBufferedReplayOrFlush() {
                let {continueRecording: e=!0} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("session" === this.recordingMode)
                    return this.flushImmediate();
                let t = Date.now();
                await this.flushImmediate();
                let r = this.stopRecording();
                e && r && "session" !== this.recordingMode && (this.recordingMode = "session",
                this.session && (this._updateUserActivity(t),
                this._updateSessionActivity(t),
                this._maybeSaveSession()),
                this.startRecording())
            }
            addUpdate(e) {
                let t = e();
                "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
            }
            triggerUserActivity() {
                if (this._updateUserActivity(),
                !this._stopRecording) {
                    if (!this._checkSession())
                        return;
                    this.resume();
                    return
                }
                this.checkAndHandleExpiredSession(),
                this._updateSessionActivity()
            }
            updateUserActivity() {
                this._updateUserActivity(),
                this._updateSessionActivity()
            }
            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
            }
            flush() {
                return this._debouncedFlush()
            }
            flushImmediate() {
                return this._debouncedFlush(),
                this._debouncedFlush.flush()
            }
            cancelFlush() {
                this._debouncedFlush.cancel()
            }
            getSessionId() {
                return this.session && this.session.id
            }
            checkAndHandleExpiredSession() {
                if (this._lastActivity && t6(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                    this.pause();
                    return
                }
                return !!this._checkSession()
            }
            setInitialState() {
                let e = "".concat(q.location.pathname).concat(q.location.hash).concat(q.location.search)
                  , t = "".concat(q.location.origin).concat(e);
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this._clearContext(),
                this._context.initialUrl = t,
                this._context.initialTimestamp = Date.now(),
                this._context.urls.push(t)
            }
            throttledAddEvent(e, t) {
                let r = this._throttledAddEvent(e, t);
                if (r === rO) {
                    let e = tB({
                        category: "replay.throttled"
                    });
                    this.addUpdate( () => !re(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e,
                            metric: !0
                        }
                    }))
                }
                return r
            }
            getCurrentRoute() {
                let e = this.lastActiveSpan || (0,
                b.HN)()
                  , t = e && (0,
                b.Gx)(e)
                  , r = (t && (0,
                b.XU)(t).data || {})[M.Zj];
                if (t && r && ["route", "custom"].includes(r))
                    return (0,
                    b.XU)(t).description
            }
            _initializeRecording() {
                this.setInitialState(),
                this._updateSessionActivity(),
                this.eventBuffer = function(e) {
                    let {useCompression: t, workerUrl: r} = e;
                    if (t && window.Worker) {
                        let e = function(e) {
                            try {
                                let t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                    let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                    return URL.createObjectURL(e)
                                }());
                                if (!t)
                                    return;
                                let r = new Worker(t);
                                return new t0(r)
                            } catch (e) {}
                        }(r);
                        if (e)
                            return e
                    }
                    return new t$
                }({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }),
                this._removeListeners(),
                this._addListeners(),
                this._isEnabled = !0,
                this._isPaused = !1,
                this.startRecording()
            }
            _initializeSessionForSampling(e) {
                let t = this._options.errorSampleRate > 0
                  , r = t9({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
                this.session = r
            }
            _checkSession() {
                if (!this.session)
                    return !1;
                let e = this.session;
                return !t7(e, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(e),
                !1)
            }
            async _refreshSession(e) {
                this._isEnabled && (await this.stop({
                    reason: "refresh session"
                }),
                this.initializeSampling(e.id))
            }
            _addListeners() {
                try {
                    q.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                    q.addEventListener("blur", this._handleWindowBlur),
                    q.addEventListener("focus", this._handleWindowFocus),
                    q.addEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.addListeners(),
                    this._hasInitializedCoreListeners || (function(e) {
                        let t = (0,
                        _.s3)();
                        (0,
                        j.O)(tU(e)),
                        (0,
                        H.a)(t => {
                            if (!e.isEnabled())
                                return;
                            let r = function(e) {
                                let {from: t, to: r} = e
                                  , n = Date.now() / 1e3;
                                return {
                                    type: "navigation.push",
                                    start: n,
                                    end: n,
                                    name: r,
                                    data: {
                                        previous: t
                                    }
                                }
                            }(t);
                            null !== r && (e.getContext().urls.push(r.name),
                            e.triggerUserActivity(),
                            e.addUpdate( () => (ro(e, [r]),
                            !1)))
                        }
                        ),
                        function(e) {
                            let t = (0,
                            _.s3)();
                            t && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                                if (!e.isEnabled() || !rs(t))
                                    return;
                                let r = !rs(t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                                    let t = e.data && e.data.arguments;
                                    if (!Array.isArray(t) || 0 === t.length)
                                        return tB(e);
                                    let r = !1
                                      , n = t.map(e => {
                                        if (!e)
                                            return e;
                                        if ("string" == typeof e)
                                            return e.length > 5e3 ? (r = !0,
                                            "".concat(e.slice(0, 5e3), "…")) : e;
                                        if ("object" == typeof e)
                                            try {
                                                let t = (0,
                                                x.Fv)(e, 7);
                                                if (JSON.stringify(t).length > 5e3)
                                                    return r = !0,
                                                    "".concat(JSON.stringify(t, null, 2).slice(0, 5e3), "…");
                                                return t
                                            } catch (e) {}
                                        return e
                                    }
                                    );
                                    return tB({
                                        ...e,
                                        data: {
                                            ...e.data,
                                            arguments: n,
                                            ...r ? {
                                                _meta: {
                                                    warnings: ["CONSOLE_ARG_TRUNCATED"]
                                                }
                                            } : {}
                                        }
                                    })
                                }(t) : tB(t);
                                r && tx(e, r)
                            }
                            )(e, t))
                        }(e),
                        function(e) {
                            let t = (0,
                            _.s3)();
                            try {
                                let {networkDetailAllowUrls: r, networkDetailDenyUrls: n, networkCaptureBodies: i, networkRequestHeaders: s, networkResponseHeaders: o} = e.getOptions()
                                  , a = {
                                    replay: e,
                                    networkDetailAllowUrls: r,
                                    networkDetailDenyUrls: n,
                                    networkCaptureBodies: i,
                                    networkRequestHeaders: s,
                                    networkResponseHeaders: o
                                };
                                t && t.on("beforeAddBreadcrumb", (e, t) => (function(e, t, r) {
                                    if (t.data)
                                        try {
                                            var n, i;
                                            "xhr" === t.category && (n = r) && n.xhr && (function(e, t) {
                                                let {xhr: r, input: n} = t;
                                                if (!r)
                                                    return;
                                                let i = rl(n)
                                                  , s = r.getResponseHeader("content-length") ? rc(r.getResponseHeader("content-length")) : function(e, t) {
                                                    try {
                                                        let r = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                        return rl(r)
                                                    } catch (e) {
                                                        return
                                                    }
                                                }(r.response, r.responseType);
                                                void 0 !== i && (e.data.request_body_size = i),
                                                void 0 !== s && (e.data.response_body_size = s)
                                            }(t, r),
                                            rI(t, r, e)),
                                            "fetch" === t.category && (i = r) && i.response && (function(e, t) {
                                                let {input: r, response: n} = t
                                                  , i = rl(r ? rb(r) : void 0)
                                                  , s = n ? rc(n.headers.get("content-length")) : void 0;
                                                void 0 !== i && (e.data.request_body_size = i),
                                                void 0 !== s && (e.data.response_body_size = s)
                                            }(t, r),
                                            rv(t, r, e))
                                        } catch (e) {}
                                }
                                )(a, e, t))
                            } catch (e) {}
                        }(e);
                        let r = Object.assign( (t, r) => !e.isEnabled() || e.isPaused() ? t : "replay_event" === t.type ? (delete t.breadcrumbs,
                        t) : (!t.type || rn(t) || ri(t)) && e.checkAndHandleExpiredSession() ? ri(t) ? (e.flush(),
                        t.contexts.feedback.replay_id = e.getSessionId(),
                        e.triggerUserActivity(),
                        e.addUpdate( () => !t.timestamp || (e.throttledAddEvent({
                            type: e1.Custom,
                            timestamp: 1e3 * t.timestamp,
                            data: {
                                tag: "breadcrumb",
                                payload: {
                                    timestamp: t.timestamp,
                                    type: "default",
                                    category: "sentry.feedback",
                                    data: {
                                        feedbackId: t.event_id
                                    }
                                }
                            }
                        }),
                        !1)),
                        t) : !t.type && t.exception && t.exception.values && t.exception.values.length && r.originalException && r.originalException.__rrweb__ && !e.getOptions()._experiments.captureExceptions ? null : (("buffer" === e.recordingMode && t.message !== K && t.exception && !t.type && t2(e.getOptions().errorSampleRate) || "session" === e.recordingMode) && (t.tags = {
                            ...t.tags,
                            replayId: e.getSessionId()
                        }),
                        t) : t, {
                            id: "Replay"
                        });
                        (0,
                        S.Qy)(r),
                        t && (t.on("beforeSendEvent", t => {
                            e.isEnabled() && !t.type && function(e, t) {
                                let r = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
                                "string" == typeof r && (r.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || r.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && tx(e, tB({
                                    category: "replay.hydrate-error",
                                    data: {
                                        url: (0,
                                        A.l4)()
                                    }
                                }))
                            }(e, t)
                        }
                        ),
                        t.on("afterSendEvent", (t, r) => {
                            if (!e.isEnabled() || t.type && !rn(t))
                                return;
                            let n = r && r.statusCode;
                            if (n && !(n < 200) && !(n >= 300)) {
                                if (rn(t)) {
                                    (function(e, t) {
                                        let r = e.getContext();
                                        t.contexts && t.contexts.trace && t.contexts.trace.trace_id && r.traceIds.size < 100 && r.traceIds.add(t.contexts.trace.trace_id)
                                    }
                                    )(e, t);
                                    return
                                }
                                (function(e, t) {
                                    let r = e.getContext();
                                    if (t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id),
                                    "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId)
                                        return;
                                    let {beforeErrorSampling: n} = e.getOptions();
                                    ("function" != typeof n || n(t)) && (0,
                                    U.iK)(async () => {
                                        try {
                                            await e.sendBufferedReplayOrFlush()
                                        } catch (t) {
                                            e.handleException(t)
                                        }
                                    }
                                    )
                                }
                                )(e, t)
                            }
                        }
                        ),
                        t.on("createDsc", t => {
                            let r = e.getSessionId();
                            r && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = r)
                        }
                        ),
                        t.on("spanStart", t => {
                            e.lastActiveSpan = t
                        }
                        ),
                        t.on("spanEnd", t => {
                            e.lastActiveSpan = t
                        }
                        ),
                        t.on("beforeSendFeedback", (t, r) => {
                            let n = e.getSessionId();
                            r && r.includeReplay && e.isEnabled() && n && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = n)
                        }
                        ))
                    }(this),
                    this._hasInitializedCoreListeners = !0)
                } catch (e) {
                    this.handleException(e)
                }
                this._performanceCleanupCallback = function(e) {
                    function t(t) {
                        e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                    }
                    function r(e) {
                        let {entries: r} = e;
                        r.forEach(t)
                    }
                    let n = [];
                    return ["navigation", "paint", "resource"].forEach(e => {
                        n.push((0,
                        W._j)(e, r))
                    }
                    ),
                    n.push((0,
                    W.$A)(tj(tV, e)), (0,
                    W.PR)(tj(tK, e)), (0,
                    W.to)(tj(tJ, e)), (0,
                    W.YF)(tj(tG, e))),
                    () => {
                        n.forEach(e => e())
                    }
                }(this)
            }
            _removeListeners() {
                try {
                    q.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
                    q.removeEventListener("blur", this._handleWindowBlur),
                    q.removeEventListener("focus", this._handleWindowFocus),
                    q.removeEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.removeListeners(),
                    this._performanceCleanupCallback && this._performanceCleanupCallback()
                } catch (e) {
                    this.handleException(e)
                }
            }
            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === q.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                }
            }
            __init2() {
                this._handleWindowBlur = () => {
                    let e = tB({
                        category: "ui.blur"
                    });
                    this._doChangeToBackgroundTasks(e)
                }
            }
            __init3() {
                this._handleWindowFocus = () => {
                    let e = tB({
                        category: "ui.focus"
                    });
                    this._doChangeToForegroundTasks(e)
                }
            }
            __init4() {
                this._handleKeyboardEvent = e => {
                    !function(e, t) {
                        if (!e.isEnabled())
                            return;
                        e.updateUserActivity();
                        let r = function(e) {
                            var t;
                            let {metaKey: r, shiftKey: n, ctrlKey: i, altKey: s, key: o, target: a} = e;
                            if (!a || "INPUT" === (t = a).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o)
                                return null;
                            let l = r || i || s
                              , c = 1 === o.length;
                            if (!l && c)
                                return null;
                            let u = (0,
                            A.Rt)(a, {
                                maxStringLength: 200
                            }) || "<unknown>"
                              , d = tW(a, u);
                            return tB({
                                category: "ui.keyDown",
                                message: u,
                                data: {
                                    ...d.data,
                                    metaKey: r,
                                    shiftKey: n,
                                    ctrlKey: i,
                                    altKey: s,
                                    key: o
                                }
                            })
                        }(t);
                        r && tx(e, r)
                    }(this, e)
                }
            }
            _doChangeToBackgroundTasks(e) {
                !this.session || t4(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }) || (e && this._createCustomBreadcrumb(e),
                this.conditionalFlush())
            }
            _doChangeToForegroundTasks(e) {
                this.session && this.checkAndHandleExpiredSession() && e && this._createCustomBreadcrumb(e)
            }
            _updateUserActivity() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this._lastActivity = e
            }
            _updateSessionActivity() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this.session && (this.session.lastActivity = e,
                this._maybeSaveSession())
            }
            _createCustomBreadcrumb(e) {
                this.addUpdate( () => {
                    this.throttledAddEvent({
                        type: e1.Custom,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e
                        }
                    })
                }
                )
            }
            _addPerformanceEntries() {
                let e = this.performanceEntries.map(tH).filter(Boolean).concat(this.replayPerformanceEntries);
                if (this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this._requiresManualStart) {
                    let t = this._context.initialTimestamp / 1e3;
                    e = e.filter(e => e.start >= t)
                }
                return Promise.all(ro(this, e))
            }
            _clearContext() {
                this._context.errorIds.clear(),
                this._context.traceIds.clear(),
                this._context.urls = []
            }
            _updateInitialTimestampFromEventBuffer() {
                let {session: e, eventBuffer: t} = this;
                if (!e || !t || this._requiresManualStart || e.segmentId)
                    return;
                let r = t.getEarliestTimestamp();
                r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r)
            }
            _popEventContext() {
                let e = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(),
                e
            }
            async _runFlush() {
                let e = this.getSessionId();
                if (this.session && this.eventBuffer && e && (await this._addPerformanceEntries(),
                this.eventBuffer && this.eventBuffer.hasEvents) && (await rC(this),
                this.eventBuffer && e === this.getSessionId()))
                    try {
                        this._updateInitialTimestampFromEventBuffer();
                        let t = Date.now();
                        if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4)
                            throw Error("Session is too long, not sending replay");
                        let r = this._popEventContext()
                          , n = this.session.segmentId++;
                        this._maybeSaveSession();
                        let i = await this.eventBuffer.finish();
                        await rD({
                            replayId: e,
                            recordingData: i,
                            segmentId: n,
                            eventContext: r,
                            session: this.session,
                            timestamp: t,
                            onError: e => this.handleException(e)
                        })
                    } catch (t) {
                        this.handleException(t),
                        this.stop({
                            reason: "sendReplay"
                        });
                        let e = (0,
                        _.s3)();
                        e && e.recordDroppedEvent(t instanceof rA ? "ratelimit_backoff" : "send_error", "replay")
                    }
            }
            __init5() {
                var e = this;
                this._flush = async function() {
                    let {force: t=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!e._isEnabled && !t || !e.checkAndHandleExpiredSession() || !e.session)
                        return;
                    let r = e.session.started
                      , n = Date.now() - r;
                    e._debouncedFlush.cancel();
                    let i = n < e._options.minReplayDuration
                      , s = n > e._options.maxReplayDuration + 5e3;
                    if (i || s) {
                        i && e._debouncedFlush();
                        return
                    }
                    let o = e.eventBuffer;
                    o && 0 === e.session.segmentId && o.hasCheckout;
                    let a = !!e._flushLock;
                    e._flushLock || (e._flushLock = e._runFlush());
                    try {
                        await e._flushLock
                    } catch (t) {
                        e.handleException(t)
                    } finally {
                        e._flushLock = void 0,
                        a && e._debouncedFlush()
                    }
                }
            }
            _maybeSaveSession() {
                this.session && this._options.stickySession && t5(this.session)
            }
            __init6() {
                this._onMutationHandler = e => {
                    let t = e.length
                      , r = this._options.mutationLimit
                      , n = this._options.mutationBreadcrumbLimit
                      , i = r && t > r;
                    if (t > n || i) {
                        let e = tB({
                            category: "replay.mutations",
                            data: {
                                count: t,
                                limit: i
                            }
                        });
                        this._createCustomBreadcrumb(e)
                    }
                    return !i || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }),
                    !1)
                }
            }
            constructor({options: e, recordingOptions: t}) {
                rN.prototype.__init.call(this),
                rN.prototype.__init2.call(this),
                rN.prototype.__init3.call(this),
                rN.prototype.__init4.call(this),
                rN.prototype.__init5.call(this),
                rN.prototype.__init6.call(this),
                this.eventBuffer = null,
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this.recordingMode = "session",
                this.timeouts = {
                    sessionIdlePause: 3e5,
                    sessionIdleExpire: 9e5
                },
                this._lastActivity = Date.now(),
                this._isEnabled = !1,
                this._isPaused = !1,
                this._requiresManualStart = !1,
                this._hasInitializedCoreListeners = !1,
                this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                },
                this._recordingOptions = t,
                this._options = e,
                this._debouncedFlush = function(e, t, r) {
                    let n, i, s;
                    let o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;
                    function a() {
                        return l(),
                        n = e()
                    }
                    function l() {
                        void 0 !== i && clearTimeout(i),
                        void 0 !== s && clearTimeout(s),
                        i = s = void 0
                    }
                    function c() {
                        return i && clearTimeout(i),
                        i = (0,
                        U.iK)(a, t),
                        o && void 0 === s && (s = (0,
                        U.iK)(a, o)),
                        n
                    }
                    return c.cancel = l,
                    c.flush = function() {
                        return void 0 !== i || void 0 !== s ? a() : n
                    }
                    ,
                    c
                }( () => this._flush(), this._options.flushMinDelay, {
                    maxWait: this._options.flushMaxDelay
                }),
                this._throttledAddEvent = function(e, t, r) {
                    let n = new Map
                      , i = e => {
                        let t = e - 5;
                        n.forEach( (e, r) => {
                            r < t && n.delete(r)
                        }
                        )
                    }
                      , s = () => [...n.values()].reduce( (e, t) => e + t, 0)
                      , o = !1;
                    return function() {
                        for (var t = arguments.length, r = Array(t), a = 0; a < t; a++)
                            r[a] = arguments[a];
                        let l = Math.floor(Date.now() / 1e3);
                        if (i(l),
                        s() >= 300) {
                            let e = o;
                            return o = !0,
                            e ? "__SKIPPED" : rO
                        }
                        o = !1;
                        let c = n.get(l) || 0;
                        return n.set(l, c + 1),
                        e(...r)
                    }
                }( (e, t) => rr(this, e) ? rt(this, e, t) : Promise.resolve(null), 0, 0);
                let {slowClickTimeout: r, slowClickIgnoreSelectors: n} = this.getOptions()
                  , i = r ? {
                    threshold: Math.min(3e3, r),
                    timeout: r,
                    scrollTimeout: 300,
                    ignoreSelector: n ? n.join(",") : ""
                } : void 0;
                i && (this.clickDetector = new tN(this,i))
            }
        }
        function rL(e, t) {
            return [...e, ...t].join(",")
        }
        let rP = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
          , rB = ["content-length", "content-type", "accept"]
          , rF = !1
          , rU = e => new rW(e);
        class rW {
            static __initStatic() {
                this.id = "Replay"
            }
            get _isInitialized() {
                return rF
            }
            set _isInitialized(e) {
                rF = e
            }
            afterAllSetup(e) {
                (0,
                F.j)() && !this._replay && (this._setup(e),
                this._initialize(e))
            }
            start() {
                this._replay && this._replay.start()
            }
            startBuffering() {
                this._replay && this._replay.startBuffering()
            }
            stop() {
                return this._replay ? this._replay.stop({
                    forceFlush: "session" === this._replay.recordingMode
                }) : Promise.resolve()
            }
            flush(e) {
                return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(),
                Promise.resolve()) : Promise.resolve()
            }
            getReplayId() {
                if (this._replay && this._replay.isEnabled())
                    return this._replay.getSessionId()
            }
            _initialize(e) {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(e),
                this._replay.initializeSampling())
            }
            _setup(e) {
                let t = function(e, t) {
                    let r = t.getOptions()
                      , n = {
                        sessionSampleRate: 0,
                        errorSampleRate: 0,
                        ...(0,
                        T.Jr)(e)
                    }
                      , i = (0,
                    I.o)(r.replaysSessionSampleRate)
                      , s = (0,
                    I.o)(r.replaysOnErrorSampleRate);
                    return null == i && null == s && (0,
                    R.Cf)( () => {
                        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                    }
                    ),
                    null != i && (n.sessionSampleRate = i),
                    null != s && (n.errorSampleRate = s),
                    n
                }(this._initialOptions, e);
                this._replay = new rN({
                    options: t,
                    recordingOptions: this._recordingOptions
                })
            }
            _maybeLoadFromReplayCanvasIntegration(e) {
                try {
                    let t = e.getIntegrationByName("ReplayCanvas");
                    if (!t)
                        return;
                    this._replay._canvas = t.getOptions()
                } catch (e) {}
            }
            constructor({flushMinDelay: e=5e3, flushMaxDelay: t=5500, minReplayDuration: r=4999, maxReplayDuration: n=36e5, stickySession: i=!0, useCompression: s=!0, workerUrl: o, _experiments: a={}, maskAllText: l=!0, maskAllInputs: c=!0, blockAllMedia: u=!0, mutationBreadcrumbLimit: d=750, mutationLimit: h=1e4, slowClickTimeout: p=7e3, slowClickIgnoreSelectors: f=[], networkDetailAllowUrls: m=[], networkDetailDenyUrls: y=[], networkCaptureBodies: g=!0, networkRequestHeaders: v=[], networkResponseHeaders: S=[], mask: _=[], maskAttributes: w=["title", "placeholder"], unmask: b=[], block: E=[], unblock: k=[], ignore: M=[], maskFn: I, beforeAddRecordingEvent: C, beforeErrorSampling: R}={}) {
                this.name = rW.id;
                let x = function(e) {
                    let {mask: t, unmask: r, block: n, unblock: i, ignore: s} = e;
                    return {
                        maskTextSelector: rL(t, [".sentry-mask", "[data-sentry-mask]"]),
                        unmaskTextSelector: rL(r, []),
                        blockSelector: rL(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                        unblockSelector: rL(i, []),
                        ignoreSelector: rL(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                    }
                }({
                    mask: _,
                    unmask: b,
                    block: E,
                    unblock: k,
                    ignore: M
                });
                if (this._recordingOptions = {
                    maskAllInputs: c,
                    maskAllText: l,
                    maskInputOptions: {
                        password: !0
                    },
                    maskTextFn: I,
                    maskInputFn: I,
                    maskAttributeFn: (e, t, r) => (function(e) {
                        let {el: t, key: r, maskAttributes: n, maskAllText: i, privacyOptions: s, value: o} = e;
                        return !i || s.unmaskTextSelector && t.matches(s.unmaskTextSelector) ? o : n.includes(r) || "value" === r && "INPUT" === t.tagName && ["submit", "button"].includes(t.getAttribute("type") || "") ? o.replace(/[\S]/g, "*") : o
                    }
                    )({
                        maskAttributes: w,
                        maskAllText: l,
                        privacyOptions: x,
                        key: e,
                        value: t,
                        el: r
                    }),
                    ...x,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch (e) {}
                    }
                },
                this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(r, 15e3),
                    maxReplayDuration: Math.min(n, 36e5),
                    stickySession: i,
                    useCompression: s,
                    workerUrl: o,
                    blockAllMedia: u,
                    maskAllInputs: c,
                    maskAllText: l,
                    mutationBreadcrumbLimit: d,
                    mutationLimit: h,
                    slowClickTimeout: p,
                    slowClickIgnoreSelectors: f,
                    networkDetailAllowUrls: m,
                    networkDetailDenyUrls: y,
                    networkCaptureBodies: g,
                    networkRequestHeaders: rz(v),
                    networkResponseHeaders: rz(S),
                    beforeAddRecordingEvent: C,
                    beforeErrorSampling: R,
                    _experiments: a
                },
                this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? "".concat(this._recordingOptions.blockSelector, ",").concat(rP) : rP),
                this._isInitialized && (0,
                F.j)())
                    throw Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0
            }
        }
        function rz(e) {
            return [...rB, ...e.map(e => e.toLowerCase())]
        }
        rW.__initStatic()
    }
}]);