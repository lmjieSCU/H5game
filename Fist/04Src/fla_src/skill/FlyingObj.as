class skill.FlyingObj extends MovieClip
{
    var _name, _parent, obj, role, opp, skill_loader, skill_loader_opp, hitValue, beatArea, obj_level, dir, mc;
    function FlyingObj()
    {
        super();
        _name = "area";
        obj = _parent;
        role = obj._root.role_mc;
        opp = role.opp;
        skill_loader = role._parent.skill_loader;
        skill_loader_opp = opp._parent.skill_loader;
    } // End of the function
    function init_hit(hitV)
    {
        hitValue = hitV;
        beatArea = hitValue.area;
        obj_level = hitValue.obj_level;
    } // End of the function
    function do_move()
    {
    } // End of the function
    function moveX(Vx, _dir)
    {
        if (_dir == undefined)
        {
            dir = role.dir;
        }
        else
        {
            dir = _dir * role.dir;
        } // end else if
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (_level0.inFreeze)
            {
                return;
            } // end if
            obj._x = obj._x + Vx * dir;
            var _loc2 = obj._x + _level0.char_mc._x;
            if (_loc2 > _level0.stage_with + 100 || _loc2 < -100)
            {
                delete this.onEnterFrame;
                this.onMoveOut();
            } // end if
            this.hitCheck();
        } // End of the function
    } // End of the function
    function moveXY(Vx, Vy, _dir)
    {
        if (_dir == undefined)
        {
            dir = role.dir;
        }
        else
        {
            dir = _dir * role.dir;
        } // end else if
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (_level0.inFreeze)
            {
                return;
            } // end if
            obj._x = obj._x + Vx * dir;
            obj._y = obj._y + Vy;
            var _loc2 = obj._x + _level0.char_mc._x;
            if (_loc2 > _level0.stage_with + 100 || _loc2 < -100)
            {
                this.onMoveOut();
            } // end if
            var _loc3 = obj._y + _level0.char_mc._y;
            if (_loc3 >= _level0.land_Y)
            {
                obj._y = _level0.land_Y - _level0.char_mc._y;
                delete this.onEnterFrame;
                this.onLand();
            } // end if
            this.hitCheck();
        } // End of the function
    } // End of the function
    function moveAim_obj(V, fromMC, toMC)
    {
        var _loc5 = Func.lToG(fromMC);
        var _loc3 = Func.lToG(toMC);
        var _loc4 = ExtMath.angleOfLine(_loc5.x, _loc5.y, _loc3.x, _loc3.y);
        var Vx = V * ExtMath.cosD(_loc4);
        var Vy = V * ExtMath.sinD(_loc4);
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (_level0.inFreeze)
            {
                return;
            } // end if
            obj._x = obj._x + Vx;
            obj._y = obj._y + Vy;
            var _loc2 = obj._x + _level0.char_mc._x;
            if (_loc2 > _level0.stage_with + 100 || _loc2 < -100)
            {
                delete this.onEnterFrame;
                this.onMoveOut();
            } // end if
            var _loc3 = obj._y + _level0.char_mc._y;
            if (_loc3 >= _level0.land_Y)
            {
                obj._y = _level0.land_Y - _level0.char_mc._y;
                delete this.onEnterFrame;
                this.onLand();
            } // end if
            this.hitCheck();
        } // End of the function
    } // End of the function
    function moveAim_pos(V, obj_x, obj_y, target_x, target_y)
    {
        var _loc3 = ExtMath.angleOfLine(obj_x, obj_y, target_x, target_y);
        var Vx = V * ExtMath.cosD(_loc3);
        var Vy = V * ExtMath.sinD(_loc3);
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (_level0.inFreeze)
            {
                return;
            } // end if
            obj._x = obj._x + Vx;
            obj._y = obj._y + Vy;
            var _loc2 = obj._x + _level0.char_mc._x;
            if (_loc2 > _level0.stage_with + 100 || _loc2 < -100)
            {
                delete this.onEnterFrame;
                this.onMoveOut();
            } // end if
            var _loc3 = obj._y + _level0.char_mc._y;
            if (_loc3 >= _level0.land_Y)
            {
                obj._y = _level0.land_Y - _level0.char_mc._y;
                delete this.onEnterFrame;
                this.onLand();
            } // end if
            this.hitCheck();
        } // End of the function
    } // End of the function
    function hitCheck()
    {
        if (_level0.inFreeze)
        {
            return;
        } // end if
        if (role.inFreeze)
        {
            return;
        } // end if
        if (hitValue.hurtBack == "" && hitValue.hurtAway == "")
        {
            return;
        } // end if
        if (opp.status_3 == "down" && hitValue.hitPos != "land")
        {
            return;
        } // end if
        if (beatArea.hitTest(opp.mc.body))
        {
            role.onHit = true;
            --hitValue.checkTimes;
            role.doHit(hitValue);
            opp.doHurt(hitValue);
            if (hitValue.checkTimes == 0)
            {
                this.stop_hitCheck();
            } // end if
            if (hitValue.isObj)
            {
                this.do_hitOpp();
            } // end if
        }
        else if (hitValue.isObj)
        {
            if (skill_loader_opp.getNextHighestDepth() > 0)
            {
                var _loc3;
                for (var _loc3 in skill_loader_opp)
                {
                    var _loc2 = skill_loader_opp[_loc3].area;
                    if (_loc2 == this)
                    {
                        continue;
                    } // end if
                    if (_loc2.hitTest(this))
                    {
                        if (obj_level > _loc2.obj_level)
                        {
                            _loc2.do_hitObj();
                            continue;
                        } // end if
                        if (obj_level == _loc2.obj_level)
                        {
                            _loc2.do_hitObj();
                            this.do_hitObj();
                            continue;
                        } // end if
                        this.do_hitObj();
                    } // end if
                } // end of for...in
            } // end if
        }
        else
        {
            role.onHit = false;
        } // end else if
    } // End of the function
    function stop_hitCheck()
    {
        function hitCheck()
        {
        } // End of the function
    } // End of the function
    function hitBack()
    {
        dir = -dir;
        _parent._xscale = -_parent._xscale;
        var _loc3 = role;
        role = opp;
        opp = _loc3;
        skill_loader = opp._parent.skill_loader;
        skill_loader_opp = _root.skill_loader;
    } // End of the function
    function do_hitOpp()
    {
        if (_parent.onHit != undefined)
        {
            _parent.onHit();
        }
        else
        {
            _parent.play();
        } // end else if
    } // End of the function
    function do_hitObj()
    {
        if (_parent.onHit != undefined)
        {
            _parent.onHit();
        }
        else
        {
            _parent.play();
        } // end else if
    } // End of the function
    function onMoveOut()
    {
        if (_parent.onMoveOut != undefined)
        {
            _parent.onMoveOut();
        }
        else
        {
            _parent.removeMovieClip();
        } // end else if
    } // End of the function
    function onLand()
    {
        if (_parent.onLand != undefined)
        {
            _parent.onLand();
        }
        else
        {
            _parent.play();
        } // end else if
    } // End of the function
    function onHit()
    {
    } // End of the function
    function stop()
    {
        mc.stop();
    } // End of the function
    function play()
    {
        mc.play();
    } // End of the function
} // End of Class
