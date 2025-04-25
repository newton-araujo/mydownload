const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  rodarBat: (caminho) => ipcRenderer.send("rodar-bat", caminho),
});
