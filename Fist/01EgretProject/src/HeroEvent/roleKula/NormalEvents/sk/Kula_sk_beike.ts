class Kula_sk_beike {
    public static addSprite19525(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [4, Kula_sk_beike.frame4, 7, Kula_sk_beike.frame7, 27, Kula_sk_beike.frame27, 32, Kula_sk_beike.frame32, 48, Kula_sk_beike.frame48]);
        return;
    }
    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a19498 = Kula_a19498.getInstance(_parentRole);
        a19498.flag = "";
        a19498.defendSuper = true;
        a19498.obj_level = 1;

        // let onEnterFrame = function () {
        //     if (_level0.inPause) {
        //         return undefined;
        //     }
        //     var _loc3_ = _parentRole.opp.getObj();
        //     if (s_mc.obj_level > _loc3_.area.obj_level) {
        //         if (s_mc.hitTest(_loc3_.area)) {
        //             _loc3_.area.do_hitObj();
        //             delete this.onEnterFrame;
        //             gotoAndStop("att2");
        //             play();
        //         }
        //     }
        // };
    }


    public static frame7(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        
let htcheck=Hero_HitCheck.getInstance(mc);
htcheck.hurtBack="";
htcheck.hurtAway="hurt3";
htcheck.flag=1;
htcheck.end_status="";
htcheck.Vx=27;
htcheck.Vy=20;
htcheck.a=0;
htcheck.g=0;
htcheck.freezeTime2=0;
htcheck.freezeTime=5;
htcheck.slowTime=0;
htcheck.shake=0;
htcheck.d_rate=1.7;
htcheck.isObj=true;
htcheck.hitType="";
htcheck.hitEff="hitEff_ice1";
htcheck.hitShinning=false;
htcheck.reCheck=true;
htcheck.checkTimes=1;
htcheck.hitPos="";
    }


    public static frame27(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


    public static frame32(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_ice_sheji1";
    }


    public static frame48(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}