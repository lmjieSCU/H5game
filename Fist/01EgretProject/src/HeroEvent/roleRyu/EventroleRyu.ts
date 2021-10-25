

class EventroleRyu {

	//第三层级,单帧事件
	public static singleFrameEvent = {
		"HitCheck_obj":Hero_HitCheck_obj.addEventHitCheck_obj,
		"HitCheck": Hero_HitCheck.addEventHitCheck,
		"a5118": EventroleRyu.addEventa5118,
		"a20163": EventroleRyu.addEventa20163,
		"a20238": Ryu_a20238.addEventa20238,
		"a20346": Ryu_a20346.addEventa20346,
		"a20401": Ryu_a20401.addEventa20401,
		"a20424": Ryu_a20424.addEventa20424,
		"a20393": Ryu_a20393.addEventa20393,
		"a20583": Ryu_a20583.addEventa20583,
		"a20604": Ryu_a20604.addEventa20604,
		"a20657": Ryu_a20657.addEventa20657,
		"a20717": Ryu_a20717.addEventa20717,
		"a20745": Ryu_a20745.addEventa20745,
		"a20744": Ryu_a20744.addEventa20744,
		"a20761": Ryu_a20761.addEventa20761,
		"a20799": Ryu_a20799.addEventa20799,
		"a20802": Ryu_a20802.addEventa20802,
		"a20994": Ryu_a20994.addEventa20994,
		"b21014": Ryu_b21014.addSprite21014,
		"b21017": Ryu_b21017.addSprite21017,
	};
	//第二层级
	public static event = [
		["s20233",Ryu_dash_b.addSprite20233],
		["s20378",Ryu_land.addSprite20378],
		["s20381",Ryu_land2.addSprite20381],
		["s20382",Ryu_land3.addSprite20382],
		["s20239",Ryu_roll.addSprite20239],
		["s20240",Ryu_roll.addSprite20240],
		["s20285",Ryu_jump.addSprite20285],
		["s20302",Ryu_jump_f.addSprite20302],
		["s20303",Ryu_jump_b.addSprite20303],
		["s20310",Ryu_hurt1.addSprite20310],
		["s20319",Ryu_hurt2.addSprite20319],
		["s20326",Ryu_hurt3.addSprite20326],
		["s20335",Ryu_hurt4.addSprite20335],
		["s20340",Ryu_hurt5.addSprite20340],
		["s20341",Ryu_hurt6.addSprite20341],
		["s20361",Ryu_getup1.addSprite20361],
		["s20377",Ryu_getup2.addSprite20377],
		["s20443",Ryu_punch.addSprite20443],
		["s20456",Ryu_punch2.addSprite20456],
		["s20423",Ryu_punch_l.addSprite20423],
		["s20416",Ryu_punch_s.addSprite20416],
		["s20394",Ryu_burst.addSprite20394],
		["s20395",Ryu_burst2.addSprite20395],
		["s20396",Ryu_burst3.addSprite20396],
		["s20465",Ryu_kick_l.addSprite20465],
		["s20490",Ryu_kick.addSprite20490],
		["s20505",Ryu_kick1.addSprite20505],
		["s20524",Ryu_kick2.addSprite20524],
		["s20541",Ryu_squatPunch.addSprite20541],
		["s20548",Ryu_squatPunch_l.addSprite20548],
		["s20580",Ryu_squatKick.addSprite20580],
		["s20557",Ryu_squatKick_l.addSprite20557],
		["s20598",Ryu_pitch.addSprite20598],
		["s20599",Ryu_heavyHit.addSprite20599],
		["s20666",Ryu_sk1.addSprite20666],
		["s20667",Ryu_sk1_l.addSprite20667],
		["s20693",Ryu_sk2.addSprite20693],
		["s20695",Ryu_sk4.addSprite20695],
		["s20707",Ryu_sk3.addSprite20707],
		["s20708",Ryu_sk3_l.addSprite20708],
		["s20713",Ryu_sk_bodong_air.addSprite20713],
		["s20715",Ryu_sk_bodong_air2.addSprite20715],
		["s20720",Ryu_sk10.addSprite20720],
		["s20738",Ryu_sk12.addSprite20738],
		["s20760",Ryu_sk14.addSprite20760],
		["s20764",Ryu_sk13.addSprite20764],
		["s20789",Ryu_sk13_s.addSprite20789],
		["s20819",Ryu_sk_s_sys.addSprite20819],
		["s20986",Ryu_sk_s_swms.addSprite20986],
		["s20762",Ryu_sk14_s.addSprite20762],
		["s20993",Ryu_sk_d1.addSprite20993],
		["s20995",Ryu_sk_SKF.addSprite20995],
		["s20996",Ryu_sk_SKB.addSprite20996],
		["s20997",Ryu_sk_xf2.addSprite20997],
		["s21012",Ryu_sk_BGX.addSprite21012],
		["s20697",Ryu_sk4_2.addSprite20697],
		["s20696",Ryu_sk4_1.addSprite20696],
		["s21016",Ryu_sk_bd_air.addSprite21016],
		["s21061",Ryu_sk_s3.addSprite21061],
		["s21066",Ryu_sk_s3_s.addSprite21066],
		["s21067",Ryu_sk_s_q1.addSprite21067],
		["s21068",Ryu_sk_s_q2.addSprite21068],
		["b20110",Ryu_begin.addSprite20110],
		["s20133",Ryu_begin.addSprite20110],
		["s20716",Ryu_sk_bodong_air2other.addSprite20716],
		["s21018",Ryu_sk_bd_air_s.addSprite21018],
	];


	//单帧事件的MC均为三级骨骼
	//还没找到Ryu对应的5118
	public static addEventa5118(MC: zmovie.ZMovieClip, own_role: Role) {
		// _root.role_mc[sound].start(startPos,loop);
	}
	//碰撞body属性设置，基本上每帧都会调用。
	public static addEventa20163(MC: zmovie.ZMovieClip, own_role: Role) {
		MC.visible = false;
		own_role.bodyName = 'a20163';
		return;
	}
}
