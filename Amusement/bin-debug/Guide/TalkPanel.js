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
/**对话框 */
var TalkPanel = (function (_super) {
    __extends(TalkPanel, _super);
    function TalkPanel() {
        var _this = _super.call(this) || this;
        _this.talk_board = UI.addPic("guideboard_png", true, _this);
        _this.talk_txt = UI.addText(_this, "", true, -50, -50);
        _this.talk_txt.textColor = 0xff00ff;
        return _this;
    }
    TalkPanel.prototype.setContent = function (arg1) {
        this.talk_txt.text = arg1;
        return;
    };
    return TalkPanel;
}(egret.DisplayObjectContainer));
__reflect(TalkPanel.prototype, "TalkPanel");
//# sourceMappingURL=TalkPanel.js.map