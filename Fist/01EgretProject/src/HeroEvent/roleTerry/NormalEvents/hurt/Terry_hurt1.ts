class Terry_hurt1 {

    public static addSprite8564(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2,Terry_hurt1.frame2,13,Terry_hurt1.frame13,14,Terry_hurt1.frame14,19,Terry_hurt1.frame19,20,Terry_hurt1.frame20]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // soundArray = [];
        // soundArray[0] = "none";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    }

    public static frame13(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame14(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

    public static frame19(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame20(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}