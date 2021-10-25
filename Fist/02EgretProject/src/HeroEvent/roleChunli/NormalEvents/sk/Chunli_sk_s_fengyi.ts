class Chunli_sk_s_fengyi {
        public static addSprite15382(mc: zmovie.ZMovieClip, own_role: Role) {
                mc.addFrameScript(mc, [4, Chunli_sk_s_fengyi.frame4, 6, Chunli_sk_s_fengyi.frame6, 7, Chunli_sk_s_fengyi.frame7, 9, Chunli_sk_s_fengyi.frame9, 12, Chunli_sk_s_fengyi.frame12, 13, Chunli_sk_s_fengyi.frame13, 15, Chunli_sk_s_fengyi.frame15, 18, Chunli_sk_s_fengyi.frame18, 21, Chunli_sk_s_fengyi.frame21, 24, Chunli_sk_s_fengyi.frame24, 27, Chunli_sk_s_fengyi.frame27, 28, Chunli_sk_s_fengyi.frame28, 29, Chunli_sk_s_fengyi.frame29, 35, Chunli_sk_s_fengyi.frame35, 36, Chunli_sk_s_fengyi.frame36, 39, Chunli_sk_s_fengyi.frame39, 42, Chunli_sk_s_fengyi.frame42, 45, Chunli_sk_s_fengyi.frame45, 48, Chunli_sk_s_fengyi.frame48, 51, Chunli_sk_s_fengyi.frame51, 54, Chunli_sk_s_fengyi.frame54, 57, Chunli_sk_s_fengyi.frame57, 60, Chunli_sk_s_fengyi.frame60, 64, Chunli_sk_s_fengyi.frame64, 81, Chunli_sk_s_fengyi.frame81]);
                return;
        }
        public static frame4(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                let a4178 = Chunli_a4178.getInstance(_parentRole);
                a4178.s_type = "s1";
                a4178.f_time = 20;
                a4178.bgType = "1";
                a4178.roleName = "Chunli";
                a4178.faceName = "";
        }


        public static frame6(mc: zmovie.ZMovieClip) {
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
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;

                let a3395 = Chunli_a3395.getInstance(_parentRole);
                a3395.Vx = 20;
                a3395.flag = "";
                a3395.target = "";
        }


        public static frame7(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                // _level0.p_snd.start();
                // continueHit = true;
        }


        public static frame9(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame12(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame13(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }

                let a4023 = Chunli_a4023.getInstance(_parentRole);
                a4023.Vx = 10;
                a4023.Vy = 0;
                a4023.Va = 0;
                a4023.Vg = 0;
                a4023.Vx_min = 0;
                a4023.posY2 = "";
                a4023.flag = "";
                a4023.end_status = "";
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
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame18(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;

        }


        public static frame21(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame24(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame27(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame28(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                let a3395 = Chunli_a3395.getInstance(_parentRole);
                a3395.Vx = 16;
                a3395.flag = "";
                a3395.target = "";
        }


        public static frame29(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }

        }


        public static frame35(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                let a4023 = Chunli_a4023.getInstance(_parentRole);
                a4023.Vx = 10;
                a4023.Vy = 0;
                a4023.Va = 0;
                a4023.Vg = 0;
                a4023.Vx_min = 0;
                a4023.posY2 = "";
                a4023.flag = "";
                a4023.end_status = "";
        }


        public static frame36(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame39(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame42(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame45(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame48(mc: zmovie.ZMovieClip) {

                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame51(mc: zmovie.ZMovieClip) {
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
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame54(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame57(mc: zmovie.ZMovieClip) {
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 1;
                htcheck.isObj = false;
                htcheck.hitPos = "";
                htcheck.hitType = "hitFire1";
                htcheck.hitShinning = false;
                htcheck.hitEff = "";
                htcheck.hurtAway = "hurt3";
                htcheck.hurtBack = "hurt1";
                htcheck.end_status = "";
                htcheck.slowTime = 0;
                htcheck.checkTimes = 1;
                htcheck.d_rate = 0.2;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 0;
                htcheck.a = 0;
                htcheck.Vx = 5;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 0;
                htcheck.reCheck = true;
        }


        public static frame60(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                let a3395 = Chunli_a3395.getInstance(_parentRole);
                a3395.Vx = 20;
                a3395.flag = "";
                a3395.target = "";
                //continueHit = false;
        }


        public static frame64(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                let htcheck = Hero_HitCheck.getInstance(mc);
                htcheck.freezeTime = 14;
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
                htcheck.d_rate = 1.5;
                htcheck.flag = 1;
                htcheck.g = 0;
                htcheck.Vy = 40;
                htcheck.a = 1;
                htcheck.Vx = 25;
                htcheck.freezeTime2 = 0;
                htcheck.shake = 1;
                htcheck.reCheck = true;

                let a4023 = Chunli_a4023.getInstance(_parentRole);

                a4023.Vx = 18;
                a4023.Vy = 0;
                a4023.Va = 0;
                a4023.Vg = 0;
                a4023.Vx_min = 0;
                a4023.posY2 = "";
                a4023.flag = "";
                a4023.end_status = "";
        }


        public static frame81(mc: zmovie.ZMovieClip) {
                let _parentRole = EventUtil.getRole_Parent(mc);
                if (_parentRole == null) {
                        return;
                }
                _parentRole.toStatus_switch("stand");
        }
}
