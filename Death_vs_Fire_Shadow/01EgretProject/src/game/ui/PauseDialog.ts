class PauseDialog extends egret.Sprite
    {
        private _bg:egret.Sprite;
        private _btnGroup:SetBtnGroup;
        private _moveList:MoveListSp;

        public PauseDialog()
        {
            this._bg = new egret.Sprite();
            this._bg.graphics.beginFill(0, 0.5);
            this._bg.graphics.drawRect(0, 0, GameConfig.GAME_SIZE.x, GameConfig.GAME_SIZE.y);
            this._bg.graphics.endFill();
            GameScene.instance.addChild(this._bg);
            this._btnGroup = new SetBtnGroup();
            this._btnGroup.setBtnData([{label:"GAME TITLE", cn:"返回标题"}, {label:"MOVE LIST", cn:"出招表"}, {label:"CONTINUE", cn:"继续游戏"}], 2);
            this._btnGroup.addEventListener("SELECT", this.btnGroupSelectHandler,this);
            GameScene.instance.addChild(this._btnGroup);
            return;
        }// end function

        public destory() : void
        {
            if (this._btnGroup)
            {
                this._btnGroup.removeEventListener("SELECT", this.btnGroupSelectHandler,this);
                this._btnGroup.destory();
                this._btnGroup = null;
            }
            if (this._moveList)
            {
                this._moveList.destory();
                this._moveList = null;
            }
            return;
        }// end function

        public  isShowing() : Boolean
        {
            return this.visible;
        }// end function

        public show() : void
        {
            this.visible = true;
            this._btnGroup.keyEnable = true;
            this._btnGroup.setArrowIndex(2);
            return;
        }// end function

        public hide() : void
        {
            this.visible = false;
            this._btnGroup.keyEnable = false;
            return;
        }// end function

        private btnGroupSelectHandler(event:SetBtnEvent) : void
        {
            if (GameUI.showingDialog())
            {
                return;
            }
            var _loc_2 = event.selectedLabel;
            while (_loc_2 === "GAME TITLE")
            { 
                MainGame.I.goMenu();
                do
                {
                    this.showMoveList();
                    do
                    {
                        GameCtrl.I.resume(true);
                        break;
                    }while (_loc_2.toString() == "MOVE LIST")
            }while (_loc_2.toString() === "CONTINUE")
            return;
        }// end function
        }


        private showMoveList() : void
        {
            if (!this._moveList)
            {
                this._moveList = new MoveListSp();
                this._moveList.onBackSelect = this.hideMoveList;
                GameScene.instance.addChild(this._moveList);
            }
            this._btnGroup.keyEnable = false;
            this._moveList.show();
            return;
        }// end function

        private hideMoveList() : void
        {
            this._moveList.hide();
            this._btnGroup.keyEnable = true;
            return;
        }// end function

    }