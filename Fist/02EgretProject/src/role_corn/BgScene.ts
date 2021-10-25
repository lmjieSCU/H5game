class BgScene {
    public static stageBGContainer: egret.DisplayObjectContainer;
    public bgObjArray = [];
    public static BG_images_moveabled = [];
    public static effectContainer_init_Y: number;

    public initObj(name = "map1") {
        // var bg0 = { isMove: false, isAnimation: false, mc: "bg_1_1_png", X: 0, Y: 0 };
        // var bg1 = { isMove: true, isAnimation: false, mc: "bg_1_2_png", X: 0, Y: 0 };
        // var bg2 = { isMove: true, isAnimation: false, mc: "bg_1_3_png", X: 0, Y: 0 };
        var bgArray = RES.getRes("Map_json")[`${name}`];
        for (let i in bgArray) {
            this.bgObjArray.push(bgArray[i]);
        }
        for (let i = 0; i < this.bgObjArray.length; i++) {
            if (this.bgObjArray[i].isMove) {
                let img: egret.Bitmap = UI.addPic(BgScene.stageBGContainer, this.bgObjArray[i].mc, this.bgObjArray[i].X, this.bgObjArray[i].Y, false);
                img.anchorOffsetY = img.measuredHeight;
                img.y = UI.WINSIZE_H;
                if (img.measuredHeight > UI.WINSIZE_H && img.measuredHeight < UI.WINSIZE_H + 100) {
                    img.scaleY = UI.WINSIZE_H * 1.3 / img.measuredHeight;
                }
                img["initial_y"] = img.y;
                img.x = -img.measuredWidth / 2 + GameConfig.FightWidth / 2;//需要修改
                BgScene.BG_images_moveabled.push(img);
            } else {
                let img: egret.Bitmap = UI.addPic(SplashScene.instance.parent, this.bgObjArray[i].mc, this.bgObjArray[i].X, this.bgObjArray[i].Y, false);
                img.scaleX = GameConfig.FightWidth / img.measuredWidth;
                img.scaleY = UI.WINSIZE_H / img.measuredHeight;
                SplashScene.instance.parent.setChildIndex(img, 0);
            }
        }
        BgScene.effectContainer_init_Y = Stage_effect.effectContainer.y;
        GameConfig.setStage_image(BgScene.BG_images_moveabled[BgScene.BG_images_moveabled.length - 1]);//取最后一张长图
        FightMainRender.getInstance().Add(this, BgScene.moveY);
    }

    /**实现游戏主容器SplashScene.instance上下震动 */
    public static moveY() {
        let numY = _level0.P1_role.y < _level0.P2_role.y ? _level0.P1_role.y : _level0.P2_role.y;
        let Vy = (_level0.land_Y - numY) / 4;
        if (Vy > 55) {
            return;
        }
        SplashScene.instance.y = Vy;
        for (let i = 0; i < BgScene.BG_images_moveabled.length - 2; ++i) {
            BgScene.BG_images_moveabled[i].y = BgScene.BG_images_moveabled[i]["initial_y"] - Vy / 2;
        }
        Stage_effect.effectContainer.y = BgScene.effectContainer_init_Y - Vy;
    }


    //实现实现游戏主容器SplashScene.instance左右移动
    public static moveX(Vx: number, role: Role) {
        let condition = GameConfig.stage_image.localToGlobal(GameConfig.stage_image.width - Vx / 2);
        let condition2 = GameConfig.stage_image.localToGlobal(0 - Vx / 2);
        if (condition.x <= GameConfig.FightWidth || condition2.x >= 0) {
            // console.log("背景已到达边缘");
            return;
        }
        let condition3 = role.localToGlobal(Vx);//0- Vx / 2~GameConfig.FightWidth- Vx / 2
        let condition4 = role.opp.localToGlobal(- Vx);
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
            } else {
                if (condition4.x < GameConfig.FightWidth - condition3.x) {
                    return;
                }
            }
        } else {
            if (_level0.P1_role.dir != -1) {
                if (condition3.x > GameConfig.FightWidth - condition4.x) {
                    return;
                }
            } else {
                if (condition4.x > GameConfig.FightWidth - condition3.x) {
                    return;
                }
            }
        }
        SplashScene.instance.x -= Vx / 2;
        Stage_effect.effectContainer.x += Vx / 2;
        for (let i = 0; i < BgScene.BG_images_moveabled.length - 1; ++i) {
            BgScene.BG_images_moveabled[i].x += Vx / 2 * (GameConfig.stageWidth / BgScene.BG_images_moveabled[i].width / 2);
        }
    }
}