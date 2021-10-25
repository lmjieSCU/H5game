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
var RecordBtn = (function (_super) {
    __extends(RecordBtn, _super);
    function RecordBtn(paramX, paramY) {
        var _this = _super.call(this) || this;
        _this.secondFlag = 0;
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        _this.btn1 = UI.addBtn(_this, "share_btn1_png", 0, 0, true, null);
        _this.btn1.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_ING;
            platform.startRecord();
        }, _this);
        _this.btn2 = UI.addBtn(_this, "share_btn2_png", 0, 0, true, null);
        _this.btn2.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            if (RecordBtn.recordSecond > 3) {
                this.btn1.visible = false;
                this.btn2.visible = false;
                this.btn3.visible = true;
                RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_END;
                platform.stopRecord();
            }
            else {
                //不到3秒不能够录制
                this.btn1.visible = true;
                this.btn2.visible = false;
                this.btn3.visible = false;
                this.less3Tip();
                RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_IDLE;
            }
            RecordBtn.recordSecond = 0;
        }, _this);
        _this.btn3 = UI.addBtn(_this, "share_btn3_png", 0, 0, true, null);
        _this.btn3.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_IDLE;
            platform.shareRecord();
        }, _this);
        _this.btn1.visible = true;
        _this.btn2.visible = false;
        _this.btn3.visible = false;
        _this.btn1.x = paramX;
        _this.btn1.y = paramY;
        _this.btn2.x = paramX;
        _this.btn2.y = paramY;
        _this.btn3.x = paramX;
        _this.btn3.y = paramY;
        _this.colorbg = UI.addPic(_this, "tipbg_png", 0, UI.WINSIZE_H / 2 - 12, false);
        _this.colorLabel = new egret.TextField();
        _this.colorLabel.textColor = 0xf90000;
        _this.colorLabel.width = 300;
        _this.colorLabel.textAlign = egret.HorizontalAlign.CENTER;
        _this.colorLabel.textAlign = "center";
        _this.colorLabel.text = "不到3秒未能生成分享内容";
        _this.colorLabel.size = 22;
        _this.colorLabel.x = UI.WINSIZE_W / 2 - 150;
        _this.colorLabel.y = UI.WINSIZE_H / 2;
        _this.addChild(_this.colorLabel);
        //
        _this.colorLabel.visible = false;
        _this.colorbg.visible = false;
        //
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.update2, _this);
        _this.showBtn();
        return _this;
    }
    RecordBtn.stopRecord = function () {
        RecordBtn.recordStatus = RecordBtn.RECORD_STATUS_IDLE;
        platform.stopRecord();
    };
    RecordBtn.prototype.showBtn = function () {
        var aaa = RecordBtn.recordStatus;
        if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_IDLE) {
            this.btn1.visible = true;
            this.btn2.visible = false;
            this.btn3.visible = false;
        }
        else if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_ING) {
            this.btn1.visible = false;
            this.btn2.visible = true;
            this.btn3.visible = false;
        }
        else if (RecordBtn.recordStatus == RecordBtn.RECORD_STATUS_END) {
            this.btn1.visible = false;
            this.btn2.visible = false;
            this.btn3.visible = true;
        }
    };
    RecordBtn.prototype.update2 = function () {
        if (this.secondFlag++ % 23 == 0) {
            this.showBtn();
        }
    };
    RecordBtn.prototype.less3Tip = function () {
        this.colorLabel.visible = true;
        this.colorbg.visible = true;
        egret.setTimeout(function (arg) {
            this.colorLabel.visible = false;
            this.colorbg.visible = false;
        }, this, 2000);
    };
    RecordBtn.prototype.onExit = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.update2, this);
    };
    RecordBtn.RECORD_STATUS_IDLE = 0; //没有分享状态
    RecordBtn.RECORD_STATUS_ING = 1; //正在录制状态
    RecordBtn.RECORD_STATUS_END = 2; //等等分享状态
    RecordBtn.recordSecond = 0; //录制的时间
    RecordBtn.recordStatus = 0; //录制的状态
    return RecordBtn;
}(egret.DisplayObjectContainer));
__reflect(RecordBtn.prototype, "RecordBtn");
//# sourceMappingURL=RecordBtn.js.map