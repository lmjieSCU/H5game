class Chunli_sk_bo2{
	public static addSprite15130(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [7,Chunli_sk_bo2.frame7,23,Chunli_sk_bo2.frame23]);
		return;
	}
	public static frame7(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
                
        let hitcheck_obj=Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx=0;
        hitcheck_obj.obj_Vy=0;
        hitcheck_obj.obj_level=0;
        hitcheck_obj.hurtBack="";
        hitcheck_obj.hurtAway="hurt3";
        hitcheck_obj.flag=1;
        hitcheck_obj.end_status="getup2";
        hitcheck_obj.Vx=20;
        hitcheck_obj.Vy=35;
        hitcheck_obj.a=3;
        hitcheck_obj.g=0;
        hitcheck_obj.freezeTime2=3;
        hitcheck_obj.freezeTime=2;
        hitcheck_obj.slowTime=0;
        hitcheck_obj.shake=0;
        hitcheck_obj.d_rate=1;
        hitcheck_obj.isObj=true;
        hitcheck_obj.hitType="hitFire1";
        hitcheck_obj.hitEff="";
        hitcheck_obj.hitShinning=false;
        hitcheck_obj.reCheck=true;
        hitcheck_obj.checkTimes=1;
        hitcheck_obj.hitPos="";
	}


	public static frame23(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        _parentRole.toStatus_switch("stand");
	}
    
}

