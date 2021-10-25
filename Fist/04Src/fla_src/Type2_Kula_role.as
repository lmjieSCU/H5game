class Type2_Kula_role extends Kula_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, skillObj;
    function Type2_Kula_role()
    {
        super();
        roleMode = 2;
        superList = {sk_s_handong: 1, sk_s_xiangdong: 1, sk_s_luobing: 1};
        burstList = {sk_s_luanren: 1, sk_s_storm: 1};
        superMaxList = {sk_s_handong_s: 1, sk_s_xiangdong_s: 1, sk_s_luobing_s: 1};
        skillSuperMapping = {sk_s_handong: "sk_s_handong_s", sk_s_xiangdong: "sk_s_xiangdong_s", sk_s_luobing: "sk_s_luobing_s"};
        skillObj.s1 = "sk_s_handong";
        skillObj.s2 = "sk_s_xiangdong";
        skillObj.s3 = "sk_s_luobing";
        skillObj.busrt_a = "sk_s_luanren";
        skillObj.busrt_d = "sk_s_storm";
    } // End of the function
} // End of Class
