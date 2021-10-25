class Kula_getup2 {
    public static addSprite19106(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [6, Kula_getup2.frame6, 9, Kula_getup2.frame9, 26, Kula_getup2.frame26, 27, Kula_getup2.frame27, 38, Kula_getup2.frame38, 39, Kula_getup2.frame39]);
        return;
    }
    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a19082 = Kula_a19082.getInstance(_parentRole);
        a19082.Vx = 10;
        a19082.Vy = 18;
        a19082.end_status = "none";
    }


    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }


    public static frame26(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }

    }


    public static frame27(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    }


    public static frame38(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }


    public static frame39(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
