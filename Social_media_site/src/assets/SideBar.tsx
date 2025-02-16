import { useDisclosure } from '@mantine/hooks';
import classes from '../App.module.css'
import { useState } from 'react';
import {
  IconFlame,
  IconDatabaseImport,
  IconLock,
  IconLogout,
  IconSettings,
} from '@tabler/icons-react';
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
              <IconFlame className={classes.linkIcon} stroke={1.5} />
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Button className={classes.menuButton} variant="default" onClick={open}>
        ☰
      </Button>
    </>
  );
}
