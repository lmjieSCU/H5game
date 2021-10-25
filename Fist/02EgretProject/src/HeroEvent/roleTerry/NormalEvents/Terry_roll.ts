class Terry_roll {


    public static addSprite8480(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Terry_roll.frame3_8480, 13, Terry_roll.frame13_8480, 16, Terry_roll.frame16_8480]);
        return;
    }
    public static addSprite8482(mc: zmovie.ZMovieClip, own_role: Role) {

        mc.addFrameScript(mc, [3, Terry_roll.frame3_8482, 12, Terry_roll.frame12_8482, 16, Terry_roll.frame16_8482]);
        return;
    };

    public static frame3_8480(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let _a594 = Terry_a6433.getInstance(_parentRole);
        _a594.Vx = 26;
        _a594.flag = "";
        _a594.target = "";
    }


    public static frame13_8480(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }

    public static frame16_8480(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame3_8482(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let _a594 = Terry_a6433.getInstance(_parentRole);
        _a594.Vx = -26;
        _a594.flag = "";
        _a594.target = "";
    }


    public static frame12_8482(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }

    public static frame16_8482(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }



}