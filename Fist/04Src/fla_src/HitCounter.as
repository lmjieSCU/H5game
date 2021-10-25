class HitCounter extends MovieClip
{
    var _y, offsetX, _visible, gotoAndStop, hits_mc, _x, gotoAndPlay;
    function HitCounter()
    {
        super();
        _y = 200;
        offsetX = 30;
        _visible = false;
    } // End of the function
    function showHits(obj)
    {
        var _loc2 = obj.x;
        ++hits;
        if (hits > 1)
        {
            this.gotoAndStop(1);
            hits_mc.gotoAndPlay(1);
            hits_mc.num_mc.hits_txt.text = hits;
            hits_mc.num_mc.hits2_txt.text = hits;
            _x = _loc2;
            if (_loc2 + offsetX > _level0.egde_max)
            {
                _x = _level0.egde_max - offsetX;
            }
            else if (_loc2 - offsetX < _level0.egde_min)
            {
                _x = _level0.egde_min + offsetX;
            } // end else if
            _visible = true;
        } // end if
    } // End of the function
    function showHits_end()
    {
        if (hits > 1)
        {
            this.gotoAndPlay("showHits");
        } // end if
        hits = 0;
    } // End of the function
    function clearHits()
    {
        this.gotoAndStop(1);
        _visible = false;
    } // End of the function
    var hits = 0;
} // End of Class
