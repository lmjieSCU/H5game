class Ryu_land3 {

    public static addSprite20382(mc: zmovie.ZMovieClip, own_role: Role) {

        mc.addFrameScript(mc, [12, Ryu_land3.frame12]);
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
