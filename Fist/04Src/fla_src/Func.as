class Func
{
    function Func()
    {
    } // End of the function
    static function lToG(mc)
    {
        var _loc1 = new Object();
        _loc1.x = mc._x;
        _loc1.y = mc._y;
        mc._parent.localToGlobal(_loc1);
        return (_loc1);
    } // End of the function
    static function ltoL(mcFrom, mcTo)
    {
        var _loc1 = new Object();
        _loc1.x = mcFrom._x;
        _loc1.y = mcFrom._y;
        mcFrom._parent.localToGlobal(_loc1);
        mcTo.globalToLocal(_loc1);
        return (_loc1);
    } // End of the function
    static function zoomIn(loader, mc, rate)
    {
        var _loc2 = Func.lToG(mc);
        loader._xscale = loader._yscale = rate * 100;
        var _loc1 = Func.lToG(mc);
        var _loc5 = _loc2.x - _loc1.x;
        var _loc4 = _loc2.y - _loc1.y;
        loader._x = loader._x + _loc5;
        loader._y = loader._y + _loc4;
        trace (_loc2.x + "   " + _loc1.x);
    } // End of the function
    static function getMc(src)
    {
        for (var _loc3 in src)
        {
            var _loc1 = src[_loc3];
            trace ("mc::: " + _loc1);
            if (_loc1 instanceof MovieClip)
            {
                trace ("src:::::::::::" + src);
                trace ("mc:::::::::::: " + _loc1);
                return (_loc1);
            } // end if
        } // end of for...in
    } // End of the function
} // End of Class
