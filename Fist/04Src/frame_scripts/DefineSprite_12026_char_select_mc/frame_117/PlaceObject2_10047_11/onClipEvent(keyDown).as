onClipEvent(keyDown){
   if(!Key.isDown(112))
   {
      if(Key.isDown(113))
      {
         _level0.setSound();
      }
      else if(Key.isDown(114))
      {
         _level0.fullScreen();
      }
      else if(Key.isDown(115))
      {
         _level0.exitTo("charToMenu");
      }
   }
}
