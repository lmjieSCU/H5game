/*
*定义人物状态标志、技能标志
*
*/

class FighterAction 
    {
        public isMoving:boolean;
        public isJumping:boolean;
        public isDefensing:boolean;
        public isDashing:boolean;
        public isHurting:boolean;           //地面上被打击
        public isHurtFlying:boolean;       //被打飞
        public isDefenseHiting:boolean;
        public airMove:boolean;
        public touchFloor:string;
        public touchFloorBreakAct:boolean = false;
        public hitTarget:string;
        public hitTargetChecker:string;
        public moveLeft:string; 
        public moveRight:string; 
        public defense:string;
        public jump:string;
        public jumpQuick:string;
        public jumpDown:string;
        public dash:string;
        public attack:string;
        public skill1:string;
        public skill2:string;
        public zhao1:string;
        public zhao2:string;
        public zhao3:string;
        public catch1:string;
        public catch2:string;
        public bisha:string;
        public bishaUP:string;
        public bishaSUPER:string;
        public hurtAction:string;
        public waiKai:string;
        public attackAIR:string;
        public skillAIR:string;
        public bishaAIR:string;
        public airHitTimes:number;
        public jumpTimes:number;
        public bishaQi:number = 100;
        public bishaUPQi:number = 100;
        public bishaSUPERQi:number = 300;
        public bishaAIRQi:number = 100;
        private _cdObj:Object;

        constructor()
        {
            this._cdObj = {};
            return;
        }// end function

        public clear() : void
        {
            this.clearState();
            this.clearAction();
            return;
        }// end function

        public clearState() : void
        {
            this.isMoving = false;
            this.isJumping = false;
            this.isDefensing = false;
            this.isDashing = false;
            this.isHurting = false;
            this.isHurtFlying = false;
            this.isDefenseHiting = false;
            this.touchFloorBreakAct = false;
            return;
        }// end function

        public clearAction() : void
        {
            this.hitTarget = null;
            this.hitTargetChecker = null;
            this.moveLeft = null;
            this.moveRight = null;
            this.defense = null;
            this.jump = null;
            this.jumpQuick = null;
            this.jumpDown = null;
            this.dash = null;
            this.attack = null;
            this.skill1 = null;
            this.skill2 = null;
            this.zhao1 = null;
            this.zhao2 = null;
            this.zhao3 = null;
            this.catch1 = null;
            this.catch2 = null;
            this.bisha = null;
            this.bishaUP = null;
            this.bishaSUPER = null;
            this.bishaQi = 100;
            this.bishaUPQi = 100;
            this.bishaAIRQi = 100;
            this.bishaSUPERQi = 300;
            this.hurtAction = null;
            this.waiKai = null;
            this.attackAIR = null;
            this.skillAIR = null;
            this.bishaAIR = null;
            this.touchFloor = null;
            this.airMove = false;
            return;
        }// end function

        public render() : void
        {
            for (let _loc_1 in this._cdObj)
            {
                
                var _loc_2:any = this._cdObj;
                var _loc_3:any = _loc_1;
                _loc_2[_loc_1] = (_loc_2[_loc_1] - 1);
                _loc_2[_loc_3] = _loc_2[_loc_1] - 1;
                if (_loc_2[_loc_1] <= 0)
                {
                    delete _loc_2[_loc_1];
                }
            }
            return;
        }// end function

        public setCD(param1:string, param2:number) : void
        {
            this._cdObj[param1] = param2 / GameConfig.FPS_GAME;
            return;
        }// end function

        public CDOK(param1:string) : boolean
        {
            return !this._cdObj[param1];
        }// end function

    }

