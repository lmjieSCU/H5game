class Chunli_burst3{
	public static addSprite14657(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Chunli_burst3.frame4,7,Chunli_burst3.frame7]);
		return;
	}
    public static frame4(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3555.getInstance(_parentRole).s_type="s_power";
        _parentRole.powerBurst();
    }

    public static frame7(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
