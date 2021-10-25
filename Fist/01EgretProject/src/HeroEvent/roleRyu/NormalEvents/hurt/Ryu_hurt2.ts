class Ryu_hurt2{
	public static addSprite20319(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [11,Ryu_hurt2.frame11,12,Ryu_hurt2.frame12,17,Ryu_hurt2.frame17,18,Ryu_hurt2.frame18,]);
		return;
	}
    public static frame11(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    }

    public static frame12(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.toStatus_switch("stand");
	}

    public static frame17(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.status_3 = "";
	}

    public static frame18(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.toStatus_switch("stand");
	}
}


