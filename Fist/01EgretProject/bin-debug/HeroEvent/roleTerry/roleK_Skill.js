var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**roleK的子骨骼技能类
 * skill_mc为子骨骼的mc
 * ownrole为所属的role
 * 渲染时调用renderAnimate实现检查帧事件
 */
var roleTerry_Skill = (function () {
    function roleTerry_Skill(type, ownrole) {
        this.ownrole = ownrole;
        this.skill_mc = UI.getEffectMovie(type); //new zmovie.ZMovieClip(["effect0_json", "effect1_json","effect2_json", "effect3_json"], RES.getRes("effect_json"), type);
    }
    roleTerry_Skill.prototype.renderMcAnimate = function () {
        EventUtil.checkFrameEvent(this.skill_mc, 'roleTerry_skill', this.ownrole);
        this.skill_mc.checkFrameEvent();
        EventUtil.checkSingleFrameEvent(this.skill_mc, 'roleTerry_skill', this.ownrole);
        this.skill_mc.nextFrame();
        if (this.skill_mc._nextFrameStop) {
            EventUtil.renderChildren(this.skill_mc);
        }
    };
    return roleTerry_Skill;
}());
__reflect(roleTerry_Skill.prototype, "roleTerry_Skill");
//# sourceMappingURL=roleK_Skill.js.map