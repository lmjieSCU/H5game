class Moriya_getup2 {
    public static addSprite3537(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [4, Moriya_getup2.frame4, 6, Moriya_getup2.frame6, 22, Moriya_getup2.frame22, 23, Moriya_getup2.frame23, 35, Moriya_getup2.frame35, 36, Moriya_getup2.frame36]);
        return;
    }
    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3511 = Moriya_a3511.getInstance(_parentRole);
        a3511.Vx = 10;
        a3511.Vy = 18;
        a3511.end_status = "none";
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }


    public static frame22(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    }


    public static frame23(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO)
        {
            mc.prevFrame();
        }
    }


    public static frame35(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }


    public static frame36(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

