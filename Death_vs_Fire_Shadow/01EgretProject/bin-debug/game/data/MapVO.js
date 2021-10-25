var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapVO = (function () {
    function MapVO() {
        return;
    } // end function
    MapVO.prototype.initByXML = function (param1) {
        this.id = param1.attributes.id;
        this.name = param1.attributes.name;
        var child1 = param1.children[0];
        this.fileUrl = child1.attributes.url;
        var child2 = param1.children[1];
        this.picUrl = child2.attributes.url;
        var child3 = param1.children[2];
        this.bgm = child3.attributes.url;
        return;
    }; // end function
    return MapVO;
}());
__reflect(MapVO.prototype, "MapVO");
//# sourceMappingURL=MapVO.js.map