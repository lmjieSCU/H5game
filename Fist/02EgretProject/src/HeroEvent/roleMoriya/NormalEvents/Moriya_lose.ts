class Moriya_lose{
	public static addSprite3316(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [55,Moriya_lose.frame55]);
		return;
	}
	public static frame55(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}


