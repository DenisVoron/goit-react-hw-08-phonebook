//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ProgressBar } from 'react-loader-spinner';

//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

/*import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Wrapper } from './Wrapper/Wrapper';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';*/

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from "react-redux"; //, useSelector
import { useEffect,lazy, Suspense } from "react";
import { refreshUser } from "redux/auth/auth-operations";
import { useAuth } from 'hooks';
//import { getIsLoading, getError } from "redux/contactsSlice";
import css from "./App.module.css";

//import Home from "../pages/Home";
//import Contacts from "../pages/Contacts";
//import LoginPage from "../pages/Login";
//import RegisterPage from "../pages/Register";
const Home = lazy(() => import("../pages/Home"));
const Contacts = lazy(() => import("../pages/Contacts"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));


export function App() {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  //const isLoading = useSelector(getIsLoading);
  //const error = useSelector(getError);

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
    </Suspense>
  );
}

//style={{ maxWidth: 200,marginLeft: 'auto',marginRight: 'auto' }}

/**<Section title='Phonebook'>
        <ContactsForm />
        {isLoading && !error && <p className={css.loading}>Request in progress...</p>}
      </Section>
      <Section title='Contacts'>
        <Wrapper>
          <Filter />
          <ContactList />
        </Wrapper>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          draggable
        />
      </Section> */