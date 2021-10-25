/*
*战斗事件处理类
*"addAttacker"事件：增加子动画,如sasuke_xz.bs
*/



class FighterEventCtrl {
    private _attackers: Array<any>;              //存储着存活着的attacker
    public static instance: FighterEventCtrl;
    constructor() {
        this._attackers = [];
        FighterEventCtrl.instance = this;
        return;
    }// end function

    public initlize() {
        FighterEventDispatcher.removeAllListeners();
        FighterEventDispatcher.addEventListener("FIRE_BULLET", this.fireBullet);
        FighterEventDispatcher.addEventListener("ADD_ATTACKER", this.addAttacker);
        FighterEventDispatcher.addEventListener("ADD_ASSISTER", this.addAssister);
        FighterEventDispatcher.addEventListener("HIT_TARGET", this.onHitTarget);
        FighterEventDispatcher.addEventListener("HURT_RESUME", this.onHurtResume);
        FighterEventDispatcher.addEventListener("HURT_DOWN", this.onHurtDown);
        FighterEventDispatcher.addEventListener("DIE", this.onDie);
        return;
    }// end function

    public destory() {
        FighterEventDispatcher.removeAllListeners();
        return;
    }// end function

    private fireBullet(event: FighterEvent) {
        let _loc_2: any = event.params;
        if (!_loc_2 || !_loc_2.mc) {
            return;
        }
        _loc_2.mc.unControlerFlag = true; 
        let bullet: any = new Bullet(_loc_2.mc, _loc_2);
        bullet.onRemove = FighterEventCtrl.instance.removeBullet;
        bullet.setHitVO(_loc_2.hitVO);
        GameCtrl.I.addGameSprite(event.fighter.team.id, bullet)
        return;
    }// end function

    private removeBullet(param1: Bullet) {
        param1.mc.unControlerFlag = false;
        GameCtrl.I.removeGameSprite(param1);
        return;
    }// end function

    //增加子动画
    private addAttacker(event: FighterEvent) {
        var _loc_3: any = event.params;
        if (!_loc_3 || !_loc_3.mc) {
            return;
        }
        let attacker: any = null;
        attacker = new FighterAttacker(_loc_3.mc, _loc_3);
        _loc_3.mc.unControlerFlag = true;           //使得子动画不受父动画的控制,能够自行removeself
        attacker.onRemove = FighterEventCtrl.instance.removeAttacker;
        attacker.setOwner(event.fighter);
        attacker.init();
        FighterEventCtrl.instance._attackers.push(attacker);
        GameCtrl.I.addGameSprite(event.fighter.team.id, attacker);
        return;
    }// end function

    private addAssister(event: FighterEvent) {
        //
        var _loc_4: any = <FighterMain>event.fighter;
        var _loc_3: any = (_loc_4).team.id == 1 ? (GameCtrl.I.gameRunData.p1FighterGroup) : (GameCtrl.I.gameRunData.p2FighterGroup);
        var _loc_2: any = _loc_3.fuzhu;
        _loc_2.setOwner(_loc_4);
        _loc_2.direct = _loc_4.direct;
        _loc_2.x = _loc_4.x - 30 * _loc_2.direct;
        _loc_2.y = _loc_4.y;
        _loc_2.onRemove = FighterEventCtrl.instance.removeAssister;
        GameCtrl.I.addGameSprite(event.fighter.team.id, _loc_2);
        EffectCtrl.I.assisterEffect(_loc_2);    //be returned
        _loc_2.goFight();
        return;
    }// end function

    private removeAssister(param1: Assister) {
        GameCtrl.I.removeGameSprite(param1);
        return;
    }// end function

    private removeAttacker(param1: FighterAttacker) {
        param1.mc.unControlerFlag = false;
        GameCtrl.I.removeGameSprite(param1);
        var _loc_2: any = FighterEventCtrl.instance._attackers.indexOf(param1);
        if (_loc_2 != -1) {
            FighterEventCtrl.instance._attackers.splice(_loc_2, 1);
        }
        return;
    }// end function

