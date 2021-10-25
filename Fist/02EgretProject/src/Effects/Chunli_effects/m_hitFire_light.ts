class m_hitFire_light{
	public static addSprite4427(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [1,m_hitFire_light.frame1,24,m_hitFire_light.frame24]);
		return;
	}
	public static frame1(mc:zmovie.ZMovieClip){        
        // numMax = 2;
        // color1 = "light1";
        // color2 = "light2";
        var dx = Math.floor(Math.random() * 40 - 80);
        var dy = Math.floor(Math.random() * 100);
        mc.rotation = Math.floor(Math.random() * 360);
        // onEnterFrame = function()
        // {
        // _X = _root.role.opp._x + dx;
        // _Y = _root.role.opp._y - dy;
        // };
	}


	public static frame24(mc:zmovie.ZMovieClip){
        mc.parent.removeChild(mc);
	}

}