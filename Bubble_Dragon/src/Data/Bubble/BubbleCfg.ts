class BubbleCfg {
    public id: number;

    public colorType: number;

    public effectType: number;

    public resBottom: string;

    public resTop: string;

    public score: number;

    public tempId: number;

    constructor(arg1: any) {
        this.id = arg1.id;
        this.colorType = arg1.colorType;
        this.effectType = arg1.effectType;
        this.resBottom = arg1.resBottom;
        this.resTop = arg1.resTop;
        this.score = arg1.score;
        return;
    }

}
