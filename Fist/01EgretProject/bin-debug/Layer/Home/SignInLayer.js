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
var SignInLayer = (function (_super) {
    __extends(SignInLayer, _super);
    function SignInLayer() {
        return _super.call(this) || this;
    }
    SignInLayer.prototype.onEnter = function () {
        var _this = this;
        var backBg = UI.addPic(this, "Signin_head_png", 0, 0);
        var back = UI.addBtn(this, "Button_back_png", 0, 0, false, function () {
            Home.instace.changeLayer(_this, new HomeLayer());
        });
        this.createSignIn(backBg.height);
    };
    SignInLayer.prototype.onExit = function () { };
    SignInLayer.prototype.createSignIn = function (head) {
        var _this = this;
        this.signIn = new egret.DisplayObjectContainer();
        var bg = UI.addPic(this.signIn, "Signin_holebox_png", 0, 0);
        this.signIn.width = bg.width;
        this.signIn.height = bg.height;
        this.signIn.x = UI.WINSIZE_W / 2 - this.signIn.width / 2;
        this.signIn.y = (UI.WINSIZE_H + head) / 2 - this.signIn.height / 2;
        this.addChild(this.signIn);
        this.signInTimes = SignInData.getSignInTimes();
        this.isSignIn = SignInData.isSignIn();
        // this.signInTimes = 21;
        // this.isSignIn = false;
        for (var i = 0; i < this.signInTimes; i++) {
            var shadow = UI.addPic(this.signIn, "Signin_box_shadow0_png", 15, 23);
            var row = Math.floor(i / 7);
            var col = i % 7;
            shadow.x += col * (shadow.width + 1.5);
            shadow.y += row * (shadow.height + 21);
        }
        if (this.isSignIn) {
            var shadow_1 = UI.addBtn(this.signIn, "Signin_box_shadow_png", 2.5, -10, false, function () { return _this.setSignIn(shadow_1); });
            var row = Math.floor(this.signInTimes / 7);
            var col = this.signInTimes % 7;
            shadow_1.x += col * (shadow_1.width - 22.5);
            shadow_1.y += row * (shadow_1.height - 24);
        }
    };
    SignInLayer.prototype.setSignIn = function (target) {
        var reward = SignInData.setSignIn();
        if (reward) {
            target.$setTexture(RES.getRes("Signin_box_shadow0_png"));
            target.touchEnabled = false;
            target.x += 12;
            target.y += 32;
        }
    };
    return SignInLayer;
}(Scene));
__reflect(SignInLayer.prototype, "SignInLayer");
//# sourceMappingURL=SignInLayer.js.map