const electronInstaller = require('electron-winstaller');

electronInstaller.createWindowsInstaller({
    appDirectory: 'dist/2048-app-win32-x64',
    outputDirectory: 'dist/installer',
    authors: 'Carlito',
    noMsi: true,
    setupExe: '2048_setup.exe',
    exe: '2048.exe',
    setupIcon: 'icon.png'
})
    .then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })