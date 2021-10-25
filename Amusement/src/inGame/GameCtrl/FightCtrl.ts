/**战斗逻辑控制器
 * 刷新金币数,关卡数,时间,分数
 * 负责加分
 * 重置金币数,关卡数,时间,分数
 */
class FightCtrl {
    public _fightui: FightUI;

    private kb: KeyBoard;

    public static STATE_GAME_REMOVE: number = 3;

    public static STATE_INIT: number = 1;

    public static STATE_GAME: number = 2;

    public static STATE_PAUSE: number = 3;

    public static STATE_END: number = 4;

    public static STATE_WAIT: number = 5;

    public static STATE_GAME_WAIT: number = 1;

    public static STATE_GAME_SWAP: number = 2;

    public static STATE_GAME_WAIT_DROP: number = 4;

    public static STATE_GAME_CHECK_DROP_COMPLETE: number = 5;

    public static STATE_GAME_SHUFFLE: number = 6;

    public static STATE_GAME_END: number = 7;

    public static STATE_END_VICTORY: number = 1;

    public static STATE_END_FAILED: number = 2;

    public static DROP_DELAY: number = 15;

    public container: egret.DisplayObjectContainer;

    public candy_layer: egret.DisplayObjectContainer;

    public tileBg_layer: egret.DisplayObjectContainer;

    public door_layer: egret.DisplayObjectContainer;

    public ice_layer: egret.DisplayObjectContainer;

    public stone_layer: egret.DisplayObjectContainer;

    public lock_layer: egret.DisplayObjectContainer;

    public eat_layer: egret.DisplayObjectContainer;

    public monster_layer: egret.DisplayObjectContainer;

    public ironWire_layer: egret.DisplayObjectContainer;

    public selectedCard: Candy;//点击的糖果

    public aimCard: Candy;  //与之交换的糖果

    public isMoving: boolean;

    public candys: Array<Array<Candy>>;

    public addFruitIndex: number;

    public nextFruitId: number;

    public colAdd: Array<number>;

    public tDoorAdd: Array<number>;

    public eatRemoved: boolean = false;

    public state: number;

    public gameState: number;

    public dropCount: number = 0;

    public tipCount: number = 0;

    public tipDelay: number = 400;

    public tempScore: number;

    public matchCountOnceSwap: number = 0;

    public brick_layer: egret.DisplayObjectContainer;

    public currentLevel: LevelCO;

    public offsetX: number = 0;

    public offsetY: number = 0;

    public tileBgs: Array<Array<TileBg>>;

    public tileBoarders: Array<Array<TileBoarder>>;

    public infoPanel: InfoPanel;

    public bricks: Array<Array<Brick>>;

    public locks: Array<Array<Lock>>;

    public ices: Array<Array<Ice>>;

    public eats: Array<Array<Eat>>;

    public monsters: Array<Array<Monster>>;

    public stones: Array<Array<Stone>>;

    public tDoors: Array<Array<TransportDoor>>;

    public ironWires: Array<Array<IronWire>>;

    //

    public newGamed: boolean = false;

    public timeBegined: boolean = false;

    public timeFrameCount: number = 0;

    public static timeFrame: number = 30;




    constructor() {
        this.kb = new KeyBoard();
        return;
    }

    public render() {
        this.update();
        this.CandyShakerender();
        this.onTimer();
    }


    public CandyShakerender() {
        for (let row = 0; row < GameConst.ROW_COUNT; row++) {
            for (let col = 0; col < GameConst.COL_COUNT; col++) {
                if (this.candys[row][col] != null) {
                    this.candys[row][col].Shakerender();
                }
            }
        }
    }



    public reset() {
    }


    public getTransportCandy(arg1: number): Candy {
        let loc1 = arg1 - 9;
        let loc2 = this.currentLevel.entryAndExit;
        for (let loc3 = 0; loc3 < GameConst.ROW_COUNT; loc3++) {
            for (let loc4 = 0; loc4 < GameConst.COL_COUNT; loc4++) {
                if (loc2[loc3][loc4] == loc1) {
                    if (this.candys[loc3][loc4] != null) {
                        return this.candys[loc3][loc4];
                    }
                }
            }
        }
        return null;
    }

    /**该位置是否存在限制
     * 限制为ice,lock,stones,eat和monster
     */
    public checkIsBlock(arg1: number, arg2: number): boolean {
        if (!(this.ices[arg1][arg2] == null) || !(this.locks[arg1][arg2] == null) || !(this.stones[arg1][arg2] == null) || !(this.eats[arg1][arg2] == null) || !(this.monsters[arg1][arg2] == null)) {
            return true;
        }
        return false;
    }

