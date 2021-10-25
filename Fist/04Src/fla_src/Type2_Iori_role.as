class Type2_Iori_role extends Iori_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, gotoAndStop, skillObj, comboClass, status_1, jumpSkill, f, dir, b, d, mode_key, toSkill;
    function Type2_Iori_role()
    {
        super();
        roleMode = 2;
        superList = {sk_s1xiii: 1, sk_8ZW: 1};
        burstList = {sk_s_zhuangqiang: 1, sk_s_qianzai1: 1};
        superMaxList = {sk_s1_sxiii: 1, sk_8ZW_s: 1};
        skillSuperMapping = {sk_s1xiii: "sk_s1_sxiii", sk_8ZW: "sk_8ZW_s"};
        this.gotoAndStop("begin2");
        skillObj.s1 = "sk_s1xiii";
        skillObj.s2 = "sk_8ZW";
        skillObj.busrt_a = "sk_s_zhuangqiang";
        skillObj.busrt_d = "sk_s_qianzai1";
        skillObj.toAir = "sk_YTao";
        comboClass.combo1.squatPunch_l = {};
    } // End of the function
    function to_punch_l()
    {
        var _loc2;
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            this.jumpSkill("punch_l");
            return;
        } // end if
        if (status_1 == "punch_s1")
        {
            if (Key.isDown(f) && dir == 1)
            {
                _loc2 = "punch_s2";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "punch_s2";
            } // end else if
        }
        else if (Key.isDown(d))
        {
            _loc2 = "squatPunch_l";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "punch_s1";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "punch_s1";
        }
        else if ((Key.isDown(b) && dir == 1 || Key.isDown(f) && dir == -1) && (status_1 == "squatPunch_l" || status_1 == "squatKick_l"))
        {
        }
        else if ((Key.isDown(f) && dir == 1 || Key.isDown(b) && dir == -1) && (status_1 == "squatPunch_l" || status_1 == "squatKick_l"))
        {
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
