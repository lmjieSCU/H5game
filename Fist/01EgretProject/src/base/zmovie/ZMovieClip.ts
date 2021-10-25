/**
 * Created by zringhost on 14-12-14.
 */
module zmovie {
    class FrameScript {
        frameIndex: number;
        fun: Function;
        mc: any;
        constructor(param0: any, param1: number, param2: Function) {
            this.mc = param0;
            this.frameIndex = param1;
            this.fun = param2;
        }
    }



    class WaitingCallScript {
        funname: string;
        fun: Function;
        mc: any;

        params: Array<any>
        constructor(param0: any, param1: string, param2: Function, param3: Array<any>) {
            this.mc = param0;
            this.funname = param1;
            this.fun = param2;
            this.params = param3;
        }
    }

    export class ZMovieClip extends egret.DisplayObjectContainer {
        private libObj: any; _mcName: string; libScale: number; _direction: number; fmObj: any; beginFrame: number; endFrame: number; parentCFOObj: any; areaObj: any;
        private currFrame: number; totalFrame: number; frameTime: number; isPlay: boolean; currPlaylabel: string;
        public isLoop: boolean; currArea: any[]; img_depth: number; mcObj: any;
        private layerArr: any[]; parentPlayTime: number; scale: number; imgArr: any;
        public _scale: number;
        public _eventActFrame: number = -2;     //最近发生帧事件的帧
        public _nextFrameStop: boolean = false; //不允许nextFrame动作
        //
        public frameFuncArray: Array<FrameScript> = [];
        public WaitingCallFunArray: Array<WaitingCallScript> = [];
        public _name: string = "";
        public frameLabel: string = "";
        //
        public static EVENT_FRAME_COMPLETE: string = "zframeComplete";
        public static EVENT_MOVE: string = "move";
        public static EVENT_ENTER_FRAME: string = "zenterFrame";
        public static EVENT_MC_NAME: string = "mcName";
        public static EVENT_AREA: string = "area";
        public static EVENT_GOTOANDPLAYLABEL: string = "gotoAndPlayLabel";

        public constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1, _name: string = "") {
            super();
            this.isPlay = false;
            this._name = _name;
            this.setMovieObject(imgArr, libObj, mcName, scale_);
        }

        public getchildMovieBymcName(mcName: string): ZMovieClip {
            for (let i = 0; i < this.$children.length; i++) {
                if (this.$children[i] instanceof ZMovieClip) {
                    if ((<ZMovieClip>this.$children[i])._mcName == mcName) {
                        return (<ZMovieClip>this.$children[i]);
                    }
                }
            }
            return null;
        }

        public gotoAndStop(frame: number | string): void {
            if (typeof (frame) == "string") {
                if (frame == "") {
                    return;
                }
                // console.log(`执行动画：${frame}`);
                var labelObj: any;
                if (null != this.mcObj.frameLabels) {
                    labelObj = this.mcObj.frameLabels[frame];
                    if (null != labelObj) {
                        this.currPlaylabel = frame;
                        this.beginFrame = <number>labelObj.begin;
                        if (null == labelObj.end || false) {
                            this.endFrame = -1;
                        } else {
                            this.endFrame = labelObj.end - 1;
                        }
                        this.gotoAndStopNum(this.beginFrame);
                    } else {
                        this.beginFrame = 0;
                        this.endFrame = -1;
                        this.currPlaylabel = null;
                        this.gotoAndStopNum(this.beginFrame);
                    }
                }
                //恢复_nextFrameStop为false
                for (let i = 0; i < this.$children.length; i++) {
                    if (this.$children[i] instanceof zmovie.ZMovieClip) {
                        (<zmovie.ZMovieClip>this.$children[i])._nextFrameStop = false;
                        (<zmovie.ZMovieClip>this.$children[i]).gotoAndStop(1);
                    }
                }
                this._nextFrameStop = false;
            } else {
                //console.log(`执行动画：${frame}`);
                this.gotoAndStopNum(frame - 1);
                for (let i = 0; i < this.$children.length; i++) {
                    if (this.$children[i] instanceof zmovie.ZMovieClip) {
                        (<zmovie.ZMovieClip>this.$children[i]).gotoAndStop(1);
                    }
                }
            }
        }



        public gotoAndStopNum(frame: number): void {

            this.stopZMovie();
            this.currFrame = frame - 1;
            this.parentPlayTime = 0;
            this.isPlay = true;
            this.advanceTime();
            this.isPlay = false;
        }


