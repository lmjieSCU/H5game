class Kyo_Combo extends role_corn.Combo_listener
{
   function Kyo_Combo(r)
   {
      super();
      this.role = r;
      this.init();
   }
   function init()
   {
      this.combo1 = new Object();
      this.combo1.sk15 = {punch:"sk16",punch_l:"sk16",sk_hezhai:"sk16"};
      this.combo1.sk16 = {punch:"sk17",punch_l:"sk17"};
      this.combo1.sk19 = {punch_l:"sk20",punch:"sk20",sk19:"sk20",sk_hezhai:"sk21_2"};
      this.combo1.sk20 = {punch_l:"sk21",punch:"sk21",kick_l:"sk14",kick:"sk14"};
      this.combo1.sk21 = {punch_l:"sk13",punch:"sk13"};
      this.combo1.sk21_2 = {punch_l:"sk13",punch:"sk13",sk28:"sk00"};
      this.combo1.sk1 = {kick:"sk1_2",kick_l:"sk1_2"};
      this.combo2 = new Object();
      this.combo2.punch = 9;
      this.combo2.punch2 = 5;
      this.combo2.kick = 10;
      this.combo2.kick1 = 6;
      this.combo2.kick2 = 13;
      this.combo2.squatPunch = 4;
      this.combo2.heavyHit = 11;
      this.combo2.squatKick_s = 3;
      this.combo2.sk0 = 6;
      this.combo2.sk15 = 11;
      this.combo2.sk16 = 13;
      this.combo2.sk19 = 9;
      this.combo2.sk20 = 10;
      this.combo2.sk21 = 10;
      this.combo2.sk21_2 = 14;
      this.combo2.sk28 = 53;
      this.combo2.sk29 = 28;
      this.combo2.sk31 = 115;
      this.combo2.sk1 = 12;
      this.combo2.sk43 = 15;
      this.combo2.sk43_l = 11;
      this.combo2.sk30 = 8;
      this.combo2.sk_s_120 = 105;
      this.skill_over = new Object();
      this.skill_over.punch = 10;
      this.skill_over.punch2 = 6;
      this.skill_over.kick = 10;
      this.skill_over.kick1 = 10;
      this.skill_over.kick2 = 13;
      this.skill_over.squatKick = 10;
      this.skill_over.heavyHit = 15;
      this.skill_over.sk15 = 13;
      this.skill_over.sk16 = 15;
      this.skill_over.sk17 = 13;
      this.skill_over.sk19 = 11;
      this.skill_over.sk20 = 10;
      this.skill_over.sk21 = 16;
      this.skill_over.sk21_2 = 15;
      this.skill_over.sk13 = 17;
      this.skill_over.sk0 = 15;
      this.skill_over.sk28 = 75;
      this.skill_over.sk3 = 124;
      this.skill_over.sk31 = 125;
      this.skill_over.sk31_s = 125;
      this.skill_over.sk29 = 45;
      this.skill_over.sk29_s = 99;
      this.skill_over.sk1 = 17;
      this.skill_over.sk2 = 14;
      this.skill_over.sk28 = 76;
      this.skill_over.sk14 = 9;
      this.skill_over.sk34 = 25;
      this.skill_over.sk43 = 16;
      this.skill_over.sk43_l = 12;
      this.skill_over.sk_s_120 = 50;
      this.beCancled = new Object();
      this.beCancled.punch = 1;
      this.beCancled.punch2 = 1;
      this.beCancled.kick = 1;
      this.beCancled.kick1 = 1;
      this.beCancled.kick2 = 1;
      this.beCancled.punch_l = 1;
      this.beCancled.kick_l = 1;
      this.beCancled.squatPunch = 1;
      this.beCancled.squatPunch_l = 1;
      this.beCancled.squatKick_l = 1;
      this.notTOcancle = new Object();
      this.notTOcancle.punch = 1;
      this.notTOcancle.punch2 = 1;
      this.notTOcancle.kick = 1;
      this.notTOcancle.punch_l = 1;
      this.notTOcancle.kick_l = 1;
      this.notTOcancle.squatPunch = 1;
      this.notTOcancle.squatPunch_l = 1;
      this.notTOcancle.squatKick_l = 1;
      this.notTOcancle.squatKick = 1;
      this.notTOcancle.pitch = 1;
   }
}
