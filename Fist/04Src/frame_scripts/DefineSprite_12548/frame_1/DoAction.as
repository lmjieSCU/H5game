this._visible = false;
stopAllSounds();
var face1 = _root.charSelect_P1;
var face2 = _root.charSelect_P2;
if(_root.mode_role_P1 > 1)
{
   face1 = _root.charSelect_P1 + _root.mode_role_P1;
}
if(_root.mode_role_P2 > 1)
{
   face2 = _root.charSelect_P2 + _root.mode_role_P2;
}
face_p1.gotoAndStop(face1);
face_p2.gotoAndStop(face2);
