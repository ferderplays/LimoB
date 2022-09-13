// preload.js
const { ipcRenderer, contextBridge } = require('electron')

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
})

const API = {
  window: {
    close: () => ipcRenderer.send("app/close"),
    minimize: () => ipcRenderer.send("app/minimize"),
    maximize: () => ipcRenderer.send("app/maximize"), 
    devtools: () => ipcRenderer.send("app/devtools"),
    utilsimpl: () => ipcRenderer.send("app/utilsimpl"),
    rwidget: () => ipcRenderer.send("app/redditwidget"),
    ttwidget: () => ipcRenderer.send("app/tiktokwidget"),
    nfwidget: () => ipcRenderer.send("app/netflixwidget"),
    dscwidget: () => ipcRenderer.send("app/discordwidget"), 
    igwidget: () => ipcRenderer.send("app/instagramwidget"),
    hpwidget: () => ipcRenderer.send("app/headphoneswidget"),
    spwrwidget: () => ipcRenderer.send("app/steampoweredwidget")
  }
}

contextBridge.exposeInMainWorld("app", API);