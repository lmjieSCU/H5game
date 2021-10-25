class Chunli_getup2{
	public static addSprite14631(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [5,Chunli_getup2.frame5,9,Chunli_getup2.frame9,22,Chunli_getup2.frame22,23,Chunli_getup2.frame23,40,Chunli_getup2.frame40,41,Chunli_getup2.frame41]);
		return;
	}
    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a3511=Chunli_a3511.getInstance(_parentRole);
        a3511.Vx=10;
        a3511.Vy=18;
        a3511.end_status="none";
    }

    public static frame9(mc: zmovie.ZMovieClip) {

        mc.stop();
    }

    public static frame22(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
        mc.stop();
        }

    }

    public static frame23(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if(_parentRole.isKO){
        mc.prevFrame();
        }
    }

    public static frame40(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame41(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

