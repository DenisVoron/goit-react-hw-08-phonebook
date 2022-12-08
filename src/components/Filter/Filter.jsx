import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, changeFilter } from "../../redux/contacts/contactsSlice";

import css from './Filter.module.css';

export const Filter = () => {

    const contactsFilter = useSelector(getFilter);
    const dispatch = useDispatch();
    const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

    return (
        <label htmlFor="" className={css['inpyt-filter']}>
            <TextField
                className={css.input}
                type="text"
                name="filter"
                value={contactsFilter}
                onChange={changeFieldFilter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                id="outlined-basic"
                label={<SearchIcon />}
                variant="outlined"
               size="small"
            />
        </label>
    );
    
};
Filter.prototype = {
    filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}