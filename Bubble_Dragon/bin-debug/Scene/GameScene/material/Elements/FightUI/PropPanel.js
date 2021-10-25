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
/**道具仓库 */
var PropPanel = (function (_super) {
    __extends(PropPanel, _super);
    function PropPanel() {
        var _this = _super.call(this) || this;
        var loc5 = 0;
        var loc6 = null;
        var loc7 = null;
        var board = UI.addPic("res.propBoarder", true, _this);
        UI.setscalXandY(board, 1.5, 1);
        var loc2 = false;
        var loc3 = 0;
        var loc4 = 0;
        while (loc4 < Model.levelModel.buyProps.length) {
            loc5 = Model.levelModel.buyProps[loc4];
            if (!((loc6 = Config.propCfgParser.getPropCfg(loc5)).type == PropType.PROP_2) && !(loc6.type == PropType.PROP_3) && !(loc6.type == PropType.PROP_7)) {
                (loc7 = new PropItem(loc6)).x = loc3 * 53 + 40 - _this.width / 2;
                // loc7.y = 0;
                _this.addChild(loc7);
                loc2 = true;
                ++loc3;
            }
            ++loc4;
        }
        if (loc2) {
            _this.visible = true;
        }
        else {
            _this.visible = false;
        }
        return _this;
    }
    return PropPanel;
}(Elements));
__reflect(PropPanel.prototype, "PropPanel");
var PropItem = (function (_super) {
    __extends(PropItem, _super);
    function PropItem(arg1) {
        var _this = _super.call(this) || this;
        _this.data = arg1;
        _this.btn = UI.addPic("res.prop_" + arg1.id, true, _this);
        UI.addClickAction(_this, _this.btn, _this.onBtnTouch);
        _this.countLabel = UI.addBitText(_this, "", "info_fnt", false, 0, 40);
        _this.countLabel.textAlign = "left";
        _this.setCount(_this.data.p1);
        return _this;
    }
    PropItem.prototype.onBtnTouch = function (arg1) {
        if (GameScene.instance.isOver || !GameScene.instance.isReady) {
            return;
        }
        this.setCount((this.getCount() - 1));
        if (this.data.type == PropType.PROP_6) {
            GameScene.instance.addShieldToLunchBubble(this.x, this.y);
        }
        else {
            GameScene.instance.changeLunchBubble(this.data.p2, this.x, this.y);
        }
        return;
    };
    PropItem.prototype.setCount = function (arg1) {
        this._count = arg1;
        this.countLabel.text = String(arg1);
        if (arg1 == 0) {
            this.btn.$setTouchEnabled(false);
        }
        return;
    };
    PropItem.prototype.getCount = function () {
        return this._count;
    };
    return PropItem;
}(Elements));
__reflect(PropItem.prototype, "PropItem");
//# sourceMappingURL=PropPanel.js.map