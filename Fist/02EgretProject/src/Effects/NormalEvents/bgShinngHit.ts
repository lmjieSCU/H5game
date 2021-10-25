class bgShinngHit{
	public static addSprite10970(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,bgShinngHit.frame1,2,bgShinngHit.frame2,3,bgShinngHit.frame3,4,bgShinngHit.frame4,5,bgShinngHit.frame5]);
		return;
	}
    public static frame1(mc:zmovie.ZMovieClip){
        mc.stop();
        mc.visible = false;
    }

    public static frame2(mc:zmovie.ZMovieClip){
        mc.visible = true;
    }

    public static frame3(mc:zmovie.ZMovieClip){
        mc.gotoAndStop("end");
        mc.visible = false;
    }

    public static frame4(mc:zmovie.ZMovieClip){
        mc.visible = true;
    }

    public static frame5(mc:zmovie.ZMovieClip){
        mc.gotoAndStop("end2");
        mc.visible = false;
    }
}
