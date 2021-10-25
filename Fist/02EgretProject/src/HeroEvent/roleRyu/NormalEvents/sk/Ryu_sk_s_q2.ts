class Ryu_sk_s_q2 {

    public static addSprite21068(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [2, Ryu_sk_s_q2.frame2, 4, Ryu_sk_s_q2.frame4, 15, Ryu_sk_s_q2.frame15, 16, Ryu_sk_s_q2.frame16, 35, Ryu_sk_s_q2.frame35, 40, Ryu_sk_s_q2.frame40, 43, Ryu_sk_s_q2.frame43, 64, Ryu_sk_s_q2.frame64, 66, Ryu_sk_s_q2.frame66, 68, Ryu_sk_s_q2.frame68, 71, Ryu_sk_s_q2.frame71, 82, Ryu_sk_s_q2.frame82, 94, Ryu_sk_s_q2.frame94, 95, Ryu_sk_s_q2.frame95, 114, Ryu_sk_s_q2.frame114]);
        return;
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s2";
        a20717.f_time = 20;
        a20717.bgType = "2";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    }

    public static frame4(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "ryu_exXie";
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_up2";
    }

    public static frame15(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20802.getInstance(_parentRole).nohitFrame = "nohit";
    }

    public static frame16(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_speed1";
        Ryu_a20657.getInstance(_parentRole).name = "ryu_assist_ken";
    }

    public static frame35(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 35;
        a20401.flag = "";
        a20401.target = "";
    }

    public static frame40(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        let pos = _parentRole.opp.x + 50 * _parentRole.dir;

        if ((_parentRole.parent.localToGlobal(pos)).x >= GameConfig.FightWidth) {
            pos = (_parentRole.parent.globalToLocal(GameConfig.FightWidth)).x;
        }
        else if ((_parentRole.parent.localToGlobal(pos)).x <= 0) {
            pos = (_parentRole.parent.globalToLocal(0)).x;
        }
        _parentRole.x = pos;
    }

    public static frame43(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkSide_abs();
    }

    public static frame64(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_up3";
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 25;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
    }

    public static frame66(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 27;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame68(mc: zmovie.ZMovieClip) {
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 25;
        hitcheck.a = 3;
        hitcheck.g = 4;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    }

    public static frame71(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        let hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 17;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 4;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";

        let a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 8;
        a20238.Vy = 38;
        a20238.Va = 0;
        a20238.Vg = 4.5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    }

    public static frame82(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "";
        mc.stop();
    }

    public static frame94(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }

    public static frame95(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "";
    }

    public static frame114(mc: zmovie.ZMovieClip) {
        let _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    }
}
