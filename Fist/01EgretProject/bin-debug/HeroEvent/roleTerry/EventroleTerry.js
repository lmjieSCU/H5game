/**帧事件类
 * 命名:Event+_roleName
 * singleFrameEvent用于增加单帧事件
 * event用于增加一般帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleTerry = (function () {
    function EventroleTerry() {
    }
    //单帧事件的MC均为三级骨骼
    EventroleTerry.addEventa5118 = function (MC, own_role) {
    };
    EventroleTerry.addEventa6348 = function (MC, own_role) {
        MC.visible = false;
        own_role.bodyName = 'a6348';
        return;
    };
    //第三层级,单帧事件
    EventroleTerry.singleFrameEvent = {
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "a6433": Terry_a6433.addEventa6433,
        "a6348": EventroleTerry.addEventa6348,
        "a8669": Terry_a8669.addEventa8669,
        "a6617": Terry_a6617.addEventa6617,
        "a6557": Terry_a6557.addEventa6557,
        "a6914": Terry_a6914.addEventa6914,
        "a6594": Terry_a6594.addEventa6594,
        "a7078": Terry_a7078.addEventa7078,
        "a7159": Terry_a7159.addEventa7159,
        "a7153": Terry_a7153.addEventa7153,
        "a7155": Terry_a7155.addEventa7155,
        "a7156": Terry_a7156.addEventa7156,
        "a6754": Terry_a6754.addEventa6754,
        "a8582": Terry_a8585.addEventa8585,
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
    };
    //第二层级
    EventroleTerry.event = [
        ["s8529", Terry_jump.addSprite8529],
        ["s8632", Terry_land.addSprite8632],
        ["s8633", Terry_land2.addSprite8633],
        ["s8634", Terry_land3.addSprite8634],
        ["s8480", Terry_roll.addSprite8480],
        ["s8482", Terry_roll.addSprite8482],
        ["s8462", Terry_dash.addSprite8462],
        ["s8553", Terry_jump_f.addSprite8553],
        ["s8554", Terry_jump_b.addSprite8554],
        ["s8666", Terry_punch_l.addSprite8666],
        ["s8676", Terry_punch.addSprite8676],
        ["s8685", Terry_punch2.addSprite8685],
        ["s8690", Terry_kick_l.addSprite8690],
        ["s8715", Terry_kick.addSprite8715],
        ["s8751", Terry_kick2.addSprite8751],
        ["s8564", Terry_hurt1.addSprite8564],
        ["s8573", Terry_hurt2.addSprite8573],
        ["s8582", Terry_hurt3.addSprite8582],
        ["s8592", Terry_hurt4.addSprite8592],
        ["s8593", Terry_hurt5.addSprite8593],
        ["s8594", Terry_hurt6.addSprite8594],
        ["s8612", Terry_getup1.addSprite8612],
        ["s8631", Terry_getup2.addSprite8631],
        ["s8758", Terry_squatPunch.addSprite8758],
        ["s8761", Terry_squatPunch_l.addSprite8761],
        ["s8768", Terry_squatKick.addSprite8768],
        ["s8775", Terry_squatKick_l.addSprite8775],
        ["s8920", Terry_df_p_EX.addSprite8920],
        ["s9025", Terry_db_p.addSprite9025],
        ["s8916", Terry_df_ph.addSprite8916],
        ["s9141", Terry_df_k_EX.addSprite9141],
        ["s8945", Terry_db_k.addSprite8945],
        ["s8661", Terry_burst3.addSprite8661],
        ["s8660", Terry_burst2.addSprite8660],
        ["s8649", Terry_burst.addSprite8649],
        ["s8870", Terry_f_p.addSprite8870],
        ["s8838", Terry_heavyHit.addSprite8838],
        ["s8853", Terry_f_p_EX.addSprite8853],
        ["s8881", Terry_df_p.addSprite8881],
        ["s8896", Terry_bdf_k.addSprite8896],
        ["s9026", Terry_db_pl.addSprite9026],
        ["s9106", Terry_fdf_kl.addSprite9106],
        ["s9045", Terry_fdf_p.addSprite9045],
        ["s9266", Terry_dfdf_k.addSprite9266],
        ["s9267", Terry_dfdf_k_max.addSprite9267],
        ["s9208", Terry_dbdf_p.addSprite9208],
        ["s9560", Terry_df_o.addSprite9560],
        ["s9629", Terry_db_o.addSprite9629],
        ["s9238", Terry_dbdf_p_max.addSprite9238],
        ["s8803", Terry_pitch.addSprite8803],
        ["s9124", Terry_fdf_kh.addSprite9124],
        ["s8984", Terry_fdb_p_EX.addSprite8984],
        ["s9156", Terry_df_k1.addSprite9156],
        ["s9175", Terry_df_k2.addSprite9175],
        ["s9190", Terry_df_k3.addSprite9190],
        ["s8919", Terry_df_pl.addSprite8919],
        ["s9058", Terry_fdf_p_EX.addSprite9058],
        ["s9125", Terry_fdf_k_EX.addSprite9125],
        ["s9330", Terry_dfdf_k_EX.addSprite9330],
        ["s9331", Terry_dfdf_k_EX_max.addSprite9331],
        ["s9668", Terry_df_o_EX.addSprite9668],
        ["s9685", Terry_db_o_EX.addSprite9685],
        ["s8338", Terry_begin.addSprite8338],
        ["s8349", Terry_begin2.addSprite8349]
    ];
    return EventroleTerry;
}());
__reflect(EventroleTerry.prototype, "EventroleTerry");
//# sourceMappingURL=EventroleTerry.js.map