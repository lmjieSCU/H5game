class MissonPanel extends BasePanel3D {

    public aimLabelDict: Dicts;

    public aimIconDict: Dicts;

    public levelTxt: egret.BitmapText;

    public constructor() {
        super();
        this.aimLabelDict = new Dicts();
        this.aimIconDict = new Dicts();
        return;
    }

    public close(): void {
        super.close();
        return;
    }

    public hide(): void {
        super.hide();
        return;
    }

    public init(): void {
        let bg = UI.addPic("missionbg_png", true, this, UI.WINSIZE_W / 2, 0);
        this.levelTxt = UI.addBitText(this, Model.levelModel.selectedLevel, "info_fnt", true, UI.WINSIZE_W / 2, -bg.height / 2 + 40, 1.3, 1.3);
        this.show();
        return;
    }

    public show(): void {
        let icon: egret.Bitmap = null;
        let label: egret.BitmapText = null;
        let aimArr: Array<string> = null;
        let aimType: number = 0;
        let aimValue: number = 0;
        let aimLabel: egret.BitmapText = null;
        let info: LevelCO = Config.levelConfig.getLevel(Model.levelModel.selectedLevel);
        let loc2: any = 0;
        for (let key in this.aimIconDict.dict) {
            icon = this.aimIconDict[key];
            icon.parent.removeChild(icon);
            icon = null;
            delete this.aimIconDict[key];
        }
        for (let key in this.aimLabelDict.dict) {
            label = this.aimLabelDict[key];
            label.parent.removeChild(label);
            label = null;
            delete this.aimLabelDict[key];
        }
        let posX = 0;
        if (info.aim.length != 1) {
            if (info.aim.length != 2) {
                if (info.aim.length == 3) {
                    posX = 200;
                }
            }
            else {
                posX = 240;
            }
        }
        else {
            posX = 300;
        }
        let i = 0;
        while (i < info.aim.length) {
            aimArr = info.aim[i].split(",");
            aimType = Number(aimArr[0]);
            aimValue = Number(aimArr[1]);
            icon = UI.addPic(AimType.AIM_ICONS[aimType] + "_png", true, this);
            if (aimType == AimType.SCORE) {
            }
            else {
                icon.scaleY = 0.8;
                icon.scaleX = 0.8;
            }
            icon.x = posX + i * 120;
            icon.y = 10;
            this.aimIconDict.put(aimType, icon);
            aimLabel = UI.addBitText(this, aimValue, "info_fnt", true, posX + 60 + i * 120, 10, 1.3, 1.3)
            this.aimLabelDict.dict[aimType] = aimLabel;
            ++i;
        }
        this.x = 0;
        this.y = -200;
        egret.Tween.get(this).to({ "y": UI.WINSIZE_H / 2 }, 1000).wait(1000)
            .to({ "y": -200 }, 1000).call(this.close, this);
        egret.setTimeout(function () {
            SoundCtrl.I.playmusic("boxmove");
        }, this, 1000);
        return;
    }

    public updateData(arg1: any): void {
        super.updateData(arg1);
        return;
    }

}
