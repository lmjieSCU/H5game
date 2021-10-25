var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**水果网格
 * 负责判断是否存在可配对cells
 * 刷新cells位置
 * 清除已配对cells
 */
var Grid = (function () {
    function Grid(ctrl) {
        this.cellsRow = 9;
        this.cellsCol = 8;
        this.CellTypeNum = 19;
        this.gridctrl = ctrl;
        this.init();
        return;
    }
    Grid.prototype.init = function () {
        this.cells = new Array(this.cellsRow);
        this.cellTypeGrup = new Array(this.CellTypeNum);
        this.enableCells = new Array();
        this.cellReference = new Array();
        this.moveCells = new Array();
        for (var i = 0; i < this.cellsRow; i++) {
            this.cells[i] = new Array();
        }
        for (var i = 0; i < this.CellTypeNum; i++) {
            this.cellTypeGrup[i] = new Array();
        }
    };
    /**游戏通关 */
    Grid.prototype.Pass = function () {
        for (var i = 1; i < this.cellsRow - 1; i++) {
            for (var j = 1; j < this.cellsCol - 1; j++) {
                if (this.cells[i][j]) {
                    return false;
                }
            }
        }
        return true;
    };
    /**使用关卡信息初始化enableCells数组 */
    Grid.prototype.infoEnableCells = function (arg1) {
        var loc = null;
        var loc1 = GameData.I.styleInfo(arg1);
        for (var i in loc1) {
            loc = loc1[Number(i)];
            if (loc.clsName == "Box") {
                var x = Math.floor(loc.x / 60);
                var y = Math.floor(loc.y / 60);
                this.setEnableCell(y, x);
            }
        }
        return;
    };
    /**随机选择pair对显示位置初始化enableCells数组 */
    Grid.prototype.randomEnableCells = function (pair) {
        var loc3 = new Array(); //待随机选择位置数组
        for (var i = 1; i < this.cellsRow - 1; i++) {
            for (var j = 1; j < this.cellsCol - 1; j++) {
                loc3.push(new NPoint(i, j));
            }
        }
        var loc4 = 0;
        for (var loc1 = pair * 2 - 1; loc1 >= 0; loc1--) {
            loc4 = Math.floor(Math.random() * loc3.length); //随机选择
            this.setEnableCell(loc3[loc4].x, loc3[loc4].y);
            loc3.splice(loc4, 1);
        }
        return;
    };
    /**使用所有位置初始化enableCells数组 */
    Grid.prototype.fillAllCells = function () {
        for (var i = 1; i < this.cellsRow - 1; i++) {
            for (var j = 1; j < this.cellsCol - 1; j++) {
                this.setEnableCell(i, j);
            }
        }
        this.fillEnableCells();
        return;
    };
    /**将可显示位置[i][j]存入enableCells数组 */
    Grid.prototype.setEnableCell = function (arg1, arg2) {
        this.enableCells.push(new NPoint(arg1, arg2));
        return;
    };
    Grid.prototype.fillEnableCells = function () {
        var loc2 = 0;
        var type = 1;
        while (this.enableCells.length > 0) {
            loc2 = Math.floor(Math.random() * this.enableCells.length);
            var cell1 = new Cell();
            cell1.init(this.enableCells[loc2].x, this.enableCells[loc2].y, type);
            this.cells[this.enableCells[loc2].x][this.enableCells[loc2].y] = cell1;
            this.cellReference.push(cell1);
            GameCtrl.I.addGameSprite(cell1);
            this.enableCells.splice(loc2, 1);
            loc2 = Math.floor(Math.random() * this.enableCells.length);
            var cell2 = new Cell();
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
    };
    Grid.prototype.checkDeadEnd = function () {
        if (!this.getTwoEnable()) {
            if (this.cellReference.length > 1) {
                this.refreshGridToAlive();
            }
        }
        return;
    };
    Grid.prototype.refreshGridToAlive = function () {
        this.refreshGrid();
        var loc1 = this.getTwoEnable();
        while (!loc1) {
            this.refreshGrid();
            loc1 = this.getTwoEnable();
        }
        for (var i = 0; i < this.cellReference.length; i++) {
            this.moveCellTo(this.cellReference[i], this.cellReference[i].dx, this.cellReference[i].dy, true);
        }
        this.sortCellGraphics();
        return;
    };
    Grid.prototype.refreshGrid = function () {
        var loc4 = 0;
        var loc5 = null;
        var loc1 = new Array(this.cellReference.length);
        var loc2 = this.cellReference.length - 1;
        while (loc2 >= 0) {
            loc1[loc2] = this.cellReference[loc2].getNPoint();
            --loc2;
        }
        var loc3 = 0;
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
    };
    Grid.prototype.sortCellGraphics = function () {
        this.cellReference.sort(this.sortCellY);
        return;
    };
    Grid.prototype.sortCellY = function (arg1, arg2) {
        var loc1 = arg1.dx + arg1.dy;
        var loc2 = arg2.dx + arg2.dy;
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
    };
    Grid.prototype.dropCell = function (arg1) {
        this.cells[arg1.dx][arg1.dy] = null;
        this.cellReference.splice(this.cellReference.indexOf(arg1), 1);
        this.cellTypeGrup[(arg1.typeid - 1)].splice(this.cellTypeGrup[(arg1.typeid - 1)].indexOf(arg1), 1);
        return;
    };
    Grid.prototype.getCellAt = function (arg1, arg2) {
        if (arg1 <= 0 || arg1 >= this.cellsRow - 1 || arg2 <= 0 || arg2 >= this.cellsCol - 1) {
            return null;
        }
        return this.cells[arg1][arg2];
    };
    /**check this.cellTypeGrup[loc1][loc2] and this.cellTypeGrup[loc1][loc3]
     * cellTypeGrup[loc1][loc3]为具体的cell
     * cellTypeGrup[loc1]中的cells类型相同
     * loc1 = [0,this.cellTypeGrup.length - 1]
     * loc2 = [0,this.cellTypeGrup[loc1].length-2]
     * loc3 = [loc2+1,this.cellTypeGrup[loc1].length-1]
    */
    Grid.prototype.getTwoEnable = function () {
        var loc2 = 0;
        var loc3 = 0;
        var ans = new Array();
        var loc1 = this.cellTypeGrup.length - 1;
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
    };
    Grid.prototype.moveCellTo = function (arg1, arg2, arg3, arg4) {
        if (arg4 === void 0) { arg4 = false; }
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
    };
    Grid.prototype.checkTwoCellLinkable = function (arg1, arg2) {
        var point1 = arg1.getNPoint();
        var point2 = arg2.getNPoint();
        if (arg1.typeid != arg2.typeid) {
            return null;
        }
        var loc1 = this.verLinkable(point1, point2);
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
    };
    /**竖直方向是否可连接
     * dy坐标不同,返回null
     * dy坐标相同检查[dx1,dx2]
    */
    Grid.prototype.verLinkable = function (arg1, arg2) {
        if (arg1.y != arg2.y) {
            return null;
        }
        var loc1 = arg1.x < arg2.x ? arg1.x : arg2.x;
        var loc2 = arg2.x > arg1.x ? arg2.x : arg1.x;
        var loc3 = loc1 + 1;
        while (loc3 < loc2) {
            if (this.cells[loc3][arg1.y]) {
                return null;
            }
            ++loc3;
        }
        var ans = new Array();
        ans.push(arg1);
        ans.push(arg2);
        return ans;
    };
    /**水平方向是否可连接
     * dx坐标不同,返回null
     * dx坐标相同检查[dy1,dy2]
    */
    Grid.prototype.horLinkable = function (arg1, arg2) {
        if (arg1.x != arg2.x) {
            return null;
        }
        var loc1 = arg1.y < arg2.y ? arg1.y : arg2.y;
        var loc2 = arg2.y > arg1.y ? arg2.y : arg1.y;
        var loc3 = loc1 + 1;
        while (loc3 < loc2) {
            if (this.cells[arg1.x][loc3]) {
                return null;
            }
            ++loc3;
        }
        var ans = new Array();
        ans.push(arg1);
        ans.push(arg2);
        return ans;
    };
    /**转折一次
     *@1 判断(x1,y1)->(x1,y2)->(x2,y2)是否可达
     *@2 或判断(x1,y1)->(x2,y1)->(x2,y2)是否可达
     */
    Grid.prototype.oneTurnLinkable = function (arg1, arg2) {
        //---------------@1 判断(x1,y1)->(x1,y2)->(x2,y2)是否可达--------------
        var loc1 = new NPoint(arg1.dx, arg2.dy);
        var point1 = arg1.getNPoint();
        var point2 = arg2.getNPoint();
        var ans = new Array();
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
    };
    /**转折两次
     * @1:(x1,y1)->(x1,y1+y)->(x2,y1+y)->(x2,y2)
     * @2:(x1,y1)->(x1+x,y1)->(x1+x,y2)->(x2,y2)
     * y1+y属于[0,cellsCol-1]
     * x1+x属于[0,cellsRow-1]
     */
    Grid.prototype.towTurnLinkable = function (arg1, arg2) {
        var loc1 = new NPoint();
        var loc2 = new NPoint();
        var point1 = arg1.getNPoint();
        var point2 = arg2.getNPoint();
        var ans = new Array();
        //----------------@1:(x1,y1)->(x1,y1+y)->(x2,y1+y)->(x2,y2)--------------------------------
        for (var i = point1.y - 1; i >= 0; i--) {
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
        for (var i = point1.y + 1; i < this.cellsCol; i++) {
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
        for (var i = point1.x - 1; i >= 0; i--) {
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
        for (var i = point1.x + 1; i < this.cellsRow; i++) {
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
    };
    return Grid;
}());
__reflect(Grid.prototype, "Grid");
//# sourceMappingURL=Grid.js.map