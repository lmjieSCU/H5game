var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sdkConfig = (function () {
    function sdkConfig() {
    }
    sdkConfig.channel = "windows"; //windows qq tt wx android 43 vm om
    sdkConfig.detailChannel = "qq_kof"; //om_fighter vm_fighter wx_fighter qq_fighter windows_fighter oppo_fighter 4399m_fighter(H5) 43_fighter(小游戏)
    sdkConfig.fileName = "ad_kof";
    sdkConfig.version = 40;
    sdkConfig.codeVersion = 5;
    sdkConfig.DEBUG = false; //debug 模式  true false
    //渠道的配置文件
    sdkConfig.orientation = "portrait"; //landscape portrait
    sdkConfig.DEFAULT_URL = "https://www.yiruituo.com"; //hcrtjgd.oclkj.com www.yiruituo.com xxx.xxx.xxx
    sdkConfig.reportAdShowFlag = false;
    return sdkConfig;
}());
__reflect(sdkConfig.prototype, "sdkConfig");
//# sourceMappingURL=sdkConfig.js.map