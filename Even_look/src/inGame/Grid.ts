/**水果网格
 * 负责判断是否存在可配对cells
 * 刷新cells位置
 * 清除已配对cells
 */
class Grid {
    private cellsRow: number = 9;
    private cellsCol: number = 8;
    private CellTypeNum: number = 19;
    private cells: Array<Array<Cell>>;  //7行6列
    public cellReference: Array<Cell>; //存在的cells
    public cellTypeGrup: Array<Array<Cell>>;    //存在的cells,按type存储在不同的分量中
    private enableCells: Array<NPoint>;         //允许生成的cell位置
    public moveCells: Array<Cell>;
    public gridctrl: GridCtrl;

    constructor(ctrl: GridCtrl) {
        this.gridctrl = ctrl;
        this.init();
        return;
    }

    public init(): void {
        this.cells = new Array<Array<Cell>>(this.cellsRow);
        this.cellTypeGrup = new Array<Array<Cell>>(this.CellTypeNum);
        this.enableCells = new Array<NPoint>();
        this.cellReference = new Array<Cell>();
        this.moveCells = new Array<Cell>();
        for (let i = 0; i < this.cellsRow; i++) {
            this.cells[i] = new Array<Cell>();
        }
        for (let i = 0; i < this.CellTypeNum; i++) {
            this.cellTypeGrup[i] = new Array<Cell>();
        }
    }

