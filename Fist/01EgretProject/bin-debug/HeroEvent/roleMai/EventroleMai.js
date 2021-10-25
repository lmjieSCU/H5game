/**roleK的主骨骼帧事件处理类
 * 用于实现roleK的帧事件检查
 * 命名:Event+_roleName
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleMai = (function () {
    function EventroleMai() {
    }
    //单帧事件的MC均为三级骨骼
    EventroleMai.addEventa5118 = function (MC, own_role) {
        // _root.role_mc[sound].start(startPos,loop);
    };
    EventroleMai.addEventa6348 = function (MC, own_role) {
        MC.visible = false;
        own_role.bodyName = 'a6348';
        return;
    };
    //第三层级,单帧事件
    EventroleMai.singleFrameEvent = {
        "a6433": Mai_a6433.addEventa6433,
        "a6348": EventroleMai.addEventa6348,
        "a6519": Mai_a6519.addEventa6519,
        "a6541": Mai_a6541.addEventa6541,
        "a6557": Mai_a6557.addEventa6557,
        "a6754": Mai_a6754.addEventa6574,
        "a6594": Mai_a6594.addEventa6954,
        "a6617": Mai_a6617.addEventa6617,
        "a6637": Mai_a6637.addEventa6637,
        "a6917": Mai_a6914.addEventa6914,
        "a7078": Mai_a7078.addEventa7078,
        "a7153": Mai_a7153.addEventa7153,
        "a7155": Mai_a7155.addEventa7155,
        "a7156": Mai_a7156.addEventa7156,
        "a7159": Mai_a7159.addEventa7159,
        "a7441": Mai_a7441.addEventa7441,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "FlyingObj": Hero_flyingObj.addEventflyingObj,
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
    };
    //第二层级
    EventroleMai.event = [
        ["s6200", Mai_begin.addSprite6200],
        ["s6242", Mai_begin2.addSprite6242],
        ["s6287", Mai_end.addSprite6287],
        ["s6326", Mai_end2.addSprite6326],
        ["s6426", Mai_dash_b.addSprite6426],
        ["s6446", Mai_roll_f.addSprite6446],
        ["s6447", Mai_roll_b.addSprite6447],
        ["s6497", Mai_jump.addSprite6497],
        ["s6512", Mai_jump_f.addSprite6512],
        ["s6515", Mai_jump_b.addSprite6515],
        ["s6524", Mai_hurt1.addSprite6524],
        ["s6531", Mai_hurt2.addSprite6531],
        ["s6540", Mai_hurt3.addSprite6540],
        ["s6550", Mai_hurt4.addSprite6550],
        ["s6551", Mai_hurt5.addSprite6551],
        ["s6552", Mai_hurt6.addSprite6552],
        ["s6568", Mai_getup1.addSprite6568],
        ["s6583", Mai_getup2.addSprite6583],
        ["s6584", Mai_land.addSprite6584],
        ["s6586", Mai_land2.addSprite6586],
        ["s6587", Mai_land3.addSprite6587],
        ["s6595", Mai_burst.addSprite6595],
        ["s6596", Mai_burst2.addSprite6596],
        ["s6597", Mai_burst3.addSprite6597],
        ["s6606", Mai_punch_l.addSprite6606],
        ["s6650", Mai_punch.addSprite6650],
        ["s6657", Mai_punch2.addSprite6657],
        ["s6634", Mai_kick_s1.addSprite6634],
        ["s6672", Mai_kick_l.addSprite6672],
        ["s6683", Mai_kick.addSprite6683],
        ["s6694", Mai_kick2.addSprite6694],
        ["s6703", Mai_squatPunch.addSprite6703],
        ["s6720", Mai_squatPunch_l.addSprite6720],
        ["s6743", Mai_squatKick.addSprite6743],
        ["s6750", Mai_squatKick_l.addSprite6750],
        ["s6795", Mai_pitch.addSprite6795],
        ["s6804", Mai_heavyHit.addSprite6804],
        ["s6832", Mai_sk_huaxing.addSprite6832],
        ["s6845", Mai_sk_renfeng.addSprite6845],
        ["s6862", Mai_sk_feishu.addSprite6862],
        ["s6887", Mai_sk_d2.addSprite6887],
        ["s6906", Mai_sk_d1.addSprite6906],
        ["s6927", Mai_sk_huadieshan.addSprite6927],
        ["s6954", Mai_sk_qianniao.addSprite6954],
        ["s6986", Mai_sk_bailu.addSprite6986],
        ["s7003", Mai_sk_bailu2.addSprite7003],
        ["s7009", Mai_sk_feixiang.addSprite7009],
        ["s7027", Mai_sk_longyanwu.addSprite7027],
        ["s7077", Mai_sk_longyanwu2.addSprite7077],
        ["s7106", Mai_sk_s_shuiniao.addSprite7106],
        ["s7107", Mai_sk_s_shuiniao_s.addSprite7107],
        ["s7139", Mai_sk_s_renfeng.addSprite7139],
        ["s7150", Mai_sk_s_renfeng_s.addSprite7150],
        ["s7281", Mai_sk_s_qianzai1.addSprite7281],
        ["s7438", Mai_sk_s_heti.addSprite7438],
        ["s7454", Mai_sk_s_hualan.addSprite7454],
        ["s7455", Mai_sk_s_hualan_s.addSprite7455],
        ["s7509", Mai_sk_s_fenghuang.addSprite7509],
        ["s7512", Mai_sk_s_fenghuang_s.addSprite7512],
        ["s7532", Mai_sk_s_fenshen.addSprite7532],
        ["s7650", Mai_sk_s_heti2.addSprite7650],
        ["s7664", Mai_sk_luan1.addSprite7664],
        ["s7673", Mai_sk_luan2.addSprite7673],
        ["s7674", Mai_sk_luan3.addSprite7674],
        ["s7675", Mai_sk_luan4.addSprite7675],
        ["s7714", Mai_sk_luan5.addSprite7714],
        ["s7729", Mai_sk_hulu.addSprite7729]
    ];
    return EventroleMai;
}());
__reflect(EventroleMai.prototype, "EventroleMai");
//# sourceMappingURL=EventroleMai.js.map