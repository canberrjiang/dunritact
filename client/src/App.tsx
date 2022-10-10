import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.scss';
import Navigation from './components/common/Navigation/Navigation';
import RoutesConfig from './components/common/Routes/Routes';



const theme = createTheme();

function App() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
    console.log(isHome);
  }, [location, isHome])

  return (
    < div className={`${isHome ? "bgImage" : ""}`}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Navigation />

        <main>

          {/* Routes */}
          <RoutesConfig />
          {/* End Routes */}

        </main>
        {/* Footer */}

        {/* End footer */}
      </ThemeProvider >
    </div >
  );
}

export default App;
