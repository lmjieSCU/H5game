/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleOrochi_skill = (function () {
    function EventroleOrochi_skill() {
    }
    //第二层级
    EventroleOrochi_skill.event = [];
    //第三层级,单帧事件
    EventroleOrochi_skill.singleFrameEvent = {
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "FlyingObj": Hero_flyingObj.addEventflyingObj,
    };
    return EventroleOrochi_skill;
}());
__reflect(EventroleOrochi_skill.prototype, "EventroleOrochi_skill");
//# sourceMappingURL=EventroleOrochi_skill.js.map