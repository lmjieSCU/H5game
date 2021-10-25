class Moriya_roll_f {
    public static addSprite3410(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Moriya_roll_f.frame3, 15, Moriya_roll_f.frame15, 19, Moriya_roll_f.frame19]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 0;
        a3395.flag = "";
        a3395.target = "";
    }


    public static frame15(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

