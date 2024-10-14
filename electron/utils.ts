import { ipcMain } from 'electron';
import WebContents = Electron.WebContents;
import { getUIPath } from './pathResolver.ts';
import { WebFrameMain } from 'electron';
import { pathToFileURL } from 'url';

export const ipcMainHandle = <Key extends keyof ElectronEventMap>(key: Key, handler: () => ElectronEventMap[Key]) => {
    ipcMain.handle(key, (event) => {
        validateFrame(event.senderFrame);
        return handler();
    });
};

export const isDev = (): boolean => {
    return process.env.NODE_ENV === 'development';
};

export const ipcWebContentsSend = <Key extends keyof ElectronEventMap>(
    key: keyof ElectronEventMap,
    webContents: WebContents,
    payload: ElectronEventMap[Key]
) => {
    webContents.send(key, payload);
};

export const validateFrame = (frame: WebFrameMain) => {
    if (isDev() && new URL(frame.url).host === 'localhost:5173') {
        return;
    }
    if (frame.url !== pathToFileURL(getUIPath()).toString()) {
        throw new Error('Invalid error invocation');
    }
};
