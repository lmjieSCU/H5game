class Type2_Moriya_role extends Moriya_role
{
    var superList, burstList, superMaxList, skillSuperMapping, gotoAndStop, winPoseArray, skillObj;
    function Type2_Moriya_role()
    {
        super();
        superList = {sk_feng: 1, sk_xue: 1};
        burstList = {sk_s_q1: 1, sk_s_q2: 1};
        superMaxList = {sk_feng_s: 1, sk_xue_s: 1};
        skillSuperMapping = {sk_feng: "sk_feng_s", sk_xue: "sk_xue_s"};
        this.gotoAndStop("begin2");
        winPoseArray = ["end2"];
        skillObj.s1 = "sk_feng";
        skillObj.s2 = "sk_xue";
        skillObj.busrt_a = "sk_s_q1";
        skillObj.busrt_d = "sk_s_q2";
        skillObj.toAir = "sk_xinyue2";
    } // End of the function
} // End of Class
