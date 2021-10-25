class K_roll {

    public static addSprite5154(mc: zmovie.ZMovieClip, _parentRole: Role) {
        mc.addFrameScript(mc, [3, K_roll.frame3_5154, 14, K_roll.frame14_5154, 18, K_roll.frame18_5154]);
        return;
    }
    public static addSprite5159(mc: zmovie.ZMovieClip, _parentRole: Role) {
        mc.addFrameScript(mc, [3, K_roll.frame3_5159, 12, K_roll.frame12_5159, 16, K_roll.frame16_5159]);
        return;
    };


    public static frame3_5154(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let _a594 = K_a594.getInstance(_parentRole);
        _a594.Vx = 21;
        _a594.flag = "";
        _a594.target = "";
    }


    public static frame14_5154(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }



    public static frame18_5154(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        _parentRole.toStatus_switch("stand");
    }


    public static frame3_5159(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let _a594 = K_a594.getInstance(_parentRole);
        _a594.Vx = -21;
        _a594.flag = "";
        _a594.target = "";
    }



    public static frame12_5159(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }



    public static frame16_5159(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        _parentRole.toStatus_switch("stand");
    }
}