rm ../../01EgretProject_qqgame/project.config.json
rm ../../01EgretProject_qqgame/game.js
# rm ../../01EgretProject_qqgame/platform.js
# rm ../../01EgretProject_qqgame/manifest.js
# rm ../../01EgretProject_qqgame/js/MGOBE.js
# rm ../../01EgretProject_qqgame/js/tween.js
rm ../../01EgretProject_qqgame/game.json
rm ../../01EgretProject_qqgame/library/*
rm -rf ../../01EgretProject_qqgame/subpackages
rm -rf ../../01EgretProject_qqgame/resource/assets/subPackage
# rm -rf ../../01EgretProject_qqgame/js/xiyougamesdk
rm -rf ../../01EgretProject_qqgame/openDataContext/index.js
rm -rf ../../01EgretProject_qqgame/openDataContext/assets/*
cp index.js ../../01EgretProject_qqgame/openDataContext/index.js
cp library/* ../../01EgretProject_qqgame/library/
# cp  js/tween.js ../../01EgretProject_qqgame/js/tween.js

# rm ../../01EgretProject_qqgame/js/socket.js
# rm ../../01EgretProject_qqgame/egret.qqgame.js
# rm ../../01EgretProject_qqgame/weapp-adapter.js
# cp  js/socket.js ../../01EgretProject_qqgame/js/socket.js
# cp js/egret.qqgame.js ../../01EgretProject_qqgame/egret.qqgame.js
# cp js/weapp-adapter.js ../../01EgretProject_qqgame/weapp-adapter.js
# rm ../../01EgretProject_qqgame/js/egret.js
# cp  js/socket.js ../../01EgretProject_qqgame/js/egret.js
# rm ../../01EgretProject_qqgame/js/game.js
# cp  js/socket.js ../../01EgretProject_qqgame/js/game.js

cp project.config.json ../../01EgretProject_qqgame/project.config.json
cp game.js ../../01EgretProject_qqgame/game.js
# cp platform.js ../../01EgretProject_qqgame/platform.js
# cp manifest.js ../../01EgretProject_qqgame/manifest.js
cp game.json ../../01EgretProject_qqgame/game.json
# cp -rf xiyougamesdk ../../01EgretProject_qqgame/js/
cp -rf subPackage ../../01EgretProject_qqgame/resource/assets/
mv ../../01EgretProject_qqgame/resource/assets/subPackage/subpackages ../../01EgretProject_qqgame/
