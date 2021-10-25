/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */

class EventroleOrochi_skill {
	//第二层级
	public static event = [
	];

	//第三层级,单帧事件
	public static singleFrameEvent = {
		"HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
		"HitCheck": Hero_HitCheck.addEventHitCheck,
		"FlyingObj": Hero_flyingObj.addEventflyingObj,
	};


}
