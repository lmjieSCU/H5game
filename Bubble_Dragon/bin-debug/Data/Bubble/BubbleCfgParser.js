var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BubbleCfgParser = (function () {
    function BubbleCfgParser() {
        this._map = new Dicts();
        return;
    }
    BubbleCfgParser.prototype.setUp = function (arg1) {
        return;
    };
    BubbleCfgParser.prototype.getBubbleCfg = function (arg1) {
        if (this._map.size == 0) {
            for (var loc2 in BubbleList.list) {
                var bubble = BubbleList.list[loc2];
                var loc3 = new BubbleCfg(bubble);
                this._map.put(bubble.id, loc3);
            }
        }
        return this._map.take(arg1);
    };
    BubbleCfgParser.prototype.randomBubbleColor = function () {
        if (this._map.size == 0) {
            for (var loc2_1 in BubbleList.list) {
                var bubble = BubbleList.list[loc2_1];
                var loc3_1 = new BubbleCfg(bubble);
                this._map.put(bubble.id, loc3_1);
            }
        }
        var loc2 = null;
        var color = this.getRandomNumList([1, 2, 3, 4, 5, 6, 7], 7);
        var loc3 = 0;
        for (var loc1 in this._map._dict) {
            loc2 = this._map._dict[loc1];
            if (loc2.colorType >= 1 && loc2.colorType <= 7) {
                loc2.tempId = color[(loc2.colorType - 1)];
                loc2.resBottom = "Bubble_" + color[(loc2.colorType - 1)];
                continue;
            }
            loc2.tempId = loc2.id;
        }
        return;
    };
    BubbleCfgParser.prototype.getRandomNumList = function (list, num) {
        var ans = [];
        while (list.length > 0) {
            var index = Math.floor(Math.random() * list.length);
            ans.push(list[index]);
            list.splice(index, 1);
        }
        return ans;
    };
    BubbleCfgParser.prototype.getBubbleCfgByType = function (arg1, arg2) {
        if (this._map.size == 0) {
            for (var loc2 in BubbleList.list) {
                var bubble = BubbleList.list[loc2];
                var loc3 = new BubbleCfg(bubble);
                this._map.put(bubble.id, loc3);
            }
        }
        var loc1 = null;
        for (var loc in this._map._dict) {
            loc1 = this._map._dict[loc];
            if (!(loc1.colorType == arg1 && loc1.effectType == loc1.effectType)) {
                continue;
            }
            return loc1;
        }
        return null;
    };
    return BubbleCfgParser;
}());
__reflect(BubbleCfgParser.prototype, "BubbleCfgParser", ["IJsonConfig"]);
//# sourceMappingURL=BubbleCfgParser.js.map