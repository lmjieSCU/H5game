class LaserEffect extends Elements {


    public suns: Array<egret.Bitmap>;

    public static pool: BasePool = new BasePool(LaserEffect, 20);

    public constructor() {
        super();
        this.suns = new Array<egret.Bitmap>();
        for (let loc1 = 0; loc1 < 6; loc1++) {
            let loc2 = UI.addPic("sun_png", true, this);
            this.suns.push(loc2);
        }
        return;
    }

    public setData(arg1: number): void {
        let loc2: egret.Bitmap = null;
        let loc3 = NaN;
        let loc4 = NaN;
        let loc1 = 0;
        while (loc1 < 6) {
            loc2 = this.suns[loc1];
            loc2.scaleX = 0.6 - loc1 * 0.05;
            loc2.scaleY = 0.6 - loc1 * 0.05;
            loc3 = Math.cos(Math.PI + arg1) * loc1 * 20;
            loc4 = Math.sin(Math.PI + arg1) * loc1 * 20;
            loc2.x = loc3;
            loc2.y = loc4;
            this.suns.push(loc2);
            ++loc1;
        }
        return;
    }

    public Animation(candy: Candy, matches: Array<Candy>, index: number, changeStatus: number, isRandomLine: boolean = false, callType: boolean) {
        let disX = matches[index].x - candy.x;
        let disY = matches[index].y - candy.y;
        let dis = Math.sqrt(disX * disX + disY * disY);
        let radian = Math.atan2(disY, disX);
        this.setData(radian);
        egret.Tween.get(this).to({ "x": matches[index].x, "y": matches[index].y }, dis * 2.5).call(this.LaserEffectEffectCall, this, [index, candy, matches, changeStatus, isRandomLine, callType]);
    }

    public LaserEffectEffectCall(index: number, candyA: Candy, matches: Array<Candy>, changeStatus: number, isRandomLine: boolean, callType: boolean) {
        this.parent.removeChild(this);
        LaserEffect.pool.put(this);
        if (isRandomLine) {
            if (Math.random() < 0.5) {
                matches[index].setSpecialStatus(CandySpecialStatus.VERT, true);
            }
            else {
                matches[index].setSpecialStatus(CandySpecialStatus.HORIZ, true);
            }
        }
        else {
            matches[index].setSpecialStatus(changeStatus, true);
        }
        if (index != matches.length - 1) {
            return;
        }
        if (!callType) {
            GameCtrl.I._fightCtrl.tempScore = 300;
            matches.push(candyA);
            GameCtrl.I._fightCtrl.removeCandys(matches);
            GameCtrl.I._fightCtrl.waitDrop();
        } else {
            GameCtrl.I._fightCtrl.tempScore = 300;
            GameCtrl.I._fightCtrl.changeCandysStatus(matches, CandySpecialStatus.BOMB);
            matches.push(candyA);
            GameCtrl.I._fightCtrl.removeCandys(matches);
            GameCtrl.I._fightCtrl.waitDrop();
        }
        return;
    }

    public Animation2(){
        
    }
}




