class Ryu_roll{
	public static addSprite20239(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [4,Ryu_roll.frame4,7,Ryu_roll.frame7]);
		return;
	}
    public static addSprite20240(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_roll.frame3,5,Ryu_roll.frame5]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=-25;
        a20238.Vy=17;
        a20238.Va=0;
        a20238.Vg=0;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
    }

    public static frame5(mc: zmovie.ZMovieClip){
        mc.stop();
    }

    public static frame4(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=25;
        a20238.Vy=17;
        a20238.Va=0;
        a20238.Vg=0;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
    }

    public static frame7(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
