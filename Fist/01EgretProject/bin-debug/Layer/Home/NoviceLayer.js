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
var NoviceLayer = (function (_super) {
    __extends(NoviceLayer, _super);
    function NoviceLayer() {
        return _super.call(this) || this;
    }
    NoviceLayer.prototype.onEnter = function () {
        var _this = this;
        this.noviceTimes = SignInData.getSignInTimes();
        this.isNovice = SignInData.isNewHandSignIn();
        this.novice = new egret.DisplayObjectContainer();
        UI.addBg(this, "Novice_bg_png");
        this.addChild(this.novice);
        var bg = UI.addPic(this.novice, "Novice_front_png", 0, 0);
        this.novice.width = bg.width;
        this.novice.height = bg.height;
        this.novice.x = UI.WINSIZE_W / 2 - this.novice.width / 2;
        this.novice.y = UI.WINSIZE_H / 2 - this.novice.height / 2;
        var _loop_1 = function (i) {
            var reward = UI.addPic(this_1.novice, "Novice_day" + (i + 1) + "_png", 0, 0, true);
            reward.x = this_1.novice.width / 3 + (reward.width + 15) * (i % 3);
            reward.y = this_1.novice.height / 2 + 10 + (reward.height / 2 + 10) * (Math.floor(i / 3) - 0.5) * 2;
            var signIn_1;
            if (this_1.noviceTimes > i)
                signIn_1 = UI.addPic(this_1.novice, "Novice_button_signed_png", reward.x, reward.y + reward.height / 2, true);
            else if (this_1.noviceTimes == i && this_1.isNovice)
                signIn_1 = UI.addBtn(this_1.novice, "Novice_button_sign_png", reward.x, reward.y + reward.height / 2, true, function () { return _this.siginIn(signIn_1); });
            else
                signIn_1 = UI.addPic(this_1.novice, "Novice_button_ besigned_png", reward.x, reward.y + reward.height / 2, true);
            signIn_1.anchorOffsetY = signIn_1.height;
        };
        var this_1 = this;
        for (var i = 0; i < 6; i++) {
            _loop_1(i);
        }
        var day7 = UI.addPic(this.novice, "Novice_day7_png", this.novice.width / 4 * 3, this.novice.height / 2, true);
        day7.x -= day7.width / 2;
        var signIn;
        if (this.noviceTimes < 6)
            signIn = UI.addPic(this.novice, "Novice_button_ besigned07_png", day7.x, day7.y + day7.height / 2, true);
        else if (this.noviceTimes == 6 && this.isNovice)
            signIn = UI.addBtn(this.novice, "Novice_button_ sign07_png", day7.x, day7.y + day7.height / 2, true, function () { return _this.siginIn(signIn); });
        else
            signIn = UI.addPic(this.novice, "Novice_button_signed_png", day7.x, day7.y + day7.height / 2, true);
        signIn.anchorOffsetY = signIn.height;
        UI.addBtn(this.novice, "Novice_button_close_png", day7.x + day7.width, 0, true, function () {
            Home.instace.changeLayer(_this, new HomeLayer());
        });
    };
    NoviceLayer.prototype.onExit = function () { };
    NoviceLayer.prototype.siginIn = function (target) {
        var reward = SignInData.setNewHandSignIn();
        if (reward) {
            target.$setTexture(RES.getRes("Novice_button_signed_png"));
            console.log("获取奖励");
        }
    };
    return NoviceLayer;
}(Scene));
__reflect(NoviceLayer.prototype, "NoviceLayer");
//# sourceMappingURL=NoviceLayer.js.map