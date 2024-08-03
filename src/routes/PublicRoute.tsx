import { selectIsLoggedIn } from '../redux/Auth/authSlice';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useAppSelector } from '@/redux/hooks';

interface IPropsPublic {
  children: JSX.Element;
}

const PublicRoute = ({ children }: IPropsPublic) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to={ROUTES.DASHBOARD} />;
};

export default PublicRoute;
