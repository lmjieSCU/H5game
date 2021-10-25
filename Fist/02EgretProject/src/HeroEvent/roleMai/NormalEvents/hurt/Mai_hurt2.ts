class Mai_hurt2{
	public static addSprite6531(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2,Mai_hurt2.frame2,13,Mai_hurt2.frame13,14,Mai_hurt2.frame14,20,Mai_hurt2.frame20,21,Mai_hurt2.frame21,22,Mai_hurt2.frame22,23,Mai_hurt2.frame23]);
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


	public static frame20(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.status_3 = "";
	}


	public static frame21(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}


	public static frame22(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}


	public static frame23(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.mc.prevFrame();
	}
}
