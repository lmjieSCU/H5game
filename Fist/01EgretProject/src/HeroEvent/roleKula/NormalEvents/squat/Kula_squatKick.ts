class Kula_squatKick {
    public static addSprite19316(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [4, Kula_squatKick.frame4, 5, Kula_squatKick.frame5, 18, Kula_squatKick.frame18]);
        return;
    }
    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt5";
        htcheck.flag = 1;
        htcheck.end_status = "getup1";
        htcheck.Vx = 12;
        htcheck.Vy = 31;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "down";
    }


    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}