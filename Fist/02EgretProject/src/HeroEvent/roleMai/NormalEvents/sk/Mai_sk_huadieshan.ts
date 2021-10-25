class Mai_sk_huadieshan{
	public static addSprite6927(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [9,Mai_sk_huadieshan.frame9,27,Mai_sk_huadieshan.frame27]);
		return;
	}
	public static frame9(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        
        let a6914=Mai_a6914.getInstance(_parentRole);
        a6914.name="mai_shanzi1";
	}


	public static frame27(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}


