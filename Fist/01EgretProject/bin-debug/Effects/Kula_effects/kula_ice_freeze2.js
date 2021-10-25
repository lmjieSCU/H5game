var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_ice_freeze2 = (function () {
    function kula_ice_freeze2() {
    }
    kula_ice_freeze2.addSprite7739 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, kula_ice_freeze2.frame1, 4, kula_ice_freeze2.frame4, 5, kula_ice_freeze2.frame10]);
        mc["own_role"] = own_role;
        return;
    };
    kula_ice_freeze2.frame1 = function (mc) {
        var opp = mc["own_role"].opp;
        var role = mc["own_role"];
        mc.x = opp.x;
        if (opp.status_3 == "hurt" && role.onHit) {
            role.hit = true;
            opp.hurtValue.hurtAway = "aaa";
            opp.stop_hurtBack();
            opp.mc.inIce = true;
            opp.mc.gotoAndStop("hurt1");
            //opp.mc.gotoAndStop(2);
            FightMainRender.getInstance().Add(mc, kula_ice_freeze2.onEnterFrame, [mc, opp]);
        }
    };
    kula_ice_freeze2.onEnterFrame = function (mc, opp) {
        if (_level0.inPause) {
            return undefined;
        }
        if (opp.hurtValue.hurtAway != "aaa") {
            FightMainRender.getInstance().Remove(mc, kula_ice_freeze2.onEnterFrame);
            mc.gotoAndStop("end");
            mc.resetFrameStop();
            return undefined;
        }
        opp.mc.gotoAndStop("hurt1");
        FightMainRender.getInstance().Remove(mc, kula_ice_freeze2.onEnterFrame);
        //opp.mc.gotoAndStop(2);
        mc.gotoAndStop("end");
        mc.resetFrameStop();
    };
    kula_ice_freeze2.frame4 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt4";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = -10;
        htcheck.Vy = 40;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 13;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 2;
        htcheck.isObj = true;
        htcheck.hitType = "hitFire_h";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    kula_ice_freeze2.frame10 = function (mc) {
        mc.parent.removeChild(mc);
        FightMainRender.getInstance().Remove(mc, kula_ice_freeze2.onEnterFrame);
    };
    return kula_ice_freeze2;
}());
__reflect(kula_ice_freeze2.prototype, "kula_ice_freeze2");
//# sourceMappingURL=kula_ice_freeze2.js.map