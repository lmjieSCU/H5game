class Kula_sk_s_xingchen {
    public static addSprite19599(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_xingchen.frame2, 4, Kula_sk_s_xingchen.frame4, 5, Kula_sk_s_xingchen.frame5, 67, Kula_sk_s_xingchen.frame67, 75, Kula_sk_s_xingchen.frame75, 86, Kula_sk_s_xingchen.frame86, 87, Kula_sk_s_xingchen.frame87, 95, Kula_sk_s_xingchen.frame95, 105, Kula_sk_s_xingchen.frame105, 121, Kula_sk_s_xingchen.frame121]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s2";
        a19530.f_time = 20;
        a19530.bgType = "2";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "bgEff_speed1";

        let a19574 = Kula_a19574.getInstance(_parentRole);
        a19574.name = "kula_ice_xingchen";
        a19574.numMax = 30;
        a19574.intvalFrame = 2;
        a19574.lastObj = "kula_ice_xingchen_end";
    }


    public static frame67(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    }


    public static frame75(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a7153 = Kula_a7153.getInstance(_parentRole);
        a7153.nohitFrame = "end";
    }


    public static frame86(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s3";
        a19530.f_time = 20;
        a19530.bgType = "0";
        a19530.roleName = "";
        a19530.faceName = "";
    }


    public static frame87(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
         Kula_a7159.getInstance(_parentRole).effName = "kula_jiejie_bg";
    }


    public static frame95(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFall_big";
    }


    public static frame105(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "";
    }


    public static frame121(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}