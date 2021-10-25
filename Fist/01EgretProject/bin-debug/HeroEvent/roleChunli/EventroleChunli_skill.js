/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleChunli_skill = (function () {
    function EventroleChunli_skill() {
    }
    //第二层级
    EventroleChunli_skill.event = [
        ["chunli_qixingtxt", chunli_qixingtxt.addSprite16045],
        ["chunli_shanzi1", chunli_shanzi1.addSprite14037],
        ["chunlii_powerball", chunlii_powerball.addSprite16001],
        ["chunlii_powerball1", chunlii_powerball1.addSprite16009],
    ];
    //第三层级,单帧事件
    EventroleChunli_skill.singleFrameEvent = {
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
    };
    return EventroleChunli_skill;
}());
__reflect(EventroleChunli_skill.prototype, "EventroleChunli_skill");
//# sourceMappingURL=EventroleChunli_skill.js.map