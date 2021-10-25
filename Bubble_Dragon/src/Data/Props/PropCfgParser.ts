class PropCfgParser implements IJsonConfig {

    public _map = new Dicts();

    constructor() {
        this._map = new Dicts();

        return;
    }

    public setUp(arg1: Object): void {
        return;
    }

    public getPropCfg(arg1: number): PropCfg {
        if (this._map.size == 0) {
            for (let loc2 in PropList.list) {
                let loc3 = new PropCfg(PropList.list[loc2]);
                this._map.put(PropList.list[loc2].id, loc3);
            }
        }
        return this._map.take(arg1);
    }
}