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
var Mai_Combo = (function (_super) {
    __extends(Mai_Combo, _super);
    function Mai_Combo(role) {
        var _this = _super.call(this) || this;
        _this.role = role;
        _this.init();
        return _this;
    }
    Mai_Combo.prototype.init = function () {
        this.combo1 = new Object();
        this.combo1.sk_luan1 = { punch: "sk_luan2", punch_l: "sk_luan2" };
        this.combo1.sk_luan2 = { punch: "sk_luan3", punch_l: "sk_luan3" };
        this.combo1.sk_luan3 = { punch: "sk_luan4", punch_l: "sk_luan4" };
        this.combo1.sk_luan4 = { punch: "sk_luan5", punch_l: "sk_luan5" };
        this.combo2 = new Object();
        this.combo2.punch = 8;
        this.combo2.punch2 = 6;
        this.combo2.kick_s1 = 10;
        this.combo2.punch_s = 73;
        this.combo2.kick = 12;
        this.combo2.kick2 = 6;
        this.combo2.kick_s2 = 13;
        this.combo2.squatPunch = 8;
        this.combo2.punch_l = 5;
        this.combo2.squatPunch_l = 6;
        this.combo2.kick_l = 7;
        this.combo2.squatKick_l = 5;
        this.combo2.heavyHit = 14;
        this.combo2.sk_renfeng = 7;
        this.combo2.sk_huaxing = 7;
        this.combo2.sk_qianniao = 13;
        this.combo2.sk_beike = 15;
        this.combo2.sk_huadieshan = 12;
        this.combo2.sk_bailu = 26;
        this.combo2.sk_longyanwu = 15;
        this.combo2.sk_bailu2 = 17;
        this.combo2.sk_longyanwu2 = 15;
        this.combo2.sk_luan1 = 9;
        this.combo2.sk_luan2 = 9;
        this.combo2.sk_luan3 = 9;
        this.combo2.sk_luan4 = 6;
        this.combo2.sk_luan5 = 30;
        this.combo2.sk_s_shuiniao = 21;
        this.combo2.sk_s_renfeng = 27;
        this.combo2.sk_s_hualan = 40;
        this.combo2.sk_s_fenghuang = 67;
        this.skill_over = new Object();
        this.skill_over.punch = 15;
        this.skill_over.punch2 = 17;
        this.skill_over.kick_s1 = 14;
        this.skill_over.kick = 13;
        this.skill_over.kick2 = 11;
        this.skill_over.squatPunch = 12;
        this.skill_over.squatKick = 10;
        this.skill_over.heavyHit = 15;
        this.skill_over.sk_huaxing = 15;
        this.skill_over.sk_renfeng = 20;
        this.skill_over.sk_qianniao = 19;
        this.skill_over.sk_bailu = 26;
        this.skill_over.sk_longyanwu = 18;
        this.skill_over.sk_bailu = 26;
        this.skill_over.sk_longyanwu = 15;
        this.skill_over.sk_s_heti = 28;
        this.skill_over.sk_s_qianzai1 = 21;
        this.skill_over.sk_s_shuiniao = 30;
        this.skill_over.sk_s_shuiniao_s = 32;
        this.skill_over.sk_s_renfeng = 35;
        this.skill_over.sk_s_renfeng_s = 30;
        this.skill_over.sk_s_hualan = 40;
        this.skill_over.sk_s_hualan_s = 50;
        this.skill_over.sk_s_fenghuang = 67;
        this.beCancled = new Object();
        this.beCancled.punch = 1;
        this.beCancled.punch2 = 1;
        this.beCancled.kick_s1 = 1;
        this.beCancled.punch_l = 1;
        this.beCancled.kick = 1;
        this.beCancled.kick2 = 1;
        this.beCancled.kick_s1 = 1;
        this.beCancled.kick_s2 = 1;
        this.beCancled.kick_l = 1;
        this.beCancled.squatPunch = 1;
        this.beCancled.squatPunch_l = 1;
        this.beCancled.squatKick_l = 1;
        this.notTOcancle = new Object();
        this.notTOcancle.punch = 1;
        this.notTOcancle.punch2 = 1;
        this.notTOcancle.punch_l = 1;
        this.notTOcancle.kick = 1;
        this.notTOcancle.kick_l = 1;
        this.notTOcancle.squatPunch = 1;
        this.notTOcancle.squatPunch_l = 1;
        this.notTOcancle.squatKick_l = 1;
        this.notTOcancle.squatKick = 1;
        this.notTOcancle.pitch = 1;
        this.s_cancle = new Object();
        this.s_cancle.punch_l = { kick_l: 1, squatPunch_l: 1, squatKick_l: 1, punch: 1, kick: 1 };
        this.s_cancle.kick_l = { punch: 1, kick: 1 };
        this.s_cancle.squatPunch_l = { punch_l: 1, kick_l: 1, squatKick_l: 1, punch: 1, kick: 1 };
        this.s_cancle.squatKick_l = { punch_l: 1, kick_l: 1, punch: 1, kick: 1 };
        this.s_cancle.jump_f = { sk_feishu: 1 };
    }; // End of the function
    return Mai_Combo;
}(Combo_listener)); // End of Class
__reflect(Mai_Combo.prototype, "Mai_Combo");
//# sourceMappingURL=Mai_Combo.js.map