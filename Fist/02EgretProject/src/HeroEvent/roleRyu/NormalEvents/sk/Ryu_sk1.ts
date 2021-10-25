class Ryu_sk1 {
    //public static DownChanged: boolean = false;
    public static addSprite20666(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [4, Ryu_sk1.frame4, 23, Ryu_sk1.frame23, 40, Ryu_sk1.frame40, 44, Ryu_sk1.frame44, 60, Ryu_sk1.frame60]);
        mc['own_role'] = own_role;
        return;
    }
    public static frame4(mc: zmovie.ZMovieClip) {
        let hold_mc = Ryu_a20604.getInstance(mc["own_role"]);
        hold_mc.keyArray = [];
        hold_mc.keyArray[0] = mc["own_role"]._punch_lButton;
        hold_mc.holdFunc = function () { };
        hold_mc.releaseFunc = function (mc: zmovie.ZMovieClip) {
            if (mc.getCurrFrame() > 15) {
                mc["own_role"].bodyMC.gotoAndStop("attack2");
            }
            else {
                mc["own_role"].bodyMC.gotoAndStop("attack");
            }
        };
        hold_mc.endFunc = function (mc: zmovie.ZMovieClip) {
            mc["own_role"].bodyMC.gotoAndStop("attack2");
        };
        // if (Ryu_sk1.DownChanged) {
        //     mc["own_role"].keyCtrl.isKeyDown = true;
        //     console.log("Frame4")
        // }
    }



    public static frame23(mc: zmovie.ZMovieClip) {
        Ryu_a20657.getInstance(mc["own_role"]).name = "wave";
    }

    public static frame40(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }

    public static frame44(mc: zmovie.ZMovieClip) {
        Ryu_a20657.getInstance(mc["own_role"]).name = "wave_h";
    }

    public static frame60(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }
}
