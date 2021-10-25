class m_slash_3_2{
	public static addSprite3197(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,m_slash_3_2.frame1,5,m_slash_3_2.frame5,17,m_slash_3_2.frame17,18,m_slash_3_2.frame18]);
		mc["own_role"]=own_role;
        return;
	}
	public static frame1(mc:zmovie.ZMovieClip){
        mc.x =mc["own_role"].opp.x;
	}


	public static frame5(mc:zmovie.ZMovieClip){
        let htcheck=Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack="";
        htcheck.hurtAway="hurt3";
        htcheck.flag=1;
        htcheck.end_status="getup2";
        htcheck.Vx=13;
        htcheck.Vy=32;
        htcheck.a=3;
        htcheck.g=0;
        htcheck.freezeTime2=0;
        htcheck.freezeTime=15;
        htcheck.slowTime=0;
        htcheck.shake=0;
        htcheck.d_rate=2.5;
        htcheck.isObj=false;
        htcheck.hitType="hitFire_cut_lb1";
        htcheck.hitEff="";
        htcheck.hitShinning=true;
        htcheck.reCheck=true;
        htcheck.checkTimes=1;
        htcheck.hitPos="";
        // ColorEffect.setColor(_root.role_mc,"black");
        // ColorEffect.setColor(_root.role_mc.opp,"black");
        let a3196=Moriya_a3196.getInstance(mc["own_role"]);
        a3196.effName="bgEff_red";
	}


	public static frame17(mc:zmovie.ZMovieClip){
        let a3196=Moriya_a3196.getInstance(mc["own_role"]);
        a3196.effName="";
	}


	public static frame18(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
	}
}

