import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { logIn } from 'redux/auth/auth-operations';

import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <TextField label="Email" variant="standard" type="email" name="email" />
        </label>
        <label className={css.label}>
          <TextField label="Password" variant="standard" type="password" name="password" />
        </label>
        <Stack className={css.buttonLog}>
          <Button variant="contained" type="submit" className={css.buttonLog}>
            Log In
          </Button>
        </Stack>
      </form>
    </>
  );
};