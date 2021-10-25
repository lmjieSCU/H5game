
class FighterKeyCtrl implements IFighterActionCtrl {
    public inputType: string;
    public classicMode: boolean = false;
    private _justDown: number = 0;

    public constructor() {
        return;
    }// end function

    public _inputType(): string {
        return this.inputType;
    }

    public initlize() {
        if (!this.classicMode)//true
        {
            this._justDown = 2;
            GameInputer.listenKeys(this.inputType, ["attack", "jump", "dash", "skill", "superSkill"], 2);

        }
        else {
            this._justDown = 0;
        }
        return;
    }// end function

    public render() {
        return;
    }// end function

    public renderAnimate() {
        return;
    }// end function

    public destory() {
        if (!this.classicMode) {
            GameInputer.unListenKeys(this.inputType, 2);
        }
        return;
    }// end function

    public enabled(): boolean {
        return GameCtrl.I.actionEnable;
    }// end function

    public setenabled() {
    }// end function

    public moveLEFT(): boolean {
        return GameInputer.left(this.inputType, 0) && !GameInputer.right(this.inputType, 0);
    }// end function

    public moveRIGHT(): boolean {
        return GameInputer.right(this.inputType, 0) && !GameInputer.left(this.inputType, 0);
    }// end function

    public defense(): boolean {
        return GameInputer.down(this.inputType, 0);
    }// end function

    public attack(): boolean {
        return GameInputer.attack(this.inputType, this._justDown) && !(GameInputer.up(this.inputType, 0) || GameInputer.down(this.inputType, 0) || GameInputer.jump(this.inputType, 0));
    }// end function

    public jump(): boolean {
        return GameInputer.jump(this.inputType, this._justDown) && !GameInputer.attack(this.inputType, 0);
    }// end function

    public jumpQuick(): boolean {
        if (this.classicMode) {
            return false;
        }
        return GameInputer.jump(this.inputType, this._justDown) && !GameInputer.attack(this.inputType, 0);
    }// end function

    public jumpDown(): boolean {
        return GameInputer.down(this.inputType, 0) && GameInputer.jump(this.inputType, this._justDown);
    }// end function

    public dash(): boolean {
        GameInputer.up(this.inputType, 0);
        return GameInputer.dash(this.inputType, this._justDown) && !GameInputer.down(this.inputType, 0);
    }// end function

    public dashJump(): boolean {
        return GameInputer.dash(this.inputType, this._justDown);
    }// end function

    public skill1(): boolean {
        return GameInputer.down(this.inputType, 0) && GameInputer.attack(this.inputType, this._justDown);
    }// end function

    public skill2(): boolean {
        return GameInputer.up(this.inputType, 0) && GameInputer.attack(this.inputType, this._justDown);
    }// end function

    public zhao1(): boolean {
        return GameInputer.skill(this.inputType, this._justDown) && !GameInputer.up(this.inputType, 0) && !GameInputer.down(this.inputType, 0);
    }// end function

    public zhao2(): boolean {
        return GameInputer.down(this.inputType, 0) && GameInputer.skill(this.inputType, this._justDown);
    }// end function

    public zhao3(): boolean {
        return GameInputer.up(this.inputType, 0) && GameInputer.skill(this.inputType, this._justDown);
    }// end function

    public catch1(): boolean {
        return GameInputer.attack(this.inputType, this._justDown) && (GameInputer.left(this.inputType, 0) || GameInputer.right(this.inputType, 0));
    }// end function

    public catch2(): boolean {
        return GameInputer.skill(this.inputType, this._justDown) && (GameInputer.left(this.inputType, 0) || GameInputer.right(this.inputType, 0));
    }// end function

    public bisha(): boolean {
        return GameInputer.superSkill(this.inputType, this._justDown) && !(GameInputer.up(this.inputType, 0) || GameInputer.down(this.inputType, 0));
    }// end function

    public bishaUP(): boolean {
        return GameInputer.superSkill(this.inputType, this._justDown) && GameInputer.up(this.inputType, 0);
    }// end function

    public bishaSUPER(): boolean {
        return GameInputer.superSkill(this.inputType, this._justDown) && GameInputer.down(this.inputType, 0);
    }// end function

    public assist(): boolean {
        return GameInputer.special(this.inputType, 0);
    }// end function

    public specailSkill(): boolean {
        return GameInputer.special(this.inputType, 0);
    }// end function

    public attackAIR(): boolean {
        return GameInputer.attack(this.inputType, this._justDown);
    }// end function

    public skillAIR(): boolean {
        return GameInputer.skill(this.inputType, this._justDown);
    }// end function

    public bishaAIR(): boolean {
        return GameInputer.superSkill(this.inputType, this._justDown);
    }// end function

    public waiKai(): boolean {
        return GameInputer.wankai(this.inputType, 0);
    }// end function

    public ghostStep(): boolean {
        return GameInputer.dash(this.inputType, this._justDown) && GameInputer.down(this.inputType, 0);
    }// end function

    public ghostJump(): boolean {
        return GameInputer.dash(this.inputType, this._justDown) && GameInputer.up(this.inputType, 0);
    }// end function

    public ghostJumpDown(): boolean {
        return GameInputer.dash(this.inputType, this._justDown) && GameInputer.down(this.inputType, 0);
    }// end function

}
