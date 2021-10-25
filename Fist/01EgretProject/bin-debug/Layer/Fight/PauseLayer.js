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
//弹窗
var PauseLayer = (function (_super) {
    __extends(PauseLayer, _super);
    function PauseLayer() {
        var _this = _super.call(this) || this;
        _this.width = 380;
        _this.height = 420;
        _this.x = UI.WINSIZE_W / 2 - _this.width / 2;
        _this.y = UI.WINSIZE_H / 2 - _this.height / 2 + 70;
        _this.blackCloth(_this, function () { });
        _this.bg();
        _this.continue();
        _this.instructions();
        _this.out();
        return _this;
    }
    PauseLayer.I = function () {
        if (PauseLayer.itself == null) {
            PauseLayer.itself = new PauseLayer();
        }
        return PauseLayer.itself;
    };
    //背景
    PauseLayer.prototype.bg = function () {
        UI.addPic(this, "Popup_box_png", 0, 0);
    };
    //继续游戏
    PauseLayer.prototype.continue = function () {
        var _this = this;
        this.continue_btn = UI.addBtn(this, "Popup_button_continue_png", this.width / 2, this.height / 5 + 25, true, function () {
            if (NoviceGuidance.I().AI_stop) {
                return;
            }
            FightMainRender.instance.renderPause = false;
            _this.parent.removeChild(_this);
        });
    };
    //指令
    PauseLayer.prototype.instructions = function () {
        var _this = this;
        this.instructions_btn = UI.addBtn(this, "Popup_button_order_png", this.width / 2, this.height / 5 * 2 + 25, true, function () {
            _this.stage.addChild(new InstructionList(_level0.P1_role));
            _this.parent.removeChild(_this);
            if (NoviceGuidance.I().novice_btn) {
                NoviceGuidance.I().popup.parent.removeChild(NoviceGuidance.I().popup);
            }
        });
    };
    //结束游戏
    PauseLayer.prototype.out = function () {
        this.out_btn = UI.addBtn(this, "Popup_button_out_png", this.width / 2, this.height / 5 * 3 + 25, true, function () {
            if (NoviceGuidance.I().AI_stop) {
                return;
            }
            SplashScene.instance.clear();
            SceneManager.getInstance().ChangeScene(new Home());
            FightMainRender.getInstance().destroy();
        });
    };
    //遮挡
    PauseLayer.prototype.blackCloth = function (node, event) {
        if (event === void 0) { event = null; }
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x00000, 0.3);
        var num = this.globalToLocal(0, 0);
        shp.graphics.drawRect(num.x, num.y, UI.WINSIZE_W, UI.WINSIZE_H);
        shp.graphics.endFill();
        node.addChild(shp);
        if (event != null) {
            shp.touchEnabled = true;
            shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, shp);
        }
    };
    //单例
    PauseLayer.itself = null;
    return PauseLayer;
}(egret.DisplayObjectContainer));
__reflect(PauseLayer.prototype, "PauseLayer");
//# sourceMappingURL=PauseLayer.js.map