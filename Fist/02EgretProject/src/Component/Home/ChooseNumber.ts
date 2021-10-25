class ChooseNumber extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(length: number, x: number, y: number, anchorCenterFlag: boolean = false) {
        super();
        this.len = length;
        this.x = x;
        this.y = y;
        this.anchorCenterFlag = anchorCenterFlag;
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }
    public choose: number[] = []
    public len: number;
    public picWidth: number;
    public picHeight: number;
    public anchorCenterFlag: boolean;
    public scroll: ScrollView[] = [];
    onEnter() {
        for(let i=0;i<this.len;i++) {
            this.choose.push(0);
            let num: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            for(let j=1;j<=9;j++) {
               let i: egret.Bitmap = UI.addPic(num, `number${j}_png`, 0, 0, true);
               i.y = (9.5-j)*i.height;
               i.anchorOffsetX = 0;
               this.picWidth = i.width;
               this.picHeight = i.height;
            }
            // this.addChild(num)
            num.height += this.picHeight;
            let scroll = new ScrollView(num, this.picWidth, this.picHeight, (i+0.5)*this.picWidth, 0, 1, 1, true, true);
            this.scroll.push(scroll);
            this.addChild(scroll);
            scroll.changeChild(0,0);
        }
        if(this.anchorCenterFlag) {
            this.anchorOffsetX = this.width/2;
            this.anchorOffsetY = this.height/4;
        }
    }

    public getNumber() {
        let count = 0;
        const len = this.choose.length;
        this.choose.map((data,index) => {
           const i = this.scroll[index].getChildNow();
           count += Math.pow(10,len - index - 1)*(i+1);
        })
        return count;
    }
}