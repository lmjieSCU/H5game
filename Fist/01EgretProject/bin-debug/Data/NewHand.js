var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NewHand = (function () {
    function NewHand() {
    }
    /**
     * @param isJump 1代表跳过，0代表未跳过
     * @param isComplete 1代表完成了新手教程,0代表未完成
     * @param playCount 进行的游戏次数
     */
    NewHand.getNewHandInfo = function () {
        var isJump = (egret.localStorage.getItem("isJump") == '1');
        var isComplete = (egret.localStorage.getItem("isComplete") == '1');
        var count = Number(egret.localStorage.getItem("playCount")) || 0;
        var newHandInfo = {
            isJump: isJump,
            isComplete: isComplete,
            playCount: count
        };
        return newHandInfo;
    };
    NewHand.setNewHand = function (type, num) {
        switch (type) {
            case 'isJump':
                egret.localStorage.setItem('isJump', num.toString());
                break;
            case 'isComplete':
                egret.localStorage.setItem('isComplete', num.toString());
                break;
            case 'playCount':
                var count = Number(egret.localStorage.getItem('playCount'));
                egret.localStorage.setItem('playCount', "" + (count + num));
                break;
        }
    };
    return NewHand;
}());
__reflect(NewHand.prototype, "NewHand");
//# sourceMappingURL=NewHand.js.map