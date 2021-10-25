class Type2_K_role extends K_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, gotoAndStop, skillObj, comboClass, status_1, sk_dbk2, status_2, status_3, mc;
    function Type2_K_role()
    {
        super();
        roleMode = 2;
        superList = {sk_s1: 1, sk_menghuti: 1};
        burstList = {sk_liandong: 1, sk_xiangdong: 1};
        superMaxList = {sk_s1_s: 1, sk_menghuti_s: 1};
        skillSuperMapping = {sk_s1: "sk_s1_s", sk_menghuti: "sk_menghuti_s"};
        this.gotoAndStop("begin2");
        skillObj.s1 = "sk_s1";
        skillObj.s2 = "sk_menghuti";
        skillObj.busrt_a = "sk_liandong";
        skillObj.busrt_d = "sk_xiangdong";
        skillObj.toAir = "sk_fdfp";
        comboClass.combo1.sk_dfp = {kick: "sk_dfp_s3", kick_l: "sk_sanduan_2", kick_s2: "sk_sanduan_2"};
        comboClass.combo1.sk_sanduan_2 = {kick_l: "sk_sanduan_3", kick: "sk_sanduan_3", kick_s2: "sk_sanduan_3"};
    } // End of the function
    function sk_dbk()
    {
        if (status_1 == "kick_s2")
        {
            this.sk_dbk2();
            return;
        } // end if
        if (status_2 == "air")
        {
            this.sk_dbk2();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_dbk_2";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_s1()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_s1_2";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_s1_s()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_s1_2_s";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_sanduan_2()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_sanduan_2";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_sanduan_3()
    {
        if (mc.played)
        {
            return (false);
        } // end if
        mc.played = true;
        status_3 = "attack";
        status_1 = "sk_sanduan_3";
        mc.gotoAndPlay(status_1);
    } // End of the function
} // End of Class
