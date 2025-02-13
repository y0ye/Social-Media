import { useState } from 'react'
import Post from './assets/Post.tsx';
import SideBar from './assets/SideBar.tsx'
import classes from './App.module.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {
  IconFlame,
  IconDatabaseImport,
  IconLock,
  IconLogout,
  IconSettings,
} from '@tabler/icons-react';
import { px } from '@mantine/core';
import CreatePost from './assets/CreatePost.tsx';

const dataOptions = [
  { link: '', label: 'Home', icon: IconFlame },
  { link: '', label: 'Security', icon: IconLock },
  { link: '', label: 'Upload Images', icon: IconDatabaseImport },
  { link: '', label: 'Settings', icon: IconSettings },
  { link: '', label: 'Logout', icon: IconLogout },
];


function App() {

  const isMobile = window.screen.width <= 520;

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
    <Router>
      <Routes>
        <Route path="/App" element={<App/>}/>
        <Route path="/createPost" element={<CreatePost/>}/>
      </Routes>
      <div>
        <div className={classes.container}>
          {isMobile && <SideBar></SideBar>}
          <div className={classes.navbar}>
            <div className={classes.titleversion}>
              <h1>Cat Posting</h1>
              <h4>v0.0.1</h4>
            </div>
            <div className={classes.navbaroption}>
            <a
              className={classes.link}
              data-active={'Home' === active || undefined}
              href=""
              onClick={(event) => {
                event.preventDefault();
                setActive('Home');
              }}
            >
              <IconFlame className={classes.linkIcon} stroke={1.5} />
              <Link to="/">Home</Link>
            </a>

            <a
              className={classes.link}
              data-active={'Security' === active || undefined}
              href=""
              onClick={(event) => {
                event.preventDefault();
                setActive('Security');
              }}
            >
              <IconLock className={classes.linkIcon} stroke={1.5} />
              <span>Security</span>
            </a>

            <a
              className={classes.link}
              data-active={'Create Post' === active || undefined}
              href=""
              onClick={(event) => {
                event.preventDefault();
                setActive('Create Post');
              }}
            >
              <IconDatabaseImport className={classes.linkIcon} stroke={1.5} />
              <Link to="/createPost">Create Post</Link>
            </a>

            <a
              className={classes.link}
              data-active={'Settings' === active || undefined}
              href=""
              onClick={(event) => {
                event.preventDefault();
                setActive('Settings');
              }}
            >
              <IconSettings className={classes.linkIcon} stroke={1.5} />
              <span>Settings</span>
            </a>

            <a
              className={classes.link}
              data-active={'Logout' === active || undefined}
              href=""
              onClick={(event) => {
                event.preventDefault();
                setActive('Logout');
              }}
            >
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </a>
            </div>
          </div>
          <div className={classes.maincontent}>
            <Post/>
            
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
