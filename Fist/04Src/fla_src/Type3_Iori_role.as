class Type3_Iori_role extends Iori_role
{
    var roleMode, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, superMaxList, skillSuperMapping, gotoAndStop, winPoseArray, skillObj, comboClass, status_1, jumpSkill, d, f, dir, b, pitch, toSkill;
    function Type3_Iori_role()
    {
        super();
        roleMode = 3;
        Vwalk = 20;
        Vdash = 35;
        Vjump_x = 18;
        Vjump_y = 28;
        Vjump_far = 23;
        opp_width2 = 60;
        superList = {sk_s1: 1, sk_s2: 1};
        burstList = {sk_s_qianzai1: 1, sk_s_qianzai2: 1};
        superMaxList = {sk_s1_s: 1, sk_s2_s: 1};
        skillSuperMapping = {sk_s1: "sk_s1_s", sk_s2: "sk_s2_s"};
        this.gotoAndStop("begin3");
        winPoseArray = ["end3"];
        skillObj.s1 = "sk_s1";
        skillObj.s2 = "sk_s2";
        skillObj.busrt_a = "sk_s_qianzai1";
        skillObj.busrt_d = "sk_s_qianzai2";
        comboClass.combo2.sk_s1 = 146;
        comboClass.combo2.sk_s2 = 60;
        comboClass.skill_over.sk_s1 = 158;
        comboClass.skill_over.sk_s1_s = 185;
        comboClass.skill_over.sk_s2 = 15;
        comboClass.skill_over.sk_s2_s = 15;
        comboClass.skill_over.sk_s_qianzai1 = 128;
        comboClass.skill_over.sk_s_qianzai2 = 54;
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
            _loc2 = "squatPunch";
        }
        else if (status_1 == "dash_f")
        {
            _loc2 = "punch";
        }
        else if (Key.isDown(f) && dir == 1 || Key.isDown(b) && dir == -1)
        {
            if (this.pitch())
            {
                return;
            }
            else
            {
                _loc2 = "punch";
            } // end else if
        }
        else
        {
            _loc2 = "punch";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
} // End of Class
