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
var InHeritLayer = (function (_super) {
    __extends(InHeritLayer, _super);
    function InHeritLayer() {
        var _this = _super.call(this) || this;
        _this.skillId = [];
        _this.skillScroll = [];
        return _this;
    }
    InHeritLayer.prototype.onEnter = function () {
        var _this = this;
        var backBg = UI.addPic(this, "Personal_head_png", 0, 0);
        var back = UI.addBtn(this, "Button_back_png", 0, 0, false, function () {
            Home.instace.changeLayer(_this, new HomeLayer());
        });
        // this.heroIds = HeroData.getHeroList();
        this.heroIds = [2006, 2007, 2008, 2009];
        this.heroIds.map(function () {
            _this.skillId.push(0);
        });
        // this.highSkillFragment = PropData.getPorp(1005);
        // this.ancientSkillFragment = PropData.getPorp(1006);
        this.highSkillFragment = 100;
        this.ancientSkillFragment = 4;
        this.heroListLeft = new HeroLsitLeft(function (index) {
            _this.heroList.heroScroll.changePosition(index);
        }, this);
        this.addChild(this.heroListLeft);
        this.heroList = new HeroList(this, UI.WINSIZE_W / 8 + 20, UI.WINSIZE_H * 0.2, 200, UI.WINSIZE_H * 0.5, function (nowChild) {
            _this.heroListLeft.scrollView.changePosition(nowChild);
            _this.heroIndex = nowChild;
            if (_this.skillScroll.length > 0) {
                _this.skillScroll.map(function (data, index) {
                    if (index == nowChild) {
                        data.$setVisible(true);
                        data.changePosition(_this.skillId[_this.heroIndex]);
                    }
                    else
                        data.$setVisible(false);
                });
            }
        }, this);
        this.addChild(this.heroList);
        this.heroList.heroScroll.changePosition(Home.instace.nowHero, 0);
        this.createInHerit();
    };
    InHeritLayer.prototype.createInHerit = function () {
        var _this = this;
        this.inHerit = new egret.DisplayObjectContainer();
        this.addChild(this.inHerit);
        var bg = UI.addPic(this.inHerit, "Personal_holebox_bg_png", 0, 0);
        this.inHerit.width = bg.width;
        this.inHerit.height = bg.height;
        this.inHerit.x = UI.WINSIZE_W - 25 - this.inHerit.width;
        this.inHerit.y = this.heroList.y + this.heroList.height / 2 - this.inHerit.height / 2;
        var lvData = PlayerData.setPlayerLv();
        // this.lv = lvData.lv;
        // this.exp = lvData.exp;
        this.lv = 5;
        this.exp = 700;
        var progressBg = UI.addPic(this.inHerit, "Personal_loading_bg_png", this.inHerit.width / 2, 35, true);
        var progress = UI.addPic(this.inHerit, "Personal_progress_png", progressBg.x, progressBg.y, true);
        var progressMask = UI.addPic(this.inHerit, "Personal_loading_bg_png", progressBg.x - progressBg.width / 2, progressBg.y - progressBg.height / 2);
        progress.mask = progressMask;
        progressMask.scaleX = this.exp / PlayerData.playerLv[this.lv - 1].exp;
        // progressMask.scaleX = 0.5;
        var lvBg = UI.addPic(this.inHerit, "Personal_levelbox_png", progressMask.x, progressBg.y, true);
        var lv = this.createLv(this.lv);
        this.inHerit.addChild(lv);
        lv.x = lvBg.x;
        lv.y = lvBg.y;
        var expBg = UI.addPic(this.inHerit, "Personal_word_exp_png", progressBg.x + progressBg.width / 2 + 10, progressBg.y, true);
        expBg.x += expBg.width / 2;
        var training = UI.addBtn(this.inHerit, "Personal_button_training_png", this.inHerit.width - 10, this.inHerit.height - 10, false, function () { });
        training.anchorOffsetX = training.width;
        training.anchorOffsetY = training.height;
        this.heroIndex = 0;
        this.heroIds.map(function (data) {
            _this.createSkillScroll(data, _this.inHerit.width / 4, 75, _this.inHerit.width / 2);
        });
        this.skillScroll.map(function (data, index) {
            if (index != 0)
                data.$setVisible(false);
        });
        var last = UI.addBtn(this.inHerit, "Personal_pic_arrow_png", this.skillScroll[0].x, this.skillScroll[0].y + this.skillScroll[0].height / 2, true, function () {
            _this.skillScroll[_this.heroIndex].last();
        });
        last.skewY = 180;
        var next = UI.addBtn(this.inHerit, "Personal_pic_arrow_png", last.x + this.skillScroll[0].width, last.y, true, function () {
            _this.skillScroll[_this.heroIndex].next();
        });
        last.x -= last.width;
        next.x += next.width;
        this.createAddSkill();
        this.skillScroll[0].changePosition(0);
    };
    InHeritLayer.prototype.onExit = function () { };
    InHeritLayer.prototype.createLv = function (lv) {
        var lvDisplay = new egret.DisplayObjectContainer();
        if (lv >= 10) {
            var ten = UI.addPic(lvDisplay, "Personal_word_" + Math.floor(lv / 10) + "_png", 0, 0);
            var one = UI.addPic(lvDisplay, "Personal_word_" + lv % 10 + "_png", 0, 0);
            one.x = ten.width;
        }
        else
            UI.addPic(lvDisplay, "Personal_word_" + lv + "_png", 0, 0);
        lvDisplay.anchorOffsetX = lvDisplay.width / 2;
        lvDisplay.anchorOffsetY = lvDisplay.height / 2;
        return lvDisplay;
    };
    InHeritLayer.prototype.createSkillScroll = function (heroId, x, y, width) {
        var _this = this;
        // const skillList: SkillList = HeroData.getHeroSkillList(heroId);
        var skillList = HeroData.initSkillList;
        var skillContent = new egret.DisplayObjectContainer();
        for (var i = 1; i <= 12; i++) {
            var skill = new egret.DisplayObjectContainer();
            var choose = UI.addPic(skill, "Personal_mask_Select_png", 0, 0);
            var img = UI.addPic(skill, "Personal_box_mask_png", choose.width / 2, choose.height / 2, true);
            skill.height = choose.height;
            skill.width = choose.width;
            skill.anchorOffsetX = skill.width / 2;
            skill.anchorOffsetY = skill.height / 2;
            skill.x = (i + 1) * (skill.width + 15);
            skill.y = skill.height / 2;
            skillContent.addChild(skill);
            choose.$setVisible(false);
        }
        skillContent.width += skillContent.width / 2;
        var scroll = new ScrollView(skillContent, width, skillContent.height, x, y, 1, 1, true, false, this, function () {
            for (var i = 0; i < skillContent.numChildren; i++) {
                var content = skillContent.getChildAt(i);
                var target = content.getChildAt(0);
                if (i == scroll.getChildNow()) {
                    target.$setVisible(true);
                    _this.skillId[_this.heroIndex] = i + 1;
                }
                else
                    target.$setVisible(false);
            }
            _this.changeSkill(); //
        }, false, true, true, 0.7);
        this.inHerit.addChild(scroll);
        this.skillScroll.push(scroll);
    };
    InHeritLayer.prototype.createAddSkill = function () {
        var _this = this;
        this.skillAdd = new egret.DisplayObjectContainer();
        this.inHerit.addChild(this.skillAdd);
        var bg = UI.addPic(this.skillAdd, "Personal_box_skillbg_png", this.skillScroll[0].x + this.skillScroll[0].width / 2, this.skillScroll[0].y + this.skillScroll[0].height, true);
        bg.y += 10;
        var progress = UI.addPic(this.skillAdd, "Personal_mask_skillbg_png", bg.x, bg.y, true);
        this.skillMask = UI.addPic(this.skillAdd, "Personal_box_skillbg_png", bg.x - bg.width / 2, bg.y - bg.height / 2);
        progress.mask = this.skillMask;
        var skillWord = UI.addPic(this.skillAdd, "Personal_box_skillword_png", bg.x - bg.width / 2, bg.y, true);
        skillWord.x += skillWord.width / 4 * 3;
        this.createPorogress(2, 10, this.skillAdd);
        // this.skillAdd.addChild(this.progressText);
        this.progressText.x = skillWord.x + skillWord.width;
        this.progressText.y = skillWord.y;
        this.addSkill = UI.addBtn(this.skillAdd, "Personal_button_lock_png", bg.x, bg.y + bg.height / 2, true, function () { return _this.composeSkill(); });
        this.addSkill.y += this.addSkill.height;
    };
    InHeritLayer.prototype.createPorogress = function (count, all, _parent) {
        var _this = this;
        var progress = [];
        var pointX = 0;
        var pointY = 0;
        if (this.progressText) {
            pointX = this.progressText.x;
            pointY = this.progressText.y;
            this.progressText.removeChildren();
            this.progressText = null;
        }
        this.progressText = new egret.DisplayObjectContainer();
        if (count == 0)
            progress.push(0);
        else {
            while (count > 0) {
                var mod = count % 10;
                progress.unshift(mod);
                count = (count - mod) / 10;
            }
        }
        var progress2 = [];
        if (all == 0)
            progress2.push(0);
        else {
            while (all > 0) {
                var mod = all % 10;
                progress2.unshift(mod);
                all = (all - mod) / 10;
            }
        }
        progress.map(function (data) {
            var num = UI.addPic(_this.progressText, "loading" + data + "_png", _this.progressText.width, 0);
        });
        UI.addText(this.progressText, "/", this.progressText.width, 0, false, this.progressText.height + 5, 0xffffff);
        progress2.map(function (data) {
            UI.addPic(_this.progressText, "loading" + data + "_png", _this.progressText.width, 0);
        });
        this.progressText.x = pointX;
        this.progressText.y = pointY;
        this.progressText.anchorOffsetY = this.progressText.height / 2;
        _parent.addChild(this.progressText);
    };
    InHeritLayer.prototype.changeSkill = function () {
        this.heroId = this.heroIds[this.heroIndex];
        var skillId = this.skillId[this.heroIndex];
        // const skillList: SkillList = HeroData.getHeroSkillList(this.heroId);
        var skillList = HeroData.initSkillList;
        if (skillList["skill" + skillId]) {
            this.skillAdd.$setVisible(false);
        }
        else {
            this.skillAdd.$setVisible(true);
            var all = skillId >= 9 ? 5 : 50;
            var count = skillId >= 9 ? this.ancientSkillFragment : this.highSkillFragment;
            this.createPorogress(count, all, this.skillAdd);
            this.skillMask.scaleX = count / all;
            this.addSkill.touchEnabled = count >= all;
            this.addSkill.$setTexture(RES.getRes("Personal_button_" + (count >= all ? 'Un' : '') + "lock_png"));
        }
    };
    InHeritLayer.prototype.composeSkill = function () {
        this.heroId = this.heroIds[this.heroIndex];
        var skillId = this.skillId[this.heroIndex];
        HeroData.setHeroSkill(this.heroId, skillId);
        var use = skillId >= 9 ? 5 : 50;
        var useId = skillId >= 9 ? 1006 : 1005;
        // PropData.setProp(useId, -use);
        skillId >= 9 ? this.ancientSkillFragment -= 5 : this.highSkillFragment -= 50;
        this.changeSkill();
    };
    return InHeritLayer;
}(Scene));
__reflect(InHeritLayer.prototype, "InHeritLayer");
//# sourceMappingURL=InHeritLayer.js.map