        public addWaitingCallFun(mc: any, param: any[]) {
            for (let i = 0; i <= param.length - 3; i = i + 3) {
                let frameIndex1 = param[i];
                let fun1 = param[i + 1];
                let params = param[i + 2];
                let foundFlag: boolean = false;
                for (let j = 0; j < this.WaitingCallFunArray.length; j++) {
                    if (this.WaitingCallFunArray[j].funname == frameIndex1) {
                        foundFlag = true;
                        break;
                    }
                }
                if (!foundFlag) {
                    this.WaitingCallFunArray.push(new WaitingCallScript(mc, frameIndex1, fun1, params));
                }
            }
        }

        /**true表示已寻到该函数且执行 */
        public checkWaitingCallFun(_funname: string): boolean {
            for (let i = 0; i < this.WaitingCallFunArray.length; i++) {
                if (this.WaitingCallFunArray[i].funname == _funname) {
                    this.WaitingCallFunArray[i].fun.call(this.WaitingCallFunArray[i].mc, ...this.WaitingCallFunArray[i].params);
                    return true;
                }
            }
            return false;
        }




        public addFrameScript(mc: any, param: any[]) {
            this.frameLabel = mc._mcName;
            for (let i = 0; i <= param.length - 2; i = i + 2) {
                let frameIndex1 = param[i] - 1;
                let fun1 = param[i + 1];
                let foundFlag: boolean = false;
                for (let j = 0; j < this.frameFuncArray.length; j++) {
                    if (this.frameFuncArray[j].frameIndex == frameIndex1) {
                        foundFlag = true;
                        break;
                    }
                }
                if (!foundFlag) {
                    this.frameFuncArray.push(new FrameScript(mc, frameIndex1, fun1));
                }
            }
        }

        public checkFrameEvent() {
            let checkFrame: number = this.currFrame;
            for (let i = 0; i < this.frameFuncArray.length; i++) {
                if (this.frameFuncArray[i].frameIndex == checkFrame) {
                    if (this._mcName == this.frameLabel) {
                        if (this.currFrame != this._eventActFrame) {
                            this._eventActFrame = this.currFrame;//当前帧
                            this.frameFuncArray[i].fun.call(this.frameFuncArray[i].mc, this.frameFuncArray[i].mc);
                            return;
                        } else {
                            return;
                        }
                    }
                }
            }
            this._eventActFrame = -2;
            return;
        }

        public getChildMovie(param1: string): zmovie.ZMovieClip {
            return <zmovie.ZMovieClip>this.getChildByName(param1);
        }

