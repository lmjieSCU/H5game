class Chunli_burst{
	public static addSprite14655(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Chunli_burst.frame4,7,Chunli_burst.frame7]);
		return;
	}
    public static frame4(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.powerBurst();
        Chunli_a3555.getInstance(_parentRole).s_type="s_attack"
    }

    public static frame7(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
