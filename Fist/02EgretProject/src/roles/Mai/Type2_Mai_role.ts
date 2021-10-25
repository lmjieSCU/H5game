class Type2_Mai_role extends Mai_role
{
    constructor ()
    {
        super();
        this.roleMode = 2;
        this.superList = {sk_s_fenghuang: 1, sk_s_hualan: 1};
        this.burstList = {sk_s_heti2: 1, sk_s_fenshen: 1};
        this.superMaxList = {sk_s_fenghuang_s: 1, sk_s_hualan_s: 1};
        this.skillSuperMapping = {sk_s_hualan: "sk_s_hualan_s", sk_s_fenghuang: "sk_s_fenghuang_s"};
        this.skillObj.s1 = "sk_s_fenghuang";
        this.skillObj.s2 = "sk_s_hualan";
        this.skillObj.busrt_a = "sk_s_heti2";
        this.skillObj.busrt_d = "sk_s_fenshen";
        this.skillObj.toAir = "sk_bailu2";
    } // End of the function
    public sk_luan1()
    {
        if (this.status_2 == "air")
        {
            this.sk_feishu();
            return;
        } // end if
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "sk_luan1";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
} // End of Class