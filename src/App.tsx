import { NavigationComponent } from './components/BottomNavigation.tsx';
import { Outlet } from 'react-router-dom';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="app-container">
                <div className="page-content">
                    <Outlet />
                </div>
                <NavigationComponent />
            </div>
        </ThemeProvider>
    );
}

export default App;
