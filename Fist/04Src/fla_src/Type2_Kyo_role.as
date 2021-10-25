class Type2_Kyo_role extends Kyo_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, gotoAndStop, skillObj;
    function Type2_Kyo_role()
    {
        super();
        roleMode = 2;
        superList = {sk_s_120: 1, sk31: 1};
        burstList = {sk34: 1, sk35: 1};
        superMaxList = {sk_s_120_s: 1, sk31_s: 1};
        skillSuperMapping = {sk_s_120: "sk_s_120_s", sk31: "sk31_s"};
        this.gotoAndStop("begin2");
        skillObj.s1 = "sk_s_120";
        skillObj.s2 = "sk31";
        skillObj.busrt_a = "sk34";
        skillObj.busrt_d = "sk35";
    } // End of the function
} // End of Class
