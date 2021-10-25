class Type2_Chunli_role extends Chunli_role
{
    var roleMode, superList, burstList, superMaxList, skillSuperMapping, skillObj, status_3, catch_check, status_1, gotoAndStop, opp, status_2, holdFreeze, Vjump_far, Vx, Vjump_y, Vy, f, dir, jump_f, jump_b, b, jump_u;
    function Type2_Chunli_role()
    {
        super();
        roleMode = 2;
        superList = {sk_s_qianlie_air: 1, sk_s_bo2: 1};
        burstList = {sk_s_tianxing: 1, sk_s_zuhe: 1};
        superMaxList = {sk_s_qianlie_air_s: 1, sk_s_bo2_s: 1};
        skillSuperMapping = {sk_s_bo2: "sk_s_bo2_s", sk_s_qianlie_air: "sk_s_qianlie_air_s"};
        skillObj.s1 = "sk_s_bo2";
        skillObj.s2 = "sk_s_qianlie_air";
        skillObj.busrt_a = "sk_s_zuhe";
        skillObj.busrt_d = "sk_s_tianxing";
    } // End of the function
    function pitch()
    {
        if (status_3 != "normal")
        {
            return (false);
        } // end if
        if (this.catch_check())
        {
            status_1 = "pitch2";
            this.gotoAndStop(status_1);
            status_3 = "attack";
            opp.status_3 = "hurt";
            return (true);
        } // end if
    } // End of the function
    function sk_huixuan()
    {
        if (status_2 == "air")
        {
            this.sk_chuantui();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk_huixuan";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_huixuan2()
    {
        if (status_2 == "air")
        {
            this.sk_chuantui();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk_huixuan2";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_chuantui()
    {
        status_1 = "sk_chuantui";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_bailietui2()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk_bailietui2";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function jump()
    {
        if (status_1 == "dash_f")
        {
            if (status_2 != "land" || holdFreeze || status_3 != "normal")
            {
                return (false);
            } // end if
            status_2 = "air";
            Vx = Vjump_far;
            Vy = Vjump_y;
            this.gotoAndStop("jump_f");
            status_1 = "jump_f";
        }
        else if (Key.isDown(f))
        {
            if (dir == 1)
            {
                this.jump_f();
            }
            else
            {
                this.jump_b();
            } // end else if
        }
        else if (Key.isDown(b))
        {
            if (dir == -1)
            {
                this.jump_f();
            }
            else
            {
                this.jump_b();
            } // end else if
        }
        else
        {
            this.jump_u();
        } // end else if
    } // End of the function
} // End of Class
