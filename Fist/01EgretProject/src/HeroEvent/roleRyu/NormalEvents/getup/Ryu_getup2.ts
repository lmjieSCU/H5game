class Ryu_getup2 {

    public static addSprite20377(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Ryu_getup2.frame3, 30, Ryu_getup2.frame30, 31, Ryu_getup2.frame31, 36, Ryu_getup2.frame36, 37, Ryu_getup2.frame37,]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let a20346 = Ryu_a20346.getInstance(EventUtil.getRole_Parent(mc));
        a20346.Vx = 10;
        a20346.Vy = 18;
        a20346.end_status = "none";
    }

    public static frame30(mc: zmovie.ZMovieClip) {
        if (EventUtil.getRole_Parent(mc).isKO) {
            mc.stop();
        }

    }

    public static frame31(mc: zmovie.ZMovieClip) {
        if (EventUtil.getRole_Parent(mc).isKO) {
            mc.prevFrame();
        }

    }

    public static frame36(mc: zmovie.ZMovieClip) {
        EventUtil.getRole_Parent(mc).status_3 = "";
    }

    public static frame37(mc: zmovie.ZMovieClip) {
        EventUtil.getRole_Parent(mc).toStatus_switch("stand");
    }
}
