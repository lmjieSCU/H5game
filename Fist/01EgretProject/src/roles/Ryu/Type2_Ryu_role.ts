class Type2_Ryu_role extends Ryu_role
{
    public constructor()
    {
        super();
        this.superList = {sk10: 1, sk_bd_air: 1, sk_s3: 1};
        this.burstList = {sk_s_q1: 1, sk_s_q2: 1};
        this.skillSuperMapping = {sk10: "sk12", sk_bd_air: "sk_bd_air_s", sk_s3: "sk_s3_s"};
        this.skillObj.s1 = "sk10";
        this.skillObj.s2 = "sk_bd_air";
        this.skillObj.s3 = "sk_s3";
        this.skillObj.busrt_a = "sk_s_q1";
        this.skillObj.busrt_d = "sk_s_q2";
        this.skillObj.toAir = "sk3";
        this.skillObj.heavyHit = "heavyHit";
        this. skillObj.flyingObj = "sk1";
        this.winPoseArray = ["end2"];
    } // End of the function
    public preCheck()
    {
        this.input_pre.kick1 = 9;
    } // End of the function
    public sk1()
    {
        if (this.status_2 == "air")
        {
            this.sk_bodong_air2other();
            return;
        }
        else if (this.status_2 != "land")
        {
            return (false);
        } // end else if
        this.status_1 = "sk1";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    } // End of the function
    public sk1_l()
    {
        if (this.status_2 == "air")
        {
            this.sk_bodong_air2other();
            return;
        }
        else if (this.status_2 != "land")
        {
            return (false);
        } // end else if
        this.status_1 = "sk1_l";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    } // End of the function
    public sk_bodong_airother()
    {
        if (this.status_2 == "air")
        {
            this.sk_bodong_air2other();
            return;
        }
        else if (this.status_2 != "land")
        {
            return (false);
        } // end else if
        this.status_1 = "sk_bodong_airother";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    } // End of the function
    public sk_bodong_air2other()
    {
        this.status_1 = "sk_bodong_air2other";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    } // End of the function
    public sk_xf2()
    {
        if (this.status_1 == "jump_b")
        {
            this.sk4_2();
            return;
        }
        else if (this.status_2 == "air")
        {
            this.sk4_1();
            return;
        }
        else if (this.status_2 != "land")
        {
            return (false);
        } // end else if
        this.status_1 = "sk_xf2";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    } // End of the function
    public sk4_1()
    {
        this.status_1 = "sk4_1";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    } // End of the function
    public sk4_2()
    {
        this.status_1 = "sk4_2";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    } // End of the function
    public sk_BGX_s2()
    {
        if (this.played)
        {
            return (false);
        } // end if
        this.played = true;
        this.status_3 = "attack";
        //this.mc.gotoAndPlay("s2");
        this.mc.gotoAndStop("s2");
    } // End of the function
    public sk_BGX_s3()
    {
        if (this.played)
        {
            return (false);
        } // end if
        this.played = true;
        this.status_3 = "attack";
        //this.mc.gotoAndPlay("s3");
        this.mc.gotoAndStop("s3");
    } // End of the function
} // End of Class