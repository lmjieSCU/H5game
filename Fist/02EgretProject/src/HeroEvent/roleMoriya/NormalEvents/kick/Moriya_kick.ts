class Moriya_kick {
    public static addSprite3688(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [4, Moriya_kick.frame4, 6, Moriya_kick.frame6, 9, Moriya_kick.frame9, 23, Moriya_kick.frame23]);
        return;
    }
    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3565 = Moriya_a3565.getInstance(_parentRole);
        a3565.soundArray = [];
        a3565.soundArray[0] = "m_hit_v_h3";
        a3565.soundArray[1] = "none";
        a3565.startPos = 0;
        a3565.loop = 1;
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.k_snd.start();
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 24;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 3;
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
        htcheck.hitPos = "";
    }


    public static frame23(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}


