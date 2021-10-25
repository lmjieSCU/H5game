class Moriya_sk_buyue1 {
    public static addSprite4112(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Moriya_sk_buyue1.frame3, 4, Moriya_sk_buyue1.frame4, 9, Moriya_sk_buyue1.frame9, 17, Moriya_sk_buyue1.frame17]);
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


    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 5;
        a3395.flag = "";
        a3395.target = "";
        // var pos =_parentRole.opp._x + 100 * _parentRole.dir + _level0.char_mc._x;
        // if(pos > _level0.egde_max)
        // {
        // pos = _level0.egde_max;
        // }
        // else if(pos < _level0.egde_min)
        // {
        // pos = _level0.egde_min;
        // }
        // _root.role_mc._x = pos - _level0.char_mc._x;
        // _parent.checkSide_abs();
        // _parent.checkTouch_stop = false;
        // _parent.checkTouch(0);
    }


    public static frame17(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

