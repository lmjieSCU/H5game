/**roleK的主骨骼帧事件处理类
 * 用于实现roleK的帧事件检查
 * 命名:Event+_roleName
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleK = (function () {
    function EventroleK() {
    }
    //单帧事件的MC均为三级骨骼
    EventroleK.addEventa5118 = function (MC, own_role) {
        // _root.role_mc[sound].start(startPos,loop);
    };
    EventroleK.addEventa2200 = function (MC, own_role) {
        MC.visible = false;
        own_role.bodyName = 'a2200';
        return;
    };
    //第三层级,单帧事件
    EventroleK.singleFrameEvent = {
        "a985": K_a985.addEventa985,
        "a917": K_a917.addEventa917,
        "a863": K_a863.addEventa863,
        "a825": K_a825.addEventa825,
        "a804": K_a804.addEventa804,
        "a742": K_a742.addEventa742,
        "a725": K_a725.addEventa725,
        "a687": K_a687.addEventa687,
        "a594": K_a594.addEventa594,
        "a5765": K_a5765.addEventa5765,
        "a5755": K_a5755.addEventa5755,
        "a5740": K_a5740.addEventa5740,
        "a5537": K_a5537.addEventa5537,
        "a5118": EventroleK.addEventa5118,
        "a2200": EventroleK.addEventa2200,
        "a1227": K_a1227.addEventa1227,
        "a1124": K_a1124.addEventa1124,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "FlyingObj": Hero_flyingObj.addEventflyingObj,
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
        "s5739": K_sk_s1_5739.addSprite5739,
    };
    //第二层级
    EventroleK.event = [
        ["s5146", K_dash.addSprite5146],
        ["s5296", K_land.addSprite5296],
        ["s5301", K_land2.addSprite5301],
        ["s5308", K_land3.addSprite5308],
        ["s5154", K_roll.addSprite5154],
        ["s5159", K_roll.addSprite5159],
        //
        ["s5212", K_jump.addSprite5212],
        //
        ["s5558", K_pitch.addSprite5558],
        ["s5382", K_punch2.addSprite5382],
        ["s5367", K_punch.addSprite5367],
        ["s5326", K_punch_l.addSprite5326],
        ["s5345", K_punch_s1.addSprite5345],
        ["s5416", K_kick.addSprite5416],
        ["s5459", K_kick2.addSprite5459],
        ["s5393", K_kick_l.addSprite5393],
        ["s5478", K_kick_s2.addSprite5478],
        ["s5497", K_squatPunch.addSprite5497],
        ["s5506", K_squatPunch_l.addSprite5506],
        ["s5534", K_squatKick.addSprite5534],
        ["s5515", K_squatKick_l.addSprite5515],
        ["s5584", K_heavyHit.addSprite5584],
        //
        ["s5221", K_hurt1.addSprite5221],
        ["s5230", K_hurt2.addSprite5230],
        ["s5239", K_hurt3.addSprite5239],
        ["s5248", K_hurt4.addSprite5248],
        ["s5249", K_hurt5.addSprite5249],
        ["s5262", K_hurt6.addSprite5262],
        ["s5279", K_getup1.addSprite5279],
        ["s5295", K_getup2.addSprite5295],
        //
        ["s5855", K_sk_dbp.addSprite5855],
        ["s5656", K_sk_dfp.addSprite5656],
        ["s5673", K_sk_dfp_s2.addSprite5673],
        ["s5675", K_sk_dfp_s3.addSprite5675],
        ["s5687", K_sk_dfk.addSprite5687],
        ["s5688", K_sk_dfk_hit.addSprite5688],
        ["s5606", K_sk_dbk.addSprite5606],
        ["s5608", K_sk_dbk2.addSprite5608],
        ["s5636", K_sk_fdfp.addSprite5636],
        ["s5638", K_sk_fdfp2.addSprite5638],
        ["s5843", K_sk_sanduan_2.addSprite5843],
        //
        ["s5317", K_burst_a.addSprite5317],
        ["s5318", K_burst_d.addSprite5318],
        ["s5319", K_burst_p.addSprite5319],
        //
        ["s5766", K_sk_s1.addSprite5766],
        ["s5787", K_sk_s2.addSprite5787],
        ["s5806", K_sk_s3.addSprite5806],
        ["s5834", K_sk_s4.addSprite5834],
        ["s5836", K_sk_s5.addSprite5836],
        ["s4969", K_begin2.addSprite4969],
        ["s5845", K_sk_dbk_2.addSprite5845],
        ["s5878", K_sk_menghuti.addSprite5878],
        ["s5879", K_sk_menghuti_s.addSprite5879],
        ["s5938", K_sk_liandong.addSprite5938],
        ["s5941", K_sk_xiangdong.addSprite5941],
        ["s5786", K_sk_s1_s.addSprite5786],
        ["s5807", K_sk_s3_s.addSprite5807],
        ["s5858", K_sk_s1_2_s.addSprite5858],
        ["s5856", K_sk_s1_2.addSprite5856],
        ["s4954", K_begin.addSprite4954],
        ["s5040", K_end.addSprite5040],
        ["s5846", K_sk_dbk_2_air.addSprite5846],
    ];
    return EventroleK;
}());
__reflect(EventroleK.prototype, "EventroleK");
//# sourceMappingURL=EventroleK.js.map