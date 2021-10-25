class Mai_hurt1{
	public static addSprite6524(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Mai_hurt1.frame2,13,Mai_hurt1.frame13,14,Mai_hurt1.frame14,19,Mai_hurt1.frame19,20,Mai_hurt1.frame20]);
		return;
	}
	public static frame2(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        let a6519=Mai_a6519.getInstance(_parentRole);
        a6519.soundArray=[];
        a6519.soundArray[0]="mai_hurt1";
        a6519.soundArray[1]="mai_hurt2";
        a6519.soundArray[2]="none";
        a6519.soundArray[3]="none";
        a6519.startPos=0;
        a6519.loop=1;
	}


	public static frame13(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.status_3 = "";
	}


	public static frame14(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}


	public static frame19(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.status_3 = "";
	}


	public static frame20(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}
