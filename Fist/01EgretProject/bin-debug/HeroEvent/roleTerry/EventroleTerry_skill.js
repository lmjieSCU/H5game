/**帧事件类
 * roleK的子技能和特效
 * singleFrameEvent用于增加单帧事件
 * event用于增加一般帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleTerry_skill = (function () {
    function EventroleTerry_skill() {
    }
    //第三层级,单帧事件
    EventroleTerry_skill.singleFrameEvent = {
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
    }; //使用统一的Hero_HitCheck_obj和Hero_HitCheck_obj
    //第二层级
    EventroleTerry_skill.event = [
        ["terry_shanzi1", terry_shanzi1.addSprite8052],
        ["terry_shanzi2", terry_shanzi2.addSprite8083],
        ["terry_shanzi3", terry_shanzi3.addSprite7907],
        ["terry_shanzi4", terry_shanzi4.addSprite7941],
        ["terry_shanzi6", terry_shanzi6.addSprite7971],
        ["terry_shanzi7", terry_shanzi7.addSprite8005],
        ["terry_shanzi8", terry_shanzi8.addSprite8006],
        ["terry_Rock1", terry_Rock1.addSprite8298],
        ["terry_fireEff2", terry_fireEff2.addSprite8032],
    ];
    return EventroleTerry_skill;
}());
__reflect(EventroleTerry_skill.prototype, "EventroleTerry_skill");
//# sourceMappingURL=EventroleTerry_skill.js.map