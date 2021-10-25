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
var Life = (function (_super) {
    __extends(Life, _super);
    function Life(x, y, player, data) {
        if (player === void 0) { player = 1; }
        if (data === void 0) { data = null; }
        var _this = _super.call(this) || this;
        _this.playerData = { id: "roleK", life: 100, power: 100, burst: 0, lifeNum: 2, powerNum: 3 };
        _this.over = false;
        _this.renderAnimation = 1;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        _this.x = x;
        _this.y = y;
        _this.data = data;
        _this.player = player;
        return _this;
    }
    Life.prototype.onEnter = function () {
        var player = this.player == 1 ? _level0.P1_role : _level0.P2_role;
        this.playerData.lifeNum = Math.ceil(player.life / 100);
        this.playerData.life = player.life - (this.playerData.lifeNum - 1) * 100;
        if (this.data != null) {
            player.winTimes = this.data.winTimes;
        }
        var winTimes = player.winTimes;
        this.playerData.id = player._roleName;
        var lifeBg = UI.addPic(this, "Fight_blood_bg_png", 0, 0);
        this.width = lifeBg.width;
        var blood = UI.addPic(this, "Fight_blood_left_png", lifeBg.width - (Main.UItype == Main.UIT2 ? 4.5 : 0), lifeBg.height / 2, true);
        blood.anchorOffsetX = blood.width;
        if (Main.UItype == Main.UIT2) {
            blood.scaleX = (lifeBg.width - 10) / blood.width;
            blood.scaleY = (lifeBg.height - 8) / blood.height;
        }
        this.lifeMask = new egret.Shape();
        this.lifeMask.graphics.beginFill(0x000000);
        this.lifeMask.graphics.drawRect(0, blood.y - blood.height / 2, blood.width * blood.scaleX, blood.height);
        this.lifeMask.graphics.endFill();
        // this.p1_lifeMask.anchorOffsetX = this.p1_lifeMask.width;
        this.lifeMask.x = blood.x - blood.width * blood.scaleX;
        this.lifeMask.scaleX = this.playerData.life / 100;
        this.addChild(this.lifeMask);
        blood.mask = this.lifeMask;
        // this.lifeAdd = UI.addPic(this, "fightui_69_png", this.width / 2 + (this.player == 1?0:15), blood.y, true);
        // this.p1_lifeAdd.y = this.p1_lifeAdd.height / 2;
        var num1 = this.playerData.lifeNum >= 2 ? this.playerData.lifeNum : 2;
        this.lifeNum = UI.addPic(this, "Fight_word_X" + num1 + "_png", this.width / 2, blood.y, true);
        if (this.playerData.lifeNum < 2) {
            // this.lifeAdd.alpha = 0;
            this.lifeNum.alpha = 0;
        }
        var imgBox = UI.addPic(this, "Fight_head_png", 0, 0, true);
        imgBox.x -= imgBox.width * 0.4;
        imgBox.y += imgBox.height * 0.3;
        // UI.addClickAction(this, imgBox, () => {
        //     FightMainRender.getInstance().destroy();
        //     SplashScene.instance.clear();
        //     SceneManager.getInstance().ChangeScene(new Home());
        //     FromServer.getInstance().destroy();
        // })
        var head = UI.addPic(this, this.playerData.id.substring(4) + "Head_png", imgBox.x, imgBox.y, true);
        var scale = Math.min((imgBox.width - 30) / head.width, (imgBox.height - 30) / head.height);
        head.scaleX = scale;
        head.scaleY = scale;
        if (this.player == 2) {
            // this.lifeAdd.skewY = 180;
            this.lifeNum.skewY = 180;
        }
        this.height = lifeBg.height;
        for (var i = 1; i <= winTimes; i++) {
            var v = UI.addPic(this, "Word_pic_v_png", this.width - i * 20, lifeBg.y + lifeBg.height);
            v.anchorOffsetX = v.width / 2;
            v.x += v.width / 2;
            if (this.player == 2)
                v.$setSkewY(180);
        }
        FightMainRender.getInstance().Add(this, this.render);
    };
    Life.prototype.render = function () {
        if (this.over) {
            this.renderAnimation += 1;
            if (this.renderAnimation == 150) {
                this.over = false;
                SplashScene.instance.stage.addChild(new Winner(this.role.opp));
            }
        }
    };
    Life.prototype.onExit = function () {
        FightMainRender.getInstance().Remove(this, this.render);
    };
    Life.prototype.lifeControl = function (num, role) {
        this.role = role;
        if (num == 0)
            return;
        this.playerData.life -= num;
        this.redLife = (this.playerData.life + (this.playerData.lifeNum - 1) * 100 <= role.life_max / 4);
        role.redBlood = this.redLife;
        // this.p1_redLife || this.p1_lifeRed.$setAlpha(0);//判断血量是否进入红血状态
        if (this.playerData.life <= 0) {
            if (this.playerData.lifeNum > 1) {
                this.playerData.life += 100;
                // this.p1_redBloodMask.scaleX = 1;
            }
            else if (!role.isKO) {
                this.playerData.life = 0;
                role.isKO = true;
                this.redLife = false;
                // this.p1_lifeRed.$setAlpha(0);
                role.opp.stop_move_X1();
                this.over = true;
                Sound.getInstance().oneTimesPlay('lose');
                this.parent.timeStart = false;
                // const t = egret.setInterval(() => {
                //     SplashScene.instance.stage.addChild(new Winner(role.opp));
                //     egret.clearInterval(t);
                // }, this, 5000)
            }
            else
                this.playerData.life = 0;
            this.playerData.lifeNum--;
        }
        role.life = this.playerData.life;
        // this.lifeMask.scaleX = this.playerData.life / 100;
        egret.Tween.removeTweens(this.lifeMask);
        egret.Tween.get(this.lifeMask).to({ scaleX: this.playerData.life / 100 }, 400, egret.Ease.sineIn);
        var n = this.playerData.lifeNum >= 2 ? this.playerData.lifeNum : 2;
        this.lifeNum.$setTexture(RES.getRes("Fight_word_X" + n + "_png")); //根据血条数修改
        // egret.Tween.get(this.p1_redBloodMask).to({ scaleX: this.p1.life / 100 }, 1000, egret.Ease.sineIn);//红血延时消失
        if (this.playerData.lifeNum < 2) {
            // this.lifeAdd.$setAlpha(0);
            this.lifeNum.$setAlpha(0);
        }
        else {
            // this.lifeAdd.alpha = 1;
            this.lifeNum.alpha = 1;
        }
    };
    return Life;
}(egret.DisplayObjectContainer));
__reflect(Life.prototype, "Life", ["egret.DisplayObject"]);
//# sourceMappingURL=Life.js.map