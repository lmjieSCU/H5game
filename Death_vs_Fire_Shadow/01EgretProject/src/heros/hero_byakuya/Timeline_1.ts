/*
*byakuya主骨骼动画对应的帧事件
*/
namespace hero_byakuya{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[
            11, this.frame12, 20, this.frame21, 26, this.frame27, 30, this.frame31, 37, this.frame38, 40, this.frame41, 70, this.frame71, 89, this.frame90, 95, this.frame96, 99, this.frame100, 100, this.frame101, 109, this.frame110, 129, this.frame130, 132, this.frame133, 136, this.frame137, 144, this.frame145, 149, this.frame150, 155, this.frame156, 161, this.frame162, 165, this.frame166, 170, this.frame171, 177, this.frame178, 183, this.frame184, 188, this.frame189, 190, this.frame191, 191, this.frame192, 194, this.frame195, 195, this.frame196, 199, this.frame200, 206, this.frame207, 216, this.frame217, 234, this.frame235, 236, this.frame237, 245, this.frame246, 246, this.frame247, 247, this.frame248, 251, this.frame252, 254, this.frame255, 261, this.frame262, 268, this.frame269, 295, this.frame296, 297, this.frame298, 300, this.frame301, 302, this.frame303, 310, this.frame311, 316, this.frame317, 338, this.frame339, 349, this.frame350, 358, this.frame359, 367, this.frame368, 382, this.frame383, 383, this.frame384, 386, this.frame387, 399, this.frame400, 401, this.frame402, 408, this.frame409, 415, this.frame416, 429, this.frame430, 438, this.frame439, 442, this.frame443, 445, this.frame446, 477, this.frame478, 454, this.frame455, 462, this.frame463, 487, this.frame488, 519, this.frame520, 520, this.frame521, 521, this.frame522, 560, this.frame561, 563, this.frame564, 602, this.frame603, 661, this.frame662, 662, this.frame663, 663, this.frame664, 703, this.frame704, 725, this.frame726, 757, this.frame758, 786, this.frame787, 799, this.frame800,  801, this.frame802, 803, this.frame804, 824, this.frame825, 825, this.frame826, 826, this.frame827, 842, this.frame843, 928, this.frame929, 949, this.frame950, 1000, this.frame1001, 1061, this.frame1062, 1105, this.frame1106, 1110, this.frame1111, 1114, this.frame1115
        ]);
    }
frame12()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame21()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame27()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame31()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame38()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame41()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame71()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame90()
        {
            this.mc.parent._mcctrl.move(-4, -4);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            this.mc.parent._mcctrl.addAttacker("liuzhang", {x:{moveToTarget:true, offset:0, range:[0, 100]}, y:{moveToTarget:true, offset:-30, range:[-30, 200]}, applyG:false});
            return;
        }// end function

        frame96()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame100()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame101()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame110()
        {
            this.mc.parent._mcctrl.addAttacker("liuzhang", {x:{moveToTarget:true, offset:0, range:[0, 150]}, y:{moveToTarget:true, offset:-30, range:[0, 250]}, applyG:false});
            return;
        }// end function

        frame130()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame133()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end function

        frame137()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame145()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame150()
        {
            this.mc.parent._mcctrl.movePercent(0.4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.04, 0);
            return;
        }// end function

        frame156()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        frame162()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame166()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame171()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end function

        frame178()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame184()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame189()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame191()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._EffectCtrl.shadow(0, 150, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame192()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame195()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame196()
        {
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }// end function

        frame200()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame207()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame217()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame235()
        {
            this.mc.parent._mcctrl.addQi(15);
            this.mc.parent._EffectCtrl.shadow(0, 150, 150);
            return;
        }// end function

        frame237()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame246()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end function

        frame247()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame248()
        {
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }// end function

        frame252()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame255()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame262()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame269()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame296()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame298()
        {
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }// end function

        frame301()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame303()
        {
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        frame311()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame317()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame339()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame350()
        {
            this.mc.parent._mcctrl.move(-5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }// end function

        frame359()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame368()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame383()
        {
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0.02);
            this.mc.parent._EffectCtrl.shadow(200, 0, 200);
            return;
        }// end function

        frame384()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame387()
        {
            this.mc.parent._EffectCtrl.shine(15174887);
            return;
        }// end function

        frame400()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame402()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttackAIR("跳砍");
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame409()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame416()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame430()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame439()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame443()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame446()
        {
            this.mc.parent._mcctrl.dampingPercent(0.6, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame455()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame463()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame478()
        {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
            return;
        }// end function

        frame488()
        {
            this.mc.parent._EffectCtrl.bisha(false, "白哉1");
            return;
        }// end function

        frame520()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame521()
        {
            this.mc.parent._mcctrl.addAttacker("shijie", {x:{followTarget:true, offset:0}, y:{followTarget:true, offset:0}, applyG:false});
            return;
        }// end function

        frame522()
        {
            this.mc.parent._EffectCtrl.shine(15174887);
            return;
        }// end function

        frame561()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame564()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame603()
        {
            this.mc.parent._EffectCtrl.bisha(false, "白哉2");
            return;
        }// end function

        frame662()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame663()
        {
            this.mc.parent._EffectCtrl.shine(15174887);
            return;
        }// end function

        frame664()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame704()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame726()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame758()
        {
            this.mc.parent._EffectCtrl.bisha(true, "白哉3");
            return;
        }// end function

        frame787()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(5, 0);
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "超必杀1");
            return;
        }// end function

        frame800()
        {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
            return;
        }// end function

     


        frame802()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, null, false);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame804()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

         frame825()
        {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
            return;
        }// end function

        frame826()
        {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame827()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame843()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function


        frame929()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame950()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1001()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1062()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1106()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1111()
        {
            this.mc.parent._EffectCtrl.startWanKai("白哉2");
            return;
        }// end function

        frame1115()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function
    }
}