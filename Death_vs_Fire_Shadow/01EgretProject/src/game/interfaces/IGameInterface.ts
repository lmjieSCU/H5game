
     interface IGameInterface
    {

         IGameInterface();

         initTitleUI(param1:egret.DisplayObject) ;

         moreGames() ;

         showRank() ;

         submitScore(param1:number) ;

         saveGame(param1:Object) ;

         loadGame() : Object;

         getGameInput(param1:string) : Array<IGameInput>;

         getGameMenu() : any[];

         getSettingMenu() : any[];

         updateInputConfig() : boolean;

         getConfigExtend() : IExtendConfig;

         afterBuildGame() ;

         applyConfig(param1:ConfigVO) ;

         getCreadits(param1:string) : egret.Bitmap;

    }
