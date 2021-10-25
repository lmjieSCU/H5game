class Moriya_punch_l {
    public static addSprite3578(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Moriya_punch_l.frame1, 2, Moriya_punch_l.frame2, 3, Moriya_punch_l.frame3, 13, Moriya_punch_l.frame13]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3563 = Moriya_a3563.getInstance(_parentRole);
        a3563.flag = "punch_l2";

        let a3565 = Moriya_a3565.getInstance(_parentRole);
        a3565.soundArray = [];
        a3565.soundArray[0] = "m_hit_v_l1";
        a3565.soundArray[1] = "m_hit_v_l2";
        a3565.soundArray[2] = "none";
        a3565.startPos = 0;
        a3565.loop = 1;
    }


    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.pl_snd.start();
    }


    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = "s2";
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame13(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

