class Moriya_sk_feng {
    public static addSprite4199(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [5, Moriya_sk_feng.frame5, 45, Moriya_sk_feng.frame45]);
        return;
    }
    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s1";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Moriya";
        a4178.faceName = "";
        Moriya_a4196.getInstance(_parentRole).name = "moriya_fulong";
    }


    public static frame45(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

