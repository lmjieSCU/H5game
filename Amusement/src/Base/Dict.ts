class Dicts {

    public _dict: any;

    public _size: number;

    public constructor() {
        this._dict = {};
        this._size = 0;
        return;
    }

    public put(arg1: any, arg2: any): void {
        if (arg2 == undefined) {
            return;
        }
        if (this._dict[arg1] === undefined) {
            this._size++;
        }
        this._dict[arg1] = arg2;
        return;
    }

    public take(arg1: any): any {
        return this._dict[arg1];
    }

    public remove(arg1: any): any {
        if (this._dict[arg1] != undefined) {
            this._size--;
        }
        let loc1: any = this._dict[arg1];
        delete this._dict[arg1];
        return loc1;
    }

    public clear(): void {
        this._dict = {};
        this._size = 0;
        return;
    }

    public dispose(): void {
        this._dict = null;
        return;
    }

    public get size(): number {

        return this._size;
    }

    public isEmpty(): boolean {
        return this._size == 0;
    }

    public contains(arg1: any): boolean {
        return !(this._dict[arg1] == undefined);
    }

    /**key值 */
    public toArray(): Array<any> {
        let loc1 = new Array<any>();
        for (let loc2 in this._dict) {
            loc1.push(loc2);
        }
        return loc1;
    }

    public copy(): Object {
        let loc1: Dicts = new Dicts();
        loc1._dict = this._dict;
        loc1._size = this._size;
        return loc1;
    }

    public clone(arg1: boolean = false): Dicts {
        let loc1: Dicts = new Dicts();
        for (let loc2 in this._dict) {
            loc1.put(loc2, this._dict[loc2]);
        }
        return loc1;
    }

    public get dict(): Object {
        return this._dict;
    }

    public set dict(arg1: Object) {
        let loc1: number = 0;
        this._dict = arg1;
        for (let loc2 in this._dict) {
            ++loc1;
        }
        this._size = loc1;
    }

}

