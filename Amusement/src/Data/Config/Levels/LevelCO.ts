/**关卡数据
 * 从XML中通过LevelConfig读取
 * tile：瓷砖
 * board：木板
 * ice：冰块
 * stone：石块
 * candy：糖果
 * eat:
 * monster：怪物
 * lock：锁
 * mode:模式
 */
class LevelCO {

    public tile: Array<Array<number>>;

    public board: Array<Array<number>>;

    public ice: Array<Array<number>>;

    public stone: Array<Array<number>>;

    public candy: Array<any>;

    public eat: Array<any>;

    public monster: Array<Array<number>>;

    public lock: Array<Array<number>>;

    public entryAndExit: Array<Array<number>>;

    public aim: Array<string>;

    public ironWire: Array<Array<number>>;

    public mode: number;

    public step: number;

    public barrier: Array<Array<number>>;

    public colorCount: number;

    public needScore: number;
    
    constructor() {
    }
}