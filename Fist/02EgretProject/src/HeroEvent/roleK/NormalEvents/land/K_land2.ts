class K_land2 {
    public static addSprite5301(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [6, K_land2.frame6]);
        return;
    }
    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");

    }
}