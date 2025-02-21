const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 1200,
    webPreferences: {
      nodeIntegration: true, // Atenção: para novas versões do Electron, avalie usar contextIsolation
      contextIsolation: false
    }
  });

  // Carrega o arquivo da sua aplicação web
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Escuta o evento de impressão vindo do renderer
ipcMain.on('print-window', (event) => {
  const win = BrowserWindow.getFocusedWindow();
  win.webContents.print({
    silent: false,           // Exibe a caixa de diálogo de impressão
    printBackground: true    // Garante que os backgrounds sejam impressos
  }, (success, failureReason) => {
    if (!success) console.log('Erro na impressão:', failureReason);
  });
});

// Fechar a aplicação quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
