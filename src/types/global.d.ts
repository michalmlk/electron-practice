declare global {
    interface OSData {
        cpuUsage: number;
        freeOperatingMemory: number;
    }

    interface DesktopSpecData {
        cpuModel: string;
        numberOfCores: number;
        totalMemory: number;
    }

    interface Window {
        ipcRenderer: import('electron').IpcRenderer
        electron: {
            statisticListener: (callback: (data: OSData) => void) => void,
            getDesktopParameters: () => Promise<DesktopSpecData>,
        }
    }
}

export {}