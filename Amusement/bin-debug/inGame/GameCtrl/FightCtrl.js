var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**战斗逻辑控制器
 * 刷新金币数,关卡数,时间,分数
 * 负责加分
 * 重置金币数,关卡数,时间,分数
 */
var FightCtrl = (function () {
    function FightCtrl() {
        this.eatRemoved = false;
        this.dropCount = 0;
        this.tipCount = 0;
        this.tipDelay = 400;
        this.matchCountOnceSwap = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        //
        this.newGamed = false;
        this.timeBegined = false;
        this.timeFrameCount = 0;
        this.kb = new KeyBoard();
        return;
    }
    FightCtrl.prototype.render = function () {
        this.update();
        this.CandyShakerender();
        this.onTimer();
    };
    FightCtrl.prototype.CandyShakerender = function () {
        for (var row = 0; row < GameConst.ROW_COUNT; row++) {
            for (var col = 0; col < GameConst.COL_COUNT; col++) {
                if (this.candys[row][col] != null) {
                    this.candys[row][col].Shakerender();
                }
            }
        }
    };
    FightCtrl.prototype.reset = function () {
    };
    FightCtrl.prototype.getTransportCandy = function (arg1) {
        var loc1 = arg1 - 9;
        var loc2 = this.currentLevel.entryAndExit;
        for (var loc3 = 0; loc3 < GameConst.ROW_COUNT; loc3++) {
            for (var loc4 = 0; loc4 < GameConst.COL_COUNT; loc4++) {
                if (loc2[loc3][loc4] == loc1) {
                    if (this.candys[loc3][loc4] != null) {
                        return this.candys[loc3][loc4];
                    }
                }
            }
        }
        return null;
    };
    /**该位置是否存在限制
     * 限制为ice,lock,stones,eat和monster
     */
    FightCtrl.prototype.checkIsBlock = function (arg1, arg2) {
        if (!(this.ices[arg1][arg2] == null) || !(this.locks[arg1][arg2] == null) || !(this.stones[arg1][arg2] == null) || !(this.eats[arg1][arg2] == null) || !(this.monsters[arg1][arg2] == null)) {
            return true;
        }
        return false;
    };
    /**判断是否存在可连接
     * 返回数组为可匹配candys
     */
    FightCtrl.prototype.checkConnectable = function () {
        var loc2 = null;
        var loc3 = new Array();
        for (var loc4 = 0; loc4 < GameConst.ROW_COUNT; loc4++) {
            for (var loc5 = 0; loc5 < GameConst.COL_COUNT; loc5++) {
                if (this.candys[loc4][loc5] != null) {
                    loc2 = this.checkMatches([loc4, loc5], [0, 1], [0, 2], [[0, 3], [-1, 2], [1, 2]]);
                    if (loc2.length >= 1) {
                        loc2.unshift(this.candys[loc4][loc5 + 2]);
                        loc3.push(loc2);
                    }
                    loc2 = this.checkMatches([loc4, loc5], [0, 1], [0, -1], [[0, -2], [-1, -1], [1, -1]]);
                    if (loc2.length >= 1) {
                        loc2.unshift(this.candys[loc4][(loc5 - 1)]);
                        loc3.push(loc2);
                    }
                    loc2 = this.checkMatches([loc4, loc5], [0, 2], [0, 1], [[-1, 1], [1, 1]]);
                    if (loc2.length >= 1) {
                        loc2.unshift(this.candys[loc4][loc5 + 1]);
                        loc3.push(loc2);
                    }
                    loc2 = this.checkMatches([loc4, loc5], [1, 0], [2, 0], [[3, 0], [2, -1], [2, 1]]);
                    if (loc2.length >= 1) {
                        loc2.unshift(this.candys[loc4 + 2][loc5]);
                        loc3.push(loc2);
                    }
                    loc2 = this.checkMatches([loc4, loc5], [1, 0], [-1, 0], [[-2, 0], [-1, -1], [-1, 1]]);
                    if (loc2.length >= 1) {
                        loc2.unshift(this.candys[(loc4 - 1)][loc5]);
                        loc3.push(loc2);
                    }
                    loc2 = this.checkMatches([loc4, loc5], [2, 0], [1, 0], [[1, -1], [1, 1]]);
                    if (loc2.length >= 3) {
                        loc2.unshift(this.candys[loc4 + 1][loc5]);
                        loc3.push(loc2);
                    }
                }
            }
        }
        return loc3;
    };
    /**arg1为待检测位置,检测是否匹配 */
    FightCtrl.prototype.checkMatches = function (arg1, arg2, arg3, arg4) {
        var loc10 = 0;
        var loc11 = 0;
        var loc2 = new Array();
        var loc3 = arg1[0];
        var loc4 = arg1[1];
        var loc5 = loc3 + arg2[0];
        var loc6 = loc4 + arg2[1];
        var loc7 = loc3 + arg3[0];
        var loc8 = loc4 + arg3[1];
        if (!this.isValidPos(loc5, loc6)) {
            return loc2;
        }
        if (this.candys[loc5][loc6] == null) {
            return loc2;
        }
        if (this.candys[loc5][loc6].color != this.candys[loc3][loc4].color) {
            return loc2;
        }
        if (this.checkIsBlock(loc5, loc6)) {
            return loc2;
        }
        if (!this.isValidPos(loc7, loc8)) {
            return loc2;
        }
        if (this.candys[loc7][loc8] == null) {
            return loc2;
        }
        if (this.checkIsBlock(loc7, loc8)) {
            return loc2;
        }
        for (var loc9 = 0; loc9 < arg4.length; loc9++) {
            loc10 = arg4[loc9][0] + loc3;
            loc11 = arg4[loc9][1] + loc4;
            if (this.isValidPos(loc10, loc11) && !(this.candys[loc10][loc11] == null)) {
                if (this.candys[loc3][loc4].color == this.candys[loc10][loc11].color && !this.checkIsBlock(loc10, loc11)) {
                    loc2.push(this.candys[loc10][loc11]);
                }
            }
        }
        return loc2;
    };
    /**上下左右 */
    FightCtrl.prototype.getNearIce = function (arg1, arg2) {
        var loc4 = 0;
        var loc5 = 0;
        var loc1 = new Array();
        var loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (var loc3 = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.ices[loc4][loc5] != null) {
                    loc1.push(this.ices[loc4][loc5]);
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.getNearStone = function (arg1, arg2) {
        var loc4 = 0;
        var loc5 = 0;
        var loc1 = new Array();
        var loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (var loc3 = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.stones[loc4][loc5] != null) {
                    loc1.push(this.stones[loc4][loc5]);
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.getNearEat = function (arg1, arg2) {
        var loc4 = 0;
        var loc5 = 0;
        var loc1 = new Array();
        var loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (var loc3 = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.eats[loc4][loc5] != null) {
                    loc1.push(this.eats[loc4][loc5]);
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.getNearMonster = function (arg1, arg2) {
        var loc4 = 0;
        var loc5 = 0;
        var loc1 = new Array();
        var loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (var loc3 = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.monsters[loc4][loc5] != null) {
                    loc1.push(this.monsters[loc4][loc5]);
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.getCandysByColorType = function (arg1) {
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (var loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                if (!(this.candys[loc2][loc3] == null) && this.candys[loc2][loc3].color == arg1) {
                    loc1.push(this.candys[loc2][loc3]);
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.getSpecialCandys = function () {
        var loc4 = null;
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (var loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                loc4 = this.candys[loc2][loc3];
                if (!(loc4 == null) && loc4.status > 0 && loc4.status < 5) {
                    loc1.push(loc4);
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.getNormalCandys = function () {
        var loc4 = null;
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (var loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                loc4 = this.candys[loc2][loc3];
                if (!(loc4 == null) && loc4.status == 0) {
                    loc1.push(loc4);
                }
            }
        }
        return loc1;
    };
    /**arg1为行数组,arg2为列数组
     * 返回所有以arg1[x]为行的candy和以arg2[y]为列的candy
     */
    FightCtrl.prototype.getCandysByRowsOrCols = function (arg1, arg2) {
        var loc2 = 0;
        var loc3 = 0;
        var loc4 = null;
        var loc1 = new Array();
        for (var loc5 = 0; loc5 < arg1.length; loc5++) {
            loc2 = arg1[loc5];
            if (!(loc2 < 0 || loc2 >= GameConst.ROW_COUNT)) {
                for (var loc3_1 = 0; loc3_1 < GameConst.COL_COUNT; loc3_1++) {
                    loc4 = this.candys[loc2][loc3_1];
                    if (!(loc4 == null) && !loc4.isFruit()) {
                        loc1.push(loc4);
                    }
                }
            }
        }
        for (var loc5 = 0; loc5 < arg2.length; loc5++) {
            loc3 = arg2[loc5];
            if (!(loc3 < 0 || loc3 >= GameConst.COL_COUNT)) {
                for (var loc2_1 = 0; loc2_1 < GameConst.ROW_COUNT; loc2_1++) {
                    loc4 = this.candys[loc2_1][loc3];
                    if (!(loc4 == null) && !loc4.isFruit()) {
                        loc1.push(loc4);
                    }
                }
            }
        }
        return loc1;
    };
    /**根据特殊candy的类型获得响应的candys位置
     * 水平candy：该行所有candys
     * 竖直candy：该列所有candys
     * 爆炸candy：周围12个位置的candys
     */
    FightCtrl.prototype.getRelativeCandysByStatus = function (arg1) {
        if (arg1.status == CandySpecialStatus.HORIZ) {
            return this.getCandysByRow(arg1.row);
        }
        if (arg1.status == CandySpecialStatus.VERT) {
            return this.getCandysByCol(arg1.col);
        }
        if (arg1.status == CandySpecialStatus.BOMB) {
            return this.getAroundCandys(arg1.row, arg1.col);
        }
        return [];
    };
    /**根据传入candy的row获得响应的candy[row][0~cols-1] */
    FightCtrl.prototype.getCandysByRow = function (arg1) {
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.COL_COUNT; loc2++) {
            loc1.push(new egret.Point(arg1, loc2));
        }
        return loc1;
    };
    /**根据传入candy的col获得响应的candy[0~rows-1][col] */
    FightCtrl.prototype.getCandysByCol = function (arg1) {
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            loc1.push(new egret.Point(loc2, arg1));
        }
        return loc1;
    };
    /**周围12个位置点 */
    FightCtrl.prototype.getAroundCandys = function (arg1, arg2) {
        var loc4 = 0;
        var loc5 = 0;
        var loc1 = [[0, -1], [0, -2], [0, 1], [0, 2], [-1, 0], [-2, 0], [1, 0], [2, 0], [1, -1], [1, 1], [-1, -1], [-1, 1]];
        var loc2 = new Array();
        for (var loc3 = 0; loc3 < loc1.length; loc3++) {
            loc4 = arg1 + loc1[loc3][0];
            loc5 = arg2 + loc1[loc3][1];
            if (loc4 > 0 && loc4 < GameConst.ROW_COUNT && loc5 > 0 && loc5 < GameConst.COL_COUNT) {
                loc2.push(new egret.Point(loc4, loc5));
            }
        }
        return loc2;
    };
    /**特殊交换时的响应candys */
    FightCtrl.prototype.getAroundCandys2 = function (arg1, arg2) {
        var loc4 = 0;
        var loc5 = 0;
        var loc6 = null;
        var loc7 = null;
        var loc8 = null;
        var loc1 = new Array();
        if (arg1.row != arg2.row) {
            if (arg1.col == arg2.col) {
                if (arg1.row < arg2.row) {
                    loc6 = new egret.Point(arg1.row, arg1.col);
                    loc7 = new egret.Point(arg2.row, arg2.col);
                }
                else {
                    loc6 = new egret.Point(arg2.row, arg2.col);
                    loc7 = new egret.Point(arg1.row, arg1.col);
                }
                for (var loc2 = 0; loc2 >= -3; loc2--) {
                    loc4 = loc6.y - 3 - loc2;
                    loc5 = loc6.y + 3 + loc2;
                    for (var loc3 = loc4; loc3 <= loc5; loc3++) {
                        if (this.isValidPos(loc6.x + loc2, loc3)) {
                            loc8 = this.candys[loc6.x + loc2][loc3];
                            if (loc8 != null) {
                                loc1.push(loc8);
                            }
                        }
                    }
                }
                for (var loc2 = 0; loc2 <= 3; loc2++) {
                    loc4 = loc7.y - 3 + loc2;
                    loc5 = loc7.y + 3 - loc2;
                    for (var loc3 = loc4; loc3 <= loc5; loc3++) {
                        if (this.isValidPos(loc7.x + loc2, loc3)) {
                            loc8 = this.candys[loc7.x + loc2][loc3];
                            if (loc8 != null) {
                                loc1.push(loc8);
                            }
                        }
                    }
                }
            }
        }
        else {
            if (arg1.col < arg2.col) {
                loc6 = new egret.Point(arg1.row, arg1.col);
                loc7 = new egret.Point(arg2.row, arg2.col);
            }
            else {
                loc6 = new egret.Point(arg2.row, arg2.col);
                loc7 = new egret.Point(arg1.row, arg1.col);
            }
            for (var loc2 = 0; loc2 >= -3; loc2--) {
                loc4 = loc6.x - 3 - loc2;
                loc5 = loc6.x + 3 + loc2;
                for (var loc3 = loc4; loc3 <= loc5; loc3++) {
                    if (this.isValidPos(loc3, loc6.y + loc2)) {
                        loc8 = this.candys[loc3][loc6.y + loc2];
                        if (loc8 != null) {
                            loc1.push(loc8);
                        }
                    }
                }
            }
            for (var loc2 = 0; loc2 <= 3; loc2++) {
                loc4 = loc7.x - 3 + loc2;
                loc5 = loc7.x + 3 - loc2;
                for (var loc3 = loc4; loc3 <= loc5; loc3++) {
                    if (this.isValidPos(loc3, loc7.y + loc2)) {
                        loc8 = this.candys[loc3][loc7.y + loc2];
                        if (loc8 != null) {
                            loc1.push(loc8);
                        }
                    }
                }
            }
        }
        return loc1;
    };
    /**位置是否有效,超出棋盘范围 */
    FightCtrl.prototype.isValidPos = function (arg1, arg2) {
        if (arg1 >= 0 && arg1 < GameConst.ROW_COUNT && arg2 >= 0 && arg2 < GameConst.COL_COUNT) {
            return true;
        }
        return false;
    };
    /**获得所有的candys */
    FightCtrl.prototype.getAllCandys = function () {
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (var loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                if (this.candys[loc2][loc3] != null) {
                    loc1.push(this.candys[loc2][loc3]);
                }
            }
        }
        return loc1;
    };
    /**所有无限制的candys */
    FightCtrl.prototype.getAllCandysNoBlock = function () {
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (var loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                if (!(this.candys[loc2][loc3] == null) && !this.checkIsBlock(loc2, loc3)) {
                    loc1.push(this.candys[loc2][loc3]);
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.changeCandysStatus = function (arg1, arg2) {
        for (var loc1 = 0; loc1 < arg1.length; loc1++) {
            arg1[loc1].setSpecialStatus(arg2);
        }
        return;
    };
    FightCtrl.prototype.getFruits = function () {
        var loc4 = null;
        var loc1 = new Array();
        for (var loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (var loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                loc4 = this.candys[loc2][loc3];
                if (!(loc4 == null) && loc4.isFruit()) {
                    if (loc4.color != ColorType.FRUIT1) {
                        if (loc4.color != ColorType.FRUIT2) {
                            if (loc4.color == ColorType.FRUIT3) {
                                loc1.push(AimType.FRUIT3);
                            }
                        }
                        else {
                            loc1.push(AimType.FRUIT2);
                        }
                    }
                    else {
                        loc1.push(AimType.FRUIT1);
                    }
                }
            }
        }
        return loc1;
    };
    FightCtrl.prototype.checkNeedDropFruit = function () {
        var loc1 = this.getFruits();
        var loc2 = Model.gameModel.getLeftFruitAim(loc1);
        if (loc2.length > 0) {
            this.addFruitIndex = this.addFruitIndex + 1;
            if (this.addFruitIndex != 1) {
                if (loc1.length != 0) {
                    if (this.addFruitIndex >= 10) {
                        this.addFruitIndex = 0;
                    }
                }
                else {
                    this.nextFruitId = loc2[Math.floor(Math.random() * loc2.length)];
                }
            }
            else {
                this.nextFruitId = loc2[Math.floor(Math.random() * loc2.length)];
            }
        }
        return;
    };
    /**获得所有的Eat以及Eat周围的糖果
     * 返回数组元素为对象
     * {eat:Eat对象
     * pos:周围糖果位置坐标
     * }
     */
    FightCtrl.prototype.getEatAndAroundCandys = function () {
        var eat = null;
        var Eats = new Array();
        for (var row = 0; row < GameConst.ROW_COUNT; row++) {
            for (var col = 0; col < GameConst.COL_COUNT; col++) {
                eat = this.eats[row][col];
                if (eat != null) {
                    Eats.push(eat);
                }
            }
        }
        var loc4 = [];
        for (var loc3 = 0; loc3 < Eats.length; loc3++) {
            eat = Eats[loc3];
            if (this.isValidPos((eat.row - 1), eat.col) && !(this.candys[(eat.row - 1)][eat.col] == null) && !this.checkIsBlock((eat.row - 1), eat.col)) {
                loc4.push({ "eat": eat, "pos": new egret.Point((eat.row - 1), eat.col) });
            }
            if (this.isValidPos(eat.row + 1, eat.col) && !(this.candys[eat.row + 1][eat.col] == null) && !this.checkIsBlock(eat.row + 1, eat.col)) {
                loc4.push({ "eat": eat, "pos": new egret.Point(eat.row + 1, eat.col) });
            }
            if (this.isValidPos(eat.row, (eat.col - 1)) && !(this.candys[eat.row][(eat.col - 1)] == null) && !this.checkIsBlock(eat.row, (eat.col - 1))) {
                loc4.push({ "eat": eat, "pos": new egret.Point(eat.row, (eat.col - 1)) });
            }
            if (!(this.isValidPos(eat.row, eat.col + 1) && !(this.candys[eat.row][eat.col + 1] == null) && !this.checkIsBlock(eat.row, eat.col + 1))) {
                continue;
            }
            loc4.push({ "eat": eat, "pos": new egret.Point(eat.row, eat.col + 1) });
        }
        return loc4;
    };
    /**获得所有的Monster以及Monster周围的糖果
     * 返回数组元素为对象
     * {monster:Monster对象
     * pos:周围糖果位置坐标
     * }
     */
    FightCtrl.prototype.getMonsterAndAroundCandys = function () {
        var monster = null;
        var Monsters = new Array();
        for (var row = 0; row < GameConst.ROW_COUNT; row++) {
            for (var col = 0; col < GameConst.COL_COUNT; col++) {
                monster = this.monsters[row][col];
                if (monster != null) {
                    Monsters.push(monster);
                }
            }
        }
        var loc4 = [];
        for (var loc3 = 0; loc3 < Monsters.length; loc3++) {
            monster = Monsters[loc3];
            if (this.isValidPos((monster.row - 1), monster.col) && !(this.candys[(monster.row - 1)][monster.col] == null) && this.monsters[(monster.row - 1)][monster.col] == null && !this.checkHasMonsterByPos(loc4, new egret.Point((monster.row - 1), monster.col))) {
                loc4.push({ "monster": monster, "pos": new egret.Point((monster.row - 1), monster.col) });
            }
            if (this.isValidPos(monster.row + 1, monster.col) && !(this.candys[monster.row + 1][monster.col] == null) && this.monsters[monster.row + 1][monster.col] == null && !this.checkHasMonsterByPos(loc4, new egret.Point(monster.row + 1, monster.col))) {
                loc4.push({ "monster": monster, "pos": new egret.Point(monster.row + 1, monster.col) });
            }
            if (this.isValidPos(monster.row, (monster.col - 1)) && !(this.candys[monster.row][(monster.col - 1)] == null) && this.monsters[monster.row][(monster.col - 1)] == null && !this.checkHasMonsterByPos(loc4, new egret.Point(monster.row, (monster.col - 1)))) {
                loc4.push({ "monster": monster, "pos": new egret.Point(monster.row, (monster.col - 1)) });
            }
            if (!(this.isValidPos(monster.row, monster.col + 1) && !(this.candys[monster.row][monster.col + 1] == null) && this.monsters[monster.row][monster.col + 1] == null && !this.checkHasMonsterByPos(loc4, new egret.Point(monster.row, monster.col + 1)))) {
                continue;
            }
            loc4.push({ "monster": monster, "pos": new egret.Point(monster.row, monster.col + 1) });
        }
        return loc4;
    };
    FightCtrl.prototype.checkHasMonsterByPos = function (arg1, arg2) {
        for (var loc2 = 0; loc2 < arg1.length; loc2++) {
            var loc1 = arg1[loc2];
            if (!(loc1.pos.x == arg2.x && loc1.pos.y == arg2.y)) {
                continue;
            }
            return true;
        }
        return false;
    };
    /**无可连接位置,进行洗牌重置所谓无限制的candys位置 */
    FightCtrl.prototype.shuffle = function (arg1) {
        if (arg1 === void 0) { arg1 = false; }
        var loc4 = 0;
        var candy1 = null;
        var candy2 = null;
        var temprow = 0;
        var tempcol = 0;
        // com.popchan.framework.manager.Debug.log("洗牌");
        var loc1 = this.getAllCandysNoBlock();
        var shuffletimes = 0;
        for (;;) {
            loc4 = 0;
            while (loc4 < 20) {
                var loc5 = Math.floor(Math.random() * loc1.length);
                var loc6 = Math.floor(Math.random() * loc1.length);
                if (loc5 != loc6) {
                    candy1 = loc1[loc5];
                    candy2 = loc1[loc6];
                    temprow = candy1.row;
                    candy1.row = candy2.row;
                    candy2.row = temprow;
                    tempcol = candy1.col;
                    candy1.col = candy2.col;
                    candy2.col = tempcol;
                    this.candys[candy1.row][candy1.col] = candy1;
                    this.candys[candy2.row][candy2.col] = candy2;
                } //交换candy1与candy2
                ++loc4;
            }
            shuffletimes = shuffletimes + 1;
            if (shuffletimes > 1000) {
                break;
            }
            if (!(!this.checkHasMatches() && this.checkConnectable().length > 0)) {
                continue;
            }
            break;
        }
        // com.popchan.framework.manager.Debug.log("洗牌次数:" + loc2);
        for (var index_row = 0; index_row < GameConst.ROW_COUNT; index_row++) {
            for (var index_col = 0; index_col < GameConst.COL_COUNT; index_col++) {
                var loc12 = this.candys[index_row][index_col];
                if (loc12 != null) {
                    if (arg1) {
                        this.moveToRightPos(loc12);
                    }
                    else {
                        var loc13 = this.getCandyPosition(index_row, index_col);
                        loc12.x = loc13.x;
                        loc12.y = loc13.y;
                    }
                }
            }
        }
        return;
    };
    /**通过candy修改后的row以及col使之移动到相符的位置 */
    FightCtrl.prototype.moveToRightPos = function (arg1) {
        // public moveToRightPos(arg1: Candy, arg2 = null): void {
        var loc1 = this.getCandyPosition(arg1.row, arg1.col);
        var loc2 = Math.abs(loc1.y - arg1.y);
        var loc3 = Math.abs(loc1.x - arg1.x);
        var loc4 = Math.sqrt(loc3 * loc3 + loc2 * loc2);
        var loc5 = loc4 / GameConst.CARD_W * 0.1;
        egret.Tween.get(arg1).to({ "x": loc1.x, "y": loc1.y }, loc5 * 1000);
        return;
    };
    /**通关 */
    FightCtrl.prototype.handleVictory = function () {
        this.container.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.container.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoved, this);
        this.timeBegined = false;
        var loc2 = 0;
        var loc1 = this.getSpecialCandys();
        if (loc1.length > 0) {
            this.queueToBouns();
        }
        else {
            loc2 = 0;
            if (this.currentLevel.mode != GameMode.NORMAL) {
                if (this.currentLevel.mode == GameMode.TIME) {
                    loc2 = Model.gameModel.time / 5;
                }
            }
            else {
                loc2 = Model.gameModel.step;
            }
            if (loc2 > 0) {
                this.doBounsTimeEffect();
            }
            else {
                // com.popchan.framework.manager.Debug.log("弹出胜利结算面板");
                Model.gameModel.isSuccess = true;
                this.newGamed = false;
                EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_END_UI));
            }
        }
        return;
    };
    FightCtrl.prototype.handleFailed = function () {
        // com.popchan.framework.manager.Debug.log("弹出失败结算面板");
        Model.gameModel.isSuccess = false;
        this.container.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.container.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoved, this);
        this.timeBegined = false;
        this.newGamed = false;
        console.log("failed");
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_END_UI));
        return;
    };
    /**完成通关目标后棋盘仍存在特殊糖果,将其消去 */
    FightCtrl.prototype.queueToBouns = function () {
        var loc2 = 0;
        var loc3 = null;
        var norCandys = undefined;
        var loc5 = 0;
        var loc6 = 0;
        var loc7 = undefined;
        var spiCandys = this.getSpecialCandys();
        if (spiCandys.length > 0) {
            loc2 = Math.floor(Math.random() * spiCandys.length);
            loc3 = spiCandys[loc2];
            if (loc3.status != CandySpecialStatus.COLORFUL) {
                this.removeCandys([loc3]);
            }
            else {
                norCandys = this.getNormalCandys();
                loc5 = Math.floor(Math.random() * norCandys.length);
                loc6 = norCandys[loc5].color;
                (loc7 = this.getCandysByColorType(loc6)).push(loc3);
                this.removeCandys(loc7);
            }
            this.gameState = FightCtrl.STATE_GAME_WAIT_DROP;
        }
        return;
    };
    FightCtrl.prototype.doBounsTimeEffect = function () {
        var bonusTip = BonusTimeTip.pool.take();
        this.container.addChild(bonusTip);
        bonusTip.doAniamtion();
        egret.setTimeout(this.BounsTimeEffectTimeout, this, 1200);
        return;
    };
    FightCtrl.prototype.BounsTimeEffectTimeout = function () {
        var rnd = 0;
        var norcandy = null;
        var disX;
        var disY;
        var dis;
        var radian;
        var laserEffect;
        var step = 0;
        if (this.currentLevel.mode != GameMode.NORMAL) {
            if (this.currentLevel.mode == GameMode.TIME) {
                step = Math.floor(Model.gameModel.time / 5);
            }
        }
        else {
            step = Model.gameModel.step;
        }
        //选取随机step个糖果位置生成laserEffect
        if (step > 0) {
            var norCandys = this.getNormalCandys();
            if (norCandys.length > 0) {
                for (var i = 0; i < step;) {
                    rnd = Math.floor(Math.random() * norCandys.length);
                    norcandy = norCandys[rnd];
                    disX = norcandy.x - 100;
                    disY = norcandy.y - 20;
                    dis = Math.sqrt(disX * disX + disY * disY);
                    radian = Math.atan2(disY, disX);
                    laserEffect = LaserEffect.pool.take();
                    laserEffect.x = 100;
                    laserEffect.y = 20;
                    laserEffect.setData(radian);
                    this.container.addChild(laserEffect);
                    i++;
                    egret.Tween.get(laserEffect).to({ "x": norcandy.x, "y": norcandy.y }, dis)
                        .call(this.BounsEffectCall, this, [norcandy, laserEffect, norCandys, rnd, i == step]);
                } //enf of for
            } //end of if
        } //end of if
        return;
    };
    FightCtrl.prototype.BounsEffectCall = function (arg1, arg2, norCandys, rnd, isend) {
        if (isend === void 0) { isend = false; }
        arg2.parent.removeChild(arg2);
        LaserEffect.pool.put(arg2);
        var loc1 = Math.floor(Math.random() * 3) + 1;
        arg1.setSpecialStatus(loc1, true);
        norCandys.splice(rnd, 1);
        if (isend) {
            Model.gameModel.time = 0;
            Model.gameModel.step = 0;
            this.queueToBouns();
        }
        return;
    };
    FightCtrl.prototype.addScoreTip = function (x, y, score, color) {
        var loc1 = ScoreTip.pool.take();
        loc1.x = x;
        loc1.y = y;
        loc1.setData(score, color);
        this.container.addChild(loc1);
        return;
    };
    FightCtrl.prototype.addGoodTip = function (type) {
        var loc1 = GoodTip.pool.take();
        loc1.x = UI.WINSIZE_W / 2;
        loc1.y = UI.WINSIZE_H * 3 / 4;
        loc1.setType(type);
        this.container.addChild(loc1);
        return;
    };
    FightCtrl.prototype.addEffect = function (status, x, y) {
        var loc1 = null;
        var loc2 = null;
        var loc3 = null;
        var loc4 = null;
        if (status != 0) {
            if (status != 1) {
                if (status != 2) {
                    if (status != 3) {
                        if (status != 4) {
                        }
                        ;
                    }
                    else {
                        (loc4 = BombEffect.pool.take()).x = x;
                        loc4.y = y;
                        loc4.play();
                        this.container.addChild(loc4);
                    }
                }
                else {
                    (loc3 = LineBombEffect.pool.take()).x = x;
                    loc3.y = y;
                    loc3.play(2);
                    this.container.addChild(loc3);
                }
            }
            else {
                (loc2 = LineBombEffect.pool.take()).x = x;
                loc2.y = y;
                loc2.play(1);
                this.container.addChild(loc2);
            }
        }
        else {
            (loc1 = BombNormalEffect.pool.take()).x = x;
            loc1.y = y;
            loc1.play();
            this.container.addChild(loc1);
        }
        return;
    };
    FightCtrl.prototype.removeAll = function () {
        var loc1 = 0;
        var loc2 = 0;
        var loc3 = 0;
        var loc4 = null;
        this.kb.removeEventListener(KeyBoard.onkeyup, this.onKeydown, this);
        this.kb = null;
        this.removeAllElements(this.candys, Candy.pool);
        this.removeAllElements(this.tileBgs, TileBg.pool);
        this.removeAllElements(this.bricks, Brick.pool);
        this.removeAllElements(this.locks, Lock.pool);
        this.removeAllElements(this.eats, Eat.pool);
        this.removeAllElements(this.ices, Ice.pool);
        this.removeAllElements(this.monsters, Monster.pool);
        this.removeAllElements(this.tDoors, TransportDoor.pool);
        this.removeAllElements(this.ironWires, IronWire.pool);
        loc3 = (this.tileBoarders.length - 1);
        while (loc3 >= 0) {
            loc4 = this.tileBoarders[loc3];
            TileBoarder.pool.put(loc4);
            loc4.parent.removeChild(loc4);
            this.tileBoarders.splice(loc3, 1);
            --loc3;
        }
        Model.gameModel.reset();
        return;
    };
    FightCtrl.prototype.removeAllElements = function (arg1, arg2) {
        var col = 0;
        var loc3 = null;
        var row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((loc3 = arg1[row][col]) != null) {
                    loc3.reset();
                    arg2.put(loc3);
                    loc3.parent.removeChild(loc3);
                    arg1[row][col] = null;
                }
                ++col;
            }
            ++row;
        }
        return;
    };
    //     public guideProcess(arg1:GuideVO = null): void {
    //         if (!arg1) {
    //         };
    //         return;
    //     }
    FightCtrl.prototype.getComponentByName = function (arg1) {
        return null;
    };
    FightCtrl.prototype.guideClear = function () {
        return;
    };
    FightCtrl.prototype.destory = function () {
        this.removeAll();
        return;
    };
    FightCtrl.prototype.init = function () {
        this.container = new egret.DisplayObjectContainer();
        GameCtrl.I.addGameSprite(this.container);
        this._fightui = new FightUI(this);
        this.container.addChild(this._fightui);
        this.infoPanel = new InfoPanel();
        InfoPanel.instance = this.infoPanel;
        this.container.addChild(this.infoPanel);
        this.tileBg_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.tileBg_layer);
        this.brick_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.brick_layer);
        this.ice_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.ice_layer);
        this.stone_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.stone_layer);
        this.eat_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.eat_layer);
        this.candy_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.candy_layer);
        this.lock_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.lock_layer);
        this.monster_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.monster_layer);
        this.ironWire_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.ironWire_layer);
        this.door_layer = new egret.DisplayObjectContainer();
        this.container.addChild(this.door_layer);
        this.tDoors = this.getBlankMapArray();
        this.tileBgs = this.getBlankMapArray();
        this.candys = this.getBlankMapArray();
        this.bricks = this.getBlankMapArray();
        this.ices = this.getBlankMapArray();
        this.stones = this.getBlankMapArray();
        this.eats = this.getBlankMapArray();
        this.locks = this.getBlankMapArray();
        this.ironWires = this.getBlankMapArray();
        this.monsters = this.getBlankMapArray();
        this.tileBoarders = [];
        this.newGame();
        return;
    };
    /**返回row*col的二维数组 */
    FightCtrl.prototype.getBlankMapArray = function () {
        var loc3 = 0;
        var loc1 = new Array();
        var loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc1[loc2] = new Array();
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                loc1[loc2][loc3] = null;
                ++loc3;
            }
            ++loc2;
        }
        return loc1;
    };
    /**新关卡开始 */
    FightCtrl.prototype.newGame = function () {
        this.container.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.container.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoved, this);
        this.container.$setTouchEnabled(true);
        this.newGamed = true;
        if (Model.gameModel.isTest) {
            this.kb.addEventListener(KeyBoard.onkeydown, this.onKeydown, this);
        }
        this.currentLevel = Config.levelConfig.getLevel(Model.levelModel.selectedLevel);
        this.infoPanel.setInfo(this.currentLevel);
        Model.gameModel.score = 0;
        this.state = FightCtrl.STATE_INIT;
        this.gameState = FightCtrl.STATE_GAME_WAIT;
        return;
    };
    FightCtrl.prototype.onKeydown = function (event) {
        if (this.kb.isContain(event.data, KeyBoard.D)) {
            var loc1 = Model.levelModel.currentLevel;
            var loc2 = Model.levelModel.selectedLevel;
            this.destory();
            Model.levelModel.selectedLevel = Math.min(Model.levelModel.selectedLevel + 1, LevelConfig.TOTAL_LEVEL);
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        }
        return;
    };
    /**生成并添加游戏素材 */
    FightCtrl.prototype.createElements = function () {
        this.createTileBg();
        this.createDoor();
        this.createBrick();
        this.createBarrier();
        this.createCandys();
        this.createBombs();
        return;
    };
    /**生成炸弹 */
    FightCtrl.prototype.createBombs = function () {
        var loc3 = 0;
        var loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                if (this.currentLevel.barrier[loc2][loc3] == TileConst.BOMB) {
                    this.createBomb(loc2, loc3);
                }
                ++loc3;
            }
            ++loc2;
        }
        return;
    };
    /**生成障碍物
     * 冰
     * 怪物
     * 铁丝
     * 锁
     * 石头
     * eat
     */
    FightCtrl.prototype.createBarrier = function () {
        var loc3 = 0;
        var loc4 = 0;
        var loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                if ((loc4 = this.currentLevel.barrier[loc2][loc3]) > 0) {
                    switch (loc4) {
                        case TileConst.ICE1:
                        case TileConst.ICE2:
                        case TileConst.ICE3:
                            {
                                this.createIce(loc2, loc3, loc4);
                                break;
                            }
                        case TileConst.LOCK:
                            {
                                this.createLock(loc2, loc3);
                                break;
                            }
                        case TileConst.STONE:
                            {
                                this.createStones(loc2, loc3, loc4);
                                break;
                            }
                        case TileConst.EAT:
                            {
                                this.createEat(loc2, loc3);
                                break;
                            }
                        case TileConst.MONSTER:
                            {
                                this.createMonster(loc2, loc3);
                                break;
                            }
                        case TileConst.IRONWIRE:
                            {
                                this.createIronWire(loc2, loc3, 1);
                                break;
                            }
                        case TileConst.IRONWIRE2:
                            {
                                this.createIronWire(loc2, loc3, 2);
                                break;
                            }
                        case TileConst.BOMB:
                            {
                                break;
                            }
                    }
                }
                ++loc3;
            }
            ++loc2;
        }
        return;
    };
    /**生成墙壁和墙壁阴影
     * 坐标需要微调
     */
    FightCtrl.prototype.createTileBg = function () {
        var row = 0;
        var col = 0;
        var loc8 = undefined;
        var loc9 = undefined;
        var loc10 = undefined;
        var loc11 = undefined;
        var loc14 = 0;
        var tilebg_sample = null;
        var candypos = null;
        var loc17 = null;
        var tile = this.currentLevel.tile;
        var loc2 = 0;
        var loc3 = (GameConst.ROW_COUNT - 1);
        var loc4 = 0;
        var loc5 = (GameConst.COL_COUNT - 1);
        //loc4
        col = 0;
        while (col < GameConst.COL_COUNT) {
            row = 0;
            while (row < GameConst.ROW_COUNT) {
                if (tile[row][col] > 0) {
                    loc4 = col;
                    break;
                }
                ++row;
            }
            ++col;
        }
        //loc5
        col = (GameConst.COL_COUNT - 1);
        while (col >= 0) {
            row = 0;
            while (row < GameConst.ROW_COUNT) {
                if (tile[row][col] > 0) {
                    loc5 = col;
                    break;
                }
                ++row;
            }
            --col;
        }
        //loc2
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if (tile[row][col] > 0) {
                    loc2 = row;
                    break;
                }
                ++col;
            }
            ++row;
        }
        //loc3
        row = (GameConst.ROW_COUNT - 1);
        while (row >= 0) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if (tile[row][col] > 0) {
                    loc3 = row;
                    break;
                }
                ++col;
            }
            --row;
        }
        //
        var loc12 = GameConst.ROW_COUNT - loc3 - loc2;
        var loc13 = GameConst.COL_COUNT - loc5 - loc4;
        this.offsetX = (UI.WINSIZE_W - GameConst.COL_COUNT * GameConst.CARD_W) + loc13 * GameConst.CARD_W * 0.5 - 25;
        this.offsetY = (UI.WINSIZE_H - GameConst.ROW_COUNT * GameConst.CARD_W) + loc12 * GameConst.CARD_W * 0.5 - 200;
        /*遍历tile[ROW_COUNT][COL_COUNT]每一个坐标,若tile值大于0则表示有阴影存在,添加阴影
        * 并在边界处添加TileBoarder
        * 边界处:一侧有tilebg,另一侧没有tilebg
        */
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((loc14 = tile[row][col]) > 0) {
                    tilebg_sample = TileBg.pool.take();
                    candypos = this.getCandyPosition(row, col);
                    tilebg_sample.x = candypos.x;
                    tilebg_sample.y = candypos.y;
                    this.tileBgs[row][col] = tilebg_sample;
                    this.tileBg_layer.addChild(tilebg_sample);
                    //添加TileBoarder
                    if (this.isBlank(row, (col - 1)) && this.isBlank((row - 1), col) && this.isBlank((row - 1), (col - 1))) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_left_up, this.tileBg_layer, candypos.x - 20, candypos.y - 20);
                        this.tileBoarders.push(loc17);
                    }
                    if (!this.isBlank(row + 1, (col - 1)) && this.isBlank(row + 1, col)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_left_up_x, this.tileBg_layer, candypos.x - 11.5, candypos.y + 51);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row, col + 1) && this.isBlank((row - 1), col) && this.isBlank((row - 1), col + 1)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_right_up, this.tileBg_layer, candypos.x + 20, candypos.y - 20);
                        this.tileBoarders.push(loc17);
                    }
                    if (!this.isBlank(row + 1, col + 1) && this.isBlank(row + 1, col)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_right_up_x, this.tileBg_layer, candypos.x + 11.5, candypos.y + 51);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank((row - 1), col) && !this.isBlank(row, col + 1) && this.isBlank((row - 1), col + 1)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_heng_xia, this.tileBg_layer, candypos.x + 32, candypos.y - 37.5);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row, (col - 1)) && !this.isBlank(row + 1, col) && this.isBlank(row + 1, (col - 1))) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_shu_you, this.tileBg_layer, candypos.x - 38, candypos.y + 32);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row, col + 1) && !this.isBlank(row + 1, col) && this.isBlank(row + 1, col + 1)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_shu_zuo, this.tileBg_layer, candypos.x + 38, candypos.y + 32);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row, (col - 1)) && this.isBlank(row + 1, col) && this.isBlank(row + 1, (col - 1))) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_left_down, this.tileBg_layer, candypos.x - 20, candypos.y + 20);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row, col + 1) && !this.isBlank(row + 1, col + 1)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_left_down_x, this.tileBg_layer, candypos.x + 51, candypos.y + 11.5);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row, col + 1) && this.isBlank(row + 1, col) && this.isBlank(row + 1, col + 1)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_right_down, this.tileBg_layer, candypos.x + 20, candypos.y + 20);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row, (col - 1)) && !this.isBlank(row + 1, (col - 1))) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_right_down_x, this.tileBg_layer, candypos.x - 51, candypos.y + 11.5);
                        this.tileBoarders.push(loc17);
                    }
                    if (this.isBlank(row + 1, col) && !this.isBlank(row, col + 1) && this.isBlank(row + 1, col + 1)) {
                        (loc17 = TileBoarder.pool.take()).setType(TileBoarder.x_border_heng_shang, this.tileBg_layer, candypos.x + 32, candypos.y + 37.5);
                        this.tileBoarders.push(loc17);
                    }
                }
                ++col;
            }
            ++row;
        }
        return;
    };
    /**是空白处(没有糖果的地方) */
    FightCtrl.prototype.isBlank = function (arg1, arg2) {
        if (!this.isValidPos(arg1, arg2)) {
            return true;
        }
        if (this.currentLevel.tile[arg1][arg2] == 0) {
            return true;
        }
        return false;
    };
    /**传送门和水果门 */
    FightCtrl.prototype.createDoor = function () {
        var loc3 = 0;
        var loc4 = 0;
        var fruDoor_spl = null;
        var candyPos = null;
        var loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                if ((loc4 = this.currentLevel.entryAndExit[loc2][loc3]) != TileConst.FRUIT_END) {
                    if (loc4 >= TileConst.T_DOOR_ENTRY1 && loc4 <= TileConst.T_DOOR_EXIT9) {
                        this.createTransportDoor(loc2, loc3, loc4);
                    }
                }
                else {
                    fruDoor_spl = FruitDoor.pool.take();
                    candyPos = this.getCandyPosition(loc2, loc3);
                    fruDoor_spl.x = candyPos.x;
                    fruDoor_spl.y = candyPos.y + 30;
                    fruDoor_spl.alpha = 0.7;
                    this.door_layer.addChild(fruDoor_spl);
                }
                ++loc3;
            }
            ++loc2;
        }
        return;
    };
    /**传送门 */
    FightCtrl.prototype.createTransportDoor = function (arg1, arg2, arg3) {
        var TrDoor_spl = TransportDoor.pool.take();
        TrDoor_spl.tileID = arg3;
        TrDoor_spl.row = arg1;
        TrDoor_spl.col = arg2;
        TrDoor_spl.start();
        var candyPos = this.getCandyPosition(arg1, arg2);
        TrDoor_spl.x = candyPos.x;
        TrDoor_spl.y = candyPos.y;
        this.ice_layer.addChild(TrDoor_spl);
        this.tDoors[arg1][arg2] = TrDoor_spl;
        return;
    };
    /**墙壁 */
    FightCtrl.prototype.createBrick = function () {
        var loc3 = 0;
        var loc4 = 0;
        var brick_sample = null;
        var loc6 = null;
        var loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                if ((loc4 = this.currentLevel.board[loc2][loc3]) > 0) {
                    (brick_sample = Brick.pool.take()).brickID = loc4;
                    brick_sample.row = loc2;
                    brick_sample.col = loc3;
                    loc6 = this.getCandyPosition(loc2, loc3);
                    brick_sample.x = loc6.x;
                    brick_sample.y = loc6.y;
                    this.brick_layer.addChild(brick_sample);
                    this.bricks[loc2][loc3] = brick_sample;
                }
                ++loc3;
            }
            ++loc2;
        }
        return;
    };
    FightCtrl.prototype.createIce = function (arg1, arg2, arg3) {
        var ice_sample = Ice.pool.take();
        ice_sample.tileID = arg3;
        ice_sample.row = arg1;
        ice_sample.col = arg2;
        var loc2 = this.getCandyPosition(arg1, arg2);
        ice_sample.x = loc2.x;
        ice_sample.y = loc2.y;
        this.ice_layer.addChild(ice_sample);
        this.ices[arg1][arg2] = ice_sample;
        return ice_sample;
    };
    FightCtrl.prototype.createStones = function (arg1, arg2, arg3) {
        var stone_spl = Stone.pool.take();
        stone_spl.tileID = arg3;
        stone_spl.row = arg1;
        stone_spl.col = arg2;
        var candyPos = this.getCandyPosition(arg1, arg2);
        stone_spl.x = candyPos.x;
        stone_spl.y = candyPos.y;
        this.stone_layer.addChild(stone_spl);
        this.stones[arg1][arg2] = stone_spl;
        return;
    };
    FightCtrl.prototype.createCandys = function () {
        var loc4 = 0;
        var loc5 = 0;
        var candy_spl = null;
        var loc1 = false;
        var loc3 = 0;
        while (loc3 < GameConst.ROW_COUNT) {
            loc4 = 0;
            while (loc4 < GameConst.COL_COUNT) {
                if (this.currentLevel.tile[loc3][loc4] > 0 && this.isCandyValidPos(loc3, loc4)) {
                    if ((loc5 = this.currentLevel.candy[loc3][loc4]) > 0) {
                        if (loc5 >= 6 && loc5 <= 10) {
                            (candy_spl = this.newCandy(loc3, loc4, loc5 - 5)).setSpecialStatus(CandySpecialStatus.HORIZ);
                        }
                        else if (loc5 >= 11 && loc5 <= 15) {
                            (candy_spl = this.newCandy(loc3, loc4, loc5 - 10)).setSpecialStatus(CandySpecialStatus.VERT);
                        }
                        else if (loc5 >= 16 && loc5 <= 20) {
                            (candy_spl = this.newCandy(loc3, loc4, loc5 - 15)).setSpecialStatus(CandySpecialStatus.BOMB);
                        }
                        else if (loc5 != TileConst.COLORFUL) {
                            this.newCandy(loc3, loc4, loc5);
                        }
                        else {
                            (candy_spl = this.newCandy(loc3, loc4)).setSpecialStatus(CandySpecialStatus.COLORFUL);
                        }
                        loc1 = false;
                    }
                    else {
                        loc1 = true;
                        this.newCandy(loc3, loc4, loc5);
                    }
                }
                ++loc4;
            }
            ++loc3;
        }
        if (loc1) {
            this.shuffle();
        }
        return;
    };
    /**根据传入的参数在[row][col]处生成颜色为color的candy */
    FightCtrl.prototype.newCandy = function (row, col, color) {
        if (color === void 0) { color = 0; }
        if (color == 0) {
            color = Math.floor(Math.random() * this.currentLevel.colorCount + 1);
        }
        var candy_spl = Candy.pool.take();
        candy_spl.reset();
        var candyPos = this.getCandyPosition(row, col);
        candy_spl.x = candyPos.x;
        candy_spl.y = candyPos.y;
        candy_spl.row = row;
        candy_spl.col = col;
        candy_spl.color = color;
        this.candys[row][col] = candy_spl;
        this.candy_layer.addChild(candy_spl);
        return candy_spl;
    };
    /**获得candy的实际显示位置
     * point.x决定display.y
    */
    FightCtrl.prototype.getCandyPosition = function (row, col) {
        return new egret.Point(col * GameConst.CARD_W + this.offsetX, row * GameConst.CARD_W + this.offsetY);
    };
    FightCtrl.prototype.createIronWires = function () {
        var loc3 = 0;
        var loc4 = 0;
        var loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                if ((loc4 = this.currentLevel.ironWire[loc2][loc3]) > 0) {
                    if (loc4 != TileConst.IRONWIRE) {
                        if (loc4 == TileConst.IRONWIRE2) {
                            this.createIronWire(loc2, loc3, 2);
                        }
                    }
                    else {
                        this.createIronWire(loc2, loc3, 1);
                    }
                }
                ++loc3;
            }
            ++loc2;
        }
        return;
    };
    FightCtrl.prototype.createIronWire = function (arg1, arg2, arg3) {
        if (arg3 === void 0) { arg3 = 1; }
        var iw_spl = IronWire.pool.take();
        iw_spl.dir = arg3;
        iw_spl.row = arg1;
        iw_spl.col = arg2;
        var candyPos = this.getCandyPosition(arg1, arg2);
        iw_spl.x = candyPos.x;
        iw_spl.y = candyPos.y;
        this.ironWire_layer.addChild(iw_spl);
        this.ironWires[arg1][arg2] = iw_spl;
        return;
    };
    FightCtrl.prototype.createBomb = function (arg1, arg2) {
        var loc1 = Math.floor(Math.random() * 7) + 10;
        this.candys[arg1][arg2].setBomb(loc1);
        return;
    };
    /**该位置是否存在限制
     * ice,stone,eat
     */
    FightCtrl.prototype.isCandyValidPos = function (arg1, arg2) {
        if (!(this.ices[arg1][arg2] == null) || !(this.stones[arg1][arg2] == null) || !(this.eats[arg1][arg2] == null)) {
            return false;
        }
        return true;
    };
    FightCtrl.prototype.createEat = function (arg1, arg2) {
        var eat_spl = Eat.pool.take();
        eat_spl.reset();
        eat_spl.row = arg1;
        eat_spl.col = arg2;
        var candyPos = this.getCandyPosition(arg1, arg2);
        eat_spl.x = candyPos.x;
        eat_spl.y = candyPos.y;
        this.eat_layer.addChild(eat_spl);
        this.eats[arg1][arg2] = eat_spl;
        return eat_spl;
    };
    FightCtrl.prototype.createMonster = function (arg1, arg2) {
        var monst_spl = Monster.pool.take();
        monst_spl.reset();
        monst_spl.row = arg1;
        monst_spl.col = arg2;
        var candyPos = this.getCandyPosition(arg1, arg2);
        monst_spl.x = candyPos.x;
        monst_spl.y = candyPos.y;
        this.monster_layer.addChild(monst_spl);
        this.monsters[arg1][arg2] = monst_spl;
        return monst_spl;
    };
    FightCtrl.prototype.createLock = function (arg1, arg2) {
        var lock_sample = Lock.pool.take();
        lock_sample.row = arg1;
        lock_sample.col = arg2;
        var candyPos = this.getCandyPosition(arg1, arg2);
        lock_sample.x = candyPos.x;
        lock_sample.y = candyPos.y;
        this.lock_layer.addChild(lock_sample);
        this.locks[arg1][arg2] = lock_sample;
        return lock_sample;
    };
    FightCtrl.prototype.update = function () {
        switch (this.state) {
            case FightCtrl.STATE_INIT:
                {
                    this.createElements();
                    EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MISSION_UI));
                    this.state = FightCtrl.STATE_WAIT;
                    egret.setTimeout(function () {
                        var loc1 = Model.levelModel.selectedLevel;
                        if (loc1 <= 5 && loc1 > 0) {
                            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GUIDE, loc1));
                        }
                        this.state = FightCtrl.STATE_GAME;
                        return;
                    }, this, 3000);
                    break;
                }
            case FightCtrl.STATE_GAME:
                {
                    this.updateGameState();
                    break;
                }
            case FightCtrl.STATE_PAUSE:
                {
                    break;
                }
            case FightCtrl.STATE_END:
                {
                    break;
                }
            case FightCtrl.STATE_WAIT:
                {
                    break;
                }
            default:
                {
                    break;
                }
        }
        return;
    };
    FightCtrl.prototype.updateGameState = function () {
        var loc1 = false;
        var loc2 = 0;
        var loc3 = 0;
        var candy = null;
        this.tipCount = this.tipCount + 1;
        if (this.tipCount > this.tipDelay) {
            this.checkSwapTip();
            this.tipCount = 0;
        }
        switch (this.gameState) {
            case FightCtrl.STATE_GAME_SWAP:
                {
                    break;
                }
            case FightCtrl.STATE_GAME_SHUFFLE:
                {
                    break;
                }
            case FightCtrl.STATE_GAME_WAIT_DROP:
                {
                    this.dropCount = this.dropCount + 1;
                    if (this.dropCount > FightCtrl.DROP_DELAY) {
                        this.dropCount = 0;
                        this.gameState = FightCtrl.STATE_GAME_WAIT;
                        loc1 = this.checkTop();
                        if (!loc1) {
                            this.checkShuffle();
                        }
                    }
                    break;
                }
            case FightCtrl.STATE_GAME_WAIT:
                {
                    break;
                }
            case FightCtrl.STATE_GAME_REMOVE:
                {
                    break;
                }
            case FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE:
                {
                    this.isMoving = false;
                    loc2 = 0;
                    while (loc2 < GameConst.ROW_COUNT) {
                        loc3 = 0;
                        while (loc3 < GameConst.COL_COUNT) {
                            if ((candy = this.candys[loc2][loc3]) != null) {
                                // if (caurina.transitions.Tweener.isTweening(candy)) {
                                //     this.isMoving = true;
                                // }
                                if (candy.isMoving) {
                                    this.isMoving = candy.isMoving;
                                    break;
                                }
                            }
                            ++loc3;
                        }
                        ++loc2;
                    }
                    this.tipCount = 0;
                    if (!this.isMoving) {
                        // com.popchan.framework.manager.Debug.log("没有糖果正在掉落");
                        if (this.checkHasMatches()) {
                            // com.popchan.framework.manager.Debug.log("有移除的");
                            this.removeAllMatches();
                        }
                        else {
                            // com.popchan.framework.manager.Debug.log("检测游戏是否胜利");
                            this.checkBomb();
                            this.checkEatAndMonster();
                            if (Model.gameModel.checkAimComplete()) {
                                // com.popchan.framework.manager.Debug.log("游戏胜利");
                                this.gameState = FightCtrl.STATE_GAME_END;
                                this.handleVictory();
                            }
                            else {
                                // com.popchan.framework.manager.Debug.log("目标未完成，游戏没有胜利");
                                if (this.currentLevel.mode == GameMode.NORMAL && Model.gameModel.step == 0) {
                                    // com.popchan.framework.manager.Debug.log("游戏失败");
                                    this.gameState = FightCtrl.STATE_GAME_END;
                                    this.handleFailed();
                                }
                                else if (this.currentLevel.mode == GameMode.TIME && Model.gameModel.time == 0) {
                                    // com.popchan.framework.manager.Debug.log("游戏失败");
                                    this.gameState = FightCtrl.STATE_GAME_END;
                                    this.handleFailed();
                                }
                                this.checkShuffle();
                            }
                        }
                    }
                    break;
                }
        }
        return;
    };
    /**检查是否需要洗牌 */
    FightCtrl.prototype.checkShuffle = function () {
        var loc2 = null;
        var loc1 = this.checkConnectable();
        if (loc1.length != 0) {
            this.gameState = FightCtrl.STATE_GAME_WAIT;
            // com.popchan.framework.manager.Debug.log("居然有可以消除的，不用洗牌", loc1[0]);
        }
        else {
            this.gameState = FightCtrl.STATE_GAME_WAIT;
            loc2 = new NoSwapTip();
            loc2.doAniamtion();
            this.container.addChild(loc2);
            // com.popchan.framework.manager.Debug.log("没有可以消除的了，洗牌");
            this.shuffle(true);
        }
        return;
    };
    /**刷新时间 */
    FightCtrl.prototype.onTimer = function () {
        if (!this.timeBegined) {
            return;
        }
        this.timeFrameCount = this.timeFrameCount + 1;
        if (this.timeFrameCount < FightCtrl.timeFrame) {
            return;
        }
        this.timeFrameCount = 0;
        Model.gameModel.time = Model.gameModel.time - 1;
        if (Model.gameModel.time == 0) {
            this.timeBegined = false;
            this.gameState = FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE;
        }
        return;
    };
    FightCtrl.prototype.onTouchBegin = function (e) {
        if (this.state != FightCtrl.STATE_GAME) {
            return;
        }
        if (this.gameState != FightCtrl.STATE_GAME_WAIT) {
            return;
        }
        var loc2 = new egret.Point(e.stageX, e.stageY);
        this.selectedCard = this.getCandyByTouch(loc2);
        return;
    };
    FightCtrl.prototype.onTouchMoved = function (e) {
        if (this.state != FightCtrl.STATE_GAME) {
            return;
        }
        if (this.gameState != FightCtrl.STATE_GAME_WAIT) {
            return;
        }
        if (this.selectedCard != null) {
            var sel_row = this.selectedCard.row;
            var sel_col = this.selectedCard.col;
            var loc5 = new egret.Point(e.stageX, e.stageY);
            if ((sel_col - 1) >= 0 && !(this.candys[sel_row][(sel_col - 1)] == null) && this.locks[sel_row][(sel_col - 1)] == null && this.monsters[sel_row][(sel_col - 1)] == null && this.candys[sel_row][(sel_col - 1)].collidePoint(loc5) && !this.hasIronWire(this.selectedCard.row, this.selectedCard.col, 1)) {
                this.makeSwap(this.selectedCard, this.candys[sel_row][(sel_col - 1)]);
            }
            else if (sel_col + 1 < GameConst.COL_COUNT && !(this.candys[sel_row][sel_col + 1] == null) && this.locks[sel_row][sel_col + 1] == null && this.monsters[sel_row][sel_col + 1] == null && this.candys[sel_row][sel_col + 1].collidePoint(loc5) && !this.hasIronWire(sel_row, sel_col + 1, 1)) {
                this.makeSwap(this.selectedCard, this.candys[sel_row][sel_col + 1]);
            }
            else if ((sel_row - 1) >= 0 && !(this.candys[(sel_row - 1)][sel_col] == null) && this.locks[(sel_row - 1)][sel_col] == null && this.monsters[(sel_row - 1)][sel_col] == null && this.candys[(sel_row - 1)][sel_col].collidePoint(loc5) && !this.hasIronWire((sel_row - 1), sel_col, 2)) {
                this.makeSwap(this.selectedCard, this.candys[(sel_row - 1)][sel_col]);
            }
            else if (sel_row + 1 < GameConst.ROW_COUNT && !(this.candys[sel_row + 1][sel_col] == null) && this.locks[sel_row + 1][sel_col] == null && this.monsters[sel_row + 1][sel_col] == null && this.candys[sel_row + 1][sel_col].collidePoint(loc5) && !this.hasIronWire(this.selectedCard.row, this.selectedCard.col, 2)) {
                this.makeSwap(this.selectedCard, this.candys[sel_row + 1][sel_col]);
            }
        }
        return;
    };
    FightCtrl.prototype.hasIronWire = function (arg1, arg2, arg3) {
        if (this.ironWires[arg1][arg2] != null) {
            if (this.ironWires[arg1][arg2].dir == arg3) {
                return true;
            }
        }
        return false;
    };
    /**交换行为 */
    FightCtrl.prototype.makeSwap = function (arg1, arg2) {
        var candyA = arg1;
        var candyB = arg2;
        var loc1;
        this.stopCandyTip();
        this.aimCard = candyB;
        this.gameState = FightCtrl.STATE_GAME_SWAP;
        this.swapCandy(candyA, candyB);
        if (this.currentLevel.mode == GameMode.TIME && this.timeBegined == false) {
            this.timeBegined = true;
        }
        var posA = this.getCandyPosition(candyA.row, candyA.col);
        var posB = this.getCandyPosition(candyB.row, candyB.col);
        candyA.runMoveAction(posA, 200);
        candyB.runMoveAction(posB, 200, this.SwapCheck, this, [candyA, candyB]);
    };
    /**检查交换是否有效 */
    FightCtrl.prototype.SwapCheck = function (candyA, candyB) {
        if (candyA.status == 4 || candyB.status == 4 || candyA.status > 0 && candyB.status > 0 || this.checkHasMatches(false)) {
            //交换有效
            // com.popchan.framework.manager.Debug.log("交换有效");
            this.handleValidSwap();
        }
        else {
            // com.popchan.framework.manager.Debug.log("交换无效");
            SoundCtrl.I.playmusic("swap_defail");
            this.SwapRoolBack(candyA, candyB);
        }
        return;
    };
    /**交换无效,回滚 */
    FightCtrl.prototype.SwapRoolBack = function (candyA, candyB) {
        this.swapCandy(candyA, candyB);
        this.gameState = FightCtrl.STATE_GAME_WAIT;
        var posA = this.getCandyPosition(candyA.row, candyA.col);
        var posB = this.getCandyPosition(candyB.row, candyB.col);
        candyA.runMoveAction(posA, 200);
        candyB.runMoveAction(posB, 200);
        return;
    };
    /**交换糖果 */
    FightCtrl.prototype.swapCandy = function (arg1, arg2) {
        var loc1 = arg1.row;
        var loc2 = arg1.col;
        arg1.row = arg2.row;
        arg1.col = arg2.col;
        arg2.row = loc1;
        arg2.col = loc2;
        this.candys[arg1.row][arg1.col] = arg1;
        this.candys[arg2.row][arg2.col] = arg2;
        return;
    };
    FightCtrl.prototype.getCandyByTouch = function (arg1) {
        var loc2 = 0;
        var loc3 = null;
        var loc1 = 0;
        while (loc1 < GameConst.ROW_COUNT) {
            loc2 = 0;
            while (loc2 < GameConst.COL_COUNT) {
                if (!((loc3 = this.candys[loc1][loc2]) == null) && this.locks[loc1][loc2] == null && this.monsters[loc1][loc2] == null) {
                    if (loc3.collidePoint(arg1)) {
                        return loc3;
                    }
                }
                ++loc2;
            }
            ++loc1;
        }
        return null;
    };
    /**检查是否存在提示,若有则返回若无则生成提示*/
    FightCtrl.prototype.checkSwapTip = function () {
        var loc2 = null;
        var loc3 = null;
        var loc4 = null;
        if (this.hasSwapTip()) {
            return;
        }
        var loc1 = this.checkConnectable();
        if (loc1.length > 0) {
            loc2 = loc1[Math.floor(Math.random() * loc1.length)];
            this.stopCandyTip();
            loc3 = loc2[0];
            loc4 = loc2[Math.floor(Math.random() * (loc2.length - 1) + 1)];
            loc3.shake();
            loc4.shake();
        }
        return;
    };
    /**是否存在交换提示
     * 糖果晃动
     */
    FightCtrl.prototype.hasSwapTip = function () {
        var loc2 = 0;
        var loc3 = null;
        var loc1 = 0;
        while (loc1 < GameConst.ROW_COUNT) {
            loc2 = 0;
            while (loc2 < GameConst.COL_COUNT) {
                loc3 = this.candys[loc1][loc2];
                if (!(loc3 == null) && loc3.isShake) {
                    return true;
                }
                ++loc2;
            }
            ++loc1;
        }
        return false;
    };
    /**停止游戏提示(摇动的糖果可以交换shake) */
    FightCtrl.prototype.stopCandyTip = function () {
        var loc2 = 0;
        var loc3 = null;
        var loc1 = 0;
        while (loc1 < GameConst.ROW_COUNT) {
            loc2 = 0;
            while (loc2 < GameConst.COL_COUNT) {
                loc3 = this.candys[loc1][loc2];
                if (loc3 != null) {
                    loc3.stopShake();
                }
                ++loc2;
            }
            ++loc1;
        }
        return;
    };
    /**交换有效
     * 判断交换类型并执行对应效果
     */
    FightCtrl.prototype.handleValidSwap = function () {
        this.gameState = FightCtrl.STATE_GAME_REMOVE;
        this.handleGuide();
        if (this.aimCard.status == 4 || this.selectedCard.status == 4 || this.aimCard.status > 0 && this.selectedCard.status > 0) {
            // com.popchan.framework.manager.Debug.log("特殊交换");
            this.matchCountOnceSwap = 0;
            this.checkSpecialSwapMathces();
            if (this.currentLevel.mode == GameMode.NORMAL) {
                Model.gameModel.step = Model.gameModel.step - 1;
            }
            this.checkNeedDropFruit();
            this.selectedCard = null;
            this.aimCard = null;
        }
        else {
            // com.popchan.framework.manager.Debug.log("普通交换");
            this.removeAllMatches();
            this.matchCountOnceSwap = 0;
            this.checkNeedDropFruit();
            if (this.currentLevel.mode == GameMode.NORMAL) {
                Model.gameModel.step = Model.gameModel.step - 1;
            }
        }
        return;
    };
    FightCtrl.prototype.checkHasMatches = function (arg1) {
        if (arg1 === void 0) { arg1 = true; }
        var loc1 = 0;
        var loc2 = 0;
        loc1 = 0;
        while (loc1 < GameConst.ROW_COUNT) {
            loc2 = 0;
            while (loc2 < GameConst.COL_COUNT) {
                if (this.candys[loc1][loc2] != null) {
                    if (this.getHorizMatches(this.candys, loc1, loc2).length >= 3) {
                        return true;
                    }
                    if (this.getVertMatches(this.candys, loc1, loc2).length >= 3) {
                        return true;
                    }
                }
                ++loc2;
            }
            ++loc1;
        }
        if (arg1) {
            if (this.checkFruitIsEnd().length > 0) {
                return true;
            }
        }
        return false;
    };
    /**寻找所有已匹配糖果以及附近障碍物 */
    FightCtrl.prototype.searchMatchesAndMark = function () {
        var row = 0;
        var col = 0;
        var loc6 = null;
        var candy_spl = null;
        var loc8 = null;
        var loc9 = null;
        var loc10 = null;
        var loc11 = null;
        // let loc1 = egret.getTimer();
        var loc2 = new Array();
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((candy_spl = this.candys[row][col]) != null) {
                    candy_spl.setNextStatus(0);
                    candy_spl.mark = false;
                    candy_spl.remove = false;
                }
                ++col;
            }
            ++row;
        } //将所有糖果下一状态均置为0
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((candy_spl = this.candys[row][col]) != null) {
                    if (!candy_spl.mark) {
                        if ((loc8 = this.getHorizMatches(this.candys, row, col)).length >= 5) {
                            this.markAndChangeStatus(loc8, CandySpecialStatus.COLORFUL);
                        }
                        else if ((loc9 = this.getVertMatches(this.candys, row, col)).length >= 5) {
                            this.markAndChangeStatus(loc9, CandySpecialStatus.COLORFUL);
                        }
                    }
                }
                ++col;
            }
            ++row;
        } //检查是否生成了帝王糖果(水平/竖直连续5个candy)
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((candy_spl = this.candys[row][col]) != null) {
                    if (!candy_spl.mark) {
                        if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.UP, BombDirection.DOWN, BombDirection.LEFT], [-1, 1, -2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                        else if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.UP, BombDirection.DOWN, BombDirection.RIGHT], [-1, 1, 2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                        else if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.LEFT, BombDirection.RIGHT, BombDirection.UP], [-1, 1, -2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                        else if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.LEFT, BombDirection.RIGHT, BombDirection.DOWN], [-1, 1, 2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                    }
                }
                ++col;
            }
            ++row;
        } //检查是否生成了爆炸糖果(T型)
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((candy_spl = this.candys[row][col]) != null) {
                    if (!candy_spl.mark) {
                        if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.RIGHT, BombDirection.UP], [2, -2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                        else if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.LEFT, BombDirection.UP], [-2, -2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                        else if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.LEFT, BombDirection.DOWN], [-2, 2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                        else if ((loc6 = this.getHVMatches(this.candys, row, col, [BombDirection.RIGHT, BombDirection.DOWN], [2, 2])).length >= 5) {
                            this.markAndChangeStatus(loc6, CandySpecialStatus.BOMB);
                        }
                    }
                }
                ++col;
            }
            ++row;
        } //检查是否生成了爆炸糖果(L型)
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((candy_spl = this.candys[row][col]) != null) {
                    if (!candy_spl.mark) {
                        if ((loc10 = this.getHorizMatches(this.candys, row, col)).length != 4) {
                            if ((loc11 = this.getVertMatches(this.candys, row, col)).length != 4) {
                                if (loc10.length != 3) {
                                    if (loc11.length == 3) {
                                        this.markAndChangeStatus(loc11, CandySpecialStatus.NOTHING);
                                    }
                                }
                                else {
                                    this.markAndChangeStatus(loc10, CandySpecialStatus.NOTHING);
                                }
                            }
                            else {
                                this.markAndChangeStatus(loc11, CandySpecialStatus.HORIZ);
                            }
                        }
                        else {
                            this.markAndChangeStatus(loc10, CandySpecialStatus.VERT);
                        }
                    }
                }
                ++col;
            }
            ++row;
        } //检查是否生成了水平/竖直糖果(4个连续candy),3个无事发生
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if (!((candy_spl = this.candys[row][col]) == null) && candy_spl.remove) {
                    loc2.push(candy_spl);
                }
                ++col;
            }
            ++row;
        }
        // com.popchan.framework.manager.Debug.log("搜索移除耗时:" + (flash.utils.getTimer() - loc1) + "ms" + "---" + loc2.length);
        return loc2;
    };
    //标记待消除candys以及消除后的状态candystatus
    FightCtrl.prototype.markAndChangeStatus = function (del_candys, candystatus) {
        if (candystatus === void 0) { candystatus = 0; }
        var candy = null;
        var loc1 = false;
        var loc3 = 0;
        for (var pos in del_candys) {
            candy = del_candys[pos];
            candy.mark = true;
            candy.remove = true;
            if (!((candy == this.selectedCard || candy == this.aimCard) && candystatus > 0)) {
                continue;
            }
            loc1 = true;
            candy.setNextStatus(candystatus);
        }
        if (!loc1 && candystatus > 0) {
            del_candys[(del_candys.length - 1)].setNextStatus(candystatus);
        }
        return;
    };
    FightCtrl.prototype.handleGuide = function () {
        if (Model.levelModel.selectedLevel != 1) {
            if (Model.levelModel.selectedLevel != 2) {
                if (Model.levelModel.selectedLevel != 3) {
                    if (Model.levelModel.selectedLevel != 4) {
                        if (Model.levelModel.selectedLevel == 5) {
                            if (this.selectedCard == this.candys[1][1] && this.aimCard == this.candys[1][2] || this.aimCard == this.candys[1][1] && this.selectedCard == this.candys[1][2]) {
                                GuideManager.instance.nextStep();
                            }
                        }
                    }
                    else if (this.selectedCard == this.candys[6][4] && this.aimCard == this.candys[7][4] || this.aimCard == this.candys[6][4] && this.selectedCard == this.candys[7][4]) {
                        GuideManager.instance.nextStep();
                    }
                }
                else if (this.selectedCard == this.candys[2][4] && this.aimCard == this.candys[3][4] || this.aimCard == this.candys[2][4] && this.selectedCard == this.candys[3][4]) {
                    GuideManager.instance.nextStep();
                }
            }
            else if (this.selectedCard == this.candys[5][5] && this.aimCard == this.candys[6][5] || this.aimCard == this.candys[5][5] && this.selectedCard == this.candys[6][5]) {
                GuideManager.instance.nextStep();
            }
        } //end of !=1
        else if (this.selectedCard == this.candys[2][2] && this.aimCard == this.candys[2][1] || this.aimCard == this.candys[2][2] && this.selectedCard == this.candys[2][1]) {
            GuideManager.instance.nextStep();
        }
        else if (this.selectedCard == this.candys[2][7] && this.aimCard == this.candys[2][6] || this.aimCard == this.candys[2][7] && this.selectedCard == this.candys[2][6]) {
            GuideManager.instance.nextStep();
        }
        return;
    };
    /**水平连续 */
    FightCtrl.prototype.getHorizMatches = function (candys, row, col) {
        var loc1 = [candys[row][col]];
        var cols = col + 1;
        while (cols < GameConst.COL_COUNT) {
            if (!(candys[row][cols] == null) && candys[row][col].color == candys[row][cols].color && candys[row][cols].color > 0 && this.isCandyValidPos(row, cols)) {
                loc1.push(candys[row][cols]);
            }
            else {
                break;
            }
            ++cols;
        }
        return loc1;
    };
    /**竖直连续 */
    FightCtrl.prototype.getVertMatches = function (candys, row, col) {
        var loc1 = [candys[row][col]];
        var rows = row + 1;
        while (rows < GameConst.ROW_COUNT) {
            if (!(candys[rows][col] == null) && candys[row][col].color == candys[rows][col].color && candys[rows][col].color > 0 && this.isCandyValidPos(rows, col)) {
                loc1.push(candys[rows][col]);
            }
            else {
                break;
            }
            ++rows;
        }
        return loc1;
    };
    /**T或L型*/
    FightCtrl.prototype.getHVMatches = function (candys, row, col, Directions, steps) {
        var loc3 = 0;
        var direction = 0;
        var loc1 = [candys[row][col]];
        var walk_in = 0;
        var loc4 = 0;
        while (loc4 < Directions.length) {
            direction = Directions[loc4];
            if (direction == BombDirection.LEFT) {
                loc3 = Math.max(0, col + steps[loc4]);
                walk_in = col - 1;
                while (walk_in >= loc3) {
                    if (!(candys[row][walk_in] == null) && candys[row][col].color == candys[row][walk_in].color) {
                        loc1.push(candys[row][walk_in]);
                    }
                    --walk_in;
                }
            }
            if (direction == BombDirection.RIGHT) {
                loc3 = Math.min((GameConst.COL_COUNT - 1), col + steps[loc4]);
                walk_in = col + 1;
                while (walk_in <= loc3) {
                    if (!(candys[row][walk_in] == null) && candys[row][col].color == candys[row][walk_in].color) {
                        loc1.push(candys[row][walk_in]);
                    }
                    ++walk_in;
                }
            }
            if (direction == BombDirection.DOWN) {
                loc3 = Math.min((GameConst.ROW_COUNT - 1), row + steps[loc4]);
                walk_in = row + 1;
                while (walk_in <= loc3) {
                    if (!(candys[walk_in][col] == null) && candys[row][col].color == candys[walk_in][col].color) {
                        loc1.push(candys[walk_in][col]);
                    }
                    ++walk_in;
                }
            }
            if (direction == BombDirection.UP) {
                loc3 = Math.max(0, row + steps[loc4]);
                walk_in = row - 1;
                while (walk_in >= loc3) {
                    if (!(candys[walk_in][col] == null) && candys[row][col].color == candys[walk_in][col].color) {
                        loc1.push(candys[walk_in][col]);
                    }
                    --walk_in;
                }
            }
            ++loc4;
        }
        return loc1;
    };
    /**移除水果、糖果及其障碍物 */
    FightCtrl.prototype.removeAllMatches = function () {
        var loc1 = this.checkFruitIsEnd();
        if (loc1.length > 0) {
            this.removeFruits(loc1);
            this.gameState = FightCtrl.STATE_GAME_WAIT_DROP;
        }
        var loc2 = this.searchMatchesAndMark();
        if (loc2.length >= 3) {
            if (this.checkHasStatusCandy(loc2)) {
                this.tempScore = 300;
            }
            else {
                this.tempScore = (loc2.length - 3) * 25 + 50;
            }
            this.handleRemoveList(loc2);
            this.gameState = FightCtrl.STATE_GAME_WAIT_DROP;
            this.aimCard = null;
            this.selectedCard = null;
        }
        return;
    };
    FightCtrl.prototype.checkBomb = function () {
        var col = 0;
        var loc3 = null;
        var row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                loc3 = this.candys[row][col];
                if (loc3 && loc3.getBombCount() > 0) {
                    loc3.bombCountUpdate();
                }
                ++col;
            }
            ++row;
        }
        return;
    };
    FightCtrl.prototype.checkEatAndMonster = function () {
        var loc2 = null;
        var loc3 = null;
        var eat1 = null;
        var Pos1 = null;
        var candy = null;
        var eat2 = null;
        var Pos2 = null;
        var loc9 = null;
        var monster = null;
        var Pos3 = null;
        var Pos4 = null;
        if (!this.eatRemoved) {
            loc2 = this.getEatAndAroundCandys();
            if (loc2.length > 0) {
                loc3 = loc2[Math.floor(Math.random() * loc2.length)];
                (eat1 = loc3.eat).zoomOutIn();
                Pos1 = loc3.pos;
                if (!((candy = this.candys[Pos1.x][Pos1.y]) == null) && !candy.isFruit() && !candy.isBomb()) {
                    this.candys[Pos1.x][Pos1.y] = null;
                    candy.parent.removeChild(candy);
                    candy.reset();
                    Candy.pool.put(candy);
                    (eat2 = Eat.pool.take()).row = Pos1.x;
                    eat2.col = Pos1.y;
                    eat2.reset();
                    this.eats[Pos1.x][Pos1.y] = eat2;
                    eat2.zoomIn();
                    SoundCtrl.I.playmusic("msc_virus");
                    Pos2 = this.getCandyPosition(Pos1.x, Pos1.y);
                    eat2.x = Pos2.x;
                    eat2.y = Pos2.y;
                    this.eat_layer.addChild(eat2);
                }
            }
        }
        this.eatRemoved = false;
        var loc1 = this.getMonsterAndAroundCandys();
        if (loc1.length > 0) {
            for (var loc in loc1) {
                loc9 = loc1[loc];
                monster = loc9.monster;
                Pos3 = loc9.pos;
                this.monsters[monster.row][monster.col] = null;
                monster.row = Pos3.x;
                monster.col = Pos3.y;
                this.monsters[Pos3.x][Pos3.y] = monster;
                Pos4 = this.getCandyPosition(Pos3.x, Pos3.y);
                egret.Tween.get(monster).to({ "x": Pos4.x, "y": Pos4.y }, 100);
            }
            SoundCtrl.I.playmusic("msc_moveable");
        }
        if (this.matchCountOnceSwap >= 40) {
            this.addGoodTip(3);
        }
        else if (this.matchCountOnceSwap >= 25) {
            this.addGoodTip(2);
        }
        else if (this.matchCountOnceSwap >= 10) {
            this.addGoodTip(1);
        }
        this.matchCountOnceSwap = 0;
        return;
    };
    FightCtrl.prototype.checkHasStatusCandy = function (arg1) {
        for (var loc1 in arg1) {
            if (!(arg1[loc1].status == 1 || arg1[loc1].status == 2 || arg1[loc1].status == 3)) {
                continue;
            }
            return true;
        }
        return false;
    };
    /**返回所有水果糖果 */
    FightCtrl.prototype.checkFruitIsEnd = function () {
        var loc4 = 0;
        var loc6 = null;
        var loc1 = new Array();
        var loc3 = 0;
        while (loc3 < GameConst.ROW_COUNT) {
            loc4 = 0;
            while (loc4 < GameConst.COL_COUNT) {
                if (this.currentLevel.entryAndExit[loc3][loc4] == TileConst.FRUIT_END) {
                    if (!((loc6 = this.candys[loc3][loc4]) == null) && loc6.isFruit()) {
                        loc1.push(loc6);
                    }
                }
                ++loc4;
            }
            ++loc3;
        }
        return loc1;
    };
    /*特殊交换**/
    FightCtrl.prototype.checkSpecialSwapMathces = function () {
        var matches = [];
        var cols = null;
        var rows = null;
        var candyA = null;
        var candyB = null;
        var loc1;
        if (this.selectedCard.status < this.aimCard.status) {
            candyA = this.aimCard;
            candyB = this.selectedCard;
        }
        else {
            candyA = this.selectedCard;
            candyB = this.aimCard;
        }
        if (candyA.status != CandySpecialStatus.COLORFUL) {
            if (candyA.status != CandySpecialStatus.BOMB) {
                if (candyA.status != CandySpecialStatus.VERT) {
                    if (candyA.status == CandySpecialStatus.HORIZ) {
                        if (candyB.status == CandySpecialStatus.HORIZ) {
                            candyB.setSpecialStatus(2);
                            this.tempScore = 300;
                            this.removeCandys([candyA, candyB]);
                            this.waitDrop();
                        }
                    }
                }
                else if (candyB.status != CandySpecialStatus.VERT) {
                    if (candyB.status == CandySpecialStatus.HORIZ) {
                        this.tempScore = 300;
                        this.removeCandys([candyA, candyB]);
                        this.waitDrop();
                    }
                }
                else {
                    this.tempScore = 300;
                    candyB.setSpecialStatus(1);
                    this.removeCandys([candyA, candyB]);
                    this.waitDrop();
                }
            }
            else if (candyB.status != CandySpecialStatus.BOMB) {
                if (candyB.status != CandySpecialStatus.VERT) {
                    if (candyB.status == CandySpecialStatus.HORIZ) {
                        if (candyA.row < candyB.row) {
                            rows = [(candyA.row - 1), candyA.row, candyB.row, candyB.row + 1];
                        }
                        else if (candyA.row > candyB.row) {
                            rows = [candyA.row + 1, candyA.row, candyB.row, (candyB.row - 1)];
                        }
                        else if (candyA.row == candyB.row) {
                            rows = [(candyA.row - 1), candyA.row, candyB.row + 1];
                        }
                        matches = this.getCandysByRowsOrCols(rows, []);
                        this.tempScore = 300;
                        this.removeCandys(matches);
                        this.waitDrop();
                    }
                }
                else {
                    if (candyA.col < candyB.col) {
                        cols = [(candyA.col - 1), candyA.col, candyB.col, candyB.col + 1];
                    }
                    else if (candyA.col > candyB.col) {
                        cols = [candyA.col + 1, candyA.col, candyB.col, (candyB.col - 1)];
                    }
                    else if (candyA.col == candyB.col) {
                        cols = [(candyA.col - 1), candyA.col, candyB.col + 1];
                    }
                    matches = this.getCandysByRowsOrCols([], cols);
                    this.tempScore = 300;
                    this.removeCandys(matches);
                    this.waitDrop();
                }
            }
            else {
                matches = this.getAroundCandys2(candyA, candyB);
                this.tempScore = 300;
                this.removeCandys(matches);
                this.waitDrop();
            }
        }
        else if (candyB.status != CandySpecialStatus.COLORFUL) {
            if (candyB.status != CandySpecialStatus.BOMB) {
                if (candyB.status != CandySpecialStatus.VERT) {
                    if (candyB.status != CandySpecialStatus.HORIZ) {
                        if (candyB.status == CandySpecialStatus.NOTHING) {
                            matches = this.getCandysByColorType(candyB.color);
                            this.createRayEffect(candyA, matches);
                        }
                    }
                    else {
                        matches = this.getCandysByColorType(candyB.color);
                        this.createLaserEffect(candyA, matches, CandySpecialStatus.HORIZ, true, false);
                    }
                }
                else {
                    matches = this.getCandysByColorType(candyB.color);
                    this.createLaserEffect(candyA, matches, CandySpecialStatus.VERT, true, false);
                }
            }
            else {
                matches = this.getCandysByColorType(candyB.color);
                this.createLaserEffect(candyA, matches, CandySpecialStatus.BOMB, false, true);
            }
        }
        else {
            matches = this.getAllCandys();
            this.tempScore = 300;
            this.removeCandys(matches);
            this.waitDrop();
        }
        return;
    };
    /**帝王糖果和特殊糖果交换后生成特效*/
    FightCtrl.prototype.createLaserEffect = function (candy, matches, changeStatus, isRandomLine, callType) {
        var laserEffect = null;
        for (var i = 0; i < matches.length; i++) {
            laserEffect = LaserEffect.pool.take();
            laserEffect.x = candy.x;
            laserEffect.y = candy.y;
            this.container.addChild(laserEffect);
            laserEffect.Animation(candy, matches, i, changeStatus, isRandomLine, callType);
        }
        return;
    };
    /**帝王糖果和普通糖果交换后生成射线特效*/
    FightCtrl.prototype.createRayEffect = function (candy, matches) {
        var laserEffect = null;
        for (var i = 0; i < matches.length; i++) {
            laserEffect = RayEffect.pool.take();
            laserEffect.x = candy.x;
            laserEffect.y = candy.y;
            this.container.addChild(laserEffect);
            laserEffect.Animation(candy, matches, i);
        }
        return;
    };
    //移除所有匹配素材及其周围障碍物
    FightCtrl.prototype.handleRemoveList = function (candys) {
        var loc2 = null;
        var loc1 = 0;
        var hasspecial = false;
        while (loc1 < candys.length) {
            loc2 = candys[loc1];
            if (loc2.getNextStatus() > 0) {
                this.removeCandys([loc2]);
                this.newCandy(loc2.row, loc2.col, loc2.color).setSpecialStatus(loc2.getNextStatus(), true);
                candys.splice(loc1, 1);
                --loc1;
                hasspecial = true;
            }
            if (!hasspecial) {
                SoundCtrl.I.playmusic("msc_moveable");
            }
            ++loc1;
        }
        this.removeCandys(candys);
        return;
    };
    /**移除糖果 */
    FightCtrl.prototype.removeCandys = function (arg1) {
        var loc2 = null;
        var loc3 = 0;
        var re_candys = null;
        var loc5 = null;
        var loc6 = null;
        var candy = null;
        var ice = null;
        var eat = null;
        var monster = null;
        var brick = null;
        var loc1 = [];
        var loc12 = 0;
        var loc13 = arg1;
        for (var loc2_2 in arg1) {
            re_candys = this.searchSpecialRelativeCandys(arg1[loc2_2]);
            var loc14 = 0;
            for (var pos in re_candys) {
                loc5 = re_candys[pos];
                if (loc1.indexOf(loc5) != -1) {
                    continue;
                }
                loc1.push(loc5);
            }
        }
        loc3 = (loc1.length - 1);
        while (loc3 >= 0) {
            loc6 = loc1[loc3];
            if (!((candy = this.candys[loc6.x][loc6.y]) == null) && candy.color < 7) {
                this.removeElementAroundCandy(candy);
                this.addEffect(candy.status, candy.x, candy.y);
                candy.reset();
                this.candys[candy.row][candy.col] = null;
                Candy.pool.put(candy);
                candy.parent.removeChild(candy);
                this.matchCountOnceSwap = this.matchCountOnceSwap + 1;
            }
            else {
                if ((ice = this.ices[loc6.x][loc6.y]) == null) {
                    if ((brick = this.bricks[loc6.x][loc6.y]) != null) {
                        this.removeBrick(brick);
                    }
                }
                else {
                    this.removeIce(ice);
                }
                if ((eat = this.eats[loc6.x][loc6.y]) != null) {
                    this.eats[eat.row][eat.col] = null;
                    eat.doAnimation();
                    this.eatRemoved = true;
                }
                if ((monster = this.monsters[loc6.x][loc6.y]) != null) {
                    this.monsters[monster.row][monster.col] = null;
                    monster.doAnimation();
                }
            }
            --loc3;
        }
        return;
    };
    FightCtrl.prototype.waitDrop = function () {
        this.gameState = FightCtrl.STATE_GAME_WAIT_DROP;
        return;
    };
    FightCtrl.prototype.removeElementAroundCandy = function (candy) {
        var monster = null;
        var eat = null;
        var ice = null;
        var stone = null;
        if (candy.status != CandySpecialStatus.HORIZ) {
            if (candy.status != CandySpecialStatus.VERT) {
                if (candy.status == CandySpecialStatus.BOMB) {
                    SoundCtrl.I.playmusic("bomb_blast");
                }
            }
            else {
                SoundCtrl.I.playmusic("effect_hyper");
                Model.gameModel.offsetAim(AimType.LINE_BOMB, 1);
            }
        }
        else {
            SoundCtrl.I.playmusic("effect_hyper");
            Model.gameModel.offsetAim(AimType.LINE_BOMB, 1);
        } //修正分数
        var lock = this.locks[candy.row][candy.col];
        if (lock) {
            this.locks[candy.row][candy.col] = null;
            candy.remove = false;
            candy.mark = false;
            lock.doAnimation();
            return;
        }
        var brick = this.bricks[candy.row][candy.col];
        if (brick) {
            this.removeBrick(brick);
        }
        var Monsters = this.getNearMonster(candy.row, candy.col);
        var loc11 = 0;
        for (var loc in Monsters) {
            monster = Monsters[loc];
            this.monsters[monster.row][monster.col] = null;
            monster.doAnimation();
        }
        var Eats = this.getNearEat(candy.row, candy.col);
        loc11 = 0;
        for (var loc in Eats) {
            eat = Eats[loc];
            this.eats[eat.row][eat.col] = null;
            eat.doAnimation();
            this.eatRemoved = true;
        }
        var Ices = this.getNearIce(candy.row, candy.col);
        loc11 = 0;
        for (var loc in Ices) {
            ice = Ices[loc];
            this.removeIce(ice);
        }
        var Stones = this.getNearStone(candy.row, candy.col);
        loc11 = 0;
        for (var loc in Stones) {
            stone = Stones[loc];
            stone.setLife((stone.life - 1), true);
            if (stone.life != 0) {
                continue;
            }
            this.stones[stone.row][stone.col] = null;
            Stone.pool.put(stone);
            stone.parent.removeChild(stone);
        }
        if (candy.color != ColorType.GREEN) {
            if (candy.color != ColorType.RED) {
                if (candy.color != ColorType.BLUE) {
                    if (candy.color != ColorType.PURPLE) {
                        if (candy.color == ColorType.YELLOW) {
                            Model.gameModel.offsetAim(AimType.YELLOW, 1);
                        }
                    }
                    else {
                        Model.gameModel.offsetAim(AimType.PURPLE, 1);
                    }
                }
                else {
                    Model.gameModel.offsetAim(AimType.BLUE, 1);
                }
            }
            else {
                Model.gameModel.offsetAim(AimType.RED, 1);
            }
        }
        else {
            Model.gameModel.offsetAim(AimType.GREEN, 1);
        }
        Model.gameModel.score = Model.gameModel.score + this.tempScore;
        Model.gameModel.offsetAim(AimType.SCORE, this.tempScore);
        this.addScoreTip(candy.x, candy.y, this.tempScore, candy.color);
        return;
    };
    FightCtrl.prototype.removeIce = function (arg1) {
        SoundCtrl.I.playmusic("iceboom");
        arg1.setLife((arg1.life - 1), true);
        if (arg1.life == 0) {
            Model.gameModel.offsetAim(AimType.ICE, 1);
            this.ices[arg1.row][arg1.col] = null;
            Ice.pool.put(arg1);
            arg1.parent.removeChild(arg1);
        }
        return;
    };
    FightCtrl.prototype.removeBrick = function (arg1) {
        arg1.loseLife();
        if (arg1.life == 0) {
            this.bricks[arg1.row][arg1.col] = null;
            Brick.pool.put(arg1);
            arg1.parent.removeChild(arg1);
            Model.gameModel.offsetAim(AimType.BOARD, 1);
        }
        return;
    };
    FightCtrl.prototype.removeFruits = function (arg1) {
        // com.popchan.framework.manager.Debug.log("移除水果");
        var removeCandy = null;
        var tp = null;
        var disX;
        var disY;
        var dis;
        var loc2 = 0;
        for (var loc in arg1) {
            removeCandy = arg1[loc];
            this.addScoreTip(removeCandy.x, removeCandy.y, 10, removeCandy.color);
            this.addEffect(removeCandy.status, removeCandy.x, removeCandy.y);
            removeCandy.reset();
            this.candys[removeCandy.row][removeCandy.col] = null;
            this.container.addChild(removeCandy);
            tp = new egret.Point(0, 0);
            if (removeCandy.color != 7) {
                if (removeCandy.color != 8) {
                    if (removeCandy.color == 9) {
                        tp = this.infoPanel.getIconPos(AimType.FRUIT3);
                    }
                }
                else {
                    tp = this.infoPanel.getIconPos(AimType.FRUIT2);
                }
            }
            else {
                tp = this.infoPanel.getIconPos(AimType.FRUIT1);
            }
            if (removeCandy.color != ColorType.FRUIT1) {
                if (removeCandy.color != ColorType.FRUIT2) {
                    if (removeCandy.color == ColorType.FRUIT3) {
                        Model.gameModel.offsetAim(AimType.FRUIT3, 1);
                    }
                }
                else {
                    Model.gameModel.offsetAim(AimType.FRUIT2, 1);
                }
            }
            else {
                Model.gameModel.offsetAim(AimType.FRUIT1, 1);
            }
            disX = tp.x + this.infoPanel.x - removeCandy.x;
            disY = tp.y + this.infoPanel.y - removeCandy.y;
            dis = Math.sqrt(disX * disX + disY * disY);
            egret.Tween.get(removeCandy).to({ "x": tp.x + this.infoPanel.x, "y": tp.y + this.infoPanel.y, "scaleX": 0.6, "scaleY": 0.6 }, dis)
                .call(this.FruitCallFun, this, [removeCandy]);
        }
        return;
    };
    FightCtrl.prototype.FruitCallFun = function (candy) {
        Candy.pool.put(candy);
        candy.reset();
        candy.parent.removeChild(candy);
        return;
    };
    FightCtrl.prototype.searchSpecialRelativeCandys = function (arg1) {
        var candy_pos = null;
        var candy_spl = null;
        var re_Candys_Poses = null;
        var re_candy_Pos = null;
        var re_candy = null;
        var loc1 = new Array();
        var SpecCandysPoses = new Array();
        loc1.push(new egret.Point(arg1.row, arg1.col));
        while (loc1.length > 0) {
            candy_pos = loc1.shift();
            candy_spl = this.candys[candy_pos.x][candy_pos.y];
            SpecCandysPoses.push(candy_pos);
            if (!(candy_spl != null && candy_spl.status > 0)) {
                continue; //普通糖果则continue
            }
            re_Candys_Poses = this.getRelativeCandysByStatus(candy_spl);
            var loc8 = 0;
            for (var loc in re_Candys_Poses) {
                re_candy_Pos = re_Candys_Poses[loc];
                if ((re_candy = this.candys[re_candy_Pos.x][re_candy_Pos.y]) == candy_spl) {
                    continue;
                }
                if (!(re_candy == null) && re_candy.status > 0) {
                    if (!this.checkListContainPoint(loc1, re_candy_Pos) && !this.checkListContainPoint(SpecCandysPoses, re_candy_Pos)) {
                        loc1.push(re_candy_Pos);
                    }
                    continue;
                }
                if (this.checkListContainPoint(SpecCandysPoses, re_candy_Pos)) {
                    continue;
                }
                SpecCandysPoses.push(re_candy_Pos);
            }
        }
        return SpecCandysPoses;
    };
    FightCtrl.prototype.checkListContainPoint = function (arg1, arg2) {
        for (var loc1 in arg1) {
            if (!(arg1[loc1].x == arg2.x && arg1[loc1].y == arg2.y)) {
                continue;
            }
            return true;
        }
        return false;
    };
    /**检测现存糖果是否可以掉落
     * 并生成新的candy填充
     * 增加掉落动画
     *  */
    FightCtrl.prototype.checkTop = function () {
        var col = 0;
        var loc4 = false;
        var candy = null;
        // com.popchan.framework.manager.Debug.log("检测掉落");
        this.colAdd = [];
        this.tDoorAdd = [];
        var row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if (this.currentLevel.entryAndExit[row][col] != TileConst.ENTRY) {
                    if (this.currentLevel.entryAndExit[row][col] >= TileConst.T_DOOR_EXIT1 && this.currentLevel.entryAndExit[row][col] <= TileConst.T_DOOR_EXIT9) {
                        this.tDoorAdd[col] = (row - 1);
                    }
                }
                else {
                    this.colAdd[col] = (row - 1);
                }
                ++col;
            }
            ++row;
        }
        for (;;) {
            if (loc4 = this.dropAndAdd()) {
                continue;
            }
            break;
        }
        var loc2 = false;
        row = 0;
        while (row < GameConst.ROW_COUNT) {
            col = 0;
            while (col < GameConst.COL_COUNT) {
                if ((candy = this.candys[row][col]) != null) {
                    if (candy.path.length > 0) {
                        candy.runAsPath();
                        loc2 = true;
                    }
                }
                ++col;
            }
            ++row;
        }
        return loc2;
    };
    /**增加candy移动路径 */
    FightCtrl.prototype.dropAndAdd = function () {
        var loc4 = 0;
        var col = 0;
        var loc6 = null;
        var color = 0;
        var newcandy = null;
        var candyPos = null;
        var trancandy = null;
        var CandyPos = null;
        var newPos = null;
        var loc1 = false;
        var loc2 = [4, 3, 2, 1, 0, 5, 6, 7, 8];
        var row = (GameConst.ROW_COUNT - 1);
        while (row >= 0) {
            loc4 = 0;
            while (loc4 < loc2.length) {
                col = loc2[loc4];
                if ((loc6 = this.candys[row][col]) == null && !(this.currentLevel.tile[row][col] == 0) && !this.checkIsBlock(row, col)) {
                    if (this.currentLevel.entryAndExit[row][col] != TileConst.ENTRY) {
                        if (this.currentLevel.entryAndExit[row][col] >= TileConst.T_DOOR_EXIT1 && this.currentLevel.entryAndExit[row][col] <= TileConst.T_DOOR_EXIT9) {
                            if ((trancandy = this.getTransportCandy(this.currentLevel.entryAndExit[row][col])) != null) {
                                this.candys[trancandy.row][trancandy.col] = null;
                                trancandy.row = row;
                                trancandy.col = col;
                                CandyPos = this.getCandyPosition(this.tDoorAdd[col], col);
                                trancandy.addPath({ "pos": CandyPos, "type": 2 });
                                this.candys[row][col] = trancandy;
                                this.tDoorAdd[col] = this.tDoorAdd[col] - 1;
                                trancandy.addPath({ "pos": this.getCandyPosition(row, col), "type": 1 });
                                this.gameState = FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE;
                                loc1 = true;
                            }
                        }
                        else if (this.checkIsUpPosition(row, col)) {
                            if (this.isValidPos((row - 1), col + 1) && !this.checkIsBlock((row - 1), col + 1) && !(this.candys[(row - 1)][col + 1] == null)) {
                                newPos = new egret.Point((row - 1), col + 1);
                                this.candys[newPos.x][newPos.y].row = row;
                                this.candys[newPos.x][newPos.y].col = col;
                                this.candys[newPos.x][newPos.y].addPath({ "pos": this.getCandyPosition(row, col), "type": 1 });
                                this.candys[row][col] = this.candys[newPos.x][newPos.y];
                                this.candys[newPos.x][newPos.y] = null;
                                this.gameState = FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE;
                                loc1 = true;
                            }
                            else if (this.isValidPos((row - 1), (col - 1)) && !this.checkIsBlock((row - 1), (col - 1)) && !(this.candys[(row - 1)][(col - 1)] == null)) {
                                newPos = new egret.Point((row - 1), (col - 1));
                                this.candys[newPos.x][newPos.y].row = row;
                                this.candys[newPos.x][newPos.y].col = col;
                                this.candys[newPos.x][newPos.y].addPath({ "pos": this.getCandyPosition(row, col), "type": 1 });
                                this.candys[row][col] = this.candys[newPos.x][newPos.y];
                                this.candys[newPos.x][newPos.y] = null;
                                this.gameState = FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE;
                                loc1 = true;
                            }
                        }
                        else if ((newPos = this.getCandyCanDropPos(row, col)) != null) {
                            this.candys[newPos.x][newPos.y].row = row;
                            this.candys[newPos.x][newPos.y].col = col;
                            this.candys[newPos.x][newPos.y].addPath({ "pos": this.getCandyPosition(row, col), "type": 1 });
                            this.candys[row][col] = this.candys[newPos.x][newPos.y];
                            this.candys[newPos.x][newPos.y] = null;
                            this.gameState = FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE;
                            loc1 = true;
                        }
                    }
                    else {
                        color = 0;
                        if (this.nextFruitId > 0) {
                            color = this.nextFruitId;
                            this.nextFruitId = 0;
                        }
                        newcandy = this.newCandy(row, col, color);
                        candyPos = this.getCandyPosition(this.colAdd[col], col);
                        newcandy.x = candyPos.x;
                        newcandy.y = candyPos.y;
                        this.gameState = FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE;
                        newcandy.addPath({ "pos": this.getCandyPosition(row, col), "type": 1 });
                        loc1 = true;
                        --this.colAdd[col];
                        // com.popchan.framework.manager.Debug.log("添加新的candy", loc3, loc5);
                    }
                }
                ++loc4;
            }
            --row;
        }
        return loc1;
    };
    FightCtrl.prototype.checkIsUpPosition = function (arg1, arg2) {
        var row = 0;
        var col = 0;
        while (col < GameConst.COL_COUNT) {
            row = 0;
            while (row < GameConst.ROW_COUNT) {
                if (this.currentLevel.tile[row][col] != 0) {
                    if (arg1 == row && arg2 == col) {
                        return true;
                    }
                    break;
                }
                ++row;
            }
            ++col;
        }
        return false;
    };
    /**获得糖果可以掉落的位置 */
    FightCtrl.prototype.getCandyCanDropPos = function (row, col) {
        var loc1 = row - 1; //
        if (loc1 < 0) {
            return null;
        }
        if (!(this.candys[loc1][col] == null) && !this.checkIsBlock(loc1, col) && !this.hasIronWire(loc1, col, 2)) {
            return new egret.Point(loc1, col);
        } //[row-1][col]位置可以掉落(正上方一格位置)
        if (this.ices[loc1][col] != null || this.locks[loc1][col] || this.hasIronWire(loc1, col, 2) || this.checkTopIsBlockByCol(loc1, col)) {
            if ((col - 1) >= 0 && !(this.candys[loc1][(col - 1)] == null) && !this.checkIsBlock(loc1, (col - 1))) {
                return new egret.Point(loc1, (col - 1));
            }
            if (col + 1 < GameConst.COL_COUNT && !(this.candys[loc1][col + 1] == null) && !this.checkIsBlock(loc1, col + 1)) {
                return new egret.Point(loc1, col + 1);
            }
        }
        else if (this.currentLevel.tile[loc1][col] == 0) {
            return this.getCandyCanDropPos(loc1, col);
        }
        return null;
    };
    FightCtrl.prototype.checkTopIsBlockByCol = function (arg1, arg2) {
        var loc1 = arg1;
        while (loc1 >= 0) {
            if (this.currentLevel.tile[loc1][arg2] > 0) {
                if (this.candys[loc1][arg2] != null) {
                    return false;
                }
                if (this.checkIsBlock(loc1, arg2)) {
                    return true;
                }
            }
            --loc1;
        }
        return false;
    };
    FightCtrl.STATE_GAME_REMOVE = 3;
    FightCtrl.STATE_INIT = 1;
    FightCtrl.STATE_GAME = 2;
    FightCtrl.STATE_PAUSE = 3;
    FightCtrl.STATE_END = 4;
    FightCtrl.STATE_WAIT = 5;
    FightCtrl.STATE_GAME_WAIT = 1;
    FightCtrl.STATE_GAME_SWAP = 2;
    FightCtrl.STATE_GAME_WAIT_DROP = 4;
    FightCtrl.STATE_GAME_CHECK_DROP_COMPLETE = 5;
    FightCtrl.STATE_GAME_SHUFFLE = 6;
    FightCtrl.STATE_GAME_END = 7;
    FightCtrl.STATE_END_VICTORY = 1;
    FightCtrl.STATE_END_FAILED = 2;
    FightCtrl.DROP_DELAY = 15;
    FightCtrl.timeFrame = 30;
    return FightCtrl;
}());
__reflect(FightCtrl.prototype, "FightCtrl");
//# sourceMappingURL=FightCtrl.js.map