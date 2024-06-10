import 'modern-normalize';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store.js';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        <ToastContainer
          autoClose={1000}
          position="bottom-right"
          theme="colored"
          closeOnClick
        />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
