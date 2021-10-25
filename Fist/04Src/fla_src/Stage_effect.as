class Stage_effect extends MovieClip
{
    var getNextHighestDepth, createEmptyMovieClip, superFreeze_mc, KO_Freeze_mc, hitFreeze_mc, colorObj, bgShinngHit_mc, attachMovie, hit, bgEff_mc, onEnterFrame, isKO, camera_obj, bgEffKO_mc;
    function Stage_effect()
    {
        super();
        superFreeze_mc = this.createEmptyMovieClip("superFreeze_mc", this.getNextHighestDepth());
        KO_Freeze_mc = this.createEmptyMovieClip("KO_Freeze_mc", this.getNextHighestDepth());
        hitFreeze_mc = this.createEmptyMovieClip("hitFreeze_mc", this.getNextHighestDepth());
        colorObj = new Object();
        colorObj.normal = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.black = {ra: "0", rb: "0", ga: "0", gb: "0", ba: "0", bb: "0", aa: "100", ab: "0"};
        colorObj.white = {ra: "100", rb: "255", ga: "100", gb: "255", ba: "100", bb: "255", aa: "100", ab: "255"};
        bgShinngHit_mc = _root.fgEff2_mc.attachMovie("bgShinngHit", "bgShinngHit_mc", depth_bgEff3);
    } // End of the function
    function hitFire(_hitType, hitFire_x, hitFire_y, dir)
    {
        var _loc4;
        var _loc2 = _hitType;
        if (_hitType == "hitFire1")
        {
            _loc4 = Math.random();
            if (_loc4 < 0.500000)
            {
                _loc2 = "hitFire_kof_1";
            }
            else
            {
                _loc2 = "hitFire1";
            } // end if
        } // end else if
        var _loc3 = this.getNextHighestDepth();
        hit = this.attachMovie(_loc2, "hit", _loc3);
        hit._x = hitFire_x;
        hit._y = hitFire_y;
        hit._xscale = hit._xscale * dir;
    } // End of the function
    function downEff(hitType, hitFire_x, hitFire_y, dir)
    {
        var _loc3 = this.getNextHighestDepth();
        var _loc2 = this.attachMovie(hitType, "down", _loc3);
        _loc2._x = hitFire_x;
        _loc2._y = hitFire_y;
        _loc2._xscale = dir * 100;
    } // End of the function
    function bgEff_start(s_type, fromMC)
    {
        if (s_type == "")
        {
            this.bgEff_end();
            return;
        } // end if
        bgEff_mc = _root.bgEff_mc.attachMovie(s_type, "bgEff", depth_bgEff1);
        bgEff_mc.mc._xscale = bgEff_mc.mc._xscale * fromMC._parent.dir;
        var owner = this;
        fromMC.onUnload = function ()
        {
            owner.bgEff_end();
        };
    } // End of the function
    function bgEff_end()
    {
        bgEff_mc.removeMovieClip();
    } // End of the function
    function bgShineHit(type)
    {
        if (type == 2)
        {
            bgShinngHit_mc.show2();
        }
        else
        {
            bgShinngHit_mc.show1();
        } // end else if
    } // End of the function
    function fgEff_start(s_type, fromMC)
    {
        if (s_type == "")
        {
            this.fgEff_end();
            return;
        } // end if
        var _loc3 = _root.effect_mc_fg.attachMovie(s_type, "fgEff", depth_bgEff1);
        _loc3.mc._xscale = _loc3.mc._xscale * fromMC._parent.dir;
        _loc3._x = -_root.char_mc._x;
        _loc3._y = 0;
        var owner = this;
        fromMC.onUnload = function ()
        {
            owner.fgEff_end();
        };
    } // End of the function
    function fgEff_end()
    {
        _root.effect_mc_fg.unloadMovie();
    } // End of the function
    function superStart(s_type, time_f, dx, dy, bgType, roleName, dir, fromMC, role)
    {
        var _loc8 = this.getNextHighestDepth();
        var _loc5 = this.attachMovie(s_type, "ss", _loc8);
        _loc5._x = dx;
        _loc5._y = dy;
        _loc5._xscale = _loc5._xscale * dir;
        _loc8 = _root.effect_mc_bg.getNextHighestDepth();
        var _loc4 = _root.effect_mc_bg.attachMovie(s_type + "_bg", "eff_bg", _loc8);
        _loc4._x = dx;
        _loc4._y = dy;
        _loc4._xscale = _loc4._xscale * dir;
        var _loc3 = _root.bgEff_mc.attachMovie("bgEff_super" + bgType, "bgEff", depth_bgEff2);
        _loc3._x = _root.center_x;
        _loc3._y = _root.center_y;
        _loc3._xscale = _loc3._xscale * dir;
        var _loc7 = "superface_" + roleName + bgType;
        var _loc13 = _loc3.face_mc.attachMovie(_loc7, "face", 1100);
        this.superFreeze(time_f);
        if (s_type == "s1" || s_type == "s1_s")
        {
            _level0.zoomControl_mc.zoomIn(_level0.char_mc, role, 1.300000, 0.500000);
        }
        else if (s_type == "s2")
        {
            _level0.zoomControl_mc.zoomIn(_level0.char_mc, role, 1.400000, 0.500000);
        } // end else if
    } // End of the function
    function superFreeze(f)
    {
        var time_f = f;
        var P1_s = _level0.P1_role.mc;
        var P2_s = _level0.P2_role.mc;
        _level0.inFreeze = true;
        _level0.P1_role.inFreeze = true;
        _level0.P2_role.inFreeze = true;
        P1_s.stop();
        P2_s.stop();
        var _loc2 = this;
        superFreeze_mc.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (time_f == 1)
            {
                _level0.zoomControl_mc.zoomBack(0.500000);
            } // end if
            if (time_f > 0)
            {
                P1_s.stop();
                P2_s.stop();
                --time_f;
            }
            else
            {
                _level0.inFreeze = false;
                _level0.P1_role.inFreeze = false;
                _level0.P2_role.inFreeze = false;
                P1_s.play();
                P2_s.play();
                _level0.P1_role.skill_restart();
                _level0.P2_role.skill_restart();
                delete this.onEnterFrame;
            } // end else if
        };
    } // End of the function
    function KO_Freeze(time_f, KO_type)
    {
        if (isKO)
        {
            return;
        } // end if
        isKO = true;
        var P1_s = _level0.P1_role.mc;
        var P2_s = _level0.P2_role.mc;
        _level0.inFreeze = true;
        _level0.P1_role.inFreeze = true;
        _level0.P2_role.inFreeze = true;
        P1_s.stop();
        P2_s.stop();
        this.KO_eff(KO_type);
        var owner = this;
        KO_Freeze_mc.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (owner.bgEffKO_mc._currentframe < owner.bgEffKO_mc._totalframes)
            {
                P1_s.stop();
                P2_s.stop();
                --time_f;
            }
            else
            {
                _level0.zoomControl_mc.zoomBack(0.500000);
                owner.isKO = false;
                _level0.inFreeze = false;
                _level0.P1_role.inFreeze = false;
                _level0.P2_role.inFreeze = false;
                P1_s.play();
                P2_s.play();
                owner.KO_eff_end();
                owner.showOK_txt();
                delete this.onEnterFrame;
            } // end else if
        };
    } // End of the function
    function hitFreeze(f, target, f_slow)
    {
        if (isKO)
        {
            return;
        } // end if
        var time_f = f;
        var P1_s = _level0.P1_role.mc;
        var P2_s = _level0.P2_role.mc;
        _level0.P1_role.inFreeze = true;
        _level0.P2_role.inFreeze = true;
        P1_s.stop();
        P2_s.stop();
        var owner = this;
        hitFreeze_mc.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (owner.isKO)
            {
                return;
            } // end if
            if (target.shakedir == -1)
            {
                target.shakedir = 1;
                target._x = target._x + 2;
            }
            else
            {
                target.shakedir = -1;
                target._x = target._x - 2;
            } // end else if
            if (time_f > 1)
            {
                P1_s.stop();
                P2_s.stop();
                --time_f;
            }
            else
            {
                _level0.P1_role.inFreeze = false;
                _level0.P2_role.inFreeze = false;
                P1_s.play();
                P2_s.play();
                delete this.onEnterFrame;
            } // end else if
        };
    } // End of the function
    function getFireFrame()
    {
        var _loc4 = _level0.P1_role.skill_loader;
        var _loc3 = _level0.P2_role.skill_loader;
        var _loc2;
        for (var _loc6 in _loc4)
        {
            _loc2 = _loc4[_loc6];
            if (_loc2 instanceof MovieClip)
            {
                fireFrame_p1[_loc6] = {mc: _loc2, frame: _loc2._currentframe};
            } // end if
        } // end of for...in
        for (var _loc6 in _loc3)
        {
            _loc2 = _loc3[_loc6];
            if (_loc2 instanceof MovieClip)
            {
                fireFrame_p2[_loc6] = {mc: _loc2, frame: _loc2._currentframe};
            } // end if
        } // end of for...in
    } // End of the function
    function checkFireFrame()
    {
        var _loc2;
        for (var _loc3 in fireFrame_p1)
        {
            _loc2 = fireFrame_p1[_loc3];
            if (_loc2.mc._currentframe == _loc2.frame)
            {
                firePlay_p1[_loc3] = false;
            } // end if
        } // end of for...in
        for (var _loc3 in fireFrame_p2)
        {
            _loc2 = fireFrame_p2[_loc3];
            if (_loc2.mc._currentframe == _loc2.frame)
            {
                firePlay_p2[_loc3] = false;
            } // end if
        } // end of for...in
        fireFrame_p1 = {};
        fireFrame_p2 = {};
    } // End of the function
    function fire_stop()
    {
        var _loc3 = _level0.P1_role.skill_loader;
        var _loc2 = _level0.P2_role.skill_loader;
        for (var _loc4 in _loc3)
        {
            _loc3[_loc4].stop();
        } // end of for...in
        for (var _loc4 in _loc2)
        {
            _loc2[_loc4].stop();
        } // end of for...in
        for (var _loc4 in this)
        {
            this[_loc4].stop();
        } // end of for...in
    } // End of the function
    function fire_continue()
    {
        var _loc4 = _level0.P1_role.skill_loader;
        var _loc3 = _level0.P2_role.skill_loader;
        for (var _loc5 in _loc4)
        {
            var _loc2 = _loc4[_loc5];
            if (firePlay_p1[_loc2._name] == false)
            {
                continue;
            } // end if
            _loc2.play();
        } // end of for...in
        for (var _loc5 in _loc3)
        {
            _loc2 = _loc3[_loc5];
            if (firePlay_p2[_loc2._name] == false)
            {
                continue;
            } // end if
            _loc2.play();
        } // end of for...in
        firePlay_p1 = [];
        firePlay_p2 = [];
        for (var _loc5 in this)
        {
            this[_loc5].play();
        } // end of for...in
    } // End of the function
    function showOK_txt()
    {
        _level0.element_mc.attachMovie("KO_mc", "KO_mc", _level0.depth_ko, {_x: 330, _y: 150});
    } // End of the function
    function endOK_txt()
    {
    } // End of the function
    function KO_camera()
    {
        var _loc3 = (_level0.P1_role._x + _level0.P2_role._x) / 2;
        var _loc2 = (_level0.P1_role._y - 100 + (_level0.P2_role._y - 100)) / 2;
        camera_obj = this.attachMovie("shinning_g", "KO_camera_mc", 102, {_x: _loc3, _y: _loc2});
    } // End of the function
    function KO_camera_end()
    {
        camera_obj.removeMovieClip();
    } // End of the function
    function KO_eff(KO_type)
    {
        var _loc5 = depth_bgEff4;
        var _loc3;
        if (KO_type == "2")
        {
            _loc3 = "bgEff_KO2";
            bgEffKO_mc = _root.bgEff_mc.attachMovie(_loc3, "bgEff_mc", _loc5);
        }
        else
        {
            _loc3 = "bgEff_KO";
            bgEffKO_mc = _root.bgEff_mc.attachMovie(_loc3, "bgEff_mc", _loc5);
            this.changeColor(_level0.P1_mc, "black");
            this.changeColor(_level0.P2_mc, "black");
            this.changeColor(_level0.effect_mc, "black");
            this.KO_camera();
        } // end else if
        var _loc4;
        if (_level0.winner == _level0.P1_role)
        {
            _loc4 = _level0.P2_role;
        }
        else if (_level0.winner == _level0.P2_role)
        {
            _loc4 = _level0.P1_role;
        } // end else if
        _level0.zoomControl_mc.zoomIn(_level0.char_mc, _loc4, 1.300000, 0.600000);
    } // End of the function
    function KO_eff_end()
    {
        bgEffKO_mc.removeMovieClip();
        this.changeColor(_level0.P1_mc, "normal");
        this.changeColor(_level0.P2_mc, "normal");
        this.changeColor(_level0.effect_mc, "normal");
        this.KO_camera_end();
    } // End of the function
    function changeColor(char, cc)
    {
        var _loc2 = new Color(char);
        var _loc3 = colorObj[cc];
        _loc2.setTransform(_loc3);
    } // End of the function
    function slowEff(time)
    {
        _root.slowSound_mc.slow_start(time);
    } // End of the function
    var KO_time = 15;
    var depth_bgEff1 = 1000;
    var depth_bgEff2 = 1100;
    var depth_bgEff3 = 1200;
    var depth_bgEff4 = 1300;
    var fireFrame_p1 = new Object();
    var fireFrame_p2 = new Object();
    var firePlay_p1 = new Object();
    var firePlay_p2 = new Object();
} // End of Class
