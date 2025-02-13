import { useState } from 'react'
import Post from './assets/Post.tsx';
import SideBar from './assets/SideBar.tsx'
import classes from './App.module.css'
import {
  IconFlame,
  IconDatabaseImport,
  IconLock,
  IconLogout,
  IconSettings,
} from '@tabler/icons-react';
import { px } from '@mantine/core';

const dataOptions = [
  { link: '', label: 'Home', icon: IconFlame },
  { link: '', label: 'Security', icon: IconLock },
  { link: '', label: 'Upload Images', icon: IconDatabaseImport },
  { link: '', label: 'Settings', icon: IconSettings },
  { link: '', label: 'Logout', icon: IconLogout },
];


function App() {

  const isMobile = window.screen.width <= 425;

  const [active, setActive] = useState('Billing');

  const options = dataOptions.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      <div>
        <div className={classes.container}>
          {isMobile && <SideBar></SideBar>}
          <div className={classes.navbar}>
            <div className={classes.titleversion}>
              <h1>Cat Posting</h1>
              <h4>v0.0.1</h4>
            </div>
            <div className={classes.navbaroption}>
              {options}
            </div>
          </div>
          <div className={classes.maincontent}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
