var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var renderFrameScript = (function () {
    function renderFrameScript(_fun, _th) {
        this.fun = _fun;
        this.mc = _th;
    }
    return renderFrameScript;
}());
__reflect(renderFrameScript.prototype, "renderFrameScript");
/*
*以帧事件驱动整个游戏进行,为游戏动力源
*initlize函数：增加帧事件驱动
*add函数：增加其它类的render函数至_fucs数组
*remove函数：移除其它类的render函数
*render函数：对_fucs数组中的各个render依次执行
*/
var DiamondRender = (function () {
    function DiamondRender() {
    }
    DiamondRender.AddDiamond = function (mc, _fun) {
        for (var i in this.renderMc) {
            if (this.renderMc[i].mc == mc) {
                return;
            }
        }
        var param1 = new renderFrameScript(_fun, mc);
        DiamondRender.renderMc.push(param1);
    };
    DiamondRender.RemoveDiamond = function (mc) {
        for (var i in this.renderMc) {
            if (this.renderMc[i].mc == mc) {
                DiamondRender.renderMc.splice(Number(i), 1);
                return;
            }
        }
    };
    DiamondRender.Animation = function (param1) {
        if (this.isrender == true) {
            return;
        }
        this.isrender = true;
        this.render_Stage = param1;
        this.render_Stage.addEventListener(egret.Event.ENTER_FRAME, this.render, this);
        this.render_Stage.frameRate = 60;
    };
    DiamondRender.render = function () {
        if (DiamondRender.renderMc.length == 0) {
            DiamondRender.render_Stage.removeEventListener(egret.Event.ENTER_FRAME, this.render, this);
            DiamondRender.isrender = false;
            this.render_Stage.frameRate = 30;
            DiamondRender.render_Stage = null;
            this.renderMc = [];
            return;
        }
        for (var i in DiamondRender.renderMc) {
            DiamondRender.renderMc[i].fun.call(DiamondRender.renderMc[i].mc);
        }
    };
    DiamondRender.renderMc = [];
    DiamondRender.isrender = false;
    return DiamondRender;
}());
__reflect(DiamondRender.prototype, "DiamondRender");
//# sourceMappingURL=DiamondRender.js.map