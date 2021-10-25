/*
*接收从Server发来的帧包,根据playerID存在对应的缓冲区中
*/
class FromServer {
    private _packCache: Object = {};
    public static I: FromServer;
    private _size: number = 0;

    constructor() {
        FromServer.I = this;
    }

    public destroy() {
        this._packCache = {};
    }


    public CacheOperFromServer(_frameid: number, _data: Array<any>)                  //存
    {
        this._packCache[_frameid] = _data;
        this._size++;
        return;
    }// end function

    public GetOperFromServer(_frameid: number) {
        if (this._packCache[_frameid] == undefined) {
            return null;
        }
        let data = this._packCache[_frameid];
        delete this._packCache[_frameid];
        this._size--;
        return data;
    }

    public _length() {
        return this._size;
    }
}