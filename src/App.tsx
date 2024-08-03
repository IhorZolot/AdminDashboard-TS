import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './redux/hooks';

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
import { ROUTES } from './config/routes';

const App = () => {
  const dispatch = useAppDispatch();
  const isRefresh = useAppSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.SIGNUP}
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />

          <Route
            path={ROUTES.DASHBOARD}
            element={
              <PrivateRoute>
                <SharedLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path={ROUTES.ORDERS} element={<AllOrdersPage />} />
            <Route path={ROUTES.PRODUCTS} element={<AllProductsPage />} />
            <Route path={ROUTES.SUPPLIERS} element={<AllSuppliersPage />} />
            <Route path={ROUTES.CUSTOMERS} element={<CustomersDataPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
