/**键盘监听
 * 键盘库不支持联机
 */
class Key {
    public kb: KeyBoard;
    public _SendOrder = {};
    private _DownOrder = {};
    private static instance: Key;
    public keycontrols: Array<KeyControl>;


    public constructor() {
        this.kb = new KeyBoard();
        this.keycontrols = new Array<KeyControl>();
        this._SendOrder["lastKey"] = "";
        this._SendOrder["isKeyDown"] = false;
        this.kb.addEventListener(KeyBoard.onkeydown, this.onKeyDown, this);
        this.kb.addEventListener(KeyBoard.onkeyup, this.onKeyUp, this);
        return;
    }

    public initlize(keycontrol: KeyControl) {
        if (this.keycontrols.indexOf(keycontrol) != -1) {
            return;
        }
        this.keycontrols.push(keycontrol);
    }


    public static getInstance(): Key {
        if (this.instance == null) {
            this.instance = new Key();
        }
        return this.instance;
    }

    public SendPacket(): void {
        if (GameModel.currentMode != GameModel.VS_PERSON) {//单机模式
            this.setPacket(this._SendOrder);
            return;
        } else {
            //联机模式
            const sendFramePara = { data: this._SendOrder };
            RoomManager.getInstance().room.sendFrame(sendFramePara);
            return;
        }
    }

    public setPacket(_pressDownOrder: any) {
        for (let index = 0; index < this.keycontrols.length; index++) {
            this.keycontrols[index].isKeyDown = _pressDownOrder["isKeyDown"];
            this.keycontrols[index].lastKey = _pressDownOrder["lastKey"];
            this.keycontrols[index].onKeyDown();
        }
        for (let index in _pressDownOrder) {
            this._DownOrder[index] = _pressDownOrder[index];
        }
        return;
    }

    public onKeyDown(event) {
        this._SendOrder = { "lastKey": "", "isKeyDown": true };
        for (let index = 0; index < event.data.length; index++) {
            this._SendOrder[event.data[index]] = true;
        }
        if (event.data.length > 0) {
            this._SendOrder["lastKey"] = event.data[event.data.length - 1];
        }
        // this.SendPacket();
        for (let index = 0; index < this.keycontrols.length; index++) {
            this.keycontrols[index].isKeyDown = this._SendOrder["isKeyDown"];
            this.keycontrols[index].lastKey = this._SendOrder["lastKey"];
            this.keycontrols[index].onKeyDown();
        }
    }

    public onKeyUp(event) {
        this._SendOrder = { "lastKey": "", "isKeyDown": false };
        for (let index = 0; index < event.data.length; index++) {
            this._SendOrder[event.data[index]] = true;
        }
        if (event.data.length > 0) {
            this._SendOrder["lastKey"] = event.data[event.data.length - 1];
        }
        // this.SendPacket();
        for (let index = 0; index < this.keycontrols.length; index++) {
            this.keycontrols[index].isKeyDown = this._SendOrder["isKeyDown"];
            this.keycontrols[index].lastKey = this._SendOrder["lastKey"];
            this.keycontrols[index].onKeyDown();
        }
    }

    public initial(){
        
    }


    public isDown(key: string): boolean {
        if (this._SendOrder[key] != undefined) {
            return true;
        }
        // if (this._DownOrder[key] != undefined) {
        //     return true;
        // }
        return false;
    }
}