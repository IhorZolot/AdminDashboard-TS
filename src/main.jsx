import 'modern-normalize';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
          position="bottom-left"
          theme="colored"
          closeOnClick
        />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
