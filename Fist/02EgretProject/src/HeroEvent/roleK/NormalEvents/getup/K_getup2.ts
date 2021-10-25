class K_getup2 {

    public static addSprite5295(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, K_getup2.frame2, 27, K_getup2.frame27, 28, K_getup2.frame28, 36, K_getup2.frame36, 37, K_getup2.frame37]);
        return;
    }

    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a687 = K_a687.getInstance(_parentRole);
        a687.Vx = 10;
        a687.Vy = 18;
        a687.end_status = "none";
    }


    public static frame27(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    }

    public static frame28(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    }


    public static frame36(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame37(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


}