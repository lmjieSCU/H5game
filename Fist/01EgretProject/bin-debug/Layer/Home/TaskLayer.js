var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TaskLayer = (function (_super) {
    __extends(TaskLayer, _super);
    function TaskLayer() {
        var _this = _super.call(this) || this;
        _this.taskInfo = [];
        _this.taskListMap = [];
        _this.chests = [];
        return _this;
    }
    TaskLayer.prototype.onEnter = function () {
        var _this = this;
        var head = UI.addPic(this, "Task_head_png", 0, 0);
        var back = UI.addBtn(this, "Button_back_png", 0, 0, false, function () {
            Home.instace.changeLayer(_this, new HomeLayer());
        });
        this.taskInfo = TaskData.getTaskAll();
        this.taskChest = new egret.DisplayObjectContainer();
        this.taskList = new egret.DisplayObjectContainer();
        this.addChild(this.taskChest);
        this.addChild(this.taskList);
        var taskBg = UI.addPic(this.taskList, "Task_Tbox_right_png", 0, 0);
        this.taskList.width = taskBg.width;
        this.taskList.height = taskBg.height;
        var taskChestBg = UI.addPic(this.taskChest, "Task_Tbox_left_png", 0, 0);
        this.taskChest.width = taskChestBg.width;
        this.taskChest.height = taskChestBg.height;
        this.taskChest.x = 100;
        this.taskChest.y = 60;
        this.taskList.x = this.taskChest.x + this.taskChest.width + 10;
        this.taskList.y = this.taskChest.y;
        this.taskInfo.map(function (data, index) {
            // let lv: egret.TextField = UI.addPic(this.taskList, "Home_word_png", 30, 60+index*90, true);
            // let taskLv: egret.TextField = UI.addText(this.taskList, data.lv, 30 + lv.width + lv.x, lv.y, true, 30);
            // let button: egret.Bitmap = UI.addBtn(this.taskList, "Home_treasurebox_off_png", this.taskList.width - 100, lv.y, true, () => {
            //     console.log("完成任务");
            //     this.finishTask(data.type);
            // })
            // let info: egret.TextField = UI.addText(this.taskList, data.info, taskLv.x + 10, lv.y);
            // info.anchorOffsetY = info.height/2;
            // let count: egret.TextField = UI.addText(this.taskList, `${data.count}/${data.all}`, this.taskList.width/2 , lv.y - 30, true);
            // let progressBg: egret.Bitmap = UI.addPic(this.taskList, "Home_loading_bg_png", this.taskList.width/2, lv.y, true);
            // let progress: egret.Bitmap = UI.addPic(this.taskList, "Home_loading_ex_png", progressBg.x - progressBg.width/2, lv.y);
            // progress.anchorOffsetY = progress.height/2;
            // (data.lv == 3) || progress.$setScaleX(progressBg.width/progress.width);
            // this.taskListMap.push({taskLv: taskLv, info: info, progress: progress, count: count});
            var bg = UI.addPic(_this.taskList, "Task_box_inside_png", _this.taskList.width / 2, 20, true);
            bg.y += (bg.height + 10) * (index + 0.5);
            var reward = UI.addBtn(_this.taskList, "Task_button_adreward_png", bg.width - 15, bg.y, true, function () { });
            reward.anchorOffsetX = reward.width;
        });
        var moneyFlush = UI.addBtn(this.taskList, "Task_button_goldrefresh_png", this.taskList.width / 4, this.taskList.height - 40, true, function () {
            console.log("金币刷新任务");
            _this.flushTask();
        });
        var movieFlush = UI.addBtn(this.taskList, "Task_button_adrefresh_png", this.taskList.width / 4 * 3, moneyFlush.y, true, function () {
            _this.flushTask();
            console.log("看视频刷新任务");
        });
        var finishTask = TaskData.finishTaskInfo();
        var finishTaskInfo = TaskData.getChestInfo();
        var lineBg = UI.addPic(this.taskChest, "Task_progress_bg_png", this.taskChest.width / 2, this.taskChest.height / 2, true);
        var line = UI.addPic(this.taskChest, "Task_progress_loading_png", lineBg.x, lineBg.y + lineBg.height / 2, true);
        line.anchorOffsetY = line.height;
        line.scaleY = finishTask / 3;
        finishTaskInfo.map(function (data, index) {
            var chest;
            if (data == 'true') {
                chest = UI.addBtn(_this.taskChest, "Task_pic_treasure_open_png", _this.taskChest.width / 2, lineBg.y + (1 - index) * line.height / 2, true, function () {
                    console.log("开启任务宝箱");
                    _this.openChest(index + 1);
                });
                chest.touchEnabled = false;
            }
            else {
                chest = UI.addBtn(_this.taskChest, "Task_pic_treasure_png", _this.taskChest.width / 2, lineBg.y + (1 - index) * line.height / 2, true, function () {
                    console.log("开启任务宝箱");
                    _this.openChest(index + 1);
                });
                if (index >= finishTask)
                    chest.touchEnabled = false;
                else
                    UI.addPic(_this.taskChest, "Task_pic_treasure_shadow_png", chest.x, chest.y, true);
            }
            _this.chests.push(chest);
        });
    };
    TaskLayer.prototype.onExit = function () { };
    TaskLayer.prototype.finishTask = function (type) {
        if (this.taskInfo[type - 1].count == this.taskInfo[type - 1].all) {
            var reward = TaskData.finishTask(type);
            this.taskInfo = TaskData.getTaskAll();
            console.log(this.taskInfo);
            console.log(reward);
            this.changeTask(type);
        }
    };
    TaskLayer.prototype.changeTask = function (type) {
        var taskInfo = this.taskInfo[type - 1];
        this.taskListMap[type - 1].taskLv.$setText(taskInfo.lv.toString());
        this.taskListMap[type - 1].info.$setText(taskInfo.info);
        (taskInfo.lv == 3) || this.taskListMap[type - 1].progress.$setScaleX(taskInfo.count / taskInfo.all);
        this.taskListMap[type - 1].count.$setText(taskInfo.count + "/" + taskInfo.all);
        this.finishChest();
    };
    TaskLayer.prototype.openChest = function (lv) {
        var reward = TaskData.getChestReward(lv);
        this.chests[lv - 1].$setTexture(RES.getRes("Task_pic_treasure_open_png"));
        console.log(reward);
    };
    TaskLayer.prototype.finishChest = function () {
        var finishTask = TaskData.finishTaskInfo();
        if (finishTask <= 0)
            return;
        this.chests[finishTask - 1].touchEnabled = true;
    };
    TaskLayer.prototype.flushTask = function () {
        var _this = this;
        TaskData.initTask();
        this.chests.map(function (data) {
            data.$setTexture(RES.getRes("Home_treasurebox_off_png"));
            data.touchEnabled = false;
        });
        var taskInfo = TaskData.getTaskAll();
        // this.taskListMap.map((data, index) => {
        //     data.taskLv.$setText(taskInfo[index].lv.toString());
        //     data.count.$setText(`${taskInfo[index].count}/${taskInfo[index].all}`);
        //     data.info.$setText(taskInfo[index].info);
        //     data.progress.$setScaleX(taskInfo[index].count/taskInfo[index].all);
        // })
        taskInfo.map(function (data) {
            _this.changeTask(data.type);
        });
    };
    return TaskLayer;
}(Scene));
__reflect(TaskLayer.prototype, "TaskLayer");
//# sourceMappingURL=TaskLayer.js.map