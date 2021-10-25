//联机模式下p1.p2均为btn_actionCtrl,通过inputType来为本地客户端初始化btn_actionCtrl
class btn_actionCtrl implements IFighterActionCtrl {
    public inputType: string;
    public classicMode: boolean = false;
    private _justDown: number = 0;
    private _up: boolean;
    private _down: boolean;
    private _left: boolean;
    private _right: boolean;
    private _jump: boolean;
    private _attack: boolean;
    private _dash: boolean;
    private _skill: boolean;
    private _superSkill: boolean;
    private _Assister: boolean;
    private _enabled: boolean = false;
    private _wankai: boolean;
    private _stage: any;
    public control_btn: Array<egret.Bitmap> = [];
    private fundown_btn: Array<any> = [];
    private funup_btn: Array<any> = [];
    private _arrow1: egret.Bitmap;
    private _arrow2: egret.Bitmap;
    private _centerPoint: egret.Point;
    private _pressDownOrder = {
        "_up": false, "_down": false, "_left": false, "_right": false, "_attack": false, "_jump": false,
        "_skill": false, "_superSkill": false, "_Assister": false, "_wankai": false, "_dash": false
    };

    constructor() {
        return;
    }// end function

    public _inputType():string{
        return this.inputType;
    }


    public setvalue(pack: any) {
        if (!pack) {
            return;
        }
        for (let key in pack) {
            this[key] = pack[key];
        }
    }


