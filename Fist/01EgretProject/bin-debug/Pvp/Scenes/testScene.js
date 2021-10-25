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
var testScene = (function (_super) {
    __extends(testScene, _super);
    function testScene() {
        return _super.call(this) || this;
    }
    //
    testScene.prototype.onEnter = function () {
        Main.loadResAlready = true; //加载资源成功
        this.container1 = new egret.DisplayObjectContainer;
        this.addChild(this.container1);
        this.container1.x = 10;
        this.object = new egret.DisplayObject;
        this.container1.addChild(this.object);
        this.object.x = 10;
        console.log(this.object.localToGlobal(this.object.x).x);
    };
    testScene.prototype.onExit = function () {
    };
    return testScene;
}(Scene));
__reflect(testScene.prototype, "testScene");
//# sourceMappingURL=testScene.js.map