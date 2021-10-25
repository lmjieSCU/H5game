class FightInfo extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(type: string, x: number, y: number, wid: number, high: number) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = wid;
        this.height = high;
    }

    private type: string;

    onEnter() {
        switch(this.type) {
            case 'level':
                this.createLvel();
                break;
            case 'house':
                this.createHouse();
                break;
            case 'rank':
                this.createRank();
                break;
            case 'match':
                this.createMatch();
                break;
        }
    }

    private createLvel() {
        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0xffffff);
        bg.graphics.drawRect(this.width/4, 0, this.width/2, 40);
        bg.graphics.endFill();
    }

    private createHouse() {}

    private createRank() {}

    private createMatch() {}


}