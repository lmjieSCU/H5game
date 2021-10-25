class ryu_exXie {
    public static addSprite21223(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, ryu_exXie.frame1, 5, ryu_exXie.frame5, 8, ryu_exXie.frame8, 60, ryu_exXie.frame60, 94, ryu_exXie.frame94]);
        mc.addWaitingCallFun(mc, ['frame1Call', ryu_exXie.frame1Call, [mc, own_role]]);
        return;
    }
    public static frame1Call(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.x = own_role.opp.x;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        mc.checkWaitingCallFun('frame1Call');
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup1";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = -60;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 3;
        hitcheck_obj.freezeTime2 = 6;
        hitcheck_obj.freezeTime = 5;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 3;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }

    public static frame8(mc: zmovie.ZMovieClip) {
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 2;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup1";
        hitcheck_obj.Vx = 0;
        hitcheck_obj.Vy = 50;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 3.9;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 6;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 2;
        hitcheck_obj.d_rate = 2;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "up";
    }

    public static frame60(mc: zmovie.ZMovieClip) {
        mc.stop();
        mc.parent.removeChild(mc);
    }

    public static frame94(mc: zmovie.ZMovieClip) {
        mc.stop();
        mc.parent.removeChild(mc);
    }
}
