//砖石数
class DiamondModel {

    public _diamondnum: number = 0;

    public constructor() {
        return;
    }



    public set diamond(num: number) {
        this._diamondnum = num;
        this.saveData();
        return;
    }

    public get diamond(): number {
        return this._diamondnum;
    }

    public loadData(): void {
        var loc2 = null;
        var loc3 = 0;
        var loc4 = null;
        var loc5 = null;
        var loc6 = null;
        let loc1 = egret.localStorage.getItem("diamondnum");
        if (loc1 == null) {
            this._diamondnum = 0;
            return;
        }
        this._diamondnum = Number(loc1);
        return;
    }


    //本地存储通关记录
    public saveData(): void {
        egret.localStorage.setItem("diamondnum", String(this._diamondnum));
        return;
    }
}