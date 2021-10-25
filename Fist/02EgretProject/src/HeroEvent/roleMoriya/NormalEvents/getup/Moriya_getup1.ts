class Moriya_getup1 {
    public static addSprite3522(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Moriya_getup1.frame3, 4, Moriya_getup1.frame4, 23, Moriya_getup1.frame23, 24, Moriya_getup1.frame24, 32, Moriya_getup1.frame32, 33, Moriya_getup1.frame33]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a3511 = Moriya_a3511.getInstance(_parentRole);
        a3511.Vx = 8;
        a3511.Vy = 10;
        a3511.end_status = "none";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }


    public static frame23(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    }


    public static frame24(mc: zmovie.ZMovieClip) {
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

