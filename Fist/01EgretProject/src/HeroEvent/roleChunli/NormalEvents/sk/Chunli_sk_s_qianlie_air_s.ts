class Chunli_sk_s_qianlie_air_s {
	public static addSprite15622(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [2, Chunli_sk_s_qianlie_air_s.frame2, 3, Chunli_sk_s_qianlie_air_s.frame3, 5, Chunli_sk_s_qianlie_air_s.frame5, 7, Chunli_sk_s_qianlie_air_s.frame7, 8, Chunli_sk_s_qianlie_air_s.frame8, 11, Chunli_sk_s_qianlie_air_s.frame11, 14, Chunli_sk_s_qianlie_air_s.frame14, 17, Chunli_sk_s_qianlie_air_s.frame17, 20, Chunli_sk_s_qianlie_air_s.frame20, 23, Chunli_sk_s_qianlie_air_s.frame23, 25, Chunli_sk_s_qianlie_air_s.frame25, 26, Chunli_sk_s_qianlie_air_s.frame26, 29, Chunli_sk_s_qianlie_air_s.frame29, 32, Chunli_sk_s_qianlie_air_s.frame32, 35, Chunli_sk_s_qianlie_air_s.frame35, 38, Chunli_sk_s_qianlie_air_s.frame38, 41, Chunli_sk_s_qianlie_air_s.frame41, 43, Chunli_sk_s_qianlie_air_s.frame43, 44, Chunli_sk_s_qianlie_air_s.frame44, 47, Chunli_sk_s_qianlie_air_s.frame47, 60, Chunli_sk_s_qianlie_air_s.frame60]);
		return;
	}
	public static frame2(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let a3395 = Chunli_a3395.getInstance(_parentRole);
		a3395.Vx = 20;
		a3395.flag = "";
		a3395.target = "";

		let a4178 = Chunli_a4178.getInstance(_parentRole);
		a4178.s_type = "s1_s";
		a4178.f_time = 20;
		a4178.bgType = "1";
		a4178.roleName = "Chunli";
		a4178.faceName = "";
	}


	public static frame3(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		//_level0.p_snd.start();
	}


	public static frame5(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.25;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;

		let a4023 = Chunli_a4023.getInstance(_parentRole);
		a4023.Vx = 15;
		a4023.Vy = 15;
		a4023.Va = 0;
		a4023.Vg = 0.5;
		a4023.Vx_min = 0;
		a4023.posY2 = "";
		a4023.flag = "";
		a4023.end_status = "land2";
	}


	public static frame7(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		//continueHit = true;
	}


	public static frame8(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.25;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame11(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.25;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame14(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.25;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame17(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame20(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame23(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame25(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
	}


	public static frame26(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame29(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame32(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 5;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame35(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 5;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame38(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 5;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame41(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 0;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 5;
		htcheck.a = 0;
		htcheck.Vx = 10;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame43(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		//continueHit = false;
	}


	public static frame44(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.freezeTime = 10;
		htcheck.isObj = false;
		htcheck.hitPos = "";
		htcheck.hitType = "hitFire_h";
		htcheck.hitShinning = false;
		htcheck.hitEff = "";
		htcheck.hurtAway = "hurt3";
		htcheck.hurtBack = "";
		htcheck.end_status = "";
		htcheck.slowTime = 0;
		htcheck.checkTimes = 1;
		htcheck.d_rate = 0.5;
		htcheck.flag = 1;
		htcheck.g = 0;
		htcheck.Vy = 0;
		htcheck.a = 0;
		htcheck.Vx = 30;
		htcheck.freezeTime2 = 0;
		htcheck.shake = 0;
		htcheck.reCheck = true;
	}


	public static frame47(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let a4023 = Chunli_a4023.getInstance(_parentRole);
		a4023.Vx = 15;
		a4023.Vy = 1;
		a4023.Va = 0;
		a4023.Vg = 3.5;
		a4023.Vx_min = 0;
		a4023.posY2 = "";
		a4023.flag = "";
		a4023.end_status = "land2";
	}


	public static frame60(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		mc.stop();
	}
}


