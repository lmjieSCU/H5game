var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Candy = (function (_super) {
    __extends(Candy, _super);
    function Candy() {
        var _this = _super.call(this) || this;
        _this.mark = false;
        _this.remove = false;
        _this._bombLeftCount = 0; //剩余时间
        _this.r = 0;
        _this.rspeed = 0.2;
        _this.isMoving = false;
        //
        _this.shakecount = 100;
        _this.path = [];
        _this.queue = [];
        return _this;
    }
    Candy.prototype.setBomb = function (arg1) {
        if (this.img != null) {
            this.img.parent.removeChild(this.img);
            this.img = null;
        }
        this.img = UI.addPic("candytimer" + (this.color - 1) + "_png", true, this);
        this._bombLeftCount = arg1;
        // com.popchan.framework.manager.Debug.log("炸弹步数:" + arg1);
        if (!this.bomb_txt) {
            this.bomb_txt = UI.addBitText(this, arg1, "bomb_fnt", true, 0, 20, 1.3, 1.3);
            this.bomb_txt.letterSpacing = 2;
        }
        return;
    };
    Candy.prototype.isBomb = function () {
        return this._bombLeftCount > 0;
    };
    /**炸弹炸掉游戏失败 */
    Candy.prototype.bombCountUpdate = function () {
        this._bombLeftCount = this._bombLeftCount - 1;
        if (this._bombLeftCount <= 0) {
            this._bombLeftCount = 0;
            Model.gameModel.isSuccess = false;
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_END_UI));
        }
        this.bomb_txt.text = String(this._bombLeftCount);
        console.log(this.bomb_txt.text);
        return;
    };
    Candy.prototype.getBombCount = function () {
        return this._bombLeftCount;
    };
    Candy.prototype.reset = function () {
        egret.Tween.removeTweens(this);
        this.stopShake();
        this._bombLeftCount = 0;
        this._status = 0;
        this.mark = false;
        this.remove = false;
        this.scaleY = 1;
        this.scaleX = 1;
        if (this.img != null) {
            this.img.scaleY = 1;
            this.img.scaleX = 1;
        }
        return;
    };
    Candy.prototype.shake = function () {
        egret.Tween.removeTweens(this.img);
        this._isShake = true;
        return;
    };
    Candy.prototype.Shakerender = function () {
        if (!this._isShake) {
            return;
        }
        var loc1 = Math.sin(this.r) * 10;
        this.r = this.r + this.rspeed;
        this.img.rotation = Math.PI * loc1;
        return;
    };
    Candy.prototype.stopShake = function () {
        this._isShake = false;
        if (this.img) {
            egret.Tween.removeTweens(this.img);
            this.img.rotation = 0;
        }
        this.r = 0;
        return;
    };
    Candy.prototype.setNextStatus = function (arg1) {
        this._nextStatus = arg1;
        return;
    };
    Object.defineProperty(Candy.prototype, "isShake", {
        get: function () {
            return this._isShake;
        },
        enumerable: true,
        configurable: true
    });
    Candy.prototype.isFruit = function () {
        if (this._color == ColorType.FRUIT1 || this._color == ColorType.FRUIT2 || this._color == ColorType.FRUIT3) {
            return true;
        }
        return false;
    };
    Object.defineProperty(Candy.prototype, "color", {
        get: function () {
            if (this.status == CandySpecialStatus.COLORFUL) {
                return 0;
            }
            return this._color;
        },
        set: function (arg1) {
            this._color = arg1;
            if (this.img != null) {
                this.img.parent.removeChild(this.img);
                // this.img.dispose();
                this.img = null;
            }
            var loc1 = "candy" + (this.color - 1);
            if (this.color != 7) {
                if (this.color != 8) {
                    if (this.color == 9) {
                        loc1 = "fruit3";
                    }
                }
                else {
                    loc1 = "fruit2";
                }
            }
            else {
                loc1 = "fruit1";
            }
            this.img = UI.addPic(loc1 + "_png", true, this);
            return;
        },
        enumerable: true,
        configurable: true
    });
    Candy.prototype.collidePoint = function (arg1) {
        var loc1 = new egret.Rectangle(-32 + this.x, -32 + this.y, 64, 64);
        if (loc1.containsPoint(arg1)) {
            return true;
        }
        return false;
    };
    Object.defineProperty(Candy.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Candy.prototype.getNextStatus = function () {
        return this._nextStatus;
    };
    //swap动画
    Candy.prototype.runMoveAction = function (point, time, callFun, callthis, callparams, way) {
        if (callFun === void 0) { callFun = null; }
        if (callthis === void 0) { callthis = null; }
        if (callparams === void 0) { callparams = null; }
        if (way === void 0) { way = null; }
        this.isMoving = true;
        if (callFun == null) {
            egret.Tween.get(this).to({ "x": point.x, "y": point.y }, time);
            egret.setTimeout(this.resetMoving, this, time + 100);
        }
        else {
            egret.Tween.get(this).to({ "x": point.x, "y": point.y }, time).call(callFun, callthis, callparams).call(this.resetMoving, this);
            // egret.setTimeout(this.resetMoving, this, time + 100);
        }
        return;
    };
    Candy.prototype.resetMoving = function () {
        this.isMoving = false;
    };
    Candy.prototype.addPath = function (arg1) {
        this.path.push(arg1);
        return;
    };
    Candy.prototype.stopAllActions = function () {
        this.img.scaleY = 1;
        this.img.scaleX = 1;
        egret.Tween.removeTweens(this.img);
        egret.Tween.removeTweens(this);
        return;
    };
    Candy.prototype.runAsPath = function () {
        var loc2 = null;
        var loc6 = null;
        var loc7 = null;
        this.stopAllActions();
        this.queue = [];
        var loc1 = this.path[0];
        if (loc1.type != 1) {
            if (loc1.type == 2) {
                loc2 = this.setCandMoveAction(loc1.pos);
            }
        }
        else {
            loc2 = this.getCandyMoveAction(new egret.Point(this.x, this.y), loc1.pos);
        }
        this.queue.push(loc2);
        var loc3 = 1;
        while (loc3 < this.path.length) {
            if ((loc6 = this.path[loc3]).type != 1) {
                if (loc6.type == 2) {
                    loc7 = this.setCandMoveAction(this.path[loc3].pos);
                }
            }
            else {
                loc7 = this.getCandyMoveAction(this.path[(loc3 - 1)].pos, this.path[loc3].pos);
            }
            this.queue.push(loc7);
            ++loc3;
        }
        var loc4 = { "time": 100, path: { "y": this.path[(loc3 - 1)].pos.y - 3 } };
        var loc5 = { "time": 100, path: { "y": this.path[(loc3 - 1)].pos.y + 3 } };
        this.queue.push(loc4);
        this.queue.push(loc5);
        this.path = [];
        this.runMoveQueueAction();
        return;
    };
    Candy.prototype.runMoveQueueAction = function () {
        if (this.queue.length > 0) {
            this.isMoving = true;
            var param = this.queue.shift();
            egret.Tween.get(this).to(param.path, param.time);
            egret.setTimeout(function () {
                this.resetMoving();
                this.runMoveQueueAction();
            }, this, param.time);
        }
        return;
    };
    Candy.prototype.getCandyMoveAction = function (arg1, arg2) {
        var loc1 = Math.abs(arg2.y - arg1.y);
        var loc2 = Math.abs(arg2.x - arg1.x);
        return { path: { "x": arg2.x, "y": arg2.y }, time: Math.sqrt(loc2 * loc2 + loc1 * loc1) };
    };
    Candy.prototype.setCandMoveAction = function (arg1) {
        return { path: { "x": arg1.x, "y": arg1.y }, time: 10 };
    };
    Candy.prototype.setSpecialStatus = function (status, arg2, arg3) {
        if (arg2 === void 0) { arg2 = false; }
        if (arg3 === void 0) { arg3 = false; }
        if (this.img != null) {
            this.img.parent.removeChild(this.img);
            this.img = null;
        }
        this.img = UI.addPic("candy" + (this.color - 1) + "_png", true);
        this._status = status;
        if (status != CandySpecialStatus.HORIZ) {
            if (status != CandySpecialStatus.VERT) {
                if (status != CandySpecialStatus.BOMB) {
                    if (status == CandySpecialStatus.COLORFUL) {
                        this.img = UI.addPic("candyking_png", true);
                    }
                }
                else {
                    this.img = UI.addPic("candybomb" + (this.color - 1) + "_png", true);
                }
            }
            else {
                this.img = UI.addPic("candy" + (this.color - 1) + "b_png", true);
            }
        }
        else {
            this.img = UI.addPic("candy" + (this.color - 1) + "a_png", true);
        }
        this.addChild(this.img);
        if (arg2) {
            this.img.scaleY = 0;
            this.img.scaleX = 0;
            this.isMoving = true;
            egret.Tween.get(this.img).to({ "scaleX": 1, "scaleY": 1 }, 250);
            egret.setTimeout(this.resetMoving, this, 300);
            SoundCtrl.I.playmusic("candyspgrow1");
        }
        if (status == 4) {
            this._color = 0;
        }
        return;
    };
    Candy.pool = new BasePool(Candy, 81);
    return Candy;
}(Elements));
__reflect(Candy.prototype, "Candy");
//# sourceMappingURL=Candy.js.map