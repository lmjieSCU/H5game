

class UUID {
    private static counter: number = 0;

    constructor() {
        return;
    }// end function

    public static create(): string {
        var _loc_1: any = new Date();
        var _loc_2: any = _loc_1.getTime();
        var _loc_3: any = Math.random() * Number.MAX_VALUE;
        var _loc_4: any = "nothing";//通过Capabilities.serverString可以获取到非常多的系统信息,包括操作系统、语言、系统分辨率、DPI
        var _loc_5: any = UUID.calculate(_loc_2 + _loc_4 + _loc_3 + UUID.counter++).toUpperCase();
        var _loc_6: any = _loc_5.substring(0, 8) + "-" + _loc_5.substring(8, 12) + "-" + _loc_5.substring(12, 16) + "-" + _loc_5.substring(16, 20) + "-" + _loc_5.substring(20, 32);
        return _loc_5.substring(0, 8) + "-" + _loc_5.substring(8, 12) + "-" + _loc_5.substring(12, 16) + "-" + _loc_5.substring(16, 20) + "-" + _loc_5.substring(20, 32);
    }// end function

    private static calculate(param1: string): string {
        return UUID.hex_sha1(param1);
    }// end function

    private static hex_sha1(param1: string): string {
        return UUID.binb2hex(UUID.core_sha1(UUID.str2binb(param1), param1.length * 8));
    }// end function

    private static core_sha1(param1: any[], param2: number): any[] {
        var _loc_10: any = NaN;
        var _loc_11: any = NaN;
        var _loc_12: any = NaN;
        var _loc_13: any = NaN;
        var _loc_14: any = NaN;
        var _loc_15: any = NaN;
        var _loc_16: any = NaN;
        param1[param2 >> 5] = param1[param2 >> 5] | 128 << 24 - param2 % 32;
        param1[(param2 + 64 >> 9 << 4) + 15] = param2;
        var _loc_3: any = new Array(80);
        var _loc_4: any = 1732584193;
        var _loc_5: any = -271733879;
        var _loc_6: any = -1732584194;
        var _loc_7: any = 271733878;
        var _loc_8: any = -1009589776;
        var _loc_9: any = 0;
        while (_loc_9 < param1.length) {

            _loc_10 = _loc_4;
            _loc_11 = _loc_5;
            _loc_12 = _loc_6;
            _loc_13 = _loc_7;
            _loc_14 = _loc_8;
            _loc_15 = 0;
            while (_loc_15 < 80) {

                if (_loc_15 < 16) {
                    _loc_3[_loc_15] = param1[_loc_9 + _loc_15];
                }
                else {
                    _loc_3[_loc_15] = UUID.rol(_loc_3[_loc_15 - 3] ^ _loc_3[_loc_15 - 8] ^ _loc_3[_loc_15 - 14] ^ _loc_3[_loc_15 - 16], 1);
                }
                _loc_16 = UUID.safe_add(UUID.safe_add(UUID.rol(_loc_4, 5), UUID.sha1_ft(_loc_15, _loc_5, _loc_6, _loc_7)), UUID.safe_add(UUID.safe_add(_loc_8, _loc_3[_loc_15]), UUID.sha1_kt(_loc_15)));
                _loc_8 = _loc_7;
                _loc_7 = _loc_6;
                _loc_6 = UUID.rol(_loc_5, 30);
                _loc_5 = _loc_4;
                _loc_4 = _loc_16;
                _loc_15 = _loc_15 + 1;
            }
            _loc_4 = UUID.safe_add(_loc_4, _loc_10);
            _loc_5 = UUID.safe_add(_loc_5, _loc_11);
            _loc_6 = UUID.safe_add(_loc_6, _loc_12);
            _loc_7 = UUID.safe_add(_loc_7, _loc_13);
            _loc_8 = UUID.safe_add(_loc_8, _loc_14);
            _loc_9 = _loc_9 + 16;
        }
        return new Array(_loc_4, _loc_5, _loc_6, _loc_7, _loc_8);
    }// end function

    private static sha1_ft(param1: number, param2: number, param3: number, param4: number): number {
        if (param1 < 20) {
            return param2 & param3 | ~param2 & param4;
        }
        if (param1 < 40) {
            return param2 ^ param3 ^ param4;
        }
        if (param1 < 60) {
            return param2 & param3 | param2 & param4 | param3 & param4;
        }
        return param2 ^ param3 ^ param4;
    }// end function

    private static sha1_kt(param1: number): number {
        return param1 < 20 ? (1518500249) : (param1 < 40 ? (1859775393) : (param1 < 60 ? (-1894007588) : (-899497514)));
    }// end function

    private static safe_add(param1: number, param2: number): number {
        var _loc_3: any = (param1 & 65535) + (param2 & 65535);
        var _loc_4: any = (param1 >> 16) + (param2 >> 16) + (_loc_3 >> 16);
        return (param1 >> 16) + (param2 >> 16) + (_loc_3 >> 16) << 16 | _loc_3 & 65535;
    }// end function

    private static rol(param1: number, param2: number): number {
        return param1 << param2 | param1 >>> 32 - param2;
    }// end function

    private static str2binb(param1: string): any[] {
        var _loc_2: any = new Array();
        var _loc_3: any = (1 << 8) - 1;
        var _loc_4: any = 0;
        while (_loc_4 < param1.length * 8) {

            _loc_2[_loc_4 >> 5] = _loc_2[_loc_4 >> 5] | (param1.charCodeAt(_loc_4 / 8) & _loc_3) << 24 - _loc_4 % 32;
            _loc_4 = _loc_4 + 8;
        }
        return _loc_2;
    }// end function

    private static binb2hex(param1: any[]): string {
        var _loc_2: any = new String("");
        var _loc_3: any = new String("0123456789abcdef");
        var _loc_4: any = 0;
        while (_loc_4 < param1.length * 4) {

            _loc_2 = _loc_2 + (_loc_3.charAt(param1[_loc_4 >> 2] >> (3 - _loc_4 % 4) * 8 + 4 & 15) + _loc_3.charAt(param1[_loc_4 >> 2] >> (3 - _loc_4 % 4) * 8 & 15));
            _loc_4 = _loc_4 + 1;
        }
        return _loc_2;
    }// end function

}

