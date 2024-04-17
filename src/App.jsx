import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import SharedLayout from './shared/components/SharedLayout';
import CustomersDataPage from './pages/CustomersDataPage';
import AllSuppliersPage from './pages/AllSuppliersPage';
import AllProductsPage from './pages/AllProductsPage';
import AllOrdersPage from './pages/AllOrdersPage';
import NotFound from './pages/NotFound';
import DashboardPage from './pages/DashboardPage';
import Login from './modules/login';
import Signup from './modules/login/components/Signup';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
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
