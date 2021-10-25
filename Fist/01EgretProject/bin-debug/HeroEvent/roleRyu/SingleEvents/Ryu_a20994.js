var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20994 = (function () {
    function Ryu_a20994() {
        return;
    }
    Ryu_a20994.getInstance = function (owner) {
        if (Ryu_a20994.Firstowner == null) {
            Ryu_a20994.Firstowner = owner;
            Ryu_a20994.instance_First = new Ryu_a20994();
            _level0.instance_First.push(this);
            return Ryu_a20994.instance_First;
        }
        else if (Ryu_a20994.Firstowner == owner) {
            return Ryu_a20994.instance_First;
        }
        else {
            if (Ryu_a20994.instance_Second == null) {
                Ryu_a20994.instance_Second = new Ryu_a20994();
            }
            return Ryu_a20994.instance_Second;
        }
    };
    Ryu_a20994.addEventa20994 = function (MC, own_role) {
        MC.stop();
        MC.visible = false;
        var a5765 = Ryu_a20994.getInstance(own_role);
        a5765.mc = MC;
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
    return Ryu_a20994;
}());
__reflect(Ryu_a20994.prototype, "Ryu_a20994");
//# sourceMappingURL=Ryu_a20994.js.map