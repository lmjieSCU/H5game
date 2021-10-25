var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HitCheck = (function () {
    function HitCheck() {
    } // End of the function
    HitCheck.prototype.clearHitInstance = function () {
        if (this.beatMC.parent == null) {
            Hero_HitCheck.clearInstance(this._parent_hash);
            return;
        }
        Hero_HitCheck.clearInstance(this.beatMC.parent);
    };
    HitCheck.prototype.start_hitCheck = function (hitvalue, role) {
        this.hitValue = hitvalue;
        this.beatMC = this.hitValue.area;
        this._parent_hash = this.beatMC.parent.hashCode;
        this.role = role;
        this.opp = role.opp;
        if (!this.hitValue.reCheck && this.opp.status_3 == "hurt") {
            this.clearHitInstance();
            return;
        } // end if
        if (isNaN(this.hitValue.Vx)) {
            this.clearHitInstance();
            return;
        }
        if (this.hitValue.isObj) {
            // role.flyingObj = this.parent;
        } // end if
        role.onHit = false;
        // if (this.opp.status_3 == "down" && this.hitValue.hitPos != "land") {
        //     this.clearHitInstance();
        //     return;
        // } // end if
        if (this.hitValue.nohit_status.length > 0) {
            for (var _loc4 in this.hitValue.nohit_status) {
                var _loc2 = this.hitValue.nohit_status[_loc4];
                if (this.opp.status_1 == _loc2) {
                    this.clearHitInstance();
                    return;
                } // end if
            } // end of for...in
        } // end if
        if (this.hitValue.nohit_skills.length > 0) {
            for (var _loc4 in this.hitValue.nohit_skills) {
                var _loc3 = String(this.hitValue.nohit_skills[_loc4]);
                if (String(this.opp.hitSkillName) == _loc3 && this.opp.status_3 == "hurt") {
                    this.clearHitInstance();
                    return;
                } // end if
            } // end of for...in
        } // end if
        this.role.render_hitcheck_action = this.do_hitCheck;
        this.role.render_hitcheck_instance = this;
        this.do_hitCheck();
    }; // End of the function
    HitCheck.prototype.do_hitCheck = function () {
        if (_level0.inPause) {
            return;
        } // end if
        if (_level0.inFreeze) {
            return;
        } // end if
        if (this.beatMC.stage == null || this.beatMC._mcName != 'HitCheck') {
            this.stop_hitCheck();
            return;
        }
        var oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
        if (oppbody == null) {
            return;
        }
        var pos1 = this.beatMC.getTransformedBounds(this.beatMC.stage);
        this.beatArea = new egret.Rectangle(pos1.x, pos1.y, HitCheck.width * Math.abs(this.beatMC.scaleX), HitCheck.height * Math.abs(this.beatMC.scaleY));
        var pos2 = oppbody.getTransformedBounds(oppbody.stage);
        var angle2 = new egret.Rectangle(pos2.x, pos2.y, Math.abs(oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX), Math.abs(oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY));
        //存在描点问题
        if (this.beatArea.intersects(angle2)) {
            --this.hitValue.checkTimes;
            if (this.hitValue.checkTimes == 0) {
                this.stop_hitCheck();
            } // end if
            this.role.hitFire(this.hitValue);
            if (this.hitValue.isObj) {
                // this.parent.play();
                if (this.beatMC.parent instanceof zmovie.ZMovieClip) {
                    this.beatMC.parent.resetFrameStop();
                    this.beatMC.parent.nextFrame();
                }
            } // end if
            if (isNaN(this.hitValue.Vx)) {
                console.log(this.role.bodyMC.getCurrFrame());
            }
            this.role.doHit(this.hitValue);
            this.opp.doHurt(this.hitValue);
        }
    }; // End of the function
    HitCheck.prototype.stop_hitCheck = function () {
        this.role.render_hitcheck_action = undefined;
        this.clearHitInstance();
    }; // End of the function
    HitCheck.prototype.getPosY = function () {
        // var _loc2 = new egret.DisplayObject();
        // _loc2.x = this.x;
        // _loc2.y = this.y;
        // this.parent.localToGlobal(_loc2);
        // return (_loc2.y);
    }; // End of the function
    HitCheck.width = 125;
    HitCheck.height = 34;
    return HitCheck;
}()); // End of Class
__reflect(HitCheck.prototype, "HitCheck");
//# sourceMappingURL=HitCheck.js.map