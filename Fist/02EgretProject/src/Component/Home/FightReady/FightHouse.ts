class FightHouse extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(playInfo: PlayInfo) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    public onEnter() {
        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x00ff00);
        bg.graphics.drawRect(0, 0, this.width, 50);
        bg.graphics.endFill();
        // this.fightInfo.addChild(bg);
        // let houseNum1: number = 0;
        // let houseNum2: number = 0;
        // let houseNum3: number = 0;
        // for (let i = 0; i < 3; i++) {
        //     let num: egret.TextField = UI.addText(this.fightInfo, '0', i * 100 + 20, bg.height / 2, true);
        //     let shadown = new egret.Shape();
        //     shadown.graphics.beginFill(0xff00ff);
        //     shadown.graphics.drawRect(0, 0, 20, 20);
        //     shadown.graphics.endFill();
        //     shadown.x = num.x;
        //     shadown.y = num.y + num.height;
        //     shadown.width = 20;
        //     shadown.height = 20;
        //     shadown.touchEnabled = true;
        //     shadown.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //         console.log("hello")
        //         switch (i) {
        //             case 0:
        //                 if (houseNum1 >= 9) houseNum1 = -1;
        //                 houseNum1++;
        //                 num.$setText(houseNum1.toString());
        //                 console.log(houseNum1);
        //                 console.log(num);
        //                 break;
        //             case 1:
        //                 if (houseNum2 >= 9) houseNum2 = -1;
        //                 houseNum2++;
        //                 num.$setText(houseNum2.toString());
        //                 break;
        //             case 2:
        //                 if (houseNum3 >= 9) houseNum3 = -1;
        //                 houseNum3++;
        //                 num.$setText(houseNum3.toString());
        //                 break;
        //         }
        //     }, this.fightInfo)
        //     this.fightInfo.addChild(shadown);
        // }
        let chooseNumber = new ChooseNumber(3, 100, bg.height / 2);
        // this.fightInfo.addChild(chooseNumber);

        let addHouse: egret.TextField = UI.addText(this, "加入房间", this.width / 2, this.height / 2, true, 30, 0xffffff);
        addHouse.touchEnabled = true;
        addHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // const matchcode = houseNum1 * 100 + houseNum2 * 10 + houseNum3;
            const matchcode = chooseNumber.getNumber();
            // console.log(houseNum);
            this.$setTouchChildren(false);
            // this.stage.addChild(new MatchLayer(matchcode));
        }, this)
    }
}