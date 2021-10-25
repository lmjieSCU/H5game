class kula_wuyayao {
    public static addSprite18690(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, kula_wuyayao.frame1, 20, kula_wuyayao.frame22]);
        mc["own_role"] = own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        FightMainRender.getInstance().Add(mc,kula_wuyayao.onEnterFrame,[mc,mc["own_role"]]);
    }
    public static onEnterFrame(mc: zmovie.ZMovieClip, role: Role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (role.status_3 == "hurt") {
            if (mc.parent) {
                mc.parent.removeChild(mc);
                 FightMainRender.getInstance().Remove(mc,kula_wuyayao.onEnterFrame);
            }
        }
    }

    public static frame22(mc: zmovie.ZMovieClip) {
        FightMainRender.getInstance().Remove(mc,kula_wuyayao.onEnterFrame);
        if (mc.parent) {
            mc.parent.removeChild(mc);
        }
    }


}