/*
*orihime主骨骼动画对应的帧事件
*/
namespace hero_orihime{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip
    public recoveryBisha:Number;

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[12, this.frame13, 20, this.frame21, 25, this.frame26, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 150, this.frame151, 155, this.frame156, 175, this.frame176, 248, this.frame249, 293, this.frame294, 321, this.frame322, 331, this.frame332, 338, this.frame339, 341, this.frame342, 343, this.frame344, 349, this.frame350, 356, this.frame357, 366, this.frame367, 373, this.frame374, 376, this.frame377, 386, this.frame387, 395, this.frame396, 403, this.frame404, 409, this.frame410, 415, this.frame416, 420, this.frame421, 422, this.frame423, 426, this.frame427, 434, this.frame435, 444, this.frame445, 446, this.frame447, 453, this.frame454, 464, this.frame465, 478, this.frame479, 480, this.frame481, 485, this.frame486, 489, this.frame490, 495, this.frame496, 504, this.frame505, 516, this.frame517, 524, this.frame525, 532, this.frame533, 550, this.frame551, 564, this.frame565, 579, this.frame580, 586, this.frame587, 595, this.frame596, 600, this.frame601, 605, this.frame606, 608, this.frame609, 613, this.frame614, 620, this.frame621, 625, this.frame626, 651, this.frame652, 658, this.frame659, 690, this.frame691, 696, this.frame697, 703, this.frame704, 714, this.frame715, 721, this.frame722, 734, this.frame735, 737, this.frame738, 769, this.frame770, 776, this.frame777, 803, this.frame804, 811, this.frame812, 814, this.frame815, 823, this.frame824, 836, this.frame837, 851, this.frame852, 884, this.frame885, 888, this.frame889, 889, this.frame890, 890, this.frame891, 891, this.frame892, 892, this.frame893, 893, this.frame894, 894, this.frame895, 895, this.frame896, 896, this.frame897, 897, this.frame898, 898, this.frame899, 899, this.frame900, 900, this.frame901, 901, this.frame902, 902, this.frame903, 903, this.frame904, 904, this.frame905, 905, this.frame906, 906, this.frame907, 907, this.frame908, 908, this.frame909, 909, this.frame910, 910, this.frame911, 911, this.frame912, 912, this.frame913, 913, this.frame914, 914, this.frame915, 915, this.frame916, 924, this.frame925, 946, this.frame947, 993, this.frame994, 998, this.frame999, 1002, this.frame1003, 1006, this.frame1007, 1010, this.frame1011, 1014, this.frame1015, 1018, this.frame1019, 1022, this.frame1023, 1114, this.frame1115, 1132, this.frame1133]);
            
        }

     public frame13()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame21()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame26()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame35()
        {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame44()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame49()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame79()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame151()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame156()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame176()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame249()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame294()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame322()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame332()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame339()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame342()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame344()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }// end function

        public frame350()
        {
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._mcctrl.fire("tzatm", {x:{start:15, add:1, max:20}, y:{start:0, add:0.5, max:8}, hold:5, hits:1});
            return;
        }// end function

        public frame357()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame367()
        {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.06, 0);
            return;
        }// end function

        public frame374()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame377()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame387()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame396()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame404()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao3("招31");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        public frame410()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame416()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame421()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame423()
        {
            this.mc.parent._mcctrl.fire("k3atm", {x:10, y:6, hold:2, hits:1});
            return;
        }// end function

        public frame427()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame435()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame445()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame447()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame454()
        {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:15, add:1, max:20, hit:10}, y:0, hold:5, hits:1});
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame465()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame479()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame481()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame486()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 255);
            return;
        }// end function

        public frame490()
        {
            this.mc.parent._mcctrl.setHurtAction("招22");
            return;
        }// end function

        public frame496()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame505()
        {
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame517()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame525()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame533()
        {
            this.mc.parent._mcctrl.fire("zh22atm", {x:20, y:0, hold:5, hits:1});
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame551()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame565()
        {
            this.mc.parent._mcctrl.fire("zh3atm", {x:15, y:-7, hold:2, hits:1});
            return;
        }// end function

        public frame580()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame587()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame596()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame601()
        {
            this.mc.parent._mcctrl.justHitToPlay("kj1", "砍技12", false, true);
            return;
        }// end function

        public frame606()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame609()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame614()
        {
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        public frame621()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame626()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame652()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame659()
        {
            this.mc.parent._mcctrl.fire("kj2atm", {x:{start:5, hit:2}, y:0, hold:10, hits:100});
            return;
        }// end function

        public frame691()
        {
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame697()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame704()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame715()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame722()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame735()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame738()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame770()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame777()
        {
            this.mc.parent._EffectCtrl.bisha(false, "织姬1");
            return;
        }// end function

        public frame804()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame812()
        {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }// end function

        public frame815()
        {
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }// end function

        public frame824()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame837()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame852()
        {
            this.mc.parent._EffectCtrl.bisha(false, "织姬1");
            this.recoveryBisha = 3;
            return;
        }// end function

        public frame885()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame889()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }// end function

        public frame890()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame891()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame892()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame893()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame894()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame895()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame896()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame897()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame898()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame899()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame900()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame901()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame902()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame903()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame904()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame905()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame906()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame907()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame908()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame909()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame910()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame911()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame912()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame913()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame914()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame915()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame916()
        {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }// end function

        public frame925()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame947()
        {
            this.mc.parent._EffectCtrl.bisha(true, "织姬2");
            return;
        }// end function

        public frame994()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame999()
        {
            this.mc.parent._mcctrl.fire("cbs1atm", {x:20, y:0, hold:3, hits:1});
            return;
        }// end function

        public frame1003()
        {
            this.mc.parent._mcctrl.fire("cbs1atm", {x:20, y:0, hold:3, hits:1});
            return;
        }// end function

        public frame1007()
        {
            this.mc.parent._mcctrl.fire("cbs2atm", {x:20, y:0, hold:2, hits:1});
            return;
        }// end function

        public frame1011()
        {
            this.mc.parent._mcctrl.fire("cbs2atm", {x:20, hold:2, hits:1});
            return;
        }// end function

        public frame1015()
        {
            this.mc.parent._mcctrl.fire("cbs2atm", {x:20, y:0, hold:2, hits:1});
            return;
        }// end function

        public frame1019()
        {
            this.mc.parent._mcctrl.fire("cbs2atm", {x:20, hold:2, hits:1});
            return;
        }// end function

        public frame1023()
        {
            this.mc.parent._mcctrl.fire("cbs3atm", {x:20, hold:2, hits:1});
            return;
        }// end function

        public frame1115()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame1133()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function
    }
}