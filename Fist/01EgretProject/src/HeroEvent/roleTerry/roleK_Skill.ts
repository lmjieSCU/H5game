/**roleK的子骨骼技能类
 * skill_mc为子骨骼的mc
 * ownrole为所属的role
 * 渲染时调用renderAnimate实现检查帧事件
 */
class roleTerry_Skill {
    public skill_mc: zmovie.ZMovieClip;
    public ownrole: Role;

    constructor(type: string, ownrole: Role) {
        this.ownrole = ownrole;
        this.skill_mc = UI.getEffectMovie(type);//new zmovie.ZMovieClip(["effect0_json", "effect1_json","effect2_json", "effect3_json"], RES.getRes("effect_json"), type);
    }

    public renderMcAnimate() {
        EventUtil.checkFrameEvent(this.skill_mc, 'roleTerry_skill', this.ownrole);
        this.skill_mc.checkFrameEvent();
        EventUtil.checkSingleFrameEvent(this.skill_mc, 'roleTerry_skill', this.ownrole);
        this.skill_mc.nextFrame();
        if (this.skill_mc._nextFrameStop) {
            EventUtil.renderChildren(this.skill_mc);
        }
    }

}