    /**游戏通关 */
    public Pass(): boolean {
        for (let i = 1; i < this.cellsRow - 1; i++) {
            for (let j = 1; j < this.cellsCol - 1; j++) {
                if (this.cells[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }


    /**使用关卡信息初始化enableCells数组 */
    public infoEnableCells(arg1: number): void {
        let loc: XMLObj = null;
        let loc1: Array<XMLObj> = GameData.I.styleInfo(arg1);
        for (let i in loc1) {
            loc = loc1[Number(i)];
            if (loc.clsName == "Box") {
                let x = Math.floor(loc.x / 60);
                let y = Math.floor(loc.y / 60);
                this.setEnableCell(y, x);
            }
        }
        return;
    }

    /**随机选择pair对显示位置初始化enableCells数组 */
    public randomEnableCells(pair: number): void {
        let loc3 = new Array<NPoint>();     //待随机选择位置数组
        for (let i = 1; i < this.cellsRow - 1; i++) {
            for (let j = 1; j < this.cellsCol - 1; j++) {
                loc3.push(new NPoint(i, j));
            }
        }
        let loc4 = 0;
        for (let loc1 = pair * 2 - 1; loc1 >= 0; loc1--) {
            loc4 = Math.floor(Math.random() * loc3.length); //随机选择
            this.setEnableCell(loc3[loc4].x, loc3[loc4].y);
            loc3.splice(loc4, 1);
        }
        return;
    }

    /**使用所有位置初始化enableCells数组 */
    public fillAllCells(): void {
        for (let i = 1; i < this.cellsRow - 1; i++) {
            for (let j = 1; j < this.cellsCol - 1; j++) {
                this.setEnableCell(i, j);
            }
        }
        this.fillEnableCells();
        return;
    }

    /**将可显示位置[i][j]存入enableCells数组 */
    public setEnableCell(arg1: number, arg2: number): void {
        this.enableCells.push(new NPoint(arg1, arg2));
        return;
    }

    public fillEnableCells(): void {
        let loc2 = 0;
        let type = 1;
        while (this.enableCells.length > 0) {
            loc2 = Math.floor(Math.random() * this.enableCells.length);
            let cell1: Cell = new Cell();
            cell1.init(this.enableCells[loc2].x, this.enableCells[loc2].y, type);
            this.cells[this.enableCells[loc2].x][this.enableCells[loc2].y] = cell1;
            this.cellReference.push(cell1);
            GameCtrl.I.addGameSprite(cell1);
            this.enableCells.splice(loc2, 1);

            loc2 = Math.floor(Math.random() * this.enableCells.length);
            let cell2: Cell = new Cell();
            cell2.init(this.enableCells[loc2].x, this.enableCells[loc2].y, type);
            this.cells[this.enableCells[loc2].x][this.enableCells[loc2].y] = cell2;
            this.cellReference.push(cell2);
            GameCtrl.I.addGameSprite(cell2);
            this.enableCells.splice(loc2, 1);

            this.cellTypeGrup[type - 1].push(cell1);
            this.cellTypeGrup[type - 1].push(cell2);
            type++;
            if (type <= this.CellTypeNum) {
                continue;
            }
            type = 1;
        }
        return;
    }

    public checkDeadEnd(): void {
        if (!this.getTwoEnable()) {
            if (this.cellReference.length > 1) {
                this.refreshGridToAlive();
            }
        }
        return;
    }

    public refreshGridToAlive(): void {
        this.refreshGrid();
        let loc1 = this.getTwoEnable();
        while (!loc1) {
            this.refreshGrid();
            loc1 = this.getTwoEnable();
        }
        for (let i: number = 0; i < this.cellReference.length; i++) {
            this.moveCellTo(this.cellReference[i], this.cellReference[i].dx, this.cellReference[i].dy, true);
        }
        this.sortCellGraphics();
        return;
    }

    public refreshGrid(): void {
        let loc4 = 0;
        let loc5 = null;
        let loc1 = new Array<NPoint>(this.cellReference.length);
        let loc2 = this.cellReference.length - 1;
        while (loc2 >= 0) {
            loc1[loc2] = this.cellReference[loc2].getNPoint();
            --loc2;
        }
        let loc3 = 0;
        while (loc1.length > 0) {
            loc4 = Math.floor(Math.random() * loc1.length);
            loc5 = loc1[loc4];
            this.cells[loc5.x][loc5.y] = this.cellReference[loc3];
            this.cellReference[loc3].dx = loc5.x;
            this.cellReference[loc3].dy = loc5.y;
            ++loc3;
            loc1.splice(loc4, 1);
        }
        return;
    }


    public sortCellGraphics(): void {
        this.cellReference.sort(this.sortCellY);
        return;
    }

    public sortCellY(arg1: Cell, arg2: Cell): number {
        let loc1 = arg1.dx + arg1.dy;
        let loc2 = arg2.dx + arg2.dy;
        if (loc1 < loc2) {
            return -1;
        }
        if (loc1 == loc2) {
            if (arg1.dy < arg2.dy) {
                return -1;
            }
            return 1;
        }
        return 1;
    }

    public dropCell(arg1: Cell): void {
        this.cells[arg1.dx][arg1.dy] = null;
        this.cellReference.splice(this.cellReference.indexOf(arg1), 1);
        this.cellTypeGrup[(arg1.typeid - 1)].splice(this.cellTypeGrup[(arg1.typeid - 1)].indexOf(arg1), 1);
        return;
    }


    public getCellAt(arg1: number, arg2: number): Cell {
        if (arg1 <= 0 || arg1 >= this.cellsRow - 1 || arg2 <= 0 || arg2 >= this.cellsCol - 1) {
            return null;
        }
        return this.cells[arg1][arg2];
    }

    /**check this.cellTypeGrup[loc1][loc2] and this.cellTypeGrup[loc1][loc3] 
     * cellTypeGrup[loc1][loc3]为具体的cell
     * cellTypeGrup[loc1]中的cells类型相同
     * loc1 = [0,this.cellTypeGrup.length - 1]
     * loc2 = [0,this.cellTypeGrup[loc1].length-2]
     * loc3 = [loc2+1,this.cellTypeGrup[loc1].length-1]
    */
    public getTwoEnable(): Array<Cell> {
        let loc2 = 0;
        let loc3 = 0;
        let ans = new Array<Cell>();
        let loc1 = this.cellTypeGrup.length - 1;
        while (loc1 >= 0) {
            loc2 = this.cellTypeGrup[loc1].length - 2;
            while (loc2 >= 0) {
                loc3 = this.cellTypeGrup[loc1].length - 1;
                while (loc3 >= loc2 + 1) {
                    if (this.checkTwoCellLinkable(this.cellTypeGrup[loc1][loc2], this.cellTypeGrup[loc1][loc3])) {
                        ans.push(this.cellTypeGrup[loc1][loc2]);
                        ans.push(this.cellTypeGrup[loc1][loc3]);
                        return ans;
                    }
                    --loc3;
                }
                --loc2;
            }
            --loc1;
        }
        return null;
    }


    public moveCellTo(arg1: Cell, arg2: number, arg3: number, arg4: boolean = false): boolean {
        if (arg2 <= 0 || arg2 >= this.cellsRow - 1 || arg3 <= 0 || arg3 >= this.cellsCol - 1) {
            return false;
        }
        if (!arg4 && this.cells[arg2][arg3]) {
            return false;
        }
        this.gridctrl.renderAnimate = true;
        this.cells[arg1.dx][arg1.dy] = null;
        arg1.dx = arg2;
        arg1.dy = arg3;
        arg1.oldx = arg1.x;
        arg1.oldy = arg1.y;
        this.moveCells.push(arg1);
        this.cells[arg2][arg3] = arg1;
        return true;
    }




    public checkTwoCellLinkable(arg1: Cell, arg2: Cell): Array<NPoint> {
        let point1 = arg1.getNPoint();
        let point2 = arg2.getNPoint();
        if (arg1.typeid != arg2.typeid) {
            return null;
        }
        let loc1 = this.verLinkable(point1, point2);
        if (loc1) {
            return loc1;
        }
        loc1 = this.horLinkable(point1, point2);
        if (loc1) {
            return loc1;
        }
        loc1 = this.oneTurnLinkable(arg1, arg2);
        if (loc1) {
            return loc1;
        }
        loc1 = this.towTurnLinkable(arg1, arg2);
        if (loc1) {
            return loc1;
        }
        return null;
    }

    /**竖直方向是否可连接
     * dy坐标不同,返回null
     * dy坐标相同检查[dx1,dx2]
    */
    public verLinkable(arg1: NPoint, arg2: NPoint): Array<NPoint> {
        if (arg1.y != arg2.y) {
            return null;
        }
        let loc1 = arg1.x < arg2.x ? arg1.x : arg2.x;
        let loc2 = arg2.x > arg1.x ? arg2.x : arg1.x;
        let loc3 = loc1 + 1;
        while (loc3 < loc2) {
            if (this.cells[loc3][arg1.y]) {
                return null;
            }
            ++loc3;
        }
        let ans = new Array<NPoint>();
        ans.push(arg1);
        ans.push(arg2);
        return ans;
    }

    /**水平方向是否可连接
     * dx坐标不同,返回null
     * dx坐标相同检查[dy1,dy2]
    */
    public horLinkable(arg1: NPoint, arg2: NPoint): Array<NPoint> {
        if (arg1.x != arg2.x) {
            return null;
        }
        let loc1 = arg1.y < arg2.y ? arg1.y : arg2.y;
        let loc2 = arg2.y > arg1.y ? arg2.y : arg1.y;
        let loc3 = loc1 + 1;
        while (loc3 < loc2) {
            if (this.cells[arg1.x][loc3]) {
                return null;
            }
            ++loc3;
        }
        let ans = new Array<NPoint>();
        ans.push(arg1);
        ans.push(arg2);
        return ans;
    }

    /**转折一次
     *@1 判断(x1,y1)->(x1,y2)->(x2,y2)是否可达
     *@2 或判断(x1,y1)->(x2,y1)->(x2,y2)是否可达
     */
    public oneTurnLinkable(arg1: Cell, arg2: Cell): Array<NPoint> {
        //---------------@1 判断(x1,y1)->(x1,y2)->(x2,y2)是否可达--------------
        let loc1 = new NPoint(arg1.dx, arg2.dy);
        let point1 = arg1.getNPoint();
        let point2 = arg2.getNPoint();
        let ans = new Array<NPoint>();
        if (!this.cells[loc1.x][loc1.y]) {
            if (this.horLinkable(loc1, point1) && this.verLinkable(loc1, point2)) {
                ans.push(point1);
                ans.push(loc1);
                ans.push(point2);
                return ans;
            }
        }
        //------------@2 或判断(x1,y1)->(x2,y1)->(x2,y2)是否可达--------
        loc1.setTo(arg2.dx, arg1.dy);
        if (!this.cells[loc1.x][loc1.y]) {
            if (this.horLinkable(loc1, point2) && this.verLinkable(loc1, point1)) {
                ans.push(point1);
                ans.push(loc1);
                ans.push(point2);
                return ans;
            }
        }
        return null;
    }

    /**转折两次
     * @1:(x1,y1)->(x1,y1+y)->(x2,y1+y)->(x2,y2)
     * @2:(x1,y1)->(x1+x,y1)->(x1+x,y2)->(x2,y2)
     * y1+y属于[0,cellsCol-1]
     * x1+x属于[0,cellsRow-1]
     */
    public towTurnLinkable(arg1: Cell, arg2: Cell): Array<NPoint> {
        let loc1 = new NPoint();
        let loc2 = new NPoint();
        let point1 = arg1.getNPoint();
        let point2 = arg2.getNPoint();
        let ans = new Array<NPoint>();
        //----------------@1:(x1,y1)->(x1,y1+y)->(x2,y1+y)->(x2,y2)--------------------------------
        for (let i = point1.y - 1; i >= 0; i--) {
            if (this.cells[arg1.dx][i] || this.cells[arg2.dx][i]) {
                continue;
            }
            loc1.setTo(arg1.dx, i);
            loc2.setTo(arg2.dx, i);
            if (this.verLinkable(loc1, loc2)
                && this.horLinkable(loc1, arg1.getNPoint()) && this.horLinkable(loc2, arg2.getNPoint())) {
                ans.push(arg1.getNPoint());
                ans.push(loc1);
                ans.push(loc2);
                ans.push(arg2.getNPoint());
                return ans;
            }
        }
        for (let i = point1.y + 1; i < this.cellsCol; i++) {
            if (this.cells[arg1.dx][i] || this.cells[arg2.dx][i]) {
                continue;
            }
            loc1.setTo(arg1.dx, i);
            loc2.setTo(arg2.dx, i);
            if (this.verLinkable(loc1, loc2)
                && this.horLinkable(loc1, arg1.getNPoint()) && this.horLinkable(loc2, arg2.getNPoint())) {
                ans.push(arg1.getNPoint());
                ans.push(loc1);
                ans.push(loc2);
                ans.push(arg2.getNPoint());
                return ans;
            }
        }
        //----------------------------@2:(x1,y1)->(x1+x,y1)->(x1+x,y2)->(x2,y2)---------------------------
        for (let i = point1.x - 1; i >= 0; i--) {
            if (this.cells[i][arg1.dy] || this.cells[i][arg2.dy]) {
                continue;
            }
            loc1.setTo(i, arg1.dy);
            loc2.setTo(i, arg2.dy);
            if (this.horLinkable(loc1, loc2)
                && this.verLinkable(loc1, arg1.getNPoint()) && this.verLinkable(loc2, arg2.getNPoint())) {
                ans.push(arg1.getNPoint());
                ans.push(loc1);
                ans.push(loc2);
                ans.push(arg2.getNPoint());
                return ans;
            }
        }
        for (let i = point1.x + 1; i < this.cellsRow; i++) {
            if (this.cells[i][arg1.dy] || this.cells[i][arg2.dy]) {
                continue;
            }
            loc1.setTo(i, arg1.dy);
            loc2.setTo(i, arg2.dy);
            if (this.horLinkable(loc1, loc2)
                && this.verLinkable(loc1, arg1.getNPoint()) && this.verLinkable(loc2, arg2.getNPoint())) {
                ans.push(arg1.getNPoint());
                ans.push(loc1);
                ans.push(loc2);
                ans.push(arg2.getNPoint());
                return ans;
            }
        }
        return null;
    }
}
