const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 1200,
    webPreferences: {
      nodeIntegration: true  // Atenção: para novas versões do Electron, avalie usar contextIsolation
    }
  });

  // Carrega o arquivo da sua aplicação web
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Fechar a aplicação quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
