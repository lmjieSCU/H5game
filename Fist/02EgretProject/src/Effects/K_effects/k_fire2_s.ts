class k_fire2_s {

    public static addSprite4773(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addWaitingCallFun(mc, ['frame3Call', k_fire2_s.frame3Call, [mc, own_role]]);
        mc.addFrameScript(mc, [1, k_fire2_s.frame1, 3, k_fire2_s.frame3, 24, k_fire2_s.frame24]);
        return;
    }
    public static frame3Call(mc: zmovie.ZMovieClip,own_role: Role) {
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y - 170;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        mc.checkWaitingCallFun('frame3Call');
    }



    public static frame1(mc: zmovie.ZMovieClip) {
        mc.stop();
        let K_hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        K_hitcheck_obj.obj_Vx = 40;
        K_hitcheck_obj.obj_Vy = 0;
        K_hitcheck_obj.obj_level = 0;
        K_hitcheck_obj.hurtBack = "";
        K_hitcheck_obj.hurtAway = "hurt4";
        K_hitcheck_obj.flag = 1;
        K_hitcheck_obj.end_status = "getup2";
        K_hitcheck_obj.Vx = 25;
        K_hitcheck_obj.Vy = 40;
        K_hitcheck_obj.a = 3;
        K_hitcheck_obj.g = 0;
        K_hitcheck_obj.freezeTime2 = 1;
        K_hitcheck_obj.freezeTime = 12;
        K_hitcheck_obj.slowTime = 0;
        K_hitcheck_obj.shake = 3;
        K_hitcheck_obj.d_rate = 1.5;
        K_hitcheck_obj.isObj = true;
        K_hitcheck_obj.hitType = "hitFire1";
        K_hitcheck_obj.hitEff = "fire_m3";
        K_hitcheck_obj.hitShinning = true;
        K_hitcheck_obj.reCheck = true;
        K_hitcheck_obj.checkTimes = 1;
        K_hitcheck_obj.hitPos = "";
    }

    public static frame24(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}