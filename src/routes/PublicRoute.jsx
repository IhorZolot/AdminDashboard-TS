import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/Auth/authSlice';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useAppSelector } from '@/redux/hooks';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to={ROUTES.DASHBOARD} />;
};

export default PublicRoute;
