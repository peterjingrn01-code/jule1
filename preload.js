const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('juleDesktop', {
  onOpenUrl: (callback) => ipcRenderer.on('jule-open-url', (_event, url) => callback(url)),
  platform: process.platform
});
