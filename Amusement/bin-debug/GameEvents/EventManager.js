var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var EventManager = (function (_super) {
    __extends(EventManager, _super);
    function EventManager(target) {
        if (target === void 0) { target = null; }
        return _super.call(this, target) || this;
    }
    EventManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new EventManager();
        }
        return this._instance;
    };
    EventManager.dispatchEvent = function (event) {
        this.getInstance().dispatchEvent(event);
    };
    EventManager.addEventListener = function (type, listener, content) {
        this.getInstance().addEventListener(type, listener, content);
    };
    EventManager.hasEventListener = function (type) {
        return this.getInstance().hasEventListener(type);
    };
    EventManager.removeEventListener = function (type, listener) {
        this.getInstance().removeEventListener(type, listener, this);
    };
    return EventManager;
}(egret.EventDispatcher));
__reflect(EventManager.prototype, "EventManager");
//# sourceMappingURL=EventManager.js.map