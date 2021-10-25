class Kula_sk_dbk_l {
    public static addSprite19429(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Kula_sk_dbk_l.frame3, 8, Kula_sk_dbk_l.frame8, 10, Kula_sk_dbk_l.frame10, 12, Kula_sk_dbk_l.frame12, 18, Kula_sk_dbk_l.frame18]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 18;
        a19418.Vy = 25;
        a19418.Va = 0;
        a19418.Vg = 4.5;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    }


    public static frame8(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    }


    public static frame10(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame12(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // keyCode_dir = "f";
        // keyCode = "k";
        // keyCode_dir = "f";
        // keyCode = "k_l";
        // var onwer = this;
        // key_mc.pressFunc = function () {
        //     onwer.nextSkill = "sk_tibing0";
        // };
        // key2_mc.pressFunc = function () {
        //     onwer.nextSkill = "sk_huaxing";
        // };
        // _root.role_mc.CPU_check("xuanzhuan");
    }


    public static frame18(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }
}