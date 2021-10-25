class role_corn.KeyControl extends MovieClip
{
    var role, key_array, skill_array, skill_mapping, input_array, u, d, f, b, p, k, p_l, k_l, s, s2, isKeyDown, downKey, time1, time2, upKey, Interval_toAction, Interval_sendKey;
    function KeyControl()
    {
        super();
    } // End of the function
    function init(key, skill1, skill2, char)
    {
        role = char;
        key_array = key;
        skill_array = skill1;
        skill_mapping = skill2;
        this.setKey();
        input_array = new Array();
        Key.addListener(this);
    } // End of the function
    function setKey()
    {
        u = key_array[0].u;
        d = key_array[0].d;
        f = key_array[0].f;
        b = key_array[0].b;
        p = key_array[0].p;
        k = key_array[0].k;
        p_l = key_array[0].p_l;
        k_l = key_array[0].k_l;
        s = key_array[0].s;
        s2 = key_array[0].s2;
    } // End of the function
    function onKeyDown()
    {
        if (isKeyDown && downKey == Key.getCode())
        {
            isKeyDown = true;
            return (false);
        } // end if
        isKeyDown = true;
        time1 = getTimer();
        downKey = Key.getCode();
        if (downKey == p || downKey == k || downKey == s || downKey == s2 || downKey == p_l || downKey == k_l)
        {
            this.keyChain_act(downKey);
        }
        else if (downKey == u || downKey == d || downKey == f || downKey == b)
        {
            this.actionCheck(downKey);
            this.keyChain_dir(downKey);
        } // end else if
    } // End of the function
    function onKeyUp()
    {
        isKeyDown = false;
        time2 = getTimer();
        upKey = Key.getCode();
        if (upKey == u || upKey == d || upKey == f || upKey == b)
        {
        } // end if
    } // End of the function
    function toSkill(skill)
    {
        role.toSkill(skill);
    } // End of the function
    function toAction(action)
    {
        clearInterval(Interval_toAction);
        role.toAction(action);
    } // End of the function
    function keyClear()
    {
        input_array = [];
        time_check = 0;
    } // End of the function
    function skillCheck(myKey)
    {
        var _loc7;
        var _loc6;
        var _loc4;
        var _loc8;
        if (input_array.length == 0)
        {
            this.skill_normal(myKey);
            return;
        } // end if
        var _loc9 = input_array.toString();
        _loc7 = _loc9 + "," + myKey;
        if (myKey == p_l)
        {
            _loc6 = _loc9 + "," + p;
        }
        else if (myKey == k_l)
        {
            _loc6 = _loc9 + "," + k;
        } // end else if
        _loc8 = skill_mapping.length;
        for (var _loc2 = 0; _loc2 < _loc8; ++_loc2)
        {
            var _loc3 = skill_mapping[_loc2];
            if (_loc3 == undefined)
            {
                continue;
            } // end if
            _loc4 = skill_array[_loc2].toString();
            if (_loc7.indexOf(_loc4) != -1)
            {
                this.toSkill(_loc3);
                this.keyClear();
                return;
            } // end if
            if (myKey == p_l || myKey == k_l)
            {
                if (_loc6.indexOf(_loc4) != -1)
                {
                    this.toSkill(_loc3);
                    this.keyClear();
                    return;
                } // end if
            } // end if
        } // end of for
        this.skill_normal(myKey);
    } // End of the function
    function actionCheck(myKey)
    {
        var _loc2;
        if (myKey == f)
        {
            if (dir == 1)
            {
                _loc2 = "walk_f";
            }
            else
            {
                _loc2 = "walk_b";
            } // end else if
        }
        else if (myKey == b)
        {
            if (dir == 1)
            {
                _loc2 = "walk_b";
            }
            else
            {
                _loc2 = "walk_f";
            } // end else if
        }
        else if (myKey == u)
        {
            _loc2 = "jump";
        }
        else if (myKey == d)
        {
            _loc2 = "squat";
        } // end else if
        clearInterval(Interval_toAction);
        Interval_toAction = setInterval(this, "toAction", toAction_interval, _loc2);
    } // End of the function
    function skill_normal(myKey)
    {
        switch (myKey)
        {
            case p:
            {
                role._to_punch();
                break;
            } 
            case k:
            {
                role._to_kick();
                break;
            } 
            case p_l:
            {
                role._to_punch_l();
                break;
            } 
            case k_l:
            {
                role._to_kick_l();
                break;
            } 
            case p_l + k_l:
            {
                role._to_PK_l();
                break;
            } 
            case p + k:
            {
                role._to_PK();
                break;
            } 
            case s:
            {
                role._to_key_s();
                break;
            } 
            case s2:
            {
                role._to_key_s2();
                break;
            } 
            case p + k + s2:
            {
                role._to_PKS();
                break;
            } 
        } // End of switch
        this.keyClear();
    } // End of the function
    function doubleKey(myKey)
    {
        clearInterval(Interval_toAction);
        if (myKey == f)
        {
            role._to_double_f();
        }
        else if (myKey == b)
        {
            role._to_double_b();
        }
        else if (myKey == d)
        {
            role._to_double_d();
        } // end else if
    } // End of the function
    function keyChain_dir(key)
    {
        var _loc2 = key;
        if (dir == -1)
        {
            if (_loc2 == f)
            {
                _loc2 = b;
            }
            else if (_loc2 == b)
            {
                _loc2 = f;
            } // end if
        } // end else if
        if (time_check == 0)
        {
            input_array.push(_loc2);
            time_check = getTimer();
        }
        else
        {
            var _loc4 = time_check;
            var _loc3 = getTimer();
            time_check = _loc3;
            if (_loc3 - _loc4 < time_interval && _loc3 - _loc4 > time_interval3)
            {
                input_array.push(_loc2);
                if (input_array[input_array.length - 2] == _loc2)
                {
                    clearInterval(Interval_toAction);
                    Interval_toAction = setInterval(this, "doubleKey", toAction_interval, _loc2);
                } // end if
            }
            else
            {
                this.keyClear();
                time_check = 0;
                this.keyChain_dir(key);
            } // end else if
        } // end else if
        if (input_array.length > 6)
        {
            input_array.shift();
        } // end if
    } // End of the function
    function keyChain_act(myKey)
    {
        multiKey = multiKey + myKey;
        clearInterval(Interval_sendKey);
        Interval_sendKey = setInterval(this, "sendKey", multi_interval, multiKey);
    } // End of the function
    function sendKey(myKey)
    {
        var _loc3 = time_check;
        var _loc2 = getTimer();
        if (_loc2 - _loc3 < time_interval)
        {
            this.skillCheck(myKey);
        }
        else
        {
            this.skill_normal(myKey);
        } // end else if
        clearInterval(Interval_sendKey);
        multiKey = 0;
    } // End of the function
    var multiKey = 0;
    var time_check = 0;
    var time_interval = 200;
    var time_interval3 = 10;
    var multi_interval = 20;
    var toAction_interval = 10;
    var dir = 1;
} // End of Class
