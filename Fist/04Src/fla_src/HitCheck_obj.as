class HitCheck_obj extends MovieClip
{
    var _name, _parent, dir, hitValue, beatArea, obj_level, role, opp, onEnterFrame, obj_Vx, obj_Vy, _x, _y;
    function HitCheck_obj()
    {
        super();
        _name = "area";
        dir = _parent.dir;
    } // End of the function
    function start_hitCheck(obj, r)
    {
        hitValue = obj;
        beatArea = this;
        _parent.obj_level = obj_level;
        role = r;
        opp = role.opp;
        if (opp.status_3 == "hurt" && !hitValue.reCheck)
        {
            return;
        } // end if
        if (hitValue.isObj)
        {
            role.flyingObj = _parent;
        } // end if
        onEnterFrame = do_hitCheck;
        this.do_hitCheck();
    } // End of the function
    function do_hitCheck()
    {
        if (_level0.inPause)
        {
            return;
        } // end if
        if (_level0.inFreeze)
        {
            return;
        } // end if
        if (obj_Vx != 0 || obj_Vy != 0)
        {
            this.do_move();
        } // end if
        if (opp.status_3 == "down" && hitValue.hitPos != "land")
        {
            return;
        } // end if
        if (hitValue.nohit_status.length > 0)
        {
            for (var _loc6 in hitValue.nohit_status)
            {
                var _loc3 = hitValue.nohit_status[_loc6];
                if (opp.status_1 == _loc3)
                {
                    return;
                } // end if
            } // end of for...in
        } // end if
        if (hitValue.nohit_skills.length > 0)
        {
            for (var _loc6 in hitValue.nohit_skills)
            {
                var _loc4 = hitValue.nohit_skills[_loc6];
                if (role.skill_last == _loc4 && opp.status_3 == "hurt")
                {
                    return;
                } // end if
            } // end of for...in
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
            var _loc5 = opp._parent.skill_loader;
            if (_loc5.getNextHighestDepth() > 0)
            {
                for (var _loc6 in _loc5)
                {
                    var _loc2 = _loc5[_loc6].area;
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
    function do_move()
    {
        if (obj_Vx != 0)
        {
            _parent._x = _parent._x + obj_Vx * dir;
        } // end if
        if (obj_Vy != 0)
        {
            _parent._y = _parent._y + obj_Vy;
        } // end if
        var _loc2 = _parent._x + _level0.char_mc._x;
        var _loc3 = _parent._y + _level0.char_mc._y;
        if (_loc2 > 700 || _loc2 < -50)
        {
            _parent.removeMovieClip();
        } // end if
        if (_parent._y >= _level0.land_Y && obj_Vy > 0)
        {
            _parent._y = _level0.land_Y;
            this.do_hitOpp();
        } // end if
        _level0.out("_parent._y:" + _parent._y + "   " + _level0.land_Y + "   " + obj_Vy);
    } // End of the function
    function stop_hitCheck()
    {
        delete this.onEnterFrame;
    } // End of the function
    function getPosY()
    {
        var _loc2 = new Object();
        _loc2.x = _x;
        _loc2.y = _y;
        _parent.localToGlobal(_loc2);
        return (_loc2.y);
    } // End of the function
    function do_hitOpp()
    {
        this.stop_hitCheck();
        if (_parent.hit != undefined)
        {
            _parent.hit();
        }
        else
        {
            _parent.play();
        } // end else if
    } // End of the function
    function do_hitObj()
    {
        this.stop_hitCheck();
        if (_parent.hit != undefined)
        {
            _parent.hit();
        }
        else
        {
            _parent.play();
        } // end else if
    } // End of the function
    function hitBack()
    {
        dir = -dir;
        _parent._xscale = -_parent._xscale;
        this.start_hitCheck(hitValue, opp);
    } // End of the function
} // End of Class
