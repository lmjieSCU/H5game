var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**roleK的子骨骼技能类
 * skill_mc为子骨骼的mc
 * ownrole为所属的role
 * 渲染时调用renderAnimate实现检查帧事件
 */
var roleOrochi_Skill = (function () {
    // public old_skill_mc_play_frame: number;
    function roleOrochi_Skill(type, ownrole) {
        this.ownrole = ownrole;
        this.skill_mc = UI.getEffectMovie(type);
    }
    // public FrameEvent_refresh_location(): void {
    //     this.old_skill_mc_play_frame = this.skill_mc.getCurrFrame();
    //     return;
    // }
    // public FrameEvent_change_location(): boolean {
    //     return this.skill_mc.getCurrFrame() != this.old_skill_mc_play_frame;
    // }
    roleOrochi_Skill.prototype.renderMcAnimate = function () {
        EventUtil.checkFrameEvent(this.skill_mc, 'roleOrochi_skill', this.ownrole);
        this.skill_mc.checkFrameEvent();
        EventUtil.checkSingleFrameEvent(this.skill_mc, 'roleOrochi_skill', this.ownrole);
        if (this.skill_mc._nextFrameStop) {
            EventUtil.renderChildren(this.skill_mc);
        }
        else {
            this.skill_mc.nextFrame();
        }
    };
    return roleOrochi_Skill;
}());
__reflect(roleOrochi_Skill.prototype, "roleOrochi_Skill");
//# sourceMappingURL=roleOrochi_Skill.js.map