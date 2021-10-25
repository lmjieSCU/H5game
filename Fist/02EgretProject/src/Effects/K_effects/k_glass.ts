class k_glass {
    public static addSprite4777(mc: zmovie.ZMovieClip, own_role: Role) {

        mc.addFrameScript(mc, [1, k_glass.frame1, 23, k_glass.frame23]);
        mc.addWaitingCallFun(mc, ['hit', k_glass.hit, [mc, own_role]]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 32;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 1;
        hitcheck_obj.hurtBack = "hurt2";
        hitcheck_obj.hurtAway = "hurt2";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = 15;
        hitcheck_obj.Vy = 25;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 5;
        hitcheck_obj.freezeTime = 5;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 1;
        hitcheck_obj.d_rate = 0.5;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = true;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";

    }
    public static frame23Call(mc: zmovie.ZMovieClip, own_role: Role) {

    }
    public static frame23(mc: zmovie.ZMovieClip) {
        mc.stop();
        mc.parent.removeChild(mc);
    }

    public static hit(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop("hit");
        mc.resetFrameStop();
    }
}