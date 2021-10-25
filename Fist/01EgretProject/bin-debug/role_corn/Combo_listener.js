var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Combo_listener = (function () {
    function Combo_listener() {
        // super();
    } // End of the function
    Combo_listener.prototype.check_combo = function (status_1, skill) {
        this.superCancle = false;
        if (this.noCancle != undefined) {
            if (this.noCancle[status_1] == skill) {
                return false;
            }
        } // end if
        if (this.check_combo1(status_1, skill)) {
            return true;
        }
        else if (this.role.opp.inCount == true) {
        }
        else if (this.check_combo2(status_1, skill)) {
            return true;
        }
        else if (this.check_combo3(status_1, skill)) {
            return true;
        }
        else if (this.check_combo4(status_1, skill)) {
            return true;
        } // end else if
    }; // End of the function
    Combo_listener.prototype.check_combo1 = function (status_1, skill) {
        var _loc2 = undefined;
        if (this.combo1[status_1] != undefined) {
            _loc2 = this.combo1[status_1][skill];
        }
        if (_loc2 != undefined) {
            if (this.start_combo(status_1, _loc2)) {
                return true;
            } // end if
        } // end if
    }; // End of the function
    Combo_listener.prototype.check_combo2 = function (status_1, skill) {
        if (this.beCancled[status_1] != 1) {
            return false;
        }
        else if (this.s_cancle[status_1][skill] == 1) {
        }
        else if (this.notTOcancle[skill] == 1) {
            return false;
        } // end else if
        if (this.start_combo(status_1, skill)) {
            return true;
        } // end if
    }; // End of the function
    Combo_listener.prototype.check_combo3 = function (status_1, skill) {
        if (this.role.superCancle() && this.notTOcancle[skill] != 1 && status_1 != skill) {
            this.superCancle = true;
            if (this.start_combo(status_1, skill)) {
                return true;
            } // end if
            return false;
        } // end if
        return false;
    }; // End of the function
    Combo_listener.prototype.check_combo4 = function (status_1, skill) {
        if (this.role.superCancle() && this.notTOcancle[skill] != 1 && status_1 != skill) {
            this.superCancle = true;
            if (this.role.status_2 == "toLand") {
                this.role.status_2 = "land";
                this.role.powerDecType2 = "cancle";
                this.role.skill_start(skill);
                return true;
            } // end if
            return false;
        } // end if
        return false;
    }; // End of the function
    Combo_listener.prototype.start_combo = function (status_1, skill) {
        var start_frame = this.combo2[status_1];
        if (isNaN(start_frame)) {
            return false;
        } // end if
        if (this.role.mc.getCurrFrame() < start_frame - 5) {
            return false;
        } // end if
        FightMainRender.getInstance().Add(this, this.roleEnterFrame, [start_frame, skill]);
        return true;
    }; // End of the function
    Combo_listener.prototype.roleEnterFrame = function (start_frame, skill) {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.role.inFreeze) {
            return;
        } // end if
        if (this.role.mc.getCurrFrame() >= start_frame) {
            if (this.superCancle) {
                this.role.powerDecType2 = "cancle";
            } // end if
            this.role.skill_start(skill);
            FightMainRender.getInstance().Remove(this, this.roleEnterFrame);
        } // end if
    };
    ;
    return Combo_listener;
}());
__reflect(Combo_listener.prototype, "Combo_listener");
//# sourceMappingURL=Combo_listener.js.map