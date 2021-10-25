class kula_ice_xingchen {
    public static addSprite18630(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, kula_ice_xingchen.frame1, 5, kula_ice_xingchen.frame8]);
        mc["own_role"]=own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        mc.stop();
        let scale=Math.floor(Math.random() * 2) + 0.4
        mc.scaleX=scale;
        mc.scaleY=scale;
        let hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 0;
        hero_flyingobj.hurtBack = "hurt1";
        hero_flyingobj.hurtAway = "hurt1";
        hero_flyingobj.flag = 1;
        hero_flyingobj.end_status = "";
        hero_flyingobj.Vx = 1;
        hero_flyingobj.Vy = 5;
        hero_flyingobj.a = 3;
        hero_flyingobj.g = 3;
        hero_flyingobj.freezeTime2 = 0;
        hero_flyingobj.freezeTime = 0;
        hero_flyingobj.slowTime = 0;
        hero_flyingobj.shake = 0;
        hero_flyingobj.d_rate = 0.14;
        hero_flyingobj.isObj = true;
        hero_flyingobj.hitType = "hitFire1";
        hero_flyingobj.hitEff = "hitEff_ice1";
        hero_flyingobj.reCheck = true;
        hero_flyingobj.checkTimes = 1;
        hero_flyingobj.hitPos = "";
        let pos_obj = mc.localToGlobal();
        let pos_target = {x:pos_obj.x + 600 * mc["own_role"].dir,y:pos_obj.y - Math.floor(Math.random() * 200 - 100)};
        hero_flyingobj.doaction_params = [60,pos_obj.x,pos_obj.y,pos_target.x,pos_target.y];
        mc.addWaitingCallFun(mc, ['onLand', kula_ice_xingchen.frame1_onLand, [mc]]);
    }

    public static frame1_onLand(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop('hit');
        mc.resetFrameStop();
    }


    public static frame8(mc: zmovie.ZMovieClip) {
        mc.parent.removeChild(mc);
    }
}