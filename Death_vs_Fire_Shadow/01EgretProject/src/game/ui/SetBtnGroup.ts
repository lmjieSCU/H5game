class SetBtnGroup extends egret.Sprite
{
    public keyEnable:boolean = true;
    public startX:number = 100;
    public startY:number = 50;
    public endY:number = 0;
    public gap:number = 75;
    public direct:number = 1;
    public gameInputType:String = "MENU";
    private _btns:Array<SetBtn>;
    private _arrow:zmovie.ZMovieClip;
    private _arrowIndex:number = -1;
    private _scrollRect:egret.Rectangle;

    public SetBtnGroup()
    {
        return;
    }// end function

    public initScroll(param1:number, param2:number) : void
    {
        this._scrollRect = new egret.Rectangle(0, 0, param1, param2);
        this.scrollRect = this._scrollRect;
        return;
    }// end function

    public initMainSet() : void
    {
        this.initMainBtns();
        this.initArrow();
        GameRender.add(this.render, this);
        GameInputer.focus();
        GameInputer.enabled = true;
        return;
    }// end function

    public initKeySet() : void
    {
        this.setBtnData([{label:"SET ALL", cn:"设置全部"}, {label:"SET DEFAULT", cn:"还原默认按键"}, {label:"APPLY", cn:"应用"}, {label:"CANCEL", cn:"取消"}]);
        return;
    }// end function

    public setBtnData(param1:any, param2:number = 0) : void
    {
        var _loc_3 = null;
        var _loc_5 = 0;
        var _loc_4 = null;
        this._btns = new Array<SetBtn>();
        while (_loc_5 < param1.length)
        {
            
            _loc_4 = param1[_loc_5];
            _loc_3 = this.addBtn(_loc_4.label, _loc_4.cn, _loc_4.options);
            if (_loc_4.optoinKey != undefined)
            {
                _loc_3.optionKey = _loc_4.optoinKey;
            }
            if (_loc_4.optionValue != undefined)
            {
                _loc_3.setOptionByValue(_loc_4.optionValue);
            }
            _loc_5++;
        }
        this.initArrow(param2);
        GameRender.add(this.render, this);
        GameInputer.focus();
        GameInputer.enabled = true;
        return;
    }// end function

    public destory() : void
    {
        if (this._btns)
        {
            // for each (_loc_1 in this._btns)
            // {
                
            //     _loc_1.destory();
            //     _loc_1.removeEventListener("mouseOver", mouseHandler);
            //     _loc_1.removeEventListener("click", mouseHandler);
            //     _loc_1.removeEventListener("OPTION_CHANGE", onChangeOption);
            //     _loc_1.removeEventListener("SELECT", onSelect);
            // }
            this._btns.forEach(element => {
                element.destory();
                element.removeEventListener("mouseOver", this.mouseHandler,false);
                element.removeEventListener("click", this.mouseHandler,false);
                element.removeEventListener("OPTION_CHANGE", this.onChangeOption,false);
                element.removeEventListener("SELECT", this.onSelect,false);
            })
            this._btns = null;
        }
        GameRender.remove(this.render, this);
        return;
    }// end function

    private initMainBtns() : void
    {
        var _loc_1 = null;
        var _loc_5 = 0;
        var _loc_2 = null;
        this._btns = new Array<SetBtn>();
        var _loc_4 = GameInterface.instance.getSettingMenu();
        if (!GameInterface.instance.getSettingMenu())
        {
            _loc_4 = [{txt:"P1 KEY SET", cn:"玩家1 按键设置"}, {txt:"P2 KEY SET", cn:"玩家2 按键设置"}, {txt:"COM LEVEL", cn:"电脑等级", options:[{label:"VERY EASY", cn:"非常简单", value:1}, {label:"EASY", cn:"简单", value:2}, {label:"NORMAL", cn:"正常", value:3}, {label:"HARD", cn:"困难", value:4}, {label:"VERY HARD", cn:"非常困难", value:5}, {label:"HELL", cn:"地狱", value:6}], optoinKey:"AI_level"}, {txt:"OPERATE MODE", cn:"按键操作模式", options:[{label:"NORMAL", cn:"正常模式", value:0}, {label:"CLASSIC", cn:"经典模式", value:1}], optoinKey:"keyInputMode"}, {txt:"LIFE", cn:"生命值", options:[{label:"50%", cn:"50%", value:0.5}, {label:"100%", cn:"100%", value:1}, {label:"200%", cn:"200%", value:2}, {label:"300%", cn:"300%", value:3}, {label:"500%", cn:"500%", value:5}], optoinKey:"fighterHP"}, {txt:"TIME", cn:"对战时间", options:[{label:"30s", cn:"30秒", value:30}, {label:"60s", cn:"60秒", value:60}, {label:"90s", cn:"90秒", value:90}, {label:"∞", cn:"无限制", value:-1}], optoinKey:"fightTime"}, {txt:"QUALITY", cn:"画质等级", options:[{label:"LOW", cn:"低", value:"low"}, {label:"MEDIUM", cn:"中", value:"medium"}, {label:"HIGH", cn:"高", value:"high"}, {label:"BEST", cn:"最高", value:"best"}], optoinKey:"quality"}];
        }
        var _loc_3 = GameData.I.config;
        while (_loc_5 < _loc_4.length)
        {
            
            _loc_2 = _loc_4[_loc_5];
            _loc_1 = this.addBtn(_loc_2.txt, _loc_2.cn, _loc_2.options);
            if (_loc_2.select)
            {
                _loc_1.onSelect = _loc_2.select;
            }
            _loc_1.optionKey = _loc_2.optoinKey;
            if (_loc_1.optionKey)
            {
                _loc_1.setOptionByValue(_loc_3.getValueByKey(_loc_1.optionKey));
            }
            _loc_5++;
        }
        this.addBtn("APPLY", "应用");
        return;
    }// end function

    private addBtn(param1:string, param2:string, param3:any = null)
    {
        var _loc_4 = new SetBtn(param1, param2);
        _loc_4.addEventListener("mouseOver", this.mouseHandler,this);
        _loc_4.addEventListener("click", this.mouseHandler,this);
        //switch(this.direct) branch count is:<1>[11, 40] default offset is:<65>;
        _loc_4.x = this.startX + this.gap * this._btns.length;
        _loc_4.y = this.startY;
        ;
        //_loc_4.x = this.startX;
        //_loc_4.y = this.startY + this.gap * this._btns.length;
        GameScene.instance.addChild(_loc_4);
        if (param3)
        {
            _loc_4.setOption(param3);
            _loc_4.addEventListener("OPTION_CHANGE", this.onChangeOption,this);
        }
        else
        {
            _loc_4.addEventListener("SELECT", this.onSelect,this);
        }
        this._btns.push(_loc_4);
        return _loc_4;
    }// end function

    private mouseHandler(event:any) : void
    {
        var _loc_2 = 0;
        if (!this.keyEnable)
        {
            return;
        }
        var _loc_3 = event.currentTarget as SetBtn;
        var _loc_4 = event.type;
        while (_loc_4 === "mouseOver")
        {
            
            _loc_2 = this._btns.indexOf(_loc_3);
            if (_loc_2 != -1)
            {
                this.setArrowIndex(_loc_2);
            }
            do
            {
                
                if (_loc_3.getOption() == null)
                {
                    _loc_3.select();
                }
                else if (event.target)
                {
                    _loc_4 = event.target.name;
                    while (_loc_4 === "prevArrow")
                    {
                        
                        _loc_3.prevOption();
                        do
                        {
                            
                            _loc_3.nextOption();
                            break;
                        }while (_loc_4 === "nextArrow")
                }
                break;
            }
        }while (_loc_4 === "click")
        return;
    }// end function
    }

    private initArrow(param1:number = 0) : void
    {
        this._arrow = new zmovie.ZMovieClip(["score_num_json"],RES.getRes("fightui_json"),"root");
        GameScene.instance.addChild(this._arrow);
        this.setArrowIndex(param1);
        return;
    }// end function

    public setArrowIndex(param1:number) : void
    {
        id = param1;
        if (this._arrowIndex == id)
        {
            return;
        }
        if (id < 0)
        {
            var id = (this._btns.length - 1);
        }
        if (id > (this._btns.length - 1))
        {
            id;
        }
        var btn = this._btns[id];
        this._arrowIndex = id;
        this._arrow.x = btn.x - 10;
        this._arrow.y = btn.y + 15;
        this._btns.every(function (param1:SetBtn, param2:number, param3:Array<SetBtn>) : boolean
        {
            if (btn == param1)
            {
                param1.hover();
            }
            else
            {
                param1.hoverOut();
            }
            return true;
        }// end function
        );
        SoundCtrl.I.sndSelect();
        this.moveScroll();
        return;
    }// end function

    private moveScroll() : void
    {
        var _loc_4 = NaN;
        var _loc_3 = NaN;
        var _loc_1 = NaN;
        var _loc_5 = NaN;
        var _loc_2 = NaN;
        if (!this._scrollRect)
        {
            return;
        }
        if (this.direct == 1)
        {
            if (this._btns.length < 8)
            {
                return;
            }
            _loc_4 = this.endY != 0 ? (this.endY) : (this._scrollRect.height);
            _loc_3 = this.height;
            if (_loc_3 < _loc_4)
            {
                return;
            }
            _loc_1 = _loc_4 - this.startY;
            _loc_5 = _loc_1 / this._btns.length;
            _loc_2 = (-this._arrowIndex) * (_loc_5 - this.gap);
            egret.Tween.get(this._scrollRect).to({y:_loc_2, onUpdate:this.updateScroll},200)
            //TweenLite.to(this._scrollRect, 0.2, {y:_loc_2, onUpdate:updateScroll});
        }
        return;
    }// end function

    private updateScroll() : void
    {
        this.scrollRect = this._scrollRect;
        return;
    }// end function

    private render() : void
    {
        if (!this.keyEnable)
        {
            return;
        }
        if (!this._btns || this._btns.length < 1)
        {
            return;
        }
        var _loc_1 = this._btns[this._arrowIndex];
        if (GameInputer.up(this.gameInputType.toString(), 1))
        {
            if (this.direct == 1)
            {
                this.setArrowIndex((this._arrowIndex - 1));
            }
        }
        if (GameInputer.down(this.gameInputType.toString(), 1))
        {
            if (this.direct == 1)
            {
                this.setArrowIndex((this._arrowIndex + 1));
            }
        }
        if (GameInputer.left(this.gameInputType.toString(), 1))
        {
            if (this.direct == 0)
            {
                this.setArrowIndex((this._arrowIndex - 1));
            }
            if (this.direct == 1)
            {
                _loc_1.prevOption();
            }
        }
        if (GameInputer.right(this.gameInputType.toString(), 1))
        {
            if (this.direct == 0)
            {
                this.setArrowIndex((this._arrowIndex + 1));
            }
            if (this.direct == 1)
            {
                _loc_1.nextOption();
            }
        }
        if (GameInputer.select(this.gameInputType.toString(), 1))
        {
            _loc_1.select();
        }
        return;
    }// end function

    private onChangeOption(event:SetBtnEvent) : void
    {
        //dispatchEvent(event.newEvent());
        return;
    }// end function

    private onSelect(event:SetBtnEvent) : void
    {
        var _loc_2 = event.currentTarget as SetBtn;
        if (_loc_2.onSelect != null)
        {
            _loc_2.onSelect();
        }
        //dispatchEvent(event.newEvent());
        return;
    }// end function

}