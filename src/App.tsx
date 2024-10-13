import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { useStats } from './types/useStats.ts';
import { Chart } from './components/Chart.tsx';

function App() {
    const [desktopData, setDesktopData] = useState<DesktopSpecData>();
    const currentUsage = useStats();
    const cpuUsage = useMemo(() => currentUsage.map((usage) => usage.cpuUsage), [currentUsage]);
    const freeOperatingMemory = useMemo(() => currentUsage.map((usage) => usage.freeOperatingMemory), [currentUsage]);

    useEffect(() => {
        window.electron.getDesktopParameters().then((params) => setDesktopData(params));
    }, [currentUsage]);

    return (
        <>
            <div style={{ width: '540px', height: '220px' }}>
                <Chart data={cpuUsage} />
            </div>
            <Chart data={freeOperatingMemory} />
            <p>
                {desktopData?.cpuModel} {desktopData?.totalMemory} MB {desktopData?.numberOfCores}
            </p>
        </>
    );
}

export default App;
