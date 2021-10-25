var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_gaara;
(function (hero_gaara) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                11, this.frame12, 17, this.frame18, 22, this.frame23, 25, this.frame26, 27, this.frame28, 34, this.frame35, 39, this.frame40, 69, this.frame70, 81, this.frame82, 86, this.frame87, 90, this.frame91, 95, this.frame96, 96, this.frame97, 104, this.frame105, 112, this.frame113, 131, this.frame132, 136, this.frame137, 140, this.frame141, 152, this.frame153, 159, this.frame160, 169, this.frame170, 173, this.frame174, 187, this.frame188, 193, this.frame194, 209, this.frame210, 224, this.frame225, 225, this.frame226, 245, this.frame246, 260, this.frame261, 268, this.frame269, 269, this.frame270, 274, this.frame275, 280, this.frame281, 286, this.frame287, 299, this.frame300, 321, this.frame322, 323, this.frame324, 328, this.frame329, 338, this.frame339, 345, this.frame346, 357, this.frame358, 365, this.frame366, 393, this.frame394, 401, this.frame402, 405, this.frame406, 421, this.frame422, 431, this.frame432, 436, this.frame437, 451, this.frame452, 459, this.frame460, 470, this.frame471, 477, this.frame478, 504, this.frame505, 519, this.frame520, 531, this.frame532, 532, this.frame533, 534, this.frame535, 552, this.frame553, 553, this.frame554, 572, this.frame573, 597, this.frame598, 603, this.frame604, 623, this.frame624, 644, this.frame645, 659, this.frame660, 679, this.frame680, 692, this.frame693, 708, this.frame709, 711, this.frame712, 712, this.frame713, 721, this.frame722, 741, this.frame742, 746, this.frame747, 767, this.frame768, 786, this.frame787, 824, this.frame825, 826, this.frame827, 833, this.frame834, 836, this.frame837, 865, this.frame866, 867, this.frame868, 886, this.frame887, 936, this.frame937, 966, this.frame967, 1054, this.frame1055, 1074, this.frame1075, 1172, this.frame1173, 1213, this.frame1214, 1241, this.frame1242
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame18 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame26 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame28 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame40 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame70 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame82 = function () {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame91 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame96 = function () {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame105 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame113 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame132 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }; // end function
        Timeline_1.prototype.frame137 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame141 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame153 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame160 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame170 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame174 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1("招11");
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame194 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame210 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame225 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame226 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame246 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame261 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame269 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame270 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("zzz1", { x: { followTarget: true, offset: 0, range: [0, 250] } });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_gaara.Timeline_7(this.mc.parent._mcctrl.getAttacker("zzz1", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame275 = function () {
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame281 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_1.prototype.frame287 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame300 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame322 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame324 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("招11");
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 5, max: 30, add: 0.5 }, y: 0, hold: 3, hits: -1 });
            return;
        }; // end function
        Timeline_1.prototype.frame339 = function () {
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame346 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame358 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame366 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame394 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame402 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame406 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame422 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame432 = function () {
            this.mc.parent._EffectCtrl.shine(9074006);
            return;
        }; // end function
        Timeline_1.prototype.frame437 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame452 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame460 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame471 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame478 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame505 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame520 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "我爱罗1");
            return;
        }; // end function
        Timeline_1.prototype.frame532 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame533 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame535 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("zzzz", { x: { followTarget: true, offset: 0, range: [0, 400] } });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_gaara.Timeline_9(this.mc.parent._mcctrl.getAttacker("zzzz", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame553 = function () {
            if (!this.mc.parent._FighterCtrler.justHit("bs1")) {
                this.mc.parent._mcctrl.gotoAndPlay("必杀1");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame554 = function () {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            this.zz = this.mc.parent._mcctrl.getAttacker("zzzz");
            if (this.zz) {
                this.zz.gotoAndPlay("fly");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame573 = function () {
            this.zz1 = this.mc.parent._mcctrl.getAttacker("zzzz");
            if (this.zz1) {
                this.zz1.gotoAndPlay("boom");
            }
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame598 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame604 = function () {
            this.mc.parent._mcctrl.endAct();
            this.zz2 = this.mc.parent._mcctrl.getAttacker("zzzz");
            if (this.zz2) {
                this.zz2.gotoAndPlay("miss");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame624 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame645 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "我爱罗1");
            return;
        }; // end function
        Timeline_1.prototype.frame660 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame680 = function () {
            this.mc.parent._EffectCtrl.shine(9074006);
            return;
        }; // end function
        Timeline_1.prototype.frame693 = function () {
            this.justHit = this.mc.parent._FighterCtrler.justHit("sbs3");
            if (this.justHit) {
                this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc" });
                if (this.mc.parent._FighterCtrler.target) {
                    this.mc.parent._FighterCtrler.target.visible = false;
                }
            }
            return;
        }; // end function
        Timeline_1.prototype.frame709 = function () {
            if (!this.justHit) {
                this.mc.parent._mcctrl.gotoAndPlay("上必杀2");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame712 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame713 = function () {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = true;
            }
            return;
        }; // end function
        Timeline_1.prototype.frame722 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame742 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame747 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame768 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame787 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "我爱罗2");
            return;
        }; // end function
        Timeline_1.prototype.frame825 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_1.prototype.frame827 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("bsmc", { x: { followTarget: true, offset: 10, range: [0, 500] }, y: { followTarget: true, offset: -15, range: [-250, 250] }, applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_gaara.Timeline_11(this.mc.parent._mcctrl.getAttacker("bsmc", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame834 = function () {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀HIT", false, false);
            return;
        }; // end function
        Timeline_1.prototype.frame837 = function () {
            this.bsmc1 = this.mc.parent._mcctrl.getAttacker("bsmc");
            if (this.bsmc1) {
                this.bsmc1.gotoAndPlay("miss");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame866 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame868 = function () {
            this.mc.parent._FighterCtrler.setTargetVelocity(0, -3);
            return;
        }; // end function
        Timeline_1.prototype.frame887 = function () {
            this.bsmc = this.mc.parent._mcctrl.getAttacker("bsmc");
            if (this.bsmc) {
                this.bsmc.gotoAndPlay("start");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame937 = function () {
            if (this.bsmc) {
                this.bsmc.gotoAndPlay("big");
            }
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame967 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1055 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1075 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1173 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1214 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1242 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_gaara.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_gaara.Timeline_1");
})(hero_gaara || (hero_gaara = {}));
//# sourceMappingURL=Timeline_1.js.map