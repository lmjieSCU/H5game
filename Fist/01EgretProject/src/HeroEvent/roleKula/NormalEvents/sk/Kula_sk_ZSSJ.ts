class Kula_sk_ZSSJ {
    public static addSprite19678(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Kula_sk_ZSSJ.frame3, 19, Kula_sk_ZSSJ.frame19, 21, Kula_sk_ZSSJ.frame21, 30, Kula_sk_ZSSJ.frame30]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 0;
        a19418.Vy = 10;
        a19418.Va = 0;
        a19418.Vg = 1;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    }


    public static frame19(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_snow_sheji1";
    }


    public static frame21(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 0;
        a19418.Vy = 1;
        a19418.Va = 0;
        a19418.Vg = 0;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    }


    public static frame30(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }
}