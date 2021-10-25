
    /*
    *地图类型为zmoive.zmoiveClip,共包括9个图层，分别为
    *bg层,即背景图(天空等),显示
    *map层,即战斗地图,显示
    *line_bottom层,用于定位游戏屏幕底端位置,不显示
    *line_player_bottom层,用于定位玩家底端位置,不显示
    *line_left层,用于定位游戏屏幕左端位置,不显示
    *line_right层,用于定位游戏屏幕右端位置,不显示
    *floor层,用于定位可站立位置,不显示
    *p1层,用于定位p1位置,不显示
    *p2层,用于定位p2位置,不显示
    *front层
    *front_fix层:遮挡层
    */


    class MapMain 
    {
        public mapLayer:zmovie.ZMovieClip;    //map层 
        public frontLayer:zmovie.ZMovieClip;    
        public frontFixLayer:zmovie.ZMovieClip;
        public bgLayer:egret.Bitmap;        //bg层    
        public p1pos:egret.Point;           //p1层
        public p2pos:egret.Point;           //p2层
        public left:number = 0;             //line_left层             
        public right:number = 0;            //line_right层
        public bottom:number = 0;           //line_bottom层
        public playerBottom:number = 0;     //line_player_bottom层  
        public mapMc:zmovie.ZMovieClip;         
        public data:MapVO;
        public gameState:GameState;
        private _defaultFrontPos:egret.Point;
        private _floors:Array<FloorVO>=[];      //floor层



        constructor (param1:zmovie.ZMovieClip)
        {
            this.mapMc = param1;
            return;
        }// end function

        public destory() 
        {
            if (this.mapMc)
            {
                try
                {
                    this.mapMc.stop();
                   this. mapMc.removeChildren();
                }
                catch (e)
                {
                    //this.trace(e);
                }
                this.mapMc = null;
            }
            if (this.mapLayer)
            {
                this.mapLayer = null;
            }
            if (this.frontLayer)
            {
                this.frontLayer = null;
            }
            if (this.frontFixLayer)
            {
                this.frontFixLayer = null;
            }
            if (this.bgLayer)
            {
                // this.bgLayer.$bitmapData.$dispose();
                this.bgLayer = null;
            }
            return;
        }// end function

        public setVisible(param1:boolean) 
        {
            if (this.mapLayer)
            {
                this.mapLayer.visible = param1;
            }
            if (this.frontLayer)
            {
                this.frontLayer.visible = param1;
            }
            if (this.frontFixLayer)
            {
                this.frontFixLayer.visible = param1;
            }
            if (this.bgLayer)
            {
                this.bgLayer.visible = param1;
            }
            return;
        }// end function

        /*
        * 初始化map位置以及数据
        */
        public initlize()      
        {
            let line_left = this.mapMc.getChildByName("line_left");
            let line_right = this.mapMc.getChildByName("line_right");
            let line_bottom = this.mapMc.getChildByName("line_bottom");
            let line_player_bottom = this.mapMc.getChildByName("line_player_bottom");  
            if (line_left)
            {
                this.left = line_left.x;
            }
            if (line_right)
            {
                 this.right = line_right.x;
            }
            if (line_bottom)
            {
                 this.bottom = line_bottom.y;
            }
            if (line_player_bottom)
            {
                 this.playerBottom = line_player_bottom.y;
            }
            let p1 =  this.mapMc.getChildByName("p1"); 
            let p2 =  this.mapMc.getChildByName("p2");  
            if (p1)
            {
                 this.p1pos = new egret.Point(p1.x, p1.y);
            }
            if (p2)
            {
                this.p2pos = new egret.Point(p2.x, p2.y);
            }
            this.mapLayer = this.mapMc.getChildMovie("map");
            this.frontLayer = this.mapMc.getChildMovie("front");
            this.frontFixLayer = this.mapMc.getChildMovie("front_fix");
            // this.bgLayer = this.drawBitmap("bg", false, 0);
            this.bgLayer = new  egret.Bitmap;
			this.bgLayer.texture = RES.getRes("map_"+ GameLoader_lmj._mapName+"_sky_jpg");
            this.bgLayer.scaleX = GameConfig.GAME_SIZE.x/this.bgLayer.width;
            if (this.bgLayer)
            {
                this.normalizeLayer(this.bgLayer);
            }
            let _loc_1 = GameConfig.GAME_SIZE;
            //-----------------------------通过_loc_3修正各图层的y,使得bottom_line位于屏幕底部向上30个像素,并修改各图层位置
            let _loc_3 = _loc_1.y - this.bottom - 30;
            if (this.mapLayer)
            {
                this.normalizeLayer(this.mapLayer);
                this.mapLayer.y = this.mapLayer.y + _loc_3;
            }
            if (this.frontLayer)
            {
                this.normalizeLayer(this.frontLayer);
                this.frontLayer.y = this.frontLayer.y + _loc_3;
                this._defaultFrontPos = new egret.Point(this.frontLayer.x, this.frontLayer.y);
            }
            if (this.frontFixLayer)
            {
                this.normalizeLayer(this.frontFixLayer);
                this.frontFixLayer.y = this.frontFixLayer.y + _loc_3;
            }

            this.playerBottom = this.playerBottom + _loc_3;
            this.bottom = this.bottom + _loc_3;
            if (this.p1pos)
            {
                this.p1pos.y = this.p1pos.y + _loc_3;
            }
            if (this.p2pos)
            {
                this.p2pos.y = this.p2pos.y + _loc_3;
            }
            this.initFloor(_loc_3);
            // this.setVisible(false);
            //-------------------------------------------create by lmj for testing 
            this.setVisible(true);
            return;
        }// end function


        private drawBitmap(param1:string, param2:boolean = true, param3:number = 0) : egret.Bitmap
        {
            let _loc_4 = null;
            let _loc_5 = this.mapMc.getChildByName(param1);
            if (_loc_5)         //exit param1
            {
                _loc_4 = KyoUtils.drawDisplay(_loc_5, true, param2, param3);
                return _loc_4;
            }
            return null;
        }// end function


        private  normalizeLayer(param1:egret.DisplayObject) 
        {
            let _loc_3 = null;
            let _loc_5 = 0;
            let _loc_2 = null;
            let _loc_4 = null;
            if (param1 instanceof egret.Bitmap)
            {
                //(param1 as Bitmap).smoothing = GameData.I.config.quality == "best";
            }
            /*
            if (param1 is Sprite)
            {
                _loc_3 = param1 as Sprite;
                while (_loc_5 < _loc_3.numChildren)
                {
                    
                    _loc_2 = _loc_3.getChildAt(_loc_5);
                    if (_loc_2 is Bitmap)
                    {
                        (_loc_2 as Bitmap).smoothing = GameData.I.config.quality == "best";
                    }
                    _loc_5++;
                }
                if (GameConfig.MAP_LOGO_STATE != 1)
                {
                    _loc_4 = _loc_3.getChildByName("logo4399");
                    if (_loc_4)
                    {
                        _loc_4.visible = false;
                    }
                }
            }
            */
            return;
        }// end function


        public getStageSize() : egret.Point
        {
            return new egret.Point(this.mapLayer.width, GameConfig.GAME_SIZE.y);
        }// end function


        public getMapBottomDistance() : number
        {
            return this.bottom - this.playerBottom;
        }// end function

        /*
        *初始化floor碰撞点数据FloorVO
        */
        private initFloor(param1:number)    
        {
            let _loc_5 :number = 0;
            let _loc_2 = null;
            let _loc_4 :FloorVO= null;
            this._floors = [];
            let floor_movie :zmovie.ZMovieClip= this.mapMc.getChildMovie("floor");
            if (!floor_movie)
            {
                return;
            }
            while (_loc_5 < floor_movie.numChildren)
            {
                
                _loc_2 = floor_movie.getChildAt(_loc_5);
                if (_loc_2)
                {
                    _loc_4 = new FloorVO();
                    _loc_4.xFrom = floor_movie.x + _loc_2.x;             //左端
                    _loc_4.xTo = floor_movie.x + _loc_2.x + _loc_2.width*_loc_2.scaleX;    //右端
                    _loc_4.y = floor_movie.y + _loc_2.y + param1;
                    this._floors.push(_loc_4);
                }
                _loc_5++;
            }
            return;
        }// end function


        /*
        *判断人物是否与Floor碰撞,若是则返回对应Floor,否则返回null
        */
        public getFloorHitTest(param1:number, param2:number, param3:number) : FloorVO
        {
            let _loc_5:number = 0;
            let _loc_4 :FloorVO= null;
            while (_loc_5 < this._floors.length)
            {
                
                _loc_4 = this._floors[_loc_5];
                if (_loc_4.hitTest(param1, param2, param3))
                {
                    return _loc_4;
                }
                _loc_5++;
            }
            return null;
        }// end function



        public render(param1:number, param2:number, param3:number) 
        {
            let _loc_5 = NaN;
            let _loc_4 = NaN;
            let _loc_6 = NaN;
            if (this.frontLayer)
            {
                _loc_5 = param1;
                _loc_4 = param2 + this.bottom;
                this.frontLayer.x = _loc_5 * 0.1 + this._defaultFrontPos.x;
                _loc_6 = _loc_4 * 0.1 + this._defaultFrontPos.y;
                _loc_6 = this._defaultFrontPos.y;
                this.frontLayer.y = _loc_6;
                this.renderOptical(this.frontLayer);
            }
            if (this.frontFixLayer)
            {
                this.renderOptical(this.frontFixLayer);
            }
            return;
        }// end function

        private renderOptical(param1:zmovie.ZMovieClip) 
        {
            let _loc_3 = null;
            let _loc_2 = null;
            let _loc_6 = 0;
            if (!this.gameState)
            {
                return;
            }
            let _loc_5 = param1.numChildren;
            if (param1.numChildren < 1)
            {
                return;
            }
            let _loc_4 = this.gameState.getGameSprites();
            if (!this.gameState.getGameSprites() || _loc_4.length < 1)
            {
                return;
            }
            while (_loc_6 < _loc_5)
            {
                
                _loc_2 = param1.getChildAt(_loc_6);
                if (_loc_2 instanceof zmovie.ZMovieClip)
                {
                    // _loc_3 = _loc_2.getBounds(param1);
                    _loc_3 = _loc_2.getTransformedBounds(param1);
                    _loc_3.x = _loc_3.x + param1.x;
                    _loc_3.y = _loc_3.y + param1.y;
                    _loc_2.alpha = this.checkHitGameSprite(_loc_3, _loc_4) ? (0.5) : (1);
                }
                _loc_6++;
            }
            return;
        }// end function

        private checkHitGameSprite(param1:egret.Rectangle, param2:any[]) : boolean
        {
            let _loc_4 = 0;
            let _loc_6 = null;
            let _loc_5 = false;
            let _loc_3 = null;
            while (_loc_4 < param2.length)
            {
                
                _loc_6 = param2[_loc_4];
                if (_loc_6)
                {
                    _loc_3 = _loc_6.getArea();
                    if (_loc_3)
                    {
                        _loc_5 = param1.intersects(_loc_3);
                        if (_loc_5)
                        {
                            return true;
                        }
                    }
                }
                _loc_4++;
            }
            return false;
        }// end function

    }
