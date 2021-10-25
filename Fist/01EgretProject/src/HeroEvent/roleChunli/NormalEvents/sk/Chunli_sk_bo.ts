class Chunli_sk_bo{
	public static addSprite15094(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [11,Chunli_sk_bo.frame11,30,Chunli_sk_bo.frame30]);
		return;
	}
	public static frame11(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
       Chunli_a4196.getInstance(_parentRole).name = "chunli_shanzi1";
	}


	public static frame30(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
}
