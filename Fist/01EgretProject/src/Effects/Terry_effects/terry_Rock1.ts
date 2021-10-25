class terry_Rock1{
	public static addSprite8298(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [6,terry_Rock1.frame6,11,terry_Rock1.frame11,16,terry_Rock1.frame16,25,terry_Rock1.frame25,28,terry_Rock1.frame28,34,terry_Rock1.frame34,40,terry_Rock1.frame40,46,terry_Rock1.frame46,59,terry_Rock1.frame59,60,terry_Rock1.frame60,81,terry_Rock1.frame81,85,terry_Rock1.frame85,89,terry_Rock1.frame89,93,terry_Rock1.frame93,97,terry_Rock1.frame97,100,terry_Rock1.frame100,149,terry_Rock1.frame149,173,terry_Rock1.frame173,]);
		mc["own_role"]=own_role;
        return;
	}
    public static frame6(mc:zmovie.ZMovieClip){
        mc.stop();
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=35;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=3;
        HitCheck_obj.hurtBack="hurt2";
        HitCheck_obj.hurtAway="hurt2";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=20;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=4;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame11(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=15;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="hurt2";
        HitCheck_obj.hurtAway="hurt2";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=10;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=4;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame16(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=15;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="hurt2";
        HitCheck_obj.hurtAway="hurt2";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=10;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=6;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame25(mc:zmovie.ZMovieClip){
        let a7156=Terry_a7156.getInstance(mc["own_role"]);
        a7156.posObj="Terry_a7155";
        a7156.flag=1;
        a7156.status_1="hurt2";
        a7156.downHit=false;
        a7156.land=false;
        a7156.hurt=true;
        a7156.func=null;
        Terry_a7155.getInstance(mc["own_role"])._name = "Terry_a7155";
    }

    public static frame28(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="hurt2";
        HitCheck_obj.hurtAway="hurt2";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=2;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.25;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame34(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="hurt2";
        HitCheck_obj.hurtAway="hurt2";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=2;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.25;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame40(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="hurt2";
        HitCheck_obj.hurtAway="hurt2";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=2;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.25;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame46(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="hurt2";
        HitCheck_obj.hurtAway="hurt2";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=30;
        HitCheck_obj.freezeTime=10;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.25;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire_h";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame59(mc:zmovie.ZMovieClip){
        if (mc["own_role"].onHit != true || mc["own_role"].opp.status_3 != "hurt"){
            mc.gotoAndStop("nohit");
        }
    }

    public static frame60(mc:zmovie.ZMovieClip){
        let a7156=Terry_a7156.getInstance(mc["own_role"]);
        a7156.posObj="Terry_a7155";
        a7156.flag=1;
        a7156.status_1="hurt2";
        a7156.downHit=false;
        a7156.land=false;
        a7156.hurt=false;
        a7156.func=null;
        Terry_a7155.getInstance(mc["own_role"])._name = "Terry_a7155";
    }

    public static frame81(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="";
        HitCheck_obj.hurtAway="hurt3";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=25;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=1;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame85(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="";
        HitCheck_obj.hurtAway="hurt3";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=25;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=1;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame89(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="";
        HitCheck_obj.hurtAway="hurt3";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=25;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=1;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame93(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="";
        HitCheck_obj.hurtAway="hurt3";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=25;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=1;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame97(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="";
        HitCheck_obj.hurtAway="hurt3";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=0;
        HitCheck_obj.Vy=25;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=1;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=0.5;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame100(mc:zmovie.ZMovieClip){
        let HitCheck_obj=Hero_HitCheck_obj.getInstance(mc);
        HitCheck_obj.obj_Vx=0;
        HitCheck_obj.obj_Vy=0;
        HitCheck_obj.obj_level=0;
        HitCheck_obj.hurtBack="";
        HitCheck_obj.hurtAway="hurt4";
        HitCheck_obj.flag=1;
        HitCheck_obj.end_status="";
        HitCheck_obj.Vx=15;
        HitCheck_obj.Vy=30;
        HitCheck_obj.a=3;
        HitCheck_obj.g=0;
        HitCheck_obj.freezeTime2=0;
        HitCheck_obj.freezeTime=4;
        HitCheck_obj.slowTime=0;
        HitCheck_obj.shake=0;
        HitCheck_obj.d_rate=1;
        HitCheck_obj.isObj=true;
        HitCheck_obj.hitType="hitFire1";
        HitCheck_obj.hitEff="";
        HitCheck_obj.hitShinning=false;
        HitCheck_obj.reCheck=true;
        HitCheck_obj.checkTimes=1;
        HitCheck_obj.hitPos="";
    }

    public static frame149(mc:zmovie.ZMovieClip){
        mc.stop();
        mc.parent.removeChild(mc);
    }

    public static frame173(mc:zmovie.ZMovieClip){
        mc.stop();
        mc.parent.removeChild(mc);
    }
}
