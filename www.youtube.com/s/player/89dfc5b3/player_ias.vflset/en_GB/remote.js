(function(g) {
    var window = this;
    'use strict';
    var y7 = function(a) {
            g.Fk(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Za()).toString(36));
            return a
        },
        z7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.sha(a.D, b, c)
        },
        ptb = function(a) {
            if (a instanceof g.qn) return a;
            if (typeof a.Mm == "function") return a.Mm(!1);
            if (g.Sa(a)) {
                var b = 0,
                    c = new g.qn;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.M1;
                        if (b in a) return g.rn(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        qtb = function(a, b, c) {
            if (g.Sa(a)) g.oc(a, b, c);
            else
                for (a = ptb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        rtb = function(a, b) {
            var c = [];
            qtb(b, function(d) {
                try {
                    var e = g.Vp.prototype.B.call(this, d, !0)
                } catch (f) {
                    if (f == "Storage: Invalid value was encountered") return;
                    throw f;
                }
                e === void 0 ? c.push(d) : g.Bma(e) && c.push(d)
            }, a);
            return c
        },
        stb = function(a, b) {
            rtb(a, b).forEach(function(c) {
                g.Vp.prototype.remove.call(this, c)
            }, a)
        },
        ttb = function(a) {
            if (a.qa) {
                if (a.qa.locationOverrideToken) return {
                    locationOverrideToken: a.qa.locationOverrideToken
                };
                if (a.qa.latitudeE7 != null && a.qa.longitudeE7 != null) return {
                    latitudeE7: a.qa.latitudeE7,
                    longitudeE7: a.qa.longitudeE7
                }
            }
            return null
        },
        utb = function(a, b) {
            g.Zb(a, b) || a.push(b)
        },
        vtb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        wtb = function(a, b) {
            return g.Lg(a, b)
        },
        xtb = function(a) {
            try {
                return g.Na.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        A7 = function(a) {
            if (g.Na.JSON) try {
                return g.Na.JSON.parse(a)
            } catch (b) {}
            return xtb(a)
        },
        ytb = function(a) {
            if (a.hn && typeof a.hn == "function") return a.hn();
            if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
            if (typeof a === "string") return a.split("");
            if (g.Sa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.Ig(a)
        },
        ztb = function(a) {
            if (a.Lo && typeof a.Lo == "function") return a.Lo();
            if (!a.hn || typeof a.hn != "function") {
                if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
                if (!(typeof Set !== "undefined" && a instanceof Set)) {
                    if (g.Sa(a) || typeof a === "string") {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.Jg(a)
                }
            }
        },
        Atb = function(a, b) {
            if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
            else if (g.Sa(a) || typeof a === "string") Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = ztb(a), d = ytb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        Btb = function(a, b, c, d) {
            var e = new g.xk(null);
            a && g.yk(e, a);
            b && g.zk(e, b);
            c && g.Ak(e, c);
            d && (e.B = d);
            return e
        },
        Ctb = function() {
            var a = B7();
            this.j = a;
            a.Ej("/client_streamz/youtube/living_room/mdx/channel/opened", g.rb("channel_type"))
        },
        Dtb = function(a, b) {
            a.j.zk("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Etb = function() {
            var a = B7();
            this.j = a;
            a.Ej("/client_streamz/youtube/living_room/mdx/channel/closed", g.rb("channel_type"))
        },
        Ftb = function(a, b) {
            a.j.zk("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        Gtb = function() {
            var a = B7();
            this.j = a;
            a.Ej("/client_streamz/youtube/living_room/mdx/channel/message_received", g.rb("channel_type"))
        },
        Htb = function(a, b) {
            a.j.zk("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        Itb = function() {
            var a = B7();
            this.j = a;
            a.Ej("/client_streamz/youtube/living_room/mdx/channel/error", g.rb("channel_type"))
        },
        Jtb = function(a, b) {
            a.j.zk("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        Ktb = function() {
            var a = B7();
            this.j = a;
            a.Ej("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        Ltb = function() {
            var a = B7();
            this.j = a;
            a.Ej("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        Mtb = function(a, b) {
            return new g.tp(a, b)
        },
        C7 = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        D7 = function(a, b) {
            this.B = {};
            this.j = [];
            this.jw = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof D7)
                    for (c = a.Lo(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        E7 = function(a) {
            if (a.size != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    C7(a.B, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.size != a.j.length) {
                b = {};
                for (d = c = 0; c < a.j.length;) {
                    var e = a.j[c];
                    C7(b, e) || (a.j[d++] = e, b[e] = 1);
                    c++
                }
                a.j.length = d
            }
        },
        Qtb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new D7;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", Ntb(this, a.capabilities || ""), Otb(this, a.compatibleSenderThemes || ""), Ptb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        Ntb = function(a, b) {
            a.capabilities.clear();
            g.vn(b.split(","), g.Ya(wtb, Rtb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        Otb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.vn(b.split(","), g.Ya(wtb, Stb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        Ptb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        F7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        G7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        Ttb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        Utb = function(a) {
            return new F7(a)
        },
        Vtb = function(a) {
            return Array.isArray(a) ? g.Ll(a, Utb) : []
        },
        H7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Wtb = function(a) {
            return Array.isArray(a) ? "[" + g.Ll(a, H7).join(",") + "]" : "null"
        },
        Xtb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = Math.random() * 16 | 0;
                    return (a == "x" ? b : b & 3 | 8).toString(16)
                })
        },
        Ytb = function(a) {
            return g.Ll(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Ztb = function(a, b) {
            return g.Xb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        I7 = function(a, b) {
            return g.Xb(a, function(c) {
                return G7(c, b)
            })
        },
        $tb = function() {
            var a = (0, g.Ws)();
            a && stb(a, a.j.Mm(!0))
        },
        J7 = function() {
            var a = g.Zs("yt-remote-connected-devices") || [];
            g.lc(a);
            return a
        },
        aub = function(a) {
            if (a.length == 0) return [];
            var b = a[0].indexOf("#"),
                c = b == -1 ? a[0] : a[0].substring(0, b);
            return g.Ll(a, function(d, e) {
                return e == 0 ? d : d.substring(c.length)
            })
        },
        bub = function(a) {
            g.Ys("yt-remote-connected-devices", a, 86400)
        },
        K7 = function() {
            if (cub) return cub;
            var a = g.Zs("yt-remote-device-id");
            a || (a = Xtb(), g.Ys("yt-remote-device-id", a, 31536E3));
            for (var b = J7(), c = 1, d = a; g.Zb(b, d);) c++, d = a + "#" + c;
            return cub = d
        },
        dub = function() {
            var a = J7(),
                b = K7();
            g.at() && g.nc(a, b);
            a = aub(a);
            if (a.length == 0) try {
                g.bs("remote_sid")
            } catch (c) {} else try {
                g.$r("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        eub = function() {
            return g.Zs("yt-remote-session-browser-channel")
        },
        fub = function() {
            return g.Zs("yt-remote-local-screens") || []
        },
        gub = function() {
            g.Ys("yt-remote-lounge-token-expiration", !0, 86400)
        },
        hub = function(a) {
            a.length > 5 && (a = a.slice(a.length - 5));
            var b = g.Ll(fub(), function(d) {
                    return d.loungeToken
                }),
                c = g.Ll(a, function(d) {
                    return d.loungeToken
                });
            g.Ml(c, function(d) {
                return !g.Zb(b, d)
            }) && gub();
            g.Ys("yt-remote-local-screens", a, 31536E3)
        },
        L7 = function(a) {
            a || (g.$s("yt-remote-session-screen-id"), g.$s("yt-remote-session-video-id"));
            dub();
            a = J7();
            g.ac(a, K7());
            bub(a)
        },
        iub = function() {
            if (!M7) {
                var a = g.aq();
                a && (M7 = new g.Sp(a))
            }
        },
        jub = function() {
            iub();
            return M7 ? !!M7.get("yt-remote-use-staging-server") : !1
        },
        N7 = function(a, b) {
            g.Cv[a] = !0;
            var c = g.Av();
            c && c.publish.apply(c, arguments);
            g.Cv[a] = !1
        },
        kub = function() {},
        B7 = function() {
            if (!O7) {
                O7 = new g.Li(new kub);
                var a = g.Mr("client_streamz_web_flush_count", -1);
                a !== -1 && (O7.C = a)
            }
            return O7
        },
        lub = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        mub = function(a) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
        },
        nub = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        P7 = function(a) {
            a.length ? oub(a.shift(), function() {
                P7(a)
            }) : pub()
        },
        qub = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        oub = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.dg(d, g.Pq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        rub = function() {
            var a = lub(),
                b = [];
            if (a > 1) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        pub = function() {
            var a = nub();
            a && a(!1, "No cast extension found")
        },
        tub = function() {
            if (sub) {
                var a = 2,
                    b = nub(),
                    c = function() {
                        a--;
                        a == 0 && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                oub("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", pub, c)
            }
        },
        uub = function() {
            tub();
            var a = rub();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            P7(a)
        },
        wub = function() {
            tub();
            var a = rub();
            a.push.apply(a, g.z(vub.map(qub)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            P7(a)
        },
        Q7 = function(a, b, c) {
            g.O.call(this);
            this.L = c != null ? (0, g.Xa)(a, c) : a;
            this.nj = b;
            this.G = (0, g.Xa)(this.M5, this);
            this.j = !1;
            this.B = 0;
            this.C = this.rd = null;
            this.D = []
        },
        R7 = function(a, b, c) {
            g.O.call(this);
            this.D = c != null ? a.bind(c) : a;
            this.nj = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.rd = null
        },
        xub = function(a) {
            a.rd = g.Ji(function() {
                a.rd = null;
                a.j && !a.B && (a.j = !1, xub(a))
            }, a.nj);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        S7 = function() {},
        yub = function() {
            g.Vh.call(this, "p")
        },
        zub = function() {
            g.Vh.call(this, "o")
        },
        Bub = function() {
            return Aub = Aub || new g.li
        },
        Cub = function(a) {
            g.Vh.call(this, "serverreachability", a)
        },
        T7 = function(a) {
            var b = Bub();
            b.dispatchEvent(new Cub(b, a))
        },
        Dub = function(a) {
            g.Vh.call(this, "statevent", a)
        },
        U7 = function(a) {
            var b = Bub();
            b.dispatchEvent(new Dub(b, a))
        },
        Eub = function(a, b, c, d) {
            g.Vh.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        V7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Na.setTimeout(function() {
                a()
            }, b)
        },
        W7 = function() {},
        X7 = function(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.Vb = c;
            this.Rb = d || 1;
            this.tb = new g.Kk(this);
            this.ib = 45E3;
            this.La = null;
            this.L = !1;
            this.Z = this.Za = this.W = this.Pa = this.Ba = this.rb = this.qa = null;
            this.ra = [];
            this.j = null;
            this.U = 0;
            this.G = this.Ea = null;
            this.Ub = -1;
            this.Ma = !1;
            this.eb = 0;
            this.Ua = null;
            this.Kb = this.Va = this.Bb = this.Fa = !1;
            this.B = new Fub
        },
        Fub = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        Hub = function(a, b, c) {
            a.Pa = 1;
            a.W = y7(b.clone());
            a.Z = c;
            a.Fa = !0;
            Gub(a, null)
        },
        Gub = function(a, b) {
            a.Ba = Date.now();
            Y7(a);
            a.Za = a.W.clone();
            z7(a.Za, "t", a.Rb);
            a.U = 0;
            var c = a.C.Pa;
            a.B = new Fub;
            a.j = Iub(a.C, c ? b : null, !a.Z);
            a.eb > 0 && (a.Ua = new R7((0, g.Xa)(a.SV, a, a.j), a.eb));
            a.tb.listen(a.j, "readystatechange", a.O5);
            b = a.La ? g.Qg(a.La) : {};
            a.Z ? (a.Ea || (a.Ea = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Za, a.Ea, a.Z, b)) : (a.Ea = "GET", a.j.send(a.Za, a.Ea, null, b));
            T7(1)
        },
        Kub = function(a) {
            if (!Jub(a)) return g.kj(a.j);
            var b = g.lj(a.j);
            if (b === "") return "";
            var c = "",
                d = b.length,
                e = g.ij(a.j) == 4;
            if (!a.B.C) {
                if (typeof TextDecoder === "undefined") return Z7(a), $7(a), "";
                a.B.C = new g.Na.TextDecoder
            }
            for (var f = 0; f < d; f++) a.B.B = !0, c += a.B.C.decode(b[f], {
                stream: !(e && f == d - 1)
            });
            b.length = 0;
            a.B.j += c;
            a.U = 0;
            return a.B.j
        },
        Jub = function(a) {
            return a.j ? a.Ea == "GET" && a.Pa != 2 && a.C.Qe : !1
        },
        Nub = function(a, b) {
            var c = a.U,
                d = b.indexOf("\n", c);
            if (d == -1) return Lub;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Mub;
            d += 1;
            if (d + c > b.length) return Lub;
            b = b.slice(d, d + c);
            a.U = d + c;
            return b
        },
        Y7 = function(a) {
            a.rb = Date.now() + a.ib;
            Oub(a, a.ib)
        },
        Oub = function(a, b) {
            if (a.qa != null) throw Error("WatchDog timer not null");
            a.qa = V7((0, g.Xa)(a.N5, a), b)
        },
        Pub = function(a) {
            a.qa && (g.Na.clearTimeout(a.qa), a.qa = null)
        },
        $7 = function(a) {
            a.C.Zg() || a.Ma || Qub(a.C, a)
        },
        Z7 = function(a) {
            Pub(a);
            g.jb(a.Ua);
            a.Ua = null;
            a.tb.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        Yub = function(a, b) {
            try {
                var c = a.C;
                if (c.ai != 0 && (c.j == a || Rub(c.B, a)))
                    if (!a.Va && Rub(c.B, a) && c.ai == 3) {
                        try {
                            var d = c.qf.j.parse(b)
                        } catch (y) {
                            d = null
                        }
                        if (Array.isArray(d) && d.length == 3) {
                            var e = d;
                            if (e[0] == 0) a: {
                                if (!c.W) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) a8(c), b8(c);
                                        else break a;
                                    Sub(c);
                                    U7(18)
                                }
                            }
                            else c.Fd = e[1], 0 < c.Fd - c.Ua && e[2] < 37500 && c.Va && c.ra == 0 && !c.qa && (c.qa = V7((0, g.Xa)(c.P5, c), 6E3));
                            if (Tub(c.B) <= 1 && c.Jc) {
                                try {
                                    c.Jc()
                                } catch (y) {}
                                c.Jc = void 0
                            }
                        } else c8(c, 11)
                    } else if ((a.Va || c.j == a) && a8(c), !g.zb(b))
                    for (e = c.qf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Ua = f[0];
                        f = f[1];
                        if (c.ai == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Rb = f[2];
                                var h = f[3];
                                h != null && (c.TV = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.eb = 1.5 * l);
                                d = c;
                                var m = a.VQ();
                                if (m) {
                                    var n = g.mj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.Ab(n, "spdy") || g.Ab(n, "quic") || g.Ab(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (Uub(p, p.B), p.B = null))
                                    }
                                    if (d.Fa) {
                                        var q = g.mj(m, "X-HTTP-Session-Id");
                                        q && (d.He = q, g.Fk(d.La, d.Fa, q))
                                    }
                                }
                                c.ai = 3;
                                c.G && c.G.ZV();
                                c.Ac && (c.Oc = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.Yd = Vub(d, d.Pa ? d.Rb : null, d.Vb);
                                if (r.Va) {
                                    Wub(d.B,
                                        r);
                                    var t = r,
                                        u = d.eb;
                                    u && t.setTimeout(u);
                                    t.qa && (Pub(t), Y7(t));
                                    d.j = r
                                } else Xub(d);
                                c.C.length > 0 && d8(c)
                            } else f[0] != "stop" && f[0] != "close" || c8(c, 7);
                        else c.ai == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? c8(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.YV(f), c.ra = 0)
                    }
                T7(4)
            } catch (y) {}
        },
        Zub = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        $ub = function(a) {
            this.G = a || 10;
            g.Na.PerformanceNavigationTiming ? (a = g.Na.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.Na.chrome && g.Na.chrome.loadTimes && g.Na.chrome.loadTimes() && g.Na.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            this.D > 1 && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        avb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        Tub = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        Rub = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        Uub =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        Wub = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        bvb = function(a) {
            if (a.B != null) return a.C.concat(a.B.ra);
            if (a.j != null && a.j.size !== 0) {
                var b = a.C;
                a = g.x(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.dc(a.C)
        },
        cvb = function(a, b) {
            var c = new W7;
            if (g.Na.Image) {
                var d = new Image;
                d.onload = g.Ya(e8, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.Ya(e8, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.Ya(e8, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.Ya(e8, c, "TestLoadImage: timeout", !1, b, d);
                g.Na.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        dvb = function(a, b) {
            var c = new W7,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    e8(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? e8(c, "TestPingServer: ok", !0, b) : e8(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                e8(c, "TestPingServer: error", !1, b)
            })
        },
        e8 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        evb = function() {
            this.j = new S7
        },
        fvb = function(a, b, c) {
            var d = c || "";
            try {
                Atb(a, function(e, f) {
                    var h = e;
                    g.Ta(e) && (h = g.Ni(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        f8 = function(a, b, c) {
            return c && c.T$ ? c.T$[a] || b : b
        },
        gvb = function(a) {
            this.C = [];
            this.Rb = this.Yd = this.La = this.Vb = this.j = this.He = this.Fa = this.Ma = this.U = this.Ub = this.Z = null;
            this.Ff = this.Za = 0;
            this.zf = f8("failFast", !1, a);
            this.Va = this.qa = this.W = this.L = this.G = null;
            this.uc = !0;
            this.Fd = this.Ua = -1;
            this.Kb = this.ra = this.Ba = 0;
            this.yf = f8("baseRetryDelayMs", 5E3, a);
            this.Ph = f8("retryDelaySeedMs", 1E4, a);
            this.Af = f8("forwardChannelMaxRetries", 2, a);
            this.ud = f8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.Ld = a && a.sra || void 0;
            this.ag = a && a.hqa || void 0;
            this.Qe = a && a.qra || !1;
            this.eb = void 0;
            this.Pa = a && a.Ifa ||
                !1;
            this.D = "";
            this.B = new $ub(a && a.Zna);
            this.qf = new evb;
            this.tb = a && a.soa || !1;
            this.rb = a && a.goa || !1;
            this.tb && this.rb && (this.rb = !1);
            this.Zf = a && a.Qna || !1;
            a && a.voa && (this.uc = !1);
            this.Ac = !this.tb && this.uc && a && a.doa || !1;
            this.Vc = void 0;
            a && a.e0 && a.e0 > 0 && (this.Vc = a.e0);
            this.Jc = void 0;
            this.Oc = 0;
            this.ib = !1;
            this.Bb = this.Ea = null
        },
        b8 = function(a) {
            a.j && (hvb(a), a.j.cancel(), a.j = null)
        },
        ivb = function(a) {
            b8(a);
            a.W && (g.Na.clearTimeout(a.W), a.W = null);
            a8(a);
            a.B.cancel();
            a.L && (typeof a.L === "number" && g.Na.clearTimeout(a.L), a.L = null)
        },
        d8 = function(a) {
            avb(a.B) || a.L || (a.L = !0, g.ui(a.VV, a), a.Ba = 0)
        },
        kvb = function(a, b) {
            if (Tub(a.B) >= a.B.D - (a.L ? 1 : 0)) return !1;
            if (a.L) return a.C = b.ra.concat(a.C), !0;
            if (a.ai == 1 || a.ai == 2 || a.Ba >= (a.zf ? 0 : a.Af)) return !1;
            a.L = V7((0, g.Xa)(a.VV, a, b), jvb(a, a.Ba));
            a.Ba++;
            return !0
        },
        mvb = function(a, b) {
            var c;
            b ? c = b.Vb : c = a.Za++;
            var d = a.La.clone();
            g.Fk(d, "SID", a.D);
            g.Fk(d, "RID", c);
            g.Fk(d, "AID", a.Ua);
            g8(a, d);
            a.U && a.Z && g.Jk(d, a.U, a.Z);
            c = new X7(a, a.D, c, a.Ba + 1);
            a.U === null && (c.La = a.Z);
            b && (a.C = b.ra.concat(a.C));
            b = lvb(a, c, 1E3);
            c.setTimeout(Math.round(a.ud * .5) + Math.round(a.ud * .5 * Math.random()));
            Uub(a.B, c);
            Hub(c, d, b)
        },
        g8 = function(a, b) {
            a.Ma && g.Dg(a.Ma, function(c, d) {
                g.Fk(b, d, c)
            });
            a.G && Atb({}, function(c, d) {
                g.Fk(b, d, c)
            })
        },
        lvb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.Xa)(a.G.Q5, a.G, a) : null;
            a: {
                for (var e = a.C, f = -1;;) {
                    var h = ["count=" + c];
                    f == -1 ? c > 0 ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                    for (var l = !0, m = 0; m < c; m++) {
                        var n = e[m].j,
                            p = e[m].map;
                        n -= f;
                        if (n < 0) f = Math.max(0, e[m].j - 100), l = !1;
                        else try {
                            fvb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                    }
                    if (l) {
                        d = h.join("&");
                        break a
                    }
                }
                d = void 0
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        Xub = function(a) {
            a.j || a.W || (a.Kb = 1, g.ui(a.UV, a), a.ra = 0)
        },
        Sub = function(a) {
            if (a.j || a.W || a.ra >= 3) return !1;
            a.Kb++;
            a.W = V7((0, g.Xa)(a.UV, a), jvb(a, a.ra));
            a.ra++;
            return !0
        },
        hvb = function(a) {
            a.Ea != null && (g.Na.clearTimeout(a.Ea), a.Ea = null)
        },
        nvb = function(a) {
            a.j = new X7(a, a.D, "rpc", a.Kb);
            a.U === null && (a.j.La = a.Z);
            a.j.eb = 0;
            var b = a.Yd.clone();
            g.Fk(b, "RID", "rpc");
            g.Fk(b, "SID", a.D);
            g.Fk(b, "AID", a.Ua);
            g.Fk(b, "CI", a.Va ? "0" : "1");
            !a.Va && a.Vc && g.Fk(b, "TO", a.Vc);
            g.Fk(b, "TYPE", "xmlhttp");
            g8(a, b);
            a.U && a.Z && g.Jk(b, a.U, a.Z);
            a.eb && a.j.setTimeout(a.eb);
            var c = a.j;
            a = a.Rb;
            c.Pa = 1;
            c.W = y7(b.clone());
            c.Z = null;
            c.Fa = !0;
            Gub(c, a)
        },
        a8 = function(a) {
            a.qa != null && (g.Na.clearTimeout(a.qa), a.qa = null)
        },
        Qub = function(a, b) {
            var c = null;
            if (a.j == b) {
                a8(a);
                hvb(a);
                a.j = null;
                var d = 2
            } else if (Rub(a.B, b)) c = b.ra, Wub(a.B, b), d = 1;
            else return;
            if (a.ai != 0)
                if (b.L)
                    if (d == 1) {
                        c = b.Z ? b.Z.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = Bub();
                        d.dispatchEvent(new Eub(d, c, b, e));
                        d8(a)
                    } else Xub(a);
            else {
                var f = b.Ub;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && kvb(a, b) || d == 2 && Sub(a))) switch (c && c.length > 0 && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        c8(a, 5);
                        break;
                    case 4:
                        c8(a, 10);
                        break;
                    case 3:
                        c8(a, 6);
                        break;
                    default:
                        c8(a, 2)
                }
            }
        },
        jvb = function(a, b) {
            var c = a.yf + Math.floor(Math.random() *
                a.Ph);
            a.isActive() || (c *= 2);
            return c * b
        },
        c8 = function(a, b) {
            if (b == 2) {
                var c = (0, g.Xa)(a.Pfa, a),
                    d = a.ag,
                    e = !d;
                d = new g.xk(d || "//www.google.com/images/cleardot.gif");
                g.Na.location && g.Na.location.protocol == "http" || g.yk(d, "https");
                y7(d);
                e ? cvb(d.toString(), c) : dvb(d.toString(), c)
            } else U7(2);
            a.ai = 0;
            a.G && a.G.XV(b);
            ovb(a);
            ivb(a)
        },
        ovb = function(a) {
            a.ai = 0;
            a.Bb = [];
            if (a.G) {
                var b = bvb(a.B);
                if (b.length != 0 || a.C.length != 0) g.ec(a.Bb, b), g.ec(a.Bb, a.C), a.B.C.length = 0, g.dc(a.C), a.C.length = 0;
                a.G.WV()
            }
        },
        pvb = function(a) {
            if (a.ai == 0) return a.Bb;
            var b = [];
            g.ec(b, bvb(a.B));
            g.ec(b, a.C);
            return b
        },
        Vub = function(a, b, c) {
            var d = g.Gk(c);
            d.j != "" ? (b && g.zk(d, b + "." + d.j), g.Ak(d, d.C)) : (d = g.Na.location, d = Btb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Fa;
            c = a.He;
            b && c && g.Fk(d, b, c);
            g.Fk(d, "VER", a.TV);
            g8(a, d);
            return d
        },
        Iub = function(a, b, c) {
            if (b && !a.Pa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.Qe && !a.Ld ? new g.fj(new g.tk({
                r3: c
            })) : new g.fj(a.Ld);
            b.U = a.Pa;
            return b
        },
        qvb = function() {},
        rvb = function() {},
        i8 = function(a, b) {
            g.li.call(this);
            this.j = new gvb(b);
            this.G = a;
            this.B = b && b.Taa || null;
            a = b && b.Saa || null;
            b && b.Xna && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Z = a;
            a = b && b.Hpa || null;
            b && b.r0 && (a ? a["X-WebChannel-Content-Type"] = b.r0 : a = {
                "X-WebChannel-Content-Type": b.r0
            });
            b && b.oY && (a ? a["X-WebChannel-Client-Profile"] = b.oY : a = {
                "X-WebChannel-Client-Profile": b.oY
            });
            this.j.Ub = a;
            (a = b && b.Gpa) && !g.zb(a) && (this.j.U = a);
            this.L = b && b.Ifa || !1;
            this.D = b && b.Hqa || !1;
            (b = b && b.Q$) && !g.zb(b) && (this.j.Fa = b, g.Kg(this.B, b) && (a =
                this.B, b in a && delete a[b]));
            this.C = new h8(this)
        },
        svb = function(a) {
            yub.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Hg(b)) ? g.Og(b, this.j) : b : this.data = a
        },
        tvb = function(a) {
            zub.call(this);
            this.status = 1;
            this.errorCode = a
        },
        h8 = function(a) {
            this.j = a
        },
        uvb = function(a, b) {
            this.B = a;
            this.j = b
        },
        vvb = function(a) {
            return pvb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? xtb(b) : b) : c = b;
                return c
            })
        },
        j8 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.Na.setTimeout(function() {
                a()
            }, b)
        },
        l8 = function(a) {
            k8.dispatchEvent(new wvb(k8, a))
        },
        wvb = function(a) {
            g.Vh.call(this, "statevent", a)
        },
        m8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.U = c;
            this.L = d || 1;
            this.B = 45E3;
            this.C = new g.Kk(this);
            this.G = new g.Ii;
            this.G.setInterval(250)
        },
        yvb = function(a, b, c) {
            a.bJ = 1;
            a.DD = y7(b.clone());
            a.yw = c;
            a.Fa = !0;
            xvb(a, null)
        },
        zvb = function(a, b, c, d, e) {
            a.bJ = 1;
            a.DD = y7(b.clone());
            a.yw = null;
            a.Fa = c;
            e && (a.L2 = !1);
            xvb(a, d)
        },
        xvb = function(a, b) {
            a.GD = Date.now();
            Avb(a);
            a.aJ = a.DD.clone();
            z7(a.aJ, "t", a.L);
            a.dJ = 0;
            a.Cj = a.j.iO(a.j.HD() ? b : null);
            a.gO > 0 && (a.ZI = new R7((0, g.Xa)(a.aW, a, a.Cj), a.gO));
            a.C.listen(a.Cj, "readystatechange", a.S5);
            b = a.ww ? g.Qg(a.ww) : {};
            a.yw ? (a.cJ = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Cj.send(a.aJ, a.cJ, a.yw, b)) : (a.cJ = "GET", a.L2 && !g.hh && (b.Connection = "close"), a.Cj.send(a.aJ, a.cJ, null, b));
            a.j.Is(1)
        },
        Dvb = function(a, b) {
            var c = a.dJ,
                d = b.indexOf("\n", c);
            if (d == -1) return Bvb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Cvb;
            d += 1;
            if (d + c > b.length) return Bvb;
            b = b.slice(d, d + c);
            a.dJ = d + c;
            return b
        },
        Avb = function(a) {
            a.hO = Date.now() + a.B;
            Evb(a, a.B)
        },
        Evb = function(a, b) {
            if (a.Vz != null) throw Error("WatchDog timer not null");
            a.Vz = j8((0, g.Xa)(a.R5, a), b)
        },
        Fvb = function(a) {
            a.Vz && (g.Na.clearTimeout(a.Vz), a.Vz = null)
        },
        Gvb = function(a) {
            a.j.Zg() || a.ED || a.j.kO(a)
        },
        n8 = function(a) {
            Fvb(a);
            g.jb(a.ZI);
            a.ZI = null;
            a.G.stop();
            a.C.removeAll();
            if (a.Cj) {
                var b = a.Cj;
                a.Cj = null;
                b.abort();
                b.dispose()
            }
            a.L3 && (a.L3 = null)
        },
        Hvb = function(a, b) {
            try {
                a.j.bW(a, b), a.j.Is(4)
            } catch (c) {}
        },
        Jvb = function(a, b, c, d, e) {
            if (d == 0) c(!1);
            else {
                var f = e || 0;
                d--;
                Ivb(a, b, function(h) {
                    h ? c(!0) : g.Na.setTimeout(function() {
                        Jvb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        Ivb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    o8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    o8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    o8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    o8(d), c(!1)
                } catch (e) {}
            };
            g.Na.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        o8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        Kvb = function(a) {
            this.j = a;
            this.B = new S7
        },
        Lvb = function(a) {
            var b = p8(a.j, a.NE, "/mail/images/cleardot.gif");
            y7(b);
            Jvb(b.toString(), 5E3, (0, g.Xa)(a.j8, a), 3, 2E3);
            a.Is(1)
        },
        Mvb = function(a) {
            var b = a.j.L;
            b != null ? (l8(5), b ? (l8(11), q8(a.j, a, !1)) : (l8(12), q8(a.j, a, !0))) : (a.Jl = new m8(a), a.Jl.ww = a.jO, b = a.j, b = p8(b, b.HD() ? a.eJ : null, a.lO), l8(5), z7(b, "TYPE", "xmlhttp"), zvb(a.Jl, b, !1, a.eJ, !1))
        },
        Nvb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new S7;
            this.Z = a || null;
            this.L = b != null ? b : null;
            this.W = c || !1
        },
        Ovb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        Pvb = function(a, b, c, d) {
            g.Vh.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        Qvb = function(a) {
            g.Vh.call(this, "serverreachability", a)
        },
        Svb = function(a) {
            a.T5(1, 0);
            a.fJ = p8(a, null, a.nO);
            Rvb(a)
        },
        Tvb = function(a) {
            a.Wt && (a.Wt.abort(), a.Wt = null);
            a.ih && (a.ih.cancel(), a.ih = null);
            a.Hr && (g.Na.clearTimeout(a.Hr), a.Hr = null);
            r8(a);
            a.Nk && (a.Nk.cancel(), a.Nk = null);
            a.It && (g.Na.clearTimeout(a.It), a.It = null)
        },
        Uvb = function(a, b) {
            if (a.j == 0) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new Ovb(a.U5++, b));
            a.j != 2 && a.j != 3 || Rvb(a)
        },
        Vvb = function(a) {
            var b = 0;
            a.ih && b++;
            a.Nk && b++;
            return b
        },
        Rvb = function(a) {
            a.Nk || a.It || (a.It = j8((0, g.Xa)(a.fW, a), 0), a.Xz = 0)
        },
        Yvb = function(a, b) {
            if (a.j == 1) {
                if (!b) {
                    a.JD = Math.floor(Math.random() * 1E5);
                    b = a.JD++;
                    var c = new m8(a, "", b);
                    c.ww = a.Jp;
                    var d = Wvb(a),
                        e = a.fJ.clone();
                    g.Fk(e, "RID", b);
                    g.Fk(e, "CVER", "1");
                    s8(a, e);
                    yvb(c, e, d);
                    a.Nk = c;
                    a.j = 2
                }
            } else a.j == 3 && (b ? Xvb(a, b) : a.B.length == 0 || a.Nk || Xvb(a))
        },
        Xvb = function(a, b) {
            if (b)
                if (a.zw > 6) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.JD - 1;
                    b = Wvb(a)
                } else c = b.U, b = b.yw;
            else c = a.JD++, b = Wvb(a);
            var d = a.fJ.clone();
            g.Fk(d, "SID", a.D);
            g.Fk(d, "RID", c);
            g.Fk(d, "AID", a.Yz);
            s8(a, d);
            c = new m8(a, a.D, c, a.Xz + 1);
            c.ww = a.Jp;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Nk = c;
            yvb(c, d, b)
        },
        s8 = function(a, b) {
            a.aj && (a = a.aj.jW()) && g.Dg(a, function(c, d) {
                g.Fk(b, d, c)
            })
        },
        Wvb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (a.zw > 6 && b > 0) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    KG: void 0
                }, f++) {
                e.KG = a.B[f].j;
                var h = a.B[f].map;
                e.KG = a.zw <= 6 ? f : e.KG - d;
                try {
                    g.Dg(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.KG + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.KG + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        Zvb = function(a) {
            a.ih || a.Hr || (a.U = 1, a.Hr = j8((0, g.Xa)(a.eW, a), 0), a.Wz = 0)
        },
        awb = function(a) {
            if (a.ih || a.Hr || a.Wz >= 3) return !1;
            a.U++;
            a.Hr = j8((0, g.Xa)(a.eW, a), $vb(a, a.Wz));
            a.Wz++;
            return !0
        },
        q8 = function(a, b, c) {
            a.PN = a.L == null ? c : !a.L;
            a.Kp = b.Gr;
            a.W || Svb(a)
        },
        r8 = function(a) {
            a.Aw != null && (g.Na.clearTimeout(a.Aw), a.Aw = null)
        },
        $vb = function(a, b) {
            var c = 5E3 + Math.floor(Math.random() * 1E4);
            a.isActive() || (c *= 2);
            return c * b
        },
        t8 = function(a, b) {
            if (b == 2 || b == 9) {
                var c = null;
                a.aj && (c = null);
                var d = (0, g.Xa)(a.Ofa, a);
                c || (c = new g.xk("//www.google.com/images/cleardot.gif"), y7(c));
                Ivb(c.toString(), 1E4, d)
            } else l8(2);
            bwb(a, b)
        },
        bwb = function(a, b) {
            a.j = 0;
            a.aj && a.aj.gW(b);
            cwb(a);
            Tvb(a)
        },
        cwb = function(a) {
            a.j = 0;
            a.Kp = -1;
            if (a.aj)
                if (a.C.length == 0 && a.B.length == 0) a.aj.oO();
                else {
                    var b = g.dc(a.C),
                        c = g.dc(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.aj.oO(b, c)
                }
        },
        p8 = function(a, b, c) {
            var d = g.Gk(c);
            if (d.j != "") b && g.zk(d, b + "." + d.j), g.Ak(d, d.C);
            else {
                var e = window.location;
                d = Btb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.ID && g.Dg(a.ID, function(f, h) {
                g.Fk(d, h, f)
            });
            g.Fk(d, "VER", a.zw);
            s8(a, d);
            return d
        },
        dwb = function() {},
        ewb = function() {
            this.j = [];
            this.B = []
        },
        fwb = function(a) {
            g.Vh.call(this, "channelMessage");
            this.message = a
        },
        gwb = function(a) {
            g.Vh.call(this, "channelError");
            this.error = a
        },
        hwb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        u8 = function(a, b) {
            g.O.call(this);
            this.j = new g.pp(this.zda, 0, this);
            g.P(this, this.j);
            this.nj = 5E3;
            this.B = 0;
            if (typeof a === "function") b && (a = (0, g.Xa)(a, b));
            else if (a && typeof a.handleEvent === "function") a = (0, g.Xa)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        iwb = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? function() {
                return ""
            } : d;
            e = e === void 0 ? !1 : e;
            this.Ba = a;
            this.U = b;
            this.C = new g.Rp;
            this.B = new u8(this.Uea, this);
            this.j = null;
            this.qa = !1;
            this.L = null;
            this.Z = "";
            this.W = this.G = 0;
            this.D = [];
            this.Pa = c;
            this.ra = d;
            this.Va = e;
            this.La = new Ctb;
            this.Ea = new Etb;
            this.Ma = new Gtb;
            this.Fa = new Itb;
            this.Ua = new Ktb;
            this.Za = new Ltb
        },
        jwb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.Jp || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Jp = c
            }
        },
        v8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Vi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Wi(a) || "";
            a = g.Fb();
            a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.Eb(a, "10.0") < 0 && (this.B = !1))
        },
        w8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.bj(c + b, {})
        },
        kwb = function(a, b) {
            g.li.call(this);
            var c = this;
            this.Md = a();
            this.Md.subscribe("handlerOpened", this.W5, this);
            this.Md.subscribe("handlerClosed", this.onClosed, this);
            this.Md.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Md.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        lwb = function(a, b, c) {
            var d = this;
            c = c === void 0 ? function() {
                return ""
            } : c;
            var e = e === void 0 ? new rvb : e;
            var f = f === void 0 ? new g.Rp : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.W = null;
            this.Z = this.U = 0;
            this.channel = null;
            this.L = 0;
            this.C = new u8(function() {
                d.C.isActive();
                var h;
                ((h = d.channel) == null ? void 0 : Tub((new uvb(h, h.j)).j.B)) === 0 && d.connect(d.W, d.U)
            });
            this.D = {};
            this.B = {};
            this.qa = !1;
            this.logger = null;
            this.ra = [];
            this.Gg = void 0;
            this.La = new Ctb;
            this.Ea = new Etb;
            this.Ma = new Gtb;
            this.Fa = new Itb
        },
        mwb = function(a) {
            g.ei(a.channel, "m", function() {
                a.L = 3;
                a.C.reset();
                a.W = null;
                a.U = 0;
                for (var b = g.x(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.publish("webChannelOpened");
                Dtb(a.La, "WEB_CHANNEL")
            });
            g.ei(a.channel, "n", function() {
                a.L = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = (b = a.channel) == null ? void 0 : vvb(new uvb(b, b.j));
                c && (a.ra = [].concat(g.z(c)));
                Ftb(a.Ea, "WEB_CHANNEL")
            });
            g.ei(a.channel, "p", function(b) {
                var c = b.data;
                c[0] === "gracefulReconnect" ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new hwb(c[0], c[1]));
                a.Gg = b.statusCode;
                Htb(a.Ma, "WEB_CHANNEL")
            });
            g.ei(a.channel, "o", function() {
                a.Gg === 401 || a.C.start();
                a.publish("webChannelError");
                Jtb(a.Fa, "WEB_CHANNEL")
            })
        },
        nwb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        owb = function(a) {
            g.li.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.X5, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        pwb = function(a, b, c, d, e) {
            function f() {
                return new iwb(w8(a, "/bc"), b, !1, c, d)
            }
            c = c === void 0 ? function() {
                return ""
            } : c;
            return g.Lr("enable_mdx_web_channel_desktop") ? new owb(function() {
                return new lwb(w8(a, "/wc"), b, c)
            }) : new kwb(f, e)
        },
        twb = function() {
            var a = qwb;
            rwb();
            x8.push(a);
            swb()
        },
        y8 = function(a, b) {
            rwb();
            var c = uwb(a, String(b));
            x8.length == 0 ? vwb(c) : (swb(), g.oc(x8, function(d) {
                d(c)
            }))
        },
        z8 = function(a) {
            y8("CP", a)
        },
        rwb = function() {
            x8 || (x8 = g.Pa("yt.mdx.remote.debug.handlers_") || [], g.Oa("yt.mdx.remote.debug.handlers_", x8))
        },
        vwb = function(a) {
            var b = (A8 + 1) % 50;
            A8 = b;
            B8[b] = a;
            C8 || (C8 = b == 49)
        },
        swb = function() {
            var a = x8;
            if (B8[0]) {
                var b = C8 ? A8 : -1,
                    c = {};
                do c = {
                    j2: void 0
                }, b = (b + 1) % 50, c.j2 = B8[b], g.oc(a, function(d) {
                    return function(e) {
                        e(d.j2)
                    }
                }(c));
                while (b != A8);
                B8 = Array(50);
                A8 = -1;
                C8 = !1
            }
        },
        uwb = function(a, b) {
            var c = (Date.now() - wwb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        D8 = function(a) {
            g.Ex.call(this);
            this.L = a;
            this.screens = []
        },
        xwb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        ywb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.vn(a.screens, function(f) {
                return !!Ztb(b, f)
            });
            for (var d = b.length, e = 0; e < d; e++) c = xwb(a, b[e]) || c;
            return c
        },
        zwb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.vn(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        Awb = function(a, b, c, d, e) {
            g.Ex.call(this);
            this.C = a;
            this.U = b;
            this.D = c;
            this.L = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.rd = NaN
        },
        F8 = function(a) {
            D8.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            E8(this);
            this.info("Initializing with " + Wtb(this.screens))
        },
        Bwb = function(a) {
            if (a.screens.length) {
                var b = g.Ll(a.screens, function(d) {
                        return d.id
                    }),
                    c = w8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.Xa)(a.r$, a), (0, g.Xa)(a.q$, a))
            }
        },
        E8 = function(a) {
            if (g.Lr("deprecate_pair_servlet_enabled")) return ywb(a, []);
            var b = Vtb(fub());
            b = g.vn(b, function(c) {
                return !c.uuid
            });
            return ywb(a, b)
        },
        G8 = function(a, b) {
            hub(g.Ll(a.screens, Ttb));
            b && gub()
        },
        Dwb = function(a, b) {
            g.Ex.call(this);
            this.L = b;
            b = (b = g.Zs("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.L(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Zb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            Cwb("Initialized with " + g.Ni(this.j))
        },
        Ewb = function(a, b, c) {
            var d = w8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.Xa)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c(e[h].status == "online");
                        return
                    }
                c(!1)
            }, a), (0, g.Xa)(function() {
                c(!1)
            }, a))
        },
        Gwb = function(a, b) {
            a: if (vtb(b) != vtb(a.j)) var c = !1;
                else {
                    c = g.Jg(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Cwb("Updated online screens: " + g.Ni(a.j)), a.j = b, a.publish("screenChange"));Fwb(a)
        },
        H8 = function(a) {
            isNaN(a.C) || g.Ir(a.C);
            a.C = g.Gr((0, g.Xa)(a.UT, a), a.D > 0 && a.D < g.Za() ? 2E4 : 1E4)
        },
        Cwb = function(a) {
            y8("OnlineScreenService", a)
        },
        Hwb = function(a) {
            var b = {};
            g.oc(a.L(), function(c) {
                c.token ? b[c.token] = c.id : this.xg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Fwb = function(a) {
            a = g.Jg(g.Eg(a.j, function(b) {
                return b
            }));
            g.lc(a);
            a.length ? g.Ys("yt-remote-online-screen-ids", a.join(","), 60) : g.$s("yt-remote-online-screen-ids")
        },
        I8 = function(a, b) {
            b = b === void 0 ? !1 : b;
            D8.call(this, "ScreenService");
            this.D = a;
            this.U = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            Iwb(this)
        },
        Kwb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Xl(),
                l = c ? I7(h, c) : null;
            c && (a.U || l) || (l = I7(h, b));
            if (l) {
                l.uuid = b;
                var m = J8(a, l);
                Ewb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? Jwb(a, c, (0, g.Xa)(function(n) {
                var p = J8(this, new F7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Ewb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        Lwb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        Mwb = function(a, b, c) {
            Ewb(a.j, b, c)
        },
        Jwb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Qr(w8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        Nwb = function(a) {
            a.screens = a.B.Xl();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Wtb(a.screens))
        },
        Iwb = function(a) {
            Owb(a);
            a.B = new F8(a.D);
            a.B.subscribe("screenChange", (0, g.Xa)(a.B$, a));
            Nwb(a);
            a.U || (a.C = Vtb(g.Zs("yt-remote-automatic-screen-cache") || []));
            Owb(a);
            a.info("Initializing automatic screens: " + Wtb(a.C));
            a.j = new Dwb(a.D, (0, g.Xa)(a.Xl, a, !0));
            a.j.subscribe("screenChange", (0, g.Xa)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        J8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = I7(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.U || Pwb(a));
            Owb(a);
            a.G[b.uuid] = b.id;
            g.Ys("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        Pwb = function(a) {
            a = g.vn(a.C, function(b) {
                return b.idType != "shortLived"
            });
            g.Ys("yt-remote-automatic-screen-cache", g.Ll(a, Ttb))
        },
        Owb = function(a) {
            a.G = g.Zs("yt-remote-device-id-map") || {}
        },
        K8 = function(a, b, c) {
            g.Ex.call(this);
            this.Fa = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        L8 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        Qwb = function(a, b) {
            a.j && (a.j.token = b, J8(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        M8 = function(a, b) {
            y8(a.Fa, b)
        },
        N8 = function(a, b, c) {
            K8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.Xa)(this.c6, this);
            this.Ea = (0, g.Xa)(this.Nda, this);
            this.qa = g.Gr(function() {
                Rwb(d, null)
            }, 12E4);
            this.U = this.G = this.L = this.W = 0;
            this.Ba = !1;
            this.Z = "unknown"
        },
        Twb = function(a, b) {
            g.Ir(a.U);
            a.U = 0;
            b == 0 ? Swb(a) : a.U = g.Gr(function() {
                Swb(a)
            }, b)
        },
        Swb = function(a) {
            Uwb(a, "getLoungeToken");
            g.Ir(a.G);
            a.G = g.Gr(function() {
                Vwb(a, null)
            }, 3E4)
        },
        Uwb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Ni());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Xa)(function() {
                M8(this, "Failed to send message: " + b + ".")
            }, a)) : M8(a, "Sending yt message without session: " + g.Ni(c))
        },
        Wwb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.yZ(b, function(c) {
                L8(a, c)
            }, function() {
                return a.Yj()
            }, 5)) : a.Yj(Error("Waiting for session status timed out."))
        },
        Ywb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new F7(b);
            Xwb(a, d, function(e) {
                e ? (a.Ba = !0, J8(a.D, d), L8(a, d), a.Z = "unknown", Twb(a, c)) : (g.or(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Yj())
            }, 5)
        },
        Rwb = function(a, b) {
            g.Ir(a.qa);
            a.qa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? Ywb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.or(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Wwb(a, b.screenId))) : (g.or(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), Wwb(a, b.screenId)) :
                Wwb(a, b.screenId) : a.Yj(Error("Waiting for session status timed out."))
        },
        Vwb = function(a, b) {
            g.Ir(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Z = c, Twb(a, 3E4)) : (Qwb(a, b.loungeToken), a.Ba = !1, a.Z = "unknown", Twb(a, b.loungeTokenRefreshIntervalMs))
        },
        Xwb = function(a, b, c, d) {
            g.Ir(a.L);
            a.L = 0;
            Mwb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.L = g.Gr(function() {
                    Xwb(a, b, c, d - 1)
                }, 300)
            })
        },
        Zwb = function(a) {
            g.Ir(a.W);
            a.W = 0;
            g.Ir(a.L);
            a.L = 0;
            g.Ir(a.qa);
            a.qa = 0;
            g.Ir(a.G);
            a.G = 0;
            g.Ir(a.U);
            a.U = 0
        },
        O8 = function(a, b, c, d) {
            K8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.W = null;
            this.Ea = "";
            this.Pa = c;
            this.La = null;
            this.qa = function() {};
            this.Z = NaN;
            this.Ma = (0, g.Xa)(this.d6, this);
            this.G = function() {};
            this.U = this.L = 0;
            this.ra = !1;
            this.Ba = "unknown"
        },
        P8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
        },
        $wb = function(a) {
            a.G = a.D.lW(a.Ea, a.B.label, a.B.friendlyName, P8(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                L8(a, b);
                b.idType == "shortLived" && c > 0 && Q8(a, c)
            }, function(b) {
                a.G = function() {};
                a.Yj(b)
            })
        },
        axb = function(a) {
            var b = {};
            b.pairingCode = a.Ea;
            b.theme = a.Pa;
            jub() && (b.env_useStageMdx = 1);
            return g.aj(b)
        },
        bxb = function(a) {
            return new Promise(function(b) {
                a.Ea = Xtb();
                if (a.La) {
                    var c = new chrome.cast.DialLaunchResponse(!0, axb(a));
                    b(c);
                    $wb(a)
                } else a.qa = function() {
                    g.Ir(a.Z);
                    a.qa = function() {};
                    a.Z = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, axb(a));
                    b(d);
                    $wb(a)
                }, a.Z = g.Gr(function() {
                    a.qa()
                }, 100)
            })
        },
        dxb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new F7(b);
            return (new Promise(function(e) {
                cxb(a, d, function(f) {
                    f ? (a.ra = !0, J8(a.D, d), L8(a, d), Q8(a, c)) : g.or(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : bxb(a)
            })
        },
        exb = function(a, b) {
            var c = a.W.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                Kwb(a.D, c, b, d, function(f) {
                    f && f.token && L8(a, f);
                    e(f)
                }, function(f) {
                    M8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : bxb(a)
            })
        },
        cxb = function(a, b, c, d) {
            g.Ir(a.L);
            a.L = 0;
            Mwb(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.L = g.Gr(function() {
                    cxb(a, b, c, d - 1)
                }, 300)
            })
        },
        Q8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            P8(a) && (g.Ir(a.U), a.U = 0, b == 0 ? fxb(a) : a.U = g.Gr(function() {
                fxb(a)
            }, b))
        },
        fxb = function(a) {
            P8(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, Q8(a, 3E4)) : (a.ra = !1, a.Ba = "unknown", Qwb(a, b.loungeToken), Q8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                Q8(a, 3E4)
            })
        },
        gxb = function(a) {
            g.Ir(a.L);
            a.L = 0;
            g.Ir(a.U);
            a.U = 0;
            a.G();
            a.G = function() {};
            g.Ir(a.Z)
        },
        R8 = function(a, b) {
            K8.call(this, a, b, "ManualSession");
            this.C = g.Gr((0, g.Xa)(this.EB, this, null), 150)
        },
        S8 = function(a, b) {
            g.Ex.call(this);
            this.config_ = b;
            this.B = a;
            this.W = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Z = b.disableCastApi || !1;
            this.L = b.forceMirroring || !1;
            this.j = null;
            this.U = !1;
            this.C = [];
            this.G = (0, g.Xa)(this.Jca, this)
        },
        hxb = function(a, b) {
            return b ? g.Xb(a.C, function(c) {
                return G7(b, c.label)
            }, a) : null
        },
        T8 = function(a) {
            y8("Controller", a)
        },
        qwb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        U8 = function(a) {
            return a.U || !!a.C.length || !!a.j
        },
        V8 = function(a, b, c) {
            b != a.j && (g.jb(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.Xa)(a.q1, a, b)), b.subscribe("sessionFailed", function() {
                return ixb(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.EB(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        ixb = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        jxb = function(a) {
            var b = a.B.kW(),
                c = a.j && a.j.B;
            a = g.Ll(b, function(d) {
                c && G7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = hxb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        qxb = function(a, b, c, d) {
            d.disableCastApi ? W8("Cannot initialize because disabled by Mdx config.") : kxb() ? lxb(b, d) && (mxb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? nxb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? nxb(a, c) : (X8("Failed to load cast API: " + f), oxb(!1), mxb(!1), g.$s("yt-remote-cast-available"), g.$s("yt-remote-cast-receiver"),
                    pxb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Hv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? lub() >= 60 && uub() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? pub() : lub() >= 89 ? wub() : (tub(), P7(vub.map(qub))))) : W8("Cannot initialize because not running Chrome")
        },
        pxb = function() {
            W8("dispose");
            var a = Y8();
            a && a.dispose();
            g.Oa("yt.mdx.remote.cloudview.instance_", null);
            rxb(!1);
            g.Fv(sxb);
            sxb.length = 0
        },
        Z8 = function() {
            return !!g.Zs("yt-remote-cast-installed")
        },
        txb = function() {
            var a = g.Zs("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        uxb = function() {
            W8("clearCurrentReceiver");
            g.$s("yt-remote-cast-receiver")
        },
        vxb = function() {
            return Z8() ? Y8() ? Y8().getCastSession() : (X8("getCastSelector: Cast is not initialized."), null) : (X8("getCastSelector: Cast API is not installed!"), null)
        },
        wxb = function() {
            Z8() ? Y8() ? $8() ? (W8("Requesting cast selector."), Y8().requestSession()) : (W8("Wait for cast API to be ready to request the session."), sxb.push(g.Ev("yt-remote-cast2-api-ready", wxb))) : X8("requestCastSelector: Cast is not initialized.") : X8("requestCastSelector: Cast API is not installed!")
        },
        a9 = function(a, b) {
            $8() ? Y8().setConnectedScreenStatus(a, b) : X8("setConnectedScreenStatus called before ready.")
        },
        kxb = function() {
            var a = g.Fb().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.aG || a
        },
        xxb = function(a, b) {
            Y8().init(a, b)
        },
        lxb = function(a, b) {
            var c = !1;
            Y8() || (a = new S8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Ys("yt-remote-cast-available", d);
                N7("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                W8("onReceiverSelected: " + d.friendlyName);
                g.Ys("yt-remote-cast-receiver", d);
                N7("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                W8("onReceiverResumed: " + d.friendlyName);
                g.Ys("yt-remote-cast-receiver", d);
                N7("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                W8("onSessionChange: " + H7(d));
                d || g.$s("yt-remote-cast-receiver");
                N7("yt-remote-cast2-session-change", d)
            }), g.Oa("yt.mdx.remote.cloudview.instance_", a), c = !0);
            W8("cloudview.createSingleton_: " + c);
            return c
        },
        Y8 = function() {
            return g.Pa("yt.mdx.remote.cloudview.instance_")
        },
        nxb = function(a, b) {
            oxb(!0);
            mxb(!1);
            xxb(a, function(c) {
                c ? (rxb(!0), g.Gv("yt-remote-cast2-api-ready")) : (X8("Failed to initialize cast API."), oxb(!1), g.$s("yt-remote-cast-available"), g.$s("yt-remote-cast-receiver"), pxb());
                b(c)
            })
        },
        W8 = function(a) {
            y8("cloudview", a)
        },
        X8 = function(a) {
            y8("cloudview", a)
        },
        oxb = function(a) {
            W8("setCastInstalled_ " + a);
            g.Ys("yt-remote-cast-installed", a)
        },
        $8 = function() {
            return !!g.Pa("yt.mdx.remote.cloudview.apiReady_")
        },
        rxb = function(a) {
            W8("setApiReady_ " + a);
            g.Oa("yt.mdx.remote.cloudview.apiReady_", a)
        },
        mxb = function(a) {
            g.Oa("yt.mdx.remote.cloudview.initializing_", a)
        },
        b9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.L = this.U = 0;
            this.trackData = null;
            this.Zl = this.mq = !1;
            this.W = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        yxb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.mq = !1;
            a.Zl = !1;
            a.U = 0;
            a.L = g.Za();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.W = 0;
            a.C = NaN;
            a.B = !1
        },
        c9 = function(a) {
            return a.isPlaying() ? (g.Za() - a.L) / 1E3 : 0
        },
        d9 = function(a, b) {
            a.U = b;
            a.L = g.Za()
        },
        e9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Za() - a.L) / 1E3 + a.U;
                case -1E3:
                    return 0
            }
            return a.U
        },
        f9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && yxb(a)
        },
        zxb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Rg(a.trackData);
            b.hasPrevious = a.mq;
            b.hasNext = a.Zl;
            b.playerTime = a.U;
            b.playerTimeAt = a.L;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.W;
            b.liveIngestionTime = a.C;
            return b
        },
        h9 = function(a, b) {
            g.Ex.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.L = [];
            this.G = new ewb;
            this.B = this.j = null;
            this.Z = (0, g.Xa)(this.zba, this);
            this.U = (0, g.Xa)(this.XG, this);
            this.W = (0, g.Xa)(this.yba, this);
            this.qa = (0, g.Xa)(this.Bba, this);
            var d = 0;
            a ? (d = a.getProxyState(), d != 3 && (a.subscribe("proxyStateChange", this.sU, this), Axb(this))) : d = 3;
            d != 0 && (b ? this.sU(d) : g.Gr(function() {
                c.sU(d)
            }, 0));
            (a = vxb()) && g9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.qa)
        },
        i9 = function(a) {
            return new b9(a.D.getPlayerContextData())
        },
        Axb = function(a) {
            g.oc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.L.push(this.D.subscribe(b, g.Ya(this.Hca, b), this))
            }, a)
        },
        Bxb = function(a) {
            g.oc(a.L, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.L.length = 0
        },
        j9 = function(a) {
            return a.getState() == 1
        },
        k9 = function(a, b) {
            var c = a.G;
            c.j.length + c.B.length < 50 && a.G.enqueue(b)
        },
        Cxb = function(a, b, c) {
            var d = i9(a);
            d9(d, c);
            d.playerState != -1E3 && (d.playerState = b);
            l9(a, d)
        },
        m9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        l9 = function(a, b) {
            Bxb(a);
            a.D.setPlayerContextData(zxb(b));
            Axb(a)
        },
        g9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Z), a.B.removeMediaListener(a.U), a.XG(null));
            a.B = b;
            a.B && (z8("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Z), a.B.addMediaListener(a.U), a.B.media.length && a.XG(a.B.media[0]))
        },
        Dxb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = i9(a);
                b.contentId != d.videoId && z8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                d9(d, a.j.getEstimatedTime());
                l9(a, d)
            } else z8("No cast media video. Ignoring state update.")
        },
        n9 = function(a, b, c) {
            return (0, g.Xa)(function(d) {
                this.xg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.xg("Retrying " + b + " using MDx browser channel."), m9(this, b, c))
            }, a)
        },
        q9 = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            g.Ex.call(this);
            var e = this;
            this.L = NaN;
            this.Ea = !1;
            this.Z = this.W = this.ra = this.Ba = NaN;
            this.qa = [];
            this.G = this.U = this.D = this.j = this.B = null;
            this.La = a;
            this.Ma = d;
            this.qa.push(g.Ns(window, "beforeunload", function() {
                e.HA(2)
            }));
            this.C = [];
            this.j = new b9;
            this.Pa = b.id;
            this.Fa = b.idType;
            this.B = pwb(this.La, c, this.pW, this.Fa == "shortLived", this.Pa);
            this.B.listen("channelOpened", function() {
                Exb(e)
            });
            this.B.listen("channelClosed", function() {
                o9("Channel closed");
                isNaN(e.L) ? L7(!0) : L7();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                L7();
                isNaN(e.VF()) ? (f == 1 && e.Fa == "shortLived" && e.publish("browserChannelAuthError", f), o9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ea = !0, o9("Channel error: " + f + " with reconnection in " + e.VF() + " ms"), p9(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                Fxb(e, f)
            });
            this.B.Xs(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.at() && g.Ys("yt-remote-session-video-id", f)
            })
        },
        Gxb = function(a) {
            return g.Xb(a.C, function(b) {
                return b.type == "LOUNGE_SCREEN"
            })
        },
        o9 = function(a) {
            y8("conn", a)
        },
        p9 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        Hxb = function(a) {
            a.L = g.Gr(function() {
                o9("Connecting timeout");
                a.HA(1)
            }, 2E4)
        },
        Ixb = function(a) {
            g.Ir(a.L);
            a.L = NaN
        },
        Jxb = function(a) {
            g.Ir(a.Ba);
            a.Ba = NaN
        },
        Lxb = function(a) {
            Kxb(a);
            a.ra = g.Gr(function() {
                r9(a, "getNowPlaying")
            }, 2E4)
        },
        Kxb = function(a) {
            g.Ir(a.ra);
            a.ra = NaN
        },
        Exb = function(a) {
            o9("Channel opened");
            a.Ea && (a.Ea = !1, Jxb(a), a.Ba = g.Gr(function() {
                o9("Timing out waiting for a screen.");
                a.HA(1)
            }, 15E3))
        },
        Nxb = function(a, b) {
            var c = null;
            if (b) {
                var d = Gxb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Oa("yt.mdx.remote.remoteClient_", c);
            b && (Ixb(a), Jxb(a));
            c = a.B.sB() && isNaN(a.L);
            b == c ? b && (p9(a, 1), r9(a, "getSubtitlesTrack")) : b ? (a.tZ() && a.j.reset(), p9(a, 1), r9(a, "getNowPlaying"), Mxb(a)) : a.HA(1)
        },
        Oxb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.Ng(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        Pxb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            f9(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        Rxb = function(a, b) {
            b.params = b.params || {};
            Pxb(a, b, "NOW_PLAYING_MAY_CHANGE");
            Qxb(a, b);
            a.publish("autoplayDismissed")
        },
        Qxb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            d9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c;
            c == -1 && a.j.playerState == -1E3 && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.W = isNaN(c) ? 0 : c;
            a.j.Yq(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            a.j.playerState == 1 ? Lxb(a) : Kxb(a);
            a.publish("remotePlayerChange")
        },
        Sxb = function(a, b) {
            if (a.j.playerState != -1E3) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                d9(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        Txb = function(a, b) {
            var c = b.params.muted == "true";
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        Uxb = function(a, b) {
            a.U = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        Vxb = function(a, b) {
            a.U = b.params.videoId || null;
            a.publish("autoplayUpNext", a.U)
        },
        Wxb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            a.G == "DISABLED" && a.publish("autoplayDismissed")
        },
        Xxb = function(a, b) {
            var c = b.params.hasNext == "true";
            a.j.mq = b.params.hasPrevious == "true";
            a.j.Zl = c;
            a.publish("previousNextChange")
        },
        Fxb = function(a, b) {
            b = b.message;
            b.params ? o9("Received: action=" + b.action + ", params=" + g.Ni(b.params)) : o9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = A7(b.params.devices);
                    a.C = g.Ll(b, function(d) {
                        return new Qtb(d)
                    });
                    b = !!g.Xb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    Nxb(a, b);
                    b = a.x_("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.bc(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    Nxb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new Qtb(A7(b.params.device));
                    g.Xb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || utb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new Qtb(A7(b.params.device));
                    g.bc(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    Pxb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    Rxb(a, b);
                    break;
                case "onStateChange":
                    Qxb(a, b);
                    break;
                case "onAdStateChange":
                    Sxb(a, b);
                    break;
                case "onVolumeChanged":
                    Txb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    Oxb(a, b);
                    break;
                case "nowAutoplaying":
                    Uxb(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    Vxb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    Wxb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    Xxb(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    o9("Unrecognized action: " + b.action)
            }
        },
        Mxb = function(a) {
            g.Ir(a.Z);
            a.Z = g.Gr(function() {
                a.HA(1)
            }, 864E5)
        },
        r9 = function(a, b, c) {
            c ? o9("Sending: action=" + b + ", params=" + g.Ni(c)) : o9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        Yxb = function(a) {
            D8.call(this, "ScreenServiceProxy");
            this.Ah = a;
            this.j = [];
            this.j.push(this.Ah.$_s("screenChange", (0, g.Xa)(this.i6, this)));
            this.j.push(this.Ah.$_s("onlineScreenChange", (0, g.Xa)(this.qca, this)))
        },
        cyb = function(a, b) {
            iub();
            if (!M7 || !M7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.lr("MDX_CONFIG") || b;
                $tb();
                dub();
                s9 || (s9 = new v8(b ? b.loungeApiHost : void 0), jub() && (s9.j = "/api/loungedev"));
                t9 || (t9 = g.Pa("yt.mdx.remote.deferredProxies_") || [], g.Oa("yt.mdx.remote.deferredProxies_", t9));
                Zxb();
                var c = u9();
                if (!c) {
                    var d = new I8(s9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Oa("yt.mdx.remote.screenService_", d);
                    c = u9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Oa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    qxb(a, d, function(f) {
                        f ? v9() && a9(v9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            N7("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Pa("yt.mdx.remote.initialized_") && (g.Oa("yt.mdx.remote.initialized_", !0), w9("Initializing: " + g.Ni(b)),
                    x9.push(g.Ev("yt-remote-cast2-api-ready", function() {
                        N7("yt-remote-api-ready")
                    })), x9.push(g.Ev("yt-remote-cast2-availability-change", function() {
                        N7("yt-remote-receiver-availability-change")
                    })), x9.push(g.Ev("yt-remote-cast2-receiver-selected", function() {
                        y9(null);
                        N7("yt-remote-auto-connect", "cast-selector-receiver")
                    })), x9.push(g.Ev("yt-remote-cast2-receiver-resumed", function() {
                        N7("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), x9.push(g.Ev("yt-remote-cast2-session-change", $xb)), x9.push(g.Ev("yt-remote-connection-change", function(f) {
                        f ? a9(v9(), "YouTube TV") : z9() || (a9(null, null), uxb())
                    })), x9.push(g.Ev("yt-remote-cast2-session-failed", function() {
                        N7("yt-remote-connection-failed")
                    })), a = ayb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Lr("desktop_enable_autoplay") &&
                    e.push("atp"), e.length > 0 && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), w9(" -- with channel params: " + g.Ni(a)), a ? (g.Ys("yt-remote-session-app", a.app), g.Ys("yt-remote-session-name", a.name)) : (g.$s("yt-remote-session-app"), g.$s("yt-remote-session-name")), g.Oa("yt.mdx.remote.channelParams_", a), c.start(), v9() || byb())
            }
        },
        dyb = function() {
            var a = u9().Ah.$_gos();
            var b = A9();
            b && B9() && (Ztb(a, b) || a.push(b));
            return Ytb(a)
        },
        fyb = function() {
            var a = eyb();
            !a && Z8() && txb() && (a = {
                key: "cast-selector-receiver",
                name: txb()
            });
            return a
        },
        eyb = function() {
            var a = dyb(),
                b = A9();
            b || (b = z9());
            return g.Xb(a, function(c) {
                return b && G7(b, c.key) ? !0 : !1
            })
        },
        A9 = function() {
            var a = v9();
            if (!a) return null;
            var b = u9().Xl();
            return I7(b, a)
        },
        $xb = function(a) {
            w9("remote.onCastSessionChange_: " + H7(a));
            if (a) {
                var b = A9();
                if (b && b.id == a.id) {
                    if (a9(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token)) C9 && (C9.token = a), (b = B9()) && b.Xs(a)
                } else b && D9(), E9(a, 1)
            } else B9() && D9()
        },
        D9 = function() {
            $8() ? Y8().stopSession() : X8("stopSession called before API ready.");
            var a = B9();
            a && (a.disconnect(1), gyb(null))
        },
        hyb = function() {
            var a = B9();
            return !!a && a.getProxyState() != 3
        },
        w9 = function(a) {
            y8("remote", a)
        },
        u9 = function() {
            if (!iyb) {
                var a = g.Pa("yt.mdx.remote.screenService_");
                iyb = a ? new Yxb(a) : null
            }
            return iyb
        },
        v9 = function() {
            return g.Pa("yt.mdx.remote.currentScreenId_")
        },
        jyb = function(a) {
            g.Oa("yt.mdx.remote.currentScreenId_", a)
        },
        kyb = function() {
            return g.Pa("yt.mdx.remote.connectData_")
        },
        y9 = function(a) {
            g.Oa("yt.mdx.remote.connectData_", a)
        },
        B9 = function() {
            return g.Pa("yt.mdx.remote.connection_")
        },
        gyb = function(a) {
            var b = B9();
            y9(null);
            a || jyb("");
            g.Oa("yt.mdx.remote.connection_", a);
            t9 && (g.oc(t9, function(c) {
                c(a)
            }), t9.length = 0);
            b && !a ? N7("yt-remote-connection-change", !1) : !b && a && N7("yt-remote-connection-change", !0)
        },
        z9 = function() {
            var a = g.at();
            if (!a) return null;
            var b = u9();
            if (!b) return null;
            b = b.Xl();
            return I7(b, a)
        },
        E9 = function(a, b) {
            v9();
            A9() && A9();
            if (F9) C9 = a;
            else {
                jyb(a.id);
                var c = g.Pa("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new q9(s9, a, ayb(), c);
                a.connect(b, kyb());
                a.subscribe("beforeDisconnect", function(d) {
                    N7("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    B9() && (B9(), gyb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = A9();
                    d && d.idType == "shortLived" && ($8() ? Y8().handleBrowserChannelAuthError() : X8("refreshLoungeToken called before API ready."))
                });
                gyb(a)
            }
        },
        byb = function() {
            var a = z9();
            a ? (w9("Resume connection to: " + H7(a)), E9(a, 0)) : (L7(), uxb(), w9("Skipping connecting because no session screen found."))
        },
        Zxb = function() {
            var a = ayb();
            if (g.Ng(a)) {
                a = K7();
                var b = g.Zs("yt-remote-session-name") || "",
                    c = g.Zs("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.lr("SESSION_INDEX", "0"));
                (b = g.lr("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Oa("yt.mdx.remote.channelParams_", a)
            }
        },
        ayb = function() {
            return g.Pa("yt.mdx.remote.channelParams_") || {}
        },
        nyb = function(a, b, c) {
            g.O.call(this);
            var d = this;
            this.module = a;
            this.K = b;
            this.Ic = c;
            this.events = new g.eG(this);
            this.D = !1;
            this.G = new g.aH(64);
            this.j = new g.pp(this.l3, 500, this);
            this.B = new g.pp(this.m3, 1E3, this);
            this.U = new Q7(this.lga, 0, this);
            this.C = {};
            this.W = new g.pp(this.g4, 1E3, this);
            this.L = new R7(this.seekTo, 1E3, this);
            this.Z = this.events.T(this.K, "onVolumeChange", function(e) {
                lyb(d, e)
            });
            g.P(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.bca);
            this.events.T(b, "captionschanged", this.wba);
            this.events.T(b, "captionssettingschanged", this.v3);
            this.events.T(b, "videoplayerreset", this.uM);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Ic.EY()
            });
            b.N("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                myb(d.module) || G9(d) || H9(d, 0)
            });
            a = this.Ic;
            a.Ja();
            a.subscribe("proxyStateChange", this.l1, this);
            a.subscribe("remotePlayerChange", this.fH, this);
            a.subscribe("remoteQueueChange", this.uM, this);
            a.subscribe("previousNextChange", this.e1, this);
            a.subscribe("nowAutoplaying", this.Y0, this);
            a.subscribe("autoplayDismissed", this.I0, this);
            g.P(this, this.j);
            g.P(this, this.B);
            g.P(this, this.U);
            g.P(this, this.W);
            g.P(this, this.L);
            this.v3();
            this.uM();
            this.fH()
        },
        lyb = function(a, b) {
            if (G9(a)) {
                a.Ic.unsubscribe("remotePlayerChange", a.fH, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = i9(a.Ic);
                if (c !== d.volume || b !== d.muted) a.Ic.setVolume(c, b), a.W.start();
                a.Ic.subscribe("remotePlayerChange", a.fH, a)
            }
        },
        oyb = function(a) {
            a.Uc(0);
            a.j.stop();
            a.Fc(new g.aH(64))
        },
        pyb = function(a, b) {
            if (G9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.K.getSubtitlesUserSettings()
                }, Object.assign(c, b));
                a.Ic.oW(a.K.getVideoData(1).videoId, c);
                a.C = i9(a.Ic).trackData
            }
        },
        H9 = function(a, b) {
            var c = a.K.getPlaylist();
            if (c == null ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.K.getVideoData(1);
            a.Ic.playVideo(c.videoId, b, d, e, c.playerParams, c.Fa, ttb(c));
            a.Fc(new g.aH(1))
        },
        qyb = function(a, b) {
            if (b) {
                var c = a.K.getOption("captions", "tracklist", {
                    h_: 1
                });
                c && c.length ? (a.K.setOption("captions", "track", b), a.D = !1) : (a.K.loadModule("captions"), a.D = !0)
            } else a.K.setOption("captions", "track", {})
        },
        G9 = function(a) {
            return i9(a.Ic).videoId === a.K.getVideoData(1).videoId
        },
        I9 = function() {
            g.S.call(this, {
                J: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                X: [{
                    J: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    X: [{
                        J: "div",
                        S: "ytp-mdx-popup-title",
                        ya: "You're signed out"
                    }, {
                        J: "div",
                        S: "ytp-mdx-popup-description",
                        ya: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        J: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        X: [{
                            J: "button",
                            Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ya: "Cancel"
                        }, {
                            J: "button",
                            Ka: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ya: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.By(this, 250);
            this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm");
            g.P(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        J9 = function(a) {
            g.S.call(this, {
                J: "div",
                S: "ytp-remote",
                X: [{
                    J: "div",
                    S: "ytp-remote-display-status",
                    X: [{
                        J: "div",
                        S: "ytp-remote-display-status-icon",
                        X: [g.Osa()]
                    }, {
                        J: "div",
                        S: "ytp-remote-display-status-text",
                        ya: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.By(this, 250);
            g.P(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.yd(a.getPlayerStateObject())
        },
        K9 = function(a, b) {
            g.HX.call(this, "Play on", 1, a, b);
            this.K = a;
            this.Iv = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        ryb = function(a) {
            g.kY.call(this, a);
            this.Gq = {
                key: Xtb(),
                name: "This computer"
            };
            this.Om = null;
            this.subscriptions = [];
            this.CT = this.Ic = null;
            this.Iv = [this.Gq];
            this.Yt = this.Gq;
            this.Ne = new g.aH(64);
            this.L_ = 0;
            this.Ci = -1;
            this.xH = !1;
            this.wH = this.rC = null;
            if (!g.QP(this.player.V()) && !g.kz(this.player.V())) {
                a = this.player;
                var b = g.dS(a);
                b && (b = b.fn()) && (b = new K9(a, b), g.P(this, b));
                b = new J9(a);
                g.P(this, b);
                g.sS(a, b.element, 4);
                this.rC = new I9;
                g.P(this, this.rC);
                g.sS(a, this.rC.element, 4);
                this.xH = !!z9()
            }
        },
        L9 = function(a) {
            a.wH && (a.player.removeEventListener("presentingplayerstatechange",
                a.wH), a.wH = null)
        },
        syb = function(a, b, c) {
            a.Ne = c;
            a.player.publish("presentingplayerstatechange", new g.Ny(c, b))
        },
        M9 = function(a, b) {
            if (b.key !== a.Yt.key)
                if (b.key === a.Gq.key) D9();
                else if (myb(a) && tyb(a), a.Yt = b, !a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.kz(a.player.V())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.V().N("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.hY(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Fa,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = ttb(d)) && (a.locationInfo = d);
                    d = a
                }
                w9("Connecting to: " + g.Ni(b));
                b.key == "cast-selector-receiver" ? (y9(d || null), b = d || null, $8() ? Y8().setLaunchParams(b) : X8("setLaunchParams called before ready.")) : !d && hyb() && v9() == b.key ? N7("yt-remote-connection-change", !0) : (D9(), y9(d || null), d = u9().Xl(), (b = I7(d, b.key)) && E9(b, 1))
            }
        },
        myb = function(a) {
            var b = a.player.V();
            return !b.N("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.xH || !a.rC ? !1 : g.dQ(b) || g.fQ(b)
        },
        tyb = function(a) {
            a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.wH = function(b) {
                !a.xH && g.Py(b, 8) && (a.player.pauseVideo(), L9(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.wH));
            a.rC && a.rC.md();
            B9() || (F9 = !0)
        };
    g.k = D7.prototype;
    g.k.hn = function() {
        E7(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
        return a
    };
    g.k.Lo = function() {
        E7(this);
        return this.j.concat()
    };
    g.k.has = function(a) {
        return C7(this.B, a)
    };
    g.k.isEmpty = function() {
        return this.size == 0
    };
    g.k.clear = function() {
        this.B = {};
        this.jw = this.size = this.j.length = 0
    };
    g.k.remove = function(a) {
        return this.delete(a)
    };
    g.k.delete = function(a) {
        return C7(this.B, a) ? (delete this.B[a], --this.size, this.jw++, this.j.length > 2 * this.size && E7(this), !0) : !1
    };
    g.k.get = function(a, b) {
        return C7(this.B, a) ? this.B[a] : b
    };
    g.k.set = function(a, b) {
        C7(this.B, a) || (this.size += 1, this.j.push(a), this.jw++);
        this.B[a] = b
    };
    g.k.forEach = function(a, b) {
        for (var c = this.Lo(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.k.clone = function() {
        return new D7(this)
    };
    g.k.keys = function() {
        return g.Lp(this.Mm(!0)).j()
    };
    g.k.values = function() {
        return g.Lp(this.Mm(!1)).j()
    };
    g.k.entries = function() {
        var a = this;
        return Mtb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    g.k.Mm = function(a) {
        E7(this);
        var b = 0,
            c = this.jw,
            d = this,
            e = new g.qn;
        e.next = function() {
            if (c != d.jw) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return g.M1;
            var f = d.j[b++];
            return g.rn(a ? f : d.B[f])
        };
        return e
    };
    var Rtb = {
            zha: "atp",
            cma: "ska",
            yla: "que",
            Fka: "mus",
            ama: "sus",
            ija: "dsp",
            Nla: "seq",
            wka: "mic",
            via: "dpa",
            Gha: "cds",
            Dka: "mlm",
            tia: "dsdtr",
            Mka: "ntb",
            Pma: "vsp",
            Hia: "scn",
            Ala: "rpe",
            qia: "dcn",
            ria: "dcp",
            ela: "pas",
            sia: "drq",
            Rka: "opf",
            Gia: "els",
            Fia: "isg",
            Sla: "svq",
            Eka: "mvp",
            Gga: "ads"
        },
        Stb = {
            Nma: "u",
            Qha: "cl",
            aka: "k",
            yja: "i",
            gia: "cr",
            Gka: "m",
            Via: "g",
            J7: "up"
        },
        cub = "",
        M7 = null;
    kub.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.Lr("enable_client_streamz_web")) {
            a = g.x(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Vda(c.value), c = {
                serializedIncrementBatch: g.uc(c.j())
            }, g.Ct("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var O7, sub = mub("loadCastFramework") || mub("loadCastApplicationFramework"),
        vub = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.bb(Q7, g.O);
    g.k = Q7.prototype;
    g.k.L5 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.rd ? this.C = g.Za() + this.nj : this.rd = g.Ji(this.G, this.nj)
    };
    g.k.stop = function() {
        this.rd && (g.Na.clearTimeout(this.rd), this.rd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.L.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        Q7.Yf.xa.call(this)
    };
    g.k.M5 = function() {
        this.rd && (g.Na.clearTimeout(this.rd), this.rd = null);
        this.C ? (this.rd = g.Ji(this.G, this.C - g.Za()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.L.apply(null, this.D))
    };
    g.w(R7, g.O);
    g.k = R7.prototype;
    g.k.fO = function(a) {
        this.C = arguments;
        this.rd || this.B ? this.j = !0 : xub(this)
    };
    g.k.stop = function() {
        this.rd && (g.Na.clearTimeout(this.rd), this.rd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.rd || (this.j = !1, xub(this))
    };
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.stop()
    };
    S7.prototype.stringify = function(a) {
        return g.Na.JSON.stringify(a, void 0)
    };
    S7.prototype.parse = function(a) {
        return g.Na.JSON.parse(a, void 0)
    };
    g.bb(yub, g.Vh);
    g.bb(zub, g.Vh);
    var Aub = null;
    g.bb(Cub, g.Vh);
    g.bb(Dub, g.Vh);
    g.bb(Eub, g.Vh);
    W7.prototype.debug = function() {};
    W7.prototype.info = function() {};
    W7.prototype.warning = function() {};
    var Mub = {},
        Lub = {};
    g.k = X7.prototype;
    g.k.setTimeout = function(a) {
        this.ib = a
    };
    g.k.O5 = function(a) {
        a = a.target;
        var b = this.Ua;
        b && g.ij(a) == 3 ? b.fO() : this.SV(a)
    };
    g.k.SV = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.ij(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.kj(this.j) || g.lj(this.j)))) {
                    this.Ma || b != 4 || c == 7 || (c == 8 || d <= 0 ? T7(3) : T7(2));
                    Pub(this);
                    var e = this.j.getStatus();
                    this.Ub = e;
                    var f = Kub(this);
                    if (this.L = e == 200) {
                        if (this.Bb && !this.Va) {
                            b: {
                                if (this.j) {
                                    var h = g.mj(this.j, "X-HTTP-Initial-Response");
                                    if (h && !g.zb(h)) {
                                        var l = h;
                                        break b
                                    }
                                }
                                l = null
                            }
                            if (a = l) this.Va = !0,
                            Yub(this, a);
                            else {
                                this.L = !1;
                                this.G = 3;
                                U7(12);
                                Z7(this);
                                $7(this);
                                break a
                            }
                        }
                        if (this.Fa) {
                            a = !0;
                            for (var m; !this.Ma && this.U < f.length;)
                                if (m = Nub(this, f), m == Lub) {
                                    b == 4 && (this.G = 4, U7(14), a = !1);
                                    break
                                } else if (m == Mub) {
                                this.G = 4;
                                U7(15);
                                a = !1;
                                break
                            } else Yub(this, m);
                            Jub(this) && this.U != 0 && (this.B.j = this.B.j.slice(this.U), this.U = 0);
                            b != 4 || f.length != 0 || this.B.B || (this.G = 1, U7(16), a = !1);
                            this.L = this.L && a;
                            a ? f.length > 0 && !this.Kb && (this.Kb = !0, this.C.HS(this)) : (Z7(this), $7(this))
                        } else Yub(this, f);
                        b == 4 && Z7(this);
                        this.L && !this.Ma && (b == 4 ? Qub(this.C, this) : (this.L = !1, Y7(this)))
                    } else g.qga(this.j), e == 400 && f.indexOf("Unknown SID") >
                        0 ? (this.G = 3, U7(12)) : (this.G = 0, U7(13)), Z7(this), $7(this)
                }
            }
        } catch (n) {} finally {}
    };
    g.k.cancel = function() {
        this.Ma = !0;
        Z7(this)
    };
    g.k.N5 = function() {
        this.qa = null;
        var a = Date.now();
        a - this.rb >= 0 ? (this.Pa != 2 && (T7(3), U7(17)), Z7(this), this.G = 2, $7(this)) : Oub(this, this.rb - a)
    };
    g.k.getLastError = function() {
        return this.G
    };
    g.k.VQ = function() {
        return this.j
    };
    $ub.prototype.cancel = function() {
        this.C = bvb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.x(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = gvb.prototype;
    g.k.TV = 8;
    g.k.ai = 1;
    g.k.connect = function(a, b, c, d) {
        U7(0);
        this.Vb = a;
        this.Ma = b || {};
        c && d !== void 0 && (this.Ma.OSID = c, this.Ma.OAID = d);
        this.Va = this.uc;
        this.La = Vub(this, null, this.Vb);
        d8(this)
    };
    g.k.disconnect = function() {
        ivb(this);
        if (this.ai == 3) {
            var a = this.Za++,
                b = this.La.clone();
            g.Fk(b, "SID", this.D);
            g.Fk(b, "RID", a);
            g.Fk(b, "TYPE", "terminate");
            g8(this, b);
            a = new X7(this, this.D, a);
            a.Pa = 2;
            a.W = y7(b.clone());
            b = !1;
            if (g.Na.navigator && g.Na.navigator.sendBeacon) try {
                b = g.Na.navigator.sendBeacon(a.W.toString(), "")
            } catch (c) {}!b && g.Na.Image && ((new Image).src = a.W, b = !0);
            b || (a.j = Iub(a.C, null), a.j.send(a.W));
            a.Ba = Date.now();
            Y7(a)
        }
        ovb(this)
    };
    g.k.Zg = function() {
        return this.ai == 0
    };
    g.k.getState = function() {
        return this.ai
    };
    g.k.VV = function(a) {
        if (this.L)
            if (this.L = null, this.ai == 1) {
                if (!a) {
                    this.Za = Math.floor(Math.random() * 1E5);
                    a = this.Za++;
                    var b = new X7(this, "", a),
                        c = this.Z;
                    this.Ub && (c ? (c = g.Qg(c), g.Sg(c, this.Ub)) : c = this.Ub);
                    this.U !== null || this.rb || (b.La = c, c = null);
                    var d;
                    if (this.tb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, typeof f === "string")) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (f === void 0) break;d += f;
                            if (d > 4096) {
                                d = e;
                                break a
                            }
                            if (d === 4096 || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = lvb(this, b, d);
                    e = this.La.clone();
                    g.Fk(e, "RID", a);
                    g.Fk(e, "CVER", 22);
                    this.Fa && g.Fk(e, "X-HTTP-Session-Id", this.Fa);
                    g8(this, e);
                    c && (this.rb ? d = "headers=" + g.ig(g.tha(c)) + "&" + d : this.U && g.Jk(e, this.U, c));
                    Uub(this.B, b);
                    this.Zf && g.Fk(e, "TYPE", "init");
                    this.tb ? (g.Fk(e, "$req", d), g.Fk(e, "SID", "null"), b.Bb = !0, Hub(b, e, null)) : Hub(b, e, d);
                    this.ai = 2
                }
            } else this.ai == 3 && (a ? mvb(this, a) : this.C.length == 0 || avb(this.B) || mvb(this))
    };
    g.k.UV = function() {
        this.W = null;
        nvb(this);
        if (this.Ac && !(this.ib || this.j == null || this.Oc <= 0)) {
            var a = 2 * this.Oc;
            this.Ea = V7((0, g.Xa)(this.vba, this), a)
        }
    };
    g.k.vba = function() {
        this.Ea && (this.Ea = null, this.Va = !1, this.ib = !0, U7(10), b8(this), nvb(this))
    };
    g.k.HS = function(a) {
        this.j == a && this.Ac && !this.ib && (hvb(this), this.ib = !0, U7(11))
    };
    g.k.P5 = function() {
        this.qa != null && (this.qa = null, b8(this), Sub(this), U7(19))
    };
    g.k.Pfa = function(a) {
        a ? U7(2) : U7(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = qvb.prototype;
    g.k.ZV = function() {};
    g.k.YV = function() {};
    g.k.XV = function() {};
    g.k.WV = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.Q5 = function() {};
    g.bb(i8, g.li);
    i8.prototype.open = function() {
        this.j.G = this.C;
        this.L && (this.j.Pa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    i8.prototype.close = function() {
        this.j.disconnect()
    };
    i8.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Ni(a), a = c);
        b.C.push(new Zub(b.Ff++, a));
        b.ai == 3 && d8(b)
    };
    i8.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        i8.Yf.xa.call(this)
    };
    g.bb(svb, yub);
    g.bb(tvb, zub);
    g.bb(h8, qvb);
    h8.prototype.ZV = function() {
        this.j.dispatchEvent("m")
    };
    h8.prototype.YV = function(a) {
        this.j.dispatchEvent(new svb(a))
    };
    h8.prototype.XV = function(a) {
        this.j.dispatchEvent(new tvb(a))
    };
    h8.prototype.WV = function() {
        this.j.dispatchEvent("n")
    };
    var k8 = new g.li;
    g.w(wvb, g.Vh);
    g.k = m8.prototype;
    g.k.ww = null;
    g.k.Ht = !1;
    g.k.Vz = null;
    g.k.hO = null;
    g.k.GD = null;
    g.k.bJ = null;
    g.k.DD = null;
    g.k.aJ = null;
    g.k.yw = null;
    g.k.Cj = null;
    g.k.dJ = 0;
    g.k.L3 = null;
    g.k.cJ = null;
    g.k.xw = null;
    g.k.FD = -1;
    g.k.L2 = !0;
    g.k.ED = !1;
    g.k.gO = 0;
    g.k.ZI = null;
    var Cvb = {},
        Bvb = {};
    g.k = m8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.S5 = function(a) {
        a = a.target;
        var b = this.ZI;
        b && g.ij(a) == 3 ? b.fO() : this.aW(a)
    };
    g.k.aW = function(a) {
        try {
            if (a == this.Cj) a: {
                var b = g.ij(this.Cj),
                    c = this.Cj.B,
                    d = this.Cj.getStatus();
                if (g.hh && !g.tc("420+")) {
                    if (b < 4) break a
                } else if (b < 3 || b == 3 && !g.kj(this.Cj)) break a;this.ED || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.Is(3) : this.j.Is(2));Fvb(this);
                var e = this.Cj.getStatus();this.FD = e;
                var f = g.kj(this.Cj);
                if (this.Ht = e == 200) {
                    b == 4 && n8(this);
                    if (this.Fa) {
                        for (a = !0; !this.ED && this.dJ < f.length;) {
                            var h = Dvb(this, f);
                            if (h == Bvb) {
                                b == 4 && (this.xw = 4, l8(15), a = !1);
                                break
                            } else if (h == Cvb) {
                                this.xw = 4;
                                l8(16);
                                a = !1;
                                break
                            } else Hvb(this,
                                h)
                        }
                        b == 4 && f.length == 0 && (this.xw = 1, l8(17), a = !1);
                        this.Ht = this.Ht && a;
                        a || (n8(this), Gvb(this))
                    } else Hvb(this, f);
                    this.Ht && !this.ED && (b == 4 ? this.j.kO(this) : (this.Ht = !1, Avb(this)))
                } else e == 400 && f.indexOf("Unknown SID") > 0 ? (this.xw = 3, l8(13)) : (this.xw = 0, l8(14)),
                n8(this),
                Gvb(this)
            }
        } catch (l) {} finally {}
    };
    g.k.cancel = function() {
        this.ED = !0;
        n8(this)
    };
    g.k.R5 = function() {
        this.Vz = null;
        var a = Date.now();
        a - this.hO >= 0 ? (this.bJ != 2 && this.j.Is(3), n8(this), this.xw = 2, l8(18), Gvb(this)) : Evb(this, this.hO - a)
    };
    g.k.getLastError = function() {
        return this.xw
    };
    g.k = Kvb.prototype;
    g.k.jO = null;
    g.k.Jl = null;
    g.k.VM = !1;
    g.k.lO = null;
    g.k.Em = null;
    g.k.Gr = -1;
    g.k.eJ = null;
    g.k.NE = null;
    g.k.connect = function(a) {
        this.lO = a;
        a = p8(this.j, null, this.lO);
        l8(3);
        Date.now();
        var b = this.j.Z;
        b != null ? (this.eJ = b[0], (this.NE = b[1]) ? (this.Em = 1, Lvb(this)) : (this.Em = 2, Mvb(this))) : (z7(a, "MODE", "init"), this.Jl = new m8(this), this.Jl.ww = this.jO, zvb(this.Jl, a, !1, null, !0), this.Em = 0)
    };
    g.k.j8 = function(a) {
        if (a) this.Em = 2, Mvb(this);
        else {
            l8(4);
            var b = this.j;
            b.Kp = b.Wt.Gr;
            t8(b, 9)
        }
        a && this.Is(2)
    };
    g.k.iO = function(a) {
        return this.j.iO(a)
    };
    g.k.abort = function() {
        this.Jl && (this.Jl.cancel(), this.Jl = null);
        this.Gr = -1
    };
    g.k.Zg = function() {
        return !1
    };
    g.k.bW = function(a, b) {
        this.Gr = a.FD;
        if (this.Em == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Kp = this.Gr;
                    t8(a, 2);
                    return
                }
                this.eJ = c[0];
                this.NE = c[1]
            } else a = this.j, a.Kp = this.Gr, t8(a, 2);
        else this.Em == 2 && (this.VM ? (l8(7), Date.now()) : b == "11111" ? (l8(6), this.VM = !0, Date.now(), this.Gr = 200, this.Jl.cancel(), l8(12), q8(this.j, this, !0)) : (l8(8), Date.now(), this.VM = !1))
    };
    g.k.kO = function() {
        this.Gr = this.Jl.FD;
        if (this.Jl.Ht) this.Em == 0 ? this.NE ? (this.Em = 1, Lvb(this)) : (this.Em = 2, Mvb(this)) : this.Em == 2 && (this.VM ? (l8(12), q8(this.j, this, !0)) : (l8(11), q8(this.j, this, !1)));
        else {
            this.Em == 0 ? l8(9) : this.Em == 2 && l8(10);
            var a = this.j;
            this.Jl.getLastError();
            a.Kp = this.Gr;
            t8(a, 2)
        }
    };
    g.k.HD = function() {
        return this.j.HD()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Is = function(a) {
        this.j.Is(a)
    };
    g.k = Nvb.prototype;
    g.k.Jp = null;
    g.k.ID = null;
    g.k.Nk = null;
    g.k.ih = null;
    g.k.nO = null;
    g.k.fJ = null;
    g.k.cW = null;
    g.k.mO = null;
    g.k.JD = 0;
    g.k.U5 = 0;
    g.k.aj = null;
    g.k.It = null;
    g.k.Hr = null;
    g.k.Aw = null;
    g.k.Wt = null;
    g.k.PN = null;
    g.k.Yz = -1;
    g.k.dW = -1;
    g.k.Kp = -1;
    g.k.Xz = 0;
    g.k.Wz = 0;
    g.k.zw = 8;
    g.bb(Pvb, g.Vh);
    g.bb(Qvb, g.Vh);
    g.k = Nvb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        l8(0);
        this.nO = b;
        this.ID = c || {};
        d && e !== void 0 && (this.ID.OSID = d, this.ID.OAID = e);
        this.W ? (j8((0, g.Xa)(this.qY, this, a), 100), Svb(this)) : this.qY(a)
    };
    g.k.disconnect = function() {
        Tvb(this);
        if (this.j == 3) {
            var a = this.JD++,
                b = this.fJ.clone();
            g.Fk(b, "SID", this.D);
            g.Fk(b, "RID", a);
            g.Fk(b, "TYPE", "terminate");
            s8(this, b);
            a = new m8(this, this.D, a);
            a.bJ = 2;
            a.DD = y7(b.clone());
            (new Image).src = a.DD.toString();
            a.GD = Date.now();
            Avb(a)
        }
        cwb(this)
    };
    g.k.qY = function(a) {
        this.Wt = new Kvb(this);
        this.Wt.jO = this.Jp;
        this.Wt.B = this.G;
        this.Wt.connect(a)
    };
    g.k.Zg = function() {
        return this.j == 0
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.fW = function(a) {
        this.It = null;
        Yvb(this, a)
    };
    g.k.eW = function() {
        this.Hr = null;
        this.ih = new m8(this, this.D, "rpc", this.U);
        this.ih.ww = this.Jp;
        this.ih.gO = 0;
        var a = this.cW.clone();
        g.Fk(a, "RID", "rpc");
        g.Fk(a, "SID", this.D);
        g.Fk(a, "CI", this.PN ? "0" : "1");
        g.Fk(a, "AID", this.Yz);
        s8(this, a);
        g.Fk(a, "TYPE", "xmlhttp");
        zvb(this.ih, a, !0, this.mO, !1)
    };
    g.k.bW = function(a, b) {
        if (this.j != 0 && (this.ih == a || this.Nk == a))
            if (this.Kp = a.FD, this.Nk == a && this.j == 3)
                if (this.zw > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c, a[0] == 0) a: {
                            if (!this.Hr) {
                                if (this.ih)
                                    if (this.ih.GD + 3E3 < this.Nk.GD) r8(this), this.ih.cancel(), this.ih = null;
                                    else break a;
                                awb(this);
                                l8(19)
                            }
                        }
                    else this.dW = a[1], 0 < this.dW - this.Yz && a[2] < 37500 && this.PN && this.Wz == 0 && !this.Aw && (this.Aw = j8((0, g.Xa)(this.V5, this), 6E3));
                    else t8(this, 11)
                } else b != null && t8(this, 11);
        else if (this.ih ==
            a && r8(this), !g.zb(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Yz = c[0], c = c[1], this.j == 2 ? c[0] == "c" ? (this.D = c[1], this.mO = c[2], c = c[3], c != null ? this.zw = c : this.zw = 6, this.j = 3, this.aj && this.aj.iW(), this.cW = p8(this, this.HD() ? this.mO : null, this.nO), Zvb(this)) : c[0] == "stop" && t8(this, 7) : this.j == 3 && (c[0] == "stop" ? t8(this, 7) : c[0] != "noop" && this.aj && this.aj.hW(c), this.Wz = 0)
    };
    g.k.V5 = function() {
        this.Aw != null && (this.Aw = null, this.ih.cancel(), this.ih = null, awb(this), l8(20))
    };
    g.k.kO = function(a) {
        if (this.ih == a) {
            r8(this);
            this.ih = null;
            var b = 2
        } else if (this.Nk == a) this.Nk = null, b = 1;
        else return;
        this.Kp = a.FD;
        if (this.j != 0)
            if (a.Ht)
                if (b == 1) {
                    b = a.yw ? a.yw.length : 0;
                    a = Date.now() - a.GD;
                    var c = k8;
                    c.dispatchEvent(new Pvb(c, b, a, this.Xz));
                    Rvb(this);
                    this.C.length = 0
                } else Zvb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = c == 3 || c == 7 || c == 0 && this.Kp > 0)) {
                if (d = b == 1) this.Nk || this.It || this.j == 1 || this.Xz >= 2 ? d = !1 : (this.It = j8((0, g.Xa)(this.fW, this, a), $vb(this, this.Xz)), this.Xz++, d = !0);
                d = !(d || b == 2 && awb(this))
            }
            if (d) switch (c) {
                case 1:
                    t8(this,
                        5);
                    break;
                case 4:
                    t8(this, 10);
                    break;
                case 3:
                    t8(this, 6);
                    break;
                case 7:
                    t8(this, 12);
                    break;
                default:
                    t8(this, 2)
            }
        }
    };
    g.k.T5 = function(a) {
        if (!g.Zb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.Ofa = function(a) {
        a ? l8(2) : (l8(1), bwb(this, 8))
    };
    g.k.iO = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.fj;
        a.U = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.aj && this.aj.isActive(this)
    };
    g.k.Is = function(a) {
        var b = k8;
        b.dispatchEvent(new Qvb(b, a))
    };
    g.k.HD = function() {
        return !1
    };
    g.k = dwb.prototype;
    g.k.iW = function() {};
    g.k.hW = function() {};
    g.k.gW = function() {};
    g.k.oO = function() {};
    g.k.jW = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = ewb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Zb(this.j, a) || g.Zb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.Yab)(b, a);
        c >= 0 ? (g.$b(b, c), b = !0) : b = !1;
        return b || g.ac(this.B, a)
    };
    g.k.hn = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
        b = this.B.length;
        for (var c = 0; c < b; ++c) a.push(this.B[c]);
        return a
    };
    g.w(fwb, g.Vh);
    g.w(gwb, g.Vh);
    g.bb(u8, g.O);
    g.k = u8.prototype;
    g.k.zda = function() {
        this.nj = Math.min(3E5, this.nj * 2);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.nj + 15E3 * Math.random();
        g.qp(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.nj = 5E3
    };
    g.bb(iwb, dwb);
    g.k = iwb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Oh = function(a) {
        return this.C.Oh(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.jb(this.C), this.disconnect(), g.jb(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.Ja = function() {
        return this.qa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Z = "";
            this.B.stop();
            this.L = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new Nvb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Pa),
                e = this.j;
            e && (e.aj = null);
            d.aj = this;
            this.j = d;
            jwb(this);
            if (this.j) {
                d = g.lr("ID_TOKEN");
                var f = this.j.Jp || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Jp = f
            }
            e ? (e.getState() != 3 && Vvb(e) == 0 || e.getState(), this.j.connect(a, b, this.U, e.D, e.Yz)) : c ? this.j.connect(a,
                b, this.U, c.sessionId, c.arrayId) : this.j.connect(a, b, this.U)
        }
    };
    g.k.disconnect = function(a) {
        this.W = a || 0;
        this.B.stop();
        jwb(this);
        this.j && (this.j.getState() == 3 && Yvb(this.j), this.j.disconnect());
        this.W = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Sg(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.sB() && (jwb(this), Uvb(this.j, a))
    };
    g.k.iW = function() {
        this.B.reset();
        this.L = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = a.length, c = 0; c < b; ++c) Uvb(this.j, a[c])
        }
        this.publish("handlerOpened");
        Dtb(this.La, "BROWSER_CHANNEL")
    };
    g.k.gW = function(a) {
        var b = a == 2 && this.j.Kp == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        Jtb(this.Fa, "BROWSER_CHANNEL")
    };
    g.k.oO = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = b.length, d = 0; d < c; ++d) {
                var e = b[d].map;
                e && this.D.push(e)
            }
        Ftb(this.Ea, "BROWSER_CHANNEL");
        a && this.Ua.j.qO("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Za.j.qO("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.jW = function() {
        var a = {
            v: 2
        };
        this.Z && (a.gsessionid = this.Z);
        this.G != 0 && (a.ui = "" + this.G);
        this.W != 0 && (a.ui = "" + this.W);
        this.L && g.Sg(a, this.L);
        return a
    };
    g.k.hW = function(a) {
        a[0] == "S" ? this.Z = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new hwb(a[0], a[1]));
        Htb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.sB = function() {
        return !!this.j && this.j.getState() == 3
    };
    g.k.Xs = function(a) {
        (this.U.loungeIdToken = a) || this.B.stop();
        if (this.Va && this.j) {
            var b = this.j.Jp || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Jp = b
        }
    };
    g.k.getDeviceId = function() {
        return this.U.id
    };
    g.k.Cu = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.iz = function() {
        var a = this.B;
        g.rp(a.j);
        a.start()
    };
    g.k.Uea = function() {
        this.B.isActive();
        Vvb(this.j) == 0 && this.connect(this.L, this.G)
    };
    v8.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.Ya(this.D, d, !f),
            onError: g.Ya(this.C, e),
            onTimeout: g.Ya(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.Qr(b, a)
    };
    v8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    v8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    v8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.w(kwb, g.li);
    g.k = kwb.prototype;
    g.k.connect = function(a, b, c) {
        this.Md.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Md.disconnect(a)
    };
    g.k.iz = function() {
        this.Md.iz()
    };
    g.k.getDeviceId = function() {
        return this.Md.getDeviceId()
    };
    g.k.Cu = function() {
        return this.Md.Cu()
    };
    g.k.sB = function() {
        return this.Md.sB()
    };
    g.k.W5 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Md,
            b = this.j;
        g.Ys("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.PN,
            sessionId: a.j.D,
            arrayId: a.j.Yz
        });
        g.Ys("yt-remote-session-screen-id", b);
        a = J7();
        b = K7();
        g.Zb(a, b) || a.push(b);
        bub(a);
        dub()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new fwb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new gwb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Md.sendMessage(a, b)
    };
    g.k.Xs = function(a) {
        this.Md.Xs(a)
    };
    g.k.dispose = function() {
        this.Md.dispose()
    };
    g.k = lwb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.L !== 2 && (this.C.stop(), this.W = a, this.U = b, nwb(this), (a = g.lr("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.Oaa && (this.B.mdxVersion = "" + this.j.Oaa), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.A8 && (this.B.cst = this.j.A8),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), this.U !== 0 ? this.B.ui = "" + this.U : delete this.B.ui, Object.assign(this.B, this.W), this.channel = new i8(this.pathPrefix, {
            Q$: "gsessionid",
            Saa: this.D,
            Taa: this.B
        }), this.channel.open(), this.L = 2, mwb(this))
    };
    g.k.disconnect = function(a) {
        this.Z = a === void 0 ? 0 : a;
        this.C.stop();
        nwb(this);
        this.channel && (this.Z !== 0 ? this.B.ui = "" + this.Z : delete this.B.ui, this.channel.close());
        this.Z = 0
    };
    g.k.Cu = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.iz = function() {
        var a = this.C;
        g.rp(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (nwb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Xs = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.z(g.Da.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Oh = function(a) {
        return this.G.Oh(a)
    };
    g.k.dispose = function() {
        this.qa || (this.qa = !0, g.jb(this.G), this.disconnect(), g.jb(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.Ja = function() {
        return this.qa
    };
    g.w(owb, g.li);
    g.k = owb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.iz = function() {
        this.j.iz()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.Cu = function() {
        return this.j.Cu()
    };
    g.k.sB = function() {
        return this.j.L === 3
    };
    g.k.X5 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new fwb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new gwb(this.j.Gg === 401 ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Xs = function(a) {
        this.j.Xs(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var wwb = Date.now(),
        x8 = null,
        B8 = Array(50),
        A8 = -1,
        C8 = !1;
    g.bb(D8, g.Ex);
    D8.prototype.Xl = function() {
        return this.screens
    };
    D8.prototype.contains = function(a) {
        return !!Ztb(this.screens, a)
    };
    D8.prototype.get = function(a) {
        return a ? I7(this.screens, a) : null
    };
    D8.prototype.info = function(a) {
        y8(this.L, a)
    };
    g.w(Awb, g.Ex);
    g.k = Awb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.rd) && this.T1()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.rd) || (g.Ir(this.rd), this.rd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.Ex.prototype.xa.call(this)
    };
    g.k.T1 = function() {
        this.rd = NaN;
        this.j = g.Qr(w8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.U
            },
            timeout: 5E3,
            onSuccess: (0, g.Xa)(this.Z5, this),
            onError: (0, g.Xa)(this.Y5, this),
            onTimeout: (0, g.Xa)(this.a6, this)
        })
    };
    g.k.Z5 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.L;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new F7(a), b)
    };
    g.k.Y5 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= uyb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = uyb[this.B], this.rd = g.Gr((0, g.Xa)(this.T1, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.a6 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var uyb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.bb(F8, D8);
    g.k = F8.prototype;
    g.k.start = function() {
        E8(this) && this.publish("screenChange");
        !g.Zs("yt-remote-lounge-token-expiration") && Bwb(this);
        g.Ir(this.j);
        this.j = g.Gr((0, g.Xa)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        E8(this);
        xwb(this, a);
        G8(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || Bwb(this)
    };
    g.k.remove = function(a, b) {
        var c = E8(this);
        zwb(this, a) && (G8(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.ON = function(a, b, c, d) {
        var e = E8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, G8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.xa = function() {
        g.Ir(this.j);
        F8.Yf.xa.call(this)
    };
    g.k.r$ = function(a) {
        E8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = a.length, d = 0; d < c; ++d) {
            var e = a[d],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        G8(this, !b);
        b && y8(this.L, "Missed " + b + " lounge tokens.")
    };
    g.k.q$ = function(a) {
        y8(this.L, "Requesting lounge tokens failed: " + a)
    };
    g.w(Dwb, g.Ex);
    g.k = Dwb.prototype;
    g.k.start = function() {
        var a = parseInt(g.Zs("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.Za() - 144E5 < a ? 0 : a) ? H8(this): (this.D = g.Za() + 3E5, g.Ys("yt-remote-fast-check-period", this.D), this.UT())
    };
    g.k.isEmpty = function() {
        return g.Ng(this.j)
    };
    g.k.update = function() {
        Cwb("Updating availability on schedule.");
        var a = this.L(),
            b = g.Eg(this.j, function(c, d) {
                return c && !!I7(a, d)
            }, this);
        Gwb(this, b)
    };
    g.k.xa = function() {
        g.Ir(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.Ex.prototype.xa.call(this)
    };
    g.k.UT = function() {
        g.Ir(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = Hwb(this);
        if (vtb(a)) {
            var b = w8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.Jg(a).join(",")
            }, (0, g.Xa)(this.hda, this, a), (0, g.Xa)(this.gda, this))
        } else Gwb(this, {}), H8(this)
    };
    g.k.hda = function(a, b) {
        this.B = null;
        var c = g.Jg(Hwb(this));
        if (g.mc(c, g.Jg(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = b[e].status == "online";
            Gwb(this, c);
            H8(this)
        } else this.xg("Changing Screen set during request."), this.UT()
    };
    g.k.gda = function(a) {
        this.xg("Screen availability failed: " + a);
        this.B = null;
        H8(this)
    };
    g.k.xg = function(a) {
        y8("OnlineScreenService", a)
    };
    g.bb(I8, D8);
    g.k = I8.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.ON = function(a, b, c, d) {
        this.B.contains(a) ? this.B.ON(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, y8(this.L, a), d(Error(a)))
    };
    g.k.Xl = function(a) {
        return a ? this.screens : g.cc(this.screens, g.vn(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.kW = function() {
        return g.vn(this.Xl(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.lW = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Awb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.jb(l);
            e(J8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.jb(l);
            f(m)
        });
        l.start();
        return (0, g.Xa)(l.stop, l)
    };
    g.k.b6 = function(a, b, c, d) {
        g.Qr(w8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Xa)(function(e, f) {
                e = new F7(f.screen || {});
                if (!e.name || Lwb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); Lwb(this, l);) {
                            h++;
                            if (h > 20) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(J8(this, e))
            }, this),
            onError: (0, g.Xa)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Xa)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.jb(this.B);
        g.jb(this.j);
        I8.Yf.xa.call(this)
    };
    g.k.B$ = function() {
        Nwb(this);
        this.publish("screenChange");
        this.j.update()
    };
    I8.prototype.dispose = I8.prototype.dispose;
    g.bb(K8, g.Ex);
    g.k = K8.prototype;
    g.k.Yj = function(a) {
        this.Ja() || (a && (M8(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        y8(this.Fa, a)
    };
    g.k.mW = function() {
        return null
    };
    g.k.oU = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Xa)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Xa)(function() {
            M8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.oU("");
        K8.Yf.xa.call(this)
    };
    g.w(N8, K8);
    g.k = N8.prototype;
    g.k.mU = function(a) {
        if (this.C) {
            if (this.C == a) return;
            M8(this, "Overriding cast session with new session object");
            Zwb(this);
            this.Ba = !1;
            this.Z = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
        Uwb(this, "getMdxSessionStatus")
    };
    g.k.EB = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Ni(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.Xa)(function() {
            this.Yj()
        }, this), (0, g.Xa)(function() {
            this.Yj(Error("Failed to stop receiver app."))
        }, this)) : this.Yj(Error("Stopping cast device without session."))
    };
    g.k.oU = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        Zwb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea));
        this.C = null;
        K8.prototype.xa.call(this)
    };
    g.k.Nda = function(a, b) {
        if (!this.Ja())
            if (b)
                if (b = A7(b), g.Ta(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Ni(b)), a) {
                    case "mdxSessionStatus":
                        Rwb(this, b);
                        break;
                    case "loungeToken":
                        Vwb(this, b);
                        break;
                    default:
                        M8(this, "Unknown youtube message: " + a)
                } else M8(this, "Unable to parse message.");
                else M8(this, "No data in message.")
    };
    g.k.yZ = function(a, b, c, d) {
        g.Ir(this.W);
        this.W = 0;
        Kwb(this.D, this.B.label, a, this.B.friendlyName, (0, g.Xa)(function(e) {
            e ? b(e) : d >= 0 ? (M8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.W = g.Gr((0, g.Xa)(this.yZ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.mW = function() {
        return this.C
    };
    g.k.c6 = function(a) {
        this.Ja() || a || (M8(this, "Cast session died."), this.Yj())
    };
    g.w(O8, K8);
    g.k = O8.prototype;
    g.k.mU = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ma)
    };
    g.k.EB = function(a) {
        this.La = a;
        this.qa()
    };
    g.k.stop = function() {
        gxb(this);
        this.C ? this.C.stop((0, g.Xa)(this.Yj, this, null), (0, g.Xa)(this.Yj, this, "Failed to stop DIAL device.")) : this.Yj()
    };
    g.k.xa = function() {
        gxb(this);
        this.C && this.C.removeUpdateListener(this.Ma);
        this.C = null;
        K8.prototype.xa.call(this)
    };
    g.k.d6 = function(a) {
        this.Ja() || a || (M8(this, "DIAL session died."), this.G(), this.G = function() {}, this.Yj())
    };
    g.w(R8, K8);
    R8.prototype.stop = function() {
        this.Yj()
    };
    R8.prototype.mU = function() {};
    R8.prototype.EB = function() {
        g.Ir(this.C);
        this.C = NaN;
        var a = I7(this.D.Xl(), this.B.label);
        a ? L8(this, a) : this.Yj(Error("No such screen"))
    };
    R8.prototype.xa = function() {
        g.Ir(this.C);
        this.C = NaN;
        K8.prototype.xa.call(this)
    };
    g.w(S8, g.Ex);
    g.k = S8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.W, [chrome.cast.Capability.AUDIO_OUT]);
        g.Lr("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
        this.Z || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.L ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Xa)(this.Mca, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Xa)(this.n1,
            this), e, d, a);
        c.customDialLaunchCallback = (0, g.Xa)(this.Iba, this);
        chrome.cast.initialize(c, (0, g.Xa)(function() {
            this.Ja() || (chrome.cast.addReceiverActionListener(this.G), twb(), this.B.subscribe("onlineScreenChange", (0, g.Xa)(this.nW, this)), this.C = jxb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Xa)(function(f) {
                this.xg("Failed to set initial custom receivers: " + g.Ni(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", U8(this)), b(!0))
        }, this), (0, g.Xa)(function(f) {
            this.xg("Failed to initialize API: " +
                g.Ni(f));
            b(!1)
        }, this))
    };
    g.k.gfa = function(a, b) {
        T8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) T8("Unsetting old screen status: " + this.j.B.friendlyName), V8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = I7(this.B.Xl(), a);
                if (!a) {
                    T8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    T8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = hxb(this, a);
                c || (T8("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Xa)(function(d) {
                    this.xg("Failed to set initial custom receivers: " + g.Ni(d))
                }, this)));
                T8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                V8(this, new R8(this.B, c), !0)
            }
            this.j.oU(b)
        } else T8("setConnectedScreenStatus: no screen.")
    };
    g.k.kfa = function(a) {
        this.Ja() ? this.xg("Setting connection data on disposed cast v2") : this.j ? this.j.EB(a) : this.xg("Setting connection data without a session")
    };
    g.k.f6 = function() {
        this.Ja() ? this.xg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), V8(this, null)) : T8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Xa)(this.n1, this), (0, g.Xa)(this.kda, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.Xa)(this.nW, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = qwb,
            b = g.Pa("yt.mdx.remote.debug.handlers_");
        g.ac(b || [], a);
        g.jb(this.j);
        g.Ex.prototype.xa.call(this)
    };
    g.k.xg = function(a) {
        y8("Controller", a)
    };
    g.k.q1 = function(a, b) {
        this.j == a && (b || V8(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.Jca = function(a, b) {
        if (!this.Ja())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), T8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) T8("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            T8("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            V8(this,
                                new R8(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            V8(this, new O8(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            V8(this, new N8(this.B, a, this.config_));
                            break;
                        default:
                            this.xg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.xg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.xg("onReceiverAction_ called without receiver.")
    };
    g.k.Iba = function(a) {
        if (this.Ja()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.xg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.xg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return T8("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.xg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            V8(this, new O8(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.W = a;
        b.W.appState == chrome.cast.DialAppState.RUNNING ? (a = b.W.extraData || {}, c = a.screenId || null, P8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = dxb(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.W.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.or(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = exb(b, c)) : a = exb(b, c)) : a = bxb(b);
        return a
    };
    g.k.n1 = function(a) {
        var b = this;
        if (!this.Ja() && !this.L) {
            T8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) T8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), V8(this, new N8(this.B, c, this.config_), !0);
                    else {
                        this.xg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = I7(this.B.Xl(),
                        d.label);
                e && G7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (T8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.jb(this.j), this.j = new N8(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Xa)(this.q1, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return ixb(b, b.j)
                }), this.j.EB(null));
                this.j.mU(a)
            }
        }
    };
    g.k.e6 = function() {
        return this.j ? this.j.mW() : null
    };
    g.k.kda = function(a) {
        this.Ja() || (this.xg("Failed to estabilish a session: " + g.Ni(a)), a.code != chrome.cast.ErrorCode.CANCEL && V8(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.Mca = function(a) {
        T8("Receiver availability updated: " + a);
        if (!this.Ja()) {
            var b = U8(this);
            this.U = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            U8(this) != b && this.publish("yt-remote-cast2-availability-change", U8(this))
        }
    };
    g.k.nW = function() {
        this.Ja() || (this.C = jxb(this), T8("Updating custom receivers: " + g.Ni(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Xa)(function() {
            this.xg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", U8(this)))
    };
    S8.prototype.setLaunchParams = S8.prototype.kfa;
    S8.prototype.setConnectedScreenStatus = S8.prototype.gfa;
    S8.prototype.stopSession = S8.prototype.f6;
    S8.prototype.getCastSession = S8.prototype.e6;
    S8.prototype.requestSession = S8.prototype.requestSession;
    S8.prototype.init = S8.prototype.init;
    S8.prototype.dispose = S8.prototype.dispose;
    var sxb = [];
    g.k = b9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        yxb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.mq = a.hasPrevious, this.Zl = a.hasNext, this.U = a.playerTime, this.L = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.W = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return this.playerState == 1
    };
    g.k.isBuffering = function() {
        return this.playerState == 3
    };
    g.k.Rk = function() {
        return this.playerState == 1081
    };
    g.k.Yq = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + c9(this) : this.G
    };
    g.k.clone = function() {
        return new b9(zxb(this))
    };
    g.w(h9, g.Ex);
    g.k = h9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Cu = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.iz = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        j9(this) ? (this.j ? this.j.play(null, g.wi, n9(this, "play")) : m9(this, "play"), Cxb(this, 1, e9(i9(this))), this.publish("remotePlayerChange")) : k9(this, this.play)
    };
    g.k.pause = function() {
        j9(this) ? (this.j ? this.j.pause(null, g.wi, n9(this, "pause")) : m9(this, "pause"), Cxb(this, 2, e9(i9(this))), this.publish("remotePlayerChange")) : k9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (j9(this)) {
            if (this.j) {
                var b = i9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.wi, n9(this, "seekTo", {
                    newTime: a
                }))
            } else m9(this, "seekTo", {
                newTime: a
            });
            Cxb(this, 3, a);
            this.publish("remotePlayerChange")
        } else k9(this, g.Ya(this.seekTo, a))
    };
    g.k.stop = function() {
        if (j9(this)) {
            this.j ? this.j.stop(null, g.wi, n9(this, "stopVideo")) : m9(this, "stopVideo");
            var a = i9(this);
            a.index = -1;
            a.videoId = "";
            yxb(a);
            l9(this, a);
            this.publish("remotePlayerChange")
        } else k9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (j9(this)) {
            var c = i9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.Xa)(function() {
                        z8("set receiver volume: " + d)
                    }, this), (0, g.Xa)(function() {
                        this.xg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.Xa)(function() {
                    z8("set receiver muted: " + b)
                }, this), (0, g.Xa)(function() {
                    this.xg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                m9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            l9(this, c)
        } else k9(this, g.Ya(this.setVolume, a, b))
    };
    g.k.oW = function(a, b) {
        if (j9(this)) {
            var c = i9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Ni(b.style), g.Sg(a, c.trackData));
            m9(this, "setSubtitlesTrack", a);
            l9(this, c)
        } else k9(this, g.Ya(this.oW, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        j9(this) ? (b = b.getLanguageInfo().getId(), m9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = i9(this), a.audioTrackId = b, l9(this, a)) : k9(this, g.Ya(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = i9(this),
            m = {
                videoId: a
            };
        c !== void 0 && (m.currentIndex = c);
        f9(l, a, c || 0);
        b !== void 0 && (d9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Ni(h));
        m9(this, "setPlaylist", m);
        d || l9(this, l)
    };
    g.k.OM = function(a, b) {
        if (j9(this)) {
            if (a && b) {
                var c = i9(this);
                f9(c, a, b);
                l9(this, c)
            }
            m9(this, "previous")
        } else k9(this, g.Ya(this.OM, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (j9(this)) {
            if (a && b) {
                var c = i9(this);
                f9(c, a, b);
                l9(this, c)
            }
            m9(this, "next")
        } else k9(this, g.Ya(this.nextVideo, a, b))
    };
    g.k.vP = function() {
        if (j9(this)) {
            m9(this, "clearPlaylist");
            var a = i9(this);
            a.reset();
            l9(this, a);
            this.publish("remotePlayerChange")
        } else k9(this, this.vP)
    };
    g.k.EY = function() {
        j9(this) ? m9(this, "dismissAutoplay") : k9(this, this.EY)
    };
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.Ex.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        Bxb(this);
        this.D = null;
        this.G.clear();
        g9(this, null);
        g.Ex.prototype.xa.call(this)
    };
    g.k.sU = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty();) b = a = this.G, b.j.length === 0 && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else a == 3 && this.dispose()
        }
    };
    g.k.Hca = function(a, b) {
        this.publish(a, b)
    };
    g.k.zba = function(a) {
        if (!a) this.XG(null), g9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = i9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) z8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, l9(this, b)
        }
    };
    g.k.XG = function(a) {
        z8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.W);
        if (this.j = a) this.j.addUpdateListener(this.W), Dxb(this), this.publish("remotePlayerChange")
    };
    g.k.yba = function(a) {
        a ? (Dxb(this), this.publish("remotePlayerChange")) : this.XG(null)
    };
    g.k.XU = function() {
        m9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.Bba = function() {
        var a = vxb();
        a && g9(this, a)
    };
    g.k.xg = function(a) {
        y8("CP", a)
    };
    g.w(q9, g.Ex);
    g.k = q9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.Ma && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            d9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ma ? "setInitialState" : "setPlaylist";
            o9("Connecting with " + c + " and params: " + g.Ni(m));
            this.B.connect({
                method: c,
                params: g.Ni(m)
            }, a, eub())
        } else o9("Connecting without params"), this.B.connect({}, a, eub());
        Hxb(this)
    };
    g.k.Xs = function(a) {
        this.B.Xs(a)
    };
    g.k.dispose = function() {
        this.Ja() || (g.Oa("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), p9(this, 3));
        g.Ex.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        Ixb(this);
        Kxb(this);
        Jxb(this);
        g.Ir(this.W);
        this.W = NaN;
        g.Ir(this.Z);
        this.Z = NaN;
        this.D = null;
        g.Os(this.qa);
        this.qa.length = 0;
        this.B.dispose();
        g.Ex.prototype.xa.call(this);
        this.G = this.U = this.C = this.j = this.B = null
    };
    g.k.x_ = function(a) {
        if (!this.C || this.C.length === 0) return !1;
        for (var b = g.x(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.Y9 = function() {
        var a = 3;
        this.Ja() || (a = 0, isNaN(this.VF()) ? this.B.sB() && isNaN(this.L) && (a = 1) : a = 2);
        return a
    };
    g.k.HA = function(a) {
        o9("Disconnecting with " + a);
        g.Oa("yt.mdx.remote.remoteClient_", null);
        Ixb(this);
        this.publish("beforeDisconnect", a);
        a == 1 && L7();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.S9 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), f9(a, this.D, a.index));
        return zxb(a)
    };
    g.k.nfa = function(a) {
        var b = this,
            c = new b9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.Ir(this.W), this.W = g.Gr(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && r9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && e9(this.j) == e9(c) && g.Ni(this.j.trackData) == g.Ni(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.oc(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.tZ = function() {
        var a = this.B.getDeviceId(),
            b = g.Xb(this.C, function(c) {
                return c.type == "REMOTE_CONTROL" && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.VF = function() {
        return this.B.Cu()
    };
    g.k.C9 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.D9 = function() {
        return this.U || ""
    };
    g.k.g6 = function() {
        !isNaN(this.VF()) && this.B.iz()
    };
    g.k.dfa = function(a, b) {
        r9(this, a, b);
        Mxb(this)
    };
    g.k.pW = function() {
        var a = g.as("SAPISID", "") || g.as("__Secure-1PAPISID") || "",
            b = g.as("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.uc(g.xb(a), 2);
        b = g.uc(g.xb(b), 2);
        return g.uc(g.xb("," + a + "," + b), 2)
    };
    q9.prototype.subscribe = q9.prototype.subscribe;
    q9.prototype.unsubscribeByKey = q9.prototype.Oh;
    q9.prototype.getProxyState = q9.prototype.Y9;
    q9.prototype.disconnect = q9.prototype.HA;
    q9.prototype.getPlayerContextData = q9.prototype.S9;
    q9.prototype.setPlayerContextData = q9.prototype.nfa;
    q9.prototype.getOtherConnectedRemoteId = q9.prototype.tZ;
    q9.prototype.getReconnectTimeout = q9.prototype.VF;
    q9.prototype.getAutoplayMode = q9.prototype.C9;
    q9.prototype.getAutoplayVideoId = q9.prototype.D9;
    q9.prototype.reconnect = q9.prototype.g6;
    q9.prototype.sendMessage = q9.prototype.dfa;
    q9.prototype.getXsrfToken = q9.prototype.pW;
    q9.prototype.isCapabilitySupportedOnConnectedDevices = q9.prototype.x_;
    g.w(Yxb, D8);
    g.k = Yxb.prototype;
    g.k.Xl = function(a) {
        return this.Ah.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Ah.$_c(a)
    };
    g.k.get = function(a) {
        return this.Ah.$_g(a)
    };
    g.k.start = function() {
        this.Ah.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Ah.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Ah.$_r(a, b, c)
    };
    g.k.ON = function(a, b, c, d) {
        this.Ah.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = this.j.length, b = 0; b < a; ++b) this.Ah.$_ubk(this.j[b]);
        this.j.length = 0;
        this.Ah = null;
        D8.prototype.xa.call(this)
    };
    g.k.i6 = function() {
        this.publish("screenChange")
    };
    g.k.qca = function() {
        this.publish("onlineScreenChange")
    };
    I8.prototype.$_st = I8.prototype.start;
    I8.prototype.$_gspc = I8.prototype.b6;
    I8.prototype.$_gsppc = I8.prototype.lW;
    I8.prototype.$_c = I8.prototype.contains;
    I8.prototype.$_g = I8.prototype.get;
    I8.prototype.$_a = I8.prototype.add;
    I8.prototype.$_un = I8.prototype.ON;
    I8.prototype.$_r = I8.prototype.remove;
    I8.prototype.$_gs = I8.prototype.Xl;
    I8.prototype.$_gos = I8.prototype.kW;
    I8.prototype.$_s = I8.prototype.subscribe;
    I8.prototype.$_ubk = I8.prototype.Oh;
    var C9 = null,
        F9 = !1,
        s9 = null,
        t9 = null,
        iyb = null,
        x9 = [];
    g.w(nyb, g.O);
    g.k = nyb.prototype;
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.U.stop();
        var a = this.Ic;
        a.unsubscribe("proxyStateChange", this.l1, this);
        a.unsubscribe("remotePlayerChange", this.fH, this);
        a.unsubscribe("remoteQueueChange", this.uM, this);
        a.unsubscribe("previousNextChange", this.e1, this);
        a.unsubscribe("nowAutoplaying", this.Y0, this);
        a.unsubscribe("autoplayDismissed", this.I0, this);
        this.Ic = this.module = null
    };
    g.k.Qk = function(a) {
        var b = g.Da.apply(1, arguments);
        if (this.Ic.C != 2)
            if (G9(this)) {
                if (!i9(this.Ic).Rk() || a !== "control_seek") switch (a) {
                    case "control_toggle_play_pause":
                        i9(this.Ic).isPlaying() ? this.Ic.pause() : this.Ic.play();
                        break;
                    case "control_play":
                        this.Ic.play();
                        break;
                    case "control_pause":
                        this.Ic.pause();
                        break;
                    case "control_seek":
                        this.L.fO(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        pyb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.K.getCurrentTime();
                    H9(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    H9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    pyb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.wba = function(a) {
        this.U.L5(a)
    };
    g.k.lga = function(a) {
        this.Qk("control_subtitles_set_track", g.Ng(a) ? null : a)
    };
    g.k.v3 = function() {
        var a = this.K.getOption("captions", "track");
        g.Ng(a) || pyb(this, a)
    };
    g.k.Uc = function(a) {
        this.module.Uc(a, this.K.getVideoData().lengthSeconds)
    };
    g.k.bca = function() {
        g.Ng(this.C) || qyb(this, this.C);
        this.D = !1
    };
    g.k.l1 = function(a, b) {
        this.B.stop();
        b === 2 && this.m3()
    };
    g.k.fH = function() {
        if (G9(this)) {
            this.j.stop();
            var a = i9(this.Ic);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Ci = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Ci = 0;
                    break;
                default:
                    this.module.Ci = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Fc(new g.aH(8));
                    this.l3();
                    break;
                case 1085:
                case 3:
                    this.Fc(new g.aH(9));
                    break;
                case 1083:
                case 0:
                    this.Fc(new g.aH(2));
                    this.L.stop();
                    this.Uc(this.K.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Fc(new g.aH(4));
                    break;
                case 2:
                    this.Fc(new g.aH(4));
                    this.Uc(e9(a));
                    break;
                case -1:
                    this.Fc(new g.aH(64));
                    break;
                case -1E3:
                    this.Fc(new g.aH(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        JA: 2
                    }))
            }
            a = i9(this.Ic).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, qyb(this, a));
            a = i9(this.Ic);
            a.volume === -1 || Math.round(this.K.getVolume()) === a.volume && this.K.isMuted() === a.muted || this.W.isActive() || this.g4()
        } else oyb(this)
    };
    g.k.e1 = function() {
        this.K.publish("mdxpreviousnextchange")
    };
    g.k.uM = function() {
        G9(this) || oyb(this)
    };
    g.k.Y0 = function(a) {
        isNaN(a) || this.K.publish("mdxnowautoplaying", a)
    };
    g.k.I0 = function() {
        this.K.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        G9(this) && this.Ic.setAudioTrack(this.K.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        i9(this.Ic).playerState === -1 ? H9(this, a) : b && this.Ic.seekTo(a)
    };
    g.k.g4 = function() {
        var a = this;
        if (G9(this)) {
            var b = i9(this.Ic);
            this.events.Nc(this.Z);
            b.muted ? this.K.mute() : this.K.unMute();
            this.K.setVolume(b.volume);
            this.Z = this.events.T(this.K, "onVolumeChange", function(c) {
                lyb(a, c)
            })
        }
    };
    g.k.l3 = function() {
        this.j.stop();
        if (!this.Ic.Ja()) {
            var a = i9(this.Ic);
            a.isPlaying() && this.Fc(new g.aH(8));
            this.Uc(e9(a));
            this.j.start()
        }
    };
    g.k.m3 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Ic.Cu();
        this.Ic.C == 2 && !isNaN(a) && this.B.start()
    };
    g.k.Fc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.LH(b, a)) {
            var c = g.T(a, 2);
            c !== g.T(this.G, 2) && this.K.MC(c);
            this.G = a;
            syb(this.module, b, a)
        }
    };
    g.w(I9, g.S);
    I9.prototype.md = function() {
        this.j.show()
    };
    I9.prototype.Ob = function() {
        this.j.hide()
    };
    I9.prototype.B = function() {
        N7("mdx-privacy-popup-cancel");
        this.Ob()
    };
    I9.prototype.C = function() {
        N7("mdx-privacy-popup-confirm");
        this.Ob()
    };
    g.w(J9, g.S);
    J9.prototype.onStateChange = function(a) {
        this.yd(a.state)
    };
    J9.prototype.yd = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.T(a, 128) ? g.OE("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.OE("Playing on $RECEIVER_NAME", b) : g.OE("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.w(K9, g.HX);
    K9.prototype.D = function() {
        var a = this.K.getOption("remote", "receivers");
        a && a.length > 1 && !this.K.getOption("remote", "quickCast") ? (this.Iv = g.pc(a, this.j, this), this.Nl(g.Ll(a, this.j)), a = this.K.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Li(a), this.enable(!0)) : this.enable(!1)
    };
    K9.prototype.j = function(a) {
        return a.key
    };
    K9.prototype.Ll = function(a) {
        return a === "cast-selector-receiver" ? "Cast..." : this.Iv[a].name
    };
    K9.prototype.jh = function(a) {
        g.HX.prototype.jh.call(this, a);
        this.K.setOption("remote", "currentReceiver", this.Iv[a]);
        this.Fb.Ob()
    };
    g.w(ryb, g.kY);
    g.k = ryb.prototype;
    g.k.create = function() {
        var a = this.player.V(),
            b = g.PP(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        cyb(b, a);
        this.subscriptions.push(g.Ev("yt-remote-before-disconnect", this.uba, this));
        this.subscriptions.push(g.Ev("yt-remote-connection-change", this.Oca, this));
        this.subscriptions.push(g.Ev("yt-remote-receiver-availability-change", this.j1,
            this));
        this.subscriptions.push(g.Ev("yt-remote-auto-connect", this.Lca, this));
        this.subscriptions.push(g.Ev("yt-remote-receiver-resumed", this.Kca, this));
        this.subscriptions.push(g.Ev("mdx-privacy-popup-confirm", this.oea, this));
        this.subscriptions.push(g.Ev("mdx-privacy-popup-cancel", this.nea, this));
        this.j1()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.kY.prototype.load.call(this);
        this.Om = new nyb(this, this.player, this.Ic);
        var a = (a = kyb()) ? a.currentTime : 0;
        var b = hyb() ? new h9(B9(), void 0) : null;
        a == 0 && b && (a = e9(i9(b)));
        a !== 0 && this.Uc(a);
        syb(this, this.Ne, this.Ne);
        this.player.Xq(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Yt = this.Gq;
        g.lb(this.Om, this.Ic);
        this.Ic = this.Om = null;
        g.kY.prototype.unload.call(this);
        this.player.Xq(5);
        L9(this)
    };
    g.k.xa = function() {
        g.Fv(this.subscriptions);
        g.kY.prototype.xa.call(this)
    };
    g.k.aH = function(a) {
        var b = g.Da.apply(1, arguments);
        this.loaded && this.Om.Qk.apply(this.Om, [a].concat(g.z(b)))
    };
    g.k.getAdState = function() {
        return this.Ci
    };
    g.k.mq = function() {
        return this.Ic ? i9(this.Ic).mq : !1
    };
    g.k.Zl = function() {
        return this.Ic ? i9(this.Ic).Zl : !1
    };
    g.k.Uc = function(a, b) {
        this.L_ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.Cd("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.L_
    };
    g.k.getProgressState = function() {
        var a = i9(this.Ic),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.Rk() && this.player.Ch(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + c9(a) : a.C,
            isAtLiveHead: (a.B ? a.j + c9(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.W,
            seekableEnd: a.B ? a.j + c9(a) : a.j,
            seekableStart: a.D > 0 ? a.D + c9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Ic && this.Ic.nextVideo()
    };
    g.k.OM = function() {
        this.Ic && this.Ic.OM()
    };
    g.k.uba = function(a) {
        a === 1 && (this.CT = this.Ic ? i9(this.Ic) : null)
    };
    g.k.Oca = function() {
        var a = hyb() ? new h9(B9(), void 0) : null;
        if (a) {
            var b = this.Yt;
            this.loaded && this.unload();
            this.Ic = a;
            this.CT = null;
            b.key !== this.Gq.key && (this.Yt = b, this.load())
        } else g.jb(this.Ic), this.Ic = null, this.loaded && (this.unload(), (a = this.CT) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, e9(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.j1 = function() {
        var a = [this.Gq],
            b = a.concat,
            c = dyb();
        Z8() && g.Zs("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Iv = b.call(a, c);
        a = fyb() || this.Gq;
        M9(this, a);
        this.player.Cd("onMdxReceiversChange")
    };
    g.k.Lca = function() {
        var a = fyb();
        M9(this, a)
    };
    g.k.Kca = function() {
        this.Yt = fyb()
    };
    g.k.oea = function() {
        this.xH = !0;
        L9(this);
        F9 = !1;
        C9 && E9(C9, 1);
        C9 = null
    };
    g.k.nea = function() {
        this.xH = !1;
        L9(this);
        M9(this, this.Gq);
        this.Yt = this.Gq;
        F9 = !1;
        C9 = null;
        this.player.playVideo()
    };
    g.k.oi = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Iv;
            case "currentReceiver":
                return b && (b.key === "cast-selector-receiver" ? wxb() : M9(this, b)), this.loaded ? this.Yt : this.Gq;
            case "quickCast":
                return this.Iv.length === 2 && this.Iv[1].key === "cast-selector-receiver" ? (b && wxb(), !0) : !1
        }
    };
    g.k.XU = function() {
        this.Ic.XU()
    };
    g.k.On = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.lr("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.lr("SESSION_INDEX") && !g.lr("LOGGED_IN"))
    };
    g.jY("remote", ryb);
})(_yt_player);