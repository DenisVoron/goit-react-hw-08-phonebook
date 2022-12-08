import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { register } from 'redux/auth/auth-operations';

import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <TextField type="text" name="name" label="Username" variant="standard" />
      </label>
      <label className={css.label}>
        <TextField type="email" name="email" label="Email" variant="standard" />
      </label>
      <label className={css.label}>
        <TextField type="password" name="password" label="Password" variant="standard" />
      </label>
      <Stack className={css.button}>
        <Button variant="contained" type="submit" className={css.button}>
          Register
        </Button>
      </Stack>
    </form>
  );
};