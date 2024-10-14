import { DeviceData } from '../../components/DeviceData/DeviceData.tsx';
import './settings.css';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Component } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Inbox, Drafts } from '@mui/icons-material';

class ExpandMoreIcon extends Component {
    render() {
        return null;
    }
}

function InboxIcon() {
    return null;
}

function DraftsIcon() {
    return null;
}

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
                </List>
            </aside>
        </div>
    );
};
