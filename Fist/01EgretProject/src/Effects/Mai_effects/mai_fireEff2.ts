class mai_fireEff2{
	public static addSprite7829(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [7,mai_fireEff2.frame7]);
		return;
	}
	public static frame7(mc:zmovie.ZMovieClip){
        	mc.parent.removeChild(mc);
	}
}


