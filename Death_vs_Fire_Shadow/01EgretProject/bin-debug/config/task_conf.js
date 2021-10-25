var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var task_conf = (function () {
    function task_conf() {
    }
    task_conf.daily_data = 
    //序号		taskType		taskNum		描述		rewardType1		rewardNum1		rewardType2		rewardNum2	
    [[1, 0, 0, "完成所有每日任务", 1, 2000, 2, 15],
        [2, 1, 2, "简单AI对战", 1, 150, -1, 0],
        [3, 2, 2, "普通AI对战", 1, 250, -1, 0],
        [4, 3, 2, "困难AI对战", 1, 300, -1, 0],
        [5, 4, 2, "自由匹配对战", 1, 15, -1, 0],
        [6, 5, 2, "开房间对战", 2, 50, -1, 0],
        [7, 6, 3, "去抽奖吧", 1, 300, -1, 0],
        [8, 7, 150, "花掉一些金币", 1, 200, -1, 0]];
    task_conf.achieve_data = 
    //序号		taskType		taskNum		描述		rewardType1		rewardNum1		rewardType2		rewardNum2	
    [[1, 1, 1, "排位赛达到白银", 1, 1000, 2, 10],
        [2, 2, 1, "排位赛达到黄金", 1, 1500, 2, 15],
        [3, 3, 1, "排位赛达到铂金", 1, 2000, 2, 20],
        [4, 4, 1, "排位赛达到钻石", 1, 3000, 2, 25],
        [5, 5, 1, "排位赛达到王者", 1, 5000, 2, 50]];
    return task_conf;
}());
__reflect(task_conf.prototype, "task_conf");
;
//# sourceMappingURL=task_conf.js.map