    private addbtn_attack(): void {
        this.control_btn["attack"] = btn_actionCtrl.addPic(this._stage, "control_attack_png", true);
        this.control_btn["jump"] = btn_actionCtrl.addPic(this._stage, "control_jump_png", true);
        this.control_btn["skill"] = btn_actionCtrl.addPic(this._stage, "control_skill_png", true);
        this.control_btn["dash"] = btn_actionCtrl.addPic(this._stage, "control_dash_png", true);
        this.control_btn["superSkill"] = btn_actionCtrl.addPic(this._stage, "control_spskill_png", true);
        this.control_btn["Assist"] = btn_actionCtrl.addPic(this._stage, "control_special_png", true);
        this.control_btn["wankai"] = btn_actionCtrl.addPic(this._stage, "control_wankai_png", true);
        for (let index in this.control_btn) {
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
    }

    private addbtn_move(): void {
        this._arrow2 = UI.addPic(this._stage, "control_arrow2_png", 0, 0, true);
        this._arrow1 = UI.addPic(this._stage, "control_arrow1_png", 0, 0, true);
        //
        this._arrow1.scaleX = 0.8;
        this._arrow1.scaleY = 0.8;
        this._arrow2.scaleX = 0.8;
        this._arrow2.scaleY = 0.8;
        this._arrow2.alpha = 0;
        //
        let center_x = this._arrow2.width * this._arrow2.scaleX / 2;
        let center_y = GameConfig.GAME_SIZE.y - this._arrow2.height * this._arrow2.scaleY / 2;
        this._arrow2.x = center_x;
        this._arrow2.y = center_y;
        this._arrow1.x = center_x;
        this._arrow1.y = center_y;
        this._centerPoint = new egret.Point(center_x, center_y)
        this.control_btn["move"] = this._arrow1;
    }


    private addListener(): void {
        for (let btn in this.control_btn) {
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
    }

    private removeListener(): void {
        for (let btn in this.control_btn) {
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.fundown_btn[btn], this);
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_END, this.funup_btn[btn], this);
            this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.funup_btn[btn], this);
            if (btn == "move") {
                this.control_btn[btn].removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.fundown_btn[btn], this);
            }
        }
    }

    private onkeydown(param1: string, e: egret.TouchEvent): void {
        switch (param1) {
            case "Assist": this._pressDownOrder["_Assister"] = true; this.control_btn["Assist"].alpha = 0.5; break;
            case "skill": this._pressDownOrder["_skill"] = true; this.control_btn["skill"].alpha = 0.5; break;
            case "attack": this._pressDownOrder["_attack"] = true; this.control_btn["attack"].alpha = 0.5; break;
            case "jump": this._pressDownOrder["_jump"] = true; this.control_btn["jump"].alpha = 0.5; break;
            case "superSkill": this._pressDownOrder["_superSkill"] = true; this.control_btn["superSkill"].alpha = 0.5; break;
            case "dash": this._pressDownOrder["_dash"] = true; this.control_btn["dash"].alpha = 0.5; break;
            case "wankai": this._pressDownOrder["_wankai"] = true; this.control_btn["wankai"].alpha = 0.5; break;
            case "move":
                let angle = Math.atan2(e.stageY - this._centerPoint.y, e.stageX - this._centerPoint.x) * 180 / (Math.PI) + 45;
                if (angle >= -90 && angle < 0) {
                    this._pressDownOrder["_up"] = true; this._pressDownOrder["_right"] = false;
                    this._pressDownOrder["_left"] = false; this._pressDownOrder["_down"] = false;
                    this._arrow2.rotation = 0; this._arrow2.alpha = 1; this._arrow1.alpha = 0;
                } else if (angle >= 0 && angle < 90) {
                    this._pressDownOrder["_up"] = false; this._pressDownOrder["_right"] = true;
                    this._pressDownOrder["_left"] = false; this._pressDownOrder["_down"] = false;
                    this._arrow2.rotation = 90; this._arrow2.alpha = 1; this._arrow1.alpha = 0;
                } else if (angle >= 90 && angle < 180) {
                    this._pressDownOrder["_up"] = false; this._pressDownOrder["_right"] = false;
                    this._pressDownOrder["_left"] = false; this._pressDownOrder["_down"] = true;

                    this._arrow2.rotation = 180; this._arrow2.alpha = 1; this._arrow1.alpha = 0;
                } else {
                    this._pressDownOrder["_up"] = false; this._pressDownOrder["_right"] = false;
                    this._pressDownOrder["_left"] = true; this._pressDownOrder["_down"] = false;
                    this._arrow2.rotation = -90; this._arrow2.alpha = 1; this._arrow1.alpha = 0;
                }
                break;
        }
        if (GameMode.currentMode != GameMode.SINGLE_VS_PEOPLE) {
            this.setvalue(this._pressDownOrder);
        } else {
            const sendFramePara = { data: this._pressDownOrder };
            MatchLayer.room.sendFrame(sendFramePara);
        }
    }

    private onkeyup(param1: string): void {
        switch (param1) {
            case "Assist": this._pressDownOrder["_Assister"] = false; this.control_btn["Assist"].alpha = 1; break;
            case "skill": this._pressDownOrder["_skill"] = false; this.control_btn["skill"].alpha = 1; break;
            case "attack": this._pressDownOrder["_attack"] = false; this.control_btn["attack"].alpha = 1; break;
            case "jump": this._pressDownOrder["_jump"] = false; this.control_btn["jump"].alpha = 1; break;
            case "superSkill": this._pressDownOrder["_superSkill"] = false; this.control_btn["superSkill"].alpha = 1; break;
            case "dash": this._pressDownOrder["_dash"] = false; this.control_btn["dash"].alpha = 1; break;
            case "wankai": this._pressDownOrder["_wankai"] = false; this.control_btn["wankai"].alpha = 1; break;
            case "move":
                this._pressDownOrder["_up"] = false; this._pressDownOrder["_left"] = false;
                this._pressDownOrder["_down"] = false; this._pressDownOrder["_right"] = false;
                this._arrow2.alpha = 0; this._arrow1.alpha = 1;
                break;
        }
        if (GameMode.currentMode != GameMode.SINGLE_VS_PEOPLE) {
            this.setvalue(this._pressDownOrder);
        } else {
            const sendFramePara = { data: this._pressDownOrder };
            MatchLayer.room.sendFrame(sendFramePara);
        }
    }


    public initlize() {
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && this.inputType != MGOBE.Player.id) {
            return;
        }
        this._stage = GameScene.instance._BtnState;
        this.addbtn_attack();
        this.addbtn_move();
        this.addListener();
        return;
    }// end function


    public render() {
        return;
    }// end function

    public renderAnimate() {
        return;
    }// end function

    public destory() {
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && this.inputType != MGOBE.Player.id) {
            return;
        }
        this.removeListener();
        this.fundown_btn = [];
        this.funup_btn = [];
        return;
    }// end function

    public setenabled(param1: boolean) {
        this._enabled = param1;
    }

    public enabled(): boolean {
        return this._enabled;
    }// end function

    public moveLEFT(): boolean {
        return this._left && !this._right;
    }// end function

    public moveRIGHT(): boolean {
        return !this._left && this._right;
    }// end function

    public defense(): boolean {
        return this._down;
    }// end function

    public attack(): boolean {
        return this._attack && !(this._up || this._down || this._jump);
    }// end function

    public jump(): boolean {
        return this._jump && !this._attack;
    }// end function

    public jumpQuick(): boolean {
        if (this.classicMode) {
            return false;
        }
        return this._jump && !this._attack;
    }// end function

    public jumpDown(): boolean {
        return this._down && this._jump;
    }// end function

    public dash(): boolean {
        return this._dash && !this._down;
    }// end function

    public dashJump(): boolean {
        return this._dash && !this._down;
    }// end function

    public skill1(): boolean {
        return this._down && this._attack;
    }// end function

    public skill2(): boolean {
        return this._up && this._attack;
    }// end function

    public zhao1(): boolean {
        return this._skill && !this._up && !this._down;
    }// end function

    public zhao2(): boolean {
        return this._skill && this._down;
    }// end function

    public zhao3(): boolean {
        return this._skill && this._up;
    }// end function

    public catch1(): boolean {
        return this._attack && (this._left || this._right);
    }// end function

    public catch2(): boolean {
        return this._skill && (this._left || this._right);
    }// end function

    public bisha(): boolean {
        return this._superSkill && !(this._up || this._down);
    }// end function

    public bishaUP(): boolean {
        return this._superSkill && this._up;
    }// end function

    public bishaSUPER(): boolean {
        return this._superSkill && this._down;
    }// end function

    public assist(): boolean {
        return this._Assister;
    }// end function

    public specailSkill(): boolean {
        return this._Assister;
    }// end function

    public attackAIR(): boolean {
        return this._attack;
    }// end function

    public skillAIR(): boolean {
        return this._skill;
    }// end function

    public bishaAIR(): boolean {
        return this._superSkill;
    }// end function

    public waiKai(): boolean {
        return this._wankai;
    }// end function

    public ghostStep(): boolean {
        return this._dash && this._down;
    }// end function

    public ghostJump(): boolean {
        return this._dash && this._up;
    }// end function

    public ghostJumpDown(): boolean {
        return this._dash && this._down;
    }// end function


    public static addPic(node: any, path: any, anchorCenterFlag: boolean = false): any {
        let image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        node.addChild(image);
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width;
            image.anchorOffsetY = image.height;
        }
        return image;
    }


}



