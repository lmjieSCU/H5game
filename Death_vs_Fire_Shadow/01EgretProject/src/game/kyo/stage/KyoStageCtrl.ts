class KyoStageCtrl extends egret.EventDispatcher 
{
    private  _mainStage:egret.Sprite;
    private  _curStage:Istage;
    public changeStateMouseGap:number = 0;
    private _layers:Array<any>;

    public constructor(param1:egret.Sprite)
    {
        super()
        this._layers = [];
        this._mainStage = param1;
        return;
    }// end function

    public get currentStage() : Istage
    {
        return this._curStage;
    }// end function

    public goStage(param1:Istage, param2:boolean = false, param3:boolean = false) : boolean
    {
        var detoryComplete:Function;
        var classname:String;
        var classname2:String;
        var stg = param1;
        var sameChange = param2;
        var buildAfterDestory = param3;
        detoryComplete = function () : void
        {
            try
            {
               this._mainStage.removeChild(this._curStage.display);
            }
            catch (e)
            {
                //trace("KyoStageCtrl: goStage:", e);
            }
            this._curStage = null;
            return;
        }// end function
        ;
        var newStage = function() : void
        {
            // if (this.changeStateMouseGap > 0)
            // {
            //     this.stageMouseChildren(false);
            //     setTimeout(function () : void
            // {
            //     this.stageMouseChildren(true)
            //     return;
            // }// end function
            // , this.changeStateMouseGap);
            // }
            this._curStage = stg;
            this._curStage.build();
            this._mainStage.addChild(this._curStage.display);
            this._curStage.afterBuild();
            return;
        }// end function
        ;
        if (!sameChange)
        {
            classname = egret.getQualifiedClassName(stg);
            classname2 = egret.getQualifiedClassName(this._curStage);
            if (classname == classname2)
            {
                return false;
            }
        }
        if (this._curStage)
        {
            if (buildAfterDestory)
            {
                this._curStage.destory(detoryComplete);
            }
            else
            {
                this._curStage.destory(null);
                detoryComplete();
            }
        }
        else
        {
            newStage();
        }
        //dispatchEvent(new KyoStageEvent(KyoStageEvent.CHANGE_STATE, stg));
        return true;
    }// end function

    public addLayer(param1:Istage, param2:number = 0, param3:number = 0, param4:boolean = false, param5:IStageFadEffect = null) : void
    {
        if (param4)
        {
            this.removeAllLayer();
        }
        param1.build();
        var _loc_6 = this._mainStage.stage.stageWidth;
        var _loc_7 = this._mainStage.stage.stageHeight;
        var _loc_8 = param1.display().width * this._mainStage.scaleX;
        var _loc_9 = param1.display().height * this._mainStage.scaleY;
        if (isNaN(param2))
        {
            param1.display().x = (_loc_6 - _loc_8) / 2;
        }
        else
        {
            param1.display().x = param2;
        }
        if (isNaN(param3))
        {
            param1.display().y = (_loc_7 - _loc_9) / 2;
        }
        else
        {
            param1.display().y = param3;
        }
        this._mainStage.addChild(param1.display());
        if (param5)
        {
            param5.fadIn(param1, param1.afterBuild);
        }
        else
        {
            param1.afterBuild();
        }
        this._layers.push(param1);
        return;
    }// end function

    public hasLayer(param1:Object) : boolean
    {
        var _loc_2 = null;
        var _loc_3 = null;
        // for each (_loc_2 in this._layers)
        // {
            
        //     if (param1 is Istage)
        //     {
        //         if (_loc_2 == param1)
        //         {
        //             return true;
        //         }
        //     }
        //     if (param1 is Class)
        //     {
        //         _loc_3 = param1 as Class;
        //         if (_loc_2 is _loc_3)
        //         {
        //             return true;
        //         }
        //     }
        // }
        // this._layers.forEach(element => {
        //     if(element == param1){
        //         return true
        //     }
        //     try{
        //         if(element instanceof param1 a){
        //             return true
        //         }
        //     }catch(e){

        //     }
        // })
        return false;
    }// end function

    public  get noneLayer() : boolean
    {
        return this._layers.length == 0;
    }// end function

    public removeLayer(param1:Istage) : void
    {
        var layer = param1;
        try
        {
            this._mainStage.removeChild(layer.display());
            layer.destory(null);
        }
        catch (e)
        {
            //trace("KyoStageCtrl: removeLayer:", e);
        }
        var ix = this._layers.indexOf(layer);
        if (ix != -1)
        {
            this._layers.splice(ix, 1);
        }
        return;
    }// end function

    public removeAllLayer() : void
    {
        var _loc_1 = null;
        // for each (_loc_1 in this._layers)
        // {
            
        //     this.removeLayer(_loc_1);
        // }
        this._layers.forEach(element=>{ 
            this.removeLayer(element)
        })
        this._layers = [];
        return;
    }// end function

    public clean(param1:boolean = true) : void
    {
        if (param1)
        {
            this.removeAllLayer();
        }
        if (this._curStage)
        {
            this._curStage.destory(null);
            this._mainStage.removeChild(this._curStage.display());
            this._curStage = null;
        }
        return;
    }// end function

    private stageMouseChildren(param1:boolean) : void
    {
        if (this._mainStage.stage)
        {
            this._mainStage.stage.touchEnabled = param1;
        }
        return;
    }// end function

}