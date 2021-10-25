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
//生成按键包
var Key_btn = (function (_super) {
    __extends(Key_btn, _super);
    function Key_btn(role) {
        var _this = _super.call(this) || this;
        _this._enabled = false;
        _this.control_btn = [];
        _this.fundown_btn = [];
        _this.funup_btn = [];
        _this.circle = [];
        _this._SendOrder = {
            "up": false, "down": false, "left": false, "right": false, "punch": false, "punch_l": false,
            "kick": false, "kick_l": false, "roll": false, "burst": false, "lastKey": "", "isKeyDown": false,
        };
        _this._DownOrder = {
            "up": false, "down": false, "left": false, "right": false, "punch": false, "punch_l": false,
            "kick": false, "kick_l": false, "roll": false, "burst": false
        };
        _this.role = role;
        return _this;
    } // end function
    Key_btn.prototype.SendPacket = function () {
        if (GameModel.currentMode != GameModel.VS_PERSON) {
            this.setPacket(this._SendOrder);
            return;
        }
        else {
            //联机模式
            var sendFramePara = { data: this._SendOrder };
            RoomManager.getInstance().room.sendFrame(sendFramePara);
            return;
        }
    };
    Key_btn.prototype.setPacket = function (_pressDownOrder) {
        for (var i in this._DownOrder) {
            this._DownOrder[i] = _pressDownOrder[i];
        }
        this.keycontrol.isKeyDown = _pressDownOrder["isKeyDown"];
        this.keycontrol.lastKey = _pressDownOrder["lastKey"];
        // if (this.keycontrol.isKeyDown == true) {
        //     console.log("按键按下", this.keycontrol.lastKey)
        // } else {
        //     console.log("按键弹起:||", this.keycontrol.lastKey, "||")
        // }
        this.keycontrol.onKeyDown();
    };
    /**图片素材 */
    Key_btn.prototype.addbtn_attack = function () {
        this.control_btn["punch"] = Key_btn.addPic(this, "control_punch_png", true);
        this.control_btn["punch_l"] = Key_btn.addPic(this, "control_punch_l_png", true);
        this.control_btn["kick"] = Key_btn.addPic(this, "control_kick_png", true);
        this.control_btn["kick_l"] = Key_btn.addPic(this, "control_kick_l_png", true);
        this.control_btn["roll"] = Key_btn.addPic(this, "control_roll_png", true);
        this.control_btn["burst"] = Key_btn.addPic(this, "control_burst_png", true);
        for (var index in this.control_btn) {
            this.control_btn[index].scaleX = 0.8;
            this.control_btn[index].scaleY = 0.8;
        }
        //
        this.control_btn["kick"].x = GameConfig.FightWidth;
        this.control_btn["kick"].y = UI.WINSIZE_H - this.control_btn["kick"].height * this.control_btn["kick"].scaleY + 30;
        //
        this.control_btn["punch"].x = this.control_btn["kick"].x - this.control_btn["kick"].width * this.control_btn["kick"].scaleX + 30;
        this.control_btn["punch"].y = UI.WINSIZE_H;
        //
        this.control_btn["kick_l"].x = this.control_btn["punch"].x - this.control_btn["punch"].width * this.control_btn["punch"].scaleX + 30;
        this.control_btn["kick_l"].y = this.control_btn["kick"].y;
        //
        this.control_btn["punch_l"].x = this.control_btn["punch"].x;
        this.control_btn["punch_l"].y = this.control_btn["kick_l"].y - this.control_btn["kick_l"].height * this.control_btn["kick_l"].scaleY + 30;
        //
        this.control_btn["burst"].x = GameConfig.FightWidth;
        this.control_btn["burst"].y = this.control_btn["punch_l"].y - this.control_btn["punch_l"].height * this.control_btn["punch_l"].scaleY;
        // //
        // this.control_btn["roll"].x = this.control_btn["punch"].x;
        // this.control_btn["roll"].y = this.control_btn["burst"].y;
    };
    /**图片素材 */
    //攻击操作=>2套方案
    Key_btn.prototype.addbtn_attack2 = function () {
        this.control_btn["punch"] = Key_btn.addPic(this, "A_png", true);
        this.control_btn["punch_l"] = Key_btn.addPic(this, "C_png", true);
        this.control_btn["kick"] = Key_btn.addPic(this, "B_png", true);
        this.control_btn["kick_l"] = Key_btn.addPic(this, "D_png", true);
        this.control_btn["roll"] = Key_btn.addPic(this, "control_roll_png", true);
        this.control_btn["burst"] = Key_btn.addPic(this, "control_burst_png", true);
        for (var index in this.control_btn) {
            this.control_btn[index].scaleX = 0.7;
            this.control_btn[index].scaleY = 0.7;
        }
        //
        this.control_btn["kick"].x = GameConfig.FightWidth - 20;
        this.control_btn["kick"].y = UI.WINSIZE_H - this.control_btn["kick"].height * this.control_btn["kick"].scaleY;
        //
        this.control_btn["punch"].x = this.control_btn["kick"].x - this.control_btn["kick"].width * this.control_btn["kick"].scaleX + 20;
        this.control_btn["punch"].y = UI.WINSIZE_H - 20;
        //
        this.control_btn["kick_l"].x = this.control_btn["punch"].x - this.control_btn["punch"].width * this.control_btn["punch"].scaleX + 20;
        this.control_btn["kick_l"].y = this.control_btn["kick"].y;
        //
        this.control_btn["punch_l"].x = this.control_btn["punch"].x;
        this.control_btn["punch_l"].y = this.control_btn["kick_l"].y - this.control_btn["kick_l"].height * this.control_btn["kick_l"].scaleY + 20;
        //
        this.control_btn["burst"].x = GameConfig.FightWidth - 20;
        this.control_btn["burst"].y = this.control_btn["punch_l"].y - this.control_btn["punch_l"].height * this.control_btn["punch_l"].scaleY;
        this.control_btn["roll"].x = this.control_btn["kick_l"].x;
        this.control_btn["roll"].y = this.control_btn["burst"].y;
    };
    //攻击操作=>3套方案
    Key_btn.prototype.addbtn_attack3 = function () {
        this.control_btn["punch"] = Key_btn.addPic(this, "Fight_Button_quan_png", true);
        this.control_btn["punch_l"] = Key_btn.addPic(this, "Fight_Button_di_png", true);
        this.control_btn["kick"] = Key_btn.addPic(this, "Fight_Button_tui_png", true);
        this.control_btn["kick_l"] = Key_btn.addPic(this, "Fight_Button_tian_png", true);
        //this.control_btn["roll"] = Key_btn.addPic(this, "control_roll_png", true);
        this.control_btn["burst"] = Key_btn.addPic(this, "Fight_Button_jing_png", true);
        var img = Key_btn.addPic(this, "quanbai_png", true);
        // for (let index in this.control_btn) {
        //     this.control_btn[index].scaleX = 0.7;
        //     this.control_btn[index].scaleY = 0.7;
        // }
        // this.control_btn["kick"].scaleX = 0.8;
        // this.control_btn["kick"].scaleY = 0.8;
        // this.control_btn["punch"].scaleX = 0.8;
        // this.control_btn["punch"].scaleY = 0.8;
        //
        this.control_btn["kick"].x = GameConfig.FightWidth - 25;
        this.control_btn["kick"].y = UI.WINSIZE_H - 25;
        //
        this.control_btn["punch"].x = this.control_btn["kick"].x - this.control_btn["kick"].width * this.control_btn["kick"].scaleX - 20;
        this.control_btn["punch"].y = UI.WINSIZE_H - 25;
        //
        this.control_btn["kick_l"].x = this.control_btn["punch"].x + 35;
        this.control_btn["kick_l"].y = this.control_btn["punch"].y - this.control_btn["punch"].height * this.control_btn["punch"].scaleY;
        //
        this.control_btn["punch_l"].x = this.control_btn["kick"].x;
        this.control_btn["punch_l"].y = this.control_btn["kick_l"].y - this.control_btn["kick_l"].height * this.control_btn["kick_l"].scaleY + 10;
        //
        this.control_btn["burst"].x = this.control_btn["punch"].x - 20;
        this.control_btn["burst"].y = this.control_btn["punch_l"].y;
        // this.control_btn["roll"].x = this.control_btn["kick_l"].x;
        // this.control_btn["roll"].y = this.control_btn["burst"].y;
        img.x = this.control_btn["punch_l"].x;
        img.y = this.control_btn["punch_l"].y;
        img.scaleX = this.control_btn["punch_l"].width / img.width;
        img.scaleY = this.control_btn["punch_l"].width / img.width;
        FightMainRender.getInstance().Add(this, this.show_btn);
    };
    Key_btn.prototype.show_btn = function () {
        this.control_btn["punch_l"].visible = false;
        this.control_btn["kick_l"].visible = false;
        this.control_btn["burst"].visible = false;
        if (this.role.superPoint > 0) {
            this.control_btn["punch_l"].visible = true;
            this.control_btn["kick_l"].visible = true;
            if (this.role.superPoint >= 3) {
                this.control_btn["burst"].visible = true;
            }
        }
        if (this.role.inBurst == true) {
            this.control_btn["punch_l"].visible = true;
            this.control_btn["kick_l"].visible = true;
            this.control_btn["burst"].visible = true;
        }
    };
    //攻击操作=>4套方案
    Key_btn.prototype.addbtn_attack4 = function () {
        this.control_btn["punch"] = Key_btn.addPic(this, "Fight_Button_quan_png", true);
        this.control_btn["punch_l"] = Key_btn.addPic(this, "Fight_Button_di_png", true);
        //this.control_btn["kick"] = Key_btn.addPic(this, "Fight_Button_tui_png", true);
        this.control_btn["kick_l"] = Key_btn.addPic(this, "Fight_Button_tian_png", true);
        this.control_btn["burst"] = Key_btn.addPic(this, "Fight_Button_jing_png", true);
        var roll2 = Key_btn.addPic(this, "Fight_Button_shan2_png", true);
        this.control_btn["roll"] = Key_btn.addPic(this, "Fight_Button_shan1_png", true);
        this.circle["punch_l_circle"] = Key_btn.addPic(this, "Fight_halo01_png", true);
        this.circle["kick_l_circle"] = Key_btn.addPic(this, "Fight_halo01_png", true);
        this.circle["burst_circle"] = Key_btn.addPic(this, "Fight_halo02_png", true);
        //
        // this.control_btn["kick"].x = GameConfig.FightWidth - 25;
        // this.control_btn["kick"].y = UI.WINSIZE_H - 25;
        //
        this.control_btn["punch"].x = GameConfig.FightWidth - 35 - this.control_btn["punch"].width / 2 * this.control_btn["punch"].scaleX;
        this.control_btn["punch"].y = UI.WINSIZE_H - 55 - this.control_btn["punch"].height / 2 * this.control_btn["punch"].scaleY;
        this.control_btn["punch"].scaleX = 1.5;
        this.control_btn["punch"].scaleY = 1.5;
        //
        this.control_btn["punch_l"].x = this.control_btn["punch"].x - this.control_btn["punch"].width * this.control_btn["punch"].scaleX - 25;
        this.control_btn["punch_l"].y = this.control_btn["punch"].y + 5;
        //
        this.control_btn["kick_l"].x = this.control_btn["punch_l"].x + 25;
        this.control_btn["kick_l"].y = this.control_btn["punch"].y - this.control_btn["punch_l"].height * this.control_btn["punch_l"].scaleY - 20;
        //
        this.control_btn["burst"].x = this.control_btn["punch"].x - 20;
        this.control_btn["burst"].y = this.control_btn["kick_l"].y - this.control_btn["burst"].height * this.control_btn["burst"].scaleY;
        this.control_btn["roll"].x = this.control_btn["punch_l"].x - 120;
        this.control_btn["roll"].y = this.control_btn["punch_l"].y;
        roll2.x = this.control_btn["roll"].x;
        roll2.y = this.control_btn["roll"].y;
        this.circle["punch_l_circle"].x = this.control_btn["punch_l"].x;
        this.circle["punch_l_circle"].y = this.control_btn["punch_l"].y;
        this.circle["kick_l_circle"].x = this.control_btn["kick_l"].x + this.control_btn["kick_l"].width * this.control_btn["kick_l"].scaleX / 66;
        this.circle["kick_l_circle"].y = this.control_btn["kick_l"].y + this.control_btn["kick_l"].height * this.control_btn["kick_l"].scaleY / 66;
        this.circle["burst_circle"].x = this.control_btn["burst"].x;
        this.circle["burst_circle"].y = this.control_btn["burst"].y;
        for (var i in this.circle) {
            this.circle[i].scaleX = 0.9;
            this.circle[i].scaleY = 0.9;
            egret.Tween.get(this.circle[i], { loop: true }).to({ rotation: 360 }, 700);
        }
        FightMainRender.getInstance().Add(this, this.show_circle);
    };
    Key_btn.prototype.show_circle = function () {
        for (var i in this.circle) {
            this.circle[i].visible = false;
        }
        if (this.role.superPoint > 0) {
            this.circle["punch_l_circle"].visible = true;
            this.circle["kick_l_circle"].visible = true;
            if (this.role.superPoint >= 3) {
                this.circle["burst_circle"].visible = true;
            }
        }
        if (this.role.inBurst == true) {
            for (var i in this.circle) {
                this.circle[i].visible = true;
            }
        }
    };
    /**图片素材 */
    Key_btn.prototype.addbtn_move = function () {
        this._arrow2 = UI.addPic(this, "control_arrow2_png", 0, 0, true);
        this._arrow1 = UI.addPic(this, "control_arrow1_png", 0, 0, true);
        //
        this._arrow1.scaleX = 0.8;
        this._arrow1.scaleY = 0.8;
        this._arrow2.scaleX = 0.8;
        this._arrow2.scaleY = 0.8;
        this._arrow2.alpha = 0;
        //
        var center_x = this._arrow2.width * this._arrow2.scaleX / 2;
        var center_y = UI.WINSIZE_H - this._arrow2.height * this._arrow2.scaleY / 2;
        this._arrow2.x = center_x;
        this._arrow2.y = center_y;
        this._arrow1.x = center_x;
        this._arrow1.y = center_y;
        this._centerPoint = new egret.Point(center_x, center_y);
        this.control_btn["move"] = this._arrow1;
    };
    /**图片素材
     * 摇杆操作=>2套方案
     * touch_area负责移动控制
     */
    Key_btn.prototype.addbtn_move2 = function () {
        //触摸区域
        var touch_area = new egret.Sprite();
        touch_area.graphics.beginFill(0x00ff00);
        touch_area.graphics.drawRect(0, 0, GameConfig.FightWidth / 2, UI.WINSIZE_H);
        touch_area.graphics.endFill();
        touch_area.alpha = 0;
        this.addChild(touch_area);
        this.touch_area = touch_area;
        //中心点坐标
        this.initial_x = 160;
        this.initial_y = touch_area.height - 145;
        this.border = UI.addPic(this, "thumbstick-background_png", this.initial_x, this.initial_y, true);
        this.border.scaleX = 0.8;
        this.border.scaleY = 0.8;
        this.addChild(this.border);
        //发光体
        var luminescence = UI.addPic(this, "Fight_remotebutton_shadow_png", this.initial_x, this.initial_y, true);
        luminescence.scaleX = 0.9;
        luminescence.scaleY = 0.9;
        this.luminescence = luminescence;
        this.luminescence.visible = false;
        //摇杆
        var spr = UI.addPic(this, "thumbstick-pad_png", this.initial_x, this.initial_y, true);
        spr.scaleX = 0.8;
        spr.scaleY = 0.8;
        this.addChild(spr);
        touch_area.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TOUCH_BEGIN, this);
        touch_area.addEventListener(egret.TouchEvent.TOUCH_END, this.TOUCH_END, this);
        //touch_area.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.funup_btn[btn], this);
        touch_area.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.TOUCH_MOVE, this);
        touch_area.$setTouchEnabled(true);
        this.circular = spr;
    };
    /**左区移动触发 */
    Key_btn.prototype.TOUCH_BEGIN = function (e) {
        var angle = Math.atan2(e.stageY - this.initial_y, e.stageX - this.initial_x);
        var circular_max_x = this.initial_x + Math.cos(angle) * (55);
        var circular_max_y = this.initial_y + Math.sin(angle) * (55);
        var condition_x = false;
        var condition_y = false;
        if (e.stageY >= this.initial_y) {
            if (e.stageY <= circular_max_y) {
                condition_y = true;
            }
        }
        else {
            if (e.stageY > circular_max_y) {
                condition_y = true;
            }
        }
        if (e.stageX >= this.initial_x) {
            if (e.stageX <= circular_max_x) {
                condition_x = true;
            }
        }
        else {
            if (e.stageX > circular_max_x) {
                condition_x = true;
            }
        }
        if (condition_x && condition_y) {
            this.circular.x = e.stageX;
            this.circular.y = e.stageY;
            this.luminescence.x = e.stageX;
            this.luminescence.y = e.stageY;
        }
        else {
            this.circular.x = this.initial_x + Math.cos(angle) * (55);
            this.circular.y = this.initial_y + Math.sin(angle) * (55);
            this.luminescence.x = this.circular.x;
            this.luminescence.y = this.circular.y;
        }
        this.rotate_quan(angle / (Math.PI / 180));
        this.judgmentMobile(angle / (Math.PI / 180), e);
    };
    /**左区移动解除
     * onkeyup
     */
    Key_btn.prototype.TOUCH_END = function (e) {
        this.circular.x = this.initial_x;
        this.circular.y = this.initial_y;
        this.luminescence.visible = false;
        this._SendOrder["up"] = false;
        this._SendOrder["right"] = false;
        this._SendOrder["left"] = false;
        this._SendOrder["down"] = false;
        this._SendOrder.isKeyDown = false;
        this.isExitDownCode();
        this.SendPacket();
        return;
    };
    /**左区移动触发 */
    Key_btn.prototype.TOUCH_MOVE = function (e) {
        var angle = Math.atan2(e.stageY - this.initial_y, e.stageX - this.initial_x);
        var circular_max_x = this.initial_x + Math.cos(angle) * (55);
        var circular_max_y = this.initial_y + Math.sin(angle) * (55);
        var condition_x = false;
        var condition_y = false;
        if (e.stageY >= this.initial_y) {
            if (e.stageY <= circular_max_y) {
                condition_y = true;
            }
        }
        else {
            if (e.stageY > circular_max_y) {
                condition_y = true;
            }
        }
        if (e.stageX >= this.initial_x) {
            if (e.stageX <= circular_max_x) {
                condition_x = true;
            }
        }
        else {
            if (e.stageX > circular_max_x) {
                condition_x = true;
            }
        }
        if (condition_x && condition_y) {
            this.circular.x = e.stageX;
            this.circular.y = e.stageY;
            this.luminescence.x = e.stageX;
            this.luminescence.y = e.stageY;
        }
        else {
            this.circular.x = this.initial_x + Math.cos(angle) * (55);
            this.circular.y = this.initial_y + Math.sin(angle) * (55);
            this.luminescence.x = this.circular.x;
            this.luminescence.y = this.circular.y;
        }
        this.rotate_quan(angle / (Math.PI / 180));
        this.judgmentMobile(angle / (Math.PI / 180), e);
        if (e.stageY < 100 || e.stageY > UI.WINSIZE_H - 1 || e.stageX > GameConfig.FightWidth / 2 - 50 || e.stageX < 1) {
            this.TOUCH_END(e);
        }
    };
    Key_btn.prototype.rotate_quan = function (angle, num) {
        if (num === void 0) { num = false; }
        this.luminescence.visible = true;
        if (angle > 0) {
        }
    };
    /**onkeydown */
    Key_btn.prototype.judgmentMobile = function (angle, e) {
        if (angle < 0) {
            angle = 360 + angle;
        }
        switch (true) {
            case angle > 327.5 || angle <= 32.5:
                if (e.stageX > this.initial_x + 15 || e.stageX < this.initial_x - 15) {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = true;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = false;
                    this._SendOrder.lastKey = "right";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            case angle > 32.5 && angle <= 67.5:
                if (e.stageY > this.initial_y + 40 || e.stageY < this.initial_y - 40) {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = true;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = true;
                    this._SendOrder.lastKey = "down";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            case angle > 67.5 && angle <= 112.5:
                if (e.stageY > this.initial_y + 40 || e.stageY < this.initial_y - 40) {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = true;
                    this._SendOrder.lastKey = "down";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            case angle > 112.5 && angle <= 147.5:
                if (e.stageY > this.initial_y + 40 || e.stageY < this.initial_y - 40) {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = true;
                    this._SendOrder["down"] = true;
                    this._SendOrder.lastKey = "down";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            case angle > 147.5 && angle <= 212.5:
                if (e.stageX > this.initial_x + 15 || e.stageX < this.initial_x - 15) {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = true;
                    this._SendOrder["down"] = false;
                    this._SendOrder.lastKey = "left";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            case angle > 212.5 && angle <= 247.5:
                if (e.stageY > this.initial_y + 40 || e.stageY < this.initial_y - 40) {
                    this._SendOrder["up"] = true;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = true;
                    this._SendOrder["down"] = false;
                    this._SendOrder.lastKey = "up";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            case angle > 247.5 && angle <= 292.5:
                if (e.stageY > this.initial_y + 40 || e.stageY < this.initial_y - 40) {
                    this._SendOrder["up"] = true;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = false;
                    this._SendOrder.lastKey = "up";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            case angle > 292.5 && angle <= 327.5:
                if (e.stageY > this.initial_y + 40 || e.stageY < this.initial_y - 40) {
                    this._SendOrder["up"] = true;
                    this._SendOrder["right"] = true;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = false;
                    this._SendOrder.lastKey = "up";
                    this._SendOrder.isKeyDown = true;
                }
                else {
                    this.isExitDownCode();
                }
                break;
            default:
                console.log("角度不符合标准");
                break;
        }
        this.SendPacket();
    };
    /**添加监听事件 */
    Key_btn.prototype.addbtnListener = function () {
        for (var btn in this.control_btn) {
            switch (btn) {
                case "kick":
                    this.fundown_btn["kick"] = this.onkeydown.bind(this, "kick");
                    this.funup_btn["kick"] = this.onkeyup.bind(this, "kick");
                    break;
                case "kick_l":
                    this.fundown_btn["kick_l"] = this.onkeydown.bind(this, "kick_l");
                    this.funup_btn["kick_l"] = this.onkeyup.bind(this, "kick_l");
                    break;
                case "punch":
                    this.fundown_btn["punch"] = this.onkeydown.bind(this, "punch");
                    this.funup_btn["punch"] = this.onkeyup.bind(this, "punch");
                    break;
                case "punch_l":
                    this.fundown_btn["punch_l"] = this.onkeydown.bind(this, "punch_l");
                    this.funup_btn["punch_l"] = this.onkeyup.bind(this, "punch_l");
                    break;
                case "roll":
                    this.fundown_btn["roll"] = this.onkeydown.bind(this, "roll");
                    this.funup_btn["roll"] = this.onkeyup.bind(this, "roll");
                    break;
                case "burst":
                    this.fundown_btn["burst"] = this.onkeydown.bind(this, "burst");
                    this.funup_btn["burst"] = this.onkeyup.bind(this, "burst");
                case "move":
                    this.fundown_btn["move"] = this.onkeydown.bind(this, "move");
                    this.funup_btn["move"] = this.onkeyup.bind(this, "move");
                    break;
            }
            this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fundown_btn[btn], this);
            this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_END, this.funup_btn[btn], this);
            this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.funup_btn[btn], this);
            if (btn == "move") {
                this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.fundown_btn[btn], this); //移动功能
            }
            this.control_btn[btn].$setTouchEnabled(true);
        }
    };
    Key_btn.prototype.removebtnListener = function () {
        for (var btn in this.control_btn) {
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fundown_btn[btn], this);
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.fundown_btn[btn], this);
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_END, this.funup_btn[btn], this);
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.funup_btn[btn], this);
        }
        this.touch_area.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.TOUCH_BEGIN, this);
        this.touch_area.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.TOUCH_MOVE, this);
        this.touch_area.removeEventListener(egret.TouchEvent.TOUCH_END, this.TOUCH_END, this);
    };
    Key_btn.prototype.onkeydown = function (param1, e) {
        this._SendOrder.isKeyDown = true;
        switch (param1) {
            case "roll":
                this._SendOrder["roll"] = true;
                this.control_btn["roll"].alpha = 0;
                this._SendOrder.lastKey = "roll";
                break;
            case "kick":
                this._SendOrder["kick"] = true;
                this.control_btn["kick"].alpha = 0.5;
                this._SendOrder.lastKey = "kick";
                break;
            case "punch":
                this._SendOrder["punch"] = true;
                this.control_btn["punch"].alpha = 0.5;
                this._SendOrder.lastKey = "punch";
                break;
            case "punch_l":
                this._SendOrder["punch_l"] = true;
                this.control_btn["punch_l"].alpha = 0.5;
                this._SendOrder.lastKey = "punch_l";
                break;
            case "kick_l":
                this._SendOrder["kick_l"] = true;
                this.control_btn["kick_l"].alpha = 0.5;
                this._SendOrder.lastKey = "kick_l";
                break;
            case "burst":
                this._SendOrder["burst"] = true;
                this.control_btn["burst"].alpha = 0.5;
                this._SendOrder.lastKey = "burst";
                break;
            case "move":
                var angle = Math.atan2(e.stageY - this._centerPoint.y, e.stageX - this._centerPoint.x) * 180 / (Math.PI) + 45;
                if (angle >= -90 && angle < 0) {
                    this._SendOrder["up"] = true;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = false;
                    this._arrow2.rotation = 0;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                    this._SendOrder.lastKey = "up";
                }
                else if (angle >= 0 && angle < 90) {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = true;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = false;
                    this._arrow2.rotation = 90;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                    this._SendOrder.lastKey = "right";
                }
                else if (angle >= 90 && angle < 180) {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = false;
                    this._SendOrder["down"] = true;
                    this._arrow2.rotation = 180;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                    this._SendOrder.lastKey = "down";
                }
                else {
                    this._SendOrder["up"] = false;
                    this._SendOrder["right"] = false;
                    this._SendOrder["left"] = true;
                    this._SendOrder["down"] = false;
                    this._arrow2.rotation = -90;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                    this._SendOrder.lastKey = "left";
                }
                break;
        }
        this.SendPacket();
        return;
    };
    Key_btn.prototype.onkeyup = function (param1) {
        this._SendOrder.isKeyDown = false;
        switch (param1) {
            case "roll":
                this._SendOrder["roll"] = false;
                this.control_btn["roll"].alpha = 1;
                this.isExitDownCode();
                break;
            case "kick":
                this._SendOrder["kick"] = false;
                this.control_btn["kick"].alpha = 1;
                this.isExitDownCode();
                break;
            case "punch":
                this._SendOrder["punch"] = false;
                this.control_btn["punch"].alpha = 1;
                this.isExitDownCode();
                break;
            case "punch_l":
                this._SendOrder["punch_l"] = false;
                this.control_btn["punch_l"].alpha = 1;
                this.isExitDownCode();
                break;
            case "kick_l":
                this._SendOrder["kick_l"] = false;
                this.control_btn["kick_l"].alpha = 1;
                this.isExitDownCode();
                break;
            case "burst":
                this._SendOrder["burst"] = false;
                this.control_btn["burst"].alpha = 1;
                this.isExitDownCode();
                break;
            case "move":
                this._SendOrder["up"] = false;
                this._SendOrder["left"] = false;
                this._SendOrder["down"] = false;
                this._SendOrder["right"] = false;
                this._arrow2.alpha = 0;
                this._arrow1.alpha = 1;
                this.isExitDownCode();
                break;
        }
        this.SendPacket();
        return;
    };
    Key_btn.prototype.initlize = function (keycontrol) {
        this.keycontrol = keycontrol;
        this.addbtn_attack4();
        //this.addbtn_move();
        this.addbtn_move2();
        this.addbtnListener();
        return;
    }; // end function
    Key_btn.prototype.destory = function () {
        this.removebtnListener();
        this.fundown_btn = [];
        this.funup_btn = [];
        return;
    }; // end function
    Key_btn.prototype.setenabled = function (param1) {
        this._enabled = param1;
    };
    Key_btn.prototype.enabled = function () {
        return this._enabled;
    }; // end function
    Key_btn.prototype.isDown = function (key) {
        return this._DownOrder[key];
        // return this._SendOrder[key];
    };
    Key_btn.prototype.isExitDownCode = function () {
        for (var key in this._SendOrder) {
            if (this._SendOrder[key] == true && key != "isKeyDown") {
                return;
            }
        }
        this._SendOrder.lastKey = "";
        return;
    };
    Key_btn.prototype.initial = function () {
        for (var i in this._SendOrder) {
            this._SendOrder[i] = false;
        }
        this.control_btn.map(function (i) {
            i.alpha = 1;
        });
        this.TOUCH_END();
    };
    Key_btn.addPic = function (node, path, anchorCenterFlag) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        node.addChild(image);
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        return image;
    };
    return Key_btn;
}(egret.DisplayObjectContainer));
__reflect(Key_btn.prototype, "Key_btn");
//# sourceMappingURL=Key_btn.js.map