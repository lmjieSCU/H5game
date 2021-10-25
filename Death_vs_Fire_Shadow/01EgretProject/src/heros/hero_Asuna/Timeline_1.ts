/*
*nazi主骨骼动画对应的帧事件
*/
namespace hero_Asuna{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[11, this.frame12, 19, this.frame20, 25, this.frame26, 34, this.frame35, 45, this.frame46, 48, this.frame49, 78, this.frame79, 86, this.frame87, 93, this.frame94, 97, this.frame98, 102, this.frame103, 117, this.frame118, 121, this.frame122, 128, this.frame129, 134, this.frame135, 139, this.frame140, 146, this.frame147, 152, this.frame153, 158, this.frame159, 163, this.frame164, 165, this.frame166, 169, this.frame170, 176, this.frame177, 187, this.frame188, 190, this.frame191, 203, this.frame204, 207, this.frame208, 209, this.frame210, 212, this.frame213, 220, this.frame221, 224, this.frame225, 242, this.frame243, 243, this.frame244, 257, this.frame258, 281, this.frame282, 302, this.frame303, 306, this.frame307, 316, this.frame317, 317, this.frame318, 342, this.frame343, 344, this.frame345, 361, this.frame362, 386, this.frame387, 415, this.frame416, 426, this.frame427, 450, this.frame451, 461, this.frame462, 462, this.frame463, 463, this.frame464, 493, this.frame494, 494, this.frame495, 559, this.frame560, 560, this.frame561, 611, this.frame612, 614, this.frame615, 630, this.frame631, 635, this.frame636, 659, this.frame660, 686, this.frame687, 772, this.frame773, 792, this.frame793, 862, this.frame863, 903, this.frame904, 931, this.frame932, 941, this.frame942, 943, this.frame944, 950, this.frame951, 961, this.frame962, 963, this.frame964, 964, this.frame965, 966, this.frame967, 970, this.frame971, 978, this.frame979, 987, this.frame988, 988, this.frame989, 989, this.frame990, 1004, this.frame1005, 1022, this.frame1023, 1029, this.frame1030, 1041, this.frame1042, 1042, this.frame1043, 1050, this.frame1051, 1054, this.frame1055, 1068, this.frame1069, 1091, this.frame1092, 1093, this.frame1094, 1095, this.frame1096, 1102, this.frame1103, 1127, this.frame1128, 1129, this.frame1130, 1131, this.frame1132, 1155, this.frame1156, 1159, this.frame1160, 1167, this.frame1168, 1168, this.frame1169, 1170, this.frame1171, 1176, this.frame1177, 1181, this.frame1182, 1188, this.frame1189, 1194, this.frame1195, 1200, this.frame1201, 1205, this.frame1206, 1207, this.frame1208, 1211, this.frame1212, 1218, this.frame1219, 1229, this.frame1230, 1231, this.frame1232, 1233, this.frame1234, 1243, this.frame1244, 1265, this.frame1266, 1267, this.frame1268, 1268, this.frame1269, 1276, this.frame1277, 1280, this.frame1281, 1288, this.frame1289, 1299, this.frame1300, 1324, this.frame1325, 1354, this.frame1355, 1355, this.frame1356, 1366, this.frame1367, 1369, this.frame1370, 1421, this.frame1422, 1472, this.frame1473, 1474, this.frame1475, 1498, this.frame1499, 1509, this.frame1510, 1510, this.frame1511, 1511, this.frame1512, 1513, this.frame1514, 1537, this.frame1538, 1548, this.frame1549, 1549, this.frame1550, 1550, this.frame1551, 1552, this.frame1553, 1561, this.frame1562, 1570, this.frame1571, 1572, this.frame1573, 1574, this.frame1575, 1581, this.frame1582, 1584, this.frame1585, 1606, this.frame1607, 1608, this.frame1609, 1609, this.frame1610, 1617, this.frame1618, 1621, this.frame1622, 1624, this.frame1625, 1640, this.frame1641, 1641, this.frame1642, 1649, this.frame1650, 1653, this.frame1654, 1656, this.frame1657, 1672, this.frame1673, 1702, this.frame1703, 1703, this.frame1704, 1728, this.frame1729, 1748, this.frame1749, 1749, this.frame1750, 1820, this.frame1821, 1822, this.frame1823, 1831, this.frame1832, 1840, this.frame1841, 1842, this.frame1843, 1844, this.frame1845, 1854, this.frame1855, 1876, this.frame1877]);
    }

      frame12()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame20()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame26()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame35()
        {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._EffectCtrl.shadow(255, 204, 51);
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
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame94()
        {
            this.mc.parent._mcctrl.stopMove();
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
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }// end function

        frame118()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame122()
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
            this.mc.parent._mcctrl.setBishaSUPER();
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
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame153()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame159()
        {
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame164()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame166()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame170()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame177()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame188()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame191()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame204()
        {
            this.mc.parent._mcctrl.setHitTarget("mmp3atm", "千鸟");
            return;
        }// end function

        frame208()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame210()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame213()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame225()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame243()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame244()
        {
            return;
        }// end function

        frame258()
        {
            return;
        }// end function

        frame282()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame303()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame307()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame317()
        {
            this.mc.parent._mcctrl.endAct();
            if (this.mc.parent._FighterCtrler.justHit("zh3"))
            {
                this.mc.parent._mcctrl.setZhao1("电疗");
            }
            return;
        }// end function

        frame318()
        {
            this.mc.parent._FighterCtrler.moveToTarget(20, 0, true);
            this.mc.parent._mcctrl.gotoAndPlay("砍5");
            return;
        }// end function

        frame343()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame345()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame362()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame387()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame416()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame427()
        {
            this.mc.parent._EffectCtrl.bisha(true, "鹰佐1");
            return;
        }// end function

        frame451()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }// end function

        frame462()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame463()
        {
            if (this.mc.parent._FighterCtrler.justHit("bs"))
            {
                this.mc.parent._mcctrl.gotoAndPlay("之后");
            }
            else
            {
                this.mc.parent._mcctrl.idle();
            }
            return;
        }// end function

        frame464()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鹰佐1");
            return;
        }// end function

        frame494()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame495()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("fensheng", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: 0 }, applyG: true });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_472(this.mc.parent._mcctrl.getAttacker("fensheng", shuilong_mc.hashCode))
            return;
        }// end function

        frame560()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame561()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame612()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame615()
        {
            this.mc.parent._EffectCtrl.bisha(true, "鹰佐3");
            return;
        }// end function

        frame631()
        {
            this.mc.parent._EffectCtrl.endBisha();
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("tongren", { x: { moveToTarget: false, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_631(this.mc.parent._mcctrl.getAttacker("tongren", shuilong_mc.hashCode))
            return;
        }// end function

        frame636()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame660()
        {
            if (this.mc.parent._FighterCtrler.justHit("cbs"))
            {
                this.mc.parent._mcctrl.setBishaUP("上必杀", 0);
                this.mc.parent._mcctrl.setBisha("必杀", 0);
                this.mc.parent._mcctrl.setBishaSUPER("圣母", 0);
            }
            return;
        }// end function

        frame687()
        {
            this.mc.parent._mcctrl.gotoAndPlay("我是个垃圾");
            return;
        }// end function

        frame773()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame793()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame863()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame904()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame932()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame942()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame944()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame951()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame962()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame964()
        {
            this.mc.parent._mcctrl.dampingPercent(0.6);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame965()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame967()
        {
            this.mc.parent._mcctrl.fire("mmpatm", {x:{start:20, hit:1}, y:0, hold:1.5, hits:1, hp:200});
            return;
        }// end function

        frame971()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        frame979()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame988()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame989()
        {
            this.mc.parent._mcctrl.dampingPercent(0.6);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame990()
        {
            this.mc.parent._mcctrl.addQi(5);
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("tongren", { x: { moveToTarget: false, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_990(this.mc.parent._mcctrl.getAttacker("tongren", shuilong_mc.hashCode))

            return;
        }// end function

        frame1005()
        {
            this.mc.parent._mcctrl.setZhao2("招233");
            this.mc.parent._mcctrl.setBisha();
            if (this.mc.parent._FighterCtrler.justHit("zh1"))
            {
                this.mc.parent._mcctrl.setAttack("砍3");
                this.mc.parent._mcctrl.setZhao1("电疗");
            }
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1023()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1030()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1042()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame1043()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame1051()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            return;
        }// end function

        frame1055()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame1069()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1092()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1094()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1096()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame1103()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame1128()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1130()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1132()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鹰佐1");
            return;
        }// end function

        frame1156()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }// end function

        frame1160()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1168()
        {
            if (this.mc.parent._FighterCtrler.justHit("bs"))
            {
                this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
                this.mc.parent._mcctrl.gotoAndPlay("哈哈");
            }
            else
            {
                this.mc.parent._mcctrl.idle();
            }
            return;
        }// end function

        frame1169()
        {
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc"});
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1171()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame1177()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1182()
        {
            this.mc.parent._mcctrl.gotoAndPlay("砍233");
            return;
        }// end function

        frame1189()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame1195()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1201()
        {
            this.mc.parent._mcctrl.gotoAndPlay("砍2333");
            return;
        }// end function

        frame1206()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1208()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1212()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame1219()
        {
            this.mc.parent._mcctrl.gotoAndPlay("砍23333");
            return;
        }// end function

        frame1230()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1232()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1234()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame1244()
        {
            this.mc.parent._mcctrl.gotoAndPlay("砍技233333");
            return;
        }// end function

        frame1266()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1268()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame1269()
        {
            return;
        }// end function

        frame1277()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            return;
        }// end function

        frame1281()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame1289()
        {
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }// end function

        frame1300()
        {
            this.mc.parent._mcctrl.gotoAndPlay("之后的事情");
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1325()
        {
            this.mc.parent._EffectCtrl.bisha(false, "");
            return;
        }// end function

        frame1355()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame1356()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("fensheng", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: 0 }, applyG: true });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_1356(this.mc.parent._mcctrl.getAttacker("fensheng", shuilong_mc.hashCode))
            return;
        }// end function

        frame1367()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1370()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1422()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1473()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1475()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鹰佐1");
            return;
        }// end function

        frame1499()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(5, 0);
            return;
        }// end function

        frame1510()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1511()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1512()
        {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1514()
        {
            this.mc.parent._EffectCtrl.bisha(true, "鹰佐3");
            return;
        }// end function

        frame1538()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame1549()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1550()
        {
            return;
        }// end function

        frame1551()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._FighterCtrler.setDirectToTarget();
            return;
        }// end function

        frame1553()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame1562()
        {
            this.mc.parent._mcctrl.gotoAndPlay("我是你爸爸");
            return;
        }// end function

        frame1571()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1573()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1575()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame1582()
        {
            return;
        }// end function

        frame1585()
        {
            this.mc.parent._mcctrl.gotoAndPlay("mmpxxoo");
            return;
        }// end function

        frame1607()
        {
            return;
        }// end function

        frame1609()
        {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }// end function

        frame1610()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame1618()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }// end function

        frame1622()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1625()
        {
            this.mc.parent._mcctrl.gotoAndPlay("mmpxxoo2");
            return;
        }// end function

        frame1641()
        {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }// end function

        frame1642()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame1650()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }// end function

        frame1654()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1657()
        {
            this.mc.parent._mcctrl.gotoAndPlay("虐狗");
            return;
        }// end function

        frame1673()
        {
            this.mc.parent._EffectCtrl.bisha(false, "");
            return;
        }// end function

        frame1703()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame1704()
        {
            let shuilong_mc= this.mc.parent._mcctrl.addAttacker("fensheng", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:true, offset:0}, applyG:true});
             if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_1704(this.mc.parent._mcctrl.getAttacker("fensheng", shuilong_mc.hashCode))
            return;
        }// end function

        frame1729()
        {
            this.mc.parent._mcctrl.gotoAndPlay("最后了把");
            return;
        }// end function

        frame1749()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1750()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1821()
        {
            this.mc.parent._FighterCtrler.moveToTarget(10, 0, true);
            this.mc.parent._FighterCtrler.setDirectToTarget();
            return;
        }// end function

        frame1823()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame1832()
        {
            this.mc.parent._mcctrl.gotoAndPlay("没有呢");
            return;
        }// end function

        frame1841()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1843()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        frame1845()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame1855()
        {
            return;
        }// end function

        frame1877()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

    }
}