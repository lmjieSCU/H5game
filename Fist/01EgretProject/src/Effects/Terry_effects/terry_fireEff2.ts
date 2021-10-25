class terry_fireEff2{
	public static addSprite8032(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [11,terry_fireEff2.frame11]);
		return;
	}
    public static frame11(mc:zmovie.ZMovieClip){
        mc.stop();
        mc.parent.removeChild(mc);
    }
}