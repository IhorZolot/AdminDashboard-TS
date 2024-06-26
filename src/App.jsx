import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { refreshThunk } from './redux/Auth/operations';
import { PrivateRoute, PublicRoute } from './routes';
import { selectIsRefresh } from './redux/Auth/authSlice';
import Loader from './shared/components/Loader';
import {
  AllOrdersPage,
  AllProductsPage,
  AllSuppliersPage,
  CustomersDataPage,
  DashboardPage,
  LoginPage,
  NotFound,
  SharedLayout,
  SignupPage,
} from './pages';

const App = () => {
  const dispatch = useDispatch();
  const isRefresh=useSelector(selectIsRefresh)
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? <Loader /> : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignupPage />
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
      </Suspense>
    </>
  );
};

export default App;
