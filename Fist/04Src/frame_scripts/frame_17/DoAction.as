createEmptyMovieClip("char_mc",depth_char);
function loadCharOK()
{
   play();
   delete P1_mcl;
   delete P2_mcl;
   delete loadListener1;
   delete loadListener2;
   trace("loadCharOK222");
}
if(!isLoadRole)
{
   P1_mc = char_mc.attachMovie("role_" + charSelect_P1,"P1_mc",depth_P1);
   P2_mc = char_mc.attachMovie("role_" + charSelect_P2,"P2_mc",depth_P2);
   P1_mc._lockroot = true;
   P2_mc._lockroot = true;
   _level0.out("角色加载：：:" + charSelect_P2 + "   " + mode_role_P2 + "   " + P2_mc);
   return undefined;
}
stop();
var P1_mcl = new MovieClipLoader();
var P2_mcl = new MovieClipLoader();
var loadListener1 = new Object();
var loadListener2 = new Object();
var charLoader = 0;
createEmptyMovieClip("char_mc",depth_char);
P1_mc = char_mc.createEmptyMovieClip("P1_mc",depth_P1);
P2_mc = char_mc.createEmptyMovieClip("P2_mc",depth_P2);
P1_mc._lockroot = true;
P2_mc._lockroot = true;
loadListener1.onLoadInit = function(target_mc)
{
   P2_mcl.loadClip("char/" + charSelect_P2 + ".swf",P2_mc);
   trace("loadCharOK111");
};
loadListener2.onLoadInit = function(target_mc)
{
   loadCharOK();
};
P1_mcl.addListener(loadListener1);
P2_mcl.addListener(loadListener2);
P1_mcl.loadClip("char/" + charSelect_P1 + ".swf",P1_mc);
