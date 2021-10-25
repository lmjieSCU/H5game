class UI {
	public static WINSIZE_H: number = 0;
	public static WINSIZE_W: number = 0;


	public static getEffectStr(str2: string, num: number = 6): any {
		let str: any = [];
		for (let i = 0; i <= num; i++) {
			str.push(str2 + i + "_json");
		}
		return str;
	}
	//

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

	public static numberBetween(param1: number, param2: number, param3: boolean = false): number {
		var _loc_4;
		if (!param3) {
			_loc_4 = param1 + Math.random() * (param2 - param1);
		}
		else {
			if (param2 >= param1) {
				_loc_4 = param1 + Math.random() * ((param2 + 1) - param1);
			}
			else {
				_loc_4 = param2 + Math.random() * ((param1 + 1) - param2);
			}
			_loc_4 = Math.floor(_loc_4);
		}
		return _loc_4;
	}// end function

	public static getEffectMovie(param: string): zmovie.ZMovieClip {
		let effect_lst: Array<string> = [
			"chunli", "Igniz", "iori", "k_", "kula", "kyo", "mai", "moriya", "orochi", "ryu", "terry",
			"fire", "hit", "wave", "bgEff", "superface"
		];

		for (let i = 0; i < effect_lst.length; i++) {
			if (param.substr(0, effect_lst[i].length) == effect_lst[i]) {
				let str = effect_lst[i];
				if (str == "k_") {
					str = "k";
				}
				let effectNmbb = "effect_" + str;
				let effect_mc = new zmovie.ZMovieClip(this.getEffectStr(effectNmbb), RES.getRes(effectNmbb + "_json"), param);
				return effect_mc;
			}
		}
		let effectNm: string = "effect_other";
		let effect_mc = new zmovie.ZMovieClip(this.getEffectStr(effectNm), RES.getRes(effectNm + "_json"), param);
		return effect_mc;
	}

	public static getHeroMovieJson(heroName: string): any {
		let Js_object = [];
		for (let i = 0; i < 8; i++) {
			let nm: string = heroName + i + "_json";
			if (RES.getRes(nm)) {
				Js_object.push(nm);
			} else {
				break;
			}
		}
		return Js_object;
	}


	public static getAtan_angleOfLine(x1: number, y1: number, x2: number, y2: number): number {
		let der_x = x2 - x1;
		let der_y = y2 - y1;
		return Math.atan(der_y / der_x);
	}


	public static RGB2HEX16(R: number, G: number, B: number): number {
		var result_string: Array<string> = new Array();
		let Map: Array<string> = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		//result_string.push("0x");
		result_string.push(Map[(R / 16)]);
		result_string.push(Map[(R % 16)]);
		result_string.push(Map[(G / 16)]);
		result_string.push(Map[(G % 16)]);
		result_string.push(Map[(B / 16)]);
		result_string.push(Map[(B % 16)]);
		return Number(result_string);
	}


	public static setUIImageColor(image: any, color: number) {
		// 将16进制颜色分割成rgb值, 小游戏太耗资源
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
	public static setNormal(image: any) {
		image.filters = null;
	}

	public static setGray(image: any) {

		let colorMatrix = [
			0.3, 0.6, 0, 0, 0,
			0.3, 0.6, 0, 0, 0,
			0.3, 0.6, 0, 0, 0,
			0, 0, 0, 1, 0
		];
		let colorFilter = new egret.ColorMatrixFilter(colorMatrix);
		image.filters = [colorFilter];
	}

	//增加按钮
	public static addBtn(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean=false, listener: Function, mc: any = null, scale: number = 1, sound: string = 'click'): any {
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
			btn.scaleX = 1.05 * scale
			btn.scaleY = 1.05 * scale;
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			btn.scaleX = 1 * scale;
			btn.scaleY = 1 * scale;
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			btn.scaleX = 1 * scale;
			btn.scaleY = 1 * scale;
			if (listener != null) {
				if (mc)
					listener.call(mc, mc);
				else
					listener.call(node, node);
			}
			Sound.getInstance().oneTimesPlay(sound);
		}, node);
		btn.scaleX = scale;
		btn.scaleY = scale;
		btn.$setTouchEnabled(true);
		return btn;
	}
	//
	public static addBtnTouch(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false, listenerTouch: Function, listenerRelease: Function, scale: number = 1): any {
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
			btn.scaleX = 1.1 * scale;
			btn.scaleY = 1.1 * scale;
			if (listenerTouch)
				listenerTouch.call(node, node);
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			btn.scaleX = 1 * scale;
			btn.scaleY = 1 * scale;
			if (listenerRelease)
				listenerRelease.call(node, node);
		}, node);
		btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			btn.scaleX = 1 * scale;
			btn.scaleY = 1 * scale;
			if (listenerRelease)
				listenerRelease.call(node, node);
		}, node);
		btn.scaleX = scale;
		btn.scaleY = scale;
		btn.$setTouchEnabled(true);
		return btn;
	}
	public static addPicPath(node: any, path: any, x: number, y: number, bottormFlag: boolean = true, scale: number = 1): any {
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
			image.scaleX = scale;
			image.scaleY = scale;
			return image;
		}, this);
		loader.load(path);
	}
	//增加图片
	public static addPic(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false
		, scale: number = 1): any {
		let image = new egret.Bitmap;
		image.texture = RES.getRes(path);
		node.addChild(image);
		image.x = x;
		image.y = y;
		image.scaleX = scale;
		image.scaleY = scale;
		if (anchorCenterFlag) {
			image.anchorOffsetX = image.width / 2;
			image.anchorOffsetY = image.height / 2;
		}
		return image;
	}
	public static addJsonPic(node: any, json: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false
		, scale: number = 1): any {
		let image = new egret.Bitmap;
		image.texture = RES.getRes(json).getTexture(path);
		node.addChild(image);
		image.x = x;
		image.y = y;
		image.scaleX = scale;
		image.scaleY = scale;
		if (anchorCenterFlag) {
			image.anchorOffsetX = image.width / 2;
			image.anchorOffsetY = image.height / 2;
		}
		return image;
	}
	public static addIconsPic(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false
		, scale: number = 1): any {
		let image = new egret.Bitmap;
		image.texture = RES.getRes("icons_json").getTexture(path)
		node.addChild(image);
		image.x = x;
		image.y = y;
		image.scaleX = scale;
		image.scaleY = scale;
		if (anchorCenterFlag) {
			image.anchorOffsetX = image.width / 2;
			image.anchorOffsetY = image.height / 2;
		}
		return image;
	}

	public static setText(t: any, size: number, color: any) {
		t.textColor = color;
		t.size = size;
	}
	//增加文本
	public static addText(node: any, desc: any, x: number, y: number, anchorCenterFlag: boolean = false, size: number = 0, color: any = 0): any {
		let label: egret.TextField = new egret.TextField();
		label.text = desc;
		label.textColor = 0x000000;
		node.addChild(label);
		label.x = x;
		label.y = y;

		if (size != 0) {
			label.size = size;
		}
		if (color != 0) {
			label.textColor = color;
		}
		if (anchorCenterFlag) {
			label.anchorOffsetX = label.width / 2;
			label.anchorOffsetY = label.height / 2;
		}
		return label;
	}

	public static removeSelf(node: any) {
		node.parent.removeChild(node);
	}

	public static addMovie(node: any, name: any, x: number = 0, y: number = 0, rootName: string): any {
		let movie = new zmovie.ZMovieClip(name + "0_json", RES.getRes(name + "_json"), rootName);
		node.addChild(movie);
		movie.x = x;
		movie.y = y;
		return movie;
	}


	public static addClickAction(node: any, bb: any, listenerTouch: Function, mc: any = null, sound: string = 'click') {
		let scaleX = bb.scaleX;
		let scaleY = bb.scaleY;
		bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
			bb.scaleX = scaleX * 1.2;
			bb.scaleX = scaleY * 1.2;
		}, this);

		bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
			bb.scaleX = 1;
			bb.scaleY = 1;
			if (mc != null)
				listenerTouch.apply(mc, mc);
			else
				listenerTouch.apply(node, node);
		}, node);
		bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
			bb.scaleX = 1;
			bb.scaleY = 1;
			if (mc != null)
				listenerTouch.apply(mc, mc);
			else
				listenerTouch.apply(node, node);
			Sound.getInstance().oneTimesPlay(sound);
		}, node);
		bb.$setTouchEnabled(true);
	}



	public static addBg(node, path) {
		// UI.addPic(node, "bg_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		// let black: egret.Bitmap = UI.addPic(node, "background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H);
		// black.scaleX = 30;
		// black.scaleY = 170 / 40;
		// black.anchorOffsetX = 20;
		// black.anchorOffsetY = 40;
		let bg: egret.Bitmap = UI.addPic(node, path, UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
		const scale = (UI.WINSIZE_W/bg.width, UI.WINSIZE_H/bg.height);
		bg.scaleX = scale;
		bg.scaleY = scale;
		return bg;
	}
	//添加网络图片
	public static addIconPic(node, url, x, y, scale) {
		let imgLoader: egret.ImageLoader = new egret.ImageLoader();
		egret.ImageLoader.crossOrigin = "anonymous";
		imgLoader.load(url);
		imgLoader.once(egret.Event.COMPLETE, (e: egret.Event) => {
			let texture = new egret.Texture();
			texture.bitmapData = e.currentTarget.data;
			//
			let img = new egret.Bitmap;
			img.texture = texture;
			node.addChild(img);
			img.x = x;
			img.y = y;
			img.scaleX = 62 / img.width;
			img.scaleY = 58 / img.height;
		}, this);
	}
}