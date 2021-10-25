class Kula_sk_dbk {
    public static addSprite19427(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Kula_sk_dbk.frame3, 6, Kula_sk_dbk.frame6, 7, Kula_sk_dbk.frame7, 17, Kula_sk_dbk.frame17, 20, Kula_sk_dbk.frame20, 28, Kula_sk_dbk.frame28]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 20;
        a19418.Vy = 30;
        a19418.Va = 0;
        a19418.Vg = 4;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    }


    public static frame6(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 4;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame17(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }

        let htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 20;
        htcheck.Vy = 20;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    }


    public static frame20(mc: zmovie.ZMovieClip) {
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


    public static frame28(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    }


}