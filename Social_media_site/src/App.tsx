import { useEffect, useState } from 'react';  // Import useEffect here
import SideBar from './assets/SideBar.tsx';
import classes from './App.module.css';
import {
  setAuth,
  setCurrentUser,
  setFocus,
} from './assets/state';

import { NewNav } from './assets/NewNav.tsx';

function App() {
  const isMobile = window.screen.width <= 520;
  
  useEffect(() => {
    setCurrentUser("");
    setAuth(false);
    setFocus(0);
  }, []);

  return (

    <div className={classes.container}>
      {isMobile && <SideBar />}
      <div className={classes.navbarhome}>
        <NewNav/>
      </div>
      <div className={classes.maincontenthome}>
        <img src="./src/assets/images/catHome.png"></img>
      </div>
    </div>
  );
}

export default App;
