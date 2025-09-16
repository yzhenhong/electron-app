/*
 * @Author: yangzhenhong
 * @Date: 2025-09-16 16:46:56
 * @LastEditors: yangzhenhong
 * @LastEditTime: 2025-09-16 16:48:32
 * @FilePath: \electron-app\main.js
 * @Description: 
 */

const path = require('path')
const { app, BrowserWindow, ipcMain, shell } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  })

  win.loadFile('index.html')
}

// IPC examples
ipcMain.handle('app:get-version', () => app.getVersion())
ipcMain.handle('app:get-path', (event, name) => app.getPath(name || 'userData'))
ipcMain.on('app:open-external', (event, url) => {
  if (typeof url === 'string' && url.startsWith('http')) {
    shell.openExternal(url)
  }
})

app.whenReady().then(() => {
  // Windows 上设置 AppUserModelID 以便通知与任务栏正确显示
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.example.electron-app')
  }
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})