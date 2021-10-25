class Flash {

    public static NUMERIC:number  = 1; //按照数字顺序排序,从小到大
    public static random(param1:number)
    {
        return Math2.numberBetween(0, param1-1, true);
    }

    public static isNaN(param:any):boolean
    {
        return false;
    }

    public static hasFunction(param1: any, param2:string):boolean
    {
        return true;
    }

    public static sortOn(param1: any, param2:string, param3:number)
    {

    }
}