class EventManager extends egret.EventDispatcher {
 
    private static _instance: EventManager;
 
    private static getInstance(): EventManager {
        if (!this._instance) {
            this._instance = new EventManager();
        }
        return this._instance;
    }
 
    public constructor(target: egret.IEventDispatcher = null) {
        super(target);
    }
 
 
    public static dispatchEvent(event: egret.Event): void {
        this.getInstance().dispatchEvent(event);
    }
 
 
    public static addEventListener(type: string, listener: Function, content: any): void {
        this.getInstance().addEventListener(type, listener, content);
    }
 
 
    public static hasEventListener(type: string): boolean {
        return this.getInstance().hasEventListener(type);
    }
 
 
    public static removeEventListener(type: string, listener: Function): void {
        this.getInstance().removeEventListener(type, listener, this);
    }
}