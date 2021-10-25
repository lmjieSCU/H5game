class Ryu_sk_bd_air_s {
    public static addSprite21018(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Ryu_sk_bd_air_s.frame1, 6, Ryu_sk_bd_air_s.frame6, 51, Ryu_sk_bd_air_s.frame51, 52, Ryu_sk_bd_air_s.frame52, 53, Ryu_sk_bd_air_s.frame53]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -5;
        a20238.Vy = 34;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    }

    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -5;
        a20238.Vy = 5;
        a20238.Va = 0;
        a20238.Vg = 0.2;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";

        let a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1_s";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    }

    public static frame51(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -5;
        a20238.Vy = 5;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    }

    public static frame52(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

    public static frame53(mc: zmovie.ZMovieClip) {
        mc.prevFrame();
    }
}
