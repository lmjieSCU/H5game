var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var battle_end = (function () {
    function battle_end() {
    }
    battle_end.addSprite9916 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, battle_end.frame1, 2, battle_end.frame2, 31, battle_end.frame31, 51, battle_end.frame51, 82, battle_end.frame82, 92, battle_end.frame92, , 112, battle_end.frame112]);
        return;
    };
    battle_end.frame1 = function (mc) {
        mc.stop();
        FightMainRender.getInstance().Add(this, battle_end.onEnterFrame, [mc]);
    };
    battle_end.onEnterFrame = function (mc) {
        if (_level0.timeOver) {
            if (_level0.P1_role.life == _level0.P2_role.life) {
                battle_end.type = "draw";
                mc.resetFrameStop();
            }
            else if (_level0.P1_role.status_2 == "land" && _level0.P1_role.status_3 == "normal" && (_level0.P2_role.status_2 == "land" && _level0.P2_role.status_3 == "normal")) {
                battle_end.type = "win";
                mc.resetFrameStop();
            }
            else if (_level0.P1_role.isKO || _level0.P2_role.isKO) {
                battle_end.type = "win";
                mc.resetFrameStop();
            }
        }
        else if (_level0.winner.status_2 == "land" && _level0.winner.status_3 == "normal") {
            battle_end.type = "win";
            mc.resetFrameStop();
        }
        else if (_level0.P1_role.isKO && _level0.P2_role.isKO) {
            battle_end.type = "draw";
            mc.resetFrameStop();
        }
        else if (_level0.winner.status_1 == "walk_f" || _level0.winner.status_1 == "dash_f") {
            battle_end.type = "win";
            mc.resetFrameStop();
        }
    };
    battle_end.frame2 = function (mc) {
        FightMainRender.getInstance().Remove(this, battle_end.onEnterFrame);
    };
    battle_end.frame31 = function (mc) {
        if (battle_end.type == "win") {
            //_level0.do_win();
        }
        else if (battle_end.type == "draw") {
            //_level0.do_draw();
        }
    };
    battle_end.frame51 = function (mc) {
        if (battle_end.type == "draw") {
            return undefined;
        }
        // if(_level0.winner.mc._currentframe < _level0.winner.mc._totalframes)
        // {
        //     mc.stop();
        //     this.onEnterFrame = function()
        //     {
        //         if(_level0.winner.mc._currentframe == _level0.winner.mc._totalframes)
        //         {
        //             play();
        //             delete this.onEnterFrame;
        //         }
        //     };
        // }
    };
    battle_end.frame82 = function (mc) {
        //_level0.transIn();
    };
    battle_end.frame92 = function (mc) {
        //_level0.nextRound();
    };
    battle_end.frame112 = function (mc) {
        mc.stop();
    };
    return battle_end;
}());
__reflect(battle_end.prototype, "battle_end");
//# sourceMappingURL=battle_end.js.map