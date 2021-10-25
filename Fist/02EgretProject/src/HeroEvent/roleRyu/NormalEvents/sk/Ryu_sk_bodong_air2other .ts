class Ryu_sk_bodong_air2other{
	public static addSprite20716(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3,Ryu_sk_bodong_air2other.frame3,25,Ryu_sk_bodong_air2other.frame25]);
		return;
	}
    public static frame3(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
         Ryu_a20657.getInstance(_parentRole).name = "wave_air";
    }

    public static frame25(mc: zmovie.ZMovieClip){
        mc.stop();
    }
}