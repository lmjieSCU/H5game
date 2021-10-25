var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**特效控制器
 * 生成连线特效,stage提示特效,cell消失特效,comb特效
 */
var EffectCtrl = (function () {
    function EffectCtrl() {
        this._gridPathAngs = [];
        this._gridPathLines = [];
        this._combImgs = [];
        this._stageTips = [];
        //
        this.stageTipMoveAnimate = false;
        this.stageTipMoveFrame = 0;
        this._gridEffect = new GridEffect();
        this._combEffect = new ComboEffect();
        this._stageEffect = new StageTipEffect();
    }
    Object.defineProperty(EffectCtrl, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new EffectCtrl();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    EffectCtrl.prototype.initlize = function (param1, param2) {
        this._gameStage = param1;
        this._effectLayer = param2;
    };
    EffectCtrl.prototype.render = function () {
        if (this.stageTipMoveAnimate) {
            this.stageTipsRender();
        }
        this.removeEffect();
    };
    /**移除特效 */
    EffectCtrl.prototype.removeEffect = function () {
        for (var i in this._gridPathAngs) {
            if (this._gridPathAngs[i].alpha == 0) {
                this._effectLayer.removeChild(this._gridPathAngs[i]);
                this._gridPathAngs.splice(Number(i), 1);
            }
        }
        for (var i in this._gridPathLines) {
            if (this._gridPathLines[i].alpha == 0) {
                this._effectLayer.removeChild(this._gridPathLines[i]);
                this._gridPathLines.splice(Number(i), 1);
            }
        }
        for (var i in this._combImgs) {
            if (this._combImgs[i].alpha == 0) {
                this._effectLayer.removeChild(this._combImgs[i]);
                this._combImgs.splice(Number(i), 1);
            }
        }
        return;
    };
    EffectCtrl.prototype.stageTipsRender = function () {
        this.stageTipMoveFrame++;
        if (this.stageTipMoveFrame >= 22 && this.stageTipMoveFrame <= 40) {
            return;
        }
        for (var i in this._stageTips) {
            this._stageTips[i].x = this._stageTips[i].x - 20;
        }
        if (this._stageTips[1].x + this._stageTips[1].width < -80) {
            this.stageTipMoveAnimate = false;
            this.stageTipMoveFrame = 0;
        }
        if (this.stageTipMoveAnimate) {
            return;
        }
        for (var i in this._stageTips) {
            this._effectLayer.removeChild(this._stageTips[i]);
        }
        this._effectLayer.$setTouchChildren(true);
        GameCtrl.I.running = true;
        SoundCtrl.I.playSound("go");
        return;
    };
    EffectCtrl.prototype.createstageTipsEft = function () {
        SoundCtrl.I.playSound("ready");
        this._effectLayer.$setTouchChildren(false);
        this._stageTips = this._stageEffect.createStageEft();
        for (var i in this._stageTips) {
            this._effectLayer.addChild(this._stageTips[i]);
        }
        this.stageTipMoveAnimate = true;
    };
    EffectCtrl.prototype.createComboEft = function (cell1, cell2, combnum) {
        if (combnum <= 0) {
            return;
        }
        if (combnum >= 10) {
            combnum = 10;
        }
        var sound = combnum >= 5 ? "MaxCombo" : "Combo";
        SoundCtrl.I.playSound(sound);
        var comb = this._combEffect.createCombImgAt((cell1.dx + cell2.dx) / 2, (cell1.dy + cell2.dy) / 2, combnum);
        this._combImgs.push(comb);
        this._effectLayer.addChild(comb);
        egret.Tween.get(comb).to({ alpha: 0 }, 1000);
        return;
    };
    /**添加连线特效,连线由多条单一线组成 */
    EffectCtrl.prototype.createGridPathEft = function (loc) {
        for (var i = 0; i < loc.length - 1; i++) {
            this.createGrid_LineAt(loc[i], loc[i + 1]);
        }
        SoundCtrl.I.playSound("link");
        return;
    };
    /**添加节点特效 */
    EffectCtrl.prototype.createGrid_AngAt = function (cell) {
        var angle = this._gridEffect.createAngImgAt(cell.dx, cell.dy);
        this._effectLayer.addChild(angle);
        this._gridPathAngs.push(angle);
        egret.Tween.get(angle).to({ alpha: 0 }, 800);
    };
    /**连线-单一线特效 */
    EffectCtrl.prototype.createGrid_LineAt = function (arg1, arg2) {
        var lines = this._gridEffect.createLineImgAt(arg1, arg2);
        for (var i in lines) {
            this._effectLayer.addChild(lines[i]);
            this._gridPathLines.push(lines[i]);
            egret.Tween.get(lines[i]).to({ alpha: 0 }, 800);
        }
    };
    return EffectCtrl;
}());
__reflect(EffectCtrl.prototype, "EffectCtrl");
//# sourceMappingURL=EffectCtrl.js.map