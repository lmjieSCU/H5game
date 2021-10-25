/**关卡数据
 * 从XML中通过LevelConfig读取
 */
class LevelCfg {

    public id: number;

    public map: Array<Array<number>>;

    public step: number;

    public props: Array<Array<string>>;

    public starLevels: Array<Array<string>>;

    public tipId: number;

    constructor() {
        return;
    }
}