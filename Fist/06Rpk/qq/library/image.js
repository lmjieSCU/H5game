
const fileutil=require('./file-util');const path=fileutil.path;const fs=fileutil.fs;const QQFS=qq.getFileSystemManager();class ImageProcessor{onLoadStart(host,resource){let scale9Grid;const{root,url,scale9grid}=resource;if(scale9grid){const list=resource.scale9grid.split(",");scale9Grid=new egret.Rectangle(parseInt(list[0]),parseInt(list[1]),parseInt(list[2]),parseInt(list[3]));}
let imageSrc=root+url;if(RES['getVirtualUrl']){imageSrc=RES['getVirtualUrl'](imageSrc);}
if(path.isRemotePath(imageSrc)){if(!needCache(root,url)){return loadImage(imageSrc,scale9Grid);}else{const fullname=path.getLocalFilePath(imageSrc);if(fs.existsSync(fullname)){return loadImage(path.getQQUserPath(fullname),scale9Grid);}else{return download(imageSrc,fullname).then((filePath)=>{fs.setFsCache(fullname,1);return loadImage(filePath,scale9Grid);},(error)=>{console.error(error);return;});}}}else{return loadImage(imageSrc,scale9Grid);}}
onRemoveStart(host,resource){let texture=host.get(resource);texture.dispose();return Promise.resolve();}}
function loadImage(imageURL,scale9grid){return new Promise((resolve,reject)=>{const image=qq.createImage();image.onload=()=>{const bitmapdata=new egret.BitmapData(image);const texture=new egret.Texture();texture._setBitmapData(bitmapdata);if(scale9grid){texture["scale9Grid"]=scale9grid;}
setTimeout(()=>{resolve(texture);},0);}
image.onerror=(e)=>{const error=new RES.ResourceManagerError(1001,imageURL);reject(error);}
image.src=imageURL;})}
function download(url,target){return new Promise((resolve,reject)=>{const dirname=path.dirname(target);fs.mkdirsSync(dirname);const file_target=path.getQQUserPath(target);qq.downloadFile({url:url,filePath:file_target,success:(v)=>{if(v.statusCode>=400){try{QQFS.accessSync(file_target);QQFS.unlinkSync(file_target);}catch(e){}
const message=`加载失败:${url}`;reject(message);}else{resolve(file_target);}},fail:(e)=>{const error=new RES.ResourceManagerError(1001,url);reject(error);}})})}
function needCache(root,url){if(root.indexOf("miniGame/resource/")>=0){return true;}else{return false;}}
const processor=new ImageProcessor();RES.processor.map("image",processor);