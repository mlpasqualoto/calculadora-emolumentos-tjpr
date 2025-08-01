const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1300,
    height: 1200,
    webPreferences: {
      nodeIntegration: true, // Atenção: para novas versões do Electron, avalie usar contextIsolation
      contextIsolation: false,
    },
  });

  // Carrega o arquivo da sua aplicação web
  win.loadFile("pages/escrituras.html");
}

app.whenReady().then(createWindow);

// Fechar a aplicação quando todas as janelas forem fechadas (exceto no macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
