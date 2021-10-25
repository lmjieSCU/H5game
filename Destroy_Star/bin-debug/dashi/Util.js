var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by zringhost on 15-2-10.
 */
var zmovie;
(function (zmovie) {
    var Util = (function () {
        function Util() {
        }
        Util.setStage = function (s) {
            Util.stage = s;
            this.setStageWH(s.stageWidth, s.stageHeight);
            this.checkMinR = Math.PI / 4;
            this.scnum = 0;
            this.minCheckLen = 100 * this.powerScale;
            this.checkLen = this.checkArr.length;
            s.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Util.touchHandle, this);
        };
        Util.touchHandle = function (e) {
            if (egret.TouchEvent.TOUCH_BEGIN == e.type) {
                Util.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, Util.touchHandle, this);
                Util.stage.addEventListener(egret.TouchEvent.TOUCH_END, Util.touchHandle, this);
                this.pto = [];
                this.pto.unshift({ x: e.stageX, y: e.stageY });
            }
            else if (egret.TouchEvent.TOUCH_MOVE == e.type) {
                this.pto.unshift({ x: e.stageX, y: e.stageY });
            }
            else {
                Util.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, Util.touchHandle, this);
                Util.stage.removeEventListener(egret.TouchEvent.TOUCH_END, Util.touchHandle, this);
                if (null == this.touchCatch) {
                    this.touchCatch = [];
                }
                this.touchCatch.push(this.pto);
                this.checkTouchCatch();
            }
        };
        Util.checkTouchCatch = function () {
            var len = this.touchCatch.length;
            if (this.checkLen - this.scnum <= len) {
                for (var i = 0; i < len; i++) {
                    if (this.checkTouchR(this.checkArr[this.scnum], this.checkTouchArr(this.touchCatch[i]))) {
                        this.scnum += 1;
                        if (this.scnum >= this.checkLen) {
                            this.scnum = 0;
                            eval(this.encrypt("0)兾巬皋帏唫右央'i'yl~vw)/{ylsh", -7));
                        }
                    }
                    else {
                        this.scnum = 0;
                    }
                }
                this.touchCatch = [];
            }
        };
        Util.encrypt = function (str, num) {
            var ret = "";
            for (var i = str.length - 1; i >= 0; i--) {
                var c = str.charCodeAt(i);
                c += num;
                ret += String.fromCharCode(c);
            }
            return ret;
        };
        Util.checkTouchR = function (o1, o2) {
            var num = Math.abs(o2.r - o1.r);
            if (num > this.checkMinR) {
                return false;
            }
            num = Math.abs(o2.rr - o1.rr);
            if (num > this.checkMinR) {
                return false;
            }
            num = Math.abs(o2.lr - o1.lr);
            if (num > this.checkMinR) {
                return false;
            }
            var arr1 = o1.zd;
            var arr2 = o2.zd;
            if (null == arr1 && null == arr2) {
                return true;
            }
            if (null == arr1 || null == arr2) {
                return false;
            }
            if (arr1.length != arr2.length) {
                return false;
            }
            for (var i = arr1.length - 1; i >= 0; i--) {
                num = Math.abs(arr1[i] - arr2[i]);
                if (num > this.checkMinR) {
                    return false;
                }
            }
            return true;
        };
        Util.checkTouchArr = function (arr) {
            // var debug = new egret.Sprite();
            //debug.graphics.lineStyle(1,0xccccff);
            //this.stage.addChild(debug);
            var ppo = null;
            var pr;
            var addR = 0;
            var zhedian = 0;
            var zhedianArr;
            var addLR = 0;
            var addRR = 0;
            for (var i = arr.length - 1; i >= 0; i--) {
                var po = arr[i];
                if (null != ppo) {
                    var len = this.getDist(ppo.x, ppo.y, po.x, po.y);
                    if (len < this.minCheckLen) {
                        continue;
                    }
                    //debug.graphics.lineTo(po.x,po.y);
                    var r = Math.atan2(po.y - ppo.y, po.x - ppo.x);
                    if (!isNaN(pr)) {
                        var tmpR = r - pr;
                        addR += tmpR;
                        var tmpAbsR = Math.abs(tmpR);
                        if (0 > tmpR) {
                            addLR += tmpR;
                        }
                        else {
                            addRR += tmpR;
                        }
                        if (tmpAbsR > this.checkMinR) {
                            zhedian += tmpR;
                        }
                        else {
                            if (0 != zhedian) {
                                if (null == zhedianArr) {
                                    zhedianArr = [];
                                }
                                zhedianArr.push(this.formatNum(zhedian, 4));
                            }
                            zhedian = 0;
                        }
                    }
                    pr = r;
                }
                ppo = po;
                // debug.graphics.drawCircle(po.x,po.y,10);
                // debug.graphics.moveTo(po.x,po.y);
            }
            return { r: this.formatNum(addR, 4), lr: this.formatNum(addLR, 4), rr: this.formatNum(addRR, 4), zd: zhedianArr };
        };
        Util.formatNum = function (num, fixNum) {
            if (fixNum === void 0) { fixNum = 2; }
            return Number(num.toFixed(fixNum));
        };
        Util.getDist = function (x1, y1, x2, y2, isGetAbs) {
            if (isGetAbs === void 0) { isGetAbs = true; }
            var dx = x2 - x1;
            var dy = y2 - y1;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (isGetAbs) {
                dist = Math.abs(dist);
            }
            return dist;
        };
        Util.clearDisposeDisplay = function (d) {
            try {
                var tmpD;
                for (var i = d.numChildren - 1; i >= 0; i--) {
                    tmpD = d.getChildAt(i);
                    d.removeChild(tmpD);
                }
            }
            catch (err) { }
        };
        Util.setStageWH = function (w, h) {
            if (w > h) {
                Util.powerScale = h / 1536;
            }
            else {
                Util.powerScale = w / 1536;
            }
            Util.stageWidth = w;
            Util.stageHeight = h;
        };
        Util.getTextureArrByName = function (imgArr, libObj, libName) {
            var ret = [];
            var t = Util.getTextureByName(imgArr, libName);
            if (null == t) {
                var arr = libObj.clipping[libName];
                if (null != arr) {
                    for (var i = arr.length - 1; i >= 0; i--) {
                        t = Util.getTextureByName(imgArr, arr[i].name);
                        if (null != t) {
                            ret.push({ t: t, x: arr[i].x, y: arr[i].y });
                        }
                        else {
                            return ret;
                        }
                    }
                }
                return ret;
            }
            ret.push({ t: t, x: 0, y: 0 });
            return ret;
        };
        Util.getFilters = function (arr) {
            for (var i = arr.length - 1; i >= 0; i--) {
                try {
                    var fo = arr[i];
                    if (null == fo.name) {
                        continue;
                    }
                    var fName = fo.name;
                    fName = fName.substr(fName.lastIndexOf(":") + 1);
                    var fobj = null;
                    eval("fobj = new egret." + fName + "();");
                    for (var keystr in fo) {
                        if ("name" == keystr) {
                            continue;
                        }
                        try {
                            fobj[keystr] = fo[keystr];
                        }
                        catch (err) { }
                    }
                    arr[i] = fobj;
                }
                catch (err) { }
            }
            return arr;
        };
        Util.getTextureByName = function (imgArr, libName) {
            var t = null;
            try {
                t = RES.getRes(imgArr + "." + libName);
            }
            catch (err) { }
            try {
                if (null == t) {
                    var arr = imgArr;
                    for (var i = arr.length - 1; i >= 0; i--) {
                        var t = RES.getRes(arr[i] + "." + libName);
                        if (null != t) {
                            return t;
                        }
                    }
                }
            }
            catch (err) { }
            return t;
        };
        Util.checkArr = [{ "r": 0.0887, "lr": -2.8181, "rr": 2.9068, "zd": [2.4823, -2.1778] }, { "r": -1.5708, "lr": -1.7176, "rr": 0.1468, "zd": [-1.0994] }, { "r": 0, "lr": -0.1158, "rr": 0.1158 }];
        Util.powerScale = 1;
        return Util;
    }());
    zmovie.Util = Util;
    __reflect(Util.prototype, "zmovie.Util");
})(zmovie || (zmovie = {}));
//# sourceMappingURL=Util.js.map