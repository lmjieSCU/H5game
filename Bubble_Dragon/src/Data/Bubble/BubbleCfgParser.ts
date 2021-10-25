class BubbleCfgParser implements IJsonConfig {

    public _map: Dicts;
    public constructor() {
        this._map = new Dicts();
        return;
    }

    public setUp(arg1: Object): void {
        return;
    }

    public getBubbleCfg(arg1: number): BubbleCfg {
        if (this._map.size == 0) {
            for (let loc2 in BubbleList.list) {
                let bubble = BubbleList.list[loc2];
                let loc3 = new BubbleCfg(bubble);
                this._map.put(bubble.id, loc3);
            }
        }
        return this._map.take(arg1);
    }

    public randomBubbleColor(): void {
        if (this._map.size == 0) {
            for (let loc2 in BubbleList.list) {
                let bubble = BubbleList.list[loc2];
                let loc3 = new BubbleCfg(bubble);
                this._map.put(bubble.id, loc3);
            }
        }
        let loc2: BubbleCfg = null;
        let color = this.getRandomNumList([1, 2, 3, 4, 5, 6, 7], 7);
        let loc3 = 0;
        for (let loc1 in this._map._dict) {
            loc2 = this._map._dict[loc1];
            if (loc2.colorType >= 1 && loc2.colorType <= 7) {
                loc2.tempId = color[(loc2.colorType - 1)];
                loc2.resBottom = "Bubble_" + color[(loc2.colorType - 1)];
                continue;
            }
            loc2.tempId = loc2.id;
        }
        return;
    }

    public getRandomNumList(list: Array<number>, num: number): Array<number> {
        let ans = [];
        while (list.length > 0) {
            let index = Math.floor(Math.random() * list.length);
            ans.push(list[index]);
            list.splice(index, 1);
        }
        return ans;
    }

    public getBubbleCfgByType(arg1: number, arg2: number): BubbleCfg {
        if (this._map.size == 0) {
            for (let loc2 in BubbleList.list) {
                let bubble = BubbleList.list[loc2];
                let loc3 = new BubbleCfg(bubble);
                this._map.put(bubble.id, loc3);
            }
        }
        var loc1: BubbleCfg = null;
        for (let loc in this._map._dict) {
            loc1 = this._map._dict[loc];
            if (!(loc1.colorType == arg1 && loc1.effectType == loc1.effectType)) {
                continue;
            }
            return loc1;
        }
        return null;
    }
}
