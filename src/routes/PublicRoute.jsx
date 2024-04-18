import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/Auth/authSlice';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PublicRoute;
