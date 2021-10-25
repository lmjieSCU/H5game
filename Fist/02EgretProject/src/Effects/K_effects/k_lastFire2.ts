class k_lastFire2 {
    public static addSprite6038(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, k_lastFire2.frame1, 42, k_lastFire2.frame42,]);
        mc.addWaitingCallFun(mc, ['frame1Call', k_lastFire2.frame1Call, [mc, own_role]]);
        return;
    }
    public static frame1Call(mc: zmovie.ZMovieClip,own_role: Role) {
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y;
    }
    public static frame1(mc:zmovie.ZMovieClip) {
        // numMax = 15;
        //color1 = "fire_red1";
        // color2 = "fire_red2";
        // k_lastFire2.role_mc.changeColor("fire",1000);
        mc.checkWaitingCallFun('frame1Call');
    }

    public static frame42(mc:zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }

}