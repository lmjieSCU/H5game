class mai_shanzi3_s {
    public static addSprite7827(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, mai_shanzi3_s.frame1, 17, mai_shanzi3_s.frame17]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        mc.stop();
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 20;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = 16;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 3;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "fire_m3";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }
    public static frame17(mc: zmovie.ZMovieClip) {
         mc.parent.removeChild(mc);
    }
}

