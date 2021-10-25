class kula_iceKick{
	public static addSprite18637(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,kula_iceKick.frame1,11,kula_iceKick.frame11]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip) {
        let hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 2;
        hero_flyingobj.hurtBack = "";
        hero_flyingobj.hurtAway = "hurt3";
        hero_flyingobj.flag = 1;
        hero_flyingobj.end_status = "getup2";
        hero_flyingobj.Vx = 25;
        hero_flyingobj.Vy = 30;
        hero_flyingobj.a = 3;
        hero_flyingobj.g = 0;
        hero_flyingobj.freezeTime2 = 0;
        hero_flyingobj.freezeTime = 7;
        hero_flyingobj.slowTime = 0;
        hero_flyingobj.shake = 1;
        hero_flyingobj.d_rate = 3;
        hero_flyingobj.isObj = true;
        hero_flyingobj.hitType = "hitFire1";
        hero_flyingobj.hitEff = "hitEff_ice1";
        hero_flyingobj.reCheck = true;
        hero_flyingobj.checkTimes = 1;
        hero_flyingobj.hitPos = "";
        let pos_obj = mc.localToGlobal();
        let pos_target = { x: pos_obj.x + 600 * mc["own_role"].dir, y: pos_obj.y - 100 };
        hero_flyingobj.doaction_params = [40, pos_obj.x, pos_obj.y, pos_target.x, pos_target.y - 50];
        mc.addWaitingCallFun(mc, ['onLand', kula_iceKick_big.frame1_onLand, [mc]]);
    }
    public static frame1_onLand(mc: zmovie.ZMovieClip) {
        mc.gotoAndStop('hit');
    }
	public static frame11(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
	}
}