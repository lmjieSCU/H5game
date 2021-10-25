var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*nazi主骨骼动画对应的帧事件
*/
var hero_Asuna;
(function (hero_Asuna) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 19, this.frame20, 25, this.frame26, 34, this.frame35, 45, this.frame46, 48, this.frame49, 78, this.frame79, 86, this.frame87, 93, this.frame94, 97, this.frame98, 102, this.frame103, 117, this.frame118, 121, this.frame122, 128, this.frame129, 134, this.frame135, 139, this.frame140, 146, this.frame147, 152, this.frame153, 158, this.frame159, 163, this.frame164, 165, this.frame166, 169, this.frame170, 176, this.frame177, 187, this.frame188, 190, this.frame191, 203, this.frame204, 207, this.frame208, 209, this.frame210, 212, this.frame213, 220, this.frame221, 224, this.frame225, 242, this.frame243, 243, this.frame244, 257, this.frame258, 281, this.frame282, 302, this.frame303, 306, this.frame307, 316, this.frame317, 317, this.frame318, 342, this.frame343, 344, this.frame345, 361, this.frame362, 386, this.frame387, 415, this.frame416, 426, this.frame427, 450, this.frame451, 461, this.frame462, 462, this.frame463, 463, this.frame464, 493, this.frame494, 494, this.frame495, 559, this.frame560, 560, this.frame561, 611, this.frame612, 614, this.frame615, 630, this.frame631, 635, this.frame636, 659, this.frame660, 686, this.frame687, 772, this.frame773, 792, this.frame793, 862, this.frame863, 903, this.frame904, 931, this.frame932, 941, this.frame942, 943, this.frame944, 950, this.frame951, 961, this.frame962, 963, this.frame964, 964, this.frame965, 966, this.frame967, 970, this.frame971, 978, this.frame979, 987, this.frame988, 988, this.frame989, 989, this.frame990, 1004, this.frame1005, 1022, this.frame1023, 1029, this.frame1030, 1041, this.frame1042, 1042, this.frame1043, 1050, this.frame1051, 1054, this.frame1055, 1068, this.frame1069, 1091, this.frame1092, 1093, this.frame1094, 1095, this.frame1096, 1102, this.frame1103, 1127, this.frame1128, 1129, this.frame1130, 1131, this.frame1132, 1155, this.frame1156, 1159, this.frame1160, 1167, this.frame1168, 1168, this.frame1169, 1170, this.frame1171, 1176, this.frame1177, 1181, this.frame1182, 1188, this.frame1189, 1194, this.frame1195, 1200, this.frame1201, 1205, this.frame1206, 1207, this.frame1208, 1211, this.frame1212, 1218, this.frame1219, 1229, this.frame1230, 1231, this.frame1232, 1233, this.frame1234, 1243, this.frame1244, 1265, this.frame1266, 1267, this.frame1268, 1268, this.frame1269, 1276, this.frame1277, 1280, this.frame1281, 1288, this.frame1289, 1299, this.frame1300, 1324, this.frame1325, 1354, this.frame1355, 1355, this.frame1356, 1366, this.frame1367, 1369, this.frame1370, 1421, this.frame1422, 1472, this.frame1473, 1474, this.frame1475, 1498, this.frame1499, 1509, this.frame1510, 1510, this.frame1511, 1511, this.frame1512, 1513, this.frame1514, 1537, this.frame1538, 1548, this.frame1549, 1549, this.frame1550, 1550, this.frame1551, 1552, this.frame1553, 1561, this.frame1562, 1570, this.frame1571, 1572, this.frame1573, 1574, this.frame1575, 1581, this.frame1582, 1584, this.frame1585, 1606, this.frame1607, 1608, this.frame1609, 1609, this.frame1610, 1617, this.frame1618, 1621, this.frame1622, 1624, this.frame1625, 1640, this.frame1641, 1641, this.frame1642, 1649, this.frame1650, 1653, this.frame1654, 1656, this.frame1657, 1672, this.frame1673, 1702, this.frame1703, 1703, this.frame1704, 1728, this.frame1729, 1748, this.frame1749, 1749, this.frame1750, 1820, this.frame1821, 1822, this.frame1823, 1831, this.frame1832, 1840, this.frame1841, 1842, this.frame1843, 1844, this.frame1845, 1854, this.frame1855, 1876, this.frame1877]);
        }
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame20 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame26 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._EffectCtrl.shadow(255, 204, 51);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame46 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame49 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame79 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame94 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame103 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }; // end function
        Timeline_1.prototype.frame118 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame122 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame129 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame135 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame140 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame153 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame159 = function () {
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame164 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame166 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame170 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame177 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame191 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame204 = function () {
            this.mc.parent._mcctrl.setHitTarget("mmp3atm", "千鸟");
            return;
        }; // end function
        Timeline_1.prototype.frame208 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame210 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame213 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame221 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame225 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame243 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame244 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame258 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame282 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame303 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame307 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame317 = function () {
            this.mc.parent._mcctrl.endAct();
            if (this.mc.parent._FighterCtrler.justHit("zh3")) {
                this.mc.parent._mcctrl.setZhao1("电疗");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame318 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(20, 0, true);
            this.mc.parent._mcctrl.gotoAndPlay("砍5");
            return;
        }; // end function
        Timeline_1.prototype.frame343 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame345 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame362 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame387 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame416 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame427 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "鹰佐1");
            return;
        }; // end function
        Timeline_1.prototype.frame451 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame462 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame463 = function () {
            if (this.mc.parent._FighterCtrler.justHit("bs")) {
                this.mc.parent._mcctrl.gotoAndPlay("之后");
            }
            else {
                this.mc.parent._mcctrl.idle();
            }
            return;
        }; // end function
        Timeline_1.prototype.frame464 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鹰佐1");
            return;
        }; // end function
        Timeline_1.prototype.frame494 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame495 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("fensheng", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: 0 }, applyG: true });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_Asuna.Timeline_472(this.mc.parent._mcctrl.getAttacker("fensheng", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame560 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame561 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame612 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame615 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "鹰佐3");
            return;
        }; // end function
        Timeline_1.prototype.frame631 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("tongren", { x: { moveToTarget: false, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_Asuna.Timeline_631(this.mc.parent._mcctrl.getAttacker("tongren", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame636 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame660 = function () {
            if (this.mc.parent._FighterCtrler.justHit("cbs")) {
                this.mc.parent._mcctrl.setBishaUP("上必杀", 0);
                this.mc.parent._mcctrl.setBisha("必杀", 0);
                this.mc.parent._mcctrl.setBishaSUPER("圣母", 0);
            }
            return;
        }; // end function
        Timeline_1.prototype.frame687 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("我是个垃圾");
            return;
        }; // end function
        Timeline_1.prototype.frame773 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame793 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame863 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame904 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame932 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame942 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame944 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame951 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame962 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame964 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.6);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame965 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame967 = function () {
            this.mc.parent._mcctrl.fire("mmpatm", { x: { start: 20, hit: 1 }, y: 0, hold: 1.5, hits: 1, hp: 200 });
            return;
        }; // end function
        Timeline_1.prototype.frame971 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame979 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame988 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame989 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.6);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame990 = function () {
            this.mc.parent._mcctrl.addQi(5);
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("tongren", { x: { moveToTarget: false, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_Asuna.Timeline_990(this.mc.parent._mcctrl.getAttacker("tongren", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame1005 = function () {
            this.mc.parent._mcctrl.setZhao2("招233");
            this.mc.parent._mcctrl.setBisha();
            if (this.mc.parent._FighterCtrler.justHit("zh1")) {
                this.mc.parent._mcctrl.setAttack("砍3");
                this.mc.parent._mcctrl.setZhao1("电疗");
            }
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1023 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1030 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1042 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame1043 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame1051 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1055 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame1069 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1092 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1094 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1096 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1103 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame1128 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1130 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1132 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鹰佐1");
            return;
        }; // end function
        Timeline_1.prototype.frame1156 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1160 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1168 = function () {
            if (this.mc.parent._FighterCtrler.justHit("bs")) {
                this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
                this.mc.parent._mcctrl.gotoAndPlay("哈哈");
            }
            else {
                this.mc.parent._mcctrl.idle();
            }
            return;
        }; // end function
        Timeline_1.prototype.frame1169 = function () {
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc" });
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1171 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1177 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1182 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍233");
            return;
        }; // end function
        Timeline_1.prototype.frame1189 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1195 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1201 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍2333");
            return;
        }; // end function
        Timeline_1.prototype.frame1206 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1208 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1212 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1219 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍23333");
            return;
        }; // end function
        Timeline_1.prototype.frame1230 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1232 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1234 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1244 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍技233333");
            return;
        }; // end function
        Timeline_1.prototype.frame1266 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1268 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame1269 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame1277 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1281 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame1289 = function () {
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }; // end function
        Timeline_1.prototype.frame1300 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("之后的事情");
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1325 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "");
            return;
        }; // end function
        Timeline_1.prototype.frame1355 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame1356 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("fensheng", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: 0 }, applyG: true });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_Asuna.Timeline_1356(this.mc.parent._mcctrl.getAttacker("fensheng", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame1367 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1370 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1422 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1473 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1475 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鹰佐1");
            return;
        }; // end function
        Timeline_1.prototype.frame1499 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1510 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1511 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1512 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1514 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "鹰佐3");
            return;
        }; // end function
        Timeline_1.prototype.frame1538 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1549 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1550 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame1551 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._FighterCtrler.setDirectToTarget();
            return;
        }; // end function
        Timeline_1.prototype.frame1553 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1562 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("我是你爸爸");
            return;
        }; // end function
        Timeline_1.prototype.frame1571 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1573 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1575 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1582 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame1585 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("mmpxxoo");
            return;
        }; // end function
        Timeline_1.prototype.frame1607 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame1609 = function () {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }; // end function
        Timeline_1.prototype.frame1610 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame1618 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1622 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1625 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("mmpxxoo2");
            return;
        }; // end function
        Timeline_1.prototype.frame1641 = function () {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }; // end function
        Timeline_1.prototype.frame1642 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame1650 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1654 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1657 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("虐狗");
            return;
        }; // end function
        Timeline_1.prototype.frame1673 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "");
            return;
        }; // end function
        Timeline_1.prototype.frame1703 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame1704 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("fensheng", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: 0 }, applyG: true });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_Asuna.Timeline_1704(this.mc.parent._mcctrl.getAttacker("fensheng", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame1729 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("最后了把");
            return;
        }; // end function
        Timeline_1.prototype.frame1749 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1750 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1821 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(10, 0, true);
            this.mc.parent._FighterCtrler.setDirectToTarget();
            return;
        }; // end function
        Timeline_1.prototype.frame1823 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1832 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("没有呢");
            return;
        }; // end function
        Timeline_1.prototype.frame1841 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1843 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame1845 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1855 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame1877 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_Asuna.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_Asuna.Timeline_1");
})(hero_Asuna || (hero_Asuna = {}));
//# sourceMappingURL=Timeline_1.js.map