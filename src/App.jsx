import { Route, Routes } from 'react-router-dom';
import SharedLayout from './shared/components/SharedLayout';
import CustomersDataPage from './pages/CustomersDataPage';
import AllSuppliersPage from './pages/AllSuppliersPage';
import AllProductsPage from './pages/AllProductsPage';
import AllOrdersPage from './pages/AllOrdersPage';
import DasboardPage from './pages/DasboardPage/';
import NotFound from './pages/NotFound/NotFound';
import Login from './modules/login';
import Signup from './modules/login/components/Signup/Signup';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="/" element={<SharedLayout />}>
          <Route path="dashboard" element={<DasboardPage />} />
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
