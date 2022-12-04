//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


/*import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Wrapper } from './Wrapper/Wrapper';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';*/

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from "react-redux"; //, useSelector
import { useEffect } from "react";
import { refreshUser } from "redux/auth/auth-operations";
//import { getIsLoading, getError } from "redux/contactsSlice";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
//import css from "./App.module.css";


export function App() {

  const dispatch = useDispatch();

  //const isLoading = useSelector(getIsLoading);
  //const error = useSelector(getError);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />}/>
        </Route>
      </Routes>
    </>
  
  );
}



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