class Ryu_getup1 {
    public static addSprite20361(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Ryu_getup1.frame3, 4, Ryu_getup1.frame4, 18, Ryu_getup1.frame18, 19, Ryu_getup1.frame19, 24, Ryu_getup1.frame24, 30, Ryu_getup1.frame30, 33, Ryu_getup1.frame33,]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20346 = Ryu_a20346.getInstance(_parentRole);
        a20346.Vx = 8;
        a20346.Vy = 10;
        a20346.end_status = "none";
    }

    public static frame4(mc: zmovie.ZMovieClip) {
         //mc.stop();
    }

    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.stop();
        }
    }

    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.isKO) {
            mc.prevFrame();
        }
    }

    public static frame24(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 1;
        a20238.Vy = 18;
        a20238.Va = 3;
        a20238.Vg = 5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "none";
    }

    public static frame30() {
        // this.mc.stop();
    }

    public static frame33(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
