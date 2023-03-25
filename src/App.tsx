import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Layout } from './components';
import RoutePaths from './Routes';
import { useTheme } from './theme';

function App() {
   const { theme } = useTheme();
   return (
      <ThemeProvider theme={theme}>
         <Layout>
            <RoutePaths />
         </Layout>
      </ThemeProvider>
   );
}

export default App;
