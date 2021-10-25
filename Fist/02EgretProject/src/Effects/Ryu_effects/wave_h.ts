class wave_h {
    public static addSprite20044(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, wave_h.frame2, 10, wave_h.frame10]);
        mc.addWaitingCallFun(mc, ['frame2Call', wave_h.frame2Call, [mc, own_role]]);
        return;
    }
    public static frame2Call(mc: zmovie.ZMovieClip, own_role: Role) {
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            mc.stop();
        } else {
            mc.resetFrameStop();
        }
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        mc.checkWaitingCallFun('frame2Call');
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 33;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 1;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "getup2";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 4;
        hitcheck_obj.freezeTime = 6;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 2;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "fire_m1";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }

    public static frame10(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}