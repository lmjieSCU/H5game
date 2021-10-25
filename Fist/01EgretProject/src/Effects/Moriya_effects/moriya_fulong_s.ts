class moriya_fulong_s {
    public static addSprite4305(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [27, moriya_fulong_s.frame27, 33, moriya_fulong_s.frame33, 39, moriya_fulong_s.frame39, 45, moriya_fulong_s.frame45, 51, moriya_fulong_s.frame51, 57, moriya_fulong_s.frame57, 82, moriya_fulong_s.frame82]);
        mc["own_role"]=own_role;
        return;
    }
    public static frame27(mc: zmovie.ZMovieClip) {
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 25;
        hitcheck_obj.Vy = 26;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 4;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "m_hitFire_light";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        Moriya_a4290.getInstance(mc["own_role"]).name = "moriya_light";
    }


    public static frame33(mc: zmovie.ZMovieClip) {
        Moriya_a4290.getInstance(mc["own_role"]).name = "moriya_light";
    }   


    public static frame39(mc: zmovie.ZMovieClip) {

        Moriya_a4290.getInstance(mc["own_role"]).name = "moriya_light";
    }


    public static frame45(mc: zmovie.ZMovieClip) {
        Moriya_a4290.getInstance(mc["own_role"]).name = "moriya_light";
    }


    public static frame51(mc: zmovie.ZMovieClip) {
        Moriya_a4290.getInstance(mc["own_role"]).name = "moriya_light";
    }


    public static frame57(mc: zmovie.ZMovieClip) {
        Moriya_a4290.getInstance(mc["own_role"]).name = "moriya_light";
    }


    public static frame82(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}

