class Ryu_sk14{
	public static addSprite20760(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,Ryu_sk14.frame1,3,Ryu_sk14.frame3,8,Ryu_sk14.frame8,11,Ryu_sk14.frame11,13,Ryu_sk14.frame13,16,Ryu_sk14.frame16,18,Ryu_sk14.frame18,21,Ryu_sk14.frame21,23,Ryu_sk14.frame23,25,Ryu_sk14.frame25,26,Ryu_sk14.frame26,28,Ryu_sk14.frame28,31,Ryu_sk14.frame31,33,Ryu_sk14.frame33,36,Ryu_sk14.frame36,38,Ryu_sk14.frame38,41,Ryu_sk14.frame41,43,Ryu_sk14.frame43,44,Ryu_sk14.frame44,62,Ryu_sk14.frame62]);
		return;
	}
    public static frame1(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20717=Ryu_a20717.getInstance(_parentRole);
        a20717.s_type="s1";
        a20717.f_time=20;
        a20717.bgType="1";
        a20717.roleName="Ryu";
        a20717.faceName="";
    }

    public static frame3(){
        //continueHit = true;
    }

    public static frame8(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();    
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = true;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
    }

    public static frame11(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
    }

    public static frame13(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame16(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame18(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame21(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame23(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame25(){
        //_level0.p_snd.start();
    }

    public static frame26(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame28(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame31(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame33(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame36(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame38(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=1;
        hitcheck.end_status="";
        hitcheck.Vx=-8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame41(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="hurt1";
        hitcheck.hurtAway="hurt6";
        hitcheck.flag=3;
        hitcheck.end_status="";
        hitcheck.Vx=8;
        hitcheck.Vy=10;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=0;
        hitcheck.freezeTime=0;
        hitcheck.slowTime=0;
        hitcheck.shake=1;
        hitcheck.d_rate=0.15;
        hitcheck.isObj=true;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
        //_level0.p_snd.start();
    }

    public static frame43(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20745 = Ryu_a20745.getInstance(_parentRole);
        a20745.status_1 = "";
        a20745.flag = "1";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(_parentRole)._name = "Ryu_a20744";
        //_level0.k_snd.start();
        //continueHit = false;
    }

    public static frame44(mc: zmovie.ZMovieClip){
        let hitcheck=Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack="";
        hitcheck.hurtAway="hurt4";
        hitcheck.flag=1;
        hitcheck.end_status="getup2";
        hitcheck.Vx=20;
        hitcheck.Vy=40;
        hitcheck.a=3;
        hitcheck.g=0;
        hitcheck.freezeTime2=2;
        hitcheck.freezeTime=13;
        hitcheck.slowTime=0;
        hitcheck.shake=2;
        hitcheck.d_rate=1;
        hitcheck.isObj=false;
        hitcheck.hitType="hitFire_s3";
        hitcheck.hitEff="";
        hitcheck.hitShinning=false;
        hitcheck.reCheck=true;
        hitcheck.checkTimes=1;
        hitcheck.hitPos="";
    }

    public static frame62(mc: zmovie.ZMovieClip){
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }        
        _parentRole.toStatus_switch("stand");
    }
}
