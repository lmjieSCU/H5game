class hitFire_cut{
	public static addSprite10621(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [12,hitFire_cut.frame12]);
		return;
	}
	public static frame12(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
	}
}


