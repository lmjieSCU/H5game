class K_pitch {

    public static addSprite5558(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_pitch.frame1, 15, K_pitch.frame15, 32, K_pitch.frame32]);
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a5537 = K_a5537.getInstance(_parentRole);
        a5537.hurt = false;
        a5537.land = true;
        a5537.downHit = false;
        a5537.status_1 = "hurt2";
        a5537.flag = "s3";
        return;
    }

    public static frame15(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 20;
        hitcheck.Vy = 40;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 7;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 1.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        return;
    }

    public static frame32(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

}