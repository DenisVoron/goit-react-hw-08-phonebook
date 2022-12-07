import { useDispatch } from 'react-redux';
//import Box from '@mui/material/Box';
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
        {/*<button type="submit">Log In</button>*/}
        <Stack className={css.buttonLog}>
          <Button variant="contained" type="submit" className={css.buttonLog}>
            Log In
          </Button>
        </Stack>
      </form>

      {/*<Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
        className={css.form}
        
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField label="Email" variant="standard" type="email" name="email" />
        <TextField label=" Password" variant="standard" type="password" name="password" />
        <button type="submit">Log In</button>
      </Box>*/}
    </>
  );
};

//id="standard-basic"
//id="standard-basic"

/** */
//<input type="password" name="password" />
//<input type="email" name="email" />

/**<form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="password" name="password" />
      </label>
      <label className={css.label}>
        Password
        <input type="email" name="email" />
      </label>
      <button type="submit">Log In</button>
    </form> */