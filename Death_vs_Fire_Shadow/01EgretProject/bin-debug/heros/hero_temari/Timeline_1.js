var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_temari;
(function (hero_temari) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                13, this.frame14, 19, this.frame20, 22, this.frame23, 26, this.frame27, 31, this.frame32, 37, this.frame38, 42, this.frame43, 70, this.frame71, 84, this.frame85, 90, this.frame91, 96, this.frame97, 113, this.frame114, 114, this.frame115, 116, this.frame117, 125, this.frame126, 177, this.frame178, 183, this.frame184, 190, this.frame191, 198, this.frame199, 206, this.frame207, 213, this.frame214, 220, this.frame221, 228, this.frame229, 241, this.frame242, 251, this.frame252, 258, this.frame259, 263, this.frame264, 279, this.frame280, 284, this.frame285, 287, this.frame288, 299, this.frame300, 309, this.frame310, 328, this.frame329, 356, this.frame357, 362, this.frame363, 389, this.frame390, 390, this.frame391, 393, this.frame394, 416, this.frame417, 428, this.frame429, 437, this.frame438, 449, this.frame450, 456, this.frame457, 494, this.frame495, 497, this.frame498, 499, this.frame500, 501, this.frame502, 519, this.frame520, 530, this.frame531, 542, this.frame543, 551, this.frame552, 575, this.frame576, 592, this.frame593, 608, this.frame609, 611, this.frame612, 616, this.frame617, 618, this.frame619, 643, this.frame644, 680, this.frame681, 699, this.frame700, 707, this.frame708, 732, this.frame733, 783, this.frame784, 813, this.frame814, 815, this.frame816, 920, this.frame921, 925, this.frame926, 1028, this.frame1029, 1048, this.frame1049, 1097, this.frame1098, 1177, this.frame1178, 1205, this.frame1206
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame20 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame32 = function () {
            this.mc.parent._mcctrl.dash(3.5);
            return;
        }; // end function
        Timeline_1.prototype.frame38 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame43 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame71 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame85 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame91 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setAirMove(false);
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame114 = function () {
            this.mc.parent._mcctrl.move(-7, -7);
            this.mc.parent._mcctrl.damping(0.7, 0.7);
            return;
        }; // end function
        Timeline_1.prototype.frame115 = function () {
            this.mc.parent._mcctrl.fire("tzatm", { x: 10, y: 10, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame117 = function () {
            this.mc.parent._mcctrl.fire("tz1atm", { x: 10, y: 10, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame126 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame178 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame184 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame191 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame199 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame207 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame221 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame229 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame242 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame259 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame264 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame280 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame285 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame288 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame300 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame310 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame357 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame363 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame390 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame391 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame394 = function () {
            this.mc.parent._mcctrl.fire("zh11atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame417 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame429 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame438 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame450 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame457 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame495 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame498 = function () {
            this.mc.parent._mcctrl.fire("zh3atm", { x: 15, y: -15, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame500 = function () {
            this.mc.parent._mcctrl.fire("zh31atm", { x: 15, y: -15, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame502 = function () {
            this.mc.parent._mcctrl.fire("zh32atm", { x: 15, y: -15, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame520 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame531 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame543 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame552 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame576 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame593 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "手鞠1");
            return;
        }; // end function
        Timeline_1.prototype.frame609 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame612 = function () {
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.move(30, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame617 = function () {
            this.mc.parent._FighterCtrler.setCross(false);
            this.mc.parent._mcctrl.damping(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame619 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame644 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame681 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "手鞠1");
            return;
        }; // end function
        Timeline_1.prototype.frame700 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame708 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame733 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame784 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "手鞠1");
            return;
        }; // end function
        Timeline_1.prototype.frame814 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame816 = function () {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame921 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_1.prototype.frame926 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1029 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1049 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1098 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1178 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1206 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_temari.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_temari.Timeline_1");
})(hero_temari || (hero_temari = {}));
//# sourceMappingURL=Timeline_1.js.map