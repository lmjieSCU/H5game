class Mai_punch_l {
    public static addSprite6606(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Mai_punch_l.frame2, 3, Mai_punch_l.frame3, 8, Mai_punch_l.frame8]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a6541 = Mai_a6541.getInstance(_parentRole);
        a6541.soundArray = [];
        a6541.soundArray[0] = "mai_att_l1";
        a6541.soundArray[1] = "mai_att_l2";
        a6541.soundArray[2] = "none";
        a6541.startPos = 0;
        a6541.loop = 1;
    }


    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }


        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = "s2";
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 2;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitfire_l";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";

        //_level0.pl_snd.start();
    }


    public static frame8(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

