class Type2_Orochi_Player extends Type2_Orochi_role
{
    var toSkill, toSkill_temp, toAction, toAction_temp, toStatus, toStatus_temp, noAct, key_array, mode_key, skill_array, skill_mapping, getNextHighestDepth, attachMovie, newKeyControl, u, d, f, b, p, k, p_l, k_l, s, s2;
    function Type2_Orochi_Player()
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
        skill_array.push([d, b, s]);
        skill_mapping.push(["sk_s_sanhua"]);
        skill_array.push([d, f, s]);
        skill_mapping.push(["sk_s_jiguang"]);
        skill_array.push([d, b, f, p]);
        skill_mapping.push(["sk_s_zhuanpan"]);
        skill_array.push([d, f, b, p]);
        skill_mapping.push(["sk_s_lunhui"]);
        skill_array.push([d, f, p_l]);
        skill_mapping.push(["sk_dfp2_l"]);
        skill_array.push([d, f, p]);
        skill_mapping.push(["sk_dfp2"]);
        skill_array.push([d, b, p_l]);
        skill_mapping.push(["sk_dbp2_l"]);
        skill_array.push([d, b, p]);
        skill_mapping.push(["sk_dbp2"]);
        skill_array.push([d, f, k_l]);
        skill_mapping.push(["sk_dbp_l"]);
        skill_array.push([d, f, k]);
        skill_mapping.push(["sk_dbp"]);
    } // End of the function
    function skill_code_easy()
    {
        skill_array.push([d, k_l]);
        skill_mapping.push(["kick_l"]);
        skill_array.push([f, p_l]);
        skill_mapping.push(["sk_dfp2_l"]);
        skill_array.push([f, p]);
        skill_mapping.push(["sk_dfp2"]);
        skill_array.push([b, p_l]);
        skill_mapping.push(["sk_dbp2_l"]);
        skill_array.push([b, p]);
        skill_mapping.push(["sk_dbp2"]);
        skill_array.push([f, k_l]);
        skill_mapping.push(["sk_dbp_l"]);
        skill_array.push([f, k]);
        skill_mapping.push(["sk_dbp"]);
    } // End of the function
} // End of Class
