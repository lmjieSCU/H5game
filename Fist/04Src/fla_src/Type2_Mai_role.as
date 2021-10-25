class Type2_Mai_role extends Mai_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, skillObj, status_2, sk_feishu, status_1, gotoAndStop, status_3;
    function Type2_Mai_role()
    {
        super();
        roleMode = 2;
        superList = {sk_s_fenghuang: 1, sk_s_hualan: 1};
        burstList = {sk_s_heti2: 1, sk_s_fenshen: 1};
        superMaxList = {sk_s_fenghuang_s: 1, sk_s_hualan_s: 1};
        skillSuperMapping = {sk_s_hualan: "sk_s_hualan_s", sk_s_fenghuang: "sk_s_fenghuang_s"};
        skillObj.s1 = "sk_s_fenghuang";
        skillObj.s2 = "sk_s_hualan";
        skillObj.busrt_a = "sk_s_heti2";
        skillObj.busrt_d = "sk_s_fenshen";
        skillObj.toAir = "sk_bailu2";
    } // End of the function
    function sk_luan1()
    {
        if (status_2 == "air")
        {
            this.sk_feishu();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk_luan1";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
} // End of Class
