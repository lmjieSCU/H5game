class m_slash_1{
	public static addSprite11415(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,m_slash_1.frame1,8,m_slash_1.frame8]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
        //_level0.effect_mc.fgEff_start("fgEff_black");
	}


	public static frame8(mc:zmovie.ZMovieClip){
        //_level0.effect_mc.fgEff_start("");
        mc.parent.removeChild(mc);
	}
}


