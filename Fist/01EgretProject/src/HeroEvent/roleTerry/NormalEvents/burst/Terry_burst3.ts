class Terry_burst3 {

    public static addSprite8661(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [4,Terry_burst3.frame4,7,Terry_burst3.frame7]);
        return;
    }
    public static frame4(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6594.getInstance(_parentRole).s_type = "s_power";
        _parentRole.powerBurst();
    }

    public static frame7(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}