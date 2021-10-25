class Chunli_roll_b{
	public static addSprite14363(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Chunli_roll_b.frame3,14,Chunli_roll_b.frame14,18,Chunli_roll_b.frame18]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = -26;
        a3395.flag = "";
        a3395.target = "";
    }

    public static frame14(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.bodyTouch();
    }

    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
