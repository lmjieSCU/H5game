var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a7441 = (function () {
    function Mai_a7441() {
        this.firstCall = true;
        return;
    }
    Mai_a7441.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a7441.Firstowner == null) {
            Mai_a7441.Firstowner = owner;
            Mai_a7441.instance_First = new Mai_a7441();
            _level0.instance_First.push(this);
            return Mai_a7441.instance_First;
        }
        else if (Mai_a7441.Firstowner == owner) {
            if (firstCall) {
                Mai_a7441.instance_First.firstCall = true;
            }
            return Mai_a7441.instance_First;
        }
        else {
            if (Mai_a7441.instance_Second == null) {
                Mai_a7441.instance_Second = new Mai_a7441();
            }
            if (firstCall) {
                Mai_a7441.instance_Second.firstCall = true;
            }
            return Mai_a7441.instance_Second;
        }
    };
    Mai_a7441.addEventa7441 = function (MC, own_role) {
        var a7441 = Mai_a7441.getInstance(own_role);
        if (!a7441.firstCall) {
            return;
        }
        a7441.firstCall = false;
        MC.stop();
        MC.visible = false;
        a7441.mc = MC;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        // own_role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        // if(a7441.add_interval > 0)
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
        //       if(i == a7441.add_interval)
        //       {
        //          i = 0;
        //         //  role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        //       }
        //    };
    };
    return Mai_a7441;
}());
__reflect(Mai_a7441.prototype, "Mai_a7441");
//# sourceMappingURL=Mai_a7441.js.map