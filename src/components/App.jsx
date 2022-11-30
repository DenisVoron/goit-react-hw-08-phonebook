//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


/*import { Section } from './Section/Section'
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Wrapper } from './Wrapper/Wrapper';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';*/

import { Route, Routes, Link } from 'react-router-dom';
import { Layout } from './Layout';
/*import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";*/
//import { getIsLoading, getError } from "redux/contactsSlice";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
console.log(Layout);
//import css from "./App.module.css";


export function App() {

  //const dispatch = useDispatch();

  //const isLoading = useSelector(getIsLoading);
  //const error = useSelector(getError);

    /*useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);*/

  return (
    <>
      
      {/*<nav>
  <Link to="/">Home</Link>
  </nav>*/}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts/>}/>
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