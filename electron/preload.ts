import { ipcRenderer, contextBridge } from 'electron';

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
    on(...args: Parameters<typeof ipcRenderer.on>) {
        const [channel, listener] = args;
        return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args));
    },
    off(...args: Parameters<typeof ipcRenderer.off>) {
        const [channel, ...omit] = args;
        return ipcRenderer.off(channel, ...omit);
    },
    send(...args: Parameters<typeof ipcRenderer.send>) {
        const [channel, ...omit] = args;
        return ipcRenderer.send(channel, ...omit);
    },
    invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
        const [channel, ...omit] = args;
        return ipcRenderer.invoke(channel, ...omit);
    },
});

const ipcRenderOn = <Key extends keyof ElectronEventMap>(key: Key, callback: (payload: ElectronEventMap[Key]) => void) => {
    const _callback = (_: Electron.IpcRendererEvent, payload: ElectronEventMap[Key]) => callback(payload);
    ipcRenderer.on(key, _callback);
    return () => ipcRenderer.off(key, _callback);
};

const ipcRenderInvoke = <Key extends keyof ElectronEventMap>(key: Key): Promise<ElectronEventMap[Key]> => ipcRenderer.invoke(key);

contextBridge.exposeInMainWorld('electron', {
    statisticListener: (callback) => ipcRenderOn('statistics', (data: ElectronEventMap['statistics']) => callback(data)),
    getDesktopParameters: () => ipcRenderInvoke('getDesktopParameters'),
} satisfies Window['electron']);
