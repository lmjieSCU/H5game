/**roleK的主骨骼帧事件处理类
 * 用于实现roleK的帧事件检查
 * 命名:Event+_roleName
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */

class EventroleOrochi {

	//第三层级,单帧事件
	public static singleFrameEvent = {
		"HitCheck": Hero_HitCheck.addEventHitCheck,
		"FlyingObj": Hero_flyingObj.addEventflyingObj,
		"HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
	};
	//第二层级
	public static event = [
	];


	//单帧事件的MC均为三级骨骼
	public static addEventa5118(MC: zmovie.ZMovieClip, own_role: Role) {
		// _root.role_mc[sound].start(startPos,loop);
	}

	public static addEventa2200(MC: zmovie.ZMovieClip, own_role: Role) {
		MC.visible = false;
		own_role.bodyName = 'a2200';
		return;
	}

}
