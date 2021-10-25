class Chunli_end{
	public static addSprite14142(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [80,Chunli_end.frame80]);
		return;
	}
    public static frame80(mc:zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }
}
