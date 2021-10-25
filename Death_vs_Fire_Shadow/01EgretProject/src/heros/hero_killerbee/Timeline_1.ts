/*
*sasuke_xz主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_killerbee {

   export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip
    public recoveryBisha:Number;

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[12, this.frame13, 16, this.frame17, 23, this.frame24, 26, this.frame27, 34, this.frame35, 65, this.frame66, 79, this.frame80, 84, this.frame85, 88, this.frame89, 96, this.frame97, 99, this.frame100, 110, this.frame111, 131, this.frame132, 132, this.frame133, 137, this.frame138, 143, this.frame144, 146, this.frame147, 149, this.frame150, 155, this.frame156, 160, this.frame161, 168, this.frame169, 173, this.frame174, 178, this.frame179, 182, this.frame183, 188, this.frame189, 197, this.frame198, 202, this.frame203, 212, this.frame213, 217, this.frame218, 221, this.frame222, 227, this.frame228, 234, this.frame235, 238, this.frame239, 243, this.frame244, 246, this.frame247, 273, this.frame274, 279, this.frame280, 285, this.frame286, 297, this.frame298, 299, this.frame300, 307, this.frame308, 310, this.frame311, 314, this.frame315, 320, this.frame321, 328, this.frame329, 330, this.frame331, 331, this.frame332, 332, this.frame333, 337, this.frame338, 344, this.frame345, 356, this.frame357, 358, this.frame359, 373, this.frame374, 380, this.frame381, 387, this.frame388, 392, this.frame393, 402, this.frame403, 415,this.frame416, 416, this.frame417, 417, this.frame418, 420, this.frame421, 433, this.frame434, 448, this.frame449, 450, this.frame451, 465, this.frame466, 472, this.frame473, 478, this.frame479, 491, this.frame492, 501, this.frame502, 508, this.frame509, 527, this.frame528, 539, this.frame540, 564, this.frame565, 565, this.frame566, 568, this.frame569, 571, this.frame572, 585, this.frame586, 605, this.frame606, 616, this.frame617, 626, this.frame627, 643, this.frame644, 657, this.frame658, 704, this.frame705, 715, this.frame716, 746, this.frame747, 758, this.frame759, 768, this.frame769, 793, this.frame794, 819, this.frame820, 825, this.frame826, 900, this.frame901, 901, this.frame902, 950, this.frame951, 975, this.frame976, 989, this.frame990, 1067, this.frame1068, 1096, this.frame1097, 1162, this.frame1163, 1203, this.frame1204, 1231, this.frame1232]);
    }

    public frame13()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame17()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame24()
        {
            this.mc.parent._mcctrl.dash(6);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame27()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame35()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame66()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame80()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame85()
        {
            this.mc.parent._mcctrl.setAirMove(false);
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        public frame89()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame97()
        {
            this.mc.parent._mcctrl.move(10, 10);
            this.mc.parent._mcctrl.setTouchFloor("跳招4", true);
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招3");
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        public frame100()
        {
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }// end function

        public frame111()
        {
            this.mc.parent._mcctrl.move(3, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function


        public frame132(){
            this.mc.parent._mcctrl.gotoAndPlay("跳招4");
        }

        public frame133()
        {
            this.mc.parent._mcctrl.damping(0.3, 0);
            return;
        }// end function

        public frame138()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame144()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame147()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame150()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame156()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame161()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame169()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame174()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame179()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame183()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame189()
        {
            this.mc.parent._mcctrl.movePercent(0.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame198()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame203()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame213()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame218()
        {
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame222()
        {
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }// end function

        public frame228()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame235()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame239()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame244()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame247()
        {
            this.mc.parent._mcctrl.move(15, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        public frame274()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame280()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame286()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame298()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame300()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        public frame308()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame311()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame315()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setAttack("砍技21");
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        public frame321()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame329()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame331()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame332()
        {
            this.mc.parent._mcctrl.move(20, -15);
            this.mc.parent._mcctrl.damping(1, 0.5);
            return;
        }// end function

        public frame333()
        {
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        public frame338()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame345()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame357()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame359()
        {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        public frame374()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame381()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame388()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame393()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame403()
        {
            this.mc.parent._mcctrl.setHitTarget("zh20atm", "招21");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function


        public frame416(){
            this.mc.parent._mcctrl.gotoAndPlay("招21");

        }
        public frame417()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame418()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame421()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame434()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame449()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame451()
        {
            this.mc.parent._EffectCtrl.shine(3653367);
            this.mc.parent._mcctrl.fire("zh3atm", {x:18, y:-13, hold:2, hits:1});
            return;
        }// end function

        public frame466()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame473()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame479()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame492()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame502()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame509()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame528()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame540()
        {
            this.mc.parent._EffectCtrl.bisha(false, "奇拉比1");
            return;
        }// end function

        public frame565()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame566()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame569()
        {
            this.mc.parent._FighterCtrler.moveToTarget(80, 0, true);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame572()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame586()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame606()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame617()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame627()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame644()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame658()
        {
            this.mc.parent._EffectCtrl.bisha(false, "奇拉比1");
            return;
        }// end function

        public frame705()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame716()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame747()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame759()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame769()
        {
            this.mc.parent._EffectCtrl.bisha(true, "奇拉比2");
            return;
        }// end function

        public frame794()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame820()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame826()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        public frame901()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame902()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(16751616);
            return;
        }// end function

        public frame951()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame976()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame990()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1068()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1097()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1163()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1204()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1232()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
            