class Mai_hurt4{
	public static addSprite6550(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Mai_hurt4.frame2,12,Mai_hurt4.frame12]);
		return;
	}
	public static frame2(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        
        let a6541=Mai_a6541.getInstance(_parentRole);
        a6541.soundArray=[];
        a6541.soundArray[0]="mai_hurt3";
        a6541.soundArray[1]="mai_hurt4";
        a6541.startPos=0;
        a6541.loop=1;
	}


	public static frame12(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.gotoAndStop("s2");
	}
}


