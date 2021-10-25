var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GuideConfig = (function () {
    function GuideConfig() {
        this.dict = new Dicts();
        return;
    }
    GuideConfig.prototype.getGuideList = function (arg1) {
        if (this.dict.contains(arg1)) {
            return this.dict.take(arg1);
        }
        for (var level = 1; level < 6; level++) {
            var data = new GuideVO();
            switch (level) {
                case 1:
                    {
                        data.content = ["交换红色和绿色的\n糖果,让三个相同\n的糖果连在一起\n消除它们", "交换黄色和紫色\n的糖果", "收集目标数量的糖果\n就能通过这个关卡"];
                        data.p1 = [];
                        data.p2 = [];
                        data.p1.push(new egret.Point(2, 1));
                        data.p2.push(new egret.Point(2, 2));
                        data.p1.push(new egret.Point(2, 6));
                        data.p2.push(new egret.Point(2, 7));
                        data.p1.push(null);
                        data.p2.push(null);
                        data.aimPoints = [[new egret.Point(2, 1), new egret.Point(2, 2), new egret.Point(2, 3), new egret.Point(2, 4)],
                            [new egret.Point(2, 6), new egret.Point(2, 7), new egret.Point(3, 6), new egret.Point(4, 6)],
                            []];
                        data.x = [0.52, 0.44, 0.50];
                        data.y = [0.3, 0.3, 0.3];
                        data.totalStep = 3;
                        this.dict.put(level, data);
                        break;
                    }
                case 2:
                    {
                        data.content = ["试试让四个相同的\n糖果连在一起吧！"];
                        data.p1 = [];
                        data.p2 = [];
                        data.x = [0.5];
                        data.y = [0.5];
                        data.p1.push(new egret.Point(5, 5));
                        data.p2.push(new egret.Point(6, 5));
                        data.aimPoints = [[new egret.Point(6, 3), new egret.Point(6, 4), new egret.Point(6, 5), new egret.Point(6, 6), new egret.Point(5, 5)]];
                        data.totalStep = 1;
                        this.dict.put(level, data);
                        break;
                    }
                case 3:
                    {
                        data.content = ["T型或者L型的可以\n生成一个炸弹\n试试吧!"];
                        data.p1 = [];
                        data.p2 = [];
                        data.x = [0.5];
                        data.y = [0.32];
                        data.p1.push(new egret.Point(2, 4));
                        data.p2.push(new egret.Point(3, 4));
                        data.aimPoints = [[new egret.Point(2, 4), new egret.Point(3, 2), new egret.Point(3, 3), new egret.Point(3, 4), new egret.Point(4, 4), new egret.Point(5, 4)]];
                        data.totalStep = 1;
                        this.dict.put(level, data);
                        break;
                    }
                case 4:
                    {
                        data.content = ["5个相同颜色的糖果\n连在一起可以形成\n超级糖果，试试吧!"];
                        data.p1 = [];
                        data.p2 = [];
                        data.x = [0.5];
                        data.y = [0.55];
                        data.p1.push(new egret.Point(6, 4));
                        data.p2.push(new egret.Point(7, 4));
                        data.aimPoints = [[new egret.Point(6, 4), new egret.Point(7, 2), new egret.Point(7, 3), new egret.Point(7, 4), new egret.Point(7, 5), new egret.Point(7, 6)]];
                        data.totalStep = 1;
                        this.dict.put(level, data);
                        break;
                    }
                case 5:
                    {
                        data.content = ["特殊状态的糖果互\n相交换能产生特殊的\n效果哦，试试吧!"];
                        data.p1 = [];
                        data.p2 = [];
                        data.x = [0.36];
                        data.y = [0.22];
                        data.p1.push(new egret.Point(1, 1));
                        data.p2.push(new egret.Point(1, 2));
                        data.aimPoints = [[new egret.Point(1, 1), new egret.Point(1, 2)]];
                        data.totalStep = 1;
                        this.dict.put(level, data);
                        break;
                    }
            }
        }
        return this.dict.take(arg1);
    };
    return GuideConfig;
}());
__reflect(GuideConfig.prototype, "GuideConfig");
//# sourceMappingURL=GuideConfig.js.map