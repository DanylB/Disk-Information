const path = require('path');
const url = require('url');
const {app,BrowserWindow} = require('electron');


let win = null;

function createWindow(){
    win = new BrowserWindow({
        width:700,
        height:800,
        show:false,
        autoHideMenuBar: true,
       
        webPreferences: {
            nodeIntegration: true
          }
        

    })
    
    win.loadFile('index.html');
    win.show();

    //win.webContents.openDevTools();

   win.on('closed',() =>{
    win = null;
})
}

app.on('ready', createWindow);