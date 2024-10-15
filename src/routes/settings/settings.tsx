import { DeviceData } from '../../components/DeviceData/DeviceData.tsx';
import './settings.css';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Inbox, Drafts, BarChart } from '@mui/icons-material';

export const Settings = () => {
    const navigate = useNavigate();
    return (
        <div className="settings-wrapper">
            <div className="settings-header">
                <DeviceData />
            </div>
            <div className="settings-details">
                <Outlet />
            </div>
            <aside className="settings-navigation">
                <h1>Settings</h1>
                <List>
                    <ListItem disablePadding onClick={() => navigate('/settings/theme')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inbox />
                            </ListItemIcon>
                            <ListItemText primary="Theme" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={() => navigate('/settings/homepage')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Drafts />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={() => navigate('/settings/charts')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <BarChart />
                            </ListItemIcon>
                            <ListItemText primary="Charts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </aside>
        </div>
    );
};
