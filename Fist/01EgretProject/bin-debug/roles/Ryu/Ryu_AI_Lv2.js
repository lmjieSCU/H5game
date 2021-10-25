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
var Ryu_AI_Lv2 = (function (_super) {
    __extends(Ryu_AI_Lv2, _super);
    function Ryu_AI_Lv2() {
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
    } // End of the function
    Ryu_AI_Lv2.prototype.skill_init = function () {
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
        this.skill_dis[0] = ["punch", "punch_l", "kick_l", "kick", "walk_f", "squatKick", "squatPunch", "sk14"];
        this.skill_dis[1] = ["kick", "sk2", this.skillObj.toAir, "squatKick", "sk14", this.skillObj.heavyHit];
        this.skill_dis[2] = ["kick", "sk2", "jump_f"];
        this.skill_dis[3] = ["sk1", "sk2", "jump_f"];
        this.skill_dis[4] = ["sk1", "sk2", "dash_f", "jump_f"];
        this.skill_dis[5] = ["dash_f", "walk_f", "sk1"];
        this.skill_dis[6] = ["dash_f", "sk1"];
        this.dis_num = this.dis_array.length;
    }; // End of the function
    Ryu_AI_Lv2.prototype.combo_init = function () {
        this.combo_1.punch = ["kick1", "kick2", "sk1", "sk2", this.skillObj.toAir, "sk10", "squatKick"];
        this.combo_1.punch2 = ["kick1", "kick2", "sk1", "sk2", this.skillObj.toAir, "sk10", "sk14", "squatKick"];
        this.combo_1.kick = ["sk1", "sk2"];
        this.combo_1.kick2 = ["sk1", "sk2", this.skillObj.toAir, "sk10", "sk14"];
        this.combo_1.squatPunch = ["sk1", "sk2", "sk10", "sk14"];
        this.combo_land.kick1 = ["squatKick", "sk1", "sk2", this.skillObj.toAir, "sk14"];
        this.combo_land.jump_f = ["punch", "kick", "squatPunch", "squatKick"];
        this.combo_land.punch_l = ["punch_l", "kick_l"];
        this.combo_land.squatKick_l = ["squatKick_l"];
        this.combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        this.combo_1.dash_f = ["punch", "kick1", "jump_f", "jump_f"];
        this.delay_frames.dash_f = [120, 150, 120, 230, 300];
        this.combo_1.walk_f = ["pitch", "punch", "kick_l", "jump_f", "dash_f"];
        this.delay_frames.walk_f = [100, 120, 180, 230, 400];
        this.combo_1.walk_b = ["punch", "kick", "kick_l", "jump_f"];
        this.delay_frames.walk_b = [100, 100, 180, 260, 300, 250];
        this.combo_burst.sk2 = ["sk1", "sk3", "sk10", "sk14"];
        this.combo_burst.sk3 = ["sk4"];
        this.action_1 = new Object();
        this.action_1.down = [["walk_b", "jump_b"], ["walk_f"]];
        this.delay_frames.down = [200, 1000];
        this.action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        this.delay_frames.oppRoll = [150, 300];
        this.action_1.super = [["sk14"], ["sk10"]];
        this.delay_frames.super = [160, 300];
        this.action_1.busrt = [["sk_s_swms"], ["sk_s_sys"]];
        this.delay_frames.busrt = [180, 600];
    }; // End of the function
    Ryu_AI_Lv2.prototype.cpu_control = function () {
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
    Ryu_AI_Lv2.prototype.checkAction = function () {
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
            action = this.action_select("action_1", "onEgde");
            this.toSkill(action);
            return true;
        }
        return false;
    };
    return Ryu_AI_Lv2;
}(Ryu_AI)); // End of Class
__reflect(Ryu_AI_Lv2.prototype, "Ryu_AI_Lv2");
//# sourceMappingURL=Ryu_AI_Lv2.js.map