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
var HeroList = (function (_super) {
    __extends(HeroList, _super);
    function HeroList(parent, x, y, wid, high, listener, node) {
        if (listener === void 0) { listener = null; }
        if (node === void 0) { node = null; }
        var _this = _super.call(this) || this;
        // private wid: number;
        _this.nowHero = 0;
        _this.nowRender = 0;
        _this.herosData = [
            { id: 'roleK', name: 'K', render: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43] },
            { id: 'roleRyu', name: 'Ryu', render: [1, 36, 37, 38, 39, 40, 41, 42, 43, 44] },
            { id: 'roleChunli', name: 'Chunli', render: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79] },
            { id: 'roleTerry', name: 'Terry', render: [17, 18, 19, 23, 24] },
        ];
        _this.hero = [];
        _this.rank = [1, 1];
        _this.nowPoint = 0;
        _this.max = 3;
        _this.now = 0;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        _this._parent = parent;
        _this.x = x;
        _this.y = y;
        _this.width = wid;
        _this.height = high;
        _this.listener = listener;
        _this.node = node;
        return _this;
    }
    HeroList.prototype.onEnter = function () {
        var _this = this;
        // let rank: egret.Bitmap = UI.addPic(this, `Home_gard${this.rank[0]}_png`, this.width, 40, true);
        // for(let i=1;i<=3;i++) {
        //     let star: egret.Bitmap = UI.addPic(this, `Home_star_${this, this.rank[1] >= i?'on':'off'}_png`, rank.x + (i-2)*10, rank.y + rank.height/2 - (i%2-1)*5 - 8, true);
        // }
        var last = UI.addBtn(this, "Home_" + (Main.UItype == Main.UIT1 ? 'button_arrow' : 'arrow_left') + "_png", 0, this.height / 2, true, function () {
            if (_this.nowHero > 0)
                _this.nowHero--;
            _this.heroScroll.last();
        });
        var next = UI.addBtn(this, "Home_" + (Main.UItype == Main.UIT1 ? 'button_arrow2' : 'arrow_right') + "_png", this.width, this.height / 2, true, function () {
            if (_this.nowHero < _this.herosData.length - 1)
                _this.nowHero++;
            _this.heroScroll.next();
        });
        this.heros = new egret.DisplayObjectContainer();
        this.heros.height = this.height;
        this.herosData.map(function (data, index) {
            var hero = [];
            var heroDisplayObject = new egret.DisplayObjectContainer();
            heroDisplayObject.x = _this.width / 2 + 200 * (index);
            data.render.map(function (d, j) {
                var i = UI.addJsonPic(heroDisplayObject, "stand_json", data.id + "_i_" + d, 0, 0, true);
                i.y = _this.heros.height;
                i.anchorOffsetY = i.height;
                hero.push(i);
                if (j != 0)
                    i.$setVisible(false);
            });
            _this.heros.addChild(heroDisplayObject);
            _this.hero.push(hero);
            // i.x += i.width/2;
        });
        this.heros.width += 200;
        this.addChild(this.heros);
        this.heroScroll = new ScrollView(this.heros, this.width, this.heros.height, 0, 0, 0.2, this.width / 100, true, false, this, function (nowChild) {
            _this.nowRender = 0;
            Home.instace.nowHero = nowChild;
            if (_this.listener) {
                if (_this.node) {
                    _this.listener.call(_this.node, nowChild);
                }
                else {
                    _this.listener.call(_this, nowChild);
                }
            }
        }, true, true);
        if (Main.UItype == Main.UIT1) {
            var heroStage = UI.addPic(this, "stage_png", this.heroScroll.x + this.heroScroll.width / 2, this.heroScroll.height / 4 * 3, true);
            heroStage.anchorOffsetY = 0;
            this.addChild(this.heroScroll);
            var recruitBg = UI.addPic(this, "Home_button_inhadow_png", last.x, last.y + 20, true);
            recruitBg.y += recruitBg.height / 2;
            var recruit = UI.addBtn(this, "Home_button_recruit_png", recruitBg.x, recruitBg.y, true, function () {
                console.log("招募");
                Home.instace.changeLayer(_this._parent, new RecruitLayer());
            });
            var recruitRed = UI.addPic(this, "Home_red_png", recruit.x + recruit.width / 4, recruit.y - recruit.height / 3, true);
            recruitRed.$setVisible(RecruitData.isHasRecruit());
            var inheriBg = UI.addPic(this, "Home_button_inhadow_png", next.x, recruitBg.y, true);
            var inheri = UI.addBtn(this, "Home_button_inherit_png", inheriBg.x, inheriBg.y, true, function () {
                console.log("传承");
            });
            var tili = UI.addPic(this, "Home_tili_png", heroStage.x, heroStage.y + heroStage.height * 0.9, true);
            // tili.y += tili.height/2;
            var addTili = UI.addBtn(this, "Home_button_AD_png", tili.x, tili.y + tili.height / 2 + 5, true, function () {
                console.log("添加体力");
            });
            addTili.y += addTili.height / 2;
        }
        else if (Main.UItype == Main.UIT2) {
            var heroStage = UI.addPic(this, "stage_png", this.heroScroll.x + this.heroScroll.width / 2, this.heroScroll.height / 4 * 3, true);
            heroStage.anchorOffsetY = 0;
            heroStage.y += 50;
            this.heroScroll.y += 20;
            this.addChild(this.heroScroll);
            this.heroScroll.changePosition(Home.instace.nowHero, 0);
            var tili = UI.addPic(this, "Home_box_pilao_png", heroStage.x, heroStage.y + heroStage.height * 0.9, true);
            // tili.y += tili.height/2;
            var addTili = UI.addBtn(this, "Home_button_supplement_png", tili.x, tili.y + tili.height / 2 + 5, true, function () {
                console.log("添加体力");
            });
            addTili.y += addTili.height / 2;
        }
        GameRender.I.Add(this, this.update);
    };
    HeroList.prototype.onExit = function () {
        GameRender.I.Remove(this, this.update);
    };
    HeroList.prototype.update = function () {
        if (this.now >= this.max && this.heros) {
            this.nowHero = this.heroScroll.getChildNow();
            var hero = this.herosData[this.nowHero];
            this.hero[this.nowHero].map(function (data, index) {
                data.$setVisible(false);
            });
            this.nowRender++;
            if (this.nowRender >= this.hero[this.nowHero].length)
                this.nowRender = 0;
            this.hero[this.nowHero][this.nowRender].$setVisible(true);
            this.now = -1;
        }
        this.now++;
    };
    HeroList.prototype.getHeroName = function () {
        return this.herosData[this.heroScroll.getChildNow()].name;
    };
    return HeroList;
}(egret.DisplayObjectContainer));
__reflect(HeroList.prototype, "HeroList", ["egret.DisplayObject"]);
//# sourceMappingURL=HeroList.js.map