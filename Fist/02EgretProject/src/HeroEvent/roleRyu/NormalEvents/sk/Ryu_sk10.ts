class Ryu_sk10{
	public static addSprite20720(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_sk10.frame3,7,Ryu_sk10.frame7,34,Ryu_sk10.frame34]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		let a20717=Ryu_a20717.getInstance(_parentRole);
		a20717.s_type="s1";
		a20717.f_time=20;
		a20717.bgType="1";
		a20717.roleName="Ryu";
		a20717.faceName="";
	}

    public static frame7(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		Ryu_a20657.getInstance(_parentRole).name = "wave_s";
	}

    public static frame34(mc: zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
		_parentRole.toStatus_switch("stand");
	}
}
