var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Dicts = (function () {
    function Dicts() {
        this._dict = {};
        this._size = 0;
        return;
    }
    Dicts.prototype.put = function (arg1, arg2) {
        if (arg2 == undefined) {
            return;
        }
        if (this._dict[arg1] === undefined) {
            this._size++;
        }
        this._dict[arg1] = arg2;
        return;
    };
    Dicts.prototype.take = function (arg1) {
        return this._dict[arg1];
    };
    Dicts.prototype.remove = function (arg1) {
        if (this._dict[arg1] != undefined) {
            this._size--;
        }
        var loc1 = this._dict[arg1];
        delete this._dict[arg1];
        return loc1;
    };
    Dicts.prototype.clear = function () {
        this._dict = {};
        this._size = 0;
        return;
    };
    Dicts.prototype.dispose = function () {
        this._dict = null;
        return;
    };
    Object.defineProperty(Dicts.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Dicts.prototype.isEmpty = function () {
        return this._size == 0;
    };
    Dicts.prototype.contains = function (arg1) {
        return !(this._dict[arg1] == undefined);
    };
    /**key值 */
    Dicts.prototype.toArray = function () {
        var loc1 = new Array();
        for (var loc2 in this._dict) {
            loc1.push(loc2);
        }
        return loc1;
    };
    Dicts.prototype.copy = function () {
        var loc1 = new Dicts();
        loc1._dict = this._dict;
        loc1._size = this._size;
        return loc1;
    };
    Dicts.prototype.clone = function (arg1) {
        if (arg1 === void 0) { arg1 = false; }
        var loc1 = new Dicts();
        for (var loc2 in this._dict) {
            loc1.put(loc2, this._dict[loc2]);
        }
        return loc1;
    };
    Object.defineProperty(Dicts.prototype, "dict", {
        get: function () {
            return this._dict;
        },
        set: function (arg1) {
            var loc1 = 0;
            this._dict = arg1;
            for (var loc2 in this._dict) {
                ++loc1;
            }
            this._size = loc1;
        },
        enumerable: true,
        configurable: true
    });
    return Dicts;
}());
__reflect(Dicts.prototype, "Dicts");
//# sourceMappingURL=Dict.js.map