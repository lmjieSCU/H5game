class DailyLAyer extends Scene{
    public static instance:DailyLAyer;
    public _dailyChoose:Array<egret.Bitmap> = [];
    public _dailyGot:Array<egret.Bitmap> = [];
    public _gotText:Array<egret.Bitmap> = [];
    public _getBtn:Array<egret.Bitmap> = [];

    public constructor(){
        super();
    }

    protected onEnter(){
        DailyLAyer.instance = this;

        //背景
        UI.addPic(this, "checkin_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.addPic(this, "checkin_box_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.addPic(this, "checkin_word_award_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2-135, true);

        //签到板块
        this._dailyGot[0] = UI.addPic(this, "checkin_day1_shadow_png", UI.WINSIZE_W / 2-200, UI.WINSIZE_H / 2-50, true);
        this._gotText[0] = UI.addPic(this, "checkin_linqu_png", UI.WINSIZE_W / 2-200, UI.WINSIZE_H / 2-50, true);
        this._dailyChoose[1] = UI.addPic(this, "checkin_day2_png", UI.WINSIZE_W / 2-95, UI.WINSIZE_H / 2-50, true);
        this._dailyChoose[2] = UI.addPic(this, "checkin_day3_png", UI.WINSIZE_W / 2+10, UI.WINSIZE_H / 2-50, true);
        this._dailyChoose[3] = UI.addPic(this, "checkin_day4_png", UI.WINSIZE_W / 2-200, UI.WINSIZE_H / 2+80, true);
        this._dailyChoose[4] = UI.addPic(this, "checkin_day5_png", UI.WINSIZE_W / 2-95, UI.WINSIZE_H / 2+80, true);
        this._dailyChoose[5] = UI.addPic(this, "checkin_day6_png", UI.WINSIZE_W / 2+10, UI.WINSIZE_H / 2+80, true);
        this._dailyChoose[6] = UI.addPic(this, "checkin_day7_png", UI.WINSIZE_W / 2+160, UI.WINSIZE_H / 2+10, true);
        this._getBtn = UI.addBtn(this,"checkin_button_png", UI.WINSIZE_W / 2+160, UI.WINSIZE_H / 2+150, true, function(arg){//领取按钮

        });

    }

    protected onExit(){

    }
}