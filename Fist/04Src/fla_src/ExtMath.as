class ExtMath extends Math
{
    function ExtMath()
    {
        super();
    } // End of the function
    static function distance(x1, y1, x2, y2)
    {
        var _loc1 = x2 - x1;
        var _loc2 = y2 - y1;
        return (Math.sqrt(_loc1 * _loc1 + _loc2 * _loc2));
    } // End of the function
    static function distance2(x1, y1, x2, y2)
    {
        var _loc1 = x2 - x1;
        var _loc2 = y2 - y1;
        return (_loc1 * _loc1 + _loc2 * _loc2);
    } // End of the function
    static function degreesToRadians(angle)
    {
        return (angle * 0.017453);
    } // End of the function
    static function radiansToDegrees(angle)
    {
        return (angle * 57.295780);
    } // End of the function
    static function sinD(angle)
    {
        return (Math.sin(angle * 3.141593 / 180));
    } // End of the function
    static function asinD(ratio)
    {
        return (Math.asin(ratio) * 57.295780);
    } // End of the function
    static function cosD(angle)
    {
        return (Math.cos(angle * 3.141593 / 180));
    } // End of the function
    static function acosD(ratio)
    {
        return (Math.acos(ratio) * 57.295780);
    } // End of the function
    static function tanD(angle)
    {
        return (Math.tan(angle * 3.141593 / 180));
    } // End of the function
    static function atan2D(y, x)
    {
        return (Math.atan2(y, x) * 57.295780);
    } // End of the function
    static function angleOfLine(x1, y1, x2, y2)
    {
        return (ExtMath.atan2D(y2 - y1, x2 - x1));
    } // End of the function
    static function fixAngle(angle)
    {
        angle = angle % 360;
        return (angle % 360 < 0 ? (angle + 360) : (angle));
    } // End of the function
    static function cartesianToFlash(o)
    {
        o._y = o._y * -1;
        o._rotation = o._rotation * -1;
    } // End of the function
    static function flashToCartesian(o)
    {
        return (ExtMath.cartesianToFlash(o));
    } // End of the function
    static function cartesianToPolar(p)
    {
        var _loc2 = Math.sqrt(p.x * p.x + p.y * p.y);
        var _loc3 = ExtMath.atan2D(p.y, p.x);
        return ({r: _loc2, t: _loc3});
    } // End of the function
    static function polarToCartesian(p)
    {
        var _loc2 = p.r * ExtMath.cosD(p.t);
        var _loc3 = p.r * ExtMath.sinD(p.t);
        return ({x: _loc2, y: _loc3});
    } // End of the function
    static var __proto__ = Math;
} // End of Class
