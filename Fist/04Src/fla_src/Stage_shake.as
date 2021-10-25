class Stage_shake extends MovieClip
{
    var shake_v0, shake_v, dir_x, dir_y, seg, shake_times;
    function Stage_shake()
    {
        super();
        shake_v0 = 13;
        shake_v = shake_v0;
        dir_x = 1;
        dir_y = 1;
        seg = 0;
    } // End of the function
    function shakeStart(s_t, s_rage)
    {
        if (inShake)
        {
            return;
        } // end if
        shake_times = s_t;
        if (s_rage != undefined)
        {
            shake_v = s_rage;
        }
        else
        {
            shake_v = shake_v0;
        } // end else if
        if (shake_times == null)
        {
            shake_times = 0;
        } // end if
        if (shake_times == 0)
        {
            return;
        } // end if
        inShake = true;
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            this.shake();
        } // End of the function
        this.shake();
    } // End of the function
    function shake()
    {
        ++seg;
        if (seg == 2)
        {
            _level0._y = shake_v;
            _level0.element_mc._y = _level0.element_mc._y - shake_v;
        }
        else if (seg == 4)
        {
            seg = 0;
            _level0._y = 0;
            _level0.element_mc._y = 0;
            --shake_times;
            if (shake_times <= 0)
            {
                shake_v = shake_v - 3;
                if (shake_v <= 0)
                {
                    shake_v = 0;
                    inShake = false;
                    delete this.onEnterFrame;
                } // end if
            } // end if
        } // end else if
    } // End of the function
    var inShake = false;
} // End of Class
