/*
*战斗事件处理类
*"addAttacker"事件：增加子动画,如sasuke_xz.bs
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterEventCtrl = (function () {
    function FighterEventCtrl() {
        this._attackers = [];
        FighterEventCtrl.instance = this;
        return;
    } // end function
    FighterEventCtrl.prototype.initlize = function () {
        FighterEventDispatcher.removeAllListeners();
        FighterEventDispatcher.addEventListener("FIRE_BULLET", this.fireBullet);
        FighterEventDispatcher.addEventListener("ADD_ATTACKER", this.addAttacker);
        FighterEventDispatcher.addEventListener("ADD_ASSISTER", this.addAssister);
        FighterEventDispatcher.addEventListener("HIT_TARGET", this.onHitTarget);
        FighterEventDispatcher.addEventListener("HURT_RESUME", this.onHurtResume);
        FighterEventDispatcher.addEventListener("HURT_DOWN", this.onHurtDown);
        FighterEventDispatcher.addEventListener("DIE", this.onDie);
        return;
    }; // end function
    FighterEventCtrl.prototype.destory = function () {
        FighterEventDispatcher.removeAllListeners();
        return;
    }; // end function
    FighterEventCtrl.prototype.fireBullet = function (event) {
        var _loc_2 = event.params;
        if (!_loc_2 || !_loc_2.mc) {
            return;
        }
        _loc_2.mc.unControlerFlag = true;
        var bullet = new Bullet(_loc_2.mc, _loc_2);
        bullet.onRemove = FighterEventCtrl.instance.removeBullet;
        bullet.setHitVO(_loc_2.hitVO);
        GameCtrl.I.addGameSprite(event.fighter.team.id, bullet);
        return;
    }; // end function
    FighterEventCtrl.prototype.removeBullet = function (param1) {
        param1.mc.unControlerFlag = false;
        GameCtrl.I.removeGameSprite(param1);
        return;
    }; // end function
    //增加子动画
    FighterEventCtrl.prototype.addAttacker = function (event) {
        var _loc_3 = event.params;
        if (!_loc_3 || !_loc_3.mc) {
            return;
        }
        var attacker = null;
        attacker = new FighterAttacker(_loc_3.mc, _loc_3);
        _loc_3.mc.unControlerFlag = true; //使得子动画不受父动画的控制,能够自行removeself
        attacker.onRemove = FighterEventCtrl.instance.removeAttacker;
        attacker.setOwner(event.fighter);
        attacker.init();
        FighterEventCtrl.instance._attackers.push(attacker);
        GameCtrl.I.addGameSprite(event.fighter.team.id, attacker);
        return;
    }; // end function
    FighterEventCtrl.prototype.addAssister = function (event) {
        //
        var _loc_4 = event.fighter;
        var _loc_3 = (_loc_4).team.id == 1 ? (GameCtrl.I.gameRunData.p1FighterGroup) : (GameCtrl.I.gameRunData.p2FighterGroup);
        var _loc_2 = _loc_3.fuzhu;
        _loc_2.setOwner(_loc_4);
        _loc_2.direct = _loc_4.direct;
        _loc_2.x = _loc_4.x - 30 * _loc_2.direct;
        _loc_2.y = _loc_4.y;
        _loc_2.onRemove = FighterEventCtrl.instance.removeAssister;
        GameCtrl.I.addGameSprite(event.fighter.team.id, _loc_2);
        EffectCtrl.I.assisterEffect(_loc_2); //be returned
        _loc_2.goFight();
        return;
    }; // end function
    FighterEventCtrl.prototype.removeAssister = function (param1) {
        GameCtrl.I.removeGameSprite(param1);
        return;
    }; // end function
    FighterEventCtrl.prototype.removeAttacker = function (param1) {
        param1.mc.unControlerFlag = false;
        GameCtrl.I.removeGameSprite(param1);
        var _loc_2 = FighterEventCtrl.instance._attackers.indexOf(param1);
        if (_loc_2 != -1) {
            FighterEventCtrl.instance._attackers.splice(_loc_2, 1);
        }
        return;
    }; // end function
    //param1 = mcName,param2 = team.id ,param3 = hashCode
    //param3 = -1 时表示不检查zmoive.ZmoiveClip的hashCode
    FighterEventCtrl.prototype.getAttacker = function (param1, param2, param3) {
        for (var _loc_3 in FighterEventCtrl.instance._attackers) {
            if (FighterEventCtrl.instance._attackers[_loc_3].name == param1 && FighterEventCtrl.instance._attackers[_loc_3].team.id == param2) {
                if (param3 != -1) {
                    if (FighterEventCtrl.instance._attackers[_loc_3].mc.hashCode == param3) {
                        return FighterEventCtrl.instance._attackers[_loc_3];
                    }
                }
                else {
                    return FighterEventCtrl.instance._attackers[_loc_3];
                }
            }
        }
        return null;
    }; // end function
    //打击到对方
    FighterEventCtrl.prototype.onHitTarget = function (param1) {
        FighterEventCtrl.instance.addHits(param1.fighter, param1.params.target); //FighterEvent.fighter打击到FighterEvent.params.target
        if (GameMode.isAcrade() && param1.fighter.team.id == 1) {
            GameLogic.addScoreByHitTarget(param1.params.hitvo);
        }
        return;
    }; // end function
    FighterEventCtrl.prototype.onHurtResume = function (event) {
        FighterEventCtrl.instance.removeHits(event.fighter.id);
        return;
    }; // end function
    FighterEventCtrl.prototype.onHurtDown = function (event) {
        FighterEventCtrl.instance.removeHits(event.fighter.id);
        return;
    }; // end function
    FighterEventCtrl.prototype.addHits = function (param1, param2) {
        var _loc5_ = param2 && param2 instanceof BaseGameSprite ? param2.id : null;
        var _loc4_ = 1; //UIid,_loc4_ = param1.team.id
        switch (Number(param1.team.id) - 1) {
            case 0:
                _loc4_ = 1;
                break;
            case 1:
                _loc4_ = 2;
        }
        var _loc3_ = GameLogic.addHits(param1.id, _loc5_, _loc4_); //_loc3_为hits,打击次数
        if (_loc3_ > 1) {
            GameUI.I.getUI().showHits(_loc3_, _loc4_);
        }
        return;
    }; // end function
    FighterEventCtrl.prototype.removeHits = function (param1) {
        var _loc_2 = GameLogic.getHitsObjByTargetId(param1);
        // console.log(_loc_2)
        if (_loc_2) {
            GameUI.I.getUI().hideHits(_loc_2.uiID);
        }
        GameLogic.clearHitsByTargetId(param1);
        return;
    }; // end function
    FighterEventCtrl.prototype.onDie = function (param1) {
        //屏蔽
        if (GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode instanceof btn_actionCtrl) {
            GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        if (GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode instanceof btn_actionCtrl) {
            GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        if (GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode instanceof FighterKeyCtrl_lmj) {
            GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        if (GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode instanceof FighterKeyCtrl_lmj) {
            GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false);
        }
        GameCtrl.I.gameRunData.isTimeRuning = false;
        var _loc3_ = null;
        var _loc2_ = param1.fighter;
        var _loc4_ = GameCtrl.I.getEnemyTeam(param1.fighter);
        if (_loc4_) {
            var _loc7_ = 0;
            var _loc6_ = _loc4_.children;
            for (var _loc5_ in _loc4_.children) {
                if (_loc4_.children[_loc5_] instanceof FighterMain) {
                    _loc3_ = _loc4_.children[_loc5_];
                    break;
                }
            }
        }
        GameCtrl.I.gameEnd(_loc3_, _loc2_);
        return;
    }; // end function
    return FighterEventCtrl;
}());
__reflect(FighterEventCtrl.prototype, "FighterEventCtrl");
//# sourceMappingURL=FighterEventCtrl.js.map