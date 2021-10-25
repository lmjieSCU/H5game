class Moriya_burst3 {
    public static addSprite3560(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Moriya_burst3.frame3, 6, Moriya_burst3.frame6]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a3555 = Moriya_a3555.getInstance(_parentRole);
        a3555.s_type = "s_power";
        _parentRole.powerBurst();
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}


