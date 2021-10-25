var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**特效控制器
 * 生成连线特效,stage提示特效,cell消失特效,comb特效
 */
var EffectCtrl = (function () {
    function EffectCtrl() {
    }
    Object.defineProperty(EffectCtrl, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new EffectCtrl();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    EffectCtrl.prototype.initlize = function (param1, param2) {
        this._gameStage = param1;
        this._effectLayer = param2;
    };
    EffectCtrl.prototype.render = function () {
    };
    /**移除特效 */
    EffectCtrl.prototype.removeEffect = function () {
    };
    return EffectCtrl;
}());
__reflect(EffectCtrl.prototype, "EffectCtrl");
//# sourceMappingURL=EffectCtrl.js.map