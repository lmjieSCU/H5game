class Terry_getup1 {

    public static addSprite8612(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3,Terry_getup1.frame3,4,Terry_getup1.frame4,18,Terry_getup1.frame18,19,Terry_getup1.frame19,33,Terry_getup1.frame33,34,Terry_getup1.frame34]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a6557 = Terry_a6557.getInstance(_parentRole);
        a6557.Vx = 8;
        a6557.Vy = 10;
        a6557.end_status = "none";
    }

    public static frame4(mc: zmovie.ZMovieClip){
        //Terry_getup1.mc.stop();
    }

    public static frame18(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
            mc.stop;
        }
    }

    public static frame19(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
            mc.prevFrame();
        }
    }

    public static frame33(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame34(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}