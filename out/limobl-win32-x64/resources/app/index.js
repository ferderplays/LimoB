// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const electron = require('electron');
const path = require('path')

let window;

const createWindow = () => {
  // Create the browser window.
  window = new BrowserWindow({
    width: 1000,
    height: 800,
    show: false,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true,
      javascript: true,
      contextIsolation: true,
      allowRunningInsecureContent: true,
      nodeIntegration: true,
    }
  })

  // window set
  window.loadFile('./src/index.html', { 
    userAgent: 'Chrome'
  })
  window.on('ready-to-show', window.show)
  window.setIcon('./src/assets/limoblogo.png')
  window.maximize()

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on("app/close", () => {
  app.quit()
})

ipcMain.on("app/minimize", () => {
  window.minimize()
})

ipcMain.on("app/maximize", () => {
  window.maximize()
})

ipcMain.on("app/devtools", () => {
  window.webContents.openDevTools()
})

ipcMain.on("app/utilsimpl", () => {
  let iwgt = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Controll panel - LIMO Browser',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  iwgt.loadFile("./src/utils/index.html")
  iwgt.setAlwaysOnTop(true)
})

ipcMain.on("app/discordwidget", () => {
  let dscwgt = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Discord - LIMO Browser',
    autoHideMenuBar: true
  })
  dscwgt.loadURL("https://www.discord.com/app")
  dscwgt.setAlwaysOnTop(true)
})

ipcMain.on("app/instagramwidget", () => {
  let igwgt = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Instagram - LIMO Browser',
    autoHideMenuBar: true
  })
  igwgt.loadURL("https://www.instagram.com/")
  igwgt.setAlwaysOnTop(true)
})

ipcMain.on("app/redditwidget", () => {
  let rwgt = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Reddit - LIMO Browser',
    autoHideMenuBar: true
  })
  rwgt.loadURL("https://www.reddit.com/")
  rwgt.setAlwaysOnTop(true)
})

ipcMain.on("app/steampoweredwidget", () => {
  let spwgt = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Steam Powered - LIMO Browser',
    autoHideMenuBar: true
  })
  spwgt.loadURL("https://store.steampowered.com/")
  spwgt.setAlwaysOnTop(true)
})

ipcMain.on("app/tiktokwidget", () => {
  let ttwgt = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Tiktok - LIMO Browser',
    autoHideMenuBar: true
  })
  ttwgt.loadURL("https://www.tiktok.com/")
  ttwgt.setAlwaysOnTop(true)
})

ipcMain.on("app/netflixwidget", () => {
  let nfwgt = new BrowserWindow({
    width: 800,
    height: 800,
    title: 'Netflix - LIMO Browser',
    autoHideMenuBar: true
  })
  nfwgt.loadURL("https://www.netflix.com/")
  nfwgt.setAlwaysOnTop(true)
})
