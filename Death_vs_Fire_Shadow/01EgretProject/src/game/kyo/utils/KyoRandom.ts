class KyoRandom {

    constructor() {
        return;
    }// end function

    public static getRandomInArray(param1: any, param2: boolean = false) {
        if (param1 == null || param1.length < 1) {
            return null;
        }
        var _loc_3: any = Math.random() * param1.length << 0;
        var _loc_4: any = param1[_loc_3];
        if (param2) {
            param1.splice(_loc_3, 1);
        }
        return _loc_4;
    }// end function

    public static getRandomSomeInArray(param1: any[], param2: number, param3: boolean = false): any[] {
        var _loc_6: any = 0;
        var _loc_7: any = 0;
        var _loc_8: any = undefined;
        var _loc_4: any = param1.concat();
        var _loc_5: any = [];
        while (_loc_6 < param2) {

            _loc_7 = Math.random() * _loc_4.length << 0;
            _loc_8 = _loc_4[_loc_7];
            _loc_5.push(_loc_8);
            if (!param3) {
                _loc_4.splice(_loc_7, 1);
            }
            _loc_6 = _loc_6 + 1;
        }
        return _loc_5;
    }// end function

    public static getRandomOne(...args) {
        return KyoRandom.getRandomInArray(args);
    }// end function

    public static between(param1: number, param2: number): number {
        var _loc_3: any = NaN;
        var _loc_4: any = NaN;
        if (param1 < param2) {
            _loc_3 = param1;
            _loc_4 = param2;
        }
        else {
            _loc_3 = param2;
            _loc_4 = param1;
        }
        var _loc_5: any = _loc_3 + Math.random() * (_loc_4 - _loc_3);
        if (_loc_3 + Math.random() * (_loc_4 - _loc_3) < _loc_3) {
            _loc_5 = _loc_3;
        }
        if (_loc_5 > _loc_4) {
            _loc_5 = _loc_4;
        }
        return _loc_5;
    }// end function

    public static getRandomByRate(param1: any[], param2: string) {
        var _loc_7: any = NaN;
        var _loc_3: any = 0;
        Flash.sortOn(param1, param2, Flash.NUMERIC);  //Array.NUMERIC按照数字顺序排序,从小到大
        var _loc_4: any = 0;
        while (_loc_4 < param1.length) {

            _loc_3 = _loc_3 + Number(param1[_loc_4][param2]);
            _loc_4 = _loc_4 + 1;
        }
        var _loc_5: any = Math.random() * _loc_3;
        if (Math.random() * _loc_3 > (_loc_3 - 1)) {
            _loc_5 = _loc_3 - 1;
        }
        var _loc_6: any = 0;
        _loc_4 = 0;
        while (_loc_4 < param1.length) {

            _loc_7 = _loc_6 + Number(param1[_loc_4][param2]);
            if (_loc_5 >= _loc_6 && _loc_5 < _loc_7) {
                return param1[_loc_4];
            }
            _loc_6 = _loc_7;
            _loc_4 = _loc_4 + 1;
        }
        throw Error("无法按机率选择，请检查数据");
    }// end function

    public static getRandomByRateLite(param1: any[], param2: string, param3: number = 1) {
        var _loc_8: any = undefined;
        var _loc_9: any = NaN;
        Flash.sortOn(param1, param2, Flash.NUMERIC);
        var _loc_4: any = Math.random() * param3;
        var _loc_5: any = 0;
        var _loc_6: any = [];
        var _loc_7: any = 0;
        while (_loc_7 < param1.length) {

            _loc_8 = param1[_loc_7];
            _loc_9 = _loc_8[param2];
            if (_loc_5 == 0) {
                if (_loc_4 <= _loc_9) {
                    _loc_5 = _loc_9;
                    _loc_6.push(_loc_8);
                }
            }
            else if (_loc_9 == _loc_5) {
                _loc_6.push(_loc_8);
            }
            _loc_7 = _loc_7 + 1;
        }
        return KyoRandom.getRandomInArray(_loc_6);
    }// end function

    public static getRandomInts(param1: number, param2: number): any[] {
        var _loc_3: any = [];
        var _loc_4: any = param1;
        while (_loc_4 < param2) {

            _loc_3.push(_loc_4);
            _loc_4 = _loc_4 + 1;
        }
        KyoRandom.arraySortRandom(_loc_3);
        return _loc_3;
    }// end function

    public static arraySortRandom(param1: any[]): void {
        var taxis: Function;
        var array: any = param1;
        taxis = function (param1, param2): number {
            var _loc_3: any = Math.random();
            if (_loc_3 < 0.5) {
                return -1;
            }
            return 1;
        }// end function
            ;
        array.sort(taxis);
        return;
    }// end function

    public static getRandomColor(param1: number = 0, param2: number = 16777215): number {
        return param1 + (param2 - param1) * Math.random();
    }// end function

}


