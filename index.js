const si = require('systeminformation');


var obj0={}
var obj1={}
var obj2={}

function getDiskInfo(){

var header = document.querySelector("header");
var boxNameDisk0 = document.createElement("div");
boxNameDisk0.classList.add('boxNameDisk0');
var div0 = document.createElement("div");
var div1 = document.createElement("div");
div0.id="typeDisk0";


si.diskLayout().then(data =>{
    obj0={
       type:data[0].type,
       mount:"",
       size:data[0].size,
       used:"",
       fileSys:"",
       bytesPerSector: data[0].bytesPerSector,
       firmwareRevision:data[0].firmwareRevision,
       interfaceType:data[0].interfaceType,
       name:data[0].name,
       sectorsPerTrack:data[0].sectorsPerTrack,
       serialNum:data[0].serialNum,
       uuid:"",
       vendor:data[0].vendor
    };

    si.blockDevices().then(data =>{
       obj0.fileSys=data[0].fstype;
       obj0.uuid=data[0].uuid;
    })

    si.fsSize().then(data =>{
        obj0.used=data[0].used;
        obj0.mount=data[0].mount;
     })
 

    let sizeDisk = ((obj0.size)/1000000000).toFixed(0);
    div0.innerHTML=obj0.type;
    div1.innerHTML= sizeDisk + "Gb";
    header.appendChild(boxNameDisk0).appendChild(div0).append(div1);
    document.getElementById("load").style.display="none";
    getElem();
    
})



//var header = document.querySelector("header");
var boxNameDisk1 = document.createElement("div");
boxNameDisk1.classList.add('boxNameDisk1');
var div2 = document.createElement("div");
var div3 = document.createElement("div");
div2.id="typeDisk1";


si.diskLayout().then(data =>{
    obj1={
       type:data[1].type,
       mount:"",
       size:data[1].size,
       used:"",
       use:"",
       fileSys:"",
       bytesPerSector: data[1].bytesPerSector,
       firmwareRevision:data[1].firmwareRevision,
       interfaceType:data[1].interfaceType,
       name:data[1].name,
       sectorsPerTrack:data[1].sectorsPerTrack,
       serialNum:data[1].serialNum,
       uuid:"",
       vendor:data[1].vendor
    };

    si.blockDevices().then(data =>{
        obj1.fileSys=data[1].fstype;
        obj1.uuid=data[1].uuid;
     })

     si.fsSize().then(data =>{
        obj1.used=data[1].used;
        obj1.use=data[1].use;
        obj1.mount=data[1].mount;
     })
 
    let sizeDisk = ((obj1.size)/1000000000).toFixed(0);
    div2.innerHTML=obj1.type;
    div3.innerHTML= sizeDisk + "Gb";
    header.appendChild(boxNameDisk1).appendChild(div2).append(div3);
    
    getElem();
})



//var header = document.querySelector("header");
var boxNameDisk2 = document.createElement("div");
boxNameDisk2.classList.add('boxNameDisk2');
var div4= document.createElement("div");
var div5 = document.createElement("div");
div4.id="typeDisk2";

si.diskLayout().then(data =>{
    obj2={
       type:data[2].type,
       mount:"",
       size:data[2].size,
       used:"",
       use:"",
       fileSys:"",
       bytesPerSector: data[2].bytesPerSector,
       firmwareRevision:data[2].firmwareRevision,
       interfaceType:data[2].interfaceType,
       name:data[2].name,
       sectorsPerTrack:data[2].sectorsPerTrack,
       serialNum:data[2].serialNum,
       uuid:"",
       vendor:data[2].vendor
    };
    
    si.blockDevices().then(data =>{
        obj2.fileSys=data[2].fstype;
        obj2.uuid=data[2].uuid;
     })

     si.fsSize().then(data =>{
        obj2.used=data[2].used;
        obj2.use=data[2].use;
        obj2.mount=data[2].mount;
     })

    let sizeDisk = ((obj2.size)/1000000000).toFixed(0);
    div4.innerHTML=obj2.type;
    div5.innerHTML= sizeDisk + "Gb";

    header.appendChild(boxNameDisk2).appendChild(div4).append(div5);
    
    getElem();
})
}


var NameDisk0;
var NameDisk1;
var NameDisk2;

