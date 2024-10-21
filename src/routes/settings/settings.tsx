import { DeviceData } from '../../components/DeviceData/DeviceData.tsx';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Drafts, BarChart } from '@mui/icons-material';
import './settings.css';

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
                <div className="heading">
                    <h2>Settings</h2>
                </div>
                <List>
                    {/*<ListItem disablePadding onClick={() => navigate('/settings/theme')}>*/}
                    {/*    <ListItemButton>*/}
                    {/*        <ListItemIcon>*/}
                    {/*            <Inbox />*/}
                    {/*        </ListItemIcon>*/}
                    {/*        <ListItemText primary="Theme" />*/}
                    {/*    </ListItemButton>*/}
                    {/*</ListItem>*/}
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
