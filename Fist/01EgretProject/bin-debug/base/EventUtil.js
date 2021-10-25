var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**a:单帧
 * b：无
 * 其他：正常帧
 */
var EventUtil = (function () {
    function EventUtil() {
    }
    EventUtil.eventHitLog = function (mc, frame) {
        if (frame === void 0) { frame = 0; }
        //console.log(frame + "|" + mc._name + "|" + mc._mcName + " frame " + mc.getCurrFrame() + "|p_frame=" + SplashScene.instance.bodyMC.getCurrFrame());
    };
    EventUtil.addEventLog = function (mc) {
        //console.log("addEventMC"+  mc._name + "|"+ mc._mcName + " frame " + mc.getCurrFrame());
    };
    EventUtil.printMC = function (mc, sprite) {
        if (sprite === void 0) { sprite = "0"; }
        // console.log(sprite + "|" + mc._mcName + " frame " + mc.getCurrFrame());
    };
    EventUtil.getRole_Parent = function (mc) {
        var _parent = mc.parent;
        while (_parent) {
            if (_parent instanceof Role) {
                return _parent;
            }
            _parent = _parent.parent;
        }
        return null;
    };
    /**检查加入帧事件*/
    EventUtil.checkFrameEvent = function (mc, roleName, own_role) {
        if (EventUtil.Roles.indexOf(roleName) == -1 && EventUtil.skill_effects.indexOf(roleName) == -1) {
            return;
        }
        var EventClass = eval("Event" + roleName);
        if (mc.frameLabel == mc._mcName) {
            return;
        }
        if (!EventUtil.isContained(EventClass.event, commmon_skill.event) && roleName.slice(-5) == "skill") {
            EventroleK_skill.event.push.apply(EventClass.event, commmon_skill.event);
        }
        // Role的事件处理调用(第二层级的骨骼帧事件,如walk,punch等动作骨骼)
        for (var i = 0; i < EventClass.event.length; i++) {
            if (mc._mcName == EventClass.event[i][0]) {
                EventClass.event[i][1].call(mc, mc, own_role);
                return;
            }
        }
    };
    EventUtil.isContained = function (a, b) {
        if (!(a instanceof Array) || !(b instanceof Array))
            return false;
        if (a.length < b.length)
            return false;
        var aStr = a.toString();
        for (var i = 0, len = b.length; i < len; i++) {
            if (aStr.indexOf(b[i]) == -1)
                return false;
        }
        return true;
    };
    /**这个里面处理子骨骼下，只有一帧的事件, 这里所有英雄的事件处理是一致的
     * 目前存在多帧事件
     * 目前用于处理第三层级的骨骼事件
    * */
    EventUtil.checkSingleFrameEvent = function (MC, roleName, own_role) {
        if (EventUtil.Roles.indexOf(roleName) == -1 && EventUtil.skill_effects.indexOf(roleName) == -1) {
            return;
        }
        var EventClass = eval("Event" + roleName);
        var old_children_num = MC.$children.length;
        for (var i = 0; i < MC.$children.length; i++) {
            if (MC.$children[i] instanceof zmovie.ZMovieClip) {
                var mcName = MC.$children[i]._mcName;
                if (EventClass.singleFrameEvent[mcName]) {
                    EventClass.singleFrameEvent[mcName].call(MC, MC.$children[i], own_role);
                    if (MC.$children.length != old_children_num) {
                        i = -1;
                        old_children_num = MC.$children.length;
                        continue;
                    }
                }
                if (MC.$children[i] instanceof zmovie.ZMovieClip) {
                    MC.$children[i].checkFrameEvent(); //三层多帧事件
                }
            }
        }
    };
    EventUtil.renderChildren = function (mc) {
        var _loc1_ = null;
        var _loc3_ = null;
        var _loc4_ = 0;
        var childmovie = null;
        var numChildren = mc.numChildren;
        for (var childindex = 0; childindex < numChildren; childindex++) {
            if (mc.getChildAt(childindex) instanceof zmovie.ZMovieClip && !mc.getChildAt(childindex)._nextFrameStop) {
                childmovie = mc.getChildAt(childindex);
                childmovie.nextFrame();
            }
        }
    }; // end function
    EventUtil.Roles = ["roleK", "roleTerry", "roleRyu", "roleChunli", "roleMai", "roleMoriya", "roleKula"];
    EventUtil.skill_effects = ["roleK_skill", "roleTerry_skill", "roleRyu_skill", "roleChunli_skill", 'ken_waveCannon', 'terry_Rock1', "roleMai_skill", "roleMoriya_skill",
        "roleKula_skill"
    ];
    return EventUtil;
}());
__reflect(EventUtil.prototype, "EventUtil");
//# sourceMappingURL=EventUtil.js.map