var egret=window.egret;var __reflect=(this&&this.__reflect)||function(p,c,t){p.__class__=c,t?t.push(c):t=[c],p.__types__=p.__types__?t.concat(p.__types__):t};var __extends=this&&this.__extends||function __extends(t,e){function r(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);r.prototype=e.prototype,t.prototype=new r()};var egret;(function(egret){})(egret||(egret={}));var egret;(function(egret){var WebSocket=(function(_super){__extends(WebSocket,_super);function WebSocket(host,port){if(host===void 0){host=""}if(port===void 0){port=0}var _this=_super.call(this)||this;_this._writeMessage="";_this._readMessage="";_this._connected=false;_this._connecting=false;_this._isReadySend=false;_this._bytesWrite=false;_this._type=WebSocket.TYPE_STRING;_this._connected=false;_this._writeMessage="";_this._readMessage="";_this.socket=new egret.ISocket();_this.socket.addCallBacks(_this.onConnect,_this.onClose,_this.onSocketData,_this.onError,_this);return _this}WebSocket.prototype.connect=function(host,port){if(!this._connecting&&!this._connected){this._connecting=true;this.socket.connect(host,port)}};WebSocket.prototype.connectByUrl=function(url){if(!this._connecting&&!this._connected){this._connecting=true;this.socket.connectByUrl(url)}};WebSocket.prototype.close=function(){if(this._connected){this.socket.close()}};WebSocket.prototype.onConnect=function(){this._connected=true;this._connecting=false;this.dispatchEventWith(egret.Event.CONNECT)};WebSocket.prototype.onClose=function(){this._connected=false;this.dispatchEventWith(egret.Event.CLOSE)};WebSocket.prototype.onError=function(){if(this._connecting){this._connecting=false}this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR)};WebSocket.prototype.onSocketData=function(message){if(typeof message=="string"){this._readMessage+=message}else{this._readByte._writeUint8Array(new Uint8Array(message))}egret.ProgressEvent.dispatchProgressEvent(this,egret.ProgressEvent.SOCKET_DATA)};WebSocket.prototype.flush=function(){if(!this._connected){egret.$warn(3101);return}if(this._writeMessage){this.socket.send(this._writeMessage);this._writeMessage=""}if(this._bytesWrite){this.socket.send(this._writeByte.buffer);this._bytesWrite=false;this._writeByte.clear()}this._isReadySend=false};WebSocket.prototype.writeUTF=function(message){if(!this._connected){egret.$warn(3101);return}if(this._type==WebSocket.TYPE_BINARY){this._bytesWrite=true;this._writeByte.writeUTF(message)}else{this._writeMessage+=message}this.flush()};WebSocket.prototype.readUTF=function(){var message;if(this._type==WebSocket.TYPE_BINARY){this._readByte.position=0;message=this._readByte.readUTF();this._readByte.clear()}else{message=this._readMessage;this._readMessage=""}return message};WebSocket.prototype.writeBytes=function(bytes,offset,length){if(offset===void 0){offset=0}if(length===void 0){length=0}if(!this._connected){egret.$warn(3101);return}if(!this._writeByte){egret.$warn(3102);return}this._bytesWrite=true;this._writeByte.writeBytes(bytes,offset,length);this.flush()};WebSocket.prototype.readBytes=function(bytes,offset,length){if(offset===void 0){offset=0}if(length===void 0){length=0}if(!this._readByte){egret.$warn(3102);return}this._readByte.position=0;this._readByte.readBytes(bytes,offset,length);this._readByte.clear()};Object.defineProperty(WebSocket.prototype,"connected",{get:function(){return this._connected},enumerable:true,configurable:true});Object.defineProperty(WebSocket.prototype,"type",{get:function(){return this._type},set:function(value){this._type=value;if(value==WebSocket.TYPE_BINARY&&!this._writeByte){this._readByte=new egret.ByteArray();this._writeByte=new egret.ByteArray()}},enumerable:true,configurable:true});WebSocket.TYPE_STRING="webSocketTypeString";WebSocket.TYPE_BINARY="webSocketTypeBinary";return WebSocket}(egret.EventDispatcher));egret.WebSocket=WebSocket;__reflect(WebSocket.prototype,"egret.WebSocket")})(egret||(egret={}));var egret;(function(egret){var web;(function(web){var HTML5WebSocket=(function(){function HTML5WebSocket(){this.host="";this.port=0;if(!window["WebSocket"]){egret.$error(3100)}}HTML5WebSocket.prototype.addCallBacks=function(onConnect,onClose,onSocketData,onError,thisObject){this.onConnect=onConnect;this.onClose=onClose;this.onSocketData=onSocketData;this.onError=onError;this.thisObject=thisObject};HTML5WebSocket.prototype.connect=function(host,port){this.host=host;this.port=port;var socketServerUrl="ws://"+this.host+":"+this.port;this.socket=new window["WebSocket"](socketServerUrl);this.socket.binaryType="arraybuffer";this._bindEvent()};HTML5WebSocket.prototype.connectByUrl=function(url){this.socket=new window["WebSocket"](url);this.socket.binaryType="arraybuffer";this._bindEvent()};HTML5WebSocket.prototype._bindEvent=function(){var that=this;var socket=this.socket;socket.onopen=function(){if(that.onConnect){that.onConnect.call(that.thisObject)}};socket.onclose=function(e){if(that.onClose){that.onClose.call(that.thisObject)}};socket.onerror=function(e){if(that.onError){that.onError.call(that.thisObject)}};socket.onmessage=function(e){if(that.onSocketData){that.onSocketData.call(that.thisObject,e.data)}}};HTML5WebSocket.prototype.send=function(message){this.socket.send(message)};HTML5WebSocket.prototype.close=function(){this.socket.close()};HTML5WebSocket.prototype.disconnect=function(){if(this.socket.disconnect){this.socket.disconnect()}};return HTML5WebSocket}());web.HTML5WebSocket=HTML5WebSocket;__reflect(HTML5WebSocket.prototype,"egret.web.HTML5WebSocket",["egret.ISocket"]);egret.ISocket=HTML5WebSocket})(web=egret.web||(egret.web={}))})(egret||(egret={}));