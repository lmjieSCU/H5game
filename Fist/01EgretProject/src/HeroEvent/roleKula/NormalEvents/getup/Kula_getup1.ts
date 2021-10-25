class Kula_getup1 {
    public static addSprite19095(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Kula_getup1.frame3, 4, Kula_getup1.frame4, 19, Kula_getup1.frame19, 20, Kula_getup1.frame20, 28, Kula_getup1.frame28, 29, Kula_getup1.frame29]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a19082 = Kula_a19082.getInstance(_parentRole);
        a19082.Vx = 8;
        a19082.Vy = 10;
        a19082.end_status = "none";
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    }


    public static frame20(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }

    }


    public static frame28(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }


    public static frame29(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}