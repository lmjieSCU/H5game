class wave {
    public static addSprite20011(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, wave.frame2, 10, wave.frame10]);
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
        mc.stop();
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 35;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt1";
        hitcheck_obj.hurtAway = "hurt6";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 35;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 4;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 1;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_s1";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
    }

    public static frame10(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}