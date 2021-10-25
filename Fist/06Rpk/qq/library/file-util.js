
const qqFs=qq.getFileSystemManager();const QQ_ROOT=qq.env.USER_DATA_PATH+"/";function walkFile(dirname,callback){const files=qqFs.readdirSync(dirname)
for(let f of files){const file=dirname+"/"+f;const stat=qqFs.statSync(file);if(stat.isDirectory()){walkFile(file,callback);}else{callback(file)}}}
function walkDir(dirname,callback){const files=qqFs.readdirSync(dirname)
for(let f of files){const file=dirname+"/"+f;const stat=qqFs.statSync(file);if(stat.isDirectory()){walkDir(file,callback);callback(file)}}}
let fs_cache={};export const fs={remove:(dirname)=>{if(!fs.existsSync(dirname))
return;const globalDirname=QQ_ROOT+dirname;walkFile(globalDirname,(file)=>{qqFs.unlinkSync(file);let p=file.replace(QQ_ROOT,"");p=path.normailze(p);if(fs_cache[p]){fs_cache[p]=0;}})
walkDir(globalDirname,(dir)=>{qqFs.rmdirSync(dir);let p=dir.replace(QQ_ROOT,"");p=path.normailze(p);if(fs_cache[p]){fs_cache[p]=0;}})},existsSync:(p)=>{const cache=fs_cache[p];if(cache==0){return false;}else if(cache==1){return true;}else{try{qqFs.accessSync(QQ_ROOT+p);p=path.normailze(p);if(p){fs_cache[p]=1;}
return true;}catch(e){p=path.normailze(p);fs_cache[p]=0;return false;}}},writeSync:(p,content)=>{p=path.normailze(p);fs_cache[p]=1;qqFs.writeFileSync(QQ_ROOT+p,content);},readSync:(p,format)=>{format=format||'utf-8';return qqFs.readFileSync(QQ_ROOT+p,format);},mkdirsSync:(p)=>{const time1=Date.now();if(!fs.existsSync(p)){const dirs=p.split('/');let current="";for(let i=0;i<dirs.length;i++){const dir=dirs[i]
current+=dir+"/";if(!fs.existsSync(current)){let p=path.normailze(current);fs_cache[p]=1;qqFs.mkdirSync(QQ_ROOT+current)}}}else{return;}
const time2=Date.now()-time1;},unzip:(zipFilePath,targetPath)=>{zipFilePath=QQ_ROOT+zipFilePath;targetPath=QQ_ROOT+targetPath;return new Promise((resolve,reject)=>{qqFs.unzip({zipFilePath,targetPath,success:()=>{resolve();},fail(e){reject(e)}})})},setFsCache:(p,value)=>{fs_cache[p]=value;}}
export const path={dirname:(p)=>{const arr=p.split("/");arr.pop();return arr.join('/');},isRemotePath:(p)=>{return p.indexOf("http://")==0||p.indexOf("https://")==0;},normailze:(p)=>{let arr=p.split("/");let original=p.split("/");for(let a of arr){if(a==''||a==null){let index=original.indexOf(a);original.splice(index,1);}}
if(original.length>0){return original.join('/');}},getLocalFilePath:(p)=>{for(let key in path.localFileMap){if(p.indexOf(key)>=0){p=p.replace(key,path.localFileMap[key]);return path.normailze(p);}}
if(p.indexOf(":")>=0||p.indexOf('#')>=0||p.indexOf('?')>=0){p=p.replace(/[^a-z0-9.]/gi,"/");}
return path.normailze(p);},getQQUserPath:(p)=>{return QQ_ROOT+p;},localFileMap:{}}