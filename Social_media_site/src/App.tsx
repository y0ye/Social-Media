import { useState} from 'react';  // Import useEffect here
import SideBar from './assets/SideBar.tsx';
import classes from './App.module.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import {
  IconLock,
  IconLogout,
} from '@tabler/icons-react';

import {
  setAuth,
  setCurrentUser,
} from './assets/state';

import AppRoutes from './routes.tsx';

function App() {
  const isMobile = window.screen.width <= 520;
  const [active, setActive] = useState('Billing');
  setCurrentUser("");
  setAuth(false);

  return (

        <div className={classes.container}>
          {isMobile && <SideBar />}
          <div className={classes.navbarhome}>
            <div className={classes.titleversion}>
              <h1>Cat Posting</h1>
              <h4>v0.0.1</h4>
            </div>
            <div className={classes.navbaroption}>
              <a
                className={classes.link}
                data-active={'Signup' === active || undefined}
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActive('Signup');
                }}
              >
                <IconLock className={classes.linkIcon} stroke={1.5} />
                <Link to="/signup">Signup</Link>
              </a>

              <a
                className={classes.link}
                data-active={'Login' === active || undefined}
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActive('Login');
                }}
              >
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <Link to="/login">Login</Link>
              </a>
            </div>
          </div>
        </div>
  );
}

export default App;
