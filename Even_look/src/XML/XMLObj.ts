class XMLObj {
    public oname: string;
    public rotation: number;
    public scaleX: number;
    public scaleY: number;
    public x: number;
    public y: number;
    public bWidth: number;
    public bHeight: number;
    public width: number;
    public height: number;
    public clsName: string;
    public componentInspectorSetting: string;

    public constructor(xml: egret.XML) {
        let children = xml.children;
        for (let key in children) {
            this[(<egret.XML>children[Number(key)]).localName] = (<egret.XMLText>(<egret.XML>children[Number(key)]).children[0]).text;
        }
    }
}





