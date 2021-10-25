/**roleK的子骨骼技能类
 * skill_mc为子骨骼的mc
 * ownrole为所属的role
 * 渲染时调用renderAnimate实现检查帧事件
 */
class roleMoriya_Skill {
    public skill_mc: zmovie.ZMovieClip;
    public ownrole: Role;
    // public old_skill_mc_play_frame: number;

    constructor(type: string, ownrole: Role) {
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

    public renderMcAnimate() {
        EventUtil.checkFrameEvent(this.skill_mc, 'roleMoriya_skill', this.ownrole);
        this.skill_mc.checkFrameEvent();
        EventUtil.checkSingleFrameEvent(this.skill_mc, 'roleMoriya_skill', this.ownrole);
        if (this.skill_mc._nextFrameStop) {
            EventUtil.renderChildren(this.skill_mc);
        } else {
            this.skill_mc.nextFrame();
        }
    }


}