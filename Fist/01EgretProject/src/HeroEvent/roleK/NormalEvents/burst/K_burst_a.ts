class K_burst_a {


    public static addSprite5317(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, K_burst_a.frame3, 6, K_burst_a.frame6]);
        return;
    }


    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.powerBurst();
        K_a725.getInstance(_parentRole).s_type = "s_attack";

    }

    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}