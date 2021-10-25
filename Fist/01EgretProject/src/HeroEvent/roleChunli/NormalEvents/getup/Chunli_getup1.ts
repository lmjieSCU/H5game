class Chunli_getup1{
	public static addSprite14628(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_getup1.frame3,4,Chunli_getup1.frame4,18,Chunli_getup1.frame18,19,Chunli_getup1.frame19,39,Chunli_getup1.frame39,40,Chunli_getup1.frame40]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a3511=Chunli_a3511.getInstance(_parentRole);
        a3511.Vx=8;
        a3511.Vy=10;
        a3511.end_status="none";
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
            mc.stop();
        }
    }

    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
            mc.prevFrame();
        }

    }

    public static frame39(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }
    

    public static frame40(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
