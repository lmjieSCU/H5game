/*
*定义人物共有属性,如qi,qimax,speed等
*从FighterMain出发可以到达FighterMc,fighterMCctrl，可视为其父节点
*
*/
class FighterMain extends BaseGameSprite
    {
        public qi:number = 0;
        public qiMax:number = 300;
        public energy:number = 100;
        public energyMax:number = 100;
        public energyOverLoad:boolean = false;
        public customHpMax:number = 0;
        public fzqi:number = 100;
        public fzqiMax:number = 100;
        public speed:number = 20;
        public jumpPower:number = 15;
        public data:FighterVO;
        public airHitTimes:number = 1;
        public jumpTimes:number = 2;
        public actionState:number = 0;
        public defenseType:number = 0;
        public lastHitVO:HitVO;
        private _currentHurts:Array<HitVO>;
        public hurtHit:HitVO;
        public defenseHit:HitVO;
        public targetTeams:Array<TeamVO>;
        private _currentTarget:IGameSprite;
        private _fighterCtrl:FighterCtrler;
        private _energyAddGap:number;
        private _explodeHitVO:HitVO;
        private _explodeHitFrame:number;
        private _replaceSkillFrame:number;
        public owerKeyBoardMode:IFighterActionCtrl;

        constructor(param1:zmovie.ZMovieClip)
        {
            super(param1);
            this._area = null;
            //设置fightVO
            let heroName:string = this.mc._name;
            heroName = heroName.substring(5);
            this.data = FighterModel.I.getFighter(heroName);
            return; 
        }// end function


        public destory(param1:boolean = true) : void
        {
            if (!param1)
            {
                return;
            }
            if (this._fighterCtrl)
            {
                this._fighterCtrl.destory();
                this._fighterCtrl = null;
            }
            if (this._mainMc)
            {
                this._mainMc.gotoAndStop(1);
            }
            this.targetTeams = null;
            this._currentTarget = null;
            this._currentHurts = null;
            super.destory(param1);
            return;
        }// end function

        public set attackRate(param1:number) 
        {
            this.attackRate = param1;
            if (this._fighterCtrl && this._fighterCtrl.hitModel)
            {
                this._fighterCtrl.hitModel.setPowerRate(param1);
            }
            return;
        }// end function

        public currentHurtDamage() : number     //获得所有伤害
        {
            if (!this._currentHurts)
            {
                return 0;
            }
            var _loc_1:any = 0;
            for  (let _loc_2 of this._currentHurts)
            {
                
                _loc_1 = _loc_1 + _loc_2.getDamage();
            }
            return _loc_1;
        }// end function

        public getLastHurtHitVO() : HitVO
        {
            if (!this._currentHurts)
            {
                return null;
            }
            return this._currentHurts[(this._currentHurts.length - 1)];
        }// end function

        public hurtBreakHit() : boolean
        {
            for  (let _loc_1 of this._currentHurts)
            {
                
                if (_loc_1.isBreakDef)
                {
                    return true;
                }
            }
            return false;
        }// end function

        public clearHurtHits() : void
        {
            this._currentHurts = null;
            return;
        }// end function

        public getCtrler() : FighterCtrler
        {
            return this._fighterCtrl;
        }// end function

        public getCurrentTarget() : IGameSprite     //获得当前target对象
        {
            if (this._currentTarget)
            {
                if (this._currentTarget instanceof BaseGameSprite && (<BaseGameSprite> this._currentTarget).isAlive)
                {
                    return this._currentTarget;
                }
            }               //不存在currentTarget
            var _loc_2:any = this.getTargets();
            var _loc_1:any = [];
            if (_loc_2 && _loc_2.length > 0)
            {
                for (let _loc_3 of _loc_2)
                {
                    
                    if (_loc_3.getBodyArea() == null)
                    {
                        _loc_1.push({fighter:_loc_3, order:5});
                        continue;
                    }
                    if (_loc_3 instanceof FighterMain && (<FighterMain> _loc_3).isAlive)
                    {
                        _loc_1.push({fighter:_loc_3, order:0});
                        continue;
                    }
                    if (_loc_3 instanceof BaseGameSprite && (<BaseGameSprite> _loc_3).isAlive)
                    {
                        _loc_1.push({fighter:_loc_3, order:1});
                        continue;
                    }
                    _loc_1.push({fighter:_loc_3, order:2});
                }
                // _loc_1.sortOn("order", 16);  //按照order从小到大排序
                _loc_1.sort(this.Fun_compare);
                this._currentTarget = _loc_1[0].fighter;
            }
            return this._currentTarget;
        }// end function


        public Fun_compare(a:any,b:any)     //升序排列
        {
		    if(a.order>b.order){
			    return 	1;
		    }
			return -1;
	    }


        public getTargets() : any       //获得target数组
        {
            var _loc_2:any = 0;
            if (!this.targetTeams || this.targetTeams.length < 1)
            {
                return null;
            }
            var _loc_1:any = new Array();
            while (_loc_2 < this.targetTeams.length)
            {
                
                _loc_1 = _loc_1.concat(this.targetTeams[_loc_2].getAliveChildren());
                _loc_2++;
            }
            return _loc_1;
        }// end function

        public getMC() : FighterMC
        {
            if (!this._fighterCtrl)
            {
                return null;
            }
            if (!this._fighterCtrl.getMcCtrl())
            {
                return null;
            }
            return this._fighterCtrl.getMcCtrl().getFighterMc();
        }// end function

        public setActionCtrl(param1:IFighterActionCtrl) : void
        {
            if (this._fighterCtrl)
            {
                this._fighterCtrl.setActionCtrl(param1);
                param1.initlize();
            }
            return;
        }// end function

        public initlize() : void
        {
            this._fighterCtrl = new FighterCtrler();
            if (this._mainMc.setFighterCtrler)
            {
                this._mainMc.setFighterCtrler(this._fighterCtrl);   
                this._fighterCtrl.initFighter(this);
            }else{
                throw new Error("初始化失败，SWF未定义setFighterCtrler()");
            }
            
            this._mainMc.gotoAndStop(this.data ? ((this.data.startFrame + 1)) : (2));
            return;
        }// end function



        public renderAnimate() : void
        {
            super.renderAnimate();
            if (this._destoryed)
            {
                return;
            }
            this.renderEnergy();
            this.renderFzQi();
            if (this._fighterCtrl)
            {
                this._fighterCtrl.renderAnimate();
            }
            if (this._explodeHitFrame > 0)
            {
                this._explodeHitFrame = this._explodeHitFrame - 1;
                if (this._explodeHitFrame == 8)
                {
                    this.idle();
                    this.isAllowBeHit = false;
                }
                if (this._explodeHitFrame <= 0)
                {
                    this._explodeHitVO = null;
                    this.isAllowBeHit = true;
                }
            }
            if (this._replaceSkillFrame > 0)
            {
                this._replaceSkillFrame = this._replaceSkillFrame - 1;
                if (this._replaceSkillFrame <= 0)
                {
                    this.isAllowBeHit = true;
                }
            }
            return;
        }// end function

        public render() : void
        {
            super.render();
            if (this._destoryed)
            {
                return;
            }
            if (this._fighterCtrl)
            {
                this._fighterCtrl.render();
            }
            if (this.hp < 0)
            {
                this.hp = 0;
            }
            if (this.hp > this.hpMax)
            {
                this.hp = this.hpMax;
            }
            if (this.qi < 0)
            {
                this.qi = 0;
            }
            if (this.qi > 300)
            {
                this.qi = 300;
            }
            if (this.fzqi < 0)
            {
                this.fzqi = 0;
            }
            if (this.fzqi > 100)
            {
                this.fzqi = 100;
            }
            return;
        }// end function

        public jump() : void
        {
            this._g = 0;
            this.setVelocity(0, -this.jumpPower);
            this.setDamping(0, 0.5);
            return;
        }// end function

        public getCurrentHits() :Array<any>
        {
            if (this._explodeHitVO && this._explodeHitFrame < 8)
            {
                return [this._explodeHitVO];
            }
            return this._fighterCtrl.getCurrentHits();
        }// end function

        public getBodyArea() : egret.Rectangle      //获得当前位置下的body矩形
        {
            if (!this._fighterCtrl)
            {
                return null;
            }
            return this._fighterCtrl.getBodyArea();
        }// end function

        public hit(param1:HitVO, param2:IGameSprite) : void //this 打击param2,hitvo为param1
        {
            super.hit(param1, param2);
            this.lastHitVO = param1;
            var _loc_3:any = 0;
            if (param2 instanceof FighterMain)
            {
                if (param1.isBisha())
                {
                    _loc_3 = param1.power * 0.02;
                }
                else
                {
                    _loc_3 = param1.power * 0.17;
                }
                if (_loc_3 > 15)
                {
                    _loc_3 = 15;
                }
                this.addQi(_loc_3);
            }
            GameLogic.hitTarget(param1, this, param2);  //addscore 
            return;
        }// end function

        public beHit(param1:HitVO, param2:egret.Rectangle = null) : void
        {
            if (!this.isAllowBeHit)
            {
                return;
            }
            super.beHit(param1, param2);
            this._fighterCtrl.getMcCtrl().beHit(param1, param2);
            var _loc_3:any = param1.power * 0.08;
            if (_loc_3 > 20)
            {
                _loc_3 = 20;
            }
            this.addQi(_loc_3);
            if (this.actionState == 21 || this.actionState == 22)
            {
                if (!this._currentHurts)
                {
                    this._currentHurts = new Array();
                }
                this._currentHurts.push(param1);
            }
            return;
        }// end function

        private renderEnergy() : void
        {
            if (this._energyAddGap > 0)
            {
                this._energyAddGap = this._energyAddGap - 1;
                return;
            }
            if (this.energy < this.energyMax)
            {
                if (this.energyOverLoad)
                {
                    this.energy = this.energy + 0.6;
                    if (this.energy > 30)
                    {
                        this.energyOverLoad = false;
                    }
                }
                else if (this.actionState == 20)
                {
                    this.energy = this.energy + 0.8;
                }
                else
                {
                    this.energy = this.energy + 2;
                }
            }
            return;
        }// end function

        private renderFzQi() : void
        {
            if (this.fzqi < 100)
            {
                this.fzqi = this.fzqi + 0.2;
            }
            return;
        }// end function

        public hasEnergy(param1:number, param2:boolean = false) : boolean
        {
            if (this.energy >= param1)
            {
                return true;
            }
            if (param2)
            {
                if (!this.energyOverLoad)
                {
                    return true;
                }
            }
            return false;
        }// end function

        public useEnergy(param1:number) : void
        {
            this.energy = this.energy - param1;
            this._energyAddGap = 0.8 * 30;
            if (this.energy < 0)
            {
                this.energy = 0;
                this.energyOverLoad = true;
            }
            return;
        }// end function

        public useQi(param1:number) : boolean
        {
            if (this.qi < param1)
            {
                return false;
            }
            this.qi = this.qi - param1;
            return true;
        }// end function

        public addQi(param1:number) : void
        {
            this.qi = this.qi + param1;
            if (this.qi > 300)
            {
                this.qi = 300;
            }
            return;
        }// end function


        public addEnergy(param1:number) : void
        {
            this.energy = this.energy + param1;
            if (this.energy > this.energyMax)
            {
                this.energy = this.energyMax;
            }
            return;
        }// end function



        public sayIntro() : void
        {
            this._fighterCtrl.getMcCtrl().sayIntro();
            return;
        }// end function

        public win() : void
        {
            this._fighterCtrl.getMcCtrl().doWin();
            return;
        }// end function

        public idle() : void
        {
            this._fighterCtrl.getMcCtrl().idle();
            return;
        }// end function

        public lose() : void
        {
            this._fighterCtrl.getMcCtrl().doLose();
            return;
        }// end function

        public getHitRange(param1:string) : egret.Rectangle
        {
            return this._fighterCtrl.getHitRange(param1);
        }// end function

        public energyExplode() : void
        {
            this._fighterCtrl.getEffectCtrl().energyExplode();
            this._explodeHitVO = new HitVO();
            var _loc_1:any = new egret.Rectangle(-100, -200, 200, 210);
            this._explodeHitVO.currentArea = this._fighterCtrl.getCurrentRect(_loc_1);
            this._explodeHitVO.power = 50;
            this._explodeHitVO.hitx = 15 * this.direct;
            this._explodeHitVO.hitType = 5;
            this._explodeHitVO.hurtType = 1;
            this._explodeHitFrame = 10;
            this.isAllowBeHit = false;
            return;
        }// end function

        public replaceSkill() : void
        {
            this._fighterCtrl.getEffectCtrl().replaceSkill();
            this.move(250 * this.direct);
            this.idle();
            this.isAllowBeHit = false;
            super.render();
            this.renderAnimate();
            this._fighterCtrl.setDirectToTarget();
            this._replaceSkillFrame = 30;
            return;
        }// end function

        public getArea() : egret.Rectangle
        {
            if (!this._area)
            {
                this._area = this.getBodyArea();
            }
            return this._area;
        }// end function

        public hasWankai() : boolean
        {
            return this._fighterCtrl.getMcCtrl().getFighterMc().checkFrame("万解");
        }// end function

        public die() : void
        {
            this.hp = 0;
            this.isAlive = false;
            if (!FighterActionState.isHurting(this.actionState) && this.actionState != 30)
            {
                this._fighterCtrl.getMcCtrl().getFighterMc().playHurtDown();
            }
            return;
        }// end function

        public relive() : void
        {
            this.isAlive = true;
            this.idle();
            return;
        }// end function

    }
