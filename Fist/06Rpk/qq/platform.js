/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */
let winSize = qq.getSystemInfoSync();
let bannerHeight = winSize.windowHeight - 70;
let bannerWidth = 300;
console.log("index winSize.windowWidth", winSize.windowWidth)
console.log("index winSize.windowHeight", winSize.windowHeight)
qq.showShareMenu({
    showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
})
qq.onShareAppMessage(() => ({
  title: '老同学们，还记得这张照片吗？那一年我们一起玩的游戏',
  imageUrl: 'https://hcrtjgd.oclkj.com/share_class.jpg',
  query: 'share=1'
}))
var context = egret.MainContext.instance;
qq.onShow((obj) => {
     console.log('js->ts  obj ', obj)
    context.stage.dispatchEventWith("jsNotifyts", false, obj);

})
///////////////////////////////////////////////////////////////////////////
//初始化
import XiYouGameSDK from './js/xiyougamesdk/xiyougamesdk'
import XYCommon from './js/xiyougamesdk/utils/common'
import XYEvents from './js/xiyougamesdk/utils/event'
import XYConfig from './js/xiyougamesdk/config'

console.log("XiYouYX begin init");
let config = new XYConfig
config.debugState = true
config.appId = '103966969202'
config.appKey = '0f4a342a3ea097b7bebf95c42c31c329'
config.masterId = '131'
config.channelId = '3838'
config.packageId = '68635'
config.packageName = 'com.qldmini.hcrtjgd'
config.appVersion = '1'

XYEvents.getInstance().on('onInitResult', function (data) { 
  if (data.status == XYCommon.Status().Success){
     console.log("XiYouYX init success");
  }else{
     console.log("XiYouYX init failor");
  }
});
XiYouGameSDK.getInstance().init(config, XYEvents.getInstance)
///////////////////////////////////////////////////////////////////////////
var code = "";
//////////////////////////////////////////////////////////
var bannersID = new Array();
var bannerStatus = 0;
bannersID[0] = "119e17d7ce69fe642cae7c4df3648811";
bannersID[1] = "be23105e12800cd64444051b1f5d3b75";
var bannersFlag = 0;
var banners1;
var insertAd;
var insertResolve = null;
function createInsert() {
    insertAd= qq.createInterstitialAd({
        adUnitId: '4ed730b4cd5f6b0841b40751069e7dc6'
    });
    insertAd.load().catch((err) => {
            console.error('showInsert load', err)
    })
    insertAd.onLoad(() => {
            console.log('showInsert onLoad event emit')
    })
    insertAd.onClose(() => {
            console.log('showInsert close event emit')
    })
    insertAd.onError((e) => {
        if (insertResolve){
          insertResolve(0);
          insertResolve = null;
        }
        console.log('showInsert error', e)
    })
}
//提交加载插屏
createInsert();
//
//////////////////////////////////////////////////////////////////////////
function createBanner(show) {
    console.log('createBanner begin')
    var leftPos = (winSize.windowWidth - bannerWidth) / 2;
    let banner = qq.createBannerAd(
    {
            adUnitId: bannersID[bannersFlag],
            style: {
                left: leftPos, 
                top: bannerHeight,
                width: bannerWidth,
            }
    })
    
    banner.onResize(size => {
        console.log('Resize后正式宽高:', size.width, size.height);
        banner.style.top = winSize.windowHeight - 70;
    });
    banner.onError(res => {
        console.log('bannerAd onError', res)
    })
    banner.onLoad(res => {
        console.log('bannerAd onLoad' + bannersFlag)
        if (show == 1 && bannerStatus==1){
            banner.show().then(() => {
                    console.log('bannerAd show ok'+bannersFlag)
                }).catch((res) => {
                    console.log('bannerAd show error', res)
                });
        }
    })
    if (bannersFlag == 0) 
        bannersFlag = 1;
    else
        bannersFlag = 0;
    return banner;
}

/////////////////////////////////////////////////////////////
banners1 = createBanner(0);

//积木
var customAd1=null;
function createBox1() {
     customAd1 = qq.createBlockAd({
      adUnitId: '2c4e6d1b52c9bd76a9bcf2b7fae5ae8b',
      size: 1,
      orientation: 'landscape',
       style: {
            left: winSize.windowWidth/2-80,
            top: winSize.windowHeight/2-50,
        }
    })
    customAd1.onError(err => console.log("customAd1", err))
    customAd1.onLoad(() => console.log("customAd1", success))
}


