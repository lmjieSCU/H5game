class Chunli_sk_chuantui{
	public static addSprite15066(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Chunli_sk_chuantui.frame1,4,Chunli_sk_chuantui.frame4,35,Chunli_sk_chuantui.frame35]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        
        let a4023=Chunli_a4023.getInstance(_parentRole);
        a4023.Vx=-5;
        a4023.Vy=10;
        a4023.Va=0;
        a4023.Vg=2;
        a4023.Vx_min=0;
        a4023.posY2="";
        a4023.flag="";
        a4023.end_status="frame_land";
	}


	public static frame4(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
                
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime=3;
        htcheck.isObj=false;
        htcheck.hitPos="";
        htcheck.hitType="hitFire_h";
        htcheck.hitShinning=false;
        htcheck.hitEff="";
        htcheck.hurtAway="hurt3";
        htcheck.hurtBack="";
        htcheck.end_status="";
        htcheck.slowTime=0;
        htcheck.checkTimes=1;
        htcheck.d_rate=1.5;
        htcheck.flag=1;
        htcheck.g=0;
        htcheck.Vy=25;
        htcheck.a=3;
        htcheck.Vx=20;
        htcheck.freezeTime2=0;
        htcheck.shake=0;
        htcheck.reCheck=true;
                
        let a4023=Chunli_a4023.getInstance(_parentRole);
        a4023.Vx=35;
        a4023.Vy=-18;
        a4023.Va=0;
        a4023.Vg=4.5;
        a4023.Vx_min=0;
        a4023.posY2="";
        a4023.flag="";
        a4023.end_status="land3";

        //_level0.p_snd.start();
	}


	public static frame35(mc:zmovie.ZMovieClip){
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
        mc.stop();
	}
}
