/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */

class EventroleK_skill {
	//第二层级
	public static event = [
		["fire1", fire1.addSprite4857],
		["fire2", fire2.addSprite4772],
		["fire5", fire5.addSprite4898],
		["fire6", fire6.addSprite4918],
		["fire7", fire7.addSprite4921],
		["fire8", fire8.addSprite4922],
		['fire9',fire9.addSprite4806],
		["fire9_3", fire9_3.addSprite4823],
		["boom1_mc", boom1_mc.addSprite12883],
		['k_boom1_mc', k_boom1_mc.addSprite4736],
		['eff_rush', eff_rush.addSprite6067],
		['hitCombo1', hitCombo1.addSprite4739],
		['hitCombo2', hitCombo2.addSprite1627],
		['k_fire1_s', k_fire1_s.addSprite4858],
		['k_fire2_s', k_fire2_s.addSprite4773],
		["k_glass",k_glass.addSprite4777],
		["boom_airDash",boom_airDash.addSprite4738],
		["k_airDash",k_airDash.addSprite6071],
		["k_lastFire2",k_lastFire2.addSprite6038],
		["boom_redongMax",boom_redongMax.addSprite4737],
		["k_fire9_s",k_fire9_s.addSprite4807],
		["k_fire_land",k_fire_land.addSprite4690],
	];

	//第三层级,单帧事件
	public static singleFrameEvent = {
		"HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
		"HitCheck": Hero_HitCheck.addEventHitCheck,
		"FlyingObj": Hero_flyingObj.addEventflyingObj,
	};


}
