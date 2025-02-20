import { useDisclosure } from '@mantine/hooks';
import classes from '../App.module.css'
import { useState } from 'react';
import {
  TbFlame,
  TbDatabaseImport,
  TbLock,
  TbLogout,
  TbSettings,
} from 'react-icons/tb';
import { Drawer, Button, DrawerTitle, DrawerContent, DrawerBody} from '@mantine/core';

export default function SideBar() {
  const [active, setActive] = useState('Billing');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        styles={{
          root: {
            position: 'fixed',
            height: 'fit-content',
            left: 0,
            zIndex: 990,
          },
          content: {
            backgroundColor: 'bisque',
            display: 'flex',
            flexDirection: 'column',
          },
          title: {
            marginTop: '5rem',
            marginLeft: 0,
            textAlign: 'center',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          },
          close: {},
        }}
      >
        <DrawerContent>
          <DrawerTitle>Cat Posting</DrawerTitle>
          <DrawerBody>
            <a
              className={classes.link}
              data-active={'Home' === active || undefined}
              href=""
              onClick={(event) => {
                event.preventDefault();
                setActive('Home');
              }}
            >
              <TbFlame className={classes.linkIcon}/>
              <span>Home</span>
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
              <TbLock className={classes.linkIcon}/>
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
              <TbDatabaseImport className={classes.linkIcon}/>
              <span>Create Post</span>
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
              <TbSettings className={classes.linkIcon}/>
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
              <TbLogout className={classes.linkIcon}/>
              <span>Logout</span>
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Button className={classes.menuButton} variant="default" onClick={open}>
        ☰
      </Button>
    </>
  );
}
