class Kula_hurt5 {
    public static addSprite19076(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Kula_hurt5.frame1, 12, Kula_hurt5.frame12]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a6519 = Kula_a6519.getInstance(_parentRole);
        a6519.soundArray = [];
        a6519.soundArray[0] = "kula_hurt1";
        a6519.soundArray[1] = "kula_hurt2";
        a6519.soundArray[2] = "none";
        a6519.soundArray[3] = "none";
        a6519.startPos = 0;
        a6519.loop = 1;
    }


    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }


}