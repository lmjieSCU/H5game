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
var InstructionList = (function (_super) {
    __extends(InstructionList, _super);
    function InstructionList(role) {
        var _this = _super.call(this) || this;
        _this.skill_ordinary = [];
        _this.skill_EX = [];
        _this.skill_Cri = [["down", "punch_l"], ["down", "kick_l"]];
        _this.width = 380;
        _this.height = 420;
        _this.x = UI.WINSIZE_W / 2 - _this.width / 2;
        _this.y = UI.WINSIZE_H / 2 - _this.height / 2;
        _this.blackCloth(_this, function () { });
        _this.bg();
        _this.role = role;
        _this.if_instructions(role.skill_array, role.skill_mapping);
        //this.roleList();
        _this.end();
        return _this;
    }
    //背景
    InstructionList.prototype.bg = function () {
        UI.addPic(this, "Popup_skill_png", 0, 0);
    };
    //关闭按钮
    InstructionList.prototype.end = function () {
        var _this = this;
        UI.addBtn(this, "Popup_close_png", this.width - 60, 6, false, function () {
            FightMainRender.instance.renderPause = false;
            _this.parent.removeChild(_this);
            if (NoviceGuidance.I().novice_btn) {
                NoviceGuidance.I().step9();
            }
        });
    };
    //指令表
    InstructionList.prototype.roleList = function () {
        UI.addText(this, "普通技能", 45, 50, false, 17);
        var ordinary_h = 50;
        var ordinary_w = 65;
        for (var i in this.skill_ordinary) {
            ordinary_h += 25;
            UI.addText(this, this.if_string(this.skill_ordinary[i][0]) + " + " + this.if_string(this.skill_ordinary[i][1]), ordinary_w, ordinary_h, false, 15);
        }
        ordinary_h += 30;
        ordinary_w = 65;
        UI.addText(this, "EX技能(需要消耗能量条)", 45, ordinary_h, false, 17);
        for (var i in this.skill_EX) {
            ordinary_h += 25;
            UI.addText(this, this.if_string(this.skill_EX[i][0]) + " + " + this.if_string(this.skill_EX[i][1]), ordinary_w, ordinary_h, false, 15);
        }
        ordinary_h += 30;
        UI.addText(this, "必杀技(需要爆发)", 45, ordinary_h, false, 17);
        for (var i in this.skill_Cri) {
            ordinary_h += 25;
            UI.addText(this, this.if_string(this.skill_Cri[i][0]) + " + " + this.if_string(this.skill_Cri[i][1]), ordinary_w, ordinary_h, false, 15);
        }
        ordinary_h += 25;
        UI.addText(this, "\u7981", ordinary_w, ordinary_h, false, 15);
        ordinary_h += 25;
        UI.addText(this, "\u6447\u6746\u5411\u5DE6+\u7981", ordinary_w, ordinary_h, false, 15);
        ordinary_h += 30;
        UI.addText(this, "\u6CE8\uFF1A\u7206\u53D1\u9700\u8981\u80FD\u91CF\u6761\u84C4\u6EE1,\u6309\u4E0B \u7981 \u5373\u53EF", 45, ordinary_h, false, 15);
    };
    //指令判断
    InstructionList.prototype.if_instructions = function (skill_array, skill_mapping) {
        for (var i in skill_array) {
            var skill_type = this.instructions_type(skill_mapping[i]);
            if (skill_type) {
                this.skill_ordinary.push(skill_array[i]);
            }
            else {
                this.skill_EX.push(skill_array[i]);
            }
        }
        console.log(this.skill_ordinary);
        console.log(this.skill_EX);
    };
    InstructionList.prototype.instructions_type = function (mapping) {
        for (var i in this.role.skillObj) {
            if (mapping == this.role.skillObj[i]) {
                return false;
            }
        }
        return true;
    };
    //字符转指令
    InstructionList.prototype.if_string = function (str) {
        switch (str) {
            case "up":
                return "上";
            case "right":
                return "右";
            case "left":
                return "左";
            case "down":
                return "下";
            case "kick":
                return "";
            case "punch":
                return "普通攻击";
            case "punch_l":
                return "地";
            case "kick_l":
                return "天";
            case "burst":
                return "禁";
        }
    };
    //遮挡
    InstructionList.prototype.blackCloth = function (node, event) {
        if (event === void 0) { event = null; }
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x00000, 0.3);
        var num = this.globalToLocal(0, 0);
        shp.graphics.drawRect(num.x, num.y, UI.WINSIZE_W, UI.WINSIZE_H);
        shp.graphics.endFill();
        node.addChild(shp);
        if (event != null) {
            shp.touchEnabled = true;
            shp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, event, shp);
        }
    };
    return InstructionList;
}(egret.DisplayObjectContainer));
__reflect(InstructionList.prototype, "InstructionList");
//# sourceMappingURL=InstructionList.js.map