class ColorEffect
{
    var oldColor, MC_color, timer_color, MC;
    function ColorEffect()
    {
    } // End of the function
    static function setColor(_mc, colorType)
    {
        var _loc1 = new Color(_mc);
        if (typeof(colorType) == "string")
        {
            _loc1.setTransform(ColorEffect["color_" + colorType]);
        }
        else if (colorType instanceof Object)
        {
            _loc1.setTransform(colorType);
        } // end else if
    } // End of the function
    function colorRecover()
    {
        MC_color.setTransform(oldColor);
        clearInterval(timer_color);
        MC.inWhite = null;
        this = null;
    } // End of the function
    static var color_normal = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "0", aa: "100", ab: "0"};
    static var color_white = {ra: "0", rb: "255", ga: "0", gb: "255", ba: "0", bb: "255", aa: "100", ab: "0"};
    static var color_black = {ra: "0", rb: "0", ga: "0", gb: "0", ba: "0", bb: "0", aa: "100", ab: "0"};
} // End of Class
