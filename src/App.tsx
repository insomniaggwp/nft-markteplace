import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccountPage from './pages/CreateAccountPage';
import GlobalLoading from './components/GlobalLoading';
import BaseTemplate from './templates/BaseTemplate';
import HomePage from './pages/HomePage';
import ConnectToWalletPage from './pages/ConnectToWallet';

function App() {
  return (
    <BrowserRouter>
      <GlobalLoading />
      <Routes>
        <Route
          path="/"
          element={
            <BaseTemplate>
              <HomePage />
            </BaseTemplate>
          }
        />
        <Route
          path="/create-account"
          element={
            <BaseTemplate>
              <CreateAccountPage />
            </BaseTemplate>
          }
        />
        <Route
          path="/connect-wallet"
          element={
            <BaseTemplate>
              <ConnectToWalletPage />
            </BaseTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
