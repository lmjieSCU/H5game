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
var HomeButton = (function (_super) {
    __extends(HomeButton, _super);
    function HomeButton(parent) {
        var _this = _super.call(this) || this;
        _this.chestBg = new egret.Bitmap();
        _this.isOpenChest = false;
        _this.time = 1000;
        _this._parent = parent;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter2, _this);
        _this.addEventListener(egret.TouchEvent.ENTER_FRAME, _this.update, _this);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    HomeButton.prototype.onEnter = function () {
        var _this = this;
        var reward = UI.addBtn(this, "Home_button_" + (Main.UItype == Main.UIT2 ? 'draw' : 'lottery') + "_png", 0, UI.WINSIZE_H / 2, true, function () {
            console.log("奖励");
            Home.instace.changeLayer(_this.parent, new LotteryLayer());
        });
        reward.x = reward.width / 2 + 20;
        var rewardRed = UI.addPic(this, "Home_red_png", reward.x + reward.width / 4, reward.y - reward.height / 3, true);
        var task = UI.addBtn(this, "Home_button_task_png", reward.x, UI.WINSIZE_H / 2 - reward.height - 10, true, function () {
            console.log("任务");
            Home.instace.changeLayer(_this._parent, new TaskLayer());
        });
        var taskRed = UI.addPic(this, "Home_red_png", task.x + task.width / 4, task.y - task.height / 3, true);
        taskRed.$setVisible(TaskData.isHasReward());
        var signIn = UI.addBtn(this, "Home_button_sign_png", reward.x, UI.WINSIZE_H / 2 + reward.height + 10, true, function () {
            console.log("签到");
        });
        var signInRed = UI.addPic(this, "Home_red_png", signIn.x + signIn.width / 4, signIn.y - signIn.height / 3, true);
        var chest = UI.addBtn(this, "Home_treasurebox_off_png", reward.x, UI.WINSIZE_H, true, function () {
            console.log("宝箱");
            if (!_this.isOpenChest) {
                chest.$setTexture(RES.getRes("Home_treasurebox_on_png"));
                _this.isOpenChest = true;
            }
            else {
                chest.$setTexture(RES.getRes("Home_treasurebox_off_png"));
                _this.isOpenChest = false;
            }
        });
        chest.y -= chest.height;
        this.chestBg = UI.addPic(this, "Home_treasurebox_shadow_png", chest.x, chest.y, true);
        this.setChildIndex(chest, this.numChildren - 1);
        var time = UI.addText(this, HomeButton.getTimeString(this.time), reward.x, chest.y + chest.height / 2 + 5, true, 10, 0xffffff);
        time.anchorOffsetX = time.width / 2;
        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            time.$setText(HomeButton.getTimeString(_this.time));
            _this.time--;
            if (_this.time <= 0)
                _this.timer.stop();
        }, this);
        // this.timer.start();
        var set = UI.addBtn(this, "Home_button_set_png", UI.WINSIZE_W, UI.WINSIZE_H, true, function () {
            console.log("设置");
        });
        set.x -= set.width;
        set.y -= set.height / 2;
        // let shop: egret.Bitmap = UI.addBtn(this, "dial_box_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
        //     console.log("商店");
        //     Home.instace.changeLayer(this.parent as Scene, new TaskLayer());
        // })
        // shop.x -= shop.width;
        // shop.y -= shop.height;
        // if(Main.UItype == Main.UIT2) {
        //     let recruit: egret.Bitmap = UI.addBtn(this, "dial_box_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
        //         console.log("招募");
        //         Home.instace.changeLayer(this._parent, new RecruitLayer())
        //     })
        //     recruit.x -= recruit.width;
        //     recruit.y -= recruit.height;
        // }
    };
    HomeButton.prototype.onEnter2 = function () {
        var _this = this;
        var set = UI.addBtn(this, "Home_button_set_png", UI.WINSIZE_W, UI.WINSIZE_H, true, function () { });
        set.x -= set.width / 2 + 10;
        set.y -= set.height / 2 + 10;
        // let setRed: egret.Bitmap = UI.addPic(this, "Home_button_reminder_png", set.x + set.width/3, set.y - set.height/3, true);
        // setRed.rotation = -30;
        var shop = UI.addBtn(this, "Home_button_shop_png", set.x, set.y, true, function () { return Home.instace.changeLayer(_this.parent, new ShopLayer()); });
        shop.x -= shop.width + 10;
        // let shopRed: egret.Bitmap = UI.addPic(this, "Home_button_reminder_png", shop.x + shop.width/3, shop.y - shop.height/3, true);
        // shopRed.rotation = -30;
        var singIn = UI.addBtn(this, "Home_button_Signin_png", shop.x, shop.y, true, function () { return Home.instace.changeLayer(_this.parent, new SignInLayer()); });
        singIn.x -= singIn.width + 10;
        this.signInRed = UI.addPic(this, "Home_button_reminder_png", singIn.x + singIn.width / 3, singIn.y - singIn.height / 3, true);
        this.signInRed.rotation = -30;
        var inherit = UI.addBtn(this, "Home_button_inherit_png", singIn.x, singIn.y, true, function () { return Home.instace.changeLayer(_this.parent, new InHeritLayer()); });
        inherit.x -= inherit.width + 10;
        // let inheritRed: egret.Bitmap = UI.addPic(this, "Home_button_reminder_png", inherit.x + inherit.width/3, inherit.y - inherit.height/3, true);
        // inheritRed.rotation = -30;
        var recruit = UI.addBtn(this, "Home_button_recruit_png", set.x, set.y, true, function () { return Home.instace.changeLayer(_this.parent, new RecruitLayer()); });
        recruit.y -= recruit.height + 10;
        this.recruitRed = UI.addPic(this, "Home_button_reminder_png", recruit.x + recruit.width / 3, recruit.y - recruit.height / 3, true);
        this.recruitRed.rotation = -30;
        var task = UI.addBtn(this, "Home_button_task_png", recruit.x, recruit.y, true, function () { return Home.instace.changeLayer(_this.parent, new TaskLayer()); });
        task.y -= task.height + 10;
        this.taskRed = UI.addPic(this, "Home_button_reminder_png", task.x + task.width / 3, task.y - task.height / 3, true);
        this.taskRed.rotation = -30;
        var draw = UI.addBtn(this, "Home_button_draw_png", task.x, task.y, true, function () { return Home.instace.changeLayer(_this.parent, new LotteryLayer()); });
        draw.y -= draw.height + 10;
        this.drawRed = UI.addPic(this, "Home_button_reminder_png", draw.x + draw.width / 3, draw.y - draw.height / 3, true);
        this.drawRed.rotation = -30;
        GameRender.I.Add(this, this.update);
    };
    HomeButton.prototype.update = function () {
        // this.chestBg.$setRotation((this.chestBg.rotation+5)%360);
        if (TaskData.isHasReward()) {
            this.taskRed.$setVisible(true);
        }
        else {
            this.taskRed.$setVisible(false);
        }
        if (SignInData.isSignIn()) {
            this.signInRed.$setVisible(true);
        }
        else {
            this.signInRed.$setVisible(false);
        }
        if (LotteryData.getTimes() < LotteryData.maxReward.max) {
            this.drawRed.$setVisible(true);
        }
        else {
            this.drawRed.$setVisible(false);
        }
        if (RecruitData.isHasRecruit()) {
            this.recruitRed.$setVisible(true);
        }
        else {
            this.recruitRed.$setVisible(false);
        }
    };
    HomeButton.prototype.onExit = function () {
        GameRender.I.Remove(this, this.update);
    };
    HomeButton.getTimeString = function (seconds) {
        var hour = Math.floor(seconds / 3600);
        var timeStirng = '';
        if (hour >= 10)
            timeStirng += hour;
        else if (hour == 0)
            timeStirng += "00";
        else if (hour < 10)
            timeStirng += "0" + hour;
        timeStirng += ":";
        var mins = Math.floor((seconds - hour * 3600) / 60);
        if (mins >= 10)
            timeStirng += mins;
        else if (mins == 0)
            timeStirng += "00";
        else if (mins < 10)
            timeStirng += "0" + mins;
        timeStirng += ":";
        var second = seconds - hour * 3600 - mins * 60;
        if (second >= 10)
            timeStirng += second;
        else if (second == 0)
            timeStirng += "00";
        else if (second < 10)
            timeStirng += "0" + second;
        return timeStirng;
    };
    return HomeButton;
}(egret.DisplayObjectContainer));
__reflect(HomeButton.prototype, "HomeButton", ["egret.DisplayObject"]);
//# sourceMappingURL=HomeButton.js.map