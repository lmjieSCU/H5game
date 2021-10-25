class Kula_lose{
	public static addSprite18855(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [63,Kula_lose.frame63]);
		return;
	}
	public static frame63(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}