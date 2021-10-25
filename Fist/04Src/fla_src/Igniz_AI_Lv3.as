class Igniz_AI_Lv3 extends Igniz_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1, actionType, cpu_attack, cpu_control2, delayTimer, opp, dir, mc;
    function Igniz_AI_Lv3()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 50;
        attack_rate0 = 70;
        hold_rate0 = 70;
        attack_s0 = 30;
        wait_frame0 = 20;
        combo_risk = 50;
    } // End of the function
    function skill_init()
    {
        dis_array[0] = 100;
        dis_array[1] = 150;
        dis_array[2] = 250;
        dis_array[3] = 300;
        dis_array[4] = 400;
        dis_array[5] = 1000;
        skill_dis[0] = ["punch_l", "squatPunch_l", "punch", "kick", "db_k", "db_p"];
        skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "df_pl", "db_k", "db_p"];
        skill_dis[2] = ["db_k", "db_k", "df_ph", "db_p"];
        skill_dis[3] = ["walk_f", "dash_f", "db_p", "db_pl"];
        skill_dis[4] = ["dash_f", "db_pl", "walk_f"];
        skill_dis[5] = ["dash_f", "db_pl"];
        skill2_dis[0] = ["punch_l", "squatPunch_l", "punch"];
        skill2_dis[1] = ["db_p", "squatKick", "kick", "db_p"];
        skill2_dis[2] = ["dfdf_p", "fdf_ph", "fdf_pl"];
        skill2_dis[3] = ["dfdf_k", "db_k", "df_pl", "df_ph"];
        skill2_dis[4] = ["db_pl", "walk_f", "dash_f"];
        skill2_dis[5] = ["db_pl", "dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["df_pl", "df_ph", "db_k", "fdf_p", "dfdf_p", "dfdb_k", "dfdb_p"];
        combo_burst.punch2 = combo_1.punch;
        combo_1.punch_l = ["punch_l", "punch_l", "kick_l"];
        combo_1.kick_l = ["kick_l"];
        combo_1.kick = combo_1.punch;
        combo_1.squatPunch = combo_1.punch;
        combo_1.squatKick_l = ["squatPunch_l"];
        combo_1.squatPunch_l = ["punch_l", "squatPunch_l", "squatPunch_l"];
        combo_1.df_ph = ["df_pl", "db_k", "fdf_p"];
        combo_land.jump_f = ["punch", "kick"];
        combo_burst.punch2 = ["df_pl", "df_ph", "fdf_p", "db_o"];
        combo_burst.kick = combo_burst.punch2;
        combo_burst.squatPunch = combo_burst.punch2;
        combo_burst.df_pl = ["df_ph", "db_o"];
        combo_burst.df_ph = ["dfdf_k", "dfdb_p", "df_o"];
        combo_burst.dfdf_p = ["dfdf_k", "dfdb_p", "df_o"];
        combo_burst.dfdf_k = ["dfdf_p", "df_o"];
        combo_oppOnEgde.dfdf_k = [true, true];
        combo_1.dash_f = ["squatKick_l", "squatPunch_l", "roll_f"];
        delay_frames.dash_f = [130, 130, 130, 250, 250];
        combo_1.walk_f = ["pitch", "punch_l", "kick", "dash_f"];
        delay_frames.walk_f = [100, 150, 180, 250, 400];
        combo_1.walk_b = ["punch_l", "kick"];
        delay_frames.walk_b = [100, 150, 200, 260];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b", "dfdb_p"], ["db_o", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l", "db_k"], ["squatKick_l", "kick_l", "db_k"]];
        delay_frames.oppRoll = [150, 300];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defend_f = [["roll_f", "hold_u"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        delay_frames.pos_down = [150, 250];
        action_1.pos_up = [["pitch"], ["jump_f"]];
        delay_frames.pos_up = [100, 250];
        action_1.oppJump = [["fdf_p", "walk_b", "dfdb_p"], ["dfdb_p", "db_o", "jump"]];
        delay_frames.oppJump = [200, 300];
        action_1.defendAttack = [["fdf_p", "db_k", "db_o"], ["df_o", "dfdf_k"]];
        delay_frames.defendAttack = [200, 400];
        action_1.super = [["dfdf_k", "dfdb_p"], ["dfdb_p", "dfdf_k"]];
        delay_frames.super = [300, 450];
        action_1.busrt = [["df_o", "db_o"], ["db_o"]];
        delay_frames.busrt = [300, 1000];
    } // End of the function
    function checkStrage()
    {
        actionType = "attack";
        cpu_control2 = cpu_attack;
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
            var _loc2;
            if (opp.hasObj())
            {
                if (opp.getObjNum() > 1)
                {
                    return;
                } // end if
                var _loc3 = opp.getObjDis();
                var _loc1 = opp.getObj();
                if (_loc1._width > 300)
                {
                    return;
                } // end if
                if (_loc3 < 170 && _loc3 > 100)
                {
                    _loc2 = Math.random();
                    if (_loc2 < 0.250000)
                    {
                        owner.roll_f();
                    }
                    else if (_loc2 < 0.400000 && _loc1.obj_level <= 0 && _loc1.obj_level < 2)
                    {
                        owner.toSkill("db_k");
                    } // end else if
                }
                else if (_loc3 < 250 && _loc3 > 150)
                {
                    _level0.out("obj.obj_level222:" + _loc1.obj_level);
                    _loc2 = Math.random();
                    if (_loc2 < 0.500000 && _loc1.obj_level <= 0 && _loc1.obj_level < 2)
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
                    _loc2 = int(Math.random() * 100);
                    if (_loc2 < owner.attack_s)
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