var customAd2=null;
function createBox2() {
     customAd2 = qq.createBlockAd({
      adUnitId: '28963f259ee606b9d52088e380a753d1',
      size: 1,
      orientation: 'landscape',
       style: {
            left:  5,
            top: 110,
        }
    })
    customAd2.onError(err => console.log(err))
    customAd2.onLoad(() => console.log('原生模板广告加截成功'))
}
createBox2();
createBox1();
 let openDataContext =qq.getOpenDataContext();
                openDataContext.postMessage({
                    command: 'loadRes',
                });

/////////////////////////////////////////////////////////////
function showVideo(param, resolve)
{
  let jsNotifytsVideoAdEnded = false;
      let videoAd = qq.createRewardedVideoAd({
              adUnitId: '3829d43ead1d1a58e35739ff871bc2ca'
            })

            videoAd.onError(function(res){
              console.log('videoAd onError',res)
            })
            videoAd.onLoad(function(res){
              console.log('videoAd onLoad',res)
            })
            videoAd.onClose(function(res){
               if (jsNotifytsVideoAdEnded){
                console.log('videoAd onClose repeat!',res.isEnded);
                return;
              }
              console.log('videoAd onClose',res.isEnded);
              jsNotifytsVideoAdEnded = true;
              
              if (res.isEnded){
                if (param > 0)
                    resolve(param);

              }else{
                resolve(0);
              }
                
            })
            
            videoAd.load()
              .then(() => {
                console.log('激励视频加载成功');
                videoAd.show().then(() => {
                  console.log('激励视频 广告显示成功')
                })
                .catch(err => {
                  console.log('激励视频 广告显示失败')
                })
              })
              .catch(err => {
                console.log('激励视频加载失败');
              })
          
}

class QqgamePlatform {
    name = 'qqgame'
    login(param1) {
        return new Promise((resolve, reject) => {
            qq.login({
                success: (res) => {
                    console.log("login success" + res.code);
                    resolve(res.code);

                },
                fail: (res) => {
                    console.log("login failor");
                    resolve("0");
                }
            })
        })
    }
    XiYouLogin(){
        return new Promise((resolve, reject) => {
            
            XYEvents.getInstance().on('onLoginResult', function (data) {
              XYCommon.xylog('XiYouYX onLoginResult-->', data)
              if (data.status == XYCommon.Status().Success) {
                // 用户唯一标识
                let uid = data.userId;
                //用于验证用户合法性的token 
                let token = data.token;
                XYCommon.xylog('XiYouYX login success' + uid)
                resolve(uid);
              } else {
                XYCommon.xylog('XiYouYX login failor')
              }
            });
            XiYouGameSDK.getInstance().login();
        })
    }

    XiYouGetClientInfo(){
        return new Promise((resolve, reject) => {
            let clientInfo = XiYouGameSDK.getInstance().getClientInfo();
            resolve(clientInfo);
        })
    }

    XiYouGetServerID(){
        return new Promise((resolve, reject) => {
            XYEvents.getInstance().on('onServerListResult', function (res) {
              if (res.status == XYCommon.Status().Success) {
                console.log('获取区服列表成功');
                // 区服列表JSON结构体
                let servers = res.data;
                let obj = eval(servers);
                console.log(servers);
                resolve(obj.servers.groups.list.serverid)
              } else {
                console.log('获取区服列表失败')
              }
            })
            XiYouGameSDK.getInstance().requestAvailableServer();
        })
    }

    playAdVideo(param) {
        return new Promise((resolve, reject) => {
            showVideo(param, resolve);
        })
    }
   
    loadSubpackage(pack) {
        return new Promise((resolve, reject) => {
            console.log("loadSubpackage begin :" + pack);
            const loadTask = qq.loadSubpackage({
            name: pack, // name 可以填 name 或者 root
            success(res) {
                 console.log("loadSubpackage success :" + pack);
                 resolve(1);
            },
            fail(res) {
                console.log("loadSubpackage failor :" + pack);
                resolve(0);
            }
          })
            loadTask.onProgressUpdate(res => {
              console.log('下载进度', res.progress)
              console.log('已经下载的数据长度', res.totalBytesWritten)
              console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
            })
            })
    }
    
