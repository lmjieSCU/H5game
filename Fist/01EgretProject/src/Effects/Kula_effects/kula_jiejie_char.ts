class kula_jiejie_char {
        public static addSprite18626(mc: zmovie.ZMovieClip, own_role: Role) {
                mc.addFrameScript(mc, [1, kula_jiejie_char.frame1,2, kula_jiejie_char.frame2, 4, kula_jiejie_char.frame4, 7, kula_jiejie_char.frame7]);
                mc["own_role"]=own_role;
                return;
        }
        public static frame1(mc: zmovie.ZMovieClip) {
                let hero_flyingobj = Hero_flyingObj.getInstance(mc);
                hero_flyingobj.obj_Vx = 0;
                hero_flyingobj.obj_Vy = 0;
                hero_flyingobj.obj_level = 1;
                hero_flyingobj.hurtBack = "";
                hero_flyingobj.hurtAway = "hurt3";
                hero_flyingobj.flag = 1;
                hero_flyingobj.end_status = "";
                hero_flyingobj.Vx = 0;
                hero_flyingobj.Vy = 33;
                hero_flyingobj.a = 3;
                hero_flyingobj.g = 3;
                hero_flyingobj.freezeTime2 = 0;
                hero_flyingobj.freezeTime = 4;
                hero_flyingobj.slowTime = 0;
                hero_flyingobj.shake = 0;
                hero_flyingobj.d_rate = 1;
                hero_flyingobj.isObj = true;
                hero_flyingobj.hitType = "hitFire_cut";
                hero_flyingobj.hitEff = "";
                hero_flyingobj.reCheck = true;
                hero_flyingobj.checkTimes = 1;
                hero_flyingobj.hitPos = "";
                hero_flyingobj.doaction_params = [];
                mc.addWaitingCallFun(mc, ['onHit', kula_jiejie_char.frame1_onHit, [mc]]);
        }
        public static frame1_onHit(mc: zmovie.ZMovieClip) {
                mc.resetFrameStop();
        }
        public static frame2(mc: zmovie.ZMovieClip) {
                mc["flyingobj"].moveX(60,mc["own_role"].dir);
        }
        public static frame4(mc: zmovie.ZMovieClip) {
                mc.stop();
        }


        public static frame7(mc: zmovie.ZMovieClip) {
                mc.parent.removeChild(mc);
        }
}