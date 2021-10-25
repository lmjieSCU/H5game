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
var MissonPanel = (function (_super) {
    __extends(MissonPanel, _super);
    function MissonPanel() {
        var _this = _super.call(this) || this;
        _this.aimLabelDict = new Dicts();
        _this.aimIconDict = new Dicts();
        return _this;
    }
    MissonPanel.prototype.close = function () {
        _super.prototype.close.call(this);
        return;
    };
    MissonPanel.prototype.hide = function () {
        _super.prototype.hide.call(this);
        return;
    };
    MissonPanel.prototype.init = function () {
        var bg = UI.addPic("missionbg_png", true, this, UI.WINSIZE_W / 2, 0);
        this.levelTxt = UI.addBitText(this, Model.levelModel.selectedLevel, "info_fnt", true, UI.WINSIZE_W / 2, -bg.height / 2 + 40, 1.3, 1.3);
        this.show();
        return;
    };
    MissonPanel.prototype.show = function () {
        var icon = null;
        var label = null;
        var aimArr = null;
        var aimType = 0;
        var aimValue = 0;
        var aimLabel = null;
        var info = Config.levelConfig.getLevel(Model.levelModel.selectedLevel);
        var loc2 = 0;
        for (var key in this.aimIconDict.dict) {
            icon = this.aimIconDict[key];
            icon.parent.removeChild(icon);
            icon = null;
            delete this.aimIconDict[key];
        }
        for (var key in this.aimLabelDict.dict) {
            label = this.aimLabelDict[key];
            label.parent.removeChild(label);
            label = null;
            delete this.aimLabelDict[key];
        }
        var posX = 0;
        if (info.aim.length != 1) {
            if (info.aim.length != 2) {
                if (info.aim.length == 3) {
                    posX = 200;
                }
            }
            else {
                posX = 240;
            }
        }
        else {
            posX = 300;
        }
        var i = 0;
        while (i < info.aim.length) {
            aimArr = info.aim[i].split(",");
            aimType = Number(aimArr[0]);
            aimValue = Number(aimArr[1]);
            icon = UI.addPic(AimType.AIM_ICONS[aimType] + "_png", true, this);
            if (aimType == AimType.SCORE) {
            }
            else {
                icon.scaleY = 0.8;
                icon.scaleX = 0.8;
            }
            icon.x = posX + i * 120;
            icon.y = 10;
            this.aimIconDict.put(aimType, icon);
            aimLabel = UI.addBitText(this, aimValue, "info_fnt", true, posX + 60 + i * 120, 10, 1.3, 1.3);
            this.aimLabelDict.dict[aimType] = aimLabel;
            ++i;
        }
        this.x = 0;
        this.y = -200;
        egret.Tween.get(this).to({ "y": UI.WINSIZE_H / 2 }, 1000).wait(1000)
            .to({ "y": -200 }, 1000).call(this.close, this);
        egret.setTimeout(function () {
            SoundCtrl.I.playmusic("boxmove");
        }, this, 1000);
        return;
    };
    MissonPanel.prototype.updateData = function (arg1) {
        _super.prototype.updateData.call(this, arg1);
        return;
    };
    return MissonPanel;
}(BasePanel3D));
__reflect(MissonPanel.prototype, "MissonPanel");
//# sourceMappingURL=MissonPanel.js.map