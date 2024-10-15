import { NavigationComponent } from './components/BottomNavigation.tsx';
import { Outlet } from 'react-router-dom';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className="app-container">
                    <div className="page-content">
                        <Outlet />
                    </div>
                    <NavigationComponent />
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
