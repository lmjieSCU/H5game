var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var KyoUtils = (function () {
    function KyoUtils() {
    }
    // public static setValueByObject(param1, param2:Object) : void
    // {
    //     var i:string;
    //     var tmp:any;
    //     var vv:Object;
    //     var setter:any = param1;
    //     var obj:any = param2;
    //     if (!obj)
    //     {
    //         return;
    //     }
    //     var _loc_4:number = 0;
    //     while (_loc_4 in obj)
    //     {
    //         i = obj[_loc_4];
    //         tmp = undefined;
    //         try
    //         {
    //             tmp = setter[i];
    //         }
    //         catch (e)
    //         {
    //         }
    //         vv = obj[i];
    //         if (tmp === undefined)
    //         {
    //             try
    //             {
    //                 setter[i] = vv;
    //             }
    //             catch (e)
    //             {
    //                 console.log("KyoUtils.setValueByObject :", e);
    //             }
    //             continue;
    //         }
    //         if (typeof (setter[i]) == "boolean")
    //         {
    //             if (typeof (vv) == "boolean")
    //             {
    //                 setter[i] = vv;
    //             }
    //             else if (typeof (vv) == "number")
    //             {
    //                 setter[i] = vv == 1;
    //             }
    //             else if (typeof (vv) == "string")
    //             {
    //                 setter[i] = vv == "true" || vv == "1";
    //             }
    //             continue;
    //         }
    //         if (typeof (setter[i]) ==  "number")
    //         {
    //             setter[i] = Number(vv);
    //             continue;
    //         }
    //         setter[i] = vv;
    //     }
    //     return;
    // }// end 
    KyoUtils.setValueByObject = function (param1, param2) {
        if (!param2) {
            return;
        }
        for (var _loc_4 in param2) {
            if (param1[_loc_4] == undefined) {
                continue;
            }
            if (typeof (param1[_loc_4]) == "boolean") {
                if (typeof (param2[_loc_4]) == "boolean") {
                    param1[_loc_4] = param2[_loc_4];
                }
                else if (typeof (param2[_loc_4]) == "number") {
                    param1[_loc_4] = param2[_loc_4] == 1;
                }
                else if (typeof (param2[_loc_4]) == "string") {
                    param1[_loc_4] = param2[_loc_4] == "true" || param2[_loc_4] == "1";
                }
                continue;
            }
            if (typeof (param1[_loc_4]) == "number") {
                param1[_loc_4] = Number(param2[_loc_4]);
                continue;
            }
            param1[_loc_4] = param2[_loc_4];
        }
        return;
    }; // end 
    KyoUtils.cloneValue = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = null; }
        var _loc_4 = null;
        var obj = null;
        if (param3) {
            for (var _i = 0, param3_1 = param3; _i < param3_1.length; _i++) {
                _loc_4 = param3_1[_i];
                param1[_loc_4] = param2[_loc_4];
            }
        }
        else {
            for (obj in param2) {
                param1[obj] = param2[obj];
            }
        }
        return param1;
    }; // end 
    KyoUtils.itemToObject = function (param1) {
        return null;
    }; // end function
    KyoUtils.num_wake = function (param1, param2) {
        if (param1 > 0) {
            param1 = Number(param1 - param2);
            if (param1 < 0) {
                param1 = 0;
            }
        }
        if (param1 < 0) {
            param1 = Number(param1 + param2);
            if (param1 > 0) {
                param1 = 0;
            }
        }
        return param1;
    };
    KyoUtils.cloneObject = function (param1) {
        var _loc_3 = null;
        var _loc_2 = {};
        for (_loc_3 in param1) {
            _loc_2[param1[_loc_3]] = param1[param1[_loc_3]];
        }
        return _loc_2;
    }; // end 
    KyoUtils.drawDisplay = function (param1, param2, param3, param4, param5) {
        if (param2 === void 0) { param2 = true; }
        if (param3 === void 0) { param3 = true; }
        if (param4 === void 0) { param4 = 0; }
        if (param5 === void 0) { param5 = null; }
        var _loc_7 = null;
        var _loc_8 = null;
        if (!param1 || param1.width <= 0 || param1.height <= 0) {
            return null;
        }
        var _loc_6 = null;
        try {
            _loc_6 = UI.MovedShadow(param1, param3, param4);
        }
        catch (e) {
            _loc_6 = UI.BitmapData(param1.width, param1.height, param3, param4);
        }
        if (param2) {
            _loc_8 = param1.getBounds();
            _loc_7 = new egret.Matrix(1, 0, 0, 1, -_loc_8.x, -_loc_8.y);
        }
        if (param5 != null) {
            //UI.setImageColor(_loc_6, UI.RGB2HEX16(param5.r, param5.g, param5.b));
            UI.setMovieColor(param1, param5);
        }
        // _loc_6.bitmapData.draw(param1, _loc_7, param5);
        return _loc_6;
    }; // end function
    return KyoUtils;
}());
__reflect(KyoUtils.prototype, "KyoUtils");
//# sourceMappingURL=KyoUtils.js.map