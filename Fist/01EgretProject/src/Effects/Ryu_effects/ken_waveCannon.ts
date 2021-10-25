class ken_waveCannon {
    
    public static addSprite21094(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [35, ken_waveCannon.frame35, 107, ken_waveCannon.frame107]);
        mc.addWaitingCallFun(mc, ['frame35Call', ken_waveCannon.frame35Call, [mc, own_role]]);
        return;
    }

    public static frame35Call(mc: zmovie.ZMovieClip, own_role: Role) {
        Ryu_a21089.getInstance(own_role).name = "waveCannon";
    }

    public static frame35(mc: zmovie.ZMovieClip) {
        mc.checkWaitingCallFun('frame35Call');
    }

    public static frame107(mc: zmovie.ZMovieClip) {
        mc.stop();
        mc.parent.removeChild(mc);
    }

}
