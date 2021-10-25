class ryu_dragon{
	public static addSprite19920(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [23,ryu_dragon.frame23]);
		return;
	}
    public static frame23(mc: zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
    }
}
