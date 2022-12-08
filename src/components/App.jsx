import { ProgressBar } from 'react-loader-spinner';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { refreshUser } from "redux/auth/auth-operations";
import { useAuth } from 'hooks';

import css from "./App.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      //contrastText: '#11cb5f',
    },
    secondary: {
      main: '#f44336',
      //contrastText: '#007ac1',
    },
    neutral: {
      main: '#64748B',
      //contrastText: '#11cb5f',
    },
  },
});

const Home = lazy(() => import("../pages/Home"));
const Contacts = lazy(() => import("../pages/Contacts"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));


export function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

  return isRefreshing ? (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass={css.progressBar}
      borderColor='#101719'
      barColor='#51E5FF'
    />
  ) : (
      
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
        <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="/register" element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
          />
          <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
          />
          <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
          />
            </Route>
            
        </Routes>
        </ThemeProvider>
        </Suspense>
  );
}