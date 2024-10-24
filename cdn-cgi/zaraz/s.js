try {
    (function(w, d) {
        zaraz.debug = (eN = "") => {
            document.cookie = `zarazDebug=${eN}; path=/`;
            location.reload()
        };
        window.zaraz._al = function(eF, eG, eH) {
            w.zaraz.listeners.push({
                item: eF,
                type: eG,
                callback: eH
            });
            eF.addEventListener(eG, eH)
        };
        zaraz.preview = (dv = "") => {
            document.cookie = `zarazPreview=${dv}; path=/`;
            location.reload()
        };
        zaraz.i = function(es) {
            const et = d.createElement("div");
            et.innerHTML = unescape(es);
            const eu = et.querySelectorAll("script"),
                ev = d.querySelector("script[nonce]"),
                ew = ev ? .nonce || ev ? .getAttribute("nonce");
            for (let ex = 0; ex < eu.length; ex++) {
                const ey = d.createElement("script");
                ew && (ey.nonce = ew);
                eu[ex].innerHTML && (ey.innerHTML = eu[ex].innerHTML);
                for (const ez of eu[ex].attributes) ey.setAttribute(ez.name, ez.value);
                d.head.appendChild(ey);
                eu[ex].remove()
            }
            d.body.appendChild(et)
        };
        zaraz.f = async function(eI, eJ) {
            const eK = {
                credentials: "include",
                keepalive: !0,
                mode: "no-cors"
            };
            if (eJ) {
                eK.method = "POST";
                eK.body = new URLSearchParams(eJ);
                eK.headers = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
            return await fetch(eI, eK)
        };
        window.zaraz._p = async bb => new Promise((bc => {
            if (bb) {
                bb.e && bb.e.forEach((bd => {
                    try {
                        const be = d.querySelector("script[nonce]"),
                            bf = be ? .nonce || be ? .getAttribute("nonce"),
                            bg = d.createElement("script");
                        bf && (bg.nonce = bf);
                        bg.innerHTML = bd;
                        bg.onload = () => {
                            d.head.removeChild(bg)
                        };
                        d.head.appendChild(bg)
                    } catch (bh) {
                        console.error(`Error executing script: ${bd}\n`, bh)
                    }
                }));
                Promise.allSettled((bb.f || []).map((bi => fetch(bi[0], bi[1]))))
            }
            bc()
        }));
        zaraz.pageVariables = {};
        zaraz.__zcl = zaraz.__zcl || {};
        zaraz.track = async function(dz, dA, dB) {
            return new Promise(((dC, dD) => {
                const dE = {
                    name: dz,
                    data: {}
                };
                if (dA ? .__zarazClientEvent) Object.keys(localStorage).filter((dG => dG.startsWith("_zaraz_google_consent_"))).forEach((dF => dE.data[dF] = localStorage.getItem(dF)));
                else {
                    for (const dH of [localStorage, sessionStorage]) Object.keys(dH || {}).filter((dJ => dJ.startsWith("_zaraz_"))).forEach((dI => {
                        try {
                            dE.data[dI.slice(7)] = JSON.parse(dH.getItem(dI))
                        } catch {
                            dE.data[dI.slice(7)] = dH.getItem(dI)
                        }
                    }));
                    Object.keys(zaraz.pageVariables).forEach((dK => dE.data[dK] = JSON.parse(zaraz.pageVariables[dK])))
                }
                Object.keys(zaraz.__zcl).forEach((dL => dE.data[`__zcl_${dL}`] = zaraz.__zcl[dL]));
                dE.data.__zarazMCListeners = zaraz.__zarazMCListeners;
                //
                dE.data = { ...dE.data,
                    ...dA
                };
                dE.zarazData = zarazData;
                fetch("/cdn-cgi/zaraz/t", {
                    credentials: "include",
                    keepalive: !0,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dE)
                }).catch((() => {
                    //
                    return fetch("/cdn-cgi/zaraz/t", {
                        credentials: "include",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(dE)
                    })
                })).then((function(dN) {
                    zarazData._let = (new Date).getTime();
                    dN.ok || dD();
                    return 204 !== dN.status && dN.json()
                })).then((async dM => {
                    await zaraz._p(dM);
                    "function" == typeof dB && dB()
                })).finally((() => dC()))
            }))
        };
        zaraz.set = function(dO, dP, dQ) {
            try {
                dP = JSON.stringify(dP)
            } catch (dR) {
                return
            }
            prefixedKey = "_zaraz_" + dO;
            sessionStorage && sessionStorage.removeItem(prefixedKey);
            localStorage && localStorage.removeItem(prefixedKey);
            delete zaraz.pageVariables[dO];
            if (void 0 !== dP) {
                dQ && "session" == dQ.scope ? sessionStorage && sessionStorage.setItem(prefixedKey, dP) : dQ && "page" == dQ.scope ? zaraz.pageVariables[dO] = dP : localStorage && localStorage.setItem(prefixedKey, dP);
                zaraz.__watchVar = {
                    key: dO,
                    value: dP
                }
            }
        };
        for (const {
                m: dS,
                a: dT
            } of zarazData.q.filter((({
                m: dU
            }) => ["debug", "set"].includes(dU)))) zaraz[dS](...dT);
        for (const {
                m: dV,
                a: dW
            } of zaraz.q) zaraz[dV](...dW);
        delete zaraz.q;
        delete zarazData.q;
        zaraz.spaPageview = () => {
            zarazData.l = d.location.href;
            zarazData.t = d.title;
            zaraz.pageVariables = {};
            zaraz.__zarazMCListeners = {};
            zaraz.track("__zarazSPA")
        };
        zaraz.fulfilTrigger = function(dX, dY, dZ, d$) {
            zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
            zaraz.__zarazTriggerMap[dX] || (zaraz.__zarazTriggerMap[dX] = "");
            zaraz.__zarazTriggerMap[dX] += "*" + dY + "*";
            zaraz.track("__zarazEmpty", { ...dZ,
                __zarazClientTriggers: zaraz.__zarazTriggerMap[dX]
            }, d$)
        };
        zaraz._processDataLayer = eR => {
            for (const eS of Object.entries(eR)) zaraz.set(eS[0], eS[1], {
                scope: "page"
            });
            if (eR.event) {
                if (zarazData.dataLayerIgnore && zarazData.dataLayerIgnore.includes(eR.event)) return;
                let eT = {};
                for (let eU of dataLayer.slice(0, dataLayer.indexOf(eR) + 1)) eT = { ...eT,
                    ...eU
                };
                delete eT.event;
                eR.event.startsWith("gtm.") || zaraz.track(eR.event, eT)
            }
        };
        window.dataLayer = w.dataLayer || [];
        const eQ = w.dataLayer.push;
        Object.defineProperty(w.dataLayer, "push", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(...eV) {
                let eW = eQ.apply(this, eV);
                zaraz._processDataLayer(eV[0]);
                return eW
            }
        });
        dataLayer.forEach((eX => zaraz._processDataLayer(eX)));
        zaraz._cts = () => {
            zaraz._timeouts && zaraz._timeouts.forEach((eO => clearTimeout(eO)));
            zaraz._timeouts = []
        };
        zaraz._rl = function() {
            w.zaraz.listeners && w.zaraz.listeners.forEach((eP => eP.item.removeEventListener(eP.type, eP.callback)));
            window.zaraz.listeners = []
        };
        history.pushState = function() {
            try {
                zaraz._rl();
                zaraz._cts && zaraz._cts()
            } finally {
                History.prototype.pushState.apply(history, arguments);
                setTimeout(zaraz.spaPageview, 100)
            }
        };
        history.replaceState = function() {
            try {
                zaraz._rl();
                zaraz._cts && zaraz._cts()
            } finally {
                History.prototype.replaceState.apply(history, arguments);
                setTimeout(zaraz.spaPageview, 100)
            }
        };
        zaraz._c = cs => {
            const {
                event: ct,
                ...cu
            } = cs;
            zaraz.track(ct, { ...cu,
                __zarazClientEvent: !0
            })
        };
        zaraz._syncedAttributes = ["altKey", "clientX", "clientY", "pageX", "pageY", "button"];
        zaraz.__zcl.track = !0;
        zaraz._p({
            "e": ["(function(w,d){;w.zarazData.executed.push(\"Pageview\");})(window,document)", "(function(w,d){})(window,document)"]
        })
    })(window, document)
} catch (e) {
    throw fetch("/cdn-cgi/zaraz/t"), e;
}