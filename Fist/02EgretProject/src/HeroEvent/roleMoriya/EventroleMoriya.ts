/**roleMoriya的主骨骼帧事件处理类
 * 用于实现roleMoriya的帧事件检查
 * 命名:Event+_roleName
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */

class EventroleMoriya {

	//第三层级,单帧事件
	public static singleFrameEvent = {
		"a3196": Moriya_a3196.addEventa3196,
		"a3318": EventroleMoriya.addEventa3318,
		"a3395": Moriya_a3395.addEventa3395,
		"a3511": Moriya_a3511.addEventa3511,
		"a3555": Moriya_a3555.addEventa3555,
		"a3563": Moriya_a3563.addEventa3563,
		"a3565": Moriya_a3565.addEventa3565,
		"a3742": Moriya_a3742.addEventa3742,
		"a3800": Moriya_a3800.addEventa3800,
		"a4023": Moriya_a4023.addEventa4023,
		"a4116": Moriya_a4116.addEventa4116,
		"a4178": Moriya_a4178.addEventa4178,
		"a4185": Moriya_a4185.addEventa4185,
		"a4186": Moriya_a4186.addEventa4186,
		"a4188": Moriya_a4188.addEventa4188,
		"a4196": Moriya_a4196.addEventa4196,
		"a4202": Moriya_a4202.addEventa4202,
		"HitCheck": Hero_HitCheck.addEventHitCheck,
		"FlyingObj": Hero_flyingObj.addEventflyingObj,
		"HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
	};
	//第二层级
	public static event = [
		["s3231",Moriya_begin.addSprite3231],
		["s3250",Moriya_begin2.addSprite3250],
		["s3286",Moriya_end.addSprite3286],
		["s3315",Moriya_end2.addSprite3315],
		["s3316",Moriya_lose.addSprite3316],
		["s3390",Moriya_dash_b.addSprite3390],
		["s3410",Moriya_roll_f.addSprite3410],
		["s3414",Moriya_roll_b.addSprite3414],
		["s3414",Moriya_jump.addSprite3414],
		["s3476",Moriya_hurt1.addSprite3476],
		["s3485",Moriya_hurt2.addSprite3485],
		["s3495",Moriya_hurt3.addSprite3495],
		["s3504",Moriya_hurt4.addSprite3504],
		["s3505",Moriya_hurt5.addSprite3505],
		["s3506",Moriya_hurt6.addSprite3506],
		["s3522",Moriya_getup1.addSprite3522],
		["s3537",Moriya_getup2.addSprite3537],
		["s3542",Moriya_land.addSprite3542],
		["s3543",Moriya_land2.addSprite3543],
		["s3544",Moriya_land3.addSprite3544],
		["s3558",Moriya_burst.addSprite3558],
		["s3559",Moriya_burst2.addSprite3559],
		["s3560",Moriya_burst3.addSprite3560],
		["s3578",Moriya_punch_l.addSprite3578],
		["s3587",Moriya_punch_l2.addSprite3587],
		["s3612",Moriya_punch.addSprite3612],
		["s3633",Moriya_punch2.addSprite3633],
		["s3658",Moriya_punch3.addSprite3658],
		["s3669",Moriya_kick_l.addSprite3669],
		["s3688",Moriya_kick.addSprite3688],
		["s3705",Moriya_squatPunch.addSprite3705],
		["s3718",Moriya_squatPunch_l.addSprite3718],
		["s3731",Moriya_squatKick.addSprite3731],
		["s3738",Moriya_squatKick_l.addSprite3738],
		["s3775",Moriya_pitch.addSprite3775],
		["s3776",Moriya_heavyHit.addSprite3776],
		["s3824",Moriya_sk_long_u.addSprite3824],
		["s3863",Moriya_sk_long_m.addSprite3863],
		["s3898",Moriya_sk_long_d.addSprite3898],
		["s3942",Moriya_sk_xinyue.addSprite3942],
		["s3979",Moriya_sk_xinyue2.addSprite3979],
		["s4001",Moriya_sk_yueying_a1.addSprite4001],
		["s4020",Moriya_sk_yueying_a2.addSprite4020],
		["s4033",Moriya_sk_yueying_a3.addSprite4033],
		["s4034",Moriya_sk_yueying_c1.addSprite4034],
		["s4049",Moriya_sk_yueying_c2.addSprite4049],
		["s4064",Moriya_sk_yueying_c3.addSprite4064],
		["s4095",Moriya_sk_yueying_c4.addSprite4095],
		["s4112",Moriya_sk_buyue1.addSprite4112],
		["s4114",Moriya_sk_buyue2.addSprite4114],
		["s4115",Moriya_sk_buyue3.addSprite4115],
		["s4145",Moriya_sk_yuedu1.addSprite4145],
		["s4172",Moriya_sk_yuedu2.addSprite4172],
		["s4180",Moriya_sk_s1.addSprite4180]
	];


	//单帧事件的MC均为三级骨骼
	public static addEventa5118(MC: zmovie.ZMovieClip, own_role: Role) {
		// _root.role_mc[sound].start(startPos,loop);
	}

	public static addEventa3318(MC: zmovie.ZMovieClip, own_role: Role) {
		MC.visible = false;
		own_role.bodyName = 'a3318';
		return;
	}

}
