class Box extends egret.Sprite
{

    public constructor(param1:number, param2:number, param3:number = 0, param4:number = 1, param5:egret.Point = null)
    {
        super()
        let temp:egret.Graphics = new egret.Graphics();
        temp.beginFill(param3, param4);
        temp.drawRect(param5 ? (-param5.x) : (0), param5 ? (-param5.y) : (0), param1, param2);
        temp.endFill();
        return;
    }// end function

}