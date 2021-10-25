class fire6 {
    public static addSprite4918(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [11, fire6.frame11]);
        return;
    }

    public static frame11(mc:zmovie.ZMovieClip) {
        // _level0.fire2_snd.start();
      mc.parent.removeChild(mc);
    }

}