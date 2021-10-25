var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ConfigVO = (function () {
    function ConfigVO() {
        this.AI_level = 1;
        this.fighterHP = 1;
        this.fightTime = 30;
        this.quality = "medium";
        this.keyInputMode = 1;
    }
    ConfigVO.prototype.ConfigVO = function () {
        this.key_menu = new KeyConfigVO(0);
        this.key_p1 = new KeyConfigVO(1);
        this.key_p2 = new KeyConfigVO(2);
        this.select_config = new SelectStageConfigVO();
        this.extendConfig = GameInterface.instance.getConfigExtend();
        this.setDefaultConfig(this.key_menu);
        this.setDefaultConfig(this.key_p1);
        this.setDefaultConfig(this.key_p2);
        return;
    }; // end function
    ConfigVO.prototype.setDefaultConfig = function (param1) {
        return;
    }; // end function
    ConfigVO.prototype.toSaveObj = function () {
        return null;
    }; // end function
    ConfigVO.prototype.readSaveObj = function (param1) {
        return;
    }; // end function
    ConfigVO.prototype.getValueByKey = function (param1) {
        return null;
    }; // end function
    ConfigVO.prototype.setValueByKey = function (param1, param2) {
        return;
    }; // end function
    ConfigVO.prototype.applyConfig = function () {
        return;
    }; // end function
    return ConfigVO;
}());
__reflect(ConfigVO.prototype, "ConfigVO");
//# sourceMappingURL=ConfigVO.js.map