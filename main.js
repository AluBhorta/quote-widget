const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 250,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // mainWindow.webContents.openDevTools();

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", setTimeout(createWindow, 400));
