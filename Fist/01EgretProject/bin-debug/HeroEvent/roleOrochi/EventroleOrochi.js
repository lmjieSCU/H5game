/**roleK的主骨骼帧事件处理类
 * 用于实现roleK的帧事件检查
 * 命名:Event+_roleName
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleOrochi = (function () {
    function EventroleOrochi() {
    }
    //单帧事件的MC均为三级骨骼
    EventroleOrochi.addEventa5118 = function (MC, own_role) {
        // _root.role_mc[sound].start(startPos,loop);
    };
    EventroleOrochi.addEventa2200 = function (MC, own_role) {
        MC.visible = false;
        own_role.bodyName = 'a2200';
        return;
    };
    //第三层级,单帧事件
    EventroleOrochi.singleFrameEvent = {
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "FlyingObj": Hero_flyingObj.addEventflyingObj,
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
    };
    //第二层级
    EventroleOrochi.event = [];
    return EventroleOrochi;
}());
__reflect(EventroleOrochi.prototype, "EventroleOrochi");
//# sourceMappingURL=EventroleOrochi.js.map