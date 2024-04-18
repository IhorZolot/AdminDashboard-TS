import { Route, Routes } from 'react-router-dom';

import SharedLayout from './shared/components/SharedLayout';
import CustomersDataPage from './pages/CustomersDataPage';
import AllSuppliersPage from './pages/AllSuppliersPage';
import AllProductsPage from './pages/AllProductsPage';
import AllOrdersPage from './pages/AllOrdersPage';
import NotFound from './pages/NotFound';
import DashboardPage from './pages/DashboardPage';
import Login from './modules/login';
import Signup from './modules/login/components/Signup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from './redux/Auth/operations';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="orders" element={<AllOrdersPage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="suppliers" element={<AllSuppliersPage />} />
          <Route path="customers" element={<CustomersDataPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
