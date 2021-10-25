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
var Tasklayer = (function (_super) {
    __extends(Tasklayer, _super);
    function Tasklayer() {
        var _this = _super.call(this) || this;
        _this._nav = [];
        _this._navButton = [];
        _this._assignment = [];
        _this._ax = UI.WINSIZE_W / 2;
        _this._ay = UI.WINSIZE_H / 2 - 188;
        _this._rewardX = UI.WINSIZE_W / 2 + 117;
        _this._getX = UI.WINSIZE_W - 160;
        return _this;
    }
    Tasklayer.prototype.onEnter = function () {
        Tasklayer.instance = this;
        //背景
        UI.addPic(this, "assignment_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        //任务列表
        this._myAssignment = new egret.DisplayObjectContainer();
        this._myAssignment.width = UI.WINSIZE_W;
        this._myAssignment.height = UI.WINSIZE_H + 70;
        this.addChild(this._myAssignment);
        for (var i = 0; i < 4; i++) {
            this._assignment[i] = UI.addPic(this._myAssignment, "assignment_bodybox_png", this._ax, this._ay, true);
            UI.addPic(this._myAssignment, "assignment_awardbox_png", this._rewardX, this._ay, true);
            this._reward = UI.addPic(this._myAssignment, "assignment_gold_png", this._rewardX, this._ay, true);
            this._get = UI.addPic(this._myAssignment, "assignment_button_claimshadow_png", this._getX, this._ay, true); //之后改为领取按钮
            this._ay += 115;
            if (i % 2 == 0 && i != 0) {
                this._reward.texture = RES.getRes("assignment_diamond_png");
            }
        }
        this._myScrollView = new egret.ScrollView();
        this._myScrollView.setContent(this._myAssignment); //让任务列表能够滚动
        this._myScrollView.width = UI.WINSIZE_W;
        this._myScrollView.height = UI.WINSIZE_H - 155;
        this._myScrollView.x = UI.WINSIZE_W / 2;
        this._myScrollView.y = UI.WINSIZE_H / 2 + 66;
        this._myScrollView.anchorOffsetX = this._myScrollView.width / 2;
        this._myScrollView.anchorOffsetY = this._myScrollView.height / 2;
        this.addChild(this._myScrollView);
        this._myScrollView.verticalScrollPolicy = "on";
        this._myScrollView.horizontalScrollPolicy = "off";
        //导航
        UI.addPic(this, "assignment_box_png", UI.WINSIZE_W / 3 - 35, UI.WINSIZE_H / 3 - 55, true);
        this._nav[0] = UI.addPic(this, "assignment_clickeffect_png", UI.WINSIZE_W / 3 - 233, UI.WINSIZE_H / 3 - 55, true);
        this._nav[1] = UI.addPic(this, "assignment_clickeffect_png", UI.WINSIZE_W / 3 - 48, UI.WINSIZE_H / 3 - 55, true);
        this._nav[0].visible = false;
        this._nav[1].visible = false;
        this._navButton[0] = UI.addBtn(this, "assignment_word_asshadow_png", UI.WINSIZE_W / 3 - 230, UI.WINSIZE_H / 3 - 55, true, function (arg) {
            Tasklayer.instance._navButton[0].texture = RES.getRes("assignment_word_assignment_png");
            Tasklayer.instance._navButton[1].texture = RES.getRes("assignment_word_ac_shadow_png");
            Tasklayer.instance._nav[0].visible = true;
            Tasklayer.instance._nav[1].visible = false;
            Tasklayer.instance._myScrollView.visible = true;
        });
        this._navButton[1] = UI.addBtn(this, "assignment_word_ac_shadow_png", UI.WINSIZE_W / 3 - 45, UI.WINSIZE_H / 3 - 55, true, function (arg) {
            Tasklayer.instance._navButton[1].texture = RES.getRes("assignment_word_achievement_png");
            Tasklayer.instance._navButton[0].texture = RES.getRes("assignment_word_asshadow_png");
            Tasklayer.instance._nav[1].visible = true;
            Tasklayer.instance._nav[0].visible = false;
            Tasklayer.instance._myScrollView.visible = false;
        });
        //默认导航选项
        Tasklayer.instance._navButton[0].texture = RES.getRes("assignment_word_assignment_png");
        Tasklayer.instance._nav[0].visible = true;
        Tasklayer.instance._nav[1].visible = false;
        //
        var goldLayer = new GoldDiamondLayer(this);
        this.addChild(goldLayer);
        goldLayer.addReturn(function (arg) {
            SceneManager.Instance.changeScene(new TownScene);
        });
    };
    Tasklayer.prototype.onExit = function () {
    };
    return Tasklayer;
}(Scene));
__reflect(Tasklayer.prototype, "Tasklayer");
//# sourceMappingURL=TaskLayer.js.map