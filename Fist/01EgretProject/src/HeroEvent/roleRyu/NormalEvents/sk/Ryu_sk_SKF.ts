class Ryu_sk_SKF{

	public static addSprite20995(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_sk_SKF.frame1,10,Ryu_sk_SKF.frame10,14,Ryu_sk_SKF.frame14,25,Ryu_sk_SKF.frame25,26,Ryu_sk_SKF.frame26]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20994=Ryu_a20994.getInstance(_parentRole);
        a20994.shadow_name="Ryu_asuraSKshadow";
        a20994.start_alpha=70;
        a20994.end_alpha=10;
        a20994.d_alpha=5;
        a20994.add_interval=3;
        a20994._rb=15;
        a20994._gb=20;
        a20994._bb=190;
        _parentRole.checkTouch_stop = true;
    }

    public static frame10(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20994=Ryu_a20994.getInstance(_parentRole);
        a20994.shadow_name="Ryu_asuraSKshadow2";
        a20994.start_alpha=70;
        a20994.end_alpha=10;
        a20994.d_alpha=5;
        a20994.add_interval=3;
        a20994._rb=15;
        a20994._gb=20;
        a20994._bb=190;
        let a20401=Ryu_a20401.getInstance(_parentRole);
        a20401.Vx=40;
        a20401.flag="";
        a20401.target="";
    }
    public static frame14(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=50;
        a20238.Vy=0;
        a20238.Va=4;
        a20238.Vg=0;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="none";
    }

    public static frame25(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
    }
    

    public static frame26(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
