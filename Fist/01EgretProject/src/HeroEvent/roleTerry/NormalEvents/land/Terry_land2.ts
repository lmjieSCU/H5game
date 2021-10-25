class Terry_land2 {


    public static addSprite8633(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Terry_land.frame1, 4, Terry_land2.frame7]);
        return;
    }


    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }

    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}