        private onAddToStageScale(event: egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStageScale, this);
            this.formatScale();
        }

        public formatScale(): void {
            if (null == this.stage) {

                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStageScale, this);
                return;
            }
            var screenH: number = this.mcObj.screenH;
            var bl: number;
            if (this.stage.stageWidth > this.stage.stageHeight) {
                bl = this.stage.stageHeight / screenH;
            } else {
                bl = this.stage.stageWidth / screenH;
            }
            this.scaleX = bl;
            this.scaleY = bl;
        }

        public getTotalFrame(): number {
            return this.totalFrame;
        }
        public getCurrPlayLabel(): string {
            return this.currPlaylabel;
        }

        public getCurrFrame(): number {
            return this.currFrame + 1;
        }

        public getIsPlay(): boolean {
            return this.isPlay;
        }

        private _timeScale: number;
        public setTimeScale(num: number): void {
            if (0 >= num) {
                num = 0.01;
            }
            this._timeScale = num;
            if (null != this.mcObj) {
                this.frameTime = this.mcObj.frameTime / num;
            }

            for (var i: number = this.numChildren - 1; i >= 0; i--) {
                var mc: ZMovieClip = null;
                if (this.getChildAt(i) instanceof ZMovieClip) {
                    mc = <ZMovieClip>this.getChildAt(i);
                }
                if (null != mc) {
                    mc.setTimeScale(num);
                }
            }
        }

        public getTimeScale(): number {
            return this._timeScale;
        }

        public getLabels(): any {
            return this.mcObj.frameLabels;
        }


        public getIsExistLabel(l_name: string): boolean {
            if (null != this.mcObj.frameLabels && null != this.mcObj.frameLabels[l_name]) {
                return true;
            }
            return false;
        }



        public getCurrLabelObj(): any {
            var label_obj: any = this.getLabels();
            if (null != label_obj) {
                for (var name in label_obj) {
                    if (this.currFrame >= label_obj[name].begin) {
                        if (null != label_obj[name].end && this.currFrame >= label_obj[name].end) {
                            continue;
                        }

                        return label_obj[name];
                    }
                }
            }
            return null;
        }
















        public static getFrameMovieObject(o: any, frameI: number): any {
            if (null == o.f_arr) {
                o.f_arr = [];
            }
            o.f_arr.unshift(o);
            return o;
        }


        public gotoAndPlayLabel(label: string, isPlayToEnd: boolean = false): any {
            var labelObj: any;

            if (null != this.mcObj.frameLabels) {
                labelObj = this.mcObj.frameLabels[label];
                if (null != labelObj) {
                    this.currPlaylabel = label;
                    this.beginFrame = <number>labelObj.begin;
                    if (null == labelObj.end || isPlayToEnd) {
                        this.endFrame = -1;
                    } else {
                        this.endFrame = labelObj.end - 1;
                    }
                    this.gotoAndPlay(this.beginFrame);
                } else {
                    this.beginFrame = 0;
                    this.endFrame = -1;
                    this.currPlaylabel = null;
                    this.gotoAndPlay(this.beginFrame);
                }
                this.dispatchEventWith(ZMovieClip.EVENT_GOTOANDPLAYLABEL, false, label);
            }
            return labelObj;
        }

        public disposeLayerImg(): void {
            if (null != this.layerArr) {
                for (var l: number = this.layerArr.length - 1; l >= 0; l--) {
                    var img: ZImage = this.layerArr[l].img;
                    if (null != img) {
                        if (null != img.parent) {
                            img.parent.removeChild(img);
                        }
                    }
                    var mc: ZMovieClip = this.layerArr[l].mc;
                    if (null != mc) {
                        if (null != mc.parent) {
                            mc.parent.removeChild(mc);
                        }
                    }

                    var sp: ZShap = this.layerArr[l].sp;
                    if (null != sp) {
                        if (null != sp.parent) {
                            sp.parent.removeChild(sp);
                        }
                    }


                    var li: LargeImage = this.layerArr[l].li;
                    if (null != li) {
                        if (null != li.parent) {
                            li.parent.removeChild(li);
                        }
                    }

                }
            }
        }

        public setMovieObject(imgArr: any, libObj: any, mcName: string, scale_: number = 1): void {

            if (null == mcName) {
                mcName = "root";
            }
            this.imgArr = imgArr;

            this.libObj = libObj;
            this._mcName = mcName;

            this.mcObj = libObj.mcObjs[mcName];

            this.areaObj = this.mcObj.areaObject;
            this.libScale = 1;
            this._direction = 1;
            this.fmObj = this.mcObj.frameMoveObj;

            //var screenH:number = this.mcObj.screenH;

            this.currFrame = -1;
            this.totalFrame = this.mcObj.totalFrame;
            this.frameTime = this.mcObj.frameTime;
            this.beginFrame = 0;
            this.endFrame = -1;

            this._timeScale = 1;
            this.isLoop = true;
            this.disposeLayerImg();

            this.parentCFOObj = {};
            this.layerArr = new Array();
            this.currArea = null;
            this._nextFrameStop = false;


            var arr: any[] = this.mcObj.layers;
            var len: number = arr.length;



            for (var i: number = 0; i < len; i++) {
                var frameArr: any[] = new Array();
                var f_arr: any[] = arr[i];
                var f_len: number = f_arr.length;
                var pcfo: any = null;
                var k: number;

                for (var j: number = 0; j < f_len; j++) {
                    var cfo: any = f_arr[j];
                    var obj3d: any = null;

                    if (null == cfo.matrix) {
                        var frameNum: number = cfo.frameNum;
                        if (null != cfo.igd) {

                        } else if (null == cfo.libName && null != pcfo) {
                            if (null != cfo.x) {
                                cfo.libName = pcfo.libName;
                            }
                        }

                        if (null == cfo.a) {
                            cfo.a = 1;
                        }
                        if (null == cfo.b) {
                            cfo.b = 0;
                        }
                        if (null == cfo.c) {
                            cfo.c = 0;
                        }
                        if (null == cfo.d) {
                            cfo.d = 1;
                        }
                        if (null == cfo.al) {
                            cfo.al = 1;
                        }
                        if (null == cfo.cx) {
                            cfo.cx = 0;
                        } else {
                            cfo.cx *= -1;
                        }
                        if (null == cfo.cy) {
                            cfo.cy = 0;
                        } else {
                            cfo.cy *= -1;
                        }

                        if (null == cfo.r) {
                            cfo.r = 0;
                        }
                        if (null == cfo.sx) {
                            cfo.sx = 1;
                        }
                        if (null == cfo.sy) {
                            cfo.sy = 1;
                        }

                        if (null != cfo.scaleX || null != cfo.scaleY || null != cfo.scaleZ || null != cfo.rotationX || null != cfo.rotationY || null != cfo.rotationZ) {
                            obj3d = {};
                            obj3d.scaleX = cfo.scaleX;
                            obj3d.scaleY = cfo.scaleY;
                            obj3d.scaleZ = cfo.scaleZ;
                            obj3d.x = cfo.x;
                            obj3d.y = cfo.y;
                            obj3d.cx = cfo.cx;
                            obj3d.cy = cfo.cy;

                            cfo.cx = 0;
                            cfo.cy = 0;

                            cfo.x = 0;
                            cfo.y = 0;

                            obj3d.rotationX = cfo.rotationX;
                            obj3d.rotationY = cfo.rotationY;
                            obj3d.rotationZ = cfo.rotationZ;

                            if (null == obj3d.scaleX) {
                                obj3d.scaleX = 1;
                            }
                            if (null == obj3d.scaleY) {
                                obj3d.scaleY = 1;
                            }
                            if (null == obj3d.scaleZ) {
                                obj3d.scaleZ = 1;
                            }

                            if (null == obj3d.rotationX) {
                                obj3d.rotationX = 0;
                            }
                            if (null == obj3d.rotationY) {
                                obj3d.rotationY = 0;
                            }
                            if (null == obj3d.rotationZ) {
                                obj3d.rotationZ = 0;
                            }


                        }


                        cfo.matrix = new egret.Matrix(cfo.a, cfo.b, cfo.c, cfo.d, cfo.x, cfo.y);
                        for (k = 0; k < frameNum; k++) {
                            ZMovieClip.getFrameMovieObject(cfo, k + 1);
                        }

                        for (var o_name in cfo) {
                            if ("igd" != o_name && "id" != o_name && "maskID" != o_name && "op" != o_name && "mcName" != o_name && "matrix" != o_name && "al" != o_name && "libName" != o_name && "f_arr" != o_name && "cx" != o_name && "cy" != o_name && "r" != o_name && "sx" != o_name && "sy" != o_name) {
                                delete cfo[o_name];
                            }
                        }
                        if (null != obj3d) {
                            cfo.obj3d = obj3d;
                        }
                    }

                    frameArr.push(cfo);

                    var inFrameArr: any[] = cfo.f_arr;
                    if (null != inFrameArr) {
                        for (k = inFrameArr.length - 1; k >= 0; k--) {
                            frameArr.push(inFrameArr[k]);
                        }
                    }
                    pcfo = cfo;
                }
                this.layerArr.push({ frames: frameArr });
            }
            this.parentPlayTime = 0;
            this.scale = scale_;
            this.frameLabel = "";
            this.frameFuncArray = [];
            this.advanceTime();
            this._eventActFrame = -2;
        }



        public nextFrame(): void {
            if (this._nextFrameStop) {
                return;
            }
            this.stopZMovie();
            this.parentPlayTime = 0;
            this.isPlay = true;
            this.advanceTime();
            this.isPlay = false;
        }

        public prevFrame(): void {
            this.stopZMovie();
            this.currFrame -= 2;

            if (-1 > this.currFrame) {
                this.currFrame = this.totalFrame - 2;
            }
            if (-1 > this.currFrame) {
                this.currFrame = -1;
            }

            this.parentPlayTime = 0;
            this.isPlay = true;
            this.advanceTime();
            this.isPlay = false;
        }


        public stop(): void {
            this._nextFrameStop = true;
            this.stopZMovie();
        }

        public resetFrameStop() {
            //恢复_nextFrameStop为false
            this._nextFrameStop = false;
            // for (let i = 0; i < this.$children.length; i++) {
            //     if (this.$children[i] instanceof zmovie.ZMovieClip) {
            //         (<zmovie.ZMovieClip>this.$children[i])._nextFrameStop = false;
            //     }
            // }
        }

        public stopZMovie(): void {
            if (this.isPlay) {
                this.isPlay = false;
                this.removeEventListener(egret.Event.ENTER_FRAME, this.advanceTime, this);
                for (var i: number = this.numChildren - 1; i >= 0; i--) {
                    if (this.getChildAt(i) instanceof ZMovieClip) {
                        var fmc: ZMovieClip = <ZMovieClip>this.getChildAt(i);
                        fmc.stopZMovie();
                        // fmc.stop();
                    }
                }
            }
        }

        public play(): void {
            this._nextFrameStop = false;
            if (!this.isPlay) {
                this.isPlay = true;
                this.addEventListener(egret.Event.ENTER_FRAME, this.advanceTime, this);

                for (var i: number = this.numChildren - 1; i >= 0; i--) {
                    if (this.getChildAt(i) instanceof ZMovieClip) {
                        var fmc: ZMovieClip = <ZMovieClip>this.getChildAt(i);
                        if (this.mcObj.frameTime != fmc.mcObj.frameTime) {
                            fmc.play();
                        }
                    }
                }


            }
        }

        private frameComplete(): void {
            this.dispatchEventWith(ZMovieClip.EVENT_FRAME_COMPLETE, false);
        }

        private framePlay(): void {
            if (null != this.areaObj) {
                this.currArea = this.areaObj[this.currFrame];
                if (null != this.currArea) {
                    this.dispatchEventWith(ZMovieClip.EVENT_AREA, false, this.currArea);
                }
            }
            this.dispatchEventWith(ZMovieClip.EVENT_ENTER_FRAME);
        }
        private addChildToDepth(id: any): void {
            var children: number = this.numChildren;
            ////********
            //矩形隐藏处理。。。
            if(id instanceof ZMovieClip && _level0.IsInArray(ElementHide.array,id._mcName)){
                id.visible=false;
            }
            ////********
             
            if (0 == children) {
                this.addChild(id);
                return;
            }
            for (var i: number = children - 1; i >= 0; i--) {
                try {
                    var t_id: any = this.getChildAt(i);
                    if (null != t_id) {
                        if (t_id.img_depth < id.img_depth) {
                            if (children == i) {
                                this.addChild(id);
                            } else {
                                this.addChildAt(id, i + 1);
                            }
                            return;
                        }
                    }
                } catch (err) { }
            }
            this.addChildAt(id, 0);
        }


        public gotoAndPlay(frame: number): void {
            this.currFrame = frame - 1;
            this.parentPlayTime = 0;
            this.advanceTime();
            this.play();
        }

        public advanceTime(): void {
            var now: number = new Date().getTime();
            if (this.frameTime < now - this.parentPlayTime) {
                this.parentPlayTime = now;
                // this.checkFrameEvent();
                try {
                    //播放帧声音
                    let _heroName = this._mcName;
                    //查找是否有当前帧播放音乐
                    let _curFrameMusicList: Object = this.libObj["mcObjs"][_heroName]["soundObj"]
                    let _musicName = _curFrameMusicList[this.currFrame][0].libName
                    if (_musicName) {
                        //播放声音
                        if (_heroName.substr(0, 2) == "mc" || _heroName.substr(0, 2) == "sd") {
                            _heroName = (<zmovie.ZMovieClip>this.parent)._name;
                        }

                        if (_heroName == "root") {
                            _heroName = this._name;
                        }
                        const hero = this.libObj.fileName;

                        SoundCtrl.I.playZmovieSound(hero, _musicName)
                    }
                } catch (e) {

                }
                this.currFrame++;

                if (this.currFrame >= this.totalFrame || (-1 != this.endFrame && this.currFrame > this.endFrame)) {
                    if (!this.isLoop) {
                        this.currFrame -= 1;
                        this.stopZMovie();
                        this.frameComplete();
                        return;
                    }
                    this.frameComplete();
                    if (!this.isPlay) {
                        return;
                    }
                    this.currFrame = this.beginFrame;
                }
                var maskObj: any;
                var len: number = this.layerArr.length;
                for (var i: number = 0; i < len; i++) {
                    try {
                        var l_obj: any = this.layerArr[i];
                        var frames: Array<any> = l_obj.frames;
                        var cfo: any;
                        var img: ZImage = null;
                        var mc: ZMovieClip = null;
                        var li: LargeImage = null;
                        var sp: ZShap = null;
                        if (l_obj.img instanceof ZImage) {
                            img = <ZImage>l_obj.img;
                        }
                        if (l_obj.mc instanceof ZMovieClip) {
                            mc = <ZMovieClip>l_obj.mc;
                        }
                        if (l_obj.li instanceof LargeImage) {
                            li = <LargeImage>l_obj.li;
                        }
                        if (l_obj.sp instanceof ZShap) {
                            sp = <ZShap>l_obj.sp;
                        }
                        try {
                            cfo = frames[this.currFrame];
                            if (this.parentCFOObj[i] == cfo || null == cfo) {


                                if (null != mc && null != mc.parent && this.mcObj.frameTime == mc.mcObj.frameTime) {
                                    mc.nextFrame();
                                }


                                continue;
                            }
                            this.parentCFOObj[i] = cfo;
                        } catch (err) {
                            if (null != img && this == img.parent) {
                                this.removeChild(img);
                            }
                            if (null != mc && null != mc.parent) {
                                mc.stopZMovie();
                                mc.parent.removeChild(mc);
                            }
                            if (null != li && this == li.parent) {
                                this.removeChild(li);
                            }
                            continue;
                        }
                        if (null == cfo.libName) {
                            if (null != cfo.igd) {
                                if (null == sp) {
                                    sp = new ZShap();
                                    sp.touchEnabled = false;
                                    l_obj.sp = sp;
                                }
                                sp.img_depth = i;
                                sp.draw(cfo.igd);
                                this.addChildToDepth(sp);
                            }
                            if (null != img && this == img.parent) {
                                this.removeChild(img);
                            }

                            if (null != mc && null != mc.parent) {
                                mc.stopZMovie();
                                mc.parent.removeChild(mc);
                            }
                            if (null != li && this == li.parent) {
                                this.removeChild(li);
                            }
                        } else {
                            if (null != sp && this == sp.parent) {
                                this.removeChild(sp);
                            }
                            var t: egret.Texture = Util.getTextureByName(this.imgArr, cfo.libName);

                            if (null == t) {
                                var showDisplay: egret.DisplayObject;
                                if (null == this.libObj.mcObjs[cfo.libName]) {
                                    if (null == li) {
                                        li = new LargeImage(this.imgArr, this.libObj, cfo.libName);
                                        li.touchEnabled = false;
                                        l_obj.li = li;
                                        li.img_depth = i;
                                    } else {
                                        li.setObject(this.imgArr, this.libObj, cfo.libName);
                                    }
                                    showDisplay = li;
                                    li.matrix = cfo.matrix;
                                    if (null == li.parent) {
                                        this.addChildToDepth(li);
                                    }


                                    if (null != mc && this == mc.parent) {
                                        this.removeChild(mc);
                                        mc.visible = false;
                                    }

                                } else {
                                    if (null == mc) {
                                        mc = new ZMovieClip(this.imgArr, this.libObj, cfo.libName, 1, this._name);
                                        mc.touchEnabled = false;
                                        l_obj.mc = mc;
                                        mc.img_depth = i;

                                    } else {
                                        if (cfo.libName != mc._mcName) {
                                            mc.visible = true;
                                            //setMovieObject 有bug  visible=false问题导致b4770之类不显示
                                            mc.setMovieObject(this.imgArr, this.libObj, cfo.libName);
                                        }
                                    }
                                    showDisplay = mc;


                                    if (null == mc.parent) {
                                        if (this.isPlay) {
                                            if (this.mcObj.frameTime == mc.mcObj.frameTime) {
                                                mc.gotoAndStop(0);
                                            } else {
                                                mc.gotoAndPlay(0);
                                            }
                                        } else {
                                            mc.gotoAndStop(0);
                                        }
                                        mc.setTimeScale(this._timeScale);
                                        this.addChildToDepth(mc);
                                    } else {
                                        if (this.mcObj.frameTime == mc.mcObj.frameTime) {
                                            //mc.nextFrame();
                                        }
                                    }

                                    if (this == mc.parent) {
                                        mc.matrix = cfo.matrix;
                                    }

                                    if (null != li && this == li.parent) {
                                        this.removeChild(li);
                                    }

                                }

                                //showDisplay._anchorOffsetX = cfo.cx;
                                //showDisplay._anchorOffsetY = cfo.cy;
                                showDisplay.anchorOffsetX = cfo.cx;
                                showDisplay.anchorOffsetY = cfo.cy;
                                showDisplay.alpha = cfo.al;

                                if (null != img && this == img.parent) {
                                    this.removeChild(img);
                                }

                            } else {

                                if (null == img) {
                                    img = new ZImage(t, this.libObj["fileName"], cfo.libName, true);
                                    img.img_depth = i;
                                    img.touchEnabled = false;
                                    l_obj.img = img;
                                } else {
                                    img.setTexture(t, this.libObj["fileName"], cfo.libName, true);
                                }

                                if (null != this.libObj.imgScale && null != this.libObj.imgScale[cfo.libName]) {
                                    img.setScale(this.libObj.scale * this.libObj.imgScale[cfo.libName]);
                                } else {
                                    img.setScale(this.libObj.scale);
                                }




                                img.displayLibName = cfo.libName;

                                img.matrix = cfo.matrix;
                                // img._anchorOffsetX = cfo.cx;
                                // img._anchorOffsetY = cfo.cy;

                                img.anchorOffsetX = cfo.cx;
                                img.anchorOffsetY = cfo.cy;
                                img.alpha = cfo.al;

                                if (null == img.parent) {
                                    this.addChildToDepth(img);
                                }
                                if (null != mc && null != mc.parent) {
                                    mc.stopZMovie();
                                    mc.parent.removeChild(mc);
                                }
                                if (null != li && this == li.parent) {
                                    this.removeChild(li);
                                }

                            }

                        }

                        var d: egret.DisplayObject = null;
                        if (null != img && null != img.parent) {
                            d = img;
                        } else if (null != mc && null != mc.parent) {
                            d = mc;
                        } else if (null != li && null != li.parent) {
                            d = li;
                        } else if (null != sp && null != sp.parent) {
                            d = sp;
                        }

                        if (null != d) {

                            /*var sp3d:ZSprite3D = l_obj.sp3d;
 
                             var obj3d:any = cfo.obj3d;
                             if(null != obj3d){
                                 if(d.parent != sp3d){
                                     if(null == sp3d){
                                         sp3d = new ZSprite3D();
                                         l_obj.sp3d = sp3d;
                                     }
                                     sp3d.addIDisplay(<IDisplay><any> d);
                                     this.addChildToDepth(sp3d);
                                 }
 
                                 sp3d.pivotX = obj3d.cx;
                                 sp3d.pivotY = obj3d.cy;
 
                                 sp3d.x = obj3d.x;
                                 sp3d.y = obj3d.y;
                                 sp3d.scaleX = obj3d.scaleX;
                                 sp3d.scaleY = obj3d.scaleY;
                                 sp3d.scaleZ = obj3d.scaleZ;
                                 sp3d.rotationX = obj3d.rotationX;
                                 sp3d.rotationY = obj3d.rotationY;
                                 sp3d.rotationZ = obj3d.rotationZ;
 
                             }else{
                                 if(d.parent == sp3d){
                                     if(null != sp3d.parent){
                                         sp3d.parent.removeChild(sp3d);
                                     }
                                     this.addChildToDepth(<IDisplay><any> d);
                                 }
                             }*/


                            if (null != cfo.maskID) {

                                if (null != maskObj && null != maskObj[cfo.maskID] && null == d.parent.mask) {
                                    var maskD: egret.DisplayObject = maskObj[cfo.maskID];
                                    var maskRect: egret.Rectangle = new egret.Rectangle(maskD.x, maskD.y, maskD.width, maskD.height);
                                    //d.mask = maskRect;
                                    d.parent.mask = maskRect;
                                }
                            } else if (null != cfo.id) {
                                if (null == maskObj) {
                                    maskObj = {};
                                }
                                maskObj[cfo.id] = d;

                                d.visible = false;
                            }



                            if (null != cfo.mcName) {
                                d.name = cfo.mcName;
                                this.dispatchEventWith(ZMovieClip.EVENT_MC_NAME, false, d);
                            }

                        }

                    } catch (err) {
                    }
                }
                if (null != this.fmObj) {
                    var mo: any = this.fmObj[this.currFrame];
                    if (null != mo) {
                        if (null == mo[this._scale]) {
                            mo[this._scale] = {};
                            mo[this._scale].x = mo.x * this._scale;
                            mo[this._scale].y = mo.y * this._scale;
                            mo[this._scale].moveType = mo.moveType;
                        }
                        this.dispatchEventWith(ZMovieClip.EVENT_MOVE, false, mo[this._scale]);
                    }
                }
                this.framePlay();





            }
        }



    }
}