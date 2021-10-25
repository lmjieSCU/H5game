// class Stage_control2 extends egret.DisplayObjectContainer {
//     public static self: Stage_control2;
//     public _lockroot: boolean;
//     public bgSource;
//     public stageW;
//     public stageH;
//     public stage_c;
//     public stage_l;
//     public stage_r;
//     public char_mc;
//     public P1: Role;
//     public P2: Role;
//     public roleCharse_y: number;
//     public bgObjArray;
//     public bgMCArray;
//     public bgLoader;
//     public bg_base;

//     constructor() {
//         super();
//         Stage_control2.self = this;
//         this._lockroot = true;
//     } // End of the function
//     public init(_stageW, _stageH, _bg) {
//         this.bgSource = _bg;
//         this.stageW = _stageW;
//         this.stageH = _stageH;
//         this.stage_c = Math.floor(this.stageW / 2);
//         this.stage_l = 0;
//         this.stage_r = this.stageW;
//         this.initObj();
//     } // End of the function
//     public init2() {
//         // char_mc = _level0.char_mc;
//         //     this.P1 = _level0.P1_role;
//         //     this.P2 = _level0.P2_role;
//         //    this. roleCharse_y = this.P1.y;
//     } // End of the function


//     public startControl(c_target, rate_x, rate_y) {
//         if (c_target == this.P1) {
//             this.roleCharse_y = this.P1.y;
//             GameRender.I.Add(this, this.camera_role, [this.P1, rate_x, rate_y] );
//         }
//         else if (c_target == this.P2) {
//             this.roleCharse_y = this.P2.y;
//             GameRender.I.Add(this, this.camera_role, [this.P2, rate_x, rate_y] );
//         }
//         else {
//             this.roleCharse_y = this.P1.y < this.P2.y ? (this.P1.y) : (this.P2.y);
//             GameRender.I.Add(this, this.camera_center, [this.P2, rate_x, rate_y]);
// } // end else if
// } // End of the function

// public initObj() {
//     // this.bgObjArray = this.bgSource.bgArray;
//     // this.bgMCArray = new Array();
//     // this.bgLoader = this.bgSource;
//     // for (var _loc3 = 0; _loc3 < this.bgObjArray.length; ++_loc3) {
//     //     if (this.bgObjArray[_loc3].isBmd) {
//     //         var _loc2 = bgObjArray[_loc3].mc;
//     //         var _loc5 = new flash.display.BitmapData(_loc2._width, _loc2._height, true, 0);
//     //         _loc5.draw(_loc2);
//     //         var _loc4 = bgLoader.createEmptyMovieClip("bg_mc" + bgLoader.getNextHighestDepth(), bgLoader.getNextHighestDepth());
//     //         var _loc6 = new flash.display.BitmapData(stageW, stageH, true, 0);
//     //         _loc4.attachBitmap(_loc6, _loc4.getNextHighestDepth());
//     //         _loc4.bgBmd = _loc5;
//     //         _loc4.bgBmd_show = _loc6;
//     //         var _loc8 = -_loc2._x;
//     //         var _loc7 = _loc2._height > stageH ? (_loc2._height - stageH) : (0);
//     //         _loc4.bgRec = new flash.geom.Rectangle(_loc8, _loc7, stageW, stageH);
//     //         _loc4.bgPt = new flash.geom.Point(0, 0);
//     //         _loc4.v_rate = bgObjArray[_loc3].v_rate;
//     //         if (bgObjArray[_loc3].isBase) {
//     //             bg_base = _loc4;
//     //             bg_base.width = _loc2._width;
//     //         } // end if
//     //         _loc4.bgRec.y0 = _loc4.bgRec.y;
//     //         _loc6.copyPixels(_loc5, _loc4.bgRec, _loc4.bgPt);
//     //         bgMCArray.push(_loc4);
//     //         _loc2.swapDepths(_loc2._parent.getNextHighestDepth());
//     //         _loc2.removeMovieClip();
//     //         continue;
//     //     } // end if
//     //     _loc4 = bgObjArray[_loc3].mc;
//     //     _loc4.swapDepths(bgLoader.getNextHighestDepth());
//     //     _loc4.v_rate = bgObjArray[_loc3].v_rate;
//     //     bgMCArray.push(_loc4);
//     //     _loc4._y0 = _loc4._y;
//     //     if (bgObjArray[_loc3].isBase) {
//     //         bg_base = _loc4;
//     //         bg_base.width = _loc2._width;
//     //     } // end if
//     // } // end of for
// } // End of the function
// public resetPosY() {
//     // for (var _loc3 = 0; _loc3 < bgMCArray.length; ++_loc3) {
//     //     var _loc2 = bgMCArray[_loc3];
//     //     if (_loc2.v_rate == 0) {
//     //         continue;
//     //     } // end if
//     //     if (_loc2.bgBmd) {
//     //         _loc2.bgRec.y = _loc2.bgRec.y0;
//     //         _loc2.bgBmd_show.copyPixels(_loc2.bgBmd, _loc2.bgRec, _loc2.bgPt);
//     //         continue;
//     //     } // end if
//     //     _loc2._y = _loc2._y0;
//     // } // end of for
// } // End of the function
// public camera_center() {
//     if (_level0.inFreeze) {
//         return;
//     } // end if
//     if (_level0.inPause) {
//         return;
//     } // end if
//     if (ZoomControl.inZoom) {
//         return;
//     } // end if
//     var _loc4;
//     if (P1._x < P2._x) {
//         _loc4 = char_mc._x + P1._x + int((P2._x - P1._x) / 2);
//     }
//     else {
//         _loc4 = char_mc._x + P2._x + int((P1._x - P2._x) / 2);
//     } // end else if
//     var _loc7 = stage_c - _loc4;
//     var _loc5 = P1._y < P2._y ? (P1) : (P2);
//     var _loc6 = roleCharse_y - _loc5._y;
//     roleCharse_y = _loc5._y;
//     var _loc3 = _loc6 * 0.200000;
//     if (char_mc._y + _loc3 < 0) {
//         _loc3 = _loc3 - char_mc._y;
//     } // end if
//     var _loc2 = int(_loc7 >> 1);
//     if (P1.onEgde && P2.onEgde) {
//         _loc2 = 0;
//     } // end if
//     if (this.bgCheck(_loc2)) {
//         _loc2 = 0;
//     } // end if
//     if (_loc2 != 0) {
//         char_mc._x = char_mc._x + _loc2;
//     } // end if
//     if (_loc3 != 0) {
//         char_mc._y = char_mc._y + _loc3;
//     } // end if
//     this.do_scroll(_loc2, _loc3);
// } // End of the function

