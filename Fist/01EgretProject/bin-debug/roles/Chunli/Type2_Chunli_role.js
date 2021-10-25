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
var Type2_Chunli_role = (function (_super) {
    __extends(Type2_Chunli_role, _super);
    function Type2_Chunli_role() {
        var _this = _super.call(this) || this;
        _this.roleMode = 2;
        _this.superList = { sk_s_qianlie_air: 1, sk_s_bo2: 1 };
        _this.burstList = { sk_s_tianxing: 1, sk_s_zuhe: 1 };
        _this.superMaxList = { sk_s_qianlie_air_s: 1, sk_s_bo2_s: 1 };
        _this.skillSuperMapping = { sk_s_bo2: "sk_s_bo2_s", sk_s_qianlie_air: "sk_s_qianlie_air_s" };
        _this.skillObj.s1 = "sk_s_bo2";
        _this.skillObj.s2 = "sk_s_qianlie_air";
        _this.skillObj.busrt_a = "sk_s_zuhe";
        _this.skillObj.busrt_d = "sk_s_tianxing";
        _this.CommonSeries = ["punch_l", "kick_l", "punch", "sk_xuanyuan"];
        return _this;
    } // End of the function
    Type2_Chunli_role.prototype.pitch = function () {
        if (this.status_3 != "normal") {
            return (false);
        } // end if
        if (this.catch_check()) {
            this.status_1 = "pitch2";
            this.mc.gotoAndStop(this.status_1);
            this.status_3 = "attack";
            this.opp.status_3 = "hurt";
            return (true);
        } // end if
    }; // End of the function
    Type2_Chunli_role.prototype.sk_huixuan = function () {
        if (this.status_2 == "air") {
            this.sk_chuantui();
            return;
        } // end if
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Type2_Chunli_role.prototype.sk_huixuan2 = function () {
        if (this.status_2 == "air") {
            this.sk_chuantui();
            return;
        } // end if
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Type2_Chunli_role.prototype.sk_chuantui = function () {
        this.status_1 = "sk_chuantui";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Type2_Chunli_role.prototype.sk_bailietui2 = function () {
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_bailietui2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Type2_Chunli_role.prototype.jump = function () {
        if (this.status_1 == "dash_f") {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
                return (false);
            } // end if
            this.status_2 = "air";
            this.Vx = this.Vjump_far;
            this.Vy = this.Vjump_y;
            this.mc.gotoAndStop("jump_f");
            this.status_1 = "jump_f";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton)) {
            if (this.dir == 1) {
                this.jump_f();
            }
            else {
                this.jump_b();
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._backButton)) {
            if (this.dir == -1) {
                this.jump_f();
            }
            else {
                this.jump_b();
            } // end else if
        }
        else {
            this.jump_u();
        } // end else if
    }; // End of the function
    return Type2_Chunli_role;
}(Chunli_role)); // End of Class
__reflect(Type2_Chunli_role.prototype, "Type2_Chunli_role");
//# sourceMappingURL=Type2_Chunli_role.js.map