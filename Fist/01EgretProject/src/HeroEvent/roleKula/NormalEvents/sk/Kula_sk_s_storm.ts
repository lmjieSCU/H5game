class Kula_sk_s_storm {
    public static addSprite19712(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Kula_sk_s_storm.frame3, 7, Kula_sk_s_storm.frame7, 9, Kula_sk_s_storm.frame9, 35, Kula_sk_s_storm.frame35]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "bgEff_speed1";
        let a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s2";
        a19530.f_time = 20;
        a19530.bgType = "2";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_storm";
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19549 = Kula_a19549.getInstance(_parentRole);
        a19549.soundArray = [];
        a19549.soundArray[0] = "kula_s6";
        a19549.startPos = 0;
        a19549.loop = 1;
    }


    public static frame35(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}