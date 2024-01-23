// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "16",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "URL"
            }, {
                "function": "__u",
                "vtp_component": "HOST"
            }, {
                "function": "__u",
                "vtp_component": "PATH"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }],
            "tags": [{
                "function": "__ua",
                "once_per_load": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-84500049-1",
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 1
            }, {
                "function": "__html",
                "once_per_load": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1701423146839861\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1701423146839861\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(e,a){if(!a.__SV){var b=window;try{var n,k,l=b.location,g=l.hash;var c=function(a,b){return(n=a.match(RegExp(b+\"\\x3d([^\\x26]*)\")))?n[1]:null};g\u0026\u0026c(g,\"state\")\u0026\u0026(k=JSON.parse(decodeURIComponent(c(g,\"state\"))),\"mpeditor\"===k.action\u0026\u0026(b.sessionStorage.setItem(\"_mpcehash\",g),history.replaceState(k.desiredHash||\"\",e.title,l.pathname+l.search)))}catch(p){}var m,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(\".\");2==c.length\u0026\u0026(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,\n0)))}}var d=a;\"undefined\"!==typeof f?d=a[f]=[]:f=\"mixpanel\";d.people=d.people||[];d.toString=function(b){var a=\"mixpanel\";\"mixpanel\"!==f\u0026\u0026(a+=\".\"+f);b||(a+=\" (stub)\");return a};d.people.toString=function(){return d.toString(1)+\".people (stub)\"};m=\"disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user\".split(\" \");\nfor(h=0;h\u003Cm.length;h++)e(d,m[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"undefined\"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:\"file:\"===e.location.protocol\u0026\u0026\"\/\/cdn.mxpnl.com\/libs\/mixpanel-2-latest.min.js\".match(\/^\\\/\\\/\/)?\"https:\/\/cdn.mxpnl.com\/libs\/mixpanel-2-latest.min.js\":\"\/\/cdn.mxpnl.com\/libs\/mixpanel-2-latest.min.js\";c=e.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);\nmixpanel.init(\"1c54a33d9d8c8ee50166501274e6bce6\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 7
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onerror=function(a,b,c,d,e){window.mixpanel\u0026\u0026window.mixpanel.track\u0026\u0026window.mixpanel.track(\"JS Error\",{message:a,source:b,lineno:c,colno:d,error:(e||\"\").toString()});return!0};\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 11
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 1, 2, 3]
                ]
            ]
        },
        "runtime": []









    };


    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = function(a) {
            return a.raw = a
        },
        ea = function(a, b) {
            a.raw = b;
            return a
        },
        ha = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ia = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ja = function(a) {
            return a instanceof Array ? a :
                ia(ha(a))
        },
        ka = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pa = la,
        qa = function(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa) pa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.qn = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ra = this || self,
        sa = function(a) {
            return a
        };
    var va = function() {},
        wa = function(a) {
            return "function" === typeof a
        },
        g = function(a) {
            return "string" === typeof a
        },
        xa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ya = Array.isArray,
        za = function(a, b) {
            if (a && ya(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Aa = function(a, b) {
            if (!xa(a) || !xa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ca = function(a, b) {
            for (var c = new Ba, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Da = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ea = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Fa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ga = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ia = function(a) {
            var b = [];
            if (ya(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ja = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ka = function() {
            return new Date(Date.now())
        },
        La = function() {
            return Ka().getTime()
        },
        Ba = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ba.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ba.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ma = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Na = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Oa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Pa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Qa = function(a, b) {
            return a.substring(0, b.length) === b
        },
        Ra = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Sa = /^\w{1,9}$/,
        Ta = function(a,
            b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Da(a, function(d, e) {
                Sa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ua = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Xa = function(a) {
            if (null == a) return String(a);
            var b = Va.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ya = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Za = function(a) {
            if (!a || "object" != Xa(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ya(a, "constructor") && !Ya(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ya(a, b)
        },
        k = function(a, b) {
            var c = b || ("array" == Xa(a) ? [] : {}),
                d;
            for (d in a)
                if (Ya(a, d)) {
                    var e = a[d];
                    "array" == Xa(e) ? ("array" != Xa(c[d]) && (c[d] = []), c[d] = k(e, c[d])) : Za(e) ? (Za(c[d]) || (c[d] = {}), c[d] = k(e, c[d])) : c[d] = e
                }
            return c
        };
    var $a = function(a) {
        if (void 0 == a || ya(a) || Za(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };

    function ab() {
        for (var a = bb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function cb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var bb, db;

    function eb(a) {
        bb = bb || cb();
        db = db || ab();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(bb[m], bb[n], bb[p], bb[q])
        }
        return b.join("")
    }

    function fb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = db[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        bb = bb || cb();
        db = db || ab();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    };
    var gb = {},
        hb = function(a, b) {
            gb[a] = gb[a] || [];
            gb[a][b] = !0
        },
        ib = function() {
            delete gb.GA4_EVENT
        },
        jb = function(a) {
            var b = gb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return eb(c.join("")).replace(/\.+$/, "")
        };
    var kb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var lb, mb = function() {
        if (void 0 === lb) {
            var a = null,
                b = ra.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: sa,
                        createScript: sa,
                        createScriptURL: sa
                    })
                } catch (c) {
                    ra.console && ra.console.error(c.message)
                }
                lb = a
            } else lb = a
        }
        return lb
    };
    var nb = function(a) {
        this.h = a
    };
    nb.prototype.toString = function() {
        return this.h + ""
    };
    var ob = {};
    var pb, qb;
    a: {
        for (var rb = ["CLOSURE_FLAGS"], sb = ra, tb = 0; tb < rb.length; tb++)
            if (sb = sb[rb[tb]], null == sb) {
                qb = null;
                break a
            }
        qb = sb
    }
    var ub = qb && qb[610401301];
    pb = null != ub ? ub : !1;

    function vb() {
        var a = ra.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var wb, xb = ra.navigator;
    wb = xb ? xb.userAgentData || null : null;

    function yb(a) {
        return pb ? wb ? wb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function zb(a) {
        return -1 != vb().indexOf(a)
    };

    function Ab() {
        return pb ? !!wb && 0 < wb.brands.length : !1
    }

    function Bb() {
        return Ab() ? !1 : zb("Opera")
    }

    function Cb() {
        return zb("Firefox") || zb("FxiOS")
    }

    function Db() {
        return Ab() ? yb("Chromium") : (zb("Chrome") || zb("CriOS")) && !(Ab() ? 0 : zb("Edge")) || zb("Silk")
    };
    var Eb = {},
        Fb = function(a) {
            this.h = a
        };
    Fb.prototype.toString = function() {
        return this.h.toString()
    };
    var Gb = function(a) {
        return a instanceof Fb && a.constructor === Fb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Hb = ca([""]),
        Ib = ea(["\x00"], ["\\0"]),
        Jb = ea(["\n"], ["\\n"]),
        Kb = ea(["\x00"], ["\\u0000"]);

    function Lb(a) {
        return -1 === a.toString().indexOf("`")
    }
    Lb(function(a) {
        return a(Hb)
    }) || Lb(function(a) {
        return a(Ib)
    }) || Lb(function(a) {
        return a(Jb)
    }) || Lb(function(a) {
        return a(Kb)
    });
    var Mb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

    function Nb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function Pb(a) {
        var b = a = Qb(a),
            c = mb(),
            d = c ? c.createHTML(b) : b;
        return new Fb(d, Eb)
    }

    function Qb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        C = document,
        Rb = navigator,
        Sb = C.currentScript && C.currentScript.src,
        Tb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Ub = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Vb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Wb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Xb(a, b, c) {
        b && Da(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Yb = function(a, b, c, d, e) {
            var f = C.createElement("script");
            Xb(f, d, Vb);
            f.type = "text/javascript";
            f.async = d && !1 === d.async ? !1 : !0;
            var h, l = Qb(a),
                m = mb(),
                n = m ? m.createScriptURL(l) : l;
            h = new nb(n, ob);
            f.src = h instanceof nb && h.constructor === nb ? h.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Ub(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = C.getElementsByTagName("script")[0] || C.body || C.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Zb = function() {
            if (Sb) {
                var a = Sb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        $b = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var h = e,
                l = !1;
            h || (h = C.createElement("iframe"), l = !0);
            Xb(h, c, Wb);
            d && Da(d, function(n, p) {
                h.dataset[n] = p
            });
            f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
            if (l) {
                var m = C.body &&
                    C.body.lastChild || C.body || C.head;
                m.parentNode.insertBefore(h, m)
            }
            Ub(h, b);
            void 0 !== a && (h.src = a);
            return h
        },
        ac = function(a, b, c, d) {
            var e = new Image(1, 1);
            Xb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        bc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        cc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        F = function(a) {
            z.setTimeout(a, 0)
        },
        dc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        ec = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        fc = function(a) {
            var b = C.createElement("div"),
                c = b,
                d = Pb("A<div>" + a + "</div>");
            1 === c.nodeType && Nb(c);
            c.innerHTML = Gb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        gc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        hc = function(a) {
            var b;
            try {
                b = Rb.sendBeacon && Rb.sendBeacon(a)
            } catch (c) {
                hb("TAGGING", 15)
            }
            b || ac(a)
        },
        ic = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        jc = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        kc = function() {
            var a = z.performance;
            if (a && wa(a.now)) return a.now()
        },
        lc = function() {
            return z.performance || void 0
        };

    function mc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function nc(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function oc(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0;
        switch (b) {
            case 0:
                return "G1" + mc(c) + mc(d);
            case 1:
                return "G2" + nc(c) + nc(d);
            default:
                return "g1--"
        }
    };
    var pc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Wi: a("consent"),
            Fg: a("convert_case_to"),
            Gg: a("convert_false_to"),
            Hg: a("convert_null_to"),
            Ig: a("convert_true_to"),
            Jg: a("convert_undefined_to"),
            Bm: a("debug_mode_metadata"),
            ka: a("function"),
            Gf: a("instance_name"),
            bk: a("live_only"),
            dk: a("malware_disabled"),
            ek: a("metadata"),
            hk: a("original_activity_id"),
            Rm: a("original_vendor_template_id"),
            Qm: a("once_on_load"),
            gk: a("once_per_event"),
            Oh: a("once_per_load"),
            Vm: a("priority_override"),
            Wm: a("respected_consent_types"),
            Th: a("setup_tags"),
            pd: a("tag_id"),
            Yh: a("teardown_tags")
        }
    }();
    var Mc;
    var Nc = [],
        Oc = [],
        Pc = [],
        Qc = [],
        Rc = [],
        Sc = {},
        Tc, Uc, Vc = function(a) {
            Uc = Uc || a
        },
        Wc = function(a) {},
        Xc, Yc = [],
        Zc = function(a, b) {
            var c = a[pc.ka],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Sc[c],
                f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Yc.indexOf(c),
                h = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.checkPixieIncompatibility && d.checkPixieIncompatibility(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (null == q) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = Nc[q];
                                    break;
                                case 1:
                                    r = Qc[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[pc.Gf];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name)
            }
            var u, v;
            e && (u = e(h));
            if (!e || f) v = Mc(c, l, b);
            f && d && ($a(u) ? typeof u !== typeof v && d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c));
            return e ? u : v
        },
        ad = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = $c(a[e], b, c));
            return d
        },
        $c = function(a, b, c) {
            if (ya(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push($c(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Nc[f];
                        if (!h || b.isBlocked(h)) return;
                        c[f] = !0;
                        var l = String(h[pc.Gf]);
                        try {
                            var m = ad(h, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Zc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Xc && (d = Xc.Dk(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[$c(a[n], b, c)] = $c(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = $c(a[q], b, c);
                            Uc &&
                                (p = p || Uc.wl(r));
                            d.push(r)
                        }
                        return Uc && p ? Uc.Fk(d) : d.join("");
                    case "escape":
                        d = $c(a[1], b, c);
                        if (Uc && ya(a[1]) && "macro" === a[1][0] && Uc.xl(a)) return Uc.Ul(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) qc[a[t]] && (d = qc[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Qc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            ji: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[pc.ka] = a[1];
                        var w = bd(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        bd = function(a, b, c) {
            try {
                return Tc(ad(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        cd = function(a) {
            var b = a[pc.ka];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!Sc[b]
        };
    var fd = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = dd(a), f = 0; f < Oc.length; f++) {
                var h = Oc[f],
                    l = ed(h, e);
                if (l) {
                    for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(h.block || [])
                } else null === l && b(h.block || []);
            }
            for (var p = [], q = 0; q < Qc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        ed = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f = a.unless || [], h = 0; h < f.length; h++) {
                var l = b(f[h]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        dd = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = bd(Pc[c], a));
                return b[c]
            }
        };
    var gd = {
        Dk: function(a, b) {
            b[pc.Fg] && "string" === typeof a && (a = 1 == b[pc.Fg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(pc.Hg) && null === a && (a = b[pc.Hg]);
            b.hasOwnProperty(pc.Jg) && void 0 === a && (a = b[pc.Jg]);
            b.hasOwnProperty(pc.Ig) && !0 === a && (a = b[pc.Ig]);
            b.hasOwnProperty(pc.Gg) && !1 === a && (a = b[pc.Gg]);
            return a
        }
    };
    var hd = [],
        id = function(a) {
            return void 0 == hd[a] ? !1 : hd[a]
        };
    var wd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        xd = new Ba;
    var Ed = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Fd(a, b) {
        for (var c = "", d = !0; 7 < a;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a | b] + c
    };
    var Hd = function(a) {
            return Gd ? C.querySelectorAll(a) : null
        },
        Id = function(a, b) {
            if (!Gd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Jd = !1;
    if (C.querySelectorAll) try {
        var Kd = C.querySelectorAll(":root");
        Kd && 1 == Kd.length && Kd[0] == C.documentElement && (Jd = !0)
    } catch (a) {}
    var Gd = Jd;
    var G = function(a) {
        hb("GTM", a)
    };
    var K = {
            g: {
                ya: "ad_personalization",
                F: "ad_storage",
                M: "ad_user_data",
                O: "analytics_storage",
                Zb: "region",
                Qd: "consent_updated",
                cf: "wait_for_update",
                aj: "ads",
                Am: "all",
                bj: "maps",
                cj: "playstore",
                dj: "search",
                ej: "shopping",
                fj: "youtube",
                ij: "app_remove",
                jj: "app_store_refund",
                kj: "app_store_subscription_cancel",
                lj: "app_store_subscription_convert",
                mj: "app_store_subscription_renew",
                Kg: "add_payment_info",
                Lg: "add_shipping_info",
                ac: "add_to_cart",
                bc: "remove_from_cart",
                Mg: "view_cart",
                Cb: "begin_checkout",
                fc: "select_item",
                Xa: "view_item_list",
                jb: "select_promotion",
                Ya: "view_promotion",
                na: "purchase",
                hc: "refund",
                Ca: "view_item",
                Ng: "add_to_wishlist",
                nj: "exception",
                oj: "first_open",
                pj: "first_visit",
                oa: "gtag.config",
                La: "gtag.get",
                qj: "in_app_purchase",
                ic: "page_view",
                rj: "screen_view",
                sj: "session_start",
                tj: "timing_complete",
                uj: "track_social",
                Rd: "user_engagement",
                kb: "gclid",
                qa: "ads_data_redaction",
                ja: "allow_ad_personalization_signals",
                hf: "allow_custom_scripts",
                jf: "allow_display_features",
                Sd: "allow_enhanced_conversions",
                Za: "allow_google_signals",
                Da: "allow_interest_groups",
                vj: "app_id",
                wj: "app_installer_id",
                xj: "app_name",
                yj: "app_version",
                Db: "auid",
                zj: "auto_detection_enabled",
                Eb: "aw_remarketing",
                kf: "aw_remarketing_only",
                Td: "discount",
                Ud: "aw_feed_country",
                Vd: "aw_feed_language",
                W: "items",
                Wd: "aw_merchant_id",
                Og: "aw_basket_type",
                Dc: "campaign_content",
                Ec: "campaign_id",
                Fc: "campaign_medium",
                Gc: "campaign_name",
                Hc: "campaign",
                Ic: "campaign_source",
                Jc: "campaign_term",
                lb: "client_id",
                Aj: "content_group",
                Bj: "content_type",
                Ma: "conversion_cookie_prefix",
                Kc: "conversion_id",
                Ea: "conversion_linker",
                Fb: "conversion_api",
                Xd: "cookie_deprecation",
                Sa: "cookie_domain",
                Ga: "cookie_expires",
                Ta: "cookie_flags",
                jc: "cookie_name",
                Lc: "cookie_path",
                Na: "cookie_prefix",
                kc: "cookie_update",
                mc: "country",
                ra: "currency",
                Yd: "customer_lifetime_value",
                Mc: "custom_map",
                Pg: "gcldc",
                Cj: "debug_mode",
                X: "developer_id",
                Dj: "disable_merchant_reported_purchases",
                Nc: "dc_custom_params",
                Ej: "dc_natural_search",
                Qg: "dynamic_event_settings",
                Rg: "affiliation",
                Zd: "checkout_option",
                lf: "checkout_step",
                Sg: "coupon",
                Oc: "item_list_name",
                nf: "list_name",
                Fj: "promotions",
                Pc: "shipping",
                pf: "tax",
                ae: "engagement_time_msec",
                be: "enhanced_client_id",
                ce: "enhanced_conversions",
                Tg: "enhanced_conversions_automatic_settings",
                de: "estimated_delivery_date",
                qf: "euid_logged_in_state",
                Qc: "event_callback",
                Gj: "event_category",
                nb: "event_developer_id_string",
                Hj: "event_label",
                Ug: "event",
                ee: "event_settings",
                fe: "event_timeout",
                Ij: "description",
                Jj: "fatal",
                Kj: "experiments",
                rf: "firebase_id",
                he: "first_party_collection",
                ie: "_x_20",
                cb: "_x_19",
                Vg: "fledge",
                Wg: "flight_error_code",
                Xg: "flight_error_message",
                Yg: "fl_activity_category",
                Zg: "fl_activity_group",
                tf: "fl_advertiser_id",
                ah: "fl_ar_dedupe",
                uf: "match_id",
                bh: "fl_random_number",
                eh: "tran",
                fh: "u",
                je: "gac_gclid",
                nc: "gac_wbraid",
                gh: "gac_wbraid_multiple_conversions",
                hh: "ga_restrict_domain",
                ih: "ga_temp_client_id",
                ke: "gdpr_applies",
                jh: "geo_granularity",
                ob: "value_callback",
                eb: "value_key",
                Em: "google_ono",
                Gb: "google_signals",
                kh: "google_tld",
                me: "groups",
                lh: "gsa_experiment_id",
                mh: "iframe_state",
                Rc: "ignore_referrer",
                vf: "internal_traffic_results",
                qb: "is_legacy_converted",
                rb: "is_legacy_loaded",
                ne: "is_passthrough",
                oe: "_lps",
                Ha: "language",
                wf: "legacy_developer_id_string",
                Ia: "linker",
                Sc: "accept_incoming",
                Hb: "decorate_forms",
                T: "domains",
                oc: "url_position",
                nh: "method",
                Lj: "name",
                Tc: "new_customer",
                oh: "non_interaction",
                Mj: "optimize_id",
                Nj: "page_hostname",
                Uc: "page_path",
                Ja: "page_referrer",
                sb: "page_title",
                ph: "passengers",
                qh: "phone_conversion_callback",
                Oj: "phone_conversion_country_code",
                rh: "phone_conversion_css_class",
                Pj: "phone_conversion_ids",
                sh: "phone_conversion_number",
                th: "phone_conversion_options",
                xf: "_protected_audience_enabled",
                Vc: "quantity",
                pe: "redact_device_info",
                yf: "referral_exclusion_definition",
                Ib: "restricted_data_processing",
                Qj: "retoken",
                Rj: "sample_rate",
                zf: "screen_name",
                tb: "screen_resolution",
                Sj: "search_term",
                Oa: "send_page_view",
                Jb: "send_to",
                Wc: "server_container_url",
                Xc: "session_duration",
                qe: "session_engaged",
                Af: "session_engaged_time",
                ub: "session_id",
                se: "session_number",
                Yc: "delivery_postal_code",
                Fm: "temporary_client_id",
                Bf: "topmost_url",
                Tj: "tracking_id",
                Cf: "traffic_type",
                sa: "transaction_id",
                Kb: "transport_url",
                uh: "trip_type",
                Lb: "update",
                vb: "url_passthrough",
                Zc: "_user_agent_architecture",
                ad: "_user_agent_bitness",
                bd: "_user_agent_full_version_list",
                dd: "_user_agent_mobile",
                ed: "_user_agent_model",
                fd: "_user_agent_platform",
                gd: "_user_agent_platform_version",
                hd: "_user_agent_wow64",
                Aa: "user_data",
                vh: "user_data_auto_latency",
                wh: "user_data_auto_meta",
                xh: "user_data_auto_multi",
                yh: "user_data_auto_selectors",
                zh: "user_data_auto_status",
                ue: "user_data_mode",
                ve: "user_data_settings",
                Pa: "user_id",
                Ua: "user_properties",
                Ah: "_user_region",
                Bh: "us_privacy_string",
                ba: "value",
                qc: "wbraid",
                Ch: "wbraid_multiple_conversions",
                Ih: "_host_name",
                Jh: "_in_page_command",
                Kh: "_is_passthrough_cid",
                Nb: "non_personalized_ads",
                od: "_sst_parameters",
                ab: "conversion_label",
                za: "page_location",
                pb: "global_developer_id_string",
                te: "tc_privacy_string"
            }
        },
        je = {},
        ke = Object.freeze((je[K.g.ja] = 1, je[K.g.jf] = 1, je[K.g.Sd] = 1, je[K.g.Za] = 1, je[K.g.W] = 1, je[K.g.Sa] = 1, je[K.g.Ga] = 1, je[K.g.Ta] = 1, je[K.g.jc] = 1, je[K.g.Lc] = 1, je[K.g.Na] =
            1, je[K.g.kc] = 1, je[K.g.Mc] = 1, je[K.g.X] = 1, je[K.g.Qg] = 1, je[K.g.Qc] = 1, je[K.g.ee] = 1, je[K.g.fe] = 1, je[K.g.he] = 1, je[K.g.hh] = 1, je[K.g.Gb] = 1, je[K.g.kh] = 1, je[K.g.me] = 1, je[K.g.vf] = 1, je[K.g.qb] = 1, je[K.g.rb] = 1, je[K.g.Ia] = 1, je[K.g.yf] = 1, je[K.g.Ib] = 1, je[K.g.Oa] = 1, je[K.g.Jb] = 1, je[K.g.Wc] = 1, je[K.g.Xc] = 1, je[K.g.Af] = 1, je[K.g.Yc] = 1, je[K.g.Kb] = 1, je[K.g.Lb] = 1, je[K.g.ve] = 1, je[K.g.Ua] = 1, je[K.g.od] = 1, je));
    Object.freeze([K.g.za, K.g.Ja, K.g.sb, K.g.Ha, K.g.zf, K.g.Pa, K.g.rf, K.g.Aj]);
    var le = {},
        me = Object.freeze((le[K.g.ij] = 1, le[K.g.jj] = 1, le[K.g.kj] = 1, le[K.g.lj] = 1, le[K.g.mj] = 1, le[K.g.oj] = 1, le[K.g.pj] = 1, le[K.g.qj] = 1, le[K.g.sj] = 1, le[K.g.Rd] = 1, le)),
        ne = {},
        oe = Object.freeze((ne[K.g.Kg] = 1, ne[K.g.Lg] = 1, ne[K.g.ac] = 1, ne[K.g.bc] = 1, ne[K.g.Mg] = 1, ne[K.g.Cb] = 1, ne[K.g.fc] = 1, ne[K.g.Xa] = 1, ne[K.g.jb] = 1, ne[K.g.Ya] = 1, ne[K.g.na] = 1, ne[K.g.hc] = 1, ne[K.g.Ca] = 1, ne[K.g.Ng] = 1, ne)),
        pe = Object.freeze([K.g.ja, K.g.Za, K.g.kc, K.g.Rc, K.g.Lb]),
        qe = Object.freeze([].concat(pe)),
        re = Object.freeze([K.g.Ga, K.g.fe, K.g.Xc, K.g.Af,
            K.g.ae
        ]),
        se = Object.freeze([].concat(re)),
        te = {},
        ue = (te[K.g.F] = "1", te[K.g.O] = "2", te[K.g.M] = "3", te[K.g.ya] = "4", te),
        ve = {},
        we = Object.freeze((ve[K.g.ja] = 1, ve[K.g.Sd] = 1, ve[K.g.Da] = 1, ve[K.g.Eb] = 1, ve[K.g.kf] = 1, ve[K.g.Td] = 1, ve[K.g.Ud] = 1, ve[K.g.Vd] = 1, ve[K.g.W] = 1, ve[K.g.Wd] = 1, ve[K.g.Ma] = 1, ve[K.g.Ea] = 1, ve[K.g.Sa] = 1, ve[K.g.Ga] = 1, ve[K.g.Ta] = 1, ve[K.g.Na] = 1, ve[K.g.ra] = 1, ve[K.g.Yd] = 1, ve[K.g.X] = 1, ve[K.g.Dj] = 1, ve[K.g.ce] = 1, ve[K.g.de] = 1, ve[K.g.rf] = 1, ve[K.g.he] = 1, ve[K.g.qb] = 1, ve[K.g.rb] = 1, ve[K.g.Ha] = 1, ve[K.g.Tc] = 1, ve[K.g.za] =
            1, ve[K.g.Ja] = 1, ve[K.g.qh] = 1, ve[K.g.rh] = 1, ve[K.g.sh] = 1, ve[K.g.th] = 1, ve[K.g.Ib] = 1, ve[K.g.Oa] = 1, ve[K.g.Jb] = 1, ve[K.g.Wc] = 1, ve[K.g.Yc] = 1, ve[K.g.sa] = 1, ve[K.g.Kb] = 1, ve[K.g.Lb] = 1, ve[K.g.vb] = 1, ve[K.g.Aa] = 1, ve[K.g.Pa] = 1, ve[K.g.ba] = 1, ve)),
        xe = {},
        ye = Object.freeze((xe[K.g.dj] = "s", xe[K.g.fj] = "y", xe[K.g.cj] = "p", xe[K.g.ej] = "h", xe[K.g.aj] = "a", xe[K.g.bj] = "m", xe));
    Object.freeze(K.g);
    var ze = {},
        Ae = z.google_tag_manager = z.google_tag_manager || {},
        Be = Math.random();
    ze.Hf = "4130";
    ze.nd = Number("0") || 0;
    ze.aa = "dataLayer";
    ze.Yi = "ChEIgMvZrAYQtJq3yJyI3+niARIkAMiMmhWNyZmEHV+NI/UkajXsYLipEEyTPJoFVam+1ETdu2OzGgLO8A\x3d\x3d";
    var Ce = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        De = {
            __paused: 1,
            __tg: 1
        },
        Ee;
    for (Ee in Ce) Ce.hasOwnProperty(Ee) && (De[Ee] = 1);
    var Fe = Ga(""),
        Ge, He = !1;
    Ge = He;
    var Ie, Je = !1;
    Ie = Je;
    var Ke, Le = !1;
    Ke = Le;
    var Me, Ne = !1;
    Me = Ne;
    ze.Cc = "www.googletagmanager.com";
    var Oe = "" + ze.Cc + (Ge ? "/gtag/js" : "/gtm.js"),
        Pe = null,
        Qe = null,
        Re = {},
        Se = {},
        Te = {},
        Ue = function() {
            var a = Ae.sequence || 1;
            Ae.sequence = a + 1;
            return a
        };
    ze.Xi = "";
    var Ve = "";
    ze.Ce = Ve;
    var We = function() {
        return ""
    };
    var Xe = new Ba,
        Ye = {},
        Ze = {},
        bf = {
            name: ze.aa,
            set: function(a, b) {
                k(Ra(a, b), Ye);
                $e()
            },
            get: function(a) {
                return af(a, 2)
            },
            reset: function() {
                Xe = new Ba;
                Ye = {};
                $e()
            }
        },
        af = function(a, b) {
            return 2 != b ? Xe.get(a) : cf(a)
        },
        cf = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ye, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        df = function(a, b) {
            Ze.hasOwnProperty(a) || (Xe.set(a, b), k(Ra(a, b), Ye), $e())
        },
        $e = function(a) {
            Da(Ze, function(b, c) {
                Xe.set(b, c);
                k(Ra(b), Ye);
                k(Ra(b,
                    c), Ye);
                a && delete Ze[b]
            })
        },
        ef = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? cf(a) : Xe.get(a);
            "array" === Xa(d) || "object" === Xa(d) ? c = k(d) : c = d;
            return c
        };
    var mf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var nf = [];

    function of (a) {
        switch (a) {
            case 26:
                return 3;
            case 52:
                return 14;
            case 53:
                return 8;
            case 65:
                return 11;
            case 66:
                return 12;
            case 69:
                return 10;
            case 71:
                return 13;
            case 67:
                return 15;
            case 113:
                return 16
        }
    }

    function L(a) {
        nf[a] = !0;
        var b = of (a);
        b && (hd[b] = !0)
    }
    L(5);
    L(6);
    L(7);
    L(9);
    L(10);
    L(15);
    L(11);
    L(16);
    L(19);
    L(20);
    L(21);
    L(22);
    L(24);
    L(25);
    L(28);
    L(30);
    L(34);
    L(35);
    L(36);
    L(38);
    L(39);
    L(43);
    L(46);
    L(49);
    L(50);
    L(51);
    L(54);
    L(55);
    L(56);
    L(58);
    L(59);
    L(60);
    L(61);
    L(62);
    L(67);
    L(69);
    L(70);
    L(73);
    L(75);
    L(80);

    L(86);

    L(95);
    L(97), L(84), L(45), L(98), L(99);
    L(53);
    L(102);

    function N(a) {
        return !!nf[a]
    }
    var pf = !1;

    function qf(a) {}
    var rf = Number('1');
    var sf = function(a) {
        hb("HEALTH", a)
    };
    var tf;
    try {
        tf = JSON.parse(fb("eyIwIjoiVk4iLCIxIjoiVk4tSE4iLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20udm4iLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))
    } catch (a) {
        G(123), sf(2), tf = {}
    }
    var uf = function() {
            return tf["0"] || ""
        },
        vf = function() {
            var a = !1;
            return a
        },
        wf = function() {
            var a = "";
            return a
        },
        xf = function() {
            var a = !1;
            return a
        },
        yf = function() {
            var a = "";
            return a
        };
    var zf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Af = function(a) {
        Af[" "](a);
        return a
    };
    Af[" "] = function() {};
    var Cf = function() {
        var a = Bf,
            b = "Zf";
        if (a.Zf && a.hasOwnProperty(b)) return a.Zf;
        var c = new a;
        return a.Zf = c
    };
    var Bf = function() {
        var a = {};
        this.h = function() {
            var b = zf.h,
                c = zf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[zf.h] = !0
        }
    };
    var Df = !1,
        Ef = !1,
        Ff = {},
        Gf = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function Hf() {
        var a = Tb("google_tag_data", {});
        return a.ics = a.ics || new If
    }
    var If = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    If.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        hb("TAGGING", 19);
        void 0 == b ? hb("TAGGING", 18) : Jf(this, a, "granted" === b, c, d, e, f)
    };
    If.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) Jf(this, a[c], void 0, void 0, "", "", b)
    };
    var Jf = function(a, b, c, d, e, f, h) {
        var l = a.entries,
            m = l[b] || {},
            n = m.region,
            p = d && g(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Of(p, n, e, f)) {
            var q = !!(h && 0 < h && void 0 === m.update),
                r = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) l[b] = r;
            q && z.setTimeout(function() {
                l[b] === r && r.quiet && (hb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
            }, h)
        }
    };
    aa = If.prototype;
    aa.clearTimeout = function(a, b) {
        var c = [a],
            d;
        for (d in Ff) Ff.hasOwnProperty(d) && Ff[d] === a && c.push(d);
        var e = this.entries[a] || {},
            f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var h = ha(c), l = h.next(); !l.done; l = h.next()) Pf(this, l.value)
        } else if (void 0 !== b && f !== b) {
            var m = ha(c);
            for (l = m.next(); !l.done; l = m.next()) Pf(this, l.value)
        }
    };
    aa.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    };
    aa.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            h = f[a] || {},
            l = h.declare_region,
            m = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Of(m, l, d, e)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) f[a] = n
        }
    };
    aa.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    aa.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (Ff.hasOwnProperty(a)) {
            var e = b[Ff[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        if (id(3)) {
            d = c.implicit;
            if (void 0 !== d) return d ? 3 : 4;
            if (Gf.hasOwnProperty(a)) return Gf[a] ? 3 : 4
        }
        return 0
    };
    aa.setCps = function(a, b, c, d, e) {
        var f;
        a: {
            var h = this.cps,
                l, m = h[a] || {},
                n = m.region,
                p = c && g(c) ? c.toUpperCase() : void 0;l = d.toUpperCase();
            if (Of(p, n, l, e.toUpperCase())) {
                var q = {
                    enabled: "granted" === b,
                    region: p
                };
                if ("" !== l || !1 !== m.enabled) {
                    h[a] = q;
                    f = !0;
                    break a
                }
            }
            f = !1
        }
        f && (this.usedSetCps = !0)
    };
    aa.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Mk: b
        })
    };
    var Pf = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            ya(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.yi = !0)
        }
    };
    If.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.yi) {
                d.yi = !1;
                try {
                    d.Mk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function Of(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    var Qf = function(a) {
            var b = Hf();
            b.accessedAny = !0;
            return (g(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Rf = function(a) {
            var b = Hf();
            b.accessedAny = !0;
            return b.getConsentState(a)
        },
        Sf = function(a) {
            var b = Hf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Tf = function() {
            if (!Cf().h()) return !1;
            var a = Hf();
            a.accessedAny = !0;
            return a.active
        },
        Uf = function() {
            var a = Hf();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Vf = function(a, b) {
            Hf().addListener(a,
                b)
        },
        Wf = function(a, b) {
            Hf().notifyListeners(a, b)
        },
        Xf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Sf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Vf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Yf = function(a, b) {
            function c() {
                for (var l = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Qf(n) && !f[n] && l.push(n)
                }
                return l
            }

            function d(l) {
                for (var m = 0; m < l.length; m++) f[l[m]] = !0
            }
            var e = g(b) ? [b] : b,
                f = {},
                h = c();
            h.length !== e.length && (d(h), Vf(e, function(l) {
                function m(q) {
                    0 !== q.length && (d(q), l.consentTypes = q, a(l))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ? m(n) : z.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };

    function Zf() {}

    function $f() {};
    var ag = [K.g.F, K.g.O, K.g.M, K.g.ya],
        bg = function(a) {
            for (var b = a[K.g.Zb], c = Array.isArray(b) ? b : [b], d = {
                    yd: 0
                }; d.yd < c.length; d = {
                    yd: d.yd
                }, ++d.yd) Da(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Zb) {
                        var l = c[e.yd],
                            m = uf(),
                            n = tf["1"] || "";
                        Ef = !0;
                        Df && hb("TAGGING", 20);
                        Hf().declare(f, h, l, m, n)
                    }
                }
            }(d))
        },
        cg = function(a) {
            var b = a[K.g.Zb];
            b && G(40);
            var c = a[K.g.cf];
            c && G(41);
            for (var d = ya(b) ? b : [b], e = {
                    zd: 0
                }; e.zd < d.length; e = {
                    zd: e.zd
                }, ++e.zd) Da(a, function(f) {
                return function(h, l) {
                    if (h !== K.g.Zb && h !== K.g.cf) {
                        var m = d[f.zd],
                            n = Number(c),
                            p = uf(),
                            q = tf["1"] || "";
                        Df = !0;
                        Ef && hb("TAGGING", 20);
                        Hf().default(h, l, m, p, q, n)
                    }
                }
            }(e))
        },
        dg = function(a, b) {
            Da(a, function(c, d) {
                Df = !0;
                Ef && hb("TAGGING", 20);
                Hf().update(c, d)
            });
            Wf(b.eventId, b.priorityId)
        },
        eg = function(a) {
            for (var b = a[K.g.Zb], c = Array.isArray(b) ? b : [b], d = {
                    Ad: 0
                }; d.Ad < c.length; d = {
                    Ad: d.Ad
                }, ++d.Ad) Da(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Zb) {
                        var l = c[e.Ad],
                            m = uf(),
                            n = tf["1"] || "";
                        Hf().setCps(f, h, l, m, n)
                    }
                }
            }(d))
        },
        P = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Qf(b)
            })
        },
        fg = function(a,
            b) {
            Yf(a, b)
        },
        gg = function(a, b) {
            Xf(a, b)
        },
        hg = function() {
            var a = [K.g.F, K.g.ya, K.g.M];
            Hf().waitForUpdate(a, 500)
        },
        ig = function(a) {
            for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                Hf().clearTimeout(d, void 0)
            }
            Wf()
        };
    var jg = function(a) {
            var b = String(a[pc.ka] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        kg = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var mg = function(a) {
            var b = lg();
            b.pending || (b.pending = []);
            za(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        ng = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        lg = function() {
            var a = Tb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new ng, a.tidr = b);
            return b
        };
    var og = {},
        pg = !1,
        qg = {
            ctid: "GTM-NWZ9HX7",
            Ge: "",
            wi: "GTM-NWZ9HX7",
            xi: "GTM-NWZ9HX7"
        };
    og.kd = Ga("");
    var tg = function() {
            var a = rg();
            return pg ? a.map(sg) : a
        },
        vg = function() {
            var a = ug();
            return pg ? a.map(sg) : a
        },
        xg = function() {
            return wg(qg.ctid)
        },
        yg = function() {
            return wg(qg.Ge || "_" + qg.ctid)
        },
        rg = function() {
            return qg.wi ? qg.wi.split("|") : [qg.ctid]
        },
        ug = function() {
            return qg.xi ? qg.xi.split("|") : []
        },
        zg = function(a) {
            var b = lg();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        wg = function(a) {
            return pg ? sg(a) : a
        },
        sg = function(a) {
            return "siloed_" + a
        },
        Ag = function(a) {
            a = String(a);
            return pg && 0 === a.indexOf("siloed_") ?
                a.substring(7) : a
        },
        Bg = function() {
            var a = !1;
            if (a) {
                var b = lg();
                if (b.siloed) {
                    for (var c = [], d = rg(), e = ug(), f = {}, h = 0; h < b.siloed.length; f = {
                            He: void 0
                        }, h++) f.He = b.siloed[h], !pg && za(f.He.isDestination ? e : d, function(l) {
                        return function(m) {
                            return m === l.He.ctid
                        }
                    }(f)) ? pg = !0 : c.push(f.He);
                    b.siloed = c
                }
            }
        };

    function Cg() {
        var a = lg();
        if (a.pending) {
            for (var b, c = [], d = !1, e = tg(), f = vg(), h = {}, l = 0; l < a.pending.length; h = {
                    Ld: void 0
                }, l++) h.Ld = a.pending[l], za(h.Ld.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ld.target.ctid
                }
            }(h)) ? d || (b = h.Ld.onLoad, d = !0) : c.push(h.Ld);
            a.pending = c;
            if (b) try {
                b(yg())
            } catch (m) {}
        }
    }
    var Dg = function() {
            for (var a = lg(), b = tg(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = tg(), d.destinations = vg()) : a.container[b[c]] = {
                    state: 2,
                    containers: tg(),
                    destinations: vg()
                }
            }
            for (var e = vg(), f = 0; f < e.length; f++) {
                var h = a.destination[e[f]];
                h && 0 === h.state && G(93);
                h ? (h.state = 2, h.containers = tg(), h.destinations = vg()) : a.destination[e[f]] = {
                    state: 2,
                    containers: tg(),
                    destinations: vg()
                }
            }
            a.canonical[yg()] = {};
            Cg()
        },
        Eg = function(a) {
            return !!lg().container[a]
        },
        Fg = function() {
            return {
                ctid: xg(),
                isDestination: og.kd
            }
        };

    function Gg(a) {
        var b = lg();
        (b.siloed = b.siloed || []).push(a)
    }
    var Hg = function() {
            var a = lg().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Ig = function() {
            var a = {};
            Da(lg().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Jg = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Kg = {
            sampleRate: "0.005000",
            Ti: "",
            Si: Number("5"),
            rn: Number("")
        },
        Lg = [];

    function Mg(a) {
        Lg.push(a)
    }
    var Ng = !1,
        Og;
    if (!(Og = kg)) {
        var Pg = Math.random(),
            Qg = Kg.sampleRate;
        Og = Pg < Number(Qg)
    }
    var Rg = Og,
        Sg = "https://www.googletagmanager.com/a?id=" + qg.ctid,
        Tg = void 0,
        Ug = {},
        Vg = void 0,
        Wg = new function() {
            var a = 5;
            0 < Kg.Si && (a = Kg.Si);
            this.h = 0;
            this.C = [];
            this.s = a
        },
        Xg = 1E3;

    function Yg(a, b) {
        var c = Tg;
        if (void 0 === c)
            if (b) c = Ue();
            else return "";
        for (var d = [Sg], e = 0; e < Lg.length; e++) {
            var f = Lg[e]({
                eventId: c,
                Bb: !!a,
                Hi: function() {
                    Ng = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }

    function Zg() {
        Vg && (z.clearTimeout(Vg), Vg = void 0);
        if (void 0 !== Tg && $g) {
            var a;
            (a = Ug[Tg]) || (a = Wg.h < Wg.s ? !1 : 1E3 > La() - Wg.C[Wg.h % Wg.s]);
            if (a || 0 >= Xg--) G(1), Ug[Tg] = !0;
            else {
                var b = Wg.h++ % Wg.s;
                Wg.C[b] = La();
                var c = Yg(!0);
                ac(c);
                if (Ng) {
                    var d = c.replace("/a?", "/td?");
                    ac(d)
                }
                $g = Ng = !1
            }
        }
    }
    var $g = !1;

    function ah(a) {
        Ug[a] || (a !== Tg && (Zg(), Tg = a), $g = !0, Vg || (Vg = z.setTimeout(Zg, 500)), 2022 <= Yg().length && Zg())
    }
    var bh = Aa();

    function ch() {
        bh = Aa()
    }

    function dh() {
        return ["&v=3&t=t", "&pid=" + bh].join("")
    };
    var eh = function(a, b, c, d, e, f, h, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.C = e;
            this.J = f;
            this.R = h;
            this.s = l;
            this.eventMetadata = m;
            this.onSuccess = n;
            this.onFailure = p;
            this.isGtmEvent = q
        },
        S = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.K[b]) return a.K[b];
            if (void 0 !== a.C[b]) return a.C[b];
            Rg && fh(a, a.J[b], a.R[b]) && (G(71), G(79));
            return void 0 !== a.J[b] ? a.J[b] : void 0 !== a.s[b] ? a.s[b] : c
        },
        gh = function(a) {
            function b(h) {
                for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.K);
            b(a.C);
            b(a.J);
            if (Rg)
                for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        G(71);
                        G(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        hh = function(a, b, c) {
            function d(m) {
                Za(m) && Da(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.s[b]), d(a.J[b]), d(a.C[b]), d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (Rg) {
                var h = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.s[b]), d(a.R[b]), d(a.C[b]), d(a.K[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== h || fh(a, e, l)) G(71), G(81);
                f = h;
                e = l
            }
            return f ? e : void 0
        },
        ih = function(a) {
            var b = [K.g.Hc, K.g.Dc, K.g.Ec, K.g.Fc, K.g.Gc, K.g.Ic, K.g.Jc],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.K) || e(a.C)) return c;
            e(a.J);
            if (Rg) {
                var f = c,
                    h = d;
                c = {};
                d = !1;
                e(a.R);
                fh(a, c, f) && (G(71), G(82));
                c = f;
                d = h
            }
            if (d) return c;
            e(a.s);
            return c
        },
        fh = function(a, b, c) {
            if (!Rg) return !1;
            try {
                if (b === c) return !1;
                var d = Xa(b);
                if (d !== Xa(c) || !(Za(b) && Za(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (fh(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var h in b)
                        if (!c.hasOwnProperty(h) || fh(a, b[h], c[h])) return !0
                }
            } catch (l) {
                G(72)
            }
            return !1
        },
        jh = function(a, b) {
            this.xe = a;
            this.ye = b;
            this.J = {};
            this.Mb = {};
            this.h = {};
            this.K = {};
            this.s = {};
            this.xb = {};
            this.C = {};
            this.wb = function() {};
            this.Fa = function() {};
            this.R = !1
        },
        kh = function(a, b) {
            a.J = b;
            return a
        },
        lh = function(a, b) {
            a.Mb = b;
            return a
        },
        mh = function(a, b) {
            a.h = b;
            return a
        },
        nh = function(a, b) {
            a.K = b;
            return a
        },
        oh = function(a,
            b) {
            a.s = b;
            return a
        },
        ph = function(a, b) {
            a.xb = b;
            return a
        },
        qh = function(a, b) {
            a.C = b || {};
            return a
        },
        rh = function(a, b) {
            a.wb = b;
            return a
        },
        sh = function(a, b) {
            a.Fa = b;
            return a
        },
        th = function(a, b) {
            a.R = b;
            return a
        },
        zh = function(a) {
            return new eh(a.xe, a.ye, a.J, a.Mb, a.h, a.K, a.s, a.xb, a.C, a.wb, a.Fa, a.R)
        };

    function Ah(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Bh = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Ch = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Dh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Eh() {
        return pb ? !!wb && !!wb.platform : !1
    }

    function Fh() {
        return zb("iPhone") && !zb("iPod") && !zb("iPad")
    }

    function Gh() {
        Fh() || zb("iPad") || zb("iPod")
    };
    Bb();
    Ab() || zb("Trident") || zb("MSIE");
    zb("Edge");
    !zb("Gecko") || -1 != vb().toLowerCase().indexOf("webkit") && !zb("Edge") || zb("Trident") || zb("MSIE") || zb("Edge"); - 1 != vb().toLowerCase().indexOf("webkit") && !zb("Edge") && zb("Mobile");
    Eh() || zb("Macintosh");
    Eh() || zb("Windows");
    (Eh() ? "Linux" === wb.platform : zb("Linux")) || Eh() || zb("CrOS");
    Eh() || zb("Android");
    Fh();
    zb("iPad");
    zb("iPod");
    Gh();
    vb().toLowerCase().indexOf("kaios");
    var Hh = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var h = a.charCodeAt(e - 1);
                if (38 == h || 63 == h) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Ih = /#|$/,
        Jh = function(a, b) {
            var c = a.search(Ih),
                d = Hh(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Kh = /[?&]($|#)/,
        Lh = function(a, b, c) {
            for (var d, e = a.search(Ih), f = 0, h, l = []; 0 <= (h = Hh(a, f, b, e));) l.push(a.substring(f,
                h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Kh, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Mh = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Af(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Nh = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Oh(a) {
        if (!a || !C.head) return null;
        var b = Ph("META");
        C.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Qh = function(a) {
            if (z.top == z) return 0;
            if (void 0 === a ? 0 : a) {
                var b = z.location.ancestorOrigins;
                if (b) return b[b.length - 1] == z.location.origin ? 1 : 2
            }
            return Mh(z.top) ? 1 : 2
        },
        Ph = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Rh(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Ph("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        l = kb(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Dh(e, "load", f);
            Dh(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Th = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Nh(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Sh(c, b)
        },
        Sh = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Rh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Uh = function() {};
    var Vh = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Wh = function(a, b) {
            b = void 0 === b ? {} : b;
            this.s = a;
            this.h = null;
            this.K = {};
            this.Fa = 0;
            var c;
            this.R = null != (c = b.om) ? c : 500;
            var d;
            this.J = null != (d = b.gn) ? d : !1;
            this.C = null
        };
    qa(Wh, Uh);
    var Yh = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Xh(a)
    };
    Wh.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = Ch(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.R && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.R));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = Vh(c), c.internalBlockOnErrors = b.J, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Zh(this, "addEventListener", f)
        } catch (h) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Wh.prototype.removeEventListener = function(a) {
        a && a.listenerId && Zh(this, "removeEventListener", null, a.listenerId)
    };
    var ai = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = $h(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && $h(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? $h(a.purpose.legitimateInterests,
                b) && $h(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        $h = function(a, b) {
            return !(!a || !a[b])
        },
        Zh = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (Xh(a)) {
                bi(a);
                var f = ++a.Fa;
                a.K[f] = c;
                if (a.h) {
                    var h = {};
                    a.h.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Xh = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.s, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var h = c.parent;
                            if (h && h != c) {
                                f = h;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        bi = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.K[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Dh(a.s, "message", a.C))
        },
        ci = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Vh(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Th({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var di = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        ei = Ah('', 500);

    function fi() {
        var a = Ae.tcf || {};
        return Ae.tcf = a
    }
    var gi = function() {
            return new Wh(z, {
                om: -1
            })
        },
        ni = function() {
            var a = fi(),
                b = gi();
            Yh(b) && hi() && G(124);
            if ((ii() || N(53)) && !a.active && Yh(b)) {
                ii() && (a.active = !0, a.Ab = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, N(53) ? Hf().active = !0 : ji(), a.tcString = "tcunavailable");
                N(53) && hg();
                try {
                    b.addEventListener(function(c) {
                        if (0 !== c.internalErrorState) ki(a), N(53) ? (ig([K.g.F, K.g.ya, K.g.M]), Hf().active = !0) : li(a);
                        else {
                            a.gdprApplies = c.gdprApplies;
                            if (N(53)) {
                                a.cmpId = c.cmpId;
                                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                                !0 ===
                                    fi().enableAdvertiserConsentMode && (a.active = !0);
                                if (mi(c) && hi()) {
                                    ig([K.g.F, K.g.ya, K.g.M]);
                                    return
                                }
                                a.tcfPolicyVersion = c.tcfPolicyVersion
                            }
                            var d;
                            if (!1 === c.gdprApplies) {
                                var e = {},
                                    f;
                                for (f in di) di.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if (mi(c)) {
                                var h = {},
                                    l;
                                for (l in di)
                                    if (di.hasOwnProperty(l))
                                        if ("1" === l) {
                                            var m, n = c,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            m = ci(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : ai(n, "1",
                                                0) : !1;
                                            h["1"] = m
                                        } else h[l] = ai(c, l, di[l]);
                                d = h
                            }
                            d && (a.tcString = c.tcString || "tcempty", a.Ab = d, li(a))
                        }
                    })
                } catch (c) {
                    ki(a), N(53) ? (ig([K.g.F, K.g.ya, K.g.M]), Hf().active = !0) : li(a)
                }
            }
        };

    function ki(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function mi(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }

    function ji() {
        var a = {},
            b = (a[K.g.F] = "denied", a[K.g.cf] = ei, a);
        cg(b)
    }
    var ii = function() {
            return !0 === z.gtag_enable_tcf_support
        },
        hi = function() {
            var a = ii();
            return N(53) ? !a && !0 !== fi().enableAdvertiserConsentMode : !a
        };

    function li(a) {
        var b = {},
            c = (b[K.g.F] = a.Ab["1"] ? "granted" : "denied", b);
        if (N(53)) {
            if (!0 !== a.gdprApplies) {
                ig([K.g.F, K.g.ya, K.g.M]);
                Hf().active = !0;
                return
            }
            c[K.g.ya] = a.Ab["3"] && a.Ab["4"] ? "granted" : "denied";
            "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? c[K.g.M] = a.Ab["1"] && a.Ab["7"] ? "granted" : "denied" : ig([K.g.M])
        }
        dg(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: oi() || ""
        })
    }
    var oi = function() {
            var a = fi();
            if (a.active) return a.tcString
        },
        pi = function() {
            var a = fi();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        qi = function(a) {
            if (!di.hasOwnProperty(String(a))) return !0;
            var b = fi();
            return b.active && b.Ab ? !!b.Ab[String(a)] : !0
        };
    var ri = [K.g.F, K.g.O],
        si = [K.g.F, K.g.O, K.g.M, K.g.ya],
        ti = {},
        ui = (ti[K.g.F] = 1, ti[K.g.O] = 2, ti);

    function vi(a) {
        if (void 0 === a) return 0;
        switch (S(a, K.g.ja)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var wi = function(a) {
            var b = vi(a);
            if (3 === b) return !1;
            if (N(45)) switch (Rf(K.g.ya)) {
                case 1:
                case 3:
                    break;
                case 2:
                    return !1;
                case 4:
                    return 2 === b;
                case 0:
                    break;
                default:
                    return !1
            }
            return !0
        },
        xi = function() {
            return Tf() || !Qf(K.g.F) || !Qf(K.g.O)
        },
        yi = function() {
            var a = {},
                b;
            for (b in ui) ui.hasOwnProperty(b) && (a[ui[b]] = Rf(b));
            var c = N(31) && ri.every(function(e) {
                    return Qf(e)
                }),
                d = N(27);
            return c || d ? oc(a, 1) : oc(a, 0)
        },
        zi = {},
        Ai = (zi[K.g.F] = 0, zi[K.g.O] = 1, zi[K.g.M] = 2, zi[K.g.ya] = 3, zi);

    function Bi(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var Ci = function(a) {
            if (N(28)) {
                for (var b = "1", c = 0; c < si.length; c++) {
                    var d = b,
                        e, f = si[c],
                        h = Ff[f];
                    e = void 0 === h ? 0 : Ai.hasOwnProperty(h) ? 12 | Ai[h] : 8;
                    var l = Hf();
                    l.accessedAny = !0;
                    var m = l.entries[f] || {};
                    e = e << 2 | Bi(m.implicit);
                    b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Bi(m.declare) << 4 | Bi(m.default) << 2 | Bi(m.update)])
                }
                var n = b,
                    p;
                p = "" + (Tf() << 2 | vi(a));
                return n + p
            }
            for (var q = "G1", r = 0; r < ri.length; r++) {
                var t;
                a: {
                    var u = ri[r],
                        v = Hf();v.accessedDefault = !0;
                    switch ((v.entries[u] || {}).default) {
                        case !0:
                            t = 3;
                            break a;
                        case !1:
                            t = 2;
                            break a;
                        default:
                            t = 1
                    }
                }
                switch (t) {
                    case 3:
                        q += "1";
                        break;
                    case 2:
                        q += "0";
                        break;
                    case 1:
                        q += "-"
                }
            }
            return q
        },
        Di = function() {
            if (!Qf(K.g.M)) return "-";
            var a = {},
                b = Hf().cps,
                c;
            for (c in b) b.hasOwnProperty(c) && (a[c] = {
                enabled: b[c].enabled,
                region: b[c].region
            });
            for (var d = {}, e = ha(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
                var h = f.value;
                d[h] = a[h].enabled
            }
            for (var l = "", m = ha(Object.keys(ye)), n = m.next(); !n.done; n = m.next()) {
                var p =
                    n.value;
                !1 !== d[p] && (l += ye[p])
            }
            return "" === l ? "-" : l
        };

    function Ei() {
        var a = !!tf["6"],
            b = !1;
        N(53) && (b = !hi() && "1" === pi());
        return a || b
    }
    var Fi = function() {
            return Ei() ? "1" : "0"
        },
        Gi = function() {
            return Ei() || Hf().usedSetCps || !Qf(K.g.M)
        },
        Hi = function() {
            var a = "0",
                b = "0",
                c;
            var d = fi();
            c = d.active && N(53) ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e = "0",
                f;
            var h = fi();
            f = h.active && N(53) ? h.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var l = 0;
            tf["6"] && (l |= 1);
            "1" === pi() && (l |= 2);
            ii() && (l |= 4);
            var m;
            var n = fi();
            m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (l |= 8);
            Hf().waitPeriodTimedOut && (l |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l]
        };

    function Ii(a) {
        return "null" !== a.origin
    };
    var Ji = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Mi = function(a, b, c, d) {
            return Ki(d) ? Ji(a, String(b || Li()), c) : []
        },
        Pi = function(a, b, c, d, e) {
            if (Ki(e)) {
                var f = Ni(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Oi(f, function(h) {
                        return h.Ie
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Oi(f, function(h) {
                        return h.Kd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Qi(a, b, c, d) {
        var e = Li(),
            f = window;
        Ii(f) && (f.document.cookie = a);
        var h = Li();
        return e != h || void 0 != c && 0 <= Mi(b, h, !1, d).indexOf(c)
    }
    var Ui = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete h[u], t;
                h[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete h[u], t;
                h[u] = !0;
                return t + "; " + u
            }
            if (!Ki(c.ib)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ri(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.ln);
            f = d(f, "samesite",
                c.nn);
            c.on && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Si(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Ti(q, c.path) && Qi(r, a, b, c.ib)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Ti(m, c.path) ? 1 : Qi(f, a, b, c.ib) ? 0 : 1
        },
        Vi = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Ui(a, b, c)
        };

    function Oi(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Ni(a, b, c) {
        for (var d = [], e = Mi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"), d.push({
                    id: h.join("."),
                    Ie: 1 * m[0] || 1,
                    Kd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Ri = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Wi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Xi = /(^|\.)doubleclick\.net$/i,
        Ti = function(a, b) {
            return Xi.test(window.document.location.hostname) || "/" === b && Wi.test(a)
        },
        Li = function() {
            return Ii(window) ? window.document.cookie : ""
        },
        Si = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Xi.test(e) || Wi.test(e) || a.push("none");
            return a
        },
        Ki = function(a) {
            return a && Cf().h() ? (g(a) ? [a] : a).every(function(b) {
                return Sf(b) && Qf(b)
            }) : !0
        },
        Yi = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Zi = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var $i = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ mf(a) & 2147483647) : String(b)
        },
        aj = function(a) {
            return [$i(a), Math.round(La() / 1E3)].join(".")
        },
        bj = function(a, b, c, d, e) {
            var f = Yi(b);
            return Pi(a, f, Zi(c), d, e)
        },
        cj = function(a, b, c, d) {
            var e = "" + Yi(c),
                f = Zi(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        };
    var dj = function() {
        Ae.dedupe_gclid || (Ae.dedupe_gclid = "" + aj());
        return Ae.dedupe_gclid
    };
    var ej = function() {
        var a = !1;
        return a
    };
    var fj = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        gj = function(a, b) {
            var c = qg.ctid.split("-")[0].toUpperCase(),
                d = {};
            d.ctid = qg.ctid;
            d.dm = ze.nd;
            d.gm = ze.Hf;
            d.Gl = og.kd ? 2 : 1;
            d.di = qg.Ge;
            d.di !== a && (d.We = a);
            N(82) ? d.Ki = 1 : N(81) && (d.Ki = 2);
            Ge ? (d.Ue = fj[c], d.Ue || (d.Ue = 0)) : d.Ue = Me ? 13 : 10;
            Ke ? d.jg = 1 : ej() ? d.jg = 2 : d.jg = 3;
            var e;
            var f = d.Ue,
                h = d.jg;
            void 0 === f ? e = "" : (h || (h = 0), e = "" + Fd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | h]);
            var l = d.fn,
                m = 4 + e + (l ? "" + Fd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l] :
                    ""),
                n, p = d.gm;
            n = p && Ed.test(p) ? "" + Fd(3, 2) + p : "";
            var q, r = d.dm;
            q = r ? "" + Fd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
            var t;
            var u = d.ctid;
            if (u && b) {
                var v = u.split("-"),
                    w = v[0].toUpperCase();
                if ("GTM" !== w && "OPT" !== w) t = "";
                else {
                    var x = v[1];
                    t = "" + Fd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + x.length] + (d.Gl || 0) + x
                }
            } else t = "";
            var y = d.Ki,
                A = d.di,
                B = d.We,
                D = d.pn;
            return m + n + q + t + (y ? "" + Fd(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [y] :
                "") + (A ? "" + Fd(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [A.length] + A : "") + (B ? "" + Fd(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [B.length] + B : "") + (D ? "" + Fd(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [D.length] + D : "")
        };
    var hj = void 0;

    function ij(a) {
        var b = "";
        return b
    };
    Cb();
    Fh() || zb("iPod");
    zb("iPad");
    !zb("Android") || Db() || Cb() || Bb() || zb("Silk");
    Db();
    !zb("Safari") || Db() || (Ab() ? 0 : zb("Coast")) || Bb() || (Ab() ? 0 : zb("Edge")) || (Ab() ? yb("Microsoft Edge") : zb("Edg/")) || (Ab() ? yb("Opera") : zb("OPR")) || Cb() || zb("Silk") || zb("Android") || Gh();
    var jj = {},
        kj = null,
        lj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!kj) {
                kj = {};
                for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = h.concat(l[m].split(""));
                    jj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === kj[q] && (kj[q] = p)
                    }
                }
            }
            for (var r = jj[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    I = r[(y & 15) << 2 | A >> 6],
                    E = r[A & 63];
                t[w++] = "" + B + D + I + E
            }
            var H = 0,
                J = u;
            switch (b.length - v) {
                case 2:
                    H = b[v + 1], J = r[(H & 15) << 2] || u;
                case 1:
                    var M = b[v];
                    t[w] = "" + r[M >> 2] + r[(M & 3) << 4 | H >> 4] + J + u
            }
            return t.join("")
        };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var mj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function nj() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function oj() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function pj() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function qj() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function rj() {
        if (!qj()) return null;
        var a = nj();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(mj).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var xj = /:[0-9]+$/,
        yj = /^\d+\.fls\.doubleclick\.net$/,
        zj = function(a, b, c) {
            function d(p) {
                return id(10) ? decodeURIComponent(p.replace(/\+/g, " ")) : decodeURIComponent(p).replace(/\+/g, " ")
            }
            for (var e = ha(a.split("&")), f = e.next(); !f.done; f = e.next()) {
                var h = ha(f.value.split("=")),
                    l = h.next().value,
                    m = ia(h);
                if (d(l) === b) {
                    var n = m.join("=");
                    return c ? n : d(n)
                }
            }
        },
        Cj = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Aj(a.protocol) || Aj(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ?
                a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(xj, "").toLowerCase());
            return Bj(a, b, c, d, e)
        },
        Bj = function(a, b, c, d, e) {
            var f, h = Aj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Dj(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(xj, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) ||
                        ("http" === h ? 80 : "https" === h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || hb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = zj(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Aj = function(a) {
            return a ?
                a.replace(":", "").toLowerCase() : ""
        },
        Dj = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Ej = function(a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || hb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(xj, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Fj = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !==
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Ej(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                l = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === l[0] && (l = l.substring(1));
            h = c(h);
            l = c(l);
            "" !== h && (h = "?" + h);
            "" !== l && (l = "#" + l);
            var m = "" + f + h + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Gj = function(a) {
            var b = Ej(z.location.href),
                c = Cj(b, "host", !1);
            if (c && c.match(yj)) {
                var d = Cj(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };

    function Hj(a, b, c, d) {
        var e, f = Number(null != a.zb ? a.zb : void 0);
        0 !== f && (e = new Date((b || La()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            ib: d
        }
    };
    var Ij;
    var Mj = function() {
            var a = Jj,
                b = Kj,
                c = Lj(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                bc(C, "mousedown", d);
                bc(C, "keyup", d);
                bc(C, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Nj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Lj().decorators.push(f)
        },
        Oj = function(a, b, c) {
            for (var d = Lj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    l;
                if (l = !c || h.forms) a: {
                    var m = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && Oa(e, h.callback())
                }
            }
            return e
        };

    function Lj() {
        var a = Tb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Pj = /(.*?)\*(.*?)\*(.*)/,
        Qj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Rj = /^(?:www\.|m\.|amp\.)+/,
        Sj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Tj(a) {
        var b = Sj.exec(a);
        if (b) return {
            pg: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function Uj(a, b) {
        var c = [Rb.userAgent, (new Date).getTimezoneOffset(), Rb.userLanguage || Rb.language, Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Ij)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Ij = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Ij[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Vj() {
        return function(a) {
            var b = Ej(z.location.href),
                c = b.search.replace("?", ""),
                d = zj(c, "_gl", !0) || "";
            a.query = Wj(d) || {};
            var e = Cj(b, "fragment"),
                f;
            var h = -1;
            if (Qa(e, "_gl=")) h = 4;
            else {
                var l = e.indexOf("&_gl=");
                0 < l && (h = l + 3 + 2)
            }
            if (0 > h) f = void 0;
            else {
                var m = e.indexOf("&", h);
                f = 0 > m ? e.substring(h) : e.substring(h, m)
            }
            a.fragment = Wj(f || "") || {}
        }
    }
    var Xj = function(a) {
            var b = Vj(),
                c = Lj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Oa(d, e.query), a && Oa(d, e.fragment));
            return d
        },
        Wj = function(a) {
            try {
                var b = Yj(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            h = fb(d[e + 1]);
                        c[f] = h
                    }
                    hb("TAGGING", 6);
                    return c
                }
            } catch (l) {
                hb("TAGGING", 8)
            }
        };

    function Yj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Pj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3],
                    m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === Uj(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                hb("TAGGING", 7)
            }
        }
    }

    function Zj(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var h = Tj(c);
        if (!h) return "";
        var l = h.query || "",
            m = h.fragment || "",
            n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : l = "?" + f(l.substring(1));
        return "" + h.pg + l + m
    }

    function ak(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w), v.push(eb(String(x))))
                    }
                var y = v.join("*");
                u = ["1", Uj(y), y].join("*");
                d ? (id(13) || id(11) || !p) && bk("_gl", u, a, p, q) : ck("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase(),
            e = Oj(b, 1, d),
            f = Oj(b, 2, d),
            h = Oj(b, 4, d),
            l = Oj(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        id(11) && c(h, !0, !0);
        for (var m in l) l.hasOwnProperty(m) && dk(m, l[m], a)
    }

    function dk(a, b, c) {
        "a" === c.tagName.toLowerCase() ? ck(a, b, c) : "form" === c.tagName.toLowerCase() && bk(a, b, c)
    }

    function ck(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var h;
            if (!(h = !id(16) || d)) {
                var l = z.location.href,
                    m = Tj(c.href),
                    n = Tj(l);
                h = !(m && n && m.pg === n.pg && m.query === n.query && m.fragment)
            }
            f = h
        }
        if (f) {
            var p = Zj(a, b, c.href, d, e);
            Mb.test(p) && (c.href = p)
        }
    }

    function bk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var h = Zj(a, b, c.action, d, e);
                    Mb.test(h) && (c.action = h)
                }
            } else {
                for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
                    var p = l[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = C.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Jj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || ak(e, e.hostname)
            }
        } catch (h) {}
    }

    function Kj(a) {
        try {
            if (a.action) {
                var b = Cj(Ej(a.action), "host");
                ak(a, b)
            }
        } catch (c) {}
    }
    var ek = function(a, b, c, d) {
            Mj();
            Nj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        fk = function(a, b) {
            Mj();
            Nj(a, [Bj(z.location, "host", !0)], b, !0, !0)
        },
        gk = function() {
            var a = C.location.hostname,
                b = Qj.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Rj, ""),
                m = e.replace(Rj, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        hk = function(a, b) {
            return !1 === a ? !1 : a || b || gk()
        };
    var ik = ["1"],
        jk = {},
        kk = {},
        pk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = lk(a.prefix);
            if (!jk[c])
                if (mk(c, a.path, a.domain)) {
                    var d = kk[lk(a.prefix)];
                    nk(a, d ? d.id : void 0, d ? d.hg : void 0)
                } else {
                    var e = Gj("auiddc");
                    if (e) hb("TAGGING", 17), jk[c] = e;
                    else if (b) {
                        var f = lk(a.prefix),
                            h = aj();
                        if (0 === ok(f, h, a)) {
                            var l = Tb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = h)
                        }
                        mk(c, a.path, a.domain)
                    }
                }
        };

    function nk(a, b, c) {
        var d = lk(a.prefix),
            e = jk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(La() / 1E3)));
                    ok(d, l, a, 1E3 * h)
                }
            }
        }
    }

    function ok(a, b, c, d) {
        var e = cj(b, "1", c.domain, c.path),
            f = Hj(c, d);
        f.ib = qk();
        return Vi(a, e, f)
    }

    function mk(a, b, c) {
        var d = bj(a, b, c, ik, qk());
        if (!d) return !1;
        rk(a, d);
        return !0
    }

    function rk(a, b) {
        var c = b.split(".");
        5 === c.length ? (jk[a] = c.slice(0, 2).join("."), kk[a] = {
            id: c.slice(2, 4).join("."),
            hg: Number(c[4]) || 0
        }) : 3 === c.length ? kk[a] = {
            id: c.slice(0, 2).join("."),
            hg: Number(c[2]) || 0
        } : jk[a] = b
    }

    function lk(a) {
        return (a || "_gcl") + "_au"
    }

    function sk(a) {
        function b() {
            Qf(c) && a()
        }
        var c = qk();
        Xf(function() {
            b();
            Qf(c) || Yf(b, c)
        }, c)
    }

    function tk(a) {
        var b = Xj(!0),
            c = lk(a.prefix);
        sk(function() {
            var d = b[c];
            if (d) {
                rk(c, d);
                var e = 1E3 * Number(jk[c].split(".")[1]);
                if (e) {
                    hb("TAGGING", 16);
                    var f = Hj(a, e);
                    f.ib = qk();
                    var h = cj(d, "1", a.domain, a.path);
                    Vi(c, h, f)
                }
            }
        })
    }

    function uk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {},
                l = bj(a, e.path, e.domain, ik, qk());
            l && (h[a] = l);
            return h
        };
        sk(function() {
            ek(f, b, c, d)
        })
    }

    function qk() {
        return id(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    };
    var vk = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                yg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };

    function wk(a, b) {
        var c = vk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].yg] || (d[c[e].yg] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    U: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].yg].push(h)
            }
        }
        return d
    };
    var xk = /^\w+$/,
        yk = /^[\w-]+$/,
        zk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Ak() {
        return id(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var Bk = function() {
            return Cf().h() ? Qf(Ak()) : !0
        },
        Ck = function(a) {
            function b() {
                var c = Bk();
                c && a();
                return c
            }
            Xf(function() {
                b() || Yf(b, Ak())
            }, Ak())
        },
        Ek = function(a) {
            return Dk(a).map(function(b) {
                return b.U
            })
        },
        Dk = function(a) {
            var b = [];
            if (!Ii(z) || !C.cookie) return b;
            var c = Mi(a, C.cookie, void 0, Ak());
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    U: void 0
                }, e++) {
                var f = Fk(c[e]);
                if (null != f) {
                    var h = f,
                        l = h.version;
                    d.U = h.U;
                    var m = h.timestamp,
                        n = h.labels,
                        p = za(b, function(q) {
                            return function(r) {
                                return r.U === q.U
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Gk(p.labels, n || [])) : b.push({
                        version: l,
                        U: d.U,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Hk(b)
        };

    function Gk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Ik(a) {
        return a && "string" == typeof a && a.match(xk) ? a : "_gcl"
    }
    var Kk = function() {
            var a = Ej(z.location.href),
                b = Cj(a, "query", !1, void 0, "gclid"),
                c = Cj(a, "query", !1, void 0, "gclsrc"),
                d = Cj(a, "query", !1, void 0, "wbraid"),
                e = Cj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || zj(f, "gclid");
                c = c || zj(f, "gclsrc");
                d = d || zj(f, "wbraid")
            }
            return Jk(b, c, e, d)
        },
        Jk = function(a, b, c, d) {
            var e = {},
                f = function(h, l) {
                    e[l] || (e[l] = []);
                    e[l].push(h)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && yk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(yk)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Mk = function(a) {
            var b = Kk();
            Ck(function() {
                Lk(b, !1, a)
            })
        };

    function Lk(a, b, c, d, e) {
        function f(w, x) {
            var y = Nk(w, h);
            y && (Vi(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var h = Ik(c.prefix);
        d = d || La();
        var l = Hj(c, d, !0);
        l.ib = Ak();
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Nk("gb", h),
                t = !1;
            if (!b)
                for (var u = Dk(r), v = 0; v < u.length; v++) u[v].U === q && u[v].labels && 0 < u[v].labels.length &&
                    (t = !0);
            t || f("gb", p(q))
        }
    }
    var Yk = function(a, b) {
            var c = Xj(!0);
            Ck(function() {
                for (var d = Ik(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== zk[f]) {
                        var h = Nk(f, d),
                            l = c[h];
                        if (l) {
                            var m = Math.min(Xk(l), La()),
                                n;
                            b: {
                                var p = m;
                                if (Ii(z))
                                    for (var q = Mi(h, C.cookie, void 0, Ak()), r = 0; r < q.length; ++r)
                                        if (Xk(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Hj(b, m, !0);
                                t.ib = Ak();
                                Vi(h, l, t)
                            }
                        }
                    }
                }
                Lk(Jk(c.gclid, c.gclsrc), !1, b)
            })
        },
        Nk = function(a, b) {
            var c = zk[a];
            if (void 0 !== c) return b + c
        },
        Xk = function(a) {
            return 0 !== Zk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) :
                0
        };

    function Fk(a) {
        var b = Zk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            U: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Zk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !yk.test(a[2]) ? [] : a
    }
    var $k = function(a, b, c, d, e) {
            if (ya(b) && Ii(z)) {
                var f = Ik(e),
                    h = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = Nk(a[m], f);
                            if (n) {
                                var p = Mi(n, C.cookie, void 0, Ak());
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Ck(function() {
                    ek(h, b, c, d)
                })
            }
        },
        Hk = function(a) {
            return a.filter(function(b) {
                return yk.test(b.U)
            })
        },
        al = function(a, b) {
            if (Ii(z)) {
                for (var c = Ik(b.prefix), d = {}, e = 0; e < a.length; e++) zk[a[e]] && (d[a[e]] = zk[a[e]]);
                Ck(function() {
                    Da(d, function(f, h) {
                        var l = Mi(c + h, C.cookie, void 0, Ak());
                        l.sort(function(t, u) {
                            return Xk(u) -
                                Xk(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = Xk(m),
                                p = 0 !== Zk(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Zk(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Lk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function bl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var cl = function(a) {
            function b(e, f, h) {
                h && (e[f] = h)
            }
            if (Tf()) {
                var c = Kk();
                if (bl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    fk(function() {
                        return d
                    }, 3);
                    fk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        dl = function(a) {
            if (!id(11)) return null;
            var b = Xj(!0).gad_source;
            if (null != b) return z.location.hash = "", b;
            if (id(12)) {
                var c = Ej(z.location.href);
                b = Cj(c, "query", !1, void 0, "gad_source");
                if (null != b) return b;
                var d = Kk();
                if (bl(d, a)) return "0"
            }
            return null
        },
        el = function(a) {
            var b =
                dl(a);
            null != b && fk(function() {
                var c = {};
                return c.gad_source = b, c
            }, 4)
        },
        fl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Bk()) return e;
            var f = Dk(a);
            if (!f.length) return e;
            for (var h = 0; h < f.length; h++) - 1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m / 1E3), l.U].concat(l.labels || [], [b]).join("."),
                    p = Hj(c, m, !0);
                p.ib = Ak();
                Vi(a, n, p)
            }
            return e
        };

    function gl(a, b) {
        var c = Ik(b),
            d = Nk(a, c);
        if (!d) return 0;
        for (var e = Dk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function hl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var il = function(a) {
        var b = Math.max(gl("aw", a), hl(Bk() ? wk() : {}));
        return Math.max(gl("gb", a), hl(Bk() ? wk("_gac_gb", !0) : {})) > b
    };
    var ol = /[A-Z]+/,
        pl = /\s/,
        ql = function(a, b) {
            if (g(a)) {
                a = Ja(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (ol.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var h = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = h(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = h(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || pl.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            Z: d + "-" + f[0],
                            N: f
                        }
                    }
                }
            }
        },
        sl = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = ql(a[d], b);
                e && (c[e.id] = e)
            }
            rl(c);
            var f = [];
            Da(c, function(h, l) {
                f.push(l)
            });
            return f
        };

    function rl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.Z)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var tl = function(a, b, c, d) {
        var e = Zb(),
            f;
        if (1 === e) a: {
            var h = Oe;h = h.toLowerCase();
            for (var l = "https://" + h, m = "http://" + h, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var vl = function(a, b, c) {
            if (z[a.functionName]) return b.ng && F(b.ng), z[a.functionName];
            var d = ul();
            z[a.functionName] = d;
            if (a.Ee)
                for (var e = 0; e < a.Ee.length; e++) z[a.Ee[e]] = z[a.Ee[e]] || ul();
            a.Ne && void 0 === z[a.Ne] && (z[a.Ne] = c);
            Yb(tl("https://", "http://", a.xg), b.ng, b.Ol);
            return d
        },
        ul = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        wl = {
            functionName: "_googWcmImpl",
            Ne: "_googWcmAk",
            xg: "www.gstatic.com/wcm/loader.js"
        },
        xl = {
            functionName: "_gaPhoneImpl",
            Ne: "ga_wpid",
            xg: "www.gstatic.com/gaphone/loader.js"
        },
        yl = {
            Vi: "",
            lk: "5"
        },
        zl = {
            functionName: "_googCallTrackingImpl",
            Ee: [xl.functionName, wl.functionName],
            xg: "www.gstatic.com/call-tracking/call-tracking_" + (yl.Vi || yl.lk) + ".js"
        },
        Al = {},
        Bl = function(a, b, c, d) {
            G(22);
            if (c) {
                d = d || {};
                var e = vl(wl, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.hb && (f.autoreplace = c);
                e(2, d.hb, f, c, 0, Ka(), d.options)
            }
        },
        Cl = function(a, b, c, d) {
            G(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ka()
                    }, f = 0; f < a.length; f++) {
                    var h = a[f];
                    Al[h.id] ||
                        (h && "AW" === h.prefix && !e.adData && 2 <= h.N.length ? (e.adData = {
                            ak: h.N[0],
                            cl: h.N[1]
                        }, N(115) && (e.adData.dma = Fi(), Gi() && (e.adData.dmaCps = Di())), Al[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                            gaWpid: h.Z
                        }, Al[h.id] = !0))
                }(e.gaData || e.adData) && vl(zl, d)(d.hb, e, d.options)
            }
        },
        Dl = function() {
            var a = !1;
            return a
        },
        El = function(a, b) {
            if (a)
                if (ej()) {} else {
                    if (g(a)) {
                        var c = ql(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = S(b, K.g.Pj);
                    if (f && ya(f)) {
                        d = [];
                        for (var h = 0; h < f.length; h++) {
                            var l = ql(f[h]);
                            l && (d.push(l), (a.id === l.id || a.id === a.Z && a.Z === l.Z) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = S(b, K.g.sh),
                            n;
                        if (m) {
                            ya(m) ? n = m : n = [m];
                            var p = S(b, K.g.qh),
                                q = S(b, K.g.rh),
                                r = S(b, K.g.th),
                                t = S(b, K.g.Oj),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) Cl(d, n[w], t, {
                                        hb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.N[1]) Dl() ? Cl([a], n[w],
                                t || "US", {
                                    hb: u,
                                    options: r
                                }) : Bl(a.N[0], a.N[1], n[w], {
                                hb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (Dl()) Cl([a], n[w], t || "US", {
                                    hb: u
                                });
                                else {
                                    var x = a.Z,
                                        y = n[w],
                                        A = {
                                            hb: u
                                        };
                                    G(23);
                                    if (y) {
                                        A = A || {};
                                        var B = vl(xl, A, x),
                                            D = {};
                                        void 0 !== A.hb ? D.receiver = A.hb : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        B(2, Ka(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var Fl, Gl = !1,
        Hl = function(a) {
            if (!Gl) {
                Gl = !0;
                Fl = Fl || {}
            }
            return Fl[a]
        };
    var Il = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = k(c.eventMetadata || {});
        this.isAborted = !1
    };
    Il.prototype.copyToHitData = function(a, b, c) {
        var d = S(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && g(d) && N(59)) try {
            d = c(d)
        } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    };
    var Jl = function(a) {
            return a.metadata.source_canonical_id
        },
        Kl = function(a, b, c) {
            var d = Hl(a.target.Z);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function Ll(a) {
        return {
            getDestinationId: function() {
                return a.target.Z
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.o, b)
            },
            kn: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };

    function Rl(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ej("" + c + b).href
        }
    }

    function Sl() {
        return !!ze.Ce && "SGTM_TOKEN" !== ze.Ce.split("@@").join("")
    }

    function Tl(a) {
        for (var b = ha([K.g.Wc, K.g.Kb]), c = b.next(); !c.done; c = b.next()) {
            var d = S(a, c.value);
            if (d) return d
        }
    };
    var Ul = "",
        Vl = [];

    function Wl(a) {
        var b = "";
        Ul && (b = "&dl=" + encodeURIComponent(Ul));
        0 < Vl.length && (b += "&tdp=" + Vl.join("."));
        a.Bb && (Ul = "", Vl.length = 0, b && a.Hi());
        return b
    };
    var Xl = [];

    function Yl(a) {
        if (!Xl.length) return "";
        var b = "&tdc=" + Xl.join("!");
        a.Bb && (a.Hi(), Xl.length = 0);
        return b
    };
    var Zl = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        $l = {},
        am = Object.freeze(($l[K.g.Oa] = !0, $l)),
        bm = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
        dm = function(a, b, c) {
            if (Rg && "config" === a && !(1 < ql(b).N.length)) {
                var d, e = Tb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = k(c.J);
                k(c.h, f);
                var h = [],
                    l;
                for (l in d) {
                    var m = cm(d[l], f);
                    m.length && (bm && console.log(m), h.push(l))
                }
                h.length && (h.length && Rg && Xl.push(b + "*" + h.join(".")), hb("TAGGING", Zl[C.readyState] ||
                    14));
                d[b] = f
            }
        };

    function em(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function cm(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? am[q] : t
            },
            f;
        for (f in em(a, b)) {
            var h = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Xa(l) || "array" === Xa(l),
                p = "object" === Xa(m) || "array" === Xa(m);
            if (n && p) cm(l, m, c, h);
            else if (n || p || l !== m) c[h] = !0
        }
        return Object.keys(c)
    };
    var fm = {};

    function gm(a, b, c) {
        Rg && void 0 !== a && (fm[a] = fm[a] || [], fm[a].push(c + b), ah(a))
    }

    function hm(a) {
        var b = a.eventId,
            c = a.Bb,
            d = "",
            e = fm[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete fm[b];
        return d
    };
    var jm = function(a, b, c, d) {
            var e = ql(c, d.isGtmEvent);
            e && im.push("event", [b, a], e, d)
        },
        km = function(a, b, c, d) {
            var e = ql(c, d.isGtmEvent);
            e && im.push("get", [a, b], e, d)
        },
        lm = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.K = {};
            this.R = null;
            this.C = {};
            this.s = !1
        },
        mm = function(a, b, c, d) {
            var e = La();
            this.type = a;
            this.C = e;
            this.h = b;
            this.s = c;
            this.messageContext = d
        },
        nm = function() {
            this.s = {};
            this.C = {};
            this.h = []
        },
        om = function(a, b) {
            var c = b.Z;
            return a.s[c] = a.s[c] || new lm
        },
        pm = function(a, b, c, d) {
            if (d.h) {
                var e = om(a, d.h),
                    f = e.R;
                if (f) {
                    var h =
                        k(c),
                        l = k(e.J[d.h.id]),
                        m = k(e.C),
                        n = k(e.h),
                        p = k(a.C),
                        q = {};
                    if (Rg) try {
                        q = k(Ye)
                    } catch (v) {
                        G(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            gm(d.messageContext.eventId, r, v)
                        },
                        u = zh(th(sh(rh(qh(oh(nh(ph(mh(lh(kh(new jh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        gm(d.messageContext.eventId, r, "1"), dm(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        gm(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    nm.prototype.register = function(a, b, c) {
        var d = om(this, a);
        3 !== d.status && (d.R = b, d.status = 3, c && (k(d.h, c), d.h = c), this.flush())
    };
    nm.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === om(this, c).status && (om(this, c).status = 2, this.push("require", [{}], c, {})), om(this, c).s && (d.deferrable = !1));
        this.h.push(new mm(a, c, b, d));
        d.deferrable || this.flush()
    };
    nm.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
                Pb: void 0,
                Rf: void 0
            }) {
            var f = this.h[0],
                h = f.h;
            if (f.messageContext.deferrable) !h || om(this, h).s ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== om(this, h).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        Da(f.s[0], function(r, t) {
                            k(Ra(r, t), b.C)
                        });
                        break;
                    case "config":
                        var l = om(this, h);
                        e.Pb = {};
                        Da(f.s[0], function(r) {
                            return function(t, u) {
                                k(Ra(t, u), r.Pb)
                            }
                        }(e));
                        var m = !!e.Pb[K.g.Lb];
                        delete e.Pb[K.g.Lb];
                        var n = h.Z === h.id;
                        m || (n ? l.C = {} : l.J[h.id] = {});
                        l.s && m || pm(this, K.g.oa, e.Pb, f);
                        l.s = !0;
                        n ? k(e.Pb, l.C) : (k(e.Pb, l.J[h.id]), G(70));
                        d = !0;
                        break;
                    case "event":
                        e.Rf = {};
                        Da(f.s[0], function(r) {
                            return function(t, u) {
                                k(Ra(t, u), r.Rf)
                            }
                        }(e));
                        pm(this, f.s[1], e.Rf, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[K.g.eb] = f.s[0], p[K.g.ob] = f.s[1], p);
                        pm(this, K.g.La, q, f)
                }
                this.h.shift();
                qm(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var qm = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = om(a, b.h).K[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.s)
                        if (a.s.hasOwnProperty(e)) {
                            var f = a.s[e];
                            if (f && f.K)
                                for (var h = f.K[b.type] || [], l = 0; l < h.length; l++) h[l]()
                        }
        },
        rm = function(a, b) {
            var c = im,
                d = k(b);
            k(om(c, a).h, d);
            om(c, a).h = d
        },
        im = new nm;
    var Im = function() {
            function a(b) {
                Ae.pscdl = b
            }
            if (void 0 === Hm()) try {
                "cookieDeprecationLabel" in Rb ? (a("pending"), Rb.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
            } catch (b) {
                a("error")
            }
        },
        Hm = function() {
            return P(K.g.F) ? Ae.pscdl : "denied"
        };

    function Mm(a) {
        var b = S(a.o, K.g.rb),
            c = S(a.o, K.g.qb);
        b && !c ? (a.eventName !== K.g.oa && a.eventName !== K.g.Rd && G(131), a.isAborted = !0) : !b && c && (G(132), a.isAborted = !0)
    }

    function Nm(a) {
        var b = Hm();
        a.h[K.g.Xd] = b
    };
    var Pm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Qm = /^www.googleadservices.com$/,
        Sm = function(a) {
            a || (a = Rm());
            return a.xm ? !1 : a.jl || a.kl || a.ml || a.Xf || a.Le || a.Qk || a.Wk ? !0 : !1
        },
        Rm = function() {
            var a = {},
                b = Xj(!0);
            a.xm = !!b._up;
            var c = Kk();
            a.jl = void 0 !== c.aw;
            a.kl = void 0 !== c.dc;
            a.ml = void 0 !== c.gbraid;
            var d = Ej(z.location.href),
                e = Cj(d, "query", !1, void 0, "gad");
            a.Xf = void 0 !== e;
            if (!a.Xf) {
                var f = d.hash.replace("#", ""),
                    h = zj(f, "gad");
                a.Xf = void 0 !== h
            }
            a.Le = void 0;
            if (N(67)) {
                var l = Cj(d, "query", !1, void 0, "gad_source");
                a.Le =
                    l;
                if (void 0 === a.Le) {
                    var m = d.hash.replace("#", ""),
                        n = zj(m, "gad_source");
                    a.Le = n
                }
            }
            var p = C.referrer ? Cj(Ej(C.referrer), "host") : "";
            a.Wk = Pm.test(p);
            a.Qk = Qm.test(p);
            return a
        };
    var Tm = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Um = function(a) {
            if (C.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    h = e.filter;
                if (h) {
                    var l = h.indexOf("opacity(");
                    0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var Pn = {
        pk: Number('') || 500,
        Wj: Number('') || 5E3,
        Lh: Number('') || 10,
        gj: Number('') || 5E3
    };

    function Qn(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var Rn = function(a, b) {
        var c;
        return c
    };
    var Sn = "https://" + ze.Cc,
        Tn = Sn + "/gtm/static/",
        Un = Number('') || 5,
        Vn = Number('') || 50,
        Wn = Sn,
        Xn = Tn,
        Yn = !1,
        Zn = 0,
        $n = Aa();

    function jo() {
        var a = !1;
        return a
    }

    function ko(a) {}

    function mo(a, b, c) {}

    function fo(a, b, c, d) {}

    function lo(a, b, c, d, e) {}

    function no(a, b, c, d) {}

    function oo(a, b, c, d) {}

    function po(a) {
        var b = {},
            c = ["tv.1"],
            d = 0;
        var u = c.join("~");
        return {
            P: b,
            Qe: u
        }
    }

    function qo() {
        return "attribution-reporting"
    }

    function ro(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var so = !1;

    function to() {
        if (ro("join-ad-interest-group") && wa(Rb.joinAdInterestGroup)) return !0;
        so || (Oh('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), so = !0);
        return ro("join-ad-interest-group") && wa(Rb.joinAdInterestGroup)
    }

    function uo(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > La() - d) {
                hb("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else try {
            if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                hb("TAGGING", 10);
                return
            }
        } catch (e) {}
        $b(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: La()
        }, c)
    }

    function vo() {
        return "https://td.doubleclick.net"
    };
    var wo = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        xo = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        yo = /^\d+\.fls\.doubleclick\.net$/,
        zo = /;gac=([^;?]+)/,
        Ao = /;gacgb=([^;?]+)/,
        Bo = /;gclaw=([^;?]+)/,
        Co = /;gclgb=([^;?]+)/;

    function Do(a, b) {
        if (yo.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(wo) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].U);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Eo = function(a, b, c) {
        var d = Bk() ? wk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            h;
        for (h in d) {
            var l = fl("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            Pk: f ? e.join(";") : "",
            Ok: Do(d, Ao)
        }
    };

    function Fo(a, b, c) {
        if (yo.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match(xo)) return [{
                U: d[1]
            }]
        } else return Dk((a || "_gcl") + b);
        return []
    }
    var Go = function(a) {
            return Fo(a, "_aw", Bo).map(function(b) {
                return b.U
            }).join(".")
        },
        Ho = function(a) {
            return Fo(a, "_gb", Co).map(function(b) {
                return b.U
            }).join(".")
        },
        Io = function(a, b) {
            var c = fl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Jo = function() {
        if (wa(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var xp = {
        D: {
            Ag: "ads_conversion_hit",
            Bc: "container_execute_start",
            Dg: "container_setup_end",
            df: "container_setup_start",
            Bg: "container_blocking_end",
            Cg: "container_execute_end",
            Eg: "container_yield_end",
            ef: "container_yield_start",
            Eh: "event_execute_end",
            Dh: "event_evaluation_end",
            Df: "event_evaluation_start",
            Fh: "event_setup_end",
            jd: "event_setup_start",
            Gh: "ga4_conversion_hit",
            ld: "page_load",
            Sm: "pageview",
            yb: "snippet_load",
            Uh: "tag_callback_error",
            Vh: "tag_callback_failure",
            Wh: "tag_callback_success",
            Xh: "tag_execute_end",
            uc: "tag_execute_start"
        }
    };

    function yp() {
        function a(c, d) {
            var e = jb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var zp = !1;
    var gq = function(a, b) {},
        hq = function(a, b) {},
        iq = function(a, b) {},
        jq = function(a, b) {},
        kq = function() {
            var a = {};
            return a
        },
        Zp = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        lq = function() {},
        mq = function(a, b) {},
        nq = function(a, b, c) {};
    var oq = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var pq = function(a, b, c) {
        var d = Jh(a, "fmt");
        if (b) {
            var e = Jh(a, "random"),
                f = Jh(a, "label") || "";
            if (!e) return !1;
            var h = lj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!oq(h, b)) return !1
        }
        d && 4 != d && (a = Lh(a, "rfmt", d));
        var l = Lh(a, "fmt", 4);
        Yb(l, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Gq = function() {
            this.h = {}
        },
        Hq = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Iq = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Kq = function(a, b, c, d) {};

    function Mq(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Oq = function(a) {
            var b = yg(),
                c;
            c = void 0 === c ? !1 : c;
            var d = Nq(b);
            d.entity.push(a);
            d._entity || (d._entity = {
                internal: [],
                external: []
            });
            c ? d._entity.external.push(a) : d._entity.internal.push(a)
        },
        Pq = function() {
            var a = Nq(yg());
            if (N(108)) {
                var b, c;
                return [].concat(ja((null == a ? void 0 : null == (b = a._entity) ? void 0 : b.internal) || []), ja((null == a ? void 0 : null == (c = a._entity) ? void 0 : c.external) || []))
            }
            return a.entity
        },
        Qq = function(a) {
            var b = yg(),
                c;
            c = void 0 === c ? !1 : c;
            var d = Nq(b);
            d.event && (d.event.push(a), d._event || (d._event = {
                internal: [],
                external: []
            }), c ? d._event.external.push(a) : d._event.internal.push(a))
        },
        Rq = function() {
            var a = Nq(yg());
            if (N(108)) {
                var b, c;
                return [].concat(ja((null == a ? void 0 : null == (b = a._event) ? void 0 : b.internal) || []), ja((null == a ? void 0 : null == (c = a._event) ? void 0 : c.external) || []))
            }
            return a.event || []
        };

    function Nq(a) {
        var b, c = Ae.r;
        c || (c = {
            container: {}
        }, Ae.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: [],
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        }, b.container[a] = d);
        return d
    };
    var Sq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Tq = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Uq = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Vq = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Yq = function(a) {
            var b = af("gtm.allowlist") || af("gtm.whitelist");
            b && G(9);
            Ge && (b = ["google", "gtagfl",
                "lcl", "zone"
            ]);
            Wq() && (Ge ? G(116) : (G(117), Xq && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
            var c = b && Pa(Ia(b), Tq),
                d = af("gtm.blocklist") || af("gtm.blacklist");
            d || (d = af("tagTypeBlacklist")) && G(3);
            d ? G(8) : d = [];
            Wq() && (d = Ia(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ia(d).indexOf("google") && G(2);
            var e = d && Pa(Ia(d), Uq),
                f = {};
            return function(h) {
                var l = h && h[pc.ka];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Se[l] || [],
                    n = a(l, m);
                if (!N(105))
                    for (var p = Pq(), q = 0; q < p.length; q++) try {
                        n = n && p[q](l, m)
                    } catch (y) {
                        n = !1
                    }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        G(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(l);
                    if (v) u = v;
                    else {
                        var w = Ca(e, m || []);
                        w && G(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ca(e, Vq));
                return f[l] = x
            }
        },
        Xq = !1;
    Xq = !0;
    var Wq = function() {
            return Sq.test(z.location && z.location.hostname)
        },
        Zq = function() {
            if (pg) {
                var a = function(b) {
                    var c = {};
                    c[pc.ka] = "__" + b;
                    for (var d in void 0)(void 0).hasOwnProperty(d) && (c["vtp_" + d] = (void 0)[d]);
                    var e;
                    if (cd(c)) {
                        var f = c[pc.ka];
                        if (!f) throw "Error: No function name given for function call.";
                        var h = Sc[f];
                        e = !!h && !!h.runInSiloedMode
                    } else e = !!Mq(c[pc.ka], 4);
                    return e
                };
                N(104) ? Oq(function(b) {
                    return a(b.entityId)
                }) : Oq(a)
            }
        };
    var ar = function(a, b, c, d) {
            if (!$q() && !Eg(a)) {
                var e = "?id=" + encodeURIComponent(a) + "&l=" + ze.aa,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                N(44) && (e += "&gtm=" + gj());
                var h = Sl();
                h && (e += "&sign=" + ze.Ce);
                var l = c ? "/gtag/js" : "/gtm.js",
                    m = Ie || Ke ? Rl(b, l + e) : void 0;
                if (!m) {
                    var n = ze.Cc + l;
                    h && Sb && f && (n = Sb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = tl("https://", "http://", n + e)
                }
                var p = a;
                d.siloed && (Gg({
                    ctid: p,
                    isDestination: !1
                }), p = sg(p));
                var q = p,
                    r = Fg();
                lg().container[q] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                mg({
                    ctid: q,
                    isDestination: !1
                });
                Yb(m)
            }
        },
        br = function(a, b, c) {
            var d;
            if (d = !$q()) {
                var e = lg().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Hg()) lg().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Fg()
                }, mg({
                    ctid: a,
                    isDestination: !0
                }), G(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ze.aa + "&cx=c";
                    N(44) && (f += "&gtm=" + gj());
                    Sl() && (f += "&sign=" + ze.Ce);
                    var h = Ie || Ke ? Rl(b, f) : void 0;
                    h || (h = tl("https://", "http://", ze.Cc + f));
                    var l = a;
                    c.siloed && (Gg({
                        ctid: l,
                        isDestination: !0
                    }), l = sg(l));
                    lg().destination[l] = {
                        state: 1,
                        context: c,
                        parent: Fg()
                    };
                    mg({
                        ctid: l,
                        isDestination: !0
                    });
                    Yb(h)
                }
        };

    function $q() {
        if (ej()) {
            return !0
        }
        return !1
    };
    var cr = !1,
        dr = 0,
        er = [];

    function fr(a) {
        if (!cr) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                cr = !0;
                for (var e = 0; e < er.length; e++) F(er[e])
            }
            er.push = function() {
                for (var f = 0; f < arguments.length; f++) F(arguments[f]);
                return 0
            }
        }
    }

    function gr() {
        if (!cr && 140 > dr) {
            dr++;
            try {
                C.documentElement.doScroll("left"), fr()
            } catch (a) {
                z.setTimeout(gr, 50)
            }
        }
    }
    var hr = function(a) {
        cr ? a() : er.push(a)
    };
    var Er = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: xg()
        }
    };
    var Lr = function(a, b) {
            this.h = !1;
            this.J = [];
            this.K = {
                tags: []
            };
            this.R = !1;
            this.s = this.C = 0;
            Kr(this, a, b)
        },
        Mr = function(a, b, c, d) {
            if (De.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Za(d) && (e = k(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        Nr = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Or = function(a) {
            if (!a.h) {
                for (var b = a.J, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.J.length = 0
            }
        },
        Kr = function(a, b, c) {
            void 0 !== b && Pr(a, b);
            c && z.setTimeout(function() {
                return Or(a)
            }, Number(c))
        },
        Pr =
        function(a, b) {
            var c = Na(function() {
                return F(function() {
                    b(xg(), a.K)
                })
            });
            a.h ? c() : a.J.push(c)
        },
        Qr = function(a) {
            a.C++;
            return Na(function() {
                a.s++;
                a.R && a.s >= a.C && Or(a)
            })
        },
        Rr = function(a) {
            a.R = !0;
            a.s >= a.C && Or(a)
        };
    var Sr = {},
        Ur = function() {
            return z[Tr()]
        },
        Vr = !1;
    var Wr = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ka());
                z[b] = c
            }
            return z[b]
        },
        Xr = function(a) {
            if (Tf()) {
                var b = Ur();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Tr() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Yr = function(a) {},
        Zr = function(a, b) {
            return function() {
                var c = Ur(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > h.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var ds = {},
        es = {};

    function fs(a, b) {
        if (Rg) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            ds[a] = "&e=" + c + "&eid=" + a;
            ah(a)
        }
    }

    function gs(a) {
        var b = a.eventId,
            c = a.Bb;
        if (!ds[b]) return "";
        var d = es[b] ? "" : "&es=1";
        d += ds[b];
        c && (es[b] = !0);
        return d
    };
    var hs = {};

    function is(a, b) {
        Rg && (hs[a] = hs[a] || {}, hs[a][b] = (hs[a][b] || 0) + 1)
    }

    function js(a) {
        var b = a.eventId,
            c = a.Bb,
            d = hs[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete hs[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var ks = {},
        ls = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function ms(a, b, c) {
        if (Rg) {
            ks[a] = ks[a] || [];
            var d = ls[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === C ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || Za(c) ? "0" : "e";
            ks[a].push("" + d + e)
        }
    }

    function ns(a) {
        var b = a.eventId,
            c = ks[b] || [];
        if (!c.length) return "";
        a.Bb && delete ks[b];
        return "&pcr=" + c.join(".")
    };
    var os = {},
        ps = {};

    function qs(a, b, c) {
        if (Rg && b) {
            var d = jg(b);
            os[a] = os[a] || [];
            os[a].push(c + d);
            var e = (cd(b) ? "1" : "2") + d;
            ps[a] = ps[a] || [];
            ps[a].push(e);
            ah(a)
        }
    }

    function rs(a) {
        var b = a.eventId,
            c = a.Bb,
            d = "",
            e = os[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = ps[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete os[b], delete ps[b]);
        return d
    };

    function ss(a, b, c, d) {
        var e = Qc[a],
            f = ts(a, b, c, d);
        if (!f) return null;
        var h = $c(e[pc.Th], c, []);
        if (h && h.length) {
            var l = h[0];
            f = ss(l.index, {
                onSuccess: f,
                onFailure: 1 === l.ji ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function ts(a, b, c, d) {
        function e() {
            if (f[pc.dk]) l();
            else {
                var w = ad(f, c, []),
                    x = w[pc.Wi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!P(x[y])) {
                            l();
                            return
                        }
                var A = Mr(c.Ob, String(f[pc.ka]), Number(f[pc.pd]), w[pc.ek]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = La() - I;
                        qs(c.id, Qc[a], "5");
                        Nr(c.Ob, A, "success", E);
                        N(17) && nq(c, f, xp.D.Wh);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var E = La() - I;
                        qs(c.id, Qc[a], "6");
                        Nr(c.Ob, A, "failure", E);
                        N(17) && nq(c, f, xp.D.Vh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                qs(c.id, f, "1");
                var D = function() {
                    sf(3);
                    var E = La() - I;
                    qs(c.id, f, "7");
                    Nr(c.Ob, A, "exception", E);
                    N(17) && nq(c, f, xp.D.Uh);
                    B || (B = !0, l())
                };
                N(17) && mq(c, f);
                var I = La();
                try {
                    Zc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    D(E)
                }
                N(17) && nq(c, f, xp.D.Xh)
            }
        }
        var f = Qc[a],
            h = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = $c(f[pc.Yh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = ss(p.index, {
                    onSuccess: h,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            h = q;
            l = 2 ===
                p.ji ? m : q
        }
        if (f[pc.Oh] || f[pc.gk]) {
            var r = f[pc.Oh] ? Rc : c.lm,
                t = h,
                u = l;
            if (!r[a]) {
                e = Na(e);
                var v = us(a, r, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function us(a, b, c) {
        var d = [],
            e = [];
        b[a] = vs(d, e, c);
        return {
            onSuccess: function() {
                b[a] = ws;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = xs;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function vs(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ws(a) {
        a()
    }

    function xs(a, b) {
        b()
    };
    var zs = function(a, b) {
            return 1 === arguments.length ? ys("config", a) : ys("config", a, b)
        },
        As = function(a, b, c) {
            c = c || {};
            c[K.g.Jb] = a;
            return ys("event", b, c)
        };

    function ys(a) {
        return arguments
    }
    var Bs = function() {
        this.h = [];
        this.s = []
    };
    Bs.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++) try {
            this.s[f](e)
        } catch (h) {}
    };
    Bs.prototype.listen = function(a) {
        this.s.push(a)
    };
    Bs.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Bs.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Ds = function(a, b, c) {
            c.eventMetadata = c.eventMetadata || {};
            c.eventMetadata.source_canonical_id = qg.Ge;
            Cs().enqueue(a, b, c)
        },
        Fs = function() {
            var a = Es;
            Cs().listen(a)
        };

    function Cs() {
        var a = Ae.mb;
        a || (a = new Bs, Ae.mb = a);
        return a
    }
    var Ns = function(a) {
            var b = Ae.zones;
            return b ? b.getIsAllowedFn(tg(), a) : function() {
                return !0
            }
        },
        Os = function(a) {
            var b = Ae.zones;
            return b ? b.isActive(tg(), a) : !0
        },
        Ps = function() {
            N(104) ? Qq(function(a) {
                return Os(a.originalEventData["gtm.uniqueEventId"])
            }) : Qq(function(a, b) {
                return Os(b)
            });
            N(105) && N(106) && Oq(function(a) {
                var b = a.entityId,
                    c = a.securityGroups;
                return Ns(a.originalEventData["gtm.uniqueEventId"])(b, c)
            })
        };
    var Ss = function(a, b) {
        for (var c = [], d = 0; d < Qc.length; d++)
            if (a[d]) {
                var e = Qc[d];
                var f = Qr(b.Ob);
                try {
                    var h = ss(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[pc.ka];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Sc[l];
                        c.push({
                            Mi: d,
                            zi: (m ? m.priorityOverride || 0 : 0) || Mq(e[pc.ka], 1) || 0,
                            execute: h
                        })
                    } else Qs(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Rs);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Rs(a, b) {
        var c, d = b.zi,
            e = a.zi;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Mi,
                l = b.Mi;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }

    function Qs(a, b) {
        if (Rg) {
            var c = function(d) {
                var e = b.isBlocked(Qc[d]) ? "3" : "4",
                    f = $c(Qc[d][pc.Th], b, []);
                f && f.length && c(f[0].index);
                qs(b.id, Qc[d], e);
                var h = $c(Qc[d][pc.Yh], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Vs = !1,
        Ts;
    var at = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (N(17)) {}
        if ("gtm.js" === d) {
            if (Vs) return !1;
            Vs = !0
        }
        var e, f = !1,
            h = Rq(),
            l;
        if (N(104)) {
            var m = k(a);
            l = h.every(function(w) {
                return w({
                    originalEventData: m
                })
            })
        } else l = h.every(function(w) {
            return w(d, b)
        });
        if (l) e = Ns(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !==
                d) return !1;
            f = !0;
            e = Ns(Number.MAX_SAFE_INTEGER)
        }
        fs(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = k(a),
            r = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: Ws(e, q),
                lm: [],
                logMacroError: function() {
                    G(6);
                    sf(0)
                },
                cachedModelValues: Xs(),
                checkPixieIncompatibility: Ys(b),
                Ob: new Lr(function() {
                    if (N(17)) {}
                    n && n.apply(n, [].slice.call(arguments, 0))
                }, p),
                originalEventData: q
            };
        N(35) && (r.reportMacroDiscrepancy = is);
        N(17) && iq(r.id, r.name);
        var t = fd(r);
        N(17) && jq(r.id, r.name);
        f && (t = Zs(t));
        if (N(17)) {}
        var u = Ss(t, r),
            v = !1;
        Rr(r.Ob);
        "gtm.js" !== d && "gtm.sync" !== d || Yr(xg());
        return $s(t, u) || v
    };

    function Ys(a) {
        return function(b) {
            $a(b) || ms(a, "input", b)
        }
    }

    function Xs() {
        var a = {};
        a.event = ef("event", 1);
        a.ecommerce = ef("ecommerce", 1);
        a.gtm = ef("gtm");
        a.eventModel = ef("eventModel");
        return a
    }

    function Ws(a, b) {
        var c = Yq(a);
        return N(105) ? function(d) {
            if (c(d)) return !0;
            var e = d && d[pc.ka];
            if (!e || "string" != typeof e) return !0;
            e = e.replace(/^_*/, "");
            for (var f = Pq(), h = Se[e] || [], l = ha(f), m = l.next(); !m.done; m = l.next()) {
                var n = m.value;
                try {
                    if (!n({
                            entityId: e,
                            securityGroups: h,
                            originalEventData: b
                        })) return !0
                } catch (p) {
                    return !0
                }
            }
            return !1
        } : c
    }

    function Zs(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Qc[c][pc.ka]);
                if (Ce[d] || void 0 !== Qc[c][pc.hk] || Te[d] || Mq(d, 2)) b[c] = !0
            }
        return b
    }

    function $s(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Qc[c] && !De[String(Qc[c][pc.ka])]) return !0;
        return !1
    }
    var bt = {},
        ct = {},
        dt = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    rg: void 0,
                    Wf: void 0
                }, f++) {
                var h = a[f];
                if (0 <= h.indexOf("-")) {
                    if (e.rg = ql(h, b), e.rg) {
                        var l = vg();
                        za(l, function(r) {
                            return function(t) {
                                return r.rg.Z === t
                            }
                        }(e)) ? c.push(h) : d.push(h)
                    }
                } else {
                    var m = bt[h] || [];
                    e.Wf = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Wf[t] = !0
                        }
                    }(e));
                    for (var n = tg(), p = 0; p < n.length; p++)
                        if (e.Wf[n[p]]) {
                            c = c.concat(vg());
                            break
                        }
                    var q = ct[h] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Il: c,
                Kl: d
            }
        },
        et = function(a) {
            Da(bt, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        ft = function(a) {
            Da(ct, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var gt = "HA GF G UA AW DC MC".split(" "),
        ht = !1,
        it = !1;

    function jt(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ue()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var kt = void 0,
        lt = void 0;

    function mt(a, b, c) {
        var d = k(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && G(136);
        var e = k(b);
        k(c, e);
        Ds(zs(tg()[0], e), a.eventId, d)
    }

    function nt(a) {
        for (var b = ha([K.g.Wc, K.g.Kb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || im.C[d];
            if (e) return e
        }
    }
    var ot = {
            config: function(a, b) {
                var c = N(36),
                    d = jt(a, b);
                if (!(2 > a.length) && g(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Za(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = ql(a[1], b.isGtmEvent);
                    if (f) {
                        var h, l, m;
                        a: {
                            if (!og.kd) {
                                var n = zg(Fg());
                                if (Jg(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Pl: zg(p),
                                        Hl: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (h = r.Pl, l = r.Hl);
                        fs(d.eventId, "gtag.config");
                        var t = f.Z,
                            u = f.id !== t;
                        if (u ? -1 === vg().indexOf(t) : -1 === tg().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || e[K.g.rb])) {
                                var v = nt(e);
                                if (u) br(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                                    var w = e;
                                    kt ? mt(b, w, kt) : lt || (lt = k(w))
                                } else ar(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (h && (G(128), l && G(130), c && b.inheritParentConfig)) {
                                var x;
                                var y = e;
                                lt ? (mt(b, lt, y), x = !1) : (!y[K.g.Lb] && Fe && kt || (kt = k(y)), x = !0);
                                x && h.containers && h.containers.join(",");
                                return
                            }
                            if (Fe && !u && !e[K.g.Lb]) {
                                var A = it;
                                it = !0;
                                if (A) return
                            }
                            ht || G(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    ft(f.id);
                                    var B = f.id,
                                        D = e[K.g.me] ||
                                        "default";
                                    D = String(D).split(",");
                                    for (var I = 0; I < D.length; I++) {
                                        var E = ct[D[I]] || [];
                                        ct[D[I]] = E;
                                        0 > E.indexOf(B) && E.push(B)
                                    }
                                } else {
                                    et(f.id);
                                    var H = f.id,
                                        J = e[K.g.me] || "default";
                                    J = J.toString().split(",");
                                    for (var M = 0; M < J.length; M++) {
                                        var O = bt[J[M]] || [];
                                        bt[J[M]] = O;
                                        0 > O.indexOf(H) && O.push(H)
                                    }
                                }
                            delete e[K.g.me];
                            var T = b.eventMetadata || {};
                            T.hasOwnProperty("is_external_event") || (T.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = T;
                            delete e[K.g.Qc];
                            for (var Q = u ? [f.id] : vg(), R = 0; R < Q.length; R++) {
                                var da = e,
                                    W = Q[R],
                                    V = k(b),
                                    ua = ql(W, V.isGtmEvent);
                                ua && im.push("config", [da], ua, V)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    G(39);
                    var c = jt(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[K.g.M] && G(139), e[K.g.ya] && G(140));
                    "default" === d ? cg(e) : "update" === d ? dg(e, c) : "declare" === d ? b.fromContainerExecution && bg(e) : N(72) && "core_platform_services" === d && eg(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && g(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Za(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        h = (f.event = c, f);
                    e && (h.eventModel =
                        k(e), e[K.g.Qc] && (h.eventCallback = e[K.g.Qc]), e[K.g.fe] && (h.eventTimeout = e[K.g.fe]));
                    var l = jt(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    h["gtm.uniqueEventId"] = m;
                    n && (h["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
                    var p;
                    var q = d,
                        r = q && q[K.g.Jb];
                    void 0 === r && (r = af(K.g.Jb, 2), void 0 === r && (r = "default"));
                    if (g(r) || ya(r)) {
                        var t;
                        b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = dt(t, b.isGtmEvent),
                            v = u.Il,
                            w = u.Kl;
                        if (w.length)
                            for (var x = nt(q), y = 0; y < w.length; y++) {
                                var A =
                                    ql(w[y], b.isGtmEvent);
                                A && br(A.Z, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = sl(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        fs(m, c);
                        for (var D = [], I = 0; I < B.length; I++) {
                            var E = B[I],
                                H = k(b);
                            if (-1 !== gt.indexOf(Ag(E.prefix))) {
                                var J = k(d),
                                    M = H.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !H.fromContainerExecution);
                                H.eventMetadata = M;
                                delete J[K.g.Qc];
                                jm(c, J, E.id, H)
                            }
                            D.push(E.id)
                        }
                        h.eventModel = h.eventModel || {};
                        0 < B.length ? h.eventModel[K.g.Jb] = D.join() : delete h.eventModel[K.g.Jb];
                        ht || G(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        h.eventModel[K.g.qb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : h
                    }
                }
            },
            get: function(a, b) {
                G(53);
                if (4 === a.length && g(a[1]) && g(a[2]) && wa(a[3])) {
                    var c = ql(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        ht || G(43);
                        var f = nt();
                        if (!za(vg(), function(l) {
                                return c.Z === l
                            })) br(c.Z, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== gt.indexOf(Ag(c.prefix))) {
                            jt(a, b);
                            var h = {};
                            Zf(k((h[K.g.eb] = d, h[K.g.ob] =
                                e, h)));
                            km(d, function(l) {
                                F(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    ht = !0;
                    var c = jt(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Za(a[1]) ? c = k(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Za(a[2]) || ya(a[2]) ? c[a[1]] = k(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = jt(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    k(c);
                    var h = k(c);
                    im.push("set", [h],
                        void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    N(9) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        pt = {
            policy: !0
        };
    var qt = function(a) {
            var b = z[ze.aa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        rt = function(a) {
            var b = z[ze.aa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var st = !1,
        tt = [];

    function ut() {
        if (!st) {
            st = !0;
            for (var a = 0; a < tt.length; a++) F(tt[a])
        }
    }
    var vt = function(a) {
        st ? F(a) : tt.push(a)
    };
    var Nt = function(a) {
        if (Mt(a)) return a;
        this.h = a
    };
    Nt.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Mt = function(a) {
        return !a || "object" !== Xa(a) || Za(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Nt.prototype.getUntrustedMessageValue = Nt.prototype.getUntrustedMessageValue;
    var Ot = 0,
        Pt = {},
        Qt = [],
        Rt = [],
        St = !1,
        Tt = !1;

    function Ut(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Vt = function(a) {
            return z[ze.aa].push(a)
        },
        Wt = function(a, b) {
            if (!xa(b) || 0 > b) b = 0;
            var c = Ae[ze.aa],
                d = 0,
                e = !1,
                f = void 0;
            f = z.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var h = c ? c.subscribers : 1;
                ++d === h && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function Xt(a, b) {
        var c = a._clear || b.overwriteModelFields;
        Da(a, function(e, f) {
            "_clear" !== e && (c && df(e), df(e, f))
        });
        Pe || (Pe = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Ue(), a["gtm.uniqueEventId"] = d, df("gtm.uniqueEventId", d));
        return at(a)
    }

    function Yt(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Zt() {
        var a;
        if (Rt.length) a = Rt.shift();
        else if (Qt.length) a = Qt.shift();
        else return;
        var b;
        var c = a;
        if (St || !Yt(c.message)) b = c;
        else {
            St = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ue());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                h = {},
                l = {
                    message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Qt.unshift(l, c);
            if (Rg) {
                var m = qg.ctid;
                if (m) {
                    var n, p = zg(Fg());
                    n = p && p.context;
                    var q, r = Ej(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = qg.Ge,
                        w = og.kd;
                    Rg && (Ul || (Ul = q), Vl.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function $t() {
        for (var a = !1, b; !Tt && (b = Zt());) {
            Tt = !0;
            delete Ye.eventModel;
            $e();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Tt = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h],
                            m = af(l, 1);
                        if (ya(m) || Za(m)) m = k(m);
                        Ze[l] = m
                    }
                try {
                    if (wa(d)) try {
                        d.call(bf)
                    } catch (D) {} else if (ya(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = af(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (D) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Ea(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = ot[d[0]];
                                    if (w && (!e.fromContainerExecution || !pt[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && G(101)
                        }
                        else u = d;
                        if (u) {
                            var x = Xt(u, e);
                            a = x || a;
                            v && x && G(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && $e(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = Pt[String(y)] || [], B = 0; B < A.length; B++) Rt.push(au(A[B]));
                        A.length && Rt.sort(Ut);
                        delete Pt[String(y)];
                        y > Ot && (Ot = y)
                    }
                    Tt = !1
                }
            }
        }
        return !a
    }

    function bu() {
        if (N(17)) {
            var a = cu();
        }
        var b = $t();
        if (N(17)) {}
        try {
            qt(xg())
        } catch (c) {}
        return b
    }

    function Es(a) {
        if (Ot < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Pt[b] = Pt[b] || [];
            Pt[b].push(a)
        } else Rt.push(au(a)), Rt.sort(Ut), F(function() {
            Tt || $t()
        })
    }

    function au(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var du = function() {
            function a(f) {
                var h = {};
                if (Mt(f)) {
                    var l = f;
                    f = Mt(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: h
                }
            }
            var b = Tb(ze.aa, []),
                c = Ae[ze.aa] = Ae[ze.aa] || {};
            !0 === c.pruned && G(83);
            Pt = Cs().get();
            Fs();
            hr(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            vt(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Ae.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var h = 0; h < arguments.length; h++) f[h] = new Nt(arguments[h])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Qt.push.apply(Qt, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (G(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return $t() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Qt.push.apply(Qt, e);
            if (cu()) {
                if (N(17)) {}
                F(bu)
            }
        },
        cu = function() {
            var a = !0;
            return a
        };

    function eu(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = La();
        return b < c + 3E5 && b > c - 9E5
    }

    function fu(a) {
        return a && 0 === a.indexOf("pending:") ? eu(a.substr(8)) : !1
    };
    var Au = function() {};
    var Bu = function() {};
    Bu.prototype.toString = function() {
        return "undefined"
    };
    var Cu = new Bu;
    var Eu = function() {
            (Ae.rm = Ae.rm || {})[yg()] = function(a) {
                if (Du.hasOwnProperty(a)) return Du[a]
            }
        },
        Hu = function(a, b, c) {
            if (a instanceof Fu) {
                var d = a,
                    e = d.h,
                    f = b,
                    h = Ue();
                Gu[h] = [f, c];
                a = e.call(d, h);
                b = va
            }
            return {
                ol: a,
                onSuccess: b
            }
        },
        Iu = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                G(a ? 134 : 135);
                var d = Gu[c];
                if (d && "function" === typeof d[b]) d[b]();
                Gu[c] = void 0
            }
        },
        Fu = function(a) {
            this.h = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Cu ? b : a[d]);
                return c.join("")
            }
        };
    Fu.prototype.toString = function() {
        return this.h("undefined")
    };
    Fu.prototype.valueOf = Fu.prototype.toString;
    var Du = {},
        Gu = {};
    var gv = z.clearTimeout,
        hv = z.setTimeout,
        U = function(a, b, c, d) {
            if (ej()) {
                b && F(b)
            } else return Yb(a, b, c, d)
        },
        iv = function() {
            return new Date
        },
        jv = function() {
            return z.location.href
        },
        kv = function(a) {
            return Cj(Ej(a), "fragment")
        },
        lv = function(a) {
            return Dj(Ej(a))
        },
        mv = function(a, b) {
            return af(a, b || 2)
        },
        nv = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Vt(a)) : d = Vt(a);
            return d
        },
        ov = function(a, b) {
            z[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        pv = function(a, b, c) {
            return Mi(a, b, void 0 === c ? !0 : !!c)
        },
        qv = function(a, b, c) {
            return 0 === Vi(a, b, c)
        },
        rv = function(a, b) {
            if (ej()) {
                b && F(b)
            } else $b(a, b)
        },
        sv = function(a) {
            return !!Nu(a, "init", !1)
        },
        tv = function(a) {
            Lu(a, "init", !0)
        },
        uv = function(a, b, c) {
            $a(a) || ms(c, b, a)
        };

    function Rv(a, b) {
        function c(h) {
            var l = Ej(h),
                m = Cj(l, "protocol"),
                n = Cj(l, "host", !0),
                p = Cj(l, "port"),
                q = Cj(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Sv(a) {
        return Tv(a) ? 1 : 0
    }

    function Tv(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = k(a, {});
                k({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Sv(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var h = 0; h < wd.length; h++) {
                            var l = wd[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var r = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + r,
                        u = xd.get(t);
                    u || (u = new RegExp(c, r), xd.set(t, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Rv(b, c)
        }
        return !1
    };

    function Uv() {
        var a = ["&cv=16", "&rv=" + ze.Hf, "&tc=" + Qc.filter(function(b) {
            return b
        }).length];
        ze.nd && a.push("&x=" + ze.nd);
        We() && a.push("&exp=" + We());
        return a.join("")
    };
    var yw = function() {
            var a = !0;
            qi(7) && qi(9) && qi(10) || (a = !1);
            return a
        },
        zw = function() {
            var a = !0;
            qi(3) && qi(4) || (a = !1);
            return a
        };
    var Dw = function(a, b) {
            if (!b.isGtmEvent) {
                var c = S(b, K.g.eb),
                    d = S(b, K.g.ob),
                    e = S(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    Aw.hasOwnProperty(c) ? f = Aw[c] : Bw.hasOwnProperty(c) && (f = Bw[c]);
                    1 === f && (f = Cw(c));
                    g(f) ? Ur()(function() {
                        var h = Ur().getByName(a).get(f);
                        d(h)
                    }) : d(void 0)
                } else d(e)
            }
        },
        Ew = function(a, b) {
            var c = a[K.g.oc],
                d = b + ".",
                e = a[K.g.T] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                h = !!a[K.g.Hb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = Ur();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, h)
        },
        Iw = function(a,
            b, c) {
            if (Tf() || N(26))
                if (!c.isGtmEvent || !Fw[a]) {
                    var d = !P(K.g.O),
                        e = function(f) {
                            var h, l, m = Ur(),
                                n = Gw(b, "", c),
                                p, q = n.createOnlyFields._useUp;
                            if (c.isGtmEvent || Hw(b, n.createOnlyFields)) {
                                c.isGtmEvent && (h = "gtm" + Ue(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = h));
                                m(function() {
                                    var t = m.getByName(b);
                                    t && (p = t.get("clientId"));
                                    c.isGtmEvent || m.remove(b)
                                });
                                m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                                d && P(K.g.O) && (d = !1, m(function() {
                                    var t = Ur().getByName(c.isGtmEvent ? h : b);
                                    !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = ue[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = ue[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                                }));
                                c.isGtmEvent && m(function() {
                                    m.remove(h)
                                })
                            }
                        };
                    fg(function() {
                        return e(K.g.O)
                    }, K.g.O);
                    fg(function() {
                            return e(K.g.F)
                        },
                        K.g.F);
                    c.isGtmEvent && (Fw[a] = !0)
                }
        },
        Jw = function(a, b) {
            Sl() && b && (a[K.g.cb] = b)
        },
        Sw = function(a, b, c) {
            function d() {
                var M = S(c, K.g.Mc);
                l(function() {
                    if (!c.isGtmEvent && Za(M)) {
                        var O = u.fieldsToSend,
                            T = m().getByName(n),
                            Q;
                        for (Q in M)
                            if (M.hasOwnProperty(Q) && /^(dimension|metric)\d+$/.test(Q) && void 0 != M[Q]) {
                                var R = T.get(Cw(M[Q]));
                                Kw(O, Q, R)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var M = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: M
                    })
                }
            }
            var f = a,
                h, l = c.isGtmEvent ? Wr(S(c, "gaFunctionName")) :
                Wr();
            if (wa(l)) {
                var m = Ur,
                    n;
                c.isGtmEvent ? n = S(c, "name") || S(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(M) {
                        var O = [].slice.call(arguments, 0);
                        O[0] = n ? n + "." + O[0] : "" + O[0];
                        l.apply(window, O)
                    },
                    q = function(M) {
                        var O = function(V, ua) {
                                for (var fa = 0; ua && fa < ua.length; fa++) p(V, ua[fa])
                            },
                            T = c.isGtmEvent,
                            Q = T ? Lw(u) : Mw(b, c);
                        if (Q) {
                            var R = {};
                            Jw(R, M);
                            p("require", "ec", "ec.js", R);
                            T && Q.Of && p("set", "&cu", Q.Of);
                            var da = Q.action;
                            if (T || "impressions" === da)
                                if (O("ec:addImpression", Q.oi), !T) return;
                            if ("promo_click" ===
                                da || "promo_view" === da || T && Q.Md) {
                                var W = Q.Md;
                                O("ec:addPromo", W);
                                if (W && 0 < W.length && "promo_click" === da) {
                                    T ? p("ec:setAction", da, Q.Va) : p("ec:setAction", da);
                                    return
                                }
                                if (!T) return
                            }
                            "promo_view" !== da && "impressions" !== da && (O("ec:addProduct", Q.Vb), p("ec:setAction", da, Q.Va))
                        }
                    },
                    r = function(M) {
                        if (M) {
                            var O = {};
                            if (Za(M))
                                for (var T in Nw) Nw.hasOwnProperty(T) && Ow(Nw[T], T, M[T], O);
                            Jw(O, y);
                            p("require", "linkid", O)
                        }
                    },
                    t = function() {
                        if (ej()) {} else {
                            var M =
                                S(c, K.g.Mj);
                            M && (p("require", M, {
                                dataLayer: ze.aa
                            }), p("require", "render"))
                        }
                    },
                    u = Gw(n, b, c),
                    v = function(M, O, T) {
                        T && (O = "" + O);
                        u.fieldsToSend[M] = O
                    };
                !c.isGtmEvent && Hw(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), Pw[n] = !1);
                l("create", f, u.createOnlyFields);
                var w = c.isGtmEvent && u.fieldsToSet[K.g.cb] && N(103);
                if (!c.isGtmEvent && u.createOnlyFields[K.g.cb] || w) {
                    var x = Ie || Ke ? Rl(c.isGtmEvent ? u.fieldsToSet[K.g.cb] : u.createOnlyFields[K.g.cb], "/analytics.js") : void 0;
                    x && (h = x)
                }
                var y = c.isGtmEvent ? u.fieldsToSet[K.g.cb] :
                    u.createOnlyFields[K.g.cb];
                if (y) {
                    var A = c.isGtmEvent ? u.fieldsToSet[K.g.ie] : u.createOnlyFields[K.g.ie];
                    A && !Pw[n] && (Pw[n] = !0, l(Zr(n, A)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var B = u[K.g.Ia];
                B && B[K.g.T] && Ew(B, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var D = {};
                        Jw(D, y);
                        p("require", "linkid", "linkid.js", D)
                    }
                    Iw(f, n, c)
                }
                if (b === K.g.ic)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var I = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require",
                                "adfeatures", {
                                    cookieName: I
                                })
                        }
                        q(y);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && Xr(n + ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === K.g.oa ? (t(), El(f, c), S(c, K.g.vb) && (cl(["aw", "dc"]), Xr(n + ".")), el(["aw", "dc"]), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), Iw(f, n, c)) : b === K.g.La ? Dw(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) :
                    v("timingVar", u.name, !0), v("timingValue", Fa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || Qw[b]) && q(y), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Fa(u.value))), p("send", u.fieldsToSend));
                var E = h && N(103) && !c.eventMetadata.suppress_script_load;
                if (!Rw && (!c.isGtmEvent || E)) {
                    h = h || "https://www.google-analytics.com/analytics.js";
                    Rw = !0;
                    var H = function() {
                            c.onFailure()
                        },
                        J = function() {
                            m().loaded || H()
                        };
                    ej() ? F(J) : Yb(h, J, H)
                }
            } else F(c.onFailure)
        },
        Tw = function(a, b, c, d) {
            gg(function() {
                Sw(a, b, d)
            }, [K.g.O, K.g.F])
        },
        Vw = function(a) {
            function b(e) {
                function f(l,
                    m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            h[l] = e[p];
                            break
                        }
                    }
                }
                var h = k(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) h.category = e.category;
                    else {
                        for (var l = "", m = 0; m < Uw.length; m++) void 0 !== e[Uw[m]] && (l && (l += "/"), l += e[Uw[m]]);
                        l && (h.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return h
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Za(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        Ww = function(a) {
            return P(a)
        },
        Xw = !1;
    var Rw, Pw = {},
        Fw = {},
        Yw = {},
        Zw = Object.freeze((Yw.page_hostname = 1, Yw[K.g.ja] = 1, Yw[K.g.Za] = 1, Yw[K.g.Sa] = 1, Yw[K.g.Ga] = 1, Yw[K.g.Ta] = 1, Yw[K.g.jc] =
            1, Yw[K.g.Lc] = 1, Yw[K.g.Na] = 1, Yw[K.g.kc] = 1, Yw[K.g.za] = 1, Yw[K.g.Uc] = 1, Yw[K.g.Ja] = 1, Yw[K.g.sb] = 1, Yw)),
        $w = {},
        Aw = Object.freeze(($w.client_storage = "storage", $w.sample_rate = 1, $w.site_speed_sample_rate = 1, $w.store_gac = 1, $w.use_amp_client_id = 1, $w[K.g.lb] = 1, $w[K.g.Ea] = "storeGac", $w[K.g.Sa] = 1, $w[K.g.Ga] = 1, $w[K.g.Ta] = 1, $w[K.g.jc] = 1, $w[K.g.Lc] = 1, $w[K.g.kc] = 1, $w)),
        ax = {},
        bx = Object.freeze((ax._cs = 1, ax._useUp = 1, ax.allowAnchor = 1, ax.allowLinker = 1, ax.alwaysSendReferrer = 1, ax.clientId = 1, ax.cookieDomain = 1, ax.cookieExpires =
            1, ax.cookieFlags = 1, ax.cookieName = 1, ax.cookiePath = 1, ax.cookieUpdate = 1, ax.legacyCookieDomain = 1, ax.legacyHistoryImport = 1, ax.name = 1, ax.sampleRate = 1, ax.siteSpeedSampleRate = 1, ax.storage = 1, ax.storeGac = 1, ax.useAmpClientId = 1, ax._cd2l = 1, ax)),
        cx = Object.freeze({
            anonymize_ip: 1
        }),
        dx = {},
        Bw = Object.freeze((dx.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, dx.app_id = 1, dx.app_installer_id = 1, dx.app_name = 1, dx.app_version =
            1, dx.description = "exDescription", dx.fatal = "exFatal", dx.language = 1, dx.page_hostname = "hostname", dx.transport_type = "transport", dx[K.g.ra] = "currencyCode", dx[K.g.oh] = 1, dx[K.g.za] = "location", dx[K.g.Uc] = "page", dx[K.g.Ja] = "referrer", dx[K.g.sb] = "title", dx[K.g.zf] = 1, dx[K.g.Pa] = 1, dx)),
        ex = {},
        fx = Object.freeze((ex.content_id = 1, ex.event_action = 1, ex.event_category = 1, ex.event_label = 1, ex.link_attribution = 1, ex.name = 1, ex[K.g.Ia] = 1, ex[K.g.nh] = 1, ex[K.g.Oa] = 1, ex[K.g.ba] = 1, ex)),
        gx = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Uw = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        hx = {},
        Nw = Object.freeze((hx.levels = 1, hx[K.g.Ga] = "duration", hx[K.g.jc] = 1, hx)),
        ix = {},
        jx = Object.freeze((ix.anonymize_ip = 1, ix.fatal = 1, ix.send_page_view = 1, ix.store_gac = 1, ix.use_amp_client_id = 1,
            ix[K.g.Ea] = 1, ix[K.g.oh] = 1, ix)),
        Ow = function(a, b, c, d) {
            if (void 0 !== c)
                if (jx[b] && (c = Ga(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Cw(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Cw = function(a) {
            return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        kx = {},
        Qw = Object.freeze((kx.checkout_progress = 1, kx.select_content = 1, kx.set_checkout_option = 1, kx[K.g.ac] = 1, kx[K.g.bc] = 1, kx[K.g.Cb] = 1, kx[K.g.fc] = 1, kx[K.g.Xa] = 1, kx[K.g.jb] = 1, kx[K.g.Ya] =
            1, kx[K.g.na] = 1, kx[K.g.hc] = 1, kx[K.g.Ca] = 1, kx)),
        lx = {},
        mx = Object.freeze((lx.checkout_progress = 1, lx.set_checkout_option = 1, lx[K.g.Kg] = 1, lx[K.g.Lg] = 1, lx[K.g.ac] = 1, lx[K.g.bc] = 1, lx[K.g.Mg] = 1, lx[K.g.Cb] = 1, lx[K.g.na] = 1, lx[K.g.hc] = 1, lx[K.g.Ng] = 1, lx)),
        nx = {},
        ox = Object.freeze((nx.generate_lead = 1, nx.login = 1, nx.search = 1, nx.select_content = 1, nx.share = 1, nx.sign_up = 1, nx.view_search_results = 1, nx[K.g.fc] = 1, nx[K.g.Xa] = 1, nx[K.g.jb] = 1, nx[K.g.Ya] = 1, nx[K.g.Ca] = 1, nx)),
        px = function(a) {
            var b = "general";
            mx[a] ? b = "ecommerce" : ox[a] ?
                b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        qx = {},
        rx = Object.freeze((qx.view_search_results = 1, qx[K.g.Xa] = 1, qx[K.g.Ya] = 1, qx[K.g.Ca] = 1, qx)),
        Kw = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        sx = function(a) {
            if (ya(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Gw = function(a, b, c) {
            var d = function(M) {
                    return S(c, M)
                },
                e = {},
                f = {},
                h = {},
                l = {},
                m = sx(d(K.g.Kj));
            !c.isGtmEvent && m &&
                Kw(f, "exp", m);
            h["&gtm"] = gj(c.eventMetadata.source_canonical_id, !0);
            c.isGtmEvent || (h._no_slc = !0);
            Tf() && (l._cs = Ww);
            var n = d(K.g.Mc);
            if (!c.isGtmEvent && Za(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Kw(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = gh(c), u = 0; u < t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    gx.hasOwnProperty(v) ? e[v] = w : bx.hasOwnProperty(v) ? l[v] = w : h[v] = w
                } else {
                    var x = void 0;
                    x = v !== K.g.X ? d(v) : hh(c, v);
                    if (fx.hasOwnProperty(v)) Ow(fx[v],
                        v, x, e);
                    else if (cx.hasOwnProperty(v)) Ow(cx[v], v, x, h);
                    else if (Bw.hasOwnProperty(v)) Ow(Bw[v], v, x, f);
                    else if (Aw.hasOwnProperty(v)) Ow(Aw[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) Ow(1, v, x, f);
                    else if (v === K.g.X) {
                        if (!Xw) {
                            var y = Ta(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === K.g.oa ? A = Ta(hh(c, v), ".") : (A = Ta(hh(c, v, 1), "."), B = Ta(hh(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === K.g.Na && 0 > t.indexOf(K.g.jc) && (l.cookieName = x + "_ga");
                    N(24) && Zw[v] && (c.C.hasOwnProperty(v) || b === K.g.oa &&
                        c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            N(24) && r && (f["&jsscut"] = "1");
            !1 !== d(K.g.jf) && !1 !== d(K.g.Za) && yw() || (h.allowAdFeatures = !1);
            wi(c) && (N(53) || zw()) ? N(32) && (h.allowAdPersonalizationSignals = !0) : h.allowAdPersonalizationSignals = !1;
            !c.isGtmEvent && d(K.g.vb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var D = h.hitCallback;
                h.hitCallback = function() {
                    wa(D) && D();
                    c.onSuccess()
                }
            } else {
                Kw(l, "cookieDomain", "auto");
                Kw(h, "forceSSL", !0);
                Kw(e, "eventCategory", px(b));
                rx[b] && Kw(f, "nonInteraction", !0);
                "login" ===
                b || "sign_up" === b || "share" === b ? Kw(e, "eventLabel", d(K.g.nh)) : "search" === b || "view_search_results" === b ? Kw(e, "eventLabel", d(K.g.Sj)) : "select_content" === b && Kw(e, "eventLabel", d(K.g.Bj));
                var I = e[K.g.Ia] || {},
                    E = I[K.g.Sc];
                E || 0 != E && I[K.g.T] ? l.allowLinker = !0 : !1 === E && Kw(l, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                l.name = a
            }
            xi() && (h["&gcs"] = yi());
            N(28) && (h["&gcd"] = Ci(c));
            Tf() && (P(K.g.O) || (l.storage = "none"), P(K.g.F) || (h.allowAdFeatures = !1, l.storeGac = !1));
            N(30) && (Gi() && (h["&dma_cps"] = Di()), h["&dma"] = Fi());
            N(53) &&
                Yh(gi()) && (h["&tcfd"] = Hi());
            We() && (h["&exp"] = We());
            var H = Tl(c) || d(K.g.cb),
                J = d(K.g.ie);
            H && (c.isGtmEvent || (l[K.g.cb] = H), l._cd2l = !0);
            J && !c.isGtmEvent && (l[K.g.ie] = J);
            e.fieldsToSend = f;
            e.fieldsToSet = h;
            e.createOnlyFields = l;
            return e
        },
        Lw = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Of = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.oi = "impressions" === b.translateIfKeyEquals ? Vw(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Md = "promoView" === b.translateIfKeyEquals ? Vw(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Md = "promoClick" === b.translateIfKeyEquals ? Vw(f) : f;
                c.Va = b.promoClick.actionField;
                return c
            }
            for (var h in b)
                if (b.hasOwnProperty(h) && "translateIfKeyEquals" !== h && "impressions" !== h && "promoView" !== h && "promoClick" !== h && "currencyCode" !== h) {
                    c.action = h;
                    var l = b[h].products;
                    c.Vb = "products" === b.translateIfKeyEquals ? Vw(l) : l;
                    c.Va = b[h].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Mw = function(a,
            b) {
            function c(u) {
                return {
                    id: d(K.g.sa),
                    affiliation: d(K.g.Rg),
                    revenue: d(K.g.ba),
                    tax: d(K.g.pf),
                    shipping: d(K.g.Pc),
                    coupon: d(K.g.Sg),
                    list: d(K.g.nf) || d(K.g.Oc) || u
                }
            }
            for (var d = function(u) {
                    return S(b, u)
                }, e = d(K.g.W), f, h = 0; e && h < e.length && !(f = e[h][K.g.nf] || e[h][K.g.Oc]); h++);
            var l = d(K.g.Mc);
            if (Za(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Kw(n, p, n[l[p]])
                }
            var q = null,
                r = d(K.g.Fj);
            if (a === K.g.na || a === K.g.hc) q = {
                action: a,
                Va: c(),
                Vb: Vw(e)
            };
            else if (a === K.g.ac) q = {
                action: "add",
                Va: c(),
                Vb: Vw(e)
            };
            else if (a === K.g.bc) q = {
                action: "remove",
                Va: c(),
                Vb: Vw(e)
            };
            else if (a === K.g.Ca) q = {
                action: "detail",
                Va: c(f),
                Vb: Vw(e)
            };
            else if (a === K.g.Xa) q = {
                action: "impressions",
                oi: Vw(e)
            };
            else if (a === K.g.Ya) q = {
                action: "promo_view",
                Md: Vw(r) || Vw(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === K.g.jb) q = {
                action: "promo_click",
                Md: Vw(r) || Vw(e)
            };
            else if ("select_content" === a || a === K.g.fc) q = {
                action: "click",
                Va: {
                    list: d(K.g.nf) || d(K.g.Oc) || f
                },
                Vb: Vw(e)
            };
            else if (a === K.g.Cb || "checkout_progress" ===
                a) {
                var t = {
                    step: a === K.g.Cb ? 1 : d(K.g.lf),
                    option: d(K.g.Zd)
                };
                q = {
                    action: "checkout",
                    Vb: Vw(e),
                    Va: k(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Va: {
                    step: d(K.g.lf),
                    option: d(K.g.Zd)
                }
            });
            q && (q.Of = d(K.g.ra));
            return q
        },
        tx = {},
        Hw = function(a, b) {
            var c = tx[a];
            tx[a] = k(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    xf();

    function Ex() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Fx = function() {
            var a = Ex();
            a.hid = a.hid || Aa();
            return a.hid
        },
        Gx = function(a, b) {
            var c = Ex();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var ny = function(a) {
            this.s = a;
            this.C = "";
            this.h = this.s
        },
        oy = function(a, b) {
            a.h = b;
            return a
        };

    function py(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function qy(a, b, c) {
        if (a) {
            var d = a || [],
                e = Za(b) ? b : {};
            if (Array.isArray(d))
                for (var f = 0; f < d.length; f++) c(d[f], e)
        }
    };
    var Fy = window,
        Gy = document,
        Hy = function(a) {
            var b = Fy._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Gy.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Fy["ga-disable-" + a]) return !0;
            try {
                var c = Fy.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Ji("AMP_TOKEN", String(Gy.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Gy.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Qy(a) {
        Da(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[K.g.Ua] || {};
        Da(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Yy = function(a, b) {};

    function Xy(a, b) {
        var c = function() {};
        return c
    }

    function Zy(a, b, c) {};
    var $y = Xy;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var bz = encodeURI,
        Y = encodeURIComponent,
        cz = function(a, b, c) {
            ac(a, b, c)
        },
        dz = function(a, b) {
            if (!a) return !1;
            var c = Cj(Ej(a),
                "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        ez = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        securityGroups: {}
    };

    Z.securityGroups.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1;
                Z.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.securityGroups.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.m = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1;
                Z.__f.runInSiloedMode = !1
            })(function(a) {
                var b = mv("gtm.referrer", 1) || C.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? Cj(Ej(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : lv(String(b)) : String(b)
            })
        }();
    Z.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : mv("gtm.url", 1)) || jv();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return lv(String(c));
                var e = Ej(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? ya(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Cj(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Cj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.securityGroups.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.m = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1;
                Z.__v.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = mv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                uv(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();





    Z.securityGroups.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(jv());
                ya(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !dz(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return Cj(Ej(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, h);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return dc(r, "value");
                    case "button":
                        return ec(r);
                    default:
                        return null
                }
            }

            function h(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) Qu(r.elements[u]) && t++;
                    return t
                }
            }

            function l(r, t, u) {
                var v = r.interactedFormField;
                return v && dc(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.m = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1;
                Z.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, ec) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = Ej(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = Cj(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var I;
                        if (void 0 ===
                            r.vtp_attribute) I = b(w, v, u);
                        else {
                            var E = w.element;
                            I = E && dc(E, r.vtp_attribute) || u || ""
                        }
                        return I;
                    case "MD":
                        var H = r.vtp_mdValue,
                            J = a(w, t, "MD", bv);
                        return H && J ? ev(J, H) || u : J || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        var M = b(w, v, u);
                        uv(M, "aev", r.vtp_gtmEventId);
                        return M
                }
            })
        }();








    Z.securityGroups.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = h[p] ? Ga(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && k(ez(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                k(ez(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ga(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!(f || N(103) && (Ie || Ke) && n._x_19 && !m.vtp_useDebugVersion && !m.vtp_useInternalVersion)) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = Ie || Ke ? Rl(n._x_19, "/analytics.js") : void 0,
                        t = tl("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    U("analytics.js" === p && r ? r : t, function() {
                            var u = Ur();
                            u && u.loaded || q();
                        },
                        q)
                }
            }
            var f, h = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.m = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1;
                Z.__ua.runInSiloedMode = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    k(ez(t.vtp_contentGroup, "index", "group"), p);
                    k(ez(t.vtp_dimension, "index", "dimension"), q);
                    k(ez(t.vtp_metric, "index", "metric"), r);
                    var u = k(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = k(m, u)
                }
                k(ez(m.vtp_contentGroup, "index", "group"), p);
                k(ez(m.vtp_dimension, "index",
                    "dimension"), q);
                k(ez(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + Ue(), y = A + ".");
                var B = function(W, V) {
                    for (var ua in V) V.hasOwnProperty(ua) && (v[W + ua] = V[ua])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event",
                    n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Fa, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = K.g.ic, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var D = {};
                        D[K.g.T] = m.vtp_autoLinkDomains;
                        D.use_anchor = m.vtp_useHashAutoLink;
                        D[K.g.Hb] = m.vtp_decorateFormsAutoLink;
                        v[K.g.Ia] = D
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ?
                    (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Fa(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var I = {};
                a(v, I);
                v.name || (I.gtmTrackerName = A);
                I.gaFunctionName =
                    m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (I.nonInteraction = m.vtp_nonInteraction);
                var E = zh(th(sh(rh(kh(new jh(m.vtp_gtmEventId, m.vtp_gtmPriorityId), I), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                N(103) && m.vtp_useDebugVersion && m.vtp_useInternalVersion && (E.eventMetadata.suppress_script_load = !0);
                Tw(w, x, Date.now(), E);
                var H = Wr(m.vtp_functionName);
                if (wa(H)) {
                    var J = function(W) {
                        var V = [].slice.call(arguments, 0);
                        V[0] = y + V[0];
                        H.apply(window, V)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" ==
                        m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else F(m.vtp_gtmOnFailure)
            })
        }();







    Z.securityGroups.html = ["customScripts"],
        function() {
            function a(d, e, f, h) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var l = e.shift(),
                                m = a(d, e, f, h);
                            if ("SCRIPT" == String(l.nodeName).toUpperCase() && "text/gtmscript" == l.type) {
                                var n = C.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = l.id;
                                n.text = l.text || l.textContent || l.innerHTML || "";
                                l.charset && (n.charset = l.charset);
                                var p = l.getAttribute("data-gtmsrc");
                                p && (n.src = p, Ub(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; l.firstChild;) q.push(l.removeChild(l.firstChild));
                                d.insertBefore(l, null);
                                a(l, q, m, h)()
                            } else d.insertBefore(l, null), m()
                        } else f()
                    } catch (r) {
                        F(h)
                    }
                }
            }

            function b(d) {
                if (C.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = Hu(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        h = f.ol,
                        l = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(h, l, e) : a(C.body, fc(h), l, e)()
                } else hv(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.m =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1;
            Z.__html.runInSiloedMode = !1
        }();


    var AA = {};
    AA.onHtmlSuccess = Iu(!0), AA.onHtmlFailure = Iu(!1);
    AA.dataLayer = bf;
    AA.callback = function(a) {
        Re.hasOwnProperty(a) && wa(Re[a]) && Re[a]();
        delete Re[a]
    };
    AA.bootstrap = 0;
    AA._spx = !1;

    function BA() {
        Ae[xg()] = Ae[xg()] || AA;
        Dg();
        Hg() || Da(Ig(), function(a, b) {
            br(a, b.transportUrl, b.context);
            G(92)
        });
        Oa(Se, Z.securityGroups);
        N(58) && zg(Fg());
        Eu(), Vc({
            wl: function(a) {
                return a === Cu
            },
            Fk: function(a) {
                return new Fu(a)
            },
            xl: function(a) {
                for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
                return b && c
            },
            Ul: function(a) {
                var b;
                if (a === Cu) b = a;
                else {
                    var c = Ue();
                    Du[c] = a;
                    b = 'google_tag_manager["rm"]["' + yg() + '"](' + c + ")"
                }
                return b
            }
        });
        Xc = gd
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            eu(m) && (l = h.Uj)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = Ej(C.referrer);
                c = "cct.google" === Bj(d, "host")
            }
            if (!c) {
                var e = Mi("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Yb("https://cct.google/taggy/agent.js"))
        }
        if (Me) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    Ge ? (v = "OGT", w = "GTAG") : Me && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Yb("https://" + ze.Cc + "/debug/bootstrap?id=" + qg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + gj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Sb,
                            containerProduct: v,
                            debug: !1,
                            id: qg.ctid,
                            targetRef: {
                                ctid: qg.ctid,
                                isDestination: og.kd
                            },
                            aliases: rg(),
                            destinations: ug()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    ze.Xi && (y.data.initialPublish = !0);
                    x.push(y)
                },
                h = {
                    Km: 1,
                    Vj: 2,
                    jk: 3,
                    Zi: 4,
                    Uj: 5
                },
                l = void 0,
                m = void 0,
                n = Cj(z.location, "query", !1, void 0, "gtm_debug");
            eu(n) && (l = h.Vj);
            if (!l && C.referrer) {
                var p = Ej(C.referrer);
                "tagassistant.google.com" === Bj(p, "host") && (l = h.jk)
            }
            if (!l) {
                var q = Mi("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.Zi)
            }
            l || b();
            if (!l && fu(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Sb ? f(l) : a()
                    },
                    t = !1;
                bc(C, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else l && Sb ? f(l) : a()
        }
    })(function() {
        try {
            Bg();
            if (N(17)) {}
            Cf().s();
            ni();
            (N(109) || N(110) ||
                N(111)) && Im();
            var a = yg();
            if (lg().canonical[a]) {
                var b = Ae.zones;
                b && b.unregisterChild(tg());
                var c = Nq(yg());
                c._event && (c._event.external = []);
                c._entity && (c._entity.external = []);
            } else {
                Zq();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Nc.push(e[f]);
                for (var h = d.tags || [], l = 0; l < h.length; l++) Qc.push(h[l]);
                for (var m =
                        d.predicates || [], n = 0; n < m.length; n++) Pc.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        "if" !== v && "unless" !== v || Wc(t[v])
                    }
                    Oc.push(t)
                }
                Sc = Z;
                Tc = Sv;
                BA();
                if (N(26) && !Me) {
                    for (var w = tf["7"], x = w ? w.split("|") : [], y = {}, A = 0; A < x.length; A++) y[x[A]] = !0;
                    for (var B = 0; B < ag.length; B++) {
                        var D = ag[B],
                            I = D,
                            E = y[D] ? "granted" : "denied";
                        Hf().implicit(I, E)
                    }
                }
                du();
                cr = !1;
                dr = 0;
                if ("interactive" == C.readyState && !C.createEventObject || "complete" ==
                    C.readyState) fr();
                else {
                    bc(C, "DOMContentLoaded", fr);
                    bc(C, "readystatechange", fr);
                    if (C.createEventObject && C.documentElement.doScroll) {
                        var H = !0;
                        try {
                            H = !z.frameElement
                        } catch (Q) {}
                        H && gr()
                    }
                    bc(z, "load", fr)
                }
                st = !1;
                "complete" === C.readyState ? ut() : bc(z, "load", ut);
                Rg && (Mg(dh), z.setInterval(ch, 864E5));
                Mg(Uv);
                Mg(gs);
                Mg(yp);
                Mg(hm);
                Mg(rs);
                Mg(Yl);
                Mg(ij);
                Mg(Wl);
                Mg(ns);
                N(35) && Mg(js);
                Au();
                sf(1);
                Ps();
                Qe = La();
                AA.bootstrap = Qe;
                if (N(17)) {}
            }
        } catch (Q) {
            if (sf(4), Rg) {
                var T = Yg(!0, !0);
                ac(T)
            }
        }
    });

})()