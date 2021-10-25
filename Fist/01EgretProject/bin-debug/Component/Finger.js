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
var Finger = (function (_super) {
    __extends(Finger, _super);
    //x坐标，y坐标，点击抬起频率。放缩倍数
    function Finger(x, y, setfrequency, scale) {
        if (setfrequency === void 0) { setfrequency = 4; }
        if (scale === void 0) { scale = 1; }
        var _this = _super.call(this) || this;
        _this.frequency = 0; //点击频率
        _this.lift_frequency = 0; //抬起频率
        //设置基本参数
        // this.width=80;
        // this.height=100;
        _this.show();
        _this.x = x;
        _this.y = y;
        _this.setfrequency = setfrequency * 2;
        _this.scaleX = scale;
        _this.scaleY = scale;
        //添加显示和移除显示时候调用的事件
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    //添加图片元素
    Finger.prototype.show = function () {
        //    this.hand2=UI.addPic(this,"circle_hand_png",0,0)
        //    this.hand2.alpha=0;
        //    this.circle=UI.addPic(this,"circle_hand_png",0,135,true)
        //    this.circle.x=this.circle.width/4;
        //    this.hand=UI.addPic(this,"circle_hand_png",0,0)
        //    this.hand.alpha=0;
        //    this.$anchorOffsetX=this.circle.x;
        //    this.$anchorOffsetY=this.circle.y;
        // this.circle.parent.removeChild(this.circle);
    };
    Finger.prototype.onEnter = function () {
        this.timer = egret.setInterval(this.next, this, 1000 / 30);
    };
    Finger.prototype.onExit = function () {
        egret.clearInterval(this.timer);
    };
    //实现点击效果动画
    Finger.prototype.next = function () {
        if (this.frequency <= 0) {
            this.frequency = this.setfrequency;
            var circle_1 = this.addPic(this, "circle_hand_png", 0, 0, true, 0);
            circle_1.scaleX = 0;
            circle_1.scaleY = 0;
            egret.Tween.get(circle_1, { loop: false }).to({
                scaleX: 0.6, scaleY: 0.6
            }, 400).call(function () { }).to({
                scaleX: 1, scaleY: 1, alpha: 0
            }, 200).call(function () {
                if (circle_1.parent) {
                    circle_1.parent.removeChild(circle_1);
                }
            });
        }
        else {
            this.frequency--;
        }
        // if(this.frequency<=0){
        //     this.hand2.alpha=0;
        //     this.hand.alpha=1;
        //     let circle=this.addPic(this,"circle_hand_png",0,this.hand2.height,true,0)
        //     circle.x=this.circle.width/4;
        //     circle.scaleX=0;
        //     circle.scaleY=0;
        //     egret.Tween.get(circle,{loop:false}).to({
        //         scaleX:0.6, scaleY:0.6
        //     },400).call(()=>{}).to({
        //         scaleX:1, scaleY:1,alpha:0
        //     },200).call(()=>{
        //         if(circle.parent){
        //             circle.parent.removeChild(circle);
        //         }
        //     })
        //     this.frequency=this.setfrequency;
        //     this.lift_frequency=this.setfrequency;
        // }else if(this.lift_frequency<=0){
        //     this.hand2.alpha=1;
        //     this.hand.alpha=0;
        //     this.frequency--;
        // }else{
        //     this.lift_frequency--;
        // }
        // this.hand2.alpha=0;
        // this.hand.alpha=0;
    };
    //增加图片
    Finger.prototype.addPic = function (node, path, x, y, anchorCenterFlag, at) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (at === void 0) { at = 1; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        node.addChildAt(image, at);
        image.x = x;
        image.y = y;
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        return image;
    };
    return Finger;
}(egret.DisplayObjectContainer));
__reflect(Finger.prototype, "Finger");
//# sourceMappingURL=Finger.js.map