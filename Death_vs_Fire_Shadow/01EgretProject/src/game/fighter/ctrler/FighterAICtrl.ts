
class FighterAICtrl implements IFighterActionCtrl {
    public AILevel: number;
    public fighter: FighterMain;
    private _target: IGameSprite;
    private _ai_update_gap: number;
    private _ai_update_frame: number;
    private _AIlogic: FighterAILogic;
    private _enabled: boolean = true;

    public constructor() {
        return;
    }// end function

    public _inputType(): string {
        return "AI";
    }

    public initlize() {
        this._AIlogic = new FighterAILogic(this.AILevel, this.fighter);
        return;
    }// end function

    public destory() {
        this.fighter = null;
        this._target = null;
        if (this._AIlogic) {
            this._AIlogic.destory();
            this._AIlogic = null;
        }
        return;
    }// end function

    public setenabled(param1: boolean) {
        this._enabled = param1;
    }

    public enabled(): boolean {
        // return GameCtrl.I.actionEnable;      zhushi by lmj for AI actioning in 2020-7-17
        return this._enabled;
    }// end function

    public render() {
        return;
    }// end function

    public renderAnimate() {
        this._AIlogic.render();
        return;
    }// end function

    public moveLEFT(): boolean {
        return this._AIlogic.moveLeft;
    }// end function

    public moveRIGHT(): boolean {
        return this._AIlogic.moveRight;
    }// end function

    public defense(): boolean {
        return this._AIlogic.defense;
    }// end function

    public attack(): boolean {
        return this._AIlogic.attack;
    }// end function

    public jump(): boolean {
        return this._AIlogic.jump;
    }// end function

    public jumpQuick(): boolean {
        return false;
    }// end function

    public jumpDown(): boolean {
        return this._AIlogic.jumpDown;
    }// end function

    public dash(): boolean {
        return this._AIlogic.dash;
    }// end function

    public dashJump(): boolean {
        return this._AIlogic.dashJump;
    }// end function

    public skill1(): boolean {
        return this._AIlogic.skill1;
    }// end function

    public skill2(): boolean {
        return this._AIlogic.skill2;
    }// end function

    public zhao1(): boolean {
        return this._AIlogic.zhao1;
    }// end function

    public zhao2(): boolean {
        return this._AIlogic.zhao2;
    }// end function

    public zhao3(): boolean {
        return this._AIlogic.zhao3;
    }// end function

    public catch1(): boolean {
        return this._AIlogic.catch1;
    }// end function

    public catch2(): boolean {
        return this._AIlogic.catch2;
    }// end function

    public bisha(): boolean {
        return this._AIlogic.bisha;
    }// end function

    public bishaUP(): boolean {
        return this._AIlogic.bishaUP;
    }// end function

    public bishaSUPER(): boolean {
        return this._AIlogic.bishaSUPER;
    }// end function

    public assist(): boolean {
        return this._AIlogic.assist;
    }// end function

    public specailSkill(): boolean {
        // console.log(this._AIlogic.specialSkill)
        return this._AIlogic.specialSkill;
    }// end function

    public attackAIR(): boolean {
        return this._AIlogic.attackAIR;
    }// end function

    public skillAIR(): boolean {
        return this._AIlogic.skillAIR;
    }// end function

    public bishaAIR(): boolean {
        return this._AIlogic.bishaAIR;
    }// end function

    public waiKai(): boolean {
        return false;
    }// end function

    public ghostStep(): boolean {
        return this._AIlogic.ghostStep;
    }// end function

    public ghostJump(): boolean {
        return this._AIlogic.ghostJump;
    }// end function

    public ghostJumpDown(): boolean {
        return this._AIlogic.ghostJumpDown;
    }// end function

}
