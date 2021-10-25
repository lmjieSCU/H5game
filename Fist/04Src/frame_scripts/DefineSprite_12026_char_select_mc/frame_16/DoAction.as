stop();
if(_level0.lan == "en")
{
   note_txt.text = "1P select:\'W\',\'S\',\'A\',\'D\'  confirm:\'J\'     2P select:\'↑\',\'↓\',\'←\',\'→\'  confirm:\'1\' ";
}
else
{
   note_txt.text = "1P：W,S,A,D 选择   J 确定           2P：↑,↓,←,→ 选择    1 确定";
}
var keyP1 = {u:_level0.key_P1[0].u,d:_level0.key_P1[0].d,b:_level0.key_P1[0].b,f:_level0.key_P1[0].f,p:_level0.key_P1[0].p,k:_level0.key_P1[0].k,p_l:_level0.key_P1[0].p_l,k_l:_level0.key_P1[0].k_l,s:_level0.key_P1[0].s,s2:_level0.key_P1[0].s2};
var keyP2 = {u:_level0.key_P2[0].u,d:_level0.key_P2[0].d,b:_level0.key_P2[0].b,f:_level0.key_P2[0].f,p:_level0.key_P2[0].p,k:_level0.key_P2[0].k,p_l:_level0.key_P2[0].p_l,k_l:_level0.key_P2[0].k_l,s:_level0.key_P2[0].s,s2:_level0.key_P2[0].s2};
select_mc.p1.init(keyP1,"a",face_p1,name_mc1,this,mode_p1,fromTxt_mc1);
if(_level0.player_type == "1PVS2P")
{
   select_mc.p2.init(keyP2,"b",face_p2,name_mc2,this,mode_p2,fromTxt_mc2);
}
else
{
   select_mc.p2.init(null,"b",face_p2,name_mc2,this,mode_p2,fromTxt_mc2);
}
var owner = this;
var selectNum = 0;
select_mc.p1.selectOK_char = function()
{
   owner.selectNum = owner.selectNum + 1;
   if(owner.selectNum == 2)
   {
      owner.gotoAndPlay("mode2");
   }
   if(_level0.player_type == "trainning" || _level0.player_type == "COMVSCOM")
   {
      owner.select_mc.p2.initKey(keyP1);
   }
};
select_mc.p2.selectOK_char = function()
{
   owner.selectNum = owner.selectNum + 1;
   if(owner.selectNum == 2)
   {
      owner.gotoAndPlay("mode2");
   }
};
