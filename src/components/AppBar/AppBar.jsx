import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

import css from './AppBar.module.css';

export const AppBar = () => {
  //const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
     {/*<UserMenu /> : <AuthNav />*/}
    </header>
  );
};