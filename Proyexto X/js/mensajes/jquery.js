function sm_format_twitter(t) {
    for (var e = [], i = 0; i < t.length; i++) {
        var n = t[i].user.screen_name,
            s = t[i].user.name,
            o = t[i].user.profile_image_url,
            r = t[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(t) {
                return '<a href="' + t + '" target="_blank">' + t + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function(t) {
                return t.charAt(0) + '<a href="http://twitter.com/' + t.substring(1) + '" target="_blank">' + t.substring(1) + "</a>"
            });
        e.push('<li><i class="icon-twitter"></i><a href="http://twitter.com/' + n + '" class="twitter-avatar" target="_blank"><img src="' + o + '" alt="' + s + '" title="' + s + '"></a><span>' + r + '</span><small><a href="http://twitter.com/' + n + "/statuses/" + t[i].id_str + '" target="_blank">' + relative_time(t[i].created_at) + "</a></small></li>")
    }
    return e.join("")
}

function sm_format_twitter2(t) {
    for (var e = [], i = 0; i < t.length; i++) {
        var n = t[i].user.screen_name,
            s = t[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(t) {
                return '<a href="' + t + '" target="_blank">' + t + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function(t) {
                return t.charAt(0) + '<a href="http://twitter.com/' + t.substring(1) + '" target="_blank">' + t.substring(1) + "</a>"
            });
        e.push('<div class="slide"><span>' + s + '</span><small><a href="http://twitter.com/' + n + "/statuses/" + t[i].id_str + '" target="_blank">' + relative_time(t[i].created_at) + "</a></small></div>")
    }
    return e.join("")
}

function sm_format_twitter3(t) {
    for (var e = [], i = 0; i < t.length; i++) {
        var n = t[i].user.screen_name,
            s = t[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(t) {
                return '<a href="' + t + '" target="_blank">' + t + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function(t) {
                return t.charAt(0) + '<a href="http://twitter.com/' + t.substring(1) + '" target="_blank">' + t.substring(1) + "</a>"
            });
        e.push('<div class="slide"><div class="testi-content"><p>' + s + '</p><div class="testi-meta"><span><a href="http://twitter.com/' + n + "/statuses/" + t[i].id_str + '" target="_blank">' + relative_time(t[i].created_at) + "</a></span></div></div></div>")
    }
    return e.join("")
}

function relative_time(t) {
    var e = t.split(" ");
    t = e[1] + " " + e[2] + ", " + e[5] + " " + e[3];
    var i = Date.parse(t),
        n = arguments.length > 1 ? arguments[1] : new Date,
        s = parseInt((n.getTime() - i) / 1e3);
    return s += 60 * n.getTimezoneOffset(), 60 > s ? "less than a minute ago" : 120 > s ? "about a minute ago" : 3600 > s ? parseInt(s / 60).toString() + " minutes ago" : 7200 > s ? "about an hour ago" : 86400 > s ? "about " + parseInt(s / 3600).toString() + " hours ago" : 172800 > s ? "1 day ago" : parseInt(s / 86400).toString() + " days ago"
}

function ssc_init() {
    if (document.body) {
        var t = document.body,
            e = document.documentElement,
            i = window.innerHeight,
            n = t.scrollHeight;
        if (ssc_root = document.compatMode.indexOf("CSS") >= 0 ? e : t, ssc_activeElement = t, ssc_initdone = !0, top != self) ssc_frame = !0;
        else if (n > i && (t.offsetHeight <= i || e.offsetHeight <= i) && (ssc_root.style.height = "auto", ssc_root.offsetHeight <= i)) {
            var s = document.createElement("div");
            s.style.clear = "both", t.appendChild(s)
        }
        ssc_fixedback || (t.style.backgroundAttachment = "scroll", e.style.backgroundAttachment = "scroll"), ssc_keyboardsupport && ssc_addEvent("keydown", ssc_keydown)
    }
}

function ssc_scrollArray(t, e, i, n) {
    if (n || (n = 1e3), ssc_directionCheck(e, i), ssc_que.push({
            x: e,
            y: i,
            lastX: 0 > e ? .99 : -.99,
            lastY: 0 > i ? .99 : -.99,
            start: +new Date
        }), !ssc_pending) {
        var s = function() {
            for (var o = +new Date, r = 0, a = 0, l = 0; l < ssc_que.length; l++) {
                var c = ssc_que[l],
                    u = o - c.start,
                    h = u >= ssc_animtime,
                    d = h ? 1 : u / ssc_animtime;
                ssc_pulseAlgorithm && (d = ssc_pulse(d));
                var p = c.x * d - c.lastX >> 0,
                    f = c.y * d - c.lastY >> 0;
                r += p, a += f, c.lastX += p, c.lastY += f, h && (ssc_que.splice(l, 1), l--)
            }
            if (e) {
                var m = t.scrollLeft;
                t.scrollLeft += r, r && t.scrollLeft === m && (e = 0)
            }
            if (i) {
                var g = t.scrollTop;
                t.scrollTop += a, a && t.scrollTop === g && (i = 0)
            }
            e || i || (ssc_que = []), ssc_que.length ? setTimeout(s, n / ssc_framerate + 1) : ssc_pending = !1
        };
        setTimeout(s, 0), ssc_pending = !0
    }
}

function ssc_wheel(t) {
    ssc_initdone || ssc_init();
    var e = t.target,
        i = ssc_overflowingAncestor(e);
    if (!i || t.defaultPrevented || ssc_isNodeName(ssc_activeElement, "embed") || ssc_isNodeName(e, "embed") && /\.pdf/i.test(e.src)) return !0;
    var n = t.wheelDeltaX || 0,
        s = t.wheelDeltaY || 0;
    n || s || (s = t.wheelDelta || 0), Math.abs(n) > 1.2 && (n *= ssc_stepsize / 120), Math.abs(s) > 1.2 && (s *= ssc_stepsize / 120), ssc_scrollArray(i, -n, -s), t.preventDefault()
}

function ssc_keydown(t) {
    var e = t.target,
        i = t.ctrlKey || t.altKey || t.metaKey;
    if (/input|textarea|embed/i.test(e.nodeName) || e.isContentEditable || t.defaultPrevented || i) return !0;
    if (ssc_isNodeName(e, "button") && t.keyCode === ssc_key.spacebar) return !0;
    var n, s = 0,
        o = 0,
        r = ssc_overflowingAncestor(ssc_activeElement),
        a = r.clientHeight;
    switch (r == document.body && (a = window.innerHeight), t.keyCode) {
        case ssc_key.up:
            o = -ssc_arrowscroll;
            break;
        case ssc_key.down:
            o = ssc_arrowscroll;
            break;
        case ssc_key.spacebar:
            n = t.shiftKey ? 1 : -1, o = -n * a * .9;
            break;
        case ssc_key.pageup:
            o = .9 * -a;
            break;
        case ssc_key.pagedown:
            o = .9 * a;
            break;
        case ssc_key.home:
            o = -r.scrollTop;
            break;
        case ssc_key.end:
            var l = r.scrollHeight - r.scrollTop - a;
            o = l > 0 ? l + 10 : 0;
            break;
        case ssc_key.left:
            s = -ssc_arrowscroll;
            break;
        case ssc_key.right:
            s = ssc_arrowscroll;
            break;
        default:
            return !0
    }
    ssc_scrollArray(r, s, o), t.preventDefault()
}

function ssc_mousedown(t) {
    ssc_activeElement = t.target
}

function ssc_setCache(t, e) {
    for (var i = t.length; i--;) ssc_cache[ssc_uniqueID(t[i])] = e;
    return e
}

function ssc_overflowingAncestor(t) {
    var e = [],
        i = ssc_root.scrollHeight;
    do {
        var n = ssc_cache[ssc_uniqueID(t)];
        if (n) return ssc_setCache(e, n);
        if (e.push(t), i === t.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < i) return ssc_setCache(e, document.body)
        } else if (t.clientHeight + 10 < t.scrollHeight && (overflow = getComputedStyle(t, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow)) return ssc_setCache(e, t)
    } while (t = t.parentNode)
}

function ssc_addEvent(t, e, i) {
    window.addEventListener(t, e, i || !1)
}

function ssc_removeEvent(t, e, i) {
    window.removeEventListener(t, e, i || !1)
}

function ssc_isNodeName(t, e) {
    return t.nodeName.toLowerCase() === e.toLowerCase()
}

function ssc_directionCheck(t, e) {
    t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, (ssc_direction.x !== t || ssc_direction.y !== e) && (ssc_direction.x = t, ssc_direction.y = e, ssc_que = [])
}

function ssc_pulse_(t) {
    var e, i, n;
    return t *= ssc_pulseScale, 1 > t ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * ssc_pulseNormalize
}

function ssc_pulse(t) {
    return t >= 1 ? 1 : 0 >= t ? 0 : (1 == ssc_pulseNormalize && (ssc_pulseNormalize /= ssc_pulse_(1)), ssc_pulse_(t))
}
if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = "length" in t && t.length,
                i = st.type(t);
            return "function" === i || st.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function n(t, e, i) {
            if (st.isFunction(e)) return st.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return st.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (dt.test(e)) return st.filter(e, t, i);
                e = st.filter(e, t)
            }
            return st.grep(t, function(t) {
                return st.inArray(t, e) >= 0 !== i
            })
        }

        function s(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = wt[t] = {};
            return st.each(t.match(bt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function r() {
            ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ft.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (r(), st.ready())
        }

        function l(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(Tt, "-$1").toLowerCase();
                if (i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? st.parseJSON(i) : i
                    } catch (s) {}
                    st.data(t, e, i)
                } else i = void 0
            }
            return i
        }

        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, i, n) {
            if (st.acceptData(t)) {
                var s, o, r = st.expando,
                    a = t.nodeType,
                    l = a ? st.cache : t,
                    c = a ? t[r] : t[r] && r;
                if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e) return c || (c = a ? t[r] = Y.pop() || st.guid++ : r), l[c] || (l[c] = a ? {} : {
                    toJSON: st.noop
                }), ("object" == typeof e || "function" == typeof e) && (n ? l[c] = st.extend(l[c], e) : l[c].data = st.extend(l[c].data, e)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[st.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[st.camelCase(e)])) : s = o, s
            }
        }

        function h(t, e, i) {
            if (st.acceptData(t)) {
                var n, s, o = t.nodeType,
                    r = o ? st.cache : t,
                    a = o ? t[st.expando] : st.expando;
                if (r[a]) {
                    if (e && (n = i ? r[a] : r[a].data)) {
                        st.isArray(e) ? e = e.concat(st.map(e, st.camelCase)) : e in n ? e = [e] : (e = st.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                        for (; s--;) delete n[e[s]];
                        if (i ? !c(n) : !st.isEmptyObject(n)) return
                    }(i || (delete r[a].data, c(r[a]))) && (o ? st.cleanData([t], !0) : it.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return ft.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Ot.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function g(t, e) {
            var i, n, s = 0,
                o = typeof t.getElementsByTagName !== _t ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== _t ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || st.nodeName(n, e) ? o.push(n) : st.merge(o, g(n, e));
            return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], o) : o
        }

        function v(t) {
            Lt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== st.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Qt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) st._data(i, "globalEval", !e || st._data(e[n], "globalEval"))
        }

        function C(t, e) {
            if (1 === e.nodeType && st.hasData(t)) {
                var i, n, s, o = st._data(t),
                    r = st._data(e, o),
                    a = o.events;
                if (a) {
                    delete r.handle, r.events = {};
                    for (i in a)
                        for (n = 0, s = a[i].length; s > n; n++) st.event.add(e, i, a[i][n])
                }
                r.data && (r.data = st.extend({}, r.data))
            }
        }

        function _(t, e) {
            var i, n, s;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !it.noCloneEvent && e[st.expando]) {
                    s = st._data(e);
                    for (n in s.events) st.removeEvent(e, n, s.handle);
                    e.removeAttribute(st.expando)
                }
                "script" === i && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), it.html5Clone && t.innerHTML && !st.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Lt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }

        function S(e, i) {
            var n, s = st(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : st.css(s[0], "display");
            return s.detach(), o
        }

        function T(t) {
            var e = ft,
                i = Zt[t];
            return i || (i = S(t, e), "none" !== i && i || (Jt = (Jt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), i = S(t, e), Jt.detach()), Zt[t] = i), i
        }

        function E(t, e) {
            return {
                get: function() {
                    var i = t();
                    return null != i ? i ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
                }
            }
        }

        function k(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = de.length; s--;)
                if (e = de[s] + i, e in t) return e;
            return n
        }

        function A(t, e) {
            for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = st._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && At(n) && (o[r] = st._data(n, "olddisplay", T(n.nodeName)))) : (s = At(n), (i && "none" !== i || !s) && st._data(n, "olddisplay", s ? i : st.css(n, "display"))));
            for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
            return t
        }

        function I(t, e, i) {
            var n = le.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function L(t, e, i, n, s) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += st.css(t, i + kt[o], !0, s)), n ? ("content" === i && (r -= st.css(t, "padding" + kt[o], !0, s)), "margin" !== i && (r -= st.css(t, "border" + kt[o] + "Width", !0, s))) : (r += st.css(t, "padding" + kt[o], !0, s), "padding" !== i && (r += st.css(t, "border" + kt[o] + "Width", !0, s)));
            return r
        }

        function P(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = te(t),
                r = it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = ee(t, e, o), (0 > s || null == s) && (s = t.style[e]), ne.test(s)) return s;
                n = r && (it.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
            }
            return s + L(t, e, i || (r ? "border" : "content"), n, o) + "px"
        }

        function M(t, e, i, n, s) {
            return new M.prototype.init(t, e, i, n, s)
        }

        function D() {
            return setTimeout(function() {
                pe = void 0
            }), pe = st.now()
        }

        function z(t, e) {
            var i, n = {
                    height: t
                },
                s = 0;
            for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = kt[s], n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function N(t, e, i) {
            for (var n, s = (be[e] || []).concat(be["*"]), o = 0, r = s.length; r > o; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function O(t, e, i) {
            var n, s, o, r, a, l, c, u, h = this,
                d = {},
                p = t.style,
                f = t.nodeType && At(t),
                m = st._data(t, "fxshow");
            i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, st.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = st.css(t, "display"), u = "none" === c ? st._data(t, "olddisplay") || T(t.nodeName) : c, "inline" === u && "none" === st.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || h.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (s = e[n], me.exec(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    d[n] = m && m[n] || st.style(t, n)
                } else c = void 0;
            if (st.isEmptyObject(d)) "inline" === ("none" === c ? T(t.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = st._data(t, "fxshow", {}), o && (m.hidden = !f), f ? st(t).show() : h.done(function() {
                    st(t).hide()
                }), h.done(function() {
                    var e;
                    st._removeData(t, "fxshow");
                    for (e in d) st.style(t, e, d[e])
                });
                for (n in d) r = N(f ? m[n] : 0, n, h), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function B(t, e) {
            var i, n, s, o, r;
            for (i in t)
                if (n = st.camelCase(i), s = e[n], o = t[i], st.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = st.cssHooks[n], r && "expand" in r) {
                    o = r.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = s)
                } else e[n] = s
        }

        function j(t, e, i) {
            var n, s, o = 0,
                r = ye.length,
                a = st.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var e = pe || D(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(o);
                    return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: st.extend({}, e),
                    opts: st.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: pe || D(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = st.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (B(u, c.opts.specialEasing); r > o; o++)
                if (n = ye[o].call(c, t, u, c.opts)) return n;
            return st.map(u, N, c), st.isFunction(c.opts.start) && c.opts.start.call(t, c), st.fx.timer(st.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function R(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(bt) || [];
                if (st.isFunction(i))
                    for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function F(t, e, i, n) {
            function s(a) {
                var l;
                return o[a] = !0, st.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            var o = {},
                r = t === qe;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function H(t, e) {
            var i, n, s = st.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
            return i && st.extend(!0, t, i), t
        }

        function W(t, e, i) {
            for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
            if (s)
                for (r in a)
                    if (a[r] && a[r].test(s)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    n || (n = r)
                }
                o = o || n
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function q(t, e, i, n) {
            var s, o, r, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (o = u.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (r = c[l + " " + o] || c["* " + o], !r)
                    for (s in c)
                        if (a = s.split(" "), a[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            r === !0 ? r = c[s] : c[s] !== !0 && (o = a[0], u.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try {
                        e = r(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: r ? h : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function $(t, e, i, n) {
            var s;
            if (st.isArray(e)) st.each(e, function(e, s) {
                i || Qe.test(t) ? n(t, s) : $(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
            });
            else if (i || "object" !== st.type(e)) n(t, e);
            else
                for (s in e) $(t + "[" + s + "]", e[s], i, n)
        }

        function U() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function G() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function Q(t) {
            return st.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var Y = [],
            X = Y.slice,
            V = Y.concat,
            K = Y.push,
            J = Y.indexOf,
            Z = {},
            tt = Z.toString,
            et = Z.hasOwnProperty,
            it = {},
            nt = "1.11.3",
            st = function(t, e) {
                return new st.fn.init(t, e)
            },
            ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rt = /^-ms-/,
            at = /-([\da-z])/gi,
            lt = function(t, e) {
                return e.toUpperCase()
            };
        st.fn = st.prototype = {
            jquery: nt,
            constructor: st,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
            },
            pushStack: function(t) {
                var e = st.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return st.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(st.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: Y.sort,
            splice: Y.splice
        }, st.extend = st.fn.extend = function() {
            var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || st.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (s = arguments[a]))
                    for (n in s) t = r[n], i = s[n], r !== i && (c && i && (st.isPlainObject(i) || (e = st.isArray(i))) ? (e ? (e = !1, o = t && st.isArray(t) ? t : []) : o = t && st.isPlainObject(t) ? t : {}, r[n] = st.extend(c, o, i)) : void 0 !== i && (r[n] = i));
            return r
        }, st.extend({
            expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === st.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === st.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !st.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                if (it.ownLast)
                    for (e in t) return et.call(t, e);
                for (e in t);
                return void 0 === e || et.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && st.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(rt, "ms-").replace(at, lt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; r > o && (s = e.apply(t[o], n), s !== !1); o++);
                    else
                        for (o in t)
                            if (s = e.apply(t[o], n), s === !1) break
                } else if (a)
                    for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.call(t[o], o, t[o]), s === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(ot, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
            },
            inArray: function(t, e, i) {
                var n;
                if (e) {
                    if (J) return J.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
                if (i !== i)
                    for (; void 0 !== e[n];) t[s++] = e[n++];
                return t.length = s, t
            },
            grep: function(t, e, i) {
                for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o), n !== a && s.push(t[o]);
                return s
            },
            map: function(t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; r > o; o++) s = e(t[o], o, n), null != s && l.push(s);
                else
                    for (o in t) s = e(t[o], o, n), null != s && l.push(s);
                return V.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, s;
                return "string" == typeof e && (s = t[e], e = t, t = s), st.isFunction(t) ? (i = X.call(arguments, 2), n = function() {
                    return t.apply(e || this, i.concat(X.call(arguments)))
                }, n.guid = t.guid = t.guid || st.guid++, n) : void 0
            },
            now: function() {
                return +new Date
            },
            support: it
        }), st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function(t) {
            function e(t, e, i, n) {
                var s, o, r, a, l, c, h, p, f, m;
                if ((e ? e.ownerDocument || e : F) !== M && P(e), e = e || M, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && z) {
                    if (11 !== a && (s = yt.exec(t)))
                        if (r = s[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(r), !o || !o.parentNode) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && j(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (s[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = s[3]) && x.getElementsByClassName) return J.apply(i, e.getElementsByClassName(r)), i
                        }
                    if (x.qsa && (!N || !N.test(t))) {
                        if (p = h = R, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = T(t), (h = e.getAttribute("id")) ? p = h.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + d(c[l]);
                            f = bt.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return J.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return k(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[R] = !0, t
            }

            function s(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) C.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {}

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = W++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o)
                } : function(e, i, r) {
                    var a, l, c = [H, o];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) {
                                if (l = e[R] || (e[R] = {}), (a = l[n]) && a[0] === H && a[1] === o) return c[2] = a[2];
                                if (l[n] = c, c[2] = t(e, i, r)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
                return n
            }

            function g(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), c && e.push(a));
                return r
            }

            function v(t, e, i, s, o, r) {
                return s && !s[R] && (s = v(s)), o && !o[R] && (o = v(o, r)), n(function(n, r, a, l) {
                    var c, u, h, d = [],
                        p = [],
                        f = r.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : g(v, d, t, a, l),
                        b = i ? o || (n ? t : f || s) ? [] : r : y;
                    if (i && i(y, b, a, l), s)
                        for (c = g(b, p), s(c, [], a, l), u = c.length; u--;)(h = c[u]) && (b[p[u]] = !(y[p[u]] = h));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(h = b[u]) && (c = o ? tt(n, h) : d[u]) > -1 && (n[c] = !(r[c] = h))
                        }
                    } else b = g(b === r ? b.splice(f, b.length) : b), o ? o(null, r, b, l) : J.apply(r, b)
                })
            }

            function y(t) {
                for (var e, i, n, s = t.length, o = C.relative[t[0].type], r = o || C.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, r, !0), c = p(function(t) {
                        return tt(e, t) > -1
                    }, r, !0), u = [function(t, i, n) {
                        var s = !o && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, s
                    }]; s > a; a++)
                    if (i = C.relative[t[a].type]) u = [p(f(u), i)];
                    else {
                        if (i = C.filter[t[a].type].apply(null, t[a].matches), i[R]) {
                            for (n = ++a; s > n && !C.relative[t[n].type]; n++);
                            return v(a > 1 && f(u), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && d(t))
                        }
                        u.push(i)
                    }
                return f(u)
            }

            function b(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    r = function(n, r, a, l, c) {
                        var u, h, d, p = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            y = A,
                            b = n || o && C.find.TAG("*", c),
                            w = H += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && (A = r !== M && r); f !== x && null != (u = b[f]); f++) {
                            if (o && u) {
                                for (h = 0; d = t[h++];)
                                    if (d(u, r, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (H = w)
                            }
                            s && ((u = !d && u) && p--, n && m.push(u))
                        }
                        if (p += f, s && f !== p) {
                            for (h = 0; d = i[h++];) d(m, v, r, a);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = V.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (H = w, A = y), m
                    };
                return s ? n(r) : r
            }
            var w, x, C, _, S, T, E, k, A, I, L, P, M, D, z, N, O, B, j, R = "sizzle" + 1 * new Date,
                F = t.document,
                H = 0,
                W = 0,
                q = i(),
                $ = i(),
                U = i(),
                G = function(t, e) {
                    return t === e && (L = !0), 0
                },
                Q = 1 << 31,
                Y = {}.hasOwnProperty,
                X = [],
                V = X.pop,
                K = X.push,
                J = X.push,
                Z = X.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                st = nt.replace("w", "w#"),
                ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + it + "*\\]",
                rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ct = new RegExp("^" + it + "*," + it + "*"),
                ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                dt = new RegExp(rt),
                pt = new RegExp("^" + st + "$"),
                ft = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                Ct = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                _t = function() {
                    P()
                };
            try {
                J.apply(X = Z.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
            } catch (St) {
                J = {
                    apply: X.length ? function(t, e) {
                        K.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            x = e.support = {}, S = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, P = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : F;
                return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, D = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", _t, !1) : i.attachEvent && i.attachEvent("onunload", _t)), z = !S(n), x.attributes = s(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = s(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = vt.test(n.getElementsByClassName), x.getById = s(function(t) {
                    return D.appendChild(t).id = R, !n.getElementsByName || !n.getElementsByName(R).length
                }), x.getById ? (C.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && z) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, C.filter.ID = function(t) {
                    var e = t.replace(xt, Ct);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete C.find.ID, C.filter.ID = function(t) {
                    var e = t.replace(xt, Ct);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), C.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, C.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return z ? e.getElementsByClassName(t) : void 0
                }, O = [], N = [], (x.qsa = vt.test(n.querySelectorAll)) && (s(function(t) {
                    D.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || N.push(".#.+[+~]")
                }), s(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (x.matchesSelector = vt.test(B = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function(t) {
                    x.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), O.push("!=", rt)
                }), N = N.length && new RegExp(N.join("|")), O = O.length && new RegExp(O.join("|")), e = vt.test(D.compareDocumentPosition), j = e || vt.test(D.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, G = e ? function(t, e) {
                    if (t === e) return L = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && j(F, t) ? -1 : e === n || e.ownerDocument === F && j(F, e) ? 1 : I ? tt(I, t) - tt(I, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return L = !0, 0;
                    var i, s = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : I ? tt(I, t) - tt(I, e) : 0;
                    if (o === a) return r(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[s] === c[s];) s++;
                    return s ? r(l[s], c[s]) : l[s] === F ? -1 : c[s] === F ? 1 : 0
                }, n) : M
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== M && P(t), i = i.replace(ht, "='$1']"), !(!x.matchesSelector || !z || O && O.test(i) || N && N.test(i))) try {
                    var n = B.call(t, i);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
                } catch (s) {}
                return e(i, M, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && P(t), j(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== M && P(t);
                var i = C.attrHandle[e.toLowerCase()],
                    n = i && Y.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !z) : void 0;
                return void 0 !== n ? n : x.attributes || !z ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (L = !x.detectDuplicates, I = !x.sortStable && t.slice(0), t.sort(G), L) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return I = null, t
            }, _ = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += _(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += _(e);
                return i
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, Ct), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, Ct).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, u, h, d, p, f, m = o !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (u = g[R] || (g[R] = {}), c = u[t] || [], p = c[0] === H && c[1], d = c[0] === H && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++d && h === e) {
                                            u[t] = [H, p, d];
                                            break
                                        }
                                } else if (y && (c = (e[R] || (e[R] = {}))[t]) && c[0] === H) d = c[1];
                                else
                                    for (;
                                        (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[R] || (h[R] = {}))[t] = [H, d]), h !== e)););
                                return d -= s, d === n || d % n === 0 && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var s, o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[R] ? o(i) : o.length > 1 ? (s = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, s = o(t, i), r = s.length; r--;) n = tt(t, s[r]), t[n] = !(e[n] = s[r])
                        }) : function(t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            s = E(t.replace(lt, "$1"));
                        return s[R] ? n(function(t, e, i, n) {
                            for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(xt, Ct),
                            function(e) {
                                return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Ct).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = z ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === D
                    },
                    focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !C.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[w] = l(w);
            return h.prototype = C.filters = C.pseudos, C.setFilters = new h, T = e.tokenize = function(t, i) {
                var n, s, o, r, a, l, c, u = $[t + " "];
                if (u) return i ? 0 : u.slice(0);
                for (a = t, l = [], c = C.preFilter; a;) {
                    (!n || (s = ct.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ut.exec(a)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(lt, " ")
                    }), a = a.slice(n.length));
                    for (r in C.filter) !(s = ft[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), o.push({
                        value: n,
                        type: r,
                        matches: s
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : $(t, l).slice(0)
            }, E = e.compile = function(t, e) {
                var i, n = [],
                    s = [],
                    o = U[t + " "];
                if (!o) {
                    for (e || (e = T(t)), i = e.length; i--;) o = y(e[i]), o[R] ? n.push(o) : s.push(o);
                    o = U(t, b(s, n)), o.selector = t
                }
                return o
            }, k = e.select = function(t, e, i, n) {
                var s, o, r, a, l, c = "function" == typeof t && t,
                    h = !n && T(t = c.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && x.getById && 9 === e.nodeType && z && C.relative[o[1].type]) {
                        if (e = (C.find.ID(r.matches[0].replace(xt, Ct), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = ft.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !C.relative[a = r.type]);)
                        if ((l = C.find[a]) && (n = l(r.matches[0].replace(xt, Ct), bt.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = n.length && d(o), !t) return J.apply(i, n), i;
                            break
                        }
                }
                return (c || E(t, h))(n, e, !z, i, bt.test(t) && u(e.parentNode) || e), i
            }, x.sortStable = R.split("").sort(G).join("") === R, x.detectDuplicates = !!L, P(), x.sortDetached = s(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("div"))
            }), s(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && s(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), s(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        st.find = ct, st.expr = ct.selectors, st.expr[":"] = st.expr.pseudos, st.unique = ct.uniqueSort, st.text = ct.getText, st.isXMLDoc = ct.isXML, st.contains = ct.contains;
        var ut = st.expr.match.needsContext,
            ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            dt = /^.[^:#\[\.,]*$/;
        st.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, st.fn.extend({
            find: function(t) {
                var e, i = [],
                    n = this,
                    s = n.length;
                if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
                    for (e = 0; s > e; e++)
                        if (st.contains(n[e], this)) return !0
                }));
                for (e = 0; s > e; e++) st.find(t, n[e], i);
                return i = this.pushStack(s > 1 ? st.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ut.test(t) ? st(t) : t || [], !1).length
            }
        });
        var pt, ft = t.document,
            mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = st.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), ht.test(i[1]) && st.isPlainObject(e))
                            for (i in e) st.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (n = ft.getElementById(i[2]), n && n.parentNode) {
                        if (n.id !== i[2]) return pt.find(t);
                        this.length = 1, this[0] = n
                    }
                    return this.context = ft, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
            };
        gt.prototype = st.fn, pt = st(ft);
        var vt = /^(?:parents|prev(?:Until|All))/,
            yt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        st.extend({
            dir: function(t, e, i) {
                for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !st(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), st.fn.extend({
            has: function(t) {
                var e, i = st(t, this),
                    n = i.length;
                return this.filter(function() {
                    for (e = 0; n > e; e++)
                        if (st.contains(this, i[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, s = this.length, o = [], r = ut.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? st.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? st.inArray(this[0], st(t)) : st.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(st.unique(st.merge(this.get(), st(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), st.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return st.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return st.dir(t, "parentNode", i)
            },
            next: function(t) {
                return s(t, "nextSibling")
            },
            prev: function(t) {
                return s(t, "previousSibling")
            },
            nextAll: function(t) {
                return st.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return st.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return st.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return st.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return st.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return st.sibling(t.firstChild)
            },
            contents: function(t) {
                return st.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : st.merge([], t.childNodes)
            }
        }, function(t, e) {
            st.fn[t] = function(i, n) {
                var s = st.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = st.filter(n, s)), this.length > 1 && (yt[t] || (s = st.unique(s)), vt.test(t) && (s = s.reverse())), this.pushStack(s)
            }
        });
        var bt = /\S+/g,
            wt = {};
        st.Callbacks = function(t) {
            t = "string" == typeof t ? wt[t] || o(t) : st.extend({}, t);
            var e, i, n, s, r, a, l = [],
                c = !t.once && [],
                u = function(o) {
                    for (i = t.memory && o, n = !0, r = a || 0, a = 0, s = l.length, e = !0; l && s > r; r++)
                        if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            i = !1;
                            break
                        }
                    e = !1, l && (c ? c.length && u(c.shift()) : i ? l = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function o(e) {
                                st.each(e, function(e, i) {
                                    var n = st.type(i);
                                    "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), e ? s = l.length : i && (a = n, u(i))
                        }
                        return this
                    },
                    remove: function() {
                        return l && st.each(arguments, function(t, i) {
                            for (var n;
                                (n = st.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (s >= n && s--, r >= n && r--)
                        }), this
                    },
                    has: function(t) {
                        return t ? st.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = c = i = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, i || h.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, i) {
                        return !l || n && !c || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? c.push(i) : u(i)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return h
        }, st.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", st.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return st.Deferred(function(i) {
                                st.each(e, function(e, o) {
                                    var r = st.isFunction(t[e]) && t[e];
                                    s[o[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && st.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? st.extend(t, n) : n
                        }
                    },
                    s = {};
                return n.pipe = n.then, st.each(e, function(t, o) {
                    var r = o[2],
                        a = o[3];
                    n[o[1]] = r.add, a && r.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                        return s[o[0] + "With"](this === s ? n : this, arguments), this
                    }, s[o[0] + "With"] = r.fireWith
                }), n.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var e, i, n, s = 0,
                    o = X.call(arguments),
                    r = o.length,
                    a = 1 !== r || t && st.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : st.Deferred(),
                    c = function(t, i, n) {
                        return function(s) {
                            i[t] = this, n[t] = arguments.length > 1 ? X.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) o[s] && st.isFunction(o[s].promise) ? o[s].promise().done(c(s, n, o)).fail(l.reject).progress(c(s, i, e)) : --a;
                return a || l.resolveWith(n, o), l.promise()
            }
        });
        var xt;
        st.fn.ready = function(t) {
            return st.ready.promise().done(t), this
        }, st.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? st.readyWait++ : st.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--st.readyWait : !st.isReady) {
                    if (!ft.body) return setTimeout(st.ready);
                    st.isReady = !0, t !== !0 && --st.readyWait > 0 || (xt.resolveWith(ft, [st]), st.fn.triggerHandler && (st(ft).triggerHandler("ready"), st(ft).off("ready")))
                }
            }
        }), st.ready.promise = function(e) {
            if (!xt)
                if (xt = st.Deferred(), "complete" === ft.readyState) setTimeout(st.ready);
                else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                ft.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var i = !1;
                try {
                    i = null == t.frameElement && ft.documentElement
                } catch (n) {}
                i && i.doScroll && ! function s() {
                    if (!st.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(s, 50)
                        }
                        r(), st.ready()
                    }
                }()
            }
            return xt.promise(e)
        };
        var Ct, _t = "undefined";
        for (Ct in st(it)) break;
        it.ownLast = "0" !== Ct, it.inlineBlockNeedsLayout = !1, st(function() {
                var t, e, i, n;
                i = ft.getElementsByTagName("body")[0], i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== _t && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
            }),
            function() {
                var t = ft.createElement("div");
                if (null == it.deleteExpando) {
                    it.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        it.deleteExpando = !1
                    }
                }
                t = null
            }(), st.acceptData = function(t) {
                var e = st.noData[(t.nodeName + " ").toLowerCase()],
                    i = +t.nodeType || 1;
                return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Tt = /([A-Z])/g;
        st.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando], !!t && !c(t)
            },
            data: function(t, e, i) {
                return u(t, e, i)
            },
            removeData: function(t, e) {
                return h(t, e)
            },
            _data: function(t, e, i) {
                return u(t, e, i, !0)
            },
            _removeData: function(t, e) {
                return h(t, e, !0)
            }
        }), st.fn.extend({
            data: function(t, e) {
                var i, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                        for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(o, n, s[n])));
                        st._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    st.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    st.data(this, t, e)
                }) : o ? l(o, t, st.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    st.removeData(this, t)
                })
            }
        }), st.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = st._data(t, e), i && (!n || st.isArray(i) ? n = st._data(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = st.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = st._queueHooks(t, e),
                    r = function() {
                        st.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return st._data(t, i) || st._data(t, i, {
                    empty: st.Callbacks("once memory").add(function() {
                        st._removeData(t, e + "queue"), st._removeData(t, i)
                    })
                })
            }
        }), st.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = st.queue(this, t, e);
                    st._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    st.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    s = st.Deferred(),
                    o = this,
                    r = this.length,
                    a = function() {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = st._data(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(e)
            }
        });
        var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            kt = ["Top", "Right", "Bottom", "Left"],
            At = function(t, e) {
                return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
            },
            It = st.access = function(t, e, i, n, s, o, r) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === st.type(i)) {
                    s = !0;
                    for (a in i) st.access(t, e, a, i[a], !0, o, r)
                } else if (void 0 !== n && (s = !0, st.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(st(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
            },
            Lt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = ft.createElement("input"),
                e = ft.createElement("div"),
                i = ft.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), it.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    it.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == it.deleteExpando) {
                it.deleteExpando = !0;
                try {
                    delete e.test
                } catch (n) {
                    it.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, i, n = ft.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) i = "on" + e, (it[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), it[e + "Bubbles"] = n.attributes[i].expando === !1);
            n = null
        }();
        var Pt = /^(?:input|select|textarea)$/i,
            Mt = /^key/,
            Dt = /^(?:mouse|pointer|contextmenu)|click/,
            zt = /^(?:focusinfocus|focusoutblur)$/,
            Nt = /^([^.]*)(?:\.(.+)|)$/;
        st.event = {
            global: {},
            add: function(t, e, i, n, s) {
                var o, r, a, l, c, u, h, d, p, f, m, g = st._data(t);
                if (g) {
                    for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = st.guid++), (r = g.events) || (r = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
                            return typeof st === _t || t && st.event.triggered === t.type ? void 0 : st.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) o = Nt.exec(e[a]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (c = st.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = st.event.special[p] || {}, h = st.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && st.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, c.setup && c.setup.call(t, n, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), st.event.global[p] = !0);
                    t = null
                }
            },
            remove: function(t, e, i, n, s) {
                var o, r, a, l, c, u, h, d, p, f, m, g = st.hasData(t) && st._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(bt) || [""], c = e.length; c--;)
                        if (a = Nt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (h = st.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !s && m !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, h.remove && h.remove.call(t, r));
                            l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || st.removeEvent(t, p, g.handle), delete u[p])
                        } else
                            for (p in u) st.event.remove(t, p + e[c], i, n, !0);
                    st.isEmptyObject(u) && (delete g.handle, st._removeData(t, "events"))
                }
            },
            trigger: function(e, i, n, s) {
                var o, r, a, l, c, u, h, d = [n || ft],
                    p = et.call(e, "type") ? e.type : e,
                    f = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = n = n || ft, 3 !== n.nodeType && 8 !== n.nodeType && !zt.test(p + st.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e : new st.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), c = st.event.special[p] || {}, s || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                    if (!s && !c.noBubble && !st.isWindow(n)) {
                        for (l = c.delegateType || p, zt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                        u === (n.ownerDocument || ft) && d.push(u.defaultView || u.parentWindow || t)
                    }
                    for (h = 0;
                        (a = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : c.bindType || p, o = (st._data(a, "events") || {})[e.type] && st._data(a, "handle"), o && o.apply(a, i), o = r && a[r], o && o.apply && st.acceptData(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault());
                    if (e.type = p, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), i) === !1) && st.acceptData(n) && r && n[p] && !st.isWindow(n)) {
                        u = n[r], u && (n[r] = null), st.event.triggered = p;
                        try {
                            n[p]()
                        } catch (m) {}
                        st.event.triggered = void 0, u && (n[r] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = st.event.fix(t);
                var e, i, n, s, o, r = [],
                    a = X.call(arguments),
                    l = (st._data(this, "events") || {})[t.type] || [],
                    c = st.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (r = st.event.handlers.call(this, t, l), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, o = 0;
                            (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((st.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (s = [], o = 0; a > o; o++) n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? st(i, this).index(l) >= 0 : st.find(i, this, null, [l]).length), s[i] && s.push(n);
                            s.length && r.push({
                                elem: l,
                                handlers: s
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            fix: function(t) {
                if (t[st.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = Dt.test(s) ? this.mouseHooks : Mt.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new st.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = o.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, s, o = e.button,
                        r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || ft, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== f() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return st.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var s = st.extend(new st.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? st.event.trigger(s, null, e) : st.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, st.removeEvent = ft.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === _t && (t[n] = null), t.detachEvent(n, i))
        }, st.Event = function(t, e) {
            return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
        }, st.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, st.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            st.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (!s || s !== n && !st.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), it.submitBubbles || (st.event.special.submit = {
            setup: function() {
                return st.nodeName(this, "form") ? !1 : void st.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        i = st.nodeName(e, "input") || st.nodeName(e, "button") ? e.form : void 0;
                    i && !st._data(i, "submitBubbles") && (st.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), st._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && st.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return st.nodeName(this, "form") ? !1 : void st.event.remove(this, "._submit")
            }
        }), it.changeBubbles || (st.event.special.change = {
            setup: function() {
                return Pt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), st.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, t, !0)
                })), !1) : void st.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Pt.test(e.nodeName) && !st._data(e, "changeBubbles") && (st.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || st.event.simulate("change", this.parentNode, t, !0)
                    }), st._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return st.event.remove(this, "._change"), !Pt.test(this.nodeName)
            }
        }), it.focusinBubbles || st.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                st.event.simulate(e, t.target, st.event.fix(t), !0)
            };
            st.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        s = st._data(n, e);
                    s || n.addEventListener(t, i, !0), st._data(n, e, (s || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        s = st._data(n, e) - 1;
                    s ? st._data(n, e, s) : (n.removeEventListener(t, i, !0), st._removeData(n, e))
                }
            }
        }), st.fn.extend({
            on: function(t, e, i, n, s) {
                var o, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t) this.on(o, e, i, t[o], s);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
                else if (!n) return this;
                return 1 === s && (r = n, n = function(t) {
                    return st().off(t), r.apply(this, arguments)
                }, n.guid = r.guid || (r.guid = st.guid++)), this.each(function() {
                    st.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                    st.event.remove(this, t, i, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    st.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? st.event.trigger(t, e, i, !0) : void 0
            }
        });
        var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Bt = / jQuery\d+="(?:null|\d+)"/g,
            jt = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
            Rt = /^\s+/,
            Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ht = /<([\w:]+)/,
            Wt = /<tbody/i,
            qt = /<|&#?\w+;/,
            $t = /<(?:script|style|link)/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Gt = /^$|\/(?:java|ecma)script/i,
            Qt = /^true\/(.*)/,
            Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Vt = m(ft),
            Kt = Vt.appendChild(ft.createElement("div"));
        Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, Xt.th = Xt.td, st.extend({
            clone: function(t, e, i) {
                var n, s, o, r, a, l = st.contains(t.ownerDocument, t);
                if (it.html5Clone || st.isXMLDoc(t) || !jt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(o = Kt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
                    for (n = g(o), a = g(t), r = 0; null != (s = a[r]); ++r) n[r] && _(s, n[r]);
                if (e)
                    if (i)
                        for (a = a || g(t), n = n || g(o), r = 0; null != (s = a[r]); r++) C(s, n[r]);
                    else C(t, o);
                return n = g(o, "script"), n.length > 0 && x(n, !l && g(t, "script")), n = a = s = null, o
            },
            buildFragment: function(t, e, i, n) {
                for (var s, o, r, a, l, c, u, h = t.length, d = m(e), p = [], f = 0; h > f; f++)
                    if (o = t[f], o || 0 === o)
                        if ("object" === st.type(o)) st.merge(p, o.nodeType ? [o] : o);
                        else if (qt.test(o)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (Ht.exec(o) || ["", ""])[1].toLowerCase(), u = Xt[l] || Xt._default, a.innerHTML = u[1] + o.replace(Ft, "<$1></$2>") + u[2], s = u[0]; s--;) a = a.lastChild;
                    if (!it.leadingWhitespace && Rt.test(o) && p.push(e.createTextNode(Rt.exec(o)[0])), !it.tbody)
                        for (o = "table" !== l || Wt.test(o) ? "<table>" !== u[1] || Wt.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) st.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (st.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = d.lastChild
                } else p.push(e.createTextNode(o));
                for (a && d.removeChild(a), it.appendChecked || st.grep(g(p, "input"), v), f = 0; o = p[f++];)
                    if ((!n || -1 === st.inArray(o, n)) && (r = st.contains(o.ownerDocument, o), a = g(d.appendChild(o), "script"), r && x(a), i))
                        for (s = 0; o = a[s++];) Gt.test(o.type || "") && i.push(o);
                return a = null, d
            },
            cleanData: function(t, e) {
                for (var i, n, s, o, r = 0, a = st.expando, l = st.cache, c = it.deleteExpando, u = st.event.special; null != (i = t[r]); r++)
                    if ((e || st.acceptData(i)) && (s = i[a], o = s && l[s])) {
                        if (o.events)
                            for (n in o.events) u[n] ? st.event.remove(i, n) : st.removeEvent(i, n, o.handle);
                        l[s] && (delete l[s], c ? delete i[a] : typeof i.removeAttribute !== _t ? i.removeAttribute(a) : i[a] = null, Y.push(s))
                    }
            }
        }), st.fn.extend({
            text: function(t) {
                return It(this, function(t) {
                    return void 0 === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var i, n = t ? st.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || st.cleanData(g(i)), i.parentNode && (e && st.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && st.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && st.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return st.clone(this, t, e)
                })
            },
            html: function(t) {
                return It(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Bt, "") : void 0;
                    if (!("string" != typeof t || $t.test(t) || !it.htmlSerialize && jt.test(t) || !it.leadingWhitespace && Rt.test(t) || Xt[(Ht.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Ft, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (st.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (s) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, st.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = V.apply([], t);
                var i, n, s, o, r, a, l = 0,
                    c = this.length,
                    u = this,
                    h = c - 1,
                    d = t[0],
                    p = st.isFunction(d);
                if (p || c > 1 && "string" == typeof d && !it.checkClone && Ut.test(d)) return this.each(function(i) {
                    var n = u.eq(i);
                    p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
                });
                if (c && (a = st.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                    for (o = st.map(g(a, "script"), b), s = o.length; c > l; l++) n = a, l !== h && (n = st.clone(n, !0, !0), s && st.merge(o, g(n, "script"))), e.call(this[l], n, l);
                    if (s)
                        for (r = o[o.length - 1].ownerDocument, st.map(o, w), l = 0; s > l; l++) n = o[l], Gt.test(n.type || "") && !st._data(n, "globalEval") && st.contains(r, n) && (n.src ? st._evalUrl && st._evalUrl(n.src) : st.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Yt, "")));
                    a = i = null
                }
                return this
            }
        }), st.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            st.fn[t] = function(t) {
                for (var i, n = 0, s = [], o = st(t), r = o.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), st(o[n])[e](i), K.apply(s, i.get());
                return this.pushStack(s)
            }
        });
        var Jt, Zt = {};
        ! function() {
            var t;
            it.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = ft.getElementsByTagName("body")[0], i && i.style ? (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== _t && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
        var te, ee, ie = /^margin/,
            ne = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
            se = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ee = function(t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || te(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== r || st.contains(t.ownerDocument, t) || (r = st.style(t, e)), ne.test(r) && ie.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 === r ? r : r + ""
        }) : ft.documentElement.currentStyle && (te = function(t) {
            return t.currentStyle
        }, ee = function(t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || te(t), r = i ? i[e] : void 0, null == r && a && a[e] && (r = a[e]), ne.test(r) && !se.test(e) && (n = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)), void 0 === r ? r : r + "" || "auto"
        }), ! function() {
            function e() {
                var e, i, n, s;
                i = ft.getElementsByTagName("body")[0], i && i.style && (e = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, s = e.appendChild(ft.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(s)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), i.removeChild(n))
            }
            var i, n, s, o, r, a, l;
            i = ft.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], (n = s && s.style) && (n.cssText = "float:left;opacity:.5", it.opacity = "0.5" === n.opacity, it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === i.style.backgroundClip, it.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, st.extend(it, {
                reliableHiddenOffsets: function() {
                    return null == a && e(), a
                },
                boxSizingReliable: function() {
                    return null == r && e(), r
                },
                pixelPosition: function() {
                    return null == o && e(), o
                },
                reliableMarginRight: function() {
                    return null == l && e(), l
                }
            }))
        }(), st.swap = function(t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s
        };
        var oe = /alpha\([^)]*\)/i,
            re = /opacity\s*=\s*([^)]*)/,
            ae = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + Et + ")(.*)$", "i"),
            ce = new RegExp("^([+-])=(" + Et + ")", "i"),
            ue = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            he = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            de = ["Webkit", "O", "Moz", "ms"];
        st.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = ee(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": it.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = st.camelCase(e),
                        l = t.style;
                    if (e = st.cssProps[a] || (st.cssProps[a] = k(l, a)), r = st.cssHooks[e] || st.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e];
                    if (o = typeof i, "string" === o && (s = ce.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(st.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || st.cssNumber[a] || (i += "px"), it.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                        l[e] = i
                    } catch (c) {}
                }
            },
            css: function(t, e, i, n) {
                var s, o, r, a = st.camelCase(e);
                return e = st.cssProps[a] || (st.cssProps[a] = k(t.style, a)), r = st.cssHooks[e] || st.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = ee(t, e, n)), "normal" === o && e in he && (o = he[e]), "" === i || i ? (s = parseFloat(o), i === !0 || st.isNumeric(s) ? s || 0 : o) : o
            }
        }), st.each(["height", "width"], function(t, e) {
            st.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? ae.test(st.css(t, "display")) && 0 === t.offsetWidth ? st.swap(t, ue, function() {
                        return P(t, e, n)
                    }) : P(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var s = n && te(t);
                    return I(t, i, n ? L(t, e, n, it.boxSizing && "border-box" === st.css(t, "boxSizing", !1, s), s) : 0)
                }
            }
        }), it.opacity || (st.cssHooks.opacity = {
            get: function(t, e) {
                return re.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    s = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === st.trim(o.replace(oe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oe.test(o) ? o.replace(oe, s) : o + " " + s)
            }
        }), st.cssHooks.marginRight = E(it.reliableMarginRight, function(t, e) {
            return e ? st.swap(t, {
                display: "inline-block"
            }, ee, [t, "marginRight"]) : void 0
        }), st.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            st.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + kt[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, ie.test(t) || (st.cssHooks[t + e].set = I)
        }), st.fn.extend({
            css: function(t, e) {
                return It(this, function(t, e, i) {
                    var n, s, o = {},
                        r = 0;
                    if (st.isArray(e)) {
                        for (n = te(t), s = e.length; s > r; r++) o[e[r]] = st.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return A(this, !0)
            },
            hide: function() {
                return A(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    At(this) ? st(this).show() : st(this).hide()
                })
            }
        }), st.Tween = M, M.prototype = {
            constructor: M,
            init: function(t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (st.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = M.propHooks[this.prop];
                return t && t.get ? t.get(this) : M.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = M.propHooks[this.prop];
                return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    st.fx.step[t.prop] ? st.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[st.cssProps[t.prop]] || st.cssHooks[t.prop]) ? st.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, st.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, st.fx = M.prototype.init, st.fx.step = {};
        var pe, fe, me = /^(?:toggle|show|hide)$/,
            ge = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
            ve = /queueHooks$/,
            ye = [O],
            be = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = ge.exec(e),
                        o = s && s[3] || (st.cssNumber[t] ? "" : "px"),
                        r = (st.cssNumber[t] || "px" !== o && +n) && ge.exec(st.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], s = s || [], r = +n || 1;
                        do a = a || ".5", r /= a, st.style(i.elem, t, r + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), i
                }]
            };
        st.Animation = st.extend(j, {
                tweener: function(t, e) {
                    st.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, s = t.length; s > n; n++) i = t[n], be[i] = be[i] || [], be[i].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ye.unshift(t) : ye.push(t)
                }
            }), st.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? st.extend({}, t) : {
                    complete: i || !i && e || st.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !st.isFunction(e) && e
                };
                return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
                }, n
            }, st.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(At).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var s = st.isEmptyObject(t),
                        o = st.speed(e, i, n),
                        r = function() {
                            var e = j(this, st.extend({}, t), o);
                            (s || st._data(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = st.timers,
                            r = st._data(this);
                        if (s) r[s] && r[s].stop && n(r[s]);
                        else
                            for (s in r) r[s] && r[s].stop && ve.test(s) && n(r[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        (e || !i) && st.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = st._data(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = st.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, st.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), st.each(["toggle", "show", "hide"], function(t, e) {
                var i = st.fn[e];
                st.fn[e] = function(t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(z(e, !0), t, n, s)
                }
            }), st.each({
                slideDown: z("show"),
                slideUp: z("hide"),
                slideToggle: z("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                st.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), st.timers = [], st.fx.tick = function() {
                var t, e = st.timers,
                    i = 0;
                for (pe = st.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                e.length || st.fx.stop(), pe = void 0
            }, st.fx.timer = function(t) {
                st.timers.push(t), t() ? st.fx.start() : st.timers.pop()
            }, st.fx.interval = 13, st.fx.start = function() {
                fe || (fe = setInterval(st.fx.tick, st.fx.interval))
            }, st.fx.stop = function() {
                clearInterval(fe), fe = null
            }, st.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, st.fn.delay = function(t, e) {
                return t = st.fx ? st.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            function() {
                var t, e, i, n, s;
                e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = ft.createElement("select"), s = i.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = "t" !== e.className, it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = "/a" === n.getAttribute("href"), it.checkOn = !!t.value, it.optSelected = s.selected, it.enctype = !!ft.createElement("form").enctype, i.disabled = !0, it.optDisabled = !s.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), it.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), it.radioValue = "t" === t.value
            }();
        var we = /\r/g;
        st.fn.extend({
            val: function(t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = st.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, st(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : st.isArray(s) && (s = st.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                })) : s ? (e = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(we, "") : null == i ? "" : i)) : void 0
            }
        }), st.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = st.find.attr(t, "value");
                        return null != e ? e : st.trim(st.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                            if (i = n[l], !(!i.selected && l !== s || (it.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && st.nodeName(i.parentNode, "optgroup"))) {
                                if (e = st(i).val(), o) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var i, n, s = t.options, o = st.makeArray(e), r = s.length; r--;)
                            if (n = s[r], st.inArray(st.valHooks.option.get(n), o) >= 0) try {
                                n.selected = i = !0
                            } catch (a) {
                                n.scrollHeight
                            } else n.selected = !1;
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), st.each(["radio", "checkbox"], function() {
            st.valHooks[this] = {
                set: function(t, e) {
                    return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) >= 0 : void 0
                }
            }, it.checkOn || (st.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var xe, Ce, _e = st.expr.attrHandle,
            Se = /^(?:checked|selected)$/i,
            Te = it.getSetAttribute,
            Ee = it.input;
        st.fn.extend({
            attr: function(t, e) {
                return It(this, st.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    st.removeAttr(this, t)
                })
            }
        }), st.extend({
            attr: function(t, e, i) {
                var n, s, o = t.nodeType;
                return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === _t ? st.prop(t, e, i) : (1 === o && st.isXMLDoc(t) || (e = e.toLowerCase(), n = st.attrHooks[e] || (st.expr.match.bool.test(e) ? Ce : xe)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = st.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void st.removeAttr(t, e)) : void 0
            },
            removeAttr: function(t, e) {
                var i, n, s = 0,
                    o = e && e.match(bt);
                if (o && 1 === t.nodeType)
                    for (; i = o[s++];) n = st.propFix[i] || i, st.expr.match.bool.test(i) ? Ee && Te || !Se.test(i) ? t[n] = !1 : t[st.camelCase("default-" + i)] = t[n] = !1 : st.attr(t, i, ""), t.removeAttribute(Te ? i : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!it.radioValue && "radio" === e && st.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), Ce = {
            set: function(t, e, i) {
                return e === !1 ? st.removeAttr(t, i) : Ee && Te || !Se.test(i) ? t.setAttribute(!Te && st.propFix[i] || i, i) : t[st.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, st.each(st.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = _e[e] || st.find.attr;
            _e[e] = Ee && Te || !Se.test(e) ? function(t, e, n) {
                var s, o;
                return n || (o = _e[e], _e[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, _e[e] = o), s
            } : function(t, e, i) {
                return i ? void 0 : t[st.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Ee && Te || (st.attrHooks.value = {
            set: function(t, e, i) {
                return st.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, i)
            }
        }), Te || (xe = {
            set: function(t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
            }
        }, _e.id = _e.name = _e.coords = function(t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, st.valHooks.button = {
            get: function(t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            },
            set: xe.set
        }, st.attrHooks.contenteditable = {
            set: function(t, e, i) {
                xe.set(t, "" === e ? !1 : e, i)
            }
        }, st.each(["width", "height"], function(t, e) {
            st.attrHooks[e] = {
                set: function(t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }
            }
        })), it.style || (st.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var ke = /^(?:input|select|textarea|button|object)$/i,
            Ae = /^(?:a|area)$/i;
        st.fn.extend({
            prop: function(t, e) {
                return It(this, st.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = st.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), st.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, i) {
                var n, s, o, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? (o = 1 !== r || !st.isXMLDoc(t), o && (e = st.propFix[e] || e, s = st.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = st.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ke.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), it.hrefNormalized || st.each(["href", "src"], function(t, e) {
            st.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), it.optSelected || (st.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            st.propFix[this.toLowerCase()] = this
        }), it.enctype || (st.propFix.enctype = "encoding");
        var Ie = /[\t\r\n\f]/g;
        st.fn.extend({
            addClass: function(t) {
                var e, i, n, s, o, r, a = 0,
                    l = this.length,
                    c = "string" == typeof t && t;
                if (st.isFunction(t)) return this.each(function(e) {
                    st(this).addClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ie, " ") : " ")) {
                            for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            r = st.trim(n), i.className !== r && (i.className = r)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, s, o, r, a = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof t && t;
                if (st.isFunction(t)) return this.each(function(e) {
                    st(this).removeClass(t.call(this, e, this.className))
                });
                if (c)
                    for (e = (t || "").match(bt) || []; l > a; a++)
                        if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ie, " ") : "")) {
                            for (o = 0; s = e[o++];)
                                for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                            r = t ? st.trim(n) : "", i.className !== r && (i.className = r)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(st.isFunction(t) ? function(i) {
                    st(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function() {
                    if ("string" === i)
                        for (var e, n = 0, s = st(this), o = t.match(bt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(i === _t || "boolean" === i) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : st._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ie, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            st.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), st.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var Le = st.now(),
            Pe = /\?/,
            Me = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        st.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i, n = null,
                s = st.trim(e + "");
            return s && !st.trim(s.replace(Me, function(t, e, s, o) {
                return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
            })) ? Function("return " + s)() : st.error("Invalid JSON: " + e)
        }, st.parseXML = function(e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
            } catch (s) {
                i = void 0
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e), i
        };
        var De, ze, Ne = /#.*$/,
            Oe = /([?&])_=[^&]*/,
            Be = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Re = /^(?:GET|HEAD)$/,
            Fe = /^\/\//,
            He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            We = {},
            qe = {},
            $e = "*/".concat("*");
        try {
            ze = location.href
        } catch (Ue) {
            ze = ft.createElement("a"), ze.href = "", ze = ze.href
        }
        De = He.exec(ze.toLowerCase()) || [], st.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ze,
                type: "GET",
                isLocal: je.test(De[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": st.parseJSON,
                    "text xml": st.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? H(H(t, st.ajaxSettings), e) : H(st.ajaxSettings, t)
            },
            ajaxPrefilter: R(We),
            ajaxTransport: R(qe),
            ajax: function(t, e) {
                function i(t, e, i, n) {
                    var s, u, v, y, w, C = e;
                    2 !== b && (b = 2, a && clearTimeout(a), c = void 0, r = n || "", x.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = W(h, x, i)), y = q(h, y, x, s), s ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (st.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (st.etag[o] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, s = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || C) + "", s ? f.resolveWith(d, [u, C, x]) : f.rejectWith(d, [x, C, v]), x.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [x, h, s ? u : v]), m.fireWith(d, [x, C]), l && (p.trigger("ajaxComplete", [x, h]), --st.active || st.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, s, o, r, a, l, c, u, h = st.ajaxSetup({}, e),
                    d = h.context || h,
                    p = h.context && (d.nodeType || d.jquery) ? st(d) : st.event,
                    f = st.Deferred(),
                    m = st.Callbacks("once memory"),
                    g = h.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; e = Be.exec(r);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return b || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || ze) + "").replace(Ne, "").replace(Fe, De[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = st.trim(h.dataType || "*").toLowerCase().match(bt) || [""], null == h.crossDomain && (n = He.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === De[1] && n[2] === De[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (De[3] || ("http:" === De[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = st.param(h.data, h.traditional)), F(We, h, e, x), 2 === b) return x;
                l = st.event && h.global, l && 0 === st.active++ && st.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Re.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (Pe.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Oe.test(o) ? o.replace(Oe, "$1_=" + Le++) : o + (Pe.test(o) ? "&" : "?") + "_=" + Le++)), h.ifModified && (st.lastModified[o] && x.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && x.setRequestHeader("If-None-Match", st.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : h.accepts["*"]);
                for (s in h.headers) x.setRequestHeader(s, h.headers[s]);
                if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (s in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[s](h[s]);
                if (c = F(qe, h, e, x)) {
                    x.readyState = 1, l && p.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                        x.abort("timeout")
                    }, h.timeout));
                    try {
                        b = 1, c.send(v, i)
                    } catch (C) {
                        if (!(2 > b)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, i) {
                return st.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return st.get(t, void 0, e, "script")
            }
        }), st.each(["get", "post"], function(t, e) {
            st[e] = function(t, i, n, s) {
                return st.isFunction(i) && (s = s || n, n = i, i = void 0), st.ajax({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                })
            }
        }), st._evalUrl = function(t) {
            return st.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, st.fn.extend({
            wrapAll: function(t) {
                if (st.isFunction(t)) return this.each(function(e) {
                    st(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(st.isFunction(t) ? function(e) {
                    st(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = st(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = st.isFunction(t);
                return this.each(function(i) {
                    st(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
                }).end()
            }
        }), st.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || st.css(t, "display"))
        }, st.expr.filters.visible = function(t) {
            return !st.expr.filters.hidden(t)
        };
        var Ge = /%20/g,
            Qe = /\[\]$/,
            Ye = /\r?\n/g,
            Xe = /^(?:submit|button|image|reset|file)$/i,
            Ve = /^(?:input|select|textarea|keygen)/i;
        st.param = function(t, e) {
            var i, n = [],
                s = function(t, e) {
                    e = st.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (i in t) $(i, t[i], e, s);
            return n.join("&").replace(Ge, "+")
        }, st.fn.extend({
            serialize: function() {
                return st.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = st.prop(this, "elements");
                    return t ? st.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !st(this).is(":disabled") && Ve.test(this.nodeName) && !Xe.test(t) && (this.checked || !Lt.test(t))
                }).map(function(t, e) {
                    var i = st(this).val();
                    return null == i ? null : st.isArray(i) ? st.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ye, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ye, "\r\n")
                    }
                }).get()
            }
        }), st.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || G()
        } : U;
        var Ke = 0,
            Je = {},
            Ze = st.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Je) Je[t](void 0, !0)
        }), it.cors = !!Ze && "withCredentials" in Ze, Ze = it.ajax = !!Ze, Ze && st.ajaxTransport(function(t) {
            if (!t.crossDomain || it.cors) {
                var e;
                return {
                    send: function(i, n) {
                        var s, o = t.xhr(),
                            r = ++Ke;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (s in t.xhrFields) o[s] = t.xhrFields[s];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                        o.send(t.hasContent && t.data || null), e = function(i, s) {
                            var a, l, c;
                            if (e && (s || 4 === o.readyState))
                                if (delete Je[r], e = void 0, o.onreadystatechange = st.noop, s) 4 !== o.readyState && o.abort();
                                else {
                                    c = {}, a = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (u) {
                                        l = ""
                                    }
                                    a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                                }
                            c && n(a, l, c, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[r] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), st.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return st.globalEval(t), t
                }
            }
        }), st.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), st.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i = ft.head || st("head")[0] || ft.documentElement;
                return {
                    send: function(n, s) {
                        e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                        }, i.insertBefore(e, i.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var ti = [],
            ei = /(=)\?(?=&|$)|\?\?/;
        st.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ti.pop() || st.expando + "_" + Le++;
                return this[t] = !0, t
            }
        }), st.ajaxPrefilter("json jsonp", function(e, i, n) {
            var s, o, r, a = e.jsonp !== !1 && (ei.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ei, "$1" + s) : e.jsonp !== !1 && (e.url += (Pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
                return r || st.error(s + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
                r = arguments
            }, n.always(function() {
                t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, ti.push(s)), r && st.isFunction(o) && o(r[0]), r = o = void 0
            }), "script") : void 0
        }), st.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || ft;
            var n = ht.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = st.buildFragment([t], e, s), s && s.length && st(s).remove(), st.merge([], n.childNodes))
        };
        var ii = st.fn.load;
        st.fn.load = function(t, e, i) {
            if ("string" != typeof t && ii) return ii.apply(this, arguments);
            var n, s, o, r = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = st.trim(t.slice(a, t.length)), t = t.slice(0, a)), st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && st.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, r.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                r.each(i, s || [t.responseText, e, t])
            }), this
        }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            st.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), st.expr.filters.animated = function(t) {
            return st.grep(st.timers, function(e) {
                return t === e.elem
            }).length
        };
        var ni = t.document.documentElement;
        st.offset = {
            setOffset: function(t, e, i) {
                var n, s, o, r, a, l, c, u = st.css(t, "position"),
                    h = st(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), o = st.css(t, "top"), l = st.css(t, "left"), c = ("absolute" === u || "fixed" === u) && st.inArray("auto", [o, l]) > -1, c ? (n = h.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : h.css(d)
            }
        }, st.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    st.offset.setOffset(this, t, e)
                });
                var e, i, n = {
                        top: 0,
                        left: 0
                    },
                    s = this[0],
                    o = s && s.ownerDocument;
                return o ? (e = o.documentElement, st.contains(e, s) ? (typeof s.getBoundingClientRect !== _t && (n = s.getBoundingClientRect()), i = Q(o), {
                    top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : n) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = {
                            top: 0,
                            left: 0
                        },
                        n = this[0];
                    return "fixed" === st.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (i = t.offset()), i.top += st.css(t[0], "borderTopWidth", !0), i.left += st.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - st.css(n, "marginTop", !0),
                        left: e.left - i.left - st.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || ni; t && !st.nodeName(t, "html") && "static" === st.css(t, "position");) t = t.offsetParent;
                    return t || ni
                })
            }
        }), st.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = /Y/.test(e);
            st.fn[t] = function(n) {
                return It(this, function(t, n, s) {
                    var o = Q(t);
                    return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? st(o).scrollLeft() : s, i ? s : st(o).scrollTop()) : t[n] = s)
                }, t, n, arguments.length, null)
            }
        }), st.each(["top", "left"], function(t, e) {
            st.cssHooks[e] = E(it.pixelPosition, function(t, i) {
                return i ? (i = ee(t, e), ne.test(i) ? st(t).position()[e] + "px" : i) : void 0
            })
        }), st.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            st.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                st.fn[n] = function(n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        r = i || (n === !0 || s === !0 ? "margin" : "border");
                    return It(this, function(e, i, n) {
                        var s;
                        return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? st.css(e, i, r) : st.style(e, i, n, r)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), st.fn.size = function() {
            return this.length
        }, st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return st
        });
        var si = t.jQuery,
            oi = t.$;
        return st.noConflict = function(e) {
            return t.$ === st && (t.$ = oi), e && t.jQuery === st && (t.jQuery = si), st
        }, typeof e === _t && (t.jQuery = t.$ = st), st
    }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, s) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
        },
        easeInQuad: function(t, e, i, n, s) {
            return n * (e /= s) * e + i
        },
        easeOutQuad: function(t, e, i, n, s) {
            return -n * (e /= s) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, s) {
            return n * (e /= s) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, s) {
            return -n * ((e = e / s - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, s) {
            return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, s) {
            return n * Math.sin(e / s * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
        },
        easeInExpo: function(t, e, i, n, s) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, s) {
            return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, s) {
            return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, s) {
            return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (r || (r = .3 * s), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / r)) + i
        },
        easeOutElastic: function(t, e, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (r || (r = .3 * s), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * s - o) * (2 * Math.PI) / r) + n + i
        },
        easeInOutElastic: function(t, e, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (r || (r = s * (.3 * 1.5)), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return 1 > e ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / r)) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / r) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function(t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), (e /= s / 2) < 1 ? n / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function(t, e, i, n, s) {
            return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
        },
        easeOutBounce: function(t, e, i, n, s) {
            return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, s) {
            return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
        }
    }), ! function(t) {
        "use strict";
        t.fn.fitVids = function(e) {
            var i = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var n = document.head || document.getElementsByTagName("head")[0],
                    s = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    o = document.createElement("div");
                o.innerHTML = '<p>x</p><style id="fit-vids-style">' + s + "</style>", n.appendChild(o.childNodes[1])
            }
            return e && t.extend(i, e), this.each(function() {
                var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var n = ".fitvidsignore";
                i.ignore && (n = n + ", " + i.ignore);
                var s = t(this).find(e.join(","));
                s = s.not("object object"), s = s.not(n), s.each(function(e) {
                    var i = t(this);
                    if (!(i.parents(n).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                        i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                        var s = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                            o = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
                            r = s / o;
                        if (!i.attr("id")) {
                            var a = "fitvid" + e;
                            i.attr("id", a)
                        }
                        i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"), i.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto), ! function(t, e) {
        "use strict";
        var i = function() {
            var i = {
                    bcClass: "sf-breadcrumb",
                    menuClass: "sf-js-enabled",
                    anchorClass: "sf-with-ul",
                    menuArrowClass: "sf-arrows"
                },
                n = function() {
                    var e = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                    return e && t("html").css("cursor", "pointer").on("click", t.noop), e
                }(),
                s = function() {
                    var t = document.documentElement.style;
                    return "behavior" in t && "fill" in t && /iemobile/i.test(navigator.userAgent)
                }(),
                o = function() {
                    return !!e.PointerEvent
                }(),
                r = function(t, e) {
                    var n = i.menuClass;
                    e.cssArrows && (n += " " + i.menuArrowClass), t.toggleClass(n)
                },
                a = function(e, n) {
                    return e.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + i.bcClass).filter(function() {
                        return t(this).children(n.popUpSelector).hide().show().length
                    }).removeClass(n.pathClass)
                },
                l = function(t) {
                    t.children("a").toggleClass(i.anchorClass)
                },
                c = function(t) {
                    var e = t.css("ms-touch-action"),
                        i = t.css("touch-action");
                    i = i || e, i = "pan-y" === i ? "auto" : "pan-y", t.css({
                        "ms-touch-action": i,
                        "touch-action": i
                    })
                },
                u = function(t) {
                    return t.closest("." + i.menuClass)
                },
                h = function(t) {
                    return u(t).data("sf-options")
                },
                d = function() {
                    var e = t(this),
                        i = h(e);
                    clearTimeout(i.sfTimer), e.siblings().superfish("hide").end().superfish("show")
                },
                p = function(e) {
                    e.retainPath = t.inArray(this[0], e.$path) > -1, this.superfish("hide"), this.parents("." + e.hoverClass).length || (e.onIdle.call(u(this)), e.$path.length && t.proxy(d, e.$path)())
                },
                f = function() {
                    var e = t(this),
                        i = h(e);
                    n ? t.proxy(p, e, i)() : (clearTimeout(i.sfTimer), i.sfTimer = setTimeout(t.proxy(p, e, i), i.delay))
                },
                m = function(e) {
                    var i = t(this),
                        n = h(i),
                        s = i.siblings(e.data.popUpSelector);
                    return n.onHandleTouch.call(s) === !1 ? this : void(s.length > 0 && s.is(":hidden") && (i.one("click.superfish", !1), "MSPointerDown" === e.type || "pointerdown" === e.type ? i.trigger("focus") : t.proxy(d, i.parent("li"))()))
                },
                g = function(e, i) {
                    var r = "li:has(" + i.popUpSelector + ")";
                    t.fn.hoverIntent && !i.disableHI ? e.hoverIntent(d, f, r) : e.on("mouseenter.superfish", r, d).on("mouseleave.superfish", r, f);
                    var a = "MSPointerDown.superfish";
                    o && (a = "pointerdown.superfish"), n || (a += " touchend.superfish"), s && (a += " mousedown.superfish"), e.on("focusin.superfish", "li", d).on("focusout.superfish", "li", f).on(a, "a", i, m)
                };
            return {
                hide: function(e) {
                    if (this.length) {
                        var i = this,
                            n = h(i);
                        if (!n) return this;
                        var s = n.retainPath === !0 ? n.$path : "",
                            o = i.find("li." + n.hoverClass).add(this).not(s).removeClass(n.hoverClass).children(n.popUpSelector),
                            r = n.speedOut;
                        if (e && (o.show(), r = 0), n.retainPath = !1, n.onBeforeHide.call(o) === !1) return this;
                        o.stop(!0, !0).animate(n.animationOut, r, function() {
                            var e = t(this);
                            n.onHide.call(e)
                        })
                    }
                    return this
                },
                show: function() {
                    var t = h(this);
                    if (!t) return this;
                    var e = this.addClass(t.hoverClass),
                        i = e.children(t.popUpSelector);
                    return t.onBeforeShow.call(i) === !1 ? this : (i.stop(!0, !0).animate(t.animation, t.speed, function() {
                        t.onShow.call(i)
                    }), this)
                },
                destroy: function() {
                    return this.each(function() {
                        var e, n = t(this),
                            s = n.data("sf-options");
                        return s ? (e = n.find(s.popUpSelector).parent("li"), clearTimeout(s.sfTimer), r(n, s), l(e), c(n), n.off(".superfish").off(".hoverIntent"), e.children(s.popUpSelector).attr("style", function(t, e) {
                            return e.replace(/display[^;]+;?/g, "")
                        }), s.$path.removeClass(s.hoverClass + " " + i.bcClass).addClass(s.pathClass), n.find("." + s.hoverClass).removeClass(s.hoverClass), s.onDestroy.call(n), void n.removeData("sf-options")) : !1
                    })
                },
                init: function(e) {
                    return this.each(function() {
                        var n = t(this);
                        if (n.data("sf-options")) return !1;
                        var s = t.extend({}, t.fn.superfish.defaults, e),
                            o = n.find(s.popUpSelector).parent("li");
                        s.$path = a(n, s), n.data("sf-options", s), r(n, s), l(o), c(n), g(n, s), o.not("." + i.bcClass).superfish("hide", !0), s.onInit.call(this)
                    })
                }
            }
        }();
        t.fn.superfish = function(e, n) {
            return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? t.error("Method " + e + " does not exist on jQuery.fn.superfish") : i.init.apply(this, arguments)
        }, t.fn.superfish.defaults = {
            popUpSelector: "ul,.sf-mega",
            hoverClass: "sfHover",
            pathClass: "overrideThisToUse",
            pathLevels: 1,
            delay: 800,
            animation: {
                opacity: "show"
            },
            animationOut: {
                opacity: "hide"
            },
            speed: "normal",
            speedOut: "fast",
            cssArrows: !0,
            disableHI: !1,
            onInit: t.noop,
            onBeforeShow: t.noop,
            onShow: t.noop,
            onBeforeHide: t.noop,
            onHide: t.noop,
            onIdle: t.noop,
            onDestroy: t.noop,
            onHandleTouch: t.noop
        }
    }(jQuery, window), function(t) {
        t.fn.hoverIntent = function(e, i, n) {
            var s = {
                interval: 100,
                sensitivity: 7,
                timeout: 0
            };
            s = "object" == typeof e ? t.extend(s, e) : t.isFunction(i) ? t.extend(s, {
                over: e,
                out: i,
                selector: n
            }) : t.extend(s, {
                over: e,
                out: e,
                selector: i
            });
            var o, r, a, l, c = function(t) {
                    o = t.pageX, r = t.pageY
                },
                u = function(e, i) {
                    return i.hoverIntent_t = clearTimeout(i.hoverIntent_t), Math.abs(a - o) + Math.abs(l - r) < s.sensitivity ? (t(i).off("mousemove.hoverIntent", c), i.hoverIntent_s = 1, s.over.apply(i, [e])) : (a = o, l = r, i.hoverIntent_t = setTimeout(function() {
                        u(e, i)
                    }, s.interval), void 0)
                },
                h = function(t, e) {
                    return e.hoverIntent_t = clearTimeout(e.hoverIntent_t), e.hoverIntent_s = 0, s.out.apply(e, [t])
                },
                d = function(e) {
                    var i = jQuery.extend({}, e),
                        n = this;
                    n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)), "mouseenter" == e.type ? (a = i.pageX, l = i.pageY, t(n).on("mousemove.hoverIntent", c), 1 != n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                        u(i, n)
                    }, s.interval))) : (t(n).off("mousemove.hoverIntent", c), 1 == n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                        h(i, n)
                    }, s.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": d,
                "mouseleave.hoverIntent": d
            }, s.selector)
        }
    }(jQuery), ! function(t, e, i) {
        "object" == typeof module && module && "object" == typeof module.exports ? module.exports = i : (t[e] = i, "function" == typeof define && define.amd && define(e, [], function() {
            return i
        }))
    }(this, "jRespond", function(t, e, i) {
        "use strict";
        return function(t) {
            var e = [],
                n = [],
                s = t,
                o = "",
                r = "",
                a = 0,
                l = 100,
                c = 500,
                u = c,
                h = function() {
                    var t = 0;
                    return t = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
                },
                d = function(t) {
                    if (t.length === i) p(t);
                    else
                        for (var e = 0; e < t.length; e++) p(t[e])
                },
                p = function(t) {
                    var s = t.breakpoint,
                        a = t.enter || i;
                    e.push(t), n.push(!1), g(s) && (a !== i && a.call(null, {
                        entering: o,
                        exiting: r
                    }), n[e.length - 1] = !0)
                },
                f = function() {
                    for (var t = [], s = [], a = 0; a < e.length; a++) {
                        var l = e[a].breakpoint,
                            c = e[a].enter || i,
                            u = e[a].exit || i;
                        "*" === l ? (c !== i && t.push(c), u !== i && s.push(u)) : g(l) ? (c === i || n[a] || t.push(c), n[a] = !0) : (u !== i && n[a] && s.push(u), n[a] = !1)
                    }
                    for (var h = {
                            entering: o,
                            exiting: r
                        }, d = 0; d < s.length; d++) s[d].call(null, h);
                    for (var p = 0; p < t.length; p++) t[p].call(null, h)
                },
                m = function(t) {
                    for (var e = !1, i = 0; i < s.length; i++)
                        if (t >= s[i].enter && t <= s[i].exit) {
                            e = !0;
                            break
                        }
                    e && o !== s[i].label ? (r = o, o = s[i].label, f()) : e || "" === o || (o = "", f())
                },
                g = function(t) {
                    if ("object" == typeof t) {
                        if (t.join().indexOf(o) >= 0) return !0
                    } else {
                        if ("*" === t) return !0;
                        if ("string" == typeof t && o === t) return !0
                    }
                },
                v = function() {
                    var t = h();
                    t !== a ? (u = l, m(t)) : u = c, a = t, setTimeout(v, u)
                };
            return v(), {
                addFunc: function(t) {
                    d(t)
                },
                getBreakpoint: function() {
                    return o
                }
            }
        }
    }(this, this.document)), -1 === navigator.platform.toUpperCase().indexOf("MAC") && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini|BlackBerry)/) && jQuery(window).width() > 991 && !jQuery("body").hasClass("no-smooth-scroll")) {
    var ssc_framerate = 150,
        ssc_animtime = 500,
        ssc_stepsize = 150,
        ssc_pulseAlgorithm = !0,
        ssc_pulseScale = 6,
        ssc_pulseNormalize = 1,
        ssc_keyboardsupport = !0,
        ssc_arrowscroll = 50,
        ssc_frame = !1,
        ssc_direction = {
            x: 0,
            y: 0
        },
        ssc_initdone = !1,
        ssc_fixedback = !0,
        ssc_root = document.documentElement,
        ssc_activeElement, ssc_key = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        ssc_que = [],
        ssc_pending = !1,
        ssc_cache = {};
    setInterval(function() {
        ssc_cache = {}
    }, 1e4);
    var ssc_uniqueID = function() {
            var t = 0;
            return function(e) {
                return e.ssc_uniqueID || (e.ssc_uniqueID = t++)
            }
        }(),
        ischrome = /chrome/.test(navigator.userAgent.toLowerCase());
    ischrome && (ssc_addEvent("mousedown", ssc_mousedown), ssc_addEvent("mousewheel", ssc_wheel), ssc_addEvent("load", ssc_init))
}
if (! function(t) {
        var e = 0;
        t.fn.scrolled = function(i, n) {
            "function" == typeof i && (n = i, i = 300);
            var s = "scrollTimer" + e++;
            this.scroll(function() {
                var e = t(this),
                    o = e.data(s);
                o && clearTimeout(o), o = setTimeout(function() {
                    e.removeData(s), n.call(e[0])
                }, i), e.data(s, o)
            })
        }
    }(jQuery), function(t) {
        t.fn.jflickrfeed = function(e, i) {
            e = t.extend(!0, {
                flickrbase: "http://api.flickr.com/services/feeds/",
                feedapi: "photos_public.gne",
                limit: 20,
                qstrings: {
                    lang: "en-us",
                    format: "json",
                    jsoncallback: "?"
                },
                cleanDescription: !0,
                useTemplate: !0,
                itemTemplate: "",
                itemCallback: function() {}
            }, e);
            var n = e.flickrbase + e.feedapi + "?",
                s = !0;
            for (var o in e.qstrings) s || (n += "&"), n += o + "=" + e.qstrings[o], s = !1;
            return t(this).each(function() {
                var s = t(this),
                    o = this;
                t.getJSON(n, function(n) {
                    t.each(n.items, function(t, i) {
                        if (t < e.limit) {
                            if (e.cleanDescription) {
                                var n = /<p>(.*?)<\/p>/g,
                                    r = i.description;
                                n.test(r) && (i.description = r.match(n)[2], void 0 != i.description && (i.description = i.description.replace("<p>", "").replace("</p>", "")))
                            }
                            if (i.image_s = i.media.m.replace("_m", "_s"), i.image_t = i.media.m.replace("_m", "_t"), i.image_m = i.media.m.replace("_m", "_m"), i.image = i.media.m.replace("_m", ""), i.image_b = i.media.m.replace("_m", "_b"), delete i.media, e.useTemplate) {
                                var a = e.itemTemplate;
                                for (var l in i) {
                                    var c = new RegExp("{{" + l + "}}", "g");
                                    a = a.replace(c, i[l])
                                }
                                s.append(a)
                            }
                            e.itemCallback.call(o, i)
                        }
                    }), t.isFunction(i) && i.call(o, n)
                })
            })
        }
    }(jQuery), function() {
        var t;
        t = function() {
                function t(t, e) {
                    var i, n;
                    if (this.options = {
                            target: "instafeed",
                            get: "popular",
                            resolution: "thumbnail",
                            sortBy: "none",
                            links: !0,
                            mock: !1,
                            useHttp: !1
                        }, "object" == typeof t)
                        for (i in t) n = t[i], this.options[i] = n;
                    this.context = null != e ? e : this, this.unique = this._genKey()
                }
                return t.prototype.hasNext = function() {
                    return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
                }, t.prototype.next = function() {
                    return this.hasNext() ? this.run(this.context.nextUrl) : !1
                }, t.prototype.run = function(e) {
                    var i, n, s;
                    if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                    if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                    return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (s = document.createElement("script"), s.id = "instafeed-fetcher", s.src = e || this._buildUrl(), i = document.getElementsByTagName("head"), i[0].appendChild(s), n = "instafeedCache" + this.unique, window[n] = new t(this.options, this), window[n].unique = this.unique), !0
                }, t.prototype.parse = function(t) {
                    var e, i, n, s, o, r, a, l, c, u, h, d, p, f, m, g, v, y, b, w, x, C, _, S, T, E, k, A, I, L, P, M, D;
                    if ("object" != typeof t) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                        throw new Error("Invalid JSON response")
                    }
                    if (200 !== t.meta.code) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
                        throw new Error("Error from Instagram: " + t.meta.error_message)
                    }
                    if (0 === t.data.length) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                        throw new Error("No images were returned from Instagram")
                    }
                    if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (P = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), L = "least" === P[0] ? !0 : !1, P[1]) {
                        case "random":
                            t.data.sort(function() {
                                return .5 - Math.random()
                            });
                            break;
                        case "recent":
                            t.data = this._sortBy(t.data, "created_time", L);
                            break;
                        case "liked":
                            t.data = this._sortBy(t.data, "likes.count", L);
                            break;
                        case "commented":
                            t.data = this._sortBy(t.data, "comments.count", L);
                            break;
                        default:
                            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                    }
                    if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                        if (g = t.data, I = parseInt(this.options.limit, 10), null != this.options.limit && g.length > I && (g = g.slice(0, I)), a = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (g = this._filter(g, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                            for (c = "", f = "", w = "", D = document.createElement("div"), h = 0, T = g.length; T > h; h++) {
                                if (d = g[h], p = d.images[this.options.resolution], "object" != typeof p) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
                                x = p.width, y = p.height, b = "square", x > y && (b = "landscape"), y > x && (b = "portrait"), m = p.url, u = window.location.protocol.indexOf("http") >= 0, u && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), f = this._makeTemplate(this.options.template, {
                                    model: d,
                                    id: d.id,
                                    link: d.link,
                                    type: d.type,
                                    image: m,
                                    width: x,
                                    height: y,
                                    orientation: b,
                                    caption: this._getObjectProperty(d, "caption.text"),
                                    likes: d.likes.count,
                                    comments: d.comments.count,
                                    location: this._getObjectProperty(d, "location.name")
                                }), c += f
                            }
                            for (D.innerHTML = c, s = [], n = 0, i = D.childNodes.length; i > n;) s.push(D.childNodes[n]), n += 1;
                            for (_ = 0, E = s.length; E > _; _++) A = s[_], a.appendChild(A)
                        } else
                            for (S = 0, k = g.length; k > S; S++) {
                                if (d = g[S], v = document.createElement("img"), p = d.images[this.options.resolution], "object" != typeof p) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
                                m = p.url, u = window.location.protocol.indexOf("http") >= 0, u && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), v.src = m, this.options.links === !0 ? (e = document.createElement("a"), e.href = d.link, e.appendChild(v), a.appendChild(e)) : a.appendChild(v)
                            }
                        if (M = this.options.target, "string" == typeof M && (M = document.getElementById(M)), null == M) throw r = 'No element with id="' + this.options.target + '" on page.', new Error(r);
                        M.appendChild(a), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), C = "instafeedCache" + this.unique, window[C] = void 0;
                        try {
                            delete window[C]
                        } catch (z) {
                            o = z
                        }
                    }
                    return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
                }, t.prototype._buildUrl = function() {
                    var t, e, i;
                    switch (t = "https://api.instagram.com/v1", this.options.get) {
                        case "popular":
                            e = "media/popular";
                            break;
                        case "tagged":
                            if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                            e = "tags/" + this.options.tagName + "/media/recent";
                            break;
                        case "location":
                            if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                            e = "locations/" + this.options.locationId + "/media/recent";
                            break;
                        case "user":
                            if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                            e = "users/" + this.options.userId + "/media/recent";
                            break;
                        default:
                            throw new Error("Invalid option for get: '" + this.options.get + "'.")
                    }
                    return i = t + "/" + e, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse"
                }, t.prototype._genKey = function() {
                    var t;
                    return t = function() {
                        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                    }, "" + t() + t() + t() + t()
                }, t.prototype._makeTemplate = function(t, e) {
                    var i, n, s, o, r;
                    for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = t; n.test(i);) o = i.match(n)[1], r = null != (s = this._getObjectProperty(e, o)) ? s : "", i = i.replace(n, function() {
                        return "" + r
                    });
                    return i
                }, t.prototype._getObjectProperty = function(t, e) {
                    var i, n;
                    for (e = e.replace(/\[(\w+)\]/g, ".$1"), n = e.split("."); n.length;) {
                        if (i = n.shift(), !(null != t && i in t)) return null;
                        t = t[i]
                    }
                    return t
                }, t.prototype._sortBy = function(t, e, i) {
                    var n;
                    return n = function(t, n) {
                        var s, o;
                        return s = this._getObjectProperty(t, e), o = this._getObjectProperty(n, e), i ? s > o ? 1 : -1 : o > s ? 1 : -1
                    }, t.sort(n.bind(this)), t
                }, t.prototype._filter = function(t, e) {
                    var i, n, s, o, r;
                    for (i = [], n = function(t) {
                            return e(t) ? i.push(t) : void 0
                        }, s = 0, r = t.length; r > s; s++) o = t[s], n(o);
                    return i
                }, t
            }(),
            function(t, e) {
                return "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Instafeed = e()
            }(this, function() {
                return t
            })
    }.call(this), ! function(t, e, i, n) {
        "use strict";
        t.jribbble = {};
        var s = null,
            o = "https://api.dribbble.com/v1",
            r = ["animated", "attachments", "debuts", "playoffs", "rebounds", "teams"],
            a = {
                token: "Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",
                singular: function(t) {
                    return t.substr(0, t.length - 1)
                },
                idRequired: function(t) {
                    return "Jribbble: You have to provide a " + this.singular(t) + ' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g, t)
                },
                subResource: function(t) {
                    return "Jribbble: You have to provide a " + this.singular(t) + ' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g, t)
                },
                shotId: function(t) {
                    return "Jribbble: You have to provide a shot ID to get %@. ex: " + ' $.jribbble.shots("1234").%@()'.replace(/%@/g, t)
                },
                commentLikes: 'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'
            },
            l = function(t, e) {
                if (t && "object" != typeof t) return t;
                throw new Error(a.idRequired(e))
            },
            c = function(t) {
                var e = {};
                return t.forEach(function(t) {
                    e[t] = f.call(this, t)
                }.bind(this)), e
            },
            u = function(e) {
                var i = t.param(e);
                return i ? "?" + i : ""
            },
            h = function(t) {
                if (0 !== t.length) {
                    var e = t[0],
                        i = typeof e,
                        n = {};
                    if ("number" === i || "string" === i) {
                        var s = r.indexOf(e);
                        s > -1 ? n.list = e : n.resource = e
                    } else "object" === i && (n = e);
                    return n
                }
            },
            d = function() {
                var e = t.extend({}, t.Deferred()),
                    i = function() {
                        return this.methods = [], this.response = null, this.flushed = !1, this.add = function(t) {
                            this.flushed ? t(this.scope) : this.methods.push(t)
                        }, this.flush = function(t) {
                            if (!this.flushed) {
                                for (this.scope = t, this.flushed = !0; this.methods[0];) this.methods.shift()(t);
                                return t
                            }
                        }, this
                    };
                return e.queue = new i, e.url = o, e.get = function() {
                    return s ? (t.ajax({
                        type: "GET",
                        url: this.url,
                        beforeSend: function(t) {
                            t.setRequestHeader("Authorization", "Bearer " + s)
                        },
                        success: function(t) {
                            this.resolve(t)
                        }.bind(this),
                        error: function(t) {
                            this.reject(t)
                        }.bind(this)
                    }), this) : (console.error(a.token), !1)
                }, e
            },
            p = function(e) {
                return function(i) {
                    return t.extend(this, d()), this.queue.add(function(t) {
                        t.url += "/" + e + "/" + i
                    }), setTimeout(function() {
                        this.queue.flush(this).get()
                    }.bind(this)), this
                }
            },
            f = function(t) {
                return function(e) {
                    return this.queue.add(function(i) {
                        i.url += "/" + t + "/" + u(e || {})
                    }), this
                }
            };
        t.jribbble.shots = function(e, i) {
            var n = h([].slice.call(arguments)) || {},
                s = i || {},
                o = function(e) {
                    return function(i, n) {
                        var s = h([].slice.call(arguments)) || {},
                            o = n || {};
                        return this.queue.add(function(i) {
                            if (!i.shotId) throw new Error(a.shotId(e));
                            i.url += "/" + e + "/", s.resource && (i.url += s.resource, delete s.resource), i.url += u(t.extend(s, o))
                        }), this
                    }
                },
                r = function() {
                    return t.extend(this, d()), this.url += "/shots/", this.queue.add(function(e) {
                        n.resource && (e.shotId = n.resource, e.url += n.resource, delete n.resource), e.url += u(t.extend(n, s))
                    }), setTimeout(function() {
                        this.queue.flush(this).get()
                    }.bind(this)), this
                };
            return r.prototype.attachments = o("attachments"), r.prototype.buckets = o("buckets"), r.prototype.likes = o("likes"), r.prototype.projects = o("projects"), r.prototype.rebounds = o("rebounds"), r.prototype.comments = function(e, i) {
                var n = h([].slice.call(arguments)) || {},
                    s = i || {};
                return this.queue.add(function(e) {
                    if (!e.shotId) throw new Error(a.shotId("comments"));
                    e.url += "/comments/", n.resource && (e.commentId = n.resource, e.url += n.resource + "/", delete n.resource), e.url += u(t.extend(n, s))
                }), this.likes = function(t) {
                    var e = t || {};
                    return this.queue.add(function(t) {
                        if (!t.commentId) throw new Error(a.commentLikes);
                        t.url += "likes/" + u(e)
                    }), this
                }, this
            }, new r
        }, t.jribbble.teams = function(t) {
            var e = "teams",
                i = l(t, e),
                n = p.call(this, e);
            return n.prototype = c.call(this, ["members", "shots"]), new n(i)
        }, t.jribbble.users = function(t) {
            var e = "users",
                i = l(t, e),
                n = p.call(this, e);
            return n.prototype = c.call(this, ["buckets", "followers", "following", "likes", "projects", "shots", "teams"]), n.prototype.isFollowing = function(t) {
                return this.queue.add(function(e) {
                    e.url += "/following/" + t
                }), this
            }, new n(i)
        }, t.jribbble.buckets = function(t) {
            var e = "buckets",
                i = l(t, e),
                n = p.call(this, e);
            return n.prototype = c.call(this, ["shots"]), new n(i)
        }, t.jribbble.projects = function(t) {
            var e = "projects",
                i = l(t, e),
                n = p.call(this, e);
            return n.prototype = c.call(this, ["shots"]), new n(i)
        }, t.jribbble.setToken = function(t) {
            return s = t, this
        }
    }(jQuery, window, document), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
    }(function(t) {
        function e(t) {
            return a.raw ? t : encodeURIComponent(t)
        }

        function i(t) {
            return a.raw ? t : decodeURIComponent(t)
        }

        function n(t) {
            return e(a.json ? JSON.stringify(t) : String(t))
        }

        function s(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(r, " ")), a.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function o(e, i) {
            var n = a.raw ? e : s(e);
            return t.isFunction(i) ? i(n) : n
        }
        var r = /\+/g,
            a = t.cookie = function(s, r, l) {
                if (arguments.length > 1 && !t.isFunction(r)) {
                    if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setMilliseconds(u.getMilliseconds() + 864e5 * c)
                    }
                    return document.cookie = [e(s), "=", n(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var h = s ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], p = 0, f = d.length; f > p; p++) {
                    var m = d[p].split("="),
                        g = i(m.shift()),
                        v = m.join("=");
                    if (s === g) {
                        h = o(v, r);
                        break
                    }
                    s || void 0 === (v = o(v)) || (h[g] = v)
                }
                return h
            };
        a.defaults = {}, t.removeCookie = function(e, i) {
            return t.cookie(e, "", t.extend({}, i, {
                expires: -1
            })), !t.cookie(e)
        }
    }), ! function(t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function(t) {
            return e(t)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(this, function(t) {
        var e = function(t, e) {
                var i, n = document.createElement("canvas");
                t.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
                var s = n.getContext("2d");
                n.width = n.height = e.size;
                var o = 1;
                window.devicePixelRatio > 1 && (o = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * o, s.scale(o, o)), s.translate(e.size / 2, e.size / 2), s.rotate((-.5 + e.rotate / 180) * Math.PI);
                var r = (e.size - e.lineWidth) / 2;
                e.scaleColor && e.scaleLength && (r -= e.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var a = function(t, e, i) {
                        i = Math.min(Math.max(-1, i || 0), 1);
                        var n = 0 >= i ? !0 : !1;
                        s.beginPath(), s.arc(0, 0, r, 0, 2 * Math.PI * i, n), s.strokeStyle = t, s.lineWidth = e, s.stroke()
                    },
                    l = function() {
                        var t, i;
                        s.lineWidth = 1, s.fillStyle = e.scaleColor, s.save();
                        for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), s.fillRect(-e.size / 2 + t, 0, i, 1), s.rotate(Math.PI / 12);
                        s.restore()
                    },
                    c = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                            window.setTimeout(t, 1e3 / 60)
                        }
                    }(),
                    u = function() {
                        e.scaleColor && l(), e.trackColor && a(e.trackColor, e.trackWidth || e.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return n
                }, this.getCtx = function() {
                    return s
                }, this.clear = function() {
                    s.clearRect(e.size / -2, e.size / -2, e.size, e.size)
                }, this.draw = function(t) {
                    e.scaleColor || e.trackColor ? s.getImageData && s.putImageData ? i ? s.putImageData(i, 0, 0) : (u(), i = s.getImageData(0, 0, e.size * o, e.size * o)) : (this.clear(), u()) : this.clear(), s.lineCap = e.lineCap;
                    var n;
                    n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, a(n, e.lineWidth, t / 100)
                }.bind(this), this.animate = function(t, i) {
                    var n = Date.now();
                    e.onStart(t, i);
                    var s = function() {
                        var o = Math.min(Date.now() - n, e.animate.duration),
                            r = e.easing(this, o, t, i - t, e.animate.duration);
                        this.draw(r), e.onStep(t, i, r), o >= e.animate.duration ? e.onStop(t, i) : c(s)
                    }.bind(this);
                    c(s)
                }.bind(this)
            },
            i = function(t, i) {
                var n = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(t, e, i, n, s) {
                        return e /= s / 2, 1 > e ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
                    },
                    onStart: function(t, e) {},
                    onStep: function(t, e, i) {},
                    onStop: function(t, e) {}
                };
                if ("undefined" != typeof e) n.renderer = e;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer
                }
                var s = {},
                    o = 0,
                    r = function() {
                        this.el = t, this.options = s;
                        for (var e in n) n.hasOwnProperty(e) && (s[e] = i && "undefined" != typeof i[e] ? i[e] : n[e], "function" == typeof s[e] && (s[e] = s[e].bind(this)));
                        "string" == typeof s.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[s.easing]) ? s.easing = jQuery.easing[s.easing] : s.easing = n.easing, "number" == typeof s.animate && (s.animate = {
                            duration: s.animate,
                            enabled: !0
                        }), "boolean" != typeof s.animate || s.animate || (s.animate = {
                            duration: 1e3,
                            enabled: s.animate
                        }), this.renderer = new s.renderer(t, s), this.renderer.draw(o), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(t) {
                    return t = parseFloat(t), s.animate.enabled ? this.renderer.animate(o, t) : this.renderer.draw(t), o = t, this
                }.bind(this), this.disableAnimation = function() {
                    return s.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return s.animate.enabled = !0, this
                }, r()
            };
        t.fn.easyPieChart = function(e) {
            return this.each(function() {
                var n;
                t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n)))
            })
        }
    }), function(t) {
        t.fn.appear = function(e, i) {
            var n = t.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, i);
            return this.each(function() {
                var i = t(this);
                if (i.appeared = !1, !e) return void i.trigger("appear", n.data);
                var s = t(window),
                    o = function() {
                        if (!i.is(":visible")) return void(i.appeared = !1);
                        var t = s.scrollLeft(),
                            e = s.scrollTop(),
                            o = i.offset(),
                            r = o.left,
                            a = o.top,
                            l = n.accX,
                            c = n.accY,
                            u = i.height(),
                            h = s.height(),
                            d = i.width(),
                            p = s.width();
                        a + u + c >= e && e + h + c >= a && r + d + l >= t && t + p + l >= r ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
                    },
                    r = function() {
                        if (i.appeared = !0, n.one) {
                            s.unbind("scroll", o);
                            var r = t.inArray(o, t.fn.appear.checks);
                            r >= 0 && t.fn.appear.checks.splice(r, 1)
                        }
                        e.apply(this, arguments)
                    };
                n.one ? i.one("appear", n.data, r) : i.bind("appear", n.data, r), s.scroll(o), t.fn.appear.checks.push(o), o()
            })
        }, t.extend(t.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var e = t.fn.appear.checks.length;
                if (e > 0)
                    for (; e--;) t.fn.appear.checks[e]()
            },
            run: function() {
                t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
            }
        }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, i) {
            var n = t.fn[i];
            n && (t.fn[i] = function() {
                var e = n.apply(this, arguments);
                return t.fn.appear.run(), e
            })
        })
    }(jQuery), ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = "animsition",
            i = !1,
            n = {
                init: function(s) {
                    s = t.extend({
                        inClass: "fade-in",
                        outClass: "fade-out",
                        inDuration: 1500,
                        outDuration: 800,
                        linkElement: ".animsition-link",
                        loading: !0,
                        loadingParentElement: "body",
                        loadingClass: "animsition-loading",
                        loadingHtml: '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',
                        unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
                        overlay: !1,
                        overlayClass: "animsition-overlay-slide",
                        overlayParentElement: "body",
                        timeOut: !1
                    }, s);
                    var o = n.supportCheck.call(this, s);
                    if (!o && s.unSupportCss.length > 0 && (!o || !this.length)) return "console" in window || (window.console = {}, window.console.log = function(t) {
                        return t
                    }), this.length || console.log("Animsition: Element does not exist on page."), o || console.log("Animsition: Does not support this browser."), n.destroy.call(this);
                    var r = n.optionCheck.call(this, s);
                    return r && n.addOverlay.call(this, s), s.loading && n.addLoading.call(this, s), this.each(function() {
                        var o = this,
                            r = t(this),
                            a = t(window),
                            l = r.data(e);
                        l || (s = t.extend({}, s), r.data(e, {
                            options: s
                        }), a.on("load." + e + " pageshow." + e, function() {
                            0 == i && n.pageIn.call(o)
                        }), s.timeOut && !isNaN(s.timeOut) && setTimeout(function() {
                            0 == i && n.pageIn.call(o)
                        }, s.timeOut), a.on("unload." + e, function() {}), t(s.linkElement).on("click." + e, function(e) {
                            e.preventDefault();
                            var i = t(this),
                                s = i.attr("href");
                            2 === e.which || e.metaKey || e.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && e.ctrlKey ? window.open(s, "_blank") : n.pageOut.call(o, i, s)
                        }))
                    })
                },
                addOverlay: function(e) {
                    t(e.overlayParentElement).prepend('<div class="' + e.overlayClass + '"></div>')
                },
                addLoading: function(e) {
                    t(e.loadingParentElement).append('<div class="' + e.loadingClass + '">' + e.loadingHtml + "</div>")
                },
                removeLoading: function() {
                    var i = t(this),
                        n = i.data(e).options,
                        s = t(n.loadingParentElement).children("." + n.loadingClass);
                    s.fadeOut().remove()
                },
                supportCheck: function(e) {
                    var i = t(this),
                        n = e.unSupportCss,
                        s = n.length,
                        o = !1;
                    0 === s && (o = !0);
                    for (var r = 0; s > r; r++)
                        if ("string" == typeof i.css(n[r])) {
                            o = !0;
                            break
                        }
                    return o
                },
                optionCheck: function(e) {
                    var i, n = t(this);
                    return i = e.overlay || n.data("animsition-overlay") ? !0 : !1
                },
                animationCheck: function(i, n, s) {
                    var o = t(this),
                        r = o.data(e).options,
                        a = typeof i,
                        l = !n && "number" === a,
                        c = n && "string" === a && i.length > 0;
                    return l || c ? i = i : n && s ? i = r.inClass : !n && s ? i = r.inDuration : n && !s ? i = r.outClass : n || s || (i = r.outDuration), i
                },
                pageIn: function() {
                    var s = this,
                        o = t(this),
                        r = o.data(e).options,
                        a = o.data("animsition-in-duration"),
                        l = o.data("animsition-in"),
                        c = n.animationCheck.call(s, a, !1, !0),
                        u = n.animationCheck.call(s, l, !0, !0),
                        h = n.optionCheck.call(s, r);
                    r.loading && n.removeLoading.call(s), h ? n.pageInOverlay.call(s, u, c) : n.pageInBasic.call(s, u, c), i = !0
                },
                pageInBasic: function(e, i) {
                    var n = t(this);
                    n.trigger("animsition.start").css({
                        "animation-duration": i / 1e3 + "s"
                    }).addClass(e).animateCallback(function() {
                        n.removeClass(e).css({
                            opacity: 1
                        }).trigger("animsition.end")
                    })
                },
                pageInOverlay: function(i, n) {
                    var s = t(this),
                        o = s.data(e).options;
                    s.trigger("animsition.start").css({
                        opacity: 1
                    }), t(o.overlayParentElement).children("." + o.overlayClass).css({
                        "animation-duration": n / 1e3 + "s"
                    }).addClass(i).animateCallback(function() {
                        s.trigger("animsition.end")
                    })
                },
                pageOut: function(i, s) {
                    var o = this,
                        r = t(this),
                        a = r.data(e).options,
                        l = i.data("animsition-out"),
                        c = r.data("animsition-out"),
                        u = i.data("animsition-out-duration"),
                        h = r.data("animsition-out-duration"),
                        d = l ? l : c,
                        p = u ? u : h,
                        f = n.animationCheck.call(o, d, !0, !1),
                        m = n.animationCheck.call(o, p, !1, !1),
                        g = n.optionCheck.call(o, a);
                    g ? n.pageOutOverlay.call(o, f, m, s) : n.pageOutBasic.call(o, f, m, s)
                },
                pageOutBasic: function(e, i, n) {
                    var s = t(this);
                    s.css({
                        "animation-duration": i / 1e3 + "s"
                    }).addClass(e).animateCallback(function() {
                        location.href = n
                    })
                },
                pageOutOverlay: function(i, s, o) {
                    var r = this,
                        a = t(this),
                        l = a.data(e).options,
                        c = a.data("animsition-in"),
                        u = n.animationCheck.call(r, c, !0, !0);
                    t(l.overlayParentElement).children("." + l.overlayClass).css({
                        "animation-duration": s / 1e3 + "s"
                    }).removeClass(u).addClass(i).animateCallback(function() {
                        location.href = o
                    })
                },
                destroy: function() {
                    return this.each(function() {
                        var i = t(this);
                        t(window).unbind("." + e), i.css({
                            opacity: 1
                        }).removeData(e)
                    })
                }
            };
        t.fn.animateCallback = function(e) {
            var i = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
            return this.each(function() {
                t(this).bind(i, function() {
                    return t(this).unbind(i), e.call(this)
                })
            })
        }, t.fn.animsition = function(i) {
            return n[i] ? n[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery." + e) : n.init.apply(this, arguments)
        }
    }), function(t, e, i, n) {
        function s(e, i) {
            this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = o, this.init()
        }
        var o = "stellar",
            r = {
                scrollProperty: "scroll",
                positionProperty: "position",
                horizontalScrolling: !0,
                verticalScrolling: !0,
                horizontalOffset: 0,
                verticalOffset: 0,
                responsive: !1,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                hideDistantElements: !0,
                hideElement: function(t) {
                    t.hide()
                },
                showElement: function(t) {
                    t.show()
                }
            },
            a = {
                scroll: {
                    getLeft: function(t) {
                        return t.scrollLeft()
                    },
                    setLeft: function(t, e) {
                        t.scrollLeft(e)
                    },
                    getTop: function(t) {
                        return t.scrollTop()
                    },
                    setTop: function(t, e) {
                        t.scrollTop(e)
                    }
                },
                position: {
                    getLeft: function(t) {
                        return -1 * parseInt(t.css("left"), 10)
                    },
                    getTop: function(t) {
                        return -1 * parseInt(t.css("top"), 10)
                    }
                },
                margin: {
                    getLeft: function(t) {
                        return -1 * parseInt(t.css("margin-left"), 10)
                    },
                    getTop: function(t) {
                        return -1 * parseInt(t.css("margin-top"), 10)
                    }
                },
                transform: {
                    getLeft: function(t) {
                        var e = getComputedStyle(t[0])[u];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                    },
                    getTop: function(t) {
                        var e = getComputedStyle(t[0])[u];
                        return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                    }
                }
            },
            l = {
                position: {
                    setLeft: function(t, e) {
                        t.css("left", e)
                    },
                    setTop: function(t, e) {
                        t.css("top", e)
                    }
                },
                transform: {
                    setPosition: function(t, e, i, n, s) {
                        t[0].style[u] = "translate3d(" + (e - i) + "px, " + (n - s) + "px, 0)"
                    }
                }
            },
            c = function() {
                var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    n = t("script")[0].style,
                    s = "";
                for (e in n)
                    if (i.test(e)) {
                        s = e.match(i)[0];
                        break
                    }
                return "WebkitOpacity" in n && (s = "Webkit"), "KhtmlOpacity" in n && (s = "Khtml"),
                    function(t) {
                        return s + (s.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                    }
            }(),
            u = c("transform"),
            h = t("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== n,
            d = h ? function(t, e, i) {
                t.css({
                    "background-position-x": e,
                    "background-position-y": i
                })
            } : function(t, e, i) {
                t.css("background-position", e + " " + i)
            },
            p = h ? function(t) {
                return [t.css("background-position-x"), t.css("background-position-y")]
            } : function(t) {
                return t.css("background-position").split(" ")
            },
            f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            };
        s.prototype = {
            init: function() {
                this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                    firstLoad: !0
                }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            },
            _defineElements: function() {
                this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            },
            _defineGetters: function() {
                var t = this,
                    e = a[t.options.scrollProperty];
                this._getScrollLeft = function() {
                    return e.getLeft(t.$scrollElement)
                }, this._getScrollTop = function() {
                    return e.getTop(t.$scrollElement)
                }
            },
            _defineSetters: function() {
                var e = this,
                    i = a[e.options.scrollProperty],
                    n = l[e.options.positionProperty],
                    s = i.setLeft,
                    o = i.setTop;
                this._setScrollLeft = "function" == typeof s ? function(t) {
                    s(e.$scrollElement, t)
                } : t.noop, this._setScrollTop = "function" == typeof o ? function(t) {
                    o(e.$scrollElement, t)
                } : t.noop, this._setPosition = n.setPosition || function(t, i, s, o, r) {
                    e.options.horizontalScrolling && n.setLeft(t, i, s), e.options.verticalScrolling && n.setTop(t, o, r)
                }
            },
            _handleWindowLoadAndResize: function() {
                var i = this,
                    n = t(e);
                i.options.responsive && n.bind("load." + this.name, function() {
                    i.refresh()
                }), n.bind("resize." + this.name, function() {
                    i._detectViewport(), i.options.responsive && i.refresh()
                })
            },
            refresh: function(i) {
                var n = this,
                    s = n._getScrollLeft(),
                    o = n._getScrollTop();
                (!i || !i.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                    var t = n._getScrollLeft(),
                        e = n._getScrollTop();
                    n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
                }), this._setScrollLeft(s), this._setScrollTop(o)
            },
            _detectViewport: function() {
                var t = this.$viewportElement.offset(),
                    e = null !== t && t !== n;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            },
            _findParticles: function() {
                var e = this;
                this._getScrollLeft(), this._getScrollTop();
                if (this.particles !== n)
                    for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(i) {
                    var s, o, r, a, l, c, u, h, d, p = t(this),
                        f = 0,
                        m = 0,
                        g = 0,
                        v = 0;
                    if (p.data("stellar-elementIsActive")) {
                        if (p.data("stellar-elementIsActive") !== this) return
                    } else p.data("stellar-elementIsActive", this);
                    e.options.showElement(p), p.data("stellar-startingLeft") ? (p.css("left", p.data("stellar-startingLeft")), p.css("top", p.data("stellar-startingTop"))) : (p.data("stellar-startingLeft", p.css("left")), p.data("stellar-startingTop", p.css("top"))), r = p.position().left, a = p.position().top, l = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), c = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), h = p.offset().left - l, d = p.offset().top - c, p.parents().each(function() {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (f = g, m = v, u = e, !1) : (g += e.position().left, void(v += e.position().top))
                    }), s = p.data("stellar-horizontal-offset") !== n ? p.data("stellar-horizontal-offset") : u !== n && u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : e.horizontalOffset, o = p.data("stellar-vertical-offset") !== n ? p.data("stellar-vertical-offset") : u !== n && u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                        $element: p,
                        $offsetParent: u,
                        isFixed: "fixed" === p.css("position"),
                        horizontalOffset: s,
                        verticalOffset: o,
                        startingPositionLeft: r,
                        startingPositionTop: a,
                        startingOffsetLeft: h,
                        startingOffsetTop: d,
                        parentOffsetLeft: f,
                        parentOffsetTop: m,
                        stellarRatio: p.data("stellar-ratio") !== n ? p.data("stellar-ratio") : 1,
                        width: p.outerWidth(!0),
                        height: p.outerHeight(!0),
                        isHidden: !1
                    })
                })
            },
            _findBackgrounds: function() {
                var e, i = this,
                    s = this._getScrollLeft(),
                    o = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                    var e, r, a, l, c, u, h, f = t(this),
                        m = p(f),
                        g = 0,
                        v = 0,
                        y = 0,
                        b = 0;
                    if (f.data("stellar-backgroundIsActive")) {
                        if (f.data("stellar-backgroundIsActive") !== this) return
                    } else f.data("stellar-backgroundIsActive", this);
                    f.data("stellar-backgroundStartingLeft") ? d(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", m[0]), f.data("stellar-backgroundStartingTop", m[1])), a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a - s, u = f.offset().top - l - o, f.parents().each(function() {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (g = y, v = b, h = e, !1) : (y += e.position().left, void(b += e.position().top))
                    }), e = f.data("stellar-horizontal-offset") !== n ? f.data("stellar-horizontal-offset") : h !== n && h.data("stellar-horizontal-offset") !== n ? h.data("stellar-horizontal-offset") : i.horizontalOffset, r = f.data("stellar-vertical-offset") !== n ? f.data("stellar-vertical-offset") : h !== n && h.data("stellar-vertical-offset") !== n ? h.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                        $element: f,
                        $offsetParent: h,
                        isFixed: "fixed" === f.css("background-attachment"),
                        horizontalOffset: e,
                        verticalOffset: r,
                        startingValueLeft: m[0],
                        startingValueTop: m[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(m[0], 10)) ? 0 : parseInt(m[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(m[1], 10)) ? 0 : parseInt(m[1], 10),
                        startingPositionLeft: f.position().left,
                        startingPositionTop: f.position().top,
                        startingOffsetLeft: c,
                        startingOffsetTop: u,
                        parentOffsetLeft: g,
                        parentOffsetTop: v,
                        stellarRatio: f.data("stellar-background-ratio") === n ? 1 : f.data("stellar-background-ratio")
                    })
                }))
            },
            _reset: function() {
                var t, e, i, n, s;
                for (s = this.particles.length - 1; s >= 0; s--) t = this.particles[s], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (s = this.backgrounds.length - 1; s >= 0; s--) n = this.backgrounds[s], n.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), d(n.$element, n.startingValueLeft, n.startingValueTop)
            },
            destroy: function() {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
            },
            _setOffsets: function() {
                var i = this,
                    n = t(e);
                n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                    i.horizontalOffset = i.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                    i.verticalOffset = i.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function() {
                var t, e, i, n, s, o, r, a, l, c, u = this._getScrollLeft(),
                    h = this._getScrollTop(),
                    p = !0,
                    f = !0;
                if (this.currentScrollLeft !== u || this.currentScrollTop !== h || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = u, this.currentScrollTop = h, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) t = this.particles[c], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (o = (u + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = o - t.startingPositionLeft + t.startingOffsetLeft) : (o = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (h + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : u) && a < (t.isFixed ? 0 : u) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : h) && l < (t.isFixed ? 0 : h) + this.viewportHeight + this.viewportOffsetTop), f && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, o, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (c = this.backgrounds.length - 1; c >= 0; c--) i = this.backgrounds[c], e = i.isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (u + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, s = this.options.verticalScrolling ? (h + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, d(i.$element, n, s)
                }
            },
            _handleScrollEvent: function() {
                var t = this,
                    e = !1,
                    i = function() {
                        t._repositionElements(), e = !1
                    },
                    n = function() {
                        e || (f(i), e = !0)
                    };
                this.$scrollElement.bind("scroll." + this.name, n), n()
            },
            _startAnimationLoop: function() {
                var t = this;
                this._animationLoop = function() {
                    f(t._animationLoop), t._repositionElements()
                }, this._animationLoop()
            }
        }, t.fn[o] = function(e) {
            var i = arguments;
            return e === n || "object" == typeof e ? this.each(function() {
                t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new s(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
                var n = t.data(this, "plugin_" + o);
                n instanceof s && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + o, null)
            }) : void 0
        }, t[o] = function(i) {
            var n = t(e);
            return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
        }, t[o].scrollProperty = a, t[o].positionProperty = l, e.Stellar = s
    }(jQuery, this, document), function() {
        var t = !1;
        window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function e(i) {
            function n() {
                !t && this._init && this._init.apply(this, arguments)
            }
            var s = this.prototype;
            t = !0;
            var o = new this;
            t = !1;
            for (var r in i) o[r] = "function" == typeof i[r] && "function" == typeof s[r] ? function(t, e) {
                return function() {
                    var i = this._super;
                    this._super = function(e) {
                        return s[t].apply(this, e)
                    };
                    var n = e.apply(this, arguments);
                    return this._super = i, n
                }
            }(r, i[r]) : i[r];
            return n.prototype = o, n.prototype.constructor = n, n.extend = e, n
        }
    }(), function($) {
        function camelCase(t) {
            return t.replace(/-([a-z])/g, function(t, e) {
                return e.toUpperCase()
            })
        }
        JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            _getters: [],
            _getMarker: function() {
                return "is-" + this.name
            },
            _init: function() {
                $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
                var t = camelCase(this.name);
                $[t] = this, $.fn[t] = function(e) {
                    var i = Array.prototype.slice.call(arguments, 1);
                    return $[t]._isNotChained(e, i) ? $[t][e].apply($[t], [this[0]].concat(i)) : this.each(function() {
                        if ("string" == typeof e) {
                            if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
                            $[t][e].apply($[t], [this].concat(i))
                        } else $[t]._attach(this, e)
                    })
                }
            },
            setDefaults: function(t) {
                $.extend(this.defaultOptions, t || {})
            },
            _isNotChained: function(t, e) {
                return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) ? !0 : $.inArray(t, this._getters) > -1
            },
            _attach: function(t, e) {
                if (t = $(t), !t.hasClass(this._getMarker())) {
                    t.addClass(this._getMarker()), e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
                    var i = $.extend({
                        name: this.name,
                        elem: t,
                        options: e
                    }, this._instSettings(t, e));
                    t.data(this.name, i), this._postAttach(t, i), this.option(t, e)
                }
            },
            _instSettings: function(t, e) {
                return {}
            },
            _postAttach: function(t, e) {},
            _getMetadata: function(d) {
                try {
                    var f = d.data(this.name.toLowerCase()) || "";
                    f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(t, e, i) {
                        var n = f.substring(0, i).match(/"/g);
                        return n && n.length % 2 !== 0 ? e + ":" : '"' + e + '":'
                    }), f = $.parseJSON("{" + f + "}");
                    for (var g in f) {
                        var h = f[g];
                        "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                    }
                    return f
                } catch (e) {
                    return {}
                }
            },
            _getInst: function(t) {
                return $(t).data(this.name) || {}
            },
            option: function(t, e, i) {
                t = $(t);
                var n = t.data(this.name);
                if (!e || "string" == typeof e && null == i) {
                    var s = (n || {}).options;
                    return s && e ? s[e] : s
                }
                if (t.hasClass(this._getMarker())) {
                    var s = e || {};
                    "string" == typeof e && (s = {}, s[e] = i), this._optionsChanged(t, n, s), $.extend(n.options, s)
                }
            },
            _optionsChanged: function(t, e, i) {},
            destroy: function(t) {
                t = $(t), t.hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()))
            },
            _preDestroy: function(t, e) {}
        }), $.JQPlugin = {
            createPlugin: function(t, e) {
                "object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
                var i = camelCase(e.name);
                JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i]
            }
        }
    }(jQuery), function(t) {
        var e = "countdown",
            i = 0,
            n = 1,
            s = 2,
            o = 3,
            r = 4,
            a = 5,
            l = 6;
        t.JQPlugin.createPlugin({
            name: e,
            defaultOptions: {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                padZeroes: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            },
            regionalOptions: {
                "": {
                    labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                    labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                    compactLabels: ["y", "m", "w", "d"],
                    whichLabels: null,
                    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    timeSeparator: ":",
                    isRTL: !1
                }
            },
            _getters: ["getTimes"],
            _rtlClass: e + "-rtl",
            _sectionClass: e + "-section",
            _amountClass: e + "-amount",
            _periodClass: e + "-period",
            _rowClass: e + "-row",
            _holdingClass: e + "-holding",
            _showClass: e + "-show",
            _descrClass: e + "-descr",
            _timerElems: [],
            _init: function() {
                function e(t) {
                    var a = 1e12 > t ? s ? performance.now() + performance.timing.navigationStart : n() : t || n();
                    a - r >= 1e3 && (i._updateElems(), r = a), o(e)
                }
                var i = this;
                this._super(), this._serverSyncs = [];
                var n = "function" == typeof Date.now ? Date.now : function() {
                        return (new Date).getTime()
                    },
                    s = window.performance && "function" == typeof window.performance.now,
                    o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                    r = 0;
                !o || t.noRequestAnimationFrame ? (t.noRequestAnimationFrame = null, setInterval(function() {
                    i._updateElems()
                }, 980)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(), o(e))
            },
            UTCDate: function(t, e, i, n, s, o, r, a) {
                "object" == typeof e && e.constructor == Date && (a = e.getMilliseconds(), r = e.getSeconds(), o = e.getMinutes(), s = e.getHours(), n = e.getDate(), i = e.getMonth(), e = e.getFullYear());
                var l = new Date;
                return l.setUTCFullYear(e), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(n || 1), l.setUTCHours(s || 0), l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)), l.setUTCSeconds(r || 0), l.setUTCMilliseconds(a || 0), l
            },
            periodsToSeconds: function(t) {
                return 31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
            },
            resync: function() {
                var e = this;
                t("." + this._getMarker()).each(function() {
                    var i = t.data(this, e.name);
                    if (i.options.serverSync) {
                        for (var n = null, s = 0; s < e._serverSyncs.length; s++)
                            if (e._serverSyncs[s][0] == i.options.serverSync) {
                                n = e._serverSyncs[s];
                                break
                            }
                        if (null == n[2]) {
                            var o = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(this, []) : null;
                            n[2] = (o ? (new Date).getTime() - o.getTime() : 0) - n[1]
                        }
                        i._since && i._since.setMilliseconds(i._since.getMilliseconds() + n[2]), i._until.setMilliseconds(i._until.getMilliseconds() + n[2])
                    }
                });
                for (var i = 0; i < e._serverSyncs.length; i++) null != e._serverSyncs[i][2] && (e._serverSyncs[i][1] += e._serverSyncs[i][2], delete e._serverSyncs[i][2])
            },
            _instSettings: function(t, e) {
                return {
                    _periods: [0, 0, 0, 0, 0, 0, 0]
                }
            },
            _addElem: function(t) {
                this._hasElem(t) || this._timerElems.push(t)
            },
            _hasElem: function(e) {
                return t.inArray(e, this._timerElems) > -1
            },
            _removeElem: function(e) {
                this._timerElems = t.map(this._timerElems, function(t) {
                    return t == e ? null : t
                })
            },
            _updateElems: function() {
                for (var t = this._timerElems.length - 1; t >= 0; t--) this._updateCountdown(this._timerElems[t])
            },
            _optionsChanged: function(e, i, n) {
                n.layout && (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, n);
                var s = i.options.timezone != n.timezone;
                t.extend(i.options, n), this._adjustSettings(e, i, null != n.until || null != n.since || s);
                var o = new Date;
                (i._since && i._since < o || i._until && i._until > o) && this._addElem(e[0]), this._updateCountdown(e, i)
            },
            _updateCountdown: function(e, i) {
                if (e = e.jquery ? e : t(e), i = i || this._getInst(e)) {
                    if (e.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), t.isFunction(i.options.onTick)) {
                        var n = "lap" != i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
                        (1 == i.options.tickInterval || this.periodsToSeconds(n) % i.options.tickInterval == 0) && i.options.onTick.apply(e[0], [n])
                    }
                    var s = "pause" != i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime());
                    if (s && !i._expiring) {
                        if (i._expiring = !0, this._hasElem(e[0]) || i.options.alwaysExpire) {
                            if (this._removeElem(e[0]), t.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(e[0], []), i.options.expiryText) {
                                var o = i.options.layout;
                                i.options.layout = i.options.expiryText, this._updateCountdown(e[0], i), i.options.layout = o
                            }
                            i.options.expiryUrl && (window.location = i.options.expiryUrl)
                        }
                        i._expiring = !1
                    } else "pause" == i._hold && this._removeElem(e[0])
                }
            },
            _resetExtraLabels: function(t, e) {
                for (var i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
                for (var i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof e[i] && (t[i] = null)
            },
            _adjustSettings: function(e, i, n) {
                for (var s = null, o = 0; o < this._serverSyncs.length; o++)
                    if (this._serverSyncs[o][0] == i.options.serverSync) {
                        s = this._serverSyncs[o][1];
                        break
                    }
                if (null != s) var r = i.options.serverSync ? s : 0,
                    a = new Date;
                else {
                    var l = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(e[0], []) : null,
                        a = new Date,
                        r = l ? a.getTime() - l.getTime() : 0;
                    this._serverSyncs.push([i.options.serverSync, r])
                }
                var c = i.options.timezone;
                c = null == c ? -a.getTimezoneOffset() : c, (n || !n && null == i._until && null == i._since) && (i._since = i.options.since, null != i._since && (i._since = this.UTCDate(c, this._determineTime(i._since, null)), i._since && r && i._since.setMilliseconds(i._since.getMilliseconds() + r)), i._until = this.UTCDate(c, this._determineTime(i.options.until, a)), r && i._until.setMilliseconds(i._until.getMilliseconds() + r)), i._show = this._determineShow(i)
            },
            _preDestroy: function(t, e) {
                this._removeElem(t[0]), t.empty()
            },
            pause: function(t) {
                this._hold(t, "pause")
            },
            lap: function(t) {
                this._hold(t, "lap")
            },
            resume: function(t) {
                this._hold(t, null)
            },
            toggle: function(e) {
                var i = t.data(e, this.name) || {};
                this[i._hold ? "resume" : "pause"](e)
            },
            toggleLap: function(e) {
                var i = t.data(e, this.name) || {};
                this[i._hold ? "resume" : "lap"](e);
            },
            _hold: function(e, i) {
                var n = t.data(e, this.name);
                if (n) {
                    if ("pause" == n._hold && !i) {
                        n._periods = n._savePeriods;
                        var s = n._since ? "-" : "+";
                        n[n._since ? "_since" : "_until"] = this._determineTime(s + n._periods[0] + "y" + s + n._periods[1] + "o" + s + n._periods[2] + "w" + s + n._periods[3] + "d" + s + n._periods[4] + "h" + s + n._periods[5] + "m" + s + n._periods[6] + "s"), this._addElem(e)
                    }
                    n._hold = i, n._savePeriods = "pause" == i ? n._periods : null, t.data(e, this.name, n), this._updateCountdown(e, n)
                }
            },
            getTimes: function(e) {
                var i = t.data(e, this.name);
                return i ? "pause" == i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
            },
            _determineTime: function(t, e) {
                var i = this,
                    n = function(t) {
                        var e = new Date;
                        return e.setTime(e.getTime() + 1e3 * t), e
                    },
                    s = function(t) {
                        t = t.toLowerCase();
                        for (var e = new Date, n = e.getFullYear(), s = e.getMonth(), o = e.getDate(), r = e.getHours(), a = e.getMinutes(), l = e.getSeconds(), c = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, u = c.exec(t); u;) {
                            switch (u[2] || "s") {
                                case "s":
                                    l += parseInt(u[1], 10);
                                    break;
                                case "m":
                                    a += parseInt(u[1], 10);
                                    break;
                                case "h":
                                    r += parseInt(u[1], 10);
                                    break;
                                case "d":
                                    o += parseInt(u[1], 10);
                                    break;
                                case "w":
                                    o += 7 * parseInt(u[1], 10);
                                    break;
                                case "o":
                                    s += parseInt(u[1], 10), o = Math.min(o, i._getDaysInMonth(n, s));
                                    break;
                                case "y":
                                    n += parseInt(u[1], 10), o = Math.min(o, i._getDaysInMonth(n, s))
                            }
                            u = c.exec(t)
                        }
                        return new Date(n, s, o, r, a, l, 0)
                    },
                    o = null == t ? e : "string" == typeof t ? s(t) : "number" == typeof t ? n(t) : t;
                return o && o.setMilliseconds(0), o
            },
            _getDaysInMonth: function(t, e) {
                return 32 - new Date(t, e, 32).getDate()
            },
            _normalLabels: function(t) {
                return t
            },
            _generateHTML: function(e) {
                var c = this;
                e._periods = e._hold ? e._periods : this._calculatePeriods(e, e._show, e.options.significant, new Date);
                for (var u = !1, h = 0, d = e.options.significant, p = t.extend({}, e._show), f = i; l >= f; f++) u |= "?" == e._show[f] && e._periods[f] > 0, p[f] = "?" != e._show[f] || u ? e._show[f] : null, h += p[f] ? 1 : 0, d -= e._periods[f] > 0 ? 1 : 0;
                for (var m = [!1, !1, !1, !1, !1, !1, !1], f = l; f >= i; f--) e._show[f] && (e._periods[f] ? m[f] = !0 : (m[f] = d > 0, d--));
                var g = e.options.compact ? e.options.compactLabels : e.options.labels,
                    v = e.options.whichLabels || this._normalLabels,
                    y = function(t) {
                        var i = e.options["compactLabels" + v(e._periods[t])];
                        return p[t] ? c._translateDigits(e, e._periods[t]) + (i ? i[t] : g[t]) + " " : ""
                    },
                    b = e.options.padZeroes ? 2 : 1,
                    w = function(t) {
                        var i = e.options["labels" + v(e._periods[t])];
                        return !e.options.significant && p[t] || e.options.significant && m[t] ? '<span class="' + c._sectionClass + '"><span class="' + c._amountClass + '">' + c._minDigits(e, e._periods[t], b) + '</span><span class="' + c._periodClass + '">' + (i ? i[t] : g[t]) + "</span></span>" : ""
                    };
                return e.options.layout ? this._buildLayout(e, p, e.options.layout, e.options.compact, e.options.significant, m) : (e.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (e._hold ? " " + this._holdingClass : "") + '">' + y(i) + y(n) + y(s) + y(o) + (p[r] ? this._minDigits(e, e._periods[r], 2) : "") + (p[a] ? (p[r] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[a], 2) : "") + (p[l] ? (p[r] || p[a] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[l], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (e.options.significant || h) + (e._hold ? " " + this._holdingClass : "") + '">' + w(i) + w(n) + w(s) + w(o) + w(r) + w(a) + w(l)) + "</span>" + (e.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + e.options.description + "</span>" : "")
            },
            _buildLayout: function(e, c, u, h, d, p) {
                for (var f = e.options[h ? "compactLabels" : "labels"], m = e.options.whichLabels || this._normalLabels, g = function(t) {
                        return (e.options[(h ? "compactLabels" : "labels") + m(e._periods[t])] || f)[t]
                    }, v = function(t, i) {
                        return e.options.digits[Math.floor(t / i) % 10]
                    }, y = {
                        desc: e.options.description,
                        sep: e.options.timeSeparator,
                        yl: g(i),
                        yn: this._minDigits(e, e._periods[i], 1),
                        ynn: this._minDigits(e, e._periods[i], 2),
                        ynnn: this._minDigits(e, e._periods[i], 3),
                        y1: v(e._periods[i], 1),
                        y10: v(e._periods[i], 10),
                        y100: v(e._periods[i], 100),
                        y1000: v(e._periods[i], 1e3),
                        ol: g(n),
                        on: this._minDigits(e, e._periods[n], 1),
                        onn: this._minDigits(e, e._periods[n], 2),
                        onnn: this._minDigits(e, e._periods[n], 3),
                        o1: v(e._periods[n], 1),
                        o10: v(e._periods[n], 10),
                        o100: v(e._periods[n], 100),
                        o1000: v(e._periods[n], 1e3),
                        wl: g(s),
                        wn: this._minDigits(e, e._periods[s], 1),
                        wnn: this._minDigits(e, e._periods[s], 2),
                        wnnn: this._minDigits(e, e._periods[s], 3),
                        w1: v(e._periods[s], 1),
                        w10: v(e._periods[s], 10),
                        w100: v(e._periods[s], 100),
                        w1000: v(e._periods[s], 1e3),
                        dl: g(o),
                        dn: this._minDigits(e, e._periods[o], 1),
                        dnn: this._minDigits(e, e._periods[o], 2),
                        dnnn: this._minDigits(e, e._periods[o], 3),
                        d1: v(e._periods[o], 1),
                        d10: v(e._periods[o], 10),
                        d100: v(e._periods[o], 100),
                        d1000: v(e._periods[o], 1e3),
                        hl: g(r),
                        hn: this._minDigits(e, e._periods[r], 1),
                        hnn: this._minDigits(e, e._periods[r], 2),
                        hnnn: this._minDigits(e, e._periods[r], 3),
                        h1: v(e._periods[r], 1),
                        h10: v(e._periods[r], 10),
                        h100: v(e._periods[r], 100),
                        h1000: v(e._periods[r], 1e3),
                        ml: g(a),
                        mn: this._minDigits(e, e._periods[a], 1),
                        mnn: this._minDigits(e, e._periods[a], 2),
                        mnnn: this._minDigits(e, e._periods[a], 3),
                        m1: v(e._periods[a], 1),
                        m10: v(e._periods[a], 10),
                        m100: v(e._periods[a], 100),
                        m1000: v(e._periods[a], 1e3),
                        sl: g(l),
                        sn: this._minDigits(e, e._periods[l], 1),
                        snn: this._minDigits(e, e._periods[l], 2),
                        snnn: this._minDigits(e, e._periods[l], 3),
                        s1: v(e._periods[l], 1),
                        s10: v(e._periods[l], 10),
                        s100: v(e._periods[l], 100),
                        s1000: v(e._periods[l], 1e3)
                    }, b = u, w = i; l >= w; w++) {
                    var x = "yowdhms".charAt(w),
                        C = new RegExp("\\{" + x + "<\\}([\\s\\S]*)\\{" + x + ">\\}", "g");
                    b = b.replace(C, !d && c[w] || d && p[w] ? "$1" : "")
                }
                return t.each(y, function(t, e) {
                    var i = new RegExp("\\{" + t + "\\}", "g");
                    b = b.replace(i, e)
                }), b
            },
            _minDigits: function(t, e, i) {
                return e = "" + e, e.length >= i ? this._translateDigits(t, e) : (e = "0000000000" + e, this._translateDigits(t, e.substr(e.length - i)))
            },
            _translateDigits: function(t, e) {
                return ("" + e).replace(/[0-9]/g, function(e) {
                    return t.options.digits[e]
                })
            },
            _determineShow: function(t) {
                var e = t.options.format,
                    c = [];
                return c[i] = e.match("y") ? "?" : e.match("Y") ? "!" : null, c[n] = e.match("o") ? "?" : e.match("O") ? "!" : null, c[s] = e.match("w") ? "?" : e.match("W") ? "!" : null, c[o] = e.match("d") ? "?" : e.match("D") ? "!" : null, c[r] = e.match("h") ? "?" : e.match("H") ? "!" : null, c[a] = e.match("m") ? "?" : e.match("M") ? "!" : null, c[l] = e.match("s") ? "?" : e.match("S") ? "!" : null, c
            },
            _calculatePeriods: function(t, e, c, u) {
                t._now = u, t._now.setMilliseconds(0);
                var h = new Date(t._now.getTime());
                t._since ? u.getTime() < t._since.getTime() ? t._now = u = h : u = t._since : (h.setTime(t._until.getTime()), u.getTime() > t._until.getTime() && (t._now = u = h));
                var d = [0, 0, 0, 0, 0, 0, 0];
                if (e[i] || e[n]) {
                    var p = this._getDaysInMonth(u.getFullYear(), u.getMonth()),
                        f = this._getDaysInMonth(h.getFullYear(), h.getMonth()),
                        m = h.getDate() == u.getDate() || h.getDate() >= Math.min(p, f) && u.getDate() >= Math.min(p, f),
                        g = function(t) {
                            return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds()
                        },
                        v = Math.max(0, 12 * (h.getFullYear() - u.getFullYear()) + h.getMonth() - u.getMonth() + (h.getDate() < u.getDate() && !m || m && g(h) < g(u) ? -1 : 0));
                    d[i] = e[i] ? Math.floor(v / 12) : 0, d[n] = e[n] ? v - 12 * d[i] : 0, u = new Date(u.getTime());
                    var y = u.getDate() == p,
                        b = this._getDaysInMonth(u.getFullYear() + d[i], u.getMonth() + d[n]);
                    u.getDate() > b && u.setDate(b), u.setFullYear(u.getFullYear() + d[i]), u.setMonth(u.getMonth() + d[n]), y && u.setDate(b)
                }
                var w = Math.floor((h.getTime() - u.getTime()) / 1e3),
                    x = function(t, i) {
                        d[t] = e[t] ? Math.floor(w / i) : 0, w -= d[t] * i
                    };
                if (x(s, 604800), x(o, 86400), x(r, 3600), x(a, 60), x(l, 1), w > 0 && !t._since)
                    for (var C = [1, 12, 4.3482, 7, 24, 60, 60], _ = l, S = 1, T = l; T >= i; T--) e[T] && (d[_] >= S && (d[_] = 0, w = 1), w > 0 && (d[T]++, w = 0, _ = T, S = 1)), S *= C[T];
                if (c)
                    for (var T = i; l >= T; T++) c && d[T] ? c-- : c || (d[T] = 0);
                return d
            }
        })
    }(jQuery), function(t) {
        function e(t, e) {
            return t.toFixed(e.decimals)
        }
        t.fn.countTo = function(e) {
            return e = e || {}, t(this).each(function() {
                function i() {
                    u += r, c++, n(u), "function" == typeof s.onUpdate && s.onUpdate.call(a, u), c >= o && (l.removeData("countTo"), clearInterval(h.interval), u = s.to, "function" == typeof s.onComplete && s.onComplete.call(a, u))
                }

                function n(t) {
                    var e = s.formatter.call(a, t, s);
                    l.text(e)
                }
                var s = t.extend({}, t.fn.countTo.defaults, {
                        from: t(this).data("from"),
                        to: t(this).data("to"),
                        speed: t(this).data("speed"),
                        refreshInterval: t(this).data("refresh-interval"),
                        decimals: t(this).data("decimals")
                    }, e),
                    o = Math.ceil(s.speed / s.refreshInterval),
                    r = (s.to - s.from) / o,
                    a = this,
                    l = t(this),
                    c = 0,
                    u = s.from,
                    h = l.data("countTo") || {};
                l.data("countTo", h), h.interval && clearInterval(h.interval), h.interval = setInterval(i, s.refreshInterval), n(u)
            })
        }, t.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: e,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery), ! function(t, e, i, n) {
        function s(e, i) {
            this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }, this)), t.each(s.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(s.Workers, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        s.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, s.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, s.Type = {
            Event: "event",
            State: "state"
        }, s.Plugins = {}, s.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    s = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(s), t.css = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    s = !this.settings.autoWidth,
                    o = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    s = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2),
                    r = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0,
                    a = "",
                    l = "";
                for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + o,
                    a = r + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], s.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var e, i, s;
                e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && 0 >= s && this.preloadAutoWidthImages(e)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, s.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                s = null;
            i ? (t.each(i, function(t) {
                e >= t && t > n && (n = Number(t))
            }), s = t.extend({}, this.options, i[n]), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
                property: {
                    name: "settings",
                    value: s
                }
            }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, s.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, s.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, s.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), s = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, s.prototype.width = function(t) {
            switch (t = t || s.Width.Default) {
                case s.Width.Inner:
                case s.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, s.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, s.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, s.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
        }, s.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, s.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
                x: n[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            }) : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, s.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                s = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, s);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
        }, s.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                s = this._drag.stage.current,
                o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, s.prototype.closest = function(e, i) {
            var n = -1,
                s = 30,
                o = this.width(),
                r = this.coordinates();
            return this.settings.freeDrag || t.each(r, t.proxy(function(t, a) {
                return e > a - s && a + s > e ? n = t : this.op(e, "<", a) && this.op(e, ">", r[t + 1] || a - o) && (n = "left" === i ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
        }, s.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, s.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, s.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, s.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, s.prototype.reset = function(t) {
            t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, s.prototype.normalize = function(e, i) {
            var s = this._items.length,
                o = i ? 0 : this._clones.length;
            return !t.isNumeric(e) || 1 > s ? e = n : (0 > e || e >= s + o) && (e = ((e - o / 2) % s + s) % s + o / 2), e
        }, s.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, s.prototype.maximum = function(t) {
            var e, i = this.settings,
                n = this._coordinates.length,
                s = Math.abs(this._coordinates[n - 1]) - this._width,
                o = -1;
            if (i.loop) n = this._clones.length / 2 + this._items.length - 1;
            else if (i.autoWidth || i.merge)
                for (; n - o > 1;) Math.abs(this._coordinates[e = n + o >> 1]) < s ? o = e : n = e;
            else n = i.center ? this._items.length - 1 : this._items.length - i.items;
            return t && (n -= this._clones.length / 2), Math.max(n, 0)
        }, s.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, s.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, s.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, s.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                s = i + this._items.length,
                o = function(t) {
                    return t % 2 === 0 ? s + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function(t, e) {
                return o(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? o(i) : null
            })
        }, s.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed
        }, s.prototype.coordinates = function(e) {
            var i = null;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
        }, s.prototype.duration = function(t, e, i) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, s.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                s = t - this.relative(i),
                o = (s > 0) - (0 > s),
                r = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), t = i + s, n = ((t - a) % r + r) % r + a, n !== t && l >= n - s && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, s.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, s.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, s.prototype.onTransitionEnd = function(t) {
            return t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
        }, s.prototype.viewport = function() {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
            }
            return n
        }, s.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, s.prototype.add = function(e, i) {
            var s = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, s.prototype.remove = function(t) {
            t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, s.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, s.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
            for (var n in this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, s.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
            }
        }, s.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, s.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, s.prototype.trigger = function(e, i, n, o, r) {
            var a = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, a, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(c)
            }), this.register({
                type: s.Type.Event,
                name: e
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, s.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, s.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, s.prototype.register = function(e) {
            if (e.type === s.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
            }, this)))
        }, s.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, s.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, s.prototype.pointer = function(t) {
            var i = {
                x: null,
                y: null
            };
            return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, s.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.owlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    o = n.data("owl.carousel");
                o || (o = new s(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                    o.register({
                        type: s.Type.Event,
                        name: i
                    }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, o))
                })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
            })
        }, t.fn.owlCarousel.Constructor = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, s.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, s.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, s.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && -1 * n || 0, o = (e.property && e.property.value || this._core.current()) + s, r = this._core.clones().length, a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); s++ < n;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            lazyLoad: !1
        }, s.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                s = n && n.find(".owl-lazy");
            !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
                var s, o = t(n),
                    r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", {
                    element: o,
                    url: r
                }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                    o.css("opacity", 1), this._core.trigger("loaded", {
                        element: o,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : (s = new Image, s.onload = t.proxy(function() {
                    o.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: o,
                        url: r
                    }, "lazy")
                }, this), s.src = r)
            }, this)), this._loaded.push(n.get(0)))
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, s.prototype.update = function() {
            var e = this._core._current,
                i = e + this._core.settings.items,
                n = this._core.$stage.children().toArray().slice(e, i);
            heights = [], maxheight = 0, t.each(n, function(e, i) {
                heights.push(t(i).height())
            }), maxheight = Math.max.apply(null, heights), this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        s.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, s.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo"
            }
            n = n[6], this._videos[r] = {
                type: i,
                id: n,
                width: s,
                height: o
            }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, s.prototype.thumbnail = function(e, i) {
            var n, s, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                c = "",
                u = this._core.settings,
                h = function(t) {
                    s = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s)
                };
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (h(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(o)) : "vimeo" === i.type && t.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    o = t[0].thumbnail_large, h(o)
                }
            }))
        }, s.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, s.prototype.play = function(e) {
            var i, n = t(e.target),
                s = n.closest("." + this._core.settings.itemClass),
                o = this._videos[s.attr("data-video")],
                r = o.width || "100%",
                a = o.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === o.type ? i = '<iframe width="' + r + '" height="' + a + '" src="http://www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type && (i = '<iframe src="http://player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + r + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
        }, s.prototype.isInFullScreen = function() {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, s.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var s = function(e) {
            this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        s.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, s.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    s = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(r)), o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
            }
        }, s.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._interval = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
        };
        s.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, s.prototype.play = function(n, s) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._interval = e.setInterval(t.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout))
        }, s.prototype.stop = function() {
            this._core.is("rotating") && (e.clearInterval(this._interval), this._core.leave("rotating"))
        }, s.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, s.prototype.destroy = function() {
            var t, e;
            this.stop();
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        "use strict";
        var s = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        s.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, s.prototype.initialize = function() {
            var e, i = this._core.settings;
            this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this));
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
        }, s.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, s.prototype.update = function() {
            var t, e, i, n = this._core.clones().length / 2,
                s = n + this._core.items().length,
                o = this._core.maximum(!0),
                r = this._core.settings,
                a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
            if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; s > t; t++) {
                    if (e >= a || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(o, t - n),
                                end: t - n + a - 1
                            }), Math.min(o, t - n) === o) break;
                        e = 0, ++i
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, s.prototype.draw = function() {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                s = this._core.relative(this._core.current()),
                o = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, s.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, s.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, i) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, s.prototype.getPosition = function(e) {
            var i, n, s = this._core.settings;
            return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
        }, s.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, s.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, s.prototype.to = function(e, i, n) {
            var s;
            n ? t.proxy(this._overrides.to, this._core)(e, i) : (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        "use strict";
        var s = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            s = t.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!s || e.location.hash.slice(1) === s) return;
                        e.location.hash = s
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    s = this._core.$stage.children(),
                    o = this._hashes[i] && s.index(this._hashes[i]);
                o !== n && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
            }, this))
        };
        s.Defaults = {
            URLhashListener: !1
        }, s.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
    }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        function s(e, i) {
            var s = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
                return r[e] !== n ? (s = i ? e : !0, !1) : void 0
            }), s
        }

        function o(t) {
            return s(t, !0)
        }
        var r = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = {
                csstransforms: function() {
                    return !!s("transform")
                },
                csstransforms3d: function() {
                    return !!s("perspective")
                },
                csstransitions: function() {
                    return !!s("transition")
                },
                cssanimations: function() {
                    return !!s("animation")
                }
            };
        c.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), c.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = c.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document), ! function(t) {
        "use strict";

        function e(e, i) {
            this.element = t(e), this.settings = t.extend({}, n, i), this._defaults = n, this._init()
        }
        var i = "Morphext",
            n = {
                animation: "bounceIn",
                separator: ",",
                speed: 2e3,
                complete: t.noop
            };
        e.prototype = {
            _init: function() {
                var e = this;
                this.phrases = [], this.element.addClass("morphext"), t.each(this.element.text().split(this.settings.separator), function(i, n) {
                    e.phrases.push(t.trim(n))
                }), this.index = -1, this.animate(), this.start()
            },
            animate: function() {
                this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", t.isFunction(this.settings.complete) && this.settings.complete.call(this)
            },
            start: function() {
                var t = this;
                this._interval = setInterval(function() {
                    t.animate()
                }, this.settings.speed)
            },
            stop: function() {
                this._interval = clearInterval(this._interval)
            }
        }, t.fn[i] = function(n) {
            return this.each(function() {
                t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new e(this, n))
            })
        }
    }(jQuery), ! function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function s(e, i) {
                t.fn[e] = function(s) {
                    if ("string" == typeof s) {
                        for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var c = this[a],
                                u = t.data(c, e);
                            if (u)
                                if (t.isFunction(u[s]) && "_" !== s.charAt(0)) {
                                    var h = u[s].apply(u, r);
                                    if (void 0 !== h) return h
                                } else o("no such method '" + s + "' for " + e + " instance");
                            else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + s + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(s), n._init()) : (n = new i(this, s), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var o = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), s(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window), function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var s = function() {};
        i.removeEventListener ? s = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (s = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: s
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o
    }(window), function() {
        "use strict";

        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            s = this,
            o = s.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, s = this.getListenersAsObject(t),
                o = "object" == typeof i;
            for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(o ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, s, o = this.getListenersAsObject(t);
            for (s in o) o.hasOwnProperty(s) && (n = e(o[s], i), -1 !== n && o[s].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, s, o = t ? this.removeListener : this.addListener,
                r = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) o.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? o.call(this, n, s) : r.call(this, n, s));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, s, o, r = this.getListenersAsObject(t);
            for (s in r)
                if (r.hasOwnProperty(s))
                    for (n = r[s].length; n--;) i = r[s][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return s.EventEmitter = o, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : s.EventEmitter = t
    }.call(this), function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, s = 0, o = i.length; o > s; s++)
                    if (e = i[s] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window), function(t, e) {
        function i(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function n() {}

        function s() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0
            }
            return t
        }

        function o(e) {
            function n() {
                if (!d) {
                    d = !0;
                    var n = t.getComputedStyle;
                    if (c = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), u = e("boxSizing")) {
                        var s = document.createElement("div");
                        s.style.width = "200px", s.style.padding = "1px 2px 3px 4px", s.style.borderStyle = "solid", s.style.borderWidth = "1px 2px 3px 4px", s.style[u] = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(s);
                        var a = c(s);
                        h = 200 === i(a.width), o.removeChild(s)
                    }
                }
            }

            function o(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = c(t);
                    if ("none" === e.display) return s();
                    var o = {};
                    o.width = t.offsetWidth, o.height = t.offsetHeight;
                    for (var r = o.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), d = 0, p = a.length; p > d; d++) {
                        var f = a[d],
                            m = e[f];
                        m = l(t, m);
                        var g = parseFloat(m);
                        o[f] = isNaN(g) ? 0 : g
                    }
                    var v = o.paddingLeft + o.paddingRight,
                        y = o.paddingTop + o.paddingBottom,
                        b = o.marginLeft + o.marginRight,
                        w = o.marginTop + o.marginBottom,
                        x = o.borderLeftWidth + o.borderRightWidth,
                        C = o.borderTopWidth + o.borderBottomWidth,
                        _ = r && h,
                        S = i(e.width);
                    S !== !1 && (o.width = S + (_ ? 0 : v + x));
                    var T = i(e.height);
                    return T !== !1 && (o.height = T + (_ ? 0 : y + C)), o.innerWidth = o.width - (v + x), o.innerHeight = o.height - (y + C), o.outerWidth = o.width + b, o.outerHeight = o.height + w, o
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    s = n.left,
                    o = e.runtimeStyle,
                    r = o && o.left;
                return r && (o.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = s, r && (o.left = r), i
            }
            var c, u, h, d = !1;
            return o
        }
        var r = "undefined" == typeof console ? n : function(t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window), function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : r.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = r.length; i > t; t++) {
                var n = r[t];
                n()
            }
        }

        function s(s) {
            return "complete" === o.readyState ? n() : (s.bind(o, "DOMContentLoaded", i), s.bind(o, "readystatechange", i), s.bind(t, "load", i)), e
        }
        var o = t.document,
            r = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], s) : "object" == typeof exports ? module.exports = s(require("eventie")) : t.docReady = s(t.eventie)
    }(window), function(t) {
        "use strict";

        function e(t, e) {
            return t[r](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), s = 0, o = n.length; o > s; s++)
                if (n[s] === t) return !0;
            return !1
        }

        function s(t, n) {
            return i(t), e(t, n)
        }
        var o, r = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var s = e[i],
                    o = s + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        if (r) {
            var a = document.createElement("div"),
                l = e(a, "div");
            o = l ? e : s
        } else o = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
    }(Element.prototype), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var s = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == s.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, s = t.length; s > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var s = [], o = 0, r = t.length; r > o; o++) {
                var a = t[o];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && s.push(a);
                        for (var l = a.querySelectorAll(e), c = 0, u = l.length; u > c; c++) s.push(l[c])
                    } else s.push(a)
            }
            return s
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                s = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[s];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[s] = setTimeout(function() {
                    n.apply(o, e), delete o[s]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var o = t.console;
        return n.htmlInit = function(i, s) {
            e(function() {
                for (var e = n.toDashed(s), r = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, c = r.length; c > l; l++) {
                    var u, h = r[l],
                        d = h.getAttribute(a);
                    try {
                        u = d && JSON.parse(d)
                    } catch (p) {
                        o && o.error("Error parsing " + a + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + p);
                        continue
                    }
                    var f = new i(h, u),
                        m = t.jQuery;
                    m && m.data(h, s, f)
                }
            })
        }, n
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, s, o) {
            return e(t, i, n, s, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, n, s) {
        "use strict";

        function o(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function r(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function a(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var l = t.getComputedStyle,
            c = l ? function(t) {
                return l(t, null)
            } : function(t) {
                return t.currentStyle
            },
            u = n("transition"),
            h = n("transform"),
            d = u && h,
            p = !!n("perspective"),
            f = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            m = ["transform", "transition", "transitionDuration", "transitionProperty"],
            g = function() {
                for (var t = {}, e = 0, i = m.length; i > e; e++) {
                    var s = m[e],
                        o = n(s);
                    o && o !== s && (t[s] = o)
                }
                return t
            }();
        s.extend(r.prototype, e.prototype), r.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.getSize = function() {
            this.size = i(this.element)
        }, r.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = g[i] || i;
                e[n] = t[i]
            }
        }, r.prototype.getPosition = function() {
            var t = c(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                s = t[i ? "left" : "right"],
                o = t[n ? "top" : "bottom"],
                r = this.layout.size,
                a = -1 != s.indexOf("%") ? parseFloat(s) / 100 * r.width : parseInt(s, 10),
                l = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
            a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? r.paddingLeft : r.paddingRight, l -= n ? r.paddingTop : r.paddingBottom, this.position.x = a, this.position.y = l
        }, r.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                s = e.isOriginLeft ? "left" : "right",
                o = e.isOriginLeft ? "right" : "left",
                r = this.position.x + t[n];
            i[s] = this.getXValue(r), i[o] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                c = e.isOriginTop ? "bottom" : "top",
                u = this.position.y + t[a];
            i[l] = this.getYValue(u), i[c] = "", this.css(i), this.emitEvent("layout", [this])
        }, r.prototype.getXValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, r.prototype.getYValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, r.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                s = parseInt(t, 10),
                o = parseInt(e, 10),
                r = s === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                c = {};
            c.transform = this.getTranslate(a, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, r.prototype.getTranslate = function(t, e) {
            var i = this.layout.options;
            return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, p ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
        }, r.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, r.prototype.moveTo = d ? r.prototype._transitionTo : r.prototype.goTo, r.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, r.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, r.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var v = "opacity," + a(g.transform || "transform");
        r.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(f, this, !1))
        }, r.prototype.transition = r.prototype[u ? "_transition" : "_nonTransition"], r.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, r.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var y = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        r.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = y[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], o(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var n = e.onEnd[i];
                    n.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, r.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(f, this, !1), this.isTransitioning = !1
        }, r.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var b = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return r.prototype.removeTransitionStyles = function() {
            this.css(b)
        }, r.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, r.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, r.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, r.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, r.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, r.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, r.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, r.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, r
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, s, o, r) {
            return e(t, i, n, s, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, s, o) {
        "use strict";

        function r(t, e) {
            var i = s.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
            var n = ++u;
            this.element.outlayerGUID = n, h[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            l = t.jQuery,
            c = function() {},
            u = 0,
            h = {};
        return r.namespace = "outlayer", r.Item = o, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, s.extend(r.prototype, i.prototype), r.prototype.option = function(t) {
            s.extend(this.options, t)
        }, r.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, r.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, r.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0, o = e.length; o > s; s++) {
                var r = e[s],
                    a = new i(r, this);
                n.push(a)
            }
            return n
        }, r.prototype._filterFindItemElements = function(t) {
            return s.filterFindElements(t, this.options.itemSelector)
        }, r.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, r.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, r.prototype._init = r.prototype.layout, r.prototype._resetLayout = function() {
            this.getSize()
        }, r.prototype.getSize = function() {
            this.size = n(this.element)
        }, r.prototype._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : s.isElement(o) && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
        }, r.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, r.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var s = t[i];
                s.isIgnored || e.push(s)
            }
            return e
        }, r.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, s = t.length; s > n; n++) {
                    var o = t[n],
                        r = this._getItemLayoutPosition(o);
                    r.item = o, r.isInstant = e || o.isLayoutInstant, i.push(r)
                }
                this._processLayoutQueue(i)
            }
        }, r.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, r.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, r.prototype._positionItem = function(t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, r.prototype._postLayout = function() {
            this.resizeContainer()
        }, r.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, r.prototype._getContainerSize = c, r.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, r.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                s.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                r++, r === o && i()
            }
            var s = this,
                o = e.length;
            if (!e || !o) return void i();
            for (var r = 0, a = 0, l = e.length; l > a; a++) {
                var c = e[a];
                c.once(t, n)
            }
        }, r.prototype.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var s = l.Event(e);
                    s.type = t, this.$element.trigger(s, i)
                } else this.$element.trigger(t, i)
        }, r.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, r.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, r.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, r.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    s.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, r.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)) : void 0
        }, r.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, r.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, r.prototype._manageStamp = c, r.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                s = n(t),
                o = {
                    left: e.left - i.left - s.marginLeft,
                    top: e.top - i.top - s.marginTop,
                    right: i.right - e.right - s.marginRight,
                    bottom: i.bottom - e.bottom - s.marginBottom
                };
            return o
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, r.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, r.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, r.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, r.prototype.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, r.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, r.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, r.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, r.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, r.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, r.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, r.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, r.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t) return n
            }
        }, r.prototype.getItems = function(t) {
            t = s.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var o = t[i],
                    r = this.getItem(o);
                r && e.push(r)
            }
            return e
        }, r.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var o = e[i];
                    o.remove(), s.removeFrom(this.items, o)
                }
        }, r.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize();
            var s = this.element.outlayerGUID;
            delete h[s], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, r.data = function(t) {
            t = s.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && h[e]
        }, r.create = function(t, e) {
            function i() {
                r.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(r.prototype) : s.extend(i.prototype, r.prototype), i.prototype.constructor = i, i.defaults = s.extend({}, r.defaults), s.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = r.data, i.Item = function() {
                o.apply(this, arguments)
            }, i.Item.prototype = new o, s.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, r.Item = o, r
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], s = 0, o = n.length; o > s; s++) {
                var r = n[s];
                i.prototype[r] = t(r)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var s = this.getFirstItemSize();
                this[i] = s && s[n] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                s = this.containerWidth + this.gutter,
                o = s / n,
                r = n - s % n,
                a = r && 1 > r ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                s = Math[n](t.size.outerWidth / this.columnWidth);
            s = Math.min(s, this.cols);
            for (var o = this._getColGroup(s), r = Math.min.apply(Math, o), a = i.indexOf(o, r), l = {
                    x: this.columnWidth * a,
                    y: r
                }, c = r + t.size.outerHeight, u = this.cols + 1 - o.length, h = 0; u > h; h++) this.colYs[a + h] = c;
            return l
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var s = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, s)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                s = this.options.isOriginLeft ? n.left : n.right,
                o = s + i.outerWidth,
                r = Math.floor(s / this.columnWidth);
            r = Math.max(0, r);
            var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, c = r; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";

        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var n = t.create("masonry"),
            s = n.prototype._getElementOffset,
            o = n.prototype.layout,
            r = n.prototype._getMeasurement;
        i(n.prototype, e.prototype), n.prototype._getElementOffset = s, n.prototype.layout = o, n.prototype._getMeasurement = r;
        var a = n.prototype.measureColumns;
        n.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var l = n.prototype._manageStamp;
        return n.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, n
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, s, o, r, a) {
            return e(t, i, n, s, o, r, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, s, o, r) {
        function a(t, e) {
            return function(i, n) {
                for (var s = 0, o = t.length; o > s; s++) {
                    var r = t[s],
                        a = i.sortData[r],
                        l = n.sortData[r];
                    if (a > l || l > a) {
                        var c = void 0 !== e[r] ? e[r] : e,
                            u = c ? 1 : -1;
                        return (a > l ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            c = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = document.documentElement,
            h = u.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = o, d.LayoutMode = r, d.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in r.modes) this._initLayoutMode(t)
        }, d.prototype.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, d.prototype._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
                var s = t[i];
                s.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d.prototype._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, d.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.prototype.arrange = function(t) {
            function e() {
                n.reveal(i.needReveal), n.hide(i.needHide)
            }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var n = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, d.prototype._bindArrangeComplete = function() {
            function t() {
                e && i && n && s.dispatchEvent("arrangeComplete", null, [s.filteredItems])
            }
            var e, i, n, s = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                n = !0, t()
            })
        }, d.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], s = [], o = this._getFilterTest(e), r = 0, a = t.length; a > r; r++) {
                var l = t[r];
                if (!l.isIgnored) {
                    var c = o(l);
                    c && i.push(l), c && l.isHidden ? n.push(l) : c || l.isHidden || s.push(l)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: s
            }
        }, d.prototype._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return n(e.element, t)
            }
        }, d.prototype.updateSortData = function(t) {
            var e;
            t ? (t = s.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = p(i)
            }
        }, d.prototype._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var p = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = c(t).split(" "),
                    n = i[0],
                    s = n.match(/^\[(.+)\]$/),
                    o = s && s[1],
                    r = e(o, n),
                    a = d.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(r(t))
                } : function(t) {
                    return t && r(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && h(i)
                }
            }
            return t
        }();
        d.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, d.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d.prototype._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, d.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d.prototype._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, s = e.length;
                for (i = 0; s > i; i++) n = e[i], this.element.appendChild(n.element);
                var o = this._filter(e).matches;
                for (i = 0; s > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; s > i; i++) delete e[i].isLayoutInstant;
                this.reveal(o)
            }
        };
        var f = d.prototype.remove;
        return d.prototype.remove = function(t) {
            t = s.makeArray(t);
            var e = this.getItems(t);
            f.call(this, t);
            var i = e && e.length;
            if (i)
                for (var n = 0; i > n; n++) {
                    var o = e[n];
                    s.removeFrom(this.filteredItems, o)
                }
        }, d.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, d.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, d
    }), ! function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || [];
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    s = i[n];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; s;) {
                    var r = o && o[s];
                    r && (this.off(t, s), delete o[s]), s.apply(this, e), n += r ? 0 : 1, s = i[n]
                }
                return this
            }
        }, t
    }), function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, o) {
            return this instanceof s ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new s(t, e, o)
        }

        function o(t) {
            this.img = t
        }

        function r(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var a = t.jQuery,
            l = t.console;
        s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, s.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var s = i[n];
                    this.addImage(s)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (n = 0; n < o.length; n++) {
                        var r = o[n];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return s.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var s = n && n[2];
                    s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
                }
        }, s.prototype.addImage = function(t) {
            var e = new o(t);
            this.images.push(e)
        }, s.prototype.addBackground = function(t, e) {
            var i = new r(t, e);
            this.images.push(i)
        }, s.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, s.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, o.prototype = Object.create(e.prototype), o.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, o.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, o.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, o.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, o.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype = Object.create(o.prototype), r.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, r.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, s.makeJQueryPlugin = function(e) {
            e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function(t, e) {
                var i = new s(this, t, e);
                return i.jqDeferred.promise(a(this))
            })
        }, s.makeJQueryPlugin(), s
    }), ! function() {
        "use strict";

        function t(t) {
            t.fn.swiper = function(e) {
                var n;
                return t(this).each(function() {
                    var t = new i(this, e);
                    n || (n = t)
                }), n
            }
        }
        var e, i = function(t, s) {
            function o(t) {
                return Math.floor(t)
            }

            function r() {
                w.autoplayTimeoutId = setTimeout(function() {
                    w.params.loop ? (w.fixLoop(), w._slideNext(), w.emit("onAutoplay", w)) : w.isEnd ? s.autoplayStopOnLast ? w.stopAutoplay() : (w._slideTo(0), w.emit("onAutoplay", w)) : (w._slideNext(), w.emit("onAutoplay", w))
                }, w.params.autoplay)
            }

            function a(t, i) {
                var n = e(t.target);
                if (!n.is(i))
                    if ("string" == typeof i) n = n.parents(i);
                    else if (i.nodeType) {
                    var s;
                    return n.parents().each(function(t, e) {
                        e === i && (s = i)
                    }), s ? i : void 0
                }
                return 0 !== n.length ? n[0] : void 0
            }

            function l(t, e) {
                e = e || {};
                var i = window.MutationObserver || window.WebkitMutationObserver,
                    n = new i(function(t) {
                        t.forEach(function(t) {
                            w.onResize(!0), w.emit("onObserverUpdate", w, t)
                        })
                    });
                n.observe(t, {
                    attributes: "undefined" == typeof e.attributes ? !0 : e.attributes,
                    childList: "undefined" == typeof e.childList ? !0 : e.childList,
                    characterData: "undefined" == typeof e.characterData ? !0 : e.characterData
                }), w.observers.push(n)
            }

            function c(t) {
                t.originalEvent && (t = t.originalEvent);
                var e = t.keyCode || t.charCode;
                if (!w.params.allowSwipeToNext && (w.isHorizontal() && 39 === e || !w.isHorizontal() && 40 === e)) return !1;
                if (!w.params.allowSwipeToPrev && (w.isHorizontal() && 37 === e || !w.isHorizontal() && 38 === e)) return !1;
                if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === e || 39 === e || 38 === e || 40 === e) {
                        var i = !1;
                        if (w.container.parents(".swiper-slide").length > 0 && 0 === w.container.parents(".swiper-slide-active").length) return;
                        var n = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            s = window.innerWidth,
                            o = window.innerHeight,
                            r = w.container.offset();
                        w.rtl && (r.left = r.left - w.container[0].scrollLeft);
                        for (var a = [
                                [r.left, r.top],
                                [r.left + w.width, r.top],
                                [r.left, r.top + w.height],
                                [r.left + w.width, r.top + w.height]
                            ], l = 0; l < a.length; l++) {
                            var c = a[l];
                            c[0] >= n.left && c[0] <= n.left + s && c[1] >= n.top && c[1] <= n.top + o && (i = !0)
                        }
                        if (!i) return
                    }
                    w.isHorizontal() ? ((37 === e || 39 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === e && !w.rtl || 37 === e && w.rtl) && w.slideNext(), (37 === e && !w.rtl || 39 === e && w.rtl) && w.slidePrev()) : ((38 === e || 40 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && w.slideNext(), 38 === e && w.slidePrev())
                }
            }

            function u(t) {
                t.originalEvent && (t = t.originalEvent);
                var e = w.mousewheel.event,
                    i = 0,
                    n = w.rtl ? -1 : 1;
                if ("mousewheel" === e)
                    if (w.params.mousewheelForceToAxis)
                        if (w.isHorizontal()) {
                            if (!(Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY))) return;
                            i = t.wheelDeltaX * n
                        } else {
                            if (!(Math.abs(t.wheelDeltaY) > Math.abs(t.wheelDeltaX))) return;
                            i = t.wheelDeltaY
                        }
                else i = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? -t.wheelDeltaX * n : -t.wheelDeltaY;
                else if ("DOMMouseScroll" === e) i = -t.detail;
                else if ("wheel" === e)
                    if (w.params.mousewheelForceToAxis)
                        if (w.isHorizontal()) {
                            if (!(Math.abs(t.deltaX) > Math.abs(t.deltaY))) return;
                            i = -t.deltaX * n
                        } else {
                            if (!(Math.abs(t.deltaY) > Math.abs(t.deltaX))) return;
                            i = -t.deltaY
                        }
                else i = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? -t.deltaX * n : -t.deltaY;
                if (0 !== i) {
                    if (w.params.mousewheelInvert && (i = -i), w.params.freeMode) {
                        var s = w.getWrapperTranslate() + i * w.params.mousewheelSensitivity,
                            o = w.isBeginning,
                            r = w.isEnd;
                        if (s >= w.minTranslate() && (s = w.minTranslate()), s <= w.maxTranslate() && (s = w.maxTranslate()), w.setWrapperTransition(0), w.setWrapperTranslate(s), w.updateProgress(), w.updateActiveIndex(), (!o && w.isBeginning || !r && w.isEnd) && w.updateClasses(), w.params.freeModeSticky ? (clearTimeout(w.mousewheel.timeout), w.mousewheel.timeout = setTimeout(function() {
                                w.slideReset()
                            }, 300)) : w.params.lazyLoading && w.lazy && w.lazy.load(), 0 === s || s === w.maxTranslate()) return
                    } else {
                        if ((new window.Date).getTime() - w.mousewheel.lastScrollTime > 60)
                            if (0 > i)
                                if (w.isEnd && !w.params.loop || w.animating) {
                                    if (w.params.mousewheelReleaseOnEdges) return !0
                                } else w.slideNext();
                        else if (w.isBeginning && !w.params.loop || w.animating) {
                            if (w.params.mousewheelReleaseOnEdges) return !0
                        } else w.slidePrev();
                        w.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return w.params.autoplay && w.stopAutoplay(), t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                }
            }

            function h(t, i) {
                t = e(t);
                var n, s, o, r = w.rtl ? -1 : 1;
                n = t.attr("data-swiper-parallax") || "0", s = t.attr("data-swiper-parallax-x"), o = t.attr("data-swiper-parallax-y"), s || o ? (s = s || "0", o = o || "0") : w.isHorizontal() ? (s = n, o = "0") : (o = n, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * i * r + "%" : s * i * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i + "%" : o * i + "px", t.transform("translate3d(" + s + ", " + o + ",0px)")
            }

            function d(t) {
                return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t), t
            }
            if (!(this instanceof i)) return new i(t, s);
            var p = {
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    autoplay: !1,
                    autoplayDisableOnInteraction: !0,
                    autoplayStopOnLast: !1,
                    iOSEdgeSwipeDetection: !1,
                    iOSEdgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    },
                    flip: {
                        slideShadows: !0,
                        limitRotation: !0
                    },
                    cube: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    },
                    fade: {
                        crossFade: !1
                    },
                    parallax: !1,
                    scrollbar: null,
                    scrollbarHide: !0,
                    scrollbarDraggable: !1,
                    scrollbarSnapOnRelease: !1,
                    keyboardControl: !1,
                    mousewheelControl: !1,
                    mousewheelReleaseOnEdges: !1,
                    mousewheelInvert: !1,
                    mousewheelForceToAxis: !1,
                    mousewheelSensitivity: 1,
                    hashnav: !1,
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    centeredSlides: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    onlyExternal: !1,
                    threshold: 0,
                    touchMoveStopPropagation: !0,
                    uniqueNavElements: !0,
                    pagination: null,
                    paginationElement: "span",
                    paginationClickable: !1,
                    paginationHide: !1,
                    paginationBulletRender: null,
                    paginationProgressRender: null,
                    paginationFractionRender: null,
                    paginationCustomRender: null,
                    paginationType: "bullets",
                    resistance: !0,
                    resistanceRatio: .85,
                    nextButton: null,
                    prevButton: null,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    lazyLoading: !1,
                    lazyLoadingInPrevNext: !1,
                    lazyLoadingInPrevNextAmount: 1,
                    lazyLoadingOnTransitionStart: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    control: void 0,
                    controlInverse: !1,
                    controlBy: "slide",
                    allowSwipeToPrev: !0,
                    allowSwipeToNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    slideClass: "swiper-slide",
                    slideActiveClass: "swiper-slide-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slidePrevClass: "swiper-slide-prev",
                    wrapperClass: "swiper-wrapper",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    buttonDisabledClass: "swiper-button-disabled",
                    paginationCurrentClass: "swiper-pagination-current",
                    paginationTotalClass: "swiper-pagination-total",
                    paginationHiddenClass: "swiper-pagination-hidden",
                    paginationProgressbarClass: "swiper-pagination-progressbar",
                    observer: !1,
                    observeParents: !1,
                    a11y: !1,
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    runCallbacksOnInit: !0
                },
                f = s && s.virtualTranslate;
            s = s || {};
            var m = {};
            for (var g in s)
                if ("object" != typeof s[g] || null === s[g] || s[g].nodeType || s[g] === window || s[g] === document || "undefined" != typeof n && s[g] instanceof n || "undefined" != typeof jQuery && s[g] instanceof jQuery) m[g] = s[g];
                else {
                    m[g] = {};
                    for (var v in s[g]) m[g][v] = s[g][v]
                }
            for (var y in p)
                if ("undefined" == typeof s[y]) s[y] = p[y];
                else if ("object" == typeof s[y])
                for (var b in p[y]) "undefined" == typeof s[y][b] && (s[y][b] = p[y][b]);
            var w = this;
            if (w.params = s, w.originalParams = m, w.classNames = [], "undefined" != typeof e && "undefined" != typeof n && (e = n), ("undefined" != typeof e || (e = "undefined" == typeof n ? window.Dom7 || window.Zepto || window.jQuery : n)) && (w.$ = e, w.currentBreakpoint = void 0, w.getActiveBreakpoint = function() {
                    if (!w.params.breakpoints) return !1;
                    var t, e = !1,
                        i = [];
                    for (t in w.params.breakpoints) w.params.breakpoints.hasOwnProperty(t) && i.push(t);
                    i.sort(function(t, e) {
                        return parseInt(t, 10) > parseInt(e, 10)
                    });
                    for (var n = 0; n < i.length; n++) t = i[n], t >= window.innerWidth && !e && (e = t);
                    return e || "max"
                }, w.setBreakpoint = function() {
                    var t = w.getActiveBreakpoint();
                    if (t && w.currentBreakpoint !== t) {
                        var e = t in w.params.breakpoints ? w.params.breakpoints[t] : w.originalParams,
                            i = w.params.loop && e.slidesPerView !== w.params.slidesPerView;
                        for (var n in e) w.params[n] = e[n];
                        w.currentBreakpoint = t, i && w.destroyLoop && w.reLoop(!0)
                    }
                }, w.params.breakpoints && w.setBreakpoint(), w.container = e(t), 0 !== w.container.length)) {
                if (w.container.length > 1) {
                    var x = [];
                    return w.container.each(function() {
                        x.push(new i(this, s))
                    }), x
                }
                w.container[0].swiper = w, w.container.data("swiper", w), w.classNames.push("swiper-container-" + w.params.direction), w.params.freeMode && w.classNames.push("swiper-container-free-mode"), w.support.flexbox || (w.classNames.push("swiper-container-no-flexbox"), w.params.slidesPerColumn = 1), w.params.autoHeight && ww.classNames.push("swiper-container-autoheight"), (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, w.classNames.push("swiper-container-3d")) : w.params.effect = "slide"), "slide" !== w.params.effect && w.classNames.push("swiper-container-" + w.params.effect), "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, w.params.spaceBetween = 0, w.params.virtualTranslate = !0, w.params.setWrapperSize = !1), ("fade" === w.params.effect || "flip" === w.params.effect) && (w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, w.params.spaceBetween = 0, w.params.setWrapperSize = !1, "undefined" == typeof f && (w.params.virtualTranslate = !0)), w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1), w.wrapper = w.container.children("." + w.params.wrapperClass), w.params.pagination && (w.paginationContainer = e(w.params.pagination), w.params.uniqueNavElements && "string" == typeof w.params.pagination && w.paginationContainer.length > 1 && 1 === w.container.find(w.params.pagination).length && (w.paginationContainer = w.container.find(w.params.pagination)), "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass("swiper-pagination-clickable") : w.params.paginationClickable = !1, w.paginationContainer.addClass("swiper-pagination-" + w.params.paginationType)), (w.params.nextButton || w.params.prevButton) && (w.params.nextButton && (w.nextButton = e(w.params.nextButton), w.params.uniqueNavElements && "string" == typeof w.params.nextButton && w.nextButton.length > 1 && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))), w.params.prevButton && (w.prevButton = e(w.params.prevButton), w.params.uniqueNavElements && "string" == typeof w.params.prevButton && w.prevButton.length > 1 && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))), w.isHorizontal = function() {
                    return "horizontal" === w.params.direction
                }, w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")), w.rtl && w.classNames.push("swiper-container-rtl"), w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")), w.params.slidesPerColumn > 1 && w.classNames.push("swiper-container-multirow"), w.device.android && w.classNames.push("swiper-container-android"), w.container.addClass(w.classNames.join(" ")), w.translate = 0, w.progress = 0, w.velocity = 0, w.lockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !1
                }, w.lockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !1
                }, w.lockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1
                }, w.unlockSwipeToNext = function() {
                    w.params.allowSwipeToNext = !0
                }, w.unlockSwipeToPrev = function() {
                    w.params.allowSwipeToPrev = !0
                }, w.unlockSwipes = function() {
                    w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0
                }, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab"), w.imagesToLoad = [], w.imagesLoaded = 0, w.loadImage = function(t, e, i, n, s) {
                    function o() {
                        s && s()
                    }
                    var r;
                    t.complete && n ? o() : e ? (r = new window.Image, r.onload = o, r.onerror = o, i && (r.srcset = i), e && (r.src = e)) : o()
                }, w.preloadImages = function() {
                    function t() {
                        "undefined" != typeof w && null !== w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)))
                    }
                    w.imagesToLoad = w.container.find("img");
                    for (var e = 0; e < w.imagesToLoad.length; e++) w.loadImage(w.imagesToLoad[e], w.imagesToLoad[e].currentSrc || w.imagesToLoad[e].getAttribute("src"), w.imagesToLoad[e].srcset || w.imagesToLoad[e].getAttribute("srcset"), !0, t)
                }, w.autoplayTimeoutId = void 0, w.autoplaying = !1, w.autoplayPaused = !1, w.startAutoplay = function() {
                    return "undefined" != typeof w.autoplayTimeoutId ? !1 : w.params.autoplay ? w.autoplaying ? !1 : (w.autoplaying = !0, w.emit("onAutoplayStart", w), void r()) : !1
                }, w.stopAutoplay = function(t) {
                    w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplaying = !1, w.autoplayTimeoutId = void 0, w.emit("onAutoplayStop", w))
                }, w.pauseAutoplay = function(t) {
                    w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId), w.autoplayPaused = !0, 0 === t ? (w.autoplayPaused = !1, r()) : w.wrapper.transitionEnd(function() {
                        w && (w.autoplayPaused = !1, w.autoplaying ? r() : w.stopAutoplay())
                    }))
                }, w.minTranslate = function() {
                    return -w.snapGrid[0]
                }, w.maxTranslate = function() {
                    return -w.snapGrid[w.snapGrid.length - 1]
                }, w.updateAutoHeight = function() {
                    var t = w.slides.eq(w.activeIndex)[0];
                    if ("undefined" != typeof t) {
                        var e = t.offsetHeight;
                        e && w.wrapper.css("height", e + "px")
                    }
                }, w.updateContainerSize = function() {
                    var t, e;
                    t = "undefined" != typeof w.params.width ? w.params.width : w.container[0].clientWidth, e = "undefined" != typeof w.params.height ? w.params.height : w.container[0].clientHeight, 0 === t && w.isHorizontal() || 0 === e && !w.isHorizontal() || (t = t - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), e = e - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), w.width = t, w.height = e, w.size = w.isHorizontal() ? w.width : w.height)
                }, w.updateSlidesSize = function() {
                    w.slides = w.wrapper.children("." + w.params.slideClass), w.snapGrid = [], w.slidesGrid = [], w.slidesSizesGrid = [];
                    var t, e = w.params.spaceBetween,
                        i = -w.params.slidesOffsetBefore,
                        n = 0,
                        s = 0;
                    if ("undefined" != typeof w.size) {
                        "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * w.size), w.virtualSize = -e, w.rtl ? w.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : w.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var r;
                        w.params.slidesPerColumn > 1 && (r = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn, "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (r = Math.max(r, w.params.slidesPerView * w.params.slidesPerColumn)));
                        var a, l = w.params.slidesPerColumn,
                            c = r / l,
                            u = c - (w.params.slidesPerColumn * c - w.slides.length);
                        for (t = 0; t < w.slides.length; t++) {
                            a = 0;
                            var h = w.slides.eq(t);
                            if (w.params.slidesPerColumn > 1) {
                                var d, p, f;
                                "column" === w.params.slidesPerColumnFill ? (p = Math.floor(t / l), f = t - p * l, (p > u || p === u && f === l - 1) && ++f >= l && (f = 0, p++), d = p + f * r / l, h.css({
                                    "-webkit-box-ordinal-group": d,
                                    "-moz-box-ordinal-group": d,
                                    "-ms-flex-order": d,
                                    "-webkit-order": d,
                                    order: d
                                })) : (f = Math.floor(t / c), p = t - f * c), h.css({
                                    "margin-top": 0 !== f && w.params.spaceBetween && w.params.spaceBetween + "px"
                                }).attr("data-swiper-column", p).attr("data-swiper-row", f)
                            }
                            "none" !== h.css("display") && ("auto" === w.params.slidesPerView ? (a = w.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0), w.params.roundLengths && (a = o(a))) : (a = (w.size - (w.params.slidesPerView - 1) * e) / w.params.slidesPerView, w.params.roundLengths && (a = o(a)), w.isHorizontal() ? w.slides[t].style.width = a + "px" : w.slides[t].style.height = a + "px"), w.slides[t].swiperSlideSize = a, w.slidesSizesGrid.push(a), w.params.centeredSlides ? (i = i + a / 2 + n / 2 + e, 0 === t && (i = i - w.size / 2 - e), Math.abs(i) < .001 && (i = 0), s % w.params.slidesPerGroup === 0 && w.snapGrid.push(i), w.slidesGrid.push(i)) : (s % w.params.slidesPerGroup === 0 && w.snapGrid.push(i), w.slidesGrid.push(i), i = i + a + e), w.virtualSize += a + e, n = a, s++)
                        }
                        w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                        var m;
                        if (w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
                                width: w.virtualSize + w.params.spaceBetween + "px"
                            }), (!w.support.flexbox || w.params.setWrapperSize) && (w.isHorizontal() ? w.wrapper.css({
                                width: w.virtualSize + w.params.spaceBetween + "px"
                            }) : w.wrapper.css({
                                height: w.virtualSize + w.params.spaceBetween + "px"
                            })), w.params.slidesPerColumn > 1 && (w.virtualSize = (a + w.params.spaceBetween) * r, w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, w.wrapper.css({
                                width: w.virtualSize + w.params.spaceBetween + "px"
                            }), w.params.centeredSlides)) {
                            for (m = [], t = 0; t < w.snapGrid.length; t++) w.snapGrid[t] < w.virtualSize + w.snapGrid[0] && m.push(w.snapGrid[t]);
                            w.snapGrid = m
                        }
                        if (!w.params.centeredSlides) {
                            for (m = [], t = 0; t < w.snapGrid.length; t++) w.snapGrid[t] <= w.virtualSize - w.size && m.push(w.snapGrid[t]);
                            w.snapGrid = m, Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) > 1 && w.snapGrid.push(w.virtualSize - w.size)
                        }
                        0 === w.snapGrid.length && (w.snapGrid = [0]), 0 !== w.params.spaceBetween && (w.isHorizontal() ? w.rtl ? w.slides.css({
                            marginLeft: e + "px"
                        }) : w.slides.css({
                            marginRight: e + "px"
                        }) : w.slides.css({
                            marginBottom: e + "px"
                        })), w.params.watchSlidesProgress && w.updateSlidesOffset()
                    }
                }, w.updateSlidesOffset = function() {
                    for (var t = 0; t < w.slides.length; t++) w.slides[t].swiperSlideOffset = w.isHorizontal() ? w.slides[t].offsetLeft : w.slides[t].offsetTop
                }, w.updateSlidesProgress = function(t) {
                    if ("undefined" == typeof t && (t = w.translate || 0), 0 !== w.slides.length) {
                        "undefined" == typeof w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                        var e = -t;
                        w.rtl && (e = t), w.slides.removeClass(w.params.slideVisibleClass);
                        for (var i = 0; i < w.slides.length; i++) {
                            var n = w.slides[i],
                                s = (e - n.swiperSlideOffset) / (n.swiperSlideSize + w.params.spaceBetween);
                            if (w.params.watchSlidesVisibility) {
                                var o = -(e - n.swiperSlideOffset),
                                    r = o + w.slidesSizesGrid[i],
                                    a = o >= 0 && o < w.size || r > 0 && r <= w.size || 0 >= o && r >= w.size;
                                a && w.slides.eq(i).addClass(w.params.slideVisibleClass)
                            }
                            n.progress = w.rtl ? -s : s
                        }
                    }
                }, w.updateProgress = function(t) {
                    "undefined" == typeof t && (t = w.translate || 0);
                    var e = w.maxTranslate() - w.minTranslate(),
                        i = w.isBeginning,
                        n = w.isEnd;
                    0 === e ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (t - w.minTranslate()) / e, w.isBeginning = w.progress <= 0, w.isEnd = w.progress >= 1), w.isBeginning && !i && w.emit("onReachBeginning", w), w.isEnd && !n && w.emit("onReachEnd", w), w.params.watchSlidesProgress && w.updateSlidesProgress(t), w.emit("onProgress", w, w.progress)
                }, w.updateActiveIndex = function() {
                    var t, e, i, n = w.rtl ? w.translate : -w.translate;
                    for (e = 0; e < w.slidesGrid.length; e++) "undefined" != typeof w.slidesGrid[e + 1] ? n >= w.slidesGrid[e] && n < w.slidesGrid[e + 1] - (w.slidesGrid[e + 1] - w.slidesGrid[e]) / 2 ? t = e : n >= w.slidesGrid[e] && n < w.slidesGrid[e + 1] && (t = e + 1) : n >= w.slidesGrid[e] && (t = e);
                    (0 > t || "undefined" == typeof t) && (t = 0), i = Math.floor(t / w.params.slidesPerGroup), i >= w.snapGrid.length && (i = w.snapGrid.length - 1), t !== w.activeIndex && (w.snapIndex = i, w.previousIndex = w.activeIndex, w.activeIndex = t, w.updateClasses())
                }, w.updateClasses = function() {
                    w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass);
                    var t = w.slides.eq(w.activeIndex);
                    t.addClass(w.params.slideActiveClass);
                    var i = t.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                    w.params.loop && 0 === i.length && w.slides.eq(0).addClass(w.params.slideNextClass);
                    var n = t.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                    if (w.params.loop && 0 === n.length && w.slides.eq(-1).addClass(w.params.slidePrevClass), w.paginationContainer && w.paginationContainer.length > 0) {
                        var s, o = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                        if (w.params.loop ? (s = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup), s > w.slides.length - 1 - 2 * w.loopedSlides && (s -= w.slides.length - 2 * w.loopedSlides), s > o - 1 && (s -= o), 0 > s && "bullets" !== w.params.paginationType && (s = o + s)) : s = "undefined" != typeof w.snapIndex ? w.snapIndex : w.activeIndex || 0, "bullets" === w.params.paginationType && w.bullets && w.bullets.length > 0 && (w.bullets.removeClass(w.params.bulletActiveClass), w.paginationContainer.length > 1 ? w.bullets.each(function() {
                                e(this).index() === s && e(this).addClass(w.params.bulletActiveClass)
                            }) : w.bullets.eq(s).addClass(w.params.bulletActiveClass)), "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(s + 1), w.paginationContainer.find("." + w.params.paginationTotalClass).text(o)), "progress" === w.params.paginationType) {
                            var r = (s + 1) / o,
                                a = r,
                                l = 1;
                            w.isHorizontal() || (l = r, a = 1), w.paginationContainer.find("." + w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + a + ") scaleY(" + l + ")").transition(w.params.speed)
                        }
                        "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, s + 1, o)), w.emit("onPaginationRendered", w, w.paginationContainer[0]))
                    }
                    w.params.loop || (w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.isBeginning ? (w.prevButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.prevButton)) : (w.prevButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.isEnd ? (w.nextButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.nextButton)) : (w.nextButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))))
                }, w.updatePagination = function() {
                    if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                        var t = "";
                        if ("bullets" === w.params.paginationType) {
                            for (var e = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, i = 0; e > i; i++) t += w.params.paginationBulletRender ? w.params.paginationBulletRender(i, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                            w.paginationContainer.html(t), w.bullets = w.paginationContainer.find("." + w.params.bulletClass), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
                        }
                        "fraction" === w.params.paginationType && (t = w.params.paginationFractionRender ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass) : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>', w.paginationContainer.html(t)), "progress" === w.params.paginationType && (t = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>', w.paginationContainer.html(t)), "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0])
                    }
                }, w.update = function(t) {
                    function e() {
                        n = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()), w.setWrapperTranslate(n), w.updateActiveIndex(), w.updateClasses()
                    }
                    if (w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), t) {
                        var i, n;
                        w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode ? (e(), w.params.autoHeight && w.updateAutoHeight()) : (i = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0), i || e())
                    } else w.params.autoHeight && w.updateAutoHeight()
                }, w.onResize = function(t) {
                    w.params.breakpoints && w.setBreakpoint();
                    var e = w.params.allowSwipeToPrev,
                        i = w.params.allowSwipeToNext;
                    w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || t) && w.updatePagination(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0);
                    var n = !1;
                    if (w.params.freeMode) {
                        var s = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                        w.setWrapperTranslate(s), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight()
                    } else w.updateClasses(), n = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                    w.params.lazyLoading && !n && w.lazy && w.lazy.load(), w.params.allowSwipeToPrev = e, w.params.allowSwipeToNext = i
                };
                var C = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? C = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (C = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), w.touchEvents = {
                    start: w.support.touch || !w.params.simulateTouch ? "touchstart" : C[0],
                    move: w.support.touch || !w.params.simulateTouch ? "touchmove" : C[1],
                    end: w.support.touch || !w.params.simulateTouch ? "touchend" : C[2]
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction), w.initEvents = function(t) {
                    var e = t ? "off" : "on",
                        i = t ? "removeEventListener" : "addEventListener",
                        n = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
                        o = w.support.touch ? n : document,
                        r = w.params.nested ? !0 : !1;
                    w.browser.ie ? (n[i](w.touchEvents.start, w.onTouchStart, !1), o[i](w.touchEvents.move, w.onTouchMove, r), o[i](w.touchEvents.end, w.onTouchEnd, !1)) : (w.support.touch && (n[i](w.touchEvents.start, w.onTouchStart, !1), n[i](w.touchEvents.move, w.onTouchMove, r), n[i](w.touchEvents.end, w.onTouchEnd, !1)), !s.simulateTouch || w.device.ios || w.device.android || (n[i]("mousedown", w.onTouchStart, !1), document[i]("mousemove", w.onTouchMove, r), document[i]("mouseup", w.onTouchEnd, !1))), window[i]("resize", w.onResize), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.nextButton[e]("click", w.onClickNext), w.params.a11y && w.a11y && w.nextButton[e]("keydown", w.a11y.onEnterKey)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.prevButton[e]("click", w.onClickPrev), w.params.a11y && w.a11y && w.prevButton[e]("keydown", w.a11y.onEnterKey)), w.params.pagination && w.params.paginationClickable && (w.paginationContainer[e]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && w.paginationContainer[e]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)), (w.params.preventClicks || w.params.preventClicksPropagation) && n[i]("click", w.preventClicks, !0)
                }, w.attachEvents = function() {
                    w.initEvents()
                }, w.detachEvents = function() {
                    w.initEvents(!0)
                }, w.allowClick = !0, w.preventClicks = function(t) {
                    w.allowClick || (w.params.preventClicks && t.preventDefault(), w.params.preventClicksPropagation && w.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                }, w.onClickNext = function(t) {
                    t.preventDefault(), (!w.isEnd || w.params.loop) && w.slideNext()
                }, w.onClickPrev = function(t) {
                    t.preventDefault(), (!w.isBeginning || w.params.loop) && w.slidePrev()
                }, w.onClickIndex = function(t) {
                    t.preventDefault();
                    var i = e(this).index() * w.params.slidesPerGroup;
                    w.params.loop && (i += w.loopedSlides), w.slideTo(i)
                }, w.updateClickedSlide = function(t) {
                    var i = a(t, "." + w.params.slideClass),
                        n = !1;
                    if (i)
                        for (var s = 0; s < w.slides.length; s++) w.slides[s] === i && (n = !0);
                    if (!i || !n) return w.clickedSlide = void 0, void(w.clickedIndex = void 0);
                    if (w.clickedSlide = i, w.clickedIndex = e(i).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                        var o, r = w.clickedIndex;
                        if (w.params.loop) {
                            if (w.animating) return;
                            o = e(w.clickedSlide).attr("data-swiper-slide-index"), w.params.centeredSlides ? r < w.loopedSlides - w.params.slidesPerView / 2 || r > w.slides.length - w.loopedSlides + w.params.slidesPerView / 2 ? (w.fixLoop(), r = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                w.slideTo(r)
                            }, 0)) : w.slideTo(r) : r > w.slides.length - w.params.slidesPerView ? (w.fixLoop(), r = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                w.slideTo(r)
                            }, 0)) : w.slideTo(r)
                        } else w.slideTo(r)
                    }
                };
                var _, S, T, E, k, A, I, L, P, M, D = "input, select, textarea, button",
                    z = Date.now(),
                    N = [];
                w.animating = !1, w.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var O, B;
                if (w.onTouchStart = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), O = "touchstart" === t.type, O || !("which" in t) || 3 !== t.which) {
                            if (w.params.noSwiping && a(t, "." + w.params.noSwipingClass)) return void(w.allowClick = !0);
                            if (!w.params.swipeHandler || a(t, w.params.swipeHandler)) {
                                var i = w.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                    n = w.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && i <= w.params.iOSEdgeSwipeThreshold)) {
                                    if (_ = !0, S = !1, T = !0, k = void 0, B = void 0, w.touches.startX = i, w.touches.startY = n, E = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, w.params.threshold > 0 && (L = !1), "touchstart" !== t.type) {
                                        var s = !0;
                                        e(t.target).is(D) && (s = !1), document.activeElement && e(document.activeElement).is(D) && document.activeElement.blur(), s && t.preventDefault()
                                    }
                                    w.emit("onTouchStart", w, t)
                                }
                            }
                        }
                    }, w.onTouchMove = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), !O || "mousemove" !== t.type) {
                            if (t.preventedByNestedSwiper) return w.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(w.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                            if (w.params.onlyExternal) return w.allowClick = !1, void(_ && (w.touches.startX = w.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, w.touches.startY = w.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, E = Date.now()));
                            if (O && document.activeElement && t.target === document.activeElement && e(t.target).is(D)) return S = !0, void(w.allowClick = !1);
                            if (T && w.emit("onTouchMove", w, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                if (w.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, w.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof k) {
                                    var i = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI;
                                    k = w.isHorizontal() ? i > w.params.touchAngle : 90 - i > w.params.touchAngle
                                }
                                if (k && w.emit("onTouchMoveOpposite", w, t), "undefined" == typeof B && w.browser.ieTouch && (w.touches.currentX !== w.touches.startX || w.touches.currentY !== w.touches.startY) && (B = !0), _) {
                                    if (k) return void(_ = !1);
                                    if (B || !w.browser.ieTouch) {
                                        w.allowClick = !1, w.emit("onSliderMove", w, t), t.preventDefault(), w.params.touchMoveStopPropagation && !w.params.nested && t.stopPropagation(), S || (s.loop && w.fixLoop(), I = w.getWrapperTranslate(), w.setWrapperTransition(0), w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), M = !1, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grabbing", w.container[0].style.cursor = "-moz-grabbin", w.container[0].style.cursor = "grabbing")), S = !0;
                                        var n = w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
                                        n *= w.params.touchRatio, w.rtl && (n = -n), w.swipeDirection = n > 0 ? "prev" : "next", A = n + I;
                                        var o = !0;
                                        if (n > 0 && A > w.minTranslate() ? (o = !1, w.params.resistance && (A = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + I + n, w.params.resistanceRatio))) : 0 > n && A < w.maxTranslate() && (o = !1, w.params.resistance && (A = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - I - n, w.params.resistanceRatio))), o && (t.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && I > A && (A = I), !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && A > I && (A = I), w.params.followFinger) {
                                            if (w.params.threshold > 0) {
                                                if (!(Math.abs(n) > w.params.threshold || L)) return void(A = I);
                                                if (!L) return L = !0, w.touches.startX = w.touches.currentX, w.touches.startY = w.touches.currentY, A = I, void(w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                            }(w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(), w.params.freeMode && (0 === N.length && N.push({
                                                position: w.touches[w.isHorizontal() ? "startX" : "startY"],
                                                time: E
                                            }), N.push({
                                                position: w.touches[w.isHorizontal() ? "currentX" : "currentY"],
                                                time: (new window.Date).getTime()
                                            })), w.updateProgress(A), w.setWrapperTranslate(A)
                                        }
                                    }
                                }
                            }
                        }
                    }, w.onTouchEnd = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), T && w.emit("onTouchEnd", w, t), T = !1, _) {
                            w.params.grabCursor && S && _ && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab");
                            var i = Date.now(),
                                n = i - E;
                            if (w.allowClick && (w.updateClickedSlide(t), w.emit("onTap", w, t), 300 > n && i - z > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                                    w && (w.params.paginationHide && w.paginationContainer.length > 0 && !e(t.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), w.emit("onClick", w, t))
                                }, 300)), 300 > n && 300 > i - z && (P && clearTimeout(P), w.emit("onDoubleTap", w, t))), z = Date.now(), setTimeout(function() {
                                    w && (w.allowClick = !0)
                                }, 0), !_ || !S || !w.swipeDirection || 0 === w.touches.diff || A === I) return void(_ = S = !1);
                            _ = S = !1;
                            var s;
                            if (s = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -A, w.params.freeMode) {
                                if (s < -w.minTranslate()) return void w.slideTo(w.activeIndex);
                                if (s > -w.maxTranslate()) return void(w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                                if (w.params.freeModeMomentum) {
                                    if (N.length > 1) {
                                        var o = N.pop(),
                                            r = N.pop(),
                                            a = o.position - r.position,
                                            l = o.time - r.time;
                                        w.velocity = a / l, w.velocity = w.velocity / 2, Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0), (l > 150 || (new window.Date).getTime() - o.time > 300) && (w.velocity = 0)
                                    } else w.velocity = 0;
                                    N.length = 0;
                                    var c = 1e3 * w.params.freeModeMomentumRatio,
                                        u = w.velocity * c,
                                        h = w.translate + u;
                                    w.rtl && (h = -h);
                                    var d, p = !1,
                                        f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                                    if (h < w.maxTranslate()) w.params.freeModeMomentumBounce ? (h + w.maxTranslate() < -f && (h = w.maxTranslate() - f), d = w.maxTranslate(), p = !0, M = !0) : h = w.maxTranslate();
                                    else if (h > w.minTranslate()) w.params.freeModeMomentumBounce ? (h - w.minTranslate() > f && (h = w.minTranslate() + f), d = w.minTranslate(), p = !0, M = !0) : h = w.minTranslate();
                                    else if (w.params.freeModeSticky) {
                                        var m, g = 0;
                                        for (g = 0; g < w.snapGrid.length; g += 1)
                                            if (w.snapGrid[g] > -h) {
                                                m = g;
                                                break
                                            }
                                        h = Math.abs(w.snapGrid[m] - h) < Math.abs(w.snapGrid[m - 1] - h) || "next" === w.swipeDirection ? w.snapGrid[m] : w.snapGrid[m - 1], w.rtl || (h = -h)
                                    }
                                    if (0 !== w.velocity) c = w.rtl ? Math.abs((-h - w.translate) / w.velocity) : Math.abs((h - w.translate) / w.velocity);
                                    else if (w.params.freeModeSticky) return void w.slideReset();
                                    w.params.freeModeMomentumBounce && p ? (w.updateProgress(d), w.setWrapperTransition(c), w.setWrapperTranslate(h), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function() {
                                        w && M && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), w.setWrapperTranslate(d), w.wrapper.transitionEnd(function() {
                                            w && w.onTransitionEnd()
                                        }))
                                    })) : w.velocity ? (w.updateProgress(h), w.setWrapperTransition(c), w.setWrapperTranslate(h), w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                                        w && w.onTransitionEnd()
                                    }))) : w.updateProgress(h), w.updateActiveIndex()
                                }
                                return void((!w.params.freeModeMomentum || n >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()))
                            }
                            var v, y = 0,
                                b = w.slidesSizesGrid[0];
                            for (v = 0; v < w.slidesGrid.length; v += w.params.slidesPerGroup) "undefined" != typeof w.slidesGrid[v + w.params.slidesPerGroup] ? s >= w.slidesGrid[v] && s < w.slidesGrid[v + w.params.slidesPerGroup] && (y = v, b = w.slidesGrid[v + w.params.slidesPerGroup] - w.slidesGrid[v]) : s >= w.slidesGrid[v] && (y = v, b = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                            var x = (s - w.slidesGrid[y]) / b;
                            if (n > w.params.longSwipesMs) {
                                if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && (x >= w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y)), "prev" === w.swipeDirection && (x > 1 - w.params.longSwipesRatio ? w.slideTo(y + w.params.slidesPerGroup) : w.slideTo(y))
                            } else {
                                if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && w.slideTo(y + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(y)
                            }
                        }
                    }, w._slideTo = function(t, e) {
                        return w.slideTo(t, e, !0, !0)
                    }, w.slideTo = function(t, e, i, n) {
                        "undefined" == typeof i && (i = !0), "undefined" == typeof t && (t = 0), 0 > t && (t = 0), w.snapIndex = Math.floor(t / w.params.slidesPerGroup), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                        var s = -w.snapGrid[w.snapIndex];
                        w.params.autoplay && w.autoplaying && (n || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(e) : w.stopAutoplay()), w.updateProgress(s);
                        for (var o = 0; o < w.slidesGrid.length; o++) - Math.floor(100 * s) >= Math.floor(100 * w.slidesGrid[o]) && (t = o);
                        return !w.params.allowSwipeToNext && s < w.translate && s < w.minTranslate() ? !1 : !w.params.allowSwipeToPrev && s > w.translate && s > w.maxTranslate() && (w.activeIndex || 0) !== t ? !1 : ("undefined" == typeof e && (e = w.params.speed), w.previousIndex = w.activeIndex || 0, w.activeIndex = t, w.rtl && -s === w.translate || !w.rtl && s === w.translate ? (w.params.autoHeight && w.updateAutoHeight(), w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(s), !1) : (w.updateClasses(), w.onTransitionStart(i), 0 === e ? (w.setWrapperTranslate(s), w.setWrapperTransition(0), w.onTransitionEnd(i)) : (w.setWrapperTranslate(s), w.setWrapperTransition(e), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                            w && w.onTransitionEnd(i)
                        }))), !0))
                    }, w.onTransitionStart = function(t) {
                        "undefined" == typeof t && (t = !0), w.params.autoHeight && w.updateAutoHeight(), w.lazy && w.lazy.onTransitionStart(), t && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)))
                    }, w.onTransitionEnd = function(t) {
                        w.animating = !1, w.setWrapperTransition(0), "undefined" == typeof t && (t = !0), w.lazy && w.lazy.onTransitionEnd(), t && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))), w.params.hashnav && w.hashnav && w.hashnav.setHash()
                    }, w.slideNext = function(t, e, i) {
                        return w.params.loop ? w.animating ? !1 : (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex + w.params.slidesPerGroup, e, t, i)) : w.slideTo(w.activeIndex + w.params.slidesPerGroup, e, t, i)
                    }, w._slideNext = function(t) {
                        return w.slideNext(!0, t, !0)
                    }, w.slidePrev = function(t, e, i) {
                        return w.params.loop ? w.animating ? !1 : (w.fixLoop(), w.container[0].clientLeft, w.slideTo(w.activeIndex - 1, e, t, i)) : w.slideTo(w.activeIndex - 1, e, t, i)
                    }, w._slidePrev = function(t) {
                        return w.slidePrev(!0, t, !0)
                    }, w.slideReset = function(t, e, i) {
                        return w.slideTo(w.activeIndex, e, t)
                    }, w.setWrapperTransition = function(t, e) {
                        w.wrapper.transition(t), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(t), w.params.parallax && w.parallax && w.parallax.setTransition(t), w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(t), w.params.control && w.controller && w.controller.setTransition(t, e), w.emit("onSetTransition", w, t)
                    }, w.setWrapperTranslate = function(t, e, i) {
                        var n = 0,
                            s = 0,
                            r = 0;
                        w.isHorizontal() ? n = w.rtl ? -t : t : s = t, w.params.roundLengths && (n = o(n), s = o(s)), w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + n + "px, " + s + "px, " + r + "px)") : w.wrapper.transform("translate(" + n + "px, " + s + "px)")), w.translate = w.isHorizontal() ? n : s;
                        var a, l = w.maxTranslate() - w.minTranslate();
                        a = 0 === l ? 0 : (t - w.minTranslate()) / l, a !== w.progress && w.updateProgress(t), e && w.updateActiveIndex(), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate), w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate), w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate), w.params.control && w.controller && w.controller.setTranslate(w.translate, i), w.emit("onSetTranslate", w, w.translate)
                    }, w.getTranslate = function(t, e) {
                        var i, n, s, o;
                        return "undefined" == typeof e && (e = "x"), w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (s = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? (n = s.transform || s.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function(t) {
                            return t.replace(",", ".")
                        }).join(", ")), o = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = o.toString().split(",")), "x" === e && (n = window.WebKitCSSMatrix ? o.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (n = window.WebKitCSSMatrix ? o.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), w.rtl && n && (n = -n), n || 0)
                    }, w.getWrapperTranslate = function(t) {
                        return "undefined" == typeof t && (t = w.isHorizontal() ? "x" : "y"), w.getTranslate(w.wrapper[0], t)
                    }, w.observers = [], w.initObservers = function() {
                        if (w.params.observeParents)
                            for (var t = w.container.parents(), e = 0; e < t.length; e++) l(t[e]);
                        l(w.container[0], {
                            childList: !1
                        }), l(w.wrapper[0], {
                            attributes: !1
                        })
                    }, w.disconnectObservers = function() {
                        for (var t = 0; t < w.observers.length; t++) w.observers[t].disconnect();
                        w.observers = []
                    }, w.createLoop = function() {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                        var t = w.wrapper.children("." + w.params.slideClass);
                        "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = t.length), w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10), w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides, w.loopedSlides > t.length && (w.loopedSlides = t.length);
                        var i, n = [],
                            s = [];
                        for (t.each(function(i, o) {
                                var r = e(this);
                                i < w.loopedSlides && s.push(o), i < t.length && i >= t.length - w.loopedSlides && n.push(o), r.attr("data-swiper-slide-index", i)
                            }), i = 0; i < s.length; i++) w.wrapper.append(e(s[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                        for (i = n.length - 1; i >= 0; i--) w.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
                    }, w.destroyLoop = function() {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(), w.slides.removeAttr("data-swiper-slide-index")
                    }, w.reLoop = function(t) {
                        var e = w.activeIndex - w.loopedSlides;
                        w.destroyLoop(), w.createLoop(), w.updateSlidesSize(), t && w.slideTo(e + w.loopedSlides, 0, !1)
                    }, w.fixLoop = function() {
                        var t;
                        w.activeIndex < w.loopedSlides ? (t = w.slides.length - 3 * w.loopedSlides + w.activeIndex, t += w.loopedSlides, w.slideTo(t, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (t = -w.slides.length + w.activeIndex + w.loopedSlides, t += w.loopedSlides, w.slideTo(t, 0, !1, !0))
                    }, w.appendSlide = function(t) {
                        if (w.params.loop && w.destroyLoop(), "object" == typeof t && t.length)
                            for (var e = 0; e < t.length; e++) t[e] && w.wrapper.append(t[e]);
                        else w.wrapper.append(t);
                        w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0)
                    }, w.prependSlide = function(t) {
                        w.params.loop && w.destroyLoop();
                        var e = w.activeIndex + 1;
                        if ("object" == typeof t && t.length) {
                            for (var i = 0; i < t.length; i++) t[i] && w.wrapper.prepend(t[i]);
                            e = w.activeIndex + t.length
                        } else w.wrapper.prepend(t);
                        w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.slideTo(e, 0, !1)
                    }, w.removeSlide = function(t) {
                        w.params.loop && (w.destroyLoop(), w.slides = w.wrapper.children("." + w.params.slideClass));
                        var e, i = w.activeIndex;
                        if ("object" == typeof t && t.length) {
                            for (var n = 0; n < t.length; n++) e = t[n], w.slides[e] && w.slides.eq(e).remove(), i > e && i--;
                            i = Math.max(i, 0)
                        } else e = t, w.slides[e] && w.slides.eq(e).remove(), i > e && i--, i = Math.max(i, 0);
                        w.params.loop && w.createLoop(), w.params.observer && w.support.observer || w.update(!0), w.params.loop ? w.slideTo(i + w.loopedSlides, 0, !1) : w.slideTo(i, 0, !1)
                    }, w.removeAllSlides = function() {
                        for (var t = [], e = 0; e < w.slides.length; e++) t.push(e);
                        w.removeSlide(t)
                    }, w.effects = {
                        fade: {
                            setTranslate: function() {
                                for (var t = 0; t < w.slides.length; t++) {
                                    var e = w.slides.eq(t),
                                        i = e[0].swiperSlideOffset,
                                        n = -i;
                                    w.params.virtualTranslate || (n -= w.translate);
                                    var s = 0;
                                    w.isHorizontal() || (s = n, n = 0);
                                    var o = w.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                    e.css({
                                        opacity: o
                                    }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                                }
                            },
                            setTransition: function(t) {
                                if (w.slides.transition(t), w.params.virtualTranslate && 0 !== t) {
                                    var e = !1;
                                    w.slides.transitionEnd(function() {
                                        if (!e && w) {
                                            e = !0, w.animating = !1;
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++) w.wrapper.trigger(t[i])
                                        }
                                    })
                                }
                            }
                        },
                        flip: {
                            setTranslate: function() {
                                for (var t = 0; t < w.slides.length; t++) {
                                    var i = w.slides.eq(t),
                                        n = i[0].progress;
                                    w.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                    var s = i[0].swiperSlideOffset,
                                        o = -180 * n,
                                        r = o,
                                        a = 0,
                                        l = -s,
                                        c = 0;
                                    if (w.isHorizontal() ? w.rtl && (r = -r) : (c = l, l = 0, a = -r, r = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + w.slides.length, w.params.flip.slideShadows) {
                                        var u = w.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            h = w.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                        0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), i.append(u)), 0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(h)), u.length && (u[0].style.opacity = Math.max(-n, 0)), h.length && (h[0].style.opacity = Math.max(n, 0))
                                    }
                                    i.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + a + "deg) rotateY(" + r + "deg)")
                                }
                            },
                            setTransition: function(t) {
                                if (w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), w.params.virtualTranslate && 0 !== t) {
                                    var i = !1;
                                    w.slides.eq(w.activeIndex).transitionEnd(function() {
                                        if (!i && w && e(this).hasClass(w.params.slideActiveClass)) {
                                            i = !0, w.animating = !1;
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++) w.wrapper.trigger(t[n])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var t, i = 0;
                                w.params.cube.shadow && (w.isHorizontal() ? (t = w.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), w.wrapper.append(t)), t.css({
                                    height: w.width + "px"
                                })) : (t = w.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), w.container.append(t))));
                                for (var n = 0; n < w.slides.length; n++) {
                                    var s = w.slides.eq(n),
                                        o = 90 * n,
                                        r = Math.floor(o / 360);
                                    w.rtl && (o = -o, r = Math.floor(-o / 360));
                                    var a = Math.max(Math.min(s[0].progress, 1), -1),
                                        l = 0,
                                        c = 0,
                                        u = 0;
                                    n % 4 === 0 ? (l = 4 * -r * w.size, u = 0) : (n - 1) % 4 === 0 ? (l = 0, u = 4 * -r * w.size) : (n - 2) % 4 === 0 ? (l = w.size + 4 * r * w.size, u = w.size) : (n - 3) % 4 === 0 && (l = -w.size, u = 3 * w.size + 4 * w.size * r), w.rtl && (l = -l), w.isHorizontal() || (c = l, l = 0);
                                    var h = "rotateX(" + (w.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (w.isHorizontal() ? o : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + u + "px)";
                                    if (1 >= a && a > -1 && (i = 90 * n + 90 * a, w.rtl && (i = 90 * -n - 90 * a)), s.transform(h), w.params.cube.slideShadows) {
                                        var d = w.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                            p = w.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                        0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(p)), d.length && (d[0].style.opacity = Math.max(-a, 0)), p.length && (p[0].style.opacity = Math.max(a, 0))
                                    }
                                }
                                if (w.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + w.size / 2 + "px"
                                    }), w.params.cube.shadow)
                                    if (w.isHorizontal()) t.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                                    else {
                                        var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                            m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                            g = w.params.cube.shadowScale,
                                            v = w.params.cube.shadowScale / m,
                                            y = w.params.cube.shadowOffset;
                                        t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (w.height / 2 + y) + "px, " + -w.height / 2 / v + "px) rotateX(-90deg)")
                                    }
                                var b = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                                w.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (w.isHorizontal() ? 0 : i) + "deg) rotateY(" + (w.isHorizontal() ? -i : 0) + "deg)")
                            },
                            setTransition: function(t) {
                                w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(t)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var t = w.translate, i = w.isHorizontal() ? -t + w.width / 2 : -t + w.height / 2, n = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, s = w.params.coverflow.depth, o = 0, r = w.slides.length; r > o; o++) {
                                    var a = w.slides.eq(o),
                                        l = w.slidesSizesGrid[o],
                                        c = a[0].swiperSlideOffset,
                                        u = (i - c - l / 2) / l * w.params.coverflow.modifier,
                                        h = w.isHorizontal() ? n * u : 0,
                                        d = w.isHorizontal() ? 0 : n * u,
                                        p = -s * Math.abs(u),
                                        f = w.isHorizontal() ? 0 : w.params.coverflow.stretch * u,
                                        m = w.isHorizontal() ? w.params.coverflow.stretch * u : 0;
                                    Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(h) < .001 && (h = 0), Math.abs(d) < .001 && (d = 0);
                                    var g = "translate3d(" + m + "px," + f + "px," + p + "px)  rotateX(" + d + "deg) rotateY(" + h + "deg)";
                                    if (a.transform(g), a[0].style.zIndex = -Math.abs(Math.round(u)) + 1, w.params.coverflow.slideShadows) {
                                        var v = w.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                            y = w.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                        0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), a.append(v)), 0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(y)), v.length && (v[0].style.opacity = u > 0 ? u : 0), y.length && (y[0].style.opacity = -u > 0 ? -u : 0)
                                    }
                                }
                                if (w.browser.ie) {
                                    var b = w.wrapper[0].style;
                                    b.perspectiveOrigin = i + "px 50%"
                                }
                            },
                            setTransition: function(t) {
                                w.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                            }
                        }
                    }, w.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(t, i) {
                            if ("undefined" != typeof t && ("undefined" == typeof i && (i = !0), 0 !== w.slides.length)) {
                                var n = w.slides.eq(t),
                                    s = n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                !n.hasClass("swiper-lazy") || n.hasClass("swiper-lazy-loaded") || n.hasClass("swiper-lazy-loading") || (s = s.add(n[0])), 0 !== s.length && s.each(function() {
                                    var t = e(this);
                                    t.addClass("swiper-lazy-loading");
                                    var s = t.attr("data-background"),
                                        o = t.attr("data-src"),
                                        r = t.attr("data-srcset");
                                    w.loadImage(t[0], o || s, r, !1, function() {
                                        if (s ? (t.css("background-image", 'url("' + s + '")'), t.removeAttr("data-background")) : (r && (t.attr("srcset", r), t.removeAttr("data-srcset")), o && (t.attr("src", o), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), n.find(".swiper-lazy-preloader, .preloader").remove(), w.params.loop && i) {
                                            var e = n.attr("data-swiper-slide-index");
                                            if (n.hasClass(w.params.slideDuplicateClass)) {
                                                var a = w.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                                w.lazy.loadImageInSlide(a.index(), !1)
                                            } else {
                                                var l = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                w.lazy.loadImageInSlide(l.index(), !1)
                                            }
                                        }
                                        w.emit("onLazyImageReady", w, n[0], t[0])
                                    }), w.emit("onLazyImageLoad", w, n[0], t[0])
                                })
                            }
                        },
                        load: function() {
                            var t;
                            if (w.params.watchSlidesVisibility) w.wrapper.children("." + w.params.slideVisibleClass).each(function() {
                                w.lazy.loadImageInSlide(e(this).index())
                            });
                            else if (w.params.slidesPerView > 1)
                                for (t = w.activeIndex; t < w.activeIndex + w.params.slidesPerView; t++) w.slides[t] && w.lazy.loadImageInSlide(t);
                            else w.lazy.loadImageInSlide(w.activeIndex);
                            if (w.params.lazyLoadingInPrevNext)
                                if (w.params.slidesPerView > 1 || w.params.lazyLoadingInPrevNextAmount && w.params.lazyLoadingInPrevNextAmount > 1) {
                                    var i = w.params.lazyLoadingInPrevNextAmount,
                                        n = w.params.slidesPerView,
                                        s = Math.min(w.activeIndex + n + Math.max(i, n), w.slides.length),
                                        o = Math.max(w.activeIndex - Math.max(n, i), 0);
                                    for (t = w.activeIndex + w.params.slidesPerView; s > t; t++) w.slides[t] && w.lazy.loadImageInSlide(t);
                                    for (t = o; t < w.activeIndex; t++) w.slides[t] && w.lazy.loadImageInSlide(t)
                                } else {
                                    var r = w.wrapper.children("." + w.params.slideNextClass);
                                    r.length > 0 && w.lazy.loadImageInSlide(r.index());
                                    var a = w.wrapper.children("." + w.params.slidePrevClass);
                                    a.length > 0 && w.lazy.loadImageInSlide(a.index())
                                }
                        },
                        onTransitionStart: function() {
                            w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load()
                        },
                        onTransitionEnd: function() {
                            w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load()
                        }
                    }, w.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function(t) {
                            var e = w.scrollbar,
                                i = w.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY,
                                n = i - e.track.offset()[w.isHorizontal() ? "left" : "top"] - e.dragSize / 2,
                                s = -w.minTranslate() * e.moveDivider,
                                o = -w.maxTranslate() * e.moveDivider;
                            s > n ? n = s : n > o && (n = o), n = -n / e.moveDivider, w.updateProgress(n), w.setWrapperTranslate(n, !0)
                        },
                        dragStart: function(t) {
                            var e = w.scrollbar;
                            e.isTouched = !0, t.preventDefault(), t.stopPropagation(), e.setDragPosition(t), clearTimeout(e.dragTimeout), e.track.transition(0), w.params.scrollbarHide && e.track.css("opacity", 1), w.wrapper.transition(100), e.drag.transition(100), w.emit("onScrollbarDragStart", w)
                        },
                        dragMove: function(t) {
                            var e = w.scrollbar;
                            e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), w.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), w.emit("onScrollbarDragMove", w))
                        },
                        dragEnd: function(t) {
                            var e = w.scrollbar;
                            e.isTouched && (e.isTouched = !1, w.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function() {
                                e.track.css("opacity", 0), e.track.transition(400)
                            }, 1e3)), w.emit("onScrollbarDragEnd", w), w.params.scrollbarSnapOnRelease && w.slideReset())
                        },
                        enableDraggable: function() {
                            var t = w.scrollbar,
                                i = w.support.touch ? t.track : document;
                            e(t.track).on(w.touchEvents.start, t.dragStart), e(i).on(w.touchEvents.move, t.dragMove), e(i).on(w.touchEvents.end, t.dragEnd)
                        },
                        disableDraggable: function() {
                            var t = w.scrollbar,
                                i = w.support.touch ? t.track : document;
                            e(t.track).off(w.touchEvents.start, t.dragStart), e(i).off(w.touchEvents.move, t.dragMove), e(i).off(w.touchEvents.end, t.dragEnd)
                        },
                        set: function() {
                            if (w.params.scrollbar) {
                                var t = w.scrollbar;
                                t.track = e(w.params.scrollbar), w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && t.track.length > 1 && 1 === w.container.find(w.params.scrollbar).length && (t.track = w.container.find(w.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = w.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = w.size / w.virtualSize, t.moveDivider = t.divider * (t.trackSize / w.size), t.dragSize = t.trackSize * t.divider, w.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", w.params.scrollbarHide && (t.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (w.params.scrollbar) {
                                var t, e = w.scrollbar,
                                    i = (w.translate || 0, e.dragSize);
                                t = (e.trackSize - e.dragSize) * w.progress, w.rtl && w.isHorizontal() ? (t = -t, t > 0 ? (i = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t)) : 0 > t ? (i = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t), w.isHorizontal() ? (w.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"), e.drag[0].style.width = i + "px") : (w.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"), e.drag[0].style.height = i + "px"), w.params.scrollbarHide && (clearTimeout(e.timeout), e.track[0].style.opacity = 1, e.timeout = setTimeout(function() {
                                    e.track[0].style.opacity = 0, e.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function(t) {
                            w.params.scrollbar && w.scrollbar.drag.transition(t)
                        }
                    }, w.controller = {
                        LinearSpline: function(t, e) {
                            this.x = t, this.y = e, this.lastIndex = t.length - 1;
                            var i, n;
                            this.x.length, this.interpolate = function(t) {
                                return t ? (n = s(this.x, t), i = n - 1, (t - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                            };
                            var s = function() {
                                var t, e, i;
                                return function(n, s) {
                                    for (e = -1, t = n.length; t - e > 1;) n[i = t + e >> 1] <= s ? e = i : t = i;
                                    return t
                                }
                            }()
                        },
                        getInterpolateFunction: function(t) {
                            w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, t.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, t.snapGrid))
                        },
                        setTranslate: function(t, e) {
                            function n(e) {
                                t = e.rtl && "horizontal" === e.params.direction ? -w.translate : w.translate, "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(e), o = -w.controller.spline.interpolate(-t)), o && "container" !== w.params.controlBy || (s = (e.maxTranslate() - e.minTranslate()) / (w.maxTranslate() - w.minTranslate()), o = (t - w.minTranslate()) * s + e.minTranslate()), w.params.controlInverse && (o = e.maxTranslate() - o), e.updateProgress(o), e.setWrapperTranslate(o, !1, w), e.updateActiveIndex()
                            }
                            var s, o, r = w.params.control;
                            if (w.isArray(r))
                                for (var a = 0; a < r.length; a++) r[a] !== e && r[a] instanceof i && n(r[a]);
                            else r instanceof i && e !== r && n(r)
                        },
                        setTransition: function(t, e) {
                            function n(e) {
                                e.setWrapperTransition(t, w), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function() {
                                    o && (e.params.loop && "slide" === w.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                }))
                            }
                            var s, o = w.params.control;
                            if (w.isArray(o))
                                for (s = 0; s < o.length; s++) o[s] !== e && o[s] instanceof i && n(o[s]);
                            else o instanceof i && e !== o && n(o)
                        }
                    }, w.hashnav = {
                        init: function() {
                            if (w.params.hashnav) {
                                w.hashnav.initialized = !0;
                                var t = document.location.hash.replace("#", "");
                                if (t)
                                    for (var e = 0, i = 0, n = w.slides.length; n > i; i++) {
                                        var s = w.slides.eq(i),
                                            o = s.attr("data-hash");
                                        if (o === t && !s.hasClass(w.params.slideDuplicateClass)) {
                                            var r = s.index();
                                            w.slideTo(r, e, w.params.runCallbacksOnInit, !0)
                                        }
                                    }
                            }
                        },
                        setHash: function() {
                            w.hashnav.initialized && w.params.hashnav && (document.location.hash = w.slides.eq(w.activeIndex).attr("data-hash") || "")
                        }
                    }, w.disableKeyboardControl = function() {
                        w.params.keyboardControl = !1, e(document).off("keydown", c)
                    }, w.enableKeyboardControl = function() {
                        w.params.keyboardControl = !0, e(document).on("keydown", c)
                    }, w.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    }, w.params.mousewheelControl) {
                    try {
                        new window.WheelEvent("wheel"), w.mousewheel.event = "wheel"
                    } catch (j) {
                        (window.WheelEvent || w.container[0] && "wheel" in w.container[0]) && (w.mousewheel.event = "wheel")
                    }!w.mousewheel.event && window.WheelEvent, w.mousewheel.event || void 0 === document.onmousewheel || (w.mousewheel.event = "mousewheel"), w.mousewheel.event || (w.mousewheel.event = "DOMMouseScroll")
                }
                w.disableMousewheelControl = function() {
                    return w.mousewheel.event ? (w.container.off(w.mousewheel.event, u), !0) : !1
                }, w.enableMousewheelControl = function() {
                    return w.mousewheel.event ? (w.container.on(w.mousewheel.event, u), !0) : !1
                }, w.parallax = {
                    setTranslate: function() {
                        w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            h(this, w.progress)
                        }), w.slides.each(function() {
                            var t = e(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var e = Math.min(Math.max(t[0].progress, -1), 1);
                                h(this, e)
                            })
                        })
                    },
                    setTransition: function(t) {
                        "undefined" == typeof t && (t = w.params.speed), w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var i = e(this),
                                n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (n = 0), i.transition(n)
                        })
                    }
                }, w._plugins = [];
                for (var R in w.plugins) {
                    var F = w.plugins[R](w, w.params[R]);
                    F && w._plugins.push(F)
                }
                return w.callPlugins = function(t) {
                    for (var e = 0; e < w._plugins.length; e++) t in w._plugins[e] && w._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, w.emitterEventListeners = {}, w.emit = function(t) {
                    w.params[t] && w.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var e;
                    if (w.emitterEventListeners[t])
                        for (e = 0; e < w.emitterEventListeners[t].length; e++) w.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    w.callPlugins && w.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, w.on = function(t, e) {
                    return t = d(t), w.emitterEventListeners[t] || (w.emitterEventListeners[t] = []), w.emitterEventListeners[t].push(e), w
                }, w.off = function(t, e) {
                    var i;
                    if (t = d(t), "undefined" == typeof e) return w.emitterEventListeners[t] = [], w;
                    if (w.emitterEventListeners[t] && 0 !== w.emitterEventListeners[t].length) {
                        for (i = 0; i < w.emitterEventListeners[t].length; i++) w.emitterEventListeners[t][i] === e && w.emitterEventListeners[t].splice(i, 1);
                        return w
                    }
                }, w.once = function(t, e) {
                    t = d(t);
                    var i = function() {
                        e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(t, i)
                    };
                    return w.on(t, i), w
                }, w.a11y = {
                    makeFocusable: function(t) {
                        return t.attr("tabIndex", "0"), t
                    },
                    addRole: function(t, e) {
                        return t.attr("role", e), t
                    },
                    addLabel: function(t, e) {
                        return t.attr("aria-label", e), t
                    },
                    disable: function(t) {
                        return t.attr("aria-disabled", !0), t
                    },
                    enable: function(t) {
                        return t.attr("aria-disabled", !1), t
                    },
                    onEnterKey: function(t) {
                        13 === t.keyCode && (e(t.target).is(w.params.nextButton) ? (w.onClickNext(t), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : e(t.target).is(w.params.prevButton) && (w.onClickPrev(t), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)), e(t.target).is("." + w.params.bulletClass) && e(t.target)[0].click())
                    },
                    liveRegion: e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(t) {
                        var e = w.a11y.liveRegion;
                        0 !== e.length && (e.html(""), e.html(t))
                    },
                    init: function() {
                        w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.a11y.makeFocusable(w.nextButton), w.a11y.addRole(w.nextButton, "button"), w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.a11y.makeFocusable(w.prevButton), w.a11y.addRole(w.prevButton, "button"), w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)), e(w.container).append(w.a11y.liveRegion)
                    },
                    initPagination: function() {
                        w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function() {
                            var t = e(this);
                            w.a11y.makeFocusable(t), w.a11y.addRole(t, "button"), w.a11y.addLabel(t, w.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                        })
                    },
                    destroy: function() {
                        w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove()
                    }
                }, w.init = function() {
                    w.params.loop && w.createLoop(), w.updateContainerSize(), w.updateSlidesSize(), w.updatePagination(), w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()), "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()), w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))), w.attachEvents(), w.params.observer && w.support.observer && w.initObservers(), w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(), w.params.autoplay && w.startAutoplay(), w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(), w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(), w.params.hashnav && w.hashnav && w.hashnav.init(), w.params.a11y && w.a11y && w.a11y.init(), w.emit("onInit", w)
                }, w.cleanupStyles = function() {
                    w.container.removeClass(w.classNames.join(" ")).removeAttr("style"), w.wrapper.removeAttr("style"), w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass), w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass), w.params.prevButton && e(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.nextButton && e(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
                }, w.destroy = function(t, e) {
                    w.detachEvents(), w.stopAutoplay(), w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(), w.params.loop && w.destroyLoop(), e && w.cleanupStyles(), w.disconnectObservers(), w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(), w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(), w.params.a11y && w.a11y && w.a11y.destroy(), w.emit("onDestroy"), t !== !1 && (w = null)
                }, w.init(), w
            }
        };
        i.prototype = {
            isSafari: function() {
                var t = navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.apply(t)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
            },
            device: function() {
                var t = navigator.userAgent,
                    e = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                    i = t.match(/(iPad).*OS\s([\d_]+)/),
                    n = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                    s = !i && t.match(/(iPhone\sOS)\s([\d_]+)/);
                return {
                    ios: i || s || n,
                    android: e
                }
            }(),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var t = document.createElement("div").style;
                    return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                }(),
                flexbox: function() {
                    for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i++)
                        if (e[i] in t) return !0
                }(),
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                }()
            },
            plugins: {}
        };
        for (var n = (function() {
                var t = function(t) {
                        var e = this,
                            i = 0;
                        for (i = 0; i < t.length; i++) e[i] = t[i];
                        return e.length = t.length, this
                    },
                    e = function(e, i) {
                        var n = [],
                            s = 0;
                        if (e && !i && e instanceof t) return e;
                        if (e)
                            if ("string" == typeof e) {
                                var o, r, a = e.trim();
                                if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                                    var l = "div";
                                    for (0 === a.indexOf("<li") && (l = "ul"), 0 === a.indexOf("<tr") && (l = "tbody"), (0 === a.indexOf("<td") || 0 === a.indexOf("<th")) && (l = "tr"), 0 === a.indexOf("<tbody") && (l = "table"), 0 === a.indexOf("<option") && (l = "select"), r = document.createElement(l), r.innerHTML = e, s = 0; s < r.childNodes.length; s++) n.push(r.childNodes[s])
                                } else
                                    for (o = i || "#" !== e[0] || e.match(/[ .<>:~]/) ? (i || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], s = 0; s < o.length; s++) o[s] && n.push(o[s])
                            } else if (e.nodeType || e === window || e === document) n.push(e);
                        else if (e.length > 0 && e[0].nodeType)
                            for (s = 0; s < e.length; s++) n.push(e[s]);
                        return new t(n)
                    };
                return t.prototype = {
                    addClass: function(t) {
                        if ("undefined" == typeof t) return this;
                        for (var e = t.split(" "), i = 0; i < e.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.add(e[i]);
                        return this
                    },
                    removeClass: function(t) {
                        for (var e = t.split(" "), i = 0; i < e.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.remove(e[i]);
                        return this
                    },
                    hasClass: function(t) {
                        return this[0] ? this[0].classList.contains(t) : !1
                    },
                    toggleClass: function(t) {
                        for (var e = t.split(" "), i = 0; i < e.length; i++)
                            for (var n = 0; n < this.length; n++) this[n].classList.toggle(e[i]);
                        return this
                    },
                    attr: function(t, e) {
                        if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                        for (var i = 0; i < this.length; i++)
                            if (2 === arguments.length) this[i].setAttribute(t, e);
                            else
                                for (var n in t) this[i][n] = t[n], this[i].setAttribute(n, t[n]);
                        return this
                    },
                    removeAttr: function(t) {
                        for (var e = 0; e < this.length; e++) this[e].removeAttribute(t);
                        return this
                    },
                    data: function(t, e) {
                        if ("undefined" != typeof e) {
                            for (var i = 0; i < this.length; i++) {
                                var n = this[i];
                                n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[t] = e
                            }
                            return this
                        }
                        if (this[0]) {
                            var s = this[0].getAttribute("data-" + t);
                            return s ? s : this[0].dom7ElementDataStorage && t in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[t] : void 0
                        }
                    },
                    transform: function(t) {
                        for (var e = 0; e < this.length; e++) {
                            var i = this[e].style;
                            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
                        }
                        return this
                    },
                    transition: function(t) {
                        "string" != typeof t && (t += "ms");
                        for (var e = 0; e < this.length; e++) {
                            var i = this[e].style;
                            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
                        }
                        return this
                    },
                    on: function(t, i, n, s) {
                        function o(t) {
                            var s = t.target;
                            if (e(s).is(i)) n.call(s, t);
                            else
                                for (var o = e(s).parents(), r = 0; r < o.length; r++) e(o[r]).is(i) && n.call(o[r], t)
                        }
                        var r, a, l = t.split(" ");
                        for (r = 0; r < this.length; r++)
                            if ("function" == typeof i || i === !1)
                                for ("function" == typeof i && (n = arguments[1], s = arguments[2] || !1), a = 0; a < l.length; a++) this[r].addEventListener(l[a], n, s);
                            else
                                for (a = 0; a < l.length; a++) this[r].dom7LiveListeners || (this[r].dom7LiveListeners = []), this[r].dom7LiveListeners.push({
                                    listener: n,
                                    liveListener: o
                                }), this[r].addEventListener(l[a], o, s);
                        return this
                    },
                    off: function(t, e, i, n) {
                        for (var s = t.split(" "), o = 0; o < s.length; o++)
                            for (var r = 0; r < this.length; r++)
                                if ("function" == typeof e || e === !1) "function" == typeof e && (i = arguments[1], n = arguments[2] || !1), this[r].removeEventListener(s[o], i, n);
                                else if (this[r].dom7LiveListeners)
                            for (var a = 0; a < this[r].dom7LiveListeners.length; a++) this[r].dom7LiveListeners[a].listener === i && this[r].removeEventListener(s[o], this[r].dom7LiveListeners[a].liveListener, n);
                        return this
                    },
                    once: function(t, e, i, n) {
                        function s(r) {
                            i(r), o.off(t, e, s, n)
                        }
                        var o = this;
                        "function" == typeof e && (e = !1, i = arguments[1], n = arguments[2]), o.on(t, e, s, n)
                    },
                    trigger: function(t, e) {
                        for (var i = 0; i < this.length; i++) {
                            var n;
                            try {
                                n = new window.CustomEvent(t, {
                                    detail: e,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (s) {
                                n = document.createEvent("Event"), n.initEvent(t, !0, !0), n.detail = e
                            }
                            this[i].dispatchEvent(n)
                        }
                        return this
                    },
                    transitionEnd: function(t) {
                        function e(o) {
                            if (o.target === this)
                                for (t.call(this, o), i = 0; i < n.length; i++) s.off(n[i], e)
                        }
                        var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            s = this;
                        if (t)
                            for (i = 0; i < n.length; i++) s.on(n[i], e);
                        return this
                    },
                    width: function() {
                        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                    },
                    outerWidth: function(t) {
                        return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    },
                    height: function() {
                        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                    },
                    outerHeight: function(t) {
                        return this.length > 0 ? t ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                    },
                    offset: function() {
                        if (this.length > 0) {
                            var t = this[0],
                                e = t.getBoundingClientRect(),
                                i = document.body,
                                n = t.clientTop || i.clientTop || 0,
                                s = t.clientLeft || i.clientLeft || 0,
                                o = window.pageYOffset || t.scrollTop,
                                r = window.pageXOffset || t.scrollLeft;
                            return {
                                top: e.top + o - n,
                                left: e.left + r - s
                            }
                        }
                        return null
                    },
                    css: function(t, e) {
                        var i;
                        if (1 === arguments.length) {
                            if ("string" != typeof t) {
                                for (i = 0; i < this.length; i++)
                                    for (var n in t) this[i].style[n] = t[n];
                                return this
                            }
                            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(t)
                        }
                        if (2 === arguments.length && "string" == typeof t) {
                            for (i = 0; i < this.length; i++) this[i].style[t] = e;
                            return this
                        }
                        return this
                    },
                    each: function(t) {
                        for (var e = 0; e < this.length; e++) t.call(this[e], e, this[e]);
                        return this
                    },
                    html: function(t) {
                        if ("undefined" == typeof t) return this[0] ? this[0].innerHTML : void 0;
                        for (var e = 0; e < this.length; e++) this[e].innerHTML = t;
                        return this
                    },
                    text: function(t) {
                        if ("undefined" == typeof t) return this[0] ? this[0].textContent.trim() : null;
                        for (var e = 0; e < this.length; e++) this[e].textContent = t;
                        return this
                    },
                    is: function(i) {
                        if (!this[0]) return !1;
                        var n, s;
                        if ("string" == typeof i) {
                            var o = this[0];
                            if (o === document) return i === document;
                            if (o === window) return i === window;
                            if (o.matches) return o.matches(i);
                            if (o.webkitMatchesSelector) return o.webkitMatchesSelector(i);
                            if (o.mozMatchesSelector) return o.mozMatchesSelector(i);
                            if (o.msMatchesSelector) return o.msMatchesSelector(i);
                            for (n = e(i), s = 0; s < n.length; s++)
                                if (n[s] === this[0]) return !0;
                            return !1
                        }
                        if (i === document) return this[0] === document;
                        if (i === window) return this[0] === window;
                        if (i.nodeType || i instanceof t) {
                            for (n = i.nodeType ? [i] : i, s = 0; s < n.length; s++)
                                if (n[s] === this[0]) return !0;
                            return !1
                        }
                        return !1
                    },
                    index: function() {
                        if (this[0]) {
                            for (var t = this[0], e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && e++;
                            return e
                        }
                    },
                    eq: function(e) {
                        if ("undefined" == typeof e) return this;
                        var i, n = this.length;
                        return e > n - 1 ? new t([]) : 0 > e ? (i = n + e, new t(0 > i ? [] : [this[i]])) : new t([this[e]])
                    },
                    append: function(e) {
                        var i, n;
                        for (i = 0; i < this.length; i++)
                            if ("string" == typeof e) {
                                var s = document.createElement("div");
                                for (s.innerHTML = e; s.firstChild;) this[i].appendChild(s.firstChild)
                            } else if (e instanceof t)
                            for (n = 0; n < e.length; n++) this[i].appendChild(e[n]);
                        else this[i].appendChild(e);
                        return this
                    },
                    prepend: function(e) {
                        var i, n;
                        for (i = 0; i < this.length; i++)
                            if ("string" == typeof e) {
                                var s = document.createElement("div");
                                for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n--) this[i].insertBefore(s.childNodes[n], this[i].childNodes[0])
                            } else if (e instanceof t)
                            for (n = 0; n < e.length; n++) this[i].insertBefore(e[n], this[i].childNodes[0]);
                        else this[i].insertBefore(e, this[i].childNodes[0]);
                        return this
                    },
                    insertBefore: function(t) {
                        for (var i = e(t), n = 0; n < this.length; n++)
                            if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0]);
                            else if (i.length > 1)
                            for (var s = 0; s < i.length; s++) i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s])
                    },
                    insertAfter: function(t) {
                        for (var i = e(t), n = 0; n < this.length; n++)
                            if (1 === i.length) i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
                            else if (i.length > 1)
                            for (var s = 0; s < i.length; s++) i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s].nextSibling)
                    },
                    next: function(i) {
                        return new t(this.length > 0 ? i ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                    },
                    nextAll: function(i) {
                        var n = [],
                            s = this[0];
                        if (!s) return new t([]);
                        for (; s.nextElementSibling;) {
                            var o = s.nextElementSibling;
                            i ? e(o).is(i) && n.push(o) : n.push(o), s = o
                        }
                        return new t(n)
                    },
                    prev: function(i) {
                        return new t(this.length > 0 ? i ? this[0].previousElementSibling && e(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                    },
                    prevAll: function(i) {
                        var n = [],
                            s = this[0];
                        if (!s) return new t([]);
                        for (; s.previousElementSibling;) {
                            var o = s.previousElementSibling;
                            i ? e(o).is(i) && n.push(o) : n.push(o), s = o
                        }
                        return new t(n)
                    },
                    parent: function(t) {
                        for (var i = [], n = 0; n < this.length; n++) t ? e(this[n].parentNode).is(t) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                        return e(e.unique(i))
                    },
                    parents: function(t) {
                        for (var i = [], n = 0; n < this.length; n++)
                            for (var s = this[n].parentNode; s;) t ? e(s).is(t) && i.push(s) : i.push(s), s = s.parentNode;
                        return e(e.unique(i))
                    },
                    find: function(e) {
                        for (var i = [], n = 0; n < this.length; n++)
                            for (var s = this[n].querySelectorAll(e), o = 0; o < s.length; o++) i.push(s[o]);
                        return new t(i)
                    },
                    children: function(i) {
                        for (var n = [], s = 0; s < this.length; s++)
                            for (var o = this[s].childNodes, r = 0; r < o.length; r++) i ? 1 === o[r].nodeType && e(o[r]).is(i) && n.push(o[r]) : 1 === o[r].nodeType && n.push(o[r]);
                        return new t(e.unique(n))
                    },
                    remove: function() {
                        for (var t = 0; t < this.length; t++) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                        return this
                    },
                    add: function() {
                        var t, i, n = this;
                        for (t = 0; t < arguments.length; t++) {
                            var s = e(arguments[t]);
                            for (i = 0; i < s.length; i++) n[n.length] = s[i], n.length++
                        }
                        return n
                    }
                }, e.fn = t.prototype, e.unique = function(t) {
                    for (var e = [], i = 0; i < t.length; i++) - 1 === e.indexOf(t[i]) && e.push(t[i]);
                    return e
                }, e
            }()), s = ["jQuery", "Zepto", "Dom7"], o = 0; o < s.length; o++) window[s[o]] && t(window[s[o]]);
        var r;
        r = "undefined" == typeof n ? window.Dom7 || window.Zepto || window.jQuery : n, r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(t) {
            function e(o) {
                if (o.target === this)
                    for (t.call(this, o), i = 0; i < n.length; i++) s.off(n[i], e)
            }
            var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                s = this;
            if (t)
                for (i = 0; i < n.length; i++) s.on(n[i], e);
            return this
        }), "transform" in r.fn || (r.fn.transform = function(t) {
            for (var e = 0; e < this.length; e++) {
                var i = this[e].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
            }
            return this
        }), "transition" in r.fn || (r.fn.transition = function(t) {
            "string" != typeof t && (t += "ms");
            for (var e = 0; e < this.length; e++) {
                var i = this[e].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
            }
            return this
        })), window.Swiper = i
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    }), function(t, e) {
        function i(t) {
            return "string" == typeof t
        }

        function n(t) {
            var e = C.call(arguments, 1);
            return function() {
                return t.apply(this, e.concat(C.call(arguments)))
            }
        }

        function s(t) {
            return t.replace(y, "$2")
        }

        function o(t) {
            return t.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
        }

        function r(e, n, s, o, r) {
            var a, l, h, p, f;
            return o !== c ? (h = s.match(e ? y : /^([^#?]*)\??([^#]*)(#?.*)/), f = h[3] || "", 2 === r && i(o) ? l = o.replace(e ? v : D, "") : (p = d(h[2]), o = i(o) ? d[e ? I : A](o) : o, l = 2 === r ? o : 1 === r ? t.extend({}, o, p) : t.extend({}, p, o), l = u(l), e && (l = l.replace(b, _))), a = h[1] + (e ? x : l || !h[1] ? "?" : "") + l + f) : a = n(s !== c ? s : location.href), a
        }

        function a(t, e, n) {
            return e === c || "boolean" == typeof e ? (n = e, e = S[t ? I : A]()) : e = i(e) ? e.replace(t ? v : D, "") : e, d(e, n)
        }

        function l(e, n, s, o) {
            return i(s) || "object" == typeof s || (o = s, s = n, n = c), this.each(function() {
                var i = t(this),
                    r = n || g()[(this.nodeName || "").toLowerCase()] || "",
                    a = r && i.attr(r) || "";
                i.attr(r, S[e](a, s, o))
            })
        }
        var c, u, h, d, p, f, m, g, v, y, b, w, x, C = Array.prototype.slice,
            _ = decodeURIComponent,
            S = t.param,
            T = t.bbq = t.bbq || {},
            E = t.event.special,
            k = "hashchange",
            A = "querystring",
            I = "fragment",
            L = "elemUrlAttr",
            P = "href",
            M = "src",
            D = /^.*\?|#.*$/g,
            z = {};
        S[A] = n(r, 0, o), S[I] = h = n(r, 1, s), S.sorted = u = function(e, i) {
            var n = [],
                s = {};
            return t.each(S(e, i).split("&"), function(t, e) {
                var i = e.replace(/(?:%5B|=).*$/, ""),
                    o = s[i];
                o || (o = s[i] = [], n.push(i)), o.push(e)
            }), t.map(n.sort(), function(t) {
                return s[t]
            }).join("&")
        }, h.noEscape = function(e) {
            e = e || "";
            var i = t.map(e.split(""), encodeURIComponent);
            b = new RegExp(i.join("|"), "g")
        }, h.noEscape(",/"), h.ajaxCrawlable = function(t) {
            return t !== c && (t ? (v = /^.*(?:#!|#)/, y = /^([^#]*)(?:#!|#)?(.*)$/, x = "#!") : (v = /^.*#/, y = /^([^#]*)#?(.*)$/, x = "#"), w = !!t), w
        }, h.ajaxCrawlable(0), t.deparam = d = function(e, i) {
            var n = {},
                s = {
                    "true": !0,
                    "false": !1,
                    "null": null
                };
            return t.each(e.replace(/\+/g, " ").split("&"), function(e, o) {
                var r, a = o.split("="),
                    l = _(a[0]),
                    u = n,
                    h = 0,
                    d = l.split("]["),
                    p = d.length - 1;
                if (/\[/.test(d[0]) && /\]$/.test(d[p]) ? (d[p] = d[p].replace(/\]$/, ""), d = d.shift().split("[").concat(d), p = d.length - 1) : p = 0, 2 === a.length)
                    if (r = _(a[1]), i && (r = r && !isNaN(r) ? +r : "undefined" === r ? c : s[r] !== c ? s[r] : r), p)
                        for (; p >= h; h++) l = "" === d[h] ? u.length : d[h], u = u[l] = p > h ? u[l] || (d[h + 1] && isNaN(d[h + 1]) ? {} : []) : r;
                    else t.isArray(n[l]) ? n[l].push(r) : n[l] !== c ? n[l] = [n[l], r] : n[l] = r;
                else l && (n[l] = i ? c : "")
            }), n
        }, d[A] = n(a, 0), d[I] = p = n(a, 1), t[L] || (t[L] = function(e) {
            return t.extend(z, e)
        })({
            a: P,
            base: P,
            iframe: M,
            img: M,
            input: M,
            form: "action",
            link: P,
            script: M
        }), g = t[L], t.fn[A] = n(l, A), t.fn[I] = n(l, I), T.pushState = f = function(t, e) {
            i(t) && /^#/.test(t) && e === c && (e = 2);
            var n = t !== c,
                s = h(location.href, n ? t : {}, n ? e : 2);
            location.href = s
        }, T.getState = m = function(t, e) {
            return t === c || "boolean" == typeof t ? p(t) : p(e)[t]
        }, T.removeState = function(e) {
            var i = {};
            e !== c && (i = m(), t.each(t.isArray(e) ? e : arguments, function(t, e) {
                delete i[e]
            })), f(i, 2)
        }, E[k] = t.extend(E[k], {
            add: function(e) {
                function i(t) {
                    var e = t[I] = h();
                    t.getState = function(t, i) {
                        return t === c || "boolean" == typeof t ? d(e, t) : d(e, i)[t]
                    }, n.apply(this, arguments)
                }
                var n;
                return t.isFunction(e) ? (n = e, i) : (n = e.handler, void(e.handler = i))
            }
        })
    }(jQuery, this), function(t, e, i) {
        "$:nomunge";

        function n(t) {
            return t = t || location.href, "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var s, o = "hashchange",
            r = document,
            a = t.event.special,
            l = r.documentMode,
            c = "on" + o in e && (l === i || l > 7);
        t.fn[o] = function(t) {
            return t ? this.bind(o, t) : this.trigger(o)
        }, t.fn[o].delay = 50, a[o] = t.extend(a[o], {
            setup: function() {
                return c ? !1 : void t(s.start)
            },
            teardown: function() {
                return c ? !1 : void t(s.stop)
            }
        }), s = function() {
            function s() {
                var i = n(),
                    r = p(u);
                i !== u ? (d(u = i, r), t(e).trigger(o)) : r !== u && (location.href = location.href.replace(/#.*/, "") + r), a = setTimeout(s, t.fn[o].delay)
            }
            var a, l = {},
                u = n(),
                h = function(t) {
                    return t
                },
                d = h,
                p = h;
            return l.start = function() {
                a || s()
            }, l.stop = function() {
                a && clearTimeout(a), a = i
            }, "Microsoft Internet Explorer" === navigator.appName && !c && function() {
                var e, i;
                l.start = function() {
                    e || (i = t.fn[o].src, i = i && i + n(), e = t('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        i || d(n()), s()
                    }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, r.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (e.document.title = r.title)
                        } catch (t) {}
                    })
                }, l.stop = h, p = function() {
                    return n(e.location.href)
                }, d = function(i, n) {
                    var s = e.document,
                        a = t.fn[o].domain;
                    i !== n && (s.title = r.title, s.open(), a && s.write('<script>document.domain="' + a + '"</script>'), s.close(), e.location.hash = i)
                }
            }(), l
        }()
    }(jQuery, this), ! function(t, e) {
        function i(t, e, i) {
            var n = h[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
        }

        function n(e) {
            var i = c(),
                n = i._rgba = [];
            return e = e.toLowerCase(), f(l, function(t, s) {
                var o, r = s.re.exec(e),
                    a = r && s.parse(r),
                    l = s.space || "rgba";
                return a ? (o = i[l](a), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, !1) : void 0
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
        }

        function s(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            a = /^([\-+])=\s*(\d+\.?\d*)/,
            l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }],
            c = t.Color = function(e, i, n, s) {
                return new t.Color.fn.parse(e, i, n, s)
            },
            u = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            h = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            d = c.support = {},
            p = t("<p>")[0],
            f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), c.fn = t.extend(c.prototype, {
            parse: function(s, r, a, l) {
                if (s === e) return this._rgba = [null, null, null, null], this;
                (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                var h = this,
                    d = t.type(s),
                    p = this._rgba = [];
                return r !== e && (s = [s, r, a, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(u.rgba.props, function(t, e) {
                    p[e.idx] = i(s[e.idx], e)
                }), this) : "object" === d ? (s instanceof c ? f(u, function(t, e) {
                    s[e.cache] && (h[e.cache] = s[e.cache].slice())
                }) : f(u, function(e, n) {
                    var o = n.cache;
                    f(n.props, function(t, e) {
                        if (!h[o] && n.to) {
                            if ("alpha" === t || null == s[t]) return;
                            h[o] = n.to(h._rgba)
                        }
                        h[o][e.idx] = i(s[t], e, !0)
                    }), h[o] && t.inArray(null, h[o].slice(0, 3)) < 0 && (h[o][3] = 1, n.from && (h._rgba = n.from(h[o])))
                }), this) : void 0
            },
            is: function(t) {
                var e = c(t),
                    i = !0,
                    n = this;
                return f(u, function(t, s) {
                    var o, r = e[s.cache];
                    return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) {
                        return null != r[e.idx] ? i = r[e.idx] === o[e.idx] : void 0
                    })), i
                }), i
            },
            _space: function() {
                var t = [],
                    e = this;
                return f(u, function(i, n) {
                    e[n.cache] && t.push(i)
                }), t.pop()
            },
            transition: function(t, e) {
                var n = c(t),
                    s = n._space(),
                    o = u[s],
                    r = 0 === this.alpha() ? c("transparent") : this,
                    a = r[o.cache] || o.to(r._rgba),
                    l = a.slice();
                return n = n[o.cache], f(o.props, function(t, s) {
                    var o = s.idx,
                        r = a[o],
                        c = n[o],
                        u = h[s.type] || {};
                    null !== c && (null === r ? l[o] = c : (u.mod && (c - r > u.mod / 2 ? r += u.mod : r - c > u.mod / 2 && (r -= u.mod)), l[o] = i((c - r) * e + r, s)))
                }), this[s](l)
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(),
                    n = i.pop(),
                    s = c(e)._rgba;
                return c(t.map(i, function(t, e) {
                    return (1 - n) * s[e] + n * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba(",
                    i = t.map(this._rgba, function(t, e) {
                        return null == t ? e > 2 ? 1 : 0 : t
                    });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla(",
                    i = t.map(this.hsla(), function(t, e) {
                        return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                    });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice(),
                    n = i.pop();
                return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), c.fn.parse.prototype = c.fn, u.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, n = t[0] / 255,
                s = t[1] / 255,
                o = t[2] / 255,
                r = t[3],
                a = Math.max(n, s, o),
                l = Math.min(n, s, o),
                c = a - l,
                u = a + l,
                h = .5 * u;
            return e = l === a ? 0 : n === a ? 60 * (s - o) / c + 360 : s === a ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === c ? 0 : .5 >= h ? c / u : c / (2 - u), [Math.round(e) % 360, i, h, null == r ? 1 : r]
        }, u.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360,
                i = t[1],
                n = t[2],
                o = t[3],
                r = .5 >= n ? n * (1 + i) : n + i - n * i,
                a = 2 * n - r;
            return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
        }, f(u, function(n, s) {
            var o = s.props,
                r = s.cache,
                l = s.to,
                u = s.from;
            c.fn[n] = function(n) {
                if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                var s, a = t.type(n),
                    h = "array" === a || "object" === a ? n : arguments,
                    d = this[r].slice();
                return f(o, function(t, e) {
                    var n = h["object" === a ? t : e.idx];
                    null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                }), u ? (s = c(u(d)), s[r] = d, s) : c(d)
            }, f(o, function(e, i) {
                c.fn[e] || (c.fn[e] = function(s) {
                    var o, r = t.type(s),
                        l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                        c = this[l](),
                        u = c[i.idx];
                    return "undefined" === r ? u : ("function" === r && (s = s.call(this, u), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s), o && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = s, this[l](c)))
                })
            })
        }), c.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, s) {
                        var o, r, a = "";
                        if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                            if (s = c(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                for (r = "backgroundColor" === i ? e.parentNode : e;
                                    ("" === a || "transparent" === a) && r && r.style;) try {
                                    a = t.css(r, "backgroundColor"), r = r.parentNode
                                } catch (l) {}
                                s = s.blend(a && "transparent" !== a ? a : "_default")
                            }
                            s = s.toRgbaString()
                        }
                        try {
                            e.style[i] = s
                        } catch (l) {}
                    }
                }, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = c(e.elem, i), e.end = c(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, c.hook(r), t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                    e["border" + n + "Color"] = t
                }), e
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), ! function(t) {
        t(["jquery"], function(t) {
            return function() {
                function e(t, e, i) {
                    return f({
                        type: x.error,
                        iconClass: m().iconClasses.error,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function i(e, i) {
                    return e || (e = m()), v = t("#" + e.containerId), v.length ? v : (i && (v = h(e)), v)
                }

                function n(t, e, i) {
                    return f({
                        type: x.info,
                        iconClass: m().iconClasses.info,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function s(t) {
                    y = t
                }

                function o(t, e, i) {
                    return f({
                        type: x.success,
                        iconClass: m().iconClasses.success,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function r(t, e, i) {
                    return f({
                        type: x.warning,
                        iconClass: m().iconClasses.warning,
                        message: t,
                        optionsOverride: i,
                        title: e
                    })
                }

                function a(t) {
                    var e = m();
                    v || i(e), u(t, e) || c(e)
                }

                function l(e) {
                    var n = m();
                    return v || i(n), e && 0 === t(":focus", e).length ? void g(e) : void(v.children().length && v.remove())
                }

                function c(e) {
                    for (var i = v.children(), n = i.length - 1; n >= 0; n--) u(t(i[n]), e)
                }

                function u(e, i) {
                    return e && 0 === t(":focus", e).length ? (e[i.hideMethod]({
                        duration: i.hideDuration,
                        easing: i.hideEasing,
                        complete: function() {
                            g(e)
                        }
                    }), !0) : !1
                }

                function h(e) {
                    return v = t("<div/>").attr("id", e.containerId).addClass(e.positionClass).attr("aria-live", "polite").attr("role", "alert"), v.appendTo(t(e.target)), v
                }

                function d() {
                    return {
                        tapToDismiss: !0,
                        toastClass: "toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "toast-error",
                            info: "toast-info",
                            success: "toast-success",
                            warning: "toast-warning"
                        },
                        iconClass: "toast-info",
                        positionClass: "toast-top-right",
                        timeOut: 5e3,
                        titleClass: "toast-title",
                        messageClass: "toast-message",
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }
                }

                function p(t) {
                    y && y(t)
                }

                function f(e) {
                    function n(e) {
                        return !t(":focus", u).length || e ? (clearTimeout(x.intervalId), u[a.hideMethod]({
                            duration: a.hideDuration,
                            easing: a.hideEasing,
                            complete: function() {
                                g(u), a.onHidden && "hidden" !== C.state && a.onHidden(), C.state = "hidden", C.endTime = new Date, p(C)
                            }
                        })) : void 0
                    }

                    function s() {
                        (a.timeOut > 0 || a.extendedTimeOut > 0) && (c = setTimeout(n, a.extendedTimeOut), x.maxHideTime = parseFloat(a.extendedTimeOut), x.hideEta = (new Date).getTime() + x.maxHideTime)
                    }

                    function o() {
                        clearTimeout(c), x.hideEta = 0, u.stop(!0, !0)[a.showMethod]({
                            duration: a.showDuration,
                            easing: a.showEasing
                        })
                    }

                    function r() {
                        var t = (x.hideEta - (new Date).getTime()) / x.maxHideTime * 100;
                        f.width(t + "%")
                    }
                    var a = m(),
                        l = e.iconClass || a.iconClass;
                    if ("undefined" != typeof e.optionsOverride && (a = t.extend(a, e.optionsOverride), l = e.optionsOverride.iconClass || l), a.preventDuplicates) {
                        if (e.message === b) return;
                        b = e.message
                    }
                    w++, v = i(a, !0);
                    var c = null,
                        u = t("<div/>"),
                        h = t("<div/>"),
                        d = t("<div/>"),
                        f = t("<div/>"),
                        y = t(a.closeHtml),
                        x = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null
                        },
                        C = {
                            toastId: w,
                            state: "visible",
                            startTime: new Date,
                            options: a,
                            map: e
                        };
                    return e.iconClass && u.addClass(a.toastClass).addClass(l), e.title && (h.append(e.title).addClass(a.titleClass), u.append(h)), e.message && (d.append(e.message).addClass(a.messageClass), u.append(d)), a.closeButton && (y.addClass("toast-close-button").attr("role", "button"), u.prepend(y)), a.progressBar && (f.addClass("toast-progress"), u.prepend(f)), u.hide(), a.newestOnTop ? v.prepend(u) : v.append(u), u[a.showMethod]({
                        duration: a.showDuration,
                        easing: a.showEasing,
                        complete: a.onShown
                    }), a.timeOut > 0 && (c = setTimeout(n, a.timeOut), x.maxHideTime = parseFloat(a.timeOut), x.hideEta = (new Date).getTime() + x.maxHideTime, a.progressBar && (x.intervalId = setInterval(r, 10))), u.hover(o, s), !a.onclick && a.tapToDismiss && u.click(n), a.closeButton && y && y.click(function(t) {
                        t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), n(!0)
                    }), a.onclick && u.click(function() {
                        a.onclick(), n()
                    }), p(C), a.debug && console && console.log(C), u
                }

                function m() {
                    return t.extend({}, d(), C.options)
                }

                function g(t) {
                    v || (v = i()), t.is(":visible") || (t.remove(), t = null, 0 === v.children().length && (v.remove(), b = void 0))
                }
                var v, y, b, w = 0,
                    x = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    C = {
                        clear: a,
                        remove: l,
                        error: e,
                        getContainer: i,
                        info: n,
                        options: {},
                        subscribe: s,
                        success: o,
                        version: "2.1.0",
                        warning: r
                    };
                return C
            }()
        })
    }("function" == typeof define && define.amd ? define : function(t, e) {
        "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
    }), function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = function(t) {
                this.canvas = t.canvas, this.ctx = t;
                var e = function(t, e) {
                        return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
                    },
                    i = this.width = e(t.canvas, "Width"),
                    s = this.height = e(t.canvas, "Height");
                t.canvas.width = i, t.canvas.height = s;
                var i = this.width = t.canvas.width,
                    s = this.height = t.canvas.height;
                return this.aspectRatio = this.width / this.height, n.retinaScale(this), this
            };
        i.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, i.types = {};
        var n = i.helpers = {},
            s = n.each = function(t, e, i) {
                var n = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var s;
                        for (s = 0; s < t.length; s++) e.apply(i, [t[s], s].concat(n))
                    } else
                        for (var o in t) e.apply(i, [t[o], o].concat(n))
            },
            o = n.clone = function(t) {
                var e = {};
                return s(t, function(i, n) {
                    t.hasOwnProperty(n) && (e[n] = i)
                }), e
            },
            r = n.extend = function(t) {
                return s(Array.prototype.slice.call(arguments, 1), function(e) {
                    s(e, function(i, n) {
                        e.hasOwnProperty(n) && (t[n] = i)
                    })
                }), t
            },
            a = n.merge = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return t.unshift({}), r.apply(null, t)
            },
            l = n.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1
            },
            c = (n.where = function(t, e) {
                var i = [];
                return n.each(t, function(t) {
                    e(t) && i.push(t)
                }), i
            }, n.findNextWhere = function(t, e, i) {
                i || (i = -1);
                for (var n = i + 1; n < t.length; n++) {
                    var s = t[n];
                    if (e(s)) return s
                }
            }, n.findPreviousWhere = function(t, e, i) {
                i || (i = t.length);
                for (var n = i - 1; n >= 0; n--) {
                    var s = t[n];
                    if (e(s)) return s;
                }
            }, n.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = i
                    };
                return n.prototype = e.prototype, i.prototype = new n, i.extend = c, t && r(i.prototype, t), i.__super__ = e.prototype, i
            }),
            u = n.noop = function() {},
            h = n.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++
                }
            }(),
            d = n.warn = function(t) {
                window.console && "function" == typeof window.console.warn && console.warn(t)
            },
            p = n.amd = "function" == typeof define && define.amd,
            f = n.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            m = n.max = function(t) {
                return Math.max.apply(Math, t)
            },
            g = n.min = function(t) {
                return Math.min.apply(Math, t)
            },
            v = (n.cap = function(t, e, i) {
                if (f(e)) {
                    if (t > e) return e
                } else if (f(i) && i > t) return i;
                return t
            }, n.getDecimalPlaces = function(t) {
                return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
            }),
            y = n.radians = function(t) {
                return t * (Math.PI / 180)
            },
            b = (n.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y,
                    s = Math.sqrt(i * i + n * n),
                    o = 2 * Math.PI + Math.atan2(n, i);
                return 0 > i && 0 > n && (o += 2 * Math.PI), {
                    angle: o,
                    distance: s
                }
            }, n.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            }),
            w = (n.splineCurve = function(t, e, i, n) {
                var s = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                    o = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                    r = n * s / (s + o),
                    a = n * o / (s + o);
                return {
                    inner: {
                        x: e.x - r * (i.x - t.x),
                        y: e.y - r * (i.y - t.y)
                    },
                    outer: {
                        x: e.x + a * (i.x - t.x),
                        y: e.y + a * (i.y - t.y)
                    }
                }
            }, n.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10)
            }),
            x = (n.calculateScaleRange = function(t, e, i, n, s) {
                var o = 2,
                    r = Math.floor(e / (1.5 * i)),
                    a = o >= r,
                    l = m(t),
                    c = g(t);
                l === c && (l += .5, c >= .5 && !n ? c -= .5 : l += .5);
                for (var u = Math.abs(l - c), h = w(u), d = Math.ceil(l / (1 * Math.pow(10, h))) * Math.pow(10, h), p = n ? 0 : Math.floor(c / (1 * Math.pow(10, h))) * Math.pow(10, h), f = d - p, v = Math.pow(10, h), y = Math.round(f / v);
                    (y > r || r > 2 * y) && !a;)
                    if (y > r) v *= 2, y = Math.round(f / v), y % 1 !== 0 && (a = !0);
                    else if (s && h >= 0) {
                    if (v / 2 % 1 !== 0) break;
                    v /= 2, y = Math.round(f / v)
                } else v /= 2, y = Math.round(f / v);
                return a && (y = o, v = f / y), {
                    steps: y,
                    stepValue: v,
                    min: p,
                    max: p + y * v
                }
            }, n.template = function(t, e) {
                function i(t, e) {
                    var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
                    return e ? i(e) : i
                }
                if (t instanceof Function) return t(e);
                var n = {};
                return i(t, e)
            }),
            C = (n.generateLabels = function(t, e, i, n) {
                var o = new Array(e);
                return labelTemplateString && s(o, function(e, s) {
                    o[s] = x(t, {
                        value: i + n * (s + 1)
                    })
                }), o
            }, n.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / i) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - C.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return .5 > t ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5
                }
            }),
            _ = n.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(),
            S = n.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(),
            T = (n.animationLoop = function(t, e, i, n, s, o) {
                var r = 0,
                    a = C[i] || C.linear,
                    l = function() {
                        r++;
                        var i = r / e,
                            c = a(i);
                        t.call(o, c, i, r), n.call(o, c, i), e > r ? o.animationFrame = _(l) : s.apply(o)
                    };
                _(l)
            }, n.getRelativePosition = function(t) {
                var e, i, n = t.originalEvent || t,
                    s = t.currentTarget || t.srcElement,
                    o = s.getBoundingClientRect();
                return n.touches ? (e = n.touches[0].clientX - o.left, i = n.touches[0].clientY - o.top) : (e = n.clientX - o.left, i = n.clientY - o.top), {
                    x: e,
                    y: i
                }
            }, n.addEvent = function(t, e, i) {
                t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }),
            E = n.removeEvent = function(t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = u
            },
            k = (n.bindEvents = function(t, e, i) {
                t.events || (t.events = {}), s(e, function(e) {
                    t.events[e] = function() {
                        i.apply(t, arguments)
                    }, T(t.chart.canvas, e, t.events[e])
                })
            }, n.unbindEvents = function(t, e) {
                s(e, function(e, i) {
                    E(t.chart.canvas, i, e)
                })
            }),
            A = n.getMaximumWidth = function(t) {
                var e = t.parentNode;
                return e.clientWidth
            },
            I = n.getMaximumHeight = function(t) {
                var e = t.parentNode;
                return e.clientHeight
            },
            L = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    n = t.canvas.height;
                window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            P = n.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            M = n.fontString = function(t, e, i) {
                return e + " " + t + "px " + i
            },
            D = n.longestText = function(t, e, i) {
                t.font = e;
                var n = 0;
                return s(i, function(e) {
                    var i = t.measureText(e).width;
                    n = i > n ? i : n
                }), n
            },
            z = n.drawRoundedRectangle = function(t, e, i, n, s, o) {
                t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + o), t.lineTo(e + n, i + s - o), t.quadraticCurveTo(e + n, i + s, e + n - o, i + s), t.lineTo(e + o, i + s), t.quadraticCurveTo(e, i + s, e, i + s - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath()
            };
        i.instances = {}, i.Type = function(t, e, n) {
            this.options = e, this.chart = n, this.id = h(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
        }, r(i.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return P(this.chart), this
            },
            stop: function() {
                return S(this.animationFrame), this
            },
            resize: function(t) {
                this.stop();
                var e = this.chart.canvas,
                    i = A(this.chart.canvas),
                    n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : I(this.chart.canvas);
                return e.width = this.chart.width = i, e.height = this.chart.height = n, L(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: u,
            render: function(t) {
                return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
            },
            generateLegend: function() {
                return x(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), k(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
            },
            showTooltip: function(t, e) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var o = function(t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (s(t, function(t, i) {
                        t !== this.activeElements[i] && (e = !0)
                    }, this), e)
                }.call(this, t);
                if (o || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var r, a, c = this.datasets.length - 1; c >= 0 && (r = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, a = l(r, t[0]), -1 === a); c--);
                            var u = [],
                                h = [],
                                d = function() {
                                    var t, e, i, s, o, r = [],
                                        l = [],
                                        c = [];
                                    return n.each(this.datasets, function(e) {
                                        t = e.points || e.bars || e.segments, t[a] && t[a].hasValue() && r.push(t[a])
                                    }), n.each(r, function(t) {
                                        l.push(t.x), c.push(t.y), u.push(n.template(this.options.multiTooltipTemplate, t)), h.push({
                                            fill: t._saved.fillColor || t.fillColor,
                                            stroke: t._saved.strokeColor || t.strokeColor
                                        })
                                    }, this), o = g(c), i = m(c), s = g(l), e = m(l), {
                                        x: s > this.chart.width / 2 ? s : e,
                                        y: (o + i) / 2
                                    }
                                }.call(this, a);
                            new i.MultiTooltip({
                                x: d.x,
                                y: d.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: u,
                                legendColors: h,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: t[0].label,
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else s(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({
                                x: Math.round(e.x),
                                y: Math.round(e.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: x(this.options.tooltipTemplate, t),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), i.Type.extend = function(t) {
            var e = this,
                n = function() {
                    return e.apply(this, arguments)
                };
            if (n.prototype = o(e.prototype), r(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
                var s = t.name || e.prototype.name,
                    l = i.defaults[e.prototype.name] ? o(i.defaults[e.prototype.name]) : {};
                i.defaults[s] = r(l, t.defaults), i.types[s] = n, i.prototype[s] = function(t, e) {
                    var o = a(i.defaults.global, i.defaults[s], e || {});
                    return new n(t, o, this)
                }
            } else d("Name not provided for this chart, so it hasn't been registered");
            return e
        }, i.Element = function(t) {
            r(this, t), this.initialize.apply(this, arguments), this.save()
        }, r(i.Element.prototype, {
            initialize: function() {},
            restore: function(t) {
                return t ? s(t, function(t) {
                    this[t] = this._saved[t]
                }, this) : r(this, this._saved), this
            },
            save: function() {
                return this._saved = o(this), delete this._saved._saved, this
            },
            update: function(t) {
                return s(t, function(t, e) {
                    this._saved[e] = this[e], this[e] = t
                }, this), this
            },
            transition: function(t, e) {
                return s(t, function(t, i) {
                    this[i] = (t - this._saved[i]) * e + this._saved[i]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return f(this.value)
            }
        }), i.Element.extend = c, i.Point = i.Element.extend({
            display: !0,
            inRange: function(t, e) {
                var i = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                }
            }
        }), i.Arc = i.Element.extend({
            inRange: function(t, e) {
                var i = n.getAngleFromPoint(this, {
                        x: t,
                        y: e
                    }),
                    s = i.angle >= this.startAngle && i.angle <= this.endAngle,
                    o = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                return s && o
            },
            tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(t) * e,
                    y: this.y + Math.sin(t) * e
                }
            },
            draw: function(t) {
                var e = this.ctx;
                e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
            }
        }), i.Rectangle = i.Element.extend({
            draw: function() {
                var t = this.ctx,
                    e = this.width / 2,
                    i = this.x - e,
                    n = this.x + e,
                    s = this.base - (this.base - this.y),
                    o = this.strokeWidth / 2;
                this.showStroke && (i += o, n -= o, s += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, s), t.lineTo(n, s), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
            }
        }), i.Tooltip = i.Element.extend({
            draw: function() {
                var t = this.chart.ctx;
                t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2,
                    i = t.measureText(this.text).width + 2 * this.xPadding,
                    n = this.fontSize + 2 * this.yPadding,
                    s = n + this.caretHeight + e;
                this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - s < 0 && (this.yAlign = "below");
                var o = this.x - i / 2,
                    r = this.y - s;
                if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case "below":
                            r = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            o = this.x - i + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            o = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    z(t, o, r, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + i / 2, r + n / 2)
                }
            }
        }), i.MultiTooltip = i.Element.extend({
            initialize: function() {
                this.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = M(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    e = D(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    i = m([e, t]);
                this.width = i + 2 * this.xPadding;
                var n = this.height / 2;
                this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(t) {
                var e = this.y - this.height / 2 + this.yPadding,
                    i = t - 1;
                return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    z(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
                        t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), i.Scale = i.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }));
                this.yLabelWidth = this.display && this.showLabels ? D(this.ctx, this.font, this.yLabels) : 0
            },
            addXLabel: function(t) {
                this.xLabels.push(t), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var t, e = this.endPoint - this.startPoint;
                for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
                    n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth + 10 ? i / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                    var s, o = D(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = o;
                    for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) s = Math.cos(y(this.xLabelRotation)), t = s * i, e = s * n, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = s * o;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * o + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: u,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min)
            },
            calculateX: function(t) {
                var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    n = i * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (n += i / 2), Math.round(n)
            },
            update: function(t) {
                n.extend(this, t), this.fit()
            },
            draw: function() {
                var t = this.ctx,
                    e = (this.endPoint - this.startPoint) / this.steps,
                    i = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, s(this.yLabels, function(s, o) {
                    var r = this.endPoint - e * o,
                        a = Math.round(r),
                        l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(s, i - 10, r), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, a), t.lineTo(this.width, a), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, a), t.lineTo(i, a), t.stroke(), t.closePath()
                }, this), s(this.xLabels, function(e, i) {
                    var n = this.calculateX(i) + b(this.lineWidth),
                        s = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth),
                        o = this.xLabelRotation > 0,
                        r = this.showVerticalLines;
                    0 !== i || r || (r = !0), r && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r && (t.moveTo(s, this.endPoint), t.lineTo(s, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(s, this.endPoint), t.lineTo(s, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * y(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                }, this))
            }
        }), i.RadialScale = i.Element.extend({
            initialize: function() {
                this.size = g([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var t, e, i, n, s, o, r, a, l, c, u, h, d = g([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    p = this.width,
                    m = 0;
                for (this.ctx.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, d), i = this.ctx.measureText(x(this.templateString, {
                    value: this.labels[e]
                })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, s = e), t.x - n < m && (m = t.x - n, r = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, s = e) : e > this.valuesCount / 2 && t.x - i < m && (m = t.x - i, r = e);
                l = m, c = Math.ceil(p - this.width), o = this.getIndexAngle(s), a = this.getIndexAngle(r), u = c / Math.sin(o + Math.PI / 2), h = l / Math.sin(a + Math.PI / 2), u = f(u) ? u : 0, h = f(h) ? h : 0, this.drawingArea = d - (h + u) / 2, this.setCenterPoint(h, u)
            },
            setCenterPoint: function(t, e) {
                var i = this.width - e - this.drawingArea,
                    n = t + this.drawingArea;
                this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t);
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (s(this.yLabels, function(e, i) {
                            if (i > 0) {
                                var n, s = i * (this.drawingArea / this.steps),
                                    o = this.yCenter - s;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, s, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else {
                                        t.beginPath();
                                        for (var r = 0; r < this.valuesCount; r++) n = this.getPointPosition(r, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === r ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
                                        t.closePath(), t.stroke()
                                    }
                                if (this.showLabels) {
                                    if (t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var a = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - a / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, a + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, o)
                                }
                            }
                        }, this), !this.lineArc) {
                        t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            if (this.angleLineWidth > 0) {
                                var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
                            }
                            var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var o = this.labels.length,
                                r = this.labels.length / 2,
                                a = r / 2,
                                l = a > e || e > o - a,
                                c = e === a || e === o - a;
                            t.textAlign = 0 === e ? "center" : e === r ? "center" : r > e ? "left" : "right", t.textBaseline = c ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[e], n.x, n.y)
                        }
                    }
                }
            }
        }), n.addEvent(window, "resize", function() {
            var t;
            return function() {
                clearTimeout(t), t = setTimeout(function() {
                    s(i.instances, function(t) {
                        t.options.responsive && t.resize(t.render, !0)
                    })
                }, 50)
            }
        }()), p ? define(function() {
            return i
        }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
            return t.Chart = e, i
        }
    }.call(this), function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Bar",
            defaults: n,
            initialize: function(t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, e, i) {
                        var s = this.calculateBaseWidth(),
                            o = this.calculateX(i) - s / 2,
                            r = this.calculateBarWidth(t);
                        return o + r * e + e * n.barDatasetSpacing + r / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        bars: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, s) {
                        n.bars.push(new this.BarClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
                    i.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                i.each(this.datasets, function(e, n) {
                    i.each(e.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var e, n = [], s = i.getRelativePosition(t), o = function(t) {
                        n.push(t.bars[e])
                    }, r = 0; r < this.datasets.length; r++)
                    for (e = 0; e < this.datasets[r].bars.length; e++)
                        if (this.datasets[r].bars[e].inRange(s.x, s.y)) return i.each(this.datasets, o), n;
                return n
            },
            buildScale: function(t) {
                var e = this,
                    n = function() {
                        var t = [];
                        return e.eachBars(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    s = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(s, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(s)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[i].strokeColor,
                        fillColor: this.datasets[i].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                i.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), this.chart.ctx, this.scale.draw(e), i.each(this.datasets, function(t, n) {
                    i.each(t.bars, function(t, i) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, i),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this), function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Doughnut",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), i || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return 2 * Math.PI * (Math.abs(t) / this.total)
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), i.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({
            name: "Pie",
            defaults: i.merge(n, {
                percentageInnerCutout: 0
            })
        })
    }.call(this), function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Line",
            defaults: n,
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, s) {
                        n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
                        i.extend(t, {
                            x: this.scale.calculateX(e),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) {
                    i.each(t.points, function(t) {
                        t.inRange(n.x, n.y) && e.push(t)
                    })
                }, this), e
            },
            buildScale: function(t) {
                var n = this,
                    s = function() {
                        var t = [];
                        return n.eachPoints(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(o, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(o)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    s = function(t) {
                        return null !== t.value
                    },
                    o = function(t, e, n) {
                        return i.findNextWhere(e, s, n) || t
                    },
                    r = function(t, e, n) {
                        return i.findPreviousWhere(e, s, n) || t
                    };
                this.scale.draw(e), i.each(this.datasets, function(t) {
                    var a = i.where(t.points, s);
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(i)
                        }, e)
                    }, this), this.options.bezierCurve && i.each(a, function(t, e) {
                        var n = e > 0 && e < a.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(r(t, a, e), t, o(t, a, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(a, function(t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = r(t, a, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else n.lineTo(t.x, t.y)
                    }, this), n.stroke(), this.options.datasetFill && a.length > 0 && (n.lineTo(a[a.length - 1].x, this.scale.endPoint), n.lineTo(a[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(a, function(t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this), function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "PolarArea",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) {
                    e.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, {
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.segments, function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this), function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, s) {
                        var o;
                        this.scale.animation || (o = this.scale.getPointPosition(s, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            x: this.options.animation ? this.scale.xCenter : o.x,
                            y: this.options.animation ? this.scale.yCenter : o.y,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, e),
                    s = 2 * Math.PI / this.scale.valuesCount,
                    o = Math.round((n.angle - 1.5 * Math.PI) / s),
                    r = [];
                return (o >= this.scale.valuesCount || 0 > o) && (o = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                    r.push(t.points[o])
                }), r
            },
            buildScale: function(t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) {
                            t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                                e.push(t.value)
                            })
                        }), e
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n)
            },
            addData: function(t, e) {
                this.scale.valuesCount++, i.each(t, function(t, i) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        x: n.x,
                        y: n.y,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), i.each(t.points, function(t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this), window.Modernizr = function(t, e, i) {
        function n(t) {
            p.cssText = t
        }

        function s(t, e) {
            return typeof t === e
        }
        var o, r, a, l = "2.6.2",
            c = {},
            u = e.documentElement,
            h = "modernizr",
            d = e.createElement(h),
            p = d.style,
            f = ({}.toString, {}),
            m = [],
            g = m.slice,
            v = {}.hasOwnProperty;
        a = s(v, "undefined") || s(v.call, "undefined") ? function(t, e) {
            return e in t && s(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return v.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = g.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var s = function() {};
                        s.prototype = e.prototype;
                        var o = new s,
                            r = e.apply(o, i.concat(g.call(arguments)));
                        return Object(r) === r ? r : o
                    }
                    return e.apply(t, i.concat(g.call(arguments)))
                };
            return n
        }), f.canvas = function() {
            var t = e.createElement("canvas");
            return !!t.getContext && !!t.getContext("2d")
        };
        for (var y in f) a(f, y) && (r = y.toLowerCase(), c[r] = f[y](), m.push((c[r] ? "" : "no-") + r));
        return c.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) a(t, n) && c.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), c[t] !== i) return c;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof enableClasses && enableClasses && (u.className += " " + (e ? "" : "no-") + t), c[t] = e
                }
                return c
            }, n(""), d = o = null,
            function(t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = v.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function s(t) {
                    var e = g[t[f]];
                    return e || (e = {}, m++, t[f] = m, g[m] = e), e
                }

                function o(t, i, n) {
                    if (i || (i = e), u) return i.createElement(t);
                    n || (n = s(i));
                    var o;
                    return o = n.cache[t] ? n.cache[t].cloneNode() : p.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), o.canHaveChildren && !d.test(t) ? n.frag.appendChild(o) : o
                }

                function r(t, i) {
                    if (t || (t = e), u) return t.createDocumentFragment();
                    i = i || s(t);
                    for (var o = i.frag.cloneNode(), r = 0, a = n(), l = a.length; l > r; r++) o.createElement(a[r]);
                    return o
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                        return v.shivMethods ? o(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(v, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = s(t);
                    return v.shivCSS && !c && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || a(t, n), t
                }
                var c, u, h = t.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f = "_html5shiv",
                    m = 0,
                    g = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        c = !0, u = !0
                    }
                }();
                var v = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: r
                };
                t.html5 = v, l(e)
            }(this, e), c._version = l, c
    }(this, this.document), function(t, e, i) {
        function n(t) {
            return "[object Function]" == g.call(t)
        }

        function s(t) {
            return "string" == typeof t
        }

        function o() {}

        function r(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = v.shift();
            y = 1, t ? t.t ? f(function() {
                ("c" == t.t ? d.injectCss : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : y = 0
        }

        function l(t, i, n, s, o, l, c) {
            function u(e) {
                if (!p && r(h.readyState) && (b.r = p = 1, !y && a(), h.onload = h.onreadystatechange = null, e)) {
                    "img" != t && f(function() {
                        x.removeChild(h)
                    }, 50);
                    for (var n in E[i]) E[i].hasOwnProperty(n) && E[i][n].onload()
                }
            }
            var c = c || d.errorTimeout,
                h = e.createElement(t),
                p = 0,
                g = 0,
                b = {
                    t: n,
                    s: i,
                    e: o,
                    a: l,
                    x: c
                };
            1 === E[i] && (g = 1, E[i] = []), "object" == t ? h.data = i : (h.src = i, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                u.call(this, g)
            }, v.splice(s, 0, b), "img" != t && (g || 2 === E[i] ? (x.insertBefore(h, w ? null : m), f(u, c)) : E[i].push(h))
        }

        function c(t, e, i, n, o) {
            return y = 0, e = e || "j", s(t) ? l("c" == e ? _ : C, t, e, this.i++, i, n, o) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
        }

        function u() {
            var t = d;
            return t.loader = {
                load: c,
                i: 0
            }, t
        }
        var h, d, p = e.documentElement,
            f = t.setTimeout,
            m = e.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            w = b && !!e.createRange().compareNode,
            x = w ? p : m.parentNode,
            p = t.opera && "[object Opera]" == g.call(t.opera),
            p = !!e.attachEvent && !p,
            C = b ? "object" : p ? "script" : "img",
            _ = p ? "script" : C,
            S = Array.isArray || function(t) {
                return "[object Array]" == g.call(t)
            },
            T = [],
            E = {},
            k = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        d = function(t) {
            function e(t) {
                var e, i, n, t = t.split("!"),
                    s = T.length,
                    o = t.pop(),
                    r = t.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: t
                    };
                for (i = 0; r > i; i++) n = t[i].split("="), (e = k[n.shift()]) && (o = e(o, n));
                for (i = 0; s > i; i++) o = T[i](o);
                return o
            }

            function r(t, s, o, r, a) {
                var l = e(t),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (s && (s = n(s) ? s : s[t] || s[r] || s[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, s, o, r, a) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(s) || n(c)) && o.load(function() {
                    u(), s && s(l.origUrl, a, r), c && c(l.origUrl, a, r), E[l.url] = 2
                })))
            }

            function a(t, e) {
                function i(t, i) {
                    if (t) {
                        if (s(t)) i || (h = function() {
                            var t = [].slice.call(arguments);
                            d.apply(this, t), p()
                        }), r(t, h, e, 0, c);
                        else if (Object(t) === t)
                            for (l in a = function() {
                                    var e, i = 0;
                                    for (e in t) t.hasOwnProperty(e) && i++;
                                    return i
                                }(), t) t.hasOwnProperty(l) && (!i && !--a && (n(h) ? h = function() {
                                var t = [].slice.call(arguments);
                                d.apply(this, t), p()
                            } : h[l] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), p()
                                }
                            }(d[l])), r(t[l], h, e, l, c))
                    } else !i && p()
                }
                var a, l, c = !!t.test,
                    u = t.load || t.both,
                    h = t.callback || o,
                    d = h,
                    p = t.complete || o;
                i(c ? t.yep : t.nope, !!u), u && i(u)
            }
            var l, c, h = this.yepnope.loader;
            if (s(t)) r(t, 0, h, 0);
            else if (S(t))
                for (l = 0; l < t.length; l++) c = t[l], s(c) ? r(c, 0, h, 0) : S(c) ? d(c) : Object(c) === c && a(c, h);
            else Object(t) === t && a(t, h)
        }, d.addPrefix = function(t, e) {
            k[t] = e
        }, d.addFilter = function(t) {
            T.push(t)
        }, d.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function() {
            e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete"
        }, 0)), t.yepnope = u(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, n, s, l, c) {
            var u, h, p = e.createElement("script"),
                s = s || d.errorTimeout;
            p.src = t;
            for (h in n) p.setAttribute(h, n[h]);
            i = c ? a : i || o, p.onreadystatechange = p.onload = function() {
                !u && r(p.readyState) && (u = 1, i(), p.onload = p.onreadystatechange = null)
            }, f(function() {
                u || (u = 1, i(1))
            }, s), l ? p.onload() : m.parentNode.insertBefore(p, m)
        }, t.yepnope.injectCss = function(t, i, n, s, r, l) {
            var c, s = e.createElement("link"),
                i = l ? a : i || o;
            s.href = t, s.rel = "stylesheet", s.type = "text/css";
            for (c in n) s.setAttribute(c, n[c]);
            r || (m.parentNode.insertBefore(s, m), f(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function(t) {
        "use strict";

        function e(e) {
            var i = e.data;
            e.isDefaultPrevented() || (e.preventDefault(), t(e.target).ajaxSubmit(i))
        }

        function i(e) {
            var i = e.target,
                n = t(i);
            if (!n.is("[type=submit],[type=image]")) {
                var s = n.closest("[type=submit]");
                if (0 === s.length) return;
                i = s[0]
            }
            var o = this;
            if (o.clk = i, "image" == i.type)
                if (void 0 !== e.offsetX) o.clk_x = e.offsetX, o.clk_y = e.offsetY;
                else if ("function" == typeof t.fn.offset) {
                var r = n.offset();
                o.clk_x = e.pageX - r.left, o.clk_y = e.pageY - r.top
            } else o.clk_x = e.pageX - i.offsetLeft, o.clk_y = e.pageY - i.offsetTop;
            setTimeout(function() {
                o.clk = o.clk_x = o.clk_y = null
            }, 100)
        }

        function n() {
            if (t.fn.ajaxSubmit.debug) {
                var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
            }
        }
        var s = {};
        s.fileapi = void 0 !== t("<input type='file'/>").get(0).files, s.formdata = void 0 !== window.FormData;
        var o = !!t.fn.prop;
        t.fn.attr2 = function() {
            if (!o) return this.attr.apply(this, arguments);
            var t = this.prop.apply(this, arguments);
            return t && t.jquery || "string" == typeof t ? t : this.attr.apply(this, arguments)
        }, t.fn.ajaxSubmit = function(e) {
            function i(i) {
                var n, s, o = t.param(i, e.traditional).split("&"),
                    r = o.length,
                    a = [];
                for (n = 0; r > n; n++) o[n] = o[n].replace(/\+/g, " "), s = o[n].split("="), a.push([decodeURIComponent(s[0]), decodeURIComponent(s[1])]);
                return a
            }

            function r(n) {
                for (var s = new FormData, o = 0; o < n.length; o++) s.append(n[o].name, n[o].value);
                if (e.extraData) {
                    var r = i(e.extraData);
                    for (o = 0; o < r.length; o++) r[o] && s.append(r[o][0], r[o][1])
                }
                e.data = null;
                var a = t.extend(!0, {}, t.ajaxSettings, e, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: l || "POST"
                });
                e.uploadProgress && (a.xhr = function() {
                    var i = t.ajaxSettings.xhr();
                    return i.upload && i.upload.addEventListener("progress", function(t) {
                        var i = 0,
                            n = t.loaded || t.position,
                            s = t.total;
                        t.lengthComputable && (i = Math.ceil(n / s * 100)), e.uploadProgress(t, n, s, i)
                    }, !1), i
                }), a.data = null;
                var c = a.beforeSend;
                return a.beforeSend = function(t, i) {
                    i.data = e.formData ? e.formData : s, c && c.call(this, t, i)
                }, t.ajax(a)
            }

            function a(i) {
                function s(t) {
                    var e = null;
                    try {
                        t.contentWindow && (e = t.contentWindow.document)
                    } catch (i) {
                        n("cannot get iframe.contentWindow document: " + i)
                    }
                    if (e) return e;
                    try {
                        e = t.contentDocument ? t.contentDocument : t.document
                    } catch (i) {
                        n("cannot get iframe.contentDocument: " + i), e = t.document
                    }
                    return e
                }

                function r() {
                    function e() {
                        try {
                            var t = s(v).readyState;
                            n("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (i) {
                            n("Server abort: ", i, " (", i.name, ")"), a(E), C && clearTimeout(C), C = void 0
                        }
                    }
                    var i = h.attr2("target"),
                        o = h.attr2("action"),
                        r = "multipart/form-data",
                        c = h.attr("enctype") || h.attr("encoding") || r;
                    _.setAttribute("target", f), (!l || /post/i.test(l)) && _.setAttribute("method", "POST"), o != d.url && _.setAttribute("action", d.url), d.skipEncodingOverride || l && !/post/i.test(l) || h.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), d.timeout && (C = setTimeout(function() {
                        x = !0, a(T)
                    }, d.timeout));
                    var u = [];
                    try {
                        if (d.extraData)
                            for (var p in d.extraData) d.extraData.hasOwnProperty(p) && u.push(t.isPlainObject(d.extraData[p]) && d.extraData[p].hasOwnProperty("name") && d.extraData[p].hasOwnProperty("value") ? t('<input type="hidden" name="' + d.extraData[p].name + '">').val(d.extraData[p].value).appendTo(_)[0] : t('<input type="hidden" name="' + p + '">').val(d.extraData[p]).appendTo(_)[0]);
                        d.iframeTarget || g.appendTo("body"), v.attachEvent ? v.attachEvent("onload", a) : v.addEventListener("load", a, !1), setTimeout(e, 15);
                        try {
                            _.submit()
                        } catch (m) {
                            var y = document.createElement("form").submit;
                            y.apply(_)
                        }
                    } finally {
                        _.setAttribute("action", o), _.setAttribute("enctype", c), i ? _.setAttribute("target", i) : h.removeAttr("target"), t(u).remove()
                    }
                }

                function a(e) {
                    if (!y.aborted && !P) {
                        if (L = s(v), L || (n("cannot access response document"), e = E), e === T && y) return y.abort("timeout"), void S.reject(y, "timeout");
                        if (e == E && y) return y.abort("server abort"), void S.reject(y, "error", "server abort");
                        if (L && L.location.href != d.iframeSrc || x) {
                            v.detachEvent ? v.detachEvent("onload", a) : v.removeEventListener("load", a, !1);
                            var i, o = "success";
                            try {
                                if (x) throw "timeout";
                                var r = "xml" == d.dataType || L.XMLDocument || t.isXMLDoc(L);
                                if (n("isXml=" + r), !r && window.opera && (null === L.body || !L.body.innerHTML) && --M) return n("requeing onLoad callback, DOM not available"), void setTimeout(a, 250);
                                var l = L.body ? L.body : L.documentElement;
                                y.responseText = l ? l.innerHTML : null, y.responseXML = L.XMLDocument ? L.XMLDocument : L, r && (d.dataType = "xml"), y.getResponseHeader = function(t) {
                                    var e = {
                                        "content-type": d.dataType
                                    };
                                    return e[t.toLowerCase()]
                                }, l && (y.status = Number(l.getAttribute("status")) || y.status, y.statusText = l.getAttribute("statusText") || y.statusText);
                                var c = (d.dataType || "").toLowerCase(),
                                    u = /(json|script|text)/.test(c);
                                if (u || d.textarea) {
                                    var h = L.getElementsByTagName("textarea")[0];
                                    if (h) y.responseText = h.value, y.status = Number(h.getAttribute("status")) || y.status, y.statusText = h.getAttribute("statusText") || y.statusText;
                                    else if (u) {
                                        var f = L.getElementsByTagName("pre")[0],
                                            m = L.getElementsByTagName("body")[0];
                                        f ? y.responseText = f.textContent ? f.textContent : f.innerText : m && (y.responseText = m.textContent ? m.textContent : m.innerText)
                                    }
                                } else "xml" == c && !y.responseXML && y.responseText && (y.responseXML = D(y.responseText));
                                try {
                                    I = N(y, c, d)
                                } catch (b) {
                                    o = "parsererror", y.error = i = b || o
                                }
                            } catch (b) {
                                n("error caught: ", b), o = "error", y.error = i = b || o
                            }
                            y.aborted && (n("upload aborted"), o = null), y.status && (o = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === o ? (d.success && d.success.call(d.context, I, "success", y), S.resolve(y.responseText, "success", y), p && t.event.trigger("ajaxSuccess", [y, d])) : o && (void 0 === i && (i = y.statusText), d.error && d.error.call(d.context, y, o, i), S.reject(y, "error", i), p && t.event.trigger("ajaxError", [y, d, i])), p && t.event.trigger("ajaxComplete", [y, d]), p && !--t.active && t.event.trigger("ajaxStop"), d.complete && d.complete.call(d.context, y, o), P = !0, d.timeout && clearTimeout(C), setTimeout(function() {
                                d.iframeTarget ? g.attr("src", d.iframeSrc) : g.remove(), y.responseXML = null
                            }, 100)
                        }
                    }
                }
                var c, u, d, p, f, g, v, y, b, w, x, C, _ = h[0],
                    S = t.Deferred();
                if (S.abort = function(t) {
                        y.abort(t)
                    }, i)
                    for (u = 0; u < m.length; u++) c = t(m[u]), o ? c.prop("disabled", !1) : c.removeAttr("disabled");
                if (d = t.extend(!0, {}, t.ajaxSettings, e), d.context = d.context || d, f = "jqFormIO" + (new Date).getTime(), d.iframeTarget ? (g = t(d.iframeTarget), w = g.attr2("name"), w ? f = w : g.attr2("name", f)) : (g = t('<iframe name="' + f + '" src="' + d.iframeSrc + '" />'), g.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), v = g[0], y = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(e) {
                            var i = "timeout" === e ? "timeout" : "aborted";
                            n("aborting upload... " + i), this.aborted = 1;
                            try {
                                v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                            } catch (s) {}
                            g.attr("src", d.iframeSrc), y.error = i, d.error && d.error.call(d.context, y, i, e), p && t.event.trigger("ajaxError", [y, d, i]), d.complete && d.complete.call(d.context, y, i)
                        }
                    }, p = d.global, p && 0 === t.active++ && t.event.trigger("ajaxStart"), p && t.event.trigger("ajaxSend", [y, d]), d.beforeSend && d.beforeSend.call(d.context, y, d) === !1) return d.global && t.active--, S.reject(), S;
                if (y.aborted) return S.reject(), S;
                b = _.clk, b && (w = b.name, w && !b.disabled && (d.extraData = d.extraData || {}, d.extraData[w] = b.value, "image" == b.type && (d.extraData[w + ".x"] = _.clk_x, d.extraData[w + ".y"] = _.clk_y)));
                var T = 1,
                    E = 2,
                    k = t("meta[name=csrf-token]").attr("content"),
                    A = t("meta[name=csrf-param]").attr("content");
                A && k && (d.extraData = d.extraData || {}, d.extraData[A] = k), d.forceSync ? r() : setTimeout(r, 10);
                var I, L, P, M = 50,
                    D = t.parseXML || function(t, e) {
                        return window.ActiveXObject ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) : e = (new DOMParser).parseFromString(t, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
                    },
                    z = t.parseJSON || function(t) {
                        return window.eval("(" + t + ")")
                    },
                    N = function(e, i, n) {
                        var s = e.getResponseHeader("content-type") || "",
                            o = "xml" === i || !i && s.indexOf("xml") >= 0,
                            r = o ? e.responseXML : e.responseText;
                        return o && "parsererror" === r.documentElement.nodeName && t.error && t.error("parsererror"), n && n.dataFilter && (r = n.dataFilter(r, i)), "string" == typeof r && ("json" === i || !i && s.indexOf("json") >= 0 ? r = z(r) : ("script" === i || !i && s.indexOf("javascript") >= 0) && t.globalEval(r)), r
                    };
                return S
            }
            if (!this.length) return n("ajaxSubmit: skipping submit process - no element selected"), this;
            var l, c, u, h = this;
            "function" == typeof e ? e = {
                success: e
            } : void 0 === e && (e = {}), l = e.type || this.attr2("method"), c = e.url || this.attr2("action"), u = "string" == typeof c ? t.trim(c) : "", u = u || window.location.href || "", u && (u = (u.match(/^([^#]+)/) || [])[1]), e = t.extend(!0, {
                url: u,
                success: t.ajaxSettings.success,
                type: l || t.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, e);
            var d = {};
            if (this.trigger("form-pre-serialize", [this, e, d]), d.veto) return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (e.beforeSerialize && e.beforeSerialize(this, e) === !1) return n("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var p = e.traditional;
            void 0 === p && (p = t.ajaxSettings.traditional);
            var f, m = [],
                g = this.formToArray(e.semantic, m);
            if (e.data && (e.extraData = e.data, f = t.param(e.data, p)), e.beforeSubmit && e.beforeSubmit(g, this, e) === !1) return n("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [g, this, e, d]), d.veto) return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var v = t.param(g, p);
            f && (v = v ? v + "&" + f : f), "GET" == e.type.toUpperCase() ? (e.url += (e.url.indexOf("?") >= 0 ? "&" : "?") + v, e.data = null) : e.data = v;
            var y = [];
            if (e.resetForm && y.push(function() {
                    h.resetForm()
                }), e.clearForm && y.push(function() {
                    h.clearForm(e.includeHidden)
                }), !e.dataType && e.target) {
                var b = e.success || function() {};
                y.push(function(i) {
                    var n = e.replaceTarget ? "replaceWith" : "html";
                    t(e.target)[n](i).each(b, arguments)
                })
            } else e.success && y.push(e.success);
            if (e.success = function(t, i, n) {
                    for (var s = e.context || this, o = 0, r = y.length; r > o; o++) y[o].apply(s, [t, i, n || h, h])
                }, e.error) {
                var w = e.error;
                e.error = function(t, i, n) {
                    var s = e.context || this;
                    w.apply(s, [t, i, n, h])
                }
            }
            if (e.complete) {
                var x = e.complete;
                e.complete = function(t, i) {
                    var n = e.context || this;
                    x.apply(n, [t, i, h])
                }
            }
            var C = t("input[type=file]:enabled", this).filter(function() {
                    return "" !== t(this).val()
                }),
                _ = C.length > 0,
                S = "multipart/form-data",
                T = h.attr("enctype") == S || h.attr("encoding") == S,
                E = s.fileapi && s.formdata;
            n("fileAPI :" + E);
            var k, A = (_ || T) && !E;
            e.iframe !== !1 && (e.iframe || A) ? e.closeKeepAlive ? t.get(e.closeKeepAlive, function() {
                k = a(g)
            }) : k = a(g) : k = (_ || T) && E ? r(g) : t.ajax(e), h.removeData("jqxhr").data("jqxhr", k);
            for (var I = 0; I < m.length; I++) m[I] = null;
            return this.trigger("form-submit-notify", [this, e]), this
        }, t.fn.ajaxForm = function(s) {
            if (s = s || {}, s.delegation = s.delegation && t.isFunction(t.fn.on), !s.delegation && 0 === this.length) {
                var o = {
                    s: this.selector,
                    c: this.context
                };
                return !t.isReady && o.s ? (n("DOM not ready, queuing ajaxForm"), t(function() {
                    t(o.s, o.c).ajaxForm(s)
                }), this) : (n("terminating; zero elements found by selector" + (t.isReady ? "" : " (DOM not ready)")), this)
            }
            return s.delegation ? (t(document).off("submit.form-plugin", this.selector, e).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, s, e).on("click.form-plugin", this.selector, s, i), this) : this.ajaxFormUnbind().bind("submit.form-plugin", s, e).bind("click.form-plugin", s, i)
        }, t.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, t.fn.formToArray = function(e, i) {
            var n = [];
            if (0 === this.length) return n;
            var o, r = this[0],
                a = this.attr("id"),
                l = e ? r.getElementsByTagName("*") : r.elements;
            if (l && !/MSIE [678]/.test(navigator.userAgent) && (l = t(l).get()), a && (o = t(':input[form="' + a + '"]').get(), o.length && (l = (l || []).concat(o))), !l || !l.length) return n;
            var c, u, h, d, p, f, m;
            for (c = 0, f = l.length; f > c; c++)
                if (p = l[c], h = p.name, h && !p.disabled)
                    if (e && r.clk && "image" == p.type) r.clk == p && (n.push({
                        name: h,
                        value: t(p).val(),
                        type: p.type
                    }), n.push({
                        name: h + ".x",
                        value: r.clk_x
                    }, {
                        name: h + ".y",
                        value: r.clk_y
                    }));
                    else if (d = t.fieldValue(p, !0), d && d.constructor == Array)
                for (i && i.push(p), u = 0, m = d.length; m > u; u++) n.push({
                    name: h,
                    value: d[u]
                });
            else if (s.fileapi && "file" == p.type) {
                i && i.push(p);
                var g = p.files;
                if (g.length)
                    for (u = 0; u < g.length; u++) n.push({
                        name: h,
                        value: g[u],
                        type: p.type
                    });
                else n.push({
                    name: h,
                    value: "",
                    type: p.type
                })
            } else null !== d && "undefined" != typeof d && (i && i.push(p), n.push({
                name: h,
                value: d,
                type: p.type,
                required: p.required
            }));
            if (!e && r.clk) {
                var v = t(r.clk),
                    y = v[0];
                h = y.name, h && !y.disabled && "image" == y.type && (n.push({
                    name: h,
                    value: v.val()
                }), n.push({
                    name: h + ".x",
                    value: r.clk_x
                }, {
                    name: h + ".y",
                    value: r.clk_y
                }))
            }
            return n
        }, t.fn.formSerialize = function(e) {
            return t.param(this.formToArray(e))
        }, t.fn.fieldSerialize = function(e) {
            var i = [];
            return this.each(function() {
                var n = this.name;
                if (n) {
                    var s = t.fieldValue(this, e);
                    if (s && s.constructor == Array)
                        for (var o = 0, r = s.length; r > o; o++) i.push({
                            name: n,
                            value: s[o]
                        });
                    else null !== s && "undefined" != typeof s && i.push({
                        name: this.name,
                        value: s
                    })
                }
            }), t.param(i)
        }, t.fn.fieldValue = function(e) {
            for (var i = [], n = 0, s = this.length; s > n; n++) {
                var o = this[n],
                    r = t.fieldValue(o, e);
                null === r || "undefined" == typeof r || r.constructor == Array && !r.length || (r.constructor == Array ? t.merge(i, r) : i.push(r))
            }
            return i
        }, t.fieldValue = function(e, i) {
            var n = e.name,
                s = e.type,
                o = e.tagName.toLowerCase();
            if (void 0 === i && (i = !0), i && (!n || e.disabled || "reset" == s || "button" == s || ("checkbox" == s || "radio" == s) && !e.checked || ("submit" == s || "image" == s) && e.form && e.form.clk != e || "select" == o && -1 == e.selectedIndex)) return null;
            if ("select" == o) {
                var r = e.selectedIndex;
                if (0 > r) return null;
                for (var a = [], l = e.options, c = "select-one" == s, u = c ? r + 1 : l.length, h = c ? r : 0; u > h; h++) {
                    var d = l[h];
                    if (d.selected) {
                        var p = d.value;
                        if (p || (p = d.attributes && d.attributes.value && !d.attributes.value.specified ? d.text : d.value), c) return p;
                        a.push(p)
                    }
                }
                return a
            }
            return t(e).val()
        }, t.fn.clearForm = function(e) {
            return this.each(function() {
                t("input,select,textarea", this).clearFields(e)
            })
        }, t.fn.clearFields = t.fn.clearInputs = function(e) {
            var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var n = this.type,
                    s = this.tagName.toLowerCase();
                i.test(n) || "textarea" == s ? this.value = "" : "checkbox" == n || "radio" == n ? this.checked = !1 : "select" == s ? this.selectedIndex = -1 : "file" == n ? /MSIE/.test(navigator.userAgent) ? t(this).replaceWith(t(this).clone(!0)) : t(this).val("") : e && (e === !0 && /hidden/.test(n) || "string" == typeof e && t(this).is(e)) && (this.value = "")
            })
        }, t.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, t.fn.enable = function(t) {
            return void 0 === t && (t = !0), this.each(function() {
                this.disabled = !t
            })
        }, t.fn.selected = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                var i = this.type;
                if ("checkbox" == i || "radio" == i) this.checked = e;
                else if ("option" == this.tagName.toLowerCase()) {
                    var n = t(this).parent("select");
                    e && n[0] && "select-one" == n[0].type && n.find("option").selected(!1), this.selected = e
                }
            })
        }, t.fn.ajaxSubmit.debug = !1
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(t) {
        var e, i, n, s, o, r, a = "Close",
            l = "BeforeClose",
            c = "AfterClose",
            u = "BeforeAppend",
            h = "MarkupParse",
            d = "Open",
            p = "Change",
            f = "mfp",
            m = "." + f,
            g = "mfp-ready",
            v = "mfp-removing",
            y = "mfp-prevent-close",
            b = function() {},
            w = !!window.jQuery,
            x = t(window),
            C = function(t, i) {
                e.ev.on(f + t + m, i)
            },
            _ = function(e, i, n, s) {
                var o = document.createElement("div");
                return o.className = "mfp-" + e, n && (o.innerHTML = n), s ? i && i.appendChild(o) : (o = t(o), i && o.appendTo(i)), o
            },
            S = function(i, n) {
                e.ev.triggerHandler(f + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
            },
            T = function(i) {
                return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
            },
            E = function() {
                t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
            },
            k = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        b.prototype = {
            constructor: b,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = k(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var s;
                if (i.isObj === !1) {
                    e.items = i.items.toArray(), e.index = 0;
                    var r, a = i.items;
                    for (s = 0; s < a.length; s++)
                        if (r = a[s], r.parsed && (r = r.el[0]), r === i.el[0]) {
                            e.index = s;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], o = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = _("bg").on("click" + m, function() {
                    e.close()
                }), e.wrap = _("wrap").attr("tabindex", -1).on("click" + m, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = _("container", e.wrap)), e.contentContainer = _("content"), e.st.preloader && (e.preloader = _("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (s = 0; s < l.length; s++) {
                    var c = l[s];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                S("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (C(h, function(t, e, i, n) {
                    i.close_replaceWith = T(n.type)
                }), o += " mfp-close-btn-in") : e.wrap.append(T())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: x.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && n.on("keyup" + m, function(t) {
                    27 === t.keyCode && e.close()
                }), x.on("resize" + m, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
                var u = e.wH = x.height(),
                    p = {};
                if (e.fixedContentPos && e._hasScrollBar(u)) {
                    var f = e._getScrollbarSize();
                    f && (p.marginRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : p.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), S("BuildControls"), t("html").css(p), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), n.on("focusin" + m, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(u), S(d), i
            },
            close: function() {
                e.isOpen && (S(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                S(a);
                var i = v + " " + g + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var s = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s)
                }
                n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, S(c)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || x.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), S("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (S("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var o = e.st[n] ? e.st[n].markup : !1;
                    S("FirstMarkupParse", o), o ? e.currTemplate[n] = t(o) : e.currTemplate[n] = !0
                }
                s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
                var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(r, n), i.preloaded = !0, S(p, i), s = i.type, e.container.prepend(e.contentContainer), S("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(T()) : e.content = t : e.content = "", S(u), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n, s = e.items[i];
                if (s.tagName ? s = {
                        el: t(s)
                    } : (n = s.type, s = {
                        data: s,
                        src: s.src
                    }), s.el) {
                    for (var o = e.types, r = 0; r < o.length; r++)
                        if (s.el.hasClass("mfp-" + o[r])) {
                            n = o[r];
                            break
                        }
                    s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href"))
                }
                return s.type = n || e.st.type || "inline", s.index = i, s.parsed = !0, e.items[i] = s, S("ElementParse", s), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this, e._openClick(n, t, i)
                };
                i || (i = {});
                var s = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(s).on(s, n)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, n) : (i.items = t, t.off(s).on(s, n)))
            },
            _openClick: function(i, n, s) {
                var o = void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick;
                if (o || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var r = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                    if (r)
                        if (t.isFunction(r)) {
                            if (!r.call(e)) return !0
                        } else if (x.width() < r) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), s.el = t(i.mfpEl), s.delegate && (s.items = n.find(s.delegate)), e.open(s)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var s = {
                        status: t,
                        text: n
                    };
                    S("UpdateStatus", s), t = s.status, n = s.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(y)) {
                    var n = e.st.closeOnContentClick,
                        s = e.st.closeOnBgClick;
                    if (n && s) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0
                    } else if (s && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || x.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function(e, i, n) {
                var s;
                n.data && (i = t.extend(n.data, i)), S(h, [e, i, n]), t.each(i, function(i, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (s = i.split("_"), s.length > 1) {
                        var o = e.find(m + "-" + s[0]);
                        if (o.length > 0) {
                            var r = s[1];
                            "replaceWith" === r ? o[0] !== n[0] && o.replaceWith(n) : "img" === r ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n)
                        }
                    } else e.find(m + "-" + i).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: b.prototype,
            modules: [],
            open: function(e, i) {
                return E(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(i) {
            E();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var s, o = w ? n.data("magnificPopup") : n[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    o.items ? s = o.items[r] : (s = n, o.delegate && (s = s.find(o.delegate)), s = s.eq(r)), e._openClick({
                        mfpEl: s
                    }, n, o)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), w ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var A, I, L, P = "inline",
            M = function() {
                L && (I.after(L.addClass(A)).detach(), L = null)
            };
        t.magnificPopup.registerModule(P, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(P), C(a + "." + P, function() {
                        M()
                    })
                },
                getInline: function(i, n) {
                    if (M(), i.src) {
                        var s = e.st.inline,
                            o = t(i.src);
                        if (o.length) {
                            var r = o[0].parentNode;
                            r && r.tagName && (I || (A = s.hiddenClass, I = _(A), A = "mfp-" + A), L = o.after(I).detach().removeClass(A)), e.updateStatus("ready")
                        } else e.updateStatus("error", s.tNotFound), o = t("<div>");
                        return i.inlineElement = o, o
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var D, z = "ajax",
            N = function() {
                D && t(document.body).removeClass(D)
            },
            O = function() {
                N(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(z, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(z), D = e.st.ajax.cursor, C(a + "." + z, O), C("BeforeChange." + z, O)
                },
                getAjax: function(i) {
                    D && t(document.body).addClass(D), e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(n, s, o) {
                            var r = {
                                data: n,
                                xhr: o
                            };
                            S("ParseAjax", r), e.appendContent(t(r.data), z), i.finished = !0, N(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(g)
                            }, 16), e.updateStatus("ready"), S("AjaxContentAdded")
                        },
                        error: function() {
                            N(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n), ""
                }
            }
        });
        var B, j = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"), C(d + n, function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }), C(a + n, function() {
                        i.cursor && t(document.body).removeClass(i.cursor), x.off("resize" + m)
                    }), C("Resize" + n, e.resizeImage), e.isLowIE && C("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, B && clearInterval(B), t.isCheckingImgSize = !1, S("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        s = function(o) {
                            B && clearInterval(B), B = setInterval(function() {
                                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(B), i++, void(3 === i ? s(10) : 40 === i ? s(50) : 100 === i && s(500)))
                            }, o)
                        };
                    s(1)
                },
                getImage: function(i, n) {
                    var s = 0,
                        o = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, S("ImageLoadComplete")) : (s++, 200 > s ? setTimeout(o, 100) : r()))
                        },
                        r = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", o).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, {
                        title: j(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (B && clearInterval(B), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var R, F = function() {
            return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform), R
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var s, o, r = i.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    s = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    o = "transition";
                                return s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[o] = n, e.css(s), e
                            },
                            u = function() {
                                e.content.css("visibility", "visible")
                            };
                        C("BuildControls" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(s), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void u();
                                o = c(t), o.css(e._getOffset()), e.wrap.append(o), s = setTimeout(function() {
                                    o.css(e._getOffset(!0)), s = setTimeout(function() {
                                        u(), setTimeout(function() {
                                            o.remove(), t = o = null, S("ZoomAnimationEnded")
                                        }, 16)
                                    }, r)
                                }, 16)
                            }
                        }), C(l + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(s), e.st.removalDelay = r, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    o = c(t)
                                }
                                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    o.css(e._getOffset())
                                }, 16)
                            }
                        }), C(a + n, function() {
                            e._allowZoom() && (u(), o && o.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1
                },
                _getOffset: function(i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var s = n.offset(),
                        o = parseInt(n.css("padding-top"), 10),
                        r = parseInt(n.css("padding-bottom"), 10);
                    s.top -= t(window).scrollTop() - o;
                    var a = {
                        width: n.width(),
                        height: (w ? n.innerHeight() : n[0].offsetHeight) - r - o
                    };
                    return F() ? a["-moz-transform"] = a.transform = "translate(" + s.left + "px," + s.top + "px)" : (a.left = s.left, a.top = s.top), a
                }
            }
        });
        var H = "iframe",
            W = "//about:blank",
            q = function(t) {
                if (e.currTemplate[H]) {
                    var i = e.currTemplate[H].find("iframe");
                    i.length && (t || (i[0].src = W), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(H, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(H), C("BeforeChange", function(t, e, i) {
                        e !== i && (e === H ? q() : i === H && q(!0))
                    }), C(a + "." + H, function() {
                        q()
                    })
                },
                getIframe: function(i, n) {
                    var s = i.src,
                        o = e.st.iframe;
                    t.each(o.patterns, function() {
                        return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0
                    });
                    var r = {};
                    return o.srcAction && (r[o.srcAction] = s), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
                }
            }
        });
        var $ = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t
            },
            U = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        s = ".mfp-gallery";
                    return e.direction = !0, i && i.enabled ? (o += " mfp-gallery", C(d + s, function() {
                        i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), n.on("keydown" + s, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), C("UpdateStatus" + s, function(t, i) {
                        i.text && (i.text = U(i.text, e.currItem.index, e.items.length))
                    }), C(h + s, function(t, n, s, o) {
                        var r = e.items.length;
                        s.counter = r > 1 ? U(i.tCounter, o.index, r) : ""
                    }), C("BuildControls" + s, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                s = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                                o = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
                            s.click(function() {
                                e.prev()
                            }), o.click(function() {
                                e.next()
                            }), e.container.append(s.add(o))
                        }
                    }), C(p + s, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void C(a + s, function() {
                        n.off(s), e.wrap.off("click" + s), e.arrowRight = e.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    e.direction = !0, e.index = $(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = $(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        s = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? s : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : s); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = $(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), S("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, S("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var G = "retina";
        t.magnificPopup.registerModule(G, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        i = isNaN(i) ? i() : i, i > 1 && (C("ImageHasSize." + G, function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), C("ElementParse." + G, function(e, n) {
                            n.src = t.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }), E()
    }), ! function(t) {
        var e = !0;
        t.flexslider = function(i, n) {
            var s = t(i);
            s.vars = t.extend({}, t.flexslider.defaults, n);
            var o, r = s.vars.namespace,
                a = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                l = ("ontouchstart" in window || a || window.DocumentTouch && document instanceof DocumentTouch) && s.vars.touch,
                c = "click touchend MSPointerUp keyup",
                u = "",
                h = "vertical" === s.vars.direction,
                d = s.vars.reverse,
                p = s.vars.itemWidth > 0,
                f = "fade" === s.vars.animation,
                m = "" !== s.vars.asNavFor,
                g = {};
            t.data(i, "flexslider", s), g = {
                init: function() {
                    s.animating = !1, s.currentSlide = parseInt(s.vars.startAt ? s.vars.startAt : 0, 10), isNaN(s.currentSlide) && (s.currentSlide = 0), s.animatingTo = s.currentSlide, s.atEnd = 0 === s.currentSlide || s.currentSlide === s.last, s.containerSelector = s.vars.selector.substr(0, s.vars.selector.search(" ")), s.slides = t(s.vars.selector, s), s.container = t(s.containerSelector, s), s.count = s.slides.length, s.syncExists = t(s.vars.sync).length > 0, "slide" === s.vars.animation && (s.vars.animation = "swing"), s.prop = h ? "top" : "marginLeft", s.args = {}, s.manualPause = !1, s.stopped = !1, s.started = !1, s.startTimeout = null, s.transitions = !s.vars.video && !f && s.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return s.pfx = e[i].replace("Perspective", "").toLowerCase(), s.prop = "-" + s.pfx + "-transform", !0;
                        return !1
                    }(), s.ensureAnimationEnd = "", "" !== s.vars.controlsContainer && (s.controlsContainer = t(s.vars.controlsContainer).length > 0 && t(s.vars.controlsContainer)), "" !== s.vars.manualControls && (s.manualControls = t(s.vars.manualControls).length > 0 && t(s.vars.manualControls)), "" !== s.vars.customDirectionNav && (s.customDirectionNav = 2 === t(s.vars.customDirectionNav).length && t(s.vars.customDirectionNav)), s.vars.randomize && (s.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), s.container.empty().append(s.slides)), s.doMath(), s.setup("init"), s.vars.controlNav && g.controlNav.setup(), s.vars.directionNav && g.directionNav.setup(), s.vars.keyboard && (1 === t(s.containerSelector).length || s.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!s.animating && (39 === e || 37 === e)) {
                            var i = 39 === e ? s.getTarget("next") : 37 === e ? s.getTarget("prev") : !1;
                            s.flexAnimate(i, s.vars.pauseOnAction)
                        }
                    }), s.vars.mousewheel && s.bind("mousewheel", function(t, e, i, n) {
                        t.preventDefault();
                        var o = 0 > e ? s.getTarget("next") : s.getTarget("prev");
                        s.flexAnimate(o, s.vars.pauseOnAction)
                    }), s.vars.pausePlay && g.pausePlay.setup(), s.vars.slideshow && s.vars.pauseInvisible && g.pauseInvisible.init(), s.vars.slideshow && (s.vars.pauseOnHover && s.hover(function() {
                        s.manualPlay || s.manualPause || s.pause()
                    }, function() {
                        s.manualPause || s.manualPlay || s.stopped || s.play()
                    }), s.vars.pauseInvisible && g.pauseInvisible.isHidden() || (s.vars.initDelay > 0 ? s.startTimeout = setTimeout(s.play, s.vars.initDelay) : s.play())), m && g.asNav.setup(), l && s.vars.touch && g.touch(), (!f || f && s.vars.smoothHeight) && t(window).bind("resize orientationchange focus", g.resize), s.find("img").attr("draggable", "false"), setTimeout(function() {
                        s.vars.start(s)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        s.asNav = !0, s.animatingTo = Math.floor(s.currentSlide / s.move), s.currentItem = s.currentSlide, s.slides.removeClass(r + "active-slide").eq(s.currentItem).addClass(r + "active-slide"), a ? (i._slider = s, s.slides.each(function() {
                            var e = this;
                            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), e.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var i = t(this),
                                    n = i.index();
                                t(s.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (s.direction = s.currentItem < n ? "next" : "prev", s.flexAnimate(n, s.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : s.slides.on(c, function(e) {
                            e.preventDefault();
                            var i = t(this),
                                n = i.index(),
                                o = i.offset().left - t(s).scrollLeft();
                            0 >= o && i.hasClass(r + "active-slide") ? s.flexAnimate(s.getTarget("prev"), !0) : t(s.vars.asNavFor).data("flexslider").animating || i.hasClass(r + "active-slide") || (s.direction = s.currentItem < n ? "next" : "prev", s.flexAnimate(n, s.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        s.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var e, i, n = "thumbnails" === s.vars.controlNav ? "control-thumbs" : "control-paging",
                            o = 1;
                        if (s.controlNavScaffold = t('<ol class="' + r + "control-nav " + r + n + '"></ol>'), s.pagingCount > 1)
                            for (var a = 0; a < s.pagingCount; a++) {
                                if (i = s.slides.eq(a), void 0 === i.attr("data-thumb-alt") && i.attr("data-thumb-alt", ""), altText = "" !== i.attr("data-thumb-alt") ? altText = ' alt="' + i.attr("data-thumb-alt") + '"' : "", e = "thumbnails" === s.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + o + "</a>", "thumbnails" === s.vars.controlNav && !0 === s.vars.thumbCaptions) {
                                    var l = i.attr("data-thumbcaption");
                                    "" !== l && void 0 !== l && (e += '<span class="' + r + 'caption">' + l + "</span>")
                                }
                                s.controlNavScaffold.append('<li data-animate="zoomIn" data-delay="' + 200 * a + '">' + e + "</li>"), o++
                            }
                        s.controlsContainer ? t(s.controlsContainer).append(s.controlNavScaffold) : s.append(s.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), s.controlNavScaffold.delegate("a, img", c, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var i = t(this),
                                    n = s.controlNav.index(i);
                                i.hasClass(r + "active") || (s.direction = n > s.currentSlide ? "next" : "prev", s.flexAnimate(n, s.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        s.controlNav = s.manualControls, g.controlNav.active(), s.controlNav.bind(c, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var i = t(this),
                                    n = s.controlNav.index(i);
                                i.hasClass(r + "active") || (n > s.currentSlide ? s.direction = "next" : s.direction = "prev", s.flexAnimate(n, s.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var e = "thumbnails" === s.vars.controlNav ? "img" : "a";
                        s.controlNav = t("." + r + "control-nav li " + e, s.controlsContainer ? s.controlsContainer : s)
                    },
                    active: function() {
                        s.controlNav.removeClass(r + "active").eq(s.animatingTo).addClass(r + "active")
                    },
                    update: function(e, i) {
                        s.pagingCount > 1 && "add" === e ? s.controlNavScaffold.append(t('<li><a href="#">' + s.count + "</a></li>")) : 1 === s.pagingCount ? s.controlNavScaffold.find("li").remove() : s.controlNav.eq(i).closest("li").remove(), g.controlNav.set(), s.pagingCount > 1 && s.pagingCount !== s.controlNav.length ? s.update(i, e) : g.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var e = t('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + s.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + s.vars.nextText + "</a></li></ul>");
                        s.customDirectionNav ? s.directionNav = s.customDirectionNav : s.controlsContainer ? (t(s.controlsContainer).append(e), s.directionNav = t("." + r + "direction-nav li a", s.controlsContainer)) : (s.append(e), s.directionNav = t("." + r + "direction-nav li a", s)), g.directionNav.update(), s.directionNav.bind(c, function(e) {
                            e.preventDefault();
                            var i;
                            ("" === u || u === e.type) && (i = t(this).hasClass(r + "next") ? s.getTarget("next") : s.getTarget("prev"), s.flexAnimate(i, s.vars.pauseOnAction)), "" === u && (u = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = r + "disabled";
                        1 === s.pagingCount ? s.directionNav.addClass(t).attr("tabindex", "-1") : s.vars.animationLoop ? s.directionNav.removeClass(t).removeAttr("tabindex") : 0 === s.animatingTo ? s.directionNav.removeClass(t).filter("." + r + "prev").addClass(t).attr("tabindex", "-1") : s.animatingTo === s.last ? s.directionNav.removeClass(t).filter("." + r + "next").addClass(t).attr("tabindex", "-1") : s.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var e = t('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
                        s.controlsContainer ? (s.controlsContainer.append(e), s.pausePlay = t("." + r + "pauseplay a", s.controlsContainer)) : (s.append(e), s.pausePlay = t("." + r + "pauseplay a", s)), g.pausePlay.update(s.vars.slideshow ? r + "pause" : r + "play"), s.pausePlay.bind(c, function(e) {
                            e.preventDefault(), ("" === u || u === e.type) && (t(this).hasClass(r + "pause") ? (s.manualPause = !0, s.manualPlay = !1, s.pause()) : (s.manualPause = !1, s.manualPlay = !0, s.play())), "" === u && (u = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? s.pausePlay.removeClass(r + "pause").addClass(r + "play").html(s.vars.playText) : s.pausePlay.removeClass(r + "play").addClass(r + "pause").html(s.vars.pauseText)
                    }
                },
                touch: function() {
                    function t(t) {
                        t.stopPropagation(), s.animating ? t.preventDefault() : (s.pause(), i._gesture.addPointer(t.pointerId), C = 0, c = h ? s.h : s.w, m = Number(new Date), l = p && d && s.animatingTo === s.last ? 0 : p && d ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : p && s.currentSlide === s.last ? s.limit : p ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : d ? (s.last - s.currentSlide + s.cloneOffset) * c : (s.currentSlide + s.cloneOffset) * c)
                    }

                    function e(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            var n = -t.translationX,
                                s = -t.translationY;
                            return C += h ? s : n, u = C, b = h ? Math.abs(C) < Math.abs(-n) : Math.abs(C) < Math.abs(-s), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                i._gesture.stop()
                            }) : void((!b || Number(new Date) - m > 500) && (t.preventDefault(), !f && e.transitions && (e.vars.animationLoop || (u = C / (0 === e.currentSlide && 0 > C || e.currentSlide === e.last && C > 0 ? Math.abs(C) / c + 2 : 1)), e.setProps(l + u, "setTouch"))))
                        }
                    }

                    function n(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            if (e.animatingTo === e.currentSlide && !b && null !== u) {
                                var i = d ? -u : u,
                                    n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
                                e.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > c / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : f || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                            }
                            o = null, r = null, u = null, l = null, C = 0
                        }
                    }
                    var o, r, l, c, u, m, g, v, y, b = !1,
                        w = 0,
                        x = 0,
                        C = 0;
                    a ? (i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", t, !1), i._slider = s, i.addEventListener("MSGestureChange", e, !1), i.addEventListener("MSGestureEnd", n, !1)) : (g = function(t) {
                        s.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (s.pause(), c = h ? s.h : s.w, m = Number(new Date), w = t.touches[0].pageX, x = t.touches[0].pageY, l = p && d && s.animatingTo === s.last ? 0 : p && d ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : p && s.currentSlide === s.last ? s.limit : p ? (s.itemW + s.vars.itemMargin) * s.move * s.currentSlide : d ? (s.last - s.currentSlide + s.cloneOffset) * c : (s.currentSlide + s.cloneOffset) * c, o = h ? x : w, r = h ? w : x, i.addEventListener("touchmove", v, !1), i.addEventListener("touchend", y, !1))
                    }, v = function(t) {
                        w = t.touches[0].pageX, x = t.touches[0].pageY, u = h ? o - x : o - w, b = h ? Math.abs(u) < Math.abs(w - r) : Math.abs(u) < Math.abs(x - r);
                        var e = 500;
                        (!b || Number(new Date) - m > e) && (t.preventDefault(), !f && s.transitions && (s.vars.animationLoop || (u /= 0 === s.currentSlide && 0 > u || s.currentSlide === s.last && u > 0 ? Math.abs(u) / c + 2 : 1), s.setProps(l + u, "setTouch")))
                    }, y = function(t) {
                        if (i.removeEventListener("touchmove", v, !1), s.animatingTo === s.currentSlide && !b && null !== u) {
                            var e = d ? -u : u,
                                n = e > 0 ? s.getTarget("next") : s.getTarget("prev");
                            s.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(e) > 50 || Math.abs(e) > c / 2) ? s.flexAnimate(n, s.vars.pauseOnAction) : f || s.flexAnimate(s.currentSlide, s.vars.pauseOnAction, !0)
                        }
                        i.removeEventListener("touchend", y, !1), o = null, r = null, u = null, l = null
                    }, i.addEventListener("touchstart", g, !1))
                },
                resize: function() {
                    !s.animating && s.is(":visible") && (p || s.doMath(), f ? g.smoothHeight() : p ? (s.slides.width(s.computedW), s.update(s.pagingCount), s.setProps()) : h ? (s.viewport.height(s.h), s.setProps(s.h, "setTotal")) : (s.vars.smoothHeight && g.smoothHeight(), s.newSlides.width(s.computedW), s.setProps(s.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!h || f) {
                        var e = f ? s : s.viewport;
                        t ? e.animate({
                            height: s.slides.eq(s.animatingTo).height()
                        }, t) : e.height(s.slides.eq(s.animatingTo).height())
                    }
                },
                sync: function(e) {
                    var i = t(s.vars.sync).data("flexslider"),
                        n = s.animatingTo;
                    switch (e) {
                        case "animate":
                            i.flexAnimate(n, s.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            i.playing || i.asNav || i.play();
                            break;
                        case "pause":
                            i.pause()
                    }
                },
                uniqueID: function(e) {
                    return e.filter("[id]").add(e.find("[id]")).each(function() {
                        var e = t(this);
                        e.attr("id", e.attr("id") + "_clone")
                    }), e
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = g.pauseInvisible.getHiddenProp();
                        if (t) {
                            var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(e, function() {
                                g.pauseInvisible.isHidden() ? s.startTimeout ? clearTimeout(s.startTimeout) : s.pause() : s.started ? s.play() : s.vars.initDelay > 0 ? setTimeout(s.play, s.vars.initDelay) : s.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var t = g.pauseInvisible.getHiddenProp();
                        return t ? document[t] : !1
                    },
                    getHiddenProp: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(o), o = setTimeout(function() {
                        u = ""
                    }, 3e3)
                }
            }, s.flexAnimate = function(e, i, n, o, a) {
                if (s.vars.animationLoop || e === s.currentSlide || (s.direction = e > s.currentSlide ? "next" : "prev"), m && 1 === s.pagingCount && (s.direction = s.currentItem < e ? "next" : "prev"), !s.animating && (s.canAdvance(e, a) || n) && s.is(":visible")) {
                    if (m && o) {
                        var c = t(s.vars.asNavFor).data("flexslider");
                        if (s.atEnd = 0 === e || e === s.count - 1, c.flexAnimate(e, !0, !1, !0, a), s.direction = s.currentItem < e ? "next" : "prev", c.direction = s.direction, Math.ceil((e + 1) / s.visible) - 1 === s.currentSlide || 0 === e) return s.currentItem = e, s.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), !1;
                        s.currentItem = e, s.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), e = Math.floor(e / s.visible)
                    }
                    if (s.animating = !0, s.animatingTo = e, i && s.pause(), s.vars.before(s), s.syncExists && !a && g.sync("animate"), s.vars.controlNav && g.controlNav.active(), p || s.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), s.atEnd = 0 === e || e === s.last, s.vars.directionNav && g.directionNav.update(), e === s.last && (s.vars.end(s), s.vars.animationLoop || s.pause()), f) l ? (s.slides.eq(s.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), s.slides.eq(e).css({
                        opacity: 1,
                        zIndex: 2
                    }), s.wrapup(b)) : (s.slides.eq(s.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, s.vars.animationSpeed, s.vars.easing), s.slides.eq(e).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, s.vars.animationSpeed, s.vars.easing, s.wrapup));
                    else {
                        var u, v, y, b = h ? s.slides.filter(":first").height() : s.computedW;
                        p ? (u = s.vars.itemMargin, y = (s.itemW + u) * s.move * s.animatingTo, v = y > s.limit && 1 !== s.visible ? s.limit : y) : v = 0 === s.currentSlide && e === s.count - 1 && s.vars.animationLoop && "next" !== s.direction ? d ? (s.count + s.cloneOffset) * b : 0 : s.currentSlide === s.last && 0 === e && s.vars.animationLoop && "prev" !== s.direction ? d ? 0 : (s.count + 1) * b : d ? (s.count - 1 - e + s.cloneOffset) * b : (e + s.cloneOffset) * b, s.setProps(v, "", s.vars.animationSpeed), s.transitions ? (s.vars.animationLoop && s.atEnd || (s.animating = !1, s.currentSlide = s.animatingTo), s.container.unbind("webkitTransitionEnd transitionend"), s.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(s.ensureAnimationEnd), s.wrapup(b)
                        }), clearTimeout(s.ensureAnimationEnd), s.ensureAnimationEnd = setTimeout(function() {
                            s.wrapup(b)
                        }, s.vars.animationSpeed + 100)) : s.container.animate(s.args, s.vars.animationSpeed, s.vars.easing, function() {
                            s.wrapup(b)
                        })
                    }
                    s.vars.smoothHeight && g.smoothHeight(s.vars.animationSpeed)
                }
            }, s.wrapup = function(t) {
                f || p || (0 === s.currentSlide && s.animatingTo === s.last && s.vars.animationLoop ? s.setProps(t, "jumpEnd") : s.currentSlide === s.last && 0 === s.animatingTo && s.vars.animationLoop && s.setProps(t, "jumpStart")), s.animating = !1, s.currentSlide = s.animatingTo, s.vars.after(s)
            }, s.animateSlides = function() {
                !s.animating && e && s.flexAnimate(s.getTarget("next"))
            }, s.pause = function() {
                clearInterval(s.animatedSlides), s.animatedSlides = null, s.playing = !1, s.vars.pausePlay && g.pausePlay.update("play"), s.syncExists && g.sync("pause")
            }, s.play = function() {
                s.playing && clearInterval(s.animatedSlides), s.animatedSlides = s.animatedSlides || setInterval(s.animateSlides, s.vars.slideshowSpeed), s.started = s.playing = !0, s.vars.pausePlay && g.pausePlay.update("pause"), s.syncExists && g.sync("play")
            }, s.stop = function() {
                s.pause(), s.stopped = !0
            }, s.canAdvance = function(t, e) {
                var i = m ? s.pagingCount - 1 : s.last;
                return e ? !0 : m && s.currentItem === s.count - 1 && 0 === t && "prev" === s.direction ? !0 : m && 0 === s.currentItem && t === s.pagingCount - 1 && "next" !== s.direction ? !1 : t !== s.currentSlide || m ? s.vars.animationLoop ? !0 : s.atEnd && 0 === s.currentSlide && t === i && "next" !== s.direction ? !1 : s.atEnd && s.currentSlide === i && 0 === t && "next" === s.direction ? !1 : !0 : !1
            }, s.getTarget = function(t) {
                return s.direction = t, "next" === t ? s.currentSlide === s.last ? 0 : s.currentSlide + 1 : 0 === s.currentSlide ? s.last : s.currentSlide - 1
            }, s.setProps = function(t, e, i) {
                var n = function() {
                    var i = t ? t : (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo,
                        n = function() {
                            if (p) return "setTouch" === e ? t : d && s.animatingTo === s.last ? 0 : d ? s.limit - (s.itemW + s.vars.itemMargin) * s.move * s.animatingTo : s.animatingTo === s.last ? s.limit : i;
                            switch (e) {
                                case "setTotal":
                                    return d ? (s.count - 1 - s.currentSlide + s.cloneOffset) * t : (s.currentSlide + s.cloneOffset) * t;
                                case "setTouch":
                                    return d ? t : t;
                                case "jumpEnd":
                                    return d ? t : s.count * t;
                                case "jumpStart":
                                    return d ? s.count * t : t;
                                default:
                                    return t
                            }
                        }();
                    return -1 * n + "px"
                }();
                s.transitions && (n = h ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", s.container.css("-" + s.pfx + "-transition-duration", i), s.container.css("transition-duration", i)), s.args[s.prop] = n, (s.transitions || void 0 === i) && s.container.css(s.args), s.container.css("transform", n)
            }, s.setup = function(e) {
                if (f) s.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === e && (l ? s.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + s.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == s.vars.fadeFirstSlide ? s.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : s.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(s.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, s.vars.animationSpeed, s.vars.easing)), s.vars.smoothHeight && g.smoothHeight();
                else {
                    var i, n;
                    "init" === e && (s.viewport = t('<div class="' + r + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(s).append(s.container), s.cloneCount = 0, s.cloneOffset = 0, d && (n = t.makeArray(s.slides).reverse(), s.slides = t(n), s.container.empty().append(s.slides))), s.vars.animationLoop && !p && (s.cloneCount = 2, s.cloneOffset = 1, "init" !== e && s.container.find(".clone").remove(), s.container.append(g.uniqueID(s.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(s.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), s.newSlides = t(s.vars.selector, s), i = d ? s.count - 1 - s.currentSlide + s.cloneOffset : s.currentSlide + s.cloneOffset, h && !p ? (s.container.height(200 * (s.count + s.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        s.newSlides.css({
                            display: "block"
                        }), s.doMath(), s.viewport.height(s.h), s.setProps(i * s.h, "init")
                    }, "init" === e ? 100 : 0)) : (s.container.width(200 * (s.count + s.cloneCount) + "%"), s.setProps(i * s.computedW, "init"), setTimeout(function() {
                        s.doMath(), s.newSlides.css({
                            width: s.computedW,
                            marginRight: s.computedM,
                            "float": "left",
                            display: "block"
                        }), s.vars.smoothHeight && g.smoothHeight()
                    }, "init" === e ? 100 : 0))
                }
                p || s.slides.removeClass(r + "active-slide").eq(s.currentSlide).addClass(r + "active-slide"), s.vars.init(s)
            }, s.doMath = function() {
                var t = s.slides.first(),
                    e = s.vars.itemMargin,
                    i = s.vars.minItems,
                    n = s.vars.maxItems;
                s.w = void 0 === s.viewport ? s.width() : s.viewport.width(), s.h = t.height(), s.boxPadding = t.outerWidth() - t.width(), p ? (s.itemT = s.vars.itemWidth + e, s.itemM = e, s.minW = i ? i * s.itemT : s.w, s.maxW = n ? n * s.itemT - e : s.w, s.itemW = s.minW > s.w ? (s.w - e * (i - 1)) / i : s.maxW < s.w ? (s.w - e * (n - 1)) / n : s.vars.itemWidth > s.w ? s.w : s.vars.itemWidth, s.visible = Math.floor(s.w / s.itemW), s.move = s.vars.move > 0 && s.vars.move < s.visible ? s.vars.move : s.visible, s.pagingCount = Math.ceil((s.count - s.visible) / s.move + 1), s.last = s.pagingCount - 1, s.limit = 1 === s.pagingCount ? 0 : s.vars.itemWidth > s.w ? s.itemW * (s.count - 1) + e * (s.count - 1) : (s.itemW + e) * s.count - s.w - e) : (s.itemW = s.w, s.itemM = e, s.pagingCount = s.count, s.last = s.count - 1), s.computedW = s.itemW - s.boxPadding, s.computedM = s.itemM
            }, s.update = function(t, e) {
                s.doMath(), p || (t < s.currentSlide ? s.currentSlide += 1 : t <= s.currentSlide && 0 !== t && (s.currentSlide -= 1), s.animatingTo = s.currentSlide), s.vars.controlNav && !s.manualControls && ("add" === e && !p || s.pagingCount > s.controlNav.length ? g.controlNav.update("add") : ("remove" === e && !p || s.pagingCount < s.controlNav.length) && (p && s.currentSlide > s.last && (s.currentSlide -= 1, s.animatingTo -= 1), g.controlNav.update("remove", s.last))), s.vars.directionNav && g.directionNav.update()
            }, s.addSlide = function(e, i) {
                var n = t(e);
                s.count += 1, s.last = s.count - 1, h && d ? void 0 !== i ? s.slides.eq(s.count - i).after(n) : s.container.prepend(n) : void 0 !== i ? s.slides.eq(i).before(n) : s.container.append(n), s.update(i, "add"), s.slides = t(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.added(s)
            }, s.removeSlide = function(e) {
                var i = isNaN(e) ? s.slides.index(t(e)) : e;
                s.count -= 1, s.last = s.count - 1, isNaN(e) ? t(e, s.slides).remove() : h && d ? s.slides.eq(s.last).remove() : s.slides.eq(e).remove(), s.doMath(), s.update(i, "remove"), s.slides = t(s.vars.selector + ":not(.clone)", s), s.setup(), s.vars.removed(s)
            }, g.init()
        }, t(window).blur(function(t) {
            e = !1
        }).focus(function(t) {
            e = !0
        }), t.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, t.fn.flexslider = function(e) {
            if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                var i = t(this),
                    n = e.selector ? e.selector : ".slides > li",
                    s = i.find(n);
                1 === s.length && e.allowOneSlide === !0 || 0 === s.length ? (s.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
            });
            var i = t(this).data("flexslider");
            switch (e) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "stop":
                    i.stop();
                    break;
                case "next":
                    i.flexAnimate(i.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    i.flexAnimate(i.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && i.flexAnimate(e, !0)
            }
        }
    }(jQuery), function(t) {
        t.fn.pajinate = function(e) {
            function i(i) {
                new_page = parseInt(c.data(m)) - 1, 1 == t(i).siblings(".active").prev(".page_link").length ? (r(i, new_page), s(new_page)) : e.wrap_around && s(f - 1)
            }

            function n(i) {
                new_page = parseInt(c.data(m)) + 1, 1 == t(i).siblings(".active").next(".page_link").length ? (o(i, new_page), s(new_page)) : e.wrap_around && s(0)
            }

            function s(t) {
                t = parseInt(t, 10);
                var i = parseInt(c.data(g));
                start_from = t * i, end_on = start_from + i;
                var n = d.hide().slice(start_from, end_on);
                n.fadeIn(700), h.find(e.nav_panel_id).children(".page_link[longdesc=" + t + "]").addClass("active " + b).siblings(".active").removeClass("active " + b), c.data(m, t);
                var s = parseInt(c.data(m) + 1),
                    o = u.children().size(),
                    r = Math.ceil(o / e.items_per_page);
                h.find(e.nav_info_id).html(e.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + n.length).replace("{2}", d.length).replace("{3}", s).replace("{4}", r)), a(), l(), "undefined" != typeof e.onPageDisplayed && e.onPageDisplayed.call(this, t + 1)
            }

            function o(i, n) {
                var s = n,
                    o = t(i).siblings(".active");
                "none" == o.siblings(".page_link[longdesc=" + s + "]").css("display") && p.each(function() {
                    t(this).children(".page_link").hide().slice(parseInt(s - e.num_page_links_to_display + 1), s + 1).show()
                })
            }

            function r(i, n) {
                var s = n,
                    o = t(i).siblings(".active");
                "none" == o.siblings(".page_link[longdesc=" + s + "]").css("display") && p.each(function() {
                    t(this).children(".page_link").hide().slice(s, s + parseInt(e.num_page_links_to_display)).show()
                })
            }

            function a() {}

            function l() {
                p.children(".last").hasClass("active") ? p.children(".next_link").add(".last_link").addClass("no_more " + w) : p.children(".next_link").add(".last_link").removeClass("no_more " + w), p.children(".first").hasClass("active") ? p.children(".previous_link").add(".first_link").addClass("no_more " + w) : p.children(".previous_link").add(".first_link").removeClass("no_more " + w)
            }
            var c, u, h, d, p, f, m = "current_page",
                g = "items_per_page",
                v = {
                    item_container_id: ".content",
                    items_per_page: 10,
                    nav_panel_id: ".page_navigation",
                    nav_info_id: ".info_text",
                    num_page_links_to_display: 20,
                    start_page: 0,
                    wrap_around: !1,
                    nav_label_first: "First",
                    nav_label_prev: "Prev",
                    nav_label_next: "Next",
                    nav_label_last: "Last",
                    nav_order: ["first", "prev", "num", "next", "last"],
                    nav_label_info: "Showing {0}-{1} of {2} results",
                    show_first_last: !0,
                    abort_on_small_lists: !1,
                    jquery_ui: !1,
                    jquery_ui_active: "ui-state-highlight",
                    jquery_ui_default: "ui-state-default",
                    jquery_ui_disabled: "ui-state-disabled"
                },
                e = t.extend(v, e),
                y = e.jquery_ui ? e.jquery_ui_default : "",
                b = e.jquery_ui ? e.jquery_ui_active : "",
                w = e.jquery_ui ? e.jquery_ui_disabled : "";
            return this.each(function() {
                if (h = t(this), u = t(this).find(e.item_container_id), d = h.find(e.item_container_id).children(), e.abort_on_small_lists && e.items_per_page >= d.size()) return h;
                c = h, c.data(m, 0), c.data(g, e.items_per_page);
                for (var v = u.children().size(), w = Math.ceil(v / e.items_per_page), x = '<li class="disabled ellipse more"><span>...</span></li>', C = '<li class="disabled ellipse less"><span>...</span></li>', _ = e.show_first_last ? '<li class="first_link ' + y + '"><a href="#">' + e.nav_label_first + "</a></li>" : "", S = e.show_first_last ? '<li class="last_link ' + y + '"><a href="#">' + e.nav_label_last + "</a></li>" : "", T = "", E = 0; E < e.nav_order.length; E++) switch (e.nav_order[E]) {
                    case "first":
                        T += _;
                        break;
                    case "last":
                        T += S;
                        break;
                    case "next":
                        T += '<li class="next_link ' + y + '"><a href="#">' + e.nav_label_next + "</a></li>";
                        break;
                    case "prev":
                        T += '<li class="previous_link ' + y + '"><a href="#">' + e.nav_label_prev + "</a></li>";
                        break;
                    case "num":
                        T += C;
                        for (var k = 0; w > k;) T += '<li class="page_link ' + y + '" longdesc="' + k + '"><a href="#">' + (k + 1) + "</a></li>", k++;
                        T += x
                }
                p = h.find(e.nav_panel_id), p.html(T).each(function() {
                    t(this).find(".page_link:first").addClass("first"), t(this).find(".page_link:last").addClass("last")
                }), p.children(".ellipse").hide(), p.find(".previous_link").next().next().addClass("active " + b), d.hide(), d.slice(0, c.data(g)).show(), f = h.find(e.nav_panel_id + ":first").children(".page_link").size(), e.num_page_links_to_display = Math.min(e.num_page_links_to_display, f), p.children(".page_link").hide(), p.each(function() {
                    t(this).children(".page_link").slice(0, e.num_page_links_to_display).show()
                }), h.find(".first_link").click(function(e) {
                    e.preventDefault(), r(t(this), 0), s(0)
                }), h.find(".last_link").click(function(e) {
                    e.preventDefault();
                    var i = f - 1;
                    o(t(this), i), s(i)
                }), h.find(".previous_link").click(function(e) {
                    e.preventDefault(), i(t(this))
                }), h.find(".next_link").click(function(e) {
                    e.preventDefault(), n(t(this))
                }), h.find(".page_link").click(function(e) {
                    e.preventDefault(), s(t(this).attr("longdesc"))
                }), s(parseInt(e.start_page)), a(), e.wrap_around || l()
            })
        }
    }(jQuery), function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t, e) {
        "use strict";
        t.infinitescroll = function(e, i, n) {
            this.element = t(n), this._create(e, i) || (this.failed = !0)
        }, t.infinitescroll.defaults = {
            loading: {
                finished: e,
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
                msg: null,
                msgText: "<em>Loading the next set of posts...</em>",
                selector: null,
                speed: "fast",
                start: e
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                isBeyondMaxPage: !1,
                currPage: 1
            },
            debug: !1,
            behavior: e,
            binder: t(window),
            nextSelector: "div.navigation a:first",
            navSelector: "div.navigation",
            contentSelector: null,
            extraScrollPx: 150,
            itemSelector: "div.post",
            animate: !1,
            pathParse: e,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 40,
            errorCallback: function() {},
            infid: 0,
            pixelsFromNavToBottom: e,
            path: e,
            prefill: !1,
            maxPage: e
        }, t.infinitescroll.prototype = {
            _binding: function(t) {
                var i = this,
                    n = i.options;
                return n.v = "2.0b2.120520", n.behavior && this["_binding_" + n.behavior] !== e ? void this["_binding_" + n.behavior].call(this) : "bind" !== t && "unbind" !== t ? (this._debug("Binding value  " + t + " not valid"), !1) : ("unbind" === t ? this.options.binder.unbind("smartscroll.infscr." + i.options.infid) : this.options.binder[t]("smartscroll.infscr." + i.options.infid, function() {
                    i.scroll()
                }), void this._debug("Binding", t))
            },
            _create: function(i, n) {
                var s = t.extend(!0, {}, t.infinitescroll.defaults, i);
                this.options = s;
                var o = t(window),
                    r = this;
                if (!r._validate(i)) return !1;
                var a = t(s.nextSelector).attr("href");
                if (!a) return this._debug("Navigation selector not found"), !1;
                s.path = s.path || this._determinepath(a), s.contentSelector = s.contentSelector || this.element, s.loading.selector = s.loading.selector || s.contentSelector, s.loading.msg = s.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + s.loading.img + '" /><div>' + s.loading.msgText + "</div></div>"), (new Image).src = s.loading.img, s.pixelsFromNavToBottom === e && (s.pixelsFromNavToBottom = t(document).height() - t(s.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + s.pixelsFromNavToBottom));
                var l = this;
                return s.loading.start = s.loading.start || function() {
                    t(s.navSelector).hide(), s.loading.msg.appendTo(s.loading.selector).show(s.loading.speed, t.proxy(function() {
                        this.beginAjax(s)
                    }, l))
                }, s.loading.finished = s.loading.finished || function() {
                    s.state.isBeyondMaxPage || s.loading.msg.fadeOut(s.loading.speed)
                }, s.callback = function(i, r, a) {
                    s.behavior && i["_callback_" + s.behavior] !== e && i["_callback_" + s.behavior].call(t(s.contentSelector)[0], r, a), n && n.call(t(s.contentSelector)[0], r, s, a), s.prefill && o.bind("resize.infinite-scroll", i._prefill)
                }, i.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(t) {
                    console[t] = this.call(console[t], console)
                }, Function.prototype.bind)), this._setup(), s.prefill && this._prefill(), !0
            },
            _prefill: function() {
                function e() {
                    return t(i.options.contentSelector).height() <= n.height()
                }
                var i = this,
                    n = t(window);
                this._prefill = function() {
                    e() && i.scroll(), n.bind("resize.infinite-scroll", function() {
                        e() && (n.unbind("resize.infinite-scroll"), i.scroll())
                    })
                }, this._prefill()
            },
            _debug: function() {
                !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
            },
            _determinepath: function(t) {
                var i = this.options;
                if (i.behavior && this["_determinepath_" + i.behavior] !== e) return this["_determinepath_" + i.behavior].call(this, t);
                if (i.pathParse) return this._debug("pathParse manual"), i.pathParse(t, this.options.state.currPage + 1);
                if (t.match(/^(.*?)\b2\b(.*?$)/)) t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                else if (t.match(/^(.*?)2(.*?$)/)) {
                    if (t.match(/^(.*?page=)2(\/.*|$)/)) return t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    t = t.match(/^(.*?)2(.*?$)/).slice(1)
                } else {
                    if (t.match(/^(.*?page=)1(\/.*|$)/)) return t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), i.state.isInvalidPage = !0
                }
                return this._debug("determinePath", t), t
            },
            _error: function(t) {
                var i = this.options;
                return i.behavior && this["_error_" + i.behavior] !== e ? void this["_error_" + i.behavior].call(this, t) : ("destroy" !== t && "end" !== t && (t = "unknown"), this._debug("Error", t), ("end" === t || i.state.isBeyondMaxPage) && this._showdonemsg(), i.state.isDone = !0, i.state.currPage = 1, i.state.isPaused = !1, i.state.isBeyondMaxPage = !1, void this._binding("unbind"))
            },
            _loadcallback: function(i, n, s) {
                var o, r = this.options,
                    a = this.options.callback,
                    l = r.state.isDone ? "done" : r.appendCallback ? "append" : "no-append";
                if (r.behavior && this["_loadcallback_" + r.behavior] !== e) return void this["_loadcallback_" + r.behavior].call(this, i, n);
                switch (l) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        if ("html" === r.dataType && (n = "<div>" + n + "</div>", n = t(n).find(r.itemSelector)), 0 === n.length) return this._error("end");
                        break;
                    case "append":
                        var c = i.children();
                        if (0 === c.length) return this._error("end");
                        for (o = document.createDocumentFragment(); i[0].firstChild;) o.appendChild(i[0].firstChild);
                        this._debug("contentSelector", t(r.contentSelector)[0]), t(r.contentSelector)[0].appendChild(o), n = c.get()
                }
                if (r.loading.finished.call(t(r.contentSelector)[0], r), r.animate) {
                    var u = t(window).scrollTop() + t(r.loading.msg).height() + r.extraScrollPx + "px";
                    t("html,body").animate({
                        scrollTop: u
                    }, 800, function() {
                        r.state.isDuringAjax = !1
                    })
                }
                r.animate || (r.state.isDuringAjax = !1), a(this, n, s), r.prefill && this._prefill()
            },
            _nearbottom: function() {
                var i = this.options,
                    n = 0 + t(document).height() - i.binder.scrollTop() - t(window).height();
                return i.behavior && this["_nearbottom_" + i.behavior] !== e ? this["_nearbottom_" + i.behavior].call(this) : (this._debug("math:", n, i.pixelsFromNavToBottom), n - i.bufferPx < i.pixelsFromNavToBottom)
            },
            _pausing: function(t) {
                var i = this.options;
                if (i.behavior && this["_pausing_" + i.behavior] !== e) return void this["_pausing_" + i.behavior].call(this, t);
                switch ("pause" !== t && "resume" !== t && null !== t && this._debug("Invalid argument. Toggling pause value instead"), t = !t || "pause" !== t && "resume" !== t ? "toggle" : t) {
                    case "pause":
                        i.state.isPaused = !0;
                        break;
                    case "resume":
                        i.state.isPaused = !1;
                        break;
                    case "toggle":
                        i.state.isPaused = !i.state.isPaused
                }
                return this._debug("Paused", i.state.isPaused), !1
            },
            _setup: function() {
                var t = this.options;
                return t.behavior && this["_setup_" + t.behavior] !== e ? void this["_setup_" + t.behavior].call(this) : (this._binding("bind"), !1)
            },
            _showdonemsg: function() {
                var i = this.options;
                return i.behavior && this["_showdonemsg_" + i.behavior] !== e ? void this["_showdonemsg_" + i.behavior].call(this) : (i.loading.msg.find("img").hide().parent().find("div").html(i.loading.finishedMsg).animate({
                    opacity: 1
                }, 2e3, function() {
                    t(this).parent().fadeOut(i.loading.speed)
                }), void i.errorCallback.call(t(i.contentSelector)[0], "done"))
            },
            _validate: function(e) {
                for (var i in e)
                    if (i.indexOf && i.indexOf("Selector") > -1 && 0 === t(e[i]).length) return this._debug("Your " + i + " found no elements."), !1;
                return !0
            },
            bind: function() {
                this._binding("bind")
            },
            destroy: function() {
                return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
            },
            pause: function() {
                this._pausing("pause")
            },
            resume: function() {
                this._pausing("resume")
            },
            beginAjax: function(i) {
                var n, s, o, r, a = this,
                    l = i.path;
                if (i.state.currPage++, i.maxPage !== e && i.state.currPage > i.maxPage) return i.state.isBeyondMaxPage = !0, void this.destroy();
                switch (n = t(t(i.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), s = "function" == typeof l ? l(i.state.currPage) : l.join(i.state.currPage), a._debug("heading into ajax", s), o = "html" === i.dataType || "json" === i.dataType ? i.dataType : "html+callback", i.appendCallback && "html" === i.dataType && (o += "+callback"), o) {
                    case "html+callback":
                        a._debug("Using HTML via .load() method"), n.load(s + " " + i.itemSelector, e, function(t) {
                            a._loadcallback(n, t, s)
                        });
                        break;
                    case "html":
                        a._debug("Using " + o.toUpperCase() + " via $.ajax() method"), t.ajax({
                            url: s,
                            dataType: i.dataType,
                            complete: function(t, e) {
                                r = "undefined" != typeof t.isResolved ? t.isResolved() : "success" === e || "notmodified" === e, r ? a._loadcallback(n, t.responseText, s) : a._error("end")
                            }
                        });
                        break;
                    case "json":
                        a._debug("Using " + o.toUpperCase() + " via $.ajax() method"), t.ajax({
                            dataType: "json",
                            type: "GET",
                            url: s,
                            success: function(t, o, l) {
                                if (r = "undefined" != typeof l.isResolved ? l.isResolved() : "success" === o || "notmodified" === o, i.appendCallback)
                                    if (i.template !== e) {
                                        var c = i.template(t);
                                        n.append(c), r ? a._loadcallback(n, c) : a._error("end")
                                    } else a._debug("template must be defined."), a._error("end");
                                else r ? a._loadcallback(n, t, s) : a._error("end")
                            },
                            error: function() {
                                a._debug("JSON ajax request failed."), a._error("end")
                            }
                        })
                }
            },
            retrieve: function(i) {
                i = i || null;
                var n = this,
                    s = n.options;
                return s.behavior && this["retrieve_" + s.behavior] !== e ? void this["retrieve_" + s.behavior].call(this, i) : s.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (s.state.isDuringAjax = !0, void s.loading.start.call(t(s.contentSelector)[0], s))
            },
            scroll: function() {
                var t = this.options,
                    i = t.state;
                return t.behavior && this["scroll_" + t.behavior] !== e ? void this["scroll_" + t.behavior].call(this) : void(i.isDuringAjax || i.isInvalidPage || i.isDone || i.isDestroyed || i.isPaused || this._nearbottom() && this.retrieve())
            },
            toggle: function() {
                this._pausing()
            },
            unbind: function() {
                this._binding("unbind")
            },
            update: function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            }
        }, t.fn.infinitescroll = function(e, i) {
            var n = typeof e;
            switch (n) {
                case "string":
                    var s = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var i = t.data(this, "infinitescroll");
                        return i && t.isFunction(i[e]) && "_" !== e.charAt(0) ? void i[e].apply(i, s) : !1
                    });
                    break;
                case "object":
                    this.each(function() {
                        var n = t.data(this, "infinitescroll");
                        n ? n.update(e) : (n = new t.infinitescroll(e, i, this), n.failed || t.data(this, "infinitescroll", n))
                    })
            }
            return this
        };
        var i, n = t.event;
        n.special.smartscroll = {
            setup: function() {
                t(this).bind("scroll", n.special.smartscroll.handler)
            },
            teardown: function() {
                t(this).unbind("scroll", n.special.smartscroll.handler)
            },
            handler: function(e, n) {
                var s = this,
                    o = arguments;
                e.type = "smartscroll", i && clearTimeout(i), i = setTimeout(function() {
                    t(s).trigger("smartscroll", o)
                }, "execAsap" === n ? 0 : 100)
            }
        }, t.fn.smartscroll = function(t) {
            return t ? this.bind("smartscroll", t) : this.trigger("smartscroll", ["execAsap"])
        }
    }), function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e, n) {
            var s, o, r, a = e.nodeName.toLowerCase();
            return "area" === a ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (r = t("img[usemap='#" + o + "']")[0], !!r && i(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            scrollParent: function(e) {
                var i = this.css("position"),
                    n = "absolute" === i,
                    s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents().filter(function() {
                        var e = t(this);
                        return n && "static" === e.css("position") ? !1 : s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, n) {
                return !!t.data(e, n[3])
            },
            focusable: function(i) {
                return e(i, !isNaN(t.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var n = t.attr(i, "tabindex"),
                    s = isNaN(n);
                return (s || n >= 0) && e(i, !s)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, o) {
                return t.each(s, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                r = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? r["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, s) {
                return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, n(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: function(e) {
                return function(i, n) {
                    return "number" == typeof i ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), n && n.call(e)
                        }, i)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(t + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length)
                    for (var i, n, s = t(this[0]); s.length && s[0] !== document;) {
                        if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        s = s.parent()
                    }
                return 0
            }
        }), t.ui.plugin = {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        };
        var n = 0,
            s = Array.prototype.slice;
        t.cleanData = function(e) {
            return function(i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
                } catch (r) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, n) {
            var s, o, r, a, l = {},
                c = e.split(".")[0];
            return e = e.split(".")[1], s = c + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
                return !!t.data(e, s)
            }, t[c] = t[c] || {}, o = t[c][e], r = t[c][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
            }, t.extend(r, o, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
                return t.isFunction(n) ? void(l[e] = function() {
                    var t = function() {
                            return i.prototype[e].apply(this, arguments)
                        },
                        s = function(t) {
                            return i.prototype[e].apply(this, t)
                        };
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(l[e] = n)
            }), r.prototype = t.widget.extend(a, {
                widgetEventPrefix: o ? a.widgetEventPrefix || e : e
            }, l, {
                constructor: r,
                namespace: c,
                widgetName: e,
                widgetFullName: s
            }), o ? (t.each(o._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, r, i._proto)
            }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
        }, t.widget.extend = function(e) {
            for (var i, n, o = s.call(arguments, 1), r = 0, a = o.length; a > r; r++)
                for (i in o[r]) n = o[r][i], o[r].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
            return e
        }, t.widget.bridge = function(e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function(o) {
                var r = "string" == typeof o,
                    a = s.call(arguments, 1),
                    l = this;
                return r ? this.each(function() {
                    var i, s = t.data(this, n);
                    return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, a), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                }) : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function() {
                    var e = t.data(this, n);
                    e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this))
                })), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var n, s, o, r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
                    function a() {
                        return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                    }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        u = l[2];
                    u ? s.delegate(u, c, a) : i.bind(c, a)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, n) {
                var s, o, r = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var r, a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) {
                    t(this)[e](), o && o.call(n[0]), i()
                })
            }
        }), t.widget;
        var o = !1;
        t(document).mouseup(function() {
                o = !1
            }), t.widget("ui.mouse", {
                version: "1.11.4",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var e = this;
                    this.element.bind("mousedown." + this.widgetName, function(t) {
                        return e._mouseDown(t)
                    }).bind("click." + this.widgetName, function(i) {
                        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                    }), this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(e) {
                    if (!o) {
                        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                        var i = this,
                            n = 1 === e.which,
                            s = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                        return n && !s && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                            return i._mouseMove(t)
                        }, this._mouseUpDelegate = function(t) {
                            return i._mouseUp(t)
                        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0, !0)) : !0
                    }
                },
                _mouseMove: function(e) {
                    if (this._mouseMoved) {
                        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                        if (!e.which) return this._mouseUp(e)
                    }
                    return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                },
                _mouseUp: function(e) {
                    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), o = !1, !1
                },
                _mouseDistanceMet: function(t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            }),
            function() {
                function e(t, e, i) {
                    return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
                }

                function i(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }

                function n(e) {
                    var i = e[0];
                    return 9 === i.nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : t.isWindow(i) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    }
                }
                t.ui = t.ui || {};
                var s, o, r = Math.max,
                    a = Math.abs,
                    l = Math.round,
                    c = /left|center|right/,
                    u = /top|center|bottom/,
                    h = /[\+\-]\d+(\.[\d]+)?%?/,
                    d = /^\w+/,
                    p = /%$/,
                    f = t.fn.position;
                t.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== s) return s;
                            var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                o = n.children()[0];
                            return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                        },
                        getScrollInfo: function(e) {
                            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                                o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                            return {
                                width: o ? t.position.scrollbarWidth() : 0,
                                height: s ? t.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(e) {
                            var i = t(e || window),
                                n = t.isWindow(i[0]),
                                s = !!i[0] && 9 === i[0].nodeType;
                            return {
                                element: i,
                                isWindow: n,
                                isDocument: s,
                                offset: i.offset() || {
                                    left: 0,
                                    top: 0
                                },
                                scrollLeft: i.scrollLeft(),
                                scrollTop: i.scrollTop(),
                                width: n || s ? i.width() : i.outerWidth(),
                                height: n || s ? i.height() : i.outerHeight()
                            }
                        }
                    }, t.fn.position = function(s) {
                        if (!s || !s.of) return f.apply(this, arguments);
                        s = t.extend({}, s);
                        var p, m, g, v, y, b, w = t(s.of),
                            x = t.position.getWithinInfo(s.within),
                            C = t.position.getScrollInfo(x),
                            _ = (s.collision || "flip").split(" "),
                            S = {};
                        return b = n(w), w[0].preventDefault && (s.at = "left top"), m = b.width, g = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function() {
                            var t, e, i = (s[this] || "").split(" ");
                            1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), S[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                        }), 1 === _.length && (_[1] = _[0]), "right" === s.at[0] ? y.left += m : "center" === s.at[0] && (y.left += m / 2), "bottom" === s.at[1] ? y.top += g : "center" === s.at[1] && (y.top += g / 2), p = e(S.at, m, g), y.left += p[0], y.top += p[1], this.each(function() {
                            var n, c, u = t(this),
                                h = u.outerWidth(),
                                d = u.outerHeight(),
                                f = i(this, "marginLeft"),
                                b = i(this, "marginTop"),
                                T = h + f + i(this, "marginRight") + C.width,
                                E = d + b + i(this, "marginBottom") + C.height,
                                k = t.extend({}, y),
                                A = e(S.my, u.outerWidth(), u.outerHeight());
                            "right" === s.my[0] ? k.left -= h : "center" === s.my[0] && (k.left -= h / 2), "bottom" === s.my[1] ? k.top -= d : "center" === s.my[1] && (k.top -= d / 2), k.left += A[0], k.top += A[1], o || (k.left = l(k.left), k.top = l(k.top)), n = {
                                marginLeft: f,
                                marginTop: b
                            }, t.each(["left", "top"], function(e, i) {
                                t.ui.position[_[e]] && t.ui.position[_[e]][i](k, {
                                    targetWidth: m,
                                    targetHeight: g,
                                    elemWidth: h,
                                    elemHeight: d,
                                    collisionPosition: n,
                                    collisionWidth: T,
                                    collisionHeight: E,
                                    offset: [p[0] + A[0], p[1] + A[1]],
                                    my: s.my,
                                    at: s.at,
                                    within: x,
                                    elem: u
                                })
                            }), s.using && (c = function(t) {
                                var e = v.left - k.left,
                                    i = e + m - h,
                                    n = v.top - k.top,
                                    o = n + g - d,
                                    l = {
                                        target: {
                                            element: w,
                                            left: v.left,
                                            top: v.top,
                                            width: m,
                                            height: g
                                        },
                                        element: {
                                            element: u,
                                            left: k.left,
                                            top: k.top,
                                            width: h,
                                            height: d
                                        },
                                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                        vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle"
                                    };
                                h > m && m > a(e + i) && (l.horizontal = "center"), d > g && g > a(n + o) && (l.vertical = "middle"), l.important = r(a(e), a(i)) > r(a(n), a(o)) ? "horizontal" : "vertical", s.using.call(this, t, l)
                            }), u.offset(t.extend(k, {
                                using: c
                            }))
                        })
                    }, t.ui.position = {
                        fit: {
                            left: function(t, e) {
                                var i, n = e.within,
                                    s = n.isWindow ? n.scrollLeft : n.offset.left,
                                    o = n.width,
                                    a = t.left - e.collisionPosition.marginLeft,
                                    l = s - a,
                                    c = a + e.collisionWidth - o - s;
                                e.collisionWidth > o ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = c > 0 && 0 >= l ? s : l > c ? s + o - e.collisionWidth : s : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = r(t.left - a, t.left)
                            },
                            top: function(t, e) {
                                var i, n = e.within,
                                    s = n.isWindow ? n.scrollTop : n.offset.top,
                                    o = e.within.height,
                                    a = t.top - e.collisionPosition.marginTop,
                                    l = s - a,
                                    c = a + e.collisionHeight - o - s;
                                e.collisionHeight > o ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = c > 0 && 0 >= l ? s : l > c ? s + o - e.collisionHeight : s : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = r(t.top - a, t.top)
                            }
                        },
                        flip: {
                            left: function(t, e) {
                                var i, n, s = e.within,
                                    o = s.offset.left + s.scrollLeft,
                                    r = s.width,
                                    l = s.isWindow ? s.scrollLeft : s.offset.left,
                                    c = t.left - e.collisionPosition.marginLeft,
                                    u = c - l,
                                    h = c + e.collisionWidth - r - l,
                                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                    f = -2 * e.offset[0];
                                0 > u ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(u) > i) && (t.left += d + p + f)) : h > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || h > a(n)) && (t.left += d + p + f))
                            },
                            top: function(t, e) {
                                var i, n, s = e.within,
                                    o = s.offset.top + s.scrollTop,
                                    r = s.height,
                                    l = s.isWindow ? s.scrollTop : s.offset.top,
                                    c = t.top - e.collisionPosition.marginTop,
                                    u = c - l,
                                    h = c + e.collisionHeight - r - l,
                                    d = "top" === e.my[1],
                                    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                    m = -2 * e.offset[1];
                                0 > u ? (n = t.top + p + f + m + e.collisionHeight - r - o, (0 > n || a(u) > n) && (t.top += p + f + m)) : h > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, (i > 0 || h > a(i)) && (t.top += p + f + m))
                            }
                        },
                        flipfit: {
                            left: function() {
                                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var e, i, n, s, r, a = document.getElementsByTagName("body")[0],
                            l = document.createElement("div");
                        e = document.createElement(a ? "div" : "body"), n = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        }, a && t.extend(n, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        });
                        for (r in n) e.style[r] = n[r];
                        e.appendChild(l), i = a || document.documentElement, i.insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", s = t(l).offset().left, o = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
                    }()
            }(), t.ui.position, t.widget("ui.tabs", {
                version: "1.11.4",
                delay: 300,
                options: {
                    active: null,
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null
                },
                _isLocal: function() {
                    var t = /#.*$/;
                    return function(e) {
                        var i, n;
                        e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                        try {
                            i = decodeURIComponent(i)
                        } catch (s) {}
                        try {
                            n = decodeURIComponent(n)
                        } catch (s) {}
                        return e.hash.length > 1 && i === n
                    }
                }(),
                _create: function() {
                    var e = this,
                        i = this.options;
                    this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                        return e.tabs.index(t)
                    }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
                },
                _initialActive: function() {
                    var e = this.options.active,
                        i = this.options.collapsible,
                        n = location.hash.substring(1);
                    return null === e && (n && this.tabs.each(function(i, s) {
                        return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
                    }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
                },
                _getCreateEventData: function() {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : t()
                    }
                },
                _tabKeydown: function(e) {
                    var i = t(this.document[0].activeElement).closest("li"),
                        n = this.tabs.index(i),
                        s = !0;
                    if (!this._handlePageNav(e)) {
                        switch (e.keyCode) {
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                                n++;
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.LEFT:
                                s = !1, n--;
                                break;
                            case t.ui.keyCode.END:
                                n = this.anchors.length - 1;
                                break;
                            case t.ui.keyCode.HOME:
                                n = 0;
                                break;
                            case t.ui.keyCode.SPACE:
                                return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                            case t.ui.keyCode.ENTER:
                                return e.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                            default:
                                return
                        }
                        e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                            this.option("active", n)
                        }, this.delay))
                    }
                },
                _panelKeydown: function(e) {
                    this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
                },
                _handlePageNav: function(e) {
                    return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                },
                _findNextTab: function(e, i) {
                    function n() {
                        return e > s && (e = 0), 0 > e && (e = s), e
                    }
                    for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                    return e
                },
                _focusNextTab: function(t, e) {
                    return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
                },
                _sanitizeSelector: function(t) {
                    return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var e = this.options,
                        i = this.tablist.children(":has(a[href])");
                    e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                        return i.index(t)
                    }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
                },
                _refresh: function() {
                    this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        "aria-hidden": "true"
                    }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }), this._getPanelForTab(this.active).show().attr({
                        "aria-hidden": "false"
                    })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function() {
                    var e = this,
                        i = this.tabs,
                        n = this.anchors,
                        s = this.panels;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                        t(this).is(".ui-state-disabled") && e.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                        t(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                        role: "tab",
                        tabIndex: -1
                    }), this.anchors = this.tabs.map(function() {
                        return t("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    }), this.panels = t(), this.anchors.each(function(i, n) {
                        var s, o, r, a = t(n).uniqueId().attr("id"),
                            l = t(n).closest("li"),
                            c = l.attr("aria-controls");
                        e._isLocal(n) ? (s = n.hash, r = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + r, o = e.element.find(s), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                            "aria-controls": r,
                            "aria-labelledby": a
                        }), o.attr("aria-labelledby", a)
                    }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
                },
                _getList: function() {
                    return this.tablist || this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(e) {
                    return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(e) {
                    t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                    for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = e
                },
                _setupEvents: function(e) {
                    var i = {};
                    e && t.each(e.split(" "), function(t, e) {
                        i[e] = "_eventHandler"
                    }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                        click: function(t) {
                            t.preventDefault()
                        }
                    }), this._on(this.anchors, i), this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    }), this._on(this.panels, {
                        keydown: "_panelKeydown"
                    }), this._focusable(this.tabs), this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(e) {
                    var i, n = this.element.parent();
                    "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                        var e = t(this),
                            n = e.css("position");
                        "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() {
                        i -= t(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                    }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                        i = Math.max(i, t(this).height("").height())
                    }).height(i))
                },
                _eventHandler: function(e) {
                    var i = this.options,
                        n = this.active,
                        s = t(e.currentTarget),
                        o = s.closest("li"),
                        r = o[0] === n[0],
                        a = r && i.collapsible,
                        l = a ? t() : this._getPanelForTab(o),
                        c = n.length ? this._getPanelForTab(n) : t(),
                        u = {
                            oldTab: n,
                            oldPanel: c,
                            newTab: a ? t() : o,
                            newPanel: l
                        };
                    e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = a ? !1 : this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, u))
                },
                _toggle: function(e, i) {
                    function n() {
                        o.running = !1, o._trigger("activate", e, i)
                    }

                    function s() {
                        i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n())
                    }
                    var o = this,
                        r = i.newPanel,
                        a = i.oldPanel;
                    this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                        i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                    }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                        return 0 === t(this).attr("tabIndex")
                    }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
                },
                _activate: function(e) {
                    var i, n = this._findActive(e);
                    n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                        target: i,
                        currentTarget: i,
                        preventDefault: t.noop
                    }))
                },
                _findActive: function(e) {
                    return e === !1 ? t() : this.tabs.eq(e)
                },
                _getIndex: function(t) {
                    return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                    }), this.tabs.each(function() {
                        var e = t(this),
                            i = e.data("ui-tabs-aria-controls");
                        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                    }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function(e) {
                    var i = this.options.disabled;
                    i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                        return t !== e ? t : null
                    }) : t.map(this.tabs, function(t, i) {
                        return i !== e ? i : null
                    })), this._setupDisabled(i))
                },
                disable: function(e) {
                    var i = this.options.disabled;
                    if (i !== !0) {
                        if (void 0 === e) i = !0;
                        else {
                            if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                            i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                        }
                        this._setupDisabled(i)
                    }
                },
                load: function(e, i) {
                    e = this._getIndex(e);
                    var n = this,
                        s = this.tabs.eq(e),
                        o = s.find(".ui-tabs-anchor"),
                        r = this._getPanelForTab(s),
                        a = {
                            tab: s,
                            panel: r
                        },
                        l = function(t, e) {
                            "abort" === e && n.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                        };
                    this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) {
                        setTimeout(function() {
                            r.html(t), n._trigger("load", i, a), l(s, e)
                        }, 1)
                    }).fail(function(t, e) {
                        setTimeout(function() {
                            l(t, e)
                        }, 1)
                    })))
                },
                _ajaxSettings: function(e, i, n) {
                    var s = this;
                    return {
                        url: e.attr("href"),
                        beforeSend: function(e, o) {
                            return s._trigger("beforeLoad", i, t.extend({
                                jqXHR: e,
                                ajaxSettings: o
                            }, n))
                        }
                    }
                },
                _getPanelForTab: function(e) {
                    var i = t(e).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + i))
                }
            });
        var r = "ui-effects-",
            a = t;
        t.effects = {
                effect: {}
            },
            function(t, e) {
                function i(t, e, i) {
                    var n = h[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
                }

                function n(i) {
                    var n = c(),
                        s = n._rgba = [];
                    return i = i.toLowerCase(), f(l, function(t, o) {
                        var r, a = o.re.exec(i),
                            l = a && o.parse(a),
                            c = o.space || "rgba";
                        return l ? (r = n[c](l), n[u[c].cache] = r[u[c].cache], s = n._rgba = r._rgba, !1) : e
                    }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
                }

                function s(t, e, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    a = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    c = t.Color = function(e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
                    },
                    u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    h = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    d = c.support = {},
                    p = t("<p>")[0],
                    f = t.each;
                p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), c.fn = t.extend(c.prototype, {
                    parse: function(s, r, a, l) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                        var h = this,
                            d = t.type(s),
                            p = this._rgba = [];
                        return r !== e && (s = [s, r, a, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(u.rgba.props, function(t, e) {
                            p[e.idx] = i(s[e.idx], e)
                        }), this) : "object" === d ? (s instanceof c ? f(u, function(t, e) {
                            s[e.cache] && (h[e.cache] = s[e.cache].slice())
                        }) : f(u, function(e, n) {
                            var o = n.cache;
                            f(n.props, function(t, e) {
                                if (!h[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    h[o] = n.to(h._rgba)
                                }
                                h[o][e.idx] = i(s[t], e, !0)
                            }), h[o] && 0 > t.inArray(null, h[o].slice(0, 3)) && (h[o][3] = 1, n.from && (h._rgba = n.from(h[o])))
                        }), this) : e
                    },
                    is: function(t) {
                        var i = c(t),
                            n = !0,
                            s = this;
                        return f(u, function(t, o) {
                            var r, a = i[o.cache];
                            return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], f(o.props, function(t, i) {
                                return null != a[i.idx] ? n = a[i.idx] === r[i.idx] : e
                            })), n
                        }), n
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return f(u, function(i, n) {
                            e[n.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var n = c(t),
                            s = n._space(),
                            o = u[s],
                            r = 0 === this.alpha() ? c("transparent") : this,
                            a = r[o.cache] || o.to(r._rgba),
                            l = a.slice();
                        return n = n[o.cache], f(o.props, function(t, s) {
                            var o = s.idx,
                                r = a[o],
                                c = n[o],
                                u = h[s.type] || {};
                            null !== c && (null === r ? l[o] = c : (u.mod && (c - r > u.mod / 2 ? r += u.mod : r - c > u.mod / 2 && (r -= u.mod)), l[o] = i((c - r) * e + r, s)))
                        }), this[s](l)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = c(e)._rgba;
                        return c(t.map(i, function(t, e) {
                            return (1 - n) * s[e] + n * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            i = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function(e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), c.fn.parse.prototype = c.fn, u.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        r = t[3],
                        a = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        c = a - l,
                        u = a + l,
                        h = .5 * u;
                    return e = l === a ? 0 : n === a ? 60 * (s - o) / c + 360 : s === a ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === c ? 0 : .5 >= h ? c / u : c / (2 - u), [Math.round(e) % 360, i, h, null == r ? 1 : r]
                }, u.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = .5 >= n ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
                }, f(u, function(n, s) {
                    var o = s.props,
                        r = s.cache,
                        l = s.to,
                        u = s.from;
                    c.fn[n] = function(n) {
                        if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                        var s, a = t.type(n),
                            h = "array" === a || "object" === a ? n : arguments,
                            d = this[r].slice();
                        return f(o, function(t, e) {
                            var n = h["object" === a ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                        }), u ? (s = c(u(d)), s[r] = d, s) : c(d)
                    }, f(o, function(e, i) {
                        c.fn[e] || (c.fn[e] = function(s) {
                            var o, r = t.type(s),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                c = this[l](),
                                u = c[i.idx];
                            return "undefined" === r ? u : ("function" === r && (s = s.call(this, u), r = t.type(s)), null == s && ii.empty ? this : ("string" === r && (o = a.exec(s), o && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = s, this[l](c)))
                        })
                    })
                }), c.hook = function(e) {
                    var i = e.split(" ");
                    f(i, function(e, i) {
                        t.cssHooks[i] = {
                            set: function(e, s) {
                                var o, r, a = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = c(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                        for (r = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === a || "transparent" === a) && r && r.style;) try {
                                            a = t.css(r, "backgroundColor"), r = r.parentNode
                                        } catch (l) {}
                                        s = s.blend(a && "transparent" !== a ? a : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (l) {}
                            }
                        }, t.fx.step[i] = function(e) {
                            e.colorInit || (e.start = c(e.elem, i), e.end = c(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, c.hook(r), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                            e["border" + n + "Color"] = t
                        }), e
                    }
                }, o = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(a),
            function() {
                function e(e) {
                    var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o
                }

                function i(e, i) {
                    var n, o, r = {};
                    for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o));
                    return r
                }
                var n = ["add", "remove", "toggle"],
                    s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                    t.fx.step[i] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (a.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(s, o, r, a) {
                    var l = t.speed(o, r, a);
                    return this.queue(function() {
                        var o, r = t(this),
                            a = r.attr("class") || "",
                            c = l.children ? r.find("*").addBack() : r;
                        c = c.map(function() {
                            var i = t(this);
                            return {
                                el: i,
                                start: e(this)
                            }
                        }), o = function() {
                            t.each(n, function(t, e) {
                                s[e] && r[e + "Class"](s[e])
                            })
                        }, o(), c = c.map(function() {
                            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                        }), r.attr("class", a), c = c.map(function() {
                            var e = this,
                                i = t.Deferred(),
                                n = t.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        }), t.when.apply(t, c.get()).done(function() {
                            o(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(r[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function(e) {
                        return function(i, n, s, o) {
                            return n ? t.effects.animateClass.call(this, {
                                add: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function(e) {
                        return function(i, n, s, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function(e) {
                        return function(i, n, s, o, r) {
                            return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                add: i
                            } : {
                                remove: i
                            }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, n, s, o)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function(e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, s, o)
                    }
                })
            }(),
            function() {
                function e(e, i, n, s) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
                }

                function i(e) {
                    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
                }
                t.extend(t.effects, {
                    version: "1.11.4",
                    save: function(t, e) {
                        for (var i = 0; e.length > i; i++) null !== e[i] && t.data(r + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, e) {
                        var i, n;
                        for (n = 0; e.length > n; n++) null !== e[n] && (i = t.data(r + e[n]), void 0 === i && (i = ""), t.css(e[n], i))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                "float": e.css("float")
                            },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            s = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (r) {
                            o = document.body
                        }
                        return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                            i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(s), n.css(i).show()
                    },
                    removeWrapper: function(e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                    },
                    setTransition: function(e, i, n, s) {
                        return s = s || {}, t.each(i, function(t, i) {
                            var o = e.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1])
                        }), s
                    }
                }), t.fn.extend({
                    effect: function() {
                        function i(e) {
                            function i() {
                                t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e()
                            }
                            var s = t(this),
                                o = n.complete,
                                a = n.mode;
                            (s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](), i()) : r.call(s[0], n, i)
                        }
                        var n = e.apply(this, arguments),
                            s = n.mode,
                            o = n.queue,
                            r = t.effects.effect[n.effect];
                        return t.fx.off || !r ? s ? this[s](n.duration, n.complete) : this.each(function() {
                            n.complete && n.complete.call(this)
                        }) : o === !1 ? this.each(i) : this.queue(o || "fx", i)
                    },
                    show: function(t) {
                        return function(n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }(t.fn.show),
                    hide: function(t) {
                        return function(n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }(t.fn.hide),
                    toggle: function(t) {
                        return function(n) {
                            if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }(t.fn.toggle),
                    cssUnit: function(e) {
                        var i = this.css(e),
                            n = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        }), n
                    }
                })
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                    e[i] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4;
                            ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function(e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                })
            }(), t.effects, t.effects.effect.fade = function(e, i) {
                var n = t(this),
                    s = t.effects.setMode(n, e.mode || "toggle");
                n.animate({
                    opacity: s
                }, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: i
                })
            }, t.effects.effect.slide = function(e, i) {
                var n, s = t(this),
                    o = ["position", "top", "bottom", "left", "right", "width", "height"],
                    r = t.effects.setMode(s, e.mode || "show"),
                    a = "show" === r,
                    l = e.direction || "left",
                    c = "up" === l || "down" === l ? "top" : "left",
                    u = "up" === l || "left" === l,
                    h = {};
                t.effects.save(s, o), s.show(), n = e.distance || s["top" === c ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(s).css({
                    overflow: "hidden"
                }), a && s.css(c, u ? isNaN(n) ? "-" + n : -n : n), h[c] = (a ? u ? "+=" : "-=" : u ? "-=" : "+=") + n, s.animate(h, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        "hide" === r && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
                    }
                })
            }
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.alert");
            s || i.data("bs.alert", s = new n(this)), "string" == typeof e && s[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var s = t(this),
            o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(o);
        e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var s = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = s, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.button"),
                o = "object" == typeof e && e;
            s || n.data("bs.button", s = new i(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            s = n.is("input") ? "val" : "html",
            o = n.data();
        e += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() {
            n[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : o.slide;
            s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : r ? s[r]() : o.interval && s.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var s = "prev" == t ? -1 : 1,
            o = (i + s) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var s = this.$element.find(".item.active"),
            o = n || this.getItemForDirection(e, s),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(a), o.addClass(a), s.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"), s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var s = function(i) {
        var n, s = t(this),
            o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var r = t.extend({}, o.data(), s.data()),
                a = s.attr("data-slide-to");
            a && (r.interval = !1), e.call(o, r), a && o.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(s).remove(), t(o).each(function() {
            var n = t(this),
                s = e(n),
                o = {
                    relatedTarget: this
                };
            s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var s = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        r = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.6", r.prototype.toggle = function(n) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var o = e(s),
                r = o.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, r.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var s = e(n),
                    r = s.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && s.find(o).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = s.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(i.target);
                    38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var s = t(this),
                o = s.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            o || s.data("bs.modal", o = new i(this, r)), "string" == typeof e ? o[e](n) : r.show && o.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var s = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && s;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            s = n.attr("href"),
            o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            r = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, o.data(), n.data());
        n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(o, r, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (s || !/destroy|hide/.test(e)) && (s || n.data("bs.tooltip", s = new i(this, o)), "string" == typeof e && s[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
            var r = s[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var s = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                h = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (c) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + d > f.bottom ? "top" : "top" == a && u.top - d < f.top ? "bottom" : "right" == a && u.right + h > f.width ? "left" : "left" == a && u.left - h < f.left ? "right" : a, o.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, h, d);
            this.applyPlacement(m, a);
            var g = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            s = n[0].offsetWidth,
            o = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(i, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var h = /top|bottom/.test(i),
            d = h ? 2 * u.left - s + l : 2 * u.top - o + c,
            p = h ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], h)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != s.hoverState && o.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
        }
        var s = this,
            o = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var o = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, s, r, a, o)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - r.scroll,
                l = e.top + o - r.scroll + n;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var c = e.left - o,
                u = e.left + o + i;
            c < r.left ? s.left = r.left - c : u > r.right && (s.left = r.left + r.width - u)
        }
        return s
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.popover"),
                o = "object" == typeof e && e;
            (s || !/destroy|hide/.test(e)) && (s || n.data("bs.popover", s = new i(this, o)), "string" == typeof e && s[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tab");
            s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: s[0]
                });
            if (s.trigger(o), e.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, s) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }
        var r = n.find("> .active"),
            a = s && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var s = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.affix"),
                o = "object" == typeof e && e;
            s || n.data("bs.affix", s = new i(this, o)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var s = this.$target.scrollTop(),
            o = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > s ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? s + this.unpin <= o.top ? !1 : "bottom" : t - n >= s + r ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? s : o.top,
            c = a ? r : e;
        return null != i && i >= s ? "top" : null != n && l + c >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                s = n.top,
                o = n.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
            var a = this.getState(r, e, s, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - o
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.collapse"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), "string" == typeof e && s[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var s = t(n);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var s = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var s = t(this);
        s.attr("data-target") || n.preventDefault();
        var o = e(s),
            r = o.data("bs.collapse"),
            a = r ? "toggle" : s.data();
        i.call(o, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.scrollspy"),
                o = "object" == typeof i && i;
            s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                s = e.data("target") || e.attr("href"),
                o = /^#./.test(s) && t(s);
            return o && o.length && o.is(":visible") && [
                [o[i]().top + n, s]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            s = this.offsets,
            o = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = o[o.length - 1]) && this.activate(t);
        if (r && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var s = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), ! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.on("submit.validate", function(e) {
                function n() {
                    var n, s;
                    return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), s = i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), void 0 !== s ? s : !1) : !0
                }
                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            var e, i, n;
            return t(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, i = t(this[0].form).validate(), this.each(function() {
                e = i.element(this) && e, n = n.concat(i.errorList)
            }), i.errorList = n), e
        },
        rules: function(e, i) {
            var n, s, o, r, a, l, c = this[0];
            if (e) switch (n = t.data(c.form, "validator").settings, s = n.rules, o = t.validator.staticRules(c), e) {
                case "add":
                    t.extend(o, t.validator.normalizeRule(i)), delete o.messages, s[c.name] = o, i.messages && (n.messages[c.name] = t.extend(n.messages[c.name], i.messages));
                    break;
                case "remove":
                    return i ? (l = {}, t.each(i.split(/\s/), function(e, i) {
                        l[i] = o[i], delete o[i], "required" === i && t(c).removeAttr("aria-required")
                    }), l) : (delete s[c.name], o)
            }
            return r = t.validator.normalizeRules(t.extend({}, t.validator.classRules(c), t.validator.attributeRules(c), t.validator.dataRules(c), t.validator.staticRules(c)), c), r.required && (a = r.required, delete r.required, r = t.extend({
                required: a
            }, r), t(c).attr("aria-required", "true")), r.remote && (a = r.remote, delete r.remote, r = t.extend(r, {
                remote: a
            })), r
        }
    }), t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(e, i) {
                var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, n) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
            },
            unhighlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this.form, "validator"),
                        n = "on" + e.type.replace(/^validate/, ""),
                        s = i.settings;
                    s[n] && !t(this).is(s.ignore) && s[n].call(i, this, e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};
                t.each(this.settings.groups, function(e, i) {
                    "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
                        n[i] = e
                    })
                }), i = this.settings.rules, t.each(i, function(e, n) {
                    i[e] = t.validator.normalizeRule(n)
                }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var i = this.clean(e),
                    n = this.validationTargetFor(i),
                    s = !0;
                return this.lastElement = n, void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n), this.currentElements = t(n), s = this.check(n) !== !1, s ? delete this.invalid[n.name] : this.invalid[n.name] = !0), t(e).attr("aria-invalid", !s), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), s
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                var e, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (e = 0; i[e]; e++) this.settings.unhighlight.call(this, i[e], this.settings.errorClass, "");
                else i.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t) i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i, n = t(e),
                    s = e.type;
                return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : n.val() : (i = n.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n, s, o = t(e).rules(),
                    r = t.map(o, function(t, e) {
                        return e
                    }).length,
                    a = !1,
                    l = this.elementValue(e);
                for (n in o) {
                    s = {
                        method: n,
                        parameters: o[n]
                    };
                    try {
                        if (i = t.validator.methods[n].call(this, l, e, s.parameters), "dependency-mismatch" === i && 1 === r) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, s), !1
                    } catch (c) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method."), c
                    }
                }
                return a ? void 0 : (this.objectLength(o) && this.successList.push(e), !0)
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t];
                return void 0
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var n = this.defaultMessage(e, i.method),
                    s = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, i.parameters, e) : s.test(n) && (n = t.validator.format(n.replace(s, "{$1}"), i.parameters)), this.errorList.push({
                    message: n,
                    element: e,
                    method: i.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var n, s, o, r = this.errorsFor(e),
                    a = this.idOrName(e),
                    l = t(e).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(i || ""), n = r, this.settings.wrapper && (n = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e), r.is("label") ? r.attr("for", a) : 0 === r.parents("label[for='" + a + "']").length && (o = r.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), l ? l.match(new RegExp("\\b" + o + "\\b")) || (l += " " + o) : l = o, t(e).attr("aria-describedby", l), s = this.groups[e.name], s && t.each(this.groups, function(e, i) {
                    i === s && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", r.attr("id"))
                }))), !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, e)), this.toShow = this.toShow.add(r)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e),
                    n = t(e).attr("aria-describedby"),
                    s = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (s = s + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(s)
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            },
            destroy: function() {
                this.resetForm(), t(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
                n = t(e).attr("class");
            return n && t.each(n.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function(t, e, i, n) {
            /min|max/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
        },
        attributeRules: function(e) {
            var i, n, s = {},
                o = t(e),
                r = e.getAttribute("type");
            for (i in t.validator.methods) "required" === i ? (n = e.getAttribute(i), "" === n && (n = !0), n = !!n) : n = o.attr(i), this.normalizeAttributeRule(s, r, i, n);
            return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
        },
        dataRules: function(e) {
            var i, n, s = {},
                o = t(e),
                r = e.getAttribute("type");
            for (i in t.validator.methods) n = o.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(s, r, i, n);
            return s
        },
        staticRules: function(e) {
            var i = {},
                n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(n, s) {
                if (s === !1) return void delete e[n];
                if (s.param || s.depends) {
                    var o = !0;
                    switch (typeof s.depends) {
                        case "string":
                            o = !!t(s.depends, i.form).length;
                            break;
                        case "function":
                            o = s.depends.call(i, i)
                    }
                    o ? e[n] = void 0 !== s.param ? s.param : !0 : delete e[n]
                }
            }), t.each(e, function(n, s) {
                e[n] = t.isFunction(s) ? s(i) : s
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function(e, i, n) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, n) {
                if (!this.depend(n, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var s = t(i).val();
                    return s && s.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var i, n, s = 0,
                    o = 0,
                    r = !1;
                if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
                for (i = t.length - 1; i >= 0; i--) n = t.charAt(i), o = parseInt(n, 10), r && (o *= 2) > 9 && (o -= 9), s += o, r = !r;
                return s % 10 === 0
            },
            minlength: function(e, i, n) {
                var s = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || s >= n
            },
            maxlength: function(e, i, n) {
                var s = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || n >= s
            },
            rangelength: function(e, i, n) {
                var s = t.isArray(e) ? e.length : this.getLength(e, i);
                return this.optional(i) || s >= n[0] && s <= n[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function(e, i, n) {
                var s = t(n);
                return this.settings.onfocusout && s.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    t(i).valid()
                }), e === s.val()
            },
            remote: function(e, i, n) {
                if (this.optional(i)) return "dependency-mismatch";
                var s, o, r = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, n = "string" == typeof n && {
                    url: n
                } || n, r.old === e ? r.valid : (r.old = e, s = this, this.startRequest(i), o = {}, o[i.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: o,
                    context: s.currentForm,
                    success: function(n) {
                        var o, a, l, c = n === !0 || "true" === n;
                        s.settings.messages[i.name].remote = r.originalMessage, c ? (l = s.formSubmitted, s.prepareElement(i), s.formSubmitted = l, s.successList.push(i), delete s.invalid[i.name], s.showErrors()) : (o = {}, a = n || s.defaultMessage(i, "remote"), o[i.name] = r.message = t.isFunction(a) ? a(e) : a, s.invalid[i.name] = !0, s.showErrors(o)), r.valid = c, s.stopRequest(i, c)
                    }
                }, n)), "pending")
            }
        }
    });
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
        var s = t.port;
        "abort" === t.mode && (i[s] && i[s].abort(), i[s] = n)
    }) : (e = t.ajax, t.ajax = function(n) {
        var s = ("mode" in n ? n : t.ajaxSettings).mode,
            o = ("port" in n ? n : t.ajaxSettings).port;
        return "abort" === s ? (i[o] && i[o].abort(), i[o] = e.apply(this, arguments), i[o]) : e.apply(this, arguments)
    })
});