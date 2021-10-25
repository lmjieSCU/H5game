var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HitCheck_obj = (function () {
    function HitCheck_obj() {
        this.dir = 0;
    }
    HitCheck_obj.prototype.clearHitInstance = function () {
        if (this.beatMC.parent == null) {
            Hero_HitCheck_obj.clearInstance(this._parent_hash);
            return;
        }
        Hero_HitCheck_obj.clearInstance(this.beatMC.parent);
    };
    HitCheck_obj.prototype.start_hitCheck = function (hitvalue, role) {
        this.hitValue = hitvalue;
        this.beatMC = this.hitValue.area;
        this._parent_hash = this.beatMC.parent.hashCode;
        var HHO = Hero_HitCheck_obj.getInstance(this.beatMC.parent);
        this.obj_level = HHO.obj_level;
        this.role = role;
        this.opp = this.role.opp;
        this.dir = this.role.dir;
        if (this.opp.status_3 == "hurt" && !this.hitValue.reCheck) {
            this.clearHitInstance();
            return undefined;
        }
        if (this.hitValue.isObj) {
            // this.role.flyingObj = this._parent;
        }
        this.role.hitcheckobj_action = this.do_hitCheck;
        this.role.render_hitcheckobj_instance = this;
        this.do_hitCheck();
    };
    HitCheck_obj.prototype.do_hitCheck = function () {
        if (_level0.inPause) {
            return undefined;
        }
        if (_level0.inFreeze) {
            return undefined;
        }
        if (this.beatMC.stage == null || this.beatMC._mcName != 'HitCheck_obj') {
            this.stop_hitCheck();
            return;
        }
        var HHO = Hero_HitCheck_obj.getInstance(this.beatMC.parent);
        if (HHO.obj_Vx != 0 || HHO.obj_Vy != 0) {
            this.do_move(HHO.obj_Vx, HHO.obj_Vy);
        }
        if (this.opp.status_3 == "down" && this.hitValue.hitPos != "land") {
            return undefined;
        }
        if (this.hitValue.nohit_status.length > 0) {
            for (var _loc6_ in this.hitValue.nohit_status) {
                var _loc3_ = this.hitValue.nohit_status[_loc6_];
                if (this.opp.status_1 == _loc3_) {
                    return undefined;
                }
            }
        }
        if (this.hitValue.nohit_skills.length > 0) {
            for (var _loc6_ in this.hitValue.nohit_skills) {
                var _loc4_ = this.hitValue.nohit_skills[_loc6_];
                if (this.role.skill_last == _loc4_ && this.opp.status_3 == "hurt") {
                    return undefined;
                }
            }
        }
        var oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
        if (oppbody == null) {
            return;
        }
        var pos1 = this.beatMC.getTransformedBounds(this.beatMC.stage);
        this.beatArea = new egret.Rectangle(pos1.x, pos1.y, HitCheck_obj.width * Math.abs(this.beatMC.scaleX), HitCheck_obj.height * Math.abs(this.beatMC.scaleY));
        var pos2 = oppbody.getTransformedBounds(oppbody.stage);
        var angle2 = new egret.Rectangle(pos2.x, pos2.y, Math.abs(oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX), Math.abs(oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY));
        if (this.beatArea.intersects(angle2)) {
            this.role.onHit = true;
            this.hitValue.checkTimes = this.hitValue.checkTimes - 1;
            this.role.hitFire(this.hitValue);
            this.role.doHit(this.hitValue);
            this.opp.doHurt(this.hitValue);
            if (this.hitValue.checkTimes == 0) {
                this.stop_hitCheck();
            }
            if (this.hitValue.isObj) {
                this.do_hitOpp();
            }
        }
        else if (this.hitValue.isObj) {
            var opp_skills = this.opp.skill_loader;
            for (var index in opp_skills) {
                //技能相互碰撞
                var _skill_mc = opp_skills[index].skill_mc;
                if (_skill_mc != this.beatMC.parent) {
                    var pos2_1 = _skill_mc.getTransformedBounds(_skill_mc.stage);
                    var angle2_1 = new egret.Rectangle(pos2_1.x, pos2_1.y, _skill_mc.width * _skill_mc.scaleX, _skill_mc.height * _skill_mc.scaleY);
                    var opp_obj_level = 0;
                    var checkType = _skill_mc["hitcheck_obj"];
                    if (checkType != undefined) {
                        opp_obj_level = Hero_HitCheck_obj.getInstance(_skill_mc).obj_level;
                    }
                    else {
                        checkType = _skill_mc["flyingobj"];
                        opp_obj_level = Hero_flyingObj.getInstance(_skill_mc).obj_level;
                    }
                    if (this.beatArea.intersects(angle2_1)) {
                        if (this.obj_level > opp_obj_level) {
                            checkType.do_hitObj();
                        }
                        else if (this.obj_level == opp_obj_level) {
                            checkType.do_hitObj();
                            this.do_hitObj();
                        }
                        else {
                            this.do_hitObj();
                        }
                    }
                }
            }
        }
        else {
            this.role.onHit = false;
        }
    };
    HitCheck_obj.prototype.do_move = function (Vx, Vy) {
        var _this = this;
        var dir = 0;
        if (Vx != 0) {
            this.role.skill_loader.map(function (i) {
                var skill = _this.beatMC.parent;
                if (i.skill_mc._mcName == skill._mcName) {
                    dir = i.skill_mc["dir"];
                    return;
                }
            });
            this.beatMC.parent.x = this.beatMC.parent.x + Vx * dir;
        }
        if (Vy != 0) {
            this.beatMC.parent.y = this.beatMC.parent.y + Vy;
        }
        // var _loc2_ = this.beatMC.parent.x + _level0.char_mc._x;
        // var _loc3_ = this.beatMC.parent.y + _level0.char_mc._y;
        var _loc2_ = this.beatMC.localToGlobal().x;
        var _loc3_ = this.beatMC.localToGlobal().y;
        if (_loc2_ > this.role.stage_width || _loc2_ < -50) {
            if (this.beatMC.parent && this.beatMC.parent.parent) {
                if (this.beatMC.parent._mcName == "fire2") {
                }
                this.beatMC.parent.parent.removeChild(this.beatMC.parent);
            }
        }
        if (this.beatMC.parent.y >= _level0.land_Y && Vy > 0) {
            this.beatMC.parent.y = _level0.land_Y;
            this.do_hitOpp();
        }
        // _level0.out("_parent._y:" + this.beatMC.y + "   " + _level0.land_Y + "   " + K_hitcheck.obj_Vy);
    };
    HitCheck_obj.prototype.stop_hitCheck = function () {
        this.role.hitcheckobj_action = undefined;
        this.clearHitInstance();
    };
    HitCheck_obj.prototype.getPosY = function () {
        // var _loc2_ = new Object();
        // _loc2_.x = this._x;
        // _loc2_.y = this._y;
        // this._parent.localToGlobal(_loc2_);
        // return _loc2_.y;
    };
    HitCheck_obj.prototype.do_hitOpp = function () {
        this.stop_hitCheck();
        if (this.beatMC.parent && !this.beatMC.parent.checkWaitingCallFun('hit')) {
            this.beatMC.parent.resetFrameStop();
            this.beatMC.parent.nextFrame();
        }
    };
    HitCheck_obj.prototype.do_hitObj = function () {
        this.stop_hitCheck();
        if (this.beatMC.parent && !this.beatMC.parent.checkWaitingCallFun('hit')) {
            this.beatMC.parent.resetFrameStop();
            this.beatMC.parent.nextFrame();
        }
    };
    HitCheck_obj.prototype.hitBack = function () {
        this.dir = -this.dir;
        this.beatMC.scaleX = -this.beatMC.scaleX;
        this.start_hitCheck(this.hitValue, this.opp);
    };
    HitCheck_obj.width = 125;
    HitCheck_obj.height = 34;
    return HitCheck_obj;
}());
__reflect(HitCheck_obj.prototype, "HitCheck_obj");
//# sourceMappingURL=HitCheck_obj.js.map