// public camera_role(role, rate_x, rate_y) {
//     if (_level0.inFreeze) {
//         return;
//     } // end if
//     if (_level0.inPause) {
//         return;
//     } // end if
//     if (ZoomControl.inZoom) {
//         return;
//     } // end if
//     var _loc4 = char_mc._x + role._x;
//     var _loc7 = stage_c - _loc4;
//     var _loc3 = _loc7 * rate_x;
//     var _loc6 = roleCharse_y - role._y;
//     roleCharse_y = role._y;
//     var _loc2 = _loc6 * rate_y;
//     if (char_mc._y + _loc2 < 0) {
//         _loc2 = _loc2 - char_mc._y;
//     } // end if
//     if (_loc3 != 0) {
//         char_mc._x = char_mc._x + _loc3;
//     } // end if
//     if (_loc2 != 0) {
//         char_mc._y = char_mc._y + _loc2;
//     } // end if
//     if (this.bgCheck(_loc3)) {
//         _loc3 = 0;
//     } // end if
//     this.do_scroll(_loc3, _loc2);
// } // End of the function

// public camera_P1() {
//     var _loc3;
//     _loc3 = char_mc._x + P1._x;
//     var _loc4 = stage_c - _loc3;
//     var _loc2 = int(_loc4 >> 1);
//     if (_loc2 == 0) {
//         return ("over");
//     } // end if
//     if (P1.onEgde) {
//         return ("over");
//     } // end if
//     if (this.bgCheck(_loc2)) {
//         return ("over");
//     } // end if
//     char_mc._x = char_mc._x + _loc2;
//     this.do_scroll(_loc2);
// } // End of the function

// public camera_P2() {
//     var _loc3;
//     _loc3 = char_mc._x + P2._x;
//     var _loc4 = stage_c - _loc3;
//     var _loc2 = int(_loc4 >> 1);
//     if (_loc2 == 0) {
//         return ("over");
//     } // end if
//     if (P2.onEgde) {
//         return ("over");
//     } // end if
//     if (this.bgCheck(_loc2)) {
//         return ("over");
//     } // end if
//     char_mc._x = char_mc._x + _loc2;
//     this.do_scroll(_loc2);
// } // End of the function

// public do_scroll(_Vx, _Vy) {
//     for (var _loc5 = 0; _loc5 < bgMCArray.length; ++_loc5) {
//         var _loc2 = bgMCArray[_loc5];
//         if (_loc2.v_rate == 0) {
//             continue;
//         } // end if
//         var _loc4 = _Vx * _loc2.v_rate;
//         var _loc3 = _Vy * _loc2.v_rate;
//         if (_loc2.bgBmd) {
//             if (_loc4 != 0) {
//                 _loc2.bgRec.x = _loc2.bgRec.x - _loc4;
//             } // end if
//             if (_loc3 != 0) {
//                 _loc2.bgRec.y = _loc2.bgRec.y - _loc3;
//             } // end if
//             _loc2.bgBmd_show.copyPixels(_loc2.bgBmd, _loc2.bgRec, _loc2.bgPt);
//             continue;
//         } // end if
//         if (_loc4 != 0) {
//             _loc2._x = _loc2._x + _loc4;
//         } // end if
//         if (_loc3 != 0) {
//             _loc2._y = _loc2._y + _loc3;
//         } // end if
//     } // end of for
// } // End of the function

// public bgCheck(v) {
//     if (bg_base.bgBmd) {
//         if (bg_base.bgRec.x - v <= 0) {
//             return (true);
//         }
//         else if (bg_base.bgRec.x + bg_base.bgRec.width - v >= bg_base.width) {
//             return (true);
//         } // end else if
//     }
//     else if (v > 0 && bg_base._x + v >= 0) {
//         return (true);
//     }
//     else if (v < 0 && bg_base._x + bg_base._width + v <= stageW) {
//         return (true);
//     } // end else if
// } // End of the function
// } // End of Class
