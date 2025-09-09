import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ContentFormPage from './pages/ContentFormPage';
import GlobalLoading from './components/GlobalLoading';

function App() {
  return (
    <BrowserRouter>
      <GlobalLoading />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/content"
          element={
            <ProtectedRoute>
              <ContentFormPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/content/:id"
          element={
            <ProtectedRoute>
              <ContentFormPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
