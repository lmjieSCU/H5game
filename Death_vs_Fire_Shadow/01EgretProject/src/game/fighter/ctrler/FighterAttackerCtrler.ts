class FighterAttackerCtrler 
    {
        public effect:FighterEffectCtrl;
        public ownerMc:FighterMcCtrler;
        private _attacker:FighterAttacker;
        private _touchFloor:boolean;
        private _touchFloorFrame:string;
        private hitTargetAction:string;
        private hitTargetChecker:string;

        public  constructor(param1:FighterAttacker)
        {
            this._attacker = param1;
            return;
        }// end 


        public get _attacker_mc() : zmovie.ZMovieClip
        {
            return this._attacker.mc;
        }
        public  get owner_mc_ctrler() : FighterMcCtrler
        {
            var _loc_1 = this._attacker.getOwner() as FighterMain;
            if (_loc_1)
            {
                return _loc_1.getCtrler().getMcCtrl();
            }
            return null;
        }// end 

        public  get owner_fighter_ctrler() : FighterCtrler
        {
            var _loc_1 = this._attacker.getOwner() as FighterMain;
            if (_loc_1)
            {
                return _loc_1.getCtrler();
            }
            return null;
        }// end 

        public  destory() : void
        {
            this._attacker = null;
            this.effect = null;
            this.ownerMc = null;
            return;
        }// end 

        public  endAct() : void
        {
            this._attacker.isAttacking = false;
            return;
        }// end 

        public  render() : void
        {
            this.renderCheckTargetHit(); 
            if (this._attacker.isInAir) 
            {
                this._touchFloor = false;
                return;
            }
            if (!this._touchFloor)
            {
                this._touchFloor = true;
                if (this._touchFloorFrame)
                {
                    this._attacker.gotoAndPlay(this._touchFloorFrame);
                    this._touchFloorFrame = null;
                }
            }
            return;
        }// end 

        private  renderCheckTargetHit() : void   //实现同一技能打击到人物与未打击到人物的区别
        {
            var _loc_4 = 0;
            var _loc_1 = null;
            if (!this.hitTargetChecker) //zh10atm
            {
                return;
            }
            var HitCheckRect = this._attacker.getHitCheckRect(this.hitTargetChecker);  
            if (!HitCheckRect)
            {
                return;
            }
            var Targets = this._attacker.getTargets();
            if (!Targets)
            {
                return;
            }
            while (_loc_4 < Targets.length)
            {
                _loc_1 = Targets[_loc_4].getBodyArea();
                if (_loc_1 && HitCheckRect.intersects(_loc_1))
                {
                    this.gotoAndPlay(this.hitTargetAction); 
                }
                _loc_4++;
            }
            return;
        }// end 

        public  stopFollowTarget() : void
        {
            this._attacker.stopFollowTarget();
            return;
        }// end 

        public  moveToTarget(param1:number = NaN, param2:number = NaN) : void
        {
            this._attacker.moveToTarget(param1, param2);
            return;
        }// end 

        public  move(param1:number = 0, param2:number = 0) : void
        {
            this._attacker.setVelocity(param1 * this._attacker.direct, param2);
            return;
        }// end 

        public  damping(param1:number = 0, param2:number = 0) : void
        {
            this._attacker.setDamping(param1, param2);
            return;
        }// end 

        public  stop() : void
        {
            this._attacker.stop();
            return;
        }// end 

        public  gotoAndPlay(param1:string) : void
        {
            this._attacker.gotoAndPlay(param1);
            return;
        }// end 

        public  gotoAndStop(param1:string) : void
        {
            this._attacker.gotoAndStop(param1);
            return;
        }// end 

        public  setTouchFloor(param1:string) : void
        {
            this._touchFloorFrame = param1;
            return;
        }// end 

        public  justHit(param1:string) : boolean
        {
            var _loc_2 = this._attacker.getOwner();
            if (_loc_2 instanceof FighterMain)
            {
                return (this._attacker.getOwner() as FighterMain).getCtrler().justHit(param1);
            }
            if (_loc_2 instanceof Assister)
            {
                return (this._attacker.getOwner() as Assister).getCtrler().justHit(param1);
            }
            return false;
        }// end 

        public  setHitTarget(param1:string, param2:string) : void
        {
            this.hitTargetAction = param2;
            this.hitTargetChecker = param1;
            return;
        }// end 

        public  setCrossMap(param1:boolean) : void
        {
            var _loc_2 = param1;
            this._attacker.isAllowCrossBottom = param1;
            this._attacker.isAllowCrossX = _loc_2;
            return;
        }// end 

        public  removeSelf() : void
        {
            this._attacker.removeSelf();
            return;
        }// end 

    }

