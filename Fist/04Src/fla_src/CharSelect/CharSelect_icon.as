class CharSelect.CharSelect_icon extends MovieClip
{
    var keyObj, faceMC, LoaderMC, name_mc, fromTxt_mc, modeMC, select_now, onKeyDown, onKeyUp, selectMode, _parent, _x, _y, selectRole, play, selectOK_char;
    function CharSelect_icon()
    {
        super();
        Key.addListener(this);
    } // End of the function
    function init($keyObj, $select_now, $faceMC, $name_mc, $LoaderMC, $modeMC, $fromTxt_mc)
    {
        keyObj = $keyObj;
        faceMC = $faceMC;
        LoaderMC = $LoaderMC;
        name_mc = $name_mc;
        fromTxt_mc = $fromTxt_mc;
        modeMC = $modeMC;
        this.goto($select_now);
        this.showFace(select_now.$role);
        this.showName(select_now.$name);
        onKeyDown = char_select;
    } // End of the function
    function initKey($keyObj)
    {
        keyObj = $keyObj;
    } // End of the function
    function selectNext(next)
    {
        this.goto(next);
        this.showFace(select_now.$role);
        this.showName(select_now.$role);
        this.selectOK();
    } // End of the function
    function char_select()
    {
        var _loc2;
        if (Key.isDown(keyObj.p) || Key.isDown(keyObj.k) || Key.isDown(keyObj.p_l) || Key.isDown(keyObj.k_l))
        {
            if (select_now.canSelect == false)
            {
                return;
            } // end if
            this.selectOK();
            onKeyUp = null;
            return;
        } // end if
        if (Key.isDown(keyObj.s))
        {
            var name1 = select_now.$role;
            var _loc4 = "";
            if (select_now.$hasHidden)
            {
                _loc4 = name1 + "2";
            }
            else
            {
                return;
            } // end else if
            if (_loc4 != "")
            {
                if (selectMode == 2)
                {
                    return;
                } // end if
                selectMode = 2;
                this.showFace(_loc4);
                var _loc6 = function ()
                {
                    if (Key.getCode() == keyObj.s)
                    {
                        this.showFace(name1);
                        selectMode = select_now.$type;
                        onKeyUp = null;
                    } // end if
                };
                onKeyUp = _loc6;
            } // end if
            return;
        } // end if
        if (Key.isDown(keyObj.u))
        {
            _loc2 = "up";
        }
        else if (Key.isDown(keyObj.d))
        {
            _loc2 = "down";
        }
        else if (Key.isDown(keyObj.f))
        {
            _loc2 = "right";
        }
        else if (Key.isDown(keyObj.b))
        {
            _loc2 = "left";
        }
        else
        {
            return;
        } // end else if
        var _loc3 = this.getNext(_loc2);
        if (_loc3 == "none")
        {
            return;
        } // end if
        if (!(_parent[_loc3] instanceof MovieClip))
        {
            return;
        } // end if
        onKeyUp = null;
        if (select_now.role == "random")
        {
            select_now.gotoAndStop(1);
        } // end if
        this.goto(_loc3);
        if (select_now.role == "random")
        {
            select_now.play();
            this.showFace("");
            this.showName("none");
            return;
        } // end if
        var _loc5 = select_now.$role;
        if (select_now.$type != 1)
        {
            _loc5 = select_now.$role + select_now.$type;
        } // end if
        this.showFace(_loc5);
        this.showName(select_now.$role);
    } // End of the function
    function getNext(dir)
    {
        var _loc2 = select_now.posObj[dir];
        if (_loc2 != "" && _loc2 != undefined)
        {
            return (_loc2);
        }
        else
        {
            return ("none");
        } // end else if
    } // End of the function
    function goto(next)
    {
        select_now = _parent[next];
        _x = select_now._x;
        _y = select_now._y;
        selectMode = select_now.$type;
    } // End of the function
    function showFace(_face)
    {
        var _loc2 = _face;
        if (_loc2 == "" || _loc2 == undefined || select_now.canSelect == false)
        {
            _loc2 = "none";
        } // end if
        faceMC.gotoAndPlay(1);
        faceMC.head_loader.mc.gotoAndStop(_loc2);
        _level0.select_snd.start();
    } // End of the function
    function showName(name)
    {
        if (name == "" || name == undefined || select_now.canSelect == false)
        {
            name_mc.gotoAndStop("none");
            fromTxt_mc.gotoAndStop("none");
            return;
        } // end if
        name_mc.gotoAndStop(name);
        var _loc3;
        if (name == "Ryu")
        {
            _loc3 = "sf";
        }
        else if (name == "Chunli")
        {
            _loc3 = "sf";
        }
        else if (name == "Moriya")
        {
            _loc3 = "lb";
        }
        else if (name == "Haohmaru")
        {
            _loc3 = "sh";
        }
        else
        {
            _loc3 = "kof";
        } // end else if
        fromTxt_mc.gotoAndStop(_loc3);
    } // End of the function
    function selectOK()
    {
        if (!select_now.active && _level0.P2_type != "cpu")
        {
            return;
        } // end if
        if (!select_now.loadOK)
        {
            return;
        } // end if
        if (select_now.role == "random")
        {
            if (_parent.p1.select_now.role == "random" && _parent.p1.selectRole == undefined && (_parent.p2.select_now.role == "random" && _parent.p2.selectRole == undefined))
            {
            }
            else
            {
                select_now.stop();
            } // end else if
            this.showFace(select_now.$role);
            this.showName(select_now.$role);
        } // end if
        selectRole = select_now.$role;
        this.play();
        _level0.ok_snd.start();
        this.selectOK_char();
        onKeyDown = null;
    } // End of the function
    static var selectedNum = 0;
} // End of Class
