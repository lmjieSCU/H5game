class wave_s {
    public static addSprite20084(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, wave_s.frame1, 2, wave_s.frame2, 3, wave_s.frame3, 4, wave_s.frame4, 20, wave_s.frame20]);
        mc['own_role'] = own_role;
        mc.addWaitingCallFun(mc, ['hit', wave_s.frame1Call, [mc]]);
        return;
    }

    public static frame1Call(mc: zmovie.ZMovieClip) {
        mc.resetFrameStop();
        mc.nextFrame();
    }


    public static frame1(mc: zmovie.ZMovieClip) {
        // let role :Role = mc['own_role'];
        // role.continueHit = false;
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        mc.stop();
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 50;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 2;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }

    public static frame3() {
        // let role :Role = mc['own_role'];
        // role.continueHit = false;
    }

    public static frame4() { }

    public static frame20(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}
