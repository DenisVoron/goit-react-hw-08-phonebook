import { Navigation } from '../Navigation/Navigation';

import css from './AppBar.module.css';

export const AppBar = () => {
  //const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
     {/*<UserMenu /> : <AuthNav />*/}
    </header>
  );
};