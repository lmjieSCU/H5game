var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*接收从Server发来的帧包,根据playerID存在对应的缓冲区中
*/
var FromServer = (function () {
    function FromServer() {
        this._packCache = {};
        this._size = 0;
        FromServer.I = this;
    }
    FromServer.prototype.destroy = function () {
        this._packCache = {};
    };
    FromServer.prototype.CacheOperFromServer = function (_frameid, _data) {
        this._packCache[_frameid] = _data;
        this._size++;
        return;
    }; // end function
    FromServer.prototype.GetOperFromServer = function (_frameid) {
        if (this._packCache[_frameid] == undefined) {
            return null;
        }
        var data = this._packCache[_frameid];
        delete this._packCache[_frameid];
        this._size--;
        return data;
    };
    FromServer.prototype._length = function () {
        return this._size;
    };
    return FromServer;
}());
__reflect(FromServer.prototype, "FromServer");
//# sourceMappingURL=FromServer.js.map