import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [desktopData, setDesktopData] = useState<DesktopSpecData>();
    const [currentUsage, setCurrentUsage] = useState<OSData>();

    useEffect(() => {
        window.electron.getDesktopParameters().then((params) => setDesktopData(params));
        return window.electron.statisticListener((data) => setCurrentUsage(data));
    }, []);

    return (
        <>
            <p>CPU usage: {currentUsage?.cpuUsage}</p>
            <p>Free memory: {currentUsage?.freeOperatingMemory}%</p>
            <p>
                {desktopData?.cpuModel} {desktopData?.totalMemory} MB {desktopData?.numberOfCores}
            </p>
        </>
    );
}

export default App;
