class Mai_hurt3{
	public static addSprite6540(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Mai_hurt3.frame1,20,Mai_hurt3.frame20]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        let a6519=Mai_a6519.getInstance(_parentRole);
        a6519.soundArray=[];
        a6519.soundArray[0]="mai_hurt3";
        a6519.soundArray[1]="mai_hurt4";
        a6519.soundArray[2]="none";
        a6519.startPos=0;
        a6519.loop=1;
	}


	public static frame20(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}

