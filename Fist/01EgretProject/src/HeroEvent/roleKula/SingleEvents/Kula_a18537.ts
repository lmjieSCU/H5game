class Kula_a18537 {
    public static addEventa18537(MC: zmovie.ZMovieClip, own_role: Role) {
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(MC);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt3";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 25;
        hitcheck_obj.Vy = 20;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 1;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "hitEff_ice1";
        hitcheck_obj.hitShinning = true;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        console.log(MC.getCurrFrame());
        // MC['own_role'] = own_role;
        // MC.addFrameScript(MC, [1, Kula_a18537.frame1, 4, Kula_a18537.frame4]);
    }

    public static frame1(MC: zmovie.ZMovieClip) {
        EventroleKula_skill.singleFrameEvent["HitCheck_obj"].call(Hero_HitCheck_obj, <zmovie.ZMovieClip>MC.$children[0], MC['own_role']);
    }


    public static frame4(MC: zmovie.ZMovieClip) {
        console.log("is in frame4")
    }
}