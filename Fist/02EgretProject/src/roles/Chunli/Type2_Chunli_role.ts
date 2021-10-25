class Type2_Chunli_role extends Chunli_role
{
    constructor ()
    {
        super();
        this.roleMode = 2;
        this.superList = {sk_s_qianlie_air: 1, sk_s_bo2: 1};
        this.burstList = {sk_s_tianxing: 1, sk_s_zuhe: 1};
        this.superMaxList = {sk_s_qianlie_air_s: 1, sk_s_bo2_s: 1};
        this.skillSuperMapping = {sk_s_bo2: "sk_s_bo2_s", sk_s_qianlie_air: "sk_s_qianlie_air_s"};
        this.skillObj.s1 = "sk_s_bo2";
        this.skillObj.s2 = "sk_s_qianlie_air";
        this.skillObj.busrt_a = "sk_s_zuhe";
        this.skillObj.busrt_d = "sk_s_tianxing";
        this.CommonSeries=["punch_l","kick_l","punch","sk_xuanyuan"];
    } // End of the function
    public pitch()
    {
        if (this.status_3 != "normal")
        {
            return (false);
        } // end if
        if (this.catch_check())
        {
            this.status_1 = "pitch2";
            this.mc.gotoAndStop(this.status_1);
            this.status_3 = "attack";
            this.opp.status_3 = "hurt";
            return (true);
        } // end if
    } // End of the function
    public sk_huixuan()
    {
        if (this.status_2 == "air")
        {
            this.sk_chuantui();
            return;
        } // end if
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_huixuan2()
    {
        if (this.status_2 == "air")
        {
            this.sk_chuantui();
            return;
        } // end if
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_chuantui()
    {
        this.status_1 = "sk_chuantui";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_bailietui2()
    {
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "sk_bailietui2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public jump()
    {
        if (this.status_1 == "dash_f")
        {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
            {
                return (false);
            } // end if
            this.status_2 = "air";
            this.Vx = this.Vjump_far;
            this.Vy = this.Vjump_y;
            this.mc.gotoAndStop("jump_f");
            this.status_1 = "jump_f";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton))
        {
            if (this.dir == 1)
            {
                this.jump_f();
            }
            else
            {
                this.jump_b();
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._backButton))
        {
            if (this.dir == -1)
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
