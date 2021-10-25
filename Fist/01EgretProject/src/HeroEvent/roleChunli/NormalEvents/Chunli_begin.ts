class Chunli_begin {


    public static addSprite14081(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [65, Chunli_begin.frame65]);
        return;
    }


    public static frame65(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
    }
}

