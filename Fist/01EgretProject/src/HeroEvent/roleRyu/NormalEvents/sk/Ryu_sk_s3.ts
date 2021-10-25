class Ryu_sk_s3 {
    public static addSprite21061(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, Ryu_sk_s3.frame1, 3, Ryu_sk_s3.frame3, 37, Ryu_sk_s3.frame37, 48, Ryu_sk_s3.frame48, 67, Ryu_sk_s3.frame67, 68, Ryu_sk_s3.frame68, 69, Ryu_sk_s3.frame69, 70, Ryu_sk_s3.frame70, 72, Ryu_sk_s3.frame72, 75, Ryu_sk_s3.frame75, 83, Ryu_sk_s3.frame83, 93, Ryu_sk_s3.frame93, 95, Ryu_sk_s3.frame95, 97, Ryu_sk_s3.frame97, 99, Ryu_sk_s3.frame99, 101, Ryu_sk_s3.frame101, 102, Ryu_sk_s3.frame102, 103, Ryu_sk_s3.frame103, 124, Ryu_sk_s3.frame124, 125, Ryu_sk_s3.frame125, 136, Ryu_sk_s3.frame136, 156, Ryu_sk_s3.frame156, 157, Ryu_sk_s3.frame157, 158, Ryu_sk_s3.frame158, 159, Ryu_sk_s3.frame159, 161, Ryu_sk_s3.frame161, 164, Ryu_sk_s3.frame164, 172, Ryu_sk_s3.frame172, 182, Ryu_sk_s3.frame182, 184, Ryu_sk_s3.frame184, 186, Ryu_sk_s3.frame186, 188, Ryu_sk_s3.frame188, 190, Ryu_sk_s3.frame190, 191, Ryu_sk_s3.frame191, 192, Ryu_sk_s3.frame192, 213, Ryu_sk_s3.frame213]);
        mc['own_role'] = own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let a20717 = Ryu_a20717.getInstance(mc["own_role"]);
        a20717.s_type = "s1";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    }

    public static frame3(mc: zmovie.ZMovieClip) {
        let hold_mc = Ryu_a20604.getInstance(mc["own_role"]);
        hold_mc.keyArray = [];
        hold_mc.keyArray[0] = mc["own_role"]._punchButton;
        hold_mc.holdFunc = function () {            
         };
        hold_mc.releaseFunc = function (mc: zmovie.ZMovieClip) {
            if (mc.getCurrFrame() > 35) {
                mc["own_role"].bodyMC.gotoAndStop("att_pofang");
            }
            else {
                mc["own_role"].bodyMC.gotoAndStop("att1");
            }
        };
        hold_mc.endFunc = function (mc: zmovie.ZMovieClip) {
            mc["own_role"].bodyMC.gotoAndStop("att_pofang");
        };
    }

    public static frame37(mc: zmovie.ZMovieClip) {
        let a20799 = Ryu_a20799.getInstance(mc["own_role"]);
        a20799.Vx = 37;
        a20799.Vy = 0;
        a20799.Va = 0;
        a20799.S = 270;
        a20799.dis = 0;
        a20799.attFrame = "hit1";
        a20799.endFrame = "nohit";
        a20799.target = "stand";
        a20799.nohit_status = "";
        Ryu_a20761.getInstance(mc["own_role"]).effName = "bgEff_speed1";
    }

    public static frame48(mc: zmovie.ZMovieClip) {
        Ryu_a20761.getInstance(mc["own_role"]).effName = "";
    }

    public static frame67(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }

    public static frame68(mc: zmovie.ZMovieClip) {
        Ryu_a20761.getInstance(mc["own_role"]).effName = "bgEff_black";
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = "";
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 3;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 8;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame69(mc: zmovie.ZMovieClip) {
        Ryu_a20802.getInstance(mc["own_role"]).nohitFrame = "nohit";
    }

    public static frame70(mc: zmovie.ZMovieClip) {
        let a20745 = Ryu_a20745.getInstance(mc["own_role"]);
        a20745.status_1 = "hurt2";
        a20745.flag = "s_catch";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(mc["own_role"])._name = "Ryu_a20744"
    }

    public static frame72() {
        //continueHit = true;
    }

    public static frame75(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 15;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame83(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 15;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame93(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame95(mc: zmovie.ZMovieClip) {
        let a20238 = Ryu_a20238.getInstance(mc["own_role"]);
        a20238.Vx = 10;
        a20238.Vy = 40;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land3";
        Ryu_a20761.getInstance(mc["own_role"]).effName = "bgEff_black";
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame97(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame99(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame101(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame102() {
        //continueHit = false;
    }

    public static frame103(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 25;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame124(mc: zmovie.ZMovieClip) {
        mc.stop();
    }

    public static frame125(mc: zmovie.ZMovieClip) {
        Ryu_a20761.getInstance(mc["own_role"]).effName = "bgEff_speed1";

        let a20799 = Ryu_a20799.getInstance(mc["own_role"]);
        a20799.Vx = 37;
        a20799.Vy = 0;
        a20799.Va = 0;
        a20799.S = 270;
        a20799.dis = 0;
        a20799.attFrame = "hit2";
        a20799.endFrame = "nohit";
        a20799.target = "stand";
        a20799.nohit_status = "";
    }

    public static frame136(mc: zmovie.ZMovieClip) {
        Ryu_a20761.getInstance(mc["own_role"]).effName = "";
    }

    public static frame156(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }

    public static frame157(mc: zmovie.ZMovieClip) {
        Ryu_a20761.getInstance(mc["own_role"]).effName = "bgEff_speed1";

        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt2";
        hitcheck.flag = "";
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 3;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 8;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = true;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "all";
    }

    public static frame158(mc: zmovie.ZMovieClip) {
        Ryu_a20802.getInstance(mc["own_role"]).nohitFrame = "nohit";
    }

    public static frame159(mc: zmovie.ZMovieClip) {
        let a20745 = Ryu_a20745.getInstance(mc["own_role"]);
        a20745.status_1 = "hurt2";
        a20745.flag = "s_catch";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(mc["own_role"])._name = "Ryu_a20744"
    }

    public static frame161() {
        //continueHit = true;
    }

    public static frame164(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 15;
        hitcheck.slowTime = 0;
        hitcheck.shake = 2;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame172(mc: zmovie.ZMovieClip) {

        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt2";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 20;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 5;
        hitcheck.freezeTime = 15;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = ""
    }

    public static frame182(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame184(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";

        let a20238 = Ryu_a20238.getInstance(mc["own_role"]);
        a20238.Vx = 10;
        a20238.Vy = 40;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land3";
        Ryu_a20761.getInstance(mc["own_role"]).effName = "bgEff_black";
    }

    public static frame186(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame188(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame190(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 30;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 1;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.3;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame191() {
        //continueHit = false;
    }

    public static frame192(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 25;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 3;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_s1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame213(mc: zmovie.ZMovieClip) {
        mc.stop();
    }
}
