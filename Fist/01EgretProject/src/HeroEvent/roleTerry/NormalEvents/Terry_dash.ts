class Terry_dash {

  public static addSprite8462(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Terry_dash.frame3, 7, Terry_dash.frame7]);
        return;
  }

  public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.start_move_Y1(_parentRole.Vy,_parentRole.Vx);
  }


  public static frame7(mc: zmovie.ZMovieClip) {
        mc.stop();
  }

}