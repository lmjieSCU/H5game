
class FighterKeyCtrl_pack implements IFighterActionCtrl {
    public inputType: string;
    public classicMode: boolean = false;
    private _justDown: number = 0;
    private kb: KeyBoard;
    private _up: boolean;
    private _down: boolean;
    private _left: boolean;
    private _right: boolean;
    private _jump: boolean;
    private _attack: boolean;
    private _dash: boolean;
    private _skill: boolean;
    private _superSkill: boolean;
    private _Assister: boolean = false;
    private _enabled: boolean = false;
    private _wankai: boolean;
    public packframe: number = 0;

    constructor() {
        return;
    }// end function

    public _inputType():string{
        return this.inputType;
    }

    public initlize() {
        if (GameMode.currentMode == GameMode.SINGLE_VS_PEOPLE && this.inputType != MGOBE.Player.id) {
            return;
        }
        this.kb = new KeyBoard();
        this.kb.addEventListener(KeyBoard.onkeydown, this.check, this);
        this.kb.addEventListener(KeyBoard.onkeyup, this.check, this);
        return;
    }// end function

    public check(event): void {
        let pack = {}
        if (this.kb.isContain(event.data, KeyBoard.W)) {
            pack["_up"] = true;
        } else {
            pack["_up"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.A)) {
            pack["_left"] = true;
        } else {
            pack["_left"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.S)) {
            pack["_down"] = true;
        } else {
            pack["_down"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.D)) {
            pack["_right"] = true;
        } else {
            pack["_right"] = false;
        }

        if (this.kb.isContain(event.data, KeyBoard.U)) {
            pack["_skill"] = true;
        } else {
            pack["_skill"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.I)) {
            pack["_Assister"] = true;
        } else {
            pack["_Assister"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.O)) {
            pack["_superSkill"] = true;
        } else {
            pack["_superSkill"] = false;
        }

        if (this.kb.isContain(event.data, KeyBoard.J)) {
            pack["_attack"] = true;
        } else {
            pack["_attack"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.K)) {
            pack["_jump"] = true;
        } else {
            pack["_jump"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.L)) {
            pack["_dash"] = true;
        } else {
            pack["_dash"] = false;
        }
        if (this.kb.isContain(event.data, KeyBoard.P)) {
            pack["_wankai"] = true;
        } else {
            pack["_wankai"] = false;
        }
        if (GameMode.currentMode != GameMode.SINGLE_VS_PEOPLE) {
            this.setvalue(pack);
        } else {
            if (this.inputType != MGOBE.Player.id) {
                return;
            }
            const sendFramePara = { data: pack };
            MatchLayer.room.sendFrame(sendFramePara);//, event => console.log("sendframe",)
        }
    }


    public setvalue(pack: any) {
        for (let key in pack) {
            this[key] = pack[key];
        }
    }

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
        this.kb.removeEventListener(KeyBoard.onkeydown, this.check, this);
        this.kb.removeEventListener(KeyBoard.onkeyup, this.check, this);
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

}