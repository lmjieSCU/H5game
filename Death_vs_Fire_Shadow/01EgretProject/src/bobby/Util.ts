
class Util {

    public static createObject(
        param1: egret.DisplayObject,
        param2: egret.DisplayObjectContainer,
        param3: number = 0,
        param4: number = 0) 
    {
        param2.addChild(param1);
        param1.x = param3;
        param1.y = param4;
        return param1;
    }// end 
//
    public static gotoLink(param1: String): void {
        return;
    }// end 

     public static saveItem(key: string, value: number) {
        egret.localStorage.setItem(key, value.toString());
    }
    public static getItem(key: string): number {
        var score: string = egret.localStorage.getItem(key);
        return Number(score);
    }
}
