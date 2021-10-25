var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_a5765 = (function () {
    function K_a5765() {
        this.firstCall = true;
        return;
    }
    K_a5765.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a5765.Firstowner == null) {
            K_a5765.Firstowner = owner;
            K_a5765.instance_First = new K_a5765();
            _level0.instance_First.push(this);
            return K_a5765.instance_First;
        }
        else if (K_a5765.Firstowner == owner) {
            if (firstCall) {
                K_a5765.instance_First.firstCall = true;
            }
            return K_a5765.instance_First;
        }
        else {
            if (K_a5765.instance_Second == null) {
                K_a5765.instance_Second = new K_a5765();
            }
            if (firstCall) {
                K_a5765.instance_Second.firstCall = true;
            }
            return K_a5765.instance_Second;
        }
    };
    K_a5765.addEventa5765 = function (MC, own_role) {
        var a5765 = K_a5765.getInstance(own_role);
        if (!a5765.firstCall) {
            return;
        }
        a5765.firstCall = false;
        MC.stop();
        MC.visible = false;
        a5765.mc = MC;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        // own_role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        // if(a5765.add_interval > 0)
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
        //       if(i == a5765.add_interval)
        //       {
        //          i = 0;
        //         //  role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        //       }
        //    };
    };
    return K_a5765;
}());
__reflect(K_a5765.prototype, "K_a5765");
//# sourceMappingURL=K_a5765.js.map