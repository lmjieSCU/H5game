class K_hurt4 {

    public static addSprite5248(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, K_hurt4.frame1,10, K_hurt4.frame10]);
        mc['own_role'] = own_role;
        return;
    }

    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.hurtAway();
    }

    public static frame10(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop("s2");
    }

}