var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var KeyBoarder = (function (_super) {
    __extends(KeyBoarder, _super);
    function KeyBoarder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyBoarder.prototype.KeyBoarder = function () {
        return;
    }; // end 
    KeyBoarder.initlize = function (param1) {
        /*
        if (_inited)
        {
            return;
        }
        _inited = true;
        _stage = param1;
        param1.addEventListener("keyDown", keyBoardHandler);
        param1.addEventListener("keyUp", keyBoardHandler);
        */
        return;
    }; // end 
    KeyBoarder.focus = function () {
        /*
        if (!_inited)
        {
            return;
        }
        _stage.focus = _stage;
        */
        return;
    }; // end 
    KeyBoarder.listen = function (param1) {
        /*
        if (!_inited)
        {
            return;
        }
        if (_keyHandlers.indexOf(param1) == -1)
        {
            _keyHandlers.push(param1);
        }
        */
        return;
    }; // end 
    KeyBoarder.unListen = function (param1) {
        /*
       if (!_inited)
       {
           return;
       }
       if (_keyHandlers.indexOf(param1) != -1)
       {
           _keyHandlers.splice(_keyHandlers.indexOf(param1), 1);
       }
       */
        return;
    }; // end 
    KeyBoarder.keyBoardHandler = function (event) {
        /*
        if (!_inited)
        {
            return;
        }
        var _loc_2 = 0;
        _loc_2 = 0;
        while (_loc_2 < _keyHandlers.length)
        {
            
            _keyHandlers._keyHandlers[_loc_2](event);
            _loc_2++;
        }
        return;
        */
    }; // end 
    KeyBoarder._keyHandlers = [];
    return KeyBoarder;
}(Object));
__reflect(KeyBoarder.prototype, "KeyBoarder");
//# sourceMappingURL=KeyBoarder.js.map