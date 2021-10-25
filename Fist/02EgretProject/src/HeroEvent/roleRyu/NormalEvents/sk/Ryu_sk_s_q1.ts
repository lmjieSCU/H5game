class Ryu_sk_s_q1 {

    public static addSprite21067(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Ryu_sk_s_q1.frame3, 5, Ryu_sk_s_q1.frame5, 8, Ryu_sk_s_q1.frame8, 35, Ryu_sk_s_q1.frame35, 40, Ryu_sk_s_q1.frame40, 64, Ryu_sk_s_q1.frame64]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1_s";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
        Ryu_a20657.getInstance(_parentRole).name = "ken_waveCannon";
    }

    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_speed1";
    }

    public static frame8(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "waveCannon";
    }

    public static frame35() { }

    public static frame40(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_black";
    }

    public static frame64(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
