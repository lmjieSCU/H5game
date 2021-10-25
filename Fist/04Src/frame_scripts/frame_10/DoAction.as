stop();
var bgm1_snd;
if(!bgm1_snd)
{
   bgm1_snd = new Sound();
   bgm1_snd.attachSound("bgm1_snd");
   bgm1_snd.start(0,1000);
}
movie_mc.endFunc = function()
{
   _root.play();
};
