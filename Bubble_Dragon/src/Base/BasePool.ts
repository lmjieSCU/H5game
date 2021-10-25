class BasePool {
    public _cacheClass: any;

    public _maxCacheNum: number;

    public _curCacheNum: number;

    public _usingNum: number;

    public _storeNum: number;

    public _storeList: Array<any>;

    public _params: Array<any>;

    public constructor(arg1: any, arg2: number, arg3: Array<any> = null) {
        this._storeList = new Array<any>();
        this._cacheClass = arg1;
        this._maxCacheNum = arg2;
        this._params = arg3;
        return;
    }

    public take() {
        if (this._storeList.length > 0) {
            return this._storeList.shift();
        }
        let loc1 = new this._cacheClass();
        return loc1;
    }

    public put(arg1): boolean {
        if (arg1 == null) {
            return false;
        }
        if (this._storeList.length > this._maxCacheNum) {
            return false;
        }
        if (this._storeList.indexOf(arg1) > 0) {
            return false;
        }
        this._storeList.push(arg1);
        return true;
    }

    public isEmpty(): boolean {
        return this._storeList.length == 0;
    }

    public get size(): number {
        return this._storeList.length;
    }

    public dispose(): void {
        this._storeList = null;
        return;
    }


}
