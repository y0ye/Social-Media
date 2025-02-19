import { useState } from 'react';
import {
  IconBellRinging,
  IconDatabaseImport,
  IconLogout,
  IconSettings,
} from '@tabler/icons-react';
import classes from './NavbarSimple.module.css';
import { useNavigate } from 'react-router-dom';

const data = [
    { link: '', label: 'Home', icon: IconBellRinging },
    { link: 'CreatePost', label: 'Create Post', icon: IconDatabaseImport },
    { link: 'Settings', label: 'Settings', icon: IconSettings },
  ];

export function NewNavAuth() {
  const [active, setActive] = useState('Billing');
  const navigate = useNavigate();

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <div className={classes.header}>
            <img className={classes.logo} src='./src/assets/images/cat.png'></img>
            <h3>Cat Posting</h3>
            <code>v1.0.0</code>
        </div>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="/" className={classes.link} onClick={(event) => {event.preventDefault(); navigate('/');}}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}