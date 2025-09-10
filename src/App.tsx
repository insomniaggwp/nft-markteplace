import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccountPage from './pages/CreateAccountPage';
import GlobalLoading from './components/GlobalLoading';
import BaseTemplate from './templates/BaseTemplate';
import HomePage from './pages/HomePage';
import ConnectToWalletPage from './pages/ConnectToWallet';
import MarketplacePage from './pages/MarketplacePage';
import RankingsPage from './pages/RankingsPage';
import ArtistPage from './pages/ArtistPage';
import NftPage from './pages/NftPage';

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
          path="/marketplace"
          element={
            <BaseTemplate>
              <MarketplacePage />
            </BaseTemplate>
          }
        />
        <Route
          path="/rankings"
          element={
            <BaseTemplate>
              <RankingsPage />
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
        <Route
          path="/create-account"
          element={
            <BaseTemplate>
              <CreateAccountPage />
            </BaseTemplate>
          }
        />
        <Route
          path="/artist"
          element={
            <BaseTemplate>
              <ArtistPage />
            </BaseTemplate>
          }
        />
        <Route
          path="/nft"
          element={
            <BaseTemplate>
              <NftPage />
            </BaseTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