    //param1 = mcName,param2 = team.id ,param3 = hashCode
    //param3 = -1 时表示不检查zmoive.ZmoiveClip的hashCode
    public getAttacker(param1: string, param2: number, param3: number): FighterAttacker {
        for (var _loc_3 in FighterEventCtrl.instance._attackers) {
            if (FighterEventCtrl.instance._attackers[_loc_3].name == param1 && FighterEventCtrl.instance._attackers[_loc_3].team.id == param2) {
                if (param3 != -1) {     //检查hashcode值
                    if (FighterEventCtrl.instance._attackers[_loc_3].mc.hashCode == param3) {
                        return FighterEventCtrl.instance._attackers[_loc_3]
                    }
                }
                else {               //不检查
                    return FighterEventCtrl.instance._attackers[_loc_3];
                }
            }
        }
        return null;
    }// end function

    //打击到对方
    private onHitTarget(param1: FighterEvent) {
        FighterEventCtrl.instance.addHits(<FighterMain>param1.fighter, param1.params.target);   //FighterEvent.fighter打击到FighterEvent.params.target
        if (GameMode.isAcrade() && param1.fighter.team.id == 1) {
            GameLogic.addScoreByHitTarget(param1.params.hitvo);
        }
        return;
    }// end function

    private onHurtResume(event: FighterEvent) {
        FighterEventCtrl.instance.removeHits(event.fighter.id);
        return;
    }// end function

    private onHurtDown(event: FighterEvent) {
        FighterEventCtrl.instance.removeHits(event.fighter.id);
        return;
    }// end function

    private addHits(param1: FighterMain, param2: IGameSprite) //param1 hit param2
    {
        var _loc5_: string = param2 && param2 instanceof BaseGameSprite ? (param2 as BaseGameSprite).id : null;
        var _loc4_: number = 1;     //UIid,_loc4_ = param1.team.id
        switch (Number(param1.team.id) - 1) {
            case 0:
                _loc4_ = 1;
                break;
            case 1:
                _loc4_ = 2;
        }
        var _loc3_: number = GameLogic.addHits(param1.id, _loc5_, _loc4_);  //_loc3_为hits,打击次数
        if (_loc3_ > 1) {
            GameUI.I.getUI().showHits(_loc3_, _loc4_);   
        }
        return;
    }// end function

    private removeHits(param1: string) {
        var _loc_2: any = GameLogic.getHitsObjByTargetId(param1);
        // console.log(_loc_2)
        if (_loc_2) {
            GameUI.I.getUI().hideHits(_loc_2.uiID);
        }
        GameLogic.clearHitsByTargetId(param1);
        return;
    }// end function

    private onDie(param1: FighterEvent) {
        //屏蔽
        if(GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode instanceof btn_actionCtrl){
            GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false)
        }
        if(GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode instanceof btn_actionCtrl){
            GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false)
        }
        if(GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode instanceof FighterKeyCtrl_lmj){
            GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false)
        }
        if(GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode instanceof FighterKeyCtrl_lmj){
            GameCtrl.I.gameRunData.p2FighterGroup.currentFighter.owerKeyBoardMode.setenabled(false)
        }
        GameCtrl.I.gameRunData.isTimeRuning = false
        var _loc3_ = null;
        var _loc2_: FighterMain = param1.fighter as FighterMain;
        var _loc4_: TeamVO = GameCtrl.I.getEnemyTeam(param1.fighter);
        if (_loc4_) {
            var _loc7_: number = 0;
            var _loc6_ = _loc4_.children;
            for (var _loc5_ in _loc4_.children) {
                if (_loc4_.children[_loc5_] instanceof FighterMain) {
                    _loc3_ = <FighterMain>_loc4_.children[_loc5_];
                    break;
                }
            }
        }
        GameCtrl.I.gameEnd(_loc3_, _loc2_);
        return;
    }// end function

}

