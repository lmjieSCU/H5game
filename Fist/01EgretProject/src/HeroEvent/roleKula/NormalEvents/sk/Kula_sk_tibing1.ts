class Kula_sk_tibing1 {
    public static addSprite19441(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [5, Kula_sk_tibing1.frame5, 25, Kula_sk_tibing1.frame25]);
        return;
    }
    public static frame5(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_ice_sheji2";
    }


    public static frame25(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }


}