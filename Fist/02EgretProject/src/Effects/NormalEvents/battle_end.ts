class battle_end {
    public static type:string;
    public static addSprite9916(mc: zmovie.ZMovieClip, own_role: Role) {
        mc.addFrameScript(mc, [1, battle_end.frame1,2, battle_end.frame2,31, battle_end.frame31,51, battle_end.frame51,82, battle_end.frame82,92, battle_end.frame92,,112, battle_end.frame112]);
        return;
    }
    public static frame1(mc: zmovie.ZMovieClip) {
        mc.stop();
        FightMainRender.getInstance().Add(this, battle_end.onEnterFrame, [mc])
    }
    public static onEnterFrame(mc){
        if(_level0.timeOver)
        {
            if(_level0.P1_role.life == _level0.P2_role.life)
            {
                battle_end.type = "draw";
                mc.resetFrameStop();
            }
            else if(_level0.P1_role.status_2 == "land" && _level0.P1_role.status_3 == "normal" && (_level0.P2_role.status_2 == "land" && _level0.P2_role.status_3 == "normal"))
            {
                battle_end.type = "win";
                mc.resetFrameStop();
            }
            else if(_level0.P1_role.isKO || _level0.P2_role.isKO)
            {
                battle_end.type = "win";
                mc.resetFrameStop();
            }
        }
        else if(_level0.winner.status_2 == "land" && _level0.winner.status_3 == "normal")
        {
            battle_end.type = "win";
            mc.resetFrameStop();
        }
        else if(_level0.P1_role.isKO && _level0.P2_role.isKO)
        {
            battle_end.type = "draw";
            mc.resetFrameStop();
        }
        else if(_level0.winner.status_1 == "walk_f" || _level0.winner.status_1 == "dash_f")
        {
            battle_end.type = "win";
            mc.resetFrameStop();
        }
    }
    public static frame2(mc: zmovie.ZMovieClip) {
        FightMainRender.getInstance().Remove(this, battle_end.onEnterFrame);
    }

    public static frame31(mc: zmovie.ZMovieClip) {
        if(battle_end.type == "win")
        {
        //_level0.do_win();
        }
        else if(battle_end.type == "draw")
        {
        //_level0.do_draw();
        }
    }
    public static frame51(mc: zmovie.ZMovieClip) {
        if(battle_end.type == "draw")
        {
        return undefined;
        }
        // if(_level0.winner.mc._currentframe < _level0.winner.mc._totalframes)
        // {
        //     mc.stop();
        //     this.onEnterFrame = function()
        //     {
        //         if(_level0.winner.mc._currentframe == _level0.winner.mc._totalframes)
        //         {
        //             play();
        //             delete this.onEnterFrame;
        //         }
        //     };
        // }
    }
    public static frame82(mc: zmovie.ZMovieClip) {
        //_level0.transIn();
    }
    public static frame92(mc: zmovie.ZMovieClip) {
        //_level0.nextRound();
    }
    public static frame112(mc: zmovie.ZMovieClip) {
        mc.stop();
    }
}