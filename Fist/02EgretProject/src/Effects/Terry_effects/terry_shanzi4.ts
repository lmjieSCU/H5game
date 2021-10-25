class terry_shanzi4{
	public static addSprite7941(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [18,terry_shanzi4.frame18]);
		return;
	}
    public static frame18(mc:zmovie.ZMovieClip){
        mc.stop();
        mc.parent.removeChild(mc);
    }
}