    showInsert() {
        return new Promise((resolve, reject) => {
            /* 建议放在需要展示插屏广告的时机执行 */
            if (insertAd){
                insertResolve = resolve;
                //
                insertAd.show().then(() => {
                    resolve(1);
                    console.log('showInsert show ok'+bannersFlag)
                }).catch((res) => {
                    console.log('showInsert show failor'+res)
                });
            }
        })
    }
     startRecord() {
        return new Promise((resolve, reject) => {
            console.log(" startRecord()");
        })
    }

   



    stopRecord() {
        return new Promise((resolve, reject) => {

        })
    }

    shareRecord() {
        return new Promise((resolve, reject) => {
           console.log("share shareAppMessage !");
           qq.shareAppMessage({
                title: "童年的战斗回忆，一款经典的横板格斗游戏！",
                imageUrl: 'http://www.yiruituo.com/stickvs/shareqq.jpg',
           })
        })
    }

    getUserInfo() {
        return new Promise((resolve, reject) => {
            qq.getUserInfo({
                success: function (res) {
                    resolve(res);
                    console.log("getUserInfo success");
                }
            })
        })
    }

    pay(currency, payid) {
             return new Promise((resolve, reject) => {
                console.log("pay payid" + payid);
                console.log("pay currency" + currency);
                qq.requestMidasPayment({
                prepayId: payid,//预下单获取的预下单ID
                starCurrency: currency,//需要消耗的游戏币数量
                success() {
                    resolve(1);
                },
                fail({errMsg, errCode}) {
                    // 支付失败
                     console.log("payfailor payid" + payid);
                    console.log(errMsg, errCode)
                }
            });
             })
    }
    shareInvite() {
        return new Promise((resolve, reject) => {
              qq.shareInvite({
              success() {
                 console.log("shareInvite success");
                 resolve("ok");
              },
              fail(result){
                if(result.errCode == 1){
                  // 用户取消
                  console.log("shareInvite errCode=1");
                }else{
                  // 其他错误
                   console.log("shareInvite errCode=" + result.errMsg);
                }
                resolve(result.errMsg);
              },
              completion(){

              }
            });

        })
    }
    
     getLaunchScene() {
        return new Promise((resolve, reject) => {
             var obj = qq.getLaunchOptionsSync();
               console.log("getLaunchScene");
               resolve(obj);
        })
    }
    //
    bannerShow(){
        return new Promise((resolve, reject) => {
            console.log('destroybanner ok')
                bannerStatus = 1;
                banners1.destroy();
                banners1 = createBanner(1);
        })
    }

    bannerShowOnly() {
        return new Promise((resolve, reject) => {
            bannerStatus = 1;
            console.log(" bannerAd.show()");
                banners1.show();
        })
    }

     bannerHide() {
        return new Promise((resolve, reject) => {
            bannerStatus = 0;
            console.log(" bannerAd.hide()");
            try{
                banners1.hide();
            }catch(e){
              //
            }
        })
    }

     initAdSDK(){
        return new Promise((resolve, reject) => {
           
        })
    }
    

    boxShow(){
        return new Promise((resolve, reject) => {
            let appbox = qq.createAppBox({              
                    adUnitId: 'fca7a9270193bf70670de5c08bb08366'
             })            
             appbox.load().then(()=>{              
                appbox.show()            
            })   
        })
    }
     setBannerHeight(param){
         return new Promise((resolve, reject) => {
             //bannerHeight = winSize.windowHeight - 70 - param * 10; 
             console.log(" bannerHeight = "+param*10);
        })
       
    }

     box1Show(){
        return new Promise((resolve, reject) => {
          try{
            //if (customAd1)
              //     customAd1.show()
          }catch(e){
            
          }
        })
    }
    box1Hide(){
        return new Promise((resolve, reject) => {
          try{
            //if (customAd1)
              //     customAd1.hide()
          }catch(e){

          }
        })
    }
     box2Show(){
        return new Promise((resolve, reject) => {
             // if (customAd2)
              //  customAd2.show()
        })
    }
    box2Hide(){
        return new Promise((resolve, reject) => {
         // if (customAd2)
             //  customAd2.hide()
        })
    }

