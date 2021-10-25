class Type2_Terry_role extends Terry_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, skillObj, status_3, catch_check, status_1, gotoAndStop, opp, jumpSkill, d, f, dir, b, mode_key, toSkill;
    function Type2_Terry_role()
    {
        super();
        roleMode = 2;
        superList = {dbdf_p: 1, dfdf_k_EX: 1};
        burstList = {df_o_EX: 1, db_o_EX: 1};
        superMaxList = {dbdf_p_max: 1, dfdf_k_EX_max: 1};
        skillSuperMapping = {dbdf_p: "dbdf_p_max", dfdf_k_EX: "dfdf_k_EX_max"};
        skillObj.s1 = "dbdf_p";
        skillObj.s2 = "dfdf_k_EX";
        skillObj.busrt_a = "df_o_EX";
        skillObj.busrt_d = "db_o_EX";
        skillObj.toAir = "fdf_kh";
    } // End of the function
    function pitch()
    {
        if (status_3 != "normal")
        {
            return (false);
        } // end if
        if (this.catch_check())
        {
            status_1 = "pitch2";
            this.gotoAndStop(status_1);
            status_3 = "attack";
            opp.status_3 = "hurt";
            return (true);
        } // end if
    } // End of the function
    function to_punch_l()
    {
        var _loc2;
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            this.jumpSkill("punch_l");
            return;
        } // end if
        if (Key.isDown(d))
        {
            _loc2 = "squatPunch_l";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "f_p_EX";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "f_p_EX";
        }
        else if (mode_key == "easy")
        {
            _loc2 = skillObj.s1;
        }
        else
        {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
} // End of Class
