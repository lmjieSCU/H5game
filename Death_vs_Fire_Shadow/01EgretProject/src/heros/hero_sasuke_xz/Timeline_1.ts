/*
*主骨骼动画对应的帧事件
*/
namespace hero_sasuke_xz{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this, [11, this.frame12, 13, this.frame14, 22, this.frame23, 27, this.frame28, 29, this.frame30, 59, this.frame60, 69, this.frame70, 77, this.frame78, 81, this.frame82, 85, this.frame86, 97, this.frame98, 105, this.frame106, 109, this.frame110, 127, this.frame128, 134, this.frame135, 146, this.frame147, 158, this.frame159, 179, this.frame180, 184, this.frame185, 187, this.frame188, 191, this.frame192, 204, this.frame205, 212, this.frame213, 215, this.frame216, 225, this.frame226, 236, this.frame237, 246, this.frame247, 251, this.frame252, 258, this.frame259, 273, this.frame274, 279, this.frame280, 282, this.frame283, 292, this.frame293, 300, this.frame301, 315, this.frame316, 319, this.frame320, 327, this.frame328, 331, this.frame332, 334, this.frame335, 339, this.frame340, 358, this.frame359, 359, this.frame360, 368, this.frame369, 375, this.frame376, 380, this.frame381, 387, this.frame388, 388, this.frame389, 393, this.frame394, 401, this.frame402, 410, this.frame411, 416, this.frame417, 421, this.frame422, 433, this.frame434, 440, this.frame441, 474, this.frame475, 476, this.frame477, 478, this.frame479, 481, this.frame482, 484, this.frame485, 492, this.frame493, 496, this.frame497, 510, this.frame511, 538, this.frame539, 539, this.frame540, 543, this.frame544, 564, this.frame565, 596, this.frame597, 599, this.frame600, 609, this.frame610, 618, this.frame619, 626, this.frame627, 630, this.frame631, 668, this.frame669, 699, this.frame700, 700, this.frame701, 706, this.frame707, 718, this.frame719, 723, this.frame724, 732, this.frame733, 749, this.frame750, 764, this.frame765, 778, this.frame779, 813, this.frame814, 834, this.frame835, 863, this.frame864, 864, this.frame865, 890, this.frame891, 944, this.frame945, 948, this.frame949, 977, this.frame978, 980, this.frame981, 1015, this.frame1016, 1019, this.frame1020, 1066, this.frame1067, 1086, this.frame1087, 1088, this.frame1089, 1120, this.frame1121, 1154, this.frame1155, 1157, this.frame1158, 1192, this.frame1193, 1214, this.frame1215, 1218, this.frame1219, 1284, this.frame1285, 1361, this.frame1362, 1363, this.frame1364, 1365, this.frame1366, 1388, this.frame1389, 1445, this.frame1446, 1542, this.frame1543, 1570, this.frame1571]);
    }

    public frame835(): void {
        this.mc.parent._EffectCtrl.bisha(false, "须佐助1");
    }

    public frame864(): void {
        this.mc.parent._EffectCtrl.endBisha();
        this.mc.parent._mcctrl.move(6, 0);
        this.mc.parent._mcctrl.damping(0.4, 0);
    }

    public frame865(): void {
        this.mc.parent._EffectCtrl.shine(0);
        let fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen", { "applyG": false });   //必杀
        if(!fenshen_mc){
            return;
        }
        let bs = new Timeline_15(this.mc.parent._mcctrl.getAttacker("fenshen",fenshen_mc.hashCode));
    }

    public frame891(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame945():void{
        this.mc.parent._mcctrl.gotoAndPlay("上必杀1")
    }

    public frame949(): void {
        this.mc.parent._EffectCtrl.bisha(false, "须佐助2");
    }

    public frame978(): void {
        this.mc.parent._EffectCtrl.endBisha();
        this.mc.parent._mcctrl.addAttacker("sbsmc", { "x": { "moveToTarget": true, "offset": 0, "range": [50, 300] }, "applyG": false });//上+必杀
    }


    public frame981(): void {
        this.mc.parent._EffectCtrl.shine(0);
    }

    public frame1016(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame1020(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame1067(): void {
        this.mc.parent._EffectCtrl.bisha(false, "佐助1");
        this.mc.parent._mcctrl.isApplyG(false);
    }

    public frame1087(): void {
        this.mc.parent._EffectCtrl.endBisha();
    }

    public frame1089(): void {
        this.mc.parent._mcctrl.move(-5, -10);
        this.mc.parent._mcctrl.damping(0.3, 0.3);
        this.mc.parent._EffectCtrl.shine(15663104);
    }

    public frame1121(): void {
        this.mc.parent._mcctrl.isApplyG(true);
        this.mc.parent._mcctrl.idle();
    }

    public frame1155(): void {
        this.mc.parent._EffectCtrl.shine(648163);
    }

    public frame1158(): void {
        this.mc.parent._EffectCtrl.bisha(true, "须佐助2");
    }

    public frame60(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame1193(): void {
        this.mc.parent._EffectCtrl.slowDown(1);
    }

    public frame1215(): void {
        this.mc.parent._EffectCtrl.endBisha();
    }

    public frame1219(): void {
        this.mc.parent._EffectCtrl.shine(5422583);
    }

    public frame1285(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame1362(): void {
        this.mc.parent._mcctrl.move(5, 0);
    }

    public frame1364(): void {
        this.mc.parent._mcctrl.stopMove();
    }

    public frame1366(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame1389(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame1446(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame1543(): void {
        this.mc.parent._mcctrl.stop();
    }

    public frame12(): void {
        this.mc.parent._EffectCtrl.walk();
    }

    public frame14(): void {
        this.mc.parent._mcctrl.loop("走");
    }

    public frame23(): void {
        this.mc.parent._mcctrl.dash(3.5);
        this.mc.parent._EffectCtrl.dash();
    }

    public frame28(): void {
        this.mc.parent._mcctrl.dashStop();
    }

    public frame30(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame1571(): void {
        this.mc.parent._mcctrl.stop();
    }

    public frame70(): void {
        this.mc.parent._mcctrl.setAirMove(true);
        this.mc.parent._mcctrl.isApplyG(false);
    }

    public frame78(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame82(): void {
        this.mc.parent._mcctrl.setSkillAIR();
        this.mc.parent._mcctrl.setBishaAIR();
        this.mc.parent._mcctrl.isApplyG(true);
    }

    public frame86(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame98(): void {
        this.mc.parent._mcctrl.move(0, -5);
        this.mc.parent._mcctrl.damping(0, 0.5);
    }

    public frame106(): void {
        this.mc.parent._mcctrl.movePercent(0, 1);
        this.mc.parent._EffectCtrl.shadow(0, 0, 0);
    }

    public frame110(): void {
        this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
        this.mc.parent._mcctrl.loop("跳招loop");        //created by lmj 
        this.mc.parent._EffectCtrl.shine(5422583);
    }

    public frame128(): void {
        this.mc.parent._mcctrl.loop("跳招loop");
    }



    public frame135(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame147(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame159(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame180(): void {
        this.mc.parent._mcctrl.move(4, 0);
        this.mc.parent._mcctrl.damping(0.4, 0);
    }

    public frame185(): void {
        this.mc.parent._mcctrl.setAttack("砍2");
    }

    public frame188(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame192(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame205(): void {
        this.mc.parent._mcctrl.move(7, 0);
        this.mc.parent._mcctrl.damping(0.7, 0);
    }

    public frame213(): void {
        this.mc.parent._mcctrl.setAttack("砍3");
        this.mc.parent._mcctrl.setSkill1("砍技1");
    }

    public frame216(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame226(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame237(): void {
        this.mc.parent._mcctrl.move(6, 0);
        this.mc.parent._mcctrl.damping(0.4, 0);
    }

    public frame247(): void {
        this.mc.parent._mcctrl.setAttack("砍4");
        this.mc.parent._mcctrl.setBisha();
    }

    public frame252(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame259(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame274(): void {
        this.mc.parent._mcctrl.move(10, 0);
    }

    public frame280(): void {
        this.mc.parent._mcctrl.damping(2, 0);
    }

    public frame283(): void {
        this.mc.parent._mcctrl.setBishaSUPER();
        this.mc.parent._mcctrl.setZhao3("招3");
        this.mc.parent._mcctrl.setSkill2("砍技2");
        this.mc.parent._mcctrl.setBishaUP();
        this.mc.parent._mcctrl.setAttack("砍5");
    }

    public frame293(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame301(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame316(): void {
        this.mc.parent._FighterCtrler.moveOnce(35, 0);
    }

    public frame320(): void {
        this.mc.parent._mcctrl.addAttacker("huo", { "applyG": false });       //连击
    }


    public frame328(): void {
        this.mc.parent._mcctrl.move(8, 0);
        this.mc.parent._mcctrl.damping(4, 0);
    }

    public frame332(): void {
        this.mc.parent._mcctrl.setBishaUP();
        this.mc.parent._mcctrl.setBisha();
        this.mc.parent._mcctrl.setDash();
    }

    public frame335(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame340(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame359(): void {
        this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技11");
        this.mc.parent._mcctrl.movePercent(2, 0);
        this.mc.parent._EffectCtrl.shadow(110, -50, 255);
    }

    public frame360(): void {
        this.mc.parent._mcctrl.addQi(10);
        this.mc.parent._EffectCtrl.dash();
    }

    public frame369(): void {
        this.mc.parent._mcctrl.dampingPercent(0.2, 0);
    }

    public frame376(): void {
        this.mc.parent._EffectCtrl.endShadow();
    }

    public frame381(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame388(): void {
        this.mc.parent._FighterCtrler.moveOnce(100, 0);
    }

    public frame389(): void {
        this.mc.parent._EffectCtrl.shine();
    }

    public frame394(): void {
        this.mc.parent._mcctrl.setSkill1("砍技12");
        this.mc.parent._mcctrl.setAttack("砍技12");
        this.mc.parent._mcctrl.setZhao3("招30");
        this.mc.parent._mcctrl.setZhao1();
        this.mc.parent._mcctrl.setBisha();
    }

    public frame402(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame411(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame417(): void {
        this.mc.parent._FighterCtrler.setDirectToTarget();
    }

    public frame422(): void {
        this.mc.parent._mcctrl.addAttacker("tianzhao", { "x": { "moveToTarget": true, "offset": 0 }, "applyG": false }); //下+飞镖
    }

    public frame434(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame441(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame475(): void {
        this.mc.parent._mcctrl.addQi(10);
        this.mc.parent._mcctrl.isApplyG(false);
    }

    public frame477(): void {
        this.mc.parent._EffectCtrl.dash();
    }

    public frame479(): void {
        this.mc.parent._FighterCtrler.moveToTarget(50, -30, true);
        this.mc.parent._EffectCtrl.slowDown(0.5);
    }

    public frame482(): void {
        this.mc.parent._mcctrl.move(-3, -3);
        this.mc.parent._mcctrl.damping(0.3, 0.3);
    }

    public frame485(): void {
        this.mc.parent._mcctrl.move(-7, -7);
        this.mc.parent._mcctrl.damping(0.3, 0.3);
        this.mc.parent._mcctrl.addAttacker("huo", { "applyG": false });       //上+砍
    }

    public frame493(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame497(): void {
        this.mc.parent._mcctrl.isApplyG(true);
    }

    public frame511(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame539(): void {
        // this.mc.parent._FighterCtrler.setDirectToTarget();
    }

    public frame540(): void {
        this.mc.parent._mcctrl.addQi(5);
    }

    public frame544(): void {
        let fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen");            //飞镖，招1
        if(!fenshen_mc){
            return;
        }
        let zhao1 = new Timeline_13(this.mc.parent._mcctrl.getAttacker("fenshen",fenshen_mc.hashCode));
    }

    public frame565(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame597(): void {
        this.mc.parent._mcctrl.addQi(10);
    }

    public frame600():void{
        this.mc.parent._mcctrl.gotoAndPlay("招20");
    }

    public frame610(): void {
        this.mc.parent._EffectCtrl.shine(6968203);
    }

    public frame619(): void {
        this.mc.parent._mcctrl.justHitToPlay("zh2", "招21", false, true);
    }

    public frame627(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame631(): void {
        this.mc.parent._EffectCtrl.shine(6968203);
    }

    public frame669(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame700(): void {
        this.mc.parent._FighterCtrler.setDirectToTarget();
    }

    public frame701(): void {
        this.mc.parent._mcctrl.addQi(5);
    }

    public frame707(): void {
        this.mc.parent._EffectCtrl.shine(5422583);
        this.mc.parent._mcctrl.addAttacker("huo", { "applyG": false });   //招3,上+飞镖
    }

    public frame719(): void {
        this.mc.parent._mcctrl.setZhao2("招22");
        this.mc.parent._mcctrl.setBishaUP("上必杀1");
        this.mc.parent._mcctrl.setSkill2();
    }

    public frame724(): void {
        this.mc.parent._mcctrl.endAct();
    }

    public frame733(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame750(): void {
        this.mc.parent._mcctrl.addQi(20);
    }

    public frame765(): void {
        this.mc.parent._mcctrl.idle();
    }

    public frame779(): void {
        this.mc.parent._mcctrl.addQi(20);
    }

    public frame814(): void {
        this.mc.parent._mcctrl.idle();
    }




}
}