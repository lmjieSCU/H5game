class Ryu_burst3{
	public static addSprite20396(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_burst3.frame3,5,Ryu_burst3.frame5]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20393.getInstance(_parentRole).s_type = "s_power";
        _parentRole.powerBurst();
    }

    public static frame5(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}

