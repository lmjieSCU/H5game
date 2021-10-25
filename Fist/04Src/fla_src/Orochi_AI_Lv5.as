class Orochi_AI_Lv5 extends Orochi_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1, actionType, cpu_attack, cpu_control2, delayTimer, opp, dir, mc;
    function Orochi_AI_Lv5()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 100;
        attack_rate0 = 100;
        hold_rate0 = 100;
        attack_s0 = 70;
        wait_frame0 = 0;
        combo_risk = 20;
    } // End of the function
    function skill_init()
    {
        dis_array[0] = 100;
        dis_array[1] = 150;
        dis_array[2] = 200;
        dis_array[3] = 300;
        dis_array[4] = 1000;
        skill_dis[0] = ["punch_l", "kick_l", "kick"];
        skill_dis[1] = ["punch", "kick_l", "kick", "squatPunch", "heavyHit"];
        skill_dis[2] = ["kick", "sk_dfp", "sk_dfk_l", "sk_dbp"];
        skill_dis[3] = ["sk_dfp", "sk_dfk_l", "dash_f", "walk_f", "jump_f"];
        skill_dis[4] = ["sk_dfp", "sk_dfk", "walk_f", "dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang"];
        combo_1.kick_l = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang"];
        combo_1.kick = ["sk_dfp", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang"];
        combo_1.sk_dfp = ["sk_s_guangzhu", "sk_s_yangguang"];
        combo_land.jump_f = ["kick"];
        combo_burst.punch = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin", "sk_s_qianshou1", "sk_s_qianshou1", "sk_s_qianshou1"];
        combo_burst.kick_l = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin", "sk_s_qianshou1", "sk_s_qianshou1", "sk_s_qianshou1"];
        combo_burst.kick = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dfp = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dbp_l = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dbp = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dfk = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dfk_l = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_s_guangzhu = ["sk_s_yangguang", "sk_s_taoxin"];
        combo_1.dash_f = ["punch", "kick", "roll_f", "jump_f"];
        delay_frames.dash_f = [120, 150, 120, 200];
        combo_1.walk_f = ["pitch", "punch", "kick", "jump_f"];
        delay_frames.walk_f = [100, 150, 180, 230];
        combo_1.walk_b = ["punch", "kick", "jump", "jump_f"];
        delay_frames.walk_b = [100, 150, 200, 260];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l"], ["kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk_dbp_l", "kick"], ["sk_dbp"]];
        delay_frames.oppJump = [150, 300];
        action_1.wander = [["walk_f", "dash_f", "roll_b"], ["dash_f", "wait"]];
        delay_frames.wander = [300, 1000];
        action_1.defend = [["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [200, 400, 1000];
        action_1.defendAttack = [["sk_dbp", "sk_s_qianshou1"], ["sk_s_yangguang", "sk_s_taoxin"]];
        delay_frames.defendAttack = [150, 600];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["jump_f", "attack", "attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatPunch", "pitch"], ["squatPunch"]];
        delay_frames.pos_down = [150, 200];
        action_1.pos_up = [["pitch", "kick_l"], ["jump_f", "kick_l"]];
        delay_frames.pos_up = [100, 250];
        action_1.super = [["sk_s_guangzhu", "sk_s_yangguang"]];
        delay_frames.super = [600];
        (action_1.busrt = [["sk_s_qianshou1", "sk_s_taoxin"]]);
        [["sk_s_taoxin"]];
        delay_frames.busrt = [150, 600];
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
                        owner.toSkill("sk_dbp");
                    } // end else if
                }
                else if (_loc3 < 250 && _loc3 > 150)
                {
                    _level0.out("obj.obj_level222:" + _loc2.obj_level);
                    _loc1 = Math.random();
                    if (_loc1 < 0.500000 && _loc2.obj_level <= 0)
                    {
                        owner.toSkill("sk_dbp");
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
