class Kula_sk_s_jiejie {
    public static addSprite19617(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_jiejie.frame2, 3, Kula_sk_s_jiejie.frame3, 5, Kula_sk_s_jiejie.frame5, 20, Kula_sk_s_jiejie.frame20, 25, Kula_sk_s_jiejie.frame25, 65, Kula_sk_s_jiejie.frame65]);
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


    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_jiejie_char";
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "bgEff_speed1";
    }


    public static frame20(mc: zmovie.ZMovieClip) {
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


    public static frame25(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "kula_jiejie_bg";
        Kula_a19439.getInstance(_parentRole).name = "hitTest_jiejie";
    }


    public static frame65(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}