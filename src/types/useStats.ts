import { useEffect, useState } from 'react';

export const useStats = (dataPointCount = 10): OSData[] => {
    const [currentUsage, setCurrentUsage] = useState<OSData[]>([]);

    useEffect(() => {
        return window.electron.statisticListener((data) =>
            setCurrentUsage((prevState) => {
                const _data = [...prevState, data];
                if (_data.length > dataPointCount) {
                    _data.shift();
                }
                return _data;
            })
        );
    }, []);

    return currentUsage;
};
