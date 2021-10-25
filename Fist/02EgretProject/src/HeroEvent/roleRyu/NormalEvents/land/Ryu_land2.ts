class Ryu_land2{

	public static addSprite20381(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [8,Ryu_land2.frame8]);
		return;
	}
    public static frame8(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
