var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk1 = (function () {
    function Ryu_sk1() {
    }
    //public static DownChanged: boolean = false;
    Ryu_sk1.addSprite20666 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Ryu_sk1.frame4, 23, Ryu_sk1.frame23, 40, Ryu_sk1.frame40, 44, Ryu_sk1.frame44, 60, Ryu_sk1.frame60]);
        mc['own_role'] = own_role;
        return;
    };
    Ryu_sk1.frame4 = function (mc) {
        var hold_mc = Ryu_a20604.getInstance(mc["own_role"]);
        hold_mc.keyArray = [];
        hold_mc.keyArray[0] = mc["own_role"]._punch_lButton;
        hold_mc.holdFunc = function () { };
        hold_mc.releaseFunc = function (mc) {
            if (mc.getCurrFrame() > 15) {
                mc["own_role"].bodyMC.gotoAndStop("attack2");
            }
            else {
                mc["own_role"].bodyMC.gotoAndStop("attack");
            }
        };
        hold_mc.endFunc = function (mc) {
            mc["own_role"].bodyMC.gotoAndStop("attack2");
        };
        // if (Ryu_sk1.DownChanged) {
        //     mc["own_role"].keyCtrl.isKeyDown = true;
        //     console.log("Frame4")
        // }
    };
    Ryu_sk1.frame23 = function (mc) {
        Ryu_a20657.getInstance(mc["own_role"]).name = "wave";
    };
    Ryu_sk1.frame40 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    Ryu_sk1.frame44 = function (mc) {
        Ryu_a20657.getInstance(mc["own_role"]).name = "wave_h";
    };
    Ryu_sk1.frame60 = function (mc) {
        mc["own_role"].toStatus_switch("stand");
    };
    return Ryu_sk1;
}());
__reflect(Ryu_sk1.prototype, "Ryu_sk1");
//# sourceMappingURL=Ryu_sk1.js.map