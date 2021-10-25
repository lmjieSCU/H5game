var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterVO = (function () {
    function FighterVO() {
        this.contactFriends = [];
        this.contactEnemys = [];
        this.says = [];
        this.bgmRate = 1;
        this._cloneKey = [];
        this._cloneKey = ["id", "name", "comicType", "fileUrl", "startFrame", "faceUrl", "contactFriends", "contactEnemys", "says", "faceBigUrl", "faceBarUrl", "bgm", "bgmRate"];
        return;
    } // end function
    FighterVO.prototype.initByXML = function (param1) {
        this.id = param1.attributes.id;
        this.name = param1.attributes.name;
        this.comicType = Number(param1.attributes.comic_type);
        //
        var child1 = param1.children[0];
        this.fileUrl = child1.attributes.url;
        this.startFrame = Number(child1.attributes.startFrame);
        var child2 = param1.children[1];
        this.faceUrl = child2.attributes.url;
        this.faceBigUrl = child2.attributes.big_url;
        if (!child2.attributes.bar_url) {
            return;
        }
        this.faceBarUrl = child2.attributes.bar_url;
        //
        var child3 = param1.children[3];
        if (!child3) {
            return;
        }
        for (var key in child3.children) {
            var p1 = child3.children[Number(key)];
            var word1 = p1.attributes.url;
            this.says.push(word1.toString());
        }
        var child4 = param1.children[4];
        this.bgm = child4.attributes.url;
        this.bgmRate = Number(child4.attributes.rate) / 100;
        return;
    }; // end function
    FighterVO.prototype.clone = function () {
        var _loc_1 = new FighterVO();
        for (var _loc_2 in this._cloneKey) {
            _loc_1[_loc_2] = this._cloneKey[_loc_2];
        }
        return _loc_1;
    }; // end function
    return FighterVO;
}());
__reflect(FighterVO.prototype, "FighterVO");
//# sourceMappingURL=FighterVO.js.map