class Mai_burst {
    public static addSprite6595(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Mai_burst.frame3, 6, Mai_burst.frame6]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a6594 = Mai_a6594.getInstance(_parentRole);
        a6594.s_type = "s_attack";
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




