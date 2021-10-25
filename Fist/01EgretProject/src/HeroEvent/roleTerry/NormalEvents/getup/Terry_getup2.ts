class Terry_getup2 {

    public static addSprite8631(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [5,Terry_getup2.frame5,9,Terry_getup2.frame9,22,Terry_getup2.frame22,23,Terry_getup2.frame23,35,Terry_getup2.frame35,36,Terry_getup2.frame36]);
        return;
    }
   public static frame5(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6557 = Terry_a6557.getInstance(_parentRole);
        a6557.Vx = 10;
        a6557.Vy = 18;
        a6557.end_status = "none";
   }

    public static frame9(mc: zmovie.ZMovieClip){
        //Terry_getup2.mc.stop();
    }

    public static frame22(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
            mc.stop;
        }
    }

    public static frame23(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
            mc.prevFrame();
        }
    }

    public static frame35(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame36(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

}