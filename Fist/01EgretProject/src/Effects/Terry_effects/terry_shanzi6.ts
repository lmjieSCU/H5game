class terry_shanzi6{
	public static addSprite7971(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [14,terry_shanzi6.frame14]);
		return;
	}
    public static frame14(mc:zmovie.ZMovieClip){
       	mc.stop();
        mc.parent.removeChild(mc);
    }
}