import SelectAllIcon from '@mui/icons-material/SelectAll';
import MemoryIcon from '@mui/icons-material/Memory';
import { useEffect, useState } from 'react';
import './DeviceData.css';

export const DeviceData = () => {
    const [data, setDesktopData] = useState<DesktopSpecData>();
    useEffect(() => {
        window.electron.getDesktopParameters().then(setDesktopData);
    }, []);

    return (
        <div className="device-data-wrapper">
            <div className="device-data-header">
                <div className="image" />
            </div>
            <div className="device-data-details">
                <div className="device-data-row">
                    <SelectAllIcon />
                    <span>
                        {data?.cpuModel} ({data?.numberOfCores} cores)
                    </span>
                </div>
                <div className="device-data-row">
                    <MemoryIcon />
                    <span>{data?.totalMemory} MB</span>
                </div>
            </div>
        </div>
    );
};