function getElem(){
     NameDisk0 = document.getElementById('typeDisk0');
     NameDisk1 = document.getElementById('typeDisk1');
     NameDisk2 = document.getElementById('typeDisk2');

     NameDisk0.onclick=()=>{ Disk0();}
     NameDisk1.onclick=()=>{ Disk1();}
     NameDisk2.onclick=()=>{ Disk2();}
}

function getElemById(){
    document.getElementById("box").style.display="none";
    document.getElementById("box").style.display="flex";
    var head = document.getElementById("head");
    var mount = document.getElementById("mount");
    var type = document.getElementById("type");
    var size = document.getElementById("size");
    var used = document.getElementById("used");
    var use = document.getElementById("use");
    var fileSys = document.getElementById("fileSys");
    var interfaceType = document.getElementById("interfaceType");
    var serialNum = document.getElementById("serialNum");
    var uuid = document.getElementById("uuid");
    var firmwareRevision = document.getElementById("firmwareRevision");
    var bytesPerSector = document.getElementById("bytesPerSector");
    var sectorsPerTrack = document.getElementById("sectorsPerTrack");
    var vendor = document.getElementById("vendor");
}

function Disk0(){

    getElemById();

    head.innerHTML=obj0.name;
    type.innerHTML=obj0.type;
    mount.innerHTML=obj0.mount;
    size.innerHTML=(obj0.size/1000000000).toFixed(0) + "Gb";
    used.innerHTML=(obj0.used/1000000000).toFixed(0) + "Gb";
    use.innerHTML= ((obj0.size-obj0.used)/1000000000).toFixed(0)+ "Gb";
    fileSys.innerHTML=obj0.fileSys;
    interfaceType.innerHTML=obj0.interfaceType;
    serialNum.innerHTML=obj0.serialNum;
    uuid.innerHTML=obj0.uuid;
    firmwareRevision.innerHTML=obj0.firmwareRevision;
    bytesPerSector.innerHTML=obj0.bytesPerSector;
    sectorsPerTrack.innerHTML=obj0.sectorsPerTrack;
    vendor.innerHTML=obj0.vendor;
    
}


function Disk1(){
  
    getElemById();

    head.innerHTML=obj1.name;
    mount.innerHTML=obj1.mount;
    type.innerHTML=obj1.type;
    size.innerHTML=(obj1.size/1000000000).toFixed(0) + "Gb";
    used.innerHTML=(obj1.used/1000000000).toFixed(0) + "Gb";
    use.innerHTML= ((obj1.size-obj1.used)/1000000000).toFixed(0)+ "Gb";
    fileSys.innerHTML=obj1.fileSys;
    interfaceType.innerHTML=obj1.interfaceType;
    serialNum.innerHTML=obj1.serialNum;
    serialNum.innerHTML=obj1.serialNum;
    uuid.innerHTML=obj1.uuid;
    firmwareRevision.innerHTML=obj1.firmwareRevision;
    bytesPerSector.innerHTML=obj1.bytesPerSector;
    sectorsPerTrack.innerHTML=obj1.sectorsPerTrack;
    vendor.innerHTML=obj1.vendor;

}


function Disk2(){
   
    getElemById();

    head.innerHTML=obj2.name;
    mount.innerHTML=obj2.mount;
    type.innerHTML=obj2.type;
    size.innerHTML=(obj2.size/1000000000).toFixed(0) + "Gb";
    used.innerHTML=(obj2.used/1000000000).toFixed(0) + "Gb";
    use.innerHTML= ((obj2.size-obj2.used)/1000000000).toFixed(0)+ "Gb";
    fileSys.innerHTML=obj2.fileSys;
    interfaceType.innerHTML=obj2.interfaceType;
    serialNum.innerHTML=obj2.serialNum;
    uuid.innerHTML=obj2.uuid;
    firmwareRevision.innerHTML=obj2.firmwareRevision;
    bytesPerSector.innerHTML=obj2.bytesPerSector;
    sectorsPerTrack.innerHTML=obj2.sectorsPerTrack;
    vendor.innerHTML=obj2.vendor;

}



si.fsSize().then(data =>{console.log(data)})

window.onload=()=>{ getDiskInfo(); }

document.getElementById("load").innerHTML="Сканирование дисков...";
