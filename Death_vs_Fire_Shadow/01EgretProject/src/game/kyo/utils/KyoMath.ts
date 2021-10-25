class KyoMath {
    private static DEGTORAD: number = 0.0174533;

    constructor() {
        return;
    }// end function

    public static fixRange(param1: number, param2: number, param3: number): number {
        if (param1 < param2) {
            return param2;
        }
        if (param1 > param3) {
            return param3;
        }
        return param1;
    }// end function

    public static inRange(param1: number, param2: number, param3: number): boolean {
        return param1 >= param2 && param1 <= param3;
    }// end function

    public static decimal(param1: number, param2: number, param3: Function = null): number {
        param3 = param3 || Math.round;
        var _loc_4: any = Math.pow(10, param2);
        return param3(param1 * _loc_4) / _loc_4;
    }// end function

    public static average(...args): number {
        /*
        //args = args[0] is Array ? (args[0]) : (args);
        if (typeof(args[0]) == " ")
             args = args[0];
        var _loc_3: any = KyoMath.sum(args);
        return _loc_3 / args.length;
        */
        return 0;
    }// end function

    public static sum(...args): number {
        /*
        var _loc_4: any = NaN;
        if (typeof(args[0]) == " ")
             args = args[0];
        
        var _loc_3: any = 0;
        for (_loc_4 of args)
            {
                
                _loc_3 = _loc_3 + _loc_4;
            }
            return _loc_3;
            */
            return 0;
    }// end function

    public static getAngleByPoints(param1: egret.Point, param2: egret.Point): number {
        var _loc_3: any = param2.x - param1.x;
        var _loc_4: any = param2.y - param1.y;
        var _loc_5: any = Math.sqrt(_loc_3 * _loc_3 + _loc_4 * _loc_4);
        var _loc_6: any = Math.acos(_loc_3 / _loc_5);
        var _loc_7: any = 180 / (Math.PI / _loc_6);
        if (_loc_4 < 0) {
            return -_loc_7;
        }
        return _loc_7;
    }// end function

    public static getDistanceByPoints(param1: egret.Point, param2: egret.Point): number {
        var _loc_3: any = param1.x - param2.x;
        var _loc_4: any = param1.y - param2.y;
        return Math.sqrt(_loc_3 * _loc_3 + _loc_4 * _loc_4);
    }// end function

    public static getPointByRadians(param1: egret.Point, param2: number, param3: number = 1): egret.Point {
        var _loc_4: any = new egret.Point();
        _loc_4.x = param1.x * Math.cos(param2) - param1.y * Math.sin(param2) * param3;
        _loc_4.y = param1.x * Math.sin(param2) + param1.y * Math.cos(param2) * param3;
        return _loc_4;
    }// end function

    public static asRadians(param1: number): number {
        return param1 * KyoMath.DEGTORAD;
    }// end function

    public static velocityFromAngle(param1: number, param2: number, param3: boolean = true): egret.Point {
        var _loc_4: any = param3 ? (KyoMath.asRadians(param1)) : (param1);
        var _loc_5: any = new egret.Point();
        _loc_5.x = Number(Math.cos(_loc_4) * param2);
        _loc_5.y = Number(Math.sin(_loc_4) * param2);
        return _loc_5;
    }// end function

}

