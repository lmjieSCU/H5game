/**obj_flying与role在同一容器 */
class flyingObj {

  public hitValue: HitValue;
  public beatArea: egret.Rectangle;
  public role: Role;
  public opp: Role;
  public beatMC: zmovie.ZMovieClip;
  public dir: number = 0;
  public obj_level: number;
  public _parent_hash: number;
  public obj_flying: zmovie.ZMovieClip;//obj_flying  parent
  public skill_loader: Array<any>;
  public skill_loader_opp: Array<any>;
  public static width = 125;
  public static height = 34;

  constructor() {
    //   this._name = "area";
  }

  public clearHitInstance() {
    if (this.beatMC.parent == null) {
      Hero_flyingObj.clearInstance(this._parent_hash);
      return;
    }
    Hero_flyingObj.clearInstance(this.beatMC.parent);
  }


  public init_hit(hitvalue: HitValue, role: Role, obj_level: number) {
    this.hitValue = hitvalue;
    this.beatMC = this.hitValue.area;
    this.obj_flying = <zmovie.ZMovieClip>this.beatMC.parent;
    this.role = role;
    this.opp = this.role.opp;
    this._parent_hash = this.obj_flying.hashCode;
    this.obj_level = obj_level;
    this.skill_loader = this.role.skill_loader;
    this.skill_loader_opp = this.opp.skill_loader;
  }

  public do_move() {
  }

  public stop_render() {
    this.clearHitInstance();
    this.role.hitcheckflying_action = undefined;
    return;
  }


  public render_moveX(Vx: number) {
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
  }

  public moveX(Vx: number, _dir: number) {
    if (_dir == undefined) {
      this.dir = this.role.dir;
    }
    else {
      this.dir = _dir * this.role.dir;
    }
    this.role.hitcheckflying_action = this.render_moveX;
    this.role.hitcheckflying_instance = this;
    this.role.render_hitcheckflying_action_params = [Vx];
  }


  public render_moveXY(Vx: number, Vy: number) {
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
  }


  public moveXY(Vx: number, Vy: number, _dir: number) {
    if (_dir == undefined) {
      this.dir = this.role.dir;
    }
    else {
      this.dir = _dir * this.role.dir;
    }
    this.role.hitcheckflying_action = this.render_moveXY;
    this.role.hitcheckflying_instance = this;
    this.role.hitcheckflying_instance = [Vx, Vy];
  }


  /**移动到目标动画处 */
  public moveAim_obj(V: number, fromMC: zmovie.ZMovieClip, toMC: zmovie.ZMovieClip) {
    let P1 = fromMC.localToGlobal();
    let P2 = toMC.localToGlobal();
    let angle = UI.getAtan_angleOfLine(P1.x, P1.y, P2.x, P2.y);
    let Vx = V * Math.cos(angle);
    let Vy = V * Math.sin(angle);
    this.role.hitcheckflying_action = this.render_moveAim_obj;
    this.role.hitcheckflying_instance = this;
    this.role.hitcheckflying_instance = [Vx, Vy];
  }

  public render_moveAim_obj(Vx: number, Vy: number) {
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
  }

  public render_moveAim_pos(Vx: number, Vy: number) {
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
  }

  /**移动到目标坐标处 */
  public moveAim_pos(V: number, obj_x: number, obj_y: number, target_x: number, target_y: number) {
    let angle = UI.getAtan_angleOfLine(target_x, target_y, obj_x, obj_y);
    let Vx = V * Math.sin(angle);
    let Vy = V * Math.cos(angle);
    this.role.hitcheckflying_action = this.render_moveAim_pos;
    this.role.hitcheckflying_instance = this;
    this.role.render_hitcheckflying_action_params = [Vx, Vy];
  }

