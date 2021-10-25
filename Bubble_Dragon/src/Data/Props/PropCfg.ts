class PropCfg {

    public id: number;

    public name_ch: string;

    public name_en: string;

    public price: number;

    public desc_ch: string;

    public desc_en: string;

    public p1: number;

    public p2: number;

    public type: number;

    public constructor(arg1: any) {
        this.id = arg1.id;
        this.name_ch = arg1.name_ch;
        this.name_en = arg1.name_en;
        this.price = arg1.price;
        this.desc_ch = arg1.desc_ch;
        this.desc_en = arg1.desc_en;
        this.p1 = arg1.p1;
        this.p2 = arg1.p2;
        this.type = arg1.type;
        return;
    }


}