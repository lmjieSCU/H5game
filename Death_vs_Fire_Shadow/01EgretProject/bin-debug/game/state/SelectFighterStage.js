// class SelectFighterStage  implements Istage
// {
//     private _selectState:number;
//     private _ui:zmovie.ZMovieClip;
//     private _config:SelectStageConfigVO;
//     private _curListConfig:SelectCharListConfigVO;
//     private _itemObj:Object;
//     private _p1Slt:SelecterItemUI;
//     private _p2Slt:SelecterItemUI;
//     private _p1SelectedGroup:SelectedFighterGroup;
//     private _p2SelectedGroup:SelectedFighterGroup;
//     private _mapSelectUI:MapSelectUI;
//     private _curStep:int = 0;
//     private _tweenTime:int = 500;
//     private _twoPlayerSelectFin:Boolean;
//     public static AUTO_FINISH:Boolean = true;
//     private static const SELECT_STATE_FIGHTER:int = 0;
//     private static const SELECT_STATE_ASSIST:int = 1;
//     private static const SELECT_STATE_MAP:int = 2;
//     public function SelectFighterStage()
//     {
//         return;
//     }// end function
//     public function get display() : DisplayObject
//     {
//         return this._ui;
//     }// end function
//     public function build() : void
//     {
//         this._ui = ResUtils.I.createDisplayObject(ResUtils.I.select, "stg_select");
//         this._config = GameData.I.config.select_config;
//         GameRender.add(render);
//         GameInputer.focus();
//         GameInputer.enabled = false;
//         nextStep();
//         SoundCtrl.I.BGM(AssetManager.I.getSound("select"));
//         StateCtrl.I.clearTrans();
//         KeyBoarder.focus();
//         return;
//     }// end function
//     private function initFighter() : void
//     {
//         this.trace("初始化选人");
//         clear();
//         this._selectState = 0;
//         buildList(this._config.charList);
//         GameData.I.p1Select = new SelectVO();
//         if (GameMode.isVsPeople() || GameMode.isVsCPU())
//         {
//             GameData.I.p2Select = new SelectVO();
//         }
//         GameInputer.enabled = false;
//         return;
//     }// end function
//     private function initAssist() : void
//     {
//         this.trace("初始化辅助");
//         clear();
//         this._selectState = 1;
//         buildList(this._config.assistList);
//         GameInputer.enabled = false;
//         return;
//     }// end function
//     private function fadOutList(param1:Function = null) : void
//     {
//         var _loc_4:* = NaN;
//         GameInputer.enabled = false;
//         var _loc_3:* = GameConfig.GAME_SIZE.x / 2 - 30;
//         var _loc_2:* = GameConfig.GAME_SIZE.y / 2 - 30;
//         for each (_loc_5 in this._itemObj)
//         {
//             _loc_4 = Math.random() * 0.1;
//             TweenLite.to(_loc_5.ui, 0.2, {x:_loc_3, y:_loc_2, scaleX:0, scaleY:0, delay:_loc_4});
//         }
//         if (param1 != null)
//         {
//             TweenLite.delayedCall(0.3, param1);
//         }
//         return;
//     }// end function
//     private function clear() : void
//     {
//         if (this._itemObj)
//         {
//             for each (_loc_1 in this._itemObj)
//             {
//                 _loc_1.destory();
//             }
//             this._itemObj = null;
//         }
//         if (this._p1Slt)
//         {
//             this._p1Slt.destory();
//             this._p1Slt = null;
//         }
//         if (this._p2Slt)
//         {
//             this._p2Slt.destory();
//             this._p2Slt = null;
//         }
//         if (this._mapSelectUI)
//         {
//             this._mapSelectUI.destory();
//             this._mapSelectUI = null;
//         }
//         if (this._p1SelectedGroup)
//         {
//             this._p1SelectedGroup.destory();
//             this._p1SelectedGroup = null;
//         }
//         if (this._p2SelectedGroup)
//         {
//             this._p2SelectedGroup.destory();
//             this._p2SelectedGroup = null;
//         }
//         return;
//     }// end function
//     private function buildList(param1:SelectCharListConfigVO) : void
//     {
//         var _loc_7:* = 0;
//         var _loc_12:* = null;
//         var _loc_3:* = null;
//         var _loc_9:* = NaN;
//         var _loc_8:* = NaN;
//         var _loc_14:* = NaN;
//         var _loc_10:* = this._config.x + this._config.left;
//         var _loc_11:* = this._config.y + this._config.top;
//         var _loc_6:* = param1.HCount > 1 ? ((this._config.width - this._config.unitSize.x - this._config.left - this._config.right) / (param1.HCount - 1)) : (0);
//         var _loc_5:* = param1.VCount > 1 ? ((this._config.height - this._config.unitSize.y - this._config.top - this._config.bottom) / (param1.VCount - 1)) : (0);
//         var _loc_13:* = param1.list;
//         this._curListConfig = param1;
//         this._itemObj = {};
//         var _loc_4:* = GameConfig.GAME_SIZE.x / 2 - 30;
//         var _loc_2:* = GameConfig.GAME_SIZE.y / 2 - 30;
//         while (_loc_7 < _loc_13.length)
//         {
//             _loc_12 = _loc_13[_loc_7];
//             _loc_3 = addFighterItem(_loc_12);
//             if (_loc_3)
//             {
//                 _loc_9 = _loc_10 + _loc_6 * _loc_3.selectData.x;
//                 _loc_8 = _loc_11 + _loc_5 * _loc_3.selectData.y;
//                 if (_loc_3.selectData.offset)
//                 {
//                     _loc_9 = _loc_9 + _loc_3.selectData.offset.x;
//                     _loc_8 = _loc_8 + _loc_3.selectData.offset.y;
//                 }
//                 _loc_3.ui.scaleX = 0;
//                 _loc_3.ui.scaleY = 0;
//                 _loc_3.ui.x = _loc_4;
//                 _loc_3.ui.y = _loc_2;
//                 _loc_14 = Math.random() * (this._tweenTime - 300) / 1000;
//                 TweenLite.to(_loc_3.ui, 0.3, {x:_loc_9, y:_loc_8, delay:_loc_14, scaleX:1, scaleY:1, ease:Back.easeOut});
//             }
//             _loc_7++;
//         }
//         return;
//     }// end function
//     private function addFighterItem(param1:SelectCharListItemVO) : SelectFighterItem
//     {
//         if (!param1.fighterID)
//         {
//             return null;
//         }
//         var _loc_2:* = this._selectState == 1 ? (AssisterModel.I.getAssister(param1.fighterID)) : (FighterModel.I.getFighter(param1.fighterID));
//         if (!_loc_2)
//         {
//             Debugger.log("SelectFighterStage.addFighterItem :: 未找到角色数据：" + param1.fighterID);
//             return null;
//         }
//         var _loc_4:* = 60;
//         var _loc_3:* = 60;
//         var _loc_5:* = new SelectFighterItem(_loc_2, param1);
//         this._ui.addChild(_loc_5.ui);
//         this._itemObj[param1.x + "," + param1.y] = _loc_5;
//         return _loc_5;
//     }// end function
//     private function getFighterItem(param1:int, param2:int) : SelectFighterItem
//     {
//         if (!this._itemObj)
//         {
//             return null;
//         }
//         return this._itemObj[param1 + "," + param2];
//     }// end function
//     private function initSelecter() : void
//     {
//         GameInputer.enabled = true;
//         if (GameMode.isVsPeople())
//         {
//             initSelecterP1();
//             initSelecterP2();
//             this._twoPlayerSelectFin = false;
//         }
//         else
//         {
//             initSelecterP1();
//         }
//         return;
//     }// end function
//     private function initSelecterP1() : void
//     {
//         this._p1Slt = SelectUIFactory.createSelecter(1);
//         this._p1Slt.isSelectAssist = this._selectState == 1;
//         this._p1Slt.selectTimesCount = GameMode.isTeamMode() && !this._p1Slt.isSelectAssist ? (3) : (1);
//         this._ui.addChild(this._p1Slt.ui);
//         this._ui.addChild(this._p1Slt.group);
//         moveSlt(this._p1Slt, 0, 0);
//         return;
//     }// end function
//     private function initSelecterP2() : void
//     {
//         this._p2Slt = SelectUIFactory.createSelecter(2);
//         this._p2Slt.isSelectAssist = this._selectState == 1;
//         this._p2Slt.selectTimesCount = GameMode.isTeamMode() && !this._p2Slt.isSelectAssist ? (3) : (1);
//         this._ui.addChild(this._p2Slt.ui);
//         this._ui.addChild(this._p2Slt.group);
//         moveSlt(this._p2Slt, 9, 0);
//         return;
//     }// end function
//     private function moveSlt(param1:SelecterItemUI, param2:int, param3:int, param4:Boolean = true) : Boolean
//     {
//         var _loc_10:* = false;
//         var _loc_12:* = false;
//         var _loc_8:* = false;
//         var _loc_6:* = false;
//         var _loc_9:* = 0;
//         var _loc_11:* = 0;
//         var _loc_5:* = false;
//         var _loc_7:* = getFighterItem(param2, param3);
//         if (!getFighterItem(param2, param3) || _loc_7 && param1.isSelected(_loc_7.selectData.fighterID))
//         {
//             if (!param4)
//             {
//                 return true;
//             }
//             if (param2 > param1.x)
//             {
//                 _loc_10 = true;
//                 _loc_11 = 0;
//                 while (_loc_11 < this._curListConfig.HCount)
//                 {
//                     _loc_9 = param2 + _loc_11;
//                     if (_loc_9 > (this._curListConfig.HCount - 1))
//                     {
//                         _loc_9 = _loc_9 - this._curListConfig.HCount;
//                     }
//                     _loc_7 = getFighterItem(_loc_9, param1.y);
//                     if (!(_loc_7 && !param1.isSelected(_loc_7.selectData.fighterID)))
//                     {
//                         _loc_11++;
//                     }
//                 }
//             }
//             if (param2 < param1.x)
//             {
//                 _loc_6 = true;
//                 _loc_11 = 0;
//                 while (_loc_11 < this._curListConfig.HCount)
//                 {
//                     _loc_9 = param2 - _loc_11;
//                     if (_loc_9 < 0)
//                     {
//                         _loc_9 = this._curListConfig.HCount + _loc_9;
//                     }
//                     _loc_7 = getFighterItem(_loc_9, param1.y);
//                     if (!(_loc_7 && !param1.isSelected(_loc_7.selectData.fighterID)))
//                     {
//                         _loc_11++;
//                     }
//                 }
//             }
//             if (param3 > param1.y)
//             {
//                 _loc_8 = true;
//                 if (param3 > (this._curListConfig.VCount - 1))
//                 {
//                     param3 = 0;
//                 }
//                 _loc_11 = param3;
//                 while (_loc_11 < this._curListConfig.VCount)
//                 {
//                     _loc_7 = getHLineFighter(param1.x, _loc_11);
//                     if (!_loc_7)
//                     {
//                         _loc_11++;
//                     }
//                 }
//             }
//             if (param3 < param1.y)
//             {
//                 _loc_12 = true;
//                 if (param3 < 0)
//                 {
//                     param3 = this._curListConfig.VCount - 1;
//                 }
//                 _loc_11 = param3;
//                 while (_loc_11 >= 0)
//                 {
//                     _loc_7 = getHLineFighter(param1.x, _loc_11);
//                     if (!_loc_7)
//                     {
//                         _loc_11--;
//                     }
//                 }
//             }
//         }
//         if (!_loc_7)
//         {
//             return false;
//         }
//         param1.x = _loc_7.selectData.x;
//         param1.y = _loc_7.selectData.y;
//         if (param1.isSelected(_loc_7.selectData.fighterID))
//         {
//             if (_loc_12 || _loc_8)
//             {
//                 _loc_5 = moveSlt(param1, (param1.x + 1), param1.y);
//                 if (!_loc_5)
//                 {
//                     if (_loc_12)
//                     {
//                         moveSlt(param1, param1.x, (param1.y - 1));
//                     }
//                     if (_loc_8)
//                     {
//                         moveSlt(param1, param1.x, (param1.y + 1));
//                     }
//                 }
//             }
//             return true;
//         }
//         param1.moveTo(_loc_7.ui.x, _loc_7.ui.y);
//         param1.currentFighter = _loc_7.fighterData;
//         if (param1.group)
//         {
//             param1.group.updateFighter(param1.currentFighter);
//         }
//         return true;
//     }// end function
//     private function getHLineFighter(param1:int, param2:int) : SelectFighterItem
//     {
//         var _loc_5:* = 0;
//         var _loc_4:* = 0;
//         var _loc_3:* = null;
//         while (true)
//         {
//             _loc_4 = param1 + _loc_5;
//             if (_loc_4 >= 0 && _loc_4 < this._curListConfig.HCount)
//             {
//                 _loc_3 = getFighterItem(_loc_4, param2);
//                 if (_loc_3)
//                 {
//                     return _loc_3;
//                 }
//             }
//             if (_loc_5 == 0)
//             {
//                 _loc_5 = 1;
//                 continue;
//             }
//             if (_loc_5 > 0)
//             {
//                 _loc_5 = _loc_5 * -1;
//                 continue;
//             }
//             if (_loc_5 < -this._curListConfig.HCount)
//             {
//                 return null;
//             }
//             _loc_5 = _loc_5 * -1;
//             _loc_5++;
//         }
//         return null;
//     }// end function
//     private function render() : void
//     {
//         var _loc_1:* = null;
//         if (GameInputer.back(1))
//         {
//             if (GameUI.showingDialog())
//             {
//                 GameUI.closeConfrim();
//             }
//             else
//             {
//                 GameUI.confrim("BACK TITLE?", "返回到主菜单？", MainGame.I.goMenu);
//             }
//         }
//         if (GameUI.showingDialog())
//         {
//             return;
//         }
//         if (this._p1Slt && this._p1Slt.enabled)
//         {
//             _loc_1 = this._p1Slt.inputType;
//             if (GameInputer.up(_loc_1, 1))
//             {
//                 moveSlt(this._p1Slt, this._p1Slt.x, (this._p1Slt.y - 1));
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.down(_loc_1, 1))
//             {
//                 moveSlt(this._p1Slt, this._p1Slt.x, (this._p1Slt.y + 1));
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.left(_loc_1, 1))
//             {
//                 moveSlt(this._p1Slt, (this._p1Slt.x - 1), this._p1Slt.y);
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.right(_loc_1, 1))
//             {
//                 moveSlt(this._p1Slt, (this._p1Slt.x + 1), this._p1Slt.y);
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.select(_loc_1, 1))
//             {
//                 this._p1Slt.select(playerSeltBack);
//                 SoundCtrl.I.sndConfrim();
//             }
//         }
//         if (this._p2Slt && this._p2Slt.enabled)
//         {
//             _loc_1 = this._p2Slt.inputType;
//             if (GameInputer.up(_loc_1, 1))
//             {
//                 moveSlt(this._p2Slt, this._p2Slt.x, (this._p2Slt.y - 1));
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.down(_loc_1, 1))
//             {
//                 moveSlt(this._p2Slt, this._p2Slt.x, (this._p2Slt.y + 1));
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.left(_loc_1, 1))
//             {
//                 moveSlt(this._p2Slt, (this._p2Slt.x - 1), this._p2Slt.y);
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.right(_loc_1, 1))
//             {
//                 moveSlt(this._p2Slt, (this._p2Slt.x + 1), this._p2Slt.y);
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.select(_loc_1, 1))
//             {
//                 this._p2Slt.select(playerSeltBack);
//                 SoundCtrl.I.sndConfrim();
//             }
//         }
//         if (this._mapSelectUI && this._mapSelectUI.enabled)
//         {
//             _loc_1 = this._mapSelectUI.inputType;
//             if (GameInputer.left(_loc_1, 1))
//             {
//                 this._mapSelectUI.prev();
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.right(_loc_1, 1))
//             {
//                 this._mapSelectUI.next();
//                 SoundCtrl.I.sndSelect();
//             }
//             if (GameInputer.select(_loc_1, 1))
//             {
//                 this._mapSelectUI.select(onMapSelect);
//                 SoundCtrl.I.sndConfrim();
//             }
//         }
//         return;
//     }// end function
//     public function get p1SelectFinish() : Boolean
//     {
//         return this._p1Slt && this._p1Slt.selectFinish();
//     }// end function
//     public function get p2SelectFinish() : Boolean
//     {
//         return this._p2Slt && this._p2Slt.selectFinish();
//     }// end function
//     public function setSelect(param1:int, param2:Array) : void
//     {
//         var _loc_3:* = param1 == 1 ? (this._p1Slt) : (this._p2Slt);
//         _loc_3.setCurrentSelect(param2);
//         _loc_3.removeSelecter();
//         SoundCtrl.I.sndConfrim();
//         return;
//     }// end function
//     private function playerSeltBack(param1:SelecterItemUI) : void
//     {
//         var _loc_2:* = null;
//         var _loc_3:* = 0;
//         if (param1.selectFinish())
//         {
//             if (GameMode.isVsPeople())
//             {
//                 GameEvent.dispatchEvent("SELECT_FIGHTER_STEP", param1.getCurrentSelectes());
//                 _loc_2 = param1 == this._p1Slt ? (this._p2Slt) : (this._p1Slt);
//                 if (_loc_2 && _loc_2.selectFinish() && !this._twoPlayerSelectFin)
//                 {
//                     this._twoPlayerSelectFin = true;
//                     if (!AUTO_FINISH)
//                     {
//                         return;
//                     }
//                     nextStep();
//                 }
//             }
//             else
//             {
//                 nextStep();
//             }
//             param1.destory();
//         }
//         else
//         {
//             _loc_3 = param1 == this._p1Slt == 1 ? (1) : (-1);
//             moveSlt(param1, param1.x + _loc_3, param1.y, true);
//         }
//         return;
//     }// end function
//     public function nextStep() : void
//     {
//         switch(this._curStep) branch count is:<5>[23, 43, 120, 143, 256, 279] default offset is:<286>;
//         initFighter();
//         this._curStep = 1;
//         ;
//         if (GameMode.isVsCPU())
//         {
//             this._p1Slt.removeSelecter();
//             this._p1Slt.enabled = false;
//             initSelecterP2();
//             this._p2Slt.inputType = "P1";
//             this._curStep = 2;
//         }
//         else
//         {
//             fadOutList(initAssist);
//             this._curStep = 3;
//         }
//         ;
//         fadOutList(initAssist);
//         this._curStep = 3;
//         ;
//         if (GameMode.isVsCPU())
//         {
//             this._p1Slt.removeSelecter();
//             this._p1Slt.enabled = false;
//             initSelecterP2();
//             this._p2Slt.inputType = "P1";
//             this._curStep = 4;
//         }
//         else if (GameMode.isVsCPU() || GameMode.isVsPeople())
//         {
//             fadOutList(initMap);
//             this._curStep = 5;
//         }
//         else
//         {
//             startAcradeGame();
//         }
//         ;
//         this._curStep = 5;
//         fadOutList(initMap);
//         ;
//         selectFinish();
//         return;
//     }// end function
//     private function initMap() : void
//     {
//         this.trace("选择地图");
//         clear();
//         GameInputer.enabled = false;
//         this._mapSelectUI = new MapSelectUI();
//         this._ui.addChild(this._mapSelectUI);
//         var oldX:* = this._mapSelectUI.x;
//         var oldY:* = this._mapSelectUI.y;
//         this._mapSelectUI.scaleX = 0;
//         this._mapSelectUI.scaleY = 0;
//         this._mapSelectUI.x = GameConfig.GAME_SIZE.x / 2;
//         this._mapSelectUI.y = GameConfig.GAME_SIZE.y / 2;
//         TweenLite.to(this._mapSelectUI, 0.3, {x:oldX, y:oldY, scaleX:1, scaleY:1, ease:Back.easeOut, onComplete:function () : void
//         {
//             if (this._mapSelectUI)
//             {
//                 this._mapSelectUI.inputType = "P1";
//                 this._mapSelectUI.enabled = true;
//             }
//             GameInputer.enabled = true;
//             return;
//         }// end function
//         });
//         return;
//     }// end function
//     private function onMapSelect() : void
//     {
//         nextStep();
//         return;
//     }// end function
//     private function startAcradeGame() : void
//     {
//         MessionModel.I.initMession();
//         selectFinish();
//         return;
//     }// end function
//     private function selectFinish() : void
//     {
//         GameEvent.dispatchEvent("SELECT_FIGHTER_FINISH");
//         if (!AUTO_FINISH)
//         {
//             return;
//         }
//         goLoadGame();
//         return;
//     }// end function
//     public function goLoadGame() : void
//     {
//         this.trace("开始游戏");
//         StateCtrl.I.transIn(MainGame.I.loadGame);
//         return;
//     }// end function
//     public function afterBuild() : void
//     {
//         return;
//     }// end function
//     public function destory(param1:Function = null) : void
//     {
//         clear();
//         GameRender.remove(render);
//         GameInputer.enabled = false;
//         SoundCtrl.I.BGM(null);
//         GameUI.closeConfrim();
//         return;
//     }// end function
// } 
//# sourceMappingURL=SelectFighterStage.js.map