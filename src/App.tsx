import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { Transactions } from './pages/Transactions';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions/>
      </TransactionsProvider>
      <GlobalStyle/>
      <ToastContainer />
    </ThemeProvider>
  );
}