    box1Refresh(){
        return new Promise((resolve, reject) => {
            //
            console.log(" boxShow box1Refresh");
            try{
                // customAd1.destroy();
                // createBox1();
                 //
                // customAd2.destroy();
                 //createBox2();
            }catch(e){
              
            }
              
        })
    }

    videoCache(){
        return new Promise((resolve, reject) => {
                // 在适合的场景显示格子广告
                console.log(" boxShow gridAd");

        })
    }

    recentColor(){
      return new Promise((resolve, reject) => {
        console.log('recentColor start');
        qq.getSetting({
            success(res) {
               console.log('recentColor start1');
              if (!res.authSetting['scope.recentColorSign']) {
                  console.log('recentColor start2');
                  qq.authorize({
                  scope: 'scope.recentColorSign',
                  success() {
                    qq.addRecentColorSign({
                        query: 'yx=1',
                        success(res) {
                            console.log('recentColor success: ', res);
                        },
                        fail(err) {
                            console.log('recentColor fail: ', err);
                        },
                        complete(res){
                        console.log('recentColor complete: ', res);
                        }
                    })
                  }
                })
              }
            }
          })
        })
    }

    subscribe(){
      return new Promise((resolve, reject) => {
        console.log("----subscribeAppMsg----start");
            qq.subscribeAppMsg({
            tmplIds: ['3be4ccaf4e3d2ca13fdc96e38e8d5548'],
            subscribe: true,
            success(res) {
              console.log("----subscribeAppMsg----success", res);
            },
            fail(res) {
              console.log("----subscribeAppMsg----fail", res);
            }
          });
        })
    }


    setCloudKey(key1,val1){
      return new Promise((resolve, reject) => {
         console.log("setCloudKey"+key1+val1);
         try{
          let arr = new Array();
          arr.push({ key: key1, value: String(val1) });
          qq.setUserCloudStorage({
            KVDataList: arr,
            success: res => {
                console.log("setCloudKey success", res);
            },
            fail: res => {
              console.log("setCloudKey fail", res);
            }
        });
        }catch(e){
          console.log("setCloudKey exception", e);
        }


        })
    }


    getFriendList(){
      return new Promise((resolve, reject) => {
          const bitmapdata = new egret.BitmapData(sharedCanvas);
          bitmapdata.$deleteSource = false;
          const texture = new egret.Texture();
          texture._setBitmapData(bitmapdata);
          resolve(texture);
        })
    }


    refreshFriendList(){
      return new Promise((resolve, reject) => {
           let openDataContext =qq.getOpenDataContext();
                openDataContext.postMessage({
                    command: "refresh",
              });
        })
    }
    //
    getCode() {
        return new Promise((resolve, reject) => {
            qq.checkSession({
                success() {
                    resolve(code);
                    console.log("getCode success");
                },
                 fail() {
                        qq.login({
                        success: (res) => {
                            console.log("login success");
                            code = res.code;
                            resolve(res.code);
                        },
                        fail: (res) => {
                            console.log("getCode failor");
                            resolve(0);
                        }
                        })
                }
            })
        })
    }

}

class QqgameOpenDataContext {

    createDisplayObject(type, width, height) {
      consol.log("onMessage createDisplayObject")
        const bitmapdata = new egret.BitmapData(sharedCanvas);
        bitmapdata.$deleteSource = false;
        const texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        const bitmap = new egret.Bitmap(texture);
        bitmap.width = width;
        bitmap.height = height;

        if (egret.Capabilities.renderMode == "webgl") {
            const renderContext = egret.qqgame.WebGLRenderContext.getInstance();
            const context = renderContext.context;
            ////需要用到最新的微信版本
            ////调用其接口WebGLRenderingContext.qqBindCanvasTexture(number texture, Canvas canvas)
            ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
            if (!context.qqBindCanvasTexture) {
                egret.startTick((timeStarmp) => {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                    bitmapdata.webGLTexture = null;
                    return false;
                }, this);
            }
        }
        return bitmap;
    }


    postMessage(data) {
        const openDataContext = qq.getOpenDataContext();
        openDataContext.postMessage(data);
    }
}

QqgamePlatform.prototype.name = 'qqgame';
QqgamePlatform.prototype.openDataContext = new QqgameOpenDataContext();
window.platform = new QqgamePlatform();