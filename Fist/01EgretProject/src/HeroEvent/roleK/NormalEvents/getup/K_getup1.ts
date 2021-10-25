class K_getup1 {

    public static addSprite5279(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, K_getup1.frame3, 4, K_getup1.frame4, 18, K_getup1.frame18, 19, K_getup1.frame19, 32, K_getup1.frame32, 33, K_getup1.frame33,]);
        return;
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a687 = K_a687.getInstance(_parentRole);
        a687.Vx = 8;
        a687.Vy = 10;
        a687.end_status = "none";
    }


    public static frame4() {
        // this.mc.stop();
    }

    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }

    }


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    }

    public static frame32(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }


    public static frame33(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}