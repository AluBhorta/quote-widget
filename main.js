const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 200,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // mainWindow.webContents.openDevTools();
  // mainWindow.webContents.loadURL(url, { extraHeaders: "pragma: no-cache\n" });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// app.on("")
