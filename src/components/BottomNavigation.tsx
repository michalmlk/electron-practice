import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from 'react-router-dom';
import { BubbleChart, Settings } from '@mui/icons-material';
import { useState } from 'react';

export const NavigationComponent = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation
            style={{ gridArea: 'footer' }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Statistics" icon={<BubbleChart />} onClick={() => navigate('/')} />
            <BottomNavigationAction label="Settings" icon={<Settings />} onClick={() => navigate('/settings')} />
        </BottomNavigation>
    );
};
