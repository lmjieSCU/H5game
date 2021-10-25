class K_dash {

  public static addSprite5146(mc: zmovie.ZMovieClip, _parentRole: Role) {
    mc.addFrameScript(mc, [3, K_dash.frame3, 14, K_dash.frame14]);
    return;
  }
  public static frame3(mc: zmovie.ZMovieClip) {
      let _parentRole = EventUtil.getRole_Parent(mc);
      if (_parentRole == null) {
          return;
      }
      _parentRole.start_move_Y1(_parentRole.Vy, _parentRole.Vx);
  }


  public static frame14(mc: zmovie.ZMovieClip) {
      mc.stop();
  }
}