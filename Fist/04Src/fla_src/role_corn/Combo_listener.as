class role_corn.Combo_listener extends MovieClip
{
    var superCancle, noCancle, role, combo1, beCancled, s_cancle, notTOcancle, combo2, _currentframe, onEnterFrame;
    function Combo_listener()
    {
        super();
    } // End of the function
    function check_combo(status_1, skill)
    {
        superCancle = false;
        if (noCancle[status_1] == skill)
        {
            return;
        } // end if
        if (this.check_combo1(status_1, skill))
        {
            return (true);
        }
        else if (role.opp.inCount == true)
        {
        }
        else if (this.check_combo2(status_1, skill))
        {
            return (true);
        }
        else if (this.check_combo3(status_1, skill))
        {
            return (true);
        }
        else if (this.check_combo4(status_1, skill))
        {
            return (true);
        } // end else if
    } // End of the function
    function check_combo1(status_1, skill)
    {
        var _loc2;
        _loc2 = combo1[status_1][skill];
        if (_loc2 != undefined)
        {
            if (this.start_combo(status_1, _loc2))
            {
                return (true);
            } // end if
        } // end if
    } // End of the function
    function check_combo2(status_1, skill)
    {
        if (beCancled[status_1] != 1)
        {
            return (false);
        }
        else if (s_cancle[status_1][skill] == 1)
        {
        }
        else if (notTOcancle[skill] == 1)
        {
            return (false);
        } // end else if
        if (this.start_combo(status_1, skill))
        {
            return (true);
        } // end if
    } // End of the function
    function check_combo3(status_1, skill)
    {
        if (role.superCancle() && notTOcancle[skill] != 1 && status_1 != skill)
        {
            superCancle = true;
            if (this.start_combo(status_1, skill))
            {
                return (true);
            } // end if
        } // end if
    } // End of the function
    function check_combo4(status_1, skill)
    {
        if (role.superCancle() && notTOcancle[skill] != 1 && status_1 != skill)
        {
            superCancle = true;
            if (role.status_2 == "toLand")
            {
                role.status_2 = "land";
                role.powerDecType2 = "cancle";
                role.skill_start(skill);
                return (true);
            } // end if
        } // end if
    } // End of the function
    function start_combo(status_1, skill)
    {
        var role_mc = role;
        var _loc2 = role.mc;
        var start_frame = combo2[status_1];
        if (isNaN(start_frame))
        {
            return (false);
        } // end if
        var SC = superCancle;
        if (_loc2._currentframe < start_frame - 5)
        {
            return (false);
        } // end if
        _loc2.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (role_mc.inFreeze)
            {
                return;
            } // end if
            if (_currentframe >= start_frame)
            {
                if (SC)
                {
                    role_mc.powerDecType2 = "cancle";
                } // end if
                role_mc.skill_start(skill);
                delete this.onEnterFrame;
            } // end if
        };
        return (true);
    } // End of the function
} // End of Class
