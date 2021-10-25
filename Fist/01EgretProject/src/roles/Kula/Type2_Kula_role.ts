class Type2_Kula_role extends Kula_role
{
    constructor()
    {
        super();
        this.roleMode = 2;
        this.superList = {sk_s_handong: 1, sk_s_xiangdong: 1, sk_s_luobing: 1};
        this.burstList = {sk_s_luanren: 1, sk_s_storm: 1};
        this.superMaxList = {sk_s_handong_s: 1, sk_s_xiangdong_s: 1, sk_s_luobing_s: 1};
        this.skillSuperMapping = {sk_s_handong: "sk_s_handong_s", sk_s_xiangdong: "sk_s_xiangdong_s", sk_s_luobing: "sk_s_luobing_s"};
        this.skillObj.s1 = "sk_s_handong";
        this.skillObj.s2 = "sk_s_xiangdong";
        this.skillObj.s3 = "sk_s_luobing";
        this.skillObj.busrt_a = "sk_s_luanren";
        this.skillObj.busrt_d = "sk_s_storm";
    } // End of the function
} // End of Class