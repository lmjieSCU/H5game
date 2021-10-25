class kula_iceFall_still {
    public static addSprite18635(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, kula_iceFall_still.frame1, 14, kula_iceFall_still.frame14]);
        mc["own_role"]=own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        let hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 0;
        hero_flyingobj.hurtBack = "";
        hero_flyingobj.hurtAway = "hurt3";
        hero_flyingobj.flag = 1;
        hero_flyingobj.end_status = "";
        hero_flyingobj.Vx = 20;
        hero_flyingobj.Vy = -25;
        hero_flyingobj.a = 3;
        hero_flyingobj.g = 0;
        hero_flyingobj.freezeTime2 = 0;
        hero_flyingobj.freezeTime = 6;
        hero_flyingobj.slowTime = 0;
        hero_flyingobj.shake = 2;
        hero_flyingobj.d_rate = 1;
        hero_flyingobj.isObj = true;
        hero_flyingobj.hitType = "hitFire_h";
        hero_flyingobj.hitEff = "hitEff_ice1";
        hero_flyingobj.reCheck = true;
        hero_flyingobj.checkTimes = 1;
        hero_flyingobj.hitPos = "land";
        let pos_target = mc["own_role"].opp.localToGlobal();
        let pos_obj = mc.localToGlobal();
        hero_flyingobj.doaction_params = [1, pos_obj.x, pos_obj.y, pos_target.x, pos_target.y - 50];
        mc.addWaitingCallFun(mc, ['onLand', kula_iceFall_still.frame1_onLand, [mc], 'onHit', kula_iceFall_still.frame1_onHit, [mc]])
    }
    public static frame1_onLand(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop('hit');
    }

    public static frame1_onHit(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop('hit');
    }

    public static frame14(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}