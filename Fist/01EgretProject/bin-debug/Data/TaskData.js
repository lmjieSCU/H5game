var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TaskData = (function () {
    function TaskData() {
    }
    /**
     * @param taskDate 上一次刷新任务的时间
     * @param nowTask+type 获取当前对应任务的等级与完成次数 lv|count
     * @param challengeTask 判断当前是否已经触发了挑战任务
     * @param taskChest+lv 判断当前是否领取了完成对应等级所有任务的宝箱
     * @param challengeTaskTime 挑战任务开启的事件
     * @param challengeTaskLv challengeTaskType 挑战任务完成后应当返回的任务
     */
    TaskData.startTask = function () {
        var date = egret.localStorage.getItem("taskDate");
        var nowDate = new Date();
        if (!date || Date.parse(nowDate.toString()) - Date.parse(date) >= 1000 * 60 * 60 * 24) {
            this.initTask();
        }
    };
    TaskData.initTask = function () {
        var nowDate = new Date();
        egret.localStorage.setItem("nowTask1", "0|0");
        egret.localStorage.setItem("nowTask2", "0|0");
        egret.localStorage.setItem("nowTask3", "0|0");
        egret.localStorage.setItem("challengeTask", "false");
        egret.localStorage.setItem("taskChest1", "false");
        egret.localStorage.setItem("taskChest2", "false");
        egret.localStorage.setItem("taskChest3", "false");
        egret.localStorage.setItem("taskDate", (new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0)).toString());
    };
    TaskData.setTask = function (type, num, lv) {
        if (!this.isTask(type, lv))
            return;
        var target = "nowTask" + type;
        var task = egret.localStorage.getItem(target);
        var taskInfo = task.split("|");
        egret.localStorage.setItem(target, taskInfo[0] + "|" + Math.min(Number(taskInfo[1]) + num, this.task[lv][type - 1].all));
    };
    TaskData.getTaskAll = function () {
        var _this = this;
        var task1 = egret.localStorage.getItem("nowTask1").split("|");
        var task2 = egret.localStorage.getItem("nowTask2").split("|");
        var task3 = egret.localStorage.getItem("nowTask3").split("|");
        if ((Number(task1[0]) == 4 || Number(task1[0]) == 4 || Number(task1[0]) == 4) && this.cancelChallengeTask()) {
            task1 = egret.localStorage.getItem("nowTask1").split("|");
            task2 = egret.localStorage.getItem("nowTask2").split("|");
            task3 = egret.localStorage.getItem("nowTask3").split("|");
        }
        var task = [
            [Number(task1[0]), Number(task1[1])],
            [Number(task2[0]), Number(task2[1])],
            [Number(task3[0]), Number(task3[1])],
        ];
        var taskInfo = [];
        task.map(function (data, index) {
            taskInfo.push({ type: index + 1, lv: data[0], count: data[1], all: _this.task[data[0]][index].all, info: _this.task[data[0]][index].info });
        });
        return taskInfo;
    };
    TaskData.isTask = function (type, lv) {
        this.cancelChallengeTask();
        var target = "nowTask" + type;
        var task = egret.localStorage.getItem(target).split("|");
        if (Number(task[0]) == lv)
            return true;
        return false;
    };
    TaskData.finishTask = function (type) {
        var target = "nowTask" + type;
        var task = egret.localStorage.getItem(target).split("|");
        var lv = Number(task[0]);
        if (this.task[lv][type - 1].all != Number(task[1]))
            return;
        var reward = PropData.getReward(this.task[lv][type - 1].rewardType, this.task[lv][type - 1].rewardNum);
        if (egret.localStorage.getItem("challengeTask") == "false") {
            var ran = Math.random();
            if (ran <= 0.1) {
                egret.localStorage.setItem("challengeTask", "true");
                egret.localStorage.setItem("challengeTaskTime", (new Date()).toString());
                egret.localStorage.setItem("challengeTaskLv", (lv + 1).toString());
                egret.localStorage.setItem("challengeTaskType", type.toString());
                lv = 4;
            }
            else if (lv <= 2) {
                lv++;
            }
        }
        else {
            if (lv <= 2)
                lv++;
            if (lv == 4)
                lv = Number(egret.localStorage.getItem('challengeTaskLv'));
        }
        egret.localStorage.setItem("nowTask" + type, lv + "|0");
        return reward;
    };
    TaskData.cancelChallengeTask = function () {
        if (egret.localStorage.getItem("challengeTask") == "false")
            return false;
        var time = new Date();
        var challengeTaskTime = egret.localStorage.getItem("challengeTaskTime");
        if (Date.parse(time.toString()) - Date.parse(challengeTaskTime) >= 1000 * 60 * 60) {
            var type = egret.localStorage.getItem("challengeTaskType");
            var lv = egret.localStorage.getItem("challengeTaskLv");
            var target = "nowTask" + type;
            egret.localStorage.setItem(target, lv + "|0");
            return true;
        }
        return false;
    };
    TaskData.finishTaskInfo = function () {
        var task1 = egret.localStorage.getItem("nowTask1").split("|");
        var task2 = egret.localStorage.getItem("nowTask2").split("|");
        var task3 = egret.localStorage.getItem("nowTask3").split("|");
        if (Number(task1[0]) == 4 || Number(task2[0]) == 4 || Number(task3[0]) == 4)
            return Math.min(Number(task1[0]), Number(task2[0]), Number(task3[0]), Number(egret.localStorage.getItem("challengeTaskLv")));
        else
            return Math.min(Number(task1[0]), Number(task2[0]), Number(task3[0]));
    };
    TaskData.getChestInfo = function () {
        return [egret.localStorage.getItem("taskChest1"), egret.localStorage.getItem("taskChest2"), egret.localStorage.getItem("taskChest3")];
    };
    TaskData.getChestReward = function (lv) {
        egret.localStorage.setItem("taskChest" + lv, "true");
        return PropData.getReward(this.chestReward[lv - 1].rewardType, this.chestReward[lv - 1].rewardNum);
    };
    TaskData.isHasReward = function () {
        var taskInfo = this.getTaskAll();
        var finishTask = this.finishTaskInfo();
        for (var i = 0; i < taskInfo.length; i++) {
            if (taskInfo[i].count == taskInfo[i].all)
                return true;
        }
        for (var i = 1; i <= finishTask; i++) {
            if (egret.localStorage.getItem("taskChest" + i) == "false")
                return true;
        }
        return false;
    };
    ;
    TaskData.task = [
        [
            { type: 1, lv: 0, all: 1, info: "进行1场排位对局", rewardType: [1001, 1003], rewardNum: [1000, 100] },
            { type: 2, lv: 0, all: 1, info: "进行1局试炼模式", rewardType: [1001, 1003], rewardNum: [1000, 100] },
            { type: 3, lv: 0, all: 5, info: "进行5次抽奖", rewardType: [1001, 1003], rewardNum: [1000, 100] }
        ],
        [
            { type: 1, lv: 1, all: 3, info: "获取3次排位对局胜利", rewardType: [1001, 1003], rewardNum: [2000, 200] },
            { type: 2, lv: 1, all: 1, info: "通过第五关试炼模式", rewardType: [1001, 1003], rewardNum: [2000, 200] },
            { type: 3, lv: 1, all: 1, info: "释放1次技能", rewardType: [1001, 1003], rewardNum: [2000, 200] },
        ],
        [
            { type: 1, lv: 2, all: 1, info: "通过试炼模式第10关", rewardType: [1001, 1003], rewardNum: [5000, 400] },
            { type: 2, lv: 2, all: 1, info: "晋升1个段位", rewardType: [1001, 1003], rewardNum: [5000, 400] },
            { type: 3, lv: 2, all: 1, info: "获得（合成）1个技能。", rewardType: [1001, 1003], rewardNum: [5000, 400] },
        ],
        [
            { type: 1, lv: 3, all: 1, info: "已完成任务", rewardType: [], rewardNum: [] },
            { type: 2, lv: 3, all: 1, info: "已完成任务", rewardType: [], rewardNum: [] },
            { type: 3, lv: 3, all: 1, info: "已完成任务", rewardType: [], rewardNum: [] },
        ],
        [
            { type: 1, lv: 4, all: 1, info: "不使用任何技能击败对手", rewardType: [1001, 1003], rewardNum: [10000, 1000] },
            { type: 2, lv: 4, all: 1, info: "在30S内击败对手", rewardType: [1001, 1003], rewardNum: [10000, 1000] },
            { type: 3, lv: 4, all: 1, info: "通过试炼模式第11关", rewardType: [1001, 1003], rewardNum: [10000, 1000] },
        ]
    ];
    TaskData.chestReward = [
        { lv: 1, rewardType: [1005], rewardNum: [2] },
        { lv: 2, rewardType: [1005], rewardNum: [5] },
        { lv: 3, rewardType: [1006, 1002], rewardNum: [1, 1] },
    ];
    return TaskData;
}());
__reflect(TaskData.prototype, "TaskData");
//# sourceMappingURL=TaskData.js.map