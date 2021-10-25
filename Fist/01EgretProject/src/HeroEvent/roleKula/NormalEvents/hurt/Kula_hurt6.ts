class Kula_hurt6{
	public static addSprite19077(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [12,Kula_hurt6.frame12]);
		return;
	}
	public static frame12(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}