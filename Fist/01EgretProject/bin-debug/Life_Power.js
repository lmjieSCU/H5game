var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Life_Power = (function () {
    function Life_Power() {
        this.inBurst = false;
        this.init_life();
        this.init_power();
    } // End of the function
    Life_Power.prototype.init_life = function () {
        // this.life_max = _level0.life_max;
        // this.lifeBar_num = _level0.lifeBar_num;
        if (this.lifeBar_num > 1) {
            this.life_num.gotoAndStop(this.lifeBar_num);
        } // end if
        this.life_d = 30;
        this.d_p = 30;
        this.d_h = 2;
        this.life_now = this.life_max;
        // this.life_mc = this.lifeBar_mc.bar;
        // this.life2_mc = this.lifeBar_mc.bar2;
        // this.lifeBar_length = this.life_mc._width;
        // _level0.out("lifeBar_num:" + lifeBar_num + "   " + life_now);
    }; // End of the function
    Life_Power.prototype.reset = function () {
        // this.lifeBar_num = _level0.lifeBar_num;
        if (this.lifeBar_num > 1) {
            this.life_num.gotoAndStop(this.lifeBar_num);
        } // end if
        this.life_now = this.life_max;
        this.life_mc._width = this.lifeBar_length;
        this.lifeBar_mc.lifeBg.gotoAndStop(1);
    }; // End of the function
    Life_Power.prototype.lifeControl = function (Obj) {
        // if (_level0.checkNoEnemyMode(role)) {
        //     return;
        // } // end if
        // if (_level0.timeOver) {
        //     return;
        // } // end if
        if (this.life_now == 0) {
            return;
        } // end if
        var _loc2 = Obj.d_rate;
        if (_loc2 == undefined) {
            _loc2 = 1;
        } // end if
        var _loc4 = _loc2 * this.d_p;
        this.life_now = this.life_now - _loc4;
        Obj.target.life = Obj.target.life - _loc4;
        // console.log(Obj.target.life);
        if (this.role.opp.mc.continueHit && this.life_now <= 0 && this.lifeBar_num == 1) {
            this.life_now = 1;
        }
        else if (this.life_now <= 0) {
            --this.lifeBar_num;
            if (this.lifeBar_num > 0) {
                this.life_num.gotoAndStop(this.lifeBar_num);
            } // end if
            else if (this.lifeBar_num == 0) {
                this.life_now = 0;
                Obj.target.life = 0;
                this.do_KO(Obj.target);
            }
            else {
                this.life_now = this.life_now + this.life_max;
            } // end else if
        } // end else if
        this.life_length = this.life_now * this.lifeBar_length / this.life_max;
        this.life_mc._width = this.life_length;
        this.life_dec();
        this.redBlood();
    }; // End of the function
    Life_Power.prototype.life_dec = function () {
        // public onEnterFrame() {
        // if (_level0.inPause) {
        //     return;
        // } // end if
        // if (_level0.inFreeze) {
        //     return;
        // } // end if
        // life2_mc._width = life2_mc._width - 2;
        // if (life2_mc._width <= life_mc._width) {
        //     life2_mc._width = life_mc._width;
        //     delete this.onEnterFrame;
        // } // end if
        // } // End of the function
    }; // End of the function
    Life_Power.prototype.do_KO = function (role) {
        // _level0.do_KO(role, role.opp);
        this.lifeBar_mc.lifeBg.gotoAndStop(1);
    }; // End of the function
    Life_Power.prototype.redBlood = function () {
        // if (_level0.checkPowerNoLimit(this.role)) {
        //     if (this.life_mc._width < this.lifeBar_length / 4 && !this.role.redBlood) {
        //         this.lifeBar_mc.lifeBg.gotoAndPlay(2);
        //         this.role.redBlood = true;
        //     }
        //     else if (this.life_mc._width >= this.lifeBar_length / 4 && this.role.redBlood) {
        //         this.lifeBar_mc.lifeBg.gotoAndStop(1);
        //         this.role.redBlood = false;
        //     } // end else if
        //     return;
        // } // end if
        if (this.role.redBlood) {
            return;
        } // end if
        if (this.role.life < this.role.life_max / 4) {
            this.lifeBar_mc.lifeBg.gotoAndPlay(2);
            this.role.redBlood = true;
        } // end if
    }; // End of the function
    Life_Power.prototype.init_power = function () {
        // this.power_max = _level0.power_max;
        // this.powerPoint_num = _level0.superPoint;
        // this.powerBar_mc.point_mc.gotoAndStop(this.powerPoint_num + 1);
        // this.powerPoint_max = _level0.powerPoint_max;
        if (this.powerPoint_num == this.powerPoint_max) {
            // this.powerBar_mc.gotoAndStop("max");
        } // end if
        this.power_now = 0;
        // this.power_mc = this.powerBar_mc.bar;
        // this.powerBar_length = this.power_mc._width;
        // this.power_mc._width = this.power_now;
        this.burst_power = 0;
        this.burst_powerMax = 300;
        // this.burst_len = this.burst_mc.burst_bar.mask._width;
    }; // End of the function
    Life_Power.prototype.reset_power = function () {
        this.powerBar_mc.point_mc.gotoAndStop(this.powerPoint_num + 1);
        if (this.powerPoint_num == this.powerPoint_max) {
            this.powerBar_mc.gotoAndStop("max");
        } // end if
        this.power_now = 0;
        this.burst_power = 0;
        this.burst_powerMax = 300;
    }; // End of the function
    Life_Power.prototype.powerControl = function (Obj) {
        if (Obj.action == "dec") {
            // if (_level0.checkPowerNoLimit(role)) {
            //     return;
            // } // end if
            if (this.powerPoint_num == 0) {
                return;
            } // end if
            --this.powerPoint_num;
            Obj.target.superPoint = this.powerPoint_num;
            this.point_dec();
            return;
        }
        else if (Obj.action == "burst") {
            // trace("powerControl:burst");
            this.powerBurst();
            this.powerPoint_num = 0;
            Obj.target.superPoint = this.powerPoint_num;
            return;
        }
        else if (Obj.action == "burstdec") {
            this.burst_power = this.burst_power - Obj.decNum;
            return;
        }
        else {
            if (this.powerPoint_num == this.powerPoint_max) {
                return;
            } // end if
            var _loc3 = Obj.inc;
            if (this.inBurst) {
                _loc3 = Math.floor(_loc3 / 2);
            } // end if
            this.power_now = this.power_now + _loc3;
            if (this.power_now >= this.power_max) {
                ++this.powerPoint_num;
                Obj.target.superPoint = this.powerPoint_num;
                // this.point_add(Obj.target);
                this.point_add();
                if (this.powerPoint_num == this.powerPoint_max) {
                    this.power_now = 0;
                    this.powerBar_mc.gotoAndStop("max");
                }
                else {
                    this.power_now = this.power_now - this.power_max;
                } // end if
            } // end else if
            this.power_length = this.power_now / this.power_max * this.powerBar_length;
            this.power_mc._width = this.power_length;
        } // end else if
    }; // End of the function
    Life_Power.prototype.point_add = function () {
        this.powerBar_mc.point_mc.nextFrame();
    }; // End of the function
    Life_Power.prototype.point_dec = function () {
        this.powerBar_mc.point_mc.prevFrame();
        this.powerBar_mc.gotoAndStop(1);
    }; // End of the function
    Life_Power.prototype.powerBurst = function () {
        this.inBurst = true;
        this.burst_mc.gotoAndPlay(2);
        this.burst_mc.lv = this.powerPoint_num;
        this.burst_power = this.powerPoint_num * 100;
        this.powerLength();
        this.powerBar_mc.point_mc.gotoAndStop(1);
        this.powerBar_mc.gotoAndStop(1);
    }; // End of the function
    Life_Power.prototype.startBurst = function () {
        if (this.role.burst_mode == "defend") {
            this.burst_mc.mode_cn.gotoAndStop("defend");
            this.burst_mc.mode_en.gotoAndStop("defend");
        }
        else if (this.role.burst_mode == "attack") {
            this.burst_mc.mode_cn.gotoAndStop("attack");
            this.burst_mc.mode_en.gotoAndStop("attack");
        }
        else {
            this.burst_mc.mode_cn.gotoAndStop("power");
            this.burst_mc.mode_en.gotoAndStop("power");
        } // end else if
        // this.burst_mc.onEnterFrame = public()
        // {
        //     if (_level0.inPause) {
        //         return;
        //     } // end if
        //     this.burst_dec();
        // };
    }; // End of the function
    Life_Power.prototype.burst_dec = function () {
        this.burst_power = this.burst_power - 0.100000;
        if (this.burst_power <= 0) {
            this.burst_power = 0;
            this.burst_end();
            // delete burst_mc.onEnterFrame;
        } // end if
        this.powerLength();
    }; // End of the function
    Life_Power.prototype.burst_end = function () {
        if (!this.inBurst) {
            return;
        } // end if
        this.burst_mc.gotoAndPlay("end");
        this.role.burst_end();
        this.inBurst = false;
        // if (_level0.checkPowerNoLimit(role)) {
        //     this.powerPoint_num = 3;
        //     this.role.superPoint = this.powerPoint_num;
        //     this.reset_power();
        // } // end if
    }; // End of the function
    Life_Power.prototype.showBurst_dec = function (num) {
        this.burst_mc.decNum_mc.play();
        this.burst_mc.decNum_mc.dec_num = num;
    }; // End of the function
    Life_Power.prototype.powerLength = function () {
        var _loc2 = this.burst_power / this.burst_powerMax * this.burst_len;
        this.burst_mc.burst_bar.mask._width = _loc2;
        return _loc2;
    }; // End of the function
    return Life_Power;
}()); // End of Class
__reflect(Life_Power.prototype, "Life_Power");
//# sourceMappingURL=Life_Power.js.map