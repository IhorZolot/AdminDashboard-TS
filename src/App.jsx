import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DasboardPage from './pages/DasboardPage/DasboardPage';
import AllOrdersPage from './pages/AllOrdersPage/AllOrdersPage';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AllSuppliersPage from './pages/AllSuppliersPage/AllSuppliersPage';
import CustomersDataPage from './pages/CustomersDataPage/CustomersDataPage';

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">D</NavLink>
        <NavLink to="/dashboard">H</NavLink>
        <NavLink to="/orders">M</NavLink>
        <NavLink to="/products">R</NavLink>
        <NavLink to="/suppliers">Q</NavLink>
        <NavLink to="/customers">Y</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DasboardPage />} />
        <Route path="/orders" element={<AllOrdersPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/suppliers" element={<AllSuppliersPage />} />
        <Route path="/customers" element={<CustomersDataPage />} />
      </Routes>
    </>
  );
};

export default App;
