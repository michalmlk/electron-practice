import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Statistics } from './routes/statistics/statistics.tsx';
import { Settings } from './routes/settings/settings.tsx';
import { AdjustTheme } from './routes/settings/settings-tabs/AdjustTheme';
import { AdjustHomepage } from './routes/settings/settings-tabs/AdjustHomepage';
import { AdjustCharts } from './routes/settings/settings-tabs/AdjustCharts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/settings',
                element: <Settings />,
                children: [
                    {
                        path: '/settings/theme',
                        element: <AdjustTheme />,
                    },
                    {
                        path: '/settings/homepage',
                        element: <AdjustHomepage />,
                    },
                    {
                        path: '/settings/charts',
                        element: <AdjustCharts />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message);
});
