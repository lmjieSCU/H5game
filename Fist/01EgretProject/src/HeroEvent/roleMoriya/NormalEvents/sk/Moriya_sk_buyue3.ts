class Moriya_sk_buyue3 {
    public static addSprite4115(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Moriya_sk_buyue3.frame3, 4, Moriya_sk_buyue3.frame4, 8, Moriya_sk_buyue3.frame8, 16, Moriya_sk_buyue3.frame16]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
    }


    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 53;
        a3395.flag = "";
        a3395.target = "";
    }


    public static frame8(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
        let dir = _parentRole.dir;
        // if (dir > 0) {
        //     _parentRole.x = 50 - _level0.char_mc._x;
        // }
        // else {
        //    _parentRole.x = _level0.stage_with - 50 - _level0.char_mc._x;
        // }

    }


    public static frame16(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}


