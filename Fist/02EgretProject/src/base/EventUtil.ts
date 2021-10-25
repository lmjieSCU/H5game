/**a:单帧
 * b：无
 * 其他：正常帧
 */
class EventUtil {
	public static Roles: Array<string> = ["roleK", "roleTerry", "roleRyu", "roleChunli","roleMai","roleMoriya"];
	public static skill_effects: Array<string> = ["roleK_skill", "roleTerry_skill", "roleRyu_skill", "roleChunli_skill", 'ken_waveCannon','terry_Rock1',"roleMai_skill","roleMoriya_skill"];
	public static eventHitLog(mc: any, frame: number = 0) {
		//console.log(frame + "|" + mc._name + "|" + mc._mcName + " frame " + mc.getCurrFrame() + "|p_frame=" + SplashScene.instance.bodyMC.getCurrFrame());
	}
	public static addEventLog(mc: any) {
		//console.log("addEventMC"+  mc._name + "|"+ mc._mcName + " frame " + mc.getCurrFrame());
	}
	public static printMC(mc: any, sprite: string = "0") {
		// console.log(sprite + "|" + mc._mcName + " frame " + mc.getCurrFrame());
	}
	public static getRole_Parent(mc: zmovie.ZMovieClip): Role {
		let _parent = mc.parent;
		while (_parent) {
			if (_parent instanceof Role) {
				return _parent;
			}
			_parent = _parent.parent;
		}
		return null;
	}


	/**检查加入帧事件*/
	public static checkFrameEvent(mc: zmovie.ZMovieClip, roleName: string, own_role: Role) {
		if (EventUtil.Roles.indexOf(roleName) == -1 && EventUtil.skill_effects.indexOf(roleName) == -1) {
			return;
		}
		let EventClass = eval("Event" + roleName);

		if (mc.frameLabel == mc._mcName) {
			return;
		}
		if (!EventUtil.isContained(EventClass.event, commmon_skill.event) && roleName.slice(-5) == "skill") {
			EventroleK_skill.event.push.apply(EventClass.event, commmon_skill.event);
		}

		// Role的事件处理调用(第二层级的骨骼帧事件,如walk,punch等动作骨骼)
		for (let i = 0; i < EventClass.event.length; i++) {
			if (mc._mcName == EventClass.event[i][0]) {
				EventClass.event[i][1].call(mc, mc, own_role);
				return;
			}
		}
	}
	public static isContained(a, b) {
		if (!(a instanceof Array) || !(b instanceof Array)) return false;
		if (a.length < b.length) return false;
		var aStr = a.toString();
		for (var i = 0, len = b.length; i < len; i++) {
			if (aStr.indexOf(b[i]) == -1) return false;
		}
		return true;
	}

	/**这个里面处理子骨骼下，只有一帧的事件, 这里所有英雄的事件处理是一致的
	 * 目前存在多帧事件
	 * 目前用于处理第三层级的骨骼事件
	* */
	public static checkSingleFrameEvent(MC: zmovie.ZMovieClip, roleName: string, own_role: Role) {
		if (EventUtil.Roles.indexOf(roleName) == -1 && EventUtil.skill_effects.indexOf(roleName) == -1) {
			return;
		}
		let EventClass =eval("Event" + roleName);
		let old_children_num = MC.$children.length;
		for (let i = 0; i < MC.$children.length; i++) {
			if (MC.$children[i] instanceof zmovie.ZMovieClip) {
				let mcName: string = (<zmovie.ZMovieClip>MC.$children[i])._mcName;
				if (EventClass.singleFrameEvent[mcName]) {
					EventClass.singleFrameEvent[mcName].call(MC, <zmovie.ZMovieClip>MC.$children[i], own_role);
					if (MC.$children.length != old_children_num) {
						i = -1;
						old_children_num = MC.$children.length;
						continue;
					}
				}
				if(MC.$children[i] instanceof zmovie.ZMovieClip){
					(<zmovie.ZMovieClip>MC.$children[i]).checkFrameEvent();//三层多帧事件
				}
			}
		}
	}


	public static renderChildren(mc: zmovie.ZMovieClip) {
		let _loc1_ = null;
		let _loc3_ = null;
		let _loc4_: number = 0;
		let childmovie: zmovie.ZMovieClip = null;
		let numChildren: number = mc.numChildren;
		for (let childindex: number = 0; childindex < numChildren; childindex++) {
			if (mc.getChildAt(childindex) instanceof zmovie.ZMovieClip && !(<zmovie.ZMovieClip>mc.getChildAt(childindex))._nextFrameStop) {
				childmovie = <zmovie.ZMovieClip>mc.getChildAt(childindex);
				childmovie.nextFrame();
			}
		}
	}// end function



}
