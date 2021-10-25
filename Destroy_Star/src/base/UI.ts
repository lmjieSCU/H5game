class UI {
	public static WINSIZE_H: number = 0;
	public static WINSIZE_W: number = 0;

	public static BitmapData(width: number, height: number, trans: boolean, color: number): egret.Bitmap {
		let btn = new egret.Bitmap;
		btn.texture = RES.getRes("white_png");
		btn.width = width;
		btn.height = height;
		if (trans)
			btn.alpha = 0;
		else
			btn.alpha = 1;
		UI.setImageColor(btn, color);
		return btn;
	}



	public static RGB2HEX16(R: number, G: number, B: number): number {
		var result_string: Array<string> = new Array();
		let Map: Array<string> = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		result_string.push("0x");
		result_string.push(Map[(R / 16)]);
		result_string.push(Map[(R % 16)]);
		result_string.push(Map[(G / 16)]);
		result_string.push(Map[(G % 16)]);
		result_string.push(Map[(B / 16)]);
		result_string.push(Map[(B % 16)]);
		return Number(result_string);
	}
	//  public static setMovieColor(image: egret.DisplayObject, color: ColorTransform) {

	// 	 let colorMatrix = [
	// 		 1, 0, 0, 0, 0,
	// 		 0, 1, 0, 0, 0,
	// 		 0, 0, 1, 0, 0,
	// 		 0, 0, 0, 1, 0
	// 	 ];
	// 	 if(!color){
	// 		 return
	// 	 }
	// 	 colorMatrix[0] = color.r / 255;
	// 	 colorMatrix[6] = color.g / 255;
	// 	 colorMatrix[12] = color.b / 255;
	// 	 let colorFilter = new egret.ColorMatrixFilter(colorMatrix);
	// 	 image.filters = [colorFilter];
	//  }

	public static setImageColor(image: any, color: number) {
		// 将16进制颜色分割成rgb值
		let spliceColor = (color) => {
			let result = { r: -1, g: -1, b: -1 };
			result.b = color % 256;
			result.g = Math.floor((color / 256)) % 256;
			result.r = Math.floor((color / 256) / 256);
			return result;
		}
		let result = spliceColor(color);
		let colorMatrix = [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		];
		colorMatrix[0] = result.r / 255;
		colorMatrix[6] = result.g / 255;
		colorMatrix[12] = result.b / 255;
		let colorFilter = new egret.ColorMatrixFilter(colorMatrix);

		image.filters = [colorFilter];
	}
	//增加按钮
	public static addBtn(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false, listener: Function): any {
		let btn = new egret.Bitmap;
		btn.texture = RES.getRes(path);
		node.addChild(btn);
		if (anchorCenterFlag) {
			btn.anchorOffsetX = btn.width / 2;
			btn.anchorOffsetY = btn.height / 2;
		}
		btn.x = x;
		btn.y = y;
		let scalex = btn.scaleX;
		let scaley = btn.scaleY;
		btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
			btn.scaleX = 1.05 * scalex;
			btn.scaleY = 1.05 * scaley;
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			btn.scaleX = 1 * scalex;
			btn.scaleY = 1 * scaley;
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			btn.scaleX = 1 * scalex;
			btn.scaleY = 1 * scaley;
			if (listener != null)
				listener.call(node);
		}, node);
		btn.$setTouchEnabled(true);
		return btn;
	}
	public static addBtnTouch(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false, listenerTouch: Function, listenerRelease: Function): any {
		let btn = new egret.Bitmap;
		btn.texture = RES.getRes(path);
		node.addChild(btn);
		if (anchorCenterFlag) {
			btn.anchorOffsetX = btn.width / 2;
			btn.anchorOffsetY = btn.height / 2;
		}
		btn.x = x;
		btn.y = y;
		btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
			btn.scaleX = 1.1;
			btn.scaleY = 1.1;
			listenerTouch.apply(0);
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			btn.scaleX = 1;
			btn.scaleY = 1;
			listenerRelease.apply(0);
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			btn.scaleX = 1;
			btn.scaleY = 1;
			listenerRelease.apply(0);
		}, node);
		return btn;
	}
	public static addPicPath(node: any, path: any, x: number, y: number, bottormFlag: boolean = true): any {
		var loader: egret.ImageLoader = new egret.ImageLoader();
		loader.addEventListener(egret.Event.COMPLETE, function (arg) {
			var bitmapData: egret.BitmapData = loader.data;
			let tt: egret.Texture = new egret.Texture();
			tt.bitmapData = bitmapData;
			//
			let image = new egret.Bitmap;
			image.texture = tt;
			node.addChild(image);
			image.x = x;
			image.y = y;
			image.anchorOffsetX = 1068 / 2;
			image.anchorOffsetY = 480 / 2;
			if (bottormFlag) {
				node.setChildIndex(image, 0);
			}
			return image;
		}, this);
		loader.load(path);
	}
	//增加图片
	public static addPic(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false): any {
		let image = new egret.Bitmap;
		image.texture = RES.getRes(path);
		node.addChild(image);
		image.x = x;
		image.y = y;
		if (anchorCenterFlag) {
			image.anchorOffsetX = image.width / 2;
			image.anchorOffsetY = image.height / 2;
		}
		return image;
	}

	public static setXandY(image: any, x: number, y: number): void {
		image.x = x;
		image.y = y;
	}

	public static setscalXandY(image: any, x: number, y: number): void {
		image.scaleX = x;
		image.scaleY = y;
	}

	//增加文本
	public static addText(node: any, desc: any, x: number, y: number, tag: boolean = false): any {
		let label: egret.TextField = new egret.TextField();
		label.text = desc;
		label.textColor = 0xffffff;
		// label.fontFamily = "HeiTi";
		node.addChild(label);
		if (tag) {
			label.anchorOffsetX = label.width / 2;
			label.anchorOffsetY = label.height / 2;
		}
		label.x = x;
		label.y = y;
		return label;
	}



	public static removeSelf(node: any) {
		node.parent.removeChild(node);
	}



	public static addClickAction(node: any, bb: any, listenerTouch: Function) {
		let scaleX = bb.scaleX;
		let scaleY = bb.scaleY;
		bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
			bb.scaleX = scaleX * 1.2;
			bb.scaleX = scaleY * 1.2;
		}, this);

		bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			bb.scaleX = scaleX;
			bb.scaleY = scaleY;
			listenerTouch.apply(0);
		}, node);
		bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			bb.scaleX = scaleX;
			bb.scaleY = scaleY;
			listenerTouch.apply(0);
		}, node);
		bb.$setTouchEnabled(true);
	}




	public static playSound(name: string) {
		var sound: egret.Sound = new egret.Sound();
		sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
			sound.play(0, 1);  //播放一次， 0， 0背景音乐 
		}, this);
		sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
			console.log("loaded error!");
		}, this);
		sound.load("resource/sounds/" + name + ".wav");
	}

	public static playMusic(name: string) {
		var sound: egret.Sound = new egret.Sound();
		sound.addEventListener(egret.Event.COMPLETE, function loadOver(event: egret.Event) {
			sound.play(0, 0);  //播放一次， 0， 0背景音乐 
		}, this);
		sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event: egret.IOErrorEvent) {
			console.log("loaded error!");
		}, this);
		sound.load("resource/assets/sound/" + name + ".mp3");
	}

	public static saveItem(key: string, value: number) {
		egret.localStorage.setItem(key, value.toString());
	}
	public static getItem(key: string): number {
		var score: string = egret.localStorage.getItem(key);
		return Number(score);
	}
	public static isFirstEntry(): boolean {
		var score: string = egret.localStorage.getItem("firstFlag_lian");
		UI.saveItem("firstFlag_lian", 1);
		let first: number = Number(score);
		if (first == 0)
			return true;
		else
			return false;
	}
}