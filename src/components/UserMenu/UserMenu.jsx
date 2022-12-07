import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button variant="outlined" size="small" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};