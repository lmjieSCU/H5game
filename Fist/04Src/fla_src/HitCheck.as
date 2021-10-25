class HitCheck extends MovieClip
{
    var _name, hitValue, beatArea, role, opp, _parent, onEnterFrame, _x, _y;
    function HitCheck()
    {
        super();
        trace ("HitCheck: " + HitCheck);
        _name = "area";
    } // End of the function
    function start_hitCheck(obj, r)
    {
        hitValue = obj;
        beatArea = this;
        role = r;
        opp = role.opp;
        if (!hitValue.reCheck && opp.status_3 == "hurt")
        {
            return;
        } // end if
        if (hitValue.isObj)
        {
            role.flyingObj = _parent;
        } // end if
        role.onHit = false;
        if (opp.status_3 == "down" && hitValue.hitPos != "land")
        {
            return;
        } // end if
        if (hitValue.nohit_status.length > 0)
        {
            for (var _loc4 in hitValue.nohit_status)
            {
                var _loc2 = hitValue.nohit_status[_loc4];
                if (opp.status_1 == _loc2)
                {
                    return;
                } // end if
            } // end of for...in
        } // end if
        if (hitValue.nohit_skills.length > 0)
        {
            for (var _loc4 in hitValue.nohit_skills)
            {
                var _loc3 = String(hitValue.nohit_skills[_loc4]);
                if (String(opp.mc.hitSkillName) == _loc3 && opp.status_3 == "hurt")
                {
                    return;
                } // end if
            } // end of for...in
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
        if (beatArea.hitTest(opp.mc.body))
        {
            --hitValue.checkTimes;
            if (hitValue.checkTimes == 0)
            {
                this.stop_hitCheck();
            } // end if
            if (hitValue.isObj)
            {
                _parent.play();
            } // end if
            role.doHit(hitValue);
            opp.doHurt(hitValue);
        } // end if
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
} // End of Class
