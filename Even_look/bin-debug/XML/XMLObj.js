var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var XMLObj = (function () {
    function XMLObj(xml) {
        var children = xml.children;
        for (var key in children) {
            this[children[Number(key)].localName] = children[Number(key)].children[0].text;
        }
    }
    return XMLObj;
}());
__reflect(XMLObj.prototype, "XMLObj");
//# sourceMappingURL=XMLObj.js.map