var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a15606 = (function () {
    function Chunli_a15606() {
        this.firstCall = true;
        return;
    }
    Chunli_a15606.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a15606.Firstowner == null) {
            Chunli_a15606.Firstowner = owner;
            Chunli_a15606.instance_First = new Chunli_a15606();
            _level0.instance_First.push(this);
            return Chunli_a15606.instance_First;
        }
        else if (Chunli_a15606.Firstowner == owner) {
            if (firstCall) {
                Chunli_a15606.instance_First.firstCall = true;
            }
            return Chunli_a15606.instance_First;
        }
        else {
            if (Chunli_a15606.instance_Second == null) {
                Chunli_a15606.instance_Second = new Chunli_a15606();
            }
            if (firstCall) {
                Chunli_a15606.instance_Second.firstCall = true;
            }
            return Chunli_a15606.instance_Second;
        }
    };
    Chunli_a15606.addEventa15606 = function (MC, own_role) {
        var a15606 = Chunli_a15606.getInstance(own_role);
        if (!a15606.firstCall) {
            return;
        }
        a15606.firstCall = false;
        MC.stop();
        MC.visible = false;
        a15606.mc = MC;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        // own_role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        // if(a15606.add_interval > 0)
        // {
        //    var i = 0;
        //    onEnterFrame = function()
        //    {
        //       if(_level0.inPause)
        //       {
        //          return undefined;
        //       }
        //       if(own_role.inFreeze)
        //       {
        //          return undefined;
        //       }
        //       i++;
        //       if(i == a15606.add_interval)
        //       {
        //          i = 0;
        //         //  role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        //       }
        //    };
    };
    return Chunli_a15606;
}());
__reflect(Chunli_a15606.prototype, "Chunli_a15606");
//# sourceMappingURL=Chunli_a15606.js.map