/*
*游戏逻辑控制器,隶属于GameCtrl类,实现各个对象的渲染
*
*/

class GameMainLogicCtrler {
    public renderHit: boolean = true;
    private _gameState: GameState;
    private _leftSide: number = 0;
    private _rightSide: number = 0;
    private _teamMap: TeamMap;
    private _renderAnimate: boolean;
    private overVec: any;

    public constructor() {
        return;
    }// end function

    public initlize(param1: GameState, param2: TeamMap, param3: MapMain): void {
        this._gameState = param1;
        this._teamMap = param2;
        this._leftSide = param3.left + 10;
        this._rightSide = param3.right - 10;
        return;
    }// end function


    public setSpeedPlus(param1: number): void  //为teams的每个team中的children设置SPEED_PLUS
    {
        var _loc_5 = null;
        var _loc_7 = 0;
        var _loc_3 = 0;
        var _loc_2 = null;
        var _loc_6 = 0;
        GameConfig.SPEED_PLUS = param1;
        var _loc_4 = this._teamMap.teams.length;
        _loc_7 = 0;
        while (_loc_7 < _loc_4) {

            _loc_5 = this._teamMap.teams[_loc_7];
            _loc_3 = _loc_5.children.length;
            _loc_6 = 0;
            while (_loc_6 < _loc_3) {

                _loc_2 = _loc_5.children[_loc_6];
                if (_loc_2 && !_loc_2.isDestoryed()) {
                    _loc_2.setSpeedRate(param1);
                }
                _loc_6++;
            }
            _loc_7++;
        }
        return;
    }// end function

    public destory(): void {
        return;
    }// end function

    public render(): void {
        this.renderMainLogic();
        return;
    }// end function



    //遍历teams中的每个对象,进行render,以及body碰撞检测与hit碰撞检测
    private renderMainLogic() {
        var _loc_6 = 0;
        var _loc_7 = 0;
        var _loc_4 = 0;
        var _loc_9 = 0;
        var _loc_1 = null;
        var _loc_2 = null;
        var _loc_13 = null;
        var _loc_5 = null;
        var _loc_8 = undefined;
        var _loc_3 = undefined;
        var _loc_12 = 0;
        var _loc_10 = this._teamMap.teams;
        var _loc_11 = _loc_10.length;
        _loc_9 = 0;
        while (_loc_9 < _loc_11) {
            _loc_5 = _loc_10[_loc_9];
            _loc_3 = _loc_5.children;
            _loc_6 = 0;
            while (_loc_6 < _loc_3.length) {

                _loc_2 = _loc_3[_loc_6];
                if (!(_loc_2 == null || _loc_2.isDestoryed())) {
                    this.renderGameSprite(_loc_2);
                    _loc_7 = _loc_9 + 1;
                    while (_loc_7 < _loc_11) {

                        _loc_13 = _loc_10[_loc_7];
                        _loc_8 = _loc_13.children;
                        _loc_12 = _loc_8.length;
                        _loc_4 = 0;
                        while (_loc_4 < _loc_12) {

                            _loc_1 = _loc_8[_loc_4];
                            if (!(_loc_1 == null || _loc_1.isDestoryed())) {
                                this.checkBodyHit(_loc_2, _loc_1);
                                if (this._renderAnimate) {
                                    this.checkHit(_loc_2, _loc_1);
                                }
                            }
                            _loc_4++;
                        }
                        _loc_7++;
                    }
                }
                _loc_6++;
            }
            _loc_9++;
        }
        this._renderAnimate = false;
        return;
    }// end function


    public renderAnimate() {
        this._renderAnimate = true;
        return;
    }// end function

    private A: IGameSprite;
    private B: IGameSprite;
    private bb: BaseGameSprite;
    private ba: BaseGameSprite;

    private getVec(param1: number): any {
        var _loc_2 = this.bb.heavy / this.ba.heavy * 0.5;
        if (_loc_2 > 0.9) {
            _loc_2 = 0.9;
        }
        if (_loc_2 < 0.1) {
            _loc_2 = 0.1;
        }
        var _loc_3 = param1 * _loc_2;
        var _loc_4 = param1 * (1 - _loc_2);
        if (this.A.getIsTouchSide() && this.B.getIsTouchSide()) {
            _loc_3 = param1;
            _loc_4 = param1;
        }
        else if (this.A.getIsTouchSide()) {
            _loc_3 = 0;
            _loc_4 = param1;
        }
        else if (this.B.getIsTouchSide()) {
            _loc_4 = 0;
            _loc_3 = param1;
        }
        return { A: _loc_3, B: _loc_4 };
    }// end function


