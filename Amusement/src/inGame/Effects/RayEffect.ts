class RayEffect extends Elements {

    public static pool: BasePool = new BasePool(RayEffect, 20);

    public constructor() {
        super();
        UI.addPic("sun_png", true, this);
        return;
    }


    public Animation(candy: Candy, matches: Array<Candy>, index: number): void {
        let disX = matches[index].x - candy.x;
        let disY = matches[index].y - candy.y;
        let dis = Math.sqrt(disX * disX + disY * disY);
        egret.Tween.get(this).to({ "x": matches[index].x, "y": matches[index].y }, dis * 1.25).call(this.RayEffectCall, this, [index, candy, matches]);

    }



    public RayEffectCall(index: number, candyA: Candy, matches: Array<Candy>) {
        this.parent.removeChild(this);
        RayEffect.pool.put(this);
        if (index != matches.length - 1) {
            return;
        }
        GameCtrl.I._fightCtrl.tempScore = 300;
        matches.push(candyA);
        GameCtrl.I._fightCtrl.removeCandys(matches);
        GameCtrl.I._fightCtrl.waitDrop();
        return;
    }


}
