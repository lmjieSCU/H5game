
class FighterKeyCtrl_lmj implements IFighterActionCtrl {
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

    constructor() {
        this.kb = new KeyBoard();
        return;
    }// end function

    public _inputType(): string {
        return this.inputType;
    }
    
    public initlize() {
        this.kb.addEventListener(KeyBoard.onkeydown, this.onkeydown, this);
        this.kb.addEventListener(KeyBoard.onkeyup, this.onkeyup, this);
        return;
    }// end function

    public onkeydown(event): void {
        if (this.kb.isContain(event.data, KeyBoard.W)) {
            this._up = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.A)) {
            this._left = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.S)) {
            this._down = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.D)) {
            this._right = true;
        }

        if (this.kb.isContain(event.data, KeyBoard.U)) {
            this._skill = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.I)) {
            this._Assister = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.O)) {
            this._superSkill = true;
        }

        if (this.kb.isContain(event.data, KeyBoard.J)) {
            this._attack = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.K)) {
            this._jump = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.L)) {
            this._dash = true;
        }
        if (this.kb.isContain(event.data, KeyBoard.P)) {
            this._wankai = true;
        }
    }

    public onkeyup(event): void {
        if (!this.kb.isContain(event.data, KeyBoard.W)) {
            this._up = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.A)) {
            this._left = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.S)) {
            this._down = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.D)) {
            this._right = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.U)) {
            this._skill = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.I)) {
            this._Assister = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.O)) {
            this._superSkill = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.J)) {
            this._attack = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.K)) {
            this._jump = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.L)) {
            this._dash = false;
        }
        if (!this.kb.isContain(event.data, KeyBoard.P)) {
            this._wankai = false;
        }
    }

    public setvalue(Package: any) {
        for (let key in Package) {
            if (this[key]) {
                this[key] = Package[key];
            }
        }
    }

    public render() {
        return;
    }// end function

    public renderAnimate() {
        return;
    }// end function

    public destory() {
        this.kb.removeEventListener(KeyBoard.onkeydown, this.onkeydown, this);
        this.kb.removeEventListener(KeyBoard.onkeyup, this.onkeyup, this);
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