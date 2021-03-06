const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 550,
    // frame: false,

    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // mainWindow.webContents.openDevTools();

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile("index.html");
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", setTimeout(createWindow, 400));
