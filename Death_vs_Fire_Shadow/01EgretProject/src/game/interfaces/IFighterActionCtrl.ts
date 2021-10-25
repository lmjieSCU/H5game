interface IFighterActionCtrl {

    initlize();

    render();

    renderAnimate();

    destory();

    enabled(): boolean;

    setenabled(param1: boolean);

    moveLEFT(): boolean;

    moveRIGHT(): boolean;

    defense(): boolean;

    attack(): boolean;

    jump(): boolean;

    jumpQuick(): boolean;

    jumpDown(): boolean;

    dash(): boolean;

    dashJump(): boolean;

    skill1(): boolean;

    skill2(): boolean;

    zhao1(): boolean;

    zhao2(): boolean;

    zhao3(): boolean;

    catch1(): boolean;

    catch2(): boolean;

    bisha(): boolean;

    bishaUP(): boolean;

    bishaSUPER(): boolean;

    assist(): boolean;

    specailSkill(): boolean;

    attackAIR(): boolean;

    skillAIR(): boolean;

    bishaAIR(): boolean;

    waiKai(): boolean;

    ghostStep(): boolean;

    ghostJump(): boolean;

    ghostJumpDown(): boolean;

    _inputType():string;

}
