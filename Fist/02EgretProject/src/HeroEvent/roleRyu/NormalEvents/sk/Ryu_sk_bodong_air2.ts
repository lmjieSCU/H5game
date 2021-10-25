class Ryu_sk_bodong_air2{
	public static addSprite20715(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_sk_bodong_air2.frame1,3,Ryu_sk_bodong_air2.frame3,25,Ryu_sk_bodong_air2.frame25]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238=Ryu_a20238.getInstance(_parentRole);
        a20238.Vx=-5;
        a20238.Vy=18;
        a20238.Va=0;
        a20238.Vg=3.5;
        a20238.Vx_min=0;
        a20238.posY2="";
        a20238.flag="";
        a20238.end_status="land2";
    }

    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
         Ryu_a20657.getInstance(_parentRole).name = "wave_air3";
    }

    public static frame25(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}
