var player1id: string = null;//
var player2id: string = null;
class VSScene extends Scene {
	public result: number;
	public static instance: VSScene;
	public secondFlag: number = 0;
	public room:  MGOBE.Room;
	public _frameIndex: number = 1;
	public Listener = MGOBE.Listener;
	

	public logTxt: egret.TextField;

	public constructor() {
		super();
	}
	protected onEnter() {
		VSScene.instance = this;
		let ss = UI.addPic(this, "vein_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
		UI.setImageColor(ss, 100000000);
		ss.scaleX = 20;
		ss.scaleY = 20;
		MGOBE.Listener.init(mgobe_conf.gameInfo, mgobe_conf.config, event => {	//初始化Listener对象
			if (event.code === 0) {
				console.log("hello success");
				this.room = new MGOBE.Room();	//创建房间、加房、匹配等接口调用直接利用 room 实例即可
				MGOBE.Listener.add(this.room);		//注册广播监听
				egret.setTimeout(function (arg) { VSScene.instance.testRoom() }, this, 1000);
			}
		});
		this.logTxt = UI.addText(this, "log", 30, 30);
	}

	public static entryNext() {
		let s1: GameScene = new GameScene();
		SceneManager.Instance.changeScene(s1);
	}

	public testRoom() {
		//--------房间管理-------------
		let create = UI.addText(this, "Create", 0, 0);
		UI.addClickAction(this, create, VSScene.instance.createRoom);
		//
		let matchPlayers = UI.addText(this, "matchPlayers", UI.WINSIZE_W / 3, 0);
		UI.addClickAction(this, matchPlayers, VSScene.instance.matchPlayers);
		//
		let matchRoom = UI.addText(this, "matchRoom", 0, UI.WINSIZE_H / 2);
		UI.addClickAction(this, matchRoom, VSScene.instance.matchRoom);
		//
		let dismissRoom = UI.addText(this, "dismissRoom", 0, UI.WINSIZE_H * 0.8);
		UI.addClickAction(this, dismissRoom, VSScene.instance.dismissRoom);
		//
		let leaveRoom = UI.addText(this, "leaveRoom", 0, UI.WINSIZE_H / 4);
		UI.addClickAction(this, leaveRoom, VSScene.instance.leaveRoom);

		let getroomlist = UI.addText(this, "getroomlist", UI.WINSIZE_W / 3, UI.WINSIZE_H *3 / 4);
		UI.addClickAction(this, getroomlist, VSScene.instance.getroomlist);

		//
		let requestFrame2 = UI.addText(this, "测试进入本地AI战斗!!!!", UI.WINSIZE_W / 3, UI.WINSIZE_H * 0.8);
		UI.addClickAction(this, requestFrame2, VSScene.instance.localFight);
		//

		//----------------------------------------------处理广播回调-----------------------------------------------
		this.room.onJoinRoom = event => console.log("新玩家加入", event.data.joinPlayerId);		// 广播：房间有玩家加入
		this.room.onLeaveRoom = event => console.log("玩家退出", event.data.leavePlayerId);		// 广播：房间有玩家退出
		this.room.onDismissRoom = event => console.log("房间被解散");							// 广播：房间被解散
		this.room.onUpdate = event => console.log("房间信息更新", VSScene.instance.room.roomInfo,VSScene.instance.room.networkState);
		this.room.onChangePlayerNetworkState = event =>console.log(event);
		this.room.onStartFrameSync = event => {
			this.logTxt.text = "start Frame";
			console.log("开始帧同步");	// 广播：开始帧同步
			player1id = this.room.roomInfo.owner;
			player2id = event.data.roomInfo.playerList[0].id == player1id ? event.data.roomInfo.playerList[1].id : event.data.roomInfo.playerList[0].id;
			new FromServer();
			VSScene.entryNext();//进入gamescene
		}
	}


	public localFight() {
		SceneManager.Instance.changeScene(new GameScene);
	}



	public onRecvFrame() {
		this.room.onRecvFrame = event => {
			if (event.data.frame.items.length > 0) {
				console.log(event.data)
			}
		};
	}

	public createRoom() {	//定义房间匹配参数
		const playerInfo = {
			name: "Tom",
			customPlayerStatus: 1,
			customProfile: "https://xxx.com/icon.png",
		};

		const createRoomPara = {
			roomName: "hello test vsserver",
			maxPlayers: 2,
			roomType: "1V1",
			isPrivate: false,
			customProperties: "2345",
			playerInfo,
		};
		VSScene.instance.room.createRoom(createRoomPara, event => console.log("createroom"));	//创建房间
		let startFrameSync = UI.addText(VSScene.instance, "startFrameSync", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2);
		UI.addClickAction(VSScene.instance, startFrameSync, VSScene.instance.startFrameSync);
	}

	public getMyRoom() {
		MGOBE.Room.getMyRoom(event => {
			if (event.code === 0) {
				console.log("玩家在房间内", event.data.roomInfo);
				VSScene.instance.room = new MGOBE.Room(event.data.roomInfo);
			}
		});
	}

	public joinRoom() {
		const playerInfo = {
			name: "Tom2",
			customPlayerStatus: 1,
			customProfile: "https://xxx.com/icon.png",
		};

		const joinRoomPara = {
			playerInfo,
		};
		let _id: string = VSScene.instance.room.roomInfo.id;
		VSScene.instance.room.initRoom({ id: _id });
		VSScene.instance.room.joinRoom(joinRoomPara, event => console.log(event));
	}

	public leaveRoom() {
		VSScene.instance.room.leaveRoom({}, event => {
			if (event.code === 0) {// 退房成功
				console.log("退房成功", VSScene.instance.room.roomInfo);
				VSScene.instance.room.initRoom();	//// 可以使用 initRoom 清除 roomInfo
			}
		});
	}

	public dismissRoom() {
		VSScene.instance.room.dismissRoom({}, event => {
			if (event.code === 0) {
				console.log("解散成功");
			}
		});
	}

	public startFrameSync() {		//修改房间帧同步状态为“已开始帧同步”,房间内任意一个玩家成功调用该接口将导致全部玩家开始接收帧广播
		MGOBE.Room.getMyRoom(event => {
			if (event.data.roomInfo.playerList.length < 2) {
				console.log("number is not enough,startFrameSync defail");
				return;
			}
			VSScene.instance.room.startFrameSync({}, event => {
				if (event.code == 0) {
					console.log("开始帧同步成功,进入gamescene");
				}
			});
		});

	}


	public matchPlayers() {
		const playerInfo = {
			name: "Tom",
			customPlayerStatus: 1,
			customProfile: "https://xxx.com/icon.png",
			matchAttributes: [{
				name: "roomcode",
				value: 100,
			}]
		};

		const matchPlayersPara = {
			playerInfo,
			matchCode: "match-om3br4pb",
		};

		// 发起匹配
		VSScene.instance.room.matchPlayers(matchPlayersPara, event => {
			if (event.code == 0) {
				console.log("请求成功");
				let startFrameSync = UI.addText(VSScene.instance, "startFrameSync", UI.WINSIZE_W / 3, UI.WINSIZE_H / 2);
				UI.addClickAction(VSScene.instance, startFrameSync, VSScene.instance.startFrameSync);
			} else {
				console.log("请求失败", event.code);
			}
		});

		// 监听匹配结果
		VSScene.instance.room.onMatch = (event) => {

			if (event.data.errCode === MGOBE.ErrCode.EC_OK) {
				console.log("组队匹配成功");
				VSScene.instance.room.initRoom(event.data.roomInfo);
				return;
			}

		};
	}

	public getroomlist() {
		const getRoomListPara = {
			pageNo: 1,
			pageSize: 10,
		};
		// 不要使用 room.getRoomList
		// 直接使用 Room 对象
		MGOBE.Room.getRoomList(getRoomListPara, event => console.log(event));
	}

	public matchRoom() {
		const playerInfo = {
			name: "Tom2",
			customPlayerStatus: 1,
			customProfile: "https://xxx.com/icon.png",
		};

		const matchRoomPara = {
			playerInfo,
			maxPlayers: 2,
			roomType: "1V1",
			customProperties: "2345",
		};
		VSScene.instance.room.matchRoom(matchRoomPara, event => {
			if (event.code != 0) {
				console.log("匹配失败", event.code);
			} else {
				console.log("匹配成功");
			}
		});
	}

	public stopFrameSync() {
		VSScene.instance.room.stopFrameSync({}, event => console.log(event));
	}


	protected onExit() {
	}

}