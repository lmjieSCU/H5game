/**roleK的主骨骼帧事件处理类
 * 用于实现roleK的帧事件检查
 * 命名:Event+_roleName
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleChunli = (function () {
    function EventroleChunli() {
    }
    //单帧事件的MC均为三级骨骼
    EventroleChunli.addEventa5118 = function (MC, own_role) {
        // _root.role_mc[sound].start(startPos,loop);
    };
    EventroleChunli.addEventa14199 = function (MC, own_role) {
        MC.visible = false;
        own_role.bodyName = 'a14199';
        return;
    };
    //第三层级,单帧事件
    EventroleChunli.singleFrameEvent = {
        //"a5118": EventroleChunli.addEventa5118,
        "a14552": Chunli_a14552.addEventa14552,
        "a14199": EventroleChunli.addEventa14199,
        "a14462": Chunli_a14462.addEventa14462,
        "a14862": Chunli_a14862.addEventa14862,
        "a15606": Chunli_a15606.addEventa15606,
        "a3196": Chunli_a3196.addEventa3196,
        "a3395": Chunli_a3395.addEventa3395,
        "a3511": Chunli_a3511.addEventa3511,
        "a3555": Chunli_a3555.addEventa3555,
        "a3563": Chunli_a3563.addEventa3563,
        "a4023": Chunli_a4023.addEventa4023,
        "a4178": Chunli_a4178.addEventa4178,
        "a4186": Chunli_a4186.addEventa4186,
        "a4188": Chunli_a4188.addEventa4188,
        "a4196": Chunli_a4196.addEventa4196,
        "a4202": Chunli_a4202.addEventa4202,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
        "b15517": Chunli_b15517.addSprite15517,
    };
    //第二层级
    EventroleChunli.event = [
        ["s14331", Chunli_dash_b.addSprite14331],
        ["s14362", Chunli_roll_f.addSprite14362],
        ["s14363", Chunli_roll_b.addSprite14363],
        ["s14477", Chunli_jump.addSprite14477],
        ["s14636", Chunli_land.addSprite14636],
        ["s14637", Chunli_land2.addSprite14637],
        ["s14638", Chunli_land3.addSprite14638],
        ["s14522", Chunli_jump_f.addSprite14522],
        ["s14549", Chunli_jump_b.addSprite14549],
        ["s14559", Chunli_hurt1.addSprite14559],
        ["s14570", Chunli_hurt2.addSprite14570],
        ["s14577", Chunli_hurt3.addSprite14577],
        ["s14587", Chunli_hurt4.addSprite14587],
        ["s14588", Chunli_hurt5.addSprite14588],
        ["s14601", Chunli_hurt6.addSprite14601],
        ["s14628", Chunli_getup1.addSprite14628],
        ["s14631", Chunli_getup2.addSprite14631],
        ["s14655", Chunli_burst.addSprite14655],
        ["s14656", Chunli_burst2.addSprite14656],
        ["s14657", Chunli_burst3.addSprite14657],
        ["s14672", Chunli_punch_l.addSprite14672],
        ["s14695", Chunli_punch.addSprite14695],
        ["s14726", Chunli_punch2.addSprite14726],
        ["s14741", Chunli_kick_l.addSprite14741],
        ["s14764", Chunli_kick.addSprite14764],
        ["s14789", Chunli_kick2.addSprite14789],
        ["s14810", Chunli_squatPunch.addSprite14810],
        ["s14827", Chunli_squatPunch_l.addSprite14827],
        ["s14848", Chunli_squatKick.addSprite14848],
        ["s14859", Chunli_squatKick_l.addSprite14859],
        ["s14081", Chunli_begin.addSprite14081],
        ["s14121", Chunli_begin2.addSprite14121],
        ["s14142", Chunli_end.addSprite14142],
        ["s14184", Chunli_end2.addSprite14184],
        ["s14885", Chunli_pitch.addSprite14885],
        ["s14869", Chunli_pitch2.addSprite14869],
        ["s14919", Chunli_heavyHit.addSprite14919],
        ["s14948", Chunli_kick_s1.addSprite14948],
        ["s14971", Chunli_sk_huaxing.addSprite14971],
        ["s15030", Chunli_sk_bailietui.addSprite15030],
        ["s15057", Chunli_sk_bailietui_air.addSprite15057],
        ["s15066", Chunli_sk_chuantui.addSprite15066],
        ["s15094", Chunli_sk_bo.addSprite15094],
        ["s15130", Chunli_sk_bo2.addSprite15130],
        ["s15180", Chunli_sk_huixuan.addSprite15180],
        ["s15183", Chunli_sk_huixuan2.addSprite15183],
        ["s15218", Chunli_sk_xuanyuan.addSprite15218],
        ["s15245", Chunli_sk_shengtian.addSprite15245],
        ["s15300", Chunli_sk_bailietui2.addSprite15300],
        ["s15316", Chunli_sk_s_bo2.addSprite15316],
        ["s15317", Chunli_sk_s_bo2_s.addSprite15317],
        ["s15382", Chunli_sk_s_fengyi.addSprite15382],
        ["s15387", Chunli_sk_s_fengyi_s.addSprite15387],
        ["s15469", Chunli_sk_s_qixing.addSprite15469],
        ["s15528", Chunli_sk_s_bo_ss.addSprite15528],
        ["s15604", Chunli_sk_s_bo.addSprite15604],
        ["s15607", Chunli_sk_s_bo_s.addSprite15607],
        ["s15621", Chunli_sk_s_qianlie_air.addSprite15621],
        ["s15622", Chunli_sk_s_qianlie_air_s.addSprite15622],
        ["s15897", Chunli_sk_s_zuhe.addSprite15897],
        ["s15960", Chunli_sk_s_tianxing.addSprite15960]
    ];
    return EventroleChunli;
}());
__reflect(EventroleChunli.prototype, "EventroleChunli");
//# sourceMappingURL=EventroleChunli.js.map