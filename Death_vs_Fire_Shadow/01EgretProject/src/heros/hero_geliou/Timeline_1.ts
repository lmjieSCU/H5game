/*
*geliou主骨骼动画对应的帧事件
*/
namespace hero_geliou{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[10, this.frame11, 17, this.frame18, 27, this.frame28, 34, this.frame35, 45, this.frame46, 48, this.frame49, 78, this.frame79, 86, this.frame87, 93, this.frame94, 97, this.frame98, 102, this.frame103, 109, this.frame110, 118, this.frame119, 128, this.frame129, 134, this.frame135, 139, this.frame140, 146, this.frame147, 152, this.frame153, 154, this.frame155, 160, this.frame161, 162, this.frame163, 166, this.frame167, 173, this.frame174, 179, this.frame180, 187, this.frame188, 202, this.frame203, 207, this.frame208, 212, this.frame213, 236, this.frame237, 243, this.frame244, 251, this.frame252,257, this.frame258,  260, this.frame261, 261, this.frame262, 284, this.frame285,289, this.frame290, 295, this.frame296, 304, this.frame305, 308, this.frame309, 322, this.frame323, 326, this.frame327, 331, this.frame332, 347, this.frame348, 364, this.frame365, 372, this.frame373, 374, this.frame375, 379, this.frame380, 389, this.frame390, 409, this.frame410, 415, this.frame416, 420, this.frame421, 432, this.frame433, 457, this.frame458, 462, this.frame463, 475, this.frame476, 497, this.frame498, 524, this.frame525, 606, this.frame607, 626, this.frame627, 647, this.frame648, 660, this.frame661, 664, this.frame665, 688, this.frame689, 718, this.frame719, 727, this.frame728, 749, this.frame750, 750, this.frame751, 753, this.frame754, 755, this.frame756, 767, this.frame768, 769, this.frame770, 784, this.frame785, 815, this.frame816, 825, this.frame826, 854, this.frame855, 855, this.frame856, 907, this.frame908, 911, this.frame912, 931, this.frame932, 1013, this.frame1014, 1033, this.frame1034, 1103, this.frame1104, 1173, this.frame1174, 1201, this.frame1202]);
    }

       frame11()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame18()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame28()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame35()
        {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame46()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame49()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame79()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame87()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame94()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame103()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }// end function

        frame110()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame119()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame129()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame135()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame140()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame147()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame153()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame155()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame161()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame163()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame167()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame174()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame180()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame188()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame203()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame208()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame213()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame237()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame244()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame252()
        {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }// end function

         frame258()
        {
           let mc = this.mc.parent;
            return;
        }// end function

        frame261()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame262()
        {
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame285()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame290()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }// end function

        frame296()
        {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            return;
        }// end function

        frame305()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame309()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame323()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame327()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame332()
        {
            this.mc.parent._EffectCtrl.shake(0, 2);
            return;
        }// end function

        frame348()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame365()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame373()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame375()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame380()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame390()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame410()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame416()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame421()
        {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }// end function

        frame433()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame458()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame463()
        {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }// end function

        frame476()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame498()
        {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }// end function

        frame525()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame607()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame627()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame648()
        {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }// end function

        frame661()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame665()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame689()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame719()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame728()
        {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }// end function

        frame750()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame751()
        {
            this.mc.parent._mcctrl.move(30, -40);
            return;
        }// end function

        frame754()
        {
            this.mc.parent._mcctrl.movePercent(-0.1, 0.1);
            return;
        }// end function

        frame756()
        {
            this.mc.parent._mcctrl.movePercent(1, 1);
            return;
        }// end function

        frame768()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame770()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame785()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame816()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame826()
        {
            this.mc.parent._EffectCtrl.bisha(true, "一户2");
            return;
        }// end function

        frame855()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame856()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame908()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 7);
            return;
        }// end function

        frame912()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame932()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1014()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1034()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1104()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1174()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1202()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}