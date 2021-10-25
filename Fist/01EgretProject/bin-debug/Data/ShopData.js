var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ShopData = (function () {
    function ShopData() {
    }
    /**
     * @param shopDate 商店刷新的时间
     * @param shopSkillId 商店售卖技能Id
     * @param shopList+num 当前是否能售卖1为能，0为不能
     */
    ShopData.getHeroRandom = function () {
        var heroList = PropData.getHeroList();
        var index = Math.floor(Math.random() * heroList.length);
        return heroList[index];
    };
    ShopData.getSkillList = function (flush) {
        if (flush === void 0) { flush = false; }
        var heroId;
        if (this.isFlush() || flush) {
            var heroId_1 = this.getHeroRandom().id;
            var date = new Date();
            egret.localStorage.setItem("shopDate", new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).toString());
            egret.localStorage.setItem("shopSkillId", heroId_1.toString());
            for (var i = 1; i <= 6; i++) {
                egret.localStorage.setItem("shopList" + i, '1');
            }
        }
        else {
            heroId = Number(egret.localStorage.getItem("shopSkillId"));
        }
        var name = PropData.getPropInfo(heroId);
        var info = [];
        for (var i = 1; i <= 6; i++) {
            info.push({ shopId: heroId, shopNum: 1, shopInfo: name + "\u7684\u7B2C" + i + "\u6280\u80FD", payId: 1001, payNum: 10000, isShoping: Number(egret.localStorage.getItem("shopList" + i)) == 1 });
        }
        return info;
    };
    ShopData.isFlush = function () {
        var date = new Date();
        var lastDate = egret.localStorage.getItem("shopDate");
        if (Home.instace.getTimeSecond(Date.parse(date.toString()), Date.parse(lastDate)) >= 24 * 60 * 60)
            return true;
        return false;
    };
    ShopData.cancelShop = function (id) {
        egret.localStorage.setItem("shopList" + id, '0');
    };
    ShopData.isFlushTime = function () {
        var lastDate = egret.localStorage.getItem("shopDate");
        var date = new Date();
        var flush = false;
        if (Home.instace.getTimeSecond(Date.parse(date.toString()), Date.parse(lastDate)) >= 24 * 60 * 60)
            return true;
        this.timeShopLength.map(function (data, index) {
            var timeDate = egret.localStorage.getItem("shopTimeStart");
            if (!timeDate || (Number(timeDate) == data.start && new Date().getHours() > data.end))
                flush = true;
        });
        if (flush)
            for (var i = 7; i <= 9; i++) {
                egret.localStorage.setItem("shopList" + i, '1');
            }
    };
    ShopData.getTimeShop = function () {
        var _this = this;
        this.isFlushTime();
        var hour = new Date().getHours();
        var isOpen = false;
        this.timeShopLength.map(function (data, index) {
            if (hour >= data.start && hour <= data.end) {
                egret.localStorage.setItem("shopTimeStart", data.start.toString());
                isOpen = true;
            }
            ;
        });
        if (!isOpen)
            return null;
        this.timeShop.map(function (data, index) {
            _this.timeShop[index].isShoping = Number(egret.localStorage.getItem("shopList" + (index + 7))) == 1;
        });
        return this.timeShop;
    };
    ShopData.timeShopLength = [
        { start: 8, end: 11 },
        { start: 13, end: 15 },
        { start: 19, end: 21 }
    ];
    ShopData.timeShop = [
        { shopId: 2000, shopNum: 1, shopInfo: '', payId: 1001, payNum: 30000, isShoping: true },
        { shopId: 1002, shopNum: 1, shopInfo: '', payId: 1001, payNum: 2000, isShoping: true },
        { shopId: 4000, shopNum: 1, shopInfo: '', payId: 1001, payNum: 30000, isShoping: true },
    ];
    return ShopData;
}());
__reflect(ShopData.prototype, "ShopData");
//# sourceMappingURL=ShopData.js.map