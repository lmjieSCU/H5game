﻿

    class EffectModel

    {
        private _effect:Array<EffectVO>=[];
        private static _i:EffectModel;

        public constructor()
        {
            this.initlize()
            return;
        }// end function

        public initlize() 
        {
            this._effect = [];
            this.initEffects();
            //this.cacheEffects();
            return;
        }// end function

        private initEffects() 
        {
            this._effect = [];
            this._effect["bisha"] = new EffectVO("XG_bs", {sound:"snd_bs", blendMode:"add"});
            this._effect["bisha_super"] = new EffectVO("XG_cbs", {sound:"snd_cbs", blendMode:"add"});
            this._effect["dash"] = new EffectVO("XG_rush", {sound:"snd_dash_air"});
            this._effect["dash_air"] = new EffectVO("XG_rush_air", {sound:"snd_dash_air"});
            this._effect["jump"] = new EffectVO("XG_jump", {sound:"snd_jump"});
            this._effect["jump_air"] = new EffectVO("XG_jump_air", {sound:"snd_jump", blendMode:"add"});
            this._effect["touch_floor"] = new EffectVO("XG_luodi", {sound:"snd_luodi"});
            this._effect["hit_floor"] = new EffectVO("XG_hitfloor", {sound:"snd_hitfloor"});
            this._effect["hit_floor_low"] = new EffectVO("xg_hitfloor_low", {sound:"snd_hitfloor_low"});
            this._effect["hit_floor_heavy"] = new EffectVO("xg_hitfllor_heavy", {sound:"snd_hitfloor_heavy"});
            this._effect["hit_floor_yan"] = new EffectVO("xg_hitfloor_yan", {blendMode:"lighten"});
            this._effect["hit_end"] = new EffectVO("xg_hitover");
            this._effect["break_def"] = new EffectVO("XG_mfdjx", {sound:"snd_mfdjx", blendMode:"add", freeze:500, shake:{x:10, time:500}});
            this._effect["fz_bleach"] = new EffectVO("XG_fz_bleach_mc", {sound:"snd_dash"});
            this._effect["fz_naruto"] = new EffectVO("XG_fz_naruto_mc", {sound:"snd_fz"});
            this._effect["replaceSp"] = new EffectVO("XG_tishen", {sound:"snd_fz"});
            this._effect["replaceSp2"] = new EffectVO("XG_tishen2");
            this._effect["explodeSp"] = new EffectVO("XG_bsq", {sound:"snd_baoqi1"});
            this._effect["explodeSp2"] = new EffectVO("XG_baoqi", {sound:"snd_baoqi"});
            this._effect["ghost_step"] = new EffectVO("XG_ghost_step", {sound:"snd_ghost_step", blendMode:"add"});
            this._effect["kobg"] = new EffectVO("kobg_effect_mc");
            this.initHitEffect();
            this.initDefenseEffect();
            this.initSpeicalEffect();
            return;
        }// end function

        private cacheEffects() 
        {
            for (var _loc_1 in this._effect)
            {
                //this._effect[_loc_1].cacheBitmapData();
            }
            return;
        }// end function

        private initHitEffect() 
        {
            this.addHitEffect(11, "xg_catch_hit", {freeze:400, sound:"snd_hit_cache"});
            this.addHitEffect(1, "XG_kan2", {sound:"snd_kan1", freeze:50, blendMode:"add", randRotate:true});
            this.addHitEffect(6, "XG_kanx2", {sound:"snd_kan2", freeze:400, blendMode:"add", shine:{color:16777215, alpha:0.2}, randRotate:true, shake:{pow:10, time:400}});
            this.addHitEffect(2, "XG_qdj", {sound:"snd_hit2", blendMode:"add", freeze:50, randRotate:true});
            this.addHitEffect(3, "XG_qdjx", {sound:"snd_hit_heavy", blendMode:"add", randRotate:true, freeze:400, shine:{color:16777215, alpha:0.2}, shake:{pow:10, time:400}});
            this.addHitEffect(4, "XG_mfdj", {sound:"snd_hit2", freeze:50, blendMode:"add", randRotate:true});
            this.addHitEffect(5, "XG_mfdjx", {sound:"snd_mfdjx", freeze:400, blendMode:"add", randRotate:true, shine:{color:16777215, alpha:0.2}, shake:{pow:10, time:400}});
            this.addHitEffect(7, "XG_fire", {sound:"snd_hit_fire", blendMode:"add", specialEffectId:"fire_ing", freeze:400, shine:{color:16777063, alpha:0.2}, shake:{x:5, y:5, time:400}});
            this.addHitEffect(8, "XG_ice", {sound:"snd_hit_ice", blendMode:"add", specialEffectId:"ice_ing", freeze:400, shine:{color:10741237, alpha:0.2}, shake:{x:5, y:5, time:400}});
            this.addHitEffect(9, "XG_leidian", {sound:"snd_hit_dian", blendMode:"hardlight", specialEffectId:"shock_ing", freeze:400, shine:{color:8554706, alpha:0.2}, shake:{x:5, y:5, time:400}});
            return;
        }// end function

        private initDefenseEffect() 
        {
            this.addDefenseEffect(1, "XG_fykan", {sound:"snd_fykan", freeze:50, blendMode:"add", followDirect:true});
            this.addDefenseEffect(6, "XG_fykanx", {sound:"snd_fykanx", freeze:400, blendMode:"add", shine:{color:16777215, blendMode:"screen", alpha:0.1}, followDirect:true, shake:{pow:8, time:400}});
            this.addDefenseEffect(2, "XG_fyq", {sound:"snd_def", freeze:50, blendMode:"add", followDirect:true});
            this.addDefenseEffect(3, "XG_fyqx", {sound:"snd_defx", freeze:400, blendMode:"add", followDirect:true, shine:{color:16777215, alpha:0.1}, shake:{pow:8, time:400}});
            this.addDefenseEffect(4, "XG_mffy", {sound:"snd_def", freeze:50, blendMode:"add", followDirect:true});
            this.addDefenseEffect(5, "XG_mffyx", {sound:"snd_defx", freeze:400, blendMode:"add", followDirect:true, shine:{color:16777215, alpha:0.15}, shake:{pow:10, time:400}});
            this.addDefenseEffect(7, "XG_fire_fy", {sound:"snd_defx", freeze:400, blendMode:"add", followDirect:true, shine:{color:16777063, alpha:0.2}, shake:{pow:8, time:400}});
            this.addDefenseEffect(8, "XG_ice_fy", {sound:"snd_defx", freeze:400, blendMode:"add", followDirect:true, shine:{color:10741237, alpha:0.2}, shake:{pow:8, time:400}});
            this.addDefenseEffect(9, "XG_dian_fy", {sound:"snd_defx", freeze:400, blendMode:"add", followDirect:true, shine:{color:8554706, alpha:0.2}, shake:{pow:8, time:400}});
            return;
        }// end function

        private initSpeicalEffect() 
        {
            this._effect["fire_ing"] = new EffectVO("xg_fire_ing", {blendMode:"add", isSpecial:true, targetColorOffset:[-255, -255, -255]});
            this._effect["ice_ing"] = new EffectVO("xg_ice_ing", {blendMode:"add", isSpecial:true, targetColorOffset:[0, 0, 255]});
            this._effect["shock_ing"] = new EffectVO("xg_dian_ing", {blendMode:"add", isSpecial:true, targetColorOffset:[50, -75, 255]});
            return;
        }// end function

        public getEffect(param1:string) : EffectVO
        {
            return this._effect[param1];
        }// end function

        public getHitEffect(param1:number) : EffectVO
        {
            return this._effect["hit_" + param1];
        }// end function

        public getDefenseEffect(param1:number) : EffectVO
        {
            var _loc_2 = this._effect["defense_" + param1];
            return _loc_2 ? (_loc_2) : (this._effect["defense_5"]);
        }// end function

        private addHitEffect(param1:number, param2:string, param3:Object = null) 
        {
            var _loc_4 = new EffectVO(param2, param3);
            this._effect["hit_" + param1] = _loc_4;
            return;
        }// end function

        private addDefenseEffect(param1:number, param2:string, param3:Object = null) 
        {
            var _loc_4 = new EffectVO(param2, param3);
            this._effect["defense_" + param1] = _loc_4;
            return;
        }// end function

        public static get I() : EffectModel
        {
            if (!EffectModel._i)
            {
                EffectModel._i = new EffectModel();
            }
            return EffectModel._i;
        }// end function

    }
