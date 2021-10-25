
class EffectManager
    {
        private _viewCache:any;
        private _hitCache:any;
        private _shineCache:any[] = [];

        constructor()
        {
            this._viewCache = new Array();
            this._hitCache = new Array();
            return;
        }// end function

        public destory() : void
        {
            for (var _loc_3 in this._viewCache)
            {
                
                for (var _loc_1 in this._viewCache[_loc_3])
                {
                    
                    this._viewCache[_loc_3][_loc_1].destory();
                }
            }
            for  (var _loc_2 in this._shineCache)
            {
                
                this._shineCache[_loc_2].destory();
            }
            this._viewCache = null;
            this._hitCache = null;
            this._shineCache = null;
            return;
        }// end function

        public getEffectVOByHitVO(param1:HitVO) : EffectVO
        {
            var _loc_3:any = NaN;
            var _loc_5:any = NaN;
            var _loc_2:any = NaN;
            if (this._hitCache[param1.id] != undefined)
            {
                return this._hitCache[param1.id];
            }
            var _loc_4:any = EffectModel.I.getHitEffect(param1.hitType);
            if (!EffectModel.I.getHitEffect(param1.hitType))
            {
                this._hitCache[param1.id] = null;
                return null;
            }
            //_loc_4 = _loc_4.clone();
            if (_loc_4.shake)
            {
                if (_loc_4.shake.pow != undefined && _loc_4.shake.pow != 0)
                {
                    _loc_3 = _loc_4.shake.pow;
                    if (param1.hitx == 0 && param1.hity == 0)
                    {
                        _loc_4.shake.x = _loc_3;
                        _loc_4.shake.y = 0;
                    }
                    else
                    {
                        _loc_5 = Math.abs(param1.hitx) + Math.abs(param1.hity);
                        _loc_2 = param1.hitx / _loc_5;
                        _loc_4.shake.x = _loc_3 * _loc_2;
                        _loc_4.shake.y = _loc_3 * (1 - _loc_2);
                    }
                }
                if (_loc_4.shake.x == 0 && _loc_4.shake.y == 0)
                {
                    _loc_4.shake.x = 3;
                }
            }
            this._hitCache[param1.id] = _loc_4;
            return _loc_4;
        }// end function

        public getEffectView(param1:EffectVO) : EffectView
        {
            var _loc_4:any = 0;
            var _loc_5:any = 0;
            var _loc_3:any = null;
            var _loc_2:any = this._viewCache[param1.className];
            if (_loc_2)
            {
                _loc_4 = _loc_2.length;
                while (_loc_5 < _loc_4)
                {
                    
                    if (!_loc_2[_loc_5].isActive)
                    {
                        return _loc_2[_loc_5];
                    }
                    _loc_5++;
                }
            }
            else
            {
                _loc_2 = new Array<EffectView>();
                this._viewCache[param1.className] = _loc_2;
            }
            if (param1.isSpecial)
            {
                _loc_3 = new SpecialEffectView(param1);
            }
            else
            {
                _loc_3 = new EffectView(param1);
            }
            _loc_2.push(_loc_3);
            return _loc_3;
        }// end function

        public getShine() : ShineEffectView
        {
            var _loc_3:any = 0;
            var _loc_1:any = this._shineCache.length;
            while (_loc_3 < _loc_1)
            {
                
                if (!this._shineCache[_loc_3].isActive)
                {
                    return this._shineCache[_loc_3];
                }
                _loc_3++;
            }
            var _loc_2:any = new ShineEffectView();
            this._shineCache.push(_loc_2);
            return _loc_2;
        }// end function

    }
