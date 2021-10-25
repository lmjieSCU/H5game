class Kula_sk_tibing {
    public static addSprite19620(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Kula_sk_tibing.frame1, 4, Kula_sk_tibing.frame4, 14, Kula_sk_tibing.frame14, 26, Kula_sk_tibing.frame26, 44, Kula_sk_tibing.frame44]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1";
        a19530.f_time = 20;
        a19530.bgType = "1";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19498 = Kula_a19498.getInstance(_parentRole);
        a19498.flag = "att";
        a19498.defendSuper = true;
        a19498.obj_level = 1;
        // this.onEnterFrame = function () {
        //     if (_level0.inPause) {
        //         return undefined;
        //     }
        //     var _loc3_ = _root.role_mc.opp.getObj();
        //     if (s_mc.obj_level > _loc3_.area.obj_level) {
        //         if (s_mc.hitTest(_loc3_.area)) {
        //             _loc3_.area.hitBack();
        //             delete this.onEnterFrame;
        //             gotoAndStop("att");
        //             play();
        //         }
        //     }
        // };
    }


    public static frame14(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 14;
        htcheck.Vy = 40;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame26(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceKick";
    }


    public static frame44(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}