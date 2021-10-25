var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var sdk = (function () {
    function sdk() {
    }
    //分包加载
    sdk.loadPackage = function (subname, success, failor, node) {
        if (subname === void 0) { subname = 'stage1'; }
        if (window['wx'] && window['wx'].loadSubpackage) {
            // Subcontractor.setLoadingText('wx show loadSubpackage3')
            var subTask = window['wx'].loadSubpackage({
                name: subname,
                success: function () {
                    //Subcontractor.setLoadingText('wx show loadSubpackage4')
                    success.call(node, node);
                },
                fail: function () {
                    //Subcontractor.setLoadingText('wx show loadSubpackage5')
                    failor().call(node, node);
                },
            });
            subTask.onProgressUpdate(function (res) {
                //
            });
        }
        else {
            //Subcontractor.setLoadingText('wx show loadSubpackage failor6')
            failor().call(node, node);
        }
    };
    return sdk;
}());
__reflect(sdk.prototype, "sdk");
//# sourceMappingURL=sdk.js.map