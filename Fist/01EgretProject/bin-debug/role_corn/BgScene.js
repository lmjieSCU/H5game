var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BgScene = (function () {
    function BgScene() {
        this.bgObjArray = [];
    }
    BgScene.prototype.initObj = function (name) {
        if (name === void 0) { name = "map1"; }
        // var bg0 = { isMove: false, isAnimation: false, mc: "bg_1_1_png", X: 0, Y: 0 };
        // var bg1 = { isMove: true, isAnimation: false, mc: "bg_1_2_png", X: 0, Y: 0 };
        // var bg2 = { isMove: true, isAnimation: false, mc: "bg_1_3_png", X: 0, Y: 0 };
        var bgArray = RES.getRes("Map_json")["" + name];
        for (var i in bgArray) {
            this.bgObjArray.push(bgArray[i]);
        }
        for (var i = 0; i < this.bgObjArray.length; i++) {
            if (this.bgObjArray[i].isMove) {
                var img = UI.addPic(BgScene.stageBGContainer, this.bgObjArray[i].mc, this.bgObjArray[i].X, this.bgObjArray[i].Y, false);
                img.anchorOffsetY = img.measuredHeight;
                img.y = UI.WINSIZE_H;
                if (img.measuredHeight > UI.WINSIZE_H && img.measuredHeight < UI.WINSIZE_H + 100) {
                    img.scaleY = UI.WINSIZE_H * 1.3 / img.measuredHeight;
                }
                img["initial_y"] = img.y;
                img.x = -img.measuredWidth / 2 + GameConfig.FightWidth / 2; //需要修改
                BgScene.BG_images_moveabled.push(img);
            }
            else {
                var img = UI.addPic(SplashScene.instance.parent, this.bgObjArray[i].mc, this.bgObjArray[i].X, this.bgObjArray[i].Y, false);
                img.scaleX = GameConfig.FightWidth / img.measuredWidth;
                img.scaleY = UI.WINSIZE_H / img.measuredHeight;
                SplashScene.instance.parent.setChildIndex(img, 0);
            }
        }
        BgScene.effectContainer_init_Y = Stage_effect.effectContainer.y;
        GameConfig.setStage_image(BgScene.BG_images_moveabled[BgScene.BG_images_moveabled.length - 1]); //取最后一张长图
        FightMainRender.getInstance().Add(this, BgScene.moveY);
    };
    /**实现游戏主容器SplashScene.instance上下震动 */
    BgScene.moveY = function () {
        var numY = _level0.P1_role.y < _level0.P2_role.y ? _level0.P1_role.y : _level0.P2_role.y;
        var Vy = (_level0.land_Y - numY) / 4;
        if (Vy > 55) {
            return;
        }
        SplashScene.instance.y = Vy;
        for (var i = 0; i < BgScene.BG_images_moveabled.length - 2; ++i) {
            BgScene.BG_images_moveabled[i].y = BgScene.BG_images_moveabled[i]["initial_y"] - Vy / 2;
        }
        Stage_effect.effectContainer.y = BgScene.effectContainer_init_Y - Vy;
    };
    //实现实现游戏主容器SplashScene.instance左右移动
    BgScene.moveX = function (Vx, role) {
        var condition = GameConfig.stage_image.localToGlobal(GameConfig.stage_image.width - Vx / 2);
        var condition2 = GameConfig.stage_image.localToGlobal(0 - Vx / 2);
        if (condition.x <= GameConfig.FightWidth || condition2.x >= 0) {
            // console.log("背景已到达边缘");
            return;
        }
        var condition3 = role.localToGlobal(Vx); //0- Vx / 2~GameConfig.FightWidth- Vx / 2
        var condition4 = role.opp.localToGlobal(-Vx);
        // if (condition3.x <= 1 || condition3.x >= GameConfig.FightWidth) {
        //     console.log("P1已到达边缘");
        //     return;
        // }
        // if (condition4.x <= 1 || condition4.x >= GameConfig.FightWidth) {
        //     console.log("P2已到达边缘");
        //     return;
        // }
        if (Vx > 0) {
            if (_level0.P1_role.dir != -1) {
                if (condition3.x < GameConfig.FightWidth - condition4.x) {
                    return;
                }
            }
            else {
                if (condition4.x < GameConfig.FightWidth - condition3.x) {
                    return;
                }
            }
        }
        else {
            if (_level0.P1_role.dir != -1) {
                if (condition3.x > GameConfig.FightWidth - condition4.x) {
                    return;
                }
            }
            else {
                if (condition4.x > GameConfig.FightWidth - condition3.x) {
                    return;
                }
            }
        }
        SplashScene.instance.x -= Vx / 2;
        Stage_effect.effectContainer.x += Vx / 2;
        for (var i = 0; i < BgScene.BG_images_moveabled.length - 1; ++i) {
            BgScene.BG_images_moveabled[i].x += Vx / 2 * (GameConfig.stageWidth / BgScene.BG_images_moveabled[i].width / 2);
        }
    };
    BgScene.BG_images_moveabled = [];
    return BgScene;
}());
__reflect(BgScene.prototype, "BgScene");
//# sourceMappingURL=BgScene.js.map