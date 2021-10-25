class ZoomControl extends MovieClip
{
    var v_scale, loader, mc, scaleTo, pos0_x, pos0_y, scale0;
    function ZoomControl()
    {
        super();
        v_scale = 5;
    } // End of the function
    function zoomIn(_loader, _mc, rate, v)
    {
        inZoom = true;
        loader = _loader;
        mc = _mc;
        scaleTo = rate * 100;
        pos0_x = loader._x;
        pos0_y = loader._y;
        scale0 = loader._xscale;
        this.doZoom(scaleTo, v);
    } // End of the function
    function zoomOut(loader)
    {
        this.doZoom(scale0);
    } // End of the function
    function zoomBack(v_rate)
    {
        var _loc2 = 100;
        if (loader._xscale == _loc2)
        {
            return;
        } // end if
        loader._xscale = loader._yscale = _loc2;
        loader._x = pos0_x;
        loader._y = pos0_y;
        delete this.onEnterFrame;
        inZoom = false;
    } // End of the function
    function doZoom(scaleTo, v_rate)
    {
        function onEnterFrame()
        {
            var _loc2 = (scaleTo - loader._xscale) * v_rate;
            loader._xscale = loader._xscale + _loc2;
            loader._yscale = loader._yscale + _loc2;
            var _loc4 = mc._x - mc._x * (loader._xscale / 100);
            var _loc3 = mc._y - mc._y * (loader._yscale / 100);
            loader._x = pos0_x + _loc4;
            loader._y = pos0_y + _loc3;
            trace (_loc2 + "    " + loader._xscale + "   " + scaleTo);
            if (Math.abs(_loc2) < 0.100000)
            {
                loader._xscale = loader._yscale = scaleTo;
                delete this.onEnterFrame;
            } // end if
        } // End of the function
    } // End of the function
    static var inZoom = false;
} // End of Class
