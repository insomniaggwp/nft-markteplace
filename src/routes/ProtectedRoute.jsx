import { Navigate } from 'react-router-dom';
import BaseTemplate from '../templates/BaseTemplate';

const ProtectedRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem('auth'));

  return auth?.isLogin ? (
    <BaseTemplate>{children}</BaseTemplate>
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
