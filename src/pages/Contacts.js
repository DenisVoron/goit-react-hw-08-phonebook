import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "redux/contacts/operations";
//import { getIsLoading, getError } from "redux/contacts/contactsSlice";

import { Container } from '../components/Container/Container'
import { Section } from '../components/Section/Section'
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

//import css from "../App.module.css";

export default function Contacts() {
    const dispatch = useDispatch();

    //const isLoading = useSelector(getIsLoading);
    //const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <Section title='Phonebook'>
                <ContactsForm />
                {/*isLoading && !error && <p className={css.loading}>Request in progress...</p>*/}
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
            </Section>
        </Container>
    )
}