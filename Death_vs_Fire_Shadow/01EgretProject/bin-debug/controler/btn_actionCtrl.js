var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
//联机模式下p1.p2均为btn_actionCtrl,通过inputType来为本地客户端初始化btn_actionCtrl
var btn_actionCtrl = (function () {
    function btn_actionCtrl() {
        this.classicMode = false;
        this._justDown = 0;
        this._enabled = false;
        this.control_btn = [];
        this.fundown_btn = [];
        this.funup_btn = [];
        this._pressDownOrder = {
            "_up": false, "_down": false, "_left": false, "_right": false, "_attack": false, "_jump": false,
            "_skill": false, "_superSkill": false, "_Assister": false, "_wankai": false, "_dash": false
        };
        return;
    } // end function
    btn_actionCtrl.prototype._inputType = function () {
        return this.inputType;
    };
    btn_actionCtrl.prototype.setvalue = function (pack) {
        if (!pack) {
            return;
        }
        for (var key in pack) {
            this[key] = pack[key];
        }
    };
    btn_actionCtrl.prototype.addbtn_attack = function () {
        this.control_btn["attack"] = btn_actionCtrl.addPic(this._stage, "control_attack_png", true);
        this.control_btn["jump"] = btn_actionCtrl.addPic(this._stage, "control_jump_png", true);
        this.control_btn["skill"] = btn_actionCtrl.addPic(this._stage, "control_skill_png", true);
        this.control_btn["dash"] = btn_actionCtrl.addPic(this._stage, "control_dash_png", true);
        this.control_btn["superSkill"] = btn_actionCtrl.addPic(this._stage, "control_spskill_png", true);
        this.control_btn["Assist"] = btn_actionCtrl.addPic(this._stage, "control_special_png", true);
        this.control_btn["wankai"] = btn_actionCtrl.addPic(this._stage, "control_wankai_png", true);
        for (var index in this.control_btn) {
            this.control_btn[index].scaleX = 0.8;
            this.control_btn[index].scaleY = 0.8;
        }
        //
        this.control_btn["dash"].x = GameConfig.GAME_SIZE.x;
        this.control_btn["dash"].y = GameConfig.GAME_SIZE.y - this.control_btn["dash"].height * this.control_btn["dash"].scaleY + 30;
        //
        this.control_btn["jump"].x = this.control_btn["dash"].x - this.control_btn["dash"].width * this.control_btn["dash"].scaleX + 30;
        this.control_btn["jump"].y = GameConfig.GAME_SIZE.y;
        //
        this.control_btn["attack"].x = this.control_btn["jump"].x - this.control_btn["jump"].width * this.control_btn["jump"].scaleX + 30;
        this.control_btn["attack"].y = this.control_btn["dash"].y;
        //
        this.control_btn["skill"].x = this.control_btn["jump"].x;
        this.control_btn["skill"].y = this.control_btn["dash"].y - this.control_btn["dash"].height * this.control_btn["dash"].scaleY + 30;
        //
        this.control_btn["superSkill"].x = GameConfig.GAME_SIZE.x;
        this.control_btn["superSkill"].y = this.control_btn["skill"].y - this.control_btn["skill"].height * this.control_btn["skill"].scaleY;
        //
        this.control_btn["Assist"].x = this.control_btn["attack"].x;
        this.control_btn["Assist"].y = this.control_btn["superSkill"].y;
        //
        this.control_btn["wankai"].x = this.control_btn["wankai"].width * this.control_btn["wankai"].scaleX;
        this.control_btn["wankai"].y = this.control_btn["superSkill"].y;
    };
    btn_actionCtrl.prototype.addbtn_move = function () {
        this._arrow2 = UI.addPic(this._stage, "control_arrow2_png", 0, 0, true);
        this._arrow1 = UI.addPic(this._stage, "control_arrow1_png", 0, 0, true);
        //
        this._arrow1.scaleX = 0.8;
        this._arrow1.scaleY = 0.8;
        this._arrow2.scaleX = 0.8;
        this._arrow2.scaleY = 0.8;
        this._arrow2.alpha = 0;
        //
        var center_x = this._arrow2.width * this._arrow2.scaleX / 2;
        var center_y = GameConfig.GAME_SIZE.y - this._arrow2.height * this._arrow2.scaleY / 2;
        this._arrow2.x = center_x;
        this._arrow2.y = center_y;
        this._arrow1.x = center_x;
        this._arrow1.y = center_y;
        this._centerPoint = new egret.Point(center_x, center_y);
        this.control_btn["move"] = this._arrow1;
    };
    btn_actionCtrl.prototype.addListener = function () {
        for (var btn in this.control_btn) {
            switch (btn) {
                case "skill":
                    this.fundown_btn["skill"] = this.onkeydown.bind(this, "skill");
                    this.funup_btn["skill"] = this.onkeyup.bind(this, "skill");
                    break;
                case "superSkill":
                    this.fundown_btn["superSkill"] = this.onkeydown.bind(this, "superSkill");
                    this.funup_btn["superSkill"] = this.onkeyup.bind(this, "superSkill");
                    break;
                case "attack":
                    this.fundown_btn["attack"] = this.onkeydown.bind(this, "attack");
                    this.funup_btn["attack"] = this.onkeyup.bind(this, "attack");
                    break;
                case "dash":
                    this.fundown_btn["dash"] = this.onkeydown.bind(this, "dash");
                    this.funup_btn["dash"] = this.onkeyup.bind(this, "dash");
                    break;
                case "Assist":
                    this.fundown_btn["Assist"] = this.onkeydown.bind(this, "Assist");
                    this.funup_btn["Assist"] = this.onkeyup.bind(this, "Assist");
                    break;
                case "jump":
                    this.fundown_btn["jump"] = this.onkeydown.bind(this, "jump");
                    this.funup_btn["jump"] = this.onkeyup.bind(this, "jump");
                    break;
                case "wankai":
                    this.fundown_btn["wankai"] = this.onkeydown.bind(this, "wankai");
                    this.funup_btn["wankai"] = this.onkeyup.bind(this, "wankai");
                case "move":
                    this.fundown_btn["move"] = this.onkeydown.bind(this, "move");
                    this.funup_btn["move"] = this.onkeyup.bind(this, "move");
                    break;
            }
            this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fundown_btn[btn], this);
            this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_END, this.funup_btn[btn], this);
            this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.funup_btn[btn], this);
            if (btn == "move") {
                this.control_btn[btn].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.fundown_btn[btn], this);
            }
            this.control_btn[btn].$setTouchEnabled(true);
        }
    };
    btn_actionCtrl.prototype.removeListener = function () {
        for (var btn in this.control_btn) {
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fundown_btn[btn], this);
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_END, this.funup_btn[btn], this);
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.funup_btn[btn], this);
            if (btn == "move") {
                this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.fundown_btn[btn], this);
            }
        }
    };
    btn_actionCtrl.prototype.onkeydown = function (param1, e) {
        switch (param1) {
            case "Assist":
                this._pressDownOrder["_Assister"] = true;
                this.control_btn["Assist"].alpha = 0.5;
                break;
            case "skill":
                this._pressDownOrder["_skill"] = true;
                this.control_btn["skill"].alpha = 0.5;
                break;
            case "attack":
                this._pressDownOrder["_attack"] = true;
                this.control_btn["attack"].alpha = 0.5;
                break;
            case "jump":
                this._pressDownOrder["_jump"] = true;
                this.control_btn["jump"].alpha = 0.5;
                break;
            case "superSkill":
                this._pressDownOrder["_superSkill"] = true;
                this.control_btn["superSkill"].alpha = 0.5;
                break;
            case "dash":
                this._pressDownOrder["_dash"] = true;
                this.control_btn["dash"].alpha = 0.5;
                break;
            case "wankai":
                this._pressDownOrder["_wankai"] = true;
                this.control_btn["wankai"].alpha = 0.5;
                break;
            case "move":
                var angle = Math.atan2(e.stageY - this._centerPoint.y, e.stageX - this._centerPoint.x) * 180 / (Math.PI) + 45;
                if (angle >= -90 && angle < 0) {
                    this._pressDownOrder["_up"] = true;
                    this._pressDownOrder["_right"] = false;
                    this._pressDownOrder["_left"] = false;
                    this._pressDownOrder["_down"] = false;
                    this._arrow2.rotation = 0;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                }
                else if (angle >= 0 && angle < 90) {
                    this._pressDownOrder["_up"] = false;
                    this._pressDownOrder["_right"] = true;
                    this._pressDownOrder["_left"] = false;
                    this._pressDownOrder["_down"] = false;
                    this._arrow2.rotation = 90;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                }
                else if (angle >= 90 && angle < 180) {
                    this._pressDownOrder["_up"] = false;
                    this._pressDownOrder["_right"] = false;
                    this._pressDownOrder["_left"] = false;
                    this._pressDownOrder["_down"] = true;
                    this._arrow2.rotation = 180;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                }
                else {
                    this._pressDownOrder["_up"] = false;
                    this._pressDownOrder["_right"] = false;
                    this._pressDownOrder["_left"] = true;
                    this._pressDownOrder["_down"] = false;
                    this._arrow2.rotation = -90;
                    this._arrow2.alpha = 1;
                    this._arrow1.alpha = 0;
                }
                break;
        }
        if (GameMode.currentMode != GameMode.SINGLE_VS_PEOPLE) {
            this.setvalue(this._pressDownOrder);
        }
        else {
            var sendFramePara = { data: this._pressDownOrder };
            MatchLayer.room.sendFrame(sendFramePara);
        }
    };
    btn_actionCtrl.prototype.onkeyup = function (param1) {
        switch (param1) {
            case "Assist":
                this._pressDownOrder["_Assister"] = false;
                this.control_btn["Assist"].alpha = 1;
                break;
            case "skill":
                this._pressDownOrder["_skill"] = false;
                this.control_btn["skill"].alpha = 1;
                break;
            case "attack":
                this._pressDownOrder["_attack"] = false;
                this.control_btn["attack"].alpha = 1;
                break;
            case "jump":
                this._pressDownOrder["_jump"] = false;
                this.control_btn["jump"].alpha = 1;
                break;
            case "superSkill":
                this._pressDownOrder["_superSkill"] = false;
                this.control_btn["superSkill"].alpha = 1;
                break;
            case "dash":
                this._pressDownOrder["_dash"] = false;
                this.control_btn["dash"].alpha = 1;
                break;
            case "wankai":
                this._pressDownOrder["_wankai"] = false;
                this.control_btn["wankai"].alpha = 1;
                break;
            case "move":
                this._pressDownOrder["_up"] = false;
                this._pressDownOrder["_left"] = false;
                this._pressDownOrder["_down"] = false;
                this._pressDownOrder["_right"] = false;
                this._arrow2.alpha = 0;
                this._arrow1.alpha = 1;
                break;
        }
        if (GameMode.currentMode != GameMode.SINGLE_VS_PEOPLE) {
            this.setvalue(this._pressDownOrder);
        }
        else {
            var sendFramePara = { data: this._pressDownOrder };
            MatchLayer.room.sendFrame(sendFramePara);
        }
    };
    btn_actionCtrl.prototype.initlize = function () {
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && this.inputType != MGOBE.Player.id) {
            return;
        }
        this._stage = GameScene.instance._BtnState;
        this.addbtn_attack();
        this.addbtn_move();
        this.addListener();
        return;
    }; // end function
    btn_actionCtrl.prototype.render = function () {
        return;
    }; // end function
    btn_actionCtrl.prototype.renderAnimate = function () {
        return;
    }; // end function
    btn_actionCtrl.prototype.destory = function () {
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && this.inputType != MGOBE.Player.id) {
            return;
        }
        this.removeListener();
        this.fundown_btn = [];
        this.funup_btn = [];
        return;
    }; // end function
    btn_actionCtrl.prototype.setenabled = function (param1) {
        this._enabled = param1;
    };
    btn_actionCtrl.prototype.enabled = function () {
        return this._enabled;
    }; // end function
    btn_actionCtrl.prototype.moveLEFT = function () {
        return this._left && !this._right;
    }; // end function
    btn_actionCtrl.prototype.moveRIGHT = function () {
        return !this._left && this._right;
    }; // end function
    btn_actionCtrl.prototype.defense = function () {
        return this._down;
    }; // end function
    btn_actionCtrl.prototype.attack = function () {
        return this._attack && !(this._up || this._down || this._jump);
    }; // end function
    btn_actionCtrl.prototype.jump = function () {
        return this._jump && !this._attack;
    }; // end function
    btn_actionCtrl.prototype.jumpQuick = function () {
        if (this.classicMode) {
            return false;
        }
        return this._jump && !this._attack;
    }; // end function
    btn_actionCtrl.prototype.jumpDown = function () {
        return this._down && this._jump;
    }; // end function
    btn_actionCtrl.prototype.dash = function () {
        return this._dash && !this._down;
    }; // end function
    btn_actionCtrl.prototype.dashJump = function () {
        return this._dash && !this._down;
    }; // end function
    btn_actionCtrl.prototype.skill1 = function () {
        return this._down && this._attack;
    }; // end function
    btn_actionCtrl.prototype.skill2 = function () {
        return this._up && this._attack;
    }; // end function
    btn_actionCtrl.prototype.zhao1 = function () {
        return this._skill && !this._up && !this._down;
    }; // end function
    btn_actionCtrl.prototype.zhao2 = function () {
        return this._skill && this._down;
    }; // end function
    btn_actionCtrl.prototype.zhao3 = function () {
        return this._skill && this._up;
    }; // end function
    btn_actionCtrl.prototype.catch1 = function () {
        return this._attack && (this._left || this._right);
    }; // end function
    btn_actionCtrl.prototype.catch2 = function () {
        return this._skill && (this._left || this._right);
    }; // end function
    btn_actionCtrl.prototype.bisha = function () {
        return this._superSkill && !(this._up || this._down);
    }; // end function
    btn_actionCtrl.prototype.bishaUP = function () {
        return this._superSkill && this._up;
    }; // end function
    btn_actionCtrl.prototype.bishaSUPER = function () {
        return this._superSkill && this._down;
    }; // end function
    btn_actionCtrl.prototype.assist = function () {
        return this._Assister;
    }; // end function
    btn_actionCtrl.prototype.specailSkill = function () {
        return this._Assister;
    }; // end function
    btn_actionCtrl.prototype.attackAIR = function () {
        return this._attack;
    }; // end function
    btn_actionCtrl.prototype.skillAIR = function () {
        return this._skill;
    }; // end function
    btn_actionCtrl.prototype.bishaAIR = function () {
        return this._superSkill;
    }; // end function
    btn_actionCtrl.prototype.waiKai = function () {
        return this._wankai;
    }; // end function
    btn_actionCtrl.prototype.ghostStep = function () {
        return this._dash && this._down;
    }; // end function
    btn_actionCtrl.prototype.ghostJump = function () {
        return this._dash && this._up;
    }; // end function
    btn_actionCtrl.prototype.ghostJumpDown = function () {
        return this._dash && this._down;
    }; // end function
    btn_actionCtrl.addPic = function (node, path, anchorCenterFlag) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        node.addChild(image);
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width;
            image.anchorOffsetY = image.height;
        }
        return image;
    };
    return btn_actionCtrl;
}());
__reflect(btn_actionCtrl.prototype, "btn_actionCtrl", ["IFighterActionCtrl"]);
//# sourceMappingURL=btn_actionCtrl.js.map