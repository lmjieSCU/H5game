var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**游戏提示界面 */
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer() {
        return _super.call(this) || this;
    }
    Layer.prototype.init = function () { };
    ;
    return Layer;
}(egret.DisplayObjectContainer));
__reflect(Layer.prototype, "Layer", ["egret.DisplayObject"]);
//# sourceMappingURL=Layer.js.map