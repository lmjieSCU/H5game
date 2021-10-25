class Chunli_sk_shengtian {
        public static addSprite15245(mc: zmovie.ZMovieClip, own_role: Role) {
                mc.addFrameScript(mc, [1, Chunli_sk_shengtian.frame1, 5, Chunli_sk_shengtian.frame5, 7, Chunli_sk_shengtian.frame7, 9, Chunli_sk_shengtian.frame9, 11, Chunli_sk_shengtian.frame11, 15, Chunli_sk_shengtian.frame15, 19, Chunli_sk_shengtian.frame19, 23, Chunli_sk_shengtian.frame23, 31, Chunli_sk_shengtian.frame31]);
                return;
        }
        public static frame1(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                _parentRole.countStart(2, "up");
        }


        public static frame5(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                let a3395 = Chunli_a3395.getInstance(_parentRole);
                a3395.Vx = 35;
                a3395.flag = "";
                a3395.target = "";
                _parentRole.countEnd();
        }


        public static frame7(mc: zmovie.ZMovieClip) {

                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.5;
                htcheck.flag = 0.5;
                htcheck.g = 0;
                htcheck.Vy = 35;
                htcheck.a = 0;
                htcheck.Vx = 10;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame9(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }

                let a4023 = Chunli_a4023.getInstance(_parentRole);
                a4023.Vx = 10;
                a4023.Vy = 27;
                a4023.Va = 0;
                a4023.Vg = 2.5;
                a4023.Vx_min = 0;
                a4023.posY2 = "";
                a4023.flag = "";
                a4023.end_status = "land3";
        }


        public static frame11(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.5;
                htcheck.flag = 0.5;
                htcheck.g = 0;
                htcheck.Vy = 35;
                htcheck.a = 0;
                htcheck.Vx = 10;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame15(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.5;
                htcheck.flag = 0.5;
                htcheck.g = 0;
                htcheck.Vy = 35;
                htcheck.a = 0;
                htcheck.Vx = 10;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame19(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.5;
                htcheck.flag = 0.5;
                htcheck.g = 0;
                htcheck.Vy = 30;
                htcheck.a = 0;
                htcheck.Vx = 10;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame23(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 3;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire_h";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.5;
                htcheck.flag = 0.5;
                htcheck.g = 0;
                htcheck.Vy = 30;
                htcheck.a = 0;
                htcheck.Vx = 18;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame31(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                mc.stop();
        }
}

