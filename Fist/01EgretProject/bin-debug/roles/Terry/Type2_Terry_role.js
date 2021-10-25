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
var Type2_Terry_role = (function (_super) {
    __extends(Type2_Terry_role, _super);
    //var roleMode, superList, burstList, superMaxList, skillSuperMapping, skillObj, status_3, catch_check, status_1, gotoAndStop, opp, jumpSkill, d, f, dir, b, mode_key, toSkill;
    function Type2_Terry_role() {
        var _this = _super.call(this) || this;
        _this.roleMode = 2;
        _this.superList = { dbdf_p: 1, dfdf_k_EX: 1 };
        _this.burstList = { df_o_EX: 1, db_o_EX: 1 };
        _this.superMaxList = { dbdf_p_max: 1, dfdf_k_EX_max: 1 };
        _this.skillSuperMapping = { dbdf_p: "dbdf_p_max", dfdf_k_EX: "dfdf_k_EX_max" };
        _this.skillObj.s1 = "dbdf_p";
        _this.skillObj.s2 = "dfdf_k_EX";
        _this.skillObj.busrt_a = "df_o_EX";
        _this.skillObj.busrt_d = "db_o_EX";
        _this.skillObj.toAir = "fdf_kh";
        return _this;
    } // End of the function
    Type2_Terry_role.prototype.pitch = function () {
        if (this.status_3 != "normal") {
            return (false);
        } // end if
        if (this.catch_check()) {
            this.status_1 = "pitch2";
            this.mc.gotoAndStop("status_1");
            this.status_3 = "attack";
            this.opp.status_3 = "hurt";
            return (true);
        } // end if
    }; // End of the function
    Type2_Terry_role.prototype.to_punch_l = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch_l");
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatPunch_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            _loc2 = "f_p_EX";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            _loc2 = "f_p_EX";
        }
        else if (this.mode_key == "easy") {
            _loc2 = this.skillObj.s1;
        }
        else {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    }; // End of the function
    return Type2_Terry_role;
}(Terry_role)); // End of Class
__reflect(Type2_Terry_role.prototype, "Type2_Terry_role");
//# sourceMappingURL=Type2_Terry_role.js.map