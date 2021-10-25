class K_land3 {

    public static addSprite5308(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [12, K_land3.frame12]);
        return;
    }
    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");

    }
}