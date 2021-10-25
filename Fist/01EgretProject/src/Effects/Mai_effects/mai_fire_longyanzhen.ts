class mai_fire_longyanzhen{
	public static addSprite7848(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [16,mai_fire_longyanzhen.frame16]);
		return;
	}
	public static frame16(mc:zmovie.ZMovieClip){
         mc.parent.removeChild(mc);
	}
}