  public hitCheck() {
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
    let oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
    if (oppbody == null) {
      return;
    }
    let pos1 = this.beatMC.getTransformedBounds(this.beatMC.stage);
    this.beatArea = new egret.Rectangle(pos1.x - flyingObj.width * this.beatMC.scaleX / 2, pos1.y - flyingObj.height * this.beatMC.scaleY,
      flyingObj.width * this.beatMC.scaleX, flyingObj.height * this.beatMC.scaleY);
    let pos2 = oppbody.getTransformedBounds(oppbody.stage);
    let angle2 = new egret.Rectangle(pos2.x, pos2.y, oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX,
      oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY);
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
      for (let index in this.skill_loader_opp) {
        //技能相互碰撞
        let _skill_mc = this.skill_loader_opp[index].skill_mc;
        if (_skill_mc != this.obj_flying) {
          let pos2 = _skill_mc.getTransformedBounds(_skill_mc.stage);
          let angle2 = new egret.Rectangle(pos2.x, pos2.y, _skill_mc.width * _skill_mc.scaleX, _skill_mc.height * _skill_mc.scaleY);
          let opp_obj_level: number = 0;
          let checkType = _skill_mc["hitcheck_obj"];
          if (checkType != undefined) {
            opp_obj_level = Hero_HitCheck_obj.getInstance(_skill_mc).obj_level;
          } else {
            checkType = _skill_mc["flyingobj"];
            opp_obj_level = Hero_flyingObj.getInstance(_skill_mc).obj_level;
          }
          if (this.beatArea.intersects(angle2)) {
            if (this.obj_level > opp_obj_level) {
              checkType.do_hitObj();
            } else if (this.obj_level == opp_obj_level) {
              checkType.do_hitObj();
              this.do_hitObj();
            } else {
              this.do_hitObj();
            }
          }
        }
      }
    }
    else {
      this.role.onHit = false;
    }
  }

  public stop_hitCheck() {
    this.hitCheck = null;
  }


  public hitBack() {
    this.dir = - this.dir;
    this.obj_flying.scaleX = - this.obj_flying.scaleX;
    var _loc3_ = this.role;
    this.role = this.opp;
    this.opp = _loc3_;
    this.skill_loader = this.opp.skill_loader;
    this.skill_loader_opp = this.role.skill_loader;
  }


  public do_hitOpp() {
    this.stop_render();
    if (!(<zmovie.ZMovieClip>this.obj_flying).checkWaitingCallFun('onHit')) {
      (<zmovie.ZMovieClip>this.obj_flying).resetFrameStop();
      (<zmovie.ZMovieClip>this.obj_flying).nextFrame();
    }
  }


  public do_hitObj() {
    this.stop_render();
    if (!(<zmovie.ZMovieClip>this.obj_flying).checkWaitingCallFun('onHit')) {
      (<zmovie.ZMovieClip>this.obj_flying).resetFrameStop();
      (<zmovie.ZMovieClip>this.obj_flying).nextFrame();
    }
  }

  public onMoveOut() {
    if (!(<zmovie.ZMovieClip>this.obj_flying).checkWaitingCallFun('onMoveOut')) {
      (<zmovie.ZMovieClip>this.obj_flying).resetFrameStop();
      (<zmovie.ZMovieClip>this.obj_flying).nextFrame();
    } else {
      if (this.obj_flying.stage)
        this.obj_flying.stage.removeChild(this.obj_flying);
    }
  }

  public onLand() {
    if (!(<zmovie.ZMovieClip>this.obj_flying).checkWaitingCallFun('onLand')) {
      (<zmovie.ZMovieClip>this.obj_flying).resetFrameStop();
      (<zmovie.ZMovieClip>this.obj_flying).nextFrame();
    }
  }
  public onHit() {
  }

  public stop() {
    (<zmovie.ZMovieClip>this.obj_flying).stop();
  }


  public play() {
    (<zmovie.ZMovieClip>this.obj_flying).resetFrameStop();
    (<zmovie.ZMovieClip>this.obj_flying).nextFrame();
  }


}
