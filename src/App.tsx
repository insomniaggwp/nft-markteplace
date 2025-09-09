import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';
import CreateAccountPage from './pages/CreateAccountPage';
import DashboardPage from './pages/DashboardPage';
// import ContentFormPage from './pages/ContentFormPage';
import GlobalLoading from './components/GlobalLoading';
import BaseTemplate from './templates/BaseTemplate';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
