class Haohmaru_AI_Lv1 extends Haohmaru_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1, delayTimer, opp, dir, mc;
    function Haohmaru_AI_Lv1()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 0;
        attack_rate0 = 20;
        hold_rate0 = 15;
        attack_s0 = 5;
        wait_frame0 = 30;
        combo_risk = 0;
    } // End of the function
    function skill_init()
    {
        dis_array[0] = 100;
        dis_array[1] = 150;
        dis_array[2] = 250;
        dis_array[3] = 300;
        dis_array[4] = 400;
        dis_array[5] = 1000;
        skill_dis[0] = ["punch_l", "kick_l", "kick", "fdf_pl", "walk_f"];
        skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "f_pl", "fdf_pl", "heavyHit"];
        skill_dis[2] = ["db_k", "bdf_p", "fdf_pl", "df_p", "jump_f"];
        skill_dis[3] = ["walk_f", "dash_f", "df_p", "jump_f"];
        skill_dis[4] = ["dash_f", "df_p", "walk_f"];
        skill_dis[5] = ["dash_f", "df_p", "walk_f"];
        skill2_dis[0] = ["punch", "punch", "kick"];
        skill2_dis[1] = ["squatKick", "kick"];
        skill2_dis[2] = ["fdbf_p", "dfdf_p", "jump_f"];
        skill2_dis[3] = ["jump_f"];
        skill2_dis[4] = ["db_p", "dash_f"];
        skill2_dis[5] = ["db_p", "dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["bdf_p", "rfdf_p", "db_p", "db_k", "fdb_p", "dfdf_p", "fdbf_p"];
        combo_1.punch2 = ["f_pl", "bdf_p", "rfdf_p", "fdb_p", "dfdf_p", "fdbf_p"];
        combo_1.punch_l = ["punch", "kick", "kick_l"];
        combo_1.kick_l = ["punch", "kick"];
        combo_1.f_pl = ["rfdf_pl", "rfdf_p", "bdb_pl", "db_k", "fdb_p", "dfdf_p", "fdbf_p"];
        combo_1.kick = ["bdf_p", "rfdf_p", "bdb_pl", "db_k", "fdb_p", "dfdf_p", "fdbf_p"];
        combo_1.kick2 = ["f_pl", "bdf_p", "rfdf_p", "fdb_p", "dfdf_p", "fdbf_p"];
        combo_1.squatPunch = ["bdf_p", "rfdf_p", "bdb_pl", "db_k", "fdb_p", "dfdf_p"];
        combo_1.squatKick_l = ["punch_l"];
        combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        combo_1.bdf_p = ["rfdf_p", "bdb_pl", "db_k", "fdb_p", "dfdf_p", "fdbf_p"];
        combo_land.jump_f = ["punch", "kick"];
        combo_burst.punch2 = ["f_pl", "bdf_p", "dfdf_p", "fdbf_p", "df_o", "db_o"];
        combo_burst.punch2 = ["bdf_p", "dfdf_p", "fdbf_p", "df_o", "db_o"];
        combo_burst.kick2 = ["bdf_pl", "dfdf_p", "fdbf_p", "df_o", "db_o"];
        combo_burst.squatPunch = combo_burst.punch2;
        combo_burst.bdf_p = ["dfdf_p", "df_o"];
        combo_burst.fdbf_p = ["dfdf_p", "df_o"];
        combo_burst.dbbdf_p = ["dfdf_p", "df_o"];
        combo_oppOnEgde.fdbf_p = [true, true];
        combo_oppOnEgde.dbbdf_p = [true, true];
        combo_1.dash_f = ["squatKick_l", "squatPunch_l", "roll_f", "jump_f"];
        delay_frames.dash_f = [130, 130, 130, 250, 250];
        combo_1.walk_f = ["pitch", "punch_l", "kick", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 150, 180, 250, 400];
        combo_1.walk_b = ["punch_l", "kick", "jump", "jump_f", "bdb_kl"];
        delay_frames.walk_b = [100, 150, 200, 260];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f", "bdb_kl"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        delay_frames.pos_down = [150, 250];
        action_1.pos_up = [["pitch"], ["jump_f"]];
        delay_frames.pos_up = [100, 250];
        action_1.oppJump = [["rfdf_p", "walk_b"], ["db_o", "jump", "bdb_kl"]];
        delay_frames.oppJump = [200, 300];
        action_1.defendAttack = [["rfdf_p", "dfdf_p", "df_o"], ["df_o", "bdb_p"]];
        delay_frames.defendAttack = [100, 300];
        action_1.super = [["dfdf_p"], ["dfdf_p"]];
        delay_frames.super = [200, 300];
        action_1.busrt = [["db_o"], ["df_o"]];
        delay_frames.busrt = [100, 300];
    } // End of the function
    function move_hold()
    {
        clearInterval(delayTimer);
        var opp = opp;
        var _loc5 = dir;
        var owner = this;
        mc.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (owner.inFreeze)
            {
                return;
            } // end if
            if (owner.checkMustDefendSkill(opp.status_1))
            {
                return;
            } // end if
            var _loc1;
            if (opp.hasObj())
            {
                if (opp.getObjNum() > 1)
                {
                    return;
                } // end if
                var _loc3 = opp.getObjDis();
                var _loc2 = opp.getObj();
                if (_loc3 < 170 && _loc3 > 100)
                {
                    _loc1 = Math.random();
                    _level0.out("obj.obj_level111:" + _loc2.obj_level);
                    if (_loc1 < 0.250000 && _loc2._width < 250)
                    {
                        owner.roll_f();
                    }
                    else if (_loc1 < 0.400000 && _loc2.obj_level <= 0)
                    {
                        owner.toSkill("db_k");
                    } // end else if
                }
                else if (_loc3 < 250 && _loc3 > 150)
                {
                    _level0.out("obj.obj_level222:" + _loc2.obj_level);
                    _loc1 = Math.random();
                    if (_loc1 < 0.500000 && _loc2.obj_level <= 0)
                    {
                        owner.toSkill("db_k");
                    } // end if
                } // end else if
                return;
            } // end if
            if ((opp.mc.hitPos == "up" || opp.status_2 == "air") && owner.status_1 != "hold_u")
            {
                if (_level0.level == 5)
                {
                    owner.hold_u();
                    return;
                }
                else
                {
                    _loc1 = int(Math.random() * 100);
                    if (_loc1 < owner.attack_s)
                    {
                        owner.hold_u();
                        return;
                    } // end if
                } // end else if
            }
            else if ((opp.status_1.indexOf("squat") > -1 || opp.mc.hitPos == "down") && owner.status_1 != "hold_d")
            {
                owner.hold_d();
                return;
            } // end else if
            if (opp.status_3 != "attack" && !opp.hasObj() && owner.holdFreeze == false)
            {
                if (owner.status_1 == "hold_d")
                {
                    owner.squat();
                }
                else
                {
                    owner.stand();
                } // end else if
            }
            else if (owner.holdFreeze == false && opp.hit_over())
            {
                if (owner.checkAttack())
                {
                }
                else if (owner.status_1 == "hold_d")
                {
                    owner.squat();
                }
                else
                {
                    owner.stand();
                } // end else if
            } // end else if
        };
    } // End of the function
} // End of Class
