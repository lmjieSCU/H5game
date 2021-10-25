class ryu_assist_ken {
    public static addSprite21272(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, ryu_assist_ken.frame1, 21, ryu_assist_ken.frame21, 39, ryu_assist_ken.frame39, 91, ryu_assist_ken.frame91,
        ]);
        mc['own_role'] = own_role;
        return;

    }

    public static frame1(mc: zmovie.ZMovieClip) {
        mc.x = mc['own_role'].opp.x;
    }

    public static frame21(mc: zmovie.ZMovieClip) {
        let a20745 = Ryu_a20745.getInstance(mc['own_role']);
        a20745.status_1 = "hurt3";
        a20745.flag = "3";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(mc['own_role'])._name = "Ryu_a20744";
        
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = -8;
        hitcheck.Vy = 42;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }



    public static frame39(mc: zmovie.ZMovieClip) {
        Ryu_a20657.getInstance(mc['own_role']).name = "wave_s3";
    }

    public static frame91(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}
