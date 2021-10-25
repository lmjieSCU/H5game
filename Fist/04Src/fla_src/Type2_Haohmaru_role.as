class Type2_Haohmaru_role extends Haohmaru_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, skillObj, status_3, catch_check, status_1, gotoAndStop, opp, jumpSkill, d, f, dir, b, toSkill, mode_key;
    function Type2_Haohmaru_role()
    {
        super();
        roleMode = 2;
        superList = {fdbf_p_EX: 1, dfdf_k_EX: 1};
        burstList = {df_o_EX: 1, db_o_EX: 1};
        superMaxList = {fdbf_p_EXmax: 1, dfdf_k_EX_max: 1};
        skillSuperMapping = {fdbf_p_EX: "fdbf_p_EXmax", dfdf_k_EX: "dfdf_k_EX_max"};
        skillObj.s1 = "fdbf_p_EX";
        skillObj.s2 = "dfdf_k_EX";
        skillObj.busrt_a = "db_o_EX";
        skillObj.busrt_d = "df_o_EX";
        skillObj.toAir = "fdf_kl";
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
    function to_punch()
    {
        var _loc2;
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            this.jumpSkill("punch");
            return;
        } // end if
        if (Key.isDown(d))
        {
            if (Key.isDown(f) && dir == 1)
            {
                _loc2 = "df_pEX";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "df_pEX";
            }
            else
            {
                _loc2 = "squatPunch";
            } // end else if
        }
        else if (status_1 == "dash_f")
        {
            _loc2 = "dash_p";
        }
        else if (Key.isDown(f) && dir == 1 || Key.isDown(b) && dir == -1)
        {
            if (this.pitch())
            {
                return;
            }
            else
            {
                _loc2 = "punch3";
            } // end else if
        }
        else
        {
            _loc2 = "punch3";
        } // end else if
        this.toSkill(_loc2);
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
        else if (status_1 == "dash_f")
        {
            _loc2 = "dash_pl";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "f_pl_EX";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "f_pl_EX";
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
