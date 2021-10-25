class Chunli_begin2 {


    public static addSprite14121(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [94, Chunli_begin2.frame94]);
        return;
    }


    public static frame94(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
    }
}