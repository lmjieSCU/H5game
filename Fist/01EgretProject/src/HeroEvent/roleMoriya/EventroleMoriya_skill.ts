/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */

class EventroleMoriya_skill {
	//第二层级
	public static event = [
		["moriya_fulong_s",moriya_fulong_s.addSprite4305],
		["moriya_light",moriya_light.addSprite4303],
		["moriya_fulong",moriya_fulong.addSprite4291],
		["moriya_slash_m3",moriya_slash_m3.addSprite4441],
		["m_slash_3_2",m_slash_3_2.addSprite3197],
		["moriya_heti1",moriya_heti1.addSprite4514],
		["m_slash_3_2_nohit",m_slash_3_2_nohit.addSprite4304],
		["moriya_heti2",moriya_heti2.addSprite4616],
		["m_slash_3",m_slash_3.addSprite3185],
		["moriya_bingshu",moriya_bingshu.addSprite4372],
		["m_moonlight",m_moonlight.addSprite4263],
		["m_slash_1",m_slash_1.addSprite11415],
		["m_slash_0",m_slash_0.addSprite11431],
		["m_slash_0_2",m_slash_0_2.addSprite11430]
	];

	//第三层级,单帧事件
	public static singleFrameEvent = {
		"a4178": Moriya_a4178.addEventa4178,
		"a3196": Moriya_a3196.addEventa3196,
		"a4290": Moriya_a4290.addEventa4290,
		"HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
		"HitCheck": Hero_HitCheck.addEventHitCheck,
		"FlyingObj": Hero_flyingObj.addEventflyingObj,
	};


}