    /**判断是否存在可连接
     * 返回数组为可匹配candys
     */
    public checkConnectable(): Array<Array<Candy>> {
        let loc2: Array<Candy> = null;
        let loc3 = new Array<Array<Candy>>();
        for (let loc4 = 0; loc4 < GameConst.ROW_COUNT; loc4++) {
            for (let loc5 = 0; loc5 < GameConst.COL_COUNT; loc5++) {
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
    }

    /**arg1为待检测位置,检测是否匹配 */
    public checkMatches(arg1: Array<number>, arg2: Array<number>, arg3: Array<number>, arg4: Array<Array<number>>): Array<Candy> {
        let loc10 = 0;
        let loc11 = 0;
        let loc2 = new Array<Candy>();
        let loc3 = arg1[0];
        let loc4 = arg1[1];
        let loc5 = loc3 + arg2[0];
        let loc6 = loc4 + arg2[1];
        let loc7 = loc3 + arg3[0];
        let loc8 = loc4 + arg3[1];
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
        for (let loc9 = 0; loc9 < arg4.length; loc9++) {
            loc10 = arg4[loc9][0] + loc3;
            loc11 = arg4[loc9][1] + loc4;
            if (this.isValidPos(loc10, loc11) && !(this.candys[loc10][loc11] == null)) {
                if (this.candys[loc3][loc4].color == this.candys[loc10][loc11].color && !this.checkIsBlock(loc10, loc11)) {
                    loc2.push(this.candys[loc10][loc11]);
                }
            }
        }
        return loc2;
    }

    /**上下左右 */
    public getNearIce(arg1: number, arg2: number): Array<Ice> {
        let loc4 = 0;
        let loc5 = 0;
        let loc1 = new Array<Ice>();
        let loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let loc3: number = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.ices[loc4][loc5] != null) {
                    loc1.push(this.ices[loc4][loc5]);
                }
            }
        }
        return loc1;
    }

    public getNearStone(arg1: number, arg2: number): Array<Stone> {
        let loc4 = 0;
        let loc5 = 0;
        let loc1 = new Array<Stone>();
        let loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let loc3 = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.stones[loc4][loc5] != null) {
                    loc1.push(this.stones[loc4][loc5]);
                }
            }
        }
        return loc1;
    }

    public getNearEat(arg1: number, arg2: number): Array<Eat> {
        let loc4 = 0;
        let loc5 = 0;
        let loc1 = new Array<Eat>();
        let loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let loc3 = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.eats[loc4][loc5] != null) {
                    loc1.push(this.eats[loc4][loc5]);
                }
            }
        }
        return loc1;
    }

    public getNearMonster(arg1: number, arg2: number): Array<Monster> {
        let loc4 = 0;
        let loc5 = 0;
        let loc1 = new Array<Monster>();
        let loc2 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let loc3 = 0; loc3 < loc2.length; loc3++) {
            loc4 = arg1 + loc2[loc3][0];
            loc5 = arg2 + loc2[loc3][1];
            if (this.isValidPos(loc4, loc5)) {
                if (this.monsters[loc4][loc5] != null) {
                    loc1.push(this.monsters[loc4][loc5]);
                }
            }
        }
        return loc1;
    }

    public getCandysByColorType(arg1: number): Array<Candy> {
        let loc1 = new Array<Candy>();
        for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (let loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                if (!(this.candys[loc2][loc3] == null) && this.candys[loc2][loc3].color == arg1) {
                    loc1.push(this.candys[loc2][loc3]);
                }
            }
        }
        return loc1;
    }

    public getSpecialCandys(): Array<Candy> {
        let loc4: Candy = null;
        let loc1 = new Array<Candy>();
        for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (let loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                loc4 = this.candys[loc2][loc3];
                if (!(loc4 == null) && loc4.status > 0 && loc4.status < 5) {
                    loc1.push(loc4);
                }
            }
        }
        return loc1;
    }

    public getNormalCandys(): Array<Candy> {
        let loc4: Candy = null;
        let loc1 = new Array<Candy>();
        for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (let loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                loc4 = this.candys[loc2][loc3];
                if (!(loc4 == null) && loc4.status == 0) {
                    loc1.push(loc4);
                }
            }
        }
        return loc1;
    }

    /**arg1为行数组,arg2为列数组
     * 返回所有以arg1[x]为行的candy和以arg2[y]为列的candy
     */
    public getCandysByRowsOrCols(arg1: Array<number>, arg2: Array<number>): Array<Candy> {
        let loc2 = 0;
        let loc3 = 0;
        let loc4: Candy = null;
        let loc1 = new Array<Candy>();
        for (let loc5 = 0; loc5 < arg1.length; loc5++) {
            loc2 = arg1[loc5];
            if (!(loc2 < 0 || loc2 >= GameConst.ROW_COUNT)) {
                for (let loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                    loc4 = this.candys[loc2][loc3];
                    if (!(loc4 == null) && !loc4.isFruit()) {
                        loc1.push(loc4);
                    }
                }
            }
        }
        for (let loc5 = 0; loc5 < arg2.length; loc5++) {
            loc3 = arg2[loc5];
            if (!(loc3 < 0 || loc3 >= GameConst.COL_COUNT)) {
                for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
                    loc4 = this.candys[loc2][loc3];
                    if (!(loc4 == null) && !loc4.isFruit()) {
                        loc1.push(loc4);
                    }
                }
            }
        }
        return loc1;
    }

    /**根据特殊candy的类型获得响应的candys位置
     * 水平candy：该行所有candys
     * 竖直candy：该列所有candys
     * 爆炸candy：周围12个位置的candys
     */
    public getRelativeCandysByStatus(arg1: Candy): Array<egret.Point> {
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
    }

    /**根据传入candy的row获得响应的candy[row][0~cols-1] */
    public getCandysByRow(arg1: number): Array<egret.Point> {
        let loc1 = new Array<egret.Point>();
        for (let loc2 = 0; loc2 < GameConst.COL_COUNT; loc2++) {
            loc1.push(new egret.Point(arg1, loc2));
        }
        return loc1;
    }

    /**根据传入candy的col获得响应的candy[0~rows-1][col] */
    public getCandysByCol(arg1: number): Array<egret.Point> {
        let loc1 = new Array<egret.Point>();
        for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            loc1.push(new egret.Point(loc2, arg1));
        }
        return loc1;
    }

    /**周围12个位置点 */
    public getAroundCandys(arg1: number, arg2: number): Array<egret.Point> {
        let loc4 = 0;
        let loc5 = 0;
        let loc1 = [[0, -1], [0, -2], [0, 1], [0, 2], [-1, 0], [-2, 0], [1, 0], [2, 0], [1, -1], [1, 1], [-1, -1], [-1, 1]];
        let loc2 = new Array<egret.Point>();
        for (let loc3 = 0; loc3 < loc1.length; loc3++) {
            loc4 = arg1 + loc1[loc3][0];
            loc5 = arg2 + loc1[loc3][1];
            if (loc4 > 0 && loc4 < GameConst.ROW_COUNT && loc5 > 0 && loc5 < GameConst.COL_COUNT) {
                loc2.push(new egret.Point(loc4, loc5));
            }
        }
        return loc2;
    }

    /**特殊交换时的响应candys */
    public getAroundCandys2(arg1: Candy, arg2: Candy): Array<Candy> {
        let loc4 = 0;
        let loc5 = 0;
        let loc6: egret.Point = null;
        let loc7: egret.Point = null;
        let loc8: Candy = null;
        let loc1 = new Array<Candy>();
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
                for (let loc2 = 0; loc2 >= -3; loc2--) {
                    loc4 = loc6.y - 3 - loc2;
                    loc5 = loc6.y + 3 + loc2;
                    for (let loc3 = loc4; loc3 <= loc5; loc3++) {
                        if (this.isValidPos(loc6.x + loc2, loc3)) {
                            loc8 = this.candys[loc6.x + loc2][loc3];
                            if (loc8 != null) {
                                loc1.push(loc8);
                            }
                        }
                    }
                }
                for (let loc2 = 0; loc2 <= 3; loc2++) {
                    loc4 = loc7.y - 3 + loc2;
                    loc5 = loc7.y + 3 - loc2;
                    for (let loc3 = loc4; loc3 <= loc5; loc3++) {
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
            for (let loc2 = 0; loc2 >= -3; loc2--) {
                loc4 = loc6.x - 3 - loc2;
                loc5 = loc6.x + 3 + loc2;
                for (let loc3 = loc4; loc3 <= loc5; loc3++) {
                    if (this.isValidPos(loc3, loc6.y + loc2)) {
                        loc8 = this.candys[loc3][loc6.y + loc2];
                        if (loc8 != null) {
                            loc1.push(loc8);
                        }
                    }
                }
            }
            for (let loc2 = 0; loc2 <= 3; loc2++) {
                loc4 = loc7.x - 3 + loc2;
                loc5 = loc7.x + 3 - loc2;
                for (let loc3 = loc4; loc3 <= loc5; loc3++) {
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
    }

    /**位置是否有效,超出棋盘范围 */
    public isValidPos(arg1: number, arg2: number): boolean {
        if (arg1 >= 0 && arg1 < GameConst.ROW_COUNT && arg2 >= 0 && arg2 < GameConst.COL_COUNT) {
            return true;
        }
        return false;
    }

    /**获得所有的candys */
    public getAllCandys(): Array<Candy> {
        let loc1 = new Array<Candy>();
        for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (let loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                if (this.candys[loc2][loc3] != null) {
                    loc1.push(this.candys[loc2][loc3]);
                }
            }
        }
        return loc1;
    }

    /**所有无限制的candys */
    public getAllCandysNoBlock(): Array<Candy> {
        let loc1 = new Array<Candy>();
        for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (let loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
                if (!(this.candys[loc2][loc3] == null) && !this.checkIsBlock(loc2, loc3)) {
                    loc1.push(this.candys[loc2][loc3]);
                }
            }
        }
        return loc1;
    }

    public changeCandysStatus(arg1: Array<Candy>, arg2: number): void {
        for (let loc1 = 0; loc1 < arg1.length; loc1++) {
            arg1[loc1].setSpecialStatus(arg2);
        }
        return;
    }

    public getFruits(): Array<number> {
        let loc4: Candy = null;
        let loc1 = new Array<number>();
        for (let loc2 = 0; loc2 < GameConst.ROW_COUNT; loc2++) {
            for (let loc3 = 0; loc3 < GameConst.COL_COUNT; loc3++) {
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
    }

    public checkNeedDropFruit(): void {
        let loc1 = this.getFruits();
        let loc2 = Model.gameModel.getLeftFruitAim(loc1);
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
    }

    /**获得所有的Eat以及Eat周围的糖果
     * 返回数组元素为对象
     * {eat:Eat对象
     * pos:周围糖果位置坐标
     * }
     */
    public getEatAndAroundCandys(): Array<any> {
        let eat: Eat = null;
        let Eats = new Array<Eat>();
        for (let row = 0; row < GameConst.ROW_COUNT; row++) {
            for (let col = 0; col < GameConst.COL_COUNT; col++) {
                eat = this.eats[row][col];
                if (eat != null) {
                    Eats.push(eat);
                }
            }
        }
        let loc4 = [];
        for (let loc3 = 0; loc3 < Eats.length; loc3++) {
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
    }

    /**获得所有的Monster以及Monster周围的糖果
     * 返回数组元素为对象
     * {monster:Monster对象
     * pos:周围糖果位置坐标
     * }
     */
    public getMonsterAndAroundCandys(): Array<any> {
        let monster: Monster = null;
        let Monsters = new Array<Monster>();
        for (let row = 0; row < GameConst.ROW_COUNT; row++) {
            for (let col = 0; col < GameConst.COL_COUNT; col++) {
                monster = this.monsters[row][col];
                if (monster != null) {
                    Monsters.push(monster);
                }
            }
        }
        let loc4 = [];
        for (let loc3 = 0; loc3 < Monsters.length; loc3++) {
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
    }

    public checkHasMonsterByPos(arg1: Array<any>, arg2: egret.Point): boolean {
        for (let loc2 = 0; loc2 < arg1.length; loc2++) {
            let loc1 = arg1[loc2];
            if (!(loc1.pos.x == arg2.x && loc1.pos.y == arg2.y)) {
                continue;
            }
            return true;
        }
        return false;
    }

    /**无可连接位置,进行洗牌重置所谓无限制的candys位置 */
    public shuffle(arg1: boolean = false): void {
        let loc4 = 0;
        let candy1: Candy = null;
        let candy2: Candy = null;
        let temprow = 0;
        let tempcol = 0;
        // com.popchan.framework.manager.Debug.log("洗牌");
        let loc1 = this.getAllCandysNoBlock();
        let shuffletimes = 0;
        for (; ;) {
            loc4 = 0;
            while (loc4 < 20) {
                let loc5 = Math.floor(Math.random() * loc1.length);
                let loc6 = Math.floor(Math.random() * loc1.length);
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
                }//交换candy1与candy2
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
        for (let index_row = 0; index_row < GameConst.ROW_COUNT; index_row++) {
            for (let index_col = 0; index_col < GameConst.COL_COUNT; index_col++) {
                let loc12 = this.candys[index_row][index_col];
                if (loc12 != null) {
                    if (arg1) {
                        this.moveToRightPos(loc12);
                    }
                    else {
                        let loc13: egret.Point = this.getCandyPosition(index_row, index_col);
                        loc12.x = loc13.x;
                        loc12.y = loc13.y;
                    }
                }
            }
        }
        return;
    }

    /**通过candy修改后的row以及col使之移动到相符的位置 */
    public moveToRightPos(arg1: Candy): void {
        // public moveToRightPos(arg1: Candy, arg2 = null): void {
        let loc1 = this.getCandyPosition(arg1.row, arg1.col);
        let loc2 = Math.abs(loc1.y - arg1.y);
        let loc3 = Math.abs(loc1.x - arg1.x);
        let loc4 = Math.sqrt(loc3 * loc3 + loc2 * loc2);
        let loc5 = loc4 / GameConst.CARD_W * 0.1;
        egret.Tween.get(arg1).to({ "x": loc1.x, "y": loc1.y }, loc5 * 1000);
        return;
    }

    /**通关 */
    public handleVictory(): void {
        this.container.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.container.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoved, this);
        this.timeBegined = false;
        let loc2 = 0;
        let loc1 = this.getSpecialCandys();
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
    }

    public handleFailed(): void {
        // com.popchan.framework.manager.Debug.log("弹出失败结算面板");
        Model.gameModel.isSuccess = false;
        this.container.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.container.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoved, this);
        this.timeBegined = false;
        this.newGamed = false;
        console.log("failed")
        EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_END_UI));
        return;
    }

    /**完成通关目标后棋盘仍存在特殊糖果,将其消去 */
    public queueToBouns(): void {
        let loc2 = 0;
        let loc3: Candy = null;
        let norCandys: Array<Candy> = undefined;
        let loc5 = 0;
        let loc6 = 0;
        let loc7: Array<Candy> = undefined;
        let spiCandys = this.getSpecialCandys();
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
    }

    public doBounsTimeEffect(): void {
        let bonusTip: BonusTimeTip = BonusTimeTip.pool.take();
        this.container.addChild(bonusTip);
        bonusTip.doAniamtion();
        egret.setTimeout(this.BounsTimeEffectTimeout, this, 1200);
        return;
    }


    public BounsTimeEffectTimeout() {
        let rnd: number = 0;
        let norcandy: Candy = null;
        let disX: number;
        let disY: number;
        let dis: number;
        let radian: number;
        let laserEffect: LaserEffect;
        let step: number = 0;
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
            let norCandys = this.getNormalCandys();
            if (norCandys.length > 0) {
                for (let i = 0; i < step;) {
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
                }//enf of for
            }//end of if
        }//end of if
        return;
    }

    public BounsEffectCall(arg1: Candy, arg2: LaserEffect, norCandys: Array<Candy>, rnd: number, isend: boolean = false) {
        arg2.parent.removeChild(arg2);
        LaserEffect.pool.put(arg2);
        let loc1 = Math.floor(Math.random() * 3) + 1;
        arg1.setSpecialStatus(loc1, true);
        norCandys.splice(rnd, 1);
        if (isend) {
            Model.gameModel.time = 0;
            Model.gameModel.step = 0;
            this.queueToBouns();
        }
        return;
    }

    public addScoreTip(x: number, y: number, score: number, color: number): void {
        let loc1: ScoreTip = ScoreTip.pool.take() as ScoreTip;
        loc1.x = x;
        loc1.y = y;
        loc1.setData(score, color);
        this.container.addChild(loc1);
        return;
    }

    public addGoodTip(type: number): void {
        let loc1: GoodTip = GoodTip.pool.take();
        loc1.x = UI.WINSIZE_W / 2;
        loc1.y = UI.WINSIZE_H * 3 / 4;
        loc1.setType(type);
        this.container.addChild(loc1);
        return;
    }

    public addEffect(status: number, x: number, y: number): void {
        let loc1: BombNormalEffect = null;
        let loc2: LineBombEffect = null;
        let loc3: LineBombEffect = null;
        let loc4: BombEffect = null;
        if (status != 0) {
            if (status != 1) {
                if (status != 2) {
                    if (status != 3) {
                        if (status != 4) {
                        };
                    }
                    else {//Bomb
                        (loc4 = BombEffect.pool.take()).x = x;
                        loc4.y = y;
                        loc4.play();
                        this.container.addChild(loc4);
                    }
                }
                else {//VERT
                    (loc3 = LineBombEffect.pool.take()).x = x;
                    loc3.y = y;
                    loc3.play(2);
                    this.container.addChild(loc3);
                }
            }
            else {//HORIZ
                (loc2 = LineBombEffect.pool.take()).x = x;
                loc2.y = y;
                loc2.play(1);
                this.container.addChild(loc2);
            }
        }
        else {//普通消去特效
            (loc1 = BombNormalEffect.pool.take()).x = x;
            loc1.y = y;
            loc1.play();
            this.container.addChild(loc1);
        }
        return;
    }

    public removeAll(): void {
        let loc1 = 0;
        let loc2 = 0;
        let loc3 = 0;
        let loc4 = null;
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
    }

    public removeAllElements(arg1: Array<Array<any>>, arg2: BasePool): void {
        let col = 0;
        let loc3 = null;
        let row = 0;
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
    }

    //     public guideProcess(arg1:GuideVO = null): void {
    //         if (!arg1) {
    //         };
    //         return;
    //     }

    public getComponentByName(arg1: string) {
        return null;
    }

    public guideClear(): void {
        return;
    }


    public destory(): void {
        this.removeAll();
        return;
    }

    public init(): void {
        this.container = new egret.DisplayObjectContainer();
        GameCtrl.I.addGameSprite(this.container)
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
    }

    /**返回row*col的二维数组 */
    public getBlankMapArray(): Array<Array<any>> {
        let loc3 = 0;
        let loc1 = new Array<Array<any>>();
        let loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc1[loc2] = new Array<any>();
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                loc1[loc2][loc3] = null;
                ++loc3;
            }
            ++loc2;
        }
        return loc1;
    }

    /**新关卡开始 */
    public newGame(): void {
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
    }

    public onKeydown(event): void {
        if (this.kb.isContain(event.data, KeyBoard.D)) {
            let loc1 = Model.levelModel.currentLevel;
            let loc2 = Model.levelModel.selectedLevel;
            this.destory();
            Model.levelModel.selectedLevel = Math.min(Model.levelModel.selectedLevel + 1, LevelConfig.TOTAL_LEVEL);
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_UI));
        }
        return;
    }

    /**生成并添加游戏素材 */
    public createElements(): void {
        this.createTileBg();
        this.createDoor();
        this.createBrick();
        this.createBarrier()
        this.createCandys();
        this.createBombs();
        return;
    }

    /**生成炸弹 */
    public createBombs(): void {
        let loc3 = 0;
        let loc2 = 0;
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
    }

    /**生成障碍物
     * 冰
     * 怪物
     * 铁丝
     * 锁
     * 石头
     * eat
     */
    public createBarrier(): void {
        let loc3 = 0;
        let loc4 = 0;
        let loc2 = 0;
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
    }

    /**生成墙壁和墙壁阴影
     * 坐标需要微调
     */
    public createTileBg(): void {
        let row = 0;
        let col = 0;
        let loc8 = undefined;
        let loc9 = undefined;
        let loc10 = undefined;
        let loc11 = undefined;
        let loc14 = 0;
        let tilebg_sample: TileBg = null;
        let candypos = null;
        let loc17 = null;
        let tile = this.currentLevel.tile;
        let loc2 = 0;
        let loc3 = (GameConst.ROW_COUNT - 1);
        let loc4 = 0;
        let loc5 = (GameConst.COL_COUNT - 1);
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
        let loc12 = GameConst.ROW_COUNT - loc3 - loc2;
        let loc13 = GameConst.COL_COUNT - loc5 - loc4;
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
                    tilebg_sample = TileBg.pool.take() as TileBg;
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
    }

    /**是空白处(没有糖果的地方) */
    public isBlank(arg1: number, arg2: number): boolean {
        if (!this.isValidPos(arg1, arg2)) {
            return true;
        }
        if (this.currentLevel.tile[arg1][arg2] == 0) {
            return true;
        }
        return false;
    }

    /**传送门和水果门 */
    public createDoor(): void {
        let loc3 = 0;
        let loc4 = 0;
        let fruDoor_spl: FruitDoor = null;
        let candyPos: egret.Point = null;
        let loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                if ((loc4 = this.currentLevel.entryAndExit[loc2][loc3]) != TileConst.FRUIT_END) {
                    if (loc4 >= TileConst.T_DOOR_ENTRY1 && loc4 <= TileConst.T_DOOR_EXIT9) {
                        this.createTransportDoor(loc2, loc3, loc4);
                    }
                }
                else {
                    fruDoor_spl = FruitDoor.pool.take() as FruitDoor;
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
    }

    /**传送门 */
    public createTransportDoor(arg1: number, arg2: number, arg3: number): void {
        let TrDoor_spl = TransportDoor.pool.take() as TransportDoor;
        TrDoor_spl.tileID = arg3;
        TrDoor_spl.row = arg1;
        TrDoor_spl.col = arg2;
        TrDoor_spl.start();
        let candyPos = this.getCandyPosition(arg1, arg2);
        TrDoor_spl.x = candyPos.x;
        TrDoor_spl.y = candyPos.y;
        this.ice_layer.addChild(TrDoor_spl);
        this.tDoors[arg1][arg2] = TrDoor_spl;
        return;
    }

    /**墙壁 */
    public createBrick(): void {
        let loc3 = 0;
        let loc4 = 0;
        let brick_sample: Brick = null;
        let loc6: egret.Point = null;
        let loc2 = 0;
        while (loc2 < GameConst.ROW_COUNT) {
            loc3 = 0;
            while (loc3 < GameConst.COL_COUNT) {
                if ((loc4 = this.currentLevel.board[loc2][loc3]) > 0) {
                    (brick_sample = Brick.pool.take() as Brick).brickID = loc4;
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
    }

    public createIce(arg1: number, arg2: number, arg3: number): Ice {
        let ice_sample = Ice.pool.take() as Ice;
        ice_sample.tileID = arg3;
        ice_sample.row = arg1;
        ice_sample.col = arg2;
        let loc2 = this.getCandyPosition(arg1, arg2);
        ice_sample.x = loc2.x;
        ice_sample.y = loc2.y;
        this.ice_layer.addChild(ice_sample);
        this.ices[arg1][arg2] = ice_sample;
        return ice_sample;
    }

    public createStones(arg1: number, arg2: number, arg3: number): void {
        let stone_spl = Stone.pool.take() as Stone;
        stone_spl.tileID = arg3;
        stone_spl.row = arg1;
        stone_spl.col = arg2;
        let candyPos = this.getCandyPosition(arg1, arg2);
        stone_spl.x = candyPos.x;
        stone_spl.y = candyPos.y;
        this.stone_layer.addChild(stone_spl);
        this.stones[arg1][arg2] = stone_spl;
        return;
    }

    public createCandys(): void {
        let loc4 = 0;
        let loc5 = 0;
        let candy_spl: Candy = null;
        let loc1 = false;
        let loc3 = 0;
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
    }

    /**根据传入的参数在[row][col]处生成颜色为color的candy */
    public newCandy(row: number, col: number, color: number = 0): Candy {
        if (color == 0) {
            color = Math.floor(Math.random() * this.currentLevel.colorCount + 1);
        }
        let candy_spl = Candy.pool.take() as Candy;
        candy_spl.reset();
        let candyPos = this.getCandyPosition(row, col);
        candy_spl.x = candyPos.x;
        candy_spl.y = candyPos.y;
        candy_spl.row = row;
        candy_spl.col = col;
        candy_spl.color = color;
        this.candys[row][col] = candy_spl;
        this.candy_layer.addChild(candy_spl);
        return candy_spl;
    }

    /**获得candy的实际显示位置
     * point.x决定display.y
    */
    public getCandyPosition(row: number, col: number): egret.Point {
        return new egret.Point(col * GameConst.CARD_W + this.offsetX, row * GameConst.CARD_W + this.offsetY);
    }


    public createIronWires(): void {
        let loc3 = 0;
        let loc4 = 0;
        let loc2 = 0;
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
    }

    public createIronWire(arg1: number, arg2: number, arg3: number = 1): void {
        let iw_spl = IronWire.pool.take() as IronWire
        iw_spl.dir = arg3;
        iw_spl.row = arg1;
        iw_spl.col = arg2;
        let candyPos = this.getCandyPosition(arg1, arg2);
        iw_spl.x = candyPos.x;
        iw_spl.y = candyPos.y;
        this.ironWire_layer.addChild(iw_spl);
        this.ironWires[arg1][arg2] = iw_spl;
        return;
    }

    public createBomb(arg1: number, arg2: number): void {
        let loc1 = Math.floor(Math.random() * 7) + 10;
        this.candys[arg1][arg2].setBomb(loc1);
        return;
    }

    /**该位置是否存在限制
     * ice,stone,eat
     */
    public isCandyValidPos(arg1: number, arg2: number): boolean {
        if (!(this.ices[arg1][arg2] == null) || !(this.stones[arg1][arg2] == null) || !(this.eats[arg1][arg2] == null)) {
            return false;
        }
        return true;
    }

    public createEat(arg1: number, arg2: number): Eat {
        let eat_spl = Eat.pool.take() as Eat;
        eat_spl.reset();
        eat_spl.row = arg1;
        eat_spl.col = arg2;
        let candyPos = this.getCandyPosition(arg1, arg2);
        eat_spl.x = candyPos.x;
        eat_spl.y = candyPos.y;
        this.eat_layer.addChild(eat_spl);
        this.eats[arg1][arg2] = eat_spl;
        return eat_spl;
    }

    public createMonster(arg1: number, arg2: number): Monster {
        let monst_spl = Monster.pool.take() as Monster;
        monst_spl.reset();
        monst_spl.row = arg1;
        monst_spl.col = arg2;
        let candyPos = this.getCandyPosition(arg1, arg2);
        monst_spl.x = candyPos.x;
        monst_spl.y = candyPos.y;
        this.monster_layer.addChild(monst_spl);
        this.monsters[arg1][arg2] = monst_spl;
        return monst_spl;
    }

    public createLock(arg1: number, arg2: number): Lock {
        let lock_sample = Lock.pool.take() as Lock;
        lock_sample.row = arg1;
        lock_sample.col = arg2;
        let candyPos = this.getCandyPosition(arg1, arg2);
        lock_sample.x = candyPos.x;
        lock_sample.y = candyPos.y;
        this.lock_layer.addChild(lock_sample);
        this.locks[arg1][arg2] = lock_sample;
        return lock_sample;
    }

    public update(): void {
        switch (this.state) {
            case FightCtrl.STATE_INIT:
                {
                    this.createElements();
                    EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_MISSION_UI));
                    this.state = FightCtrl.STATE_WAIT;
                    egret.setTimeout(function (): void {
                        let loc1 = Model.levelModel.selectedLevel;
                        if (loc1 <= 5 && loc1 > 0) {
                            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GUIDE, loc1))
                        }
                        this.state = FightCtrl.STATE_GAME;
                        return;
                    }, this, 3000)
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
    }

    public updateGameState(): void {
        let loc1 = false;
        let loc2 = 0;
        let loc3 = 0;
        let candy: Candy = null;
        this.tipCount = this.tipCount + 1;
        if (this.tipCount > this.tipDelay) {//计时生成提示
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
    }

    /**检查是否需要洗牌 */
    public checkShuffle(): void {
        let loc2: NoSwapTip = null;
        let loc1 = this.checkConnectable();
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
    }

    /**刷新时间 */
    public onTimer(): void {
        if (!this.timeBegined) {//未开始计时
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
    }


    public onTouchBegin(e: egret.TouchEvent) {
        if (this.state != FightCtrl.STATE_GAME) {
            return;
        }
        if (this.gameState != FightCtrl.STATE_GAME_WAIT) {
            return;
        }
        let loc2 = new egret.Point(e.stageX, e.stageY);
        this.selectedCard = this.getCandyByTouch(loc2);
        return;
    }

    public onTouchMoved(e: egret.TouchEvent) {
        if (this.state != FightCtrl.STATE_GAME) {
            return;
        }
        if (this.gameState != FightCtrl.STATE_GAME_WAIT) {
            return;
        }
        if (this.selectedCard != null) {
            let sel_row = this.selectedCard.row;
            let sel_col = this.selectedCard.col;
            let loc5 = new egret.Point(e.stageX, e.stageY);
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
    }

    public hasIronWire(arg1: number, arg2: number, arg3: number): boolean {
        if (this.ironWires[arg1][arg2] != null) {
            if (this.ironWires[arg1][arg2].dir == arg3) {
                return true;
            }
        }
        return false;
    }

    /**交换行为 */
    public makeSwap(arg1: Candy, arg2: Candy): void {
        let candyA: Candy = arg1;
        let candyB: Candy = arg2;
        let loc1;
        this.stopCandyTip();
        this.aimCard = candyB;
        this.gameState = FightCtrl.STATE_GAME_SWAP;
        this.swapCandy(candyA, candyB);
        if (this.currentLevel.mode == GameMode.TIME && this.timeBegined == false) {
            this.timeBegined = true;
        }
        let posA: egret.Point = this.getCandyPosition(candyA.row, candyA.col);
        let posB: egret.Point = this.getCandyPosition(candyB.row, candyB.col);
        candyA.runMoveAction(posA, 200);
        candyB.runMoveAction(posB, 200, this.SwapCheck, this, [candyA, candyB]);
    }

    /**检查交换是否有效 */
    public SwapCheck(candyA: Candy, candyB: Candy) {
        if (candyA.status == 4 || candyB.status == 4 || candyA.status > 0 && candyB.status > 0 || this.checkHasMatches(false)) {
            //交换有效
            // com.popchan.framework.manager.Debug.log("交换有效");
            this.handleValidSwap();
        }
        else {  //交换无效
            // com.popchan.framework.manager.Debug.log("交换无效");
            SoundCtrl.I.playmusic("swap_defail");
            this.SwapRoolBack(candyA, candyB);
        }
        return;
    }

    /**交换无效,回滚 */
    public SwapRoolBack(candyA: Candy, candyB: Candy) {
        this.swapCandy(candyA, candyB);
        this.gameState = FightCtrl.STATE_GAME_WAIT;
        let posA = this.getCandyPosition(candyA.row, candyA.col);
        let posB = this.getCandyPosition(candyB.row, candyB.col);
        candyA.runMoveAction(posA, 200);
        candyB.runMoveAction(posB, 200);
        return;
    }

    /**交换糖果 */
    public swapCandy(arg1: Candy, arg2: Candy): void {
        let loc1 = arg1.row;
        let loc2 = arg1.col;
        arg1.row = arg2.row;
        arg1.col = arg2.col;
        arg2.row = loc1;
        arg2.col = loc2;
        this.candys[arg1.row][arg1.col] = arg1;
        this.candys[arg2.row][arg2.col] = arg2;
        return;
    }

    public getCandyByTouch(arg1: egret.Point): Candy {
        let loc2 = 0;
        let loc3: Candy = null;
        let loc1 = 0;
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
    }

    /**检查是否存在提示,若有则返回若无则生成提示*/
    public checkSwapTip(): void {
        let loc2: Array<Candy> = null;
        let loc3: Candy = null;
        let loc4: Candy = null;
        if (this.hasSwapTip()) { //有提示则return
            return;
        }
        let loc1 = this.checkConnectable();
        if (loc1.length > 0) {//可连接
            loc2 = loc1[Math.floor(Math.random() * loc1.length)];
            this.stopCandyTip();
            loc3 = loc2[0];
            loc4 = loc2[Math.floor(Math.random() * (loc2.length - 1) + 1)];
            loc3.shake();
            loc4.shake();
        }
        return;
    }

    /**是否存在交换提示
     * 糖果晃动
     */
    public hasSwapTip(): boolean {
        let loc2 = 0;
        let loc3: Candy = null;
        let loc1 = 0;
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
    }

    /**停止游戏提示(摇动的糖果可以交换shake) */
    public stopCandyTip(): void {
        let loc2 = 0;
        let loc3: Candy = null;
        let loc1 = 0;
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
    }

    /**交换有效
     * 判断交换类型并执行对应效果
     */
    public handleValidSwap(): void {
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
    }

    public checkHasMatches(arg1: boolean = true): boolean {
        let loc1 = 0;
        let loc2 = 0;
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
    }

    /**寻找所有已匹配糖果以及附近障碍物 */
    public searchMatchesAndMark(): Array<Candy> {
        let row = 0;
        let col = 0;
        let loc6 = null;
        let candy_spl: Candy = null;
        let loc8 = null;
        let loc9 = null;
        let loc10 = null;
        let loc11 = null;
        // let loc1 = egret.getTimer();
        let loc2 = new Array<Candy>();
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
        }//将所有糖果下一状态均置为0
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
        }//检查是否生成了帝王糖果(水平/竖直连续5个candy)
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
        }//检查是否生成了爆炸糖果(T型)
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
        }//检查是否生成了爆炸糖果(L型)
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
        }//检查是否生成了水平/竖直糖果(4个连续candy),3个无事发生
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
    }

    //标记待消除candys以及消除后的状态candystatus
    public markAndChangeStatus(del_candys: Array<Candy>, candystatus: number = 0): void {
        let candy: Candy = null;
        let loc1 = false;
        let loc3 = 0;
        for (let pos in del_candys) {
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
    }

    public handleGuide(): void {
        if(Model.levelModel.selectedLevel != 1) {
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
        }//end of !=1
        else if (this.selectedCard == this.candys[2][2] && this.aimCard == this.candys[2][1] || this.aimCard == this.candys[2][2] && this.selectedCard == this.candys[2][1]) {
           GuideManager.instance.nextStep();
        }
        else if (this.selectedCard == this.candys[2][7] && this.aimCard == this.candys[2][6] || this.aimCard == this.candys[2][7] && this.selectedCard == this.candys[2][6]) {
           GuideManager.instance.nextStep();
        }
        return;
    }

    /**水平连续 */
    public getHorizMatches(candys: Array<Array<Candy>>, row: number, col: number): Array<Candy> {
        let loc1 = [candys[row][col]];
        let cols = col + 1;
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
    }

    /**竖直连续 */
    public getVertMatches(candys: Array<Array<Candy>>, row: number, col: number): Array<Candy> {
        let loc1 = [candys[row][col]];
        let rows = row + 1;
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
    }

    /**T或L型*/
    public getHVMatches(candys: Array<Array<Candy>>, row: number, col: number, Directions: Array<number>, steps: Array<number>): Array<Candy> {
        let loc3 = 0;
        let direction = 0;
        let loc1 = [candys[row][col]];
        let walk_in = 0;
        let loc4 = 0;
        while (loc4 < Directions.length) {
            direction = Directions[loc4];
            if (direction == BombDirection.LEFT) {//左
                loc3 = Math.max(0, col + steps[loc4]);
                walk_in = col - 1;
                while (walk_in >= loc3) {
                    if (!(candys[row][walk_in] == null) && candys[row][col].color == candys[row][walk_in].color) {
                        loc1.push(candys[row][walk_in]);
                    }
                    --walk_in;
                }
            }
            if (direction == BombDirection.RIGHT) {//右
                loc3 = Math.min((GameConst.COL_COUNT - 1), col + steps[loc4]);
                walk_in = col + 1;
                while (walk_in <= loc3) {
                    if (!(candys[row][walk_in] == null) && candys[row][col].color == candys[row][walk_in].color) {
                        loc1.push(candys[row][walk_in]);
                    }
                    ++walk_in;
                }
            }
            if (direction == BombDirection.DOWN) {//下
                loc3 = Math.min((GameConst.ROW_COUNT - 1), row + steps[loc4]);
                walk_in = row + 1;
                while (walk_in <= loc3) {
                    if (!(candys[walk_in][col] == null) && candys[row][col].color == candys[walk_in][col].color) {
                        loc1.push(candys[walk_in][col]);
                    }
                    ++walk_in;
                }
            }
            if (direction == BombDirection.UP) {//上
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
    }

    /**移除水果、糖果及其障碍物 */
    public removeAllMatches(): void {
        let loc1 = this.checkFruitIsEnd();
        if (loc1.length > 0) { //可移除水果
            this.removeFruits(loc1);
            this.gameState = FightCtrl.STATE_GAME_WAIT_DROP;
        }
        let loc2 = this.searchMatchesAndMark();
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
    }

    public checkBomb(): void {
        let col = 0;
        let loc3: Candy = null;
        let row = 0;
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
    }

    public checkEatAndMonster(): void {
        let loc2 = null;
        let loc3 = null;
        let eat1: Eat = null;
        let Pos1: egret.Point = null;
        let candy: Candy = null;
        let eat2: Eat = null;
        let Pos2: egret.Point = null;
        let loc9 = null;
        let monster: Monster = null;
        let Pos3: egret.Point = null;
        let Pos4: egret.Point = null;
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
        let loc1 = this.getMonsterAndAroundCandys();
        if (loc1.length > 0) {
            for (let loc in loc1) {
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
    }

    public checkHasStatusCandy(arg1: Array<Candy>): boolean {
        for (let loc1 in arg1) {
            if (!(arg1[loc1].status == 1 || arg1[loc1].status == 2 || arg1[loc1].status == 3)) {
                continue;
            }
            return true;
        }
        return false;
    }

    /**返回所有水果糖果 */
    public checkFruitIsEnd(): Array<Candy> {
        let loc4 = 0;
        let loc6: Candy = null;
        let loc1 = new Array<Candy>();
        let loc3 = 0;
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
    }

    /*特殊交换**/
    public checkSpecialSwapMathces(): void {
        let matches: Array<any> = [];
        let cols: Array<any> = null;
        let rows: Array<any> = null;
        let candyA: Candy = null;
        let candyB: Candy = null;
        let loc1;
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
    }

    /**帝王糖果和特殊糖果交换后生成特效*/
    public createLaserEffect(candy: Candy, matches: Array<Candy>, changeStatus: number, isRandomLine: boolean, callType: boolean): void {
        let laserEffect: LaserEffect = null;
        for (let i = 0; i < matches.length; i++) {
            laserEffect = LaserEffect.pool.take();
            laserEffect.x = candy.x;
            laserEffect.y = candy.y;
            this.container.addChild(laserEffect);
            laserEffect.Animation(candy, matches, i, changeStatus, isRandomLine, callType);
        }
        return;
    }

    /**帝王糖果和普通糖果交换后生成射线特效*/
    public createRayEffect(candy: Candy, matches: Array<Candy>): void {
        let laserEffect: RayEffect = null;
        for (let i = 0; i < matches.length; i++) {
            laserEffect = RayEffect.pool.take();
            laserEffect.x = candy.x;
            laserEffect.y = candy.y;
            this.container.addChild(laserEffect);
            laserEffect.Animation(candy, matches, i);
        }
        return;
    }

    //移除所有匹配素材及其周围障碍物
    public handleRemoveList(candys: Array<Candy>): void {
        let loc2: Candy = null;
        let loc1 = 0;
        let hasspecial:boolean = false;
        while (loc1 < candys.length) {
            loc2 = candys[loc1];
            if (loc2.getNextStatus() > 0) {//生成特殊糖果
                this.removeCandys([loc2]);
                this.newCandy(loc2.row, loc2.col, loc2.color).setSpecialStatus(loc2.getNextStatus(), true);
                candys.splice(loc1, 1);
                --loc1;
                hasspecial = true;
            } 
            if(!hasspecial) {
                SoundCtrl.I.playmusic("msc_moveable");
            }
            ++loc1;
        }
        this.removeCandys(candys);
        return;
    }

    /**移除糖果 */
    public removeCandys(arg1: Array<Candy>): void {
        let loc2 = null;
        let loc3 = 0;
        let re_candys = null;
        let loc5 = null;
        let loc6 = null;
        let candy: Candy = null;
        let ice: Ice = null;
        let eat: Eat = null;
        let monster: Monster = null;
        let brick: Brick = null;
        let loc1 = [];
        let loc12 = 0;
        let loc13 = arg1;
        for (let loc2 in arg1) {
            re_candys = this.searchSpecialRelativeCandys(arg1[loc2]);
            let loc14 = 0;
            for (let pos in re_candys) {
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
    }

    public waitDrop(): void {
        this.gameState = FightCtrl.STATE_GAME_WAIT_DROP;
        return;
    }

    public removeElementAroundCandy(candy: Candy): void {
        let monster: Monster = null;
        let eat: Eat = null;
        let ice: Ice = null;
        let stone: Stone = null;
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
        }//修正分数
        let lock = this.locks[candy.row][candy.col];
        if (lock) {
            this.locks[candy.row][candy.col] = null;
            candy.remove = false;
            candy.mark = false;
            lock.doAnimation();
            return;
        }
        let brick = this.bricks[candy.row][candy.col];
        if (brick) {
            this.removeBrick(brick);
        }
        let Monsters = this.getNearMonster(candy.row, candy.col);
        let loc11 = 0;
        for (let loc in Monsters) {
            monster = Monsters[loc];
            this.monsters[monster.row][monster.col] = null;
            monster.doAnimation();
        }
        let Eats = this.getNearEat(candy.row, candy.col);
        loc11 = 0;
        for (let loc in Eats) {
            eat = Eats[loc];
            this.eats[eat.row][eat.col] = null;
            eat.doAnimation();
            this.eatRemoved = true;
        }
        let Ices = this.getNearIce(candy.row, candy.col);
        loc11 = 0;
        for (let loc in Ices) {
            ice = Ices[loc];
            this.removeIce(ice);
        }
        let Stones = this.getNearStone(candy.row, candy.col);
        loc11 = 0;
        for (let loc in Stones) {
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
    }

    public removeIce(arg1: Ice): void {
        SoundCtrl.I.playmusic("iceboom");
        arg1.setLife((arg1.life - 1), true);
        if (arg1.life == 0) {
            Model.gameModel.offsetAim(AimType.ICE, 1);
            this.ices[arg1.row][arg1.col] = null;
            Ice.pool.put(arg1);
            arg1.parent.removeChild(arg1);
        }
        return;
    }

    public removeBrick(arg1: Brick): void {
        arg1.loseLife();
        if (arg1.life == 0) {
            this.bricks[arg1.row][arg1.col] = null;
            Brick.pool.put(arg1);
            arg1.parent.removeChild(arg1);
            Model.gameModel.offsetAim(AimType.BOARD, 1);
        }
        return;
    }

    public removeFruits(arg1: Array<Candy>): void {
        // com.popchan.framework.manager.Debug.log("移除水果");
        let removeCandy: Candy = null;
        let tp: egret.Point = null;
        let disX: number;
        let disY: number;
        let dis: number;
        let loc2 = 0;
        for (let loc in arg1) {
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
    }

    public FruitCallFun(candy: Candy) {
        Candy.pool.put(candy);
        candy.reset();
        candy.parent.removeChild(candy);
        return;
    }

    public searchSpecialRelativeCandys(arg1: Candy): Array<egret.Point> {
        let candy_pos: egret.Point = null;
        let candy_spl: Candy = null;
        let re_Candys_Poses: Array<egret.Point> = null;
        let re_candy_Pos: egret.Point = null;
        let re_candy: Candy = null;
        let loc1 = new Array<egret.Point>();
        let SpecCandysPoses = new Array<egret.Point>();
        loc1.push(new egret.Point(arg1.row, arg1.col));
        while (loc1.length > 0) {
            candy_pos = loc1.shift();
            candy_spl = this.candys[candy_pos.x][candy_pos.y];
            SpecCandysPoses.push(candy_pos);
            if (!(candy_spl != null && candy_spl.status > 0)) {
                continue;//普通糖果则continue
            }
            re_Candys_Poses = this.getRelativeCandysByStatus(candy_spl);
            let loc8 = 0;
            for (let loc in re_Candys_Poses) {
                re_candy_Pos = re_Candys_Poses[loc];
                if ((re_candy = this.candys[re_candy_Pos.x][re_candy_Pos.y]) == candy_spl) {
                    continue;
                }
                if (!(re_candy == null) && re_candy.status > 0) {//响应candys中存在着特殊candy
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
    }

    public checkListContainPoint(arg1: Array<egret.Point>, arg2: egret.Point): boolean {
        for (let loc1 in arg1) {
            if (!(arg1[loc1].x == arg2.x && arg1[loc1].y == arg2.y)) {
                continue;
            }
            return true;
        }
        return false;
    }

    /**检测现存糖果是否可以掉落
     * 并生成新的candy填充
     * 增加掉落动画
     *  */
    public checkTop(): boolean {
        let col = 0;
        let loc4 = false;
        let candy: Candy = null;
        // com.popchan.framework.manager.Debug.log("检测掉落");
        this.colAdd = [];
        this.tDoorAdd = [];
        let row = 0;
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
        for (; ;) {
            if (loc4 = this.dropAndAdd()) {
                continue;
            }
            break;
        }
        let loc2 = false;
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
    }

    /**增加candy移动路径 */
    public dropAndAdd(): boolean {
        let loc4 = 0;
        let col = 0;
        let loc6: Candy = null;
        let color = 0;
        let newcandy: Candy = null;
        let candyPos: egret.Point = null;
        let trancandy: Candy = null;
        let CandyPos: egret.Point = null;
        let newPos: egret.Point = null;
        let loc1 = false;
        let loc2 = [4, 3, 2, 1, 0, 5, 6, 7, 8];
        let row = (GameConst.ROW_COUNT - 1);
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
    }

    public checkIsUpPosition(arg1: number, arg2: number): boolean {
        let row = 0;
        let col = 0;
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
    }

    /**获得糖果可以掉落的位置 */
    public getCandyCanDropPos(row: number, col: number): egret.Point {
        let loc1 = row - 1;//
        if (loc1 < 0) {
            return null;
        }
        if (!(this.candys[loc1][col] == null) && !this.checkIsBlock(loc1, col) && !this.hasIronWire(loc1, col, 2)) {
            return new egret.Point(loc1, col);
        }//[row-1][col]位置可以掉落(正上方一格位置)
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
    }

    public checkTopIsBlockByCol(arg1: number, arg2: number): boolean {
        let loc1 = arg1;
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
    }

}
