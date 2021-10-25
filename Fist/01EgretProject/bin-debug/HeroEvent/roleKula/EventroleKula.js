/**roleK的主骨骼帧事件处理类
 * 用于实现roleK的帧事件检查
 * 命名:Event+_roleName
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleKula = (function () {
    function EventroleKula() {
    }
    //单帧事件的MC均为三级骨骼
    EventroleKula.addEventa5118 = function (MC, own_role) {
        // _root.role_mc[sound].start(startPos,loop);
    };
    EventroleKula.addEventa18856 = function (MC, own_role) {
        MC.visible = false;
        own_role.bodyName = 'a18856';
        return;
    };
    //第三层级,单帧事件
    EventroleKula.singleFrameEvent = {
        "a18856": EventroleKula.addEventa18856,
        "a18962": Kula_a18962.addEventa18962,
        "a19082": Kula_a19082.addEventa19082,
        "a19125": Kula_a19125.addEventa19125,
        "a19418": Kula_a19418.addEventa19418,
        "s19439": Kula_a19439.addEventa19439,
        "a19498": Kula_a19498.addEventa19498,
        "a19530": Kula_a19530.addEventa19530,
        "a19549": Kula_a19549.addEventa19549,
        "a19574": Kula_a19574.addEventa19574,
        "a6519": Kula_a6519.addEventa6519,
        "a6754": Kula_a6754.addEventa6754,
        "a7153": Kula_a7153.addEventa7153,
        "a7155": Kula_a7155.addEventa7155,
        "a7156": Kula_a7156.addEventa7156,
        "a7159": Kula_a7159.addEventa7159,
        "a8669": Kula_a8669.addEventa8669,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "FlyingObj": Hero_flyingObj.addEventflyingObj,
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
    };
    //第二层级
    EventroleKula.event = [
        ["s18748", Kula_bengin.addSprite18748],
        ["s18786", Kula_end.addSprite18786],
        ["s18818", Kula_end2.addSprite18818],
        ["s18855", Kula_lose.addSprite18855],
        ["s18955", Kula_dash_b.addSprite18955],
        ["s18967", Kula_roll_f.addSprite18967],
        ["s18972", Kula_roll_b.addSprite18972],
        ["s19021", Kula_jump.addSprite19021],
        ["s19032", Kula_jump_b.addSprite19032],
        ["s19041", Kula_hurt1.addSprite19041],
        ["s19050", Kula_hurt2.addSprite19050],
        ["s19059", Kula_hurt3.addSprite19059],
        ["s19069", Kula_hurt4.addSprite19069],
        ["s19077", Kula_hurt6.addSprite19077],
        ["s19095", Kula_getup1.addSprite19095],
        ["s19106", Kula_getup2.addSprite19106],
        ["s19107", Kula_land.addSprite19107],
        ["s19112", Kula_land2.addSprite19112],
        ["s19113", Kula_land3.addSprite19113],
        ["s19128", Kula_burst.addSprite19128],
        ["s19129", Kula_burst2.addSprite19129],
        ["s19130", Kula_burst3.addSprite19130],
        ["s19144", Kula_punch_l.addSprite19144],
        ["s19157", Kula_punch_s1.addSprite19157],
        ["s19189", Kula_punch.addSprite19189],
        ["s19210", Kula_punch2.addSprite19210],
        ["s19229", Kula_kick_l.addSprite19229],
        ["s19250", Kula_kick.addSprite19250],
        ["s19273", Kula_kick2.addSprite19273],
        ["s19292", Kula_squatPunch.addSprite19292],
        ["s19301", Kula_squatPunch_l.addSprite19301],
        ["s19316", Kula_squatKick.addSprite19316],
        ["s19327", Kula_squatKick_l.addSprite19327],
        ["s19353", Kula_pitch.addSprite19353],
        ["s19368", Kula_heavyHit.addSprite19368],
        ["s19387", Kula_sk_huaxing.addSprite19387],
        ["s19413", Kula_sk_bingdian.addSprite19413],
        ["s19427", Kula_sk_dbk.addSprite19427],
        ["s19429", Kula_sk_dbk_l.addSprite19429],
        ["s19440", Kula_sk_tibing0.addSprite19440],
        ["s19441", Kula_sk_tibing1.addSprite19441],
        ["s19461", Kula_sk_dfp.addSprite19461],
        ["s19476", Kula_sk_fdfp.addSprite19476],
        ["s19477", Kula_sk_fdfp_l.addSprite19477],
        ["s19488", Kula_sk_dongjie.addSprite19488],
        ["s19525", Kula_sk_beike.addSprite19525],
        ["s19546", Kula_sk_s_bingren.addSprite19546],
        ["s19547", Kula_sk_s_bingren_s.addSprite19547],
        ["s19558", Kula_sk_s_luanwu.addSprite19558],
        ["s19559", Kula_sk_s_luanwu_s.addSprite19559],
        ["s19599", Kula_sk_s_xingchen.addSprite19599],
        ["s19617", Kula_sk_s_jiejie.addSprite19617],
        ["s19620", Kula_sk_tibing.addSprite19620],
        ["s19621", Kula_sk_tibing_s.addSprite19621],
        ["s19678", Kula_sk_ZSSJ.addSprite19678],
        ["s19679", Kula_sk_ZSSJ2.addSprite19679],
        ["s19680", Kula_sk_tibing2.addSprite19680],
        ["s19683", Kula_sk_flyKick.addSprite19683],
        ["s19698", Kula_sk_s_handong.addSprite19698],
        ["s19699", Kula_sk_s_handong_s.addSprite19699],
        ["s19701", Kula_sk_s_luobing.addSprite19701],
        ["s19702", Kula_sk_s_luobing_s.addSprite19702],
        ["s19703", Kula_sk_s_xiangdong.addSprite19703],
        ["s19711", Kula_sk_s_xiangdong_s.addSprite19711],
        ["s19712", Kula_sk_s_storm.addSprite19712],
        ["s19797", Kula_sk_s_luanren.addSprite19797],
    ];
    return EventroleKula;
}());
__reflect(EventroleKula.prototype, "EventroleKula");
//# sourceMappingURL=EventroleKula.js.map