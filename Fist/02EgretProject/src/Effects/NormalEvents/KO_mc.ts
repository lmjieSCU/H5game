class KO_mc {

    public static addSprite9916(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [47, KO_mc.frame47]);
        return;
    }
    public static frame47(mc: zmovie.ZMovieClip) {
        _level0.gameEnd();
        mc.parent.removeChild(mc);
    }

}