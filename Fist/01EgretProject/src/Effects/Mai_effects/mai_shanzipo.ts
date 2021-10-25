class mai_shanzipo{
	public static addSprite7771(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [39,mai_shanzipo.frame39]);
		return;
	}
	public static frame39(mc:zmovie.ZMovieClip){
         mc.parent.removeChild(mc);
	}
}


