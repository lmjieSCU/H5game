
const fileutil=require('./file-util');const path=fileutil.path;const fs=fileutil.fs;const QQFS=qq.getFileSystemManager();class SoundProcessor{onLoadStart(host,resource){const{root,url}=resource;let soundSrc=root+url;if(RES['getVirtualUrl']){soundSrc=RES['getVirtualUrl'](soundSrc);}
if(path.isRemotePath(soundSrc)){if(!needCache(root,url)){return loadSound(soundSrc);}else{const fullname=path.getLocalFilePath(soundSrc);if(fs.existsSync(fullname)){return loadSound(path.getQQUserPath(fullname));}else{return download(soundSrc,fullname).then((filePath)=>{fs.setFsCache(fullname,1);return loadSound(filePath);},(error)=>{console.error(error);return;});}}}else{return loadSound(soundSrc);}}
onRemoveStart(host,resource){return Promise.resolve();}}
function loadSound(soundURL){return new Promise((resolve,reject)=>{let sound=new egret.Sound();let onSuccess=()=>{resolve(sound);}
let onError=()=>{const e=new RES.ResourceManagerError(1001,soundURL);reject(e);}
sound.addEventListener(egret.Event.COMPLETE,onSuccess,this);sound.addEventListener(egret.IOErrorEvent.IO_ERROR,onError,this);sound.load(soundURL);})}
function download(url,target){return new Promise((resolve,reject)=>{const dirname=path.dirname(target);fs.mkdirsSync(dirname);const file_target=path.getQQUserPath(target);qq.downloadFile({url:url,filePath:file_target,success:(v)=>{if(v.statusCode>=400){try{QQFS.accessSync(file_target);QQFS.unlinkSync(file_target);}catch(e){}
const message=`加载失败:${url}`;reject(message);}else{resolve(file_target);}},fail:(e)=>{const error=new RES.ResourceManagerError(1001,url);reject(error);}});});}
function needCache(root,url){if(root.indexOf("miniGame/resource/")>=0){return true;}else{return false;}}
const processor=new SoundProcessor();RES.processor.map("sound",processor);