class K_hurt2 {

    public static addSprite5230(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [11, K_hurt2.frame11, 12, K_hurt2.frame12, 18, K_hurt2.frame18, 19, K_hurt2.frame19, 20, K_hurt2.frame20, 21, K_hurt2.frame21]);
        return;
    }

    public static frame11(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.visible = true;
        _parentRole.status_3 = "";
    }


    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";

    }


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

    public static frame20(mc: zmovie.ZMovieClip) {
        mc.stop();
    }


    public static frame21(mc: zmovie.ZMovieClip) {
        mc.prevFrame();
    }

}