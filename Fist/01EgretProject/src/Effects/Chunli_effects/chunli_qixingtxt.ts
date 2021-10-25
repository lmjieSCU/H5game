class chunli_qixingtxt{
	public static addSprite16045(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,chunli_qixingtxt.frame1,35,chunli_qixingtxt.frame35]);
		mc.visible=false;
		mc["own_role"]=own_role;
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
		mc.visible=true;
		mc.x = (mc.parent.globalToLocal(GameConfig.FightWidth/2)).x;
		if(mc["own_role"].dir == -1)
		{
		mc.scaleX = mc.scaleX * -1;
        }
	}


	public static frame35(mc:zmovie.ZMovieClip){
        	mc.parent.removeChild(mc);
	}
}

