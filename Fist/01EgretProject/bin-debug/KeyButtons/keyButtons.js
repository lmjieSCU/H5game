var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var keyButtons = (function () {
    function keyButtons() {
    }
    keyButtons.P1 = {
        "up": KeyBoard.W,
        "front": KeyBoard.D,
        "back": KeyBoard.A,
        "down": KeyBoard.S,
        "kick_l": KeyBoard.I,
        "kick": KeyBoard.K,
        "punch_l": KeyBoard.U,
        "punch": KeyBoard.J,
        "burst": KeyBoard.O,
        "roll": KeyBoard.L,
    };
    keyButtons.P2 = {};
    keyButtons.btn = {
        "up": "up",
        "front": "right",
        "back": "left",
        "down": "down",
        "kick": "kick",
        "kick_l": "kick_l",
        "punch": "punch",
        "punch_l": "punch_l",
        "burst": "burst",
        "roll": "roll",
    };
    return keyButtons;
}());
__reflect(keyButtons.prototype, "keyButtons");
//# sourceMappingURL=keyButtons.js.map