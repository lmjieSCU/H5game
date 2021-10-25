class m_moonlight{
	public static addSprite4263(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,m_moonlight.frame1,13,m_moonlight.frame13]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
        mc.x = mc.x + Math.floor(Math.random() * 100 - 50);
        mc.y = mc.y + Math.floor(Math.random() * 100 - 50);
	}


	public static frame13(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
	}
}


