var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameRunFighterGroup = (function () {
    function GameRunFighterGroup() {
        return;
    } // end function
    GameRunFighterGroup.prototype.getNextFighter = function () {
        var _loc1_ = this.currentFighter;
        if (this.fighter1 !== _loc1_) {
            if (this.fighter2 !== _loc1_) {
                return null;
            }
            return this.fighter3;
        }
        return this.fighter2;
    }; // end function
    GameRunFighterGroup.prototype.destoryFighters = function (param1) {
        if (this.fighter1 && this.fighter1 != param1) {
            this.disposeFighter(this.fighter1);
        }
        if (this.fighter2 && this.fighter2 != param1) {
            this.disposeFighter(this.fighter2);
        }
        if (this.fighter3 && this.fighter3 != param1) {
            this.disposeFighter(this.fighter3);
        }
        this.disposeFuzhu();
        return;
    }; // end function
    GameRunFighterGroup.prototype.removeCurrentFighter = function () {
        this.disposeFighter(this.currentFighter);
        return;
    }; // end function
    GameRunFighterGroup.prototype.disposeFighter = function (param1) {
        if (param1 == null) {
            return;
        }
        if (param1 == this.currentFighter) {
            this.currentFighter = null;
        }
        param1.destory(true);
        var _loc2_ = param1;
        if (this.fighter1 !== _loc2_) {
            if (this.fighter2 !== _loc2_) {
                if (this.fighter3 === _loc2_) {
                    this.fighter3 = null;
                }
            }
            else {
                this.fighter2 = null;
            }
            return;
        }
        this.fighter1 = null;
    }; // end function
    GameRunFighterGroup.prototype.disposeFuzhu = function () {
        if (this.fuzhu != null) {
            this.fuzhu.destory(true);
            this.fuzhu = null;
        }
        return;
    }; // end function
    return GameRunFighterGroup;
}());
__reflect(GameRunFighterGroup.prototype, "GameRunFighterGroup");
//# sourceMappingURL=GameRunFighterGroup.js.map