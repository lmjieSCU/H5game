/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */

class EventroleMai_skill {
	//第二层级
	public static event = [
		["mai_fire_longyanzhen", mai_fire_longyanzhen.addSprite7848],
		["mai_shanzi1", mai_shanzi1.addSprite6144],
		["mai_shanzi1_s", mai_shanzi1_s.addSprite7823],
		["mai_fire_longyanwu", mai_fire_longyanwu.addSprite7828],
		["mai_shanzipo", mai_shanzipo.addSprite7771],
		["mai_fireEff2", mai_fireEff2.addSprite7829],
		["mai_shanzi2_s", mai_shanzi2_s.addSprite7825],
		["mai_shanzi3_s", mai_shanzi3_s.addSprite7827],
		["mai_shanzi2", mai_shanzi2.addSprite7824],
		["mai_shanzi3", mai_shanzi3.addSprite7826]

	];

	//第三层级,单帧事件
	public static singleFrameEvent = {
		"HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
		"HitCheck": Hero_HitCheck.addEventHitCheck,
		"FlyingObj": Hero_flyingObj.addEventflyingObj,
	};


}
