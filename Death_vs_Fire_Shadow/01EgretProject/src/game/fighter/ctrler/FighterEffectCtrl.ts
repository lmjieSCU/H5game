class FighterEffectCtrl 
    {
        private _target:BaseGameSprite;
        private _targetDisplay:egret.DisplayObject;
        private _inGhostStep:boolean;
        private _faceObj:Object;
        private _isShakeIng:boolean;
        private _isShadowIng:boolean;

        constructor(param1:BaseGameSprite)
        {
            this._faceObj = {};
            this._target = param1;
            this._targetDisplay = param1.getDisplay();
            return;
        }// end function

        public destory() 
        {
            this._target = null;
            this._targetDisplay = null;
            this._faceObj = null;
            return;
        }// end function
        //
        public setBishaFace(param1:string, param2:any) 
        {
            this._faceObj[param1] = param2;
            return;
        }// end function
        //
        private getFace(param1:string) : egret.DisplayObject
        {
            if (!param1)
            {
                return null;
            }
            var _loc_4:any = this._faceObj[param1];
            if (!this._faceObj[param1])
            {
                //Debugger.errorMsg("未定义必杀特写:" + param1);
                return null;
            }
            var _loc_3:any = _loc_4;
            var _loc_2:any = new egret.Bitmap(_loc_3);
            _loc_2.smoothing = true;
            return _loc_2;
        }// end function

        public shine(param1:number = 16777215) 
        {
            var _loc_2:any = param1 == 16777215 ? (0.3) : (0.2);
            EffectCtrl.I.shine(param1, _loc_2);
            return;
        }// end function

        public shake(param1:number = 0, param2:number = 3, param3:number = 0) 
        {
            EffectCtrl.I.shake(param1 * 2, param2 * 2, param3 * 1000);
            return;
        }// end function

        public startShake(param1:number = 0, param2:number = 3) 
        {
            this._isShakeIng = true;
            EffectCtrl.I.shake(param1 * 2, param2 * 2, -1);
            return;
        }// end function

        public endShake() 
        {
            if (this._isShakeIng)
            {
                EffectCtrl.I.shake(0, 0, 500);
            }
            return;
        }// end function

        public shadow(param1:number = 0, param2:number = 0, param3:number = 0) 
        {
            this._isShadowIng = true;
            EffectCtrl.I.startShadow(this._targetDisplay, param1, param2, param3);
            return;
        }// end function

        public endShadow() 
        {
            if (this._isShadowIng)
            {
                EffectCtrl.I.endShadow(this._targetDisplay);
            }
            return;
        }// end function

        public dash() 
        {
            if (this._target.isInAir)
            {
                EffectCtrl.I.doEffectById("dash_air", this._target.x, this._target.y, this._target.direct);
            }
            else
            {
                EffectCtrl.I.doEffectById("dash", this._target.x, this._target.y, this._target.direct);
            }
            return;
        }// end function

        public bisha(param1:boolean = false, param2:string = null) 
        {
            var _loc_3:any = this.getFace(param2);
            EffectCtrl.I.bisha(this._target, param1, _loc_3);
            return;
        }// end function

        public endBisha() 
        {
            EffectCtrl.I.endBisha();
            return;
        }// end function

        public startWanKai(param1:string = null) 
        {
            var _loc_2:any = param1 ? (this.getFace(param1)) : (null);
            EffectCtrl.I.wanKai(<FighterMain>this._target, _loc_2);
            return;
        }// end function

        public endWanKai() 
        {
            if ((<FighterMain> this._target).actionState == 50)
            {
                EffectCtrl.I.endWanKai();
            }
            return;
        }// end function

        public walk() 
        {
            if (this._inGhostStep)
            {
                EffectCtrl.I.doEffectById("ghost_step", this._target.x, this._target.y, this._target.direct);
            }
            else
            {
                SoundCtrl.I.playWalk()
            }
            return;
        }// end function

        public jump() 
        {
            EffectCtrl.I.jumpEffect(this._targetDisplay.x, this._targetDisplay.y);
            return;
        }// end function

        public jumpAir() 
        {
            EffectCtrl.I.jumpAirEffect(this._targetDisplay.x, this._targetDisplay.y);
            return;
        }// end function

        public touchFloor() 
        {
            EffectCtrl.I.touchFloorEffect(this._targetDisplay.x, this._targetDisplay.y);
            return;
        }// end function

        public hitFloor(param1:number) 
        {
            EffectCtrl.I.hitFloorEffect(param1, this._targetDisplay.x, this._targetDisplay.y);
            return;
        }// end function

        public slowDown(param1:number) 
        {
            EffectCtrl.I.slowDown(1.5, param1 * 1000);
            return;
        }// end function

        public energyExplode() 
        {
            EffectCtrl.I.energyExplode(this._target);
            return;
        }// end function

        public replaceSkill() 
        {
            EffectCtrl.I.replaceSkill(this._target);
            return;
        }// end function

        public ghostStep() 
        {
            this._inGhostStep = true;
            this.shadow(0, 0, 255); 
            EffectCtrl.I.ghostStep(this._target);
            return;
        }// end function

        public endGhostStep() 
        {
            this._inGhostStep = false;
            this.endShadow();
            EffectCtrl.I.endGhostStep();
            return;
        }// end function

    }

