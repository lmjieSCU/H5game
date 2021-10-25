
class sdk {
   
    //分包加载
    public static loadPackage(subname: string = 'stage1', success: Function, failor: Function, node: any) {
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
        } else {
            //Subcontractor.setLoadingText('wx show loadSubpackage failor6')
            failor().call(node, node);
        }
    }


}





