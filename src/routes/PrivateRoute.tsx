import { selectIsLoggedIn } from '../redux/Auth/authSlice';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useAppSelector } from '@/redux/hooks';
interface IPropsPrivate {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IPropsPrivate) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
