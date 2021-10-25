class MCNumber extends egret.Sprite
{
    public mcWidth:number = -1;
    public startFrame:number;
    public _mc:any;
    protected _mcs:Array<any>;
    protected _number:any;
    protected _bits:any;

    public  constructor(param1:any, param2:any, param3:any = 1, param4:number = -1, param5:any = 0)
    {
        super()
        this._mcs = [];
        this._mc = param1;
        this._bits = param5;
        this.startFrame = param3;
        this.mcWidth = param4;
        this._number = param2;
        return;
    }// end function

    public get number() : any
    {
        return this._number;
    }// end function

    public  set number(param1:any)
    {
        var _loc_2 = null;
        var _loc_3 = null;
        var _loc_5 = 0;
        var _loc_6 = null;
        var _loc_7 = null;
        this._number = param1;
        
        // for each (_loc_2 in this._mcs)
        // {
            
        //     removeChild(_loc_2);
        // }
        //this._mcs.removeChildren()
        this._mcs = [];
        _loc_3 = param1.toString();
        while (_loc_3.length < this._bits)
        {
            
            _loc_3 = "0" + _loc_3;
        }
        var _loc_4 = 0;
        while (_loc_5 < _loc_3.length)
        {
            
            _loc_6 = _loc_3.charAt(_loc_5);
            _loc_7 = this.createNum(Number(_loc_6));
            _loc_7.x = _loc_4;
            _loc_4 = _loc_4 + (this.mcWidth == -1 ? (_loc_7.width) : (this.mcWidth));
            _loc_5 = _loc_5 + 1;
        }
        return;
    }// end function

    protected  createNum(param1:number) : egret.DisplayObject
    {
        var _loc_2 = this._mc;
        _loc_2.gotoAndStop(this.startFrame + param1);
        GameScene.instance.addChild(_loc_2);
        this._mcs.push(_loc_2);
        return _loc_2;
    }// end function

}