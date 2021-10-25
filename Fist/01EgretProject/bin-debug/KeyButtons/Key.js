var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**键盘监听
 * 键盘库不支持联机
 */
var Key = (function () {
    function Key() {
        this._SendOrder = {};
        this._DownOrder = {};
        this.kb = new KeyBoard();
        this.keycontrols = new Array();
        this._SendOrder["lastKey"] = "";
        this._SendOrder["isKeyDown"] = false;
        console.log(KeyBoard.onkeydown);
        this.kb.addEventListener(KeyBoard.onkeydown, this.onKeyDown, this);
        this.kb.addEventListener(KeyBoard.onkeyup, this.onKeyUp, this);
        return;
    }
    Key.prototype.initlize = function (keycontrol) {
        if (this.keycontrols.indexOf(keycontrol) != -1) {
            return;
        }
        this.keycontrols.push(keycontrol);
    };
    Key.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Key();
        }
        return this.instance;
    };
    Key.prototype.SendPacket = function () {
        if (GameModel.currentMode != GameModel.VS_PERSON) {
            this.setPacket(this._SendOrder);
            return;
        }
        else {
            //联机模式
            var sendFramePara = { data: this._SendOrder };
            RoomManager.getInstance().room.sendFrame(sendFramePara);
            return;
        }
    };
    Key.prototype.setPacket = function (_pressDownOrder) {
        for (var index = 0; index < this.keycontrols.length; index++) {
            this.keycontrols[index].isKeyDown = _pressDownOrder["isKeyDown"];
            this.keycontrols[index].lastKey = _pressDownOrder["lastKey"];
            this.keycontrols[index].onKeyDown();
        }
        for (var index in _pressDownOrder) {
            this._DownOrder[index] = _pressDownOrder[index];
        }
        return;
    };
    Key.prototype.onKeyDown = function (event) {
        this._SendOrder = { "lastKey": "", "isKeyDown": true };
        for (var index = 0; index < event.data.length; index++) {
            this._SendOrder[event.data[index]] = true;
        }
        if (event.data.length > 0) {
            this._SendOrder["lastKey"] = event.data[event.data.length - 1];
        }
        // this.SendPacket();
        for (var index = 0; index < this.keycontrols.length; index++) {
            this.keycontrols[index].isKeyDown = this._SendOrder["isKeyDown"];
            this.keycontrols[index].lastKey = this._SendOrder["lastKey"];
            this.keycontrols[index].onKeyDown();
        }
    };
    Key.prototype.onKeyUp = function (event) {
        this._SendOrder = { "lastKey": "", "isKeyDown": false };
        for (var index = 0; index < event.data.length; index++) {
            this._SendOrder[event.data[index]] = true;
        }
        if (event.data.length > 0) {
            this._SendOrder["lastKey"] = event.data[event.data.length - 1];
        }
        // this.SendPacket();
        for (var index = 0; index < this.keycontrols.length; index++) {
            this.keycontrols[index].isKeyDown = this._SendOrder["isKeyDown"];
            this.keycontrols[index].lastKey = this._SendOrder["lastKey"];
            this.keycontrols[index].onKeyDown();
        }
    };
    Key.prototype.initial = function () {
    };
    Key.prototype.isDown = function (key) {
        if (this._SendOrder[key] != undefined) {
            return true;
        }
        // if (this._DownOrder[key] != undefined) {
        //     return true;
        // }
        return false;
    };
    return Key;
}());
__reflect(Key.prototype, "Key");
//# sourceMappingURL=Key.js.map