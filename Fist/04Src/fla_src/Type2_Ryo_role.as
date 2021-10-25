class Type2_Ryo_role extends Ryo_role
{
    var superList, burstList, skillSuperMapping, skillObj, gotoAndStop, winPoseArray, input_pre, status_2, status_1, status_3, mc;
    function Type2_Ryo_role()
    {
        super();
        superList = {sk10: 1, sk_bd_air: 1, sk_s3: 1};
        burstList = {sk_s_q1: 1, sk_s_q2: 1};
        skillSuperMapping = {sk10: "sk12", sk_bd_air: "sk_bd_air_s", sk_s3: "sk_s3_s"};
        skillObj.s1 = "sk10";
        skillObj.s2 = "sk_bd_air";
        skillObj.s3 = "sk_s3";
        skillObj.busrt_a = "sk_s_q1";
        skillObj.busrt_d = "sk_s_q2";
        skillObj.toAir = "sk3";
        skillObj.heavyHit = "heavyHit";
        skillObj.flyingObj = "sk1";
        this.gotoAndStop("begin2");
        winPoseArray = ["end2"];
    } // End of the function
    function preCheck()
    {
        input_pre.kick1 = 9;
    } // End of the function
    function sk1()
    {
        if (status_2 == "air")
        {
            this.sk_bodong_air2other();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "sk1";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk1_l()
    {
        if (status_2 == "air")
        {
            this.sk_bodong_air2other();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "sk1_l";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_bodong_airother()
    {
        if (status_2 == "air")
        {
            this.sk_bodong_air2other();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "sk_bodong_airother";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_bodong_air2other()
    {
        status_1 = "sk_bodong_air2other";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_xf2()
    {
        if (status_1 == "jump_b")
        {
            this.sk4_2();
            return;
        }
        else if (status_2 == "air")
        {
            this.sk4_1();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "sk_xf2";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk4_1()
    {
        status_1 = "sk4_1";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk4_2()
    {
        status_1 = "sk4_2";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_BGX_s2()
    {
        if (mc.played)
        {
            return (false);
        } // end if
        mc.played = true;
        status_3 = "attack";
        mc.gotoAndPlay("s2");
    } // End of the function
    function sk_BGX_s3()
    {
        if (mc.played)
        {
            return (false);
        } // end if
        mc.played = true;
        status_3 = "attack";
        mc.gotoAndPlay("s3");
    } // End of the function
} // End of Class
