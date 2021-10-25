class TaskLayer extends Scene {
    public constructor() {
        super();
    }

    public taskChest: egret.DisplayObjectContainer;
    public taskList: egret.DisplayObjectContainer;
    public taskInfo: TaskInfo[] = [];
    public taskListMap: {taskLv: egret.TextField, info: egret.TextField, progress: egret.Bitmap, count: egret.TextField}[] = [];
    public chests: egret.Bitmap[] = [];
    private time: egret.Timer;

    onEnter() {

        let head = UI.addPic(this, "Task_head_png", 0, 0);
        let back = UI.addBtn(this, "Button_back_png", 0, 0, false, () => {
            Home.instace.changeLayer(this, new HomeLayer());
        })
        this.taskInfo = TaskData.getTaskAll();

        this.taskChest = new egret.DisplayObjectContainer();
        this.taskList = new egret.DisplayObjectContainer();
        this.addChild(this.taskChest);
        this.addChild(this.taskList);

        
        let taskBg: egret.Bitmap = UI.addPic(this.taskList, "Task_Tbox_right_png", 0, 0);
        this.taskList.width = taskBg.width;
        this.taskList.height = taskBg.height;
        let taskChestBg: egret.Bitmap = UI.addPic(this.taskChest, "Task_Tbox_left_png", 0, 0);
        this.taskChest.width = taskChestBg.width;
        this.taskChest.height = taskChestBg.height;

        this.taskChest.x = 100;
        this.taskChest.y = 60;
        this.taskList.x = this.taskChest.x + this.taskChest.width + 10;
        this.taskList.y = this.taskChest.y;

        this.taskInfo.map((data,index) => {
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
            let bg: egret.Bitmap = UI.addPic(this.taskList, "Task_box_inside_png", this.taskList.width/2, 20, true);
            bg.y += (bg.height + 10)*(index + 0.5);

            let reward: egret.Bitmap = UI.addBtn(this.taskList, "Task_button_adreward_png", bg.width - 15, bg.y, true, () => {});
            reward.anchorOffsetX = reward.width;
        })

        let moneyFlush: egret.Bitmap = UI.addBtn(this.taskList, "Task_button_goldrefresh_png", this.taskList.width/4, this.taskList.height - 40, true, () => {
            console.log("金币刷新任务");
            this.flushTask();
        })

        let movieFlush: egret.Bitmap = UI.addBtn(this.taskList, "Task_button_adrefresh_png", this.taskList.width/4*3, moneyFlush.y, true, () => {
            this.flushTask();
            console.log("看视频刷新任务");
        })

        const finishTask: number = TaskData.finishTaskInfo();
        const finishTaskInfo: string[] = TaskData.getChestInfo();

        let lineBg: egret.Bitmap = UI.addPic(this.taskChest, "Task_progress_bg_png", this.taskChest.width/2, this.taskChest.height/2, true);
        let line: egret.Bitmap = UI.addPic(this.taskChest, "Task_progress_loading_png", lineBg.x, lineBg.y+lineBg.height/2, true);
        line.anchorOffsetY = line.height;
        line.scaleY = finishTask/3;
        
        finishTaskInfo.map((data,index) => {
            let chest: egret.Bitmap;
            if(data == 'true') {
                chest = UI.addBtn(this.taskChest, "Task_pic_treasure_open_png", this.taskChest.width/2, lineBg.y + (1-index)*line.height/2, true, () => {
                    console.log("开启任务宝箱");
                    this.openChest(index+1);
                });
                chest.touchEnabled = false;
            } else {
                chest = UI.addBtn(this.taskChest, "Task_pic_treasure_png", this.taskChest.width/2, lineBg.y + (1-index)*line.height/2, true, () => {
                        console.log("开启任务宝箱");
                        this.openChest(index+1);
                    })
                if(index>=finishTask)  chest.touchEnabled = false;
                else UI.addPic(this.taskChest, "Task_pic_treasure_shadow_png", chest.x, chest.y, true);
            }
            this.chests.push(chest);
        })

    }

    onExit() {}

    public finishTask(type: number) {//完成任务
        if(this.taskInfo[type-1].count == this.taskInfo[type-1].all) {
            const reward: Reward[] = TaskData.finishTask(type);
            this.taskInfo = TaskData.getTaskAll();
            console.log(this.taskInfo);
            console.log(reward);
            this.changeTask(type);
        }
    }

    public changeTask(type: number) {//修改任务为完成状态
        const taskInfo = this.taskInfo[type-1];
        this.taskListMap[type-1].taskLv.$setText(taskInfo.lv.toString());
        this.taskListMap[type-1].info.$setText(taskInfo.info);
        (taskInfo.lv == 3) || this.taskListMap[type-1].progress.$setScaleX(taskInfo.count/taskInfo.all);
        this.taskListMap[type-1].count.$setText(`${taskInfo.count}/${taskInfo.all}`);
        this.finishChest();
    }
    public openChest(lv: number) {//开启任务宝箱
        const reward: Reward[] = TaskData.getChestReward(lv);
        this.chests[lv-1].$setTexture(RES.getRes("Task_pic_treasure_open_png"));
        console.log(reward);
    }
    public finishChest() {//完成足够的任务可以开启宝箱
        const finishTask: number = TaskData.finishTaskInfo();
        if(finishTask<=0) return;
        this.chests[finishTask-1].touchEnabled = true;
    }

    public flushTask() {//刷新任务
        TaskData.initTask();

        this.chests.map((data) => {
            data.$setTexture(RES.getRes("Home_treasurebox_off_png"));
            data.touchEnabled = false;
        })
        
        const taskInfo = TaskData.getTaskAll();
        // this.taskListMap.map((data, index) => {
        //     data.taskLv.$setText(taskInfo[index].lv.toString());
        //     data.count.$setText(`${taskInfo[index].count}/${taskInfo[index].all}`);
        //     data.info.$setText(taskInfo[index].info);
        //     data.progress.$setScaleX(taskInfo[index].count/taskInfo[index].all);
        // })
        taskInfo.map((data) => {
            this.changeTask(data.type);
        })
    }
}