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
var PauseDialog = (function (_super) {
    __extends(PauseDialog, _super);
    function PauseDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PauseDialog.prototype.PauseDialog = function () {
        this._bg = new egret.Sprite();
        this._bg.graphics.beginFill(0, 0.5);
        this._bg.graphics.drawRect(0, 0, GameConfig.GAME_SIZE.x, GameConfig.GAME_SIZE.y);
        this._bg.graphics.endFill();
        GameScene.instance.addChild(this._bg);
        this._btnGroup = new SetBtnGroup();
        this._btnGroup.setBtnData([{ label: "GAME TITLE", cn: "返回标题" }, { label: "MOVE LIST", cn: "出招表" }, { label: "CONTINUE", cn: "继续游戏" }], 2);
        this._btnGroup.addEventListener("SELECT", this.btnGroupSelectHandler, this);
        GameScene.instance.addChild(this._btnGroup);
        return;
    }; // end function
    PauseDialog.prototype.destory = function () {
        if (this._btnGroup) {
            this._btnGroup.removeEventListener("SELECT", this.btnGroupSelectHandler, this);
            this._btnGroup.destory();
            this._btnGroup = null;
        }
        if (this._moveList) {
            this._moveList.destory();
            this._moveList = null;
        }
        return;
    }; // end function
    PauseDialog.prototype.isShowing = function () {
        return this.visible;
    }; // end function
    PauseDialog.prototype.show = function () {
        this.visible = true;
        this._btnGroup.keyEnable = true;
        this._btnGroup.setArrowIndex(2);
        return;
    }; // end function
    PauseDialog.prototype.hide = function () {
        this.visible = false;
        this._btnGroup.keyEnable = false;
        return;
    }; // end function
    PauseDialog.prototype.btnGroupSelectHandler = function (event) {
        if (GameUI.showingDialog()) {
            return;
        }
        var _loc_2 = event.selectedLabel;
        while (_loc_2 === "GAME TITLE") {
            MainGame.I.goMenu();
            do {
                this.showMoveList();
                do {
                    GameCtrl.I.resume(true);
                    break;
                } while (_loc_2.toString() == "MOVE LIST");
            } while (_loc_2.toString() === "CONTINUE");
            return;
        } // end function
    };
    PauseDialog.prototype.showMoveList = function () {
        if (!this._moveList) {
            this._moveList = new MoveListSp();
            this._moveList.onBackSelect = this.hideMoveList;
            GameScene.instance.addChild(this._moveList);
        }
        this._btnGroup.keyEnable = false;
        this._moveList.show();
        return;
    }; // end function
    PauseDialog.prototype.hideMoveList = function () {
        this._moveList.hide();
        this._btnGroup.keyEnable = true;
        return;
    }; // end function
    return PauseDialog;
}(egret.Sprite));
__reflect(PauseDialog.prototype, "PauseDialog");
//# sourceMappingURL=PauseDialog.js.map