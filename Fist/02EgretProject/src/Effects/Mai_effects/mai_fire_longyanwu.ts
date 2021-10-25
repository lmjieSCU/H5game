class mai_fire_longyanwu{
	public static addSprite7828(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [24,mai_fire_longyanwu.frame24]);
		return;
	}
	public static frame24(mc:zmovie.ZMovieClip){
         mc.parent.removeChild(mc);
	}
}


