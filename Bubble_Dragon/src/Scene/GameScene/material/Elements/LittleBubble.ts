/**目标线 */
class LittleBubble extends Elements {

    public sprites: Array<egret.Bitmap>;

    public Types: Array<number>;

    public constructor() {
        super();
        this.sprites = [];
        this.Types = [1, 2, 3, 4, 5, 6, 7, 100, 101, 102];
        var loc2 = 0;
        var loc3 = null;
        while (loc2 < this.Types.length) {
            loc3 = UI.addPic("res.Bubble_" + this.Types[loc2],true,this);
            this.sprites.push(loc3);
            ++loc2;
        }
        this.scaleX = 0.35;
        this.scaleY = 0.35;
        this.zoom();
        return;
    }

    public zoom(): void {
        egret.Tween.get(this, { loop: true }).to({ "scaleX": 0.35, "scaleY": 0.35 }, (Math.random() * 3 + 3) * 100)
            .to({ "scaleX": 0.4, "scaleY": 0.4 }, (Math.random() * 3 + 3) * 100);
        return;
    }



    public setBubbleType(arg1: number): void {
        let loc1 = 0;
        while (loc1 < this.sprites.length) {
            if (this.Types[loc1] != arg1) {
                this.sprites[loc1].visible = false;
            }
            else {
                this.sprites[loc1].visible = true;
            }
            ++loc1;
        }
        return;
    }
}
