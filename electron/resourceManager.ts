import { BrowserWindow } from 'electron';
import { cpuCount, cpuUsage, freememPercentage, totalmem } from 'os-utils';
import os from 'os';
import { ipcWebContentsSend } from './utils.ts';

const POOL_INTERVAL = 1000;

export const getCpuUsage = () => {
    return new Promise<number>((resolve, reject) => {
        try {
            cpuUsage((data) => resolve(Math.round(data * 100) / 100));
        } catch (e) {
            reject();
            console.log(e);
        }
    });
};

export const getCurrentResourcesData = (mainWindow: BrowserWindow): void => {
    setInterval(async (): Promise<void> => {
        const cpuUsage = await getCpuUsage();
        const freeOperatingMemory = Math.round((1 - freememPercentage()) * 1000) / 10;


        ipcWebContentsSend('statistics', mainWindow.webContents, {
            cpuUsage,
            freeOperatingMemory,
        });
    }, POOL_INTERVAL);
};

export const getDesktopSpecData = (): DesktopSpecData => ({
    cpuModel: os.cpus()[0].model,
    numberOfCores: cpuCount(),
    totalMemory: totalmem(),
});
