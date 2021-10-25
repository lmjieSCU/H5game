/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleKula_skill = (function () {
    function EventroleKula_skill() {
    }
    //第二层级
    EventroleKula_skill.event = [
        ["kula_ice_sheji1", kula_ice_sheji1.addSprite18585],
        ["kula_ice_qixi", kula_ice_qixi.addSprite18616],
        ["kula_wuyayao", kula_wuyayao.addSprite18690],
        ["kula_ice2max", kula_ice2max.addSprite18659],
        ["kula_ice2", kula_ice2.addSprite18658],
        ["kula_iceFire", kula_iceFire.addSprite18528],
        ["kula_ice_freeze2", kula_ice_freeze2.addSprite7739],
        ["kula_jiejie_char", kula_jiejie_char.addSprite18626],
        ["kula_iceFall_big2", kula_iceFall_big2.addSprite18634],
        ["kula_storm", kula_storm.addSprite18578],
        ["kula_iceFall_still", kula_iceFall_still.addSprite18635],
        ["kula_iceFall_big", kula_iceFall_big.addSprite18633],
        ["kula_iceKick_big", kula_iceKick_big.addSprite18638],
        ["kula_iceKick", kula_iceKick.addSprite18637],
        ["kula_ice_sheji2", kula_ice_sheji2.addSprite18586],
        ["kula_snow_sheji1", kula_snow_sheji1.addSprite19869],
        ["kula_snow_sheji2", kula_snow_sheji2.addSprite19870],
        ["kula_ice_xingchen", kula_ice_xingchen.addSprite18630],
        ["kula_hit_m4", kula_hit_m4.addSprite18530],
        ["kula_hit_m5", kula_hit_m5.addSprite19806],
        ["kula_slashEff1", kula_slashEff1.addSprite18486],
        ["kula_slashEff2", kula_slashEff2.addSprite18485]
    ];
    //第三层级,单帧事件
    EventroleKula_skill.singleFrameEvent = {
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "FlyingObj": Hero_flyingObj.addEventflyingObj,
        "a7155": Kula_a7155.addEventa7155,
        "a7156": Kula_a7156.addEventa7156,
        "a18537": Kula_a18537.addEventa18537,
    };
    return EventroleKula_skill;
}());
__reflect(EventroleKula_skill.prototype, "EventroleKula_skill");
//# sourceMappingURL=EventroleKula_skill.js.map