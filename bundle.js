!function () {
    "use strict";
    class t { }
    t.Team = "LayaMiniGame", t.Name = "Ropeman 3D", t.ZHName = "", t.Explain = "",
        t.Versions = "0.0.5.0", t.OnLine = !1;
    class e {
        static get publicStyle() {
            return "\n                border-radius: 3px;\n                line-height: 15px;\n                ";
        }
        static get logStyle() {
            return this.getStyle("#fff", "#9BA4B4");
        }
        static get logLightStyle() {
            return this.getStyle("#776d8a", "#EBEBEB");
        }
        static get warnStyle() {
            return this.getStyle("#5c6e06", "#ffa931");
        }
        static get errorStyle() {
            return this.getStyle("#fff", "#ec0101");
        }
        static get comStyle() {
            return this.getStyle("#fff", "#ade498");
        }
        static getStyle(t, e) {
            return `\n                color: ${t};\n                background-color: ${e};\n                padding: 0px 3px;\n                ` + this.publicStyle;
        }
    }
    class i {
        static pack(t, e) {
            return ["%c%s", t, "log", ...e];
        }
        static packLog(...i) {
            return t.OnLine ? i : this.pack(e.logStyle, i);
        }
        static packLogLight(...i) {
            return t.OnLine ? i : this.pack(e.logLightStyle, i);
        }
        static packCom(...i) {
            return t.OnLine ? i : this.pack(e.comStyle, i);
        }
        static packWarn(...i) {
            return t.OnLine ? i : this.pack(e.warnStyle, i);
        }
        static packError(...i) {
            return t.OnLine ? i : this.pack(e.errorStyle, i);
        }
    }
    function __decorate(t, e, i, s) {
        var a, n = arguments.length, o = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, s); else for (var r = t.length - 1; r >= 0; r--) (a = t[r]) && (o = (n < 3 ? a(o) : n > 3 ? a(e, i, o) : a(e, i)) || o);
        return n > 3 && o && Object.defineProperty(e, i, o), o;
    }
    function __metadata(t, e) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    class s {
        static DecorateInstance(t = !1) {
            return function (e) {
                t && (e[s.InstanceKey] = new e()), Object.defineProperty(e, "instance", {
                    get: function () {
                        return e[s.InstanceKey] || (e[s.InstanceKey] = new e()), e[s.InstanceKey];
                    }
                });
            };
        }
    }
    s.InstanceKey = Symbol();
    class a {
        constructor() {
            this._state = new Int32Array(4), this._buffer = new ArrayBuffer(68), this._buffer8 = new Uint8Array(this._buffer, 0, 68),
                this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
        }
        static hashStr(t, e = !1) {
            return this.onePassHasher.start().appendStr(t).end(e);
        }
        static hashAsciiStr(t, e = !1) {
            return this.onePassHasher.start().appendAsciiStr(t).end(e);
        }
        static _hex(t) {
            const e = a.hexChars, i = a.hexOut;
            let s, n, o, r;
            for (r = 0; r < 4; r += 1) for (n = 8 * r, s = t[r], o = 0; o < 8; o += 2) i[n + 1 + o] = e.charAt(15 & s),
                s >>>= 4, i[n + 0 + o] = e.charAt(15 & s), s >>>= 4;
            return i.join("");
        }
        static _md5cycle(t, e) {
            let i = t[0], s = t[1], a = t[2], n = t[3];
            s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & a | ~s & n) + e[0] - 680876936 | 0) << 7 | i >>> 25) + s | 0) & s | ~i & a) + e[1] - 389564586 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & s) + e[2] + 606105819 | 0) << 17 | a >>> 15) + n | 0) & n | ~a & i) + e[3] - 1044525330 | 0) << 22 | s >>> 10) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & a | ~s & n) + e[4] - 176418897 | 0) << 7 | i >>> 25) + s | 0) & s | ~i & a) + e[5] + 1200080426 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & s) + e[6] - 1473231341 | 0) << 17 | a >>> 15) + n | 0) & n | ~a & i) + e[7] - 45705983 | 0) << 22 | s >>> 10) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & a | ~s & n) + e[8] + 1770035416 | 0) << 7 | i >>> 25) + s | 0) & s | ~i & a) + e[9] - 1958414417 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & s) + e[10] - 42063 | 0) << 17 | a >>> 15) + n | 0) & n | ~a & i) + e[11] - 1990404162 | 0) << 22 | s >>> 10) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & a | ~s & n) + e[12] + 1804603682 | 0) << 7 | i >>> 25) + s | 0) & s | ~i & a) + e[13] - 40341101 | 0) << 12 | n >>> 20) + i | 0) & i | ~n & s) + e[14] - 1502002290 | 0) << 17 | a >>> 15) + n | 0) & n | ~a & i) + e[15] + 1236535329 | 0) << 22 | s >>> 10) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & n | a & ~n) + e[1] - 165796510 | 0) << 5 | i >>> 27) + s | 0) & a | s & ~a) + e[6] - 1069501632 | 0) << 9 | n >>> 23) + i | 0) & s | i & ~s) + e[11] + 643717713 | 0) << 14 | a >>> 18) + n | 0) & i | n & ~i) + e[0] - 373897302 | 0) << 20 | s >>> 12) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & n | a & ~n) + e[5] - 701558691 | 0) << 5 | i >>> 27) + s | 0) & a | s & ~a) + e[10] + 38016083 | 0) << 9 | n >>> 23) + i | 0) & s | i & ~s) + e[15] - 660478335 | 0) << 14 | a >>> 18) + n | 0) & i | n & ~i) + e[4] - 405537848 | 0) << 20 | s >>> 12) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & n | a & ~n) + e[9] + 568446438 | 0) << 5 | i >>> 27) + s | 0) & a | s & ~a) + e[14] - 1019803690 | 0) << 9 | n >>> 23) + i | 0) & s | i & ~s) + e[3] - 187363961 | 0) << 14 | a >>> 18) + n | 0) & i | n & ~i) + e[8] + 1163531501 | 0) << 20 | s >>> 12) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s & n | a & ~n) + e[13] - 1444681467 | 0) << 5 | i >>> 27) + s | 0) & a | s & ~a) + e[2] - 51403784 | 0) << 9 | n >>> 23) + i | 0) & s | i & ~s) + e[7] + 1735328473 | 0) << 14 | a >>> 18) + n | 0) & i | n & ~i) + e[12] - 1926607734 | 0) << 20 | s >>> 12) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s ^ a ^ n) + e[5] - 378558 | 0) << 4 | i >>> 28) + s | 0) ^ s ^ a) + e[8] - 2022574463 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ s) + e[11] + 1839030562 | 0) << 16 | a >>> 16) + n | 0) ^ n ^ i) + e[14] - 35309556 | 0) << 23 | s >>> 9) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s ^ a ^ n) + e[1] - 1530992060 | 0) << 4 | i >>> 28) + s | 0) ^ s ^ a) + e[4] + 1272893353 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ s) + e[7] - 155497632 | 0) << 16 | a >>> 16) + n | 0) ^ n ^ i) + e[10] - 1094730640 | 0) << 23 | s >>> 9) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s ^ a ^ n) + e[13] + 681279174 | 0) << 4 | i >>> 28) + s | 0) ^ s ^ a) + e[0] - 358537222 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ s) + e[3] - 722521979 | 0) << 16 | a >>> 16) + n | 0) ^ n ^ i) + e[6] + 76029189 | 0) << 23 | s >>> 9) + a | 0,
                s = ((s += ((a = ((a += ((n = ((n += ((i = ((i += (s ^ a ^ n) + e[9] - 640364487 | 0) << 4 | i >>> 28) + s | 0) ^ s ^ a) + e[12] - 421815835 | 0) << 11 | n >>> 21) + i | 0) ^ i ^ s) + e[15] + 530742520 | 0) << 16 | a >>> 16) + n | 0) ^ n ^ i) + e[2] - 995338651 | 0) << 23 | s >>> 9) + a | 0,
                s = ((s += ((n = ((n += (s ^ ((i = ((i += (a ^ (s | ~n)) + e[0] - 198630844 | 0) << 6 | i >>> 26) + s | 0) | ~a)) + e[7] + 1126891415 | 0) << 10 | n >>> 22) + i | 0) ^ ((a = ((a += (i ^ (n | ~s)) + e[14] - 1416354905 | 0) << 15 | a >>> 17) + n | 0) | ~i)) + e[5] - 57434055 | 0) << 21 | s >>> 11) + a | 0,
                s = ((s += ((n = ((n += (s ^ ((i = ((i += (a ^ (s | ~n)) + e[12] + 1700485571 | 0) << 6 | i >>> 26) + s | 0) | ~a)) + e[3] - 1894986606 | 0) << 10 | n >>> 22) + i | 0) ^ ((a = ((a += (i ^ (n | ~s)) + e[10] - 1051523 | 0) << 15 | a >>> 17) + n | 0) | ~i)) + e[1] - 2054922799 | 0) << 21 | s >>> 11) + a | 0,
                s = ((s += ((n = ((n += (s ^ ((i = ((i += (a ^ (s | ~n)) + e[8] + 1873313359 | 0) << 6 | i >>> 26) + s | 0) | ~a)) + e[15] - 30611744 | 0) << 10 | n >>> 22) + i | 0) ^ ((a = ((a += (i ^ (n | ~s)) + e[6] - 1560198380 | 0) << 15 | a >>> 17) + n | 0) | ~i)) + e[13] + 1309151649 | 0) << 21 | s >>> 11) + a | 0,
                s = ((s += ((n = ((n += (s ^ ((i = ((i += (a ^ (s | ~n)) + e[4] - 145523070 | 0) << 6 | i >>> 26) + s | 0) | ~a)) + e[11] - 1120210379 | 0) << 10 | n >>> 22) + i | 0) ^ ((a = ((a += (i ^ (n | ~s)) + e[2] + 718787259 | 0) << 15 | a >>> 17) + n | 0) | ~i)) + e[9] - 343485551 | 0) << 21 | s >>> 11) + a | 0,
                t[0] = i + t[0] | 0, t[1] = s + t[1] | 0, t[2] = a + t[2] | 0, t[3] = n + t[3] | 0;
        }
        start() {
            return this._dataLength = 0, this._bufferLength = 0, this._state.set(a.stateIdentity),
                this;
        }
        appendStr(t) {
            const e = this._buffer8, i = this._buffer32;
            let s, n, o = this._bufferLength;
            for (n = 0; n < t.length; n += 1) {
                if ((s = t.charCodeAt(n)) < 128) e[o++] = s; else if (s < 2048) e[o++] = 192 + (s >>> 6),
                    e[o++] = 63 & s | 128; else if (s < 55296 || s > 56319) e[o++] = 224 + (s >>> 12),
                        e[o++] = s >>> 6 & 63 | 128, e[o++] = 63 & s | 128; else {
                    if ((s = 1024 * (s - 55296) + (t.charCodeAt(++n) - 56320) + 65536) > 1114111) throw new Error("Unicode standard supports code points up to U+10FFFF");
                    e[o++] = 240 + (s >>> 18), e[o++] = s >>> 12 & 63 | 128, e[o++] = s >>> 6 & 63 | 128,
                        e[o++] = 63 & s | 128;
                }
                o >= 64 && (this._dataLength += 64, a._md5cycle(this._state, i), o -= 64, i[0] = i[16]);
            }
            return this._bufferLength = o, this;
        }
        appendAsciiStr(t) {
            const e = this._buffer8, i = this._buffer32;
            let s, n = this._bufferLength, o = 0;
            for (; ;) {
                for (s = Math.min(t.length - o, 64 - n); s--;) e[n++] = t.charCodeAt(o++);
                if (n < 64) break;
                this._dataLength += 64, a._md5cycle(this._state, i), n = 0;
            }
            return this._bufferLength = n, this;
        }
        appendByteArray(t) {
            const e = this._buffer8, i = this._buffer32;
            let s, n = this._bufferLength, o = 0;
            for (; ;) {
                for (s = Math.min(t.length - o, 64 - n); s--;) e[n++] = t[o++];
                if (n < 64) break;
                this._dataLength += 64, a._md5cycle(this._state, i), n = 0;
            }
            return this._bufferLength = n, this;
        }
        getState() {
            const t = this._state;
            return {
                buffer: String.fromCharCode.apply(null, this._buffer8),
                buflen: this._bufferLength,
                length: this._dataLength,
                state: [t[0], t[1], t[2], t[3]]
            };
        }
        setState(t) {
            const e = t.buffer, i = t.state, s = this._state;
            let a;
            for (this._dataLength = t.length, this._bufferLength = t.buflen, s[0] = i[0], s[1] = i[1],
                s[2] = i[2], s[3] = i[3], a = 0; a < e.length; a += 1) this._buffer8[a] = e.charCodeAt(a);
        }
        end(t = !1) {
            const e = this._bufferLength, i = this._buffer8, s = this._buffer32, n = 1 + (e >> 2);
            let o;
            if (this._dataLength += e, i[e] = 128, i[e + 1] = i[e + 2] = i[e + 3] = 0, s.set(a.buffer32Identity.subarray(n), n),
                e > 55 && (a._md5cycle(this._state, s), s.set(a.buffer32Identity)), (o = 8 * this._dataLength) <= 4294967295) s[14] = o; else {
                const t = o.toString(16).match(/(.*?)(.{0,8})$/);
                if (null === t) return;
                const e = parseInt(t[2], 16), i = parseInt(t[1], 16) || 0;
                s[14] = e, s[15] = i;
            }
            return a._md5cycle(this._state, s), t ? this._state : a._hex(this._state);
        }
    }
    a.ifUse = !0, a.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]),
        a.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        a.hexChars = "0123456789abcdef", a.hexOut = [], a.onePassHasher = new a(), "5d41402abc4b2a76b9719d911017c592" !== a.hashStr("hello") && (a.ifUse = !1,
            console.warn("Md5 self test failed."));
    class n {
        constructor() {
            this.m_ifSetProxy = !0;
        }
        get ifSetProxy() {
            return this.m_ifSetProxy;
        }
        get objectProxyT() {
            return this.m_objectProxyT;
        }
        get data() {
            return this.m_data;
        }
        getNewData() {
            return this.dataTemplate ? new this.dataTemplate() : (//console.error(...i.packError("没有找到数据模板！请使用数据模板装饰器装饰该类", this.constructor.name)),
                {});
        }
    }
    class o {
        constructor() {
            this.m_monitorList = [];
        }
        addMonitor(t, e, i, s) {
            this.m_monitorList.push({
                _this: t,
                _back: e,
                _obj: i,
                _key: s
            });
        }
        clearMonitor(t, e) {
            this.m_monitorList = this.m_monitorList.filter(i => !(i._this != t || !e || i._back == e));
        }
        setProxy(t) {
            return this._setProxy(t);
        }
        _setProxy(t) {
            if ("function" == typeof t || "object" != typeof t || !t) return t;
            if (!t[Symbol.iterator]) for (let e in t) t[e] = this._setProxy(t[e]);
            let e = this;
            return new Proxy(t, {
                set(t, i, s, a) {
                    let n = Reflect.set(t, i, s, a);
                    return n && (Array.isArray(t) && "length" == i || e.proxySet(t, i, s, a)), n;
                },
                get: (t, e, i) => Reflect.get(t, e, i)
            });
        }
        proxySet(t, e, i, s) {
            let a = arguments;
            this.m_monitorList.forEach(t => {
                t._obj && t._obj != s || t._key && t._key != e || t._back.call(t._this, ...a);
            });
        }
    }
    class r extends n {
        constructor() {
            super(...arguments), this._ifDifferData = !0, this.m_saveToDiskQueue = 0, this.m_saveToDiskTime = 0;
        }
        get _saveName() {
            return this.constructor.name;
        }
        get saveName() {
            return t.Name + "-" + this._saveName + "-" + t.Versions + (t.OnLine ? "^on" : "^test");
        }
        get differName() {
            return this.encrypt(this.saveName + "__verify");
        }
        initData() {
            let t = Date.now();
            this.m_data = this._readData(), this.m_ifSetProxy && (this.m_objectProxyT = new o(),
                this.m_data = this.m_objectProxyT.setProxy(this.m_data), this.m_objectProxyT.addMonitor(this, this._dataSetMonitor)),
                this._initData(), (t = Date.now() - t) > 100 && console.warn(...i.packWarn("初始化本地数据时间过长", this.saveName, t));
        }
        _initData() { }
        _dataSetMonitor() {
            this.save(this.m_data);
        }
        Save(t = !0) {
            this.save(this.m_data, t);
        }
        save(t, e = !0) {
            0 == this.m_saveToDiskTime && (this.m_saveToDiskTime = Date.now()), e ? (this.m_saveToDiskQueue++,
                Promise.resolve().then(() => {
                    this.m_saveToDiskQueue--, 0 == this.m_saveToDiskQueue && this._save(t);
                })) : this._save(t);
        }
        _save(e) {
            let s = JSON.stringify(e);
            if (Laya.LocalStorage.setJSON(this.saveName, s), t.OnLine && this._ifDifferData) {
                let t = this.getDifferData(s);
                Laya.LocalStorage.setJSON(this.differName, t);
            }
            let a = Date.now() - this.m_saveToDiskTime;
            this.m_saveToDiskTime = 0, a > 1e3 && console.warn(...i.packWarn("场景保存时间过长", this.saveName, a));
        }
        _readData() {
            let e = Laya.LocalStorage.getJSON(this.saveName);
            if (t.OnLine && this._ifDifferData) {
                let t = Laya.LocalStorage.getJSON(this.differName);
                if (this.getDifferData(e) != t) return this._saveNewData();
            }
            let i = this.getNewData();
            try {
                if (!e) return this._saveNewData();
                {
                    let t = JSON.parse(e);
                    for (let e in i) i[e] = t[e];
                }
            } catch (t) {
                return this._saveNewData();
            }
            return i;
        }
        _saveNewData() {
            let t = this.getNewData();
            return this.save(t, !1), t;
        }
        getDifferData(t) {
            return t ? this.encrypt(t) : "";
        }
        encrypt(t) {
            let e = `LayaMiniGame-${this.saveName}:${t}`;
            return a.ifUse ? a.hashStr(e).toString() : "noEncrypt";
        }
    }
    class h {
        static DecorateDataTemplate(t) {
            return function (e) {
                e.prototype.dataTemplate = t;
            };
        }
    }
    class l { }
    let c = class extends Laya.EventDispatcher {
        constructor() {
            super();
        }
        static hasListener(t) {
            return this.instance.hasListener(t.toString());
        }
        static event(t, e) {
            return this.instance.event(t.toString(), e);
        }
        static on(t, e, i, s) {
            return this.instance.on(t.toString(), e, i, s);
        }
        static once(t, e, i, s) {
            return this.instance.once(t.toString(), e, i, s);
        }
        static off(t, e, i, s) {
            return this.instance.off(t.toString(), e, i, s);
        }
        static offAll(t) {
            return this.instance.offAll(t.toString());
        }
        static offAllCaller(t) {
            return this.instance.offAllCaller(t);
        }
        static isMouseEvent(t) {
            return this.instance.isMouseEvent(t.toString());
        }
    };
    var m, d, g = c = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], c);
    class _ {
        static get key() {
            return this.m_key++;
        }
        static packE(t) {
            let e = Object.keys(t);
            for (let i of e) /^[0-9]+$/.test(i) ? delete t[i] : "number" == typeof t[i] ? t[t[i] = `${t[i]}${this.key}`] = i : t[i] = `${t[i]}${this.key}`;
        }
    }
    _.m_key = 0, function (t) {
        t[t.SceneGameCustomsLoading = 0] = "SceneGameCustomsLoading", t[t.Updata3D = 1] = "Updata3D",
            t[t.UnlockSkin = 2] = "UnlockSkin", t[t.ShowUISkin = 3] = "ShowUISkin", t[t.ShowUIGame = 4] = "ShowUIGame",
            t[t.ShowUIBox = 5] = "ShowUIBox", t[t.ShowUIStart = 6] = "ShowUIStart", t[t.ShowUISetting = 7] = "ShowUISetting",
            t[t.ShowUIReward = 8] = "ShowUIReward", t[t.ShowUIUnlock = 9] = "ShowUIUnlock",
            t[t.ShowTryHook = 10] = "ShowTryHook", t[t.ShowTrySkin = 11] = "ShowTrySkin", t[t.ShowUILodingLv = 12] = "ShowUILodingLv",
            t[t.ShowUICom = 13] = "ShowUICom", t[t.ShowUIFail = 14] = "ShowUIFail", t[t.ShowUIMain = 15] = "ShowUIMain",
            t[t.HideUISkin = 16] = "HideUISkin", t[t.ChangeGrove = 17] = "ChangeGrove", t[t.ChangeClock = 18] = "ChangeClock",
            t[t.ChangeHook = 19] = "ChangeHook", t[t.OnLevelLoad = 20] = "OnLevelLoad", t[t.ShowUIShop = 21] = "ShowUIShop",
            t[t.ShowTipsUI = 22] = "ShowTipsUI", t[t.HideUIGame = 23] = "HideUIGame", t[t.ShowUIEvent = 24] = "ShowUIEvent",
            t[t.UIClickStart = 25] = "UIClickStart", t[t.HideUIStart = 26] = "HideUIStart";
    }(m || (m = {})), _.packE(m), function (t) {
        t[t.GameStart = 0] = "GameStart", t[t.GameSuspend = 1] = "GameSuspend", t[t.GameGoOn = 2] = "GameGoOn",
            t[t.GameRestart = 3] = "GameRestart", t[t.GameEnd = 4] = "GameEnd", t[t.GameCom = 5] = "GameCom",
            t[t.GameFail = 6] = "GameFail", t[t.RoleDie = 7] = "RoleDie", t[t.RoleRevive = 8] = "RoleRevive",
            t[t.ChangeGlove = 9] = "ChangeGlove", t[t.ChangeClock = 10] = "ChangeClock", t[t.ChangeHook = 11] = "ChangeHook",
            t[t.FiringWeapons = 12] = "FiringWeapons", t[t.DragWeapons = 13] = "DragWeapons",
            t[t.NPC_Destroy = 14] = "NPC_Destroy", t[t.NPC_Spawn = 15] = "NPC_Spawn", t[t.NPC_Hit = 16] = "NPC_Hit",
            t[t.NPC_ApplyImpulse = 17] = "NPC_ApplyImpulse", t[t.LevelDestroy = 18] = "LevelDestroy",
            t[t.Explode = 19] = "Explode", t[t.StartGame = 20] = "StartGame", t[t.AddKey = 21] = "AddKey",
            t[t.TryShoot = 22] = "TryShoot", t[t.OpenTreasureBox = 23] = "OpenTreasureBox",
            t[t.ReSetTreasureBox = 24] = "ReSetTreasureBox", t[t.MoveCamera = 25] = "MoveCamera",
            t[t.ReflectBullet = 26] = "ReflectBullet", t[t.MagnetEffect = 27] = "MagnetEffect",
            t[t.MagnetBackEffect = 28] = "MagnetBackEffect", t[t.MagnetEffectAttackTarget = 29] = "MagnetEffectAttackTarget",
            t[t.HandUp = 30] = "HandUp", t[t.HandDown = 31] = "HandDown", t[t.ShootHook = 32] = "ShootHook",
            t[t.TryRetractHook = 33] = "TryRetractHook", t[t.CheckUpdateHook = 34] = "CheckUpdateHook",
            t[t.UpdateHook = 35] = "UpdateHook", t[t.LevelLoadComplete = 36] = "LevelLoadComplete",
            t[t.EnvLoadComplete = 37] = "EnvLoadComplete", t[t.CanShoot = 38] = "CanShoot",
            t[t.NoShoot = 39] = "NoShoot", t[t.TryExplode = 40] = "TryExplode", t[t.VideoStart = 41] = "VideoStart",
            t[t.VideoClose = 42] = "VideoClose", t[t.ChangeText = 43] = "ChangeText", t[t.ChangeTextEnd = 44] = "ChangeTextEnd";
    }(d || (d = {})), _.packE(d);
    let u = class extends r {
        constructor() {
            super(), this.TempMagnet = "", g.on(m.UnlockSkin, this, this.UnlockSkin), g.on(d.ChangeGlove, this, this.ChangeGlove),
                g.on(d.ChangeClock, this, this.ChangeClock), g.on(d.ChangeHook, this, this.ChangeHook),
                g.on(d.GameCom, this, this.AddLevelIndex);
        }
        UnlockSkin(t, e) {
            switch (e) {
                case p.Grove:
                    this.Push(this.data.GroveList, t);
                    break;

                case p.Hook:
                    this.Push(this.data.HookList, t);
                    break;

                case p.Clock:
                    this.Push(this.data.ClockList, t);
                    break;

                default:
                //console.error("添加皮肤失败", e, t);
            }
        }
        Push(t, e) {
            t && t.indexOf(e) < 0 ? t.push(e) : null// console.error("Push fail !!!");
        }
        ChangeGlove(t) {
            this.data.GroveName = t;
        }
        ChangeClock(t) {
            this.data.ClockName = t;
        }
        ChangeHook(t) {
            this.data.HookModel = t;
        }
        AddLevelIndex() {
            return this.data.level++, this.data.level;
        }
        AddMoney(t) {
            this.data.money += t;
        }
        AddKey(t) {
            //this.data.keyNum += t, g.event(d.AddKey, this.data.keyNum);
        }
    };
    var p;
    u = __decorate([s.DecorateInstance(), h.DecorateDataTemplate(class extends l {
        constructor() {
            super(...arguments), this.money = 0, this.HookNumber = 1, this.TryLastHookNumber = 0,
                this.GroveName = "1default_Pattern", this.HookModel = "Arrow", this.LastHook = "",
                this.IsFristTrySkin = false, this.ClockName = "OriginalWatch", this.ClockList = ["OriginalWatch"],
                this.GroveList = ["1default_Pattern"], this.HookList = ["Arrow"], this.level = 0,
                this.keyNum = 0, this.closeTryNum = 0, this.videoSkin = [];
        }
    }), __metadata("design:paramtypes", [])], u), function (t) {
        t[t.Grove = 0] = "Grove", t[t.Hook = 1] = "Hook", t[t.Clock = 2] = "Clock";
    }(p || (p = {}));
    class y { }
    let f = class extends r {
        constructor() {
            super();
        }
    };
    f = __decorate([s.DecorateInstance(), h.DecorateDataTemplate(class extends l {
        constructor() {
            super(...arguments), this.ifOpenSound = !0, this.ifOpenMusic = !0, this.ifOpenVibration = !0;
        }
    }), __metadata("design:paramtypes", [])], f);
    class L extends n {
        constructor() {
            super(...arguments), this.m_ifSetProxy = !1;
        }
        initData() {
            this.m_data = this.getNewData(), this.m_ifSetProxy && (this.m_objectProxyT = new o(),
                this.m_data = this.m_objectProxyT.setProxy(this.m_data)), this._initData();
        }
        _initData() { }
    }
    let S = class extends L {
        constructor() {
            super();
        }
    };
    var C = S = __decorate([s.DecorateInstance(), h.DecorateDataTemplate(class extends l { }), __metadata("design:paramtypes", [])], S);
    let k = class extends r {
        constructor() {
            super();
        }
    };
    k = __decorate([s.DecorateInstance(), h.DecorateDataTemplate(class extends l { }), __metadata("design:paramtypes", [])], k);
    let I = class extends r {
        constructor() {
            super();
        }
        _initData() { }
    };
    I = __decorate([s.DecorateInstance(), h.DecorateDataTemplate(class extends l {
        constructor() {
            super(...arguments), this.number = 0, this.string = "string", this.boolean = !0,
                this.array = [], this.object = {
                    a: 1,
                    b: "b",
                    c: !0
                };
        }
    }), __metadata("design:paramtypes", [])], I);
    let v = class {
        constructor() { }
        init() {
            I.instance.initData(), u.instance.initData(), f.instance.initData(), k.instance.initData(),
                C.instance.initData();
        }
    };
    var x, w = v = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], v);
    class E {
        static bindAll() { }
    }
    class R extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameSet");
        }
        onConstruct() {
            this.m_text = this.getChildAt(0);
        }
    }
    R.URL = "ui://kk7g5mmm6vcq4u";
    class A extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGamePause");
        }
        onConstruct() {
            this.m_text = this.getChildAt(0);
        }
    }
    A.URL = "ui://kk7g5mmm6vcq5g";
    class D extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameCustomsLoading");
        }
        onConstruct() {
            this.m_shade = this.getChildAt(0), this.m_text = this.getChildAt(1), this.m_progress = this.getChildAt(2);
        }
    }
    D.URL = "ui://kk7g5mmmdbmi13";
    class P extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Reward");
        }
        onConstruct() {
            this.m_Item = this.getChildAt(3), this.m_Btn_continue = this.getChildAt(4), this.m_t0 = this.getTransitionAt(0),
                this.m_Ani_autoPlay = this.getTransitionAt(1);
        }
    }
    P.URL = "ui://kk7g5mmmelaya8";
    class O extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Skin");
        }
        onConstruct() {
            this.m_Tab = this.getControllerAt(0), this.m_Btn_Close = this.getChildAt(0), this.m_Bg = this.getChildAt(4),
                this.m_List_Clock = this.getChildAt(5), this.m_List_Glove = this.getChildAt(6),
                this.m_List_Hook = this.getChildAt(7), this.m_Ani_show = this.getTransitionAt(0),
                this.m_Ani_hide = this.getTransitionAt(1);
        }
    }
    O.URL = "ui://kk7g5mmmelayak";
    class b extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Main");
        }
        onConstruct() {
            this.m_Txt_level = this.getChildAt(0), this.m_Btn_shoot = this.getChildAt(1), this.m_Ani_autoPlay = this.getTransitionAt(0);
        }
    }
    b.URL = "ui://kk7g5mmmen1nc0";
    class T extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Game");
        }
        onConstruct() {
            this.m_Btn_skip = this.getChildAt(1), this.m_Key = this.getChildAt(2), this.m_Btn_useIt = this.getChildAt(3),
                this.m_Ani_autoPlay = this.getTransitionAt(0), this.m_Ani_hide = this.getTransitionAt(1);
        }
    }
    T.URL = "ui://kk7g5mmmen1nc1";
    class U extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Key_Right");
        }
        onConstruct() {
            this.m_number = this.getControllerAt(0);
        }
    }
    U.URL = "ui://kk7g5mmmen1nc6";
    class B extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Event");
        }
        onConstruct() {
            this.m_Combo = this.getChildAt(0), this.m_Ani_combo = this.getTransitionAt(0);
        }
    }
    B.URL = "ui://kk7g5mmmen1nc7";
    class M extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "TrySkin");
        }
        onConstruct() {
            this.m_number = this.getControllerAt(0), this.m_试用2个钩子 = this.getControllerAt(1),
                this.m_Txt_title = this.getChildAt(2), this.m_Txt_info = this.getChildAt(4), this.m_Item = this.getChildAt(5),
                this.m_Btn_ok = this.getChildAt(6), this.m_Btn_share = this.getChildAt(7), this.m_Btn_ad = this.getChildAt(8),
                this.m_Btn_nothanks = this.getChildAt(9), this.m_Ani_autoPlay = this.getTransitionAt(0),
                this.m_Ani_close = this.getTransitionAt(1);
        }
    }
    M.URL = "ui://kk7g5mmmen1ncb";
    class G extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Title");
        }
        onConstruct() {
            this.m_Txt_state = this.getChildAt(1), this.m_Txt_level = this.getChildAt(2);
        }
    }
    G.URL = "ui://kk7g5mmmen1nce";
    class H extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Cash_mini");
        }
        onConstruct() {
            this.m_Txt_cash = this.getChildAt(2);
        }
    }
    H.URL = "ui://kk7g5mmmen1ncf";
    class N extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Combo");
        }
        onConstruct() {
            this.m_number = this.getChildAt(1);
        }
    }
    N.URL = "ui://kk7g5mmmen1ncj";
    class V extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Box");
        }
        onConstruct() {
            this.m_Txt_number = this.getChildAt(2), this.m_Item = this.getChildAt(3), this.m_Btn_ad = this.getChildAt(4),
                this.m_Btn_nothanks = this.getChildAt(5), this.m_t0 = this.getTransitionAt(0), this.m_t1 = this.getTransitionAt(1),
                this.m_Ani_close = this.getTransitionAt(2);
        }
    }
    V.URL = "ui://kk7g5mmmen1nck";
    class F extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Complete");
        }
        onConstruct() {
            this.m_Title = this.getChildAt(1),
                this.m_Btn_ad = this.getChildAt(2),
                this.m_Btn_nothanks = this.getChildAt(4),
                this.m_Ani_autoPlay = this.getTransitionAt(0);
            class item extends Laya.Box {
                constructor() {
                    super();
                    this.img = new Laya.Image();
                    this.img.name = "thumb";
                    this.size(400, 300);
                    this.img.size(400, 300);
                    this.addChild(this.img);
                }
            }

            this.m_List = new Laya.List();
            this.m_List.size(800, 600);
            this.m_List.itemRender = item;
            this.m_List.scale(0.7, 0.7);
            this.m_List.centerX = 0;
            this.m_List.centerY = -20;
            this.displayObject.addChild(this.m_List);
            platform.getInstance().initList(this.m_List);
        }
    }
    F.URL = "ui://kk7g5mmmfyxrba";
    class W extends fgui.GButton {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Btn_AdFull");
        }
        onConstruct() {
            this.m_mask = this.getChildAt(3), this.m_t0 = this.getTransitionAt(0);
        }
    }
    W.URL = "ui://kk7g5mmmfyxrbc";
    class j extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Fail");
        }
        onConstruct() {
            this.m_type = this.getControllerAt(0), this.m_Btn_ad = this.getChildAt(1), this.m_Btn_restart = this.getChildAt(2),
                this.m_Title = this.getChildAt(3), this.m_Btn_restart2 = this.getChildAt(4), this.m_Ani_autoPlay = this.getTransitionAt(0);

            class item extends Laya.Box {
                constructor() {
                    super();
                    this.img = new Laya.Image();
                    this.img.name = "thumb";
                    this.size(400, 300);
                    this.img.size(400, 300);
                    this.addChild(this.img);
                }
            }

            this.m_List = new Laya.List();
            this.m_List.size(800, 600);
            this.m_List.itemRender = item;
            this.m_List.scale(0.7, 0.7);
            this.m_List.centerX = 0;
            this.m_List.centerY = -20;
            this.displayObject.addChild(this.m_List);
            platform.getInstance().initList(this.m_List);
        }
    }
    j.URL = "ui://kk7g5mmmfyxrbj";
    class K extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Start");
        }
        onConstruct() {
            this.m_Btn_start = this.getChildAt(0), this.m_Btn_custom = this.getChildAt(1)
                , this.m_Btn_setting = this.getChildAt(2),
                this.m_Cash = this.getChildAt(3),
                this.m_Btn_useIt = this.getChildAt(4),
                this.m_Btn_noAds = this.getChildAt(6),
                this.m_Ani_show = this.getTransitionAt(0),
                this.m_t1 = this.getTransitionAt(1),
                this.m_Ani_close = this.getTransitionAt(2);
            this.m_Btn_setting.visible = false;
            this.m_Btn_music = new fgui.GLoader();
            this.m_Btn_music.icon = "res/btn_sound_on.png";
            this.m_Btn_music.setXY(50, 180);
            this.m_Btn_music.setSize(50, 50);
            this.addChild(this.m_Btn_music);
        }
    }
    K.URL = "ui://kk7g5mmmfyxrbl";
    class z extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Cash");
        }
        onConstruct() {
            this.m_Txt_num = this.getChildAt(1);
        }
    }
    z.URL = "ui://kk7g5mmmfyxrbr";
    class X extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameLoading");
        }
        onConstruct() {
            this.m_shade = this.getChildAt(0), this.m_text = this.getChildAt(1), this.m_progress = this.getChildAt(2);
        }
    }
    X.URL = "ui://kk7g5mmmg7a1o";
    class Y extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGamePlay");
        }
        onConstruct() {
            this.m_text = this.getChildAt(0);
        }
    }
    Y.URL = "ui://kk7g5mmmg7a1r";
    class J extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameStart");
        }
        onConstruct() {
            this.m_text = this.getChildAt(0);
        }
    }
    J.URL = "ui://kk7g5mmmg7a1v";
    class $ extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameTestUI");
        }
        onConstruct() {
            this.m_bg = this.getChildAt(0);
        }
    }
    $.URL = "ui://kk7g5mmmh66e9z";
    class q extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "TryHook");
        }
        onConstruct() {
            this.m_number = this.getControllerAt(0), this.m_试用2个钩子 = this.getControllerAt(1),
                this.m_Txt_title = this.getChildAt(2), this.m_Txt_info = this.getChildAt(4), this.m_Item = this.getChildAt(5),
                this.m_Btn_ok = this.getChildAt(6), this.m_Btn_share = this.getChildAt(7), this.m_Btn_ad = this.getChildAt(8),
                this.m_Btn_nothanks = this.getChildAt(9), this.m_Ani_autoPlay = this.getTransitionAt(0),
                this.m_Ani_close = this.getTransitionAt(1);
        }
    }
    q.URL = "ui://kk7g5mmmiv8kd2";
    class Z extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Unlock");
        }
        onConstruct() {
            this.m_number = this.getControllerAt(0), this.m_试用2个钩子 = this.getControllerAt(1),
                this.m_Txt_title = this.getChildAt(2), this.m_Txt_info = this.getChildAt(4), this.m_Btn_ok = this.getChildAt(5),
                this.m_Item = this.getChildAt(6), this.m_Ani_autoPlay = this.getTransitionAt(0),
                this.m_Ani_close = this.getTransitionAt(1);
        }
    }
    Z.URL = "ui://kk7g5mmmiv8kd3";
    class Q extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameEnd");
        }
        onConstruct() {
            this.m_text = this.getChildAt(0);
        }
    }
    Q.URL = "ui://kk7g5mmmlaxd19";
    class tt extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameTestMain");
        }
        onConstruct() {
            this.m_UIButton = this.getChildAt(0), this.m_UI = this.getChildAt(1), this.m_test = this.getChildAt(3),
                this.m_testText = this.getChildAt(4), this.m_dataTest = this.getChildAt(6), this.m_dataTestText = this.getChildAt(7),
                this.m__test = this.getChildAt(9);
        }
    }
    tt.URL = "ui://kk7g5mmmo9js9x";
    class et extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameCom");
        }
        onConstruct() {
            this.m_text = this.getChildAt(0);
        }
    }
    et.URL = "ui://kk7g5mmmq3ng9w";
    class it extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "ShopScene");
        }
        onConstruct() {
            this.m_ShopPlan = this.getChildAt(0),
                this.m_BackScnen = this.getChildAt(1),
                this.m_Cash = this.getChildAt(2);
            this.m_Btn_GetCoin = new fgui.GLoader();
            this.m_Btn_GetCoin.icon = "res/300.png";
            this.m_Btn_GetCoin.setXY(500, 200);
            this.m_Btn_GetCoin.setScale(0.7, 0.7);
            this.m_Btn_GetCoin.setSize(301, 104);
            this.addChild(this.m_Btn_GetCoin);
        }
    }
    it.URL = "ui://kk7g5mmmqwiocy";
    class st extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "ShopBtnPlan");
        }
        onConstruct() {
            this.m_ShopBtn_1 = this.getChildAt(0), this.m_ShopBtn_2 = this.getChildAt(1), this.m_ShopBtn_3 = this.getChildAt(2),
                this.m_ShopBtn_4 = this.getChildAt(3), this.m_ShopBtn_5 = this.getChildAt(4), this.m_ShopBtn_6 = this.getChildAt(5),
                this.m_ShopBtn_7 = this.getChildAt(6), this.m_ShopBtn_8 = this.getChildAt(7), this.m_ShopBtn_9 = this.getChildAt(8);
        }
    }
    st.URL = "ui://kk7g5mmmqwiod0";
    class at extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "TipsCom");
        }
        onConstruct() {
            this.m_Tips_Txt = this.getChildAt(1), this.m_Play = this.getTransitionAt(0);
        }
    }
    at.URL = "ui://kk7g5mmmqwiod1";
    class nt extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameMain");
        }
        onConstruct() {
            this.m_text = this.getChildAt(0);
        }
    }
    nt.URL = "ui://kk7g5mmmsyta9f";
    class ot extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "PGameTestPlatform");
        }
        onConstruct() {
            this.m_bg = this.getChildAt(0), this.m_lookVAd = this.getChildAt(1), this.m_lookVAdText = this.getChildAt(2),
                this.m__lookVAd = this.getChildAt(3), this.m_share = this.getChildAt(4), this.m_shareText = this.getChildAt(5),
                this.m__share = this.getChildAt(6), this.m_showToast = this.getChildAt(7), this.m_showToastText = this.getChildAt(8),
                this.m__showToast = this.getChildAt(9);
        }
    }
    ot.URL = "ui://kk7g5mmmt1pw9y";
    class rt extends fgui.GButton {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "SkinItem");
        }
        onConstruct() {
            this.m_state = this.getControllerAt(1), this.m_item = this.getChildAt(4);
        }
    }
    rt.URL = "ui://kk7g5mmmw2lcay";
    class ht extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("GameMain", "Setting");
        }
        onConstruct() {
            this.m_Btn_close = this.getChildAt(2), this.m_Btn_sound = this.getChildAt(3), this.m_Btn_haptic = this.getChildAt(4),
                this.m_Ani_show = this.getTransitionAt(0), this.m_Ani_close = this.getTransitionAt(1);
        }
    }
    ht.URL = "ui://kk7g5mmmw2lcaz";
    class lt {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(R.URL, R), fgui.UIObjectFactory.setExtension(A.URL, A),
                fgui.UIObjectFactory.setExtension(D.URL, D), fgui.UIObjectFactory.setExtension(P.URL, P),
                fgui.UIObjectFactory.setExtension(O.URL, O), fgui.UIObjectFactory.setExtension(b.URL, b),
                fgui.UIObjectFactory.setExtension(T.URL, T), fgui.UIObjectFactory.setExtension(U.URL, U),
                fgui.UIObjectFactory.setExtension(B.URL, B), fgui.UIObjectFactory.setExtension(M.URL, M),
                fgui.UIObjectFactory.setExtension(G.URL, G), fgui.UIObjectFactory.setExtension(H.URL, H),
                fgui.UIObjectFactory.setExtension(N.URL, N), fgui.UIObjectFactory.setExtension(V.URL, V),
                fgui.UIObjectFactory.setExtension(F.URL, F), fgui.UIObjectFactory.setExtension(W.URL, W),
                fgui.UIObjectFactory.setExtension(j.URL, j), fgui.UIObjectFactory.setExtension(K.URL, K),
                fgui.UIObjectFactory.setExtension(z.URL, z), fgui.UIObjectFactory.setExtension(X.URL, X),
                fgui.UIObjectFactory.setExtension(Y.URL, Y), fgui.UIObjectFactory.setExtension(J.URL, J),
                fgui.UIObjectFactory.setExtension($.URL, $), fgui.UIObjectFactory.setExtension(q.URL, q),
                fgui.UIObjectFactory.setExtension(Z.URL, Z), fgui.UIObjectFactory.setExtension(Q.URL, Q),
                fgui.UIObjectFactory.setExtension(tt.URL, tt), fgui.UIObjectFactory.setExtension(et.URL, et),
                fgui.UIObjectFactory.setExtension(it.URL, it), fgui.UIObjectFactory.setExtension(st.URL, st),
                fgui.UIObjectFactory.setExtension(at.URL, at), fgui.UIObjectFactory.setExtension(nt.URL, nt),
                fgui.UIObjectFactory.setExtension(ot.URL, ot), fgui.UIObjectFactory.setExtension(rt.URL, rt),
                fgui.UIObjectFactory.setExtension(ht.URL, ht);
        }
    }
    class ct extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("InitEmptyScreen", "EmptyScreenUI");
        }
        onConstruct() {
            this.m_bg = this.getChildAt(0);
        }
    }
    ct.URL = "ui://7ktzib8oq3ng0";
    class mt {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(ct.URL, ct);
        }
    }
    class dt extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("InitLoad", "initLoadUI");
        }
        onConstruct() {
            this.m_bg = this.getChildAt(0), this.m_progress = this.getChildAt(1), this.m_loading_progress = this.getChildAt(2),
                this.m_text_logo = this.getChildAt(3), this.m_text_explain = this.getChildAt(4),
                this.m_text_v = this.getChildAt(5), this.m_text_laya_v = this.getChildAt(6), this.m_text_game_explain = this.getChildAt(7);
        }
    }
    dt.URL = "ui://n3oedpp6nihr0";
    class gt {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(dt.URL, dt);
        }
    }
    class _t {
        static bindAll() { }
    }
    !function (t) {
        t.RootRes = "res", t.ConfigJson = "ConfigJson", t.Font = "Font", t.FGUI = "FGUI",
            t.SceneJson = "SceneJson", t.Other = "Other", t.icon = "icon", t.img = "img", t.music = "music",
            t.sound = "sound", t.skin = "skin";
    }(x || (x = {}));
    let ut = class {
        constructor() {
            this.m_KeyResList = {}, this.m_KeyResList = {
                [x.RootRes]: x.RootRes + "/",
                [x.ConfigJson]: x.RootRes + "/" + x.ConfigJson + "/",
                [x.FGUI]: x.RootRes + "/" + x.FGUI + "/",
                [x.SceneJson]: x.RootRes + "/" + x.SceneJson + "/",
                [x.Font]: x.RootRes + "/" + x.Font + "/",
                [x.Other]: x.RootRes + "/" + x.Other + "/",
                [x.icon]: x.RootRes + "/" + x.Other + "/" + x.icon + "/",
                [x.img]: x.RootRes + "/" + x.Other + "/" + x.img + "/",
                [x.music]: x.RootRes + "/" + x.Other + "/" + x.music + "/",
                [x.sound]: x.RootRes + "/" + x.Other + "/" + x.sound + "/",
                [x.skin]: x.RootRes + "/" + x.Other + "/" + x.skin + "/"
            };
        }
        static ifKeyRes(t) {
            return -1 != Object.keys(this.instance.m_KeyResList).findIndex(e => e == t);
        }
        static getResURL(t) {
            return this.instance.m_KeyResList[t];
        }
        static addResUrl(t, e) {
            this.instance.m_KeyResList[t] = e;
        }
        static editKeyResList(t, e) {
            let s = this.instance.m_KeyResList[t];
            if (void 0 !== s) {
                for (let t in this.instance.m_KeyResList) this.instance.m_KeyResList[t] = this.instance.m_KeyResList[t].replace(s, e);
                console.log(...i.packLog("修改关键点资源路径", s, "替换成", e));
            } else console.warn(...i.packWarn("修改资源路径失败，没有" + t + "这个关键路径！"));
        }
    };
    var pt, yt, ft, Lt, St, Ct, kt, It, vt, xt, wt, Et = ut = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], ut);
    class Rt {
        static SceneConfigURL(t) {
            return Et.getResURL(x.SceneJson) + t + ".json";
        }
        static ConfigJsonURL(t) {
            return Et.getResURL(x.ConfigJson) + t;
        }
        static FGUIPackURL(t) {
            return Et.getResURL(x.FGUI) + t;
        }
        static FontURL(t) {
            return Et.getResURL(x.Font) + t;
        }
        static PrefabURL(t) {
            if (this._prefabsSceneCache[t]) return Et.getResURL(this._prefabsSceneCache[t]) + "Conventional/" + t + ".lh";
            for (let e in this._AllScenePrefabsNames) if (-1 != this._AllScenePrefabsNames[e].indexOf("@" + t + "@")) return this._prefabsSceneCache[t] = e,
                Et.getResURL(e) + "Conventional/" + t + ".lh";
            // console.error(...i.packError("没有在场景找到预制体", t, "可能是没有导出场景预制体列表导致的。"));
        }
        static setPrefabSceneNames(t) {
            for (let e in t) this._AllScenePrefabsNames[e] = t[e];
        }
    }
    Rt._AllScenePrefabsNames = {}, Rt._prefabsSceneCache = {};
    class At {
        static Load(t, e, i, s) {
            if (Array.isArray(t) && (t = t.filter(Boolean)), !t || Array.isArray(t) && 0 == t.length) return i.run(),
                void (s && (s.args = [1], s.run()));
            switch (e) {
                case pt.D3:
                    Laya.loader.create(t, i, s);
                    break;

                case pt.D2:
                    Laya.loader.load(t, i, s);
            }
        }
        static Load3D(t, e, i) {
            this.Load(t, pt.D3, e, i);
        }
        static Load2D(t, e, i) {
            this.Load(t, pt.D2, e, i);
        }
        static Load3DAsync(t, e) {
            return new Promise(i => {
                At.Load3D(t, Laya.Handler.create(null, () => {
                    i();
                }), e);
            });
        }
        static Load2DAsync(t, e) {
            return new Promise(function (i) {
                At.Load2D(t, Laya.Handler.create(null, () => {
                    i();
                }), e);
            });
        }
        static GetRes(t, e = !1) {
            let s = Laya.loader.getRes(t);
            if (s) try {
                return e ? s : s.clone();
            } catch (e) {
                //console.error(e), console.error(t);
            } else null//console.error(...i.packError("资源尚未加载", t));
        }
        static ClearRes(t) {
            Laya.loader.clearRes(t);
        }
    }
    !function (t) {
        t[t.D3 = 0] = "D3", t[t.D2 = 1] = "D2";
    }(pt || (pt = {}));
    class Dt {
        static DecorateConfigProxy(t) {
            return function (e) {
                e.prototype.configTemplate = t;
            };
        }
        static BuildConfigs(t) {
            let e;
            for (let i of t) switch (e = Rt.ConfigJsonURL(i.fileName), i.type) {
                case "config":
                    i.datas = this.getConfigJsonData(e);
                    break;

                case "const":
                    i.data = this.getConfigJsonData(e);
            }
        }
        static getConfigJsonData(t) {
            let e = At.GetRes(t, !0);
            if (At.ClearRes(t), e.zip) {
                let s = Date.now();
                e.data = JSON.parse(pako.inflate(e.data, {
                    to: "string"
                })), (s = Date.now() - s) > 500 && console.warn(...i.packWarn("配置表解压时间过长，可能是配置表文件过大->", t));
            }
            return e.data;
        }
    }
    class Pt { }
    Pt.FGUI = {
        packageFileExtension: "bin"
    };
    class Ot {
        constructor(t, e = -1) {
            this.packPath = t, this.atliasCount = e;
        }
        asyncLoad(t) {
            let e = [];
            return this.getResURL(e), At.Load2DAsync(e, t);
        }
        getResURL(t) {
            if (t.push({
                url: this.packPath + "." + Pt.FGUI.packageFileExtension,
                type: Laya.Loader.BUFFER
            }), this.atliasCount >= 0) {
                t.push({
                    url: this.packPath + "_atlas0.png",
                    type: Laya.Loader.IMAGE
                });
                for (let e = 1; e <= this.atliasCount; e++) t.push({
                    url: this.packPath + "_atlas0_" + e + ".png",
                    type: Laya.Loader.IMAGE
                });
            }
        }
    }
    class bt {
        static load(t, e, i, s) {
            if (0 == t.length) return e.run(), void (i && (i.args = [1], i.run()));
            let a = (t = [...t]).length, n = () => {
                if (t.length > 0) {
                    let e = t.shift();
                    e.loadAsync(Laya.Handler.create(this, e => {
                        i.args = [(a - t.length - 1 + e) / a], i.run();
                    })).then(() => {
                        s.args = [e], s.run(), n();
                    });
                } else e.run();
            };
            n();
        }
        static loadAsync(t, e, i) {
            return new Promise(s => {
                this.load(t, Laya.Handler.create(this, () => {
                    s();
                }), e, i);
            });
        }
    }
    class Tt {
        constructor() {
            this.init(), this._init();
        }
        _init() {
            this.loadBefore();
        }
        load(t) {
            console.log(...i.packCom("开始加载游戏初始化资源"));
            let e = this.getLoadItems();
            bt.loadAsync(e, Laya.Handler.create(this, t => {
                this.loadPlan(t);
            }, void 0, !1), Laya.Handler.create(this, this.loadItemsCom, void 0, !1)).then(() => {
                console.log(...i.packCom("游戏加载完成")), this.loadCom(), t && t.run();
            });
        }
        init() { }
        loadBefore() { }
        getLoadItems() {
            return [];
        }
        loadPlan(t) { }
        loadItemsCom(t) { }
        loadCom() { }
    }
    class Ut {
        constructor(t, e, i, s) {
            this.m_res = t, this.m_loadModel = e, this.m_key = i, this.m_comBack = s;
        }
        get key() {
            return this.m_key;
        }
        load(t, e) {
            this.m_comBack ? t ? At.Load(this.m_res, this.m_loadModel, Laya.Handler.create(this, () => {
                this.m_comBack.run(), t.run();
            }), e) : At.Load(this.m_res, this.m_loadModel, this.m_comBack, e) : At.Load(this.m_res, this.m_loadModel, t, e);
        }
        loadAsync(t) {
            return new Promise(e => {
                this.load(Laya.Handler.create(this, () => {
                    e();
                }), t);
            });
        }
    }
    !function (t) {
        t.type = "config";
        t.DataType = class { }, t.datas = [], t.fileName = "ClockConfig.json";
    }(yt || (yt = {})), function (t) {
        t.type = "config";
        t.DataType = class { }, t.datas = [], t.fileName = "GroveConfig.json";
    }(ft || (ft = {})), function (t) {
        t.type = "config";
        t.DataType = class { }, t.datas = [], t.fileName = "HookConfig.json";
    }(Lt || (Lt = {})), function (t) {
        t.type = "config";
        t.DataType = class { }, t.datas = [], t.fileName = "LevelConfig.json";
    }(St || (St = {})), function (t) {
        t.type = "config";
        t.DataType = class { }, t.datas = [], t.fileName = "SceneNodeConfig.json";
    }(Ct || (Ct = {})), function (t) {
        t.type = "config";
        t.DataType = class { }, t.datas = [], t.fileName = "TestConfig.json";
    }(kt || (kt = {})), function (t) {
        t.type = "const";
        t.DataType = class { }, t.data = null, t.fileName = "TestConst.json";
    }(It || (It = {}));
    class Bt {
        static getAllConfig() {
            let t = [];
            return t.push(yt), t.push(ft), t.push(Lt), t.push(St), t.push(Ct), t.push(kt), t.push(It),
                t;
        }
    }
    !function (t) {
        t.Prefab1 = "@Player@@Wooden_Box@@WaterTankPlank_14@@WaterTankPlank_25@@WaterTankPlank_27@@WaterTankPlank_27_1@@Wooden_Scaffoldings_8@@Airship@@Forklift@@SedanCar@@truck@@Brick@@Container_Blue@@Explosive_Barrel@@Bullet@",
            t.Prefab2 = "@Rifle@@wp@@Iron@@Iron_Hand@@Plank_Plan@@Stand_Shop@@TreasureBoxPlan@@Aircraft@@TreasureBox@@PlayPoint@@Sky@@CityScenePlan@@ForestScenePlan@@Google_Color@@Ben10_Color@@Ben10_Watch@@BMW_Color@@Chacker_Color@@Ferrari_Color@@Gold_Watch@@Iron_Man_Wach@@OriginalWatch@@Spooky_Color@@Target_Color@@UPS_Color@@StandHand@@Missile@",
            t.Prefab3 = "@Agent@@Coah@@Cop@@man@@Ninja@@Terriest@@Woman@@Arrow@@Claw@@Fist@@Grappling_Hook@@Knuckles@@Red_Bomb@@Sai@@Saw@@Spike_Brick@@polySurface2@@CameraRoot@@bz@@citie@@Explosion@@collider@";
    }(vt || (vt = {})), function (t) {
        t.Scene = "Scene";
    }(xt || (xt = {}));
    class Mt { }
    Mt.subpackages = [{
        name: "res",
        root: "res/"
    }, {
        name: "Prefab1",
        root: "Prefab1/"
    }, {
        name: "Prefab2",
        root: "Prefab2/"
    }, {
        name: "Prefab3",
        root: "Prefab3/"
    }];
    class Gt { }
    Gt.CDNURLs = [];
    class Ht {
        static load() {
            return new Promise(t => {
                Laya.loader.load(["loading.json", "initLoad/bg.png", "initLoad/a.png", "initLoad/b.png"], Laya.Handler.create(this, () => {
                    t();
                }));
            });
        }
        static open() {
            return new Promise(t => {
                Laya.Scene.open("loading.json", void 0, void 0, Laya.Handler.create(this, e => {
                    this.m_scene = e, this.m_bg = this.m_scene.getChildByName("bg"), this.m_pan = this.m_scene.getChildByName("pan"),
                        this.updateView(), Laya.stage.on(Laya.Event.RESIZE, this, this.updateView), this.openLater().then(t);
                }));

            });
        }
        static openLater() {
            return Promise.resolve();
        }
        static setLoadPlan(t) {
            this.m_pan.set_scaleX(t);
        }
        static close() {
            platform.getInstance().showBanner()
            platform.getInstance().hideSplash()
            this.m_scene && this.m_scene.destroy(), this.m_scene = null, this.m_bg = null, Laya.stage.offAllCaller(this);

        }
        static updateView() {
            let t = Laya.stage.width, e = Laya.stage.height;
            this.m_scene.width = t, this.m_scene.height = e, this.m_bg.width = t, this.m_bg.height = e;
        }
    }
    class Nt extends Tt {
        init() { }
        loadBefore() {
            for (let t in vt) Et.addResUrl(t, Et.getResURL(x.RootRes) + `${t}/`);
            Rt.setPrefabSceneNames(vt);
            for (let t of Mt.subpackages) Et.editKeyResList(t.name, t.root);
            for (let t of Gt.CDNURLs) Et.editKeyResList(t.name, t.root);
        }
        getLoadItems() {
            let t = [];
            return this.immitSubpackageLoadItems(t), this.immitFGUiLoadItems(t), this.immitConfigLoadItems(t),
                this.immitOtherLoadItems(t), t;
        }
        immitSubpackageLoadItems(t) { }
        immitFGUiLoadItems(t) {
            this.FGUIBinder(), t.push(this.getFGUILoadItems("GameBag")), t.push(this.getFGUILoadItems("GameCommon")),
                t.push(this.getFGUILoadItems("_Test")), t.push(this.getFGUILoadItems("GameMain", 3));
        }
        FGUIBinder() {
            mt.bindAll(), gt.bindAll(), E.bindAll(), _t.bindAll(), lt.bindAll();
        }
        getFGUILoadItems(t, e, i) {
            let s = [];
            return new Ot(Rt.FGUIPackURL(t), e).getResURL(s), new Ut(s, pt.D2, t, Laya.Handler.create(this, () => {
                this.addFGUIPackage(t), i && i.run();
            }));
        }
        addFGUIPackage(t) {
            fgui.UIPackage.addPackage(Rt.FGUIPackURL(t));
        }
        immitConfigLoadItems(t) {
            let e = Bt.getAllConfig().map(t => Rt.ConfigJsonURL(t.fileName)), s = [];
            for (let t in xt) s.push(Rt.SceneConfigURL(xt[t]));
            t.push(new Ut([...e, ...s], pt.D2, "config", Laya.Handler.create(this, () => {
                Dt.BuildConfigs(Bt.getAllConfig()), console.log(...i.packLogLight("所有配置表内容->", Bt.getAllConfig()));
            })));
        }
        immitOtherLoadItems(t) { }
        initEmptyScreen() { }
        initLoad() { }
        loadPlan(t) {
            Ht.setLoadPlan(t);
        }
        loadItemsCom(t) { }
        loadCom() {
            Ht.close();
        }
    }
    class Vt {
        static getItem(t) {
            if (this.poolList[t] && this.poolList[t].length > 0) return this.poolList[t].pop();
            switch (t) {
                case wt.v3:
                    return new Laya.Vector3();

                case wt.v2:
                    return new Laya.Vector2();
            }
        }
        static recycleItem(t, ...e) {
            this.poolList[t] || (this.poolList[t] = []);
            for (let i of e) this.poolList[t].includes(i) || this.poolList[t].push(i);
        }
        static getV3() {
            let t = this.getItem(wt.v3);
            return t.setValue(0, 0, 0), t;
        }
        static recycleV3(...t) {
            this.recycleItem(wt.v3, ...t);
        }
        static getV2() {
            let t = this.getItem(wt.v2);
            return t.setValue(0, 0), t;
        }
        static recycleV2(...t) {
            this.recycleItem(wt.v2, ...t);
        }
    }
    Vt.poolList = {}, function (t) {
        t[t.v3 = 0] = "v3", t[t.v2 = 1] = "v2";
    }(wt || (wt = {}));
    class Ft {
        static parseVector3(t, e) {
            var i = t.split(",");
            e.setValue(Number(i[0]), Number(i[1]), Number(i[2]));
        }
        static setV3Length(t, e) {
            let i = Laya.Vector3.scalarLength(t);
            if (0 != i) {
                let s = e / i;
                t.x = t.x * s, t.y = t.y * s, t.z = t.z * s;
            }
        }
        static PotLerpMove(t, e, i, s, a) {
            if (!s) return null//void console.error("必须有一个输出的向量！");
            let n = Laya.Vector3.distance(t, e);
            return Laya.Vector3.lerp(t, e, i, s), 1 - n / a;
        }
        static PotConstantSpeedMove(t, e, i, s) {
            if (!s) return null//void console.error("必须有一个输出的向量！");
            let a, n = new Laya.Vector3();
            return Laya.Vector3.subtract(e, t, n), Laya.Vector3.scalarLength(n) > i ? (this.setV3Length(n, i),
                a = !1) : a = !0, Laya.Vector3.add(t, n, s), a;
        }
        static RotateV3(t, e, i = this.rotateAxisV3) {
            var s = new Laya.Quaternion();
            Laya.Quaternion.createFromAxisAngle(i, e / 180 * Math.PI, s), Laya.Vector3.transformQuat(t, s, t);
        }
    }
    Ft.rotateAxisV3 = new Laya.Vector3(0, 1, 0);
    class Wt {
        static ifPrefabsConfig(t) {
            return t.prefabName && !0;
        }
        static setNode(t, e) {
            t.name = e.name, e.transform ? (e.transform.position ? Ft.parseVector3(e.transform.position, t.transform.localPosition) : t.transform.localPosition.setValue(0, 0, 0),
                e.transform.euler ? Ft.parseVector3(e.transform.euler, t.transform.localRotationEuler) : t.transform.localRotationEuler.setValue(0, 0, 0),
                e.transform.scale ? Ft.parseVector3(e.transform.scale, t.transform.localScale) : t.transform.localScale.setValue(1, 1, 1)) : (t.transform.localPosition.setValue(0, 0, 0),
                    t.transform.localRotationEuler.setValue(0, 0, 0), t.transform.localScale.setValue(1, 1, 1)),
                t.transform.localPosition = t.transform.localPosition, t.transform.localRotationEuler = t.transform.localRotationEuler,
                t.transform.localScale = t.transform.localScale;
            let i = e;
            "undefined" != i.prefabName && i.prefabDiffer && this.setDiffer(t, i.prefabDiffer);
        }
        static setDiffer(t, e) {
            let i = Vt.getV3();
            if (e.child) for (let i of e.child) this.setDiffer(t.getChildAt(i.index), i);
            let s = [Vt.getV3(), Vt.getV3(), Vt.getV3()];
            e._transform && (e._transform.position && Ft.parseVector3(e._transform.position, s[0]),
                e._transform.euler && Ft.parseVector3(e._transform.euler, s[1]), e._transform.scale && Ft.parseVector3(e._transform.scale, s[2])),
                e.transform && (e.transform.position && (Ft.parseVector3(e.transform.position, i),
                    Laya.Vector3.add(s[0], i, i), i.cloneTo(t.transform.localPosition), t.transform.localPosition = t.transform.localPosition),
                    e.transform.euler && (Ft.parseVector3(e.transform.euler, i), Laya.Vector3.add(s[1], i, i),
                        i.cloneTo(t.transform.localRotationEuler), t.transform.localRotationEuler = t.transform.localRotationEuler),
                    e.transform.scale && (Ft.parseVector3(e.transform.scale, i), Laya.Vector3.add(s[2], i, i),
                        i.cloneTo(t.transform.localScale), t.transform.localScale = t.transform.localScale)),
                Vt.recycleV3(i, ...s);
        }
        static getPrefabsNames(t, e) {
            if (!e) return;
            let i = e.prefabName;
            i ? t.includes(i) || t.push(i) : e.child && e.child.length > 0 && e.child.forEach(e => {
                this.getPrefabsNames(t, e);
            });
        }
        static buildNode(t, e, i) {
            if (!e) return;
            let s, a = e.prefabName;
            a ? (s = At.GetRes(Rt.PrefabURL(a)), t.addChild(s), Wt.setNode(s, e), i[a] = i[a] || [],
                i[a].push(s)) : e.child && e.child.length > 0 && (s = new Laya.Sprite3D(), t.addChild(s),
                    Wt.setNode(s, e), e.child.forEach(t => {
                        this.buildNode(s, t, i);
                    }));
        }
    }
    class jt {
        constructor(t, e) {
            this.m_scene = e, this.m_ifDelete = !0, this.m_nodeConfigs = t, this.m_prefabsNames = [],
                this.m_nodeConfigs.forEach(t => {
                    Wt.getPrefabsNames(this.m_prefabsNames, t);
                });
        }
        get scene() {
            return this.m_scene;
        }
        get nodeConfigs() {
            return this.m_nodeConfigs;
        }
        get ifDelete() {
            return this.m_ifDelete;
        }
        get node() {
            return this.m_node;
        }
        get prefabs() {
            return this.m_prefabs;
        }
        get prefabsName() {
            return this.m_prefabsNames;
        }
        get ifLoad() {
            return this.m_ifLoad;
        }
        asyncLoad(t) {
            let e = this.m_prefabsNames.map(t => Rt.PrefabURL(t));
            return At.Load3DAsync(e, Laya.Handler.create(this, e => {
                this.loadProgress(e), t && (t.args = [e], t.run());
            }, void 0, !1));
        }
        asyncBuild(t) {
            return this.m_ifLoad = !0, new Promise(e => {
                this.asyncLoad(t).then(() => {
                    this.m_ifLoad = !1, this.build(), e(this);
                });
            });
        }
        loadProgress(t) {
            this.m_scene.loadProgress(t, this);
        }
        build() {
            if (!this.m_ifDelete) return;
            let t;
            this.m_ifDelete = !1, this.m_scene.addOnNode(this), this.m_node = new Laya.Node(),
                this.m_scene.environment.scene.addChild(this.m_node), this.m_prefabs = {}, this.m_nodeConfigs.forEach(e => {
                    t = new Laya.Sprite3D(), this.m_node.addChild(t), Wt.buildNode(t, e, this.m_prefabs);
                });
        }
        delete() {
            this.m_ifDelete || (this.m_ifLoad ? console.warn(...i.packWarn("场景节点还在构建却试图删除。")) : (this.m_ifDelete = !0,
                this.m_scene.deleteOnNode(this), this.m_node.destroy(), this.m_node = null, this.m_prefabs = null));
        }
    }
    class Kt {
        static get Scene3D() {
            return this.m_Scene3D;
        }
        static get Camera() {
            return this.m_Camera;
        }
        static get Light() {
            return this.m_Light;
        }
        static get Environment() {
            return {
                scene: this.m_Scene3D,
                camera: this.m_Camera,
                light: this.m_Light
            };
        }
        static init() {
            this.m_Scene3D = Laya.stage.addChild(new Laya.Scene3D()), this.m_Camera = new Laya.Camera(),
                this.m_Camera.clearColor = new Laya.Vector4(0, 0, 0, 1), this.m_Light = new Laya.DirectionLight(),
                this.SetLight(this.m_Light), this.m_Light.color = new Laya.Vector3(113 / 255, 113 / 255, 113 / 255),
                this.m_Scene3D.addChild(this.m_Camera), this.m_Scene3D.addChild(this.m_Light), this.m_Scene3D.ambientColor = new Laya.Vector3(140 / 255, 140 / 255, 140 / 255);
        }
        static SetLight(t) {
            t.shadow = !0, t.shadowPCFType = 1, t.shadowPSSMCount = 1, t.shadowDistance = 30,
                t.shadowResolution = 1024;
        }
    }
    class zt {
        constructor(t) {
            if (this.m_sceneConfig = {}, this.m_sceneNodes = [], this.m_onSceneNodes = new Set(),
                this._sceneName = t, !this._sceneName) return null//void console.error(...i.packError("没有初始化场景的名字！"));
            let e = Dt.getConfigJsonData(Rt.SceneConfigURL(this._sceneName));
            if (e) for (let t = 0; t < e.length; t++) this.m_sceneConfig[e[t].name] = e[t]; else null//console.error(...i.packError("获取场景数据失败->", this._sceneName));
            this.m_environment = Kt.Environment, this._init();
        }
        get sceneConfig() {
            return this.m_sceneConfig;
        }
        get environment() {
            return this.m_environment;
        }
        get onSceneNodes() {
            return [...this.m_onSceneNodes];
        }
        getNodeConfig(t) {
            return this.m_sceneConfig[t];
        }
        getSceneNode(t) {
            let e = [];
            "string" == typeof t ? e.push(t) : e.push(...t);
            let s = [];
            if (e.forEach(t => {
                this.m_sceneConfig[t] ? s.push(this.m_sceneConfig[t]) : console.warn(...i.packWarn("有个场景节点没有找到", t));
            }), 0 == s.length) return void console.warn(...i.packWarn("获取场景节点时，一个配置信息都没找到", e));
            let a = new jt(s, this);
            return this.m_sceneNodes.push(a), a;
        }
        addOnNode(t) {
            this.m_onSceneNodes.add(t);
        }
        deleteOnNode(t) {
            this.m_onSceneNodes.delete(t);
        }
        setEnvironment() {
            let t = this.m_sceneConfig;
            t.camera && Wt.setNode(this.m_environment.camera, t.camera), t.light && Wt.setNode(this.m_environment.light, t.light),
                this._setEnvironment();
        }
        loadProgress(t, e) {
            this._loadProgress(t, e);
        }
        _init() { }
        _setEnvironment() { }
        _loadProgress(t, e) { }
    }
    let Xt = class {
        constructor() {
            this.m_sceneList = {};
        }
        getScene(t) {
            return this.m_sceneList[t];
        }
        init() {
            let t;
            for (let e in xt) t = xt[e], this.m_sceneList[t] = new zt(t);
        }
    };
    var Yt, Jt = Xt = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Xt);
    !function (t) {
        t.Bg = "Bg", t.Main = "Main", t.Panel = "Panel", t.Popup = "Popup", t.Prop = "Prop",
            t.Tip = "Tip", t.Pause = "Pause", t.Set = "Set", t.Top = "Top", t.Loading = "Loading",
            t.Native = "Native";
    }(Yt || (Yt = {}));
    class $t {
        static getLayerUI(t) {
            return this.layerUIList[t];
        }
        static init() {
            fgui.UIConfig.packageFileExtension = Pt.FGUI.packageFileExtension, Laya.stage.addChild(fgui.GRoot.inst.displayObject),
                this.layerUIList = {};
            for (let t in Yt) this.layerUIList[Yt[t]] = fgui.GRoot.inst.addChild(new fgui.GComponent());
        }
    }
    class qt {
        static setUILayer(t, e) {
            t[this.UILayerKey] = e;
        }
        static getUILayer(t) {
            return t[this.UILayerKey];
        }
        static setUITopShow(t) {
            let e = t.sortingOrder, i = t.parent;
            for (let t = 0, s = i.numChildren; t < s; t++) e = Math.max(e, i.getChildAt(t).sortingOrder);
            t.sortingOrder = e + 1;
        }
        static setUIDownShow(t) {
            let e = t.sortingOrder, i = t.parent;
            for (let t = 0, s = i.numChildren; t < s; t++) e = Math.min(e, i.getChildAt(t).sortingOrder);
            t.sortingOrder = e - 1;
        }
    }
    qt.UILayerKey = Symbol("UILayer");
    class Zt { }
    class Qt extends Zt {
        constructor() {
            super(...arguments), this.m_key = Symbol(), this._ifClear = !0, this._layer = Yt.Panel,
                this.m_ifShow = !1, this.m_proxyUIList = new Set();
        }
        get key() {
            return this.m_key;
        }
        get rootUI() {
            return this.m_rootUI;
        }
        get layer() {
            return this._layer;
        }
        get ifShow() {
            return this.m_ifShow;
        }
        addUIProxy(t) {
            this.m_proxyUIList.add(t);
        }
        removeUIProxy(t) {
            this.m_proxyUIList.delete(t);
        }
        showUIProxy() {
            this.m_proxyUIList.forEach(t => {
                t.Show();
            });
        }
        hideUIProxy() {
            this.m_proxyUIList.forEach(t => {
                t.Hide();
            });
        }
        endUIProxy() {
            this.m_proxyUIList.forEach(t => {
                t.endProxy();
            });
        }
        createUI() {
            this._createUIBeforeEx(), this._UIs || null//console.error(...i.packError("没有找到ui创建器列表!")),
            this.m_rootUI = new fgui.GComponent(), $t.getLayerUI(this._layer).addChild(this.m_rootUI);
            for (let t in this._UIs) this._UIs[t].ui = this.m_rootUI.addChild(this._UIs[t].uiCreate.createInstance());
            this._createUIEX(), this._createUI();
        }
        _createUIBeforeEx() { }
        _createUIEX() { }
        _createUI() { }
        getUI(t) {
            return this._UIs[t].ui;
        }
        Show(...t) {
            if (this.m_ifShow) return;
            this.m_ifShow = !0, this._onShowBefore(...t);
            let e = !1;
            this.m_rootUI && !this.m_rootUI.isDisposed || (this.createUI(), e = !0), this.m_rootUI.visible || (this.m_rootUI.visible = !0),
                qt.setUITopShow(this.m_rootUI), this.updateSize(), Laya.stage.on(Laya.Event.RESIZE, this, this.updateSize),
                this._onShow(e, ...t);
        }
        _onShowBefore(...t) { }
        _onShow(t, ...e) { }
        Hide(t = this._ifClear, ...e) {
            if (this.m_ifShow) {
                if (this.m_ifShow = !1, this._onHideBefore(e), t) {
                    this.m_rootUI.dispose();
                    for (let t in this._UIs) this._UIs[t].ui = null;
                    this._disposeUI();
                } else this.m_rootUI.visible = !1;
                Laya.stage.off(Laya.Event.RESIZE, this, this.updateSize), this._onHide(t, e);
            }
        }
        _disposeUI() { }
        _onHideBefore(...t) { }
        _onHide(t, ...e) { }
        updateSize() {
            let t, e = Laya.stage.width, i = Laya.stage.height;
            for (let s in this._UIs) (t = this._UIs[s].data) && t.ifUpdate ? (this._UIs[s].ui.setSize(e - t.left - t.right, i - t.bottom - t.top),
                this._UIs[s].ui.setXY(t.left, t.top)) : (this._UIs[s].ui.setSize(e, i), this._UIs[s].ui.setXY(0, 0));
        }
    }
    class te extends Qt {
        constructor() {
            super();
        }
        get ui() {
            return this.m_ui;
        }
        Init() { }
        _createUIBeforeEx() {
            this._UIs || (this._UIs = {
                default: {
                    uiCreate: this._UI
                }
            });
        }
        _createUIEX() {
            this.m_ui = this._UIs.default.ui;
        }
    }
    class ee {
        constructor() {
            this._initData(), this.initData();
        }
        _initData() { }
        initData() { }
    }
    class ie extends ee {
        get dataList() {
            return this.m_dataList;
        }
        _initData() {
            this.m_dataList = this.configTemplate.datas;
        }
    }
    let se = class extends ie {
        constructor() {
            super();
        }
    };
    se = __decorate([s.DecorateInstance(), Dt.DecorateConfigProxy(ft), __metadata("design:paramtypes", [])], se);
    class ae {
        static MusicURL(t) {
            return Et.getResURL(x.music) + t + ".mp3";
        }
        static SoundURL(t) {
            return Et.getResURL(x.sound) + t + ".mp3";
        }
        static IconURL(t) {
            return Et.getResURL(x.icon) + t + ".png";
        }
        static ImgURL(t, e = "png") {
            return Et.getResURL(x.img) + t + "." + e;
        }
        static SkinURL(t, e = "png") {
            return Et.getResURL(x.skin) + t + "." + e;
        }
    }
    let ne = class extends ie {
        constructor() {
            super();
        }
    };
    ne = __decorate([s.DecorateInstance(), Dt.DecorateConfigProxy(yt), __metadata("design:paramtypes", [])], ne);
    let oe = class extends ie {
        constructor() {
            super();
        }
    };
    oe = __decorate([s.DecorateInstance(), Dt.DecorateConfigProxy(Lt), __metadata("design:paramtypes", [])], oe);
    let re = class extends te {
        constructor() {
            super(), this._UI = O;
        }
        Init() {
            g.on(m.ShowUISkin, this, this.Show);
        }
        _onShow(t, ...e) {
            super._onShow(t, ...e), this.ui.m_List_Glove.itemRenderer = Laya.Handler.create(this, this.RenderGroveList, null, !1),
                this.ui.m_List_Glove.numItems = se.instance.dataList.length, this.ui.m_List_Clock.itemRenderer = Laya.Handler.create(this, this.RenderClockList, null, !1),
                this.ui.m_List_Clock.numItems = ne.instance.dataList.length, this.ui.m_List_Hook.itemRenderer = Laya.Handler.create(this, this.RenderHookList, null, !1),
                this.ui.m_List_Hook.numItems = oe.instance.dataList.length, this.ui.m_Ani_show.play(),
                this.ui.m_Btn_Close.onClick(this, this.Close), g.event(d.HandUp);
        }
        RenderGroveList(t, e) {
            let i = se.instance.dataList[t], s = null != u.instance.data.GroveList.find(t => t == i.texture);
            this.RenderItem(e, i.ui, s), e.onClick(this, this.OnClickGrove, [i.texture]);
        }
        RenderClockList(t, e) {
            let i = ne.instance.dataList[t], s = null != u.instance.data.ClockList.find(t => t == i.model);
            this.RenderItem(e, i.ui, s), e.onClick(this, this.OnClockClock, [i.model]);
        }
        RenderHookList(t, e) {
            let i = oe.instance.dataList[t], s = null != u.instance.data.HookList.find(t => t == i.model);
            this.RenderItem(e, i.ui, s), e.onClick(this, this.OnClickHook, [i.model]);
        }
        RenderItem(t, e, i = !1) {
            t.m_state.selectedIndex = i ? 1 : 0, t.touchable = 1 == t.m_state.selectedIndex,
                t.m_item.url = ae.IconURL(e);
        }
        OnClickGrove(t) {
            g.event(m.ChangeGrove, [t]);
        }
        OnClockClock(t) {
            g.event(m.ChangeClock, [t]);
        }
        OnClickHook(t) {
            g.event(m.ChangeHook, [t]), u.instance.data.LastHook = t;
        }
        Close() {
            this.ui.m_Ani_hide.play(Laya.Handler.create(this, this.Hide)), g.event(m.ShowUIStart),
                g.event(d.HandDown);
        }
    };
    var he;
    re = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], re),
        function (t) {
            t.version = "1.0.0";
            t.GameMsgEvent = class { }, t.MsgUrlDefine = {};
        }(he || (he = {}));
    var le = he;
    class ce { }
    ce.version = le.version, ce.user_unique_id = "test_user_1312527", ce.platform = fx.PlatformType.WEIXIN,
        ce.server_url = "", ce.server_url_common = "", //https://cdwaterbear.cn
        ce.server_cfg_url = "",//https://cdn.cdwaterbear.cn/RopeMaster/config_wx.json
        ce.res_server_url = "", ce.local_share_title = "", ce.local_share_image = "", ce.ald_share_enable = !1,
        ce.appSid = "", ce.appId = "wx83432bc52126ed1c", ce.stat = "", ce.saveDurSec = 3,
        ce.showBQ = !1, ce.channel_AdIds = {
            videoId: "",
            nativeAdId: ["", ""],
            bannerId: "",
            interstitialId: "",
            appBoxId: "",
            blockId: ""
        };
    class me {
        constructor() {
            this.rewardStrategyInst = void 0;
        }
        static getInstance() {
            return this.instance || (this.instance = new me()), this.instance;
        }
        playVideo(t, e) {
            if (!t) return;
            platform.getInstance().showReward(() => {
                this.curTouchTarget = t;
                let i = t && t.$owner;
                t.$_GID || (t.$_GID = Laya.Utils.getGID());
                let s = t.$_GID, a = "默认";
                i && i.name && (a = i.name), this.rewardStrategyInst || (this.rewardStrategyInst = fx.Sdk.getInstance().getRewardStrategyInst()),
                    this.rewardStrategyInst.setCurStrategy(fx.GetRewardSDKWay.VIDEO, new fx.RewardGainWayParams({
                        source: a,
                        bindCtrlGId: s,
                        id: ce.channel_AdIds.videoId,
                        forever: !1
                    })), fx.EventCenter.getInstance().once(fx.SdkEvent.E_REWARD_GAIN, this, t => {
                        fx.SdkCode.REWARD_GAIN_SUCCESS === t.code && this.curTouchTarget && this.curTouchTarget.$_GID === t.gid && e && e.run(),
                            this.curTouchTarget = void 0;
                    }), this.rewardStrategyInst.runStrategy();
            })
        }
    }
    let de = class {
        constructor() { }
        init() {
            Laya.loader.load("scenes/WXExportAd/CarouselBox.json", Laya.Handler.create(this, t => {
                let e = new Laya.Prefab();
                e.json = t, this.carouselBox = Laya.Pool.getItemByCreateFun("CarouselBox", e.create, e);
            })), Laya.loader.load("scenes/WXExportAd/IconWall.json", Laya.Handler.create(this, t => {
                let e = new Laya.Prefab();
                e.json = t, this.iconWall = Laya.Pool.getItemByCreateFun("IconWall", e.create, e);
            })), Laya.loader.load("scenes/WXExportAd/likeBox.json", Laya.Handler.create(this, t => {
                let e = new Laya.Prefab();
                e.json = t, this.likeBox = Laya.Pool.getItemByCreateFun("likeBox", e.create, e);
            })), Laya.loader.load("scenes/WXExportAd/moreGameBox.json", Laya.Handler.create(this, t => {
                let e = new Laya.Prefab();
                e.json = t, this.moreGameBox = Laya.Pool.getItemByCreateFun("moreGameBox", e.create, e);
            })), Laya.loader.load("scenes/WXExportAd/GameCenterBox.json", Laya.Handler.create(this, t => {
                let e = new Laya.Prefab();
                e.json = t, this.gameCenterBox = Laya.Pool.getItemByCreateFun("GameCenterBox", e.create, e);
            })), Laya.loader.load("scenes/WXExportAd/GameMoreBox.json", Laya.Handler.create(this, t => {
                let e = new Laya.Prefab();
                e.json = t, this.gameMoreBox = Laya.Pool.getItemByCreateFun("GameMoreBox", e.create, e);
            }));
        }
        getCarouselBox() {
            return this.carouselBox;
        }
        getIconWall() {
            return this.iconWall;
        }
        getLikeBox() {
            return this.likeBox;
        }
        getMoreGameBox() {
            return this.moreGameBox;
        }
        getGameCenterBox() {
            return this.gameCenterBox;
        }
        getGameMoreBox() {
            return this.gameMoreBox;
        }
    };
    var ge, _e = de = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], de);
    !function (t) {
        t[t.EXPORT_HOT = 1] = "EXPORT_HOT", t[t.EXPORT_SIDE = 2] = "EXPORT_SIDE", t[t.EXPORT_LIKE = 3] = "EXPORT_LIKE",
            t[t.EXPORT_MOREGAME = 4] = "EXPORT_MOREGAME", t[t.EXPORT_GAMECENTER = 5] = "EXPORT_GAMECENTER";
    }(ge || (ge = {}));
    class ue extends fx.BaseLogic {
        constructor() {
            super(), this.isOpenStageId = void 0, this.closePanelEvent();
        }
        static getInstance() {
            return this.instance || (this.instance = new ue()), this.instance;
        }
        openGameCenterDialog(t) {
            if (this.openGameCenterCallback = t, this.checkGameCenterOnoff()) {
                let t = _e.instance.getGameCenterBox();
                t ? Laya.stage.addChild(t) : this.openGameCenterCallback && this.openGameCenterCallback.run();
            } else this.openGameCenterCallback && this.openGameCenterCallback.run();
        }
        openMoreGameDialog(t) {
            if (this.openMoreGameCallback = t, this.checkMoreGameOnoff()) {
                let t = _e.instance.getGameMoreBox();
                t ? Laya.stage.addChild(t) : this.openMoreGameCallback && this.openMoreGameCallback.run();
            } else this.openMoreGameCallback && this.openMoreGameCallback.run();
        }
        closePanelEvent() { }
        getJumpData() {
            let t = fx.Sdk.getInstance().getServerJsonCfgNavigateApplist();
            if (!t) return null;
            let e = fx.Sdk.getInstance().isHarvest(), i = [];
            for (const s in t) if (t.hasOwnProperty(s)) {
                const a = t[s];
                e ? i.push(a) : a.changeIcon || i.push(a);
            }
            return i.length > 0 ? i : null;
        }
        checkGameCenterOnoff() {
            if (fx.Sdk.getInstance().isAudit()) return console.log("### checkGameCenter n sg!!!"),
                !1;
            let t = fx.Sdk.getInstance().getServerJsonCfg();
            return t ? (t.gameCenter_spaceLev = this.checkPopSpaceLev(t.gameCenter_spaceLev),
                console.log(`### checkGameCenter ${t.gameCenter_startLev}-${t.gameCenter_spaceLev}-${t.gameCenter_startLoginDays}`),
                !!this.checkStageOnoff(t.gameCenter_startLev, t.gameCenter_spaceLev, {
                    startDay: t.gameCenter_startLoginDays
                }) && (console.log("### open gameCenter"), !0)) : (console.log("### checkGameCenter 配置为空!!!"),
                    !1);
        }
        checkMoreGameOnoff() {
            if (fx.Sdk.getInstance().isAudit()) return console.log("### checkMoreGame n sg!!!"),
                !1;
            let t = fx.Sdk.getInstance().getServerJsonCfg();
            return t ? (t.moreGame_spaceLev = this.checkPopSpaceLev(t.moreGame_spaceLev), console.log(`### checkMoreGame ${t.moreGame_startLev}-${t.moreGame_spaceLev}-${t.moreGame_startLoginDays}`),
                !!this.checkStageOnoff(t.moreGame_startLev, t.moreGame_spaceLev, {
                    startDay: t.moreGame_startLoginDays
                }) && (console.log("### open moreGame"), !0)) : (console.log("### checkMoreGame 配置为空!!!"),
                    !1);
        }
        checkPopSpaceLev(t) {
            let e = 0, i = u.instance.data.level, s = fx.Sdk.getInstance().getServerJsonCfg().exportInfo;
            if (s) for (let t = 0; t < s.length; t++) {
                const a = s[t];
                (1 >= a.day || i >= a.stageId) && (e += 1);
            }
            return t > 0 && (t = (t -= e) < 0 ? 0 : t), t;
        }
        checkStageOnoff(t, e, i) {
            let s = u.instance.data.level;
            if (!s) return !1;
            if (i && i.odd) {
                i.odd > 1 && (i.odd = i.odd / 100);
                let t = Math.random();
                if (t > i.odd) return console.log(`### checkStageOnoff random>extra.odd-${t}-${i.odd}`),
                    !1;
            }
            return t ? s < t ? (console.log(`### checkStageOnoff userInfo.stageId<startLev-${s}-${t}`),
                !1) : !e || 0 === e || 0 == (s - t) % (e + 1) || (console.log(`### checkStageOnoff 1!==(userInfo.stageId-startLev)%spaceLev-${s}-${t}-${e}-${(s - t - 1) % e}`),
                    !1) : (console.log(`### checkStageOnoff !startLev-${t}`), !1);
        }
    }
    let pe = class extends te {
        constructor() {
            super(), this._UI = K, this._isShow = !1, this._isClose = !1;
        }
        Init() {
            g.on(m.ShowUIStart, this, this.Open), g.on(m.HideUIStart, this, this.Close), g.on(d.UpdateHook, this, this.UpdateHook), this._isLevelReady = !1,
                this._isEnvReady = !1, g.on(d.LevelLoadComplete, this, this.OnLevelLoadComplete), g.on(d.EnvLoadComplete, this, this.OnLoadEnvComplete),
                this.sdkInit();
        }
        sdkInit() {
            fx.Utils.isOnPC() || (fx.Sdk.getInstance().preloadVideo(), fx.Sdk.getInstance().preloadInterstitial()),
                ue.getInstance().openGameCenterDialog(null);
        }
        _onShow(t, ...e) {
            this.ui.m_Btn_music.icon = window.WebAudioEngine.pause ? "res/btn_sound_off.png" : "res/btn_sound_on.png";
            this.ui.m_Btn_music.onClick(this, (e) => {
                e.stopPropagation();
                window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                Laya.LocalStorage.setItem("Ropeman-3D-musicState", JSON.stringify(window.WebAudioEngine.pause));
                this.ui.m_Btn_music.icon = window.WebAudioEngine.pause ? "res/btn_sound_off.png" : "res/btn_sound_on.png";
            }), this.ui.m_Btn_setting.onClick(this, () => {
                g.event(m.ShowUISetting), this.Close(!1);
            }), this.ui.m_Btn_custom.onClick(this, this.ShowSkinUI), this.ui.m_Ani_show.play(),
                this.ui.m_Btn_start.onClick(this, this.OnClickStart), this.ui.m_Btn_useIt.onClick(this, this.SendMesg),
                this._isShow = !0, this.ui.m_Cash.m_Txt_num.text = u.instance.data.money.toString();
        }
        _onHide(t, ...e) {
            super._onHide(t, ...e), this._isShow = !1;
        }
        ShowSkinUI() {
            this.Close(!1), g.event(m.ShowUISkin);
        }
        Close(t = !1) {
            this.closeAd(), this._isClose = t, this.ui.m_Ani_close.play(Laya.Handler.create(this, this.OnPlayHideComplete));
        }
        OnPlayHideComplete() {
            this._isClose && (this.Hide(), fx.Sdk.getInstance().showBanner());
        }
        Open() {
            if (!this._isClose) {
                u.instance.data.level % 2 == 1 && fx.Sdk.getInstance().showInterstitial(ce.channel_AdIds.interstitialId),
                    fx.Sdk.getInstance().hideBanner();
            }
            this._isShow ? (this.showAd(), this.ui.m_Ani_show.play(), this._isClose = !1) : ue.getInstance().openGameCenterDialog(Laya.Handler.create(this, () => {
                this.Show(), this.showAd();
            }));
        }
        showAd() {
            this.moreGamebox = _e.instance.getMoreGameBox(), this.moreGamebox && (Laya.stage.addChild(this.moreGamebox),
                this.moreGamebox.x = -600, this.moreGamebox.y = this.ui.m_Btn_custom.y - 450), this.likebox = _e.instance.getLikeBox(),
                this.likebox && Laya.stage.addChild(this.likebox), this.carouselbox = _e.instance.getCarouselBox(),
                this.carouselbox && (Laya.stage.addChild(this.carouselbox), this.carouselbox.y = this.ui.m_Btn_custom.y - 150);
        }
        closeAd() {
            this.moreGamebox && this.moreGamebox.removeSelf(), this.likebox && this.likebox.removeSelf(),
                this.carouselbox && this.carouselbox.removeSelf();
        }
        OnClickStart() {
            if (this._isLevelReady && this._isEnvReady) {
                platform.getInstance().showInterstitial(() => {
                    this.Close(!0), g.event(m.UIClickStart);
                })
            } else {
                let t = "Plase waiting";
                g.event(m.ShowTipsUI, t);
            }
        }

        OnLevelLoadComplete() {
            this._isLevelReady = !0;
        }
        OnLoadEnvComplete() {
            this._isEnvReady = !0;
        }
        SendMesg(t) {
            me.getInstance().playVideo(t.target, Laya.Handler.create(this, () => {
                g.event(d.CheckUpdateHook);
            }));
        }
        UpdateHook(t) {
            t && this.ChHook();
        }
        ChHook() {
            u.instance.TempMagnet = "Magnet", u.instance.data.HookModel != u.instance.TempMagnet && (u.instance.data.LastHook = u.instance.data.HookModel),
                "" != u.instance.TempMagnet && g.event(m.ChangeHook, u.instance.TempMagnet);
        }
    };
    pe = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], pe);
    let ye = class extends te {
        constructor() {
            super(), this._UI = ht;
        }
        Init() {
            g.on(m.ShowUISetting, this, this.Show);
        }
        _onShow(t, ...e) {
            fx.Sdk.getInstance().showBanner(), this.ui.m_Btn_close.onClick(this, this.OnClickClose),
                this.ui.m_Btn_sound.selected = !f.instance.data.ifOpenMusic, this.ui.m_Btn_haptic.selected = !f.instance.data.ifOpenVibration,
                this.ui.m_Btn_sound.onClick(this, this.IsPlayMusic), this.ui.m_Btn_haptic.onClick(this, this.IsPlayVibration);
        }
        IsPlayMusic() {
            f.instance.data.ifOpenSound = !f.instance.data.ifOpenSound, f.instance.data.ifOpenMusic = !f.instance.data.ifOpenMusic;
        }
        IsPlayVibration() {
            f.instance.data.ifOpenVibration = !f.instance.data.ifOpenVibration;
        }
        OnClickClose() {
            fx.Sdk.getInstance().hideBanner(), this.ui.m_Ani_close.play(Laya.Handler.create(this, this.Hide)),
                g.event(m.ShowUIStart);
        }
    };
    ye = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], ye);
    var fe = Laya.MouseManager;
    let Le = class extends te {
        constructor() {
            super(), this._UI = b, this._layer = Yt.Main, this._tempMousePos = new Laya.Vector2(),
                this._downPos = new Laya.Vector2(), this._upPos = new Laya.Vector2(), this._force = new Laya.Vector3();
        }
        Init() {
            g.on(m.ShowUIMain, this, this.Show), g.on(d.GameStart, this, this.UpdateLevel);
        }
        _onShow(t, ...e) {
            this.ui.m_Btn_shoot.on(Laya.Event.MOUSE_DOWN, this, this.OnDown),
                this.ui.m_Btn_shoot.on(Laya.Event.MOUSE_MOVE, this, this.OnMove),
                this.ui.m_Btn_shoot.on(Laya.Event.MOUSE_OUT, this, this.OnUp),
                this.ui.m_Btn_shoot.on(Laya.Event.MOUSE_UP, this, this.OnUp),
                this.UpdateLevel();
        }
        get mousePosition() {
            return this._tempMousePos.x = fe.instance.mouseX, this._tempMousePos.y = fe.instance.mouseY,
                this._tempMousePos;
        }
        OnMove() {
            this.mousePosition.cloneTo(this._upPos);
        }
        OnDown() {
            this.mousePosition.cloneTo(this._downPos), this.mousePosition.cloneTo(this._upPos);
        }
        OnUp() {
            this.DistanceSqr(this._upPos, this._downPos) > 5e3 ? (this._force.x = this._downPos.x - this._upPos.x,
                this._force.y = this._downPos.y - this._upPos.y, this._force.z = 10, this.OnScrollEnd(this._force)) : this.Shoot();
        }
        DistanceSqr(t, e) {
            let i = t.x - e.x, s = t.y - e.y;
            return i * i + s * s;
        }
        Shoot() {
            g.event(d.FiringWeapons, this.mousePosition);
        }
        OnScrollEnd(t) {
            g.event(d.DragWeapons, t);
        }
        UpdateLevel() {
            let t = u.instance.data.level;
            this.ui.m_Txt_level.text = "关卡 " + (t + 1);
        }
    };
    Le = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Le);
    class Se {
        static Unique(t) {
            return Array.from(new Set(t));
        }
        static ReverseReserveUnique(t) {
            return Array.from(new Set(t.reverse())).reverse();
        }
        static ObjUnique(t, e) {
            for (let i = 0, s = t.length; i < s; i++) for (let s = i + 1, a = t.length; s < a; s++) e(t[i]) === e(t[s]) && (t.splice(s, 1),
                s--, a--);
            return t;
        }
        static Replace(t, e, i) {
            let s = t.indexOf(e);
            return !(s < 0) && (t.splice(s, 1, i), !0);
        }
        static RemoveItem(t, e) {
            let i = t.indexOf(e);
            return !(i < 0) && (t.splice(i, 1), !0);
        }
        static RemoveAt(t, e) {
            return !(t.length <= e) && (t.splice(e, 1), !0);
        }
        static Contains(t, e) {
            return t.indexOf(e) >= 0;
        }
        static Copy(t) {
            let e = [];
            for (let i = 0; i < t.length; ++i) e.push(t[i]);
            return e;
        }
        static upsetArray(t) {
            return t.sort(() => Math.random() - .5);
        }
        static RandomGet(t, e = 1, i = t.map(t => 1)) {
            if (t.length <= 0) return;
            let s, a = [], n = [], o = [], r = i[0];
            i.forEach(t => {
                r = Math.min(r, t);
            }), i = i.map(t => Math.floor(t * (1 / r))), t.forEach((t, e) => {
                a.push(t);
                for (let t = 0; t < i[e]; t++) o.push(e);
            });
            for (let t = 0; t < e && !(a.length <= 0); t++) s = Math.floor(Math.random() * o.length),
                o = o.filter(t => t != s), n.push(a.splice(o[s], 1)[0]);
            return n;
        }
    }
    class Ce {
        static ToHex(t) {
            return t.toString(16);
        }
        static RandomFromArrayUtilscept(t, e) {
            let i = [];
            for (let s = 0; s < t.length; ++s) e != t[s] && i.push(t[s]);
            return this.RandomFromArray(i);
        }
        static RandomFromArray(t) {
            return t[Ce.RandomInt(0, t.length)];
        }
        static RandomArrayFromArray(t, e) {
            let i = [], s = [];
            for (let e = 0; e < t.length; ++e) s.push(e);
            for (let a = 0; a < e; ++a) {
                let e = Ce.RandomInt(0, s.length), a = s[e];
                Se.RemoveAt(s, e), i.push(t[a]);
            }
            return i;
        }
        static RandomFromWithWeight(t, e) {
            if (null == t || 0 == t.length) return null;
            var i = 0;
            for (var s of e) i += s;
            for (var a = Ce.Random(0, i), n = 0, o = 0; o < t.length; ++o) if (a < (n += e[o])) return t[o];
            return t[t.length - 1];
        }
        static RandomInt(t, e) {
            return Math.floor(this.Random(t, e));
        }
        static Random(t, e) {
            return (e - t) * Math.random() + t;
        }
        static randomRangeInt(t, e) {
            return Math.floor(Math.random() * (e - t) + t);
        }
        static RandomRatio(t) {
            return t > .01 * Ce.RandomInt(0, 1e4);
        }
        static Clamp(t, e, i) {
            return t < e ? e : t > i ? i : t;
        }
        static Clamp01(t) {
            return this.Clamp(t, 0, 1);
        }
        static Sign(t) {
            return 0 == t ? 1 : t > 0 ? 1 : -1;
        }
        static GetNumCount(t) {
            for (var e = 0, i = t; i / 10 > 0;) i = Math.floor(i / 10), e++;
            return e;
        }
        static Lerp(t, e, i) {
            return t + (e - t) * Ce.Clamp01(i);
        }
        static MoveTowardsAngle(t, e, i) {
            var s = Ce.DeltaAngle(t, e);
            return 0 - i < s && s < i ? e : (e = t + s, Ce.MoveTowards(t, e, i));
        }
        static MoveTowards(t, e, i) {
            return Math.abs(e - t) <= i ? e : t + Math.sign(e - t) * i;
        }
        static DeltaAngle(t, e) {
            var i = Ce.Repeat(e - t, 360);
            return i > 180 && (i -= 360), i;
        }
        static Repeat(t, e) {
            return Ce.Clamp(t - Math.floor(t / e) * e, 0, e);
        }
        static IsSimilar(t, e) {
            return t == e;
        }
    }
    Ce.Deg2Rad = .0175, Ce.Rad2Deg = 57.2958;
    class ke { }
    ke.Player = "Player", ke.Wooden_Box = "Wooden_Box", ke.WaterTankPlank_14 = "WaterTankPlank_14",
        ke.WaterTankPlank_25 = "WaterTankPlank_25", ke.WaterTankPlank_27 = "WaterTankPlank_27",
        ke.WaterTankPlank_27_1 = "WaterTankPlank_27_1", ke.Wooden_Scaffoldings_8 = "Wooden_Scaffoldings_8",
        ke.Airship = "Airship", ke.Forklift = "Forklift", ke.SedanCar = "SedanCar", ke.truck = "truck",
        ke.Brick = "Brick", ke.Container_Blue = "Container_Blue", ke.Explosive_Barrel = "Explosive_Barrel",
        ke.Bullet = "Bullet", ke.Rifle = "Rifle", ke.wp = "wp", ke.Iron = "Iron", ke.Iron_Hand = "Iron_Hand",
        ke.Plank_Plan = "Plank_Plan", ke.Stand_Shop = "Stand_Shop", ke.TreasureBoxPlan = "TreasureBoxPlan",
        ke.Aircraft = "Aircraft", ke.TreasureBox = "TreasureBox", ke.PlayPoint = "PlayPoint",
        ke.Sky = "Sky", ke.CityScenePlan = "CityScenePlan", ke.ForestScenePlan = "ForestScenePlan",
        ke.Google_Color = "Google_Color", ke.Ben10_Color = "Ben10_Color", ke.Ben10_Watch = "Ben10_Watch",
        ke.BMW_Color = "BMW_Color", ke.Chacker_Color = "Chacker_Color", ke.Ferrari_Color = "Ferrari_Color",
        ke.Gold_Watch = "Gold_Watch", ke.Iron_Man_Wach = "Iron_Man_Wach", ke.OriginalWatch = "OriginalWatch",
        ke.Spooky_Color = "Spooky_Color", ke.Target_Color = "Target_Color", ke.UPS_Color = "UPS_Color",
        ke.StandHand = "StandHand", ke.Missile = "Missile", ke.Agent = "Agent", ke.Coah = "Coah",
        ke.Cop = "Cop", ke.man = "man", ke.Ninja = "Ninja", ke.Terriest = "Terriest", ke.Woman = "Woman",
        ke.Arrow = "Arrow", ke.Claw = "Claw", ke.Fist = "Fist", ke.Grappling_Hook = "Grappling_Hook",
        ke.Knuckles = "Knuckles", ke.Red_Bomb = "Red_Bomb", ke.Sai = "Sai", ke.Saw = "Saw",
        ke.Spike_Brick = "Spike_Brick", ke.polySurface2 = "polySurface2", ke.CameraRoot = "CameraRoot",
        ke.bz = "bz", ke.citie = "citie", ke.Explosion = "Explosion", ke.collider = "collider";
    class Ie { }
    class ve { }
    class xe {
        constructor() {
            this.ScriptOwner = null, this.IsLode = !1, this.SceneItemDataArray = [], this._speed = 10;
        }
        static GetInstancle() {
            return null == this._ShopManager && (this._ShopManager = new xe(), this._ShopManager.Init()),
                this._ShopManager;
        }
        Init() {
            g.on(d.LevelDestroy, this, this.ReMoveShopPlan), g.on(d.MoveCamera, this, this.MoveToPoint);
        }
        LodeItemParent(t) {
            this.ItemParentArray = [];
            let e = t.getChildByName("Item_Plan");
            if (!e) return console.log("获取物品父节点失败");
            let i = e.numChildren;
            for (let t = 0; t < i; t++) this.ItemParentArray.push(e.getChildAt(t));
        }
        ClearItemObj() {
            let t = this.ItemParentArray.length;
            for (let e = 0; e < t; e++) if (0 != this.ItemParentArray[e].numChildren) {
                let t = this.ItemParentArray[e].numChildren;
                for (let e = 0; e < t; e++) this.ItemParentArray[e].getChildAt(0).destroy();
            }
        }
        RefreshVideoItemArray() {
            this.VideoItemArray = [];
            let t = ne.instance.dataList.length;
            for (let e = 0; e < t; e++) {
                let t = ne.instance.dataList[e].model;
                if (u.instance.data.ClockList.indexOf(t) >= 0) continue;
                let i = new ve();
                i.m_ItemData = ne.instance.dataList[e], i.m_Itemtype = p.Clock, ne.instance.dataList[e].videoNum && this.VideoItemArray.push(i);
            }
            t = se.instance.dataList.length;
            for (let e = 0; e < t; e++) {
                let t = se.instance.dataList[e].texture;
                if (u.instance.data.GroveList.indexOf(t) >= 0) continue;
                let i = new ve();
                i.m_ItemData = se.instance.dataList[e], i.m_Itemtype = p.Grove, se.instance.dataList[e].videoNum && this.VideoItemArray.push(i);
            }
            t = oe.instance.dataList.length;
            for (let e = 0; e < t; e++) {
                let t = oe.instance.dataList[e].model;
                if (u.instance.data.HookList.indexOf(t) >= 0) continue;
                let i = new ve();
                i.m_ItemData = oe.instance.dataList[e], i.m_Itemtype = p.Hook, oe.instance.dataList[e].videoNum && this.VideoItemArray.push(i);
            }
        }
        RefreshNothingnessItemArray() {
            this.NothingnessItemArray = [], this.SceneItemDataArray = [];
            let t = ne.instance.dataList.length;
            for (let e = 0; e < t; e++) {
                let t = ne.instance.dataList[e].model;
                if (u.instance.data.ClockList.indexOf(t) >= 0) continue;
                let i = new ve();
                i.m_ItemData = ne.instance.dataList[e], i.m_Itemtype = p.Clock, ne.instance.dataList[e].videoNum || this.NothingnessItemArray.push(i);
            }
            t = se.instance.dataList.length;
            for (let e = 0; e < t; e++) {
                let t = se.instance.dataList[e].texture;
                if (u.instance.data.GroveList.indexOf(t) >= 0) continue;
                let i = new ve();
                i.m_ItemData = se.instance.dataList[e], i.m_Itemtype = p.Grove, se.instance.dataList[e].videoNum || this.NothingnessItemArray.push(i);
            }
            t = oe.instance.dataList.length;
            for (let e = 0; e < t; e++) {
                let t = oe.instance.dataList[e].model;
                if (u.instance.data.HookList.indexOf(t) >= 0) continue;
                let i = new ve();
                i.m_ItemData = oe.instance.dataList[e], i.m_Itemtype = p.Hook, oe.instance.dataList[e].videoNum || this.NothingnessItemArray.push(i);
            }
        }
        LodeShop(t) {
            let e = t.prefabs.Stand_Shop[0];
            return e ? (this.ScriptOwner = e.parent, this.ScriptOwner ? (this.LodeItemParent(e),
                this.ClearItemObj(), this.RefreshNothingnessItemArray(), this.RandomItemToScene(),
                this.IsLode = !0, void (0 == this.NothingnessItemArray.length && (this.IsLode = !1,
                    this.ScriptOwner.active = !1))) : console.log("获取商店节点失败")) : console.log("加载商店失败");
        }
        RandomItemToScene() {
            let t = this.ItemParentArray.length, e = ne.instance.dataList.length, i = [];
            for (let t = 0; t < this.NothingnessItemArray.length; t++) {
                let e = new ve();
                e.m_ItemData = this.NothingnessItemArray[t].m_ItemData, e.m_Itemtype = this.NothingnessItemArray[t].m_Itemtype,
                    i.push(e);
            }
            for (let s = 0; s < t && s < e; s++) {
                let t = i.length;
                if (t <= 0) break;
                let e = Ce.RandomInt(0, t), a = i[e];
                switch (i.splice(e, 1), a.m_Itemtype) {
                    case p.Clock:
                        this.LodeClock(this.ItemParentArray[s], a, s);
                        break;

                    case p.Grove:
                        this.LodeGrove(this.ItemParentArray[s], a, s);
                        break;

                    case p.Hook:
                        this.LodeHook(this.ItemParentArray[s], a, s);
                }
            }
        }
        LodeClock(t, e, i) {
            let s = e.m_ItemData, a = Rt.PrefabURL(s.model);
            At.Load3D(a, Laya.Handler.create(this, () => {
                let n = At.GetRes(a);
                if (!n) return console.log("加载手表失败" + a);
                t.addChild(n), n.transform.localPosition = xe.VectoryZero, this.AddSceneItemDataArray(n, s.model, e.m_Itemtype, s.price, i);
            }));
        }
        LodeHook(t, e, i) {
            let s = e.m_ItemData, a = Rt.PrefabURL(s.model);
            At.Load3D(a, Laya.Handler.create(this, () => {
                let n = At.GetRes(a);
                if (!n) return console.log("加载钩子失败" + a);
                t.addChild(n), n.transform.localPosition = xe.VectoryZero, n.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0),
                    n.transform.localScale = new Laya.Vector3(2, 2, 2), this.AddSceneItemDataArray(n, s.model, e.m_Itemtype, s.price, i);
            }));
        }
        LodeGrove(t, e, i) {
            let s = e.m_ItemData, a = Rt.PrefabURL(ke.StandHand);
            At.Load3D(a, Laya.Handler.create(this, () => {
                let n = At.GetRes(a);
                if (!n) return console.log("加载手套失败" + a);
                t.addChild(n), n.transform.localPosition = xe.VectoryZero, n.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0);
                let o = n.getChildByName("StandHand_1").meshRenderer.material, r = ae.SkinURL(s.texture);
                this.AddSceneItemDataArray(n, s.texture, e.m_Itemtype, s.price, i), At.Load2D(r, Laya.Handler.create(this, this.OnLoadGroveTextureComplete, [o, r]));
            }));
        }
        AddSceneItemDataArray(t, e, i, s, a) {
            let n = new Ie();
            n.m_ItemObj = t, n.m_ItemName = e, n.m_Itemtype = i, n.m_Price = s, n.m_Index = a,
                this.SceneItemDataArray.push(n);
        }
        OnLoadGroveTextureComplete(t, e) {
            t.albedoTexture = At.GetRes(e, !0);
        }
        GetSceneItemDataArray() {
            return this.SceneItemDataArray;
        }
        ReMoveShopPlan() {
            this.IsLode = !1, null != this.ScriptOwner && (this.ScriptOwner.destroy(), this.ScriptOwner = null);
        }
        MoveToPoint() {
            let t = Kt.Camera.transform, e = t.position, i = new Laya.Vector3(0, 2.2, 37), s = Laya.Vector3.distance(e, i) / this._speed * 1e3;
            Laya.Tween.to(e, {
                x: i.x,
                y: i.y,
                z: i.z,
                update: new Laya.Handler(this, e => {
                    t.position = e;
                }, [e])
            }, s, null, new Laya.Handler(this, this.OnReachTargetPos));
        }
        OnReachTargetPos() {
            g.event(m.ShowUIShop, [this.GetSceneItemDataArray()]);
        }
        get curTrySkin() {
            return this._curTrySkin;
        }
        setCurTrySkin(t) {
            this._curTrySkin = t;
        }
        isHasVideoItem() {
            return this.RefreshVideoItemArray(), !!this.VideoItemArray.length;
        }
        RandomVideoItem() {
            if (!this.VideoItemArray.length) return null;
            let t = fx.Utils.randomInArray(this.VideoItemArray);
            return this._curTrySkin = t, t;
        }
        getVideoItemByUi(t) {
            for (let e = 0; e < this.VideoItemArray.length; e++) if (this.VideoItemArray[e].m_ItemData.ui == t) return this.VideoItemArray[e];
        }
        getvideoCntByName(t) {
            let e = u.instance.data.videoSkin.filter((e, i, s) => t === e.name, this)[0];
            return e ? e.videoCnt : 0;
        }
        videoHookUnlock(t) {
            let e = fx.CfgMgr.getInstance().get("json/constant.json", t),
                i = u.instance.data.videoSkin.filter((e, i, s) => t === e.name, this)[0];
            if (i ? i.videoCnt++ : ((i = new y()).name = t, i.videoCnt = 1, u.instance.data.videoSkin.push(i)),
                i.videoCnt >= e.length) i.videoCnt = e.length, this.unlockHook(t); else {
                let t = "获得皮肤碎片";
                g.event(m.ShowTipsUI, t);
            }
        }
        videoSkinUnlock(t) {
            let e = this.getVideoItemByUi(t), i = u.instance.data.videoSkin, s = i.filter((e, i, s) => t === e.name, this)[0];
            if (s) {
                let t = i.indexOf(s);
                s.videoCnt++, u.instance.data.videoSkin[t] = s;
            } else (s = new y()).name = t, s.videoCnt = 1, u.instance.data.videoSkin.push(s);
            if (s.videoCnt >= e.m_ItemData.videoNum) {
                let t;
                s.videoCnt = 3, e.m_Itemtype == p.Grove ? t = e.m_ItemData.texture : e.m_Itemtype == p.Clock ? t = e.m_ItemData.model : e.m_Itemtype == p.Hook && (t = e.m_ItemData.ui),
                    u.instance.UnlockSkin(t, e.m_Itemtype);
                let i = "解锁";
                g.event(m.ShowTipsUI, i);
            } else {
                let t = "获得皮肤碎片";
                g.event(m.ShowTipsUI, t);
            }
        }
        isOwnSkin(t, e) {
            let i, s = u.instance.data;
            return (i = t == p.Hook ? s.HookList : t == p.Clock ? s.ClockList : s.GroveList).indexOf(e) > -1;
        }
        unlockHook(t) {
            let e;
            if ("twoHook" == t ? e = 2 : "threeHook" == t && (e = 3), e) {
                u.instance.data.HookNumber = e, g.event(m.ShowUIUnlock, [e]);
                let t = u.instance.data.HookModel, i = xe.GetInstancle().curTrySkin;
                i && (t = i.m_ItemData.model), g.event(m.ChangeHook, [t]);
            }
        }
    }
    xe.VectoryZero = new Laya.Vector3(0, 0, 0);
    class we extends Laya.Script3D {
        get sprite3D() {
            return null == this._sprite3D && (this._sprite3D = this.owner), this._sprite3D;
        }
        get transform() {
            return null == this._transform && (this._transform = this.owner.transform), this._transform;
        }
        Instantiate(t, e) {
            return Laya.Sprite3D.instantiate(t, e);
        }
        Find(t) {
            return null == t || "" == t ? null : this.sprite3D.getChildByName(t);
        }
        DeepFind(t, e = this.sprite3D) {
            let i = e.numChildren, s = null;
            if (i > 0) {
                if (s = e.getChildByName(t)) return s;
                for (let a = 0; a < i; a++) {
                    let i = e.getChildAt(a);
                    if (s = this.DeepFind(t, i)) break;
                }
            }
            return s;
        }
    }
    class Ee extends we {
        constructor() {
            super(...arguments), this._originPoint = new Laya.Vector3(), this._hookDict = {},
                this.isHitObj = !1;
        }
        static get instance() {
            return this._instance;
        }
        get Hand() {
            return null == this._hand && (this._hand = this.DeepFind("Character1_RightHand")),
                this._hand;
        }
        get animator() {
            return null == this._animator && (this._animator = this.sprite3D.getComponent(Laya.Animator)),
                this._animator;
        }
        get clockNode() {
            return null == this._clock && (this._clock = this.DeepFind("Clock")), this._clock;
        }
        get glove() {
            return null == this._glove && (this._glove = this.DeepFind("shoutao")), this._glove;
        }
        onAwake() {
            Ee._instance = this, super.onAwake(), this.HideAllClock(this.clockNode), this.InitHook(),
                this.ChangeHook(u.instance.data.HookModel), this.ChangeClock(u.instance.data.ClockName),
                this.ChangeGrove(u.instance.data.GroveName);
        }
        onStart() {
            this.transform.position.cloneTo(this._originPoint), g.on(m.ChangeGrove, this, this.ChangeGrove),
                g.on(m.ChangeClock, this, this.ChangeClock), g.on(m.ChangeHook, this, this.ChangeHook),
                g.on(d.FiringWeapons, this, () => this.PlayClip(Re.Attack)), g.on(d.DragWeapons, this, () => this.PlayClip(Re.Pull)),
                g.on(d.HandUp, this, () => this.PlayClip(Re.HandUp)), g.on(d.HandDown, this, () => this.PlayClip(Re.HandDown));
        }
        InitHook() {
            for (let t = 1; t <= 3; t++) {
                let e = this.DeepFind("Hook_" + t);
                this.HideAllHook(e);
            }
        }
        HideAllHook(t) {
            let e = t.numChildren;
            for (let i = 0; i < e; i++) {
                t.getChildAt(i).active = !1;
            }
        }
        ChangeHook(t) {
            let e = u.instance.data;
            e.TryLastHookNumber && (1 == e.TryLastHookNumber ? u.instance.data.HookNumber = 2 : u.instance.data.HookNumber = 3);
            let i = u.instance.data.HookNumber;
            for (let e = 1; e <= 3; e++) {
                let s = "Hook_" + e, a = this._hookDict[s];
                null == a && (a = this.DeepFind("Hook_" + e), this._hookDict[s] = a);
                let n = a.getChildByName(t);
                if (n) {
                    this.HideAllHook(a), n.active = e <= i;
                    let s = xe.GetInstancle().curTrySkin;
                    s && s.m_Itemtype == p.Hook || g.event(d.ChangeHook, t);
                } else { }//console.error("切换钩子失败，找不到：", t, ",节点:", "Hook_" + e);
            }
        }
        ChangeClock(t) {
            let e = this.DeepFind(t);
            if (e) {
                this.HideAllClock(this.clockNode), e.active = !0, e.parent.active = !0;
                let i = xe.GetInstancle().curTrySkin;
                i && i.m_Itemtype == p.Clock || g.event(d.ChangeClock, t);
            } else { }//console.error("切换手表失败，找不到：", t);
        }
        ChangeGrove(t) {
            let e = this.glove.skinnedMeshRenderer.material, i = ae.SkinURL(t);
            At.Load2D(i, Laya.Handler.create(this, this.OnLoadGroveTextureComplete, [e, i, t]));
        }
        OnLoadGroveTextureComplete(t, e, i) {
            t.albedoTexture = At.GetRes(e, !0);
            let s = xe.GetInstancle().curTrySkin;
            s && s.m_Itemtype == p.Grove || g.event(d.ChangeGlove, i);
        }
        HideAllClock(t) {
            let e = t.numChildren;
            for (let i = 0; i < e; i++) {
                let e = t.getChildAt(i);
                e.active = !1, e.numChildren > 0 && this.HideAllClock(e);
            }
        }
        PlayClip(t) {
            try {
                this.animator.play(t);
            } catch (e) {
                // console.error(t, e);
            }
            switch (Laya.timer.clearAll(this), t) {
                case Re.Attack:
                    this.isHitObj && Laya.timer.once(450, this, () => this.PlayClip(Re.AttackIdle));
                    break;

                case Re.AttackIdle:
                    break;

                case Re.Pull:
                    Laya.timer.once(450, this, () => this.PlayClip(Re.Idle));
                    break;

                case Re.Idle:
            }
        }
    }
    var Re;
    !function (t) {
        t.Attack = "attack", t.AttackIdle = "attackidle", t.Pull = "Pull", t.Idle = "idle",
            t.HandUp = "hand", t.HandDown = "put";
    }(Re || (Re = {}));
    let Ae = class {
        constructor() {
            this._bgPast = [], this._urlBGM = "", this._urlSOUND = "", this._sounds = [];
        }
        static playBGM(t, e, s, a) {
            null != t && this.instance._bgPast.slice(-1)[0] != t ? (this.instance._bgPast.push(t),
                this.instance._urlBGM = ae.MusicURL(t), this._playMusic(e, s, a), console.log(...i.packLog("播放背景音乐", t))) : "" != this.instance._urlBGM && (this._playMusic(e, s, a),
                    console.log(...i.packLog("播放背景音乐", t)));
        }
        static shiftBGM(t, e, i, s) {
            if (this.instance._bgPast.slice(-1)[0] == t) {
                this.instance._bgPast.pop(), this.instance._bgPast.slice(-1)[0] && (this.instance._urlBGM = ae.MusicURL(t),
                    this._playMusic(e, i, s));
            }
        }
        static _playMusic(t = 0, e, i) {
            Laya.SoundManager.stopMusic(), Laya.SoundManager.playMusic(this.instance._urlBGM, t, e, i);
        }
        static pauseBGM() {
            Laya.SoundManager.stopMusic(), console.log(...i.packLog("停止播放音乐", this.instance._urlBGM));
        }
        static pauseSound() {
            Laya.SoundManager.stopAllSound();
        }
        static playSound(t, e, i, s, a) {
            this.instance._urlSOUND = ae.SoundURL(t);
            for (let t = 0; t < this.instance._sounds.length; t++) if (this.instance._sounds[t] && this.instance._sounds[t].url.indexOf(this.instance._urlSOUND) >= 0) {
                this.instance._sounds[t].stop(), this.instance._sounds.splice(t, 1);
                break;
            }
            let n = Laya.SoundManager.playSound(this.instance._urlSOUND, e, i, s, a);
            this.instance._sounds.push(n);
        }
        static stopSound(t) {
            this.instance._urlSOUND = ae.SoundURL(t), Laya.SoundManager.stopSound(this.instance._urlSOUND);
        }
    };
    var De = Ae = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Ae);
    let Pe = class {
        constructor() {
            this.m_stop = !1, this.IsPlayMusic = !0, this.m_onLoopSoundList = new Set();
        }
        stopBGM() {
            De.pauseBGM();
        }
        BGMGoOn() {
            this.playBGM(this.m_onBGM);
        }
        soundSuspend() {
            this.m_stop = !0;
            for (let t of this.m_onLoopSoundList) De.stopSound(t);
        }
        soundGoOn() {
            this.m_stop = !1;
            for (let t of this.m_onLoopSoundList) De.playSound(t, 0);
        }
        playBGM(t, e, i, s) {
            f.instance.data.ifOpenMusic && !this.m_stop && (De.playBGM(t, e, i, s), this.m_onBGM = t);
        }
        playSound(t, e, i, s, a) {
            f.instance.data.ifOpenSound && !this.m_stop && (0 == e && this.m_onLoopSoundList.add(t),
                De.playSound(t, e, i, s, a));
        }
        stopSound(t) {
            De.stopSound(t), this.m_onLoopSoundList.has(t) && this.m_onLoopSoundList.delete(t);
        }
    };
    var Oe, be = Pe = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Pe);
    !function (t) {
        t.null = "", t.EnemyDie = "EnemyDie", t.EnemyDieTwo = "EnemyDieTwo", t.EnenyShot = "EnenyShot",
            t.Explosion = "Explosion", t.Fireworks_Misc = "Fireworks_Misc", t.PlayerRef = "PlayerRef",
            t.PlayerRopeDim = "PlayerRopeDim", t.PlayerShortRope = "PlayerShortRope";
    }(Oe || (Oe = {}));
    class Te extends we {
        constructor() {
            super(...arguments), this.isDispose = !1, this.isHit = !1, this._isKinematic = !1;
        }
        get rigidBody() {
            return null == this._rigidBody && (this._rigidBody = this.sprite3D.getComponent(Laya.Rigidbody3D)),
                this._rigidBody;
        }
        onAwake() {
            super.onAwake(), g.on(d.Explode, this, this.OnExplode), g.on(d.GameRestart, this, this.Reset),
                this.rigidBody && (this._isKinematic = this.rigidBody.isKinematic, this.rigidBody.isKinematic = !0,
                    g.on(d.StartGame, this, this.TryOpenRigidBody));
        }
        OnHit(t) {
            return this.isHit = !0, this.hook = t, be.instance.playSound(Oe.PlayerRopeDim, 0),
                this.SetBlinkState(this.sprite3D, !0), !1;
        }
        ApplyImpulse(t, e = !0) {
            this.impulseForce = t, this.TryFly(t, e), be.instance.stopSound(Oe.PlayerRopeDim),
                Laya.timer.once(1e3, this, this.Dispose);
        }
        TryFly(t, e = !0) {
            if (this.rigidBody && !this.sprite3D.destroyed) {
                let i = t.clone();
                e && (Math.abs(2 * i.x) < Math.abs(i.y) && i.y < 0 ? (i.y = 50, i.z = -1e3, console.log("下拉")) : Math.abs(i.x) > Math.abs(2 * i.y) ? (t.z = 0,
                    i.x *= 2, i.y = 10, console.log("左右")) : i.z = -1e3);
                let s = new Laya.Vector3();
                this.hook && !this.sprite3D.destroyed ? (s.y = .2, console.log("反弹效果")) : (s.x = Math.random() - .5,
                    s.y = Math.random() - .5, s.z = Math.random() - .5), this.rigidBody.angularDamping = .8,
                    this.rigidBody.linearDamping = .7, this.rigidBody.isKinematic = !1, this.rigidBody.wakeUp(),
                    Laya.timer.frameOnce(1, this, () => {
                        this.rigidBody.applyForce(i, s), console.log("钩子击飞：", this.sprite3D.name);
                        if (this.sprite3D.name == "Agent" && u.instance.data.level == 0) {
                            g.event(d.ChangeText)
                        }
                    });
            }
            this.SetBlinkState(this.sprite3D, !1);
        }
        Dispose() {
            this.isDispose || (this.isDispose = !0, this.sprite3D.destroy(!0));
        }
        Log() { }
        OnExplode(t, e = 3) {
            if (this.rigidBody) {
                let i = new Laya.Vector3();
                if (Laya.Vector3.subtract(this.transform.position, t, i), i.y = 0, Laya.Vector3.scalarLength(i) < e) {
                    Laya.Vector3.scale(i, 25, i), i.y = 800;
                    let t = new Laya.Vector3();
                    t.x = Math.random(), t.y = Math.random(), t.z = Math.random(), this.rigidBody.isKinematic = !1,
                        this.rigidBody.angularDamping = .2, this.rigidBody.wakeUp(), Laya.timer.frameOnce(1, this, () => {
                            this.rigidBody.applyForce(i, t), console.log("爆炸击飞:", this.sprite3D.name);
                        }), g.event(d.TryRetractHook, [this]);
                }
            }
        }
        onDestroy() {
            super.onDestroy(), g.off(d.Explode, this, this.OnExplode);
        }
        SetBlinkState(t, e = !1) {
            if (!(t.destroyed || e && this.isDispose)) {
                if (t.meshRenderer) {
                    let i = t.meshRenderer.material;
                    e ? this.CreateBlinkTween(i) : this.ClearBlinkTween(i);
                } else if (t.skinnedMeshRenderer) {
                    let i = t.skinnedMeshRenderer.material;
                    e ? this.CreateBlinkTween(i) : this.ClearBlinkTween(i);
                }
                t.numChildren > 0 && this.SetChildBlinkState(t, e);
            }
        }
        SetChildBlinkState(t, e) {
            new Promise(i => {
                let s = t.numChildren;
                for (let i = 0; i < s; i++) {
                    let s = t.getChildAt(i);
                    "polySurface2_0" != s.name && this.SetBlinkState(s, e);
                }
                Laya.timer.frameOnce(1, this, () => i());
            });
        }
        CreateBlinkTween(t) {
            null == t._old_albedoIntensity && (t._old_albedoIntensity = t.albedoIntensity),
                null == t._old_Shiness && (t._old_Shiness = t.shininess || 0);
            var e = t.albedoIntensity;
            Laya.Tween.to(t, {
                albedoIntensity: e + 2,
                shininess: 1
            }, 200, Laya.Ease.quadInOut).repeat = 0;
        }
        ClearBlinkTween(t) {
            null != t._old_albedoIntensity && (t.albedoIntensity = t._old_albedoIntensity),
                null != t._old_Shiness && (t.shininess = t._old_Shiness), Laya.Tween.clearAll(t);
        }
        TryOpenRigidBody() {
            this.rigidBody && (this.rigidBody.isKinematic = this._isKinematic);
        }
        onCollisionEnter(t) {
            super.onCollisionEnter(t);
            try {
                if ("Explosive_Barrel" == t.other.owner.name) {
                    let e = t.other.owner.getComponent(Te);
                    e && e.OnHit();
                }
            } catch (t) {
                console.log(t);
            }
        }
        Reset() {
            this.sprite3D.destroyed || this.SetBlinkState(this.sprite3D, !1);
        }
    }
    class Ue extends Te { }
    class Be {
        constructor() {
            this.pos = [], this.normal = [], this.uv = [], this.tempV = new Laya.Vector3(),
                this.temp2V = new Laya.Vector3();
        }
        Update() {
            this.mesh && (this.UpdateSmoothPos(), this.updatePosNormal(), this.mesh.setPositions(this.pos),
                this.mesh.setNormals(this.normal));
        }
        updatePosNormal() {
            for (var t = this.slice, e = this.smoothPos, i = this.radius, s = new Laya.Vector3(), a = new Laya.Vector3(), n = new Laya.Vector3(0, 1, 0), o = 2 * Math.PI / t, r = new Laya.Quaternion(), h = new Laya.Vector3(), l = 0, c = 0; c < e.length; c++) {
                var m = e[c];
                if (c == e.length - 1) {
                    var d = e[c - 1];
                    Laya.Vector3.subtract(m, d, a);
                } else if (0 == c) {
                    var g = e[c + 1];
                    Laya.Vector3.subtract(g, m, a);
                } else {
                    d = e[c - 1], g = e[c + 1];
                    Laya.Vector3.subtract(g, d, a);
                }
                Laya.MathUtils3D.isZero(a.x) && Laya.MathUtils3D.isZero(a.z) ? s.setValue(1, 0, 0) : Laya.Vector3.cross(n, a, s),
                    Laya.Vector3.normalize(a, a), Laya.Vector3.normalize(s, s), Laya.Vector3.scale(s, i, s),
                    Laya.Quaternion.createFromAxisAngle(a, o, r), Laya.Vector3.add(m, s, h), this.pos[l].setValue(h.x, h.y, h.z),
                    this.normal[l].setValue(s.x, s.y, s.z), l++;
                for (var _ = 0; _ < t - 1; _++) Laya.Vector3.transformQuat(s, r, s), Laya.Vector3.normalize(s, s),
                    Laya.Vector3.scale(s, i, s), Laya.Vector3.add(m, s, h), this.pos[l].setValue(h.x, h.y, h.z),
                    this.normal[l].setValue(s.x, s.y, s.z), l++;
            }
        }
        createMesh(t, e, i = .01) {
            this.segPos = t, this.UpdateSmoothPos();
            var s = this.smoothPos;
            this.slice = e, this.radius = i;
            for (var a = s.length * e, n = (s.length - 1) * e * 6, o = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV"), r = o.vertexStride / 4, h = new Float32Array(a * r), l = 0, c = new Uint16Array(n), m = 0, d = new Laya.Vector3(), g = new Laya.Vector3(), _ = new Laya.Vector3(0, 1, 0), u = 2 * Math.PI / e, p = new Laya.Quaternion(), y = new Laya.Vector3(), f = 0; f < s.length; f++) {
                var L = s[f];
                if (f == s.length - 1) {
                    var S = s[f - 1];
                    Laya.Vector3.subtract(L, S, g);
                } else if (0 == f) {
                    var C = s[f + 1];
                    Laya.Vector3.subtract(C, L, g);
                } else {
                    S = s[f - 1], C = s[f + 1];
                    Laya.Vector3.subtract(C, S, g);
                }
                Laya.MathUtils3D.isZero(g.x) && Laya.MathUtils3D.isZero(g.z) ? d.setValue(1, 0, 0) : Laya.Vector3.cross(_, g, d),
                    Laya.Vector3.normalize(d, d), Laya.Vector3.normalize(g, g), Laya.Vector3.scale(d, i, d),
                    Laya.Quaternion.createFromAxisAngle(g, u, p), Laya.Vector3.add(L, d, y), this.normal.push(d.clone()),
                    this.pos.push(y.clone()), this.uv.push(new Laya.Vector2(0, .2 * f));
                for (var k = 0; k < e - 1; k++) Laya.Vector3.transformQuat(d, p, d), Laya.Vector3.normalize(d, d),
                    Laya.Vector3.scale(d, i, d), Laya.Vector3.add(L, d, y), this.pos.push(y.clone()),
                    this.normal.push(d.clone()), this.uv.push(new Laya.Vector2((k + 1) / e, .1 * f % 1)),
                    f > 0 && (c[m++] = this.pos.length - 2, c[m++] = this.pos.length - e - 1, c[m++] = this.pos.length - e - 2,
                        c[m++] = this.pos.length - 2, c[m++] = this.pos.length - 1, c[m++] = this.pos.length - e - 1);
                f > 0 && (c[m++] = this.pos.length - 1, c[m++] = this.pos.length - e, c[m++] = this.pos.length - 2 * e,
                    c[m++] = this.pos.length - 1, c[m++] = this.pos.length - 2 * e, c[m++] = this.pos.length - e - 1);
            }
            for (f = 0; f < this.pos.length; f++) {
                y = this.pos[f];
                var I = this.normal[f], v = this.uv[f];
                h[l++] = y.x, h[l++] = y.y, h[l++] = y.z, h[l++] = I.x, h[l++] = I.y, h[l++] = I.z,
                    h[l++] = v.x, h[l++] = v.y;
            }
            this.mesh = Laya.PrimitiveMesh._createMesh(o, h, c);
        }
        UpdateSmoothPos() {
            if (null == this.smoothPos) {
                this.smoothPos = [];
                for (var t = 2 * this.segPos.length - 1, e = 0; e < t; e++) this.smoothPos.push(new Laya.Vector3());
            }
            this.segPos[this.segPos.length - 1].cloneTo(this.smoothPos[this.smoothPos.length - 1]);
            for (e = 0; e < this.segPos.length - 1; e++) {
                var i = this.segPos[e], s = this.segPos[e + 1], a = this.smoothPos[2 * e + 1];
                Laya.Vector3.add(i, s, a), Laya.Vector3.scale(a, .5, a), i.cloneTo(this.smoothPos[2 * e]);
            }
            for (e = 1; e < this.smoothPos.length - 2; e += 2) {
                a = this.smoothPos[e];
                var n = this.smoothPos[e + 1], o = this.smoothPos[e + 2];
                Laya.Vector3.subtract(a, n, this.tempV), Laya.Vector3.subtract(o, n, this.temp2V),
                    Laya.Vector3.add(this.tempV, this.temp2V, this.tempV), Laya.Vector3.scale(this.tempV, .35, this.tempV),
                    Laya.Vector3.add(n, this.tempV, n);
            }
        }
    }
    class Me {
        static get frameRate() {
            return 1e3 / this.deltaTime;
        }
        static get deltaTimeScale() {
            return Math.min(60, Laya.timer.delta) / 60;
        }
        static get deltaTime() {
            return this._recordFrame != Laya.timer.currFrame && (this._deltaTime = Math.min(Laya.timer.delta, 100),
                this._deltaTimeSec = .001 * this._deltaTime, this._recordFrame = Laya.timer.currFrame),
                this._deltaTime * this.timeScale;
        }
        static get deltaTimeSec() {
            return this._recordFrame != Laya.timer.currFrame && (this._deltaTime = Math.min(Laya.timer.delta, 100),
                this._deltaTimeSec = .001 * this._deltaTime, this._recordFrame = Laya.timer.currFrame),
                this._deltaTimeSec * this.timeScale;
        }
    }
    Me.timeScale = 1, Me._recordFrame = 0, Me._deltaTime = 30, Me._deltaTimeSec = .016;
    class Ge {
        constructor(t, e) {
            this.pos = [], this.lastPos = [], this.ac = [], this.acY = 0, this.acX = 0, this.acZ = 0,
                this.lengths = [], this.pinPos = 0, this.tempV = new Laya.Vector3(), this.tempV2 = new Laya.Vector3(),
                this.tempV3 = new Laya.Vector3(), this.up = new Laya.Vector3(0, 1, 0), this.MinBounds = new Laya.Vector3(-100, -100, -100),
                this.MaxBounds = new Laya.Vector3(100, 100, 100), this.q = new Laya.Quaternion(),
                this.nearR = .5, this.pos = t;
            for (var i = 0; i < this.pos.length; i++) this.lastPos.push(this.pos[i].clone()),
                this.ac.push(new Laya.Vector3(0, 0, 0));
            this.lengths = e, this.rootPos = t[0].clone();
        }
        get EndPos() {
            return this.pos[this.pos.length - 1];
        }
        get RootPos() {
            return this.pos[0];
        }
        EndToRoot() { }
        SolveAngleConstraints() {
            if (this.rootDir) for (var t = 0; t < 2; t++) {
                var e = Laya.Vector3.distance(this.pos[t], this.pos[t + 1]);
                Laya.Vector3.normalize(this.rootDir, this.rootDir), Laya.Vector3.scale(this.rootDir, 0 == t ? this.lengths[t] : e, this.rootDir),
                    Laya.Vector3.add(this.pos[t], this.rootDir, this.pos[2]);
            }
            if (this.goalDir) {
                var i = this.pos.length;
                for (t = i - 1; t >= i - 2; t--) {
                    e = Laya.Vector3.distance(this.pos[t], this.pos[t - 1]);
                    Laya.Vector3.normalize(this.goalDir, this.goalDir), Laya.Vector3.scale(this.goalDir, t == i - 1 ? this.lengths[t - 1] : e, this.goalDir),
                        Laya.Vector3.add(this.pos[t], this.goalDir, this.pos[t - 1]);
                }
            }
        }
        SolveDistanceConstraints() {
            for (var t = 0; t < this.pos.length - 1; t++) {
                var e = this.pos[t], i = this.pos[t + 1], s = Laya.Vector3.distance(e, i);
                if (!Laya.MathUtils3D.isZero(s)) {
                    var a = e.x - i.x, n = e.y - i.y, o = e.z - i.z, r = (this.lengths[t] - s) / s;
                    e.x += a * this.nearR * r * 1, e.y += n * this.nearR * r * 1, e.z += o * this.nearR * r * 1,
                        i.x -= a * (1 - this.nearR) * r * 1, i.y -= n * (1 - this.nearR) * r * 1, i.z -= o * (1 - this.nearR) * r * 1;
                }
            }
        }
        UpdatePhysic() {
            for (var t = Me.deltaTimeSec * Me.deltaTimeSec, e = 0; e < this.pos.length; e++) {
                this.ApplyForce(e);
                var i = this.pos[e], s = this.lastPos[e], a = this.ac[e], n = .99 * (i.x - s.x), o = .99 * (i.y - s.y), r = .99 * (i.z - s.z), h = i.x + n + .5 * a.x * t, l = i.y + o + .5 * a.y * t, c = i.z + r + .5 * a.z * t;
                s.setValue(i.x, i.y, i.z), i.setValue(h, l, c), a.setValue(0, 0, 0);
            }
        }
        ApplyForce(t) {
            this.ac[t].setValue(this.acX, this.acY, this.acZ);
        }
        Update(t) {
            for (var e = 0; e < 4; e++) this.EndPos.setValue(t.x, t.y, t.z), this.UpdatePhysic(),
                this.SolveDistanceConstraints(), this.rootPos.cloneTo(this.pos[0]), this.EndPos.setValue(t.x, t.y, t.z);
        }
        ResetLastPos() {
            for (var t = 0; t < this.pos.length; t++) this.pos[t].cloneTo(this.lastPos[t]);
        }
    }
    class He extends we {
        constructor() {
            super(...arguments), this.segmentLen = .1, this.meshRedius = .01, this.lens = [],
                this.currentLen = 0, this.segmentNum = 0, this._isCompress = !1, this._isReady = !1,
                this.segmentLenD = .001, this.acXSign = -1, this.axYSign = 1, this._isShrinking = !1,
                this.tmp = new Laya.Vector3();
        }
        get RootPos() {
            return this.verlet.rootPos;
        }
        set RootPos(t) {
            this.verlet.rootPos = t;
        }
        get EndPos() {
            return this.poses[this.poses.length - 1];
        }
        set RootDir(t) {
            this.verlet.rootDir = t;
        }
        set GoalDir(t) {
            this.verlet.goalDir = t;
        }
        set CurrentLen(t) {
            this.len = t;
        }
        onAwake() {
            super.onAwake();
        }
        Init(t, e, i) {
            this.poses = [];
            var s = this.segmentNum = Math.floor(i / this.segmentLen);
            this.poses.push(t);
            var a = new Laya.Vector3();
            Laya.Vector3.subtract(e, t, a), Laya.Vector3.normalize(a, a), Laya.Vector3.scale(a, .01 * this.segmentLen, a);
            let n = t;
            for (var o = 1; o < s; o++) {
                var r = new Laya.Vector3();
                Laya.Vector3.add(n, a, r), n = r, this.poses.push(r), this.lens.push(.1 * this.segmentLen);
            }
            return e.cloneTo(this.poses[this.poses.length - 1]), this.verlet = new Ge(this.poses, this.lens),
                this.meshRender = new Be(), this.meshRender.createMesh(this.poses, 8, this.meshRedius),
                this._isReady = !0, this;
        }
        onUpdate() {
            this._isReady && (this._isShrinking ? this.Shrink() : this.Update(this._target),
                this._hook.position.cloneTo(this._target), Ee.instance.Hand.transform.position.cloneTo(this.RootPos));
        }
        Shoot(t, e, i) {
            if (this._isShrinking = !1, this._isCompress = !1, this._startPos = t, this._hook = i,
                this._target = e, this._isReady || this.Init(t, e, 20), this.RootDir = new Laya.Vector3(0, 0, 1),
                null == this._meshSprite) {
                this._meshSprite = new Laya.MeshSprite3D(this.meshRender.mesh, "rope");
                let t = this._meshSprite.meshRenderer.material = new Laya.BlinnPhongMaterial();
                this._meshSprite.meshRenderer.castShadow = !0, t.shininess = .3, Laya.loader.load("res/rope.png", Laya.Handler.create(this, e => {
                    t.albedoTexture = e;
                })), Kt.Scene3D.addChild(this._meshSprite);
            }
            return this.verlet.acY = -.2, this;
        }
        ReachTarget() {
            for (var t = 0; t < this.lens.length; t++) this.lens[t] = .01;
        }
        TryShrink(t = null) {
            this._isShrinking = !0;
            for (var e = 0; e < this.lens.length; e++) this.lens[e] = 1e-5;
            this._onShrinkComplete = t;
        }
        Update(t = null) {
            this._isCompress ? (this.verlet.acY = 0, this.verlet.acX = 0, this.verlet.acZ = 0) : (this.verlet.acX += 2.9 * Me.deltaTimeSec * this.acXSign,
                this.verlet.acX > 1.5 ? this.acXSign = -1 : this.verlet.acX < -1.5 && (this.acXSign = 1),
                this.verlet.acY += .9 * Me.deltaTimeSec * this.axYSign, this.verlet.acY > -.3 ? this.axYSign = -1 : this.verlet.acY < -1.5 && (this.axYSign = 1),
                this.verlet.acZ = 2), t.cloneTo(this.EndPos), this.verlet.Update(this.EndPos), this.meshRender.Update(),
                this.segmentLenD += .001 * Me.deltaTimeSec, this.segmentLen = Math.min(this.segmentLen, this.segmentLenD);
        }
        Shrink() {
            this.segmentLenD = 1e-4, this.verlet.acX = this.verlet.acY = 0;
            let t = 50 * Me.deltaTimeSec, e = 0, i = [];
            for (let t = 0; t < this.poses.length - 1; t++) {
                let s = this.poses[t], a = this.poses[t + 1], n = Laya.Vector3.distance(s, a);
                e += n, i.push(n);
            }
            let s = 1 - t / e;
            for (let t = 0; t < this.poses.length - 1; t++) {
                let e = this.poses[t], a = this.poses[t + 1], n = this.tmp;
                Laya.Vector3.subtract(a, e, n), Laya.Vector3.normalize(n, n), Laya.Vector3.scale(n, Math.max(.001, i[t] * s), n),
                    Laya.Vector3.add(e, n, a);
            }
            this.verlet.ResetLastPos(), this.meshRender.Update(), Laya.Vector3.distanceSquared(this.EndPos, this._startPos) > .1 ? (this.EndPos.cloneTo(this._hook.position),
                this._hook.position = this._hook.position) : this._onShrinkComplete && (Laya.timer.once(80, this, () => {
                    this._isShrinking = !1, this._isCompress = !0;
                }), this._onShrinkComplete.run(), this._onShrinkComplete = null);
        }
        Dispose() {
            this._meshSprite.destroy(), this._meshSprite = null, this._isReady = !1;
        }
    }
    var Ne, Ve, Fe = Laya.Ease;
    !function (t) {
        t[t.Idle = 0] = "Idle", t[t.AttackMove = 1] = "AttackMove", t[t.Move = 2] = "Move",
            t[t.Missed = 3] = "Missed", t[t.Hit_Target = 4] = "Hit_Target";
    }(Ne || (Ne = {}));
    class We extends we {
        constructor() {
            super(...arguments), this._speed = 50, this.canShoot = !0, this.UpVector3 = new Laya.Vector3(0, 1, 0),
                this.IsBackRope = !0;
        }
        onAwake() {
            super.onAwake(),
                g.on(d.CanShoot, this, () => this.SetWeapon(!0, 1)),
                g.on(d.NoShoot, this, () => this.SetWeapon(!1, 2)),
                g.on(d.GameRestart, this, () => this.SetWeapon(!0, 3)), g.on(d.TryRetractHook, this, this.TryRetractHook),
                null == this._rope && (this._rope = this.sprite3D.addComponent(He));
        }
        SetWeapon(t, tt) {
            this.canShoot = t;
        }
        InitWeapon(t) {
            console.log("加载武器脚本：", t), this.RopeState = Ne.Idle, this.ropeRoot = this.DeepFind("Obi Rope_1"),
                this.hook = this.DeepFind("Hook_" + t), this.m_Hook_Parent = this.hook.parent, this.ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3()),
                this.physicsSimulation = Kt.Scene3D.physicsSimulation, this.hitResult = new Laya.HitResult(),
                this.BacklLocalPos = this.hook.transform.localPosition.clone(), this.BackPos = this.hook.transform.position.clone(),
                this.BackRotate = this.hook.transform.localRotation.clone(), this.IsBackRope = !0;
        }
        MouseDownClick(t) {
            this.RopeState == Ne.Idle && this.canShoot ? (be.instance.playSound(Oe.PlayerShortRope, 1)
                , this.GetOnClickToWorldPos(t)
            ) : console.log("不可以射击");
        }
        MouseDragClick(t) {
            if (!this.EnemyTarget || this.RopeState != Ne.Hit_Target) return;
            if (null != this.EnemyTarget && this.EnemyTarget.destroyed) return;
            be.instance.stopSound(Oe.PlayerRopeDim), be.instance.playSound(Oe.PlayerRef, 1);
            let e = u.instance.data.HookModel;
            this.RopeState = Ne.Move, this._rope.TryShrink(Laya.Handler.create(this, this.OnShrinkComplete)),
                e == Ve.Magnet && g.event(d.MagnetBackEffect, t), this.EnemyTarget && (this.EnemyTarget.ApplyImpulse(t),
                    this.EnemyTarget = null);
        }
        GetOnClickToWorldPos(t) {
            let e = this.GetScenePosToWorld(Kt.Camera, t);
            if (null == this.hook) {
                let t = Rt.PrefabURL(ke.Wooden_Box);
                At.Load(t, pt.D3, Laya.Handler.create(this, () => {
                    let i = At.GetRes(t);
                    this.ropeRoot.addChild(i),
                        i.transform.localPosition = new Laya.Vector3(0, 0, 0),
                        i.transform.localScale = new Laya.Vector3(10, 10, 10),
                        this.hook = i,
                        this.TweenClick(e, i);
                }));
            } else this.TweenClick(e, this.hook);
        }
        GetScenePosToWorld(t, e) {
            let i = new Laya.Vector3();
            Kt.Camera.viewportPointToRay(e, this.ray);
            let s = this.CameraRayFun();
            return s && s.Log(), this.EnemyTarget = s, null != s ? this.hitResult.point : (Laya.Vector3.scale(this.ray.direction, 10, i),
                Laya.Vector3.add(this.ray.origin, i, i), i);
        }
        CameraRayFun() {
            return null != this.physicsSimulation && this.physicsSimulation.rayCast(this.ray, this.hitResult, 200) ? this.hitResult.collider.owner.getComponent(Te) : null;
        }
        TweenClick(t, e) {
            Ee.instance.isHitObj = null != this.EnemyTarget,
                this.IsBackRope = !1,
                this.RopeState = Ne.Move;
            let i = e.transform;
            this.m_TargetPos = t.clone(),
                this.m_StarPos = e.transform.position.clone();
            let s = e.transform.position;
            Kt.Scene3D.addChild(e),
                e.transform.lookAt(t, this.UpVector3),
                this._rope.Shoot(this.ropeRoot.transform.position, s, e.transform);
            let a = Laya.Vector3.distance(s, t) / this._speed * 1e3;
            Laya.Tween.to(s, {
                x: t.x,
                y: t.y,
                z: t.z,
                update: new Laya.Handler(this, t => {
                    i.position = t;
                }, [s])
            }, a, Fe.linearIn, new Laya.Handler(this, this.OnReachTargetPos));
        }
        OnReachTargetPos() {
            null == this.EnemyTarget || this.EnemyTarget.destroyed ?
                (this.RopeState = Ne.Move, this._rope.TryShrink(Laya.Handler.create(this, this.OnShrinkComplete))) :
                (this.RopeState = Ne.Hit_Target, this._rope.ReachTarget(), this.OnHitTarget(this.EnemyTarget));
        }
        OnGameEnd() {
            this._rope && (Laya.Tween.clearAll(this.transform.position),
                this._rope.TryShrink(Laya.Handler.create(this, this.OnShrinkComplete))),
                this.EnemyTarget = null;
        }
        OnHitTarget(t) {
            if (t.owner.name == "Agent" && u.instance.data.level == 0) {
                g.event(d.ChangeText)
            }
            if (t.OnHit(this.hook)) return this.RopeState = Ne.Missed, void this._rope.TryShrink(Laya.Handler.create(this, this.OnShrinkComplete));
            switch (u.instance.data.HookModel) {
                case Ve.Magnet:
                    g.event(d.MagnetEffect, [t.transform.position, t.owner, this.hook]);
            }
        }
        OnShrinkComplete() {
            this.RopeState = Ne.Idle, this.m_Hook_Parent.addChild(this.hook),
                this.hook.transform.localRotation = this.BackRotate.clone(),
                this.hook.transform.position = this.BackPos.clone(),
                this.hook.transform.localPosition = this.BacklLocalPos.clone(),
                this.IsBackRope = !0, this.UpdateHook();
        }
        UpdateHook() {
            "" != u.instance.data.LastHook && g.event(m.ChangeHook, u.instance.data.LastHook);
        }
        TryRetractHook(t) {
            if (this.EnemyTarget && this.EnemyTarget == t) {
                be.instance.stopSound(Oe.PlayerRopeDim), be.instance.playSound(Oe.PlayerRef, 1),
                    u.instance.data.HookModel == Ve.Magnet && g.event(d.MagnetBackEffect, null), this.RopeState = Ne.Move,
                    this._rope.TryShrink(Laya.Handler.create(this, this.OnShrinkComplete));
            }
        }
    }
    !function (t) {
        t.Fist = "Fist", t.Magnet = "Magnet";
    }(Ve || (Ve = {}));
    class je extends we {
        constructor() {
            super(...arguments), this.WeaponArray = new Array();
        }
        onAwake() {
            super.onAwake(), this.Init();
        }
        Init() {
            g.on(d.FiringWeapons, this, this.MouseDownClick), g.on(d.DragWeapons, this, this.MouseDragClick),
                g.on(d.GameCom, this, this.OnGameEnd), g.on(d.GameFail, this, this.OnGameEnd), g.on(d.CheckUpdateHook, this, this.UpdateHook);
            for (let t = 1; t <= 3; t++) {
                let e = this.sprite3D.addComponent(We);
                e.InitWeapon(t), this.WeaponArray.push(e);
            }
        }
        MouseDownClick(t) {
            let e = u.instance.data.HookNumber;
            for (let i = 0; i < e; i++) if (this.WeaponArray[i].RopeState == Ne.Idle) return void this.WeaponArray[i].MouseDownClick(t);
        }
        MouseDragClick(t) {
            let e = u.instance.data.HookNumber;
            for (let i = 0; i < e; i++) this.WeaponArray[i].RopeState == Ne.Hit_Target && this.WeaponArray[i].MouseDragClick(t);
        }
        OnGameEnd() {
            let t = u.instance.data.HookNumber;
            for (let e = 0; e < t; e++) this.WeaponArray[e].OnGameEnd();
        }
        GetRopeIsAllBack() {
            let t = u.instance.data.HookNumber;
            for (let e = 0; e < t; e++) if (!this.WeaponArray[e].IsBackRope) return !1;
            return !0;
        }
        UpdateHook() {
            let t = this.GetRopeIsAllBack();
            g.event(d.UpdateHook, t);
        }
    }
    class Ke extends Te {
        Dispose() { }
    }
    let ze = class extends ie {
        constructor() {
            super();
        }
    };
    ze = __decorate([s.DecorateInstance(), Dt.DecorateConfigProxy(St), __metadata("design:paramtypes", [])], ze);
    class Xe {
        static PlayEffect(t, e, i) {
            let s = Rt.PrefabURL(t);
            At.Load(s, pt.D3, Laya.Handler.create(this, () => {
                if (i && !i.destroyed) {
                    let t = At.GetRes(s);
                    i.addChild(t), t.transform.position = e;
                }
            }));
        }
    }
    class Ye extends Te {
        constructor() {
            super(...arguments), this._hasExplosed = !1;
        }
        onAwake() {
            super.onAwake(), g.on(d.TryExplode, this, this.TryExplode);
        }
        ApplyImpulse(t) { }
        OnHit(t) {
            return this.Explode(), !0;
        }
        Explode() {
            if (!this._hasExplosed) {
                this._hasExplosed = !0, be.instance.playSound(Oe.Explosion, 1), g.event(d.Explode, [this.transform.position, 4]);
                let t = this.transform.localPosition;
                t.y += .5, Xe.PlayEffect(ke.Explosion, t, this.sprite3D.parent), this.Dispose();
            }
        }
        OnExplode(t, e) {
            super.OnExplode(t, e), e > Laya.Vector3.distance(this.transform.position, t) && this.Explode();
        }
        TryExplode(t, e) {
            this.sprite3D.destroyed || Laya.Vector3.distance(this.transform.position, t) < e && this.Explode();
        }
    }
    class Je extends Te {
        constructor() {
            super(...arguments), this._collisionList = [], this.IsPlay = !0;
        }
        OnHit(t) {
            return this.rigidBody.isKinematic = !1, this.rigidBody.wakeUp(), this.SetBlinkState(this.sprite3D, !1),
                !0;
        }
        onCollisionEnter(t) {
            if (super.onCollisionEnter(t), this._collisionList.indexOf(t) < 0) {
                let e = t.other.owner.getComponent(Te);
                if (e) {
                    this._collisionList.push(t);
                    let i = new Laya.Vector3(400, -400, 0);
                    e.ApplyImpulse(i);
                }
            }
            g.event(d.TryExplode, [this.transform.position, 4]);
        }
    }
    class $e extends Te {
        constructor() {
            super(...arguments), this.speed = 5, this.time = 8, this.timer = 0, this._hasFire = !1,
                this._hasExploded = !1, this.targetPos = new Laya.Vector3(0, 0, 0), this._isPause = !1,
                this._up = new Laya.Vector3(0, 1, 0);
        }
        onAwake() {
            super.onAwake(), g.on(d.VideoStart, this, this.OnPause), g.on(d.VideoClose, this, this.Resume),
                g.on(d.GameFail, this, this.OnPause), g.on(d.GameCom, this, this.OnPause), g.on(d.GameRestart, this, this.Resume),
                this.onReachTarget = Laya.Handler.create(this, this.OnReachTargetCallBack);
        }
        onStart() {
            super.onStart(), this.time = Laya.Vector3.scalarLength(this.transform.position) / this.speed;
        }
        ActiveEffect(t) {
            let e = this.DeepFind("daodan");
            e && (e.active = t);
        }
        Fire() {
            this.isHit || (this._hasFire = !0, this.startPos = this.transform.position.clone(),
                this.ActiveEffect(!0));
        }
        onUpdate() {
            if (this._hasFire && !this._hasExploded && !this.isHit && !this._isPause) {
                this.timer += Me.deltaTimeSec;
                let t = this.timer / this.time;
                Laya.Vector3.lerp(this.startPos, this.targetPos, t, this.transform.position), this.transform.position = this.transform.position,
                    this.transform.lookAt(this.targetPos, this._up), t >= 1 && this.onReachTarget && this.onReachTarget.run();
            }
            this.isHit && this.rigidBody.isKinematic && (this.transform.localRotationEulerX += 240 * Me.deltaTimeSec,
                this.transform.localRotationEulerY += 240 * Me.deltaTimeSec, this.transform.localRotationEulerZ += 240 * Me.deltaTimeSec);
        }
        OnReachTargetCallBack() {
            this._hasExploded = !0, g.event(d.GameFail), this.Dispose();
        }
        OnHit(t) {
            return super.OnHit(t), this.isHit = !0, !1;
        }
        ApplyImpulse(t) {
            this.rigidBody.isKinematic = !1, this.rigidBody && (this.rigidBody.wakeUp(), this.rigidBody.angularDamping = .2,
                Laya.timer.frameOnce(1, this, () => {
                    this.rigidBody.applyForce(t, new Laya.Vector3(1, 0, 0));
                })), Laya.timer.once(1e3, this, this.Dispose);
        }
        OnPause() {
            this._isPause = !0;
        }
        Resume() {
            this._isPause = !1;
        }
    }
    const qe = "\nattribute vec4 a_Position;\nattribute vec2 a_Texcoord;\n \nuniform mat4 u_MvpMatrix;\n \nvarying vec2 v_Texcoord;\n\nvec4 remapGLPositionZ(vec4 position) {\n\tposition.z=position.z * 2.0 - position.w;\n\treturn position;\n}\n\nvoid main()\n{\n    gl_Position = u_MvpMatrix * a_Position;\n    v_Texcoord = a_Texcoord;\n    gl_Position=remapGLPositionZ(gl_Position); \n}\n", Ze = "\n#ifdef FSHIGHPRECISION\n    precision highp float;\n#else\n    precision mediump float;\n#endif\n \nuniform vec3 u_Color;\nuniform float u_MaxRadius;\nuniform float u_MinRadius;\nuniform float u_Value;\n \nvarying vec2 v_Texcoord;\n \nvoid main()\n{\n    float Rote = (270.0 * 3.1415926)/180.0;\n    float sinNum = sin(Rote);\n    float cosNum = cos(Rote);\n    vec2 uv01 = vec2(1.0 - v_Texcoord.x, 1.0-v_Texcoord.y);\n    if( (1.0-v_Texcoord.y)<u_Value)\n    {\n        gl_FragColor=vec4( u_Color.rgb,  1);\n        return;\n    }\n    // uv01 = uv01 - vec2(0.5,0.5);\n\n    // float len = length(uv01);\n    // if(len < 0.35){\n    //     if(len > 0.3){\n    //         gl_FragColor = vec4( u_Color.rgb,  1);\n    //     }else{\n    //         discard;\n    //     }\n    //     return;\n    // }\n\n    // uv01 = uv01 * mat2(cosNum,-sinNum,sinNum,cosNum) + vec2(0.5,0.5);\n    // vec2 uv11 = uv01 * 2.0 - 1.0;\n    // float angle = 1.0 - ceil(atan(uv11.g,uv11.r) - (6.4 * u_Value-3.2));\n \n    // float uvR = dot(uv11,uv11);\n    // float uv_final = (1.0-floor(uvR + (1.0-u_MaxRadius))) * floor(uvR + (1.0-u_MinRadius));\n \n    // if(uv_final * angle < 0.5) discard;\n \n    // gl_FragColor = vec4(min(angle+1.0,1.0) * u_Color.rgb,  1);\n    gl_FragColor=vec4(1,1,1,1);\n}\n";
    class Qe extends Laya.Material {
        constructor() {
            super(), this.InitShader(), this.setShaderName("ExpCircleShader");
        }
        set MaxRadius(t) {
            this._shaderValues.setNumber(Laya.Shader3D.propertyNameToID("u_MaxRadius"), t);
        }
        set MinRadius(t) {
            this._shaderValues.setNumber(Laya.Shader3D.propertyNameToID("u_MinRadius"), t);
        }
        set Value(t) {
            this._shaderValues.setNumber(Laya.Shader3D.propertyNameToID("u_Value"), t);
        }
        set Color(t) {
            this._shaderValues.setVector3(Laya.Shader3D.propertyNameToID("u_Color"), t);
        }
        InitShader() {
            if (Qe.inited) return;
            Qe.inited = !0;
            let t = {
                a_Position: Laya.VertexMesh.MESH_POSITION0,
                a_Texcoord: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
            }, e = {
                u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                u_Color: Laya.Shader3D.PERIOD_MATERIAL,
                u_MaxRadius: Laya.Shader3D.PERIOD_MATERIAL,
                u_MinRadius: Laya.Shader3D.PERIOD_MATERIAL,
                u_Value: Laya.Shader3D.PERIOD_MATERIAL
            };
            var i = Laya.Shader3D.add("ExpCircleShader"), s = new Laya.SubShader(t, e);
            s.addShaderPass(qe, Ze), i.addSubShader(s);
        }
    }
    Qe.inited = !1;
    class ti extends Te {
        constructor() {
            super(...arguments), this._missiles = [], this._isGameStart = !1, this._interval = 8,
                this._localAngleX = 0, this._rTimer = 0, this._warnTimer = 0, this._warnT = 4, this._warnTime = 4,
                this._isWarn = !1, this.isDead = !1, this._isShootingHook = !1, this.isVideo = !1,
                this._isApplyForce = !1, this.m_fireNum = 0;
        }
        onAwake() {
            g.on(d.VideoStart, this, () => {
                this.isVideo = !0;
            }), g.on(d.VideoClose, this, () => {
                this.isVideo = !1;
            }), g.on(d.NPC_Hit, this, this.OnShootHook), g.on(d.NPC_ApplyImpulse, this, this.OnRetractHook),
                this._warnT = this._warnT + 2 * Math.random(), this._interval = this._interval + 3 * Math.random(),
                super.onAwake(), this.InitMissile(), g.on(d.StartGame, this, this.OnGameStart),
                g.on(d.GameFail, this, () => {
                    this._isGameStart = !1;
                }), g.on(d.GameRestart, this, () => {
                    this._isGameStart = !0, this.isHit = !1, this._warnT = 0;
                }), g.event(d.NPC_Spawn, [this, !0]), this.InitShader();
        }
        onStart() {
            super.onStart(), this._localAngleX = this.transform.localPositionX;
        }
        onUpdate() {
            if (!this.isVideo && this._isGameStart && (super.onUpdate(), (this.transform.position.y < -10 || this.transform.position.y > 50 || this.transform.position.x > 100 || this.transform.position.x < -100 || this.transform.position.z > 100 || this.transform.position.z < -100) && (this.isDead = !0,
                this.Dispose()), !this.isDead)) {
                if (this.isHit && !this.isDispose && this.rigidBody.isKinematic) {
                    this.transform.localRotationEulerY += 240 * Me.deltaTimeSec, this._rTimer += Me.deltaTimeSec;
                    let t = Math.sin(this._rTimer);
                    this.transform.localRotationEulerX = this._localAngleX + 30 * t;
                }
                this._isShootingHook || (this.isHit || (this._warnT += Me.deltaTimeSec, this._warnT > this._interval && (this.StartWarn(),
                    this._warnT = 0)), this._isWarn && this.UpdateWarnProgress());
            }
        }
        ApplyImpulse(t) {
            this.impulseForce = t, this.TryFly(t), this.isDead = !0, this._isApplyForce = !0,
                this.rigidBody.isTrigger = !1, g.event(d.NPC_ApplyImpulse, [t, !0]);
        }
        TryFly(t, e = !0) {
            let i = t.clone();
            if (this.rigidBody && !this.sprite3D.destroyed) {
                Laya.Vector3.scale(i, 2, i), i.y = i.y < 0 ? 4 * i.y : i.y, i.z = -800;
                let t = new Laya.Vector3();
                this.sprite3D.destroyed || (t.x = Math.random() - .5, t.y = Math.random() - .5,
                    t.z = Math.random() - .5), this.rigidBody.isKinematic = !1, this.rigidBody.wakeUp(),
                    this.rigidBody.angularDamping = .8, this.rigidBody.linearDamping = .7, Laya.timer.frameOnce(1, this, () => {
                        this.rigidBody.applyForce(i, t), console.log("钩子击飞：", this.sprite3D.name);
                    });
            }
            this.SetBlinkState(this.sprite3D, !1);
        }
        OnHit(t) {
            return this.isHit ? this.isHit : (g.event(d.NPC_Hit, [t]), this.rigidBody.isTrigger = !0,
                Laya.timer.clearAll(this), this._isWarn = !1, this.SetExclamatoryMarkPlanIsVisble(!1),
                super.OnHit(t));
        }
        Dispose() {
            this.isDispose = !0, g.event(d.NPC_Destroy, [this, !0]), this.ChangeColor(this.sprite3D),
                Xe.PlayEffect(ke.Explosion, this.transform.position.clone(), this.sprite3D), be.instance.playSound(Oe.Explosion, 1),
                g.event(d.Explode, [this.transform.position, 4]), g.event(d.TryExplode, [this.transform.position, 8]),
                Laya.timer.once(1e3, this, () => this.sprite3D.destroy(!0));
        }
        InitMissile() {
            let t = this.DeepFind("Bullet_Left");
            t && this._missiles.push(t);
            let e = this.DeepFind("Bullet_Right");
            e && this._missiles.push(e);
        }
        FireMissile() {
            let t = this._missiles[this.m_fireNum];
            this.m_fireNum++, this.m_fireNum = this.m_fireNum % 2;
            let e = Rt.PrefabURL(ke.Missile);
            At.Load3D(e, Laya.Handler.create(this, () => {
                if (!t.destroyed) {
                    let i = At.GetRes(e);
                    this.sprite3D.addChild(i), i.transform.position = t.transform.position.clone(),
                        i.transform.rotationEuler = t.transform.position.clone(), t.active = !1, i.addComponent($e).Fire(),
                        be.instance.playSound(Oe.Fireworks_Misc, 1), Laya.timer.once(1e3, this, () => t.active = !0);
                }
            }));
        }
        OnGameStart() {
            this._isGameStart = !0;
        }
        InitShader() {
            this.ExclamatoryMarkPlan = this.DeepFind("polySurface2_0");
            let t = this.ExclamatoryMarkPlan;
            this.ExclamatoryMarkMaterial = new Qe(), this.ExclamatoryMarkMaterial.InitShader(),
                this.ExclamatoryMarkMaterial.Color = new Laya.Vector3(1, 0, 0), t.meshRenderer.material = this.ExclamatoryMarkMaterial,
                this.SetShaderValue(0), this.SetExclamatoryMarkPlanIsVisble(!1);
        }
        SetShaderValue(t) {
            if (!this.ExclamatoryMarkMaterial) return console.log("没有shader材质");
            this.ExclamatoryMarkMaterial.Value = t;
        }
        SetExclamatoryMarkPlanIsVisble(t) {
            if (!this.ExclamatoryMarkMaterial) return console.log("没有ExclamatoryMark物体");
            this.ExclamatoryMarkPlan.active = t;
        }
        StartWarn() {
            this.isHit || this.isDead || (this._isWarn = !0, this.SetExclamatoryMarkPlanIsVisble(!0));
        }
        UpdateWarnProgress() {
            this._isWarn && (this._warnTimer += Me.deltaTimeSec, this._warnTimer >= this._warnTime ? (this.FireMissile(),
                this.SetExclamatoryMarkPlanIsVisble(!1), this._isWarn = !1, this._warnTimer = 0) : this.SetShaderValue(this._warnTimer / this._warnTime));
        }
        ChangeColor(t) {
            let e = t;
            if (e.meshRenderer) {
                let t = e.meshRenderer.material;
                t.albedoColor = new Laya.Vector4(.03, .03, .03, 1), t.albedoIntensity = 1, t.specularColor = new Laya.Vector4(.349, .349, .349, 1),
                    t.shininess = .0048;
            }
            if (t.numChildren > 0) {
                let e = t.numChildren;
                for (let i = 0; i < e; i++) this.ChangeColor(t.getChildAt(i));
            }
        }
        OnShootHook(t) {
            null != t && (this._isShootingHook = !0, this._isWarn = !1, this._warnT = 0, this._warnTimer = 0,
                this.SetExclamatoryMarkPlanIsVisble(!1));
        }
        OnRetractHook() {
            this._isShootingHook = !1;
        }
        onCollisionEnter(t) {
            super.onCollisionEnter(t);
            let e = t.other.owner.name;
            "Bullet_Left" != e && "Bullet_Right" != e && this._isApplyForce && (this.isDispose || this.Dispose());
        }
    }
    class ei extends Te {
        Log() {
            let t = this.sprite3D.getComponent(Laya.Animator);
            t && (t.enabled = !1);
        }
        ApplyImpulse(t) {
            super.ApplyImpulse(t), u.instance.AddKey(1), this.FlyKey();
        }
        OnHit(t) {
            let e = this.sprite3D.getComponent(Laya.Animator);
            return e && (e.enabled = !1), super.OnHit(t);
        }
        FlyKey() {
            let t = this.DeepFind("Key 1");
            if (null == t) return;
            let e = t.transform.position.clone();
            this.sprite3D.parent.addChild(t), t.transform.position = e, t.transform.position = t.transform.position;
            let i = t.transform.position.clone();
            Laya.Tween.to(i, {
                x: 1,
                y: 0,
                z: 0,
                update: new Laya.Handler(t, e => t.transform.position = e, [i])
            }, 800, Laya.Ease.linearOut, Laya.Handler.create(t, () => t.destroy()));
        }
    }
    class ii extends Te {
        ApplyImpulse(t) { }
        OnHit(t) {
            let e = this.sprite3D.getComponent(Laya.Animator);
            return e && (e.play("Play"), this.rigidBody.enabled = !1), !0;
        }
    }
    class si extends we {
        onAwake() {
            super.onAwake(), g.on(d.StartGame, this, this.onGameStart);
        }
        onGameStart() {
            let t = this.sprite3D.getComponent(Laya.Animator);
            t && t.play("Play");
        }
        onDestroy() {
            super.onDestroy(), g.off(d.StartGame, this, this.onGameStart);
        }
    }
    let ai = class extends te {
        constructor() {
            super(), this._UI = X, this._layer = Yt.Loading, this.Isshow = !1;
        }
        Init() {
            g.on(m.OnLevelLoad, this, this.setPlan);
        }
        Open() {
            this.Show(), this.ui.m_progress.value = 0, this.Isshow = !0;
        }
        Close() {
            this.Isshow = !1, Laya.timer.frameOnce(15, this, () => {
                this.Hide(), Laya.timer.clearAll(this);
            });
        }
        _OnShow() { }
        setPlan(t) {
            if (this.Isshow || this.Open(), t *= 100, this.ui.m_progress.value = t, this.ui.m_progress.value >= 100) return this.Close();
        }
    };
    ai = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], ai);
    class ni extends Te {
        constructor() {
            super(...arguments), this.isDead = !1, this._headDir = new Laya.Vector3(), this.up = new Laya.Vector3(0, 1, 0),
                this.isPause = !0, this.canMove = !1, this._hookRangeSqr = 9, this._isEnemy = !1,
                this._stateTimer = 0, this.stateDict = {}, this.stateList = [{
                    state: oi.idle,
                    time: 1.1,
                    nextState: oi.turn
                }, {
                    state: oi.turn,
                    time: 2,
                    nextState: oi.idle
                }, {
                    state: oi.takeTheShot,
                    time: 1e6
                }], this._isEventHit = !1, this._isEventImpulse = !1;
        }
        get animator() {
            return null == this._animator && (this._animator = this.sprite3D.getChildByName("GameObject").getComponent(Laya.Animator)),
                this._animator;
        }
        onAwake() {
            super.onAwake();
            let t = !("Woman" == this.sprite3D.name || "Cop" == this.sprite3D.name);
            this._isEnemy = t, g.event(d.NPC_Spawn, [this, t]), g.on(d.GameFail, this, this.OnPause),
                g.on(d.GameCom, this, this.OnPause), g.on(d.VideoStart, this, this.OnPause), g.on(d.VideoClose, this, this.Resume),
                g.on(d.GameRestart, this, this.Resume), g.on(d.StartGame, this, this.OnClickStart),
                g.on(d.NPC_Hit, this, this.OnHitNPC), g.on(d.NPC_ApplyImpulse, this, this.OnImpulseNPC),
                this.InitState();
        }
        onUpdate() {
            if (!(this.isDead || this.isDispose || this.isPause)) {
                if (!this.isDead) {
                    this.transform.getUp(this._headDir), Laya.Vector3.dot(this.up, this._headDir) < .5 && (this.isDead = !0,
                        Laya.timer.once(1e3, this, this.Dispose));
                }
                this.Tick();
            }
        }
        OnHit(t) {
            return this.isHit ? this.isHit : (this.isHit = !0, this.PlayClip(oi.underAttack),
                this.OnHitNPC(t), super.OnHit(t));
        }
        ApplyImpulse(t, e = !0) {
            if (super.ApplyImpulse(t, e), !this.sprite3D.destroyed) {
                0 == Ce.randomRangeInt(0, 2) ? be.instance.playSound(Oe.EnemyDie, 1) : be.instance.playSound(Oe.EnemyDieTwo, 1);
                let i = new Laya.Vector3(this.sprite3D.transform.position.x, this.sprite3D.transform.position.y + 1, this.sprite3D.transform.position.z);
                Xe.PlayEffect(ke.bz, i, this.sprite3D), this.PlayClip(oi.idle), this.OnImpulseNPC(t, e);
            }
        }
        Dispose() {
            if (this.isDispose) return;
            this.isDispose = !0;
            let t = !("Woman" == this.sprite3D.name || "Cop" == this.sprite3D.name);
            this.ActiveCapsuleCollider(), g.event(d.NPC_Destroy, [this, t]), Laya.timer.once(1e3, this, () => this.sprite3D.destroy());
        }
        OnClickStart() {
            this.isPause = !1;
        }
        OnPause() {
            this.isPause = !0, this.animator.speed = 1e-4;
        }
        Resume() {
            this.isPause = !1, this.animator.speed = 1, this.isHit = !1;
        }
        PlayClip(t) {
            this.animator && this.animator.play(t);
        }
        InitState() {
            this.stateList.forEach(t => this.stateDict[t.state] = t), this.currState = this.stateList[0],
                this.PlayClip(this.currState.state);
        }
        Tick() {
            this.isHit || (this._stateTimer += Me.deltaTimeSec, this._stateTimer >= this.currState.time && this.currState.nextState && (this.currState = this.stateDict[this.currState.nextState],
                this.SwitchState(this.currState)), this.OnState(this.currState));
        }
        OnState(t) {
            switch (t.state) {
                case oi.idle:
                case oi.turn:
            }
        }
        SwitchState(t) {
            t ? (this._stateTimer = 0, this.OnSwitchState(t)) : console.warn("不能切换空状态:", this.sprite3D.name, this.currState);
        }
        OnSwitchState(t) {
            this.PlayClip(t.state);
        }
        ActiveCapsuleCollider() {
            (this.rigidBody.colliderShape = new Laya.CapsuleColliderShape(.36, 1.5)).localOffset = new Laya.Vector3(0, .9, 0);
        }
        OnHitNPC(t) {
            if (this._isEventHit || !this._isEnemy || null == t || !(t instanceof Laya.Sprite3D) || !this || !this.owner || !this.transform || !this.transform.position) return;
            this._isEventHit = !0;
            // let e = t.transform.position.y > this.transform.position.y;
            // Laya.Vector3.distanceSquared(t.transform.position, this.transform.position) < this._hookRangeSqr && e ? (g.event(d.NPC_Hit, [t]),
            //     this.isHit || (this.OnHit(t), this.transform.localPosition.x = t.transform.position.x,
            //         Laya.timer.clearAll(this))) : console.log("距离太远不捆绑吸附");
        }
        OnImpulseNPC(t, e = !0) {
            this._isEnemy && !this._isEventImpulse && this.isHit && (this._isEventImpulse = !0,
                this.ApplyImpulse(t, e), g.event(d.NPC_ApplyImpulse, [t, e]));
        }
    }
    var oi;
    !function (t) {
        t.idle = "idle", t.attack = "attack", t.qIdle = "qidle", t.qTurn = "qTurn", t.run = "run",
            t.turn = "Turn", t.underAttack = "Under attack", t.takeTheShot = "Take the shot";
    }(oi || (oi = {}));
    class ri extends ni {
        constructor() {
            super(...arguments), this._moveSpeed = .2, this._t = 0, this._dir = !0;
        }
        onAwake() {
            super.onAwake();
            let t = this.InitWps();
            if (this.InitState(t), t) {
                this.DeepFind("help").active = !1;
            }
        }
        onStart() {
            super.onStart(), this.canMove && (this._wp1.cloneTo(this.transform.position), this.transform.position = this.transform.position,
                this.transform.lookAt(this._wp2, this.up));
        }
        onUpdate() {
            if (!(this.isDead || this.isDispose || this.isPause) && (super.onUpdate(), !this.isHit && this.canMove)) {
                let t = this.CalT();
                this.Move(t);
            }
        }
        OnClickStart() {
            if (super.OnClickStart(), this.canMove) {
                let t = this.stateDict[oi.run];
                this.SwitchState(t);
            }
        }
        InitState(t = !1) {
            t && (this.stateList = [{
                state: oi.idle,
                time: 1e7
            }, {
                state: oi.run,
                time: 1e6
            }, {
                state: oi.takeTheShot,
                time: 1e6
            }]), super.InitState();
        }
        CalT() {
            return this._t += Me.deltaTimeSec * this._moveSpeed, this._t > 1 && (this._t = 0,
                this._dir = !this._dir), this._t;
        }
        InitWps() {
            let t = this.sprite3D.parent.getChildByName("wp1"), e = this.sprite3D.parent.getChildByName("wp2");
            return !(!t || !e) && (t.active = !1, e.active = !1, this._wp1 = t.transform.position.clone(),
                this._wp2 = e.transform.position.clone(), this.canMove = !0, !0);
        }
        Move(t) {
            this._dir ? (Laya.Vector3.lerp(this._wp1, this._wp2, t, this.transform.position),
                this.transform.lookAt(this._wp2, this.up)) : (Laya.Vector3.lerp(this._wp2, this._wp1, t, this.transform.position),
                    this.transform.lookAt(this._wp1, this.up)), this.transform.position = this.transform.position;
        }
        OnExplode(t, e = 3) {
            this.sprite3D.destroyed || Laya.Vector3.distance(t, this.transform.position) < e && (super.OnExplode(t, e),
                this.Dispose());
        }
    }
    class hi extends $e {
        constructor() {
            super(...arguments), this.speed = 4, this.targetPos = new Laya.Vector3(0, .5, 0);
        }
        OnHit(t) {
            return g.event(d.ReflectBullet, [this]), !0;
        }
        ApplyImpulse(t) { }
        SetReflectTarget(t) {
            this.time = 5, this.timer = 0, this.transform.position.cloneTo(this.startPos), t ? (t.transform.position.cloneTo(this.targetPos),
                this.targetPos.y += .5, this.time = Laya.Vector3.distance(this.transform.position, t.transform.position) / this.speed / 3) : (this.targetPos.x = 60 * Math.random() - 30,
                    this.targetPos.y = 10 * Math.random() + 20, this.targetPos.z = this.transform.position.z),
                this.onReachTarget = Laya.Handler.create(this, () => {
                    if (t) {
                        let e = new Laya.Vector3();
                        Laya.Vector3.scale(e, -1, e), Laya.Vector3.subtract(this.targetPos, this.startPos, e),
                            e.y = 5, t.isHit || t.ApplyImpulse(e, !0);
                    }
                    this.Dispose();
                });
        }
    }
    class li extends ni {
        constructor() {
            super(...arguments), this.stateList = [{
                state: oi.qIdle,
                time: 1.1,
                nextState: oi.qTurn
            }, {
                state: oi.qTurn,
                time: 4
            }, {
                state: oi.attack,
                time: 1.1
            }, {
                state: oi.takeTheShot,
                time: 1e6
            }], this._warnTimer = 0, this._warnT = 0, this._warnTime = 4;
        }
        onAwake() {
            super.onAwake(), this.InitShader(), g.on(d.NPC_Hit, this, this.OnShootHook), g.on(d.NPC_ApplyImpulse, this, this.OnRetractHook);
        }
        onUpdate() {
            this.isDead || this.isDispose || this.isPause || (super.onUpdate(), this.isHit || this._isShootingHook || this._isWarn && this.UpdateWarnProgress());
        }
        OnSwitchState(t) {
            switch (super.OnSwitchState(t), t.state) {
                case oi.attack:
                    this.TryShoot();
                    break;

                case oi.qTurn:
                    Laya.timer.once(2500, this, this.StartWarn);
            }
        }
        OnHit(t) {
            return this.SetExclamatoryMarkPlanIsVisble(!1), super.OnHit(t);
        }
        ApplyImpulse(t, e = !0) {
            this.SetExclamatoryMarkPlanIsVisble(!1), super.ApplyImpulse(t, e);
        }
        TryShoot() {
            g.event(d.TryShoot, this);
        }
        Shoot() {
            let t = Rt.PrefabURL(ke.Bullet);
            be.instance.playSound(Oe.EnenyShot, 1), At.Load(t, pt.D3, Laya.Handler.create(this, () => {
                let e = At.GetRes(t);
                this.sprite3D.parent.addChild(e);
                let i = e.addComponent(hi);
                Laya.Vector3.add(this.transform.position, new Laya.Vector3(0, .5, 0), i.transform.position),
                    i.transform.position = i.transform.position, this.PlayClip(oi.takeTheShot), i.Fire(),
                    Laya.timer.once(1e3, this, () => {
                        let t = this.stateDict[oi.qTurn];
                        this.SwitchState(t);
                    });
            }));
        }
        CantShoot() {
            Laya.timer.once(1e3, this, () => {
                let t = this.stateDict[oi.qTurn];
                this.SwitchState(t), console.log("不可以射击");
            });
        }
        InitShader() {
            this.ExclamatoryMarkPlan = this.DeepFind("polySurface2_0");
            let t = this.ExclamatoryMarkPlan;
            this.ExclamatoryMarkMaterial = new Qe(), this.ExclamatoryMarkMaterial.InitShader(),
                this.ExclamatoryMarkMaterial.Color = new Laya.Vector3(1, 0, 0), t.meshRenderer.material = this.ExclamatoryMarkMaterial,
                this.SetShaderValue(0), this.SetExclamatoryMarkPlanIsVisble(!1);
        }
        SetShaderValue(t) {
            if (!this.ExclamatoryMarkMaterial) return console.log("没有shader材质");
            this.ExclamatoryMarkMaterial.Value = t;
        }
        SetExclamatoryMarkPlanIsVisble(t) {
            if (!this.ExclamatoryMarkMaterial) return console.log("没有ExclamatoryMark物体");
            this.ExclamatoryMarkPlan.active = t;
        }
        StartWarn() {
            this.isHit || this.isDead || this.isDispose || (this._isWarn = !0, this.SetExclamatoryMarkPlanIsVisble(!0));
        }
        UpdateWarnProgress() {
            this._isWarn && (this._warnTimer += Me.deltaTimeSec, this._warnTimer >= this._warnTime ? (this.TryShoot(),
                this.SetExclamatoryMarkPlanIsVisble(!1), this._isWarn = !1, this._warnTimer = 0) : this.SetShaderValue(this._warnTimer / this._warnTime));
        }
        CloseWarn() {
            this._isWarn = !1, this.SetExclamatoryMarkPlanIsVisble(!1), this.SetWeaponActive(!1);
        }
        Dispose() {
            this.CloseWarn(), this.SetWeaponActive(!1), super.Dispose();
        }
        SetWeaponActive(t, e = "Rifle") {
            let i = this.DeepFind(e);
            i ? i.active = t : null;//console.error("没有找到武器:", e);
        }
        OnExplode(t, e = 3) {
            let i = new Laya.Vector3();
            Laya.Vector3.subtract(this.transform.position, t, i), i.y = 0, Laya.Vector3.scalarLength(i) < e && (this.CloseWarn(),
                super.OnExplode(t, e));
        }
        OnShootHook(t) {
            null != t && (Laya.timer.clear(this, this.StartWarn), this._isShootingHook = !0,
                this._isWarn = !1, this._warnT = 0, this._warnTimer = 0, this.SetExclamatoryMarkPlanIsVisble(!1));
        }
        OnRetractHook() {
            if (this._isShootingHook = !1, this.isDispose || this.isHit) return;
            let t = this.stateDict[oi.qTurn];
            this.SwitchState(t);
        }
    }
    class ci {
        constructor() {
            this.ScriptOwner = null, this.IsOpen = !1, this.BoxOpenCount = 0, this.IsBoXClick = !0;
            console.log(1111, this.IsBoXClick)
        }
        static GetInstancle() {
            return null == this._ShopManager && (this._ShopManager = new ci(), this._ShopManager.Init()),
                this._ShopManager;
        }
        Init() {
            g.on(d.OpenTreasureBox, this, this.OpenBox), g.on(d.ReSetTreasureBox, this, this.ReSetOpen),
                g.on(d.LevelDestroy, this, this.ReMoveBoxPlan), this.IsOpen = !1, this.IsBoXClick = !0;
            console.log(2222, this.IsBoXClick)
        }
        ReSetOpen() {
            this.IsOpen = !1, this.IsBoXClick = !0;
            console.log(3333, this.IsBoXClick)
        }
        ReMoveBoxPlan() {
            this.IsBoXClick = !1;
            null != this.ScriptOwner && (this.ScriptOwner.destroy(), this.ScriptOwner = null);
        }
        OpenBox() {
            this.IsOpen || (this.IsOpen = !0, this.IsBoXClick = !1, console.log(4444, this.IsBoXClick), Laya.timer.once(1500, this, this.SendEventUI),
                console.log("开启宝箱"));
        }
        SendEventUI() {
            this.BoxOpenCount++, this.BoxOpenCount < 3 ? g.event(m.ShowUIBox, [200, !0]) : g.event(m.ShowUIBox, [200, !1]),
                console.log("发送了UI事件");
        }
        LodeBox(t) {
            let e = t.prefabs[ke.TreasureBox][0];
            return e ? (this.ScriptOwner = e.parent, this.ScriptOwner ? (this.BoxOpenCount = 0,
                void console.log(this.ScriptOwner)) : console.log("获取宝箱父节点失败")) : console.log("获取宝箱失败");
        }
    }
    class mi extends Te {
        constructor() {
            super(...arguments), this.IsOpen = !1;
        }
        onAwake() {
            super.onAwake(), this.Animtor = this.sprite3D.getComponent(Laya.Animator);
        }
        ApplyImpulse(t) { }
        OnHit(t) {
            console.log("开启宝箱", this.IsOpen, !ci.GetInstancle().IsBoXClick, this.Animtor)
            return !!this.IsOpen || (!ci.GetInstancle().IsBoXClick || (this.IsOpen = !0, g.event(d.OpenTreasureBox),
                this.Animtor ? (this.Animtor.play("Play"), !0) : (console.log("没有动画机"), !0)));
        }
    }
    class di extends ni {
        constructor() {
            super(...arguments), this._time = 5, this._timer = 0, this._origin = new Laya.Vector3(),
                this._targetPos = new Laya.Vector3(), this._zero = new Laya.Vector3(), this._up = new Laya.Vector3(0, 1, 0),
                this._isReach = !1, this.stateList = [{
                    state: oi.idle,
                    time: 1e3
                }, {
                    state: oi.run,
                    time: 1e3
                }, {
                    state: oi.attack,
                    time: 1e3
                }], this._ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3(0, -1, 0)), this._hit = new Laya.HitResult();
        }
        onAwake() {
            super.onAwake(), this.transform.position.cloneTo(this._origin), this._time = Laya.Vector3.scalarLength(this.transform.position),
                g.on(d.GameRestart, this, this.OnGameResume), g.on(d.StartGame, this, this.OnGameStart),
                this.canMove = !0;
        }
        onUpdate() {
            if (this.isDead || this.isDispose || this.isPause || this._isReach) return;
            if (super.onUpdate(), this.isHit) return;
            this.canMove && this.Move(), Laya.Vector3.distance(this.transform.position, this._zero) < 5 && (this._isReach = !0,
                this.isHit = !0, this.rigidBody.isKinematic = !0, this.PlayClip(oi.attack), Laya.timer.once(2e3, this, () => g.event(d.GameFail)));
        }
        Move() {
            let t = this.CalT();
            t <= 1 && (Laya.Vector3.lerp(this._origin, this._targetPos, t, this.transform.position),
                this.transform.localPosition.y = this.UpdateY(), this.transform.position = this.transform.localPosition,
                this.transform.lookAt(this._zero, this.up));
        }
        CalT() {
            return this._timer += Me.deltaTimeSec, this._timer / this._time;
        }
        UpdateY() {
            let t = Kt.Scene3D.physicsSimulation;
            if (t && (this.transform.position.cloneTo(this._ray.origin), this._ray.origin.y += .2,
                t.rayCast(this._ray, this._hit))) return this._hit.point.y;
        }
        OnGameResume() {
            this._isReach && (this.isDispose = !0, this.isDead = !0, this.sprite3D.destroy());
        }
        OnGameStart() {
            this.PlayClip(oi.run);
        }
        OnExplode(t, e = 3) {
            Laya.Vector3.distance(this.transform.position, t) < e && (this.canMove = !1, this.rigidBody && (this.rigidBody.isKinematic = !1),
                super.OnExplode(t, e));
        }
        OnHit(t) {
            return this.rigidBody.isKinematic = !0, super.OnHit(t);
        }
    }
    class gi extends we {
        constructor() {
            super(...arguments), this._origin = new Laya.Vector3(), this._rotation = new Laya.Vector3(),
                this._originAngleY = 0, this._up = new Laya.Vector3(0, 1, 0);
        }
        static get instance() {
            return this._instance;
        }
        get animator() {
            return null == this._animator && (this._animator = this.sprite3D.getComponent(Laya.Animator)),
                this._animator;
        }
        onAwake() {
            this._originAngleY = this.transform.localRotationEulerY, this.animator.enabled = !1,
                this.transform.position.cloneTo(this._origin), this.transform.rotationEuler.cloneTo(this._rotation),
                gi._instance = this, super.onAwake(), this.Init(), g.on(d.FiringWeapons, this, this.OnFireWeapon),
                g.on(m.ShowUIFail, this, this.OnGameFail), g.on(d.GameRestart, this, this.OnGameStart),
                g.on(d.GameStart, this, this.OnGameStart), g.on(d.ShootHook, this, this.OnShootHook),
                g.on(d.TryRetractHook, this, this.OnRetractHook);
        }
        Init() {
            this.m_SceneCamera = Kt.Camera;
            let t = this.m_SceneCamera.transform.position.clone();
            this.sprite3D.addChild(this.m_SceneCamera), this.m_SceneCamera.transform.position = t,
                this.m_SceneCamera.transform.position = this.m_SceneCamera.transform.position;
        }
        OnFireWeapon() {
            Laya.Tween.to(this.transform, {
                localPositionX: .02
            }, 20, void 0, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.transform, {
                    localPositionX: -.02
                }, 40, void 0, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.transform, {
                        localPositionX: 0
                    }, 20);
                }));
            }));
        }
        OnGameFail() {
            Laya.Tween.clearAll(this.transform), this.animator.enabled = !0, this.animator.play("Dead");
        }
        OnGameStart() {
            Laya.Tween.clearAll(this.transform), this.animator.enabled = !1, this._origin.cloneTo(this.transform.position),
                this._rotation.cloneTo(this.transform.rotationEuler), this.transform.position = this.transform.position,
                this.transform.rotationEuler = this.transform.rotationEuler;
        }
        OnShootHook(t) {
            if (null == t) return;
            let e = t.transform.position.clone();
            e.x = -e.x, e.y = this.transform.position.y, e.z = -e.z;
            let i = this.transform.localRotationEulerY;
            this.transform.lookAt(e, this._up);
            let s = this.transform.localRotationEulerY;
            this.transform.localRotationEulerY = i, Laya.Tween.to(this.transform, {
                localRotationEulerY: s
            }, 500);
        }
        OnRetractHook() {
            Laya.Tween.to(this.transform, {
                localRotationEulerY: this._originAngleY
            }, 500);
        }
    }
    class _i extends Te {
        constructor() {
            super(...arguments), this._isHitNPC = !1;
        }
        onCollisionEnter(t) {
            if (this._isHitNPC) return;
            if (super.onCollisionEnter(t), null == t || null == t.other || null == t.other.owner) return;
            let e = t.other.owner.getComponent(ni);
            if (e) {
                let t = new Laya.Vector3();
                Laya.Vector3.subtract(this.transform.position, e.transform.position, t), Laya.Vector3.scale(t, 4, t),
                    e.isHit || (e.isHit = !0, e.ApplyImpulse(t, !0), this._isHitNPC = !0);
            }
            g.event(d.TryExplode, [this.transform.position, 1]);
        }
    }
    class ui {
        static LoadPlayer(t, e = "Hand", i = "Scene") {
            this.LoadNode(e, i).then(e => {
                ui.player = e.prefabs[ke.Player][0].addComponent(Ee),
                    e.prefabs[ke.Player][0].addComponent(je),
                    e.prefabs[ke.Player][0].addComponent(He),
                    e.prefabs[ke.CameraRoot][0].addComponent(gi),
                    t && t.runWith(e);
            });
        }
        static LoadEnv(t) {
            let e = ze.instance.dataList[t].env;
            ui.env && (ui.env.node.active = !1);
            let i = this._envDict[e];
            i ? (i.node.active = !0, ui.env = i, g.event(d.EnvLoadComplete)) : this.LoadNode(e, "Scene").then(t => {
                ui._envDict[i] = t, ui.env = t, g.event(d.EnvLoadComplete);
            });
        }
        static LoadShop(t, e = null, i = "Scene") {
            this.LoadNode(t, i).then(t => {
                e && e.runWith(t);
            });
        }
        static LoadLevel(t, e = null, i = "Scene") {
            console.log("加载关卡:", ze.instance.dataList[t]);
            let s = "Level_" + ze.instance.dataList[t].level;
            ui.level && ui.level.delete(), g.event(d.LevelDestroy);
            let a = Laya.Handler.create(this, t => g.event(m.OnLevelLoad, [t]), null, !1);
            this.LoadNode(s, i, a).then(t => {
                ui.OnLoadLevelComplete(t), e && e.runWith(t);
            }), this.LoadEnv(t);
        }
        static LoadNode(t, e, i) {
            let s = Jt.instance.getScene(e);
            if (null == s) return null//void console.error("获取场景配置Json失败：", e);
            let a = s.getSceneNode(t);
            if (a) return a.asyncBuild(i);
            // console.error("加载节点失败:", t, e);
        }
        static OnLoadLevelComplete(t) {
            ui.level = t, t.scene.setEnvironment(), ui.AddComponent(t.prefabs[ke.Wooden_Box], Ue),
                ui.AddComponent(t.prefabs[ke.WaterTankPlank_14], Ke), ui.AddComponent(t.prefabs[ke.WaterTankPlank_25], Ke),
                ui.AddComponent(t.prefabs[ke.WaterTankPlank_27], Ke), ui.AddComponent(t.prefabs[ke.WaterTankPlank_27_1], Ke),
                ui.AddComponent(t.prefabs[ke.Wooden_Scaffoldings_8], Ke), ui.AddComponent(t.prefabs[ke.Iron], Je),
                ui.AddComponent(t.prefabs[ke.Brick], _i), ui.AddComponent(t.prefabs[ke.Airship], ei),
                ui.AddComponent(t.prefabs[ke.Plank_Plan], ii), ui.AddComponent(t.prefabs[ke.truck], si),
                ui.AddComponent(t.prefabs[ke.Agent], li), ui.AddComponent(t.prefabs[ke.Woman], ri),
                ui.AddComponent(t.prefabs[ke.man], di), ui.AddComponent(t.prefabs[ke.Terriest], li),
                ui.AddComponent(t.prefabs[ke.Coah], di), ui.AddComponent(t.prefabs[ke.Cop], ri),
                ui.AddComponent(t.prefabs[ke.Ninja], di), ui.AddComponent(t.prefabs[ke.Explosive_Barrel], Ye),
                ui.AddComponent(t.prefabs[ke.Aircraft], ti), Laya.timer.once(500, this, () => {
                    g.event(d.LevelLoadComplete);
                });
        }
        static AddComponent(t, e) {
            t && t.length > 0 && t.forEach(t => t.addComponent(e));
        }
        static LoadBox(t, e = null, i = "Scene") {
            ui.level && ui.level.delete(), g.event(d.LevelDestroy);
            let s = Laya.Handler.create(this, t => g.event(m.OnLevelLoad, [t]), null, !1);
            this.LoadNode(t, i, s).then(t => {
                ui.OnLoadBoxComplete(t), ai.instance.Hide(), e && e.runWith(t);
            }), this.LoadEnv(1);
        }
        static OnLoadBoxComplete(t) {
            t.scene.setEnvironment(), ui.AddComponent(t.prefabs[ke.TreasureBox], mi);
        }
    }
    ui._envDict = {};
    let pi = class {
        constructor() {
            this._comboTimer = 0, this._comboNumber = 0, this._comboInterval = 500, this._isLevelReady = !1,
                this._isEnvReady = !1, this._enemyList = [], this._friendList = [], this._isLoadShop = !1,
                this._isGameFail = !1, this._isGameCom = !1, this._lastShootTime = 0, this._shootInterval = 1e3,
                this.MagnetTime = 500;
        }
        Init() {
            g.on(d.NPC_Destroy, this, this.OnNpcDestroy), g.on(d.NPC_Spawn, this, this.OnNpcSpawn),
                g.on(d.LevelDestroy, this, this.OnLevelDestroy), g.on(d.GameStart, this, this.OnGameStart),
                g.on(d.GameRestart, this, this.OnGameRestart), g.on(d.GameCom, this, this.OnGameComplete),
                g.on(d.GameFail, this, this.OnGameFail), g.on(d.TryShoot, this, this.ManagerShoot),
                g.on(d.ReflectBullet, this, this.OnReflectBullet), g.on(d.MagnetEffect, this, this.MagnetEffect),
                g.on(d.MagnetBackEffect, this, this.OnBackMagnet), g.on(m.UIClickStart, this, this.OnClickStart),
                g.on(d.LevelLoadComplete, this, this.OnLevelLoadComplete), g.on(d.EnvLoadComplete, this, this.OnLoadEnvComplete);
        }
        OnLevelDestroy() {
            this._enemyList = [], this._friendList = [];
        }
        OnNpcSpawn(t, e) {
            e ? this._enemyList.push(t) : this._friendList.push(t);
        }
        OnNpcDestroy(t, e) {
            if (e) {
                let e = this._enemyList.indexOf(t);
                e > -1 ? this._enemyList.splice(e, 1) : null,//console.error("删除敌人Npc失败：", t.sprite3D.name, t),
                    this.UpdateComboState(), console.log("剩余敌人：", this._enemyList.length, this._enemyList),
                    this._enemyList.length <= 0 && (g.event(d.NoShoot), Laya.timer.once(1500, this, this.GameEnd));
            } else {
                g.event(d.GameFail);
                g.event(d.ChangeTextEnd)
            };
        }
        GameStart() {
            this.OnGameStart();
        }
        GameEnd() {
            g.event(d.ChangeTextEnd)
            xe.GetInstancle().IsLode ? (this._isGameCom = !0, g.event(d.MoveCamera), g.event(m.HideUIGame)) : g.event(d.GameCom);
        }
        OnGameStart() {
            this._isLevelReady = !1, this._isEnvReady = !1, this._isGameFail = !1, this._isGameCom = !1,
                this.UpdateHook(), u.instance.data.TryLastHookNumber && (u.instance.data.HookNumber = u.instance.data.TryLastHookNumber,
                    u.instance.data.TryLastHookNumber = 0)
            // if (u.instance.data.keyNum >= 3) {
            //     u.instance.data.keyNum = 0;
            //     return void ui.LoadBox("TreasureBox", Laya.Handler.create(this, t => {
            //         ci.GetInstancle().LodeBox(t), g.event(d.CanShoot);
            //     }));
            // }
            let t = u.instance.data.level, e = ze.instance.dataList.length - 1;
            this._isLoadShop = t % 10 == 5, this._isLoadShop && (console.log("加载SHOP"), ui.LoadShop("Shop", Laya.Handler.create(this, t => {
                xe.GetInstancle().LodeShop(t);
            }))), t %= e, ui.LoadLevel(t), g.event(m.ShowUIStart);
        }
        InitSkin() {
            g.event(m.ChangeHook, u.instance.data.HookModel), g.event(m.ChangeClock, u.instance.data.ClockName),
                g.event(m.ChangeGrove, u.instance.data.GroveName);
        }
        OnGameRestart() {
            this._isGameFail = !1, this._isGameCom = !1, this._enemyList.length <= 0 && g.event(d.GameCom);
        }
        OnGameComplete() {
            if (this._isGameFail) return;
            this.InitSkin(), this._isGameCom = !0;
            let t = u.instance.data;
            if (t.TryLastHookNumber) {
                t.HookNumber = t.TryLastHookNumber, t.TryLastHookNumber = 0;
                let e = u.instance.data.HookModel;
                g.event(m.ChangeHook, [e]);
            }
            ue.getInstance().openMoreGameDialog(Laya.Handler.create(this, () => {
                g.event(m.ShowUICom);
            })), console.warn("Game Win!");
            g.event(d.ChangeTextEnd)
        }
        OnGameFail() {
            if (this._isGameCom) return;
            this._isGameFail = !0;
            let t = u.instance.data;
            if (t.TryLastHookNumber) {
                t.HookNumber = t.TryLastHookNumber, t.TryLastHookNumber = 0;
                let e = u.instance.data.HookModel;
                g.event(m.ChangeHook, [e]);
            }
            Laya.timer.clearAll(this);
            let e = null != this._enemyList.find(t => !t.isHit);
            g.event(m.ShowUIFail, [e]), console.warn("Game Fail!!!");
            g.event(d.ChangeTextEnd)
        }
        ManagerShoot(t) {
            let e = new Date().getTime();
            e - this._lastShootTime > this._shootInterval ? (this._lastShootTime = e, t.Shoot()) : t.CantShoot();
        }
        OnReflectBullet(t) {
            let e = Math.floor(Math.random() * this._enemyList.length), i = this._enemyList[e];
            t.SetReflectTarget(i);
        }
        MagnetEffect(t, e, i) {
            this.MagnetEffectTargetArray = [];
            let s = this._enemyList.length;
            if (null == this.TempOBj) {
                g.event(d.MagnetEffectAttackTarget);
                let e = new Laya.Sprite3D(ke.citie);
                i.addChild(e), this.TempOBj = e, Xe.PlayEffect(ke.citie, t, e);
                for (let e = 0; e < s; e++) {
                    if (!(this._enemyList[e] instanceof ti)) {
                        this.MagnetEffectTargetArray.push(this._enemyList[e]), this._enemyList[e].rigidBody.isKinematic = !0;
                        let s = this._enemyList[e].sprite3D.transform, a = s.position, n = t.clone();
                        this._enemyList[e].OnHit(i), Laya.Tween.to(a, {
                            x: n.x,
                            y: n.y,
                            z: n.z,
                            update: new Laya.Handler(this, t => {
                                s.position = t;
                            }, [a])
                        }, this.MagnetTime, null);
                    }
                }
            }
        }
        OnBackMagnet(t) {
            if (this.TempOBj && (this.TempOBj.destroy(), this.TempOBj = null), null == t) return;
            let e = this.MagnetEffectTargetArray.length;
            for (let i = 0; i < e; i++) this.MagnetEffectTargetArray[i].rigidBody.isKinematic = !1,
                this.MagnetEffectTargetArray[i].ApplyImpulse(t);
            u.instance.TempMagnet = "";
        }
        UpdateComboState() {
            let t = new Date().getTime();
            t - this._comboTimer < this._comboInterval ? (this._comboNumber++, console.log("刷新连杀：", this._comboNumber),
                g.event(m.ShowUIEvent, [this._comboNumber])) : this._comboNumber = 1, this._comboTimer = t;
        }
        UpdateHook() {
            null != u.instance.data.LastHook && "" != u.instance.data.LastHook && (console.log("执行了方法"),
                u.instance.data.HookModel = u.instance.data.LastHook);
        }
        OnClickStart() {
            // if (this._isLevelReady && this._isEnvReady) {
            g.event(m.HideUIStart, !0);
            let t = fx.CfgMgr.getInstance().get("json/constant.json", "startTryHook"), e = fx.CfgMgr.getInstance().get("json/constant.json", "intarvalTryHook"), i = fx.CfgMgr.getInstance().get("json/constant.json", "startTrySkin"), s = fx.CfgMgr.getInstance().get("json/constant.json", "intarvalTrySkin"), a = u.instance.data;
            xe.GetInstancle().isHasVideoItem() && this.checkStageTrySkin(i, s) ? (xe.GetInstancle().RandomVideoItem(),
                g.event(m.ShowTrySkin, !1)) : a.HookNumber < 3 && this.checkStageTryHook(t, e) ? g.event(m.ShowTryHook) : (xe.GetInstancle().setCurTrySkin(null),
                    g.event(d.StartGame), g.event(m.ShowUIGame), g.event(d.CanShoot));
            // } else console.log("环境和关卡未加载完成，等待中。。。");
        }
        OnLevelLoadComplete() {
            this._isLevelReady = !0;
        }
        OnLoadEnvComplete() {
            this._isEnvReady = !0;
        }
        addCloseTryNum() {
            u.instance.data.closeTryNum += 1;
        }
        getCloseTryNum() {
            return fx.UserLogic.getInstance().isNewDay() && (u.instance.data.closeTryNum = 0),
                u.instance.data.closeTryNum;
        }
        checkStageTrySkin(t, e) {
            let i = u.instance.data.level;
            return !!i && (!(t > i) && (!(this.beforeOpenTrySkin && Math.abs(this.beforeOpenTrySkin - i) < e + 1) && (this.beforeOpenTrySkin = i,
                !0)));
        }
        checkStageTryHook(t, e) {
            let i = u.instance.data.level;
            return !!i && (!(t > i) && (!(this.beforeOpenTryHook && Math.abs(this.beforeOpenTryHook - i) < e + 1) && (this.beforeOpenTryHook = i,
                !0)));
        }
        checkStageInterChange() {
            let t = fx.CfgMgr.getInstance().get("json/constant.json", "changeBtn"), e = u.instance.data.level;
            return !!e && (!(t >= e) && (this.beforeChange ? e - this.beforeChange >= 2 * t && (this.beforeChange = e) : this.beforeChange = e,
                !(e - this.beforeChange >= t && e - this.beforeChange < 2 * t)));
        }
    };
    pi = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], pi);
    let yi = class extends te {
        constructor() {
            super(), this._UI = F;
        }
        Init() {
            g.on(m.ShowUICom, this, this.Show);
        }
        _onShow(t, ...e) {
            this.showAd(), this.ui.m_Btn_nothanks.onClick(this, this.OnClickNoThanks), this.ui.m_Btn_ad.onClick(this, this.OnClickAd);
            let i = u.instance.data.level;
            if (this.ui.m_Title.m_Txt_level.text = "关卡 " + i, fx.Sdk.getInstance().isHarvest() && pi.instance.checkStageInterChange()) {
                let t = this.ui.m_Btn_ad.y;
                this.ui.m_Btn_ad.y = this.ui.m_Btn_nothanks.y, this.ui.m_Btn_nothanks.y = t;
            }
        }
        showAd() {
            fx.Sdk.getInstance().showBanner(), this.iconWall = _e.instance.getIconWall(), this.iconWall && (Laya.stage.addChild(this.iconWall),
                this.iconWall.x = this.ui.m_Btn_ad.x, this.iconWall.y = this.ui.m_Btn_ad.y - 680);
        }
        OnClickNoThanks() {
            platform.getInstance().showInterstitial(() => {
                this.OnClose(100);
            })
        }
        OnClickAd(t) {
            me.getInstance().playVideo(t.target, Laya.Handler.create(this, () => {
                this.OnClose(200);
            }));
        }
        OnClose(t) {
            this.iconWall && this.iconWall.removeSelf(), u.instance.AddMoney(t), this.Hide();
            let e, i = xe.GetInstancle().curTrySkin;
            i && (i.m_Itemtype == p.Grove ? e = i.m_ItemData.texture : i.m_Itemtype == p.Clock ? e = i.m_ItemData.model : i.m_Itemtype == p.Hook && (e = i.m_ItemData.ui)),
                e && !xe.GetInstancle().isOwnSkin(i.m_Itemtype, e) ? g.event(m.ShowTrySkin, !0) : g.event(d.GameStart);
        }
    };
    yi = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], yi);
    let fi = class extends te {
        constructor() {
            super(), this._UI = j, this._deadTime = 0;
        }
        Init() {
            g.on(m.ShowUIFail, this, this.Open);
        }
        _onShow(t, ...e) {
            this.ui.m_Title.m_Txt_level.text = "关卡 " + (u.instance.data.level + 1), this.ui.m_Title.m_Txt_state.text = "失败",
                this.showAd(), this.ui.m_Btn_ad.onClick(this, this.OnCliCkAD), this.ui.m_Btn_restart.onClick(this, this.OnClickRestart),
                this.ui.m_Btn_restart2.onClick(this, this.OnClickRestart);
            u.instance.data.level;
            if (fx.Sdk.getInstance().isHarvest() && pi.instance.checkStageInterChange()) {
                let t = this.ui.m_Btn_ad.y;
                this.ui.m_Btn_ad.y = this.ui.m_Btn_restart.y, this.ui.m_Btn_restart.y = t;

            }
        }
        showAd() {
            fx.Sdk.getInstance().showBanner(), this.iconWall = _e.instance.getIconWall(), this.iconWall && (Laya.stage.addChild(this.iconWall),
                this.iconWall.x = this.ui.m_Btn_ad.x, this.iconWall.y = this.ui.m_Btn_ad.y - 650);
        }
        Open(t) {
            let e = new Date().getTime();
            e - this._deadTime > 3e3 ? (this._deadTime = e, this.Show(), this.ui.m_type.selectedIndex = t ? 0 : 1,
                console.log("显示面板", t ? "可以复活" : "不可以复活")) : (console.log("继续游戏,无敌时间！！！"), Laya.timer.frameOnce(1, this, () => g.event(d.GameRestart)));
        }
        OnCliCkAD(t) {
            me.getInstance().playVideo(t.target, Laya.Handler.create(this, () => {
                this.Hide(), this.iconWall && this.iconWall.removeSelf(), g.event(d.GameRestart);
            }));
        }
        OnClickRestart() {
            this.OnRemove(), this.Hide();
        }
        OnRemove() {
            this.iconWall && this.iconWall.removeSelf();
            let t = xe.GetInstancle().curTrySkin;
            t && !xe.GetInstancle().isOwnSkin(t.m_Itemtype, t.m_ItemData.ui) ? g.event(m.ShowTrySkin, !0) : g.event(d.GameStart);
        }
    };
    fi = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], fi);
    let Li = class extends te {
        constructor() {
            super(), this._UI = Z, this._layer = Yt.Popup, this._hookNum = 1;
        }
        Init() {
            g.on(m.ShowUIUnlock, this, this.Open);
        }
        Open(t) {
            this._hookNum = t, this.Show();
        }
        _onShow(t, ...e) {
            this.ui.m_number.selectedIndex = 2 == this._hookNum ? 0 : 1, this.ui.m_Btn_ok.onClick(this, this.onRemove);
            this.ui.m_Txt_info.width = 500;
            this.ui.m_Txt_title.width = 500;
            this.ui.m_Txt_info.singleLine = false;
            this.ui.m_Txt_title.singleLine = false;
        }
        onRemove() {
            this.Hide(), g.event(d.StartGame), g.event(d.CanShoot), g.event(m.ShowUIGame);
        }
    };
    Li = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Li);
    let Si = class extends te {
        constructor() {
            super(), this._UI = T, this._isShow = !1, this.showTips, this.showTipsHand, this.showTipsNum = 0;
        }
        Init() {
            g.on(m.ShowUIGame, this, this.Show),
                g.on(m.HideUIGame, this, this.Close),
                g.on(d.AddKey, this, this.onAddKey),
                g.on(d.LevelDestroy, this, this.Close),
                g.on(d.LevelDestroy, this, this.Close),
                g.on(d.ChangeText, this, this.changeText),
                g.on(d.ChangeTextEnd, this, this.ChangeTextEnd)
            this.IsOpen = !1;
        }
        _onShow(t, ...e) {
            super._onShow(t, ...e),
                this.ui.m_Key.m_number.selectedIndex = u.instance.data.keyNum,
                this.ui.m_Key.visible=false,
                this.ui.m_Btn_skip.onClick(this, this.OnClickSkip),
                this.IsOpen = !0, fx.Sdk.getInstance().showBanner();

            this.showTips = new Laya.Label();
            this.showTips.color = "#ffffff";
            this.showTips.bgColor = "#000000";
            this.showTips.alpha = 0.8;
            this.showTips.fontSize = 50;
            this.showTips.text = "瞄准敌人点击屏幕";

            this.showTipsHand = new Laya.Image();
            this.showTipsHand.skin = "res/desk1.png";
            this.showTipsHand.pos(500, 700);
            if (u.instance.data.level == 0) {
                Laya.stage.addChild(this.showTips);
                this.showTips.centerY = 0;
                this.showTips.centerX = 0;
            }
        }
        ChangeTextEnd() {
            this.showTips && this.showTips.removeSelf();
            this.showTipsHand && (this.showTipsHand.removeSelf(), Laya.Tween.clearAll(this.showTipsHand));
        }
        changeText() {
            this.showTipsNum++;
            if (u.instance.data.level == 0) {
                if (this.showTipsNum == 1) {
                    Laya.stage.addChild(this.showTipsHand);
                    this.showTips.text = "向下拖拽击杀敌人";
                    this.handTween();
                } else if (this.showTipsNum == 2) {
                    this.showTips && this.showTips.removeSelf();
                    this.showTipsHand && (this.showTipsHand.removeSelf(), Laya.Tween.clearAll(this.showTipsHand));
                }

            }
        }
        handTween() {
            this.showTipsHand.y = 700;
            Laya.Tween.to(this.showTipsHand, { y: 900 }, 1000, null, Laya.Handler.create(this, this.handTween));
        }
        onAddKey(t) {
            this.IsOpen && (t %= 4, this.ui.m_Key.m_number.selectedIndex = t);
        }
        Close() {
            this.showTips && this.showTips.removeSelf();
            this.showTipsHand && (this.showTipsHand.removeSelf(), Laya.Tween.clearAll(this.showTipsHand));
            this.IsOpen && (this.IsOpen = !1, this.ui.m_Ani_hide.play(Laya.Handler.create(this, this.Hide)));
        }
        OnClickSkip(t) {
            fx.EventCenter.getInstance().once(fx.SdkEvent.E_REWARD_GAIN, this, t => {
                g.event(d.VideoClose);
            }), me.getInstance().playVideo(t.target, Laya.Handler.create(this, () => {
                g.event(d.GameCom), this.ui.m_Ani_hide.play(Laya.Handler.create(this, this.Hide));
                g.event(d.ChangeTextEnd)
            })), g.event(d.VideoStart);
        }
    };
    Si = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Si);
    let Ci = class extends te {
        constructor() {
            super(), this._UI = P;
        }
        Init() { }
    };
    Ci = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Ci);
    let ki = class extends te {
        constructor() {
            super(), this._UI = V, this._rewardNum = 0, this.IsAddOpen = !0;
        }
        Init() {
            g.on(m.ShowUIBox, this, this.Open);
        }
        Open(t, e) {
            this._rewardNum = t, this.IsAddOpen = e, this.Show();
        }
        _onShow(t, ...e) {
            this.ui.m_Txt_number.text = this._rewardNum.toString(), this.ui.m_Btn_nothanks.onClick(this, this.OnClickNoThanks),
                this.ui.m_Btn_ad.visible = this.IsAddOpen, this.ui.m_Btn_ad.onClick(this, this.OnClickAD);
        }
        OnClickNoThanks() {
            u.instance.AddMoney(this._rewardNum), g.event(d.GameStart), this.Close();
        }
        OnClickAD(t) {
            me.getInstance().playVideo(t.target, Laya.Handler.create(this, () => {
                this.getReward();
            }));
        }
        Close() {
            this.ui.m_Ani_close.play(Laya.Handler.create(this, this.Hide));
        }
        getReward() {
            u.instance.AddMoney(this._rewardNum), g.event(d.ReSetTreasureBox), this.Close();
        }
    };
    ki = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], ki);
    let Ii = class extends te {
        constructor() {
            super(), this._UI = it;
        }
        Init() {
            g.on(m.ShowUIShop, this, this.Open);
        }
        Open(t) {
            this.m_ShopButtonArray = t, this.Show(), this.SettingGold();
        }
        InitButton() {
            let t = this.ui.m_ShopPlan.numChildren, e = 0;
            this.m_ShopButtonArray && (e = this.m_ShopButtonArray.length);
            for (let i = 0; i < t; i++) {
                let t = this.ui.m_ShopPlan.getChildAt(i);
                if (i < e) {
                    t.visible = !0;
                    let e = this.GetItemByIndex(i);
                    e ? (t.text = e.m_Price.toString(), t.onClick(this, this.BuyItem, [i, t, e])) : t.visible = !1;
                } else t.visible = !1;
            }
        }
        BuyItem(t, e, i) {
            if (u.instance.data.money >= i.m_Price) u.instance.AddMoney(-i.m_Price), u.instance.UnlockSkin(i.m_ItemName, i.m_Itemtype),
                i.m_ItemObj.destroy(), e.visible = !1, console.log(i), console.log("购买道具__" + i.m_ItemName + "---" + t),
                this.SettingGold(); else {
                let t = "金币不足";
                g.event(m.ShowTipsUI, t);
            }
        }
        GetItemByIndex(t) {
            let e = this.m_ShopButtonArray.length;
            for (let i = 0; i < e; i++) if (this.m_ShopButtonArray[i].m_Index == t) return this.m_ShopButtonArray[i];
            return null;
        }
        _onShow(t, ...e) {
            this.InitButton(),
                this.ui.m_BackScnen.onClick(this, this.Close);
            this.ui.m_Btn_GetCoin.onClick(this, this.GetCoin);
        }
        GetCoin() {
            platform.getInstance().showReward(() => {
                u.instance.AddMoney(300);
                let tt = "金币 +300";
                g.event(m.ShowTipsUI, tt);
                this.SettingGold();
            })
        }
        SettingGold() {
            this.ui.m_Cash.m_Txt_num.text = "" + u.instance.data.money;
        }
        Close() {
            g.event(d.GameCom), this.Hide(), console.log("返回游戏");
        }
    };
    Ii = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Ii);
    let vi = class extends te {
        constructor() {
            super(), this._UI = at, this._layer = Yt.Loading, this.Isshow = !1;
        }
        Init() {
            g.on(m.ShowTipsUI, this, this.Open);
        }
        Open(t) {
            this.Show();
            let e = Laya.Handler.create(this, this.Close);
            this.ui.getTransition("Play").play(e), this.ui.m_Tips_Txt.text = t;
        }
        Close() {
            this.Hide();
        }
        _OnShow() { }
    };
    vi = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], vi);
    let xi = class extends te {
        constructor() {
            super(), this._UI = B, this._isShow = !1;
        }
        _onShow(t, ...e) {
            super._onShow(t, ...e), this._isShow = !0;
        }
        Init() {
            g.on(m.ShowUIEvent, this, this.OnKillCombo);
        }
        OnKillCombo(t) {
            this._isShow || this.Show(), this.ui.m_Ani_combo.play(), this.ui.m_Combo.m_number.text = "x" + t.toString();
        }
    };
    xi = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], xi);
    let wi = class extends te {
        constructor() {
            super(), this._UI = q, this._layer = Yt.Popup, this.videoArr = [], this._hookNum = 1;
            window.uiui = this;
        }
        Init() {
            g.on(m.ShowTryHook, this, this.Open);
        }
        Open() {
            this._hookNum = u.instance.data.HookNumber, this.Show();
        }
        _onShow(t, ...e) {
            this.ui.m_number.selectedIndex = 1 == this._hookNum ? 0 : 1,
                this.ui.m_Btn_ad.onClick(this, this.OnCliCkAD),
                this.ui.m_Btn_nothanks.onClick(this, this.OnClickNoThanks),
                this.ui.m_Btn_ok.onClick(this, this.tryHook),
                fx.EventCenter.getInstance().on(fx.SdkEvent.E_SHARE_RESULT, this, this.shareFunc),
                this.InitUI();
        }
        shareFunc(t) {
            t.code == fx.SdkCode.SHARE_SUCCESS && this.tryHook();
        }
        InitUI() {
            let t = this.getNumName();
            this.ui.m_Txt_info.width = 500;
            this.ui.m_Txt_title.width = 500;
            this.ui.m_Txt_info.singleLine = false;
            this.ui.m_Txt_title.singleLine = false;
            this.videoCnt = xe.GetInstancle().getvideoCntByName(t), this.videoArr = fx.CfgMgr.getInstance().get("json/constant.json", t),
                this.ui.m_Txt_info.text = `观看广告解锁 ${this.videoCnt}/${this.videoArr.length}`,
                // this.videoArr[this.videoCnt] ? (
                this.ui.m_Btn_ad.visible = !0,
                this.ui.m_Btn_nothanks.visible = !0
            // ) : this.ui.m_Btn_ok.visible = !0;
        }
        OnClickNoThanks() {
            pi.instance.addCloseTryNum(), this.OnRemove(!1);
        }
        OnCliCkAD(t) {
            me.getInstance().playVideo(t.target, Laya.Handler.create(this, () => {
                this.tryHook();
            }));
        }
        tryHook() {
            0 == this.ui.m_number.selectedIndex ? (u.instance.data.TryLastHookNumber = 1, xe.GetInstancle().videoHookUnlock("twoHook"))
                : 1 == this.ui.m_number.selectedIndex && (u.instance.data.TryLastHookNumber = 2,
                    xe.GetInstancle().videoHookUnlock("threeHook"));
            let t = u.instance.data.HookModel, e = xe.GetInstancle().curTrySkin;
            e && (t = e.m_ItemData.model), this.videoCnt == this.videoArr.length - 1 ? (u.instance.data.TryLastHookNumber = 0,
                this.OnRemove(!0)) : this.OnRemove(!1), g.event(m.ChangeHook, [t]);
        }
        OnRemove(t) {
            fx.EventCenter.getInstance().off(fx.SdkEvent.E_SHARE_RESULT, this, this.shareFunc),
                this.Hide(), t || (g.event(d.StartGame), g.event(d.CanShoot), g.event(m.ShowUIGame)),
                xe.GetInstancle().setCurTrySkin(null);
        }
        getNumName() {
            return 1 == this._hookNum ? "twoHook" : "threeHook";
        }
    };
    wi = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], wi);
    let Ei = class extends te {
        constructor() {
            super(), this._UI = M, this._layer = Yt.Popup, this.isAgain = !1;
        }
        Init() {
            g.on(m.ShowTrySkin, this, this.Open);
        }
        Open(t) {
            this.isAgain = t, this.Show();
        }
        _onShow(t, ...e) {
            this.ui.m_number.selectedIndex = this.isAgain ? 1 : 0, this.ui.m_Btn_ad.onClick(this, this.OnCliCkAD),
                this.ui.m_Btn_nothanks.onClick(this, this.OnClickNoThanks), this.ui.m_Btn_ok.onClick(this, this.TrySkin),
                fx.EventCenter.getInstance().on(fx.SdkEvent.E_SHARE_RESULT, this, this.shareFunc),
                this.initUI();
        }
        shareFunc(t) {
            t.code == fx.SdkCode.SHARE_SUCCESS && this.TrySkin();
        }
        initUI() {
            let t = xe.GetInstancle().curTrySkin;
            this.ui.m_Txt_info.width = 500;
            this.ui.m_Txt_title.width = 500;
            this.ui.m_Txt_info.singleLine = false;
            this.ui.m_Txt_title.singleLine = false;
            u.instance.data.IsFristTrySkin ? (u.instance.data.IsFristTrySkin = !1, this.ui.m_Btn_ok.visible = !0)
                : (this.ui.m_Btn_ad.visible = !0, this.ui.m_Btn_nothanks.visible = !0),
                this.isAgain && (this.ui.m_Btn_share.text = "再试一次", this.ui.m_Btn_ad.text = "再试一次");
            let e = xe.GetInstancle().getvideoCntByName(t.m_ItemData.ui);
            this.ui.m_Txt_info.text = `观看广告解锁 ${e}/${t.m_ItemData.videoNum}`, this.ui.m_Item.url = ae.IconURL(t.m_ItemData.ui);
        }
        OnClickNoThanks() {
            pi.instance.addCloseTryNum(), this.isAgain && xe.GetInstancle().setCurTrySkin(null),
                this.OnRemove();
        }
        OnCliCkAD(t) {
            me.getInstance().playVideo(t.target, Laya.Handler.create(this, () => {
                this.TrySkin();
            }));
        }
        TrySkin() {
            let t = xe.GetInstancle().curTrySkin;
            t && (xe.GetInstancle().videoSkinUnlock(t.m_ItemData.ui), t.m_Itemtype == p.Hook ? g.event(m.ChangeHook, [t.m_ItemData.model]) : t.m_Itemtype == p.Grove ? g.event(m.ChangeGrove, [t.m_ItemData.texture]) : g.event(m.ChangeClock, [t.m_ItemData.model])),
                this.OnRemove();
        }
        OnRemove() {
            fx.EventCenter.getInstance().off(fx.SdkEvent.E_SHARE_RESULT, this, this.shareFunc),
                this.isAgain ? g.event(d.GameStart) : (g.event(d.StartGame), g.event(d.CanShoot),
                    g.event(m.ShowUIGame)), this.Hide();
        }
    };
    Ei = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Ei);
    let Ri = class extends class {
        init() {
            this._init(), this.__init();
        }
        _init() { }
        __init() {
            this.m_uiConList || console.warn(...i.packWarn("ui控制管理器没有初始化管理的ui列表")), this.m_uiProxy ? this.m_uiProxy.setProxy(this.m_uiConList) : console.warn(...i.packWarn("ui控制管理器没有初始化ui代理"));
        }
    } {
        constructor() {
            super();
        }
        _init() {
            re.instance.Init(), pe.instance.Init(), ye.instance.Init(), Le.instance.Init(),
                yi.instance.Init(), fi.instance.Init(), wi.instance.Init(), Ei.instance.Init(),
                Li.instance.Init(), Si.instance.Init(), Ci.instance.Init(), ai.instance.Init(),
                ki.instance.Init(), Ii.instance.Init(), vi.instance.Init(), xi.instance.Init();
        }
    };
    var Ai = Ri = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Ri);
    let Di = class {
        constructor() { }
        Start() {
            ui.LoadPlayer(),
                pi.instance.Init(),
                pi.instance.GameStart(),
                g.event(m.ShowUIMain),
                ai.instance.Show(),
                this.InitEffect(),
                Laya.loader.load("res/atlas/res.atlas", Laya.Handler.create(this, () => {
                    Laya.loader.load("res/atlas/res/popularizeRes.atlas", Laya.Handler.create(this, () => {
                        _e.instance.init();
                    }));
                }));
        }
        InitEffect() {
            let t = new Laya.Node();
            Kt.Scene3D.addChild(t);
            Xe.PlayEffect(ke.Explosion, new Laya.Vector3(1e3, 0, 0), t), Xe.PlayEffect(ke.citie, new Laya.Vector3(1e3, 0, 0), t),
                Xe.PlayEffect(ke.bz, new Laya.Vector3(1e3, 0, 0), t);
            Laya.timer.once(1e3, this, () => {
                t.active = !1;
            });
        }
    };
    Di = __decorate([s.DecorateInstance(), __metadata("design:paramtypes", [])], Di);
    class Pi {
        static LoadSubPKG(t, e) {
            var i = window.wx;
            return i = null == i ? i = window.qq : i, window.qg && (i = window.qg), null == i ? Promise.resolve() : new Promise((s, a) => {
                var n = i.loadSubpackage({
                    name: t,
                    success: function (e) {
                        console.log("分包", t, "加载成功" + e), s();
                    },
                    fail: function (e) {
                        console.log("分包", t, "加载失败" + JSON.stringify(e)), a(e);
                    }
                });
                null != e && n.onProgressUpdate(t => {
                    e(t.totalBytesWritten / t.totalBytesExpectedToWrite);
                });
            });
        }
    }
    class Oi {
        constructor() {
            this.init();
        }
        init() {
            let t = [];
            for (let e of Mt.subpackages) t.push(new Promise(t => {
                Pi.LoadSubPKG(e.name).then(() => {
                    t();
                });
            }));
            Promise.all(t).then(() => {
                new Nt().load(Laya.Handler.create(this, () => {
                    this.gameInitLoadCom(), this.enterGame();
                }));
            });
        }
        gameInitLoadCom() {
            Jt.instance.init(), Ai.instance.init(), w.instance.init();
        }
        enterGame() {
            Kt.Camera.clearColor = new Laya.Vector4(128 / 255, 162 / 255, 217 / 255, 0), console.log(...i.packLog("进入游戏"))
                , Di.instance.Start();
        }
    }
    class bi extends fx.UserInfoEntity {
        constructor() {
            super(!1), this.stageId = void 0, this.vibrateEnable = void 0, this.coins = void 0,
                this.guideSteps = void 0, this.stageId = 1, this.coins = 0, this.vibrateEnable = !0,
                this.guideSteps = [], fx.Utils.warpObjectGetterSetter(this, this.dirty);
        }
        addCoins(t) {
            t && (this.coins += t);
        }
        useCoins(t) {
            t && (this.coins < t || (this.coins -= t));
        }
    }
    class Ti extends fx.BaseLogic {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new Ti()), this.instance;
        }
        onInitOnce() {
            fx.UserLogic.getInstance().init(bi);
        }
        onInit() {
            this.player = this.getPlayerInfo();
        }
        getPlayerInfo() {
            return fx.UserLogic.getInstance().getUserInfo();
        }
    }
    class Ui extends Laya.Script {
        constructor() {
            super(), this.packages = ["res", "res3d", "libsSp"], this.count = this.packages.length,
                fx.Sdk.isOnToutiao() && this.packages.clear();
        }
        onEnable() {
            let t = this.owner.getChildByName("pb_progress");
            t.value = 0, this.pb_progress = t, fx.Utils.isOnMiniGame() ? this.loadNext() : this.loginServer();
        }
        onDisable() {
            fx.EventCenter.getInstance().offAllCaller(this);
        }
        loadNext() {
            if (0 == this.packages.length) return console.log("分包加载完成！"), void this.loginServer();
            let t = this.packages.shift(), e = fx.Sdk.getInstance().loadSubpackage({
                name: t,
                success: this.onLoadSuccess.bind(this)
            });
            if (!e) return void this.loadNext();
            let i = this.count, s = i - this.packages.length - 1;
            e.onProgressUpdate(t => {
                let e;
                e = t.progress > 1 ? (.01 * t.progress + s) / i : (t.progress + s) / i, this.pb_progress.value = e,
                    console.log(t, e);
            });
        }
        onLoadSuccess(t) {
            console.log(t), this.loadNext();
        }
        loginServer() {
            fx.EventCenter.getInstance().once(fx.SdkEvent.E_SDK_INIT_OK, this, t => {
                console.log("SDK 初始化完成！"), this.complete(t);
            }), fx.Sdk.getInstance().init();
        }
        complete(t) {
            this.pb_progress.value = 1, Ti.getInstance().init(), fx.Utils.isOnMiniGame() && fx.Sdk.getInstance().preloadVideo(""),
                Laya.timer.callLater(this, function () {
                    console.log("切换游戏场景！");
                });
        }
    }
    class Bi extends Laya.Script {
        onAwake() {
            this.list = this.owner.seekChildByName("list"), this.initList();
            let t = this.owner.getChildByName("img_bg");
            t.visible = !1, this.b_input = this.owner.seekChildByName("b_input"), this.b_input.visible = !1,
                this.textinput = this.owner.seekChildByName("textinput"), this.owner.seekChildByName("btn_sure").on(Laya.Event.CLICK, this, this.onClickSure),
                this.owner.getChildByName("lb_gm").on(Laya.Event.CLICK, this, () => {
                    this.list.visible = !this.list.visible, t.visible = !t.visible;
                }), this.owner.getChildByName("lb_log").on(Laya.Event.CLICK, this, () => {
                    this.p_log.visible = !this.p_log.visible, t.visible = !t.visible, this.p_log.visible && this.p_log.scrollTo(0, this.p_log.contentHeight - this.p_log.height);
                }), this.owner.getChildByName("lb_debugger").on(Laya.Event.CLICK, this, () => { });
            let e = this.owner.getChildByName("p_log");
            e.height = 0, e.visible = !1, e.vScrollBarSkin = null, this.p_log = e;
        }
        initList() {
            let t = window.GM, e = [], i = Object.getOwnPropertyNames(t), s = ["init", "enableLog"];
            for (let a = 0; a < i.length; ++a) {
                let n = i[a];
                "function" == typeof t[n] && -1 == s.indexOf(n) && e.push(n);
            }
            this.list.array = e, this.list.renderHandler = new Laya.Handler(this, this.updateItem),
                this.list.visible = !1, this.list.vScrollBarSkin = null;
        }
        updateItem(t, e) {
            let i = t.dataSource, s = t.seekChildByName("label_item");
            s.text = i, s.on(Laya.Event.CLICK, this, () => {
                this.curKey = i, this.b_input.visible = !0, this.list.visible = !1;
            });
        }
        onClickSure() {
            let t = window.GM, e = this.textinput.text.split(",");
            t[this.curKey](...e), this.b_input.visible = !1, this.owner.getChildByName("img_bg").visible = !1;
        }
        log(t, ...e) {
            let i = "";
            for (const t of e) if (t instanceof Object) try {
                i += JSON.stringify(t);
            } catch (t) {
                i += "Json stringify Error !!!\n";
            } else i += t;
            let s = new Laya.Label();
            s.width = Laya.stage.width, s.wordWrap = !0, s.fontSize = 30, s.bgColor = t, s.text = i,
                s.height += 10;
            let a = s.height, n = this.p_log;
            s.y = n.contentHeight, n.addChild(s), n.height = Math.min(s.y + a, Laya.stage.height),
                n.content.height = Math.max(n.contentHeight, n.height);
        }
    }
    class Mi extends fx.BaseEventDispatcher {
        constructor() {
            super(), this._record_time = 0, this.maxRecordTime = 120, fx.EventCenter.getInstance().on(fx.SdkEvent.E_SHARE_RESULT, this, this.giveRewardEvent);
        }
        get record_time() {
            return this._record_time;
        }
        set record_time(t) {
            this._record_time = t;
        }
        get maxRecordTime() {
            return this._maxRecordTime;
        }
        set maxRecordTime(t) {
            this._maxRecordTime = t;
        }
        static getInstance() {
            return this.instance || (this.instance = new Mi()), this.instance;
        }
        giveRewardEvent(t) {
            t.code == fx.SdkCode.SHARE_SUCCESS ? Laya.timer.once(2e3, this, () => {
                Ti.getInstance().getPlayerInfo().addCoins(300), fx.Utils.showTips("分享成功，获得300金币~");
            }) : (t.code, fx.SdkCode.SHARE_FAILED);
        }
    }
    var Gi, Hi;
    !function (t) {
        t[t.NOT_RECORD = 1] = "NOT_RECORD", t[t.START_RECORD = 2] = "START_RECORD", t[t.SUCCESS_RECORD = 3] = "SUCCESS_RECORD";
    }(Gi || (Gi = {})), function (t) {
        t.NOT_RECORD = "res/record_2.png", t.START_RECORD = "res/record_3.png", t.SUCCESS_RECORD = "res/record_1.png";
    }(Hi || (Hi = {}));
    const Ni = {
        E_GAME_RECORD: "$GAME_RECORD"
    };
    var Vi;
    !function (t) {
        t[t.E_RECORD_READY = 0] = "E_RECORD_READY", t[t.E_RECORD_START = 1] = "E_RECORD_START",
            t[t.E_RECORD_FAILED = 2] = "E_RECORD_FAILED", t[t.E_RECORD_REVIVE = 3] = "E_RECORD_REVIVE",
            t[t.E_RECORD_FINISH = 4] = "E_RECORD_FINISH";
    }(Vi || (Vi = {}));
    class Fi extends Laya.Script {
        constructor() {
            super(), this.eventName = [fx.SdkEvent.E_RECORD_VIDEO_START, fx.SdkEvent.E_RECORD_VIDEO_END, fx.SdkEvent.E_RECORD_VIDEO_PAUSE, fx.SdkEvent.E_RECORD_VIDEO_RESUME, fx.SdkEvent.E_SHARE_RESULT, Ni.E_GAME_RECORD],
                this.funcName = ["start_video", "end_video", "pause_video", "resume_video", "share_success", "onGameRecordEvent"],
                this.isFinish = !1;
        }
        onAwake() {
            this._owner = this.owner, this.shareImg = this._owner.getChildByName("shareImg"),
                this.shareTime = this._owner.getChildByName("shareTime"), this.shareTime.visible = !1,
                this.playStage = Gi.NOT_RECORD;
        }
        onEnable() {
            this._owner.on(Laya.Event.CLICK, this, t => {
                if (t.stopPropagation(), fx.Utils.isOnPC()) if (this.playStage == Gi.NOT_RECORD) this.start_video(120); else if (this.playStage == Gi.START_RECORD) {
                    if (Mi.getInstance().record_time >= Mi.getInstance().maxRecordTime - 3) return void fx.Utils.showTips("请耐心录制3秒以上~");
                    this.end_video(!1);
                } else this.playStage == Gi.SUCCESS_RECORD && fx.EventCenter.getInstance().event(fx.SdkEvent.E_SHARE_RESULT, {
                    code: fx.SdkCode.SHARE_SUCCESS
                }); else if (this.playStage == Gi.NOT_RECORD) fx.Sdk.getInstance().startRecord(Mi.getInstance().maxRecordTime); else if (this.playStage == Gi.START_RECORD) {
                    if (Mi.getInstance().record_time >= Mi.getInstance().maxRecordTime - 3) return void fx.Utils.showTips("请耐心录制3秒以上~");
                    fx.Sdk.getInstance().stopRecord();
                } else this.playStage == Gi.SUCCESS_RECORD && fx.Sdk.getInstance().shareVideo();
            });
            for (let t = 0; t < this.eventName.length; t++) {
                const e = this.eventName[t], i = this.funcName[t];
                fx.EventCenter.getInstance().on(e, this, this[i]);
            }
        }
        onDisable() {
            for (let t = 0; t < this.eventName.length; t++) {
                const e = this.eventName[t], i = this.funcName[t];
                fx.EventCenter.getInstance().off(e, this, this[i]);
            }
            this.isFinish || this.end_record();
        }
        loop() {
            Mi.getInstance().record_time -= 1, this.shareTime.text = Mi.getInstance().record_time.toString() + "s",
                Mi.getInstance().record_time <= 0 && (this.shareTime.visible = !1, fx.Sdk.getInstance().stopRecord(!0));
        }
        start_video(t) {
            Mi.getInstance().record_time = Mi.getInstance().maxRecordTime = t, this.shareImg.source = Laya.loader.getRes(Hi.START_RECORD),
                this.playStage = Gi.START_RECORD, this.shareTime.text = Mi.getInstance().record_time.toString() + "s",
                Laya.timer.loop(1e3, this, this.loop), this.shareTime.visible = !0;
        }
        end_video(t) {
            Mi.getInstance().record_time >= Mi.getInstance().maxRecordTime - 3 ? (this.shareImg.source = Laya.loader.getRes(Hi.NOT_RECORD),
                this.playStage = Gi.NOT_RECORD) : (this.shareImg.source = Laya.loader.getRes(Hi.SUCCESS_RECORD),
                    this.playStage = Gi.SUCCESS_RECORD), Laya.timer.clear(this, this.loop), this.shareTime.visible = !1,
                Mi.getInstance().record_time = Mi.getInstance().maxRecordTime, this.shareTime.text = Mi.getInstance().record_time.toString() + "s";
        }
        pause_video() {
            Laya.timer.clear(this, this.loop);
        }
        resume_video() {
            this.shareImg.source = Laya.loader.getRes(Hi.START_RECORD), this.playStage = Gi.START_RECORD,
                this.shareTime.text = Mi.getInstance().record_time.toString() + "s", Laya.timer.loop(1e3, this, this.loop),
                this.shareTime.visible = !0;
        }
        share_success(t) {
            t.code == fx.SdkCode.SHARE_SUCCESS ? (this.shareImg.source = Laya.loader.getRes(Hi.NOT_RECORD),
                this.playStage = Gi.NOT_RECORD) : (t.code, fx.SdkCode.SHARE_FAILED);
        }
        resumeBtnStage() {
            this.shareImg.source = Laya.loader.getRes(Hi.NOT_RECORD), this.playStage = Gi.NOT_RECORD,
                fx.Sdk.getInstance().stopRecord(!0);
        }
        onGameRecordEvent(t) {
            switch (t) {
                case Vi.E_RECORD_READY:
                    this.resumeBtnStage(), console.log("游戏准备~");
                    break;

                case Vi.E_RECORD_START:
                    this.start_record(), console.log("游戏开始~");
                    break;

                case Vi.E_RECORD_FAILED:
                    this.pause_record(), console.log("游戏失败~");
                    break;

                case Vi.E_RECORD_REVIVE:
                    this.resume_record(), console.log("游戏复活~");
                    break;

                case Vi.E_RECORD_FINISH:
                    this.isFinish = !0, this.end_record(), console.log("游戏结束~");
            }
        }
        start_record() {
            console.log("playStage:", this.playStage), this.playStage != Gi.START_RECORD && (this._owner.visible = !0,
                fx.Utils.isOnPC() ? this.start_video(120) : fx.Sdk.getInstance().startRecord());
        }
        end_record() {
            this._owner.visible = !1, this.playStage == Gi.START_RECORD && (fx.Utils.isOnPC() ? this.end_video(!1) : fx.Sdk.getInstance().stopRecord(!0));
        }
        pause_record() {
            fx.Utils.isOnPC() ? this.pause_video() : fx.Sdk.getInstance().record_pause();
        }
        resume_record() {
            fx.Utils.isOnPC() ? this.resume_video() : fx.Sdk.getInstance().record_resume();
        }
    }
    Laya.Vector2, Laya.Vector3, Laya.Vector4, Laya.Sprite3D, Laya.MeshSprite3D;
    const Wi = {
        UI_HEAD: "res/head.png",
        UI_TIPS: "res/img_tips.png",
        UI_COINS_IMG: "res/img_coins.png",
        UI_DIAMOND_IMG: "res/img_diamond.png",
        UI_VIDEO_IMG: "res/img_video.png",
        UI_SHARE_IMG: "res/img_share.png",
        UI_SOUND_ON_IMG: "",
        UI_SOUND_OFF_IMG: "",
        UI_SHAKE_ON_IMG: "",
        UI_SHAKE_OFF_IMG: "",
        JSON_GAME_CFG: "",
        SOUND_CLICK: "res/sound/click_ui.mp3",
        TEX_SHADOW: "res3d/Textures/shadow.png"
    };
    var ji, Ki, zi;
    !function (t) {
        t[t.E_COLLIDE_ENTER = 0] = "E_COLLIDE_ENTER", t[t.E_COLLIDE_EXIT = 1] = "E_COLLIDE_EXIT";
    }(ji || (ji = {})), function (t) {
        t[t.E_GAME_READY = 1] = "E_GAME_READY", t[t.E_GAME_START = 2] = "E_GAME_START",
            t[t.E_GAME_PAUSE = 3] = "E_GAME_PAUSE", t[t.E_GAME_FINISH = 4] = "E_GAME_FINISH",
            t[t.E_GAME_FAILED = 5] = "E_GAME_FAILED", t[t.E_GAME_OVER = 6] = "E_GAME_OVER";
    }(Ki || (Ki = {}));
    zi || (zi = {});
    class Xi extends Laya.Script {
        constructor() {
            super(), this.res = "", this.anchorCenter = !0, this.scaleX = .88, this.scaleY = .88;
        }
        onAwake() {
            let t = this.owner;
            this.anchorCenter && fx.Utils.resetAnchor(t, .5, .5), fx.Effect.btnScaleEff(this.owner, {
                x: this.scaleX,
                y: this.scaleY
            }), t.on(Laya.Event.MOUSE_DOWN, this, this.onClicked);
        }
        onClicked() {
            let t = this.res && Wi[this.res];
            t ? fx.SoundManager.getInstance().playSound(t) : fx.SoundManager.getInstance().playSound(Wi.SOUND_CLICK);
        }
    }
    class Yi extends Laya.Script {
        constructor() {
            super(), this.settingBoxSwitch = !1, this.actionLock = !1, this.boxBgScaleMin = this.boxBgScaleMax = 1;
        }
        onAwake() {
            this.settingBox = this.owner, this.settingBoxBg = this.settingBox.getChildByName("setting_box_bg"),
                this.settingBoxBg.visible = !1, this.settingBtnIcon = this.settingBox.getChildByName("setting_btn_icon"),
                this.soundBtn = this.settingBox.getChildByName("sound_btn"), this.shakeBtn = this.settingBox.getChildByName("shake_btn"),
                this.settingBoxBg && this.settingBtnIcon && this.soundBtn && this.shakeBtn ? (this.soundBtn.scale(0, 0),
                    this.shakeBtn.scale(0, 0), this.settingBox.on(Laya.Event.CLICK, this, this.setting_box_listener),
                    this.soundBtn.on(Laya.Event.CLICK, this, this.sound_btn_listener), this.shakeBtn.on(Laya.Event.CLICK, this, this.shake_btn_listener),
                    this.refreshSelf()) : console.warn("SettingBtnScript组件初始化失败！");
        }
        onDisable() {
            this.settingBox.off(Laya.Event.CLICK, this, this.setting_box_listener), this.soundBtn.off(Laya.Event.CLICK, this, this.sound_btn_listener),
                this.shakeBtn.off(Laya.Event.CLICK, this, this.shake_btn_listener);
        }
        setActionLockTimer(t) {
            this.actionLockTimer = this.actionLockTimer || new Laya.Timer(), this.actionLockTimer.clear(this, this.setAtionLock),
                this.setAtionLock(!0), this.actionLockTimer.once(t, this, this.setAtionLock, [!1]);
        }
        setAtionLock(t) {
            this.actionLock = t;
        }
        setting_box_listener(t) {
            t.stopPropagation(), this.trigger();
        }
        trigger() {
            this.actionLock || (this.settingBoxSwitch ? (Laya.Tween.to(this.settingBoxBg, {
                scaleY: this.boxBgScaleMin
            }, 400, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                this.settingBoxBg.visible = !1;
            })), Laya.Tween.to(this.settingBtnIcon, {
                rotation: 0
            }, 300), Laya.Tween.to(this.soundBtn, {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backIn, null, 100), Laya.Tween.to(this.shakeBtn, {
                scaleX: 0,
                scaleY: 0
            }, 300, Laya.Ease.backIn), this.setActionLockTimer(400), this.settingBoxSwitch = !1) : (this.settingBoxBg.visible = !0,
                this.settingBoxBg.scaleY = this.boxBgScaleMin, Laya.Tween.to(this.settingBoxBg, {
                    scaleY: this.boxBgScaleMax
                }, 400, Laya.Ease.backOut), Laya.Tween.to(this.settingBtnIcon, {
                    rotation: 90
                }, 300), Laya.Tween.to(this.soundBtn, {
                    scaleX: 1,
                    scaleY: 1
                }, 300, Laya.Ease.backOut), Laya.Tween.to(this.shakeBtn, {
                    scaleX: 1,
                    scaleY: 1
                }, 300, Laya.Ease.backOut, null, 100), this.setActionLockTimer(400), this.settingBoxSwitch = !0),
                this.refreshSelf());
        }
        sound_btn_listener(t) {
            if (t.stopPropagation(), this.actionLock) return;
            let e = fx.SoundManager.getInstance().toggleAll();
            this.refreshSelf(), console.log("soundFx:" + e);
        }
        shake_btn_listener(t) {
            if (t.stopPropagation(), this.actionLock) return;
            let e = Ti.getInstance().getPlayerInfo().vibrateEnable = !Ti.getInstance().getPlayerInfo().vibrateEnable;
            this.refreshSelf(), console.log("vibrateEnable:" + e);
        }
        refreshSelf() {
            let t = fx.SoundManager.getInstance().getToggleSoundFxStatus(), e = Ti.getInstance().getPlayerInfo().vibrateEnable;
            this.shakeBtn.skin = e ? Wi.UI_SHAKE_ON_IMG : Wi.UI_SHAKE_OFF_IMG, this.soundBtn.skin = t ? Wi.UI_SOUND_ON_IMG : Wi.UI_SOUND_OFF_IMG;
        }
    }
    class Ji extends Laya.Script {
        constructor() {
            super(), this.isUseExportId = !1, this.isHarvest = !0, this.gameIndex = -1;
        }
        onEnable() {
            let t = this.owner;
            if (!fx.Utils.isOnPC() && fx.Sdk.getInstance().isAudit()) return void (t.visible = !1);
            this.dataArray = [];
            let e = ue.getInstance().getJumpData();
            if (!e) return void (t.visible = !1);
            if (this.isUseExportId) for (let t = 0; t < e.length; t++) {
                const i = e[t];
                i && i.exportId === ge.EXPORT_HOT && this.dataArray.push(i);
            }
            this.dataArray.length <= 0 && (this.dataArray = e);
            let i = t.getChildByName("iconBg");
            this.gameIcon = i.getChildByName("gameIcon"), this.gameName = t.getChildByName("gameName"),
                this.hotImg = t.getChildByName("hotImg"), fx.Effect.breathEff(this.hotImg, 1500, 1.1),
                t.on(Laya.Event.MOUSE_DOWN, this, function () {
                    fx.Utils.isOnPC() ? fx.Utils.showTips(`点击了：${this.dataArray[this.gameIndex].name}`) :
                        (console.log(this.dataArray[this.gameIndex].appId),
                            fx.Sdk.getInstance().navigateApp({
                                appId: this.dataArray[this.gameIndex].appId
                            }));
                }), this.updataFunc(), Laya.timer.loop(3e3, this, this.updataFunc);
        }
        onDisable() { }
        updataFunc() {
            this.gameIndex += 1, this.gameIndex >= this.dataArray.length && (this.gameIndex = 0),
                "111" !== this.gameName.text && this.shake(), this.gameIcon.skin = this.dataArray[this.gameIndex].icon,
                this.gameName.text = this.dataArray[this.gameIndex].name, "我也是高手" === this.dataArray[this.gameIndex].name || "击倒一切" === this.dataArray[this.gameIndex].name ? this.hotImg.visible = !0 : this.hotImg.visible = !1;
        }
        shake() {
            let t = this.owner;
            new fx.Sequence([{
                t: "to",
                target: t,
                props: {
                    rotation: -15
                },
                duration: 100,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: t,
                props: {
                    rotation: 15
                },
                duration: 150,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: t,
                props: {
                    rotation: -10
                },
                duration: 150,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: t,
                props: {
                    rotation: 10
                },
                duration: 150,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: t,
                props: {
                    rotation: -5
                },
                duration: 100,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: t,
                props: {
                    rotation: 5
                },
                duration: 100,
                ease: Laya.Ease.backOut
            }, {
                t: "to",
                target: t,
                props: {
                    rotation: 0
                },
                duration: 100,
                ease: Laya.Ease.backOut
            }], !1).run();
        }
    }
    class $i extends Laya.Script {
        constructor() {
            super(), this.touchDownSign = !1, this.touchPoint = new Laya.Point(), this.moveDiff_1 = new Laya.Point(),
                this.moveDiff_2 = new Laya.Point(), this.curAdID = 1;
        }
        onEnable() {
            let t = this.owner;
            fx.Utils.isOnPC() || !fx.Sdk.getInstance().isAudit() ? (this.likeData = ue.getInstance().getJumpData(),
                this.getDataCallback()) : t.visible = !1;
        }
        getDataCallback() {
            if (!this || !this.owner) return;
            let t = this.owner;
            if (this.likeData && this.likeData.length > 0) {
                t.on(Laya.Event.MOUSE_DOWN, this, this.touchEvent), t.on(Laya.Event.MOUSE_MOVE, this, this.touchEvent),
                    t.on(Laya.Event.MOUSE_UP, this, this.touchEvent), t.on(Laya.Event.MOUSE_OUT, this, this.touchEvent),
                    this.likeList_1 = t.getChildByName("likeList_1"), this.likeList_2 = t.getChildByName("likeList_2");
                let e = [], i = [];
                for (let t = 0; t < this.likeData.length; t++) {
                    const s = this.likeData[t];
                    e.length < 6 ? e.push(s) : i.push(s);
                }
                for (let t = 0; t < this.likeData.length; t++) {
                    const e = this.likeData[t];
                    i.length < 6 && i.push(e);
                }
                this.likeList_1.dataSource = e, this.likeList_2.dataSource = i, this.likeList_1.renderHandler = new Laya.Handler(this, this.cellHandler),
                    this.likeList_2.renderHandler = new Laya.Handler(this, this.cellHandler);
            } else t.visible = !1;
        }
        cellHandler(t, e) {
            let i = t.dataSource;
            if (!i && !this.owner) return;
            let s = t.getChildByName("gameIcon");
            s && (s.skin = i.icon), t.offAll(Laya.Event.CLICK), t.on(Laya.Event.CLICK, this, function (t) {
                fx.Utils.isOnPC() ? fx.Utils.showTips(`点击了：${t.name}`) : fx.Sdk.getInstance().navigateApp({
                    appId: t.appId
                });
            }, [i]);
        }
        touchEvent(t) {
            let e = this.owner.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
            switch (t.type) {
                case Laya.Event.MOUSE_DOWN:
                    this.touchDownSign = !0, this.touchPoint = e, this.moveDiff_1.x = e.x - this.likeList_1.x,
                        this.moveDiff_2.x = e.x - this.likeList_2.x;
                    break;

                case Laya.Event.MOUSE_MOVE:
                    this.touchDownSign && (this.likeList_1.x = e.x - this.moveDiff_1.x, this.likeList_2.x = e.x - this.moveDiff_2.x,
                        e.x - this.touchPoint.x <= 0 ? this.likeList_1.x <= -this.likeList_1.width ? this.likeList_1.x = this.likeList_2.x + this.likeList_2.width + 15 : this.likeList_2.x <= -this.likeList_2.width && (this.likeList_2.x = this.likeList_1.x + this.likeList_1.width + 15) : this.likeList_1.x >= Laya.stage.width ? this.likeList_1.x = this.likeList_2.x - this.likeList_1.width - 15 : this.likeList_2.x >= Laya.stage.width && (this.likeList_2.x = this.likeList_1.x - this.likeList_2.width - 15));
                    break;

                case Laya.Event.MOUSE_UP:
                    this.touchDownSign && (this.touchDownSign = !1);
                    break;

                case Laya.Event.MOUSE_OUT:
                    this.touchDownSign = !1;
            }
        }
        onDisable() { }
        onClick() { }
        onUpdate() {
            !this.touchDownSign && this.likeData && (this.likeList_1.x -= 1, this.likeList_2.x -= 1,
                this.likeList_1.x <= -this.likeList_1.width && (this.likeList_1.x = this.likeList_2.x + this.likeList_2.width + 15),
                this.likeList_2.x <= -this.likeList_2.width && (this.likeList_2.x = this.likeList_1.x + this.likeList_1.width + 15));
        }
    }
    class qi extends Laya.Script {
        constructor() {
            super(), this.touchDownSign = !1, this.touchPoint = new Laya.Point(), this.moveDiff_1 = new Laya.Point(),
                this.moveDiff_2 = new Laya.Point();
        }
        onEnable() {
            let t = this.owner, e = t.getChildAt(0);
            if (e.width = Laya.stage.width, e.height = Laya.stage.height, this.listPanel = t.getChildAt(5),
                this.gameList_1 = this.listPanel.getChildAt(0), this.gameList_2 = this.listPanel.getChildAt(1),
                this.dataArray = ue.getInstance().getJumpData(), !this.dataArray) return void this.owner.removeSelf();
            t.timer.callLater(this, this.setListData), fx.Sdk.getInstance().hideBanner();
            let i = t.getChildAt(1);
            i.on(Laya.Event.CLICK, this, () => {
                this.owner.removeSelf();
            }), t.timer.once(2e3, this, () => {
                i.visible = !0;
            }), this.listPanel.on(Laya.Event.MOUSE_DOWN, this, this.touchEvent), this.listPanel.on(Laya.Event.MOUSE_MOVE, this, this.touchEvent),
                this.listPanel.on(Laya.Event.MOUSE_UP, this, this.touchEvent), this.listPanel.on(Laya.Event.MOUSE_OUT, this, this.touchEvent),
                t.timer.frameLoop(1, this, this.onUpdate);
        }
        setListData() {
            if (this.dataArray && this.dataArray.length > 0) {
                let t = [], e = [];
                for (; t.length + e.length < 18;) for (const i in this.dataArray) if (this.dataArray.hasOwnProperty(i)) {
                    const s = this.dataArray[i];
                    if (!(t.length + e.length < 18)) break;
                    s.redPoint = fx.Utils.getIntRandom(1, 6) <= 3, t.length < 9 ? t.push(s) : e.push(s);
                }
                this.gameList_1.dataSource = t, this.gameList_2.dataSource = e, this.gameList_1.renderHandler = new Laya.Handler(this, this.cellUpdata),
                    this.gameList_2.renderHandler = new Laya.Handler(this, this.cellUpdata);
            } else this.owner.removeSelf();
        }
        onDisable() {
            let t = ue.getInstance().openGameCenterCallback;
            t && t.run();
        }
        cellUpdata(t, e) {
            let i = t.dataSource;
            if (!i) return;
            let s = t.getChildByName("gameIcon"), a = t.getChildByName("gameName"), n = t.getChildByName("gameNum"), o = t.getChildByName("redPoint");
            n && (n.text = fx.Utils.getIntRandom(1e5, 1e7) + "人在玩"), o && (i.redPoint ? o.visible = !0 : o.visible = !1),
                s && (s.skin = i.icon), a && i.name && (a.text = i.name), t.offAll(Laya.Event.CLICK),
                t.on(Laya.Event.CLICK, this, t => {
                    fx.Utils.isOnPC() ? fx.Utils.showTips(`点击了：${t.name}`) : fx.Sdk.getInstance().navigateApp({
                        appId: t.appId
                    });
                }, [i]);
        }
        touchEvent(t) {
            let e = this.listPanel.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
            switch (t.type) {
                case Laya.Event.MOUSE_DOWN:
                    this.touchDownSign = !0, this.touchPoint = e, this.moveDiff_1.y = e.y - this.gameList_1.y,
                        this.moveDiff_2.y = e.y - this.gameList_2.y;
                    break;

                case Laya.Event.MOUSE_MOVE:
                    this.touchDownSign && (this.gameList_1.y = e.y - this.moveDiff_1.y, this.gameList_2.y = e.y - this.moveDiff_2.y,
                        e.y - this.touchPoint.y <= 0 ? this.gameList_1.y <= -this.gameList_1.height ? this.gameList_1.y = this.gameList_2.y + this.gameList_2.height + 20 : this.gameList_2.y <= -this.gameList_2.height && (this.gameList_2.y = this.gameList_1.y + this.gameList_1.height + 20) : this.gameList_1.y >= this.listPanel.height ? this.gameList_1.y = this.gameList_2.y - this.gameList_1.height - 20 : this.gameList_2.y >= this.listPanel.height && (this.gameList_2.y = this.gameList_1.y - this.gameList_2.height - 20));
                    break;

                case Laya.Event.MOUSE_UP:
                    this.touchDownSign && (this.touchDownSign = !1);
                    break;

                case Laya.Event.MOUSE_OUT:
                    this.touchDownSign = !1;
            }
        }
        onUpdate() {
            !this.touchDownSign && this.dataArray && (this.gameList_1.y -= 2, this.gameList_2.y -= 2,
                this.gameList_1.y <= -this.gameList_1.height && (this.gameList_1.y = this.gameList_2.y + this.gameList_2.height + 20),
                this.gameList_2.y <= -this.gameList_2.height && (this.gameList_2.y = this.gameList_1.y + this.gameList_1.height + 20));
        }
    }
    class Zi extends Laya.Script {
        constructor() {
            super(), this.touchDownSign = !1, this.touchPoint = new Laya.Point(), this.moveDiff_1 = new Laya.Point(),
                this.moveDiff_2 = new Laya.Point();
        }
        onEnable() {
            let t = this.owner;
            if (this.listPanel = t.getChildAt(2), this.gameList_1 = this.listPanel.getChildAt(0),
                this.gameList_2 = this.listPanel.getChildAt(1), this.dataArray = ue.getInstance().getJumpData(),
                !this.dataArray) return void this.owner.removeSelf();
            t.timer.callLater(this, this.setListData), fx.Sdk.getInstance().hideBanner();
            let e = t.getChildAt(1);
            e.on(Laya.Event.CLICK, this, () => {
                this.owner.removeSelf();
            }), t.timer.once(2e3, this, () => {
                e.visible = !0;
            }), this.listPanel.on(Laya.Event.MOUSE_DOWN, this, this.touchEvent), this.listPanel.on(Laya.Event.MOUSE_MOVE, this, this.touchEvent),
                this.listPanel.on(Laya.Event.MOUSE_UP, this, this.touchEvent), this.listPanel.on(Laya.Event.MOUSE_OUT, this, this.touchEvent),
                t.timer.frameLoop(1, this, this.onUpdate);
        }
        onDisable() {
            let t = ue.getInstance().openMoreGameCallback;
            t && t.run();
        }
        setListData() {
            if (this.dataArray && this.dataArray.length > 0) {
                let t = [], e = [];
                for (; t.length + e.length < 16;) for (const i in this.dataArray) if (this.dataArray.hasOwnProperty(i)) {
                    const s = this.dataArray[i];
                    if (!(t.length + e.length < 16)) break;
                    s.redPoint = fx.Utils.getIntRandom(1, 6) <= 3, t.length < 8 ? t.push(s) : e.push(s);
                }
                this.gameList_1.dataSource = t, this.gameList_2.dataSource = e, this.gameList_1.renderHandler = new Laya.Handler(this, this.cellUpdata),
                    this.gameList_2.renderHandler = new Laya.Handler(this, this.cellUpdata);
            } else this.owner.removeSelf();
        }
        cellUpdata(t, e) {
            let i = t.dataSource;
            if (!i) return;
            let s = t.getChildByName("gameIcon"), a = t.getChildByName("gameName"), n = (t.getChildByName("gameNum"),
                t.getChildByName("redPoint"));
            n && (i.redPoint ? n.visible = !0 : n.visible = !1), s && (s.skin = i.icon), a && i.name && (a.text = i.name),
                t.offAll(Laya.Event.CLICK), t.on(Laya.Event.CLICK, this, function (t) {
                    fx.Utils.isOnPC() ? fx.Utils.showTips(`点击了：${t.name}`) : fx.Sdk.getInstance().navigateApp({
                        appId: t.appId
                    });
                }, [i]);
        }
        touchEvent(t) {
            let e = this.listPanel.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
            switch (t.type) {
                case Laya.Event.MOUSE_DOWN:
                    this.touchDownSign = !0, this.touchPoint = e, this.moveDiff_1.y = e.y - this.gameList_1.y,
                        this.moveDiff_2.y = e.y - this.gameList_2.y;
                    break;

                case Laya.Event.MOUSE_MOVE:
                    this.touchDownSign && (this.gameList_1.y = e.y - this.moveDiff_1.y, this.gameList_2.y = e.y - this.moveDiff_2.y,
                        e.y - this.touchPoint.y <= 0 ? this.gameList_1.y <= -this.gameList_1.height ? this.gameList_1.y = this.gameList_2.y + this.gameList_2.height + 20 : this.gameList_2.y <= -this.gameList_2.height && (this.gameList_2.y = this.gameList_1.y + this.gameList_1.height + 20) : this.gameList_1.y >= this.listPanel.height ? this.gameList_1.y = this.gameList_2.y - this.gameList_1.height - 20 : this.gameList_2.y >= this.listPanel.height && (this.gameList_2.y = this.gameList_1.y - this.gameList_2.height - 20));
                    break;

                case Laya.Event.MOUSE_UP:
                    this.touchDownSign && (this.touchDownSign = !1);
                    break;

                case Laya.Event.MOUSE_OUT:
                    this.touchDownSign = !1;
            }
        }
        onUpdate() {
            !this.touchDownSign && this.dataArray && (this.gameList_1.y -= 2, this.gameList_2.y -= 2,
                this.gameList_1.y <= -this.gameList_1.height && (this.gameList_1.y = this.gameList_2.y + this.gameList_2.height + 20),
                this.gameList_2.y <= -this.gameList_2.height && (this.gameList_2.y = this.gameList_1.y + this.gameList_1.height + 20));
        }
    }
    class Qi extends Laya.Script {
        constructor() {
            super(), this.gridCount = 5, this.top = 0;
        }
        onEnable() {
            let t = this.owner, e = new Laya.Point(t.x, t.y), i = t.parent.localToGlobal(e);
            0 == this.top && (i.y = 0), fx.Sdk.getInstance().showAppBox(this.appBoxId, {
                gridCount: this.gridCount,
                top: i.y
            });
        }
        onDisable() {
            fx.Sdk.getInstance().hideAppBox(this.appBoxId);
        }
    }
    class ts extends Laya.Script {
        constructor() {
            super(), this.SPACE_X = 15, this.SPACE_Y = 15, this.MOVE_SPEED = 1, this.terminationLeft = [],
                this.iconCells = [];
        }
        onEnable() {
            let t = this.owner;
            if (!fx.Utils.isOnPC() && fx.Sdk.getInstance().isAudit()) return void (t.visible = !1);
            let e = Laya.Pool.getItemByCreateFun("IconWallCell", this.iconCell.create, this.iconCell);
            if (!e) return void (t.visible = !1);
            let i = ue.getInstance().getJumpData();
            if (!i) return void (t.visible = !1);
            this.iconCells && this.iconCells[2] || (this.iconCells[0] = [e]), t.left = 0,
                t.right = 0, t.height = 462;
            let s = 0, a = Laya.stage.width;
            this.widthNum = Math.ceil(a / e.width) + 1;
            for (let e = 0; e < this.widthNum; e++) for (let a = 0; a < 3; a++) {
                if (this.iconCells[a] || (this.iconCells[a] = []), 0 !== a || 0 !== e) {
                    let t = Laya.Pool.getItemByCreateFun("IconWallCell", this.iconCell.create, this.iconCell);
                    if (!t) continue;
                    this.iconCells[a].push(t);
                }
                let n = this.iconCells[a][e];
                if (n) {
                    t.addChild(n), n.top = a * (this.SPACE_Y + n.height), n.left = e * (this.SPACE_X + n.width) - a % 2 * (.5 * n.width),
                        e === this.widthNum - 1 && (this.terminationLeft[a] = n.left + this.SPACE_X, a % 2 == 1 && (this.terminationLeft[a] += .5 * n.width));
                    let o = i[s];
                    if (o || (o = i[s = 0]), !o) continue;
                    n.skin = o.icon, s++, n.on(Laya.Event.CLICK, this, t => {
                        fx.Utils.isOnPC() ? fx.Utils.showTips(`点击了：${t.name}`) : fx.Sdk.getInstance().navigateApp({
                            appId: t.appId
                        });
                    }, [o]);
                }
            }
        }
        onUpdate() {
            if (this.owner.visible) for (let t = 0; t < 3; ++t) for (let e = 0; e < this.iconCells[t].length; ++e) {
                let i = this.iconCells[t][e];
                i && (i.left -= this.MOVE_SPEED, i.left <= -i.width && (i.left = this.terminationLeft[t]));
            }
        }
    }
    class es extends Laya.Script {
        constructor() {
            super(), this.touchDownSign = !1, this.touchPoint = new Laya.Point(), this.moveDiff_1 = new Laya.Point(),
                this.moveDiff_2 = new Laya.Point(), this.moveSign = !0;
        }
        onEnable() {
            let t = this.owner;
            if (fx.Sdk.getInstance().isAudit() && !fx.Utils.isOnPC()) return void (t.visible = !1);
            let e = t.getChildByName("listPanel");
            if (e) {
                this.listPanel = e;
                let t = e.getChildByName("gameList_1");
                t && (this.gameList_1 = t);
                let i = e.getChildByName("gameList_2");
                i && (this.gameList_2 = i);
            }
            if (this.dataArray = ue.getInstance().getJumpData(), !this.dataArray) return void (t.visible = !1);
            let i = [], s = [];
            for (; i.length + s.length < 18;) for (const t in this.dataArray) if (this.dataArray.hasOwnProperty(t)) {
                const e = this.dataArray[t];
                if (!(i.length + s.length < 18)) break;
                e.redPoint = fx.Utils.getIntRandom(1, 6) <= 3, i.length < 9 ? i.push(e) : s.push(e);
            }
            this.gameList_1.dataSource = i, this.gameList_2.dataSource = s, this.gameList_1.renderHandler = new Laya.Handler(this, this.cellHandler),
                this.gameList_2.renderHandler = new Laya.Handler(this, this.cellHandler), this.moreGameBtn = t.getChildByName("moreGameBtn"),
                this.tipsImg = this.moreGameBtn.getChildByName("tipsImg"), fx.Effect.breathEff(this.tipsImg, 1250, 1.1),
                this.moreGameBtn.on(Laya.Event.CLICK, this, () => {
                    if (this.moveSign) if (this.owner.x == -this.owner.width) this.moveSign = !1, Laya.Tween.to(this.owner, {
                        x: 0
                    }, 250, null, Laya.Handler.create(this, () => {
                        this.moveSign = !0, t.timer.frameLoop(1, this, this.listUpdate);
                    })), this.createAndShowMask(!0), this.tipsImg.visible = !1, this.gameList_1.refresh(),
                        this.gameList_2.refresh(); else if (0 == this.owner.x) {
                            this.moveSign = !1;
                            let e = -this.owner.width;
                            Laya.Tween.to(this.owner, {
                                x: e
                            }, 250, null, Laya.Handler.create(this, () => {
                                this.moveSign = !0, this.createAndShowMask(!1), this.tipsImg.visible = !0, t.timer.clear(this, this.listUpdate);
                            }));
                        }
                }), this.listPanel.on(Laya.Event.MOUSE_DOWN, this, this.touchEvent), this.listPanel.on(Laya.Event.MOUSE_MOVE, this, this.touchEvent),
                this.listPanel.on(Laya.Event.MOUSE_UP, this, this.touchEvent), this.listPanel.on(Laya.Event.MOUSE_OUT, this, this.touchEvent);
        }
        onDisable() { }
        cellHandler(t, e) {
            let i = t.dataSource, s = t.getChildByName("iconBg").getChildByName("gameIcon"), a = t.getChildByName("gameName");
            Laya.loader.getRes(i.icon) ? s.source = Laya.loader.getRes(i.icon) : Laya.loader.load(i.icon, Laya.Handler.create(this, t => {
                s.source = t;
            })), a.text = i.name, t.offAll(Laya.Event.CLICK), t.on(Laya.Event.CLICK, this, t => {
                fx.Utils.isOnPC() ? fx.Utils.showTips(`点击了：${t.name}`) : fx.Sdk.getInstance().navigateApp({
                    appId: t.appId
                });
            }, [i]);
        }
        createAndShowMask(t) {
            this.maskBg ? this.maskBg.visible = !!t : (this.maskBg = new Laya.Image(), this.maskBg.skin = "res/mask.png",
                this.maskBg.centerY = 0, this.maskBg.width = Laya.stage.width, this.maskBg.height = Laya.stage.height + 200,
                this.maskBg.alpha = .6, this.maskBg.mouseEnabled = !0, this.maskBg.zOrder = 9, this.owner.parent.addChild(this.maskBg));
        }
        touchEvent(t) {
            let e = this.listPanel.globalToLocal(new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY));
            switch (t.type) {
                case Laya.Event.MOUSE_DOWN:
                    this.touchDownSign = !0, this.touchPoint = e, this.moveDiff_1.y = e.y - this.gameList_1.y,
                        this.moveDiff_2.y = e.y - this.gameList_2.y;
                    break;

                case Laya.Event.MOUSE_MOVE:
                    this.touchDownSign && (this.gameList_1.y = e.y - this.moveDiff_1.y, this.gameList_2.y = e.y - this.moveDiff_2.y,
                        e.y - this.touchPoint.y <= 0 ? this.gameList_1.y <= -this.gameList_1.height ? this.gameList_1.y = this.gameList_2.y + this.gameList_2.height + 10 : this.gameList_2.y <= -this.gameList_2.height && (this.gameList_2.y = this.gameList_1.y + this.gameList_1.height + 10) : this.gameList_1.y >= this.listPanel.height ? this.gameList_1.y = this.gameList_2.y - this.gameList_1.height - 10 : this.gameList_2.y >= this.listPanel.height && (this.gameList_2.y = this.gameList_1.y - this.gameList_2.height - 10));
                    break;

                case Laya.Event.MOUSE_UP:
                    this.touchDownSign && (this.touchDownSign = !1);
                    break;

                case Laya.Event.MOUSE_OUT:
                    this.touchDownSign = !1;
            }
        }
        listUpdate() {
            !this.touchDownSign && this.dataArray && (this.gameList_1.y -= 1, this.gameList_2.y -= 1,
                this.gameList_1.y <= -this.gameList_1.height && (this.gameList_1.y = this.gameList_2.y + this.gameList_2.height + 10),
                this.gameList_2.y <= -this.gameList_2.height && (this.gameList_2.y = this.gameList_1.y + this.gameList_1.height + 10));
        }
    }
    class is {
        constructor() { }
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("script/LoadingScript.ts", Ui), t("common/GMScript.ts", Bi), t("script/RecordScript.ts", Fi),
                t("script/ScaleEffectBtn.ts", Xi), t("script/SettingBtnScript.ts", Yi), t("modules/WXExportAd/CarouselScript.ts", Ji),
                t("modules/WXExportAd/LikeScript.ts", $i), t("modules/WXExportAd/GameCenterScript.ts", qi),
                t("modules/WXExportAd/GameMoreScript.ts", Zi), t("modules/WXExportAd/GridAd.ts", Qi),
                t("modules/WXExportAd/GameIconWall.ts", ts), t("modules/WXExportAd/MoreGameScript.ts", es);
        }
    }
    is.width = 750, is.height = 1334, is.scaleMode = "fixedwidth", is.screenMode = "none",
        is.alignV = "center", is.alignH = "center", is.startScene = "Loading.scene", is.sceneRoot = "",
        is.debug = !1, is.stat = !1, is.physicsDebug = !1, is.exportSceneToJson = !0, is.init();
    class ss { }
    ss.ifGameTest = !t.OnLine && !1, ss.ifTest = !t.OnLine && !1, ss.ifDebug = !t.OnLine && !0,
        ss.ifOpenWindowDebug = !t.OnLine && !1;
    class as {
        static init() {
            $t.init();
        }
    }
    class ns {
        static init() {
            Kt.init();
        }
    }
    class os { }
    os.Name = "LayaM", os.ZHName = "LayaB", os.Versions = "0.0.0.1";
    class rs {
        constructor() {
            this.init();
        }
        init() {
            window[os.Name] = Object.assign(Object.assign({}, os), {
                gameConfig: Object.assign({}, is),
                _mainConfig: Object.assign({}, t),
                _gameConfig: Object.assign({}, ss)
            }), ns.init(), as.init();
        }
    }

    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(is.width, is.height) : Laya.init(is.width, is.height, Laya.WebGL),
                Laya.stage.scaleMode = is.scaleMode, Laya.stage.bgColor = "#FFFFFF", Laya.stage.screenMode = is.screenMode,
                Laya.stage.alignV = is.alignV, Laya.stage.alignH = is.alignH, Laya.URL.exportSceneToJson = is.exportSceneToJson;
            window.yad = platform.getInstance().createLogo();
            // window.yad.right = 0;
            window.yad.scale(0.8, 0.8);
            platform.getInstance().showSplash();
            Laya.Text.langPacks = {
                "15325人在玩": "",
                "\" 道具\"": "\" 道具\"",
                "不用了，谢谢": "不用了，谢谢",
                "再次试用": "再次试用",
                "复活": "复活",
                "失败": "失败",
                "奖励 x2": "奖励 x2",
                "完成": "完成",
                " 道具": " 道具",
                "道具": "道具",
                "     道具": "     道具",
                "测试游戏": "",
                "游戏关卡加载中...": "加载中...",
                "游戏资源加载中...": "加载中...",
                "点击开始": "点击开始",
                "累计试用0 / 3次解锁": "累计试用0 / 3次解锁",
                "累计试用1 / 3次解锁": "累计试用1 / 3次解锁",
                "累计试用2 / 3次解锁": "累计试用2 / 3次解锁",
                "\"累计试用0/3次解锁\"": "累计试用0/3次解锁",
                "\"累计试用1/3次解锁\"": "累计试用1/3次解锁",
                "\"累计试用2/3次解锁\"": "累计试用2/3次解锁",
                "累计试用0/ 3次解锁": "累计试用0/ 3次解锁",
                "累计试用1/ 3次解锁": "累计试用1/ 3次解锁",
                "累计试用2/ 3次解锁": "累计试用2/ 3次解锁",
                "累计试用0/3次解锁": "累计试用0/3次解锁",
                "累计试用1/3次解锁": "累计试用1/3次解锁",
                "累计试用2/3次解锁": "累计试用2/3次解锁",
                "自定义": "自定义",
                "试用": "试用",
                "试用皮肤": "试用皮肤",
                "试用结束": "试用结束",
                "资金不足, 无法购买！": "资金不足, 无法购买！",
                "跳过": "跳过",
                "返回到游戏": "返回游戏",
                "道具": "道具",
                "重来": "重新开始",
                "获得奖励": "获得奖励",
                "再开一个": "再开一个",
                "试用二连绳索": "试用二连绳索",
                "试用三连绳索": "试用三连绳索",
                "点击两次发射两次": "点击两次发射两次",
                "点击三次发射三次": "点击三次发射三次",
                "解锁二连绳索": "解锁二连绳索",
                "解锁三连绳索": "解锁三连绳索",
                "+200": "+100"
            }

            this.onConfigLoaded(), fx.CfgMgr.getInstance().loadJson("json/constant.json"), fx.Sdk.sInit(ce),
                fx.Sdk.getInstance().afterEngineInit(this.didEnterBackground.bind(this), this.willEnterForeground.bind(this));
        }
        didEnterBackground() {
            fx.EventCenter.getInstance().event(fx.BaseEvent.E_APP_ON_PAUSE);
        }
        willEnterForeground(t) {
            fx.EventCenter.getInstance().event(fx.BaseEvent.E_APP_ON_RESUME, t);
        }
        onVersionLoaded() { }
        onConfigLoaded() {
            Ht.load().then(() => {
                new rs(), Ht.open().then(() => {
                    platform.getInstance().yadstartup("Ropeman-3d", () => {
                        window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                        window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Ropeman-3D-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Ropeman-3D-musicState")) : false;
                        new Oi();
                    })

                });
            });
        }
    }();
}();