class Type2_Orochi_role extends Orochi_role
{
    var superList, burstList, superMaxList, skillSuperMapping, gotoAndStop, skillObj;
    function Type2_Orochi_role()
    {
        super();
        superList = {sk_s_zhuanpan: 1, sk_s_lunhui: 1};
        burstList = {sk_s_jiguang: 1, sk_s_sanhua: 1};
        superMaxList = {};
        skillSuperMapping = {};
        this.gotoAndStop("begin2");
        skillObj.s1 = "sk_s_zhuanpan";
        skillObj.s2 = "sk_s_lunhui";
        skillObj.busrt_a = "sk_s_jiguang";
        skillObj.busrt_d = "sk_s_sanhua";
    } // End of the function
} // End of Class
