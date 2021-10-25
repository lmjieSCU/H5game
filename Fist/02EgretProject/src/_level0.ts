class _level0 {
    public static power_holdRoll: number = 10;
    public static power_holdCounter: number = 10;
    public static inPause: boolean = false;
    public static inFreeze: boolean = false;
    public static KO: boolean = false;
    public static land_Y: number = 440;
    public static player_type: string = 'training';
    public static level: number = 1;
    public static timeOver: boolean = false;
    public static effect_mc: Stage_effect = new Stage_effect;
    public static P1_role: Role;
    public static P2_role: Role;
    public static winner: Role;


    public static instance_First:any=[];//记录调用的单帧事件
    // public static life_power_control: Life_Power = new Life_Power();
    public static lifeControl(lifeobj: any, role: Role) {
        // _level0.life_power_control.lifeControl(lifeobj);
        SplashScene.instance._life.lifeControl(lifeobj, role);
        return;
    }

    public static powerControl(powerobj: any, role: Role) {
        SplashScene.instance._life.powerControl(powerobj, role);
        return;
        // _level0.life_power_control.powerControl(powerobj);
    }
    //初始化单帧事件静态变量
    public static eliminate_static(){
        _level0.instance_First.map((i)=>{
            i.Firstowner=null;
            i.instance_First=null;
            i.instance_Second=null;
        })
    }
    //对局结束人物动作
    public static gameEnd(){
        if(_level0.P1_role.isKO==true||_level0.P2_role.isKO==true){
            if(_level0.P1_role.isKO==_level0.P2_role.isKO){
               
            }else{
                let winner = _level0.P1_role.life>_level0.P2_role.life?_level0.P1_role:_level0.P2_role;
                winner.do_win();
            }
        }else{
            let winner = _level0.P1_role.life>=_level0.P2_role.life?_level0.P1_role:_level0.P2_role;
            winner.do_win();
            let lose = _level0.P1_role.life<_level0.P2_role.life?_level0.P1_role:_level0.P2_role;
            lose.mc.gotoAndStop("lose");
        }
    }
    //对象对比 相同返回true
    public static deepCompare(x, y) {
        var i, l, leftChain, rightChain;
        function compare2Objects(x, y) {
            var p;
            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                return true;
            }
            if (x === y) {
                return true;
            }
            if ((typeof x === 'function' && typeof y === 'function') ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }

            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                return false;
            }

            if (x.constructor !== y.constructor) {
                return false;
            }

            if (x.prototype !== y.prototype) {
                return false;
            }
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                return false;
            }
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                } else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }
            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                } else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
                switch (typeof (x[p])) {
                    case 'object':
                    case 'function':

                        leftChain.push(x);
                        rightChain.push(y);

                        if (!compare2Objects(x[p], y[p])) {
                            return false;
                        }

                        leftChain.pop();
                        rightChain.pop();
                        break;

                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }

            return true;
        }
        if (arguments.length < 1) {
            return true;
        }
        for (i = 1, l = arguments.length; i < l; i++) {
            leftChain = [];
            rightChain = [];

            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }
        return true;
    }
    //判断字符是否在某个数组里面，在返回true
    public static IsInArray(arr, val) {
        let testStr = ',' + arr.join(",") + ",";
        return testStr.indexOf("," + val + ",") != -1;
    }
}