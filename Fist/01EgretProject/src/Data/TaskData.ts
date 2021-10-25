class TaskData {
    /**
     * @param taskDate 上一次刷新任务的时间
     * @param nowTask+type 获取当前对应任务的等级与完成次数 lv|count
     * @param challengeTask 判断当前是否已经触发了挑战任务
     * @param taskChest+lv 判断当前是否领取了完成对应等级所有任务的宝箱
     * @param challengeTaskTime 挑战任务开启的事件
     * @param challengeTaskLv challengeTaskType 挑战任务完成后应当返回的任务
     */
    public static startTask() {//判断任务是否刷新
        const date = egret.localStorage.getItem("taskDate");
        const nowDate = new Date();
        if(!date || Date.parse(nowDate.toString()) - Date.parse(date) >= 1000*60*60*24) {
            this.initTask();
        }
    }

    public static initTask() {//任务初始化
        const nowDate = new Date();
        egret.localStorage.setItem("nowTask1", "0|0");
        egret.localStorage.setItem("nowTask2", "0|0");
        egret.localStorage.setItem("nowTask3", "0|0");
        egret.localStorage.setItem("challengeTask", "false");
        egret.localStorage.setItem("taskChest1", "false");
        egret.localStorage.setItem("taskChest2", "false");
        egret.localStorage.setItem("taskChest3", "false");
        egret.localStorage.setItem("taskDate", (new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0)).toString())
    }

    public static setTask(type: number, num: number, lv: number) {//任务目标完成数量
        if(!this.isTask(type, lv)) return;
        let target = `nowTask${type}`;
        const task = egret.localStorage.getItem(target);
        const taskInfo = task.split("|");
        egret.localStorage.setItem(target, `${taskInfo[0]}|${Math.min(Number(taskInfo[1])+num,this.task[lv][type-1].all)}`);
    }

    public static getTaskAll() {//获取当前应当执行的任务
        let task1 = egret.localStorage.getItem("nowTask1").split("|");
        let task2 = egret.localStorage.getItem("nowTask2").split("|");
        let task3 = egret.localStorage.getItem("nowTask3").split("|");
        if((Number(task1[0]) == 4 || Number(task1[0]) == 4 || Number(task1[0]) == 4) && this.cancelChallengeTask()) {
            task1 = egret.localStorage.getItem("nowTask1").split("|");
            task2 = egret.localStorage.getItem("nowTask2").split("|");
            task3 = egret.localStorage.getItem("nowTask3").split("|");
        }
        const task = [
            [Number(task1[0]),Number(task1[1])],
            [Number(task2[0]),Number(task2[1])],
            [Number(task3[0]),Number(task3[1])],
        ]

        let taskInfo: TaskInfo[] = [];
        task.map((data,index) => {
            taskInfo.push({type: index+1, lv: data[0], count: data[1], all: this.task[data[0]][index].all, info: this.task[data[0]][index].info});
        })
        return taskInfo;
    }

    public static isTask(type: number, lv: number) {//判断是否执行当前的任务
        this.cancelChallengeTask();
        const target = `nowTask${type}`;
        let task = egret.localStorage.getItem(target).split("|");
        if(Number(task[0]) == lv) return true;
        return false;
    }

    public static finishTask(type: number) {//完成任务
        const target = `nowTask${type}`;
        const task = egret.localStorage.getItem(target).split("|");
        let lv = Number(task[0]);
        if(this.task[lv][type-1].all != Number(task[1])) return;
        let reward = PropData.getReward(this.task[lv][type-1].rewardType,this.task[lv][type-1].rewardNum);
        if(egret.localStorage.getItem("challengeTask") == "false") {
            const ran = Math.random();
            if(ran<=0.1) {
                egret.localStorage.setItem("challengeTask", "true");
                egret.localStorage.setItem("challengeTaskTime", (new Date()).toString());
                egret.localStorage.setItem("challengeTaskLv", (lv+1).toString());
                egret.localStorage.setItem("challengeTaskType", type.toString())
                lv = 4;
            } else if(lv <= 2) {
                lv++;
            }
        } else {
            if(lv <= 2) lv++;
            if(lv == 4) lv = Number(egret.localStorage.getItem('challengeTaskLv'));
        }
        egret.localStorage.setItem(`nowTask${type}`, `${lv}|0`);
        return reward;
    }

    public static cancelChallengeTask() {//取消挑战任务
        if(egret.localStorage.getItem("challengeTask") == "false") return false;
        const time = new Date();
        const challengeTaskTime = egret.localStorage.getItem("challengeTaskTime");
        if(Date.parse(time.toString()) - Date.parse(challengeTaskTime) >= 1000*60*60) {
            const type = egret.localStorage.getItem("challengeTaskType");
            const lv = egret.localStorage.getItem("challengeTaskLv");
            const target = `nowTask${type}`;
            egret.localStorage.setItem(target, `${lv}|0`);
            return true;
        }
        return false;
    }

    public static finishTaskInfo() {//判断全部完成任务的级别
        const task1 = egret.localStorage.getItem("nowTask1").split("|");
        const task2 = egret.localStorage.getItem("nowTask2").split("|");
        const task3 = egret.localStorage.getItem("nowTask3").split("|");
        if(Number(task1[0]) == 4 || Number(task2[0]) == 4 || Number(task3[0]) == 4) 
            return Math.min(Number(task1[0]),Number(task2[0]),Number(task3[0]),Number(egret.localStorage.getItem("challengeTaskLv")));
        else return Math.min(Number(task1[0]),Number(task2[0]),Number(task3[0]));
    }
    public static getChestInfo() {//获取完成全部任务的状态
        return [egret.localStorage.getItem("taskChest1"), egret.localStorage.getItem("taskChest2"), egret.localStorage.getItem("taskChest3")];
    }
    public static getChestReward(lv: number) {//开启宝箱获取奖励  返回奖励信息未完成
        egret.localStorage.setItem(`taskChest${lv}`, "true");
        return PropData.getReward(this.chestReward[lv-1].rewardType,this.chestReward[lv-1].rewardNum);
    }

    public static isHasReward() {//判断有无奖励可以领取
        const taskInfo = this.getTaskAll();
        const finishTask = this.finishTaskInfo();
        for(let i=0;i<taskInfo.length;i++) {
            if(taskInfo[i].count == taskInfo[i].all) return true;
        }
        for(let i=1;i<=finishTask;i++) {
            if(egret.localStorage.getItem(`taskChest${i}`) == "false") return true;
        }
        return false;
    };

    public static task = [
        [
            {type: 1, lv: 0, all: 1, info: "进行1场排位对局", rewardType: [1001,1003], rewardNum: [1000,100]},
            {type: 2, lv: 0, all: 1, info: "进行1局试炼模式", rewardType: [1001,1003], rewardNum: [1000,100]},
            {type: 3, lv: 0, all: 5, info: "进行5次抽奖", rewardType: [1001,1003], rewardNum: [1000,100]}
        ],
        [
            {type: 1, lv: 1, all: 3, info: "获取3次排位对局胜利", rewardType: [1001,1003], rewardNum: [2000,200]},
            {type: 2, lv: 1, all: 1, info: "通过第五关试炼模式", rewardType: [1001,1003], rewardNum: [2000,200]},
            {type: 3, lv: 1, all: 1, info: "释放1次技能", rewardType: [1001,1003], rewardNum: [2000,200]},
        ],
        [
            {type: 1, lv: 2, all: 1, info: "通过试炼模式第10关", rewardType: [1001,1003], rewardNum: [5000,400]},
            {type: 2, lv: 2, all: 1, info: "晋升1个段位", rewardType: [1001,1003], rewardNum: [5000,400]},
            {type: 3, lv: 2, all: 1, info: "获得（合成）1个技能。", rewardType: [1001,1003], rewardNum: [5000,400]},
        ],
        [//当lv为3时，应当是完成了所有任务,这里只是为了展示
            {type: 1, lv: 3, all: 1, info: "已完成任务", rewardType: [], rewardNum: []},
            {type: 2, lv: 3, all: 1, info: "已完成任务", rewardType: [], rewardNum: []},
            {type: 3, lv: 3, all: 1, info: "已完成任务", rewardType: [], rewardNum: []},
        ],
        [
            {type: 1, lv: 4, all: 1, info: "不使用任何技能击败对手", rewardType: [1001,1003], rewardNum: [10000,1000]},
            {type: 2, lv: 4, all: 1, info: "在30S内击败对手", rewardType: [1001,1003], rewardNum: [10000,1000]},
            {type: 3, lv: 4, all: 1, info: "通过试炼模式第11关", rewardType: [1001,1003], rewardNum: [10000,1000]},
        ]
    ];

    public static chestReward = [
        {lv: 1, rewardType: [1005], rewardNum: [2]},
        {lv: 2, rewardType: [1005], rewardNum: [5]},
        {lv: 3, rewardType: [1006,1002], rewardNum: [1,1]},
    ]
}