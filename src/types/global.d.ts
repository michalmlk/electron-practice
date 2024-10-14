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
        ipcRenderer: import('electron').IpcRenderer;
        electron: {
            statisticListener: (callback: (data: OSData) => void) => UnsubscribeFn;
            getDesktopParameters: () => Promise<DesktopSpecData>;
        };
    }

    type ElectronEventMap = {
        statistics: OSData;
        getDesktopParameters: DesktopSpecData;
    };

    type UnsubscribeFn = () => void;
}

export {};
