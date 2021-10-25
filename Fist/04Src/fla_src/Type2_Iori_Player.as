class Type2_Iori_Player extends Type2_Iori_role
{
    var toSkill, toSkill_temp, toAction, toAction_temp, toStatus, toStatus_temp, noAct, key_array, mode_key, skill_array, skill_mapping, getNextHighestDepth, attachMovie, newKeyControl, u, d, f, b, p, k, p_l, k_l, s, s2, control, toStatus_switch, status_1, stand, opp, gotoAndStop;
    function Type2_Iori_Player()
    {
        super();
        toSkill_temp = toSkill;
        toAction_temp = toAction;
        toStatus_temp = toStatus;
        toSkill = noAct;
        toAction = noAct;
    } // End of the function
    function init(key, _mode_key)
    {
        key_array = key;
        mode_key = _mode_key;
        this.setKey();
        skill_array = new Array();
        skill_mapping = new Array();
        if (mode_key == "easy")
        {
            this.skill_code_easy();
        }
        else
        {
            this.skill_code();
        } // end else if
        Object.registerClass("KeyControl", role_corn.KeyControl);
        this.attachMovie("KeyControl", "newKeyControl", this.getNextHighestDepth());
        newKeyControl.init(key_array, skill_array, skill_mapping, this);
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
    function skill_code()
    {
        skill_array.push([f, d, b, f, p]);
        skill_mapping.push(["sk_CChun"]);
        skill_array.push([b, d, f, p]);
        skill_mapping.push(["sk_CChun"]);
        skill_array.push([d, f, s]);
        skill_mapping.push(["sk_s_zhuangqiang"]);
        skill_array.push([d, b, s]);
        skill_mapping.push(["sk_s_qianzai1"]);
        skill_array.push([d, f, d, f, k]);
        skill_mapping.push(["sk_8ZW"]);
        skill_array.push([d, f, d, b, p]);
        skill_mapping.push(["sk_s1xiii"]);
        skill_array.push([d, f, b, p]);
        skill_mapping.push(["sk_s1xiii"]);
        skill_array.push([d, b, k]);
        skill_mapping.push(["sk_MNiao"]);
        skill_array.push([d, b, p]);
        skill_mapping.push(["sk_CYue"]);
        skill_array.push([f, d, f, p]);
        skill_mapping.push(["sk_YTao"]);
        skill_array.push([d, f, p]);
        skill_mapping.push(["sk_YJue"]);
        skill_array.push([d, f, k]);
        skill_mapping.push(["sk5_1"]);
    } // End of the function
    function skill_code_easy()
    {
        skill_array.push([b, f, p]);
        skill_mapping.push(["sk_CChun"]);
        skill_array.push([b, p]);
        skill_mapping.push(["sk_CYue"]);
        skill_array.push([d, f, p]);
        skill_mapping.push(["sk_YTao"]);
        skill_array.push([f, p_l]);
        skill_mapping.push(["punch_s1"]);
        skill_array.push([f, p]);
        skill_mapping.push(["sk_YJue"]);
        skill_array.push([b, k]);
        skill_mapping.push(["sk_MNiao"]);
        skill_array.push([f, k_l]);
        skill_mapping.push(["kick_s1"]);
        skill_array.push([f, k]);
        skill_mapping.push(["sk5_1"]);
    } // End of the function
    function start_control()
    {
        control = true;
        toSkill = toSkill_temp;
        toAction = toAction_temp;
        toStatus = toStatus_temp;
        this.toStatus_switch("stand");
    } // End of the function
    function end_control(action)
    {
        if (_level0.timeOver && status_1 == "stand")
        {
            this.stand();
        } // end if
        if (opp.isKO && status_1 == "stand")
        {
            this.stand();
        }
        else if (this[action] != undefined)
        {
            this[action]();
        }
        else
        {
            status_1 = action;
            this.gotoAndStop(action);
        } // end else if
    } // End of the function
} // End of Class
