var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TransUI = (function () {
    function TransUI() {
        this._renderAnimateGap = 0;
        this._renderAnimateFrame = 0;
        this._rendering = true;
        this.ui = new zmovie.ZMovieClip(["score_num_json"], RES.getRes("fightui_json"), "root");
        return;
    } // end function
    TransUI.prototype.destory = function () {
        GameRender.remove(this.render);
        return;
    }; // end function
    TransUI.prototype.startRender = function () {
        this._renderAnimateGap = Math.ceil(MainGame.I.getFPS() / 30) - 1;
        this._renderAnimateFrame = 0;
        this._rendering = true;
        GameRender.add(this.render);
        return;
    }; // end function
    TransUI.prototype.stopRender = function () {
        this._rendering = false;
        GameRender.remove(this.render);
        return;
    }; // end function
    TransUI.prototype.render = function () {
        if (!this._rendering) {
            return;
        }
        if (this._renderAnimateGap > 0) {
            this._renderAnimateFrame = this._renderAnimateFrame + 1;
            if (this._renderAnimateFrame >= this._renderAnimateGap) {
                this._renderAnimateFrame = 0;
                this.renderAnimate();
            }
        }
        else {
            this.renderAnimate();
        }
        return;
    }; // end function
    TransUI.prototype.renderAnimate = function () {
        if (this.ui.currentFrameLabel == "stop") {
            if (this._fadInBack != null) {
                this._fadInBack(); //  call this
                this._fadInBack = null;
                return;
            }
            if (this._fadOutBack != null) {
                this._fadOutBack(); //  call this
                this._fadOutBack = null;
                return;
            }
            this.stopRender();
            return;
        }
        this.ui.nextFrame();
        return;
    }; // end function
    TransUI.prototype.fadIn = function (param1) {
        if (param1 === void 0) { param1 = null; }
        this._fadOutBack = null;
        this._fadInBack = param1;
        this.ui.gotoAndStop("fadin");
        this.startRender();
        return;
    }; // end function
    TransUI.prototype.fadOut = function (param1) {
        if (param1 === void 0) { param1 = null; }
        this._fadInBack = null;
        this._fadOutBack = param1;
        this.ui.gotoAndStop("fadout");
        this.startRender();
        return;
    }; // end function
    return TransUI;
}());
__reflect(TransUI.prototype, "TransUI");
//# sourceMappingURL=TransUI.js.map