import {useEffect, useState} from 'react'
import './App.css'

type DesktopSpec = {
    cpuModel: string;
    numberOfCores: number;
    totalMemory: number;
}

type OSData = {
    cpuUsage: number;
    freeOperatingMemory: number;
}

function App() {

    const [desktopData, setDesktopData] = useState<DesktopSpec>();
    const [currentUsage, setCurrentUsage] = useState<OSData>();

    useEffect(() => {
        window.electron.getDesktopParameters().then(params => setDesktopData(params));
        window.electron.statisticListener(data => setCurrentUsage(data));
    }, []);


    return (
        <>
            <p>CPU usage: {currentUsage?.cpuUsage}</p>
            <p>Free memory: {currentUsage?.freeOperatingMemory}%</p>
            <p>{desktopData?.cpuModel} {desktopData?.totalMemory} MB {desktopData?.numberOfCores}</p>
        </>
    )
}

export default App
