class FighterCtrler 
    {
        public hitModel:FighterHitModel;
        private _effectCtrl:FighterEffectCtrl;
        private _fighterMcCtrl:FighterMcCtrler;
        private _voiceCtrl:FighterVoiceCtrler;
        private _fighter:FighterMain;
        private _rectCache:Object;
        private _doingWankai:boolean;


        constructor()
        {
            this._rectCache = {};
            return;
        }// end function

        public destory()
        {
            if (this._effectCtrl)
            {
                this._effectCtrl.destory();
                this._effectCtrl = null;
            }
            if (this._fighterMcCtrl)
            {
                this._fighterMcCtrl.destory();
                this._fighterMcCtrl = null;
            }
            if (this._voiceCtrl)
            {
                this._voiceCtrl.destory();
                this._voiceCtrl = null;
            }
            if (this._rectCache)
            {
                this._rectCache = null;
            }
            if (this.hitModel)
            {
                this.hitModel.destory();
                this.hitModel = null;
            }
            this._fighter = null;
            return;
        }// end function

        public getEffectCtrl() : FighterEffectCtrl
        {
            return this._effectCtrl;
        }// end function

        public getVoiceCtrl() : FighterVoiceCtrler
        {
            return this._voiceCtrl;
        }// end function

        public get hp() : number
        {
            return this._fighter.hp;
        }// end function

        public set hp(param1:number) 
        {
            var _loc_2:any = param1;
            this._fighter.customHpMax = param1;
            _loc_2 = _loc_2;
            this._fighter.hpMax = _loc_2;
            this._fighter.hp = _loc_2;
            return;
        }// end function

        public get energy() : number
        {
            return this._fighter.energyMax;
        }// end function

        public set energy(param1:number) 
        {
            var _loc_2:any = param1;
            this._fighter.energyMax = param1;
            this._fighter.energy = _loc_2;
            return;
        }// end function

        public get speed() : number
        {
            return this._fighter.speed;
        }// end function

        public set speed(param1:number) 
        {
            this._fighter.speed = param1;
            return;
        }// end function

        public get jumpPower() : number
        {
            return this._fighter.jumpPower;
        }// end function

        public set jumpPower(param1:number) 
        {
            this._fighter.jumpPower = param1;
            return;
        }// end function

        public get heavy() : number
        {
            return this._fighter.heavy;
        }// end function

        public set heavy(param1:number) 
        {
            this._fighter.heavy = param1;
            return;
        }// end function

        public get defenseType() : number
        {
            return this._fighter.defenseType;
        }// end function

        public set defenseType(param1:number)
        {
            this._fighter.defenseType = param1;
            return;
        }// end function

        public addHp(param1:number)
        {
            this._fighter.addHp(param1);
            return;
        }// end function

        public addHpPercent(param1:number)
        {
            this._fighter.addHp(this._fighter.hpMax * param1);
            return;
        }// end function

        public loseHp(param1:number)
        {
            this._fighter.loseHp(param1);
            return;
        }// end function

        public loseHpPercent(param1:number)
        {
            this._fighter.loseHp(param1 * this._fighter.hpMax);
            return;
        }// end function

        public get self() : zmovie.ZMovieClip
        {
            return this._fighter.getDisplay();
        }// end function

        public get target() : egret.DisplayObject
        {
            var _loc_1:any = this._fighter.getCurrentTarget();
            if (!_loc_1)
            {
                return null;
            }
            return _loc_1.getDisplay();
        }// end function

        public getTargetSP() : IGameSprite
        {
            var _loc_1:any = this._fighter.getCurrentTarget();
            if (!_loc_1)
            {
                return null;
            }
            return _loc_1;
        }// end function

        public getTargetState() : number
        {
            var _loc_1:any = this._fighter.getCurrentTarget() as FighterMain;
            if (!_loc_1)
            {
                return 0;
            }
            return _loc_1.actionState;
        }// end function

        public setTargetVelocity(param1:number, param2:number)
        {
            var _loc_3:any = this._fighter.getCurrentTarget();
            if (_loc_3 && _loc_3 instanceof BaseGameSprite)
            {
                (<BaseGameSprite> _loc_3).setVelocity(param1, param2);
            }
            return;
        }// end function

        public setTargetDamping(param1:number, param2:number)
        {
            var _loc_3:any = this._fighter.getCurrentTarget();
            if (_loc_3 && _loc_3 instanceof BaseGameSprite)
            {
                (<BaseGameSprite> _loc_3).setDamping(param1, param2);
            }
            return;
        }// end function

        public targetInRange(param1:any[] = null, param2:any[] = null) : boolean
        {
            var _loc_4:any = NaN;
            var _loc_8:any = this.target;
            if (!this.target)
            {
                return false;
            }
            var _loc_3:any = this.self;
            if (this._fighter.direct > 0)
            {
                _loc_4 = _loc_8.x - _loc_3.x;
            }
            else
            {
                _loc_4 = _loc_3.x - _loc_8.x;
            }
            var _loc_6:any = _loc_8.y - _loc_3.y;
            var _loc_7:any = true;
            var _loc_5:any = true;
            if (param1)
            {
                _loc_7 = _loc_4 >= param1[0] && _loc_4 <= param1[1];
            }
            if (param2)
            {
                _loc_5 = _loc_6 >= param2[0] && _loc_6 <= param2[1];
            }
            return _loc_7 && _loc_5;
        }// end function

        public justHit(param1:string, param2:boolean = false) : boolean
        {
            var _loc_3:any = null;
            var _loc_5:any = null;
            var _loc_4:any = this._fighter.getCurrentTarget();
            if (_loc_4 && _loc_4 instanceof FighterMain)
            {
                _loc_3 = (<FighterMain> _loc_4).hurtHit;
                if (_loc_3)
                {
                    return _loc_3.id == param1;
                }
                if (param2)
                {
                    _loc_5 = (<FighterMain> _loc_4).defenseHit;
                    if (_loc_5)
                    {
                        return _loc_5.id == param1;
                    }
                }
            }
            return false;
        }// end function

        public getMcCtrl() : FighterMcCtrler
        {
            return this._fighterMcCtrl;
        }// end function

        public initFighter(param1:FighterMain)  //  绑定main/hitModel/_voiceCtrl/effectCtrler/_fighterMcCtrl
        {
            this._fighter = param1;
            this.hitModel = new FighterHitModel(this._fighter);
            this._voiceCtrl = new FighterVoiceCtrler();  
            if (param1.mc.setEffectCtrler)
            {
                this._effectCtrl = new FighterEffectCtrl(param1);
                param1.mc.setEffectCtrler(this._effectCtrl);
            }
            else
            {
                throw new Error("初始化效果接口失败，SWF未定义setEffectCtrler()");
            }

            if (param1.mc.setFighterMcCtrler)
            {
                this._fighterMcCtrl = new FighterMcCtrler(param1);
                this._fighterMcCtrl.effectCtrler = this._effectCtrl;
                param1.mc.setFighterMcCtrler(this._fighterMcCtrl);
            }
            else
            {
                throw new Error("初始化效果接口失败，SWF未定义setFighterMcCtrler()");
            }
            return;
        }// end function



        public renderAnimate()
        {
            if (this._fighterMcCtrl)
            {
                this._fighterMcCtrl.renderAnimate();
            }
            return;
        }// end function

        public render()
        {
            if (this._fighterMcCtrl)
            {
                this._fighterMcCtrl.render();
            }
            return;
        }// end function

        public setActionCtrl(param1:IFighterActionCtrl)
        {
            if (this._fighterMcCtrl)
            {
                this._fighterMcCtrl.setActionCtrler(param1);
            }
            else
            {
               // this.//console.log("设置ctrler失败！");
            }
            return;
        }// end function

        public defineAction(param1:string, param2:Object)
        {
            this.hitModel.addHitVO(param1, param2);
            return;
        }// end function

        public defineBishaFace(param1:string, param2:any)
        {
            this._effectCtrl.setBishaFace(param1, param2);
            return;
        }// end function

        public defineHurtSound(args : string)
        {
            this._voiceCtrl.setVoice(0, args);
            return;
        }// end function

        public defineHurtFlySound(args : string)
        {
            this._voiceCtrl.setVoice(1, args);
            return;
        }// end function

        public defineDieSound(args : string)
        {
            this._voiceCtrl.setVoice(2, args);
            return;
        }// end function

        public initMc(param1:any)
        {
            var _loc_2:any = null;
            if (param1)
            {
                _loc_2 = new FighterMC();
                _loc_2.initlize(param1, this._fighter, this._fighterMcCtrl);
                if (this._doingWankai)
                {
                    this._fighter.actionState = 50;
                    _loc_2.goFrame("开场");
                    this._doingWankai = false;
                    
                }
                else
                {
                    this._fighterMcCtrl.idle();
                }
            }
            else
            {
                throw new Error("FighterCtrler.initMc Error :: mc is null!");
            }
            return;
        }// end function

        public getCurrentHits() :Array<any>
        {
            var _loc_8:any = 0;
            var _loc_7:any = null;
            var _loc_6:any = null;
            var _loc_4:any = null;
            var _loc_2:any = null;
            var _loc_3:any = null;
            var _loc_5:any = this._fighter.getMC().getCurrentHitArea(); //array 类型
            if (!_loc_5 || _loc_5.length < 1)
            {
                return null;
            }
            var _loc_1:any = [];
            while (_loc_8 < _loc_5.length)
            {
                
                _loc_7 = _loc_5[_loc_8];
                _loc_3 = _loc_7.name;
                _loc_6 = _loc_7.hitVO;
                if (_loc_6)
                {
                    _loc_2 = _loc_7.area;       //打击判定范围
                    _loc_6.currentArea = this.getCurrentRect(_loc_2, "hit" + _loc_8);
                    _loc_1.push(_loc_6);
                }
                _loc_8++;
            }
            return _loc_1;
        }// end function

        public getBodyArea() : egret.Rectangle
        {
            var _loc_1:any = this._fighter.getMC().getCurrentBodyArea();    //当前帧动作下的rectangle
            if (_loc_1 == null)
            {
                return null;
            }
            return this.getCurrentRect(_loc_1, "body");
        }// end function

        public getHitCheckRect(param1:string) : egret.Rectangle
        {
            var _loc_2:any = this._fighter.getMC().getCheckHitRect(param1);
            if (_loc_2 == null)
            {
                return null;
            }
            return this.getCurrentRect(_loc_2, "hit_check");
        }// end function

        public getCurrentRect(param1:egret.Rectangle, param2:string = null) : egret.Rectangle
        {
            var _loc_3:any = null;
            if (param2 == null)
            {
                _loc_3 = new egret.Rectangle();
            }
            else if (this._rectCache[param2])   //有则取
            {
                _loc_3 = this._rectCache[param2];
            }
            else        //无则存
            {
                _loc_3 = new egret.Rectangle(); 
                this._rectCache[param2] = _loc_3;
            }
            _loc_3.x = param1.x * this._fighter.direct + this._fighter.x;
            if (this._fighter.direct < 0)
            {
                _loc_3.x = _loc_3.x - param1.width;
            }
            _loc_3.y = param1.y + this._fighter.y;
            _loc_3.width = param1.width;
            _loc_3.height = param1.height;
            return _loc_3;
        }// end function

        public doWanKai()
        {
            this._doingWankai = true;
            this._fighter.mc.nextFrame();
            return;
        }// end function

        public setDirectToTarget()
        {
            var _loc_1:any = this._fighter.getCurrentTarget();
            if (!_loc_1)
            {
                return;
            }
            this._fighter.direct = this._fighter.x < _loc_1.x ? (1) : (-1);
            return;
        }// end function

        public moveOnce(param1:number = 0, param2:number = 0)
        {
            this._fighter.x = this._fighter.x + param1 * this._fighter.direct;
            this._fighter.y = this._fighter.y + param2;
            return;
        }// end function

        public moveToTarget(param1:Object = null, param2:Object = null, param3:boolean = true)
        {
            var _loc_6:any = NaN;
            var _loc_4:any = NaN;
            var _loc_5:any = this._fighter.getCurrentTarget();
            if (!this._fighter.getCurrentTarget())
            {
                return;
            }
            if (param1 != null)
            {
                _loc_6 = param1;
                _loc_4 = _loc_5.x + _loc_6 * this._fighter.direct;
                if (_loc_6 > 0)
                {
                    try
                    {
                        if (_loc_5.x < _loc_6)
                        {
                            _loc_4 = _loc_5.x + _loc_6;
                        }
                        else if (_loc_5.x > GameCtrl.I.gameState.getMap().right - _loc_6)
                        {
                            _loc_4 = _loc_5.x - _loc_6;
                        }
                    }
                    catch (e)
                    {
                    }
                }
                this._fighter.x = _loc_4;
            }
            if (param2 != null)
            {
                this._fighter.y = _loc_5.y + param2;
            }
            if (param3)
            {
                this._fighter.direct = this._fighter.x < _loc_5.x ? (1) : (-1);
            }
            return;
        }// end function

        public setCross(param1:boolean)
        {
            this._fighter.isCross = param1;
            return;
        }// end function

        public getHitRange(param1:string) : egret.Rectangle
        {
            var _loc_2:any = this._fighter.getMC().getHitRange(param1);
            if (_loc_2 == null)
            {
                return null;
            }
            return this.getCurrentRect(_loc_2, "hitRange_" + param1);
        }// end function

    }
