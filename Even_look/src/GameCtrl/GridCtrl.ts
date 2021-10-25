/**cell网格控制器
 * 负责计算combo持续时间
 * 得分数
 * 实现cells配对并消失
 */
class GridCtrl {
    public grid: Grid;
    private selectedCell: Cell;
    private focusIcon: egret.Bitmap;
    private bg: egret.Bitmap;
    public boomReady: boolean = false;
    public renderAnimate: boolean = false;
    public gridScore: number = 0;
    private renderFrame: number = -1;
    private combNum: number = -1;
    private combLastTime: number = 0;


    public constructor() {
        this.selectedCell = null;
        this.uiInit();
    }

    public reset(isnewlevel: boolean = true) {
        this.combNum = -1;
        this.renderFrame = -1;
        if (isnewlevel) {
            this.gridScore = 0;
        }
        this.addScore(0);
        this.boomReady = false;
        this.renderAnimate = false;
        this.combLastTime = 0;
        this.clearGrid();
        return;
    }



    public render() {
        if (this.combLastTime <= 0) {
            this.combNum = -1;
        } else {
            this.combLastTime--;
        }
        if (!this.renderAnimate) {
            return;
        }
        this.renderFrame++;
        if (this.renderFrame % 2 != 0) {
            return;
        }
        let s = Math.min(UI.WINSIZE_W / 8, UI.WINSIZE_H / 8);
        let speedx: number;
        let speedy: number;
        let cell: Cell;
        for (let i in this.grid.moveCells) {
            cell = this.grid.moveCells[Number(i)];
            if (this.renderFrame == 10) {
                GameCtrl.I.setposition(cell, cell.dx, cell.dy);
                continue;
            }
            speedx = (s * (cell.dy + 0.5) - cell.oldx) / 10.0;
            speedy = (s * (cell.dx + 3.5) - cell.oldy) / 10.0;
            cell.x = cell.x + speedx;
            cell.y = cell.y + speedy;
        }
        if (this.renderFrame == 10) {
            this.renderFrame = 0;
            this.renderAnimate = false;
            this.grid.moveCells = [];
        }
        return;
    }

    /**arg1 = 0 :全开
     * arg1 = -1:随机arg2对
     * 其他,通过关卡数arg1确定
    */
    public gridInit(arg1: number = 0, arg2: number = 0): Grid {
        this.grid = new Grid(this);
        switch (arg1) {
            case 0:
                this.grid.fillAllCells();
                break;
            case -1:
                this.grid.randomEnableCells(arg2);
                this.grid.fillEnableCells();
                break;
            default:
                this.grid.infoEnableCells(arg1);
                this.grid.fillEnableCells();
                break;
        }
        this.grid.checkDeadEnd();
        this.grid.sortCellGraphics();
        EffectCtrl.I.createstageTipsEft();
        return this.grid;
    }

    public uiInit(): void {
        this.bg = new egret.Bitmap;
        this.bg.texture = RES.getRes("grid_bg_png");
        this.bg.anchorOffsetX = this.bg.width / 2;
        this.bg.anchorOffsetY = this.bg.height / 2;
        GameCtrl.I.addGameSprite(this.bg);
        UI.setXandY(this.bg, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(this.bg, UI.WINSIZE_W * 1.6 / this.bg.width, UI.WINSIZE_H * 1.3 / this.bg.height);

        this.focusIcon = new egret.Bitmap;
        this.focusIcon.texture = RES.getRes("focus_png");
        this.focusIcon.anchorOffsetX = this.focusIcon.width / 2;
        this.focusIcon.anchorOffsetY = this.focusIcon.height / 2;
        GameCtrl.I.addGameSprite(this.focusIcon);
        this.focusIcon.visible = false;
    }

    public clearGrid() {
        if (!this.grid) {
            return;
        }
        for (let i in this.grid.cellReference) {
            this.grid.cellReference[Number(i)].parent.removeChild(this.grid.cellReference[Number(i)]);
        }
        this.grid.cellReference = [];
    }



    public focusCell(arg1: Cell): void {
        this.selectedCell = arg1;
        this.focusIcon.visible = true;
        this.focusIcon.parent.setChildIndex(this.focusIcon, 1000);
        UI.setXandY(this.focusIcon, arg1.x, arg1.y);
        UI.setscalXandY(this.focusIcon, 1.5, 1.5)
        SoundCtrl.I.playSound("click")
        return;
    }

    public dropCellFocus(): void {
        this.selectedCell = null;
        this.focusIcon.visible = false;
        return;
    }


    public clickOneCell(arg1: Cell): void {
        let loc: Array<NPoint> = null;
        if (!GameCtrl.I.running) {
            return;
        }
        if (this.boomReady) {     //炸弹道具
            this.boomReady = false;
            GameCtrl.I._fightCtrl._fightui.boom.y = GameCtrl.I._fightCtrl._fightui.boom.y + 10;
            this.dropCellFocus();
            let loc1 = arg1.typeid;
            let loc2 = this.grid.cellTypeGrup[(loc1 - 1)];
            let loc3 = loc2.length - 1;
            while (loc3 >= 0) {
                EffectCtrl.I.createGrid_AngAt(loc2[loc3]);
                this.destroyObj(loc2[loc3]);
                this.grid.dropCell(loc2[loc3]);
                --loc3;
            }
            this.grid.checkDeadEnd();
            SoundCtrl.I.playSound("Boom");
        }
        else if (this.selectedCell) {
            if (this.selectedCell == arg1) {
                return;
            }
            if (loc = this.grid.checkTwoCellLinkable(this.selectedCell, arg1)) {
                EffectCtrl.I.createGridPathEft(loc);
                EffectCtrl.I.createGrid_AngAt(this.selectedCell);
                EffectCtrl.I.createGrid_AngAt(arg1);
                this.combNum++;
                this.combLastTime = 60;
                this.addScore((this.combNum + 1) * 100);
                EffectCtrl.I.createComboEft(arg1, this.selectedCell, this.combNum);
                this.grid.dropCell(this.selectedCell);
                this.grid.dropCell(arg1);
                this.destroyObj(this.selectedCell);
                this.destroyObj(arg1);
                this.dropCellFocus();
                this.grid.checkDeadEnd();
            }
            else {
                this.focusCell(arg1);
            }
        }
        else {
            this.focusCell(arg1);
        }
        if (this.grid.Pass()) {
            egret.setTimeout(GameCtrl.I.GameEnd, GameCtrl.I, 1000);
        }
        return;
    }


    public addScore(score: number) {
        this.gridScore = this.gridScore + score;
        GameCtrl.I._fightCtrl.setScore(this.gridScore);
        return;
    }
    public destroyObj(cell: Cell) {
        cell.parent.removeChild(cell);
    }



}