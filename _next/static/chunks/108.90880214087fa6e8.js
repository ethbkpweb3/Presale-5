!function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , r = (new t.Error).stack;
        r && (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[r] = "025582cf-8134-4f90-a293-a1cd30631d98",
        t._sentryDebugIdIdentifier = "sentry-dbid-025582cf-8134-4f90-a293-a1cd30631d98")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[108], {
    3108: function(t, r, e) {
        e.d(r, {
            U: function() {
                return tn
            },
            a: function() {
                return o
            },
            b: function() {
                return s
            },
            c: function() {
                return tX
            },
            d: function() {
                return rS
            },
            e: function() {
                return ti
            },
            f: function() {
                return f
            },
            i: function() {
                return a
            },
            r: function() {
                return tQ
            },
            s: function() {
                return z
            }
        });
        var i = e(7824)
          , n = {
            exports: {}
        };
        let o = (0,
        i.aG)(i.aH);
        n.exports,
        function(t, r) {
            function e(t, r) {
                if (!t)
                    throw Error(r || "Assertion failed")
            }
            function i(t, r) {
                t.super_ = r;
                var e = function() {};
                e.prototype = r.prototype,
                t.prototype = new e,
                t.prototype.constructor = t
            }
            function n(t, r, e) {
                if (n.isBN(t))
                    return t;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== t && (("le" === r || "be" === r) && (e = r,
                r = 10),
                this._init(t || 0, r || 10, e || "be"))
            }
            "object" == typeof t ? t.exports = n : r.BN = n,
            n.BN = n,
            n.wordSize = 26;
            try {
                f = "u" > typeof window.Buffer ? window.Buffer : o.Buffer
            } catch (t) {}
            function s(t, r) {
                var i = t.charCodeAt(r);
                return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void e(!1, "Invalid character in " + t)
            }
            function u(t, r, e) {
                var i = s(t, e);
                return e - 1 >= r && (i |= s(t, e - 1) << 4),
                i
            }
            function h(t, r, i, n) {
                for (var o = 0, s = 0, u = Math.min(t.length, i), h = r; h < u; h++) {
                    var a = t.charCodeAt(h) - 48;
                    o *= n,
                    s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a,
                    e(a >= 0 && s < n, "Invalid character"),
                    o += s
                }
                return o
            }
            function a(t, r) {
                t.words = r.words,
                t.length = r.length,
                t.negative = r.negative,
                t.red = r.red
            }
            if (n.isBN = function(t) {
                return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
            }
            ,
            n.max = function(t, r) {
                return t.cmp(r) > 0 ? t : r
            }
            ,
            n.min = function(t, r) {
                return 0 > t.cmp(r) ? t : r
            }
            ,
            n.prototype._init = function(t, r, i) {
                if ("number" == typeof t)
                    return this._initNumber(t, r, i);
                if ("object" == typeof t)
                    return this._initArray(t, r, i);
                "hex" === r && (r = 16),
                e(r === (0 | r) && r >= 2 && r <= 36);
                var n = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++,
                this.negative = 1),
                n < t.length && (16 === r ? this._parseHex(t, n, i) : (this._parseBase(t, r, n),
                "le" === i && this._initArray(this.toArray(), r, i)))
            }
            ,
            n.prototype._initNumber = function(t, r, i) {
                t < 0 && (this.negative = 1,
                t = -t),
                t < 67108864 ? (this.words = [67108863 & t],
                this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                this.length = 2) : (e(t < 9007199254740992),
                this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === i && this._initArray(this.toArray(), r, i)
            }
            ,
            n.prototype._initArray = function(t, r, i) {
                if (e("number" == typeof t.length),
                t.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(t.length / 3),
                this.words = Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var o, s, u = 0;
                if ("be" === i)
                    for (n = t.length - 1,
                    o = 0; n >= 0; n -= 3)
                        s = t[n] | t[n - 1] << 8 | t[n - 2] << 16,
                        this.words[o] |= s << u & 67108863,
                        this.words[o + 1] = s >>> 26 - u & 67108863,
                        (u += 24) >= 26 && (u -= 26,
                        o++);
                else if ("le" === i)
                    for (n = 0,
                    o = 0; n < t.length; n += 3)
                        s = t[n] | t[n + 1] << 8 | t[n + 2] << 16,
                        this.words[o] |= s << u & 67108863,
                        this.words[o + 1] = s >>> 26 - u & 67108863,
                        (u += 24) >= 26 && (u -= 26,
                        o++);
                return this._strip()
            }
            ,
            n.prototype._parseHex = function(t, r, e) {
                this.length = Math.ceil((t.length - r) / 6),
                this.words = Array(this.length);
                for (var i = 0; i < this.length; i++)
                    this.words[i] = 0;
                var n, o = 0, s = 0;
                if ("be" === e)
                    for (i = t.length - 1; i >= r; i -= 2)
                        n = u(t, r, i) << o,
                        this.words[s] |= 67108863 & n,
                        o >= 18 ? (o -= 18,
                        s += 1,
                        this.words[s] |= n >>> 26) : o += 8;
                else
                    for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2)
                        n = u(t, r, i) << o,
                        this.words[s] |= 67108863 & n,
                        o >= 18 ? (o -= 18,
                        s += 1,
                        this.words[s] |= n >>> 26) : o += 8;
                this._strip()
            }
            ,
            n.prototype._parseBase = function(t, r, e) {
                this.words = [0],
                this.length = 1;
                for (var i = 0, n = 1; n <= 67108863; n *= r)
                    i++;
                i--,
                n = n / r | 0;
                for (var o = t.length - e, s = o % i, u = Math.min(o, o - s) + e, a = 0, l = e; l < u; l += i)
                    a = h(t, l, l + i, r),
                    this.imuln(n),
                    this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                if (0 !== s) {
                    var f = 1;
                    for (a = h(t, l, t.length, r),
                    l = 0; l < s; l++)
                        f *= r;
                    this.imuln(f),
                    this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                }
                this._strip()
            }
            ,
            n.prototype.copy = function(t) {
                t.words = Array(this.length);
                for (var r = 0; r < this.length; r++)
                    t.words[r] = this.words[r];
                t.length = this.length,
                t.negative = this.negative,
                t.red = this.red
            }
            ,
            n.prototype._move = function(t) {
                a(t, this)
            }
            ,
            n.prototype.clone = function() {
                var t = new n(null);
                return this.copy(t),
                t
            }
            ,
            n.prototype._expand = function(t) {
                for (; this.length < t; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            n.prototype._strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            n.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            "u" > typeof Symbol && "function" == typeof Symbol.for)
                try {
                    n.prototype[Symbol.for("nodejs.util.inspect.custom")] = l
                } catch (t) {
                    n.prototype.inspect = l
                }
            else
                n.prototype.inspect = l;
            function l() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var f, c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], p = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], y = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function m(t, r, e) {
                e.negative = r.negative ^ t.negative;
                var i = t.length + r.length | 0;
                e.length = i,
                i = i - 1 | 0;
                var n = 0 | t.words[0]
                  , o = 0 | r.words[0]
                  , s = n * o
                  , u = 67108863 & s
                  , h = s / 67108864 | 0;
                e.words[0] = u;
                for (var a = 1; a < i; a++) {
                    for (var l = h >>> 26, f = 67108863 & h, c = Math.min(a, r.length - 1), p = Math.max(0, a - t.length + 1); p <= c; p++) {
                        var y = a - p | 0;
                        l += (s = (n = 0 | t.words[y]) * (o = 0 | r.words[p]) + f) / 67108864 | 0,
                        f = 67108863 & s
                    }
                    e.words[a] = 0 | f,
                    h = 0 | l
                }
                return 0 !== h ? e.words[a] = 0 | h : e.length--,
                e._strip()
            }
            n.prototype.toString = function(t, r) {
                if (r = 0 | r || 1,
                16 === (t = t || 10) || "hex" === t) {
                    i = "";
                    for (var i, n = 0, o = 0, s = 0; s < this.length; s++) {
                        var u = this.words[s]
                          , h = ((u << n | o) & 16777215).toString(16);
                        o = u >>> 24 - n & 16777215,
                        (n += 2) >= 26 && (n -= 26,
                        s--),
                        i = 0 !== o || s !== this.length - 1 ? c[6 - h.length] + h + i : h + i
                    }
                    for (0 !== o && (i = o.toString(16) + i); i.length % r != 0; )
                        i = "0" + i;
                    return 0 !== this.negative && (i = "-" + i),
                    i
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var a = p[t]
                      , l = y[t];
                    i = "";
                    var f = this.clone();
                    for (f.negative = 0; !f.isZero(); ) {
                        var m = f.modrn(l).toString(t);
                        i = (f = f.idivn(l)).isZero() ? m + i : c[a - m.length] + m + i
                    }
                    for (this.isZero() && (i = "0" + i); i.length % r != 0; )
                        i = "0" + i;
                    return 0 !== this.negative && (i = "-" + i),
                    i
                }
                e(!1, "Base should be between 2 and 36")
            }
            ,
            n.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && e(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
            }
            ,
            n.prototype.toJSON = function() {
                return this.toString(16, 2)
            }
            ,
            f && (n.prototype.toBuffer = function(t, r) {
                return this.toArrayLike(f, t, r)
            }
            ),
            n.prototype.toArray = function(t, r) {
                return this.toArrayLike(Array, t, r)
            }
            ,
            n.prototype.toArrayLike = function(t, r, i) {
                this._strip();
                var n = this.byteLength()
                  , o = i || Math.max(1, n);
                e(n <= o, "byte array longer than desired length"),
                e(o > 0, "Requested array length <= 0");
                var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
                return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](s, n),
                s
            }
            ,
            n.prototype._toArrayLikeLE = function(t, r) {
                for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                    var s = this.words[n] << o | i;
                    t[e++] = 255 & s,
                    e < t.length && (t[e++] = s >> 8 & 255),
                    e < t.length && (t[e++] = s >> 16 & 255),
                    6 === o ? (e < t.length && (t[e++] = s >> 24 & 255),
                    i = 0,
                    o = 0) : (i = s >>> 24,
                    o += 2)
                }
                if (e < t.length)
                    for (t[e++] = i; e < t.length; )
                        t[e++] = 0
            }
            ,
            n.prototype._toArrayLikeBE = function(t, r) {
                for (var e = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                    var s = this.words[n] << o | i;
                    t[e--] = 255 & s,
                    e >= 0 && (t[e--] = s >> 8 & 255),
                    e >= 0 && (t[e--] = s >> 16 & 255),
                    6 === o ? (e >= 0 && (t[e--] = s >> 24 & 255),
                    i = 0,
                    o = 0) : (i = s >>> 24,
                    o += 2)
                }
                if (e >= 0)
                    for (t[e--] = i; e >= 0; )
                        t[e--] = 0
            }
            ,
            Math.clz32 ? n.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            }
            : n.prototype._countBits = function(t) {
                var r = t
                  , e = 0;
                return r >= 4096 && (e += 13,
                r >>>= 13),
                r >= 64 && (e += 7,
                r >>>= 7),
                r >= 8 && (e += 4,
                r >>>= 4),
                r >= 2 && (e += 2,
                r >>>= 2),
                e + r
            }
            ,
            n.prototype._zeroBits = function(t) {
                if (0 === t)
                    return 26;
                var r = t
                  , e = 0;
                return 8191 & r || (e += 13,
                r >>>= 13),
                127 & r || (e += 7,
                r >>>= 7),
                15 & r || (e += 4,
                r >>>= 4),
                3 & r || (e += 2,
                r >>>= 2),
                1 & r || e++,
                e
            }
            ,
            n.prototype.bitLength = function() {
                var t = this.words[this.length - 1]
                  , r = this._countBits(t);
                return (this.length - 1) * 26 + r
            }
            ,
            n.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var t = 0, r = 0; r < this.length; r++) {
                    var e = this._zeroBits(this.words[r]);
                    if (t += e,
                    26 !== e)
                        break
                }
                return t
            }
            ,
            n.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            n.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
            }
            ,
            n.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }
            ,
            n.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            n.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            n.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            n.prototype.iuor = function(t) {
                for (; this.length < t.length; )
                    this.words[this.length++] = 0;
                for (var r = 0; r < t.length; r++)
                    this.words[r] = this.words[r] | t.words[r];
                return this._strip()
            }
            ,
            n.prototype.ior = function(t) {
                return e((this.negative | t.negative) == 0),
                this.iuor(t)
            }
            ,
            n.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }
            ,
            n.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }
            ,
            n.prototype.iuand = function(t) {
                var r;
                r = this.length > t.length ? t : this;
                for (var e = 0; e < r.length; e++)
                    this.words[e] = this.words[e] & t.words[e];
                return this.length = r.length,
                this._strip()
            }
            ,
            n.prototype.iand = function(t) {
                return e((this.negative | t.negative) == 0),
                this.iuand(t)
            }
            ,
            n.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }
            ,
            n.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }
            ,
            n.prototype.iuxor = function(t) {
                var r, e;
                this.length > t.length ? (r = this,
                e = t) : (r = t,
                e = this);
                for (var i = 0; i < e.length; i++)
                    this.words[i] = r.words[i] ^ e.words[i];
                if (this !== r)
                    for (; i < r.length; i++)
                        this.words[i] = r.words[i];
                return this.length = r.length,
                this._strip()
            }
            ,
            n.prototype.ixor = function(t) {
                return e((this.negative | t.negative) == 0),
                this.iuxor(t)
            }
            ,
            n.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }
            ,
            n.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }
            ,
            n.prototype.inotn = function(t) {
                e("number" == typeof t && t >= 0);
                var r = 0 | Math.ceil(t / 26)
                  , i = t % 26;
                this._expand(r),
                i > 0 && r--;
                for (var n = 0; n < r; n++)
                    this.words[n] = 67108863 & ~this.words[n];
                return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i),
                this._strip()
            }
            ,
            n.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }
            ,
            n.prototype.setn = function(t, r) {
                e("number" == typeof t && t >= 0);
                var i = t / 26 | 0
                  , n = t % 26;
                return this._expand(i + 1),
                r ? this.words[i] = this.words[i] | 1 << n : this.words[i] = this.words[i] & ~(1 << n),
                this._strip()
            }
            ,
            n.prototype.iadd = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return this.negative = 0,
                    r = this.isub(t),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== t.negative)
                    return t.negative = 0,
                    r = this.isub(t),
                    t.negative = 1,
                    r._normSign();
                this.length > t.length ? (e = this,
                i = t) : (e = t,
                i = this);
                for (var r, e, i, n = 0, o = 0; o < i.length; o++)
                    r = (0 | e.words[o]) + (0 | i.words[o]) + n,
                    this.words[o] = 67108863 & r,
                    n = r >>> 26;
                for (; 0 !== n && o < e.length; o++)
                    r = (0 | e.words[o]) + n,
                    this.words[o] = 67108863 & r,
                    n = r >>> 26;
                if (this.length = e.length,
                0 !== n)
                    this.words[this.length] = n,
                    this.length++;
                else if (e !== this)
                    for (; o < e.length; o++)
                        this.words[o] = e.words[o];
                return this
            }
            ,
            n.prototype.add = function(t) {
                var r;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0,
                r = this.sub(t),
                t.negative ^= 1,
                r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0,
                r = t.sub(this),
                this.negative = 1,
                r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }
            ,
            n.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var r, e, i = this.iadd(t);
                    return t.negative = 1,
                    i._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(t),
                    this.negative = 1,
                    this._normSign();
                var n = this.cmp(t);
                if (0 === n)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                n > 0 ? (r = this,
                e = t) : (r = t,
                e = this);
                for (var o = 0, s = 0; s < e.length; s++)
                    o = (i = (0 | r.words[s]) - (0 | e.words[s]) + o) >> 26,
                    this.words[s] = 67108863 & i;
                for (; 0 !== o && s < r.length; s++)
                    o = (i = (0 | r.words[s]) + o) >> 26,
                    this.words[s] = 67108863 & i;
                if (0 === o && s < r.length && r !== this)
                    for (; s < r.length; s++)
                        this.words[s] = r.words[s];
                return this.length = Math.max(this.length, s),
                r !== this && (this.negative = 1),
                this._strip()
            }
            ,
            n.prototype.sub = function(t) {
                return this.clone().isub(t)
            }
            ;
            var d = function(t, r, e) {
                var i, n, o, s = t.words, u = r.words, h = e.words, a = 0, l = 0 | s[0], f = 8191 & l, c = l >>> 13, p = 0 | s[1], y = 8191 & p, m = p >>> 13, d = 0 | s[2], g = 8191 & d, v = d >>> 13, w = 0 | s[3], b = 8191 & w, M = w >>> 13, _ = 0 | s[4], A = 8191 & _, S = _ >>> 13, E = 0 | s[5], O = 8191 & E, j = E >>> 13, I = 0 | s[6], B = 8191 & I, x = I >>> 13, k = 0 | s[7], P = 8191 & k, N = k >>> 13, U = 0 | s[8], F = 8191 & U, R = U >>> 13, L = 0 | s[9], T = 8191 & L, C = L >>> 13, D = 0 | u[0], z = 8191 & D, q = D >>> 13, W = 0 | u[1], G = 8191 & W, Z = W >>> 13, $ = 0 | u[2], J = 8191 & $, V = $ >>> 13, K = 0 | u[3], H = 8191 & K, Q = K >>> 13, X = 0 | u[4], Y = 8191 & X, tt = X >>> 13, tr = 0 | u[5], te = 8191 & tr, ti = tr >>> 13, tn = 0 | u[6], to = 8191 & tn, ts = tn >>> 13, tu = 0 | u[7], th = 8191 & tu, ta = tu >>> 13, tl = 0 | u[8], tf = 8191 & tl, tc = tl >>> 13, tp = 0 | u[9], ty = 8191 & tp, tm = tp >>> 13;
                e.negative = t.negative ^ r.negative,
                e.length = 19,
                i = Math.imul(f, z),
                n = (n = Math.imul(f, q)) + Math.imul(c, z) | 0,
                o = Math.imul(c, q);
                var td = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (td >>> 26) | 0,
                td &= 67108863,
                i = Math.imul(y, z),
                n = (n = Math.imul(y, q)) + Math.imul(m, z) | 0,
                o = Math.imul(m, q),
                i = i + Math.imul(f, G) | 0,
                n = (n = n + Math.imul(f, Z) | 0) + Math.imul(c, G) | 0,
                o = o + Math.imul(c, Z) | 0;
                var tg = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tg >>> 26) | 0,
                tg &= 67108863,
                i = Math.imul(g, z),
                n = (n = Math.imul(g, q)) + Math.imul(v, z) | 0,
                o = Math.imul(v, q),
                i = i + Math.imul(y, G) | 0,
                n = (n = n + Math.imul(y, Z) | 0) + Math.imul(m, G) | 0,
                o = o + Math.imul(m, Z) | 0,
                i = i + Math.imul(f, J) | 0,
                n = (n = n + Math.imul(f, V) | 0) + Math.imul(c, J) | 0,
                o = o + Math.imul(c, V) | 0;
                var tv = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tv >>> 26) | 0,
                tv &= 67108863,
                i = Math.imul(b, z),
                n = (n = Math.imul(b, q)) + Math.imul(M, z) | 0,
                o = Math.imul(M, q),
                i = i + Math.imul(g, G) | 0,
                n = (n = n + Math.imul(g, Z) | 0) + Math.imul(v, G) | 0,
                o = o + Math.imul(v, Z) | 0,
                i = i + Math.imul(y, J) | 0,
                n = (n = n + Math.imul(y, V) | 0) + Math.imul(m, J) | 0,
                o = o + Math.imul(m, V) | 0,
                i = i + Math.imul(f, H) | 0,
                n = (n = n + Math.imul(f, Q) | 0) + Math.imul(c, H) | 0,
                o = o + Math.imul(c, Q) | 0;
                var tw = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tw >>> 26) | 0,
                tw &= 67108863,
                i = Math.imul(A, z),
                n = (n = Math.imul(A, q)) + Math.imul(S, z) | 0,
                o = Math.imul(S, q),
                i = i + Math.imul(b, G) | 0,
                n = (n = n + Math.imul(b, Z) | 0) + Math.imul(M, G) | 0,
                o = o + Math.imul(M, Z) | 0,
                i = i + Math.imul(g, J) | 0,
                n = (n = n + Math.imul(g, V) | 0) + Math.imul(v, J) | 0,
                o = o + Math.imul(v, V) | 0,
                i = i + Math.imul(y, H) | 0,
                n = (n = n + Math.imul(y, Q) | 0) + Math.imul(m, H) | 0,
                o = o + Math.imul(m, Q) | 0,
                i = i + Math.imul(f, Y) | 0,
                n = (n = n + Math.imul(f, tt) | 0) + Math.imul(c, Y) | 0,
                o = o + Math.imul(c, tt) | 0;
                var tb = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tb >>> 26) | 0,
                tb &= 67108863,
                i = Math.imul(O, z),
                n = (n = Math.imul(O, q)) + Math.imul(j, z) | 0,
                o = Math.imul(j, q),
                i = i + Math.imul(A, G) | 0,
                n = (n = n + Math.imul(A, Z) | 0) + Math.imul(S, G) | 0,
                o = o + Math.imul(S, Z) | 0,
                i = i + Math.imul(b, J) | 0,
                n = (n = n + Math.imul(b, V) | 0) + Math.imul(M, J) | 0,
                o = o + Math.imul(M, V) | 0,
                i = i + Math.imul(g, H) | 0,
                n = (n = n + Math.imul(g, Q) | 0) + Math.imul(v, H) | 0,
                o = o + Math.imul(v, Q) | 0,
                i = i + Math.imul(y, Y) | 0,
                n = (n = n + Math.imul(y, tt) | 0) + Math.imul(m, Y) | 0,
                o = o + Math.imul(m, tt) | 0,
                i = i + Math.imul(f, te) | 0,
                n = (n = n + Math.imul(f, ti) | 0) + Math.imul(c, te) | 0,
                o = o + Math.imul(c, ti) | 0;
                var tM = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tM >>> 26) | 0,
                tM &= 67108863,
                i = Math.imul(B, z),
                n = (n = Math.imul(B, q)) + Math.imul(x, z) | 0,
                o = Math.imul(x, q),
                i = i + Math.imul(O, G) | 0,
                n = (n = n + Math.imul(O, Z) | 0) + Math.imul(j, G) | 0,
                o = o + Math.imul(j, Z) | 0,
                i = i + Math.imul(A, J) | 0,
                n = (n = n + Math.imul(A, V) | 0) + Math.imul(S, J) | 0,
                o = o + Math.imul(S, V) | 0,
                i = i + Math.imul(b, H) | 0,
                n = (n = n + Math.imul(b, Q) | 0) + Math.imul(M, H) | 0,
                o = o + Math.imul(M, Q) | 0,
                i = i + Math.imul(g, Y) | 0,
                n = (n = n + Math.imul(g, tt) | 0) + Math.imul(v, Y) | 0,
                o = o + Math.imul(v, tt) | 0,
                i = i + Math.imul(y, te) | 0,
                n = (n = n + Math.imul(y, ti) | 0) + Math.imul(m, te) | 0,
                o = o + Math.imul(m, ti) | 0,
                i = i + Math.imul(f, to) | 0,
                n = (n = n + Math.imul(f, ts) | 0) + Math.imul(c, to) | 0,
                o = o + Math.imul(c, ts) | 0;
                var t_ = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (t_ >>> 26) | 0,
                t_ &= 67108863,
                i = Math.imul(P, z),
                n = (n = Math.imul(P, q)) + Math.imul(N, z) | 0,
                o = Math.imul(N, q),
                i = i + Math.imul(B, G) | 0,
                n = (n = n + Math.imul(B, Z) | 0) + Math.imul(x, G) | 0,
                o = o + Math.imul(x, Z) | 0,
                i = i + Math.imul(O, J) | 0,
                n = (n = n + Math.imul(O, V) | 0) + Math.imul(j, J) | 0,
                o = o + Math.imul(j, V) | 0,
                i = i + Math.imul(A, H) | 0,
                n = (n = n + Math.imul(A, Q) | 0) + Math.imul(S, H) | 0,
                o = o + Math.imul(S, Q) | 0,
                i = i + Math.imul(b, Y) | 0,
                n = (n = n + Math.imul(b, tt) | 0) + Math.imul(M, Y) | 0,
                o = o + Math.imul(M, tt) | 0,
                i = i + Math.imul(g, te) | 0,
                n = (n = n + Math.imul(g, ti) | 0) + Math.imul(v, te) | 0,
                o = o + Math.imul(v, ti) | 0,
                i = i + Math.imul(y, to) | 0,
                n = (n = n + Math.imul(y, ts) | 0) + Math.imul(m, to) | 0,
                o = o + Math.imul(m, ts) | 0,
                i = i + Math.imul(f, th) | 0,
                n = (n = n + Math.imul(f, ta) | 0) + Math.imul(c, th) | 0,
                o = o + Math.imul(c, ta) | 0;
                var tA = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tA >>> 26) | 0,
                tA &= 67108863,
                i = Math.imul(F, z),
                n = (n = Math.imul(F, q)) + Math.imul(R, z) | 0,
                o = Math.imul(R, q),
                i = i + Math.imul(P, G) | 0,
                n = (n = n + Math.imul(P, Z) | 0) + Math.imul(N, G) | 0,
                o = o + Math.imul(N, Z) | 0,
                i = i + Math.imul(B, J) | 0,
                n = (n = n + Math.imul(B, V) | 0) + Math.imul(x, J) | 0,
                o = o + Math.imul(x, V) | 0,
                i = i + Math.imul(O, H) | 0,
                n = (n = n + Math.imul(O, Q) | 0) + Math.imul(j, H) | 0,
                o = o + Math.imul(j, Q) | 0,
                i = i + Math.imul(A, Y) | 0,
                n = (n = n + Math.imul(A, tt) | 0) + Math.imul(S, Y) | 0,
                o = o + Math.imul(S, tt) | 0,
                i = i + Math.imul(b, te) | 0,
                n = (n = n + Math.imul(b, ti) | 0) + Math.imul(M, te) | 0,
                o = o + Math.imul(M, ti) | 0,
                i = i + Math.imul(g, to) | 0,
                n = (n = n + Math.imul(g, ts) | 0) + Math.imul(v, to) | 0,
                o = o + Math.imul(v, ts) | 0,
                i = i + Math.imul(y, th) | 0,
                n = (n = n + Math.imul(y, ta) | 0) + Math.imul(m, th) | 0,
                o = o + Math.imul(m, ta) | 0,
                i = i + Math.imul(f, tf) | 0,
                n = (n = n + Math.imul(f, tc) | 0) + Math.imul(c, tf) | 0,
                o = o + Math.imul(c, tc) | 0;
                var tS = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tS >>> 26) | 0,
                tS &= 67108863,
                i = Math.imul(T, z),
                n = (n = Math.imul(T, q)) + Math.imul(C, z) | 0,
                o = Math.imul(C, q),
                i = i + Math.imul(F, G) | 0,
                n = (n = n + Math.imul(F, Z) | 0) + Math.imul(R, G) | 0,
                o = o + Math.imul(R, Z) | 0,
                i = i + Math.imul(P, J) | 0,
                n = (n = n + Math.imul(P, V) | 0) + Math.imul(N, J) | 0,
                o = o + Math.imul(N, V) | 0,
                i = i + Math.imul(B, H) | 0,
                n = (n = n + Math.imul(B, Q) | 0) + Math.imul(x, H) | 0,
                o = o + Math.imul(x, Q) | 0,
                i = i + Math.imul(O, Y) | 0,
                n = (n = n + Math.imul(O, tt) | 0) + Math.imul(j, Y) | 0,
                o = o + Math.imul(j, tt) | 0,
                i = i + Math.imul(A, te) | 0,
                n = (n = n + Math.imul(A, ti) | 0) + Math.imul(S, te) | 0,
                o = o + Math.imul(S, ti) | 0,
                i = i + Math.imul(b, to) | 0,
                n = (n = n + Math.imul(b, ts) | 0) + Math.imul(M, to) | 0,
                o = o + Math.imul(M, ts) | 0,
                i = i + Math.imul(g, th) | 0,
                n = (n = n + Math.imul(g, ta) | 0) + Math.imul(v, th) | 0,
                o = o + Math.imul(v, ta) | 0,
                i = i + Math.imul(y, tf) | 0,
                n = (n = n + Math.imul(y, tc) | 0) + Math.imul(m, tf) | 0,
                o = o + Math.imul(m, tc) | 0,
                i = i + Math.imul(f, ty) | 0,
                n = (n = n + Math.imul(f, tm) | 0) + Math.imul(c, ty) | 0,
                o = o + Math.imul(c, tm) | 0;
                var tE = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tE >>> 26) | 0,
                tE &= 67108863,
                i = Math.imul(T, G),
                n = (n = Math.imul(T, Z)) + Math.imul(C, G) | 0,
                o = Math.imul(C, Z),
                i = i + Math.imul(F, J) | 0,
                n = (n = n + Math.imul(F, V) | 0) + Math.imul(R, J) | 0,
                o = o + Math.imul(R, V) | 0,
                i = i + Math.imul(P, H) | 0,
                n = (n = n + Math.imul(P, Q) | 0) + Math.imul(N, H) | 0,
                o = o + Math.imul(N, Q) | 0,
                i = i + Math.imul(B, Y) | 0,
                n = (n = n + Math.imul(B, tt) | 0) + Math.imul(x, Y) | 0,
                o = o + Math.imul(x, tt) | 0,
                i = i + Math.imul(O, te) | 0,
                n = (n = n + Math.imul(O, ti) | 0) + Math.imul(j, te) | 0,
                o = o + Math.imul(j, ti) | 0,
                i = i + Math.imul(A, to) | 0,
                n = (n = n + Math.imul(A, ts) | 0) + Math.imul(S, to) | 0,
                o = o + Math.imul(S, ts) | 0,
                i = i + Math.imul(b, th) | 0,
                n = (n = n + Math.imul(b, ta) | 0) + Math.imul(M, th) | 0,
                o = o + Math.imul(M, ta) | 0,
                i = i + Math.imul(g, tf) | 0,
                n = (n = n + Math.imul(g, tc) | 0) + Math.imul(v, tf) | 0,
                o = o + Math.imul(v, tc) | 0,
                i = i + Math.imul(y, ty) | 0,
                n = (n = n + Math.imul(y, tm) | 0) + Math.imul(m, ty) | 0,
                o = o + Math.imul(m, tm) | 0;
                var tO = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tO >>> 26) | 0,
                tO &= 67108863,
                i = Math.imul(T, J),
                n = (n = Math.imul(T, V)) + Math.imul(C, J) | 0,
                o = Math.imul(C, V),
                i = i + Math.imul(F, H) | 0,
                n = (n = n + Math.imul(F, Q) | 0) + Math.imul(R, H) | 0,
                o = o + Math.imul(R, Q) | 0,
                i = i + Math.imul(P, Y) | 0,
                n = (n = n + Math.imul(P, tt) | 0) + Math.imul(N, Y) | 0,
                o = o + Math.imul(N, tt) | 0,
                i = i + Math.imul(B, te) | 0,
                n = (n = n + Math.imul(B, ti) | 0) + Math.imul(x, te) | 0,
                o = o + Math.imul(x, ti) | 0,
                i = i + Math.imul(O, to) | 0,
                n = (n = n + Math.imul(O, ts) | 0) + Math.imul(j, to) | 0,
                o = o + Math.imul(j, ts) | 0,
                i = i + Math.imul(A, th) | 0,
                n = (n = n + Math.imul(A, ta) | 0) + Math.imul(S, th) | 0,
                o = o + Math.imul(S, ta) | 0,
                i = i + Math.imul(b, tf) | 0,
                n = (n = n + Math.imul(b, tc) | 0) + Math.imul(M, tf) | 0,
                o = o + Math.imul(M, tc) | 0,
                i = i + Math.imul(g, ty) | 0,
                n = (n = n + Math.imul(g, tm) | 0) + Math.imul(v, ty) | 0,
                o = o + Math.imul(v, tm) | 0;
                var tj = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tj >>> 26) | 0,
                tj &= 67108863,
                i = Math.imul(T, H),
                n = (n = Math.imul(T, Q)) + Math.imul(C, H) | 0,
                o = Math.imul(C, Q),
                i = i + Math.imul(F, Y) | 0,
                n = (n = n + Math.imul(F, tt) | 0) + Math.imul(R, Y) | 0,
                o = o + Math.imul(R, tt) | 0,
                i = i + Math.imul(P, te) | 0,
                n = (n = n + Math.imul(P, ti) | 0) + Math.imul(N, te) | 0,
                o = o + Math.imul(N, ti) | 0,
                i = i + Math.imul(B, to) | 0,
                n = (n = n + Math.imul(B, ts) | 0) + Math.imul(x, to) | 0,
                o = o + Math.imul(x, ts) | 0,
                i = i + Math.imul(O, th) | 0,
                n = (n = n + Math.imul(O, ta) | 0) + Math.imul(j, th) | 0,
                o = o + Math.imul(j, ta) | 0,
                i = i + Math.imul(A, tf) | 0,
                n = (n = n + Math.imul(A, tc) | 0) + Math.imul(S, tf) | 0,
                o = o + Math.imul(S, tc) | 0,
                i = i + Math.imul(b, ty) | 0,
                n = (n = n + Math.imul(b, tm) | 0) + Math.imul(M, ty) | 0,
                o = o + Math.imul(M, tm) | 0;
                var tI = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tI >>> 26) | 0,
                tI &= 67108863,
                i = Math.imul(T, Y),
                n = (n = Math.imul(T, tt)) + Math.imul(C, Y) | 0,
                o = Math.imul(C, tt),
                i = i + Math.imul(F, te) | 0,
                n = (n = n + Math.imul(F, ti) | 0) + Math.imul(R, te) | 0,
                o = o + Math.imul(R, ti) | 0,
                i = i + Math.imul(P, to) | 0,
                n = (n = n + Math.imul(P, ts) | 0) + Math.imul(N, to) | 0,
                o = o + Math.imul(N, ts) | 0,
                i = i + Math.imul(B, th) | 0,
                n = (n = n + Math.imul(B, ta) | 0) + Math.imul(x, th) | 0,
                o = o + Math.imul(x, ta) | 0,
                i = i + Math.imul(O, tf) | 0,
                n = (n = n + Math.imul(O, tc) | 0) + Math.imul(j, tf) | 0,
                o = o + Math.imul(j, tc) | 0,
                i = i + Math.imul(A, ty) | 0,
                n = (n = n + Math.imul(A, tm) | 0) + Math.imul(S, ty) | 0,
                o = o + Math.imul(S, tm) | 0;
                var tB = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tB >>> 26) | 0,
                tB &= 67108863,
                i = Math.imul(T, te),
                n = (n = Math.imul(T, ti)) + Math.imul(C, te) | 0,
                o = Math.imul(C, ti),
                i = i + Math.imul(F, to) | 0,
                n = (n = n + Math.imul(F, ts) | 0) + Math.imul(R, to) | 0,
                o = o + Math.imul(R, ts) | 0,
                i = i + Math.imul(P, th) | 0,
                n = (n = n + Math.imul(P, ta) | 0) + Math.imul(N, th) | 0,
                o = o + Math.imul(N, ta) | 0,
                i = i + Math.imul(B, tf) | 0,
                n = (n = n + Math.imul(B, tc) | 0) + Math.imul(x, tf) | 0,
                o = o + Math.imul(x, tc) | 0,
                i = i + Math.imul(O, ty) | 0,
                n = (n = n + Math.imul(O, tm) | 0) + Math.imul(j, ty) | 0,
                o = o + Math.imul(j, tm) | 0;
                var tx = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tx >>> 26) | 0,
                tx &= 67108863,
                i = Math.imul(T, to),
                n = (n = Math.imul(T, ts)) + Math.imul(C, to) | 0,
                o = Math.imul(C, ts),
                i = i + Math.imul(F, th) | 0,
                n = (n = n + Math.imul(F, ta) | 0) + Math.imul(R, th) | 0,
                o = o + Math.imul(R, ta) | 0,
                i = i + Math.imul(P, tf) | 0,
                n = (n = n + Math.imul(P, tc) | 0) + Math.imul(N, tf) | 0,
                o = o + Math.imul(N, tc) | 0,
                i = i + Math.imul(B, ty) | 0,
                n = (n = n + Math.imul(B, tm) | 0) + Math.imul(x, ty) | 0,
                o = o + Math.imul(x, tm) | 0;
                var tk = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tk >>> 26) | 0,
                tk &= 67108863,
                i = Math.imul(T, th),
                n = (n = Math.imul(T, ta)) + Math.imul(C, th) | 0,
                o = Math.imul(C, ta),
                i = i + Math.imul(F, tf) | 0,
                n = (n = n + Math.imul(F, tc) | 0) + Math.imul(R, tf) | 0,
                o = o + Math.imul(R, tc) | 0,
                i = i + Math.imul(P, ty) | 0,
                n = (n = n + Math.imul(P, tm) | 0) + Math.imul(N, ty) | 0,
                o = o + Math.imul(N, tm) | 0;
                var tP = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tP >>> 26) | 0,
                tP &= 67108863,
                i = Math.imul(T, tf),
                n = (n = Math.imul(T, tc)) + Math.imul(C, tf) | 0,
                o = Math.imul(C, tc),
                i = i + Math.imul(F, ty) | 0,
                n = (n = n + Math.imul(F, tm) | 0) + Math.imul(R, ty) | 0,
                o = o + Math.imul(R, tm) | 0;
                var tN = (a + i | 0) + ((8191 & n) << 13) | 0;
                a = (o + (n >>> 13) | 0) + (tN >>> 26) | 0,
                tN &= 67108863,
                i = Math.imul(T, ty),
                n = (n = Math.imul(T, tm)) + Math.imul(C, ty) | 0,
                o = Math.imul(C, tm);
                var tU = (a + i | 0) + ((8191 & n) << 13) | 0;
                return a = (o + (n >>> 13) | 0) + (tU >>> 26) | 0,
                tU &= 67108863,
                h[0] = td,
                h[1] = tg,
                h[2] = tv,
                h[3] = tw,
                h[4] = tb,
                h[5] = tM,
                h[6] = t_,
                h[7] = tA,
                h[8] = tS,
                h[9] = tE,
                h[10] = tO,
                h[11] = tj,
                h[12] = tI,
                h[13] = tB,
                h[14] = tx,
                h[15] = tk,
                h[16] = tP,
                h[17] = tN,
                h[18] = tU,
                0 !== a && (h[19] = a,
                e.length++),
                e
            };
            function g(t, r, e) {
                e.negative = r.negative ^ t.negative,
                e.length = t.length + r.length;
                for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
                    var s = n;
                    n = 0;
                    for (var u = 67108863 & i, h = Math.min(o, r.length - 1), a = Math.max(0, o - t.length + 1); a <= h; a++) {
                        var l = o - a
                          , f = (0 | t.words[l]) * (0 | r.words[a])
                          , c = 67108863 & f;
                        s = s + (f / 67108864 | 0) | 0,
                        u = 67108863 & (c = c + u | 0),
                        n += (s = s + (c >>> 26) | 0) >>> 26,
                        s &= 67108863
                    }
                    e.words[o] = u,
                    i = s,
                    s = n
                }
                return 0 !== i ? e.words[o] = i : e.length--,
                e._strip()
            }
            Math.imul || (d = m),
            n.prototype.mulTo = function(t, r) {
                var e, i = this.length + t.length;
                return 10 === this.length && 10 === t.length ? d(this, t, r) : i < 63 ? m(this, t, r) : g(this, t, r)
            }
            ,
            n.prototype.mul = function(t) {
                var r = new n(null);
                return r.words = Array(this.length + t.length),
                this.mulTo(t, r)
            }
            ,
            n.prototype.mulf = function(t) {
                var r = new n(null);
                return r.words = Array(this.length + t.length),
                g(this, t, r)
            }
            ,
            n.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }
            ,
            n.prototype.imuln = function(t) {
                var r = t < 0;
                r && (t = -t),
                e("number" == typeof t),
                e(t < 67108864);
                for (var i = 0, n = 0; n < this.length; n++) {
                    var o = (0 | this.words[n]) * t
                      , s = (67108863 & o) + (67108863 & i);
                    i >>= 26,
                    i += (o / 67108864 | 0) + (s >>> 26),
                    this.words[n] = 67108863 & s
                }
                return 0 !== i && (this.words[n] = i,
                this.length++),
                r ? this.ineg() : this
            }
            ,
            n.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }
            ,
            n.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            n.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            n.prototype.pow = function(t) {
                var r = function(t) {
                    for (var r = Array(t.bitLength()), e = 0; e < r.length; e++) {
                        var i = e / 26 | 0
                          , n = e % 26;
                        r[e] = t.words[i] >>> n & 1
                    }
                    return r
                }(t);
                if (0 === r.length)
                    return new n(1);
                for (var e = this, i = 0; i < r.length && 0 === r[i]; i++,
                e = e.sqr())
                    ;
                if (++i < r.length)
                    for (var o = e.sqr(); i < r.length; i++,
                    o = o.sqr())
                        0 !== r[i] && (e = e.mul(o));
                return e
            }
            ,
            n.prototype.iushln = function(t) {
                e("number" == typeof t && t >= 0);
                var r, i = t % 26, n = (t - i) / 26, o = 67108863 >>> 26 - i << 26 - i;
                if (0 !== i) {
                    var s = 0;
                    for (r = 0; r < this.length; r++) {
                        var u = this.words[r] & o
                          , h = (0 | this.words[r]) - u << i;
                        this.words[r] = h | s,
                        s = u >>> 26 - i
                    }
                    s && (this.words[r] = s,
                    this.length++)
                }
                if (0 !== n) {
                    for (r = this.length - 1; r >= 0; r--)
                        this.words[r + n] = this.words[r];
                    for (r = 0; r < n; r++)
                        this.words[r] = 0;
                    this.length += n
                }
                return this._strip()
            }
            ,
            n.prototype.ishln = function(t) {
                return e(0 === this.negative),
                this.iushln(t)
            }
            ,
            n.prototype.iushrn = function(t, r, i) {
                e("number" == typeof t && t >= 0),
                n = r ? (r - r % 26) / 26 : 0;
                var n, o = t % 26, s = Math.min((t - o) / 26, this.length), u = 67108863 ^ 67108863 >>> o << o;
                if (n -= s,
                n = Math.max(0, n),
                i) {
                    for (var h = 0; h < s; h++)
                        i.words[h] = this.words[h];
                    i.length = s
                }
                if (0 !== s) {
                    if (this.length > s)
                        for (this.length -= s,
                        h = 0; h < this.length; h++)
                            this.words[h] = this.words[h + s];
                    else
                        this.words[0] = 0,
                        this.length = 1
                }
                var a = 0;
                for (h = this.length - 1; h >= 0 && (0 !== a || h >= n); h--) {
                    var l = 0 | this.words[h];
                    this.words[h] = a << 26 - o | l >>> o,
                    a = l & u
                }
                return i && 0 !== a && (i.words[i.length++] = a),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this._strip()
            }
            ,
            n.prototype.ishrn = function(t, r, i) {
                return e(0 === this.negative),
                this.iushrn(t, r, i)
            }
            ,
            n.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }
            ,
            n.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }
            ,
            n.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }
            ,
            n.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }
            ,
            n.prototype.testn = function(t) {
                e("number" == typeof t && t >= 0);
                var r = t % 26
                  , i = (t - r) / 26;
                return !(this.length <= i) && !!(this.words[i] & 1 << r)
            }
            ,
            n.prototype.imaskn = function(t) {
                e("number" == typeof t && t >= 0);
                var r = t % 26
                  , i = (t - r) / 26;
                return (e(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= i) ? this : (0 !== r && i++,
                this.length = Math.min(i, this.length),
                0 !== r && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> r << r),
                this._strip())
            }
            ,
            n.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }
            ,
            n.prototype.iaddn = function(t) {
                return e("number" == typeof t),
                e(t < 67108864),
                t < 0 ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]),
                this.negative = 0) : (this.negative = 0,
                this.isubn(t),
                this.negative = 1),
                this) : this._iaddn(t)
            }
            ,
            n.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
                    this.words[r] -= 67108864,
                    r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
                return this.length = Math.max(this.length, r + 1),
                this
            }
            ,
            n.prototype.isubn = function(t) {
                if (e("number" == typeof t),
                e(t < 67108864),
                t < 0)
                    return this.iaddn(-t);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(t),
                    this.negative = 1,
                    this;
                if (this.words[0] -= t,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var r = 0; r < this.length && this.words[r] < 0; r++)
                        this.words[r] += 67108864,
                        this.words[r + 1] -= 1;
                return this._strip()
            }
            ,
            n.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }
            ,
            n.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }
            ,
            n.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            n.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            n.prototype._ishlnsubmul = function(t, r, i) {
                var n, o = t.length + i;
                this._expand(o);
                var s, u = 0;
                for (n = 0; n < t.length; n++) {
                    s = (0 | this.words[n + i]) + u;
                    var h = (0 | t.words[n]) * r;
                    s -= 67108863 & h,
                    u = (s >> 26) - (h / 67108864 | 0),
                    this.words[n + i] = 67108863 & s
                }
                for (; n < this.length - i; n++)
                    u = (s = (0 | this.words[n + i]) + u) >> 26,
                    this.words[n + i] = 67108863 & s;
                if (0 === u)
                    return this._strip();
                for (e(-1 === u),
                u = 0,
                n = 0; n < this.length; n++)
                    u = (s = -(0 | this.words[n]) + u) >> 26,
                    this.words[n] = 67108863 & s;
                return this.negative = 1,
                this._strip()
            }
            ,
            n.prototype._wordDiv = function(t, r) {
                var e = this.length - t.length
                  , i = this.clone()
                  , o = t
                  , s = 0 | o.words[o.length - 1];
                0 != (e = 26 - this._countBits(s)) && (o = o.ushln(e),
                i.iushln(e),
                s = 0 | o.words[o.length - 1]);
                var u, h = i.length - o.length;
                if ("mod" !== r) {
                    (u = new n(null)).length = h + 1,
                    u.words = Array(u.length);
                    for (var a = 0; a < u.length; a++)
                        u.words[a] = 0
                }
                var l = i.clone()._ishlnsubmul(o, 1, h);
                0 === l.negative && (i = l,
                u && (u.words[h] = 1));
                for (var f = h - 1; f >= 0; f--) {
                    var c = (0 | i.words[o.length + f]) * 67108864 + (0 | i.words[o.length + f - 1]);
                    for (c = Math.min(c / s | 0, 67108863),
                    i._ishlnsubmul(o, c, f); 0 !== i.negative; )
                        c--,
                        i.negative = 0,
                        i._ishlnsubmul(o, 1, f),
                        i.isZero() || (i.negative ^= 1);
                    u && (u.words[f] = c)
                }
                return u && u._strip(),
                i._strip(),
                "div" !== r && 0 !== e && i.iushrn(e),
                {
                    div: u || null,
                    mod: i
                }
            }
            ,
            n.prototype.divmod = function(t, r, i) {
                var o, s, u;
                return (e(!t.isZero()),
                this.isZero()) ? {
                    div: new n(0),
                    mod: new n(0)
                } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, r),
                "mod" !== r && (o = u.div.neg()),
                "div" !== r && (s = u.mod.neg(),
                i && 0 !== s.negative && s.iadd(t)),
                {
                    div: o,
                    mod: s
                }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), r),
                "mod" !== r && (o = u.div.neg()),
                {
                    div: o,
                    mod: u.mod
                }) : this.negative & t.negative ? (u = this.neg().divmod(t.neg(), r),
                "div" !== r && (s = u.mod.neg(),
                i && 0 !== s.negative && s.isub(t)),
                {
                    div: u.div,
                    mod: s
                }) : t.length > this.length || 0 > this.cmp(t) ? {
                    div: new n(0),
                    mod: this
                } : 1 === t.length ? "div" === r ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === r ? {
                    div: null,
                    mod: new n(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new n(this.modrn(t.words[0]))
                } : this._wordDiv(t, r)
            }
            ,
            n.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }
            ,
            n.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }
            ,
            n.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }
            ,
            n.prototype.divRound = function(t) {
                var r = this.divmod(t);
                if (r.mod.isZero())
                    return r.div;
                var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod
                  , i = t.ushrn(1)
                  , n = t.andln(1)
                  , o = e.cmp(i);
                return o < 0 || 1 === n && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
            }
            ,
            n.prototype.modrn = function(t) {
                var r = t < 0;
                r && (t = -t),
                e(t <= 67108863);
                for (var i = 67108864 % t, n = 0, o = this.length - 1; o >= 0; o--)
                    n = (i * n + (0 | this.words[o])) % t;
                return r ? -n : n
            }
            ,
            n.prototype.modn = function(t) {
                return this.modrn(t)
            }
            ,
            n.prototype.idivn = function(t) {
                var r = t < 0;
                r && (t = -t),
                e(t <= 67108863);
                for (var i = 0, n = this.length - 1; n >= 0; n--) {
                    var o = (0 | this.words[n]) + 67108864 * i;
                    this.words[n] = o / t | 0,
                    i = o % t
                }
                return this._strip(),
                r ? this.ineg() : this
            }
            ,
            n.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }
            ,
            n.prototype.egcd = function(t) {
                e(0 === t.negative),
                e(!t.isZero());
                var r = this
                  , i = t.clone();
                r = 0 !== r.negative ? r.umod(t) : r.clone();
                for (var o = new n(1), s = new n(0), u = new n(0), h = new n(1), a = 0; r.isEven() && i.isEven(); )
                    r.iushrn(1),
                    i.iushrn(1),
                    ++a;
                for (var l = i.clone(), f = r.clone(); !r.isZero(); ) {
                    for (var c = 0, p = 1; !(r.words[0] & p) && c < 26; ++c,
                    p <<= 1)
                        ;
                    if (c > 0)
                        for (r.iushrn(c); c-- > 0; )
                            (o.isOdd() || s.isOdd()) && (o.iadd(l),
                            s.isub(f)),
                            o.iushrn(1),
                            s.iushrn(1);
                    for (var y = 0, m = 1; !(i.words[0] & m) && y < 26; ++y,
                    m <<= 1)
                        ;
                    if (y > 0)
                        for (i.iushrn(y); y-- > 0; )
                            (u.isOdd() || h.isOdd()) && (u.iadd(l),
                            h.isub(f)),
                            u.iushrn(1),
                            h.iushrn(1);
                    r.cmp(i) >= 0 ? (r.isub(i),
                    o.isub(u),
                    s.isub(h)) : (i.isub(r),
                    u.isub(o),
                    h.isub(s))
                }
                return {
                    a: u,
                    b: h,
                    gcd: i.iushln(a)
                }
            }
            ,
            n.prototype._invmp = function(t) {
                e(0 === t.negative),
                e(!t.isZero());
                var r, i = this, o = t.clone();
                i = 0 !== i.negative ? i.umod(t) : i.clone();
                for (var s = new n(1), u = new n(0), h = o.clone(); i.cmpn(1) > 0 && o.cmpn(1) > 0; ) {
                    for (var a = 0, l = 1; !(i.words[0] & l) && a < 26; ++a,
                    l <<= 1)
                        ;
                    if (a > 0)
                        for (i.iushrn(a); a-- > 0; )
                            s.isOdd() && s.iadd(h),
                            s.iushrn(1);
                    for (var f = 0, c = 1; !(o.words[0] & c) && f < 26; ++f,
                    c <<= 1)
                        ;
                    if (f > 0)
                        for (o.iushrn(f); f-- > 0; )
                            u.isOdd() && u.iadd(h),
                            u.iushrn(1);
                    i.cmp(o) >= 0 ? (i.isub(o),
                    s.isub(u)) : (o.isub(i),
                    u.isub(s))
                }
                return 0 > (r = 0 === i.cmpn(1) ? s : u).cmpn(0) && r.iadd(t),
                r
            }
            ,
            n.prototype.gcd = function(t) {
                if (this.isZero())
                    return t.abs();
                if (t.isZero())
                    return this.abs();
                var r = this.clone()
                  , e = t.clone();
                r.negative = 0,
                e.negative = 0;
                for (var i = 0; r.isEven() && e.isEven(); i++)
                    r.iushrn(1),
                    e.iushrn(1);
                for (; ; ) {
                    for (; r.isEven(); )
                        r.iushrn(1);
                    for (; e.isEven(); )
                        e.iushrn(1);
                    var n = r.cmp(e);
                    if (n < 0) {
                        var o = r;
                        r = e,
                        e = o
                    } else if (0 === n || 0 === e.cmpn(1))
                        break;
                    r.isub(e)
                }
                return e.iushln(i)
            }
            ,
            n.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }
            ,
            n.prototype.isEven = function() {
                return (1 & this.words[0]) == 0
            }
            ,
            n.prototype.isOdd = function() {
                return (1 & this.words[0]) == 1
            }
            ,
            n.prototype.andln = function(t) {
                return this.words[0] & t
            }
            ,
            n.prototype.bincn = function(t) {
                e("number" == typeof t);
                var r = t % 26
                  , i = (t - r) / 26
                  , n = 1 << r;
                if (this.length <= i)
                    return this._expand(i + 1),
                    this.words[i] |= n,
                    this;
                for (var o = n, s = i; 0 !== o && s < this.length; s++) {
                    var u = 0 | this.words[s];
                    u += o,
                    o = u >>> 26,
                    u &= 67108863,
                    this.words[s] = u
                }
                return 0 !== o && (this.words[s] = o,
                this.length++),
                this
            }
            ,
            n.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            n.prototype.cmpn = function(t) {
                var r, i = t < 0;
                if (0 !== this.negative && !i)
                    return -1;
                if (0 === this.negative && i)
                    return 1;
                if (this._strip(),
                this.length > 1)
                    r = 1;
                else {
                    i && (t = -t),
                    e(t <= 67108863, "Number is too big");
                    var n = 0 | this.words[0];
                    r = n === t ? 0 : n < t ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -r : r
            }
            ,
            n.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return -1;
                if (0 === this.negative && 0 !== t.negative)
                    return 1;
                var r = this.ucmp(t);
                return 0 !== this.negative ? 0 | -r : r
            }
            ,
            n.prototype.ucmp = function(t) {
                if (this.length > t.length)
                    return 1;
                if (this.length < t.length)
                    return -1;
                for (var r = 0, e = this.length - 1; e >= 0; e--) {
                    var i = 0 | this.words[e]
                      , n = 0 | t.words[e];
                    if (i !== n) {
                        i < n ? r = -1 : i > n && (r = 1);
                        break
                    }
                }
                return r
            }
            ,
            n.prototype.gtn = function(t) {
                return 1 === this.cmpn(t)
            }
            ,
            n.prototype.gt = function(t) {
                return 1 === this.cmp(t)
            }
            ,
            n.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }
            ,
            n.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }
            ,
            n.prototype.ltn = function(t) {
                return -1 === this.cmpn(t)
            }
            ,
            n.prototype.lt = function(t) {
                return -1 === this.cmp(t)
            }
            ,
            n.prototype.lten = function(t) {
                return 0 >= this.cmpn(t)
            }
            ,
            n.prototype.lte = function(t) {
                return 0 >= this.cmp(t)
            }
            ,
            n.prototype.eqn = function(t) {
                return 0 === this.cmpn(t)
            }
            ,
            n.prototype.eq = function(t) {
                return 0 === this.cmp(t)
            }
            ,
            n.red = function(t) {
                return new S(t)
            }
            ,
            n.prototype.toRed = function(t) {
                return e(!this.red, "Already a number in reduction context"),
                e(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
            }
            ,
            n.prototype.fromRed = function() {
                return e(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            n.prototype._forceRed = function(t) {
                return this.red = t,
                this
            }
            ,
            n.prototype.forceRed = function(t) {
                return e(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
            }
            ,
            n.prototype.redAdd = function(t) {
                return e(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
            }
            ,
            n.prototype.redIAdd = function(t) {
                return e(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
            }
            ,
            n.prototype.redSub = function(t) {
                return e(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
            }
            ,
            n.prototype.redISub = function(t) {
                return e(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
            }
            ,
            n.prototype.redShl = function(t) {
                return e(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
            }
            ,
            n.prototype.redMul = function(t) {
                return e(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
            }
            ,
            n.prototype.redIMul = function(t) {
                return e(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
            }
            ,
            n.prototype.redSqr = function() {
                return e(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            n.prototype.redISqr = function() {
                return e(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            n.prototype.redSqrt = function() {
                return e(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            n.prototype.redInvm = function() {
                return e(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            n.prototype.redNeg = function() {
                return e(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            n.prototype.redPow = function(t) {
                return e(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
            }
            ;
            var v = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function w(t, r) {
                this.name = t,
                this.p = new n(r,16),
                this.n = this.p.bitLength(),
                this.k = new n(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function b() {
                w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function M() {
                w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function _() {
                w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function A() {
                w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function S(t) {
                if ("string" == typeof t) {
                    var r = n._prime(t);
                    this.m = r.p,
                    this.prime = r
                } else
                    e(t.gtn(1), "modulus must be greater than 1"),
                    this.m = t,
                    this.prime = null
            }
            function E(t) {
                S.call(this, t),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new n(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            w.prototype._tmp = function() {
                var t = new n(null);
                return t.words = Array(Math.ceil(this.n / 13)),
                t
            }
            ,
            w.prototype.ireduce = function(t) {
                var r, e = t;
                do
                    this.split(e, this.tmp),
                    r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
                while (r > this.n);
                var i = r < this.n ? -1 : e.ucmp(this.p);
                return 0 === i ? (e.words[0] = 0,
                e.length = 1) : i > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(),
                e
            }
            ,
            w.prototype.split = function(t, r) {
                t.iushrn(this.n, 0, r)
            }
            ,
            w.prototype.imulK = function(t) {
                return t.imul(this.k)
            }
            ,
            i(b, w),
            b.prototype.split = function(t, r) {
                for (var e = Math.min(t.length, 9), i = 0; i < e; i++)
                    r.words[i] = t.words[i];
                if (r.length = e,
                t.length <= 9) {
                    t.words[0] = 0,
                    t.length = 1;
                    return
                }
                var n = t.words[9];
                for (r.words[r.length++] = 4194303 & n,
                i = 10; i < t.length; i++) {
                    var o = 0 | t.words[i];
                    t.words[i - 10] = (4194303 & o) << 4 | n >>> 22,
                    n = o
                }
                n >>>= 22,
                t.words[i - 10] = n,
                0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
            }
            ,
            b.prototype.imulK = function(t) {
                t.words[t.length] = 0,
                t.words[t.length + 1] = 0,
                t.length += 2;
                for (var r = 0, e = 0; e < t.length; e++) {
                    var i = 0 | t.words[e];
                    r += 977 * i,
                    t.words[e] = 67108863 & r,
                    r = 64 * i + (r / 67108864 | 0)
                }
                return 0 === t.words[t.length - 1] && (t.length--,
                0 === t.words[t.length - 1] && t.length--),
                t
            }
            ,
            i(M, w),
            i(_, w),
            i(A, w),
            A.prototype.imulK = function(t) {
                for (var r = 0, e = 0; e < t.length; e++) {
                    var i = (0 | t.words[e]) * 19 + r
                      , n = 67108863 & i;
                    i >>>= 26,
                    t.words[e] = n,
                    r = i
                }
                return 0 !== r && (t.words[t.length++] = r),
                t
            }
            ,
            n._prime = function(t) {
                var r;
                if (v[t])
                    return v[t];
                if ("k256" === t)
                    r = new b;
                else if ("p224" === t)
                    r = new M;
                else if ("p192" === t)
                    r = new _;
                else if ("p25519" === t)
                    r = new A;
                else
                    throw Error("Unknown prime " + t);
                return v[t] = r,
                r
            }
            ,
            S.prototype._verify1 = function(t) {
                e(0 === t.negative, "red works only with positives"),
                e(t.red, "red works only with red numbers")
            }
            ,
            S.prototype._verify2 = function(t, r) {
                e((t.negative | r.negative) == 0, "red works only with positives"),
                e(t.red && t.red === r.red, "red works only with red numbers")
            }
            ,
            S.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (a(t, t.umod(this.m)._forceRed(this)),
                t)
            }
            ,
            S.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }
            ,
            S.prototype.add = function(t, r) {
                this._verify2(t, r);
                var e = t.add(r);
                return e.cmp(this.m) >= 0 && e.isub(this.m),
                e._forceRed(this)
            }
            ,
            S.prototype.iadd = function(t, r) {
                this._verify2(t, r);
                var e = t.iadd(r);
                return e.cmp(this.m) >= 0 && e.isub(this.m),
                e
            }
            ,
            S.prototype.sub = function(t, r) {
                this._verify2(t, r);
                var e = t.sub(r);
                return 0 > e.cmpn(0) && e.iadd(this.m),
                e._forceRed(this)
            }
            ,
            S.prototype.isub = function(t, r) {
                this._verify2(t, r);
                var e = t.isub(r);
                return 0 > e.cmpn(0) && e.iadd(this.m),
                e
            }
            ,
            S.prototype.shl = function(t, r) {
                return this._verify1(t),
                this.imod(t.ushln(r))
            }
            ,
            S.prototype.imul = function(t, r) {
                return this._verify2(t, r),
                this.imod(t.imul(r))
            }
            ,
            S.prototype.mul = function(t, r) {
                return this._verify2(t, r),
                this.imod(t.mul(r))
            }
            ,
            S.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }
            ,
            S.prototype.sqr = function(t) {
                return this.mul(t, t)
            }
            ,
            S.prototype.sqrt = function(t) {
                if (t.isZero())
                    return t.clone();
                var r = this.m.andln(3);
                if (e(r % 2 == 1),
                3 === r) {
                    var i = this.m.add(new n(1)).iushrn(2);
                    return this.pow(t, i)
                }
                for (var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1); )
                    s++,
                    o.iushrn(1);
                e(!o.isZero());
                var u = new n(1).toRed(this)
                  , h = u.redNeg()
                  , a = this.m.subn(1).iushrn(1)
                  , l = this.m.bitLength();
                for (l = new n(2 * l * l).toRed(this); 0 !== this.pow(l, a).cmp(h); )
                    l.redIAdd(h);
                for (var f = this.pow(l, o), c = this.pow(t, o.addn(1).iushrn(1)), p = this.pow(t, o), y = s; 0 !== p.cmp(u); ) {
                    for (var m = p, d = 0; 0 !== m.cmp(u); d++)
                        m = m.redSqr();
                    e(d < y);
                    var g = this.pow(f, new n(1).iushln(y - d - 1));
                    c = c.redMul(g),
                    f = g.redSqr(),
                    p = p.redMul(f),
                    y = d
                }
                return c
            }
            ,
            S.prototype.invm = function(t) {
                var r = t._invmp(this.m);
                return 0 !== r.negative ? (r.negative = 0,
                this.imod(r).redNeg()) : this.imod(r)
            }
            ,
            S.prototype.pow = function(t, r) {
                if (r.isZero())
                    return new n(1).toRed(this);
                if (0 === r.cmpn(1))
                    return t.clone();
                var e = Array(16);
                e[0] = new n(1).toRed(this),
                e[1] = t;
                for (var i = 2; i < e.length; i++)
                    e[i] = this.mul(e[i - 1], t);
                var o = e[0]
                  , s = 0
                  , u = 0
                  , h = r.bitLength() % 26;
                for (0 === h && (h = 26),
                i = r.length - 1; i >= 0; i--) {
                    for (var a = r.words[i], l = h - 1; l >= 0; l--) {
                        var f = a >> l & 1;
                        if (o !== e[0] && (o = this.sqr(o)),
                        0 === f && 0 === s) {
                            u = 0;
                            continue
                        }
                        s <<= 1,
                        s |= f,
                        4 != ++u && (0 !== i || 0 !== l) || (o = this.mul(o, e[s]),
                        u = 0,
                        s = 0)
                    }
                    h = 26
                }
                return o
            }
            ,
            S.prototype.convertTo = function(t) {
                var r = t.umod(this.m);
                return r === t ? r.clone() : r
            }
            ,
            S.prototype.convertFrom = function(t) {
                var r = t.clone();
                return r.red = null,
                r
            }
            ,
            n.mont = function(t) {
                return new E(t)
            }
            ,
            i(E, S),
            E.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }
            ,
            E.prototype.convertFrom = function(t) {
                var r = this.imod(t.mul(this.rinv));
                return r.red = null,
                r
            }
            ,
            E.prototype.imul = function(t, r) {
                if (t.isZero() || r.isZero())
                    return t.words[0] = 0,
                    t.length = 1,
                    t;
                var e = t.imul(r)
                  , i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , n = e.isub(i).iushrn(this.shift)
                  , o = n;
                return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            E.prototype.mul = function(t, r) {
                if (t.isZero() || r.isZero())
                    return new n(0)._forceRed(this);
                var e = t.mul(r)
                  , i = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , o = e.isub(i).iushrn(this.shift)
                  , s = o;
                return o.cmp(this.m) >= 0 ? s = o.isub(this.m) : 0 > o.cmpn(0) && (s = o.iadd(this.m)),
                s._forceRed(this)
            }
            ,
            E.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(n, i.aI);
        var s = n.exports
          , u = {
            exports: {}
        }
          , h = {
            exports: {}
        };
        "function" == typeof Object.create ? h.exports = function(t, r) {
            r && (t.super_ = r,
            t.prototype = Object.create(r.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : h.exports = function(t, r) {
            if (r) {
                t.super_ = r;
                var e = function() {};
                e.prototype = r.prototype,
                t.prototype = new e,
                t.prototype.constructor = t
            }
        }
        ;
        var a = h.exports
          , l = {
            exports: {}
        };
        !function(t, r) {
            var e = o.Buffer;
            function i(t, r) {
                for (var e in t)
                    r[e] = t[e]
            }
            function n(t, r, i) {
                return e(t, r, i)
            }
            e.from && e.alloc && e.allocUnsafe && e.allocUnsafeSlow ? t.exports = o : (i(o, r),
            r.Buffer = n),
            i(e, n),
            n.from = function(t, r, i) {
                if ("number" == typeof t)
                    throw TypeError("Argument must not be a number");
                return e(t, r, i)
            }
            ,
            n.alloc = function(t, r, i) {
                if ("number" != typeof t)
                    throw TypeError("Argument must be a number");
                var n = e(t);
                return void 0 !== r ? "string" == typeof i ? n.fill(r, i) : n.fill(r) : n.fill(0),
                n
            }
            ,
            n.allocUnsafe = function(t) {
                if ("number" != typeof t)
                    throw TypeError("Argument must be a number");
                return e(t)
            }
            ,
            n.allocUnsafeSlow = function(t) {
                if ("number" != typeof t)
                    throw TypeError("Argument must be a number");
                return o.SlowBuffer(t)
            }
        }(l, l.exports);
        var f = l.exports
          , c = f.Buffer;
        function p(t, r) {
            this._block = c.alloc(t),
            this._finalSize = r,
            this._blockSize = t,
            this._len = 0
        }
        p.prototype.update = function(t, r) {
            "string" == typeof t && (r = r || "utf8",
            t = c.from(t, r));
            for (var e = this._block, i = this._blockSize, n = t.length, o = this._len, s = 0; s < n; ) {
                for (var u = o % i, h = Math.min(n - s, i - u), a = 0; a < h; a++)
                    e[u + a] = t[s + a];
                o += h,
                s += h,
                o % i == 0 && this._update(e)
            }
            return this._len += n,
            this
        }
        ,
        p.prototype.digest = function(t) {
            var r = this._len % this._blockSize;
            this._block[r] = 128,
            this._block.fill(0, r + 1),
            r >= this._finalSize && (this._update(this._block),
            this._block.fill(0));
            var e = 8 * this._len;
            if (e <= 4294967295)
                this._block.writeUInt32BE(e, this._blockSize - 4);
            else {
                var i = (4294967295 & e) >>> 0;
                this._block.writeUInt32BE((e - i) / 4294967296, this._blockSize - 8),
                this._block.writeUInt32BE(i, this._blockSize - 4)
            }
            this._update(this._block);
            var n = this._hash();
            return t ? n.toString(t) : n
        }
        ,
        p.prototype._update = function() {
            throw Error("_update must be implemented by subclass")
        }
        ;
        var y = f.Buffer
          , m = [1518500249, 1859775393, -1894007588, -899497514]
          , d = Array(80);
        function g() {
            this.init(),
            this._w = d,
            p.call(this, 64, 56)
        }
        a(g, p),
        g.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ,
        g.prototype._update = function(t) {
            for (var r = this._w, e = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, s = 0 | this._e, u = 0; u < 16; ++u)
                r[u] = t.readInt32BE(4 * u);
            for (; u < 80; ++u)
                r[u] = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16];
            for (var h = 0; h < 80; ++h) {
                var a, l, f, c, p, y = ~~(h / 20), d = ((a = e) << 5 | a >>> 27) + (l = i,
                f = n,
                c = o,
                0 === y ? l & f | ~l & c : 2 === y ? l & f | l & c | f & c : l ^ f ^ c) + s + r[h] + m[y] | 0;
                s = o,
                o = n,
                n = (p = i) << 30 | p >>> 2,
                i = e,
                e = d
            }
            this._a = e + this._a | 0,
            this._b = i + this._b | 0,
            this._c = n + this._c | 0,
            this._d = o + this._d | 0,
            this._e = s + this._e | 0
        }
        ,
        g.prototype._hash = function() {
            var t = y.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
        }
        ;
        var v = f.Buffer
          , w = [1518500249, 1859775393, -1894007588, -899497514]
          , b = Array(80);
        function M() {
            this.init(),
            this._w = b,
            p.call(this, 64, 56)
        }
        a(M, p),
        M.prototype.init = function() {
            return this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878,
            this._e = 3285377520,
            this
        }
        ,
        M.prototype._update = function(t) {
            for (var r = this._w, e = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, s = 0 | this._e, u = 0; u < 16; ++u)
                r[u] = t.readInt32BE(4 * u);
            for (; u < 80; ++u)
                r[u] = (a = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16]) << 1 | a >>> 31;
            for (var h = 0; h < 80; ++h) {
                var a, l, f, c, p, y, m = ~~(h / 20), d = ((l = e) << 5 | l >>> 27) + (f = i,
                c = n,
                p = o,
                0 === m ? f & c | ~f & p : 2 === m ? f & c | f & p | c & p : f ^ c ^ p) + s + r[h] + w[m] | 0;
                s = o,
                o = n,
                n = (y = i) << 30 | y >>> 2,
                i = e,
                e = d
            }
            this._a = e + this._a | 0,
            this._b = i + this._b | 0,
            this._c = n + this._c | 0,
            this._d = o + this._d | 0,
            this._e = s + this._e | 0
        }
        ,
        M.prototype._hash = function() {
            var t = v.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
        }
        ;
        var _ = f.Buffer
          , A = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
          , S = Array(64);
        function E() {
            this.init(),
            this._w = S,
            p.call(this, 64, 56)
        }
        a(E, p),
        E.prototype.init = function() {
            return this._a = 1779033703,
            this._b = 3144134277,
            this._c = 1013904242,
            this._d = 2773480762,
            this._e = 1359893119,
            this._f = 2600822924,
            this._g = 528734635,
            this._h = 1541459225,
            this
        }
        ,
        E.prototype._update = function(t) {
            for (var r = this._w, e = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, s = 0 | this._e, u = 0 | this._f, h = 0 | this._g, a = 0 | this._h, l = 0; l < 16; ++l)
                r[l] = t.readInt32BE(4 * l);
            for (; l < 64; ++l)
                r[l] = (((c = r[l - 2]) >>> 17 | c << 15) ^ (c >>> 19 | c << 13) ^ c >>> 10) + r[l - 7] + (((p = r[l - 15]) >>> 7 | p << 25) ^ (p >>> 18 | p << 14) ^ p >>> 3) + r[l - 16] | 0;
            for (var f = 0; f < 64; ++f) {
                var c, p, y, m, d, g, v, w, b, M = a + (((y = s) >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7)) + (m = s,
                d = u,
                (g = h) ^ m & (d ^ g)) + A[f] + r[f] | 0, _ = (((v = e) >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10)) + ((w = e) & (b = i) | n & (w | b)) | 0;
                a = h,
                h = u,
                u = s,
                s = o + M | 0,
                o = n,
                n = i,
                i = e,
                e = M + _ | 0
            }
            this._a = e + this._a | 0,
            this._b = i + this._b | 0,
            this._c = n + this._c | 0,
            this._d = o + this._d | 0,
            this._e = s + this._e | 0,
            this._f = u + this._f | 0,
            this._g = h + this._g | 0,
            this._h = a + this._h | 0
        }
        ,
        E.prototype._hash = function() {
            var t = _.allocUnsafe(32);
            return t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
        }
        ;
        var O = f.Buffer
          , j = Array(64);
        function I() {
            this.init(),
            this._w = j,
            p.call(this, 64, 56)
        }
        a(I, E),
        I.prototype.init = function() {
            return this._a = 3238371032,
            this._b = 914150663,
            this._c = 812702999,
            this._d = 4144912697,
            this._e = 4290775857,
            this._f = 1750603025,
            this._g = 1694076839,
            this._h = 3204075428,
            this
        }
        ,
        I.prototype._hash = function() {
            var t = O.allocUnsafe(28);
            return t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
        }
        ;
        var B = f.Buffer
          , x = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , k = Array(160);
        function P() {
            this.init(),
            this._w = k,
            p.call(this, 128, 112)
        }
        function N(t, r) {
            return (t >>> 28 | r << 4) ^ (r >>> 2 | t << 30) ^ (r >>> 7 | t << 25)
        }
        function U(t, r) {
            return (t >>> 14 | r << 18) ^ (t >>> 18 | r << 14) ^ (r >>> 9 | t << 23)
        }
        function F(t, r) {
            return t >>> 0 < r >>> 0 ? 1 : 0
        }
        a(P, p),
        P.prototype.init = function() {
            return this._ah = 1779033703,
            this._bh = 3144134277,
            this._ch = 1013904242,
            this._dh = 2773480762,
            this._eh = 1359893119,
            this._fh = 2600822924,
            this._gh = 528734635,
            this._hh = 1541459225,
            this._al = 4089235720,
            this._bl = 2227873595,
            this._cl = 4271175723,
            this._dl = 1595750129,
            this._el = 2917565137,
            this._fl = 725511199,
            this._gl = 4215389547,
            this._hl = 327033209,
            this
        }
        ,
        P.prototype._update = function(t) {
            for (var r = this._w, e = 0 | this._ah, i = 0 | this._bh, n = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, u = 0 | this._fh, h = 0 | this._gh, a = 0 | this._hh, l = 0 | this._al, f = 0 | this._bl, c = 0 | this._cl, p = 0 | this._dl, y = 0 | this._el, m = 0 | this._fl, d = 0 | this._gl, g = 0 | this._hl, v = 0; v < 32; v += 2)
                r[v] = t.readInt32BE(4 * v),
                r[v + 1] = t.readInt32BE(4 * v + 4);
            for (; v < 160; v += 2) {
                var w, b, M, _, A, S, E, O, j = r[v - 30], I = r[v - 30 + 1], B = ((w = j) >>> 1 | (b = I) << 31) ^ (w >>> 8 | b << 24) ^ w >>> 7, k = ((M = I) >>> 1 | (_ = j) << 31) ^ (M >>> 8 | _ << 24) ^ (M >>> 7 | _ << 25);
                j = r[v - 4],
                I = r[v - 4 + 1];
                var P = ((A = j) >>> 19 | (S = I) << 13) ^ (S >>> 29 | A << 3) ^ A >>> 6
                  , R = ((E = I) >>> 19 | (O = j) << 13) ^ (O >>> 29 | E << 3) ^ (E >>> 6 | O << 26)
                  , L = r[v - 14]
                  , T = r[v - 14 + 1]
                  , C = r[v - 32]
                  , D = r[v - 32 + 1]
                  , z = k + T | 0
                  , q = B + L + F(z, k) | 0;
                q = (q = q + P + F(z = z + R | 0, R) | 0) + C + F(z = z + D | 0, D) | 0,
                r[v] = q,
                r[v + 1] = z
            }
            for (var W = 0; W < 160; W += 2) {
                q = r[W],
                z = r[W + 1];
                var G, Z, $, J, V, K, H, Q, X, Y, tt = (G = e) & (Z = i) | n & (G | Z), tr = ($ = l) & (J = f) | c & ($ | J), te = N(e, l), ti = N(l, e), tn = U(s, y), to = U(y, s), ts = x[W], tu = x[W + 1], th = (V = s,
                K = u,
                (H = h) ^ V & (K ^ H)), ta = (Q = y,
                X = m,
                (Y = d) ^ Q & (X ^ Y)), tl = g + to | 0, tf = a + tn + F(tl, g) | 0;
                tf = (tf = (tf = tf + th + F(tl = tl + ta | 0, ta) | 0) + ts + F(tl = tl + tu | 0, tu) | 0) + q + F(tl = tl + z | 0, z) | 0;
                var tc = ti + tr | 0
                  , tp = te + tt + F(tc, ti) | 0;
                a = h,
                g = d,
                h = u,
                d = m,
                u = s,
                m = y,
                s = o + tf + F(y = p + tl | 0, p) | 0,
                o = n,
                p = c,
                n = i,
                c = f,
                i = e,
                f = l,
                e = tf + tp + F(l = tl + tc | 0, tl) | 0
            }
            this._al = this._al + l | 0,
            this._bl = this._bl + f | 0,
            this._cl = this._cl + c | 0,
            this._dl = this._dl + p | 0,
            this._el = this._el + y | 0,
            this._fl = this._fl + m | 0,
            this._gl = this._gl + d | 0,
            this._hl = this._hl + g | 0,
            this._ah = this._ah + e + F(this._al, l) | 0,
            this._bh = this._bh + i + F(this._bl, f) | 0,
            this._ch = this._ch + n + F(this._cl, c) | 0,
            this._dh = this._dh + o + F(this._dl, p) | 0,
            this._eh = this._eh + s + F(this._el, y) | 0,
            this._fh = this._fh + u + F(this._fl, m) | 0,
            this._gh = this._gh + h + F(this._gl, d) | 0,
            this._hh = this._hh + a + F(this._hl, g) | 0
        }
        ,
        P.prototype._hash = function() {
            var t = B.allocUnsafe(64);
            function r(r, e, i) {
                t.writeInt32BE(r, i),
                t.writeInt32BE(e, i + 4)
            }
            return r(this._ah, this._al, 0),
            r(this._bh, this._bl, 8),
            r(this._ch, this._cl, 16),
            r(this._dh, this._dl, 24),
            r(this._eh, this._el, 32),
            r(this._fh, this._fl, 40),
            r(this._gh, this._gl, 48),
            r(this._hh, this._hl, 56),
            t
        }
        ;
        var R = f.Buffer
          , L = Array(160);
        function T() {
            this.init(),
            this._w = L,
            p.call(this, 128, 112)
        }
        a(T, P),
        T.prototype.init = function() {
            return this._ah = 3418070365,
            this._bh = 1654270250,
            this._ch = 2438529370,
            this._dh = 355462360,
            this._eh = 1731405415,
            this._fh = 2394180231,
            this._gh = 3675008525,
            this._hh = 1203062813,
            this._al = 3238371032,
            this._bl = 914150663,
            this._cl = 812702999,
            this._dl = 4144912697,
            this._el = 4290775857,
            this._fl = 1750603025,
            this._gl = 1694076839,
            this._hl = 3204075428,
            this
        }
        ,
        T.prototype._hash = function() {
            var t = R.allocUnsafe(48);
            function r(r, e, i) {
                t.writeInt32BE(r, i),
                t.writeInt32BE(e, i + 4)
            }
            return r(this._ah, this._al, 0),
            r(this._bh, this._bl, 8),
            r(this._ch, this._cl, 16),
            r(this._dh, this._dl, 24),
            r(this._eh, this._el, 32),
            r(this._fh, this._fl, 40),
            t
        }
        ;
        var C = u.exports = function(t) {
            var r = C[t = t.toLowerCase()];
            if (!r)
                throw Error(t + " is not supported (we accept pull requests)");
            return new r
        }
        ;
        C.sha = g,
        C.sha1 = M,
        C.sha224 = I,
        C.sha256 = E,
        C.sha384 = T,
        C.sha512 = P;
        var D, z = u.exports, q = {
            exports: {}
        }, W = "object" == typeof Reflect ? Reflect : null, G = W && "function" == typeof W.apply ? W.apply : function(t, r, e) {
            return Function.prototype.apply.call(t, r, e)
        }
        ;
        D = W && "function" == typeof W.ownKeys ? W.ownKeys : Object.getOwnPropertySymbols ? function(t) {
            return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
        }
        : function(t) {
            return Object.getOwnPropertyNames(t)
        }
        ;
        var Z = Number.isNaN || function(t) {
            return t != t
        }
        ;
        function $() {
            $.init.call(this)
        }
        q.exports = $,
        q.exports.once = function(t, r) {
            return new Promise(function(e, i) {
                function n(e) {
                    t.removeListener(r, o),
                    i(e)
                }
                function o() {
                    "function" == typeof t.removeListener && t.removeListener("error", n),
                    e([].slice.call(arguments))
                }
                te(t, r, o, {
                    once: !0
                }),
                "error" !== r && "function" == typeof t.on && te(t, "error", n, {
                    once: !0
                })
            }
            )
        }
        ,
        $.EventEmitter = $,
        $.prototype._events = void 0,
        $.prototype._eventsCount = 0,
        $.prototype._maxListeners = void 0;
        var J = 10;
        function V(t) {
            if ("function" != typeof t)
                throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
        }
        function K(t) {
            return void 0 === t._maxListeners ? $.defaultMaxListeners : t._maxListeners
        }
        function H(t, r, e, i) {
            var n, o, s;
            if (V(e),
            void 0 === (o = t._events) ? (o = t._events = Object.create(null),
            t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", r, e.listener ? e.listener : e),
            o = t._events),
            s = o[r]),
            void 0 === s)
                s = o[r] = e,
                ++t._eventsCount;
            else if ("function" == typeof s ? s = o[r] = i ? [e, s] : [s, e] : i ? s.unshift(e) : s.push(e),
            (n = K(t)) > 0 && s.length > n && !s.warned) {
                s.warned = !0;
                var u = Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning",
                u.emitter = t,
                u.type = r,
                u.count = s.length,
                console && console.warn && console.warn(u)
            }
            return t
        }
        function Q() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 == arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function X(t, r, e) {
            var i = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: r,
                listener: e
            }
              , n = Q.bind(i);
            return n.listener = e,
            i.wrapFn = n,
            n
        }
        function Y(t, r, e) {
            var i = t._events;
            if (void 0 === i)
                return [];
            var n = i[r];
            return void 0 === n ? [] : "function" == typeof n ? e ? [n.listener || n] : [n] : e ? function(t) {
                for (var r = Array(t.length), e = 0; e < r.length; ++e)
                    r[e] = t[e].listener || t[e];
                return r
            }(n) : tr(n, n.length)
        }
        function tt(t) {
            var r = this._events;
            if (void 0 !== r) {
                var e = r[t];
                if ("function" == typeof e)
                    return 1;
                if (void 0 !== e)
                    return e.length
            }
            return 0
        }
        function tr(t, r) {
            for (var e = Array(r), i = 0; i < r; ++i)
                e[i] = t[i];
            return e
        }
        function te(t, r, e, i) {
            if ("function" == typeof t.on)
                i.once ? t.once(r, e) : t.on(r, e);
            else if ("function" == typeof t.addEventListener)
                t.addEventListener(r, function n(o) {
                    i.once && t.removeEventListener(r, n),
                    e(o)
                });
            else
                throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
        }
        Object.defineProperty($, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return J
            },
            set: function(t) {
                if ("number" != typeof t || t < 0 || Z(t))
                    throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                J = t
            }
        }),
        $.init = function() {
            (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        $.prototype.setMaxListeners = function(t) {
            if ("number" != typeof t || t < 0 || Z(t))
                throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
            return this._maxListeners = t,
            this
        }
        ,
        $.prototype.getMaxListeners = function() {
            return K(this)
        }
        ,
        $.prototype.emit = function(t) {
            for (var r = [], e = 1; e < arguments.length; e++)
                r.push(arguments[e]);
            var i = "error" === t
              , n = this._events;
            if (void 0 !== n)
                i = i && void 0 === n.error;
            else if (!i)
                return !1;
            if (i) {
                if (r.length > 0 && (o = r[0]),
                o instanceof Error)
                    throw o;
                var o, s = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw s.context = o,
                s
            }
            var u = n[t];
            if (void 0 === u)
                return !1;
            if ("function" == typeof u)
                G(u, this, r);
            else
                for (var h = u.length, a = tr(u, h), e = 0; e < h; ++e)
                    G(a[e], this, r);
            return !0
        }
        ,
        $.prototype.addListener = function(t, r) {
            return H(this, t, r, !1)
        }
        ,
        $.prototype.on = $.prototype.addListener,
        $.prototype.prependListener = function(t, r) {
            return H(this, t, r, !0)
        }
        ,
        $.prototype.once = function(t, r) {
            return V(r),
            this.on(t, X(this, t, r)),
            this
        }
        ,
        $.prototype.prependOnceListener = function(t, r) {
            return V(r),
            this.prependListener(t, X(this, t, r)),
            this
        }
        ,
        $.prototype.removeListener = function(t, r) {
            var e, i, n, o, s;
            if (V(r),
            void 0 === (i = this._events) || void 0 === (e = i[t]))
                return this;
            if (e === r || e.listener === r)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[t],
                i.removeListener && this.emit("removeListener", t, e.listener || r));
            else if ("function" != typeof e) {
                for (n = -1,
                o = e.length - 1; o >= 0; o--)
                    if (e[o] === r || e[o].listener === r) {
                        s = e[o].listener,
                        n = o;
                        break
                    }
                if (n < 0)
                    return this;
                0 === n ? e.shift() : function(t, r) {
                    for (; r + 1 < t.length; r++)
                        t[r] = t[r + 1];
                    t.pop()
                }(e, n),
                1 === e.length && (i[t] = e[0]),
                void 0 !== i.removeListener && this.emit("removeListener", t, s || r)
            }
            return this
        }
        ,
        $.prototype.off = $.prototype.removeListener,
        $.prototype.removeAllListeners = function(t) {
            var r, e, i;
            if (void 0 === (e = this._events))
                return this;
            if (void 0 === e.removeListener)
                return 0 == arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== e[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete e[t]),
                this;
            if (0 == arguments.length) {
                var n, o = Object.keys(e);
                for (i = 0; i < o.length; ++i)
                    "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (r = e[t]))
                this.removeListener(t, r);
            else if (void 0 !== r)
                for (i = r.length - 1; i >= 0; i--)
                    this.removeListener(t, r[i]);
            return this
        }
        ,
        $.prototype.listeners = function(t) {
            return Y(this, t, !0)
        }
        ,
        $.prototype.rawListeners = function(t) {
            return Y(this, t, !1)
        }
        ,
        $.listenerCount = function(t, r) {
            return "function" == typeof t.listenerCount ? t.listenerCount(r) : tt.call(t, r)
        }
        ,
        $.prototype.listenerCount = tt,
        $.prototype.eventNames = function() {
            return this._eventsCount > 0 ? D(this._events) : []
        }
        ;
        var ti = q.exports;
        let tn = (0,
        i.aJ)(ti);
        var to, ts, tu = {}, th = {};
        function ta() {
            return ts || (ts = 1,
            to = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
                    return !1;
                if ("symbol" == typeof Symbol.iterator)
                    return !0;
                var t = {}
                  , r = Symbol("test")
                  , e = Object(r);
                if ("string" == typeof r || "[object Symbol]" !== Object.prototype.toString.call(r) || "[object Symbol]" !== Object.prototype.toString.call(e))
                    return !1;
                for (r in t[r] = 42,
                t)
                    return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length)
                    return !1;
                var i = Object.getOwnPropertySymbols(t);
                if (1 !== i.length || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
                    return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    if (42 !== n.value || !0 !== n.enumerable)
                        return !1
                }
                return !0
            }
            ),
            to
        }
        function tl() {
            if (td)
                return tm;
            td = 1;
            var t = ta();
            return tm = function() {
                return t() && !!Symbol.toStringTag
            }
        }
        function tf() {
            return tO || (tO = 1,
            tE = SyntaxError),
            tE
        }
        function tc() {
            return tI || (tI = 1,
            tj = TypeError),
            tj
        }
        function tp() {
            if (tT)
                return tL;
            tT = 1;
            var t = function() {
                if (tR)
                    return tF;
                tR = 1;
                var t = Object.prototype.toString
                  , r = Math.max
                  , e = function(t, r) {
                    for (var e = [], i = 0; i < t.length; i += 1)
                        e[i] = t[i];
                    for (var n = 0; n < r.length; n += 1)
                        e[n + t.length] = r[n];
                    return e
                }
                  , i = function(t, r) {
                    for (var e = [], i = r || 0, n = 0; i < t.length; i += 1,
                    n += 1)
                        e[n] = t[i];
                    return e
                }
                  , n = function(t, r) {
                    for (var e = "", i = 0; i < t.length; i += 1)
                        e += t[i],
                        i + 1 < t.length && (e += r);
                    return e
                };
                return tF = function(o) {
                    var s = this;
                    if ("function" != typeof s || "[object Function]" !== t.apply(s))
                        throw TypeError("Function.prototype.bind called on incompatible " + s);
                    for (var u, h = i(arguments, 1), a = r(0, s.length - h.length), l = [], f = 0; f < a; f++)
                        l[f] = "$" + f;
                    if (u = Function("binder", "return function (" + n(l, ",") + "){ return binder.apply(this,arguments); }")(function() {
                        if (this instanceof u) {
                            var t = s.apply(this, e(h, arguments));
                            return Object(t) === t ? t : this
                        }
                        return s.apply(o, e(h, arguments))
                    }),
                    s.prototype) {
                        var c = function() {};
                        c.prototype = s.prototype,
                        u.prototype = new c,
                        c.prototype = null
                    }
                    return u
                }
            }();
            return tL = Function.prototype.bind || t
        }
        function ty() {
            if (tq)
                return tz;
            tq = 1;
            var t, r = (tv || (tv = 1,
            tg = Error),
            tg), e = (tb || (tb = 1,
            tw = EvalError),
            tw), i = (t_ || (t_ = 1,
            tM = RangeError),
            tM), n = (tS || (tS = 1,
            tA = ReferenceError),
            tA), o = tf(), s = tc(), u = (tx || (tx = 1,
            tB = URIError),
            tB), h = Function, a = function(t) {
                try {
                    return h('"use strict"; return (' + t + ").constructor;")()
                } catch (t) {}
            }, l = Object.getOwnPropertyDescriptor;
            if (l)
                try {
                    l({}, "")
                } catch (t) {
                    l = null
                }
            var f = function() {
                throw new s
            }
              , c = l ? function() {
                try {
                    return arguments.callee,
                    f
                } catch (t) {
                    try {
                        return l(arguments, "callee").get
                    } catch (t) {
                        return f
                    }
                }
            }() : f
              , p = (function() {
                if (tP)
                    return tk;
                tP = 1;
                var t = "u" > typeof Symbol && Symbol
                  , r = ta();
                return tk = function() {
                    return "function" == typeof t && "function" == typeof Symbol && "symbol" == typeof t("foo") && "symbol" == typeof Symbol("bar") && r()
                }
            }
            )()()
              , y = (function() {
                if (tU)
                    return tN;
                tU = 1;
                var t = {
                    __proto__: null,
                    foo: {}
                }
                  , r = Object;
                return tN = function() {
                    return ({
                        __proto__: t
                    }).foo === t.foo && !(t instanceof r)
                }
            }
            )()()
              , m = Object.getPrototypeOf || (y ? function(t) {
                return t.__proto__
            }
            : null)
              , d = {}
              , g = typeof Uint8Array > "u" || !m ? t : m(Uint8Array)
              , v = {
                __proto__: null,
                "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
                "%ArrayIteratorPrototype%": p && m ? m([][Symbol.iterator]()) : t,
                "%AsyncFromSyncIteratorPrototype%": t,
                "%AsyncFunction%": d,
                "%AsyncGenerator%": d,
                "%AsyncGeneratorFunction%": d,
                "%AsyncIteratorPrototype%": d,
                "%Atomics%": typeof Atomics > "u" ? t : Atomics,
                "%BigInt%": typeof BigInt > "u" ? t : BigInt,
                "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView > "u" ? t : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": r,
                "%eval%": eval,
                "%EvalError%": e,
                "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
                "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
                "%Function%": h,
                "%GeneratorFunction%": d,
                "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
                "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
                "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": p && m ? m(m([][Symbol.iterator]())) : t,
                "%JSON%": "object" == typeof JSON ? JSON : t,
                "%Map%": typeof Map > "u" ? t : Map,
                "%MapIteratorPrototype%": !(typeof Map > "u") && p && m ? m(new Map()[Symbol.iterator]()) : t,
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise > "u" ? t : Promise,
                "%Proxy%": typeof Proxy > "u" ? t : Proxy,
                "%RangeError%": i,
                "%ReferenceError%": n,
                "%Reflect%": typeof Reflect > "u" ? t : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set > "u" ? t : Set,
                "%SetIteratorPrototype%": !(typeof Set > "u") && p && m ? m(new Set()[Symbol.iterator]()) : t,
                "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": p && m ? m(""[Symbol.iterator]()) : t,
                "%Symbol%": p ? Symbol : t,
                "%SyntaxError%": o,
                "%ThrowTypeError%": c,
                "%TypedArray%": g,
                "%TypeError%": s,
                "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
                "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
                "%URIError%": u,
                "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
                "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
                "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
            };
            if (m)
                try {
                    null.error
                } catch (t) {
                    var w = m(m(t));
                    v["%Error.prototype%"] = w
                }
            var b = function t(r) {
                var e;
                if ("%AsyncFunction%" === r)
                    e = a("async function () {}");
                else if ("%GeneratorFunction%" === r)
                    e = a("function* () {}");
                else if ("%AsyncGeneratorFunction%" === r)
                    e = a("async function* () {}");
                else if ("%AsyncGenerator%" === r) {
                    var i = t("%AsyncGeneratorFunction%");
                    i && (e = i.prototype)
                } else if ("%AsyncIteratorPrototype%" === r) {
                    var n = t("%AsyncGenerator%");
                    n && m && (e = m(n.prototype))
                }
                return v[r] = e,
                e
            }
              , M = {
                __proto__: null,
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"]
            }
              , _ = tp()
              , A = function() {
                if (tD)
                    return tC;
                tD = 1;
                var t = Function.prototype.call
                  , r = Object.prototype.hasOwnProperty;
                return tC = tp().call(t, r)
            }()
              , S = _.call(Function.call, Array.prototype.concat)
              , E = _.call(Function.apply, Array.prototype.splice)
              , O = _.call(Function.call, String.prototype.replace)
              , j = _.call(Function.call, String.prototype.slice)
              , I = _.call(Function.call, RegExp.prototype.exec)
              , B = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
              , x = /\\(\\)?/g
              , k = function(t) {
                var r = j(t, 0, 1)
                  , e = j(t, -1);
                if ("%" === r && "%" !== e)
                    throw new o("invalid intrinsic syntax, expected closing `%`");
                if ("%" === e && "%" !== r)
                    throw new o("invalid intrinsic syntax, expected opening `%`");
                var i = [];
                return O(t, B, function(t, r, e, n) {
                    i[i.length] = e ? O(n, x, "$1") : r || t
                }),
                i
            }
              , P = function(t, r) {
                var e, i = t;
                if (A(M, i) && (i = "%" + (e = M[i])[0] + "%"),
                A(v, i)) {
                    var n = v[i];
                    if (n === d && (n = b(i)),
                    typeof n > "u" && !r)
                        throw new s("intrinsic " + t + " exists, but is not available. Please file an issue!");
                    return {
                        alias: e,
                        name: i,
                        value: n
                    }
                }
                throw new o("intrinsic " + t + " does not exist!")
            };
            return tz = function(t, r) {
                if ("string" != typeof t || 0 === t.length)
                    throw new s("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof r)
                    throw new s('"allowMissing" argument must be a boolean');
                if (null === I(/^%?[^%]*%?$/, t))
                    throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var e = k(t)
                  , i = e.length > 0 ? e[0] : ""
                  , n = P("%" + i + "%", r)
                  , u = n.name
                  , h = n.value
                  , a = !1
                  , f = n.alias;
                f && (i = f[0],
                E(e, S([0, 1], f)));
                for (var c = 1, p = !0; c < e.length; c += 1) {
                    var y = e[c]
                      , m = j(y, 0, 1)
                      , d = j(y, -1);
                    if (('"' === m || "'" === m || "`" === m || '"' === d || "'" === d || "`" === d) && m !== d)
                        throw new o("property names with quotes must have matching quotes");
                    if ("constructor" !== y && p || (a = !0),
                    i += "." + y,
                    A(v, u = "%" + i + "%"))
                        h = v[u];
                    else if (null != h) {
                        if (!(y in h)) {
                            if (!r)
                                throw new s("base intrinsic for " + t + " exists, but the property is not available.");
                            return
                        }
                        if (l && c + 1 >= e.length) {
                            var g = l(h, y);
                            h = (p = !!g) && "get"in g && !("originalValue"in g.get) ? g.get : h[y]
                        } else
                            p = A(h, y),
                            h = h[y];
                        p && !a && (v[u] = h)
                    }
                }
                return h
            }
        }
        var tm, td, tg, tv, tw, tb, tM, t_, tA, tS, tE, tO, tj, tI, tB, tx, tk, tP, tN, tU, tF, tR, tL, tT, tC, tD, tz, tq, tW, tG, tZ = {
            exports: {}
        };
        function t$() {
            if (tG)
                return tW;
            tG = 1;
            var t = ty()("%Object.defineProperty%", !0) || !1;
            if (t)
                try {
                    t({}, "a", {
                        value: 1
                    })
                } catch (r) {
                    t = !1
                }
            return tW = t
        }
        function tJ() {
            if (t0)
                return tY;
            t0 = 1;
            var t = ty()("%Object.getOwnPropertyDescriptor%", !0);
            if (t)
                try {
                    t([], "length")
                } catch (r) {
                    t = null
                }
            return tY = t
        }
        function tV() {
            var t, r, e, i, n, o, s, u, h, a;
            return t7 || (t7 = 1,
            t = tp(),
            r = ty(),
            e = function() {
                if (t4)
                    return t8;
                t4 = 1;
                var t = ty()
                  , r = function() {
                    if (t2)
                        return t1;
                    t2 = 1;
                    var t = t$()
                      , r = tf()
                      , e = tc()
                      , i = tJ();
                    return t1 = function(n, o, s) {
                        if (!n || "object" != typeof n && "function" != typeof n)
                            throw new e("`obj` must be an object or a function`");
                        if ("string" != typeof o && "symbol" != typeof o)
                            throw new e("`property` must be a string or a symbol`");
                        if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3])
                            throw new e("`nonEnumerable`, if provided, must be a boolean or null");
                        if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4])
                            throw new e("`nonWritable`, if provided, must be a boolean or null");
                        if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5])
                            throw new e("`nonConfigurable`, if provided, must be a boolean or null");
                        if (arguments.length > 6 && "boolean" != typeof arguments[6])
                            throw new e("`loose`, if provided, must be a boolean");
                        var u = arguments.length > 3 ? arguments[3] : null
                          , h = arguments.length > 4 ? arguments[4] : null
                          , a = arguments.length > 5 ? arguments[5] : null
                          , l = arguments.length > 6 && arguments[6]
                          , f = !!i && i(n, o);
                        if (t)
                            t(n, o, {
                                configurable: null === a && f ? f.configurable : !a,
                                enumerable: null === u && f ? f.enumerable : !u,
                                value: s,
                                writable: null === h && f ? f.writable : !h
                            });
                        else if (!l && (u || h || a))
                            throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                        else
                            n[o] = s
                    }
                }()
                  , e = (function() {
                    if (t6)
                        return t3;
                    t6 = 1;
                    var t = t$()
                      , r = function() {
                        return !!t
                    };
                    return r.hasArrayLengthDefineBug = function() {
                        if (!t)
                            return null;
                        try {
                            return 1 !== t([], "length", {
                                value: 1
                            }).length
                        } catch (t) {
                            return !0
                        }
                    }
                    ,
                    t3 = r
                }
                )()()
                  , i = tJ()
                  , n = tc()
                  , o = t("%Math.floor%");
                return t8 = function(t, s) {
                    if ("function" != typeof t)
                        throw new n("`fn` is not a function");
                    if ("number" != typeof s || s < 0 || s > 4294967295 || o(s) !== s)
                        throw new n("`length` must be a positive 32-bit integer");
                    var u = arguments.length > 2 && !!arguments[2]
                      , h = !0
                      , a = !0;
                    if ("length"in t && i) {
                        var l = i(t, "length");
                        l && !l.configurable && (h = !1),
                        l && !l.writable && (a = !1)
                    }
                    return (h || a || !u) && (e ? r(t, "length", s, !0, !0) : r(t, "length", s)),
                    t
                }
            }(),
            i = tc(),
            n = r("%Function.prototype.apply%"),
            o = r("%Function.prototype.call%"),
            s = r("%Reflect.apply%", !0) || t.call(o, n),
            u = t$(),
            h = r("%Math.max%"),
            tZ.exports = function(r) {
                if ("function" != typeof r)
                    throw new i("a function is required");
                var n = s(t, o, arguments);
                return e(n, 1 + h(0, r.length - (arguments.length - 1)), !0)
            }
            ,
            a = function() {
                return s(t, n, arguments)
            }
            ,
            u ? u(tZ.exports, "apply", {
                value: a
            }) : tZ.exports.apply = a),
            tZ.exports
        }
        function tK() {
            if (t5)
                return t9;
            t5 = 1;
            var t = ty()
              , r = tV()
              , e = r(t("String.prototype.indexOf"));
            return t9 = function(i, n) {
                var o = t(i, !!n);
                return "function" == typeof o && e(i, ".prototype.") > -1 ? r(o) : o
            }
        }
        function tH() {
            if (rp)
                return rc;
            rp = 1;
            var t = function() {
                if (ru)
                    return rs;
                ru = 1;
                var t = function() {
                    if (ro)
                        return rn;
                    ro = 1;
                    var t, r, e = Function.prototype.toString, i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
                    if ("function" == typeof i && "function" == typeof Object.defineProperty)
                        try {
                            t = Object.defineProperty({}, "length", {
                                get: function() {
                                    throw r
                                }
                            }),
                            r = {},
                            i(function() {
                                throw 42
                            }, null, t)
                        } catch (t) {
                            t !== r && (i = null)
                        }
                    else
                        i = null;
                    var n = /^\s*class\b/
                      , o = function(t) {
                        try {
                            var r = e.call(t);
                            return n.test(r)
                        } catch (t) {
                            return !1
                        }
                    }
                      , s = function(t) {
                        try {
                            return !o(t) && (e.call(t),
                            !0)
                        } catch (t) {
                            return !1
                        }
                    }
                      , u = Object.prototype.toString
                      , h = "function" == typeof Symbol && !!Symbol.toStringTag
                      , a = !(0 in [, ])
                      , l = function() {
                        return !1
                    };
                    if ("object" == typeof document) {
                        var f = document.all;
                        u.call(f) === u.call(document.all) && (l = function(t) {
                            if ((a || !t) && (typeof t > "u" || "object" == typeof t))
                                try {
                                    var r = u.call(t);
                                    return ("[object HTMLAllCollection]" === r || "[object HTML document.all class]" === r || "[object HTMLCollection]" === r || "[object Object]" === r) && null == t("")
                                } catch (t) {}
                            return !1
                        }
                        )
                    }
                    return rn = i ? function(e) {
                        if (l(e))
                            return !0;
                        if (!e || "function" != typeof e && "object" != typeof e)
                            return !1;
                        try {
                            i(e, null, t)
                        } catch (t) {
                            if (t !== r)
                                return !1
                        }
                        return !o(e) && s(e)
                    }
                    : function(t) {
                        if (l(t))
                            return !0;
                        if (!t || "function" != typeof t && "object" != typeof t)
                            return !1;
                        if (h)
                            return s(t);
                        if (o(t))
                            return !1;
                        var r = u.call(t);
                        return !!("[object Function]" === r || "[object GeneratorFunction]" === r || /^\[object HTML/.test(r)) && s(t)
                    }
                }()
                  , r = Object.prototype.toString
                  , e = Object.prototype.hasOwnProperty
                  , i = function(t, r, i) {
                    for (var n = 0, o = t.length; n < o; n++)
                        e.call(t, n) && (null == i ? r(t[n], n, t) : r.call(i, t[n], n, t))
                }
                  , n = function(t, r, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        null == e ? r(t.charAt(i), i, t) : r.call(e, t.charAt(i), i, t)
                }
                  , o = function(t, r, i) {
                    for (var n in t)
                        e.call(t, n) && (null == i ? r(t[n], n, t) : r.call(i, t[n], n, t))
                };
                return rs = function(e, s, u) {
                    var h;
                    if (!t(s))
                        throw TypeError("iterator must be a function");
                    arguments.length >= 3 && (h = u),
                    "[object Array]" === r.call(e) ? i(e, s, h) : "string" == typeof e ? n(e, s, h) : o(e, s, h)
                }
            }()
              , r = function() {
                if (rf)
                    return rl;
                rf = 1;
                var t = (ra || (ra = 1,
                rh = ["Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array"]),
                rh)
                  , r = typeof globalThis > "u" ? i.aI : globalThis;
                return rl = function() {
                    for (var e = [], i = 0; i < t.length; i++)
                        "function" == typeof r[t[i]] && (e[e.length] = t[i]);
                    return e
                }
            }()
              , e = tV()
              , n = tK()
              , o = tJ()
              , s = n("Object.prototype.toString")
              , u = tl()()
              , h = typeof globalThis > "u" ? i.aI : globalThis
              , a = r()
              , l = n("String.prototype.slice")
              , f = Object.getPrototypeOf
              , c = n("Array.prototype.indexOf", !0) || function(t, r) {
                for (var e = 0; e < t.length; e += 1)
                    if (t[e] === r)
                        return e;
                return -1
            }
              , p = {
                __proto__: null
            };
            u && o && f ? t(a, function(t) {
                var r = new h[t];
                if (Symbol.toStringTag in r) {
                    var i = f(r)
                      , n = o(i, Symbol.toStringTag);
                    n || (n = o(f(i), Symbol.toStringTag)),
                    p["$" + t] = e(n.get)
                }
            }) : t(a, function(t) {
                var r = new h[t]
                  , i = r.slice || r.set;
                i && (p["$" + t] = e(i))
            });
            var y = function(r) {
                var e = !1;
                return t(p, function(t, i) {
                    if (!e)
                        try {
                            "$" + t(r) === i && (e = l(i, 1))
                        } catch (t) {}
                }),
                e
            }
              , m = function(r) {
                var e = !1;
                return t(p, function(t, i) {
                    if (!e)
                        try {
                            t(r),
                            e = l(i, 1)
                        } catch (t) {}
                }),
                e
            };
            return rc = function(t) {
                if (!t || "object" != typeof t)
                    return !1;
                if (!u) {
                    var r = l(s(t), 8, -1);
                    return c(a, r) > -1 ? r : "Object" === r && m(t)
                }
                return o ? y(t) : null
            }
        }
        function tQ() {
            return rw || (rw = 1,
            function(t) {
                var r = {}
                  , e = Object.getOwnPropertyDescriptors || function(t) {
                    for (var r = Object.keys(t), e = {}, i = 0; i < r.length; i++)
                        e[r[i]] = Object.getOwnPropertyDescriptor(t, r[i]);
                    return e
                }
                  , n = /%[sdj%]/g;
                t.format = function(t) {
                    if (!w(t)) {
                        for (var r = [], e = 0; e < arguments.length; e++)
                            r.push(h(arguments[e]));
                        return r.join(" ")
                    }
                    for (var e = 1, i = arguments, o = i.length, s = String(t).replace(n, function(t) {
                        if ("%%" === t)
                            return "%";
                        if (e >= o)
                            return t;
                        switch (t) {
                        case "%s":
                            return String(i[e++]);
                        case "%d":
                            return Number(i[e++]);
                        case "%j":
                            try {
                                return JSON.stringify(i[e++])
                            } catch (t) {
                                return "[Circular]"
                            }
                        default:
                            return t
                        }
                    }), u = i[e]; e < o; u = i[++e])
                        g(u) || !_(u) ? s += " " + u : s += " " + h(u);
                    return s
                }
                ,
                t.deprecate = function(r, e) {
                    if ("u" > typeof i.aK && !0 === i.aK.noDeprecation)
                        return r;
                    if (typeof i.aK > "u")
                        return function() {
                            return t.deprecate(r, e).apply(this, arguments)
                        }
                        ;
                    var n = !1;
                    return function() {
                        if (!n) {
                            if (i.aK.throwDeprecation)
                                throw Error(e);
                            i.aK.traceDeprecation ? console.trace(e) : console.error(e),
                            n = !0
                        }
                        return r.apply(this, arguments)
                    }
                }
                ;
                var o = {}
                  , s = /^$/;
                if (r.NODE_DEBUG) {
                    var u = r.NODE_DEBUG;
                    s = RegExp("^" + (u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i")
                }
                function h(r, e) {
                    var i = {
                        seen: [],
                        stylize: f
                    };
                    return arguments.length >= 3 && (i.depth = arguments[2]),
                    arguments.length >= 4 && (i.colors = arguments[3]),
                    d(e) ? i.showHidden = e : e && t._extend(i, e),
                    b(i.showHidden) && (i.showHidden = !1),
                    b(i.depth) && (i.depth = 2),
                    b(i.colors) && (i.colors = !1),
                    b(i.customInspect) && (i.customInspect = !0),
                    i.colors && (i.stylize = l),
                    c(i, r, i.depth)
                }
                function l(t, r) {
                    var e = h.styles[r];
                    return e ? "\x1b[" + h.colors[e][0] + "m" + t + "\x1b[" + h.colors[e][1] + "m" : t
                }
                function f(t, r) {
                    return t
                }
                function c(r, e, i) {
                    if (r.customInspect && e && E(e.inspect) && e.inspect !== t.inspect && !(e.constructor && e.constructor.prototype === e)) {
                        var n, o, s, u, h = e.inspect(i, r);
                        return w(h) || (h = c(r, h, i)),
                        h
                    }
                    var a = function(t, r) {
                        if (b(r))
                            return t.stylize("undefined", "undefined");
                        if (w(r)) {
                            var e = "'" + JSON.stringify(r).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                            return t.stylize(e, "string")
                        }
                        return v(r) ? t.stylize("" + r, "number") : d(r) ? t.stylize("" + r, "boolean") : g(r) ? t.stylize("null", "null") : void 0
                    }(r, e);
                    if (a)
                        return a;
                    var l = Object.keys(e)
                      , f = (s = {},
                    l.forEach(function(t, r) {
                        s[t] = !0
                    }),
                    s);
                    if (r.showHidden && (l = Object.getOwnPropertyNames(e)),
                    S(e) && (l.indexOf("message") >= 0 || l.indexOf("description") >= 0))
                        return p(e);
                    if (0 === l.length) {
                        if (E(e)) {
                            var _ = e.name ? ": " + e.name : "";
                            return r.stylize("[Function" + _ + "]", "special")
                        }
                        if (M(e))
                            return r.stylize(RegExp.prototype.toString.call(e), "regexp");
                        if (A(e))
                            return r.stylize(Date.prototype.toString.call(e), "date");
                        if (S(e))
                            return p(e)
                    }
                    var O = ""
                      , j = !1
                      , I = ["{", "}"];
                    return (m(e) && (j = !0,
                    I = ["[", "]"]),
                    E(e) && (O = " [Function" + (e.name ? ": " + e.name : "") + "]"),
                    M(e) && (O = " " + RegExp.prototype.toString.call(e)),
                    A(e) && (O = " " + Date.prototype.toUTCString.call(e)),
                    S(e) && (O = " " + p(e)),
                    0 !== l.length || j && 0 != e.length) ? i < 0 ? M(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special") : (r.seen.push(e),
                    u = j ? function(t, r, e, i, n) {
                        for (var o = [], s = 0, u = r.length; s < u; ++s)
                            B(r, String(s)) ? o.push(y(t, r, e, i, String(s), !0)) : o.push("");
                        return n.forEach(function(n) {
                            n.match(/^\d+$/) || o.push(y(t, r, e, i, n, !0))
                        }),
                        o
                    }(r, e, i, f, l) : l.map(function(t) {
                        return y(r, e, i, f, t, j)
                    }),
                    r.seen.pop(),
                    n = O,
                    o = I,
                    u.reduce(function(t, r) {
                        return r.indexOf("\n"),
                        t + r.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0) > 60 ? o[0] + ("" === n ? "" : n + "\n ") + " " + u.join(",\n  ") + " " + o[1] : o[0] + n + " " + u.join(", ") + " " + o[1]) : I[0] + O + I[1]
                }
                function p(t) {
                    return "[" + Error.prototype.toString.call(t) + "]"
                }
                function y(t, r, e, i, n, o) {
                    var s, u, h;
                    if ((h = Object.getOwnPropertyDescriptor(r, n) || {
                        value: r[n]
                    }).get ? u = h.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : h.set && (u = t.stylize("[Setter]", "special")),
                    B(i, n) || (s = "[" + n + "]"),
                    u || (0 > t.seen.indexOf(h.value) ? (u = g(e) ? c(t, h.value, null) : c(t, h.value, e - 1)).indexOf("\n") > -1 && (u = o ? u.split("\n").map(function(t) {
                        return "  " + t
                    }).join("\n").slice(2) : "\n" + u.split("\n").map(function(t) {
                        return "   " + t
                    }).join("\n")) : u = t.stylize("[Circular]", "special")),
                    b(s)) {
                        if (o && n.match(/^\d+$/))
                            return u;
                        (s = JSON.stringify("" + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.slice(1, -1),
                        s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                        s = t.stylize(s, "string"))
                    }
                    return s + ": " + u
                }
                function m(t) {
                    return Array.isArray(t)
                }
                function d(t) {
                    return "boolean" == typeof t
                }
                function g(t) {
                    return null === t
                }
                function v(t) {
                    return "number" == typeof t
                }
                function w(t) {
                    return "string" == typeof t
                }
                function b(t) {
                    return void 0 === t
                }
                function M(t) {
                    return _(t) && "[object RegExp]" === O(t)
                }
                function _(t) {
                    return "object" == typeof t && null !== t
                }
                function A(t) {
                    return _(t) && "[object Date]" === O(t)
                }
                function S(t) {
                    return _(t) && ("[object Error]" === O(t) || t instanceof Error)
                }
                function E(t) {
                    return "function" == typeof t
                }
                function O(t) {
                    return Object.prototype.toString.call(t)
                }
                function j(t) {
                    return t < 10 ? "0" + t.toString(10) : t.toString(10)
                }
                t.debuglog = function(r) {
                    if (!o[r = r.toUpperCase()]) {
                        if (s.test(r)) {
                            var e = i.aK.pid;
                            o[r] = function() {
                                var i = t.format.apply(t, arguments);
                                console.error("%s %d: %s", r, e, i)
                            }
                        } else
                            o[r] = function() {}
                    }
                    return o[r]
                }
                ,
                t.inspect = h,
                h.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                },
                h.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                },
                t.types = (rd || (rd = 1,
                function(t) {
                    var r = function() {
                        if (rr)
                            return rt;
                        rr = 1;
                        var t = tl()()
                          , r = tK()("Object.prototype.toString")
                          , e = function(e) {
                            return (!t || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === r(e)
                        }
                          , i = function(t) {
                            return !!e(t) || null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Array]" !== r(t) && "[object Function]" === r(t.callee)
                        }
                          , n = function() {
                            return e(arguments)
                        }();
                        return e.isLegacyArguments = i,
                        rt = n ? e : i
                    }()
                      , e = function() {
                        if (ri)
                            return re;
                        ri = 1;
                        var t, r = Object.prototype.toString, e = Function.prototype.toString, i = /^\s*(?:function)?\*/, n = tl()(), o = Object.getPrototypeOf, s = function() {
                            if (!n)
                                return !1;
                            try {
                                return Function("return function*() {}")()
                            } catch (t) {}
                        };
                        return re = function(u) {
                            if ("function" != typeof u)
                                return !1;
                            if (i.test(e.call(u)))
                                return !0;
                            if (!n)
                                return "[object GeneratorFunction]" === r.call(u);
                            if (!o)
                                return !1;
                            if (typeof t > "u") {
                                var h = s();
                                t = !!h && o(h)
                            }
                            return o(u) === t
                        }
                    }()
                      , i = tH()
                      , n = function() {
                        if (rm)
                            return ry;
                        rm = 1;
                        var t = tH();
                        return ry = function(r) {
                            return !!t(r)
                        }
                    }();
                    function o(t) {
                        return t.call.bind(t)
                    }
                    var s = "u" > typeof BigInt
                      , u = "u" > typeof Symbol
                      , h = o(Object.prototype.toString)
                      , a = o(Number.prototype.valueOf)
                      , l = o(String.prototype.valueOf)
                      , f = o(Boolean.prototype.valueOf);
                    if (s)
                        var c = o(BigInt.prototype.valueOf);
                    if (u)
                        var p = o(Symbol.prototype.valueOf);
                    function y(t, r) {
                        if ("object" != typeof t)
                            return !1;
                        try {
                            return r(t),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }
                    function m(t) {
                        return "[object Map]" === h(t)
                    }
                    function d(t) {
                        return "[object Set]" === h(t)
                    }
                    function g(t) {
                        return "[object WeakMap]" === h(t)
                    }
                    function v(t) {
                        return "[object WeakSet]" === h(t)
                    }
                    function w(t) {
                        return "[object ArrayBuffer]" === h(t)
                    }
                    function b(t) {
                        return !(typeof ArrayBuffer > "u") && (w.working ? w(t) : t instanceof ArrayBuffer)
                    }
                    function M(t) {
                        return "[object DataView]" === h(t)
                    }
                    function _(t) {
                        return !(typeof DataView > "u") && (M.working ? M(t) : t instanceof DataView)
                    }
                    t.isArgumentsObject = r,
                    t.isGeneratorFunction = e,
                    t.isTypedArray = n,
                    t.isPromise = function(t) {
                        return "u" > typeof Promise && t instanceof Promise || null !== t && "object" == typeof t && "function" == typeof t.then && "function" == typeof t.catch
                    }
                    ,
                    t.isArrayBufferView = function(t) {
                        return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : n(t) || _(t)
                    }
                    ,
                    t.isUint8Array = function(t) {
                        return "Uint8Array" === i(t)
                    }
                    ,
                    t.isUint8ClampedArray = function(t) {
                        return "Uint8ClampedArray" === i(t)
                    }
                    ,
                    t.isUint16Array = function(t) {
                        return "Uint16Array" === i(t)
                    }
                    ,
                    t.isUint32Array = function(t) {
                        return "Uint32Array" === i(t)
                    }
                    ,
                    t.isInt8Array = function(t) {
                        return "Int8Array" === i(t)
                    }
                    ,
                    t.isInt16Array = function(t) {
                        return "Int16Array" === i(t)
                    }
                    ,
                    t.isInt32Array = function(t) {
                        return "Int32Array" === i(t)
                    }
                    ,
                    t.isFloat32Array = function(t) {
                        return "Float32Array" === i(t)
                    }
                    ,
                    t.isFloat64Array = function(t) {
                        return "Float64Array" === i(t)
                    }
                    ,
                    t.isBigInt64Array = function(t) {
                        return "BigInt64Array" === i(t)
                    }
                    ,
                    t.isBigUint64Array = function(t) {
                        return "BigUint64Array" === i(t)
                    }
                    ,
                    m.working = "u" > typeof Map && m(new Map),
                    t.isMap = function(t) {
                        return !(typeof Map > "u") && (m.working ? m(t) : t instanceof Map)
                    }
                    ,
                    d.working = "u" > typeof Set && d(new Set),
                    t.isSet = function(t) {
                        return !(typeof Set > "u") && (d.working ? d(t) : t instanceof Set)
                    }
                    ,
                    g.working = "u" > typeof WeakMap && g(new WeakMap),
                    t.isWeakMap = function(t) {
                        return !(typeof WeakMap > "u") && (g.working ? g(t) : t instanceof WeakMap)
                    }
                    ,
                    v.working = "u" > typeof WeakSet && v(new WeakSet),
                    t.isWeakSet = function(t) {
                        return v(t)
                    }
                    ,
                    w.working = "u" > typeof ArrayBuffer && w(new ArrayBuffer),
                    t.isArrayBuffer = b,
                    M.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && M(new DataView(new ArrayBuffer(1),0,1)),
                    t.isDataView = _;
                    var A = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
                    function S(t) {
                        return "[object SharedArrayBuffer]" === h(t)
                    }
                    function E(t) {
                        return !(typeof A > "u") && (typeof S.working > "u" && (S.working = S(new A)),
                        S.working ? S(t) : t instanceof A)
                    }
                    function O(t) {
                        return y(t, a)
                    }
                    function j(t) {
                        return y(t, l)
                    }
                    function I(t) {
                        return y(t, f)
                    }
                    function B(t) {
                        return s && y(t, c)
                    }
                    function x(t) {
                        return u && y(t, p)
                    }
                    t.isSharedArrayBuffer = E,
                    t.isAsyncFunction = function(t) {
                        return "[object AsyncFunction]" === h(t)
                    }
                    ,
                    t.isMapIterator = function(t) {
                        return "[object Map Iterator]" === h(t)
                    }
                    ,
                    t.isSetIterator = function(t) {
                        return "[object Set Iterator]" === h(t)
                    }
                    ,
                    t.isGeneratorObject = function(t) {
                        return "[object Generator]" === h(t)
                    }
                    ,
                    t.isWebAssemblyCompiledModule = function(t) {
                        return "[object WebAssembly.Module]" === h(t)
                    }
                    ,
                    t.isNumberObject = O,
                    t.isStringObject = j,
                    t.isBooleanObject = I,
                    t.isBigIntObject = B,
                    t.isSymbolObject = x,
                    t.isBoxedPrimitive = function(t) {
                        return O(t) || j(t) || I(t) || B(t) || x(t)
                    }
                    ,
                    t.isAnyArrayBuffer = function(t) {
                        return "u" > typeof Uint8Array && (b(t) || E(t))
                    }
                    ,
                    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(r) {
                        Object.defineProperty(t, r, {
                            enumerable: !1,
                            value: function() {
                                throw Error(r + " is not supported in userland")
                            }
                        })
                    })
                }(th)),
                th),
                t.isArray = m,
                t.isBoolean = d,
                t.isNull = g,
                t.isNullOrUndefined = function(t) {
                    return null == t
                }
                ,
                t.isNumber = v,
                t.isString = w,
                t.isSymbol = function(t) {
                    return "symbol" == typeof t
                }
                ,
                t.isUndefined = b,
                t.isRegExp = M,
                t.types.isRegExp = M,
                t.isObject = _,
                t.isDate = A,
                t.types.isDate = A,
                t.isError = S,
                t.types.isNativeError = S,
                t.isFunction = E,
                t.isPrimitive = function(t) {
                    return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || typeof t > "u"
                }
                ,
                t.isBuffer = (rv || (rv = 1,
                rg = function(t) {
                    return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
                }
                ),
                rg);
                var I = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                function B(t, r) {
                    return Object.prototype.hasOwnProperty.call(t, r)
                }
                t.log = function() {
                    var r, e;
                    console.log("%s - %s", (e = [j((r = new Date).getHours()), j(r.getMinutes()), j(r.getSeconds())].join(":"),
                    [r.getDate(), I[r.getMonth()], e].join(" ")), t.format.apply(t, arguments))
                }
                ,
                t.inherits = a,
                t._extend = function(t, r) {
                    if (!r || !_(r))
                        return t;
                    for (var e = Object.keys(r), i = e.length; i--; )
                        t[e[i]] = r[e[i]];
                    return t
                }
                ;
                var x = "u" > typeof Symbol ? Symbol("util.promisify.custom") : void 0;
                function k(t, r) {
                    if (!t) {
                        var e = Error("Promise was rejected with a falsy value");
                        e.reason = t,
                        t = e
                    }
                    return r(t)
                }
                t.promisify = function(t) {
                    if ("function" != typeof t)
                        throw TypeError('The "original" argument must be of type Function');
                    if (x && t[x]) {
                        var r = t[x];
                        if ("function" != typeof r)
                            throw TypeError('The "util.promisify.custom" argument must be of type Function');
                        return Object.defineProperty(r, x, {
                            value: r,
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        }),
                        r
                    }
                    function r() {
                        for (var r, e, i = new Promise(function(t, i) {
                            r = t,
                            e = i
                        }
                        ), n = [], o = 0; o < arguments.length; o++)
                            n.push(arguments[o]);
                        n.push(function(t, i) {
                            t ? e(t) : r(i)
                        });
                        try {
                            t.apply(this, n)
                        } catch (t) {
                            e(t)
                        }
                        return i
                    }
                    return Object.setPrototypeOf(r, Object.getPrototypeOf(t)),
                    x && Object.defineProperty(r, x, {
                        value: r,
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    }),
                    Object.defineProperties(r, e(t))
                }
                ,
                t.promisify.custom = x,
                t.callbackify = function(t) {
                    if ("function" != typeof t)
                        throw TypeError('The "original" argument must be of type Function');
                    function r() {
                        for (var r = [], e = 0; e < arguments.length; e++)
                            r.push(arguments[e]);
                        var n = r.pop();
                        if ("function" != typeof n)
                            throw TypeError("The last argument must be of type Function");
                        var o = this
                          , s = function() {
                            return n.apply(o, arguments)
                        };
                        t.apply(this, r).then(function(t) {
                            i.aK.nextTick(s.bind(null, null, t))
                        }, function(t) {
                            i.aK.nextTick(k.bind(null, t, s))
                        })
                    }
                    return Object.setPrototypeOf(r, Object.getPrototypeOf(t)),
                    Object.defineProperties(r, e(t)),
                    r
                }
            }(tu)),
            tu
        }
        function tX() {
            if (rM)
                return rb;
            function t(t) {
                try {
                    if (!i.aI.localStorage)
                        return !1
                } catch (t) {
                    return !1
                }
                var r = i.aI.localStorage[t];
                return null != r && "true" === String(r).toLowerCase()
            }
            return rM = 1,
            rb = function(r, e) {
                if (t("noDeprecation"))
                    return r;
                var i = !1;
                return function() {
                    if (!i) {
                        if (t("throwDeprecation"))
                            throw Error(e);
                        t("traceDeprecation") ? console.trace(e) : console.warn(e),
                        i = !0
                    }
                    return r.apply(this, arguments)
                }
            }
        }
        var tY, t0, t1, t2, t3, t6, t8, t4, t7, t9, t5, rt, rr, re, ri, rn, ro, rs, ru, rh, ra, rl, rf, rc, rp, ry, rm, rd, rg, rv, rw, rb, rM, r_, rA = {};
        function rS() {
            if (r_)
                return rA;
            r_ = 1;
            var t = f.Buffer
              , r = t.isEncoding || function(t) {
                switch ((t = "" + t) && t.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
                }
            }
            ;
            function e(e) {
                var i;
                switch (this.encoding = function(e) {
                    var i = function(t) {
                        if (!t)
                            return "utf8";
                        for (var r; ; )
                            switch (t) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return t;
                            default:
                                if (r)
                                    return;
                                t = ("" + t).toLowerCase(),
                                r = !0
                            }
                    }(e);
                    if ("string" != typeof i && (t.isEncoding === r || !r(e)))
                        throw Error("Unknown encoding: " + e);
                    return i || e
                }(e),
                this.encoding) {
                case "utf16le":
                    this.text = o,
                    this.end = s,
                    i = 4;
                    break;
                case "utf8":
                    this.fillLast = n,
                    i = 4;
                    break;
                case "base64":
                    this.text = u,
                    this.end = h,
                    i = 3;
                    break;
                default:
                    this.write = a,
                    this.end = l;
                    return
                }
                this.lastNeed = 0,
                this.lastTotal = 0,
                this.lastChar = t.allocUnsafe(i)
            }
            function i(t) {
                return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
            }
            function n(t) {
                var r = this.lastTotal - this.lastNeed
                  , e = function(t, r, e) {
                    if ((192 & r[0]) != 128)
                        return t.lastNeed = 0,
                        "�";
                    if (t.lastNeed > 1 && r.length > 1) {
                        if ((192 & r[1]) != 128)
                            return t.lastNeed = 1,
                            "�";
                        if (t.lastNeed > 2 && r.length > 2 && (192 & r[2]) != 128)
                            return t.lastNeed = 2,
                            "�"
                    }
                }(this, t);
                return void 0 !== e ? e : this.lastNeed <= t.length ? (t.copy(this.lastChar, r, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (t.copy(this.lastChar, r, 0, t.length),
                this.lastNeed -= t.length)
            }
            function o(t, r) {
                if ((t.length - r) % 2 == 0) {
                    var e = t.toString("utf16le", r);
                    if (e) {
                        var i = e.charCodeAt(e.length - 1);
                        if (i >= 55296 && i <= 56319)
                            return this.lastNeed = 2,
                            this.lastTotal = 4,
                            this.lastChar[0] = t[t.length - 2],
                            this.lastChar[1] = t[t.length - 1],
                            e.slice(0, -1)
                    }
                    return e
                }
                return this.lastNeed = 1,
                this.lastTotal = 2,
                this.lastChar[0] = t[t.length - 1],
                t.toString("utf16le", r, t.length - 1)
            }
            function s(t) {
                var r = t && t.length ? this.write(t) : "";
                if (this.lastNeed) {
                    var e = this.lastTotal - this.lastNeed;
                    return r + this.lastChar.toString("utf16le", 0, e)
                }
                return r
            }
            function u(t, r) {
                var e = (t.length - r) % 3;
                return 0 === e ? t.toString("base64", r) : (this.lastNeed = 3 - e,
                this.lastTotal = 3,
                1 === e ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2],
                this.lastChar[1] = t[t.length - 1]),
                t.toString("base64", r, t.length - e))
            }
            function h(t) {
                var r = t && t.length ? this.write(t) : "";
                return this.lastNeed ? r + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : r
            }
            function a(t) {
                return t.toString(this.encoding)
            }
            function l(t) {
                return t && t.length ? this.write(t) : ""
            }
            return rA.StringDecoder = e,
            e.prototype.write = function(t) {
                var r, e;
                if (0 === t.length)
                    return "";
                if (this.lastNeed) {
                    if (void 0 === (r = this.fillLast(t)))
                        return "";
                    e = this.lastNeed,
                    this.lastNeed = 0
                } else
                    e = 0;
                return e < t.length ? r ? r + this.text(t, e) : this.text(t, e) : r || ""
            }
            ,
            e.prototype.end = function(t) {
                var r = t && t.length ? this.write(t) : "";
                return this.lastNeed ? r + "�" : r
            }
            ,
            e.prototype.text = function(t, r) {
                var e = function(t, r, e) {
                    var n = r.length - 1;
                    if (n < e)
                        return 0;
                    var o = i(r[n]);
                    return o >= 0 ? (o > 0 && (t.lastNeed = o - 1),
                    o) : --n < e || -2 === o ? 0 : (o = i(r[n])) >= 0 ? (o > 0 && (t.lastNeed = o - 2),
                    o) : --n < e || -2 === o ? 0 : (o = i(r[n])) >= 0 ? (o > 0 && (2 === o ? o = 0 : t.lastNeed = o - 3),
                    o) : 0
                }(this, t, r);
                if (!this.lastNeed)
                    return t.toString("utf8", r);
                this.lastTotal = e;
                var n = t.length - (e - this.lastNeed);
                return t.copy(this.lastChar, 0, n),
                t.toString("utf8", r, n)
            }
            ,
            e.prototype.fillLast = function(t) {
                if (this.lastNeed <= t.length)
                    return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                    this.lastChar.toString(this.encoding, 0, this.lastTotal);
                t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
                this.lastNeed -= t.length
            }
            ,
            rA
        }
    }
}]);
