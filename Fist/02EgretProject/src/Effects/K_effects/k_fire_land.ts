class k_fire_land{
	public static addSprite4690(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [25,k_fire_land.frame25,]);
		return;
	}
    public static frame25(mc:zmovie.ZMovieClip){
		mc.stop();
        mc.parent.removeChild(mc);
	}
}
