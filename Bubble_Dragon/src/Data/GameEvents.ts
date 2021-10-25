class GameEvents extends egret.Event {

    public static OPEN_GAME_UI: string = "OPEN_GAME_UI";

    public static OPEN_PAUSE_UI: string = "OPEN_PAUSE_UI";

    public static OPEN_MENU_UI: string = "OPEN_MENU_UI";

    public static OPEN_MAP_UI: string = "OPEN_MAP_UI";

    public static OPEN_SELECT_LEVEL_UI: string = "OPEN_SELECT_LEVEL_UI";

    public static OPEN_VICTORY_UI: string = "OPEN_VICTORY_UI";

    public static OPEN_FAILED_UI: string = "OPEN_FAILED_UI";

    public static OPEN_GAME_END_UI: string = "OPEN_GAME_END_UI";

    public static OPEN_SHOP_UI: "OPEN_SHOP_UI";

    public static OPEN_TIP_UI: string = "OPEN_TIP_UI";

    public static SCORE_CHANGE: string = "SCORE_CHANGE";

    public static STEP_CHANGE: string = "STEP_CHANGE";

    public static AIMS_CHANGE: string = "AIMS_CHANGE";

    public static TIME_CHANGE: string = "TIME_CHANGE";

    public static OPEN_GUIDE: string = "OPEN_GUIDE";


    public constructor(type: string, data: Object = null, bubbles: boolean = false, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
        this.data = data;
        return;
    }
}

