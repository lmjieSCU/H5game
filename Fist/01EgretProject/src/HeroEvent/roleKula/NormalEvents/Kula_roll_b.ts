class Kula_roll_b {
    public static addSprite18972(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Kula_roll_b.frame3, 12, Kula_roll_b.frame12, 16, Kula_roll_b.frame16]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = -21;
        a18962.flag = "";
        a18962.target = "";
    }


    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }


    public static frame16(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}