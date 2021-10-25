class Terry_dbdf_p {
    public static addSprite9208(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [3, Terry_dbdf_p.frame3,9, Terry_dbdf_p.frame9,12,Terry_dbdf_p.frame12, 34, Terry_dbdf_p.frame34]);
        return;
    }
    public static frame3(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a7978 = Terry_a7078.getInstance(_parentRole);
        a7978.s_type = "s1";
        a7978.f_time = 20;
        a7978.bgType = "1";
        a7978.roleName = "Terry";
        a7978.faceName = "";
    }

    public static frame9(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi4";
    }

    public static frame12(mc: zmovie.ZMovieClip) {
        let hitcheck_obj = Hero_HitCheck_obj.getInstance(mc);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "";
        hitcheck_obj.hurtAway = "hurt4";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 20;
        hitcheck_obj.Vy = 40;
        hitcheck_obj.a = 0;
        hitcheck_obj.g = 4;
        hitcheck_obj.freezeTime2 = 1;
        hitcheck_obj.freezeTime = 5;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 1;
        hitcheck_obj.d_rate = 4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire_h";
        hitcheck_obj.hitEff = "";
        hitcheck_obj.hitShinning = false;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        hitcheck_obj.nohit_status = [];
    }

    public static frame34(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}