class NewHand {
    /**
     * @param isJump 1代表跳过，0代表未跳过
     * @param isComplete 1代表完成了新手教程,0代表未完成
     * @param playCount 进行的游戏次数
     */
    public static getNewHandInfo() {//获取新手的信息
        const isJump = (egret.localStorage.getItem("isJump") == '1');
        const isComplete = (egret.localStorage.getItem("isComplete") == '1');
        const count = Number(egret.localStorage.getItem("playCount")) || 0;
        const newHandInfo: NewHandInfo = {
            isJump: isJump,
            isComplete: isComplete,
            playCount: count
        }
        return newHandInfo;
    }
    public static setNewHand(type: string, num: number) {//修改新手信息
        switch(type) {
            case 'isJump': egret.localStorage.setItem('isJump', num.toString());break;
            case 'isComplete': egret.localStorage.setItem('isComplete', num.toString());break;
            case 'playCount':
                const count = Number(egret.localStorage.getItem('playCount')); 
                egret.localStorage.setItem('playCount', `${count+num}`);
                break;
        }
    }
}