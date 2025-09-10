import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccountPage from './pages/CreateAccountPage';
import DashboardPage from './pages/DashboardPage';
import GlobalLoading from './components/GlobalLoading';
import BaseTemplate from './templates/BaseTemplate';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <GlobalLoading />
      <Routes>
        <Route
          path="/"
          element={
            <BaseTemplate>
              <DashboardPage />
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
          path="/homepage"
          element={
            <BaseTemplate>
              <HomePage />
            </BaseTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
