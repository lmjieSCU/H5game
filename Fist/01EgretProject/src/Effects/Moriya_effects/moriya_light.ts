class moriya_light {
    public static addSprite4303(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, moriya_light.frame1, 3, moriya_light.frame3, 10, moriya_light.frame19]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
    }


    public static frame3(mc: zmovie.ZMovieClip) {
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
        hitcheck_obj.d_rate = 1.3;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "m_hitFire_light";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }


    public static frame19(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}


