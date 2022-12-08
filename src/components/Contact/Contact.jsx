import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

import css from './Contact.module.css';

export const Contact = ({ contact }) => {
    
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <>
            <p className={css.contactDescr}>
                {contact.name}: <span>{contact.number}</span>
            </p>
            <IconButton aria-label="delete" size="large" color="secondary" onClick={handleDelete}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </>
    );
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}