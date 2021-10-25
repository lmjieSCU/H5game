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
var PauseTip = (function (_super) {
    __extends(PauseTip, _super);
    function PauseTip() {
        var _this = _super.call(this) || this;
        _this._props = [];
        PauseTip.instance = _this;
        _this._bg = UI.addPic(_this, "bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.setscalXandY(_this._bg, UI.WINSIZE_W * 1.1 / _this._bg.width, UI.WINSIZE_H * 1.1 / _this._bg.height);
        _this._begin = UI.addPic(_this, "begin_png", UI.WINSIZE_W / 5, UI.WINSIZE_H / 1.1, true);
        _this._ReturnChoose = UI.addPic(_this, "ReturntoChoose_png", UI.WINSIZE_W * 2 / 5, UI.WINSIZE_H / 1.1, true);
        var s = SoundCtrl.I.Bgtag == true ? "sound_png" : "nosound_png";
        _this._sound = UI.addPic(_this, s, UI.WINSIZE_W * 3 / 5, UI.WINSIZE_H / 1.1, true);
        var mode = MainMoive.instance.clickmode == true ? "mode1_png" : "mode2_png";
        _this._Clickmodel = UI.addPic(_this, mode, UI.WINSIZE_W * 4 / 5, UI.WINSIZE_H / 1.1, true);
        _this._success = UI.addPic(_this, "success_png", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2.5, true);
        _this._defeat = UI.addPic(_this, "defeat_png", UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 2.5, true);
        _this.success = UI.addText(_this, "相连", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2.5 + _this._success.height / 2 + 50, true);
        _this.defeat = UI.addText(_this, "不相连", UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 2.5 + _this._success.height / 2 + 50, true);
        _this._bomb = UI.addPic(_this, "mv1_png", UI.WINSIZE_W / 8, UI.WINSIZE_H / 1.6, true);
        _this._paint = UI.addPic(_this, "mv2_png", UI.WINSIZE_W / 8, UI.WINSIZE_H / 1.4, true);
        _this._update = UI.addPic(_this, "mv3_png", UI.WINSIZE_W / 8, UI.WINSIZE_H / 1.25, true);
        _this._props.push(UI.addText(_this, "-炸掉3*3的方块 -5个金币", _this._bomb.x + _this._bomb.width / 2, _this._bomb.y - _this._bomb.height / 2));
        _this._props.push(UI.addText(_this, "-自选方块颜色 -2个金币", _this._paint.x + _this._paint.width / 2, _this._paint.y - _this._paint.height / 2));
        _this._props.push(UI.addText(_this, "-更新所有方块颜色 -2个金币", _this._update.x + _this._update.width / 2, _this._update.y - _this._update.height / 2));
        _this._rules = UI.addText(_this, "基本规则：\n\n- 选中并消除相连的方块\n\n- 选中的方块越多，分数越高\n\n- 剩余方块小于10则有额外奖励", UI.WINSIZE_W / 10, UI.WINSIZE_H / 14);
        _this.addBtn();
        return _this;
    }
    PauseTip.prototype.addBtn = function () {
        UI.addClickAction(this, this._Clickmodel, this.ChooseClickMode);
        UI.addClickAction(this, this._begin, this.Begin);
        UI.addClickAction(this, this._ReturnChoose, this.ReturnChoose);
        UI.addClickAction(this, this._sound, this.ChooseMusic);
    };
    PauseTip.prototype.ChooseMusic = function () {
        SoundCtrl.I.Bgtag = !SoundCtrl.I.Bgtag;
        if (SoundCtrl.I.Bgtag == false) {
            PauseTip.instance._sound.texture = RES.getRes("nosound_png");
            SoundCtrl.I.BGclose();
        }
        else {
            PauseTip.instance._sound.texture = RES.getRes("sound_png");
            switch (GameModel.currentMode) {
                case GameModel.NORMAL:
                    SoundCtrl.I.BGplay("yinyue2");
                    break;
                case GameModel.TIMELIMIT:
                    SoundCtrl.I.BGplay("yinyue3");
                    break;
                case GameModel.BULIMIT:
                    SoundCtrl.I.BGplay("yinyue4");
                    break;
            }
        }
    };
    PauseTip.prototype.ChooseClickMode = function () {
        MainMoive.instance.clickmode = !MainMoive.instance.clickmode;
        var s = MainMoive.instance.clickmode == true ? "mode1_png" : "mode2_png";
        PauseTip.instance._Clickmodel.texture = RES.getRes(s);
    };
    PauseTip.prototype.Begin = function () {
        MainMoive.instance.removeChild(PauseTip.instance);
        MainMoive.instance.begin();
    };
    PauseTip.prototype.ReturnChoose = function () {
        MainMoive.instance.destroy();
        SceneManager.Instance.changeScene(new ChooseScene());
    };
    return PauseTip;
}(egret.DisplayObjectContainer));
__reflect(PauseTip.prototype, "PauseTip");
//# sourceMappingURL=PauseTip.js.map