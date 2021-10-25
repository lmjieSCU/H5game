
const fileutil=require('./file-util');const path=fileutil.path;const fs=fileutil.fs;const QQFS=qq.getFileSystemManager();class TextProcessor{onLoadStart(host,resource){const{root,url}=resource;return new Promise((resolve,reject)=>{let xhrURL=url.indexOf('://')>=0?url:root+url;if(RES['getVirtualUrl']){xhrURL=RES['getVirtualUrl'](xhrURL);}
if(path.isRemotePath(xhrURL)){if(needCache(root,url)){const targetFilename=path.getLocalFilePath(xhrURL);if(fs.existsSync(targetFilename)){let data=fs.readSync(targetFilename,'utf-8');resolve(data);}else{loadText(xhrURL).then((content)=>{const dirname=path.dirname(targetFilename);fs.mkdirsSync(dirname);fs.writeSync(targetFilename,content);resolve(content);}).catch((e)=>{reject(e);});}}else{loadText(xhrURL).then((content)=>{resolve(content);}).catch((e)=>{reject(e);})}}else{const content=QQFS.readFileSync(xhrURL,'utf-8');resolve(content);}});}
onRemoveStart(host,resource){return Promise.resolve();}}
function loadText(xhrURL){return new Promise((resolve,reject)=>{const xhr=new XMLHttpRequest();xhr.onload=()=>{if(xhr.status>=400){const message=`加载失败:${xhrURL}`;console.error(message);reject(message);}else{resolve(xhr.responseText);}}
xhr.onerror=(e)=>{const error=new RES.ResourceManagerError(1001,xhrURL);console.error(e);reject(error);}
xhr.open("get",xhrURL);xhr.send();})}
function needCache(root,url){if(root.indexOf("miniGame/resource/")>=0){return true;}else{return false;}}
const processor=new TextProcessor();RES.processor.map("text",processor);