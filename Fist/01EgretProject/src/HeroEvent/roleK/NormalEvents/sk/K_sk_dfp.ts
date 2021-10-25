/**缺少火焰子骨骼 */
class K_sk_dfp {

    public static addSprite5656(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [6, K_sk_dfp.frame6, 11, K_sk_dfp.frame11, 17, K_sk_dfp.frame20]);
        mc["own_role"] = own_role;
        return;
    }

    public static frame6(mc: zmovie.ZMovieClip) {
        K_a863.getInstance(mc["own_role"]).name = "fire1";
    }


    public static frame11(mc: zmovie.ZMovieClip) {
        if (mc["own_role"]["CPU_check"]) {
            mc["own_role"]["CPU_check"]();
        }
    }

    public static frame20(mc: zmovie.ZMovieClip) {
        mc["own_role"].toStatus_switch("stand");
    }


}