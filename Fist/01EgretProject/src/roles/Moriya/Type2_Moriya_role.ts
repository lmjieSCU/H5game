class Type2_Moriya_role extends Moriya_role
{
    constructor()
    {
        super();
        this.superList = {sk_feng: 1, sk_xue: 1};
        this.burstList = {sk_s_q1: 1, sk_s_q2: 1};
        this.superMaxList = {sk_feng_s: 1, sk_xue_s: 1};
        this.skillSuperMapping = {sk_feng: "sk_feng_s", sk_xue: "sk_xue_s"};
        this.winPoseArray = ["end2"];
        this.skillObj.s1 = "sk_feng";
        this.skillObj.s2 = "sk_xue";
        this.skillObj.busrt_a = "sk_s_q1";
        this.skillObj.busrt_d = "sk_s_q2";
        this.skillObj.toAir = "sk_xinyue2";
    } // End of the function
} // End of Class