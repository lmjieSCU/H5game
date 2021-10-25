/**roleK的子骨骼帧事件处理类
 * 用于实现roleK子骨骼,即addskill()...中生成的骨骼帧事件检查
 * 命名:Event+_roleName + _skill
 * event用于增加第二层级帧事件
 * singleFrameEvent用于增加第三层级且单帧事件
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventroleRyu_skill = (function () {
    function EventroleRyu_skill() {
    }
    //第二层级
    EventroleRyu_skill.event = [
        ["wave", wave.addSprite20011],
        ["wave_h", wave_h.addSprite20044],
        ["wave_l", wave_l.addSprite20045],
        ["wave_air3", wave_air3.addSprite21299],
        ["wave_s", wave_s.addSprite20084],
        ["wave_ss", wave_ss.addSprite20085],
        ["ryu_dragon", ryu_dragon.addSprite19920],
        ["wave_s2", wave_s2.addSprite20086],
        ["ken_waveCannon", ken_waveCannon.addSprite21094],
        ["waveCannon", waveCannon.addSprite19986],
        ["ryu_exXie", ryu_exXie.addSprite21223],
        ["ryu_assist_ken", ryu_assist_ken.addSprite21272],
        ["wave_s3", wave_s3.addSprite21273],
        ["hitFire1", hitFire1.addSprite10783],
        ["s1", s1.addSprite11356],
        ["s2", s2.addSprite11289],
        ["s3", s3.addSprite7337],
        ["s1_s", s1_s.addSprite11357],
        ["s1_bg", s1_bg.addSprite11184],
        ["bgEff_super0", bgEff_super0.addSprite10923],
        ["bgEff_super1", bgEff_super1.addSprite10934],
        ["bgEff_super2", bgEff_super2.addSprite10952],
        ["down1", down1.addSprite11077],
        ["down2", down2.addSprite11121],
        ["down3", down3.addSprite11102],
        ["wave_head", wave_head.addSprite19941],
        ["ryu_eff_tian", ryu_eff_tian.addSprite19935],
        ["wave_air", wave_air.addSprite20021],
        ["wave_air2", wave_air2.addSprite21080],
        ["wave_air2_s", wave_air2_s.addSprite20043],
    ];
    //第三层级,单帧事件
    EventroleRyu_skill.singleFrameEvent = {
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
        "FlyingObj": Hero_flyingObj.addEventflyingObj,
    };
    return EventroleRyu_skill;
}());
__reflect(EventroleRyu_skill.prototype, "EventroleRyu_skill");
var Eventken_waveCannon = (function () {
    function Eventken_waveCannon() {
    }
    Eventken_waveCannon.singleFrameEvent = {
        "a21089": Ryu_a21089.addEventa21089,
    };
    return Eventken_waveCannon;
}());
__reflect(Eventken_waveCannon.prototype, "Eventken_waveCannon");
var Eventryu_assist_ken = (function () {
    function Eventryu_assist_ken() {
    }
    Eventryu_assist_ken.singleFrameEvent = {
        "a20744": Ryu_a20744.addEventa20744,
        "a20745": Ryu_a20745.addEventa20745,
        "a20657": Ryu_a20657.addEventa20657,
        "HitCheck": Hero_HitCheck.addEventHitCheck,
    };
    return Eventryu_assist_ken;
}());
__reflect(Eventryu_assist_ken.prototype, "Eventryu_assist_ken");
var Eventwave_s3 = (function () {
    function Eventwave_s3() {
    }
    Eventwave_s3.singleFrameEvent = {
        "HitCheck_obj": Hero_HitCheck_obj.addEventHitCheck_obj,
    };
    return Eventwave_s3;
}());
__reflect(Eventwave_s3.prototype, "Eventwave_s3");
//# sourceMappingURL=EventroleRyu_skill.js.map