/*
*chad主骨骼动画对应的帧事件
*/
namespace hero_chad{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[15, this.frame16, 23, this.frame24, 26, this.frame27, 32, this.frame33, 43, this.frame44, 46, this.frame47, 76, this.frame77, 80, this.frame81, 83, this.frame84, 89, this.frame90, 97, this.frame98, 107, this.frame108, 108, this.frame109, 112, this.frame113, 113, this.frame114, 118, this.frame119, 120, this.frame121, 128, this.frame129, 146, this.frame147, 163, this.frame164, 168, this.frame169, 173, this.frame174, 175, this.frame176, 180, this.frame181, 186, this.frame187, 190, this.frame191, 194, this.frame195, 200, this.frame201, 204, this.frame205, 208, this.frame209, 213, this.frame214, 224, this.frame225, 230, this.frame231, 235, this.frame236, 241, this.frame242, 244, this.frame245, 245, this.frame246, 246, this.frame247, 254, this.frame255, 261, this.frame262, 267, this.frame268, 279, this.frame280, 283, this.frame284, 287, this.frame288, 314, this.frame315, 320, this.frame321, 327, this.frame328, 329, this.frame330, 333, this.frame334, 337, this.frame338, 359, this.frame360, 360, this.frame361, 363, this.frame364, 368, this.frame369, 371, this.frame372, 384, this.frame385, 391, this.frame392, 398, this.frame399, 402, this.frame403, 403, this.frame404, 405, this.frame406, 409, this.frame410, 413, this.frame414, 419, this.frame420, 429, this.frame430, 433, this.frame434, 440, this.frame441, 448, this.frame449, 466, this.frame467, 474, this.frame475, 482, this.frame483, 496, this.frame497, 505, this.frame506, 519, this.frame520, 530, this.frame531, 547, this.frame548, 561, this.frame562, 574, this.frame575, 577, this.frame578, 593, this.frame594, 602, this.frame603, 629, this.frame630, 645, this.frame646, 648, this.frame649, 665, this.frame666, 691, this.frame692, 725, this.frame726, 740, this.frame741, 741, this.frame742, 765, this.frame766, 769, this.frame770, 771, this.frame772, 794, this.frame795, 816, this.frame817, 825, this.frame826, 913, this.frame914, 931, this.frame932, 967, this.frame968, 1166, this.frame1167]);
    }

        public frame16()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame24()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame27()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame33()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame44()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame47()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame77()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame81()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame84()
        {
            this.mc.parent._mcctrl.movePercent(-1, -1);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            return;
        }// end function

        public frame90()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame98()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame108()
        {
            this.mc.parent._mcctrl.move(0, -2);
            return;
        }// end function

        public frame109()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame113()
        {
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            return;
        }// end function

        public frame114()
        {
            this.mc.parent._mcctrl.movePercent(2, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            return;
        }// end function

        public frame119()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame121()
        {
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        public frame129()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame147()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame164()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame169()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame174()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame176()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame181()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        public frame187()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame191()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame195()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame201()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame205()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame209()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame214()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame225()
        {
            this.mc.parent._mcctrl.movePercent(2.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame231()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame236()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame242()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame245()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame246()
        {
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame247()
        {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技11");
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }// end function

        public frame255()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame262()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame268()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame280()
        {
            this.mc.parent._mcctrl.setAttack("砍1");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame284()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame288()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame315()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame321()
        {
            this.mc.parent._mcctrl.move(25, 0);
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame328()
        {
            this.mc.parent._mcctrl.damping(2, 0);
            return;
        }// end function

        public frame330()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame334()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame338()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame360()
        {
            this.mc.parent._mcctrl.move(10, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            return;
        }// end function

        public frame361()
        {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }// end function

        public frame364()
        {
            this.mc.parent._mcctrl.setTouchFloor("招21", true);
            return;
        }// end function

        public frame369()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame372()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.shine(15852727);
            return;
        }// end function

        public frame385()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        public frame392()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame399()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame403()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame404()
        {
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            return;
        }// end function

        public frame406()
        {
            this.mc.parent._mcctrl.move(8, -15);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }// end function

        public frame410()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame414()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame420()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame430()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame434()
        {
            this.mc.parent._mcctrl.move(20, -15);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame441()
        {
            this.mc.parent._mcctrl.damping(1, 1);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame449()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame467()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame475()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame483()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame497()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame506()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame520()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame531()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame548()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame562()
        {
            this.mc.parent._EffectCtrl.bisha(false, "茶渡");
            return;
        }// end function

        public frame575()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame578()
        {
            this.mc.parent._mcctrl.fire("bsatm", {x:{start:30, add:-0.3, min:15}, y:0, hold:3, hits:1, hp:500});
            this.mc.parent._EffectCtrl.shine(1818876);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame594()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame603()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame630()
        {
            this.mc.parent._EffectCtrl.bisha(false, "茶渡");
            return;
        }// end function

        public frame646()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame649()
        {
            this.mc.parent._EffectCtrl.shine(1818876);
            return;
        }// end function

        public frame666()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame692()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame726()
        {
            this.mc.parent._EffectCtrl.bisha(true, "茶渡");
            return;
        }// end function

        public frame741()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame742()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.setHitTarget("cbs0atm", "超必杀1");
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame766()
        {
            this.mc.parent._mcctrl.dampingPercent(0.5, 0);
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
            return;
        }// end function

        public frame770()
        {
            this.mc.parent._EffectCtrl.shine(1818876);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame772()
        {
            this.mc.parent._EffectCtrl.shake(10, 0);
            return;
        }// end function

        public frame795()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame817(){
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
        }
        public frame826()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame914()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame932()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame968()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1167()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}