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
var ChooseFight = (function (_super) {
    __extends(ChooseFight, _super);
    function ChooseFight(x, y) {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.x = x;
        _this.y = y;
        return _this;
    }
    ChooseFight.prototype.onEnter = function () {
        var _this = this;
        if (Main.UItype == Main.UIT2) {
            var bg = UI.addPic(this, "Home_lightning_png", 0, 0, true);
            this.width = bg.width;
            this.height = bg.height;
            bg.x = bg.width / 2;
            bg.y = bg.height / 2;
            var level = UI.addBtn(this, "aiBtn_png", bg.width * 0.125, bg.height * 0.3125, true, function () { return _this.goToFightReady('level'); });
            var match = UI.addBtn(this, "matchBtn_png", bg.width * 0.85, bg.height * 0.3125, true, function () {
                // const playCount = NewHand.getNewHandInfo().playCount;
                // if(playCount>=3) this.goToFightReady('match');
                // else {
                //     console.log("胜利三局开启匹配模式");
                //     SceneManager.getInstance().AddLayer(new NewDontPlay());
                // }
                // SceneManager.getInstance().AddLayer(new NewDontPlay());
                _this.goToFightReady('match');
            });
            var home = UI.addBtn(this, "fightBtn_png", bg.width * 0.75, bg.height * 0.65, true, function () { return _this.goToFightReady('house'); });
            var rank = UI.addBtn(this, "rankBtn_png", bg.width * 0.025, home.y, true, function () { return _this.goToFightReady('rank'); });
            this.setChildIndex(bg, this.numChildren - 1);
        }
        else {
            var shilian = UI.addBtn(this, "Home_model_shilian_png", 0, 0, true, function () { return _this.goToFightReady('level'); });
            shilian.y = shilian.height / 2;
            var pipei = UI.addBtn(this, "Home_model_zaixian_png", shilian.x + shilian.width / 2 + 60, shilian.y, true, function () { return _this.goToFightReady('match'); });
            var zhengba = UI.addBtn(this, "Home_model_wuling_png", pipei.x + pipei.width / 2 + 60, shilian.y, true, function () { return _this.goToFightReady('rank'); });
            var lianji = UI.addBtn(this, "Home_model_lianji_png", zhengba.x + zhengba.width / 2 + 60, shilian.y, true, function () { return _this.goToFightReady('house'); });
        }
    };
    ChooseFight.prototype.goToFightReady = function (type) {
        if (Home.instace.newHand) {
            Home.instace.removeChildAt(Home.instace.numChildren - 1);
        }
        Home.instace.changeLayer(this.parent, new FightReady(type));
        Home.fightType = type;
        Sound.getInstance().oneTimesPlay(Sound.getInstance().musicName.buttonClick);
    };
    ChooseFight.prototype.newHand = function () {
        var _this = this;
        var target = this.getChildAt(0);
        Home.instace.addChild(new NewHandss(target, "fight", this.x + target.x - target.width / 8, this.y + target.y, function () { return _this.goToFightReady('level'); }, this));
        // Home.instace.addChild(new NewHands(this.x+target.x - target.width/2, this.y+target.y - target.height/2, target.width*0.75, target.height, "点击按钮进行对战", this.x+target.x - target.width, this.y + target.y + target.height/2));
    };
    return ChooseFight;
}(egret.DisplayObjectContainer));
__reflect(ChooseFight.prototype, "ChooseFight", ["egret.DisplayObject"]);
//# sourceMappingURL=ChooseFight.js.map