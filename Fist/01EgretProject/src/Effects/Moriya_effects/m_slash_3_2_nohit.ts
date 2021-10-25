class m_slash_3_2_nohit {
    public static addSprite4304(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, m_slash_3_2_nohit.frame1, 5, m_slash_3_2_nohit.frame5, 17, m_slash_3_2_nohit.frame17, 18, m_slash_3_2_nohit.frame18]);
        mc["own_role"] = own_role;
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        mc.x = mc["own_role"].opp.x;
    }


    public static frame5(mc: zmovie.ZMovieClip) {
        Moriya_a3196.getInstance(mc["own_role"]).effName = "bgEff_red";
        // ColorEffect.setColor(_root.role_mc, "black");
        // ColorEffect.setColor(_root.role_mc.opp, "black");
    }


    public static frame17(mc: zmovie.ZMovieClip) {
        Moriya_a3196.getInstance(mc["own_role"]).effName = "";
    }


    public static frame18(mc: zmovie.ZMovieClip) {
        // ColorEffect.setColor(_root.role_mc,"normal");
        // ColorEffect.setColor(_root.role_mc.opp,"normal");
        mc.parent.removeChild(mc);
    }
}


