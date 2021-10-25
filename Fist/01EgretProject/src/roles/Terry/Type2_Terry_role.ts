class Type2_Terry_role extends Terry_role
{
    //var roleMode, superList, burstList, superMaxList, skillSuperMapping, skillObj, status_3, catch_check, status_1, gotoAndStop, opp, jumpSkill, d, f, dir, b, mode_key, toSkill;
    constructor ()
    {
        super();
        this.roleMode = 2;
        this.superList = {dbdf_p: 1, dfdf_k_EX: 1};
        this.burstList = {df_o_EX: 1, db_o_EX: 1};
        this.superMaxList = {dbdf_p_max: 1, dfdf_k_EX_max: 1};
        this.skillSuperMapping = {dbdf_p: "dbdf_p_max", dfdf_k_EX: "dfdf_k_EX_max"};
        this.skillObj.s1 = "dbdf_p";
        this.skillObj.s2 = "dfdf_k_EX";
        this.skillObj.busrt_a = "df_o_EX";
        this.skillObj.busrt_d = "db_o_EX";
        this.skillObj.toAir = "fdf_kh";
    } // End of the function
    public pitch()
    {
        if (this.status_3 != "normal")
        {
            return (false);
        } // end if
        if (this.catch_check())
        {
            this.status_1 = "pitch2";
            this.mc.gotoAndStop("status_1");
            this.status_3 = "attack";
            this.opp.status_3 = "hurt";
            return (true);
        } // end if
    } // End of the function
    public to_punch_l()
    {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
        {
            this.jumpSkill("punch_l");
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton))
        {
            _loc2 = "squatPunch_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton)&& this.dir == 1)
        {
            _loc2 = "f_p_EX";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1)
        {
            _loc2 = "f_p_EX";
        }
        else if (this.mode_key == "easy")
        {
            _loc2 = this.skillObj.s1;
        }
        else
        {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
} // End of Class
