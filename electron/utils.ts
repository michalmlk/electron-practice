import {ipcMain} from "electron";
import WebContents = Electron.WebContents;

export const ipcMainHandle = <Key extends keyof ElectronEventMap>(key: Key, handler: () => ElectronEventMap[Key]) => {
    ipcMain.handle(key, () => handler())
}

export const ipcWebContentsSend = <Key extends keyof ElectronEventMap>(
    key: keyof ElectronEventMap,
    webContents: WebContents,
    payload: ElectronEventMap[Key]) => {
    webContents.send(key, payload)
}