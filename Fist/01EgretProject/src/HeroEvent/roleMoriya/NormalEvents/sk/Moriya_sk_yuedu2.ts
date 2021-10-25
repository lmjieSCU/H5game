class Moriya_sk_yuedu2 {
    public static addSprite4172(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Moriya_sk_yuedu2.frame2, 14, Moriya_sk_yuedu2.frame14, 24, Moriya_sk_yuedu2.frame24, 28, Moriya_sk_yuedu2.frame28, 32, Moriya_sk_yuedu2.frame32, 38, Moriya_sk_yuedu2.frame38]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(20,"down");
        let a4116 = Moriya_a4116.getInstance(_parentRole);
        a4116.flag = "att";
        a4116.freeze = false;
        // function playSound() {
        //     var _loc2_ = new Sound(this);
        //     _loc2_.attachSound("defend.wav");
        //     _loc2_.start();
        // }
        // _parent.countStart(2, "down");
        // var owner = this;
        // s_mc.onHit = function () {
        //     owner.playSound();
        // };
    }


    public static frame14(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    }


    public static frame24(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame28(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 10;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame32(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    }


    public static frame38(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

