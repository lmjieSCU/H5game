var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var K_AI_Lv2 = (function (_super) {
    __extends(K_AI_Lv2, _super);
    function K_AI_Lv2() {
        var _this = _super.call(this) || this;
        _this.skill_init();
        _this.combo_init();
        _this.combo_rate0 = 25;
        _this.attack_rate0 = 30;
        _this.hold_rate0 = 20;
        _this.attack_s0 = 10;
        _this.wait_frame0 = 30;
        _this.combo_risk = 30;
        return _this;
    }
    K_AI_Lv2.prototype.skill_init = function () {
        this.combo_1 = new Object();
        this.combo_land = new Object();
        this.combo_auto = new Object();
        this.combo_burst = new Object();
        this.delay_frames = new Object();
        this.dis_array[0] = 100;
        this.dis_array[1] = 150;
        this.dis_array[2] = 200;
        this.dis_array[3] = 250;
        this.dis_array[4] = 300;
        this.dis_array[5] = 400;
        this.dis_array[6] = 1000;
        this.skill_dis[0] = ["punch", "punch_l", "punch_s1", "kick_l", "kick_s2", "kick", "walk_f", "squatPunch"];
        this.skill_dis[1] = ["punch", "kick", "squatKick", "sk_dfp", "sk_fdfp", "sk_fdfp2", "heavyHit"];
        this.skill_dis[2] = ["sk_dfp", "sk_fdfp", "sk_dfk", "sk_dbk", "jump_f"];
        this.skill_dis[3] = ["sk_dfp", "sk_dfk", "sk_dbk", "walk_f"];
        this.skill_dis[4] = ["sk_dfp", "sk_dfp", "sk_dfk", "sk_dbk", "walk_f", "dash_f", "jump_f"];
        this.skill_dis[5] = ["sk_dfp", "sk_dfp", "dash_f", "dash_f", "sk_dbk"];
        this.skill_dis[6] = ["sk_dfp", "dash_f", "dash_f", "sk_dfk"];
        this.dis_num = this.dis_array.length;
    };
    K_AI_Lv2.prototype.combo_init = function () {
        this.combo_1 = new Object();
        this.combo_land = new Object();
        this.combo_auto = new Object();
        this.combo_burst = new Object();
        this.delay_frames = new Object();
        this.combo_1.punch = ["sk_dbk", "sk_dfp", "sk_fdfp"];
        this.combo_1.punch2 = ["sk_dfp", "sk_dfp", "sk_dfk", "punch_s1", "kick_s2", "kick_s2", "sk_fdfp"];
        this.combo_1.punch_l = ["punch_l", "kick_l"];
        this.combo_1.kick = ["sk_dbk", "sk_dfp"];
        this.combo_1.kick2 = ["sk_dfp", "sk_dfp", "sk_dfk", "punch_s1", "kick_s2", "kick_s2", "sk_fdfp"];
        this.combo_1.kick_s2 = ["sk_dbk", "sk_dfp", "sk_dfp", "sk_fdfp"];
        this.combo_1.squatPunch = ["sk_dfp", "sk_dbk"];
        this.combo_1.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        this.combo_1.squatKick_l = ["squatKick_l"];
        this.combo_1.sk_fdfp = ["sk_fdfp_s2"];
        this.combo_burst.punch2 = ["sk_dfp", "kick_s2"];
        this.combo_burst.kick2 = ["sk_dfp", "kick_s2"];
        this.combo_burst.kick_s2 = ["sk_dfp"];
        this.combo_land.jump_f = ["punch", "kick"];
        this.combo_1.dash_f = ["punch", "roll_f", "jump_f", "jump_f", "sk_dbk"];
        this.delay_frames.dash_f = [120, 120, 120, 230, 300];
        this.combo_1.walk_f = ["pitch", "punch", "kick", "jump_f", "dash_f"];
        this.delay_frames.walk_f = [100, 150, 180, 230, 400];
        this.combo_1.walk_b = ["punch", "kick", "jump", "jump_f", "sk_dbk"];
        this.delay_frames.walk_b = [100, 150, 200, 260, 300];
        this.action_1 = new Object();
        this.action_1.down = [["walk_b", "jump_b"], ["walk_f"]];
        this.delay_frames.down = [200, 1000];
        this.action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        this.delay_frames.oppRoll = [150, 300];
        this.action_1.super = [["sk_s1", "sk_s2", "sk_s3"], ["sk_s1", "sk_s3"]];
        this.delay_frames.super = [200, 500];
        this.action_1.busrt = [["sk_s5", "sk_s4"], ["sk_s4"]];
        this.delay_frames.busrt = [200, 500];
    };
    K_AI_Lv2.prototype.cpu_control = function () {
        //使用render_delay_action调用cpu_control,同时清空上一过程判断的combo_Delay
        this.render_AI_control = undefined;
        if (this.render_mc_action == this.render_combo_delay) {
            this.render_mc_action = undefined;
        }
        if (this.checkDefend()) {
            return true;
        }
        if (this.checkAction()) {
            return true;
        }
        if (this.checkAttack()) {
            return true;
        }
        this.checkWait();
    };
    K_AI_Lv2.prototype.checkAction = function () {
        var action = undefined;
        if (this.combo_check_land()) {
            return true;
        }
        if (this.opp.status_3 == "down") {
            if (this.checkBurst()) {
                return true;
            }
            action = this.action_select("action_1", "down");
            this.toSkill(action);
            return true;
        }
        if (this.onEdge) {
            var _loc3_ = this.action_select("action_1", "onEgde");
            this.toSkill(_loc3_);
            return true;
        }
        return false;
    };
    return K_AI_Lv2;
}(K_AI));
__reflect(K_AI_Lv2.prototype, "K_AI_Lv2");
//# sourceMappingURL=K_AI_lv2.js.map