    //检测P1,P2是否相撞,若相撞则对应P2进行move
    private checkBodyHit(param1: IGameSprite, param2: IGameSprite) {
        this.A = param1;
        this.B = param2;
        if (!this.renderHit) {
            return;
        }
        if (this.A instanceof BaseGameSprite == false) {
            return;
        }
        if (this.B instanceof BaseGameSprite == false) {
            return;
        }
        this.ba = <BaseGameSprite>this.A;
        this.bb = <BaseGameSprite>this.B;
        if (this.ba.isCross || this.bb.isCross) {
            return;
        }
        var bodyA = this.A.getBodyArea();
        var bodyB = this.B.getBodyArea();
        if (bodyA == null) {
            return;
        }
        if (bodyB == null) {
            return;
        }
        var bodyHit = bodyA.intersection(bodyB);
        if (!bodyHit || bodyHit.isEmpty()) {
            return;
        }
        var vecA = this.ba.getVecX();
        var vecB = this.bb.getVecX();
        if (this.ba.x < this.bb.x) {
            if (vecA < 0 && vecA < vecB || vecB > 0 && vecB > vecA) {
                return;
            }
            if (bodyHit.width > 2) {
                if (!this.overVec) {
                    this.overVec = this.getVec(5 * GameConfig.SPEED_PLUS);
                }
                this.ba.move(-this.overVec.A);
                this.bb.move(this.overVec.B);
            }
        }
        else {
            if (vecA > 0 && vecA > vecB || vecB < 0 && vecB < vecA) {
                return;
            }
            if (bodyHit.width > 2) {
                if (!this.overVec) {
                    this.overVec = this.getVec(5 * GameConfig.SPEED_PLUS);
                }
                this.ba.move(this.overVec.A);
                this.bb.move(-this.overVec.B);
            }
        }
        if (vecA != 0) {
            var vo = this.getVec(vecA);
            this.bb.move(vo.B);
            this.ba.move(-vo.A);
        }
        if (vecB != 0) {
            var vo2 = this.getVec(vecB);
            this.ba.move(vo2.A);
            this.bb.move(-vo2.B);
        }
        return;
    }// end function


    private renderGameSprite(param1: IGameSprite): void        //渲染param1
    {
        var _loc_3 = null;
        let _loc_2 :boolean= false;
       // try {
            GameLogic.fixGameSpritePosition(param1);        //P1不越界
            if (param1 instanceof BaseGameSprite) {
                _loc_2 = GameLogic.isInAir(param1);
                if (_loc_2) {
                    param1.applayG(12);                 //实现下降,12为重力上限
                }
                param1.setInAir(_loc_2);
            }
            param1.render();                        //渲染动作
            if (this._renderAnimate && !param1.isDestoryed()) {
                param1.renderAnimate();                  //渲染动画
            }
       // }
       // catch (e) {
          //  console.log(" try render" + e)
            // Debugger.log("GameMainLogicCtrler.renderGameSprite", e);
       // }
        return;
    }// end function

    private checkHit(param1: IGameSprite, param2: IGameSprite): void        //检测是否打击到对方
    {
        let param1_bodyArea = null;
        let param2_bodyArea = null;
        if (!this.renderHit) {
            return;
        }
        var param1_curhit = param1.getCurrentHits();        //获得P1hitVO数组
        var param2_curhit = param2.getCurrentHits();       //获得P2hitVO数组
        if (param1 instanceof BaseGameSprite && !(param1 as BaseGameSprite).isAllowBeHit)       //不可被攻击
        {
            param1_bodyArea = null;
        }
        else {
            param1_bodyArea = param1.getBodyArea();          //P1的body区域
        }
        if (param2 instanceof BaseGameSprite && !(param2 as BaseGameSprite).isAllowBeHit) {
            param2_bodyArea = null;
        }
        else {
            param2_bodyArea = param2.getBodyArea();         //P2的body区域
        }
        if (param1_bodyArea) {
            this._gameState.drawGameRect(param1_bodyArea, 16776960, 0.5);
        }
        if (param2_bodyArea) {
            this._gameState.drawGameRect(param2_bodyArea, 16776960, 0.5);
        }
        var _loc_6 = this.getHitObj(param1_curhit, param2_bodyArea);    //P1打击P2
        var _loc_3 = this.getHitObj(param2_curhit, param1_bodyArea);   //P2打击P1
        if (_loc_6)         //P1打击P2
        {
            param2.beHit(_loc_6.hitVO, _loc_6.hitRect);
            param1.hit(_loc_6.hitVO, param2);
            this._gameState.drawGameRect(_loc_6.hitRect, 16777215, 1);
        }
        if (_loc_3)         //P2打击P1
        {
            param1.beHit(_loc_3.hitVO, _loc_3.hitRect);
            param2.hit(_loc_3.hitVO, param1);
            this._gameState.drawGameRect(_loc_3.hitRect, 16777215, 1);
        }
        return;
    }// end function

    //遍历param1的hitvo,取其currentArea与param2进行碰撞检测,成功碰撞则返回对应{hitvo,hitRect},反则返回NULL
    private getHitObj(param1: Array<any>, param2: egret.Rectangle): any {
        var _loc_7 = 0;
        var _loc_4 = null;
        var _loc_3 = null;
        var _loc_6 = null;
        if (!param2) {
            return null;
        }
        if (!param1 || param1.length < 1) {
            return null;
        }
        var _loc_5 = param1.length;
        _loc_7 = 0;
        while (_loc_7 < _loc_5) {

            _loc_3 = param1[_loc_7];
            if (_loc_3 != null) {
                _loc_6 = _loc_3.currentArea;
                if (_loc_6 != null) {
                    this._gameState.drawGameRect(_loc_6);
                    _loc_4 = _loc_6.intersection(param2);
                    if (_loc_4 && _loc_4.isEmpty() == false)    //成功碰撞
                    {
                        return { hitVO: _loc_3, hitRect: _loc_4 };
                    }
                }
            }
            _loc_7++;
        }
        return null;
    }// end function

    public renderPause() {
        return;
    }// end function

}
