import { lazy } from 'react';

export const AllOrdersPage = lazy(() => import('./AllOrdersPage'));
export const AllProductsPage = lazy(() => import('./AllProductsPage'));
export const AllSuppliersPage = lazy(() => import('./AllSuppliersPage'));
export const CustomersDataPage = lazy(() => import('./CustomersDataPage'));
export const DashboardPage = lazy(() => import('./DashboardPage'));
export const LoginPage = lazy(() => import('./LoginPage'));
export const SignupPage = lazy(() => import('./SignupPage'));
export const NotFound = lazy(() => import('./NotFound'));

export const SharedLayout = lazy(
  () => import('../shared/components/SharedLayout')
);
