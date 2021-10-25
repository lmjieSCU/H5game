var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**obj_flying与role在同一容器 */
var flyingObj = (function () {
    function flyingObj() {
        this.dir = 0;
        //   this._name = "area";
    }
    flyingObj.prototype.clearHitInstance = function () {
        if (this.beatMC.parent == null) {
            Hero_flyingObj.clearInstance(this._parent_hash);
            return;
        }
        Hero_flyingObj.clearInstance(this.beatMC.parent);
    };
    flyingObj.prototype.init_hit = function (hitvalue, role, obj_level) {
        this.hitValue = hitvalue;
        this.beatMC = this.hitValue.area;
        this.obj_flying = this.beatMC.parent;
        this.role = role;
        this.opp = this.role.opp;
        this._parent_hash = this.obj_flying.hashCode;
        this.obj_level = obj_level;
        this.skill_loader = this.role.skill_loader;
        this.skill_loader_opp = this.opp.skill_loader;
    };
    flyingObj.prototype.do_move = function () {
    };
    flyingObj.prototype.stop_render = function () {
        this.clearHitInstance();
        this.role.hitcheckflying_action = undefined;
        return;
    };
    flyingObj.prototype.render_moveX = function (Vx) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_level0.inFreeze) {
            return undefined;
        }
        this.obj_flying.x = this.obj_flying.x + Vx * this.dir;
        if (this.obj_flying.x > this.role.edge_max + 100 || this.obj_flying.x < this.role.edge_min - 100) {
            this.stop_render();
            this.onMoveOut();
        }
        if (this['hitCheck']) {
            this['hitCheck']();
        }
    };
    flyingObj.prototype.moveX = function (Vx, _dir) {
        if (_dir == undefined) {
            this.dir = this.role.dir;
        }
        else {
            this.dir = _dir * this.role.dir;
        }
        this.role.hitcheckflying_action = this.render_moveX;
        this.role.hitcheckflying_instance = this;
        this.role.render_hitcheckflying_action_params = [Vx];
    };
    flyingObj.prototype.render_moveXY = function (Vx, Vy) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_level0.inFreeze) {
            return undefined;
        }
        this.obj_flying.x = this.obj_flying.x + Vx * this.dir;
        this.obj_flying.y = this.obj_flying.y + Vy;
        if (this.obj_flying.x > this.role.edge_max + 100 || this.obj_flying.x < this.role.edge_min - 100) {
            this.onMoveOut();
        }
        if (this.obj_flying.y >= this.role.land_Y) {
            this.obj_flying.y = this.role.land_Y;
            this.stop_render();
            this.onLand();
        }
        if (this['hitCheck']) {
            this['hitCheck']();
        }
    };
    flyingObj.prototype.moveXY = function (Vx, Vy, _dir) {
        if (_dir == undefined) {
            this.dir = this.role.dir;
        }
        else {
            this.dir = _dir * this.role.dir;
        }
        this.role.hitcheckflying_action = this.render_moveXY;
        this.role.hitcheckflying_instance = this;
        this.role.hitcheckflying_instance = [Vx, Vy];
    };
    /**移动到目标动画处 */
    flyingObj.prototype.moveAim_obj = function (V, fromMC, toMC) {
        var P1 = fromMC.localToGlobal();
        var P2 = toMC.localToGlobal();
        var angle = UI.getAtan_angleOfLine(P1.x, P1.y, P2.x, P2.y);
        var Vx = V * Math.cos(angle);
        var Vy = V * Math.sin(angle);
        this.role.hitcheckflying_action = this.render_moveAim_obj;
        this.role.hitcheckflying_instance = this;
        this.role.hitcheckflying_instance = [Vx, Vy];
    };
    flyingObj.prototype.render_moveAim_obj = function (Vx, Vy) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_level0.inFreeze) {
            return undefined;
        }
        this.obj_flying.x = this.obj_flying.x + Vx;
        this.obj_flying.y = this.obj_flying.y + Vy;
        if (this.obj_flying.x > this.role.edge_max + 100 || this.obj_flying.x < this.role.edge_min - 100) {
            this.stop_render();
            this.onMoveOut();
        }
        if (this.obj_flying.y >= this.role.land_Y) {
            this.obj_flying.y = this.role.land_Y;
            this.stop_render();
            this.onLand();
        }
        if (this['hitCheck']) {
            this['hitCheck']();
        }
    };
    flyingObj.prototype.render_moveAim_pos = function (Vx, Vy) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_level0.inFreeze) {
            return undefined;
        }
        this.obj_flying.x = this.obj_flying.x + Vx;
        this.obj_flying.y = this.obj_flying.y + Vy;
        if (this.obj_flying.x > this.role.edge_max + 100 || this.obj_flying.x < this.role.edge_min - 100) {
            this.stop_render();
            this.onMoveOut();
        }
        if (this.obj_flying.y >= _level0.land_Y) {
            this.obj_flying.y = this.role.land_Y;
            this.stop_render();
            this.onLand();
        }
        if (this['hitCheck']) {
            this['hitCheck']();
        }
    };
    /**移动到目标坐标处 */
    flyingObj.prototype.moveAim_pos = function (V, obj_x, obj_y, target_x, target_y) {
        var angle = UI.getAtan_angleOfLine(target_x, target_y, obj_x, obj_y);
        var Vx = V * Math.sin(angle);
        var Vy = V * Math.cos(angle);
        this.role.hitcheckflying_action = this.render_moveAim_pos;
        this.role.hitcheckflying_instance = this;
        this.role.render_hitcheckflying_action_params = [Vx, Vy];
    };
    flyingObj.prototype.hitCheck = function () {
        if (_level0.inFreeze) {
            return undefined;
        }
        if (this.role.inFreeze) {
            return undefined;
        }
        if (this.hitValue.hurtBack == "" && this.hitValue.hurtAway == "") {
            return undefined;
        }
        if (this.opp.status_3 == "down" && this.hitValue.hitPos != "land") {
            return undefined;
        }
        var oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
        if (oppbody == null) {
            return;
        }
        var pos1 = this.beatMC.getTransformedBounds(this.beatMC.stage);
        this.beatArea = new egret.Rectangle(pos1.x - flyingObj.width * this.beatMC.scaleX / 2, pos1.y - flyingObj.height * this.beatMC.scaleY, flyingObj.width * this.beatMC.scaleX, flyingObj.height * this.beatMC.scaleY);
        var pos2 = oppbody.getTransformedBounds(oppbody.stage);
        var angle2 = new egret.Rectangle(pos2.x, pos2.y, oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX, oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY);
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
            for (var index in this.skill_loader_opp) {
                //技能相互碰撞
                var _skill_mc = this.skill_loader_opp[index].skill_mc;
                if (_skill_mc != this.obj_flying) {
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
    flyingObj.prototype.stop_hitCheck = function () {
        this.hitCheck = null;
    };
    flyingObj.prototype.hitBack = function () {
        this.dir = -this.dir;
        this.obj_flying.scaleX = -this.obj_flying.scaleX;
        var _loc3_ = this.role;
        this.role = this.opp;
        this.opp = _loc3_;
        this.skill_loader = this.opp.skill_loader;
        this.skill_loader_opp = this.role.skill_loader;
    };
    flyingObj.prototype.do_hitOpp = function () {
        this.stop_render();
        if (!this.obj_flying.checkWaitingCallFun('onHit')) {
            this.obj_flying.resetFrameStop();
            this.obj_flying.nextFrame();
        }
    };
    flyingObj.prototype.do_hitObj = function () {
        this.stop_render();
        if (!this.obj_flying.checkWaitingCallFun('onHit')) {
            this.obj_flying.resetFrameStop();
            this.obj_flying.nextFrame();
        }
    };
    flyingObj.prototype.onMoveOut = function () {
        if (!this.obj_flying.checkWaitingCallFun('onMoveOut')) {
            this.obj_flying.resetFrameStop();
            this.obj_flying.nextFrame();
        }
        else {
            if (this.obj_flying.stage)
                this.obj_flying.stage.removeChild(this.obj_flying);
        }
    };
    flyingObj.prototype.onLand = function () {
        if (!this.obj_flying.checkWaitingCallFun('onLand')) {
            this.obj_flying.resetFrameStop();
            this.obj_flying.nextFrame();
        }
    };
    flyingObj.prototype.onHit = function () {
    };
    flyingObj.prototype.stop = function () {
        this.obj_flying.stop();
    };
    flyingObj.prototype.play = function () {
        this.obj_flying.resetFrameStop();
        this.obj_flying.nextFrame();
    };
    flyingObj.width = 125;
    flyingObj.height = 34;
    return flyingObj;
}());
__reflect(flyingObj.prototype, "flyingObj");
//# sourceMappingURL=flyingObj.js.map