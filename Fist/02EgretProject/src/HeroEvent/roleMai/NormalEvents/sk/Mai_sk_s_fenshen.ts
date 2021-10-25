class Mai_sk_s_fenshen {
	public static addSprite7532(mc: zmovie.ZMovieClip, own_role: Role) {
		mc.addFrameScript(mc, [3, Mai_sk_s_fenshen.frame3, 4, Mai_sk_s_fenshen.frame4, 8, Mai_sk_s_fenshen.frame8, 11, Mai_sk_s_fenshen.frame11, 15, Mai_sk_s_fenshen.frame15, 18, Mai_sk_s_fenshen.frame18, 22, Mai_sk_s_fenshen.frame22, 25, Mai_sk_s_fenshen.frame25, 28, Mai_sk_s_fenshen.frame28, 32, Mai_sk_s_fenshen.frame32, 35, Mai_sk_s_fenshen.frame35, 36, Mai_sk_s_fenshen.frame36, 38, Mai_sk_s_fenshen.frame38, 39, Mai_sk_s_fenshen.frame39, 40, Mai_sk_s_fenshen.frame40, 42, Mai_sk_s_fenshen.frame42, 44, Mai_sk_s_fenshen.frame44, 46, Mai_sk_s_fenshen.frame46, 48, Mai_sk_s_fenshen.frame48, 50, Mai_sk_s_fenshen.frame50, 70, Mai_sk_s_fenshen.frame70, 84, Mai_sk_s_fenshen.frame84]);
		return;
	}
	public static frame3(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let a7078 = Mai_a7078.getInstance(_parentRole);
		a7078.s_type = "s2";
		a7078.f_time = 23;
		a7078.bgType = "2";
		a7078.roleName = "Mai";
		a7078.faceName = "";
	}


	public static frame4(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a7159.getInstance(_parentRole).effName = "bgEff_up";
	}


	public static frame8(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame11(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame15(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame18(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame22(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame25(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame28(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame32(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame35(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame36(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 3;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";

		let a7078 = Mai_a7078.getInstance(_parentRole);
		a7078.s_type = "";
		a7078.f_time = 20;
		a7078.bgType = "0";
		a7078.roleName = "";
		a7078.faceName = "";
	}


	public static frame38(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 3;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame39(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt3";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 0;
		htcheck.Vy = 15;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 1;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.3;
		htcheck.isObj = false;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame40(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 3;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame42(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 3;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame44(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 3;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame46(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 3;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame48(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 3;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame50(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}

		let htcheck = Hero_HitCheck.getInstance(mc);
		htcheck.hurtBack = "";
		htcheck.hurtAway = "hurt4";
		htcheck.flag = 1;
		htcheck.end_status = "getup2";
		htcheck.Vx = 20;
		htcheck.Vy = 30;
		htcheck.a = 0;
		htcheck.g = 0;
		htcheck.freezeTime2 = 0;
		htcheck.freezeTime = 6;
		htcheck.slowTime = 0;
		htcheck.shake = 0;
		htcheck.d_rate = 0.5;
		htcheck.isObj = true;
		htcheck.hitType = "hitFire1";
		htcheck.hitEff = "fire_m2";
		htcheck.hitShinning = false;
		htcheck.reCheck = true;
		htcheck.checkTimes = 1;
		htcheck.hitPos = "";
	}


	public static frame70(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		Mai_a7159.getInstance(_parentRole).effName = "";
	}


	public static frame84(mc: zmovie.ZMovieClip) {
		let _parentRole = EventUtil.getRole_Parent(mc);
		if (_parentRole == null) {
			return;
		}
		_parentRole.toStatus_switch("stand");
	}
}


