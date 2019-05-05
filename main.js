const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu, ipcMain } = electron;


let mainWindow;

app.on("ready", () => {

   mainWindow = new BrowserWindow();

   mainWindow.loadURL(
       url.format({
          pathname: path.join(__dirname, "main.html"),
          protocol: "file",
          slashes: true
       })
   );

   const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
   Menu.setApplicationMenu(mainMenu);

   ipcMain.on('inputValue', (err, data) => {
      console.log(data);
      err.returnValue("ping");
   });

   //Yeni pencere

   ipcMain.on("new", () => {
      console.log("okey");
   });

});

const mainMenuTemplate = [{

   label : "Dosya",
   submenu : [
      {
         label : "Yeni Öğrenci Ekle"
      },
      {
         label : "Öğrenci sil"
      },
      {
         label : "Çıkış",
         accelerator : process.platform === "darwin" ? "Command + Q" : "CTRL + Q",
         role : "quit"
      }
   ]

}];

if (process.platform === "darwin") {

   mainMenuTemplate.unshift({
      label : app.getName(),
      role : "TODO"
   })

}