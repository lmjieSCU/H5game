/*
*存储用于实现碰撞的楼层位置
*y:对应y坐标
*xFrom:对应左端x坐标
*xTo:对应右端x坐标
*/
class FloorVO 
{
    public y:number = 0;
    public xFrom:number = 0;
    public xTo:number = 0;

    constructor()
    {
        return;
    }// end function

    public toString2() : string
    {
        return "FloorVO::{xFrom:" + this.xFrom + ",xTo:" + this.xTo + ",y:" + this.y + "}";
    }// end function


    /*
    *param1为待检测人物x坐标
    *param2为待检测人物y坐标
    *param3为速度
    */
    public hitTest(param1:number, param2:number, param3:number) : boolean
    {
        return param2 > this.y - param3 && param2 < this.y + param3 && param1 > this.xFrom && param1 < this.xTo;
    }// end function

}
