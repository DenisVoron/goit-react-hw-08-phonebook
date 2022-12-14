import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <StyledEngineProvider injectFirst>
            <App />
          </StyledEngineProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode >
);
