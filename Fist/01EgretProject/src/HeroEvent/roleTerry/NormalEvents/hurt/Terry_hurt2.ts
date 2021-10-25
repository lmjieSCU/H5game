class Terry_hurt2 {

    public static addSprite8573(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2,Terry_hurt2.frame2,13,Terry_hurt2.frame13,14,Terry_hurt2.frame14,20,Terry_hurt2.frame20,21,Terry_hurt2.frame21,22,Terry_hurt2.frame22,23,Terry_hurt2.frame23]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip){
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

    public static frame20(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame21(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

    public static frame22(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame23(mc: zmovie.ZMovieClip){
        mc.prevFrame();
    }
}