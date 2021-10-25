class K_burst_p {

    public static addSprite5319(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, K_burst_p.frame3, 5, K_burst_p.frame5]);
        return;
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        K_a725.getInstance(_parentRole).s_type = "s_power";
        _parentRole.powerBurst();
    }



    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}