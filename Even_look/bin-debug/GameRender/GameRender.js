/**帧同步游戏以帧事件驱动整个游戏进行,为游戏动力源
 * initlize函数：增加帧事件驱动
 * add函数：增加其它类的render函数至renderMc数组
 * remove函数：移除其它类的render函数
 * render函数：对renderMc数组中的各个render依次执行
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**单例模式
 * 整个项目只有一个实例，使用instance调用
 */
var renderFrameScript = (function () {
    function renderFrameScript(_fun, _mc) {
        this.fun = _fun;
        this.mc = _mc;
    }
    return renderFrameScript;
}());
__reflect(renderFrameScript.prototype, "renderFrameScript");
var GameRender = (function () {
    //私有构造函数,以防止被外部调用实例化
    function GameRender() {
        this.renderMc = [];
        this.isrender = false;
    }
    Object.defineProperty(GameRender, "I", {
        //静态工程方法创建实例
        get: function () {
            if (this.instance == null) {
                this.instance = new GameRender();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    GameRender.prototype.initlize = function (param1) {
        this.render_Stage = param1;
        this.render_Stage.addEventListener(egret.Event.ENTER_FRAME, this.render, this);
    };
    GameRender.prototype.Add = function (mc, _fun) {
        for (var i in this.renderMc) {
            if (this.renderMc[i].mc == mc) {
                return;
            }
        }
        var param1 = new renderFrameScript(_fun, mc);
        this.renderMc.push(param1);
    };
    GameRender.prototype.Remove = function (mc) {
        for (var i in this.renderMc) {
            if (this.renderMc[i].mc == mc) {
                this.renderMc.splice(Number(i), 1);
                return;
            }
        }
    };
    GameRender.prototype.render = function () {
        for (var i in this.renderMc) {
            this.renderMc[i].fun.call(this.renderMc[i].mc);
        }
    };
    GameRender.prototype.destroy = function () {
        this.renderMc = null;
        this.isrender = null;
        this.render_Stage.removeEventListener(egret.Event.ENTER_FRAME, this.render, this);
        this.render_Stage = null;
        GameRender.instance = null;
    };
    GameRender.instance = null;
    return GameRender;
}());
__reflect(GameRender.prototype, "GameRender");
//# sourceMappingURL=GameRender.js.map